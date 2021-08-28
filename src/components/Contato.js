import React from 'react';
import '../App.css';
import './Contato.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='contato' id='contato'>
            <div className='card-contato'>
                <p>CONTATO</p>
            </div>
            <div class="contato-container">
                <p className="title">Caso queira conversar, entre em contato comigo</p><br/>
                <p>WhatsApp - (21) 96418-3013</p><br/>
                <p>Instagram - @luizfeleal</p><br/>
                <p>Linkedin - Luiz Felipe Leal de Araujo</p><br/>
                <p>Email - felipelearaujo@gmail.com</p><br/>
            </div>
        </div>
    )
}

export default HeroSection;
