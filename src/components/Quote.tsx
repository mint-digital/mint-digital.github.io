import './Quote.css';

export default function Quote({
  title,
  abstract,
  backgroundColor,
  textColor
}: {
  title: string,
  abstract: string,
  image_url: string,
  backgroundColor,
  textColor
}) {
  //console.log("title; " + title);
  //console.log("abstract: " + abstract);
  //console.log("backgroundColor: " + backgroundColor.value);
  //console.log("textColor: " + textColor.value);

  const entryStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    backgroundColor: backgroundColor.value,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  };
  const titleStyleCentered = {
    color: textColor.value,
    textAlign: "center" as "center",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
    margin: "4rem 0 0",
  };
  const abstractStyleCentered = {
    color: textColor.value,
    textAlign: "center" as "center",
    fontSize: "1.75rem",
    fontStyle: "italic",
    fontWeight: "400",
    margin: "0 2rem 2rem",
    width: "28rem",
    padding: "auto",
  };
  const hrStyle = {
    border: "1px solid " + textColor.value,
    width: "12rem",
    margin: "0 0 4rem",
  };

	return (
    <section className='Quote' style={entryStyle}>
      <h1 style={titleStyleCentered}>{title}</h1>
      <p style={abstractStyleCentered}>{abstract}</p>
      <hr style={hrStyle}></hr>
    </section>
	);
}