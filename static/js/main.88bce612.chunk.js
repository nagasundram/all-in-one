(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){e.exports=n(299)},138:function(e,t,n){},291:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=n(20),s=n(29),l=Object(s.a)(),u=n(32),m=n(115),p=n(116),g={SHOW:"ALERT_SHOW",CLEAR:"ALERT_CLEAR"},E={LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT"},h={CATEGORIES_REQUEST:"GET_CATEGORIES_REQUEST",CATEGORIES_SUCCESS:"GET_CATEGORIES_SUCCESS",CATEGORIES_FAILURE:"GET_CATEGORIES_FAILURE"},f=JSON.parse(localStorage.getItem("user")),d=f?{loggedIn:!0,user:f}:{};var O=Object(u.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.LOGIN_REQUEST:return{loggingIn:!0,user:t.user};case E.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case E.LOGIN_FAILURE:case E.LOGOUT:return{};default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.CATEGORIES_REQUEST:return{loading:!0};case h.CATEGORIES_SUCCESS:return{items:t.categories};case h.CATEGORIES_FAILURE:return{error:t.error};default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.SHOW:return{type:"alert-success",message:t.message,isOpen:!0};case g.CLEAR:return{isOpen:!1};default:return e}}}),b=Object(p.createLogger)(),S=Object(u.d)(O,Object(u.a)(m.a,b));function C(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.jwt?{Authorization:"Bearer "+e.jwt,"Access-Control-Allow-Origin":"*","Content-Type":"application/json; charset=UTF-8",Accept:"application/json"}:{}}n(138);var v=n(23),j=n(24),y=n(26),I=n(25),R=n(27),T=n(303),U=n(301),L=n(126),A=n.n(L),_={show:function(e){return{type:g.SHOW,message:e}},clear:function(){return{type:g.CLEAR}}};var w=n(117),G={api:{URL:"https://524753d3.ngrok.io"},route:{DOMAIN:"https://nagasundram.github.io/",PREFIX:"all-in-one"}},N=Object(w.a)({},G),k={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({email:e,password:t})};return fetch("".concat(N.api.URL,"/authenticate"),n).then(F).then(function(e){return localStorage.setItem("user",JSON.stringify(e)),e})},logout:x};function x(){localStorage.removeItem("user")}function F(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&x();var a=n.error.user_authentication[0];return Promise.reject(a)}return n})}var B={getCategories:function(){var e={method:"GET",headers:C()};return fetch("".concat(N.api.URL,"/categories"),e).then(J)},createCat:function(){var e={method:"POST",headers:C(),body:JSON.stringify({category:{name:"jerry",image_url:""}})};return fetch("".concat(N.api.URL,"/categories"),e).then(J)}};function J(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&k.logout();var a=n&&n.message||e.statusText;return Promise.reject(a)}return n})}var Q={login:function(e,t){return function(n){var a;n((a={username:e},{type:E.LOGIN_REQUEST,user:a})),k.login(e,t).then(function(e){n(function(e){return{type:E.LOGIN_SUCCESS,user:e}}(e)),l.push("/all-in-one"),n(_.show("Successfully logged In")),setTimeout(function(){return n(_.clear())},3e3)},function(e){n(function(e){return{type:E.LOGIN_FAILURE,error:e}}(e)),n(_.show(e)),setTimeout(function(){return n(_.clear())},3e3)})}},logout:function(){return function(e){return k.logout(),{type:E.LOGOUT}}}};var P={getCategories:function(){return function(e){e({type:h.CATEGORIES_REQUEST}),B.getCategories().then(function(t){return e(function(e){return{type:h.CATEGORIES_SUCCESS,categories:e}}(t))},function(t){return e(function(e){return{type:h.CATEGORIES_FAILURE,error:e}}(t))})}},createCat:function(){return function(e){e({type:h.CATEGORIES_REQUEST}),B.createCat().then(function(t){return e(function(e){return{type:h.CATEGORIES_SUCCESS,categories:e}}(t))},function(t){return e(function(e){return{type:h.CATEGORIES_FAILURE,error:e}}(t))})}}};var z=n(128),D=n(302),H=function(e){var t=e.component,n=Object(z.a)(e,["component"]);return r.a.createElement(U.a,Object.assign({},n,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(D.a,{to:{pathname:"/all-in-one/login",state:{from:e.location}}})}}))},W=(n(52),n(17)),M=n.n(W),X=n(22),q=n(31),K=n.n(q),V=n(30),Y=n.n(V),Z=n(50),$=n.n(Z),ee=n(76),te=n.n(ee),ne=(n(80),function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props,t=e.categories,n=e.classes;return r.a.createElement(r.a.Fragment,null,t.loading&&r.a.createElement($.a,{color:"primary"}),t.error&&r.a.createElement("span",null,"ERROR: ",t.error),t.items&&r.a.createElement(M.a,{container:!0,justify:"center",spacing:8},t.items.map(function(e,t){return r.a.createElement(M.a,{key:e.id,item:!0},r.a.createElement(te.a,Object.assign({in:e.id>0},e.id>0?{timeout:1e3}:{}),r.a.createElement(a.Fragment,null,r.a.createElement(K.a,{component:"h5",variant:"inherit",align:"center"},e.name),r.a.createElement(Y.a,{className:n.paper,align:"center",elevation:10},r.a.createElement("img",{src:e.image_url,className:n.logo})))))})))}}]),t}(r.a.Component));var ae=Object(c.b)(function(e){return{categories:e.categories}})(ne),re=Object(X.withStyles)(function(e){return{paper:{paddingBottom:50,marginTop:5,marginBottom:15,height:140,width:100},logo:{width:50,marginTop:40}}})(ae),oe=n(42),ie=n.n(oe),ce=n(118),se=n.n(ce),le=function(e){function t(){return Object(v.a)(this,t),Object(y.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(j.a)(t,[{key:"createCat",value:function(e,t){this.props.dispatch(P.createCat())}},{key:"render",value:function(){var e=this,t=this.props,n=(t.categories,t.classes);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{name:"form"},r.a.createElement(M.a,{container:!0,spacing:24,alignItems:"center",className:n.formContainer},r.a.createElement(M.a,{item:!0,xs:10,sm:12},r.a.createElement(ie.a,{type:"text",label:"Name",name:"catName"})),r.a.createElement(M.a,{item:!0,xs:10},r.a.createElement(ie.a,{label:"Image URL",name:"imageUrl"})),r.a.createElement(M.a,{item:!0,xs:10},r.a.createElement(se.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){return e.createCat("bottom",!0)}},"Add Category")))))}}]),t}(r.a.Component);var ue=Object(c.b)(function(e){return{categories:e.categories}})(le),me=Object(X.withStyles)(function(e){return{formContainer:{padding:100,alignItems:"center"}}})(ue),pe=n(41),ge=n(300),Ee=n(77),he=n.n(Ee),fe=n(122),de=n.n(fe),Oe=n(51),be=n.n(Oe),Se=n(125),Ce=n.n(Se),ve=n(61),je=n.n(ve),ye=n(124),Ie=n.n(ye),Re=n(33),Te=n(121),Ue=n.n(Te),Le=n(120),Ae=n.n(Le),_e=n(119),we=n.n(_e),Ge=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(y.a)(this,Object(I.a)(t).call(this,e))).props.dispatch(Q.logout()),n.state={username:"",password:"",submitted:!1},n.handleChange=n.handleChange.bind(Object(Re.a)(Object(Re.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(Re.a)(Object(Re.a)(n))),n}return Object(R.a)(t,e),Object(j.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(pe.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,n=t.username,a=t.password,r=this.props.dispatch;n&&a&&r(Q.login(n,a))}},{key:"render",value:function(){var e=this.props,t=e.loggingIn,n=e.classes,a=this.state,o=a.username,i=a.password,c=a.submitted;return r.a.createElement("div",{className:"model"},r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement(M.a,{container:!0,justify:"center",spacing:16},r.a.createElement(M.a,{item:!0},r.a.createElement(ie.a,{error:c&&!o,type:"text",label:"email",name:"username",value:o,onChange:this.handleChange})),r.a.createElement(M.a,{item:!0},r.a.createElement(ie.a,{error:c&&!i,type:"password",label:"password",className:"form-control",name:"password",value:i,onChange:this.handleChange})),r.a.createElement(M.a,{item:!0},r.a.createElement(be.a,{color:"primary",type:"submit"},t?r.a.createElement(Ae.a,null):r.a.createElement(Ue.a,null)),t&&r.a.createElement($.a,{size:24,className:n.buttonProgress})))))}}]),t}(r.a.Component);var Ne=Object(c.b)(function(e){return{loggingIn:e.authentication.loggingIn}})(Ge),ke=Object(X.withStyles)(function(e){return{text:{paddingTop:2*e.spacing.unit,paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit},paper:{paddingBottom:50},list:{marginBottom:2*e.spacing.unit},subHeader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},toolbar:{alignItems:"center",justifyContent:"space-between"},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},buttonProgress:{color:we.a[500],position:"absolute",top:"50%",left:"50%",marginLeft:-12,marginTop:10}}})(Ne),xe=n(123),Fe=n.n(xe),Be=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(y.a)(this,Object(I.a)(t).call(this,e))).state={bottom:!1},n}return Object(R.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(P.getCategories())}},{key:"toggleDrawer",value:function(e,t){this.setState(Object(pe.a)({},e,t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.user,a=(t.categories,t.classes),o=this.state.bottom;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{container:!0,className:a.root},r.a.createElement(he.a,{color:"inherit"},r.a.createElement(K.a,{className:a.text,variant:"h5",gutterBottom:!0},"CATEGORIES")),r.a.createElement(M.a,{container:!0,justify:"center",spacing:16,className:a.content},r.a.createElement(re,null))),r.a.createElement(he.a,{position:"fixed",color:"primary",className:a.appBar},r.a.createElement(de.a,{className:a.toolbar},r.a.createElement(K.a,{variant:"h6",gutterBottom:!0,color:"inherit",noWrap:!0},n.email),r.a.createElement(be.a,{color:"secondary","aria-label":"Add",className:a.fabButton,onClick:function(){return e.toggleDrawer("bottom",!0)}},r.a.createElement(je.a,null)),r.a.createElement(Fe.a,{anchor:"top",open:o},r.a.createElement(be.a,{onClick:function(){return e.toggleDrawer("bottom",!1)},color:"inherit",size:"small"},r.a.createElement(Ie.a,{justify:"center"})),r.a.createElement(me,null)),r.a.createElement(ge.a,{to:"/all-in-one/login",color:"inherit",className:"white",title:"Logout"},r.a.createElement(Ce.a,null)))))}}]),t}(r.a.Component);var Je=Object(c.b)(function(e){var t=e.categories;return{user:e.authentication.user,categories:t}})(Be),Qe=Object(X.withStyles)(function(e){return{text:{paddingTop:2*e.spacing.unit,paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit,color:"black"},paper:{paddingBottom:50,height:140,width:100},list:{marginBottom:2*e.spacing.unit},subHeader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,position:"fixed"},toolbar:{alignItems:"center",justifyContent:"space-between"},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},content:{marginTop:70}}})(Je),Pe=n(127),ze=n.n(Pe),De=(n(291),function(e){function t(e){var n;Object(v.a)(this,t);var a=(n=Object(y.a)(this,Object(I.a)(t).call(this,e))).props.dispatch;return l.listen(function(e,t){a(_.clear())}),n}return Object(R.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.alert;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,null),r.a.createElement(ze.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:e&&e.isOpen,message:e&&e.message}),r.a.createElement(T.a,{history:l},r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{exact:!0,path:"/all-in-one/",component:Qe}),r.a.createElement(U.a,{path:"/all-in-one/login",component:ke}))))}}]),t}(r.a.Component));var He=Object(c.b)(function(e){return{alert:e.alert}})(De);i.a.render(r.a.createElement(c.a,{store:S},r.a.createElement(He,null)),document.getElementById("root"))},52:function(e,t,n){},80:function(e,t,n){e.exports=n.p+"static/media/icon.84d44aff.png"}},[[129,2,1]]]);
//# sourceMappingURL=main.88bce612.chunk.js.map