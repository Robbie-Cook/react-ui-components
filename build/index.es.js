import{faCircleNotch as e}from"@fortawesome/free-solid-svg-icons";import{FontAwesomeIcon as n}from"@fortawesome/react-fontawesome";import t,{PureComponent as r,Component as o}from"react";import i from"react-pose";import a from"styled-components";import{Helmet as c}from"react-helmet";import"@material-ui/core/AppBar";import"@material-ui/core/styles";import"@material-ui/core/Tabs";import"@material-ui/core/Toolbar";import{Button as s,Grommet as l}from"grommet";import{Carousel as u}from"react-responsive-carousel";import"react-responsive-carousel/lib/styles/carousel.min.css";function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,n,t){return n&&f(e.prototype,n),t&&f(e,t),e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?b(e):n}function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function e(){p(this,e)};h(E,"textColor","#dcd6ce"),h(E,"backgroundColor","#0f0f0f"),h(E,"link",{color:"#6385a9",colorActive:"#1565c0",colorHighlight:"#6385a9"}),h(E,"text",{color:E.textColor}),h(E,"page",{backgroundColor:"#0f0f0f",secondaryColor:"#EB6D6D"}),h(E,"navbar",{backgroundColor:E.backgroundColor});var S=t.createContext(E);function k(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function O(e,n){return e(n={exports:{}},n.exports),n.exports}var C=O(function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,p=t?Symbol.for("react.concurrent_mode"):60111,f=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,h=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,m=t?Symbol.for("react.lazy"):60116,v=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118;function g(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case u:case p:case i:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case l:case f:case s:return e;default:return n}}case m:case y:case o:return n}}}function x(e){return g(e)===p}n.typeOf=g,n.AsyncMode=u,n.ConcurrentMode=p,n.ContextConsumer=l,n.ContextProvider=s,n.Element=r,n.ForwardRef=f,n.Fragment=i,n.Lazy=m,n.Memo=y,n.Portal=o,n.Profiler=c,n.StrictMode=a,n.Suspense=d,n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===c||e===a||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===s||e.$$typeof===l||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b)},n.isAsyncMode=function(e){return x(e)||g(e)===u},n.isConcurrentMode=x,n.isContextConsumer=function(e){return g(e)===l},n.isContextProvider=function(e){return g(e)===s},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return g(e)===f},n.isFragment=function(e){return g(e)===i},n.isLazy=function(e){return g(e)===m},n.isMemo=function(e){return g(e)===y},n.isPortal=function(e){return g(e)===o},n.isProfiler=function(e){return g(e)===c},n.isStrictMode=function(e){return g(e)===a},n.isSuspense=function(e){return g(e)===d}});k(C);C.typeOf,C.AsyncMode,C.ConcurrentMode,C.ContextConsumer,C.ContextProvider,C.Element,C.ForwardRef,C.Fragment,C.Lazy,C.Memo,C.Portal,C.Profiler,C.StrictMode,C.Suspense,C.isValidElementType,C.isAsyncMode,C.isConcurrentMode,C.isContextConsumer,C.isContextProvider,C.isElement,C.isForwardRef,C.isFragment,C.isLazy,C.isMemo,C.isPortal,C.isProfiler,C.isStrictMode,C.isSuspense;var P=O(function(e,n){"production"!==process.env.NODE_ENV&&function(){Object.defineProperty(n,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118;var b=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return t[o++]});"undefined"!=typeof console&&console.warn(i);try{throw new Error(i)}catch(e){}},g=function(e,n){if(void 0===n)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];b.apply(void 0,[n].concat(r))}};function x(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:var d=e.type;switch(d){case l:case u:case o:case a:case i:case f:return d;default:var m=d&&d.$$typeof;switch(m){case s:case p:case c:return m;default:return n}}case y:case h:case r:return n}}}var w=l,E=u,S=s,k=c,O=t,C=p,P=o,T=y,j=h,_=r,R=a,M=i,$=f,N=!1;function z(e){return x(e)===u}n.typeOf=x,n.AsyncMode=w,n.ConcurrentMode=E,n.ContextConsumer=S,n.ContextProvider=k,n.Element=O,n.ForwardRef=C,n.Fragment=P,n.Lazy=T,n.Memo=j,n.Portal=_,n.Profiler=R,n.StrictMode=M,n.Suspense=$,n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===s||e.$$typeof===p||e.$$typeof===m||e.$$typeof===v)},n.isAsyncMode=function(e){return N||(N=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),z(e)||x(e)===l},n.isConcurrentMode=z,n.isContextConsumer=function(e){return x(e)===s},n.isContextProvider=function(e){return x(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},n.isForwardRef=function(e){return x(e)===p},n.isFragment=function(e){return x(e)===o},n.isLazy=function(e){return x(e)===y},n.isMemo=function(e){return x(e)===h},n.isPortal=function(e){return x(e)===r},n.isProfiler=function(e){return x(e)===a},n.isStrictMode=function(e){return x(e)===i},n.isSuspense=function(e){return x(e)===f}}()});k(P);P.typeOf,P.AsyncMode,P.ConcurrentMode,P.ContextConsumer,P.ContextProvider,P.Element,P.ForwardRef,P.Fragment,P.Lazy,P.Memo,P.Portal,P.Profiler,P.StrictMode,P.Suspense,P.isValidElementType,P.isAsyncMode,P.isConcurrentMode,P.isContextConsumer,P.isContextProvider,P.isElement,P.isForwardRef,P.isFragment,P.isLazy,P.isMemo,P.isPortal,P.isProfiler,P.isStrictMode,P.isSuspense;var T=O(function(e){"production"===process.env.NODE_ENV?e.exports=C:e.exports=P}),j=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;function M(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var $=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(e){return n[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,n){for(var t,r,o=M(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))_.call(t,a)&&(o[a]=t[a]);if(j){r=j(t);for(var c=0;c<r.length;c++)R.call(t,r[c])&&(o[r[c]]=t[r[c]])}}return o},N="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",z=function(){};if("production"!==process.env.NODE_ENV){var A=N,D={},I=Function.call.bind(Object.prototype.hasOwnProperty);z=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}}}function F(e,n,t,r,o){if("production"!==process.env.NODE_ENV)for(var i in e)if(I(e,i)){var a;try{if("function"!=typeof e[i]){var c=Error((r||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.");throw c.name="Invariant Violation",c}a=e[i](n,i,r,t,null,A)}catch(e){a=e}if(!a||a instanceof Error||z((r||"React class")+": type specification of "+t+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof a+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),a instanceof Error&&!(a.message in D)){D[a.message]=!0;var s=o?o():"";z("Failed "+t+" type: "+a.message+(null!=s?s:""))}}}F.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(D={})};var V=F,W=Function.call.bind(Object.prototype.hasOwnProperty),L=function(){};function q(){return null}"production"!==process.env.NODE_ENV&&(L=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}});var H=function(e,n){var t="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";var o="<<anonymous>>",i={array:l("array"),bool:l("boolean"),func:l("function"),number:l("number"),object:l("object"),string:l("string"),symbol:l("symbol"),any:s(q),arrayOf:function(e){return s(function(n,t,r,o,i){if("function"!=typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=n[t];if(!Array.isArray(a))return new c("Invalid "+o+" `"+i+"` of type `"+p(a)+"` supplied to `"+r+"`, expected an array.");for(var s=0;s<a.length;s++){var l=e(a,s,r,o,i+"["+s+"]",N);if(l instanceof Error)return l}return null})},element:s(function(n,t,r,o,i){var a=n[t];return e(a)?null:new c("Invalid "+o+" `"+i+"` of type `"+p(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}),elementType:s(function(e,n,t,r,o){var i=e[n];return T.isValidElementType(i)?null:new c("Invalid "+r+" `"+o+"` of type `"+p(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")}),instanceOf:function(e){return s(function(n,t,r,i,a){if(!(n[t]instanceof e)){var s=e.name||o;return new c("Invalid "+i+" `"+a+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return o;return e.constructor.name}(n[t])+"` supplied to `"+r+"`, expected instance of `"+s+"`.")}return null})},node:s(function(e,n,t,r,o){return u(e[n])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")}),objectOf:function(e){return s(function(n,t,r,o,i){if("function"!=typeof e)return new c("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var a=n[t],s=p(a);if("object"!==s)return new c("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in a)if(W(a,l)){var u=e(a,l,r,o,i+"."+l,N);if(u instanceof Error)return u}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&(arguments.length>1?L("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):L("Invalid argument supplied to oneOf, expected an array.")),q;return s(function(n,t,r,o,i){for(var s=n[t],l=0;l<e.length;l++)if(a(s,e[l]))return null;var u=JSON.stringify(e,function(e,n){return"symbol"===f(n)?String(n):n});return new c("Invalid "+o+" `"+i+"` of value `"+String(s)+"` supplied to `"+r+"`, expected one of "+u+".")})},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&L("Invalid argument supplied to oneOfType, expected an instance of array."),q;for(var n=0;n<e.length;n++){var t=e[n];if("function"!=typeof t)return L("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+d(t)+" at index "+n+"."),q}return s(function(n,t,r,o,i){for(var a=0;a<e.length;a++){if(null==(0,e[a])(n,t,r,o,i,N))return null}return new c("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(e){return s(function(n,t,r,o,i){var a=n[t],s=p(a);if("object"!==s)return new c("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if(u){var f=u(a,l,r,o,i+"."+l,N);if(f)return f}}return null})},exact:function(e){return s(function(n,t,r,o,i){var a=n[t],s=p(a);if("object"!==s)return new c("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var l=$({},n[t],e);for(var u in l){var f=e[u];if(!f)return new c("Invalid "+o+" `"+i+"` key `"+u+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(n[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=f(a,u,r,o,i+"."+u,N);if(d)return d}return null})}};function a(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function c(e){this.message=e,this.stack=""}function s(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,s,l,u,p,f){if(l=l||o,p=p||s,f!==N){if(n){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var h=l+":"+s;!t[h]&&r<3&&(L("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[h]=!0,r++)}}return null==a[s]?i?null===a[s]?new c("The "+u+" `"+p+"` is marked as required in `"+l+"`, but its value is `null`."):new c("The "+u+" `"+p+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(a,s,l,u,p)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function l(e){return s(function(n,t,r,o,i,a){var s=n[t];return p(s)!==e?new c("Invalid "+o+" `"+i+"` of type `"+f(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function u(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(u);if(null===n||e(n))return!0;var o=function(e){var n=e&&(t&&e[t]||e[r]);if("function"==typeof n)return n}(n);if(!o)return!1;var i,a=o.call(n);if(o!==n.entries){for(;!(i=a.next()).done;)if(!u(i.value))return!1}else for(;!(i=a.next()).done;){var c=i.value;if(c&&!u(c[1]))return!1}return!0;default:return!1}}function p(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function f(e){if(null==e)return""+e;var n=p(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function d(e){var n=f(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return c.prototype=Error.prototype,i.checkPropTypes=V,i.resetWarningCache=V.resetWarningCache,i.PropTypes=i,i};function B(){}function U(){}U.resetWarningCache=B;var Y=O(function(e){if("production"!==process.env.NODE_ENV){var n=T;e.exports=H(n.isElement,!0)}else e.exports=function(){function e(e,n,t,r,o,i){if(i!==N){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:U,resetWarningCache:B};return t.PropTypes=t,t}()}),J=function e(){p(this,e)};function G(){var e=x(["\n  min-width: 100px;\n  color: ","\n  animation-name: spin;\n  animation-duration: 2500ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  "]);return G=function(){return e},e}function K(){var e=x([""]);return K=function(){return e},e}h(J,"navbar",{height:"64"}),h(J,"page",{sideMargin:"90px"});var Q=function(e){function n(e){var t;return p(this,n),h(b(t=g(this,m(n).call(this,e))),"PosedDiv",i.div({visible:{opacity:1,height:"auto"},hidden:{opacity:0,height:"0px",transition:{default:{ease:"linear",duration:100}}}})),h(b(t),"StyledDiv",a(t.PosedDiv)(K())),t}return y(n,r),d(n,[{key:"render",value:function(){return t.createElement(t.Fragment,null,t.createElement(S.Consumer,null,function(e){console.log("Context: "+e.text.color)}),t.createElement(this.StyledDiv,{pose:this.props.loaded?"hidden":"visible"},t.createElement(X,{color:this.context.text.color})),t.createElement(this.StyledDiv,{pose:this.props.loaded?"visible":"hidden"},this.props.children))}}]),n}();function X(r){var o=a.div(G(),r.color);return t.createElement(o,null,t.createElement(n,{style:{fontSize:"65px",display:"flex",margin:"auto"},icon:e}))}function Z(e){return t.createElement(t.Fragment,null)}function ee(){var e=x(["\n      border: 8px solid ",";\n      border-radius: 4px;\n      padding: 20px;\n      display: flex;\n      flex-direction: ",";\n      ",";\n      ",";\n      ",";\n\n      ",";\n      ",";\n\n      &::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n        background-color: #2b2b2b;\n      }\n\n      &::-webkit-scrollbar {\n        width: 10px;\n        background-color: ",";\n      }\n\n      &::-webkit-scrollbar-thumb {\n        background-color: ",";\n        );\n      }\n    "]);return ee=function(){return e},e}Q.contextType=S,Q.defaultProps={loaded:!0},X.contextType=S,X.defaultProps={color:"white"},Z.defaultProps={optionalWidth:"20px"};var ne=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){var e=a.div(ee(),E.text.color,this.props.horizontalScroll?"row":"column",this.props.width?"width: ".concat(this.props.width):"",this.props.height?"height: ".concat(this.props.height):"",this.props.style,this.props.horizontalScroll?"overflow-x: auto":"",this.props.verticalScroll?"overflow-y: auto":"",E.backgroundColor,E.text.color);return t.createElement(e,null,this.props.children)}}]),n}();ne.propTypes={width:Y.string,height:Y.string,horizontalScroll:Y.bool,verticalScroll:Y.bool};var te=function e(){p(this,e)};h(te,"mobileSize","900");var re=function(){function e(n){p(this,e),this.style=n}return d(e,[{key:"toString",value:function(){return"\n      @media (max-width: ".concat(te.mobileSize,"px) {\n        ").concat(this.style,";\n      }")}}]),e}();function oe(){var e=x(["\n      display: flex;\n      flex-direction: column;\n      margin: 0 40px 20px 0;\n      width: ",";\n\n      ","\n    "]);return oe=function(){return e},e}function ie(){var e=x(["\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n\n  ","\n"]);return ie=function(){return e},e}function ae(){var e=x(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return ae=function(){return e},e}var ce=a.div(ae()),se=a.div(ie(),new re("\n    flex-direction: column;\n  ")),le=function(e){function n(){var e,t;p(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return h(b(t=g(this,(e=m(n)).call.apply(e,[this].concat(o)))),"propTypes",{width:Y.string}),t}return y(n,o),d(n,[{key:"render",value:function(){return n=a.div(oe(),this.props.width,new re("\n        width: 100%;\n      ")),t.createElement(n,null,this.props.children)}}]),n}(),ue=function(){function e(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t;p(this,e),"string"==typeof n?(this.top=n,this.right=t,this.bottom=r,this.left=o):(this.top="".concat(n,"px"),this.right="".concat(t,"px"),this.bottom="".concat(r,"px"),this.left="".concat(o,"px"))}return d(e,[{key:"toString",value:function(){return"".concat(this.top," ").concat(this.right," ").concat(this.bottom," ").concat(this.left)}}]),e}(),pe=function(){function e(n,t,r){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];p(this,e),this.name=n,this.path=t,this.exact=o}return d(e,[{key:"getRoute",value:function(){var e=t.createElement(Route,{path:this.path,component:this.component});return this.exact&&(e=t.createElement(Route,{exact:!0,path:this.path,component:this.component})),e}}]),e}();function fe(){var e=x(["\n    height: ",";\n    width: ",";\n  "]);return fe=function(){return e},e}function de(e){var n=a.div(fe(),this.props.height,this.props.width);return t.createElement(n,null)}function he(){var e=x(["\n      font-size: ",';\n      font-weight: bold;\n      font-family: "Roboto Slab", sans-serif;\n      color: ',";\n      opacity: ",";\n    "]);return he=function(){return e},e}function ye(){var e=x(["\n      display: flex;\n      align-items: center;\n    "]);return ye=function(){return e},e}de.propTypes={width:Y.string,height:Y.string};var me=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){return t.createElement(t.Fragment,null,this.props.content)}}]),n}();me.propTypes={position:Y.string};var ve=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){var e=a.div(ye()),n=a.span(he(),this.props.fontSize,this.props.color,this.props.opacity),r=t.createElement(n,null,"<"),o=t.createElement(t.Fragment,null,t.createElement(de,{width:this.props.rightTagSpacing}),t.createElement(n,null," />"));return t.createElement(e,null,t.createElement(me,{position:"left",content:r}),this.props.children,t.createElement(me,{position:"right",content:o}))}}]),n}();function be(){var e=x(['\n    font-family: "Roboto", sans-serif;\n    color: ',";\n    ",";\n  "]);return be=function(){return e},e}function ge(){var e=x(['\n      margin: 12px 0;\n\n      /* Local to this politics */\n      font-family: "Roboto", sans-serif;\n      ',";\n    "]);return ge=function(){return e},e}function xe(){var e=x(["\n      display: flex;\n      width: fit-content;\n      & * {\n        align-self: center;\n      }\n      ",";\n      ",";\n    "]);return xe=function(){return e},e}function we(){var e=x(["\n      ","\n      font-size: 20px;\n    "]);return we=function(){return e},e}function Ee(){var e=x(["\n      ","\n      font-size: 25px;\n    "]);return Ee=function(){return e},e}function Se(){var e=x(["\n      ","\n      font-size: 30px;\n    "]);return Se=function(){return e},e}function ke(){var e=x(["\n      ","\n      font-size: 40px;\n    "]);return ke=function(){return e},e}function Oe(){var e=x(["\n      ","\n      font-size: ",";\n      line-height: ",";\n    "]);return Oe=function(){return e},e}ve.propTypes={color:Y.string,fontSize:Y.string,rightTagSpacing:Y.string,opacity:Y.string},ve.defaultProps={color:E.page.secondaryColor,fontSize:"69px",rightTagSpacing:"13px",opacity:"1"};var Ce=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"getHeading",value:function(e,n,r){var o='\n      font-family: "Roboto Slab", sans-serif;\n      font-weight: bold;\n      margin: '.concat(this.props.margin,";\n      text-transform: lowercase;\n      color: ").concat(E.text.color,";\n    "),i=a.h1(Oe(),o,"53px","53px"),c=a.h2(ke(),o),s=a.h3(Se(),o),l=a.h4(Ee(),o),u=a.h5(we(),o),p=a.div(xe(),this.props.center&&"align-self: center",this.props.style),f="";"h1"===e||void 0===e?f=i:"h2"===e?f=c:"h3"===e?f=s:"h4"===e?f=l:"h5"===e&&(f=u);var d=t.createElement(f,{className:r},this.props.children);return t.createElement(p,null,this.props.codify?t.createElement(ve,null,d):d)}},{key:"render",value:function(){return this.getHeading(this.props.type,this.props.style,this.props.className,this.props.codify,this.props.margin)}}]),n}();Ce.propTypes={type:Y.string,codify:Y.bool,style:Y.string,margin:Y.string,center:Y.bool},Ce.defaultProps={margin:"0 0 20px 0;",center:!1};var Pe=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){return n=a.p(ge(),this.props.style),t.createElement(n,null,this.props.children)}}]),n}();function Te(e){var n=a.a(be(),E.link.color,e.style);return t.createElement(n,{href:e.href},e.children)}Pe.defaultProps={style:""};var je=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,t.Component),d(n,[{key:"render",value:function(){return t.createElement("div",{className:"application"},t.createElement(c,null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,700&display=swap",rel:"stylesheet"}),t.createElement("title",null,"Robbie Cook"),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("style",null,"\n              body {\n                background-color: ".concat(E.backgroundColor,";\n                margin: 0;\n              }\n            "))))}}]),n}();function _e(){var e=x(["\n      ","\n      display: flex;\n      ",";\n    "]);return _e=function(){return e},e}function Re(){var e=x(["\n      color: ",";\n      margin: 0;\n      text-decoration: none;\n      ","\n\n      line-height: 20px;\n    "]);return Re=function(){return e},e}function Me(){var e=x(["\n      border: 3px solid ",";\n      border-radius: 6px;\n      color: ",";\n      transition: 0.03s;\n\n      /* for svg icons */\n      fill: ",";\n      stroke: ",";\n\n      &:hover {\n        & p {\n          border-bottom: 1px solid transparent;\n        }\n        background-color: ",";\n      }\n\n      margin: ",";\n      color: ",";\n      line-height: 27px;\n      font-size: 16px;\n      padding: 5px 12px;\n      font-weight: normal;\n\n      // Styles for active links\n      background-color: ",";\n\n      ",";\n      ",";\n    "]);return Me=function(){return e},e}var $e=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){var e=this,n={button:{border:{color:E.text.color},color:e.props.active?e.props.activeColor?e.props.activeColor:E.link.colorActive:e.props.color?e.props.color:E.link.color}},r=this.props.activeStyle?this.props.activeStyle:"background-color: ".concat(E.link.colorActive),o=a(s)(Me(),E.link.color,E.text.color,E.text.color,E.text.color,this.props.hoverColor?this.props.hoverColor:E.link.color,this.props.margin?this.props.margin:new ue(10,20),E.text.color,this.props.activeColor?this.props.activeColor:E.link.color,this.props.style,this.props.active&&r),i=a.p(Re(),E.text.color,e.props.underline?"border-bottom: 1px solid ".concat(E.text.color,";"):""),c=t.createElement(o,{icon:this.props.icon,label:t.createElement(i,null,this.props.label),onClick:this.props.function,href:this.props.to});return t.createElement(l,{theme:n},c)}}]),n}();$e.propTypes={style:Y.string,color:Y.string,borderColor:Y.string,function:Y.func,icon:Y.elementType,to:Y.string,label:Y.string,active:Y.bool,activeColor:Y.string,activeStyle:Y.string,hoverColor:Y.string};var Ne=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){var e=this;return t.createElement(ze,{buttonRow:this.props.buttonRow},this.props.labels.map(function(n,r){return t.createElement($e,{function:e.props.functions[r],margin:e.props.buttonMargin,style:e.props.buttonStyle,label:n})}))}}]),n}();Ne.propTypes={labels:Y.array.isRequired,functions:Y.array,buttonRow:Y.bool,buttonStyle:Y.string,activeColor:Y.string};var ze=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){var e=this,n=a.div(_e(),"flex-direction: "+(!1!==e.props.buttonRow?"row":"column")+";",this.props.style);return t.createElement(n,null,this.props.children)}}]),n}();function Ae(){var e=x(["\n      display: flex;\n      height: 100%;\n      align-items: center;\n      & > div {\n        overflow: hidden!important;\n        width: 100%;\n        border: 4px solid ",";\n      }\n      \n      // Make arrows bigger on carousel\n\n      & .control-next:before {\n        border-top: "," solid transparent!important;\n        border-bottom: "," solid transparent!important;\n        border-left: "," solid #fff!important;\n      }\n\n      & .control-prev:before {\n        border-top: "," solid transparent!important;\n        border-bottom: "," solid transparent!important;\n        border-right: "," solid #fff!important;\n      }\n    "]);return Ae=function(){return e},e}function De(){var e=x(["\n      max-height: 300px;\n      width: auto !important;\n    "]);return De=function(){return e},e}ze.propTypes={buttonRow:Y.bool};var Ie=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"getCarouselPhotoElement",value:function(e){var n=a.img(De()),r=[],o=!0,i=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var u=s.value;r.push(t.createElement("div",null,t.createElement(n,{src:u})))}}catch(e){i=!0,c=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw c}}return r}},{key:"render",value:function(){var e=a.div(Ae(),E.text.color,"20px","20px","20px","20px","20px","20px");return t.createElement(e,null,t.createElement(u,{showThumbs:!1},this.getCarouselPhotoElement(this.props.photos)))}}]),n}();function Fe(){var e=x(["\n      color: inherit;\n      &:hover {\n        color: inherit;\n      }\n    "]);return Fe=function(){return e},e}function Ve(){var e=x(["\n      width: ","px;\n      height: ","px;\n      border-radius: ","px;\n      line-height: ","px;\n      text-align: center;\n      font-size: ","px;\n      cursor: pointer;\n      background-color: ",";\n      margin: 0 9px;\n      color: ",";\n      transition: 0.1s;\n      transition-timing-function: ease-out;\n\n      &:hover {\n        background-color: ",";\n        color: ",";\n      }\n\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n    "]);return Ve=function(){return e},e}function We(){var e=x(["\n      display: flex;\n      margin-top: 17px;\n      align-items: center;\n    "]);return We=function(){return e},e}u.propTypes={photos:Y.any};var Le=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){var e=a.div(We());return t.createElement(e,null,this.props.children)}}]),n}();Le.propTypes={};var qe=function(e){function n(){return p(this,n),g(this,m(n).apply(this,arguments))}return y(n,o),d(n,[{key:"render",value:function(){var e=a.div(Ve(),50,50,25,50,35,E.text.color,E.backgroundColor,E.link.color,E.text.color,E.link.color,E.text.color),n=a.a(Fe());return t.createElement(e,null,t.createElement(n,{href:this.props.href},this.props.children))}}]),n}();function He(){var e=w(setState(!1),2),n=(e[0],e[1]);useEffect(function(){n(!0)},[]);useContext(ThemeContext);var r=[new pe("Home","/"),new pe("News","/news")];return t.createElement(Be,{navigationLinks:r})}function Be(e){}function Ue(){var e=x(["\n  background-color: ",";\n\n  display: flex;\n  flex-direction: column;\n  padding: ",";\n\n  // Mobile styles\n  ","\n"]);return Ue=function(){return e},e}qe.propTypes={},Be.defaultProps={navigationLinks:[new pe("Home","/"),new pe("News","/news")],height:"60px",backgroundColor:E.navbar.backgroundColor};var Ye=a.div(Ue(),E.backgroundColor,new ue(40,90,0,90),new re("\n    flex-direction: column;\n    padding: ".concat(new ue(20,30),"; \n  "))),Je=t.createContext(E),Ge=function(e){function n(e){return p(this,n),g(this,m(n).call(this,e))}return y(n,o),d(n,[{key:"render",value:function(){return t.createElement(Je.Provider,{value:E},t.createElement(je,null)," ",t.createElement("div",null,t.createElement(He,null),t.createElement("div",{style:this.props.style},t.createElement(Ye,{style:this.props.style},this.props.children))))}}]),n}();function Ke(){var e=x(["\n      min-height: ","px;\n      display: flex;\n      ",";\n    "]);return Ke=function(){return e},e}var Qe=function(e){function n(e){var t;return p(this,n),(t=g(this,m(n).call(this,e))).state={width:0,height:0},t.updateWindowDimensions=t.updateWindowDimensions.bind(b(t)),t}return y(n,o),d(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=a.div(Ke(),this.state.height-J.navbar.height,this.props.style);return t.createElement(e,null,this.props.children)}}]),n}();function Xe(){var e=x(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%"]);return Xe=function(){return e},e}var Ze=a.div(Xe());function en(e){return t.createElement(Ge,null,t.createElement(ce,null,t.createElement(Ce,{type:"h1"},"Sample"),t.createElement(se,null,t.createElement(le,null),t.createElement(le,null))))}export{ne as BorderBox,$e as Button,Ne as ButtonGenerator,ze as ButtonWrapper,Ie as Carousel,ve as Codify,le as Col,Ze as Container,E as DefaultTheme,ue as Dimensions,Ce as Heading,qe as Icon,Le as IconsWrapper,ce as LayoutWrapper,Te as Link,re as MobileView,je as MyHelmet,pe as MyLink,He as NavigationBar,se as Row,Z as SampleComponent,en as SamplePage,Qe as Section,J as Sizes,de as Spacer,Pe as Text,S as ThemeContext,Q as Transition,Ge as WebPage};
//# sourceMappingURL=index.es.js.map