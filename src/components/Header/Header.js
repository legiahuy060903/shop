import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-black">
      <div className="flex justify-around h-20 items-center ">
        <div className="text-4xl text-lime-50">HUY LG</div>
        <div className=" flex justify-between w-2/5 ">
          <NavLink
            className="w-3/12 text-center align-middle text-xl  text-lime-50"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="w-3/12 text-center text-xl  text-lime-50"
            to="product"
          >
            Product
          </NavLink>
          <NavLink
            className="w-3/12 text-center text-xl  text-lime-50"
            to="detail"
          >
            Detail
          </NavLink>
          <NavLink
            className="w-3/12 text-center text-xl  text-lime-50"
            to="cart"
          >
            Cart
          </NavLink>
        </div>
        <div>
          <div>
            <NavLink className="text-center text-lime-50" to="login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
