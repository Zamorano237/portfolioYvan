/** @format */

import React, { useState, useRef } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (username === '') {
      setErrMsg('Votre nom est requis!');
    } else if (phoneNumber === '') {
      setErrMsg('Le numéro de téléphone est requis!');
    } else if (email === '') {
      setErrMsg("Merci de renseigner votre email.");
    } else if (!emailValidation()) {
      setErrMsg("L'adresse email n'est pas valide.");
    } else if (subject === '') {
      setErrMsg('Merci de renseigner un sujet.');
    } else if (message === '') {
      setErrMsg('Merci de renseigner un message.');
    } else {
      // Envoi avec EmailJS
      const templateParams = {
        to_name: 'Yvan',
        from_name: username,
        from_number: phoneNumber,
        from_email: email,
        subject: subject,
        message: message,
      };

      emailjs
        .send(
          'service_pr2pf6c', // Remplace par ton service ID
          'template_9wpq537', // Remplace par ton template ID
          templateParams,
          'R_saCWt0_6uN7cVSx', // Remplace par ton User/Public key
        )
        .then(
          (response) => {
            setSuccessMsg(
              `Merci cher ${username}, votre message a été transmis avec succès !`
            );
            setErrMsg('');
            setUsername('');
            setPhoneNumber('');
            setEmail('');
            setSubject('');
            setMessage('');
            setTimeout(() => setSuccessMsg(''), 5000);
          },
          (error) => {
            console.error(error);
            setErrMsg("Une erreur s'est produite, merci de réessayer.");
          }
        );
    }
  };

  return (
    <section id='contact' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title title='CONTACT' des='Contactez-Moi' />
      </div>
      <div className='w-full'>
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
          <ContactLeft />
          <div className='w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne'>
            <form ref={form} className='w-full flex flex-col gap-6'>
              {errMsg && (
                <p className='text-red-500 text-sm animate-pulse'>{errMsg}</p>
              )}
              {successMsg && (
                <p className='text-green-500 text-sm animate-pulse'>
                  {successMsg}
                </p>
              )}
              <div className='w-full flex flex-col lgl:flex-row gap-6'>
                <div className='w-full lgl:w-1/2 flex flex-col gap-2'>
                  <label className='text-sm text-gray-400'>Votre Nom</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className='contactInput'
                    type='text'
                  />
                </div>
                <div className='w-full lgl:w-1/2 flex flex-col gap-2'>
                  <label className='text-sm text-gray-400'>
                    Numéro de téléphone
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className='contactInput'
                    type='text'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-sm text-gray-400'>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='contactInput'
                  type='email'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-sm text-gray-400'>Objet</label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className='contactInput'
                  type='text'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-sm text-gray-400'>Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className='contactTextArea'
                  rows='6'
                />
              </div>
              <button
                onClick={handleSend}
                className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 hover:text-white hover:border-designColor border border-transparent transition-all duration-300 uppercase'>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
