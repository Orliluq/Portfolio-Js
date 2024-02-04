/* eslint-disable no-unused-vars */
import ProjectCreativeFashion from "../../assets/creativefashion.png";
import ProjectPortfolioCreative from "../../assets/portfolio-creative.png";
import ProjectDlcaTechnology from "../../assets/DLCA-capture.png";
import ProjectEcommerce from "../../assets/Xpress.png";
import ProjectRdnews from "../../assets/rdnews.png";
import ProjectTechi from "../../assets/techi.png";
import ProjectTodolist from "../../assets/todolist.png";
import ProjectWeather from "../../assets/weather_app.png";
/* import ProjectPortfolio from "../../assets/portfolio-orli.png";
import ProjectPortfolioGlass from "../../assets/portfolio.png"; */
import PortfolioNext from "../../assets/portfolio-next.png";
import { Card } from "./Card";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Proyectos = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cards = [
    {
      id: 1,
      title: "Creative Fashion",
      subtitle: "eShop ropa creativa Frontend: JS, React, Redux. ",
      image: ProjectCreativeFashion,
      github: "https://github.com/Orliluq/Creative-Fashion",
      demo: "https://creative-fashion.vercel.app",
    },
    {
      id: 2,
      title: "Portfolio Next",
      subtitle: "Portfolio desarrollado en nextjs, JavaScript, CSS, Tailwind CSS, React, Bootstrap y Swipper, para darle más efectos y personalidad.",
      image: PortfolioNext,
      github: "https://github.com/Orliluq/Portfolio-next",
      demo: "https://portfolio-next-snowy-two.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio Creative",
      subtitle: "Portfolio Creativo implementando Vue, Html, CSS, JS",
      image: ProjectPortfolioCreative,
      github: "https://github.com/Orliluq/Portfolio-creative",
      demo: "https://portfolio-creative-six.vercel.app/",
    },
    {
      id: 4,
      title: "Dlca Technology",
      subtitle: "E-commerce de computación y accesorios Frontend: JS, React, Redux. Backend: JS, Sequelize, ExpressJs, PostgreSQL"  ,
      image: ProjectDlcaTechnology,
      github: "https://github.com/Orliluq/PF-DLCA-technology",
      demo: "https://pf-dlca-technology.vercel.app",
    },
    {
      id: 5,
      title: "Ecommerce eXpress",
      subtitle: "E-commerce venta de productos de computación HTML, CSS y JS, React. ",
      image: ProjectEcommerce,
      github: "https://github.com/Orliluq/Ecommerce-Express",
      demo: "https://ecommerce-express-mu.vercel.app/",
    },
    {
      id: 6,
      title: "Rdnews",
      subtitle: "Plataforma de noticias con API de New York Times HTML, CSS y JS",
      image: ProjectRdnews,
      github: "https://github.com/Orliluq/RdNews",
      demo: "https://rd-news-dddalc17v-orliluq.vercel.app",
    },
    {
      id: 7,
      title: "Ecommerce Techi",
      subtitle: "Plataforma de ventas HTML, CSS y JS, React."  ,
      image: ProjectTechi,
      github: "https://github.com/Orliluq/Ecommerce-Techi",
      demo: "https://ecommerce-techi.vercel.app/",
    },
    {
      id: 8,
      title: "Todolist App",
      subtitle: "App TodoList HTML, CSS y JS. ",
      image: ProjectTodolist,
      github: "https://github.com/Orliluq/TodoList",
      demo: "https://todo-list-six-gules.vercel.app/",
    },
    {
      id: 9,
      title: "Weather App",
      subtitle: "App Weather HTML, CSS y JS",
      image: ProjectWeather,
      github: "https://github.com/Orliluq/Weather_App",
      demo: "https://weather-app-eta-henna.vercel.app/",
    },
   /*  {
      id: 10,
      title: "Portfolio css",
      subtitle: "Portfolio con HTML, CSS y JavaScript."  ,
      image: ProjectPortfolio,
      github: "https://github.com/Orliluq/Portfolio-responsive-new",
      demo: "https://portfolio-responsive-new-delta.vercel.app",
    },
    {
      id: 11,
      title: "Portfolio Glass",
      subtitle: "Portfolio Glassmorphing con HTML, CSS y JS. ",
      image: ProjectPortfolioGlass,
      github: "https://github.com/Orliluq/Project-portfolio-glass",
      demo: "https://project-portfolio-glass.vercel.app/",
    }, */
   
   
  ];
  return (
     <section id="proyectos" className="w-full relative bg-orange-700 px-4 sm:px-10 lg:px-16 pt-16 lg:pt-16 pb-10 h-full overflow-hidden"
    >
    <motion.div   ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}>

        <h5 className=' text-red-900 font-oswald font-bold tracking-tighter text-3xl md:text-[50px] lg:text-[100px] uppercase leading-none '> Mis 👩‍💻 proyectos</h5>
     
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-5 pt-10 h-screen">
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              titles={card.title}
              subtitles={card.subtitle}
              images={card.image}
              github={card.github}
              demo={card.demo}
            />
          </div>
        ))}
      </div>
    </motion.div>
    </section>
  );
};

export default Proyectos
