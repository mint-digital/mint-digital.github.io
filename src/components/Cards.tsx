import Card from '../components/Card';

export default function Cards({
  cards
}: {
  cards
}) {
  console.log(cards)
  const card = cards.items[0];
  console.log(card);
  const cardProps = { 
    image_url: "https:" + card.fields.titleImage.fields.file.url,
    ...cards.fields
  };
	return Card(cardProps);
}