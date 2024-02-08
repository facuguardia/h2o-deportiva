import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuMobile from "../components/MenuMobile";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MenuMobile />
      <body>{children}</body>
      <Footer />
    </div>
  );
};

export default Layout;
