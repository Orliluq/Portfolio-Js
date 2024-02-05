/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contactos = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [notification, setNotification] = useState('');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c0ow20s', 'template_vd6tk6w', form.current, 'vYiL3wqInMXBdswY8')
      .then((result) => {
          console.log(result.text);
          setNotification('El mensaje fue enviado con éxito.');
      }, (error) => {
          console.log(error.text);
          setNotification('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <div id='contactos' className=' w-full lg:h-screen bg-blue-950 px-10 lg:px-16 lg:pt-16  overflow-hidden '>
      
      <motion.h5  ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }} className='text-red-300 font-oswald font-bold tracking-tighter text-4xl md:text-[80px] lg:text-[100px] uppercase pt-20 '>Contacto</motion.h5>

    <div className='flex flex-col lg:grid lg:grid-cols-2 pt-16'>
    <div className='font-oswald text-orange-100 pr-10 pb-10  '>
    <div className='flex items-center gap-x-2 pb-10 '>
      <i className="bi bi-geo-alt text-xl"></i>
      <p>Caracas, Dtto. Capital, Venezuela</p> 
    </div>
    <div className="pb-10 justify-center">
    <button className="text-white font-bold bg-orange-700 p-2 md:p-5 rounded-md hover:bg-gray-800 transition-colors duration-200 submit-button">
      <a href="https://docs.google.com/document/d/1-L1cOfyP21j8sdLuUBm7vkMgtMrtPazk57tfqzW_30U/edit?usp=sharing" download="CV.es.pdf">
        Download CV
      </a> 
    </button>
        </div>

      <p>¡Hola! Me alegra mucho que te pongas en contacto conmigo. Estoy aquí para ayudarte en lo que necesites. Puedes preguntarme cualquier cosa, darme tu opinión o hablar de cualquier tema que te interese. ¡No dudes en escribirme!</p>

    </div>

    <div className='relative w-full  mb-20 font-oswald border rounded-lg border-orange-100 p-5  '>
      {notification && <div className='absolute  bottom-0 right-0 mb-4 mr-4 bg-green-950 text-orange-100 py-2 px-4 rounded-lg shadow'>{notification}</div>}

    <form ref={form} onSubmit={sendEmail}>

      <div className='font-oswald text-orange-100 flex flex-col mb-5' >

        <label>Nombre</label>
          <input className='border border-orange-100 rounded bg-transparent focus:outline-none'  autoComplete='off' type="text" name="user_name" required />
      </div>

      <div className='font-oswald text-orange-100 flex flex-col mb-5'>

      <label>Email</label>
        <input className='border border-orange-100 rounded bg-transparent focus:outline-none' autoComplete='off' type="email" name="user_email" required />
      </div>

    <div className='font-oswald text-orange-100 flex flex-col mb-5 '>

      <label>Mensaje</label>
      <textarea className='border border-orange-100 rounded bg-transparent focus:outline-none'  name="message"/>
    </div>
      <input className='font-oswald text-red-300 text-xl border border-orange-100 rounded p-2 cursor-pointer' type="submit" value="Enviar"  />
    </form>
    </div>

  </div>
</div>

)
}

export default Contactos
