import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (nuevoProducto) => {
    return cartList.some((producto) => producto.id === nuevoProducto.id);
  };

  const addToCart = (nuevoProducto) => {
    if (!isInCart(nuevoProducto)) {
      setCartList([...cartList, { ...nuevoProducto, cartId: cartList.length + 1 }]);
    } else {
      let indice = cartList.indexOf(
        cartList.find((producto) => producto.id === nuevoProducto.id)
      );
      cartList[indice].quantity += nuevoProducto.quantity;
    }
  };

  const removeItem = (id) => {
    if (cartList.some((producto) => producto.cartId === id)) {
      let cartAux = cartList.filter(item => item.cartId !== id)

      if (cartAux.length > 0) {
        for (let i = 0; i < cartAux.length; i++) {
          cartAux[i].cartId = i + 1;
        }
      }
      setCartList(cartAux);
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
