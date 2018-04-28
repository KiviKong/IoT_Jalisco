import React from 'react';

export class BuildingInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
        <div className="buildingInformationArea">
            <h1>{this.props.edificio.nombre}</h1>
            <h2>{this.props.edificio.descripcion}</h2>
        </div>
    );
  }
}