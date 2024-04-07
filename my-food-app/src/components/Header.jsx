import { useState } from "react";
const Header = () => {

    const [btnText, setBtnText] = useState("Login");

    return (<div className="header">
        <div className="logo">
            <img src="https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21193859/DQ.png" alt="" />
        </div>
        <div className="nav_items">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
                <button className="login_btn" onClick={() => setBtnText(btnText === "Login" ? "Logout" : "Login")}>{btnText}</button>
            </ul>
        </div>
    </div>)
}

export default Header;