import React from 'react';
import { Mapa } from './map/Mapa.js';
import { Information } from './information/Information.js';
import { Description } from './description/Description.js';

export class MainComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        edificio : {
            nombre: '',
            resumen: '',
            descripcion: '',
            coordenadas: []
        }
    }
  }

  changueBuildingDescription = (nuevo) => {
    this.setState({edificio:nuevo});
  }

  render() {
    return (
        <div className="gridScreen">
            <div className="titleArea"><h1>Mapa del Campus</h1></div>
            <Mapa edificio={this.state.edificio}/>
            <Description onMouseOver = {this.changueBuildingDescription}/>
            <Information edificio={this.state.edificio} />
        </div>
    );
  }
}