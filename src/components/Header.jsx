function Header() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          H2O Deportiva:
            <br className="hidden lg:inline-block" />
            ¡Encuentra tu estilo deportivo al mejor precio!
          </h1>
          <p className="mb-8 leading-relaxed">
          Somos tu destino para la moda deportiva femenina a precios imbatibles. Nuestra colección en oferta combina comodidad, estilo y funcionalidad para que te sientas inspirada en cada entrenamiento. Desde prendas diseñadas para entrenamientos de alta intensidad hasta conjuntos ideales para yoga y relajación, tenemos todo lo que necesitas para estar activa con confianza. ¿Qué esperas? ¡Descubre nuestras ofertas limitadas y equípate con las últimas tendencias deportivas!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Explorar Ofertas
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Contactanos
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src="./images/img3.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
