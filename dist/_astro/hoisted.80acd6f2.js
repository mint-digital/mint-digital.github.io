function I(x){throw new Error('Could not dynamically require "'+x+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var H={exports:{}};(function(x,P){(function(t){x.exports=t()})(function(){return function t(o,r,n){function u(d,M){if(!r[d]){if(!o[d]){var w=typeof I=="function"&&I;if(!M&&w)return w(d,!0);if(h)return h(d,!0);var b=new Error("Cannot find module '"+d+"'");throw b.code="MODULE_NOT_FOUND",b}var q=r[d]={exports:{}};o[d][0].call(q.exports,function(v){return u(o[d][1][v]||v)},q,q.exports,t,o,r,n)}return r[d].exports}for(var h=typeof I=="function"&&I,g=0;g<n.length;g++)u(n[g]);return u}({1:[function(t,o,r){o.exports=function(n){var u=2.5949095;return(n*=2)<1?n*n*((u+1)*n-u)*.5:.5*((n-=2)*n*((u+1)*n+u)+2)}},{}],2:[function(t,o,r){o.exports=function(n){var u=1.70158;return n*n*((u+1)*n-u)}},{}],3:[function(t,o,r){o.exports=function(n){var u=1.70158;return--n*n*((u+1)*n+u)+1}},{}],4:[function(t,o,r){var n=t("./bounce-out");o.exports=function(u){return u<.5?.5*(1-n(1-2*u)):.5*n(2*u-1)+.5}},{"./bounce-out":6}],5:[function(t,o,r){var n=t("./bounce-out");o.exports=function(u){return 1-n(1-u)}},{"./bounce-out":6}],6:[function(t,o,r){o.exports=function(n){var u=n*n;return n<4/11?7.5625*u:n<8/11?9.075*u-9.9*n+3.4:n<.9?4356/361*u-35442/1805*n+16061/1805:10.8*n*n-20.52*n+10.72}},{}],7:[function(t,o,r){o.exports=function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},{}],8:[function(t,o,r){o.exports=function(n){return 1-Math.sqrt(1-n*n)}},{}],9:[function(t,o,r){o.exports=function(n){return Math.sqrt(1- --n*n)}},{}],10:[function(t,o,r){o.exports=function(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}},{}],11:[function(t,o,r){o.exports=function(n){return n*n*n}},{}],12:[function(t,o,r){o.exports=function(n){var u=n-1;return u*u*u+1}},{}],13:[function(t,o,r){o.exports=function(n){return n<.5?.5*Math.sin(13*Math.PI/2*2*n)*Math.pow(2,10*(2*n-1)):.5*Math.sin(-13*Math.PI/2*(2*n-1+1))*Math.pow(2,-10*(2*n-1))+1}},{}],14:[function(t,o,r){o.exports=function(n){return Math.sin(13*n*Math.PI/2)*Math.pow(2,10*(n-1))}},{}],15:[function(t,o,r){o.exports=function(n){return Math.sin(-13*(n+1)*Math.PI/2)*Math.pow(2,-10*n)+1}},{}],16:[function(t,o,r){o.exports=function(n){return n===0||n===1?n:n<.5?.5*Math.pow(2,20*n-10):-.5*Math.pow(2,10-20*n)+1}},{}],17:[function(t,o,r){o.exports=function(n){return n===0?n:Math.pow(2,10*(n-1))}},{}],18:[function(t,o,r){o.exports=function(n){return n===1?n:1-Math.pow(2,-10*n)}},{}],19:[function(t,o,r){o.exports={backInOut:t("./back-in-out"),backIn:t("./back-in"),backOut:t("./back-out"),bounceInOut:t("./bounce-in-out"),bounceIn:t("./bounce-in"),bounceOut:t("./bounce-out"),circInOut:t("./circ-in-out"),circIn:t("./circ-in"),circOut:t("./circ-out"),cubicInOut:t("./cubic-in-out"),cubicIn:t("./cubic-in"),cubicOut:t("./cubic-out"),elasticInOut:t("./elastic-in-out"),elasticIn:t("./elastic-in"),elasticOut:t("./elastic-out"),expoInOut:t("./expo-in-out"),expoIn:t("./expo-in"),expoOut:t("./expo-out"),linear:t("./linear"),quadInOut:t("./quad-in-out"),quadIn:t("./quad-in"),quadOut:t("./quad-out"),quartInOut:t("./quart-in-out"),quartIn:t("./quart-in"),quartOut:t("./quart-out"),quintInOut:t("./quint-in-out"),quintIn:t("./quint-in"),quintOut:t("./quint-out"),sineInOut:t("./sine-in-out"),sineIn:t("./sine-in"),sineOut:t("./sine-out")}},{"./back-in":2,"./back-in-out":1,"./back-out":3,"./bounce-in":5,"./bounce-in-out":4,"./bounce-out":6,"./circ-in":8,"./circ-in-out":7,"./circ-out":9,"./cubic-in":11,"./cubic-in-out":10,"./cubic-out":12,"./elastic-in":14,"./elastic-in-out":13,"./elastic-out":15,"./expo-in":17,"./expo-in-out":16,"./expo-out":18,"./linear":20,"./quad-in":22,"./quad-in-out":21,"./quad-out":23,"./quart-in":25,"./quart-in-out":24,"./quart-out":26,"./quint-in":28,"./quint-in-out":27,"./quint-out":29,"./sine-in":31,"./sine-in-out":30,"./sine-out":32}],20:[function(t,o,r){o.exports=function(n){return n}},{}],21:[function(t,o,r){o.exports=function(n){return(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1)}},{}],22:[function(t,o,r){o.exports=function(n){return n*n}},{}],23:[function(t,o,r){o.exports=function(n){return-n*(n-2)}},{}],24:[function(t,o,r){o.exports=function(n){return n<.5?8*Math.pow(n,4):-8*Math.pow(n-1,4)+1}},{}],25:[function(t,o,r){o.exports=function(n){return Math.pow(n,4)}},{}],26:[function(t,o,r){o.exports=function(n){return Math.pow(n-1,3)*(1-n)+1}},{}],27:[function(t,o,r){o.exports=function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},{}],28:[function(t,o,r){o.exports=function(n){return n*n*n*n*n}},{}],29:[function(t,o,r){o.exports=function(n){return--n*n*n*n*n+1}},{}],30:[function(t,o,r){o.exports=function(n){return-.5*(Math.cos(Math.PI*n)-1)}},{}],31:[function(t,o,r){o.exports=function(n){var u=Math.cos(n*Math.PI*.5);return Math.abs(u)<1e-14?1:1-u}},{}],32:[function(t,o,r){o.exports=function(n){return Math.sin(n*Math.PI/2)}},{}],33:[function(t,o,r){o.exports=function(n,u){u||(u=[0,""]),n=String(n);var h=parseFloat(n,10);return u[0]=h,u[1]=n.match(/[\d.\-\+]*\s*(.*)/)[1]||"",u}},{}],34:[function(t,o,r){Object.defineProperty(r,"__esModule",{value:!0}),r.create=void 0;var n=h(t("parse-unit")),u=h(t("eases"));function h(i){return i&&i.__esModule?i:{default:i}}function g(i){return(g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(i)}var d,M,w,b=[],q=typeof window<"u",v=function(){return(document.scrollingElement||document.documentElement).scrollTop},A=function(){return window.innerHeight||window.outerHeight},O=function(i){return isNaN((0,n.default)(i)[0])===!1},E=function(i){var c=(0,n.default)(i);return{value:c[0],unit:c[1]}},S=function(i){return String(i).match(/^[a-z]+-[a-z]+$/)!==null},L=function(i,c){return i===!0?c.elem:i instanceof HTMLElement?c.direct:c.global},j=function(i,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:v(),l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:A(),m=c.getBoundingClientRect(),e=i.match(/^[a-z]+/)[0],p=i.match(/[a-z]+$/)[0],s=0;return p==="top"&&(s-=0),p==="middle"&&(s-=l/2),p==="bottom"&&(s-=l),e==="top"&&(s+=m.top+a),e==="middle"&&(s+=m.top+a+m.height/2),e==="bottom"&&(s+=m.top+a+m.height),"".concat(s,"px")},_=function(i){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v(),a=i.getData(),l=a.to.value-a.from.value,m=c-a.from.value,e=m/(l/100),p=Math.min(Math.max(e,0),100),s=L(a.direct,{global:document.documentElement,elem:a.elem,direct:a.direct}),f=Object.keys(a.props).reduce(function(D,z){var y=a.props[z],B=y.from.unit||y.to.unit,C=y.from.value-y.to.value,F=y.timing(p/100),$=y.from.value-C*F,V=Math.round(1e4*$)/1e4;return D[z]=V+B,D},{}),R=e>=0&&e<=100,U=e<0||e>100;return R===!0&&a.inside(i,e,f),U===!0&&a.outside(i,e,f),{elem:s,props:f}},T=function(i,c){Object.keys(c).forEach(function(a){return function(l,m){l.style.setProperty(m.key,m.value)}(i,{key:a,value:c[a]})})};r.create=function(i){var c=null,a=!1,l={isActive:function(){return a},getData:function(){return c},calculate:function(){c=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((e=Object.assign({},e)).inside==null&&(e.inside=function(){}),e.outside==null&&(e.outside=function(){}),e.direct==null&&(e.direct=!1),e.track==null&&(e.track=!0),e.props==null&&(e.props={}),e.from==null)throw new Error("Missing property `from`");if(e.to==null)throw new Error("Missing property `to`");if(typeof e.inside!="function")throw new Error("Property `inside` must be undefined or a function");if(typeof e.outside!="function")throw new Error("Property `outside` must be undefined or a function");if(typeof e.direct!="boolean"&&e.direct instanceof HTMLElement==0)throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");if(e.direct===!0&&e.elem==null)throw new Error("Property `elem` is required when `direct` is true");if(typeof e.track!="boolean")throw new Error("Property `track` must be undefined or a boolean");if(g(e.props)!=="object")throw new Error("Property `props` must be undefined or an object");if(e.elem==null){if(O(e.from)===!1)throw new Error("Property `from` must be a absolute value when no `elem` has been provided");if(O(e.to)===!1)throw new Error("Property `to` must be a absolute value when no `elem` has been provided")}else S(e.from)===!0&&(e.from=j(e.from,e.elem)),S(e.to)===!0&&(e.to=j(e.to,e.elem));return e.from=E(e.from),e.to=E(e.to),e.props=Object.keys(e.props).reduce(function(p,s){var f=Object.assign({},e.props[s]);if(O(f.from)===!1)throw new Error("Property `from` of prop must be a absolute value");if(O(f.to)===!1)throw new Error("Property `from` of prop must be a absolute value");if(f.from=E(f.from),f.to=E(f.to),f.timing==null&&(f.timing=u.default.linear),typeof f.timing!="string"&&typeof f.timing!="function")throw new Error("Property `timing` of prop must be undefined, a string or a function");if(typeof f.timing=="string"&&u.default[f.timing]==null)throw new Error("Unknown timing for property `timing` of prop");return typeof f.timing=="string"&&(f.timing=u.default[f.timing]),p[s]=f,p},{}),e}(i)},update:function(){var e=_(l),p=e.elem,s=e.props;return T(p,s),s},start:function(){a=!0},stop:function(){a=!1},destroy:function(){b[m]=void 0}},m=b.push(l)-1;return l.calculate(),l},q===!0?(function i(c,a){var l=function(){requestAnimationFrame(function(){return i(c,a)})},m=function(p){return p.filter(function(s){return s!=null&&s.isActive()})}(b);if(m.length===0)return l();var e=v();if(a===e)return l();a=e,m.map(function(p){return _(p,e)}).forEach(function(p){var s=p.elem,f=p.props;return T(s,f)}),l()}(),window.addEventListener("resize",(d=function(){(function(i){return i.filter(function(c){return c!=null&&c.getData().track})})(b).forEach(function(i){i.calculate(),i.update()})},M=50,w=null,function(){for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];clearTimeout(w),w=setTimeout(function(){return d.apply(void 0,c)},M)}))):console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")},{eases:19,"parse-unit":33}]},{},[34])(34)})})(H);var N=H.exports;const G=N.create({elem:document.querySelector(".navbar"),from:"0",to:"500px",props:{"--opacity":{from:0,to:1},"--navHeight":{from:"8rem",to:"6rem"}}});G.start();const J=N.create({elem:document.querySelector(".navbar"),from:"0",to:"500px",props:{"--navSize":{from:"6rem",to:"4rem"}}});J.start();var k=window._paq=window._paq||[];k.push(["trackPageView"]);k.push(["enableLinkTracking"]);(function(){var x="https://mint.matomo.cloud/";k.push(["setTrackerUrl",x+"matomo.php"]),k.push(["setSiteId","1"]);var P=document,t=P.createElement("script"),o=P.getElementsByTagName("script")[0];t.async=!0,t.src="//cdn.matomo.cloud/mint.matomo.cloud/matomo.js",o.parentNode.insertBefore(t,o)})();