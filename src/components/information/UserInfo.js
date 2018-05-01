import React from 'react';

export class UserInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
        <div className="userInformationArea">
            <h1>{this.props.user.Attributes.nombre.S}</h1>
        </div>
    );
  }
}