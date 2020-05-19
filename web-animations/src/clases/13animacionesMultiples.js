import React from 'react'
import './13animacionesMultiples.css'

function animacionesMultiples() {
    return(
        <div >
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">           
            <div className = "contenedorBolaAnimada">
                <div className = "bolaAnimada"> <p>animacion rebota y desplaza</p>  </div>                   
            </div>
            <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
            </div>
            <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Múltiples animaciones<i className="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Múltiples animaciones<i className="material-icons right">close</i></span>
            <p>Podemos hacer varias animaciones, y en la propiedad animation-name ponemos las animaciones separadas por coma</p>
            <p>animation-name: primeraAnimación, segundaAnimación; </p>
            <p>Y las demás configuraciónes para animaciones tambien separamos las propiedades por coma. Si solo dejamos una sola propiedad, todas las animaciones tomaran esa propiedad</p>
            <p>animation-timing-function:ease, cubic-bezier(1, 1, 1 ,1);</p>
            <p>Y, por supuesto, creamos las animaciones que necesitemos</p> 
            <p>@keyframes primeraAnimación, @keyframes segundaAnimación</p>

            
            </div>
        </div>
    
  </div>
    )
} 


export default animacionesMultiples