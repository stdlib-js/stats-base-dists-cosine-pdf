// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,f=e.__defineSetter__,i=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(i.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){return r!=r}var p=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function s(r){return r===p||r===v}function b(r){return Math.abs(r)}var d,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,A=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",m=w&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return _.call(r);n=r[N],u=N,t=null!=(o=r)&&A.call(o,u);try{r[N]=void 0}catch(t){return _.call(r)}return e=_.call(r),t?r[N]=n:delete r[N],e}:function(r){return _.call(r)},h="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var r,t,n;if("function"!=typeof U)return!1;try{t=new U(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(h&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var g,I=d,O="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,E="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S([1,3.14,-3.14,NaN]),n=t,r=(O&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=g,H="function"==typeof Uint8Array,G="function"==typeof Uint8Array?Uint8Array:null,P="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=t,r=(H&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L=F,M="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,65536,65537]),n=t,r=(M&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,Y={uint16:x,uint8:L};(k=new Y.uint16(1))[0]=4660;var C=52===new Y.uint8(k.buffer)[0],q=!0===C?1:0,z=new T(1),B=new I(z.buffer);function D(r){return z[0]=r,B[q]}function J(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))}var K=-.16666666666666632;function Q(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(K+o*n):r-(o*(.5*t-e*n)-t-e*K)}var R,X,Z=!0===C?0:1,$=new T(1),rr=new I($.buffer);!0===C?(R=1,X=0):(R=0,X=1);var tr={HIGH:R,LOW:X},nr=new T(1),er=new I(nr.buffer),or=tr.HIGH,ur=tr.LOW;function fr(r,t){return er[or]=r,er[ur]=t,nr[0]}var ir,ar,cr=Math.floor;!0===C?(ir=1,ar=0):(ir=0,ar=1);var lr={HIGH:ir,LOW:ar},yr=new T(1),pr=new I(yr.buffer),vr=lr.HIGH,sr=lr.LOW;function br(r,t){return yr[0]=t,r[0]=pr[vr],r[1]=pr[sr],r}function dr(r,t){return 1===arguments.length?br([0,0],r):br(r,t)}var wr=[0,0];function _r(r,t,n,e){return y(r)||s(r)?(t[e]=r,t[e+n]=0,t):0!==r&&b(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return _r(r,[0,0],1,0)}),"assign",_r);var Ar=[0,0],Nr=[0,0];function mr(r,t){var n,e,o,u,f;return 0===t||0===r||y(r)||s(r)?r:(_r(r,Ar,1,0),t+=Ar[1],t+=function(r){var t=D(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Ar[0]),t<-1074?(o=r,dr(wr,0),u=wr[0],u&=2147483647,f=D(o),fr(u|=f&=2147483648,wr[1])):t>1023?r<0?v:p:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,dr(Nr,r),n=Nr[0],n&=2148532223,e*fr(n|=t+1023<<20,Nr[1])))}function hr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gr=16777216,Ir=5.960464477539063e-8,Or=hr(20),Sr=hr(20),Er=hr(20),Fr=hr(20);function Tr(r,t,n,e,o,u,f,i,a){var c,l,y,p,v,s,b,d,w;for(p=u,w=e[n],d=n,v=0;d>0;v++)l=Ir*w|0,Fr[v]=w-gr*l|0,w=e[d-1]+l,d-=1;if(w=mr(w,o),w-=8*cr(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Fr[n-1]>>24-o,Fr[n-1]-=v<<24-o,y=Fr[n-1]>>23-o):0===o?y=Fr[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<n;v++)d=Fr[v],0===c?0!==d&&(c=1,Fr[v]=16777216-d):Fr[v]=16777215-d;if(o>0)switch(o){case 1:Fr[n-1]&=8388607;break;case 2:Fr[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=mr(1,o)))}if(0===w){for(d=0,v=n-1;v>=u;v--)d|=Fr[v];if(0===d){for(s=1;0===Fr[u-s];s++);for(v=n+1;v<=n+s;v++){for(a[i+v]=Ur[f+v],l=0,d=0;d<=i;d++)l+=r[d]*a[i+(v-d)];e[v]=l}return Tr(r,t,n+=s,e,o,u,f,i,a)}}if(0===w)for(n-=1,o-=24;0===Fr[n];)n-=1,o-=24;else(w=mr(w,-o))>=gr?(l=Ir*w|0,Fr[n]=w-gr*l|0,o+=24,Fr[n+=1]=l):Fr[n]=0|w;for(l=mr(1,o),v=n;v>=0;v--)e[v]=l*Fr[v],l*=Ir;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=jr[s]*e[v+s];Er[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Er[v];for(t[0]=0===y?l:-l,l=Er[0]-l,v=1;v<=n;v++)l+=Er[v];return t[1]=0===y?l:-l,7&b}function Hr(r,t,n,e){var o,u,f,i,a,c,l;for((u=(n-3)/24|0)<0&&(u=0),i=n-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)Or[a]=c<0?0:Ur[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Or[f+(a-c)];Sr[a]=o}return Tr(r,t,4,Sr,i,4,u,f,Or)}var Gr=Math.round;function Pr(r,t,n){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),f=6077100506506192e-26*e,i=t>>20|0,n[0]=u-f,i-(D(n[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),n[0]=u-f,i-(D(n[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),n[0]=u-f)),n[1]=u-n[0]-f,e}var xr=1.5707963267341256,Lr=6077100506506192e-26,Mr=2*Lr,Vr=3*Lr,Wr=4*Lr,kr=[0,0,0],Yr=[0,0];function Cr(r,t){var n,e,o,u,f,i,a;if((o=2147483647&D(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Pr(r,o,t):o<=1073928572?r>0?(a=r-xr,t[0]=a-Lr,t[1]=a-t[0]-Lr,1):(a=r+xr,t[0]=a+Lr,t[1]=a-t[0]+Lr,-1):r>0?(a=r-2*xr,t[0]=a-Mr,t[1]=a-t[0]-Mr,2):(a=r+2*xr,t[0]=a+Mr,t[1]=a-t[0]+Mr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Pr(r,o,t):r>0?(a=r-3*xr,t[0]=a-Vr,t[1]=a-t[0]-Vr,3):(a=r+3*xr,t[0]=a+Vr,t[1]=a-t[0]+Vr,-3):1075388923===o?Pr(r,o,t):r>0?(a=r-4*xr,t[0]=a-Wr,t[1]=a-t[0]-Wr,4):(a=r+4*xr,t[0]=a+Wr,t[1]=a-t[0]+Wr,-4);if(o<1094263291)return Pr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return $[0]=r,rr[Z]}(r),a=fr(o-((e=(o>>20)-1046)<<20|0),n),f=0;f<2;f++)kr[f]=0|a,a=16777216*(a-kr[f]);for(kr[2]=a,u=3;0===kr[u-1];)u-=1;return i=Hr(kr,Yr,e,u),r<0?(t[0]=-Yr[0],t[1]=-Yr[1],-i):(t[0]=Yr[0],t[1]=Yr[1],i)}var qr=[0,0];function zr(r){var t;if(t=D(r),(t&=2147483647)<=1072243195)return t<1044381696?1:J(r,0);if(t>=2146435072)return NaN;switch(3&Cr(r,qr)){case 0:return J(qr[0],qr[1]);case 1:return-Q(qr[0],qr[1]);case 2:return-J(qr[0],qr[1]);default:return Q(qr[0],qr[1])}}var Br=[0,0],Dr=3.141592653589793;function Jr(r){var t,n,e,o;return y(r)||s(r)?NaN:(t=b(r))>9007199254740992?1:.5==(e=t-(n=cr(t)))?0:(o=e<.25?zr(Dr*e):e<.75?function(r){var t;if(t=D(r),(t&=2147483647)<=1072243195)return t<1045430272?r:Q(r,0);if(t>=2146435072)return NaN;switch(3&Cr(r,Br)){case 0:return Q(Br[0],Br[1]);case 1:return J(Br[0],Br[1]);case 2:return-Q(Br[0],Br[1]);default:return-J(Br[0],Br[1])}}(Dr*(e=.5-e)):-zr(Dr*(e=1-e)),n%2==1?-o:o)}function Kr(r,t,n){return y(r)||y(t)||y(n)||n<0?NaN:0===n?r===t?p:0:r<t-n||r>t+n?0:(1+Jr((r-t)/n))/(2*n)}function Qr(r){return function(){return r}}function Rr(r){return y(r)?Qr(NaN):function(t){return y(t)?NaN:t===r?p:0}}function Xr(r,t){return y(r)||y(t)||t<0?Qr(NaN):0===t?Rr(r):function(n){return y(n)?NaN:n<r-t||n>r+t?0:(1+Jr((n-r)/t))/(2*t)}}l((function(r,t){return y(r)||y(t)?NaN:r===t?p:0}),"factory",Rr),l(Kr,"factory",Xr),r.default=Kr,r.factory=Xr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).pdf={});
//# sourceMappingURL=browser.js.map
