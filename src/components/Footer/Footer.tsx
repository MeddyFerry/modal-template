import React from "react";
import "./footer.scss";

function Footer() {
  const footerLinks = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Terms of Use",
      link: "/terms",
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
    },
  ];
  return (
    <div className="footer">
      {footerLinks.map((link, index) => {
        return (
          <a className="footer-links" key={index} href={link.link}>
            {link.name}
          </a>
        );
      })}
    </div>
  );
}

export default Footer;
