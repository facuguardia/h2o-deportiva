function Contact() {
  return (
    <section className="text-gray-600 bg-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
          Conviértete en Distribuidora H2O Deportiva
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">
            En H2O Deportiva, te ofrecemos la oportunidad de ser parte de
            nuestra red de distribuidoras y aprovechar los increíbles precios
            que tenemos para ti. Nuestra pasión por el deporte y la moda nos
            impulsa a llevar la mejor ropa deportiva de mujer directamente a tus
            manos para que puedas emprender tu propio negocio de reventa.
          </p>
          <div className="flex md:mt-4 mt-6">
            <a className="text-blue-500 inline-flex items-center ml-4">
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
