import Home from "./component/Home/Home";
import Product from "./component/Product/Product";
import Service from "./component/Service/Service";
import Content from "./component/Content/Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Blog from "./component/Blog/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      <Footer /> 
      </BrowserRouter>
    </>
  );
}

export default App;
