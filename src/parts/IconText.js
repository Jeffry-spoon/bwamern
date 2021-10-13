import React from "react";

import logo from "assets/Image/Logo.png";

console.log(logo);

function Header() {
  return <img src={logo} className="logo" alt="Logo" type="link" href="/" />;
}

export default Header;
