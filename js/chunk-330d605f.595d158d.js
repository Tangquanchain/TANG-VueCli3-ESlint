(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330d605f"],{"0d03":function(t,e,a){var s=a("6eeb"),r=Date.prototype,o="Invalid Date",i="toString",n=r[i],c=r.getTime;new Date(NaN)+""!=o&&s(r,i,(function(){var t=c.call(this);return t===t?n.call(this):o}))},"159b":function(t,e,a){var s=a("da84"),r=a("fdbc"),o=a("17c2"),i=a("9112");for(var n in r){var c=s[n],l=c&&c.prototype;if(l&&l.forEach!==o)try{i(l,"forEach",o)}catch(u){l.forEach=o}}},"17c2":function(t,e,a){"use strict";var s=a("b727").forEach,r=a("b301");t.exports=r("forEach")?function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},3755:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"coupon-alert"},t._l(t.messages,(function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible d-flex justify-content-center align-items-center rounded-0",class:"alert-"+e.status},[a("strong",{staticClass:"text-center alert-txt cartProduct_txt"},[t._v(t._s(e.message))]),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{staticStyle:{"font-size":"20px",color:"#f31e1e"},attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},r=[],o=(a("4160"),a("a434"),a("0d03"),a("159b"),{name:"Navbar",data:function(){return{messages:[],qty:""}},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(a,s){a.timestamp===t&&e.messages.splice(s,1)}))}),2e3)}},created:function(){var t=this;t.$bus.$on("coupon:push",(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dark";t.updateMessage(e,a)}))}}),i=o,n=(a("97a7"),a("2877")),c=Object(n["a"])(i,s,r,!1,null,"0aa12a1d",null);e["a"]=c.exports},4160:function(t,e,a){"use strict";var s=a("23e7"),r=a("17c2");s({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"61a3":function(t,e,a){},8418:function(t,e,a){"use strict";var s=a("c04e"),r=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var i=s(e);i in t?r.f(t,i,o(0,a)):t[i]=a}},"97a7":function(t,e,a){"use strict";var s=a("baee"),r=a.n(s);r.a},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),o=a("e8b5"),i=a("861d"),n=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),m=a("b622"),p=a("60ae"),f=m("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=p>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),C=d("concat"),b=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},_=!g||!C;s({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,s,r,o,i=n(this),d=u(i,0),m=0;for(e=-1,s=arguments.length;e<s;e++)if(o=-1===e?i:arguments[e],b(o)){if(r=c(o.length),m+r>v)throw TypeError(h);for(a=0;a<r;a++,m++)a in o&&l(d,m,o[a])}else{if(m>=v)throw TypeError(h);l(d,m++,o)}return d.length=m,d}})},a2aa:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AlertConpon"),a("div",{staticClass:"mt-5 mb-5"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"container",staticStyle:{border:"3px solid #1c1e1b"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-12 order-3 order-md-1"},[t._m(0),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-8",on:{submit:function(e){return e.preventDefault(),t.sendOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v("Check Email")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"First and Last Name"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("Check Name")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("Phone")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required|digits:10",expression:"'required|digits:10'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("phone")},attrs:{type:"tel",name:"phone",id:"usertel",placeholder:"Phone"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("phone")?a("span",{staticClass:"text-danger"},[t._v("Check Phone")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("Shopping Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"Address"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("Check Address")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("Information")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),""!=t.cartProduct?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-continue text-white",on:{click:t.goTop}},[t._v("CONTINUE")])]):t._e()])])]),a("div",{staticClass:"col-md-6 col-12 order-2"},[a("table",{staticClass:"table table-sm mr-5"},[t.cartProduct?a("tbody",[""==t.cartProduct?a("tr",[a("td",{staticClass:"text-center p-3",attrs:{colspan:"5"}},[a("p",{staticClass:"cartProduct_txt mb-0"},[t._v("CART IS EMPTY.")]),a("button",{staticClass:"btn btn-size btn-lg",on:{click:t.goshop}},[t._v("GO SHOP")])])]):t._e(),t._l(t.cartProduct,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle text-center p-3"},[a("div",{style:"width:100px; height:100px; background: url("+e.product.imageUrl+") center / cover no-repeat;"})]),a("td",{staticClass:"align-middle"},[a("p",{staticClass:"cartProduct_txt mb-0"},[t._v(t._s(e.product.title))])]),a("td",{staticClass:"align-middle"},[t._v("X"+t._s(e.qty))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.product.origin_price))+" TW")]),a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(a){return t.removeCart(e.id)}}},[a("i",{staticClass:"fa fa-trash-alt",attrs:{"aria-hidden":"true"}})])])])}))],2):t._e(),a("tfoot",[t.cartTotal==t.cartFinal_Total?a("tr",[t._m(1),a("td",{staticClass:"text-right pr-4",attrs:{colspan:"3"}},[a("p",{staticClass:"cartProduct_txt mb-0"},[a("strong",[t._v(t._s(t._f("currency")(t.cartTotal))+" TW")])])])]):t._e(),t.cartTotal!==t.cartFinal_Total?a("tr",[t._m(2),t.cartFinal_Total?a("td",{staticClass:"text-right pr-4",attrs:{colspan:"3"}},[a("p",{staticClass:"cartProduct_txt mb-0",staticStyle:{color:"#faabab"}},[a("strong",[t._v(t._s(t._f("currency")(t.cartFinal_Total))+" TW")])])]):t._e()]):t._e()])]),a("div",{staticClass:"d-flex justify-content-end"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticStyle:{border:"1.5px solid $black"},attrs:{type:"text",placeholder:"   Please add the code"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("button",{staticClass:"btn btn-continue btn-sm text-white rounded-0 ml-2",attrs:{type:"button"},on:{click:function(e){return t.addCouponCode()}}},[t._v("DISCOUNT")])])])])])],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main mt-4"},[a("ul",{staticClass:"list-unstyled breakcrumb"},[a("li",{staticClass:"breakcrumb-txt"},[a("span",{staticClass:"p-5"},[a("i",{staticClass:"fa fa-check text-dark",staticStyle:{"line-height":"0"},attrs:{"aria-hidden":"true"}})]),t._v(" CART ")]),a("li",{staticClass:"breakcrumb-txt"},[a("span",{staticClass:"p-5 text-dark"},[t._v("1")]),t._v(" INFORMATION ")]),a("li",{staticClass:"breakcrumb-txt"},[a("span",{staticClass:"p-5"},[t._v("2")]),t._v(" COMPLETE ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"text-left pl-3",attrs:{colspan:"2"}},[a("p",{staticClass:"cartProduct_txt mb-0",staticStyle:{"font-size":"12px","margin-top":"7px"}},[t._v("TOTAL")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"text-left pl-3",attrs:{colspan:"2"}},[a("p",{staticClass:"cartProduct_txt mb-0",staticStyle:{"font-size":"12px","margin-top":"7px"}},[t._v("TOTAL")])])}],o=(a("99af"),a("3755")),i=a("1157"),n=a.n(i),c={components:{AlertConpon:o["a"]},data:function(){return{isLoading:!1,cartProduct:[],cartLength:"",cartTotal:"",cartFinal_Total:"",coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCartProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/cart"),e=this;this.$http.get(t).then((function(t){e.cartProduct=t.data.data.carts,e.cartTotal=t.data.data.total,e.cartFinal_Total=t.data.data.final_total,e.$bus.$emit("cartnum:push",t.data.data.carts.length)}))},goshop:function(){this.$router.push("/store/allproduct")},removeCart:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/cart/").concat(t),a=this;a.isLoading=!0,this.$http.delete(e).then((function(){a.isLoading=!1,a.getCartProduct(),a.$bus.$emit("coupon:push","Remove item")}))},sendOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/order"),a=this;this.$validator.validate().then((function(s){s?t.$http.post(e,{data:a.form}).then((function(t){t.data.success&&a.$router.push("/checkout/formdata/".concat(t.data.orderId))})):console.log("form is error")}))},addCouponCode:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/coupon"),e=this;e.isLoading=!0;var a={code:e.coupon_code};this.$http.post(t,{data:a}).then((function(t){!0===t.data.success?(e.getCartProduct(),e.isLoading=!1,e.$bus.$emit("coupon:push","Apply to success")):(e.isLoading=!1,e.getCartProduct(),e.$bus.$emit("coupon:push","Can't find Coupon"))}))},goTop:function(){n()("body,html").animate({scrollTop:"0px"},900)}},created:function(){this.getCartProduct()}},l=c,u=(a("ff98"),a("2877")),d=Object(u["a"])(l,s,r,!1,null,null,null);e["default"]=d.exports},a434:function(t,e,a){"use strict";var s=a("23e7"),r=a("23cb"),o=a("a691"),i=a("50c4"),n=a("7b0b"),c=a("65f0"),l=a("8418"),u=a("1dde"),d=Math.max,m=Math.min,p=9007199254740991,f="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var a,s,u,v,h,g,C=n(this),b=i(C.length),_=r(t,b),x=arguments.length;if(0===x?a=s=0:1===x?(a=0,s=b-_):(a=x-2,s=m(d(o(e),0),b-_)),b+a-s>p)throw TypeError(f);for(u=c(C,s),v=0;v<s;v++)h=_+v,h in C&&l(u,v,C[h]);if(u.length=s,a<s){for(v=_;v<b-s;v++)h=v+s,g=v+a,h in C?C[g]=C[h]:delete C[g];for(v=b;v>b-s+a;v--)delete C[v-1]}else if(a>s)for(v=b-s;v>_;v--)h=v+s-1,g=v+a-1,h in C?C[g]=C[h]:delete C[g];for(v=0;v<a;v++)C[v+_]=arguments[v+2];return C.length=b-s+a,u}})},b301:function(t,e,a){"use strict";var s=a("d039");t.exports=function(t,e){var a=[][t];return!a||!s((function(){a.call(null,e||function(){throw 1},1)}))}},baee:function(t,e,a){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},ff98:function(t,e,a){"use strict";var s=a("61a3"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-330d605f.595d158d.js.map