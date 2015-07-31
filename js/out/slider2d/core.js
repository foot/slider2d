// Compiled by ClojureScript 0.0-3308 {}
goog.provide('slider2d.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('reagent.session');
goog.require('goog.events.EventType');
goog.require('goog.History');
goog.require('goog.events');
if(typeof slider2d.core.state !== 'undefined'){
} else {
slider2d.core.state = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sz","sz",-1795504382),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"sy","sy",227523849),new cljs.core.Keyword(null,"tz","tz",278339241),new cljs.core.Keyword(null,"ty","ty",158290825),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.Keyword(null,"rz","rz",386461181),new cljs.core.Keyword(null,"ry","ry",-334598563)],[(0),(0),(0),(0),(0),(0),(0),(0),(0)]));
}
if(typeof slider2d.core.mstate !== 'undefined'){
} else {
slider2d.core.mstate = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(75),new cljs.core.Keyword(null,"h","h",1109658740),(75)], null));
}
slider2d.core.drag_move_fn = (function slider2d$core$drag_move_fn(on_drag){
return (function (evt){
return on_drag.call(null,evt.clientX,evt.clientY);
});
});
slider2d.core.drag_end_fn = (function slider2d$core$drag_end_fn(drag_move,drag_end,on_end){
return (function (evt){
goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,drag_move);

goog.events.unlisten(window,goog.events.EventType.MOUSEUP,cljs.core.deref.call(null,drag_end));

return on_end.call(null);
});
});
slider2d.core.dragging = (function slider2d$core$dragging(){
var G__35008 = arguments.length;
switch (G__35008) {
case 1:
return slider2d.core.dragging.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slider2d.core.dragging.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return slider2d.core.dragging.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

slider2d.core.dragging.cljs$core$IFn$_invoke$arity$1 = (function (on_drag){
return slider2d.core.dragging.call(null,on_drag,(function (){
return null;
}),(function (){
return null;
}));
});

slider2d.core.dragging.cljs$core$IFn$_invoke$arity$2 = (function (on_drag,on_start){
return slider2d.core.dragging.call(null,on_drag,on_start,(function (){
return null;
}));
});

slider2d.core.dragging.cljs$core$IFn$_invoke$arity$3 = (function (on_drag,on_start,on_end){
var drag_move = slider2d.core.drag_move_fn.call(null,on_drag);
var drag_end_atom = reagent.core.atom.call(null,null);
var drag_end = slider2d.core.drag_end_fn.call(null,drag_move,drag_end_atom,on_end);
on_start.call(null);

cljs.core.reset_BANG_.call(null,drag_end_atom,drag_end);

goog.events.listen(window,goog.events.EventType.MOUSEMOVE,drag_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,drag_end);
});

slider2d.core.dragging.cljs$lang$maxFixedArity = 3;
slider2d.core.get_bcr = (function slider2d$core$get_bcr(cmp){
return reagent.core.dom_node.call(null,cmp).getBoundingClientRect();
});
slider2d.core.clamp = (function slider2d$core$clamp(a,v,b){
var x__19224__auto__ = (function (){var x__19217__auto__ = a;
var y__19218__auto__ = v;
return ((x__19217__auto__ > y__19218__auto__) ? x__19217__auto__ : y__19218__auto__);
})();
var y__19225__auto__ = b;
return ((x__19224__auto__ < y__19225__auto__) ? x__19224__auto__ : y__19225__auto__);
});
slider2d.core.scale = (function slider2d$core$scale(p__35010,p__35011){
var vec__35014 = p__35010;
var d1 = cljs.core.nth.call(null,vec__35014,(0),null);
var d2 = cljs.core.nth.call(null,vec__35014,(1),null);
var vec__35015 = p__35011;
var r1 = cljs.core.nth.call(null,vec__35015,(0),null);
var r2 = cljs.core.nth.call(null,vec__35015,(1),null);
var dd = (d2 - d1);
var dr = (r2 - r1);
return ((function (dd,dr,vec__35014,d1,d2,vec__35015,r1,r2){
return (function (x){
return (r1 + (dr * ((x - d1) / dd)));
});
;})(dd,dr,vec__35014,d1,d2,vec__35015,r1,r2))
});
slider2d.core.both_scales = (function slider2d$core$both_scales(d,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.scale.call(null,d,r),slider2d.core.scale.call(null,r,d)], null);
});
slider2d.core.slider2d = (function slider2d$core$slider2d(){
var cmp = reagent.core.current_component.call(null);
var defaults = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
var props = reagent.core.merge_props.call(null,defaults,reagent.core.props.call(null,cmp));
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(props);
var h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(props);
var pw = (10);
var ph = (10);
var ew = (w - pw);
var eh = (h - ph);
var on_change = new cljs.core.Keyword(null,"on-change","on-change",-732046149).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,cmp));
var vec__35018 = slider2d.core.both_scales.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ew], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xmin","xmin",1987443874).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"xmax","xmax",1698489761).cljs$core$IFn$_invoke$arity$1(props)], null));
var x__GT_value = cljs.core.nth.call(null,vec__35018,(0),null);
var x__GT_pixels = cljs.core.nth.call(null,vec__35018,(1),null);
var vec__35019 = slider2d.core.both_scales.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),eh], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ymax","ymax",1273371909).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"ymin","ymin",809284189).cljs$core$IFn$_invoke$arity$1(props)], null));
var y__GT_value = cljs.core.nth.call(null,vec__35019,(0),null);
var y__GT_pixels = cljs.core.nth.call(null,vec__35019,(1),null);
var move_point = ((function (cmp,defaults,props,w,h,pw,ph,ew,eh,on_change,vec__35018,x__GT_value,x__GT_pixels,vec__35019,y__GT_value,y__GT_pixels){
return (function (x,y){
var bcr = slider2d.core.get_bcr.call(null,cmp);
var w__$1 = bcr.width;
var h__$1 = bcr.height;
var x__$1 = ((x - bcr.left) - (0.5 * pw));
var y__$1 = ((y - bcr.top) - (0.5 * ph));
return on_change.call(null,x__GT_value.call(null,slider2d.core.clamp.call(null,(0),x__$1,ew)),y__GT_value.call(null,slider2d.core.clamp.call(null,(0),y__$1,eh)));
});})(cmp,defaults,props,w,h,pw,ph,ew,eh,on_change,vec__35018,x__GT_value,x__GT_pixels,vec__35019,y__GT_value,y__GT_pixels))
;
var on_mouse_down = ((function (cmp,defaults,props,w,h,pw,ph,ew,eh,on_change,vec__35018,x__GT_value,x__GT_pixels,vec__35019,y__GT_value,y__GT_pixels,move_point){
return (function (evt){
move_point.call(null,evt.clientX,evt.clientY);

return slider2d.core.dragging.call(null,move_point);
});})(cmp,defaults,props,w,h,pw,ph,ew,eh,on_change,vec__35018,x__GT_value,x__GT_pixels,vec__35019,y__GT_value,y__GT_pixels,move_point))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.plot.noselect","div.plot.noselect",1772507580),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),on_mouse_down,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"background-color","background-color",570434026).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.point","div.point",820135034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),[cljs.core.str((0.5 * pw)),cljs.core.str("px /"),cljs.core.str((0.5 * ph)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),pw,new cljs.core.Keyword(null,"height","height",1025178622),ph,new cljs.core.Keyword(null,"left","left",-399115937),x__GT_pixels.call(null,new cljs.core.Keyword(null,"xvalue","xvalue",-151194364).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"top","top",-1856271961),y__GT_pixels.call(null,new cljs.core.Keyword(null,"yvalue","yvalue",-1332811681).cljs$core$IFn$_invoke$arity$1(props)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#666"], null)], null)], null)], null);
});
slider2d.core.input_text = (function slider2d$core$input_text(){
var map__35022 = reagent.core.props.call(null,reagent.core.current_component.call(null));
var map__35022__$1 = ((cljs.core.seq_QMARK_.call(null,map__35022))?cljs.core.apply.call(null,cljs.core.hash_map,map__35022):map__35022);
var s = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var path = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,s),path),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__35022,map__35022__$1,s,path){
return (function (p1__35020_SHARP_){
return cljs.core.swap_BANG_.call(null,s,cljs.core.assoc_in,path,p1__35020_SHARP_.target.value);
});})(map__35022,map__35022__$1,s,path))
], null)], null);
});
slider2d.core.home_page = (function slider2d$core$home_page(){
var s = cljs.core.deref.call(null,slider2d.core.state);
var ms = cljs.core.deref.call(null,slider2d.core.mstate);
var ks = cljs.core.sort.call(null,cljs.core.keys.call(null,s));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to slider2d"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.slider2d,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"xmax","xmax",1698489761),new cljs.core.Keyword(null,"xmin","xmin",1987443874),new cljs.core.Keyword(null,"xvalue","xvalue",-151194364),new cljs.core.Keyword(null,"ymax","ymax",1273371909),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"ymin","ymin",809284189),new cljs.core.Keyword(null,"yvalue","yvalue",-1332811681)],[(75),(30),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slider2d.core.mstate)),(75),(75),"#ddd",(75),((function (s,ms,ks){
return (function (xvalue,yvalue){
return cljs.core.swap_BANG_.call(null,slider2d.core.mstate,cljs.core.into,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),xvalue,new cljs.core.Keyword(null,"h","h",1109658740),yvalue], null));
});})(s,ms,ks))
,(30),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,slider2d.core.mstate))])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.noselect","table.noselect",341169476),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),(function (){var iter__19659__auto__ = ((function (s,ms,ks){
return (function slider2d$core$home_page_$_iter__35047(s__35048){
return (new cljs.core.LazySeq(null,((function (s,ms,ks){
return (function (){
var s__35048__$1 = s__35048;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35048__$1);
if(temp__4425__auto__){
var s__35048__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35048__$2)){
var c__19657__auto__ = cljs.core.chunk_first.call(null,s__35048__$2);
var size__19658__auto__ = cljs.core.count.call(null,c__19657__auto__);
var b__35050 = cljs.core.chunk_buffer.call(null,size__19658__auto__);
if((function (){var i__35049 = (0);
while(true){
if((i__35049 < size__19658__auto__)){
var k = cljs.core._nth.call(null,c__19657__auto__,i__35049);
cljs.core.chunk_append.call(null,b__35050,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(k)].join('')], null),[cljs.core.str(k)].join('')], null));

var G__35071 = (i__35049 + (1));
i__35049 = G__35071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35050),slider2d$core$home_page_$_iter__35047.call(null,cljs.core.chunk_rest.call(null,s__35048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35050),null);
}
} else {
var k = cljs.core.first.call(null,s__35048__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(k)].join('')], null),[cljs.core.str(k)].join('')], null),slider2d$core$home_page_$_iter__35047.call(null,cljs.core.rest.call(null,s__35048__$2)));
}
} else {
return null;
}
break;
}
});})(s,ms,ks))
,null,null));
});})(s,ms,ks))
;
return iter__19659__auto__.call(null,ks);
})()], null),(function (){var iter__19659__auto__ = ((function (s,ms,ks){
return (function slider2d$core$home_page_$_iter__35051(s__35052){
return (new cljs.core.LazySeq(null,((function (s,ms,ks){
return (function (){
var s__35052__$1 = s__35052;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35052__$1);
if(temp__4425__auto__){
var s__35052__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35052__$2)){
var c__19657__auto__ = cljs.core.chunk_first.call(null,s__35052__$2);
var size__19658__auto__ = cljs.core.count.call(null,c__19657__auto__);
var b__35054 = cljs.core.chunk_buffer.call(null,size__19658__auto__);
if((function (){var i__35053 = (0);
while(true){
if((i__35053 < size__19658__auto__)){
var b = cljs.core._nth.call(null,c__19657__auto__,i__35053);
cljs.core.chunk_append.call(null,b__35054,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(b)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),[cljs.core.str(b)].join('')], null),(function (){var iter__19659__auto__ = ((function (i__35053,b,c__19657__auto__,size__19658__auto__,b__35054,s__35052__$2,temp__4425__auto__,s,ms,ks){
return (function slider2d$core$home_page_$_iter__35051_$_iter__35063(s__35064){
return (new cljs.core.LazySeq(null,((function (i__35053,b,c__19657__auto__,size__19658__auto__,b__35054,s__35052__$2,temp__4425__auto__,s,ms,ks){
return (function (){
var s__35064__$1 = s__35064;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__35064__$1);
if(temp__4425__auto____$1){
var s__35064__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35064__$2)){
var c__19657__auto____$1 = cljs.core.chunk_first.call(null,s__35064__$2);
var size__19658__auto____$1 = cljs.core.count.call(null,c__19657__auto____$1);
var b__35066 = cljs.core.chunk_buffer.call(null,size__19658__auto____$1);
if((function (){var i__35065 = (0);
while(true){
if((i__35065 < size__19658__auto____$1)){
var a = cljs.core._nth.call(null,c__19657__auto____$1,i__35065);
cljs.core.chunk_append.call(null,b__35066,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(a)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.slider2d,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"xmax","xmax",1698489761),new cljs.core.Keyword(null,"xmin","xmin",1987443874),new cljs.core.Keyword(null,"xvalue","xvalue",-151194364),new cljs.core.Keyword(null,"ymax","ymax",1273371909),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"ymin","ymin",809284189),new cljs.core.Keyword(null,"yvalue","yvalue",-1332811681)],[(10),(0),a.call(null,s),(10),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(ms),((cljs.core._EQ_.call(null,a,b))?"#ddd":"eee"),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(ms),((function (i__35065,i__35053,a,c__19657__auto____$1,size__19658__auto____$1,b__35066,s__35064__$2,temp__4425__auto____$1,b,c__19657__auto__,size__19658__auto__,b__35054,s__35052__$2,temp__4425__auto__,s,ms,ks){
return (function (xvalue,yvalue){
return cljs.core.swap_BANG_.call(null,slider2d.core.state,cljs.core.into,new cljs.core.PersistentArrayMap.fromArray([a,xvalue,b,yvalue], true, false));
});})(i__35065,i__35053,a,c__19657__auto____$1,size__19658__auto____$1,b__35066,s__35064__$2,temp__4425__auto____$1,b,c__19657__auto__,size__19658__auto__,b__35054,s__35052__$2,temp__4425__auto__,s,ms,ks))
,(0),b.call(null,s)])], null)], null));

var G__35072 = (i__35065 + (1));
i__35065 = G__35072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35066),slider2d$core$home_page_$_iter__35051_$_iter__35063.call(null,cljs.core.chunk_rest.call(null,s__35064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35066),null);
}
} else {
var a = cljs.core.first.call(null,s__35064__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(a)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.slider2d,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"xmax","xmax",1698489761),new cljs.core.Keyword(null,"xmin","xmin",1987443874),new cljs.core.Keyword(null,"xvalue","xvalue",-151194364),new cljs.core.Keyword(null,"ymax","ymax",1273371909),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"ymin","ymin",809284189),new cljs.core.Keyword(null,"yvalue","yvalue",-1332811681)],[(10),(0),a.call(null,s),(10),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(ms),((cljs.core._EQ_.call(null,a,b))?"#ddd":"eee"),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(ms),((function (i__35053,a,s__35064__$2,temp__4425__auto____$1,b,c__19657__auto__,size__19658__auto__,b__35054,s__35052__$2,temp__4425__auto__,s,ms,ks){
return (function (xvalue,yvalue){
return cljs.core.swap_BANG_.call(null,slider2d.core.state,cljs.core.into,new cljs.core.PersistentArrayMap.fromArray([a,xvalue,b,yvalue], true, false));
});})(i__35053,a,s__35064__$2,temp__4425__auto____$1,b,c__19657__auto__,size__19658__auto__,b__35054,s__35052__$2,temp__4425__auto__,s,ms,ks))
,(0),b.call(null,s)])], null)], null),slider2d$core$home_page_$_iter__35051_$_iter__35063.call(null,cljs.core.rest.call(null,s__35064__$2)));
}
} else {
return null;
}
break;
}
});})(i__35053,b,c__19657__auto__,size__19658__auto__,b__35054,s__35052__$2,temp__4425__auto__,s,ms,ks))
,null,null));
});})(i__35053,b,c__19657__auto__,size__19658__auto__,b__35054,s__35052__$2,temp__4425__auto__,s,ms,ks))
;
return iter__19659__auto__.call(null,ks);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.input_text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"s","s",1705939918),slider2d.core.state,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null)], null)], null)], null)], null));

