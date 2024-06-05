export default function Footer({
  footProps,
}: {
  footProps,
}) {
  const entryStyle = {
    backgroundColor: footProps.backgroundColor.value,
    padding: "0 0 60rem 0",
    width: "100%",
  };
  
  const rowStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center" as "center",
    alignItems: "center" as "center",
    textAlign: "center" as "center",
  };

  const profileStyle = {
    width: "10rem",
    height: "10rem",
    padding: "4rem 0 1rem 0",
  };

  const txtCellStyle = {
    alignContent: "flex-start" as "flex-start",
    justifyContent: "center" as "center",
    textAlign: "center" as "center",
  };
  const titleStyle = {
    color: footProps.textColor.value,
    padding: "0 2rem 0 1rem",
    fontSize: "2rem",
    lineHeight: "2rem",
    fontWeight: "700",
    fontStyle: "bold",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
  };
  const linkedInStyle = {
    width: "3rem",
    padding: "1rem 0.75rem 2rem 0.75rem",
  };
  const subheaderStyle = {
    color: footProps.textColor.value,
    padding: "0rem 2rem 0 2rem",
    fontSize: "1.25rem",
    fontWeight: "700",
  };
  const contactStyle = {
    color: footProps.textColor.value,
    padding: "0",
    fontSize: "1.25rem",
    fontWeight: "400",
  };

  const anchorStyle = {
    position: "relative" as "relative",
    top: "-6rem",
  };

	return (
    <section style={entryStyle}>
      <div id="kompis" style={anchorStyle}></div>
      <div style={rowStyle}>
        <img style={profileStyle} src="../img/mint_logo_postitiv_RGB.svg"></img>
        <span style={txtCellStyle}>
          <h1 style={titleStyle}>{footProps.title}</h1>
          <div>
            <p style={subheaderStyle}>Kontakta oss idag:&nbsp;
            <a style={contactStyle} href="mailto:hej@mint.se" target="_blank">hej@mint.se</a></p>
            <a href="https://www.linkedin.com/company/mintse/" target="_blank"><img style={linkedInStyle} src="../img/iconmonstr-linkedin-3_color.svg"></img></a><a href="https://www.instagram.com/lifeatmint.se/" target="_blank"><img style={linkedInStyle} src="../img/instagram_mono.webp"></img></a>
            <p style={subheaderStyle}>© Mint, 2023</p>
          </div>
        </span>
      </div>
    </section>
	);
}