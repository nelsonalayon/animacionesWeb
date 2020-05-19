import React from 'react'
import './12curvaDeBezier.css'


function CurvaVesier() {
    return (
        <div >
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                <div className = "contenedorbezier1">
                    <div className = "sinBezier"> animación lineal </div>                   
                </div>
                <div className = "contenedorbezier2">
                    <div className = "conBezier"> curva bezier </div>                   
                </div>
                <img className="activator" src="https://k42.kn3.net/0EB5C4B68.jpg"/>
                </div>
                <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Curva de Bezier<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Curva de Bezier<i className="material-icons right">close</i></span>
                <p>Las animaciones por defecto vienen configurada</p>
                <p>animation-time-function:ease;</p>
                <p>Tambien con este atributo podemos animar por pasos</p>
                <p>animation-time-function: steps(Numero de frames)</p>
                <p>y tambien tenemos la curva de bezier</p>
                <p>animation-timing-function:cubic-bezier(1, 1, 1, 1)</p>
                <p>si queremos configurar la curva de bezier sin complicarnos mucho podemos buscar por internet paginas que hacen la curva de bezier por nosotros</p>
                
                </div>
            </div>
        
      </div>
    )
}

export default CurvaVesier