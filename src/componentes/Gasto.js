import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class Gasto extends Component {
  render() {
      const{cantidadGasto,nombreGasto}=this.props.gasto;
      console.log('props',cantidadGasto,nombreGasto);
    return (
      <li className='gastos'>
           <p>
               {nombreGasto}
               <span className='gasto'>${cantidadGasto}</span>
          </p>
     </li>
    )
  }
}

Gasto.propTypes = {
  gasto:PropTypes.object.isRequired
}