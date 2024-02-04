import { Link } from "react-router-dom";
import CardProducts from "../components/CardProducts";
import { IoIosArrowDown } from "react-icons/io";

const Products = () => {
  return (
    <section id="products" className="text-gray-400 bg-gray-900 body-font">
      <h1 className="flex items-center justify-center w-full pt-10 text-5xl text-white uppercase ">
        Tienda
      </h1>

      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Articulo 1 */}
          <CardProducts
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            price="3199.99"
          />

          {/* Articulo 2 */}
          <CardProducts
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            price="3199.99"
          />

          {/* Articulo 3 */}
          <CardProducts
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            price="3199.99"
          />

          {/* Articulo 4 */}
          <CardProducts
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            price="3199.99"
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
