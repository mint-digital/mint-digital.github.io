import{j as t}from"./jsx-runtime.391947bd.js";import{r as a}from"./rich-text-react-renderer.es5.8ef18110.js";import"./index.232e83b8.8f38b8de.js";import"./index.ed373d49.js";function g({headProps:e}){const i={display:"flex",flexDirection:"column",backgroundColor:e.backgroundColor.value,backgroundImage:"url("+e.backgroundImage.fields.file.url+")",backgroundSize:"100% auto",padding:"0 0 3rem 0",margin:0,height:"32rem",width:"100%",maxWidth:"1400px"},n={width:"6rem",alignSelf:"start",padding:"2rem 2rem 0 2rem"},r={width:"100%",textAlign:"center",alignItems:"center",justifyContent:"center",padding:"0"},l={color:e.textColor.value,padding:"0 auto 3rem 0",margin:"0 auto 3rem",fontSize:"5rem",lineHeight:"5rem",fontWeight:"700",fontStyle:"bold",maxWidth:"10ch"},o={color:e.textColor.value,padding:"0",margin:"0rem auto 0",fontSize:"1.25rem",fontWeight:"400",width:"ch",textTransform:"uppercase",letterSpacing:"0.2rem"};return t.jsxs("div",{style:i,children:[t.jsx("img",{style:n,src:"img/mint_logo_v1_light.png"}),t.jsxs("span",{style:r,children:[t.jsx("h1",{style:l,children:e.headline}),t.jsx("div",{children:t.jsx("p",{style:o,children:a.documentToReactComponents(e.subHeadline)})})]})]})}export{g as default};