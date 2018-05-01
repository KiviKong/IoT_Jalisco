import React from 'react';

export class UserInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPressed: false
    }
  }

  toggleButton = () => {
    this.setState({isPressed: this.state.isPressed ? false : true});
    this.props.onClick(this.state.isPressed ? false : true);
  }

  render() {
    return (
        <div className="userInformationArea">
          <div className="griduserInformationArea">
            <div className="userInfogreeting"><h1>Hola <b>{this.props.user.Attributes.nombre.S}</b>, Gracias por visitar nuestra universidad.</h1></div>
            <div className="userInfoButtons">
              <button className={this.state.isPressed ? 'button': 'buttonPressed'} onClick = {this.toggleButton} >RUTA TURISTICA</button>
            </div>
          </div>
        </div>
    );
  }
}