// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20500 = [];
var len__17829__auto___20506 = arguments.length;
var i__17830__auto___20507 = (0);
while(true){
if((i__17830__auto___20507 < len__17829__auto___20506)){
args20500.push((arguments[i__17830__auto___20507]));

var G__20508 = (i__17830__auto___20507 + (1));
i__17830__auto___20507 = G__20508;
continue;
} else {
}
break;
}

var G__20502 = args20500.length;
switch (G__20502) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20500.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20503 = (function (f,blockable,meta20504){
this.f = f;
this.blockable = blockable;
this.meta20504 = meta20504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20505,meta20504__$1){
var self__ = this;
var _20505__$1 = this;
return (new cljs.core.async.t_cljs$core$async20503(self__.f,self__.blockable,meta20504__$1));
});

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20505){
var self__ = this;
var _20505__$1 = this;
return self__.meta20504;
});

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20504","meta20504",871466026,null)], null);
});

cljs.core.async.t_cljs$core$async20503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20503";

cljs.core.async.t_cljs$core$async20503.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20503");
});

cljs.core.async.__GT_t_cljs$core$async20503 = (function cljs$core$async$__GT_t_cljs$core$async20503(f__$1,blockable__$1,meta20504){
return (new cljs.core.async.t_cljs$core$async20503(f__$1,blockable__$1,meta20504));
});

}

return (new cljs.core.async.t_cljs$core$async20503(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20512 = [];
var len__17829__auto___20515 = arguments.length;
var i__17830__auto___20516 = (0);
while(true){
if((i__17830__auto___20516 < len__17829__auto___20515)){
args20512.push((arguments[i__17830__auto___20516]));

var G__20517 = (i__17830__auto___20516 + (1));
i__17830__auto___20516 = G__20517;
continue;
} else {
}
break;
}

var G__20514 = args20512.length;
switch (G__20514) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20512.length)].join('')));

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
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20519 = [];
var len__17829__auto___20522 = arguments.length;
var i__17830__auto___20523 = (0);
while(true){
if((i__17830__auto___20523 < len__17829__auto___20522)){
args20519.push((arguments[i__17830__auto___20523]));

var G__20524 = (i__17830__auto___20523 + (1));
i__17830__auto___20523 = G__20524;
continue;
} else {
}
break;
}

var G__20521 = args20519.length;
switch (G__20521) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20519.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20526 = [];
var len__17829__auto___20529 = arguments.length;
var i__17830__auto___20530 = (0);
while(true){
if((i__17830__auto___20530 < len__17829__auto___20529)){
args20526.push((arguments[i__17830__auto___20530]));

var G__20531 = (i__17830__auto___20530 + (1));
i__17830__auto___20530 = G__20531;
continue;
} else {
}
break;
}

var G__20528 = args20526.length;
switch (G__20528) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20526.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20533 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20533);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20533,ret){
return (function (){
return fn1.call(null,val_20533);
});})(val_20533,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20534 = [];
var len__17829__auto___20537 = arguments.length;
var i__17830__auto___20538 = (0);
while(true){
if((i__17830__auto___20538 < len__17829__auto___20537)){
args20534.push((arguments[i__17830__auto___20538]));

var G__20539 = (i__17830__auto___20538 + (1));
i__17830__auto___20538 = G__20539;
continue;
} else {
}
break;
}

var G__20536 = args20534.length;
switch (G__20536) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20534.length)].join('')));

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
var n__17674__auto___20541 = n;
var x_20542 = (0);
while(true){
if((x_20542 < n__17674__auto___20541)){
(a[x_20542] = (0));

var G__20543 = (x_20542 + (1));
x_20542 = G__20543;
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

var G__20544 = (i + (1));
i = G__20544;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20548 = (function (alt_flag,flag,meta20549){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20549 = meta20549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20550,meta20549__$1){
var self__ = this;
var _20550__$1 = this;
return (new cljs.core.async.t_cljs$core$async20548(self__.alt_flag,self__.flag,meta20549__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20550){
var self__ = this;
var _20550__$1 = this;
return self__.meta20549;
});})(flag))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20548.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20549","meta20549",2106418719,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20548";

cljs.core.async.t_cljs$core$async20548.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20548");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20548 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20548(alt_flag__$1,flag__$1,meta20549){
return (new cljs.core.async.t_cljs$core$async20548(alt_flag__$1,flag__$1,meta20549));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20548(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20554 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20554 = (function (alt_handler,flag,cb,meta20555){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20555 = meta20555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20556,meta20555__$1){
var self__ = this;
var _20556__$1 = this;
return (new cljs.core.async.t_cljs$core$async20554(self__.alt_handler,self__.flag,self__.cb,meta20555__$1));
});

cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20556){
var self__ = this;
var _20556__$1 = this;
return self__.meta20555;
});

cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20555","meta20555",1465869758,null)], null);
});

cljs.core.async.t_cljs$core$async20554.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20554";

cljs.core.async.t_cljs$core$async20554.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20554");
});

cljs.core.async.__GT_t_cljs$core$async20554 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20554(alt_handler__$1,flag__$1,cb__$1,meta20555){
return (new cljs.core.async.t_cljs$core$async20554(alt_handler__$1,flag__$1,cb__$1,meta20555));
});

}

