import Card from './Card';
import Quote from './Quote';
import { useMediaQuery } from 'react-responsive'

export default function Cards({
  cards,
}: {
  cards,
}) {
  const isMobile = useMediaQuery({ maxWidth: 500})
  let cs = cards.items.map((c, idx) => {
  //  console.log(c);
    const cardProps = { 
      isMobile,
      image_url: c.fields.titleImage != null ? "https:" + c.fields.titleImage.fields.file.url : null,
      ...c.fields
    };
    let elem;
    if(cardProps.image_url) {
      elem = <Card {...cardProps} /> 
    } else {
      //console.log(JSON.stringify(cardProps))
      elem = <Quote {...cardProps} />
    }
    return (
      //<li key={idx}> 
      //  {elem}
      //</li>
      <div key={idx}> 
        {elem}
      </div>
    );
  });
  //console.log("cs: " + cs);

  const ulStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    overflow: "hidden",
//    maxWidth: "1400px",
//    minWidth: "496px",
  }
//  return (<ul style={ulStyle}>{cs}</ul>);
//  return (<div style={ulStyle}>{cs}</div>);
  return cs;
}