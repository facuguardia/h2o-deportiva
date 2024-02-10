import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function MenuMobile() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div
      className={`lg:hidden bg-black bg-opacity-90 fixed flex justify-center items-center w-full h-full z-50 transition-all duration-500 ${
        menu ? "top-0" : "-top-full"
      }`}
    >
      <nav className="h-screen flex flex-col justify-center items-center">
        {/* Items 1 */}
        <HashLink
          to="#header"
          className="w-[90%] h-auto flex justify-center border-b-[2px] border-orange-500 px-4 py-3 text-white hover:text-orange-500"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            Inicio
          </span>
        </HashLink>
        {/* Items 2 */}
        <HashLink
          to="#products"
          className="w-[90%] h-auto flex justify-center items-center gap-3 border-b-[2px] border-orange-500 px-4 py-3 text-white hover:text-orange-500"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            Tienda
          </span>
        </HashLink>
        {/* Items 3 */}
        <HashLink
          to="#testimonial"
          className="w-[90%] h-auto flex justify-center items-center gap-3 border-b-[2px] border-orange-500 px-4 py-3 text-white hover:text-orange-500"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            Clientes
          </span>
        </HashLink>
        {/* Items 4 */}
        <HashLink
          to="#contact"
          className="w-[90%] h-auto flex justify-center items-center gap-3 px-4 py-3 text-white hover:text-orange-500"
          onClick={closeMenu}
        >
          <span className="text-2xl font-medium flex items-center gap-3">
            Revendedores
          </span>
        </HashLink>
      </nav>
      {/* Button Mobile */}
      <button
        onClick={() => setMenu(!menu)}
        className="lg:hidden fixed right-4 bottom-4 text-xl bg-black/80 p-2.5 rounded-full text-orange-500 z-50"
      >
        {menu ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </div>
  );
}

export default MenuMobile;