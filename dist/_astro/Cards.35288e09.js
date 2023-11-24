import{j as h}from"./jsx-runtime.391947bd.js";import{c as Q,r as ee}from"./rich-text-react-renderer.es5.9873d6d2.js";import"./index.232e83b8.a5cf0916.js";import{r as ge}from"./index.ed373d49.js";var F={},te={};(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.BLOCKS=void 0,function(S){S.DOCUMENT="document",S.PARAGRAPH="paragraph",S.HEADING_1="heading-1",S.HEADING_2="heading-2",S.HEADING_3="heading-3",S.HEADING_4="heading-4",S.HEADING_5="heading-5",S.HEADING_6="heading-6",S.OL_LIST="ordered-list",S.UL_LIST="unordered-list",S.LIST_ITEM="list-item",S.HR="hr",S.QUOTE="blockquote",S.EMBEDDED_ENTRY="embedded-entry-block",S.EMBEDDED_ASSET="embedded-asset-block",S.EMBEDDED_RESOURCE="embedded-resource-block",S.TABLE="table",S.TABLE_ROW="table-row",S.TABLE_CELL="table-cell",S.TABLE_HEADER_CELL="table-header-cell"}(l.BLOCKS||(l.BLOCKS={}))})(te);var ae={};(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.INLINES=void 0,function(S){S.HYPERLINK="hyperlink",S.ENTRY_HYPERLINK="entry-hyperlink",S.ASSET_HYPERLINK="asset-hyperlink",S.RESOURCE_HYPERLINK="resource-hyperlink",S.EMBEDDED_ENTRY="embedded-entry-inline",S.EMBEDDED_RESOURCE="embedded-resource-inline"}(l.INLINES||(l.INLINES={}))})(ae);var ie={};Object.defineProperty(ie,"__esModule",{value:!0});var ye;(function(l){l.BOLD="bold",l.ITALIC="italic",l.UNDERLINE="underline",l.CODE="code",l.SUPERSCRIPT="superscript",l.SUBSCRIPT="subscript"})(ye||(ye={}));ie.default=ye;var he={};(function(l){var S=Q&&Q.__spreadArray||function(E,e,n){if(n||arguments.length===2)for(var y=0,u=e.length,c;y<u;y++)(c||!(y in e))&&(c||(c=Array.prototype.slice.call(e,0,y)),c[y]=e[y]);return E.concat(c||Array.prototype.slice.call(e))},k=Q&&Q.__importDefault||function(E){return E&&E.__esModule?E:{default:E}},C;Object.defineProperty(l,"__esModule",{value:!0}),l.V1_MARKS=l.V1_NODE_TYPES=l.TEXT_CONTAINERS=l.HEADINGS=l.CONTAINERS=l.VOID_BLOCKS=l.TABLE_BLOCKS=l.LIST_ITEM_BLOCKS=l.TOP_LEVEL_BLOCKS=void 0;var t=te,x=ae,U=k(ie);l.TOP_LEVEL_BLOCKS=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE,t.BLOCKS.TABLE],l.LIST_ITEM_BLOCKS=[t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],l.TABLE_BLOCKS=[t.BLOCKS.TABLE,t.BLOCKS.TABLE_ROW,t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],l.VOID_BLOCKS=[t.BLOCKS.HR,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,t.BLOCKS.EMBEDDED_RESOURCE],l.CONTAINERS=(C={},C[t.BLOCKS.OL_LIST]=[t.BLOCKS.LIST_ITEM],C[t.BLOCKS.UL_LIST]=[t.BLOCKS.LIST_ITEM],C[t.BLOCKS.LIST_ITEM]=l.LIST_ITEM_BLOCKS,C[t.BLOCKS.QUOTE]=[t.BLOCKS.PARAGRAPH],C[t.BLOCKS.TABLE]=[t.BLOCKS.TABLE_ROW],C[t.BLOCKS.TABLE_ROW]=[t.BLOCKS.TABLE_CELL,t.BLOCKS.TABLE_HEADER_CELL],C[t.BLOCKS.TABLE_CELL]=[t.BLOCKS.PARAGRAPH],C[t.BLOCKS.TABLE_HEADER_CELL]=[t.BLOCKS.PARAGRAPH],C),l.HEADINGS=[t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6],l.TEXT_CONTAINERS=S([t.BLOCKS.PARAGRAPH],l.HEADINGS,!0),l.V1_NODE_TYPES=[t.BLOCKS.DOCUMENT,t.BLOCKS.PARAGRAPH,t.BLOCKS.HEADING_1,t.BLOCKS.HEADING_2,t.BLOCKS.HEADING_3,t.BLOCKS.HEADING_4,t.BLOCKS.HEADING_5,t.BLOCKS.HEADING_6,t.BLOCKS.OL_LIST,t.BLOCKS.UL_LIST,t.BLOCKS.LIST_ITEM,t.BLOCKS.HR,t.BLOCKS.QUOTE,t.BLOCKS.EMBEDDED_ENTRY,t.BLOCKS.EMBEDDED_ASSET,x.INLINES.HYPERLINK,x.INLINES.ENTRY_HYPERLINK,x.INLINES.ASSET_HYPERLINK,x.INLINES.EMBEDDED_ENTRY,"text"],l.V1_MARKS=[U.default.BOLD,U.default.CODE,U.default.ITALIC,U.default.UNDERLINE]})(he);var Ee={};Object.defineProperty(Ee,"__esModule",{value:!0});var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});var pe={};Object.defineProperty(pe,"__esModule",{value:!0});var _e=te,Te={nodeType:_e.BLOCKS.DOCUMENT,data:{},content:[{nodeType:_e.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};pe.default=Te;var Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.isText=Z.isBlock=Z.isInline=void 0;var Le=te,Ce=ae;function Se(l,S){for(var k=0,C=Object.keys(l);k<C.length;k++){var t=C[k];if(S===l[t])return!0}return!1}function je(l){return Se(Ce.INLINES,l.nodeType)}Z.isInline=je;function Ae(l){return Se(Le.BLOCKS,l.nodeType)}Z.isBlock=Ae;function Re(l){return l.nodeType==="text"}Z.isText=Re;(function(l){var S=Q&&Q.__createBinding||(Object.create?function(u,c,r,a){a===void 0&&(a=r);var o=Object.getOwnPropertyDescriptor(c,r);(!o||("get"in o?!c.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return c[r]}}),Object.defineProperty(u,a,o)}:function(u,c,r,a){a===void 0&&(a=r),u[a]=c[r]}),k=Q&&Q.__setModuleDefault||(Object.create?function(u,c){Object.defineProperty(u,"default",{enumerable:!0,value:c})}:function(u,c){u.default=c}),C=Q&&Q.__exportStar||function(u,c){for(var r in u)r!=="default"&&!Object.prototype.hasOwnProperty.call(c,r)&&S(c,u,r)},t=Q&&Q.__importStar||function(u){if(u&&u.__esModule)return u;var c={};if(u!=null)for(var r in u)r!=="default"&&Object.prototype.hasOwnProperty.call(u,r)&&S(c,u,r);return k(c,u),c},x=Q&&Q.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(l,"__esModule",{value:!0}),l.helpers=l.EMPTY_DOCUMENT=l.MARKS=l.INLINES=l.BLOCKS=void 0;var U=te;Object.defineProperty(l,"BLOCKS",{enumerable:!0,get:function(){return U.BLOCKS}});var E=ae;Object.defineProperty(l,"INLINES",{enumerable:!0,get:function(){return E.INLINES}});var e=ie;Object.defineProperty(l,"MARKS",{enumerable:!0,get:function(){return x(e).default}}),C(he,l),C(Ee,l),C(Oe,l);var n=pe;Object.defineProperty(l,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return x(n).default}});var y=t(Z);l.helpers=y})(F);function Pe({isMobile:l,title:S,text:k,image_url:C,backgroundColor:t,textColor:x,alignImageRight:U,ctaText:E,ctaUrl:e}){console.log(l);const n={renderNode:{[F.BLOCKS.PARAGRAPH]:(d,O)=>h.jsx("p",{style:{marginBottom:"1.75rem"},children:O}),[F.BLOCKS.UL_LIST]:(d,O)=>h.jsx("ul",{style:{listStyle:"disc"},children:O.map(f=>h.jsx("li",{children:f.props.children[0].props.children[0]},f.key))}),[F.INLINES.HYPERLINK]:(d,O)=>h.jsx("a",{href:d.data.uri,target:"_blank",rel:"noopener noreferrer",children:O})}},y={backgroundColor:t.value},u={backgroundColor:t.value,margin:0,display:"grid",gridTemplateColumns:"auto fit-content(1400px) auto"},c={display:"inline-block",position:"relative",width:"50%"},r={color:x.value,padding:"4rem 4rem 0rem 4rem",margin:"0rem 0",fontSize:"4rem",lineHeight:"4rem",fontWeight:"700",fontStyle:"bold",textAlign:"left"},a={display:"block",color:x.value,fontSize:"1.75rem",fontWeight:"400",lineHeight:"2.5rem",textWrap:"balance"},o={padding:"0rem 0rem",objectFit:"cover",objectPosition:"50% 50%",width:"50%"},p={width:"100%",height:"100%",objectFit:"cover",transformOrigin:"top center"},s={padding:"4rem"};return l?Ie(y,u,c,r,S,a,k,n,o,p,C):De(U,y,u,c,r,S,a,k,n,o,p,C,e,E,s)}function Ie(l,S,k,C,t,x,U,E,e,n,y,u,c){console.log("Rendering mobile");const r={display:"flex",flexDirection:"column",width:"100%",padding:"0rem"};return console.log(y),e.width="100vw",e.height="50vw",e.backgroundImage="url("+y+")",e.backgroundSize="cover",e.backgroundPosition="center center",e.textAlign="bottom",C.display="block",C.width="content",C.padding="2rem 0rem 2rem 0rem",k.width="auto",k.padding="0rem 0rem 4rem 0rem",k.margin="0rem 4rem",h.jsx("div",{style:l,children:h.jsxs("section",{style:S,children:[h.jsx("div",{className:"leftPad"}),h.jsxs("span",{className:"rowStyle",style:r,children:[h.jsx("div",{className:"imgCellStyle",style:e,children:h.jsx("img",{style:n,src:y})}),h.jsxs("span",{className:"cardTextCell",style:k,children:[h.jsx("h1",{style:C,children:t}),h.jsx("div",{children:h.jsx("span",{style:x,children:ee.documentToReactComponents(U,E)})})]})]}),h.jsx("div",{className:"rightPad"})]})})}function De(l,S,k,C,t,x,U,E,e,n,y,u,c,r,a){if(console.log("Rendering desktop"),l){const o={backgroundColor:"#efe9e0"};return h.jsx("div",{style:S,children:h.jsxs("section",{style:k,children:[h.jsx("div",{className:"leftPad",style:o}),h.jsxs("div",{className:"rowStyle",style:o,children:[h.jsxs("span",{className:"cardTextCell",style:C,children:[h.jsx("h1",{style:t,children:x}),h.jsx("div",{style:a,children:h.jsx("span",{style:U,children:ee.documentToReactComponents(E,e)})})]}),h.jsx("span",{className:"imgCellStyle",style:n,children:h.jsx("img",{style:y,src:u})})]}),h.jsx("div",{className:"rightPad",style:o})]})})}else return h.jsx("div",{style:S,children:h.jsxs("section",{style:k,children:[h.jsx("div",{className:"leftPad"}),h.jsxs("div",{className:"rowStyle",children:[h.jsx("span",{className:"imgCellStyle",style:n,children:h.jsx("img",{style:y,src:u})}),h.jsxs("span",{className:"cardTextCell",style:C,children:[h.jsx("a",{className:"cta-ball",href:c,children:r}),h.jsx("h1",{style:t,children:x}),h.jsx("div",{style:a,children:h.jsx("span",{style:U,children:ee.documentToReactComponents(E,e)})})]})]}),h.jsx("div",{className:"rightPad"})]})})}function xe({isMobile:l,title:S,text:k,backgroundColor:C,textColor:t,isQuote:x}){console.log(l);const U={renderNode:{[F.BLOCKS.HEADING_2]:(p,s)=>h.jsx("p",{style:{display:"inline",color:t.value,textAlign:"left",fontSize:"3rem",fontStyle:"bold",fontWeight:"700",lineHeight:"4rem",margin:"0",padding:"0rem 1rem 0 0rem",marginTop:"0rem"},children:s}),[F.BLOCKS.PARAGRAPH]:(p,s)=>h.jsx("p",{style:{fontSize:"1.75rem",display:"block",marginTop:"0rem",maxWidth:"45ch"},children:s}),[F.BLOCKS.UL_LIST]:(p,s)=>h.jsx("ul",{style:{listStyle:"disc"},children:s.map(d=>h.jsx("li",{children:d.props.children[0].props.children[0]},d.key))}),[F.INLINES.HYPERLINK]:(p,s)=>h.jsx("a",{href:p.data.uri,target:"_blank",rel:"noopener noreferrer",children:s})}},E={renderNode:{[F.BLOCKS.PARAGRAPH]:(p,s)=>h.jsx("p",{style:{marginTop:"2rem"},children:s}),[F.BLOCKS.UL_LIST]:(p,s)=>h.jsx("ul",{style:{listStyle:"disc"},children:s.map(d=>h.jsx("li",{children:d.props.children[0].props.children[0]},d.key))}),[F.INLINES.HYPERLINK]:(p,s)=>h.jsx("a",{href:p.data.uri,target:"_blank",rel:"noopener noreferrer",children:s})}},e={backgroundColor:C.value,display:"grid",gridTemplateColumns:"auto fit-content(1400px) auto"},n={display:"flex",flexDirection:"column",alignSelf:"center",padding:"4rem 0rem 0rem 0rem"},y={display:"flex",flexDirection:"column",padding:"4rem 4rem 4rem 4rem"},u={display:"block",color:t.value,textAlign:"center",fontSize:"4rem",fontStyle:"bold",fontWeight:"700",margin:"0",padding:"0"},c={display:"inline-block",color:t.value,textAlign:"left",fontSize:"4rem",fontStyle:"bold",fontWeight:"700",lineHeight:"4rem",margin:"0",padding:"0rem"},r={display:"inline-block",color:t.value,textAlign:"center",fontSize:"1.75rem",fontWeight:"400",margin:"0",padding:"0 0rem 4rem 0rem",maxWidth:"58rem",alignSelf:"center"},a={width:"100%",padding:"0",margin:"0",gridColumn:"span 3"},o={color:t.value,textAlign:"left",fontSize:"1.75rem",lineHeight:"2.5rem",fontWeight:"400",margin:"0",padding:"0 0rem 0rem 0rem"};return h.jsxs("section",{className:"Quote",style:e,children:[h.jsx("div",{className:"leftPad_1"}),h.jsxs("div",{id:"whoweare",style:x?n:y,children:[h.jsx("h1",{style:x?u:c,children:S}),k&&x&&h.jsx("div",{style:r,children:ee.documentToReactComponents(k,U)}),k&&!x&&h.jsx("div",{style:o,children:ee.documentToReactComponents(k,E)})]}),h.jsx("div",{className:"rightPad_1"}),x&&h.jsx("img",{src:"../img/signal-2023-11-23-205548_002_cropped_short.jpeg",style:a})]})}var be={exports:{}};(function(l,S){(function(C,t){l.exports=t(ge)})(Q,k=>(()=>{var C={"./node_modules/css-mediaquery/index.js":(E,e)=>{e.match=a,e.parse=o;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,y=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,u=/^(?:(min|max)-)?(.+)/,c=/(em|rem|px|cm|mm|in|pt|pc)?$/,r=/(dpi|dpcm|dppx)?$/;function a(O,f){return o(O).some(function(b){var K=b.inverse,T=b.type==="all"||f.type===b.type;if(T&&K||!(T||K))return!1;var Y=b.expressions.every(function(_){var A=_.feature,M=_.modifier,R=_.value,g=f[A];if(!g)return!1;switch(A){case"orientation":case"scan":return g.toLowerCase()===R.toLowerCase();case"width":case"height":case"device-width":case"device-height":R=d(R),g=d(g);break;case"resolution":R=s(R),g=s(g);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":R=p(R),g=p(g);break;case"grid":case"color":case"color-index":case"monochrome":R=parseInt(R,10)||1,g=parseInt(g,10)||0;break}switch(M){case"min":return g>=R;case"max":return g<=R;default:return g===R}});return Y&&!K||!Y&&K})}function o(O){return O.split(",").map(function(f){f=f.trim();var b=f.match(n),K=b[1],T=b[2],Y=b[3]||"",_={};return _.inverse=!!K&&K.toLowerCase()==="not",_.type=T?T.toLowerCase():"all",Y=Y.match(/\([^\)]+\)/g)||[],_.expressions=Y.map(function(A){var M=A.match(y),R=M[1].toLowerCase().match(u);return{modifier:R[1],feature:R[2],value:M[2]}}),_})}function p(O){var f=Number(O),b;return f||(b=O.match(/^(\d+)\s*\/\s*(\d+)$/),f=b[1]/b[2]),f}function s(O){var f=parseFloat(O),b=String(O).match(r)[1];switch(b){case"dpcm":return f/2.54;case"dppx":return f*96;default:return f}}function d(O){var f=parseFloat(O),b=String(O).match(c)[1];switch(b){case"em":return f*16;case"rem":return f*16;case"cm":return f*96/2.54;case"mm":return f*96/2.54/10;case"in":return f*96;case"pt":return f*72;case"pc":return f*72/12;default:return f}}},"./node_modules/hyphenate-style-name/index.js":(E,e,n)=>{n.r(e),n.d(e,{default:()=>o});var y=/[A-Z]/g,u=/^ms-/,c={};function r(p){return"-"+p.toLowerCase()}function a(p){if(c.hasOwnProperty(p))return c[p];var s=p.replace(y,r);return c[p]=u.test(s)?"-"+s:s}const o=a},"./node_modules/matchmediaquery/index.js":(E,e,n)=>{var y=n("./node_modules/css-mediaquery/index.js").match,u=typeof window<"u"?window.matchMedia:null;function c(a,o,p){var s=this;if(u&&!p){var d=u.call(window,a);this.matches=d.matches,this.media=d.media,d.addListener(b)}else this.matches=y(a,o),this.media=a;this.addListener=O,this.removeListener=f,this.dispose=K;function O(T){d&&d.addListener(T)}function f(T){d&&d.removeListener(T)}function b(T){s.matches=T.matches,s.media=T.media}function K(){d&&d.removeListener(b)}}function r(a,o,p){return new c(a,o,p)}E.exports=r},"./node_modules/object-assign/index.js":E=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function u(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function c(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var a={},o=0;o<10;o++)a["_"+String.fromCharCode(o)]=o;var p=Object.getOwnPropertyNames(a).map(function(d){return a[d]});if(p.join("")!=="0123456789")return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach(function(d){s[d]=d}),Object.keys(Object.assign({},s)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}E.exports=c()?Object.assign:function(r,a){for(var o,p=u(r),s,d=1;d<arguments.length;d++){o=Object(arguments[d]);for(var O in o)n.call(o,O)&&(p[O]=o[O]);if(e){s=e(o);for(var f=0;f<s.length;f++)y.call(o,s[f])&&(p[s[f]]=o[s[f]])}}return p}},"./node_modules/prop-types/checkPropTypes.js":(E,e,n)=>{var y=function(){};{var u=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),c={},r=n("./node_modules/prop-types/lib/has.js");y=function(o){var p="Warning: "+o;typeof console<"u"&&console.error(p);try{throw new Error(p)}catch{}}}function a(o,p,s,d,O){for(var f in o)if(r(o,f)){var b;try{if(typeof o[f]!="function"){var K=Error((d||"React class")+": "+s+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw K.name="Invariant Violation",K}b=o[f](p,f,d,s,null,u)}catch(Y){b=Y}if(b&&!(b instanceof Error)&&y((d||"React class")+": type specification of "+s+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof b+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),b instanceof Error&&!(b.message in c)){c[b.message]=!0;var T=O?O():"";y("Failed "+s+" type: "+b.message+(T??""))}}}a.resetWarningCache=function(){c={}},E.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":(E,e,n)=>{var y=n("./node_modules/react-is/index.js"),u=n("./node_modules/object-assign/index.js"),c=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),r=n("./node_modules/prop-types/lib/has.js"),a=n("./node_modules/prop-types/checkPropTypes.js"),o=function(){};o=function(s){var d="Warning: "+s;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function p(){return null}E.exports=function(s,d){var O=typeof Symbol=="function"&&Symbol.iterator,f="@@iterator";function b(i){var m=i&&(O&&i[O]||i[f]);if(typeof m=="function")return m}var K="<<anonymous>>",T={array:M("array"),bigint:M("bigint"),bool:M("boolean"),func:M("function"),number:M("number"),object:M("object"),string:M("string"),symbol:M("symbol"),any:R(),arrayOf:g,element:W(),elementType:$(),instanceOf:J,node:ce(),objectOf:se,oneOf:oe,oneOfType:ue,shape:le,exact:de};function Y(i,m){return i===m?i!==0||1/i===1/m:i!==i&&m!==m}function _(i,m){this.message=i,this.data=m&&typeof m=="object"?m:{},this.stack=""}_.prototype=Error.prototype;function A(i){var m={},D=0;function P(B,j,I,w,H,N,v){if(w=w||K,N=N||I,v!==c){if(d){var G=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw G.name="Invariant Violation",G}else if(typeof console<"u"){var z=w+":"+I;!m[z]&&D<3&&(o("You are manually calling a React.PropTypes validation function for the `"+N+"` prop on `"+w+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),m[z]=!0,D++)}}return j[I]==null?B?j[I]===null?new _("The "+H+" `"+N+"` is marked as required "+("in `"+w+"`, but its value is `null`.")):new _("The "+H+" `"+N+"` is marked as required in "+("`"+w+"`, but its value is `undefined`.")):null:i(j,I,w,H,N)}var L=P.bind(null,!1);return L.isRequired=P.bind(null,!0),L}function M(i){function m(D,P,L,B,j,I){var w=D[P],H=X(w);if(H!==i){var N=V(w);return new _("Invalid "+B+" `"+j+"` of type "+("`"+N+"` supplied to `"+L+"`, expected ")+("`"+i+"`."),{expectedType:i})}return null}return A(m)}function R(){return A(p)}function g(i){function m(D,P,L,B,j){if(typeof i!="function")return new _("Property `"+j+"` of component `"+L+"` has invalid PropType notation inside arrayOf.");var I=D[P];if(!Array.isArray(I)){var w=X(I);return new _("Invalid "+B+" `"+j+"` of type "+("`"+w+"` supplied to `"+L+"`, expected an array."))}for(var H=0;H<I.length;H++){var N=i(I,H,L,B,j+"["+H+"]",c);if(N instanceof Error)return N}return null}return A(m)}function W(){function i(m,D,P,L,B){var j=m[D];if(!s(j)){var I=X(j);return new _("Invalid "+L+" `"+B+"` of type "+("`"+I+"` supplied to `"+P+"`, expected a single ReactElement."))}return null}return A(i)}function $(){function i(m,D,P,L,B){var j=m[D];if(!y.isValidElementType(j)){var I=X(j);return new _("Invalid "+L+" `"+B+"` of type "+("`"+I+"` supplied to `"+P+"`, expected a single ReactElement type."))}return null}return A(i)}function J(i){function m(D,P,L,B,j){if(!(D[P]instanceof i)){var I=i.name||K,w=ne(D[P]);return new _("Invalid "+B+" `"+j+"` of type "+("`"+w+"` supplied to `"+L+"`, expected ")+("instance of `"+I+"`."))}return null}return A(m)}function oe(i){if(!Array.isArray(i))return arguments.length>1?o("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):o("Invalid argument supplied to oneOf, expected an array."),p;function m(D,P,L,B,j){for(var I=D[P],w=0;w<i.length;w++)if(Y(I,i[w]))return null;var H=JSON.stringify(i,function(v,G){var z=V(G);return z==="symbol"?String(G):G});return new _("Invalid "+B+" `"+j+"` of value `"+String(I)+"` "+("supplied to `"+L+"`, expected one of "+H+"."))}return A(m)}function se(i){function m(D,P,L,B,j){if(typeof i!="function")return new _("Property `"+j+"` of component `"+L+"` has invalid PropType notation inside objectOf.");var I=D[P],w=X(I);if(w!=="object")return new _("Invalid "+B+" `"+j+"` of type "+("`"+w+"` supplied to `"+L+"`, expected an object."));for(var H in I)if(r(I,H)){var N=i(I,H,L,B,j+"."+H,c);if(N instanceof Error)return N}return null}return A(m)}function ue(i){if(!Array.isArray(i))return o("Invalid argument supplied to oneOfType, expected an instance of array."),p;for(var m=0;m<i.length;m++){var D=i[m];if(typeof D!="function")return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ve(D)+" at index "+m+"."),p}function P(L,B,j,I,w){for(var H=[],N=0;N<i.length;N++){var v=i[N],G=v(L,B,j,I,w,c);if(G==null)return null;G.data&&r(G.data,"expectedType")&&H.push(G.data.expectedType)}var z=H.length>0?", expected one of type ["+H.join(", ")+"]":"";return new _("Invalid "+I+" `"+w+"` supplied to "+("`"+j+"`"+z+"."))}return A(P)}function ce(){function i(m,D,P,L,B){return q(m[D])?null:new _("Invalid "+L+" `"+B+"` supplied to "+("`"+P+"`, expected a ReactNode."))}return A(i)}function re(i,m,D,P,L){return new _((i||"React class")+": "+m+" type `"+D+"."+P+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+L+"`.")}function le(i){function m(D,P,L,B,j){var I=D[P],w=X(I);if(w!=="object")return new _("Invalid "+B+" `"+j+"` of type `"+w+"` "+("supplied to `"+L+"`, expected `object`."));for(var H in i){var N=i[H];if(typeof N!="function")return re(L,B,j,H,V(N));var v=N(I,H,L,B,j+"."+H,c);if(v)return v}return null}return A(m)}function de(i){function m(D,P,L,B,j){var I=D[P],w=X(I);if(w!=="object")return new _("Invalid "+B+" `"+j+"` of type `"+w+"` "+("supplied to `"+L+"`, expected `object`."));var H=u({},D[P],i);for(var N in H){var v=i[N];if(r(i,N)&&typeof v!="function")return re(L,B,j,N,V(v));if(!v)return new _("Invalid "+B+" `"+j+"` key `"+N+"` supplied to `"+L+"`.\nBad object: "+JSON.stringify(D[P],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(i),null,"  "));var G=v(I,N,L,B,j+"."+N,c);if(G)return G}return null}return A(m)}function q(i){switch(typeof i){case"number":case"string":case"undefined":return!0;case"boolean":return!i;case"object":if(Array.isArray(i))return i.every(q);if(i===null||s(i))return!0;var m=b(i);if(m){var D=m.call(i),P;if(m!==i.entries){for(;!(P=D.next()).done;)if(!q(P.value))return!1}else for(;!(P=D.next()).done;){var L=P.value;if(L&&!q(L[1]))return!1}}else return!1;return!0;default:return!1}}function fe(i,m){return i==="symbol"?!0:m?m["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&m instanceof Symbol:!1}function X(i){var m=typeof i;return Array.isArray(i)?"array":i instanceof RegExp?"object":fe(m,i)?"symbol":m}function V(i){if(typeof i>"u"||i===null)return""+i;var m=X(i);if(m==="object"){if(i instanceof Date)return"date";if(i instanceof RegExp)return"regexp"}return m}function ve(i){var m=V(i);switch(m){case"array":case"object":return"an "+m;case"boolean":case"date":case"regexp":return"a "+m;default:return m}}function ne(i){return!i.constructor||!i.constructor.name?K:i.constructor.name}return T.checkPropTypes=a,T.resetWarningCache=a.resetWarningCache,T.PropTypes=T,T}},"./node_modules/prop-types/index.js":(E,e,n)=>{{var y=n("./node_modules/react-is/index.js"),u=!0;E.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(y.isElement,u)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":E=>{var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";E.exports=e},"./node_modules/prop-types/lib/has.js":E=>{E.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(E,e)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n=typeof Symbol=="function"&&Symbol.for,y=n?Symbol.for("react.element"):60103,u=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,p=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,O=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,b=n?Symbol.for("react.suspense_list"):60120,K=n?Symbol.for("react.memo"):60115,T=n?Symbol.for("react.lazy"):60116,Y=n?Symbol.for("react.block"):60121,_=n?Symbol.for("react.fundamental"):60117,A=n?Symbol.for("react.responder"):60118,M=n?Symbol.for("react.scope"):60119;function R(v){return typeof v=="string"||typeof v=="function"||v===c||v===d||v===a||v===r||v===f||v===b||typeof v=="object"&&v!==null&&(v.$$typeof===T||v.$$typeof===K||v.$$typeof===o||v.$$typeof===p||v.$$typeof===O||v.$$typeof===_||v.$$typeof===A||v.$$typeof===M||v.$$typeof===Y)}function g(v){if(typeof v=="object"&&v!==null){var G=v.$$typeof;switch(G){case y:var z=v.type;switch(z){case s:case d:case c:case a:case r:case f:return z;default:var me=z&&z.$$typeof;switch(me){case p:case O:case T:case K:case o:return me;default:return G}}case u:return G}}}var W=s,$=d,J=p,oe=o,se=y,ue=O,ce=c,re=T,le=K,de=u,q=a,fe=r,X=f,V=!1;function ve(v){return V||(V=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ne(v)||g(v)===s}function ne(v){return g(v)===d}function i(v){return g(v)===p}function m(v){return g(v)===o}function D(v){return typeof v=="object"&&v!==null&&v.$$typeof===y}function P(v){return g(v)===O}function L(v){return g(v)===c}function B(v){return g(v)===T}function j(v){return g(v)===K}function I(v){return g(v)===u}function w(v){return g(v)===a}function H(v){return g(v)===r}function N(v){return g(v)===f}e.AsyncMode=W,e.ConcurrentMode=$,e.ContextConsumer=J,e.ContextProvider=oe,e.Element=se,e.ForwardRef=ue,e.Fragment=ce,e.Lazy=re,e.Memo=le,e.Portal=de,e.Profiler=q,e.StrictMode=fe,e.Suspense=X,e.isAsyncMode=ve,e.isConcurrentMode=ne,e.isContextConsumer=i,e.isContextProvider=m,e.isElement=D,e.isForwardRef=P,e.isFragment=L,e.isLazy=B,e.isMemo=j,e.isPortal=I,e.isProfiler=w,e.isStrictMode=H,e.isSuspense=N,e.isValidElementType=R,e.typeOf=g})()},"./node_modules/react-is/index.js":(E,e,n)=>{E.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(E,e,n)=>{n.r(e),n.d(e,{shallowEqualArrays:()=>u,shallowEqualObjects:()=>y});function y(c,r){if(c===r)return!0;if(!c||!r)return!1;var a=Object.keys(c),o=Object.keys(r),p=a.length;if(o.length!==p)return!1;for(var s=0;s<p;s++){var d=a[s];if(c[d]!==r[d]||!Object.prototype.hasOwnProperty.call(r,d))return!1}return!0}function u(c,r){if(c===r)return!0;if(!c||!r)return!1;var a=c.length;if(r.length!==a)return!1;for(var o=0;o<a;o++)if(c[o]!==r[o])return!1;return!0}},"./src/Component.ts":function(E,e,n){var y=this&&this.__rest||function(a,o){var p={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&o.indexOf(s)<0&&(p[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,s=Object.getOwnPropertySymbols(a);d<s.length;d++)o.indexOf(s[d])<0&&Object.prototype.propertyIsEnumerable.call(a,s[d])&&(p[s[d]]=a[s[d]]);return p},u=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0});var c=u(n("./src/useMediaQuery.ts")),r=function(a){var o=a.children,p=a.device,s=a.onChange,d=y(a,["children","device","onChange"]),O=(0,c.default)(d,p,s);return typeof o=="function"?o(O):O?o:null};e.default=r},"./src/Context.ts":(E,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});var y=n("react"),u=(0,y.createContext)(void 0);e.default=u},"./src/index.ts":function(E,e,n){var y=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0}),e.Context=e.toQuery=e.useMediaQuery=e.default=void 0;var u=y(n("./src/useMediaQuery.ts"));e.useMediaQuery=u.default;var c=y(n("./src/Component.ts"));e.default=c.default;var r=y(n("./src/toQuery.ts"));e.toQuery=r.default;var a=y(n("./src/Context.ts"));e.Context=a.default},"./src/mediaQuery.ts":function(E,e,n){var y=this&&this.__assign||function(){return y=Object.assign||function(f){for(var b,K=1,T=arguments.length;K<T;K++){b=arguments[K];for(var Y in b)Object.prototype.hasOwnProperty.call(b,Y)&&(f[Y]=b[Y])}return f},y.apply(this,arguments)},u=this&&this.__rest||function(f,b){var K={};for(var T in f)Object.prototype.hasOwnProperty.call(f,T)&&b.indexOf(T)<0&&(K[T]=f[T]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Y=0,T=Object.getOwnPropertySymbols(f);Y<T.length;Y++)b.indexOf(T[Y])<0&&Object.prototype.propertyIsEnumerable.call(f,T[Y])&&(K[T[Y]]=f[T[Y]]);return K},c=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(e,"__esModule",{value:!0});var r=c(n("./node_modules/prop-types/index.js")),a=r.default.oneOfType([r.default.string,r.default.number]),o={all:r.default.bool,grid:r.default.bool,aural:r.default.bool,braille:r.default.bool,handheld:r.default.bool,print:r.default.bool,projection:r.default.bool,screen:r.default.bool,tty:r.default.bool,tv:r.default.bool,embossed:r.default.bool},p={orientation:r.default.oneOf(["portrait","landscape"]),scan:r.default.oneOf(["progressive","interlace"]),aspectRatio:r.default.string,deviceAspectRatio:r.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:r.default.bool,colorIndex:r.default.bool,monochrome:r.default.bool,resolution:a,type:Object.keys(o)};p.type;var s=u(p,["type"]),d=y({minAspectRatio:r.default.string,maxAspectRatio:r.default.string,minDeviceAspectRatio:r.default.string,maxDeviceAspectRatio:r.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:r.default.number,maxColor:r.default.number,minColorIndex:r.default.number,maxColorIndex:r.default.number,minMonochrome:r.default.number,maxMonochrome:r.default.number,minResolution:a,maxResolution:a},s),O=y(y({},o),d);e.default={all:O,types:o,matchers:p,features:d}},"./src/toQuery.ts":function(E,e,n){var y=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(e,"__esModule",{value:!0});var u=y(n("./node_modules/hyphenate-style-name/index.js")),c=y(n("./src/mediaQuery.ts")),r=function(s){return"not ".concat(s)},a=function(s,d){var O=(0,u.default)(s);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?O:d===!1?r(O):"(".concat(O,": ").concat(d,")")},o=function(s){return s.join(" and ")},p=function(s){var d=[];return Object.keys(c.default.all).forEach(function(O){var f=s[O];f!=null&&d.push(a(O,f))}),o(d)};e.default=p},"./src/useMediaQuery.ts":function(E,e,n){var y=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(e,"__esModule",{value:!0});var u=n("react"),c=y(n("./node_modules/matchmediaquery/index.js")),r=y(n("./node_modules/hyphenate-style-name/index.js")),a=n("./node_modules/shallow-equal/dist/index.esm.js"),o=y(n("./src/toQuery.ts")),p=y(n("./src/Context.ts")),s=function(_){return _.query||(0,o.default)(_)},d=function(_){if(_){var A=Object.keys(_);return A.reduce(function(M,R){return M[(0,r.default)(R)]=_[R],M},{})}},O=function(){var _=(0,u.useRef)(!1);return(0,u.useEffect)(function(){_.current=!0},[]),_.current},f=function(_){var A=(0,u.useContext)(p.default),M=function(){return d(_)||d(A)},R=(0,u.useState)(M),g=R[0],W=R[1];return(0,u.useEffect)(function(){var $=M();(0,a.shallowEqualObjects)(g,$)||W($)},[_,A]),g},b=function(_){var A=function(){return s(_)},M=(0,u.useState)(A),R=M[0],g=M[1];return(0,u.useEffect)(function(){var W=A();R!==W&&g(W)},[_]),R},K=function(_,A){var M=function(){return(0,c.default)(_,A||{},!!A)},R=(0,u.useState)(M),g=R[0],W=R[1],$=O();return(0,u.useEffect)(function(){if($){var J=M();return W(J),function(){J&&J.dispose()}}},[_,A]),g},T=function(_){var A=(0,u.useState)(_.matches),M=A[0],R=A[1];return(0,u.useEffect)(function(){var g=function(W){R(W.matches)};return _.addListener(g),R(_.matches),function(){_.removeListener(g)}},[_]),M},Y=function(_,A,M){var R=f(A),g=b(_);if(!g)throw new Error("Invalid or missing MediaQuery!");var W=K(g,R),$=T(W),J=O();return(0,u.useEffect)(function(){J&&M&&M($)},[$]),(0,u.useEffect)(function(){return function(){W&&W.dispose()}},[]),$};e.default=Y},react:E=>{E.exports=k}},t={};function x(E){var e=t[E];if(e!==void 0)return e.exports;var n=t[E]={exports:{}};return C[E].call(n.exports,n,n.exports,x),n.exports}x.d=(E,e)=>{for(var n in e)x.o(e,n)&&!x.o(E,n)&&Object.defineProperty(E,n,{enumerable:!0,get:e[n]})},x.o=(E,e)=>Object.prototype.hasOwnProperty.call(E,e),x.r=E=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})};var U=x("./src/index.ts");return U})())})(be);var Me=be.exports;function He({cards:l}){const S=Me.useMediaQuery({maxWidth:500});return l.items.map((C,t)=>{const x={isMobile:S,image_url:C.fields.titleImage!=null?"https:"+C.fields.titleImage.fields.file.url:null,...C.fields};let U;return x.image_url?U=h.jsx(Pe,{...x}):U=h.jsx(xe,{...x}),h.jsx("div",{children:U},t)})}export{He as default};
