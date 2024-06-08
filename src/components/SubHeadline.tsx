import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import styles from './Header.module.css'; 
import { BLOCKS } from '@contentful/rich-text-types';

export default function SubHeadline({
  subHeadline,
  textColor,
}: {
  subHeadline,
  textColor,
}) {
  const subHeadlineStyle = {
    color: textColor,
    fontSize: "1.5rem",
    lineHeight: "3rem",
    fontWeight: "400",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
    filter: "drop-shadow(0 0 .25rem lightslategray)",
  };

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          {children}
        </p>
      )
    }
  }

  return (
    <div style={subHeadlineStyle}>{documentToReactComponents(subHeadline, options)}</div>
	);
}