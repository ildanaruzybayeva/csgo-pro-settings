import React, { Component } from 'react';
import Player from './Player';
import './Players.css';

export class Players extends Component {
  static defaultProps = {
    pros: [
      {
        name: 'S1mple',
        team: "Na'Vi",
        dpi: 400,
        sensitivity: 3.09,
        rating: 1.29,
        img:
          'https://prosettings.net/wp-content/uploads/2018/07/s1mple-profile-picture.png'
      },
      {
        name: 'N1ko',
        team: 'Faze',
        dpi: 400,
        sensitivity: 1.465,
        rating: 1.18,
        img: 'https://prosettings.net/wp-content/uploads/2017/03/Niko.jpg'
      },
      {
        name: 'Stewie2k',
        team: 'Liquid',
        dpi: 400,
        rating: 1.1,
        sensitivity: 1.8,
        img:
          'https://prosettings.net/wp-content/uploads/2018/07/stewie2k-profile-picture.jpg'
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>CS:GO PRO SETTINGS</h1>
        <div className='prosList'>
          {this.props.pros.map(p => {
            return (
              <Player
                name={p.name}
                team={p.team}
                dpi={p.dpi}
                sensitivity={p.sensitivity}
                img={p.img}
                rating={p.rating}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Players;
