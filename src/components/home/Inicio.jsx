import { memo } from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';
import smartphonesImg from './smartphones.jpeg';
import laptopsImg from './laptops.jpeg';
import tabletsImg from './tablets.jpeg';
import accessoriesImg from './accesorios.jpg';
import bannerImg from './Banner_tecnologialdpi-1.png';

const Inicio = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <img src={bannerImg} alt="Banner Tecnología" className="hero-banner" />
                <div className="hero-content">
                    <h1>BIENVENIDOS A TECHNOSHOP</h1>
                    <p className="hero-subtitle">Descubre la última tecnología al mejor precio</p>
                    <Link to="/Catalogo" className="cta-button">Ver Productos</Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>¿Por qué elegirnos?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <i className="feature-icon">🚚</i>
                        <h3>Envío Gratis</h3>
                        <p>En compras superiores a $50.000</p>
                    </div>
                    <div className="feature-card">
                        <i className="feature-icon">⚡</i>
                        <h3>Última Tecnología</h3>
                        <p>Productos de última generación</p>
                    </div>
                    <div className="feature-card">
                        <i className="feature-icon">🔒</i>
                        <h3>Compra Segura</h3>
                        <p>Garantía en todos los productos</p>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section">
                <h2>Categorías Destacadas</h2>
                <div className="categories-grid">
                    <Link to="/category/celulares" className="category-card">
                        <img src={smartphonesImg} alt="Celulares" loading="lazy" />
                        <h3>Celulares</h3>
                    </Link>
                    <Link to="/category/laptops" className="category-card">
                        <img src={laptopsImg} alt="Laptops" loading="lazy" />
                        <h3>Laptops</h3>
                    </Link>
                    <Link to="/category/tabletas" className="category-card">
                        <img src={tabletsImg} alt="Tabletas" loading="lazy" />
                        <h3>Tabletas</h3>
                    </Link>
                    <Link to="/category/accesorios" className="category-card">
                        <img src={accessoriesImg} alt="Accesorios" loading="lazy" />
                        <h3>Accesorios</h3>
                    </Link>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-section">
                <h2>Mantente Informado</h2>
                <p>Suscríbete para recibir las últimas novedades y ofertas especiales</p>
                <form className="newsletter-form" onSubmit={(e) => {
                    e.preventDefault();
                    // Aquí iría la lógica de suscripción
                }}>
                    <input type="email" placeholder="Tu correo electrónico" aria-label="Email para newsletter" />
                    <button type="submit">Suscribirse</button>
                </form>
            </section>
        </div>
    );
};

export default memo(Inicio);