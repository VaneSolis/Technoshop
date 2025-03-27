import { createContext, useCallback, useMemo, useState } from "react";

export const CartContext = createContext();

const getInitialCart = () => {
    const savedCart = localStorage.getItem("carrito");
    return savedCart ? JSON.parse(savedCart) : [];
};

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(getInitialCart);

    const agregarAlCarrito = useCallback((product, cantidad) => {
        setCarrito(prevCarrito => {
            const prodAgregado = { ...product, cantidad };
            const estaEnElCarrito = prevCarrito.find(item => item.id === prodAgregado.id);

            if (estaEnElCarrito) {
                return prevCarrito.map(item =>
                    item.id === prodAgregado.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                );
            }

            return [...prevCarrito, prodAgregado];
        });
    }, []);

    const cantidadEnCarrito = useCallback(() => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }, [carrito]);

    const precioTotal = useCallback(() => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }, [carrito]);

    const vaciarCarrito = useCallback(() => {
        setCarrito([]);
    }, []);

    // Guardar en localStorage cuando el carrito cambie
    useMemo(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const contextValue = useMemo(() => ({
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito
    }), [carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
