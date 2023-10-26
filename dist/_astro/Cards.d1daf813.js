import{j as r}from"./jsx-runtime.391947bd.js";import{c as _,r as T}from"./rich-text-react-renderer.es5.9873d6d2.js";import"./index.232e83b8.4f71b68f.js";import"./index.ed373d49.js";var f={},D={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.BLOCKS=void 0,function(t){t.DOCUMENT="document",t.PARAGRAPH="paragraph",t.HEADING_1="heading-1",t.HEADING_2="heading-2",t.HEADING_3="heading-3",t.HEADING_4="heading-4",t.HEADING_5="heading-5",t.HEADING_6="heading-6",t.OL_LIST="ordered-list",t.UL_LIST="unordered-list",t.LIST_ITEM="list-item",t.HR="hr",t.QUOTE="blockquote",t.EMBEDDED_ENTRY="embedded-entry-block",t.EMBEDDED_ASSET="embedded-asset-block",t.EMBEDDED_RESOURCE="embedded-resource-block",t.TABLE="table",t.TABLE_ROW="table-row",t.TABLE_CELL="table-cell",t.TABLE_HEADER_CELL="table-header-cell"}(n.BLOCKS||(n.BLOCKS={}))})(D);var m={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.INLINES=void 0,function(t){t.HYPERLINK="hyperlink",t.ENTRY_HYPERLINK="entry-hyperlink",t.ASSET_HYPERLINK="asset-hyperlink",t.RESOURCE_HYPERLINK="resource-hyperlink",t.EMBEDDED_ENTRY="embedded-entry-inline",t.EMBEDDED_RESOURCE="embedded-resource-inline"}(n.INLINES||(n.INLINES={}))})(m);var p={};Object.defineProperty(p,"__esModule",{value:!0});var N;(function(n){n.BOLD="bold",n.ITALIC="italic",n.UNDERLINE="underline",n.CODE="code",n.SUPERSCRIPT="superscript",n.SUBSCRIPT="subscript"})(N||(N={}));p.default=N;var R={};(function(n){var t=_&&_.__spreadArray||function(u,O,B){if(B||arguments.length===2)for(var L=0,l=O.length,a;L<l;L++)(a||!(L in O))&&(a||(a=Array.prototype.slice.call(O,0,L)),a[L]=O[L]);return u.concat(a||Array.prototype.slice.call(O))},S=_&&_.__importDefault||function(u){return u&&u.__esModule?u:{default:u}},i;Object.defineProperty(n,"__esModule",{value:!0}),n.V1_MARKS=n.V1_NODE_TYPES=n.TEXT_CONTAINERS=n.HEADINGS=n.CONTAINERS=n.VOID_BLOCKS=n.TABLE_BLOCKS=n.LIST_ITEM_BLOCKS=n.TOP_LEVEL_BLOCKS=void 0;var e=D,s=m,c=S(p);n.TOP_LEVEL_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE,e.BLOCKS.TABLE],n.LIST_ITEM_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE],n.TABLE_BLOCKS=[e.BLOCKS.TABLE,e.BLOCKS.TABLE_ROW,e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],n.VOID_BLOCKS=[e.BLOCKS.HR,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE],n.CONTAINERS=(i={},i[e.BLOCKS.OL_LIST]=[e.BLOCKS.LIST_ITEM],i[e.BLOCKS.UL_LIST]=[e.BLOCKS.LIST_ITEM],i[e.BLOCKS.LIST_ITEM]=n.LIST_ITEM_BLOCKS,i[e.BLOCKS.QUOTE]=[e.BLOCKS.PARAGRAPH],i[e.BLOCKS.TABLE]=[e.BLOCKS.TABLE_ROW],i[e.BLOCKS.TABLE_ROW]=[e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],i[e.BLOCKS.TABLE_CELL]=[e.BLOCKS.PARAGRAPH],i[e.BLOCKS.TABLE_HEADER_CELL]=[e.BLOCKS.PARAGRAPH],i),n.HEADINGS=[e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6],n.TEXT_CONTAINERS=t([e.BLOCKS.PARAGRAPH],n.HEADINGS,!0),n.V1_NODE_TYPES=[e.BLOCKS.DOCUMENT,e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.LIST_ITEM,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,s.INLINES.HYPERLINK,s.INLINES.ENTRY_HYPERLINK,s.INLINES.ASSET_HYPERLINK,s.INLINES.EMBEDDED_ENTRY,"text"],n.V1_MARKS=[c.default.BOLD,c.default.CODE,c.default.ITALIC,c.default.UNDERLINE]})(R);var b={};Object.defineProperty(b,"__esModule",{value:!0});var v={};Object.defineProperty(v,"__esModule",{value:!0});var h={};Object.defineProperty(h,"__esModule",{value:!0});var K=D,P={nodeType:K.BLOCKS.DOCUMENT,data:{},content:[{nodeType:K.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};h.default=P;var C={};Object.defineProperty(C,"__esModule",{value:!0});C.isText=C.isBlock=C.isInline=void 0;var M=D,G=m;function H(n,t){for(var S=0,i=Object.keys(n);S<i.length;S++){var e=i[S];if(t===n[e])return!0}return!1}function k(n){return H(G.INLINES,n.nodeType)}C.isInline=k;function U(n){return H(M.BLOCKS,n.nodeType)}C.isBlock=U;function x(n){return n.nodeType==="text"}C.isText=x;(function(n){var t=_&&_.__createBinding||(Object.create?function(l,a,d,E){E===void 0&&(E=d);var o=Object.getOwnPropertyDescriptor(a,d);(!o||("get"in o?!a.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return a[d]}}),Object.defineProperty(l,E,o)}:function(l,a,d,E){E===void 0&&(E=d),l[E]=a[d]}),S=_&&_.__setModuleDefault||(Object.create?function(l,a){Object.defineProperty(l,"default",{enumerable:!0,value:a})}:function(l,a){l.default=a}),i=_&&_.__exportStar||function(l,a){for(var d in l)d!=="default"&&!Object.prototype.hasOwnProperty.call(a,d)&&t(a,l,d)},e=_&&_.__importStar||function(l){if(l&&l.__esModule)return l;var a={};if(l!=null)for(var d in l)d!=="default"&&Object.prototype.hasOwnProperty.call(l,d)&&t(a,l,d);return S(a,l),a},s=_&&_.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(n,"__esModule",{value:!0}),n.helpers=n.EMPTY_DOCUMENT=n.MARKS=n.INLINES=n.BLOCKS=void 0;var c=D;Object.defineProperty(n,"BLOCKS",{enumerable:!0,get:function(){return c.BLOCKS}});var u=m;Object.defineProperty(n,"INLINES",{enumerable:!0,get:function(){return u.INLINES}});var O=p;Object.defineProperty(n,"MARKS",{enumerable:!0,get:function(){return s(O).default}}),i(R,n),i(b,n),i(v,n);var B=h;Object.defineProperty(n,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return s(B).default}});var L=e(C);n.helpers=L})(f);function Y({title:n,text:t,image_url:S,backgroundColor:i,textColor:e,alignImageRight:s,ctaText:c,ctaUrl:u}){const O={renderNode:{[f.BLOCKS.PARAGRAPH]:(I,A)=>r.jsx("p",{style:{marginTop:"1.75rem"},children:A}),[f.BLOCKS.UL_LIST]:(I,A)=>r.jsx("ul",{style:{listStyle:"disc"},children:A.map(g=>r.jsx("li",{children:g.props.children[0].props.children[0]},g.key))}),[f.INLINES.HYPERLINK]:(I,A)=>r.jsx("a",{href:I.data.uri,target:"_blank",rel:"noopener noreferrer",children:A})}},B={backgroundColor:i.value,padding:0,margin:0},L={display:"flex",justifyContent:"space-between"},l={display:"inline-block",position:"relative",padding:"5rem 7rem 5rem 7rem"},a={color:e.value,padding:"0 0rem 0",margin:"0rem 0",fontSize:"4rem",lineHeight:"4rem",fontWeight:"700",fontStyle:"bold",textAlign:"left"},d={display:"block",color:e.value,padding:"0 0rem 2rem 0",fontSize:"1.75rem",fontWeight:"400",maxWidth:"34ch",textWrap:"balance"},E={display:"inline",width:"40%",maxWidth:"40%"},o={display:"inline",width:"100%",height:"100%",objectFit:"cover",transformOrigin:"top center"},y={display:"block",color:"#efe9e0",backgroundColor:"#ab6c5b",borderRadius:"16px",fontSize:"1.5rem",fontWeight:"400",textDecoration:"none",textAlign:"center",textTransform:"uppercase",letterSpacing:"0.2rem",margin:"0rem 0 0 0",padding:"2rem 2rem 2rem 2rem"},j={position:"absolute",right:"2rem",width:"10ch",padding:"2.5rem 1.25rem",bottom:"-6rem",rotate:"15deg",color:"#efe9e0",backgroundColor:"#ab6c5b",borderRadius:"50%",fontSize:"1.5rem",fontWeight:"400",textDecoration:"none",textAlign:"center",textTransform:"uppercase",letterSpacing:"0.2rem"};return s?r.jsx("section",{style:B,children:r.jsxs("div",{style:L,children:[r.jsxs("span",{style:l,children:[r.jsx("h1",{style:a,children:n}),r.jsx("div",{children:r.jsx("span",{style:d,children:T.documentToReactComponents(t,O)})}),c&&r.jsx("a",{style:y,href:u,children:c})]}),r.jsx("span",{style:E,children:r.jsx("img",{style:o,src:S})})]})}):r.jsx("section",{style:B,children:r.jsxs("div",{style:L,children:[r.jsx("span",{style:E,children:r.jsx("img",{style:o,src:S})}),r.jsxs("span",{style:l,children:[r.jsx("a",{style:j,href:u,children:c}),r.jsx("h1",{style:a,children:n}),r.jsx("div",{children:r.jsx("span",{style:d,children:T.documentToReactComponents(t,O)})})]})]})})}function W({title:n,text:t,backgroundColor:S,textColor:i,isQuote:e}){const s={renderNode:{[f.BLOCKS.HEADING_2]:(E,o)=>r.jsx("p",{style:{display:"inline",color:i.value,textAlign:"left",fontSize:"3rem",fontStyle:"bold",fontWeight:"700",lineHeight:"4rem",margin:"0",padding:"0rem 1rem 0 0rem",marginTop:"0rem"},children:o}),[f.BLOCKS.PARAGRAPH]:(E,o)=>r.jsx("p",{style:{fontSize:"2rem",display:"block",marginTop:"0rem"},children:o}),[f.BLOCKS.UL_LIST]:(E,o)=>r.jsx("ul",{style:{listStyle:"disc"},children:o.map(y=>r.jsx("li",{children:y.props.children[0].props.children[0]},y.key))}),[f.INLINES.HYPERLINK]:(E,o)=>r.jsx("a",{href:E.data.uri,target:"_blank",rel:"noopener noreferrer",children:o})}},c={renderNode:{[f.BLOCKS.PARAGRAPH]:(E,o)=>r.jsx("p",{style:{marginTop:"2rem"},children:o}),[f.BLOCKS.UL_LIST]:(E,o)=>r.jsx("ul",{style:{listStyle:"disc"},children:o.map(y=>r.jsx("li",{children:y.props.children[0].props.children[0]},y.key))}),[f.INLINES.HYPERLINK]:(E,o)=>r.jsx("a",{href:E.data.uri,target:"_blank",rel:"noopener noreferrer",children:o})}},u={display:"flex",flexDirection:"column",backgroundColor:S.value,padding:"3rem 6rem",margin:0},O={alignSelf:"center",padding:"0rem 0rem"},B={padding:"2rem 1rem"},L={display:"block",color:i.value,textAlign:"left",fontSize:"3rem",fontStyle:"bold",fontWeight:"700",margin:"0",padding:"0"},l={display:"inline-block",color:i.value,textAlign:"left",fontSize:"4rem",fontStyle:"bold",fontWeight:"700",lineHeight:"4rem",margin:"0",padding:"0rem"},a={display:"inline-block",color:i.value,textAlign:"left",fontSize:"2rem",fontWeight:"400",margin:"0",padding:"0 0rem 0rem 0rem"},d={color:i.value,textAlign:"left",fontSize:"1.75rem",fontWeight:"400",margin:"0",padding:"0 0rem 0rem 0rem"};return r.jsx("section",{className:"Quote",style:u,children:r.jsxs("div",{style:e?O:B,children:[r.jsx("h1",{style:e?L:l,children:n}),t&&e&&r.jsx("span",{style:a,children:T.documentToReactComponents(t,s)}),t&&!e&&r.jsx("div",{style:d,children:T.documentToReactComponents(t,c)})]})})}function Q({cards:n}){let t=n.items.map((i,e)=>{const s={image_url:i.fields.titleImage!=null?"https:"+i.fields.titleImage.fields.file.url:null,...i.fields};let c;return s.image_url?c=r.jsx(Y,{...s}):c=r.jsx(W,{...s}),r.jsx("div",{children:c},e)});const S={listStyleType:"none",padding:"0",margin:"0",maxWidth:"1400px"};return r.jsx("div",{style:S,children:t})}export{Q as default};
