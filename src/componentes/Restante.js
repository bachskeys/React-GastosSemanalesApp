import React, { Component } from 'react';
import  {revisarPresupuesto} from "../helper";

export default class Restante extends Component {
  render() {
      const {presupuesto,restante} = this.props;
    return (
        <div className={revisarPresupuesto(presupuesto,restante)}>
            <p>Restante:${this.props.restante}</p>
        </div>
    )
  }
}
