import React from 'react';

export class BuildingInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
        <div className="buildingInformationArea">
          <div className="gridBuildingCard">
            <div className="buildingInformation">
              <h2>{this.props.edificio.resumen + ' ' + this.props.edificio.nombre}</h2>
              <p>{this.props.edificio.descripcion}</p>
            </div>
            <div className="buildingImg">
              <img src={this.props.edificio.img} alt="edificio"></img>
            </div>
          </div>
        </div>
    );
  }
}