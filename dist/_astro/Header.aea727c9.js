import{j as t}from"./jsx-runtime.391947bd.js";import{r as d}from"./rich-text-react-renderer.es5.9873d6d2.js";import"./index.baadbeac.1e35d324.js";import"./index.ed373d49.js";function f({videoNumber:i,bright:r,headProps:o}){console.log(i),console.log(r);const n={display:"flex",flexDirection:"column",backgroundColor:o.backgroundColor.value,backgroundImage:"url("+o.backgroundImage.fields.file.url+")",backgroundSize:"cover",backgroundPosition:"center bottom",padding:"0 0 0rem 0",margin:0,height:"32rem",width:"100%",maxWidth:"1400px",overflow:"hidden"},l={filter:"brightness("+r+"%)",objectFit:"cover",objectPosition:"center center",height:"32rem",minWidth:"100%"},s={position:"absolute",top:"0rem",width:"6rem",alignSelf:"start",padding:"2rem 2rem 0 2rem"},a={position:"absolute",top:"8rem",left:"50%",transform:"translate(-50%, 0%)",textAlign:"center",alignItems:"center",justifyContent:"center",padding:"0",zIndex:"100"},c={color:o.textColor.value,padding:"0 auto 3rem 0",margin:"0 auto 3rem",fontSize:"5rem",lineHeight:"5rem",fontWeight:"700",fontStyle:"bold",maxWidth:"10ch"},m={color:o.textColor.value,padding:"0",margin:"0rem auto 0",fontSize:"1.25rem",fontWeight:"400",width:"ch",textTransform:"uppercase",letterSpacing:"0.2rem"};var e=null;switch(i){case"1":e="../img/700_ST.mp4";break;case"2":e="../img/test_redux.mp4";break;case"3":console.log("case3: "+i),e="../img/test_redux2.mp4";break;case"4":e="../img/pexels-carsten-link-14057038 (1080p).mp4";break;case"5":e="../img/forest_redux.mp4";break;case"6":e="../img/vid_1.mp4";break;case"7":e="../img/vid_2.mp4";break;default:console.log("default case: "+i),e="../img/forest_redux.mp4"}return console.log("videoFile: "+e),t.jsxs("div",{style:n,children:[t.jsx("video",{id:"background-video",style:l,autoPlay:!0,loop:!0,muted:!0,children:t.jsx("source",{src:e,type:"video/mp4"})}),t.jsx("img",{style:s,src:"../img/mint_logo_v1_light.png"}),t.jsxs("div",{style:a,children:[t.jsx("h1",{style:c,children:o.headline}),t.jsx("div",{children:t.jsx("span",{style:m,children:d.documentToReactComponents(o.subHeadline)})})]})]})}export{f as default};