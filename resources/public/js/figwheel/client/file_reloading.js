// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23398_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23398_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23403 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23404 = null;
var count__23405 = (0);
var i__23406 = (0);
while(true){
if((i__23406 < count__23405)){
var n = cljs.core._nth.call(null,chunk__23404,i__23406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23407 = seq__23403;
var G__23408 = chunk__23404;
var G__23409 = count__23405;
var G__23410 = (i__23406 + (1));
seq__23403 = G__23407;
chunk__23404 = G__23408;
count__23405 = G__23409;
i__23406 = G__23410;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23403);
if(temp__4425__auto__){
var seq__23403__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23403__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__23403__$1);
var G__23411 = cljs.core.chunk_rest.call(null,seq__23403__$1);
var G__23412 = c__17574__auto__;
var G__23413 = cljs.core.count.call(null,c__17574__auto__);
var G__23414 = (0);
seq__23403 = G__23411;
chunk__23404 = G__23412;
count__23405 = G__23413;
i__23406 = G__23414;
continue;
} else {
var n = cljs.core.first.call(null,seq__23403__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23415 = cljs.core.next.call(null,seq__23403__$1);
var G__23416 = null;
var G__23417 = (0);
var G__23418 = (0);
seq__23403 = G__23415;
chunk__23404 = G__23416;
count__23405 = G__23417;
i__23406 = G__23418;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23457_23464 = cljs.core.seq.call(null,deps);
var chunk__23458_23465 = null;
var count__23459_23466 = (0);
var i__23460_23467 = (0);
while(true){
if((i__23460_23467 < count__23459_23466)){
var dep_23468 = cljs.core._nth.call(null,chunk__23458_23465,i__23460_23467);
topo_sort_helper_STAR_.call(null,dep_23468,(depth + (1)),state);

var G__23469 = seq__23457_23464;
var G__23470 = chunk__23458_23465;
var G__23471 = count__23459_23466;
var G__23472 = (i__23460_23467 + (1));
seq__23457_23464 = G__23469;
chunk__23458_23465 = G__23470;
count__23459_23466 = G__23471;
i__23460_23467 = G__23472;
continue;
} else {
var temp__4425__auto___23473 = cljs.core.seq.call(null,seq__23457_23464);
if(temp__4425__auto___23473){
var seq__23457_23474__$1 = temp__4425__auto___23473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23457_23474__$1)){
var c__17574__auto___23475 = cljs.core.chunk_first.call(null,seq__23457_23474__$1);
var G__23476 = cljs.core.chunk_rest.call(null,seq__23457_23474__$1);
var G__23477 = c__17574__auto___23475;
var G__23478 = cljs.core.count.call(null,c__17574__auto___23475);
var G__23479 = (0);
seq__23457_23464 = G__23476;
chunk__23458_23465 = G__23477;
count__23459_23466 = G__23478;
i__23460_23467 = G__23479;
continue;
} else {
var dep_23480 = cljs.core.first.call(null,seq__23457_23474__$1);
topo_sort_helper_STAR_.call(null,dep_23480,(depth + (1)),state);

var G__23481 = cljs.core.next.call(null,seq__23457_23474__$1);
var G__23482 = null;
var G__23483 = (0);
var G__23484 = (0);
seq__23457_23464 = G__23481;
chunk__23458_23465 = G__23482;
count__23459_23466 = G__23483;
i__23460_23467 = G__23484;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23461){
var vec__23463 = p__23461;
var x = cljs.core.nth.call(null,vec__23463,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23463,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23463,x,xs,get_deps__$1){
return (function (p1__23419_SHARP_){
return clojure.set.difference.call(null,p1__23419_SHARP_,x);
});})(vec__23463,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23497 = cljs.core.seq.call(null,provides);
var chunk__23498 = null;
var count__23499 = (0);
var i__23500 = (0);
while(true){
if((i__23500 < count__23499)){
var prov = cljs.core._nth.call(null,chunk__23498,i__23500);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23501_23509 = cljs.core.seq.call(null,requires);
var chunk__23502_23510 = null;
var count__23503_23511 = (0);
var i__23504_23512 = (0);
while(true){
if((i__23504_23512 < count__23503_23511)){
var req_23513 = cljs.core._nth.call(null,chunk__23502_23510,i__23504_23512);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23513,prov);

var G__23514 = seq__23501_23509;
var G__23515 = chunk__23502_23510;
var G__23516 = count__23503_23511;
var G__23517 = (i__23504_23512 + (1));
seq__23501_23509 = G__23514;
chunk__23502_23510 = G__23515;
count__23503_23511 = G__23516;
i__23504_23512 = G__23517;
continue;
} else {
var temp__4425__auto___23518 = cljs.core.seq.call(null,seq__23501_23509);
if(temp__4425__auto___23518){
var seq__23501_23519__$1 = temp__4425__auto___23518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23501_23519__$1)){
var c__17574__auto___23520 = cljs.core.chunk_first.call(null,seq__23501_23519__$1);
var G__23521 = cljs.core.chunk_rest.call(null,seq__23501_23519__$1);
var G__23522 = c__17574__auto___23520;
var G__23523 = cljs.core.count.call(null,c__17574__auto___23520);
var G__23524 = (0);
seq__23501_23509 = G__23521;
chunk__23502_23510 = G__23522;
count__23503_23511 = G__23523;
i__23504_23512 = G__23524;
continue;
} else {
var req_23525 = cljs.core.first.call(null,seq__23501_23519__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23525,prov);

var G__23526 = cljs.core.next.call(null,seq__23501_23519__$1);
var G__23527 = null;
var G__23528 = (0);
var G__23529 = (0);
seq__23501_23509 = G__23526;
chunk__23502_23510 = G__23527;
count__23503_23511 = G__23528;
i__23504_23512 = G__23529;
continue;
}
} else {
}
}
break;
}

var G__23530 = seq__23497;
var G__23531 = chunk__23498;
var G__23532 = count__23499;
var G__23533 = (i__23500 + (1));
seq__23497 = G__23530;
chunk__23498 = G__23531;
count__23499 = G__23532;
i__23500 = G__23533;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23497);
if(temp__4425__auto__){
var seq__23497__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23497__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__23497__$1);
var G__23534 = cljs.core.chunk_rest.call(null,seq__23497__$1);
var G__23535 = c__17574__auto__;
var G__23536 = cljs.core.count.call(null,c__17574__auto__);
var G__23537 = (0);
seq__23497 = G__23534;
chunk__23498 = G__23535;
count__23499 = G__23536;
i__23500 = G__23537;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23497__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23505_23538 = cljs.core.seq.call(null,requires);
var chunk__23506_23539 = null;
var count__23507_23540 = (0);
var i__23508_23541 = (0);
while(true){
if((i__23508_23541 < count__23507_23540)){
var req_23542 = cljs.core._nth.call(null,chunk__23506_23539,i__23508_23541);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23542,prov);

var G__23543 = seq__23505_23538;
var G__23544 = chunk__23506_23539;
var G__23545 = count__23507_23540;
var G__23546 = (i__23508_23541 + (1));
seq__23505_23538 = G__23543;
chunk__23506_23539 = G__23544;
count__23507_23540 = G__23545;
i__23508_23541 = G__23546;
continue;
} else {
var temp__4425__auto___23547__$1 = cljs.core.seq.call(null,seq__23505_23538);
if(temp__4425__auto___23547__$1){
var seq__23505_23548__$1 = temp__4425__auto___23547__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23505_23548__$1)){
var c__17574__auto___23549 = cljs.core.chunk_first.call(null,seq__23505_23548__$1);
var G__23550 = cljs.core.chunk_rest.call(null,seq__23505_23548__$1);
var G__23551 = c__17574__auto___23549;
var G__23552 = cljs.core.count.call(null,c__17574__auto___23549);
var G__23553 = (0);
seq__23505_23538 = G__23550;
chunk__23506_23539 = G__23551;
count__23507_23540 = G__23552;
i__23508_23541 = G__23553;
continue;
} else {
var req_23554 = cljs.core.first.call(null,seq__23505_23548__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23554,prov);

var G__23555 = cljs.core.next.call(null,seq__23505_23548__$1);
var G__23556 = null;
var G__23557 = (0);
var G__23558 = (0);
seq__23505_23538 = G__23555;
chunk__23506_23539 = G__23556;
count__23507_23540 = G__23557;
i__23508_23541 = G__23558;
continue;
}
} else {
}
}
break;
}

