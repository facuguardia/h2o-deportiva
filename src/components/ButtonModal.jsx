function ButtonModal({ toggleModal }) {
  return (
    <button
      onClick={toggleModal}
      className="flex justify-center items-center px-4 py-2 mt-5 text-xl font-semibold text-white bg-blue-500 border-0 rounded w-[100%] focus:outline-none hover:bg-blue-600"
      type="button"
    >
      Comprar
    </button>
  );
}

export default ButtonModal;
