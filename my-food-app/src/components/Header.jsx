import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");
  const {noOfItems} = useSelector((state) => state.cart)
  console.log({noOfItems})

  return (
    <div className="flex justify-between p-5 m-5 align-middle">
      <div className="w-24">
        <img
          src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21193859/DQ.png"
          alt=""
        />
      </div>
      <div className="p-4">
        <ul className="flex align-middle">
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mt-6 relative size-2 mr-2" >
            <span className="absolute left-5 bottom-0">{noOfItems}</span>
            <Link to="/cart"><span className="text-xl"><FaShoppingCart/></span></Link>
            
          </li>
          <button
            className="p-4 pl-5"
            onClick={() => setBtnText(btnText === "Login" ? "Logout" : "Login")}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
