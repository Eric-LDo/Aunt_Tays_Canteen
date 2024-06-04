import './buttonMenu.css';
interface Props{
    buttonName:string;

}
function ButtonMenu({buttonName}:Props){
    return(
        
            <button className='buttonMenu'>
                {buttonName}
            </button>
          
    )
}
export default ButtonMenu;