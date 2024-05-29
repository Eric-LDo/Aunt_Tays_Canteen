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
                
        </section> 
        </>
        
    )
    
}
export default Sections;