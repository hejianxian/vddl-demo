webpackJsonp([1],{141:function(e,t,n){/*!
 * Vddl.js v0.7.0
 * (c) 2017 Hejx
 * Released under the MIT License.
 * https://github.com/hejianxian/vddl#readme
 */
!function(t,n){e.exports=n()}(0,function(){var e={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vddl-draggable",on:{dragstart:function(t){t.stopPropagation(),e.handleDragstart(t)},dragend:function(t){t.stopPropagation(),e.handleDragend(t)},click:function(t){t.stopPropagation(),e.handleClick(t)},selectstart:e.handleSelected}},[e._t("default")],2)},staticRenderFns:[],name:"vddl-draggable",props:{draggable:[Object,Array],wrapper:Array,index:Number,effectAllowed:String,type:String,disableIf:Boolean,dragstart:Function,selected:Function,dragend:Function,moved:Function,copied:Function,canceled:Function},data:function(){return{}},computed:{},methods:{handleDragstart:function(e){var t=this,n=JSON.stringify(this.draggable);if("false"==n||this.disableIf)return!0;e.dataTransfer.setData("Text",n),e.dataTransfer.effectAllowed=this.effectAllowed||"move",this.$el.className=this.$el.className.trim()+" vddl-dragging",setTimeout(function(){t.$el.className=t.$el.className.trim()+" vddl-dragging-source"},0),this.vddlDropEffectWorkaround.dropEffect="none",this.vddlDragTypeWorkaround.isDragging=!0,this.vddlDragTypeWorkaround.dragType=this.type||void 0,e._dndHandle&&e.dataTransfer.setDragImage&&e.dataTransfer.setDragImage(this.$el,e._dndHandleLeft,e._dndHandleTop),"function"==typeof this.dragstart&&this.dragstart.call(this,e.target)},handleDragend:function(e){var t=this,n=this.vddlDropEffectWorkaround.dropEffect;switch(n){case"move":"function"==typeof this.moved?this.$nextTick(function(){t.moved({index:t.index,list:t.wrapper,event:e.target,draggable:t.draggable})}):this.$nextTick(function(){t.wrapper.splice(t.index,1)});break;case"copy":"function"==typeof this.copied&&this.copied(this.draggable,e.target);break;case"none":"function"==typeof this.canceled&&this.canceled(e.target)}"function"==typeof this.dragend&&this.dragend(n,e.target),this.$el.className=this.$el.className.replace("vddl-dragging","").trim(),setTimeout(function(){t.$el&&(t.$el.className=t.$el.className.replace("vddl-dragging-source","").trim())},0),this.vddlDragTypeWorkaround.isDragging=!1},handleClick:function(e){this.selected&&"function"==typeof this.selected&&this.selected(this.wrapper[this.index],e.target)},handleSelected:function(){return this.dragDrop&&this.dragDrop(),!1},init:function(){var e=!0;this.disableIf&&(e=!1),this.$el.setAttribute("draggable",e)}},watch:{disableIf:function(e){this.$el.setAttribute("draggable",!e)}},ready:function(){this.init()},mounted:function(){this.init()}},t={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vddl-list",on:{dragenter:function(t){t.preventDefault(),e.handleDragenter(t)},dragover:function(t){t.stopPropagation(),t.preventDefault(),e.handleDragover(t)},drop:function(t){t.stopPropagation(),t.preventDefault(),e.handleDrop(t)},dragleave:e.handleDragleave}},[e._t("default")],2)},staticRenderFns:[],name:"vddl-list",props:{list:Array,allowedTypes:Array,disableIf:Boolean,horizontal:Boolean,externalSources:Boolean,dragover:Function,inserted:Function,drop:Function},data:function(){return{}},computed:{},methods:{handleDragenter:function(e){if(!this.isDropAllowed(e))return!0},handleDragover:function(e){var t=this;if(!this.isDropAllowed(e))return!0;if(this.placeholderNode.parentNode!=this.listNode&&this.listNode.appendChild(this.placeholderNode),e.target!==this.listNode){for(var n=e.target;n.parentNode!==this.listNode&&n.parentNode;)n=n.parentNode;n.parentNode===this.listNode&&n!==this.placeholderNode&&(this.isMouseInFirstHalf(e,n)?this.listNode.insertBefore(this.placeholderNode,n):this.listNode.insertBefore(this.placeholderNode,n.nextSibling))}else if(this.isMouseInFirstHalf(e,this.placeholderNode,!0))for(;this.placeholderNode.previousElementSibling&&(this.isMouseInFirstHalf(e,this.placeholderNode.previousElementSibling,!0)||0===this.placeholderNode.previousElementSibling.offsetHeight);)t.listNode.insertBefore(t.placeholderNode,t.placeholderNode.previousElementSibling);else for(;this.placeholderNode.nextElementSibling&&!this.isMouseInFirstHalf(e,this.placeholderNode.nextElementSibling,!0);)t.listNode.insertBefore(t.placeholderNode,t.placeholderNode.nextElementSibling.nextElementSibling);return this.dragover&&!this.invokeCallback("dragover",e,this.getPlaceholderIndex())?this.stopDragover(e):(this.$el.className.indexOf("vddl-dragover")<0&&(this.$el.className=this.$el.className.trim()+" vddl-dragover"),!1)},handleDrop:function(e){if(!this.isDropAllowed(e))return!0;var t,n=e.dataTransfer.getData("Text")||e.dataTransfer.getData("text/plain");try{t=JSON.parse(n)}catch(e){return this.stopDragover()}var a=this.getPlaceholderIndex();return this.drop&&!(t=this.invokeCallback("drop",e,a,t))?this.stopDragover():(!0!==t&&this.list.splice(a,0,t),this.invokeCallback("inserted",e,a,t),"none"===e.dataTransfer.dropEffect?"copy"===e.dataTransfer.effectAllowed||"move"===e.dataTransfer.effectAllowed?this.vddlDropEffectWorkaround.dropEffect=e.dataTransfer.effectAllowed:this.vddlDropEffectWorkaround.dropEffect=e.ctrlKey?"copy":"move":this.vddlDropEffectWorkaround.dropEffect=e.dataTransfer.dropEffect,this.stopDragover(),!1)},handleDragleave:function(e){var t=this;this.$el.className=this.$el.className.replace("vddl-dragover","").trim(),setTimeout(function(){t.$el.className.indexOf("vddl-dragover")<0&&t.placeholderNode.parentNode&&t.placeholderNode.parentNode.removeChild(t.placeholderNode)},100)},isMouseInFirstHalf:function(e,t,n){var a=this.horizontal?e.offsetX||e.layerX:e.offsetY||e.layerY,i=this.horizontal?t.offsetWidth:t.offsetHeight,s=this.horizontal?t.offsetLeft:t.offsetTop;return s=n?s:0,a<s+i/2},getPlaceholderElement:function(){var e=this.$el.parentNode.querySelectorAll(".vddl-placeholder");if(e.length>0)return e[0];var t=document.createElement("div");return t.setAttribute("class","vddl-placeholder"),t},getPlaceholderIndex:function(){return Array.prototype.indexOf.call(this.listNode.children,this.placeholderNode)},isDropAllowed:function(e){if(!this.vddlDragTypeWorkaround.isDragging&&!this.externalSources)return!1;if(!this.hasTextMimetype(e.dataTransfer.types))return!1;if(this.allowedTypes&&this.vddlDragTypeWorkaround.isDragging){var t=this.allowedTypes;if(Array.isArray(t)&&-1===t.indexOf(this.vddlDragTypeWorkaround.dragType))return!1}return!this.disableIf},stopDragover:function(){return this.placeholderNode.parentNode&&this.placeholderNode.parentNode.removeChild(this.placeholderNode),this.$el.className=this.$el.className.replace("vddl-dragover","").trim(),!0},invokeCallback:function(e,t,n,a){var i=this[e];return i&&i({event:t,index:n,item:a||void 0,list:this.list,external:!this.vddlDragTypeWorkaround.isDragging,type:this.vddlDragTypeWorkaround.isDragging?this.vddlDragTypeWorkaround.dragType:void 0}),!!i},hasTextMimetype:function(e){if(!e)return!0;for(var t=0;t<e.length;t+=1)if("Text"===e[t]||"text/plain"===e[t])return!0;return!1},init:function(){this.placeholderNode=this.getPlaceholderElement(),this.listNode=this.$el,this.placeholderNode.parentNode&&this.placeholderNode.parentNode.removeChild(this.placeholderNode)}},ready:function(){this.init()},mounted:function(){this.init()}},n={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vddl-handle",on:{dragstart:e.handle,dragend:e.handle}},[e._t("default")],2)},staticRenderFns:[],name:"vddl-handle",props:{handleLeft:Number,handleTop:Number},data:function(){return{}},computed:{},methods:{handle:function(e){e._dndHandle=!0,e._dndHandleLeft=this.handleLeft||0,e._dndHandleTop=this.handleTop||0},init:function(){this.$el.setAttribute("draggable",!0)}},ready:function(){this.init()},mounted:function(){this.init()}},a={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vddl-nodrag",on:{dragstart:e.handleDragstart,dragend:e.handleDragend}},[e._t("default")],2)},staticRenderFns:[],name:"vddl-nodrag",props:{},data:function(){return{}},computed:{},methods:{handleDragstart:function(e){e._dndHandle||(e.dataTransfer.types&&e.dataTransfer.types.length||e.preventDefault(),e.stopPropagation())},handleDragend:function(e){e._dndHandle||e.stopPropagation()},init:function(){this.$el.setAttribute("draggable",!0)}},ready:function(){this.init()},mounted:function(){this.init()}},i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vddl-placeholder"},[e._t("default")],2)},staticRenderFns:[],name:"vddl-placeholder"};return{install:function(s){s.prototype.vddlDropEffectWorkaround={},s.prototype.vddlDragTypeWorkaround={},s.component(e.name,e),s.component(t.name,t),s.component(n.name,n),s.component(a.name,a),s.component(i.name,i)}}})},142:function(e,t,n){"use strict";var a=n(100),i=n.n(a),s=n(98),l=n(140),r=n(159),o=n(160),d=n(161),c=n(433);n.n(c);s.a.use(l.a);t.a=new l.a.Store(i()({actions:r,getters:o},d.a,{strict:!1,plugins:[]}))},143:function(e,t,n){function a(e){n(397)}var i=n(18)(n(146),n(422),a,null,null);e.exports=i.exports},144:function(e,t,n){function a(e){n(403)}var i=n(18)(n(151),n(428),a,null,null);e.exports=i.exports},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(411),i=n.n(a),s=n(410),l=n.n(s);t.default={name:"app",data:function(){return{}},mounted:function(){},components:{vHeader:i.a,vFooter:l.a}}},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-footer"}},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(412),i=n.n(a);t.default={name:"v-header",components:{vMenus:i.a}}},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(97);t.default={name:"v-menus",data:function(){return{links:a.a.splice(1,a.a.length)}}}},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"list",props:["item","list","index","selected","selectedItem","disable"],methods:{selectedEvent:function(e){"function"==typeof this.selected&&this.selected(e)}}}},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"v-title"}},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vddl-handle-demo",data:function(){return{lists:{A:[{label:"Item A1"},{label:"Item A2"},{label:"Item A3"},{label:"Item A4"},{label:"Item A5"}],B:[{label:"Item B1"},{label:"Item B2"},{label:"Item B3"},{label:"Item B4"},{label:"Item B5"}],C:[{label:"Item C1"},{label:"Item C2"},{label:"Item C3"},{label:"Item C4"},{label:"Item C5"}]}}}}},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){for(var e=[],t=1,n=1,a=1,i=0;i<3;i++){e.push({id:t++,container:[]});for(var s=0;s<2;s++){e[i].container.push({id:n++,list:[]});for(var l=0;l<7;l++)e[i].container[s].list.push({label:"Item "+a++,id:a})}}return console.log(e),{lists:e}},computed:{},ready:function(){},attached:function(){},methods:{},components:{}}},154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vddl-item-types-demo",data:function(){return{lists:[{label:"Men",allowedTypes:["man"],max:4,people:[{name:"Bob",type:"man"},{name:"Charlie",type:"man"},{name:"Dave",type:"man"}]},{label:"Women",allowedTypes:["woman"],max:4,people:[{name:"Alice",type:"woman"},{name:"Eve",type:"woman"},{name:"Peggy",type:"woman"}]},{label:"People",allowedTypes:["man","woman"],max:6,people:[{name:"Frank",type:"man"},{name:"Mallory",type:"woman"},{name:"Alex",type:"unknown"},{name:"Oscar",type:"man"},{name:"Wendy",type:"woman"}]}]}}}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(413),i=n.n(a);t.default={data:function(){return{selectedItem:null,itemMock:{type:"new element",id:1},containerMock:{type:"container",id:4,columns:[]},disable:!1,dropzones:{A:[{type:"container",id:1,columns:[{type:"item",id:"1"},{type:"item",id:"2"},{type:"item",id:"3"}]},{type:"item",id:"4"},{type:"item",id:"5"},{type:"item",id:"6"}],B:[{type:"item",id:7},{type:"item",id:"8"},{type:"container",id:"2",columns:[{type:"item",id:"9"},{type:"item",id:"10"},{type:"container",id:"3",columns:[{type:"item",id:"13"},{type:"item",id:"14"}]},{type:"item",id:"15"}]}]}}},methods:{copied:function(e){e.id++},inserted:function(e){console.log(e)},toggleDisable:function(){this.disable=!this.disable},handleSelected:function(e){this.selectedItem=e}},components:{list:i.a}}},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:null,lists:{A:[{label:"Item A1"},{label:"Item A2"},{label:"Item A3"},{label:"Item A4"},{label:"Item A5"}],B:[{label:"Item B1"},{label:"Item B2"},{label:"Item B3"},{label:"Item B4"},{label:"Item B5"}],C:[{label:"Item C1"},{label:"Item C2"},{label:"Item C3"},{label:"Item C4"},{label:"Item C5"}]}}},methods:{selectedEvent:function(e){this.selected=e},handleDragstart:function(){console.log(":v-draggable: dragstart")},handleDragend:function(){console.log(":v-draggable: dragend")},handleCanceled:function(){console.log(":v-draggable: canceled")},handleInserted:function(){console.log(":v-list: inserted")},handleDrop:function(e){console.log(":v-list: drop"),console.log(e);var t=e.index,n=e.list,a=e.item;n.splice(t,0,a)},handleMoved:function(e){console.log(":v-draggable: moved"),console.log(e);var t=e.index;e.list.splice(t,1)},handleDragover:function(){console.log(":v-list: handleDragover")}}}},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(100),i=n.n(a),s=n(140);t.default={data:function(){return{id:1,mutations:[]}},computed:n.i(s.b)({lists:"mockLists"}),methods:i()({},n.i(s.c)(["inserItem","delItem"]),{handleMoved:function(e){this.$store.dispatch("delItem",e),this.mutations.push({id:this.id++,type:"DELETE_ITEM",index:e-1})},handleDrop:function(e){this.$store.dispatch("inserItem",e),this.mutations.push({id:this.id++,type:"INSERT_ITEM",index:e.index})}})}},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(98),i=n(145),s=n(143),l=n.n(s),r=n(141),o=n.n(r),d=n(97),c=n(142),u=n(144),p=n.n(u);a.a.use(o.a),a.a.use(i.a),a.a.component(p.a.name,p.a);var v=new i.a({routes:d.a});new a.a({el:"#app",store:c.a,router:v,render:function(e){return e(l.a)}})},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"inserItem",function(){return i}),n.d(t,"delItem",function(){return s});var a=n(99),i=function(e,t){(0,e.commit)(a.a,t)},s=function(e,t){(0,e.commit)(a.b,t)}},160:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"mockLists",function(){return a});var a=function(e){return e.lists}},161:function(e,t,n){"use strict";var a,i=n(164),s=n.n(i),l=n(99),r={lists:[{label:"Item A1"},{label:"Item A2"},{label:"Item A3"},{label:"Item A4"},{label:"Item A5"}]},o=(a={},s()(a,l.a,function(e,t){var n=t.index,a=t.item;e.lists.splice(n,0,a)}),s()(a,l.b,function(e,t){e.lists.splice(t,1)}),a);t.a={state:r,mutations:o}},395:function(e,t){},396:function(e,t){},397:function(e,t){},398:function(e,t){},399:function(e,t){},400:function(e,t){},401:function(e,t){},402:function(e,t){},403:function(e,t){},404:function(e,t){},405:function(e,t){},406:function(e,t){},408:function(e,t){e.exports="data:image/png;base64,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"},409:function(e,t,n){e.exports=n.p+"static/img/vddl.db23b68.png"},410:function(e,t,n){function a(e){n(406)}var i=n(18)(n(147),n(431),a,null,null);e.exports=i.exports},411:function(e,t,n){function a(e){n(402)}var i=n(18)(n(148),n(427),a,null,null);e.exports=i.exports},412:function(e,t,n){function a(e){n(400)}var i=n(18)(n(149),n(425),a,null,null);e.exports=i.exports},413:function(e,t,n){function a(e){n(405)}var i=n(18)(n(150),n(430),a,null,null);e.exports=i.exports},414:function(e,t,n){function a(e){n(401)}var i=n(18)(n(152),n(426),a,null,null);e.exports=i.exports},415:function(e,t,n){function a(e){n(399)}var i=n(18)(n(153),n(424),a,null,null);e.exports=i.exports},416:function(e,t,n){function a(e){n(404)}var i=n(18)(n(154),n(429),a,"data-v-bb0a8c52",null);e.exports=i.exports},417:function(e,t,n){function a(e){n(396)}var i=n(18)(n(155),n(421),a,null,null);e.exports=i.exports},418:function(e,t,n){function a(e){n(395)}var i=n(18)(n(156),n(420),a,null,null);e.exports=i.exports},419:function(e,t,n){function a(e){n(398)}var i=n(18)(n(157),n(423),a,null,null);e.exports=i.exports},420:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content simple"},[n("v-title",[e._v("Simple")]),e._v(" "),n("div",{staticClass:"v-row"},e._l(e.lists,function(t,a){return n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("List "+e._s(a))])]),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list",attrs:{list:t,inserted:e.handleInserted,dragover:e.handleDragover,drop:e.handleDrop,horizontal:!1}},[e._l(t,function(a,i){return n("vddl-draggable",{key:a.label,staticClass:"panel__body--item",class:{selected:e.selected===a},attrs:{draggable:a,index:i,wrapper:t,"effect-allowed":"move",selected:e.selectedEvent,dragstart:e.handleDragstart,dragend:e.handleDragend,canceled:e.handleCanceled,moved:e.handleMoved}},[e._v("\n                  "+e._s(a.label)+"\n                ")])}),e._v(" "),n("vddl-placeholder",{staticClass:"red"},[e._v("Custom placeholder")])],2)],1)])])}))],1)},staticRenderFns:[]}},421:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-content nested"},[a("v-title",[e._v("Nested")]),e._v(" "),a("div",{staticClass:"v-row"},[e._l(e.dropzones,function(t,n){return a("div",{staticClass:"v-col--40"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel__heading"},[a("h3",[e._v("Dropzone "+e._s(n))])]),e._v(" "),a("div",{staticClass:"panel__body"},[a("vddl-list",{staticClass:"panel__body--list",attrs:{list:t,inserted:e.inserted,"effect-allowed":"move","disable-if":e.disable,"external-sources":!0}},e._l(t,function(n,i){return a("list",{key:n.id,attrs:{item:n,list:t,index:i,selected:e.handleSelected,"selected-item":e.selectedItem,disable:e.disable}})}))],1)])])}),e._v(" "),a("div",{staticClass:"v-col--20"},[a("div",{staticClass:"new-elements"},[a("div",{staticClass:"panel panel--info"},[e._m(0),e._v(" "),a("div",{staticClass:"panel__body"},[a("vddl-draggable",{staticClass:"button",attrs:{draggable:e.itemMock,copied:e.copied,"effect-allowed":"copy"}},[e._v("\n              Add Item\n            ")]),e._v(" "),a("br"),e._v(" "),a("vddl-draggable",{staticClass:"button",attrs:{draggable:e.containerMock,copied:e.copied,"effect-allowed":"copy"}},[e._v("\n              Add Container\n            ")])],1)])]),e._v(" "),a("div",{staticClass:"new-elements disable-element"},[a("div",{staticClass:"panel panel--info"},[e._m(1),e._v(" "),a("div",{staticClass:"panel__body"},[a("div",{staticClass:"button",on:{click:e.toggleDisable}},[e._v("\n              Disable: "+e._s(e.disable)+"\n            ")])])])]),e._v(" "),e.selectedItem?a("div",{staticClass:"selected-item"},[a("div",{staticClass:"panel panel--info"},[e._m(2),e._v(" "),a("div",{staticClass:"panel__body"},[e._v("\n            "+e._s(e.selectedItem.type)+" "+e._s(e.selectedItem.id)+"\n          ")])])]):e._e(),e._v(" "),a("div",{staticClass:"ashcan"},[a("div",{staticClass:"panel panel--info"},[e._m(3),e._v(" "),a("vddl-list",{staticClass:"panel__body",attrs:{list:[]}},[a("img",{staticClass:"ashcan-logo",attrs:{src:n(408),alt:""}})])],1)])])],2)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("New Elements")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Toggle Disable")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Selected")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Ashcan")])])}]}},422:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-header"),e._v(" "),n("div",{staticClass:"container main"},[n("router-view")],1),e._v(" "),n("v-footer")],1)},staticRenderFns:[]}},423:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content simple"},[n("v-title",[e._v("Vuex")]),e._v(" "),n("div",{staticClass:"v-row"},[n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[e._m(0),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list",attrs:{list:e.lists,drop:e.handleDrop,horizontal:!1}},[e._l(e.lists,function(t,a){return n("vddl-draggable",{key:t.label,staticClass:"panel__body--item",attrs:{draggable:t,index:a,wrapper:e.lists,"effect-allowed":"move",moved:e.handleMoved}},[e._v("\n                "+e._s(a)+": "+e._s(t.label)+"\n              ")])}),e._v(" "),n("vddl-placeholder",{staticClass:"red"},[e._v("Custom placeholder")])],2)],1)])]),e._v(" "),n("div",{staticClass:"v-col--auto mutations"},[n("h3",[e._v("Mutations:")]),e._v(" "),0===e.mutations.length?n("p",[e._v("No mutation.")]):e._e(),e._v(" "),e._l(e.mutations,function(t){return n("p",{key:t.id},[e._v(e._s(t.id)+": mutation < "+e._s(t.type)+" > index: "+e._s(t.index))])})],2)])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__heading"},[n("h3",[e._v("List")])])}]}},424:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content horizontal"},[n("v-title",[e._v("Horizontal")]),e._v(" "),n("div",{staticClass:"v-row"},e._l(e.lists,function(t,a){return n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Dropzone "+e._s(t.id))])]),e._v(" "),n("vddl-list",{staticClass:"panel__body horizontal__container",attrs:{list:t.container,"allowed-types":["containerType"],"external-sources":!0}},e._l(t.container,function(a,i){return n("vddl-draggable",{key:a.id,staticClass:"panel",attrs:{draggable:a,index:i,wrapper:t.container,type:"containerType","effect-allowed":"copyMove"}},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Container "+e._s(a.id))])]),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list padding",attrs:{list:a.list,horizontal:!0,"allowed-types":["itemType"],"external-sources":!0}},e._l(a.list,function(t,i){return n("vddl-draggable",{key:t.id,staticClass:"panel__body--item horizontal-item",attrs:{draggable:t,type:"itemType","effect-allowed":"copyMove",index:i,wrapper:a.list}},[e._v("\n                  "+e._s(t.label)+"\n                ")])}))],1)])}))],1)])}))],1)},staticRenderFns:[]}},425:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menus"},e._l(e.links,function(t){return n("div",{staticClass:"menus__item"},[n("router-link",{attrs:{to:t.name}},[e._v(e._s(t.name))])],1)}))},staticRenderFns:[]}},426:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content"},[n("v-title",[e._v("Handle")]),e._v(" "),n("div",{staticClass:"v-row handleDemo"},e._l(e.lists,function(t,a){return n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("List "+e._s(a))])]),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list",attrs:{list:t,horizontal:!1}},e._l(t,function(a,i){return n("vddl-draggable",{key:a.label,staticClass:"panel__body--item no-padding-left",attrs:{draggable:a,index:i,wrapper:t,"effect-allowed":"move"}},[n("vddl-nodrag",{staticClass:"nodrag"},[n("vddl-handle",{staticClass:"handle",attrs:{"handle-left":20,"handle-top":20}}),e._v(" "),n("div",[e._v(e._s(a.label))])],1)],1)}))],1)])])}))],1)},staticRenderFns:[]}},427:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__container"},[e._m(0),e._v(" "),n("h3",[e._v("Vue components for modifying lists with the ")]),e._v(" "),n("h3",[e._v("HTML5 drag & drop API.")]),e._v(" "),e._m(1),e._v(" "),n("v-menus")],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"logo",attrs:{href:"/",title:"vddl"}},[a("img",{attrs:{src:n(409),width:"200",alt:"vddl-logo"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-row buttons"},[n("div",{staticClass:"v-col--auto button"},[n("a",{attrs:{href:"http://hejx.space/vddl",title:"docs"}},[e._v("Documentation")])]),e._v(" "),n("div",{staticClass:"v-col--auto button"},[n("a",{attrs:{href:"https://github.com/hejianxian/vddl",title:"github"}},[e._v("Github")])])])}]}},428:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{staticClass:"demo__title"},[n("span",[e._v("# ")]),e._t("default")],2)},staticRenderFns:[]}},429:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-content"},[n("v-title",[e._v("Item types")]),e._v(" "),n("div",{staticClass:"v-row"},e._l(e.lists,function(t){return n("div",{staticClass:"v-col--auto"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__heading"},[n("h3",{},[e._v("List of "+e._s(t.label)+" (max. "+e._s(t.max)+")")])]),e._v(" "),n("div",{staticClass:"panel__body"},[n("vddl-list",{staticClass:"panel__body--list",attrs:{list:t.people,"allowed-types":t.allowedTypes,"disable-if":t.people.length>=t.max}},[e._l(t.people,function(a,i){return n("vddl-draggable",{key:a.name,staticClass:"panel__body--item",class:{unknown:"unknown"==a.type},attrs:{draggable:a,type:a.type,wrapper:t.people,index:i,"disable-if":"unknown"==a.type,"effect-allowed":"move"}},[e._v("\n              "+e._s(a.name)+"\n            ")])}),e._v(" "),n("vddl-placeholder",{staticClass:"panel__placeholder"},[e._v("\n              Drop any "),n("strong",[e._v(e._s(t.allowedTypes.join(" or ")))]),e._v(" here\n            ")])],2)],1)])])}))],1)},staticRenderFns:[]}},430:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vddl-draggable",{staticClass:"panel__body--item",class:{selected:e.selectedItem===e.item},attrs:{draggable:e.item,index:e.index,"disable-if":e.disable,selected:e.selectedEvent,wrapper:e.list}},["container"===e.item.type?n("div",{staticClass:"panel padding"},[n("div",{staticClass:"panel__heading"},[n("h3",[e._v("Container "+e._s(e.item.id))])]),e._v(" "),n("vddl-list",{staticClass:"panel__body",attrs:{list:e.item.columns,"disable-if":e.disable,"external-sources":!0}},e._l(e.item.columns,function(t,a){return n("list",{key:t.id,attrs:{item:t,list:e.item.columns,index:a,selected:e.selectedEvent,"selected-item":e.selectedItem,disable:e.disable}})}))],1):n("p",[e._v("\n    "+e._s(e.item.type)+" "+e._s(e.item.id)+"\n  ")])])},staticRenderFns:[]}},431:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("p",[e._v("\n      Designed and built by "),n("a",{attrs:{href:"https://github.com/hejianxian",target:"_blank"}},[e._v("Hejx")]),e._v(".\n    ")]),e._v(" "),n("p",[e._v("\n      Code on "),n("a",{attrs:{href:"https://github.com/hejianxian/vddl",target:"_blank"}},[e._v("Github")]),e._v(" and licensed under "),n("a",{attrs:{href:"https://github.com/hejianxian/vddl/blob/master/LICENSE",target:"_blank"}},[e._v("The MIT License")]),e._v(".\n    ")])])])}]}},97:function(e,t,n){"use strict";var a=n(418),i=n.n(a),s=n(416),l=n.n(s),r=n(414),o=n.n(r),d=n(415),c=n.n(d),u=n(417),p=n.n(u),v=n(419),f=n.n(v),h=[{path:"/",redirect:{name:"nested"}},{name:"nested",path:"/nested",component:p.a},{name:"horizontal",path:"/horizontal",component:c.a},{name:"handle",path:"/handle",component:o.a},{name:"item-types",path:"/item-types",component:l.a},{name:"simple",path:"/simple",component:i.a},{name:"vuex",path:"/vuex",component:f.a}];t.a=h},99:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var a="INSERT_ITEM",i="DELETE_ITEM"}},[158]);
//# sourceMappingURL=app.dc377afdd36ca8674471.js.map