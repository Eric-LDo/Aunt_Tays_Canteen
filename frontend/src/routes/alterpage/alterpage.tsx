
import Header from "../../components/header/header";
import AlterProfile from "./alterprofile/alterprofile";

export default function AlterPage(){
    return (
        <div className="page">
            <Header
                logoURL=''
            />
            
            <AlterProfile/>

        </div>
    )
}