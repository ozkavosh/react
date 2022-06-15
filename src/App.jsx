import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart/Cart";
import UnkownRouteContainer from "./components/UnkownRouteContainer/UnkownRouteContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App bg-secondary">
      <BrowserRouter>
        <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<><Banner /><ItemListContainer title="Todos los productos" /></>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/:category" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer title="Detalle del producto"/>}/>
          <Route path="/404" element={<UnkownRouteContainer/>}/>
          <Route path="/*" element={<Navigate to="/404" replace/>}/> 
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
