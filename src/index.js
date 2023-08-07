/*
PreEntrega1Rodriguez
*/

import React from "react"; //La libreria define que es un componente y como funcionan juntos los componentes
import ReactDOM from "react-dom/client";//Libreria que sabe hacer que un componente aparezca en el navegador
import App from "./App"; //Importación de la App



const el = document.getElementById("root");//Declaración de raíz

const root = ReactDOM.createRoot(el);//Sobreescritura de raíz

root.render(<App/>) //Render de app