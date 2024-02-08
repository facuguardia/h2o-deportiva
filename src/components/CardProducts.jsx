import Modal from "./Modal"

function CardProducts({image, article, price, description, importantInfo = "Retirar en sucursal"}) {
  return (
    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
    <a className="overflow-hidden rounded">
      <img
        alt="image of product"
        className="block object-cover object-center h-[500px] w-full transition-all duration-500 cursor-pointer"
        src={image}
      />
    </a>
    <div className="mt-4">
      <h3 className="mb-1 text-xs tracking-widest text-red-500 title-font font-bold">
        SALE
      </h3>
      <h2 className="text-lg md:text-base font-medium title-font" style={{ whiteSpace: 'nowrap' }}>
        {article}
      </h2>
      <p className="mt-1 text-2xl font-semibold text-right text-white">$ {price}</p>
      <Modal title={article} description={description} importantInfo={importantInfo} image={image} />
    </div>
  </div>
  )
}

export default CardProducts