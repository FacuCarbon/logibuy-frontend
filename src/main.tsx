import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
