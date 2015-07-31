// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19945__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19945__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27074_27082 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27075_27083 = null;
var count__27076_27084 = (0);
var i__27077_27085 = (0);
while(true){
if((i__27077_27085 < count__27076_27084)){
var k_27086 = cljs.core._nth.call(null,chunk__27075_27083,i__27077_27085);
e.setAttribute(cljs.core.name.call(null,k_27086),cljs.core.get.call(null,attrs,k_27086));

var G__27087 = seq__27074_27082;
var G__27088 = chunk__27075_27083;
var G__27089 = count__27076_27084;
var G__27090 = (i__27077_27085 + (1));
seq__27074_27082 = G__27087;
chunk__27075_27083 = G__27088;
count__27076_27084 = G__27089;
i__27077_27085 = G__27090;
continue;
} else {
var temp__4425__auto___27091 = cljs.core.seq.call(null,seq__27074_27082);
if(temp__4425__auto___27091){
var seq__27074_27092__$1 = temp__4425__auto___27091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27074_27092__$1)){
var c__19690__auto___27093 = cljs.core.chunk_first.call(null,seq__27074_27092__$1);
var G__27094 = cljs.core.chunk_rest.call(null,seq__27074_27092__$1);
var G__27095 = c__19690__auto___27093;
var G__27096 = cljs.core.count.call(null,c__19690__auto___27093);
var G__27097 = (0);
seq__27074_27082 = G__27094;
chunk__27075_27083 = G__27095;
count__27076_27084 = G__27096;
i__27077_27085 = G__27097;
continue;
} else {
var k_27098 = cljs.core.first.call(null,seq__27074_27092__$1);
e.setAttribute(cljs.core.name.call(null,k_27098),cljs.core.get.call(null,attrs,k_27098));

var G__27099 = cljs.core.next.call(null,seq__27074_27092__$1);
var G__27100 = null;
var G__27101 = (0);
var G__27102 = (0);
seq__27074_27082 = G__27099;
chunk__27075_27083 = G__27100;
count__27076_27084 = G__27101;
i__27077_27085 = G__27102;
continue;
}
} else {
}
}
break;
}

