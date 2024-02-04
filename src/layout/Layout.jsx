import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <body>{children}</body>
      <Footer />
    </div>
  );
};

export default Layout;
