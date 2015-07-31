// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27317_27329 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27318_27330 = null;
var count__27319_27331 = (0);
var i__27320_27332 = (0);
while(true){
if((i__27320_27332 < count__27319_27331)){
var f_27333 = cljs.core._nth.call(null,chunk__27318_27330,i__27320_27332);
cljs.core.println.call(null,"  ",f_27333);

var G__27334 = seq__27317_27329;
var G__27335 = chunk__27318_27330;
var G__27336 = count__27319_27331;
var G__27337 = (i__27320_27332 + (1));
seq__27317_27329 = G__27334;
chunk__27318_27330 = G__27335;
count__27319_27331 = G__27336;
i__27320_27332 = G__27337;
continue;
} else {
var temp__4425__auto___27338 = cljs.core.seq.call(null,seq__27317_27329);
if(temp__4425__auto___27338){
var seq__27317_27339__$1 = temp__4425__auto___27338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27317_27339__$1)){
var c__19690__auto___27340 = cljs.core.chunk_first.call(null,seq__27317_27339__$1);
var G__27341 = cljs.core.chunk_rest.call(null,seq__27317_27339__$1);
var G__27342 = c__19690__auto___27340;
var G__27343 = cljs.core.count.call(null,c__19690__auto___27340);
var G__27344 = (0);
seq__27317_27329 = G__27341;
chunk__27318_27330 = G__27342;
count__27319_27331 = G__27343;
i__27320_27332 = G__27344;
continue;
} else {
var f_27345 = cljs.core.first.call(null,seq__27317_27339__$1);
cljs.core.println.call(null,"  ",f_27345);

var G__27346 = cljs.core.next.call(null,seq__27317_27339__$1);
var G__27347 = null;
var G__27348 = (0);
var G__27349 = (0);
seq__27317_27329 = G__27346;
chunk__27318_27330 = G__27347;
count__27319_27331 = G__27348;
i__27320_27332 = G__27349;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27350 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18905__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27350);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27350)))?cljs.core.second.call(null,arglists_27350):arglists_27350));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27321 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27322 = null;
var count__27323 = (0);
var i__27324 = (0);
while(true){
if((i__27324 < count__27323)){
var vec__27325 = cljs.core._nth.call(null,chunk__27322,i__27324);
var name = cljs.core.nth.call(null,vec__27325,(0),null);
var map__27326 = cljs.core.nth.call(null,vec__27325,(1),null);
var map__27326__$1 = ((cljs.core.seq_QMARK_.call(null,map__27326))?cljs.core.apply.call(null,cljs.core.hash_map,map__27326):map__27326);
var doc = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27351 = seq__27321;
var G__27352 = chunk__27322;
var G__27353 = count__27323;
var G__27354 = (i__27324 + (1));
seq__27321 = G__27351;
chunk__27322 = G__27352;
count__27323 = G__27353;
i__27324 = G__27354;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27321);
if(temp__4425__auto__){
var seq__27321__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27321__$1)){
var c__19690__auto__ = cljs.core.chunk_first.call(null,seq__27321__$1);
var G__27355 = cljs.core.chunk_rest.call(null,seq__27321__$1);
var G__27356 = c__19690__auto__;
var G__27357 = cljs.core.count.call(null,c__19690__auto__);
var G__27358 = (0);
seq__27321 = G__27355;
chunk__27322 = G__27356;
count__27323 = G__27357;
i__27324 = G__27358;
continue;
} else {
var vec__27327 = cljs.core.first.call(null,seq__27321__$1);
var name = cljs.core.nth.call(null,vec__27327,(0),null);
var map__27328 = cljs.core.nth.call(null,vec__27327,(1),null);
var map__27328__$1 = ((cljs.core.seq_QMARK_.call(null,map__27328))?cljs.core.apply.call(null,cljs.core.hash_map,map__27328):map__27328);
var doc = cljs.core.get.call(null,map__27328__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27328__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27359 = cljs.core.next.call(null,seq__27321__$1);
var G__27360 = null;
var G__27361 = (0);
var G__27362 = (0);
seq__27321 = G__27359;
chunk__27322 = G__27360;
count__27323 = G__27361;
i__27324 = G__27362;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map