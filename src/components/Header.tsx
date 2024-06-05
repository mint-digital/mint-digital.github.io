import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './Header.module.css'; 
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export default function Header({
  videoNumber,
  bright,
  headProps,
}: {
  videoNumber,
  bright,
  headProps,
}) {
  
//  const videoNumber: Number = Number.parseInt(searchParams.get('video'));
//  const brightness = searchParams.get('bright');
  console.log(videoNumber);
  console.log(bright);
//  console.log(videoNumber);
//  console.log(brightness);

//  const urlSearchParams = new URLSearchParams(Astro.request.url);
//  const params = Object.fromEntries(urlSearchParams.entries());
//  
////  const headProps = {
//  const props = {
////    headProps: {
//      videoNumber: params.video ? params.video : 0,
//      brightness: params.bright ? params.bright : 60,
////      props: header,
////    }
//  } ;
//  console.log(headProps);
//  console.log(props);
  //const [searchParams, _] = useSearchParams();
  //console.log(searchParams);
  //const videoNumber = searchParams.get("video");
  //const brightness = searchParams.get("bright");


  //console.log("asdf " + JSON.stringify(props));
  //console.log("header; " + props.headline);
  //console.log("subheader: " + props.subHeader);
  //console.log("bgColor: " + props.backgroundColor.value);
  //console.log("txtColor: " + props.textColor.value);
  //console.log("bgImg: " + props.backgroundImage.fields.file.url);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p
          style={{
            //color: theme.colors.darkBlue,
            //fontFamily: theme.fonts.Century_Gothic,
            //fontSize: '15px',
            //lineHeight: '30px',
            //marginBottom: '0.75rem',
            //margin: "0 1rem 0 1rem",
          }}
        >
          {children}
        </p>
      )
    }
  }

  const rowStyle = {
//    display: "flex",
//    flexDirection: "column" as "column",
    backgroundColor: headProps.backgroundColor.value,
    //backgroundImage: "url(" + headProps.backgroundImage.fields.file.url + ")",
    backgroundImage: "url(../img/drone_flight_reverse_xfade.png)",
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
//    padding: "0 0 0rem 0",
    margin: 0,
    //height: "32rem",
    width: "100%",
    height: "100svh",
    //maxWidth: "1400px",
    overflow: "hidden",
  //  minWidth: "496px",
  };

  const brightness = bright ? bright : 80;
//  const bright = headProps.brightness ? headProps.brightness : 60;

  const videoStyle = {
    position: "absolute" as "absolute",
    top: "0",
    zIndex: "1",
    width: "100%",
    filter: "brightness(" + bright + "%)",
    objectFit: "cover" as "cover",
    objectPosition: "center center",

//    transform: "rotateY(180deg)",

//    height: "32rem",
    height: "100svh",
//    width: "177.77777778vh", /* 100 * 16 / 9 */
//    minWidth: "100%",
    overflow: "hidden",
//    minHeight: "56.25vw", /* 100 * 9 / 16 */
    //height: "32rem",
//    height: "100%",
//    width: "100%",
//    float: "left",
//    padding: "none",
//    position: "relative",
  };
  const imgStyle = {
    display: "inline" as "inline",
    //display: "block" as "block",
    //position: "block",
    //position: "relative" as "relative",
    //top: "0",
    //maxHeight: "100%",
    left: "0",
    //width: "content",
    width: "var(--navSize)",
    //maxWidth: "6rem",
    //alignSelf: "start",
//    padding: "2rem 2rem 0 2rem",
    padding: "1rem",
    zIndex: "100",
    filter: "drop-shadow(0 0 .25rem lightslategray)",
  };
