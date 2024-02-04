import Header from "../pages/Header";
import Testimonial from "../pages/Testimonial";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";

function App() {
  return (
    <Layout>
      <div>
        <Header />
        <Testimonial />
        <Products />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
