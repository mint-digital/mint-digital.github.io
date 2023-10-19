import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './Quote.css';

export default function Quote({
  title,
  abstract,
  text,
  backgroundColor,
  textColor
}: {
  title: string,
  abstract: string,
  text,
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
    padding: 0,
    margin: 0,
  };
  const titleStyleCentered = {
    color: textColor.value,
    textAlign: "center" as "center",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
    margin: "4rem 0 0",
    padding: "2rem 3rem 0 3rem",
    maxWidth: "22ch",
    minWidth: "16ch",
  };
  const paragraphStyle = {
    color: textColor.value,
    textAlign: "left" as "left",
    fontSize: "1.75rem",
    fontStyle: "italic",
    fontWeight: "400",
    margin: "0rem 2rem 2rem",
    padding: "2rem",
    maxWidth: "58rem",
  };
  const abstractStyleCentered = {
    color: textColor.value,
    textAlign: "center" as "center",
    fontSize: "2rem",
    fontStyle: "italic",
    fontWeight: "400",
    margin: "0 2rem 0rem",
    width: "32rem",
    padding: "auto",
  };
  const hrStyle = {
    border: "1px solid " + textColor.value,
    width: "12rem",
    margin: "0 0 4rem",
    padding: "0",
  };

	return (
    <section className='Quote' style={entryStyle}>
      <h1 style={titleStyleCentered}>{title}</h1>
      { abstract != "" && <span style={abstractStyleCentered}>{abstract}</span>}
      { text != "" && <span style={paragraphStyle}>{documentToReactComponents(text)}</span>}
      <hr style={hrStyle}></hr>
    </section>
	);
}