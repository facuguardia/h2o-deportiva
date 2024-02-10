import ButtonClose from "./ButtonClose";
import ButtonMP from "./ButtonMP";

function CardModal({ title, description, importantInfo, image, toggleModal }) {
  return (
    <div className="relaitve w-full h-[50%] bg-gray-700 rounded-lg shadow sm:flex sm:flex-row sm:justify-center ">
      {/* Boton cerrar */}
      <div className="absolute top-0 right-0">
        <ButtonClose toggleModal={toggleModal} />
      </div>
      {/* Imagen */}
      <div className="p-4 sm:w-1/2 sm:flex sm:flex-col sm:items-center">
        <img
          src={image}
          alt="image of the product"
          className="w-full h-full rounded-xl"
        />
      </div>

      {/* Box descripción */}
      <div className="p-4 sm:w-1/2 sm:flex sm:flex-col justify-between sm:items-start">
        {/* Articulo */}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white">{title}</h1>
          </div>
          {/* Descripcion */}
          <div className="pt-4">
            <p className="text-gray-300">
              {description}
              <br />
              <br />
              {/* Alerta */}
              <strong className="text-red-400">{importantInfo}</strong>
            </p>
          </div>
        </div>

        {/* Boton comprar */}
        <div className="w-full flex justify-center">
          <ButtonMP />
        </div>
      </div>
    </div>
  );
}

export default CardModal;
