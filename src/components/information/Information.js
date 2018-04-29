import React from 'react';
import { BuildingInfo } from './BuildingInfo';
import { UserInfo } from './UserInfo';

export class Information extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="informationArea">
        <div className="gridInformation">
          <BuildingInfo edificio={this.props.edificio}/>
          <UserInfo iddevice={this.props.iddevice}/>
        </div>
      </div>
    );
  }
}