import React from 'react';
import './3sintaxisTransformaciones.css';

import M from "materialize-css";


class sintaxis extends React.Component {


    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
    return (
      <div >
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                <div className = "pelota">
                </div>
                <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Sintaxis de transiciones<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>transitions-property : que propiedad vamos a animar</p> 
                <p>transitions-duration : cuanto va a durar la animación</p>
                <p>transitions-timing-function: ease, ease-in, ease-out</p>
                <p>transition-delay: el tiempo que dura en empezar la animación</p>
                <p>Para ver una animación le ponemos una pseudoclase :hover para que al pasar el mouse por encima el objeto haga la animacion</p>
                <p>transition: que propiedad, cuanto tiempo, cuanto delay, aceleración</p>
                
                </div>
            </div>

        <h1></h1>
        <p>transition duration, delay, property, timing-function </p>
        
      </div>
    );}
  }
  
  export default sintaxis;