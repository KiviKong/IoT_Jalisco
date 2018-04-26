import React from 'react';

export class Mapa extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      coords: [],
      count: 0
    }
  }

  changueDivColor = () => {
    this.setState({coords:[...this.state.coords, { x:this.state.count+1,y:this.state.count+1 }], count:this.state.count + 1});
  }

  renderDivs = () => {
    const blocks = [];
    
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        const current = this.state.coords.find(c => c.x === x && c.y === y);
        blocks.push(<div key={x + '_' + y} id={'block_' + (x+1) + '_' + (y+1)} style={{backgroundColor:current ? 'blue':''}}></div>);
      }
    }
    return blocks;
  }

  render() {
    return (
      <div>
        <div className="gridMap">
          {this.renderDivs()}
        </div>
        <button onClick={this.changueDivColor}>magia</button>
      </div>
    );
  }
}