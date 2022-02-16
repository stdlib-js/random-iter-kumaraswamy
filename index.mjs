// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-kumaraswamy@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";var h=e,j=t,c=n,f=s,g=r,b=i,v=o.isPrimitive,x=d,y=m.isPrimitive,w=l,P=a,L=u.factory,G=p;var N=function e(t,n,s){var r,i,o,d,m;if(!v(t))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+t+"`.");if(!v(n))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+n+"`.");if(arguments.length>2){if(!x(s))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+s+"`.");if(r=b(s,1),w(r,"iter")){if(!y(r.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+r.iter+"`.")}else r.iter=P;o=L(t,n,r),void 0===r.prng&&!1!==r.copy&&(r.state=o.state)}else o=L(t,n),r={iter:P,state:o.state};return m=0,h(i={},"next",l),h(i,"return",a),r&&r.prng?(h(i,"seed",null),h(i,"seedLength",null),c(i,"state",f(null),g),h(i,"stateLength",null),h(i,"byteLength",null)):(j(i,"seed",p),j(i,"seedLength",N),c(i,"state",T,V),j(i,"stateLength",R),j(i,"byteLength",E)),h(i,"PRNG",o.PRNG),G&&h(i,G,u),i;function l(){return m+=1,d||m>r.iter?{done:!0}:{value:o(),done:!1}}function a(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return e(t,n,r)}function p(){return o.PRNG.seed}function N(){return o.PRNG.seedLength}function R(){return o.PRNG.stateLength}function E(){return o.PRNG.byteLength}function T(){return o.PRNG.state}function V(e){o.PRNG.state=e}},R=N;export{R as default};
//# sourceMappingURL=index.mjs.map
