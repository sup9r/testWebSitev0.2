(this.webpackJsonptest_nft_minting_dapp=this.webpackJsonptest_nft_minting_dapp||[]).push([[0],{246:function(t,n){},255:function(t,n){},273:function(t,n){},275:function(t,n){},294:function(t,n){},295:function(t,n){},358:function(t,n){},360:function(t,n){},393:function(t,n){},395:function(t,n){},396:function(t,n){},401:function(t,n){},403:function(t,n){},409:function(t,n){},411:function(t,n){},424:function(t,n){},436:function(t,n){},439:function(t,n){},444:function(t,n){},452:function(t,n){},461:function(t,n){},463:function(t,n){},533:function(t,n,e){},534:function(t,n,e){"use strict";e.r(n);var c,r,a,o,i,s,l,d,u,x,p,b,j,h,f,O,g=e(1),y=e(85),m=e.n(y),v=e(16),C=e.n(v),w=e(43),A=e(69),S=e(14),E=e(58),T=e(68),N=e.n(T),_=e(220),k=e.n(_),M=e(70),D=e(221),I=e(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:n.payload.account});default:return t}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},P=Object(M.b)({blockchain:R,data:U}),W=[D.a],F=Object(M.c)(M.a.apply(void 0,W)),Y=Object(M.d)(P,F),z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},B=function(){return function(){var t=Object(w.a)(C.a.mark((function t(n){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(z("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},H="testWebSitev0.2",G=function(t){return{type:"CONNECTION_FAILED",payload:t}},Q=function(t){return function(){var n=Object(w.a)(C.a.mark((function n(e){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(B());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},X=e(15),q=X.a.div(c||(c=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),J=X.a.div(r||(r=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),V=X.a.div(a||(a=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z=X.a.div(o||(o=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$=X.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),tt=X.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),nt=X.a.p(l||(l=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),et=(X.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),ct=(X.a.div(x||(x=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3)),rt="testWebSitev0.2",at=X.a.button(p||(p=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ot=X.a.button(b||(b=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),it=X.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),st=X.a.img(h||(h=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),lt=X.a.img(f||(f=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),dt=X.a.a(O||(O=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var ut=function(){var t,n,e=Object(E.b)(),c=Object(E.c)((function(t){return t.blockchain})),r=Object(E.c)((function(t){return t.data})),a=Object(g.useState)(!1),o=Object(A.a)(a,2),i=o[0],s=o[1],l=Object(g.useState)("Click buy to mint your NFT."),d=Object(A.a)(l,2),u=d[0],x=d[1],p=Object(g.useState)(1),b=Object(A.a)(p,2),j=b[0],h=b[1],f=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(A.a)(f,2),y=O[0],m=O[1],v=function(){""!==c.account&&null!==c.smartContract&&e(B(c.account))},S=function(){var t=Object(w.a)(C.a.mark((function t(){var n,e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(rt+"/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,m(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.useEffect)((function(){S()}),[]),Object(g.useEffect)((function(){v()}),[c.account]),Object(ct.jsx)(q,{children:Object(ct.jsxs)(tt,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?rt+"/config/images/bg.png":null,children:[Object(ct.jsx)(st,{alt:"logo",src:rt+"/config/images/logo.png"}),Object(ct.jsx)(V,{}),Object(ct.jsxs)(it,{flex:1,style:{padding:24},test:!0,children:[Object(ct.jsx)(tt,{flex:1,jc:"center",ai:"center",children:Object(ct.jsx)(lt,{alt:"example",src:rt+"/config/images/example.gif"})}),Object(ct.jsx)($,{}),Object(ct.jsxs)(tt,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ct.jsxs)(nt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(ct.jsx)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ct.jsx)(dt,{target:"_blank",href:y.SCAN_LINK,children:(t=y.CONTRACT_ADDRESS,n=15,t.length>n?"".concat(t.substring(0,n),"..."):t)})}),Object(ct.jsx)(V,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(ct.jsxs)(ct.Fragment,{children:[Object(ct.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ct.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(ct.jsx)(V,{}),Object(ct.jsx)(dt,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(ct.jsxs)(ct.Fragment,{children:[Object(ct.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(ct.jsx)(J,{}),Object(ct.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(ct.jsx)(V,{}),""===c.account||null===c.smartContract?Object(ct.jsxs)(tt,{ai:"center",jc:"center",children:[Object(ct.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(ct.jsx)(V,{}),Object(ct.jsx)(at,{onClick:function(t){t.preventDefault(),e(function(){var t=Object(w.a)(C.a.mark((function t(n){var e,c,r,a,o,i,s,l,d;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch(H+"/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch(H+"/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return N.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(d=new N.a(c,a.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(t){n(Q(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(G("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(G("Something went wrong."));case 31:t.next=34;break;case 33:n(G("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(ct.jsxs)(ct.Fragment,{children:[Object(ct.jsx)(V,{}),Object(ct.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(ct.jsxs)(ct.Fragment,{children:[Object(ct.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(ct.jsx)(Z,{}),Object(ct.jsxs)(tt,{ai:"center",jc:"center",fd:"row",children:[Object(ct.jsx)(ot,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=j-1;t<1&&(t=1),h(t)}()},children:"-"}),Object(ct.jsx)(Z,{}),Object(ct.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(ct.jsx)(Z,{}),Object(ct.jsx)(ot,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=j+1;t>10&&(t=10),h(t)}()},children:"+"})]}),Object(ct.jsx)(V,{}),Object(ct.jsx)(tt,{ai:"center",jc:"center",fd:"row",children:Object(ct.jsx)(at,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=y.WEI_COST,n=y.GAS_LIMIT,r=String(t*j),a=String(n*j);console.log("Cost: ",r),console.log("Gas limit: ",a),x("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(t){console.log(t),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),x("WOW, the ".concat(y.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),e(B(c.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(ct.jsx)(Z,{})]}),Object(ct.jsx)($,{}),Object(ct.jsx)(tt,{flex:1,jc:"center",ai:"center",children:Object(ct.jsx)(lt,{alt:"example",src:rt+"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(ct.jsx)(Z,{}),Object(ct.jsxs)(tt,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ct.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(ct.jsx)(V,{}),Object(ct.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})};e(533);m.a.render(Object(ct.jsx)(E.a,{store:Y,children:Object(ct.jsx)(ut,{})}),document.getElementById("root"))}},[[534,1,2]]]);
//# sourceMappingURL=main.00c7063c.chunk.js.map