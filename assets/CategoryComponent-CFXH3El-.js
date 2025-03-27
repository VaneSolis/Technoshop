import{u as e,j as a}from"./index-CurFSWXV.js";import{g as r}from"./asyncMock-WXPhmyS3.js";import{r as s}from"./vendor-C9Evistz.js";function c(){const[c,t]=s.useState([]),[o,i]=s.useState(!0),[l,n]=s.useState(null),{catName:d}=e();return s.useEffect((()=>{i(!0),r.then((e=>{const a=e.filter((e=>e.category.toLowerCase()===d.toLowerCase()));t(a)})).catch((e=>{n("Error al cargar los productos. Por favor, intente nuevamente."),console.error("Error fetching products:",e)})).finally((()=>{i(!1)}))}),[d]),o?a.jsx("div",{className:"category-container",children:a.jsxs("div",{className:"loading-container",children:[a.jsx("div",{className:"loading-spinner"}),a.jsx("p",{children:"Cargando productos..."})]})}):l?a.jsx("div",{className:"category-container",children:a.jsxs("div",{className:"error-container",children:[a.jsx("p",{children:l}),a.jsx("button",{onClick:()=>window.location.reload(),children:"Reintentar"})]})}):a.jsxs("div",{className:"category-container",children:[a.jsxs("div",{className:"category-header",children:[a.jsx("h1",{className:"category-title",children:d}),a.jsxs("p",{className:"category-description",children:["Explora nuestra selección de productos en la categoría ",d]})]}),0===c.length?a.jsx("div",{className:"no-products",children:a.jsx("p",{children:"No hay productos disponibles en esta categoría."})}):a.jsx("div",{className:"category-grid",children:c.map((e=>a.jsxs("article",{className:"category-product-card",children:[a.jsx("img",{src:e.image,alt:e.title,className:"category-product-image",loading:"lazy",onError:e=>{e.target.src="/placeholder-image.jpg"}}),a.jsxs("div",{className:"category-product-info",children:[a.jsx("h2",{className:"category-product-title",children:e.title}),a.jsxs("p",{className:"category-product-price",children:["$ ",e.price.toLocaleString()]}),a.jsx("p",{className:"category-product-description",children:e.description}),a.jsx("button",{className:"category-product-button",onClick:()=>navigate(`/product/${e.id}`),"aria-label":`Ver detalles de ${e.title}`,children:"Ver detalles"})]})]},e.id)))})]})}export{c as default};
//# sourceMappingURL=CategoryComponent-CFXH3El-.js.map
