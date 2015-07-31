// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28099 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28099 = (function (fn_handler,f,meta28100){
this.fn_handler = fn_handler;
this.f = f;
this.meta28100 = meta28100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28101,meta28100__$1){
var self__ = this;
var _28101__$1 = this;
return (new cljs.core.async.t28099(self__.fn_handler,self__.f,meta28100__$1));
});

cljs.core.async.t28099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28101){
var self__ = this;
var _28101__$1 = this;
return self__.meta28100;
});

cljs.core.async.t28099.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28100","meta28100",-943511356,null)], null);
});

cljs.core.async.t28099.cljs$lang$type = true;

cljs.core.async.t28099.cljs$lang$ctorStr = "cljs.core.async/t28099";

cljs.core.async.t28099.cljs$lang$ctorPrWriter = (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t28099");
});

cljs.core.async.__GT_t28099 = (function cljs$core$async$fn_handler_$___GT_t28099(fn_handler__$1,f__$1,meta28100){
return (new cljs.core.async.t28099(fn_handler__$1,f__$1,meta28100));
});

}

return (new cljs.core.async.t28099(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__28103 = buff;
if(G__28103){
var bit__19579__auto__ = null;
if(cljs.core.truth_((function (){var or__18905__auto__ = bit__19579__auto__;
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
return G__28103.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__28103.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28103);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28103);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__28105 = arguments.length;
switch (G__28105) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__28108 = arguments.length;
switch (G__28108) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28110 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28110);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28110,ret){
return (function (){
return fn1.call(null,val_28110);
});})(val_28110,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__28112 = arguments.length;
switch (G__28112) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19790__auto___28114 = n;
var x_28115 = (0);
while(true){
if((x_28115 < n__19790__auto___28114)){
(a[x_28115] = (0));

var G__28116 = (x_28115 + (1));
x_28115 = G__28116;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28117 = (i + (1));
i = G__28117;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28121 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28121 = (function (alt_flag,flag,meta28122){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28122 = meta28122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28123,meta28122__$1){
var self__ = this;
var _28123__$1 = this;
return (new cljs.core.async.t28121(self__.alt_flag,self__.flag,meta28122__$1));
});})(flag))
;

cljs.core.async.t28121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28123){
var self__ = this;
var _28123__$1 = this;
return self__.meta28122;
});})(flag))
;

cljs.core.async.t28121.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28121.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28122","meta28122",-11022984,null)], null);
});})(flag))
;

cljs.core.async.t28121.cljs$lang$type = true;

cljs.core.async.t28121.cljs$lang$ctorStr = "cljs.core.async/t28121";

cljs.core.async.t28121.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t28121");
});})(flag))
;

cljs.core.async.__GT_t28121 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28121(alt_flag__$1,flag__$1,meta28122){
return (new cljs.core.async.t28121(alt_flag__$1,flag__$1,meta28122));
});})(flag))
;

}

return (new cljs.core.async.t28121(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28127 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28127 = (function (alt_handler,flag,cb,meta28128){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28128 = meta28128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28129,meta28128__$1){
var self__ = this;
var _28129__$1 = this;
return (new cljs.core.async.t28127(self__.alt_handler,self__.flag,self__.cb,meta28128__$1));
});

cljs.core.async.t28127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28129){
var self__ = this;
var _28129__$1 = this;
return self__.meta28128;
});

cljs.core.async.t28127.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28128","meta28128",-2144278568,null)], null);
});

cljs.core.async.t28127.cljs$lang$type = true;

cljs.core.async.t28127.cljs$lang$ctorStr = "cljs.core.async/t28127";

cljs.core.async.t28127.cljs$lang$ctorPrWriter = (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t28127");
});

cljs.core.async.__GT_t28127 = (function cljs$core$async$alt_handler_$___GT_t28127(alt_handler__$1,flag__$1,cb__$1,meta28128){
return (new cljs.core.async.t28127(alt_handler__$1,flag__$1,cb__$1,meta28128));
});

}

