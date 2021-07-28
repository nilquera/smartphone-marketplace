import "./App.css";
import { ProductDetails, ProductList } from "pages";
import { Header } from "components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
