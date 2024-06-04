import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import './Quote.css';

export default function Quote({
  isMobile,
  title,
  text,
  backgroundColor,
  textColor,
  isQuote,
  anchor,
}: {
  isMobile: boolean,
  title: string,
  text,
  image_url: string,
  backgroundColor,
  textColor,
  isQuote: boolean,
  anchor,
}) {
  console.log(isMobile);
  //console.log("title; " + title);
  //console.log("abstract: " + abstract);
  //console.log("backgroundColor: " + backgroundColor.value);
  //console.log("textColor: " + textColor.value);

  const quoteOptions = {
    renderNode: {
      [BLOCKS.HEADING_2]: (_node, children) => (
        <p
          style={{
            //color: theme.colors.darkBlue,
            //fontFamily: theme.fonts.Century_Gothic,
            //fontSize: '15px',
            //lineHeight: '30px',
            //marginBottom: '0.75rem',
            display: "inline",
            color: textColor.value,
            textAlign: "left" as "left",
            fontSize: "3rem",
            fontStyle: "bold",
            fontWeight: "700",
            lineHeight: "4rem",
            margin: "0",
            padding: "0rem 1rem 0 0rem",
            marginTop: "0rem",
          }}
        >
          {children}
        </p>
      ),
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p
          style={{
            //color: theme.colors.darkBlue,
            //fontFamily: theme.fonts.Century_Gothic,
            //fontSize: '15px',
            //lineHeight: '30px',
            //marginBottom: '0.75rem',
            fontSize: "1.75rem",
            display: "block",
            marginTop: "0rem",
            maxWidth: "45ch",
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
            marginTop: "2rem",
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
//    display: "flex",
//    flexDirection: "column" as "column",
    //alignItems: "center" as "center",
    backgroundColor: backgroundColor.value,
    //justifyContent: "center" as "center",
    //minWidth: "50rem",
//    padding: "6rem 6rem",
//    padding: "4rem 0",
    // padding: "4rem",
    //margin: "6rem 6rem",
    //margin: 0,
    display: "grid",
//    gridTemplateColumns: "minmax(4rem, auto) fit-content(1600px) minmax(4rem, auto)",
    gridTemplateColumns: "auto fit-content(1400px) auto",
  };
  const quoteContainerStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    //width: "auto",
    alignSelf: "center" as "center",
    padding: "4rem 0rem 0rem 0rem",
  };
  const textContainerStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    //width: "auto",
    //width: "56rem",
    padding: "4rem 4rem 4rem 4rem",
  };
  const quoteTitleStyleCentered = {
    display: "block",
    color: textColor.value,
//    textAlign: "left" as "left",
    textAlign: "center" as "center",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
//    lineHeight: "4rem",
    margin: "0",
    padding: "0",
    //maxWidth: "22ch",
    //minWidth: "16ch",
  };
  const titleStyleCentered = {
    display: "inline-block",
    color: textColor.value,
    textAlign: "left" as "left",
//    textAlign: "center" as "center",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
    lineHeight: "4rem",
    margin: "0",
    padding: "0rem",
    //maxWidth: "22ch",
    //minWidth: "16ch",
  };
  const quoteStyle = {
    display: "inline-block",
    color: textColor.value,
//    textAlign: "left" as "left",
    textAlign: "center" as "center",
    fontSize: "1.75rem",
    //fontStyle: "italic",
    fontWeight: "400",
    margin: "0",
    padding: "0 0rem 4rem 0rem",
    maxWidth: "58rem",
    alignSelf: "center" as "center",
  };
  const groupImgStyle = {
    width: "100%",
    padding: "0",
    margin: "0",
    gridColumn: "span 3",
  };
  const imgPadStyle = {
    // backgroundColor: "#efe9e0",
    backgroundColor: "#cedcd5",
  };
  const paragraphStyle = {
    color: textColor.value,
    textAlign: "left" as "left",
    fontSize: "1.75rem",
    lineHeight: "2.5rem",
    //fontStyle: "italic",
    fontWeight: "400",
    margin: "0",
    padding: "0 0rem 0rem 0rem",
    //maxWidth: "58rem",
  };

	return (
    <section id={anchor} className='Quote' style={entryStyle}>
      <div className='leftPad_1'></div>
      <div id='whoweare' style={isQuote ? quoteContainerStyle : textContainerStyle}>
        <h1 style={isQuote ? quoteTitleStyleCentered : titleStyleCentered}>{title}</h1>
        { text && isQuote &&  <div style={quoteStyle}>{documentToReactComponents(text, quoteOptions)}</div>}
        { text && !isQuote && <div style={paragraphStyle}>{documentToReactComponents(text, options)}</div>}
      </div>
      <div className='rightPad_1'></div>
      {/* <div className='leftPad_2' style={imgPadStyle}></div> */}
        {isQuote &&  <img src='../img/lanner_20231116_0021_4000px_crop.jpg' style={groupImgStyle}></img> }
        {/* {isQuote &&  <img src='../img/signal-2023-11-23-205548_002_cropped.jpeg' style={groupImgStyle}></img> } */}
      {/* <div className='rightPad_2' style={imgPadStyle}></div> */}
    </section>
	);
}