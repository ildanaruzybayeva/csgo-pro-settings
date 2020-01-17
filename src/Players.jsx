import React, { Component } from 'react';
import Player from './Player';
import './Players.css';
import { pros } from './pros';

export class Players extends Component {
  render() {
    return (
      <div>
        <div className='prosList'>
          {pros.map(p => {
            return (
              <Player
                name={p.name}
                team={p.team}
                dpi={p.dpi}
                sensitivity={p.sensitivity}
                img={p.img}
                rating={p.rating}
                number={p.number}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Players;
