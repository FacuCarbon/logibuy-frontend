import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import Searchbar from "../components/Searchbar";
import { useProductsContext } from "../providers/Products-provider";
import type { ProductsList } from "../types/Produtcs";
import ListProductsHome from "../components/List-products-home";

const Products = () => {
  const { products, loading } = useProductsContext();
  const [search, setSearch] = useState("");
  const [listProducts, setListProducts] = useState<ProductsList | null>(
    products
  );

  const handleSearch = () => {
    if (search.length >= 3) {
      const query = search.toLowerCase();
      const filterProducts = products?.products?.filter((product) => {
        if (product?.name?.toLowerCase()?.includes(query)) {
          return product;
        }
      });
      setListProducts({
        count: filterProducts?.length || 0,
        products: filterProducts || [],
      });
    } else {
      setListProducts(products);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    setListProducts(products);
  }, [products]);

  if (loading) {
    return <div>Cargando...</div>;
  }
  console.log("search ", search);
  return (
    <Layout>
      <div>
        <div className="">
          <Searchbar search={search} setSearch={setSearch} />
        </div>

        <ListProductsHome products={listProducts} />
      </div>
    </Layout>
  );
};

export default Products;
