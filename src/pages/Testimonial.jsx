import CardTestimonial from "../components/CardTestimonial";

function Testimonial() {
  return (
    <section id="testimonial" className="text-gray-600 bg-gray-300 h-[600px] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap ">
          <CardTestimonial
            image="/images/prof4.jpg"
            name="LAURA GARCÍA"
            text="¡Estoy encantada con mis nuevos leggings ActiveFit de H2O Deportiva! Son cómodos, flexibles y se ajustan perfectamente. Los he usado en mis sesiones de yoga y entrenamientos intensos, y siempre se mantienen en su lugar. Además, el precio fue increíble. ¡Definitivamente volveré a comprar más prendas en esta tienda!"
          />

          <CardTestimonial
            image="/images/prof2.jpg"
            name="MARÍA FERNÁNDEZ"
            text="¡El conjunto PowerMove es todo lo que esperaba y más! Me siento
            súper motivada cuando me lo pongo. La tela es suave y
            transpirable, ideal para mis clases de baile. El diseño es
            moderno y elegante.¡Gracias, H2O Deportiva, por esta increíble
            oferta y por hacer que mi experiencia de compra sea tan
            satisfactoria!"
          />

          <CardTestimonial
            image="/images/prof3.jpg"
            name="ANA MARTÍNEZ"
            text="¡Este sujetador es un verdadero salvavidas! Como una entusiasta
            del running, necesitaba algo que me brindara el soporte
            adecuado, y el Sujetador Endurance de H2O Deportiva lo hizo. Es
            cómodo, proporciona un ajuste perfecto y evita cualquier
            molestia durante mis carreras. ¡Gracias por pensar en nosotras siempre!"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
