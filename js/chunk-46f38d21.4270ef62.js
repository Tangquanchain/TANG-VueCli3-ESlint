(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46f38d21"],{"0d03":function(t,e,s){var a=s("6eeb"),r=Date.prototype,i="Invalid Date",n="toString",o=r[n],c=r.getTime;new Date(NaN)+""!=i&&a(r,n,(function(){var t=c.call(this);return t===t?o.call(this):i}))},"159b":function(t,e,s){var a=s("da84"),r=s("fdbc"),i=s("17c2"),n=s("9112");for(var o in r){var c=a[o],l=c&&c.prototype;if(l&&l.forEach!==i)try{n(l,"forEach",i)}catch(d){l.forEach=i}}},"17c2":function(t,e,s){"use strict";var a=s("b727").forEach,r=s("b301");t.exports=r("forEach")?function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},4160:function(t,e,s){"use strict";var a=s("23e7"),r=s("17c2");a({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"44cb":function(t,e,s){},8418:function(t,e,s){"use strict";var a=s("c04e"),r=s("9bf2"),i=s("5c6c");t.exports=function(t,e,s){var n=a(e);n in t?r.f(t,n,i(0,s)):t[n]=s}},"942d":function(t,e,s){},"979e":function(t,e,s){"use strict";var a=s("942d"),r=s.n(a);r.a},"99af":function(t,e,s){"use strict";var a=s("23e7"),r=s("d039"),i=s("e8b5"),n=s("861d"),o=s("7b0b"),c=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),f=s("b622"),h=s("60ae"),v=f("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",g=h>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=u("concat"),_=function(t){if(!n(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},C=!g||!b;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,s,a,r,i,n=o(this),u=d(n,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?n:arguments[e],_(i)){if(r=c(i.length),f+r>p)throw TypeError(m);for(s=0;s<r;s++,f++)s in i&&l(u,f,i[s])}else{if(f>=p)throw TypeError(m);l(u,f++,i)}return u.length=f,u}})},"9db3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("AlertFinishOrder"),s("div",{staticClass:"container mt-5 mb-5",staticStyle:{border:"3px solid #1c1e1b"}},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("div",{staticClass:"row justify-content-center"},[s("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[t._m(0),s("table",{staticClass:"table"},[t._m(1),s("tbody",t._l(t.order.products,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),s("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right font-weight-bold",attrs:{colspan:"2"}},[t._v("TOTAL")]),s("td",{staticClass:"text-right font-weight-bold"},[t._v(t._s(t.order.total))])])])]),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{width:"100"}},[t._v("Order id")]),s("td",[t._v(" "+t._s(this.orderId)+" "),s("i",{staticClass:"far fa-question-circle text-warning ml-2 orderquestion-flash",attrs:{"data-toggle":"tooltip","data-placement":"bottom","data-html":"true",title:"<div>COPY</div>"}})])]),s("tr"),s("tr",[s("th",{attrs:{width:"100"}},[t._v("Email")]),s("td",[t._v(t._s(t.order.user.email))])]),s("tr",[s("th",[t._v("Name")]),s("td",[t._v(t._s(t.order.user.name))])]),s("tr",[s("th",[t._v("Phone")]),s("td",[t._v(t._s(t.order.user.tel))])]),s("tr",[s("th",[t._v("Address")]),s("td",[t._v(t._s(t.order.user.address))])]),s("tr",[s("th",[t._v("payment status")]),s("td",[t.order.is_paid?s("span",{staticClass:"text-success"},[t._v("PAID")]):s("span",{staticStyle:{color:"#faabab"}},[t._v("UNPAID")])])])])]),!1===t.order.is_paid?s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-size",staticStyle:{"border-radius":"20px"}},[t._v("CONFIRM TO PAY")])]):t._e()])])],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main mt-4 mb-5"},[s("ul",{staticClass:"list-unstyled breakcrumb"},[s("li",{staticClass:"breakcrumb-txt"},[s("span",{staticClass:"p-5"},[s("i",{staticClass:"fa fa-check text-dark",staticStyle:{"line-height":"0"},attrs:{"aria-hidden":"true"}})]),t._v(" CART ")]),s("li",{staticClass:"breakcrumb-txt"},[s("span",{staticClass:"p-5 text-dark"},[t._v("1")]),t._v(" INFORMATION ")]),s("li",{staticClass:"breakcrumb-txt"},[s("span",{staticClass:"p-5"},[t._v("2")]),t._v(" COMPLETE ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Name")]),s("th",[t._v("Acount")]),s("th",[t._v("Price")])])])}],i=(s("99af"),s("1157")),n=s.n(i),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"coupon-alert"},t._l(t.messages,(function(e,a){return s("div",{key:a,staticClass:"alert alert-dismissible d-flex justify-content-center align-items-center rounded-0",class:"alert-"+e.status},[s("div",{staticClass:"alert-outline"},[s("strong",{staticClass:"text-center alert-txt cartProduct_txt"},[t._v(t._s(e.message))]),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(a)}}},[s("span",{staticStyle:{"font-size":"20px",color:"#000"},attrs:{"aria-hidden":"true"}},[t._v("×")])])])])})),0)},c=[],l=(s("4160"),s("a434"),s("0d03"),s("159b"),{name:"Navbar",data:function(){return{messages:[],qty:""}},methods:{updateMessage:function(t,e){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:s}),this.removeMessageWithTiming(s)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(s,a){s.timestamp===t&&e.messages.splice(a,1)}))}),3e3)}},created:function(){var t=this;t.$bus.$on("finish:push",(function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dark";t.updateMessage(e,s)}))}}),d=l,u=(s("d757"),s("2877")),f=Object(u["a"])(d,o,c,!1,null,"79cd8e8c",null),h=f.exports,v={components:{AlertFinishOrder:h},data:function(){return{isLoading:!1,order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this;t.isLoading=!0;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/order/").concat(t.orderId);this.$http.get(e).then((function(e){t.isLoading=!1,t.order=e.data.order}))},payOrder:function(){var t=this;t.isLoading=!0;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/pay/").concat(t.orderId);this.$http.post(e).then((function(e){e.data.success&&(n()("AlertFinishOrder").addClass("active"),t.isLoading=!1,t.$bus.$emit("finish:push","Thanks for your shopping,your order is completed to be ready."),t.getOrder(),window.setTimeout((function(){t.$router.push("/checkout/complete")}),15e3))}))}},created:function(){n()((function(){n()('[data-toggle="tooltip"]').tooltip()})),this.orderId=this.$route.params.orderId,this.getOrder()}},p=v,m=(s("979e"),Object(u["a"])(p,a,r,!1,null,null,null));e["default"]=m.exports},a434:function(t,e,s){"use strict";var a=s("23e7"),r=s("23cb"),i=s("a691"),n=s("50c4"),o=s("7b0b"),c=s("65f0"),l=s("8418"),d=s("1dde"),u=Math.max,f=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d("splice")},{splice:function(t,e){var s,a,d,p,m,g,b=o(this),_=n(b.length),C=r(t,_),y=arguments.length;if(0===y?s=a=0:1===y?(s=0,a=_-C):(s=y-2,a=f(u(i(e),0),_-C)),_+s-a>h)throw TypeError(v);for(d=c(b,a),p=0;p<a;p++)m=C+p,m in b&&l(d,p,b[m]);if(d.length=a,s<a){for(p=C;p<_-a;p++)m=p+a,g=p+s,m in b?b[g]=b[m]:delete b[g];for(p=_;p>_-a+s;p--)delete b[p-1]}else if(s>a)for(p=_-a;p>C;p--)m=p+a-1,g=p+s-1,m in b?b[g]=b[m]:delete b[g];for(p=0;p<s;p++)b[p+C]=arguments[p+2];return b.length=_-a+s,d}})},b301:function(t,e,s){"use strict";var a=s("d039");t.exports=function(t,e){var s=[][t];return!s||!a((function(){s.call(null,e||function(){throw 1},1)}))}},d757:function(t,e,s){"use strict";var a=s("44cb"),r=s.n(a);r.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-46f38d21.4270ef62.js.map