import React from "react";
import styles from './HeroBanner.module.css'
export function HeroBanner({ heroBg, lights }) {
    return (
        <>
            <div className={styles.imgStack}>
                <div className={styles.lightsStack}>
                    <img className={styles.lights} src={lights} />
                    <img className={styles.lights} src={lights} />
                </div>
            </div>
        </>
    );
}
