(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a1fba17"],{"0d03":function(t,e,a){var s=a("6eeb"),o=Date.prototype,n="Invalid Date",i="toString",c=o[i],r=o.getTime;new Date(NaN)+""!=n&&s(o,i,(function(){var t=r.call(this);return t===t?c.call(this):n}))},"66cb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-success",on:{click:function(e){return t.openCoupon(!0)}}},[t._v("建立新的優惠卷")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.coupon_code,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.percent)+"%")]),a("td",[t._v(t._s(e.due_date))]),a("td",[1==e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openCoupon(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.delModal(e)}}},[t._v("刪除")])])])})),0)]),a("Pagination",{attrs:{pagination:t.pagination},on:{getPage:t.getCoupon}}),a("div",{staticClass:"modal fade",attrs:{id:"ProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProducts.title,expression:"tempProducts.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProducts.title},on:{input:function(e){e.target.composing||t.$set(t.tempProducts,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"coupon"}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProducts.code,expression:"tempProducts.code"}],staticClass:"form-control",attrs:{type:"text",id:"coupon",placeholder:"code"},domProps:{value:t.tempProducts.code},on:{input:function(e){e.target.composing||t.$set(t.tempProducts,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProducts.due_date,expression:"tempProducts.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"message-text"},domProps:{value:t.tempProducts.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempProducts,"due_date",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"percent"}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProducts.percent,expression:"tempProducts.percent"}],staticClass:"form-control",attrs:{type:"text",id:"percent"},domProps:{value:t.tempProducts.percent},on:{input:function(e){e.target.composing||t.$set(t.tempProducts,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProducts.is_enabled,expression:"tempProducts.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProducts.is_enabled)?t._i(t.tempProducts.is_enabled,null)>-1:t._q(t.tempProducts.is_enabled,1)},on:{change:function(e){var a=t.tempProducts.is_enabled,s=e.target,o=s.checked?1:0;if(Array.isArray(a)){var n=null,i=t._i(a,n);s.checked?i<0&&t.$set(t.tempProducts,"is_enabled",a.concat([n])):i>-1&&t.$set(t.tempProducts,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProducts,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.sendCoupon(t.tempProducts.id)}}},[t._v("更新優惠卷")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(3),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProducts.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.readydelModal}},[t._v("確認刪除")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("名稱")]),a("th",[t._v("折扣百分比")]),a("th",[t._v("到期日")]),a("th",[t._v("是否啟用")]),a("th",{attrs:{width:"200"}},[t._v("編輯")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("model title")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex"},[a("label",{staticClass:"col-form-labe font-weight-bold",attrs:{for:"message-text"}},[t._v("到期日")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(a("99af"),a("0d03"),a("ac1f"),a("5319"),a("1157")),i=a.n(n),c=a("7e70"),r={data:function(){return{isNew:!1,isLoading:!1,pagination:{},tempProducts:{},coupon_code:[],coupon_percent:""}},components:{Pagination:c["a"]},methods:{getCoupon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/admin/coupons?page=").concat(t),a=this;a.isLoading=!0,this.$http.get(e).then((function(t){a.isLoading=!1,a.coupon_code=t.data.coupons,a.pagination=t.data.pagination}))},openCoupon:function(t,e){t?(this.tempProducts={},this.isNew=!0):(this.tempProducts=Object.assign({},e),this.isNew=!1),i()("#ProductModal").modal("show")},sendCoupon:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/admin/coupon"),a=this,s=new Date(a.tempProducts.due_date);a.tempProducts.due_date=s.toLocaleDateString().replace("/","-").replace("/","-");var o="post";a.isNew||(e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/admin/coupon/").concat(a.tempProducts.id),o="put"),this.$http[o](e,{data:a.tempProducts}).then((function(t){t.data.success,i()("#ProductModal").modal("hide"),a.getCoupon()}))},delModal:function(t){this.tempProducts=t,i()("#delProductModal").modal("show")},readydelModal:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tang","/admin/coupon/").concat(t.tempProducts.id);this.$http.delete(e).then((function(e){e.data.success,i()("#delProductModal").modal("hide"),t.getCoupon()}))}},created:function(){this.getCoupon()}},d=r,l=a("2877"),u=Object(l["a"])(d,s,o,!1,null,null,null);e["default"]=u.exports},"7e70":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e.id,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},o=[],n={props:["pagination"],methods:{getProducts:function(t){this.$emit("getPage",t)}}},i=n,c=a("2877"),r=Object(c["a"])(i,s,o,!1,null,null,null);e["a"]=r.exports},8418:function(t,e,a){"use strict";var s=a("c04e"),o=a("9bf2"),n=a("5c6c");t.exports=function(t,e,a){var i=s(e);i in t?o.f(t,i,n(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var s=a("23e7"),o=a("d039"),n=a("e8b5"),i=a("861d"),c=a("7b0b"),r=a("50c4"),d=a("8418"),l=a("65f0"),u=a("1dde"),p=a("b622"),m=a("60ae"),v=p("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",b=m>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=u("concat"),_=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:n(t)},C=!b||!h;s({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,s,o,n,i=c(this),u=l(i,0),p=0;for(e=-1,s=arguments.length;e<s;e++)if(n=-1===e?i:arguments[e],_(n)){if(o=r(n.length),p+o>f)throw TypeError(g);for(a=0;a<o;a++,p++)a in n&&d(u,p,n[a])}else{if(p>=f)throw TypeError(g);d(u,p++,n)}return u.length=p,u}})}}]);
//# sourceMappingURL=chunk-7a1fba17.03f0476c.js.map