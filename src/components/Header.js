import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div><img src="images/logo.png" alt=""/></div>
      <nav>
        <ul>
          <div className="cim">Betyár Bistro</div>
          <li><Link to="/">Főoldal</Link></li>
          <li><Link to="/etlap">Étlap</Link></li>
          <li><Link to="/asztalfoglalas">Asztalfoglalás</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;