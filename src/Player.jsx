import React, { Component } from 'react';
import './Player.css';

export class Player extends Component {
  render() {
    return (
      <div className='player'>
        <h1>
          {this.props.name} (#{this.props.number})
        </h1>
        <p>{this.props.team}</p>

        <div className='front'>
          <img src={this.props.img} alt='simple' />
        </div>
        <p>DPI: {this.props.dpi}</p>
        <p>Sensitivity: {this.props.sensitivity}</p>
        <p>HLTV Rating: {this.props.rating}</p>

        <div class='button_cont' align='center'>
          <a
            class='example_c'
            href='add-website-here'
            target='_blank'
            rel='nofollow noopener'
          >
            Full Settings
          </a>
        </div>

        <div className='back'></div>
      </div>
    );
  }
}

export default Player;
