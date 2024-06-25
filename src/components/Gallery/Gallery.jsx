import React, { useRef, useState, useEffect } from "react";
import ImageDialog from '../ImageDialog/ImageDialog'
import kitchen1 from '../../assets/images/kitchen-1.jpg'
import kitchen2 from '../../assets/images/kitchen-2.jpg';
import bathroom1 from '../../assets/images/bathroom-1.jpg'
import styles from './Gallery.module.css'
import { getPosts, urlFor } from "../../client";

const Project = ({ src, dialogRef, setDialogImg }) => {
    const handleGallery = (src) => {
        dialogRef.current?.showModal();
        setDialogImg(src);
        console.log(dialogRef.current?.open)
    }

    return (<a onClick={() => handleGallery(src)} className={styles.projectImg}><img src={src} /></a>)
}

export function Gallery() {
    const [dialogImg, setDialogImg] = useState(null);
    const dialogRef = useRef(null);
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getPosts();
                setProjects(data);
                setFilteredProjects(data); 
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        if (filter != '') {
            setFilteredProjects(projects.filter(x => x.category === filter));
        } else {
            console.log(projects)
            setFilteredProjects(projects);
        }
    }, [filter]);

    const handleFilter = (givenFilter) => {
        if (filter === givenFilter) {
            setFilter('')
        } else {
            setFilter(givenFilter);
        }
        console.log(filter == givenFilter)
    }

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.gallery}>
                <button className={styles.button} onClick={() => handleFilter('basement')}>Basement / 地下室 </button>
                <button className={styles.button} onClick={() => handleFilter('bathroom')}>Bathrooms / 卫生间</button>
                <button className={styles.button} onClick={() => handleFilter('kitchen')}>Kitchens / 厨房</button>
                <button className={styles.button} onClick={() => handleFilter('other')}>Others  / 其他</button>
                {console.log(filteredProjects)}
                {filteredProjects.map((x, index) => (
                    <Project key={index} src={urlFor(x.mainImage)} dialogRef={dialogRef} setDialogImg={setDialogImg} />
                ))}
                <ImageDialog ref={dialogRef} dialogImg={dialogImg} />
            </div>
        </div>
    );
}
