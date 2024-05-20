import { Link } from "react-router-dom";
import rainbow from '../Assets/rainbow-line.gif'
import Spot from '../Assets/Spotify_logo_with_text.svg.png'
import { FooterDiv, ParagraphFooter, LinksFooter, SpotFi } from "../Style/Index";

const Footer = () => {
    return (
            <FooterDiv>
                <div>
                    <p className="Rights">&copy; All rights reserved</p>
                </div>
                <LinksFooter>
                    <Link to={'/'}><ParagraphFooter>Home</ParagraphFooter></Link>
                    <Link to={'/sobre'}><ParagraphFooter>Sobre</ParagraphFooter></Link>
                    <Link to={'/carreira'}><ParagraphFooter>Carreira</ParagraphFooter></Link>
                    <Link to={'/Integrantes'}><ParagraphFooter>Integrantes</ParagraphFooter></Link>
                </LinksFooter>
                <img src={rainbow} alt="" className="raibow" />
                <SpotFi>
                    <a href="https://open.spotify.com/intl-pt/artist/0k17h0D3J5VfsdmQ1iZtE9" target={"blank"}><img src={Spot} alt="" className="Spot" /></a>
                </SpotFi>
            </FooterDiv>
    )
}

export default Footer;