import Home from "./routes/home/home.component";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import { Fragment } from "react";

import { GlobalStyle } from "./global.styles";

function App() {
  // const app = () => {
  //   return (
  //     <div className='category-container'>
  //       <div className='categories-container'>
  //         <div className='categories-body-container'>
  //           {/* <img/> */}
  //           <h2>Title</h2>
  //           <p>Shop</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
