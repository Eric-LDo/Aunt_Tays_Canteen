
import HeaderFunc from '../../components/headerfunc/HeaderFunc'
import './confProd.css'
import CadProd from "./cadprod/CadProd.tsx";
import ListProd from "./listProd/ListProd.tsx";
export default function ConfProd(){
    return(
        <>
            <HeaderFunc
                logoURL={""}
            />
            <CadProd/>
            <ListProd/>
        </>
    )
}