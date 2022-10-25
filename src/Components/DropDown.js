import React, { useState } from 'react';

 //on a utilisé les props pour récupérer les données de dropdown
function DropDown(props) {

    // l'etat initial de DropDown = False = close
    const [toggleDropdown, setToggleDropdown] = useState(false)

    // dans cette function de handleDropdown on a une methode setToggleDropdown qui a responsable sur etat initial 
    function handleDropdown() {
        setToggleDropdown(!toggleDropdown);
    }

    return (
        // block pour encadre les données avec l'utilisation de la conditon d'event OnClick pour déclencher action de la fonction handleDropdown
        <div className='dropdown test'>
            <div className='dropdown-header'>
                <p>{props.title}</p>
                {toggleDropdown ? <i onClick={handleDropdown} className="rotate1 fa fa-solid fa-angle-up"></i> : 
                <i onClick={handleDropdown} className="rotate2 fa fa-solid fa-angle-down"></i>}
            </div>
            {toggleDropdown && <div className='dropdown-body'>
                 <p>{props.text}</p>

            </div>}
            
        </div> 
        
    );
    
}

export default DropDown;