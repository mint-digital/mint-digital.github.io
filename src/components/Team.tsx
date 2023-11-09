import './Team.css';

export default function Team({
  team,
}: {
  team,
}) {

  const entryStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    backgroundColor: team.backgroundColor.value,
    padding: "3rem auto",
    margin: 0,
  };
  const teamContainerStyle = {
    padding: "6rem",
  };
  const teamImgStyle = {
    width: "20rem",
  };
  const titleStyleCentered = {
    display: "inline-block",
    color: team.textColor.value,
    textAlign: "left" as "left",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
    lineHeight: "4rem",
    margin: "0",
    padding: "0rem",
  };
  const paragraphStyle = {
    color: team.textColor.value,
    textAlign: "left" as "left",
    fontSize: "1.75rem",
    fontWeight: "400",
    margin: "0",
    padding: "0 0rem 0rem 0rem",
  };


  return (
    <section className='TeanContainer' style={entryStyle}>
      {team.members.map(function (entry, i) {
        return <div key={i} style={teamContainerStyle}>
          <a href={entry.linkedin_url}><img src={entry.image_url} style={teamImgStyle}></img></a>
          <h2 style={titleStyleCentered}>{entry.title}</h2>
          <span style={paragraphStyle}>{entry.text}</span>
        </div>
      })}
    </section>
  );
}