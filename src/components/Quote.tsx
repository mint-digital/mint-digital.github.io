import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import './Quote.css';

export default function Quote({
  title,
  text,
  backgroundColor,
  textColor,
  isQuote,
}: {
  title: string,
  text,
  image_url: string,
  backgroundColor,
  textColor,
  isQuote: boolean,
}) {
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
    display: "flex",
    flexDirection: "column" as "column",
    //alignItems: "center" as "center",
    backgroundColor: backgroundColor.value,
    //justifyContent: "center" as "center",
    //minWidth: "50rem",
    padding: "6rem 6rem",
    margin: 0,
  };
  const quoteContainerStyle = {
    //width: "auto",
    alignSelf: "center" as "center",
    padding: "0rem",
  };
  const textContainerStyle = {
    //width: "auto",
    //width: "56rem",
    padding: "0rem",
  };
  const quoteTitleStyleCentered = {
    display: "block",
    color: textColor.value,
//    textAlign: "left" as "left",
    textAlign: "center" as "center",
    fontSize: "3rem",
    fontStyle: "bold",
    fontWeight: "900",
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
    fontSize: "2rem",
    //fontStyle: "italic",
    fontWeight: "400",
    margin: "0",
    padding: "0 0rem 0rem 0rem",
    maxWidth: "58rem",
  };
  const paragraphStyle = {
    color: textColor.value,
    textAlign: "left" as "left",
    fontSize: "2rem",
    lineHeight: "2.75rem",
    //fontStyle: "italic",
    fontWeight: "400",
    margin: "0",
    padding: "0 0rem 0rem 0rem",
    //maxWidth: "58rem",
  };


	return (
    <section className='Quote' style={entryStyle}>
      <div style={isQuote ? quoteContainerStyle : textContainerStyle}>
        <h1 style={isQuote ? quoteTitleStyleCentered : titleStyleCentered}>{title}</h1>
        { text && isQuote && <span style={quoteStyle}>{documentToReactComponents(text, quoteOptions)}</span>}
        { text && !isQuote && <div style={paragraphStyle}>{documentToReactComponents(text, options)}</div>}
      </div>
    </section>
	);
}