import React from 'react';
import '../.././App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Sobre from '../Sobre'
import Contato from '../Contato'


function Home () {
    return (
        <>
            <HeroSection />
            <Sobre />
            <Cards />
            <Contato />

        </>
    )
}

export default Home