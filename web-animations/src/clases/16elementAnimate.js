import React from 'react' 
import './16elementAnimate.css'

class elementAnimate extends React.Component {


    render() { 
             
        
        return(
            
            <div >
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">                
                    <div className = "contenedorElementAnimate">
                        <div className = "elementAnimate" id= "casa" onAnimationEnd = {() => document.getElementById("casa").animate([
                                                                                                                                        {transform: 'scale(1)' },
                                                                                                                                         { transform: 'scale(2)'}
                                                                                                                                    ], 
                                                                                                                                    {duration: 1000, 
                                                                                                                                    direction: 'alternate', 
                                                                                                                                    iterations: Infinity, } )}> esta animacion cambia </div>                                      
                    </div>
                    <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Element Animate<i className="material-icons right">more_vert</i></span>
                    <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target= "blank">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Element Animate<i className="material-icons right">close</i></span>
                    <p>const objeto = document.getElementById('pelota')</p>
                    <p>objeto.animate([keyframes entre llaves ponemos from... to... pero sin las palabras from to, solo la propiedad], entre llaves ponemos las opciones duration: 1, delay: 1, direction: 'reverse alternate normal', easing: 'linear', iteration: fill: 'forwards', iterationStart: donde empiezo la animacion endDelay, )</p>
                    </div>                    
                </div>   
        </div>
        )   
        }   
}

export default elementAnimate