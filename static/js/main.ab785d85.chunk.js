(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),o=t.n(r),s=(t(14),t(1)),c=t(2),m=t(4),i=t(3),d=(t(15),t(16),t(5)),u=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navs"},l.a.createElement("nav",{className:"mb-1 navbar navbar-expand-lg navbar-dark  lighten-1"},l.a.createElement("a",{className:"navbar-brand",href:"#."},l.a.createElement("img",{src:"https://res.cloudinary.com/valodagreat/image/upload/v1596150337/mqqfqpqgos8zbi53urx5_v0toea_2_skjdsf.jpg",className:"",alt:"avatar",height:"80",width:"180"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent-555","aria-controls":"navbarSupportedContent-555","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"},l.a.createElement(d.a,{color:"#bdbdbd",size:"40"}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent-555"},l.a.createElement("ul",{className:"navbar-nav mx-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link linkcolor p-3",href:"#."},"Calendar",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link linkcolor p-3",href:"#."},"Statistic")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link linkcolor p-3",href:"#."},"Employee")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link linkcolor p-3",href:"#."},"Client")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link linkcolor p-3",href:"#."},"Equipment"))),l.a.createElement("ul",{className:"navbar-nav ml-auto nav-flex-icons"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link waves-effect waves-light",href:"#."},l.a.createElement(d.b,{color:"#bdbdbd"}))),l.a.createElement("li",{className:"nav-item avatar"},l.a.createElement("a",{className:"nav-link p-0",href:"#."},l.a.createElement("img",{src:"https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg",className:"rounded-circle z-depth-0",alt:"avatar",height:"35"})))))))}}]),t}(n.Component),p=(t(17),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={selectedFile:null,project:[]},e.addProduct=function(){e.props.onRouteChange("addproduct")},e.includeProduct=function(){fetch("https://frozen-woodland-32017.herokuapp.com/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.props.title,url:e.state.selectedFile})}).then((function(e){return e.json()})).then((function(a){e.props.onRouteChange("noProduct"),e.setState({project:a})})).catch((function(e){return console.log(e)}))},e.cancelSubmit=function(){e.props.onRouteChange("noProduct")},e.fileChangedHandler=function(a){console.log(URL.createObjectURL(a.target.files[0])),e.setState({selectedFile:URL.createObjectURL(a.target.files[0])})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://frozen-woodland-32017.herokuapp.com").then((function(e){return e.json()})).then((function(a){e.setState({project:a})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"breadth"},l.a.createElement("h2",{className:"p-3 h"},"employee"),l.a.createElement("div",{className:"card rounded m-5"},l.a.createElement("p",{className:"p-3"},l.a.createElement("img",{className:"p-2 rounded-circle z-depth-0",src:"https://res.cloudinary.com/valodagreat/image/upload/v1596154086/employ_2_l3js3z.png",height:"65",alt:"stuff"}),l.a.createElement("span",{className:"employ"},"All Employees")),l.a.createElement("h5",{className:"p-3 s"},"Projects"),this.state.project.map((function(e){return l.a.createElement("p",{key:e.project,className:"p-3"},l.a.createElement("img",{className:"p-2 rounded-circle z-depth-0",src:e.url,height:"65",width:"65",alt:"stuff"}),l.a.createElement("span",{className:"employ"},e.project))})),l.a.createElement("h5",{className:"p-3 s"},"Status"),l.a.createElement("p",{className:"p-3"},l.a.createElement("img",{className:"p-2 rounded-circle z-depth-0",src:"https://res.cloudinary.com/valodagreat/image/upload/v1596159400/w8udl2lhrno3qie9lwdf.jpg",height:"65",alt:"stuff"}),l.a.createElement("span",{className:"employ"},"Full Time")),l.a.createElement("p",{className:"p-3"},l.a.createElement("img",{className:"p-2 rounded-circle z-depth-0",src:"https://res.cloudinary.com/valodagreat/image/upload/v1596159280/nseh1tb8xzdxrec1tf2a.jpg",height:"65",alt:"stuff"}),l.a.createElement("span",{className:"employ"},"Part Time")),"addproduct"===this.props.route?null:l.a.createElement("div",{className:"btns"},l.a.createElement("button",{onClick:this.addProduct,type:"button",className:"btn aqua-gradient btn-rounded m-3"},"add project")),"noProduct"===this.props.route?null:l.a.createElement("div",{className:"p-5 post"},l.a.createElement("h4",{className:"p-2"},"Add Project"),l.a.createElement("div",{className:"text-center p-2"},l.a.createElement("label",{htmlFor:"projectTitle"},"Title ",l.a.createElement("input",{type:"text",required:!0,name:"projectTitle",onChange:this.props.titleChange})," ")),l.a.createElement("div",{className:"text-center p-2"},l.a.createElement("label",{htmlFor:"projectUrl"},"Link ",l.a.createElement("input",{type:"text",name:"projectUrl",required:!0,onChange:this.props.urlChange}))),l.a.createElement("div",null,l.a.createElement("input",{type:"file",onChange:this.fileChangedHandler})),l.a.createElement("div",{className:"p-2"},l.a.createElement("button",{onClick:this.includeProduct,className:"btn aqua-gradient  btn-rounded"},"Submit"),l.a.createElement("button",{onClick:this.cancelSubmit,className:"btn aqua-gradient  btn-rounded"},"Cancel")))))}}]),t}(n.Component)),h=t(8),g=(t(18),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={employee:[],name:"",position:"",salary:"",status:"",trial:"",period:"",url:"",updateName:"",updatePosition:"",updateSalary:"",updateStatus:"",updateTrial:"",updatePeriod:"",updateUrl:"",id:"",modName:"",delId:"",delete:""},e.includeEmployee=function(){fetch("https://frozen-woodland-32017.herokuapp.com/dashboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.name,position:e.state.position,salary:e.state.salary,status:e.state.status,trial:e.state.trial,period:e.state.period,url:e.state.url})}).then((function(e){return e.json()})).then((function(a){e.setState({employee:a,name:"",position:"",salary:"",status:"",trial:"",period:"",url:""})})).catch((function(e){return console.log(e)}))},e.updateEmployee=function(){fetch("https://frozen-woodland-32017.herokuapp.com/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.id,name:e.state.updateName,position:e.state.updatePosition,salary:e.state.updateSalary,status:e.state.updateStatus,trial:e.state.updateTrial,period:e.state.updatePeriod,url:e.state.updateUrl})}).then((function(e){return e.json()})).then((function(a){e.setState({employee:a})})).catch((function(e){return console.log(e)}))},e.handleChange=function(a){var t=a.target,n=t.name,l=t.value;e.setState(Object(h.a)({},n,l))},e.initialFormValue=function(a){e.setState({id:a.id,updateName:a.name,updatePosition:a.position,updateSalary:a.salary,updateStatus:a.status,updateTrial:a.trial,updatePeriod:a.period,updateUrl:a.url})},e.secondFormValue=function(a){e.setState({delId:a.id,modName:a.name})},e.deletedEmployee=function(){console.log(e.state.delete),"Yes"===e.state.delete&&fetch("https://frozen-woodland-32017.herokuapp.com/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.delId})}).then((function(e){return e.json()})).then((function(a){a.id&&fetch("https://frozen-woodland-32017.herokuapp.com/p").then((function(e){return e.json()})).then((function(a){e.setState({employee:a})}))}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://frozen-woodland-32017.herokuapp.com/p").then((function(e){return e.json()})).then((function(a){e.setState({employee:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"bredth p-2"},l.a.createElement("div",{className:"modal fade",id:"modalRegisterForm",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header text-center"},l.a.createElement("h4",{className:"modal-title w-100 font-weight-bold"},"Employee's Profile"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body mx-3"},l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-name",required:!0,name:"name",onChange:this.handleChange,placeholder:"Andy Rob",value:this.state.name,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-name"},"Name")),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-position",required:!0,name:"position",onChange:this.handleChange,placeholder:"Project Manager",value:this.state.position,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-position"},"Position")),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-salary",required:!0,name:"salary",onChange:this.handleChange,value:this.state.salary,placeholder:"3.200 NOK",className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-salary"},"Salary")),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-status",required:!0,name:"status",onChange:this.handleChange,placeholder:"Full/Part Time",value:this.state.status,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-status"},"Status")),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-trial",required:!0,name:"trial",onChange:this.handleChange,placeholder:"test period",value:this.state.trial,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-trial"},"Level")),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-period",required:!0,name:"period",onChange:this.handleChange,placeholder:"2 months",value:this.state.period,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-period"},"Duration")),l.a.createElement("div",{className:"md-form mb-4"},l.a.createElement("input",{type:"text",id:"orangeForm-url",required:!0,name:"url",onChange:this.handleChange,value:this.state.url,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-url"},"Image Url"))),l.a.createElement("div",{className:"modal-footer d-flex justify-content-center"},l.a.createElement("button",{onClick:this.includeEmployee,"data-dismiss":"modal",className:"btn btn-deep-orange"},"Add"))))),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-default btn-rounded mb-4","data-toggle":"modal","data-target":"#modalRegisterForm"},"Add employee")),l.a.createElement("div",{className:"d-flex justify-content-around gen"},l.a.createElement("h4",{className:"p-1"},"Employee"),l.a.createElement("h4",{className:"p-1"},"Salary"),l.a.createElement("h4",{className:"p-1"},"Status"),l.a.createElement("h4",{className:"p-1"},"Manage")),this.state.employee.sort((function(e,a){return e.id-a.id})).map((function(a){return l.a.createElement("div",{key:a.id,className:"beneath card gen  my-3"}," ",l.a.createElement("div",{className:"d-flex justify-content-around p-3"},l.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"d-flex justify-content-between align-items-center set p-1 h"},l.a.createElement("img",{className:"rounded-circle z-depth-0",src:a.url,width:"50",height:"50",alt:"stuff"}),l.a.createElement("p",{className:""},a.name,l.a.createElement("br",null),l.a.createElement("span",{className:"p py-3"},a.position)))),l.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-1"},l.a.createElement("p",{className:""},a.salary,l.a.createElement("br",null),l.a.createElement("span",{className:"p py-2"},a.status))),l.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-1"},l.a.createElement("p",{className:""},a.trial,l.a.createElement("br",null),l.a.createElement("span",{className:"p py-2"},a.period))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-2 border-right p-1"},l.a.createElement(d.c,{className:"cursor",onClick:function(){return e.initialFormValue(a)},size:"20","data-toggle":"modal","data-target":"#modalUpdateForm"})),l.a.createElement("div",{className:"d-flex justify-content-center align-items-center p-2"},l.a.createElement(d.d,{className:"cursor",onClick:function(){return e.secondFormValue(a)},size:"20","data-toggle":"modal","data-target":"#modalContactForm"})))))})),l.a.createElement("div",{className:"modal fade",id:"modalUpdateForm",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header text-center"},l.a.createElement("h4",{className:"modal-title w-100 font-weight-bold"},"Update Employee's Profile"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body mx-3"},l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-updateName",required:!0,name:"updateName",onChange:this.handleChange,placeholder:"Name e.g (Andy Rob)",value:this.state.updateName,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-updateName"})),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-updatePosition",required:!0,name:"updatePosition",onChange:this.handleChange,placeholder:"Job Description e.g (Project Manager)",value:this.state.updatePosition,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-updatePosition"})),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-updateSalary",required:!0,name:"updateSalary",onChange:this.handleChange,placeholder:"Salary e.g (3.200 NOK)",value:this.state.updateSalary,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-updateSalary"})),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-updateStatus",required:!0,name:"updateStatus",onChange:this.handleChange,placeholder:"Status e.g (Full/Part Time)",value:this.state.updateStatus,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-updateStatus"})),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-updateTrial",required:!0,name:"updateTrial",onChange:this.handleChange,placeholder:"Level e.g (test period)",value:this.state.updateTrial,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-updateTrial"})),l.a.createElement("div",{className:"md-form mb-5"},l.a.createElement("input",{type:"text",id:"orangeForm-updatePeriod",required:!0,name:"updatePeriod",onChange:this.handleChange,placeholder:"Duration e.g (2 months)",value:this.state.updatePeriod,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-updatePeriod"})),l.a.createElement("div",{className:"md-form mb-4"},l.a.createElement("input",{type:"text",id:"orangeForm-updateUrl",required:!0,name:"updateUrl",onChange:this.handleChange,placeholder:"Image updateUrl",value:this.state.updateUrl,className:"form-control validate"}),l.a.createElement("label",{"data-error":"wrong","data-success":"right",htmlFor:"orangeForm-updateUrl"}))),l.a.createElement("div",{className:"modal-footer d-flex justify-content-center"},l.a.createElement("button",{onClick:this.updateEmployee,"data-dismiss":"modal",className:"btn btn-deep-orange"},"Update"))))),l.a.createElement("div",{className:"modal fade",id:"modalContactForm",tabIndex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header text-center"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body mx-3"},l.a.createElement("div",{className:"mb-5"},l.a.createElement("p",null,"Are you sure you want to delete ",this.state.modName," from your employees ? ")),l.a.createElement("div",{className:"form-check mb-5"},l.a.createElement("div",{className:""},l.a.createElement("label",{htmlFor:"defaultForm-email"},l.a.createElement("input",{onChange:this.handleChange,checked:"Yes"===this.state.delete,name:"delete",value:"Yes",type:"radio",id:"defaultForm-email",className:"form-check-input validate"}),"Yes")),l.a.createElement("div",{className:""},l.a.createElement("label",{htmlFor:"defaultForm"},l.a.createElement("input",{name:"delete",onChange:this.handleChange,checked:"No"===this.state.delete,value:"No",type:"radio",id:"defaultForm",className:"form-check-input validate"}),"No")))),l.a.createElement("div",{className:"modal-footer d-flex justify-content-center"},l.a.createElement("button",{onClick:this.deletedEmployee,"data-dismiss":"modal",className:"btn btn-default"},"Submit"))))))}}]),t}(n.Component)),E=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={route:"noProduct",title:"",url:""},e.handleRouteChange=function(a){e.setState({route:a})},e.handleProjectTitleChange=function(a){e.setState({title:a.target.value})},e.handleProjectUrlChange=function(a){e.setState({url:a.target.value})},e}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement("div",{className:"d-flex justify-content-between media"},l.a.createElement(p,{route:this.state.route,onRouteChange:this.handleRouteChange,url:this.state.url,title:this.state.title,titleChange:this.handleProjectTitleChange,urlChange:this.handleProjectUrlChange}),l.a.createElement(g,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ab785d85.chunk.js.map