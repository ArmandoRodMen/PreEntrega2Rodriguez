import { BrowserRouter, Routes , Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import HoldOn from "./components/pages/HoldOn";
import Product from "./components/pages/Product";
import Products from "./components/pages/Products";
import "./css/App.css"

//Importar librería de estilos
import "bulma/css/bulma.css";

function App(){
    return(
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


export default App;