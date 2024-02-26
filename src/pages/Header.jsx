import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <section id="header" className="text-gray-400 bg-gray-900 body-font mt-5">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-white title-font sm:text-4xl">
            H2O Deportiva:
            <br className="hidden lg:inline-block" />
            ¡Encuentra tu estilo deportivo al mejor precio!
          </h1>
          <br />
          <p className="mb-8 leading-relaxed">
            Somos tu destino para la moda deportiva femenina a precios
            imbatibles. Nuestra colección en oferta combina comodidad, estilo y
            funcionalidad para que te sientas inspirada en cada entrenamiento.
            Desde prendas diseñadas para entrenamientos de alta intensidad hasta
            conjuntos ideales para yoga y relajación, tenemos todo lo que
            necesitas para estar activa con confianza. ¿Qué esperas? ¡Descubre
            nuestras ofertas limitadas y equípate con las últimas tendencias
            deportivas!
          </p>
          <div className="flex justify-center">
            <HashLink to="#products">
              <button className="inline-flex px-6 py-2 text-lg text-white bg-orange-500 border-0 rounded focus:outline-none hover:bg-[#DE8A2E]">
                Ver Ofertas
              </button>
            </HashLink>
            <Link to="https://bit.ly/h2odeportiva" target="_blank">
              <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-400 bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 hover:text-white">
                Contactanos
              </button>
            </Link>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src="/images/img-hero.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
