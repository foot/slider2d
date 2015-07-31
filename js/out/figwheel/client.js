// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26310__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26311__i = 0, G__26311__a = new Array(arguments.length -  0);
while (G__26311__i < G__26311__a.length) {G__26311__a[G__26311__i] = arguments[G__26311__i + 0]; ++G__26311__i;}
  args = new cljs.core.IndexedSeq(G__26311__a,0);
} 
return G__26310__delegate.call(this,args);};
G__26310.cljs$lang$maxFixedArity = 0;
G__26310.cljs$lang$applyTo = (function (arglist__26312){
var args = cljs.core.seq(arglist__26312);
return G__26310__delegate(args);
});
G__26310.cljs$core$IFn$_invoke$arity$variadic = G__26310__delegate;
return G__26310;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26313){
var map__26315 = p__26313;
var map__26315__$1 = ((cljs.core.seq_QMARK_.call(null,map__26315))?cljs.core.apply.call(null,cljs.core.hash_map,map__26315):map__26315);
var message = cljs.core.get.call(null,map__26315__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26315__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18905__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18893__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18893__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18893__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22277__auto___26444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___26444,ch){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___26444,ch){
return (function (state_26418){
var state_val_26419 = (state_26418[(1)]);
if((state_val_26419 === (7))){
var inst_26414 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26420_26445 = state_26418__$1;
(statearr_26420_26445[(2)] = inst_26414);

(statearr_26420_26445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (1))){
var state_26418__$1 = state_26418;
var statearr_26421_26446 = state_26418__$1;
(statearr_26421_26446[(2)] = null);

(statearr_26421_26446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (4))){
var inst_26382 = (state_26418[(7)]);
var inst_26382__$1 = (state_26418[(2)]);
var state_26418__$1 = (function (){var statearr_26422 = state_26418;
(statearr_26422[(7)] = inst_26382__$1);

return statearr_26422;
})();
if(cljs.core.truth_(inst_26382__$1)){
var statearr_26423_26447 = state_26418__$1;
(statearr_26423_26447[(1)] = (5));

} else {
var statearr_26424_26448 = state_26418__$1;
(statearr_26424_26448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (13))){
var state_26418__$1 = state_26418;
var statearr_26425_26449 = state_26418__$1;
(statearr_26425_26449[(2)] = null);

(statearr_26425_26449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (6))){
var state_26418__$1 = state_26418;
var statearr_26426_26450 = state_26418__$1;
(statearr_26426_26450[(2)] = null);

(statearr_26426_26450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (3))){
var inst_26416 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26418__$1,inst_26416);
} else {
if((state_val_26419 === (12))){
var inst_26389 = (state_26418[(8)]);
var inst_26402 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26389);
var inst_26403 = cljs.core.first.call(null,inst_26402);
var inst_26404 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26403);
var inst_26405 = console.warn("Figwheel: Not loading code with warnings - ",inst_26404);
var state_26418__$1 = state_26418;
var statearr_26427_26451 = state_26418__$1;
(statearr_26427_26451[(2)] = inst_26405);

(statearr_26427_26451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (2))){
var state_26418__$1 = state_26418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26418__$1,(4),ch);
} else {
if((state_val_26419 === (11))){
var inst_26398 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26428_26452 = state_26418__$1;
(statearr_26428_26452[(2)] = inst_26398);

(statearr_26428_26452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (9))){
var inst_26388 = (state_26418[(9)]);
var inst_26400 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26388,opts);
var state_26418__$1 = state_26418;
if(cljs.core.truth_(inst_26400)){
var statearr_26429_26453 = state_26418__$1;
(statearr_26429_26453[(1)] = (12));

} else {
var statearr_26430_26454 = state_26418__$1;
(statearr_26430_26454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (5))){
var inst_26382 = (state_26418[(7)]);
var inst_26388 = (state_26418[(9)]);
var inst_26384 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26385 = (new cljs.core.PersistentArrayMap(null,2,inst_26384,null));
var inst_26386 = (new cljs.core.PersistentHashSet(null,inst_26385,null));
var inst_26387 = figwheel.client.focus_msgs.call(null,inst_26386,inst_26382);
var inst_26388__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26387);
var inst_26389 = cljs.core.first.call(null,inst_26387);
var inst_26390 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26388__$1,opts);
var state_26418__$1 = (function (){var statearr_26431 = state_26418;
(statearr_26431[(9)] = inst_26388__$1);

(statearr_26431[(8)] = inst_26389);

return statearr_26431;
})();
if(cljs.core.truth_(inst_26390)){
var statearr_26432_26455 = state_26418__$1;
(statearr_26432_26455[(1)] = (8));

} else {
var statearr_26433_26456 = state_26418__$1;
(statearr_26433_26456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (14))){
var inst_26408 = (state_26418[(2)]);
var state_26418__$1 = state_26418;
var statearr_26434_26457 = state_26418__$1;
(statearr_26434_26457[(2)] = inst_26408);

(statearr_26434_26457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (10))){
var inst_26410 = (state_26418[(2)]);
var state_26418__$1 = (function (){var statearr_26435 = state_26418;
(statearr_26435[(10)] = inst_26410);

return statearr_26435;
})();
var statearr_26436_26458 = state_26418__$1;
(statearr_26436_26458[(2)] = null);

(statearr_26436_26458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26419 === (8))){
var inst_26389 = (state_26418[(8)]);
var inst_26392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26393 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26389);
var inst_26394 = cljs.core.async.timeout.call(null,(1000));
var inst_26395 = [inst_26393,inst_26394];
var inst_26396 = (new cljs.core.PersistentVector(null,2,(5),inst_26392,inst_26395,null));
var state_26418__$1 = state_26418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26418__$1,(11),inst_26396);
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
});})(c__22277__auto___26444,ch))
;
return ((function (switch__22215__auto__,c__22277__auto___26444,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22216__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22216__auto____0 = (function (){
var statearr_26440 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26440[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22216__auto__);

(statearr_26440[(1)] = (1));

return statearr_26440;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22216__auto____1 = (function (state_26418){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_26418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e26441){if((e26441 instanceof Object)){
var ex__22219__auto__ = e26441;
var statearr_26442_26459 = state_26418;
(statearr_26442_26459[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26460 = state_26418;
state_26418 = G__26460;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22216__auto__ = function(state_26418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22216__auto____1.call(this,state_26418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22216__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22216__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___26444,ch))
})();
var state__22279__auto__ = (function (){var statearr_26443 = f__22278__auto__.call(null);
(statearr_26443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___26444);

return statearr_26443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___26444,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26461_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26461_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26468 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26468){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26466 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26467 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26466,_STAR_print_newline_STAR_26467,base_path_26468){
return (function() { 
var G__26469__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26470__i = 0, G__26470__a = new Array(arguments.length -  0);
while (G__26470__i < G__26470__a.length) {G__26470__a[G__26470__i] = arguments[G__26470__i + 0]; ++G__26470__i;}
  args = new cljs.core.IndexedSeq(G__26470__a,0);
} 
return G__26469__delegate.call(this,args);};
G__26469.cljs$lang$maxFixedArity = 0;
G__26469.cljs$lang$applyTo = (function (arglist__26471){
var args = cljs.core.seq(arglist__26471);
return G__26469__delegate(args);
});
G__26469.cljs$core$IFn$_invoke$arity$variadic = G__26469__delegate;
return G__26469;
})()
;})(_STAR_print_fn_STAR_26466,_STAR_print_newline_STAR_26467,base_path_26468))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26467;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26466;
}}catch (e26465){if((e26465 instanceof Error)){
var e = e26465;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26468], null));
} else {
var e = e26465;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26468))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26472){
var map__26477 = p__26472;
var map__26477__$1 = ((cljs.core.seq_QMARK_.call(null,map__26477))?cljs.core.apply.call(null,cljs.core.hash_map,map__26477):map__26477);
var opts = map__26477__$1;
var build_id = cljs.core.get.call(null,map__26477__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26477,map__26477__$1,opts,build_id){
return (function (p__26478){
var vec__26479 = p__26478;
var map__26480 = cljs.core.nth.call(null,vec__26479,(0),null);
var map__26480__$1 = ((cljs.core.seq_QMARK_.call(null,map__26480))?cljs.core.apply.call(null,cljs.core.hash_map,map__26480):map__26480);
var msg = map__26480__$1;
var msg_name = cljs.core.get.call(null,map__26480__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26479,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26479,map__26480,map__26480__$1,msg,msg_name,_,map__26477,map__26477__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26479,map__26480,map__26480__$1,msg,msg_name,_,map__26477,map__26477__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26477,map__26477__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26484){
var vec__26485 = p__26484;
var map__26486 = cljs.core.nth.call(null,vec__26485,(0),null);
var map__26486__$1 = ((cljs.core.seq_QMARK_.call(null,map__26486))?cljs.core.apply.call(null,cljs.core.hash_map,map__26486):map__26486);
var msg = map__26486__$1;
var msg_name = cljs.core.get.call(null,map__26486__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26485,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26487){
var map__26495 = p__26487;
var map__26495__$1 = ((cljs.core.seq_QMARK_.call(null,map__26495))?cljs.core.apply.call(null,cljs.core.hash_map,map__26495):map__26495);
var on_compile_warning = cljs.core.get.call(null,map__26495__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26495__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26495,map__26495__$1,on_compile_warning,on_compile_fail){
return (function (p__26496){
var vec__26497 = p__26496;
var map__26498 = cljs.core.nth.call(null,vec__26497,(0),null);
var map__26498__$1 = ((cljs.core.seq_QMARK_.call(null,map__26498))?cljs.core.apply.call(null,cljs.core.hash_map,map__26498):map__26498);
var msg = map__26498__$1;
var msg_name = cljs.core.get.call(null,map__26498__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26497,(1));
var pred__26499 = cljs.core._EQ_;
var expr__26500 = msg_name;
if(cljs.core.truth_(pred__26499.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26500))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26499.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26500))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26495,map__26495__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__,msg_hist,msg_names,msg){
return (function (state_26701){
var state_val_26702 = (state_26701[(1)]);
if((state_val_26702 === (7))){
var inst_26635 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26703_26744 = state_26701__$1;
(statearr_26703_26744[(2)] = inst_26635);

(statearr_26703_26744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (20))){
var inst_26663 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26701__$1 = state_26701;
if(cljs.core.truth_(inst_26663)){
var statearr_26704_26745 = state_26701__$1;
(statearr_26704_26745[(1)] = (22));

} else {
var statearr_26705_26746 = state_26701__$1;
(statearr_26705_26746[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (27))){
var inst_26675 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26676 = figwheel.client.heads_up.display_warning.call(null,inst_26675);
var state_26701__$1 = state_26701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(30),inst_26676);
} else {
if((state_val_26702 === (1))){
var inst_26623 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26701__$1 = state_26701;
if(cljs.core.truth_(inst_26623)){
var statearr_26706_26747 = state_26701__$1;
(statearr_26706_26747[(1)] = (2));

} else {
var statearr_26707_26748 = state_26701__$1;
(statearr_26707_26748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (24))){
var inst_26691 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26708_26749 = state_26701__$1;
(statearr_26708_26749[(2)] = inst_26691);

(statearr_26708_26749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (4))){
var inst_26699 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26701__$1,inst_26699);
} else {
if((state_val_26702 === (15))){
var inst_26651 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26652 = figwheel.client.format_messages.call(null,inst_26651);
var inst_26653 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26654 = figwheel.client.heads_up.display_error.call(null,inst_26652,inst_26653);
var state_26701__$1 = state_26701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(18),inst_26654);
} else {
if((state_val_26702 === (21))){
var inst_26693 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26709_26750 = state_26701__$1;
(statearr_26709_26750[(2)] = inst_26693);

(statearr_26709_26750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (31))){
var inst_26682 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26701__$1 = state_26701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(34),inst_26682);
} else {
if((state_val_26702 === (32))){
var state_26701__$1 = state_26701;
var statearr_26710_26751 = state_26701__$1;
(statearr_26710_26751[(2)] = null);

(statearr_26710_26751[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (33))){
var inst_26687 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26711_26752 = state_26701__$1;
(statearr_26711_26752[(2)] = inst_26687);

(statearr_26711_26752[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (13))){
var inst_26641 = (state_26701[(2)]);
var inst_26642 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26643 = figwheel.client.format_messages.call(null,inst_26642);
var inst_26644 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26645 = figwheel.client.heads_up.display_error.call(null,inst_26643,inst_26644);
var state_26701__$1 = (function (){var statearr_26712 = state_26701;
(statearr_26712[(7)] = inst_26641);

return statearr_26712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(14),inst_26645);
} else {
if((state_val_26702 === (22))){
var inst_26665 = figwheel.client.heads_up.clear.call(null);
var state_26701__$1 = state_26701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(25),inst_26665);
} else {
if((state_val_26702 === (29))){
var inst_26689 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26713_26753 = state_26701__$1;
(statearr_26713_26753[(2)] = inst_26689);

(statearr_26713_26753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (6))){
var inst_26631 = figwheel.client.heads_up.clear.call(null);
var state_26701__$1 = state_26701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(9),inst_26631);
} else {
if((state_val_26702 === (28))){
var inst_26680 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26701__$1 = state_26701;
if(cljs.core.truth_(inst_26680)){
var statearr_26714_26754 = state_26701__$1;
(statearr_26714_26754[(1)] = (31));

} else {
var statearr_26715_26755 = state_26701__$1;
(statearr_26715_26755[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (25))){
var inst_26667 = (state_26701[(2)]);
var inst_26668 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26669 = figwheel.client.heads_up.display_warning.call(null,inst_26668);
var state_26701__$1 = (function (){var statearr_26716 = state_26701;
(statearr_26716[(8)] = inst_26667);

return statearr_26716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(26),inst_26669);
} else {
if((state_val_26702 === (34))){
var inst_26684 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26717_26756 = state_26701__$1;
(statearr_26717_26756[(2)] = inst_26684);

(statearr_26717_26756[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (17))){
var inst_26695 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26718_26757 = state_26701__$1;
(statearr_26718_26757[(2)] = inst_26695);

(statearr_26718_26757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (3))){
var inst_26637 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26701__$1 = state_26701;
if(cljs.core.truth_(inst_26637)){
var statearr_26719_26758 = state_26701__$1;
(statearr_26719_26758[(1)] = (10));

} else {
var statearr_26720_26759 = state_26701__$1;
(statearr_26720_26759[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (12))){
var inst_26697 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26721_26760 = state_26701__$1;
(statearr_26721_26760[(2)] = inst_26697);

(statearr_26721_26760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (2))){
var inst_26625 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26701__$1 = state_26701;
if(cljs.core.truth_(inst_26625)){
var statearr_26722_26761 = state_26701__$1;
(statearr_26722_26761[(1)] = (5));

} else {
var statearr_26723_26762 = state_26701__$1;
(statearr_26723_26762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (23))){
var inst_26673 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26701__$1 = state_26701;
if(cljs.core.truth_(inst_26673)){
var statearr_26724_26763 = state_26701__$1;
(statearr_26724_26763[(1)] = (27));

} else {
var statearr_26725_26764 = state_26701__$1;
(statearr_26725_26764[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (19))){
var inst_26660 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26661 = figwheel.client.heads_up.append_message.call(null,inst_26660);
var state_26701__$1 = state_26701;
var statearr_26726_26765 = state_26701__$1;
(statearr_26726_26765[(2)] = inst_26661);

(statearr_26726_26765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (11))){
var inst_26649 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26701__$1 = state_26701;
if(cljs.core.truth_(inst_26649)){
var statearr_26727_26766 = state_26701__$1;
(statearr_26727_26766[(1)] = (15));

} else {
var statearr_26728_26767 = state_26701__$1;
(statearr_26728_26767[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (9))){
var inst_26633 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26729_26768 = state_26701__$1;
(statearr_26729_26768[(2)] = inst_26633);

(statearr_26729_26768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (5))){
var inst_26627 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26701__$1 = state_26701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(8),inst_26627);
} else {
if((state_val_26702 === (14))){
var inst_26647 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26730_26769 = state_26701__$1;
(statearr_26730_26769[(2)] = inst_26647);

(statearr_26730_26769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (26))){
var inst_26671 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26731_26770 = state_26701__$1;
(statearr_26731_26770[(2)] = inst_26671);

(statearr_26731_26770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (16))){
var inst_26658 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26701__$1 = state_26701;
if(cljs.core.truth_(inst_26658)){
var statearr_26732_26771 = state_26701__$1;
(statearr_26732_26771[(1)] = (19));

} else {
var statearr_26733_26772 = state_26701__$1;
(statearr_26733_26772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (30))){
var inst_26678 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26734_26773 = state_26701__$1;
(statearr_26734_26773[(2)] = inst_26678);

(statearr_26734_26773[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (10))){
var inst_26639 = figwheel.client.heads_up.clear.call(null);
var state_26701__$1 = state_26701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26701__$1,(13),inst_26639);
} else {
if((state_val_26702 === (18))){
var inst_26656 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26735_26774 = state_26701__$1;
(statearr_26735_26774[(2)] = inst_26656);

(statearr_26735_26774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26702 === (8))){
var inst_26629 = (state_26701[(2)]);
var state_26701__$1 = state_26701;
var statearr_26736_26775 = state_26701__$1;
(statearr_26736_26775[(2)] = inst_26629);

(statearr_26736_26775[(1)] = (7));


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
});})(c__22277__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22215__auto__,c__22277__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto____0 = (function (){
var statearr_26740 = [null,null,null,null,null,null,null,null,null];
(statearr_26740[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto__);

(statearr_26740[(1)] = (1));

return statearr_26740;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto____1 = (function (state_26701){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_26701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e26741){if((e26741 instanceof Object)){
var ex__22219__auto__ = e26741;
var statearr_26742_26776 = state_26701;
(statearr_26742_26776[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26777 = state_26701;
state_26701 = G__26777;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto__ = function(state_26701){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto____1.call(this,state_26701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__,msg_hist,msg_names,msg))
})();
var state__22279__auto__ = (function (){var statearr_26743 = f__22278__auto__.call(null);
(statearr_26743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_26743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__,msg_hist,msg_names,msg))
);

return c__22277__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22277__auto___26840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___26840,ch){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___26840,ch){
return (function (state_26823){
var state_val_26824 = (state_26823[(1)]);
if((state_val_26824 === (1))){
var state_26823__$1 = state_26823;
var statearr_26825_26841 = state_26823__$1;
(statearr_26825_26841[(2)] = null);

(statearr_26825_26841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (2))){
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26823__$1,(4),ch);
} else {
if((state_val_26824 === (3))){
var inst_26821 = (state_26823[(2)]);
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26823__$1,inst_26821);
} else {
if((state_val_26824 === (4))){
var inst_26811 = (state_26823[(7)]);
var inst_26811__$1 = (state_26823[(2)]);
var state_26823__$1 = (function (){var statearr_26826 = state_26823;
(statearr_26826[(7)] = inst_26811__$1);

return statearr_26826;
})();
if(cljs.core.truth_(inst_26811__$1)){
var statearr_26827_26842 = state_26823__$1;
(statearr_26827_26842[(1)] = (5));

} else {
var statearr_26828_26843 = state_26823__$1;
(statearr_26828_26843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (5))){
var inst_26811 = (state_26823[(7)]);
var inst_26813 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26811);
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26823__$1,(8),inst_26813);
} else {
if((state_val_26824 === (6))){
var state_26823__$1 = state_26823;
var statearr_26829_26844 = state_26823__$1;
(statearr_26829_26844[(2)] = null);

(statearr_26829_26844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (7))){
var inst_26819 = (state_26823[(2)]);
var state_26823__$1 = state_26823;
var statearr_26830_26845 = state_26823__$1;
(statearr_26830_26845[(2)] = inst_26819);

(statearr_26830_26845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (8))){
var inst_26815 = (state_26823[(2)]);
var state_26823__$1 = (function (){var statearr_26831 = state_26823;
(statearr_26831[(8)] = inst_26815);

return statearr_26831;
})();
var statearr_26832_26846 = state_26823__$1;
(statearr_26832_26846[(2)] = null);

(statearr_26832_26846[(1)] = (2));


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
});})(c__22277__auto___26840,ch))
;
return ((function (switch__22215__auto__,c__22277__auto___26840,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22216__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22216__auto____0 = (function (){
var statearr_26836 = [null,null,null,null,null,null,null,null,null];
(statearr_26836[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22216__auto__);

(statearr_26836[(1)] = (1));

return statearr_26836;
});
var figwheel$client$heads_up_plugin_$_state_machine__22216__auto____1 = (function (state_26823){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_26823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e26837){if((e26837 instanceof Object)){
var ex__22219__auto__ = e26837;
var statearr_26838_26847 = state_26823;
(statearr_26838_26847[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26848 = state_26823;
state_26823 = G__26848;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22216__auto__ = function(state_26823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22216__auto____1.call(this,state_26823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22216__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22216__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___26840,ch))
})();
var state__22279__auto__ = (function (){var statearr_26839 = f__22278__auto__.call(null);
(statearr_26839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___26840);

return statearr_26839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___26840,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__){
return (function (state_26869){
var state_val_26870 = (state_26869[(1)]);
if((state_val_26870 === (1))){
var inst_26864 = cljs.core.async.timeout.call(null,(3000));
var state_26869__$1 = state_26869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26869__$1,(2),inst_26864);
} else {
if((state_val_26870 === (2))){
var inst_26866 = (state_26869[(2)]);
var inst_26867 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26869__$1 = (function (){var statearr_26871 = state_26869;
(statearr_26871[(7)] = inst_26866);

return statearr_26871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26869__$1,inst_26867);
} else {
return null;
}
}
});})(c__22277__auto__))
;
return ((function (switch__22215__auto__,c__22277__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22216__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22216__auto____0 = (function (){
var statearr_26875 = [null,null,null,null,null,null,null,null];
(statearr_26875[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22216__auto__);

(statearr_26875[(1)] = (1));

return statearr_26875;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22216__auto____1 = (function (state_26869){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_26869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e26876){if((e26876 instanceof Object)){
var ex__22219__auto__ = e26876;
var statearr_26877_26879 = state_26869;
(statearr_26877_26879[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26880 = state_26869;
state_26869 = G__26880;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22216__auto__ = function(state_26869){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22216__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22216__auto____1.call(this,state_26869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22216__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22216__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__))
})();
var state__22279__auto__ = (function (){var statearr_26878 = f__22278__auto__.call(null);
(statearr_26878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_26878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__))
);

return c__22277__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26881){
var map__26887 = p__26881;
var map__26887__$1 = ((cljs.core.seq_QMARK_.call(null,map__26887))?cljs.core.apply.call(null,cljs.core.hash_map,map__26887):map__26887);
var ed = map__26887__$1;
var formatted_exception = cljs.core.get.call(null,map__26887__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26887__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26887__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26888_26892 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26889_26893 = null;
var count__26890_26894 = (0);
var i__26891_26895 = (0);
while(true){
if((i__26891_26895 < count__26890_26894)){
var msg_26896 = cljs.core._nth.call(null,chunk__26889_26893,i__26891_26895);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26896);

var G__26897 = seq__26888_26892;
var G__26898 = chunk__26889_26893;
var G__26899 = count__26890_26894;
var G__26900 = (i__26891_26895 + (1));
seq__26888_26892 = G__26897;
chunk__26889_26893 = G__26898;
count__26890_26894 = G__26899;
i__26891_26895 = G__26900;
continue;
} else {
var temp__4425__auto___26901 = cljs.core.seq.call(null,seq__26888_26892);
if(temp__4425__auto___26901){
var seq__26888_26902__$1 = temp__4425__auto___26901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26888_26902__$1)){
var c__19690__auto___26903 = cljs.core.chunk_first.call(null,seq__26888_26902__$1);
var G__26904 = cljs.core.chunk_rest.call(null,seq__26888_26902__$1);
var G__26905 = c__19690__auto___26903;
var G__26906 = cljs.core.count.call(null,c__19690__auto___26903);
var G__26907 = (0);
seq__26888_26892 = G__26904;
chunk__26889_26893 = G__26905;
count__26890_26894 = G__26906;
i__26891_26895 = G__26907;
continue;
} else {
var msg_26908 = cljs.core.first.call(null,seq__26888_26902__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26908);

var G__26909 = cljs.core.next.call(null,seq__26888_26902__$1);
var G__26910 = null;
var G__26911 = (0);
var G__26912 = (0);
seq__26888_26892 = G__26909;
chunk__26889_26893 = G__26910;
count__26890_26894 = G__26911;
i__26891_26895 = G__26912;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26913){
var map__26915 = p__26913;
var map__26915__$1 = ((cljs.core.seq_QMARK_.call(null,map__26915))?cljs.core.apply.call(null,cljs.core.hash_map,map__26915):map__26915);
var w = map__26915__$1;
var message = cljs.core.get.call(null,map__26915__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18893__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18893__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18893__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26922 = cljs.core.seq.call(null,plugins);
var chunk__26923 = null;
var count__26924 = (0);
var i__26925 = (0);
while(true){
if((i__26925 < count__26924)){
var vec__26926 = cljs.core._nth.call(null,chunk__26923,i__26925);
var k = cljs.core.nth.call(null,vec__26926,(0),null);
var plugin = cljs.core.nth.call(null,vec__26926,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26928 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26922,chunk__26923,count__26924,i__26925,pl_26928,vec__26926,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26928.call(null,msg_hist);
});})(seq__26922,chunk__26923,count__26924,i__26925,pl_26928,vec__26926,k,plugin))
);
} else {
}

var G__26929 = seq__26922;
var G__26930 = chunk__26923;
var G__26931 = count__26924;
var G__26932 = (i__26925 + (1));
seq__26922 = G__26929;
chunk__26923 = G__26930;
count__26924 = G__26931;
i__26925 = G__26932;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26922);
if(temp__4425__auto__){
var seq__26922__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26922__$1)){
var c__19690__auto__ = cljs.core.chunk_first.call(null,seq__26922__$1);
var G__26933 = cljs.core.chunk_rest.call(null,seq__26922__$1);
var G__26934 = c__19690__auto__;
var G__26935 = cljs.core.count.call(null,c__19690__auto__);
var G__26936 = (0);
seq__26922 = G__26933;
chunk__26923 = G__26934;
count__26924 = G__26935;
i__26925 = G__26936;
continue;
} else {
var vec__26927 = cljs.core.first.call(null,seq__26922__$1);
var k = cljs.core.nth.call(null,vec__26927,(0),null);
var plugin = cljs.core.nth.call(null,vec__26927,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26937 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26922,chunk__26923,count__26924,i__26925,pl_26937,vec__26927,k,plugin,seq__26922__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26937.call(null,msg_hist);
});})(seq__26922,chunk__26923,count__26924,i__26925,pl_26937,vec__26927,k,plugin,seq__26922__$1,temp__4425__auto__))
);
} else {
}

var G__26938 = cljs.core.next.call(null,seq__26922__$1);
var G__26939 = null;
var G__26940 = (0);
var G__26941 = (0);
seq__26922 = G__26938;
chunk__26923 = G__26939;
count__26924 = G__26940;
i__26925 = G__26941;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__26943 = arguments.length;
switch (G__26943) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19945__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19945__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26946){
var map__26947 = p__26946;
var map__26947__$1 = ((cljs.core.seq_QMARK_.call(null,map__26947))?cljs.core.apply.call(null,cljs.core.hash_map,map__26947):map__26947);
var opts = map__26947__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26945){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26945));
});

//# sourceMappingURL=client.js.map