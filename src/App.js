import "./App.css";
import { ProductDetails, ProductList } from "pages";
import { Header } from "components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartContextProvider } from "context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <main>
            <Switch>
              <Route exact path="/details/:id">
                <ProductDetails />
              </Route>
              <Route path="/">
                <ProductList />
              </Route>
            </Switch>
          </main>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
