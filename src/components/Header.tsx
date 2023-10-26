import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './Header.module.css'; 

export default function Header({
  headProps,
}: {
  headProps,
}) {
  //console.log("asdf " + JSON.stringify(headProps));
  //console.log("header; " + headProps.headline);
  //console.log("subheader: " + headProps.subHeader);
  //console.log("bgColor: " + headProps.backgroundColor.value);
  //console.log("txtColor: " + headProps.textColor.value);
  //console.log("bgImg: " + headProps.backgroundImage.fields.file.url);

  const rowStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    backgroundColor: headProps.backgroundColor.value,
    backgroundImage: "url(" + headProps.backgroundImage.fields.file.url + ")",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    padding: "0 0 0rem 0",
    margin: 0,
    height: "32rem",
    width: "100%",
    maxWidth: "1400px",
    overflow: "hidden",
  //  minWidth: "496px",
  };
  const videoStyle = {
    //position: "fixed",
    //zIndex: "-1",
    width: "100%",
    filter: "brightness(50%)",
    
    //height: "32rem",
//    height: "100%",
//    width: "100%",
//    float: "left",
//    top: 0,
//    padding: "none",
//    position: "relative",
  };
  const imgStyle = {
    position: "absolute" as "absolute",
    top: "0rem",

    width: "6rem",
    alignSelf: "start",
    padding: "2rem 2rem 0 2rem",
  };
  const txtCellStyle = {
    position: "absolute" as "absolute",
    top: "8rem",
    left: "50%",
    transform: "translate(-50%, 0%)",
//    left: "25%",

    textAlign: "center" as "center",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    padding: "0",
    zIndex: "100",
  };
  const titleStyle = {
    color: headProps.textColor.value,
    padding: "0 auto 3rem 0",
    margin: "0 auto 3rem",
    fontSize: "5rem",
    lineHeight: "5rem",
    fontWeight: "700",
    fontStyle: "bold",
    maxWidth: "10ch",
  };
  const subHeadlineStyle = {
    color: headProps.textColor.value,
    padding: "0",
    margin: "0rem auto 0",
    fontSize: "1.25rem",
    fontWeight: "400",
    width: "ch",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
  };

	return (
    <div style={rowStyle}>
      <video id="background-video" style={videoStyle} autoPlay loop muted>
        {/* <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" /> */}
        <source src="img/forest.mp4" type="video/mp4" />
      </video>
      <img style={imgStyle} src="img/mint_logo_v1_light.png" />
      <div style={txtCellStyle}>
        <h1 style={titleStyle}>{headProps.headline}</h1>
        <div>
          <span style={subHeadlineStyle}>{documentToReactComponents(headProps.subHeadline)}</span>
        </div>
      </div>
    </div>
	);
}