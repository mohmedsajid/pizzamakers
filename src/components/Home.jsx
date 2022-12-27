/* Suparno Karmakar */
import React from 'react';
import HomeSlider from './HomeSlider/HomeSlider';
import HomeDishPromotion from './HomeDishPromotion/HomeDIshPromotion';
import HomeProducts from './HomeProducts/HomeProducts';


export default function Home(props){
    return (
        <section className='slider'>
            <HomeSlider/>
            <HomeDishPromotion/>
            <HomeProducts/>
        </section>
    )
}