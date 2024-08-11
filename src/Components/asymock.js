const products = [
    {
        id: 1,
        nombre: "Cooler",
        imagen: "https://i0.wp.com/hardcorecomputacion.com.ar/wp-content/uploads/2022/08/20211116154103_95911.jpg?fit=960%2C960&ssl=1",
        precio: 35,
        category: "Refrigeracion",
        stock: 6,
    },
    {
        id:2,
        nombre: "CPU",
        imagen: "https://lh4.googleusercontent.com/proxy/XLanhRy9Ge82_wXPi7OTMM-ho1US89ikEigj_qtE4FzUMqdDX202mf07pw7xIymBr_cdIT7GNC0LUA-YtdsqvPcNSa9LSVEmkR9TWNY",
        precio: 350,
        category: "Procesador",
        stock: 3,
    },
    {
        id:3,
        nombre: "Placa de video",
        imagen: "https://fullh4rd.com.ar/img/productos/3/video-geforce-rtx-4060-ti-8gb-gigabyte-gaming-oc-0.jpg",
        precio: 500,
        category: "Placas",
        stock: 1,
    },
    {
        id:4,
        nombre: "Fuente",
        imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2016/02/149871-fuentes-alimentacion-mas-antiguas-economicas-no-cuentan-sistema-gestion-cables.jpg?tf=3840x",
        precio: 120,
        category: "Energia",
        stock: 2,
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=> prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1000);
    });
};