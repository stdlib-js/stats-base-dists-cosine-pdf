"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=f(function(P,c){
var n=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-cospi/dist'),y=require('@stdlib/constants-float64-pinf/dist');function d(e,r,t){var i;return n(e)||n(r)||n(t)||t<0?NaN:t===0?e===r?y:0:e<r-t||e>r+t?0:(i=(e-r)/t,(1+N(i))/(2*t))}c.exports=d
});var q=f(function(R,v){
var s=require('@stdlib/utils-constant-function/dist'),z=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,a=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-cospi/dist');function g(e,r){if(a(e)||a(r)||r<0)return s(NaN);if(r===0)return z(e);return t;function t(i){var u;return a(i)?NaN:i<e-r||i>e+r?0:(u=(i-e)/r,(1+F(u))/(2*r))}}v.exports=g
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),I=q();l(p,"factory",I);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
