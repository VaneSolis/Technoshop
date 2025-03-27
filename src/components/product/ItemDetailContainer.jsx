import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import './ItemDetailCont.css'
import ItemCount from "./ItemCount";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../Firebase/Config";
export default function ItemDetailContainer() {

    const {prodId} = useParams();
    const [product, setProduct] = useState({})

    useEffect (() => {
       
        const docRef = doc(db, "productos", prodId);
        getDoc(docRef)
        .then((resp) => {
            setProduct(
                { ...resp.data(), prodId: resp.prodId}
            );
        })
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