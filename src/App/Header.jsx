import { Link } from "react-router-dom";
import { Cabecalho, ParagraphTitle, a } from "../Style/Index";
import logo from '../Assets/loog.jpg'

const Header = () => {
    return(
        <Cabecalho>
            <Link to={'/'}><ParagraphTitle>Home</ParagraphTitle></Link>
            <Link to={'/sobre'}><ParagraphTitle>Sobre</ParagraphTitle></Link>
            <img src={logo} alt="" className="imageLogo"/>
            <Link to={'/carreira'}><ParagraphTitle>Carreira</ParagraphTitle></Link>
            <Link to={'/Integrantes'}><ParagraphTitle>Integrantes</ParagraphTitle></Link>
        </Cabecalho>
    )
}

export default Header;