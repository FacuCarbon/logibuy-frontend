import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";
import Products from "./pages/Products";
import "./App.css";
import { ProviderProducts } from "./providers/Products-provider";
import Auth from "./pages/Auth";
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ProviderProducts>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </ProviderProducts>
);
