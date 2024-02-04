import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion";
import logo1 from "../../../public/coder.gif"


const Hero = () => {
  const controls = useAnimation();
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    
    const incrementarSegundos = () => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    };    
    const intervalId = setInterval(incrementarSegundos, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity
      },
    });
  }, [controls]);
  
  return (
    <div id="inicio" className="w-full  bg-blue-950 h-screen flex justify-center  items-center px-10 lg:px-16 " >
      <div className= 'font-oswald font-semibold leading-tight tracking-tighter  text-orange-100 text-left text-5xl md:text-8xl lg:text-[120px]  uppercase animate-fade-down'>
     
        <h1 className=" text-red-300 ">
          Orli Dun 
        </h1>

        <h2   >Full Stack Developer</h2>
    </div>
     <motion.div className="hidden lg:flex absolute  items-center  top-[140px] right-[190px]" animate={controls}>
      <img className="w-44 h-44  animate-fade-down" src={logo1} alt="logo" />
     </motion.div>
      <i className="absolute bottom-10 bi bi-arrow-down-circle-fill text-orange-100 text-3xl animate-bounce animate-infinite"></i>

     <div className="fixed  font-oswald bottom-10 left-[60px] px-0 text-[11px] lg:text-[20px] text-orange-100 z-50 uppercase">
      <p>© 2024 OrliDev</p>
     </div>
      <p className="fixed  font-oswald bottom-10 right-[60px] text-[11px] lg:text-[15px] text-orange-100 z-50 uppercase ">tiempo {segundos}</p>
  </div>
    
    
  )
}

export default Hero