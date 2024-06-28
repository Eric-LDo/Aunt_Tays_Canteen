import ButtonMenu from '../../../../components/buttonMenu/buttonMenu';
import './section.css';
interface Props{
    titulo: string,
    texto1:  string,
    texto2:  string,
    texto3:  string,
    sub1:string,
    sub2:string,
    sub3:string
}
function Sections({titulo, texto1, texto2,texto3, sub1,sub2,sub3}:Props){
    return(
        <>
            <section>
                <h1>{titulo}</h1>

                <h2>{sub1}</h2>
                <p>{texto1}</p>

                <h2>{sub2}</h2>
                <p>{texto2}</p>

                <h2>{sub3}</h2>
                <p>{texto3}</p>
                    <a href="/menu">
                        <ButtonMenu buttonName='Find Your Brownies'/>
                    </a>
            </section> 
        </>
    )
    
}
export default Sections;