import React from 'react' 
import './clase32.css'
import TransitionGroup from 'react-addons-css-transition-group'
import foto2 from '../img/imagen.jpg'


class AnimacionReact extends React.Component {

    state = {
        foto: 'https://k42.kn3.net/0EB5C4B68.jpg'
    }

    handleClick = () => { 
        this.setState(
            { foto: foto2}
        )
    }


    render() { 
             
        
        return(
            
            <div >
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">                
                    <div className = "contenedorTransitionGroup">
                        <div className = "TransitionGroup" id= "objeto" onAnimationEnd = {() => document.getElementById("objeto").className = "adiosito" }> esta animacion cambia </div>                                      
                    </div>
                    <TransitionGroup
                        transitionName = "fade"
                        transitionEnterTimeout = {1000}
                        transitionLeaveTimeout = {1000}
                    >
                    <img className="activator" src={this.state.foto} className="fondo" key = {this.state.foto}/>
                    </TransitionGroup>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Animaciones con react transition group<i className="material-icons right">more_vert</i></span>
                    <p><button href="#" onClick = {this.handleClick}>This is a link</button></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Animaciones con react transition group<i className="material-icons right">close</i></span>
                    <p>debemos instalar la libreria npm install react-transition-group --save</p>
                    <p>importamos al componente: import TransitionGroup from 'react-addons-css-transition-group'</p>
                    <p>Luego ponemos entre las etiquetas TransitionGroup> el objeto que vamos a modificar</p>
                    <p>las props de TransitionGroup son: transitionName ="fade"</p>
                    <p>fade es una animación que creamos en css</p>
                    <p>transitionEnterTimeout = 1000}
                        transitionLeaveTimeout = 1000}</p>
                        <p>debemos configurar en css el estado incial de entrada y salida de entrada y el estado de inicial de salida y final de salida</p>
                    </div>                    
                </div>   
        </div>
        )   
        }   
}

export default AnimacionReact