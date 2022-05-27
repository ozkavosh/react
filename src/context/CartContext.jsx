import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);

  const isInCart = (nuevoProducto) => {
    return cartList.some((producto) => producto.id === nuevoProducto.id);
  };

  const updateItems = () => {
    setTotalCartItems(cartList.reduce((acc, item) => acc + item.quantity, 0));
  };

  const addToCart = (nuevoProducto) => {
    if (!isInCart(nuevoProducto)) {
      setCartList([
        ...cartList,
        { ...nuevoProducto, cartId: cartList.length + 1 },
      ]);
    } else {
      let indice = cartList.indexOf(
        cartList.find((producto) => producto.id === nuevoProducto.id)
      );
      cartList[indice].quantity += nuevoProducto.quantity;
    }

    updateItems();
  };

  const removeItem = (id) => {
    let cartAux = cartList.filter((item) => item.cartId !== id);

    if (cartAux.length > 0) {
      for (let i = 0; i < cartAux.length; i++) {
        cartAux[i].cartId = i + 1;
      }
    }
    setCartList(cartAux);

    updateItems();
  };

  const clearCart = () => {
    setCartList([]);
    updateItems();
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        totalCartItems,
        updateItems,
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
