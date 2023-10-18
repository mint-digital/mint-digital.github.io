export default function Footer({
  title,
  image,
  backgroundColor,
  textColor,
}: {
  title: string,
  image,
  backgroundColor,
  textColor,
}) {
  //console.log("title; " + title);

  const entryStyle = {
//    backgroundColor: backgroundColor.value,
    padding: 0,
//    height: "30rem"
  };
  const rowStyle = {
    display: "flex",
  };
  const txtCellStyle = {
    padding: "5rem"
  };
  const titleStyle = {
//    color: textColor.value,
    padding: "0 2rem 0",
    margin: "2rem 0",
    fontSize: "4rem",
    lineHeight: "4rem",
    fontWeight: "700",
    fontStyle: "bold",
    width: "10ch",
  };
  const subheaderStyle = {
//    color: textColor.value,
    padding: "0 2rem 0",
    fontSize: "1.25rem",
    fontWeight: "400",
    width: "28ch",
  };

	return (
    <section style={entryStyle}>
      <div style={rowStyle}>
        <span style={txtCellStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <div>
            {/* <p style={subheaderStyle}>{subheader}</p> */}
          </div>
        </span>
      </div>
    </section>
	);
}