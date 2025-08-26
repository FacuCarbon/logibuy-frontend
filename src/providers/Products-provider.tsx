import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import type { ProductsList } from "../types/Produtcs";

interface PropsProviderProducts {
  products: ProductsList | null;
  setProducts: (Products: ProductsList | null) => void;
  loading: boolean;
}

const ProductsContext = createContext<PropsProviderProducts | null>(null);

export const ProviderProducts = ({ children }: { children: ReactNode }) => {
  const urlApi = import.meta.env.VITE_URL_API;

  const [products, setProducts] = useState<ProductsList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const retrieveProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(urlApi);
      if (!response.ok) {
        setLoading(false);
        throw new Error("Error al obtener productos");
      }
      const data = await response.json();
      if (!data) {
        setLoading(false);
        setProducts(null);
      }

      setProducts(data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.log("Error al obetener productos", error);
    }
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = (): PropsProviderProducts => {
  const context = useContext(ProductsContext);
  if (context === null) {
    throw new Error("ProductsContext must be used within a ProviderProducts");
  }
  return context;
};
