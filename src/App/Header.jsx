import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <Link to={'/'}>Pagina Incial</Link>
            <Link to={'/'}>Sobre</Link>
            <Link to={'/'}>Contato</Link>
        </header>
    )
}

export default Header;