import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SiInstagram, SiFacebook } from "react-icons/si";

function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <HashLink to="#header" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            src="/images/logo.png"
            className="w-12 h-12"
            alt=""
          />
          <span className="ml-3 text-xl">H2O Deportiva</span>
        </HashLink>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 Facu Guardia -
          <Link
            to="https://facu-dev.vercel.app/"
            className="text-gray-500 hover:text-gray-400 transition-all ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.facu-dev.vercel.app
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link to="https://www.instagram.com/h2o.deportiva/" target="_blank" className="text-gray-400 hover:text-gray-300 transition-all">
            {/* instagram */}
            <SiInstagram />
          </Link>
          <Link to="" target="_blank" className="ml-3 text-gray-400 hover:text-gray-300 transition-all">
            {/* facebook */}
            <SiFacebook />
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
