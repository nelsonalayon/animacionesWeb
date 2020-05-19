import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Clase3 from './clases/3SintaxisTransformaciones'
import Clase4 from './clases/4transformacion'
import Clase5 from './clases/5transformaciones'
import Clase11 from './clases/11Sintaxisanimaciones'
import Clase12 from './clases/12curvaDeBezier'
import Clase13 from './clases/13animacionesMultiples'
import Clase14 from './clases/14animacionesJs'
import Clase15 from './clases/15willchange'
import Clase16 from './clases/16elementAnimate'
import Clase17 from './clases/17controlarAnimaciones'
import Clase32 from './clases/clase32'


function App() {
  return (
    <div className="row">
      <div className="col l4 s1">
          <Clase3 />
      </div>

      <div  className="col l4 s1">
         <Clase4 />
      </div>
 
      <div  className="col l4 s1">
         <Clase5 />
      </div>

      <div className = "col l4 s1">
        <Clase11/>
      </div>

      <div className = "col l4 s1">
        <Clase12/>
      </div>
      <div className = "col l4 s1">
        <Clase13/>
      </div>  

      
      <div className = "col l4 s1">
        <Clase14/>
      </div>     

      <div className = "col l4 s1">
        <Clase15/>
      </div> 

      <div className = "col l4 s1">
        <Clase16/>
      </div>   
      
      <div className = "col l4 s1">
        <Clase17/>
      </div>  

      <div className = "col l4 s1">
        <Clase32/>
      </div>  
     
    </div>
  );
}

export default App;
