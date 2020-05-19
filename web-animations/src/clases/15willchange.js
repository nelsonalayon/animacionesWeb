import React from 'react' 
import './15willchange.css'

class WillChange extends React.Component {


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
                    <span className="card-title activator grey-text text-darken-4">Will change<i className="material-icons right">more_vert</i></span>
                    <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target= "blank">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Will change<i className="material-icons right">close</i></span>
                    <p>podemos revisar con el inspector de propiedades la velocidad de nuestras animaciones</p>
                    <p>dentro de la consola en los tres puntos verticales podemos ver animations o rendering</p>
                    <p>en rendering le ponemos paint flashing y nos colorea cuando el navegador redibuja un objeto</p>
                    <p>layer borders muestra los bordes de todos los objetos</p>
                    <p>fps meter muestra los fotogramas por segundo</p>
                    <p>en animations se despliega una pestaña y muestra las animaciones de la pagina, podemos modificar las propiedades a las animaciones, ejecutar con cuidado porque se puede bloquear la pagina</p>
                    <p>Si queremos que un objeto no se redibuje ponemos la propiedad willchange</p>
                    <p>will-change: opacity, transform. Las transformaciones estan optimizados</p>
                    <p>en el link podemos ver las propiedades animables. todo lo que tenga medidas se puede animar </p>
                    </div>                    
                </div>   
        </div>
        )   
        }   
}

export default WillChange