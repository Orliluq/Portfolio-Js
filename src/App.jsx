import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./Components/Hero/Hero"
import Header from "./Components/Navbar/Header"
import SobreMi from "./Components/Sobremi/Sobremi"
import Proyectos from "./Components/Proyectos/Proyectos"
import Contactos from "./Components/Contactos/Contactos"
import Footer from "./Components/Footer/Footer"

const  App = ()=> {

  return (
    <>
      <Header />
      <Hero/>
      <SobreMi/>
      <Proyectos/>
      <Contactos/>
      <Footer/>
      
    </>
  )
}

export default App

