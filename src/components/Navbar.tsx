import Logo from "../assets/images/Logo-logibuy.jpg";
import { useState } from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const menu = ["home", "productos", "grafica", "placa", "pedidos"];
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-2">
      <figure className="">
        <img src={Logo} alt="Logo" className="h-16 w-16 rounded-full" />
      </figure>
      {!openSearch ? (
        <>
          <div className="flex items-center justify-between gap-3 w-[50%]">
            {menu.map((item, index) => (
              <a
                href={item}
                key={index}
                className="text-zinc-900 hover:text-zinc-700 hover:underline"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="w-[5%] flex items-center justify-center">
            <button
              aria-label="Icono de buscar"
              className="cursor-pointer"
              onClick={() => setOpenSearch(true)}
            >
              Q
            </button>
          </div>
        </>
      ) : (
        <Searchbar action={() => setOpenSearch(false)} />
      )}
    </nav>
  );
};

export default Navbar;
