import ButtonMenu from "../../components/buttonMenu/buttonMenu";
import Header from "../../components/header/header";
import './homefunc.css'

export default function HomeFunc(){
    return (
        <>
            <div className="container">
                <Header logoURL={""}/>
                <h1>Home Page</h1>
                <ButtonMenu
                buttonName="Ver os pedidos"/>
                <ButtonMenu
                buttonName="Ver os pedidos"/>
                <ButtonMenu
                buttonName="Configuração de funcionarios"/>
            </div>
        </>
    )
}