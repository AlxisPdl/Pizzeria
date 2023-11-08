import React from 'react'
import Logo from '.././Assets/mpizza.png'
import '.././CSS/style.css';
import CarouselPage from '../Components/Carroussel';
import Facebook from '.././Assets/facebook.png'
import Instagram from '.././Assets/instagram.png'
import Snapchat from '.././Assets/Snapchat.png'
import Modal from 'react-modal'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(110, 0, 150,.60)',
    borderRadius: '10px',
    border: '2px solid white',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    width: 'fit-content',
    height: 'fit-content',
  },
};

Modal.setAppElement('#root');

export default function HomePage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (

    <div>
      <section className='header'>
        <img className='home__logo' src={Logo} alt="" />
        <h1>Bienvenue chez MPizza Méricourt <br />
          Votre pizzeria créative et passionnée qui saura ravire vos papilles</h1>
      </section>

      <section className='carte'>
        <article className='carte__paragraphe'>
          <p>Des experts impliqués dans leur passion
            <br />
            <br />
            Pizzas, burgers, paninis, salades, snacks...
            <br />
            Tout est dispo sur notre carte qui vous fera salivé plus que jamais !
          </p>
          <a href="/carte"><button>La carte</button></a>
        </article>
        <div className='carousel'>
          <CarouselPage />
        </div>
      </section>
      <div className="title__offres">
        <h2>Offres permanantes</h2>
      </div>
      <section className='offres'>
        <div className='offres__emporter'>
          <h3>A emporter</h3>
          <div className='offres__emporter__contenant'>
            <p>
              1 Pizza acheté
              <br />
              =
              <br />
              1 Pizza offerte
              <br />
              <span>Uniquement sur les formats senior & mega</span>
            </p>
          </div>
        </div>
        <div className='offres__livraison'>
          <h3>En livraison</h3>
          <div className='offres__livraison__contenant'>
            <p>
              1 Pizza acheté
              <br />
              =
              <br />
              2 Pizza offerte
              <br />
              <span>Ou une bouteille format 1.5L</span>
              <br />
              <span>Uniquement sur les formats senior & mega</span>
            </p>
          </div>
        </div>
      </section>
      <section className='apropos'>
        <div className="apropos__encadrement">
          <i id='_1' class="material-symbols-outlined">
            chevron_left
          </i>
          <i id='_2' class="material-symbols-outlined">
            chevron_left
          </i>
          <i id='_3' class="material-symbols-outlined">
            chevron_left
          </i>
          <i id='_4' class="material-symbols-outlined">
            chevron_left
          </i>
        </div>
        <div className='apropos__contenant'>
          <h2>Qui sommes-nous ?</h2>
          <p>Des pizzaïolos passionnés qui vous régale avec des recettes de pizzas originales
            <br />
            Depuis plusieurs années, la pizzeria M Pizza vous propose environ une nouvelle recette tous les deux mois.
            Nous aimons vous faire découvrir de nouvelles combinaisons d'ingrédients frais, des saveurs équilibrées et gourmandes,
            des parfums épicés ou des présentations aux couleurs appétissantes. Chez nous, pas d'ennui, tout est passion et créativité.
            Découvrez qui nous sommes et les valeurs qui portent notre pizzeria au quotidien.
            <br />
            <span>Vous souhaitez en savoir plus sur nous ? </span>
            <a href="/about"><button>Cliquez ici</button></a>
          </p>
        </div>
      </section>
      <section className='map'>
        <div className='map__google'>
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.529474727442!2d2.8437769743164103!3d50.40726320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd315876bc488b%3A0x6a17d00ae58aa952!2sM%20Pizza!5e0!3m2!1sfr!2sfr!4v1682516075564!5m2!1sfr!2sfr" />
        </div>
        <div className='map__contenant'>
          <h2>Ou ce situe notre pizzeria ?
            <br />
            Comment nous contacter ?
          </h2>
          <p>
            Notre pizzeria ce situe au : <a href="https://www.google.com/maps/dir/50.4015259,2.866865/mpizza/@50.4033023,2.8623079,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47dd315876bc488b:0x6a17d00ae58aa952!2m2!1d2.8818858!2d50.4072632"> 37 Rue robespierre, 62680 Méricourt</a>
            <br />
            <br />
            Si vous souhaitez commander, appelez nous au : <a href="tel:0321402233">03 21 40 22 33</a>
          </p>
        </div>
      </section>
      <section className="contact">
        <div className="contact__contenant">
          <h2>Une question particulière ?
            <br />
            Un avis ? Ou juste un message gentil ?
            <br />
            Nous avons un formulaire spécialement pour vous !
            <br />
          </h2>
          <a href="/contact"><button>Contactez-nous</button></a>
        </div>
      </section>
      <section className='reseaux'>
        <div className='reseaux__contenant'>
          <h2>Suivez-nous sur nos réseaux sociaux !
            <br />
            Vous serrez tenus de toutes les nouveautées et information concernant cette incroyable pizzeria
          </h2>
          <div className='reseaux__contenant__logo'>
            <a href="https://www.facebook.com/mpizzamericourt"><img src={Facebook} alt="" /></a>
            <img onClick={openModal} src={Snapchat} alt="" />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Snapchat Modal"
            >
              <div className='modal__contenant'>
                <img src={Snapchat} alt="snapchatname" />
                <button onClick={closeModal}>X</button>
              </div>
            </Modal>
            <a href="https://www.instagram.com/mpizza.62/"><img src={Instagram} alt="" /></a>
          </div>
        </div>

      </section>
    </div>

  )
}

