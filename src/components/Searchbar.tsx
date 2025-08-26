interface Props {
  search: string;
  setSearch: (search: string) => void;
}

const Searchbar = ({ search, setSearch }: Props) => {
  return (
    <div className="">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar productos"
        className="w-full rounded-lg border-2 border-zinc-300 bg-white px-4 py-2 text-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-0 sm:text-sm"
      />
    </div>
  );
};

export default Searchbar;
