(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e87ce46"],{3652:function(s,t,e){"use strict";var a=e("8b48"),r=e.n(a);r.a},8070:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),s.signin(t)}}},[e("h1",{staticClass:"h3 mb-3 font-weight-normal"},[s._v("請先登入")]),e("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[s._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:s.user.username},on:{input:function(t){t.target.composing||s.$set(s.user,"username",t.target.value)}}}),e("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[s._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:s.user.password},on:{input:function(t){t.target.composing||s.$set(s.user,"password",t.target.value)}}}),s._m(0),e("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[s._v("Sign in")]),e("p",{staticClass:"mt-5 mb-3 text-muted"},[s._v("© 2017-2019")])])])},r=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),s._v(" Remember me ")])])}],n={name:"Login",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var s="".concat("https://vue-course-api.hexschool.io","/admin/signin"),t=this;this.$http.post(s,t.user).then((function(s){s.data.success&&t.$router.push("/dashboard/products")}))}}},o=n,i=(e("3652"),e("2877")),u=Object(i["a"])(o,a,r,!1,null,"7da3f346",null);t["default"]=u.exports},"8b48":function(s,t,e){}}]);
//# sourceMappingURL=chunk-2e87ce46.ac6fdf7e.js.map