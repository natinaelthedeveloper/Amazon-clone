import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./page/Cart/Cart";
import Orders from "./page/Orders/Orders";
import Payment from "./page/Payment/Payment";
import Auth from "./page/Auth/Auth";
import Landing from "./page/Landing/Landing";
import Results from "./page/Results/Results";
import ProductDetails from "./page/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";


const stripePromise = loadStripe(
  "pk_test_51TFsyH3T47wLdhtm6GPSwb9YbivWabUM60CiYwyfoZZpfC3k36U9F27Ala0tfZAuyVFDaxcwAuzfIkWiyx7xSSpq00ncoiVeLl",
);
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute
                msg={"you need to login to proceed payment"}
                redirect={"/payment"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"you need to login to access your orders"}
                redirect={"/orders"}
              >
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
