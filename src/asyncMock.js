const products = [
    {
        id: 1,
        title: 'Samsung s21',
        price: '8000',
        category: 'celulares',
        description: 'Este producto cuenta con la bateria original, incluye accesorios genericos 100% compatibles y certificados. inspeccionado y probado profesionalmente en mas de 30 puntos de seguridad para garantizar su funcionamiento.',
        image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-74826/SamsungGalaxys215g.jpg',
        stock: 10
    },
    {
        id: 2,
        title: 'Samsung s22',
        price: '9000',
        category: 'celulares',
        description: 'Este producto cuenta con la bateria original, incluye accesorios genericos 100% compatibles y certificados. inspeccionado y probado profesionalmente en mas de 30 puntos de seguridad para garantizar su funcionamiento.',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/mx/2202/gallery/mx-galaxy-s22-s901-sm-s901ezgmltm-530967029?$650_519_PNG$',
        stock: 9
    },
    {
        id: 3,
        title: 'Samsung Tab S6',
        price: '10000',
        category: 'tabletas',
        description: 'Tablet Samsung con pantalla AMOLED de 10.5 pulgadas, procesador Snapdragon 855, 6GB de RAM y 128GB de almacenamiento. Incluye S Pen y teclado.',
        image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/5e42d260-fca0-4fbb-b5be-b4149443eccc.1c8aa89848934825c184d3a328ad330f.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        stock: 11
    },
    {
        id: 4,
        title: 'iPad Pro 12.9"',
        price: '15000',
        category: 'tabletas',
        description: 'iPad Pro con pantalla Liquid Retina XDR de 12.9 pulgadas, chip M2, 8GB de RAM y 256GB de almacenamiento. Incluye Apple Pencil y Magic Keyboard.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202210?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664411207664',
        stock: 8
    },
    {
        id: 5,
        title: 'iPad Air 5',
        price: '12000',
        category: 'tabletas',
        description: 'iPad Air con pantalla Liquid Retina de 10.9 pulgadas, chip M1, 8GB de RAM y 64GB de almacenamiento. Compatible con Apple Pencil y Magic Keyboard.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1645065732688',
        stock: 15
    },
    {
        id: 6,
        title: 'MacBook Pro 14"',
        price: '25000',
        category: 'laptops',
        description: 'MacBook Pro con chip M2 Pro, 16GB de RAM, 512GB SSD, pantalla Liquid Retina XDR de 14 pulgadas y Touch Bar.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207',
        stock: 7
    },
    {
        id: 7,
        title: 'Dell XPS 13',
        price: '18000',
        category: 'laptops',
        description: 'Laptop Dell XPS 13 con procesador Intel Core i7, 16GB de RAM, 512GB SSD y pantalla InfinityEdge de 13.3 pulgadas.',
        image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/xs9315t-cnb-00055rf110-sl.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402',
        stock: 12
    },
    {
        id: 8,
        title: 'Lenovo ThinkPad X1 Carbon',
        price: '22000',
        category: 'laptops',
        description: 'Laptop ThinkPad X1 Carbon con procesador Intel Core i7, 16GB de RAM, 1TB SSD y pantalla de 14 pulgadas.',
        image: 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-10-14-intel-hero.png?context=bWFzdGVyfHJvb3R8MzM5MjY5fGltYWdlL3BuZ3xoOWEvaDc0LzEwMDU5NjM5NDQ5NjE0LnBuZ3wzZjI4ZjY5ZjQ5YzY0ZjM5ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2ZjY2',
        stock: 9
    },
    {
        id: 9,
        title: 'AirPods Pro',
        price: '4000',
        category: 'accesorios',
        description: 'AirPods Pro con cancelación activa de ruido, modo Transparencia, resistencia al agua y sudor IPX4, y estuche de carga inalámbrica.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361',
        stock: 20
    },
    {
        id: 10,
        title: 'Apple Watch Series 8',
        price: '8000',
        category: 'accesorios',
        description: 'Apple Watch Series 8 con GPS, pantalla Always-On Retina, sensor de temperatura, detección de caídas y resistencia al agua.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO+watch-face-45-alum-midnight-8s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1684518479435',
        stock: 15
    },
    {
        id: 11,
        title: 'Samsung Galaxy Watch 5',
        price: '6000',
        category: 'accesorios',
        description: 'Smartwatch Samsung con GPS, monitoreo de sueño avanzado, resistencia al agua IP68 y batería de larga duración.',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/mx/2208/gallery/mx-galaxy-watch5-40mm-sm-r900nzaamea-530606827?$650_519_PNG$',
        stock: 18
    },
    {
        id: 12,
        title: 'Magic Keyboard',
        price: '3500',
        category: 'accesorios',
        description: 'Teclado Magic Keyboard con teclas scissor mechanism, trackpad integrado, retroiluminación y batería de larga duración.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2A3?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1626460563000',
        stock: 25
    },
    {
        id: 13,
        title: 'iPad Pro 11"',
        price: '13000',
        category: 'tabletas',
        description: 'iPad Pro con pantalla Liquid Retina de 11 pulgadas, chip M2, 8GB de RAM y 128GB de almacenamiento. Incluye Apple Pencil y Magic Keyboard.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202210?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664411207664',
        stock: 10
    },
    {
        id: 14,
        title: 'Samsung Tab S8 Ultra',
        price: '16000',
        category: 'tabletas',
        description: 'Tablet Samsung con pantalla AMOLED de 14.6 pulgadas, procesador Snapdragon 8 Gen 1, 8GB de RAM y 256GB de almacenamiento. Incluye S Pen y teclado.',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/mx/2202/gallery/mx-galaxy-tab-s8-ultra-sm-x900nzaamea-530606827?$650_519_PNG$',
        stock: 6
    },
    {
        id: 15,
        title: 'MacBook Air M2',
        price: '20000',
        category: 'laptops',
        description: 'MacBook Air con chip M2, 8GB de RAM, 256GB SSD y pantalla Liquid Retina de 13.3 pulgadas. Diseño ultraligero y sin ventilador.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633024684000',
        stock: 15
    },
    {
        id: 16,
        title: 'HP Spectre x360',
        price: '19000',
        category: 'laptops',
        description: 'Laptop HP Spectre x360 con procesador Intel Core i7, 16GB de RAM, 512GB SSD y pantalla táctil OLED de 13.5 pulgadas. Convertible 2 en 1.',
        image: 'https://h10025.www1.hp.com/hubfs/Hub_Content/Homepage/Product%20Images/spectre-x360-14-2023.png',
        stock: 8
    },
    {
        id: 17,
        title: 'AirPods Max',
        price: '6000',
        category: 'accesorios',
        description: 'Audífonos inalámbricos con cancelación activa de ruido, modo Transparencia, sonido espacial y hasta 20 horas de batería.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-silver-202009?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1604021225374',
        stock: 12
    },
    {
        id: 18,
        title: 'Magic Mouse',
        price: '2500',
        category: 'accesorios',
        description: 'Mouse Magic Mouse con superficie multitáctil, seguimiento preciso y batería de larga duración. Compatible con gestos.',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2E3?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1626460563000',
        stock: 30
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export const getProduct = (id) => {
    return products.find(prod => prod.id == id);
}