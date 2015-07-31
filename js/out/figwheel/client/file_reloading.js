// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__27386_SHARP_,p2__27387_SHARP_){
var and__18893__auto__ = p1__27386_SHARP_;
if(cljs.core.truth_(and__18893__auto__)){
return p2__27387_SHARP_;
} else {
return and__18893__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18905__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18905__auto__){
return or__18905__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18905__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18905__auto__){
return or__18905__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18905__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19801__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19802__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19804__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19804__auto__,method_table__19800__auto__,prefer_table__19801__auto__,method_cache__19802__auto__,cached_hierarchy__19803__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27388){
var map__27389 = p__27388;
var map__27389__$1 = ((cljs.core.seq_QMARK_.call(null,map__27389))?cljs.core.apply.call(null,cljs.core.hash_map,map__27389):map__27389);
var file = cljs.core.get.call(null,map__27389__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__27390){
var map__27391 = p__27390;
var map__27391__$1 = ((cljs.core.seq_QMARK_.call(null,map__27391))?cljs.core.apply.call(null,cljs.core.hash_map,map__27391):map__27391);
var namespace = cljs.core.get.call(null,map__27391__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19801__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19802__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19803__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19804__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19804__auto__,method_table__19800__auto__,prefer_table__19801__auto__,method_cache__19802__auto__,cached_hierarchy__19803__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e27392){if((e27392 instanceof Error)){
var e = e27392;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27392;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__27394 = arguments.length;
switch (G__27394) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27396,callback){
var map__27398 = p__27396;
var map__27398__$1 = ((cljs.core.seq_QMARK_.call(null,map__27398))?cljs.core.apply.call(null,cljs.core.hash_map,map__27398):map__27398);
var file_msg = map__27398__$1;
var request_url = cljs.core.get.call(null,map__27398__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27398,map__27398__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27398,map__27398__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27399){
var map__27401 = p__27399;
var map__27401__$1 = ((cljs.core.seq_QMARK_.call(null,map__27401))?cljs.core.apply.call(null,cljs.core.hash_map,map__27401):map__27401);
var file_msg = map__27401__$1;
var namespace = cljs.core.get.call(null,map__27401__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__27401__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18905__auto__ = meta_data;
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18893__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18893__auto__){
var or__18905__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18905__auto____$1)){
return or__18905__auto____$1;
} else {
var and__18893__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18893__auto____$1){
var or__18905__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18905__auto____$2){
return or__18905__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18893__auto____$1;
}
}
}
} else {
return and__18893__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27402,callback){
var map__27404 = p__27402;
var map__27404__$1 = ((cljs.core.seq_QMARK_.call(null,map__27404))?cljs.core.apply.call(null,cljs.core.hash_map,map__27404):map__27404);
var file_msg = map__27404__$1;
var request_url = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22277__auto___27491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___27491,out){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___27491,out){
return (function (state_27473){
var state_val_27474 = (state_27473[(1)]);
if((state_val_27474 === (1))){
var inst_27451 = cljs.core.nth.call(null,files,(0),null);
var inst_27452 = cljs.core.nthnext.call(null,files,(1));
var inst_27453 = files;
var state_27473__$1 = (function (){var statearr_27475 = state_27473;
(statearr_27475[(7)] = inst_27451);

(statearr_27475[(8)] = inst_27452);

(statearr_27475[(9)] = inst_27453);

return statearr_27475;
})();
var statearr_27476_27492 = state_27473__$1;
(statearr_27476_27492[(2)] = null);

(statearr_27476_27492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (2))){
var inst_27456 = (state_27473[(10)]);
var inst_27453 = (state_27473[(9)]);
var inst_27456__$1 = cljs.core.nth.call(null,inst_27453,(0),null);
var inst_27457 = cljs.core.nthnext.call(null,inst_27453,(1));
var inst_27458 = (inst_27456__$1 == null);
var inst_27459 = cljs.core.not.call(null,inst_27458);
var state_27473__$1 = (function (){var statearr_27477 = state_27473;
(statearr_27477[(11)] = inst_27457);

(statearr_27477[(10)] = inst_27456__$1);

return statearr_27477;
})();
if(inst_27459){
var statearr_27478_27493 = state_27473__$1;
(statearr_27478_27493[(1)] = (4));

} else {
var statearr_27479_27494 = state_27473__$1;
(statearr_27479_27494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (3))){
var inst_27471 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27473__$1,inst_27471);
} else {
if((state_val_27474 === (4))){
var inst_27456 = (state_27473[(10)]);
var inst_27461 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27456);
var state_27473__$1 = state_27473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27473__$1,(7),inst_27461);
} else {
if((state_val_27474 === (5))){
var inst_27467 = cljs.core.async.close_BANG_.call(null,out);
var state_27473__$1 = state_27473;
var statearr_27480_27495 = state_27473__$1;
(statearr_27480_27495[(2)] = inst_27467);

(statearr_27480_27495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (6))){
var inst_27469 = (state_27473[(2)]);
var state_27473__$1 = state_27473;
var statearr_27481_27496 = state_27473__$1;
(statearr_27481_27496[(2)] = inst_27469);

(statearr_27481_27496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27474 === (7))){
var inst_27457 = (state_27473[(11)]);
var inst_27463 = (state_27473[(2)]);
var inst_27464 = cljs.core.async.put_BANG_.call(null,out,inst_27463);
var inst_27453 = inst_27457;
var state_27473__$1 = (function (){var statearr_27482 = state_27473;
(statearr_27482[(12)] = inst_27464);

(statearr_27482[(9)] = inst_27453);

return statearr_27482;
})();
var statearr_27483_27497 = state_27473__$1;
(statearr_27483_27497[(2)] = null);

(statearr_27483_27497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22277__auto___27491,out))
;
return ((function (switch__22215__auto__,c__22277__auto___27491,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto____0 = (function (){
var statearr_27487 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27487[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto__);

(statearr_27487[(1)] = (1));

return statearr_27487;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto____1 = (function (state_27473){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_27473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e27488){if((e27488 instanceof Object)){
var ex__22219__auto__ = e27488;
var statearr_27489_27498 = state_27473;
(statearr_27489_27498[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27499 = state_27473;
state_27473 = G__27499;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto__ = function(state_27473){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto____1.call(this,state_27473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___27491,out))
})();
var state__22279__auto__ = (function (){var statearr_27490 = f__22278__auto__.call(null);
(statearr_27490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___27491);

return statearr_27490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___27491,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27500,p__27501){
var map__27504 = p__27500;
var map__27504__$1 = ((cljs.core.seq_QMARK_.call(null,map__27504))?cljs.core.apply.call(null,cljs.core.hash_map,map__27504):map__27504);
var opts = map__27504__$1;
var url_rewriter = cljs.core.get.call(null,map__27504__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27505 = p__27501;
var map__27505__$1 = ((cljs.core.seq_QMARK_.call(null,map__27505))?cljs.core.apply.call(null,cljs.core.hash_map,map__27505):map__27505);
var file_msg = map__27505__$1;
var file = cljs.core.get.call(null,map__27505__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27506,opts){
var map__27509 = p__27506;
var map__27509__$1 = ((cljs.core.seq_QMARK_.call(null,map__27509))?cljs.core.apply.call(null,cljs.core.hash_map,map__27509):map__27509);
var eval_body__$1 = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18893__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18893__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18893__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27510){var e = e27510;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27515,p__27516){
var map__27718 = p__27515;
var map__27718__$1 = ((cljs.core.seq_QMARK_.call(null,map__27718))?cljs.core.apply.call(null,cljs.core.hash_map,map__27718):map__27718);
var opts = map__27718__$1;
var before_jsload = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__27718__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__27719 = p__27516;
var map__27719__$1 = ((cljs.core.seq_QMARK_.call(null,map__27719))?cljs.core.apply.call(null,cljs.core.hash_map,map__27719):map__27719);
var msg = map__27719__$1;
var files = cljs.core.get.call(null,map__27719__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (state_27844){
var state_val_27845 = (state_27844[(1)]);
if((state_val_27845 === (7))){
var inst_27734 = (state_27844[(7)]);
var inst_27733 = (state_27844[(8)]);
var inst_27731 = (state_27844[(9)]);
var inst_27732 = (state_27844[(10)]);
var inst_27739 = cljs.core._nth.call(null,inst_27732,inst_27734);
var inst_27740 = figwheel.client.file_reloading.eval_body.call(null,inst_27739,opts);
var inst_27741 = (inst_27734 + (1));
var tmp27846 = inst_27733;
var tmp27847 = inst_27731;
var tmp27848 = inst_27732;
var inst_27731__$1 = tmp27847;
var inst_27732__$1 = tmp27848;
var inst_27733__$1 = tmp27846;
var inst_27734__$1 = inst_27741;
var state_27844__$1 = (function (){var statearr_27849 = state_27844;
(statearr_27849[(7)] = inst_27734__$1);

(statearr_27849[(8)] = inst_27733__$1);

(statearr_27849[(9)] = inst_27731__$1);

(statearr_27849[(11)] = inst_27740);

(statearr_27849[(10)] = inst_27732__$1);

return statearr_27849;
})();
var statearr_27850_27919 = state_27844__$1;
(statearr_27850_27919[(2)] = null);

(statearr_27850_27919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (20))){
var inst_27781 = (state_27844[(12)]);
var inst_27776 = (state_27844[(13)]);
var inst_27780 = (state_27844[(14)]);
var inst_27777 = (state_27844[(15)]);
var inst_27783 = (state_27844[(16)]);
var inst_27786 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27788 = (function (){var all_files = inst_27776;
var files_SINGLEQUOTE_ = inst_27777;
var res_SINGLEQUOTE_ = inst_27780;
var res = inst_27781;
var files_not_loaded = inst_27783;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27781,inst_27776,inst_27780,inst_27777,inst_27783,inst_27786,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (p__27787){
var map__27851 = p__27787;
var map__27851__$1 = ((cljs.core.seq_QMARK_.call(null,map__27851))?cljs.core.apply.call(null,cljs.core.hash_map,map__27851):map__27851);
var namespace = cljs.core.get.call(null,map__27851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27781,inst_27776,inst_27780,inst_27777,inst_27783,inst_27786,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
})();
var inst_27789 = cljs.core.map.call(null,inst_27788,inst_27781);
var inst_27790 = cljs.core.pr_str.call(null,inst_27789);
var inst_27791 = figwheel.client.utils.log.call(null,inst_27790);
var inst_27792 = (function (){var all_files = inst_27776;
var files_SINGLEQUOTE_ = inst_27777;
var res_SINGLEQUOTE_ = inst_27780;
var res = inst_27781;
var files_not_loaded = inst_27783;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27781,inst_27776,inst_27780,inst_27777,inst_27783,inst_27786,inst_27788,inst_27789,inst_27790,inst_27791,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27781,inst_27776,inst_27780,inst_27777,inst_27783,inst_27786,inst_27788,inst_27789,inst_27790,inst_27791,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
})();
var inst_27793 = setTimeout(inst_27792,(10));
var state_27844__$1 = (function (){var statearr_27852 = state_27844;
(statearr_27852[(17)] = inst_27786);

(statearr_27852[(18)] = inst_27791);

return statearr_27852;
})();
var statearr_27853_27920 = state_27844__$1;
(statearr_27853_27920[(2)] = inst_27793);

(statearr_27853_27920[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (27))){
var inst_27803 = (state_27844[(19)]);
var state_27844__$1 = state_27844;
var statearr_27854_27921 = state_27844__$1;
(statearr_27854_27921[(2)] = inst_27803);

(statearr_27854_27921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (1))){
var inst_27723 = (state_27844[(20)]);
var inst_27720 = before_jsload.call(null,files);
var inst_27721 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27722 = (function (){return ((function (inst_27723,inst_27720,inst_27721,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (p1__27511_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27511_SHARP_);
});
;})(inst_27723,inst_27720,inst_27721,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
})();
var inst_27723__$1 = cljs.core.filter.call(null,inst_27722,files);
var inst_27724 = cljs.core.not_empty.call(null,inst_27723__$1);
var state_27844__$1 = (function (){var statearr_27855 = state_27844;
(statearr_27855[(20)] = inst_27723__$1);

(statearr_27855[(21)] = inst_27720);

(statearr_27855[(22)] = inst_27721);

return statearr_27855;
})();
if(cljs.core.truth_(inst_27724)){
var statearr_27856_27922 = state_27844__$1;
(statearr_27856_27922[(1)] = (2));

} else {
var statearr_27857_27923 = state_27844__$1;
(statearr_27857_27923[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (24))){
var state_27844__$1 = state_27844;
var statearr_27858_27924 = state_27844__$1;
(statearr_27858_27924[(2)] = null);

(statearr_27858_27924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (4))){
var inst_27768 = (state_27844[(2)]);
var inst_27769 = (function (){return ((function (inst_27768,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (p1__27512_SHARP_){
var and__18893__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27512_SHARP_);
if(cljs.core.truth_(and__18893__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27512_SHARP_));
} else {
return and__18893__auto__;
}
});
;})(inst_27768,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
})();
var inst_27770 = cljs.core.filter.call(null,inst_27769,files);
var state_27844__$1 = (function (){var statearr_27859 = state_27844;
(statearr_27859[(23)] = inst_27770);

(statearr_27859[(24)] = inst_27768);

return statearr_27859;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27860_27925 = state_27844__$1;
(statearr_27860_27925[(1)] = (16));

} else {
var statearr_27861_27926 = state_27844__$1;
(statearr_27861_27926[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (15))){
var inst_27758 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27862_27927 = state_27844__$1;
(statearr_27862_27927[(2)] = inst_27758);

(statearr_27862_27927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (21))){
var state_27844__$1 = state_27844;
var statearr_27863_27928 = state_27844__$1;
(statearr_27863_27928[(2)] = null);

(statearr_27863_27928[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (31))){
var inst_27811 = (state_27844[(25)]);
var inst_27821 = (state_27844[(2)]);
var inst_27822 = cljs.core.not_empty.call(null,inst_27811);
var state_27844__$1 = (function (){var statearr_27864 = state_27844;
(statearr_27864[(26)] = inst_27821);

return statearr_27864;
})();
if(cljs.core.truth_(inst_27822)){
var statearr_27865_27929 = state_27844__$1;
(statearr_27865_27929[(1)] = (32));

} else {
var statearr_27866_27930 = state_27844__$1;
(statearr_27866_27930[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (32))){
var inst_27811 = (state_27844[(25)]);
var inst_27824 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27811);
var inst_27825 = cljs.core.pr_str.call(null,inst_27824);
var inst_27826 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27825)].join('');
var inst_27827 = figwheel.client.utils.log.call(null,inst_27826);
var state_27844__$1 = state_27844;
var statearr_27867_27931 = state_27844__$1;
(statearr_27867_27931[(2)] = inst_27827);

(statearr_27867_27931[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (33))){
var state_27844__$1 = state_27844;
var statearr_27868_27932 = state_27844__$1;
(statearr_27868_27932[(2)] = null);

(statearr_27868_27932[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (13))){
var inst_27744 = (state_27844[(27)]);
var inst_27748 = cljs.core.chunk_first.call(null,inst_27744);
var inst_27749 = cljs.core.chunk_rest.call(null,inst_27744);
var inst_27750 = cljs.core.count.call(null,inst_27748);
var inst_27731 = inst_27749;
var inst_27732 = inst_27748;
var inst_27733 = inst_27750;
var inst_27734 = (0);
var state_27844__$1 = (function (){var statearr_27869 = state_27844;
(statearr_27869[(7)] = inst_27734);

(statearr_27869[(8)] = inst_27733);

(statearr_27869[(9)] = inst_27731);

(statearr_27869[(10)] = inst_27732);

return statearr_27869;
})();
var statearr_27870_27933 = state_27844__$1;
(statearr_27870_27933[(2)] = null);

(statearr_27870_27933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (22))){
var inst_27783 = (state_27844[(16)]);
var inst_27796 = (state_27844[(2)]);
var inst_27797 = cljs.core.not_empty.call(null,inst_27783);
var state_27844__$1 = (function (){var statearr_27871 = state_27844;
(statearr_27871[(28)] = inst_27796);

return statearr_27871;
})();
if(cljs.core.truth_(inst_27797)){
var statearr_27872_27934 = state_27844__$1;
(statearr_27872_27934[(1)] = (23));

} else {
var statearr_27873_27935 = state_27844__$1;
(statearr_27873_27935[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (36))){
var state_27844__$1 = state_27844;
var statearr_27874_27936 = state_27844__$1;
(statearr_27874_27936[(2)] = null);

(statearr_27874_27936[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (29))){
var inst_27810 = (state_27844[(29)]);
var inst_27815 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27810);
var inst_27816 = cljs.core.pr_str.call(null,inst_27815);
var inst_27817 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27816)].join('');
var inst_27818 = figwheel.client.utils.log.call(null,inst_27817);
var state_27844__$1 = state_27844;
var statearr_27875_27937 = state_27844__$1;
(statearr_27875_27937[(2)] = inst_27818);

(statearr_27875_27937[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (6))){
var inst_27765 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27876_27938 = state_27844__$1;
(statearr_27876_27938[(2)] = inst_27765);

(statearr_27876_27938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (28))){
var inst_27810 = (state_27844[(29)]);
var inst_27809 = (state_27844[(2)]);
var inst_27810__$1 = cljs.core.get.call(null,inst_27809,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27811 = cljs.core.get.call(null,inst_27809,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27812 = cljs.core.get.call(null,inst_27809,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27813 = cljs.core.not_empty.call(null,inst_27810__$1);
var state_27844__$1 = (function (){var statearr_27877 = state_27844;
(statearr_27877[(25)] = inst_27811);

(statearr_27877[(29)] = inst_27810__$1);

(statearr_27877[(30)] = inst_27812);

return statearr_27877;
})();
if(cljs.core.truth_(inst_27813)){
var statearr_27878_27939 = state_27844__$1;
(statearr_27878_27939[(1)] = (29));

} else {
var statearr_27879_27940 = state_27844__$1;
(statearr_27879_27940[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (25))){
var inst_27842 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27844__$1,inst_27842);
} else {
if((state_val_27845 === (34))){
var inst_27812 = (state_27844[(30)]);
var inst_27830 = (state_27844[(2)]);
var inst_27831 = cljs.core.not_empty.call(null,inst_27812);
var state_27844__$1 = (function (){var statearr_27880 = state_27844;
(statearr_27880[(31)] = inst_27830);

return statearr_27880;
})();
if(cljs.core.truth_(inst_27831)){
var statearr_27881_27941 = state_27844__$1;
(statearr_27881_27941[(1)] = (35));

} else {
var statearr_27882_27942 = state_27844__$1;
(statearr_27882_27942[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (17))){
var inst_27770 = (state_27844[(23)]);
var state_27844__$1 = state_27844;
var statearr_27883_27943 = state_27844__$1;
(statearr_27883_27943[(2)] = inst_27770);

(statearr_27883_27943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (3))){
var state_27844__$1 = state_27844;
var statearr_27884_27944 = state_27844__$1;
(statearr_27884_27944[(2)] = null);

(statearr_27884_27944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (12))){
var inst_27761 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27885_27945 = state_27844__$1;
(statearr_27885_27945[(2)] = inst_27761);

(statearr_27885_27945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (2))){
var inst_27723 = (state_27844[(20)]);
var inst_27730 = cljs.core.seq.call(null,inst_27723);
var inst_27731 = inst_27730;
var inst_27732 = null;
var inst_27733 = (0);
var inst_27734 = (0);
var state_27844__$1 = (function (){var statearr_27886 = state_27844;
(statearr_27886[(7)] = inst_27734);

(statearr_27886[(8)] = inst_27733);

(statearr_27886[(9)] = inst_27731);

(statearr_27886[(10)] = inst_27732);

return statearr_27886;
})();
var statearr_27887_27946 = state_27844__$1;
(statearr_27887_27946[(2)] = null);

(statearr_27887_27946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (23))){
var inst_27781 = (state_27844[(12)]);
var inst_27803 = (state_27844[(19)]);
var inst_27776 = (state_27844[(13)]);
var inst_27780 = (state_27844[(14)]);
var inst_27777 = (state_27844[(15)]);
var inst_27783 = (state_27844[(16)]);
var inst_27799 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27802 = (function (){var all_files = inst_27776;
var files_SINGLEQUOTE_ = inst_27777;
var res_SINGLEQUOTE_ = inst_27780;
var res = inst_27781;
var files_not_loaded = inst_27783;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27781,inst_27803,inst_27776,inst_27780,inst_27777,inst_27783,inst_27799,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (p__27801){
var map__27888 = p__27801;
var map__27888__$1 = ((cljs.core.seq_QMARK_.call(null,map__27888))?cljs.core.apply.call(null,cljs.core.hash_map,map__27888):map__27888);
var meta_data = cljs.core.get.call(null,map__27888__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27781,inst_27803,inst_27776,inst_27780,inst_27777,inst_27783,inst_27799,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
})();
var inst_27803__$1 = cljs.core.group_by.call(null,inst_27802,inst_27783);
var inst_27804 = cljs.core.seq_QMARK_.call(null,inst_27803__$1);
var state_27844__$1 = (function (){var statearr_27889 = state_27844;
(statearr_27889[(19)] = inst_27803__$1);

(statearr_27889[(32)] = inst_27799);

return statearr_27889;
})();
if(inst_27804){
var statearr_27890_27947 = state_27844__$1;
(statearr_27890_27947[(1)] = (26));

} else {
var statearr_27891_27948 = state_27844__$1;
(statearr_27891_27948[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (35))){
var inst_27812 = (state_27844[(30)]);
var inst_27833 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27812);
var inst_27834 = cljs.core.pr_str.call(null,inst_27833);
var inst_27835 = [cljs.core.str("not required: "),cljs.core.str(inst_27834)].join('');
var inst_27836 = figwheel.client.utils.log.call(null,inst_27835);
var state_27844__$1 = state_27844;
var statearr_27892_27949 = state_27844__$1;
(statearr_27892_27949[(2)] = inst_27836);

(statearr_27892_27949[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (19))){
var inst_27781 = (state_27844[(12)]);
var inst_27776 = (state_27844[(13)]);
var inst_27780 = (state_27844[(14)]);
var inst_27777 = (state_27844[(15)]);
var inst_27780__$1 = (state_27844[(2)]);
var inst_27781__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27780__$1);
var inst_27782 = (function (){var all_files = inst_27776;
var files_SINGLEQUOTE_ = inst_27777;
var res_SINGLEQUOTE_ = inst_27780__$1;
var res = inst_27781__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27781,inst_27776,inst_27780,inst_27777,inst_27780__$1,inst_27781__$1,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (p1__27514_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27514_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27781,inst_27776,inst_27780,inst_27777,inst_27780__$1,inst_27781__$1,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
})();
var inst_27783 = cljs.core.filter.call(null,inst_27782,inst_27780__$1);
var inst_27784 = cljs.core.not_empty.call(null,inst_27781__$1);
var state_27844__$1 = (function (){var statearr_27893 = state_27844;
(statearr_27893[(12)] = inst_27781__$1);

(statearr_27893[(14)] = inst_27780__$1);

(statearr_27893[(16)] = inst_27783);

return statearr_27893;
})();
if(cljs.core.truth_(inst_27784)){
var statearr_27894_27950 = state_27844__$1;
(statearr_27894_27950[(1)] = (20));

} else {
var statearr_27895_27951 = state_27844__$1;
(statearr_27895_27951[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (11))){
var state_27844__$1 = state_27844;
var statearr_27896_27952 = state_27844__$1;
(statearr_27896_27952[(2)] = null);

(statearr_27896_27952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (9))){
var inst_27763 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27897_27953 = state_27844__$1;
(statearr_27897_27953[(2)] = inst_27763);

(statearr_27897_27953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (5))){
var inst_27734 = (state_27844[(7)]);
var inst_27733 = (state_27844[(8)]);
var inst_27736 = (inst_27734 < inst_27733);
var inst_27737 = inst_27736;
var state_27844__$1 = state_27844;
if(cljs.core.truth_(inst_27737)){
var statearr_27898_27954 = state_27844__$1;
(statearr_27898_27954[(1)] = (7));

} else {
var statearr_27899_27955 = state_27844__$1;
(statearr_27899_27955[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (14))){
var inst_27744 = (state_27844[(27)]);
var inst_27753 = cljs.core.first.call(null,inst_27744);
var inst_27754 = figwheel.client.file_reloading.eval_body.call(null,inst_27753,opts);
var inst_27755 = cljs.core.next.call(null,inst_27744);
var inst_27731 = inst_27755;
var inst_27732 = null;
var inst_27733 = (0);
var inst_27734 = (0);
var state_27844__$1 = (function (){var statearr_27900 = state_27844;
(statearr_27900[(7)] = inst_27734);

(statearr_27900[(8)] = inst_27733);

(statearr_27900[(9)] = inst_27731);

(statearr_27900[(33)] = inst_27754);

(statearr_27900[(10)] = inst_27732);

return statearr_27900;
})();
var statearr_27901_27956 = state_27844__$1;
(statearr_27901_27956[(2)] = null);

(statearr_27901_27956[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (26))){
var inst_27803 = (state_27844[(19)]);
var inst_27806 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27803);
var state_27844__$1 = state_27844;
var statearr_27902_27957 = state_27844__$1;
(statearr_27902_27957[(2)] = inst_27806);

(statearr_27902_27957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (16))){
var inst_27770 = (state_27844[(23)]);
var inst_27772 = (function (){var all_files = inst_27770;
return ((function (all_files,inst_27770,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function (p1__27513_SHARP_){
return cljs.core.update_in.call(null,p1__27513_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27770,state_val_27845,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
})();
var inst_27773 = cljs.core.map.call(null,inst_27772,inst_27770);
var state_27844__$1 = state_27844;
var statearr_27903_27958 = state_27844__$1;
(statearr_27903_27958[(2)] = inst_27773);

(statearr_27903_27958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (30))){
var state_27844__$1 = state_27844;
var statearr_27904_27959 = state_27844__$1;
(statearr_27904_27959[(2)] = null);

(statearr_27904_27959[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (10))){
var inst_27744 = (state_27844[(27)]);
var inst_27746 = cljs.core.chunked_seq_QMARK_.call(null,inst_27744);
var state_27844__$1 = state_27844;
if(inst_27746){
var statearr_27905_27960 = state_27844__$1;
(statearr_27905_27960[(1)] = (13));

} else {
var statearr_27906_27961 = state_27844__$1;
(statearr_27906_27961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (18))){
var inst_27776 = (state_27844[(13)]);
var inst_27777 = (state_27844[(15)]);
var inst_27776__$1 = (state_27844[(2)]);
var inst_27777__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27776__$1);
var inst_27778 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27777__$1);
var state_27844__$1 = (function (){var statearr_27907 = state_27844;
(statearr_27907[(13)] = inst_27776__$1);

(statearr_27907[(15)] = inst_27777__$1);

return statearr_27907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27844__$1,(19),inst_27778);
} else {
if((state_val_27845 === (37))){
var inst_27839 = (state_27844[(2)]);
var state_27844__$1 = state_27844;
var statearr_27908_27962 = state_27844__$1;
(statearr_27908_27962[(2)] = inst_27839);

(statearr_27908_27962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27845 === (8))){
var inst_27744 = (state_27844[(27)]);
var inst_27731 = (state_27844[(9)]);
var inst_27744__$1 = cljs.core.seq.call(null,inst_27731);
var state_27844__$1 = (function (){var statearr_27909 = state_27844;
(statearr_27909[(27)] = inst_27744__$1);

return statearr_27909;
})();
if(inst_27744__$1){
var statearr_27910_27963 = state_27844__$1;
(statearr_27910_27963[(1)] = (10));

} else {
var statearr_27911_27964 = state_27844__$1;
(statearr_27911_27964[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
;
return ((function (switch__22215__auto__,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto____0 = (function (){
var statearr_27915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27915[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto__);

(statearr_27915[(1)] = (1));

return statearr_27915;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto____1 = (function (state_27844){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_27844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e27916){if((e27916 instanceof Object)){
var ex__22219__auto__ = e27916;
var statearr_27917_27965 = state_27844;
(statearr_27917_27965[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27966 = state_27844;
state_27844 = G__27966;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto__ = function(state_27844){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto____1.call(this,state_27844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
})();
var state__22279__auto__ = (function (){var statearr_27918 = f__22278__auto__.call(null);
(statearr_27918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_27918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__,map__27718,map__27718__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27719,map__27719__$1,msg,files))
);

return c__22277__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27969,link){
var map__27971 = p__27969;
var map__27971__$1 = ((cljs.core.seq_QMARK_.call(null,map__27971))?cljs.core.apply.call(null,cljs.core.hash_map,map__27971):map__27971);
var file = cljs.core.get.call(null,map__27971__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27971,map__27971__$1,file){
return (function (p1__27967_SHARP_,p2__27968_SHARP_){
if(cljs.core._EQ_.call(null,p1__27967_SHARP_,p2__27968_SHARP_)){
return p1__27967_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27971,map__27971__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27975){
var map__27976 = p__27975;
var map__27976__$1 = ((cljs.core.seq_QMARK_.call(null,map__27976))?cljs.core.apply.call(null,cljs.core.hash_map,map__27976):map__27976);
var match_length = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27972_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27972_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__27978 = arguments.length;
switch (G__27978) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27980){
var map__27982 = p__27980;
var map__27982__$1 = ((cljs.core.seq_QMARK_.call(null,map__27982))?cljs.core.apply.call(null,cljs.core.hash_map,map__27982):map__27982);
var f_data = map__27982__$1;
var file = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__27982__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18905__auto__ = request_url;
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27983,files_msg){
var map__28005 = p__27983;
var map__28005__$1 = ((cljs.core.seq_QMARK_.call(null,map__28005))?cljs.core.apply.call(null,cljs.core.hash_map,map__28005):map__28005);
var opts = map__28005__$1;
var on_cssload = cljs.core.get.call(null,map__28005__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28006_28026 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28007_28027 = null;
var count__28008_28028 = (0);
var i__28009_28029 = (0);
while(true){
if((i__28009_28029 < count__28008_28028)){
var f_28030 = cljs.core._nth.call(null,chunk__28007_28027,i__28009_28029);
figwheel.client.file_reloading.reload_css_file.call(null,f_28030);

var G__28031 = seq__28006_28026;
var G__28032 = chunk__28007_28027;
var G__28033 = count__28008_28028;
var G__28034 = (i__28009_28029 + (1));
seq__28006_28026 = G__28031;
chunk__28007_28027 = G__28032;
count__28008_28028 = G__28033;
i__28009_28029 = G__28034;
continue;
} else {
var temp__4425__auto___28035 = cljs.core.seq.call(null,seq__28006_28026);
if(temp__4425__auto___28035){
var seq__28006_28036__$1 = temp__4425__auto___28035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28006_28036__$1)){
var c__19690__auto___28037 = cljs.core.chunk_first.call(null,seq__28006_28036__$1);
var G__28038 = cljs.core.chunk_rest.call(null,seq__28006_28036__$1);
var G__28039 = c__19690__auto___28037;
var G__28040 = cljs.core.count.call(null,c__19690__auto___28037);
var G__28041 = (0);
seq__28006_28026 = G__28038;
chunk__28007_28027 = G__28039;
count__28008_28028 = G__28040;
i__28009_28029 = G__28041;
continue;
} else {
var f_28042 = cljs.core.first.call(null,seq__28006_28036__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28042);

var G__28043 = cljs.core.next.call(null,seq__28006_28036__$1);
var G__28044 = null;
var G__28045 = (0);
var G__28046 = (0);
seq__28006_28026 = G__28043;
chunk__28007_28027 = G__28044;
count__28008_28028 = G__28045;
i__28009_28029 = G__28046;
continue;
}
} else {
}
}
break;
}

var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__,map__28005,map__28005__$1,opts,on_cssload){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__,map__28005,map__28005__$1,opts,on_cssload){
return (function (state_28016){
var state_val_28017 = (state_28016[(1)]);
if((state_val_28017 === (1))){
var inst_28010 = cljs.core.async.timeout.call(null,(100));
var state_28016__$1 = state_28016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28016__$1,(2),inst_28010);
} else {
if((state_val_28017 === (2))){
var inst_28012 = (state_28016[(2)]);
var inst_28013 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_28014 = on_cssload.call(null,inst_28013);
var state_28016__$1 = (function (){var statearr_28018 = state_28016;
(statearr_28018[(7)] = inst_28012);

return statearr_28018;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28016__$1,inst_28014);
} else {
return null;
}
}
});})(c__22277__auto__,map__28005,map__28005__$1,opts,on_cssload))
;
return ((function (switch__22215__auto__,c__22277__auto__,map__28005,map__28005__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto____0 = (function (){
var statearr_28022 = [null,null,null,null,null,null,null,null];
(statearr_28022[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto__);

(statearr_28022[(1)] = (1));

return statearr_28022;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto____1 = (function (state_28016){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28023){if((e28023 instanceof Object)){
var ex__22219__auto__ = e28023;
var statearr_28024_28047 = state_28016;
(statearr_28024_28047[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28048 = state_28016;
state_28016 = G__28048;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto__ = function(state_28016){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto____1.call(this,state_28016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__,map__28005,map__28005__$1,opts,on_cssload))
})();
var state__22279__auto__ = (function (){var statearr_28025 = f__22278__auto__.call(null);
(statearr_28025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_28025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__,map__28005,map__28005__$1,opts,on_cssload))
);

return c__22277__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map