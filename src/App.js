import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';


function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
