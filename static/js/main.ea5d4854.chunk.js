(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(74)},35:function(e,t,a){},37:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(26),r=a.n(c),u=(a(35),function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,76)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})}),i=a(12),o=a(1),s=a(3),m=(a(37),a(27)),d=(a(43),a(9)),p=a.n(d),b=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(s.a)(r,2),i=u[0],d=u[1],b=Object(n.useState)(""),h=Object(s.a)(b,2),f=h[0],E=h[1],g=Object(n.useState)(""),N=Object(s.a)(g,2),S=N[0],v=N[1],k=Object(n.useState)(""),P=Object(s.a)(k,2),D=P[0],A=P[1],y=Object(n.useState)(""),B=Object(s.a)(y,2),j=B[0],O=B[1],C=Object(n.useState)(""),I=Object(s.a)(C,2),T=I[0],w=I[1],F=Object(n.useState)(""),x=Object(s.a)(F,2),L=x[0],K=x[1],W=Object(n.useState)("default"),z=Object(s.a)(W,2),M=z[0],V=z[1],G={headers:{"Content-Type":"application/x-wwww-form-urlencoded"}},H=Object(n.useState)(l.a.createElement("p",null)),J=Object(s.a)(H,2),U=J[0],R=J[1],$=Object(o.f)(),q=function(e){c(e.target.value)},_=function(e){d(e.target.value)},Q=function(e){E(e.target.value)},X=function(e){v(e.target.value)},Y=function(e){A(e.target.value)},Z=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("label",{className:"LabelSize"},"Size (MB)"),l.a.createElement("input",{id:"#size",type:"text",className:"inputDvd",defaultValue:i,onChange:_}),l.a.createElement("br",null),l.a.createElement("b",{className:"dvdDescr"},"Please, provide DVD size in MB."))},ee=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("label",{className:"LabelSize"},"Weight (Kg)"),l.a.createElement("input",{id:"#weight",className:"inputbook",defaultValue:a,onChange:q}),l.a.createElement("br",null),l.a.createElement("b",{className:"BookDescr"},"Please, provide book weight in Kg."))},te=function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("label",{className:"LabelSize"},"Height (CM)"),l.a.createElement("input",{id:"#height",className:"inputfurn",defaultValue:f,onChange:Q}),l.a.createElement("br",null),l.a.createElement("label",{className:"LabelSize"},"Width (CM) "),l.a.createElement("input",{id:"#width",className:"inputfurn",defaultValue:S,onChange:X}),l.a.createElement("br",null),l.a.createElement("label",{className:"LabelSize"},"Lenght (CM)"),l.a.createElement("input",{id:"#lenght",className:"inputfurn",defaultValue:D,onChange:Y}),l.a.createElement("br",null),l.a.createElement("b",{className:"dvdDescr"},"Please, provide Dimension in HxWxL."))},ae=function(){var e=function(){var e=!1,t=!1;return""!==j&&""!==T&&""!==L&&"default"!==M||(e=!0),parseFloat(L).toString()!==L&&(t=!0),"dvd"===M&&(""===i&&(e=!0),parseFloat(i).toString()!==i&&(t=!0)),"book"===M&&(""===a&&(e=!0),parseFloat(a).toString()!==a&&(t=!0)),"furniture"===M&&(""!==f&&""!==D&&""!==S||(e=!0),parseFloat(f).toString()===f&&parseFloat(D).toString()===D&&parseFloat(S).toString()===S||(t=!0)),{IsEmpty:e,IsNotDataType:t}}();if(e.IsEmpty)alert("Please, submit required data");else{if(!e.IsNotDataType)return"Successed";alert("Please, provide the data of indicated type")}};return l.a.createElement("div",null,l.a.createElement("form",{id:"product_form",onSubmit:function(e){e.preventDefault();var t={SKU:j,Name:T,Price:L,Attribute:""};if("Successed"===ae()){switch(M){case"dvd":t.Attribute=i,p.a.post("http://localhost/php/products/Dvd.php",t).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)});break;case"book":t.Attribute=a,p.a.post("http://localhost:80/php/Products/Book.php",t,G).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)});break;case"furniture":t.Attribute=f+" "+S+" "+D,p.a.post("http://localhost:80/php/Products/Furniture.php",t,G).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}console.log(t),$("/"),window.location.reload(),console.log("Form Submitted")}}},l.a.createElement("h1",{className:"Header"},"Product Add"),l.a.createElement("input",{type:"button",value:"Cancel",className:"CancelBtn",onClick:function(){return $("/")}}),l.a.createElement("input",{type:"submit",value:"Save",className:"SaveBtn"}),l.a.createElement("hr",{className:"line"}),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"SKU"),l.a.createElement("input",{type:"text",className:"inputfieldSKU",id:"#sku",value:j,onChange:function(e){O(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"label"},"Name"),l.a.createElement("input",{type:"text",className:"inputfieldName",id:"#name",value:T,onChange:function(e){w(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",{className:"label"},"Price ($) "),l.a.createElement("input",{className:"inputfieldPrice",id:"#price",value:L,onChange:function(e){K(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("div",{className:"typeSwitcher"},l.a.createElement("label",{className:"label"},"Type Switcher"),l.a.createElement(m.a,{className:"LBox",data:[{id:0,name:"DVD"},{id:1,name:"Book"},{id:2,name:"Furniture"}],dataKey:"id",textField:"name",onChange:function(e){0===(e=e.id)?(R(Z),V("dvd"),document.getElementById("#size")):2===e?(R(te),V("furniture")):1===e?(R(ee),V("book")):(R(),V("default"))},defaultValue:"Select an option"}))),U,l.a.createElement("hr",{className:"line"})))},h=(a(67),a(70),[]),f=function(e){return 0==e||e?h.includes(e)?void(h=h.filter(function(t){return t!==e})):(h.push(e),console.log(h)):h},E=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],r=a[1];return l.a.createElement("div",{className:"ProductMain"},l.a.createElement("input",{id:e.ID,type:"checkbox",className:"delete-checkbox",onChange:function(){r(!c),f(e.ID)}}),l.a.createElement("div",{className:"Product"},l.a.createElement("h5",{className:"Sku"},e.Sku),l.a.createElement("h5",null,e.Name),l.a.createElement("h5",null,e.Price," $"),l.a.createElement("h5",null,e.AttType," ",e.Attribute," ")))},g=(a(72),function(e){return e.items.length,l.a.createElement("div",{className:"Frame"},l.a.createElement("ul",null,e.items.sort(function(e,t){return e.PrdID-t.PrdID}).map(function(e){return l.a.createElement(E,{ID:e.PrdID,Sku:e.Sku,Name:e.Name,Price:e.Price,AttType:e.AttType,Attribute:e.Attribute})})))}),N=function(e){p.a.post("http://localhost/php/database/deleteitems.php",e).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},S=[{PrdID:0,Sku:"TR512313",Name:"CdDvD",Price:"35",Attribute:"700",AttType:"Size  : 700MB"},{PrdID:1,Sku:"JS4546",Name:"Furniture",Price:"100",Attribute:"50x90x70",AttType:"Dimension : 50x90x70"},{PrdID:5,Sku:"Bk1534",Name:"Book",Price:"12",Attribute:"1",AttType:"Weight (KG) :"},{PrdID:3,Sku:"Bk1534",Name:"Book",Price:"12",Attribute:"1",AttType:"Weight (KG) :"},{PrdID:12,Sku:"Bk1534",Name:"Book",Price:"12",Attribute:"1",AttType:"Weight (KG) :"},{PrdID:9,Sku:"Bk1534",Name:"Book",Price:"12",Attribute:"1",AttType:"Weight (KG) :"},{PrdID:5,Sku:"Bk1534",Name:"Book",Price:"12",Attribute:"1",AttType:"Weight (KG) :"},{PrdID:14,Sku:"Bk1534",Name:"Book",Price:"12",Attribute:"1",AttType:"Weight (KG) :"},{PrdID:75,Sku:"Bk1534",Name:"Book",Price:"12",Attribute:"1",AttType:"Weight (KG) :"},{PrdID:34,Sku:"Bk1534",Name:"Book",Price:"12",Attribute:"1",AttType:"Weight :"}];var v=function(){var e=Object(o.f)(),t=Object(n.useState)(S),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(function(){fetch("http://localhost/php/?action=getproducts",{method:"POST",action:"project"}).then(function(e){return e.json()}).then(function(e){return r(e)}).catch(function(e){return console.log(e)})},[]),l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"HeadProduct"},"Product List"),l.a.createElement("input",{type:"button",id:"#delete-product-btn",className:"DeleteBtn",value:"MASS DELETE ",onClick:function(){var e=f();0!==e.length&&(N(e),window.location.reload())}}),l.a.createElement("input",{type:"button",className:"AddBtn",value:"ADD",onClick:function(){return e("/addproduct")}}),l.a.createElement("hr",{className:"Line"}),l.a.createElement(g,{items:c}),l.a.createElement("hr",{className:"Line"}))};var k=function(){return l.a.createElement(i.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(v,null)}),l.a.createElement(o.a,{path:"addproduct",element:l.a.createElement(b,null)})))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null))),u()}},[[28,3,2]]]);
//# sourceMappingURL=main.ea5d4854.chunk.js.map