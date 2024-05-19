import React from 'react'

function Footer() {
  return (
    <footer>
        <section className="footer">
            <div className="kontakt">
                <h3>Elérhetőségek</h3>
                <p>Email: info@betyarbistro.hu</p>
                <p>Telefon: +36 1 234 5678</p>
                <p>Cím: Étel utca 45, Budapest 14.</p>
            </div>
            <div className="nyitvatartas">
                <h3>Nyitvatartási idő</h3>
                <p>Hétfő - Péntek: 12:00 - 22:00</p>
                <p>Szombat: 11:00 - 23:00</p>
                <p>Vasárnap: 11:00 - 20:00</p>
            </div>
            <div className="extrak">
                <h3>Egyéb szolgáltatásaink</h3>
                <p>Állandó kiállítás</p>
                <p>Fedett terasz</p>
                <p>Privát játszótér</p>
            </div>
            </section>
    </footer>
  )
}

export default Footer