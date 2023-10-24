import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
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
    alignItems: "center" as "center",
    backgroundColor: backgroundColor.value,
    justifyContent: "center" as "center",
    padding: "5rem",
    margin: 0,
  };
  const textContainerStyle = {
    //width: "auto",
    //width: "56rem",
    padding: "0",
  };
  const titleStyleCentered = {
    display: "block",
    color: textColor.value,
    textAlign: "left" as "left",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
    lineHeight: "4rem",
    margin: "0",
    padding: "0 2rem 0 2rem",
    //maxWidth: "22ch",
    //minWidth: "16ch",
  };
  const abstractStyleCentered = {
    color: textColor.value,
    textAlign: "left" as "left",
    fontSize: "2rem",
    fontStyle: "italic",
    fontWeight: "400",
    margin: "0",
    width: "32rem",
    padding: "0 2rem 0 2rem",
//    padding: "auto",
  };
  const paragraphStyle = {
    color: textColor.value,
    textAlign: "left" as "left",
    fontSize: "1.75rem",
    //fontStyle: "italic",
    fontWeight: "400",
    margin: "0",
    padding: "0 2rem 2rem 2rem",
    //maxWidth: "58rem",
  };


	return (
    <section className='Quote' style={entryStyle}>
      <div style={textContainerStyle}>
      <h1 style={titleStyleCentered}>{title}</h1>
      { abstract && <div style={abstractStyleCentered}>{abstract}</div>}
      { text && <div style={paragraphStyle}>{documentToReactComponents(text, options)}</div>}
      </div>
    </section>
	);
}