import { Link } from "react-router-dom";
import icon1 from "./assets/image22.png";
import icon2 from "./assets/image23.png";
import icon3 from "./assets/image25.png";
import icon4 from "./assets/Group35.png";

function Footer() {
    return (
        <>
            <footer>
                <div class="guppi">
                    <div class="kompani">
                        <h1>Компания</h1>
                        <Link to="">О нас</Link>
                        <Link to="">Достижения</Link>
                        <Link to="">История</Link>
                        <Link to="">Новости и<br/> акции</Link>
                    </div>
                    <div class="kompani">
                        <h1>Информация</h1>
                        <Link to="">Документы</Link>
                        <Link to="">Вакансии</Link>
                    </div>
                    <div class="kompani">
                        <h1>Контакты</h1>
                        <p>Телефон: 89005055555</p>
                        <p>Почта: moikom@gmail.com</p>
                        <div class="soc">
                            <Link to=""><img src={icon1}/></Link>
                            <Link to=""><img src={icon2}/></Link>
                        </div>
                    </div>

                    <div class="kompani">
                        <Link to=""><img src={icon4}/></Link>
                        <Link to=""><img src={icon3}/></Link>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;