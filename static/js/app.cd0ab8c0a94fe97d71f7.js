webpackJsonp([1],{120:function(e,t,n){"use strict";var i=n(460),a=n.n(i),s=n(458),l=n.n(s),o=n(456),d=n.n(o),r=n(457),c=n.n(r),u=n(461),p=n.n(u),f=n(459),v=n.n(f),h=n(462),m=n.n(h),g=[{path:"/",redirect:{name:"nested"}},{name:"nested",path:"/nested",component:v.a},{name:"horizontal",path:"/horizontal",component:c.a},{name:"tree",path:"/tree",component:p.a},{name:"handle",path:"/handle",component:d.a},{name:"item-types",path:"/item-types",component:l.a},{name:"simple",path:"/simple",component:a.a},{name:"vuex",path:"/vuex",component:m.a}];t.a=g},122:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a});var i="INSERT_ITEM",a="DELETE_ITEM"},167:function(e,t,n){function i(e){n(434)}var a=n(11)(n(181),n(463),i,null,null);e.exports=a.exports},169:function(e,t,n){/*!
 * Vddl.js v0.7.1
 * (c) 2018 Hejx
 * Released under the MIT License.
 * https://github.com/hejianxian/vddl#readme
 */
!function(t,n){e.exports=n()}(0,function(){var e={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{tag:"div",staticClass:"vddl-draggable",on:{dragstart:function(t){t.stopPropagation(),e.handleDragstart(t)},dragend:function(t){t.stopPropagation(),e.handleDragend(t)},click:function(t){t.stopPropagation(),e.handleClick(t)},selectstart:e.handleSelected}},[e._t("default")],2)},staticRenderFns:[],name:"vddl-draggable",props:{draggable:[Object,Array],wrapper:Array,index:Number,tag:{type:String,default:"div"},effectAllowed:String,type:String,disableIf:Boolean,dragstart:Function,selected:Function,dragend:Function,moved:Function,copied:Function,canceled:Function},data:function(){return{}},computed:{},methods:{handleDragstart:function(e){var t=this,n=JSON.stringify(this.draggable);if("false"==n||this.disableIf)return!0;e.dataTransfer.setData("Text",n),e.dataTransfer.effectAllowed=this.effectAllowed||"move",this.$el.className=this.$el.className.trim()+" vddl-dragging",setTimeout(function(){t.$el.className=t.$el.className.trim()+" vddl-dragging-source"},0),this.vddlDropEffectWorkaround.dropEffect="none",this.vddlDragTypeWorkaround.isDragging=!0,this.vddlDragTypeWorkaround.dragType=this.type||void 0,e._dndHandle&&e.dataTransfer.setDragImage&&e.dataTransfer.setDragImage(this.$el,e._dndHandleLeft,e._dndHandleTop),"function"==typeof this.dragstart&&this.dragstart.call(this,e.target)},handleDragend:function(e){var t=this,n=this.vddlDropEffectWorkaround.dropEffect;switch(n){case"move":"function"==typeof this.moved?this.$nextTick(function(){t.moved({index:t.index,list:t.wrapper,event:e.target,draggable:t.draggable})}):this.$nextTick(function(){t.wrapper.splice(t.index,1)});break;case"copy":"function"==typeof this.copied&&this.copied(this.draggable,e.target);break;case"none":"function"==typeof this.canceled&&this.canceled(e.target)}"function"==typeof this.dragend&&this.dragend(n,e.target),this.$el.className=this.$el.className.replace("vddl-dragging","").trim(),setTimeout(function(){t.$el&&(t.$el.className=t.$el.className.replace("vddl-dragging-source","").trim())},0),this.vddlDragTypeWorkaround.isDragging=!1},handleClick:function(e){this.selected&&"function"==typeof this.selected&&this.selected(this.wrapper[this.index],e.target)},handleSelected:function(){return this.dragDrop&&this.dragDrop(),!1},init:function(){var e=!0;this.disableIf&&(e=!1),this.$el.setAttribute("draggable",e)}},watch:{disableIf:function(e){this.$el.setAttribute("draggable",!e)}},ready:function(){this.init()},mounted:function(){this.init()}},t={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{tag:"div",staticClass:"vddl-list",on:{dragenter:function(t){t.preventDefault(),e.handleDragenter(t)},dragover:function(t){t.stopPropagation(),t.preventDefault(),e.handleDragover(t)},drop:function(t){t.stopPropagation(),t.preventDefault(),e.handleDrop(t)},dragleave:e.handleDragleave}},[e._t("default")],2)},staticRenderFns:[],name:"vddl-list",props:{list:Array,tag:{type:String,default:"div"},allowedTypes:Array,disableIf:Boolean,horizontal:Boolean,externalSources:Boolean,dragover:Function,inserted:Function,drop:Function},data:function(){return{}},computed:{},methods:{handleDragenter:function(e){if(!this.isDropAllowed(e))return!0},handleDragover:function(e){var t=this;if(!this.isDropAllowed(e))return!0;if(this.placeholderNode.parentNode!=this.listNode&&this.listNode.appendChild(this.placeholderNode),e.target!==this.listNode){for(var n=e.target;n.parentNode!==this.listNode&&n.parentNode;)n=n.parentNode;n.parentNode===this.listNode&&n!==this.placeholderNode&&(this.isMouseInFirstHalf(e,n)?this.listNode.insertBefore(this.placeholderNode,n):this.listNode.insertBefore(this.placeholderNode,n.nextSibling))}else if(this.isMouseInFirstHalf(e,this.placeholderNode,!0))for(;this.placeholderNode.previousElementSibling&&(this.isMouseInFirstHalf(e,this.placeholderNode.previousElementSibling,!0)||0===this.placeholderNode.previousElementSibling.offsetHeight);)t.listNode.insertBefore(t.placeholderNode,t.placeholderNode.previousElementSibling);else for(;this.placeholderNode.nextElementSibling&&!this.isMouseInFirstHalf(e,this.placeholderNode.nextElementSibling,!0);)t.listNode.insertBefore(t.placeholderNode,t.placeholderNode.nextElementSibling.nextElementSibling);return this.dragover&&!this.invokeCallback("dragover",e,this.getPlaceholderIndex())?this.stopDragover(e):(this.$el.className.indexOf("vddl-dragover")<0&&(this.$el.className=this.$el.className.trim()+" vddl-dragover"),!1)},handleDrop:function(e){if(!this.isDropAllowed(e))return!0;var t,n=e.dataTransfer.getData("Text")||e.dataTransfer.getData("text/plain");try{t=JSON.parse(n)}catch(e){return this.stopDragover()}var i=this.getPlaceholderIndex();return this.drop&&!(t=this.invokeCallback("drop",e,i,t))?this.stopDragover():(!0!==t&&this.list.splice(i,0,t),this.invokeCallback("inserted",e,i,t),"none"===e.dataTransfer.dropEffect?"copy"===e.dataTransfer.effectAllowed||"move"===e.dataTransfer.effectAllowed?this.vddlDropEffectWorkaround.dropEffect=e.dataTransfer.effectAllowed:this.vddlDropEffectWorkaround.dropEffect=e.ctrlKey?"copy":"move":this.vddlDropEffectWorkaround.dropEffect=e.dataTransfer.dropEffect,this.stopDragover(),!1)},handleDragleave:function(e){var t=this;this.$el.className=this.$el.className.replace("vddl-dragover","").trim(),setTimeout(function(){t.$el.className.indexOf("vddl-dragover")<0&&t.placeholderNode.parentNode&&t.placeholderNode.parentNode.removeChild(t.placeholderNode)},100)},isMouseInFirstHalf:function(e,t,n){var i=this.horizontal?e.offsetX||e.layerX:e.offsetY||e.layerY,a=this.horizontal?t.offsetWidth:t.offsetHeight,s=this.horizontal?t.offsetLeft:t.offsetTop;return s=n?s:0,i<s+a/2},getPlaceholderElement:function(){var e=this.$el.parentNode.querySelectorAll(".vddl-placeholder");if(e.length>0)return e[0];var t=document.createElement("div");return t.setAttribute("class","vddl-placeholder"),t},getPlaceholderIndex:function(){return Array.prototype.indexOf.call(this.listNode.children,this.placeholderNode)},isDropAllowed:function(e){if(!this.vddlDragTypeWorkaround.isDragging&&!this.externalSources)return!1;if(!this.hasTextMimetype(e.dataTransfer.types))return!1;if(this.allowedTypes&&this.vddlDragTypeWorkaround.isDragging){var t=this.allowedTypes;if(Array.isArray(t)&&-1===t.indexOf(this.vddlDragTypeWorkaround.dragType))return!1}return!this.disableIf},stopDragover:function(){return this.placeholderNode.parentNode&&this.placeholderNode.parentNode.removeChild(this.placeholderNode),this.$el.className=this.$el.className.replace("vddl-dragover","").trim(),!0},invokeCallback:function(e,t,n,i){var a=this[e];return a&&a({event:t,index:n,item:i||void 0,list:this.list,external:!this.vddlDragTypeWorkaround.isDragging,type:this.vddlDragTypeWorkaround.isDragging?this.vddlDragTypeWorkaround.dragType:void 0}),!!a},hasTextMimetype:function(e){if(!e)return!0;for(var t=0;t<e.length;t+=1)if("Text"===e[t]||"text/plain"===e[t])return!0;return!1},init:function(){this.placeholderNode=this.getPlaceholderElement(),this.listNode=this.$el,this.placeholderNode.parentNode&&this.placeholderNode.parentNode.removeChild(this.placeholderNode)}},ready:function(){this.init()},mounted:function(){this.init()}},n={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{tag:"div",staticClass:"vddl-handle",on:{dragstart:e.handle,dragend:e.handle}},[e._t("default")],2)},staticRenderFns:[],name:"vddl-handle",props:{handleLeft:Number,handleTop:Number,tag:{type:String,default:"div"}},data:function(){return{}},computed:{},methods:{handle:function(e){e._dndHandle=!0,e._dndHandleLeft=this.handleLeft||0,e._dndHandleTop=this.handleTop||0},init:function(){this.$el.setAttribute("draggable",!0)}},ready:function(){this.init()},mounted:function(){this.init()}},i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{tag:"div",staticClass:"vddl-nodrag",on:{dragstart:e.handleDragstart,dragend:e.handleDragend}},[e._t("default")],2)},staticRenderFns:[],name:"vddl-nodrag",props:{tag:{type:String,default:"div"}},data:function(){return{}},computed:{},methods:{handleDragstart:function(e){e._dndHandle||(e.dataTransfer.types&&e.dataTransfer.types.length||e.preventDefault(),e.stopPropagation())},handleDragend:function(e){e._dndHandle||e.stopPropagation()},init:function(){this.$el.setAttribute("draggable",!0)}},ready:function(){this.init()},mounted:function(){this.init()}},a={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{tag:"div",staticClass:"vddl-placeholder"},[e._t("default")],2)},staticRenderFns:[],name:"vddl-placeholder",props:{tag:{type:String,default:"div"}}},s=function(s){s.prototype.vddlDropEffectWorkaround={},s.prototype.vddlDragTypeWorkaround={},s.component(e.name,e),s.component(t.name,t),s.component(n.name,n),s.component(i.name,i),s.component(a.name,a)};return"undefined"!=typeof window&&window.Vue&&s(window.Vue),{install:s}})},170:function(e,t,n){"use strict";var i=n(123),a=n.n(i),s=n(121),l=n(168),o=n(190),d=n(191),r=n(192),c=n(479);n.n(c);s.a.use(l.a);t.a=new l.a.Store(a()({actions:o,getters:d},r.a,{strict:!1,plugins:[]}))},171:function(e,t,n){function i(e){n(437)}var a=n(11)(n(174),n(467),i,null,null);e.exports=a.exports},172:function(e,t,n){function i(e){n(444)}var a=n(11)(n(179),n(474),i,null,null);e.exports=a.exports},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(452),a=n.n(i),s=n(451),l=n.n(s);t.default={name:"app",data:function(){return{}},mounted:function(){},components:{vHeader:a.a,vFooter:l.a}}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-footer"}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(453),a=n.n(i);t.default={name:"v-header",components:{vMenus:a.a}}},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(120);t.default={name:"v-menus",data:function(){return{links:i.a.splice(1,i.a.length)}}}},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"list",props:["item","list","index","selected","selectedItem","disable"],methods:{selectedEvent:function(e){"function"==typeof this.selected&&this.selected(e)}}}},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-title"}},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(198),a=n.n(i);t.default={name:"TreeIcon",props:{model:{type:Object,default:function(){return{icon:"",title:"",click:null,onClick:function(){},event:{name:null,bus:null}}}},item:{type:Object,default:null}},methods:{onClick:function(){a()("function"===this.model.click)&&this.model.click(this.item)}}}},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(167),a=n.n(i),s=n(455),l=n.n(s);t.default={name:"Tree",components:{Tree:a.a,TreeIcon:l.a},props:{item:{},height:{type:Number,default:22},list:{type:Array,default:function(){return[]}},itemLabel:{type:String,default:null},itemLabelAlt:{type:String,default:null},icons:{type:Array,default:function(){return[]}},index:{type:[String,Number],default:0},selected:{},selectedItem:{},moved:{type:Function,default:function(){}},copied:{type:Function,default:function(){}},dropped:{type:Function,default:function(){}},disable:{type:Boolean,default:!1},apiMode:{type:Boolean,default:!1},apiUrl:{type:String,default:""},httpOptions:{type:Object,default:function(){return{}}},httpFetch:{type:Function,default:null},httpMethod:{type:String,default:"get",validator:function(e){return["get","post"].indexOf(e)>-1}},itemKey:{type:String,default:null},loadOnStart:{type:Boolean,default:!1},hideRoot:{type:Boolean,default:!1},first:{type:Boolean,default:!0},refreshEventName:{type:String,default:null},hoverClassName:{type:String,default:"hover"}},data:function(){return{isOpen:!1,isLoading:!1,children:[],droppedIn:null}},mounted:function(){(this.loadOnStart||this.isRootHidden)&&this.toggleOpen()},computed:{isContainer:function(){return 1===this.item.id_type},isApiMode:function(){return this.apiMode},isRootHidden:function(){return this.hideRoot&&this.first},isHidden:function(){return this.isRootHidden},hasSelectedEvent:function(){return"function"==typeof this.selected},itemId:function(){return this.item[this.itemKey]?this.item[this.itemKey]:this.index},getLabel:function(){return this.item[this.itemLabel]?this.item[this.itemLabel]:this.item[this.itemLabelAlt]?this.item[this.itemLabelAlt]:this.item[this.itemKey]?this.item[this.itemKey]:this.index}},methods:{refresh:function(e){e===this.item.id_node&&this.loadData()},onMouseOver:function(e){e.stopPropagation(),this.detectTarget(e.target,!0)},onMouseOut:function(e){e.stopPropagation(),this.detectTarget(e.target,!1)},detectTarget:function(e,t){if(0!==this.item.id_node)if(1===this.item.id_type){for(var n=this.findTreeItem(e);"vddl-draggable"!==e.classList[0];)e=e.parentNode;this.changeClass(n,!1),this.changeClass(e,t)}else e=this.findTreeItem(e),this.changeClass(e,t)},findTreeItem:function(e){for(;"vddl-tree-item"!==e.classList[0];)e=e.parentNode;return e},changeClass:function(e,t){t?e.classList.add(this.hoverClassName):e.classList.remove(this.hoverClassName)},selectEvent:function(e,t){"function"==typeof this.selected&&t.classList&&t.classList.contains("vddl-label")&&this.selected(e,t)},dropEvent:function(e){var t=this;return setTimeout(function(){e.list.splice(e.index,0,e.item),t.dropped(e,t.item)},25),!0},moveEvent:function(e){e.list.splice(e.index,1),this.moved(e.draggable)},toggleOpen:function(){this.isOpen=!this.isOpen,this.isOpen&&this.loadData()},loadData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.loadSuccess,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.loadFailed;if(this.isApiMode){this.isLoading=!0,this.httpOptions.params=this.item;var n=this.apiUrl+(this.itemKey?this.item[this.itemKey]:"");this.fetch(n,this.httpOptions).then(e,t).catch(function(){return t()})}else this.item.children&&(this.children=this.item.children)},fetch:function(e,t){this.httpFetch&&this.httpFetch(e,t)},loadSuccess:function(e){this.children=e.data,this.isLoading=!1},loadFailed:function(e){}}}},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vddl-handle-demo",data:function(){return{lists:{A:[{label:"Item A1"},{label:"Item A2"},{label:"Item A3"},{label:"Item A4"},{label:"Item A5"}],B:[{label:"Item B1"},{label:"Item B2"},{label:"Item B3"},{label:"Item B4"},{label:"Item B5"}],C:[{label:"Item C1"},{label:"Item C2"},{label:"Item C3"},{label:"Item C4"},{label:"Item C5"}]}}}}},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){for(var e=[],t=1,n=1,i=1,a=0;a<3;a++){e.push({id:t++,container:[]});for(var s=0;s<2;s++){e[a].container.push({id:n++,list:[]});for(var l=0;l<7;l++)e[a].container[s].list.push({label:"Item "+i++,id:i})}}return console.log(e),{lists:e}},computed:{},ready:function(){},attached:function(){},methods:{},components:{}}},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vddl-item-types-demo",data:function(){return{lists:[{label:"Men",allowedTypes:["man"],max:4,people:[{name:"Bob",type:"man"},{name:"Charlie",type:"man"},{name:"Dave",type:"man"}]},{label:"Women",allowedTypes:["woman"],max:4,people:[{name:"Alice",type:"woman"},{name:"Eve",type:"woman"},{name:"Peggy",type:"woman"}]},{label:"People",allowedTypes:["man","woman"],max:6,people:[{name:"Frank",type:"man"},{name:"Mallory",type:"woman"},{name:"Alex",type:"unknown"},{name:"Oscar",type:"man"},{name:"Wendy",type:"woman"}]}]}}}},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(454),a=n.n(i);t.default={data:function(){return{selectedItem:null,itemMock:{type:"new element",id:1},containerMock:{type:"container",id:4,columns:[]},disable:!1,dropzones:{A:[{type:"container",id:1,columns:[{type:"item",id:"1"},{type:"item",id:"2"},{type:"item",id:"3"}]},{type:"item",id:"4"},{type:"item",id:"5"},{type:"item",id:"6"}],B:[{type:"item",id:7},{type:"item",id:"8"},{type:"container",id:"2",columns:[{type:"item",id:"9"},{type:"item",id:"10"},{type:"container",id:"3",columns:[{type:"item",id:"13"},{type:"item",id:"14"}]},{type:"item",id:"15"}]}]}}},methods:{copied:function(e){e.id++},inserted:function(e){console.log(e)},toggleDisable:function(){this.disable=!this.disable},handleSelected:function(e){this.selectedItem=e}},components:{list:a.a}}},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:null,lists:{A:[{id:1,label:"Item A1"},{id:2,label:"Item A2"},{id:3,label:"Item A3"},{id:4,label:"Item A4"},{id:5,label:"Item A5"}],B:[{id:6,label:"Item B1"},{id:7,label:"Item B2"},{id:8,label:"Item B3"},{id:9,label:"Item B4"},{id:10,label:"Item B5"}],C:[{id:11,label:"Item C1"},{id:12,label:"Item C2"},{id:13,label:"Item C3"},{id:14,label:"Item C4"},{id:15,label:"Item C5"}]}}},methods:{selectedEvent:function(e){this.selected=e},handleDragstart:function(){console.log(":v-draggable: dragstart")},handleDragend:function(){console.log(":v-draggable: dragend")},handleCanceled:function(){console.log(":v-draggable: canceled")},handleInserted:function(){console.log(":v-list: inserted")},handleDrop:function(e){console.log(":v-list: drop"),console.log(e);var t=e.index,n=e.list,i=e.item;i.id=(new Date).getTime(),n.splice(t,0,i)},handleMoved:function(e){console.log(":v-draggable: moved"),console.log(e);var t=e.index;e.list.splice(t,1)},handleDragover:function(){console.log(":v-list: handleDragover")}}}},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(167),a=n.n(i);t.default={name:"vTree",components:{Tree:a.a},props:{},data:function(){return{staticData:{id_type:1,id_node:1,label:"Root folder",isRoot:!0,children:[{id_type:2,id_node:2,label:"File"},{id_type:2,id_node:3,label:"Lorem"},{id_type:1,id_node:4,label:"Folder",children:[{id_type:2,id_node:5,label:"Ipsum"},{id_type:2,id_node:6,label:"Merol"},{id_type:2,id_node:7,label:"Muspi"}]}]}}},methods:{handleSelect:function(e,t){console.log("selected")},handleDrop:function(e,t){console.log("dropped")},handleMove:function(e){console.log("moved")}}}},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(123),a=n.n(i),s=n(168);t.default={data:function(){return{id:1,mutations:[]}},computed:n.i(s.b)({lists:"mockLists"}),methods:a()({},n.i(s.c)(["inserItem","delItem"]),{handleMoved:function(e){var t=e.index;console.log("MOVE INDEX "+t)},handleDrop:function(e){console.log(e)}})}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(121),a=n(173),s=n(171),l=n.n(s),o=n(169),d=n.n(o),r=n(120),c=n(170),u=n(172),p=n.n(u);i.a.use(d.a),i.a.use(a.a),i.a.component(p.a.name,p.a);var f=new a.a({routes:r.a});new i.a({el:"#app",store:c.a,router:f,render:function(e){return e(l.a)}})},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"inserItem",function(){return a}),n.d(t,"delItem",function(){return s});var i=n(122),a=function(e,t){(0,e.commit)(i.a,t)},s=function(e,t){(0,e.commit)(i.b,t)}},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"mockLists",function(){return i});var i=function(e){return e.lists}},192:function(e,t,n){"use strict";var i,a=n(197),s=n.n(a),l=n(122),o={lists:[{label:"Item A1"},{label:"Item A2"},{label:"Item A3"},{label:"Item A4"},{label:"Item A5"}]},d=(i={},s()(i,l.a,function(e,t){var n=t.index,i=t.item;e.lists.splice(n,0,i)}),s()(i,l.b,function(e,t){e.lists.splice(t,1)}),i);t.a={state:o,mutations:d}},434:function(e,t){},435:function(e,t){},436:function(e,t){},437:function(e,t){},438:function(e,t){},439:function(e,t){},440:function(e,t){},441:function(e,t){},442:function(e,t){},443:function(e,t){},444:function(e,t){},445:function(e,t){},446:function(e,t){},447:function(e,t){},449:function(e,t){e.exports="data:image/png;base64,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"},450:function(e,t,n){e.exports=n.p+"static/img/vddl.db23b68.png"},451:function(e,t,n){function i(e){n(447)}var a=n(11)(n(175),n(477),i,null,null);e.exports=a.exports},452:function(e,t,n){function i(e){n(443)}var a=n(11)(n(176),n(473),i,null,null);e.exports=a.exports},453:function(e,t,n){function i(e){n(440)}var a=n(11)(n(177),n(470),i,null,null);e.exports=a.exports},454:function(e,t,n){function i(e){n(446)}var a=n(11)(n(178),n(476),i,null,null);e.exports=a.exports},455:function(e,t,n){var i=n(11)(n(180),n(465),null,null,null);e.exports=i.exports},456:function(e,t,n){function i(e){n(441)}var a=n(11)(n(182),n(471),i,null,null);e.exports=a.exports},457:function(e,t,n){function i(e){n(439)}var a=n(11)(n(183),n(469),i,null,null);e.exports=a.exports},458:function(e,t,n){function i(e){n(445)}var a=n(11)(n(184),n(475),i,"data-v-bb0a8c52",null);e.exports=a.exports},459:function(e,t,n){function i(e){n(436)}var a=n(11)(n(185),n(466),i,null,null);e.exports=a.exports},460:function(e,t,n){function i(e){n(435)}var a=n(11)(n(186),n(464),i,null,null);e.exports=a.exports},461:function(e,t,n){function i(e){n(442)}var a=n(11)(n(187),n(472),i,null,null);e.exports=a.exports},462:function(e,t,n){function i(e){n(438)}var a=n(11)(n(188),n(468),i,null,null);e.exports=a.exports},463:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vddl-draggable",{class:{selected:e.selectedItem===e.item},attrs:{draggable:e.item,index:e.index,"disable-if":e.disable,selected:e.selectEvent,moved:e.moveEvent,wrapper:e.list}},[1===e.item.id_type?n("div",[e.isHidden?e._e():n("div",{staticClass:"vddl-tree-item",attrs:{title:e.getLabel},on:{mouseover:e.onMouseOver,mouseout:e.onMouseOut}},[n("span",{staticClass:"icon open-close",class:{open:e.isOpen},on:{click:e.toggleOpen}},[n("i",{attrs:{"aria-hidden":"true"}})]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"icon node"},[n("i",{class:{open:e.isOpen}})]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"icon is-loading"}),e._v(" "),n("span",{staticClass:"vddl-label",class:{"has-cursor-pointer":e.hasSelectedEvent}},[e._v(e._s(e.getLabel))]),e._v(" "),n("span",{staticClass:"vddl-actions"},e._l(e.icons,function(t){return n("tree-icon",{key:t.title,attrs:{model:t,item:e.item}})}))]),e._v(" "),n("vddl-list",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],key:e.itemId,class:{"vddl-root":e.isRootHidden},attrs:{"data-id":e.itemId,list:e.children,"disable-if":e.disable,"external-sources":!0,drop:e.dropEvent}},e._l(e.children,function(t,i){return n("tree",{key:t.id_node,attrs:{item:t,list:e.children,index:i,first:!1,selected:e.selectEvent,"selected-item":e.selectedItem,dropped:e.dropped,moved:e.moved,disable:e.children.disable,itemKey:e.itemKey,itemLabel:e.itemLabel,itemLabelAlt:e.itemLabelAlt,apiMode:e.apiMode,apiUrl:e.apiUrl,httpOptions:e.httpOptions,httpFetch:e.httpFetch,httpMethod:e.httpMethod,icons:e.icons,refreshEventName:e.refreshEventName,hoverClassName:e.hoverClassName}})}))],1):n("div",[n("div",{staticClass:"vddl-tree-item",attrs:{title:e.getLabel},on:{mouseover:e.onMouseOver,mouseout:e.onMouseOut}},[n("span",{staticClass:"icon leaf"},[n("i")]),e._v(" "),n("span",{staticClass:"vddl-label",class:{"has-cursor-pointer":e.hasSelectedEvent}},[e._v(e._s(e.getLabel)+" ")])])])])},staticRenderFns:[]}},464:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content simple"},[n("v-title",[e._v("Simple")]),e._v(" "),n("div",{staticClass:"v-row"},e._l(e.lists,function(t,i){return n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("List "+e._s(i))])]),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list",attrs:{list:t,inserted:e.handleInserted,dragover:e.handleDragover,drop:e.handleDrop,horizontal:!1}},[e._l(t,function(i,a){return n("vddl-draggable",{key:i.id,staticClass:"panel__body--item",class:{selected:e.selected===i},attrs:{draggable:i,index:a,wrapper:t,"effect-allowed":"move",selected:e.selectedEvent,dragstart:e.handleDragstart,dragend:e.handleDragend,canceled:e.handleCanceled,moved:e.handleMoved}},[e._v("\n                  "+e._s(i.label)+"\n                ")])}),e._v(" "),n("vddl-placeholder",{staticClass:"red"},[e._v("Custom placeholder")])],2)],1)])])}))],1)},staticRenderFns:[]}},465:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon right",on:{click:e.onClick}},[n("i",{staticClass:"fa",class:["fa-"+e.model.icon],attrs:{"aria-hidden":"true",title:e.model.title}})])},staticRenderFns:[]}},466:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo-content nested"},[i("v-title",[e._v("Nested")]),e._v(" "),i("div",{staticClass:"v-row"},[e._l(e.dropzones,function(t,n){return i("div",{staticClass:"v-col--40"},[i("div",{staticClass:"panel"},[i("div",{staticClass:"panel__heading"},[i("h3",[e._v("Dropzone "+e._s(n))])]),e._v(" "),i("div",{staticClass:"panel__body"},[i("vddl-list",{staticClass:"panel__body--list",attrs:{list:t,inserted:e.inserted,"effect-allowed":"move","disable-if":e.disable,"external-sources":!0}},e._l(t,function(n,a){return i("list",{key:n.id,attrs:{item:n,list:t,index:a,selected:e.handleSelected,"selected-item":e.selectedItem,disable:e.disable}})}))],1)])])}),e._v(" "),i("div",{staticClass:"v-col--20"},[i("div",{staticClass:"new-elements"},[i("div",{staticClass:"panel panel--info"},[e._m(0),e._v(" "),i("div",{staticClass:"panel__body"},[i("vddl-draggable",{staticClass:"button",attrs:{draggable:e.itemMock,copied:e.copied,"effect-allowed":"copy"}},[e._v("\n              Add Item\n            ")]),e._v(" "),i("br"),e._v(" "),i("vddl-draggable",{staticClass:"button",attrs:{draggable:e.containerMock,copied:e.copied,"effect-allowed":"copy"}},[e._v("\n              Add Container\n            ")])],1)])]),e._v(" "),i("div",{staticClass:"new-elements disable-element"},[i("div",{staticClass:"panel panel--info"},[e._m(1),e._v(" "),i("div",{staticClass:"panel__body"},[i("div",{staticClass:"button",on:{click:e.toggleDisable}},[e._v("\n              Disable: "+e._s(e.disable)+"\n            ")])])])]),e._v(" "),e.selectedItem?i("div",{staticClass:"selected-item"},[i("div",{staticClass:"panel panel--info"},[e._m(2),e._v(" "),i("div",{staticClass:"panel__body"},[e._v("\n            "+e._s(e.selectedItem.type)+" "+e._s(e.selectedItem.id)+"\n          ")])])]):e._e(),e._v(" "),i("div",{staticClass:"ashcan"},[i("div",{staticClass:"panel panel--info"},[e._m(3),e._v(" "),i("vddl-list",{staticClass:"panel__body",attrs:{list:[]}},[i("img",{staticClass:"ashcan-logo",attrs:{src:n(449),alt:""}})])],1)])])],2)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("New Elements")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Toggle Disable")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Selected")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Ashcan")])])}]}},467:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-header"),e._v(" "),n("div",{staticClass:"container main"},[n("router-view")],1),e._v(" "),n("v-footer")],1)},staticRenderFns:[]}},468:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content simple"},[n("v-title",[e._v("Vuex")]),e._v(" "),n("div",{staticClass:"v-row"},[n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[e._m(0),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list",attrs:{list:e.lists,drop:e.handleDrop,horizontal:!1}},[e._l(e.lists,function(t,i){return n("vddl-draggable",{key:t.label,staticClass:"panel__body--item",attrs:{draggable:t,index:i,wrapper:e.lists,"effect-allowed":"move",moved:e.handleMoved}},[e._v("\n                "+e._s(i)+": "+e._s(t.label)+"\n              ")])}),e._v(" "),n("vddl-placeholder",{staticClass:"red"},[e._v("Custom placeholder")])],2)],1)])]),e._v(" "),n("div",{staticClass:"v-col--auto mutations"},[n("h3",[e._v("Mutations:")]),e._v(" "),0===e.mutations.length?n("p",[e._v("No mutation.")]):e._e(),e._v(" "),e._l(e.mutations,function(t){return n("p",{key:t.id},[e._v(e._s(t.id)+": mutation < "+e._s(t.type)+" > index: "+e._s(t.index))])})],2)])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("List")])])}]}},469:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content horizontal"},[n("v-title",[e._v("Horizontal")]),e._v(" "),n("div",{staticClass:"v-row"},e._l(e.lists,function(t,i){return n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Dropzone "+e._s(t.id))])]),e._v(" "),n("vddl-list",{staticClass:"panel__body horizontal__container",attrs:{list:t.container,"allowed-types":["containerType"],"external-sources":!0}},e._l(t.container,function(i,a){return n("vddl-draggable",{key:i.id,staticClass:"panel",attrs:{draggable:i,index:a,wrapper:t.container,type:"containerType","effect-allowed":"copyMove"}},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Container "+e._s(i.id))])]),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list padding",attrs:{list:i.list,horizontal:!0,"allowed-types":["itemType"],"external-sources":!0}},e._l(i.list,function(t,a){return n("vddl-draggable",{key:t.id,staticClass:"panel__body--item horizontal-item",attrs:{draggable:t,type:"itemType","effect-allowed":"copyMove",index:a,wrapper:i.list}},[e._v("\n                  "+e._s(t.label)+"\n                ")])}))],1)])}))],1)])}))],1)},staticRenderFns:[]}},470:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menus"},e._l(e.links,function(t){return n("div",{staticClass:"menus__item"},[n("router-link",{attrs:{to:t.name}},[e._v(e._s(t.name))])],1)}))},staticRenderFns:[]}},471:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content"},[n("v-title",[e._v("Handle")]),e._v(" "),n("div",{staticClass:"v-row handleDemo"},e._l(e.lists,function(t,i){return n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("List "+e._s(i))])]),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list",attrs:{list:t,horizontal:!1}},e._l(t,function(i,a){return n("vddl-draggable",{key:i.label,staticClass:"panel__body--item no-padding-left",attrs:{draggable:i,index:a,wrapper:t,"effect-allowed":"move"}},[n("vddl-nodrag",{staticClass:"nodrag"},[n("vddl-handle",{staticClass:"handle",attrs:{"handle-left":20,"handle-top":20}}),e._v(" "),n("div",[e._v(e._s(i.label))])],1)],1)}))],1)])])}))],1)},staticRenderFns:[]}},472:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content tree"},[n("v-title",[e._v("Tree")]),e._v(" "),n("div",{staticClass:"v-row"},[n("div",{staticClass:"vddl-tree"},[n("tree",{attrs:{item:e.staticData,itemKey:"id_node",itemLabel:"label",itemLabelAlt:"code",selected:e.handleSelect,moved:e.handleMove,dropped:e.handleDrop}})],1)])],1)},staticRenderFns:[]}},473:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__container"},[e._m(0),e._v(" "),n("h3",[e._v("Vue components for modifying lists with the ")]),e._v(" "),n("h3",[e._v("HTML5 drag & drop API.")]),e._v(" "),e._m(1),e._v(" "),n("v-menus")],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"logo",attrs:{href:"/",title:"vddl"}},[i("img",{attrs:{src:n(450),width:"200",alt:"vddl-logo"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-row buttons"},[n("div",{staticClass:"v-col--auto button"},[n("a",{attrs:{href:"http://hejx.space/vddl",title:"docs"}},[e._v("Documentation")])]),e._v(" "),n("div",{staticClass:"v-col--auto button"},[n("a",{attrs:{href:"https://github.com/hejianxian/vddl",title:"github"}},[e._v("Github")])])])}]}},474:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{staticClass:"demo__title"},[n("span",[e._v("# ")]),e._t("default")],2)},staticRenderFns:[]}},475:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content"},[n("v-title",[e._v("Item types")]),e._v(" "),n("div",{staticClass:"v-row"},e._l(e.lists,function(t){return n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__heading"},[n("h3",{},[e._v("List of "+e._s(t.label)+" (max. "+e._s(t.max)+")")])]),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list",attrs:{list:t.people,"allowed-types":t.allowedTypes,"disable-if":t.people.length>=t.max}},[e._l(t.people,function(i,a){return n("vddl-draggable",{key:i.name,staticClass:"panel__body--item",class:{unknown:"unknown"==i.type},attrs:{draggable:i,type:i.type,wrapper:t.people,index:a,"disable-if":"unknown"==i.type,"effect-allowed":"move"}},[e._v("\n              "+e._s(i.name)+"\n            ")])}),e._v(" "),n("vddl-placeholder",{staticClass:"panel__placeholder"},[e._v("\n              Drop any "),n("strong",[e._v(e._s(t.allowedTypes.join(" or ")))]),e._v(" here\n            ")])],2)],1)])])}))],1)},staticRenderFns:[]}},476:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vddl-draggable",{staticClass:"panel__body--item",class:{selected:e.selectedItem===e.item},attrs:{draggable:e.item,index:e.index,"disable-if":e.disable,selected:e.selectedEvent,wrapper:e.list}},["container"===e.item.type?n("div",{staticClass:"panel padding"},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Container "+e._s(e.item.id))])]),e._v(" "),n("vddl-list",{staticClass:"panel__body",attrs:{list:e.item.columns,"disable-if":e.disable,"external-sources":!0}},e._l(e.item.columns,function(t,i){return n("list",{key:t.id,attrs:{item:t,list:e.item.columns,index:i,selected:e.selectedEvent,"selected-item":e.selectedItem,disable:e.disable}})}))],1):n("p",[e._v("\n    "+e._s(e.item.type)+" "+e._s(e.item.id)+"\n  ")])])},staticRenderFns:[]}},477:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("p",[e._v("\n      Designed and built by "),n("a",{attrs:{href:"https://github.com/hejianxian",target:"_blank"}},[e._v("Hejx")]),e._v(".\n    ")]),e._v(" "),n("p",[e._v("\n      Code on "),n("a",{attrs:{href:"https://github.com/hejianxian/vddl",target:"_blank"}},[e._v("Github")]),e._v(" and licensed under "),n("a",{attrs:{href:"https://github.com/hejianxian/vddl/blob/master/LICENSE",target:"_blank"}},[e._v("The MIT License")]),e._v(".\n    ")])])])}]}}},[189]);
//# sourceMappingURL=app.cd0ab8c0a94fe97d71f7.js.map