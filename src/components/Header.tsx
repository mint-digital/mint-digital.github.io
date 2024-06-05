import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './Header.module.css'; 
import { BLOCKS } from '@contentful/rich-text-types';

export default function Header({
  bright,
  headProps,
}: {
  bright,
  headProps,
}) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p
          style={{
          }}
        >
          {children}
        </p>
      )
    }
  }

  const rowStyle = {
    backgroundColor: headProps.backgroundColor.value,
    backgroundImage: "url(../img/drone_flight_reverse_xfade.png)",
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    margin: 0,
    width: "100%",
    height: "100svh",
    overflow: "hidden",
  };

  const videoStyle = {
    position: "absolute" as "absolute",
    top: "0",
    zIndex: "1",
    width: "100%",
    filter: "brightness(" + bright + "%)",
    objectFit: "cover" as "cover",
    objectPosition: "center center",
    height: "100svh",
    overflow: "hidden",
  };

  const imgStyle = {
    display: "inline" as "inline",
    left: "0",
    width: "var(--navSize)",
    padding: "1rem",
    zIndex: "100",
    filter: "drop-shadow(0 0 .25rem lightslategray)",
  };

  const txtCellStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    position: "absolute" as "absolute",
    width: "100%",
    height: "100svh",
    bottom: "0",
    alignItems: "bottom",
    textAlign: "center" as "center",
    justifyContent: "flex-end" as "flex-end",
    zIndex: "100",
  };

  const titleStyle = {
    alignSelf: "center" as "center",
    color: headProps.textColor.value,
    margin: "0",
    fontSize: "5.75rem",
    lineHeight: "5.75rem",
    fontWeight: "700",
    fontStyle: "bold",
    maxWidth: "10ch",
    filter: "drop-shadow(0 0 .25rem lightslategray)",
  };

  const subHeadlineStyle = {
    color: headProps.textColor.value,
    margin: "2rem 1rem 15vh 1rem",
    fontSize: "1.5rem",
    lineHeight: "3rem",
    fontWeight: "400",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
    filter: "drop-shadow(0 0 .25rem lightslategray)",
  };

  const arrowStyle = {
    alignSelf: "center",
    position: "absolute" as "absolute",
    bottom: "1rem",
    width: "2rem",
    fill: "white",
  };

  const navBarStyle = {
    position: "fixed" as "fixed",
    top: 0,
    width: "100%",
    zIndex: "1000",
    background: "rgba(255,255,255, var(--opacity))",
    willChange: "background",
  };

  const navLineStyle = {
    display: "flex" as "flex",
    width: "100%",
    maxHeight: "8rem",
  };

  const navTextStyle = {
    display: "flex",
    position: "absolute" as "absolute",
    right: "0",
    bottom: "0",
    flexDirection: "row" as "row",
    fontSize: "2.25rem",
    textAlign: "right" as "right",
    paddingRight: "2rem",
    paddingBottom: "1rem",
    color: "#595959",
  };

  const navLinkStyle = {
    padding: "0 1.5rem 0 1.5rem",
  };

	return (
    <div id='toprow'>
      <div id='navbar' style={navBarStyle}>
        <div style={navLineStyle}>
          <a href='#toprow'><img style={imgStyle} src="../img/mint_logo_postitiv_RGB.svg" /></a>
          <div style={navTextStyle}>
            <a href="#vision" style={navLinkStyle}>Vision</a>
            <a href="#omoss" style={navLinkStyle}>Om Oss</a>
            <a href="#roller" style={navLinkStyle}>Roller</a>
            <a href="https://mint-1712829496.teamtailor.com/" target="_blank" style={navLinkStyle}>Mint & Friends</a>
            <a href="#kompis" style={navLinkStyle}>Kontakt</a>
          </div>
        </div>
      </div>
      <div style={rowStyle}>
        <video id="background-video" style={videoStyle} autoPlay loop muted playsInline >
          <source src={"../img/vid_2_flipped_xfade.mp4"} type="video/mp4" />
        </video>
        <div style={txtCellStyle}>
          <h1 className='header-title' style={titleStyle}>{headProps.headline}</h1>
          <div style={subHeadlineStyle}>{documentToReactComponents(headProps.subHeadline, options)}</div>
          <a href="#whoweare"><img src='../img/down-arrow-svgrepo-com_white.svg' style={arrowStyle}></img></a>
        </div>
      </div>
    </div>
	);
}