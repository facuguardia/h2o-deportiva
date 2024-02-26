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
            price="4199.99"
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
            price="3699.99"
            image="./images/items2.jpg"
            article="Art 55 - Top negro espalda en v"
            importantInfo=""
            description="El top negro espalda en V es una prenda elegante y sofisticada que te hará lucir radiante en cualquier ocasión. Confeccionado con materiales de alta calidad, este top ofrece un ajuste ceñido y cómodo, realzando tu figura de manera elegante. Su espalda en forma de V agrega un toque de sensualidad y estilo."
          />

          {/* Articulo 3 */}
          <CardProducts
            price="8999.99"
            image="./images/items3.jpg"
            article="Art 42 - Conjunto deportivo gris"
            importantInfo=""
            description="Chupin negro liso es una prenda de vestir moderna y versátil
            que se adapta perfectamente a las tendencias de la moda
            actual. Confeccionado con materiales de alta calidad, este
            pantalón chupin ofrece un ajuste ceñido y cómodo que realza
            la figura masculina con estilo y elegancia."
          />

          {/* Articulo 4 */}
          <CardProducts
            price="4999.99"
            image="./images/items4.jpg"
            article="Art 38 - Remera cubre top"
            importantInfo=""
            description="La remera cubre top es una prenda versátil y moderna que combina estilo y comodidad. Confeccionada con materiales de alta calidad, esta remera ofrece un ajuste ceñido y favorecedor. Su diseño único y elegante la convierte en una opción perfecta para cualquier ocasión."
          />
        </div>

        <div className="flex items-center justify-center mt-20">
          <Link to="/shop">
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
