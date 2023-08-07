import {Outlet}  from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Layout(){

    return (
        <div>          
            <NavBar/>
            <Outlet/>
            <footer>Pie de página</footer>
        </div>
    )
}


export default Layout;