import{j as e}from"./jsx-runtime.391947bd.js";import"./index.232e83b8.4479f448.js";import"./index.ed373d49.js";function p({team:r}){const n={display:"flex",flexDirection:"column",backgroundColor:r.backgroundColor,padding:"6rem 0",width:"100%"},o={display:"flex",flexDirection:"row",fleWrap:"wrap",flexFlow:"row wrap",maxWidth:"100svw",margin:"0rem 6rem",justifyContent:"center",gap:"4rem"},s={margin:"2rem 2rem 1rem 2rem",width:"12rem"},m={display:"block",color:r.textColor,textAlign:"center",fontSize:"4.5rem",fontStyle:"bold",fontWeight:"900",lineHeight:"4rem",margin:"0 0 2rem 0"},c={color:r.textColor,textAlign:"center"},i={fontSize:"1.25rem",fontWeight:"700",lineHeight:"2rem",textTransform:"uppercase",letterSpacing:"0.2rem",color:r.textColor};r.textColor;const a={display:"flex",flexDirection:"row",justifyContent:"center",margin:"1rem",gap:"1rem"},l={width:"3rem"};return e.jsxs("section",{className:"TeamContainer",style:n,children:[e.jsx("h2",{style:m,children:"Vi är mint"}),e.jsx("div",{style:o,children:r.members.items.map(function(t,d){return e.jsxs("div",{style:c,children:[e.jsx("a",{href:t.fields.linkedInUrl,target:"_blank",children:e.jsx("img",{src:t.fields.profileImage.fields.file.url,style:s})}),e.jsx("div",{style:i,children:t.fields.name}),e.jsx("div",{style:i,children:t.fields.surname}),e.jsxs("div",{style:a,children:[e.jsx("a",{href:t.fields.email,target:"_blank",children:e.jsx("img",{src:"../img/email-svgrepo-com_color.svg",style:l})}),e.jsx("a",{href:t.fields.linkedInUrl,target:"_blank",children:e.jsx("img",{src:"../img/iconmonstr-linkedin-3_color.svg",style:l})})]})]},d)})})]})}export{p as default};
