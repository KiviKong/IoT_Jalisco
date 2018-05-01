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
            <div className="userInfoColorsCode">
              <div className="gridInfoColorsCode">
                <div className="currentPosColor margin10"></div><div className="currentPostext margin10"><p>Tu posición</p></div>
                <div className="trackColor margin10"></div><div className="trackText margin10"><p>Pasillos</p></div>
                <div className="pathColor margin10"></div><div className="pathText margin10"><p>Tu ruta</p></div>
                <div className="yardColor margin10"></div><div className="yardText margin10"><p>Jardínes</p></div>
                <div className="buildingColor margin10"></div><div className="buildingText margin10"><p>Edificio</p></div>
                <div className="lavaColor margin10"></div><div className="lavaText margin10"><p>Lava</p></div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}