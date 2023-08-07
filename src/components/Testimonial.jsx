function Testimonial() {
  return (
    <section className="text-gray-600 bg-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="./images/prof4.jpg"
              />
              <p className="leading-relaxed">
              ¡Estoy encantada con mis nuevos leggings ActiveFit de H2O Deportiva! Son cómodos, flexibles y se ajustan perfectamente. Los he usado en mis sesiones de yoga y entrenamientos intensos, y siempre se mantienen en su lugar. Además, el precio fue increíble. ¡Definitivamente volveré a comprar más prendas en esta tienda!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-black font-medium title-font tracking-wider text-sm">
              LAURA GARCÍA
              </h2>

            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="./images/prof2.jpg"
              />
              <p className="leading-relaxed">
              ¡El conjunto PowerMove es todo lo que esperaba y más! Me siento súper motivada cuando me lo pongo. La tela es suave y transpirable, ideal para mis clases de baile. El diseño es moderno y elegante.¡Gracias, H2O Deportiva, por esta increíble oferta y por hacer que mi experiencia de compra sea tan satisfactoria!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-black font-medium title-font tracking-wider text-sm">
              MARÍA FERNÁNDEZ
              </h2>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                src="./images/prof3.jpg"
              />
              <p className="leading-relaxed">
              ¡Este sujetador es un verdadero salvavidas! Como una entusiasta del running, necesitaba algo que me brindara el soporte adecuado, y el Sujetador Endurance de H2O Deportiva lo hizo. Es cómodo, proporciona un ajuste perfecto y evita cualquier molestia durante mis carreras. ¡Gracias por mejorar mi experiencia de entrenamiento!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
              <h2 className="text-black font-medium title-font tracking-wider text-sm">
              ANA MARTÍNEZ
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
