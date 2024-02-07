import { Link } from "react-router-dom";
import CardProducts from "../components/CardProducts";
import { IoIosArrowDown } from "react-icons/io";

const Products = () => {
  return (
    <section id="products" className="text-gray-400 bg-gray-900 body-font">
      <h1 className="flex items-center justify-center w-full pt-10 text-5xl text-white uppercase ">
        Hot Sale
      </h1>

      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Articulo 1 */}
          <CardProducts
            price="3199.99"
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            importantInfo=""
            description="Chupin negro liso es una prenda de vestir moderna y versátil
            que se adapta perfectamente a las tendencias de la moda
            actual. Confeccionado con materiales de alta calidad, este
            pantalón chupin ofrece un ajuste ceñido y cómodo que realza
            la figura masculina con estilo y elegancia."
          />

          {/* Articulo 2 */}
          <CardProducts
            price="6599.99"
            image="./images/items2.jpg"
            article="Art 55 - Calsa corta colores varios"
            importantInfo="Compra con retiro en sucursal para una experiencia de elegancia formal."
            description="Sumérgete en la elegancia nocturna con nuestro Chupín azul oscuro liso. Este pantalón slim fit, confeccionado con materiales de alta calidad, garantiza un ajuste cómodo y resalta la figura masculina con un toque de sofisticación."
          />

          {/* Articulo 3 */}
          <CardProducts
            price="8499.99"
            image="./images/items3.jpg"
            article="Art 42 - Chupín azul oscuro liso"
            importantInfo=""
            description="Chupin negro liso es una prenda de vestir moderna y versátil
            que se adapta perfectamente a las tendencias de la moda
            actual. Confeccionado con materiales de alta calidad, este
            pantalón chupin ofrece un ajuste ceñido y cómodo que realza
            la figura masculina con estilo y elegancia."
          />

          {/* Articulo 4 */}
          <CardProducts
            price="6599.99"
            image="./images/items4.jpg"
            article="Art 38 - Calsa corta gris"
            importantInfo=""
            description="Chupin negro liso es una prenda de vestir moderna y versátil
            que se adapta perfectamente a las tendencias de la moda
            actual. Confeccionado con materiales de alta calidad, este
            pantalón chupin ofrece un ajuste ceñido y cómodo que realza
            la figura masculina con estilo y elegancia."
          />
        </div>

        <div className="flex items-center justify-center mt-20">
          <Link to="/products" target="_blank">
            <button className="flex justify-center items-end text-2xl text-white transition-all hover:text-slate-400">
              Ver más
              <IoIosArrowDown className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;