import React from 'react' 
import './14animacionesJs.css'

class AnimacionesJs extends React.Component {


    render() { 
             
        
        return(
            
            <div >
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">                
                    <div className = "contenedorAnimacionesJs">
                        <div className = "animacionesJs" id= "objeto" onAnimationEnd = {() => document.getElementById("objeto").className = "adiosito" }> esta animacion cambia </div>                                      
                    </div>
                    <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Animaciones con javascript<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Animaciones con javascript<i className="material-icons right">close</i></span>
                    <p>A veces queremos encadenar animaciones, queremos que una vez terminada una animacion empiece una nueva</p>
                    <p>primero creamos las animaciones que necesitemos</p>
                    <p>ahora debemos detectar el fin de una animación con javascript, para detectar con js un objeto, la forma mas sencilla es poniendole un id al objeto que queremos oir</p>
                    <p> const $cuadrado = document.getElementById('cuadrado')</p>
                    <p>$cuadrado.addEventListener(nombre del evento, que hacer cuando ocurra el evento)</p>
                    <p>un evento que se ejecuta infinite no tiene fin, entonces no se puede oir el fin de la animación</p>
                    <p> $cuadrado.addEventListener(animationend, (event) => if (event.animationName === 'nombreDeAnimacion') => $objeto.style.animationName = 'siguienteAnimacion'; $objeto.style.animationDuration = '3s' )</p>
                    <p>Podemos escuchar los eventos animationstart, animationiteration o animationend</p>
                    </div>                    
                </div>   
        </div>
        )   
        }   
}

export default AnimacionesJs