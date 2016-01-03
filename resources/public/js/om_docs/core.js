// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_docs.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
om_docs.core.Hiya = (function om_docs$core$Hiya(){
var this__19848__auto__ = this;
React.Component.apply(this__19848__auto__,arguments);

if(!((this__19848__auto__.initLocalState == null))){
this__19848__auto__.state = this__19848__auto__.initLocalState();
} else {
this__19848__auto__.state = {};
}

return this__19848__auto__;
});

om_docs.core.Hiya.prototype = goog.object.clone(React.Component.prototype);

var x21679_21687 = om_docs.core.Hiya.prototype;
x21679_21687.componentWillUpdate = ((function (x21679_21687){
return (function (next_props__19789__auto__,next_state__19790__auto__){
var this__19788__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19788__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19788__auto__);
});})(x21679_21687))
;

x21679_21687.shouldComponentUpdate = ((function (x21679_21687){
return (function (next_props__19789__auto__,next_state__19790__auto__){
var this__19788__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19788__auto__),goog.object.get(next_props__19789__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__19788__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19788__auto__.state,"omcljs$state"),goog.object.get(next_state__19790__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x21679_21687))
;

x21679_21687.componentWillUnmount = ((function (x21679_21687){
return (function (){
var this__19788__auto__ = this;
var r__19794__auto__ = om.next.get_reconciler.call(null,this__19788__auto__);
var cfg__19795__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19794__auto__);
var st__19796__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19795__auto__);
var indexer__19793__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19795__auto__);
if((st__19796__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19796__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19788__auto__);
}

if((indexer__19793__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19793__auto__,this__19788__auto__);
}
});})(x21679_21687))
;

x21679_21687.componentDidUpdate = ((function (x21679_21687){
return (function (prev_props__19791__auto__,prev_state__19792__auto__){
var this__19788__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19788__auto__);
});})(x21679_21687))
;

x21679_21687.isMounted = ((function (x21679_21687){
return (function (){
var this__19788__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19788__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21679_21687))
;

x21679_21687.componentWillMount = ((function (x21679_21687){
return (function (){
var this__19788__auto__ = this;
var indexer__19793__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19788__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19793__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19793__auto__,this__19788__auto__);
}
});})(x21679_21687))
;

x21679_21687.render = ((function (x21679_21687){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21680 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21681 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21682 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21683 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21684 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.DOM.div(null,om.util.force_children.call(null,"Hiey ah"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21684;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21683;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21682;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21681;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21680;
}});})(x21679_21687))
;


om_docs.core.Hiya.prototype.constructor = om_docs.core.Hiya;

om_docs.core.Hiya.prototype.om$isComponent = true;

var x21685_21688 = om_docs.core.Hiya;


var x21686_21689 = om_docs.core.Hiya.prototype;


om_docs.core.Hiya.cljs$lang$type = true;

om_docs.core.Hiya.cljs$lang$ctorStr = "om-docs.core/Hiya";

om_docs.core.Hiya.cljs$lang$ctorPrWriter = (function (this__19850__auto__,writer__19851__auto__,opt__19852__auto__){
return cljs.core._write.call(null,writer__19851__auto__,"om-docs.core/Hiya");
});
om_docs.core.hellow = om.next.factory.call(null,om_docs.core.Hiya);
ReactDOM.render(om_docs.core.hellow.call(null),goog.dom.getElement("app"));
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hi");

//# sourceMappingURL=core.js.map