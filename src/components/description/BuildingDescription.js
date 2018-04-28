import React from 'react';
import { edificios } from './buildings.js';

const elementos = new Map();

export class BuildingDescription extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleMouseOver = (e) => {
      this.props.onMouseOver(elementos.get(e.target.innerText));
  }

  createBuildings = () => {
    edificios.forEach((e) =>{
        elementos.set(e.nombre, e);
    });

    return edificios.map((element,i) => {
        return (
            <li key={i}>
                <h2 onMouseOver={this.handleMouseOver} >{element.nombre}</h2>
                <h3>{element.descripcion}</h3>
            </li>
        )
    });
  }

  render() {
    return (
        <div className="buildingDescriptionArea">
            <ul>{this.createBuildings()}</ul>
        </div>
    );
  }
}