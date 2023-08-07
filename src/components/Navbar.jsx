import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const download = () => {
    window.open(
      "https://1drv.ms/b/s!Aqsi3vU5uRP4nIJNoNsJ81Yq-KSSCg?e=BneeDN",
      "_blank"
    );
  };

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img
            src="./../../public/images/Logo.png"
            className="w-12 h-12"
            alt=""
          />

          <span className="ml-3 text-xl">H2O Deportiva</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <ul>
            <NavLink to="/" className="mr-5 hover:text-white">
              Inicio
            </NavLink>
            <NavLink to="/products" className="mr-5 hover:text-white">
              Tienda
            </NavLink>
            <NavLink to="/testimonial" className="mr-5 hover:text-white">
              Nosotros
            </NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-white">
              Revendedores
            </NavLink>
          </ul>
        </nav>
        <button
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={() => download()}
        >
          Catálogo 2023
          <svg
            fill="none"
            className="w-4 h-4 ml-1 rotate-90"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
