(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-156ffcf6"],{"306c":function(t,a,s){"use strict";var e=s("c67a"),i=s.n(e);i.a},8418:function(t,a,s){"use strict";var e=s("c04e"),i=s("9bf2"),c=s("5c6c");t.exports=function(t,a,s){var n=e(a);n in t?i.f(t,n,c(0,s)):t[n]=s}},"99af":function(t,a,s){"use strict";var e=s("23e7"),i=s("d039"),c=s("e8b5"),n=s("861d"),o=s("7b0b"),r=s("50c4"),l=s("8418"),u=s("65f0"),d=s("1dde"),h=s("b622"),m=s("60ae"),f=h("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",g=m>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),C=d("concat"),b=function(t){if(!n(t))return!1;var a=t[f];return void 0!==a?!!a:c(t)},_=!g||!C;e({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,e,i,c,n=o(this),d=u(n,0),h=0;for(a=-1,e=arguments.length;a<e;a++)if(c=-1===a?n:arguments[a],b(c)){if(i=r(c.length),h+i>p)throw TypeError(v);for(s=0;s<i;s++,h++)s in c&&l(d,h,c[s])}else{if(h>=p)throw TypeError(v);l(d,h++,c)}return d.length=h,d}})},a4e6:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"d-md-flex flex-wrap mt-4 mt-lg-5",staticStyle:{margin:"0 auto"}},[s("div",{staticClass:"left_side_menu"},[s("div",{staticClass:"select_menu text-center"},[t._m(0),s("div",{staticClass:"txt"},[s("ul",{staticClass:"list-unstyled"},[s("li",[s("a",{class:{active:"all"===t.KeyTxt},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.backactive(a)}}},[s("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v(" BACK TO SHOP ")])])])])])]),s("div",{staticClass:"topSelect-txt d-md-none"},[s("ul",{staticClass:"list-unstyled d-flex justify-content-center align-items-center"},[t._m(1),s("li",[s("a",{class:{active:"back"===t.KeyTxt},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.backactive(a)}}},[s("i",{staticClass:"fas fa-chevron-left mr-1"}),t._v("BACK TO SHOP ")])])])]),s("div",{staticClass:"right_side_shop d-md-flex mb-5"},[s("div",{staticClass:"productsItem mb-5"},[s("div",{staticClass:"newproduct"},[s("div",{staticClass:"newproduct_pic"},[s("div",{staticClass:"newProimg",style:"background: url("+t.AllProduct.imageUrl+") center / cover no-repeat;"}),"hotman"==t.AllProduct.category||"hotproduct"==t.AllProduct.category?s("div",{staticClass:"newstamp p-2"},[s("span",[t._v("HOT")])]):t._e()])])]),s("div",{staticClass:"product-detail ml-3"},[s("div",{staticClass:"text-dark"},[s("div",{staticClass:"txt mt-2"},[s("h2",[t._v(t._s(t.AllProduct.title))])]),s("div",{staticClass:"mt-5 d-flex"},[s("button",{staticClass:"less",on:{click:function(a){return t.btnChange(-1)}}},[s("i",{staticClass:"fas fa-minus",attrs:{"aria-hidden":"true"}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.AllNum,expression:"AllNum"}],attrs:{type:"number",max:"10",min:"1"},domProps:{value:t.AllNum},on:{input:function(a){a.target.composing||(t.AllNum=a.target.value)}}}),s("button",{staticClass:"add",on:{click:function(a){return t.btnChange(1)}}},[s("i",{staticClass:"fas fa-plus",attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"mt-3"},[s("strong",[t._v(t._s(t._f("currency")(t.AllNum*t.AllProduct.price))+" TW")])]),s("button",{staticClass:"btn btn-lg btn-size mt-4",attrs:{type:"buttom"},on:{click:function(a){return t.addtoCart(t.AllProduct.id,t.AllNum)}}},[t._v("ADD TO CART")])])])])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"toptxt bg-dark"},[s("h4",{staticClass:"text-white mb-0"},[t._v("CATEGORY")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[s("div",{staticClass:"bg-dark"},[s("h4",{staticClass:"text-white mb-0"},[t._v("CATEGORY")])])])}],c=(s("99af"),s("1157")),n=s.n(c),o={data:function(){return{itemId:"",KeyTxt:"",isLoading:!1,AllNum:1,AllProduct:[],status:{loadingItem:""}}},methods:{getProduct:function(t){var a=this;a.isLoading=!0;var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/product/").concat(t);this.$http.get(s).then((function(t){a.AllProduct=t.data.product,a.isLoading=!1}))},backactive:function(){var t=this;t.KeyTxt="back",t.$router.push("/store/allproduct")},getCartProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/cart"),a=this;this.$http.get(t).then((function(t){a.$bus.$emit("cartnum:push",t.data.data.carts.length)}))},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/cart"),e=this;e.isLoading=!0,e.status.loadingItem=t;var i={product_id:t,qty:a};this.$http.post(s,{data:i}).then((function(t){e.isLoading=!1,e.status.loadingItem="",t.data.success&&(e.$bus.$emit("cart:push"),e.getCartProduct(),e.$bus.$emit("message:push",t.data.data,"info"),n()(".side_icon").toggleClass("animated"),n()(".wrap").toggleClass("active"),n()(".aside").toggleClass("active"),n()(".Screen-modal").toggleClass("cart-modal-open"),n()(".cart-modal").addClass("cart-modal-open"),n()("body").addClass("scrollClose"))}))},adddetail:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/product/").concat(t);this.$http.get(s).then((function(t){t.data.success&&a.$router.push("/store/shopping_cart/".concat(t.data.product.id))}))},btnChange:function(t){-1===t&&this.AllNum<=1?this.AllNum=1:1===t&&this.AllNum>=10?this.AllNum=10:this.AllNum+=t}},created:function(){this.itemId=this.$route.params.itemId,this.getProduct(this.itemId)}},r=o,l=(s("306c"),s("2877")),u=Object(l["a"])(r,e,i,!1,null,"2cb7d769",null);a["default"]=u.exports},c67a:function(t,a,s){}}]);
//# sourceMappingURL=chunk-156ffcf6.eec4325a.js.map