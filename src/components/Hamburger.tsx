import { useState } from "react";

export default function Hamburger() {
  const [openState, setOpenState] = useState(false);

  const menu = {
    position: "fixed" as "fixed",
    top: 0,
    right: 0,
    width: "100%",
    maxHeight: "var(--navHeight)",
    background: "rgba(239, 233, 224, var(--opacity))",
    zIndex: 10000,
  };

  const burger = {
    position: "fixed" as "fixed",
    top: 0,
    right: 0,
    width: "4rem",
    height: "4rem",
    padding: "1rem",
    rotate: "0deg",
    //background: "rgba(239, 233, 224, 1)",
    background: "rgba(239, 233, 224, var(--opacity))",
    zIndex: 10000,
  };

  const burgerRotateActive = {
    transform: "rotate(-90deg)",
    //-webkit-transform: "rotate(-90deg)",
    //-ms-transform: "rotate(-90deg)",
    transitionDuration: ".3s",
    transitionProperty: "transform",
  };

  const navBurger = {
    position: "fixed" as "fixed",
    top: "6rem",
    right: "0rem",
    textAlign: "right" as "right",
    //background: "rgba(239, 233, 224, var(--opacity))",
    background: "rgba(239, 233, 224, 1)",
    width: "22rem",
    zIndex: 10000,
  };

  const navLinkBurger = {
    display: "block" as "block",
    fontSize: "2.5rem",
    padding: "1rem",
  };

  return(
    <>
      <div style={menu}></div>
      <img src="/img/icons/menu-burger.svg" alt="menu" style={burger} onClick={() => setOpenState(!openState)}/>
      {openState ? (
        <div style={navBurger}>
          <a href="#vision" style={navLinkBurger} onClick={() => setOpenState(false)}>Vision</a>
          <a href="#omoss" style={navLinkBurger} onClick={() => setOpenState(false)}>Om oss</a>
          <a href="#roller" style={navLinkBurger} onClick={() => setOpenState(false)}>Roller</a>
          <a href="https://mint-1712829496.teamtailor.com/" target="_blank" style={navLinkBurger} onClick={() => setOpenState(false)}>Mint & Friends</a>
          <a href="#kompis" style={navLinkBurger} onClick={() => setOpenState(false)}>Kontakt</a>
        </div>
      ) : null}
    </>
  );
}
