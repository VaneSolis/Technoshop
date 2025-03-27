import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {useForm} from "react-hook-form";
import {collection, addDoc} from "firebase/firestore";
import {db} from '../../Firebase/Config';
import './Checkout.css'

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const {register, handleSubmit} = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })
    }
    
    if (pedidoId) {
        return (
            <div>
                <h1>Muchas gracias por tu compra</h1>
                <br />
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }
    

    return (
        <>
        <div className="contacto-cont">
            <h1>¡Ya casi está listo!</h1>
            <h3>Agrega tus datos en el siguiente formulario</h3>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
            
            <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
            <br /><br />
            <input type="text" placeholder="Ingresa tu email" {...register("email")} />
            <br /><br />
            <input type="text" placeholder="Ingresa tu teléfono" {...register("teléfono")} />
            <br /><br />
            <button className="enviar" type="submit">Comprar</button>
            
            </form>
        </div>
        </>
    )
}

export default Checkout