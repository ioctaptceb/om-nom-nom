// Compiled by ClojureScript 1.7.170 {}
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
var seq__24422_24436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24423_24437 = null;
var count__24424_24438 = (0);
var i__24425_24439 = (0);
while(true){
if((i__24425_24439 < count__24424_24438)){
var f_24440 = cljs.core._nth.call(null,chunk__24423_24437,i__24425_24439);
cljs.core.println.call(null,"  ",f_24440);

var G__24441 = seq__24422_24436;
var G__24442 = chunk__24423_24437;
var G__24443 = count__24424_24438;
var G__24444 = (i__24425_24439 + (1));
seq__24422_24436 = G__24441;
chunk__24423_24437 = G__24442;
count__24424_24438 = G__24443;
i__24425_24439 = G__24444;
continue;
} else {
var temp__4425__auto___24445 = cljs.core.seq.call(null,seq__24422_24436);
if(temp__4425__auto___24445){
var seq__24422_24446__$1 = temp__4425__auto___24445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24422_24446__$1)){
var c__17574__auto___24447 = cljs.core.chunk_first.call(null,seq__24422_24446__$1);
var G__24448 = cljs.core.chunk_rest.call(null,seq__24422_24446__$1);
var G__24449 = c__17574__auto___24447;
var G__24450 = cljs.core.count.call(null,c__17574__auto___24447);
var G__24451 = (0);
seq__24422_24436 = G__24448;
chunk__24423_24437 = G__24449;
count__24424_24438 = G__24450;
i__24425_24439 = G__24451;
continue;
} else {
var f_24452 = cljs.core.first.call(null,seq__24422_24446__$1);
cljs.core.println.call(null,"  ",f_24452);

var G__24453 = cljs.core.next.call(null,seq__24422_24446__$1);
var G__24454 = null;
var G__24455 = (0);
var G__24456 = (0);
seq__24422_24436 = G__24453;
chunk__24423_24437 = G__24454;
count__24424_24438 = G__24455;
i__24425_24439 = G__24456;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24457 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24457);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24457)))?cljs.core.second.call(null,arglists_24457):arglists_24457));
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
var seq__24426 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24427 = null;
var count__24428 = (0);
var i__24429 = (0);
while(true){
if((i__24429 < count__24428)){
var vec__24430 = cljs.core._nth.call(null,chunk__24427,i__24429);
var name = cljs.core.nth.call(null,vec__24430,(0),null);
var map__24431 = cljs.core.nth.call(null,vec__24430,(1),null);
var map__24431__$1 = ((((!((map__24431 == null)))?((((map__24431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24431):map__24431);
var doc = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24431__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24458 = seq__24426;
var G__24459 = chunk__24427;
var G__24460 = count__24428;
var G__24461 = (i__24429 + (1));
seq__24426 = G__24458;
chunk__24427 = G__24459;
count__24428 = G__24460;
i__24429 = G__24461;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24426);
if(temp__4425__auto__){
var seq__24426__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24426__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24426__$1);
var G__24462 = cljs.core.chunk_rest.call(null,seq__24426__$1);
var G__24463 = c__17574__auto__;
var G__24464 = cljs.core.count.call(null,c__17574__auto__);
var G__24465 = (0);
seq__24426 = G__24462;
chunk__24427 = G__24463;
count__24428 = G__24464;
i__24429 = G__24465;
continue;
} else {
var vec__24433 = cljs.core.first.call(null,seq__24426__$1);
var name = cljs.core.nth.call(null,vec__24433,(0),null);
var map__24434 = cljs.core.nth.call(null,vec__24433,(1),null);
var map__24434__$1 = ((((!((map__24434 == null)))?((((map__24434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24434):map__24434);
var doc = cljs.core.get.call(null,map__24434__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24434__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24466 = cljs.core.next.call(null,seq__24426__$1);
var G__24467 = null;
var G__24468 = (0);
var G__24469 = (0);
seq__24426 = G__24466;
chunk__24427 = G__24467;
count__24428 = G__24468;
i__24429 = G__24469;
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