import ButtonMenu from "../../components/buttonMenu/buttonMenu";

import HeaderFunc from "../../components/headerfunc/HeaderFunc";
import './homefunc.css'

export default function HomeFunc(){
    return (
        <>
            <div className="container">
                <HeaderFunc logoURL={"../../../image/logo/logo.png"}/>
                <h1>Home Page</h1>
                <a href="verpedidos">
                    <ButtonMenu
                    buttonName="Ver os pedidos"/>
                </a>
                <a href="confProd">
                    <ButtonMenu
                    buttonName="Configuração dos produtos"/>
                </a>
                <a href="ConfFunc">
                    <ButtonMenu
                    buttonName="Configuração de funcionarios"/>
                </a>
            </div>
        </>
    )
}
