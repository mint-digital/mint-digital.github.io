import Card from '../components/Card';

export default function Cards({
  cards
}: {
  cards
}) {
  let cs = cards.items.map((c, idx) => {
    console.log(c);
    const cardProps = { 
      image_url: c.fields.titleImage != null ? "https:" + c.fields.titleImage.fields.file.url : null,
      ...c.fields
    };
    return (
      <li key={idx}> 
        <Card {...cardProps} />
      </li>
    );
  });
  console.log("cs: " + cs);
  return (<ul>{cs}</ul>);
}