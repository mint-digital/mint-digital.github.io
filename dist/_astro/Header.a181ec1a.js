import{j as e}from"./jsx-runtime.391947bd.js";import{r as m}from"./rich-text-react-renderer.es5.9873d6d2.js";import"./index.232e83b8.1e35d324.js";import"./index.ed373d49.js";function h({videoNumber:d,headProps:t}){const r={display:"flex",flexDirection:"column",backgroundColor:t.backgroundColor.value,backgroundImage:"url("+t.backgroundImage.fields.file.url+")",backgroundSize:"cover",backgroundPosition:"center top",padding:"0 0 0rem 0",margin:0,height:"32rem",width:"100%",maxWidth:"1400px",overflow:"hidden"},o={filter:"brightness(60%)",objectFit:"cover",height:"100%",width:"177.77777778vh",minWidth:"100%",minHeight:"56.25vw"},n={position:"absolute",top:"0rem",width:"6rem",alignSelf:"start",padding:"2rem 2rem 0 2rem"},l={position:"absolute",top:"8rem",left:"50%",transform:"translate(-50%, 0%)",textAlign:"center",alignItems:"center",justifyContent:"center",padding:"0",zIndex:"100"},s={color:t.textColor.value,padding:"0 auto 3rem 0",margin:"0 auto 3rem",fontSize:"5rem",lineHeight:"5rem",fontWeight:"700",fontStyle:"bold",maxWidth:"10ch"},a={color:t.textColor.value,padding:"0",margin:"0rem auto 0",fontSize:"1.25rem",fontWeight:"400",width:"ch",textTransform:"uppercase",letterSpacing:"0.2rem"};var i=null;switch(t.videoNumber){case 1:i="img/pexels-carsten-link-14057038 (1080p).mp4";break;case 2:i="img/pexels-carsten-link-14057038 (1080p).mp4";break;default:i="img/forest.mp4"}return e.jsxs("div",{style:r,children:[e.jsx("video",{id:"background-video",style:o,autoPlay:!0,loop:!0,muted:!0,children:e.jsx("source",{src:i,type:"video/mp4"})}),e.jsx("img",{style:n,src:"img/mint_logo_v1_light.png"}),e.jsxs("div",{style:l,children:[e.jsx("h1",{style:s,children:t.headline}),e.jsx("div",{children:e.jsx("span",{style:a,children:m.documentToReactComponents(t.subHeadline)})})]})]})}export{h as default};
