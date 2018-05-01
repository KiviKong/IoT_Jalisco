import React from 'react';
import { edificios } from './buildings.js';

const elementos = new Map();

export class BuildingDescription extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleOnClick = (e) => {
    console.log(e.target);
    if (e.target.className === 'gridBuildingLabels') 
        this.props.onClick(elementos.get(e.target.textContent.charAt(0)));
  }

  createBuildings = () => {
    let buildings = [];
    for (let i = 0; i < edificios.length; i++) {
        elementos.set(edificios[i].nombre, edificios[i]);
        buildings.push(
            (
                <div key={i} className={'building_' + (i+1)}>
                    <div className="gridBuildingLabels" onClick={this.handleOnClick}>
                        <div className="BuildingLabels_name">
                            <div className="BuildingLabels_circle">
                                <h2>{edificios[i].nombre}</h2>
                            </div>
                        </div>
                        <div className="BuildingLabels_description"><p>{edificios[i].resumen}</p></div>
                    </div>
                </div>
            )
        );
    }
    return buildings;
  }

  render() {
    return (
        <div className="buildingDescriptionArea">
            <div className="buildingList">
                {this.createBuildings()}
            </div>
        </div>
    );
  }
}