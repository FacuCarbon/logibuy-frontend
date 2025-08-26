import "./App.css";
import ListProductsHome from "./components/List-products-home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="h-screen bg-slate-500 text-zinc-950">
     
    <Navbar/>
     <ListProductsHome/>
      
    </div>
   
  );
}

export default App;
