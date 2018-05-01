import React from 'react';
import { edificios } from '../description/buildings.js';
import { modules } from '../description/modules.js';

export class Mapa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderDivs = () => {
    const blocks = [];
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        const current = this.props.edificio.coordenadas.find(c => c[0] === (x+1) && c[1] === (y+1));
        const currentx2 = this.props.coords.find(c => c[0] === (x+1) && c[1] === (y+1));
        blocks.push(<div key={x + '_' + y} id={'block_' + (x+1) + '_' + (y+1)} style={{backgroundColor: current ? '#91A8DA': currentx2 ? '#F5AF85': ''}}></div>);
      }
    } // borderStyle: currentx2 ? 'solid': ''
    return blocks;
  }

  renderLabels = () => {
    return edificios.map( (e,i) => { 
      return (
        <div key={e.nombre} className={'mapBuilding-'+ i}>
          <h1>{e.nombre}</h1>
        </div>
      )
    });
  }

  renderModuleLabels = () => {
    return modules.coords.map((e,i) => {
      return (
        <div key={e} className={'mapModule-'+ i + (i === modules.curerntPos ? ' currentModule' : '')}>
            <h1>!</h1>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="mapArea">
        <div className="gridMap">
          {this.renderModuleLabels()}
          {this.renderLabels()}
          {this.renderDivs()}
        </div>
      </div>
    );
  }
}