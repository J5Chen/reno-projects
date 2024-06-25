import React, { useEffect, useRef, forwardRef } from 'react'

const ImageDialog = forwardRef(function ImageDialog({ dialogImg }, ref) {
    useEffect(() => {
        const handleClickOutside = (e) => {
            console.log(e.target.name)
            const dialogDimensions = ref.current.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            )  {
                console.log('closing');
                ref.current.close();
                console.log(ref.current.open)
            }
        };
        ref.current.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref])
    return (
        <dialog ref={ref}>
            <img src={dialogImg} />
        </dialog>
    )
})

export default ImageDialog