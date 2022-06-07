import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
import { addDoc, getFirestore, collection } from "firebase/firestore";

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

  const sendOrder = async (buyer) => {
    const order = {
      buyer,
      items: cartList.map(({ id, title, price, quantity }) => ({
        id,
        title,
        price: price * quantity,
      })),
      date: new Date(Date.now()).toLocaleString(),
      total: cartList.map(({price, quantity}) => price * quantity).reduce((acc, item) => acc + item , 0).toFixed(2)
    };

    const db = getFirestore();
    const query = collection(db, "orders");
    const orderRef = await addDoc(query, order);

    Swal.fire({
      title: "Gracias por su compra!",
      text: `Id de su orden: ${orderRef.id}`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    clearCart();
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        sendOrder,
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
