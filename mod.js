// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;var i=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,i){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof i||null===i||"[object Array]"===e.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((l="value"in i)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=i.value,r.__proto__=c):r[t]=i.value),y="get"in i,v="set"in i,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,i.get),v&&u&&u.call(r,t,i.set),r};function c(r,t,n){i(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function p(r){return r===y||r===v}function b(r){return Math.abs(r)}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var s=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol.toStringTag:"";var _=w&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return s.call(r);n=r[N],u=N,t=null!=(o=r)&&A.call(o,u);try{r[N]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[N]=n:delete r[N],e}:function(r){return s.call(r)},d="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null;var h,U="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,t,n;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(d&&n instanceof Uint32Array||"[object Uint32Array]"===_(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?U:function(){throw new Error("not implemented")};var j=h,g="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var O,S="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,t,n;if("function"!=typeof I)return!1;try{t=new I([1,3.14,-3.14,NaN]),n=t,r=(g&&n instanceof Float64Array||"[object Float64Array]"===_(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var T,G="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,t,n;if("function"!=typeof H)return!1;try{t=new H(t=[1,3.14,-3.14,256,257]),n=t,r=(F&&n instanceof Uint8Array||"[object Uint8Array]"===_(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,L="function"==typeof Uint16Array;var V="function"==typeof Uint16Array?Uint16Array:null;var W,k="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,65536,65537]),n=t,r=(L&&n instanceof Uint16Array||"[object Uint16Array]"===_(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?k:function(){throw new Error("not implemented")};var M,x={uint16:W,uint8:P};(M=new x.uint16(1))[0]=4660;var Y=52===new x.uint8(M.buffer)[0],C=!0===Y?1:0,q=new E(1),z=new j(q.buffer);function B(r){return q[0]=r,z[C]}function D(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))}var J=-.16666666666666632;function K(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(J+o*n):r-(o*(.5*t-e*n)-t-e*J)}var Q,R,X=!0===Y?0:1,Z=new E(1),$=new j(Z.buffer);!0===Y?(Q=1,R=0):(Q=0,R=1);var rr={HIGH:Q,LOW:R},tr=new E(1),nr=new j(tr.buffer),er=rr.HIGH,or=rr.LOW;function ur(r,t){return nr[er]=r,nr[or]=t,tr[0]}var ar,fr,ir=Math.floor;!0===Y?(ar=1,fr=0):(ar=0,fr=1);var cr={HIGH:ar,LOW:fr},lr=new E(1),yr=new j(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function br(r,t){return lr[0]=t,r[0]=yr[vr],r[1]=yr[pr],r}function wr(r,t){return 1===arguments.length?br([0,0],r):br(r,t)}var sr=[0,0];function Ar(r,t){return l(t)||p(t)?(r[0]=t,r[1]=0,r):0!==t&&b(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Nr=[0,0],_r=[0,0];function dr(r,t){var n,e,o,u,a;return 0===t||0===r||l(r)||p(r)?r:(function(r,t){1===arguments.length?Ar([0,0],r):Ar(r,t)}(Nr,r),t+=Nr[1],t+=function(r){var t=B(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Nr[0]),t<-1074?(o=r,wr(sr,0),u=sr[0],u&=2147483647,a=B(o),ur(u|=a&=2147483648,sr[1])):t>1023?r<0?v:y:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,wr(_r,r),n=_r[0],n&=2148532223,e*ur(n|=t+1023<<20,_r[1])))}function mr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ur=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=5.960464477539063e-8,gr=mr(20),Ir=mr(20),Or=mr(20),Sr=mr(20);function Er(r,t,n,e,o,u,a,f,i){var c,l,y,v,p,b,w,s,A;for(v=u,A=e[n],s=n,p=0;s>0;p++)l=jr*A|0,Sr[p]=A-16777216*l|0,A=e[s-1]+l,s-=1;if(A=dr(A,o),A-=8*ir(.125*A),A-=w=0|A,y=0,o>0?(w+=p=Sr[n-1]>>24-o,Sr[n-1]-=p<<24-o,y=Sr[n-1]>>23-o):0===o?y=Sr[n-1]>>23:A>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<n;p++)s=Sr[p],0===c?0!==s&&(c=1,Sr[p]=16777216-s):Sr[p]=16777215-s;if(o>0)switch(o){case 1:Sr[n-1]&=8388607;break;case 2:Sr[n-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=dr(1,o)))}if(0===A){for(s=0,p=n-1;p>=u;p--)s|=Sr[p];if(0===s){for(b=1;0===Sr[u-b];b++);for(p=n+1;p<=n+b;p++){for(i[f+p]=hr[a+p],l=0,s=0;s<=f;s++)l+=r[s]*i[f+(p-s)];e[p]=l}return Er(r,t,n+=b,e,o,u,a,f,i)}}if(0===A)for(n-=1,o-=24;0===Sr[n];)n-=1,o-=24;else(A=dr(A,-o))>=16777216?(l=jr*A|0,Sr[n]=A-16777216*l|0,o+=24,Sr[n+=1]=l):Sr[n]=0|A;for(l=dr(1,o),p=n;p>=0;p--)e[p]=l*Sr[p],l*=jr;for(p=n;p>=0;p--){for(l=0,b=0;b<=v&&b<=n-p;b++)l+=Ur[b]*e[p+b];Or[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Or[p];for(t[0]=0===y?l:-l,l=Or[0]-l,p=1;p<=n;p++)l+=Or[p];return t[1]=0===y?l:-l,7&w}function Fr(r,t,n,e){var o,u,a,f,i,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(a=e-1),l=a+4,i=0;i<=l;i++)gr[i]=c<0?0:hr[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=a;c++)o+=r[c]*gr[a+(i-c)];Ir[i]=o}return 4,Er(r,t,4,Ir,f,4,u,a,gr)}var Hr=Math.round;function Tr(r,t,n){var e,o,u,a,f;return u=r-1.5707963267341256*(e=Hr(.6366197723675814*r)),a=6077100506506192e-26*e,f=t>>20|0,n[0]=u-a,f-(B(n[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),n[0]=u-a,f-(B(n[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),n[0]=u-a)),n[1]=u-n[0]-a,e}var Gr=1.5707963267341256,Pr=6077100506506192e-26,Lr=2*Pr,Vr=4*Pr,Wr=[0,0,0],kr=[0,0];function Mr(r,t){var n,e,o,u,a,f,i;if((o=2147483647&B(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Tr(r,o,t):o<=1073928572?r>0?(i=r-Gr,t[0]=i-Pr,t[1]=i-t[0]-Pr,1):(i=r+Gr,t[0]=i+Pr,t[1]=i-t[0]+Pr,-1):r>0?(i=r-2*Gr,t[0]=i-Lr,t[1]=i-t[0]-Lr,2):(i=r+2*Gr,t[0]=i+Lr,t[1]=i-t[0]+Lr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Tr(r,o,t):r>0?(i=r-3*Gr,t[0]=i-1.8231301519518578e-10,t[1]=i-t[0]-1.8231301519518578e-10,3):(i=r+3*Gr,t[0]=i+1.8231301519518578e-10,t[1]=i-t[0]+1.8231301519518578e-10,-3):1075388923===o?Tr(r,o,t):r>0?(i=r-4*Gr,t[0]=i-Vr,t[1]=i-t[0]-Vr,4):(i=r+4*Gr,t[0]=i+Vr,t[1]=i-t[0]+Vr,-4);if(o<1094263291)return Tr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Z[0]=r,$[X]}(r),i=ur(o-((e=(o>>20)-1046)<<20|0),n),a=0;a<2;a++)Wr[a]=0|i,i=16777216*(i-Wr[a]);for(Wr[2]=i,u=3;0===Wr[u-1];)u-=1;return f=Fr(Wr,kr,e,u),r<0?(t[0]=-kr[0],t[1]=-kr[1],-f):(t[0]=kr[0],t[1]=kr[1],f)}var xr=[0,0];function Yr(r){var t;if(t=B(r),(t&=2147483647)<=1072243195)return t<1044381696?1:D(r,0);if(t>=2146435072)return NaN;switch(3&Mr(r,xr)){case 0:return D(xr[0],xr[1]);case 1:return-K(xr[0],xr[1]);case 2:return-D(xr[0],xr[1]);default:return K(xr[0],xr[1])}}var Cr=[0,0];var qr=3.141592653589793;function zr(r){var t,n,e,o;return l(r)||p(r)?NaN:(t=b(r))>9007199254740992?1:.5===(e=t-(n=ir(t)))?0:(o=e<.25?Yr(qr*e):e<.75?function(r){var t;if(t=B(r),(t&=2147483647)<=1072243195)return t<1045430272?r:K(r,0);if(t>=2146435072)return NaN;switch(3&Mr(r,Cr)){case 0:return K(Cr[0],Cr[1]);case 1:return D(Cr[0],Cr[1]);case 2:return-K(Cr[0],Cr[1]);default:return-D(Cr[0],Cr[1])}}(qr*(e=.5-e)):-Yr(qr*(e=1-e)),n%2==1?-o:o)}function Br(r,t,n){return l(r)||l(t)||l(n)||n<0?NaN:0===n?r===t?y:0:r<t-n||r>t+n?0:(1+zr((r-t)/n))/(2*n)}function Dr(r){return function(){return r}}function Jr(r){return l(r)?Dr(NaN):function(t){if(l(t))return NaN;return t===r?y:0}}function Kr(r,t){return l(r)||l(t)||t<0?Dr(NaN):0===t?Jr(r):function(n){if(l(n))return NaN;if(n<r-t||n>r+t)return 0;return(1+zr((n-r)/t))/(2*t)}}c((function(r,t){return l(r)||l(t)?NaN:r===t?y:0}),"factory",Jr),c(Br,"factory",Kr);export{Br as default,Kr as factory};
//# sourceMappingURL=mod.js.map
