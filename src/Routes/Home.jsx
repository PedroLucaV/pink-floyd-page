import { Main, Carrossel, List } from "../Style/Index";
import img1 from "../Assets/image1.jpg"
import img2 from "../Assets/image2.jpg"
import img3 from "../Assets/image3.jpg"

const Home = () => {
    return (
        <Main>
            <h1>Pink Floyd, Página de Fã</h1>
            <Carrossel>
                <List><img src={img1} className="img" alt="" srcset="" /></List>
                <List><img src={img2} className="img" alt="" srcset="" /></List>
                <List><img src={img3} className="img" alt="" srcset="" /></List>
            </Carrossel>
        </Main>
    )
}
export default Home;