import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css"; 
import "./assets/styles/bootstrap.custom.css"; 
import App from "./App"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import HomeScreen from "./screens/HomeScreen"; 
import ProductScreen from "./screens/ProductScreen"; 
import CartScreen from "./screens/CartScreen"; 
import store from "./store/store"; 
import { Provider } from "react-redux"; 
import LoginScreen from "./screens/LoginScreen"; 
import RegisterScreen from "./screens/RegisterScreen"; 
import ShippingScreen from "./screens/ShippingScreen"; 
import PrivateRoute from "./components/PrivateRoute"; 
import AdminRoute from "./components/AdminRoute"; 
import PaymentScreen from "./screens/PaymentScreen"; 
import PlaceOrderScreen from "./screens/PlaceOrderScreen"; 
import OrderScreen from "./screens/OrderScreen"; 
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; 
import ProfileScreen from "./screens/ProfileScreen"; 
import OrderListScreen from "./screens/admins/OrderListScreen"; 
import ProductListScreen from "./screens/admins/ProductListScreen"; 
import ProductEditScreen from "./screens/admins/ProductEditScreen"; 
import UserListScreen from "./screens/admins/UserListScreen"; 
import UserEditScreen from "./screens/admins/UserEditScreen"; 
import { HelmetProvider } from "react-helmet-async"; 

// Create root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <Router>
            <Routes>
              {/* Main application route */}
              <Route path="/" element={<App />}>
                {/* Home and search routes */}
                <Route index={true} path="/" element={<HomeScreen />} />
                <Route path="/search/:keyword" element={<HomeScreen />} />
                <Route path="/page/:pageNumber" element={<HomeScreen />} />
                <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} />
                
                {/* Individual product route */}
                <Route path="/products/:id" element={<ProductScreen />} />
                
                {/* Cart and authentication routes */}
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                
                {/* Private routes for authenticated users */}
                <Route path="" element={<PrivateRoute />}>
                  <Route path="/shipping" element={<ShippingScreen />} />
                  <Route path="/payment" element={<PaymentScreen />} />
                  <Route path="/placeorder" element={<PlaceOrderScreen />} />
                  <Route path="/order/:id" element={<OrderScreen />} />
                  <Route path="/profile" element={<ProfileScreen />} />
                </Route>

                {/* Admin routes for managing orders and products */}
                <Route path="" element={<AdminRoute />}>
                  <Route path="/admin/orderlist" element={<OrderListScreen />} />
                  <Route path="/admin/productlist" element={<ProductListScreen />} />
                  <Route path="/admin/productlist/:pageNumber" element={<ProductListScreen />} />
                  <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
                  <Route path="/admin/userlist" element={<UserListScreen />} />
                  <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
                </Route>
              </Route>
            </Routes>
          </Router>
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);