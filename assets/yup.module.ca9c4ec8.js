import{g as p,s as m,a as y}from"./index.esm.af7ad10b.js";var v=function(e,r,n){if(e&&"reportValidity"in e){var o=p(n,r);e.setCustomValidity(o&&o.message||""),e.reportValidity()}},h=function(e,r){var n=function(i){var t=r.fields[i];t&&t.ref&&"reportValidity"in t.ref?v(t.ref,i,e):t.refs&&t.refs.forEach(function(u){return v(u,i,e)})};for(var o in r.fields)n(o)},g=function(e,r){r.shouldUseNativeValidation&&h(e,r);var n={};for(var o in e){var i=p(r.fields,o);m(n,o,Object.assign(e[o],{ref:i&&i.ref}))}return n},x=function(e,r,n){return r===void 0&&(r={}),n===void 0&&(n={}),function(o,i,t){try{return Promise.resolve(function(u,c){try{var l=(r.context&&console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"),Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](o,Object.assign({abortEarly:!1},r,{context:i}))).then(function(s){return t.shouldUseNativeValidation&&h({},t),{values:n.rawValues?o:s,errors:{}}}))}catch(s){return c(s)}return l&&l.then?l.then(void 0,c):l}(0,function(u){if(!u.inner)throw u;return{values:{},errors:g((c=u,l=!t.shouldUseNativeValidation&&t.criteriaMode==="all",(c.inner||[]).reduce(function(s,a){if(s[a.path]||(s[a.path]={message:a.message,type:a.type}),l){var d=s[a.path].types,f=d&&d[a.type];s[a.path]=y(a.path,l,s,a.type,f?[].concat(f,a.message):a.message)}return s},{})),t)};var c,l}))}catch(u){return Promise.reject(u)}}};export{x as o};