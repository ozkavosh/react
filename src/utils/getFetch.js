const productos = require("./productos.json");
  
  const getFetch = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? productos.find((producto)=>producto.id === id) : productos);
    }, 1000);
  });

  export default getFetch