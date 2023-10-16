import './Card.css';

export default function Card({
  title,
  abstract,
  image_url
}: {
  title: string,
  abstract: string,
  image_url: string
}) {
	return (
		<>
      <h1>{title}</h1>
      <h1>{abstract}</h1>
			<img src={image_url}></img>
		</>
	);
}