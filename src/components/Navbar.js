import React from "react";
import { Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "About",
  },
  {
    path: "/certificates",
    name: "Certificates",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  // {
  //   path: "/more",
  //   name: "More",
  // },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex gap-5 p-6 bg-stone-600 text-white">
      {routes.map((elem, index) => {
        return (
          <Link to={elem.path} key={index}>
            <div>
              <p className="hover:underline">{elem.name}</p>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
