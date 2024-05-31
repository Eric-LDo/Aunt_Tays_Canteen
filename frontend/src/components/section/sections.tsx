import ButtonMenu from '../buttonMenu/buttonMenu';
import './section.css';
interface Props{
    titulo: string,
    texto:  string,
}
function Sections({titulo, texto}:Props){
    return(
        <>
            <section>
                <h1>{titulo}</h1>
                <p>
                {texto}
                </p>
                <ButtonMenu buttonName='Find Your Brownies'/>   
            </section> 
        </>
    )
    
}
export default Sections;