var G__23559 = cljs.core.next.call(null,seq__23497__$1);
var G__23560 = null;
var G__23561 = (0);
var G__23562 = (0);
seq__23497 = G__23559;
chunk__23498 = G__23560;
count__23499 = G__23561;
i__23500 = G__23562;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23567_23571 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23568_23572 = null;
var count__23569_23573 = (0);
var i__23570_23574 = (0);
while(true){
if((i__23570_23574 < count__23569_23573)){
var ns_23575 = cljs.core._nth.call(null,chunk__23568_23572,i__23570_23574);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23575);

var G__23576 = seq__23567_23571;
var G__23577 = chunk__23568_23572;
var G__23578 = count__23569_23573;
var G__23579 = (i__23570_23574 + (1));
seq__23567_23571 = G__23576;
chunk__23568_23572 = G__23577;
count__23569_23573 = G__23578;
i__23570_23574 = G__23579;
continue;
} else {
var temp__4425__auto___23580 = cljs.core.seq.call(null,seq__23567_23571);
if(temp__4425__auto___23580){
var seq__23567_23581__$1 = temp__4425__auto___23580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23567_23581__$1)){
var c__17574__auto___23582 = cljs.core.chunk_first.call(null,seq__23567_23581__$1);
var G__23583 = cljs.core.chunk_rest.call(null,seq__23567_23581__$1);
var G__23584 = c__17574__auto___23582;
var G__23585 = cljs.core.count.call(null,c__17574__auto___23582);
var G__23586 = (0);
seq__23567_23571 = G__23583;
chunk__23568_23572 = G__23584;
count__23569_23573 = G__23585;
i__23570_23574 = G__23586;
continue;
} else {
var ns_23587 = cljs.core.first.call(null,seq__23567_23581__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23587);

var G__23588 = cljs.core.next.call(null,seq__23567_23581__$1);
var G__23589 = null;
var G__23590 = (0);
var G__23591 = (0);
seq__23567_23571 = G__23588;
chunk__23568_23572 = G__23589;
count__23569_23573 = G__23590;
i__23570_23574 = G__23591;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23592__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23593__i = 0, G__23593__a = new Array(arguments.length -  0);
while (G__23593__i < G__23593__a.length) {G__23593__a[G__23593__i] = arguments[G__23593__i + 0]; ++G__23593__i;}
  args = new cljs.core.IndexedSeq(G__23593__a,0);
} 
return G__23592__delegate.call(this,args);};
G__23592.cljs$lang$maxFixedArity = 0;
G__23592.cljs$lang$applyTo = (function (arglist__23594){
var args = cljs.core.seq(arglist__23594);
return G__23592__delegate(args);
});
G__23592.cljs$core$IFn$_invoke$arity$variadic = G__23592__delegate;
return G__23592;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23596 = cljs.core._EQ_;
var expr__23597 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23596.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23597))){
var path_parts = ((function (pred__23596,expr__23597){
return (function (p1__23595_SHARP_){
return clojure.string.split.call(null,p1__23595_SHARP_,/[\/\\]/);
});})(pred__23596,expr__23597))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23596,expr__23597){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23599){if((e23599 instanceof Error)){
var e = e23599;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23599;

}
}})());
});
;})(path_parts,sep,root,pred__23596,expr__23597))
} else {
if(cljs.core.truth_(pred__23596.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23597))){
return ((function (pred__23596,expr__23597){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23596,expr__23597){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23596,expr__23597))
);

return deferred.addErrback(((function (deferred,pred__23596,expr__23597){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23596,expr__23597))
);
});
;})(pred__23596,expr__23597))
} else {
return ((function (pred__23596,expr__23597){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23596,expr__23597))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23600,callback){
var map__23603 = p__23600;
var map__23603__$1 = ((((!((map__23603 == null)))?((((map__23603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23603):map__23603);
var file_msg = map__23603__$1;
var request_url = cljs.core.get.call(null,map__23603__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23603,map__23603__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23603,map__23603__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto__){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto__){
return (function (state_23627){
var state_val_23628 = (state_23627[(1)]);
if((state_val_23628 === (7))){
var inst_23623 = (state_23627[(2)]);
var state_23627__$1 = state_23627;
var statearr_23629_23649 = state_23627__$1;
(statearr_23629_23649[(2)] = inst_23623);

(statearr_23629_23649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (1))){
var state_23627__$1 = state_23627;
var statearr_23630_23650 = state_23627__$1;
(statearr_23630_23650[(2)] = null);

(statearr_23630_23650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (4))){
var inst_23607 = (state_23627[(7)]);
var inst_23607__$1 = (state_23627[(2)]);
var state_23627__$1 = (function (){var statearr_23631 = state_23627;
(statearr_23631[(7)] = inst_23607__$1);

return statearr_23631;
})();
if(cljs.core.truth_(inst_23607__$1)){
var statearr_23632_23651 = state_23627__$1;
(statearr_23632_23651[(1)] = (5));

} else {
var statearr_23633_23652 = state_23627__$1;
(statearr_23633_23652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (6))){
var state_23627__$1 = state_23627;
var statearr_23634_23653 = state_23627__$1;
(statearr_23634_23653[(2)] = null);

(statearr_23634_23653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (3))){
var inst_23625 = (state_23627[(2)]);
var state_23627__$1 = state_23627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23627__$1,inst_23625);
} else {
if((state_val_23628 === (2))){
var state_23627__$1 = state_23627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23627__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23628 === (11))){
var inst_23619 = (state_23627[(2)]);
var state_23627__$1 = (function (){var statearr_23635 = state_23627;
(statearr_23635[(8)] = inst_23619);

return statearr_23635;
})();
var statearr_23636_23654 = state_23627__$1;
(statearr_23636_23654[(2)] = null);

(statearr_23636_23654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (9))){
var inst_23613 = (state_23627[(9)]);
var inst_23611 = (state_23627[(10)]);
var inst_23615 = inst_23613.call(null,inst_23611);
var state_23627__$1 = state_23627;
var statearr_23637_23655 = state_23627__$1;
(statearr_23637_23655[(2)] = inst_23615);

(statearr_23637_23655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (5))){
var inst_23607 = (state_23627[(7)]);
var inst_23609 = figwheel.client.file_reloading.blocking_load.call(null,inst_23607);
var state_23627__$1 = state_23627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23627__$1,(8),inst_23609);
} else {
if((state_val_23628 === (10))){
var inst_23611 = (state_23627[(10)]);
var inst_23617 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23611);
var state_23627__$1 = state_23627;
var statearr_23638_23656 = state_23627__$1;
(statearr_23638_23656[(2)] = inst_23617);

(statearr_23638_23656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23628 === (8))){
var inst_23613 = (state_23627[(9)]);
var inst_23607 = (state_23627[(7)]);
var inst_23611 = (state_23627[(2)]);
var inst_23612 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23613__$1 = cljs.core.get.call(null,inst_23612,inst_23607);
var state_23627__$1 = (function (){var statearr_23639 = state_23627;
(statearr_23639[(9)] = inst_23613__$1);

(statearr_23639[(10)] = inst_23611);

return statearr_23639;
})();
if(cljs.core.truth_(inst_23613__$1)){
var statearr_23640_23657 = state_23627__$1;
(statearr_23640_23657[(1)] = (9));

} else {
var statearr_23641_23658 = state_23627__$1;
(statearr_23641_23658[(1)] = (10));

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
});})(c__20455__auto__))
;
return ((function (switch__20343__auto__,c__20455__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20344__auto__ = null;
var figwheel$client$file_reloading$state_machine__20344__auto____0 = (function (){
var statearr_23645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23645[(0)] = figwheel$client$file_reloading$state_machine__20344__auto__);

(statearr_23645[(1)] = (1));

return statearr_23645;
});
var figwheel$client$file_reloading$state_machine__20344__auto____1 = (function (state_23627){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_23627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e23646){if((e23646 instanceof Object)){
var ex__20347__auto__ = e23646;
var statearr_23647_23659 = state_23627;
(statearr_23647_23659[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23660 = state_23627;
state_23627 = G__23660;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20344__auto__ = function(state_23627){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20344__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20344__auto____1.call(this,state_23627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20344__auto____0;
figwheel$client$file_reloading$state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20344__auto____1;
return figwheel$client$file_reloading$state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto__))
})();
var state__20457__auto__ = (function (){var statearr_23648 = f__20456__auto__.call(null);
(statearr_23648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto__);

return statearr_23648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto__))
);

return c__20455__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23661,callback){
var map__23664 = p__23661;
var map__23664__$1 = ((((!((map__23664 == null)))?((((map__23664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23664):map__23664);
var file_msg = map__23664__$1;
var namespace = cljs.core.get.call(null,map__23664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23664,map__23664__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23664,map__23664__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23666){
var map__23669 = p__23666;
var map__23669__$1 = ((((!((map__23669 == null)))?((((map__23669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23669):map__23669);
var file_msg = map__23669__$1;
var namespace = cljs.core.get.call(null,map__23669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23671,callback){
var map__23674 = p__23671;
var map__23674__$1 = ((((!((map__23674 == null)))?((((map__23674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23674):map__23674);
var file_msg = map__23674__$1;
var request_url = cljs.core.get.call(null,map__23674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20455__auto___23762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___23762,out){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___23762,out){
return (function (state_23744){
var state_val_23745 = (state_23744[(1)]);
if((state_val_23745 === (1))){
var inst_23722 = cljs.core.nth.call(null,files,(0),null);
var inst_23723 = cljs.core.nthnext.call(null,files,(1));
var inst_23724 = files;
var state_23744__$1 = (function (){var statearr_23746 = state_23744;
(statearr_23746[(7)] = inst_23722);

(statearr_23746[(8)] = inst_23724);

(statearr_23746[(9)] = inst_23723);

return statearr_23746;
})();
var statearr_23747_23763 = state_23744__$1;
(statearr_23747_23763[(2)] = null);

(statearr_23747_23763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (2))){
var inst_23724 = (state_23744[(8)]);
var inst_23727 = (state_23744[(10)]);
var inst_23727__$1 = cljs.core.nth.call(null,inst_23724,(0),null);
var inst_23728 = cljs.core.nthnext.call(null,inst_23724,(1));
var inst_23729 = (inst_23727__$1 == null);
var inst_23730 = cljs.core.not.call(null,inst_23729);
var state_23744__$1 = (function (){var statearr_23748 = state_23744;
(statearr_23748[(10)] = inst_23727__$1);

(statearr_23748[(11)] = inst_23728);

return statearr_23748;
})();
if(inst_23730){
var statearr_23749_23764 = state_23744__$1;
(statearr_23749_23764[(1)] = (4));

} else {
var statearr_23750_23765 = state_23744__$1;
(statearr_23750_23765[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (3))){
var inst_23742 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23744__$1,inst_23742);
} else {
if((state_val_23745 === (4))){
var inst_23727 = (state_23744[(10)]);
var inst_23732 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23727);
var state_23744__$1 = state_23744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23744__$1,(7),inst_23732);
} else {
if((state_val_23745 === (5))){
var inst_23738 = cljs.core.async.close_BANG_.call(null,out);
var state_23744__$1 = state_23744;
var statearr_23751_23766 = state_23744__$1;
(statearr_23751_23766[(2)] = inst_23738);

(statearr_23751_23766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (6))){
var inst_23740 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
var statearr_23752_23767 = state_23744__$1;
(statearr_23752_23767[(2)] = inst_23740);

(statearr_23752_23767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (7))){
var inst_23728 = (state_23744[(11)]);
var inst_23734 = (state_23744[(2)]);
var inst_23735 = cljs.core.async.put_BANG_.call(null,out,inst_23734);
var inst_23724 = inst_23728;
var state_23744__$1 = (function (){var statearr_23753 = state_23744;
(statearr_23753[(8)] = inst_23724);

(statearr_23753[(12)] = inst_23735);

return statearr_23753;
})();
var statearr_23754_23768 = state_23744__$1;
(statearr_23754_23768[(2)] = null);

(statearr_23754_23768[(1)] = (2));


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
});})(c__20455__auto___23762,out))
;
return ((function (switch__20343__auto__,c__20455__auto___23762,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto____0 = (function (){
var statearr_23758 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23758[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto__);

(statearr_23758[(1)] = (1));

return statearr_23758;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto____1 = (function (state_23744){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_23744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e23759){if((e23759 instanceof Object)){
var ex__20347__auto__ = e23759;
var statearr_23760_23769 = state_23744;
(statearr_23760_23769[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23770 = state_23744;
state_23744 = G__23770;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto__ = function(state_23744){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto____1.call(this,state_23744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___23762,out))
})();
var state__20457__auto__ = (function (){var statearr_23761 = f__20456__auto__.call(null);
(statearr_23761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___23762);

return statearr_23761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___23762,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23771,opts){
var map__23775 = p__23771;
var map__23775__$1 = ((((!((map__23775 == null)))?((((map__23775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23775):map__23775);
var eval_body__$1 = cljs.core.get.call(null,map__23775__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23777){var e = e23777;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23778_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23778_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23783){
var vec__23784 = p__23783;
var k = cljs.core.nth.call(null,vec__23784,(0),null);
var v = cljs.core.nth.call(null,vec__23784,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23785){
var vec__23786 = p__23785;
var k = cljs.core.nth.call(null,vec__23786,(0),null);
var v = cljs.core.nth.call(null,vec__23786,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23790,p__23791){
var map__24038 = p__23790;
var map__24038__$1 = ((((!((map__24038 == null)))?((((map__24038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24038):map__24038);
var opts = map__24038__$1;
var before_jsload = cljs.core.get.call(null,map__24038__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24038__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24038__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24039 = p__23791;
var map__24039__$1 = ((((!((map__24039 == null)))?((((map__24039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24039):map__24039);
var msg = map__24039__$1;
var files = cljs.core.get.call(null,map__24039__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24039__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24039__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24192){
var state_val_24193 = (state_24192[(1)]);
if((state_val_24193 === (7))){
var inst_24056 = (state_24192[(7)]);
var inst_24055 = (state_24192[(8)]);
var inst_24053 = (state_24192[(9)]);
var inst_24054 = (state_24192[(10)]);
var inst_24061 = cljs.core._nth.call(null,inst_24054,inst_24056);
var inst_24062 = figwheel.client.file_reloading.eval_body.call(null,inst_24061,opts);
var inst_24063 = (inst_24056 + (1));
var tmp24194 = inst_24055;
var tmp24195 = inst_24053;
var tmp24196 = inst_24054;
var inst_24053__$1 = tmp24195;
var inst_24054__$1 = tmp24196;
var inst_24055__$1 = tmp24194;
var inst_24056__$1 = inst_24063;
var state_24192__$1 = (function (){var statearr_24197 = state_24192;
(statearr_24197[(7)] = inst_24056__$1);

(statearr_24197[(11)] = inst_24062);

(statearr_24197[(8)] = inst_24055__$1);

(statearr_24197[(9)] = inst_24053__$1);

(statearr_24197[(10)] = inst_24054__$1);

return statearr_24197;
})();
var statearr_24198_24284 = state_24192__$1;
(statearr_24198_24284[(2)] = null);

(statearr_24198_24284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (20))){
var inst_24096 = (state_24192[(12)]);
var inst_24104 = figwheel.client.file_reloading.sort_files.call(null,inst_24096);
var state_24192__$1 = state_24192;
var statearr_24199_24285 = state_24192__$1;
(statearr_24199_24285[(2)] = inst_24104);

(statearr_24199_24285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (27))){
var state_24192__$1 = state_24192;
var statearr_24200_24286 = state_24192__$1;
(statearr_24200_24286[(2)] = null);

(statearr_24200_24286[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (1))){
var inst_24045 = (state_24192[(13)]);
var inst_24042 = before_jsload.call(null,files);
var inst_24043 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24044 = (function (){return ((function (inst_24045,inst_24042,inst_24043,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23787_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23787_SHARP_);
});
;})(inst_24045,inst_24042,inst_24043,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24045__$1 = cljs.core.filter.call(null,inst_24044,files);
var inst_24046 = cljs.core.not_empty.call(null,inst_24045__$1);
var state_24192__$1 = (function (){var statearr_24201 = state_24192;
(statearr_24201[(13)] = inst_24045__$1);

(statearr_24201[(14)] = inst_24043);

(statearr_24201[(15)] = inst_24042);

return statearr_24201;
})();
if(cljs.core.truth_(inst_24046)){
var statearr_24202_24287 = state_24192__$1;
(statearr_24202_24287[(1)] = (2));

} else {
var statearr_24203_24288 = state_24192__$1;
(statearr_24203_24288[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (24))){
var state_24192__$1 = state_24192;
var statearr_24204_24289 = state_24192__$1;
(statearr_24204_24289[(2)] = null);

(statearr_24204_24289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (39))){
var inst_24146 = (state_24192[(16)]);
var state_24192__$1 = state_24192;
var statearr_24205_24290 = state_24192__$1;
(statearr_24205_24290[(2)] = inst_24146);

(statearr_24205_24290[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (46))){
var inst_24187 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24206_24291 = state_24192__$1;
(statearr_24206_24291[(2)] = inst_24187);

(statearr_24206_24291[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (4))){
var inst_24090 = (state_24192[(2)]);
var inst_24091 = cljs.core.List.EMPTY;
var inst_24092 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24091);
var inst_24093 = (function (){return ((function (inst_24090,inst_24091,inst_24092,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23788_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23788_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23788_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_24090,inst_24091,inst_24092,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24094 = cljs.core.filter.call(null,inst_24093,files);
var inst_24095 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24096 = cljs.core.concat.call(null,inst_24094,inst_24095);
var state_24192__$1 = (function (){var statearr_24207 = state_24192;
(statearr_24207[(12)] = inst_24096);

(statearr_24207[(17)] = inst_24092);

(statearr_24207[(18)] = inst_24090);

return statearr_24207;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24208_24292 = state_24192__$1;
(statearr_24208_24292[(1)] = (16));

} else {
var statearr_24209_24293 = state_24192__$1;
(statearr_24209_24293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (15))){
var inst_24080 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24210_24294 = state_24192__$1;
(statearr_24210_24294[(2)] = inst_24080);

(statearr_24210_24294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (21))){
var inst_24106 = (state_24192[(19)]);
var inst_24106__$1 = (state_24192[(2)]);
var inst_24107 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24106__$1);
var state_24192__$1 = (function (){var statearr_24211 = state_24192;
(statearr_24211[(19)] = inst_24106__$1);

return statearr_24211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24192__$1,(22),inst_24107);
} else {
if((state_val_24193 === (31))){
var inst_24190 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24192__$1,inst_24190);
} else {
if((state_val_24193 === (32))){
var inst_24146 = (state_24192[(16)]);
var inst_24151 = inst_24146.cljs$lang$protocol_mask$partition0$;
var inst_24152 = (inst_24151 & (64));
var inst_24153 = inst_24146.cljs$core$ISeq$;
var inst_24154 = (inst_24152) || (inst_24153);
var state_24192__$1 = state_24192;
if(cljs.core.truth_(inst_24154)){
var statearr_24212_24295 = state_24192__$1;
(statearr_24212_24295[(1)] = (35));

} else {
var statearr_24213_24296 = state_24192__$1;
(statearr_24213_24296[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (40))){
var inst_24167 = (state_24192[(20)]);
var inst_24166 = (state_24192[(2)]);
var inst_24167__$1 = cljs.core.get.call(null,inst_24166,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24168 = cljs.core.get.call(null,inst_24166,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24169 = cljs.core.not_empty.call(null,inst_24167__$1);
var state_24192__$1 = (function (){var statearr_24214 = state_24192;
(statearr_24214[(20)] = inst_24167__$1);

(statearr_24214[(21)] = inst_24168);

return statearr_24214;
})();
if(cljs.core.truth_(inst_24169)){
var statearr_24215_24297 = state_24192__$1;
(statearr_24215_24297[(1)] = (41));

} else {
var statearr_24216_24298 = state_24192__$1;
(statearr_24216_24298[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (33))){
var state_24192__$1 = state_24192;
var statearr_24217_24299 = state_24192__$1;
(statearr_24217_24299[(2)] = false);

(statearr_24217_24299[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (13))){
var inst_24066 = (state_24192[(22)]);
var inst_24070 = cljs.core.chunk_first.call(null,inst_24066);
var inst_24071 = cljs.core.chunk_rest.call(null,inst_24066);
var inst_24072 = cljs.core.count.call(null,inst_24070);
var inst_24053 = inst_24071;
var inst_24054 = inst_24070;
var inst_24055 = inst_24072;
var inst_24056 = (0);
var state_24192__$1 = (function (){var statearr_24218 = state_24192;
(statearr_24218[(7)] = inst_24056);

(statearr_24218[(8)] = inst_24055);

(statearr_24218[(9)] = inst_24053);

(statearr_24218[(10)] = inst_24054);

return statearr_24218;
})();
var statearr_24219_24300 = state_24192__$1;
(statearr_24219_24300[(2)] = null);

(statearr_24219_24300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (22))){
var inst_24114 = (state_24192[(23)]);
var inst_24110 = (state_24192[(24)]);
var inst_24109 = (state_24192[(25)]);
var inst_24106 = (state_24192[(19)]);
var inst_24109__$1 = (state_24192[(2)]);
var inst_24110__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24109__$1);
var inst_24111 = (function (){var all_files = inst_24106;
var res_SINGLEQUOTE_ = inst_24109__$1;
var res = inst_24110__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24114,inst_24110,inst_24109,inst_24106,inst_24109__$1,inst_24110__$1,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23789_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23789_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24114,inst_24110,inst_24109,inst_24106,inst_24109__$1,inst_24110__$1,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24112 = cljs.core.filter.call(null,inst_24111,inst_24109__$1);
var inst_24113 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24114__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24113);
var inst_24115 = cljs.core.not_empty.call(null,inst_24114__$1);
var state_24192__$1 = (function (){var statearr_24220 = state_24192;
(statearr_24220[(23)] = inst_24114__$1);

(statearr_24220[(24)] = inst_24110__$1);

(statearr_24220[(25)] = inst_24109__$1);

(statearr_24220[(26)] = inst_24112);

return statearr_24220;
})();
if(cljs.core.truth_(inst_24115)){
var statearr_24221_24301 = state_24192__$1;
(statearr_24221_24301[(1)] = (23));

} else {
var statearr_24222_24302 = state_24192__$1;
(statearr_24222_24302[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (36))){
var state_24192__$1 = state_24192;
var statearr_24223_24303 = state_24192__$1;
(statearr_24223_24303[(2)] = false);

(statearr_24223_24303[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (41))){
var inst_24167 = (state_24192[(20)]);
var inst_24171 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24172 = cljs.core.map.call(null,inst_24171,inst_24167);
var inst_24173 = cljs.core.pr_str.call(null,inst_24172);
var inst_24174 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24173)].join('');
var inst_24175 = figwheel.client.utils.log.call(null,inst_24174);
var state_24192__$1 = state_24192;
var statearr_24224_24304 = state_24192__$1;
(statearr_24224_24304[(2)] = inst_24175);

(statearr_24224_24304[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (43))){
var inst_24168 = (state_24192[(21)]);
var inst_24178 = (state_24192[(2)]);
var inst_24179 = cljs.core.not_empty.call(null,inst_24168);
var state_24192__$1 = (function (){var statearr_24225 = state_24192;
(statearr_24225[(27)] = inst_24178);

return statearr_24225;
})();
if(cljs.core.truth_(inst_24179)){
var statearr_24226_24305 = state_24192__$1;
(statearr_24226_24305[(1)] = (44));

} else {
var statearr_24227_24306 = state_24192__$1;
(statearr_24227_24306[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (29))){
var inst_24114 = (state_24192[(23)]);
var inst_24110 = (state_24192[(24)]);
var inst_24109 = (state_24192[(25)]);
var inst_24106 = (state_24192[(19)]);
var inst_24146 = (state_24192[(16)]);
var inst_24112 = (state_24192[(26)]);
var inst_24142 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24145 = (function (){var all_files = inst_24106;
var res_SINGLEQUOTE_ = inst_24109;
var res = inst_24110;
var files_not_loaded = inst_24112;
var dependencies_that_loaded = inst_24114;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24114,inst_24110,inst_24109,inst_24106,inst_24146,inst_24112,inst_24142,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24144){
var map__24228 = p__24144;
var map__24228__$1 = ((((!((map__24228 == null)))?((((map__24228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24228):map__24228);
var namespace = cljs.core.get.call(null,map__24228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24114,inst_24110,inst_24109,inst_24106,inst_24146,inst_24112,inst_24142,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24146__$1 = cljs.core.group_by.call(null,inst_24145,inst_24112);
var inst_24148 = (inst_24146__$1 == null);
var inst_24149 = cljs.core.not.call(null,inst_24148);
var state_24192__$1 = (function (){var statearr_24230 = state_24192;
(statearr_24230[(28)] = inst_24142);

(statearr_24230[(16)] = inst_24146__$1);

return statearr_24230;
})();
if(inst_24149){
var statearr_24231_24307 = state_24192__$1;
(statearr_24231_24307[(1)] = (32));

} else {
var statearr_24232_24308 = state_24192__$1;
(statearr_24232_24308[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (44))){
var inst_24168 = (state_24192[(21)]);
var inst_24181 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24168);
var inst_24182 = cljs.core.pr_str.call(null,inst_24181);
var inst_24183 = [cljs.core.str("not required: "),cljs.core.str(inst_24182)].join('');
var inst_24184 = figwheel.client.utils.log.call(null,inst_24183);
var state_24192__$1 = state_24192;
var statearr_24233_24309 = state_24192__$1;
(statearr_24233_24309[(2)] = inst_24184);

(statearr_24233_24309[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (6))){
var inst_24087 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24234_24310 = state_24192__$1;
(statearr_24234_24310[(2)] = inst_24087);

(statearr_24234_24310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (28))){
var inst_24112 = (state_24192[(26)]);
var inst_24139 = (state_24192[(2)]);
var inst_24140 = cljs.core.not_empty.call(null,inst_24112);
var state_24192__$1 = (function (){var statearr_24235 = state_24192;
(statearr_24235[(29)] = inst_24139);

return statearr_24235;
})();
if(cljs.core.truth_(inst_24140)){
var statearr_24236_24311 = state_24192__$1;
(statearr_24236_24311[(1)] = (29));

} else {
var statearr_24237_24312 = state_24192__$1;
(statearr_24237_24312[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (25))){
var inst_24110 = (state_24192[(24)]);
var inst_24126 = (state_24192[(2)]);
var inst_24127 = cljs.core.not_empty.call(null,inst_24110);
var state_24192__$1 = (function (){var statearr_24238 = state_24192;
(statearr_24238[(30)] = inst_24126);

return statearr_24238;
})();
if(cljs.core.truth_(inst_24127)){
var statearr_24239_24313 = state_24192__$1;
(statearr_24239_24313[(1)] = (26));

} else {
var statearr_24240_24314 = state_24192__$1;
(statearr_24240_24314[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (34))){
var inst_24161 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
if(cljs.core.truth_(inst_24161)){
var statearr_24241_24315 = state_24192__$1;
(statearr_24241_24315[(1)] = (38));

} else {
var statearr_24242_24316 = state_24192__$1;
(statearr_24242_24316[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (17))){
var state_24192__$1 = state_24192;
var statearr_24243_24317 = state_24192__$1;
(statearr_24243_24317[(2)] = recompile_dependents);

(statearr_24243_24317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (3))){
var state_24192__$1 = state_24192;
var statearr_24244_24318 = state_24192__$1;
(statearr_24244_24318[(2)] = null);

(statearr_24244_24318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (12))){
var inst_24083 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24245_24319 = state_24192__$1;
(statearr_24245_24319[(2)] = inst_24083);

(statearr_24245_24319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (2))){
var inst_24045 = (state_24192[(13)]);
var inst_24052 = cljs.core.seq.call(null,inst_24045);
var inst_24053 = inst_24052;
var inst_24054 = null;
var inst_24055 = (0);
var inst_24056 = (0);
var state_24192__$1 = (function (){var statearr_24246 = state_24192;
(statearr_24246[(7)] = inst_24056);

(statearr_24246[(8)] = inst_24055);

(statearr_24246[(9)] = inst_24053);

(statearr_24246[(10)] = inst_24054);

return statearr_24246;
})();
var statearr_24247_24320 = state_24192__$1;
(statearr_24247_24320[(2)] = null);

(statearr_24247_24320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (23))){
var inst_24114 = (state_24192[(23)]);
var inst_24110 = (state_24192[(24)]);
var inst_24109 = (state_24192[(25)]);
var inst_24106 = (state_24192[(19)]);
var inst_24112 = (state_24192[(26)]);
var inst_24117 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24119 = (function (){var all_files = inst_24106;
var res_SINGLEQUOTE_ = inst_24109;
var res = inst_24110;
var files_not_loaded = inst_24112;
var dependencies_that_loaded = inst_24114;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24114,inst_24110,inst_24109,inst_24106,inst_24112,inst_24117,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24118){
var map__24248 = p__24118;
var map__24248__$1 = ((((!((map__24248 == null)))?((((map__24248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24248):map__24248);
var request_url = cljs.core.get.call(null,map__24248__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24114,inst_24110,inst_24109,inst_24106,inst_24112,inst_24117,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24120 = cljs.core.reverse.call(null,inst_24114);
var inst_24121 = cljs.core.map.call(null,inst_24119,inst_24120);
var inst_24122 = cljs.core.pr_str.call(null,inst_24121);
var inst_24123 = figwheel.client.utils.log.call(null,inst_24122);
var state_24192__$1 = (function (){var statearr_24250 = state_24192;
(statearr_24250[(31)] = inst_24117);

return statearr_24250;
})();
var statearr_24251_24321 = state_24192__$1;
(statearr_24251_24321[(2)] = inst_24123);

(statearr_24251_24321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (35))){
var state_24192__$1 = state_24192;
var statearr_24252_24322 = state_24192__$1;
(statearr_24252_24322[(2)] = true);

(statearr_24252_24322[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (19))){
var inst_24096 = (state_24192[(12)]);
var inst_24102 = figwheel.client.file_reloading.expand_files.call(null,inst_24096);
var state_24192__$1 = state_24192;
var statearr_24253_24323 = state_24192__$1;
(statearr_24253_24323[(2)] = inst_24102);

(statearr_24253_24323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (11))){
var state_24192__$1 = state_24192;
var statearr_24254_24324 = state_24192__$1;
(statearr_24254_24324[(2)] = null);

(statearr_24254_24324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (9))){
var inst_24085 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24255_24325 = state_24192__$1;
(statearr_24255_24325[(2)] = inst_24085);

(statearr_24255_24325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (5))){
var inst_24056 = (state_24192[(7)]);
var inst_24055 = (state_24192[(8)]);
var inst_24058 = (inst_24056 < inst_24055);
var inst_24059 = inst_24058;
var state_24192__$1 = state_24192;
if(cljs.core.truth_(inst_24059)){
var statearr_24256_24326 = state_24192__$1;
(statearr_24256_24326[(1)] = (7));

} else {
var statearr_24257_24327 = state_24192__$1;
(statearr_24257_24327[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (14))){
var inst_24066 = (state_24192[(22)]);
var inst_24075 = cljs.core.first.call(null,inst_24066);
var inst_24076 = figwheel.client.file_reloading.eval_body.call(null,inst_24075,opts);
var inst_24077 = cljs.core.next.call(null,inst_24066);
var inst_24053 = inst_24077;
var inst_24054 = null;
var inst_24055 = (0);
var inst_24056 = (0);
var state_24192__$1 = (function (){var statearr_24258 = state_24192;
(statearr_24258[(32)] = inst_24076);

(statearr_24258[(7)] = inst_24056);

(statearr_24258[(8)] = inst_24055);

(statearr_24258[(9)] = inst_24053);

(statearr_24258[(10)] = inst_24054);

return statearr_24258;
})();
var statearr_24259_24328 = state_24192__$1;
(statearr_24259_24328[(2)] = null);

(statearr_24259_24328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (45))){
var state_24192__$1 = state_24192;
var statearr_24260_24329 = state_24192__$1;
(statearr_24260_24329[(2)] = null);

(statearr_24260_24329[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (26))){
var inst_24114 = (state_24192[(23)]);
var inst_24110 = (state_24192[(24)]);
var inst_24109 = (state_24192[(25)]);
var inst_24106 = (state_24192[(19)]);
var inst_24112 = (state_24192[(26)]);
var inst_24129 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24131 = (function (){var all_files = inst_24106;
var res_SINGLEQUOTE_ = inst_24109;
var res = inst_24110;
var files_not_loaded = inst_24112;
var dependencies_that_loaded = inst_24114;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24114,inst_24110,inst_24109,inst_24106,inst_24112,inst_24129,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24130){
var map__24261 = p__24130;
var map__24261__$1 = ((((!((map__24261 == null)))?((((map__24261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24261):map__24261);
var namespace = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24114,inst_24110,inst_24109,inst_24106,inst_24112,inst_24129,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24132 = cljs.core.map.call(null,inst_24131,inst_24110);
var inst_24133 = cljs.core.pr_str.call(null,inst_24132);
var inst_24134 = figwheel.client.utils.log.call(null,inst_24133);
var inst_24135 = (function (){var all_files = inst_24106;
var res_SINGLEQUOTE_ = inst_24109;
var res = inst_24110;
var files_not_loaded = inst_24112;
var dependencies_that_loaded = inst_24114;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24114,inst_24110,inst_24109,inst_24106,inst_24112,inst_24129,inst_24131,inst_24132,inst_24133,inst_24134,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24114,inst_24110,inst_24109,inst_24106,inst_24112,inst_24129,inst_24131,inst_24132,inst_24133,inst_24134,state_val_24193,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24136 = setTimeout(inst_24135,(10));
var state_24192__$1 = (function (){var statearr_24263 = state_24192;
(statearr_24263[(33)] = inst_24129);

(statearr_24263[(34)] = inst_24134);

return statearr_24263;
})();
var statearr_24264_24330 = state_24192__$1;
(statearr_24264_24330[(2)] = inst_24136);

(statearr_24264_24330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (16))){
var state_24192__$1 = state_24192;
var statearr_24265_24331 = state_24192__$1;
(statearr_24265_24331[(2)] = reload_dependents);

(statearr_24265_24331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (38))){
var inst_24146 = (state_24192[(16)]);
var inst_24163 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24146);
var state_24192__$1 = state_24192;
var statearr_24266_24332 = state_24192__$1;
(statearr_24266_24332[(2)] = inst_24163);

(statearr_24266_24332[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (30))){
var state_24192__$1 = state_24192;
var statearr_24267_24333 = state_24192__$1;
(statearr_24267_24333[(2)] = null);

(statearr_24267_24333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (10))){
var inst_24066 = (state_24192[(22)]);
var inst_24068 = cljs.core.chunked_seq_QMARK_.call(null,inst_24066);
var state_24192__$1 = state_24192;
if(inst_24068){
var statearr_24268_24334 = state_24192__$1;
(statearr_24268_24334[(1)] = (13));

} else {
var statearr_24269_24335 = state_24192__$1;
(statearr_24269_24335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (18))){
var inst_24100 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
if(cljs.core.truth_(inst_24100)){
var statearr_24270_24336 = state_24192__$1;
(statearr_24270_24336[(1)] = (19));

} else {
var statearr_24271_24337 = state_24192__$1;
(statearr_24271_24337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (42))){
var state_24192__$1 = state_24192;
var statearr_24272_24338 = state_24192__$1;
(statearr_24272_24338[(2)] = null);

(statearr_24272_24338[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (37))){
var inst_24158 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24273_24339 = state_24192__$1;
(statearr_24273_24339[(2)] = inst_24158);

(statearr_24273_24339[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (8))){
var inst_24066 = (state_24192[(22)]);
var inst_24053 = (state_24192[(9)]);
var inst_24066__$1 = cljs.core.seq.call(null,inst_24053);
var state_24192__$1 = (function (){var statearr_24274 = state_24192;
(statearr_24274[(22)] = inst_24066__$1);

return statearr_24274;
})();
if(inst_24066__$1){
var statearr_24275_24340 = state_24192__$1;
(statearr_24275_24340[(1)] = (10));

} else {
var statearr_24276_24341 = state_24192__$1;
(statearr_24276_24341[(1)] = (11));

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
}
});})(c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20343__auto__,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto____0 = (function (){
var statearr_24280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24280[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto__);

(statearr_24280[(1)] = (1));

return statearr_24280;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto____1 = (function (state_24192){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_24192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e24281){if((e24281 instanceof Object)){
var ex__20347__auto__ = e24281;
var statearr_24282_24342 = state_24192;
(statearr_24282_24342[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24343 = state_24192;
state_24192 = G__24343;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto__ = function(state_24192){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto____1.call(this,state_24192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20457__auto__ = (function (){var statearr_24283 = f__20456__auto__.call(null);
(statearr_24283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto__);

return statearr_24283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto__,map__24038,map__24038__$1,opts,before_jsload,on_jsload,reload_dependents,map__24039,map__24039__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20455__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24346,link){
var map__24349 = p__24346;
var map__24349__$1 = ((((!((map__24349 == null)))?((((map__24349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24349):map__24349);
var file = cljs.core.get.call(null,map__24349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24349,map__24349__$1,file){
return (function (p1__24344_SHARP_,p2__24345_SHARP_){
if(cljs.core._EQ_.call(null,p1__24344_SHARP_,p2__24345_SHARP_)){
return p1__24344_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24349,map__24349__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24355){
var map__24356 = p__24355;
var map__24356__$1 = ((((!((map__24356 == null)))?((((map__24356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24356):map__24356);
var match_length = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24351_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24351_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24358 = [];
var len__17829__auto___24361 = arguments.length;
var i__17830__auto___24362 = (0);
while(true){
if((i__17830__auto___24362 < len__17829__auto___24361)){
args24358.push((arguments[i__17830__auto___24362]));

var G__24363 = (i__17830__auto___24362 + (1));
i__17830__auto___24362 = G__24363;
continue;
} else {
}
break;
}

var G__24360 = args24358.length;
switch (G__24360) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24358.length)].join('')));

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
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24365_SHARP_,p2__24366_SHARP_){
return cljs.core.assoc.call(null,p1__24365_SHARP_,cljs.core.get.call(null,p2__24366_SHARP_,key),p2__24366_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24367){
var map__24370 = p__24367;
var map__24370__$1 = ((((!((map__24370 == null)))?((((map__24370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24370):map__24370);
var f_data = map__24370__$1;
var file = cljs.core.get.call(null,map__24370__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24372,files_msg){
var map__24379 = p__24372;
var map__24379__$1 = ((((!((map__24379 == null)))?((((map__24379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24379):map__24379);
var opts = map__24379__$1;
var on_cssload = cljs.core.get.call(null,map__24379__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24381_24385 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24382_24386 = null;
var count__24383_24387 = (0);
var i__24384_24388 = (0);
while(true){
if((i__24384_24388 < count__24383_24387)){
var f_24389 = cljs.core._nth.call(null,chunk__24382_24386,i__24384_24388);
figwheel.client.file_reloading.reload_css_file.call(null,f_24389);

var G__24390 = seq__24381_24385;
var G__24391 = chunk__24382_24386;
var G__24392 = count__24383_24387;
var G__24393 = (i__24384_24388 + (1));
seq__24381_24385 = G__24390;
chunk__24382_24386 = G__24391;
count__24383_24387 = G__24392;
i__24384_24388 = G__24393;
continue;
} else {
var temp__4425__auto___24394 = cljs.core.seq.call(null,seq__24381_24385);
if(temp__4425__auto___24394){
var seq__24381_24395__$1 = temp__4425__auto___24394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24381_24395__$1)){
var c__17574__auto___24396 = cljs.core.chunk_first.call(null,seq__24381_24395__$1);
var G__24397 = cljs.core.chunk_rest.call(null,seq__24381_24395__$1);
var G__24398 = c__17574__auto___24396;
var G__24399 = cljs.core.count.call(null,c__17574__auto___24396);
var G__24400 = (0);
seq__24381_24385 = G__24397;
chunk__24382_24386 = G__24398;
count__24383_24387 = G__24399;
i__24384_24388 = G__24400;
continue;
} else {
var f_24401 = cljs.core.first.call(null,seq__24381_24395__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24401);

var G__24402 = cljs.core.next.call(null,seq__24381_24395__$1);
var G__24403 = null;
var G__24404 = (0);
var G__24405 = (0);
seq__24381_24385 = G__24402;
chunk__24382_24386 = G__24403;
count__24383_24387 = G__24404;
i__24384_24388 = G__24405;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24379,map__24379__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24379,map__24379__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map