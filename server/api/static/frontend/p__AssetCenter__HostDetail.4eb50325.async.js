"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[414],{24342:function(pe,z,n){n.r(z);var V=n(15009),s=n.n(V),J=n(99289),v=n.n(J),Q=n(19632),B=n.n(Q),A=n(5574),Z=n.n(A),R=n(93769),X=n(12121),E=n(38345),m=n(99765),j=n(56346),q=n(47375),L=n(97269),G=n(64317),H=n(97462),U=n(67294),ee=n(96974),W=n(30381),O=n.n(W),$=n(48555),c=n(18145),l=n(12461),w=n(80737),x=n(71577),f=n(24969),T=n(49748),le=n(80854),e=n(85893),me=R.Z.Divider,ve=[{title:"\u63D2\u4EF6\u540D\u79F0",dataIndex:"name"},{title:"\u7248\u672C",search:!1,dataIndex:"pversion"},{title:"\u72B6\u6001",search:!1,dataIndex:"status",valueEnum:{true:{text:"\u5728\u7EBF",status:"Success"},false:{text:"\u79BB\u7EBF",status:"Error"}}},{title:"\u4E0A\u4F20\u901F\u7387(Kb/s)",search:!1,width:"10%",dataIndex:"tx_speed",renderText:function(d){return(d/1024).toFixed(2)}},{title:"\u4E0A\u4F20 TPS",search:!1,width:"10%",dataIndex:"tx_tps",renderText:function(d){return d.toFixed(2)}},{title:"\u4E0A\u7EBF\u65F6\u95F4",search:!1,dataIndex:"start_at",renderText:function(d){var o=new Date(d*1e3);return O()(o).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u6700\u8FD1\u5FC3\u8DF3\u65F6\u95F4",search:!1,dataIndex:"last_heartbeat_time",renderText:function(d){var o=new Date(d*1e3);return O()(o).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u64CD\u4F5C",search:!1,valueType:"option",key:"option",dataIndex:"",render:function(d,o,P,K){return[(0,e.jsx)("a",{href:"javascript:void(0);",onClick:function(){var g;return(0,T.nc)({name:(g=o.name)!==null&&g!==void 0?g:"",pversion:o.pversion,agent_id:window.location.pathname.replace("/assetcenter/host/",""),action:"upgrade"}).then(function(C){return C.code!=0?(l.ZP.error("\u5347\u7EA7\u5931\u8D25:"+C.data),!1):(l.ZP.success("\u5347\u7EA7\u6210\u529F"),C)})},rel:"noopener noreferrer",children:"\u5378\u8F7D"},"remove"),(0,e.jsx)("a",{href:"javascript:void(0);",onClick:function(){var g;return(0,T.nc)({name:(g=o.name)!==null&&g!==void 0?g:"",pversion:o.pversion,agent_id:window.location.pathname.replace("/assetcenter/host/",""),action:"delete"}).then(function(C){return C.code!=0?(l.ZP.error("\u5220\u9664\u5931\u8D25:"+C.data),!1):(l.ZP.success("\u5220\u9664\u6210\u529F"),C)})},rel:"noopener noreferrer",children:"\u5378\u8F7D"},"remove")]}}],he=[{title:"PID",dataIndex:"pid",width:"5%"},{title:"PPID",search:!1,dataIndex:"ppid",width:"5%"},{title:"\u8FDB\u7A0B\u540D",dataIndex:"name",width:"10%"},{title:"\u6267\u884C\u6587\u4EF6",dataIndex:"exe",ellipsis:!0,width:"30%"},{title:"UID",search:!1,dataIndex:"uid",width:"5%"},{title:"\u7528\u6237\u540D",search:!1,dataIndex:"username",width:"10%",ellipsis:!0},{title:"\u542F\u52A8\u65F6\u95F4",search:!1,width:"17.5%",dataIndex:"starttime",renderText:function(d){var o=new Date(d*1e3);return O()(o).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u6570\u636E\u66F4\u65B0\u65F6\u95F4",search:!1,width:"17.5%",dataIndex:"update_time",renderText:function(d){var o=new Date(d*1e3);return O()(o).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}],ge=[{title:"UID",dataIndex:"uid",width:"5%"},{title:"GID",search:!1,dataIndex:"gid",width:"5%"},{title:"\u7528\u6237\u540D",dataIndex:"username",width:"10%"},{title:"\u5386\u53F2\u767B\u5F55 IP",dataIndex:"last_login_ip",ellipsis:!0,width:"20%"},{title:"shell",search:!1,dataIndex:"shell",width:"20%"}],xe=[{title:"PID",dataIndex:"pid",width:"5%"},{title:"\u547D\u4EE4",search:!1,dataIndex:"comm",width:"10%"},{title:"dip",dataIndex:"dip",width:"5%"},{title:"dport",dataIndex:"dport",ellipsis:!0,width:"5%"},{title:"sip",search:!1,dataIndex:"sip",width:"5%"},{title:"sport",search:!1,dataIndex:"sport",width:"5%"},{title:"\u547D\u4EE4",search:!1,dataIndex:"cmdline",width:"20%",ellipsis:!0}],Ie=[{title:"\u6587\u4EF6\u8DEF\u5F84",dataIndex:"path",width:"20%",ellipsis:!0},{title:"\u7528\u6237\u540D",search:!1,dataIndex:"user",width:"10%",ellipsis:!0},{title:"minute",search:!1,dataIndex:"minute",width:"5%",ellipsis:!0},{title:"hour",search:!1,dataIndex:"hour",width:"5%",ellipsis:!0},{title:"dom",search:!1,dataIndex:"day_of_month",width:"5%",ellipsis:!0},{title:"month",search:!1,dataIndex:"month",width:"5%",ellipsis:!0},{title:"dow",search:!1,dataIndex:"day_of_week",width:"5%",ellipsis:!0},{title:"\u547D\u4EE4",dataIndex:"command",width:"45%",ellipsis:!0}],Ee=[{title:"PID",search:!1,dataIndex:"pid",width:"10%",ellipsis:!0},{title:"\u7C7B\u578B",dataIndex:"type",width:"10%",ellipsis:!0},{title:"\u540D\u79F0",dataIndex:"name",width:"10%",ellipsis:!0},{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"container_name",width:"10%",ellipsis:!0},{title:"\u7248\u672C",search:!1,dataIndex:"version",width:"10%",ellipsis:!0},{title:"\u76D1\u542C\u7AEF\u53E3",search:!1,dataIndex:"listen_addrs",width:"15%",ellipsis:!0},{title:"UID",search:!1,dataIndex:"uid",width:"5%",ellipsis:!0},{title:"\u6267\u884C\u547D\u4EE4",search:!1,dataIndex:"cmdline",width:"25%",ellipsis:!0}],De=[{title:"\u540D\u79F0",dataIndex:"name",width:"20%",ellipsis:!0},{title:"size",search:!1,dataIndex:"size",width:"10%",ellipsis:!0},{title:"\u5F15\u7528\u8BA1\u6570",dataIndex:"refcount",width:"5%",ellipsis:!0},{title:"used_by",search:!1,dataIndex:"used_by",width:"20%",ellipsis:!0},{title:"state",dataIndex:"state",width:"10%",ellipsis:!0},{title:"addr",search:!1,dataIndex:"addr",width:"15%",ellipsis:!0},{title:"\u66F4\u65B0\u65F6\u95F4",search:!1,dataIndex:"update_time",renderText:function(d){var o=new Date(d*1e3);return O()(o).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}],be=[{title:"PID",dataIndex:"pid",width:"5%",ellipsis:!0},{title:"ID",search:!1,dataIndex:"id",width:"20%",ellipsis:!0},{title:"runtime",dataIndex:"runtime",width:"5%",ellipsis:!0},{title:"\u540D\u79F0",dataIndex:"names",width:"10%",ellipsis:!0},{title:"\u5BB9\u5668\u540D\u79F0",search:!1,dataIndex:"image_name",width:"10%",ellipsis:!0},{title:"state",dataIndex:"state",width:"5%",ellipsis:!0},{title:"status",dataIndex:"status",width:"10%",ellipsis:!0},{title:"labels",search:!1,dataIndex:"labels",width:"15%",ellipsis:!0},{title:"\u521B\u5EFA\u65F6\u95F4",search:!1,dataIndex:"created",renderText:function(d){var o=new Date(d*1e3);return O()(o).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}];function te(h){var d,o,P=0;if(h.plugins_info!==void 0)for(var K in h.plugins_info){var M,g;P+=(M=(g=h.plugins_info[K])===null||g===void 0?void 0:g.cpu)!==null&&M!==void 0?M:0}return P+=(d=(o=h.agent_info)===null||o===void 0?void 0:o.cpu)!==null&&d!==void 0?d:0,P}function ae(h){var d,o,P=0;if(h.plugins_info!==void 0)for(var K in h.plugins_info){var M,g;P+=(M=(g=h.plugins_info[K])===null||g===void 0?void 0:g.rss)!==null&&M!==void 0?M:0}return P+=(d=(o=h.agent_info)===null||o===void 0?void 0:o.rss)!==null&&d!==void 0?d:0,P=P/(1024*1024),P}var Pe=function(){var d,o,P,K,M,g,C,ne,re,Y=(0,ee.UO)(),we=(0,U.useRef)(),Me=(0,U.useState)(!1),de=Z()(Me,2),oe=de[0],je=de[1],_e={},Te=U.useState(_e),ce=Z()(Te,2),p=ce[0],ye=ce[1],Oe=w.Z.useForm(),Ce=Z()(Oe,1),Fe=Ce[0],Ae=(0,le.useRequest)(function(_){return(0,T.pi)({agent_id:Y.agent_id})},{pollingInterval:30*1e3}),k=Ae.data,S=(d=(0,le.useRequest)(T.UV).data)===null||d===void 0?void 0:d.plugins;return U.useEffect(function(){ye(k!=null?k:_e)},[k]),(0,e.jsxs)(X._z,{title:" ",children:[(0,e.jsx)(E.Z,{title:"\u57FA\u7840\u4FE1\u606F",children:(0,e.jsxs)(m.vY,{actionRef:we,column:4,dataSource:p,children:[(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","hostname"],label:"\u4E3B\u673A\u540D\u79F0"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","intranet_ipv4"],label:"\u5185\u7F51 IPv4"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","pid"],label:"PID"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","boot_at"],label:"\u7CFB\u7EDF\u542F\u52A8\u65F6\u95F4",renderText:function(u){var i=new Date(u*1e3);return O()(i).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","arch"],label:"\u7CFB\u7EDF\u67B6\u6784"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","intranet_ipv6"],label:"\u5185\u7F51 IPv6"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","addr"],label:"\u8FDE\u63A5\u5730\u5740"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","last_heartbeat_time"],label:"\u6700\u8FD1\u5FC3\u8DF3\u65F6\u95F4",renderText:function(u){var i=new Date(u*1e3);return O()(i).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(m.vY.Item,{dataIndex:"agent_info",label:"\u7CFB\u7EDF\u7248\u672C",renderText:function(u){return u!==void 0?u.platform+" "+u.platform_family+" "+u.platform_version:"-"}}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","extranet_ipv4"],label:"\u516C\u7F51 IPv4"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","nfd"],label:"fd"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","start_at"],label:"Agent\u542F\u52A8\u65F6\u95F4",renderText:function(u){var i=new Date(u*1e3);return O()(i).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","kernel_version"],label:"\u5185\u6838\u7248\u672C"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","extranet_ipv6"],label:"\u516C\u7F51 IPv6"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","cpu_num"],label:"cpu"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","version"],label:"Agent\u7248\u672C"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","cpu_name"],label:"CPU\u540D\u79F0"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","tags"],label:"tags"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","ngr"],label:"goroutine"}),(0,e.jsx)(m.vY.Item,{dataIndex:["agent_info","online"],label:"\u5BA2\u6237\u7AEF\u72B6\u6001",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},false:{text:"\u79BB\u7EBF",status:"Error"},true:{text:"\u5728\u7EBF",status:"Success"}}})]})}),(0,e.jsx)("p",{}),(0,e.jsx)(E.Z,{title:"\u6027\u80FD\u8D1F\u8F7D",children:(0,e.jsx)($.Z,{onResize:function(u){je(u.width<596)},children:(0,e.jsxs)(R.Z.Group,{direction:oe?"column":"row",children:[(0,e.jsx)(R.Z,{statistic:{title:"Agent CPU",value:te(p)*100,suffix:"%",precision:2},chart:(0,e.jsx)(c.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:.1-te(p)},{name:"CPU",value:te(p)}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(R.Z,{statistic:{title:"Agent \u5185\u5B58",value:ae(p),suffix:"Mb",precision:2},chart:(0,e.jsx)(c.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:250-ae(p)},{name:"\u5185\u5B58",value:ae(p)}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(me,{type:oe?"horizontal":"vertical"}),(0,e.jsx)(R.Z,{statistic:{title:"\u7CFB\u7EDF CPU",value:p==null||(o=p.agent_info)===null||o===void 0?void 0:o.sys_cpu,suffix:"%",precision:2},chart:(0,e.jsx)(c.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:100-((P=p==null||(K=p.agent_info)===null||K===void 0?void 0:K.sys_cpu)!==null&&P!==void 0?P:0)},{name:"CPU",value:p==null||(M=p.agent_info)===null||M===void 0?void 0:M.sys_cpu}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(R.Z,{statistic:{title:"\u7CFB\u7EDF\u5185\u5B58",value:p==null||(g=p.agent_info)===null||g===void 0?void 0:g.sys_mem,suffix:"%",precision:2},chart:(0,e.jsx)(c.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:100-((C=p==null||(ne=p.agent_info)===null||ne===void 0?void 0:ne.sys_mem)!==null&&C!==void 0?C:0)},{name:"\u5185\u5B58",value:p==null||(re=p.agent_info)===null||re===void 0?void 0:re.sys_mem}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"})]})},"resize-observer")}),(0,e.jsx)("p",{}),(0,e.jsxs)(E.Z,{tabs:{type:"card"},title:"\u4E3B\u673A\u8BE6\u60C5",children:[(0,e.jsx)(E.Z.TabPane,{tab:"\u63D2\u4EF6\u5217\u8868",children:(0,e.jsx)(j.Z,{columns:ve,options:!1,rowKey:function(){return Math.random()},dataSource:p.plugins_info,search:{defaultCollapsed:!1,labelWidth:"auto",optionRender:function(u,i,D){return[(0,e.jsx)(q.Y,{title:"\u4E0B\u53D1\u63D2\u4EF6",trigger:(0,e.jsxs)(x.Z,{type:"primary",children:[(0,e.jsx)(f.Z,{}),"\u4E0B\u53D1\u63D2\u4EF6"]}),form:Fe,autoFocusFirstInput:!0,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},submitTimeout:2e3,onFinish:function(r){var a,b;return(0,T.nc)({name:(a=r.name)!==null&&a!==void 0?a:"",pversion:r.pversion,agent_id:(b=Y.agent_id)!==null&&b!==void 0?b:"",action:"insert"}).then(function(t){return t.code!=0?(l.ZP.error("\u4E0B\u53D1\u5931\u8D25:"+t.data),!1):(l.ZP.success("\u4E0B\u53D1\u6210\u529F"),t)})},children:(0,e.jsxs)(L.A.Group,{children:[(0,e.jsx)(G.Z,{width:"md",name:"name",label:"\u63D2\u4EF6\u540D\u79F0",labelAlign:"left",request:v()(s()().mark(function F(){var r,a,b,t,N;return s()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:r=new Array,a=new Map,I.t0=s()().keys(S);case 3:if((I.t1=I.t0()).done){I.next=15;break}if(b=I.t1.value,t=S[b].name,a.get(t)!==!0){I.next=10;break}return I.abrupt("continue",3);case 10:a.set(t,!0);case 11:N={label:t,value:t},r.push(N),I.next=3;break;case 15:return I.abrupt("return",r);case 16:case"end":return I.stop()}},F)})),placeholder:"\u8BF7\u9009\u62E9\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u63D2\u4EF6\u540D\u79F0"}]}),(0,e.jsx)(H.Z,{name:["name"],ignoreFormListField:!0,children:function(r){var a=r.name;return(0,e.jsx)(G.Z,{width:"md",name:"pversion",params:{name:a},request:function(){var b=v()(s()().mark(function t(N){var se,I,ue,ie,fe;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:se=N.name,I=new Array,y.t0=s()().keys(S);case 3:if((y.t1=y.t0()).done){y.next=12;break}if(ue=y.t1.value,S[ue].name==se){y.next=7;break}return y.abrupt("continue",3);case 7:ie=S[ue].pversion,fe={label:ie,value:ie},I.push(fe),y.next=3;break;case 12:return y.abrupt("return",I);case 13:case"end":return y.stop()}},t)}));return function(t){return b.apply(this,arguments)}}(),label:"\u63D2\u4EF6\u7248\u672C",placeholder:"\u8BF7\u8F93\u5165\u7248\u672C",rules:[{required:!0}]})}})]})})].concat(B()(D.reverse()))}}})},"tab1"),(0,e.jsx)(E.Z.TabPane,{tab:"\u8FDB\u7A0B\u5217\u8868",children:(0,e.jsx)(j.Z,{columns:he,options:!1,rowKey:function(){return Math.random()},request:function(){var _=v()(s()().mark(function u(i,D,F){var r,a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"processes",agent_id:(r=Y.agent_id)!==null&&r!==void 0?r:"",page:i.current,size:i.pageSize,order_key:"pid",order_value:1});case 2:return a=t.sent,t.abrupt("return",{data:a.data.assets,success:a.code==0,total:a.data.total});case 4:case"end":return t.stop()}},u)}));return function(u,i,D){return _.apply(this,arguments)}}()})},"tab2"),(0,e.jsx)(E.Z.TabPane,{tab:"\u7F51\u7EDC\u5217\u8868",children:(0,e.jsx)(j.Z,{columns:xe,options:!1,rowKey:function(){return Math.random()},request:function(){var _=v()(s()().mark(function u(i,D,F){var r,a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"sockets",agent_id:(r=Y.agent_id)!==null&&r!==void 0?r:"",page:i.current,size:i.pageSize,order_key:"pid",order_value:1});case 2:return a=t.sent,t.abrupt("return",{data:a.data.assets,success:a.code==0,total:a.data.total});case 4:case"end":return t.stop()}},u)}));return function(u,i,D){return _.apply(this,arguments)}}()})},"tab3"),(0,e.jsx)(E.Z.TabPane,{tab:"\u7528\u6237\u5217\u8868",children:(0,e.jsx)(j.Z,{columns:ge,options:!1,rowKey:function(){return Math.random()},request:function(){var _=v()(s()().mark(function u(i,D,F){var r,a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"users",agent_id:(r=Y.agent_id)!==null&&r!==void 0?r:"",page:i.current,size:i.pageSize,order_key:"uid",order_value:1});case 2:return a=t.sent,t.abrupt("return",{data:a.data.assets,success:a.code==0,total:a.data.total});case 4:case"end":return t.stop()}},u)}));return function(u,i,D){return _.apply(this,arguments)}}()})},"tab4"),(0,e.jsx)(E.Z.TabPane,{tab:"\u5B9A\u65F6\u4EFB\u52A1",children:(0,e.jsx)(j.Z,{columns:Ie,options:!1,rowKey:function(){return Math.random()},request:function(){var _=v()(s()().mark(function u(i,D,F){var r,a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"crons",agent_id:(r=Y.agent_id)!==null&&r!==void 0?r:"",page:i.current,size:i.pageSize,order_key:"uid",order_value:1});case 2:return a=t.sent,t.abrupt("return",{data:a.data.assets,success:a.code==0,total:a.data.total});case 4:case"end":return t.stop()}},u)}));return function(u,i,D){return _.apply(this,arguments)}}()})},"tab5"),(0,e.jsx)(E.Z.TabPane,{tab:"\u5E94\u7528\u8D44\u4EA7",children:(0,e.jsx)(j.Z,{columns:Ee,options:!1,rowKey:function(){return Math.random()},request:function(){var _=v()(s()().mark(function u(i,D,F){var r,a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"apps",agent_id:(r=Y.agent_id)!==null&&r!==void 0?r:"",page:i.current,size:i.pageSize,order_key:"name",order_value:1});case 2:return a=t.sent,t.abrupt("return",{data:a.data.assets,success:a.code==0,total:a.data.total});case 4:case"end":return t.stop()}},u)}));return function(u,i,D){return _.apply(this,arguments)}}()})},"tab6"),(0,e.jsx)(E.Z.TabPane,{tab:"\u5185\u6838\u6A21\u5757",children:(0,e.jsx)(j.Z,{columns:De,options:!1,rowKey:function(){return Math.random()},request:function(){var _=v()(s()().mark(function u(i,D,F){var r,a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"kmods",agent_id:(r=Y.agent_id)!==null&&r!==void 0?r:"",page:i.current,size:i.pageSize,order_key:"name",order_value:1});case 2:return a=t.sent,t.abrupt("return",{data:a.data.assets,success:a.code==0,total:a.data.total});case 4:case"end":return t.stop()}},u)}));return function(u,i,D){return _.apply(this,arguments)}}()})},"tab7"),(0,e.jsx)(E.Z.TabPane,{tab:"\u5BB9\u5668\u8D44\u4EA7",children:(0,e.jsx)(j.Z,{columns:be,options:!1,rowKey:function(){return Math.random()},request:function(){var _=v()(s()().mark(function u(i,D,F){var r,a;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.Nh)({type:"containers",agent_id:(r=Y.agent_id)!==null&&r!==void 0?r:"",page:i.current,size:i.pageSize,order_key:"name",order_value:1});case 2:return a=t.sent,t.abrupt("return",{data:a.data.assets,success:a.code==0,total:a.data.total});case 4:case"end":return t.stop()}},u)}));return function(u,i,D){return _.apply(this,arguments)}}()})},"tab8")]})]})};z.default=Pe},49748:function(pe,z,n){n.d(z,{Ek:function(){return Z},LH:function(){return ee},Nh:function(){return O},UV:function(){return G},Zs:function(){return X},nc:function(){return q},pi:function(){return m},sk:function(){return U}});var V=n(15009),s=n.n(V),J=n(97857),v=n.n(J),Q=n(99289),B=n.n(Q),A=n(80854);function Z(c){return R.apply(this,arguments)}function R(){return R=B()(s()().mark(function c(l){return s()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",(0,A.request)("/api/v1/grpc/conn/count",v()({method:"GET"},l||{})));case 1:case"end":return x.stop()}},c)})),R.apply(this,arguments)}function X(c,l){return E.apply(this,arguments)}function E(){return E=B()(s()().mark(function c(l,w){return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,A.request)("/api/v1/grpc/conn/basic",v()({method:"GET",params:v()({},l)},w||{})));case 1:case"end":return f.stop()}},c)})),E.apply(this,arguments)}function m(c,l){return j.apply(this,arguments)}function j(){return j=B()(s()().mark(function c(l,w){return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,A.request)("/api/v1/grpc/conn/stat",v()({method:"GET",params:v()({},l)},w||{})));case 1:case"end":return f.stop()}},c)})),j.apply(this,arguments)}function q(c,l){return L.apply(this,arguments)}function L(){return L=B()(s()().mark(function c(l,w){return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,A.request)("/api/v1/plugin/send",v()({method:"POST",data:JSON.stringify({name:l.name,pversion:l.pversion,agent_id:l.agent_id,action:l.action}),headers:{"Content-Type":"application/json"}},w||{})));case 1:case"end":return f.stop()}},c)})),L.apply(this,arguments)}function G(c){return H.apply(this,arguments)}function H(){return H=B()(s()().mark(function c(l){return s()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",(0,A.request)("/api/v1/plugin/list",v()({method:"GET"},l||{})));case 1:case"end":return x.stop()}},c)})),H.apply(this,arguments)}function U(c){return(0,A.request)("/api/v1/plugin/delete",v()({method:"GET"},c||{}))}function ee(c,l){return W.apply(this,arguments)}function W(){return W=B()(s()().mark(function c(l,w){return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,A.request)(l,v()({},w||{})));case 1:case"end":return f.stop()}},c)})),W.apply(this,arguments)}function O(c,l){return $.apply(this,arguments)}function $(){return $=B()(s()().mark(function c(l,w){return s()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,A.request)("/api/v1/asset/get",v()({method:"GET",params:l},w||{})));case 1:case"end":return f.stop()}},c)})),$.apply(this,arguments)}}}]);
