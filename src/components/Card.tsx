import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './Card.css';

export default function Card({
  title,
  text,
  image_url,
  backgroundColor,
  textColor,
  alignImageRight,
}: {
  title: string,
  text,
  image_url: string,
  backgroundColor,
  textColor,
  alignImageRight,
}) {
  //console.log("title; " + title);
  //console.log("abstract: " + abstract);
  //console.log("img: " + image_url);
  //console.log("backgroundColor: " + backgroundColor.value);
  //console.log("textColor: " + textColor.value);

  const entryStyle = {
    backgroundColor: backgroundColor.value,
    padding: 0,
    margin: 0,
  };
  const rowStyle = {
    display: "flex",
  };
  const txtCellStyle = {
    padding: "5rem",
    flexGrow: "1",
  };
  const titleStyle = {
    color: textColor.value,
    padding: "0 2rem 0",
    margin: "2rem 0",
    fontSize: "4rem",
    lineHeight: "4rem",
    fontWeight: "700",
    fontStyle: "bold",
    maxWidth: "10ch",
  };
  const abstractStyle = {
    display: "block",
    color: textColor.value,
    padding: "0 2rem 0",
    fontSize: "1.5rem",
    fontWeight: "400",
    maxWidth: "34ch",
    textWrap: "balance",
  };
  const imgCellStyle = {
    flexGrow: "1",
    width: "50%",
    maxWidth: "50%",
  };
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as "cover",
  };

  if(alignImageRight) {
    return (
      <section style={entryStyle}>
        <div style={rowStyle}>
          <span style={txtCellStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <div>
              <span style={abstractStyle}>{documentToReactComponents(text)}</span>
            </div>
          </span>
          <span style={imgCellStyle}>
            <img style={imgStyle} src={image_url}></img>
          </span>
        </div>
      </section>
    );
  } else {
    return (
      <section style={entryStyle}>
        <div style={rowStyle}>
          <span style={imgCellStyle}>
            <img style={imgStyle} src={image_url}></img>
          </span>
          <span style={txtCellStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <div>
              <span style={abstractStyle}>{documentToReactComponents(text)}</span>
            </div>
          </span>
        </div>
      </section>
    );
  }
}