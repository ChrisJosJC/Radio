import{l as _}from"./preact.module.98YAipDl.js";import{p as d}from"./hooks.module.BihhUdnT.js";var p=0;function n(e,o,c,i,u,a){var l,r,t={};for(r in o)r=="ref"?l=o[r]:t[r]=o[r];var f={type:e,props:t,key:c,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--p,__i:-1,__u:0,__source:u,__self:a};if(typeof e=="function"&&(l=e.defaultProps))for(r in l)t[r]===void 0&&(t[r]=l[r]);return _.vnode&&_.vnode(f),f}function s(e){return n("svg",{width:"104",height:"139",viewBox:"0 0 448 512",...e,children:n("path",{d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z",fill:"currentColor"})})}function v(e){return n("svg",{width:"104",height:"139",viewBox:"0 0 104 139",fill:"none",...e,children:n("path",{d:"M19.7708 10.5625C15.7625 8.09793 10.725 8.01668 6.63542 10.3188C2.54583 12.6209 0 16.9542 0 21.6667V117C0 121.713 2.54583 126.046 6.63542 128.348C10.725 130.65 15.7625 130.542 19.7708 128.104L97.7708 80.4376C101.644 78.0813 104 73.8834 104 69.3334C104 64.7834 101.644 60.6126 97.7708 58.2292L19.7708 10.5625Z",fill:"currentColor"})})}function C({...e}){const[o,c]=d(!1),i=u=>{o||document.querySelector("#player").play(),o&&document.querySelector("#player").pause(),c(!o)};return o?n(s,{...e,onClick:i}):n(v,{...e,onClick:i})}export{C as default};