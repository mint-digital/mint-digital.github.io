import{j as l}from"./jsx-runtime.391947bd.js";import{c as L,r as I}from"./rich-text-react-renderer.es5.9873d6d2.js";import"./index.232e83b8.6f00d8a2.js";import"./index.ed373d49.js";var f={},D={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(n){n.DOCUMENT="document",n.PARAGRAPH="paragraph",n.HEADING_1="heading-1",n.HEADING_2="heading-2",n.HEADING_3="heading-3",n.HEADING_4="heading-4",n.HEADING_5="heading-5",n.HEADING_6="heading-6",n.OL_LIST="ordered-list",n.UL_LIST="unordered-list",n.LIST_ITEM="list-item",n.HR="hr",n.QUOTE="blockquote",n.EMBEDDED_ENTRY="embedded-entry-block",n.EMBEDDED_ASSET="embedded-asset-block",n.EMBEDDED_RESOURCE="embedded-resource-block",n.TABLE="table",n.TABLE_ROW="table-row",n.TABLE_CELL="table-cell",n.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))})(D);var A={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(n){n.HYPERLINK="hyperlink",n.ENTRY_HYPERLINK="entry-hyperlink",n.ASSET_HYPERLINK="asset-hyperlink",n.RESOURCE_HYPERLINK="resource-hyperlink",n.EMBEDDED_ENTRY="embedded-entry-inline",n.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))})(A);var T={};Object.defineProperty(T,"__esModule",{value:!0});var y;(function(t){t.BOLD="bold",t.ITALIC="italic",t.UNDERLINE="underline",t.CODE="code",t.SUPERSCRIPT="superscript",t.SUBSCRIPT="subscript"})(y||(y={}));T.default=y;var h={};(function(t){var n=L&&L.__spreadArray||function(o,S,B){if(B||arguments.length===2)for(var u=0,r=S.length,i;u<r;u++)(i||!(u in S))&&(i||(i=Array.prototype.slice.call(S,0,u)),i[u]=S[u]);return o.concat(i||Array.prototype.slice.call(S))},d=L&&L.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},a;Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var e=D,_=A,c=d(T);t.TOP_LEVEL_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE,e.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[e.BLOCKS.TABLE,e.BLOCKS.TABLE_ROW,e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[e.BLOCKS.HR,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,e.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=(a={},a[e.BLOCKS.OL_LIST]=[e.BLOCKS.LIST_ITEM],a[e.BLOCKS.UL_LIST]=[e.BLOCKS.LIST_ITEM],a[e.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,a[e.BLOCKS.QUOTE]=[e.BLOCKS.PARAGRAPH],a[e.BLOCKS.TABLE]=[e.BLOCKS.TABLE_ROW],a[e.BLOCKS.TABLE_ROW]=[e.BLOCKS.TABLE_CELL,e.BLOCKS.TABLE_HEADER_CELL],a[e.BLOCKS.TABLE_CELL]=[e.BLOCKS.PARAGRAPH],a[e.BLOCKS.TABLE_HEADER_CELL]=[e.BLOCKS.PARAGRAPH],a),t.HEADINGS=[e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=n([e.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[e.BLOCKS.DOCUMENT,e.BLOCKS.PARAGRAPH,e.BLOCKS.HEADING_1,e.BLOCKS.HEADING_2,e.BLOCKS.HEADING_3,e.BLOCKS.HEADING_4,e.BLOCKS.HEADING_5,e.BLOCKS.HEADING_6,e.BLOCKS.OL_LIST,e.BLOCKS.UL_LIST,e.BLOCKS.LIST_ITEM,e.BLOCKS.HR,e.BLOCKS.QUOTE,e.BLOCKS.EMBEDDED_ENTRY,e.BLOCKS.EMBEDDED_ASSET,_.INLINES.HYPERLINK,_.INLINES.ENTRY_HYPERLINK,_.INLINES.ASSET_HYPERLINK,_.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[c.default.BOLD,c.default.CODE,c.default.ITALIC,c.default.UNDERLINE]})(h);var m={};Object.defineProperty(m,"__esModule",{value:!0});var p={};Object.defineProperty(p,"__esModule",{value:!0});var N={};Object.defineProperty(N,"__esModule",{value:!0});var R=D,H={nodeType:R.BLOCKS.DOCUMENT,data:{},content:[{nodeType:R.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};N.default=H;var C={};Object.defineProperty(C,"__esModule",{value:!0});C.isText=C.isBlock=C.isInline=void 0;var g=D,b=A;function v(t,n){for(var d=0,a=Object.keys(t);d<a.length;d++){var e=a[d];if(n===t[e])return!0}return!1}function P(t){return v(b.INLINES,t.nodeType)}C.isInline=P;function j(t){return v(g.BLOCKS,t.nodeType)}C.isBlock=j;function M(t){return t.nodeType==="text"}C.isText=M;(function(t){var n=L&&L.__createBinding||(Object.create?function(r,i,E,O){O===void 0&&(O=E);var s=Object.getOwnPropertyDescriptor(i,E);(!s||("get"in s?!i.__esModule:s.writable||s.configurable))&&(s={enumerable:!0,get:function(){return i[E]}}),Object.defineProperty(r,O,s)}:function(r,i,E,O){O===void 0&&(O=E),r[O]=i[E]}),d=L&&L.__setModuleDefault||(Object.create?function(r,i){Object.defineProperty(r,"default",{enumerable:!0,value:i})}:function(r,i){r.default=i}),a=L&&L.__exportStar||function(r,i){for(var E in r)E!=="default"&&!Object.prototype.hasOwnProperty.call(i,E)&&n(i,r,E)},e=L&&L.__importStar||function(r){if(r&&r.__esModule)return r;var i={};if(r!=null)for(var E in r)E!=="default"&&Object.prototype.hasOwnProperty.call(r,E)&&n(i,r,E);return d(i,r),i},_=L&&L.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var c=D;Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return c.BLOCKS}});var o=A;Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return o.INLINES}});var S=T;Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return _(S).default}}),a(h,t),a(m,t),a(p,t);var B=N;Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return _(B).default}});var u=e(C);t.helpers=u})(f);function G({title:t,text:n,image_url:d,backgroundColor:a,textColor:e,alignImageRight:_}){const c={renderNode:{[f.BLOCKS.PARAGRAPH]:(O,s)=>l.jsx("p",{style:{marginTop:"1.75rem"},children:s}),[f.BLOCKS.UL_LIST]:(O,s)=>l.jsx("ul",{style:{listStyle:"disc"},children:s.map(K=>l.jsx("li",{children:K.props.children[0].props.children[0]},K.key))}),[f.INLINES.HYPERLINK]:(O,s)=>l.jsx("a",{href:O.data.uri,target:"_blank",rel:"noopener noreferrer",children:s})}},o={backgroundColor:a.value,padding:0,margin:0},S={display:"flex"},B={padding:"5rem",flexGrow:"1"},u={color:e.value,padding:"0 2rem 0",margin:"2rem 0",fontSize:"4rem",lineHeight:"4rem",fontWeight:"700",fontStyle:"bold",maxWidth:"10ch"},r={display:"block",color:e.value,padding:"0 2rem 0",fontSize:"1.75rem",fontWeight:"400",maxWidth:"34ch",textWrap:"balance"},i={flexGrow:"1",width:"40%",maxWidth:"40%"},E={width:"100%",height:"100%",objectFit:"cover"};return _?l.jsx("section",{style:o,children:l.jsxs("div",{style:S,children:[l.jsxs("span",{style:B,children:[l.jsx("h1",{style:u,children:t}),l.jsx("div",{children:l.jsx("span",{style:r,children:I.documentToReactComponents(n,c)})})]}),l.jsx("span",{style:i,children:l.jsx("img",{style:E,src:d})})]})}):l.jsx("section",{style:o,children:l.jsxs("div",{style:S,children:[l.jsx("span",{style:i,children:l.jsx("img",{style:E,src:d})}),l.jsxs("span",{style:B,children:[l.jsx("h1",{style:u,children:t}),l.jsx("div",{children:l.jsx("span",{style:r,children:I.documentToReactComponents(n,c)})})]})]})})}function U({title:t,abstract:n,text:d,backgroundColor:a,textColor:e}){const _={renderNode:{[f.BLOCKS.PARAGRAPH]:(r,i)=>l.jsx("p",{style:{marginTop:"2rem"},children:i}),[f.BLOCKS.UL_LIST]:(r,i)=>l.jsx("ul",{style:{listStyle:"disc"},children:i.map(E=>l.jsx("li",{children:E.props.children[0].props.children[0]},E.key))}),[f.INLINES.HYPERLINK]:(r,i)=>l.jsx("a",{href:r.data.uri,target:"_blank",rel:"noopener noreferrer",children:i})}},c={display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:a.value,justifyContent:"center",padding:"5rem",margin:0},o={padding:"0"},S={display:"block",color:e.value,textAlign:"left",fontSize:"4rem",fontStyle:"bold",fontWeight:"700",lineHeight:"4rem",margin:"0",padding:"0 2rem 0 2rem"},B={color:e.value,textAlign:"left",fontSize:"2rem",fontStyle:"italic",fontWeight:"400",margin:"0",width:"32rem",padding:"0 2rem 0 2rem"},u={color:e.value,textAlign:"left",fontSize:"1.75rem",fontWeight:"400",margin:"0",padding:"0 2rem 2rem 2rem"};return l.jsx("section",{className:"Quote",style:c,children:l.jsxs("div",{style:o,children:[l.jsx("h1",{style:S,children:t}),n&&l.jsx("div",{style:B,children:n}),d&&l.jsx("div",{style:u,children:I.documentToReactComponents(d,_)})]})})}function w({cards:t}){let n=t.items.map((a,e)=>{const _={image_url:a.fields.titleImage!=null?"https:"+a.fields.titleImage.fields.file.url:null,...a.fields};let c;return _.image_url?c=l.jsx(G,{..._}):c=l.jsx(U,{..._}),l.jsx("li",{children:c},e)});const d={maxWidth:"1400px"};return l.jsx("ul",{style:d,children:n})}export{w as default};
