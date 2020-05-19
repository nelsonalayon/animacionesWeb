import React from 'react' 
import './17controlarAnimaciones.css'

class elementAnimate extends React.Component {


    render() { 
             
        
        return(
            
            <div >
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">                
                    <div className = "contenedorBolaControlada">
                        <div 
                            className = "bolaControlada" 
                            id= "controlPorJs" onAnimationEnd = {() => document.getElementById("controlPorJs").animate([{transform: 'translateX(0)' }, { transform: 'translateX(400px)'}], {duration: 2000, direction: 'alternate', iterations: Infinity, } )}> esta animacion cambia </div>                                      
                    </div>

                        <button className = "boton" id = "play"  ><h1>play</h1></button>
			            <button className = "boton" id = "pause"><h1>pause</h1></button>
			            <button className = "boton" id = "reverse"><h1>reverse</h1></button>
			            <button className = "boton" id = "stop"><h1>stop</h1></button>
                        
                    <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Controlar Animaciones<i className="material-icons right">more_vert</i></span>
                    <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target= "blank">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Controlar Animaciones<i className="material-icons right">close</i></span>
                        <p>
                                                                                                                                        
                        </p>
                    </div>                    
                </div>   
        </div>
        )   
        }   
}

export default elementAnimate