import { HashLink } from "react-router-hash-link";
import {IoIosArrowDown} from "react-icons/io";

function Navbar() {
  const download = () => {
    window.open(
      "https://1drv.ms/b/s!Aqsi3vU5uRP4nIJNoNsJ81Yq-KSSCg?e=BneeDN",
      "_blank"
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 text-gray-400 bg-gray-900">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <HashLink
          to="#header"
          className="flex items-center mb-4 font-medium text-white title-font md:mb-0"
        >
          <img
            src="/images/logo.png"
            className="w-12 h-12"
            alt=""
          />

          <span className="ml-3 text-xl">H2O Deportiva</span>
        </HashLink>
        <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700">
          <ul>
            <HashLink to="#header" className="mr-5 hover:text-white">
              Inicio
            </HashLink>
            <HashLink to="#products" className="mr-5 hover:text-white">
              Tienda
            </HashLink>
            <HashLink to="#testimonial" className="mr-5 hover:text-white">
              Clientes
            </HashLink>
            <HashLink to="#contact" className="mr-5 hover:text-white">
              Revendedores
            </HashLink>
          </ul>
        </nav>
        <button
          className="inline-flex items-end px-3 py-1 mt-4 text-white bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0"
          onClick={() => download()}
        >
          Catálogo
          <IoIosArrowDown className="ml-2" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
