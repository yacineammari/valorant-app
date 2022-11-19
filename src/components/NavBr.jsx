import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/Images/logoNoBG.png';


export default function NavBr() {
    const [isActive, setActive] = useState(window.innerWidth > 700);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className='nav-bar'>
      <NavLink className='logo' to="/Agents"><img src={Logo}/></NavLink>
      <div id="hamburger" className={isActive ? "is-active" : null} onClick={toggleClass}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <ul className={'nav-items' + (isActive ? ' active' : '')}>    
        <li>
          <NavLink className={({ isActive }) =>
                isActive ? "active-a" : undefined
              }
              to="/Agents">Agents</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
                isActive ? "active-a" : undefined
              }
              to="/Maps">Maps</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
                isActive ? "active-a" : undefined
              }
              to="/Weapons&Gear">Weapons / Gear</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
                isActive ? "active-a" : undefined
              }
              to="/PlayerCards">Player Cards</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
                isActive ? "active-a" : undefined
              }
              to="/Buddies">Buddies</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) =>
                isActive ? "active-a" : undefined
              }
              to="/Sprays">Sprays</NavLink>
        </li>
      </ul>
    </nav>
  );
}
