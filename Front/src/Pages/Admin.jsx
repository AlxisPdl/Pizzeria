import React from 'react'

export default function Admin() {
  return (
    <div>
        <div className="title">
        <h1>Salut Djeff !</h1>
        <h2>Voici ton espace administrateur</h2>
        <p>Ici, tu pourra crée, modifier, supprimé & récupéré les elements que tu souhaite ! <br />
        Alors, aujourd'hui.. C'est pour quoi ? </p>
        </div>

        <div className="button_categories">
        <button className="Pizza">Les pizzas</button>
        <button className="Burger">Les burgers</button>
        <button className="Texmex">Les texmexs</button>
        </div>
    </div>
  )
}
