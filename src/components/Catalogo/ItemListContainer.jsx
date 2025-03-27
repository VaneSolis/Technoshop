import { useNavigate, useParams } from "react-router-dom";
import './ItemListCont.css'
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";

export default function ProductsComponent() {
    const navigate = useNavigate();
    const { category } = useParams();
    const [state, setState] = useState({
        products: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        let mounted = true;

        const fetchProducts = async () => {
            if (!mounted) return;

            setState(prev => ({ ...prev, loading: true, error: null }));
            
            try {
                const productsData = await getProducts;
                
                if (!mounted) return;

                const filteredProducts = category ? 
                    productsData.filter(product => product.category.toLowerCase() === category.toLowerCase()) :
                    productsData;

                setState({
                    products: filteredProducts,
                    loading: false,
                    error: null
                });
            } catch (err) {
                console.error("Error fetching products:", err);
                if (mounted) {
                    setState({
                        products: [],
                        loading: false,
                        error: "Error al cargar los productos. Por favor, intente nuevamente."
                    });
                }
            }
        };

        fetchProducts();

        return () => {
            mounted = false;
        };
    }, [category]);

    const handleClick = (id) => {
        if (id) {
            navigate(`/product/${id}`, { replace: true });
        }
    };

    const { products, loading, error } = state;

    if (loading) {
        return (
            <main className="contbig loading">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Cargando productos...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="contbig error">
                <div className="error-container">
                    <p>{error}</p>
                    <button onClick={() => {
                        setState(prev => ({ ...prev, loading: true, error: null }));
                        const fetchProducts = async () => {
                            try {
                                const productsData = await getProducts;
                                const filteredProducts = category ? 
                                    productsData.filter(product => product.category.toLowerCase() === category.toLowerCase()) :
                                    productsData;
                                setState({
                                    products: filteredProducts,
                                    loading: false,
                                    error: null
                                });
                            } catch (err) {
                                console.error("Error fetching products:", err);
                                setState({
                                    products: [],
                                    loading: false,
                                    error: "Error al cargar los productos. Por favor, intente nuevamente."
                                });
                            }
                        };
                        fetchProducts();
                    }}>
                        Reintentar
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="contbig">
            <h1>{category ? `${category}` : 'Descubre nuestros productos'}</h1>
            {!products || products.length === 0 ? (
                <p className="no-products">No hay productos disponibles en esta categoría.</p>
            ) : (
                <section className="prodcards">
                    {products.map(product => (
                        <article key={product.id} className="product-card">
                            <div className="img-container">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.src = '/placeholder-image.jpg';
                                    }}
                                />
                            </div>
                            <div className="product-info">
                                <h4>{product.title}</h4>
                                <p className="price">$ {product.price?.toLocaleString()}</p>
                                <button 
                                    onClick={() => handleClick(product.id)}
                                    aria-label={`Ver detalles de ${product.title}`}
                                >
                                    Ver detalles
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </main>
    );
}