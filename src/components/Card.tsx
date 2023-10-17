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
  console.log("title; " + title);
  console.log("abstract: " + abstract);
  console.log("img: " + image_url);
  console.log("backgroundColor: " + backgroundColor.value);
  console.log("textColor: " + textColor.value);

  const entryStyle = {
    backgroundColor: backgroundColor.value
  };
  const titleStyle = {
    color: textColor.value
  };
  const abstractStyle = {
    color: textColor.value
  };

	return (
    <section style={entryStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <h1 style={abstractStyle}>{abstract}</h1>
      {image_url && <img src={image_url}></img>}
      <hr></hr>
    </section>
	);
}