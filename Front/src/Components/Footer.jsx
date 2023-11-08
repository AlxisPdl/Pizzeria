import React from 'react'
import '.././CSS/style.css';

export default function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="footer__rights">
                <p>© 2023 MPizza. All Rights Reserved.</p>
                </div>
                <div className="footer__links">
                    <ul>
                    <li><a href="#">Vie privée</a></li>
                    <li><a href="/MentionsLegales">Mentions légales</a></li>
                    <li><a href="#">CGV</a></li>
                    <li><a href="#">Infos cookies</a></li>
                    </ul>
                </div>
                <div className="footer__sign">
                    <p>Réalisé par <a href="https://fr.linkedin.com/in/alexis-pudlo-a36525180?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F">AlxisPdl</a></p>
                </div>

            </footer>

        </div>


    )
}
