(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{277:function(n,e){n.exports={appId:"Y9zMi3FmehC7pSkJjACYy8OI-gzGzoHsz",appKey:"eW0wAFMCIEBP9kwO96g5Hvgm"}},284:function(n,e,t){"use strict";t.r(e);var i=void 0,a={name:"valine",data:function(){return{window:null}},methods:{renderValine:function(){"undefined"!=typeof window&&(this.window=window,window.AV=t(275));var n=t(276),e=t(277);new n({el:"#vcomments",appId:e.appId,appKey:e.appKey,notify:!1,verify:!1,path:window.location.pathname,avatar:"",placeholder:"留言"})}},mounted:function(){this.renderValine()},watch:{$route:{handler:function(n,e){n.path!==e.path&&i.$nextTick((function(){i.renderValine()}))}}}},o=t(2),d=Object(o.a)(a,(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"valine",attrs:{id:"valine"}},[e("hr",{staticStyle:{"border-top":"4px dashed #ddd"}}),this._v(" "),e("div",{attrs:{id:"vcomments"}})])}],!1,null,null,null);e.default=d.exports}}]);