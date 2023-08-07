import { Link } from "react-router-dom"
import CarWidget from "../CarWidget/CarWidget";
import Logo from "./media/logo.svg";


function NavBar(){
    return(
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <a class="navbar-item">
                <Link to="/"><img src={Logo} width="112" height="28" alt="Logo"/></Link>
            </a>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <Link to="/products" class="navbar-item">PC</Link>
                    <Link to="/HoldOn" class="navbar-item">Phones</Link>
                    <Link to="/HoldOn" class="navbar-item">Tablets</Link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="shoppingCart">
                            <CarWidget/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;
