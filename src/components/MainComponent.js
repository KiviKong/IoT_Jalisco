import React from 'react';
import { Mapa } from './Mapa.js';
import { Information } from './information/Information.js';
import { Description } from './description/Description.js';

export class MainComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        edificio : {
            nombre: 'M',
            descripcion: 'Este edificio se la come'
        }
    }
  }

  changueBuildingDescription = (nuevo) => {
    this.setState({edificio:nuevo});
  }

  render() {
    return (
        <div className="gridScreen">
            <Mapa />
            <Description onMouseOver = {this.changueBuildingDescription}/>
            <Information edificio={this.state.edificio} />
        </div>
    );
  }
}