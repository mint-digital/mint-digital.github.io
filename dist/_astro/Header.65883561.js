import{j as e}from"./jsx-runtime.391947bd.js";import{r as d}from"./rich-text-react-renderer.es5.9873d6d2.js";import"./1_100.c7cb1c88.b78e6eb3.js";import"./index.ed373d49.js";function h({videoNumber:o,bright:r,headProps:i}){console.log(o),console.log(r);const n={display:"flex",flexDirection:"column",backgroundColor:i.backgroundColor.value,backgroundImage:"url("+i.backgroundImage.fields.file.url+")",backgroundSize:"cover",backgroundPosition:"center bottom",padding:"0 0 0rem 0",margin:0,height:"32rem",width:"100%",maxWidth:"1400px",overflow:"hidden"},l={filter:"brightness("+r+"%)",objectFit:"cover",height:"100%",width:"177.77777778vh",minWidth:"100%"},s={position:"absolute",top:"0rem",width:"6rem",alignSelf:"start",padding:"2rem 2rem 0 2rem"},a={position:"absolute",top:"8rem",left:"50%",transform:"translate(-50%, 0%)",textAlign:"center",alignItems:"center",justifyContent:"center",padding:"0",zIndex:"100"},m={color:i.textColor.value,padding:"0 auto 3rem 0",margin:"0 auto 3rem",fontSize:"5rem",lineHeight:"5rem",fontWeight:"700",fontStyle:"bold",maxWidth:"10ch"},c={color:i.textColor.value,padding:"0",margin:"0rem auto 0",fontSize:"1.25rem",fontWeight:"400",width:"ch",textTransform:"uppercase",letterSpacing:"0.2rem"};var t=null;switch(o){case 1:t="../img/700_ST.mp4";break;case 2:t="../img/test_redux.mp4";break;case 3:t="../img/test_redux2.mp4";break;case 4:t="../img/pexels-carsten-link-14057038 (1080p).mp4";break;case 5:t="../img/forest.mp4";break;default:t="../img/forest.mp4"}return e.jsxs("div",{style:n,children:[e.jsx("video",{id:"background-video",style:l,autoPlay:!0,loop:!0,muted:!0,children:e.jsx("source",{src:t,type:"video/mp4"})}),e.jsx("img",{style:s,src:"../img/mint_logo_v1_light.png"}),e.jsxs("div",{style:a,children:[e.jsx("h1",{style:m,children:i.headline}),e.jsx("div",{children:e.jsx("span",{style:c,children:d.documentToReactComponents(i.subHeadline)})})]})]})}export{h as default};
