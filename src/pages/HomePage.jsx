import React from 'react'
import { HeroBanner } from '../components/HeroBanner';
import { Gallery } from '../components/Gallery';
import heroBg from '../assets/images/hero-bg.png';
import lights from '../assets/images/lights.png';
import styles from './HomePage.module.css'

function HomePage() {
    return (
        <div className='layout'>
            <HeroBanner heroBg={heroBg} lights={lights} />
            <Gallery />
        </div>
    );
}

export default HomePage
