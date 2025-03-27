var e=Object.defineProperty,r=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(r,a,s)=>a in r?e(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,t=(e,r)=>{for(var a in r||(r={}))l.call(r,a)&&n(e,a,r[a]);if(s)for(var a of s(r))o.call(r,a)&&n(e,a,r[a]);return e},i=(e,s)=>r(e,a(s));import{j as m}from"./index-CNXBr1wT.js";import{u as c}from"./index.esm-Di5Nvi7D.js";import{r as u}from"./vendor-C9Evistz.js";function d(){const{register:e,handleSubmit:r,formState:{errors:a,isSubmitting:s},reset:l}=c({mode:"onChange",defaultValues:{nombre:"",email:"",telefono:"",mensaje:""}}),[o,n]=u.useState(!1),[d,j]=u.useState(null),p=u.useCallback((e=>{return r=this,a=null,s=function*(){try{j(null),yield new Promise((e=>setTimeout(e,1e3))),console.log("Datos del formulario:",e),n(!0),l(),setTimeout((()=>n(!1)),3e3)}catch(r){j("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."),console.error("Error al enviar formulario:",r)}},new Promise(((e,l)=>{var o=e=>{try{t(s.next(e))}catch(r){l(r)}},n=e=>{try{t(s.throw(e))}catch(r){l(r)}},t=r=>r.done?e(r.value):Promise.resolve(r.value).then(o,n);t((s=s.apply(r,a)).next())}));var r,a,s}),[l]);return m.jsxs("main",{className:"contacto-cont",children:[m.jsx("h1",{children:"¡Contáctanos!"}),m.jsxs("form",{className:"formulario",onSubmit:r(p),noValidate:!0,children:[m.jsxs("div",{className:"form-group",children:[m.jsx("input",i(t({type:"text",placeholder:"Ingresa tu nombre"},e("nombre",{required:"El nombre es requerido",minLength:{value:2,message:"El nombre debe tener al menos 2 caracteres"}})),{"aria-label":"Nombre","aria-invalid":a.nombre?"true":"false"})),a.nombre&&m.jsx("span",{className:"error-message",role:"alert",children:a.nombre.message})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("input",i(t({type:"email",placeholder:"Ingresa tu email"},e("email",{required:"El email es requerido",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Email inválido"}})),{"aria-label":"Email","aria-invalid":a.email?"true":"false"})),a.email&&m.jsx("span",{className:"error-message",role:"alert",children:a.email.message})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("input",i(t({type:"tel",placeholder:"Ingresa tu teléfono"},e("telefono",{required:"El teléfono es requerido",pattern:{value:/^[0-9\s\-\+]{10,}$/,message:"Teléfono inválido"}})),{"aria-label":"Teléfono","aria-invalid":a.telefono?"true":"false"})),a.telefono&&m.jsx("span",{className:"error-message",role:"alert",children:a.telefono.message})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("textarea",i(t({placeholder:"Deja tu mensaje aquí"},e("mensaje",{required:"El mensaje es requerido",minLength:{value:10,message:"El mensaje debe tener al menos 10 caracteres"}})),{"aria-label":"Mensaje","aria-invalid":a.mensaje?"true":"false"})),a.mensaje&&m.jsx("span",{className:"error-message",role:"alert",children:a.mensaje.message})]}),d&&m.jsx("div",{className:"error-message",role:"alert",children:d}),m.jsx("button",{className:"enviar",type:"submit",disabled:s||Object.keys(a).length>0,children:s?"Enviando...":"Enviar mensaje"}),o&&m.jsx("div",{className:"mensaje-exito",role:"status",children:"¡Mensaje enviado con éxito!"})]})]})}export{d as default};
//# sourceMappingURL=ContactComponent-Sab_0R6c.js.map
