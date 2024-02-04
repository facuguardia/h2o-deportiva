import { Link } from "react-router-dom";

function Contact() {
  return (
    <section id="contact" className="text-gray-600 bg-gray-300 body-font">
      <div className="container flex justify-evenly px-5 py-24 mx-auto">
        <div className="md:w-2/5 md:pl-6">
          <h2 className="text-start text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Conviértete en Distribuidora H2O Deportiva
          </h2>
        </div>
        <div className="md:w-3/5 md:pl-6">
          <p className="text-base leading-relaxed ">
            En H2O Deportiva, te ofrecemos la oportunidad de ser parte de
            nuestra red de distribuidoras y aprovechar los increíbles precios
            que tenemos para ti. Nuestra pasión por el deporte y la moda nos
            impulsa a llevar la mejor ropa deportiva de mujer directamente a tus
            manos para que puedas emprender tu propio negocio de reventa.
          </p>
          <div className="flex justify-end mt-10">
            <Link to="https://bit.ly/h2odeportiva" target="_blank">
              <div className="inline-flex items-center text-orange-600 hover:text-[#DE8A2E]">
                ¡Únete a nuestra red de distribuidoras ahora!
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
