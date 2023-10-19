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
    padding: 0,
    height: "32rem",
    width: "100%",
    maxWidth: "1400px",
  };
  const imgStyle = {
    width: "6rem",
    alignSelf: "start",
    padding: "2rem 2rem 0 2rem",
  };
  const txtCellStyle = {
    width: "100%",
    textAlign: "center" as "center",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    padding: "0",
  };
  const titleStyle = {
    color: headProps.textColor.value,
    padding: "0 auto 0",
    margin: "0 auto 0",
    fontSize: "5rem",
    lineHeight: "5rem",
    fontWeight: "700",
    fontStyle: "bold",
    maxWidth: "10ch",
  };
  const subheaderStyle = {
    color: headProps.textColor.value,
    padding: "0",
    margin: "2rem auto 0",
    fontSize: "1.25rem",
    fontWeight: "400",
    width: "48ch",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
  };

	return (
    <div style={rowStyle}>
      <img style={imgStyle} src="img/mint_logo_v1_light.png" />
      <span style={txtCellStyle}>
        <h1 style={titleStyle}>{headProps.headline}</h1>
        <div>
          <p style={subheaderStyle}>{headProps.subHeader}</p>
        </div>
      </span>
    </div>
	);
}