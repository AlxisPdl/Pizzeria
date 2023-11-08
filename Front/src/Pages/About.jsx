import React from 'react'
import Logo from '.././Assets/mpizza.png'
import '.././CSS/style.css';


export default function About() {
  return (
    <div>
      <h1>A propos de <img src={Logo} alt="MPIZZA" /></h1>
      <div className='paragraphes'>
        <p>Pizzaïolo depuis 12 ans, ouvrir ma pizzeria était mon rêve.
          Être mon propre patron, créer sans limites, avoir la main totale sur le choix des ingrédients...
          Mon restaurant vous propose aujourd'hui près de 40 recettes différentes de pizzas.
          Des déclinaisons classiques, originales, épicées, végétariennes, ultra-cheesy..</p>

        <p>
          M Pizza, c'est un restaurant ouvert depuis près de 8 ans maintenant.
          Tant d'années que vous nous faites confiance et que nous faisons notre possible pour vous régaler.
          Alors avant tout, merci la M Team !
        </p>
        <div className="paragraphes__encadrer">
          <h3>Notre règle d'or : il faut du bon pour faire du bon</h3>
          <p>

            Comme tout pizzaïolo qui aime son travail et les clients de sa pizzeria, nous accordons une importance primordiale à la qualité de nos produits.
            <br />
            Des ingrédients frais pour une cuisine maison pleine de saveurs. Des textures savoureuses et des arômes authentiques. Nous voulons de la gourmandise !
            <br />
            Alors rien n'est laissé au hasard. Pâte fraîche préparée chaque jour, sauce tomate au vrai goût de tomate, fromage de qualité crémeux et fondant, légumes grillés parsemés avec un juste équilibre.
            <br />
            Quand on aime, on ne compte pas.
          </p>
        </div>
      </div>
    </div>
  )
}
