import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import './Card.css';

export default function Card({
  isMobile,
  title,
  text,
  image_url,
  backgroundColor,
  textColor,
  alignImageRight,
  ctaText,
  ctaUrl,
  anchor,
}: {
  isMobile: boolean,
  title: string,
  text,
  image_url: string,
  backgroundColor,
  textColor,
  alignImageRight,
  ctaText,
  ctaUrl,
  anchor,
}) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p
          style={{
            marginBottom: "1.75rem",
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
          >
            {children}
          </a>
        );
      },
    },
  };

  const outerStyle = {
    backgroundColor: backgroundColor.value,
  };

  const entryStyle = {
    backgroundColor: backgroundColor.value,
    margin: 0,
    display: "grid",
    gridTemplateColumns: "auto fit-content(1400px) auto",
  };

  const txtCellStyle = {
    display: "inline-block",
    position: "relative" as "relative",
    width: "50%",
  };
  const titleStyle = {
    color: textColor.value,
    padding: "4rem 4rem 0rem 4rem",
    margin: "0rem 0",
    fontSize: "4rem",
    lineHeight: "4rem",
    fontWeight: "700",
    fontStyle: "bold",
    textAlign: "left" as "left",
  };
  const abstractStyle = {
    display: "block",
    color: textColor.value,
    fontSize: "1.75rem",
    fontWeight: "400",
    lineHeight: "2.5rem",
    textWrap: "balance",
  };
  const imgCellStyle = {
    padding: "0rem 0rem",
    objectFit: "cover" as "cover",
    objectPosition: "50% 50%",
    width: "50%",
  };
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as "cover",
    transformOrigin: "top center",
    objectPosition: "center 35%",
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
    margin: "2rem 2rem 2rem 2rem",
  };
  const ctaBallStyle = {
    position: "absolute" as "absolute",
    right: "4rem",
    width: "9ch",
    padding: "2.5rem 1.25rem",
    bottom: "-2rem",
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
  const abstractContainerStyle = {
    padding: "4rem",
  }

  if(isMobile){
    return renderMobile(  
      outerStyle,
      entryStyle,
      txtCellStyle,
      titleStyle,
      title,
      abstractStyle,
      text,
      options,
      imgCellStyle,
      imgStyle,
      image_url,
      anchor);
  } else {
    return renderDesktop(
      alignImageRight,
      outerStyle,
      entryStyle,
      txtCellStyle,
      titleStyle,
      title,
      abstractStyle,
      text,
      options,
      imgCellStyle,
      imgStyle,
      image_url,
      ctaUrl,
      ctaText,
      abstractContainerStyle,
      anchor);
  }
}

const anchorStyle = {
  position: "relative" as "relative",
  top: "-6rem",
};

function renderMobile(  
  outerStyle,
  entryStyle,
  txtCellStyle,
  titleStyle,
  title,
  abstractStyle,
  text,
  options,
  imgCellStyle,
  imgStyle,
  image_url,
  anchor) {
    const rowStyle = {
      display: "flex",
      flexDirection: "column" as "column",
      width: "100%",
      padding: "0rem",
    };

    imgCellStyle.width = "100vw";
    imgCellStyle.height = "50vw";
    imgCellStyle.backgroundImage = "url(" + image_url +")";
    imgCellStyle.backgroundSize = "cover" as "cover";
    imgCellStyle.backgroundPosition = "center center";
    imgCellStyle.textAlign = "bottom";

    titleStyle.display = "block";
    titleStyle.width = "content";
    titleStyle.padding = "2rem 0rem 2rem 0rem";

    txtCellStyle.width = "auto";
    txtCellStyle.padding = "0rem 0rem 4rem 0rem";
    txtCellStyle.margin = "0rem 4rem";

    return (<div style={outerStyle}>
      <div id={anchor} style={anchorStyle}></div>
      <section style={entryStyle}>
        <div className='leftPad'></div>
        <span className="rowStyle" style={rowStyle}>
          <div className="imgCellStyle" style={imgCellStyle}>
            <img style={imgStyle} src={image_url}></img>
          </div>
          <span className='cardTextCell' style={txtCellStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <div>
              <span style={abstractStyle}>{documentToReactComponents(text, options)}</span>
            </div>
          </span>
        </span>
        <div className='rightPad'></div>
      </section>
    </div>)
}

function renderDesktop(
  alignImageRight,
  outerStyle,
  entryStyle,
  txtCellStyle,
  titleStyle,
  title,
  abstractStyle,
  text,
  options,
  imgCellStyle,
  imgStyle,
  image_url,
  ctaUrl,
  ctaText,
  abstractContainerStyle,
  anchor) {
    if (alignImageRight) {
      const padStyle = {
        backgroundColor: "#efe9e0",
      }
      return (
        <div style={outerStyle}>
          <div id={anchor} style={anchorStyle}></div>
          <section style={entryStyle}>
            <div className='leftPad' style={padStyle}></div>
            <div className="rowStyle" style={padStyle}>
              <span className='cardTextCell' style={txtCellStyle}>
                <h1 style={titleStyle}>{title}</h1>
                <div style={abstractContainerStyle}>
                  <span style={abstractStyle}>{documentToReactComponents(text, options)}</span>
                </div>
              </span>
              <span className='imgCellStyle' style={imgCellStyle}>
                <img style={imgStyle} src={image_url}></img>
              </span>
            </div>
            <div className='rightPad' style={padStyle}></div>
          </section>
        </div>
      );
    } else {
      return (
        <div style={outerStyle}>
          <div id={anchor} style={anchorStyle}></div>
          <section style={entryStyle}>
            <div className='leftPad'></div>
            <div className="rowStyle">
              <span className="imgCellStyle" style={imgCellStyle}>
                <img style={imgStyle} src={image_url}></img>
              </span>
              <span className='cardTextCell' style={txtCellStyle}>
                <a className='cta-ball' href={ctaUrl}>{ctaText}</a>
                <h1 style={titleStyle}>{title}</h1>
                <div style={abstractContainerStyle}>
                  <span style={abstractStyle}>{documentToReactComponents(text, options)}</span>
                </div>
              </span>
            </div>
            <div className='rightPad'></div>
          </section>
        </div>
      );
    }
}