import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "../Routes/Home";
import Sobre from "../Routes/Sobre";
import Carreira from "../Routes/Carreira";
import Integrantes from "../Routes/Integrantes";
import Footer from "./Footer.jsx";

const App = () => {
    return(<BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/carreira" element={<Carreira />} />
            <Route path="/integrantes" element={<Integrantes />} />
        </Routes>
        <Footer/>
    </BrowserRouter>)
}

export default App;