/*
    Armando Rodriguez
    PreEntrega2
*/

import Item from "../Item/Item"; //Importar componete Item

const ItemList = ({products}) => { //La función constante recibe productos como propiedad
    return( //Map como función a cada elemento del arreglo para un nuevo arreglo JSX con el componente Item
        <div>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div> //Para cada elemento de prod, se le asigna una clave única, y un spread para desempaquetar las propiedades del objeto
    )
}

export default ItemList //Exportar componente

/*
    Fin de código
*/