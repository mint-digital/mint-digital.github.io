import{j as e}from"./jsx-runtime.391947bd.js";import{r as d}from"./rich-text-react-renderer.es5.9873d6d2.js";import"./index.232e83b8.4f71b68f.js";import"./index.ed373d49.js";function u({headProps:t}){const r={display:"flex",flexDirection:"column",backgroundColor:t.backgroundColor.value,backgroundImage:"url("+t.backgroundImage.fields.file.url+")",backgroundSize:"cover",backgroundPosition:"center top",padding:"0 0 0rem 0",margin:0,height:"32rem",width:"100%",maxWidth:"1400px",overflow:"hidden"},o={width:"100%",filter:"brightness(50%)"},i={position:"absolute",top:"0rem",width:"6rem",alignSelf:"start",padding:"2rem 2rem 0 2rem"},n={position:"absolute",top:"8rem",left:"50%",transform:"translate(-50%, 0%)",textAlign:"center",alignItems:"center",justifyContent:"center",padding:"0",zIndex:"100"},l={color:t.textColor.value,padding:"0 auto 3rem 0",margin:"0 auto 3rem",fontSize:"5rem",lineHeight:"5rem",fontWeight:"700",fontStyle:"bold",maxWidth:"10ch"},s={color:t.textColor.value,padding:"0",margin:"0rem auto 0",fontSize:"1.25rem",fontWeight:"400",width:"ch",textTransform:"uppercase",letterSpacing:"0.2rem"};return e.jsxs("div",{style:r,children:[e.jsx("video",{id:"background-video",style:o,autoPlay:!0,loop:!0,muted:!0,children:e.jsx("source",{src:"img/forest.mp4",type:"video/mp4"})}),e.jsx("img",{style:i,src:"img/mint_logo_v1_light.png"}),e.jsxs("div",{style:n,children:[e.jsx("h1",{style:l,children:t.headline}),e.jsx("div",{children:e.jsx("span",{style:s,children:d.documentToReactComponents(t.subHeadline)})})]})]})}export{u as default};