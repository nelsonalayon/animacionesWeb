import React from 'react';
import './5transformaciones.css';

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
                <div className = "contenedorTransformaciones">
                    <div className = "bola b1"> mundo </div>
                    <div className = "bola a1"> hola  </div>
                </div>
                <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Sintaxis de transformaciones<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Sintaxis de transformaciones<i className="material-icons right">close</i></span>
                <p>Transform: nos permite escalar, sesgar o rotar un elemento</p>
                <p>transform:rotate(deg) skew(deg) translate scale(0=0% 1=100%)</p>
                <p>rotate: se puede rotar en el eje y x o z, cuando se gira en el eje x, y o z </p>
                <p>si queremos rotar en los 3 ejes podemos usar rotate3d(x, y, z, deg)</p>
                <p>transform: translate(x , y) mover un objeto a cualquier lado</p>
                <p>transform: translateZ(px) tambien se puede mover hacia adelante o hacia atras, para que funciones debemos poner:</p>
                <p>perspective: que tan lejos ponemos el punto de fugo (px) se pone en body</p>
                <p>perspective-origin: en donde ponemos el punto de fuga(top bottom left right)</p>
                <p>perspective-origin: x y</p>
                <p>transform:translate3d(x, y, z) se mueve el objeto en los 3 ejes, pero hay que darle perspective al body</p>
                <p>transform: scale(x, y) 1 = 100%, 2 = 200%</p>
                <p>transform: skew(x, y)</p>
                <p>el punto de origen de todas las transformaciones es el centro de la pagina, podemos modificarlo con</p>
                <p>transform: origin 50% 50% esta propiedad se pone sobre el mismo objeto</p>
                </div>
            </div>
        
      </div>
    );}
  }
  
  export default sintaxis;