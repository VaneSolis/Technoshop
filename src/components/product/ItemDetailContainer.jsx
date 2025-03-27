import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import './ItemDetailCont.css'
import ItemCount from "./ItemCount";

export default function ItemDetailContainer() {
    const {prodId} = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const products = await getProducts;
            const foundProduct = products.find(prod => prod.id === parseInt(prodId));
            if (foundProduct) {
                setProduct(foundProduct);
            }
        };
        fetchProduct();
    }, [prodId])
    
    return (
        <>
        <div className="carddet">
            <h1>single product</h1>
            <h3>Nombre: {product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>precio ${product.price}</p>
            <ItemCount product={product} />
        </div>
        </>
    )
}