(this.webpackJsonpmyfirstapp=this.webpackJsonpmyfirstapp||[]).push([[0],{105:function(e,t){},118:function(e,t,n){},143:function(e,t){},148:function(e,t,n){},152:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(16),s=n.n(i),o=(n(118),n(15)),u=n(10),l=n.n(u),d=n(42),j=n(18),h=n(7),f=n(25),b=n(3),p=n.n(b),v=n(8),O=n(11),x=n(20),m=Object(O.b)("log/fetchLog",Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(st+"/log");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),g=Object(O.b)("log/addLogRecord",function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post(st+"/log",t);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(O.c)({name:"log",initialState:{logData:[123],status:"idle"},reducers:{},extraReducers:(a={},Object(f.a)(a,m.fulfilled,(function(e,t){var n=t.payload;e.logData=n,e.status="success"})),Object(f.a)(a,g.fulfilled,(function(e,t){var n=t.payload;e.logData.push(n),e.status="success",console.log(Object(x.a)(e.logData))})),a)}).reducer,w=(n(143),Object(O.c)({name:"mindScrapForm",initialState:{show:!1,status:"idle"},reducers:{toggleMindScrapModal:function(e){e.show=!e.show}},extraReducers:{}})),N=w.actions.toggleMindScrapModal,D=w.reducer,k=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(st+"/inbox");case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=Object(O.b)("inbox/fetchInbox",Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k());case 1:case"end":return e.stop()}}),e)})))),S=Object(O.c)({name:"inbox",initialState:{inboxData:[],status:"idle"},reducers:{},extraReducers:Object(f.a)({},C.fulfilled,(function(e,t){var n=t.payload;e.inboxData=n,e.status="success"}))}).reducer,E=(n.p,n(52)),V=n(1);function z(e){var t=e.color,n=e.text,a=e.onClick,r=e.className,c=void 0===r?"btn":r,i=e.style;return Object(V.jsx)("button",{onClick:a,style:Object(E.a)(Object(E.a)({},i),{},{backgroundColor:t}),className:c,children:n})}z.defaultProps={color:"steelblue"};var M=z;function R(e){var t=e.title,n=e.color,a=Object(j.e)(),r=(Object(h.b)(),{color:"black",backgroundColor:n,borderRadius:"10px",padding:"4px 4px",boxShadow:"2px 2px gray"});return Object(V.jsxs)("header",{className:"header",children:[Object(V.jsx)("h1",{style:r,children:t}),"Task tracker"==t&&"/"===a.pathname&&Object(V.jsx)(M,{})]})}R.defaultProps={title:"Poor thing"};var A=R,T=n(190),L=Object(O.c)({name:"createLetterModal",initialState:{show:!0,status:"idle"},reducers:{toggleShow:function(e){e.show=!e.show,console.log("toggle")}},extraReducers:{}}),P=L.actions.toggleShow,F=L.reducer,I=(n(92),n(69)),H=n(56),U=n(31),K=n(78);var W=function(e){var t=e.handle,n=e.target;return Object(V.jsx)("div",{children:Object(V.jsxs)("fieldset",{className:"main-fieldset",style:{fontSize:17,paddingLeft:25},children:[Object(V.jsxs)("label",{children:[Object(V.jsx)("span",{style:{marginLeft:"30px"},children:"name"}),Object(V.jsx)("br",{}),Object(V.jsx)("input",{type:"text",style:{marginTop:10,width:130,height:25},onChange:function(e){return t.name(e.target.value)}})]}),Object(V.jsxs)("label",{style:{marginTop:30},children:[Object(V.jsx)("span",{children:"id:"}),Object(V.jsx)("span",{children:n.markup.id})]})]})})},J=n(191);n(148);var B=function(e){var t=e.tabs,n=c.a.useState(t[0].title),a=Object(o.a)(n,2),r=a[0],i=a[1];return Object(V.jsxs)("div",{children:[t.map((function(e){var t=e.title,n=e.Content;return t==r&&n()})),Object(V.jsx)("div",{className:"tab-pane",children:t.map((function(e){var t=e.title;return Object(V.jsx)("div",{className:"tab-button".concat(t==r?" focus":""),onClick:function(){return i(t)},children:t})}))})]})};var G=function(e){var t=e.handle,n=["bool","number","string","object","neural","encoded"],a=Object(r.useState)(),i=Object(o.a)(a,2),s=i[0],u=i[1],l=Object(r.useState)(),d=Object(o.a)(l,2),j=d[0],h=d[1],f=c.a.createRef(),b=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.current.style.height="inherit",f.current.style.height="".concat(f.current.scrollHeight+2,"px");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return Object(V.jsx)("div",{children:Object(V.jsxs)("label",{children:[Object(V.jsx)(J.a,{title:"used by system to create SENSOR",placement:"right-start",children:Object(V.jsx)("span",{className:"tip",children:"type"})}),Object(V.jsx)("div",{className:"check-group",style:{marginTop:0},children:n.map((function(e){return Object(V.jsxs)("label",{className:"check-label",children:[Object(V.jsx)("input",{type:"checkbox",checked:e==j,onChange:function(n){n.target.checked&&(h(e),t.expectedType(e))}}),Object(V.jsx)("span",{children:e})]})}))})]})})},x=[{title:"Text",Content:function(){return Object(V.jsxs)("div",{className:"content-container",children:[Object(V.jsxs)("label",{children:[Object(V.jsx)("span",{children:"\u0428\u0443\u043a\u0430\u043d\u0438\u0439 \u0432\u0438\u0440\u0430\u0437"}),Object(V.jsx)("textarea",{className:"textarea",cols:"25",rows:"2",ref:f,onChange:function(e){b(e),u(e.target.value),t.text(e.target.value)},value:s})]}),Object(V.jsx)(O,{})]})}},{title:"Neural",Content:function(){return Object(V.jsxs)("div",{className:"content-container",children:[Object(V.jsx)("h1",{children:"Do stuff"}),Object(V.jsx)(O,{})]})}}];return Object(V.jsx)("div",{children:Object(V.jsx)("fieldset",{className:"main-fieldset",children:Object(V.jsx)(B,{tabs:x})})})},Y=n.p+"static/media/folder.d33ac30e.png";function q(e){var t=e.handle;return Object(V.jsxs)("div",{children:[Object(V.jsx)("br",{}),Object(V.jsx)(J.a,{title:"programatical pattern to get to reciever`s/human SENSORS",placement:"right-start",children:Object(V.jsx)("h5",{className:"tip",children:"notification"})}),Object(V.jsxs)("label",{children:[Object(V.jsx)("span",{children:"** Settings **"}),Object(V.jsx)("div",{className:"check-group",children:Object(V.jsxs)("label",{className:"check-label",children:[Object(V.jsx)("input",{type:"checkbox",onChange:function(e){t(e.target.checked)}}),Object(V.jsx)("span",{children:"default"})]})})]})]})}function _(e){var t=e.handle,n=(e.target,Object(r.useState)(!1)),a=Object(o.a)(n,2),i=(a[0],a[1],Object(r.useState)("precise")),s=Object(o.a)(i,2),u=s[0],l=s[1],d=Object(r.useState)(),j=Object(o.a)(d,2),h=j[0],f=j[1],b=Object(r.useState)(),p=Object(o.a)(b,2),v=p[0],O=p[1],x=c.a.useRef(),m=c.a.useRef(),g=c.a.useRef(),y=c.a.useRef(),w=c.a.useRef(),N="00:00",D=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=new Date(t),r=n.slice(0,2)||(null===e||void 0===e?void 0:e.getHours())||N.slice(0,2),c=n.slice(-2)||(null===e||void 0===e?void 0:e.getMinutes())||N.slice(-2);return console.log(a.toString()),console.log(r+" : "+c),a.setHours(r,c),console.log(a.toString()),a},k=function(e){if(!(e instanceof Date))return{date:"unset",time:""};e.getDay();var t="0".concat(e.getDate()).slice(-2),n="0".concat(e.getMonth()+1).slice(-2),a=e.getFullYear(),r="0".concat(e.getMinutes()).slice(-2),c="0".concat(e.getHours()).slice(-2);return{date:"".concat(t,".").concat(n,".").concat(a),time:" ".concat(c,":").concat(r),serializedDate:"".concat(a,".").concat(n,".").concat(t)}};return Object(V.jsxs)("div",{className:"chapter-container",children:[Object(V.jsx)(J.a,{title:"when MEASURMENT is conducted/ letter arrives",placement:"right-start",children:Object(V.jsx)("h5",{className:"tip",children:"date"})}),Object(V.jsx)("div",{className:"chapter",children:Object(V.jsxs)(I.a,{activeKey:u,onSelect:function(e){return l(e)},children:[Object(V.jsx)(H.a,{eventKey:"approximate",title:"Approximate date",children:Object(V.jsxs)("div",{className:"date-container",children:[Object(V.jsxs)("label",{className:"date-label",children:[Object(V.jsx)("span",{children:"from"}),Object(V.jsx)("input",{type:"date",ref:x,placeholder:"none",onChange:function(e){var n=D(h,e.target.value,N);f(n),t.from(n)}}),Object(V.jsx)("span",{children:k(h).date})]}),Object(V.jsxs)("label",{className:"date-label",children:[Object(V.jsx)("span",{children:"to"}),Object(V.jsx)("input",{type:"date",ref:m,onChange:function(e){var n=D(h,e.target.value,N);O(n),t.to(n)}}),Object(V.jsx)("span",{children:k(v).date})]})]})}),Object(V.jsx)(H.a,{eventKey:"precise",title:"Precise date",children:Object(V.jsxs)("div",{className:"date-container",children:[Object(V.jsxs)("label",{className:"date-label",children:[Object(V.jsx)("span",{children:"day:"}),Object(V.jsx)("input",{type:"date",ref:g,placeholder:"none",onChange:function(e){var n=D(h,e.target.value),a=D(v,e.target.value);f(n),O(a),t.from(n),t.to(a)}}),Object(V.jsx)("span",{children:k(v).date==k(h).date&&k(h).date||"unset"})]}),Object(V.jsxs)("label",{className:"date-label",children:[Object(V.jsx)("span",{children:"from"}),Object(V.jsx)("input",{type:"time",ref:y,onChange:function(e){var n=g.current.value||k(new Date).serializedDate;console.log(n);var a=D(h,n,e.target.value);console.log(a),f(a),t.from(a)}}),Object(V.jsx)("span",{children:k(h).time})]}),Object(V.jsxs)("label",{className:"date-label",children:[Object(V.jsx)("span",{children:"to"}),Object(V.jsx)("input",{type:"time",ref:w,onChange:function(e){var n=g.current.value||k(new Date).serializedDate,a=D(v,n,e.target.value);O(a),t.to(a)}}),Object(V.jsx)("span",{children:k(v).time})]})]})})]})})]})}var Q={Markup:W,Expression:G,SourceData:function(e){var t=e.handle,n=c.a.createRef(),a=Object(r.useState)(""),i=Object(o.a)(a,2),s=i[0],u=i[1],l=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.current.style.height="inherit",n.current.style.height="".concat(n.current.scrollHeight+2,"px");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=[{title:"Plain",Content:function(){return Object(V.jsxs)("div",{className:"content-container",children:[Object(V.jsxs)("label",{children:[Object(V.jsx)("span",{children:"add text"}),Object(V.jsx)("textarea",{className:"textarea",cols:"25",rows:"4",ref:n,onChange:function(e){u(e.target.value),l(e),t.plain.text(e.target.value)},value:s},"1234")]}),Object(V.jsx)("div",{className:"drop-files-container",children:Object(V.jsxs)("label",{className:"drop-files",style:{transform:"translate(-35%, 20%)"},children:[Object(V.jsx)("span",{children:"drop files"}),Object(V.jsx)("img",{src:Y,className:"drop-img"})]})})]})}},{title:"Social",Content:function(){return Object(V.jsx)("div",{})}},{title:"Neural",Content:function(){return Object(V.jsx)("div",{})}}];return Object(V.jsx)("div",{children:Object(V.jsx)("fieldset",{className:"main-fieldset",children:Object(V.jsx)(B,{tabs:d})})})},FlightControl:function(e){var t=e.handle,n=e.target;return Object(V.jsxs)("div",{className:"main-fieldset content-container",style:{paddingLeft:0},children:[Object(V.jsx)(_,{handle:t.time,target:n.flightControl.time}),Object(V.jsx)(q,{handle:t.notification})]})}},X=function(){function e(){var t,n,a,r,c,i,s,o,u=this;Object(U.a)(this,e),this.subClasses=[(n=t=function(){function e(){Object(U.a)(this,e),this.id=this.generateId(),this.name="letter #"+this.id}return Object(K.a)(e,[{key:"generateId",value:function(){return Date.now()}}]),e}(),t.forProperty="markup",n),(r=a=function e(){Object(U.a)(this,e),this.expectedType="unknown",this.text="unknown"},a.forProperty="expression",r),(i=c=function e(){var t,n,a,r,c,i,s=this;Object(U.a)(this,e),this.subClasses=[(n=t=function e(){Object(U.a)(this,e),this.text="Should be some helpful text here",this.files="Should be some helpful files here"},t.forProperty="plain",n),(r=a=function e(){Object(U.a)(this,e),this.contacts="Should be some helpful passes beyond local system"},a.forProperty="social",r),(i=c=function e(){Object(U.a)(this,e),this.generators=[],this.instances=[]},c.forProperty="neural",i)],this.subClasses.forEach((function(e){return s[e.forProperty]=new e}))},c.forProperty="sourceData",i),(o=s=function e(){Object(U.a)(this,e),this.time={from:"Date when the MEASURE becomes relevant",to:"Date after which the MEASURE is not longer valid (responses will be no longer received)"},this.notification={isDefault:!1}},s.forProperty="flightControl",o)],this.subClasses.forEach((function(e){return u[e.forProperty]=new e}))}return Object(K.a)(e,[{key:"serialize",value:function(){function e(n){var a={};return Object.getOwnPropertyNames(n).filter((function(e){return"function"!==typeof n[e]||"function"==typeof n[e].serialize})).map((function(r){var c=n[r];"function"!=typeof c.serialize?Array.isArray(c)?void 0!=(c=t(c))&&c.length>0&&(a[r]=c):c instanceof Date?a[r]=c.toUTCString():a[r]="object"!=typeof c?c:e(c):a[r]=c.serialize()})),a}function t(n){return n.filter((function(e){return"function"!==typeof e})).map((function(n){return"object"==typeof n?e(n):Array.isArray(n)?t(n):n}))}return e(this)}}]),e}(),Z=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Date).setSeconds(parseInt(n.getSeconds()+10)),t.flightControl.time.from=n.toISOString(),t.flightControl.time.to=n.toISOString(),e.next=6,l.a.post(st+"/scheduledLetters",t);case 6:return a=e.sent,e.abrupt("return",a.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=Object(O.b)("awaitingLetters/postLetter",function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ee=Object(O.c)({name:"awaitingLetters",initialState:{status:"idle"},reducers:{}}).reducer;function te(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),a=new Uint8Array(n.length),r=0;r<n.length;++r)a[r]=n.charCodeAt(r);return a}function ne(){return(ne=Object(v.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=10;break}return e.next=3,l.a.get(st+"/publicVapidKey");case 3:return n=e.sent,a=n.data,e.next=7,navigator.serviceWorker.register("".concat("","/serviceWorker.js"));case 7:return r=e.sent,e.next=10,r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:te(a)}).then((function(e){l.a.post(st+"/subscription",{subscription:e,id:t})}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ae=function(){var e=Object(h.b)(),t=Object(r.useState)("Markup"),n=Object(o.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(new X),s=Object(o.a)(i,2),u=s[0],l=s[1],d=[{title:"Markup",handle:{name:function(e){u.markup.name=e,l(u)}},Content:Q.Markup},{title:"Expression",handle:{expectedType:function(e){u.expression.expectedType=e,l(u)},text:function(e){u.expression.text=e,l(u)}},Content:Q.Expression},{title:"Source Data",handle:{plain:{text:function(e){u.sourceData.plain.text=e,l(u)}}},Content:Q.SourceData},{title:"Flight Control",handle:{time:{from:function(e){u.flightControl.time.from=e,l(u)},to:function(e){u.flightControl.time.to=e,l(u)}},notification:function(e){u.flightControl.notification.isDefault=e,l(u)}},Content:Q.FlightControl}];return Object(V.jsxs)("div",{className:"create-letter-form",children:[Object(V.jsx)(I.a,{activeKey:a,onSelect:function(e){return c(e)},children:d.map((function(e,t){return Object(V.jsx)(H.a,{title:e.title,eventKey:e.title,children:Object(V.jsx)(e.Content,{handle:e.handle,target:u})})}))}),Object(V.jsx)("button",{className:"btn btn-block",onClick:function(){e($(u.serialize())),console.log("subscribing..."),function(e){ne.apply(this,arguments)}(u.markup.id)},children:"Submit"})]})};var re=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.createLetterModal.show}));return Object(V.jsxs)("div",{children:[Object(V.jsx)("button",{type:"button",children:"Open Modal"}),Object(V.jsx)(T.a,{open:t,onClose:function(){return e(P())},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(V.jsx)(ae,{})})]})};var ce=function(){var e=Object(j.e)();return Object(V.jsxs)("footer",{children:[Object(V.jsx)("p",{children:"Copyright \xa9 2021"}),"/"===e.pathname&&Object(V.jsx)(d.b,{to:"/about",children:"About"})]})};var ie=function(){return Object(V.jsxs)("div",{children:[Object(V.jsx)("h4",{children:"Version 1.0.0"}),Object(V.jsx)(d.b,{to:"/",children:"Go back"})]})};var se=function(e){var t,n=e.logRecord,a="0".concat(new Date(n.date).getUTCHours()).slice(-2),r="0".concat(new Date(n.date).getUTCMinutes()).slice(-2);return Object(V.jsxs)("div",{className:"log-record",children:["task"==n.type&&Object(V.jsx)("p",{children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f:"}),Object(V.jsx)("h3",{children:n.header}),Object(V.jsx)("p",{children:n.text}),Object(V.jsx)("p",{children:(null===(t=n.other)||void 0===t?void 0:t.trigger)&&"trigger:  ".concat(n.other.trigger)}),Object(V.jsx)("p",{className:"logrecord-time",children:"".concat(a,":").concat(r)})]})};var oe=function(e){var t=e.onSend,n=e.autosaveAdress,a=void 0!==n&&n,r=c.a.useRef(null);c.a.useEffect((function(){a&&Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(st+"/autosave/".concat(a));case 2:t=e.sent,r.current.value=t.data.value;case 4:case"end":return e.stop()}}),e)})))()}),[]),c.a.useEffect((function(){return setInterval((function(){r.current&&a&&l.a.put(st+"/autosave/".concat(a),{id:"".concat(a),value:"".concat(r.current.value)})}),5e3)}),[]);var i=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.current.style.height="inherit",r.current.style.height="".concat(r.current.scrollHeight+2,"px");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.jsxs)("div",{className:"logtextarea-container",children:[Object(V.jsx)("textarea",{ref:r,onChange:i,className:"log-textarea"}),Object(V.jsx)("img",{className:"send-button",onClick:function(){t(r.current.value),r.current.value=""},src:"https://image.flaticon.com/icons/png/512/60/60525.png",alt:""})]})};var ue=function(){var e=Object(h.b)(),t=function(){var t=Object(v.a)(p.a.mark((function t(n){var a,r,c=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"",r={type:"text record",id:Date.now(),header:a,text:n,date:Date.now()},console.log(r),t.next=5,e(g(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(V.jsx)(oe,{onSend:t,autosaveAdress:"log-textarea"})};var le,de=function(){var e=Object(h.c)((function(e){return e.log.logData})),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return Object(V.jsx)("div",{className:"log-container",children:e.slice(0).reverse().map((function(e,n,a){var r,c,i=new Date(a[n].date).getUTCDate(),s=new Date(Date.now()).getUTCDate(),o=new Date(null===(r=a[n-1])||void 0===r?void 0:r.date).getUTCDate()||s,u=new Date(a[n].date).getUTCMonth(),l=new Date(Date.now()).getUTCMonth(),d=new Date(null===(c=a[n-1])||void 0===c?void 0:c.date).getUTCMonth()||l;return Object(V.jsxs)("div",{children:[Object(V.jsx)(se,{logRecord:e},e.id),(o>i||d>u)&&Object(V.jsx)("div",{className:"log-datelabel",children:"".concat(t[d+1]," ").concat("0".concat(o).slice(-2))})]})}))})},je=Object(O.b)("articles/fetchArticles",Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(st+"/articles");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),he=Object(O.b)("articles/postArticle",function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put(st+"/articles/".concat(t.id),t);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),fe=Object(O.c)({name:"articles",initialState:{articlesData:[123],status:"idle"},reducers:{},extraReducers:(le={},Object(f.a)(le,je.fulfilled,(function(e,t){var n=t.payload;e.articlesData=n,e.status="success"})),Object(f.a)(le,he.fulfilled,(function(e,t){var n=t.payload;e.articlesData.push(n),e.status="success",console.log(Object(x.a)(e.articlesData))})),le)}).reducer;var be=function(e){e.article,Object(h.b)();var t=c.a.createRef(null),n=c.a.createRef(null),a=c.a.useState(!1),r=Object(o.a)(a,2),i=r[0],s=(r[1],function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.current.style.height="inherit",n.current.style.height="".concat(n.current.scrollHeight+2,"px"),t.current.style.height="inherit",t.current.style.height="".concat(t.current.scrollHeight+2,"px");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(V.jsxs)("div",{children:[Object(V.jsxs)("header",{className:"header",children:[Object(V.jsx)("textarea",{className:"header-textarea".concat(i?"":"-disabled"),placeholder:i&&"Title of the article",ref:t,readOnly:!i,onChange:s}),Object(V.jsx)(M,{text:i?"post":"edit",onClick:function(){}})]}),Object(V.jsx)("textarea",{className:"content-textarea".concat(i?"":"-disabled"),placeholder:i&&"Content of the article",ref:n,readOnly:!i,onChange:s})]})},pe=n(59),ve=(n(94),n(188)),Oe=n(189),xe=Object(ve.a)();function me(e){var t=e.options,n=e.style,a=e.handleValue,i=c.a.useState(null),s=Object(o.a)(i,2),u=s[0],l=s[1],d=c.a.useState(null),j=Object(o.a)(d,2),h=j[0],f=j[1];return Object(r.useEffect)((function(){a(null===u||void 0===u?void 0:u.title)}),[u]),Object(V.jsx)(Oe.a,{style:n,value:u,onChange:function(e,t){console.log(e.target.newValue),"string"===typeof t?l({title:t}):t&&t.inputValue?l({title:t.inputValue}):l(t)},onInputChange:function(e,t){f(t),console.log(h)},filterOptions:function(e,t){var n=xe(e,t);return""!==t.inputValue&&n.push({inputValue:t.inputValue,title:'Add "'.concat(t.inputValue,'"')}),n},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:t,getOptionLabel:function(e){var t;return"string"===typeof e?e:e.inputValue?e.inputValue.toString():(null===(t=e.title)||void 0===t?void 0:t.toString())||""},renderOption:function(e){var t;return(null===(t=e.title)||void 0===t?void 0:t.toString())||""},freeSolo:!0,renderInput:function(e){return Object(V.jsx)("div",{ref:e.InputProps.ref,children:Object(V.jsx)("input",Object(E.a)({style:n,type:"text"},e.inputProps))})}})}var ge,ye=n(41),we=function e(){var t=this;Object(U.a)(this,e),this.isNotEmpty=!1,this.events=[],this.id=Date.now(),this.load=function(){return t.isNotEmpty=!0,t},this.setName=function(e){return t.name=e,t},this.addEvent=function(e,n){return t.events=[].concat(Object(ye.a)(t.events),[{choiceName:e,eventName:n}]),t.load(),t},this.receiveEvent=function(e,n){return t.events=t.events.filter((function(t){return t.choiceName!==e})),t.addEvent(e,n),t},this.serialize=function(){return{id:t.id,name:t.name,events:t.events}},this.deserialize=function(t){var n=(new e).setName(t.name);return n.id=t.id,t.events.forEach((function(e){return n.addEvent(e.choiceName,e.eventName)})),n}},Ne=function e(t){var n=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(U.a)(this,e),this.name=t,this.variants=a,this.addVariant=function(e){return n.variants=[].concat(Object(ye.a)(n.variants),[e]),n},this.receiveVariant=function(e){var t,a=n.variants.findIndex((function(t){return(null===t||void 0===t?void 0:t.name)==(null===e||void 0===e?void 0:e.name)}));a>-1?null===(t=n.variants[a])||void 0===t||t.addWeight():n.addVariant(e);return n},this.serializeVariants=function(){var e;return null===(e=n.variants)||void 0===e?void 0:e.map((function(e){return e.serialize()}))},this.serialize=function(){return{name:n.name,variants:n.serializeVariants()}},this.deserialize=function(t){var n;return new e(t.name,null===(n=t.variants)||void 0===n?void 0:n.map((function(e){return(new De).deserialize(e)})))}},De=function e(){var t=this;Object(U.a)(this,e),this.id=Date.now(),this.name="",this.weight=0,this.choices=[],this.causes=[],this.receiveName=function(e){return!t.name&&(t.name=e),t},this.addWeight=function(){return t.weight++,t},this.addChoice=function(e){return t.choices=[].concat(Object(ye.a)(t.choices),[e]),t},this.receiveChoice=function(e){var n=t.choices.findIndex((function(t){return(null===t||void 0===t?void 0:t.name)==(null===e||void 0===e?void 0:e.name)}));return n>-1?e.variants.forEach((function(e){return t.choices[n].receiveVariant(e)})):t.addChoice(e),t},this.addData=function(n){var a;return console.log(n.name),t.receiveName(n.name),n.isNotEmpty&&t.addWeight(),null===(a=n.events)||void 0===a||a.forEach((function(n){var a=(new e).addData({name:n.eventName,isNotEmpty:!0}),r=new Ne(n.choiceName).receiveVariant(a);t.receiveChoice(r)})),t},this.serializeChoices=function(){var e;return null===(e=t.choices)||void 0===e?void 0:e.map((function(e){return e.serialize()}))},this.serialize=function(){return{id:t.id,name:t.name,choices:t.serializeChoices(),weight:t.weight,causes:t.causes}},this.deserialize=function(t){var n,a=(new e).receiveName(t.name);for(a.id=t.id,a.choices=null===(n=t.choices)||void 0===n?void 0:n.map((function(e){return(new Ne).deserialize(e)})),t.weight;t.weight>0;t.weight--)a.addWeight();return a}},ke=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(st+"/variants");case 2:return(t=e.sent).data=t.data.map((function(e){return(new De).deserialize(e)})),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke();case 2:return n=e.sent,console.log(n),a=t.map(function(){var e=Object(v.a)(p.a.mark((function e(t){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.find((function(e){return e.name==t.name})),console.log(c),!c){e.next=9;break}return r=(new De).deserialize(c).addData(t).serialize(),e.next=6,l.a.put(st+"/variants/".concat(c.id),r);case 6:a=e.sent,e.next=13;break;case 9:return r=(new De).receiveName(t.name).addData(t).serialize(),e.next=12,l.a.post(st+"/variants",r);case 12:a=e.sent;case 13:return console.log(123),e.abrupt("return",a);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=Object(v.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post(st+"/foo");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(v.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put(st+"/foo");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=Object(O.b)("variants/fetchVariants",Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ke());case 1:case"end":return e.stop()}}),e)})))),ze=Object(O.b)("variants/postVariants",function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ce(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Me=Object(O.b)("variants/deleteVariants",function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Se(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Re=Object(O.b)("variants/changeVariants",function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ee(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ae=Object(O.c)({name:"variants",initialState:{variantsData:[],eventsData:[],status:"idle"},reducers:{addEventData:function(e,t){var n=t.payload;e.eventData=[].concat(Object(ye.a)(e.eventData),[n.data])},createAllEventsData:function(e){e.eventsData=e.variantsData.map((function(e){return(new we).setName(e.name)}))},receiveEvent:function(e,t){var n=t.payload;e.eventsData=e.eventsData.map((function(e){return e.name==n.name?e.receiveEvent(n.event.choiceName,n.event.variantName):e}))},addVariant:function(e,t){var n=t.payload;e.variantsData=[].concat(Object(ye.a)(e.variantsData),[n]),e.eventsData=[].concat(Object(ye.a)(e.eventsData),[(new we).setName(n.name)])},addChoice:function(e,t){var n=t.payload;e.variantsData=e.variantsData.map((function(e){return e.id==n.id?e.receiveChoice(new Ne(n.choiceName)):e}))},addVariantToChoice:function(e,t){var n=t.payload;e.variantsData=e.variantsData.map((function(e){return e.choices=e.choices.map((function(e){return e.name==n.choiceName?e.receiveVariant(n.variant):e})),e}))}},extraReducers:(ge={},Object(f.a)(ge,Ve.fulfilled,(function(e,t){var n=t.payload;e.variantsData=n,e.eventsData=e.variantsData.map((function(e){return(new we).setName(e.name)})),console.log(Object(x.a)(e).variantsData),e.status="success"})),Object(f.a)(ge,ze.fulfilled,(function(e,t){var n=t.payload;console.log(n),e.status="success"})),Object(f.a)(ge,Me.fulfilled,(function(e,t){e.variantsData=e.variantsData.filter((function(e){return e.id!==t.payload}))})),Object(f.a)(ge,Re.fulfilled,(function(e,t){e.variantsData=e.variantsData.map((function(e){return e.id==t.payload.id&&(e=t.payload),e}))})),ge)}),Te=Ae.actions,Le=(Te.addEventData,Te.modifyEventData,Te.addChoice),Pe=Te.addVariant,Fe=Te.addVariantToChoice,Ie=(Te.createAllEventsData,Te.receiveEvent),He=Ae.reducer;var Ue=function(e){var t=e.choice,n=e.type,a=void 0===n?"unfolded":n,r=e.handle,i=Object(h.b)(),s=c.a.useState(),u=Object(o.a)(s,2),l=u[0],d=u[1];return Object(V.jsxs)(V.Fragment,{children:["unfolded"==a&&Object(V.jsxs)("div",{className:"choice",children:[Object(V.jsx)("label",{className:"choice-name",children:t.name}),t.variants.map((function(e,n){return Object(V.jsx)("div",{className:"variant-name",style:l==n?{backgroundColor:"#66ff99"}:null,onClick:function(){return function(e,n){r(t.name,e.name),d(n)}(e,n)},children:e.name+": "+e.weight})})),Object(V.jsx)("div",{className:"add-variant-button",onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:prompt("Give name to a variant:").toLocaleLowerCase(),n=(new De).receiveName(e);i(Fe({choiceName:t.name,variant:n}))}()},children:"Add"})]}),"folded"==a&&Object(V.jsx)(me,{options:t.variants.map((function(e){return{title:e.name}})),handleValue:function(e){e&&r(t.name,e)},style:{width:"100px",height:30,padding:0,marginLeft:5,marginRight:10}})]})};var Ke=function(e){var t=e.variant,n=Object(h.b)(),a=c.a.useState(!0),r=Object(o.a)(a,2),i=r[0],s=r[1],u=function(e,a){n(Ie({name:t.name,event:{choiceName:e,variantName:a}}))};return Object(V.jsxs)("div",{className:"container".concat(i?" folded":""),children:[Object(V.jsx)("button",{className:"fold-unfold",style:{backgroundImage:"url()"},onClick:function(){s(!i)}}),Object(V.jsx)("div",{className:"choices-container",children:i?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("h3",{children:t.name+": "+t.weight}),t.choices.map((function(e){return Object(V.jsx)(Ue,{choice:e,handle:u,type:"folded"})}))]}):Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("div",{className:"choice",children:[Object(V.jsx)("label",{className:"choice-name",children:"Variant"}),Object(V.jsx)("h3",{className:"variant-name",children:t.name+": "+t.weight})]}),t.choices.map((function(e){return Object(V.jsx)(Ue,{choice:e,handle:u,type:"unfolded"})}))]})}),Object(V.jsx)("button",{className:"add-choice-button",onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:prompt("Give name to a choice:").toLowerCase();n(Le({id:t.id,choiceName:e}))}()}})]})};var We=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.variants.variantsData}));return c.a.useEffect((function(){e(Ve())}),[e]),Object(V.jsxs)(V.Fragment,{children:[t.map((function(e){return Object(V.jsx)(Ke,{variant:e})})),Object(V.jsx)("button",{onClick:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:prompt("Give name to a variant:").toLowerCase(),n=(new De).receiveName(t);e(Pe(n))}()},className:"add-variant-button big",children:"Add variant"})]})};n(152);var Je=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.variants.eventsData}));return Object(h.c)((function(e){return e.variants.variantsData})),Object(V.jsxs)("div",{className:"this-container",children:[Object(V.jsx)(We,{}),Object(V.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Events",onClick:function(){e(ze(t)),e(N())}}),Object(V.jsx)("div",{className:"to-do",children:"div - form, prevent default for button"})]})};var Be=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.mindScrapModal.show}));return Object(V.jsx)("div",{children:Object(V.jsxs)(pe.a,{show:t,onHide:function(){return e(N())},contentClassName:"modal-90-content",dialogClassName:"modal-90-dialog",centered:!0,children:[Object(V.jsx)(pe.a.Header,{children:"Open your mind. Litrally"}),Object(V.jsx)(pe.a.Body,{children:Object(V.jsx)(Je,{})})]})})},Ge=(n(104),Object(O.c)({name:"details",initialState:{showDetails:"",status:"idle"},reducers:{setShowDetails:function(e,t){var n=t.payload;e.showDetails=n}}})),Ye=(Ge.actions.setShowDetails,Ge.reducer);function qe(){return(qe=Object(v.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.a.post(st+"/answerLetter",{id:t,data:n});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _e=function(e){var t=e.letter;function n(){Object(h.b)();function e(e){!function(e,t){qe.apply(this,arguments)}(t.markup.id,e.target.value)}switch(t.expression.expectedType){case"bool":return Object(V.jsxs)("div",{className:"letter-keyboard",children:[Object(V.jsx)("button",{onClick:e,value:"true",children:"\u0422\u0430\u043a"}),Object(V.jsx)("button",{onClick:e,value:"false",children:"\u041d\u0456"})]});default:return Object(V.jsx)("div",{className:"letter-keyboard",children:Object(V.jsx)("button",{onClick:e,value:"default",children:"Read"})})}}return Object(V.jsxs)("div",{children:[Object(V.jsx)("h3",{children:t.markup.name}),Object(V.jsxs)("p",{children:["Analyze: ",t.sourceData.text]}),Object(V.jsxs)("p",{children:["Expression: ",t.expression.text]}),Object(V.jsx)(n,{})]})};var Qe=function(){var e=Object(h.b)();Object(r.useEffect)((function(){e(C())}),[e]);var t=Object(h.c)((function(e){return e.inbox.inboxData}));return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{className:"tasks-container",children:t.map((function(e){return Object(V.jsx)(_e,{letter:e},e.markup.id)}))})})};var Xe,Ze=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.inbox.inboxData})),n=(Object(h.c)((function(e){return e.log.logData})),Object(r.useState)()),a=Object(o.a)(n,2);return a[0],a[1],Object(r.useEffect)((function(){console.log("fetchInbox"),e(C())}),[e]),Object(r.useEffect)((function(){e(m())}),[e]),Object(r.useEffect)((function(){return document.querySelectorAll("textarea").forEach((function(e){return e.spellcheck=!1}))})),Object(V.jsxs)(d.a,{children:[Object(V.jsx)(j.a,{path:"/",exact:!0,render:function(n){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Be,{}),Object(V.jsx)("h1",{className:"main-title",children:"All in all, human is a variant"}),Object(V.jsx)("button",{className:"mind-modal-button",onClick:function(){return e(N())},children:"manual message catch/map"}),Object(V.jsxs)("div",{className:"main-container",children:[Object(V.jsxs)("div",{className:"sub-container",children:[Object(V.jsx)(A,{title:"Inbox",color:"#ffe4e1"}),Object(V.jsx)(re,{}),t.length>0?Object(V.jsx)(Qe,{}):"You have no tasks lazy bitch"]}),Object(V.jsxs)("div",{className:"sub-container",children:[Object(V.jsx)(A,{title:"History",color:"#f2eecb"}),Object(V.jsx)(de,{}),Object(V.jsx)(ue,{})]})]}),Object(V.jsx)(ce,{})]})}}),Object(V.jsx)(j.a,{path:"/about",exact:!0,render:function(e){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{className:"main-container",children:Object(V.jsxs)("div",{className:"sub-container",style:{width:"90%",minHeight:"650px"},children:[Object(V.jsx)(A,{title:"Hints and other important info",color:"#e8f48c"}),Object(V.jsx)(be,{})]})}),Object(V.jsx)(ie,{})]})}})]})},$e=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},et=n(105),tt=n.n(et),nt=Object(O.c)({name:"scales",initialState:{priorityScale:5,probabilityScale:10},reducers:{}}).reducer,at=Object(O.c)({name:"tasksFilterSlice",initialState:{priority:"",probability:"",filterOn:!1,show:!1},reducers:{setPriority:function(e,t){e.priority=t.payload,console.log(x.a.priority)},setProbability:function(e,t){e.probability=t.payload},filterSwitch:function(e){e.filterOn=!e.filterOn},toggleShowFilter:function(e){e.show=!e.show}}}),rt=at.actions,ct=(rt.setPriority,rt.setProbability,rt.filterSwitch,rt.toggleShowFilter,at.reducer),it=Object(O.a)({reducer:{header:tt.a,log:y,articles:fe,createLetterModal:F,details:Ye,scales:nt,tasksFilter:ct,variants:He,mindScrapModal:D,awaitingLetters:ee,inbox:S}});s.a.render(Object(V.jsx)(c.a.StrictMode,{children:Object(V.jsx)(h.a,{store:it,children:Object(V.jsx)(Ze,{})})}),document.getElementById("root")),$e(),Xe="https://myfirstbackend1.herokuapp.com";var st=t.default=Xe},92:function(e,t,n){},94:function(e,t,n){}},[[156,1,2]]]);
//# sourceMappingURL=main.be6d8e77.chunk.js.map