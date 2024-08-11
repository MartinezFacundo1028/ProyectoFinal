import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ListProductContainer from "./Components/ListProductContainer/ListProductContainer";
import "./App.css";
import { CartProvider } from "./Context/Context";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import { NotificationProvider } from "./ContextNotification/ContextNotification";


function App() {
  
  return (
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <div className="app-div" style={{ marginBottom: '60px', minHeight: '100vh' }}>
              <Nav title="Arma tu PC" />
              <Routes>
                <Route
                  path="/" 
                  element={<ListProductContainer greeting="Productos para el armado de Pc:" />}
                  />
                <Route
                  path="/cart" 
                  element={<Cart/>}
                  />
                <Route
                  path="/checkout" 
                  element={<Checkout/>}
                  />
                <Route exact path="/detail/:productId" element={<ItemDetailContainer />} />
                <Route 
                  path="/category/:categoryId"
                  element={<ListProductContainer />} 
                  />
                <Route path="*" element={<h1 className="h1-error">:( 404 Not found</h1>} />
              </Routes>
              <Footer />
            </div>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
  );
}

export default App;
