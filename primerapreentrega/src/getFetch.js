const productos = [
    {
      title: "Ibuprofeno",
      price: 234.56,
      stock: 125,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      category: "medicamentos",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-08-256.png",
      id: 1,
    },
    {
      title: "Suero",
      price: 345.67,
      stock: 12,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      category: "equipo",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-31-256.png",
      id: 2,
    },
    {
      title: "Jeringa",
      price: 123.45,
      stock: 35,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      category: "equipo",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-03-256.png",
      id: 3,
    },
    {
      title: "Mortero",
      price: 234.56,
      stock: 3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      category: "equipo",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-36-256.png",
      id: 4,
    },
    {
      title: "Curitas",
      price: 345.67,
      stock: 75,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      category: "equipo",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-20-256.png",
      id: 5,
    },
    {
      title: "Cuentagotas",
      price: 125.27,
      stock: 41,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      category: "equipo",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-14-256.png",
      id: 6,
    },
    {
      title: "Maquillaje",
      price: 215.23,
      stock: 4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      category: "cosmeticos",
      pictureUrl:
        "https://cdn2.iconfinder.com/data/icons/sweet-16/64/sweet_16_birthday_polish_sixteen_nail_lipstick_cosmetics_makeup-256.png",
      id: 7,
    }
  ];
  
  const getFetch = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? productos.find((producto)=>producto.id === id) : productos);
    }, 2000);
  });

  export default getFetch