import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "../Routes/Home";
import Sobre from "../Routes/Sobre";
import Carreira from "../Routes/Carreira";
import Integrantes from "../Routes/Integrantes";
import Footer from "./Footer.jsx";
import Pagina404 from "../Routes/Pagina404.jsx"

const App = () => {
    return(<div className="asd">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/carreira" element={<Carreira />} />
                <Route path="/integrantes" element={<Integrantes />} />
                <Route path="*" element={<Pagina404 />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>)
}

export default App;