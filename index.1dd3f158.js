function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequire175b;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequire175b=s),s.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("1b2ls",(function(t,n){
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o;e(t.exports,"Fragment",(()=>r),(e=>r=e)),e(t.exports,"jsx",(()=>i),(e=>i=e)),e(t.exports,"jsxs",(()=>o),(e=>o=e));var a=s("acw62"),l=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,i={},s=null,o=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)u.call(t,r)&&!h.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:l,type:e,key:s,ref:o,props:i,_owner:d.current}}r=c,i=f,o=f})),s.register("acw62",(function(e,t){e.exports=s("2pUnB")})),s.register("2pUnB",(function(t,n){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,o,a,l,c,u,d,h,f,p,m,g,v,y,_,b,w,k,x,C,S,E,I,T,N,P,R,O,D,A,L,M,j;e(t.exports,"Children",(()=>r),(e=>r=e)),e(t.exports,"Component",(()=>i),(e=>i=e)),e(t.exports,"Fragment",(()=>s),(e=>s=e)),e(t.exports,"Profiler",(()=>o),(e=>o=e)),e(t.exports,"PureComponent",(()=>a),(e=>a=e)),e(t.exports,"StrictMode",(()=>l),(e=>l=e)),e(t.exports,"Suspense",(()=>c),(e=>c=e)),e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>u),(e=>u=e)),e(t.exports,"cloneElement",(()=>d),(e=>d=e)),e(t.exports,"createContext",(()=>h),(e=>h=e)),e(t.exports,"createElement",(()=>f),(e=>f=e)),e(t.exports,"createFactory",(()=>p),(e=>p=e)),e(t.exports,"createRef",(()=>m),(e=>m=e)),e(t.exports,"forwardRef",(()=>g),(e=>g=e)),e(t.exports,"isValidElement",(()=>v),(e=>v=e)),e(t.exports,"lazy",(()=>y),(e=>y=e)),e(t.exports,"memo",(()=>_),(e=>_=e)),e(t.exports,"startTransition",(()=>b),(e=>b=e)),e(t.exports,"unstable_act",(()=>w),(e=>w=e)),e(t.exports,"useCallback",(()=>k),(e=>k=e)),e(t.exports,"useContext",(()=>x),(e=>x=e)),e(t.exports,"useDebugValue",(()=>C),(e=>C=e)),e(t.exports,"useDeferredValue",(()=>S),(e=>S=e)),e(t.exports,"useEffect",(()=>E),(e=>E=e)),e(t.exports,"useId",(()=>I),(e=>I=e)),e(t.exports,"useImperativeHandle",(()=>T),(e=>T=e)),e(t.exports,"useInsertionEffect",(()=>N),(e=>N=e)),e(t.exports,"useLayoutEffect",(()=>P),(e=>P=e)),e(t.exports,"useMemo",(()=>R),(e=>R=e)),e(t.exports,"useReducer",(()=>O),(e=>O=e)),e(t.exports,"useRef",(()=>D),(e=>D=e)),e(t.exports,"useState",(()=>A),(e=>A=e)),e(t.exports,"useSyncExternalStore",(()=>L),(e=>L=e)),e(t.exports,"useTransition",(()=>M),(e=>M=e)),e(t.exports,"version",(()=>j),(e=>j=e));var F=Symbol.for("react.element"),z=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Y=Symbol.iterator;var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function Z(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||Q}function ee(){}function te(e,t,n){this.props=e,this.context=t,this.refs=J,this.updater=n||Q}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var ne=te.prototype=new ee;ne.constructor=te,X(ne,Z.prototype),ne.isPureReactComponent=!0;var re=Array.isArray,ie=Object.prototype.hasOwnProperty,se={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)ie.call(t,r)&&!oe.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:F,type:e,key:s,ref:o,props:i,_owner:se.current}}function le(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var ce=/\/+/g;function ue(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function de(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case F:case z:o=!0}}if(o)return i=i(o=e),e=""===r?"."+ue(o,0):r,re(i)?(n="",null!=e&&(n=e.replace(ce,"$&/")+"/"),de(i,t,n,"",(function(e){return e}))):null!=i&&(le(i)&&(i=function(e,t){return{$$typeof:F,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ce,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",re(e))for(var a=0;a<e.length;a++){var l=r+ue(s=e[a],a);o+=de(s,t,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Y&&e[Y]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(s=e.next()).done;)o+=de(s=s.value,t,n,l=r+ue(s,a++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function he(e,t,n){if(null==e)return e;var r=[],i=0;return de(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function fe(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var pe={current:null},me={transition:null};r={map:he,forEach:function(e,t,n){he(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return he(e,(function(){t++})),t},toArray:function(e){return he(e,(function(e){return e}))||[]},only:function(e){if(!le(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i=Z,s=U,o=q,a=te,l=V,c=B,u={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:me,ReactCurrentOwner:se},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=se.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ie.call(t,l)&&!oe.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==a?a[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:F,type:e.type,key:i,ref:s,props:r,_owner:o}},h=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:$,_context:e},e.Consumer=e},f=ae,p=function(e){var t=ae.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:W,render:e}},v=le,y=function(e){return{$$typeof:K,_payload:{_status:-1,_result:e},_init:fe}},_=function(e,t){return{$$typeof:G,type:e,compare:void 0===t?null:t}},b=function(e){var t=me.transition;me.transition={};try{e()}finally{me.transition=t}},w=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return pe.current.useCallback(e,t)},x=function(e){return pe.current.useContext(e)},C=function(){},S=function(e){return pe.current.useDeferredValue(e)},E=function(e,t){return pe.current.useEffect(e,t)},I=function(){return pe.current.useId()},T=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)},N=function(e,t){return pe.current.useInsertionEffect(e,t)},P=function(e,t){return pe.current.useLayoutEffect(e,t)},R=function(e,t){return pe.current.useMemo(e,t)},O=function(e,t,n){return pe.current.useReducer(e,t,n)},D=function(e){return pe.current.useRef(e)},A=function(e){return pe.current.useState(e)},L=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)},M=function(){return pe.current.useTransition()},j="18.2.0"})),s.register("Xw6Mv",(function(t,n){
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,o,a,l,c,u,d,h,f,p,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(()=>r),(e=>r=e)),e(t.exports,"createPortal",(()=>i),(e=>i=e)),e(t.exports,"createRoot",(()=>o),(e=>o=e)),e(t.exports,"findDOMNode",(()=>a),(e=>a=e)),e(t.exports,"flushSync",(()=>l),(e=>l=e)),e(t.exports,"hydrate",(()=>c),(e=>c=e)),e(t.exports,"hydrateRoot",(()=>u),(e=>u=e)),e(t.exports,"render",(()=>d),(e=>d=e)),e(t.exports,"unmountComponentAtNode",(()=>h),(e=>h=e)),e(t.exports,"unstable_batchedUpdates",(()=>f),(e=>f=e)),e(t.exports,"unstable_renderSubtreeIntoContainer",(()=>p),(e=>p=e)),e(t.exports,"version",(()=>m),(e=>m=e));var g=s("acw62"),v=s("fO90s");function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _=new Set,b={};function w(e,t){k(e,t),k(e+"Capture",t)}function k(e,t){for(b[e]=t,e=0;e<t.length;e++)_.add(t[e])}var x=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),C=Object.prototype.hasOwnProperty,S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},I={};function T(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){N[e]=new T(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];N[t]=new T(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){N[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){N[e]=new T(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){N[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){N[e]=new T(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){N[e]=new T(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){N[e]=new T(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){N[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)}));var P=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}function O(e,t,n,r){var i=N.hasOwnProperty(t)?N[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!C.call(I,e)||!C.call(E,e)&&(S.test(e)?I[e]=!0:(E[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(P,R);N[t]=new T(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(P,R);N[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(P,R);N[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){N[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)})),N.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){N[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)}));var D=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),U=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var B=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var G=Symbol.iterator;function K(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=G&&e[G]||e["@@iterator"])?e:null}var Y,Q=Object.assign;function X(e){if(void 0===Y)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Y=t&&t[1]||""}return"\n"+Y+e}var J=!1;function Z(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=a);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?X(e):""}function ee(e){switch(e.tag){case 5:return X(e.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1);case 11:return e=Z(e.type.render,!1);case 1:return e=Z(e.type,!0);default:return""}}function te(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case M:return"Fragment";case L:return"Portal";case F:return"Profiler";case j:return"StrictMode";case q:return"Suspense";case $:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case U:return(e.displayName||"Context")+".Consumer";case z:return(e._context.displayName||"Context")+".Provider";case V:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case H:return null!==(t=e.displayName||null)?t:te(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return te(e(t))}catch(e){}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function se(e){e._valueTracker||(e._valueTracker=function(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function oe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ae(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function le(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ce(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=re(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ue(e,t){null!=(t=t.checked)&&O(e,"checked",t,!1)}function de(e,t){ue(e,t);var n=re(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?fe(e,t.type,n):t.hasOwnProperty("defaultValue")&&fe(e,t.type,re(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function he(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function fe(e,t,n){"number"===t&&ae(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pe=Array.isArray;function me(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+re(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function ge(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(y(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ve(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(y(92));if(pe(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:re(n)}}function ye(e,t){var n=re(t.value),r=re(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function _e(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function be(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function we(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?be(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ke,xe,Ce=(xe=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ke=ke||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ke.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return xe(e,t)}))}:xe);function Se(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];function Te(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Ee.hasOwnProperty(e)&&Ee[e]?(""+t).trim():t+"px"}function Ne(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=Te(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Ee).forEach((function(e){Ie.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ee[t]=Ee[e]}))}));var Pe=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,t){if(t){if(Pe[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(y(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(y(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(y(62))}}function Oe(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function Ae(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Le=null,Me=null,je=null;function Fe(e){if(e=Oi(e)){if("function"!=typeof Le)throw Error(y(280));var t=e.stateNode;t&&(t=Ai(t),Le(e.stateNode,e.type,t))}}function ze(e){Me?je?je.push(e):je=[e]:Me=e}function Ue(){if(Me){var e=Me,t=je;if(je=Me=null,Fe(e),t)for(e=0;e<t.length;e++)Fe(t[e])}}function Ve(e,t){return e(t)}function qe(){}var $e=!1;function He(e,t,n){if($e)return e(t,n);$e=!0;try{return Ve(e,t,n)}finally{$e=!1,(null!==Me||null!==je)&&(qe(),Ue())}}function We(e,t){var n=e.stateNode;if(null===n)return null;var r=Ai(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(y(231,t,typeof n));return n}var Be=!1;if(x)try{var Ge={};Object.defineProperty(Ge,"passive",{get:function(){Be=!0}}),window.addEventListener("test",Ge,Ge),window.removeEventListener("test",Ge,Ge)}catch(xe){Be=!1}function Ke(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var Ye=!1,Qe=null,Xe=!1,Je=null,Ze={onError:function(e){Ye=!0,Qe=e}};function et(e,t,n,r,i,s,o,a,l){Ye=!1,Qe=null,Ke.apply(Ze,arguments)}function tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function nt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function rt(e){if(tt(e)!==e)throw Error(y(188))}function it(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=tt(e)))throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return rt(i),e;if(s===r)return rt(i),t;s=s.sibling}throw Error(y(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(3!==n.tag)throw Error(y(188));return n.stateNode.current===n?e:t}(e))?st(e):null}function st(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=st(e);if(null!==t)return t;e=e.sibling}return null}var ot=v.unstable_scheduleCallback,at=v.unstable_cancelCallback,lt=v.unstable_shouldYield,ct=v.unstable_requestPaint,ut=v.unstable_now,dt=v.unstable_getCurrentPriorityLevel,ht=v.unstable_ImmediatePriority,ft=v.unstable_UserBlockingPriority,pt=v.unstable_NormalPriority,mt=v.unstable_LowPriority,gt=v.unstable_IdlePriority,vt=null,yt=null;var _t=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(bt(e)/wt|0)|0},bt=Math.log,wt=Math.LN2;var kt=64,xt=4194304;function Ct(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function St(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=268435455&n;if(0!==o){var a=o&~i;0!==a?r=Ct(a):0!==(s&=o)&&(r=Ct(s))}else 0!==(o=n&~i)?r=Ct(o):0!==s&&(r=Ct(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-_t(t)),r|=e[n],t&=~i;return r}function Et(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function It(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Tt(){var e=kt;return 0==(4194240&(kt<<=1))&&(kt=64),e}function Nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-_t(t)]=n}function Rt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_t(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ot=0;function Dt(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var At,Lt,Mt,jt,Ft,zt=!1,Ut=[],Vt=null,qt=null,$t=null,Ht=new Map,Wt=new Map,Bt=[],Gt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kt(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Ht.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wt.delete(t.pointerId)}}function Yt(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=Oi(t))&&Lt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Qt(e){var t=Ri(e.target);if(null!==t){var n=tt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=nt(n)))return e.blockedOn=t,void Ft(e.priority,(function(){Mt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Xt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=cn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=Oi(n))&&Lt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);De=r,n.target.dispatchEvent(r),De=null,t.shift()}return!0}function Jt(e,t,n){Xt(e)&&n.delete(t)}function Zt(){zt=!1,null!==Vt&&Xt(Vt)&&(Vt=null),null!==qt&&Xt(qt)&&(qt=null),null!==$t&&Xt($t)&&($t=null),Ht.forEach(Jt),Wt.forEach(Jt)}function en(e,t){e.blockedOn===t&&(e.blockedOn=null,zt||(zt=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Zt)))}function tn(e){function t(t){return en(t,e)}if(0<Ut.length){en(Ut[0],e);for(var n=1;n<Ut.length;n++){var r=Ut[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Vt&&en(Vt,e),null!==qt&&en(qt,e),null!==$t&&en($t,e),Ht.forEach(t),Wt.forEach(t),n=0;n<Bt.length;n++)(r=Bt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&null===(n=Bt[0]).blockedOn;)Qt(n),null===n.blockedOn&&Bt.shift()}var nn=D.ReactCurrentBatchConfig,rn=!0;function sn(e,t,n,r){var i=Ot,s=nn.transition;nn.transition=null;try{Ot=1,an(e,t,n,r)}finally{Ot=i,nn.transition=s}}function on(e,t,n,r){var i=Ot,s=nn.transition;nn.transition=null;try{Ot=4,an(e,t,n,r)}finally{Ot=i,nn.transition=s}}function an(e,t,n,r){if(rn){var i=cn(e,t,n,r);if(null===i)ri(e,t,r,ln,n),Kt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Vt=Yt(Vt,e,t,n,r,i),!0;case"dragenter":return qt=Yt(qt,e,t,n,r,i),!0;case"mouseover":return $t=Yt($t,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ht.set(s,Yt(Ht.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wt.set(s,Yt(Wt.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Kt(e,r),4&t&&-1<Gt.indexOf(e)){for(;null!==i;){var s=Oi(i);if(null!==s&&At(s),null===(s=cn(e,t,n,r))&&ri(e,t,r,ln,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else ri(e,t,r,null,n)}}var ln=null;function cn(e,t,n,r){if(ln=null,null!==(e=Ri(e=Ae(r))))if(null===(t=tt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=nt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function un(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case ht:return 1;case ft:return 4;case pt:case mt:return 16;case gt:return 536870912;default:return 16}default:return 16}}var dn=null,hn=null,fn=null;function pn(){if(fn)return fn;var e,t,n=hn,r=n.length,i="value"in dn?dn.value:dn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return fn=i.slice(e,1<t?1-t:void 0)}function mn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function gn(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?gn:vn,this.isPropagationStopped=vn,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=gn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=gn)},persist:function(){},isPersistent:gn}),t}var _n,bn,wn,kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xn=yn(kn),Cn=Q({},kn,{view:0,detail:0}),Sn=yn(Cn),En=Q({},Cn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wn&&(wn&&"mousemove"===e.type?(_n=e.screenX-wn.screenX,bn=e.screenY-wn.screenY):bn=_n=0,wn=e),_n)},movementY:function(e){return"movementY"in e?e.movementY:bn}}),In=yn(En),Tn=yn(Q({},En,{dataTransfer:0})),Nn=yn(Q({},Cn,{relatedTarget:0})),Pn=yn(Q({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Q({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),On=yn(Rn),Dn=yn(Q({},kn,{data:0})),An={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ln={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Mn[e])&&!!t[e]}function Fn(){return jn}var zn=Q({},Cn,{key:function(e){if(e.key){var t=An[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=mn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Ln[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fn,charCode:function(e){return"keypress"===e.type?mn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?mn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Un=yn(zn),Vn=yn(Q({},En,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=yn(Q({},Cn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fn})),$n=yn(Q({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Hn=Q({},En,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wn=yn(Hn),Bn=[9,13,27,32],Gn=x&&"CompositionEvent"in window,Kn=null;x&&"documentMode"in document&&(Kn=document.documentMode);var Yn=x&&"TextEvent"in window&&!Kn,Qn=x&&(!Gn||Kn&&8<Kn&&11>=Kn),Xn=String.fromCharCode(32),Jn=!1;function Zn(e,t){switch(e){case"keyup":return-1!==Bn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function er(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var tr=!1;var nr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nr[e.type]:"textarea"===t}function ir(e,t,n,r){ze(r),0<(t=si(t,"onChange")).length&&(n=new xn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var sr=null,or=null;function ar(e){Xr(e,0)}function lr(e){if(oe(Di(e)))return e}function cr(e,t){if("change"===e)return t}var ur=!1;if(x){var dr;if(x){var hr="oninput"in document;if(!hr){var fr=document.createElement("div");fr.setAttribute("oninput","return;"),hr="function"==typeof fr.oninput}dr=hr}else dr=!1;ur=dr&&(!document.documentMode||9<document.documentMode)}function pr(){sr&&(sr.detachEvent("onpropertychange",mr),or=sr=null)}function mr(e){if("value"===e.propertyName&&lr(or)){var t=[];ir(t,or,e,Ae(e)),He(ar,t)}}function gr(e,t,n){"focusin"===e?(pr(),or=n,(sr=t).attachEvent("onpropertychange",mr)):"focusout"===e&&pr()}function vr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return lr(or)}function yr(e,t){if("click"===e)return lr(t)}function _r(e,t){if("input"===e||"change"===e)return lr(t)}var br="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function wr(e,t){if(br(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!C.call(t,i)||!br(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xr(e,t){var n,r=kr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kr(r)}}function Cr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Cr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Sr(){for(var e=window,t=ae();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=ae((e=t.contentWindow).document)}return t}function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function Ir(e){var t=Sr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cr(n.ownerDocument.documentElement,n)){if(null!==r&&Er(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=xr(n,s);var o=xr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tr=x&&"documentMode"in document&&11>=document.documentMode,Nr=null,Pr=null,Rr=null,Or=!1;function Dr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Or||null==Nr||Nr!==ae(r)||("selectionStart"in(r=Nr)&&Er(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Rr&&wr(Rr,r)||(Rr=r,0<(r=si(Pr,"onSelect")).length&&(t=new xn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},Mr={},jr={};function Fr(e){if(Mr[e])return Mr[e];if(!Lr[e])return e;var t,n=Lr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Mr[e]=n[t];return e}x&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);var zr=Fr("animationend"),Ur=Fr("animationiteration"),Vr=Fr("animationstart"),qr=Fr("transitionend"),$r=new Map,Hr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(e,t){$r.set(e,t),w(t,[e])}for(var Br=0;Br<Hr.length;Br++){var Gr=Hr[Br];Wr(Gr.toLowerCase(),"on"+(Gr[0].toUpperCase()+Gr.slice(1)))}Wr(zr,"onAnimationEnd"),Wr(Ur,"onAnimationIteration"),Wr(Vr,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(qr,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function Qr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,l){if(et.apply(this,arguments),Ye){if(!Ye)throw Error(y(198));var c=Qe;Ye=!1,Qe=null,Xe||(Xe=!0,Je=c)}}(r,t,void 0,e),e.currentTarget=null}function Xr(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qr(i,a,c),s=l}else for(o=0;o<r.length;o++){if(l=(a=r[o]).instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qr(i,a,c),s=l}}}if(Xe)throw e=Je,Xe=!1,Je=null,e}function Jr(e,t){var n=t[Ti];void 0===n&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(ni(t,e,2,!1),n.add(r))}function Zr(e,t,n){var r=0;t&&(r|=4),ni(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[ei]){e[ei]=!0,_.forEach((function(t){"selectionchange"!==t&&(Yr.has(t)||Zr(t,!1,e),Zr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ei]||(t[ei]=!0,Zr("selectionchange",!1,t))}}function ni(e,t,n,r){switch(un(t)){case 1:var i=sn;break;case 4:i=on;break;default:i=an}n=i.bind(null,t,n,e),i=void 0,!Be||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=Ri(a)))return;if(5===(l=o.tag)||6===l){r=s=o;continue e}a=a.parentNode}}r=r.return}He((function(){var r=s,i=Ae(n),o=[];e:{var a=$r.get(e);if(void 0!==a){var l=xn,c=e;switch(e){case"keypress":if(0===mn(n))break e;case"keydown":case"keyup":l=Un;break;case"focusin":c="focus",l=Nn;break;case"focusout":c="blur",l=Nn;break;case"beforeblur":case"afterblur":l=Nn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=In;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=Tn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=qn;break;case zr:case Ur:case Vr:l=Pn;break;case qr:l=$n;break;case"scroll":l=Sn;break;case"wheel":l=Wn;break;case"copy":case"cut":case"paste":l=On;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Vn}var u=0!=(4&t),d=!u&&"scroll"===e,h=u?null!==a?a+"Capture":null:a;u=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=We(p,h))&&u.push(ii(p,m,f)))),d)break;p=p.return}0<u.length&&(a=new l(a,c,null,n,i),o.push({event:a,listeners:u}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||n===De||!(c=n.relatedTarget||n.fromElement)||!Ri(c)&&!c[Ii])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?Ri(c):null)&&(c!==(d=tt(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=In,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=Vn,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?a:Di(l),f=null==c?a:Di(c),(a=new u(m,p+"leave",l,n,i)).target=d,a.relatedTarget=f,m=null,Ri(i)===r&&((u=new u(h,p+"enter",c,n,i)).target=f,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(h=c,p=0,f=u=l;f;f=oi(f))p++;for(f=0,m=h;m;m=oi(m))f++;for(;0<p-f;)u=oi(u),p--;for(;0<f-p;)h=oi(h),f--;for(;p--;){if(u===h||null!==h&&u===h.alternate)break e;u=oi(u),h=oi(h)}u=null}else u=null;null!==l&&ai(o,a,l,u,!1),null!==c&&null!==d&&ai(o,d,c,u,!0)}if("select"===(l=(a=r?Di(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=cr;else if(rr(a))if(ur)g=_r;else{g=vr;var v=gr}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=yr);switch(g&&(g=g(e,r))?ir(o,g,n,i):(v&&v(e,a,r),"focusout"===e&&(v=a._wrapperState)&&v.controlled&&"number"===a.type&&fe(a,"number",a.value)),v=r?Di(r):window,e){case"focusin":(rr(v)||"true"===v.contentEditable)&&(Nr=v,Pr=r,Rr=null);break;case"focusout":Rr=Pr=Nr=null;break;case"mousedown":Or=!0;break;case"contextmenu":case"mouseup":case"dragend":Or=!1,Dr(o,n,i);break;case"selectionchange":if(Tr)break;case"keydown":case"keyup":Dr(o,n,i)}var y;if(Gn)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else tr?Zn(e,n)&&(_="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(_="onCompositionStart");_&&(Qn&&"ko"!==n.locale&&(tr||"onCompositionStart"!==_?"onCompositionEnd"===_&&tr&&(y=pn()):(hn="value"in(dn=i)?dn.value:dn.textContent,tr=!0)),0<(v=si(r,_)).length&&(_=new Dn(_,e,null,n,i),o.push({event:_,listeners:v}),y?_.data=y:null!==(y=er(n))&&(_.data=y))),(y=Yn?function(e,t){switch(e){case"compositionend":return er(t);case"keypress":return 32!==t.which?null:(Jn=!0,Xn);case"textInput":return(e=t.data)===Xn&&Jn?null:e;default:return null}}(e,n):function(e,t){if(tr)return"compositionend"===e||!Gn&&Zn(e,t)?(e=pn(),fn=hn=dn=null,tr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=si(r,"onBeforeInput")).length&&(i=new Dn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=y))}Xr(o,t)}))}function ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function si(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=We(e,n))&&r.unshift(ii(e,s,i)),null!=(s=We(e,t))&&r.push(ii(e,s,i))),e=e.return}return r}function oi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function ai(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==c&&(a=c,i?null!=(l=We(n,s))&&o.unshift(ii(n,l,a)):i||null!=(l=We(n,s))&&o.push(ii(n,l,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var li=/\r\n?/g,ci=/\u0000|\uFFFD/g;function ui(e){return("string"==typeof e?e:""+e).replace(li,"\n").replace(ci,"")}function di(e,t,n){if(t=ui(t),ui(e)!==t&&n)throw Error(y(425))}function hi(){}var fi=null,pi=null;function mi(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var gi="function"==typeof setTimeout?setTimeout:void 0,vi="function"==typeof clearTimeout?clearTimeout:void 0,yi="function"==typeof Promise?Promise:void 0,_i="function"==typeof queueMicrotask?queueMicrotask:void 0!==yi?function(e){return yi.resolve(null).then(e).catch(bi)}:gi;function bi(e){setTimeout((function(){throw e}))}function wi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void tn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);tn(t)}function ki(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function xi(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),Si="__reactFiber$"+Ci,Ei="__reactProps$"+Ci,Ii="__reactContainer$"+Ci,Ti="__reactEvents$"+Ci,Ni="__reactListeners$"+Ci,Pi="__reactHandles$"+Ci;function Ri(e){var t=e[Si];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ii]||n[Si]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=xi(e);null!==e;){if(n=e[Si])return n;e=xi(e)}return t}n=(e=n).parentNode}return null}function Oi(e){return!(e=e[Si]||e[Ii])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Di(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(y(33))}function Ai(e){return e[Ei]||null}var Li=[],Mi=-1;function ji(e){return{current:e}}function Fi(e){0>Mi||(e.current=Li[Mi],Li[Mi]=null,Mi--)}function zi(e,t){Mi++,Li[Mi]=e.current,e.current=t}var Ui={},Vi=ji(Ui),qi=ji(!1),$i=Ui;function Hi(e,t){var n=e.type.contextTypes;if(!n)return Ui;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Wi(e){return null!=(e=e.childContextTypes)}function Bi(){Fi(qi),Fi(Vi)}function Gi(e,t,n){if(Vi.current!==Ui)throw Error(y(168));zi(Vi,t),zi(qi,n)}function Ki(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(y(108,ne(e)||"Unknown",i));return Q({},n,r)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ui,$i=Vi.current,zi(Vi,e),zi(qi,qi.current),!0}function Qi(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Ki(e,t,$i),r.__reactInternalMemoizedMergedChildContext=e,Fi(qi),Fi(Vi),zi(Vi,e)):Fi(qi),zi(qi,n)}var Xi=null,Ji=!1,Zi=!1;function es(e){null===Xi?Xi=[e]:Xi.push(e)}function ts(){if(!Zi&&null!==Xi){Zi=!0;var e=0,t=Ot;try{var n=Xi;for(Ot=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Xi=null,Ji=!1}catch(t){throw null!==Xi&&(Xi=Xi.slice(e+1)),ot(ht,ts),t}finally{Ot=t,Zi=!1}}return null}var ns=[],rs=0,is=null,ss=0,os=[],as=0,ls=null,cs=1,us="";function ds(e,t){ns[rs++]=ss,ns[rs++]=is,is=e,ss=t}function hs(e,t,n){os[as++]=cs,os[as++]=us,os[as++]=ls,ls=e;var r=cs;e=us;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cs=1<<32-_t(t)+i|n<<i|r,us=s+e}else cs=1<<s|n<<i|r,us=e}function fs(e){null!==e.return&&(ds(e,1),hs(e,1,0))}function ps(e){for(;e===is;)is=ns[--rs],ns[rs]=null,ss=ns[--rs],ns[rs]=null;for(;e===ls;)ls=os[--as],os[as]=null,us=os[--as],os[as]=null,cs=os[--as],os[as]=null}var ms=null,gs=null,vs=!1,ys=null;function _s(e,t){var n=Wc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function bs(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ms=e,gs=ki(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ms=e,gs=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==ls?{id:cs,overflow:us}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Wc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ms=e,gs=null,!0);default:return!1}}function ws(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function ks(e){if(vs){var t=gs;if(t){var n=t;if(!bs(e,t)){if(ws(e))throw Error(y(418));t=ki(n.nextSibling);var r=ms;t&&bs(e,t)?_s(r,n):(e.flags=-4097&e.flags|2,vs=!1,ms=e)}}else{if(ws(e))throw Error(y(418));e.flags=-4097&e.flags|2,vs=!1,ms=e}}}function xs(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ms=e}function Cs(e){if(e!==ms)return!1;if(!vs)return xs(e),vs=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!mi(e.type,e.memoizedProps)),t&&(t=gs)){if(ws(e))throw Ss(),Error(y(418));for(;t;)_s(e,t),t=ki(t.nextSibling)}if(xs(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){gs=ki(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}gs=null}}else gs=ms?ki(e.stateNode.nextSibling):null;return!0}function Ss(){for(var e=gs;e;)e=ki(e.nextSibling)}function Es(){gs=ms=null,vs=!1}function Is(e){null===ys?ys=[e]:ys.push(e)}var Ts=D.ReactCurrentBatchConfig;function Ns(e,t){if(e&&e.defaultProps){for(var n in t=Q({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Ps=ji(null),Rs=null,Os=null,Ds=null;function As(){Ds=Os=Rs=null}function Ls(e){var t=Ps.current;Fi(Ps),e._currentValue=t}function Ms(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function js(e,t){Rs=e,Ds=Os=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(Da=!0),e.firstContext=null)}function Fs(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},null===Os){if(null===Rs)throw Error(y(308));Os=e,Rs.dependencies={lanes:0,firstContext:e}}else Os=Os.next=e;return t}var zs=null;function Us(e){null===zs?zs=[e]:zs.push(e)}function Vs(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Us(t)):(n.next=i.next,i.next=n),t.interleaved=n,qs(e,r)}function qs(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var $s=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ws(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bs(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gs(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&ql)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qs(e,n)}return null===(i=r.interleaved)?(t.next=t,Us(r)):(t.next=i.next,i.next=t),r.interleaved=t,qs(e,n)}function Ks(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}function Ys(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qs(e,t,n,r){var i=e.updateQueue;$s=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,c=l.next;l.next=null,null===o?s=c:o.next=c,o=l;var u=e.alternate;null!==u&&((a=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===a?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(null!==s){var d=i.baseState;for(o=0,u=c=l=null,a=s;;){var h=a.lane,f=a.eventTime;if((r&h)===h){null!==u&&(u=u.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=e,m=a;switch(h=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){d=p.call(f,d,h);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(h="function"==typeof(p=m.payload)?p.call(f,d,h):p))break e;d=Q({},d,h);break e;case 2:$s=!0}}null!==a.callback&&0!==a.lane&&(e.flags|=64,null===(h=i.effects)?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},null===u?(c=u=f,l=d):u=u.next=f,o|=h;if(null===(a=a.next)){if(null===(a=i.shared.pending))break;a=(h=a).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Ql|=o,e.lanes=o,e.memoizedState=d}}function Xs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(y(191,i));i.call(r)}}}var Js=(new g.Component).refs;function Zs(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Q({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var eo={isMounted:function(e){return!!(e=e._reactInternals)&&tt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pc(),i=mc(e),s=Bs(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Gs(e,s,i))&&(gc(t,e,i,r),Ks(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pc(),i=mc(e),s=Bs(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Gs(e,s,i))&&(gc(t,e,i,r),Ks(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pc(),r=mc(e),i=Bs(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Gs(e,i,r))&&(gc(t,e,r,n),Ks(t,e,r))}};function to(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!wr(n,r)||!wr(i,s))}function no(e,t,n){var r=!1,i=Ui,s=t.contextType;return"object"==typeof s&&null!==s?s=Fs(s):(i=Wi(t)?$i:Vi.current,s=(r=null!=(r=t.contextTypes))?Hi(e,i):Ui),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ro(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function io(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Js,Hs(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Fs(s):(s=Wi(t)?$i:Vi.current,i.context=Hi(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Zs(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&eo.enqueueReplaceState(i,i.state,null),Qs(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function so(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:(t=function(e){var t=i.refs;t===Js&&(t=i.refs={}),null===e?delete t[s]:t[s]=e},t._stringRef=s,t)}if("string"!=typeof e)throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ao(e){return(0,e._init)(e._payload)}function lo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Gc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Xc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===M?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===W&&ao(s)===t.type)?((r=i(t,n.props)).ref=so(e,t,n),r.return=e,r):((r=Kc(n.type,n.key,n.props,null,e.mode,r)).ref=so(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Jc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,s){return null===t||7!==t.tag?((t=Yc(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Xc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case A:return(n=Kc(t.type,t.key,t.props,null,e.mode,n)).ref=so(e,null,t),n.return=e,n;case L:return(t=Jc(t,e.mode,n)).return=e,t;case W:return d(e,(0,t._init)(t._payload),n)}if(pe(t)||K(t))return(t=Yc(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case A:return n.key===i?l(e,t,n,r):null;case L:return n.key===i?c(e,t,n,r):null;case W:return h(e,t,(i=n._init)(n._payload),r)}if(pe(n)||K(n))return null!==i?null:u(e,t,n,r,null);oo(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case A:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case L:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case W:return f(e,t,n,(0,r._init)(r._payload),i)}if(pe(r)||K(r))return u(t,e=e.get(n)||null,r,i,null);oo(t,r)}return null}function p(i,o,a,l){for(var c=null,u=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var v=h(i,p,a[m],l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),o=s(v,o,m),null===u?c=v:u.sibling=v,u=v,p=g}if(m===a.length)return n(i,p),vs&&ds(i,m),c;if(null===p){for(;m<a.length;m++)null!==(p=d(i,a[m],l))&&(o=s(p,o,m),null===u?c=p:u.sibling=p,u=p);return vs&&ds(i,m),c}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&p.forEach((function(e){return t(i,e)})),vs&&ds(i,m),c}function m(i,o,a,l){var c=K(a);if("function"!=typeof c)throw Error(y(150));if(null==(a=c.call(a)))throw Error(y(151));for(var u=c=null,p=o,m=o=0,g=null,v=a.next();null!==p&&!v.done;m++,v=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var _=h(i,p,v.value,l);if(null===_){null===p&&(p=g);break}e&&p&&null===_.alternate&&t(i,p),o=s(_,o,m),null===u?c=_:u.sibling=_,u=_,p=g}if(v.done)return n(i,p),vs&&ds(i,m),c;if(null===p){for(;!v.done;m++,v=a.next())null!==(v=d(i,v.value,l))&&(o=s(v,o,m),null===u?c=v:u.sibling=v,u=v);return vs&&ds(i,m),c}for(p=r(i,p);!v.done;m++,v=a.next())null!==(v=f(p,i,m,v.value,l))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),o=s(v,o,m),null===u?c=v:u.sibling=v,u=v);return e&&p.forEach((function(e){return t(i,e)})),vs&&ds(i,m),c}return function e(r,s,a,l){if("object"==typeof a&&null!==a&&a.type===M&&null===a.key&&(a=a.props.children),"object"==typeof a&&null!==a){switch(a.$$typeof){case A:e:{for(var c=a.key,u=s;null!==u;){if(u.key===c){if((c=a.type)===M){if(7===u.tag){n(r,u.sibling),(s=i(u,a.props.children)).return=r,r=s;break e}}else if(u.elementType===c||"object"==typeof c&&null!==c&&c.$$typeof===W&&ao(c)===u.type){n(r,u.sibling),(s=i(u,a.props)).ref=so(r,u,a),s.return=r,r=s;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===M?((s=Yc(a.props.children,r.mode,l,a.key)).return=r,r=s):((l=Kc(a.type,a.key,a.props,null,r.mode,l)).ref=so(r,s,a),l.return=r,r=l)}return o(r);case L:e:{for(u=a.key;null!==s;){if(s.key===u){if(4===s.tag&&s.stateNode.containerInfo===a.containerInfo&&s.stateNode.implementation===a.implementation){n(r,s.sibling),(s=i(s,a.children||[])).return=r,r=s;break e}n(r,s);break}t(r,s),s=s.sibling}(s=Jc(a,r.mode,l)).return=r,r=s}return o(r);case W:return e(r,s,(u=a._init)(a._payload),l)}if(pe(a))return p(r,s,a,l);if(K(a))return m(r,s,a,l);oo(r,a)}return"string"==typeof a&&""!==a||"number"==typeof a?(a=""+a,null!==s&&6===s.tag?(n(r,s.sibling),(s=i(s,a)).return=r,r=s):(n(r,s),(s=Xc(a,r.mode,l)).return=r,r=s),o(r)):n(r,s)}}var co=lo(!0),uo=lo(!1),ho={},fo=ji(ho),po=ji(ho),mo=ji(ho);function go(e){if(e===ho)throw Error(y(174));return e}function vo(e,t){switch(zi(mo,t),zi(po,e),zi(fo,ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:we(null,"");break;default:t=we(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Fi(fo),zi(fo,t)}function yo(){Fi(fo),Fi(po),Fi(mo)}function _o(e){go(mo.current);var t=go(fo.current),n=we(t,e.type);t!==n&&(zi(po,e),zi(fo,n))}function bo(e){po.current===e&&(Fi(fo),Fi(po))}var wo=ji(0);function ko(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=[];function Co(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var So=D.ReactCurrentDispatcher,Eo=D.ReactCurrentBatchConfig,Io=0,To=null,No=null,Po=null,Ro=!1,Oo=!1,Do=0,Ao=0;function Lo(){throw Error(y(321))}function Mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!br(e[n],t[n]))return!1;return!0}function jo(e,t,n,r,i,s){if(Io=s,To=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=null===e||null===e.memoizedState?ba:wa,e=n(r,i),Oo){s=0;do{if(Oo=!1,Do=0,25<=s)throw Error(y(301));s+=1,Po=No=null,t.updateQueue=null,So.current=ka,e=n(r,i)}while(Oo)}if(So.current=_a,t=null!==No&&null!==No.next,Io=0,Po=No=To=null,Ro=!1,t)throw Error(y(300));return e}function Fo(){var e=0!==Do;return Do=0,e}function zo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Po?To.memoizedState=Po=e:Po=Po.next=e,Po}function Uo(){if(null===No){var e=To.alternate;e=null!==e?e.memoizedState:null}else e=No.next;var t=null===Po?To.memoizedState:Po.next;if(null!==t)Po=t,No=e;else{if(null===e)throw Error(y(310));e={memoizedState:(No=e).memoizedState,baseState:No.baseState,baseQueue:No.baseQueue,queue:No.queue,next:null},null===Po?To.memoizedState=Po=e:Po=Po.next=e}return Po}function Vo(e,t){return"function"==typeof t?t(e):t}function qo(e){var t=Uo(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=No,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Io&u)===u)null!==l&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===l?(a=l=d,o=r):l=l.next=d,To.lanes|=u,Ql|=u}c=c.next}while(null!==c&&c!==s);null===l?o=r:l.next=a,br(r,t.memoizedState)||(Da=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,To.lanes|=s,Ql|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $o(e){var t=Uo(),n=t.queue;if(null===n)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);br(s,t.memoizedState)||(Da=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ho(){}function Wo(e,t){var n=To,r=Uo(),i=t(),s=!br(r.memoizedState,i);if(s&&(r.memoizedState=i,Da=!0),r=r.queue,ra(Ko.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==Po&&1&Po.memoizedState.tag){if(n.flags|=2048,Jo(9,Go.bind(null,n,r,i,t),void 0,null),null===$l)throw Error(y(349));0!=(30&Io)||Bo(n,t,i)}return i}function Bo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=To.updateQueue)?(t={lastEffect:null,stores:null},To.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,Yo(t)&&Qo(e)}function Ko(e,t,n){return n((function(){Yo(t)&&Qo(e)}))}function Yo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!br(e,n)}catch(e){return!0}}function Qo(e){var t=qs(e,1);null!==t&&gc(t,e,1,-1)}function Xo(e){var t=zo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=ma.bind(null,To,e),[t.memoizedState,e]}function Jo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=To.updateQueue)?(t={lastEffect:null,stores:null},To.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Zo(){return Uo().memoizedState}function ea(e,t,n,r){var i=zo();To.flags|=e,i.memoizedState=Jo(1|t,n,void 0,void 0===r?null:r)}function ta(e,t,n,r){var i=Uo();r=void 0===r?null:r;var s=void 0;if(null!==No){var o=No.memoizedState;if(s=o.destroy,null!==r&&Mo(r,o.deps))return void(i.memoizedState=Jo(t,n,s,r))}To.flags|=e,i.memoizedState=Jo(1|t,n,s,r)}function na(e,t){return ea(8390656,8,e,t)}function ra(e,t){return ta(2048,8,e,t)}function ia(e,t){return ta(4,2,e,t)}function sa(e,t){return ta(4,4,e,t)}function oa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function aa(e,t,n){return n=null!=n?n.concat([e]):null,ta(4,4,oa.bind(null,t,e),n)}function la(){}function ca(e,t){var n=Uo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ua(e,t){var n=Uo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function da(e,t,n){return 0==(21&Io)?(e.baseState&&(e.baseState=!1,Da=!0),e.memoizedState=n):(br(n,t)||(n=Tt(),To.lanes|=n,Ql|=n,e.baseState=!0),t)}function ha(e,t){var n=Ot;Ot=0!==n&&4>n?n:4,e(!0);var r=Eo.transition;Eo.transition={};try{e(!1),t()}finally{Ot=n,Eo.transition=r}}function fa(){return Uo().memoizedState}function pa(e,t,n){var r=mc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ga(e))va(t,n);else if(null!==(n=Vs(e,t,n,r))){gc(n,e,r,pc()),ya(n,t,r)}}function ma(e,t,n){var r=mc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ga(e))va(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,br(a,o)){var l=t.interleaved;return null===l?(i.next=i,Us(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(e){}null!==(n=Vs(e,t,i,r))&&(gc(n,e,r,i=pc()),ya(n,t,r))}}function ga(e){var t=e.alternate;return e===To||null!==t&&t===To}function va(e,t){Oo=Ro=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ya(e,t,n){if(0!=(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Rt(e,n)}}var _a={readContext:Fs,useCallback:Lo,useContext:Lo,useEffect:Lo,useImperativeHandle:Lo,useInsertionEffect:Lo,useLayoutEffect:Lo,useMemo:Lo,useReducer:Lo,useRef:Lo,useState:Lo,useDebugValue:Lo,useDeferredValue:Lo,useTransition:Lo,useMutableSource:Lo,useSyncExternalStore:Lo,useId:Lo,unstable_isNewReconciler:!1},ba={readContext:Fs,useCallback:function(e,t){return zo().memoizedState=[e,void 0===t?null:t],e},useContext:Fs,useEffect:na,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ea(4194308,4,oa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ea(4194308,4,e,t)},useInsertionEffect:function(e,t){return ea(4,2,e,t)},useMemo:function(e,t){var n=zo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pa.bind(null,To,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},zo().memoizedState=e},useState:Xo,useDebugValue:la,useDeferredValue:function(e){return zo().memoizedState=e},useTransition:function(){var e=Xo(!1),t=e[0];return e=ha.bind(null,e[1]),zo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=To,i=zo();if(vs){if(void 0===n)throw Error(y(407));n=n()}else{if(n=t(),null===$l)throw Error(y(349));0!=(30&Io)||Bo(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,na(Ko.bind(null,r,s,e),[e]),r.flags|=2048,Jo(9,Go.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=zo(),t=$l.identifierPrefix;if(vs){var n=us;t=":"+t+"R"+(n=(cs&~(1<<32-_t(cs)-1)).toString(32)+n),0<(n=Do++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=Ao++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wa={readContext:Fs,useCallback:ca,useContext:Fs,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:sa,useMemo:ua,useReducer:qo,useRef:Zo,useState:function(){return qo(Vo)},useDebugValue:la,useDeferredValue:function(e){return da(Uo(),No.memoizedState,e)},useTransition:function(){return[qo(Vo)[0],Uo().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Wo,useId:fa,unstable_isNewReconciler:!1},ka={readContext:Fs,useCallback:ca,useContext:Fs,useEffect:ra,useImperativeHandle:aa,useInsertionEffect:ia,useLayoutEffect:sa,useMemo:ua,useReducer:$o,useRef:Zo,useState:function(){return $o(Vo)},useDebugValue:la,useDeferredValue:function(e){var t=Uo();return null===No?t.memoizedState=e:da(t,No.memoizedState,e)},useTransition:function(){return[$o(Vo)[0],Uo().memoizedState]},useMutableSource:Ho,useSyncExternalStore:Wo,useId:fa,unstable_isNewReconciler:!1};function xa(e,t){try{var n="",r=t;do{n+=ee(r),r=r.return}while(r);var i=n}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function Ca(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function Sa(e,t){try{console.error(t.value)}catch(e){setTimeout((function(){throw e}))}}var Ea="function"==typeof WeakMap?WeakMap:Map;function Ia(e,t,n){(n=Bs(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ic||(ic=!0,sc=r),Sa(0,t)},n}function Ta(e,t,n){(n=Bs(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Sa(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){Sa(0,t),"function"!=typeof r&&(null===oc?oc=new Set([this]):oc.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function Na(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Ea;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zc.bind(null,e,t,n),t.then(e,e))}function Pa(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function Ra(e,t,n,r,i){return 0==(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Bs(-1,1)).tag=2,Gs(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Oa=D.ReactCurrentOwner,Da=!1;function Aa(e,t,n,r){t.child=null===e?uo(t,null,n,r):co(t,e.child,n,r)}function La(e,t,n,r,i){n=n.render;var s=t.ref;return js(t,i),r=jo(e,t,n,r,s,i),n=Fo(),null===e||Da?(vs&&n&&fs(t),t.flags|=1,Aa(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Ma(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Bc(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Kc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,ja(e,t,s,r,i))}if(s=e.child,0==(e.lanes&i)){var o=s.memoizedProps;if((n=null!==(n=n.compare)?n:wr)(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,(e=Gc(s,r)).ref=t.ref,e.return=t,t.child=e}function ja(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(wr(s,r)&&e.ref===t.ref){if(Da=!1,t.pendingProps=r=s,0==(e.lanes&i))return t.lanes=e.lanes,il(e,t,i);0!=(131072&e.flags)&&(Da=!0)}}return Ua(e,t,n,r,i)}function Fa(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},zi(Gl,Bl),Bl|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,zi(Gl,Bl),Bl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,zi(Gl,Bl),Bl|=r}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,zi(Gl,Bl),Bl|=r;return Aa(e,t,i,n),t.child}function za(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ua(e,t,n,r,i){var s=Wi(n)?$i:Vi.current;return s=Hi(t,s),js(t,i),n=jo(e,t,n,r,s,i),r=Fo(),null===e||Da?(vs&&r&&fs(t),t.flags|=1,Aa(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,il(e,t,i))}function Va(e,t,n,r,i){if(Wi(n)){var s=!0;Yi(t)}else s=!1;if(js(t,i),null===t.stateNode)rl(e,t),no(t,n,r),io(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;"object"==typeof c&&null!==c?c=Fs(c):c=Hi(t,c=Wi(n)?$i:Vi.current);var u=n.getDerivedStateFromProps,d="function"==typeof u||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==c)&&ro(t,o,r,c),$s=!1;var h=t.memoizedState;o.state=h,Qs(t,r,o,i),l=t.memoizedState,a!==r||h!==l||qi.current||$s?("function"==typeof u&&(Zs(t,n,u,r),l=t.memoizedState),(a=$s||to(t,n,a,r,h,l,c))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ws(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ns(t.type,a),o.props=c,d=t.pendingProps,h=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Fs(l):l=Hi(t,l=Wi(n)?$i:Vi.current);var f=n.getDerivedStateFromProps;(u="function"==typeof f||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==d||h!==l)&&ro(t,o,r,l),$s=!1,h=t.memoizedState,o.state=h,Qs(t,r,o,i);var p=t.memoizedState;a!==d||h!==p||qi.current||$s?("function"==typeof f&&(Zs(t,n,f,r),p=t.memoizedState),(c=$s||to(t,n,c,r,h,p,l)||!1)?(u||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=c):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return qa(e,t,n,r,s,i)}function qa(e,t,n,r,i,s){za(e,t);var o=0!=(128&t.flags);if(!r&&!o)return i&&Qi(t,n,!1),il(e,t,s);r=t.stateNode,Oa.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=co(t,e.child,null,s),t.child=co(t,null,a,s)):Aa(e,t,a,s),t.memoizedState=r.state,i&&Qi(t,n,!0),t.child}function $a(e){var t=e.stateNode;t.pendingContext?Gi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Gi(0,t.context,!1),vo(e,t.containerInfo)}function Ha(e,t,n,r,i){return Es(),Is(i),t.flags|=256,Aa(e,t,n,r),t.child}var Wa,Ba,Ga,Ka,Ya={dehydrated:null,treeContext:null,retryLane:0};function Qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xa(e,t,n){var r,i=t.pendingProps,s=wo.current,o=!1,a=0!=(128&t.flags);if((r=a)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),zi(wo,1&s),null===e)return ks(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(a=i.children,e=i.fallback,o?(i=t.mode,o=t.child,a={mode:"hidden",children:a},0==(1&i)&&null!==o?(o.childLanes=0,o.pendingProps=a):o=Qc(a,i,0,null),e=Yc(e,i,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Qa(n),t.memoizedState=Ya,e):Ja(t,a));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,o){if(n)return 256&t.flags?(t.flags&=-257,Za(e,t,o,r=Ca(Error(y(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Qc({mode:"visible",children:r.children},i,0,null),(s=Yc(s,i,o,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&co(t,e.child,null,o),t.child.memoizedState=Qa(o),t.memoizedState=Ya,s);if(0==(1&t.mode))return Za(e,t,o,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var a=r.dgst;return r=a,Za(e,t,o,r=Ca(s=Error(y(419)),r,void 0))}if(a=0!=(o&e.childLanes),Da||a){if(null!==(r=$l)){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(r.suspendedLanes|o))?0:i)&&i!==s.retryLane&&(s.retryLane=i,qs(e,i),gc(r,e,i,-1))}return Nc(),Za(e,t,o,r=Ca(Error(y(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Vc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,gs=ki(i.nextSibling),ms=t,vs=!0,ys=null,null!==e&&(os[as++]=cs,os[as++]=us,os[as++]=ls,cs=e.id,us=e.overflow,ls=t),t=Ja(t,r.children),t.flags|=4096,t)}(e,t,a,i,r,s,n);if(o){o=i.fallback,a=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&a)&&t.child!==s?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=Gc(s,l)).subtreeFlags=14680064&s.subtreeFlags,null!==r?o=Gc(r,o):(o=Yc(o,a,n,null)).flags|=2,o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,a=null===(a=e.child.memoizedState)?Qa(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ya,i}return e=(o=e.child).sibling,i=Gc(o,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ja(e,t){return(t=Qc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Za(e,t,n,r){return null!==r&&Is(r),co(t,e.child,null,n),(e=Ja(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function el(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ms(e.return,t,n)}function tl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Aa(e,t,r.children,n),0!=(2&(r=wo.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&el(e,n,t);else if(19===e.tag)el(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(zi(wo,r),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ko(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ko(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,s);break;case"together":tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function rl(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function il(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ql|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(y(153));if(null!==t.child){for(n=Gc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Gc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function sl(e,t){if(!vs)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ol(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function al(e,t,n){var r=t.pendingProps;switch(ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ol(t),null;case 1:case 17:return Wi(t.type)&&Bi(),ol(t),null;case 3:return r=t.stateNode,yo(),Fi(qi),Fi(Vi),Co(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Cs(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==ys&&(bc(ys),ys=null))),Ba(e,t),ol(t),null;case 5:bo(t);var i=go(mo.current);if(n=t.type,null!==e&&null!=t.stateNode)Ga(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(y(166));return ol(t),null}if(e=go(fo.current),Cs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Si]=t,r[Ei]=s,e=0!=(1&t.mode),n){case"dialog":Jr("cancel",r),Jr("close",r);break;case"iframe":case"object":case"embed":Jr("load",r);break;case"video":case"audio":for(i=0;i<Kr.length;i++)Jr(Kr[i],r);break;case"source":Jr("error",r);break;case"img":case"image":case"link":Jr("error",r),Jr("load",r);break;case"details":Jr("toggle",r);break;case"input":ce(r,s),Jr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Jr("invalid",r);break;case"textarea":ve(r,s),Jr("invalid",r)}for(var o in Re(n,s),i=null,s)if(s.hasOwnProperty(o)){var a=s[o];"children"===o?"string"==typeof a?r.textContent!==a&&(!0!==s.suppressHydrationWarning&&di(r.textContent,a,e),i=["children",a]):"number"==typeof a&&r.textContent!==""+a&&(!0!==s.suppressHydrationWarning&&di(r.textContent,a,e),i=["children",""+a]):b.hasOwnProperty(o)&&null!=a&&"onScroll"===o&&Jr("scroll",r)}switch(n){case"input":se(r),he(r,s,!0);break;case"textarea":se(r),_e(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=hi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=be(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Si]=t,e[Ei]=r,Wa(e,t,!1,!1),t.stateNode=e;e:{switch(o=Oe(n,r),n){case"dialog":Jr("cancel",e),Jr("close",e),i=r;break;case"iframe":case"object":case"embed":Jr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kr.length;i++)Jr(Kr[i],e);i=r;break;case"source":Jr("error",e),i=r;break;case"img":case"image":case"link":Jr("error",e),Jr("load",e),i=r;break;case"details":Jr("toggle",e),i=r;break;case"input":ce(e,r),i=le(e,r),Jr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),Jr("invalid",e);break;case"textarea":ve(e,r),i=ge(e,r),Jr("invalid",e)}for(s in Re(n,i),a=i)if(a.hasOwnProperty(s)){var l=a[s];"style"===s?Ne(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&Ce(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&Se(e,l):"number"==typeof l&&Se(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(b.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Jr("scroll",e):null!=l&&O(e,s,l,o))}switch(n){case"input":se(e),he(e,r,!1);break;case"textarea":se(e),_e(e);break;case"option":null!=r.value&&e.setAttribute("value",""+re(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?me(e,!!r.multiple,s,!1):null!=r.defaultValue&&me(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=hi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return ol(t),null;case 6:if(e&&null!=t.stateNode)Ka(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(y(166));if(n=go(mo.current),go(fo.current),Cs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Si]=t,(s=r.nodeValue!==n)&&null!==(e=ms))switch(e.tag){case 3:di(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&di(r.nodeValue,n,0!=(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Si]=t,t.stateNode=r}return ol(t),null;case 13:if(Fi(wo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(vs&&null!==gs&&0!=(1&t.mode)&&0==(128&t.flags))Ss(),Es(),t.flags|=98560,s=!1;else if(s=Cs(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(y(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(y(317));s[Si]=t}else Es(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ol(t),s=!1}else null!==ys&&(bc(ys),ys=null),s=!0;if(!s)return 65536&t.flags?t:null}return 0!=(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&wo.current)?0===Kl&&(Kl=3):Nc())),null!==t.updateQueue&&(t.flags|=4),ol(t),null);case 4:return yo(),Ba(e,t),null===e&&ti(t.stateNode.containerInfo),ol(t),null;case 10:return Ls(t.type._context),ol(t),null;case 19:if(Fi(wo),null===(s=t.memoizedState))return ol(t),null;if(r=0!=(128&t.flags),null===(o=s.rendering))if(r)sl(s,!1);else{if(0!==Kl||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=ko(e))){for(t.flags|=128,sl(s,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return zi(wo,1&wo.current|2),t.child}e=e.sibling}null!==s.tail&&ut()>nc&&(t.flags|=128,r=!0,sl(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ko(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),sl(s,!0),null===s.tail&&"hidden"===s.tailMode&&!o.alternate&&!vs)return ol(t),null}else 2*ut()-s.renderingStartTime>nc&&1073741824!==n&&(t.flags|=128,r=!0,sl(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=s.last)?n.sibling=o:t.child=o,s.last=o)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ut(),t.sibling=null,n=wo.current,zi(wo,r?1&n|2:1&n),t):(ol(t),null);case 22:case 23:return Sc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&Bl)&&(ol(t),6&t.subtreeFlags&&(t.flags|=8192)):ol(t),null;case 24:case 25:return null}throw Error(y(156,t.tag))}function ll(e,t){switch(ps(t),t.tag){case 1:return Wi(t.type)&&Bi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return yo(),Fi(qi),Fi(Vi),Co(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return bo(t),null;case 13:if(Fi(wo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(y(340));Es()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Fi(wo),null;case 4:return yo(),null;case 10:return Ls(t.type._context),null;case 22:case 23:return Sc(),null;default:return null}}Wa=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ba=function(){},Ga=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,go(fo.current);var s,o=null;switch(n){case"input":i=le(e,i),r=le(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=ge(e,i),r=ge(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=hi)}for(c in Re(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(b.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(null!=l||null!=a))if("style"===c)if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(o=o||[]).push(c,l)):"children"===c?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(b.hasOwnProperty(c)?(null!=l&&"onScroll"===c&&Jr("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Ka=function(e,t,n,r){n!==r&&(t.flags|=4)};var cl=!1,ul=!1,dl="function"==typeof WeakSet?WeakSet:Set,hl=null;function fl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(n){Fc(e,t,n)}else n.current=null}function pl(e,t,n){try{n()}catch(n){Fc(e,t,n)}}var ml=!1;function gl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&pl(t,n,s)}i=i.next}while(i!==r)}}function vl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function _l(e){var t=e.alternate;null!==t&&(e.alternate=null,_l(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[Si],delete t[Ei],delete t[Ti],delete t[Ni],delete t[Pi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bl(e){return 5===e.tag||3===e.tag||4===e.tag}function wl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||bl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function kl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=hi));else if(4!==r&&null!==(e=e.child))for(kl(e,t,n),e=e.sibling;null!==e;)kl(e,t,n),e=e.sibling}function xl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(xl(e,t,n),e=e.sibling;null!==e;)xl(e,t,n),e=e.sibling}var Cl=null,Sl=!1;function El(e,t,n){for(n=n.child;null!==n;)Il(e,t,n),n=n.sibling}function Il(e,t,n){if(yt&&"function"==typeof yt.onCommitFiberUnmount)try{yt.onCommitFiberUnmount(vt,n)}catch(e){}switch(n.tag){case 5:ul||fl(n,t);case 6:var r=Cl,i=Sl;Cl=null,El(e,t,n),Sl=i,null!==(Cl=r)&&(Sl?(e=Cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):Cl.removeChild(n.stateNode));break;case 18:null!==Cl&&(Sl?(e=Cl,n=n.stateNode,8===e.nodeType?wi(e.parentNode,n):1===e.nodeType&&wi(e,n),tn(e)):wi(Cl,n.stateNode));break;case 4:r=Cl,i=Sl,Cl=n.stateNode.containerInfo,Sl=!0,El(e,t,n),Cl=r,Sl=i;break;case 0:case 11:case 14:case 15:if(!ul&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,void 0!==o&&(0!=(2&s)||0!=(4&s))&&pl(n,t,o),i=i.next}while(i!==r)}El(e,t,n);break;case 1:if(!ul&&(fl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Fc(n,t,e)}El(e,t,n);break;case 21:El(e,t,n);break;case 22:1&n.mode?(ul=(r=ul)||null!==n.memoizedState,El(e,t,n),ul=r):El(e,t,n);break;default:El(e,t,n)}}function Tl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new dl),t.forEach((function(t){var r=qc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function Nl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:Cl=a.stateNode,Sl=!1;break e;case 3:case 4:Cl=a.stateNode.containerInfo,Sl=!0;break e}a=a.return}if(null===Cl)throw Error(y(160));Il(s,o,i),Cl=null,Sl=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(e){Fc(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)Pl(t,e),t=t.sibling}function Pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nl(t,e),Rl(e),4&r){try{gl(3,e,e.return),vl(3,e)}catch(t){Fc(e,e.return,t)}try{gl(5,e,e.return)}catch(t){Fc(e,e.return,t)}}break;case 1:Nl(t,e),Rl(e),512&r&&null!==n&&fl(n,n.return);break;case 5:if(Nl(t,e),Rl(e),512&r&&null!==n&&fl(n,n.return),32&e.flags){var i=e.stateNode;try{Se(i,"")}catch(t){Fc(e,e.return,t)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,o=null!==n?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===a&&"radio"===s.type&&null!=s.name&&ue(i,s),Oe(a,o);var c=Oe(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];"style"===u?Ne(i,d):"dangerouslySetInnerHTML"===u?Ce(i,d):"children"===u?Se(i,d):O(i,u,d,c)}switch(a){case"input":de(i,s);break;case"textarea":ye(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?me(i,!!s.multiple,f,!1):h!==!!s.multiple&&(null!=s.defaultValue?me(i,!!s.multiple,s.defaultValue,!0):me(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ei]=s}catch(t){Fc(e,e.return,t)}}break;case 6:if(Nl(t,e),Rl(e),4&r){if(null===e.stateNode)throw Error(y(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(t){Fc(e,e.return,t)}}break;case 3:if(Nl(t,e),Rl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(t){Fc(e,e.return,t)}break;case 4:default:Nl(t,e),Rl(e);break;case 13:Nl(t,e),Rl(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(tc=ut())),4&r&&Tl(e);break;case 22:if(u=null!==n&&null!==n.memoizedState,1&e.mode?(ul=(c=ul)||u,Nl(t,e),ul=c):Nl(t,e),Rl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!u&&0!=(1&e.mode))for(hl=e,u=e.child;null!==u;){for(d=hl=u;null!==hl;){switch(f=(h=hl).child,h.tag){case 0:case 11:case 14:case 15:gl(4,h,h.return);break;case 1:fl(h,h.return);var p=h.stateNode;if("function"==typeof p.componentWillUnmount){r=h,n=h.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(e){Fc(r,n,e)}}break;case 5:fl(h,h.return);break;case 22:if(null!==h.memoizedState){Ll(d);continue}}null!==f?(f.return=h,hl=f):Ll(d)}u=u.sibling}e:for(u=null,d=e;;){if(5===d.tag){if(null===u){u=d;try{i=d.stateNode,c?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(a=d.stateNode,o=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,a.style.display=Te("display",o))}catch(t){Fc(e,e.return,t)}}}else if(6===d.tag){if(null===u)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(t){Fc(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nl(t,e),Rl(e),4&r&&Tl(e);case 21:}}function Rl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(bl(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(Se(i,""),r.flags&=-33),xl(e,wl(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;kl(e,wl(e),s);break;default:throw Error(y(161))}}catch(t){Fc(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ol(e,t,n){hl=e,Dl(e,t,n)}function Dl(e,t,n){for(var r=0!=(1&e.mode);null!==hl;){var i=hl,s=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||cl;if(!o){var a=i.alternate,l=null!==a&&null!==a.memoizedState||ul;a=cl;var c=ul;if(cl=o,(ul=l)&&!c)for(hl=i;null!==hl;)l=(o=hl).child,22===o.tag&&null!==o.memoizedState?Ml(i):null!==l?(l.return=o,hl=l):Ml(i);for(;null!==s;)hl=s,Dl(s,t,n),s=s.sibling;hl=i,cl=a,ul=c}Al(e)}else 0!=(8772&i.subtreeFlags)&&null!==s?(s.return=i,hl=s):Al(e)}}function Al(e){for(;null!==hl;){var t=hl;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ul||vl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ul)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&Xs(t,s,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Xs(t,o,n)}break;case 5:var a=t.stateNode;if(null===n&&4&t.flags){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var u=c.memoizedState;if(null!==u){var d=u.dehydrated;null!==d&&tn(d)}}}break;default:throw Error(y(163))}ul||512&t.flags&&yl(t)}catch(e){Fc(t,t.return,e)}}if(t===e){hl=null;break}if(null!==(n=t.sibling)){n.return=t.return,hl=n;break}hl=t.return}}function Ll(e){for(;null!==hl;){var t=hl;if(t===e){hl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,hl=n;break}hl=t.return}}function Ml(e){for(;null!==hl;){var t=hl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vl(4,t)}catch(e){Fc(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(e){Fc(t,i,e)}}var s=t.return;try{yl(t)}catch(e){Fc(t,s,e)}break;case 5:var o=t.return;try{yl(t)}catch(e){Fc(t,o,e)}}}catch(e){Fc(t,t.return,e)}if(t===e){hl=null;break}var a=t.sibling;if(null!==a){a.return=t.return,hl=a;break}hl=t.return}}var jl,Fl=Math.ceil,zl=D.ReactCurrentDispatcher,Ul=D.ReactCurrentOwner,Vl=D.ReactCurrentBatchConfig,ql=0,$l=null,Hl=null,Wl=0,Bl=0,Gl=ji(0),Kl=0,Yl=null,Ql=0,Xl=0,Jl=0,Zl=null,ec=null,tc=0,nc=1/0,rc=null,ic=!1,sc=null,oc=null,ac=!1,lc=null,cc=0,uc=0,dc=null,hc=-1,fc=0;function pc(){return 0!=(6&ql)?ut():-1!==hc?hc:hc=ut()}function mc(e){return 0==(1&e.mode)?1:0!=(2&ql)&&0!==Wl?Wl&-Wl:null!==Ts.transition?(0===fc&&(fc=Tt()),fc):0!==(e=Ot)?e:e=void 0===(e=window.event)?16:un(e.type)}function gc(e,t,n,r){if(50<uc)throw uc=0,dc=null,Error(y(185));Pt(e,n,r),0!=(2&ql)&&e===$l||(e===$l&&(0==(2&ql)&&(Xl|=n),4===Kl&&wc(e,Wl)),vc(e,r),1===n&&0===ql&&0==(1&t.mode)&&(nc=ut()+500,Ji&&ts()))}function vc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-_t(s),a=1<<o,l=i[o];-1===l?0!=(a&n)&&0==(a&r)||(i[o]=Et(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}(e,t);var r=St(e,e===$l?Wl:0);if(0===r)null!==n&&at(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&at(n),1===t)0===e.tag?function(e){Ji=!0,es(e)}(kc.bind(null,e)):es(kc.bind(null,e)),_i((function(){0==(6&ql)&&ts()})),n=null;else{switch(Dt(r)){case 1:n=ht;break;case 4:n=ft;break;case 16:default:n=pt;break;case 536870912:n=gt}n=$c(n,yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yc(e,t){if(hc=-1,fc=0,0!=(6&ql))throw Error(y(327));var n=e.callbackNode;if(Mc()&&e.callbackNode!==n)return null;var r=St(e,e===$l?Wl:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=Pc(e,r);else{t=r;var i=ql;ql|=2;var s=Tc();for($l===e&&Wl===t||(rc=null,nc=ut()+500,Ec(e,t));;)try{Oc();break}catch(t){Ic(e,t)}As(),zl.current=s,ql=i,null!==Hl?t=0:($l=null,Wl=0,t=Kl)}if(0!==t){if(2===t&&(0!==(i=It(e))&&(r=i,t=_c(e,i))),1===t)throw n=Yl,Ec(e,0),wc(e,r),vc(e,ut()),n;if(6===t)wc(e,r);else{if(i=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!br(s(),i))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Pc(e,r))&&(0!==(s=It(e))&&(r=s,t=_c(e,s))),1===t))throw n=Yl,Ec(e,0),wc(e,r),vc(e,ut()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:case 5:Lc(e,ec,rc);break;case 3:if(wc(e,r),(130023424&r)===r&&10<(t=tc+500-ut())){if(0!==St(e,0))break;if(((i=e.suspendedLanes)&r)!==r){pc(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=gi(Lc.bind(null,e,ec,rc),t);break}Lc(e,ec,rc);break;case 4:if(wc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,(o=t[o])>i&&(i=o),r&=~s}if(r=i,10<(r=(120>(r=ut()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fl(r/1960))-r)){e.timeoutHandle=gi(Lc.bind(null,e,ec,rc),r);break}Lc(e,ec,rc);break;default:throw Error(y(329))}}}return vc(e,ut()),e.callbackNode===n?yc.bind(null,e):null}function _c(e,t){var n=Zl;return e.current.memoizedState.isDehydrated&&(Ec(e,t).flags|=256),2!==(e=Pc(e,t))&&(t=ec,ec=n,null!==t&&bc(t)),e}function bc(e){null===ec?ec=e:ec.push.apply(ec,e)}function wc(e,t){for(t&=~Jl,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_t(t),r=1<<n;e[n]=-1,t&=~r}}function kc(e){if(0!=(6&ql))throw Error(y(327));Mc();var t=St(e,0);if(0==(1&t))return vc(e,ut()),null;var n=Pc(e,t);if(0!==e.tag&&2===n){var r=It(e);0!==r&&(t=r,n=_c(e,r))}if(1===n)throw n=Yl,Ec(e,0),wc(e,t),vc(e,ut()),n;if(6===n)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lc(e,ec,rc),vc(e,ut()),null}function xc(e,t){var n=ql;ql|=1;try{return e(t)}finally{0===(ql=n)&&(nc=ut()+500,Ji&&ts())}}function Cc(e){null!==lc&&0===lc.tag&&0==(6&ql)&&Mc();var t=ql;ql|=1;var n=Vl.transition,r=Ot;try{if(Vl.transition=null,Ot=1,e)return e()}finally{Ot=r,Vl.transition=n,0==(6&(ql=t))&&ts()}}function Sc(){Bl=Gl.current,Fi(Gl)}function Ec(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,vi(n)),null!==Hl)for(n=Hl.return;null!==n;){var r=n;switch(ps(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Bi();break;case 3:yo(),Fi(qi),Fi(Vi),Co();break;case 5:bo(r);break;case 4:yo();break;case 13:case 19:Fi(wo);break;case 10:Ls(r.type._context);break;case 22:case 23:Sc()}n=n.return}if($l=e,Hl=e=Gc(e.current,null),Wl=Bl=t,Kl=0,Yl=null,Jl=Xl=Ql=0,ec=Zl=null,null!==zs){for(t=0;t<zs.length;t++)if(null!==(r=(n=zs[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var o=s.next;s.next=i,r.next=o}n.pending=r}zs=null}return e}function Ic(e,t){for(;;){var n=Hl;try{if(As(),So.current=_a,Ro){for(var r=To.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}Ro=!1}if(Io=0,Po=No=To=null,Oo=!1,Do=0,Ul.current=null,null===n||null===n.return){Kl=1,Yl=t,Hl=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Wl,a.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var c=l,u=a,d=u.tag;if(0==(1&u.mode)&&(0===d||11===d||15===d)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var f=Pa(o);if(null!==f){f.flags&=-257,Ra(f,o,a,0,t),1&f.mode&&Na(s,c,t),l=c;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(0==(1&t)){Na(s,c,t),Nc();break e}l=Error(y(426))}else if(vs&&1&a.mode){var g=Pa(o);if(null!==g){0==(65536&g.flags)&&(g.flags|=256),Ra(g,o,a,0,t),Is(xa(l,a));break e}}s=l=xa(l,a),4!==Kl&&(Kl=2),null===Zl?Zl=[s]:Zl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Ys(s,Ia(0,l,t));break e;case 1:a=l;var v=s.type,_=s.stateNode;if(0==(128&s.flags)&&("function"==typeof v.getDerivedStateFromError||null!==_&&"function"==typeof _.componentDidCatch&&(null===oc||!oc.has(_)))){s.flags|=65536,t&=-t,s.lanes|=t,Ys(s,Ta(s,a,t));break e}}s=s.return}while(null!==s)}Ac(n)}catch(e){t=e,Hl===n&&null!==n&&(Hl=n=n.return);continue}break}}function Tc(){var e=zl.current;return zl.current=_a,null===e?_a:e}function Nc(){0!==Kl&&3!==Kl&&2!==Kl||(Kl=4),null===$l||0==(268435455&Ql)&&0==(268435455&Xl)||wc($l,Wl)}function Pc(e,t){var n=ql;ql|=2;var r=Tc();for($l===e&&Wl===t||(rc=null,Ec(e,t));;)try{Rc();break}catch(t){Ic(e,t)}if(As(),ql=n,zl.current=r,null!==Hl)throw Error(y(261));return $l=null,Wl=0,Kl}function Rc(){for(;null!==Hl;)Dc(Hl)}function Oc(){for(;null!==Hl&&!lt();)Dc(Hl)}function Dc(e){var t=jl(e.alternate,e,Bl);e.memoizedProps=e.pendingProps,null===t?Ac(e):Hl=t,Ul.current=null}function Ac(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=al(n,t,Bl)))return void(Hl=n)}else{if(null!==(n=ll(n,t)))return n.flags&=32767,void(Hl=n);if(null===e)return Kl=6,void(Hl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Hl=t);Hl=t=e}while(null!==t);0===Kl&&(Kl=5)}function Lc(e,t,n){var r=Ot,i=Vl.transition;try{Vl.transition=null,Ot=1,function(e,t,n,r){do{Mc()}while(null!==lc);if(0!=(6&ql))throw Error(y(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===$l&&(Hl=$l=null,Wl=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||ac||(ac=!0,$c(pt,(function(){return Mc(),null}))),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=Vl.transition,Vl.transition=null;var o=Ot;Ot=1;var a=ql;ql|=4,Ul.current=null,function(e,t){if(fi=rn,Er(e=Sr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(e){n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var f;d!==n||0!==i&&3!==d.nodeType||(a=o+i),d!==s||0!==r&&3!==d.nodeType||(l=o+r),3===d.nodeType&&(o+=d.nodeValue.length),null!==(f=d.firstChild);)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++c===i&&(a=o),h===s&&++u===r&&(l=o),null!==(f=d.nextSibling))break;h=(d=h).parentNode}d=f}n=-1===a||-1===l?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pi={focusedElem:e,selectionRange:n},rn=!1,hl=t;null!==hl;)if(e=(t=hl).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,hl=e;else for(;null!==hl;){t=hl;try{var p=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,v=t.stateNode,_=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:Ns(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(y(163))}}catch(e){Fc(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,hl=e;break}hl=t.return}p=ml,ml=!1}(e,n),Pl(n,e),Ir(pi),rn=!!fi,pi=fi=null,e.current=n,Ol(n,e,i),ct(),ql=a,Ot=o,Vl.transition=s}else e.current=n;if(ac&&(ac=!1,lc=e,cc=i),s=e.pendingLanes,0===s&&(oc=null),function(e){if(yt&&"function"==typeof yt.onCommitFiberRoot)try{yt.onCommitFiberRoot(vt,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode),vc(e,ut()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,e=sc,sc=null,e;0!=(1&cc)&&0!==e.tag&&Mc(),s=e.pendingLanes,0!=(1&s)?e===dc?uc++:(uc=0,dc=e):uc=0,ts()}(e,t,n,r)}finally{Vl.transition=i,Ot=r}return null}function Mc(){if(null!==lc){var e=Dt(cc),t=Vl.transition,n=Ot;try{if(Vl.transition=null,Ot=16>e?16:e,null===lc)var r=!1;else{if(e=lc,lc=null,cc=0,0!=(6&ql))throw Error(y(331));var i=ql;for(ql|=4,hl=e.current;null!==hl;){var s=hl,o=s.child;if(0!=(16&hl.flags)){var a=s.deletions;if(null!==a){for(var l=0;l<a.length;l++){var c=a[l];for(hl=c;null!==hl;){var u=hl;switch(u.tag){case 0:case 11:case 15:gl(8,u,s)}var d=u.child;if(null!==d)d.return=u,hl=d;else for(;null!==hl;){var h=(u=hl).sibling,f=u.return;if(_l(u),u===c){hl=null;break}if(null!==h){h.return=f,hl=h;break}hl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}hl=s}}if(0!=(2064&s.subtreeFlags)&&null!==o)o.return=s,hl=o;else e:for(;null!==hl;){if(0!=(2048&(s=hl).flags))switch(s.tag){case 0:case 11:case 15:gl(9,s,s.return)}var v=s.sibling;if(null!==v){v.return=s.return,hl=v;break e}hl=s.return}}var _=e.current;for(hl=_;null!==hl;){var b=(o=hl).child;if(0!=(2064&o.subtreeFlags)&&null!==b)b.return=o,hl=b;else e:for(o=_;null!==hl;){if(0!=(2048&(a=hl).flags))try{switch(a.tag){case 0:case 11:case 15:vl(9,a)}}catch(e){Fc(a,a.return,e)}if(a===o){hl=null;break e}var w=a.sibling;if(null!==w){w.return=a.return,hl=w;break e}hl=a.return}}if(ql=i,ts(),yt&&"function"==typeof yt.onPostCommitFiberRoot)try{yt.onPostCommitFiberRoot(vt,e)}catch(e){}r=!0}return r}finally{Ot=n,Vl.transition=t}}return!1}function jc(e,t,n){e=Gs(e,t=Ia(0,t=xa(n,t),1),1),t=pc(),null!==e&&(Pt(e,1,t),vc(e,t))}function Fc(e,t,n){if(3===e.tag)jc(e,e,n);else for(;null!==t;){if(3===t.tag){jc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===oc||!oc.has(r))){t=Gs(t,e=Ta(t,e=xa(n,e),1),1),e=pc(),null!==t&&(Pt(t,1,e),vc(t,e));break}}t=t.return}}function zc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=pc(),e.pingedLanes|=e.suspendedLanes&n,$l===e&&(Wl&n)===n&&(4===Kl||3===Kl&&(130023424&Wl)===Wl&&500>ut()-tc?Ec(e,0):Jl|=n),vc(e,t)}function Uc(e,t){0===t&&(0==(1&e.mode)?t=1:(t=xt,0==(130023424&(xt<<=1))&&(xt=4194304)));var n=pc();null!==(e=qs(e,t))&&(Pt(e,t,n),vc(e,n))}function Vc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Uc(e,n)}function qc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}null!==r&&r.delete(t),Uc(e,n)}function $c(e,t){return ot(e,t)}function Hc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wc(e,t,n,r){return new Hc(e,t,n,r)}function Bc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Gc(e,t){var n=e.alternate;return null===n?((n=Wc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kc(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)Bc(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case M:return Yc(n.children,i,s,t);case j:o=8,i|=8;break;case F:return(e=Wc(12,n,t,2|i)).elementType=F,e.lanes=s,e;case q:return(e=Wc(13,n,t,i)).elementType=q,e.lanes=s,e;case $:return(e=Wc(19,n,t,i)).elementType=$,e.lanes=s,e;case B:return Qc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case z:o=10;break e;case U:o=9;break e;case V:o=11;break e;case H:o=14;break e;case W:o=16,r=null;break e}throw Error(y(130,null==e?e:typeof e,""))}return(t=Wc(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Yc(e,t,n,r){return(e=Wc(7,e,r,t)).lanes=n,e}function Qc(e,t,n,r){return(e=Wc(22,e,r,t)).elementType=B,e.lanes=n,e.stateNode={isHidden:!1},e}function Xc(e,t,n){return(e=Wc(6,e,null,t)).lanes=n,e}function Jc(e,t,n){return(t=Wc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nt(0),this.expirationTimes=Nt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function eu(e,t,n,r,i,s,o,a,l){return e=new Zc(e,t,n,a,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Wc(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(s),e}function tu(e){if(!e)return Ui;e:{if(tt(e=e._reactInternals)!==e||1!==e.tag)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Wi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(y(171))}if(1===e.tag){var n=e.type;if(Wi(n))return Ki(e,n,t)}return t}function nu(e,t,n,r,i,s,o,a,l){return(e=eu(n,r,!0,e,0,s,0,a,l)).context=tu(null),n=e.current,(s=Bs(r=pc(),i=mc(n))).callback=null!=t?t:null,Gs(n,s,i),e.current.lanes=i,Pt(e,i,r),vc(e,r),e}function ru(e,t,n,r){var i=t.current,s=pc(),o=mc(i);return n=tu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Bs(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Gs(i,t,o))&&(gc(e,i,o,s),Ks(e,i,o)),o}function iu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function su(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ou(e,t){su(e,t),(e=e.alternate)&&su(e,t)}jl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||qi.current)Da=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return Da=!1,function(e,t,n){switch(t.tag){case 3:$a(t),Es();break;case 5:_o(t);break;case 1:Wi(t.type)&&Yi(t);break;case 4:vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;zi(Ps,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(zi(wo,1&wo.current),t.flags|=128,null):0!=(n&t.child.childLanes)?Xa(e,t,n):(zi(wo,1&wo.current),null!==(e=il(e,t,n))?e.sibling:null);zi(wo,1&wo.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return nl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),zi(wo,wo.current),r)break;return null;case 22:case 23:return t.lanes=0,Fa(e,t,n)}return il(e,t,n)}(e,t,n);Da=0!=(131072&e.flags)}else Da=!1,vs&&0!=(1048576&t.flags)&&hs(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;rl(e,t),e=t.pendingProps;var i=Hi(t,Vi.current);js(t,n),i=jo(null,t,r,e,i,n);var s=Fo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Wi(r)?(s=!0,Yi(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Hs(t),i.updater=eo,t.stateNode=i,i._reactInternals=t,io(t,r,e,n),t=qa(null,t,r,!0,s,n)):(t.tag=0,vs&&s&&fs(t),Aa(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(rl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Bc(e)?1:0;if(null!=e){if((e=e.$$typeof)===V)return 11;if(e===H)return 14}return 2}(r),e=Ns(r,e),i){case 0:t=Ua(null,t,r,e,n);break e;case 1:t=Va(null,t,r,e,n);break e;case 11:t=La(null,t,r,e,n);break e;case 14:t=Ma(null,t,r,Ns(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ua(e,t,r,i=t.elementType===r?i:Ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Va(e,t,r,i=t.elementType===r?i:Ns(r,i),n);case 3:e:{if($a(t),null===e)throw Error(y(387));r=t.pendingProps,i=(s=t.memoizedState).element,Ws(e,t),Qs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Ha(e,t,r,n,i=xa(Error(y(423)),t));break e}if(r!==i){t=Ha(e,t,r,n,i=xa(Error(y(424)),t));break e}for(gs=ki(t.stateNode.containerInfo.firstChild),ms=t,vs=!0,ys=null,n=uo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(Es(),r===i){t=il(e,t,n);break e}Aa(e,t,r,n)}t=t.child}return t;case 5:return _o(t),null===e&&ks(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,mi(r,i)?o=null:null!==s&&mi(r,s)&&(t.flags|=32),za(e,t),Aa(e,t,o,n),t.child;case 6:return null===e&&ks(t),null;case 13:return Xa(e,t,n);case 4:return vo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=co(t,null,r,n):Aa(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,La(e,t,r,i=t.elementType===r?i:Ns(r,i),n);case 7:return Aa(e,t,t.pendingProps,n),t.child;case 8:case 12:return Aa(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,zi(Ps,r._currentValue),r._currentValue=o,null!==s)if(br(s.value,o)){if(s.children===i.children&&!qi.current){t=il(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var a=s.dependencies;if(null!==a){o=s.child;for(var l=a.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Bs(-1,n&-n)).tag=2;var c=s.updateQueue;if(null!==c){var u=(c=c.shared).pending;null===u?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ms(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(10===s.tag)o=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(o=s.return))throw Error(y(341));o.lanes|=n,null!==(a=o.alternate)&&(a.lanes|=n),Ms(o,n,t),o=s.sibling}else o=s.child;if(null!==o)o.return=s;else for(o=s;null!==o;){if(o===t){o=null;break}if(null!==(s=o.sibling)){s.return=o.return,o=s;break}o=o.return}s=o}Aa(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,js(t,n),r=r(i=Fs(i)),t.flags|=1,Aa(e,t,r,n),t.child;case 14:return i=Ns(r=t.type,t.pendingProps),Ma(e,t,r,i=Ns(r.type,i),n);case 15:return ja(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ns(r,i),rl(e,t),t.tag=1,Wi(r)?(e=!0,Yi(t)):e=!1,js(t,n),no(t,r,i),io(t,r,i,n),qa(null,t,r,!0,e,n);case 19:return nl(e,t,n);case 22:return Fa(e,t,n)}throw Error(y(156,t.tag))};var au="function"==typeof reportError?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}function cu(e){this._internalRoot=e}function uu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function du(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function hu(){}function fu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if("function"==typeof i){var a=i;i=function(){var e=iu(o);a.call(e)}}ru(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=iu(o);s.call(e)}}var o=nu(t,r,e,0,null,!1,0,"",hu);return e._reactRootContainer=o,e[Ii]=o.current,ti(8===e.nodeType?e.parentNode:e),Cc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var a=r;r=function(){var e=iu(l);a.call(e)}}var l=eu(e,0,!1,null,0,!1,0,"",hu);return e._reactRootContainer=l,e[Ii]=l.current,ti(8===e.nodeType?e.parentNode:e),Cc((function(){ru(t,l,n,r)})),l}(n,t,e,i,r);return iu(o)}cu.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(y(409));ru(e,t,null,null)},cu.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Cc((function(){ru(null,e,null,null)})),t[Ii]=null}},cu.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&0!==t&&t<Bt[n].priority;n++);Bt.splice(n,0,e),0===n&&Qt(e)}},At=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ct(t.pendingLanes);0!==n&&(Rt(t,1|n),vc(t,ut()),0==(6&ql)&&(nc=ut()+500,ts()))}break;case 13:Cc((function(){var t=qs(e,1);if(null!==t){var n=pc();gc(t,e,1,n)}})),ou(e,1)}},Lt=function(e){if(13===e.tag){var t=qs(e,134217728);if(null!==t)gc(t,e,134217728,pc());ou(e,134217728)}},Mt=function(e){if(13===e.tag){var t=mc(e),n=qs(e,t);if(null!==n)gc(n,e,t,pc());ou(e,t)}},jt=function(){return Ot},Ft=function(e,t){var n=Ot;try{return Ot=e,t()}finally{Ot=n}},Le=function(e,t,n){switch(t){case"input":if(de(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ai(r);if(!i)throw Error(y(90));oe(r),de(r,i)}}}break;case"textarea":ye(e,n);break;case"select":null!=(t=n.value)&&me(e,!!n.multiple,t,!1)}},Ve=xc,qe=Cc;var pu={usingClientEntryPoint:!1,Events:[Oi,Di,Ai,ze,Ue,xc]},mu={findFiberByHostInstance:Ri,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gu={bundleType:mu.bundleType,version:mu.version,rendererPackageName:mu.rendererPackageName,rendererConfig:mu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=it(e))?null:e.stateNode},findFiberByHostInstance:mu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{vt=vu.inject(gu),yt=vu}catch(xe){}}r=pu,i=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!uu(t))throw Error(y(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:L,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},o=function(e,t){if(!uu(e))throw Error(y(299));var n=!1,r="",i=au;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=eu(e,1,!1,null,0,n,0,r,i),e[Ii]=t.current,ti(8===e.nodeType?e.parentNode:e),new lu(t)},a=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(y(188));throw e=Object.keys(e).join(","),Error(y(268,e))}return e=null===(e=it(t))?null:e.stateNode},l=function(e){return Cc(e)},c=function(e,t,n){if(!du(t))throw Error(y(200));return fu(null,e,t,!0,n)},u=function(e,t,n){if(!uu(e))throw Error(y(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",o=au;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=nu(t,null,e,1,null!=n?n:null,i,0,s,o),e[Ii]=t.current,ti(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new cu(t)},d=function(e,t,n){if(!du(t))throw Error(y(200));return fu(null,e,t,!1,n)},h=function(e){if(!du(e))throw Error(y(40));return!!e._reactRootContainer&&(Cc((function(){fu(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ii]=null}))})),!0)},f=xc,p=function(e,t,n,r){if(!du(n))throw Error(y(200));if(null==e||void 0===e._reactInternals)throw Error(y(38));return fu(e,t,n,!1,r)},m="18.2.0-next-9e3b772b8-20220608"})),s.register("fO90s",(function(e,t){e.exports=s("gcnCG")})),s.register("gcnCG",(function(t,n){
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,o,a,l,c,u,d,h,f,p,m,g,v,y,_,b,w;function k(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<S(i,t)))break e;e[r]=t,e[n]=i,n=r}}function x(e){return 0===e.length?null:e[0]}function C(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,s=i>>>1;r<s;){var o=2*(r+1)-1,a=e[o],l=o+1,c=e[l];if(0>S(a,n))l<i&&0>S(c,a)?(e[r]=c,e[l]=n,r=l):(e[r]=a,e[o]=n,r=o);else{if(!(l<i&&0>S(c,n)))break e;e[r]=c,e[l]=n,r=l}}}return t}function S(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e(t.exports,"unstable_now",(()=>r),(e=>r=e)),e(t.exports,"unstable_IdlePriority",(()=>i),(e=>i=e)),e(t.exports,"unstable_ImmediatePriority",(()=>s),(e=>s=e)),e(t.exports,"unstable_LowPriority",(()=>o),(e=>o=e)),e(t.exports,"unstable_NormalPriority",(()=>a),(e=>a=e)),e(t.exports,"unstable_Profiling",(()=>l),(e=>l=e)),e(t.exports,"unstable_UserBlockingPriority",(()=>c),(e=>c=e)),e(t.exports,"unstable_cancelCallback",(()=>u),(e=>u=e)),e(t.exports,"unstable_continueExecution",(()=>d),(e=>d=e)),e(t.exports,"unstable_forceFrameRate",(()=>h),(e=>h=e)),e(t.exports,"unstable_getCurrentPriorityLevel",(()=>f),(e=>f=e)),e(t.exports,"unstable_getFirstCallbackNode",(()=>p),(e=>p=e)),e(t.exports,"unstable_next",(()=>m),(e=>m=e)),e(t.exports,"unstable_pauseExecution",(()=>g),(e=>g=e)),e(t.exports,"unstable_requestPaint",(()=>v),(e=>v=e)),e(t.exports,"unstable_runWithPriority",(()=>y),(e=>y=e)),e(t.exports,"unstable_scheduleCallback",(()=>_),(e=>_=e)),e(t.exports,"unstable_shouldYield",(()=>b),(e=>b=e)),e(t.exports,"unstable_wrapCallback",(()=>w),(e=>w=e)),"object"==typeof performance&&"function"==typeof performance.now){var E=performance;r=function(){return E.now()}}else{var I=Date,T=I.now();r=function(){return I.now()-T}}var N=[],P=[],R=1,O=null,D=3,A=!1,L=!1,M=!1,j="function"==typeof setTimeout?setTimeout:null,F="function"==typeof clearTimeout?clearTimeout:null,z="undefined"!=typeof setImmediate?setImmediate:null;function U(e){for(var t=x(P);null!==t;){if(null===t.callback)C(P);else{if(!(t.startTime<=e))break;C(P),t.sortIndex=t.expirationTime,k(N,t)}t=x(P)}}function V(e){if(M=!1,U(e),!L)if(null!==x(N))L=!0,Z(q);else{var t=x(P);null!==t&&ee(V,t.startTime-e)}}function q(e,t){L=!1,M&&(M=!1,F(B),B=-1),A=!0;var n=D;try{for(U(t),O=x(N);null!==O&&(!(O.expirationTime>t)||e&&!Y());){var i=O.callback;if("function"==typeof i){O.callback=null,D=O.priorityLevel;var s=i(O.expirationTime<=t);t=r(),"function"==typeof s?O.callback=s:O===x(N)&&C(N),U(t)}else C(N);O=x(N)}if(null!==O)var o=!0;else{var a=x(P);null!==a&&ee(V,a.startTime-t),o=!1}return o}finally{O=null,D=n,A=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var $,H=!1,W=null,B=-1,G=5,K=-1;function Y(){return!(r()-K<G)}function Q(){if(null!==W){var e=r();K=e;var t=!0;try{t=W(!0,e)}finally{t?$():(H=!1,W=null)}}else H=!1}if("function"==typeof z)$=function(){z(Q)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,J=X.port2;X.port1.onmessage=Q,$=function(){J.postMessage(null)}}else $=function(){j(Q,0)};function Z(e){W=e,H||(H=!0,$())}function ee(e,t){B=j((function(){e(r())}),t)}i=5,s=1,o=4,a=3,l=null,c=2,u=function(e){e.callback=null},d=function(){L||A||(L=!0,Z(q))},h=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<e?Math.floor(1e3/e):5},f=function(){return D},p=function(){return x(N)},m=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},g=function(){},v=function(){},y=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},_=function(e,t,n){var i=r();switch("object"==typeof n&&null!==n?n="number"==typeof(n=n.delay)&&0<n?i+n:i:n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:R++,callback:t,priorityLevel:e,startTime:n,expirationTime:s=n+s,sortIndex:-1},n>i?(e.sortIndex=n,k(P,e),null===x(N)&&e===x(P)&&(M?(F(B),B=-1):M=!0,ee(V,n-i))):(e.sortIndex=s,k(N,e),L||A||(L=!0,Z(q))),e},b=Y,w=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}})),s.register("9cCWX",(function(t,n){
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,o,a,l,c,u,d,h,f,p,m,g,v,y,_,b,w,k,x,C,S,E,I,T,N,P;e(t.exports,"AsyncMode",(()=>r),(e=>r=e)),e(t.exports,"ConcurrentMode",(()=>i),(e=>i=e)),e(t.exports,"ContextConsumer",(()=>s),(e=>s=e)),e(t.exports,"ContextProvider",(()=>o),(e=>o=e)),e(t.exports,"Element",(()=>a),(e=>a=e)),e(t.exports,"ForwardRef",(()=>l),(e=>l=e)),e(t.exports,"Fragment",(()=>c),(e=>c=e)),e(t.exports,"Lazy",(()=>u),(e=>u=e)),e(t.exports,"Memo",(()=>d),(e=>d=e)),e(t.exports,"Portal",(()=>h),(e=>h=e)),e(t.exports,"Profiler",(()=>f),(e=>f=e)),e(t.exports,"StrictMode",(()=>p),(e=>p=e)),e(t.exports,"Suspense",(()=>m),(e=>m=e)),e(t.exports,"isAsyncMode",(()=>g),(e=>g=e)),e(t.exports,"isConcurrentMode",(()=>v),(e=>v=e)),e(t.exports,"isContextConsumer",(()=>y),(e=>y=e)),e(t.exports,"isContextProvider",(()=>_),(e=>_=e)),e(t.exports,"isElement",(()=>b),(e=>b=e)),e(t.exports,"isForwardRef",(()=>w),(e=>w=e)),e(t.exports,"isFragment",(()=>k),(e=>k=e)),e(t.exports,"isLazy",(()=>x),(e=>x=e)),e(t.exports,"isMemo",(()=>C),(e=>C=e)),e(t.exports,"isPortal",(()=>S),(e=>S=e)),e(t.exports,"isProfiler",(()=>E),(e=>E=e)),e(t.exports,"isStrictMode",(()=>I),(e=>I=e)),e(t.exports,"isSuspense",(()=>T),(e=>T=e)),e(t.exports,"isValidElementType",(()=>N),(e=>N=e)),e(t.exports,"typeOf",(()=>P),(e=>P=e));var R="function"==typeof Symbol&&Symbol.for,O=R?Symbol.for("react.element"):60103,D=R?Symbol.for("react.portal"):60106,A=R?Symbol.for("react.fragment"):60107,L=R?Symbol.for("react.strict_mode"):60108,M=R?Symbol.for("react.profiler"):60114,j=R?Symbol.for("react.provider"):60109,F=R?Symbol.for("react.context"):60110,z=R?Symbol.for("react.async_mode"):60111,U=R?Symbol.for("react.concurrent_mode"):60111,V=R?Symbol.for("react.forward_ref"):60112,q=R?Symbol.for("react.suspense"):60113,$=R?Symbol.for("react.suspense_list"):60120,H=R?Symbol.for("react.memo"):60115,W=R?Symbol.for("react.lazy"):60116,B=R?Symbol.for("react.block"):60121,G=R?Symbol.for("react.fundamental"):60117,K=R?Symbol.for("react.responder"):60118,Y=R?Symbol.for("react.scope"):60119;function Q(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case O:switch(e=e.type){case z:case U:case A:case M:case L:case q:return e;default:switch(e=e&&e.$$typeof){case F:case V:case W:case H:case j:return e;default:return t}}case D:return t}}}function X(e){return Q(e)===U}r=z,i=U,s=F,o=j,a=O,l=V,c=A,u=W,d=H,h=D,f=M,p=L,m=q,g=function(e){return X(e)||Q(e)===z},v=X,y=function(e){return Q(e)===F},_=function(e){return Q(e)===j},b=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===O},w=function(e){return Q(e)===V},k=function(e){return Q(e)===A},x=function(e){return Q(e)===W},C=function(e){return Q(e)===H},S=function(e){return Q(e)===D},E=function(e){return Q(e)===M},I=function(e){return Q(e)===L},T=function(e){return Q(e)===q},N=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===U||e===M||e===L||e===q||e===$||"object"==typeof e&&null!==e&&(e.$$typeof===W||e.$$typeof===H||e.$$typeof===j||e.$$typeof===F||e.$$typeof===V||e.$$typeof===G||e.$$typeof===K||e.$$typeof===Y||e.$$typeof===B)},P=Q})),s.register("bi4Vg",(function(t,n){
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r,i,s,o,a,l,c,u,d,h,f,p,m,g,v,y,_,b,w,k,x,C,S,E,I,T,N,P;e(t.exports,"ContextConsumer",(()=>r),(e=>r=e)),e(t.exports,"ContextProvider",(()=>i),(e=>i=e)),e(t.exports,"Element",(()=>s),(e=>s=e)),e(t.exports,"ForwardRef",(()=>o),(e=>o=e)),e(t.exports,"Fragment",(()=>a),(e=>a=e)),e(t.exports,"Lazy",(()=>l),(e=>l=e)),e(t.exports,"Memo",(()=>c),(e=>c=e)),e(t.exports,"Portal",(()=>u),(e=>u=e)),e(t.exports,"Profiler",(()=>d),(e=>d=e)),e(t.exports,"StrictMode",(()=>h),(e=>h=e)),e(t.exports,"Suspense",(()=>f),(e=>f=e)),e(t.exports,"SuspenseList",(()=>p),(e=>p=e)),e(t.exports,"isAsyncMode",(()=>m),(e=>m=e)),e(t.exports,"isConcurrentMode",(()=>g),(e=>g=e)),e(t.exports,"isContextConsumer",(()=>v),(e=>v=e)),e(t.exports,"isContextProvider",(()=>y),(e=>y=e)),e(t.exports,"isElement",(()=>_),(e=>_=e)),e(t.exports,"isForwardRef",(()=>b),(e=>b=e)),e(t.exports,"isFragment",(()=>w),(e=>w=e)),e(t.exports,"isLazy",(()=>k),(e=>k=e)),e(t.exports,"isMemo",(()=>x),(e=>x=e)),e(t.exports,"isPortal",(()=>C),(e=>C=e)),e(t.exports,"isProfiler",(()=>S),(e=>S=e)),e(t.exports,"isStrictMode",(()=>E),(e=>E=e)),e(t.exports,"isSuspense",(()=>I),(e=>I=e)),e(t.exports,"isSuspenseList",(()=>T),(e=>T=e)),e(t.exports,"isValidElementType",(()=>N),(e=>N=e)),e(t.exports,"typeOf",(()=>P),(e=>P=e));var R,O=Symbol.for("react.element"),D=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),F=Symbol.for("react.context"),z=Symbol.for("react.server_context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen");function B(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case O:switch(e=e.type){case A:case M:case L:case V:case q:return e;default:switch(e=e&&e.$$typeof){case z:case F:case U:case H:case $:case j:return e;default:return t}}case D:return t}}}R=Symbol.for("react.module.reference"),r=F,i=j,s=O,o=U,a=A,l=H,c=$,u=D,d=M,h=L,f=V,p=q,m=function(){return!1},g=function(){return!1},v=function(e){return B(e)===F},y=function(e){return B(e)===j},_=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===O},b=function(e){return B(e)===U},w=function(e){return B(e)===A},k=function(e){return B(e)===H},x=function(e){return B(e)===$},C=function(e){return B(e)===D},S=function(e){return B(e)===M},E=function(e){return B(e)===L},I=function(e){return B(e)===V},T=function(e){return B(e)===q},N=function(e){return"string"==typeof e||"function"==typeof e||e===A||e===M||e===L||e===V||e===q||e===W||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===$||e.$$typeof===j||e.$$typeof===F||e.$$typeof===U||e.$$typeof===R||void 0!==e.getModuleId)},P=B})),s("27Lyk").register(JSON.parse('{"cbJrf":"index.1dd3f158.js","fhqtG":"sample-banner.de0d3189.jpg","6jHyy":"index.e3fa0fa3.css"}'));var o={};o=s("1b2ls");var a,l,c,u=s("acw62"),d={};
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),a=(d=s("Xw6Mv")).createRoot,d.hydrateRoot,s("acw62"),(c=l||(l={})).Pop="POP",c.Push="PUSH",c.Replace="REPLACE";const f="popstate";function p(e){return void 0===e&&(e={}),w((function(e,t){let{pathname:n="/",search:r="",hash:i=""}=b(e.location.hash.substr(1));return y("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"==typeof t?t:_(t))}),(function(e,t){g("/"===e.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(t)+")")}),e)}function m(e,t){if(!1===e||null==e)throw new Error(t)}function g(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function v(e,t){return{usr:e.state,key:e.key,idx:t}}function y(e,t,n,r){return void 0===n&&(n=null),h({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?b(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function _(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function b(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function w(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=l.Pop,c=null,u=d();function d(){return(o.state||{idx:null}).idx}function p(){a=l.Pop;let e=d(),t=null==e?null:e-u;u=e,c&&c({action:a,location:b.location,delta:t})}function g(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:_(e);return m(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,o.replaceState(h({},o.state,{idx:u}),""));let b={get action(){return a},get location(){return e(i,o)},listen(e){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(f,p),c=e,()=>{i.removeEventListener(f,p),c=null}},createHref:e=>t(i,e),createURL:g,encodeLocation(e){let t=g(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){a=l.Push;let r=y(b.location,e,t);n&&n(r,e),u=d()+1;let h=v(r,u),f=b.createHref(r);try{o.pushState(h,"",f)}catch(e){i.location.assign(f)}s&&c&&c({action:a,location:b.location,delta:1})},replace:function(e,t){a=l.Replace;let r=y(b.location,e,t);n&&n(r,e),u=d();let i=v(r,u),h=b.createHref(r);o.replaceState(i,"",h),s&&c&&c({action:a,location:b.location,delta:0})},go:e=>o.go(e)};return b}var k,x;function C(e,t,n){return void 0===t&&(t=[]),void 0===n&&(n=new Set),e.map(((e,r)=>{let i=[...t,r],s="string"==typeof e.id?e.id:i.join("-");if(m(!0!==e.index||!e.children,"Cannot specify children on an index route"),m(!n.has(s),'Found a route id collision on id "'+s+"\".  Route id's must be globally unique within Data Router usages"),n.add(s),function(e){return!0===e.index}(e)){return h({},e,{id:s})}return h({},e,{id:s,children:e.children?C(e.children,i,n):void 0})}))}function S(e,t,n){void 0===n&&(n="/");let r=z(("string"==typeof t?b(t):t).pathname||"/",n);if(null==r)return null;let i=E(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let s=null;for(let e=0;null==s&&e<i.length;++e)s=M(i[e],F(r));return s}function E(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,s)=>{let o={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(m(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let a=H([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(m(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+a+'".'),E(e.children,t,l,a)),(null!=e.path||e.index)&&t.push({path:a,score:L(a,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of I(e.path))i(e,t,n);else i(e,t)})),t}function I(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let o=I(r.join("/")),a=[];return a.push(...o.map((e=>""===e?s:[s,e].join("/")))),i&&a.push(...o),a.map((t=>e.startsWith("/")&&""===t?"/":t))}(x=k||(k={})).data="data",x.deferred="deferred",x.redirect="redirect",x.error="error";const T=/^:\w+$/,N=3,P=2,R=1,O=10,D=-2,A=e=>"*"===e;function L(e,t){let n=e.split("/"),r=n.length;return n.some(A)&&(r+=D),t&&(r+=P),n.filter((e=>!A(e))).reduce(((e,t)=>e+(T.test(t)?N:""===t?R:O)),r)}function M(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let e=0;e<n.length;++e){let o=n[e],a=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",c=j({path:o.relativePath,caseSensitive:o.caseSensitive,end:a},l);if(!c)return null;Object.assign(r,c.params);let u=o.route;s.push({params:r,pathname:H([i,c.pathname]),pathnameBase:W(H([i,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(i=H([i,c.pathnameBase]))}return s}function j(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);U("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(r.push(t),"/([^\\/]+)")));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=a[n]||"";o=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return U(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(a[n]||"",t),e}),{}),pathname:s,pathnameBase:o,pattern:e}}function F(e){try{return decodeURI(e)}catch(t){return U(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function z(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function U(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function V(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function q(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function $(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=b(e):(i=h({},e),m(!i.pathname||!i.pathname.includes("?"),V("?","pathname","search",i)),m(!i.pathname||!i.pathname.includes("#"),V("#","pathname","hash",i)),m(!i.search||!i.search.includes("#"),V("#","search","hash",i)));let s,o=""===e||""===i.pathname,a=o?"/":i.pathname;if(r||null==a)s=n;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?b(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:B(r),hash:G(i)}}(i,s),c=a&&"/"!==a&&a.endsWith("/"),u=(o||"."===a)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const H=e=>e.join("/").replace(/\/\/+/g,"/"),W=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),B=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",G=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class K extends Error{}class Y{constructor(e,t){let n;this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],m(e&&"object"==typeof e&&!Array.isArray(e),"defer() only accepts plain objects"),this.abortPromise=new Promise(((e,t)=>n=t)),this.controller=new AbortController;let r=()=>n(new K("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(e).reduce(((e,t)=>{let[n,r]=t;return Object.assign(e,{[n]:this.trackPromise(n,r)})}),{}),this.done&&this.unlistenAbortSignal(),this.init=t}trackPromise(e,t){if(!(t instanceof Promise))return t;this.deferredKeys.push(e),this.pendingKeysSet.add(e);let n=Promise.race([t,this.abortPromise]).then((t=>this.onSettle(n,e,null,t)),(t=>this.onSettle(n,e,t)));return n.catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),n}onSettle(e,t,n,r){return this.controller.signal.aborted&&n instanceof K?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>n}),Promise.reject(n)):(this.pendingKeysSet.delete(t),this.done&&this.unlistenAbortSignal(),n?(Object.defineProperty(e,"_error",{get:()=>n}),this.emit(!1,t),Promise.reject(n)):(Object.defineProperty(e,"_data",{get:()=>r}),this.emit(!1,t),r))}emit(e,t){this.subscribers.forEach((n=>n(e,t)))}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach(((e,t)=>this.pendingKeysSet.delete(t))),this.emit(!0)}async resolveData(e){let t=!1;if(!this.done){let n=()=>this.cancel();e.addEventListener("abort",n),t=await new Promise((t=>{this.subscribe((r=>{e.removeEventListener("abort",n),(r||this.done)&&t(r)}))}))}return t}get done(){return 0===this.pendingKeysSet.size}get unwrappedData(){return m(null!==this.data&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce(((e,t)=>{let[n,r]=t;return Object.assign(e,{[n]:Q(r)})}),{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function Q(e){if(!function(e){return e instanceof Promise&&!0===e._tracked}(e))return e;if(e._error)throw e._error;return e._data}class X{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function J(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const Z=["post","put","patch","delete"],ee=new Set(Z),te=["get",...Z],ne=new Set(te),re=new Set([301,302,303,307,308]),ie=new Set([307,308]),se={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},oe={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ae={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},le=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ce="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ue=!ce;function de(e){m(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=C(e.routes),n=null,r=new Set,i=null,s=null,o=null,a=null!=e.hydrationData,c=S(t,e.history.location,e.basename),u=null;if(null==c){let n=Se(404,{pathname:e.history.location.pathname}),{matches:r,route:i}=Ce(t);c=r,u={[i.id]:n}}let d,f,p=!c.some((e=>e.route.loader))||null!=e.hydrationData,g={historyAction:e.history.action,location:e.history.location,matches:c,initialized:p,navigation:se,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||u,fetchers:new Map,blockers:new Map},v=l.Pop,_=!1,b=!1,w=!1,x=[],E=[],I=new Map,T=0,N=-1,P=new Map,R=new Set,O=new Map,D=new Map,A=new Map,L=!1;function M(e){g=h({},g,e),r.forEach((e=>e(g)))}function j(t,n){var r,i;let s,o=null!=g.actionData&&null!=g.navigation.formMethod&&De(g.navigation.formMethod)&&"loading"===g.navigation.state&&!0!==(null==(r=t.state)?void 0:r._isRedirect);s=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:o?g.actionData:null;let a=n.loaderData?ke(g.loaderData,n.loaderData,n.matches||[],n.errors):g.loaderData;for(let[e]of A)Y(e);let c=!0===_||null!=g.navigation.formMethod&&De(g.navigation.formMethod)&&!0!==(null==(i=t.state)?void 0:i._isRedirect);M(h({},n,{actionData:s,loaderData:a,historyAction:v,location:t,initialized:!0,navigation:se,revalidation:"idle",restoreScrollPosition:Z(t,n.matches||g.matches),preventScrollReset:c,blockers:new Map(g.blockers)})),b||v===l.Pop||(v===l.Push?e.history.push(t,t.state):v===l.Replace&&e.history.replace(t,t.state)),v=l.Pop,_=!1,b=!1,w=!1,x=[],E=[]}async function F(n,r,a){f&&f.abort(),f=null,v=n,b=!0===(a&&a.startUninterruptedRevalidation),function(e,t){if(i&&s&&o){let n=t.map((e=>je(e,g.loaderData))),r=s(e,n)||e.key;i[r]=o()}}(g.location,g.matches),_=!0===(a&&a.preventScrollReset);let c=a&&a.overrideNavigation,u=S(t,r,e.basename);if(!u){let e=Se(404,{pathname:r.pathname}),{matches:n,route:i}=Ce(t);return J(),void j(r,{matches:n,loaderData:{},errors:{[i.id]:e}})}if(!(p=g.location,y=r,p.pathname!==y.pathname||p.search!==y.search||p.hash===y.hash||a&&a.submission&&De(a.submission.formMethod)))return void j(r,{matches:u});var p,y;f=new AbortController;let C,P,A=ye(e.history,r,f.signal,a&&a.submission);if(a&&a.pendingError)P={[xe(u).route.id]:a.pendingError};else if(a&&a.submission&&De(a.submission.formMethod)){let e=await async function(e,t,n,r,i){$();let s,o=h({state:"submitting",location:t},n);M({navigation:o});let a=Fe(r,t);if(a.route.action){if(s=await ve("action",e,a,r,d.basename),e.signal.aborted)return{shortCircuited:!0}}else s={type:k.error,error:Se(405,{method:e.method,pathname:t.pathname,routeId:a.route.id})};if(Pe(s)){let e;return e=i&&null!=i.replace?i.replace:s.location===g.location.pathname+g.location.search,await V(g,s,{submission:n,replace:e}),{shortCircuited:!0}}if(Ne(s)){let e=xe(r,a.route.id);return!0!==(i&&i.replace)&&(v=l.Push),{pendingActionData:{},pendingActionError:{[e.route.id]:s.error}}}if(Te(s))throw Se(400,{type:"defer-action"});return{pendingActionData:{[a.route.id]:s.data}}}(A,r,a.submission,u,{replace:a.replace});if(e.shortCircuited)return;C=e.pendingActionData,P=e.pendingActionError,c=h({state:"loading",location:r},a.submission),A=new Request(A.url,{signal:A.signal})}let{shortCircuited:L,loaderData:F,errors:z}=await async function(t,n,r,i,s,o,a,l){let c=i;if(!c){c=h({state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},s)}let u=s||(c.formMethod&&c.formAction&&c.formData&&c.formEncType?{formMethod:c.formMethod,formAction:c.formAction,formData:c.formData,formEncType:c.formEncType}:void 0),[d,p]=pe(e.history,g,r,u,n,w,x,E,a,l,O);if(J((e=>!(r&&r.some((t=>t.route.id===e)))||d&&d.some((t=>t.route.id===e)))),0===d.length&&0===p.length)return j(n,h({matches:r,loaderData:{},errors:l||null},a?{actionData:a}:{})),{shortCircuited:!0};if(!b){p.forEach((e=>{let t=g.fetchers.get(e.key),n={state:"loading",data:t&&t.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(e.key,n)}));let e=a||g.actionData;M(h({navigation:c},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},p.length>0?{fetchers:new Map(g.fetchers)}:{}))}N=++T,p.forEach((e=>I.set(e.key,f)));let{results:v,loaderResults:y,fetcherResults:_}=await q(g.matches,r,d,p,t);if(t.signal.aborted)return{shortCircuited:!0};p.forEach((e=>I.delete(e.key)));let k=Ee(v);if(k)return await V(g,k,{replace:o}),{shortCircuited:!0};let{loaderData:C,errors:S}=we(g,r,d,y,l,p,_,D);D.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&D.delete(t)}))})),function(){let e=[];for(let t of R){let n=g.fetchers.get(t);m(n,"Expected fetcher: "+t),"loading"===n.state&&(R.delete(t),e.push(t))}G(e)}();let P=K(N);return h({loaderData:C,errors:S},P||p.length>0?{fetchers:new Map(g.fetchers)}:{})}(A,r,u,c,a&&a.submission,a&&a.replace,C,P);L||(f=null,j(r,h({matches:u},C?{actionData:C}:{},{loaderData:F,errors:z})))}function z(e){return g.fetchers.get(e)||oe}async function V(t,n,r){var i;let{submission:s,replace:o,isFetchActionRedirect:a}=void 0===r?{}:r;n.revalidate&&(w=!0);let c=y(t.location,n.location,h({_isRedirect:!0},a?{_isFetchActionRedirect:!0}:{}));if(m(c,"Expected a location on the redirect navigation"),le.test(n.location)&&ce&&void 0!==(null==(i=window)?void 0:i.location)){let t=e.history.createURL(n.location).origin;if(window.location.origin!==t)return void(o?window.location.replace(n.location):window.location.assign(n.location))}f=null;let u=!0===o?l.Replace:l.Push,{formMethod:d,formAction:p,formEncType:g,formData:v}=t.navigation;!s&&d&&p&&v&&g&&(s={formMethod:d,formAction:p,formEncType:g,formData:v}),ie.has(n.status)&&s&&De(s.formMethod)?await F(u,c,{submission:h({},s,{formAction:n.location}),preventScrollReset:_}):await F(u,c,{overrideNavigation:{state:"loading",location:c,formMethod:s?s.formMethod:void 0,formAction:s?s.formAction:void 0,formEncType:s?s.formEncType:void 0,formData:s?s.formData:void 0},preventScrollReset:_})}async function q(t,n,r,i,s){let o=await Promise.all([...r.map((e=>ve("loader",s,e,n,d.basename))),...i.map((t=>ve("loader",ye(e.history,t.path,s.signal),t.match,t.matches,d.basename)))]),a=o.slice(0,r.length),l=o.slice(r.length);return await Promise.all([Ae(t,r,a,s.signal,!1,g.loaderData),Ae(t,i.map((e=>e.match)),l,s.signal,!0)]),{results:o,loaderResults:a,fetcherResults:l}}function $(){w=!0,x.push(...J()),O.forEach(((e,t)=>{I.has(t)&&(E.push(t),B(t))}))}function H(e,t,n){let r=xe(g.matches,t);W(e),M({errors:{[r.route.id]:n},fetchers:new Map(g.fetchers)})}function W(e){I.has(e)&&B(e),O.delete(e),P.delete(e),R.delete(e),g.fetchers.delete(e)}function B(e){let t=I.get(e);m(t,"Expected fetch controller: "+e),t.abort(),I.delete(e)}function G(e){for(let t of e){let e={state:"idle",data:z(t).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(t,e)}}function K(e){let t=[];for(let[n,r]of P)if(r<e){let e=g.fetchers.get(n);m(e,"Expected fetcher: "+n),"loading"===e.state&&(B(n),P.delete(n),t.push(n))}return G(t),t.length>0}function Y(e){g.blockers.delete(e),A.delete(e)}function Q(e,t){let n=g.blockers.get(e)||ae;m("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state),g.blockers.set(e,t),M({blockers:new Map(g.blockers)})}function X(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===A.size)return;A.size>1&&U(!1,"A router only supports one blocker at a time");let i=Array.from(A.entries()),[s,o]=i[i.length-1],a=g.blockers.get(s);return a&&"proceeding"===a.state?void 0:o({currentLocation:t,nextLocation:n,historyAction:r})?s:void 0}function J(e){let t=[];return D.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),D.delete(r))})),t}function Z(e,t){if(i&&s&&o){let n=t.map((e=>je(e,g.loaderData))),r=s(e,n)||e.key,o=i[r];if("number"==typeof o)return o}return null}return d={get basename(){return e.basename},get state(){return g},get routes(){return t},initialize:function(){return n=e.history.listen((t=>{let{action:n,location:r,delta:i}=t;if(L)return void(L=!1);U(0===A.size||null!=i,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let s=X({currentLocation:g.location,nextLocation:r,historyAction:n});return s&&null!=i?(L=!0,e.history.go(-1*i),void Q(s,{state:"blocked",location:r,proceed(){Q(s,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),e.history.go(i)},reset(){Y(s),M({blockers:new Map(d.state.blockers)})}})):F(n,r)})),g.initialized||F(l.Pop,g.location),d},subscribe:function(e){return r.add(e),()=>r.delete(e)},enableScrollRestoration:function(e,t,n){if(i=e,o=t,s=n||(e=>e.key),!a&&g.navigation===se){a=!0;let e=Z(g.location,g.matches);null!=e&&M({restoreScrollPosition:e})}return()=>{i=null,o=null,s=null}},navigate:async function t(n,r){if("number"==typeof n)return void e.history.go(n);let{path:i,submission:s,error:o}=he(n,r),a=g.location,c=y(g.location,i,r&&r.state);c=h({},c,e.history.encodeLocation(c));let u=r&&null!=r.replace?r.replace:void 0,d=l.Push;!0===u?d=l.Replace:!1===u||null!=s&&De(s.formMethod)&&s.formAction===g.location.pathname+g.location.search&&(d=l.Replace);let f=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,p=X({currentLocation:a,nextLocation:c,historyAction:d});if(!p)return await F(d,c,{submission:s,pendingError:o,preventScrollReset:f,replace:r&&r.replace});Q(p,{state:"blocked",location:c,proceed(){Q(p,{state:"proceeding",proceed:void 0,reset:void 0,location:c}),t(n,r)},reset(){Y(p),M({blockers:new Map(g.blockers)})}})},fetch:function(n,r,i,s){if(ue)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");I.has(n)&&B(n);let o=S(t,i,e.basename);if(!o)return void H(n,r,Se(404,{pathname:i}));let{path:a,submission:l}=he(i,s,!0),c=Fe(o,a);_=!0===(s&&s.preventScrollReset),l&&De(l.formMethod)?async function(n,r,i,s,o,a){if($(),O.delete(n),!s.route.action){let e=Se(405,{method:a.formMethod,pathname:i,routeId:r});return void H(n,r,e)}let l=g.fetchers.get(n),c=h({state:"submitting"},a,{data:l&&l.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(n,c),M({fetchers:new Map(g.fetchers)});let u=new AbortController,p=ye(e.history,i,u.signal,a);I.set(n,u);let y=await ve("action",p,s,o,d.basename);if(p.signal.aborted)return void(I.get(n)===u&&I.delete(n));if(Pe(y)){I.delete(n),R.add(n);let e=h({state:"loading"},a,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(n,e),M({fetchers:new Map(g.fetchers)}),V(g,y,{isFetchActionRedirect:!0})}if(Ne(y))return void H(n,r,y.error);if(Te(y))throw Se(400,{type:"defer-action"});let _=g.navigation.location||g.location,b=ye(e.history,_,u.signal),k="idle"!==g.navigation.state?S(t,g.navigation.location,e.basename):g.matches;m(k,"Didn't find any matches after fetcher action");let C=++T;P.set(n,C);let A=h({state:"loading",data:y.data},a,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(n,A);let[L,F]=pe(e.history,g,k,a,_,w,x,E,{[s.route.id]:y.data},void 0,O);F.filter((e=>e.key!==n)).forEach((e=>{let t=e.key,n=g.fetchers.get(t),r={state:"loading",data:n&&n.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(t,r),I.set(t,u)})),M({fetchers:new Map(g.fetchers)});let{results:z,loaderResults:U,fetcherResults:W}=await q(g.matches,k,L,F,b);if(u.signal.aborted)return;P.delete(n),I.delete(n),F.forEach((e=>I.delete(e.key)));let B=Ee(z);if(B)return V(g,B);let{loaderData:G,errors:Y}=we(g,g.matches,L,U,void 0,F,W,D),Q={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(n,Q);let X=K(C);"loading"===g.navigation.state&&C>N?(m(v,"Expected pending action"),f&&f.abort(),j(g.navigation.location,{matches:k,loaderData:G,errors:Y,fetchers:new Map(g.fetchers)})):(M(h({errors:Y,loaderData:ke(g.loaderData,G,k,Y)},X?{fetchers:new Map(g.fetchers)}:{})),w=!1)}(n,r,a,c,o,l):(O.set(n,{routeId:r,path:a,match:c,matches:o}),async function(t,n,r,i,s,o){let a=g.fetchers.get(t),l=h({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},o,{data:a&&a.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(t,l),M({fetchers:new Map(g.fetchers)});let c=new AbortController,u=ye(e.history,r,c.signal);I.set(t,c);let f=await ve("loader",u,i,s,d.basename);Te(f)&&(f=await Le(f,u.signal,!0)||f);I.get(t)===c&&I.delete(t);if(u.signal.aborted)return;if(Pe(f))return void await V(g,f);if(Ne(f)){let e=xe(g.matches,n);return g.fetchers.delete(t),void M({fetchers:new Map(g.fetchers),errors:{[e.route.id]:f.error}})}m(!Te(f),"Unhandled fetcher deferred data");let p={state:"idle",data:f.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(t,p),M({fetchers:new Map(g.fetchers)})}(n,r,a,c,o,l))},revalidate:function(){$(),M({revalidation:"loading"}),"submitting"!==g.navigation.state&&("idle"!==g.navigation.state?F(v||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation}):F(g.historyAction,g.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:z,deleteFetcher:W,dispose:function(){n&&n(),r.clear(),f&&f.abort(),g.fetchers.forEach(((e,t)=>W(t))),g.blockers.forEach(((e,t)=>Y(t)))},getBlocker:function(e,t){let n=g.blockers.get(e)||ae;return A.get(e)!==t&&A.set(e,t),n},deleteBlocker:Y,_internalFetchControllers:I,_internalActiveDeferreds:D},d}Symbol("deferred");function he(e,t,n){void 0===n&&(n=!1);let r,i="string"==typeof e?e:_(e);if(!t||!function(e){return null!=e&&"formData"in e}(t))return{path:i};if(t.formMethod&&!Oe(t.formMethod))return{path:i,error:Se(405,{method:t.formMethod})};if(t.formData&&(r={formMethod:t.formMethod||"get",formAction:Ie(i),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},De(r.formMethod)))return{path:i,submission:r};let s=b(i),o=_e(t.formData);return n&&s.search&&Me(s.search)&&o.append("index",""),s.search="?"+o,{path:_(s),submission:r}}function fe(e,t){let n=e;if(t){let r=e.findIndex((e=>e.route.id===t));r>=0&&(n=e.slice(0,r))}return n}function pe(e,t,n,r,i,s,o,a,l,c,u){let d=c?Object.values(c)[0]:l?Object.values(l)[0]:void 0,f=e.createURL(t.location),p=e.createURL(i),m=s||f.toString()===p.toString()||f.search!==p.search,g=c?Object.keys(c)[0]:void 0,v=fe(n,g).filter(((e,n)=>{if(null==e.route.loader)return!1;if(function(e,t,n){let r=!t||n.route.id!==t.route.id,i=void 0===e[n.route.id];return r||i}(t.loaderData,t.matches[n],e)||o.some((t=>t===e.route.id)))return!0;let i=t.matches[n],s=e;return ge(e,h({currentUrl:f,currentParams:i.params,nextUrl:p,nextParams:s.params},r,{actionResult:d,defaultShouldRevalidate:m||me(i,s)}))})),y=[];return u&&u.forEach(((e,i)=>{if(n.some((t=>t.route.id===e.routeId)))if(a.includes(i))y.push(h({key:i},e));else{ge(e.match,h({currentUrl:f,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:d,defaultShouldRevalidate:m}))&&y.push(h({key:i},e))}})),[v,y]}function me(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ge(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"==typeof n)return n}return t.defaultShouldRevalidate}async function ve(e,t,n,r,i,s,o,a){let l,c,u;void 0===i&&(i="/"),void 0===s&&(s=!1),void 0===o&&(o=!1);let d=new Promise(((e,t)=>u=t)),h=()=>u();t.signal.addEventListener("abort",h);try{let r=n.route[e];m(r,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),c=await Promise.race([r({request:t,params:n.params,context:a}),d]),m(void 0!==c,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){l=k.error,c=e}finally{t.signal.removeEventListener("abort",h)}if(Re(c)){let e,a=c.status;if(re.has(a)){let e=c.headers.get("Location");if(m(e,"Redirects returned/thrown from loaders/actions must have a Location header"),le.test(e)){if(!s){let n=new URL(t.url),r=e.startsWith("//")?new URL(n.protocol+e):new URL(e);r.origin===n.origin&&(e=r.pathname+r.search+r.hash)}}else{let s=$(e,q(r.slice(0,r.indexOf(n)+1)).map((e=>e.pathnameBase)),new URL(t.url).pathname);if(m(_(s),"Unable to resolve redirect location: "+e),i){let e=s.pathname;s.pathname="/"===e?i:H([i,e])}e=_(s)}if(s)throw c.headers.set("Location",e),c;return{type:k.redirect,status:a,location:e,revalidate:null!==c.headers.get("X-Remix-Revalidate")}}if(o)throw{type:l||k.data,response:c};let u=c.headers.get("Content-Type");return e=u&&/\bapplication\/json\b/.test(u)?await c.json():await c.text(),l===k.error?{type:l,error:new X(a,c.statusText,e),headers:c.headers}:{type:k.data,data:e,statusCode:c.status,headers:c.headers}}return l===k.error?{type:l,error:c}:c instanceof Y?{type:k.deferred,deferredData:c}:{type:k.data,data:c}}function ye(e,t,n,r){let i=e.createURL(Ie(t)).toString(),s={signal:n};if(r&&De(r.formMethod)){let{formMethod:e,formEncType:t,formData:n}=r;s.method=e.toUpperCase(),s.body="application/x-www-form-urlencoded"===t?_e(n):n}return new Request(i,s)}function _e(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function be(e,t,n,r,i){let s,o={},a=null,l=!1,c={};return n.forEach(((n,u)=>{let d=t[u].route.id;if(m(!Pe(n),"Cannot handle redirect results in processLoaderData"),Ne(n)){let t=xe(e,d),i=n.error;r&&(i=Object.values(r)[0],r=void 0),a=a||{},null==a[t.route.id]&&(a[t.route.id]=i),o[d]=void 0,l||(l=!0,s=J(n.error)?n.error.status:500),n.headers&&(c[d]=n.headers)}else Te(n)?(i.set(d,n.deferredData),o[d]=n.deferredData.data):o[d]=n.data,null==n.statusCode||200===n.statusCode||l||(s=n.statusCode),n.headers&&(c[d]=n.headers)})),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:s||200,loaderHeaders:c}}function we(e,t,n,r,i,s,o,a){let{loaderData:l,errors:c}=be(t,n,r,i,a);for(let t=0;t<s.length;t++){let{key:n,match:r}=s[t];m(void 0!==o&&void 0!==o[t],"Did not find corresponding fetcher result");let i=o[t];if(Ne(i)){let t=xe(e.matches,r.route.id);c&&c[t.route.id]||(c=h({},c,{[t.route.id]:i.error})),e.fetchers.delete(n)}else if(Pe(i))m(!1,"Unhandled fetcher revalidation redirect");else if(Te(i))m(!1,"Unhandled fetcher deferred data");else{let t={state:"idle",data:i.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(n,t)}}return{loaderData:l,errors:c}}function ke(e,t,n,r){let i=h({},t);for(let s of n){let n=s.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(i[n]=t[n]):void 0!==e[n]&&(i[n]=e[n]),r&&r.hasOwnProperty(n))break}return i}function xe(e,t){return(t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e]).reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function Ce(e){let t=e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Se(e,t){let{pathname:n,routeId:r,method:i,type:s}=void 0===t?{}:t,o="Unknown Server Error",a="Unknown @remix-run/router error";return 400===e?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===s&&(a="defer() is not supported in actions")):403===e?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):404===e?(o="Not Found",a='No route matches URL "'+n+'"'):405===e&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new X(e||500,o,new Error(a),!0)}function Ee(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Pe(n))return n}}function Ie(e){return _(h({},"string"==typeof e?b(e):e,{hash:""}))}function Te(e){return e.type===k.deferred}function Ne(e){return e.type===k.error}function Pe(e){return(e&&e.type)===k.redirect}function Re(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"object"==typeof e.headers&&void 0!==e.body}function Oe(e){return ne.has(e)}function De(e){return ee.has(e)}async function Ae(e,t,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=t[o],c=e.find((e=>e.route.id===l.route.id)),u=null!=c&&!me(c,l)&&void 0!==(s&&s[l.route.id]);Te(a)&&(i||u)&&await Le(a,r,i).then((e=>{e&&(n[o]=e||n[o])}))}}async function Le(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:k.data,data:e.deferredData.unwrappedData}}catch(e){return{type:k.error,error:e}}return{type:k.data,data:e.deferredData.data}}}function Me(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function je(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Fe(e,t){let n="string"==typeof t?b(t).search:t.search;if(e[e.length-1].route.index&&Me(n||""))return e[e.length-1];let r=q(e);return r[r.length-1]}
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */u=s("acw62"),u=s("acw62")
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */;function ze(){return ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze.apply(this,arguments)}const Ue="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:Ve,useEffect:qe,useLayoutEffect:$e,useDebugValue:He}=u;function We(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!Ue(n,e)}catch(e){return!0}}const Be=!!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:i},s]=Ve({inst:{value:r,getSnapshot:t}});return $e((()=>{i.value=r,i.getSnapshot=t,We(i)&&s({inst:i})}),[e,r,t]),qe((()=>{We(i)&&s({inst:i});return e((()=>{We(i)&&s({inst:i})}))}),[e]),He(r),r},Ge="useSyncExternalStore"in u?u.useSyncExternalStore:Be,Ke=u.createContext(null),Ye=u.createContext(null),Qe=u.createContext(null),Xe=u.createContext(null),Je=u.createContext({outlet:null,matches:[]}),Ze=u.createContext(null);function et(e,t){let{relative:n}=void 0===t?{}:t;!tt()&&m(!1);let{basename:r,navigator:i}=u.useContext(Qe),{hash:s,pathname:o,search:a}=ot(e,{relative:n}),l=o;return"/"!==r&&(l="/"===o?r:H([r,o])),i.createHref({pathname:l,search:a,hash:s})}function tt(){return null!=u.useContext(Xe)}function nt(){return!tt()&&m(!1),u.useContext(Xe).location}function rt(){!tt()&&m(!1);let{basename:e,navigator:t}=u.useContext(Qe),{matches:n}=u.useContext(Je),{pathname:r}=nt(),i=JSON.stringify(q(n).map((e=>e.pathnameBase))),s=u.useRef(!1);return u.useEffect((()=>{s.current=!0})),u.useCallback((function(n,o){if(void 0===o&&(o={}),!s.current)return;if("number"==typeof n)return void t.go(n);let a=$(n,JSON.parse(i),r,"path"===o.relative);"/"!==e&&(a.pathname="/"===a.pathname?e:H([e,a.pathname])),(o.replace?t.replace:t.push)(a,o.state,o)}),[e,t,i,r])}const it=u.createContext(null);function st(e){let t=u.useContext(Je).outlet;return t?u.createElement(it.Provider,{value:e},t):t}function ot(e,t){let{relative:n}=void 0===t?{}:t,{matches:r}=u.useContext(Je),{pathname:i}=nt(),s=JSON.stringify(q(r).map((e=>e.pathnameBase)));return u.useMemo((()=>$(e,JSON.parse(s),i,"path"===n)),[e,s,i,n])}function at(){let e=function(){var e;let t=u.useContext(Ze),n=mt(ft.UseRouteError),r=gt(ft.UseRouteError);return t||(null==(e=n.errors)?void 0:e[r])}(),t=J(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:i},n):null,null)}class lt extends u.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?u.createElement(Je.Provider,{value:this.props.routeContext},u.createElement(Ze.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ct(e){let{routeContext:t,match:n,children:r}=e,i=u.useContext(Ke);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(Je.Provider,{value:t},r)}function ut(e,t,n){if(void 0===t&&(t=[]),null==e){if(null==n||!n.errors)return null;e=n.matches}let r=e,i=null==n?void 0:n.errors;if(null!=i){let e=r.findIndex((e=>e.route.id&&(null==i?void 0:i[e.route.id])));!(e>=0)&&m(!1),r=r.slice(0,Math.min(r.length,e+1))}return r.reduceRight(((e,s,o)=>{let a=s.route.id?null==i?void 0:i[s.route.id]:null,l=n?s.route.errorElement||u.createElement(at,null):null,c=t.concat(r.slice(0,o+1)),d=()=>u.createElement(ct,{match:s,routeContext:{outlet:e,matches:c}},a?l:void 0!==s.route.element?s.route.element:e);return n&&(s.route.errorElement||0===o)?u.createElement(lt,{location:n.location,component:l,error:a,children:d(),routeContext:{outlet:null,matches:c}}):d()}),null)}var dt,ht,ft,pt;function mt(e){let t=u.useContext(Ye);return!t&&m(!1),t}function gt(e){let t=function(e){let t=u.useContext(Je);return!t&&m(!1),t}(),n=t.matches[t.matches.length-1];return!n.route.id&&m(!1),n.route.id}(ht=dt||(dt={})).UseBlocker="useBlocker",ht.UseRevalidator="useRevalidator",(pt=ft||(ft={})).UseLoaderData="useLoaderData",pt.UseActionData="useActionData",pt.UseRouteError="useRouteError",pt.UseNavigation="useNavigation",pt.UseRouteLoaderData="useRouteLoaderData",pt.UseMatches="useMatches",pt.UseRevalidator="useRevalidator";function vt(e){let{fallbackElement:t,router:n}=e,r=Ge(n.subscribe,(()=>n.state),(()=>n.state)),i=u.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),s=n.basename||"/";return u.createElement(u.Fragment,null,u.createElement(Ke.Provider,{value:{router:n,navigator:i,static:!1,basename:s}},u.createElement(Ye.Provider,{value:r},u.createElement(wt,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?u.createElement(kt,null):t))),null)}function yt(e){let{to:t,replace:n,state:r,relative:i}=e;!tt()&&m(!1);let s=u.useContext(Ye),o=rt();return u.useEffect((()=>{s&&"idle"!==s.navigation.state||o(t,{replace:n,state:r,relative:i})})),null}function _t(e){return st(e.context)}function bt(e){m(!1)}function wt(e){let{basename:t="/",children:n=null,location:r,navigationType:i=l.Pop,navigator:s,static:o=!1}=e;tt()&&m(!1);let a=t.replace(/^\/*/,"/"),c=u.useMemo((()=>({basename:a,navigator:s,static:o})),[a,s,o]);"string"==typeof r&&(r=b(r));let{pathname:d="/",search:h="",hash:f="",state:p=null,key:g="default"}=r,v=u.useMemo((()=>{let e=z(d,a);return null==e?null:{pathname:e,search:h,hash:f,state:p,key:g}}),[a,d,h,f,p,g]);return null==v?null:u.createElement(Qe.Provider,{value:c},u.createElement(Xe.Provider,{children:n,value:{location:v,navigationType:i}}))}function kt(e){let{children:t,location:n}=e,r=u.useContext(Ke);return function(e,t){!tt()&&m(!1);let n,{navigator:r}=u.useContext(Qe),i=u.useContext(Ye),{matches:s}=u.useContext(Je),o=s[s.length-1],a=o?o.params:{},c=(o&&o.pathname,o?o.pathnameBase:"/"),d=(o&&o.route,nt());if(t){var h;let e="string"==typeof t?b(t):t;"/"!==c&&!(null==(h=e.pathname)?void 0:h.startsWith(c))&&m(!1),n=e}else n=d;let f=n.pathname||"/",p=S(e,{pathname:"/"===c?f:f.slice(c.length)||"/"}),g=ut(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},a,e.params),pathname:H([c,r.encodeLocation?r.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:H([c,r.encodeLocation?r.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,i||void 0);return t&&g?u.createElement(Xe.Provider,{value:{location:ze({pathname:"/",search:"",hash:"",state:null,key:"default"},n),navigationType:l.Pop}},g):g}(r&&!t?r.router.routes:Et(t),n)}var xt,Ct;(Ct=xt||(xt={}))[Ct.pending=0]="pending",Ct[Ct.success=1]="success",Ct[Ct.error=2]="error";new Promise((()=>{}));class St extends u.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:n}=this.props,r=null,i=xt.pending;if(n instanceof Promise)if(this.state.error){xt.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_error",{get:()=>e})}else n._tracked?(n,void 0!==r._error?xt.error:void 0!==r._data?xt.success:xt.pending):(xt.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else xt.success,Promise.resolve(),Object.defineProperty(r,"_tracked",{get:()=>!0}),Object.defineProperty(r,"_data",{get:()=>n});if(i===xt.error&&r._error instanceof K)throw $7939e29d663dd3ed$var$neverSettledPromise;if(i===xt.error&&!t)throw r._error;if(i===xt.error)return u.createElement($7939e29d663dd3ed$var$AwaitContext.Provider,{value:r,children:t});if(i===xt.success)return u.createElement($7939e29d663dd3ed$var$AwaitContext.Provider,{value:r,children:e});throw r}}function Et(e,t){void 0===t&&(t=[]);let n=[];return u.Children.forEach(e,((e,r)=>{if(!u.isValidElement(e))return;if(e.type===u.Fragment)return void n.push.apply(n,Et(e.props.children,t));e.type!==bt&&m(!1),e.props.index&&e.props.children&&m(!1);let i=[...t,r],s={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(s.children=Et(e.props.children,i)),n.push(s)})),n}function It(e){return e.map((e=>{let t=ze({},e);return null==t.hasErrorBoundary&&(t.hasErrorBoundary=null!=t.errorElement),t.children&&(t.children=It(t.children)),t}))}function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}function Nt(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const Pt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Rt(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Tt({},t,{errors:Ot(t.errors)})),t}function Ot(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&"RouteErrorResponse"===r.__type)n[e]=new X(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){let t=new Error(r.message);t.stack="",n[e]=t}else n[e]=r;return n}const Dt="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,At=u.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d}=e,h=Nt(e,Pt),f=!1;if(Dt&&"string"==typeof c&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(c)){n=c;let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c);t.origin===e.origin?c=t.pathname+t.search+t.hash:f=!0}let p=et(c,{relative:i}),m=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=void 0===t?{}:t,a=rt(),l=nt(),c=ot(e,{relative:o});return u.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:_(l)===_(c);a(e,{replace:n,state:i,preventScrollReset:s,relative:o})}}),[l,a,c,r,i,n,e,s,o])}(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i});return u.createElement("a",Tt({},h,{href:n||p,onClick:f||s?r:function(e){r&&r(e),e.defaultPrevented||m(e)},ref:t,target:l}))}));var Lt,Mt;!function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(Lt||(Lt={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Mt||(Mt={}));u=s("acw62"),u=s("acw62");var jt=e=>"checkbox"===e.type,Ft=e=>e instanceof Date,zt=e=>null==e;const Ut=e=>"object"==typeof e;var Vt=e=>!zt(e)&&!Array.isArray(e)&&Ut(e)&&!Ft(e),qt=e=>Vt(e)&&e.target?jt(e.target)?e.target.checked:e.target.value:e,$t=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),Ht=e=>Array.isArray(e)?e.filter(Boolean):[],Wt=e=>void 0===e,Bt=(e,t,n)=>{if(!t||!Vt(e))return n;const r=Ht(t.split(/[,[\].]+?/)).reduce(((e,t)=>zt(e)?e:e[t]),e);return Wt(r)||r===e?Wt(e[t])?n:e[t]:r};const Gt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Kt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Yt="max",Qt="min",Xt="maxLength",Jt="minLength",Zt="pattern",en="required",tn="validate";t(u).createContext(null);var nn=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const i=s;return t._proxyFormState[i]!==Kt.all&&(t._proxyFormState[i]=!r||Kt.all),n&&(n[i]=!0),e[i]}});return i},rn=e=>Vt(e)&&!Object.keys(e).length,sn=(e,t,n,r)=>{n(e);const{name:i,...s}=e;return rn(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find((e=>t[e]===(!r||Kt.all)))},on=e=>Array.isArray(e)?e:[e];function an(e){const n=t(u).useRef(e);n.current=e,t(u).useEffect((()=>{const t=!e.disabled&&n.current.subject.subscribe({next:n.current.next});return()=>{t&&t.unsubscribe()}}),[e.disabled])}var ln=e=>"string"==typeof e,cn=(e,t,n,r,i)=>ln(e)?(r&&t.watch.add(e),Bt(n,e,i)):Array.isArray(e)?e.map((e=>(r&&t.watch.add(e),Bt(n,e)))):(r&&(t.watchAll=!0),n),un=e=>{const t=e.constructor&&e.constructor.prototype;return Vt(t)&&t.hasOwnProperty("isPrototypeOf")},dn="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function hn(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(dn&&(e instanceof Blob||e instanceof FileList)||!n&&!Vt(e))return e;if(t=n?[]:{},Array.isArray(e)||un(e))for(const n in e)t[n]=hn(e[n]);else t=e}return t}var fn=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},pn=e=>/^\w*$/.test(e),mn=e=>Ht(e.replace(/["|']|\]/g,"").split(/\.|\[/));function gn(e,t,n){let r=-1;const i=pn(t)?[t]:mn(t),s=i.length,o=s-1;for(;++r<s;){const t=i[r];let s=n;if(r!==o){const n=e[t];s=Vt(n)||Array.isArray(n)?n:isNaN(+i[r+1])?{}:[]}e[t]=s,e=e[t]}return e}const vn=(e,t,n)=>{for(const r of n||Object.keys(e)){const n=Bt(e,r);if(n){const{_f:e,...r}=n;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else Vt(r)&&vn(r,t)}}};var yn=e=>({isOnSubmit:!e||e===Kt.onSubmit,isOnBlur:e===Kt.onBlur,isOnChange:e===Kt.onChange,isOnAll:e===Kt.all,isOnTouch:e===Kt.onTouched}),_n=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),bn=(e,t,n)=>{const r=Ht(Bt(e,n));return gn(r,"root",t[n]),gn(e,n,r),e},wn=e=>"boolean"==typeof e,kn=e=>"file"===e.type,xn=e=>"function"==typeof e,Cn=e=>{if(!dn)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Sn=e=>ln(e)||t(u).isValidElement(e),En=e=>"radio"===e.type,In=e=>e instanceof RegExp;const Tn={value:!1,isValid:!1},Nn={value:!0,isValid:!0};var Pn=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Wt(e[0].attributes.value)?Wt(e[0].value)||""===e[0].value?Nn:{value:e[0].value,isValid:!0}:Nn:Tn}return Tn};const Rn={isValid:!1,value:null};var On=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),Rn):Rn;function Dn(e,t,n="validate"){if(Sn(e)||Array.isArray(e)&&e.every(Sn)||wn(e)&&!e)return{type:n,message:Sn(e)?e:"",ref:t}}var An=e=>Vt(e)&&!In(e)?e:{value:e,message:""},Ln=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:c,min:u,max:d,pattern:h,validate:f,name:p,valueAsNumber:m,mount:g,disabled:v}=e._f,y=Bt(t,p);if(!g||v)return{};const _=o?o[0]:s,b=e=>{r&&_.reportValidity&&(_.setCustomValidity(wn(e)?"":e||""),_.reportValidity())},w={},k=En(s),x=jt(s),C=k||x,S=(m||kn(s))&&Wt(s.value)&&Wt(y)||Cn(s)&&""===s.value||""===y||Array.isArray(y)&&!y.length,E=fn.bind(null,p,n,w),I=(e,t,n,r=Xt,i=Jt)=>{const o=e?t:n;w[p]={type:e?r:i,message:o,ref:s,...E(e?r:i,o)}};if(i?!Array.isArray(y)||!y.length:a&&(!C&&(S||zt(y))||wn(y)&&!y||x&&!Pn(o).isValid||k&&!On(o).isValid)){const{value:e,message:t}=Sn(a)?{value:!!a,message:a}:An(a);if(e&&(w[p]={type:en,message:t,ref:_,...E(en,t)},!n))return b(t),w}if(!(S||zt(u)&&zt(d))){let e,t;const r=An(d),i=An(u);if(zt(y)||isNaN(y)){const n=s.valueAsDate||new Date(y),o=e=>new Date((new Date).toDateString()+" "+e),a="time"==s.type,l="week"==s.type;ln(r.value)&&y&&(e=a?o(y)>o(r.value):l?y>r.value:n>new Date(r.value)),ln(i.value)&&y&&(t=a?o(y)<o(i.value):l?y<i.value:n<new Date(i.value))}else{const n=s.valueAsNumber||(y?+y:y);zt(r.value)||(e=n>r.value),zt(i.value)||(t=n<i.value)}if((e||t)&&(I(!!e,r.message,i.message,Yt,Qt),!n))return b(w[p].message),w}if((l||c)&&!S&&(ln(y)||i&&Array.isArray(y))){const e=An(l),t=An(c),r=!zt(e.value)&&y.length>e.value,i=!zt(t.value)&&y.length<t.value;if((r||i)&&(I(r,e.message,t.message),!n))return b(w[p].message),w}if(h&&!S&&ln(y)){const{value:e,message:t}=An(h);if(In(e)&&!y.match(e)&&(w[p]={type:Zt,message:t,ref:s,...E(Zt,t)},!n))return b(t),w}if(f)if(xn(f)){const e=Dn(await f(y,t),_);if(e&&(w[p]={...e,...E(tn,e.message)},!n))return b(e.message),w}else if(Vt(f)){let e={};for(const r in f){if(!rn(e)&&!n)break;const i=Dn(await f[r](y,t),_,r);i&&(e={...i,...E(r,i.message)},b(i.message),n&&(w[p]=e))}if(!rn(e)&&(w[p]={ref:_,...e},!n))return w}return b(!0),w};function Mn(e,t){const n=Array.isArray(t)?t:pn(t)?[t]:mn(t),r=1===n.length?e:function(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Wt(e)?r++:e[t[r++]];return e}(e,n),i=n.length-1,s=n[i];return r&&delete r[s],0!==i&&(Vt(r)&&rn(r)||Array.isArray(r)&&function(e){for(const t in e)if(!Wt(e[t]))return!1;return!0}(r))&&Mn(e,n.slice(0,-1)),e}function jn(){let e=[];return{get observers(){return e},next:t=>{for(const n of e)n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var Fn=e=>zt(e)||!Ut(e);function zn(e,t){if(Fn(e)||Fn(t))return e===t;if(Ft(e)&&Ft(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const n=e[i];if(!r.includes(i))return!1;if("ref"!==i){const e=t[i];if(Ft(n)&&Ft(e)||Vt(n)&&Vt(e)||Array.isArray(n)&&Array.isArray(e)?!zn(n,e):n!==e)return!1}}return!0}var Un=e=>"select-multiple"===e.type,Vn=e=>En(e)||jt(e),qn=e=>Cn(e)&&e.isConnected,$n=e=>{for(const t in e)if(xn(e[t]))return!0;return!1};function Hn(e,t={}){const n=Array.isArray(e);if(Vt(e)||n)for(const n in e)Array.isArray(e[n])||Vt(e[n])&&!$n(e[n])?(t[n]=Array.isArray(e[n])?[]:{},Hn(e[n],t[n])):zt(e[n])||(t[n]=!0);return t}function Wn(e,t,n){const r=Array.isArray(e);if(Vt(e)||r)for(const r in e)Array.isArray(e[r])||Vt(e[r])&&!$n(e[r])?Wt(t)||Fn(n[r])?n[r]=Array.isArray(e[r])?Hn(e[r],[]):{...Hn(e[r])}:Wn(e[r],zt(t)?{}:t[r],n[r]):zn(e[r],t[r])?delete n[r]:n[r]=!0;return n}var Bn=(e,t)=>Wn(e,t,Hn(t)),Gn=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Wt(e)?e:t?""===e?NaN:e?+e:e:n&&ln(e)?new Date(e):r?r(e):e;function Kn(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return kn(t)?t.files:En(t)?On(e.refs).value:Un(t)?[...t.selectedOptions].map((({value:e})=>e)):jt(t)?Pn(e.refs).value:Gn(Wt(t.value)?e.ref.value:t.value,e)}var Yn=(e,t,n,r)=>{const i={};for(const n of e){const e=Bt(t,n);e&&gn(i,n,e._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Qn=e=>Wt(e)?e:In(e)?e.source:Vt(e)?In(e.value)?e.value.source:e.value:e,Xn=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Jn(e,t,n){const r=Bt(e,n);if(r||pn(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const r=i.join("."),s=Bt(t,r),o=Bt(e,r);if(s&&!Array.isArray(s)&&n!==r)return{name:n};if(o&&o.type)return{name:r,error:o};i.pop()}return{name:n}}var Zn=(e,t,n,r,i)=>!i.isOnAll&&(!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:!(n?r.isOnChange:i.isOnChange)||e),er=(e,t)=>!Ht(Bt(e,t)).length&&Mn(e,t);const tr={mode:Kt.onSubmit,reValidateMode:Kt.onChange,shouldFocusError:!0};function nr(e={},t){let n={...tr,...e};const r=e.resetOptions&&e.resetOptions.keepDirtyValues;let i,s={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},a=(Vt(n.defaultValues)||Vt(n.values))&&hn(n.defaultValues||n.values)||{},l=n.shouldUnregister?{}:hn(a),c={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={watch:jn(),array:jn(),state:jn()},p=yn(n.mode),m=yn(n.reValidateMode),g=n.criteriaMode===Kt.all,v=async e=>{if(h.isValid||e){const e=n.resolver?rn((await k()).errors):await x(o,!0);e!==s.isValid&&f.state.next({isValid:e})}},y=e=>h.isValidating&&f.state.next({isValidating:e}),_=(e,t,n,r)=>{const i=Bt(o,e);if(i){const s=Bt(l,e,Wt(n)?Bt(a,e):n);Wt(s)||r&&r.defaultChecked||t?gn(l,e,t?s:Kn(i._f)):E(e,s),c.mount&&v()}},b=(e,t,n,r,i)=>{let o=!1,l=!1;const c={name:e};if(!n||r){h.isDirty&&(l=s.isDirty,s.isDirty=c.isDirty=C(),o=l!==c.isDirty);const n=zn(Bt(a,e),t);l=Bt(s.dirtyFields,e),n?Mn(s.dirtyFields,e):gn(s.dirtyFields,e,!0),c.dirtyFields=s.dirtyFields,o=o||h.dirtyFields&&l!==!n}if(n){const t=Bt(s.touchedFields,e);t||(gn(s.touchedFields,e,n),c.touchedFields=s.touchedFields,o=o||h.touchedFields&&t!==n)}return o&&i&&f.state.next(c),o?c:{}},w=(t,n,r,o)=>{const a=Bt(s.errors,t),l=h.isValid&&wn(n)&&s.isValid!==n;var c;if(e.delayError&&r?(c=()=>((e,t)=>{gn(s.errors,e,t),f.state.next({errors:s.errors})})(t,r),i=e=>{clearTimeout(d),d=window.setTimeout(c,e)},i(e.delayError)):(clearTimeout(d),i=null,r?gn(s.errors,t,r):Mn(s.errors,t)),(r?!zn(a,r):a)||!rn(o)||l){const e={...o,...l&&wn(n)?{isValid:n}:{},errors:s.errors,name:t};s={...s,...e},f.state.next(e)}y(!1)},k=async e=>await n.resolver(l,n.context,Yn(e||u.mount,o,n.criteriaMode,n.shouldUseNativeValidation)),x=async(e,t,r={valid:!0})=>{for(const i in e){const o=e[i];if(o){const{_f:e,...i}=o;if(e){const i=u.array.has(e.name),a=await Ln(o,l,g,n.shouldUseNativeValidation,i);if(a[e.name]&&(r.valid=!1,t))break;!t&&(Bt(a,e.name)?i?bn(s.errors,a,e.name):gn(s.errors,e.name,a[e.name]):Mn(s.errors,e.name))}i&&await x(i,t,r)}}return r.valid},C=(e,t)=>(e&&t&&gn(l,e,t),!zn(R(),a)),S=(e,t,n)=>cn(e,u,{...c.mount?l:Wt(t)?a:ln(e)?{[e]:t}:t},n,t),E=(e,t,n={})=>{const r=Bt(o,e);let i=t;if(r){const n=r._f;n&&(!n.disabled&&gn(l,e,Gn(t,n)),i=Cn(n.ref)&&zt(t)?"":t,Un(n.ref)?[...n.ref.options].forEach((e=>e.selected=i.includes(e.value))):n.refs?jt(n.ref)?n.refs.length>1?n.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):n.refs[0]&&(n.refs[0].checked=!!i):n.refs.forEach((e=>e.checked=e.value===i)):kn(n.ref)?n.ref.value="":(n.ref.value=i,n.ref.type||f.watch.next({name:e})))}(n.shouldDirty||n.shouldTouch)&&b(e,i,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&P(e)},I=(e,t,n)=>{for(const r in t){const i=t[r],s=`${e}.${r}`,a=Bt(o,s);!u.array.has(e)&&Fn(i)&&(!a||a._f)||Ft(i)?E(s,i,n):I(s,i,n)}},T=(e,n,r={})=>{const i=Bt(o,e),s=u.array.has(e),d=hn(n);gn(l,e,d),s?(f.array.next({name:e,values:l}),(h.isDirty||h.dirtyFields)&&r.shouldDirty&&f.state.next({name:e,dirtyFields:Bn(a,l),isDirty:C(e,d)})):!i||i._f||zt(d)?E(e,d,r):I(e,d,r),_n(e,u)&&f.state.next({}),f.watch.next({name:e}),!c.mount&&t()},N=async e=>{const t=e.target;let r=t.name;const a=Bt(o,r);if(a){let c,d;const _=t.type?Kn(a._f):qt(e),C=e.type===Gt.BLUR||e.type===Gt.FOCUS_OUT,S=!Xn(a._f)&&!n.resolver&&!Bt(s.errors,r)&&!a._f.deps||Zn(C,Bt(s.touchedFields,r),s.isSubmitted,m,p),E=_n(r,u,C);gn(l,r,_),C?(a._f.onBlur&&a._f.onBlur(e),i&&i(0)):a._f.onChange&&a._f.onChange(e);const I=b(r,_,C,!1),T=!rn(I)||E;if(!C&&f.watch.next({name:r,type:e.type}),S)return h.isValid&&v(),T&&f.state.next({name:r,...E?{}:I});if(!C&&E&&f.state.next({}),y(!0),n.resolver){const{errors:e}=await k([r]),t=Jn(s.errors,o,r),n=Jn(e,o,t.name||r);c=n.error,r=n.name,d=rn(e)}else c=(await Ln(a,l,g,n.shouldUseNativeValidation))[r],c?d=!1:h.isValid&&(d=await x(o,!0));a._f.deps&&P(a._f.deps),w(r,d,c,I)}},P=async(e,t={})=>{let r,i;const a=on(e);if(y(!0),n.resolver){const t=await(async e=>{const{errors:t}=await k();if(e)for(const n of e){const e=Bt(t,n);e?gn(s.errors,n,e):Mn(s.errors,n)}else s.errors=t;return t})(Wt(e)?e:a);r=rn(t),i=e?!a.some((e=>Bt(t,e))):r}else e?(i=(await Promise.all(a.map((async e=>{const t=Bt(o,e);return await x(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||s.isValid)&&v()):i=r=await x(o);return f.state.next({...!ln(e)||h.isValid&&r!==s.isValid?{}:{name:e},...n.resolver||!e?{isValid:r}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!i&&vn(o,(e=>e&&Bt(s.errors,e)),e?a:u.mount),i},R=e=>{const t={...a,...c.mount?l:{}};return Wt(e)?t:ln(e)?Bt(t,e):e.map((e=>Bt(t,e)))},O=(e,t)=>({invalid:!!Bt((t||s).errors,e),isDirty:!!Bt((t||s).dirtyFields,e),isTouched:!!Bt((t||s).touchedFields,e),error:Bt((t||s).errors,e)}),D=(e,t={})=>{for(const r of e?on(e):u.mount)u.mount.delete(r),u.array.delete(r),Bt(o,r)&&(t.keepValue||(Mn(o,r),Mn(l,r)),!t.keepError&&Mn(s.errors,r),!t.keepDirty&&Mn(s.dirtyFields,r),!t.keepTouched&&Mn(s.touchedFields,r),!n.shouldUnregister&&!t.keepDefaultValue&&Mn(a,r));f.watch.next({}),f.state.next({...s,...t.keepDirty?{isDirty:C()}:{}}),!t.keepIsValid&&v()},A=(e,t={})=>{let r=Bt(o,e);const i=wn(t.disabled);return gn(o,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),u.mount.add(e),r?i&&gn(l,e,t.disabled?void 0:Bt(l,e,Kn(r._f))):_(e,!0,t.value),{...i?{disabled:t.disabled}:{},...n.shouldUseNativeValidation?{required:!!t.required,min:Qn(t.min),max:Qn(t.max),minLength:Qn(t.minLength),maxLength:Qn(t.maxLength),pattern:Qn(t.pattern)}:{},name:e,onChange:N,onBlur:N,ref:i=>{if(i){A(e,t),r=Bt(o,e);const n=Wt(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,s=Vn(n),l=r._f.refs||[];if(s?l.find((e=>e===n)):n===r._f.ref)return;gn(o,e,{_f:{...r._f,...s?{refs:[...l.filter(qn),n,...Array.isArray(Bt(a,e))?[{}]:[]],ref:{type:n.type,name:e}}:{ref:n}}}),_(e,!1,void 0,n)}else r=Bt(o,e,{}),r._f&&(r._f.mount=!1),(n.shouldUnregister||t.shouldUnregister)&&(!$t(u.array,e)||!c.action)&&u.unMount.add(e)}}},L=()=>n.shouldFocusError&&vn(o,(e=>e&&Bt(s.errors,e)),u.mount),M=(n,i={})=>{const d=n||a,p=hn(d),m=n&&!rn(n)?p:a;if(i.keepDefaultValues||(a=d),!i.keepValues){if(i.keepDirtyValues||r)for(const e of u.mount)Bt(s.dirtyFields,e)?gn(m,e,Bt(l,e)):T(e,Bt(m,e));else{if(dn&&Wt(n))for(const e of u.mount){const t=Bt(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(Cn(e)){const t=e.closest("form");if(t){t.reset();break}}}}o={}}l=e.shouldUnregister?i.keepDefaultValues?hn(a):{}:p,f.array.next({values:m}),f.watch.next({values:m})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!c.mount&&t(),c.mount=!h.isValid||!!i.keepIsValid,c.watch=!!e.shouldUnregister,f.state.next({submitCount:i.keepSubmitCount?s.submitCount:0,isDirty:i.keepDirty||i.keepDirtyValues?s.isDirty:!(!i.keepDefaultValues||zn(n,a)),isSubmitted:!!i.keepIsSubmitted&&s.isSubmitted,dirtyFields:i.keepDirty||i.keepDirtyValues?s.dirtyFields:i.keepDefaultValues&&n?Bn(a,n):{},touchedFields:i.keepTouched?s.touchedFields:{},errors:i.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},j=(e,t)=>M(xn(e)?e(l):e,t);return xn(n.defaultValues)&&n.defaultValues().then((e=>{j(e,n.resetOptions),f.state.next({isLoading:!1})})),{control:{register:A,unregister:D,getFieldState:O,_executeSchema:k,_focusError:L,_getWatch:S,_getDirty:C,_updateValid:v,_removeUnmounted:()=>{for(const e of u.unMount){const t=Bt(o,e);t&&(t._f.refs?t._f.refs.every((e=>!qn(e))):!qn(t._f.ref))&&D(e)}u.unMount=new Set},_updateFieldArray:(e,t=[],n,r,i=!0,u=!0)=>{if(r&&n){if(c.action=!0,u&&Array.isArray(Bt(o,e))){const t=n(Bt(o,e),r.argA,r.argB);i&&gn(o,e,t)}if(u&&Array.isArray(Bt(s.errors,e))){const t=n(Bt(s.errors,e),r.argA,r.argB);i&&gn(s.errors,e,t),er(s.errors,e)}if(h.touchedFields&&u&&Array.isArray(Bt(s.touchedFields,e))){const t=n(Bt(s.touchedFields,e),r.argA,r.argB);i&&gn(s.touchedFields,e,t)}h.dirtyFields&&(s.dirtyFields=Bn(a,l)),f.state.next({name:e,isDirty:C(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else gn(l,e,t)},_getFieldArray:t=>Ht(Bt(c.mount?l:a,t,e.shouldUnregister?Bt(a,t,[]):[])),_reset:M,_updateFormState:e=>{s={...s,...e}},_subjects:f,_proxyFormState:h,get _fields(){return o},get _formValues(){return l},get _stateFlags(){return c},set _stateFlags(e){c=e},get _defaultValues(){return a},get _names(){return u},set _names(e){u=e},get _formState(){return s},set _formState(e){s=e},get _options(){return n},set _options(e){n={...n,...e}}},trigger:P,register:A,handleSubmit:(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let i=hn(l);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:e,values:t}=await k();s.errors=e,i=t}else await x(o);Mn(s.errors,"root"),rn(s.errors)?(f.state.next({errors:{}}),await e(i,r)):(t&&await t({...s.errors},r),L()),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:rn(s.errors),submitCount:s.submitCount+1,errors:s.errors})},watch:(e,t)=>xn(e)?f.watch.subscribe({next:n=>e(S(void 0,t),n)}):S(e,t,!0),setValue:T,getValues:R,reset:j,resetField:(e,t={})=>{Bt(o,e)&&(Wt(t.defaultValue)?T(e,Bt(a,e)):(T(e,t.defaultValue),gn(a,e,t.defaultValue)),t.keepTouched||Mn(s.touchedFields,e),t.keepDirty||(Mn(s.dirtyFields,e),s.isDirty=t.defaultValue?C(e,Bt(a,e)):C()),t.keepError||(Mn(s.errors,e),h.isValid&&v()),f.state.next({...s}))},clearErrors:e=>{e&&on(e).forEach((e=>Mn(s.errors,e))),f.state.next({errors:e?s.errors:{}})},unregister:D,setError:(e,t,n)=>{const r=(Bt(o,e,{_f:{}})._f||{}).ref;gn(s.errors,e,{...t,ref:r}),f.state.next({name:e,errors:s.errors,isValid:!1}),n&&n.shouldFocus&&r&&r.focus&&r.focus()},setFocus:(e,t={})=>{const n=Bt(o,e),r=n&&n._f;if(r){const e=r.refs?r.refs[0]:r.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:O}}function rr(e={}){const n=t(u).useRef(),[r,i]=t(u).useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:xn(e.defaultValues)?void 0:e.defaultValues});n.current||(n.current={...nr(e,(()=>i((e=>({...e}))))),formState:r});const s=n.current.control;return s._options=e,an({subject:s._subjects.state,next:e=>{sn(e,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),t(u).useEffect((()=>{s._stateFlags.mount||(s._updateValid(),s._stateFlags.mount=!0),s._stateFlags.watch&&(s._stateFlags.watch=!1,s._subjects.state.next({})),s._removeUnmounted()})),t(u).useEffect((()=>{e.values&&!zn(e.values,s._defaultValues)&&s._reset(e.values,s._options.resetOptions)}),[e.values,s]),t(u).useEffect((()=>{r.submitCount&&s._focusError()}),[s,r.submitCount]),n.current.formState=nn(r,s),n.current}s("acw62");u=s("acw62"),u=s("acw62");var ir={};e(ir,"GenIcon",(()=>ur),(e=>ur=e));u=s("acw62"),u=s("acw62");var sr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},or=t(u).createContext&&t(u).createContext(sr),ar=function(){return ar=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ar.apply(this,arguments)},lr=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function cr(e){return e&&e.map((function(e,n){return t(u).createElement(e.tag,ar({key:n},e.attr),cr(e.child))}))}function ur(e){return function(n){return t(u).createElement(dr,ar({attr:ar({},e.attr)},n),cr(e.child))}}function dr(e){var n=function(n){var r,i=e.attr,s=e.size,o=e.title,a=lr(e,["attr","size","title"]),l=s||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t(u).createElement("svg",ar({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:r,style:ar(ar({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&t(u).createElement("title",null,o),e.children)};return void 0!==or?t(u).createElement(or.Consumer,null,(function(e){return n(e)})):n(sr)}function hr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}}]})(e)}function fr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}}]})(e)}function pr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}}]})(e)}function mr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"}}]})(e)}function gr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}}]})(e)}function vr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}}]})(e)}function yr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}}]})(e)}function _r(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(e)}function br(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.88 15.76V19h-1.75v-1.29c-.74-.18-2.39-.77-3.02-2.96l1.65-.67c.06.22.58 2.09 2.4 2.09.93 0 1.98-.48 1.98-1.61 0-.96-.7-1.46-2.28-2.03-1.1-.39-3.35-1.03-3.35-3.31 0-.1.01-2.4 2.62-2.96V5h1.75v1.24c1.84.32 2.51 1.79 2.66 2.23l-1.58.67c-.11-.35-.59-1.34-1.9-1.34-.7 0-1.81.37-1.81 1.39 0 .95.86 1.31 2.64 1.9 2.4.83 3.01 2.05 3.01 3.45 0 2.63-2.5 3.13-3.02 3.22z"}}]})(e)}function wr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}}]})(e)}function kr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}}]})(e)}function xr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}}]})(e)}function Cr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"}}]})(e)}function Sr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)}function Er(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"}}]})(e)}function Ir(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h8v4h4v12zm-6-3c-1.1 0-2-.9-2-2V9.5c0-.28.22-.5.5-.5s.5.22.5.5V15h2V9.5a2.5 2.5 0 00-5 0V15c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2v4c0 1.1-.9 2-2 2z"}}]})(e)}function Tr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}}]})(e)}function Nr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z",opacity:".87"}},{tag:"path",attr:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z"}}]})(e)}function Pr(e){return(0,ir.GenIcon)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z",opacity:".87"}},{tag:"path",attr:{d:"M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"}}]})(e)}function Rr(){return Rr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rr.apply(this,arguments)}function Or(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function Dr(e,t){return Dr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Dr(e,t)}function Ar(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Dr(e,t)}function Lr(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}u=s("acw62"),u=s("acw62");var Mr={disabled:!1},jr=t(u=s("acw62")).createContext(null),Fr=function(e){return e.scrollTop},zr="unmounted",Ur="exited",Vr="entering",qr="entered",$r="exiting",Hr=function(e){function n(t,n){var r;r=e.call(this,t,n)||this;var i,s=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?s?(i=Ur,r.appearStatus=Vr):i=qr:i=t.unmountOnExit||t.mountOnEnter?zr:Ur,r.state={status:i},r.nextCallback=null,r}Ar(n,e),n.getDerivedStateFromProps=function(e,t){return e.in&&t.status===zr?{status:Ur}:null};var r=n.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==Vr&&n!==qr&&(t=Vr):n!==Vr&&n!==qr||(t=$r)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},r.updateStatus=function(e,n){if(void 0===e&&(e=!1),null!==n)if(this.cancelNextCallback(),n===Vr){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:t(d).findDOMNode(this);r&&Fr(r)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ur&&this.setState({status:zr})},r.performEnter=function(e){var n=this,r=this.props.enter,i=this.context?this.context.isMounting:e,s=this.props.nodeRef?[i]:[t(d).findDOMNode(this),i],o=s[0],a=s[1],l=this.getTimeouts(),c=i?l.appear:l.enter;!e&&!r||Mr.disabled?this.safeSetState({status:qr},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:Vr},(function(){n.props.onEntering(o,a),n.onTransitionEnd(c,(function(){n.safeSetState({status:qr},(function(){n.props.onEntered(o,a)}))}))})))},r.performExit=function(){var e=this,n=this.props.exit,r=this.getTimeouts(),i=this.props.nodeRef?void 0:t(d).findDOMNode(this);n&&!Mr.disabled?(this.props.onExit(i),this.safeSetState({status:$r},(function(){e.props.onExiting(i),e.onTransitionEnd(r.exit,(function(){e.safeSetState({status:Ur},(function(){e.props.onExited(i)}))}))}))):this.safeSetState({status:Ur},(function(){e.props.onExited(i)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,n){this.setNextCallback(n);var r=this.props.nodeRef?this.props.nodeRef.current:t(d).findDOMNode(this),i=null==e&&!this.props.addEndListener;if(r&&!i){if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],o=s[0],a=s[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},r.render=function(){var e=this.state.status;if(e===zr)return null;var n=this.props,r=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,Or(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return t(u).createElement(jr.Provider,{value:null},"function"==typeof r?r(e,i):t(u).cloneElement(t(u).Children.only(r),i))},n}(t(u).Component);function Wr(){}Hr.contextType=jr,Hr.propTypes={},Hr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Wr,onEntering:Wr,onEntered:Wr,onExit:Wr,onExiting:Wr,onExited:Wr},Hr.UNMOUNTED=zr,Hr.EXITED=Ur,Hr.ENTERING=Vr,Hr.ENTERED=qr,Hr.EXITING=$r;var Br=Hr,Gr=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))},Kr=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=Lr(n.className,r):n.setAttribute("class",Lr(n.className&&n.className.baseVal||"",r)));var n,r}))},Yr=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],s=r[1];t.removeClasses(i,"exit"),t.addClass(i,s?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],s=r[1]?"appear":"enter";t.addClass(i,s,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],s=r[1]?"appear":"enter";t.removeClasses(i,s),t.addClass(i,s,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,i=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:r?i+"-active":n[e+"Active"],doneClassName:r?i+"-done":n[e+"Done"]}},t}Ar(n,e);var r=n.prototype;return r.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(r+=" "+i),"active"===n&&e&&Fr(e),r&&(this.appliedClasses[t][n]=r,Gr(e,r))},r.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,s=n.done;this.appliedClasses[t]={},r&&Kr(e,r),i&&Kr(e,i),s&&Kr(e,s)},r.render=function(){var e=this.props,n=(e.classNames,Or(e,["classNames"]));return t(u).createElement(Br,Rr({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(t(u).Component);Yr.defaultProps={classNames:""},Yr.propTypes={};var Qr=Yr;u=s("acw62");function Xr({children:e}){const n=document.getElementById("portal-root"),r=t(u).useCallback((()=>(0,o.jsx)("div",{children:e})),[]);return(0,d.createPortal)((0,o.jsx)(r,{}),n)}u=s("acw62");function Jr({className:e,type:t,text:n,icon:r,onClick:i,isDisabled:s,isloading:a}){return n=n||"",(0,o.jsx)("button",{className:"btn "+e+" "+(s?"disabled":""),type:t,onClick:i,disabled:s,children:a?(0,o.jsx)("div",{className:"loading",children:(0,o.jsx)("div",{})}):(0,o.jsxs)(o.Fragment,{children:[r?(0,o.jsx)("span",{className:r}):"",n]})})}s("acw62");u=s("acw62");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr,ei,ti={},ni=ti={};function ri(){throw new Error("setTimeout has not been defined")}function ii(){throw new Error("clearTimeout has not been defined")}function si(e){if(Zr===setTimeout)return setTimeout(e,0);if((Zr===ri||!Zr)&&setTimeout)return Zr=setTimeout,setTimeout(e,0);try{return Zr(e,0)}catch(t){try{return Zr.call(null,e,0)}catch(t){return Zr.call(this,e,0)}}}!function(){try{Zr="function"==typeof setTimeout?setTimeout:ri}catch(e){Zr=ri}try{ei="function"==typeof clearTimeout?clearTimeout:ii}catch(e){ei=ii}}();var oi,ai=[],li=!1,ci=-1;function ui(){li&&oi&&(li=!1,oi.length?ai=oi.concat(ai):ci=-1,ai.length&&di())}function di(){if(!li){var e=si(ui);li=!0;for(var t=ai.length;t;){for(oi=ai,ai=[];++ci<t;)oi&&oi[ci].run();ci=-1,t=ai.length}oi=null,li=!1,function(e){if(ei===clearTimeout)return clearTimeout(e);if((ei===ii||!ei)&&clearTimeout)return ei=clearTimeout,clearTimeout(e);try{ei(e)}catch(t){try{return ei.call(null,e)}catch(t){return ei.call(this,e)}}}(e)}}function hi(e,t){this.fun=e,this.array=t}function fi(){}ni.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];ai.push(new hi(e,t)),1!==ai.length||li||si(di)},hi.prototype.run=function(){this.fun.apply(null,this.array)},ni.title="browser",ni.browser=!0,ni.env={},ni.argv=[],ni.version="",ni.versions={},ni.on=fi,ni.addListener=fi,ni.once=fi,ni.off=fi,ni.removeListener=fi,ni.removeAllListeners=fi,ni.emit=fi,ni.prependListener=fi,ni.prependOnceListener=fi,ni.listeners=function(e){return[]},ni.binding=function(e){throw new Error("process.binding is not supported")},ni.cwd=function(){return"/"},ni.chdir=function(e){throw new Error("process.chdir is not supported")},ni.umask=function(){return 0};const pi={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},mi=function(e,t){if(!e)throw gi(t)},gi=function(e){return new Error("Firebase Database ("+pi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},vi=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},yi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},_i=function(e){const t=vi(e);return yi.encodeByteArray(t,!0)},bi=function(e){return _i(e).replace(/\./g,"")},wi=function(e){try{return yi.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ki(e){return xi(void 0,e)}function xi(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=xi(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ci=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Si=()=>{try{return Ci()||(()=>{if(void 0===ti||void 0===ti.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&wi(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Ei=e=>{var t,n;return null===(n=null===(t=Si())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Ii=e=>{const t=Ei(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ti=()=>{var e;return null===(e=Si())||void 0===e?void 0:e.config},Ni=e=>{var t;return null===(t=Si())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[bi(JSON.stringify({alg:"none",type:"JWT"})),bi(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Di(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oi())}function Ai(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Li(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Mi(){const e=Oi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ji(){return!0===pi.NODE_CLIENT||!0===pi.NODE_ADMIN}function Fi(){try{return"object"==typeof indexedDB}catch(e){return!1}}class zi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,zi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Vi,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new zi(r,o,n)}}const Vi=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){return JSON.parse(e)}function $i(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=qi(wi(s[0])||""),n=qi(wi(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},Wi=function(e){const t=Hi(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Bi=function(e){const t=Hi(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ki(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Yi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Qi(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Xi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Ji(n)&&Ji(s)){if(!Xi(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Ji(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function es(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ts(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):e<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const t=(s<<5|s>>>27)+r+c+i+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}function rs(e,t){const n=new is(e,t);return n.subscribe.bind(n)}class is{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ss),void 0===r.error&&(r.error=ss),void 0===r.complete&&(r.complete=ss);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function ss(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const as=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,mi(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},ls=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cs(e){return e&&e._delegate?e._delegate:e}class us{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Pi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===ds?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class fs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hs(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=[];var ms,gs;(gs=ms||(ms={}))[gs.DEBUG=0]="DEBUG",gs[gs.VERBOSE=1]="VERBOSE",gs[gs.INFO=2]="INFO",gs[gs.WARN=3]="WARN",gs[gs.ERROR=4]="ERROR",gs[gs.SILENT=5]="SILENT";const vs={debug:ms.DEBUG,verbose:ms.VERBOSE,info:ms.INFO,warn:ms.WARN,error:ms.ERROR,silent:ms.SILENT},ys=ms.INFO,_s={[ms.DEBUG]:"log",[ms.VERBOSE]:"log",[ms.INFO]:"info",[ms.WARN]:"warn",[ms.ERROR]:"error"},bs=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=_s[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ws{constructor(e){this.name=e,this._logLevel=ys,this._logHandler=bs,this._userLogHandler=null,ps.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ms))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?vs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ms.DEBUG,...e),this._logHandler(this,ms.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ms.VERBOSE,...e),this._logHandler(this,ms.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ms.INFO,...e),this._logHandler(this,ms.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ms.WARN,...e),this._logHandler(this,ms.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ms.ERROR,...e),this._logHandler(this,ms.ERROR,...e)}}const ks=(e,t)=>t.some((t=>e instanceof t));let xs,Cs;const Ss=new WeakMap,Es=new WeakMap,Is=new WeakMap,Ts=new WeakMap,Ns=new WeakMap;let Ps={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Es.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Is.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ds(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Rs(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Cs||(Cs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(As(this),t),Ds(Ss.get(this))}:function(...t){return Ds(e.apply(As(this),t))}:function(t,...n){const r=e.call(As(this),t,...n);return Is.set(r,t.sort?t.sort():[t]),Ds(r)}}function Os(e){return"function"==typeof e?Rs(e):(e instanceof IDBTransaction&&function(e){if(Es.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Es.set(e,t)}(e),ks(e,xs||(xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Ps):e)}function Ds(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Ds(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ss.set(t,e)})).catch((()=>{})),Ns.set(t,e),t}(e);if(Ts.has(e))return Ts.get(e);const t=Os(e);return t!==e&&(Ts.set(e,t),Ns.set(t,e)),t}const As=e=>Ns.get(e);function Ls(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ds(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Ds(o.result),e.oldVersion,e.newVersion,Ds(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Ms=["get","getKey","getAll","getAllKeys","count"],js=["put","add","delete","clear"],Fs=new Map;function zs(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Fs.get(t))return Fs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=js.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ms.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Fs.set(t,s),s}Ps=(e=>({...e,get:(t,n,r)=>zs(t,n)||e.get(t,n,r),has:(t,n)=>!!zs(t,n)||e.has(t,n)}))(Ps);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Vs="@firebase/app",qs="0.9.3",$s=new ws("@firebase/app"),Hs="[DEFAULT]",Ws={[Vs]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Bs=new Map,Gs=new Map;function Ks(e,t){try{e.container.addComponent(t)}catch(n){$s.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ys(e){const t=e.name;if(Gs.has(t))return $s.debug(`There were multiple attempts to register component ${t}.`),!1;Gs.set(t,e);for(const t of Bs.values())Ks(t,e);return!0}function Qs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xs=new Ui("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new us("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xs.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="9.17.1";function eo(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Xs.create("bad-app-name",{appName:String(i)});if(n||(n=Ti()),!n)throw Xs.create("no-options");const s=Bs.get(i);if(s){if(Xi(n,s.options)&&Xi(r,s.config))return s;throw Xs.create("duplicate-app",{appName:i})}const o=new fs(i);for(const e of Gs.values())o.addComponent(e);const a=new Js(n,r,o);return Bs.set(i,a),a}function to(e=Hs){const t=Bs.get(e);if(!t&&e===Hs)return eo();if(!t)throw Xs.create("no-app",{appName:e});return t}function no(e,t,n){var r;let i=null!==(r=Ws[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void $s.warn(e.join(" "))}Ys(new us(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ro="firebase-heartbeat-database",io=1,so="firebase-heartbeat-store";let oo=null;function ao(){return oo||(oo=Ls(ro,io,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(so)}}).catch((e=>{throw Xs.create("idb-open",{originalErrorMessage:e.message})}))),oo}async function lo(e,t){try{const n=(await ao()).transaction(so,"readwrite"),r=n.objectStore(so);return await r.put(t,co(e)),n.done}catch(e){if(e instanceof zi)$s.warn(e.message);else{const t=Xs.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});$s.warn(t.message)}}}function co(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=1024;class ho{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new po(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=fo();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=fo(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=uo){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),mo(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=bi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function fo(){return(new Date).toISOString().substring(0,10)}class po{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Fi()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ao()).transaction(so).objectStore(so).get(co(e))}catch(e){if(e instanceof zi)$s.warn(e.message);else{const t=Xs.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});$s.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return lo(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return lo(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function mo(e){return bi(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var go;go="",Ys(new us("platform-logger",(e=>new Us(e)),"PRIVATE")),Ys(new us("heartbeat",(e=>new ho(e)),"PRIVATE")),no(Vs,qs,go),no(Vs,qs,"esm2017"),no("fire-js","");function vo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function yo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _o=yo,bo=new Ui("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),wo=new ws("@firebase/auth");function ko(e,...t){wo.logLevel<=ms.ERROR&&wo.error(`Auth (${Zs}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e,...t){throw Io(e,...t)}function Co(e,...t){return Io(e,...t)}function So(e,t,n){const r=Object.assign(Object.assign({},_o()),{[t]:n});return new Ui("auth","Firebase",r).create(t,{appName:e.name})}function Eo(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&xo(e,"argument-error"),So(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Io(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return bo.create(e,...t)}function To(e,t,...n){if(!e)throw Io(t,...n)}function No(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ko(t),new Error(t)}function Po(e,t){e||No(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map;function Oo(e){Po(e instanceof Function,"Expected a class definition");let t=Ro.get(e);return t?(Po(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ro.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Do(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ao(){return"http:"===Lo()||"https:"===Lo()}function Lo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ao()||Ai()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Po(t>e,"Short delay should be less than long delay!"),this.isMobile=Di()||Li()}get(){return Mo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(e,t){Po(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void No("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void No("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void No("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Vo=new jo(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $o(e,t,n,r,i={}){return Ho(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Zi(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),zo.fetch()(Bo(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ho(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uo),t);try{const t=new Go(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ko(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ko(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ko(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ko(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw So(e,a,o);xo(e,a)}}catch(t){if(t instanceof zi)throw t;xo(e,"network-request-failed")}}async function Wo(e,t,n,r,i={}){const s=await $o(e,t,n,r,i);return"mfaPendingCredential"in s&&xo(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Bo(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Fo(e.config,i):`${e.config.apiScheme}://${i}`}class Go{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Co(this.auth,"network-request-failed"))),Vo.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Co(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e){return 1e3*Number(e)}function Xo(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const e=wi(n);return e?JSON.parse(e):(ko("Failed to decode base64 JWT payload"),null)}catch(e){return ko("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jo(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof zi&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Zo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yo(this.lastLoginAt),this.creationTime=Yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Jo(e,async function(e,t){return $o(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));To(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=vo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ea(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){To(e.idToken,"internal-error"),To(void 0!==e.idToken,"internal-error"),To(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Xo(e);return To(t,"internal-error"),To(void 0!==t.exp,"internal-error"),To(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return To(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ho(e,{},(async()=>{const n=Zi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Bo(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",zo.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new na;return n&&(To("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(To("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(To("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new na,this.toJSON())}_performRefresh(){return No("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e,t){To("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ia{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=vo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ea(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return To(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=cs(e),r=await n.getIdToken(t),i=Xo(r);To(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yo(Qo(i.auth_time)),issuedAtTime:Yo(Qo(i.iat)),expirationTime:Yo(Qo(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=cs(e);await ta(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(To(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ia(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){To(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ta(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jo(this,async function(e,t){return $o(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:k}=t;To(y&&k,e,"internal-error");const x=na.fromJSON(this.name,k);To("string"==typeof y,e,"internal-error"),ra(u,e.name),ra(d,e.name),To("boolean"==typeof _,e,"internal-error"),To("boolean"==typeof b,e,"internal-error"),ra(h,e.name),ra(f,e.name),ra(p,e.name),ra(m,e.name),ra(g,e.name),ra(v,e.name);const C=new ia({uid:y,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:x,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new na;r.updateFromServerResponse(t);const i=new ia({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ta(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sa.type="NONE";const oa=sa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e,t,n){return`firebase:${e}:${t}:${n}`}class la{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=aa(this.userKey,r.apiKey,i),this.fullPersistenceKey=aa("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ia._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new la(Oo(oa),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Oo(oa);const s=aa(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=ia._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new la(i,e,n)):new la(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fa(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ua(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ma(t))return"Blackberry";if(ga(t))return"Webos";if(da(t))return"Safari";if((t.includes("chrome/")||ha(t))&&!t.includes("edge/"))return"Chrome";if(pa(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ua(e=Oi()){return/firefox\//i.test(e)}function da(e=Oi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ha(e=Oi()){return/crios\//i.test(e)}function fa(e=Oi()){return/iemobile/i.test(e)}function pa(e=Oi()){return/android/i.test(e)}function ma(e=Oi()){return/blackberry/i.test(e)}function ga(e=Oi()){return/webos/i.test(e)}function va(e=Oi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ya(){return Mi()&&10===document.documentMode}function _a(e=Oi()){return va(e)||pa(e)||ga(e)||ma(e)||/windows phone/i.test(e)||fa(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ba(e,t=[]){let n;switch(e){case"Browser":n=ca(Oi());break;case"Worker":n=`${ca(Oi())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ca(this),this.idTokenSubscription=new Ca(this),this.beforeStateQueue=new wa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Oo(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await la.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return To(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?cs(e):null;return t&&To(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&To(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Oo(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Oo(e)||this._popupRedirectResolver;To(t,this,"argument-error"),this.redirectPersistenceManager=await la.create(this,[Oo(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return To(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return To(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ba(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function xa(e){return cs(e)}class Ca{constructor(e){this.auth=e,this.observer=null,this.addObserver=rs((e=>this.observer=e))}get next(){return To(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Sa(e,t,n){const r=xa(e);To(r._canInitEmulator,r,"emulator-config-failed"),To(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Ea(t),{host:o,port:a}=function(e){const t=Ea(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ia(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ia(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ea(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ia(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ta{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return No("not implemented")}_getIdTokenResponse(e){return No("not implemented")}_linkToIdToken(e,t){return No("not implemented")}_getReauthenticationResolver(e){return No("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(e,t){return $o(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa extends Ta{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pa(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pa(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Wo(e,"POST","/v1/accounts:signInWithPassword",qo(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Wo(e,"POST","/v1/accounts:signInWithEmailLink",qo(e,t))}(e,{email:this._email,oobCode:this._password});default:xo(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Na(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Wo(e,"POST","/v1/accounts:signInWithEmailLink",qo(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:xo(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(e,t){return Wo(e,"POST","/v1/accounts:signInWithIdp",qo(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends Ta{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Oa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xo("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=vo(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Oa(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ra(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ra(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ra(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zi(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa extends Ta{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Aa({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Aa({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Wo(e,"POST","/v1/accounts:signInWithPhoneNumber",qo(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Wo(e,"POST","/v1/accounts:signInWithPhoneNumber",qo(e,t));if(n.temporaryProof)throw Ko(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Wo(e,"POST","/v1/accounts:signInWithPhoneNumber",qo(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Da)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Aa({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){var t,n,r,i,s,o;const a=es(ts(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);To(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=es(ts(e)).link,n=t?es(ts(t)).deep_link_id:null,r=es(ts(e)).deep_link_id;return(r?es(ts(r)).link:null)||r||n||t||e}(e);try{return new La(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(){this.providerId=Ma.PROVIDER_ID}static credential(e,t){return Pa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=La.parseLink(t);return To(n,"argument-error"),Pa._fromEmailAndCode(e,n.code,n.tenantId)}}Ma.PROVIDER_ID="password",Ma.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ma.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends ja{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za extends Fa{constructor(){super("facebook.com")}static credential(e){return Oa._fromParams({providerId:za.PROVIDER_ID,signInMethod:za.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return za.credentialFromTaggedObject(e)}static credentialFromError(e){return za.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return za.credential(e.oauthAccessToken)}catch(e){return null}}}za.FACEBOOK_SIGN_IN_METHOD="facebook.com",za.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua extends Fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Oa._fromParams({providerId:Ua.PROVIDER_ID,signInMethod:Ua.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ua.credentialFromTaggedObject(e)}static credentialFromError(e){return Ua.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ua.credential(t,n)}catch(e){return null}}}Ua.GOOGLE_SIGN_IN_METHOD="google.com",Ua.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va extends Fa{constructor(){super("github.com")}static credential(e){return Oa._fromParams({providerId:Va.PROVIDER_ID,signInMethod:Va.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Va.credentialFromTaggedObject(e)}static credentialFromError(e){return Va.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Va.credential(e.oauthAccessToken)}catch(e){return null}}}Va.GITHUB_SIGN_IN_METHOD="github.com",Va.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa extends Fa{constructor(){super("twitter.com")}static credential(e,t){return Oa._fromParams({providerId:qa.PROVIDER_ID,signInMethod:qa.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qa.credentialFromTaggedObject(e)}static credentialFromError(e){return qa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return qa.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $a(e,t){return Wo(e,"POST","/v1/accounts:signUp",qo(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qa.TWITTER_SIGN_IN_METHOD="twitter.com",qa.PROVIDER_ID="twitter.com";class Ha{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ia._fromIdTokenResponse(e,n,r),s=Wa(n);return new Ha({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Wa(n);return new Ha({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Wa(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba extends zi{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ba.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ba(e,t,n,r)}}function Ga(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ba._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(e,t,n=!1){const r=await Jo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ha._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ya(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Jo(e,Ga(r,i,t,e),n);To(s.idToken,r,"internal-error");const o=Xo(s.idToken);To(o,r,"internal-error");const{sub:a}=o;return To(e.uid===a,r,"user-mismatch"),Ha._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&xo(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(e,t,n=!1){const r="signIn",i=await Ga(e,r,t),s=await Ha._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Xa(e,t){return Qa(xa(e),t)}async function Ja(e,t,n){const r=xa(e),i=await $a(r,{returnSecureToken:!0,email:t,password:n}),s=await Ha._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}new WeakMap;const Za="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Za,"1"),this.storage.removeItem(Za),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends el{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Oi();return da(e)||va(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=_a(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ya()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tl.type="LOCAL";const nl=tl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends el{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rl.type="SESSION";const il=rl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new sl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ol(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sl.receivers=[];class al{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=ol("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cl(){return void 0!==ll().WorkerGlobalScope&&"function"==typeof ll().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ul="firebaseLocalStorageDb",dl=1,hl="firebaseLocalStorage",fl="fbase_key";class pl{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ml(e,t){return e.transaction([hl],t?"readwrite":"readonly").objectStore(hl)}function gl(){const e=indexedDB.open(ul,dl);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(hl,{keyPath:fl})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(hl)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ul);return new pl(e).toPromise()}(),t(await gl()))}))}))}async function vl(e,t,n){const r=ml(e,!0).put({[fl]:t,value:n});return new pl(r).toPromise()}function yl(e,t){const n=ml(e,!0).delete(t);return new pl(n).toPromise()}class _l{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gl()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sl._getInstance(cl()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new al(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gl();return await vl(e,Za,"1"),await yl(e,Za),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>vl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ml(e,!1).get(t),r=await new pl(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>yl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ml(e,!1).getAll();return new pl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}_l.type="LOCAL";const bl=_l;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Co("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function kl(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
kl("rcb"),new jo(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xl="recaptcha";async function Cl(e,t,n){var r;const i=await n.verify();try{let s;if(To("string"==typeof i,e,"argument-error"),To(n.type===xl,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){To("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return $o(e,"POST","/v2/accounts/mfaEnrollment:start",qo(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{To("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;To(n,e,"missing-multi-factor-info");const o=await function(e,t){return $o(e,"POST","/v2/accounts/mfaSignIn:start",qo(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return $o(e,"POST","/v1/accounts:sendVerificationCode",qo(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(e){this.providerId=Sl.PROVIDER_ID,this.auth=xa(e)}verifyPhoneNumber(e,t){return Cl(this.auth,e,cs(t))}static credential(e,t){return Aa._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Sl.credentialFromTaggedObject(t)}static credentialFromError(e){return Sl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Aa._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function El(e,t){return t?Oo(t):(To(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sl.PROVIDER_ID="phone",Sl.PHONE_SIGN_IN_METHOD="phone";class Il extends Ta{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ra(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ra(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ra(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tl(e){return Qa(e.auth,new Il(e),e.bypassAuthState)}function Nl(e){const{auth:t,user:n}=e;return To(n,t,"internal-error"),Ya(n,new Il(e),e.bypassAuthState)}async function Pl(e){const{auth:t,user:n}=e;return To(n,t,"internal-error"),Ka(n,new Il(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tl;case"linkViaPopup":case"linkViaRedirect":return Pl;case"reauthViaPopup":case"reauthViaRedirect":return Nl;default:xo(this.auth,"internal-error")}}resolve(e){Po(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Po(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new jo(2e3,1e4);async function Dl(e,t,n){const r=xa(e);Eo(e,t,ja);const i=El(r,n);return new Al(r,"signInViaPopup",t,i).executeNotNull()}class Al extends Rl{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Al.currentPopupAction&&Al.currentPopupAction.cancel(),Al.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return To(e,this.auth,"internal-error"),e}async onExecution(){Po(1===this.filter.length,"Popup operations only handle one event");const e=ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Co(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Co(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Al.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Co(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ol.get())};e()}}Al.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ll="pendingRedirect",Ml=new Map;class jl extends Rl{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ul(t),r=zl(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Fl(e,t){Ml.set(e._key(),t)}function zl(e){return Oo(e._redirectPersistence)}function Ul(e){return aa(Ll,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(e,t,n=!1){const r=xa(e),i=El(r,t),s=new jl(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class ql{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hl(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hl(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Co(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has($l(e))}saveEventToCache(e){this.cachedEventUids.add($l(e)),this.lastProcessedEventTime=Date.now()}}function $l(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bl=/^https?/;async function Gl(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return $o(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Kl(e))return}catch(e){}xo(e,"unauthorized-domain")}function Kl(e){const t=Do(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Bl.test(n))return!1;if(Wl.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new jo(3e4,6e4);function Ql(){const e=ll().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Xl=null;function Jl(e){return Xl=Xl||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ql(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ql(),n(Co(e,"network-request-failed"))},timeout:Yl.get()})}if(null===(i=null===(r=ll().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ll().gapi)||void 0===s?void 0:s.load)){const t=kl("iframefcb");return ll()[t]=()=>{gapi.load?o():n(Co(e,"network-request-failed"))},wl(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Xl=null,e}))}(e),Xl}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new jo(5e3,15e3),ec="__/auth/iframe",tc="emulator/auth/iframe",nc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ic(e){const t=e.config;To(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fo(t,tc):`https://${e.config.authDomain}/${ec}`,r={apiKey:t.apiKey,appName:e.name,v:Zs},i=rc.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zi(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oc=500,ac=600,lc="_blank",cc="http://localhost";class uc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function dc(e,t,n,r=oc,i=ac){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sc),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Oi().toLowerCase();n&&(a=ha(c)?lc:n),ua(c)&&(t=t||cc,l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Oi()){var t;return va(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new uc(null);const d=window.open(t||"",a,u);To(d,e,"popup-blocked");try{d.focus()}catch(e){}return new uc(d)}const hc="__/auth/handler",fc="emulator/auth/handler";function pc(e,t,n,r,i,s){To(e.config.authDomain,e,"auth-domain-config-required"),To(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Zs,eventId:i};if(t instanceof ja){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Yi(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Fa){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Fo(e,fc):`https://${e.authDomain}/${hc}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Zi(a).slice(1)}`}const mc="webStorageSupport";const gc=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=il,this._completeRedirectFn=Vl,this._overrideRedirectResult=Fl}async _openPopup(e,t,n,r){var i;Po(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return dc(e,pc(e,t,n,Do(),r),ol())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=pc(e,t,n,Do(),r),ll().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Po(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Jl(e),n=ll().gapi;return To(n,e,"internal-error"),t.open({where:document.body,url:ic(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nc,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Co(e,"network-request-failed"),s=ll().setTimeout((()=>{r(i)}),Zl.get());function o(){ll().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new ql(e);return t.register("authEvent",(t=>{To(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mc,{type:mc},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[mc];void 0!==i&&t(!!i),xo(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _a()||da()||va()}};var vc="@firebase/auth",yc="0.21.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _c{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){To(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bc=Ni("authIdTokenMaxAge")||300;let wc=null;const kc=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bc)return;const i=null==n?void 0:n.token;wc!==i&&(wc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};var xc;xc="Browser",Ys(new us("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{To(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),To(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:xc,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ba(xc)},o=new ka(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Oo);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ys(new us("auth-internal",(e=>(e=>new _c(e))(xa(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),no(vc,yc,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(xc)),no(vc,yc,"esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
no("firebase","9.17.1","app");const Cc="@firebase/database",Sc="0.14.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ec="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$i(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:qi(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Gi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ic(t)}}catch(e){}return new Tc},Pc=Nc("localStorage"),Rc=Nc("sessionStorage"),Oc=new ws("@firebase/database"),Dc=function(){let e=1;return function(){return e++}}(),Ac=function(e){const t=as(e),n=new ns;n.update(t);const r=n.digest();return yi.encodeByteArray(r)},Lc=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Lc.apply(null,r):t+="object"==typeof r?$i(r):r,t+=" "}return t};let Mc=null,jc=!0;const Fc=function(e,t){mi(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Oc.logLevel=ms.VERBOSE,Mc=Oc.log.bind(Oc),t&&Rc.set("logging_enabled",!0)):"function"==typeof e?Mc=e:(Mc=null,Rc.remove("logging_enabled"))},zc=function(...e){if(!0===jc&&(jc=!1,null===Mc&&!0===Rc.get("logging_enabled")&&Fc(!0)),Mc){const t=Lc.apply(null,e);Mc(t)}},Uc=function(e){return function(...t){zc(e,...t)}},Vc=function(...e){const t="FIREBASE INTERNAL ERROR: "+Lc(...e);Oc.error(t)},qc=function(...e){const t=`FIREBASE FATAL ERROR: ${Lc(...e)}`;throw Oc.error(t),new Error(t)},$c=function(...e){const t="FIREBASE WARNING: "+Lc(...e);Oc.warn(t)},Hc=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Wc="[MIN_NAME]",Bc="[MAX_NAME]",Gc=function(e,t){if(e===t)return 0;if(e===Wc||t===Bc)return-1;if(t===Wc||e===Bc)return 1;{const n=tu(e),r=tu(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Kc=function(e,t){return e===t?0:e<t?-1:1},Yc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+$i(t))},Qc=function(e){if("object"!=typeof e||null===e)return $i(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=$i(t[r]),n+=":",n+=Qc(e[t[r]]);return n+="}",n},Xc=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Jc(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Zc=function(e){mi(!Hc(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const eu=new RegExp("^-?(0*)\\d{1,10}$"),tu=function(e){if(eu.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},nu=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw $c("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ru=function(){return("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},iu=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class su{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){$c(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(zc("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$c(e)}}class au{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}au.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lu="5",cu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uu="ac",du="websocket",hu="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fu{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pc.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pc.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function pu(e,t,n){let r;if(mi("string"==typeof t,"typeof type must == string"),mi("object"==typeof n,"typeof params must == object"),t===du)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==hu)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return Jc(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.counters_={}}incrementCounter(e,t=1){Gi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ki(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu={},vu={};function yu(e){const t=e.toString();return gu[t]||(gu[t]=new mu),gu[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _u{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&nu((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="start";class wu{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Uc(e),this.stats_=yu(t),this.urlFn=e=>(this.appCheckToken&&(e[uu]=this.appCheckToken),pu(t,hu,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _u(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(ji()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ku(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===bu)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[bu]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=lu,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[uu]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&cu.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wu.forceAllow_=!0}static forceDisallow(){wu.forceDisallow_=!0}static isAvailable(){return!ji()&&(!!wu.forceAllow_||!(wu.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$i(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=_i(t),r=Xc(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(ji())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$i(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ku{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,ji())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Dc(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ku.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){zc("frame writing exception"),e.stack&&zc(e.stack),zc(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||zc("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){ji()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{zc("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu=null;"undefined"!=typeof MozWebSocket?xu=MozWebSocket:"undefined"!=typeof WebSocket&&(xu=WebSocket);class Cu{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Uc(this.connId),this.stats_=yu(t),this.connURL=Cu.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s.v=lu,!ji()&&"undefined"!=typeof location&&location.hostname&&cu.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s[uu]=r),i&&(s.p=i),pu(e,du,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pc.set("previous_websocket_failure",!0);try{let e;if(ji()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${lu}/${Ec}/${ti.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new xu(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Cu.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==xu&&!Cu.forceDisallow_}static previouslyFailed(){return Pc.isInMemoryStorage||!0===Pc.get("previous_websocket_failure")}markConnectionHealthy(){Pc.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=qi(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(mi(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=$i(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Xc(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cu.responsesRequiredToBeHealthy=2,Cu.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[wu,Cu]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Cu&&Cu.isAvailable();let n=t&&!Cu.previouslyFailed();if(e.webSocketOnly&&(t||$c("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Cu];else{const e=this.transports_=[];for(const t of Su.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Su.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Su.globalTransportInitialized_=!1;class Eu{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Uc("c:"+this.id+":"),this.transportManager_=new Su(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=iu((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Yc("t",e),n=Yc("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Yc("t",e),n=Yc("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Yc("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Vc("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),lu!==n&&$c("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),iu((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):iu((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pc.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.allowedEvents_=e,this.listeners_={},mi(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){mi(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu extends Tu{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Di()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Nu}getInitialEvent(e){return mi("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=32,Ru=768;class Ou{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Du(){return new Ou("")}function Au(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Lu(e){return e.pieces_.length-e.pieceNum_}function Mu(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ou(e.pieces_,t)}function ju(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Fu(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function zu(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ou(t,0)}function Uu(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Ou)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ou(n,0)}function Vu(e){return e.pieceNum_>=e.pieces_.length}function qu(e,t){const n=Au(e),r=Au(t);if(null===n)return t;if(n===r)return qu(Mu(e),Mu(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function $u(e,t){if(Lu(e)!==Lu(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Hu(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Lu(e)>Lu(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Wu{constructor(e,t){this.errorPrefix_=t,this.parts_=Fu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ls(this.parts_[e]);Bu(this)}}function Bu(e){if(e.byteLength_>Ru)throw new Error(e.errorPrefix_+"has a key path longer than "+Ru+" bytes ("+e.byteLength_+").");if(e.parts_.length>Pu)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Pu+") or object contains a cycle "+Gu(e))}function Gu(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends Tu{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ku}getInitialEvent(e){return mi("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=1e3;class Qu extends Iu{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Qu.nextPersistentConnectionId_++,this.log_=Uc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yu,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ji())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ku.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Nu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_($i(i)),mi(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Pi,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),mi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),mi(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;Qu.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Gi(e,"w")){const n=Ki(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();$c(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Bi(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Wi(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),mi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$i(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Vc("Unrecognized action received from server: "+$i(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){mi(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Yu),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Qu.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){mi(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?zc("getToken() completed but was canceled"):(zc("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Eu(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{$c(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&$c(e),a())}}}interrupt(e){zc("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){zc("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yi(this.interruptReasons_)&&(this.reconnectDelay_=Yu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Qc(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Ou(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){zc("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){zc("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";ji()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Ec.replace(/\./g,"-")]=1,Di()?e["framework.cordova"]=1:Li()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nu.getInstance().currentlyOnline();return Yi(this.interruptReasons_)&&e}}Qu.nextPersistentConnectionId_=0,Qu.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xu{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Xu(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Xu(Wc,e),r=new Xu(Wc,t);return 0!==this.compare(n,r)}minPost(){return Xu.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu;class ed extends Ju{static get __EMPTY_NODE(){return Zu}static set __EMPTY_NODE(e){Zu=e}compare(e,t){return Gc(e.name,t.name)}isDefinedOn(e){throw gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Xu.MIN}maxPost(){return new Xu(Bc,Zu)}makePost(e,t){return mi("string"==typeof e,"KeyIndex indexValue must always be a string."),new Xu(e,Zu)}toString(){return".key"}}const td=new ed;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rd{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rd.RED,this.left=null!=r?r:id.EMPTY_NODE,this.right=null!=i?i:id.EMPTY_NODE}copy(e,t,n,r,i){return new rd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return id.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return id.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rd.RED=!0,rd.BLACK=!1;class id{constructor(e,t=id.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new id(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,rd.BLACK,null,null))}remove(e){return new id(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rd.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new nd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new nd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new nd(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sd(e,t){return Gc(e.name,t.name)}function od(e,t){return Gc(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad;id.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new rd(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ld=function(e){return"number"==typeof e?"number:"+Zc(e):"string:"+e},cd=function(e){if(e.isLeafNode()){const t=e.val();mi("string"==typeof t||"number"==typeof t||"object"==typeof t&&Gi(t,".sv"),"Priority must be a string or number.")}else mi(e===ad||e.isEmpty(),"priority of unexpected type.");mi(e===ad||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ud,dd,hd;class fd{constructor(e,t=fd.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,mi(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),cd(this.priorityNode_)}static set __childrenNodeConstructor(e){ud=e}static get __childrenNodeConstructor(){return ud}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fd(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:fd.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Vu(e)?this:".priority"===Au(e)?this.priorityNode_:fd.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:fd.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Au(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(mi(".priority"!==n||1===Lu(e),".priority must be the last token in a path"),this.updateImmediateChild(n,fd.__childrenNodeConstructor.EMPTY_NODE.updateChild(Mu(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ld(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Zc(this.value_):this.value_,this.lazyHash_=Ac(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fd.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fd.__childrenNodeConstructor?-1:(mi(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=fd.VALUE_TYPE_ORDER.indexOf(t),i=fd.VALUE_TYPE_ORDER.indexOf(n);return mi(r>=0,"Unknown leaf type: "+t),mi(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}fd.VALUE_TYPE_ORDER=["object","boolean","number","string"];const pd=new class extends Ju{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Gc(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Xu.MIN}maxPost(){return new Xu(Bc,new fd("[PRIORITY-POST]",hd))}makePost(e,t){const n=dd(e);return new Xu(t,new fd("[PRIORITY-POST]",n))}toString(){return".priority"}},md=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/md,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vd=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new rd(a,o.node,rd.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new rd(a,o.node,rd.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],d=n?n(u):u;l(new rd(d,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,rd.BLACK):(a(r,rd.BLACK),a(r,rd.RED))}return s}(new gd(e.length));return new id(r||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;const _d={};class bd{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return mi(_d&&pd,"ChildrenNode.ts has not been loaded"),yd=yd||new bd({".priority":_d},{".priority":pd}),yd}get(e){const t=Ki(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof id?t:null}hasIndex(e){return Gi(this.indexSet_,e.toString())}addIndex(e,t){mi(e!==td,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Xu.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?vd(n,e.getCompare()):_d;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new bd(c,l)}addToIndexes(e,t){const n=Qi(this.indexes_,((n,r)=>{const i=Ki(this.indexSet_,r);if(mi(i,"Missing index implementation for "+r),n===_d){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Xu.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),vd(n,i.getCompare())}return _d}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Xu(e.name,r))),i.insert(e,e.node)}}));return new bd(n,this.indexSet_)}removeFromIndexes(e,t){const n=Qi(this.indexes_,(n=>{if(n===_d)return n;{const r=t.get(e.name);return r?n.remove(new Xu(e.name,r)):n}}));return new bd(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;class kd{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&cd(this.priorityNode_),this.children_.isEmpty()&&mi(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wd||(wd=new kd(new id(od),null,bd.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wd}updatePriority(e){return this.children_.isEmpty()?this:new kd(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?wd:t}}getChild(e){const t=Au(e);return null===t?this:this.getImmediateChild(t).getChild(Mu(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(mi(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Xu(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?wd:this.priorityNode_;return new kd(r,s,i)}}updateChild(e,t){const n=Au(e);if(null===n)return t;{mi(".priority"!==Au(e)||1===Lu(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Mu(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(pd,((s,o)=>{t[s]=o.val(e),n++,i&&kd.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ld(this.getPriority().val())+":"),this.forEachChild(pd,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Ac(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Xu(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Xu(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Xu(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Xu.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Xu.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xd?-1:0}withIndex(e){if(e===td||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new kd(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===td||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(pd),n=t.getIterator(pd);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===td?null:this.indexMap_.get(e.toString())}}kd.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const xd=new class extends kd{constructor(){super(new id(od),kd.EMPTY_NODE,bd.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return kd.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Xu,{MIN:{value:new Xu(Wc,kd.EMPTY_NODE)},MAX:{value:new Xu(Bc,xd)}}),ed.__EMPTY_NODE=kd.EMPTY_NODE,fd.__childrenNodeConstructor=kd,ad=xd,function(e){hd=e}(xd);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cd=!0;function Sd(e,t=null){if(null===e)return kd.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),mi(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new fd(e,Sd(t))}if(e instanceof Array||!Cd){let n=kd.EMPTY_NODE;return Jc(e,((t,r)=>{if(Gi(e,t)&&"."!==t.substring(0,1)){const e=Sd(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Sd(t))}{const n=[];let r=!1;if(Jc(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Sd(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Xu(e,i)))}})),0===n.length)return kd.EMPTY_NODE;const i=vd(n,sd,(e=>e.name),od);if(r){const e=vd(n,pd.getCompare());return new kd(i,Sd(t),new bd({".priority":e},{".priority":pd}))}return new kd(i,Sd(t),bd.Default)}}!function(e){dd=e}(Sd);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ed extends Ju{constructor(e){super(),this.indexPath_=e,mi(!Vu(e)&&".priority"!==Au(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Gc(e.name,t.name):i}makePost(e,t){const n=Sd(e),r=kd.EMPTY_NODE.updateChild(this.indexPath_,n);return new Xu(t,r)}maxPost(){const e=kd.EMPTY_NODE.updateChild(this.indexPath_,xd);return new Xu(Bc,e)}toString(){return Fu(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new class extends Ju{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Gc(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Xu.MIN}maxPost(){return Xu.MAX}makePost(e,t){const n=Sd(e);return new Xu(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(e){return{type:"value",snapshotNode:e}}function Nd(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Pd(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Rd(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Od{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){mi(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Pd(t,o)):mi(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Nd(t,n)):s.trackChildChange(Rd(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(pd,((e,r)=>{t.hasChild(e)||n.trackChildChange(Pd(e,r))})),t.isLeafNode()||t.forEachChild(pd,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Rd(t,r,i))}else n.trackChildChange(Nd(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?kd.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.indexedFilter_=new Od(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Dd.getStartPost_(e),this.endPost_=Dd.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new Xu(t,n))||(n=kd.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=kd.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(kd.EMPTY_NODE);const i=this;return t.forEachChild(pd,((e,t)=>{i.matches(new Xu(e,t))||(r=r.updateImmediateChild(e,kd.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Dd(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Xu(t,n))||(n=kd.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=kd.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=kd.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(kd.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,kd.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;mi(o.numChildren()===this.limit_,"");const a=new Xu(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const d=null==u?1:s(u,a);if(c&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(Rd(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Pd(t,e));const n=o.updateImmediateChild(t,kd.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Nd(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Pd(l.name,l.node)),i.trackChildChange(Nd(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,kd.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pd}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return mi(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return mi(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wc}hasEnd(){return this.endSet_}getIndexEndValue(){return mi(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return mi(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bc}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return mi(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pd}copy(){const e=new Ld;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Md(e){const t={};if(e.isDefault())return t;let n;if(e.index_===pd?n="$priority":e.index_===Id?n="$value":e.index_===td?n="$key":(mi(e.index_ instanceof Ed,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=$i(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=$i(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+$i(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=$i(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+$i(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function jd(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==pd&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends Iu{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Uc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(mi(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Fd.getListenId_(e,n),o={};this.listens_[s]=o;const a=Md(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),Ki(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Fd.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Md(e._queryParams),n=e._path.toString(),r=new Pi;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zi(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=qi(o.responseText)}catch(e){$c("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&$c("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.rootNode_=kd.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){return{value:null,children:new Map}}function Vd(e,t,n){if(Vu(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Au(t);e.children.has(r)||e.children.set(r,Ud());Vd(e.children.get(r),t=Mu(t),n)}}function qd(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{qd(r,new Ou(t.toString()+"/"+e),n)}))}class $d{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Jc(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $d(e);const n=1e4+2e4*Math.random();iu(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Jc(e,((e,r)=>{r>0&&Gi(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),iu(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wd,Bd;function Gd(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Bd=Wd||(Wd={}))[Bd.OVERWRITE=0]="OVERWRITE",Bd[Bd.MERGE=1]="MERGE",Bd[Bd.ACK_USER_WRITE=2]="ACK_USER_WRITE",Bd[Bd.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Kd{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Wd.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Vu(this.path)){if(null!=this.affectedTree.value)return mi(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ou(e));return new Kd(Du(),t,this.revert)}}return mi(Au(this.path)===e,"operationForChild called for unrelated child."),new Kd(Mu(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t){this.source=e,this.path=t,this.type=Wd.LISTEN_COMPLETE}operationForChild(e){return Vu(this.path)?new Yd(this.source,Du()):new Yd(this.source,Mu(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Wd.OVERWRITE}operationForChild(e){return Vu(this.path)?new Qd(this.source,Du(),this.snap.getImmediateChild(e)):new Qd(this.source,Mu(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Wd.MERGE}operationForChild(e){if(Vu(this.path)){const t=this.children.subtree(new Ou(e));return t.isEmpty()?null:t.value?new Qd(this.source,Du(),t.value):new Xd(this.source,Du(),t)}return mi(Au(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xd(this.source,Mu(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Vu(e))return this.isFullyInitialized()&&!this.filtered_;const t=Au(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eh(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw gi("Should only compare child_ events.");const r=new Xu(t.childName,t.snapshotNode),i=new Xu(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function th(e,t){return{eventCache:e,serverCache:t}}function nh(e,t,n,r){return th(new Jd(t,n,r),e.serverCache)}function rh(e,t,n,r){return th(e.eventCache,new Jd(t,n,r))}function ih(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function sh(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh;class ah{constructor(e,t=(()=>(oh||(oh=new id(Kc)),oh))()){this.value=e,this.children=t}static fromObject(e){let t=new ah(null);return Jc(e,((e,n)=>{t=t.set(new Ou(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Du(),value:this.value};if(Vu(e))return null;{const n=Au(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Mu(e),t);if(null!=i){return{path:Uu(new Ou(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Vu(e))return this;{const t=Au(e),n=this.children.get(t);return null!==n?n.subtree(Mu(e)):new ah(null)}}set(e,t){if(Vu(e))return new ah(t,this.children);{const n=Au(e),r=(this.children.get(n)||new ah(null)).set(Mu(e),t),i=this.children.insert(n,r);return new ah(this.value,i)}}remove(e){if(Vu(e))return this.children.isEmpty()?new ah(null):new ah(null,this.children);{const t=Au(e),n=this.children.get(t);if(n){const r=n.remove(Mu(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new ah(null):new ah(this.value,i)}return this}}get(e){if(Vu(e))return this.value;{const t=Au(e),n=this.children.get(t);return n?n.get(Mu(e)):null}}setTree(e,t){if(Vu(e))return t;{const n=Au(e),r=(this.children.get(n)||new ah(null)).setTree(Mu(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new ah(this.value,i)}}fold(e){return this.fold_(Du(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Uu(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Du(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Vu(e))return null;{const r=Au(e),i=this.children.get(r);return i?i.findOnPath_(Mu(e),Uu(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Du(),t)}foreachOnPath_(e,t,n){if(Vu(e))return this;{this.value&&n(t,this.value);const r=Au(e),i=this.children.get(r);return i?i.foreachOnPath_(Mu(e),Uu(t,r),n):new ah(null)}}foreach(e){this.foreach_(Du(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Uu(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.writeTree_=e}static empty(){return new lh(new ah(null))}}function ch(e,t,n){if(Vu(t))return new lh(new ah(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=qu(i,t);return s=s.updateChild(o,n),new lh(e.writeTree_.set(i,s))}{const r=new ah(n),i=e.writeTree_.setTree(t,r);return new lh(i)}}}function uh(e,t,n){let r=e;return Jc(n,((e,n)=>{r=ch(r,Uu(t,e),n)})),r}function dh(e,t){if(Vu(t))return lh.empty();{const n=e.writeTree_.setTree(t,new ah(null));return new lh(n)}}function hh(e,t){return null!=fh(e,t)}function fh(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(qu(n.path,t)):null}function ph(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(pd,((e,n)=>{t.push(new Xu(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Xu(e,n.value))})),t}function mh(e,t){if(Vu(t))return e;{const n=fh(e,t);return new lh(null!=n?new ah(n):e.writeTree_.subtree(t))}}function gh(e){return e.writeTree_.isEmpty()}function vh(e,t){return yh(Du(),e.writeTree_,t)}function yh(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(mi(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=yh(Uu(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Uu(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(e,t){return Oh(t,e)}function bh(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));mi(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&wh(t,r.path)?i=!1:Hu(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=xh(e.allWrites,kh,Du()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=dh(e.visibleWrites,r.path);else{Jc(r.children,(t=>{e.visibleWrites=dh(e.visibleWrites,Uu(r.path,t))}))}return!0}return!1}function wh(e,t){if(e.snap)return Hu(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Hu(Uu(e.path,n),t))return!0;return!1}function kh(e){return e.visible}function xh(e,t,n){let r=lh.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Hu(n,e)?(t=qu(n,e),r=ch(r,t,s.snap)):Hu(e,n)&&(t=qu(e,n),r=ch(r,Du(),s.snap.getChild(t)));else{if(!s.children)throw gi("WriteRecord should have .snap or .children");if(Hu(n,e))t=qu(n,e),r=uh(r,t,s.children);else if(Hu(e,n))if(t=qu(e,n),Vu(t))r=uh(r,Du(),s.children);else{const e=Ki(s.children,Au(t));if(e){const n=e.getChild(Mu(t));r=ch(r,Du(),n)}}}}}return r}function Ch(e,t,n,r,i){if(r||i){const s=mh(e.visibleWrites,t);if(!i&&gh(s))return n;if(i||null!=n||hh(s,Du())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Hu(e.path,t)||Hu(t,e.path))};return vh(xh(e.allWrites,s,t),n||kd.EMPTY_NODE)}return null}{const r=fh(e.visibleWrites,t);if(null!=r)return r;{const r=mh(e.visibleWrites,t);if(gh(r))return n;if(null!=n||hh(r,Du())){return vh(r,n||kd.EMPTY_NODE)}return null}}}function Sh(e,t,n,r){return Ch(e.writeTree,e.treePath,t,n,r)}function Eh(e,t){return function(e,t,n){let r=kd.EMPTY_NODE;const i=fh(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(pd,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=mh(e.visibleWrites,t);return n.forEachChild(pd,((e,t)=>{const n=vh(mh(i,new Ou(e)),t);r=r.updateImmediateChild(e,n)})),ph(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return ph(mh(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Ih(e,t,n,r){return function(e,t,n,r,i){mi(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Uu(t,n);if(hh(e.visibleWrites,s))return null;{const t=mh(e.visibleWrites,s);return gh(t)?i.getChild(n):vh(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Th(e,t){return function(e,t){return fh(e.visibleWrites,t)}(e.writeTree,Uu(e.treePath,t))}function Nh(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=mh(e.visibleWrites,t),c=fh(l,Du());if(null!=c)a=c;else{if(null==n)return[];a=vh(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Ph(e,t,n){return function(e,t,n,r){const i=Uu(t,n),s=fh(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return vh(mh(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Rh(e,t){return Oh(Uu(e.treePath,t),e.writeTree)}function Oh(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;mi("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),mi(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Rd(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Pd(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Nd(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw gi("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Rd(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Lh{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Jd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ph(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:sh(this.viewCache_),i=Nh(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(e,t,n,r,i){const s=new Dh;let o,a;if(n.type===Wd.OVERWRITE){const l=n;l.source.fromUser?o=zh(e,t,l.path,l.snap,r,i,s):(mi(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Vu(l.path),o=Fh(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===Wd.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=Uu(n,r);Uh(t,Au(c))&&(a=zh(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=Uu(n,r);Uh(t,Au(c))||(a=zh(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(mi(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=qh(e,t,l.path,l.children,r,i,a,s))}else if(n.type===Wd.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Th(r,n))return t;{const a=new Lh(r,t,i),l=t.eventCache.getNode();let c;if(Vu(n)||".priority"===Au(n)){let n;if(t.serverCache.isFullyInitialized())n=Sh(r,sh(t));else{const e=t.serverCache.getNode();mi(e instanceof kd,"serverChildren would be complete if leaf node"),n=Eh(r,e)}c=e.filter.updateFullNode(l,n,s)}else{const i=Au(n);let u=Ph(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,Mu(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,kd.EMPTY_NODE,Mu(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Sh(r,sh(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Th(r,Du()),nh(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Th(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(Vu(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Fh(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Vu(n)){let r=new ah(null);return l.getNode().forEachChild(td,((e,t)=>{r=r.set(new Ou(e),t)})),qh(e,t,n,r,i,s,a,o)}return t}{let c=new ah(null);return r.foreach(((e,t)=>{const r=Uu(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),qh(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==Wd.LISTEN_COMPLETE)throw gi("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=rh(t,s.getNode(),s.isFullyInitialized()||Vu(n),s.isFiltered());return jh(e,o,n,r,Ah,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ih(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Td(ih(t)))}}(t,o,l),{viewCache:o,changes:l}}function jh(e,t,n,r,i,s){const o=t.eventCache;if(null!=Th(r,n))return t;{let a,l;if(Vu(n))if(mi(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=sh(t),i=Eh(r,n instanceof kd?n:kd.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=Sh(r,sh(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Au(n);if(".priority"===c){mi(1===Lu(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=Ih(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=Mu(n);let d;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Ih(r,n,o.getNode(),l);d=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else d=Ph(r,c,t.serverCache);a=null!=d?e.filter.updateChild(o.getNode(),c,d,u,i,s):o.getNode()}}return nh(t,a,o.isFullyInitialized()||Vu(n),e.filter.filtersNodes())}}function Fh(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Vu(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Au(n);if(!l.isCompleteForPath(n)&&Lu(n)>1)return t;const i=Mu(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Ah,null)}const d=rh(t,c,l.isFullyInitialized()||Vu(n),u.filtersNodes());return jh(e,d,n,i,new Lh(i,d,s),a)}function zh(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Lh(i,t,s);if(Vu(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=nh(t,c,!0,e.filter.filtersNodes());else{const i=Au(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=nh(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Mu(n),c=a.getNode().getImmediateChild(i);let d;if(Vu(s))d=r;else{const e=u.getCompleteChild(i);d=null!=e?".priority"===ju(s)&&e.getChild(zu(s)).isEmpty()?e:e.updateChild(s,r):kd.EMPTY_NODE}if(c.equals(d))l=t;else{l=nh(t,e.filter.updateChild(a.getNode(),i,d,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Uh(e,t){return e.eventCache.isCompleteForChild(t)}function Vh(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function qh(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Vu(n)?r:new ah(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Vh(0,t.serverCache.getNode().getImmediateChild(n),r);c=Fh(e,c,new Ou(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=Vh(0,t.serverCache.getNode().getImmediateChild(n),r);c=Fh(e,c,new Ou(n),l,i,s,o,a)}})),c}class $h{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Od(n.getIndex()),i=(s=n).loadsAllData()?new Od(s.getIndex()):s.hasLimit()?new Ad(s):new Dd(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(kd.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(kd.EMPTY_NODE,a.getNode(),null),u=new Jd(l,o.isFullyInitialized(),r.filtersNodes()),d=new Jd(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=th(d,u),this.eventGenerator_=new Zd(this.query_)}get query(){return this.query_}}function Hh(e,t){const n=sh(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Vu(t)&&!n.getImmediateChild(Au(t)).isEmpty())?n.getChild(t):null}function Wh(e){return 0===e.eventRegistrations_.length}function Bh(e,t,n){const r=[];if(n){mi(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Gh(e,t,n,r){t.type===Wd.MERGE&&null!==t.source.queryId&&(mi(sh(e.viewCache_),"We should always have a full cache before handling merges"),mi(ih(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Mh(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,mi(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),mi(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),mi(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Kh(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Kh(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),eh(e,i,"child_removed",t,r,n),eh(e,i,"child_added",t,r,n),eh(e,i,"child_moved",s,r,n),eh(e,i,"child_changed",t,r,n),eh(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh,Qh;class Xh{constructor(){this.views=new Map}}function Jh(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return mi(null!=s,"SyncTree gave us an op for an invalid query."),Gh(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Gh(s,t,n,r));return i}}function Zh(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Sh(n,i?r:null),s=!1;e?s=!0:r instanceof kd?(e=Eh(n,r),s=!1):(e=kd.EMPTY_NODE,s=!1);const o=th(new Jd(e,s,!1),new Jd(r,i,!1));return new $h(t,o)}return o}function ef(e,t,n,r,i,s){const o=Zh(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(pd,((e,t)=>{r.push(Nd(e,t))}));return n.isFullyInitialized()&&r.push(Td(n.getNode())),Kh(e,r,n.getNode(),t)}(o,n)}function tf(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=af(e);if("default"===i)for(const[t,i]of e.views.entries())o=o.concat(Bh(i,n,r)),Wh(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(o=o.concat(Bh(t,n,r)),Wh(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!af(e)&&s.push(new(mi(Yh,"Reference.ts has not been loaded"),Yh)(t._repo,t._path)),{removed:s,events:o}}function nf(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function rf(e,t){let n=null;for(const r of e.views.values())n=n||Hh(r,t);return n}function sf(e,t){if(t._queryParams.loadsAllData())return lf(e);{const n=t._queryIdentifier;return e.views.get(n)}}function of(e,t){return null!=sf(e,t)}function af(e){return null!=lf(e)}function lf(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf=1;class uf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ah(null),this.pendingWriteTree_={visibleWrites:lh.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function df(e,t,n,r,i){return function(e,t,n,r,i){mi(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=ch(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?_f(e,new Qd({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function hf(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(bh(e.pendingWriteTree_,t)){let t=new ah(null);return null!=r.snap?t=t.set(Du(),!0):Jc(r.children,(e=>{t=t.set(new Ou(e),!0)})),_f(e,new Kd(r.path,t,n))}return[]}function ff(e,t,n){return _f(e,new Qd({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function pf(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||of(o,t))){const l=tf(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>af(t)));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&af(t)){return[lf(t)]}{let e=[];return t&&(e=nf(t)),Jc(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=kf(e,r);e.listenProvider_.startListening(Tf(i),xf(e,i),s.hashFn,s.onComplete)}}}if(!i&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(Tf(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Cf(t));e.listenProvider_.stopListening(Tf(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Cf(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function mf(e,t,n,r){const i=Sf(e,r);if(null!=i){const r=Ef(i),s=r.path,o=r.queryId,a=qu(s,t);return If(e,s,new Qd(Gd(o),a,n))}return[]}function gf(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=qu(e,i);s=s||rf(t,n),o=o||af(t)}));let a,l=e.syncPointTree_.get(i);if(l?(o=o||af(l),s=s||rf(l,Du())):(l=new Xh,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)a=!0;else{a=!1,s=kd.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=rf(t,Du());n&&(s=s.updateImmediateChild(e,n))}))}const c=of(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=Cf(t);mi(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=cf++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=ef(l,t,n,_h(e.pendingWriteTree_,i),s,a);if(!c&&!o&&!r){const n=sf(l,t);u=u.concat(function(e,t,n){const r=t._path,i=xf(e,t),s=kf(e,n),o=e.listenProvider_.startListening(Tf(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)mi(!af(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Vu(e)&&t&&af(t))return[lf(t).query];{let e=[];return t&&(e=e.concat(nf(t).map((e=>e.query)))),Jc(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Tf(r),xf(e,r))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function vf(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=rf(n,qu(e,t));if(r)return r}));return Ch(r,t,i,n,!0)}function yf(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=qu(e,n);r=r||rf(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||rf(i,Du()):(i=new Xh,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Jd(r,!0,!1):null;return function(e){return ih(e.viewCache_)}(Zh(i,t,_h(e.pendingWriteTree_,t._path),s?o.getNode():kd.EMPTY_NODE,s))}function _f(e,t){return bf(t,e.syncPointTree_,null,_h(e.pendingWriteTree_,Du()))}function bf(e,t,n,r){if(Vu(e.path))return wf(e,t,n,r);{const i=t.get(Du());null==n&&null!=i&&(n=rf(i,Du()));let s=[];const o=Au(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Rh(r,o);s=s.concat(bf(a,l,e,t))}return i&&(s=s.concat(Jh(i,e,r,n))),s}}function wf(e,t,n,r){const i=t.get(Du());null==n&&null!=i&&(n=rf(i,Du()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Rh(r,t),l=e.operationForChild(t);l&&(s=s.concat(wf(l,i,o,a)))})),i&&(s=s.concat(Jh(i,e,r,n))),s}function kf(e,t){const n=t.query,r=xf(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||kd.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Sf(e,n);if(r){const n=Ef(r),i=n.path,s=n.queryId,o=qu(i,t);return If(e,i,new Yd(Gd(s),o))}return[]}(e,n._path,r):function(e,t){return _f(e,new Yd({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return pf(e,n,null,r)}}}}function xf(e,t){const n=Cf(t);return e.queryToTagMap.get(n)}function Cf(e){return e._path.toString()+"$"+e._queryIdentifier}function Sf(e,t){return e.tagToQueryMap.get(t)}function Ef(e){const t=e.indexOf("$");return mi(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ou(e.substr(0,t))}}function If(e,t,n){const r=e.syncPointTree_.get(t);mi(r,"Missing sync point for query tag that we're tracking");return Jh(r,n,_h(e.pendingWriteTree_,t),null)}function Tf(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(mi(Qh,"Reference.ts has not been loaded"),Qh)(e._repo,e._path):e}class Nf{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Nf(t)}node(){return this.node_}}class Pf{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Uu(this.path_,e);return new Pf(this.syncTree_,t)}node(){return vf(this.syncTree_,this.path_)}}const Rf=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Of=function(e,t,n){return e&&"object"==typeof e?(mi(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Df(e[".sv"],t,n):"object"==typeof e[".sv"]?Af(e[".sv"],t):void mi(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Df=function(e,t,n){if("timestamp"===e)return n.timestamp;mi(!1,"Unexpected server value: "+e)},Af=function(e,t,n){e.hasOwnProperty("increment")||mi(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&mi(!1,"Unexpected increment value: "+r);const i=t.node();if(mi(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Lf=function(e,t,n,r){return jf(t,new Pf(n,e),r)},Mf=function(e,t,n){return jf(e,new Nf(t),n)};function jf(e,t,n){const r=e.getPriority().val(),i=Of(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Of(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new fd(s,Sd(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new fd(i))),r.forEachChild(pd,((e,r)=>{const i=jf(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function zf(e,t){let n=t instanceof Ou?t:new Ou(t),r=e,i=Au(n);for(;null!==i;){const e=Ki(r.node.children,i)||{children:{},childCount:0};r=new Ff(i,r,e),n=Mu(n),i=Au(n)}return r}function Uf(e){return e.node.value}function Vf(e,t){e.node.value=t,Bf(e)}function qf(e){return e.node.childCount>0}function $f(e,t){Jc(e.node.children,((n,r)=>{t(new Ff(n,e,r))}))}function Hf(e,t,n,r){n&&!r&&t(e),$f(e,(e=>{Hf(e,t,!0,r)})),n&&r&&t(e)}function Wf(e){return new Ou(null===e.parent?e.name:Wf(e.parent)+"/"+e.name)}function Bf(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Uf(e)&&!qf(e)}(n),i=Gi(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Bf(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Bf(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Gf=/[\[\].#$\/\u0000-\u001F\u007F]/,Kf=/[\[\].#$\u0000-\u001F\u007F]/,Yf=10485760,Qf=function(e){return"string"==typeof e&&0!==e.length&&!Gf.test(e)},Xf=function(e){return"string"==typeof e&&0!==e.length&&!Kf.test(e)},Jf=function(e,t,n,r){r&&void 0===t||Zf(os(e,"value"),t,n)},Zf=function(e,t,n){const r=n instanceof Ou?new Wu(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Gu(r));if("function"==typeof t)throw new Error(e+"contains a function "+Gu(r)+" with contents = "+t.toString());if(Hc(t))throw new Error(e+"contains "+t.toString()+" "+Gu(r));if("string"==typeof t&&t.length>3495253.3333333335&&ls(t)>Yf)throw new Error(e+"contains a string greater than "+Yf+" utf8 bytes "+Gu(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Jc(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Qf(t)))throw new Error(e+" contains an invalid key ("+t+") "+Gu(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=ls(a),Bu(o),Zf(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=ls(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Gu(r)+" in addition to actual children.")}},ep=function(e,t,n,r){if(!(r&&void 0===n||Xf(n)))throw new Error(os(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},tp=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ep(e,t,n,r)},np=function(e,t){if(".info"===Au(t))throw new Error(e+" failed = Can't modify data under /.info/")},rp=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Qf(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Xf(e)}(n))throw new Error(os(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ip{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sp(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||$u(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function op(e,t,n){sp(e,n),ap(e,(e=>Hu(e,t)||Hu(t,e)))}function ap(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(lp(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function lp(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();Mc&&zc("event: "+n.toString()),nu(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="repo_interrupt",up=25;class dp{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ip,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ud(),this.transactionQueueTree_=new Ff,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hp(e,t,n){if(e.stats_=yu(e.repoInfo_),e.forceRestClient_||ru())e.server_=new Fd(e.repoInfo_,((t,n,r,i)=>{mp(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>gp(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$i(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Qu(e.repoInfo_,t,((t,n,r,i)=>{mp(e,t,n,r,i)}),(t=>{gp(e,t)}),(t=>{!function(e,t){Jc(t,((t,n)=>{vp(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return vu[n]||(vu[n]=t()),vu[n]}(e.repoInfo_,(()=>new Hd(e.stats_,e.server_))),e.infoData_=new zd,e.infoSyncTree_=new uf({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ff(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),vp(e,"connected",!1),e.serverSyncTree_=new uf({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);op(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function fp(e){const t=e.infoData_.getNode(new Ou(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function pp(e){return Rf({timestamp:fp(e)})}function mp(e,t,n,r,i){e.dataUpdateCount++;const s=new Ou(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=Qi(n,(e=>Sd(e)));o=function(e,t,n,r){const i=Sf(e,r);if(i){const r=Ef(i),s=r.path,o=r.queryId,a=qu(s,t),l=ah.fromObject(n);return If(e,s,new Xd(Gd(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Sd(n);o=mf(e.serverSyncTree_,s,t,i)}else if(r){const t=Qi(n,(e=>Sd(e)));o=function(e,t,n){const r=ah.fromObject(n);return _f(e,new Xd({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Sd(n);o=ff(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Sp(e,s)),op(e.eventQueue_,a,o)}function gp(e,t){vp(e,"connected",t),!1===t&&function(e){wp(e,"onDisconnectEvents");const t=pp(e),n=Ud();qd(e.onDisconnect_,Du(),((r,i)=>{const s=Lf(r,i,e.serverSyncTree_,t);Vd(n,r,s)}));let r=[];qd(n,Du(),((t,n)=>{r=r.concat(ff(e.serverSyncTree_,t,n));const i=Pp(e,t);Sp(e,i)})),e.onDisconnect_=Ud(),op(e.eventQueue_,Du(),r)}(e)}function vp(e,t,n){const r=new Ou("/.info/"+t),i=Sd(n);e.infoData_.updateSnapshot(r,i);const s=ff(e.infoSyncTree_,r,i);op(e.eventQueue_,r,s)}function yp(e){return e.nextWriteId_++}function _p(e,t,n,r,i){wp(e,"set",{path:t.toString(),value:n,priority:r});const s=pp(e),o=Sd(n,r),a=vf(e.serverSyncTree_,t),l=Mf(o,a,s),c=yp(e),u=df(e.serverSyncTree_,t,l,c,!0);sp(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||$c("set at "+t+" failed: "+n);const o=hf(e.serverSyncTree_,c,!s);op(e.eventQueue_,t,o),kp(e,i,n,r)}));const d=Pp(e,t);Sp(e,d),op(e.eventQueue_,d,[])}function bp(e){e.persistentConnection_&&e.persistentConnection_.interrupt(cp)}function wp(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),zc(n,...t)}function kp(e,t,n,r){t&&nu((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function xp(e,t,n){return vf(e.serverSyncTree_,t,n)||kd.EMPTY_NODE}function Cp(e,t=e.transactionQueueTree_){if(t||Np(e,t),Uf(t)){const n=Ip(e,t);mi(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=xp(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];mi(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=qu(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{wp(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(hf(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Np(e,zf(e.transactionQueueTree_,t)),Cp(e,e.transactionQueueTree_),op(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)nu(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{$c("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Sp(e,t)}}),o)}(e,Wf(t),n)}else qf(t)&&$f(t,(t=>{Cp(e,t)}))}function Sp(e,t){const n=Ep(e,t),r=Wf(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=qu(n,l.path);let u,d=!1;if(mi(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,i=i.concat(hf(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=up)d=!0,u="maxretry",i=i.concat(hf(e.serverSyncTree_,l.currentWriteId,!0));else{const n=xp(e,l.path,o);l.currentInputSnapshot=n;const r=t[s].update(n.val());if(void 0!==r){Zf("transaction failed: Data returned ",r,l.path);let t=Sd(r);"object"==typeof r&&null!=r&&Gi(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=pp(e),c=Mf(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=yp(e),o.splice(o.indexOf(s),1),i=i.concat(df(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(hf(e.serverSyncTree_,s,!0))}else d=!0,u="nodata",i=i.concat(hf(e.serverSyncTree_,l.currentWriteId,!0))}op(e.eventQueue_,n,i),i=[],d&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===u?r.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):r.push((()=>t[s].onComplete(new Error(u),!1,null)))))}var a;Np(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)nu(r[e]);Cp(e,e.transactionQueueTree_)}(e,Ip(e,n),r),r}function Ep(e,t){let n,r=e.transactionQueueTree_;for(n=Au(t);null!==n&&void 0===Uf(r);)r=zf(r,n),n=Au(t=Mu(t));return r}function Ip(e,t){const n=[];return Tp(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Tp(e,t,n){const r=Uf(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);$f(t,(t=>{Tp(e,t,n)}))}function Np(e,t){const n=Uf(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Vf(t,n.length>0?n:void 0)}$f(t,(t=>{Np(e,t)}))}function Pp(e,t){const n=Wf(Ep(e,t)),r=zf(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Rp(e,t)})),Rp(e,r),Hf(r,(t=>{Rp(e,t)})),n}function Rp(e,t){const n=Uf(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(mi(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(mi(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(hf(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Vf(t,void 0):n.length=s+1,op(e.eventQueue_,Wf(t),i);for(let e=0;e<r.length;e++)nu(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=function(e,t){const n=Dp(e),r=n.namespace;"firebase.com"===n.domain&&qc(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||qc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&$c("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new fu(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Ou(n.pathString)}},Dp=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):$c(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}},Ap="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lp{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$i(this.snapshot.exportVal())}}class Mp{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return mi(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fp{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Vu(this._path)?null:ju(this._path)}get ref(){return new zp(this._repo,this._path)}get _queryIdentifier(){const e=jd(this._queryParams),t=Qc(e);return"{}"===t?"default":t}get _queryObject(){return jd(this._queryParams)}isEqual(e){if(!((e=cs(e))instanceof Fp))return!1;const t=this._repo===e._repo,n=$u(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class zp extends Fp{constructor(e,t){super(e,t,new Ld,!1)}get parent(){const e=zu(this._path);return null===e?null:new zp(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Up{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ou(e),n=qp(this.ref,e);return new Up(this._node.getChild(t),n,pd)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Up(n,qp(this.ref,t),pd))))}hasChild(e){const t=new Ou(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Vp(e,t){return(e=cs(e))._checkNotDeleted("ref"),void 0!==t?qp(e._root,t):e._root}function qp(e,t){return null===Au((e=cs(e))._path)?tp("child","path",t,!1):ep("child","path",t,!1),new zp(e._repo,Uu(e._path,t))}function $p(e,t){e=cs(e),np("set",e._path),Jf("set",t,e._path,!1);const n=new Pi;return _p(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Hp(e){e=cs(e);const t=new jp((()=>{})),n=new Wp(t);return function(e,t,n){const r=yf(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=Sd(r).withIndex(t._queryParams.getIndex());let s;if(gf(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=ff(e.serverSyncTree_,t._path,i);else{const n=xf(e.serverSyncTree_,t);s=mf(e.serverSyncTree_,t._path,i,n)}return op(e.eventQueue_,t._path,s),pf(e.serverSyncTree_,t,n,null,!0),i}),(n=>(wp(e,"get for query "+$i(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Up(t,new zp(e._repo,e._path),e._queryParams.getIndex())))}class Wp{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Lp("value",this,new Up(e.snapshotNode,new zp(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Mp(this,e,t):null}matches(e){return e instanceof Wp&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}!function(e){mi(!Yh,"__referenceConstructor has already been defined"),Yh=e}(zp),function(e){mi(!Qh,"__referenceConstructor has already been defined"),Qh=e}(zp);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bp="FIREBASE_DATABASE_EMULATOR_HOST",Gp={};let Kp=!1;function Yp(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||qc("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),zc("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Op(s,i),c=l.repoInfo;void 0!==ti&&ti.env&&(a=ti.env[Bp]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Op(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new au(au.OWNER):new ou(e.name,e.options,t);rp("Invalid Firebase Database URL",l),Vu(l.path)||qc("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=Gp[t.name];i||(i={},Gp[t.name]=i);let s=i[e.toURLString()];s&&qc("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new dp(e,Kp,n,r),i[e.toURLString()]=s,s}(c,e,u,new su(e.name,n));return new Qp(d,e)}class Qp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zp(this._repo,Du())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Gp[t];n&&n[e.key]===e||qc(`Database ${t}(${e.repoInfo_}) has already been deleted.`),bp(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&qc("Cannot call "+e+" on a deleted database.")}}Qu.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Qu.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Ec=Zs,Ys(new us("database",((e,{instanceIdentifier:t})=>Yp(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),no(Cc,Sc,e),no(Cc,Sc,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const Xp=eo({apiKey:"AIzaSyA-R6K84iqpOllir3_wNuwqMtWiDnPHhAs",authDomain:"unixcademy-dev.firebaseapp.com",projectId:"unixcademy-dev",storageBucket:"unixcademy-dev.appspot.com",messagingSenderId:"8856511246",appId:"1:8856511246:web:a8fafad3ace3e90d8bad5f",databaseURL:"https://unixcademy-dev-default-rtdb.asia-southeast1.firebasedatabase.app/"}),Jp=function(e=to()){const t=Qs(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Qs(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Xi(n.getOptions(),null!=t?t:{}))return e;xo(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:gc,persistence:[bl,nl,il]}),r=Ni("authTokenSyncURL");if(r){const e=kc(r);!function(e,t,n){cs(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){cs(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}const i=Ei("auth");return i&&Sa(n,`http://${i}`),n}(Xp);Jp.useDeviceLanguage();const Zp=new Ua,em=function(e=to(),t){const n=Qs(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Ii("database");e&&function(e,t,n,r={}){e=cs(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&qc("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&qc('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new au(au.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:Ri(r.mockUserToken,e.app.options.projectId);s=new au(t)}!function(e,t,n,r){e.repoInfo_=new fu(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}(n,...e)}return n}(Xp),tm=Vp(em,"users");Vp(em);u=s("acw62");function nm(e,n){const[r,i]=t(u).useState((()=>{try{const t=window.localStorage.getItem(e);return t?JSON.parse(t):(window.localStorage.setItem(e,JSON.stringify(n)),n)}catch(e){return n}}));return[r,t=>{try{window.localStorage.setItem(e,JSON.stringify(t))}catch(e){}i(t)}]}u=s("acw62");var rm={};function im(){const[e,n]=t(u).useState((()=>(t(rm).config({barColors:{0:"#fdd946","1.0":"#fdd946"}}),t(rm).show(),!0)));return[e,e=>{n(e),!0===e?t(rm).show():t(rm).hide()}]}
/**
 * @license MIT
 * topbar 2.0.0, 2023-02-04
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */
(function(e,t){function n(){r.width=e.innerWidth,r.height=5*c.barThickness;var t=r.getContext("2d");t.shadowBlur=c.shadowBlur,t.shadowColor=c.shadowColor;var n,s=t.createLinearGradient(0,0,r.width,0);for(n in c.barColors)s.addColorStop(n,c.barColors[n]);t.lineWidth=c.barThickness,t.beginPath(),t.moveTo(0,c.barThickness/2),t.lineTo(Math.ceil(i*r.width),c.barThickness/2),t.strokeStyle=s,t.stroke()}var r,i,s,o=null,a=null,l=null,c={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},u={config:function(e){for(var t in e)c.hasOwnProperty(t)&&(c[t]=e[t])},show:function(d){var h,f;s||(d?l=l||setTimeout((()=>u.show()),d):(s=!0,null!==a&&e.cancelAnimationFrame(a),r||((f=(r=t.createElement("canvas")).style).position="fixed",f.top=f.left=f.right=f.margin=f.padding=0,f.zIndex=100001,f.display="none",c.className&&r.classList.add(c.className),t.body.appendChild(r),h="resize",d=n,(f=e).addEventListener?f.addEventListener(h,d,!1):f.attachEvent?f.attachEvent("on"+h,d):f["on"+h]=d),r.style.opacity=1,r.style.display="block",u.progress(0),c.autoRun&&function t(){o=e.requestAnimationFrame(t),u.progress("+"+.05*Math.pow(1-Math.sqrt(i),2))}()))},progress:function(e){return void 0===e||("string"==typeof e&&(e=(0<=e.indexOf("+")||0<=e.indexOf("-")?i:0)+parseFloat(e)),i=1<e?1:e,n()),i},hide:function(){clearTimeout(l),l=null,s&&(s=!1,null!=o&&(e.cancelAnimationFrame(o),o=null),function t(){return 1<=u.progress("+.1")&&(r.style.opacity-=.05,r.style.opacity<=.05)?(r.style.display="none",void(a=null)):void(a=e.requestAnimationFrame(t))}())}};"object"==typeof rm?rm=u:"function"==typeof define&&define.amd?define((function(){return u})):this.topbar=u}).call(rm,window,document);const sm={loading:[!0,null]},om=t(u=s("acw62")).createContext(sm),am=()=>t(u).useContext(om);var lm=({children:e})=>{const n={loading:im()},r=t(u).useMemo((()=>n),[]);return(0,o.jsx)(om.Provider,{value:r,children:e})};let cm;var um;(um=cm||(cm={}))[um.None=0]="None",um[um.LoggingIn=1]="LoggingIn",um[um.LogInSuccess=2]="LogInSuccess",um[um.LogInFailed=3]="LogInFailed",um[um.RegisterIn=4]="RegisterIn",um[um.RegisterSuccess=5]="RegisterSuccess",um[um.RegisterFailed=6]="RegisterFailed";const dm={user:null,login:e=>{},loginGoogle:()=>{},logout:()=>{},register:e=>{},authState:cm.None},hm=t(u).createContext(dm);function fm({children:e}){const[n,r]=nm("pengguna",null),[i,s]=t(u).useState(cm.None),[,a]=am().loading,l=rt(),c=(e,t)=>{$p(qp(tm,e),t).then((()=>{d(t)})).catch((e=>{console.error(e),s(cm.RegisterFailed)}))},d=e=>{a?.(!0),setTimeout((()=>{localStorage.setItem("pengguna",JSON.stringify(e)),s(cm.LogInSuccess),r(e),l("/",{state:{login:!0}})}),500)},h=async e=>{var t,n,r;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */s(cm.LoggingIn),(t=Jp,n=e.email,r=e.password,Xa(cs(t),Ma.credential(n,r))).then((e=>{const t=e.user;Hp(qp(tm,t.uid)).then((e=>{const t=e.val();d(t)})).catch((e=>{throw e}))})).catch((e=>{e.code,e.message;s(cm.LogInFailed)}))},f=()=>{r(null),localStorage.removeItem("pengguna")},p=()=>{s(cm.LoggingIn),Dl(Jp,Zp).then((e=>{Ua.credentialFromResult(e)?.accessToken;const t=e.user;Hp(qp(tm,t.uid)).then((e=>{const t=e.val();if(null==t)throw new Error("uid not found");d(t)})).catch((e=>{const n={nickname:t.displayName||""};c(t.uid,n)}))})).catch((e=>{e.code,e.message,e.customData.email,Ua.credentialFromError(e);s(cm.LogInFailed)}))},m=e=>{s(cm.RegisterIn),Ja(Jp,e.email,e.password).then((t=>{const n=t.user,r={nickname:e.nama};c(n.uid,r)})).catch((e=>{e.code;const t=e.message;console.error(t),s(cm.RegisterFailed)}))},g=t(u).useMemo((()=>({user:n,login:h,loginGoogle:p,logout:f,register:m,authState:i})),[n,i]);return(0,o.jsx)(hm.Provider,{value:g,children:e})}const pm=()=>t(u).useContext(hm);var mm,gm,vm,ym,_m,bm,wm,km,xm,Cm,Sm,Em,Im=t(u).forwardRef((({},e)=>{const n=pm(),[r,i]=t(u).useState(!1);return t(u).useImperativeHandle(e,(()=>({OnLogOut(){i(!0)}}))),(0,o.jsxs)("div",{className:"modal-container "+(r?"active":""),children:[(0,o.jsx)("div",{className:"modal-bg",onClick:()=>i?.(!1)}),(0,o.jsxs)("div",{className:"modal",children:[(0,o.jsx)("button",{className:"btn btn-none modal-close-icon",onClick:()=>i?.(!1),children:(0,o.jsx)(Sr,{})}),(0,o.jsx)("div",{className:"modal-logo text-center",children:(0,o.jsx)(yr,{})}),(0,o.jsx)("h3",{className:"modal-title text-center",children:"Yakin ingin keluar?"}),(0,o.jsxs)("div",{className:"text-center",children:[(0,o.jsx)(Jr,{text:"Batal",className:"btn-hover btn-modal btn-primary mr-0-5",onClick:()=>i?.(!1)}),(0,o.jsx)(Jr,{text:"Logout",className:"btn-hover btn-modal btn-danger",onClick:()=>{i(!1),n.logout()}})]})]})]})}));function Tm(e){const n=t(u).useRef(null),[r,i]=t(u).useState(!1),s=t(u).useRef(null);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Xr,{children:(0,o.jsx)(Im,{ref:s})}),(0,o.jsx)(Qr,{in:!e.hidden,nodeRef:n,timeout:300,classNames:"side-window",onEnter:()=>i(!0),onExit:()=>i(!1),children:(0,o.jsxs)("div",{ref:n,className:vm,id:"side-window",hidden:!r,children:[(0,o.jsx)("div",{className:wm,onClick:e.toggle,children:(0,o.jsx)("div",{className:_m,children:(0,o.jsx)(fr,{})})}),(0,o.jsxs)("div",{className:ym,children:[(0,o.jsxs)("div",{className:bm,children:[(0,o.jsx)(hr,{}),(0,o.jsx)("span",{className:mm,children:"Notifikasi"})]}),(0,o.jsxs)("div",{className:bm,children:[(0,o.jsx)(mr,{}),(0,o.jsx)("span",{className:mm,children:"Belanja"})]}),(0,o.jsxs)("div",{className:bm,children:[(0,o.jsx)(br,{}),(0,o.jsx)("span",{className:mm,children:"Top-up"})]}),(0,o.jsxs)("div",{className:bm,children:[(0,o.jsx)(Tr,{}),(0,o.jsx)("span",{className:mm,children:"Avatar"})]}),(0,o.jsx)("div",{className:bm,onClick:()=>{s.current?.OnLogOut(),e.toggle()},children:(0,o.jsx)("span",{className:mm,children:"LOGOUT"})})]}),(0,o.jsx)("div",{className:gm,onClick:e.toggle})]})})]})}function Nm({className:e,type:t,text:n,icon:r,onClick:i,isDisabled:s,isloading:a}){return n=n||"",(0,o.jsx)("button",{className:"btn "+e+" "+(s?"disabled":""),type:t,onClick:i,disabled:s,children:a?(0,o.jsx)("div",{className:"loading",children:(0,o.jsx)("div",{})}):(0,o.jsxs)(o.Fragment,{children:[r?(0,o.jsx)("span",{className:r}):"",n]})})}mm="f9IN-q_title",gm="f9IN-q_side_window_bg",vm="f9IN-q_side_window",ym="f9IN-q_content_scroll",_m="f9IN-q_back",bm="f9IN-q_button_icon",wm="f9IN-q_back_button",s("acw62"),km="xxQ-CG_profil_picture",xm="xxQ-CG_profil_nick",Cm="xxQ-CG_navbar_right",Sm="xxQ-CG_btn_login",Em="xxQ-CG_navbar";u=s("acw62");function Pm({to:e,children:n}){const[r,i]=am().loading,s=rt();return(0,o.jsx)(o.Fragment,{children:t(u).cloneElement(n,{onClick:()=>{i?.(!0),setTimeout((()=>s(e)),300)}})})}function Rm({children:e,rightMost:n}){const[r,i]=t(u).useState(!1),s=()=>i(!r),a=pm();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("nav",{className:Em,children:[e,(0,o.jsx)("div",{className:Cm,children:null===a.user?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Pm,{to:"/login",children:(0,o.jsx)(Nm,{className:Sm,text:"Masuk"})}),(0,o.jsx)(Pm,{to:"/register",children:(0,o.jsx)(Nm,{text:"Daftar"})})]}):(0,o.jsxs)("div",{onClick:s,children:[(0,o.jsx)("span",{className:km}),(0,o.jsxs)("span",{className:xm,children:["@",a?.user.nickname]})]})})]}),(0,o.jsx)(Tm,{hidden:!r,toggle:s})]})}var Om,Dm,Am,Lm,Mm,jm,Fm,zm,Um,Vm,qm,$m,Hm,Wm,Bm,Gm;u=s("acw62");function Km(){const e=t(u).createRef();return(0,o.jsx)(Xr,{children:(0,o.jsx)("div",{ref:e,className:Fm,children:(0,o.jsxs)("div",{className:Om,children:[(0,o.jsx)("div",{className:Dm,children:"Welcome..!!"}),(0,o.jsx)("div",{className:jm,children:"Glad you are here"}),(0,o.jsxs)("div",{className:Lm,children:[(0,o.jsx)("span",{className:Am}),(0,o.jsx)("span",{className:Mm,children:(0,o.jsx)(Nm,{className:"btn-none btn-link",text:"Hola!",onClick:()=>{e.current?.remove()}})})]})]})})})}function Ym({children:e}){const t=nt();return(0,o.jsxs)(o.Fragment,{children:[t.state?.login?(0,o.jsx)(Km,{}):"",(0,o.jsx)(Rm,{children:(0,o.jsx)(Pm,{to:"/",children:(0,o.jsx)("h2",{className:"navbar-title",children:"uniXcademy"})})}),e]})}function Qm({className:e,type:t,text:n,icon:r,onClick:i,isDisabled:s,isloading:a}){return n=n||"",(0,o.jsx)("button",{className:"btn login-google-btn",type:"button",onClick:i,disabled:s,children:a?(0,o.jsx)("div",{className:"loading",children:(0,o.jsx)("div",{})}):(0,o.jsx)(o.Fragment,{children:"Masuk dengan google"})})}function Xm(){const{register:e,handleSubmit:n,formState:{errors:r,isDirty:i,isValid:s}}=rr(),[a,l]=t(u).useState(!1),c=pm();return t(u).useEffect((()=>{c.authState==cm.LogInSuccess||c.authState==cm.RegisterSuccess?setTimeout((()=>l(!1)),1e3):c.authState!=cm.LogInFailed&&c.authState!=cm.RegisterFailed||setTimeout((()=>l(!1)),1e3)}),[c.authState]),(0,o.jsx)(Ym,{children:(0,o.jsxs)("section",{className:"login",children:[(0,o.jsx)(Qm,{onClick:c.loginGoogle,isloading:a,isDisabled:a}),(0,o.jsx)("h4",{className:"login-divider",children:(0,o.jsx)("span",{children:"Atau masuk menggunakan email"})}),(0,o.jsx)("div",{className:"login-failed-alert",hidden:c.authState!==cm.LogInFailed,children:(0,o.jsxs)("p",{className:"input-group-error",children:[(0,o.jsx)(pr,{}),"Email atau kata sandi tidak sesuai, silahkan coba lagi."]})}),(0,o.jsxs)("form",{className:"login-form",onSubmit:n((e=>{l(!0),c.login(e)})),children:[(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)("label",{className:"input-group-label",children:"Email"}),(0,o.jsx)("input",{className:"input-group-input",type:"text",placeholder:"name@mail.com","aria-invalid":r.email?"true":"false",...e("email",{required:!0,pattern:/^\S+@\S+$/i})}),r.email?(0,o.jsxs)("p",{className:"input-group-error",children:[(0,o.jsx)(pr,{}),r.email?.ref?.value," harus berupa alamat surel yang valid."]}):""]}),(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)("label",{className:"input-group-label",children:"Kata Sandi"}),(0,o.jsx)("input",{className:"input-group-input",type:"password",placeholder:"****","aria-invalid":r.password?"true":"false",...e("password",{required:!0,minLength:5})}),r.password?(0,o.jsxs)("p",{className:"input-group-error",children:[(0,o.jsx)(pr,{}),"minimal 5 karakter."]}):""]}),(0,o.jsx)(Nm,{className:"btn login-submit-btn",type:"submit",text:"Masuk",isloading:a,isDisabled:!i||!s||a})]}),(0,o.jsxs)("h4",{className:"mv-0-7",children:["atau ",(0,o.jsx)(At,{to:"/",children:"Lupa Sandi"})]}),(0,o.jsx)("div",{className:"login-divider-daftar"}),(0,o.jsxs)("h4",{className:"mv-0-7",children:["Tidak punya akun? ",(0,o.jsx)(At,{to:"/register",children:"Daftar Sekarang"})]})]})})}Om="_1Wj8FG_info_window_content",Dm="_1Wj8FG_info_window_title",Am="_1Wj8FG_action_left",Lm="_1Wj8FG_action_container",Mm="_1Wj8FG_action_right",jm="_1Wj8FG_info_window_desc",Fm="_1Wj8FG_info_window",s("acw62"),s("acw62"),s("acw62"),zm="_0vhdRa_card_item_price",Um="_0vhdRa_card_item_desc",Vm="_0vhdRa_card_item_helper",qm="_0vhdRa_card_item_price_old",$m="_0vhdRa_card_item_image",Hm="_0vhdRa_card_item_footer",Wm="_0vhdRa_card_item_title",Bm="_0vhdRa_card_item",Gm="_0vhdRa_card_item_users";var Jm={};function Zm(){return(0,o.jsx)(Pm,{to:"/course",children:(0,o.jsx)("div",{className:Bm,children:(0,o.jsxs)("div",{className:Vm+" unselectable",children:[(0,o.jsx)("div",{className:$m,children:(0,o.jsx)("img",{alt:"featured-image",src:t(Jm)})}),(0,o.jsx)("h2",{className:Wm,children:"Hack & slash anime side scroller"}),(0,o.jsx)("p",{className:Um,children:"game side scroller dengan mekanik menyerang yang mudah"}),(0,o.jsxs)("div",{className:Hm,children:[(0,o.jsxs)("h4",{className:Gm,children:[(0,o.jsx)(gr,{})," 5"]}),(0,o.jsx)(Nm,{className:zm,text:"2",icon:"icon-coin"}),(0,o.jsxs)("div",{className:qm,children:[(0,o.jsx)("span",{className:"icon-coin"}),"6"]})]})]})})})}Jm=new URL(s("27Lyk").resolve("fhqtG"),import.meta.url).toString();u=s("acw62"),u=s("acw62");var eg=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),tg="-ms-",ng="-moz-",rg="-webkit-",ig="comm",sg="rule",og="decl",ag="@import",lg="@keyframes",cg=Math.abs,ug=String.fromCharCode,dg=Object.assign;function hg(e,t){return 45^vg(e,0)?(((t<<2^vg(e,0))<<2^vg(e,1))<<2^vg(e,2))<<2^vg(e,3):0}function fg(e){return e.trim()}function pg(e,t){return(e=t.exec(e))?e[0]:e}function mg(e,t,n){return e.replace(t,n)}function gg(e,t){return e.indexOf(t)}function vg(e,t){return 0|e.charCodeAt(t)}function yg(e,t,n){return e.slice(t,n)}function _g(e){return e.length}function bg(e){return e.length}function wg(e,t){return t.push(e),e}function kg(e,t){return e.map(t).join("")}var xg=1,Cg=1,Sg=0,Eg=0,Ig=0,Tg="";function Ng(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:xg,column:Cg,length:o,return:""}}function Pg(e,t){return dg(Ng("",null,null,"",null,null,0),e,{length:-e.length},t)}function Rg(){return Ig=Eg<Sg?vg(Tg,Eg++):0,Cg++,10===Ig&&(Cg=1,xg++),Ig}function Og(){return vg(Tg,Eg)}function Dg(){return Eg}function Ag(e,t){return yg(Tg,e,t)}function Lg(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mg(e){return xg=Cg=1,Sg=_g(Tg=e),Eg=0,[]}function jg(e){return Tg="",e}function Fg(e){return fg(Ag(Eg-1,Vg(91===e?e+2:40===e?e+1:e)))}function zg(e){for(;(Ig=Og())&&Ig<33;)Rg();return Lg(e)>2||Lg(Ig)>3?"":" "}function Ug(e,t){for(;--t&&Rg()&&!(Ig<48||Ig>102||Ig>57&&Ig<65||Ig>70&&Ig<97););return Ag(e,Dg()+(t<6&&32==Og()&&32==Rg()))}function Vg(e){for(;Rg();)switch(Ig){case e:return Eg;case 34:case 39:34!==e&&39!==e&&Vg(Ig);break;case 40:41===e&&Vg(e);break;case 92:Rg()}return Eg}function qg(e,t){for(;Rg()&&e+Ig!==57&&(e+Ig!==84||47!==Og()););return"/*"+Ag(t,Eg-1)+"*"+ug(47===e?e:Rg())}function $g(e){for(;!Lg(Og());)Rg();return Ag(e,Eg)}function Hg(e){return jg(Wg("",null,null,null,[""],e=Mg(e),0,[0],e))}function Wg(e,t,n,r,i,s,o,a,l){for(var c=0,u=0,d=o,h=0,f=0,p=0,m=1,g=1,v=1,y=0,_="",b=i,w=s,k=r,x=_;g;)switch(p=y,y=Rg()){case 40:if(108!=p&&58==vg(x,d-1)){-1!=gg(x+=mg(Fg(y),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:x+=Fg(y);break;case 9:case 10:case 13:case 32:x+=zg(p);break;case 92:x+=Ug(Dg()-1,7);continue;case 47:switch(Og()){case 42:case 47:wg(Gg(qg(Rg(),Dg()),t,n),l);break;default:x+="/"}break;case 123*m:a[c++]=_g(x)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:f>0&&_g(x)-d&&wg(f>32?Kg(x+";",r,n,d-1):Kg(mg(x," ","")+";",r,n,d-2),l);break;case 59:x+=";";default:if(wg(k=Bg(x,t,n,c,u,i,a,_,b=[],w=[],d),s),123===y)if(0===u)Wg(x,t,k,k,b,s,d,a,w);else switch(99===h&&110===vg(x,3)?100:h){case 100:case 109:case 115:Wg(e,k,k,r&&wg(Bg(e,k,k,0,0,i,a,_,i,b=[],d),w),i,w,d,a,r?b:w);break;default:Wg(x,k,k,k,[""],w,0,a,w)}}c=u=f=0,m=v=1,_=x="",d=o;break;case 58:d=1+_g(x),f=p;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==(Ig=Eg>0?vg(Tg,--Eg):0,Cg--,10===Ig&&(Cg=1,xg--),Ig))continue;switch(x+=ug(y),y*m){case 38:v=u>0?1:(x+="\f",-1);break;case 44:a[c++]=(_g(x)-1)*v,v=1;break;case 64:45===Og()&&(x+=Fg(Rg())),h=Og(),u=d=_g(_=x+=$g(Dg())),y++;break;case 45:45===p&&2==_g(x)&&(m=0)}}return s}function Bg(e,t,n,r,i,s,o,a,l,c,u){for(var d=i-1,h=0===i?s:[""],f=bg(h),p=0,m=0,g=0;p<r;++p)for(var v=0,y=yg(e,d+1,d=cg(m=o[p])),_=e;v<f;++v)(_=fg(m>0?h[v]+" "+y:mg(y,/&\f/g,h[v])))&&(l[g++]=_);return Ng(e,t,n,0===i?sg:a,l,c,u)}function Gg(e,t,n){return Ng(e,t,n,ig,ug(Ig),yg(e,2,-2),0)}function Kg(e,t,n,r){return Ng(e,t,n,og,yg(e,0,r),yg(e,r+1,-1),r)}function Yg(e,t){for(var n="",r=bg(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Qg(e,t,n,r){switch(e.type){case ag:case og:return e.return=e.return||e.value;case ig:return"";case lg:return e.return=e.value+"{"+Yg(e.children,r)+"}";case sg:e.value=e.props.join(",")}return _g(n=Yg(e.children,r))?e.return=e.value+"{"+n+"}":""}function Xg(e){var t=bg(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}var Jg=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}},Zg=function(e,t,n){for(var r=0,i=0;r=i,i=Og(),38===r&&12===i&&(t[n]=1),!Lg(i);)Rg();return Ag(e,Eg)},ev=function(e,t){return jg(function(e,t){var n=-1,r=44;do{switch(Lg(r)){case 0:38===r&&12===Og()&&(t[n]=1),e[n]+=Zg(Eg-1,t,n);break;case 2:e[n]+=Fg(r);break;case 4:if(44===r){e[++n]=58===Og()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=ug(r)}}while(r=Rg());return e}(Mg(e),t))},tv=new WeakMap,nv=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||tv.get(n))&&!r){tv.set(e,!0);for(var i=[],s=ev(t,i),o=n.props,a=0,l=0;a<s.length;a++)for(var c=0;c<o.length;c++,l++)e.props[l]=i[a]?s[a].replace(/&\f/g,o[c]):o[c]+" "+s[a]}}},rv=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function iv(e,t){switch(hg(e,t)){case 5103:return rg+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return rg+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return rg+e+ng+e+tg+e+e;case 6828:case 4268:return rg+e+tg+e+e;case 6165:return rg+e+tg+"flex-"+e+e;case 5187:return rg+e+mg(e,/(\w+).+(:[^]+)/,rg+"box-$1$2"+tg+"flex-$1$2")+e;case 5443:return rg+e+tg+"flex-item-"+mg(e,/flex-|-self/,"")+e;case 4675:return rg+e+tg+"flex-line-pack"+mg(e,/align-content|flex-|-self/,"")+e;case 5548:return rg+e+tg+mg(e,"shrink","negative")+e;case 5292:return rg+e+tg+mg(e,"basis","preferred-size")+e;case 6060:return rg+"box-"+mg(e,"-grow","")+rg+e+tg+mg(e,"grow","positive")+e;case 4554:return rg+mg(e,/([^-])(transform)/g,"$1"+rg+"$2")+e;case 6187:return mg(mg(mg(e,/(zoom-|grab)/,rg+"$1"),/(image-set)/,rg+"$1"),e,"")+e;case 5495:case 3959:return mg(e,/(image-set\([^]*)/,rg+"$1$`$1");case 4968:return mg(mg(e,/(.+:)(flex-)?(.*)/,rg+"box-pack:$3"+tg+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+rg+e+e;case 4095:case 3583:case 4068:case 2532:return mg(e,/(.+)-inline(.+)/,rg+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_g(e)-1-t>6)switch(vg(e,t+1)){case 109:if(45!==vg(e,t+4))break;case 102:return mg(e,/(.+:)(.+)-([^]+)/,"$1"+rg+"$2-$3$1"+ng+(108==vg(e,t+3)?"$3":"$2-$3"))+e;case 115:return~gg(e,"stretch")?iv(mg(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==vg(e,t+1))break;case 6444:switch(vg(e,_g(e)-3-(~gg(e,"!important")&&10))){case 107:return mg(e,":",":"+rg)+e;case 101:return mg(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+rg+(45===vg(e,14)?"inline-":"")+"box$3$1"+rg+"$2$3$1"+tg+"$2box$3")+e}break;case 5936:switch(vg(e,t+11)){case 114:return rg+e+tg+mg(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return rg+e+tg+mg(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return rg+e+tg+mg(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return rg+e+tg+e+e}return e}var sv=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case og:e.return=iv(e.value,e.length);break;case lg:return Yg([Pg(e,{value:mg(e.value,"@","@"+rg)})],r);case sg:if(e.length)return kg(e.props,(function(t){switch(pg(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yg([Pg(e,{props:[mg(t,/:(read-\w+)/,":"+ng+"$1")]})],r);case"::placeholder":return Yg([Pg(e,{props:[mg(t,/:(plac\w+)/,":"+rg+"input-$1")]}),Pg(e,{props:[mg(t,/:(plac\w+)/,":"+ng+"$1")]}),Pg(e,{props:[mg(t,/:(plac\w+)/,tg+"input-$1")]})],r)}return""}))}}],ov=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,i,s=e.stylisPlugins||sv,o={},a=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;a.push(e)}));var l,c,u=[Qg,(c=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],d=Xg([nv,rv].concat(s,u));i=function(e,t,n,r){l=n,Yg(Hg(e?e+"{"+t.styles+"}":t.styles),d),r&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new eg({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return h.sheet.hydrate(a),h},av=(u=s("acw62"),{});av=s("9cCWX");var lv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},uv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dv={};function hv(e){return av.isMemo(e)?uv:dv[e.$$typeof]||lv}dv[av.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dv[av.Memo]=uv;var fv=Object.defineProperty,pv=Object.getOwnPropertyNames,mv=Object.getOwnPropertySymbols,gv=Object.getOwnPropertyDescriptor,vv=Object.getPrototypeOf,yv=Object.prototype;function _v(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var bv=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},wv=function(e,t,n){bv(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+r:"",i,e.sheet,!0);i=i.next}while(void 0!==i)}};var kv=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},xv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cv=/[A-Z]|^ms/g,Sv=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ev=function(e){return 45===e.charCodeAt(1)},Iv=function(e){return null!=e&&"boolean"!=typeof e},Tv=Jg((function(e){return Ev(e)?e:e.replace(Cv,"-$&").toLowerCase()})),Nv=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Sv,(function(e,t,n){return Rv={name:t,styles:n,next:Rv},t}))}return 1===xv[e]||Ev(e)||"number"!=typeof t||0===t?t:t+"px"};function Pv(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return Rv={name:n.name,styles:n.styles,next:Rv},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)Rv={name:r.name,styles:r.styles,next:Rv},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Pv(e,t,n[i])+";";else for(var s in n){var o=n[s];if("object"!=typeof o)null!=t&&void 0!==t[o]?r+=s+"{"+t[o]+"}":Iv(o)&&(r+=Tv(s)+":"+Nv(s,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var a=Pv(e,t,o);switch(s){case"animation":case"animationName":r+=Tv(s)+":"+a+";";break;default:r+=s+"{"+a+"}"}}else for(var l=0;l<o.length;l++)Iv(o[l])&&(r+=Tv(s)+":"+Nv(s,o[l])+";")}return r}(e,t,n);case"function":if(void 0!==e){var i=Rv,s=n(e);return Rv=i,Pv(e,t,s)}}if(null==t)return n;var o=t[n];return void 0!==o?o:n}var Rv,Ov=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Dv=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";Rv=void 0;var s=e[0];null==s||void 0===s.raw?(r=!1,i+=Pv(n,t,s)):i+=s[0];for(var o=1;o<e.length;o++)i+=Pv(n,t,e[o]),r&&(i+=s[o]);Ov.lastIndex=0;for(var a,l="";null!==(a=Ov.exec(i));)l+="-"+a[1];return{name:kv(i)+l,styles:i,next:Rv}},Av=(u=s("acw62"),!!(u=s("acw62")).useInsertionEffect&&u.useInsertionEffect),Lv=Av||function(e){return e()},Mv=(Av||u.useLayoutEffect,{}.hasOwnProperty),jv=(0,u.createContext)("undefined"!=typeof HTMLElement?ov({key:"css"}):null),Fv=(jv.Provider,function(e){return(0,u.forwardRef)((function(t,n){var r=(0,u.useContext)(jv);return e(t,r,n)}))}),zv=(0,u.createContext)({});var Uv="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Vv=function(e,t){var n={};for(var r in t)Mv.call(t,r)&&(n[r]=t[r]);return n[Uv]=e,n},qv=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;bv(t,n,r);Lv((function(){return wv(t,n,r)}));return null},$v=Fv((function(e,t,n){var r=e.css;"string"==typeof r&&void 0!==t.registered[r]&&(r=t.registered[r]);var i=e[Uv],s=[r],o="";"string"==typeof e.className?o=_v(t.registered,s,e.className):null!=e.className&&(o=e.className+" ");var a=Dv(s,void 0,(0,u.useContext)(zv));o+=t.key+"-"+a.name;var l={};for(var c in e)Mv.call(e,c)&&"css"!==c&&c!==Uv&&(l[c]=e[c]);return l.ref=n,l.className=o,(0,u.createElement)(u.Fragment,null,(0,u.createElement)(qv,{cache:t,serialized:a,isStringTag:"string"==typeof i}),(0,u.createElement)(i,l))})),Hv={};function Wv(){return Hv=Wv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hv.__esModule=!0,Hv.default=Hv,Wv.apply(this,arguments)}(Hv=Wv).__esModule=!0,Hv.default=Hv;function Bv(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Dv(t)}var Gv=function(){var e=Bv.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Kv=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var s=t[r];if(null!=s){var o=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))o=e(s);else for(var a in o="",s)s[a]&&a&&(o&&(o+=" "),o+=a);break;default:o=s}o&&(i&&(i+=" "),i+=o)}}return i};var Yv=function(e){var t=e.cache,n=e.serializedArr;Lv((function(){for(var e=0;e<n.length;e++)wv(t,n[e],!1)}));return null},Qv=Fv((function(e,t){var n=[],r=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var s=Dv(r,t.registered);return n.push(s),bv(t,s,!1),t.key+"-"+s.name},i={css:r,cx:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(e,t,n){var r=[],i=_v(e,r,n);return r.length<2?n:i+t(r)}(t.registered,r,Kv(n))},theme:(0,u.useContext)(zv)},s=e.children(i);return!0,(0,u.createElement)(u.Fragment,null,(0,u.createElement)(Yv,{cache:t,serializedArr:n}),s)}));u=s("acw62"),u=s("acw62");function Xv(){return Xv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xv.apply(this,arguments)}function Jv(e,t){return Jv=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Jv(e,t)}var Zv=new Map,ey=new WeakMap,ty=0,ny=void 0;function ry(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(ey.has(n)||(ty+=1,ey.set(n,ty.toString())),ey.get(n)):"0":e[t]);var n})).toString()}function iy(e,t,n,r){if(void 0===n&&(n={}),void 0===r&&(r=ny),void 0===window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var s=function(e){var t=ry(e),n=Zv.get(t);if(!n){var r,i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var n,s=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach((function(e){e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},Zv.set(t,n)}return n}(n),o=s.id,a=s.observer,l=s.elements,c=l.get(e)||[];return l.has(e)||l.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(l.delete(e),a.unobserve(e)),0===l.size&&(a.disconnect(),Zv.delete(o))}}var sy=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function oy(e){return"function"!=typeof e.children}var ay=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),oy(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Jv(t,n);var i=r.prototype;return i.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,s=e.delay,o=e.fallbackInView;this._unobserveCb=iy(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:s},o)}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!oy(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,i=r.children,s=r.as,o=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(r,sy);return u.createElement(s||"div",Xv({ref:this.handleNode},o),i)},r}(u.Component);function ly(e){var t,n=void 0===e?{}:e,r=n.threshold,i=n.delay,s=n.trackVisibility,o=n.rootMargin,a=n.root,l=n.triggerOnce,c=n.skip,d=n.initialInView,h=n.fallbackInView,f=n.onChange,p=u.useState(null),m=p[0],g=p[1],v=u.useRef(),y=u.useState({inView:!!d,entry:void 0}),_=y[0],b=y[1];v.current=f,u.useEffect((function(){var e;if(!c&&m)return e=iy(m,(function(t,n){b({inView:t,entry:n}),v.current&&v.current(t,n),n.isIntersecting&&l&&e&&(e(),e=void 0)}),{root:a,rootMargin:o,threshold:r,trackVisibility:s,delay:i},h),function(){e&&e()}}),[Array.isArray(r)?r.toString():r,m,a,o,l,c,s,h,i]);var w=null==(t=_.entry)?void 0:t.target,k=u.useRef();m||!w||l||c||k.current===w||(k.current=w,b({inView:!!d,entry:void 0}));var x=[g,_.inView,_.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var cy;cy=s("bi4Vg"),s("acw62");var uy=o.Fragment;function dy(e,t,n){return Mv.call(t,"css")?(0,o.jsx)($v,Vv(e,t),n):(0,o.jsx)(e,t,n)}u=s("acw62"),u=s("acw62"),u=s("acw62"),u=s("acw62"),u=s("acw62"),u=s("acw62"),u=s("acw62"),Gv`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Gv`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Gv`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Gv`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Gv`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Gv`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Gv`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Gv`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Gv`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Gv`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Gv`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Gv`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Gv`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var hy=Gv`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,fy=Gv`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,py=Gv`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,my=Gv`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gy=Gv`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vy=Gv`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yy=Gv`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_y=Gv`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,by=Gv`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wy=Gv`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ky=Gv`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xy=Gv`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cy=Gv`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Sy(e,t){return n=>n?e():t()}function Ey(e){return Sy(e,(()=>null))}var Iy=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:i=1e3,fraction:s=0,keyframes:o=vy,triggerOnce:a=!1,className:l,style:c,childClassName:d,childStyle:h,children:f,onVisibilityChange:p}=e,m=(0,u.useMemo)((()=>function({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=vy,iterationCount:i=1}){return Bv`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:o,duration:i})),[i,o]);return null==f?null:"string"==typeof(g=f)||"number"==typeof g||"boolean"==typeof g?dy(Ny,{...e,animationStyles:m,children:String(f)}):(0,cy.isFragment)(f)?dy(Py,{...e,animationStyles:m}):dy(uy,{children:u.Children.map(f,((o,f)=>{if(!(0,u.isValidElement)(o))return null;const g=r+(t?f*i*n:0);switch(o.type){case"ol":case"ul":return dy(Qv,{children:({cx:t})=>dy(o.type,{...o.props,className:t(l,o.props.className),style:Object.assign({},c,o.props.style),children:dy(Iy,{...e,children:o.props.children})})});case"li":return dy(ay,{threshold:s,triggerOnce:a,onChange:p,children:({inView:e,ref:t})=>dy(Qv,{children:({cx:n})=>dy(o.type,{...o.props,ref:t,className:n(d,o.props.className),css:Ey((()=>m))(e),style:Object.assign({},h,o.props.style,{animationDelay:g+"ms"})})})});default:return dy(ay,{threshold:s,triggerOnce:a,onChange:p,children:({inView:e,ref:t})=>dy("div",{ref:t,className:l,css:Ey((()=>m))(e),style:Object.assign({},c,{animationDelay:g+"ms"}),children:dy(Qv,{children:({cx:e})=>dy(o.type,{...o.props,className:e(d,o.props.className),style:Object.assign({},h,o.props.style)})})})})}}))});var g},Ty={display:"inline-block",whiteSpace:"pre"},Ny=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:s=1e3,fraction:o=0,triggerOnce:a=!1,className:l,style:c,children:u,onVisibilityChange:d}=e,{ref:h,inView:f}=ly({triggerOnce:a,threshold:o,onChange:d});return Sy((()=>dy("div",{ref:h,className:l,style:Object.assign({},c,Ty),children:u.split("").map(((e,n)=>dy("span",{css:Ey((()=>t))(f),style:{animationDelay:i+n*s*r+"ms"},children:e},n)))})),(()=>dy(Py,{...e,children:u})))(n)},Py=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:s,children:o,onVisibilityChange:a}=e,{ref:l,inView:c}=ly({triggerOnce:r,threshold:n,onChange:a});return dy("div",{ref:l,className:i,css:Ey((()=>t))(c),style:s,children:o})};Gv`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Gv`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Gv`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Gv`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Gv`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Gv`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var Ry=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Oy=Gv`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Dy=Gv`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ay=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ly=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,My=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,jy=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Fy=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,zy=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Uy=Gv`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Vy=Gv`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,qy=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,$y=Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;var Hy=e=>{const{big:t=!1,direction:n,reverse:r=!1,...i}=e,s=(0,u.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?Oy:fy;case"bottom-right":return t?Dy:py;case"down":return e?t?Ly:gy:t?Ay:my;case"left":return e?t?jy:yy:t?My:vy;case"right":return e?t?zy:by:t?Fy:_y;case"top-left":return t?Uy:wy;case"top-right":return t?Vy:ky;case"up":return e?t?$y:Cy:t?qy:xy;default:return t?Ry:hy}}(t,r,n)),[t,n,r]);return dy(Iy,{keyframes:s,...i})};Gv`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Gv`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Gv`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Gv`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Gv`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Gv`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Gv`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Gv`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Gv`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gv`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gv`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gv`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gv`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gv`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Gv`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Gv`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Gv`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Gv`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Gv`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gv`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Gv`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Gv`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Gv`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Gv`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Gv`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gv`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gv`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gv`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gv`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Gv`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gv`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Gv`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Gv`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Wy(){return(0,o.jsx)(Ym,{children:(0,o.jsx)("div",{className:"content container center",children:(0,o.jsxs)("section",{className:"course-list",children:[(0,o.jsx)("h3",{className:"mv-0-7",children:"Daftar Kursus"}),(0,o.jsx)("div",{className:"grid-view",children:(0,o.jsxs)(Hy,{duration:500,direction:"up",fraction:0,cascade:!0,damping:.2,children:[(0,o.jsx)(Zm,{}),(0,o.jsx)(Zm,{})]})})]})})})}u=s("acw62");function By(){const e=st(),n=nt(),[,r]=am().loading;return t(u).useEffect((()=>{setTimeout((()=>r?.(!1)),300)}),[n]),(0,o.jsx)(fm,{children:e})}var Gy,Ky,Yy,Qy,Xy,Jy,Zy,e_,t_,n_,r_,i_,s_,o_,a_,l_,c_,u_,d_,h_,f_,p_,m_,g_,v_,y_,__;u=s("acw62");function b_(){const{register:e,handleSubmit:n,formState:{errors:r,isDirty:i,isValid:s}}=rr(),[a,l]=t(u).useState(!1),c=pm();return t(u).useEffect((()=>{c.authState==cm.LogInSuccess||c.authState==cm.RegisterSuccess?setTimeout((()=>l(!1)),1e3):c.authState!=cm.LogInFailed&&c.authState!=cm.RegisterFailed||setTimeout((()=>l(!1)),1e3)}),[c.authState]),(0,o.jsx)(Ym,{children:(0,o.jsxs)("section",{className:"register",children:[(0,o.jsx)(Qm,{onClick:c.loginGoogle,isloading:a,isDisabled:a}),(0,o.jsx)("h4",{className:"login-divider",children:(0,o.jsx)("span",{children:"Atau daftar menggunakan email"})}),(0,o.jsxs)("form",{className:"login-form",onSubmit:n((e=>{l(!0),c.register(e)})),children:[(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)("label",{className:"input-group-label",children:"Nama"}),(0,o.jsx)("input",{className:"input-group-input",type:"text",placeholder:"nama kamu","aria-invalid":r.nama?"true":"false",...e("nama",{required:!0,pattern:/^[a-zA-Z]+$/})}),r.nama?(0,o.jsxs)("p",{className:"input-group-error",children:[(0,o.jsx)(pr,{}),"harus tersusun dari abjad."]}):""]}),(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)("label",{className:"input-group-label",children:"Email"}),(0,o.jsx)("input",{className:"input-group-input",type:"text",placeholder:"name@mail.com","aria-invalid":r.email?"true":"false",...e("email",{required:!0,pattern:/^\S+@\S+$/i})}),r.email?(0,o.jsxs)("p",{className:"input-group-error",children:[(0,o.jsx)(pr,{}),r.email?.ref?.value," harus berupa alamat surel yang valid."]}):""]}),(0,o.jsxs)("div",{className:"input-group",children:[(0,o.jsx)("label",{className:"input-group-label",children:"Kata Sandi"}),(0,o.jsx)("input",{className:"input-group-input",type:"password",placeholder:"****","aria-invalid":r.password?"true":"false",...e("password",{required:!0,minLength:5})}),r.password?(0,o.jsxs)("p",{className:"input-group-error",children:[(0,o.jsx)(pr,{}),"minimal 5 karakter."]}):""]}),(0,o.jsx)("div",{className:"input-group",children:(0,o.jsx)("label",{className:"input-group-label",children:"FACTION"})}),(0,o.jsxs)("div",{className:"register-term-of-service mv-0-7 d-flex",children:[(0,o.jsx)("input",{className:"item-checkbox mr-0-5",type:"checkbox",...e("agree",{required:!0}),"aria-invalid":r.agree?"true":"false"}),(0,o.jsxs)("span",{children:["Saya menyetujui ",(0,o.jsx)(At,{to:"#",children:"Ketentuan Pengguna"})," dan ",(0,o.jsx)(At,{to:"#",children:"Kebijakan Privasi"}),"."]})]}),(0,o.jsx)(Nm,{className:"btn login-submit-btn",type:"submit",text:"Masuk",isloading:a,isDisabled:!i||!s||a})]}),(0,o.jsx)("div",{className:"login-divider-daftar"}),(0,o.jsxs)("h4",{className:"mv-0-7",children:["Sudah punya akun? ",(0,o.jsx)(At,{to:"/login",children:"Masuk Sekarang"})]})]})})}function w_({id:e,parentid:t}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:Xy,"data-active":e===t,children:[(0,o.jsxs)("div",{className:Qy,children:[(0,o.jsx)("h4",{className:Yy,children:"01. Getting Started"}),(0,o.jsx)("span",{className:Jy,children:"100%"})]}),(0,o.jsxs)("ul",{className:e_,children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:Ky,children:(0,o.jsx)(wr,{})}),"Setting Animator and Animation",(0,o.jsx)("span",{className:Gy,children:(0,o.jsx)(vr,{})})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:Ky,children:(0,o.jsx)(xr,{})}),"Quiz 1",(0,o.jsx)("span",{className:Gy,children:(0,o.jsx)(vr,{})})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:Ky,children:(0,o.jsx)(Er,{})}),"Difference between A and B.",(0,o.jsx)("span",{className:Gy,children:(0,o.jsx)(vr,{})})]})]})]}),(0,o.jsxs)("div",{className:Xy,"data-active":e===t,children:[(0,o.jsxs)("div",{className:Qy,children:[(0,o.jsx)("h4",{className:Yy,children:"02. Getting Advanced"}),(0,o.jsx)("span",{className:Jy,children:"20%"})]}),(0,o.jsxs)("ul",{className:e_,children:[(0,o.jsxs)("li",{"data-live":!0,children:[(0,o.jsx)("span",{className:Ky,children:(0,o.jsx)(wr,{})}),"Setting Animator and Animation",(0,o.jsx)("span",{className:Zy,children:"12 menit"})]}),(0,o.jsxs)("li",{"data-inactive":!0,"data-ispreview":!0,children:[(0,o.jsx)("span",{className:Ky,children:(0,o.jsx)(xr,{})}),"Quiz 1",(0,o.jsx)("span",{className:Zy,children:"12 menit"})]}),(0,o.jsxs)("li",{"data-inactive":!0,children:[(0,o.jsx)("span",{className:Ky,children:(0,o.jsx)(Er,{})}),"Difference between A and B.",(0,o.jsx)("span",{className:Zy,children:"12 menit"})]})]})]})]})}function k_(){return(0,o.jsxs)("div",{className:t_,children:[(0,o.jsx)("p",{children:"berikut file yang bisa kamu unduh."}),(0,o.jsxs)("div",{className:n_,children:[(0,o.jsx)("div",{className:r_,children:(0,o.jsx)(Cr,{})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h5",{children:(0,o.jsx)("a",{href:"#",children:"FILE ARCHIEVE.zip"})}),(0,o.jsx)("p",{children:"diperbarui: 01-01-2023"})]})]})]})}function x_(){return(0,o.jsxs)("div",{className:o_,children:[(0,o.jsxs)("nav",{className:a_,children:[(0,o.jsx)("div",{className:l_+" "+i_,children:(0,o.jsx)(kr,{})}),(0,o.jsx)("div",{className:l_,children:(0,o.jsx)(Ir,{})})]}),(0,o.jsxs)("section",{className:s_,children:[(0,o.jsx)(k_,{}),(0,o.jsx)(w_,{id:0,parentid:0})]})]})}function C_(){return(0,o.jsxs)("div",{className:__,children:[(0,o.jsx)("button",{type:"button",className:v_,children:(0,o.jsx)(Pr,{})}),(0,o.jsx)("button",{type:"button",className:y_,children:(0,o.jsx)(Nr,{})})]})}function S_(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:m_,children:[(0,o.jsx)("p",{children:"video..."}),(0,o.jsxs)("button",{className:h_,type:"button",children:[(0,o.jsx)(_r,{}),(0,o.jsxs)("div",{className:f_,children:["chapter5. ",(0,o.jsx)("br",{})," Integrasi mekanik dengan kontrol karakter"]})]})]}),(0,o.jsxs)("div",{className:d_,children:[(0,o.jsxs)("div",{className:"d-flex justify-between",children:[(0,o.jsx)("p",{className:u_,children:"oleh admin uniXcademy"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:g_,children:"vidio 30 menit 12 detik"}),(0,o.jsx)(C_,{})]})]}),(0,o.jsx)("h5",{className:p_,children:"Bagian 5."}),(0,o.jsx)("h3",{className:c_,children:"Integrasi mekanik dengan kontrol karakter"})]})]})}function E_(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(Ym,{children:(0,o.jsxs)("div",{className:"d-flex content-space",children:[(0,o.jsx)("section",{className:"course-content",style:{flex:1,position:"relative"},children:(0,o.jsx)(S_,{})}),(0,o.jsx)(x_,{})]})})})}function I_({opposite:e}){const t=pm();if(e){if(null!==t.user)return(0,o.jsx)(yt,{to:"/"})}else if(null===t.user)return(0,o.jsx)(yt,{to:"/login"});return(0,o.jsx)(_t,{})}s("acw62"),s("acw62"),s("acw62"),Gy="CNnA9G_course_item_done",Ky="CNnA9G_course_item_type",Yy="CNnA9G_course_item_title",Qy="CNnA9G_course_item_title_container",Xy="CNnA9G_course_item_list_container",Jy="CNnA9G_course_item_percentage",Zy="CNnA9G_course_item_est_time",e_="CNnA9G_course_item_list",s("acw62"),t_="nDTuwq_course_desc_file",n_="nDTuwq_course_file_card",r_="nDTuwq_course_file_icon",i_="xYhxYa_active",s_="xYhxYa_course_list_content",o_="xYhxYa_course_list",a_="xYhxYa_tabs",l_="xYhxYa_tabs_item",s("acw62"),c_="yXcdPq_course_desc_title",u_="yXcdPq_course_desc_creator",d_="yXcdPq_course_desc",h_="yXcdPq_info_button",f_="yXcdPq_info_button_pop",p_="yXcdPq_course_desc_chapter",m_="yXcdPq_course_video",g_="yXcdPq_course_desc_length",s("acw62"),v_="suEa3q_like",y_="suEa3q_dislike",__="suEa3q_like_dislike",s("acw62");const T_=async()=>{const e=new Promise((e=>setTimeout((()=>e(!0)),1500)));return void 0===t&&(t={}),new Y({prom:e},"number"==typeof t?{status:t}:t);var t};a(document.getElementById("app")).render((0,o.jsx)(t(u).StrictMode,{children:(0,o.jsx)((function(){const e=(t=[{element:(0,o.jsx)(lm,{children:(0,o.jsx)(By,{})}),loader:T_,children:[{path:"/",element:(0,o.jsx)(Wy,{})},{element:(0,o.jsx)(I_,{opposite:!0}),children:[{path:"/register",element:(0,o.jsx)(b_,{})},{path:"/login",element:(0,o.jsx)(Xm,{})}]},{element:(0,o.jsx)(I_,{}),children:[{path:"/course",element:(0,o.jsx)(E_,{})}]}]}],de({basename:null==n?void 0:n.basename,history:p({window:null==n?void 0:n.window}),hydrationData:(null==n?void 0:n.hydrationData)||Rt(),routes:It(t)}).initialize());var t,n;return(0,o.jsx)(vt,{router:e})}),{})}));
//# sourceMappingURL=index.1dd3f158.js.map
