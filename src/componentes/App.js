import React, { Component } from 'react';
import '../css/App.css';
import Header from "./Header";
import FormularioGasto from './Formulario';
import Listado from "./Listado"

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
        presupuesto:'',
        restante:'',
        gastos:{}
   }
 }

agregarGasto = gasto =>{
  //tomar una copia del state actual
     const gastos = {...this.state.gastos};
     

  //agregar el gasto al objeto del state
    gastos[`gastos${Date.now()}`]= gasto;
  
  //ponerlo en el state
    this.setState({
      gastos:gastos
    });
  }

  render() {
    return (
     <div className="App container">
     <Header
     titulo="Gasto Semanal"/>
        <div className='contenido-principal contenido'>
          <div className='row'>
            <div className='one-half column'>
                <FormularioGasto
                 agregarGasto={this.agregarGasto}
                />
            </div>
            <div className='one-half column'>
              <Listado
                gastos={this.state.gastos}
              />
            </div>
          </div>
        </div>
     </div>
    );
  }
}

export default App;
