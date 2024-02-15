// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pdf@v0.2.0-esm/index.mjs";function d(t,i,r){return s(t)||s(i)||s(r)||r<0?NaN:0===r?t===i?n:0:t<i-r||t>i+r?0:(1+e((t-i)/r))/(2*r)}function m(t,n){return s(t)||s(n)||n<0?i(NaN):0===n?r(t):function(i){if(s(i))return NaN;if(i<t-n||i>t+n)return 0;return(1+e((i-t)/n))/(2*n)}}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
