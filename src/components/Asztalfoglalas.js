import React, { useState } from 'react';

function Asztalfoglalas() {
  const [foglalasok, setFoglalasok] = useState([]);
  const [ujFoglalas, setUjFoglalas] = useState({
    nev: '',
    fo: '',
    datum: '',
    email: '',
    telefon: ''
  });
  const [modositandoIndex, setModositandoIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUjFoglalas({ ...ujFoglalas, [name]: value });
  };

  const handleAddFoglalas = () => {
    setFoglalasok([...foglalasok, ujFoglalas]);
    setUjFoglalas({
      nev: '',
      fo: '',
      datum: '',
      email: '',
      telefon: ''
    });
  };

  const handleEditFoglalas = (index, updatedFoglalas) => {
    const ujFoglalasok = [...foglalasok];
    ujFoglalasok[index] = updatedFoglalas;
    setFoglalasok(ujFoglalasok);
    setModositandoIndex(null);
  };

  const handleDeleteFoglalas = (index) => {
    const ujFoglalasok = [...foglalasok];
    ujFoglalasok.splice(index, 1);
    setFoglalasok(ujFoglalasok);
  };

  const handleEditClick = (index, foglalas) => {
    setUjFoglalas(foglalas);
    setModositandoIndex(index);
  };

  const atlagosFoglalasok = foglalasok.reduce((acc, foglalas) => acc + parseInt(foglalas.fo), 0) / foglalasok.length;

  return (
    <main>
      <section className="form">
        <div className="nev">
          <label htmlFor="nev" id="label-nev">Név</label> 
          <input type="text" id="nev" name="nev" placeholder="Kérem adja meg a nevét" value={ujFoglalas.nev} onChange={handleChange} />
        </div>
        <div className="number-select">
          <label htmlFor="fo">Fő</label>
          <select id="fo" name="fo" value={ujFoglalas.fo} onChange={handleChange}>
            {[...Array(20).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
        <div className="date-select">
          <label htmlFor="datum">Dátum</label>
          <input type="datetime-local" id="datum" name="datum" value={ujFoglalas.datum} onChange={handleChange} />
        </div>
        <div className="e_mail">
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" placeholder="valaki@gmail.com" value={ujFoglalas.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="telefon">Telefonszám</label>
          <input type="text" id="telefon" name="telefon" placeholder="+06303248956" value={ujFoglalas.telefon} onChange={handleChange} />
        </div>
        <div className="submit-button">
          <button type="submit" id="submitButton" onClick={modositandoIndex !== null ? () => handleEditFoglalas(modositandoIndex, ujFoglalas) : handleAddFoglalas}>
            {modositandoIndex !== null ? 'Foglalás módosítása' : 'Foglalás véglegesítése'}
          </button>
        </div>
      </section>
      <section className="list-foglalasok">
        <h2>Asztalfoglalások</h2>
        <table>
          <thead>
            <tr>
              <th>Név</th>
              <th>Fő</th>
              <th>Dátum</th>
              <th>E-mail</th>
              <th>Telefonszám</th>
              <th>Műveletek</th>
            </tr>
          </thead>
          <tbody>
            {foglalasok.map((foglalas, index) => (
              <tr key={index}>
                <td>{foglalas.nev}</td>
                <td>{foglalas.fo}</td>
                <td>{foglalas.datum}</td>
                <td>{foglalas.email}</td>
                <td>{foglalas.telefon}</td>
                <td>
                  <button onClick={() => handleEditClick(index, foglalas)}>Módosítás</button>
                  <button onClick={() => handleDeleteFoglalas(index)}>Törlés</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>A foglalások átlagos vendégszáma: {isNaN(atlagosFoglalasok) ? 0 : atlagosFoglalasok}</p>
      </section>
    </main>
  );
}

export default Asztalfoglalas;