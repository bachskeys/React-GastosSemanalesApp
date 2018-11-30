import React, { Component } from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types'


export default class listado extends Component {
  render() {
    return (
      <div className='gastos-realizados'>
          <h2>Listado</h2>
          {Object.keys(this.props.gastos).map((key,i)=>(<Gasto
           key={key}
           gasto={this.props.gastos[key]}
          />))}
      </div>
    )
  }
}

listado.propTypes = {
  gastos:PropTypes.object.isRequired
}