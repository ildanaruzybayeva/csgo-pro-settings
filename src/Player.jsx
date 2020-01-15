import React, { Component } from 'react';
import './Player.css';

export class Player extends Component {
  render() {
    return (
      <div className='scene'>
        <div className='player'>
          <h1>
            {this.props.name} | {this.props.team}
          </h1>
          <div className='front'>
            <img src={this.props.img} alt='simple' />
          </div>
          <p>DPI: {this.props.dpi}</p>
          <p>Sensitivity: {this.props.sensitivity}</p>
          <p>HLTV Rating: {this.props.rating}</p>
          <div className='back'></div>
        </div>
      </div>
    );
  }
}

export default Player;
