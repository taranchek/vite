import group37 from "./assets/Group37.png";
import group38 from "./assets/Group38.png";
import group39 from "./assets/Group39.png";
import group40 from "./assets/Group40.png";

function Product() {
    return <>
        <div class="pro">
            <div className="text3">МЫ ПРОИЗВОДИМ</div>
            <div className="blo">
                <div className="block">
                    <img src={group37} alt="" />
                    <div className="text5">Молоко</div>
                    <div className="text6">Наше молоко производится из отборного сырья, что гарантирует его страхую свежесть и
                        богатый состав полезных веществ. </div>
                </div>
                <div className="block">
                    <img src={group38} alt="" />
                    <div className="text5">Йогурты</div>
                    <div className="text6">Наши йогурты производятся из натурального молока с использованием полезных бактерий,
                        способствующих нормализации пищеварения. </div>
                </div>
                <div className="block">
                    <img src={group39} alt="" />
                    <div className="text5">Кефир</div>
                    <div className="text6">Наш кефир обладает неповторимым вкусом и нежной консистенцией. Он получается путем
                        брожения молока полезными бактериями. </div>
                </div>
                <div className="block">
                    <img src={group40} alt="" />
                    <div className="text5">Сыры</div>
                    <div className="text6">Мы используем только лучшие сорта молока для производства наших натуральных и вкусных
                        сыров, которые станут идеальным дополнением к вашему столу.</div>
                </div>
            </div>
        </div>
    </>
}

export default Product;