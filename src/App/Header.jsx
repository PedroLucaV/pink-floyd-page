import { Link } from "react-router-dom";
import { Cabecalho } from "../Style/Index";

const Header = () => {
    return(
        <Cabecalho>
            <Link to={'/'}>Pagina Incial</Link>
            <Link to={'/sobre'}>Sobre</Link>
            <Link to={'/contato'}>Contato</Link>
        </Cabecalho>
    )
}

export default Header;