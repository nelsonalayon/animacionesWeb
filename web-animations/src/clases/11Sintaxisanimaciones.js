import React from 'react'
import './11Sintaxisanimaciones.css'

class Animaciones extends React.Component {
    render() {
        return(
            <div >
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                <div className = "contenedorCubitoVerde">
                    <div className = "cubitoVerde"> hola mundo </div>                   
                </div>
                <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">animaciones por keyframes<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">animaciones por keyframes<i className="material-icons right">close</i></span>
                <a>Primeo debemos ponerle un nombre a la animacion, luego el tiempo, luego definimos que queremos hacer</a>
                <a>animation-name: nombre; animation-duration: 1s;</a>
                <a>@keyframes nombre: from to, 0% 100% y entre llaves ponemos la propiedad a animar</a>
                <a>animation-delay: 1s; cuanto tiempo demora en arrancar una animación</a>
                <a>animation-iteration-count: 2; las veces que se va a repetir la animación, puede ponerse infinite</a>
                <a>animation-timing-function: ease; la aceleración de la animacion: ease, ease-in, linear, cubic-bezier</a>
                <a>animation-direction: normal; dirección de la animación, puede ser reverse o alternate</a>

                <a>animation-fill-mode: forewards;valor final de la animación forewards: ultimo fotograma</a>
                <a>animation-play-state: running; si queremos que la animacion fluya o este parada: paused: animacion pausada</a>
                
                </div>
            </div>
        
      </div>
        )
    }
}

export default Animaciones