return (new cljs.core.async.t28127(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28130_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28130_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28131_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28131_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18905__auto__ = wport;
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28132 = (i + (1));
i = G__28132;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18905__auto__ = ret;
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18893__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18893__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18893__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19945__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19945__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28135){
var map__28136 = p__28135;
var map__28136__$1 = ((cljs.core.seq_QMARK_.call(null,map__28136))?cljs.core.apply.call(null,cljs.core.hash_map,map__28136):map__28136);
var opts = map__28136__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28133){
var G__28134 = cljs.core.first.call(null,seq28133);
var seq28133__$1 = cljs.core.next.call(null,seq28133);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28134,seq28133__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__28138 = arguments.length;
switch (G__28138) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22277__auto___28187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___28187){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___28187){
return (function (state_28162){
var state_val_28163 = (state_28162[(1)]);
if((state_val_28163 === (7))){
var inst_28158 = (state_28162[(2)]);
var state_28162__$1 = state_28162;
var statearr_28164_28188 = state_28162__$1;
(statearr_28164_28188[(2)] = inst_28158);

(statearr_28164_28188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (1))){
var state_28162__$1 = state_28162;
var statearr_28165_28189 = state_28162__$1;
(statearr_28165_28189[(2)] = null);

(statearr_28165_28189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (4))){
var inst_28141 = (state_28162[(7)]);
var inst_28141__$1 = (state_28162[(2)]);
var inst_28142 = (inst_28141__$1 == null);
var state_28162__$1 = (function (){var statearr_28166 = state_28162;
(statearr_28166[(7)] = inst_28141__$1);

return statearr_28166;
})();
if(cljs.core.truth_(inst_28142)){
var statearr_28167_28190 = state_28162__$1;
(statearr_28167_28190[(1)] = (5));

} else {
var statearr_28168_28191 = state_28162__$1;
(statearr_28168_28191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (13))){
var state_28162__$1 = state_28162;
var statearr_28169_28192 = state_28162__$1;
(statearr_28169_28192[(2)] = null);

(statearr_28169_28192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (6))){
var inst_28141 = (state_28162[(7)]);
var state_28162__$1 = state_28162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28162__$1,(11),to,inst_28141);
} else {
if((state_val_28163 === (3))){
var inst_28160 = (state_28162[(2)]);
var state_28162__$1 = state_28162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28162__$1,inst_28160);
} else {
if((state_val_28163 === (12))){
var state_28162__$1 = state_28162;
var statearr_28170_28193 = state_28162__$1;
(statearr_28170_28193[(2)] = null);

(statearr_28170_28193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (2))){
var state_28162__$1 = state_28162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28162__$1,(4),from);
} else {
if((state_val_28163 === (11))){
var inst_28151 = (state_28162[(2)]);
var state_28162__$1 = state_28162;
if(cljs.core.truth_(inst_28151)){
var statearr_28171_28194 = state_28162__$1;
(statearr_28171_28194[(1)] = (12));

} else {
var statearr_28172_28195 = state_28162__$1;
(statearr_28172_28195[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (9))){
var state_28162__$1 = state_28162;
var statearr_28173_28196 = state_28162__$1;
(statearr_28173_28196[(2)] = null);

(statearr_28173_28196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (5))){
var state_28162__$1 = state_28162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28174_28197 = state_28162__$1;
(statearr_28174_28197[(1)] = (8));

} else {
var statearr_28175_28198 = state_28162__$1;
(statearr_28175_28198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (14))){
var inst_28156 = (state_28162[(2)]);
var state_28162__$1 = state_28162;
var statearr_28176_28199 = state_28162__$1;
(statearr_28176_28199[(2)] = inst_28156);

(statearr_28176_28199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (10))){
var inst_28148 = (state_28162[(2)]);
var state_28162__$1 = state_28162;
var statearr_28177_28200 = state_28162__$1;
(statearr_28177_28200[(2)] = inst_28148);

(statearr_28177_28200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28163 === (8))){
var inst_28145 = cljs.core.async.close_BANG_.call(null,to);
var state_28162__$1 = state_28162;
var statearr_28178_28201 = state_28162__$1;
(statearr_28178_28201[(2)] = inst_28145);

(statearr_28178_28201[(1)] = (10));


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
});})(c__22277__auto___28187))
;
return ((function (switch__22215__auto__,c__22277__auto___28187){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_28182 = [null,null,null,null,null,null,null,null];
(statearr_28182[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_28182[(1)] = (1));

return statearr_28182;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_28162){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28183){if((e28183 instanceof Object)){
var ex__22219__auto__ = e28183;
var statearr_28184_28202 = state_28162;
(statearr_28184_28202[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28203 = state_28162;
state_28162 = G__28203;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_28162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_28162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___28187))
})();
var state__22279__auto__ = (function (){var statearr_28185 = f__22278__auto__.call(null);
(statearr_28185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___28187);

return statearr_28185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___28187))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28387){
var vec__28388 = p__28387;
var v = cljs.core.nth.call(null,vec__28388,(0),null);
var p = cljs.core.nth.call(null,vec__28388,(1),null);
var job = vec__28388;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22277__auto___28570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___28570,res,vec__28388,v,p,job,jobs,results){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___28570,res,vec__28388,v,p,job,jobs,results){
return (function (state_28393){
var state_val_28394 = (state_28393[(1)]);
if((state_val_28394 === (1))){
var state_28393__$1 = state_28393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28393__$1,(2),res,v);
} else {
if((state_val_28394 === (2))){
var inst_28390 = (state_28393[(2)]);
var inst_28391 = cljs.core.async.close_BANG_.call(null,res);
var state_28393__$1 = (function (){var statearr_28395 = state_28393;
(statearr_28395[(7)] = inst_28390);

return statearr_28395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28393__$1,inst_28391);
} else {
return null;
}
}
});})(c__22277__auto___28570,res,vec__28388,v,p,job,jobs,results))
;
return ((function (switch__22215__auto__,c__22277__auto___28570,res,vec__28388,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0 = (function (){
var statearr_28399 = [null,null,null,null,null,null,null,null];
(statearr_28399[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__);

(statearr_28399[(1)] = (1));

return statearr_28399;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1 = (function (state_28393){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28400){if((e28400 instanceof Object)){
var ex__22219__auto__ = e28400;
var statearr_28401_28571 = state_28393;
(statearr_28401_28571[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28572 = state_28393;
state_28393 = G__28572;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = function(state_28393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1.call(this,state_28393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___28570,res,vec__28388,v,p,job,jobs,results))
})();
var state__22279__auto__ = (function (){var statearr_28402 = f__22278__auto__.call(null);
(statearr_28402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___28570);

return statearr_28402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___28570,res,vec__28388,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28403){
var vec__28404 = p__28403;
var v = cljs.core.nth.call(null,vec__28404,(0),null);
var p = cljs.core.nth.call(null,vec__28404,(1),null);
var job = vec__28404;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19790__auto___28573 = n;
var __28574 = (0);
while(true){
if((__28574 < n__19790__auto___28573)){
var G__28405_28575 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28405_28575) {
case "compute":
var c__22277__auto___28577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28574,c__22277__auto___28577,G__28405_28575,n__19790__auto___28573,jobs,results,process,async){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (__28574,c__22277__auto___28577,G__28405_28575,n__19790__auto___28573,jobs,results,process,async){
return (function (state_28418){
var state_val_28419 = (state_28418[(1)]);
if((state_val_28419 === (1))){
var state_28418__$1 = state_28418;
var statearr_28420_28578 = state_28418__$1;
(statearr_28420_28578[(2)] = null);

(statearr_28420_28578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (2))){
var state_28418__$1 = state_28418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28418__$1,(4),jobs);
} else {
if((state_val_28419 === (3))){
var inst_28416 = (state_28418[(2)]);
var state_28418__$1 = state_28418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28418__$1,inst_28416);
} else {
if((state_val_28419 === (4))){
var inst_28408 = (state_28418[(2)]);
var inst_28409 = process.call(null,inst_28408);
var state_28418__$1 = state_28418;
if(cljs.core.truth_(inst_28409)){
var statearr_28421_28579 = state_28418__$1;
(statearr_28421_28579[(1)] = (5));

} else {
var statearr_28422_28580 = state_28418__$1;
(statearr_28422_28580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (5))){
var state_28418__$1 = state_28418;
var statearr_28423_28581 = state_28418__$1;
(statearr_28423_28581[(2)] = null);

(statearr_28423_28581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (6))){
var state_28418__$1 = state_28418;
var statearr_28424_28582 = state_28418__$1;
(statearr_28424_28582[(2)] = null);

(statearr_28424_28582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28419 === (7))){
var inst_28414 = (state_28418[(2)]);
var state_28418__$1 = state_28418;
var statearr_28425_28583 = state_28418__$1;
(statearr_28425_28583[(2)] = inst_28414);

(statearr_28425_28583[(1)] = (3));


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
});})(__28574,c__22277__auto___28577,G__28405_28575,n__19790__auto___28573,jobs,results,process,async))
;
return ((function (__28574,switch__22215__auto__,c__22277__auto___28577,G__28405_28575,n__19790__auto___28573,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0 = (function (){
var statearr_28429 = [null,null,null,null,null,null,null];
(statearr_28429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__);

(statearr_28429[(1)] = (1));

return statearr_28429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1 = (function (state_28418){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28430){if((e28430 instanceof Object)){
var ex__22219__auto__ = e28430;
var statearr_28431_28584 = state_28418;
(statearr_28431_28584[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28585 = state_28418;
state_28418 = G__28585;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = function(state_28418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1.call(this,state_28418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__;
})()
;})(__28574,switch__22215__auto__,c__22277__auto___28577,G__28405_28575,n__19790__auto___28573,jobs,results,process,async))
})();
var state__22279__auto__ = (function (){var statearr_28432 = f__22278__auto__.call(null);
(statearr_28432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___28577);

return statearr_28432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(__28574,c__22277__auto___28577,G__28405_28575,n__19790__auto___28573,jobs,results,process,async))
);


break;
case "async":
var c__22277__auto___28586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28574,c__22277__auto___28586,G__28405_28575,n__19790__auto___28573,jobs,results,process,async){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (__28574,c__22277__auto___28586,G__28405_28575,n__19790__auto___28573,jobs,results,process,async){
return (function (state_28445){
var state_val_28446 = (state_28445[(1)]);
if((state_val_28446 === (1))){
var state_28445__$1 = state_28445;
var statearr_28447_28587 = state_28445__$1;
(statearr_28447_28587[(2)] = null);

(statearr_28447_28587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (2))){
var state_28445__$1 = state_28445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28445__$1,(4),jobs);
} else {
if((state_val_28446 === (3))){
var inst_28443 = (state_28445[(2)]);
var state_28445__$1 = state_28445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28445__$1,inst_28443);
} else {
if((state_val_28446 === (4))){
var inst_28435 = (state_28445[(2)]);
var inst_28436 = async.call(null,inst_28435);
var state_28445__$1 = state_28445;
if(cljs.core.truth_(inst_28436)){
var statearr_28448_28588 = state_28445__$1;
(statearr_28448_28588[(1)] = (5));

} else {
var statearr_28449_28589 = state_28445__$1;
(statearr_28449_28589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (5))){
var state_28445__$1 = state_28445;
var statearr_28450_28590 = state_28445__$1;
(statearr_28450_28590[(2)] = null);

(statearr_28450_28590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (6))){
var state_28445__$1 = state_28445;
var statearr_28451_28591 = state_28445__$1;
(statearr_28451_28591[(2)] = null);

(statearr_28451_28591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28446 === (7))){
var inst_28441 = (state_28445[(2)]);
var state_28445__$1 = state_28445;
var statearr_28452_28592 = state_28445__$1;
(statearr_28452_28592[(2)] = inst_28441);

(statearr_28452_28592[(1)] = (3));


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
});})(__28574,c__22277__auto___28586,G__28405_28575,n__19790__auto___28573,jobs,results,process,async))
;
return ((function (__28574,switch__22215__auto__,c__22277__auto___28586,G__28405_28575,n__19790__auto___28573,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0 = (function (){
var statearr_28456 = [null,null,null,null,null,null,null];
(statearr_28456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__);

(statearr_28456[(1)] = (1));

return statearr_28456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1 = (function (state_28445){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28457){if((e28457 instanceof Object)){
var ex__22219__auto__ = e28457;
var statearr_28458_28593 = state_28445;
(statearr_28458_28593[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28594 = state_28445;
state_28445 = G__28594;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = function(state_28445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1.call(this,state_28445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__;
})()
;})(__28574,switch__22215__auto__,c__22277__auto___28586,G__28405_28575,n__19790__auto___28573,jobs,results,process,async))
})();
var state__22279__auto__ = (function (){var statearr_28459 = f__22278__auto__.call(null);
(statearr_28459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___28586);

return statearr_28459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(__28574,c__22277__auto___28586,G__28405_28575,n__19790__auto___28573,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28595 = (__28574 + (1));
__28574 = G__28595;
continue;
} else {
}
break;
}

var c__22277__auto___28596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___28596,jobs,results,process,async){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___28596,jobs,results,process,async){
return (function (state_28481){
var state_val_28482 = (state_28481[(1)]);
if((state_val_28482 === (1))){
var state_28481__$1 = state_28481;
var statearr_28483_28597 = state_28481__$1;
(statearr_28483_28597[(2)] = null);

(statearr_28483_28597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (2))){
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28481__$1,(4),from);
} else {
if((state_val_28482 === (3))){
var inst_28479 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28481__$1,inst_28479);
} else {
if((state_val_28482 === (4))){
var inst_28462 = (state_28481[(7)]);
var inst_28462__$1 = (state_28481[(2)]);
var inst_28463 = (inst_28462__$1 == null);
var state_28481__$1 = (function (){var statearr_28484 = state_28481;
(statearr_28484[(7)] = inst_28462__$1);

return statearr_28484;
})();
if(cljs.core.truth_(inst_28463)){
var statearr_28485_28598 = state_28481__$1;
(statearr_28485_28598[(1)] = (5));

} else {
var statearr_28486_28599 = state_28481__$1;
(statearr_28486_28599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (5))){
var inst_28465 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28481__$1 = state_28481;
var statearr_28487_28600 = state_28481__$1;
(statearr_28487_28600[(2)] = inst_28465);

(statearr_28487_28600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (6))){
var inst_28467 = (state_28481[(8)]);
var inst_28462 = (state_28481[(7)]);
var inst_28467__$1 = cljs.core.async.chan.call(null,(1));
var inst_28468 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28469 = [inst_28462,inst_28467__$1];
var inst_28470 = (new cljs.core.PersistentVector(null,2,(5),inst_28468,inst_28469,null));
var state_28481__$1 = (function (){var statearr_28488 = state_28481;
(statearr_28488[(8)] = inst_28467__$1);

return statearr_28488;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28481__$1,(8),jobs,inst_28470);
} else {
if((state_val_28482 === (7))){
var inst_28477 = (state_28481[(2)]);
var state_28481__$1 = state_28481;
var statearr_28489_28601 = state_28481__$1;
(statearr_28489_28601[(2)] = inst_28477);

(statearr_28489_28601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28482 === (8))){
var inst_28467 = (state_28481[(8)]);
var inst_28472 = (state_28481[(2)]);
var state_28481__$1 = (function (){var statearr_28490 = state_28481;
(statearr_28490[(9)] = inst_28472);

return statearr_28490;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28481__$1,(9),results,inst_28467);
} else {
if((state_val_28482 === (9))){
var inst_28474 = (state_28481[(2)]);
var state_28481__$1 = (function (){var statearr_28491 = state_28481;
(statearr_28491[(10)] = inst_28474);

return statearr_28491;
})();
var statearr_28492_28602 = state_28481__$1;
(statearr_28492_28602[(2)] = null);

(statearr_28492_28602[(1)] = (2));


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
});})(c__22277__auto___28596,jobs,results,process,async))
;
return ((function (switch__22215__auto__,c__22277__auto___28596,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0 = (function (){
var statearr_28496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__);

(statearr_28496[(1)] = (1));

return statearr_28496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1 = (function (state_28481){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28497){if((e28497 instanceof Object)){
var ex__22219__auto__ = e28497;
var statearr_28498_28603 = state_28481;
(statearr_28498_28603[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28604 = state_28481;
state_28481 = G__28604;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = function(state_28481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1.call(this,state_28481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___28596,jobs,results,process,async))
})();
var state__22279__auto__ = (function (){var statearr_28499 = f__22278__auto__.call(null);
(statearr_28499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___28596);

return statearr_28499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___28596,jobs,results,process,async))
);


var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__,jobs,results,process,async){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__,jobs,results,process,async){
return (function (state_28537){
var state_val_28538 = (state_28537[(1)]);
if((state_val_28538 === (7))){
var inst_28533 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28539_28605 = state_28537__$1;
(statearr_28539_28605[(2)] = inst_28533);

(statearr_28539_28605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (20))){
var state_28537__$1 = state_28537;
var statearr_28540_28606 = state_28537__$1;
(statearr_28540_28606[(2)] = null);

(statearr_28540_28606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (1))){
var state_28537__$1 = state_28537;
var statearr_28541_28607 = state_28537__$1;
(statearr_28541_28607[(2)] = null);

(statearr_28541_28607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (4))){
var inst_28502 = (state_28537[(7)]);
var inst_28502__$1 = (state_28537[(2)]);
var inst_28503 = (inst_28502__$1 == null);
var state_28537__$1 = (function (){var statearr_28542 = state_28537;
(statearr_28542[(7)] = inst_28502__$1);

return statearr_28542;
})();
if(cljs.core.truth_(inst_28503)){
var statearr_28543_28608 = state_28537__$1;
(statearr_28543_28608[(1)] = (5));

} else {
var statearr_28544_28609 = state_28537__$1;
(statearr_28544_28609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (15))){
var inst_28515 = (state_28537[(8)]);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28537__$1,(18),to,inst_28515);
} else {
if((state_val_28538 === (21))){
var inst_28528 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28545_28610 = state_28537__$1;
(statearr_28545_28610[(2)] = inst_28528);

(statearr_28545_28610[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (13))){
var inst_28530 = (state_28537[(2)]);
var state_28537__$1 = (function (){var statearr_28546 = state_28537;
(statearr_28546[(9)] = inst_28530);

return statearr_28546;
})();
var statearr_28547_28611 = state_28537__$1;
(statearr_28547_28611[(2)] = null);

(statearr_28547_28611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (6))){
var inst_28502 = (state_28537[(7)]);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28537__$1,(11),inst_28502);
} else {
if((state_val_28538 === (17))){
var inst_28523 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
if(cljs.core.truth_(inst_28523)){
var statearr_28548_28612 = state_28537__$1;
(statearr_28548_28612[(1)] = (19));

} else {
var statearr_28549_28613 = state_28537__$1;
(statearr_28549_28613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (3))){
var inst_28535 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28537__$1,inst_28535);
} else {
if((state_val_28538 === (12))){
var inst_28512 = (state_28537[(10)]);
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28537__$1,(14),inst_28512);
} else {
if((state_val_28538 === (2))){
var state_28537__$1 = state_28537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28537__$1,(4),results);
} else {
if((state_val_28538 === (19))){
var state_28537__$1 = state_28537;
var statearr_28550_28614 = state_28537__$1;
(statearr_28550_28614[(2)] = null);

(statearr_28550_28614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (11))){
var inst_28512 = (state_28537[(2)]);
var state_28537__$1 = (function (){var statearr_28551 = state_28537;
(statearr_28551[(10)] = inst_28512);

return statearr_28551;
})();
var statearr_28552_28615 = state_28537__$1;
(statearr_28552_28615[(2)] = null);

(statearr_28552_28615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (9))){
var state_28537__$1 = state_28537;
var statearr_28553_28616 = state_28537__$1;
(statearr_28553_28616[(2)] = null);

(statearr_28553_28616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (5))){
var state_28537__$1 = state_28537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28554_28617 = state_28537__$1;
(statearr_28554_28617[(1)] = (8));

} else {
var statearr_28555_28618 = state_28537__$1;
(statearr_28555_28618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (14))){
var inst_28515 = (state_28537[(8)]);
var inst_28517 = (state_28537[(11)]);
var inst_28515__$1 = (state_28537[(2)]);
var inst_28516 = (inst_28515__$1 == null);
var inst_28517__$1 = cljs.core.not.call(null,inst_28516);
var state_28537__$1 = (function (){var statearr_28556 = state_28537;
(statearr_28556[(8)] = inst_28515__$1);

(statearr_28556[(11)] = inst_28517__$1);

return statearr_28556;
})();
if(inst_28517__$1){
var statearr_28557_28619 = state_28537__$1;
(statearr_28557_28619[(1)] = (15));

} else {
var statearr_28558_28620 = state_28537__$1;
(statearr_28558_28620[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (16))){
var inst_28517 = (state_28537[(11)]);
var state_28537__$1 = state_28537;
var statearr_28559_28621 = state_28537__$1;
(statearr_28559_28621[(2)] = inst_28517);

(statearr_28559_28621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (10))){
var inst_28509 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28560_28622 = state_28537__$1;
(statearr_28560_28622[(2)] = inst_28509);

(statearr_28560_28622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (18))){
var inst_28520 = (state_28537[(2)]);
var state_28537__$1 = state_28537;
var statearr_28561_28623 = state_28537__$1;
(statearr_28561_28623[(2)] = inst_28520);

(statearr_28561_28623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28538 === (8))){
var inst_28506 = cljs.core.async.close_BANG_.call(null,to);
var state_28537__$1 = state_28537;
var statearr_28562_28624 = state_28537__$1;
(statearr_28562_28624[(2)] = inst_28506);

(statearr_28562_28624[(1)] = (10));


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
});})(c__22277__auto__,jobs,results,process,async))
;
return ((function (switch__22215__auto__,c__22277__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0 = (function (){
var statearr_28566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__);

(statearr_28566[(1)] = (1));

return statearr_28566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1 = (function (state_28537){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28567){if((e28567 instanceof Object)){
var ex__22219__auto__ = e28567;
var statearr_28568_28625 = state_28537;
(statearr_28568_28625[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28626 = state_28537;
state_28537 = G__28626;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__ = function(state_28537){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1.call(this,state_28537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22216__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__,jobs,results,process,async))
})();
var state__22279__auto__ = (function (){var statearr_28569 = f__22278__auto__.call(null);
(statearr_28569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__,jobs,results,process,async))
);

return c__22277__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__28628 = arguments.length;
switch (G__28628) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__28631 = arguments.length;
switch (G__28631) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__28634 = arguments.length;
switch (G__28634) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22277__auto___28686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___28686,tc,fc){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___28686,tc,fc){
return (function (state_28660){
var state_val_28661 = (state_28660[(1)]);
if((state_val_28661 === (7))){
var inst_28656 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28662_28687 = state_28660__$1;
(statearr_28662_28687[(2)] = inst_28656);

(statearr_28662_28687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (1))){
var state_28660__$1 = state_28660;
var statearr_28663_28688 = state_28660__$1;
(statearr_28663_28688[(2)] = null);

(statearr_28663_28688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (4))){
var inst_28637 = (state_28660[(7)]);
var inst_28637__$1 = (state_28660[(2)]);
var inst_28638 = (inst_28637__$1 == null);
var state_28660__$1 = (function (){var statearr_28664 = state_28660;
(statearr_28664[(7)] = inst_28637__$1);

return statearr_28664;
})();
if(cljs.core.truth_(inst_28638)){
var statearr_28665_28689 = state_28660__$1;
(statearr_28665_28689[(1)] = (5));

} else {
var statearr_28666_28690 = state_28660__$1;
(statearr_28666_28690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (13))){
var state_28660__$1 = state_28660;
var statearr_28667_28691 = state_28660__$1;
(statearr_28667_28691[(2)] = null);

(statearr_28667_28691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (6))){
var inst_28637 = (state_28660[(7)]);
var inst_28643 = p.call(null,inst_28637);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28643)){
var statearr_28668_28692 = state_28660__$1;
(statearr_28668_28692[(1)] = (9));

} else {
var statearr_28669_28693 = state_28660__$1;
(statearr_28669_28693[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (3))){
var inst_28658 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28660__$1,inst_28658);
} else {
if((state_val_28661 === (12))){
var state_28660__$1 = state_28660;
var statearr_28670_28694 = state_28660__$1;
(statearr_28670_28694[(2)] = null);

(statearr_28670_28694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (2))){
var state_28660__$1 = state_28660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28660__$1,(4),ch);
} else {
if((state_val_28661 === (11))){
var inst_28637 = (state_28660[(7)]);
var inst_28647 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28660__$1,(8),inst_28647,inst_28637);
} else {
if((state_val_28661 === (9))){
var state_28660__$1 = state_28660;
var statearr_28671_28695 = state_28660__$1;
(statearr_28671_28695[(2)] = tc);

(statearr_28671_28695[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (5))){
var inst_28640 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28641 = cljs.core.async.close_BANG_.call(null,fc);
var state_28660__$1 = (function (){var statearr_28672 = state_28660;
(statearr_28672[(8)] = inst_28640);

return statearr_28672;
})();
var statearr_28673_28696 = state_28660__$1;
(statearr_28673_28696[(2)] = inst_28641);

(statearr_28673_28696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (14))){
var inst_28654 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
var statearr_28674_28697 = state_28660__$1;
(statearr_28674_28697[(2)] = inst_28654);

(statearr_28674_28697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (10))){
var state_28660__$1 = state_28660;
var statearr_28675_28698 = state_28660__$1;
(statearr_28675_28698[(2)] = fc);

(statearr_28675_28698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28661 === (8))){
var inst_28649 = (state_28660[(2)]);
var state_28660__$1 = state_28660;
if(cljs.core.truth_(inst_28649)){
var statearr_28676_28699 = state_28660__$1;
(statearr_28676_28699[(1)] = (12));

} else {
var statearr_28677_28700 = state_28660__$1;
(statearr_28677_28700[(1)] = (13));

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
});})(c__22277__auto___28686,tc,fc))
;
return ((function (switch__22215__auto__,c__22277__auto___28686,tc,fc){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_28681 = [null,null,null,null,null,null,null,null,null];
(statearr_28681[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_28681[(1)] = (1));

return statearr_28681;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_28660){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28682){if((e28682 instanceof Object)){
var ex__22219__auto__ = e28682;
var statearr_28683_28701 = state_28660;
(statearr_28683_28701[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28702 = state_28660;
state_28660 = G__28702;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_28660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_28660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___28686,tc,fc))
})();
var state__22279__auto__ = (function (){var statearr_28684 = f__22278__auto__.call(null);
(statearr_28684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___28686);

return statearr_28684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___28686,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__){
return (function (state_28749){
var state_val_28750 = (state_28749[(1)]);
if((state_val_28750 === (1))){
var inst_28735 = init;
var state_28749__$1 = (function (){var statearr_28751 = state_28749;
(statearr_28751[(7)] = inst_28735);

return statearr_28751;
})();
var statearr_28752_28767 = state_28749__$1;
(statearr_28752_28767[(2)] = null);

(statearr_28752_28767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28750 === (2))){
var state_28749__$1 = state_28749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28749__$1,(4),ch);
} else {
if((state_val_28750 === (3))){
var inst_28747 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28749__$1,inst_28747);
} else {
if((state_val_28750 === (4))){
var inst_28738 = (state_28749[(8)]);
var inst_28738__$1 = (state_28749[(2)]);
var inst_28739 = (inst_28738__$1 == null);
var state_28749__$1 = (function (){var statearr_28753 = state_28749;
(statearr_28753[(8)] = inst_28738__$1);

return statearr_28753;
})();
if(cljs.core.truth_(inst_28739)){
var statearr_28754_28768 = state_28749__$1;
(statearr_28754_28768[(1)] = (5));

} else {
var statearr_28755_28769 = state_28749__$1;
(statearr_28755_28769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28750 === (5))){
var inst_28735 = (state_28749[(7)]);
var state_28749__$1 = state_28749;
var statearr_28756_28770 = state_28749__$1;
(statearr_28756_28770[(2)] = inst_28735);

(statearr_28756_28770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28750 === (6))){
var inst_28738 = (state_28749[(8)]);
var inst_28735 = (state_28749[(7)]);
var inst_28742 = f.call(null,inst_28735,inst_28738);
var inst_28735__$1 = inst_28742;
var state_28749__$1 = (function (){var statearr_28757 = state_28749;
(statearr_28757[(7)] = inst_28735__$1);

return statearr_28757;
})();
var statearr_28758_28771 = state_28749__$1;
(statearr_28758_28771[(2)] = null);

(statearr_28758_28771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28750 === (7))){
var inst_28745 = (state_28749[(2)]);
var state_28749__$1 = state_28749;
var statearr_28759_28772 = state_28749__$1;
(statearr_28759_28772[(2)] = inst_28745);

(statearr_28759_28772[(1)] = (3));


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
});})(c__22277__auto__))
;
return ((function (switch__22215__auto__,c__22277__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22216__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22216__auto____0 = (function (){
var statearr_28763 = [null,null,null,null,null,null,null,null,null];
(statearr_28763[(0)] = cljs$core$async$reduce_$_state_machine__22216__auto__);

(statearr_28763[(1)] = (1));

return statearr_28763;
});
var cljs$core$async$reduce_$_state_machine__22216__auto____1 = (function (state_28749){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28764){if((e28764 instanceof Object)){
var ex__22219__auto__ = e28764;
var statearr_28765_28773 = state_28749;
(statearr_28765_28773[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28774 = state_28749;
state_28749 = G__28774;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22216__auto__ = function(state_28749){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22216__auto____1.call(this,state_28749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22216__auto____0;
cljs$core$async$reduce_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22216__auto____1;
return cljs$core$async$reduce_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__))
})();
var state__22279__auto__ = (function (){var statearr_28766 = f__22278__auto__.call(null);
(statearr_28766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_28766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__))
);

return c__22277__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__28776 = arguments.length;
switch (G__28776) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__){
return (function (state_28801){
var state_val_28802 = (state_28801[(1)]);
if((state_val_28802 === (7))){
var inst_28783 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28803_28827 = state_28801__$1;
(statearr_28803_28827[(2)] = inst_28783);

(statearr_28803_28827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (1))){
var inst_28777 = cljs.core.seq.call(null,coll);
var inst_28778 = inst_28777;
var state_28801__$1 = (function (){var statearr_28804 = state_28801;
(statearr_28804[(7)] = inst_28778);

return statearr_28804;
})();
var statearr_28805_28828 = state_28801__$1;
(statearr_28805_28828[(2)] = null);

(statearr_28805_28828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (4))){
var inst_28778 = (state_28801[(7)]);
var inst_28781 = cljs.core.first.call(null,inst_28778);
var state_28801__$1 = state_28801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28801__$1,(7),ch,inst_28781);
} else {
if((state_val_28802 === (13))){
var inst_28795 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28806_28829 = state_28801__$1;
(statearr_28806_28829[(2)] = inst_28795);

(statearr_28806_28829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (6))){
var inst_28786 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
if(cljs.core.truth_(inst_28786)){
var statearr_28807_28830 = state_28801__$1;
(statearr_28807_28830[(1)] = (8));

} else {
var statearr_28808_28831 = state_28801__$1;
(statearr_28808_28831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (3))){
var inst_28799 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28801__$1,inst_28799);
} else {
if((state_val_28802 === (12))){
var state_28801__$1 = state_28801;
var statearr_28809_28832 = state_28801__$1;
(statearr_28809_28832[(2)] = null);

(statearr_28809_28832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (2))){
var inst_28778 = (state_28801[(7)]);
var state_28801__$1 = state_28801;
if(cljs.core.truth_(inst_28778)){
var statearr_28810_28833 = state_28801__$1;
(statearr_28810_28833[(1)] = (4));

} else {
var statearr_28811_28834 = state_28801__$1;
(statearr_28811_28834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (11))){
var inst_28792 = cljs.core.async.close_BANG_.call(null,ch);
var state_28801__$1 = state_28801;
var statearr_28812_28835 = state_28801__$1;
(statearr_28812_28835[(2)] = inst_28792);

(statearr_28812_28835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (9))){
var state_28801__$1 = state_28801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28813_28836 = state_28801__$1;
(statearr_28813_28836[(1)] = (11));

} else {
var statearr_28814_28837 = state_28801__$1;
(statearr_28814_28837[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (5))){
var inst_28778 = (state_28801[(7)]);
var state_28801__$1 = state_28801;
var statearr_28815_28838 = state_28801__$1;
(statearr_28815_28838[(2)] = inst_28778);

(statearr_28815_28838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (10))){
var inst_28797 = (state_28801[(2)]);
var state_28801__$1 = state_28801;
var statearr_28816_28839 = state_28801__$1;
(statearr_28816_28839[(2)] = inst_28797);

(statearr_28816_28839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28802 === (8))){
var inst_28778 = (state_28801[(7)]);
var inst_28788 = cljs.core.next.call(null,inst_28778);
var inst_28778__$1 = inst_28788;
var state_28801__$1 = (function (){var statearr_28817 = state_28801;
(statearr_28817[(7)] = inst_28778__$1);

return statearr_28817;
})();
var statearr_28818_28840 = state_28801__$1;
(statearr_28818_28840[(2)] = null);

(statearr_28818_28840[(1)] = (2));


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
});})(c__22277__auto__))
;
return ((function (switch__22215__auto__,c__22277__auto__){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_28822 = [null,null,null,null,null,null,null,null];
(statearr_28822[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_28822[(1)] = (1));

return statearr_28822;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_28801){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_28801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e28823){if((e28823 instanceof Object)){
var ex__22219__auto__ = e28823;
var statearr_28824_28841 = state_28801;
(statearr_28824_28841[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28842 = state_28801;
state_28801 = G__28842;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_28801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_28801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__))
})();
var state__22279__auto__ = (function (){var statearr_28825 = f__22278__auto__.call(null);
(statearr_28825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_28825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__))
);

return c__22277__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28844 = {};
return obj28844;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18893__auto__ = _;
if(and__18893__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18893__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19541__auto__ = (((_ == null))?null:_);
return (function (){var or__18905__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28846 = {};
return obj28846;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18893__auto__ = m;
if(and__18893__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18893__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19541__auto__ = (((m == null))?null:m);
return (function (){var or__18905__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18893__auto__ = m;
if(and__18893__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18893__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19541__auto__ = (((m == null))?null:m);
return (function (){var or__18905__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18893__auto__ = m;
if(and__18893__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18893__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19541__auto__ = (((m == null))?null:m);
return (function (){var or__18905__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29068 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29068 = (function (mult,ch,cs,meta29069){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29069 = meta29069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29070,meta29069__$1){
var self__ = this;
var _29070__$1 = this;
return (new cljs.core.async.t29068(self__.mult,self__.ch,self__.cs,meta29069__$1));
});})(cs))
;

cljs.core.async.t29068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29070){
var self__ = this;
var _29070__$1 = this;
return self__.meta29069;
});})(cs))
;

cljs.core.async.t29068.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29068.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29068.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29068.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29068.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29068.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29068.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29069","meta29069",-15890365,null)], null);
});})(cs))
;

cljs.core.async.t29068.cljs$lang$type = true;

cljs.core.async.t29068.cljs$lang$ctorStr = "cljs.core.async/t29068";

cljs.core.async.t29068.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t29068");
});})(cs))
;

cljs.core.async.__GT_t29068 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29068(mult__$1,ch__$1,cs__$1,meta29069){
return (new cljs.core.async.t29068(mult__$1,ch__$1,cs__$1,meta29069));
});})(cs))
;

}

return (new cljs.core.async.t29068(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22277__auto___29289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___29289,cs,m,dchan,dctr,done){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___29289,cs,m,dchan,dctr,done){
return (function (state_29201){
var state_val_29202 = (state_29201[(1)]);
if((state_val_29202 === (7))){
var inst_29197 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29203_29290 = state_29201__$1;
(statearr_29203_29290[(2)] = inst_29197);

(statearr_29203_29290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (20))){
var inst_29102 = (state_29201[(7)]);
var inst_29112 = cljs.core.first.call(null,inst_29102);
var inst_29113 = cljs.core.nth.call(null,inst_29112,(0),null);
var inst_29114 = cljs.core.nth.call(null,inst_29112,(1),null);
var state_29201__$1 = (function (){var statearr_29204 = state_29201;
(statearr_29204[(8)] = inst_29113);

return statearr_29204;
})();
if(cljs.core.truth_(inst_29114)){
var statearr_29205_29291 = state_29201__$1;
(statearr_29205_29291[(1)] = (22));

} else {
var statearr_29206_29292 = state_29201__$1;
(statearr_29206_29292[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (27))){
var inst_29142 = (state_29201[(9)]);
var inst_29149 = (state_29201[(10)]);
var inst_29073 = (state_29201[(11)]);
var inst_29144 = (state_29201[(12)]);
var inst_29149__$1 = cljs.core._nth.call(null,inst_29142,inst_29144);
var inst_29150 = cljs.core.async.put_BANG_.call(null,inst_29149__$1,inst_29073,done);
var state_29201__$1 = (function (){var statearr_29207 = state_29201;
(statearr_29207[(10)] = inst_29149__$1);

return statearr_29207;
})();
if(cljs.core.truth_(inst_29150)){
var statearr_29208_29293 = state_29201__$1;
(statearr_29208_29293[(1)] = (30));

} else {
var statearr_29209_29294 = state_29201__$1;
(statearr_29209_29294[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (1))){
var state_29201__$1 = state_29201;
var statearr_29210_29295 = state_29201__$1;
(statearr_29210_29295[(2)] = null);

(statearr_29210_29295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (24))){
var inst_29102 = (state_29201[(7)]);
var inst_29119 = (state_29201[(2)]);
var inst_29120 = cljs.core.next.call(null,inst_29102);
var inst_29082 = inst_29120;
var inst_29083 = null;
var inst_29084 = (0);
var inst_29085 = (0);
var state_29201__$1 = (function (){var statearr_29211 = state_29201;
(statearr_29211[(13)] = inst_29083);

(statearr_29211[(14)] = inst_29119);

(statearr_29211[(15)] = inst_29082);

(statearr_29211[(16)] = inst_29085);

(statearr_29211[(17)] = inst_29084);

return statearr_29211;
})();
var statearr_29212_29296 = state_29201__$1;
(statearr_29212_29296[(2)] = null);

(statearr_29212_29296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (39))){
var state_29201__$1 = state_29201;
var statearr_29216_29297 = state_29201__$1;
(statearr_29216_29297[(2)] = null);

(statearr_29216_29297[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (4))){
var inst_29073 = (state_29201[(11)]);
var inst_29073__$1 = (state_29201[(2)]);
var inst_29074 = (inst_29073__$1 == null);
var state_29201__$1 = (function (){var statearr_29217 = state_29201;
(statearr_29217[(11)] = inst_29073__$1);

return statearr_29217;
})();
if(cljs.core.truth_(inst_29074)){
var statearr_29218_29298 = state_29201__$1;
(statearr_29218_29298[(1)] = (5));

} else {
var statearr_29219_29299 = state_29201__$1;
(statearr_29219_29299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (15))){
var inst_29083 = (state_29201[(13)]);
var inst_29082 = (state_29201[(15)]);
var inst_29085 = (state_29201[(16)]);
var inst_29084 = (state_29201[(17)]);
var inst_29098 = (state_29201[(2)]);
var inst_29099 = (inst_29085 + (1));
var tmp29213 = inst_29083;
var tmp29214 = inst_29082;
var tmp29215 = inst_29084;
var inst_29082__$1 = tmp29214;
var inst_29083__$1 = tmp29213;
var inst_29084__$1 = tmp29215;
var inst_29085__$1 = inst_29099;
var state_29201__$1 = (function (){var statearr_29220 = state_29201;
(statearr_29220[(13)] = inst_29083__$1);

(statearr_29220[(15)] = inst_29082__$1);

(statearr_29220[(16)] = inst_29085__$1);

(statearr_29220[(18)] = inst_29098);

(statearr_29220[(17)] = inst_29084__$1);

return statearr_29220;
})();
var statearr_29221_29300 = state_29201__$1;
(statearr_29221_29300[(2)] = null);

(statearr_29221_29300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (21))){
var inst_29123 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29225_29301 = state_29201__$1;
(statearr_29225_29301[(2)] = inst_29123);

(statearr_29225_29301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (31))){
var inst_29149 = (state_29201[(10)]);
var inst_29153 = done.call(null,null);
var inst_29154 = cljs.core.async.untap_STAR_.call(null,m,inst_29149);
var state_29201__$1 = (function (){var statearr_29226 = state_29201;
(statearr_29226[(19)] = inst_29153);

return statearr_29226;
})();
var statearr_29227_29302 = state_29201__$1;
(statearr_29227_29302[(2)] = inst_29154);

(statearr_29227_29302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (32))){
var inst_29141 = (state_29201[(20)]);
var inst_29142 = (state_29201[(9)]);
var inst_29143 = (state_29201[(21)]);
var inst_29144 = (state_29201[(12)]);
var inst_29156 = (state_29201[(2)]);
var inst_29157 = (inst_29144 + (1));
var tmp29222 = inst_29141;
var tmp29223 = inst_29142;
var tmp29224 = inst_29143;
var inst_29141__$1 = tmp29222;
var inst_29142__$1 = tmp29223;
var inst_29143__$1 = tmp29224;
var inst_29144__$1 = inst_29157;
var state_29201__$1 = (function (){var statearr_29228 = state_29201;
(statearr_29228[(20)] = inst_29141__$1);

(statearr_29228[(22)] = inst_29156);

(statearr_29228[(9)] = inst_29142__$1);

(statearr_29228[(21)] = inst_29143__$1);

(statearr_29228[(12)] = inst_29144__$1);

return statearr_29228;
})();
var statearr_29229_29303 = state_29201__$1;
(statearr_29229_29303[(2)] = null);

(statearr_29229_29303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (40))){
var inst_29169 = (state_29201[(23)]);
var inst_29173 = done.call(null,null);
var inst_29174 = cljs.core.async.untap_STAR_.call(null,m,inst_29169);
var state_29201__$1 = (function (){var statearr_29230 = state_29201;
(statearr_29230[(24)] = inst_29173);

return statearr_29230;
})();
var statearr_29231_29304 = state_29201__$1;
(statearr_29231_29304[(2)] = inst_29174);

(statearr_29231_29304[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (33))){
var inst_29160 = (state_29201[(25)]);
var inst_29162 = cljs.core.chunked_seq_QMARK_.call(null,inst_29160);
var state_29201__$1 = state_29201;
if(inst_29162){
var statearr_29232_29305 = state_29201__$1;
(statearr_29232_29305[(1)] = (36));

} else {
var statearr_29233_29306 = state_29201__$1;
(statearr_29233_29306[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (13))){
var inst_29092 = (state_29201[(26)]);
var inst_29095 = cljs.core.async.close_BANG_.call(null,inst_29092);
var state_29201__$1 = state_29201;
var statearr_29234_29307 = state_29201__$1;
(statearr_29234_29307[(2)] = inst_29095);

(statearr_29234_29307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (22))){
var inst_29113 = (state_29201[(8)]);
var inst_29116 = cljs.core.async.close_BANG_.call(null,inst_29113);
var state_29201__$1 = state_29201;
var statearr_29235_29308 = state_29201__$1;
(statearr_29235_29308[(2)] = inst_29116);

(statearr_29235_29308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (36))){
var inst_29160 = (state_29201[(25)]);
var inst_29164 = cljs.core.chunk_first.call(null,inst_29160);
var inst_29165 = cljs.core.chunk_rest.call(null,inst_29160);
var inst_29166 = cljs.core.count.call(null,inst_29164);
var inst_29141 = inst_29165;
var inst_29142 = inst_29164;
var inst_29143 = inst_29166;
var inst_29144 = (0);
var state_29201__$1 = (function (){var statearr_29236 = state_29201;
(statearr_29236[(20)] = inst_29141);

(statearr_29236[(9)] = inst_29142);

(statearr_29236[(21)] = inst_29143);

(statearr_29236[(12)] = inst_29144);

return statearr_29236;
})();
var statearr_29237_29309 = state_29201__$1;
(statearr_29237_29309[(2)] = null);

(statearr_29237_29309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (41))){
var inst_29160 = (state_29201[(25)]);
var inst_29176 = (state_29201[(2)]);
var inst_29177 = cljs.core.next.call(null,inst_29160);
var inst_29141 = inst_29177;
var inst_29142 = null;
var inst_29143 = (0);
var inst_29144 = (0);
var state_29201__$1 = (function (){var statearr_29238 = state_29201;
(statearr_29238[(20)] = inst_29141);

(statearr_29238[(9)] = inst_29142);

(statearr_29238[(27)] = inst_29176);

(statearr_29238[(21)] = inst_29143);

(statearr_29238[(12)] = inst_29144);

return statearr_29238;
})();
var statearr_29239_29310 = state_29201__$1;
(statearr_29239_29310[(2)] = null);

(statearr_29239_29310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (43))){
var state_29201__$1 = state_29201;
var statearr_29240_29311 = state_29201__$1;
(statearr_29240_29311[(2)] = null);

(statearr_29240_29311[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (29))){
var inst_29185 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29241_29312 = state_29201__$1;
(statearr_29241_29312[(2)] = inst_29185);

(statearr_29241_29312[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (44))){
var inst_29194 = (state_29201[(2)]);
var state_29201__$1 = (function (){var statearr_29242 = state_29201;
(statearr_29242[(28)] = inst_29194);

return statearr_29242;
})();
var statearr_29243_29313 = state_29201__$1;
(statearr_29243_29313[(2)] = null);

(statearr_29243_29313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (6))){
var inst_29133 = (state_29201[(29)]);
var inst_29132 = cljs.core.deref.call(null,cs);
var inst_29133__$1 = cljs.core.keys.call(null,inst_29132);
var inst_29134 = cljs.core.count.call(null,inst_29133__$1);
var inst_29135 = cljs.core.reset_BANG_.call(null,dctr,inst_29134);
var inst_29140 = cljs.core.seq.call(null,inst_29133__$1);
var inst_29141 = inst_29140;
var inst_29142 = null;
var inst_29143 = (0);
var inst_29144 = (0);
var state_29201__$1 = (function (){var statearr_29244 = state_29201;
(statearr_29244[(20)] = inst_29141);

(statearr_29244[(29)] = inst_29133__$1);

(statearr_29244[(30)] = inst_29135);

(statearr_29244[(9)] = inst_29142);

(statearr_29244[(21)] = inst_29143);

(statearr_29244[(12)] = inst_29144);

return statearr_29244;
})();
var statearr_29245_29314 = state_29201__$1;
(statearr_29245_29314[(2)] = null);

(statearr_29245_29314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (28))){
var inst_29141 = (state_29201[(20)]);
var inst_29160 = (state_29201[(25)]);
var inst_29160__$1 = cljs.core.seq.call(null,inst_29141);
var state_29201__$1 = (function (){var statearr_29246 = state_29201;
(statearr_29246[(25)] = inst_29160__$1);

return statearr_29246;
})();
if(inst_29160__$1){
var statearr_29247_29315 = state_29201__$1;
(statearr_29247_29315[(1)] = (33));

} else {
var statearr_29248_29316 = state_29201__$1;
(statearr_29248_29316[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (25))){
var inst_29143 = (state_29201[(21)]);
var inst_29144 = (state_29201[(12)]);
var inst_29146 = (inst_29144 < inst_29143);
var inst_29147 = inst_29146;
var state_29201__$1 = state_29201;
if(cljs.core.truth_(inst_29147)){
var statearr_29249_29317 = state_29201__$1;
(statearr_29249_29317[(1)] = (27));

} else {
var statearr_29250_29318 = state_29201__$1;
(statearr_29250_29318[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (34))){
var state_29201__$1 = state_29201;
var statearr_29251_29319 = state_29201__$1;
(statearr_29251_29319[(2)] = null);

(statearr_29251_29319[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (17))){
var state_29201__$1 = state_29201;
var statearr_29252_29320 = state_29201__$1;
(statearr_29252_29320[(2)] = null);

(statearr_29252_29320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (3))){
var inst_29199 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29201__$1,inst_29199);
} else {
if((state_val_29202 === (12))){
var inst_29128 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29253_29321 = state_29201__$1;
(statearr_29253_29321[(2)] = inst_29128);

(statearr_29253_29321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (2))){
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29201__$1,(4),ch);
} else {
if((state_val_29202 === (23))){
var state_29201__$1 = state_29201;
var statearr_29254_29322 = state_29201__$1;
(statearr_29254_29322[(2)] = null);

(statearr_29254_29322[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (35))){
var inst_29183 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29255_29323 = state_29201__$1;
(statearr_29255_29323[(2)] = inst_29183);

(statearr_29255_29323[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (19))){
var inst_29102 = (state_29201[(7)]);
var inst_29106 = cljs.core.chunk_first.call(null,inst_29102);
var inst_29107 = cljs.core.chunk_rest.call(null,inst_29102);
var inst_29108 = cljs.core.count.call(null,inst_29106);
var inst_29082 = inst_29107;
var inst_29083 = inst_29106;
var inst_29084 = inst_29108;
var inst_29085 = (0);
var state_29201__$1 = (function (){var statearr_29256 = state_29201;
(statearr_29256[(13)] = inst_29083);

(statearr_29256[(15)] = inst_29082);

(statearr_29256[(16)] = inst_29085);

(statearr_29256[(17)] = inst_29084);

return statearr_29256;
})();
var statearr_29257_29324 = state_29201__$1;
(statearr_29257_29324[(2)] = null);

(statearr_29257_29324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (11))){
var inst_29082 = (state_29201[(15)]);
var inst_29102 = (state_29201[(7)]);
var inst_29102__$1 = cljs.core.seq.call(null,inst_29082);
var state_29201__$1 = (function (){var statearr_29258 = state_29201;
(statearr_29258[(7)] = inst_29102__$1);

return statearr_29258;
})();
if(inst_29102__$1){
var statearr_29259_29325 = state_29201__$1;
(statearr_29259_29325[(1)] = (16));

} else {
var statearr_29260_29326 = state_29201__$1;
(statearr_29260_29326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (9))){
var inst_29130 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29261_29327 = state_29201__$1;
(statearr_29261_29327[(2)] = inst_29130);

(statearr_29261_29327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (5))){
var inst_29080 = cljs.core.deref.call(null,cs);
var inst_29081 = cljs.core.seq.call(null,inst_29080);
var inst_29082 = inst_29081;
var inst_29083 = null;
var inst_29084 = (0);
var inst_29085 = (0);
var state_29201__$1 = (function (){var statearr_29262 = state_29201;
(statearr_29262[(13)] = inst_29083);

(statearr_29262[(15)] = inst_29082);

(statearr_29262[(16)] = inst_29085);

(statearr_29262[(17)] = inst_29084);

return statearr_29262;
})();
var statearr_29263_29328 = state_29201__$1;
(statearr_29263_29328[(2)] = null);

(statearr_29263_29328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (14))){
var state_29201__$1 = state_29201;
var statearr_29264_29329 = state_29201__$1;
(statearr_29264_29329[(2)] = null);

(statearr_29264_29329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (45))){
var inst_29191 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29265_29330 = state_29201__$1;
(statearr_29265_29330[(2)] = inst_29191);

(statearr_29265_29330[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (26))){
var inst_29133 = (state_29201[(29)]);
var inst_29187 = (state_29201[(2)]);
var inst_29188 = cljs.core.seq.call(null,inst_29133);
var state_29201__$1 = (function (){var statearr_29266 = state_29201;
(statearr_29266[(31)] = inst_29187);

return statearr_29266;
})();
if(inst_29188){
var statearr_29267_29331 = state_29201__$1;
(statearr_29267_29331[(1)] = (42));

} else {
var statearr_29268_29332 = state_29201__$1;
(statearr_29268_29332[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (16))){
var inst_29102 = (state_29201[(7)]);
var inst_29104 = cljs.core.chunked_seq_QMARK_.call(null,inst_29102);
var state_29201__$1 = state_29201;
if(inst_29104){
var statearr_29269_29333 = state_29201__$1;
(statearr_29269_29333[(1)] = (19));

} else {
var statearr_29270_29334 = state_29201__$1;
(statearr_29270_29334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (38))){
var inst_29180 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29271_29335 = state_29201__$1;
(statearr_29271_29335[(2)] = inst_29180);

(statearr_29271_29335[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (30))){
var state_29201__$1 = state_29201;
var statearr_29272_29336 = state_29201__$1;
(statearr_29272_29336[(2)] = null);

(statearr_29272_29336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (10))){
var inst_29083 = (state_29201[(13)]);
var inst_29085 = (state_29201[(16)]);
var inst_29091 = cljs.core._nth.call(null,inst_29083,inst_29085);
var inst_29092 = cljs.core.nth.call(null,inst_29091,(0),null);
var inst_29093 = cljs.core.nth.call(null,inst_29091,(1),null);
var state_29201__$1 = (function (){var statearr_29273 = state_29201;
(statearr_29273[(26)] = inst_29092);

return statearr_29273;
})();
if(cljs.core.truth_(inst_29093)){
var statearr_29274_29337 = state_29201__$1;
(statearr_29274_29337[(1)] = (13));

} else {
var statearr_29275_29338 = state_29201__$1;
(statearr_29275_29338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (18))){
var inst_29126 = (state_29201[(2)]);
var state_29201__$1 = state_29201;
var statearr_29276_29339 = state_29201__$1;
(statearr_29276_29339[(2)] = inst_29126);

(statearr_29276_29339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (42))){
var state_29201__$1 = state_29201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29201__$1,(45),dchan);
} else {
if((state_val_29202 === (37))){
var inst_29073 = (state_29201[(11)]);
var inst_29160 = (state_29201[(25)]);
var inst_29169 = (state_29201[(23)]);
var inst_29169__$1 = cljs.core.first.call(null,inst_29160);
var inst_29170 = cljs.core.async.put_BANG_.call(null,inst_29169__$1,inst_29073,done);
var state_29201__$1 = (function (){var statearr_29277 = state_29201;
(statearr_29277[(23)] = inst_29169__$1);

return statearr_29277;
})();
if(cljs.core.truth_(inst_29170)){
var statearr_29278_29340 = state_29201__$1;
(statearr_29278_29340[(1)] = (39));

} else {
var statearr_29279_29341 = state_29201__$1;
(statearr_29279_29341[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29202 === (8))){
var inst_29085 = (state_29201[(16)]);
var inst_29084 = (state_29201[(17)]);
var inst_29087 = (inst_29085 < inst_29084);
var inst_29088 = inst_29087;
var state_29201__$1 = state_29201;
if(cljs.core.truth_(inst_29088)){
var statearr_29280_29342 = state_29201__$1;
(statearr_29280_29342[(1)] = (10));

} else {
var statearr_29281_29343 = state_29201__$1;
(statearr_29281_29343[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__22277__auto___29289,cs,m,dchan,dctr,done))
;
return ((function (switch__22215__auto__,c__22277__auto___29289,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22216__auto__ = null;
var cljs$core$async$mult_$_state_machine__22216__auto____0 = (function (){
var statearr_29285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29285[(0)] = cljs$core$async$mult_$_state_machine__22216__auto__);

(statearr_29285[(1)] = (1));

return statearr_29285;
});
var cljs$core$async$mult_$_state_machine__22216__auto____1 = (function (state_29201){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_29201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e29286){if((e29286 instanceof Object)){
var ex__22219__auto__ = e29286;
var statearr_29287_29344 = state_29201;
(statearr_29287_29344[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29345 = state_29201;
state_29201 = G__29345;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22216__auto__ = function(state_29201){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22216__auto____1.call(this,state_29201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22216__auto____0;
cljs$core$async$mult_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22216__auto____1;
return cljs$core$async$mult_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___29289,cs,m,dchan,dctr,done))
})();
var state__22279__auto__ = (function (){var statearr_29288 = f__22278__auto__.call(null);
(statearr_29288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___29289);

return statearr_29288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___29289,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__29347 = arguments.length;
switch (G__29347) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj29350 = {};
return obj29350;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18893__auto__ = m;
if(and__18893__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18893__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19541__auto__ = (((m == null))?null:m);
return (function (){var or__18905__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18893__auto__ = m;
if(and__18893__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18893__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19541__auto__ = (((m == null))?null:m);
return (function (){var or__18905__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18893__auto__ = m;
if(and__18893__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18893__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19541__auto__ = (((m == null))?null:m);
return (function (){var or__18905__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18893__auto__ = m;
if(and__18893__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18893__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19541__auto__ = (((m == null))?null:m);
return (function (){var or__18905__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18893__auto__ = m;
if(and__18893__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18893__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19541__auto__ = (((m == null))?null:m);
return (function (){var or__18905__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19945__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19945__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29355){
var map__29356 = p__29355;
var map__29356__$1 = ((cljs.core.seq_QMARK_.call(null,map__29356))?cljs.core.apply.call(null,cljs.core.hash_map,map__29356):map__29356);
var opts = map__29356__$1;
var statearr_29357_29360 = state;
(statearr_29357_29360[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29356,map__29356__$1,opts){
return (function (val){
var statearr_29358_29361 = state;
(statearr_29358_29361[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29356,map__29356__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29359_29362 = state;
(statearr_29359_29362[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29351){
var G__29352 = cljs.core.first.call(null,seq29351);
var seq29351__$1 = cljs.core.next.call(null,seq29351);
var G__29353 = cljs.core.first.call(null,seq29351__$1);
var seq29351__$2 = cljs.core.next.call(null,seq29351__$1);
var G__29354 = cljs.core.first.call(null,seq29351__$2);
var seq29351__$3 = cljs.core.next.call(null,seq29351__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29352,G__29353,G__29354,seq29351__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29482 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29482 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29483){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29483 = meta29483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29484,meta29483__$1){
var self__ = this;
var _29484__$1 = this;
return (new cljs.core.async.t29482(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29483__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29484){
var self__ = this;
var _29484__$1 = this;
return self__.meta29483;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29482.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29483","meta29483",-753944580,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29482.cljs$lang$type = true;

cljs.core.async.t29482.cljs$lang$ctorStr = "cljs.core.async/t29482";

cljs.core.async.t29482.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t29482");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29482 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29482(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29483){
return (new cljs.core.async.t29482(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29483));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29482(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22277__auto___29601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___29601,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___29601,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29554){
var state_val_29555 = (state_29554[(1)]);
if((state_val_29555 === (7))){
var inst_29498 = (state_29554[(7)]);
var inst_29503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29498);
var state_29554__$1 = state_29554;
var statearr_29556_29602 = state_29554__$1;
(statearr_29556_29602[(2)] = inst_29503);

(statearr_29556_29602[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (20))){
var inst_29513 = (state_29554[(8)]);
var state_29554__$1 = state_29554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29554__$1,(23),out,inst_29513);
} else {
if((state_val_29555 === (1))){
var inst_29488 = (state_29554[(9)]);
var inst_29488__$1 = calc_state.call(null);
var inst_29489 = cljs.core.seq_QMARK_.call(null,inst_29488__$1);
var state_29554__$1 = (function (){var statearr_29557 = state_29554;
(statearr_29557[(9)] = inst_29488__$1);

return statearr_29557;
})();
if(inst_29489){
var statearr_29558_29603 = state_29554__$1;
(statearr_29558_29603[(1)] = (2));

} else {
var statearr_29559_29604 = state_29554__$1;
(statearr_29559_29604[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (24))){
var inst_29506 = (state_29554[(10)]);
var inst_29498 = inst_29506;
var state_29554__$1 = (function (){var statearr_29560 = state_29554;
(statearr_29560[(7)] = inst_29498);

return statearr_29560;
})();
var statearr_29561_29605 = state_29554__$1;
(statearr_29561_29605[(2)] = null);

(statearr_29561_29605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (4))){
var inst_29488 = (state_29554[(9)]);
var inst_29494 = (state_29554[(2)]);
var inst_29495 = cljs.core.get.call(null,inst_29494,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29496 = cljs.core.get.call(null,inst_29494,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29497 = cljs.core.get.call(null,inst_29494,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29498 = inst_29488;
var state_29554__$1 = (function (){var statearr_29562 = state_29554;
(statearr_29562[(11)] = inst_29497);

(statearr_29562[(12)] = inst_29495);

(statearr_29562[(7)] = inst_29498);

(statearr_29562[(13)] = inst_29496);

return statearr_29562;
})();
var statearr_29563_29606 = state_29554__$1;
(statearr_29563_29606[(2)] = null);

(statearr_29563_29606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (15))){
var state_29554__$1 = state_29554;
var statearr_29564_29607 = state_29554__$1;
(statearr_29564_29607[(2)] = null);

(statearr_29564_29607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (21))){
var inst_29506 = (state_29554[(10)]);
var inst_29498 = inst_29506;
var state_29554__$1 = (function (){var statearr_29565 = state_29554;
(statearr_29565[(7)] = inst_29498);

return statearr_29565;
})();
var statearr_29566_29608 = state_29554__$1;
(statearr_29566_29608[(2)] = null);

(statearr_29566_29608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (13))){
var inst_29550 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
var statearr_29567_29609 = state_29554__$1;
(statearr_29567_29609[(2)] = inst_29550);

(statearr_29567_29609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (22))){
var inst_29548 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
var statearr_29568_29610 = state_29554__$1;
(statearr_29568_29610[(2)] = inst_29548);

(statearr_29568_29610[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (6))){
var inst_29552 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29554__$1,inst_29552);
} else {
if((state_val_29555 === (25))){
var state_29554__$1 = state_29554;
var statearr_29569_29611 = state_29554__$1;
(statearr_29569_29611[(2)] = null);

(statearr_29569_29611[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (17))){
var inst_29528 = (state_29554[(14)]);
var state_29554__$1 = state_29554;
var statearr_29570_29612 = state_29554__$1;
(statearr_29570_29612[(2)] = inst_29528);

(statearr_29570_29612[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (3))){
var inst_29488 = (state_29554[(9)]);
var state_29554__$1 = state_29554;
var statearr_29571_29613 = state_29554__$1;
(statearr_29571_29613[(2)] = inst_29488);

(statearr_29571_29613[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (12))){
var inst_29507 = (state_29554[(15)]);
var inst_29528 = (state_29554[(14)]);
var inst_29514 = (state_29554[(16)]);
var inst_29528__$1 = inst_29507.call(null,inst_29514);
var state_29554__$1 = (function (){var statearr_29572 = state_29554;
(statearr_29572[(14)] = inst_29528__$1);

return statearr_29572;
})();
if(cljs.core.truth_(inst_29528__$1)){
var statearr_29573_29614 = state_29554__$1;
(statearr_29573_29614[(1)] = (17));

} else {
var statearr_29574_29615 = state_29554__$1;
(statearr_29574_29615[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (2))){
var inst_29488 = (state_29554[(9)]);
var inst_29491 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29488);
var state_29554__$1 = state_29554;
var statearr_29575_29616 = state_29554__$1;
(statearr_29575_29616[(2)] = inst_29491);

(statearr_29575_29616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (23))){
var inst_29539 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29539)){
var statearr_29576_29617 = state_29554__$1;
(statearr_29576_29617[(1)] = (24));

} else {
var statearr_29577_29618 = state_29554__$1;
(statearr_29577_29618[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (19))){
var inst_29536 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29536)){
var statearr_29578_29619 = state_29554__$1;
(statearr_29578_29619[(1)] = (20));

} else {
var statearr_29579_29620 = state_29554__$1;
(statearr_29579_29620[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (11))){
var inst_29513 = (state_29554[(8)]);
var inst_29519 = (inst_29513 == null);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29519)){
var statearr_29580_29621 = state_29554__$1;
(statearr_29580_29621[(1)] = (14));

} else {
var statearr_29581_29622 = state_29554__$1;
(statearr_29581_29622[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (9))){
var inst_29506 = (state_29554[(10)]);
var inst_29506__$1 = (state_29554[(2)]);
var inst_29507 = cljs.core.get.call(null,inst_29506__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29508 = cljs.core.get.call(null,inst_29506__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29509 = cljs.core.get.call(null,inst_29506__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29554__$1 = (function (){var statearr_29582 = state_29554;
(statearr_29582[(15)] = inst_29507);

(statearr_29582[(17)] = inst_29508);

(statearr_29582[(10)] = inst_29506__$1);

return statearr_29582;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29554__$1,(10),inst_29509);
} else {
if((state_val_29555 === (5))){
var inst_29498 = (state_29554[(7)]);
var inst_29501 = cljs.core.seq_QMARK_.call(null,inst_29498);
var state_29554__$1 = state_29554;
if(inst_29501){
var statearr_29583_29623 = state_29554__$1;
(statearr_29583_29623[(1)] = (7));

} else {
var statearr_29584_29624 = state_29554__$1;
(statearr_29584_29624[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (14))){
var inst_29514 = (state_29554[(16)]);
var inst_29521 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29514);
var state_29554__$1 = state_29554;
var statearr_29585_29625 = state_29554__$1;
(statearr_29585_29625[(2)] = inst_29521);

(statearr_29585_29625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (26))){
var inst_29544 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
var statearr_29586_29626 = state_29554__$1;
(statearr_29586_29626[(2)] = inst_29544);

(statearr_29586_29626[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (16))){
var inst_29524 = (state_29554[(2)]);
var inst_29525 = calc_state.call(null);
var inst_29498 = inst_29525;
var state_29554__$1 = (function (){var statearr_29587 = state_29554;
(statearr_29587[(18)] = inst_29524);

(statearr_29587[(7)] = inst_29498);

return statearr_29587;
})();
var statearr_29588_29627 = state_29554__$1;
(statearr_29588_29627[(2)] = null);

(statearr_29588_29627[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (10))){
var inst_29513 = (state_29554[(8)]);
var inst_29514 = (state_29554[(16)]);
var inst_29512 = (state_29554[(2)]);
var inst_29513__$1 = cljs.core.nth.call(null,inst_29512,(0),null);
var inst_29514__$1 = cljs.core.nth.call(null,inst_29512,(1),null);
var inst_29515 = (inst_29513__$1 == null);
var inst_29516 = cljs.core._EQ_.call(null,inst_29514__$1,change);
var inst_29517 = (inst_29515) || (inst_29516);
var state_29554__$1 = (function (){var statearr_29589 = state_29554;
(statearr_29589[(8)] = inst_29513__$1);

(statearr_29589[(16)] = inst_29514__$1);

return statearr_29589;
})();
if(cljs.core.truth_(inst_29517)){
var statearr_29590_29628 = state_29554__$1;
(statearr_29590_29628[(1)] = (11));

} else {
var statearr_29591_29629 = state_29554__$1;
(statearr_29591_29629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (18))){
var inst_29507 = (state_29554[(15)]);
var inst_29508 = (state_29554[(17)]);
var inst_29514 = (state_29554[(16)]);
var inst_29531 = cljs.core.empty_QMARK_.call(null,inst_29507);
var inst_29532 = inst_29508.call(null,inst_29514);
var inst_29533 = cljs.core.not.call(null,inst_29532);
var inst_29534 = (inst_29531) && (inst_29533);
var state_29554__$1 = state_29554;
var statearr_29592_29630 = state_29554__$1;
(statearr_29592_29630[(2)] = inst_29534);

(statearr_29592_29630[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (8))){
var inst_29498 = (state_29554[(7)]);
var state_29554__$1 = state_29554;
var statearr_29593_29631 = state_29554__$1;
(statearr_29593_29631[(2)] = inst_29498);

(statearr_29593_29631[(1)] = (9));


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
});})(c__22277__auto___29601,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22215__auto__,c__22277__auto___29601,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22216__auto__ = null;
var cljs$core$async$mix_$_state_machine__22216__auto____0 = (function (){
var statearr_29597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29597[(0)] = cljs$core$async$mix_$_state_machine__22216__auto__);

(statearr_29597[(1)] = (1));

return statearr_29597;
});
var cljs$core$async$mix_$_state_machine__22216__auto____1 = (function (state_29554){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_29554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e29598){if((e29598 instanceof Object)){
var ex__22219__auto__ = e29598;
var statearr_29599_29632 = state_29554;
(statearr_29599_29632[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29633 = state_29554;
state_29554 = G__29633;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22216__auto__ = function(state_29554){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22216__auto____1.call(this,state_29554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22216__auto____0;
cljs$core$async$mix_$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22216__auto____1;
return cljs$core$async$mix_$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___29601,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22279__auto__ = (function (){var statearr_29600 = f__22278__auto__.call(null);
(statearr_29600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___29601);

return statearr_29600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___29601,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29635 = {};
return obj29635;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18893__auto__ = p;
if(and__18893__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18893__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19541__auto__ = (((p == null))?null:p);
return (function (){var or__18905__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18893__auto__ = p;
if(and__18893__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18893__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19541__auto__ = (((p == null))?null:p);
return (function (){var or__18905__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__29637 = arguments.length;
switch (G__29637) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18893__auto__ = p;
if(and__18893__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18893__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19541__auto__ = (((p == null))?null:p);
return (function (){var or__18905__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18893__auto__ = p;
if(and__18893__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18893__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19541__auto__ = (((p == null))?null:p);
return (function (){var or__18905__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19541__auto__)]);
if(or__18905__auto__){
return or__18905__auto__;
} else {
var or__18905__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18905__auto____$1){
return or__18905__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__29641 = arguments.length;
switch (G__29641) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18905__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18905__auto__)){
return or__18905__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18905__auto__,mults){
return (function (p1__29639_SHARP_){
if(cljs.core.truth_(p1__29639_SHARP_.call(null,topic))){
return p1__29639_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29639_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18905__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29642 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29642 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29643){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29643 = meta29643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29644,meta29643__$1){
var self__ = this;
var _29644__$1 = this;
return (new cljs.core.async.t29642(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29643__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29644){
var self__ = this;
var _29644__$1 = this;
return self__.meta29643;
});})(mults,ensure_mult))
;

cljs.core.async.t29642.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29642.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29642.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29642.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29642.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29643","meta29643",-2100444202,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t29642.cljs$lang$type = true;

cljs.core.async.t29642.cljs$lang$ctorStr = "cljs.core.async/t29642";

cljs.core.async.t29642.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t29642");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29642 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29643){
return (new cljs.core.async.t29642(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29643));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29642(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22277__auto___29765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___29765,mults,ensure_mult,p){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___29765,mults,ensure_mult,p){
return (function (state_29716){
var state_val_29717 = (state_29716[(1)]);
if((state_val_29717 === (7))){
var inst_29712 = (state_29716[(2)]);
var state_29716__$1 = state_29716;
var statearr_29718_29766 = state_29716__$1;
(statearr_29718_29766[(2)] = inst_29712);

(statearr_29718_29766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (20))){
var state_29716__$1 = state_29716;
var statearr_29719_29767 = state_29716__$1;
(statearr_29719_29767[(2)] = null);

(statearr_29719_29767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (1))){
var state_29716__$1 = state_29716;
var statearr_29720_29768 = state_29716__$1;
(statearr_29720_29768[(2)] = null);

(statearr_29720_29768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (24))){
var inst_29695 = (state_29716[(7)]);
var inst_29704 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29695);
var state_29716__$1 = state_29716;
var statearr_29721_29769 = state_29716__$1;
(statearr_29721_29769[(2)] = inst_29704);

(statearr_29721_29769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (4))){
var inst_29647 = (state_29716[(8)]);
var inst_29647__$1 = (state_29716[(2)]);
var inst_29648 = (inst_29647__$1 == null);
var state_29716__$1 = (function (){var statearr_29722 = state_29716;
(statearr_29722[(8)] = inst_29647__$1);

return statearr_29722;
})();
if(cljs.core.truth_(inst_29648)){
var statearr_29723_29770 = state_29716__$1;
(statearr_29723_29770[(1)] = (5));

} else {
var statearr_29724_29771 = state_29716__$1;
(statearr_29724_29771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (15))){
var inst_29689 = (state_29716[(2)]);
var state_29716__$1 = state_29716;
var statearr_29725_29772 = state_29716__$1;
(statearr_29725_29772[(2)] = inst_29689);

(statearr_29725_29772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (21))){
var inst_29709 = (state_29716[(2)]);
var state_29716__$1 = (function (){var statearr_29726 = state_29716;
(statearr_29726[(9)] = inst_29709);

return statearr_29726;
})();
var statearr_29727_29773 = state_29716__$1;
(statearr_29727_29773[(2)] = null);

(statearr_29727_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (13))){
var inst_29671 = (state_29716[(10)]);
var inst_29673 = cljs.core.chunked_seq_QMARK_.call(null,inst_29671);
var state_29716__$1 = state_29716;
if(inst_29673){
var statearr_29728_29774 = state_29716__$1;
(statearr_29728_29774[(1)] = (16));

} else {
var statearr_29729_29775 = state_29716__$1;
(statearr_29729_29775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (22))){
var inst_29701 = (state_29716[(2)]);
var state_29716__$1 = state_29716;
if(cljs.core.truth_(inst_29701)){
var statearr_29730_29776 = state_29716__$1;
(statearr_29730_29776[(1)] = (23));

} else {
var statearr_29731_29777 = state_29716__$1;
(statearr_29731_29777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (6))){
var inst_29697 = (state_29716[(11)]);
var inst_29695 = (state_29716[(7)]);
var inst_29647 = (state_29716[(8)]);
var inst_29695__$1 = topic_fn.call(null,inst_29647);
var inst_29696 = cljs.core.deref.call(null,mults);
var inst_29697__$1 = cljs.core.get.call(null,inst_29696,inst_29695__$1);
var state_29716__$1 = (function (){var statearr_29732 = state_29716;
(statearr_29732[(11)] = inst_29697__$1);

(statearr_29732[(7)] = inst_29695__$1);

return statearr_29732;
})();
if(cljs.core.truth_(inst_29697__$1)){
var statearr_29733_29778 = state_29716__$1;
(statearr_29733_29778[(1)] = (19));

} else {
var statearr_29734_29779 = state_29716__$1;
(statearr_29734_29779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (25))){
var inst_29706 = (state_29716[(2)]);
var state_29716__$1 = state_29716;
var statearr_29735_29780 = state_29716__$1;
(statearr_29735_29780[(2)] = inst_29706);

(statearr_29735_29780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (17))){
var inst_29671 = (state_29716[(10)]);
var inst_29680 = cljs.core.first.call(null,inst_29671);
var inst_29681 = cljs.core.async.muxch_STAR_.call(null,inst_29680);
var inst_29682 = cljs.core.async.close_BANG_.call(null,inst_29681);
var inst_29683 = cljs.core.next.call(null,inst_29671);
var inst_29657 = inst_29683;
var inst_29658 = null;
var inst_29659 = (0);
var inst_29660 = (0);
var state_29716__$1 = (function (){var statearr_29736 = state_29716;
(statearr_29736[(12)] = inst_29660);

(statearr_29736[(13)] = inst_29657);

(statearr_29736[(14)] = inst_29658);

(statearr_29736[(15)] = inst_29682);

(statearr_29736[(16)] = inst_29659);

return statearr_29736;
})();
var statearr_29737_29781 = state_29716__$1;
(statearr_29737_29781[(2)] = null);

(statearr_29737_29781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (3))){
var inst_29714 = (state_29716[(2)]);
var state_29716__$1 = state_29716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29716__$1,inst_29714);
} else {
if((state_val_29717 === (12))){
var inst_29691 = (state_29716[(2)]);
var state_29716__$1 = state_29716;
var statearr_29738_29782 = state_29716__$1;
(statearr_29738_29782[(2)] = inst_29691);

(statearr_29738_29782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (2))){
var state_29716__$1 = state_29716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29716__$1,(4),ch);
} else {
if((state_val_29717 === (23))){
var state_29716__$1 = state_29716;
var statearr_29739_29783 = state_29716__$1;
(statearr_29739_29783[(2)] = null);

(statearr_29739_29783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (19))){
var inst_29697 = (state_29716[(11)]);
var inst_29647 = (state_29716[(8)]);
var inst_29699 = cljs.core.async.muxch_STAR_.call(null,inst_29697);
var state_29716__$1 = state_29716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29716__$1,(22),inst_29699,inst_29647);
} else {
if((state_val_29717 === (11))){
var inst_29657 = (state_29716[(13)]);
var inst_29671 = (state_29716[(10)]);
var inst_29671__$1 = cljs.core.seq.call(null,inst_29657);
var state_29716__$1 = (function (){var statearr_29740 = state_29716;
(statearr_29740[(10)] = inst_29671__$1);

return statearr_29740;
})();
if(inst_29671__$1){
var statearr_29741_29784 = state_29716__$1;
(statearr_29741_29784[(1)] = (13));

} else {
var statearr_29742_29785 = state_29716__$1;
(statearr_29742_29785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (9))){
var inst_29693 = (state_29716[(2)]);
var state_29716__$1 = state_29716;
var statearr_29743_29786 = state_29716__$1;
(statearr_29743_29786[(2)] = inst_29693);

(statearr_29743_29786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (5))){
var inst_29654 = cljs.core.deref.call(null,mults);
var inst_29655 = cljs.core.vals.call(null,inst_29654);
var inst_29656 = cljs.core.seq.call(null,inst_29655);
var inst_29657 = inst_29656;
var inst_29658 = null;
var inst_29659 = (0);
var inst_29660 = (0);
var state_29716__$1 = (function (){var statearr_29744 = state_29716;
(statearr_29744[(12)] = inst_29660);

(statearr_29744[(13)] = inst_29657);

(statearr_29744[(14)] = inst_29658);

(statearr_29744[(16)] = inst_29659);

return statearr_29744;
})();
var statearr_29745_29787 = state_29716__$1;
(statearr_29745_29787[(2)] = null);

(statearr_29745_29787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (14))){
var state_29716__$1 = state_29716;
var statearr_29749_29788 = state_29716__$1;
(statearr_29749_29788[(2)] = null);

(statearr_29749_29788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (16))){
var inst_29671 = (state_29716[(10)]);
var inst_29675 = cljs.core.chunk_first.call(null,inst_29671);
var inst_29676 = cljs.core.chunk_rest.call(null,inst_29671);
var inst_29677 = cljs.core.count.call(null,inst_29675);
var inst_29657 = inst_29676;
var inst_29658 = inst_29675;
var inst_29659 = inst_29677;
var inst_29660 = (0);
var state_29716__$1 = (function (){var statearr_29750 = state_29716;
(statearr_29750[(12)] = inst_29660);

(statearr_29750[(13)] = inst_29657);

(statearr_29750[(14)] = inst_29658);

(statearr_29750[(16)] = inst_29659);

return statearr_29750;
})();
var statearr_29751_29789 = state_29716__$1;
(statearr_29751_29789[(2)] = null);

(statearr_29751_29789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (10))){
var inst_29660 = (state_29716[(12)]);
var inst_29657 = (state_29716[(13)]);
var inst_29658 = (state_29716[(14)]);
var inst_29659 = (state_29716[(16)]);
var inst_29665 = cljs.core._nth.call(null,inst_29658,inst_29660);
var inst_29666 = cljs.core.async.muxch_STAR_.call(null,inst_29665);
var inst_29667 = cljs.core.async.close_BANG_.call(null,inst_29666);
var inst_29668 = (inst_29660 + (1));
var tmp29746 = inst_29657;
var tmp29747 = inst_29658;
var tmp29748 = inst_29659;
var inst_29657__$1 = tmp29746;
var inst_29658__$1 = tmp29747;
var inst_29659__$1 = tmp29748;
var inst_29660__$1 = inst_29668;
var state_29716__$1 = (function (){var statearr_29752 = state_29716;
(statearr_29752[(12)] = inst_29660__$1);

(statearr_29752[(13)] = inst_29657__$1);

(statearr_29752[(14)] = inst_29658__$1);

(statearr_29752[(17)] = inst_29667);

(statearr_29752[(16)] = inst_29659__$1);

return statearr_29752;
})();
var statearr_29753_29790 = state_29716__$1;
(statearr_29753_29790[(2)] = null);

(statearr_29753_29790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (18))){
var inst_29686 = (state_29716[(2)]);
var state_29716__$1 = state_29716;
var statearr_29754_29791 = state_29716__$1;
(statearr_29754_29791[(2)] = inst_29686);

(statearr_29754_29791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29717 === (8))){
var inst_29660 = (state_29716[(12)]);
var inst_29659 = (state_29716[(16)]);
var inst_29662 = (inst_29660 < inst_29659);
var inst_29663 = inst_29662;
var state_29716__$1 = state_29716;
if(cljs.core.truth_(inst_29663)){
var statearr_29755_29792 = state_29716__$1;
(statearr_29755_29792[(1)] = (10));

} else {
var statearr_29756_29793 = state_29716__$1;
(statearr_29756_29793[(1)] = (11));

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
});})(c__22277__auto___29765,mults,ensure_mult,p))
;
return ((function (switch__22215__auto__,c__22277__auto___29765,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_29760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29760[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_29760[(1)] = (1));

return statearr_29760;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_29716){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_29716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e29761){if((e29761 instanceof Object)){
var ex__22219__auto__ = e29761;
var statearr_29762_29794 = state_29716;
(statearr_29762_29794[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29795 = state_29716;
state_29716 = G__29795;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_29716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_29716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___29765,mults,ensure_mult,p))
})();
var state__22279__auto__ = (function (){var statearr_29763 = f__22278__auto__.call(null);
(statearr_29763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___29765);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___29765,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__29797 = arguments.length;
switch (G__29797) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__29800 = arguments.length;
switch (G__29800) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__29803 = arguments.length;
switch (G__29803) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22277__auto___29873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___29873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___29873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29842){
var state_val_29843 = (state_29842[(1)]);
if((state_val_29843 === (7))){
var state_29842__$1 = state_29842;
var statearr_29844_29874 = state_29842__$1;
(statearr_29844_29874[(2)] = null);

(statearr_29844_29874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (1))){
var state_29842__$1 = state_29842;
var statearr_29845_29875 = state_29842__$1;
(statearr_29845_29875[(2)] = null);

(statearr_29845_29875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (4))){
var inst_29806 = (state_29842[(7)]);
var inst_29808 = (inst_29806 < cnt);
var state_29842__$1 = state_29842;
if(cljs.core.truth_(inst_29808)){
var statearr_29846_29876 = state_29842__$1;
(statearr_29846_29876[(1)] = (6));

} else {
var statearr_29847_29877 = state_29842__$1;
(statearr_29847_29877[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (15))){
var inst_29838 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
var statearr_29848_29878 = state_29842__$1;
(statearr_29848_29878[(2)] = inst_29838);

(statearr_29848_29878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (13))){
var inst_29831 = cljs.core.async.close_BANG_.call(null,out);
var state_29842__$1 = state_29842;
var statearr_29849_29879 = state_29842__$1;
(statearr_29849_29879[(2)] = inst_29831);

(statearr_29849_29879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (6))){
var state_29842__$1 = state_29842;
var statearr_29850_29880 = state_29842__$1;
(statearr_29850_29880[(2)] = null);

(statearr_29850_29880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (3))){
var inst_29840 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29842__$1,inst_29840);
} else {
if((state_val_29843 === (12))){
var inst_29828 = (state_29842[(8)]);
var inst_29828__$1 = (state_29842[(2)]);
var inst_29829 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29828__$1);
var state_29842__$1 = (function (){var statearr_29851 = state_29842;
(statearr_29851[(8)] = inst_29828__$1);

return statearr_29851;
})();
if(cljs.core.truth_(inst_29829)){
var statearr_29852_29881 = state_29842__$1;
(statearr_29852_29881[(1)] = (13));

} else {
var statearr_29853_29882 = state_29842__$1;
(statearr_29853_29882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (2))){
var inst_29805 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29806 = (0);
var state_29842__$1 = (function (){var statearr_29854 = state_29842;
(statearr_29854[(9)] = inst_29805);

(statearr_29854[(7)] = inst_29806);

return statearr_29854;
})();
var statearr_29855_29883 = state_29842__$1;
(statearr_29855_29883[(2)] = null);

(statearr_29855_29883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (11))){
var inst_29806 = (state_29842[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29842,(10),Object,null,(9));
var inst_29815 = chs__$1.call(null,inst_29806);
var inst_29816 = done.call(null,inst_29806);
var inst_29817 = cljs.core.async.take_BANG_.call(null,inst_29815,inst_29816);
var state_29842__$1 = state_29842;
var statearr_29856_29884 = state_29842__$1;
(statearr_29856_29884[(2)] = inst_29817);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (9))){
var inst_29806 = (state_29842[(7)]);
var inst_29819 = (state_29842[(2)]);
var inst_29820 = (inst_29806 + (1));
var inst_29806__$1 = inst_29820;
var state_29842__$1 = (function (){var statearr_29857 = state_29842;
(statearr_29857[(7)] = inst_29806__$1);

(statearr_29857[(10)] = inst_29819);

return statearr_29857;
})();
var statearr_29858_29885 = state_29842__$1;
(statearr_29858_29885[(2)] = null);

(statearr_29858_29885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (5))){
var inst_29826 = (state_29842[(2)]);
var state_29842__$1 = (function (){var statearr_29859 = state_29842;
(statearr_29859[(11)] = inst_29826);

return statearr_29859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29842__$1,(12),dchan);
} else {
if((state_val_29843 === (14))){
var inst_29828 = (state_29842[(8)]);
var inst_29833 = cljs.core.apply.call(null,f,inst_29828);
var state_29842__$1 = state_29842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29842__$1,(16),out,inst_29833);
} else {
if((state_val_29843 === (16))){
var inst_29835 = (state_29842[(2)]);
var state_29842__$1 = (function (){var statearr_29860 = state_29842;
(statearr_29860[(12)] = inst_29835);

return statearr_29860;
})();
var statearr_29861_29886 = state_29842__$1;
(statearr_29861_29886[(2)] = null);

(statearr_29861_29886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (10))){
var inst_29810 = (state_29842[(2)]);
var inst_29811 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29842__$1 = (function (){var statearr_29862 = state_29842;
(statearr_29862[(13)] = inst_29810);

return statearr_29862;
})();
var statearr_29863_29887 = state_29842__$1;
(statearr_29863_29887[(2)] = inst_29811);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29843 === (8))){
var inst_29824 = (state_29842[(2)]);
var state_29842__$1 = state_29842;
var statearr_29864_29888 = state_29842__$1;
(statearr_29864_29888[(2)] = inst_29824);

(statearr_29864_29888[(1)] = (5));


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
});})(c__22277__auto___29873,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22215__auto__,c__22277__auto___29873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_29868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29868[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_29868[(1)] = (1));

return statearr_29868;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_29842){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_29842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e29869){if((e29869 instanceof Object)){
var ex__22219__auto__ = e29869;
var statearr_29870_29889 = state_29842;
(statearr_29870_29889[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29890 = state_29842;
state_29842 = G__29890;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_29842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_29842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___29873,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22279__auto__ = (function (){var statearr_29871 = f__22278__auto__.call(null);
(statearr_29871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___29873);

return statearr_29871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___29873,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__29893 = arguments.length;
switch (G__29893) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22277__auto___29948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___29948,out){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___29948,out){
return (function (state_29923){
var state_val_29924 = (state_29923[(1)]);
if((state_val_29924 === (7))){
var inst_29903 = (state_29923[(7)]);
var inst_29902 = (state_29923[(8)]);
var inst_29902__$1 = (state_29923[(2)]);
var inst_29903__$1 = cljs.core.nth.call(null,inst_29902__$1,(0),null);
var inst_29904 = cljs.core.nth.call(null,inst_29902__$1,(1),null);
var inst_29905 = (inst_29903__$1 == null);
var state_29923__$1 = (function (){var statearr_29925 = state_29923;
(statearr_29925[(7)] = inst_29903__$1);

(statearr_29925[(9)] = inst_29904);

(statearr_29925[(8)] = inst_29902__$1);

return statearr_29925;
})();
if(cljs.core.truth_(inst_29905)){
var statearr_29926_29949 = state_29923__$1;
(statearr_29926_29949[(1)] = (8));

} else {
var statearr_29927_29950 = state_29923__$1;
(statearr_29927_29950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (1))){
var inst_29894 = cljs.core.vec.call(null,chs);
var inst_29895 = inst_29894;
var state_29923__$1 = (function (){var statearr_29928 = state_29923;
(statearr_29928[(10)] = inst_29895);

return statearr_29928;
})();
var statearr_29929_29951 = state_29923__$1;
(statearr_29929_29951[(2)] = null);

(statearr_29929_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (4))){
var inst_29895 = (state_29923[(10)]);
var state_29923__$1 = state_29923;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29923__$1,(7),inst_29895);
} else {
if((state_val_29924 === (6))){
var inst_29919 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
var statearr_29930_29952 = state_29923__$1;
(statearr_29930_29952[(2)] = inst_29919);

(statearr_29930_29952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (3))){
var inst_29921 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29923__$1,inst_29921);
} else {
if((state_val_29924 === (2))){
var inst_29895 = (state_29923[(10)]);
var inst_29897 = cljs.core.count.call(null,inst_29895);
var inst_29898 = (inst_29897 > (0));
var state_29923__$1 = state_29923;
if(cljs.core.truth_(inst_29898)){
var statearr_29932_29953 = state_29923__$1;
(statearr_29932_29953[(1)] = (4));

} else {
var statearr_29933_29954 = state_29923__$1;
(statearr_29933_29954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (11))){
var inst_29895 = (state_29923[(10)]);
var inst_29912 = (state_29923[(2)]);
var tmp29931 = inst_29895;
var inst_29895__$1 = tmp29931;
var state_29923__$1 = (function (){var statearr_29934 = state_29923;
(statearr_29934[(11)] = inst_29912);

(statearr_29934[(10)] = inst_29895__$1);

return statearr_29934;
})();
var statearr_29935_29955 = state_29923__$1;
(statearr_29935_29955[(2)] = null);

(statearr_29935_29955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (9))){
var inst_29903 = (state_29923[(7)]);
var state_29923__$1 = state_29923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29923__$1,(11),out,inst_29903);
} else {
if((state_val_29924 === (5))){
var inst_29917 = cljs.core.async.close_BANG_.call(null,out);
var state_29923__$1 = state_29923;
var statearr_29936_29956 = state_29923__$1;
(statearr_29936_29956[(2)] = inst_29917);

(statearr_29936_29956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (10))){
var inst_29915 = (state_29923[(2)]);
var state_29923__$1 = state_29923;
var statearr_29937_29957 = state_29923__$1;
(statearr_29937_29957[(2)] = inst_29915);

(statearr_29937_29957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29924 === (8))){
var inst_29903 = (state_29923[(7)]);
var inst_29904 = (state_29923[(9)]);
var inst_29902 = (state_29923[(8)]);
var inst_29895 = (state_29923[(10)]);
var inst_29907 = (function (){var cs = inst_29895;
var vec__29900 = inst_29902;
var v = inst_29903;
var c = inst_29904;
return ((function (cs,vec__29900,v,c,inst_29903,inst_29904,inst_29902,inst_29895,state_val_29924,c__22277__auto___29948,out){
return (function (p1__29891_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29891_SHARP_);
});
;})(cs,vec__29900,v,c,inst_29903,inst_29904,inst_29902,inst_29895,state_val_29924,c__22277__auto___29948,out))
})();
var inst_29908 = cljs.core.filterv.call(null,inst_29907,inst_29895);
var inst_29895__$1 = inst_29908;
var state_29923__$1 = (function (){var statearr_29938 = state_29923;
(statearr_29938[(10)] = inst_29895__$1);

return statearr_29938;
})();
var statearr_29939_29958 = state_29923__$1;
(statearr_29939_29958[(2)] = null);

(statearr_29939_29958[(1)] = (2));


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
});})(c__22277__auto___29948,out))
;
return ((function (switch__22215__auto__,c__22277__auto___29948,out){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_29943 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29943[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_29943[(1)] = (1));

return statearr_29943;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_29923){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_29923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e29944){if((e29944 instanceof Object)){
var ex__22219__auto__ = e29944;
var statearr_29945_29959 = state_29923;
(statearr_29945_29959[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29960 = state_29923;
state_29923 = G__29960;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_29923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_29923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___29948,out))
})();
var state__22279__auto__ = (function (){var statearr_29946 = f__22278__auto__.call(null);
(statearr_29946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___29948);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___29948,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__29962 = arguments.length;
switch (G__29962) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22277__auto___30010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___30010,out){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___30010,out){
return (function (state_29986){
var state_val_29987 = (state_29986[(1)]);
if((state_val_29987 === (7))){
var inst_29968 = (state_29986[(7)]);
var inst_29968__$1 = (state_29986[(2)]);
var inst_29969 = (inst_29968__$1 == null);
var inst_29970 = cljs.core.not.call(null,inst_29969);
var state_29986__$1 = (function (){var statearr_29988 = state_29986;
(statearr_29988[(7)] = inst_29968__$1);

return statearr_29988;
})();
if(inst_29970){
var statearr_29989_30011 = state_29986__$1;
(statearr_29989_30011[(1)] = (8));

} else {
var statearr_29990_30012 = state_29986__$1;
(statearr_29990_30012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (1))){
var inst_29963 = (0);
var state_29986__$1 = (function (){var statearr_29991 = state_29986;
(statearr_29991[(8)] = inst_29963);

return statearr_29991;
})();
var statearr_29992_30013 = state_29986__$1;
(statearr_29992_30013[(2)] = null);

(statearr_29992_30013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (4))){
var state_29986__$1 = state_29986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29986__$1,(7),ch);
} else {
if((state_val_29987 === (6))){
var inst_29981 = (state_29986[(2)]);
var state_29986__$1 = state_29986;
var statearr_29993_30014 = state_29986__$1;
(statearr_29993_30014[(2)] = inst_29981);

(statearr_29993_30014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (3))){
var inst_29983 = (state_29986[(2)]);
var inst_29984 = cljs.core.async.close_BANG_.call(null,out);
var state_29986__$1 = (function (){var statearr_29994 = state_29986;
(statearr_29994[(9)] = inst_29983);

return statearr_29994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29986__$1,inst_29984);
} else {
if((state_val_29987 === (2))){
var inst_29963 = (state_29986[(8)]);
var inst_29965 = (inst_29963 < n);
var state_29986__$1 = state_29986;
if(cljs.core.truth_(inst_29965)){
var statearr_29995_30015 = state_29986__$1;
(statearr_29995_30015[(1)] = (4));

} else {
var statearr_29996_30016 = state_29986__$1;
(statearr_29996_30016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (11))){
var inst_29963 = (state_29986[(8)]);
var inst_29973 = (state_29986[(2)]);
var inst_29974 = (inst_29963 + (1));
var inst_29963__$1 = inst_29974;
var state_29986__$1 = (function (){var statearr_29997 = state_29986;
(statearr_29997[(8)] = inst_29963__$1);

(statearr_29997[(10)] = inst_29973);

return statearr_29997;
})();
var statearr_29998_30017 = state_29986__$1;
(statearr_29998_30017[(2)] = null);

(statearr_29998_30017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (9))){
var state_29986__$1 = state_29986;
var statearr_29999_30018 = state_29986__$1;
(statearr_29999_30018[(2)] = null);

(statearr_29999_30018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (5))){
var state_29986__$1 = state_29986;
var statearr_30000_30019 = state_29986__$1;
(statearr_30000_30019[(2)] = null);

(statearr_30000_30019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (10))){
var inst_29978 = (state_29986[(2)]);
var state_29986__$1 = state_29986;
var statearr_30001_30020 = state_29986__$1;
(statearr_30001_30020[(2)] = inst_29978);

(statearr_30001_30020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29987 === (8))){
var inst_29968 = (state_29986[(7)]);
var state_29986__$1 = state_29986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29986__$1,(11),out,inst_29968);
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
});})(c__22277__auto___30010,out))
;
return ((function (switch__22215__auto__,c__22277__auto___30010,out){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_30005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30005[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_30005[(1)] = (1));

return statearr_30005;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_29986){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_29986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e30006){if((e30006 instanceof Object)){
var ex__22219__auto__ = e30006;
var statearr_30007_30021 = state_29986;
(statearr_30007_30021[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30022 = state_29986;
state_29986 = G__30022;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_29986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_29986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___30010,out))
})();
var state__22279__auto__ = (function (){var statearr_30008 = f__22278__auto__.call(null);
(statearr_30008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___30010);

return statearr_30008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___30010,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30030 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30030 = (function (map_LT_,f,ch,meta30031){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30031 = meta30031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30032,meta30031__$1){
var self__ = this;
var _30032__$1 = this;
return (new cljs.core.async.t30030(self__.map_LT_,self__.f,self__.ch,meta30031__$1));
});

cljs.core.async.t30030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30032){
var self__ = this;
var _30032__$1 = this;
return self__.meta30031;
});

cljs.core.async.t30030.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30033 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30033 = (function (map_LT_,f,ch,meta30031,_,fn1,meta30034){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30031 = meta30031;
this._ = _;
this.fn1 = fn1;
this.meta30034 = meta30034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30035,meta30034__$1){
var self__ = this;
var _30035__$1 = this;
return (new cljs.core.async.t30033(self__.map_LT_,self__.f,self__.ch,self__.meta30031,self__._,self__.fn1,meta30034__$1));
});})(___$1))
;

cljs.core.async.t30033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30035){
var self__ = this;
var _30035__$1 = this;
return self__.meta30034;
});})(___$1))
;

cljs.core.async.t30033.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30023_SHARP_){
return f1.call(null,(((p1__30023_SHARP_ == null))?null:self__.f.call(null,p1__30023_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30033.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30031","meta30031",-400354916,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30034","meta30034",-1882597624,null)], null);
});})(___$1))
;

cljs.core.async.t30033.cljs$lang$type = true;

cljs.core.async.t30033.cljs$lang$ctorStr = "cljs.core.async/t30033";

cljs.core.async.t30033.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t30033");
});})(___$1))
;

cljs.core.async.__GT_t30033 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30033(map_LT___$1,f__$1,ch__$1,meta30031__$1,___$2,fn1__$1,meta30034){
return (new cljs.core.async.t30033(map_LT___$1,f__$1,ch__$1,meta30031__$1,___$2,fn1__$1,meta30034));
});})(___$1))
;

}

return (new cljs.core.async.t30033(self__.map_LT_,self__.f,self__.ch,self__.meta30031,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18893__auto__ = ret;
if(cljs.core.truth_(and__18893__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18893__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30031","meta30031",-400354916,null)], null);
});

cljs.core.async.t30030.cljs$lang$type = true;

cljs.core.async.t30030.cljs$lang$ctorStr = "cljs.core.async/t30030";

cljs.core.async.t30030.cljs$lang$ctorPrWriter = (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t30030");
});

cljs.core.async.__GT_t30030 = (function cljs$core$async$map_LT__$___GT_t30030(map_LT___$1,f__$1,ch__$1,meta30031){
return (new cljs.core.async.t30030(map_LT___$1,f__$1,ch__$1,meta30031));
});

}

return (new cljs.core.async.t30030(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30039 = (function (map_GT_,f,ch,meta30040){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30040 = meta30040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30041,meta30040__$1){
var self__ = this;
var _30041__$1 = this;
return (new cljs.core.async.t30039(self__.map_GT_,self__.f,self__.ch,meta30040__$1));
});

cljs.core.async.t30039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30041){
var self__ = this;
var _30041__$1 = this;
return self__.meta30040;
});

cljs.core.async.t30039.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30040","meta30040",-1268261511,null)], null);
});

cljs.core.async.t30039.cljs$lang$type = true;

cljs.core.async.t30039.cljs$lang$ctorStr = "cljs.core.async/t30039";

cljs.core.async.t30039.cljs$lang$ctorPrWriter = (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t30039");
});

cljs.core.async.__GT_t30039 = (function cljs$core$async$map_GT__$___GT_t30039(map_GT___$1,f__$1,ch__$1,meta30040){
return (new cljs.core.async.t30039(map_GT___$1,f__$1,ch__$1,meta30040));
});

}

return (new cljs.core.async.t30039(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30045 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30045 = (function (filter_GT_,p,ch,meta30046){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30046 = meta30046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30047,meta30046__$1){
var self__ = this;
var _30047__$1 = this;
return (new cljs.core.async.t30045(self__.filter_GT_,self__.p,self__.ch,meta30046__$1));
});

cljs.core.async.t30045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30047){
var self__ = this;
var _30047__$1 = this;
return self__.meta30046;
});

cljs.core.async.t30045.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30045.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30046","meta30046",497722153,null)], null);
});

cljs.core.async.t30045.cljs$lang$type = true;

cljs.core.async.t30045.cljs$lang$ctorStr = "cljs.core.async/t30045";

cljs.core.async.t30045.cljs$lang$ctorPrWriter = (function (this__19484__auto__,writer__19485__auto__,opt__19486__auto__){
return cljs.core._write.call(null,writer__19485__auto__,"cljs.core.async/t30045");
});

cljs.core.async.__GT_t30045 = (function cljs$core$async$filter_GT__$___GT_t30045(filter_GT___$1,p__$1,ch__$1,meta30046){
return (new cljs.core.async.t30045(filter_GT___$1,p__$1,ch__$1,meta30046));
});

}

return (new cljs.core.async.t30045(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__30049 = arguments.length;
switch (G__30049) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22277__auto___30092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___30092,out){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___30092,out){
return (function (state_30070){
var state_val_30071 = (state_30070[(1)]);
if((state_val_30071 === (7))){
var inst_30066 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30072_30093 = state_30070__$1;
(statearr_30072_30093[(2)] = inst_30066);

(statearr_30072_30093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (1))){
var state_30070__$1 = state_30070;
var statearr_30073_30094 = state_30070__$1;
(statearr_30073_30094[(2)] = null);

(statearr_30073_30094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (4))){
var inst_30052 = (state_30070[(7)]);
var inst_30052__$1 = (state_30070[(2)]);
var inst_30053 = (inst_30052__$1 == null);
var state_30070__$1 = (function (){var statearr_30074 = state_30070;
(statearr_30074[(7)] = inst_30052__$1);

return statearr_30074;
})();
if(cljs.core.truth_(inst_30053)){
var statearr_30075_30095 = state_30070__$1;
(statearr_30075_30095[(1)] = (5));

} else {
var statearr_30076_30096 = state_30070__$1;
(statearr_30076_30096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (6))){
var inst_30052 = (state_30070[(7)]);
var inst_30057 = p.call(null,inst_30052);
var state_30070__$1 = state_30070;
if(cljs.core.truth_(inst_30057)){
var statearr_30077_30097 = state_30070__$1;
(statearr_30077_30097[(1)] = (8));

} else {
var statearr_30078_30098 = state_30070__$1;
(statearr_30078_30098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (3))){
var inst_30068 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30070__$1,inst_30068);
} else {
if((state_val_30071 === (2))){
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30070__$1,(4),ch);
} else {
if((state_val_30071 === (11))){
var inst_30060 = (state_30070[(2)]);
var state_30070__$1 = state_30070;
var statearr_30079_30099 = state_30070__$1;
(statearr_30079_30099[(2)] = inst_30060);

(statearr_30079_30099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (9))){
var state_30070__$1 = state_30070;
var statearr_30080_30100 = state_30070__$1;
(statearr_30080_30100[(2)] = null);

(statearr_30080_30100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (5))){
var inst_30055 = cljs.core.async.close_BANG_.call(null,out);
var state_30070__$1 = state_30070;
var statearr_30081_30101 = state_30070__$1;
(statearr_30081_30101[(2)] = inst_30055);

(statearr_30081_30101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (10))){
var inst_30063 = (state_30070[(2)]);
var state_30070__$1 = (function (){var statearr_30082 = state_30070;
(statearr_30082[(8)] = inst_30063);

return statearr_30082;
})();
var statearr_30083_30102 = state_30070__$1;
(statearr_30083_30102[(2)] = null);

(statearr_30083_30102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30071 === (8))){
var inst_30052 = (state_30070[(7)]);
var state_30070__$1 = state_30070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30070__$1,(11),out,inst_30052);
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
});})(c__22277__auto___30092,out))
;
return ((function (switch__22215__auto__,c__22277__auto___30092,out){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_30087 = [null,null,null,null,null,null,null,null,null];
(statearr_30087[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_30087[(1)] = (1));

return statearr_30087;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_30070){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_30070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e30088){if((e30088 instanceof Object)){
var ex__22219__auto__ = e30088;
var statearr_30089_30103 = state_30070;
(statearr_30089_30103[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30104 = state_30070;
state_30070 = G__30104;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_30070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_30070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___30092,out))
})();
var state__22279__auto__ = (function (){var statearr_30090 = f__22278__auto__.call(null);
(statearr_30090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___30092);

return statearr_30090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___30092,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__30106 = arguments.length;
switch (G__30106) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22277__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto__){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto__){
return (function (state_30273){
var state_val_30274 = (state_30273[(1)]);
if((state_val_30274 === (7))){
var inst_30269 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30275_30316 = state_30273__$1;
(statearr_30275_30316[(2)] = inst_30269);

(statearr_30275_30316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (20))){
var inst_30239 = (state_30273[(7)]);
var inst_30250 = (state_30273[(2)]);
var inst_30251 = cljs.core.next.call(null,inst_30239);
var inst_30225 = inst_30251;
var inst_30226 = null;
var inst_30227 = (0);
var inst_30228 = (0);
var state_30273__$1 = (function (){var statearr_30276 = state_30273;
(statearr_30276[(8)] = inst_30250);

(statearr_30276[(9)] = inst_30227);

(statearr_30276[(10)] = inst_30228);

(statearr_30276[(11)] = inst_30225);

(statearr_30276[(12)] = inst_30226);

return statearr_30276;
})();
var statearr_30277_30317 = state_30273__$1;
(statearr_30277_30317[(2)] = null);

(statearr_30277_30317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (1))){
var state_30273__$1 = state_30273;
var statearr_30278_30318 = state_30273__$1;
(statearr_30278_30318[(2)] = null);

(statearr_30278_30318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (4))){
var inst_30214 = (state_30273[(13)]);
var inst_30214__$1 = (state_30273[(2)]);
var inst_30215 = (inst_30214__$1 == null);
var state_30273__$1 = (function (){var statearr_30279 = state_30273;
(statearr_30279[(13)] = inst_30214__$1);

return statearr_30279;
})();
if(cljs.core.truth_(inst_30215)){
var statearr_30280_30319 = state_30273__$1;
(statearr_30280_30319[(1)] = (5));

} else {
var statearr_30281_30320 = state_30273__$1;
(statearr_30281_30320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (15))){
var state_30273__$1 = state_30273;
var statearr_30285_30321 = state_30273__$1;
(statearr_30285_30321[(2)] = null);

(statearr_30285_30321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (21))){
var state_30273__$1 = state_30273;
var statearr_30286_30322 = state_30273__$1;
(statearr_30286_30322[(2)] = null);

(statearr_30286_30322[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (13))){
var inst_30227 = (state_30273[(9)]);
var inst_30228 = (state_30273[(10)]);
var inst_30225 = (state_30273[(11)]);
var inst_30226 = (state_30273[(12)]);
var inst_30235 = (state_30273[(2)]);
var inst_30236 = (inst_30228 + (1));
var tmp30282 = inst_30227;
var tmp30283 = inst_30225;
var tmp30284 = inst_30226;
var inst_30225__$1 = tmp30283;
var inst_30226__$1 = tmp30284;
var inst_30227__$1 = tmp30282;
var inst_30228__$1 = inst_30236;
var state_30273__$1 = (function (){var statearr_30287 = state_30273;
(statearr_30287[(14)] = inst_30235);

(statearr_30287[(9)] = inst_30227__$1);

(statearr_30287[(10)] = inst_30228__$1);

(statearr_30287[(11)] = inst_30225__$1);

(statearr_30287[(12)] = inst_30226__$1);

return statearr_30287;
})();
var statearr_30288_30323 = state_30273__$1;
(statearr_30288_30323[(2)] = null);

(statearr_30288_30323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (22))){
var state_30273__$1 = state_30273;
var statearr_30289_30324 = state_30273__$1;
(statearr_30289_30324[(2)] = null);

(statearr_30289_30324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (6))){
var inst_30214 = (state_30273[(13)]);
var inst_30223 = f.call(null,inst_30214);
var inst_30224 = cljs.core.seq.call(null,inst_30223);
var inst_30225 = inst_30224;
var inst_30226 = null;
var inst_30227 = (0);
var inst_30228 = (0);
var state_30273__$1 = (function (){var statearr_30290 = state_30273;
(statearr_30290[(9)] = inst_30227);

(statearr_30290[(10)] = inst_30228);

(statearr_30290[(11)] = inst_30225);

(statearr_30290[(12)] = inst_30226);

return statearr_30290;
})();
var statearr_30291_30325 = state_30273__$1;
(statearr_30291_30325[(2)] = null);

(statearr_30291_30325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (17))){
var inst_30239 = (state_30273[(7)]);
var inst_30243 = cljs.core.chunk_first.call(null,inst_30239);
var inst_30244 = cljs.core.chunk_rest.call(null,inst_30239);
var inst_30245 = cljs.core.count.call(null,inst_30243);
var inst_30225 = inst_30244;
var inst_30226 = inst_30243;
var inst_30227 = inst_30245;
var inst_30228 = (0);
var state_30273__$1 = (function (){var statearr_30292 = state_30273;
(statearr_30292[(9)] = inst_30227);

(statearr_30292[(10)] = inst_30228);

(statearr_30292[(11)] = inst_30225);

(statearr_30292[(12)] = inst_30226);

return statearr_30292;
})();
var statearr_30293_30326 = state_30273__$1;
(statearr_30293_30326[(2)] = null);

(statearr_30293_30326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (3))){
var inst_30271 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30273__$1,inst_30271);
} else {
if((state_val_30274 === (12))){
var inst_30259 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30294_30327 = state_30273__$1;
(statearr_30294_30327[(2)] = inst_30259);

(statearr_30294_30327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (2))){
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30273__$1,(4),in$);
} else {
if((state_val_30274 === (23))){
var inst_30267 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30295_30328 = state_30273__$1;
(statearr_30295_30328[(2)] = inst_30267);

(statearr_30295_30328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (19))){
var inst_30254 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30296_30329 = state_30273__$1;
(statearr_30296_30329[(2)] = inst_30254);

(statearr_30296_30329[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (11))){
var inst_30239 = (state_30273[(7)]);
var inst_30225 = (state_30273[(11)]);
var inst_30239__$1 = cljs.core.seq.call(null,inst_30225);
var state_30273__$1 = (function (){var statearr_30297 = state_30273;
(statearr_30297[(7)] = inst_30239__$1);

return statearr_30297;
})();
if(inst_30239__$1){
var statearr_30298_30330 = state_30273__$1;
(statearr_30298_30330[(1)] = (14));

} else {
var statearr_30299_30331 = state_30273__$1;
(statearr_30299_30331[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (9))){
var inst_30261 = (state_30273[(2)]);
var inst_30262 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30273__$1 = (function (){var statearr_30300 = state_30273;
(statearr_30300[(15)] = inst_30261);

return statearr_30300;
})();
if(cljs.core.truth_(inst_30262)){
var statearr_30301_30332 = state_30273__$1;
(statearr_30301_30332[(1)] = (21));

} else {
var statearr_30302_30333 = state_30273__$1;
(statearr_30302_30333[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (5))){
var inst_30217 = cljs.core.async.close_BANG_.call(null,out);
var state_30273__$1 = state_30273;
var statearr_30303_30334 = state_30273__$1;
(statearr_30303_30334[(2)] = inst_30217);

(statearr_30303_30334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (14))){
var inst_30239 = (state_30273[(7)]);
var inst_30241 = cljs.core.chunked_seq_QMARK_.call(null,inst_30239);
var state_30273__$1 = state_30273;
if(inst_30241){
var statearr_30304_30335 = state_30273__$1;
(statearr_30304_30335[(1)] = (17));

} else {
var statearr_30305_30336 = state_30273__$1;
(statearr_30305_30336[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (16))){
var inst_30257 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30306_30337 = state_30273__$1;
(statearr_30306_30337[(2)] = inst_30257);

(statearr_30306_30337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (10))){
var inst_30228 = (state_30273[(10)]);
var inst_30226 = (state_30273[(12)]);
var inst_30233 = cljs.core._nth.call(null,inst_30226,inst_30228);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30273__$1,(13),out,inst_30233);
} else {
if((state_val_30274 === (18))){
var inst_30239 = (state_30273[(7)]);
var inst_30248 = cljs.core.first.call(null,inst_30239);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30273__$1,(20),out,inst_30248);
} else {
if((state_val_30274 === (8))){
var inst_30227 = (state_30273[(9)]);
var inst_30228 = (state_30273[(10)]);
var inst_30230 = (inst_30228 < inst_30227);
var inst_30231 = inst_30230;
var state_30273__$1 = state_30273;
if(cljs.core.truth_(inst_30231)){
var statearr_30307_30338 = state_30273__$1;
(statearr_30307_30338[(1)] = (10));

} else {
var statearr_30308_30339 = state_30273__$1;
(statearr_30308_30339[(1)] = (11));

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
});})(c__22277__auto__))
;
return ((function (switch__22215__auto__,c__22277__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22216__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22216__auto____0 = (function (){
var statearr_30312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30312[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22216__auto__);

(statearr_30312[(1)] = (1));

return statearr_30312;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22216__auto____1 = (function (state_30273){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_30273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e30313){if((e30313 instanceof Object)){
var ex__22219__auto__ = e30313;
var statearr_30314_30340 = state_30273;
(statearr_30314_30340[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30341 = state_30273;
state_30273 = G__30341;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22216__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22216__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22216__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22216__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto__))
})();
var state__22279__auto__ = (function (){var statearr_30315 = f__22278__auto__.call(null);
(statearr_30315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto__);

return statearr_30315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto__))
);

return c__22277__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__30343 = arguments.length;
switch (G__30343) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__30346 = arguments.length;
switch (G__30346) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__30349 = arguments.length;
switch (G__30349) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22277__auto___30399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___30399,out){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___30399,out){
return (function (state_30373){
var state_val_30374 = (state_30373[(1)]);
if((state_val_30374 === (7))){
var inst_30368 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30375_30400 = state_30373__$1;
(statearr_30375_30400[(2)] = inst_30368);

(statearr_30375_30400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (1))){
var inst_30350 = null;
var state_30373__$1 = (function (){var statearr_30376 = state_30373;
(statearr_30376[(7)] = inst_30350);

return statearr_30376;
})();
var statearr_30377_30401 = state_30373__$1;
(statearr_30377_30401[(2)] = null);

(statearr_30377_30401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (4))){
var inst_30353 = (state_30373[(8)]);
var inst_30353__$1 = (state_30373[(2)]);
var inst_30354 = (inst_30353__$1 == null);
var inst_30355 = cljs.core.not.call(null,inst_30354);
var state_30373__$1 = (function (){var statearr_30378 = state_30373;
(statearr_30378[(8)] = inst_30353__$1);

return statearr_30378;
})();
if(inst_30355){
var statearr_30379_30402 = state_30373__$1;
(statearr_30379_30402[(1)] = (5));

} else {
var statearr_30380_30403 = state_30373__$1;
(statearr_30380_30403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (6))){
var state_30373__$1 = state_30373;
var statearr_30381_30404 = state_30373__$1;
(statearr_30381_30404[(2)] = null);

(statearr_30381_30404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (3))){
var inst_30370 = (state_30373[(2)]);
var inst_30371 = cljs.core.async.close_BANG_.call(null,out);
var state_30373__$1 = (function (){var statearr_30382 = state_30373;
(statearr_30382[(9)] = inst_30370);

return statearr_30382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30373__$1,inst_30371);
} else {
if((state_val_30374 === (2))){
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30373__$1,(4),ch);
} else {
if((state_val_30374 === (11))){
var inst_30353 = (state_30373[(8)]);
var inst_30362 = (state_30373[(2)]);
var inst_30350 = inst_30353;
var state_30373__$1 = (function (){var statearr_30383 = state_30373;
(statearr_30383[(10)] = inst_30362);

(statearr_30383[(7)] = inst_30350);

return statearr_30383;
})();
var statearr_30384_30405 = state_30373__$1;
(statearr_30384_30405[(2)] = null);

(statearr_30384_30405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (9))){
var inst_30353 = (state_30373[(8)]);
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30373__$1,(11),out,inst_30353);
} else {
if((state_val_30374 === (5))){
var inst_30353 = (state_30373[(8)]);
var inst_30350 = (state_30373[(7)]);
var inst_30357 = cljs.core._EQ_.call(null,inst_30353,inst_30350);
var state_30373__$1 = state_30373;
if(inst_30357){
var statearr_30386_30406 = state_30373__$1;
(statearr_30386_30406[(1)] = (8));

} else {
var statearr_30387_30407 = state_30373__$1;
(statearr_30387_30407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (10))){
var inst_30365 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30388_30408 = state_30373__$1;
(statearr_30388_30408[(2)] = inst_30365);

(statearr_30388_30408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (8))){
var inst_30350 = (state_30373[(7)]);
var tmp30385 = inst_30350;
var inst_30350__$1 = tmp30385;
var state_30373__$1 = (function (){var statearr_30389 = state_30373;
(statearr_30389[(7)] = inst_30350__$1);

return statearr_30389;
})();
var statearr_30390_30409 = state_30373__$1;
(statearr_30390_30409[(2)] = null);

(statearr_30390_30409[(1)] = (2));


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
});})(c__22277__auto___30399,out))
;
return ((function (switch__22215__auto__,c__22277__auto___30399,out){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_30394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30394[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_30394[(1)] = (1));

return statearr_30394;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_30373){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_30373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e30395){if((e30395 instanceof Object)){
var ex__22219__auto__ = e30395;
var statearr_30396_30410 = state_30373;
(statearr_30396_30410[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30411 = state_30373;
state_30373 = G__30411;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_30373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_30373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___30399,out))
})();
var state__22279__auto__ = (function (){var statearr_30397 = f__22278__auto__.call(null);
(statearr_30397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___30399);

return statearr_30397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___30399,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__30413 = arguments.length;
switch (G__30413) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22277__auto___30482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___30482,out){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___30482,out){
return (function (state_30451){
var state_val_30452 = (state_30451[(1)]);
if((state_val_30452 === (7))){
var inst_30447 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30453_30483 = state_30451__$1;
(statearr_30453_30483[(2)] = inst_30447);

(statearr_30453_30483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (1))){
var inst_30414 = (new Array(n));
var inst_30415 = inst_30414;
var inst_30416 = (0);
var state_30451__$1 = (function (){var statearr_30454 = state_30451;
(statearr_30454[(7)] = inst_30416);

(statearr_30454[(8)] = inst_30415);

return statearr_30454;
})();
var statearr_30455_30484 = state_30451__$1;
(statearr_30455_30484[(2)] = null);

(statearr_30455_30484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (4))){
var inst_30419 = (state_30451[(9)]);
var inst_30419__$1 = (state_30451[(2)]);
var inst_30420 = (inst_30419__$1 == null);
var inst_30421 = cljs.core.not.call(null,inst_30420);
var state_30451__$1 = (function (){var statearr_30456 = state_30451;
(statearr_30456[(9)] = inst_30419__$1);

return statearr_30456;
})();
if(inst_30421){
var statearr_30457_30485 = state_30451__$1;
(statearr_30457_30485[(1)] = (5));

} else {
var statearr_30458_30486 = state_30451__$1;
(statearr_30458_30486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (15))){
var inst_30441 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30459_30487 = state_30451__$1;
(statearr_30459_30487[(2)] = inst_30441);

(statearr_30459_30487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (13))){
var state_30451__$1 = state_30451;
var statearr_30460_30488 = state_30451__$1;
(statearr_30460_30488[(2)] = null);

(statearr_30460_30488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (6))){
var inst_30416 = (state_30451[(7)]);
var inst_30437 = (inst_30416 > (0));
var state_30451__$1 = state_30451;
if(cljs.core.truth_(inst_30437)){
var statearr_30461_30489 = state_30451__$1;
(statearr_30461_30489[(1)] = (12));

} else {
var statearr_30462_30490 = state_30451__$1;
(statearr_30462_30490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (3))){
var inst_30449 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30451__$1,inst_30449);
} else {
if((state_val_30452 === (12))){
var inst_30415 = (state_30451[(8)]);
var inst_30439 = cljs.core.vec.call(null,inst_30415);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30451__$1,(15),out,inst_30439);
} else {
if((state_val_30452 === (2))){
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30451__$1,(4),ch);
} else {
if((state_val_30452 === (11))){
var inst_30431 = (state_30451[(2)]);
var inst_30432 = (new Array(n));
var inst_30415 = inst_30432;
var inst_30416 = (0);
var state_30451__$1 = (function (){var statearr_30463 = state_30451;
(statearr_30463[(7)] = inst_30416);

(statearr_30463[(10)] = inst_30431);

(statearr_30463[(8)] = inst_30415);

return statearr_30463;
})();
var statearr_30464_30491 = state_30451__$1;
(statearr_30464_30491[(2)] = null);

(statearr_30464_30491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (9))){
var inst_30415 = (state_30451[(8)]);
var inst_30429 = cljs.core.vec.call(null,inst_30415);
var state_30451__$1 = state_30451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30451__$1,(11),out,inst_30429);
} else {
if((state_val_30452 === (5))){
var inst_30416 = (state_30451[(7)]);
var inst_30424 = (state_30451[(11)]);
var inst_30419 = (state_30451[(9)]);
var inst_30415 = (state_30451[(8)]);
var inst_30423 = (inst_30415[inst_30416] = inst_30419);
var inst_30424__$1 = (inst_30416 + (1));
var inst_30425 = (inst_30424__$1 < n);
var state_30451__$1 = (function (){var statearr_30465 = state_30451;
(statearr_30465[(12)] = inst_30423);

(statearr_30465[(11)] = inst_30424__$1);

return statearr_30465;
})();
if(cljs.core.truth_(inst_30425)){
var statearr_30466_30492 = state_30451__$1;
(statearr_30466_30492[(1)] = (8));

} else {
var statearr_30467_30493 = state_30451__$1;
(statearr_30467_30493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (14))){
var inst_30444 = (state_30451[(2)]);
var inst_30445 = cljs.core.async.close_BANG_.call(null,out);
var state_30451__$1 = (function (){var statearr_30469 = state_30451;
(statearr_30469[(13)] = inst_30444);

return statearr_30469;
})();
var statearr_30470_30494 = state_30451__$1;
(statearr_30470_30494[(2)] = inst_30445);

(statearr_30470_30494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (10))){
var inst_30435 = (state_30451[(2)]);
var state_30451__$1 = state_30451;
var statearr_30471_30495 = state_30451__$1;
(statearr_30471_30495[(2)] = inst_30435);

(statearr_30471_30495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30452 === (8))){
var inst_30424 = (state_30451[(11)]);
var inst_30415 = (state_30451[(8)]);
var tmp30468 = inst_30415;
var inst_30415__$1 = tmp30468;
var inst_30416 = inst_30424;
var state_30451__$1 = (function (){var statearr_30472 = state_30451;
(statearr_30472[(7)] = inst_30416);

(statearr_30472[(8)] = inst_30415__$1);

return statearr_30472;
})();
var statearr_30473_30496 = state_30451__$1;
(statearr_30473_30496[(2)] = null);

(statearr_30473_30496[(1)] = (2));


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
});})(c__22277__auto___30482,out))
;
return ((function (switch__22215__auto__,c__22277__auto___30482,out){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_30477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30477[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_30477[(1)] = (1));

return statearr_30477;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_30451){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_30451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e30478){if((e30478 instanceof Object)){
var ex__22219__auto__ = e30478;
var statearr_30479_30497 = state_30451;
(statearr_30479_30497[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30498 = state_30451;
state_30451 = G__30498;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_30451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_30451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___30482,out))
})();
var state__22279__auto__ = (function (){var statearr_30480 = f__22278__auto__.call(null);
(statearr_30480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___30482);

return statearr_30480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___30482,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__30500 = arguments.length;
switch (G__30500) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22277__auto___30573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22277__auto___30573,out){
return (function (){
var f__22278__auto__ = (function (){var switch__22215__auto__ = ((function (c__22277__auto___30573,out){
return (function (state_30542){
var state_val_30543 = (state_30542[(1)]);
if((state_val_30543 === (7))){
var inst_30538 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
var statearr_30544_30574 = state_30542__$1;
(statearr_30544_30574[(2)] = inst_30538);

(statearr_30544_30574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (1))){
var inst_30501 = [];
var inst_30502 = inst_30501;
var inst_30503 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30542__$1 = (function (){var statearr_30545 = state_30542;
(statearr_30545[(7)] = inst_30503);

(statearr_30545[(8)] = inst_30502);

return statearr_30545;
})();
var statearr_30546_30575 = state_30542__$1;
(statearr_30546_30575[(2)] = null);

(statearr_30546_30575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (4))){
var inst_30506 = (state_30542[(9)]);
var inst_30506__$1 = (state_30542[(2)]);
var inst_30507 = (inst_30506__$1 == null);
var inst_30508 = cljs.core.not.call(null,inst_30507);
var state_30542__$1 = (function (){var statearr_30547 = state_30542;
(statearr_30547[(9)] = inst_30506__$1);

return statearr_30547;
})();
if(inst_30508){
var statearr_30548_30576 = state_30542__$1;
(statearr_30548_30576[(1)] = (5));

} else {
var statearr_30549_30577 = state_30542__$1;
(statearr_30549_30577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (15))){
var inst_30532 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
var statearr_30550_30578 = state_30542__$1;
(statearr_30550_30578[(2)] = inst_30532);

(statearr_30550_30578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (13))){
var state_30542__$1 = state_30542;
var statearr_30551_30579 = state_30542__$1;
(statearr_30551_30579[(2)] = null);

(statearr_30551_30579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (6))){
var inst_30502 = (state_30542[(8)]);
var inst_30527 = inst_30502.length;
var inst_30528 = (inst_30527 > (0));
var state_30542__$1 = state_30542;
if(cljs.core.truth_(inst_30528)){
var statearr_30552_30580 = state_30542__$1;
(statearr_30552_30580[(1)] = (12));

} else {
var statearr_30553_30581 = state_30542__$1;
(statearr_30553_30581[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (3))){
var inst_30540 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30542__$1,inst_30540);
} else {
if((state_val_30543 === (12))){
var inst_30502 = (state_30542[(8)]);
var inst_30530 = cljs.core.vec.call(null,inst_30502);
var state_30542__$1 = state_30542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30542__$1,(15),out,inst_30530);
} else {
if((state_val_30543 === (2))){
var state_30542__$1 = state_30542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30542__$1,(4),ch);
} else {
if((state_val_30543 === (11))){
var inst_30510 = (state_30542[(10)]);
var inst_30506 = (state_30542[(9)]);
var inst_30520 = (state_30542[(2)]);
var inst_30521 = [];
var inst_30522 = inst_30521.push(inst_30506);
var inst_30502 = inst_30521;
var inst_30503 = inst_30510;
var state_30542__$1 = (function (){var statearr_30554 = state_30542;
(statearr_30554[(11)] = inst_30522);

(statearr_30554[(7)] = inst_30503);

(statearr_30554[(12)] = inst_30520);

(statearr_30554[(8)] = inst_30502);

return statearr_30554;
})();
var statearr_30555_30582 = state_30542__$1;
(statearr_30555_30582[(2)] = null);

(statearr_30555_30582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (9))){
var inst_30502 = (state_30542[(8)]);
var inst_30518 = cljs.core.vec.call(null,inst_30502);
var state_30542__$1 = state_30542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30542__$1,(11),out,inst_30518);
} else {
if((state_val_30543 === (5))){
var inst_30503 = (state_30542[(7)]);
var inst_30510 = (state_30542[(10)]);
var inst_30506 = (state_30542[(9)]);
var inst_30510__$1 = f.call(null,inst_30506);
var inst_30511 = cljs.core._EQ_.call(null,inst_30510__$1,inst_30503);
var inst_30512 = cljs.core.keyword_identical_QMARK_.call(null,inst_30503,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30513 = (inst_30511) || (inst_30512);
var state_30542__$1 = (function (){var statearr_30556 = state_30542;
(statearr_30556[(10)] = inst_30510__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30513)){
var statearr_30557_30583 = state_30542__$1;
(statearr_30557_30583[(1)] = (8));

} else {
var statearr_30558_30584 = state_30542__$1;
(statearr_30558_30584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (14))){
var inst_30535 = (state_30542[(2)]);
var inst_30536 = cljs.core.async.close_BANG_.call(null,out);
var state_30542__$1 = (function (){var statearr_30560 = state_30542;
(statearr_30560[(13)] = inst_30535);

return statearr_30560;
})();
var statearr_30561_30585 = state_30542__$1;
(statearr_30561_30585[(2)] = inst_30536);

(statearr_30561_30585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (10))){
var inst_30525 = (state_30542[(2)]);
var state_30542__$1 = state_30542;
var statearr_30562_30586 = state_30542__$1;
(statearr_30562_30586[(2)] = inst_30525);

(statearr_30562_30586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30543 === (8))){
var inst_30502 = (state_30542[(8)]);
var inst_30510 = (state_30542[(10)]);
var inst_30506 = (state_30542[(9)]);
var inst_30515 = inst_30502.push(inst_30506);
var tmp30559 = inst_30502;
var inst_30502__$1 = tmp30559;
var inst_30503 = inst_30510;
var state_30542__$1 = (function (){var statearr_30563 = state_30542;
(statearr_30563[(7)] = inst_30503);

(statearr_30563[(8)] = inst_30502__$1);

(statearr_30563[(14)] = inst_30515);

return statearr_30563;
})();
var statearr_30564_30587 = state_30542__$1;
(statearr_30564_30587[(2)] = null);

(statearr_30564_30587[(1)] = (2));


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
});})(c__22277__auto___30573,out))
;
return ((function (switch__22215__auto__,c__22277__auto___30573,out){
return (function() {
var cljs$core$async$state_machine__22216__auto__ = null;
var cljs$core$async$state_machine__22216__auto____0 = (function (){
var statearr_30568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30568[(0)] = cljs$core$async$state_machine__22216__auto__);

(statearr_30568[(1)] = (1));

return statearr_30568;
});
var cljs$core$async$state_machine__22216__auto____1 = (function (state_30542){
while(true){
var ret_value__22217__auto__ = (function (){try{while(true){
var result__22218__auto__ = switch__22215__auto__.call(null,state_30542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22218__auto__;
}
break;
}
}catch (e30569){if((e30569 instanceof Object)){
var ex__22219__auto__ = e30569;
var statearr_30570_30588 = state_30542;
(statearr_30570_30588[(5)] = ex__22219__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30589 = state_30542;
state_30542 = G__30589;
continue;
} else {
return ret_value__22217__auto__;
}
break;
}
});
cljs$core$async$state_machine__22216__auto__ = function(state_30542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22216__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22216__auto____1.call(this,state_30542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22216__auto____0;
cljs$core$async$state_machine__22216__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22216__auto____1;
return cljs$core$async$state_machine__22216__auto__;
})()
;})(switch__22215__auto__,c__22277__auto___30573,out))
})();
var state__22279__auto__ = (function (){var statearr_30571 = f__22278__auto__.call(null);
(statearr_30571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22277__auto___30573);

return statearr_30571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22279__auto__);
});})(c__22277__auto___30573,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map