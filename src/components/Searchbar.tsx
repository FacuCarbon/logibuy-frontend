interface Props {
  action: () => void;
}


const Searchbar = (
    { action }: Props   
) => {
  return (
    <div className="">
      <input type="search" className="" />
      <button className="cursor-pointer" aria-label=" Cerrar buscador " onClick={action}>
        X
      </button>
    </div>
  );
};

export default Searchbar;
