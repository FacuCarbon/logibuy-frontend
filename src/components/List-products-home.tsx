import { useProductsContext } from "../providers/Products-provider";

const ListProductsHome = () => {
  const { products, loading } = useProductsContext();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.products?.map((product) => (
        <div key={product.id} className="border shadow rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-[8rem] h-[8rem] object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-700">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProductsHome;
