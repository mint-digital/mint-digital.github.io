import{j as e}from"./jsx-runtime.3a2d0367.js";import{d as y,r as u}from"./index.4c9402fe.js";import"./index.232e83b8.4b3d56f8.js";import"./index.b2a7ed32.js";function _({videoNumber:r,bright:l,headProps:i}){console.log(r),console.log(l);const s={renderNode:{[y.BLOCKS.PARAGRAPH]:(b,v)=>e.jsx("p",{style:{},children:v})}},n={backgroundColor:i.backgroundColor.value,backgroundImage:"url(../img/drone_flight_reverse_xfade.png)",backgroundSize:"cover",backgroundPosition:"center bottom",margin:0,width:"100%",height:"100svh",overflow:"hidden"},a={position:"absolute",top:"0",zIndex:"1",width:"100%",filter:"brightness("+l+"%)",objectFit:"cover",objectPosition:"center center",height:"100svh",overflow:"hidden"},d={display:"inline",left:"0",width:"var(--navSize)",padding:"1rem",zIndex:"100",filter:"drop-shadow(0 0 .25rem lightslategray)"},c={display:"flex",flexDirection:"column",position:"absolute",width:"100%",height:"100svh",bottom:"0",alignItems:"bottom",textAlign:"center",justifyContent:"flex-end",zIndex:"100"},m={alignSelf:"center",color:i.textColor.value,margin:"0",fontSize:"5.75rem",lineHeight:"5.75rem",fontWeight:"700",fontStyle:"bold",maxWidth:"10ch",filter:"drop-shadow(0 0 .25rem lightslategray)"},g={color:i.textColor.value,margin:"2rem 1rem 15vh 1rem",fontSize:"1.5rem",lineHeight:"3rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"0.2rem",filter:"drop-shadow(0 0 .25rem lightslategray)"},h={alignSelf:"center",position:"absolute",bottom:"1rem",width:"2rem",fill:"white"},p={position:"fixed",top:0,width:"100%",zIndex:"1000",background:"rgba(255,255,255, var(--opacity))",willChange:"background"},x={display:"flex",width:"100%",maxHeight:"8rem"},f={display:"flex",position:"absolute",right:"0",bottom:"0",flexDirection:"row",fontSize:"2.25rem",textAlign:"right",paddingRight:"2rem",paddingBottom:"1rem",color:"#595959"},o={padding:"0 1.5rem 0 1.5rem"};var t=null;switch(r){case 1:t="../img/700_ST.mp4";break;case 2:t="../img/test_redux.mp4";break;case 3:t="../img/test_redux2.mp4";break;case 4:t="../img/pexels-carsten-link-14057038 (1080p).mp4";break;case 5:t="../img/forest_redux.mp4";break;case 6:t="../img/vid_1.mp4";break;case 7:t="../img/vid_2.mp4";break;default:console.log("default case: "+r),t="../img/vid_2_flipped_xfade.mp4"}return console.log("videoFile: "+t),console.log("videoNumber: "+r),e.jsxs("div",{id:"toprow",children:[e.jsx("div",{id:"navbar",style:p,children:e.jsxs("div",{style:x,children:[e.jsx("a",{href:"#toprow",children:e.jsx("img",{style:d,src:"../img/mint_logo_postitiv_RGB.svg"})}),e.jsxs("div",{style:f,children:[e.jsx("a",{href:"#vision",style:o,children:"Vision"}),e.jsx("a",{href:"#omoss",style:o,children:"Om Oss"}),e.jsx("a",{href:"#roller",style:o,children:"Roller"}),e.jsx("a",{href:"https://mint-1712829496.teamtailor.com/",target:"_blank",style:o,children:"Mint & Friends"}),e.jsx("a",{href:"#kompis",style:o,children:"Kontakt"})]})]})}),e.jsxs("div",{style:n,children:[e.jsx("video",{id:"background-video",style:a,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:e.jsx("source",{src:t,type:"video/mp4"})}),e.jsxs("div",{style:c,children:[e.jsx("h1",{className:"header-title",style:m,children:i.headline}),e.jsx("div",{style:g,children:u.documentToReactComponents(i.subHeadline,s)}),e.jsx("a",{href:"#whoweare",children:e.jsx("img",{src:"../img/down-arrow-svgrepo-com_white.svg",style:h})})]})]})]})}export{_ as default};
