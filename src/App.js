import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navs from "./components/Navbar";
import DetailProduct from "./pages/DetailProduct";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import NavUser from "./components/NavUser";
import NavAdmin from "./components/NavAdmin";
import Product from "./components/Product";
import Transaction from "./components/admin/Transaction";
import AddProduct from "./components/admin/AddProduct";
import Addtop from "./components/admin/AddToping";
import TransactionAdmin from "./components/admin/TransactionAdmin";

function App() {
  return (
    <>
      {/* <NavAdmin /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
      {/* <Profile />  */}
      {/* <Cart /> */}
      {/* <Transaction /> */}
      {/* <AddProduct /> */}
      {/* <Addtop /> */}
      {/* <TransactionAdmin /> */}
      {/* <Product /> */}
      {/* <Navs /> */}

      <Router>
        <Navs />
        {/* <NavUser /> */}
        {/* <NavAdmin /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addtoping" element={<Addtop />} />
          <Route path="/transaction" element={<Transaction />} />

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
