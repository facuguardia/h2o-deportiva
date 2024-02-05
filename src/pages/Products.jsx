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
            price="3199.99"
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            importantInfo="Recuerda que la compra se retira en nuestra sucursal"
            description="Chupin negro liso es una prenda de vestir moderna y versátil
            que se adapta perfectamente a las tendencias de la moda
            actual. Confeccionado con materiales de alta calidad, este
            pantalón chupin ofrece un ajuste ceñido y cómodo que realza
            la figura masculina con estilo y elegancia."
          />

          {/* Articulo 2 */}
          <CardProducts
            price="3199.99"
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            importantInfo="Recuerda que la compra se retira en nuestra sucursal"
            description="Chupin negro liso es una prenda de vestir moderna y versátil
            que se adapta perfectamente a las tendencias de la moda
            actual. Confeccionado con materiales de alta calidad, este
            pantalón chupin ofrece un ajuste ceñido y cómodo que realza
            la figura masculina con estilo y elegancia."
          />

          {/* Articulo 3 */}
          <CardProducts
            price="3199.99"
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            importantInfo="Recuerda que la compra se retira en nuestra sucursal"
            description="Chupin negro liso es una prenda de vestir moderna y versátil
            que se adapta perfectamente a las tendencias de la moda
            actual. Confeccionado con materiales de alta calidad, este
            pantalón chupin ofrece un ajuste ceñido y cómodo que realza
            la figura masculina con estilo y elegancia."
          />

          {/* Articulo 4 */}
          <CardProducts
            price="3199.99"
            image="./images/items1.jpg"
            article="Art 38 - Chupín negro liso"
            importantInfo="Recuerda que la compra se retira en nuestra sucursal"
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

<div className="w-full h-auto bg-gray-700 rounded-lg shadow sm:flex sm:flex-row sm:justify-center">
  {/* Imagen */}
  <div className="p-4 sm:w-1/2 sm:flex sm:flex-col sm:items-center">
    <img
      src="/images/items1.jpg"
      alt="image of the product"
      className="w-full h-full rounded-xl"
    />
  </div>

  {/* Box descripción */}
  <div className="p-4 sm:w-1/2 sm:flex sm:flex-col sm:items-start">
    {/* Articulo */}
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold text-white">
        Art 38 - Chupin negro liso
      </h1>
    </div>

    {/* Descripcion */}
    <div className="pt-4">
      <p className="text-gray-300">
        Chupin negro liso es una prenda de vestir moderna y versátil que se
        adapta perfectamente a las tendencias de la moda actual. Confeccionado
        con materiales de alta calidad, este pantalón chupin ofrece un ajuste
        ceñido y cómodo que realza la figura masculina con estilo y elegancia.
        <br />
        <br />
        {/* Alerta */}
        <strong className="text-red-400">
          Recuerda que la compra se retira en nuestra sucursal
        </strong>
      </p>
    </div>

    {/* Boton comprar */}
    <div className="w-full flex justify-center mt-5">
      <ButtonMP />
    </div>
  </div>
</div>;
