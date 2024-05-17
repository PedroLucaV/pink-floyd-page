import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "../Routes/Home";
import Footer from "./Footer.jsx";

const App = () => {
    return(<BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
    </BrowserRouter>)
}

export default App;