import diplom1 from "./assets/image18.png";
import diplom2 from "./assets/image19.png";
import diplom3 from "./assets/image20.png";
import diplom4 from "./assets/image21.png";

function Dostij() {
    return <>
        <div className="great">
            <div className="zag">
                <h1>ДОСТИЖЕНИЯ И НАГРАДЫ</h1>
            </div>

            <div className="textt1">
                <h2>Продукция с Российским знаком качества!</h2>
                <p>Качество молочных продуктов, произведенных специалистами комбината,<br/>
                    подтверждено многочисленными наградами, дипломами и грамотами. </p>
            </div>
            <div className="diplom">
                <img className="diplo" src={diplom1} />
                <img className="diplo" src={diplom2} />
                <img className="diplo" src={diplom3} />
                <img className="diplo" src={diplom4} />
            </div>

        </div>
    </>
}

export default Dostij;