return (new cljs.core.async.t_cljs$core$async20554(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20557_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20557_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20558_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20558_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20559 = (i + (1));
i = G__20559;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___20565 = arguments.length;
var i__17830__auto___20566 = (0);
while(true){
if((i__17830__auto___20566 < len__17829__auto___20565)){
args__17836__auto__.push((arguments[i__17830__auto___20566]));

var G__20567 = (i__17830__auto___20566 + (1));
i__17830__auto___20566 = G__20567;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20562){
var map__20563 = p__20562;
var map__20563__$1 = ((((!((map__20563 == null)))?((((map__20563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20563):map__20563);
var opts = map__20563__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20560){
var G__20561 = cljs.core.first.call(null,seq20560);
var seq20560__$1 = cljs.core.next.call(null,seq20560);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20561,seq20560__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20568 = [];
var len__17829__auto___20618 = arguments.length;
var i__17830__auto___20619 = (0);
while(true){
if((i__17830__auto___20619 < len__17829__auto___20618)){
args20568.push((arguments[i__17830__auto___20619]));

var G__20620 = (i__17830__auto___20619 + (1));
i__17830__auto___20619 = G__20620;
continue;
} else {
}
break;
}

var G__20570 = args20568.length;
switch (G__20570) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20568.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20455__auto___20622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___20622){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___20622){
return (function (state_20594){
var state_val_20595 = (state_20594[(1)]);
if((state_val_20595 === (7))){
var inst_20590 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20596_20623 = state_20594__$1;
(statearr_20596_20623[(2)] = inst_20590);

(statearr_20596_20623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (1))){
var state_20594__$1 = state_20594;
var statearr_20597_20624 = state_20594__$1;
(statearr_20597_20624[(2)] = null);

(statearr_20597_20624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (4))){
var inst_20573 = (state_20594[(7)]);
var inst_20573__$1 = (state_20594[(2)]);
var inst_20574 = (inst_20573__$1 == null);
var state_20594__$1 = (function (){var statearr_20598 = state_20594;
(statearr_20598[(7)] = inst_20573__$1);

return statearr_20598;
})();
if(cljs.core.truth_(inst_20574)){
var statearr_20599_20625 = state_20594__$1;
(statearr_20599_20625[(1)] = (5));

} else {
var statearr_20600_20626 = state_20594__$1;
(statearr_20600_20626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (13))){
var state_20594__$1 = state_20594;
var statearr_20601_20627 = state_20594__$1;
(statearr_20601_20627[(2)] = null);

(statearr_20601_20627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (6))){
var inst_20573 = (state_20594[(7)]);
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20594__$1,(11),to,inst_20573);
} else {
if((state_val_20595 === (3))){
var inst_20592 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20594__$1,inst_20592);
} else {
if((state_val_20595 === (12))){
var state_20594__$1 = state_20594;
var statearr_20602_20628 = state_20594__$1;
(statearr_20602_20628[(2)] = null);

(statearr_20602_20628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (2))){
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20594__$1,(4),from);
} else {
if((state_val_20595 === (11))){
var inst_20583 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
if(cljs.core.truth_(inst_20583)){
var statearr_20603_20629 = state_20594__$1;
(statearr_20603_20629[(1)] = (12));

} else {
var statearr_20604_20630 = state_20594__$1;
(statearr_20604_20630[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (9))){
var state_20594__$1 = state_20594;
var statearr_20605_20631 = state_20594__$1;
(statearr_20605_20631[(2)] = null);

(statearr_20605_20631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (5))){
var state_20594__$1 = state_20594;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20606_20632 = state_20594__$1;
(statearr_20606_20632[(1)] = (8));

} else {
var statearr_20607_20633 = state_20594__$1;
(statearr_20607_20633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (14))){
var inst_20588 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20608_20634 = state_20594__$1;
(statearr_20608_20634[(2)] = inst_20588);

(statearr_20608_20634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (10))){
var inst_20580 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20609_20635 = state_20594__$1;
(statearr_20609_20635[(2)] = inst_20580);

(statearr_20609_20635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (8))){
var inst_20577 = cljs.core.async.close_BANG_.call(null,to);
var state_20594__$1 = state_20594;
var statearr_20610_20636 = state_20594__$1;
(statearr_20610_20636[(2)] = inst_20577);

(statearr_20610_20636[(1)] = (10));


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
});})(c__20455__auto___20622))
;
return ((function (switch__20343__auto__,c__20455__auto___20622){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_20614 = [null,null,null,null,null,null,null,null];
(statearr_20614[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_20614[(1)] = (1));

return statearr_20614;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_20594){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_20594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e20615){if((e20615 instanceof Object)){
var ex__20347__auto__ = e20615;
var statearr_20616_20637 = state_20594;
(statearr_20616_20637[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20638 = state_20594;
state_20594 = G__20638;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_20594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_20594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___20622))
})();
var state__20457__auto__ = (function (){var statearr_20617 = f__20456__auto__.call(null);
(statearr_20617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___20622);

return statearr_20617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___20622))
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
return (function (p__20822){
var vec__20823 = p__20822;
var v = cljs.core.nth.call(null,vec__20823,(0),null);
var p = cljs.core.nth.call(null,vec__20823,(1),null);
var job = vec__20823;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20455__auto___21005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___21005,res,vec__20823,v,p,job,jobs,results){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___21005,res,vec__20823,v,p,job,jobs,results){
return (function (state_20828){
var state_val_20829 = (state_20828[(1)]);
if((state_val_20829 === (1))){
var state_20828__$1 = state_20828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20828__$1,(2),res,v);
} else {
if((state_val_20829 === (2))){
var inst_20825 = (state_20828[(2)]);
var inst_20826 = cljs.core.async.close_BANG_.call(null,res);
var state_20828__$1 = (function (){var statearr_20830 = state_20828;
(statearr_20830[(7)] = inst_20825);

return statearr_20830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20828__$1,inst_20826);
} else {
return null;
}
}
});})(c__20455__auto___21005,res,vec__20823,v,p,job,jobs,results))
;
return ((function (switch__20343__auto__,c__20455__auto___21005,res,vec__20823,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0 = (function (){
var statearr_20834 = [null,null,null,null,null,null,null,null];
(statearr_20834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__);

(statearr_20834[(1)] = (1));

return statearr_20834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1 = (function (state_20828){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_20828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e20835){if((e20835 instanceof Object)){
var ex__20347__auto__ = e20835;
var statearr_20836_21006 = state_20828;
(statearr_20836_21006[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21007 = state_20828;
state_20828 = G__21007;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = function(state_20828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1.call(this,state_20828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___21005,res,vec__20823,v,p,job,jobs,results))
})();
var state__20457__auto__ = (function (){var statearr_20837 = f__20456__auto__.call(null);
(statearr_20837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___21005);

return statearr_20837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___21005,res,vec__20823,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20838){
var vec__20839 = p__20838;
var v = cljs.core.nth.call(null,vec__20839,(0),null);
var p = cljs.core.nth.call(null,vec__20839,(1),null);
var job = vec__20839;
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
var n__17674__auto___21008 = n;
var __21009 = (0);
while(true){
if((__21009 < n__17674__auto___21008)){
var G__20840_21010 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20840_21010) {
case "compute":
var c__20455__auto___21012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21009,c__20455__auto___21012,G__20840_21010,n__17674__auto___21008,jobs,results,process,async){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (__21009,c__20455__auto___21012,G__20840_21010,n__17674__auto___21008,jobs,results,process,async){
return (function (state_20853){
var state_val_20854 = (state_20853[(1)]);
if((state_val_20854 === (1))){
var state_20853__$1 = state_20853;
var statearr_20855_21013 = state_20853__$1;
(statearr_20855_21013[(2)] = null);

(statearr_20855_21013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20854 === (2))){
var state_20853__$1 = state_20853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20853__$1,(4),jobs);
} else {
if((state_val_20854 === (3))){
var inst_20851 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20853__$1,inst_20851);
} else {
if((state_val_20854 === (4))){
var inst_20843 = (state_20853[(2)]);
var inst_20844 = process.call(null,inst_20843);
var state_20853__$1 = state_20853;
if(cljs.core.truth_(inst_20844)){
var statearr_20856_21014 = state_20853__$1;
(statearr_20856_21014[(1)] = (5));

} else {
var statearr_20857_21015 = state_20853__$1;
(statearr_20857_21015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20854 === (5))){
var state_20853__$1 = state_20853;
var statearr_20858_21016 = state_20853__$1;
(statearr_20858_21016[(2)] = null);

(statearr_20858_21016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20854 === (6))){
var state_20853__$1 = state_20853;
var statearr_20859_21017 = state_20853__$1;
(statearr_20859_21017[(2)] = null);

(statearr_20859_21017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20854 === (7))){
var inst_20849 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
var statearr_20860_21018 = state_20853__$1;
(statearr_20860_21018[(2)] = inst_20849);

(statearr_20860_21018[(1)] = (3));


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
});})(__21009,c__20455__auto___21012,G__20840_21010,n__17674__auto___21008,jobs,results,process,async))
;
return ((function (__21009,switch__20343__auto__,c__20455__auto___21012,G__20840_21010,n__17674__auto___21008,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0 = (function (){
var statearr_20864 = [null,null,null,null,null,null,null];
(statearr_20864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__);

(statearr_20864[(1)] = (1));

return statearr_20864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1 = (function (state_20853){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_20853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e20865){if((e20865 instanceof Object)){
var ex__20347__auto__ = e20865;
var statearr_20866_21019 = state_20853;
(statearr_20866_21019[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21020 = state_20853;
state_20853 = G__21020;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = function(state_20853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1.call(this,state_20853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__;
})()
;})(__21009,switch__20343__auto__,c__20455__auto___21012,G__20840_21010,n__17674__auto___21008,jobs,results,process,async))
})();
var state__20457__auto__ = (function (){var statearr_20867 = f__20456__auto__.call(null);
(statearr_20867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___21012);

return statearr_20867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(__21009,c__20455__auto___21012,G__20840_21010,n__17674__auto___21008,jobs,results,process,async))
);


break;
case "async":
var c__20455__auto___21021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21009,c__20455__auto___21021,G__20840_21010,n__17674__auto___21008,jobs,results,process,async){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (__21009,c__20455__auto___21021,G__20840_21010,n__17674__auto___21008,jobs,results,process,async){
return (function (state_20880){
var state_val_20881 = (state_20880[(1)]);
if((state_val_20881 === (1))){
var state_20880__$1 = state_20880;
var statearr_20882_21022 = state_20880__$1;
(statearr_20882_21022[(2)] = null);

(statearr_20882_21022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (2))){
var state_20880__$1 = state_20880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20880__$1,(4),jobs);
} else {
if((state_val_20881 === (3))){
var inst_20878 = (state_20880[(2)]);
var state_20880__$1 = state_20880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20880__$1,inst_20878);
} else {
if((state_val_20881 === (4))){
var inst_20870 = (state_20880[(2)]);
var inst_20871 = async.call(null,inst_20870);
var state_20880__$1 = state_20880;
if(cljs.core.truth_(inst_20871)){
var statearr_20883_21023 = state_20880__$1;
(statearr_20883_21023[(1)] = (5));

} else {
var statearr_20884_21024 = state_20880__$1;
(statearr_20884_21024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (5))){
var state_20880__$1 = state_20880;
var statearr_20885_21025 = state_20880__$1;
(statearr_20885_21025[(2)] = null);

(statearr_20885_21025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (6))){
var state_20880__$1 = state_20880;
var statearr_20886_21026 = state_20880__$1;
(statearr_20886_21026[(2)] = null);

(statearr_20886_21026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20881 === (7))){
var inst_20876 = (state_20880[(2)]);
var state_20880__$1 = state_20880;
var statearr_20887_21027 = state_20880__$1;
(statearr_20887_21027[(2)] = inst_20876);

(statearr_20887_21027[(1)] = (3));


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
});})(__21009,c__20455__auto___21021,G__20840_21010,n__17674__auto___21008,jobs,results,process,async))
;
return ((function (__21009,switch__20343__auto__,c__20455__auto___21021,G__20840_21010,n__17674__auto___21008,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0 = (function (){
var statearr_20891 = [null,null,null,null,null,null,null];
(statearr_20891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__);

(statearr_20891[(1)] = (1));

return statearr_20891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1 = (function (state_20880){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_20880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e20892){if((e20892 instanceof Object)){
var ex__20347__auto__ = e20892;
var statearr_20893_21028 = state_20880;
(statearr_20893_21028[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21029 = state_20880;
state_20880 = G__21029;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = function(state_20880){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1.call(this,state_20880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__;
})()
;})(__21009,switch__20343__auto__,c__20455__auto___21021,G__20840_21010,n__17674__auto___21008,jobs,results,process,async))
})();
var state__20457__auto__ = (function (){var statearr_20894 = f__20456__auto__.call(null);
(statearr_20894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___21021);

return statearr_20894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(__21009,c__20455__auto___21021,G__20840_21010,n__17674__auto___21008,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21030 = (__21009 + (1));
__21009 = G__21030;
continue;
} else {
}
break;
}

var c__20455__auto___21031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___21031,jobs,results,process,async){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___21031,jobs,results,process,async){
return (function (state_20916){
var state_val_20917 = (state_20916[(1)]);
if((state_val_20917 === (1))){
var state_20916__$1 = state_20916;
var statearr_20918_21032 = state_20916__$1;
(statearr_20918_21032[(2)] = null);

(statearr_20918_21032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (2))){
var state_20916__$1 = state_20916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20916__$1,(4),from);
} else {
if((state_val_20917 === (3))){
var inst_20914 = (state_20916[(2)]);
var state_20916__$1 = state_20916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20916__$1,inst_20914);
} else {
if((state_val_20917 === (4))){
var inst_20897 = (state_20916[(7)]);
var inst_20897__$1 = (state_20916[(2)]);
var inst_20898 = (inst_20897__$1 == null);
var state_20916__$1 = (function (){var statearr_20919 = state_20916;
(statearr_20919[(7)] = inst_20897__$1);

return statearr_20919;
})();
if(cljs.core.truth_(inst_20898)){
var statearr_20920_21033 = state_20916__$1;
(statearr_20920_21033[(1)] = (5));

} else {
var statearr_20921_21034 = state_20916__$1;
(statearr_20921_21034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (5))){
var inst_20900 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20916__$1 = state_20916;
var statearr_20922_21035 = state_20916__$1;
(statearr_20922_21035[(2)] = inst_20900);

(statearr_20922_21035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (6))){
var inst_20897 = (state_20916[(7)]);
var inst_20902 = (state_20916[(8)]);
var inst_20902__$1 = cljs.core.async.chan.call(null,(1));
var inst_20903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20904 = [inst_20897,inst_20902__$1];
var inst_20905 = (new cljs.core.PersistentVector(null,2,(5),inst_20903,inst_20904,null));
var state_20916__$1 = (function (){var statearr_20923 = state_20916;
(statearr_20923[(8)] = inst_20902__$1);

return statearr_20923;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20916__$1,(8),jobs,inst_20905);
} else {
if((state_val_20917 === (7))){
var inst_20912 = (state_20916[(2)]);
var state_20916__$1 = state_20916;
var statearr_20924_21036 = state_20916__$1;
(statearr_20924_21036[(2)] = inst_20912);

(statearr_20924_21036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20917 === (8))){
var inst_20902 = (state_20916[(8)]);
var inst_20907 = (state_20916[(2)]);
var state_20916__$1 = (function (){var statearr_20925 = state_20916;
(statearr_20925[(9)] = inst_20907);

return statearr_20925;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20916__$1,(9),results,inst_20902);
} else {
if((state_val_20917 === (9))){
var inst_20909 = (state_20916[(2)]);
var state_20916__$1 = (function (){var statearr_20926 = state_20916;
(statearr_20926[(10)] = inst_20909);

return statearr_20926;
})();
var statearr_20927_21037 = state_20916__$1;
(statearr_20927_21037[(2)] = null);

(statearr_20927_21037[(1)] = (2));


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
});})(c__20455__auto___21031,jobs,results,process,async))
;
return ((function (switch__20343__auto__,c__20455__auto___21031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0 = (function (){
var statearr_20931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20931[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__);

(statearr_20931[(1)] = (1));

return statearr_20931;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1 = (function (state_20916){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_20916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e20932){if((e20932 instanceof Object)){
var ex__20347__auto__ = e20932;
var statearr_20933_21038 = state_20916;
(statearr_20933_21038[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21039 = state_20916;
state_20916 = G__21039;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = function(state_20916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1.call(this,state_20916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___21031,jobs,results,process,async))
})();
var state__20457__auto__ = (function (){var statearr_20934 = f__20456__auto__.call(null);
(statearr_20934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___21031);

return statearr_20934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___21031,jobs,results,process,async))
);


var c__20455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto__,jobs,results,process,async){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto__,jobs,results,process,async){
return (function (state_20972){
var state_val_20973 = (state_20972[(1)]);
if((state_val_20973 === (7))){
var inst_20968 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20974_21040 = state_20972__$1;
(statearr_20974_21040[(2)] = inst_20968);

(statearr_20974_21040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (20))){
var state_20972__$1 = state_20972;
var statearr_20975_21041 = state_20972__$1;
(statearr_20975_21041[(2)] = null);

(statearr_20975_21041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (1))){
var state_20972__$1 = state_20972;
var statearr_20976_21042 = state_20972__$1;
(statearr_20976_21042[(2)] = null);

(statearr_20976_21042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (4))){
var inst_20937 = (state_20972[(7)]);
var inst_20937__$1 = (state_20972[(2)]);
var inst_20938 = (inst_20937__$1 == null);
var state_20972__$1 = (function (){var statearr_20977 = state_20972;
(statearr_20977[(7)] = inst_20937__$1);

return statearr_20977;
})();
if(cljs.core.truth_(inst_20938)){
var statearr_20978_21043 = state_20972__$1;
(statearr_20978_21043[(1)] = (5));

} else {
var statearr_20979_21044 = state_20972__$1;
(statearr_20979_21044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (15))){
var inst_20950 = (state_20972[(8)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20972__$1,(18),to,inst_20950);
} else {
if((state_val_20973 === (21))){
var inst_20963 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20980_21045 = state_20972__$1;
(statearr_20980_21045[(2)] = inst_20963);

(statearr_20980_21045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (13))){
var inst_20965 = (state_20972[(2)]);
var state_20972__$1 = (function (){var statearr_20981 = state_20972;
(statearr_20981[(9)] = inst_20965);

return statearr_20981;
})();
var statearr_20982_21046 = state_20972__$1;
(statearr_20982_21046[(2)] = null);

(statearr_20982_21046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (6))){
var inst_20937 = (state_20972[(7)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20972__$1,(11),inst_20937);
} else {
if((state_val_20973 === (17))){
var inst_20958 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
if(cljs.core.truth_(inst_20958)){
var statearr_20983_21047 = state_20972__$1;
(statearr_20983_21047[(1)] = (19));

} else {
var statearr_20984_21048 = state_20972__$1;
(statearr_20984_21048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (3))){
var inst_20970 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20972__$1,inst_20970);
} else {
if((state_val_20973 === (12))){
var inst_20947 = (state_20972[(10)]);
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20972__$1,(14),inst_20947);
} else {
if((state_val_20973 === (2))){
var state_20972__$1 = state_20972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20972__$1,(4),results);
} else {
if((state_val_20973 === (19))){
var state_20972__$1 = state_20972;
var statearr_20985_21049 = state_20972__$1;
(statearr_20985_21049[(2)] = null);

(statearr_20985_21049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (11))){
var inst_20947 = (state_20972[(2)]);
var state_20972__$1 = (function (){var statearr_20986 = state_20972;
(statearr_20986[(10)] = inst_20947);

return statearr_20986;
})();
var statearr_20987_21050 = state_20972__$1;
(statearr_20987_21050[(2)] = null);

(statearr_20987_21050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (9))){
var state_20972__$1 = state_20972;
var statearr_20988_21051 = state_20972__$1;
(statearr_20988_21051[(2)] = null);

(statearr_20988_21051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (5))){
var state_20972__$1 = state_20972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20989_21052 = state_20972__$1;
(statearr_20989_21052[(1)] = (8));

} else {
var statearr_20990_21053 = state_20972__$1;
(statearr_20990_21053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (14))){
var inst_20952 = (state_20972[(11)]);
var inst_20950 = (state_20972[(8)]);
var inst_20950__$1 = (state_20972[(2)]);
var inst_20951 = (inst_20950__$1 == null);
var inst_20952__$1 = cljs.core.not.call(null,inst_20951);
var state_20972__$1 = (function (){var statearr_20991 = state_20972;
(statearr_20991[(11)] = inst_20952__$1);

(statearr_20991[(8)] = inst_20950__$1);

return statearr_20991;
})();
if(inst_20952__$1){
var statearr_20992_21054 = state_20972__$1;
(statearr_20992_21054[(1)] = (15));

} else {
var statearr_20993_21055 = state_20972__$1;
(statearr_20993_21055[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (16))){
var inst_20952 = (state_20972[(11)]);
var state_20972__$1 = state_20972;
var statearr_20994_21056 = state_20972__$1;
(statearr_20994_21056[(2)] = inst_20952);

(statearr_20994_21056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (10))){
var inst_20944 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20995_21057 = state_20972__$1;
(statearr_20995_21057[(2)] = inst_20944);

(statearr_20995_21057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (18))){
var inst_20955 = (state_20972[(2)]);
var state_20972__$1 = state_20972;
var statearr_20996_21058 = state_20972__$1;
(statearr_20996_21058[(2)] = inst_20955);

(statearr_20996_21058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20973 === (8))){
var inst_20941 = cljs.core.async.close_BANG_.call(null,to);
var state_20972__$1 = state_20972;
var statearr_20997_21059 = state_20972__$1;
(statearr_20997_21059[(2)] = inst_20941);

(statearr_20997_21059[(1)] = (10));


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
});})(c__20455__auto__,jobs,results,process,async))
;
return ((function (switch__20343__auto__,c__20455__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0 = (function (){
var statearr_21001 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__);

(statearr_21001[(1)] = (1));

return statearr_21001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1 = (function (state_20972){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_20972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e21002){if((e21002 instanceof Object)){
var ex__20347__auto__ = e21002;
var statearr_21003_21060 = state_20972;
(statearr_21003_21060[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21061 = state_20972;
state_20972 = G__21061;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__ = function(state_20972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1.call(this,state_20972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20344__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto__,jobs,results,process,async))
})();
var state__20457__auto__ = (function (){var statearr_21004 = f__20456__auto__.call(null);
(statearr_21004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto__);

return statearr_21004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto__,jobs,results,process,async))
);

return c__20455__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21062 = [];
var len__17829__auto___21065 = arguments.length;
var i__17830__auto___21066 = (0);
while(true){
if((i__17830__auto___21066 < len__17829__auto___21065)){
args21062.push((arguments[i__17830__auto___21066]));

var G__21067 = (i__17830__auto___21066 + (1));
i__17830__auto___21066 = G__21067;
continue;
} else {
}
break;
}

var G__21064 = args21062.length;
switch (G__21064) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21062.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21069 = [];
var len__17829__auto___21072 = arguments.length;
var i__17830__auto___21073 = (0);
while(true){
if((i__17830__auto___21073 < len__17829__auto___21072)){
args21069.push((arguments[i__17830__auto___21073]));

var G__21074 = (i__17830__auto___21073 + (1));
i__17830__auto___21073 = G__21074;
continue;
} else {
}
break;
}

var G__21071 = args21069.length;
switch (G__21071) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21069.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21076 = [];
var len__17829__auto___21129 = arguments.length;
var i__17830__auto___21130 = (0);
while(true){
if((i__17830__auto___21130 < len__17829__auto___21129)){
args21076.push((arguments[i__17830__auto___21130]));

var G__21131 = (i__17830__auto___21130 + (1));
i__17830__auto___21130 = G__21131;
continue;
} else {
}
break;
}

var G__21078 = args21076.length;
switch (G__21078) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21076.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20455__auto___21133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___21133,tc,fc){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___21133,tc,fc){
return (function (state_21104){
var state_val_21105 = (state_21104[(1)]);
if((state_val_21105 === (7))){
var inst_21100 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21106_21134 = state_21104__$1;
(statearr_21106_21134[(2)] = inst_21100);

(statearr_21106_21134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (1))){
var state_21104__$1 = state_21104;
var statearr_21107_21135 = state_21104__$1;
(statearr_21107_21135[(2)] = null);

(statearr_21107_21135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (4))){
var inst_21081 = (state_21104[(7)]);
var inst_21081__$1 = (state_21104[(2)]);
var inst_21082 = (inst_21081__$1 == null);
var state_21104__$1 = (function (){var statearr_21108 = state_21104;
(statearr_21108[(7)] = inst_21081__$1);

return statearr_21108;
})();
if(cljs.core.truth_(inst_21082)){
var statearr_21109_21136 = state_21104__$1;
(statearr_21109_21136[(1)] = (5));

} else {
var statearr_21110_21137 = state_21104__$1;
(statearr_21110_21137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (13))){
var state_21104__$1 = state_21104;
var statearr_21111_21138 = state_21104__$1;
(statearr_21111_21138[(2)] = null);

(statearr_21111_21138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (6))){
var inst_21081 = (state_21104[(7)]);
var inst_21087 = p.call(null,inst_21081);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21087)){
var statearr_21112_21139 = state_21104__$1;
(statearr_21112_21139[(1)] = (9));

} else {
var statearr_21113_21140 = state_21104__$1;
(statearr_21113_21140[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (3))){
var inst_21102 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21104__$1,inst_21102);
} else {
if((state_val_21105 === (12))){
var state_21104__$1 = state_21104;
var statearr_21114_21141 = state_21104__$1;
(statearr_21114_21141[(2)] = null);

(statearr_21114_21141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (2))){
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21104__$1,(4),ch);
} else {
if((state_val_21105 === (11))){
var inst_21081 = (state_21104[(7)]);
var inst_21091 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21104__$1,(8),inst_21091,inst_21081);
} else {
if((state_val_21105 === (9))){
var state_21104__$1 = state_21104;
var statearr_21115_21142 = state_21104__$1;
(statearr_21115_21142[(2)] = tc);

(statearr_21115_21142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (5))){
var inst_21084 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21085 = cljs.core.async.close_BANG_.call(null,fc);
var state_21104__$1 = (function (){var statearr_21116 = state_21104;
(statearr_21116[(8)] = inst_21084);

return statearr_21116;
})();
var statearr_21117_21143 = state_21104__$1;
(statearr_21117_21143[(2)] = inst_21085);

(statearr_21117_21143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (14))){
var inst_21098 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21118_21144 = state_21104__$1;
(statearr_21118_21144[(2)] = inst_21098);

(statearr_21118_21144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (10))){
var state_21104__$1 = state_21104;
var statearr_21119_21145 = state_21104__$1;
(statearr_21119_21145[(2)] = fc);

(statearr_21119_21145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (8))){
var inst_21093 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21093)){
var statearr_21120_21146 = state_21104__$1;
(statearr_21120_21146[(1)] = (12));

} else {
var statearr_21121_21147 = state_21104__$1;
(statearr_21121_21147[(1)] = (13));

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
});})(c__20455__auto___21133,tc,fc))
;
return ((function (switch__20343__auto__,c__20455__auto___21133,tc,fc){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_21125 = [null,null,null,null,null,null,null,null,null];
(statearr_21125[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_21125[(1)] = (1));

return statearr_21125;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_21104){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_21104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e21126){if((e21126 instanceof Object)){
var ex__20347__auto__ = e21126;
var statearr_21127_21148 = state_21104;
(statearr_21127_21148[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21149 = state_21104;
state_21104 = G__21149;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_21104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_21104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___21133,tc,fc))
})();
var state__20457__auto__ = (function (){var statearr_21128 = f__20456__auto__.call(null);
(statearr_21128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___21133);

return statearr_21128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___21133,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto__){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto__){
return (function (state_21213){
var state_val_21214 = (state_21213[(1)]);
if((state_val_21214 === (7))){
var inst_21209 = (state_21213[(2)]);
var state_21213__$1 = state_21213;
var statearr_21215_21236 = state_21213__$1;
(statearr_21215_21236[(2)] = inst_21209);

(statearr_21215_21236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (1))){
var inst_21193 = init;
var state_21213__$1 = (function (){var statearr_21216 = state_21213;
(statearr_21216[(7)] = inst_21193);

return statearr_21216;
})();
var statearr_21217_21237 = state_21213__$1;
(statearr_21217_21237[(2)] = null);

(statearr_21217_21237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (4))){
var inst_21196 = (state_21213[(8)]);
var inst_21196__$1 = (state_21213[(2)]);
var inst_21197 = (inst_21196__$1 == null);
var state_21213__$1 = (function (){var statearr_21218 = state_21213;
(statearr_21218[(8)] = inst_21196__$1);

return statearr_21218;
})();
if(cljs.core.truth_(inst_21197)){
var statearr_21219_21238 = state_21213__$1;
(statearr_21219_21238[(1)] = (5));

} else {
var statearr_21220_21239 = state_21213__$1;
(statearr_21220_21239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (6))){
var inst_21196 = (state_21213[(8)]);
var inst_21200 = (state_21213[(9)]);
var inst_21193 = (state_21213[(7)]);
var inst_21200__$1 = f.call(null,inst_21193,inst_21196);
var inst_21201 = cljs.core.reduced_QMARK_.call(null,inst_21200__$1);
var state_21213__$1 = (function (){var statearr_21221 = state_21213;
(statearr_21221[(9)] = inst_21200__$1);

return statearr_21221;
})();
if(inst_21201){
var statearr_21222_21240 = state_21213__$1;
(statearr_21222_21240[(1)] = (8));

} else {
var statearr_21223_21241 = state_21213__$1;
(statearr_21223_21241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (3))){
var inst_21211 = (state_21213[(2)]);
var state_21213__$1 = state_21213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21213__$1,inst_21211);
} else {
if((state_val_21214 === (2))){
var state_21213__$1 = state_21213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21213__$1,(4),ch);
} else {
if((state_val_21214 === (9))){
var inst_21200 = (state_21213[(9)]);
var inst_21193 = inst_21200;
var state_21213__$1 = (function (){var statearr_21224 = state_21213;
(statearr_21224[(7)] = inst_21193);

return statearr_21224;
})();
var statearr_21225_21242 = state_21213__$1;
(statearr_21225_21242[(2)] = null);

(statearr_21225_21242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (5))){
var inst_21193 = (state_21213[(7)]);
var state_21213__$1 = state_21213;
var statearr_21226_21243 = state_21213__$1;
(statearr_21226_21243[(2)] = inst_21193);

(statearr_21226_21243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (10))){
var inst_21207 = (state_21213[(2)]);
var state_21213__$1 = state_21213;
var statearr_21227_21244 = state_21213__$1;
(statearr_21227_21244[(2)] = inst_21207);

(statearr_21227_21244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21214 === (8))){
var inst_21200 = (state_21213[(9)]);
var inst_21203 = cljs.core.deref.call(null,inst_21200);
var state_21213__$1 = state_21213;
var statearr_21228_21245 = state_21213__$1;
(statearr_21228_21245[(2)] = inst_21203);

(statearr_21228_21245[(1)] = (10));


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
});})(c__20455__auto__))
;
return ((function (switch__20343__auto__,c__20455__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20344__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20344__auto____0 = (function (){
var statearr_21232 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21232[(0)] = cljs$core$async$reduce_$_state_machine__20344__auto__);

(statearr_21232[(1)] = (1));

return statearr_21232;
});
var cljs$core$async$reduce_$_state_machine__20344__auto____1 = (function (state_21213){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_21213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e21233){if((e21233 instanceof Object)){
var ex__20347__auto__ = e21233;
var statearr_21234_21246 = state_21213;
(statearr_21234_21246[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21247 = state_21213;
state_21213 = G__21247;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20344__auto__ = function(state_21213){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20344__auto____1.call(this,state_21213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20344__auto____0;
cljs$core$async$reduce_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20344__auto____1;
return cljs$core$async$reduce_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto__))
})();
var state__20457__auto__ = (function (){var statearr_21235 = f__20456__auto__.call(null);
(statearr_21235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto__);

return statearr_21235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto__))
);

return c__20455__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21248 = [];
var len__17829__auto___21300 = arguments.length;
var i__17830__auto___21301 = (0);
while(true){
if((i__17830__auto___21301 < len__17829__auto___21300)){
args21248.push((arguments[i__17830__auto___21301]));

var G__21302 = (i__17830__auto___21301 + (1));
i__17830__auto___21301 = G__21302;
continue;
} else {
}
break;
}

var G__21250 = args21248.length;
switch (G__21250) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21248.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto__){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto__){
return (function (state_21275){
var state_val_21276 = (state_21275[(1)]);
if((state_val_21276 === (7))){
var inst_21257 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
var statearr_21277_21304 = state_21275__$1;
(statearr_21277_21304[(2)] = inst_21257);

(statearr_21277_21304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (1))){
var inst_21251 = cljs.core.seq.call(null,coll);
var inst_21252 = inst_21251;
var state_21275__$1 = (function (){var statearr_21278 = state_21275;
(statearr_21278[(7)] = inst_21252);

return statearr_21278;
})();
var statearr_21279_21305 = state_21275__$1;
(statearr_21279_21305[(2)] = null);

(statearr_21279_21305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (4))){
var inst_21252 = (state_21275[(7)]);
var inst_21255 = cljs.core.first.call(null,inst_21252);
var state_21275__$1 = state_21275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21275__$1,(7),ch,inst_21255);
} else {
if((state_val_21276 === (13))){
var inst_21269 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
var statearr_21280_21306 = state_21275__$1;
(statearr_21280_21306[(2)] = inst_21269);

(statearr_21280_21306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (6))){
var inst_21260 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
if(cljs.core.truth_(inst_21260)){
var statearr_21281_21307 = state_21275__$1;
(statearr_21281_21307[(1)] = (8));

} else {
var statearr_21282_21308 = state_21275__$1;
(statearr_21282_21308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (3))){
var inst_21273 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21275__$1,inst_21273);
} else {
if((state_val_21276 === (12))){
var state_21275__$1 = state_21275;
var statearr_21283_21309 = state_21275__$1;
(statearr_21283_21309[(2)] = null);

(statearr_21283_21309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (2))){
var inst_21252 = (state_21275[(7)]);
var state_21275__$1 = state_21275;
if(cljs.core.truth_(inst_21252)){
var statearr_21284_21310 = state_21275__$1;
(statearr_21284_21310[(1)] = (4));

} else {
var statearr_21285_21311 = state_21275__$1;
(statearr_21285_21311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (11))){
var inst_21266 = cljs.core.async.close_BANG_.call(null,ch);
var state_21275__$1 = state_21275;
var statearr_21286_21312 = state_21275__$1;
(statearr_21286_21312[(2)] = inst_21266);

(statearr_21286_21312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (9))){
var state_21275__$1 = state_21275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21287_21313 = state_21275__$1;
(statearr_21287_21313[(1)] = (11));

} else {
var statearr_21288_21314 = state_21275__$1;
(statearr_21288_21314[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (5))){
var inst_21252 = (state_21275[(7)]);
var state_21275__$1 = state_21275;
var statearr_21289_21315 = state_21275__$1;
(statearr_21289_21315[(2)] = inst_21252);

(statearr_21289_21315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (10))){
var inst_21271 = (state_21275[(2)]);
var state_21275__$1 = state_21275;
var statearr_21290_21316 = state_21275__$1;
(statearr_21290_21316[(2)] = inst_21271);

(statearr_21290_21316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21276 === (8))){
var inst_21252 = (state_21275[(7)]);
var inst_21262 = cljs.core.next.call(null,inst_21252);
var inst_21252__$1 = inst_21262;
var state_21275__$1 = (function (){var statearr_21291 = state_21275;
(statearr_21291[(7)] = inst_21252__$1);

return statearr_21291;
})();
var statearr_21292_21317 = state_21275__$1;
(statearr_21292_21317[(2)] = null);

(statearr_21292_21317[(1)] = (2));


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
});})(c__20455__auto__))
;
return ((function (switch__20343__auto__,c__20455__auto__){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_21296 = [null,null,null,null,null,null,null,null];
(statearr_21296[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_21296[(1)] = (1));

return statearr_21296;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_21275){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_21275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e21297){if((e21297 instanceof Object)){
var ex__20347__auto__ = e21297;
var statearr_21298_21318 = state_21275;
(statearr_21298_21318[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21319 = state_21275;
state_21275 = G__21319;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_21275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_21275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto__))
})();
var state__20457__auto__ = (function (){var statearr_21299 = f__20456__auto__.call(null);
(statearr_21299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto__);

return statearr_21299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto__))
);

return c__20455__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21541 = (function (mult,ch,cs,meta21542){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21542 = meta21542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21543,meta21542__$1){
var self__ = this;
var _21543__$1 = this;
return (new cljs.core.async.t_cljs$core$async21541(self__.mult,self__.ch,self__.cs,meta21542__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21543){
var self__ = this;
var _21543__$1 = this;
return self__.meta21542;
});})(cs))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21541.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21541.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21542","meta21542",1690469979,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21541";

cljs.core.async.t_cljs$core$async21541.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21541");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21541 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21541(mult__$1,ch__$1,cs__$1,meta21542){
return (new cljs.core.async.t_cljs$core$async21541(mult__$1,ch__$1,cs__$1,meta21542));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21541(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20455__auto___21762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___21762,cs,m,dchan,dctr,done){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___21762,cs,m,dchan,dctr,done){
return (function (state_21674){
var state_val_21675 = (state_21674[(1)]);
if((state_val_21675 === (7))){
var inst_21670 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21676_21763 = state_21674__$1;
(statearr_21676_21763[(2)] = inst_21670);

(statearr_21676_21763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (20))){
var inst_21575 = (state_21674[(7)]);
var inst_21585 = cljs.core.first.call(null,inst_21575);
var inst_21586 = cljs.core.nth.call(null,inst_21585,(0),null);
var inst_21587 = cljs.core.nth.call(null,inst_21585,(1),null);
var state_21674__$1 = (function (){var statearr_21677 = state_21674;
(statearr_21677[(8)] = inst_21586);

return statearr_21677;
})();
if(cljs.core.truth_(inst_21587)){
var statearr_21678_21764 = state_21674__$1;
(statearr_21678_21764[(1)] = (22));

} else {
var statearr_21679_21765 = state_21674__$1;
(statearr_21679_21765[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (27))){
var inst_21546 = (state_21674[(9)]);
var inst_21617 = (state_21674[(10)]);
var inst_21615 = (state_21674[(11)]);
var inst_21622 = (state_21674[(12)]);
var inst_21622__$1 = cljs.core._nth.call(null,inst_21615,inst_21617);
var inst_21623 = cljs.core.async.put_BANG_.call(null,inst_21622__$1,inst_21546,done);
var state_21674__$1 = (function (){var statearr_21680 = state_21674;
(statearr_21680[(12)] = inst_21622__$1);

return statearr_21680;
})();
if(cljs.core.truth_(inst_21623)){
var statearr_21681_21766 = state_21674__$1;
(statearr_21681_21766[(1)] = (30));

} else {
var statearr_21682_21767 = state_21674__$1;
(statearr_21682_21767[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (1))){
var state_21674__$1 = state_21674;
var statearr_21683_21768 = state_21674__$1;
(statearr_21683_21768[(2)] = null);

(statearr_21683_21768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (24))){
var inst_21575 = (state_21674[(7)]);
var inst_21592 = (state_21674[(2)]);
var inst_21593 = cljs.core.next.call(null,inst_21575);
var inst_21555 = inst_21593;
var inst_21556 = null;
var inst_21557 = (0);
var inst_21558 = (0);
var state_21674__$1 = (function (){var statearr_21684 = state_21674;
(statearr_21684[(13)] = inst_21592);

(statearr_21684[(14)] = inst_21558);

(statearr_21684[(15)] = inst_21556);

(statearr_21684[(16)] = inst_21555);

(statearr_21684[(17)] = inst_21557);

return statearr_21684;
})();
var statearr_21685_21769 = state_21674__$1;
(statearr_21685_21769[(2)] = null);

(statearr_21685_21769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (39))){
var state_21674__$1 = state_21674;
var statearr_21689_21770 = state_21674__$1;
(statearr_21689_21770[(2)] = null);

(statearr_21689_21770[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (4))){
var inst_21546 = (state_21674[(9)]);
var inst_21546__$1 = (state_21674[(2)]);
var inst_21547 = (inst_21546__$1 == null);
var state_21674__$1 = (function (){var statearr_21690 = state_21674;
(statearr_21690[(9)] = inst_21546__$1);

return statearr_21690;
})();
if(cljs.core.truth_(inst_21547)){
var statearr_21691_21771 = state_21674__$1;
(statearr_21691_21771[(1)] = (5));

} else {
var statearr_21692_21772 = state_21674__$1;
(statearr_21692_21772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (15))){
var inst_21558 = (state_21674[(14)]);
var inst_21556 = (state_21674[(15)]);
var inst_21555 = (state_21674[(16)]);
var inst_21557 = (state_21674[(17)]);
var inst_21571 = (state_21674[(2)]);
var inst_21572 = (inst_21558 + (1));
var tmp21686 = inst_21556;
var tmp21687 = inst_21555;
var tmp21688 = inst_21557;
var inst_21555__$1 = tmp21687;
var inst_21556__$1 = tmp21686;
var inst_21557__$1 = tmp21688;
var inst_21558__$1 = inst_21572;
var state_21674__$1 = (function (){var statearr_21693 = state_21674;
(statearr_21693[(18)] = inst_21571);

(statearr_21693[(14)] = inst_21558__$1);

(statearr_21693[(15)] = inst_21556__$1);

(statearr_21693[(16)] = inst_21555__$1);

(statearr_21693[(17)] = inst_21557__$1);

return statearr_21693;
})();
var statearr_21694_21773 = state_21674__$1;
(statearr_21694_21773[(2)] = null);

(statearr_21694_21773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (21))){
var inst_21596 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21698_21774 = state_21674__$1;
(statearr_21698_21774[(2)] = inst_21596);

(statearr_21698_21774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (31))){
var inst_21622 = (state_21674[(12)]);
var inst_21626 = done.call(null,null);
var inst_21627 = cljs.core.async.untap_STAR_.call(null,m,inst_21622);
var state_21674__$1 = (function (){var statearr_21699 = state_21674;
(statearr_21699[(19)] = inst_21626);

return statearr_21699;
})();
var statearr_21700_21775 = state_21674__$1;
(statearr_21700_21775[(2)] = inst_21627);

(statearr_21700_21775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (32))){
var inst_21616 = (state_21674[(20)]);
var inst_21617 = (state_21674[(10)]);
var inst_21615 = (state_21674[(11)]);
var inst_21614 = (state_21674[(21)]);
var inst_21629 = (state_21674[(2)]);
var inst_21630 = (inst_21617 + (1));
var tmp21695 = inst_21616;
var tmp21696 = inst_21615;
var tmp21697 = inst_21614;
var inst_21614__$1 = tmp21697;
var inst_21615__$1 = tmp21696;
var inst_21616__$1 = tmp21695;
var inst_21617__$1 = inst_21630;
var state_21674__$1 = (function (){var statearr_21701 = state_21674;
(statearr_21701[(22)] = inst_21629);

(statearr_21701[(20)] = inst_21616__$1);

(statearr_21701[(10)] = inst_21617__$1);

(statearr_21701[(11)] = inst_21615__$1);

(statearr_21701[(21)] = inst_21614__$1);

return statearr_21701;
})();
var statearr_21702_21776 = state_21674__$1;
(statearr_21702_21776[(2)] = null);

(statearr_21702_21776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (40))){
var inst_21642 = (state_21674[(23)]);
var inst_21646 = done.call(null,null);
var inst_21647 = cljs.core.async.untap_STAR_.call(null,m,inst_21642);
var state_21674__$1 = (function (){var statearr_21703 = state_21674;
(statearr_21703[(24)] = inst_21646);

return statearr_21703;
})();
var statearr_21704_21777 = state_21674__$1;
(statearr_21704_21777[(2)] = inst_21647);

(statearr_21704_21777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (33))){
var inst_21633 = (state_21674[(25)]);
var inst_21635 = cljs.core.chunked_seq_QMARK_.call(null,inst_21633);
var state_21674__$1 = state_21674;
if(inst_21635){
var statearr_21705_21778 = state_21674__$1;
(statearr_21705_21778[(1)] = (36));

} else {
var statearr_21706_21779 = state_21674__$1;
(statearr_21706_21779[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (13))){
var inst_21565 = (state_21674[(26)]);
var inst_21568 = cljs.core.async.close_BANG_.call(null,inst_21565);
var state_21674__$1 = state_21674;
var statearr_21707_21780 = state_21674__$1;
(statearr_21707_21780[(2)] = inst_21568);

(statearr_21707_21780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (22))){
var inst_21586 = (state_21674[(8)]);
var inst_21589 = cljs.core.async.close_BANG_.call(null,inst_21586);
var state_21674__$1 = state_21674;
var statearr_21708_21781 = state_21674__$1;
(statearr_21708_21781[(2)] = inst_21589);

(statearr_21708_21781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (36))){
var inst_21633 = (state_21674[(25)]);
var inst_21637 = cljs.core.chunk_first.call(null,inst_21633);
var inst_21638 = cljs.core.chunk_rest.call(null,inst_21633);
var inst_21639 = cljs.core.count.call(null,inst_21637);
var inst_21614 = inst_21638;
var inst_21615 = inst_21637;
var inst_21616 = inst_21639;
var inst_21617 = (0);
var state_21674__$1 = (function (){var statearr_21709 = state_21674;
(statearr_21709[(20)] = inst_21616);

(statearr_21709[(10)] = inst_21617);

(statearr_21709[(11)] = inst_21615);

(statearr_21709[(21)] = inst_21614);

return statearr_21709;
})();
var statearr_21710_21782 = state_21674__$1;
(statearr_21710_21782[(2)] = null);

(statearr_21710_21782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (41))){
var inst_21633 = (state_21674[(25)]);
var inst_21649 = (state_21674[(2)]);
var inst_21650 = cljs.core.next.call(null,inst_21633);
var inst_21614 = inst_21650;
var inst_21615 = null;
var inst_21616 = (0);
var inst_21617 = (0);
var state_21674__$1 = (function (){var statearr_21711 = state_21674;
(statearr_21711[(20)] = inst_21616);

(statearr_21711[(10)] = inst_21617);

(statearr_21711[(27)] = inst_21649);

(statearr_21711[(11)] = inst_21615);

(statearr_21711[(21)] = inst_21614);

return statearr_21711;
})();
var statearr_21712_21783 = state_21674__$1;
(statearr_21712_21783[(2)] = null);

(statearr_21712_21783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (43))){
var state_21674__$1 = state_21674;
var statearr_21713_21784 = state_21674__$1;
(statearr_21713_21784[(2)] = null);

(statearr_21713_21784[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (29))){
var inst_21658 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21714_21785 = state_21674__$1;
(statearr_21714_21785[(2)] = inst_21658);

(statearr_21714_21785[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (44))){
var inst_21667 = (state_21674[(2)]);
var state_21674__$1 = (function (){var statearr_21715 = state_21674;
(statearr_21715[(28)] = inst_21667);

return statearr_21715;
})();
var statearr_21716_21786 = state_21674__$1;
(statearr_21716_21786[(2)] = null);

(statearr_21716_21786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (6))){
var inst_21606 = (state_21674[(29)]);
var inst_21605 = cljs.core.deref.call(null,cs);
var inst_21606__$1 = cljs.core.keys.call(null,inst_21605);
var inst_21607 = cljs.core.count.call(null,inst_21606__$1);
var inst_21608 = cljs.core.reset_BANG_.call(null,dctr,inst_21607);
var inst_21613 = cljs.core.seq.call(null,inst_21606__$1);
var inst_21614 = inst_21613;
var inst_21615 = null;
var inst_21616 = (0);
var inst_21617 = (0);
var state_21674__$1 = (function (){var statearr_21717 = state_21674;
(statearr_21717[(20)] = inst_21616);

(statearr_21717[(29)] = inst_21606__$1);

(statearr_21717[(10)] = inst_21617);

(statearr_21717[(30)] = inst_21608);

(statearr_21717[(11)] = inst_21615);

(statearr_21717[(21)] = inst_21614);

return statearr_21717;
})();
var statearr_21718_21787 = state_21674__$1;
(statearr_21718_21787[(2)] = null);

(statearr_21718_21787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (28))){
var inst_21614 = (state_21674[(21)]);
var inst_21633 = (state_21674[(25)]);
var inst_21633__$1 = cljs.core.seq.call(null,inst_21614);
var state_21674__$1 = (function (){var statearr_21719 = state_21674;
(statearr_21719[(25)] = inst_21633__$1);

return statearr_21719;
})();
if(inst_21633__$1){
var statearr_21720_21788 = state_21674__$1;
(statearr_21720_21788[(1)] = (33));

} else {
var statearr_21721_21789 = state_21674__$1;
(statearr_21721_21789[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (25))){
var inst_21616 = (state_21674[(20)]);
var inst_21617 = (state_21674[(10)]);
var inst_21619 = (inst_21617 < inst_21616);
var inst_21620 = inst_21619;
var state_21674__$1 = state_21674;
if(cljs.core.truth_(inst_21620)){
var statearr_21722_21790 = state_21674__$1;
(statearr_21722_21790[(1)] = (27));

} else {
var statearr_21723_21791 = state_21674__$1;
(statearr_21723_21791[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (34))){
var state_21674__$1 = state_21674;
var statearr_21724_21792 = state_21674__$1;
(statearr_21724_21792[(2)] = null);

(statearr_21724_21792[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (17))){
var state_21674__$1 = state_21674;
var statearr_21725_21793 = state_21674__$1;
(statearr_21725_21793[(2)] = null);

(statearr_21725_21793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (3))){
var inst_21672 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21674__$1,inst_21672);
} else {
if((state_val_21675 === (12))){
var inst_21601 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21726_21794 = state_21674__$1;
(statearr_21726_21794[(2)] = inst_21601);

(statearr_21726_21794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (2))){
var state_21674__$1 = state_21674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21674__$1,(4),ch);
} else {
if((state_val_21675 === (23))){
var state_21674__$1 = state_21674;
var statearr_21727_21795 = state_21674__$1;
(statearr_21727_21795[(2)] = null);

(statearr_21727_21795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (35))){
var inst_21656 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21728_21796 = state_21674__$1;
(statearr_21728_21796[(2)] = inst_21656);

(statearr_21728_21796[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (19))){
var inst_21575 = (state_21674[(7)]);
var inst_21579 = cljs.core.chunk_first.call(null,inst_21575);
var inst_21580 = cljs.core.chunk_rest.call(null,inst_21575);
var inst_21581 = cljs.core.count.call(null,inst_21579);
var inst_21555 = inst_21580;
var inst_21556 = inst_21579;
var inst_21557 = inst_21581;
var inst_21558 = (0);
var state_21674__$1 = (function (){var statearr_21729 = state_21674;
(statearr_21729[(14)] = inst_21558);

(statearr_21729[(15)] = inst_21556);

(statearr_21729[(16)] = inst_21555);

(statearr_21729[(17)] = inst_21557);

return statearr_21729;
})();
var statearr_21730_21797 = state_21674__$1;
(statearr_21730_21797[(2)] = null);

(statearr_21730_21797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (11))){
var inst_21555 = (state_21674[(16)]);
var inst_21575 = (state_21674[(7)]);
var inst_21575__$1 = cljs.core.seq.call(null,inst_21555);
var state_21674__$1 = (function (){var statearr_21731 = state_21674;
(statearr_21731[(7)] = inst_21575__$1);

return statearr_21731;
})();
if(inst_21575__$1){
var statearr_21732_21798 = state_21674__$1;
(statearr_21732_21798[(1)] = (16));

} else {
var statearr_21733_21799 = state_21674__$1;
(statearr_21733_21799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (9))){
var inst_21603 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21734_21800 = state_21674__$1;
(statearr_21734_21800[(2)] = inst_21603);

(statearr_21734_21800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (5))){
var inst_21553 = cljs.core.deref.call(null,cs);
var inst_21554 = cljs.core.seq.call(null,inst_21553);
var inst_21555 = inst_21554;
var inst_21556 = null;
var inst_21557 = (0);
var inst_21558 = (0);
var state_21674__$1 = (function (){var statearr_21735 = state_21674;
(statearr_21735[(14)] = inst_21558);

(statearr_21735[(15)] = inst_21556);

(statearr_21735[(16)] = inst_21555);

(statearr_21735[(17)] = inst_21557);

return statearr_21735;
})();
var statearr_21736_21801 = state_21674__$1;
(statearr_21736_21801[(2)] = null);

(statearr_21736_21801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (14))){
var state_21674__$1 = state_21674;
var statearr_21737_21802 = state_21674__$1;
(statearr_21737_21802[(2)] = null);

(statearr_21737_21802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (45))){
var inst_21664 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21738_21803 = state_21674__$1;
(statearr_21738_21803[(2)] = inst_21664);

(statearr_21738_21803[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (26))){
var inst_21606 = (state_21674[(29)]);
var inst_21660 = (state_21674[(2)]);
var inst_21661 = cljs.core.seq.call(null,inst_21606);
var state_21674__$1 = (function (){var statearr_21739 = state_21674;
(statearr_21739[(31)] = inst_21660);

return statearr_21739;
})();
if(inst_21661){
var statearr_21740_21804 = state_21674__$1;
(statearr_21740_21804[(1)] = (42));

} else {
var statearr_21741_21805 = state_21674__$1;
(statearr_21741_21805[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (16))){
var inst_21575 = (state_21674[(7)]);
var inst_21577 = cljs.core.chunked_seq_QMARK_.call(null,inst_21575);
var state_21674__$1 = state_21674;
if(inst_21577){
var statearr_21742_21806 = state_21674__$1;
(statearr_21742_21806[(1)] = (19));

} else {
var statearr_21743_21807 = state_21674__$1;
(statearr_21743_21807[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (38))){
var inst_21653 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21744_21808 = state_21674__$1;
(statearr_21744_21808[(2)] = inst_21653);

(statearr_21744_21808[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (30))){
var state_21674__$1 = state_21674;
var statearr_21745_21809 = state_21674__$1;
(statearr_21745_21809[(2)] = null);

(statearr_21745_21809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (10))){
var inst_21558 = (state_21674[(14)]);
var inst_21556 = (state_21674[(15)]);
var inst_21564 = cljs.core._nth.call(null,inst_21556,inst_21558);
var inst_21565 = cljs.core.nth.call(null,inst_21564,(0),null);
var inst_21566 = cljs.core.nth.call(null,inst_21564,(1),null);
var state_21674__$1 = (function (){var statearr_21746 = state_21674;
(statearr_21746[(26)] = inst_21565);

return statearr_21746;
})();
if(cljs.core.truth_(inst_21566)){
var statearr_21747_21810 = state_21674__$1;
(statearr_21747_21810[(1)] = (13));

} else {
var statearr_21748_21811 = state_21674__$1;
(statearr_21748_21811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (18))){
var inst_21599 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21749_21812 = state_21674__$1;
(statearr_21749_21812[(2)] = inst_21599);

(statearr_21749_21812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (42))){
var state_21674__$1 = state_21674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21674__$1,(45),dchan);
} else {
if((state_val_21675 === (37))){
var inst_21642 = (state_21674[(23)]);
var inst_21546 = (state_21674[(9)]);
var inst_21633 = (state_21674[(25)]);
var inst_21642__$1 = cljs.core.first.call(null,inst_21633);
var inst_21643 = cljs.core.async.put_BANG_.call(null,inst_21642__$1,inst_21546,done);
var state_21674__$1 = (function (){var statearr_21750 = state_21674;
(statearr_21750[(23)] = inst_21642__$1);

return statearr_21750;
})();
if(cljs.core.truth_(inst_21643)){
var statearr_21751_21813 = state_21674__$1;
(statearr_21751_21813[(1)] = (39));

} else {
var statearr_21752_21814 = state_21674__$1;
(statearr_21752_21814[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (8))){
var inst_21558 = (state_21674[(14)]);
var inst_21557 = (state_21674[(17)]);
var inst_21560 = (inst_21558 < inst_21557);
var inst_21561 = inst_21560;
var state_21674__$1 = state_21674;
if(cljs.core.truth_(inst_21561)){
var statearr_21753_21815 = state_21674__$1;
(statearr_21753_21815[(1)] = (10));

} else {
var statearr_21754_21816 = state_21674__$1;
(statearr_21754_21816[(1)] = (11));

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
});})(c__20455__auto___21762,cs,m,dchan,dctr,done))
;
return ((function (switch__20343__auto__,c__20455__auto___21762,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20344__auto__ = null;
var cljs$core$async$mult_$_state_machine__20344__auto____0 = (function (){
var statearr_21758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21758[(0)] = cljs$core$async$mult_$_state_machine__20344__auto__);

(statearr_21758[(1)] = (1));

return statearr_21758;
});
var cljs$core$async$mult_$_state_machine__20344__auto____1 = (function (state_21674){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_21674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e21759){if((e21759 instanceof Object)){
var ex__20347__auto__ = e21759;
var statearr_21760_21817 = state_21674;
(statearr_21760_21817[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21818 = state_21674;
state_21674 = G__21818;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20344__auto__ = function(state_21674){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20344__auto____1.call(this,state_21674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20344__auto____0;
cljs$core$async$mult_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20344__auto____1;
return cljs$core$async$mult_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___21762,cs,m,dchan,dctr,done))
})();
var state__20457__auto__ = (function (){var statearr_21761 = f__20456__auto__.call(null);
(statearr_21761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___21762);

return statearr_21761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___21762,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21819 = [];
var len__17829__auto___21822 = arguments.length;
var i__17830__auto___21823 = (0);
while(true){
if((i__17830__auto___21823 < len__17829__auto___21822)){
args21819.push((arguments[i__17830__auto___21823]));

var G__21824 = (i__17830__auto___21823 + (1));
i__17830__auto___21823 = G__21824;
continue;
} else {
}
break;
}

var G__21821 = args21819.length;
switch (G__21821) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21819.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___21836 = arguments.length;
var i__17830__auto___21837 = (0);
while(true){
if((i__17830__auto___21837 < len__17829__auto___21836)){
args__17836__auto__.push((arguments[i__17830__auto___21837]));

var G__21838 = (i__17830__auto___21837 + (1));
i__17830__auto___21837 = G__21838;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21830){
var map__21831 = p__21830;
var map__21831__$1 = ((((!((map__21831 == null)))?((((map__21831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21831):map__21831);
var opts = map__21831__$1;
var statearr_21833_21839 = state;
(statearr_21833_21839[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21831,map__21831__$1,opts){
return (function (val){
var statearr_21834_21840 = state;
(statearr_21834_21840[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21831,map__21831__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21835_21841 = state;
(statearr_21835_21841[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21826){
var G__21827 = cljs.core.first.call(null,seq21826);
var seq21826__$1 = cljs.core.next.call(null,seq21826);
var G__21828 = cljs.core.first.call(null,seq21826__$1);
var seq21826__$2 = cljs.core.next.call(null,seq21826__$1);
var G__21829 = cljs.core.first.call(null,seq21826__$2);
var seq21826__$3 = cljs.core.next.call(null,seq21826__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21827,G__21828,G__21829,seq21826__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async22005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22005 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22006){
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
this.meta22006 = meta22006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22007,meta22006__$1){
var self__ = this;
var _22007__$1 = this;
return (new cljs.core.async.t_cljs$core$async22005(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22006__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22007){
var self__ = this;
var _22007__$1 = this;
return self__.meta22006;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22005.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22005.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22006","meta22006",873179924,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22005";

cljs.core.async.t_cljs$core$async22005.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22005");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22005 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22005(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22006){
return (new cljs.core.async.t_cljs$core$async22005(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22006));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22005(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20455__auto___22168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___22168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___22168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22105){
var state_val_22106 = (state_22105[(1)]);
if((state_val_22106 === (7))){
var inst_22023 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22107_22169 = state_22105__$1;
(statearr_22107_22169[(2)] = inst_22023);

(statearr_22107_22169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (20))){
var inst_22035 = (state_22105[(7)]);
var state_22105__$1 = state_22105;
var statearr_22108_22170 = state_22105__$1;
(statearr_22108_22170[(2)] = inst_22035);

(statearr_22108_22170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (27))){
var state_22105__$1 = state_22105;
var statearr_22109_22171 = state_22105__$1;
(statearr_22109_22171[(2)] = null);

(statearr_22109_22171[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (1))){
var inst_22011 = (state_22105[(8)]);
var inst_22011__$1 = calc_state.call(null);
var inst_22013 = (inst_22011__$1 == null);
var inst_22014 = cljs.core.not.call(null,inst_22013);
var state_22105__$1 = (function (){var statearr_22110 = state_22105;
(statearr_22110[(8)] = inst_22011__$1);

return statearr_22110;
})();
if(inst_22014){
var statearr_22111_22172 = state_22105__$1;
(statearr_22111_22172[(1)] = (2));

} else {
var statearr_22112_22173 = state_22105__$1;
(statearr_22112_22173[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (24))){
var inst_22065 = (state_22105[(9)]);
var inst_22079 = (state_22105[(10)]);
var inst_22058 = (state_22105[(11)]);
var inst_22079__$1 = inst_22058.call(null,inst_22065);
var state_22105__$1 = (function (){var statearr_22113 = state_22105;
(statearr_22113[(10)] = inst_22079__$1);

return statearr_22113;
})();
if(cljs.core.truth_(inst_22079__$1)){
var statearr_22114_22174 = state_22105__$1;
(statearr_22114_22174[(1)] = (29));

} else {
var statearr_22115_22175 = state_22105__$1;
(statearr_22115_22175[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (4))){
var inst_22026 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22026)){
var statearr_22116_22176 = state_22105__$1;
(statearr_22116_22176[(1)] = (8));

} else {
var statearr_22117_22177 = state_22105__$1;
(statearr_22117_22177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (15))){
var inst_22052 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22052)){
var statearr_22118_22178 = state_22105__$1;
(statearr_22118_22178[(1)] = (19));

} else {
var statearr_22119_22179 = state_22105__$1;
(statearr_22119_22179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (21))){
var inst_22057 = (state_22105[(12)]);
var inst_22057__$1 = (state_22105[(2)]);
var inst_22058 = cljs.core.get.call(null,inst_22057__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22059 = cljs.core.get.call(null,inst_22057__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22060 = cljs.core.get.call(null,inst_22057__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22105__$1 = (function (){var statearr_22120 = state_22105;
(statearr_22120[(11)] = inst_22058);

(statearr_22120[(12)] = inst_22057__$1);

(statearr_22120[(13)] = inst_22059);

return statearr_22120;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22105__$1,(22),inst_22060);
} else {
if((state_val_22106 === (31))){
var inst_22087 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22087)){
var statearr_22121_22180 = state_22105__$1;
(statearr_22121_22180[(1)] = (32));

} else {
var statearr_22122_22181 = state_22105__$1;
(statearr_22122_22181[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (32))){
var inst_22064 = (state_22105[(14)]);
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22105__$1,(35),out,inst_22064);
} else {
if((state_val_22106 === (33))){
var inst_22057 = (state_22105[(12)]);
var inst_22035 = inst_22057;
var state_22105__$1 = (function (){var statearr_22123 = state_22105;
(statearr_22123[(7)] = inst_22035);

return statearr_22123;
})();
var statearr_22124_22182 = state_22105__$1;
(statearr_22124_22182[(2)] = null);

(statearr_22124_22182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (13))){
var inst_22035 = (state_22105[(7)]);
var inst_22042 = inst_22035.cljs$lang$protocol_mask$partition0$;
var inst_22043 = (inst_22042 & (64));
var inst_22044 = inst_22035.cljs$core$ISeq$;
var inst_22045 = (inst_22043) || (inst_22044);
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22045)){
var statearr_22125_22183 = state_22105__$1;
(statearr_22125_22183[(1)] = (16));

} else {
var statearr_22126_22184 = state_22105__$1;
(statearr_22126_22184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (22))){
var inst_22065 = (state_22105[(9)]);
var inst_22064 = (state_22105[(14)]);
var inst_22063 = (state_22105[(2)]);
var inst_22064__$1 = cljs.core.nth.call(null,inst_22063,(0),null);
var inst_22065__$1 = cljs.core.nth.call(null,inst_22063,(1),null);
var inst_22066 = (inst_22064__$1 == null);
var inst_22067 = cljs.core._EQ_.call(null,inst_22065__$1,change);
var inst_22068 = (inst_22066) || (inst_22067);
var state_22105__$1 = (function (){var statearr_22127 = state_22105;
(statearr_22127[(9)] = inst_22065__$1);

(statearr_22127[(14)] = inst_22064__$1);

return statearr_22127;
})();
if(cljs.core.truth_(inst_22068)){
var statearr_22128_22185 = state_22105__$1;
(statearr_22128_22185[(1)] = (23));

} else {
var statearr_22129_22186 = state_22105__$1;
(statearr_22129_22186[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (36))){
var inst_22057 = (state_22105[(12)]);
var inst_22035 = inst_22057;
var state_22105__$1 = (function (){var statearr_22130 = state_22105;
(statearr_22130[(7)] = inst_22035);

return statearr_22130;
})();
var statearr_22131_22187 = state_22105__$1;
(statearr_22131_22187[(2)] = null);

(statearr_22131_22187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (29))){
var inst_22079 = (state_22105[(10)]);
var state_22105__$1 = state_22105;
var statearr_22132_22188 = state_22105__$1;
(statearr_22132_22188[(2)] = inst_22079);

(statearr_22132_22188[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (6))){
var state_22105__$1 = state_22105;
var statearr_22133_22189 = state_22105__$1;
(statearr_22133_22189[(2)] = false);

(statearr_22133_22189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (28))){
var inst_22075 = (state_22105[(2)]);
var inst_22076 = calc_state.call(null);
var inst_22035 = inst_22076;
var state_22105__$1 = (function (){var statearr_22134 = state_22105;
(statearr_22134[(7)] = inst_22035);

(statearr_22134[(15)] = inst_22075);

return statearr_22134;
})();
var statearr_22135_22190 = state_22105__$1;
(statearr_22135_22190[(2)] = null);

(statearr_22135_22190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (25))){
var inst_22101 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22136_22191 = state_22105__$1;
(statearr_22136_22191[(2)] = inst_22101);

(statearr_22136_22191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (34))){
var inst_22099 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22137_22192 = state_22105__$1;
(statearr_22137_22192[(2)] = inst_22099);

(statearr_22137_22192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (17))){
var state_22105__$1 = state_22105;
var statearr_22138_22193 = state_22105__$1;
(statearr_22138_22193[(2)] = false);

(statearr_22138_22193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (3))){
var state_22105__$1 = state_22105;
var statearr_22139_22194 = state_22105__$1;
(statearr_22139_22194[(2)] = false);

(statearr_22139_22194[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (12))){
var inst_22103 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22105__$1,inst_22103);
} else {
if((state_val_22106 === (2))){
var inst_22011 = (state_22105[(8)]);
var inst_22016 = inst_22011.cljs$lang$protocol_mask$partition0$;
var inst_22017 = (inst_22016 & (64));
var inst_22018 = inst_22011.cljs$core$ISeq$;
var inst_22019 = (inst_22017) || (inst_22018);
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22019)){
var statearr_22140_22195 = state_22105__$1;
(statearr_22140_22195[(1)] = (5));

} else {
var statearr_22141_22196 = state_22105__$1;
(statearr_22141_22196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (23))){
var inst_22064 = (state_22105[(14)]);
var inst_22070 = (inst_22064 == null);
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22070)){
var statearr_22142_22197 = state_22105__$1;
(statearr_22142_22197[(1)] = (26));

} else {
var statearr_22143_22198 = state_22105__$1;
(statearr_22143_22198[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (35))){
var inst_22090 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
if(cljs.core.truth_(inst_22090)){
var statearr_22144_22199 = state_22105__$1;
(statearr_22144_22199[(1)] = (36));

} else {
var statearr_22145_22200 = state_22105__$1;
(statearr_22145_22200[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (19))){
var inst_22035 = (state_22105[(7)]);
var inst_22054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22035);
var state_22105__$1 = state_22105;
var statearr_22146_22201 = state_22105__$1;
(statearr_22146_22201[(2)] = inst_22054);

(statearr_22146_22201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (11))){
var inst_22035 = (state_22105[(7)]);
var inst_22039 = (inst_22035 == null);
var inst_22040 = cljs.core.not.call(null,inst_22039);
var state_22105__$1 = state_22105;
if(inst_22040){
var statearr_22147_22202 = state_22105__$1;
(statearr_22147_22202[(1)] = (13));

} else {
var statearr_22148_22203 = state_22105__$1;
(statearr_22148_22203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (9))){
var inst_22011 = (state_22105[(8)]);
var state_22105__$1 = state_22105;
var statearr_22149_22204 = state_22105__$1;
(statearr_22149_22204[(2)] = inst_22011);

(statearr_22149_22204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (5))){
var state_22105__$1 = state_22105;
var statearr_22150_22205 = state_22105__$1;
(statearr_22150_22205[(2)] = true);

(statearr_22150_22205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (14))){
var state_22105__$1 = state_22105;
var statearr_22151_22206 = state_22105__$1;
(statearr_22151_22206[(2)] = false);

(statearr_22151_22206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (26))){
var inst_22065 = (state_22105[(9)]);
var inst_22072 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22065);
var state_22105__$1 = state_22105;
var statearr_22152_22207 = state_22105__$1;
(statearr_22152_22207[(2)] = inst_22072);

(statearr_22152_22207[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (16))){
var state_22105__$1 = state_22105;
var statearr_22153_22208 = state_22105__$1;
(statearr_22153_22208[(2)] = true);

(statearr_22153_22208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (38))){
var inst_22095 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22154_22209 = state_22105__$1;
(statearr_22154_22209[(2)] = inst_22095);

(statearr_22154_22209[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (30))){
var inst_22065 = (state_22105[(9)]);
var inst_22058 = (state_22105[(11)]);
var inst_22059 = (state_22105[(13)]);
var inst_22082 = cljs.core.empty_QMARK_.call(null,inst_22058);
var inst_22083 = inst_22059.call(null,inst_22065);
var inst_22084 = cljs.core.not.call(null,inst_22083);
var inst_22085 = (inst_22082) && (inst_22084);
var state_22105__$1 = state_22105;
var statearr_22155_22210 = state_22105__$1;
(statearr_22155_22210[(2)] = inst_22085);

(statearr_22155_22210[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (10))){
var inst_22011 = (state_22105[(8)]);
var inst_22031 = (state_22105[(2)]);
var inst_22032 = cljs.core.get.call(null,inst_22031,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22033 = cljs.core.get.call(null,inst_22031,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22034 = cljs.core.get.call(null,inst_22031,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22035 = inst_22011;
var state_22105__$1 = (function (){var statearr_22156 = state_22105;
(statearr_22156[(16)] = inst_22033);

(statearr_22156[(17)] = inst_22034);

(statearr_22156[(18)] = inst_22032);

(statearr_22156[(7)] = inst_22035);

return statearr_22156;
})();
var statearr_22157_22211 = state_22105__$1;
(statearr_22157_22211[(2)] = null);

(statearr_22157_22211[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (18))){
var inst_22049 = (state_22105[(2)]);
var state_22105__$1 = state_22105;
var statearr_22158_22212 = state_22105__$1;
(statearr_22158_22212[(2)] = inst_22049);

(statearr_22158_22212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (37))){
var state_22105__$1 = state_22105;
var statearr_22159_22213 = state_22105__$1;
(statearr_22159_22213[(2)] = null);

(statearr_22159_22213[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22106 === (8))){
var inst_22011 = (state_22105[(8)]);
var inst_22028 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22011);
var state_22105__$1 = state_22105;
var statearr_22160_22214 = state_22105__$1;
(statearr_22160_22214[(2)] = inst_22028);

(statearr_22160_22214[(1)] = (10));


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
});})(c__20455__auto___22168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20343__auto__,c__20455__auto___22168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20344__auto__ = null;
var cljs$core$async$mix_$_state_machine__20344__auto____0 = (function (){
var statearr_22164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22164[(0)] = cljs$core$async$mix_$_state_machine__20344__auto__);

(statearr_22164[(1)] = (1));

return statearr_22164;
});
var cljs$core$async$mix_$_state_machine__20344__auto____1 = (function (state_22105){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_22105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e22165){if((e22165 instanceof Object)){
var ex__20347__auto__ = e22165;
var statearr_22166_22215 = state_22105;
(statearr_22166_22215[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22216 = state_22105;
state_22105 = G__22216;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20344__auto__ = function(state_22105){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20344__auto____1.call(this,state_22105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20344__auto____0;
cljs$core$async$mix_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20344__auto____1;
return cljs$core$async$mix_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___22168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20457__auto__ = (function (){var statearr_22167 = f__20456__auto__.call(null);
(statearr_22167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___22168);

return statearr_22167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___22168,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22217 = [];
var len__17829__auto___22220 = arguments.length;
var i__17830__auto___22221 = (0);
while(true){
if((i__17830__auto___22221 < len__17829__auto___22220)){
args22217.push((arguments[i__17830__auto___22221]));

var G__22222 = (i__17830__auto___22221 + (1));
i__17830__auto___22221 = G__22222;
continue;
} else {
}
break;
}

var G__22219 = args22217.length;
switch (G__22219) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22217.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22225 = [];
var len__17829__auto___22350 = arguments.length;
var i__17830__auto___22351 = (0);
while(true){
if((i__17830__auto___22351 < len__17829__auto___22350)){
args22225.push((arguments[i__17830__auto___22351]));

var G__22352 = (i__17830__auto___22351 + (1));
i__17830__auto___22351 = G__22352;
continue;
} else {
}
break;
}

var G__22227 = args22225.length;
switch (G__22227) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22225.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__22224_SHARP_){
if(cljs.core.truth_(p1__22224_SHARP_.call(null,topic))){
return p1__22224_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22224_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22228 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22229){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22229 = meta22229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22230,meta22229__$1){
var self__ = this;
var _22230__$1 = this;
return (new cljs.core.async.t_cljs$core$async22228(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22229__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22230){
var self__ = this;
var _22230__$1 = this;
return self__.meta22229;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22228.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22228.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22229","meta22229",486951897,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22228";

cljs.core.async.t_cljs$core$async22228.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22228");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22228 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22228(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22229){
return (new cljs.core.async.t_cljs$core$async22228(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22229));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22228(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20455__auto___22354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___22354,mults,ensure_mult,p){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___22354,mults,ensure_mult,p){
return (function (state_22302){
var state_val_22303 = (state_22302[(1)]);
if((state_val_22303 === (7))){
var inst_22298 = (state_22302[(2)]);
var state_22302__$1 = state_22302;
var statearr_22304_22355 = state_22302__$1;
(statearr_22304_22355[(2)] = inst_22298);

(statearr_22304_22355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (20))){
var state_22302__$1 = state_22302;
var statearr_22305_22356 = state_22302__$1;
(statearr_22305_22356[(2)] = null);

(statearr_22305_22356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (1))){
var state_22302__$1 = state_22302;
var statearr_22306_22357 = state_22302__$1;
(statearr_22306_22357[(2)] = null);

(statearr_22306_22357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (24))){
var inst_22281 = (state_22302[(7)]);
var inst_22290 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22281);
var state_22302__$1 = state_22302;
var statearr_22307_22358 = state_22302__$1;
(statearr_22307_22358[(2)] = inst_22290);

(statearr_22307_22358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (4))){
var inst_22233 = (state_22302[(8)]);
var inst_22233__$1 = (state_22302[(2)]);
var inst_22234 = (inst_22233__$1 == null);
var state_22302__$1 = (function (){var statearr_22308 = state_22302;
(statearr_22308[(8)] = inst_22233__$1);

return statearr_22308;
})();
if(cljs.core.truth_(inst_22234)){
var statearr_22309_22359 = state_22302__$1;
(statearr_22309_22359[(1)] = (5));

} else {
var statearr_22310_22360 = state_22302__$1;
(statearr_22310_22360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (15))){
var inst_22275 = (state_22302[(2)]);
var state_22302__$1 = state_22302;
var statearr_22311_22361 = state_22302__$1;
(statearr_22311_22361[(2)] = inst_22275);

(statearr_22311_22361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (21))){
var inst_22295 = (state_22302[(2)]);
var state_22302__$1 = (function (){var statearr_22312 = state_22302;
(statearr_22312[(9)] = inst_22295);

return statearr_22312;
})();
var statearr_22313_22362 = state_22302__$1;
(statearr_22313_22362[(2)] = null);

(statearr_22313_22362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (13))){
var inst_22257 = (state_22302[(10)]);
var inst_22259 = cljs.core.chunked_seq_QMARK_.call(null,inst_22257);
var state_22302__$1 = state_22302;
if(inst_22259){
var statearr_22314_22363 = state_22302__$1;
(statearr_22314_22363[(1)] = (16));

} else {
var statearr_22315_22364 = state_22302__$1;
(statearr_22315_22364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (22))){
var inst_22287 = (state_22302[(2)]);
var state_22302__$1 = state_22302;
if(cljs.core.truth_(inst_22287)){
var statearr_22316_22365 = state_22302__$1;
(statearr_22316_22365[(1)] = (23));

} else {
var statearr_22317_22366 = state_22302__$1;
(statearr_22317_22366[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (6))){
var inst_22283 = (state_22302[(11)]);
var inst_22233 = (state_22302[(8)]);
var inst_22281 = (state_22302[(7)]);
var inst_22281__$1 = topic_fn.call(null,inst_22233);
var inst_22282 = cljs.core.deref.call(null,mults);
var inst_22283__$1 = cljs.core.get.call(null,inst_22282,inst_22281__$1);
var state_22302__$1 = (function (){var statearr_22318 = state_22302;
(statearr_22318[(11)] = inst_22283__$1);

(statearr_22318[(7)] = inst_22281__$1);

return statearr_22318;
})();
if(cljs.core.truth_(inst_22283__$1)){
var statearr_22319_22367 = state_22302__$1;
(statearr_22319_22367[(1)] = (19));

} else {
var statearr_22320_22368 = state_22302__$1;
(statearr_22320_22368[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (25))){
var inst_22292 = (state_22302[(2)]);
var state_22302__$1 = state_22302;
var statearr_22321_22369 = state_22302__$1;
(statearr_22321_22369[(2)] = inst_22292);

(statearr_22321_22369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (17))){
var inst_22257 = (state_22302[(10)]);
var inst_22266 = cljs.core.first.call(null,inst_22257);
var inst_22267 = cljs.core.async.muxch_STAR_.call(null,inst_22266);
var inst_22268 = cljs.core.async.close_BANG_.call(null,inst_22267);
var inst_22269 = cljs.core.next.call(null,inst_22257);
var inst_22243 = inst_22269;
var inst_22244 = null;
var inst_22245 = (0);
var inst_22246 = (0);
var state_22302__$1 = (function (){var statearr_22322 = state_22302;
(statearr_22322[(12)] = inst_22268);

(statearr_22322[(13)] = inst_22245);

(statearr_22322[(14)] = inst_22246);

(statearr_22322[(15)] = inst_22244);

(statearr_22322[(16)] = inst_22243);

return statearr_22322;
})();
var statearr_22323_22370 = state_22302__$1;
(statearr_22323_22370[(2)] = null);

(statearr_22323_22370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (3))){
var inst_22300 = (state_22302[(2)]);
var state_22302__$1 = state_22302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22302__$1,inst_22300);
} else {
if((state_val_22303 === (12))){
var inst_22277 = (state_22302[(2)]);
var state_22302__$1 = state_22302;
var statearr_22324_22371 = state_22302__$1;
(statearr_22324_22371[(2)] = inst_22277);

(statearr_22324_22371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (2))){
var state_22302__$1 = state_22302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22302__$1,(4),ch);
} else {
if((state_val_22303 === (23))){
var state_22302__$1 = state_22302;
var statearr_22325_22372 = state_22302__$1;
(statearr_22325_22372[(2)] = null);

(statearr_22325_22372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (19))){
var inst_22283 = (state_22302[(11)]);
var inst_22233 = (state_22302[(8)]);
var inst_22285 = cljs.core.async.muxch_STAR_.call(null,inst_22283);
var state_22302__$1 = state_22302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22302__$1,(22),inst_22285,inst_22233);
} else {
if((state_val_22303 === (11))){
var inst_22243 = (state_22302[(16)]);
var inst_22257 = (state_22302[(10)]);
var inst_22257__$1 = cljs.core.seq.call(null,inst_22243);
var state_22302__$1 = (function (){var statearr_22326 = state_22302;
(statearr_22326[(10)] = inst_22257__$1);

return statearr_22326;
})();
if(inst_22257__$1){
var statearr_22327_22373 = state_22302__$1;
(statearr_22327_22373[(1)] = (13));

} else {
var statearr_22328_22374 = state_22302__$1;
(statearr_22328_22374[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (9))){
var inst_22279 = (state_22302[(2)]);
var state_22302__$1 = state_22302;
var statearr_22329_22375 = state_22302__$1;
(statearr_22329_22375[(2)] = inst_22279);

(statearr_22329_22375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (5))){
var inst_22240 = cljs.core.deref.call(null,mults);
var inst_22241 = cljs.core.vals.call(null,inst_22240);
var inst_22242 = cljs.core.seq.call(null,inst_22241);
var inst_22243 = inst_22242;
var inst_22244 = null;
var inst_22245 = (0);
var inst_22246 = (0);
var state_22302__$1 = (function (){var statearr_22330 = state_22302;
(statearr_22330[(13)] = inst_22245);

(statearr_22330[(14)] = inst_22246);

(statearr_22330[(15)] = inst_22244);

(statearr_22330[(16)] = inst_22243);

return statearr_22330;
})();
var statearr_22331_22376 = state_22302__$1;
(statearr_22331_22376[(2)] = null);

(statearr_22331_22376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (14))){
var state_22302__$1 = state_22302;
var statearr_22335_22377 = state_22302__$1;
(statearr_22335_22377[(2)] = null);

(statearr_22335_22377[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (16))){
var inst_22257 = (state_22302[(10)]);
var inst_22261 = cljs.core.chunk_first.call(null,inst_22257);
var inst_22262 = cljs.core.chunk_rest.call(null,inst_22257);
var inst_22263 = cljs.core.count.call(null,inst_22261);
var inst_22243 = inst_22262;
var inst_22244 = inst_22261;
var inst_22245 = inst_22263;
var inst_22246 = (0);
var state_22302__$1 = (function (){var statearr_22336 = state_22302;
(statearr_22336[(13)] = inst_22245);

(statearr_22336[(14)] = inst_22246);

(statearr_22336[(15)] = inst_22244);

(statearr_22336[(16)] = inst_22243);

return statearr_22336;
})();
var statearr_22337_22378 = state_22302__$1;
(statearr_22337_22378[(2)] = null);

(statearr_22337_22378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (10))){
var inst_22245 = (state_22302[(13)]);
var inst_22246 = (state_22302[(14)]);
var inst_22244 = (state_22302[(15)]);
var inst_22243 = (state_22302[(16)]);
var inst_22251 = cljs.core._nth.call(null,inst_22244,inst_22246);
var inst_22252 = cljs.core.async.muxch_STAR_.call(null,inst_22251);
var inst_22253 = cljs.core.async.close_BANG_.call(null,inst_22252);
var inst_22254 = (inst_22246 + (1));
var tmp22332 = inst_22245;
var tmp22333 = inst_22244;
var tmp22334 = inst_22243;
var inst_22243__$1 = tmp22334;
var inst_22244__$1 = tmp22333;
var inst_22245__$1 = tmp22332;
var inst_22246__$1 = inst_22254;
var state_22302__$1 = (function (){var statearr_22338 = state_22302;
(statearr_22338[(13)] = inst_22245__$1);

(statearr_22338[(14)] = inst_22246__$1);

(statearr_22338[(15)] = inst_22244__$1);

(statearr_22338[(16)] = inst_22243__$1);

(statearr_22338[(17)] = inst_22253);

return statearr_22338;
})();
var statearr_22339_22379 = state_22302__$1;
(statearr_22339_22379[(2)] = null);

(statearr_22339_22379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (18))){
var inst_22272 = (state_22302[(2)]);
var state_22302__$1 = state_22302;
var statearr_22340_22380 = state_22302__$1;
(statearr_22340_22380[(2)] = inst_22272);

(statearr_22340_22380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22303 === (8))){
var inst_22245 = (state_22302[(13)]);
var inst_22246 = (state_22302[(14)]);
var inst_22248 = (inst_22246 < inst_22245);
var inst_22249 = inst_22248;
var state_22302__$1 = state_22302;
if(cljs.core.truth_(inst_22249)){
var statearr_22341_22381 = state_22302__$1;
(statearr_22341_22381[(1)] = (10));

} else {
var statearr_22342_22382 = state_22302__$1;
(statearr_22342_22382[(1)] = (11));

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
});})(c__20455__auto___22354,mults,ensure_mult,p))
;
return ((function (switch__20343__auto__,c__20455__auto___22354,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_22346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22346[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_22346[(1)] = (1));

return statearr_22346;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_22302){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_22302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e22347){if((e22347 instanceof Object)){
var ex__20347__auto__ = e22347;
var statearr_22348_22383 = state_22302;
(statearr_22348_22383[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22384 = state_22302;
state_22302 = G__22384;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_22302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_22302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___22354,mults,ensure_mult,p))
})();
var state__20457__auto__ = (function (){var statearr_22349 = f__20456__auto__.call(null);
(statearr_22349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___22354);

return statearr_22349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___22354,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22385 = [];
var len__17829__auto___22388 = arguments.length;
var i__17830__auto___22389 = (0);
while(true){
if((i__17830__auto___22389 < len__17829__auto___22388)){
args22385.push((arguments[i__17830__auto___22389]));

var G__22390 = (i__17830__auto___22389 + (1));
i__17830__auto___22389 = G__22390;
continue;
} else {
}
break;
}

var G__22387 = args22385.length;
switch (G__22387) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22385.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22392 = [];
var len__17829__auto___22395 = arguments.length;
var i__17830__auto___22396 = (0);
while(true){
if((i__17830__auto___22396 < len__17829__auto___22395)){
args22392.push((arguments[i__17830__auto___22396]));

var G__22397 = (i__17830__auto___22396 + (1));
i__17830__auto___22396 = G__22397;
continue;
} else {
}
break;
}

var G__22394 = args22392.length;
switch (G__22394) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22392.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22399 = [];
var len__17829__auto___22470 = arguments.length;
var i__17830__auto___22471 = (0);
while(true){
if((i__17830__auto___22471 < len__17829__auto___22470)){
args22399.push((arguments[i__17830__auto___22471]));

var G__22472 = (i__17830__auto___22471 + (1));
i__17830__auto___22471 = G__22472;
continue;
} else {
}
break;
}

var G__22401 = args22399.length;
switch (G__22401) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22399.length)].join('')));

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
var c__20455__auto___22474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___22474,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___22474,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22440){
var state_val_22441 = (state_22440[(1)]);
if((state_val_22441 === (7))){
var state_22440__$1 = state_22440;
var statearr_22442_22475 = state_22440__$1;
(statearr_22442_22475[(2)] = null);

(statearr_22442_22475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (1))){
var state_22440__$1 = state_22440;
var statearr_22443_22476 = state_22440__$1;
(statearr_22443_22476[(2)] = null);

(statearr_22443_22476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (4))){
var inst_22404 = (state_22440[(7)]);
var inst_22406 = (inst_22404 < cnt);
var state_22440__$1 = state_22440;
if(cljs.core.truth_(inst_22406)){
var statearr_22444_22477 = state_22440__$1;
(statearr_22444_22477[(1)] = (6));

} else {
var statearr_22445_22478 = state_22440__$1;
(statearr_22445_22478[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (15))){
var inst_22436 = (state_22440[(2)]);
var state_22440__$1 = state_22440;
var statearr_22446_22479 = state_22440__$1;
(statearr_22446_22479[(2)] = inst_22436);

(statearr_22446_22479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (13))){
var inst_22429 = cljs.core.async.close_BANG_.call(null,out);
var state_22440__$1 = state_22440;
var statearr_22447_22480 = state_22440__$1;
(statearr_22447_22480[(2)] = inst_22429);

(statearr_22447_22480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (6))){
var state_22440__$1 = state_22440;
var statearr_22448_22481 = state_22440__$1;
(statearr_22448_22481[(2)] = null);

(statearr_22448_22481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (3))){
var inst_22438 = (state_22440[(2)]);
var state_22440__$1 = state_22440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22440__$1,inst_22438);
} else {
if((state_val_22441 === (12))){
var inst_22426 = (state_22440[(8)]);
var inst_22426__$1 = (state_22440[(2)]);
var inst_22427 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22426__$1);
var state_22440__$1 = (function (){var statearr_22449 = state_22440;
(statearr_22449[(8)] = inst_22426__$1);

return statearr_22449;
})();
if(cljs.core.truth_(inst_22427)){
var statearr_22450_22482 = state_22440__$1;
(statearr_22450_22482[(1)] = (13));

} else {
var statearr_22451_22483 = state_22440__$1;
(statearr_22451_22483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (2))){
var inst_22403 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22404 = (0);
var state_22440__$1 = (function (){var statearr_22452 = state_22440;
(statearr_22452[(9)] = inst_22403);

(statearr_22452[(7)] = inst_22404);

return statearr_22452;
})();
var statearr_22453_22484 = state_22440__$1;
(statearr_22453_22484[(2)] = null);

(statearr_22453_22484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (11))){
var inst_22404 = (state_22440[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22440,(10),Object,null,(9));
var inst_22413 = chs__$1.call(null,inst_22404);
var inst_22414 = done.call(null,inst_22404);
var inst_22415 = cljs.core.async.take_BANG_.call(null,inst_22413,inst_22414);
var state_22440__$1 = state_22440;
var statearr_22454_22485 = state_22440__$1;
(statearr_22454_22485[(2)] = inst_22415);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (9))){
var inst_22404 = (state_22440[(7)]);
var inst_22417 = (state_22440[(2)]);
var inst_22418 = (inst_22404 + (1));
var inst_22404__$1 = inst_22418;
var state_22440__$1 = (function (){var statearr_22455 = state_22440;
(statearr_22455[(10)] = inst_22417);

(statearr_22455[(7)] = inst_22404__$1);

return statearr_22455;
})();
var statearr_22456_22486 = state_22440__$1;
(statearr_22456_22486[(2)] = null);

(statearr_22456_22486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (5))){
var inst_22424 = (state_22440[(2)]);
var state_22440__$1 = (function (){var statearr_22457 = state_22440;
(statearr_22457[(11)] = inst_22424);

return statearr_22457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22440__$1,(12),dchan);
} else {
if((state_val_22441 === (14))){
var inst_22426 = (state_22440[(8)]);
var inst_22431 = cljs.core.apply.call(null,f,inst_22426);
var state_22440__$1 = state_22440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22440__$1,(16),out,inst_22431);
} else {
if((state_val_22441 === (16))){
var inst_22433 = (state_22440[(2)]);
var state_22440__$1 = (function (){var statearr_22458 = state_22440;
(statearr_22458[(12)] = inst_22433);

return statearr_22458;
})();
var statearr_22459_22487 = state_22440__$1;
(statearr_22459_22487[(2)] = null);

(statearr_22459_22487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (10))){
var inst_22408 = (state_22440[(2)]);
var inst_22409 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22440__$1 = (function (){var statearr_22460 = state_22440;
(statearr_22460[(13)] = inst_22408);

return statearr_22460;
})();
var statearr_22461_22488 = state_22440__$1;
(statearr_22461_22488[(2)] = inst_22409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22441 === (8))){
var inst_22422 = (state_22440[(2)]);
var state_22440__$1 = state_22440;
var statearr_22462_22489 = state_22440__$1;
(statearr_22462_22489[(2)] = inst_22422);

(statearr_22462_22489[(1)] = (5));


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
});})(c__20455__auto___22474,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20343__auto__,c__20455__auto___22474,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_22466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22466[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_22466[(1)] = (1));

return statearr_22466;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_22440){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_22440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e22467){if((e22467 instanceof Object)){
var ex__20347__auto__ = e22467;
var statearr_22468_22490 = state_22440;
(statearr_22468_22490[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22491 = state_22440;
state_22440 = G__22491;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_22440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_22440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___22474,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20457__auto__ = (function (){var statearr_22469 = f__20456__auto__.call(null);
(statearr_22469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___22474);

return statearr_22469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___22474,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22493 = [];
var len__17829__auto___22549 = arguments.length;
var i__17830__auto___22550 = (0);
while(true){
if((i__17830__auto___22550 < len__17829__auto___22549)){
args22493.push((arguments[i__17830__auto___22550]));

var G__22551 = (i__17830__auto___22550 + (1));
i__17830__auto___22550 = G__22551;
continue;
} else {
}
break;
}

var G__22495 = args22493.length;
switch (G__22495) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22493.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20455__auto___22553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___22553,out){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___22553,out){
return (function (state_22525){
var state_val_22526 = (state_22525[(1)]);
if((state_val_22526 === (7))){
var inst_22505 = (state_22525[(7)]);
var inst_22504 = (state_22525[(8)]);
var inst_22504__$1 = (state_22525[(2)]);
var inst_22505__$1 = cljs.core.nth.call(null,inst_22504__$1,(0),null);
var inst_22506 = cljs.core.nth.call(null,inst_22504__$1,(1),null);
var inst_22507 = (inst_22505__$1 == null);
var state_22525__$1 = (function (){var statearr_22527 = state_22525;
(statearr_22527[(9)] = inst_22506);

(statearr_22527[(7)] = inst_22505__$1);

(statearr_22527[(8)] = inst_22504__$1);

return statearr_22527;
})();
if(cljs.core.truth_(inst_22507)){
var statearr_22528_22554 = state_22525__$1;
(statearr_22528_22554[(1)] = (8));

} else {
var statearr_22529_22555 = state_22525__$1;
(statearr_22529_22555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22526 === (1))){
var inst_22496 = cljs.core.vec.call(null,chs);
var inst_22497 = inst_22496;
var state_22525__$1 = (function (){var statearr_22530 = state_22525;
(statearr_22530[(10)] = inst_22497);

return statearr_22530;
})();
var statearr_22531_22556 = state_22525__$1;
(statearr_22531_22556[(2)] = null);

(statearr_22531_22556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22526 === (4))){
var inst_22497 = (state_22525[(10)]);
var state_22525__$1 = state_22525;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22525__$1,(7),inst_22497);
} else {
if((state_val_22526 === (6))){
var inst_22521 = (state_22525[(2)]);
var state_22525__$1 = state_22525;
var statearr_22532_22557 = state_22525__$1;
(statearr_22532_22557[(2)] = inst_22521);

(statearr_22532_22557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22526 === (3))){
var inst_22523 = (state_22525[(2)]);
var state_22525__$1 = state_22525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22525__$1,inst_22523);
} else {
if((state_val_22526 === (2))){
var inst_22497 = (state_22525[(10)]);
var inst_22499 = cljs.core.count.call(null,inst_22497);
var inst_22500 = (inst_22499 > (0));
var state_22525__$1 = state_22525;
if(cljs.core.truth_(inst_22500)){
var statearr_22534_22558 = state_22525__$1;
(statearr_22534_22558[(1)] = (4));

} else {
var statearr_22535_22559 = state_22525__$1;
(statearr_22535_22559[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22526 === (11))){
var inst_22497 = (state_22525[(10)]);
var inst_22514 = (state_22525[(2)]);
var tmp22533 = inst_22497;
var inst_22497__$1 = tmp22533;
var state_22525__$1 = (function (){var statearr_22536 = state_22525;
(statearr_22536[(11)] = inst_22514);

(statearr_22536[(10)] = inst_22497__$1);

return statearr_22536;
})();
var statearr_22537_22560 = state_22525__$1;
(statearr_22537_22560[(2)] = null);

(statearr_22537_22560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22526 === (9))){
var inst_22505 = (state_22525[(7)]);
var state_22525__$1 = state_22525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22525__$1,(11),out,inst_22505);
} else {
if((state_val_22526 === (5))){
var inst_22519 = cljs.core.async.close_BANG_.call(null,out);
var state_22525__$1 = state_22525;
var statearr_22538_22561 = state_22525__$1;
(statearr_22538_22561[(2)] = inst_22519);

(statearr_22538_22561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22526 === (10))){
var inst_22517 = (state_22525[(2)]);
var state_22525__$1 = state_22525;
var statearr_22539_22562 = state_22525__$1;
(statearr_22539_22562[(2)] = inst_22517);

(statearr_22539_22562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22526 === (8))){
var inst_22506 = (state_22525[(9)]);
var inst_22505 = (state_22525[(7)]);
var inst_22504 = (state_22525[(8)]);
var inst_22497 = (state_22525[(10)]);
var inst_22509 = (function (){var cs = inst_22497;
var vec__22502 = inst_22504;
var v = inst_22505;
var c = inst_22506;
return ((function (cs,vec__22502,v,c,inst_22506,inst_22505,inst_22504,inst_22497,state_val_22526,c__20455__auto___22553,out){
return (function (p1__22492_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22492_SHARP_);
});
;})(cs,vec__22502,v,c,inst_22506,inst_22505,inst_22504,inst_22497,state_val_22526,c__20455__auto___22553,out))
})();
var inst_22510 = cljs.core.filterv.call(null,inst_22509,inst_22497);
var inst_22497__$1 = inst_22510;
var state_22525__$1 = (function (){var statearr_22540 = state_22525;
(statearr_22540[(10)] = inst_22497__$1);

return statearr_22540;
})();
var statearr_22541_22563 = state_22525__$1;
(statearr_22541_22563[(2)] = null);

(statearr_22541_22563[(1)] = (2));


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
});})(c__20455__auto___22553,out))
;
return ((function (switch__20343__auto__,c__20455__auto___22553,out){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_22545 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22545[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_22545[(1)] = (1));

return statearr_22545;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_22525){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_22525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e22546){if((e22546 instanceof Object)){
var ex__20347__auto__ = e22546;
var statearr_22547_22564 = state_22525;
(statearr_22547_22564[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22565 = state_22525;
state_22525 = G__22565;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_22525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_22525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___22553,out))
})();
var state__20457__auto__ = (function (){var statearr_22548 = f__20456__auto__.call(null);
(statearr_22548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___22553);

return statearr_22548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___22553,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22566 = [];
var len__17829__auto___22615 = arguments.length;
var i__17830__auto___22616 = (0);
while(true){
if((i__17830__auto___22616 < len__17829__auto___22615)){
args22566.push((arguments[i__17830__auto___22616]));

var G__22617 = (i__17830__auto___22616 + (1));
i__17830__auto___22616 = G__22617;
continue;
} else {
}
break;
}

var G__22568 = args22566.length;
switch (G__22568) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22566.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20455__auto___22619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___22619,out){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___22619,out){
return (function (state_22592){
var state_val_22593 = (state_22592[(1)]);
if((state_val_22593 === (7))){
var inst_22574 = (state_22592[(7)]);
var inst_22574__$1 = (state_22592[(2)]);
var inst_22575 = (inst_22574__$1 == null);
var inst_22576 = cljs.core.not.call(null,inst_22575);
var state_22592__$1 = (function (){var statearr_22594 = state_22592;
(statearr_22594[(7)] = inst_22574__$1);

return statearr_22594;
})();
if(inst_22576){
var statearr_22595_22620 = state_22592__$1;
(statearr_22595_22620[(1)] = (8));

} else {
var statearr_22596_22621 = state_22592__$1;
(statearr_22596_22621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22593 === (1))){
var inst_22569 = (0);
var state_22592__$1 = (function (){var statearr_22597 = state_22592;
(statearr_22597[(8)] = inst_22569);

return statearr_22597;
})();
var statearr_22598_22622 = state_22592__$1;
(statearr_22598_22622[(2)] = null);

(statearr_22598_22622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22593 === (4))){
var state_22592__$1 = state_22592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22592__$1,(7),ch);
} else {
if((state_val_22593 === (6))){
var inst_22587 = (state_22592[(2)]);
var state_22592__$1 = state_22592;
var statearr_22599_22623 = state_22592__$1;
(statearr_22599_22623[(2)] = inst_22587);

(statearr_22599_22623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22593 === (3))){
var inst_22589 = (state_22592[(2)]);
var inst_22590 = cljs.core.async.close_BANG_.call(null,out);
var state_22592__$1 = (function (){var statearr_22600 = state_22592;
(statearr_22600[(9)] = inst_22589);

return statearr_22600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22592__$1,inst_22590);
} else {
if((state_val_22593 === (2))){
var inst_22569 = (state_22592[(8)]);
var inst_22571 = (inst_22569 < n);
var state_22592__$1 = state_22592;
if(cljs.core.truth_(inst_22571)){
var statearr_22601_22624 = state_22592__$1;
(statearr_22601_22624[(1)] = (4));

} else {
var statearr_22602_22625 = state_22592__$1;
(statearr_22602_22625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22593 === (11))){
var inst_22569 = (state_22592[(8)]);
var inst_22579 = (state_22592[(2)]);
var inst_22580 = (inst_22569 + (1));
var inst_22569__$1 = inst_22580;
var state_22592__$1 = (function (){var statearr_22603 = state_22592;
(statearr_22603[(10)] = inst_22579);

(statearr_22603[(8)] = inst_22569__$1);

return statearr_22603;
})();
var statearr_22604_22626 = state_22592__$1;
(statearr_22604_22626[(2)] = null);

(statearr_22604_22626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22593 === (9))){
var state_22592__$1 = state_22592;
var statearr_22605_22627 = state_22592__$1;
(statearr_22605_22627[(2)] = null);

(statearr_22605_22627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22593 === (5))){
var state_22592__$1 = state_22592;
var statearr_22606_22628 = state_22592__$1;
(statearr_22606_22628[(2)] = null);

(statearr_22606_22628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22593 === (10))){
var inst_22584 = (state_22592[(2)]);
var state_22592__$1 = state_22592;
var statearr_22607_22629 = state_22592__$1;
(statearr_22607_22629[(2)] = inst_22584);

(statearr_22607_22629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22593 === (8))){
var inst_22574 = (state_22592[(7)]);
var state_22592__$1 = state_22592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22592__$1,(11),out,inst_22574);
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
});})(c__20455__auto___22619,out))
;
return ((function (switch__20343__auto__,c__20455__auto___22619,out){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_22611 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22611[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_22611[(1)] = (1));

return statearr_22611;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_22592){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_22592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e22612){if((e22612 instanceof Object)){
var ex__20347__auto__ = e22612;
var statearr_22613_22630 = state_22592;
(statearr_22613_22630[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22631 = state_22592;
state_22592 = G__22631;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_22592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_22592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___22619,out))
})();
var state__20457__auto__ = (function (){var statearr_22614 = f__20456__auto__.call(null);
(statearr_22614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___22619);

return statearr_22614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___22619,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22639 = (function (map_LT_,f,ch,meta22640){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22640 = meta22640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22641,meta22640__$1){
var self__ = this;
var _22641__$1 = this;
return (new cljs.core.async.t_cljs$core$async22639(self__.map_LT_,self__.f,self__.ch,meta22640__$1));
});

cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22641){
var self__ = this;
var _22641__$1 = this;
return self__.meta22640;
});

cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22642 = (function (map_LT_,f,ch,meta22640,_,fn1,meta22643){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22640 = meta22640;
this._ = _;
this.fn1 = fn1;
this.meta22643 = meta22643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22644,meta22643__$1){
var self__ = this;
var _22644__$1 = this;
return (new cljs.core.async.t_cljs$core$async22642(self__.map_LT_,self__.f,self__.ch,self__.meta22640,self__._,self__.fn1,meta22643__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22644){
var self__ = this;
var _22644__$1 = this;
return self__.meta22643;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22632_SHARP_){
return f1.call(null,(((p1__22632_SHARP_ == null))?null:self__.f.call(null,p1__22632_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22642.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22640","meta22640",2096819139,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22639","cljs.core.async/t_cljs$core$async22639",207413851,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22643","meta22643",1582062864,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22642";

cljs.core.async.t_cljs$core$async22642.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22642");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22642 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22642(map_LT___$1,f__$1,ch__$1,meta22640__$1,___$2,fn1__$1,meta22643){
return (new cljs.core.async.t_cljs$core$async22642(map_LT___$1,f__$1,ch__$1,meta22640__$1,___$2,fn1__$1,meta22643));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22642(self__.map_LT_,self__.f,self__.ch,self__.meta22640,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22640","meta22640",2096819139,null)], null);
});

cljs.core.async.t_cljs$core$async22639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22639";

cljs.core.async.t_cljs$core$async22639.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22639");
});

cljs.core.async.__GT_t_cljs$core$async22639 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22639(map_LT___$1,f__$1,ch__$1,meta22640){
return (new cljs.core.async.t_cljs$core$async22639(map_LT___$1,f__$1,ch__$1,meta22640));
});

}

return (new cljs.core.async.t_cljs$core$async22639(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22648 = (function (map_GT_,f,ch,meta22649){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22649 = meta22649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22650,meta22649__$1){
var self__ = this;
var _22650__$1 = this;
return (new cljs.core.async.t_cljs$core$async22648(self__.map_GT_,self__.f,self__.ch,meta22649__$1));
});

cljs.core.async.t_cljs$core$async22648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22650){
var self__ = this;
var _22650__$1 = this;
return self__.meta22649;
});

cljs.core.async.t_cljs$core$async22648.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22648.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22648.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22649","meta22649",-1095999126,null)], null);
});

cljs.core.async.t_cljs$core$async22648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22648";

cljs.core.async.t_cljs$core$async22648.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22648");
});

cljs.core.async.__GT_t_cljs$core$async22648 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22648(map_GT___$1,f__$1,ch__$1,meta22649){
return (new cljs.core.async.t_cljs$core$async22648(map_GT___$1,f__$1,ch__$1,meta22649));
});

}

return (new cljs.core.async.t_cljs$core$async22648(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22654 = (function (filter_GT_,p,ch,meta22655){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22655 = meta22655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22656,meta22655__$1){
var self__ = this;
var _22656__$1 = this;
return (new cljs.core.async.t_cljs$core$async22654(self__.filter_GT_,self__.p,self__.ch,meta22655__$1));
});

cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22656){
var self__ = this;
var _22656__$1 = this;
return self__.meta22655;
});

cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22655","meta22655",-869439774,null)], null);
});

cljs.core.async.t_cljs$core$async22654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22654";

cljs.core.async.t_cljs$core$async22654.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22654");
});

cljs.core.async.__GT_t_cljs$core$async22654 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22654(filter_GT___$1,p__$1,ch__$1,meta22655){
return (new cljs.core.async.t_cljs$core$async22654(filter_GT___$1,p__$1,ch__$1,meta22655));
});

}

return (new cljs.core.async.t_cljs$core$async22654(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22657 = [];
var len__17829__auto___22701 = arguments.length;
var i__17830__auto___22702 = (0);
while(true){
if((i__17830__auto___22702 < len__17829__auto___22701)){
args22657.push((arguments[i__17830__auto___22702]));

var G__22703 = (i__17830__auto___22702 + (1));
i__17830__auto___22702 = G__22703;
continue;
} else {
}
break;
}

var G__22659 = args22657.length;
switch (G__22659) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22657.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20455__auto___22705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___22705,out){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___22705,out){
return (function (state_22680){
var state_val_22681 = (state_22680[(1)]);
if((state_val_22681 === (7))){
var inst_22676 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22682_22706 = state_22680__$1;
(statearr_22682_22706[(2)] = inst_22676);

(statearr_22682_22706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (1))){
var state_22680__$1 = state_22680;
var statearr_22683_22707 = state_22680__$1;
(statearr_22683_22707[(2)] = null);

(statearr_22683_22707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (4))){
var inst_22662 = (state_22680[(7)]);
var inst_22662__$1 = (state_22680[(2)]);
var inst_22663 = (inst_22662__$1 == null);
var state_22680__$1 = (function (){var statearr_22684 = state_22680;
(statearr_22684[(7)] = inst_22662__$1);

return statearr_22684;
})();
if(cljs.core.truth_(inst_22663)){
var statearr_22685_22708 = state_22680__$1;
(statearr_22685_22708[(1)] = (5));

} else {
var statearr_22686_22709 = state_22680__$1;
(statearr_22686_22709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (6))){
var inst_22662 = (state_22680[(7)]);
var inst_22667 = p.call(null,inst_22662);
var state_22680__$1 = state_22680;
if(cljs.core.truth_(inst_22667)){
var statearr_22687_22710 = state_22680__$1;
(statearr_22687_22710[(1)] = (8));

} else {
var statearr_22688_22711 = state_22680__$1;
(statearr_22688_22711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (3))){
var inst_22678 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22680__$1,inst_22678);
} else {
if((state_val_22681 === (2))){
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22680__$1,(4),ch);
} else {
if((state_val_22681 === (11))){
var inst_22670 = (state_22680[(2)]);
var state_22680__$1 = state_22680;
var statearr_22689_22712 = state_22680__$1;
(statearr_22689_22712[(2)] = inst_22670);

(statearr_22689_22712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (9))){
var state_22680__$1 = state_22680;
var statearr_22690_22713 = state_22680__$1;
(statearr_22690_22713[(2)] = null);

(statearr_22690_22713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (5))){
var inst_22665 = cljs.core.async.close_BANG_.call(null,out);
var state_22680__$1 = state_22680;
var statearr_22691_22714 = state_22680__$1;
(statearr_22691_22714[(2)] = inst_22665);

(statearr_22691_22714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (10))){
var inst_22673 = (state_22680[(2)]);
var state_22680__$1 = (function (){var statearr_22692 = state_22680;
(statearr_22692[(8)] = inst_22673);

return statearr_22692;
})();
var statearr_22693_22715 = state_22680__$1;
(statearr_22693_22715[(2)] = null);

(statearr_22693_22715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22681 === (8))){
var inst_22662 = (state_22680[(7)]);
var state_22680__$1 = state_22680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22680__$1,(11),out,inst_22662);
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
});})(c__20455__auto___22705,out))
;
return ((function (switch__20343__auto__,c__20455__auto___22705,out){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_22697 = [null,null,null,null,null,null,null,null,null];
(statearr_22697[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_22697[(1)] = (1));

return statearr_22697;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_22680){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_22680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e22698){if((e22698 instanceof Object)){
var ex__20347__auto__ = e22698;
var statearr_22699_22716 = state_22680;
(statearr_22699_22716[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22717 = state_22680;
state_22680 = G__22717;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_22680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_22680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___22705,out))
})();
var state__20457__auto__ = (function (){var statearr_22700 = f__20456__auto__.call(null);
(statearr_22700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___22705);

return statearr_22700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___22705,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22718 = [];
var len__17829__auto___22721 = arguments.length;
var i__17830__auto___22722 = (0);
while(true){
if((i__17830__auto___22722 < len__17829__auto___22721)){
args22718.push((arguments[i__17830__auto___22722]));

var G__22723 = (i__17830__auto___22722 + (1));
i__17830__auto___22722 = G__22723;
continue;
} else {
}
break;
}

var G__22720 = args22718.length;
switch (G__22720) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22718.length)].join('')));

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
var c__20455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto__){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto__){
return (function (state_22890){
var state_val_22891 = (state_22890[(1)]);
if((state_val_22891 === (7))){
var inst_22886 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22892_22933 = state_22890__$1;
(statearr_22892_22933[(2)] = inst_22886);

(statearr_22892_22933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (20))){
var inst_22856 = (state_22890[(7)]);
var inst_22867 = (state_22890[(2)]);
var inst_22868 = cljs.core.next.call(null,inst_22856);
var inst_22842 = inst_22868;
var inst_22843 = null;
var inst_22844 = (0);
var inst_22845 = (0);
var state_22890__$1 = (function (){var statearr_22893 = state_22890;
(statearr_22893[(8)] = inst_22843);

(statearr_22893[(9)] = inst_22842);

(statearr_22893[(10)] = inst_22845);

(statearr_22893[(11)] = inst_22867);

(statearr_22893[(12)] = inst_22844);

return statearr_22893;
})();
var statearr_22894_22934 = state_22890__$1;
(statearr_22894_22934[(2)] = null);

(statearr_22894_22934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (1))){
var state_22890__$1 = state_22890;
var statearr_22895_22935 = state_22890__$1;
(statearr_22895_22935[(2)] = null);

(statearr_22895_22935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (4))){
var inst_22831 = (state_22890[(13)]);
var inst_22831__$1 = (state_22890[(2)]);
var inst_22832 = (inst_22831__$1 == null);
var state_22890__$1 = (function (){var statearr_22896 = state_22890;
(statearr_22896[(13)] = inst_22831__$1);

return statearr_22896;
})();
if(cljs.core.truth_(inst_22832)){
var statearr_22897_22936 = state_22890__$1;
(statearr_22897_22936[(1)] = (5));

} else {
var statearr_22898_22937 = state_22890__$1;
(statearr_22898_22937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (15))){
var state_22890__$1 = state_22890;
var statearr_22902_22938 = state_22890__$1;
(statearr_22902_22938[(2)] = null);

(statearr_22902_22938[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (21))){
var state_22890__$1 = state_22890;
var statearr_22903_22939 = state_22890__$1;
(statearr_22903_22939[(2)] = null);

(statearr_22903_22939[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (13))){
var inst_22843 = (state_22890[(8)]);
var inst_22842 = (state_22890[(9)]);
var inst_22845 = (state_22890[(10)]);
var inst_22844 = (state_22890[(12)]);
var inst_22852 = (state_22890[(2)]);
var inst_22853 = (inst_22845 + (1));
var tmp22899 = inst_22843;
var tmp22900 = inst_22842;
var tmp22901 = inst_22844;
var inst_22842__$1 = tmp22900;
var inst_22843__$1 = tmp22899;
var inst_22844__$1 = tmp22901;
var inst_22845__$1 = inst_22853;
var state_22890__$1 = (function (){var statearr_22904 = state_22890;
(statearr_22904[(8)] = inst_22843__$1);

(statearr_22904[(9)] = inst_22842__$1);

(statearr_22904[(10)] = inst_22845__$1);

(statearr_22904[(14)] = inst_22852);

(statearr_22904[(12)] = inst_22844__$1);

return statearr_22904;
})();
var statearr_22905_22940 = state_22890__$1;
(statearr_22905_22940[(2)] = null);

(statearr_22905_22940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (22))){
var state_22890__$1 = state_22890;
var statearr_22906_22941 = state_22890__$1;
(statearr_22906_22941[(2)] = null);

(statearr_22906_22941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (6))){
var inst_22831 = (state_22890[(13)]);
var inst_22840 = f.call(null,inst_22831);
var inst_22841 = cljs.core.seq.call(null,inst_22840);
var inst_22842 = inst_22841;
var inst_22843 = null;
var inst_22844 = (0);
var inst_22845 = (0);
var state_22890__$1 = (function (){var statearr_22907 = state_22890;
(statearr_22907[(8)] = inst_22843);

(statearr_22907[(9)] = inst_22842);

(statearr_22907[(10)] = inst_22845);

(statearr_22907[(12)] = inst_22844);

return statearr_22907;
})();
var statearr_22908_22942 = state_22890__$1;
(statearr_22908_22942[(2)] = null);

(statearr_22908_22942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (17))){
var inst_22856 = (state_22890[(7)]);
var inst_22860 = cljs.core.chunk_first.call(null,inst_22856);
var inst_22861 = cljs.core.chunk_rest.call(null,inst_22856);
var inst_22862 = cljs.core.count.call(null,inst_22860);
var inst_22842 = inst_22861;
var inst_22843 = inst_22860;
var inst_22844 = inst_22862;
var inst_22845 = (0);
var state_22890__$1 = (function (){var statearr_22909 = state_22890;
(statearr_22909[(8)] = inst_22843);

(statearr_22909[(9)] = inst_22842);

(statearr_22909[(10)] = inst_22845);

(statearr_22909[(12)] = inst_22844);

return statearr_22909;
})();
var statearr_22910_22943 = state_22890__$1;
(statearr_22910_22943[(2)] = null);

(statearr_22910_22943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (3))){
var inst_22888 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22890__$1,inst_22888);
} else {
if((state_val_22891 === (12))){
var inst_22876 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22911_22944 = state_22890__$1;
(statearr_22911_22944[(2)] = inst_22876);

(statearr_22911_22944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (2))){
var state_22890__$1 = state_22890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22890__$1,(4),in$);
} else {
if((state_val_22891 === (23))){
var inst_22884 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22912_22945 = state_22890__$1;
(statearr_22912_22945[(2)] = inst_22884);

(statearr_22912_22945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (19))){
var inst_22871 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22913_22946 = state_22890__$1;
(statearr_22913_22946[(2)] = inst_22871);

(statearr_22913_22946[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (11))){
var inst_22842 = (state_22890[(9)]);
var inst_22856 = (state_22890[(7)]);
var inst_22856__$1 = cljs.core.seq.call(null,inst_22842);
var state_22890__$1 = (function (){var statearr_22914 = state_22890;
(statearr_22914[(7)] = inst_22856__$1);

return statearr_22914;
})();
if(inst_22856__$1){
var statearr_22915_22947 = state_22890__$1;
(statearr_22915_22947[(1)] = (14));

} else {
var statearr_22916_22948 = state_22890__$1;
(statearr_22916_22948[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (9))){
var inst_22878 = (state_22890[(2)]);
var inst_22879 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22890__$1 = (function (){var statearr_22917 = state_22890;
(statearr_22917[(15)] = inst_22878);

return statearr_22917;
})();
if(cljs.core.truth_(inst_22879)){
var statearr_22918_22949 = state_22890__$1;
(statearr_22918_22949[(1)] = (21));

} else {
var statearr_22919_22950 = state_22890__$1;
(statearr_22919_22950[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (5))){
var inst_22834 = cljs.core.async.close_BANG_.call(null,out);
var state_22890__$1 = state_22890;
var statearr_22920_22951 = state_22890__$1;
(statearr_22920_22951[(2)] = inst_22834);

(statearr_22920_22951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (14))){
var inst_22856 = (state_22890[(7)]);
var inst_22858 = cljs.core.chunked_seq_QMARK_.call(null,inst_22856);
var state_22890__$1 = state_22890;
if(inst_22858){
var statearr_22921_22952 = state_22890__$1;
(statearr_22921_22952[(1)] = (17));

} else {
var statearr_22922_22953 = state_22890__$1;
(statearr_22922_22953[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (16))){
var inst_22874 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22923_22954 = state_22890__$1;
(statearr_22923_22954[(2)] = inst_22874);

(statearr_22923_22954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (10))){
var inst_22843 = (state_22890[(8)]);
var inst_22845 = (state_22890[(10)]);
var inst_22850 = cljs.core._nth.call(null,inst_22843,inst_22845);
var state_22890__$1 = state_22890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22890__$1,(13),out,inst_22850);
} else {
if((state_val_22891 === (18))){
var inst_22856 = (state_22890[(7)]);
var inst_22865 = cljs.core.first.call(null,inst_22856);
var state_22890__$1 = state_22890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22890__$1,(20),out,inst_22865);
} else {
if((state_val_22891 === (8))){
var inst_22845 = (state_22890[(10)]);
var inst_22844 = (state_22890[(12)]);
var inst_22847 = (inst_22845 < inst_22844);
var inst_22848 = inst_22847;
var state_22890__$1 = state_22890;
if(cljs.core.truth_(inst_22848)){
var statearr_22924_22955 = state_22890__$1;
(statearr_22924_22955[(1)] = (10));

} else {
var statearr_22925_22956 = state_22890__$1;
(statearr_22925_22956[(1)] = (11));

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
});})(c__20455__auto__))
;
return ((function (switch__20343__auto__,c__20455__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20344__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20344__auto____0 = (function (){
var statearr_22929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22929[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20344__auto__);

(statearr_22929[(1)] = (1));

return statearr_22929;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20344__auto____1 = (function (state_22890){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_22890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e22930){if((e22930 instanceof Object)){
var ex__20347__auto__ = e22930;
var statearr_22931_22957 = state_22890;
(statearr_22931_22957[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22958 = state_22890;
state_22890 = G__22958;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20344__auto__ = function(state_22890){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20344__auto____1.call(this,state_22890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20344__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20344__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto__))
})();
var state__20457__auto__ = (function (){var statearr_22932 = f__20456__auto__.call(null);
(statearr_22932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto__);

return statearr_22932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto__))
);

return c__20455__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22959 = [];
var len__17829__auto___22962 = arguments.length;
var i__17830__auto___22963 = (0);
while(true){
if((i__17830__auto___22963 < len__17829__auto___22962)){
args22959.push((arguments[i__17830__auto___22963]));

var G__22964 = (i__17830__auto___22963 + (1));
i__17830__auto___22963 = G__22964;
continue;
} else {
}
break;
}

var G__22961 = args22959.length;
switch (G__22961) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22959.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22966 = [];
var len__17829__auto___22969 = arguments.length;
var i__17830__auto___22970 = (0);
while(true){
if((i__17830__auto___22970 < len__17829__auto___22969)){
args22966.push((arguments[i__17830__auto___22970]));

var G__22971 = (i__17830__auto___22970 + (1));
i__17830__auto___22970 = G__22971;
continue;
} else {
}
break;
}

var G__22968 = args22966.length;
switch (G__22968) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22966.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22973 = [];
var len__17829__auto___23024 = arguments.length;
var i__17830__auto___23025 = (0);
while(true){
if((i__17830__auto___23025 < len__17829__auto___23024)){
args22973.push((arguments[i__17830__auto___23025]));

var G__23026 = (i__17830__auto___23025 + (1));
i__17830__auto___23025 = G__23026;
continue;
} else {
}
break;
}

var G__22975 = args22973.length;
switch (G__22975) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22973.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20455__auto___23028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___23028,out){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___23028,out){
return (function (state_22999){
var state_val_23000 = (state_22999[(1)]);
if((state_val_23000 === (7))){
var inst_22994 = (state_22999[(2)]);
var state_22999__$1 = state_22999;
var statearr_23001_23029 = state_22999__$1;
(statearr_23001_23029[(2)] = inst_22994);

(statearr_23001_23029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (1))){
var inst_22976 = null;
var state_22999__$1 = (function (){var statearr_23002 = state_22999;
(statearr_23002[(7)] = inst_22976);

return statearr_23002;
})();
var statearr_23003_23030 = state_22999__$1;
(statearr_23003_23030[(2)] = null);

(statearr_23003_23030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (4))){
var inst_22979 = (state_22999[(8)]);
var inst_22979__$1 = (state_22999[(2)]);
var inst_22980 = (inst_22979__$1 == null);
var inst_22981 = cljs.core.not.call(null,inst_22980);
var state_22999__$1 = (function (){var statearr_23004 = state_22999;
(statearr_23004[(8)] = inst_22979__$1);

return statearr_23004;
})();
if(inst_22981){
var statearr_23005_23031 = state_22999__$1;
(statearr_23005_23031[(1)] = (5));

} else {
var statearr_23006_23032 = state_22999__$1;
(statearr_23006_23032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (6))){
var state_22999__$1 = state_22999;
var statearr_23007_23033 = state_22999__$1;
(statearr_23007_23033[(2)] = null);

(statearr_23007_23033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (3))){
var inst_22996 = (state_22999[(2)]);
var inst_22997 = cljs.core.async.close_BANG_.call(null,out);
var state_22999__$1 = (function (){var statearr_23008 = state_22999;
(statearr_23008[(9)] = inst_22996);

return statearr_23008;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22999__$1,inst_22997);
} else {
if((state_val_23000 === (2))){
var state_22999__$1 = state_22999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22999__$1,(4),ch);
} else {
if((state_val_23000 === (11))){
var inst_22979 = (state_22999[(8)]);
var inst_22988 = (state_22999[(2)]);
var inst_22976 = inst_22979;
var state_22999__$1 = (function (){var statearr_23009 = state_22999;
(statearr_23009[(7)] = inst_22976);

(statearr_23009[(10)] = inst_22988);

return statearr_23009;
})();
var statearr_23010_23034 = state_22999__$1;
(statearr_23010_23034[(2)] = null);

(statearr_23010_23034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (9))){
var inst_22979 = (state_22999[(8)]);
var state_22999__$1 = state_22999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22999__$1,(11),out,inst_22979);
} else {
if((state_val_23000 === (5))){
var inst_22976 = (state_22999[(7)]);
var inst_22979 = (state_22999[(8)]);
var inst_22983 = cljs.core._EQ_.call(null,inst_22979,inst_22976);
var state_22999__$1 = state_22999;
if(inst_22983){
var statearr_23012_23035 = state_22999__$1;
(statearr_23012_23035[(1)] = (8));

} else {
var statearr_23013_23036 = state_22999__$1;
(statearr_23013_23036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (10))){
var inst_22991 = (state_22999[(2)]);
var state_22999__$1 = state_22999;
var statearr_23014_23037 = state_22999__$1;
(statearr_23014_23037[(2)] = inst_22991);

(statearr_23014_23037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23000 === (8))){
var inst_22976 = (state_22999[(7)]);
var tmp23011 = inst_22976;
var inst_22976__$1 = tmp23011;
var state_22999__$1 = (function (){var statearr_23015 = state_22999;
(statearr_23015[(7)] = inst_22976__$1);

return statearr_23015;
})();
var statearr_23016_23038 = state_22999__$1;
(statearr_23016_23038[(2)] = null);

(statearr_23016_23038[(1)] = (2));


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
});})(c__20455__auto___23028,out))
;
return ((function (switch__20343__auto__,c__20455__auto___23028,out){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_23020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23020[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_23020[(1)] = (1));

return statearr_23020;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_22999){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_22999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e23021){if((e23021 instanceof Object)){
var ex__20347__auto__ = e23021;
var statearr_23022_23039 = state_22999;
(statearr_23022_23039[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23040 = state_22999;
state_22999 = G__23040;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_22999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_22999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___23028,out))
})();
var state__20457__auto__ = (function (){var statearr_23023 = f__20456__auto__.call(null);
(statearr_23023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___23028);

return statearr_23023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___23028,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23041 = [];
var len__17829__auto___23111 = arguments.length;
var i__17830__auto___23112 = (0);
while(true){
if((i__17830__auto___23112 < len__17829__auto___23111)){
args23041.push((arguments[i__17830__auto___23112]));

var G__23113 = (i__17830__auto___23112 + (1));
i__17830__auto___23112 = G__23113;
continue;
} else {
}
break;
}

var G__23043 = args23041.length;
switch (G__23043) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23041.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20455__auto___23115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___23115,out){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___23115,out){
return (function (state_23081){
var state_val_23082 = (state_23081[(1)]);
if((state_val_23082 === (7))){
var inst_23077 = (state_23081[(2)]);
var state_23081__$1 = state_23081;
var statearr_23083_23116 = state_23081__$1;
(statearr_23083_23116[(2)] = inst_23077);

(statearr_23083_23116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (1))){
var inst_23044 = (new Array(n));
var inst_23045 = inst_23044;
var inst_23046 = (0);
var state_23081__$1 = (function (){var statearr_23084 = state_23081;
(statearr_23084[(7)] = inst_23045);

(statearr_23084[(8)] = inst_23046);

return statearr_23084;
})();
var statearr_23085_23117 = state_23081__$1;
(statearr_23085_23117[(2)] = null);

(statearr_23085_23117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (4))){
var inst_23049 = (state_23081[(9)]);
var inst_23049__$1 = (state_23081[(2)]);
var inst_23050 = (inst_23049__$1 == null);
var inst_23051 = cljs.core.not.call(null,inst_23050);
var state_23081__$1 = (function (){var statearr_23086 = state_23081;
(statearr_23086[(9)] = inst_23049__$1);

return statearr_23086;
})();
if(inst_23051){
var statearr_23087_23118 = state_23081__$1;
(statearr_23087_23118[(1)] = (5));

} else {
var statearr_23088_23119 = state_23081__$1;
(statearr_23088_23119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (15))){
var inst_23071 = (state_23081[(2)]);
var state_23081__$1 = state_23081;
var statearr_23089_23120 = state_23081__$1;
(statearr_23089_23120[(2)] = inst_23071);

(statearr_23089_23120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (13))){
var state_23081__$1 = state_23081;
var statearr_23090_23121 = state_23081__$1;
(statearr_23090_23121[(2)] = null);

(statearr_23090_23121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (6))){
var inst_23046 = (state_23081[(8)]);
var inst_23067 = (inst_23046 > (0));
var state_23081__$1 = state_23081;
if(cljs.core.truth_(inst_23067)){
var statearr_23091_23122 = state_23081__$1;
(statearr_23091_23122[(1)] = (12));

} else {
var statearr_23092_23123 = state_23081__$1;
(statearr_23092_23123[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (3))){
var inst_23079 = (state_23081[(2)]);
var state_23081__$1 = state_23081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23081__$1,inst_23079);
} else {
if((state_val_23082 === (12))){
var inst_23045 = (state_23081[(7)]);
var inst_23069 = cljs.core.vec.call(null,inst_23045);
var state_23081__$1 = state_23081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23081__$1,(15),out,inst_23069);
} else {
if((state_val_23082 === (2))){
var state_23081__$1 = state_23081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23081__$1,(4),ch);
} else {
if((state_val_23082 === (11))){
var inst_23061 = (state_23081[(2)]);
var inst_23062 = (new Array(n));
var inst_23045 = inst_23062;
var inst_23046 = (0);
var state_23081__$1 = (function (){var statearr_23093 = state_23081;
(statearr_23093[(7)] = inst_23045);

(statearr_23093[(10)] = inst_23061);

(statearr_23093[(8)] = inst_23046);

return statearr_23093;
})();
var statearr_23094_23124 = state_23081__$1;
(statearr_23094_23124[(2)] = null);

(statearr_23094_23124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (9))){
var inst_23045 = (state_23081[(7)]);
var inst_23059 = cljs.core.vec.call(null,inst_23045);
var state_23081__$1 = state_23081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23081__$1,(11),out,inst_23059);
} else {
if((state_val_23082 === (5))){
var inst_23054 = (state_23081[(11)]);
var inst_23045 = (state_23081[(7)]);
var inst_23049 = (state_23081[(9)]);
var inst_23046 = (state_23081[(8)]);
var inst_23053 = (inst_23045[inst_23046] = inst_23049);
var inst_23054__$1 = (inst_23046 + (1));
var inst_23055 = (inst_23054__$1 < n);
var state_23081__$1 = (function (){var statearr_23095 = state_23081;
(statearr_23095[(12)] = inst_23053);

(statearr_23095[(11)] = inst_23054__$1);

return statearr_23095;
})();
if(cljs.core.truth_(inst_23055)){
var statearr_23096_23125 = state_23081__$1;
(statearr_23096_23125[(1)] = (8));

} else {
var statearr_23097_23126 = state_23081__$1;
(statearr_23097_23126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (14))){
var inst_23074 = (state_23081[(2)]);
var inst_23075 = cljs.core.async.close_BANG_.call(null,out);
var state_23081__$1 = (function (){var statearr_23099 = state_23081;
(statearr_23099[(13)] = inst_23074);

return statearr_23099;
})();
var statearr_23100_23127 = state_23081__$1;
(statearr_23100_23127[(2)] = inst_23075);

(statearr_23100_23127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (10))){
var inst_23065 = (state_23081[(2)]);
var state_23081__$1 = state_23081;
var statearr_23101_23128 = state_23081__$1;
(statearr_23101_23128[(2)] = inst_23065);

(statearr_23101_23128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23082 === (8))){
var inst_23054 = (state_23081[(11)]);
var inst_23045 = (state_23081[(7)]);
var tmp23098 = inst_23045;
var inst_23045__$1 = tmp23098;
var inst_23046 = inst_23054;
var state_23081__$1 = (function (){var statearr_23102 = state_23081;
(statearr_23102[(7)] = inst_23045__$1);

(statearr_23102[(8)] = inst_23046);

return statearr_23102;
})();
var statearr_23103_23129 = state_23081__$1;
(statearr_23103_23129[(2)] = null);

(statearr_23103_23129[(1)] = (2));


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
});})(c__20455__auto___23115,out))
;
return ((function (switch__20343__auto__,c__20455__auto___23115,out){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_23107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23107[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_23107[(1)] = (1));

return statearr_23107;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_23081){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_23081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e23108){if((e23108 instanceof Object)){
var ex__20347__auto__ = e23108;
var statearr_23109_23130 = state_23081;
(statearr_23109_23130[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23131 = state_23081;
state_23081 = G__23131;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_23081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_23081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___23115,out))
})();
var state__20457__auto__ = (function (){var statearr_23110 = f__20456__auto__.call(null);
(statearr_23110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___23115);

return statearr_23110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___23115,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23132 = [];
var len__17829__auto___23206 = arguments.length;
var i__17830__auto___23207 = (0);
while(true){
if((i__17830__auto___23207 < len__17829__auto___23206)){
args23132.push((arguments[i__17830__auto___23207]));

var G__23208 = (i__17830__auto___23207 + (1));
i__17830__auto___23207 = G__23208;
continue;
} else {
}
break;
}

var G__23134 = args23132.length;
switch (G__23134) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23132.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20455__auto___23210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___23210,out){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___23210,out){
return (function (state_23176){
var state_val_23177 = (state_23176[(1)]);
if((state_val_23177 === (7))){
var inst_23172 = (state_23176[(2)]);
var state_23176__$1 = state_23176;
var statearr_23178_23211 = state_23176__$1;
(statearr_23178_23211[(2)] = inst_23172);

(statearr_23178_23211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (1))){
var inst_23135 = [];
var inst_23136 = inst_23135;
var inst_23137 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23176__$1 = (function (){var statearr_23179 = state_23176;
(statearr_23179[(7)] = inst_23137);

(statearr_23179[(8)] = inst_23136);

return statearr_23179;
})();
var statearr_23180_23212 = state_23176__$1;
(statearr_23180_23212[(2)] = null);

(statearr_23180_23212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (4))){
var inst_23140 = (state_23176[(9)]);
var inst_23140__$1 = (state_23176[(2)]);
var inst_23141 = (inst_23140__$1 == null);
var inst_23142 = cljs.core.not.call(null,inst_23141);
var state_23176__$1 = (function (){var statearr_23181 = state_23176;
(statearr_23181[(9)] = inst_23140__$1);

return statearr_23181;
})();
if(inst_23142){
var statearr_23182_23213 = state_23176__$1;
(statearr_23182_23213[(1)] = (5));

} else {
var statearr_23183_23214 = state_23176__$1;
(statearr_23183_23214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (15))){
var inst_23166 = (state_23176[(2)]);
var state_23176__$1 = state_23176;
var statearr_23184_23215 = state_23176__$1;
(statearr_23184_23215[(2)] = inst_23166);

(statearr_23184_23215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (13))){
var state_23176__$1 = state_23176;
var statearr_23185_23216 = state_23176__$1;
(statearr_23185_23216[(2)] = null);

(statearr_23185_23216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (6))){
var inst_23136 = (state_23176[(8)]);
var inst_23161 = inst_23136.length;
var inst_23162 = (inst_23161 > (0));
var state_23176__$1 = state_23176;
if(cljs.core.truth_(inst_23162)){
var statearr_23186_23217 = state_23176__$1;
(statearr_23186_23217[(1)] = (12));

} else {
var statearr_23187_23218 = state_23176__$1;
(statearr_23187_23218[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (3))){
var inst_23174 = (state_23176[(2)]);
var state_23176__$1 = state_23176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23176__$1,inst_23174);
} else {
if((state_val_23177 === (12))){
var inst_23136 = (state_23176[(8)]);
var inst_23164 = cljs.core.vec.call(null,inst_23136);
var state_23176__$1 = state_23176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23176__$1,(15),out,inst_23164);
} else {
if((state_val_23177 === (2))){
var state_23176__$1 = state_23176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23176__$1,(4),ch);
} else {
if((state_val_23177 === (11))){
var inst_23144 = (state_23176[(10)]);
var inst_23140 = (state_23176[(9)]);
var inst_23154 = (state_23176[(2)]);
var inst_23155 = [];
var inst_23156 = inst_23155.push(inst_23140);
var inst_23136 = inst_23155;
var inst_23137 = inst_23144;
var state_23176__$1 = (function (){var statearr_23188 = state_23176;
(statearr_23188[(11)] = inst_23156);

(statearr_23188[(7)] = inst_23137);

(statearr_23188[(12)] = inst_23154);

(statearr_23188[(8)] = inst_23136);

return statearr_23188;
})();
var statearr_23189_23219 = state_23176__$1;
(statearr_23189_23219[(2)] = null);

(statearr_23189_23219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (9))){
var inst_23136 = (state_23176[(8)]);
var inst_23152 = cljs.core.vec.call(null,inst_23136);
var state_23176__$1 = state_23176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23176__$1,(11),out,inst_23152);
} else {
if((state_val_23177 === (5))){
var inst_23144 = (state_23176[(10)]);
var inst_23137 = (state_23176[(7)]);
var inst_23140 = (state_23176[(9)]);
var inst_23144__$1 = f.call(null,inst_23140);
var inst_23145 = cljs.core._EQ_.call(null,inst_23144__$1,inst_23137);
var inst_23146 = cljs.core.keyword_identical_QMARK_.call(null,inst_23137,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23147 = (inst_23145) || (inst_23146);
var state_23176__$1 = (function (){var statearr_23190 = state_23176;
(statearr_23190[(10)] = inst_23144__$1);

return statearr_23190;
})();
if(cljs.core.truth_(inst_23147)){
var statearr_23191_23220 = state_23176__$1;
(statearr_23191_23220[(1)] = (8));

} else {
var statearr_23192_23221 = state_23176__$1;
(statearr_23192_23221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (14))){
var inst_23169 = (state_23176[(2)]);
var inst_23170 = cljs.core.async.close_BANG_.call(null,out);
var state_23176__$1 = (function (){var statearr_23194 = state_23176;
(statearr_23194[(13)] = inst_23169);

return statearr_23194;
})();
var statearr_23195_23222 = state_23176__$1;
(statearr_23195_23222[(2)] = inst_23170);

(statearr_23195_23222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (10))){
var inst_23159 = (state_23176[(2)]);
var state_23176__$1 = state_23176;
var statearr_23196_23223 = state_23176__$1;
(statearr_23196_23223[(2)] = inst_23159);

(statearr_23196_23223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23177 === (8))){
var inst_23144 = (state_23176[(10)]);
var inst_23136 = (state_23176[(8)]);
var inst_23140 = (state_23176[(9)]);
var inst_23149 = inst_23136.push(inst_23140);
var tmp23193 = inst_23136;
var inst_23136__$1 = tmp23193;
var inst_23137 = inst_23144;
var state_23176__$1 = (function (){var statearr_23197 = state_23176;
(statearr_23197[(7)] = inst_23137);

(statearr_23197[(8)] = inst_23136__$1);

(statearr_23197[(14)] = inst_23149);

return statearr_23197;
})();
var statearr_23198_23224 = state_23176__$1;
(statearr_23198_23224[(2)] = null);

(statearr_23198_23224[(1)] = (2));


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
});})(c__20455__auto___23210,out))
;
return ((function (switch__20343__auto__,c__20455__auto___23210,out){
return (function() {
var cljs$core$async$state_machine__20344__auto__ = null;
var cljs$core$async$state_machine__20344__auto____0 = (function (){
var statearr_23202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23202[(0)] = cljs$core$async$state_machine__20344__auto__);

(statearr_23202[(1)] = (1));

return statearr_23202;
});
var cljs$core$async$state_machine__20344__auto____1 = (function (state_23176){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_23176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e23203){if((e23203 instanceof Object)){
var ex__20347__auto__ = e23203;
var statearr_23204_23225 = state_23176;
(statearr_23204_23225[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23226 = state_23176;
state_23176 = G__23226;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
cljs$core$async$state_machine__20344__auto__ = function(state_23176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20344__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20344__auto____1.call(this,state_23176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20344__auto____0;
cljs$core$async$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20344__auto____1;
return cljs$core$async$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___23210,out))
})();
var state__20457__auto__ = (function (){var statearr_23205 = f__20456__auto__.call(null);
(statearr_23205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___23210);

return statearr_23205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___23210,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map