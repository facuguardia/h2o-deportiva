import Modal from "./Modal";

const Products = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <h1 className="w-full flex justify-center items-center text-5xl uppercase text-white pt-10 ">
        Tienda
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative  rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block hover:opacity-70 transition-all duration-500 ease-in-out cursor-pointer"
                src="./images/items1.jpg"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                SALE
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                Art 38 - Chupín negro liso
              </h2>
              <p className="mt-1">$3199.99</p>
              <Modal />
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative  rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block hover:opacity-70 transition-all duration-500 ease-in-out cursor-pointer"
                src="./images/items2.jpg"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                SALE
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                Art 38 - Chupín negro liso
              </h2>
              <p className="mt-1">$3199.99</p>
              <Modal />
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative  rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block hover:opacity-70 transition-all duration-500 ease-in-out cursor-pointer"
                src="./images/items2.jpg"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                SALE
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                Art 38 - Chupín negro liso
              </h2>
              <p className="mt-1">$3199.99</p>
              <Modal />
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative  rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block hover:opacity-70 transition-all duration-500 ease-in-out cursor-pointer"
                src="./images/items1.jpg"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                SALE
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                Art 38 - Chupín negro liso
              </h2>
              <p className="mt-1">$3199.99</p>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
