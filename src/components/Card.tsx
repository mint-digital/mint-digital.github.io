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
  console.log(isMobile);
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

  const outerStyle = {
    backgroundColor: backgroundColor.value,
    // padding: "0 4rem 0 4rem",
  };

  const entryStyle = {
    backgroundColor: backgroundColor.value,
    margin: 0,
    display: "grid",
    //    gridTemplateColumns: "minmax(4rem, auto) fit-content(1600px) minmax(4rem, auto)",
    gridTemplateColumns: "auto fit-content(1400px) auto",
    // overflow: "hidden",
    // gap: "6rem",
  };
  // const rowStyle = {
  //   display: "flex",
  //   justifyContent: "space-between",
  // };
  const txtCellStyle = {
    display: "inline-block",
    position: "relative" as "relative",
    //padding: "6rem 6rem",
//    padding: "4rem 4rem",
    //margin: "6rem 6rem",
    //padding: "5rem 7rem 5rem 7rem",
    //flexGrow: "1",
    width: "50%",
  };
  const titleStyle = {
    color: textColor.value,
//    padding: "0 0rem 0",
    padding: "4rem 4rem 0rem 4rem",
    // padding: "2rem",
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
    //padding: "0 0rem 2rem 0",
    //margin: "0 0rem 2rem 0",
    fontSize: "1.75rem",
    fontWeight: "400",
    lineHeight: "2.5rem",
    //maxWidth: "34ch",
    textWrap: "balance",
  };
  const imgCellStyle = {
    // display: "inline",
    // minHeight: "100%",
    //    padding: "0rem 6rem 0rem 6rem",
    padding: "0rem 0rem",
    /* position: relative; */
    objectFit: "cover" as "cover",
    // overflow: "hidden",
    /* max-height: 40rem; */
    objectPosition: "50% 50%",
    //    width: "100%",
    width: "50%",
    // width: "50%",
    /* min-width: 100%; */
  };
  const imgStyle = {
    // display: "block",
    // width: "100%",
    // width: "40svw",
    width: "100%",
    height: "100%",
    objectFit: "cover" as "cover",
    transformOrigin: "top center",
    objectPosition: "center 35%",
  };
  //  const imgStyle = {
  //    // display: "block",
  //    // width: "100%",
  //    width: "100%",
  //    height: "34rem",
  //    maxHeight: "34rem",
  //    objectFit: "cover" as "cover",
  //    objectPosition: "50% -70px",
  //    transformOrigin: "top center",
  //  };
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
    //margin: "0rem 0 0 0",
    //padding: "2rem 2rem 2rem 2rem",
    margin: "2rem 2rem 2rem 2rem",
  };
  const ctaBallStyle = {
    position: "absolute" as "absolute",
    right: "4rem",
    width: "9ch",
    //height: "12ch",
    padding: "2.5rem 1.25rem",
    //    padding: "4rem",
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

 // isMobile = false;

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
      backgroundColor,
      abstractContainerStyle,
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
  textColor,
  abstractContainerStyle,
  anchor) {
    console.log("Rendering mobile");
    const rowStyle = {
      display: "flex",
      flexDirection: "column" as "column",
      width: "100%",
      padding: "0rem",
    };
    console.log(image_url);

    imgCellStyle.width = "100vw";
    imgCellStyle.height = "50vw";
    imgCellStyle.backgroundImage = "url(" + image_url +")";
    imgCellStyle.backgroundSize = "cover" as "cover";
    imgCellStyle.backgroundPosition = "center center";
    imgCellStyle.textAlign = "bottom";
//    imgCellStyle.position = "relative";

//    titleStyle.display = "inline-block";
    titleStyle.display = "block";
//    titleStyle.margin = "4rem 4rem 0rem 4rem";
    titleStyle.width = "content";
//    titleStyle.padding = "0.15rem";
    titleStyle.padding = "2rem 0rem 2rem 0rem";
//    titleStyle.backgroundColor = "white";
//    titleStyle.filter = "drop-shadow(0 0 2.25rem blacks)";
//    titleStyle.textShadow = "1px 1px 0 #000, -1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000";
//    titleStyle.color = textColor.value;
//    titleStyle.position = "absolute";
//    titleStyle.bottom = "2rem";

    txtCellStyle.width = "auto";
    txtCellStyle.padding = "0rem 0rem 4rem 0rem";
    txtCellStyle.margin = "0rem 4rem";

    return (<div style={outerStyle}>
      <section id={anchor} style={entryStyle}>
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
    console.log("Rendering desktop");

    const anchorStyle = {
      position: "relative" as "relative",
      top: "-6rem",
    };

    if (alignImageRight) {
      const padStyle = {
        backgroundColor: "#efe9e0",
        // backgroundColor: "#cedcd5",
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
              {/* <span style={imgCellStyle}> */}
              <span className="imgCellStyle" style={imgCellStyle}>
                <img style={imgStyle} src={image_url}></img>
              </span>
              <span className='cardTextCell' style={txtCellStyle}>
                <a className='cta-ball' href={ctaUrl}>{ctaText}</a>
                <h1 style={titleStyle}>{title}</h1>
                <div style={abstractContainerStyle}>
                  <span style={abstractStyle}>{documentToReactComponents(text, options)}</span>
                </div>
                {/* {ctaText && <a style={ctaStyle} href={ctaUrl}>{ctaText}</a>} */}
              </span>
            </div>
            <div className='rightPad'></div>
          </section>
        </div>
      );
    }
}