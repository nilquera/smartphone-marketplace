import "./App.css";
import { ProductDetails, ProductList } from "pages";
import { Header } from "components";
import { HashRouter, Switch, Route } from "react-router-dom";
import { CartContextProvider } from "context/CartContext";

function App() {
  return (
    <div className="App">
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
