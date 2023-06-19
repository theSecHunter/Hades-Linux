"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[391],{21383:function(W,O,r){r.r(O);var T=r(97857),a=r.n(T),b=r(5574),o=r.n(b),x=r(12121),l=r(38345),d=r(89129),C=r(48555),p=r(26713),g=r(20550),h=r(83186),j=r(63922),v=r(49748),m=r(67294),P=r(30381),B=r.n(P),M=r(80854),s=r(85893),y=[{title:"\u4E3B\u673A\u540D\u79F0",dataIndex:"hostname",copyable:!0,ellipsis:!0,formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u5E73\u53F0",dataIndex:"platform",ellipsis:!0,search:!1,width:"8%",formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]},renderText:function(i){return i===null?null:i.indexOf("Windows")!=-1?"Windows":i.replace(/^\S/,function(e){return e.toUpperCase()})}},{title:"\u6807\u7B7E",dataIndex:"tags",search:!1,render:function(i,e,n,u){var _;return(0,s.jsx)(p.Z,{size:[0,8],children:(0,s.jsx)(p.Z,{size:[0,8],children:(_=e.tags)===null||_===void 0?void 0:_.map(function(t,R){return(0,s.jsx)(g.Z,{color:"green",children:t},t)})})})},width:"10%"},{title:"\u72B6\u6001",dataIndex:"status",ellipsis:!0,width:"8%",valueEnum:{true:{text:"\u5728\u7EBF",status:"Success"},false:{text:"\u79BB\u7EBF",status:"Error"}},filters:!0,onFilter:!0,search:!1},{title:"\u5BA2\u6237\u7AEF\u6027\u80FD",search:!1,render:function(i,e,n,u){return(0,s.jsxs)(p.Z,{size:[20,24],children:[(0,s.jsxs)(p.Z,{size:[0,4],wrap:!0,children:[(0,s.jsx)(g.Z,{color:"default",children:"CPU"}),(e.cpu*100).toFixed(2)+"%"]}),(0,s.jsx)("p",{}),(0,s.jsxs)(p.Z,{size:[0,4],wrap:!0,children:[(0,s.jsx)(g.Z,{color:"default",children:"MEM"}),(e.mem/(1024*1024)).toFixed(1)+"MB"]})]})},width:"15%"},{title:"\u5730\u5740",dataIndex:"addr",copyable:!0,ellipsis:!0,formItemProps:{rules:[{required:!0,message:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}]}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",dataIndex:"create_at",sorter:!0,search:!1,hideInSearch:!0,renderText:function(i){var e=new Date(i*1e3);return B()(e).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:"10%",render:function(i,e,n,u){return[(0,s.jsx)("a",{href:"host/"+e.agent_id,rel:"noopener noreferrer",children:"\u8BE6\u60C5"},"view")]}}],D=function(){var i=(0,m.useState)(!1),e=o()(i,2),n=e[0],u=e[1],_=(0,m.useState)(0),t=o()(_,2),R=t[0],L=t[1],K=(0,m.useState)(0),A=o()(K,2),U=A[0],w=A[1],S=(0,M.useRequest)(v.Ek),E=S.data;(0,m.useEffect)(function(){L((E==null?void 0:E.total)||0),w((E==null?void 0:E.online)||0)},[E]);var H=(0,m.useRef)();return(0,s.jsxs)(x._z,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(C.Z,{onResize:function(c){u(c.width<596)},children:(0,s.jsxs)(l.Z.Group,{direction:n?"column":"row",children:[(0,s.jsx)(l.Z,{layout:"center",children:(0,s.jsx)(h.Z,{title:"\u5728\u7EBF\u4E3B\u673A",value:U,precision:0,prefix:(0,s.jsx)(j.Z,{color:"green"})})}),(0,s.jsx)(l.Z.Divider,{type:n?"horizontal":"vertical"}),(0,s.jsx)(l.Z,{layout:"center",children:(0,s.jsx)(h.Z,{title:"\u79BB\u7EBF\u4E3B\u673A",value:R-U,precision:0,prefix:(0,s.jsx)(j.Z,{color:"gray"})})})]})},"resize-observer")}),(0,s.jsx)("p",{}),(0,s.jsx)(d.Z,{columns:y,actionRef:H,cardBordered:!0,request:v.Zs,editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage",onChange:function(c){console.log("value: ",c)}},rowKey:"agent_id",search:{defaultCollapsed:!1,labelWidth:"auto"},options:!1,form:{syncToUrl:function(c,Z){return Z==="get"?a()(a()({},c),{},{created_at:[c.startTime,c.endTime]}):c}},pagination:{pageSize:10,onChange:function(c){return console.log(c)}},dateFormatter:"string",headerTitle:"\u4E3B\u673A\u5217\u8868"})]})};O.default=D},49748:function(W,O,r){r.d(O,{Ek:function(){return C},LH:function(){return y},Nh:function(){return f},UV:function(){return B},Zs:function(){return g},nc:function(){return m},pi:function(){return j},sk:function(){return s}});var T=r(15009),a=r.n(T),b=r(97857),o=r.n(b),x=r(99289),l=r.n(x),d=r(80854);function C(e){return p.apply(this,arguments)}function p(){return p=l()(a()().mark(function e(n){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,d.request)("/api/v1/grpc/conn/count",o()({method:"GET"},n||{})));case 1:case"end":return _.stop()}},e)})),p.apply(this,arguments)}function g(e,n){return h.apply(this,arguments)}function h(){return h=l()(a()().mark(function e(n,u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)("/api/v1/grpc/conn/basic",o()({method:"GET",params:o()({},n)},u||{})));case 1:case"end":return t.stop()}},e)})),h.apply(this,arguments)}function j(e,n){return v.apply(this,arguments)}function v(){return v=l()(a()().mark(function e(n,u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)("/api/v1/grpc/conn/stat",o()({method:"GET",params:o()({},n)},u||{})));case 1:case"end":return t.stop()}},e)})),v.apply(this,arguments)}function m(e,n){return P.apply(this,arguments)}function P(){return P=l()(a()().mark(function e(n,u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)("/api/v1/plugin/send",o()({method:"POST",data:JSON.stringify({name:n.name,pversion:n.pversion,agent_id:n.agent_id,action:n.action}),headers:{"Content-Type":"application/json"}},u||{})));case 1:case"end":return t.stop()}},e)})),P.apply(this,arguments)}function B(e){return M.apply(this,arguments)}function M(){return M=l()(a()().mark(function e(n){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,d.request)("/api/v1/plugin/list",o()({method:"GET"},n||{})));case 1:case"end":return _.stop()}},e)})),M.apply(this,arguments)}function s(e){return(0,d.request)("/api/v1/plugin/delete",o()({method:"GET"},e||{}))}function y(e,n){return D.apply(this,arguments)}function D(){return D=l()(a()().mark(function e(n,u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)(n,o()({},u||{})));case 1:case"end":return t.stop()}},e)})),D.apply(this,arguments)}function f(e,n){return i.apply(this,arguments)}function i(){return i=l()(a()().mark(function e(n,u){return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.request)("/api/v1/asset/get",o()({method:"GET",params:n},u||{})));case 1:case"end":return t.stop()}},e)})),i.apply(this,arguments)}}}]);
