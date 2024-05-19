import React from 'react';
import { Link } from 'react-router-dom';

function Fooldal() {
  return (
    <main className='fooldalx'>
      <section className="fooldalkep1">
        <div className="szoveg1">Ízletes ételek</div>
        <div className="szoveg2">Szeretettel készítve</div>
        <Link to="/etlap" className="etlap_gomb">Ételeink</Link>
      </section>

      <section className="fooldalkep2">
        <div className="szoveg3">Foglaljon nálunk asztalt!</div>
        <Link to="/asztalfoglalas" className="asztal_gomb">Foglalás</Link>
      </section>
    </main>
  );
}

export default Fooldal;