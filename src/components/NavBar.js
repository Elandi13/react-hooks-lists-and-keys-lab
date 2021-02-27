import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const barLinks = links.map((link)=> (
    <a key={link} href={"#"+ link}>{link}</a>
    ))
    return <nav> {barLinks} </nav>
}

export default NavBar;
