// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_nom_nom.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
om_nom_nom.core.Hiya = (function om_nom_nom$core$Hiya(){
var this__18856__auto__ = this;
React.Component.apply(this__18856__auto__,arguments);

if(!((this__18856__auto__.initLocalState == null))){
this__18856__auto__.state = this__18856__auto__.initLocalState();
} else {
this__18856__auto__.state = {};
}

return this__18856__auto__;
});

om_nom_nom.core.Hiya.prototype = goog.object.clone(React.Component.prototype);

var x18885_18893 = om_nom_nom.core.Hiya.prototype;
x18885_18893.componentWillUpdate = ((function (x18885_18893){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18796__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18796__auto__);
});})(x18885_18893))
;

x18885_18893.shouldComponentUpdate = ((function (x18885_18893){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18796__auto__),goog.object.get(next_props__18797__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__18796__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18796__auto__.state,"omcljs$state"),goog.object.get(next_state__18798__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x18885_18893))
;

x18885_18893.componentWillUnmount = ((function (x18885_18893){
return (function (){
var this__18796__auto__ = this;
var r__18802__auto__ = om.next.get_reconciler.call(null,this__18796__auto__);
var cfg__18803__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18802__auto__);
var st__18804__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18803__auto__);
var indexer__18801__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18803__auto__);
if((st__18804__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18804__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18796__auto__);
}

if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x18885_18893))
;

x18885_18893.componentDidUpdate = ((function (x18885_18893){
return (function (prev_props__18799__auto__,prev_state__18800__auto__){
var this__18796__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18796__auto__);
});})(x18885_18893))
;

x18885_18893.isMounted = ((function (x18885_18893){
return (function (){
var this__18796__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18796__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18885_18893))
;

x18885_18893.componentWillMount = ((function (x18885_18893){
return (function (){
var this__18796__auto__ = this;
var indexer__18801__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18796__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x18885_18893))
;

x18885_18893.render = ((function (x18885_18893){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_18886 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18887 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18888 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18889 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18890 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div(null,om.util.force_children.call(null,"Hiey ah"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18890;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18889;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18888;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18887;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18886;
}});})(x18885_18893))
;


om_nom_nom.core.Hiya.prototype.constructor = om_nom_nom.core.Hiya;

om_nom_nom.core.Hiya.prototype.om$isComponent = true;

var x18891_18894 = om_nom_nom.core.Hiya;


var x18892_18895 = om_nom_nom.core.Hiya.prototype;


om_nom_nom.core.Hiya.cljs$lang$type = true;

om_nom_nom.core.Hiya.cljs$lang$ctorStr = "om-nom-nom.core/Hiya";

om_nom_nom.core.Hiya.cljs$lang$ctorPrWriter = (function (this__18858__auto__,writer__18859__auto__,opt__18860__auto__){
return cljs.core._write.call(null,writer__18859__auto__,"om-nom-nom.core/Hiya");
});
om_nom_nom.core.hellow = om.next.factory.call(null,om_nom_nom.core.Hiya);
ReactDOM.render(om_nom_nom.core.hellow.call(null),goog.dom.getElement("app"));
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hi");

//# sourceMappingURL=core.js.map