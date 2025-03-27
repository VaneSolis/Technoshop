import './App.css';
import { Routes, Route } from 'react-router-dom';
import { memo, Suspense, lazy } from 'react';
import { CartProvider } from './context/CartContext.jsx';

// Importación del NavBar de forma normal ya que siempre se necesita
import NavBar from './components/navigation/NavBar.jsx';

// Importaciones lazy para el resto de componentes
const Inicio = lazy(() => import('./components/home/Inicio.jsx'));
const ItemDetailContainer = lazy(() => import('./components/product/ItemDetailContainer.jsx'));
const ItemListContainer = lazy(() => import('./components/Catalogo/ItemListContainer.jsx'));
const CategoryComponent = lazy(() => import('./components/categories/CategoryComponent.jsx'));
const ContactComponent = lazy(() => import('./components/contact/ContactComponent.jsx'));
const Carrito = lazy(() => import('./components/Carrito.jsx'));
const Checkout = lazy(() => import('./components/product/Checkout.jsx'));

// Componente de carga
const LoadingSpinner = () => (
  <div className="loading-spinner-container">
    <div className="loading-spinner"></div>
  </div>
);

const App = () => {
  return (
    <CartProvider>
      <div className="app-container">
        <NavBar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/product/:prodId" element={<ItemDetailContainer />} />
            <Route path="/category/:catName" element={<CategoryComponent />} />
            <Route path="/Contact" element={<ContactComponent />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Catalogo" element={<ItemListContainer />} />
          </Routes>
        </Suspense>
      </div>
    </CartProvider>
  );
};

export default memo(App);
