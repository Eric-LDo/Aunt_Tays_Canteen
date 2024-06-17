import ButtonMenu from "../../components/buttonMenu/buttonMenu";
import Header from "../../components/header/header";
import './homefunc.css'

export default function HomeFunc(){
    return (
        <>
            <div className="container">
                <Header logoURL={"../../../image/logo/logo.png"}/>
                <h1>Home Page</h1>
                <a href="verpedidos">
                    <ButtonMenu
                    buttonName="Ver os pedidos"/>
                </a>
                <ButtonMenu
                buttonName="Configuração dos produtos"/>
                <ButtonMenu
                buttonName="Configuração de funcionarios"/>
            </div>
        </>
    )
}
