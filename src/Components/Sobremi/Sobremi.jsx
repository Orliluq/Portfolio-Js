import perfil from "../../assets/avatar3.png"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react.svg"
import tailwind from "../../assets/tailwind.svg"
import node from "../../assets/nodejs.svg"
import mysql from "../../assets/mysql.svg"
import angular from "../../assets/angular.svg"
import astro from "../../assets/astro.svg"
import bootstrap from "../../assets/bootstrap.svg"
import express from "../../assets/express.svg"
import git from "../../assets/git.svg"
import java from "../../assets/java.svg"
import nestjs from "../../assets/nestjs.svg"
import nextjs from "../../assets/nextjs.svg"
import npm from "../../assets/npm.svg"
import postgresql from "../../assets/postgresql.svg"
import python from "../../assets/python.svg"
import redux from "../../assets/redux.svg"
import sass from "../../assets/sass.svg"
import springboot from "../../assets/springboot.svg"
import typescript from "../../assets/typescript.svg"
import vite from "../../assets/vite.svg"
import vue from "../../assets/vue.svg"
import { useEffect, useState } from "react"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const SobreMi = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const [scrolear, setScrolear] = useState  (false)

  useEffect(() => {
    const hacerScroll = () => {
      if (window.scrollY > 1000) {
        setScrolear(true);
      } else {
        setScrolear(false);
      }
    };

    window.addEventListener('scroll', hacerScroll);
    return () => {
      window.removeEventListener('scroll', hacerScroll);
    };
  }, []);

  return (
    <div   id="sobremi" className={` ${scrolear ? 'bg-orange-400' : ' bg-blue-950 '} w-full   lg:h-screen  flex flex-col md:flex-row lg:flex-row px-10 lg:px-16 gap-20 pt-5 lg:pt-20 pb-20 transition-all duration-500  `}
   >
      <motion.div className="relative flex items-end  justify-center w-full " 
       ref={ref}
       initial="hidden"
       animate={controls}
       variants={{
         visible: { opacity: 1, y: 0 },
         hidden: { opacity: 0, y: 100 },
       }}
       transition={{ duration: 0.5 }} >

        <img className="absolute z-30 right-0 lg:right-4 bottom-14 md:bottom-8 lg:bottom-10 hover:scale-110 transition-transform duration-200 transform-gpu hover:shadow-lg sm:right-1/2 sm:bottom-1/2" src={perfil} alt="perfil" />
      </motion.div>

      <motion.div className="w-full gap-20 font-oswald border rounded-lg border-orange-100 px-10 h-600"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}>

    <h1 className=" font-bold tracking-tighter text-[20px] md:text-[40px] lg:text-[60px]  text-red-300 left-1/2 uppercase top-12  ">Sobre mi</h1>
      <p className="  text-orange-100 left-1/2 right-14 top-24  ">Hola 👋🏼 mi nombre es Orli Dun, gracias por estar aquí, un gusto que conozcas mi trabajo. Quiero contarte que me encanta tanto la experiencia de <strong className='text-[#e8f05d]'>usuario</strong> como el lado del <strong className='text-[#e8f05d]'>servidor.</strong> Me esfuerzo en la creación de soluciones funcionales con interfaces creativas e innovadoras. </p>
    <h2 className=" font-bold text-[10px] md:text-[30px] lg:text-[50px] text-orange-100 left-1/2 uppercase top-40">Skills</h2>
    
    <div className="flex flex-wrap gap-5 pb-10  ">
      <img className="w-8"  src={html} alt="html" />
      <img className="w-8"  src={css} alt="css" />
      <img className="w-8"  src={javascript} alt="javascript" />
      <img className="w-8"  src={react} alt="react" />
      <img className="w-8"  src={tailwind} alt="tailwind" />
      <img className="w-8"  src={node} alt="node" />
      <img className="w-8"  src={angular} alt="angular" />
      <img className="w-8"  src={astro} alt="astro" />
      <img className="w-8"  src={express} alt="express" />
      <img className="w-8"  src={git} alt="git" />
      <img className="w-8"  src={bootstrap} alt="bootstrap" />
      <img className="w-8"  src={java} alt="java" />
      <img className="w-8"  src={mysql} alt="mysql" />
      <img className="w-8"  src={nestjs} alt="nestjs" />
      <img className="w-8"  src={nextjs} alt="nextjs" />
      <img className="w-8"  src={npm} alt="npm" />
      <img className="w-8"  src={postgresql} alt="postgresql" />
      <img className="w-8"  src={python} alt="python" />
      <img className="w-8"  src={redux} alt="redux" />
      <img className="w-8"  src={sass} alt="sass" />
      <img className="w-8"  src={springboot} alt="springboot" />
      <img className="w-8"  src={typescript} alt="typescript" />
      <img className="w-8"  src={vite} alt="vite" />
      <img className="w-8"  src={vue} alt="vue" />
    </div>
  </motion.div>
  </div>
    
  )
}

export default SobreMi
