import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import './Card.css';

export default function Card({
  title,
  text,
  image_url,
  backgroundColor,
  textColor,
  alignImageRight,
  ctaText,
  ctaUrl,
}: {
  title: string,
  text,
  image_url: string,
  backgroundColor,
  textColor,
  alignImageRight,
  ctaText,
  ctaUrl,
}) {
  //console.log("title; " + title);
  //console.log("abstract: " + abstract);
  //console.log("img: " + image_url);
  //console.log("backgroundColor: " + backgroundColor.value);
  //console.log("textColor: " + textColor.value);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p
          style={{
            //color: theme.colors.darkBlue,
            //fontFamily: theme.fonts.Century_Gothic,
            //fontSize: '15px',
            //lineHeight: '30px',
            //marginBottom: '0.75rem',
            marginTop: "1.75rem",
          }}
        >
          {children}
        </p>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => {
        return (
          <ul
            style={{
              listStyle: 'disc',
              //color: theme.colors.darkBlue,
              //fontFamily: theme.fonts.Century_Gothic,
              //fontSize: '15px',
              //lineHeight: '30px',
              //marginLeft: '1rem',
            }}
          >
            {children.map((item) => (
              <li key={item.key}>{item.props.children[0].props.children[0]}</li>
            ))}
          </ul>
        );
      },
  
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            //style={{ color: theme.colors.darkBlue }}
          >
            {children}
          </a>
        );
      },
    },
  };

  const entryStyle = {
    backgroundColor: backgroundColor.value,
    padding: 0,
    margin: 0,
  };
  const rowStyle = {
    display: "flex",
  };
  const txtCellStyle = {
    display: "inline-block",
    position: "relative" as "relative",
    padding: "5rem 7rem 5rem 7rem",
    flexGrow: "1",
  };
  const titleStyle = {
    color: textColor.value,
    padding: "0 0rem 0",
    margin: "0rem 0",
    fontSize: "4rem",
    lineHeight: "4rem",
    fontWeight: "700",
    fontStyle: "bold",
    textAlign: "left" as "left",
    //maxWidth: "20ch",
  };
  const abstractStyle = {
    display: "block",
    color: textColor.value,
    padding: "0 0rem 2rem 0",
    fontSize: "1.75rem",
    fontWeight: "400",
    maxWidth: "34ch",
    textWrap: "balance",
  };
  const imgCellStyle = {
    flexGrow: "1",
    width: "40%",
    maxWidth: "40%",
  };
  const imgStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover" as "cover",
    transformOrigin: "top center",
  };
  const ctaStyle = {
    display: "block",
    color: "#efe9e0",
    backgroundColor: "#ab6c5b",
    borderRadius: "16px",
    fontSize: "1.5rem",
    fontWeight: "400",
    textDecoration: "none",
    textAlign: "center" as "center",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
    margin: "0rem 0 0 0",
    padding: "2rem 2rem 2rem 2rem",
  };
  const ctaBallStyle = {
    position: "absolute" as "absolute",
    right: "2rem",
    width: "10ch",
    //height: "12ch",
    padding: "2.5rem 1.25rem",
//    padding: "4rem",
    bottom: "-6rem",
    rotate: "15deg",
    color: "#efe9e0",
    backgroundColor: "#ab6c5b",
    borderRadius: "50%",
    fontSize: "1.5rem",
    fontWeight: "400",
    textDecoration: "none",
    textAlign: "center" as "center",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
  };

  if(alignImageRight) {
    return (
      <section style={entryStyle}>
        <div style={rowStyle}>
          <span style={txtCellStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <div>
              <span style={abstractStyle}>{documentToReactComponents(text, options)}</span>
            </div>
            {ctaText && <a style={ctaStyle} href={ctaUrl}>{ctaText}</a>}
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
            <a style={ctaBallStyle} href={ctaUrl}>{ctaText}</a>
            <h1 style={titleStyle}>{title}</h1>
            <div>
              <span style={abstractStyle}>{documentToReactComponents(text, options)}</span>
            </div>
            {/* {ctaText && <a style={ctaStyle} href={ctaUrl}>{ctaText}</a>} */}
          </span>
        </div>
      </section>
    );
  }
}