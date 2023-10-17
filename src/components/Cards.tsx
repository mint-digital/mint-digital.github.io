import Card from '../components/Card';

export default function Cards({
  cards
}: {
  cards
}) {
  let cs = cards.items.map((c) => {
    console.log(c);
    const cardProps = { 
      image_url: "https:" + c.fields.titleImage.fields.file.url,
      ...c.fields
    };
    return Card(cardProps);
  });
  console.log("cs: " + cs);
  return cs;
}