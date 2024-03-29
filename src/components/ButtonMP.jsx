import { Link } from "react-router-dom";

function ButtonMP({price, linkMP}) {
  return (
    <Link
      to={linkMP}
      target="_blank"
      className="flex justify-center items-center px-10 py-2 mt-5 text-xl font-semibold text-white bg-[#009EE3] border-0 rounded w-[100%] focus:outline-none hover:bg-blue-600"
    >
      <button><strong>$ {price}</strong></button>
    </Link>
  );
}

export default ButtonMP;
