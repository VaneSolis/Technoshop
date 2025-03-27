import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../Firebase/Config';
import './Checkout.css';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const comprar = async (data) => {
        setIsSubmitting(true);
        try {
            const pedido = {
                cliente: data,
                productos: carrito,
                total: precioTotal(),
                fecha: new Date().toISOString()
            };

            const pedidosRef = collection(db, "pedidos");
            const docRef = await addDoc(pedidosRef, pedido);
            setPedidoId(docRef.id);
            vaciarCarrito();
        } catch (error) {
            console.error("Error al procesar el pedido:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    if (pedidoId) {
        return (
            <div className="checkout-success">
                <h1>¡Gracias por tu compra!</h1>
                <div className="success-content">
                    <div className="success-icon">✓</div>
                    <p>Tu pedido ha sido procesado correctamente</p>
                    <p className="order-number">Número de pedido: <span>{pedidoId}</span></p>
                    <p className="order-info">Te enviaremos un correo electrónico con los detalles de tu pedido</p>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Finalizar Compra</h1>
            
            <div className="checkout-content">
                <div className="checkout-form-container">
                    <h2>Información de Contacto</h2>
                    <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre completo</label>
                            <input
                                id="nombre"
                                type="text"
                                placeholder="Ingresa tu nombre completo"
                                {...register("nombre", {
                                    required: "El nombre es requerido",
                                    minLength: {
                                        value: 2,
                                        message: "El nombre debe tener al menos 2 caracteres"
                                    }
                                })}
                            />
                            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                {...register("email", {
                                    required: "El correo electrónico es requerido",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Correo electrónico inválido"
                                    }
                                })}
                            />
                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                id="telefono"
                                type="tel"
                                placeholder="Ingresa tu número de teléfono"
                                {...register("telefono", {
                                    required: "El teléfono es requerido",
                                    pattern: {
                                        value: /^[0-9\s\-\+]{10,}$/,
                                        message: "Número de teléfono inválido"
                                    }
                                })}
                            />
                            {errors.telefono && <span className="error-message">{errors.telefono.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="direccion">Dirección de envío</label>
                            <input
                                id="direccion"
                                type="text"
                                placeholder="Ingresa tu dirección completa"
                                {...register("direccion", {
                                    required: "La dirección es requerida",
                                    minLength: {
                                        value: 10,
                                        message: "La dirección debe tener al menos 10 caracteres"
                                    }
                                })}
                            />
                            {errors.direccion && <span className="error-message">{errors.direccion.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="ciudad">Ciudad</label>
                            <input
                                id="ciudad"
                                type="text"
                                placeholder="Ingresa tu ciudad"
                                {...register("ciudad", {
                                    required: "La ciudad es requerida"
                                })}
                            />
                            {errors.ciudad && <span className="error-message">{errors.ciudad.message}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="codigoPostal">Código Postal</label>
                            <input
                                id="codigoPostal"
                                type="text"
                                placeholder="Ingresa tu código postal"
                                {...register("codigoPostal", {
                                    required: "El código postal es requerido",
                                    pattern: {
                                        value: /^[0-9]{5,}$/,
                                        message: "Código postal inválido"
                                    }
                                })}
                            />
                            {errors.codigoPostal && <span className="error-message">{errors.codigoPostal.message}</span>}
                        </div>

                        <button 
                            className="checkout-button" 
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Procesando...' : 'Finalizar Compra'}
                        </button>
                    </form>
                </div>

                <div className="checkout-summary">
                    <h2>Resumen del Pedido</h2>
                    {carrito.map((item) => (
                        <div key={item.id} className="checkout-item">
                            <div className="checkout-item-info">
                                <span className="checkout-item-name">{item.title}</span>
                                <span className="checkout-item-quantity">x{item.cantidad}</span>
                            </div>
                            <span className="checkout-item-price">
                                ${(item.price * item.cantidad).toLocaleString()}
                            </span>
                        </div>
                    ))}
                    <div className="checkout-total">
                        <span className="checkout-total-label">Total</span>
                        <span className="checkout-total-amount">
                            ${precioTotal().toLocaleString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;