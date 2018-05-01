import React from 'react';
import { Mapa } from './map/Mapa.js';
import { Information } from './information/Information.js';
import { Description } from './description/Description.js';
import { graphPoints } from './coords';
import Graph from 'node-dijkstra';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:8082');
const route = new Graph(graphPoints);

const pathToGod = (graphPoints) => {
  let coords = [];
	let array1, array2;
	let x1, y1 ,x2 ,y2 ;
	for (let i = 0; i< (graphPoints.length -1); i++) {
	  array1 = graphPoints[i].split('_');
	  array2 = graphPoints[i+1].split('_');
	  x1 = Number(array1[1]);
	  y1 = Number(array1[2]);
	  x2 = Number(array2[1]);
	  y2 = Number(array2[2]);
	  
	  if (x1 === x2) {
		if (y1 > y2) {
			while (y1 !== y2) {
				coords.push([x1,y1--]);
			}
		} else {
			while (y1 !== y2) {
				coords.push([x1,y1++]);
			}
		}
	  } else {
		
		if (x1 > x2) {
			while (x1 !== x2) {
				coords.push([x1--,y1]);
			}
		} else {
			while (x1 !== x2) {
				coords.push([x1++,y1]);
			}
		}

	  }
  }
  return coords;
}

const connection = {
    connectToServer: (message) => {
        socket.emit('front-message',message);
    }
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
        user: {
          Attributes:{
            nombre:{
              S: ''
            }
          }
        },
        coords: []
    }
    
    connection.connectToServer('conection started');
    this.serverMessage();
  }

  serverMessage = () => {
    let points;
    socket.on('server-message', (userReceived) => {
      console.log('_' + userReceived.Attributes.x.N + '_' + userReceived.Attributes.y.N);
      points = route.path('_' + userReceived.Attributes.x.N + '_' + userReceived.Attributes.y.N , '_' + userReceived.Attributes.x2.N + '_' + userReceived.Attributes.y2.N);
      this.setState({user:userReceived, coords: pathToGod(points)});
    });
  }

  changueBuildingDescription = (nuevo) => {
    this.setState({edificio:nuevo});
  }

  render() {
    return (
        <div className="gridScreen">
            <div className="titleArea"><h1>Mapa del Campus</h1></div>
            <Mapa edificio={this.state.edificio} coords={this.state.coords} />
            <Description onMouseOver = {this.changueBuildingDescription} />
            <Information edificio={this.state.edificio} user={this.state.user} />
        </div>
    );
  }
}