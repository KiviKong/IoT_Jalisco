import React from 'react';
import { edificios } from '../description/buildings.js';

export class Mapa extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  changueDivColor = () => {
    this.setState({coords:[]});
  }

  renderDivs = () => {
    const blocks = [];
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        const current = this.props.edificio.coordenadas.find(c => c[0] === (x+1) && c[1] === (y+1));
        blocks.push(<div key={x + '_' + y} id={'block_' + (x+1) + '_' + (y+1)} style={{backgroundColor:current ? '#01B0F1':''}}></div>);
      }
    }
    return blocks;
  }

  renderLabels = () => {
    return edificios.map( (e) => { 
      return (
        <div key={e.nombre} className={'mapBuilding-'+ e.nombre}>
          <h1>{e.nombre}</h1>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="mapArea">
        <div className="gridMap">
          {this.renderLabels()}
          {this.renderDivs()}
        </div>
      </div>
    );
  }
}