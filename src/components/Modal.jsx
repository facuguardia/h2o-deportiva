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
        className="inline-flex text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-lg mt-2"
        type="button"
      >
        Ver
      </button>
      {modalVisible && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full"
        >
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative w-auto max-w-2xl p-4 overflow-x-hidden overflow-y-auto flex justify-center items-center">
            <div className="relative w-[2000px] h-auto p-5 bg-white rounded-lg shadow dark:bg-gray-700">
              <div>
                <div className="flex justify-between items-center pl-4 ">
                  <h1 className="text-xl text-white font-semibold ">Art 38 - Chupin negro liso</h1>
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
                <div className="flex justify-between items-center py-2 px-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="./images/items1.jpg"
                      alt=""
                      className="w-auto h-72 rounded-xl"
                    />
                    <div className="flex flex-col gap-4">
                      <p className="text-gray-300">
                        Chupin negro liso es una prenda de vestir moderna y
                        versátil que se adapta perfectamente a las tendencias de
                        la moda actual. Confeccionado con materiales de alta
                        calidad, este pantalón chupin ofrece un ajuste ceñido y
                        cómodo que realza la figura masculina con estilo y
                        elegancia.
                        <br />
                        <br />
                        <strong className="text-red-400">
                          Recuerda que la compra se retira en nuestra sucursal
                        </strong>
                      </p>
                      <button className="w-full bg-blue-400 border-blue-700 rounded-full py-2 text-gray-100 text-lg font-semibold flex justify-center items-center shadow-md cursor-pointer hover:bg-blue-400/50">Mercado Pago</button>
                    </div>
                  </div>
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
