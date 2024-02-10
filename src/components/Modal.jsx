import { useState } from "react";
import ButtonModal from "./ButtonModal";
import CardModal from "./CardModal";

function Modal({ title, description, importantInfo, image }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {/* Boton open modal */}
      <ButtonModal toggleModal={toggleModal} />

      {modalVisible && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full"
        >
          {/* Fondo opacity */}
          <div className="fixed inset-0 bg-black opacity-80"></div>

          {/* Contenido */}
          <div className="relative flex items-center justify-center w-full max-w-2xl p-4 overflow-x-hidden overflow-y-auto">
            {/* Modal */}
            <CardModal
              title={title}
              description={description}
              importantInfo={importantInfo}
              image={image}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
