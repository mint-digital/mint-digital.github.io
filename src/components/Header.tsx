export default function Header({
  headProps,
}: {
  headProps,
}) {
  console.log("asdf " + JSON.stringify(headProps));
  console.log("header; " + headProps.headline);
  console.log("subheader: " + headProps.subHeader);
  console.log("bgColor: " + headProps.backgroundColor.value);
  console.log("txtColor: " + headProps.textColor.value);
  console.log("bgImg: " + headProps.backgroundImage.fields.file.url);

  // const entryStyle = {
  //   display: "block",
  //   textAlign: "center" as "center",
  //   backgroundColor: headProps.backgroundColor.value,
  //   backgroundImage: "url(" + headProps.backgroundImage.fields.file.url + ")",
  //   padding: 0,
  //   height: "30rem",
  //   maxWidth: "1400px",
  // };
  const rowStyle = {
    display: "flex",
    textAlign: "center" as "center",
    backgroundColor: headProps.backgroundColor.value,
    backgroundImage: "url(" + headProps.backgroundImage.fields.file.url + ")",
//    backgroundRepeat: "round",
    backgroundSize: "cover",
    padding: 0,
    height: "30rem",
    maxWidth: "1400px",
  };
  const txtCellStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    padding: "5rem",
    width: "100%",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  };
  const titleStyle = {
    color: headProps.textColor.value,
    padding: "0 2rem 0",
    margin: "2rem 0",
    fontSize: "4rem",
    lineHeight: "4rem",
    fontWeight: "700",
    fontStyle: "bold",
    width: "10ch",
  };
  const subheaderStyle = {
    color: headProps.textColor.value,
    padding: "0 2rem 0",
    fontSize: "1.25rem",
    fontWeight: "400",
    width: "28ch",
  };

	return (
    // <head style={entryStyle}>
      <div style={rowStyle}>
        <span style={txtCellStyle}>
          <h1 style={titleStyle}>{headProps.headline}</h1>
          <div>
            <p style={subheaderStyle}>{headProps.subHeader}</p>
          </div>
        </span>
      </div>
    // </head>
	);
}