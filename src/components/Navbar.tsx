import Logo from "../assets/images/Logo-logibuy.jpg";

import { Link } from "react-router";

interface NavbarItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const items: NavbarItem[] = [
    {
      name: "Productos",
      path: "/products",
    },
    {
      name: "Grafica",
      path: "/grafica",
    },
    {
      name: "Placa",
      path: "/placa",
    },
    {
      name: "Pedidos",
      path: "/pedidos",
    },
  ];

  return (
    <nav className="justify-between flex items-center flex-wrap p-2 md:justify-normal">
      <Link to="/" className="w-[15%]">
        <img src={Logo} alt="Logo" className="h-16 w-16 rounded-full" />
      </Link>

      <div className="w-[80%] flex items-center justify-between gap-3 md:w-[75%]">
        {items.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="text-zinc-900 hover:text-zinc-700 hover:underline"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
