import Hamburger from "./Hamburger";
import { useState, useMemo, useEffect } from "react";

export default function NavBar() {
  function useMediaQuery(query: string) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [match, setMatch] = useState(mediaQuery.matches);
  
    useEffect(() => {
      const onChange = () => setMatch(mediaQuery.matches);
      mediaQuery.addEventListener("change", onChange);
  
      return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);
  
    return match;
  }
  
  const isMobile = useMediaQuery("(max-width: 360px)");

  const barStyle = {
    position: "fixed" as "fixed",
    width: "100%",
    //height: "var(--navHeight)",
    height: "6rem",
    right: "6rem",
    zIndex: 10000,
    background: "rgba(239, 233, 224, var(--opacity))",
  };

  const imgStyle = {
    position: "fixed" as "fixed",
    display: "inline" as "inline",
    left: 0,
    width: "var(--navSize)",
    padding: "1rem",
    zIndex: 10000,
    filter: "drop-shadow(0 0 .25rem lightslategray)",
  };

  const navBarStyle = {
    position: "fixed" as "fixed",
    top: 0,
    width: "100%",
    //height: "var(--navHeight)",
    height: "6rem",
    zIndex: 10000,
    background: "rgba(239, 233, 224, var(--opacity))",
    willChange: "background",
  };

  const navLineStyle = {
    display: "flex" as "flex",
    width: "100%",
    maxHeight: "var(--navHeight)",
    willChange: "max-height",
  };

  const navTextStyle = {
    display: "flex" as "flex",
    position: "absolute" as "absolute",
    right: 0,
    bottom: 0,
    flexDirection: "row" as "row",
    paddingRight: "2rem",
  };

  const navLinkStyle = {
    fontSize: "1.5rem",
    textAlign: "right" as "right",
    //lineHeight: "var(--navSize)",
    lineHeight: "6rem",
    color: "#595959",
    padding: "0 1rem 0 1rem",
    textDecoration: "none",
    willChange: "line-height",
  };

  let elem;
  if(isMobile) {
    elem = 
      <div style={barStyle}>
        <a href='#toprow'><img style={imgStyle} src="../img/mint_logo_postitiv_RGB.svg" /></a>
        <Hamburger />
      </div>;
  } else {
    elem =
      <div style={navBarStyle}>
        <div style={navLineStyle}>
          <a href='#toprow'><img style={imgStyle} src="../img/mint_logo_postitiv_RGB.svg" /></a>
          <div style={navTextStyle}>
            <a href="#vision" style={navLinkStyle}>Vision</a>
            <a href="#omoss" style={navLinkStyle}>Om oss</a>
            <a href="#roller" style={navLinkStyle}>Roller</a>
            <a href="https://friends.mint.se/" target="_blank" style={navLinkStyle}>Mint & Friends</a>
            <a href="#kompis" style={navLinkStyle}>Kontakt</a>
          </div>
        </div>
      </div>
  };

  return(elem);
}
