import React from 'react';
import Logo from '.././Assets/mpizza.png';
import '.././CSS/style.css';
import Form from '../Components/Form';
import espece from '.././Assets/espece.png';
import CB from '.././Assets/CB.png';
import TR from '.././Assets/TR.png';


export default function Contact() {
  return (
    <div>
      <section className='header'>
        <img className='logo' src={Logo} alt="" />
      </section>
      <section className='contact_phone'>
        <p>Vous souhaitez nous contacté ?
          <br />
          Appelez-nous au : <a href="tel:0321402233">03 21 40 22 33</a>
        </p>
      </section>
      <section className='horaire'>
        <h2>Nos horaires d'ouverture</h2>
        <p>Du Lundi au Jeudi : 11:00 - 14:00 // 18:00 - 22:30
          <br />
          Le Vendredi : 18:00 - 22:30
          <br />
          Le Samedi & Dimanche : 11:00 - 14:00 // 18:00 - 22:30
        </p>
      </section>
      <section className='adresse'>
        <h2>Notre adresse</h2>
        <a href="https://www.google.com/maps/dir/50.4015259,2.866865/mpizza/@50.4033023,2.8623079,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47dd315876bc488b:0x6a17d00ae58aa952!2m2!1d2.8818858!2d50.4072632"> 37 Rue robespierre, 62680 Méricourt</a>
      </section>
      <section className='paiement'>
        <h2>Moyens de paiement</h2>
        <div className='paiement__img'>
          <img src={espece} alt="Espèce" />
          <img src={TR} alt="Tickets restaurant" />
          <img src={CB} alt="Carte Banquaire" />
        </div>
      </section>
      <section className='formulaire'>
        <div className='formulaire__text'>
          <p>Une réclamation ?
            <br />
            Une question ?
            <br />
            Un conseil ou just un message gentil ?
            <br />
            Nous avons un formulaire spécialement pour vous !
            <br />
            Remplissez ce formulaire !
            <br />
            Nous serons ravis de vous répondre !
          </p>
        </div>
        <div className='formulaire__form'>
          <Form />
        </div>
      </section>

    </div>
  )
}
