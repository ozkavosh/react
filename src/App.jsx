import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App bg-secondary">
      <BrowserRouter>
        <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<><Banner /><ItemListContainer greetings="Todos los productos" /></>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/:category" element={<><Banner /><ItemListContainer /></>}/>
          <Route path="/item/:id" element={<ItemDetailContainer greetings="Detalle del producto"/>}/>
          <Route path="/*" element={<Navigate to="/" replace/>}/> 
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
