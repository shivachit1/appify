import React from "react";
import { Routes, Route} from "react-router-dom";
import { useSelector } from "react-redux"

import './App.css';

import { NavBar } from './components/NavBar'
import { Footer } from "./components/footer";
import { Home } from "./pages/Home";
import { MapView } from "./pages/CustomerViews/MapView";
import { ShopView } from "./pages/CustomerViews/ShopView";
import { Orders } from "./pages/CustomerViews/Orders";
import { OrderView } from "./pages/CustomerViews/OrderView";
import { CustomerProfile } from "./pages/CustomerViews/CustomerProfile";
import { AuthenticateModal } from "./modals/Authenticate";
import { OrderPickUp } from "./pages/SellerViews/OrderPickUp";
import { InstallPrompt } from "./installationPrompt";

function App() {
  const modalPage = useSelector((state) => state.ui.modalPage)

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/mapView" element={<MapView/>} />
        <Route exact path="/customerProfile" element={<CustomerProfile/>} />
        <Route exact path="/shopView" element={<ShopView/>} />
        <Route exact path="/orders" element={<Orders/>} />
        <Route exact path="/orders/:orderId" element={<OrderView/>} />
        <Route exact path="/orders/:orderId/authenticate" element={<AuthenticateModal/>} />
        <Route exact path="/orders/:orderId/sellerView" element={<OrderPickUp/>} />
      </Routes>
      <InstallPrompt/>
    </div>
  );
}

export default App;
