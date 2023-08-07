import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            src="./../../public/images/Logo.png"
            className="w-12 h-12"
            alt=""
          />
          <span className="ml-3 text-xl">H2O Deportiva</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 Facu Guardia —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @facuguardia
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400">
            {/* instagram */}
            <SiInstagram />
          </a>
          <a className="ml-3 text-gray-400">
            {/* facebook */}
            <SiFacebook />
          </a>
          <a className="ml-3 text-gray-400">
            {/* Whatsapp */}
            <SiWhatsapp />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
