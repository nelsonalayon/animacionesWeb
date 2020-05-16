import React from 'react';
import './4transformacion.css';

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
                <div className = "contenedor">
                    <div className = "pelota2 b"> mundo </div>
                    <div className = "pelota2 a"> hola  </div>
                </div>
                <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Transiciones de interacción<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Para animar varios objetos debemos meter los objetos a animar dentro de un contenedor que perciba el evento</p>
                <p>un ejemplo es .contenedor:hover .bola que significa que pasando el mouse sobre el objeto contenedor se activen las animaciones de .bola</p>
                <p>para que los objetos se animen distintos se crean dos clases distintas</p>
                <p></p>
                
                </div>
            </div>
        
      </div>
    );}
  }
  
  export default sintaxis;