import{g as b,h as O,r as g}from"./index.fb3bb849.js";const d=b(O);var j=Object.create,n=Object.defineProperty,f=Object.getOwnPropertyDescriptor,w=Object.getOwnPropertyNames,P=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=(e,r)=>{for(var t in r)n(e,t,{get:r[t],enumerable:!0})},_=(e,r,t,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of w(r))!m.call(e,a)&&a!==t&&n(e,a,{get:()=>r[a],enumerable:!(p=f(r,a))||p.enumerable});return e},x=(e,r,t)=>(t=e!=null?j(P(e)):{},_(r||!e||!e.__esModule?n(t,"default",{value:e,enumerable:!0}):t,e)),M=e=>_(n({},"__esModule",{value:!0}),e),i={};h(i,{VectorMap:()=>y});var D=M(i);x(g.exports);var u=d;function y({id:e,name:r,layers:t,tabIndex:p=0,layerProps:a,checkedLayers:s,currentLayers:c,children:v,...l}){return!t||t.length===0?(console.error("[@south-paw/react-vector-maps] No 'layers' prop provided. Did you spread a map object onto the component?"),null):(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":r,...l,children:[v,t.map(o=>(0,u.jsx)("path",{tabIndex:p,"aria-label":o.name,"aria-checked":s&&s.includes(o.id),"aria-current":c&&c.includes(o.id),...o,...a},o.id))]},e)}export{D as d};
