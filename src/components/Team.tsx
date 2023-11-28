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
    padding: "6rem 0",
//    margin: "6rem 0",
//    width: "100%",
   // margin: 0,
  };
  const teamContainerStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    fleWrap: "wrap",
    flexFlow: "row wrap",
//    maxWidth: "100svw",
//    maxWidth: "40svw",
//    maxWidth: "60svw",
//    maxWidth: "1600px",
    maxWidth: "76rem",
    // padding: "0rem 0rem",
    // margin: "0rem 6rem",
    padding: "2rem 1rem 0 1rem",
    alignSelf: "center",
//    justifyContent: "center" as "center",
    justifyContent: "space-around" as "space-around",
    gap: "2rem",
  };
  const teamImgStyle = {
    // padding: "2rem 2rem 1rem 2rem",
    // margin: "2rem 1rem 1rem 1rem",
    width: "18rem",
  };
  const headerStyleCentered = {
    display: "block",
    color: team.textColor,
    textAlign: "center" as "center",
    fontSize: "4.5rem",
    fontStyle: "bold",
    fontWeight: "700",
    lineHeight: "4rem",
    //margin: "0",
//    padding: "0 0 2rem 0",
    margin: "0 0 2rem 0",
  };
  const entryContainerStyle = {
    display: "grid",
    color: team.textColor,
    textAlign: "center" as "center",
    // padding: "0rem 1rem 2rem 1rem",
  };
  const nameCellStyle = {
    margin: "0rem",
    padding: "0rem",
    height: "3.5rem",
  }; 
  const nameStyle = {
    fontSize: "1.3rem",
    fontWeight: "700",
    lineHeight: "2rem",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
    color: team.textColor,
  }; 
  const titleStyle = {
    color: team.textColor,
    textAlign: "center" as "center",
    fontSize: "1.25rem",
    fontWeight: "400",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
    margin: "0",
    padding: "0 0rem 0rem 0rem",
    fontStyle: "italic",
  };
  const iconContainerStyle = {
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "center",
//    padding: "1rem",
    margin: "1rem",
    gap: "1.25rem",
  };
  const iconStyle = {
    width: "1.75rem",
  };

  return (
    <section className='TeamContainer' style={entryStyle}>
      <h2 style={headerStyleCentered}>Vi är Mint</h2>
      <div style={teamContainerStyle}>
        {team.members.items.map(function (entry, i) {
          return <div key={i} style={entryContainerStyle}>
            <a href={entry.fields.linkedInUrl} target='_blank'><img src={entry.fields.profileImage.fields.file.url} style={teamImgStyle}></img></a>
            <div style={nameCellStyle}>
              <div style={nameStyle}>{entry.fields.name}</div>
              <div style={nameStyle}>{entry.fields.surname}</div>
            </div>
            {/* <div style={titleStyle}>{entry.fields.title}</div> */}
            <div style={iconContainerStyle}>
              <a href={"mailto:" + entry.fields.email} target='_blank'><img src='../img/email-svgrepo-com_color.svg' style={iconStyle}></img></a>
              <a href={entry.fields.linkedInUrl} target='_blank'><img src='../img/iconmonstr-linkedin-3_color.svg' style={iconStyle}></img></a>
            </div>
          </div>
        })}
      </div>
    </section>
  );
}