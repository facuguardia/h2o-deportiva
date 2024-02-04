import Modal from "./Modal"

function CardProducts({image, article, price}) {
  return (
    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
    <a className="overflow-hidden rounded">
      <img
        alt="ecommerce"
        className="block object-cover object-center h-[400px] w-[300px] transition-all duration-500 ease-in-out cursor-pointer hover:opacity-70"
        src={image}
      />
    </a>
    <div className="mt-4">
      <h3 className="mb-1 text-xs tracking-widest text-red-500 title-font">
        SALE
      </h3>
      <h2 className="text-lg font-medium title-font">
        {article}
      </h2>
      <p className="mt-1 text-2xl font-semibold text-right text-white">$ {price}</p>
      <Modal />
    </div>
  </div>
  )
}

export default CardProducts