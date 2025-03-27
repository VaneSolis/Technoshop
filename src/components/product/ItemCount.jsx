import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function ItemCount({product}) {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < product.stock && setCantidad (cantidad+1)
    }

    


    return(
        <>
        <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
        </div>
        <br />
        <button className="agregar-al-carrito" onClick={() =>{agregarAlCarrito(product, cantidad)}}>Agregar al carrito</button>
        </>
    )
}