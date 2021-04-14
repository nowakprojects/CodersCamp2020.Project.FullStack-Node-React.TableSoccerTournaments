(this["webpackJsonptable-soccer-tournaments-frontend"]=this["webpackJsonptable-soccer-tournaments-frontend"]||[]).push([[0],{272:function(e,t){},273:function(e,t){},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(21),r=n.n(a),c=n(33),i=n(30),o=n(40),s=n.n(o),l={baseUrl:n(69).a},u=function(e){var t,n,a=Object(i.a)(Object(i.a)({},l),{},{config:e,baseUrl:null!==(t=null!==(n="http://localhost:5000/rest-api")?n:null===e||void 0===e?void 0:e.baseUrl)&&void 0!==t?t:l.baseUrl});return{getPlayersProfiles:function(){return s.a.get("".concat(a.baseUrl,"/players-profiles")).then((function(e){return e.data}))},getPlayerProfile:function(e){return s.a.get("".concat(a.baseUrl,"/players-profiles/").concat(e)).then((function(e){return e.data}))},postPlayersProfile:function(e){return Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat(a.baseUrl,"/players-profiles"),e);case 2:case"end":return t.stop()}}),t)})))()}}}},467:function(e,t,n){},468:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),i=n.n(c),o=n(13),s=n.n(o),l=n(500),u=n(512),d=n(497),j=n(132),b=n(43),m=b.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),h=n(66),p=n(25),O=n(270),x=n(84),f=Object(O.a)({palette:{primary:{main:x.a[800],contrastText:"#E3E152"},secondary:{main:"#FFD100",contrastText:"#000000"}}}),g=n(195),y=n(79),v=n(271),I=Object(v.a)((function(e){return{footer:{boxSizing:"border-box",position:"absolute",bottom:"0",width:"100%",padding:"10px 0",color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main}}})),w=n(4),N=function(e){var t=e.text,n=void 0===t?"Copyright \xa9 TourDeFoos 2021":t,a=I();return Object(w.jsx)(g.a,{className:a.footer,"data-testid":"footer",children:Object(w.jsx)(y.a,{variant:"body2",align:"center",children:n})})},k=n(495),C=n(496),T=n(470),P=n(30),S=function(e){return Object(w.jsx)("div",{style:{minHeight:e.height}})},z=function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(m,{children:[Object(w.jsx)(y.a,{component:"h5",variant:"h5",children:e.title}),Object(w.jsx)(S,{height:"2rem"})]})})},E=Object(b.a)((function(e){var t=Object.assign({},e);return Object(w.jsx)(z,Object(P.a)({},t))}))(r||(r=Object(j.a)(['\n     marginBottom: "20px",\n']))),U="300px",A=function(e){return Object(w.jsx)(F,{children:Object(w.jsx)(k.a,{children:Object(w.jsxs)(m,{children:[Object(w.jsx)(E,{title:e.title}),R(e.menuButtonsList)]})})})},F=Object(b.a)(C.a)({display:"block",boxSizing:"border-box",minWidth:U,paddingTop:"40px",paddingBottom:"40px"}),R=function(e){return Object(w.jsx)(T.a,{children:Object(w.jsx)(m,{children:e.map((function(e,t){return Object(w.jsxs)("li",{children:[Object(w.jsx)(_,{textName:e.textName,onClick:e.onClick,onLink:e.onLink}),Object(w.jsx)(S,{height:"1rem"})]},t)}))})})};function _(e){var t=e.textName,n=e.onClick,a=e.onLink,r=M();return Object(w.jsx)(w.Fragment,{children:a?Object(w.jsx)(h.b,{to:a,children:Object(w.jsx)(d.a,{variant:"contained",color:"primary",onClick:n,className:r.root,children:t})}):Object(w.jsx)(d.a,{variant:"contained",color:"primary",onClick:n,className:r.root,children:t})})}var M=Object(v.a)({root:{width:"250px"}}),L="/tournaments-selection",D="/players-profiles",B="/tournament/:tournamentId/matches",W=[{textName:"Turniej",onClick:function(){console.log("Menu button was clicked!")},onLink:L},{textName:"Zawodnicy",onClick:function(){console.log("Menu button was clicked!")},onLink:D}],H=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(A,{title:"TourDeFoos",menuButtonsList:W})})},Z=n(498),q=n(499),G=Object(v.a)((function(e){return{header:{boxSizing:"border-box",backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,width:"100%",height:"50px",display:"flex",justifyContent:"center"},logo:{maxHeight:"50px"},title:{letterSpacing:"0.15px",padding:"5px"}}})),V="/img",Y=function(e){var t=e.text,n=void 0===t?"Wroc\u0142awski Klub Pi\u0142ki Sto\u0142owej":t,a=G();return Object(w.jsx)(Z.a,{position:"static",children:Object(w.jsxs)(q.a,{className:a.header,"data-testid":"header",children:[Object(w.jsx)(g.a,{flexGrow:1,children:Object(w.jsx)("img",{src:"".concat(V,"/logo.png"),alt:"logo",className:a.logo})}),Object(w.jsx)(g.a,{flexGrow:2,children:Object(w.jsx)(m,{children:Object(w.jsx)(y.a,{variant:"h6",className:a.title,children:n})})}),Object(w.jsx)(g.a,{flexGrow:1})]})})},J=n(21),K=n.n(J),X=n(33),Q=n(16),$=n(504),ee=n(196),te=n(479),ne=n(484),ae=n(522),re=n(93),ce=n(40),ie=n.n(ce),oe={baseUrl:"http://localhost:5000/rest-api"},se=function(e){var t,n,a=Object(P.a)(Object(P.a)({},oe),{},{config:e,baseUrl:null!==(t=null!==(n="http://localhost:5000/rest-api")?n:null===e||void 0===e?void 0:e.baseUrl)&&void 0!==t?t:oe.baseUrl});return{getRegisteredPlayersIds:function(e){return ie.a.get("".concat(a.baseUrl,"/tournament-registrations/").concat(e)).then((function(e){return e.data}))},postPlayersForTournament:function(e){return Object(X.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie.a.post("".concat(a.baseUrl,"/tournament-registrations/").concat(e.tournamentId,"/players"),e);case 2:case"end":return t.stop()}}),t)})))()},closeTournamentRegistration:function(e){return Object(X.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie.a.post("".concat(a.baseUrl,"/tournament-registrations/").concat(e,"/close"),null,{params:{tournamentId:e}});case 2:case"end":return t.stop()}}),t)})))()}}},le=(0,n(23).makeStyles)((function(e){return{colors:{color:"#000000 !important",backgroundColor:"#FFB400 !important"}}})),ue=n(517),de=n(523),je=function(e){var t=le();return e.isError?Object(w.jsx)(ue.a,{open:e.open,autoHideDuration:3e3,onClose:e.handleClose,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(w.jsx)(de.a,{onClose:e.handleClose,severity:"error",children:e.text})}):Object(w.jsx)(ue.a,{open:e.open,autoHideDuration:3e3,onClose:e.handleClose,children:Object(w.jsx)(de.a,{onClose:e.handleClose,className:t.colors,icon:!1,children:e.text})})},be=Object(v.a)((function(e){return{root:{width:U}}})),me=n(472),he=n(311),pe=n.n(he),Oe=n(312),xe=n.n(Oe),fe=n(52),ge={openCreatePlayerProfileForm:!1,toggleOpenFormState:function(){},onPlayerProfileCreated:function(e,t){},registerPlayer:function(){var e=Object(X.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=Object(c.createContext)(ge),ve=function(e){var t=Object(c.useContext)(ye).toggleOpenFormState,n=Object(c.useState)(!1),a=Object(Q.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(!1),s=Object(Q.a)(o,2),l=s[0],j=s[1],b=Object(c.useState)(""),m=Object(Q.a)(b,2),h=m[0],O=m[1];Object(c.useEffect)((function(){return i(e.openDrawer),function(){i(!1)}}),[e.openDrawer]);var x=Object(p.f)();function f(t){e.returnToPrevState(!1),i(t)}var g=function(){var t=Object(X.a)(K.a.mark((function t(){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,se().closeTournamentRegistration(e.tournamentId);case 3:f(!1),x.goBack(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n=t.t0.response.data.message,O(n),j(!0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),y=Object(v.a)((function(){return{width:{width:"70%"}}}))();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(fe.a,{anchor:"bottom",open:r,onClose:function(){return f(!1)},children:Object(w.jsxs)(u.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(w.jsx)(S,{height:"30px"}),Object(w.jsx)(d.a,{className:y.width,variant:"contained",color:"primary",onClick:function(){t(),f(!1)},children:"Dodaj i zapisz zawodnika"}),Object(w.jsx)(S,{height:"20px"}),Object(w.jsx)(d.a,{className:y.width,variant:"contained",color:"primary",onClick:g,children:"Zako\u0144cz zapisy na turniej"}),Object(w.jsx)(S,{height:"30px"})]})}),Object(w.jsx)(je,{text:h,open:l,handleClose:function(e,t){"clickaway"!==t&&j(!1)},isError:!0})]})},Ie=function(e){var t=Object(c.useState)(!1),n=Object(Q.a)(t,2),a=n[0],r=n[1],i=Object(p.f)(),o=Object(v.a)((function(){return{padding:{padding:0,paddingTop:"2px"}}}))();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(g.a,{display:"flex",alignItems:"center",width:"100%",children:[Object(w.jsx)(g.a,{children:Object(w.jsx)(me.a,{className:o.padding,onClick:function(){i.goBack()},children:Object(w.jsx)(pe.a,{})})}),Object(w.jsx)(g.a,{flexGrow:1,textAlign:"center",children:Object(w.jsx)(y.a,{component:"h6",variant:"h6",children:"Zapisy na turniej"})}),Object(w.jsx)(g.a,{children:Object(w.jsx)(me.a,{"data-testid":"hamburgerMenu",className:o.padding,onClick:function(){return r(!0)},children:Object(w.jsx)(xe.a,{})})})]}),Object(w.jsx)(ve,{openDrawer:a,returnToPrevState:r,tournamentId:e.tournamentId})]})},we=n(518),Ne=n(321),ke=n(96),Ce=n(19),Te=n(20),Pe=n(524),Se=function(){function e(){Object(Ce.a)(this,e)}return Object(Te.a)(e,null,[{key:"generate",value:function(){return Object(Pe.a)()}}]),e}(),ze=ke.a({name:ke.b().required("To pole jest wymagane."),surname:ke.b().required("To pole jest wymagane."),email:ke.b().email("Niepoprawny adres e-mail.").required("To pole jest wymagane."),phone:ke.b().min(9,"Wprowad\u017a przynajmniej 9 znak\xf3w.").required("To pole jest wymagane.")});var Ee,Ue=function(e){var t=Object(c.useContext)(ye).onPlayerProfileCreated,n=Object(c.useState)(!1),a=Object(Q.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(Q.a)(o,2),l=s[0],j=s[1],b=Object(Ne.a)({initialValues:{name:"",surname:"",email:"",phone:""},validationSchema:ze,onSubmit:function(){var n=Object(X.a)(K.a.mark((function n(a){var r;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=Se.generate(),n.next=4,Object(re.UserProfileRestApi)().postPlayersProfile({playerId:r,firstName:a.name,lastName:a.surname,phoneNumber:a.phone,emailAddress:a.email});case 4:return n.next=6,se().postPlayersForTournament({tournamentId:e.tournamentId,playerId:r});case 6:e.onDrawerClose(),t(a.name,a.surname),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),c=n.t0.response.data.message,j(c),i(!0);case 13:case"end":return n.stop()}var c}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()});return Object(w.jsxs)(u.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(w.jsx)(S,{height:"10px"}),Object(w.jsx)(y.a,{component:"h6",variant:"h6",children:"Nowy zawodnik"}),Object(w.jsx)(S,{height:"10px"}),Object(w.jsx)("form",{onSubmit:b.handleSubmit,children:Object(w.jsxs)(u.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(w.jsx)(we.a,{id:"Imi\u0119",value:b.values.name,label:"Imi\u0119",name:"name",variant:"outlined",onChange:b.handleChange,error:b.touched.name&&Boolean(b.errors.name),helperText:b.touched.name&&b.errors.name}),Object(w.jsx)(S,{height:"10px"}),Object(w.jsx)(we.a,{id:"Nazwisko",value:b.values.surname,label:"Nazwisko",name:"surname",variant:"outlined",onChange:b.handleChange,error:b.touched.surname&&Boolean(b.errors.surname),helperText:b.touched.surname&&b.errors.surname}),Object(w.jsx)(S,{height:"10px"}),Object(w.jsx)(we.a,{id:"Adres e-mail",value:b.values.email,label:"Adres e-mail",name:"email",variant:"outlined",onChange:b.handleChange,error:b.touched.email&&Boolean(b.errors.email),helperText:b.touched.email&&b.errors.email}),Object(w.jsx)(S,{height:"10px"}),Object(w.jsx)(we.a,{id:"Numer telefonu",value:b.values.phone,label:"Numer telefonu",name:"phone",variant:"outlined",onChange:b.handleChange,error:b.touched.phone&&Boolean(b.errors.phone),helperText:b.touched.phone&&b.errors.phone}),Object(w.jsx)(S,{height:"1rem"}),Object(w.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",children:"Zapisz zawodnika"}),Object(w.jsx)(S,{height:"1rem"})]})}),Object(w.jsx)(je,{text:l,open:r,handleClose:function(e,t){"clickaway"!==t&&i(!1)},isError:!0})]})},Ae=function(e){var t=Object(c.useContext)(ye),n=t.openCreatePlayerProfileForm,a=t.toggleOpenFormState,r=Object(c.useState)(!1),i=Object(Q.a)(r,2),o=i[0],s=i[1];Object(c.useEffect)((function(){n&&(s(!0),a())}),[n]);var l;return Object(w.jsx)(fe.a,{anchor:"bottom",open:o,onClose:(l=!1,function(){s(l)}),children:Object(w.jsx)(Ue,{onDrawerClose:function(){s(!1)},tournamentId:e.tournamentId})})},Fe=n(519),Re=function(){var e=Object(c.useContext)(ye).toggleOpenFormState;return Object(w.jsxs)(m,{children:[Object(w.jsxs)(de.a,{severity:"info",children:[Object(w.jsx)(Fe.a,{children:"Nie znaleziono zawodnika?"}),"Zapisz nowego poni\u017cej."]}),Object(w.jsx)(S,{height:"1rem"}),Object(w.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return e()},children:"Dodaj i zapisz"})]})},_e=n(513),Me=n(514),Le=n(525),De=n(516),Be=n(515),We=n(520),He=n(521),Ze=n(318),qe=n.n(Ze),Ge=function(e){var t=Object(c.useContext)(ye).registerPlayer;return Object(w.jsxs)(_e.a,{children:[Object(w.jsx)(Me.a,{children:Object(w.jsx)(Le.a,{children:Object(w.jsx)(He.a,{})})}),Object(w.jsx)(De.a,{primary:"".concat(e.player.firstName," ").concat(e.player.lastName),secondary:e.player.emailAddress}),Object(w.jsx)(Be.a,{children:e.isRegistered?Object(w.jsx)(qe.a,{color:"action","aria-label":"registered-player","data-testid":"registered-player"}):Object(w.jsx)(me.a,{edge:"end","aria-label":"register-player","data-testid":"register-player",onClick:function(){return t(e.player.playerId)},children:Object(w.jsx)(We.a,{})})})]})},Ve=function(e){return 0===e.players.length?Object(w.jsx)(Re,{}):Object(w.jsx)(T.a,{children:e.players.map((function(t){var n=e.registeredPlayersIds.includes(t.playerId);return Object(w.jsx)(Ge,{player:t,isRegistered:n},t.playerId)}))})},Ye=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(!1),a=Object(Q.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(Q.a)(o,2),l=s[0],u=s[1],d=Object(c.useState)(void 0),j=Object(Q.a)(d,2),b=j[0],h=j[1],p=Object(c.useState)([]),O=Object(Q.a)(p,2),x=O[0],f=O[1],g=Object(c.useState)([]),y=Object(Q.a)(g,2),v=y[0],I=y[1],N=Object(c.useState)(ge.openCreatePlayerProfileForm),T=Object(Q.a)(N,2),P=T[0],z=T[1],E=function(){var t=Object(X.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,se().postPlayersForTournament({tournamentId:e.tournamentId,playerId:n});case 2:return t.next=4,A();case 4:R();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function U(){return Object(re.UserProfileRestApi)().getPlayersProfiles().then((function(e){h(e.items),f(e.items)}))}function A(){return se().getRegisteredPlayersIds(e.tournamentId).then((function(e){I(e.registeredPlayersIds)}))}Object(c.useEffect)((function(){U().then()}),[]),Object(c.useEffect)((function(){A().then()}),[e.tournamentId]);var F=function(){U().then(),A().then(),t&&t.current&&(t.current.value="")},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";u(e&&t?"Pomy\u015blnie utworzono konto ".concat(e," ").concat(t," oraz zapisano na turniej"):"Pomy\u015blnie zapisano zawodniczk\u0119 / zawodnika na turniej"),i(!0)},_=void 0===b,M=be();return Object(w.jsx)(ye.Provider,{value:{openCreatePlayerProfileForm:P,toggleOpenFormState:function(){z((function(e){return!e}))},onPlayerProfileCreated:function(e,t){R(e,t),F()},registerPlayer:E},children:Object(w.jsx)(C.a,{className:M.root,children:Object(w.jsx)(k.a,{children:Object(w.jsxs)(m,{children:[Object(w.jsx)(Ie,{tournamentId:e.tournamentId}),Object(w.jsx)(S,{height:"1rem"}),_?Object(w.jsx)($.a,{"data-testid":"TournamentRegistrationsLoadingIndicator"}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(ee.a,{variant:"outlined",children:[Object(w.jsx)(te.a,{htmlFor:"player-search-input",children:"Zawodnik"}),Object(w.jsx)(ne.a,{id:"player-search-input",inputRef:t,onChange:function(e){return function(e){""===e.trim()?f(null!==b&&void 0!==b?b:[]):f((null!==b&&void 0!==b?b:[]).filter((function(t){return"".concat(t.firstName," ").concat(t.lastName," ").concat(t.emailAddress).includes(e.trim())})))}(e.target.value)},endAdornment:Object(w.jsx)(ae.a,{}),labelWidth:70})]}),Object(w.jsx)(S,{height:"1rem"}),Object(w.jsx)(Ve,{players:x,registeredPlayersIds:v})]}),Object(w.jsx)(je,{text:l,open:r,handleClose:function(e,t){"clickaway"!==t&&i(!1)},isError:!1}),Object(w.jsx)(Ae,{tournamentId:e.tournamentId})]})})})})},Je=function(){var e=Object(p.g)("/tournament-registration/:tournamentId"),t=null===e||void 0===e?void 0:e.params.tournamentId;return t?Object(w.jsx)(Ye,{tournamentId:t}):null},Ke=Object(b.a)("div")({backgroundImage:'url("'.concat(V,'/background.png")'),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1}),Xe=n(5);!function(e){e.FINISHED="Zako\u0144czony",e.STARTED="ROZPOCZ\u0118TY",e.NO_TABLE="Oczekuj\u0105cy",e.NO_TEAMS="Brak graczy",e.NO_ONE_TEAM="Brak drugiego teamu",e.STATUS_NOT_EXIST="---"}(Ee||(Ee={}));var Qe=Object(v.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},teamItem:{boxSizing:"border-box",display:"inline-flex",width:"100%",paddingLeft:"30px"},avatar:{padding:"15px 0"},avatarColor:{color:e.palette.getContrastText(e.palette.primary.main),backgroundColor:e.palette.primary.main},inline:{display:"inline"},waitingForTeam:{display:"inline",color:"red"}}})),$e=function(e){var t=e.player1,n=e.player2,a=e.isWinnerTeam,r=e.teamId,c=e.matchStatus,i=Qe(),o=Boolean(c===Ee.NO_ONE_TEAM),s=!r,l=Object(w.jsx)("span",{className:i.waitingForTeam,children:'"Oczekiwanie na dru\u017cyn\u0119"'}),u=t||"player1",d=n||"player2",j=Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("span",{className:i.inline,children:u}),Object(w.jsx)("br",{}),Object(w.jsxs)("span",{className:i.inline,children:[" & ",d," "]})]}),b=u[0].toUpperCase()+d[0].toUpperCase(),m=s?l:j,h=c===Ee.NO_ONE_TEAM&&!s,p=Object(w.jsxs)(w.Fragment,{children:['"Oczekiwanie na',Object(w.jsx)(y.a,{component:"span",variant:"body2",className:i.inline,color:"textPrimary",children:o?" przeciwnika":" st\xf3\u0142"}),'".']}),O=c===Ee.STARTED,x=Object(w.jsxs)(w.Fragment,{children:["Aby ustawi\u0107 zwyci\u0119zc\u0119 -",Object(w.jsx)(y.a,{component:"span",variant:"body2",className:i.inline,color:"textPrimary",children:"Kliknij tu!"})]}),f=c===Ee.FINISHED,g=Object(w.jsx)(y.a,{component:"span",variant:"body2",className:i.inline,color:"textPrimary",children:a?"Zwyci\u0119zca!":"Przegrany!"});return Object(w.jsxs)(C.a,{className:i.teamItem,children:[Object(w.jsx)(Me.a,{className:i.avatar,children:Object(w.jsx)(Le.a,{className:i.avatarColor,children:s?"...":b})}),Object(w.jsx)(De.a,{primary:m,secondary:Object(w.jsxs)(w.Fragment,{children:[f&&g,O&&x,h&&p]})})]})},et=n(501),tt=n(502),nt=n(503),at=n(320),rt=n.n(at),ct=n(319),it=n.n(ct),ot=n(505),st=n(508),lt=n(509),ut=n(510),dt=n(511),jt=n(474),bt=i.a.forwardRef((function(e,t){return Object(w.jsx)(jt.a,Object(P.a)({direction:"up",ref:t},e))})),mt=Object(Xe.a)({root:{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0}})(C.a);function ht(e){var t=i.a.useState(e.isOpen),n=Object(Q.a)(t,2),a=n[0],r=n[1],c=function(){r(!1)};return Object(w.jsxs)("div",{children:[Object(w.jsx)(mt,{variant:"outlined",color:"primary",onClick:function(){r(!0)}}),Object(w.jsxs)(ot.a,{open:a,TransitionComponent:bt,keepMounted:!0,onClose:c,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(w.jsx)(dt.a,{id:"alert-dialog-slide-title",children:"Czy ustawi\u0107 zwyci\u0119zc\u0119 meczu?"}),Object(w.jsx)(lt.a,{children:Object(w.jsxs)(ut.a,{id:"alert-dialog-slide-description",children:["Czy aby na pewno chcesz ustawi\u0107 dru\u017cyn\u0119 '",e.teamName||"NN","' jako zwyci\u0119zc\u0119 tego meczu?"]})}),Object(w.jsxs)(st.a,{children:[Object(w.jsx)(d.a,{onClick:c,color:"primary",children:"Odrzu\u0107"}),Object(w.jsx)(d.a,{onClick:function(){r(!1),e.agreeCallback()},color:"primary",children:"Zaakceptuj"})]})]})]})}var pt=Object(b.a)("div")({zIndex:1,boxSizing:"border-box",display:"inline-flex",position:"absolute",width:"100%",height:"100%",margin:0,padding:0,"justify-content":"center","align-items":"center",fontSize:"65px",backgroundColor:f.palette.success.light,opacity:0,cursor:"pointer",transition:"opacity 1s","&:hover":{opacity:.8}}),Ot=Object(b.a)(C.a)({position:"relative",margin:"3px"}),xt=Object(b.a)(tt.a)({display:"flex",flexDirection:"column",backgroundColor:f.palette.background.default}),ft=Object(Xe.a)({root:{color:f.palette.getContrastText(f.palette.secondary.main),backgroundColor:f.palette.secondary.main}})(Le.a),gt=Object(Xe.a)({root:{width:"100%"}})(C.a),yt=function(e){var t=e.winnerTeamId===e.team1.teamId,n=e.winnerTeamId===e.team2.teamId,a=(e.matchStatus,Ee.FINISHED,e.matchStatus,Ee.STARTED,function(t){var n=t.matchId,a=t.teamId;return n&&a?Object(w.jsxs)(pt,{children:[Object(w.jsx)(it.a,{fontSize:"inherit"}),Object(w.jsx)(ht,{agreeCallback:function(){return function(t,n){return e.onClickTeam(t,n)}(n,a)},isOpen:!1,teamName:a})]}):Object(w.jsx)("div",{})});return Object(w.jsx)(gt,{elevation:3,children:Object(w.jsxs)(et.a,{expanded:e.expanded==="panel".concat(e.matchNumber),onChange:e.handleChangeExpander("panel".concat(e.matchNumber)),children:[Object(w.jsxs)(nt.a,{expandIcon:Object(w.jsx)(rt.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(w.jsx)(Me.a,{children:Object(w.jsx)(ft,{children:e.matchNumber})}),Object(w.jsx)(De.a,{primary:"- ".concat(e.matchStatus," -"),secondary:Object(w.jsxs)(i.a.Fragment,{children:[Object(w.jsx)(y.a,{component:"span",variant:"body2",display:"inline",color:"textPrimary",children:"Numer meczu: "}),e.matchNumber||0===e.matchNumber?e.matchNumber:"-",Object(w.jsx)("br",{}),Object(w.jsx)(y.a,{component:"span",variant:"body2",display:"inline",color:"textPrimary",children:"Poziom: "}),e.level||0===e.level?e.level:"-"]})})]}),Object(w.jsxs)(xt,{children:[Object(w.jsxs)(Ot,{children:[Object(w.jsx)(a,{matchId:e.matchId,teamId:e.team1.teamId}),Object(w.jsx)($e,{isWinnerTeam:t,matchStatus:e.matchStatus,teamId:e.team1.teamId,player1:e.team1.player1,player2:e.team1.player2})]}),Object(w.jsxs)(Ot,{children:[Object(w.jsx)(a,{matchId:e.matchId,teamId:e.team2.teamId}),Object(w.jsx)($e,{isWinnerTeam:n,matchStatus:e.matchStatus,teamId:e.team2.teamId,player1:e.team1.player1,player2:e.team1.player2})]})]})]})})},vt=n(69),It={baseUrl:vt.a},wt={baseUrl:vt.a},Nt=function(e){var t,n,a=Object(P.a)(Object(P.a)({},wt),{},{config:e,baseUrl:null!==(t=null!==(n="http://localhost:5000/rest-api")?n:null===e||void 0===e?void 0:e.baseUrl)&&void 0!==t?t:wt.baseUrl});return{getMatchesList:function(e){return ie.a.get("".concat(a.baseUrl,"/matches/").concat(e)).then((function(e){return e.data}))},postMatchWinner:function(e,t){return Object(X.a)(K.a.mark((function n(){return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,ie.a.post("".concat(a.baseUrl,"/matches/").concat(e,"/result"),{winnerId:t});case 2:case"end":return n.stop()}}),n)})))()}}},kt={baseUrl:vt.a},Ct=Object(b.a)(C.a)({width:U}),Tt=function(e){var t=e.tournamentId,n=i.a.useState(!1),a=Object(Q.a)(n,2),r=a[0],o=a[1],s=i.a.useState(),l=Object(Q.a)(s,2),u=l[0],d=l[1],j=i.a.useState(void 0),b=Object(Q.a)(j,2),m=(b[0],b[1]),h=i.a.useState(),p=Object(Q.a)(h,2),O=p[0],x=p[1],f=i.a.useState(void 0),g=Object(Q.a)(f,2),y=(g[0],g[1]);Object(c.useEffect)((function(){I()}),[t]),Object(c.useEffect)((function(){u&&(Promise.all(u.map((function(e){return zt("".concat(t,"_").concat(e.matchNumber))}))).then((function(e){return m(e)})),Ut(t).then((function(e){return x(e)})))}),[u]),Object(c.useEffect)((function(){function e(){return(e=Object(X.a)(K.a.mark((function e(){var t,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=2;break}return e.abrupt("return");case 2:return t=O.items.map((function(e){return[e.firstTeamPlayer,e.secondTeamPlayer]})).reduce((function(e,t){return e.concat(t)})),e.next=5,Promise.all(t.map((function(e){return Et(e)})));case 5:n=e.sent,y(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then()}),[O]);var v=function(e){return function(t,n){o(!!n&&e)}};function I(){(function(e){var t,n,a=Object(P.a)(Object(P.a)({},It),{},{config:e,baseUrl:null!==(t=null!==(n="http://localhost:5000/rest-api")?n:null===e||void 0===e?void 0:e.baseUrl)&&void 0!==t?t:It.baseUrl});return{getMatchesList:function(e){return ie.a.get("".concat(a.baseUrl,"/doubles-tournaments/").concat(e,"/matches")).then((function(e){return e.data}))}}})().getMatchesList(t).then((function(e){var t=St(e,I);d(t)}))}return Object(w.jsx)(Ct,{children:u?u.map((function(e,t){return Pt(e,t,r,v)})):"Oczekiwanie na pobranie..."})},Pt=function(e,t,n,a){return Object(w.jsx)(yt,{level:e.level,matchNumber:e.matchNumber,matchId:e.matchId,matchStatus:e.matchStatus,onClickTeam:e.onClickTeam,team1:e.team1,team2:e.team2,winnerTeamId:e.winnerId,expanded:n,handleChangeExpander:a},e.matchNumber)},St=function(e,t){return e.queue.map((function(n){return{onClickTeam:function(e,n){return At(e,n,t)},matchNumber:n.matchNumber,matchId:"".concat(e.tournamentId,"_").concat(n.matchNumber),winnerId:void 0,level:void 0,matchStatus:"started"===n.status?Ee.STARTED:"ended"===n.status?Ee.FINISHED:"enqueued"===n.status?Ee.NO_TABLE:"noTeams"===n.status?n.team1Id||n.team1Id?Ee.NO_ONE_TEAM:Ee.NO_TEAMS:Ee.STATUS_NOT_EXIST,team1:{player1:void 0,player2:void 0,teamId:n.team1Id,currentPlayerLevel:void 0,currentMatchNumber:void 0},team2:{player1:void 0,player2:void 0,teamId:n.team2Id,currentPlayerLevel:void 0,currentMatchNumber:void 0}}}))},zt=function(e){return Nt().getMatchesList(e).then((function(e){return{matchId:e.matchId,firstMatchSideId:e.firstMatchSideId,secondMatchSideId:e.secondMatchSideId,winnerId:e.winnerId}}))},Et=function(e){return Object(re.UserProfileRestApi)().getPlayerProfile(e).then((function(e){return{playerId:e.playerId,firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,emailAddress:e.emailAddress}}))},Ut=function(e){return function(e){var t,n,a=Object(P.a)(Object(P.a)({},kt),{},{config:e,baseUrl:null!==(t=null!==(n="http://localhost:5000/rest-api")?n:null===e||void 0===e?void 0:e.baseUrl)&&void 0!==t?t:kt.baseUrl});return{getMatchesList:function(e){return ie.a.get("".concat(a.baseUrl,"/doubles-tournaments/").concat(e,"/teams")).then((function(e){return e.data}))}}}().getMatchesList(e).then((function(e){return e}))},At=function(e,t,n){return Nt().postMatchWinner(e,t).then((function(){return n()}))},Ft=function(){var e=Object(p.g)(B),t=null===e||void 0===e?void 0:e.params.tournamentId;return t?Object(w.jsx)(Tt,{tournamentId:t}):null};var Rt=function(){return Object(w.jsxs)(h.a,{children:[Object(w.jsx)(Ke,{}),Object(w.jsx)(l.a,{theme:f,children:Object(w.jsxs)(m,{children:[Object(w.jsx)(Y,{}),Object(w.jsx)(S,{height:"20px"}),Object(w.jsx)(u.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"75vh"},children:Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{path:"/login",exact:!0,children:Object(w.jsx)(d.a,{children:"PATH_FOR_LOGIN_VIEW"})}),Object(w.jsx)(p.a,{path:L,exact:!0,children:"PATH_FOR_TOURNAMENTS_SELECTION_VIEW"}),Object(w.jsx)(p.a,{path:"/new-tournament",exact:!0,children:"PATH_FOR_CREATING_NEW_TOURNAMENT_VIEW"}),Object(w.jsx)(p.a,{path:"/tournament-registration/:tournamentId",children:Object(w.jsx)(m,{children:Object(w.jsx)(Je,{})})}),Object(w.jsx)(p.a,{path:D,exact:!0,children:"PATH_FOR_PLAYERS_PROFILES_VIEW"}),Object(w.jsx)(p.a,{path:"/new-player-profiles",exact:!0,children:"PATH_FOR_PLAYER_PROFILE_CREATION_VIEW"}),Object(w.jsx)(p.a,{path:B,exact:!0,children:Object(w.jsx)(m,{children:Object(w.jsx)(Ft,{})})}),Object(w.jsx)(p.a,{path:"/",exact:!0,children:Object(w.jsx)(H,{})})]})}),Object(w.jsx)(S,{height:"55px"}),Object(w.jsx)(N,{})]})})]})};n(467);s.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(Rt,{})}),document.getElementById("root"))},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="http://localhost:5000/rest-api"},93:function(e,t,n){"use strict";var a=n(272);n.o(a,"UserProfileRestApi")&&n.d(t,"UserProfileRestApi",(function(){return a.UserProfileRestApi}));var r=n(273);n.o(r,"UserProfileRestApi")&&n.d(t,"UserProfileRestApi",(function(){return r.UserProfileRestApi}));var c=n(274);n.d(t,"UserProfileRestApi",(function(){return c.a}))}},[[468,1,2]]]);
//# sourceMappingURL=main.70285b4a.chunk.js.map