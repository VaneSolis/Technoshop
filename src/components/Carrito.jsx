import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from 'react-router-dom';
import './Carrito.css';

export default function Carrito () {
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }
    
    return (
        <section className="carrito-cont">
            <h1 className="main-title">Carrito</h1>

            {carrito.length === 0 ? (
                <div className="carrito-empty">
                    <h2>El carrito está vacío</h2>
                </div>
            ) : (
                <>
                    {carrito.map((product) => (
                        <div key={product.id} className="carrito-item">
                            <div className="carrito-item-content">
                                <div className="carrito-item-image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="carrito-item-info">
                                    <h2>{product.title}</h2>
                                    <p>Precio unitario: ${product.price.toLocaleString()}</p>
                                    <p>Precio total: ${(product.price * product.cantidad).toLocaleString()}</p>
                                    <p>Cantidad: {product.cantidad}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="carrito-total">
                        <h2>Total: $ {precioTotal().toLocaleString()}</h2>
                        <div className="carrito-actions">
                            <button onClick={handleVaciar}>Vaciar carrito</button>
                            <Link to="/Checkout">Finalizar compra</Link>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}