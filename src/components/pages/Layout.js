import {Outlet}  from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Logo from "../NavBar/media/logo.svg";

function Layout(){

    return (
        <div>          
            <NavBar/>
            <Outlet/>
            <footer class="section is-small">
                <img src={Logo}  width="10%" alt="Logo"/>
                <p>Recuerda seguirnos en nuestras redes sociales</p>
            </footer>
        </div>
    )
}


export default Layout;