import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import { useEffect, useState } from "react";
import './CategoryComponent.css';

export default function CategoryComponent() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { catName } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(data => {
                const filteredProducts = data.filter(product => 
                    product.category.toLowerCase() === catName.toLowerCase()
                );
                setProducts(filteredProducts);
            })
            .catch(err => {
                setError("Error al cargar los productos. Por favor, intente nuevamente.");
                console.error("Error fetching products:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [catName]);

    if (loading) {
        return (
            <div className="category-container">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Cargando productos...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="category-container">
                <div className="error-container">
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>Reintentar</button>
                </div>
            </div>
        );
    }

    return (
        <div className="category-container">
            <div className="category-header">
                <h1 className="category-title">{catName}</h1>
                <p className="category-description">
                    Explora nuestra selección de productos en la categoría {catName}
                </p>
            </div>

            {products.length === 0 ? (
                <div className="no-products">
                    <p>No hay productos disponibles en esta categoría.</p>
                </div>
            ) : (
                <div className="category-grid">
                    {products.map(product => (
                        <article key={product.id} className="category-product-card">
                            <img 
                                src={product.image} 
                                alt={product.title}
                                className="category-product-image"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src = '/placeholder-image.jpg';
                                }}
                            />
                            <div className="category-product-info">
                                <h2 className="category-product-title">{product.title}</h2>
                                <p className="category-product-price">
                                    $ {product.price.toLocaleString()}
                                </p>
                                <p className="category-product-description">
                                    {product.description}
                                </p>
                                <button 
                                    className="category-product-button"
                                    onClick={() => navigate(`/product/${product.id}`)}
                                    aria-label={`Ver detalles de ${product.title}`}
                                >
                                    Ver detalles
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}