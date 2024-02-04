function CardTestimonial({ image, name, text }) {
  return (
    <div className="p-4 mb-6 w-52 h-52 lg:w-1/3 lg:mb-0 card-testimonial">
      <div className="h-full text-center">
        <img
          alt="testimonial"
          className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-800 border-2 border-gray-800 rounded-full bg-opacity-10"
          src={image}
        />
        <p className="leading-relaxed">{text}</p>
        <span className="inline-block w-10 h-1 mt-6 mb-4 bg-[#DE8A2E] rounded"></span>
        <h2 className="text-sm font-medium tracking-wider text-black title-font">
          {name}
        </h2>
      </div>
    </div>
  );
}

export default CardTestimonial;
