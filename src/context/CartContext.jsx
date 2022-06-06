import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const useCartContext = () => {
  return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (newProducto) => {
    return cartList.some((product) => product.id === newProducto.id);
  };

  const addToCart = (newProduct) => {
    if (!isInCart(newProduct)) {
      setCartList([
        ...cartList,
        { ...newProduct, cartId: cartList.length + 1 },
      ]);
    } else {
      let index = cartList.indexOf(
        cartList.find((product) => product.id === newProduct.id)
      );
      cartList[index].quantity += newProduct.quantity;
      setCartList([...cartList]);
    }
  };

  const removeItem = (id) => {
    let cartAux = cartList.filter((item) => item.cartId !== id);

    if (cartAux.length > 0) {
      for (let i = 0; i < cartAux.length; i++) {
        cartAux[i].cartId = i + 1;
      }
    }
    setCartList(cartAux);
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