var G__35073 = (i__35053 + (1));
i__35053 = G__35073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35054),slider2d$core$home_page_$_iter__35051.call(null,cljs.core.chunk_rest.call(null,s__35052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35054),null);
}
} else {
var b = cljs.core.first.call(null,s__35052__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(b)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),[cljs.core.str(b)].join('')], null),(function (){var iter__19659__auto__ = ((function (b,s__35052__$2,temp__4425__auto__,s,ms,ks){
return (function slider2d$core$home_page_$_iter__35051_$_iter__35067(s__35068){
return (new cljs.core.LazySeq(null,((function (b,s__35052__$2,temp__4425__auto__,s,ms,ks){
return (function (){
var s__35068__$1 = s__35068;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__35068__$1);
if(temp__4425__auto____$1){
var s__35068__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35068__$2)){
var c__19657__auto__ = cljs.core.chunk_first.call(null,s__35068__$2);
var size__19658__auto__ = cljs.core.count.call(null,c__19657__auto__);
var b__35070 = cljs.core.chunk_buffer.call(null,size__19658__auto__);
if((function (){var i__35069 = (0);
while(true){
if((i__35069 < size__19658__auto__)){
var a = cljs.core._nth.call(null,c__19657__auto__,i__35069);
cljs.core.chunk_append.call(null,b__35070,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(a)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.slider2d,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"xmax","xmax",1698489761),new cljs.core.Keyword(null,"xmin","xmin",1987443874),new cljs.core.Keyword(null,"xvalue","xvalue",-151194364),new cljs.core.Keyword(null,"ymax","ymax",1273371909),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"ymin","ymin",809284189),new cljs.core.Keyword(null,"yvalue","yvalue",-1332811681)],[(10),(0),a.call(null,s),(10),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(ms),((cljs.core._EQ_.call(null,a,b))?"#ddd":"eee"),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(ms),((function (i__35069,a,c__19657__auto__,size__19658__auto__,b__35070,s__35068__$2,temp__4425__auto____$1,b,s__35052__$2,temp__4425__auto__,s,ms,ks){
return (function (xvalue,yvalue){
return cljs.core.swap_BANG_.call(null,slider2d.core.state,cljs.core.into,new cljs.core.PersistentArrayMap.fromArray([a,xvalue,b,yvalue], true, false));
});})(i__35069,a,c__19657__auto__,size__19658__auto__,b__35070,s__35068__$2,temp__4425__auto____$1,b,s__35052__$2,temp__4425__auto__,s,ms,ks))
,(0),b.call(null,s)])], null)], null));

var G__35074 = (i__35069 + (1));
i__35069 = G__35074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35070),slider2d$core$home_page_$_iter__35051_$_iter__35067.call(null,cljs.core.chunk_rest.call(null,s__35068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35070),null);
}
} else {
var a = cljs.core.first.call(null,s__35068__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(a)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.slider2d,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"xmax","xmax",1698489761),new cljs.core.Keyword(null,"xmin","xmin",1987443874),new cljs.core.Keyword(null,"xvalue","xvalue",-151194364),new cljs.core.Keyword(null,"ymax","ymax",1273371909),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"ymin","ymin",809284189),new cljs.core.Keyword(null,"yvalue","yvalue",-1332811681)],[(10),(0),a.call(null,s),(10),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(ms),((cljs.core._EQ_.call(null,a,b))?"#ddd":"eee"),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(ms),((function (a,s__35068__$2,temp__4425__auto____$1,b,s__35052__$2,temp__4425__auto__,s,ms,ks){
return (function (xvalue,yvalue){
return cljs.core.swap_BANG_.call(null,slider2d.core.state,cljs.core.into,new cljs.core.PersistentArrayMap.fromArray([a,xvalue,b,yvalue], true, false));
});})(a,s__35068__$2,temp__4425__auto____$1,b,s__35052__$2,temp__4425__auto__,s,ms,ks))
,(0),b.call(null,s)])], null)], null),slider2d$core$home_page_$_iter__35051_$_iter__35067.call(null,cljs.core.rest.call(null,s__35068__$2)));
}
} else {
return null;
}
break;
}
});})(b,s__35052__$2,temp__4425__auto__,s,ms,ks))
,null,null));
});})(b,s__35052__$2,temp__4425__auto__,s,ms,ks))
;
return iter__19659__auto__.call(null,ks);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.input_text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"s","s",1705939918),slider2d.core.state,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null)], null)], null)], null)], null),slider2d$core$home_page_$_iter__35051.call(null,cljs.core.rest.call(null,s__35052__$2)));
}
} else {
return null;
}
break;
}
});})(s,ms,ks))
,null,null));
});})(s,ms,ks))
;
return iter__19659__auto__.call(null,ks);
})()], null)], null)], null);
});
slider2d.core.about_page = (function slider2d$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About slider2d"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
slider2d.core.current_page = (function slider2d$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__21195__auto___35077 = (function (params__21196__auto__){
if(cljs.core.map_QMARK_.call(null,params__21196__auto__)){
var map__35075 = params__21196__auto__;
var map__35075__$1 = ((cljs.core.seq_QMARK_.call(null,map__35075))?cljs.core.apply.call(null,cljs.core.hash_map,map__35075):map__35075);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return slider2d.core.home_page;},new cljs.core.Symbol("slider2d.core","home-page","slider2d.core/home-page",-1866845821,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"slider2d.core","slider2d.core",-1944654808,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/slider2d/core.cljs",16,1,103,103,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(slider2d.core.home_page)?slider2d.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21196__auto__)){
var vec__35076 = params__21196__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return slider2d.core.home_page;},new cljs.core.Symbol("slider2d.core","home-page","slider2d.core/home-page",-1866845821,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"slider2d.core","slider2d.core",-1944654808,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/slider2d/core.cljs",16,1,103,103,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(slider2d.core.home_page)?slider2d.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21195__auto___35077);

var action__21195__auto___35080 = (function (params__21196__auto__){
if(cljs.core.map_QMARK_.call(null,params__21196__auto__)){
var map__35078 = params__21196__auto__;
var map__35078__$1 = ((cljs.core.seq_QMARK_.call(null,map__35078))?cljs.core.apply.call(null,cljs.core.hash_map,map__35078):map__35078);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return slider2d.core.about_page;},new cljs.core.Symbol("slider2d.core","about-page","slider2d.core/about-page",-1005588809,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"slider2d.core","slider2d.core",-1944654808,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/slider2d/core.cljs",17,1,150,150,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(slider2d.core.about_page)?slider2d.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21196__auto__)){
var vec__35079 = params__21196__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return slider2d.core.about_page;},new cljs.core.Symbol("slider2d.core","about-page","slider2d.core/about-page",-1005588809,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"slider2d.core","slider2d.core",-1944654808,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/slider2d/core.cljs",17,1,150,150,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(slider2d.core.about_page)?slider2d.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__21195__auto___35080);

slider2d.core.hook_browser_navigation_BANG_ = (function slider2d$core$hook_browser_navigation_BANG_(){
var G__35082 = (new goog.History());
goog.events.listen(G__35082,goog.history.EventType.NAVIGATE,((function (G__35082){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__35082))
);

G__35082.setEnabled(true);

return G__35082;
});
slider2d.core.mount_root = (function slider2d$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider2d.core.current_page], null),document.getElementById("app"));
});
slider2d.core.init_BANG_ = (function slider2d$core$init_BANG_(){
slider2d.core.hook_browser_navigation_BANG_.call(null);

return slider2d.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map