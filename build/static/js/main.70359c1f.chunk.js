(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(27)},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(14),i=a(29),l=a(31),c=a(30),o=a(3),u=a(4),h=a(6),m=a(5),p=a(7);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).myInput=n.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},n.a.createElement("h1",null,"Please Enter A Store"),n.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:v()}),n.a.createElement("button",{type:"submit"},"Visit Store"))}}]),t}(n.a.Component),g=a(10),y=function(e){return n.a.createElement("header",{className:"top"},n.a.createElement("h1",null,"Catch",n.a.createElement("span",{className:"ofThe"},n.a.createElement("span",{className:"of"},"Of"),n.a.createElement("span",{className:"the"},"The")),"Day"),n.a.createElement("h3",{className:"tagline"},n.a.createElement("span",null,e.tagline)))},E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.fishes[e],r=a.props.order[e];return"available"===t.status?n.a.createElement("li",{key:e},r," lbs ",t.name,d(r*t.price),n.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7")):n.a.createElement("li",{key:e},"Sorry ",t?t.name:"fish"," is no longer available")},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var r=e.props.fishes[a],n=e.props.order[a];return r&&"available"===r.status?t+n*r.price:t},0);return n.a.createElement("div",{className:"order-wrap"},n.a.createElement("h1",null,"Order"),n.a.createElement("ul",{className:"order"},t.map(this.renderOrder)),n.a.createElement("div",{className:"total"},"total :",n.a.createElement("strong",null,d(a))))}}]),t}(n.a.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).nameRef=n.a.createRef(),a.priceRef=n.a.createRef(),a.statusRef=n.a.createRef(),a.descRef=n.a.createRef(),a.imageRef=n.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish},n.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),n.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),n.a.createElement("select",{name:"status",ref:this.statusRef},n.a.createElement("option",{value:"available"},"Fresh!"),n.a.createElement("option",{value:"unavailable"},"Sold Out!")),n.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),n.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),n.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(n.a.Component),j=a(11),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e){console.log(e.currentTarget.value);var t=Object(g.a)({},a.props.fish,Object(j.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.index,t)},a.console=function(){console.log(a.props.index)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"fish-edit"},n.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),n.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),n.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status},n.a.createElement("option",{value:"available"},"Fresh!"),n.a.createElement("option",{value:"unavailable"},"Sold Out!")),n.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),n.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),n.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),t}(n.a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"inventory"},n.a.createElement("h1",null,"Inventory"),Object.keys(this.props.fishes).map(function(t){return n.a.createElement(F,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})}),n.a.createElement(O,{addFish:this.props.addFish}),n.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Fish"))}}]),t}(n.a.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,r=t.name,s=t.price,i=t.desc,l="available"===t.status;return n.a.createElement("li",{className:"menu-fish"},n.a.createElement("img",{src:a,alt:r}),n.a.createElement("h3",{className:"fish-name"},r,n.a.createElement("span",{className:"price"},d(s))),n.a.createElement("p",null,i),n.a.createElement("button",{disabled:!l,onClick:function(){return e.props.addToOrder(e.props.index)}},l?"add to order":"Sold out"))}}]),t}(n.a.Component),S={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(g.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.updateFish=function(e,t){var r=Object(g.a)({},a.state.fishes);r[e]=t,a.setState({fishes:r})},a.deleteFish=function(e){var t=Object(g.a)({},a.state.fishes);delete t[e],a.setState({fishes:t}),console.log(t)},a.loadSampleFishes=function(){a.setState({fishes:S})},a.addToOrder=function(e){var t=Object(g.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(g.a)({},a.state.order);delete t[e],a.setState({order:t})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"catch-of-the-day"},n.a.createElement("div",{className:"menu"},n.a.createElement(y,{tagline:"Fresh Seafood Market"}),n.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map(function(t){return n.a.createElement(k,{key:t,index:t,details:e.state.fishes[t],addToOrder:e.addToOrder})}))),n.a.createElement(E,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),n.a.createElement(w,{addFish:this.addFish,loadSampleFishes:this.loadSampleFishes,updateFish:this.updateFish,deleteFish:this.deleteFish,fishes:this.state.fishes}))}}]),t}(n.a.Component),N=function(){return n.a.createElement("h1",null,"No Page found!!!")},R=function(){return n.a.createElement(i.a,null,n.a.createElement(l.a,null,n.a.createElement(c.a,{exact:!0,path:"/",component:b}),n.a.createElement(c.a,{path:"/store/:storeId",component:C}),n.a.createElement(c.a,{component:N})))};a(25);Object(s.render)(n.a.createElement(R,null),document.getElementById("main"))}},[[16,2,1]]]);
//# sourceMappingURL=main.70359c1f.chunk.js.map