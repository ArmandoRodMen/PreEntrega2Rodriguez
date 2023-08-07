/*
    Armando Rodriguez
    PreEntrega2
*/

import {Outlet}  from "react-router-dom"; //Imporatar componente para compartir etiquetas html de hijo a padre similar a ajax
import NavBar from "../NavBar/NavBar"; //Importar componente barra de navegación 
import logo from "../NavBar/media/logo.svg"; //Importar logo vector

function Layout(){

    return ( //Regresar barra de navegación, y pie de página como elementos que preservarán los hijos
        <div>         
            <NavBar/>
            <Outlet/>
            <footer class="section is-small">
                <img src={logo}  width="10%" alt="Logo"/>
                <p>Recuerda seguirnos en nuestras redes sociales</p>
            </footer>
        </div>
    )
}


export default Layout; //Exportar componente

/*
    Fin de código
*/