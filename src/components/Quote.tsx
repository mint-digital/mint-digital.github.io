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
  const quoteOptions = {
    renderNode: {
      [BLOCKS.HEADING_2]: (_node, children) => (
        <p
          style={{
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

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p
          style={{
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

  const entryStyle = {
    backgroundColor: backgroundColor.value,
    display: "grid",
    gridTemplateColumns: "auto fit-content(1400px) auto",
  };

  const quoteContainerStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    alignSelf: "center" as "center",
    padding: "4rem 0rem 0rem 0rem",
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    padding: "4rem 4rem 4rem 4rem",
  };

  const quoteTitleStyleCentered = {
    display: "block",
    color: textColor.value,
    textAlign: "center" as "center",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
    margin: "0",
    padding: "0",
  };

  const titleStyleCentered = {
    display: "inline-block",
    color: textColor.value,
    textAlign: "left" as "left",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
    lineHeight: "4rem",
    margin: "0",
    padding: "0rem",
  };

  const quoteStyle = {
    display: "inline-block",
    color: textColor.value,
    textAlign: "center" as "center",
    fontSize: "1.75rem",
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
    backgroundColor: "#cedcd5",
  };

  const paragraphStyle = {
    color: textColor.value,
    textAlign: "left" as "left",
    fontSize: "1.75rem",
    lineHeight: "2.5rem",
    fontWeight: "400",
    margin: "0",
    padding: "0 0rem 0rem 0rem",
  };

  const anchorStyle = {
    position: "relative" as "relative",
    top: "-6rem",
  };

	return (
    <section className='Quote' >
      { text && isQuote && <div id='whoweare' style={anchorStyle}></div> }
      { !isQuote && <div id={anchor} style={anchorStyle}></div> }
      <div style={entryStyle}>
      <div className='leftPad_1'></div>
      <div style={isQuote ? quoteContainerStyle : textContainerStyle}>
        <h1 style={isQuote ? quoteTitleStyleCentered : titleStyleCentered}>{title}</h1>
        { text && isQuote &&  <div style={quoteStyle}>{documentToReactComponents(text, quoteOptions)}</div>}
        { text && !isQuote && <div style={paragraphStyle}>{documentToReactComponents(text, options)}</div>}
      </div>
      <div className='rightPad_1'></div>
      {isQuote &&  <img src='../img/lanner_20231116_0021_4000px_crop.jpg' style={groupImgStyle}></img> }
      </div>
    </section>
	);
}