var seq__27078_27103 = cljs.core.seq.call(null,children);
var chunk__27079_27104 = null;
var count__27080_27105 = (0);
var i__27081_27106 = (0);
while(true){
if((i__27081_27106 < count__27080_27105)){
var ch_27107 = cljs.core._nth.call(null,chunk__27079_27104,i__27081_27106);
e.appendChild(ch_27107);

var G__27108 = seq__27078_27103;
var G__27109 = chunk__27079_27104;
var G__27110 = count__27080_27105;
var G__27111 = (i__27081_27106 + (1));
seq__27078_27103 = G__27108;
chunk__27079_27104 = G__27109;
count__27080_27105 = G__27110;
i__27081_27106 = G__27111;
continue;
} else {
var temp__4425__auto___27112 = cljs.core.seq.call(null,seq__27078_27103);
if(temp__4425__auto___27112){
var seq__27078_27113__$1 = temp__4425__auto___27112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27078_27113__$1)){
var c__19690__auto___27114 = cljs.core.chunk_first.call(null,seq__27078_27113__$1);
var G__27115 = cljs.core.chunk_rest.call(null,seq__27078_27113__$1);
var G__27116 = c__19690__auto___27114;
var G__27117 = cljs.core.count.call(null,c__19690__auto___27114);
var G__27118 = (0);
seq__27078_27103 = G__27115;
chunk__27079_27104 = G__27116;
count__27080_27105 = G__27117;
i__27081_27106 = G__27118;
continue;
} else {
var ch_27119 = cljs.core.first.call(null,seq__27078_27113__$1);
e.appendChild(ch_27119);

var G__27120 = cljs.core.next.call(null,seq__27078_27113__$1);
var G__27121 = null;
var G__27122 = (0);
var G__27123 = (0);
seq__27078_27103 = G__27120;
chunk__27079_27104 = G__27121;
count__27080_27105 = G__27122;
i__27081_27106 = G__27123;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27071){
var G__27072 = cljs.core.first.call(null,seq27071);
var seq27071__$1 = cljs.core.next.call(null,seq27071);
var G__27073 = cljs.core.first.call(null,seq27071__$1);
var seq27071__$2 = cljs.core.next.call(null,seq27071__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27072,G__27073,seq27071__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19801__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19802__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19804__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19800__auto__,prefer_table__19801__auto__,method_cache__19802__auto__,cached_hierarchy__19803__auto__,hierarchy__19804__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19800__auto__,prefer_table__19801__auto__,method_cache__19802__auto__,cached_hierarchy__19803__auto__,hierarchy__19804__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19804__auto__,method_table__19800__auto__,prefer_table__19801__auto__,method_cache__19802__auto__,cached_hierarchy__19803__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27124 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27124.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27124.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_27124.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27124);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27125,st_map){
var map__27129 = p__27125;
var map__27129__$1 = ((cljs.core.seq_QMARK_.call(null,map__27129))?cljs.core.apply.call(null,cljs.core.hash_map,map__27129):map__27129);
var container_el = cljs.core.get.call(null,map__27129__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27129,map__27129__$1,container_el){
return (function (p__27130){
var vec__27131 = p__27130;
var k = cljs.core.nth.call(null,vec__27131,(0),null);
var v = cljs.core.nth.call(null,vec__27131,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27129,map__27129__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27132,dom_str){
var map__27134 = p__27132;
var map__27134__$1 = ((cljs.core.seq_QMARK_.call(null,map__27134))?cljs.core.apply.call(null,cljs.core.hash_map,map__27134):map__27134);
var c = map__27134__$1;
var content_area_el = cljs.core.get.call(null,map__27134__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27135){
var map__27137 = p__27135;
var map__27137__$1 = ((cljs.core.seq_QMARK_.call(null,map__27137))?cljs.core.apply.call(null,cljs.core.hash_map,map__27137):map__27137);
var content_area_el = cljs.core.get.call(null,map__27137__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__){
return (function (state_27179){
var state_val_27180 = (state_27179[(1)]);
if((state_val_27180 === (1))){
var inst_27164 = (state_27179[(7)]);
var inst_27164__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27165 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27166 = ["10px","10px","100%","68px","1.0"];
var inst_27167 = cljs.core.PersistentHashMap.fromArrays(inst_27165,inst_27166);
var inst_27168 = cljs.core.merge.call(null,inst_27167,style);
var inst_27169 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27164__$1,inst_27168);
var inst_27170 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27164__$1,msg);
var inst_27171 = cljs.core.async.timeout.call(null,(300));
var state_27179__$1 = (function (){var statearr_27181 = state_27179;
(statearr_27181[(7)] = inst_27164__$1);

(statearr_27181[(8)] = inst_27169);

(statearr_27181[(9)] = inst_27170);

return statearr_27181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27179__$1,(2),inst_27171);
} else {
if((state_val_27180 === (2))){
var inst_27164 = (state_27179[(7)]);
var inst_27173 = (state_27179[(2)]);
var inst_27174 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27175 = ["auto"];
var inst_27176 = cljs.core.PersistentHashMap.fromArrays(inst_27174,inst_27175);
var inst_27177 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27164,inst_27176);
var state_27179__$1 = (function (){var statearr_27182 = state_27179;
(statearr_27182[(10)] = inst_27173);

return statearr_27182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27179__$1,inst_27177);
} else {
return null;
}
}
});})(c__22277__auto__))
;
return ((function (switch__22215__auto__,c__22277__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto____0 = (function (){
var statearr_27186 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27186[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto__);

(statearr_27186[(1)] = (1));

return statearr_27186;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto____1 = (function (state_27179){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_27179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e27187){if((e27187 instanceof Object)){
var ex__22219__auto__ = e27187;
var statearr_27188_27190 = state_27179;
(statearr_27188_27190[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27191 = state_27179;
state_27179 = G__27191;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto__ = function(state_27179){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto____1.call(this,state_27179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__))
})();
var state__22279__auto__ = (function (){var statearr_27189 = f__22278__auto__.call(null);
(statearr_27189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_27189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__))
);

return c__22277__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27193 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__27193,(0),null);
var ln = cljs.core.nth.call(null,vec__27193,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27196 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27196,(0),null);
var file_line = cljs.core.nth.call(null,vec__27196,(1),null);
var file_column = cljs.core.nth.call(null,vec__27196,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27196,file_name,file_line,file_column){
return (function (p1__27194_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27194_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27196,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18905__auto__ = file_line;
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
var and__18893__auto__ = cause;
if(cljs.core.truth_(and__18893__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18893__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27198 = figwheel.client.heads_up.ensure_container.call(null);
var map__27198__$1 = ((cljs.core.seq_QMARK_.call(null,map__27198))?cljs.core.apply.call(null,cljs.core.hash_map,map__27198):map__27198);
var content_area_el = cljs.core.get.call(null,map__27198__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__){
return (function (state_27245){
var state_val_27246 = (state_27245[(1)]);
if((state_val_27246 === (1))){
var inst_27228 = (state_27245[(7)]);
var inst_27228__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27229 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27230 = ["0.0"];
var inst_27231 = cljs.core.PersistentHashMap.fromArrays(inst_27229,inst_27230);
var inst_27232 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27228__$1,inst_27231);
var inst_27233 = cljs.core.async.timeout.call(null,(300));
var state_27245__$1 = (function (){var statearr_27247 = state_27245;
(statearr_27247[(8)] = inst_27232);

(statearr_27247[(7)] = inst_27228__$1);

return statearr_27247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(2),inst_27233);
} else {
if((state_val_27246 === (2))){
var inst_27228 = (state_27245[(7)]);
var inst_27235 = (state_27245[(2)]);
var inst_27236 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27237 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27238 = cljs.core.PersistentHashMap.fromArrays(inst_27236,inst_27237);
var inst_27239 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27228,inst_27238);
var inst_27240 = cljs.core.async.timeout.call(null,(200));
var state_27245__$1 = (function (){var statearr_27248 = state_27245;
(statearr_27248[(9)] = inst_27235);

(statearr_27248[(10)] = inst_27239);

return statearr_27248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27245__$1,(3),inst_27240);
} else {
if((state_val_27246 === (3))){
var inst_27228 = (state_27245[(7)]);
var inst_27242 = (state_27245[(2)]);
var inst_27243 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27228,"");
var state_27245__$1 = (function (){var statearr_27249 = state_27245;
(statearr_27249[(11)] = inst_27242);

return statearr_27249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27245__$1,inst_27243);
} else {
return null;
}
}
}
});})(c__22277__auto__))
;
return ((function (switch__22215__auto__,c__22277__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22216__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22216__auto____0 = (function (){
var statearr_27253 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27253[(0)] = figwheel$client$heads_up$clear_$_state_machine__22216__auto__);

(statearr_27253[(1)] = (1));

return statearr_27253;
});
var figwheel$client$heads_up$clear_$_state_machine__22216__auto____1 = (function (state_27245){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_27245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e27254){if((e27254 instanceof Object)){
var ex__22219__auto__ = e27254;
var statearr_27255_27257 = state_27245;
(statearr_27255_27257[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27258 = state_27245;
state_27245 = G__27258;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22216__auto__ = function(state_27245){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22216__auto____1.call(this,state_27245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22216__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22216__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__))
})();
var state__22279__auto__ = (function (){var statearr_27256 = f__22278__auto__.call(null);
(statearr_27256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_27256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__))
);

return c__22277__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__){
return (function (state_27290){
var state_val_27291 = (state_27290[(1)]);
if((state_val_27291 === (1))){
var inst_27280 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27290__$1,(2),inst_27280);
} else {
if((state_val_27291 === (2))){
var inst_27282 = (state_27290[(2)]);
var inst_27283 = cljs.core.async.timeout.call(null,(400));
var state_27290__$1 = (function (){var statearr_27292 = state_27290;
(statearr_27292[(7)] = inst_27282);

return statearr_27292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27290__$1,(3),inst_27283);
} else {
if((state_val_27291 === (3))){
var inst_27285 = (state_27290[(2)]);
var inst_27286 = figwheel.client.heads_up.clear.call(null);
var state_27290__$1 = (function (){var statearr_27293 = state_27290;
(statearr_27293[(8)] = inst_27285);

return statearr_27293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27290__$1,(4),inst_27286);
} else {
if((state_val_27291 === (4))){
var inst_27288 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27290__$1,inst_27288);
} else {
return null;
}
}
}
}
});})(c__22277__auto__))
;
return ((function (switch__22215__auto__,c__22277__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto____0 = (function (){
var statearr_27297 = [null,null,null,null,null,null,null,null,null];
(statearr_27297[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto__);

(statearr_27297[(1)] = (1));

return statearr_27297;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto____1 = (function (state_27290){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_27290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e27298){if((e27298 instanceof Object)){
var ex__22219__auto__ = e27298;
var statearr_27299_27301 = state_27290;
(statearr_27299_27301[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27302 = state_27290;
state_27290 = G__27302;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto__ = function(state_27290){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto____1.call(this,state_27290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__))
})();
var state__22279__auto__ = (function (){var statearr_27300 = f__22278__auto__.call(null);
(statearr_27300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_27300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__))
);

return c__22277__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map