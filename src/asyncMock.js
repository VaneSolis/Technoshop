const products= [
    {
        id: 1,
        title: 'Samnsung s21',
        price: '8000',
        category: 'celulares',
        description: 'Este producto cuenta con la bateria original, incluye accesoriosgenericos 100% compatibles y certificados. inspeccionado y probado profesionalmente en mas de 30 puntos de seguridad para garantizar su funcionamiento.',
        image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-74826/SamsungGalaxys215g.jpg',
        stock: 10
    },
    {
        id: 2,
        title: 'Samnsung s22',
        price: '9000',
        category: 'celulares',
        description: 'Este producto cuenta con la bateria original, incluye accesoriosgenericos 100% compatibles y certificados. inspeccionado y probado profesionalmente en mas de 30 puntos de seguridad para garantizar su funcionamiento.',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/mx/2202/gallery/mx-galaxy-s22-s901-sm-s901ezgmltm-530967029?$650_519_PNG$',
        stock: 9
    },
    {
        id: 3,
        title: 'Samnsung tab s6',
        price: '10000',
        category: 'tabletas',
        description: 'Este producto cuenta con la bateria original, incluye accesoriosgenericos 100% compatibles y certificados. inspeccionado y probado profesionalmente en mas de 30 puntos de seguridad para garantizar su funcionamiento.',
        image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/5e42d260-fca0-4fbb-b5be-b4149443eccc.1c8aa89848934825c184d3a328ad330f.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        stock: 11
    }
]

export const getProducts = new Promise ((resolve) => {
    setTimeout (()=> 
    {
        resolve(products)
    }, 2000);
});

export const getProduct = (id) => {
    return products.find(prod => prod.id == id);
}