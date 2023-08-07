import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Testimonial />
      <Products />
      <Contact />
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
