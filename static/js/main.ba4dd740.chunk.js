(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{19:function(e,t,n){e.exports=n(47)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),c=n.n(l),o=n(2),s=n.n(o),u=n(3),i=n(14),m=n(15),p=n(18),d=n(17),h=n(16),f=n.n(h),E=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=u")},v=r.a.createContext({filteredResults:[]});n(42);var g=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory")))};n(43);var C=function(e){return r.a.createElement("div",{className:"searchBoxHolder container-fluid"},r.a.createElement("div",{className:"input-group input-group-sm mb-3"},r.a.createElement("input",{onChange:e.handleInputChange,type:"text",className:"form-control",placeholder:"Search"})))};n(44);var b=function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name ",r.a.createElement("button",{onClick:e.handleClick},"sortbylast")),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))};n(45);var y=function(e){var t=new Date(e.dob);return r.a.createElement("tr",{className:"tableRow"},r.a.createElement("th",{scope:"row"},r.a.createElement("img",{src:e.image,alt:"employee's thumbnail"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,r.a.createElement("a",{href:"#"},e.email)),r.a.createElement("td",null,"".concat(t.getMonth()+1,"-").concat(t.getDate(),"-").concat(t.getFullYear())))};n(46);var w=function(e){var t=Object(a.useContext)(v).filteredResults;return r.a.createElement("div",{className:"table-responsive-lg"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement(b,{handleClick:e.handleClick})),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(y,{key:e.cell,name:e.name.first+" "+e.name.last,image:e.picture.medium,phone:e.phone,email:e.email,dob:e.dob.date.substring(0,10)})})))))};var k=function(e){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(g,null),r.a.createElement(C,{handleInputChange:e.handleInputChange}),r.a.createElement(w,{handleClick:e.handleClick}))},N=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={filteredResults:[],results:[]},e.getEmployeeList=function(){E().then((function(t){return e.setState({filteredResults:t.data.results,results:t.data.results})})).catch((function(e){return console.log(e)}))},e.setUpSorter=function(e,t){var n=e.name.last.toLowerCase(),a=t.name.last.toLowerCase(),r=0;return n>a?r=1:n<a&&(r=-1),r},e.sortMeUp=function(t,n){var a=e.setUpSorter(t,n);return a*=1},e.sortMeDown=function(t,n){var a=e.setUpSorter(t,n);return a*=-1},e.handleClick=function(){var t=Object(u.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=[],a=e.state.filteredResults[0].name.last.startsWith("A")?e.sortMeDown:e.sortMeUp,t.next=5,e.setState({filteredResults:e.state.results.sort(a)});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInputChange=function(){var t=Object(u.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=n.target.value,t.next=4,e.setState({filteredResults:e.state.results.filter((function(e){return e.name.first.toLowerCase().includes(a.toLowerCase())||e.name.last.toLowerCase().includes(n.target.value.toLowerCase())}))});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getEmployeeList()}},{key:"render",value:function(){return r.a.createElement(v.Provider,{value:this.state},r.a.createElement(k,{handleInputChange:this.handleInputChange,handleClick:this.handleClick}))}}]),n}(a.Component);var j=function(){return r.a.createElement(N,null)};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ba4dd740.chunk.js.map