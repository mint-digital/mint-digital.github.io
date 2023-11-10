import './Team.css';

export default function Team({
  team,
}: {
  team,
}) {

  const entryStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    backgroundColor: team.backgroundColor,
    padding: "4rem",
    margin: 0,
    width: "100%",
  };
  const teamContainerStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    fleWrap: "wrap",
    flexFlow: "row wrap",
    padding: "0rem 6rem",
    maxWidth: "100svw",
    justifyContent: "center" as "center",
  };
  const teamImgStyle = {
    padding: "2rem",
    width: "20rem",
  };
  const headerStyleCentered = {
    display: "block",
    color: team.textColor,
    textAlign: "center" as "center",
    fontSize: "4rem",
    fontStyle: "bold",
    fontWeight: "700",
    lineHeight: "4rem",
    margin: "0",
    padding: "0 0 2rem 0",
  };
  const entryContainerStyle = {
    color: team.textColor,
    textAlign: "center" as "center",
  };
  const nameStyle = {
    fontSize: "1.75rem",
    fontWeight: "400",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
    color: team.textColor,
  }; 
  const titleStyle = {
    color: team.textColor,
    textAlign: "center" as "center",
    fontSize: "1.5rem",
    fontWeight: "400",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
    margin: "0",
    padding: "0 0rem 0rem 0rem",
  };
  const iconStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
    padding: "1rem",
    gap: "1rem",
  };
  const linkedInStyle = {
    width: "3rem",
  };

  return (
    <section className='TeanContainer' style={entryStyle}>
      <h2 style={headerStyleCentered}>Vi är mint</h2>
      <div style={teamContainerStyle}>
        {team.members.map(function (entry, i) {
          return <div key={i} style={entryContainerStyle}>
            <a href={entry.linkedin_url} target='_blank'><img src={entry.image_url} style={teamImgStyle}></img></a>
            <div style={nameStyle}>{entry.name}</div>
            <div style={titleStyle}>{entry.title}</div>
            <div style={iconStyle}>
              <a href='mailto://hej@mint.se' target='_blank'><img src='../img/email-svgrepo-com_color.svg' style={linkedInStyle}></img></a>
              <a href={entry.linkedin_url} target='_blank'><img src='../img/iconmonstr-linkedin-3_color.svg' style={linkedInStyle}></img></a>
            </div>
          </div>
        })}
      </div>
    </section>
  );
}