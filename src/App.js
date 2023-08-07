/*
    Armando Rodriguez
    PreEntrega2
*/

import { BrowserRouter, Routes , Route } from "react-router-dom"; //IOmportar componentes para navegación en react
import Layout from "./components/pages/Layout"; //Importar componete Layout
import Home from "./components/pages/Home"; //Importar componete Home
import Error from "./components/pages/Error"; //Importar componete Error
import HoldOn from "./components/pages/HoldOn"; //Importar componete Product
import Product from "./components/pages/Product"; //Importar componete Products
import Products from "./components/pages/Products"; //Importar componete Layout
import "./css/App.css" //Importar hoja de estilo
import "bulma/css/bulma.css"; //Importar librería de estilos

function App(){
    return( //Regresar rutas para navegación, por default la página es error
        <BrowserRouter>     
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="HoldOn" element={<HoldOn/>}/>
                    <Route path="HoldOn" element={<HoldOn/>}/>
                    <Route path="products/:productId" element={<Product/>}/>

                    <Route path="*" element={<Error/>} />
                </Route>        
            </Routes>          
        </BrowserRouter>
    )
}


export default App; //Exportar componente  

/*
    Fin de código
*/