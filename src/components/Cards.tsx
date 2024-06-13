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
    const cardProps = { 
      isMobile,
      image_url: c.fields.titleImage != null ? "https:" + c.fields.titleImage.fields.file.url : null,
      ...c.fields
    };
    let elem;
    if(cardProps.image_url) {
      elem = <Card {...cardProps} /> 
    } else {
      elem = <Quote {...cardProps} />
    }
    return (
      <div key={idx}> 
        {elem}
      </div>
    );
  });

  return cs;
}