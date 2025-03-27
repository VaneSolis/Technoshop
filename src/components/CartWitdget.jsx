import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import './CartWitdget.css';
export default function CartWidget () {

        const{cantidadEnCarrito} = useContext(CartContext);

    return (
        <>
          <Link to={'/carrito'} className="cartIcon">
          🛒
            <span className="numerito"> {cantidadEnCarrito()}</span>
            </Link>
 
        </>
       ) 
    
}
