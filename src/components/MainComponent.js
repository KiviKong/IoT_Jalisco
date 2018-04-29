import React from 'react';
import { Mapa } from './map/Mapa.js';
import { Information } from './information/Information.js';
import { Description } from './description/Description.js';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:8082');

const connection = {
    connectToServer: (message) => {
        socket.emit('front-message',message);
    }, 
    device: 0
}

export class MainComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        edificio : {
            nombre: '',
            resumen: '',
            descripcion: '',
            coordenadas: []
        }, 
        device: connection.device
    }
    
    connection.connectToServer('conection started');
  }

  serverMessage = () => {
    socket.on('server-message', (iddevice) => {
      this.setState({device:Number(iddevice)});
    });
  }

  changueBuildingDescription = (nuevo) => {
    this.setState({edificio:nuevo});
  }

  render() {
    this.serverMessage();
    return (
        <div className="gridScreen">
            <div className="titleArea"><h1>Mapa del Campus</h1></div>
            <Mapa edificio={this.state.edificio} />
            <Description onMouseOver = {this.changueBuildingDescription} />
            <Information edificio={this.state.edificio} iddevice={this.state.device} />
        </div>
    );
  }
}