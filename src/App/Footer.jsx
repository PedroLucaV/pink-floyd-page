import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div>
                <p>&copy; All rights reserved</p>
            </div>
            <div>
                <Link to={'/'}>Pagina Incial</Link>
                <Link to={'/'}>Sobre</Link>
                <Link to={'/'}>Contato</Link>
            </div>
        </footer>
    )
}

export default Footer;