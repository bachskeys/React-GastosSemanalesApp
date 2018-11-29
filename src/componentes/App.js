import React, { Component } from 'react';
import '../css/App.css';
import Header from "./Header";
import FormularioGasto from './Formulario';
import Listado from "./Listado";
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from "./ControlPresupuesto";  

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
        presupuesto:'',
        restante:'',
        gastos:{}
   }
 }
componentDidMount(){
  this.obtenerPresupuesto();
}
obtenerPresupuesto = () =>{
  let presupuesto = prompt('cual es el presupuesto?');
  let resultado = validarPresupuesto(presupuesto);
  if(resultado){
    this.setState({
      presupuesto:presupuesto,
      restante:presupuesto
    })  
  }else{
    this.obtenerPresupuesto();
  }
}

agregarGasto = gasto =>{
  //tomar una copia del state actual
     const gastos = {...this.state.gastos};
     

  //agregar el gasto al objeto del state
    gastos[`gastos${Date.now()}`]= gasto;
    //restar al presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);
  
  //ponerlo en el state
    this.setState({
      gastos:gastos
    });
  }
restarPresupuesto = cantidad =>{
  //leer el gasto
  let restar = Number(cantidad);
  //tomar una copia del state
  let restante=this.state.restante;
  //lo restamos
  restante-=restar;

  //agregamos el nuevo state
  this.setState({
    restante
  })
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
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
     </div>
    );
  }
}

export default App;
