import React from 'react';
import { BuildingDescription } from './BuildingDescription';

export class Description extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className="descriptionArea">
        <div className="gridDescription">
          <BuildingDescription onMouseOver = {this.props.onMouseOver} />
        </div>
      </div>
    );
  }
}