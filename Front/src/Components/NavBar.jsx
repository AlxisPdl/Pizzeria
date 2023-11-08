import React from 'react';
import { Link } from 'react-router-dom';
import '.././CSS/style.css';
import Logo from '.././Assets/mpizza.png'

function closeMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle.checked) {
    menuToggle.checked = false;
  }
}


export default function NavBar() {
  return (
    <div className='NavBar'>
      <section class="top-nav">
        <a href="./"><img class="Logo" src={Logo} alt="" /></a>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>


        <ul className='menu'>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/carte" onClick={closeMenu}>La carte</Link></li>
          <li><Link to="/about" onClick={closeMenu}>A propos</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          

        </ul>
      </section>

    </div>
  )
}
