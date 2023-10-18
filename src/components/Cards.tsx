import Card from './Card';
import Quote from './Quote';

export default function Cards({
  cards
}: {
  cards
}) {
  let cs = cards.items.map((c, idx) => {
  //  console.log(c);
    const cardProps = { 
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
      <li key={idx}> 
        {elem}
      </li>
    );
  });
  //console.log("cs: " + cs);

  const ulStyle = {
    maxWidth: "1400px",
  }
  return (<ul style={ulStyle}>{cs}</ul>);
}