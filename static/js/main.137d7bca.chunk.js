(this.webpackJsonpzipf=this.webpackJsonpzipf||[]).push([[0],{170:function(e,t,n){},347:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n(1),r=n.n(a),o=n(47),s=n.n(o),i=(n(170),n(77)),j=n(13);n(347),n(348),n(349);function l(e){console.log("a");var t=function(e){var t=/\w+/g;return e.toLowerCase().match(t).reduce((function(e,t){return e.hasOwnProperty(t)?e[t]=e[t]+1:e[t]=1,e}),{})}(e.replace(/\r?\n|\r/g,"").replace(/\r?\'|\r/g,"")),n=[];for(var c in t)n.push([c,t[c]]);n.sort((function(e,t){return e[1]-t[1]})),console.log(JSON.stringify(n));var a=parseInt(n[n.length-1][1]),r=[];return n.reverse().map((function(e,t){console.log(e),r.push({name:e[0],actual:e[1],expected:Math.round(a/(t+1))})})),console.log(r),r}l("Hello my name is Ashwin. This is a sentence");var h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),h=s[0],d=s[1];return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsxs)("div",{style:{flex:1},children:[Object(c.jsx)("textarea",{value:n,onChange:function(e){return r(e.target.value)},style:{width:"90%",height:"200px",minHeight:"200px",maxHeight:"600px",resize:"vertical"}}),Object(c.jsx)("button",{onClick:function(){d(l(n))},children:"Graph Data"})]}),Object(c.jsx)("div",{style:{color:"black",flex:2,width:"50%",height:"35%",margin:"0px"},children:Object(c.jsxs)(j.d,{width:700,height:500,data:h,margin:{top:5,right:5,left:5,bottom:5},children:[Object(c.jsx)(j.a,{strokeDasharray:"3 3"}),Object(c.jsx)(j.f,{dataKey:"name",hide:!0}),Object(c.jsx)(j.g,{}),Object(c.jsx)(j.e,{}),Object(c.jsx)(j.b,{}),Object(c.jsx)(j.c,{type:"monotone",dataKey:"expected",stroke:"#8884d8",activeDot:{r:5},dot:Object(c.jsx)("div",{})}),Object(c.jsx)(j.c,{type:"monotone",dataKey:"actual",stroke:"#FF0000",activeDot:{r:5},dot:Object(c.jsx)("div",{})})]})})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,354)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),d()}},[[352,1,2]]]);
//# sourceMappingURL=main.137d7bca.chunk.js.map