//  const txtCellStyle = {
//    position: "absolute" as "absolute",
//    top: "8rem",
//    left: "50%",
//    transform: "translate(-50%, 0%)",
////    left: "25%",
//
//    textAlign: "center" as "center",
//    alignItems: "center" as "center",
//    justifyContent: "center" as "center",
//    padding: "0",
//    zIndex: "100",
//  };
  const txtCellStyle = {
    display: "flex",
    flexDirection: "column" as "column",
    position: "absolute" as "absolute",
    width: "100%",
    //width: "100svw",
    height: "100svh",
    bottom: "0",
//    alignItems: "bottom",
    alignItems: "bottom",
//    left: "50%",
//    transform: "translate(-50%, 0%)",

    textAlign: "center" as "center",
//    alignItems: "center" as "center",
    justifyContent: "flex-end" as "flex-end",
    // justifyContent: "center" as "center",
    //padding: "0 2rem",
    zIndex: "100",
  };
  const titleStyle = {
    alignSelf: "center" as "center",
//    position: "absolute" as "absolute",
//    bottom: "0",
    color: headProps.textColor.value,
//    padding: "0 auto 3rem 0",
//    margin: "0 auto 3rem",
    margin: "0",
//    fontSize: "5rem",
    fontSize: "5.75rem",
//    lineHeight: "8rem",
    lineHeight: "5.75rem",
//    lineHeight: "5rem",
    fontWeight: "700",
    fontStyle: "bold",
    maxWidth: "10ch",
    filter: "drop-shadow(0 0 .25rem lightslategray)",
  };
  const subHeadlineStyle = {
  //  alignSelf: "bottom",
//    position: "absolute" as "absolute",
//    bottom: "0",
    color: headProps.textColor.value,
//    margin: "0rem auto 0",
//    margin: "2rem 0 2rem 0",
    margin: "2rem 1rem 15vh 1rem",
//    padding: "2rem 0 2rem 0",
//    fontSize: "1.25rem",
//    fontSize: "2rem",
    fontSize: "1.5rem",
    lineHeight: "3rem",
    fontWeight: "400",
//    width: "ch",
    textTransform: "uppercase" as "uppercase",
    letterSpacing: "0.2rem",
    filter: "drop-shadow(0 0 .25rem lightslategray)",
    //margin: "0 2rem",
  };

  const arrowStyle = {
    alignSelf: "center",
    position: "absolute" as "absolute",
    bottom: "1rem",
    width: "2rem",
    fill: "white",
  };

  const navBarStyle = {
    position: "fixed" as "fixed",
    top: 0,
    width: "100%",
    zIndex: "1000",
    background: "rgba(255,255,255, var(--opacity))",
    willChange: "background",
    //background: "rgba(255,255,255,0.7)",
  };

  const navLineStyle = {
    display: "flex" as "flex",
    width: "100%",
    maxHeight: "8rem",
  };

  const navTextStyle = {
    display: "flex",
    position: "absolute" as "absolute",
    right: "0",
    bottom: "0",
    flexDirection: "row" as "row",
    //display: "inline",
    //flexDirection: "row-reverse" as "row-reverse",
    fontSize: "2.25rem",
    //lineHeight: "6rem",
    textAlign: "right" as "right",
    paddingRight: "2rem",
    paddingBottom: "1rem",
    color: "#595959",
  };

  const navLinkStyle = {
    padding: "0 1.5rem 0 1.5rem",
  };

  var videoFile = null;
  switch(videoNumber) {
//  switch(headProps.videoNumber) {
    case 1:       
      videoFile = "../img/700_ST.mp4";   
    break;
    case 2:       
      videoFile = "../img/test_redux.mp4";   
    break;
    case 3:       
      videoFile = "../img/test_redux2.mp4";   
    break;
    case 4:       
      videoFile = "../img/pexels-carsten-link-14057038 (1080p).mp4";   
    break;
    case 5:       
      videoFile = "../img/forest_redux.mp4";   
    break;
    case 6:       
      videoFile = "../img/vid_1.mp4";   
    break;
    case 7:       
      videoFile = "../img/vid_2.mp4";   
    break;
    default:
      console.log('default case: ' + videoNumber);
      videoFile = "../img/vid_2_flipped_xfade.mp4";
  };

  console.log('videoFile: ' + videoFile);
  console.log('videoNumber: ' + videoNumber);
	return (
    <div id='toprow'>
      <div id='navbar' style={navBarStyle}>
        <div style={navLineStyle}>
          <a href='#toprow'><img style={imgStyle} src="../img/mint_logo_postitiv_RGB.svg" /></a>
          <div style={navTextStyle}>
            <a href="#vision" style={navLinkStyle}>Vision</a>
            <a href="#omoss" style={navLinkStyle}>Om Oss</a>
            <a href="#roller" style={navLinkStyle}>Roller</a>
            <a href="https://mint-1712829496.teamtailor.com/" target="_blank" style={navLinkStyle}>Mint & Friends</a>
            <a href="#kompis" style={navLinkStyle}>Kontakt</a>
          </div>
        </div>
      </div>
      <div style={rowStyle}>
        <video id="background-video" style={videoStyle} autoPlay loop muted playsInline >
          <source src={videoFile} type="video/mp4" />
        </video>
        {/* <img style={imgStyle} src="../img/mint_logo_v1_light.png" /> */}
        
        <div style={txtCellStyle}>
          <h1 className='header-title' style={titleStyle}>{headProps.headline}</h1>
          <div style={subHeadlineStyle}>{documentToReactComponents(headProps.subHeadline, options)}</div>
          <a href="#whoweare"><img src='../img/down-arrow-svgrepo-com_white.svg' style={arrowStyle}></img></a>
        </div>
      </div>
    </div>
	);
}