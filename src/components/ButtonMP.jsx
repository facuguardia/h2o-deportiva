import { Link } from "react-router-dom";

function ButtonMP({price}) {
  return (
    <Link
      to="https://mpago.la/1EXBNt4"
      target="_blank"
      className="flex justify-center items-center px-10 py-2 mt-5 text-xl font-semibold text-white bg-[#009EE3] border-0 rounded w-[100%] focus:outline-none hover:bg-blue-600"
    >
      <button>Pagar $ {price}</button>
    </Link>
  );
}

export default ButtonMP;
