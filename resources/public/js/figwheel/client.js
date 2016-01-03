// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
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
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24841 = cljs.core._EQ_;
var expr__24842 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24841.call(null,"true",expr__24842))){
return true;
} else {
if(cljs.core.truth_(pred__24841.call(null,"false",expr__24842))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24842)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24844__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24845__i = 0, G__24845__a = new Array(arguments.length -  0);
while (G__24845__i < G__24845__a.length) {G__24845__a[G__24845__i] = arguments[G__24845__i + 0]; ++G__24845__i;}
  args = new cljs.core.IndexedSeq(G__24845__a,0);
} 
return G__24844__delegate.call(this,args);};
G__24844.cljs$lang$maxFixedArity = 0;
G__24844.cljs$lang$applyTo = (function (arglist__24846){
var args = cljs.core.seq(arglist__24846);
return G__24844__delegate(args);
});
G__24844.cljs$core$IFn$_invoke$arity$variadic = G__24844__delegate;
return G__24844;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24847){
var map__24850 = p__24847;
var map__24850__$1 = ((((!((map__24850 == null)))?((((map__24850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24850):map__24850);
var message = cljs.core.get.call(null,map__24850__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24850__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
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
var c__20455__auto___25012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___25012,ch){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___25012,ch){
return (function (state_24981){
var state_val_24982 = (state_24981[(1)]);
if((state_val_24982 === (7))){
var inst_24977 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_24983_25013 = state_24981__$1;
(statearr_24983_25013[(2)] = inst_24977);

(statearr_24983_25013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (1))){
var state_24981__$1 = state_24981;
var statearr_24984_25014 = state_24981__$1;
(statearr_24984_25014[(2)] = null);

(statearr_24984_25014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (4))){
var inst_24934 = (state_24981[(7)]);
var inst_24934__$1 = (state_24981[(2)]);
var state_24981__$1 = (function (){var statearr_24985 = state_24981;
(statearr_24985[(7)] = inst_24934__$1);

return statearr_24985;
})();
if(cljs.core.truth_(inst_24934__$1)){
var statearr_24986_25015 = state_24981__$1;
(statearr_24986_25015[(1)] = (5));

} else {
var statearr_24987_25016 = state_24981__$1;
(statearr_24987_25016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (15))){
var inst_24941 = (state_24981[(8)]);
var inst_24956 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24941);
var inst_24957 = cljs.core.first.call(null,inst_24956);
var inst_24958 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24957);
var inst_24959 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24958)].join('');
var inst_24960 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24959);
var state_24981__$1 = state_24981;
var statearr_24988_25017 = state_24981__$1;
(statearr_24988_25017[(2)] = inst_24960);

(statearr_24988_25017[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (13))){
var inst_24965 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_24989_25018 = state_24981__$1;
(statearr_24989_25018[(2)] = inst_24965);

(statearr_24989_25018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (6))){
var state_24981__$1 = state_24981;
var statearr_24990_25019 = state_24981__$1;
(statearr_24990_25019[(2)] = null);

(statearr_24990_25019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (17))){
var inst_24963 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_24991_25020 = state_24981__$1;
(statearr_24991_25020[(2)] = inst_24963);

(statearr_24991_25020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (3))){
var inst_24979 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24981__$1,inst_24979);
} else {
if((state_val_24982 === (12))){
var inst_24940 = (state_24981[(9)]);
var inst_24954 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24940,opts);
var state_24981__$1 = state_24981;
if(cljs.core.truth_(inst_24954)){
var statearr_24992_25021 = state_24981__$1;
(statearr_24992_25021[(1)] = (15));

} else {
var statearr_24993_25022 = state_24981__$1;
(statearr_24993_25022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (2))){
var state_24981__$1 = state_24981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24981__$1,(4),ch);
} else {
if((state_val_24982 === (11))){
var inst_24941 = (state_24981[(8)]);
var inst_24946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24947 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24941);
var inst_24948 = cljs.core.async.timeout.call(null,(1000));
var inst_24949 = [inst_24947,inst_24948];
var inst_24950 = (new cljs.core.PersistentVector(null,2,(5),inst_24946,inst_24949,null));
var state_24981__$1 = state_24981;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24981__$1,(14),inst_24950);
} else {
if((state_val_24982 === (9))){
var inst_24941 = (state_24981[(8)]);
var inst_24967 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24968 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24941);
var inst_24969 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24968);
var inst_24970 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24969)].join('');
var inst_24971 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24970);
var state_24981__$1 = (function (){var statearr_24994 = state_24981;
(statearr_24994[(10)] = inst_24967);

return statearr_24994;
})();
var statearr_24995_25023 = state_24981__$1;
(statearr_24995_25023[(2)] = inst_24971);

(statearr_24995_25023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (5))){
var inst_24934 = (state_24981[(7)]);
var inst_24936 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24937 = (new cljs.core.PersistentArrayMap(null,2,inst_24936,null));
var inst_24938 = (new cljs.core.PersistentHashSet(null,inst_24937,null));
var inst_24939 = figwheel.client.focus_msgs.call(null,inst_24938,inst_24934);
var inst_24940 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24939);
var inst_24941 = cljs.core.first.call(null,inst_24939);
var inst_24942 = figwheel.client.autoload_QMARK_.call(null);
var state_24981__$1 = (function (){var statearr_24996 = state_24981;
(statearr_24996[(9)] = inst_24940);

(statearr_24996[(8)] = inst_24941);

return statearr_24996;
})();
if(cljs.core.truth_(inst_24942)){
var statearr_24997_25024 = state_24981__$1;
(statearr_24997_25024[(1)] = (8));

} else {
var statearr_24998_25025 = state_24981__$1;
(statearr_24998_25025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (14))){
var inst_24952 = (state_24981[(2)]);
var state_24981__$1 = state_24981;
var statearr_24999_25026 = state_24981__$1;
(statearr_24999_25026[(2)] = inst_24952);

(statearr_24999_25026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (16))){
var state_24981__$1 = state_24981;
var statearr_25000_25027 = state_24981__$1;
(statearr_25000_25027[(2)] = null);

(statearr_25000_25027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (10))){
var inst_24973 = (state_24981[(2)]);
var state_24981__$1 = (function (){var statearr_25001 = state_24981;
(statearr_25001[(11)] = inst_24973);

return statearr_25001;
})();
var statearr_25002_25028 = state_24981__$1;
(statearr_25002_25028[(2)] = null);

(statearr_25002_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24982 === (8))){
var inst_24940 = (state_24981[(9)]);
var inst_24944 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24940,opts);
var state_24981__$1 = state_24981;
if(cljs.core.truth_(inst_24944)){
var statearr_25003_25029 = state_24981__$1;
(statearr_25003_25029[(1)] = (11));

} else {
var statearr_25004_25030 = state_24981__$1;
(statearr_25004_25030[(1)] = (12));

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
});})(c__20455__auto___25012,ch))
;
return ((function (switch__20343__auto__,c__20455__auto___25012,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20344__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20344__auto____0 = (function (){
var statearr_25008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25008[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20344__auto__);

(statearr_25008[(1)] = (1));

return statearr_25008;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20344__auto____1 = (function (state_24981){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_24981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e25009){if((e25009 instanceof Object)){
var ex__20347__auto__ = e25009;
var statearr_25010_25031 = state_24981;
(statearr_25010_25031[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25032 = state_24981;
state_24981 = G__25032;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20344__auto__ = function(state_24981){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20344__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20344__auto____1.call(this,state_24981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20344__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20344__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___25012,ch))
})();
var state__20457__auto__ = (function (){var statearr_25011 = f__20456__auto__.call(null);
(statearr_25011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___25012);

return statearr_25011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___25012,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25033_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25033_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25040 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25040){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25038 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25039 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25038,_STAR_print_newline_STAR_25039,base_path_25040){
return (function() { 
var G__25041__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25042__i = 0, G__25042__a = new Array(arguments.length -  0);
while (G__25042__i < G__25042__a.length) {G__25042__a[G__25042__i] = arguments[G__25042__i + 0]; ++G__25042__i;}
  args = new cljs.core.IndexedSeq(G__25042__a,0);
} 
return G__25041__delegate.call(this,args);};
G__25041.cljs$lang$maxFixedArity = 0;
G__25041.cljs$lang$applyTo = (function (arglist__25043){
var args = cljs.core.seq(arglist__25043);
return G__25041__delegate(args);
});
G__25041.cljs$core$IFn$_invoke$arity$variadic = G__25041__delegate;
return G__25041;
})()
;})(_STAR_print_fn_STAR_25038,_STAR_print_newline_STAR_25039,base_path_25040))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25039;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25038;
}}catch (e25037){if((e25037 instanceof Error)){
var e = e25037;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25040], null));
} else {
var e = e25037;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25040))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25044){
var map__25051 = p__25044;
var map__25051__$1 = ((((!((map__25051 == null)))?((((map__25051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25051):map__25051);
var opts = map__25051__$1;
var build_id = cljs.core.get.call(null,map__25051__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25051,map__25051__$1,opts,build_id){
return (function (p__25053){
var vec__25054 = p__25053;
var map__25055 = cljs.core.nth.call(null,vec__25054,(0),null);
var map__25055__$1 = ((((!((map__25055 == null)))?((((map__25055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25055):map__25055);
var msg = map__25055__$1;
var msg_name = cljs.core.get.call(null,map__25055__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25054,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25054,map__25055,map__25055__$1,msg,msg_name,_,map__25051,map__25051__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25054,map__25055,map__25055__$1,msg,msg_name,_,map__25051,map__25051__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25051,map__25051__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25061){
var vec__25062 = p__25061;
var map__25063 = cljs.core.nth.call(null,vec__25062,(0),null);
var map__25063__$1 = ((((!((map__25063 == null)))?((((map__25063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25063):map__25063);
var msg = map__25063__$1;
var msg_name = cljs.core.get.call(null,map__25063__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25062,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25065){
var map__25075 = p__25065;
var map__25075__$1 = ((((!((map__25075 == null)))?((((map__25075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25075):map__25075);
var on_compile_warning = cljs.core.get.call(null,map__25075__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25075__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25075,map__25075__$1,on_compile_warning,on_compile_fail){
return (function (p__25077){
var vec__25078 = p__25077;
var map__25079 = cljs.core.nth.call(null,vec__25078,(0),null);
var map__25079__$1 = ((((!((map__25079 == null)))?((((map__25079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25079):map__25079);
var msg = map__25079__$1;
var msg_name = cljs.core.get.call(null,map__25079__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25078,(1));
var pred__25081 = cljs.core._EQ_;
var expr__25082 = msg_name;
if(cljs.core.truth_(pred__25081.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25082))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25081.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25082))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25075,map__25075__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto__,msg_hist,msg_names,msg){
return (function (state_25298){
var state_val_25299 = (state_25298[(1)]);
if((state_val_25299 === (7))){
var inst_25222 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
if(cljs.core.truth_(inst_25222)){
var statearr_25300_25346 = state_25298__$1;
(statearr_25300_25346[(1)] = (8));

} else {
var statearr_25301_25347 = state_25298__$1;
(statearr_25301_25347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (20))){
var inst_25292 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25302_25348 = state_25298__$1;
(statearr_25302_25348[(2)] = inst_25292);

(statearr_25302_25348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (27))){
var inst_25288 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25303_25349 = state_25298__$1;
(statearr_25303_25349[(2)] = inst_25288);

(statearr_25303_25349[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (1))){
var inst_25215 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25298__$1 = state_25298;
if(cljs.core.truth_(inst_25215)){
var statearr_25304_25350 = state_25298__$1;
(statearr_25304_25350[(1)] = (2));

} else {
var statearr_25305_25351 = state_25298__$1;
(statearr_25305_25351[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (24))){
var inst_25290 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25306_25352 = state_25298__$1;
(statearr_25306_25352[(2)] = inst_25290);

(statearr_25306_25352[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (4))){
var inst_25296 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25298__$1,inst_25296);
} else {
if((state_val_25299 === (15))){
var inst_25294 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25307_25353 = state_25298__$1;
(statearr_25307_25353[(2)] = inst_25294);

(statearr_25307_25353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (21))){
var inst_25253 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25308_25354 = state_25298__$1;
(statearr_25308_25354[(2)] = inst_25253);

(statearr_25308_25354[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (31))){
var inst_25277 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25298__$1 = state_25298;
if(cljs.core.truth_(inst_25277)){
var statearr_25309_25355 = state_25298__$1;
(statearr_25309_25355[(1)] = (34));

} else {
var statearr_25310_25356 = state_25298__$1;
(statearr_25310_25356[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (32))){
var inst_25286 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25311_25357 = state_25298__$1;
(statearr_25311_25357[(2)] = inst_25286);

(statearr_25311_25357[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (33))){
var inst_25275 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25312_25358 = state_25298__$1;
(statearr_25312_25358[(2)] = inst_25275);

(statearr_25312_25358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (13))){
var inst_25236 = figwheel.client.heads_up.clear.call(null);
var state_25298__$1 = state_25298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(16),inst_25236);
} else {
if((state_val_25299 === (22))){
var inst_25257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25258 = figwheel.client.heads_up.append_message.call(null,inst_25257);
var state_25298__$1 = state_25298;
var statearr_25313_25359 = state_25298__$1;
(statearr_25313_25359[(2)] = inst_25258);

(statearr_25313_25359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (36))){
var inst_25284 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25314_25360 = state_25298__$1;
(statearr_25314_25360[(2)] = inst_25284);

(statearr_25314_25360[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (29))){
var inst_25268 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25315_25361 = state_25298__$1;
(statearr_25315_25361[(2)] = inst_25268);

(statearr_25315_25361[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (6))){
var inst_25217 = (state_25298[(7)]);
var state_25298__$1 = state_25298;
var statearr_25316_25362 = state_25298__$1;
(statearr_25316_25362[(2)] = inst_25217);

(statearr_25316_25362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (28))){
var inst_25264 = (state_25298[(2)]);
var inst_25265 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25266 = figwheel.client.heads_up.display_warning.call(null,inst_25265);
var state_25298__$1 = (function (){var statearr_25317 = state_25298;
(statearr_25317[(8)] = inst_25264);

return statearr_25317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(29),inst_25266);
} else {
if((state_val_25299 === (25))){
var inst_25262 = figwheel.client.heads_up.clear.call(null);
var state_25298__$1 = state_25298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(28),inst_25262);
} else {
if((state_val_25299 === (34))){
var inst_25279 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25298__$1 = state_25298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(37),inst_25279);
} else {
if((state_val_25299 === (17))){
var inst_25244 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25318_25363 = state_25298__$1;
(statearr_25318_25363[(2)] = inst_25244);

(statearr_25318_25363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (3))){
var inst_25234 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25298__$1 = state_25298;
if(cljs.core.truth_(inst_25234)){
var statearr_25319_25364 = state_25298__$1;
(statearr_25319_25364[(1)] = (13));

} else {
var statearr_25320_25365 = state_25298__$1;
(statearr_25320_25365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (12))){
var inst_25230 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25321_25366 = state_25298__$1;
(statearr_25321_25366[(2)] = inst_25230);

(statearr_25321_25366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (2))){
var inst_25217 = (state_25298[(7)]);
var inst_25217__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25298__$1 = (function (){var statearr_25322 = state_25298;
(statearr_25322[(7)] = inst_25217__$1);

return statearr_25322;
})();
if(cljs.core.truth_(inst_25217__$1)){
var statearr_25323_25367 = state_25298__$1;
(statearr_25323_25367[(1)] = (5));

} else {
var statearr_25324_25368 = state_25298__$1;
(statearr_25324_25368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (23))){
var inst_25260 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25298__$1 = state_25298;
if(cljs.core.truth_(inst_25260)){
var statearr_25325_25369 = state_25298__$1;
(statearr_25325_25369[(1)] = (25));

} else {
var statearr_25326_25370 = state_25298__$1;
(statearr_25326_25370[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (35))){
var state_25298__$1 = state_25298;
var statearr_25327_25371 = state_25298__$1;
(statearr_25327_25371[(2)] = null);

(statearr_25327_25371[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (19))){
var inst_25255 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25298__$1 = state_25298;
if(cljs.core.truth_(inst_25255)){
var statearr_25328_25372 = state_25298__$1;
(statearr_25328_25372[(1)] = (22));

} else {
var statearr_25329_25373 = state_25298__$1;
(statearr_25329_25373[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (11))){
var inst_25226 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25330_25374 = state_25298__$1;
(statearr_25330_25374[(2)] = inst_25226);

(statearr_25330_25374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (9))){
var inst_25228 = figwheel.client.heads_up.clear.call(null);
var state_25298__$1 = state_25298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(12),inst_25228);
} else {
if((state_val_25299 === (5))){
var inst_25219 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25298__$1 = state_25298;
var statearr_25331_25375 = state_25298__$1;
(statearr_25331_25375[(2)] = inst_25219);

(statearr_25331_25375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (14))){
var inst_25246 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25298__$1 = state_25298;
if(cljs.core.truth_(inst_25246)){
var statearr_25332_25376 = state_25298__$1;
(statearr_25332_25376[(1)] = (18));

} else {
var statearr_25333_25377 = state_25298__$1;
(statearr_25333_25377[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (26))){
var inst_25270 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25298__$1 = state_25298;
if(cljs.core.truth_(inst_25270)){
var statearr_25334_25378 = state_25298__$1;
(statearr_25334_25378[(1)] = (30));

} else {
var statearr_25335_25379 = state_25298__$1;
(statearr_25335_25379[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (16))){
var inst_25238 = (state_25298[(2)]);
var inst_25239 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25240 = figwheel.client.format_messages.call(null,inst_25239);
var inst_25241 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25242 = figwheel.client.heads_up.display_error.call(null,inst_25240,inst_25241);
var state_25298__$1 = (function (){var statearr_25336 = state_25298;
(statearr_25336[(9)] = inst_25238);

return statearr_25336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(17),inst_25242);
} else {
if((state_val_25299 === (30))){
var inst_25272 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25273 = figwheel.client.heads_up.display_warning.call(null,inst_25272);
var state_25298__$1 = state_25298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(33),inst_25273);
} else {
if((state_val_25299 === (10))){
var inst_25232 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25337_25380 = state_25298__$1;
(statearr_25337_25380[(2)] = inst_25232);

(statearr_25337_25380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (18))){
var inst_25248 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25249 = figwheel.client.format_messages.call(null,inst_25248);
var inst_25250 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25251 = figwheel.client.heads_up.display_error.call(null,inst_25249,inst_25250);
var state_25298__$1 = state_25298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(21),inst_25251);
} else {
if((state_val_25299 === (37))){
var inst_25281 = (state_25298[(2)]);
var state_25298__$1 = state_25298;
var statearr_25338_25381 = state_25298__$1;
(statearr_25338_25381[(2)] = inst_25281);

(statearr_25338_25381[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25299 === (8))){
var inst_25224 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25298__$1 = state_25298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25298__$1,(11),inst_25224);
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
});})(c__20455__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20343__auto__,c__20455__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto____0 = (function (){
var statearr_25342 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25342[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto__);

(statearr_25342[(1)] = (1));

return statearr_25342;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto____1 = (function (state_25298){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_25298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e25343){if((e25343 instanceof Object)){
var ex__20347__auto__ = e25343;
var statearr_25344_25382 = state_25298;
(statearr_25344_25382[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25383 = state_25298;
state_25298 = G__25383;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto__ = function(state_25298){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto____1.call(this,state_25298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto__,msg_hist,msg_names,msg))
})();
var state__20457__auto__ = (function (){var statearr_25345 = f__20456__auto__.call(null);
(statearr_25345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto__);

return statearr_25345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto__,msg_hist,msg_names,msg))
);

return c__20455__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20455__auto___25446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto___25446,ch){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto___25446,ch){
return (function (state_25429){
var state_val_25430 = (state_25429[(1)]);
if((state_val_25430 === (1))){
var state_25429__$1 = state_25429;
var statearr_25431_25447 = state_25429__$1;
(statearr_25431_25447[(2)] = null);

(statearr_25431_25447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (2))){
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25429__$1,(4),ch);
} else {
if((state_val_25430 === (3))){
var inst_25427 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25429__$1,inst_25427);
} else {
if((state_val_25430 === (4))){
var inst_25417 = (state_25429[(7)]);
var inst_25417__$1 = (state_25429[(2)]);
var state_25429__$1 = (function (){var statearr_25432 = state_25429;
(statearr_25432[(7)] = inst_25417__$1);

return statearr_25432;
})();
if(cljs.core.truth_(inst_25417__$1)){
var statearr_25433_25448 = state_25429__$1;
(statearr_25433_25448[(1)] = (5));

} else {
var statearr_25434_25449 = state_25429__$1;
(statearr_25434_25449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (5))){
var inst_25417 = (state_25429[(7)]);
var inst_25419 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25417);
var state_25429__$1 = state_25429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25429__$1,(8),inst_25419);
} else {
if((state_val_25430 === (6))){
var state_25429__$1 = state_25429;
var statearr_25435_25450 = state_25429__$1;
(statearr_25435_25450[(2)] = null);

(statearr_25435_25450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (7))){
var inst_25425 = (state_25429[(2)]);
var state_25429__$1 = state_25429;
var statearr_25436_25451 = state_25429__$1;
(statearr_25436_25451[(2)] = inst_25425);

(statearr_25436_25451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25430 === (8))){
var inst_25421 = (state_25429[(2)]);
var state_25429__$1 = (function (){var statearr_25437 = state_25429;
(statearr_25437[(8)] = inst_25421);

return statearr_25437;
})();
var statearr_25438_25452 = state_25429__$1;
(statearr_25438_25452[(2)] = null);

(statearr_25438_25452[(1)] = (2));


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
});})(c__20455__auto___25446,ch))
;
return ((function (switch__20343__auto__,c__20455__auto___25446,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20344__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20344__auto____0 = (function (){
var statearr_25442 = [null,null,null,null,null,null,null,null,null];
(statearr_25442[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20344__auto__);

(statearr_25442[(1)] = (1));

return statearr_25442;
});
var figwheel$client$heads_up_plugin_$_state_machine__20344__auto____1 = (function (state_25429){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_25429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e25443){if((e25443 instanceof Object)){
var ex__20347__auto__ = e25443;
var statearr_25444_25453 = state_25429;
(statearr_25444_25453[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25454 = state_25429;
state_25429 = G__25454;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20344__auto__ = function(state_25429){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20344__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20344__auto____1.call(this,state_25429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20344__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20344__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto___25446,ch))
})();
var state__20457__auto__ = (function (){var statearr_25445 = f__20456__auto__.call(null);
(statearr_25445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto___25446);

return statearr_25445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto___25446,ch))
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
var c__20455__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20455__auto__){
return (function (){
var f__20456__auto__ = (function (){var switch__20343__auto__ = ((function (c__20455__auto__){
return (function (state_25475){
var state_val_25476 = (state_25475[(1)]);
if((state_val_25476 === (1))){
var inst_25470 = cljs.core.async.timeout.call(null,(3000));
var state_25475__$1 = state_25475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25475__$1,(2),inst_25470);
} else {
if((state_val_25476 === (2))){
var inst_25472 = (state_25475[(2)]);
var inst_25473 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25475__$1 = (function (){var statearr_25477 = state_25475;
(statearr_25477[(7)] = inst_25472);

return statearr_25477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25475__$1,inst_25473);
} else {
return null;
}
}
});})(c__20455__auto__))
;
return ((function (switch__20343__auto__,c__20455__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20344__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20344__auto____0 = (function (){
var statearr_25481 = [null,null,null,null,null,null,null,null];
(statearr_25481[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20344__auto__);

(statearr_25481[(1)] = (1));

return statearr_25481;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20344__auto____1 = (function (state_25475){
while(true){
var ret_value__20345__auto__ = (function (){try{while(true){
var result__20346__auto__ = switch__20343__auto__.call(null,state_25475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20346__auto__;
}
break;
}
}catch (e25482){if((e25482 instanceof Object)){
var ex__20347__auto__ = e25482;
var statearr_25483_25485 = state_25475;
(statearr_25483_25485[(5)] = ex__20347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25486 = state_25475;
state_25475 = G__25486;
continue;
} else {
return ret_value__20345__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20344__auto__ = function(state_25475){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20344__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20344__auto____1.call(this,state_25475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20344__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20344__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20344__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20344__auto__;
})()
;})(switch__20343__auto__,c__20455__auto__))
})();
var state__20457__auto__ = (function (){var statearr_25484 = f__20456__auto__.call(null);
(statearr_25484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20455__auto__);

return statearr_25484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20457__auto__);
});})(c__20455__auto__))
);

return c__20455__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25487){
var map__25494 = p__25487;
var map__25494__$1 = ((((!((map__25494 == null)))?((((map__25494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25494):map__25494);
var ed = map__25494__$1;
var formatted_exception = cljs.core.get.call(null,map__25494__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25494__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25494__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25496_25500 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25497_25501 = null;
var count__25498_25502 = (0);
var i__25499_25503 = (0);
while(true){
if((i__25499_25503 < count__25498_25502)){
var msg_25504 = cljs.core._nth.call(null,chunk__25497_25501,i__25499_25503);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25504);

var G__25505 = seq__25496_25500;
var G__25506 = chunk__25497_25501;
var G__25507 = count__25498_25502;
var G__25508 = (i__25499_25503 + (1));
seq__25496_25500 = G__25505;
chunk__25497_25501 = G__25506;
count__25498_25502 = G__25507;
i__25499_25503 = G__25508;
continue;
} else {
var temp__4425__auto___25509 = cljs.core.seq.call(null,seq__25496_25500);
if(temp__4425__auto___25509){
var seq__25496_25510__$1 = temp__4425__auto___25509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25496_25510__$1)){
var c__17574__auto___25511 = cljs.core.chunk_first.call(null,seq__25496_25510__$1);
var G__25512 = cljs.core.chunk_rest.call(null,seq__25496_25510__$1);
var G__25513 = c__17574__auto___25511;
var G__25514 = cljs.core.count.call(null,c__17574__auto___25511);
var G__25515 = (0);
seq__25496_25500 = G__25512;
chunk__25497_25501 = G__25513;
count__25498_25502 = G__25514;
i__25499_25503 = G__25515;
continue;
} else {
var msg_25516 = cljs.core.first.call(null,seq__25496_25510__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25516);

var G__25517 = cljs.core.next.call(null,seq__25496_25510__$1);
var G__25518 = null;
var G__25519 = (0);
var G__25520 = (0);
seq__25496_25500 = G__25517;
chunk__25497_25501 = G__25518;
count__25498_25502 = G__25519;
i__25499_25503 = G__25520;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25521){
var map__25524 = p__25521;
var map__25524__$1 = ((((!((map__25524 == null)))?((((map__25524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25524):map__25524);
var w = map__25524__$1;
var message = cljs.core.get.call(null,map__25524__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25532 = cljs.core.seq.call(null,plugins);
var chunk__25533 = null;
var count__25534 = (0);
var i__25535 = (0);
while(true){
if((i__25535 < count__25534)){
var vec__25536 = cljs.core._nth.call(null,chunk__25533,i__25535);
var k = cljs.core.nth.call(null,vec__25536,(0),null);
var plugin = cljs.core.nth.call(null,vec__25536,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25538 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25532,chunk__25533,count__25534,i__25535,pl_25538,vec__25536,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25538.call(null,msg_hist);
});})(seq__25532,chunk__25533,count__25534,i__25535,pl_25538,vec__25536,k,plugin))
);
} else {
}

var G__25539 = seq__25532;
var G__25540 = chunk__25533;
var G__25541 = count__25534;
var G__25542 = (i__25535 + (1));
seq__25532 = G__25539;
chunk__25533 = G__25540;
count__25534 = G__25541;
i__25535 = G__25542;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25532);
if(temp__4425__auto__){
var seq__25532__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25532__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25532__$1);
var G__25543 = cljs.core.chunk_rest.call(null,seq__25532__$1);
var G__25544 = c__17574__auto__;
var G__25545 = cljs.core.count.call(null,c__17574__auto__);
var G__25546 = (0);
seq__25532 = G__25543;
chunk__25533 = G__25544;
count__25534 = G__25545;
i__25535 = G__25546;
continue;
} else {
var vec__25537 = cljs.core.first.call(null,seq__25532__$1);
var k = cljs.core.nth.call(null,vec__25537,(0),null);
var plugin = cljs.core.nth.call(null,vec__25537,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25547 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25532,chunk__25533,count__25534,i__25535,pl_25547,vec__25537,k,plugin,seq__25532__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25547.call(null,msg_hist);
});})(seq__25532,chunk__25533,count__25534,i__25535,pl_25547,vec__25537,k,plugin,seq__25532__$1,temp__4425__auto__))
);
} else {
}

var G__25548 = cljs.core.next.call(null,seq__25532__$1);
var G__25549 = null;
var G__25550 = (0);
var G__25551 = (0);
seq__25532 = G__25548;
chunk__25533 = G__25549;
count__25534 = G__25550;
i__25535 = G__25551;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25552 = [];
var len__17829__auto___25555 = arguments.length;
var i__17830__auto___25556 = (0);
while(true){
if((i__17830__auto___25556 < len__17829__auto___25555)){
args25552.push((arguments[i__17830__auto___25556]));

var G__25557 = (i__17830__auto___25556 + (1));
i__17830__auto___25556 = G__25557;
continue;
} else {
}
break;
}

var G__25554 = args25552.length;
switch (G__25554) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25552.length)].join('')));

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
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17836__auto__ = [];
var len__17829__auto___25563 = arguments.length;
var i__17830__auto___25564 = (0);
while(true){
if((i__17830__auto___25564 < len__17829__auto___25563)){
args__17836__auto__.push((arguments[i__17830__auto___25564]));

var G__25565 = (i__17830__auto___25564 + (1));
i__17830__auto___25564 = G__25565;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25560){
var map__25561 = p__25560;
var map__25561__$1 = ((((!((map__25561 == null)))?((((map__25561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25561):map__25561);
var opts = map__25561__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25559){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25559));
});

//# sourceMappingURL=client.js.map