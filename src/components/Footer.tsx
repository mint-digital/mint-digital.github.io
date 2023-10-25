export default function Footer({
  footProps,
}: {
  footProps,
}) {
  //console.log("title; " + footProps.title);
  //console.log("bgColor; " + JSON.stringify(footProps.image));

  const entryStyle = {
//    background: "linear-gradient(to bottom, " + footProps.backgroundColor.value + " 0%, rgba(0,0,0,0)) 100%",
    backgroundColor: footProps.backgroundColor.value,
    padding: "0 0 30rem 0",
    margin: 0,
    width: "100%",
    maxWidth: "1400px",
  };
  const rowStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
  };
  const profileStyle = {
    width: "15rem",
    height: "15rem",
    padding: "auto",
    margin: "4rem",
  };
  const txtCellStyle = {
    alignContent: "flex-start" as "flex-start",
  };
  const titleStyle = {
    color: footProps.textColor.value,
    padding: "0 2rem 0",
    margin: "0",
    fontSize: "2rem",
    lineHeight: "2rem",
    fontWeight: "700",
    fontStyle: "bold",
    width: "20ch",
  };
  const subheaderStyle = {
    color: footProps.textColor.value,
    padding: "2rem 2rem 0",
    margin: "0",
    fontSize: "1.25rem",
    fontWeight: "700",
    width: "28ch",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
  };
  const contactStyle = {
    color: footProps.textColor.value,
    padding: "0 2rem 0",
    fontSize: "1.25rem",
    fontWeight: "400",
    width: "28ch",
  };

	return (
    <section id="kompis" style={entryStyle}>
      <div style={rowStyle}>
        <img style={profileStyle} src={footProps.image.fields.file.url}></img>
        <span style={txtCellStyle}>
          <h1 style={titleStyle}>{footProps.title}</h1>
          <div>
            <p style={subheaderStyle}>Kontakta oss idag</p>
            <a style={contactStyle} href="mailto:hej@mint.se">hej@mint.se</a>
            <p style={subheaderStyle}>Mats Saxer</p>
            <a style={contactStyle} href="callto:hej@mint.se">072 - 44 76 700</a>
          </div>
        </span>
      </div>
    </section>
	);
}