import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [cartIsShown, setChartIsShown] = useState(false);

  const showCartHandler = () => {
    setChartIsShown(true);
  }

  const hideCartHandler = () => {
    setChartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
