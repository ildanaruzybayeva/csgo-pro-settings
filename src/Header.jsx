import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <h1>CS:GO PRO SETTINGS OF HLTV TOP 20 PLAYERS (2019)</h1>

          <ul>
            <li>
              <a data-page='home' href='#'></a>
            </li>
            <li>
              <a data-page='contact' href='#'>
                {' '}
              </a>
            </li>

            <div class='bubble'></div>
          </ul>
        </nav>
      </header>
    </div>
  );
}
