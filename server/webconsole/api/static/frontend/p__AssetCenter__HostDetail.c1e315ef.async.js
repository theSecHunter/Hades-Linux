"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[414],{55767:function(Ee,W,n){n.r(W),n.d(W,{default:function(){return Le}});var q=n(15009),l=n.n(q),ee=n(99289),x=n.n(ee),te=n(19632),M=n.n(te),$=n(5574),H=n.n($),A=n(93769),ae=n(12121),y=n(38345),h=n(14373),P=n(89129),ne=n(47375),K=n(97269),V=n(64317),L=n(97462),C=n(67294),re=n(96974),T=n(26713),U=n(20550),k=n(84908),v=n(69677),m=n(30381),g=n.n(m),b=n(48555),c=n(63430),O=n(12461),Ce=n(80737),Te=n(71577),ve=n(10010),he=n(24969),E=n(49748),J=n(80854),Ze={tag:"tag___kCu44"},Ye=n(55171),Se=n.n(Ye),e=n(85893),Me=A.Z.Divider,$e=[{title:"\u63D2\u4EF6\u540D\u79F0",dataIndex:"name",width:"6%"},{title:"\u7248\u672C",search:!1,dataIndex:"pversion",copyable:!0},{title:"\u72B6\u6001",search:!1,dataIndex:"status",valueEnum:{true:{text:"\u5728\u7EBF",status:"Success"},false:{text:"\u79BB\u7EBF",status:"Error"}}},{title:"\u5BA2\u6237\u7AEF\u6027\u80FD",search:!1,render:function(o,d,D,G){return(0,e.jsxs)(T.Z,{size:[20,24],children:[(0,e.jsxs)(T.Z,{size:[0,4],wrap:!0,children:[(0,e.jsx)(U.Z,{color:"default",children:"CPU"}),(d.cpu*100).toFixed(2)+"%"]}),(0,e.jsx)("p",{}),(0,e.jsxs)(T.Z,{size:[0,4],wrap:!0,children:[(0,e.jsx)(U.Z,{color:"default",children:"MEM"}),(d.rss/(1024*1024)).toFixed(1)+"MB"]})]})},width:"15%"},{title:function(){return(0,e.jsx)(k.Z,{title:"kbps",children:(0,e.jsxs)(T.Z,{children:["\u4E0A\u4F20\u901F\u7387",(0,e.jsx)(ve.Z,{style:{color:"#1890ff"}})]})})},search:!1,width:"10%",dataIndex:"tx_speed",renderText:function(o){return(o/1024).toFixed(2)}},{title:function(){return(0,e.jsxs)(T.Z,{children:["\u4E0A\u4F20 tps",(0,e.jsx)(ve.Z,{style:{color:"#1890ff"}})]})},search:!1,width:"10%",dataIndex:"tx_tps",renderText:function(o){return o.toFixed(2)}},{title:"\u4E0A\u7EBF\u65F6\u95F4",search:!1,dataIndex:"start_at",renderText:function(o){var d=new Date(o*1e3);return g()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u6700\u8FD1\u5FC3\u8DF3\u65F6\u95F4",search:!1,dataIndex:"last_heartbeat_time",renderText:function(o){var d=new Date(o*1e3);return g()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u64CD\u4F5C",search:!1,valueType:"option",key:"option",dataIndex:"",render:function(o,d,D,G){return[(0,e.jsx)("a",{href:"javascript:void(0);",onClick:function(){var Z;return(0,E.nc)({name:(Z=d.name)!==null&&Z!==void 0?Z:"",pversion:d.pversion,agent_id:window.location.pathname.replace("/assetcenter/host/",""),action:"upgrade"}).then(function(Y){return Y.code!=0?(O.ZP.error("\u5347\u7EA7\u5931\u8D25:"+Y.data),!1):(O.ZP.success("\u5347\u7EA7\u6210\u529F"),Y)})},rel:"noopener noreferrer",children:"\u5347\u7EA7"},"remove"),(0,e.jsx)("a",{href:"javascript:void(0);",onClick:function(){var Z;return(0,E.nc)({name:(Z=d.name)!==null&&Z!==void 0?Z:"",pversion:d.pversion,agent_id:window.location.pathname.replace("/assetcenter/host/",""),action:"delete"}).then(function(Y){return Y.code!=0?(O.ZP.error("\u5220\u9664\u5931\u8D25:"+Y.data),!1):(O.ZP.success("\u5220\u9664\u6210\u529F"),Y)})},rel:"noopener noreferrer",children:"\u5378\u8F7D"},"remove")]}}],Ae=[{title:"PID",dataIndex:"pid",width:"5%",defaultSortOrder:"descend"},{title:"PPID",search:!1,dataIndex:"ppid",width:"5%"},{title:"\u8FDB\u7A0B\u540D",dataIndex:"name",width:"10%",copyable:!0,ellipsis:!0},{title:"\u6267\u884C\u6587\u4EF6",dataIndex:"exe",ellipsis:!0,width:"30%",copyable:!0},{title:"UID",search:!1,dataIndex:"uid",width:"5%"},{title:"\u7528\u6237\u540D",search:!1,dataIndex:"username",width:"10%",ellipsis:!0,order:1},{title:"\u542F\u52A8\u65F6\u95F4",search:!1,width:"17.5%",dataIndex:"start_time",renderText:function(o){var d=new Date(o*1e3);return g()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}},{title:"\u6570\u636E\u66F4\u65B0\u65F6\u95F4",search:!1,width:"17.5%",dataIndex:"update_time",renderText:function(o){var d=new Date(o*1e3);return g()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}],ze=[{title:"UID",dataIndex:"uid",width:"5%",defaultSortOrder:"descend"},{title:"GID",search:!1,dataIndex:"gid",width:"5%"},{title:"\u7528\u6237\u540D",dataIndex:"username",width:"10%",ellipsis:!0,copyable:!0},{title:"\u7528\u6237\u7EC4\u540D",dataIndex:"group_name",width:"10%",ellipsis:!0,copyable:!0},{title:"\u5386\u53F2\u767B\u5F55 IP",dataIndex:"last_login_ip",ellipsis:!0,width:"10%",search:!1},{title:"\u5BC6\u7801\u66F4\u65B0\u65F6\u95F4",search:!1,dataIndex:"password_update_time",ellipsis:!0,width:"14%"},{title:"Home \u76EE\u5F55",search:!1,dataIndex:"home_dir",ellipsis:!0,width:"13%"},{title:"shell",search:!1,dataIndex:"shell",ellipsis:!0,width:"13%"},{title:"\u7528\u6237\u4FE1\u606F",search:!1,ellipsis:!0,dataIndex:"info",width:"20%"}],He=[{title:"PID",dataIndex:"pid",width:"5%"},{title:"\u534F\u8BAE\u7C7B\u578B",dataIndex:"type",width:"5%",valueEnum:{1:{text:"ICMP"},6:{text:"TCP"},17:{text:"UDP"}},search:!1,filters:[{text:"ICMP",value:1},{text:"TCP",value:6},{text:"UDP",value:17}],onFilter:!0},{title:"\u8FDB\u7A0B\u540D\u79F0",search:!1,copyable:!0,dataIndex:"comm",width:"10%"},{title:"\u8FDC\u7A0B IP",dataIndex:"dip",width:"8%"},{title:"\u8FDC\u7A0B Port",dataIndex:"dport",ellipsis:!0,width:"4%"},{title:"\u672C\u5730 IP",search:!1,dataIndex:"sip",width:"8%"},{title:"\u672C\u5730 Port",search:!1,dataIndex:"sport",width:"4%"},{title:"\u6267\u884C\u547D\u4EE4",search:!1,dataIndex:"cmdline",width:"20%",ellipsis:!0,copyable:!0}],Be=[{title:"\u6587\u4EF6\u8DEF\u5F84",dataIndex:"path",width:"20%",ellipsis:!0,copyable:!0},{title:"\u7528\u6237\u540D",search:!1,dataIndex:"user",width:"10%",ellipsis:!0},{title:"minute",search:!1,dataIndex:"minute",width:"5%",ellipsis:!0},{title:"hour",search:!1,dataIndex:"hour",width:"5%",ellipsis:!0},{title:"dom",search:!1,dataIndex:"day_of_month",width:"5%",ellipsis:!0},{title:"month",search:!1,dataIndex:"month",width:"5%",ellipsis:!0},{title:"dow",search:!1,dataIndex:"day_of_week",width:"5%",ellipsis:!0},{title:"\u547D\u4EE4",dataIndex:"command",width:"45%",ellipsis:!0,copyable:!0}],Re=[{title:"PID",search:!1,dataIndex:"pid",width:"5%",ellipsis:!0},{title:"\u7C7B\u578B",dataIndex:"type",width:"10%",ellipsis:!0,valueEnum:{container:{text:"container"},software:{text:"software"},database:{text:"database"},web:{text:"web"},service:{text:"service"},bigdata:{text:"bigdata"}},search:!1,filters:!0,onFilter:!0},{title:"\u540D\u79F0",dataIndex:"name",width:"13%",copyable:!0,ellipsis:!0},{title:"\u5BB9\u5668\u540D\u79F0",dataIndex:"container_name",width:"8%",ellipsis:!0,copyable:!0},{title:"\u7248\u672C",search:!1,dataIndex:"version",width:"5%",ellipsis:!0},{title:"\u76D1\u542C\u7AEF\u53E3",search:!1,dataIndex:"listen_addrs",width:"15%",ellipsis:!0},{title:"UID",search:!1,dataIndex:"uid",width:"5%",ellipsis:!0},{title:"\u6267\u884C\u547D\u4EE4",search:!1,dataIndex:"cmdline",width:"35%",ellipsis:!0,copyable:!0}],Ue=[{title:"\u540D\u79F0",dataIndex:"name",width:"15%",copyable:!0,ellipsis:!0},{title:"Size",search:!1,dataIndex:"size",width:"10%",ellipsis:!0,sorter:!0},{title:"\u5F15\u7528\u8BA1\u6570",dataIndex:"refcount",width:"5%",ellipsis:!0,search:!1},{title:"Used by",search:!1,dataIndex:"used_by",width:"30%",ellipsis:!0},{title:"State",dataIndex:"state",width:"6%",search:!1,ellipsis:!0,filters:!0,onFilter:!0,valueEnum:{Live:{text:"Live",status:"success"},Loading:{text:"Loading",status:"default"}}},{title:"Addr",dataIndex:"addr",width:"15%",ellipsis:!0,copyable:!0},{title:"\u66F4\u65B0\u65F6\u95F4",search:!1,dataIndex:"update_time",renderText:function(o){var d=new Date(o*1e3);return g()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}],Oe=[{title:"PID",dataIndex:"pid",width:"5%",ellipsis:!0,search:!1},{title:"ID",search:!1,dataIndex:"id",width:"18%",ellipsis:!0,copyable:!0},{title:"\u8FD0\u884C\u65F6",dataIndex:"runtime",width:"5%",ellipsis:!0,search:!1,filters:!0,onFilter:!0,valueEnum:{containerd:{text:"containerd"},docker:{text:"docker"},kubelet:{text:"kubelet"},"kube-apiserver":{text:"kube-apiserver"}}},{title:"\u540D\u79F0",dataIndex:"names",width:"10%",copyable:!0,ellipsis:!0},{title:"\u955C\u50CF\u540D\u79F0",dataIndex:"image_name",width:"10%",copyable:!0,ellipsis:!0},{title:"\u72B6\u6001",dataIndex:"state",ellipsis:!0,width:"5%",valueEnum:{running:{text:"\u8FD0\u884C\u4E2D",status:"Success"},exited:{text:"\u5DF2\u9000\u51FA",status:"Error"}},filters:!0,onFilter:!0,search:!1},{title:"\u72B6\u6001\u8BE6\u60C5",dataIndex:"status",width:"12%",ellipsis:!0,search:!1},{title:"\u5BB9\u5668\u6807\u7B7E",search:!1,dataIndex:"labels",width:"20%",ellipsis:!0,render:function(o,d){return(0,e.jsx)(Se(),{name:"labels",collapsed:!0,displayDataTypes:!1,src:JSON.parse(d.labels)})}},{title:"\u521B\u5EFA\u65F6\u95F4",search:!1,dataIndex:"created",sorter:!0,renderText:function(o){var d=new Date(o*1e3);return g()(d).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}];function se(_){var o,d,D=0;return D+=(o=(d=_.agent_info)===null||d===void 0?void 0:d.cpu)!==null&&o!==void 0?o:0,D}function ie(_){var o,d,D=0;return D+=(o=(d=_.agent_info)===null||d===void 0?void 0:d.rss)!==null&&o!==void 0?o:0,D=D/(1024*1024),D}var Ke=function(){var o,d,D,G,N,Z,Y,ue,le,S=(0,re.UO)(),ke=(0,C.useRef)(),Ge=(0,C.useState)(!1),me=H()(Ge,2),ge=me[0],Ne=me[1],xe={},We=C.useState(xe),Ie=H()(We,2),f=Ie[0],Ve=Ie[1],Je=Ce.Z.useForm(),Qe=H()(Je,1),Xe=Qe[0],qe=(0,J.useRequest)(function(i){return(0,E.pi)({agent_id:S.agent_id})},{pollingInterval:30*1e3}),B=qe.data,R=(o=(0,J.useRequest)(E.UV).data)===null||o===void 0?void 0:o.plugins,et=(0,C.useState)(!1),_e=H()(et,2),de=_e[0],we=_e[1],be=(0,C.useRef)(null),tt=(0,C.useState)(""),ye=H()(tt,2),Q=ye[0],je=ye[1];(0,C.useEffect)(function(){if(de){var i;(i=be.current)===null||i===void 0||i.focus()}},[de]);var at=function(){we(!0)},De=function(){we(!1),je(""),(0,J.request)("/api/v1/tag",{method:"PUT",params:{agent_id:S.agent_id,name:Q}});var r=[],a=new Set;z!==void 0&&(a=new Set(z)),a.has(Q)||r.push.apply(r,M()(z).concat([Q])),oe(r)},nt=function(r){je(r.target.value)},rt=(0,C.useState)([]),Fe=H()(rt,2),z=Fe[0],oe=Fe[1],st={width:60,verticalAlign:"top"},it=function(r){var a=z==null?void 0:z.filter(function(p){return p!==r});(0,J.request)("/api/v1/tag",{method:"DELETE",params:{agent_id:S.agent_id,name:r}}),oe(a)};return C.useEffect(function(){Ve(B!=null?B:xe),oe(B==null?void 0:B.tags)},[B]),(0,e.jsxs)(ae._z,{title:" ",children:[(0,e.jsx)(y.Z,{title:"\u57FA\u7840\u4FE1\u606F",children:(0,e.jsxs)(h.vY,{actionRef:ke,column:4,dataSource:f,children:[(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","hostname"],label:"\u4E3B\u673A\u540D\u79F0"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","intranet_ipv4"],label:"\u5185\u7F51 IPv4"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","pid"],label:"PID"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","boot_at"],label:"\u7CFB\u7EDF\u542F\u52A8\u65F6\u95F4",renderText:function(r){var a=new Date(r*1e3);return g()(a).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","arch"],label:"\u7CFB\u7EDF\u67B6\u6784"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","intranet_ipv6"],label:"\u5185\u7F51 IPv6"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","addr"],label:"\u8FDE\u63A5\u5730\u5740"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","last_heartbeat_time"],label:"\u6700\u8FD1\u5FC3\u8DF3\u65F6\u95F4",renderText:function(r){var a=new Date(r*1e3);return g()(a).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(h.vY.Item,{dataIndex:"agent_info",label:"\u7CFB\u7EDF\u7248\u672C",renderText:function(r){return r!==void 0?r.platform+" "+r.platform_family+" "+r.platform_version:"-"}}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","extranet_ipv4"],label:"\u516C\u7F51 IPv4"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","nfd"],label:"FD"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","start_at"],label:"Agent \u542F\u52A8\u65F6\u95F4",renderText:function(r){var a=new Date(r*1e3);return g()(a).utc(!0).format("YYYY-MM-DD HH:mm:ss")}}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","kernel_version"],label:"\u5185\u6838\u7248\u672C"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","extranet_ipv6"],label:"\u516C\u7F51 IPv6"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","cpu_num"],label:"CPU"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","version"],label:"Agent \u7248\u672C"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","cpu_name"],label:"CPU \u540D\u79F0"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","tags"],label:"\u6807\u7B7E",render:function(){return(0,e.jsxs)(T.Z,{size:[0,8],children:[(0,e.jsx)(T.Z,{size:[0,8],children:z==null?void 0:z.map(function(r,a){return(0,e.jsx)(U.Z,{closable:!0,onClose:function(){return it(r)},color:"green",children:r},r)})}),de?(0,e.jsx)(v.Z,{ref:be,type:"text",size:"small",style:st,value:Q,onChange:nt,onBlur:De,onPressEnter:De}):(0,e.jsx)(U.Z,{onClick:at,className:Ze.tag,children:(0,e.jsx)(he.Z,{style:{fontSize:"10px",width:"10px",height:"10px"}})})]})}}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","ngr"],label:"Goroutine"}),(0,e.jsx)(h.vY.Item,{dataIndex:["agent_info","online"],label:"\u5BA2\u6237\u7AEF\u72B6\u6001",valueEnum:{false:{text:"\u79BB\u7EBF",status:"Error"},true:{text:"\u5728\u7EBF",status:"Success"}}})]})}),(0,e.jsx)("p",{}),(0,e.jsx)(y.Z,{title:"\u6027\u80FD\u8D1F\u8F7D",children:(0,e.jsx)(b.Z,{onResize:function(r){Ne(r.width<596)},children:(0,e.jsxs)(A.Z.Group,{direction:ge?"column":"row",children:[(0,e.jsx)(A.Z,{statistic:{title:"Agent CPU",value:se(f)*100,suffix:"%",precision:2},chart:(0,e.jsx)(c.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:.1-se(f)},{name:"CPU",value:se(f)}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(A.Z,{statistic:{title:"Agent \u5185\u5B58",value:ie(f),suffix:"Mb",precision:2},chart:(0,e.jsx)(c.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:250-ie(f)},{name:"\u5185\u5B58",value:ie(f)}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(Me,{type:ge?"horizontal":"vertical"}),(0,e.jsx)(A.Z,{statistic:{title:"\u7CFB\u7EDF CPU",value:f==null||(d=f.agent_info)===null||d===void 0?void 0:d.sys_cpu,suffix:"%",precision:2},chart:(0,e.jsx)(c.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:100-((D=f==null||(G=f.agent_info)===null||G===void 0?void 0:G.sys_cpu)!==null&&D!==void 0?D:0)},{name:"CPU",value:f==null||(N=f.agent_info)===null||N===void 0?void 0:N.sys_cpu}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"}),(0,e.jsx)(A.Z,{statistic:{title:"\u7CFB\u7EDF\u5185\u5B58",value:f==null||(Z=f.agent_info)===null||Z===void 0?void 0:Z.sys_mem,suffix:"%",precision:2},chart:(0,e.jsx)(c.Z,{height:70,width:70,innerRadius:.7,renderer:"svg",data:[{name:"",value:100-((Y=f==null||(ue=f.agent_info)===null||ue===void 0?void 0:ue.sys_mem)!==null&&Y!==void 0?Y:0)},{name:"\u5185\u5B58",value:f==null||(le=f.agent_info)===null||le===void 0?void 0:le.sys_mem}],angleField:"value",colorField:"name",statistic:void 0,legend:!1,tooltip:!1,label:!1,color:["#f5f5f5","#6394f9"]}),chartPlacement:"left"})]})},"resize-observer")}),(0,e.jsx)("p",{}),(0,e.jsxs)(y.Z,{tabs:{type:"card"},title:"\u4E3B\u673A\u8BE6\u60C5",children:[(0,e.jsx)(y.Z.TabPane,{tab:"\u63D2\u4EF6\u5217\u8868",children:(0,e.jsx)(P.Z,{columns:$e,options:!1,rowKey:function(){return Math.random()},dataSource:f.plugins_info,search:{defaultCollapsed:!1,labelWidth:"auto",optionRender:function(r,a,p){return[(0,e.jsx)(ne.Y,{title:"\u4E0B\u53D1\u63D2\u4EF6",trigger:(0,e.jsxs)(Te.Z,{type:"primary",children:[(0,e.jsx)(he.Z,{}),"\u4E0B\u53D1\u63D2\u4EF6"]}),form:Xe,autoFocusFirstInput:!0,modalProps:{destroyOnClose:!0,onCancel:function(){return console.log("run")}},submitTimeout:2e3,onFinish:function(u){var s,j;return(0,E.nc)({name:(s=u.name)!==null&&s!==void 0?s:"",pversion:u.pversion,agent_id:(j=S.agent_id)!==null&&j!==void 0?j:"",action:"insert"}).then(function(t){return t.code!=0?(O.ZP.error("\u4E0B\u53D1\u5931\u8D25:"+t.data),!1):(O.ZP.success("\u4E0B\u53D1\u6210\u529F"),t)})},children:(0,e.jsxs)(K.A.Group,{children:[(0,e.jsx)(V.Z,{width:"md",name:"name",label:"\u63D2\u4EF6\u540D\u79F0",labelAlign:"left",request:x()(l()().mark(function I(){var u,s,j,t,X;return l()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(u=new Array,s=new Map,R===void 0){w.next=16;break}w.t0=l()().keys(R);case 4:if((w.t1=w.t0()).done){w.next=16;break}if(j=w.t1.value,t=R[j].name,s.get(t)!==!0){w.next=11;break}return w.abrupt("continue",4);case 11:s.set(t,!0);case 12:X={label:t,value:t},u.push(X),w.next=4;break;case 16:return w.abrupt("return",u);case 17:case"end":return w.stop()}},I)})),placeholder:"\u8BF7\u9009\u62E9\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u63D2\u4EF6\u540D\u79F0"}]}),(0,e.jsx)(L.Z,{name:["name"],ignoreFormListField:!0,children:function(u){var s=u.name;return(0,e.jsx)(V.Z,{width:"md",name:"pversion",params:{name:s},request:function(){var j=x()(l()().mark(function t(X){var ce,w,fe,pe,Pe;return l()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(ce=X.name,w=new Array,R===void 0){F.next=13;break}F.t0=l()().keys(R);case 4:if((F.t1=F.t0()).done){F.next=13;break}if(fe=F.t1.value,R[fe].name==ce){F.next=8;break}return F.abrupt("continue",4);case 8:pe=R[fe].pversion,Pe={label:pe,value:pe},w.push(Pe),F.next=4;break;case 13:return F.abrupt("return",w);case 14:case"end":return F.stop()}},t)}));return function(t){return j.apply(this,arguments)}}(),label:"\u63D2\u4EF6\u7248\u672C",placeholder:"\u8BF7\u8F93\u5165\u7248\u672C",rules:[{required:!0}]})}})]})})].concat(M()(p.reverse()))}}})},"tab1"),(0,e.jsx)(y.Z.TabPane,{tab:"\u8FDB\u7A0B\u5217\u8868",children:(0,e.jsx)(P.Z,{columns:Ae,options:!1,rowKey:function(){return Math.random()},pagination:{pageSize:10,pageSizeOptions:["10","20","50"]},request:function(){var i=x()(l()().mark(function r(a,p,I){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,E.Nh)({type:"processes",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:I,keyword:{pid:a.pid,name:a.name,exe:a.exe}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab2"),(0,e.jsx)(y.Z.TabPane,{tab:"\u7F51\u7EDC\u5217\u8868",children:(0,e.jsx)(P.Z,{columns:He,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=x()(l()().mark(function r(a,p,I){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,E.Nh)({type:"sockets",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:I,keyword:{pid:a.pid,dip:a.dip,dport:a.dport}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab3"),(0,e.jsx)(y.Z.TabPane,{tab:"\u7528\u6237\u5217\u8868",children:(0,e.jsx)(P.Z,{columns:ze,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=x()(l()().mark(function r(a,p,I){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,E.Nh)({type:"users",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:I,keyword:{username:a.username,group_name:a.group_name,uid:a.uid}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab4"),(0,e.jsx)(y.Z.TabPane,{tab:"\u5B9A\u65F6\u4EFB\u52A1",children:(0,e.jsx)(P.Z,{columns:Be,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=x()(l()().mark(function r(a,p,I){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,E.Nh)({type:"crons",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:I,keyword:{command:a.command,path:a.path}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab5"),(0,e.jsx)(y.Z.TabPane,{tab:"\u5E94\u7528\u8D44\u4EA7",children:(0,e.jsx)(P.Z,{columns:Re,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=x()(l()().mark(function r(a,p,I){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,E.Nh)({type:"apps",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:I,keyword:{type:a.type,name:a.name,container_name:a.container_name}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab6"),(0,e.jsx)(y.Z.TabPane,{tab:"\u5185\u6838\u6A21\u5757",children:(0,e.jsx)(P.Z,{columns:Ue,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=x()(l()().mark(function r(a,p,I){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,E.Nh)({type:"kmods",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:I,keyword:{addr:a.addr,name:a.name}});case 2:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 4:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab7"),(0,e.jsx)(y.Z.TabPane,{tab:"\u5BB9\u5668\u8D44\u4EA7",children:(0,e.jsx)(P.Z,{columns:Oe,options:!1,pagination:{pageSize:10},rowKey:function(){return Math.random()},request:function(){var i=x()(l()().mark(function r(a,p,I){var u,s;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(p,I),t.next=3,(0,E.Nh)({type:"containers",agent_id:(u=S.agent_id)!==null&&u!==void 0?u:"",page:a.current,size:a.pageSize,sort:p,filter:I,keyword:{names:a.names,image_name:a.image_name}});case 3:return s=t.sent,t.abrupt("return",{data:s.data.assets,success:s.code==0,total:s.data.total});case 5:case"end":return t.stop()}},r)}));return function(r,a,p){return i.apply(this,arguments)}}()})},"tab8")]})]})},Le=Ke},49748:function(Ee,W,n){n.d(W,{Ek:function(){return H},LH:function(){return re},Nh:function(){return U},UV:function(){return V},Zs:function(){return ae},nc:function(){return ne},pi:function(){return h},sk:function(){return C}});var q=n(15009),l=n.n(q),ee=n(97857),x=n.n(ee),te=n(99289),M=n.n(te),$=n(80854);function H(v){return A.apply(this,arguments)}function A(){return A=M()(l()().mark(function v(m){return l()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",(0,$.request)("/api/v1/grpc/conn/count",x()({method:"GET"},m||{})));case 1:case"end":return b.stop()}},v)})),A.apply(this,arguments)}function ae(v,m){return y.apply(this,arguments)}function y(){return y=M()(l()().mark(function v(m,g){return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,$.request)("/api/v1/grpc/conn/basic",x()({method:"GET",params:x()({},m)},g||{})));case 1:case"end":return c.stop()}},v)})),y.apply(this,arguments)}function h(v,m){return P.apply(this,arguments)}function P(){return P=M()(l()().mark(function v(m,g){return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,$.request)("/api/v1/grpc/conn/stat",x()({method:"GET",params:x()({},m)},g||{})));case 1:case"end":return c.stop()}},v)})),P.apply(this,arguments)}function ne(v,m){return K.apply(this,arguments)}function K(){return K=M()(l()().mark(function v(m,g){return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,$.request)("/api/v1/plugin/send",x()({method:"POST",data:JSON.stringify({name:m.name,pversion:m.pversion,agent_id:m.agent_id,action:m.action}),headers:{"Content-Type":"application/json"}},g||{})));case 1:case"end":return c.stop()}},v)})),K.apply(this,arguments)}function V(v){return L.apply(this,arguments)}function L(){return L=M()(l()().mark(function v(m){return l()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",(0,$.request)("/api/v1/plugin/list",x()({method:"GET"},m||{})));case 1:case"end":return b.stop()}},v)})),L.apply(this,arguments)}function C(v){return(0,$.request)("/api/v1/plugin/delete",x()({method:"GET"},v||{}))}function re(v,m){return T.apply(this,arguments)}function T(){return T=M()(l()().mark(function v(m,g){return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,$.request)(m,x()({},g||{})));case 1:case"end":return c.stop()}},v)})),T.apply(this,arguments)}function U(v,m){return k.apply(this,arguments)}function k(){return k=M()(l()().mark(function v(m,g){return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,$.request)("/api/v1/asset/get",x()({method:"GET",params:m},g||{})));case 1:case"end":return c.stop()}},v)})),k.apply(this,arguments)}}}]);
