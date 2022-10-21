import React from 'react'
import {Link} from 'react-router-dom';
import "../Styles/Erreur_404.css";

function Erreur_404() {
  return (
    <div className='pagE404'>
        <div className='block_number'>
             <h1 className='number'>404</h1>
        </div>

        <div className="text_404">
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="link_home" to='/'> Retourner sur la page d’accueil </Link>
        </div>

    </div>
  )
}
export default Erreur_404