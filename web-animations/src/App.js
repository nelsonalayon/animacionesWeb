import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Clase3 from './clases/3SintaxisTransformaciones'
import Clase4 from './clases/4transformacion'
import Clase5 from './clases/5transformaciones'
import Clase11 from './clases/11Sintaxisanimaciones'

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
      
      
     
    </div>
  );
}

export default App;
