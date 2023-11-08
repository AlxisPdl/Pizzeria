import React, { useContext, useRef } from 'react'
import axios from 'axios';
import api from '../api';
import '../CSS/style.css';
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
    fontSize: '24px',

    
  },
};

Modal.setAppElement('#root');



export default function Form() {
  const { serverUrl } = useContext(api);
  const formElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formElement.current)
    console.log(formData.entries)
    const data = {
      nom: event.target.nom.value,
      prenom: event.target.prenom.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    console.log(data);
    console.log(formElement)

    axios.post(`${serverUrl}/contact`, data)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
    
    
    formElement.current.reset();


  }


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <form ref={formElement} onSubmit={handleSubmit} >
        <label htmlFor="nom">Nom</label>
        <input type="text" name="nom" id="nom" />
        <label htmlFor="prenom">Prénom</label>
        <input type="text" name="prenom" id="prenom" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <button type='submit' onClick={openModal}>Envoyer</button>
         <Modal
         isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Sending Mail Modal">
        <div className='modal__contenant'>
                <h2 className='modal__title'>Message envoyé</h2>
                <p className='modal__text'>Merci pour votre message</p>
                <button onClick={closeModal}>X</button>
              </div>
        </Modal>
      </form>
    </div>
  )
}
