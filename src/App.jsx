import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import ApplicationAreas from "./pages/ApplicationAreas.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Contacts from "./pages/Contacts.jsx";

export default function App() {
  return (
    <>
    <Header />
    <Routes>
     
      <Route path="/" element={<HomePage />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/application-areas/" element={<ApplicationAreas />} />
      <Route path="/catalogue/:id" element={<ProductDetail />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    <Footer />
    </>
  );
}