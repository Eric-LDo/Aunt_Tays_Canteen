import { MouseEventHandler } from "react";
import ButtonMenu from "../buttonMenu/buttonMenu";
import Closed from '../closed/closed'


import './telaLogin.css'

interface Props{
    onClosed:MouseEventHandler
}
const TelaLogin = ({onClosed}:Props) => (

    <div className="telaLogin">

        <div className="form">
            <div className="closed" onClick={onClosed}><Closed /></div>
            <form method="post" action="#">
                <h1>Log in</h1>
                <label htmlFor="email">
                    Email:<input type="email" id="in1" placeholder="Enter your email here" />
                </label>
                <br />
                <label htmlFor="password">

                    Password:<input type="password" name="password" id="in2" placeholder="Enter your password here" />
                </label>
                <p>you don't have a <a href="/cadastro">registration</a></p>
                <div>
                    <ButtonMenu buttonName={'Enter'} />
                </div>
            </form>
        </div>
    </div>
)

export default TelaLogin;


