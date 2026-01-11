import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import ProductDetails from "./components/pages/productDetails";
import Home from "./components/pages/home";
import "./App.css";
import Product from "./components/pages/product";
import { useContext } from "react";
import AuthContext from "./context/authContext/authContext";
import NotFound from "./components/pages/notFound";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const getAccessToken = useLocalStorage();

  console.log({ getAccessToken });

  return (
    <Routes>
      {isLoggedIn || localStorage.accessToken ? (
        <>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </>
      )}
    </Routes>
  );
}

export default App;
