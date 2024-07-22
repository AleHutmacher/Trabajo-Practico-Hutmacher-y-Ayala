import React from "react";
import TopBar from "./TopBar";
import HeaderNav from "./HeaderNav";

function Header() {
  return (
    <div className="flex flex-col w-full bg-black">
      <TopBar />
      <HeaderNav />
    </div>
  );
}

export default Header;
