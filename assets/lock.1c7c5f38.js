import{O as i,P as e,e as m,j as r,E as l}from"./index.fb3bb849.js";import{u as n}from"./index.esm.af7ad10b.js";import{o as c}from"./yup.module.ca9c4ec8.js";const u=i({email:e().email("Invalid email").required("Email is Required"),password:e().required("Password is Required")}).required(),x=()=>{const{register:s,formState:{errors:a},handleSubmit:o}=n({resolver:c(u)});return m("form",{onSubmit:o(t=>{console.log(t)}),className:"space-y-4 ",children:[r(l,{name:"email",label:"email",type:"password",register:s,error:a.password,className:"h-[48px]"}),r("button",{className:"btn btn-dark block w-full text-center",children:"Unlock"})]})};export{x as L};