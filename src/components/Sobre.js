import React from 'react';
import '../App.css';
import './Sobre.css';

function Sobre() {
    return (
        <div className='sobre-container' id="sobre">
            <div className='card-sobre'>
                <p> SOBRE</p>
                </div>
            <div className="box">
                <div className='image'>
                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQEkhZUTYi1zzQ/profile-displayphoto-shrink_800_800/0/1610388701458?e=1635379200&v=beta&t=0ZQM8jMr7-sIm6Qs-F9ddx5cBIDPDoZZMLCLGZaQmNQ' alt='alguma coisa' />
                </div>
                <div className='text'>
                    <h1>LUIZ FELIPE LEAL</h1><br/>
                    <p>Programador e desenvolvedor júnior, com conhecimento em ReactJs, NodeJs, Bootstrap e Jquery.</p><br/>
                    <p>Tenho facilidade em aprender e vivo em busca de conhecimento, e aprimoramento</p>
                </div>
                
            </div>
        </div>
    )
}

export default Sobre;