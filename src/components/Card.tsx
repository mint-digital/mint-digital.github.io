import './Card.css';

export default function Card({
  title,
  abstract,
  image_url,
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
  //console.log("img: " + image_url);
  //console.log("backgroundColor: " + backgroundColor.value);
  //console.log("textColor: " + textColor.value);

  const entryStyle = {
    backgroundColor: backgroundColor.value,
    padding: 0,
//    height: "30rem"
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
    width: "10ch",
  };
  const abstractStyle = {
    color: textColor.value,
    padding: "0 2rem 0",
    fontSize: "1.25rem",
    fontWeight: "400",
    width: "34ch",
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
//    objectFit: "contain" as "contain",
    objectFit: "cover" as "cover",
//    aspectRatio: "1 / 1",
  };

	return (
    <section style={entryStyle}>
      <div style={rowStyle}>
        <span style={imgCellStyle}>
          <img style={imgStyle} src={image_url}></img>
        </span>
        <span style={txtCellStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <div>
            <p style={abstractStyle}>{abstract}</p>
          </div>
        </span>
      </div>
    </section>
	);
}