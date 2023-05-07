import React from "react";
import "./header.scss";
import image from "../../assets/Mask.svg";

interface Props {
  children: React.ReactNode;
}

function Header({ children }: Props) {
  return (
    <div className="header">
      <img src={image} alt="logo" className="logo" />
      {children}
    </div>
  );
}

export default Header;
