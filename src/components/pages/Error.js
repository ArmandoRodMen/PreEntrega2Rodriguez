/*
    Armando Rodriguez
    PreEntrega2
*/

import { Link } from "react-router-dom" //Importar componente de react para linkear y navegar
import logo from "../NavBar/media/logo.svg"; //Importar logo vector

function Error(){

    return ( //Regresar elementos para la página de error
        <div class="section is-large">
            <div class="box is-primary">
                <h2 class="title is-1 section is-large">Error 404</h2> 
                <h3 class="subtitle is-1 section is-large">Página no encotrada</h3> 
                <img src={logo}  width="112" height="28" alt="Logo"/>
                <button class="button is-rounded"><Link to="/">Volver</Link></button> 
            </div>
        </div>
    )
}


export default Error; //Exportar componente

/*
    Fin de código
*/