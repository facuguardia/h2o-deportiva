import { useState } from "react";

function Modal() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="flex justify-center items-center px-4 py-2 mt-5 text-xl font-semibold text-white bg-blue-500 border-0 rounded w-[100%] focus:outline-none hover:bg-blue-600"
        type="button"
      >
        Comprar
      </button>
      {modalVisible && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full"
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative flex items-center justify-center w-full max-w-2xl p-4 overflow-x-hidden overflow-y-auto">
            <div className="w-full h-auto bg-white rounded-lg shadow dark:bg-gray-700 sm:flex sm:flex-row sm:justify-center">
              <div className="p-4 sm:w-1/2 sm:flex sm:flex-col sm:items-center">
                <img
                  src="./images/items1.jpg"
                  alt=""
                  className="w-auto h-72 rounded-xl"
                />
              </div>
              <div className="p-4 sm:w-1/2 sm:flex sm:flex-col sm:items-start">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-semibold text-white">
                    Art 38 - Chupin negro liso
                  </h1>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="pt-4">
                  <p className="text-gray-300">
                    Chupin negro liso es una prenda de vestir moderna y
                    versátil que se adapta perfectamente a las tendencias de la
                    moda actual. Confeccionado con materiales de alta calidad,
                    este pantalón chupin ofrece un ajuste ceñido y cómodo que
                    realza la figura masculina con estilo y elegancia.
                    <br />
                    <br />
                    <strong className="text-red-400">
                      Recuerda que la compra se retira en nuestra sucursal
                    </strong>
                  </p>
                </div>
                <div className="flex justify-center pb-4">
                  <button className="flex items-center justify-center w-full max-w-xs py-2 text-lg font-semibold text-gray-100 bg-blue-400 border-blue-700 rounded-full shadow-md cursor-pointer hover:bg-blue-400/50">
                    Mercado Pago
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
