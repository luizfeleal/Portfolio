import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards' id='portfolio'>
            <div className='portfolio'>
                <p>PORTFÓLIO</p>
            </div>
            <div className="title">
                <h1>Alguns dos meus serviços</h1>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="LOJA VIRTUAL"
                        label='Marketplace'
                        path='/services'
                        />
                        <CardItem 
                        src='https://images.pexels.com/photos/7618405/pexels-photo-7618405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="SITE DE NOTICIAS"
                        label='Notícias'
                        path='/services'
                        />
                        <CardItem 
                        src='https://images.pexels.com/photos/7689286/pexels-photo-7689286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="LANDING PAGE"
                        label='Informações'
                        path='/services'
                        />
                        <CardItem 
                        src='https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="RESTAURANTE"
                        label='Comida'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
