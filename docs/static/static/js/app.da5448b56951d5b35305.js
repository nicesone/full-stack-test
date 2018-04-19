webpackJsonp([2,0],{0:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=a(84),i=n(s);a(72);var r=a(85),o=n(r),l=a(76),d=n(l);i.default.use(o.default);new i.default({el:"#app",template:"<App/>",components:{App:d.default}})},38:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(20),i=n(s),r=a(78),o=n(r),l=a(77),d=n(l);e.default={name:"app",components:{ToDoListGoogle:o.default,CreateTodoGoogle:d.default},created:function(){},data:function(){return{events:[],section:"Login",loading:"",response:""}},methods:{createEvent:function(t){console.log(t),console.log(this.events),this.events.push(t)},getAPIURL:function(){var t="AIzaSyBaHMhkH5QzsXSEa3kuw-7e1gJ04OLhqIk",e="i8turqsla63k44pe4sfp42utgg@group.calendar.google.com";return"https://www.googleapis.com/calendar/v3/calendars/"+e+"/events?key="+t},getData:function(){var t=this;i.default.get(this.getAPIURL()).then(function(e){t.events=e.data.items}).catch(function(e){t.errors.push(e)})},addData:function(){var t={end:{date:"2018-4-22"},start:{date:"2018-4-20"},summary:"Add by API"+Date.now()};i.default.post("https://www.googleapis.com/calendar/v3/calendars/i8turqsla63k44pe4sfp42utgg@group.calendar.google.com/events",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},deleteData:function(){},updateData:function(){}}}},39:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(42),i=n(s);e.default={data:function(){return{titleText:"",titleRules:[function(t){return!!t||"Title is required"}],startDate:"",startDateRules:[function(t){return!!t||"Start date is required"}],endDate:"",endDateRules:[function(t){return!!t||"End date is required"}],description:"",isCreating:!1,valid:!0}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},sendForm:function(){if(this.titleText.length>0&&this.startDate.length>0&&this.endDate.length>0){var t=this.titleText,e=(0,i.default)({date:this.startDate}),a=(0,i.default)({date:this.endDate}),n=this.description;this.$emit("create-event",{summary:t,start:e,end:a,description:n}),this.titleText="",this.startDate="",this.endDate="",this.description="",this.isCreating=!1,this.valid=!0}else this.$refs.form.validate()}}}},40:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(79),i=n(s);e.default={props:["events"],components:{TodoGoogle:i.default},methods:{deleteEvent:function(t){var e=this.events.indexOf(t);this.events.splice(e,1)}}}},41:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["event"],data:function(){return{isEditing:!1,isDetails:!1}},methods:{randomBackground:function(t){var e=(parseInt(t)||0)%4;return e>9?""+e:"0"+e},showForm:function(){this.isEditing=!0},hideForm:function(){this.isEditing=!1},showDetails:function(){this.isDetails=!0},hideDetails:function(){this.isDetails=!1},toggleDetails:function(){this.isDetails=!this.isDetails},deleteEvent:function(t){this.$emit("delete-event",t)}}}},69:function(t,e){},70:function(t,e){},71:function(t,e){},72:function(t,e){},76:function(t,e,a){a(71);var n=a(2)(a(38),a(83),null,null);t.exports=n.exports},77:function(t,e,a){var n=a(2)(a(39),a(81),null,null);t.exports=n.exports},78:function(t,e,a){a(70);var n=a(2)(a(40),a(82),null,null);t.exports=n.exports},79:function(t,e,a){a(69);var n=a(2)(a(41),a(80),null,null);t.exports=n.exports},80:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":"",md6:"","offset-md3":""},on:{click:t.toggleDetails}},[a("v-card",{staticClass:"mb-5",attrs:{hover:"",flat:""}},[a("v-card-media",{staticClass:"white--text card__box",attrs:{height:"250px",src:"./static/bg"+t.randomBackground(t.event.id)+".jpg"}},[a("v-container",{staticClass:"pa-0",attrs:{"fill-height":"",fluid:""}},[a("v-layout",{attrs:{"fill-height":""}},[a("v-flex",{attrs:{xs12:"","align-end":"",flexbox:"","text-xs-left":""}},[a("v-container",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}]},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.event.start.date)+" ~ "+t._s(t.event.end.date))])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("h3",{staticClass:"headline "},[t._v("\n                    "+t._s(t.event.summary)+"\n\n                    "),t._v(" "),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isDetails&&t.event.description,expression:"!isDetails && event.description"}],attrs:{dark:"",small:"",flat:"",fab:"",color:"white btn__details"}},[a("v-icon",{attrs:{dark:"",large:""}},[t._v("arrow_drop_down")])],1),t._v(" "),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isDetails&&t.event.description,expression:"isDetails && event.description"}],attrs:{dark:"",small:"",flat:"",fab:"",color:"white btn__details"}},[a("v-icon",{attrs:{dark:"",large:""}},[t._v("arrow_drop_up")])],1)],1)]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("p",{directives:[{name:"show",rawName:"v-show",value:t.isDetails,expression:"isDetails"}],domProps:{innerHTML:t._s(t.event.description)}})])],1)],1),t._v(" "),a("v-container",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"theme--dark"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"input-1",label:"Title",type:"text",color:"green","prepend-icon":"mode_edit"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.hideForm(e):null}},model:{value:t.event.summary,callback:function(e){t.$set(t.event,"summary",e)},expression:"event.summary"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{name:"input-1",label:"Start Date",type:"date",color:"green","prepend-icon":"date_range"},model:{value:t.event.start.date,callback:function(e){t.$set(t.event.start,"date",e)},expression:"event.start.date"}})],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{name:"input-1",label:"End Date",type:"date",color:"green","prepend-icon":"date_range"},model:{value:t.event.end.date,callback:function(e){t.$set(t.event.end,"date",e)},expression:"event.end.date"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"input-1",label:"Description",type:"text",color:"green","prepend-icon":"mode_edit"},model:{value:t.event.description,callback:function(e){t.$set(t.event,"description",e)},expression:"event.description"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"white--text",attrs:{small:"",flat:"",color:"grey darken-2"},on:{click:t.showForm}},[t._v("\n        EDIT\n        "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mode_edit")])],1),t._v(" "),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"white--text",attrs:{small:"",flat:"",color:"blue "},on:{click:t.hideForm}},[t._v("\n        Save\n        "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("save")])],1),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{small:"",flat:"",color:"grey lighten-1"},on:{click:function(e){t.deleteEvent(t.event)}}},[t._v("\n        Delete\n        "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("delete")])],1)],1)],1)],1)},staticRenderFns:[]}},81:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","text-xs-center":""}},[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],staticClass:"white--text",attrs:{slot:"activator",outline:"",color:"green "},on:{click:t.openForm},slot:"activator"},[t._v("\n    New Event\n    "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("add_circle")])],1),t._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.isCreating,callback:function(e){t.isCreating=e},expression:"isCreating"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Create Event")])]),t._v(" "),a("v-card-text",{staticClass:"pt-0"},[a("v-container",{attrs:{"grid-list-md":""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Title",rules:t.titleRules,required:"",color:"green","prepend-icon":"mode_edit"},model:{value:t.titleText,callback:function(e){t.titleText=e},expression:"titleText"}}),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{name:"input-1",label:"Start Date",type:"date",rules:t.startDateRules,required:"",color:"green","prepend-icon":"date_range"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),t._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{name:"input-1",label:"End Date",type:"date",rules:t.endDateRules,color:"green","prepend-icon":"date_range",required:""},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),t._v(" "),a("v-text-field",{attrs:{name:"input-1",label:"Description",type:"type",color:"green","prepend-icon":"mode_edit"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)],1),t._v(" "),a("small",[t._v("*indicates required field")])],1),t._v(" "),a("v-card-actions",{staticClass:"pb-3"},[a("v-spacer"),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{outline:"",color:"green darken-2"},on:{click:t.sendForm}},[t._v("\n            Create\n            "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("add")])],1),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{flat:"",color:"grey"},on:{click:t.closeForm}},[t._v("\n            Cancel\n            "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("close")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},82:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition-group",{attrs:{name:"list",tag:"div",mode:"out-in"}},t._l(t.events,function(e,n){return a("TodoGoogle",{key:n,attrs:{event:e},on:{"delete-event":t.deleteEvent}})}))],1)},staticRenderFns:[]}},83:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app",light:""}},[a("h1",{staticClass:"display-4 mb-4"},[t._v(" Event Calendar ")]),t._v(" "),a("div",{staticClass:"mb-4"},[a("v-btn",{staticClass:"white--text",attrs:{flat:"",color:"green lighten-1"},on:{click:t.getData}},[t._v("\n      Get Data from Google\n    ")]),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{flat:"",disabled:"",color:"grey lighten-1"},on:{click:t.addData}},[t._v("\n      Add Data\n    ")]),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{flat:"",disabled:"",color:"grey lighten-1"},on:{click:t.deleteData}},[t._v("\n      Delete Data\n    ")]),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{flat:"",disabled:"",color:"grey lighten-1"},on:{click:t.updateData}},[t._v("\n      Update Data\n    ")])],1),t._v(" "),a("ToDoListGoogle",{attrs:{events:t.events}}),t._v(" "),a("CreateTodoGoogle",{on:{"create-event":t.createEvent}}),t._v(" "),a("p",[t._v("Google calendar date :")]),t._v(" "),a("ul",t._l(t.events,function(e){return a("li",[t._v(t._s(e.summary)+" ( "+t._s(e.start.date)+" ~ "+t._s(e.end.date)+" ) ")])}))],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.da5448b56951d5b35305.js.map