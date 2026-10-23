(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="169",hm=0,yu=1,um=2,$d=1,fm=2,fi=3,Oi=0,cn=1,jn=2,Ni=0,no=1,Qo=2,bu=3,Su=4,dm=5,is=100,pm=101,mm=102,gm=103,vm=104,_m=200,xm=201,Mm=202,ym=203,fl=204,dl=205,bm=206,Sm=207,wm=208,Em=209,Tm=210,Am=211,Rm=212,Cm=213,Pm=214,pl=0,ml=1,gl=2,oo=3,vl=4,_l=5,xl=6,Ml=7,La=0,Lm=1,Im=2,ki=0,Dm=1,Um=2,Nm=3,km=4,Fm=5,Om=6,Bm=7,Kd=300,ro=301,ao=302,yl=303,bl=304,Ia=306,Bi=1e3,rs=1001,Sl=1002,an=1003,zm=1004,Mr=1005,yn=1006,Qa=1007,pi=1008,Mi=1009,jd=1010,Zd=1011,tr=1012,Eh=1013,ms=1014,Zn=1015,fr=1016,Th=1017,Ah=1018,co=1020,Jd=35902,Qd=1021,t0=1022,bn=1023,e0=1024,n0=1025,io=1026,lo=1027,Da=1028,Rh=1029,i0=1030,Ch=1031,Ph=1033,na=33776,ia=33777,sa=33778,oa=33779,wl=35840,El=35841,Tl=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Ll=37808,Il=37809,Dl=37810,Ul=37811,Nl=37812,kl=37813,Fl=37814,Ol=37815,Bl=37816,zl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,ra=36492,Xl=36494,ql=36495,s0=36283,Yl=36284,$l=36285,Kl=36286,Hm=3200,Gm=3201,Lh=0,Vm=1,Ui="",Ve="srgb",Gi="srgb-linear",Ih="display-p3",Ua="display-p3-linear",va="linear",xe="srgb",_a="rec709",xa="p3",Ls=7680,wu=519,Wm=512,Xm=513,qm=514,o0=515,Ym=516,$m=517,Km=518,jm=519,Eu=35044,Tu="300 es",mi=2e3,Ma=2001;class po{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Au=1234567;const Vo=Math.PI/180,ho=180/Math.PI;function As(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function Dh(n,t){return(n%t+t)%t}function Zm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Jm(n,t,e){return n!==t?(e-n)/(t-n):0}function Wo(n,t,e){return(1-e)*n+e*t}function Qm(n,t,e,i){return Wo(n,t,1-Math.exp(-e*i))}function tg(n,t=1){return t-Math.abs(Dh(n,t*2)-t)}function eg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ng(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ig(n,t){return n+Math.floor(Math.random()*(t-n+1))}function sg(n,t){return n+Math.random()*(t-n)}function og(n){return n*(.5-Math.random())}function rg(n){n!==void 0&&(Au=n);let t=Au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ag(n){return n*Vo}function cg(n){return n*ho}function lg(n){return(n&n-1)===0&&n!==0}function hg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ug(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fg(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),h=o((t+i)/2),l=r((t+i)/2),u=o((t-i)/2),f=r((t-i)/2),d=o((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":n.set(a*l,c*u,c*f,a*h);break;case"YZY":n.set(c*f,a*l,c*u,a*h);break;case"ZXZ":n.set(c*u,c*f,a*l,a*h);break;case"XZX":n.set(a*l,c*g,c*d,a*h);break;case"YXY":n.set(c*d,a*l,c*g,a*h);break;case"ZYZ":n.set(c*g,c*d,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ks(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const r0={DEG2RAD:Vo,RAD2DEG:ho,generateUUID:As,clamp:We,euclideanModulo:Dh,mapLinear:Zm,inverseLerp:Jm,lerp:Wo,damp:Qm,pingpong:tg,smoothstep:eg,smootherstep:ng,randInt:ig,randFloat:sg,randFloatSpread:og,seededRandom:rg,degToRad:ag,radToDeg:cg,isPowerOfTwo:lg,ceilPowerOfTwo:hg,floorPowerOfTwo:ug,setQuaternionFromProperEuler:fg,normalize:nn,denormalize:Ks};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,s,o,r,a,c,h){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,h)}set(t,e,i,s,o,r,a,c,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=o,l[5]=c,l[6]=i,l[7]=r,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],h=i[1],l=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],p=s[3],m=s[6],w=s[1],x=s[4],S=s[7],I=s[2],C=s[5],T=s[8];return o[0]=r*_+a*w+c*I,o[3]=r*p+a*x+c*C,o[6]=r*m+a*S+c*T,o[1]=h*_+l*w+u*I,o[4]=h*p+l*x+u*C,o[7]=h*m+l*S+u*T,o[2]=f*_+d*w+g*I,o[5]=f*p+d*x+g*C,o[8]=f*m+d*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*r*l-e*a*h-i*o*l+i*a*c+s*o*h-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=l*r-a*h,f=a*c-l*o,d=h*o-r*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*h-l*i)*_,t[2]=(a*i-s*r)*_,t[3]=f*_,t[4]=(l*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(i*c-h*e)*_,t[8]=(r*e-i*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),h=Math.sin(o);return this.set(i*c,i*h,-i*(c*r+h*a)+r+t,-s*h,s*c,-s*(-h*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tc.makeScale(t,e)),this}rotate(t){return this.premultiply(tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new jt;function a0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dg(){const n=ya("canvas");return n.style.display="block",n}const Ru={};function aa(n){n in Ru||(Ru[n]=!0,console.warn(n))}function pg(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function mg(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gg(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Cu=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pu=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[Gi]:{transfer:va,primaries:_a,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ve]:{transfer:xe,primaries:_a,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ua]:{transfer:va,primaries:xa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Pu),fromReference:n=>n.applyMatrix3(Cu)},[Ih]:{transfer:xe,primaries:xa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Pu),fromReference:n=>n.applyMatrix3(Cu).convertLinearToSRGB()}},vg=new Set([Gi,Ua]),he={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!vg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=yo[t].toReference,s=yo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return yo[n].primaries},getTransfer:function(n){return n===Ui?va:yo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(yo[t].luminanceCoefficients)}};function so(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ec(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Is;class _g{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Is===void 0&&(Is=ya("canvas")),Is.width=t.width,Is.height=t.height;const i=Is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ya("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=so(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(so(e[i]/255)*255):e[i]=so(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xg=0;class c0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(nc(s[r].image)):o.push(nc(s[r]))}else o=nc(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function nc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_g.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mg=0;class tn extends po{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=rs,s=rs,o=yn,r=pi,a=bn,c=Mi,h=tn.DEFAULT_ANISOTROPY,l=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=As(),this.name="",this.source=new c0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Kd;tn.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,i=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,h=c[0],l=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(l-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,S=(d+1)/2,I=(m+1)/2,C=(l+f)/4,T=(u+_)/4,L=(g+p)/4;return x>S&&x>I?x<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(x),s=C/i,o=T/i):S>I?S<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(S),i=C/s,o=L/s):I<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),i=T/o,s=L/o),this.set(i,s,o,e),this}let w=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-l)*(f-l));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-_)/w,this.z=(f-l)/w,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yg extends po{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new c0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends yg{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class l0 extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bg extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ii{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],h=i[s+1],l=i[s+2],u=i[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||h!==d||l!==g){let p=1-a;const m=c*f+h*d+l*g+u*_,w=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const I=Math.sqrt(x),C=Math.atan2(I,m*w);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}const S=a*w;if(c=c*p+f*S,h=h*p+d*S,l=l*p+g*S,u=u*p+_*S,p===1-a){const I=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=I,h*=I,l*=I,u*=I}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],h=i[s+2],l=i[s+3],u=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+l*u+c*d-h*f,t[e+1]=c*g+l*f+h*u-a*d,t[e+2]=h*g+l*d+a*f-c*u,t[e+3]=l*g-a*u-c*f-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,h=a(i/2),l=a(s/2),u=a(o/2),f=c(i/2),d=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=f*l*u+h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u-f*d*g;break;case"YXZ":this._x=f*l*u+h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u+f*d*g;break;case"ZXY":this._x=f*l*u-h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u-f*d*g;break;case"ZYX":this._x=f*l*u-h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u+f*d*g;break;case"YZX":this._x=f*l*u+h*d*g,this._y=h*d*u+f*l*g,this._z=h*l*g-f*d*u,this._w=h*l*u-f*d*g;break;case"XZY":this._x=f*l*u-h*d*g,this._y=h*d*u-f*l*g,this._z=h*l*g+f*d*u,this._w=h*l*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],h=e[2],l=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(l-c)*d,this._y=(o-h)*d,this._z=(r-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(l-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+h)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(o-h)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+l)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(r-s)/d,this._x=(o+h)/d,this._y=(c+l)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=i*l+r*a+s*h-o*c,this._y=s*l+r*c+o*a-i*h,this._z=o*l+r*h+i*c-s*a,this._w=r*l-i*a-s*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-e)*l)/h,f=Math.sin(e*l)/h;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,h=2*(r*s-a*i),l=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*h+r*u-a*l,this.y=i+c*l+a*h-o*u,this.z=s+c*u+o*l-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new P,Lu=new ii;class Nn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Fn):Fn.fromBufferAttribute(o,r),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),br.subVectors(this.max,bo),Ds.subVectors(t.a,bo),Us.subVectors(t.b,bo),Ns.subVectors(t.c,bo),wi.subVectors(Us,Ds),Ei.subVectors(Ns,Us),Xi.subVectors(Ds,Ns);let e=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-Xi.z,Xi.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,Xi.z,0,-Xi.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-Xi.y,Xi.x,0];return!sc(e,Ds,Us,Ns,br)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,Ds,Us,Ns,br))?!1:(Sr.crossVectors(wi,Ei),e=[Sr.x,Sr.y,Sr.z],sc(e,Ds,Us,Ns,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new P,new P,new P,new P,new P,new P,new P,new P],Fn=new P,yr=new Nn,Ds=new P,Us=new P,Ns=new P,wi=new P,Ei=new P,Xi=new P,bo=new P,br=new P,Sr=new P,qi=new P;function sc(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){qi.fromArray(n,o);const a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),c=t.dot(qi),h=e.dot(qi),l=i.dot(qi);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}const Sg=new Nn,So=new P,oc=new P;class mo{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Sg.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;So.subVectors(t,this.center);const e=So.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(So,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(So.copy(t.center).add(oc)),this.expandByPoint(So.copy(t.center).sub(oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new P,rc=new P,wr=new P,Ti=new P,ac=new P,Er=new P,cc=new P;class h0{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){rc.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(rc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(wr),a=Ti.dot(this.direction),c=-Ti.dot(wr),h=Ti.lengthSq(),l=Math.abs(1-r*r);let u,f,d,g;if(l>0)if(u=r*c-a,f=r*a-c,g=o*l,u>=0)if(f>=-g)if(f<=g){const _=1/l;u*=_,f*=_,d=u*(u+r*f+2*a)+f*(r*u+f+2*c)+h}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+h;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+h;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+h):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+h):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+h);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rc).addScaledVector(wr,f),d}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),l>=0?(o=(t.min.y-f.y)*l,r=(t.max.y-f.y)*l):(o=(t.max.y-f.y)*l,r=(t.min.y-f.y)*l),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,o){ac.subVectors(e,t),Er.subVectors(i,t),cc.crossVectors(ac,Er);let r=this.direction.dot(cc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ti.subVectors(this.origin,t);const c=a*this.direction.dot(Er.crossVectors(Ti,Er));if(c<0)return null;const h=a*this.direction.dot(ac.cross(Ti));if(h<0||c+h>r)return null;const l=-a*Ti.dot(cc);return l<0?null:this.at(l/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,s,o,r,a,c,h,l,u,f,d,g,_,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,h,l,u,f,d,g,_,p)}set(t,e,i,s,o,r,a,c,h,l,u,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=h,m[6]=l,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ks.setFromMatrixColumn(t,0).length(),o=1/ks.setFromMatrixColumn(t,1).length(),r=1/ks.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),h=Math.sin(s),l=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*l,d=r*u,g=a*l,_=a*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=d+g*h,e[5]=f-_*h,e[9]=-a*c,e[2]=_-f*h,e[6]=g+d*h,e[10]=r*c}else if(t.order==="YXZ"){const f=c*l,d=c*u,g=h*l,_=h*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=r*h,e[1]=r*u,e[5]=r*l,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*l,d=c*u,g=h*l,_=h*u;e[0]=f-_*a,e[4]=-r*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*l,e[9]=_-f*a,e[2]=-r*h,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*l,d=r*u,g=a*l,_=a*u;e[0]=c*l,e[4]=g*h-d,e[8]=f*h+_,e[1]=c*u,e[5]=_*h+f,e[9]=d*h-g,e[2]=-h,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,d=r*h,g=a*c,_=a*h;e[0]=c*l,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*l,e[9]=-a*l,e[2]=-h*l,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=r*c,d=r*h,g=a*c,_=a*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=f*u+_,e[5]=r*l,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*l,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wg,t,Eg)}lookAt(t,e,i){const s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ai.crossVectors(i,_n),Ai.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ai.crossVectors(i,_n)),Ai.normalize(),Tr.crossVectors(_n,Ai),s[0]=Ai.x,s[4]=Tr.x,s[8]=_n.x,s[1]=Ai.y,s[5]=Tr.y,s[9]=_n.y,s[2]=Ai.z,s[6]=Tr.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],h=i[12],l=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],w=i[3],x=i[7],S=i[11],I=i[15],C=s[0],T=s[4],L=s[8],V=s[12],v=s[1],M=s[5],B=s[9],U=s[13],F=s[2],q=s[6],z=s[10],nt=s[14],Y=s[3],vt=s[7],_t=s[11],yt=s[15];return o[0]=r*C+a*v+c*F+h*Y,o[4]=r*T+a*M+c*q+h*vt,o[8]=r*L+a*B+c*z+h*_t,o[12]=r*V+a*U+c*nt+h*yt,o[1]=l*C+u*v+f*F+d*Y,o[5]=l*T+u*M+f*q+d*vt,o[9]=l*L+u*B+f*z+d*_t,o[13]=l*V+u*U+f*nt+d*yt,o[2]=g*C+_*v+p*F+m*Y,o[6]=g*T+_*M+p*q+m*vt,o[10]=g*L+_*B+p*z+m*_t,o[14]=g*V+_*U+p*nt+m*yt,o[3]=w*C+x*v+S*F+I*Y,o[7]=w*T+x*M+S*q+I*vt,o[11]=w*L+x*B+S*z+I*_t,o[15]=w*V+x*U+S*nt+I*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],h=t[13],l=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+o*c*u-s*h*u-o*a*f+i*h*f+s*a*d-i*c*d)+_*(+e*c*d-e*h*f+o*r*f-s*r*d+s*h*l-o*c*l)+p*(+e*h*u-e*a*d-o*r*u+i*r*d+o*a*l-i*h*l)+m*(-s*a*l-e*c*u+e*a*f+s*r*u-i*r*f+i*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],w=u*p*h-_*f*h+_*c*d-a*p*d-u*c*m+a*f*m,x=g*f*h-l*p*h-g*c*d+r*p*d+l*c*m-r*f*m,S=l*_*h-g*u*h+g*a*d-r*_*d-l*a*m+r*u*m,I=g*u*c-l*_*c-g*a*f+r*_*f+l*a*p-r*u*p,C=e*w+i*x+s*S+o*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=w*T,t[1]=(_*f*o-u*p*o-_*s*d+i*p*d+u*s*m-i*f*m)*T,t[2]=(a*p*o-_*c*o+_*s*h-i*p*h-a*s*m+i*c*m)*T,t[3]=(u*c*o-a*f*o-u*s*h+i*f*h+a*s*d-i*c*d)*T,t[4]=x*T,t[5]=(l*p*o-g*f*o+g*s*d-e*p*d-l*s*m+e*f*m)*T,t[6]=(g*c*o-r*p*o-g*s*h+e*p*h+r*s*m-e*c*m)*T,t[7]=(r*f*o-l*c*o+l*s*h-e*f*h-r*s*d+e*c*d)*T,t[8]=S*T,t[9]=(g*u*o-l*_*o-g*i*d+e*_*d+l*i*m-e*u*m)*T,t[10]=(r*_*o-g*a*o+g*i*h-e*_*h-r*i*m+e*a*m)*T,t[11]=(l*a*o-r*u*o-l*i*h+e*u*h+r*i*d-e*a*d)*T,t[12]=I*T,t[13]=(l*_*s-g*u*s+g*i*f-e*_*f-l*i*p+e*u*p)*T,t[14]=(g*a*s-r*_*s-g*i*c+e*_*c+r*i*p-e*a*p)*T,t[15]=(r*u*s-l*a*s+l*i*c-e*u*c-r*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,h=o*r,l=o*a;return this.set(h*r+i,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+i,l*c-s*r,0,h*c-s*a,l*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,h=o+o,l=r+r,u=a+a,f=o*h,d=o*l,g=o*u,_=r*l,p=r*u,m=a*u,w=c*h,x=c*l,S=c*u,I=i.x,C=i.y,T=i.z;return s[0]=(1-(_+m))*I,s[1]=(d+S)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(d-S)*C,s[5]=(1-(f+m))*C,s[6]=(p+w)*C,s[7]=0,s[8]=(g+x)*T,s[9]=(p-w)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=ks.set(s[0],s[1],s[2]).length();const r=ks.set(s[4],s[5],s[6]).length(),a=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);const h=1/o,l=1/r,u=1/a;return On.elements[0]*=h,On.elements[1]*=h,On.elements[2]*=h,On.elements[4]*=l,On.elements[5]*=l,On.elements[6]*=l,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=mi){const c=this.elements,h=2*o/(e-t),l=2*o/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===mi)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Ma)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=mi){const c=this.elements,h=1/(e-t),l=1/(i-s),u=1/(r-o),f=(e+t)*h,d=(i+s)*l;let g,_;if(a===mi)g=(r+o)*u,_=-2*u;else if(a===Ma)g=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ks=new P,On=new ae,wg=new P(0,0,0),Eg=new P(1,1,1),Ai=new P,Tr=new P,_n=new P,Iu=new ae,Du=new ii;class Tn{constructor(t=0,e=0,i=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],h=s[5],l=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-We(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-l,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Iu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class u0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tg=0;const Uu=new P,Fs=new ii,ci=new ae,Ar=new P,wo=new P,Ag=new P,Rg=new ii,Nu=new P(1,0,0),ku=new P(0,1,0),Fu=new P(0,0,1),Ou={type:"added"},Cg={type:"removed"},Os={type:"childadded",child:null},lc={type:"childremoved",child:null};class Ee extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new P,e=new Tn,i=new ii,s=new P(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new jt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(Nu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Fu,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ar.copy(t):Ar.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(wo,Ar,this.up):ci.lookAt(Ar,wo,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(ci),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cg),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,Ag),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,Rg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),h=r(t.textures),l=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){const c=[];for(const h in a){const l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new P,li=new P,hc=new P,hi=new P,Bs=new P,zs=new P,Bu=new P,uc=new P,fc=new P,dc=new P,pc=new Re,mc=new Re,gc=new Re;class Xn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Bn.subVectors(t,e),s.cross(Bn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Bn.subVectors(s,e),li.subVectors(i,e),hc.subVectors(t,e);const r=Bn.dot(Bn),a=Bn.dot(li),c=Bn.dot(hc),h=li.dot(li),l=li.dot(hc),u=r*h-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(h*c-a*l)*f,g=(r*l-a*c)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,hi.x),c.addScaledVector(r,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,i),gc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(pc,o.x),r.addScaledVector(mc,o.y),r.addScaledVector(gc,o.z),r}static isFrontFacing(t,e,i,s){return Bn.subVectors(i,e),li.subVectors(t,e),Bn.cross(li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Bn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return Xn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return Xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Bs.subVectors(s,i),zs.subVectors(o,i),uc.subVectors(t,i);const c=Bs.dot(uc),h=zs.dot(uc);if(c<=0&&h<=0)return e.copy(i);fc.subVectors(t,s);const l=Bs.dot(fc),u=zs.dot(fc);if(l>=0&&u<=l)return e.copy(s);const f=c*u-l*h;if(f<=0&&c>=0&&l<=0)return r=c/(c-l),e.copy(i).addScaledVector(Bs,r);dc.subVectors(t,o);const d=Bs.dot(dc),g=zs.dot(dc);if(g>=0&&d<=g)return e.copy(o);const _=d*h-c*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(i).addScaledVector(zs,a);const p=l*g-d*u;if(p<=0&&u-l>=0&&d-g>=0)return Bu.subVectors(o,s),a=(u-l)/(u-l+(d-g)),e.copy(s).addScaledVector(Bu,a);const m=1/(p+_+f);return r=_*m,a=f*m,e.copy(i).addScaledVector(Bs,r).addScaledVector(zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const f0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function vc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Dh(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=vc(r,o,t+1/3),this.g=vc(r,o,t),this.b=vc(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const i=f0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}copyLinearToSRGB(t){return this.r=ec(t.r),this.g=ec(t.g),this.b=ec(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return he.fromWorkingColorSpace(Ze.copy(this),t),Math.round(We(Ze.r*255,0,255))*65536+Math.round(We(Ze.g*255,0,255))*256+Math.round(We(Ze.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ze.copy(this),e);const i=Ze.r,s=Ze.g,o=Ze.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,h;const l=(a+r)/2;if(a===r)c=0,h=0;else{const u=r-a;switch(h=l<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ve){he.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,s=Ze.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Rr);const i=Wo(Ri.h,Rr.h,e),s=Wo(Ri.s,Rr.s,e),o=Wo(Ri.l,Rr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new ht;ht.NAMES=f0;let Pg=0;class Rs extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=As(),this.name="",this.type="Material",this.blending=no,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends Rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new P,Cr=new it;class Ce{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Eu,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=nn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),i=nn(i,this.array),s=nn(s,this.array),o=nn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eu&&(t.usage=this.usage),t}}class d0 extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class p0 extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ge extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Lg=0;const Cn=new ae,_c=new Ee,Hs=new P,xn=new Nn,Eo=new Nn,He=new P;class Ue extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a0(t)?p0:d0)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new jt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];xn.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(xn.min,Eo.min),xn.expandByPoint(He),He.addVectors(xn.max,Eo.max),xn.expandByPoint(He)):(xn.expandByPoint(Eo.min),xn.expandByPoint(Eo.max))}xn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)He.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(He));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)He.fromBufferAttribute(a,h),c&&(Hs.fromBufferAttribute(t,h),He.add(Hs)),s=Math.max(s,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new P,c[L]=new P;const h=new P,l=new P,u=new P,f=new it,d=new it,g=new it,_=new P,p=new P;function m(L,V,v){h.fromBufferAttribute(i,L),l.fromBufferAttribute(i,V),u.fromBufferAttribute(i,v),f.fromBufferAttribute(o,L),d.fromBufferAttribute(o,V),g.fromBufferAttribute(o,v),l.sub(h),u.sub(h),d.sub(f),g.sub(f);const M=1/(d.x*g.y-g.x*d.y);isFinite(M)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(M),p.copy(u).multiplyScalar(d.x).addScaledVector(l,-g.x).multiplyScalar(M),a[L].add(_),a[V].add(_),a[v].add(_),c[L].add(p),c[V].add(p),c[v].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,V=w.length;L<V;++L){const v=w[L],M=v.start,B=v.count;for(let U=M,F=M+B;U<F;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const x=new P,S=new P,I=new P,C=new P;function T(L){I.fromBufferAttribute(s,L),C.copy(I);const V=a[L];x.copy(V),x.sub(I.multiplyScalar(I.dot(V))).normalize(),S.crossVectors(C,V);const M=S.dot(c[L])<0?-1:1;r.setXYZW(L,x.x,x.y,x.z,M)}for(let L=0,V=w.length;L<V;++L){const v=w[L],M=v.start,B=v.count;for(let U=M,F=M+B;U<F;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new P,o=new P,r=new P,a=new P,c=new P,h=new P,l=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),l.subVectors(r,o),u.subVectors(s,o),l.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,p),a.add(l),c.add(l),h.add(l),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),l.subVectors(r,o),u.subVectors(s,o),l.cross(u),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const h=a.array,l=a.itemSize,u=a.normalized,f=new h.constructor(c.length*l);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*l;for(let m=0;m<l;m++)f[g++]=h[d++]}return new Ce(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],h=t(c,i);e.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const c=[],h=o[a];for(let l=0,u=h.length;l<u;l++){const f=h[l],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const h=r[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const h=i[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,f=h.length;u<f;u++){const d=h[u];l.push(d.toJSON(t.data))}l.length>0&&(s[c]=l,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const o=t.morphAttributes;for(const h in o){const l=[],u=o[h];for(let f=0,d=u.length;f<d;f++)l.push(u[f].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,l=r.length;h<l;h++){const u=r[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new ae,Yi=new h0,Pr=new mo,Hu=new P,Lr=new P,Ir=new P,Dr=new P,xc=new P,Ur=new P,Gu=new P,Nr=new P;class Xt extends Ee{constructor(t=new Ue,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ur.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const l=a[c],u=o[c];l!==0&&(xc.fromBufferAttribute(u,t),r?Ur.addScaledVector(xc,l):Ur.addScaledVector(xc.sub(e),l))}e.add(Ur)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pr.copy(i.boundingSphere),Pr.applyMatrix4(o),Yi.copy(t.ray).recast(t.near),!(Pr.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Pr,Hu)===null||Yi.origin.distanceToSquared(Hu)>(t.far-t.near)**2))&&(zu.copy(o).invert(),Yi.copy(t.ray).applyMatrix4(zu),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,h=o.attributes.uv,l=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=r[p.materialIndex],w=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=w,I=x;S<I;S+=3){const C=a.getX(S),T=a.getX(S+1),L=a.getX(S+2);s=kr(this,m,t,i,h,l,u,C,T,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const w=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);s=kr(this,r,t,i,h,l,u,w,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=r[p.materialIndex],w=Math.max(p.start,d.start),x=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let S=w,I=x;S<I;S+=3){const C=S,T=S+1,L=S+2;s=kr(this,m,t,i,h,l,u,C,T,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const w=p,x=p+1,S=p+2;s=kr(this,r,t,i,h,l,u,w,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ig(n,t,e,i,s,o,r,a){let c;if(t.side===cn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===Oi,a),c===null)return null;Nr.copy(a),Nr.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Nr);return h<e.near||h>e.far?null:{distance:h,point:Nr.clone(),object:n}}function kr(n,t,e,i,s,o,r,a,c,h){n.getVertexPosition(a,Lr),n.getVertexPosition(c,Ir),n.getVertexPosition(h,Dr);const l=Ig(n,t,e,i,Lr,Ir,Dr,Gu);if(l){const u=new P;Xn.getBarycoord(Gu,Lr,Ir,Dr,u),s&&(l.uv=Xn.getInterpolatedAttribute(s,a,c,h,u,new it)),o&&(l.uv1=Xn.getInterpolatedAttribute(o,a,c,h,u,new it)),r&&(l.normal=Xn.getInterpolatedAttribute(r,a,c,h,u,new P),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:c,c:h,normal:new P,materialIndex:0};Xn.getNormal(Lr,Ir,Dr,f.normal),l.face=f,l.barycoord=u}return l}class Cs extends Ue{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],h=[],l=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new ge(h,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(u,2));function g(_,p,m,w,x,S,I,C,T,L,V){const v=S/T,M=I/L,B=S/2,U=I/2,F=C/2,q=T+1,z=L+1;let nt=0,Y=0;const vt=new P;for(let _t=0;_t<z;_t++){const yt=_t*M-U;for(let Jt=0;Jt<q;Jt++){const oe=Jt*v-B;vt[_]=oe*w,vt[p]=yt*x,vt[m]=F,h.push(vt.x,vt.y,vt.z),vt[_]=0,vt[p]=0,vt[m]=C>0?1:-1,l.push(vt.x,vt.y,vt.z),u.push(Jt/T),u.push(1-_t/L),nt+=1}}for(let _t=0;_t<L;_t++)for(let yt=0;yt<T;yt++){const Jt=f+yt+q*_t,oe=f+yt+q*(_t+1),j=f+(yt+1)+q*(_t+1),ot=f+(yt+1)+q*_t;c.push(Jt,oe,ot),c.push(oe,j,ot),Y+=6}a.addGroup(d,Y,V),d+=Y,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function uo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function sn(n){const t={};for(let e=0;e<n.length;e++){const i=uo(n[e]);for(const s in i)t[s]=i[s]}return t}function Dg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function m0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Ug={clone:uo,merge:sn};var Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ng,this.fragmentShader=kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=uo(t.uniforms),this.uniformsGroups=Dg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class g0 extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new P,Vu=new it,Wu=new it;class rn extends g0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Vu,Wu),e.subVectors(Wu,Vu)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,h=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/h,s*=r.width/c,i*=r.height/h}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gs=-90,Vs=1;class Fg extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Gs,Vs,t,e);s.layers=this.layers,this.add(s);const o=new rn(Gs,Vs,t,e);o.layers=this.layers,this.add(o);const r=new rn(Gs,Vs,t,e);r.layers=this.layers,this.add(r);const a=new rn(Gs,Vs,t,e);a.layers=this.layers,this.add(a);const c=new rn(Gs,Vs,t,e);c.layers=this.layers,this.add(c);const h=new rn(Gs,Vs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const h of e)this.remove(h);if(t===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,h,l]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,l),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class v0 extends tn{constructor(t,e,i,s,o,r,a,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:ro,super(t,e,i,s,o,r,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Og extends gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new v0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cs(5,5,5),o=new yi({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ni});o.uniforms.tEquirect.value=e;const r=new Xt(s,o),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=yn),new Fg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const Mc=new P,Bg=new P,zg=new jt;class es{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Mc.subVectors(i,e).cross(Bg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Mc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||zg.getNormalMatrix(t),s=this.coplanarPoint(Mc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new mo,Fr=new P;class Uh{constructor(t=new es,e=new es,i=new es,s=new es,o=new es,r=new es){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mi){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],h=s[4],l=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],w=s[13],x=s[14],S=s[15];if(i[0].setComponents(c-o,f-h,p-d,S-m).normalize(),i[1].setComponents(c+o,f+h,p+d,S+m).normalize(),i[2].setComponents(c+r,f+l,p+g,S+w).normalize(),i[3].setComponents(c-r,f-l,p-g,S-w).normalize(),i[4].setComponents(c-a,f-u,p-_,S-x).normalize(),e===mi)i[5].setComponents(c+a,f+u,p+_,S+x).normalize();else if(e===Ma)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _0(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Hg(n){const t=new WeakMap;function e(a,c){const h=a.array,l=a.usage,u=h.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,h,l),a.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,h){const l=c.array,u=c.updateRanges;if(n.bindBuffer(h,a),u.length===0)n.bufferSubData(h,0,l);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,c),h.version=a.version}}return{get:s,remove:o,update:r}}class Un extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),h=a+1,l=c+1,u=t/a,f=e/c,d=[],g=[],_=[],p=[];for(let m=0;m<l;m++){const w=m*f-r;for(let x=0;x<h;x++){const S=x*u-o;g.push(S,-w,0),_.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const x=w+h*m,S=w+h*(m+1),I=w+1+h*(m+1),C=w+1+h*m;d.push(x,S,C),d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$g=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,u1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$v=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Gg,alphahash_pars_fragment:Vg,alphamap_fragment:Wg,alphamap_pars_fragment:Xg,alphatest_fragment:qg,alphatest_pars_fragment:Yg,aomap_fragment:$g,aomap_pars_fragment:Kg,batching_pars_vertex:jg,batching_vertex:Zg,begin_vertex:Jg,beginnormal_vertex:Qg,bsdfs:t1,iridescence_fragment:e1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:o1,clipping_planes_vertex:r1,color_fragment:a1,color_pars_fragment:c1,color_pars_vertex:l1,color_vertex:h1,common:u1,cube_uv_reflection_fragment:f1,defaultnormal_vertex:d1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:v1,colorspace_fragment:_1,colorspace_pars_fragment:x1,envmap_fragment:M1,envmap_common_pars_fragment:y1,envmap_pars_fragment:b1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:U1,envmap_vertex:w1,fog_vertex:E1,fog_pars_vertex:T1,fog_fragment:A1,fog_pars_fragment:R1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:P1,lights_lambert_fragment:L1,lights_lambert_pars_fragment:I1,lights_pars_begin:D1,lights_toon_fragment:N1,lights_toon_pars_fragment:k1,lights_phong_fragment:F1,lights_phong_pars_fragment:O1,lights_physical_fragment:B1,lights_physical_pars_fragment:z1,lights_fragment_begin:H1,lights_fragment_maps:G1,lights_fragment_end:V1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:X1,logdepthbuf_pars_vertex:q1,logdepthbuf_vertex:Y1,map_fragment:$1,map_pars_fragment:K1,map_particle_fragment:j1,map_particle_pars_fragment:Z1,metalnessmap_fragment:J1,metalnessmap_pars_fragment:Q1,morphinstance_vertex:tv,morphcolor_vertex:ev,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:sv,normal_fragment_begin:ov,normal_fragment_maps:rv,normal_pars_fragment:av,normal_pars_vertex:cv,normal_vertex:lv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:fv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:pv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:vv,project_vertex:_v,dithering_fragment:xv,dithering_pars_fragment:Mv,roughnessmap_fragment:yv,roughnessmap_pars_fragment:bv,shadowmap_pars_fragment:Sv,shadowmap_pars_vertex:wv,shadowmap_vertex:Ev,shadowmask_pars_fragment:Tv,skinbase_vertex:Av,skinning_pars_vertex:Rv,skinning_vertex:Cv,skinnormal_vertex:Pv,specularmap_fragment:Lv,specularmap_pars_fragment:Iv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Uv,transmission_fragment:Nv,transmission_pars_fragment:kv,uv_pars_fragment:Fv,uv_pars_vertex:Ov,uv_vertex:Bv,worldpos_vertex:zv,background_vert:Hv,background_frag:Gv,backgroundCube_vert:Vv,backgroundCube_frag:Wv,cube_vert:Xv,cube_frag:qv,depth_vert:Yv,depth_frag:$v,distanceRGBA_vert:Kv,distanceRGBA_frag:jv,equirect_vert:Zv,equirect_frag:Jv,linedashed_vert:Qv,linedashed_frag:t2,meshbasic_vert:e2,meshbasic_frag:n2,meshlambert_vert:i2,meshlambert_frag:s2,meshmatcap_vert:o2,meshmatcap_frag:r2,meshnormal_vert:a2,meshnormal_frag:c2,meshphong_vert:l2,meshphong_frag:h2,meshphysical_vert:u2,meshphysical_frag:f2,meshtoon_vert:d2,meshtoon_frag:p2,points_vert:m2,points_frag:g2,shadow_vert:v2,shadow_frag:_2,sprite_vert:x2,sprite_frag:M2},pt={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Kn={basic:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ht(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:sn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:sn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ht(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:sn([pt.points,pt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:sn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:sn([pt.common,pt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:sn([pt.sprite,pt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:sn([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:sn([pt.lights,pt.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Kn.physical={uniforms:sn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Or={r:0,b:0,g:0},Ki=new Tn,y2=new ae;function b2(n,t,e,i,s,o,r){const a=new ht(0);let c=o===!0?0:1,h,l,u=null,f=0,d=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function _(w){let x=!1;const S=g(w);S===null?m(a,c):S&&S.isColor&&(m(S,1),x=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Ia)?(l===void 0&&(l=new Xt(new Cs(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:uo(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),Ki.copy(x.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(y2.makeRotationFromEuler(Ki)),l.material.toneMapped=he.getTransfer(S.colorSpace)!==xe,(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(h===void 0&&(h=new Xt(new Un(2,2),new yi({name:"BackgroundMaterial",uniforms:uo(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=S,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=he.getTransfer(S.colorSpace)!==xe,S.matrixAutoUpdate===!0&&S.updateMatrix(),h.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function m(w,x){w.getRGB(Or,m0(n)),i.buffers.color.setClear(Or.r,Or.g,Or.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:_,addToRenderList:p}}function S2(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let o=s,r=!1;function a(v,M,B,U,F){let q=!1;const z=u(U,B,M);o!==z&&(o=z,h(o.object)),q=d(v,U,B,F),q&&g(v,U,B,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,S(v,M,B,U),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return n.createVertexArray()}function h(v){return n.bindVertexArray(v)}function l(v){return n.deleteVertexArray(v)}function u(v,M,B){const U=B.wireframe===!0;let F=i[v.id];F===void 0&&(F={},i[v.id]=F);let q=F[M.id];q===void 0&&(q={},F[M.id]=q);let z=q[U];return z===void 0&&(z=f(c()),q[U]=z),z}function f(v){const M=[],B=[],U=[];for(let F=0;F<e;F++)M[F]=0,B[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:B,attributeDivisors:U,object:v,attributes:{},index:null}}function d(v,M,B,U){const F=o.attributes,q=M.attributes;let z=0;const nt=B.getAttributes();for(const Y in nt)if(nt[Y].location>=0){const _t=F[Y];let yt=q[Y];if(yt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),_t===void 0||_t.attribute!==yt||yt&&_t.data!==yt.data)return!0;z++}return o.attributesNum!==z||o.index!==U}function g(v,M,B,U){const F={},q=M.attributes;let z=0;const nt=B.getAttributes();for(const Y in nt)if(nt[Y].location>=0){let _t=q[Y];_t===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor));const yt={};yt.attribute=_t,_t&&_t.data&&(yt.data=_t.data),F[Y]=yt,z++}o.attributes=F,o.attributesNum=z,o.index=U}function _(){const v=o.newAttributes;for(let M=0,B=v.length;M<B;M++)v[M]=0}function p(v){m(v,0)}function m(v,M){const B=o.newAttributes,U=o.enabledAttributes,F=o.attributeDivisors;B[v]=1,U[v]===0&&(n.enableVertexAttribArray(v),U[v]=1),F[v]!==M&&(n.vertexAttribDivisor(v,M),F[v]=M)}function w(){const v=o.newAttributes,M=o.enabledAttributes;for(let B=0,U=M.length;B<U;B++)M[B]!==v[B]&&(n.disableVertexAttribArray(B),M[B]=0)}function x(v,M,B,U,F,q,z){z===!0?n.vertexAttribIPointer(v,M,B,F,q):n.vertexAttribPointer(v,M,B,U,F,q)}function S(v,M,B,U){_();const F=U.attributes,q=B.getAttributes(),z=M.defaultAttributeValues;for(const nt in q){const Y=q[nt];if(Y.location>=0){let vt=F[nt];if(vt===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(vt=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(vt=v.instanceColor)),vt!==void 0){const _t=vt.normalized,yt=vt.itemSize,Jt=t.get(vt);if(Jt===void 0)continue;const oe=Jt.buffer,j=Jt.type,ot=Jt.bytesPerElement,At=j===n.INT||j===n.UNSIGNED_INT||vt.gpuType===Eh;if(vt.isInterleavedBufferAttribute){const mt=vt.data,Ot=mt.stride,Ft=vt.offset;if(mt.isInstancedInterleavedBuffer){for(let qt=0;qt<Y.locationSize;qt++)m(Y.location+qt,mt.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let qt=0;qt<Y.locationSize;qt++)p(Y.location+qt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let qt=0;qt<Y.locationSize;qt++)x(Y.location+qt,yt/Y.locationSize,j,_t,Ot*ot,(Ft+yt/Y.locationSize*qt)*ot,At)}else{if(vt.isInstancedBufferAttribute){for(let mt=0;mt<Y.locationSize;mt++)m(Y.location+mt,vt.meshPerAttribute);v.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let mt=0;mt<Y.locationSize;mt++)p(Y.location+mt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let mt=0;mt<Y.locationSize;mt++)x(Y.location+mt,yt/Y.locationSize,j,_t,yt*ot,yt/Y.locationSize*mt*ot,At)}}else if(z!==void 0){const _t=z[nt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(Y.location,_t);break;case 3:n.vertexAttrib3fv(Y.location,_t);break;case 4:n.vertexAttrib4fv(Y.location,_t);break;default:n.vertexAttrib1fv(Y.location,_t)}}}}w()}function I(){L();for(const v in i){const M=i[v];for(const B in M){const U=M[B];for(const F in U)l(U[F].object),delete U[F];delete M[B]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const M=i[v.id];for(const B in M){const U=M[B];for(const F in U)l(U[F].object),delete U[F];delete M[B]}delete i[v.id]}function T(v){for(const M in i){const B=i[M];if(B[v.id]===void 0)continue;const U=B[v.id];for(const F in U)l(U[F].object),delete U[F];delete B[v.id]}}function L(){V(),r=!0,o!==s&&(o=s,h(o.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:V,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function w2(n,t,e){let i;function s(h){i=h}function o(h,l){n.drawArrays(i,h,l),e.update(l,i,1)}function r(h,l,u){u!==0&&(n.drawArraysInstanced(i,h,l,u),e.update(l,i,u))}function a(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,l,0,u);let d=0;for(let g=0;g<u;g++)d+=l[g];e.update(d,i,1)}function c(h,l,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h.length;g++)r(h[g],l[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,l,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=l[_];for(let _=0;_<f.length;_++)e.update(g,i,f[_])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function E2(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==bn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Mi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Zn&&!L)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:I,maxSamples:C}}function T2(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new es,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){o=!0,l(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=l(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||o&&!p)o?l(null):h();else{const w=o?0:i,x=w*4;let S=m.clippingState||null;c.value=S,S=l(g,f,x,d);for(let I=0;I!==x;++I)S[I]=e[I];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(u,f,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=d;x!==_;++x,S+=4)r.copy(u[x]).applyMatrix4(w,a),r.normal.toArray(p,S),p[S+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function A2(n){let t=new WeakMap;function e(r,a){return a===yl?r.mapping=ro:a===bl&&(r.mapping=ao),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===yl||a===bl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const h=new Og(c.height);return h.fromEquirectangularTexture(n,r),t.set(r,h),r.addEventListener("dispose",s),e(h.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class x0 extends g0{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Js=4,Xu=[.125,.215,.35,.446,.526,.582],ss=20,yc=new x0,qu=new ht;let bc=null,Sc=0,wc=0,Ec=!1;const ns=(1+Math.sqrt(5))/2,Ws=1/ns,Yu=[new P(-ns,Ws,0),new P(ns,Ws,0),new P(-Ws,0,ns),new P(Ws,0,ns),new P(0,ns,-Ws),new P(0,ns,Ws),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class $u{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bc,Sc,wc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ro||t.mapping===ao?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:fr,format:bn,colorSpace:Gi,depthBuffer:!1},s=Ku(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R2(o)),this._blurMaterial=C2(o,t,e)}return s}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,yc)}_sceneToCubeUV(t,e,i,s){const a=new rn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(qu),l.toneMapping=ki,l.autoClear=!1;const d=new mn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Xt(new Cs,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(qu),_=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(h[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,h[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,h[m]));const x=this._cubeSize;Br(s,w*x,m>2?x:0,x,x),l.setRenderTarget(s),_&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ro||t.mapping===ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Xt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Br(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,yc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Yu[(s-o-1)%Yu.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Xt(this._lodPlanes[s],h),f=h.uniforms,d=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*ss-1),_=o/g,p=isFinite(o)?1+Math.floor(l*_):ss;p>ss&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ss}`);const m=[];let w=0;for(let T=0;T<ss;++T){const L=T/_,V=Math.exp(-L*L/2);m.push(V),T===0?w+=V:T<p&&(w+=2*V)}for(let T=0;T<m.length;T++)m[T]=m[T]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[s],I=3*S*(s>x-Js?s-x+Js:0),C=4*(this._cubeSize-S);Br(e,I,C,3*S,2*S),c.setRenderTarget(e),c.render(u,yc)}}function R2(n){const t=[],e=[],i=[];let s=n;const o=n-Js+1+Xu.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-Js?c=Xu[r-n+Js-1]:r===0&&(c=0),i.push(c);const h=1/(a-2),l=-h,u=1+h,f=[l,l,u,l,u,u,l,l,u,u,l,u],d=6,g=6,_=3,p=2,m=1,w=new Float32Array(_*g*d),x=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let C=0;C<d;C++){const T=C%3*2/3-1,L=C>2?0:-1,V=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];w.set(V,_*g*C),x.set(f,p*g*C);const v=[C,C,C,C,C,C];S.set(v,m*g*C)}const I=new Ue;I.setAttribute("position",new Ce(w,_)),I.setAttribute("uv",new Ce(x,p)),I.setAttribute("faceIndex",new Ce(S,m)),t.push(I),s>Js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ku(n,t,e){const i=new gs(n,t,e);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Br(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function C2(n,t,e){const i=new Float32Array(ss),s=new P(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ju(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Zu(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P2(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,h=c===yl||c===bl,l=c===ro||c===ao;if(h||l){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new $u(n)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return h&&d&&d.height>0||l&&d&&s(d)?(e===null&&(e=new $u(n)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function o(a){const c=a.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function L2(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&aa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function I2(n,t,e,i){const s={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],n.ARRAY_BUFFER)}}function h(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let x=0,S=w.length;x<S;x+=3){const I=w[x+0],C=w[x+1],T=w[x+2];f.push(I,C,C,T,T,I)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,S=w.length/3-1;x<S;x+=3){const I=x+0,C=x+1,T=x+2;f.push(I,C,C,T,T,I)}}else return;const p=new(a0(f)?p0:d0)(f,1);p.version=_;const m=o.get(u);m&&t.remove(m),o.set(u,p)}function l(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&h(u)}else h(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function D2(n,t,e){let i;function s(f){i=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,d){n.drawElements(i,d,o,f*r),e.update(d,i,1)}function h(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,o,f*r,g),e.update(d,i,g))}function l(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function u(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)h(f[m]/r,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,o,f,0,_,0,g);let m=0;for(let w=0;w<g;w++)m+=d[w];for(let w=0;w<_.length;w++)e.update(m,i,_[w])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function U2(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function N2(n,t,e){const i=new WeakMap,s=new Re;function o(r,a,c){const h=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=l!==void 0?l.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let V=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",V)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let S=a.attributes.position.count*x,I=1;S>t.maxTextureSize&&(I=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const C=new Float32Array(S*I*4*u),T=new l0(C,S,I,u);T.type=Zn,T.needsUpdate=!0;const L=x*4;for(let v=0;v<u;v++){const M=p[v],B=m[v],U=w[v],F=S*I*4*v;for(let q=0;q<M.count;q++){const z=q*L;d===!0&&(s.fromBufferAttribute(M,q),C[F+z+0]=s.x,C[F+z+1]=s.y,C[F+z+2]=s.z,C[F+z+3]=0),g===!0&&(s.fromBufferAttribute(B,q),C[F+z+4]=s.x,C[F+z+5]=s.y,C[F+z+6]=s.z,C[F+z+7]=0),_===!0&&(s.fromBufferAttribute(U,q),C[F+z+8]=s.x,C[F+z+9]=s.y,C[F+z+10]=s.z,C[F+z+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new it(S,I)},i.set(a,f),a.addEventListener("dispose",V)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",h)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function k2(n,t,e,i){let s=new WeakMap;function o(c){const h=i.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function r(){s=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:r}}class M0 extends tn{constructor(t,e,i,s,o,r,a,c,h,l=io){if(l!==io&&l!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===io&&(i=ms),i===void 0&&l===lo&&(i=co),super(null,s,o,r,a,c,l,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const y0=new tn,Ju=new M0(1,1),b0=new l0,S0=new bg,w0=new v0,Qu=[],tf=[],ef=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function go(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Qu[s];if(o===void 0&&(o=new Float32Array(s),Qu[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Na(n,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function F2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function O2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function B2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function z2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function H2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;sf.set(i),n.uniformMatrix2fv(this.addr,!1,sf),ze(e,i)}}function G2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;nf.set(i),n.uniformMatrix3fv(this.addr,!1,nf),ze(e,i)}}function V2(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;ef.set(i),n.uniformMatrix4fv(this.addr,!1,ef),ze(e,i)}}function W2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function X2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function q2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function Y2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function $2(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function K2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function j2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function Z2(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function J2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Ju.compareFunction=o0,o=Ju):o=y0,e.setTexture2D(t||o,s)}function Q2(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||S0,s)}function t_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||w0,s)}function e_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||b0,s)}function n_(n){switch(n){case 5126:return F2;case 35664:return O2;case 35665:return B2;case 35666:return z2;case 35674:return H2;case 35675:return G2;case 35676:return V2;case 5124:case 35670:return W2;case 35667:case 35671:return X2;case 35668:case 35672:return q2;case 35669:case 35673:return Y2;case 5125:return $2;case 36294:return K2;case 36295:return j2;case 36296:return Z2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}function i_(n,t){n.uniform1fv(this.addr,t)}function s_(n,t){const e=go(t,this.size,2);n.uniform2fv(this.addr,e)}function o_(n,t){const e=go(t,this.size,3);n.uniform3fv(this.addr,e)}function r_(n,t){const e=go(t,this.size,4);n.uniform4fv(this.addr,e)}function a_(n,t){const e=go(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function c_(n,t){const e=go(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function l_(n,t){const e=go(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function h_(n,t){n.uniform1iv(this.addr,t)}function u_(n,t){n.uniform2iv(this.addr,t)}function f_(n,t){n.uniform3iv(this.addr,t)}function d_(n,t){n.uniform4iv(this.addr,t)}function p_(n,t){n.uniform1uiv(this.addr,t)}function m_(n,t){n.uniform2uiv(this.addr,t)}function g_(n,t){n.uniform3uiv(this.addr,t)}function v_(n,t){n.uniform4uiv(this.addr,t)}function __(n,t,e){const i=this.cache,s=t.length,o=Na(e,s);Be(i,o)||(n.uniform1iv(this.addr,o),ze(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||y0,o[r])}function x_(n,t,e){const i=this.cache,s=t.length,o=Na(e,s);Be(i,o)||(n.uniform1iv(this.addr,o),ze(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||S0,o[r])}function M_(n,t,e){const i=this.cache,s=t.length,o=Na(e,s);Be(i,o)||(n.uniform1iv(this.addr,o),ze(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||w0,o[r])}function y_(n,t,e){const i=this.cache,s=t.length,o=Na(e,s);Be(i,o)||(n.uniform1iv(this.addr,o),ze(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||b0,o[r])}function b_(n){switch(n){case 5126:return i_;case 35664:return s_;case 35665:return o_;case 35666:return r_;case 35674:return a_;case 35675:return c_;case 35676:return l_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return y_}}class S_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=n_(e.type)}}class w_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b_(e.type)}}class E_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function of(n,t){n.seq.push(t),n.map[t.id]=t}function T_(n,t,e){const i=n.name,s=i.length;for(Tc.lastIndex=0;;){const o=Tc.exec(i),r=Tc.lastIndex;let a=o[1];const c=o[2]==="]",h=o[3];if(c&&(a=a|0),h===void 0||h==="["&&r+2===s){of(e,h===void 0?new S_(a,n,t):new w_(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new E_(a),of(e,u)),e=u}}}class ca{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);T_(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function rf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const A_=37297;let R_=0;function C_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function P_(n){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(n);let i;switch(t===e?i="":t===xa&&e===_a?i="LinearDisplayP3ToLinearSRGB":t===_a&&e===xa&&(i="LinearSRGBToLinearDisplayP3"),n){case Gi:case Ua:return[i,"LinearTransferOETF"];case Ve:case Ih:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function af(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+C_(n.getShaderSource(t),r)}else return s}function L_(n,t){const e=P_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function I_(n,t){let e;switch(t){case Dm:e="Linear";break;case Um:e="Reinhard";break;case Nm:e="Cineon";break;case km:e="ACESFilmic";break;case Om:e="AgX";break;case Bm:e="Neutral";break;case Fm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new P;function D_(){he.getLuminanceCoefficients(zr);const n=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function N_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function k_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Bo(n){return n!==""}function cf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(n){return n.replace(F_,B_)}const O_=new Map;function B_(n,t){let e=Kt[t];if(e===void 0){const i=O_.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}const z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(n){return n.replace(z_,H_)}function H_(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function uf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function G_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$d?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function V_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ro:case ao:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ao:t="ENVMAP_MODE_REFRACTION";break}return t}function X_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case La:t="ENVMAP_BLENDING_MULTIPLY";break;case Lm:t="ENVMAP_BLENDING_MIX";break;case Im:t="ENVMAP_BLENDING_ADD";break}return t}function q_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Y_(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=G_(e),h=V_(e),l=W_(e),u=X_(e),f=q_(e),d=U_(e),g=N_(o),_=s.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bo).join(`
`),m.length>0&&(m+=`
`)):(p=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),m=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ki?I_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,L_("linearToOutputTexel",e.outputColorSpace),D_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bo).join(`
`)),r=jl(r),r=cf(r,e),r=lf(r,e),a=jl(a),a=cf(a,e),a=lf(a,e),r=hf(r),a=hf(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=w+p+r,S=w+m+a,I=rf(s,s.VERTEX_SHADER,x),C=rf(s,s.FRAGMENT_SHADER,S);s.attachShader(_,I),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(M){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(I).trim(),F=s.getShaderInfoLog(C).trim();let q=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,C);else{const nt=af(s,I,"vertex"),Y=af(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+B+`
`+nt+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||F==="")&&(z=!1);z&&(M.diagnostics={runnable:q,programLog:B,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(I),s.deleteShader(C),L=new ca(s,_),V=k_(s,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let V;this.getAttributes=function(){return V===void 0&&T(this),V};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,A_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let $_=0;class K_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new j_(t),e.set(t,i)),i}}class j_{constructor(t){this.id=$_++,this.code=t,this.usedTimes=0}}function Z_(n,t,e,i,s,o,r){const a=new u0,c=new K_,h=new Set,l=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return h.add(v),v===0?"uv":`uv${v}`}function m(v,M,B,U,F){const q=U.fog,z=F.geometry,nt=v.isMeshStandardMaterial?U.environment:null,Y=(v.isMeshStandardMaterial?e:t).get(v.envMap||nt),vt=Y&&Y.mapping===Ia?Y.image.height:null,_t=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const yt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Jt=yt!==void 0?yt.length:0;let oe=0;z.morphAttributes.position!==void 0&&(oe=1),z.morphAttributes.normal!==void 0&&(oe=2),z.morphAttributes.color!==void 0&&(oe=3);let j,ot,At,mt;if(_t){const hn=Kn[_t];j=hn.vertexShader,ot=hn.fragmentShader}else j=v.vertexShader,ot=v.fragmentShader,c.update(v),At=c.getVertexShaderID(v),mt=c.getFragmentShaderID(v);const Ot=n.getRenderTarget(),Ft=F.isInstancedMesh===!0,qt=F.isBatchedMesh===!0,Zt=!!v.map,Q=!!v.matcap,R=!!Y,ut=!!v.aoMap,lt=!!v.lightMap,st=!!v.bumpMap,ft=!!v.normalMap,Dt=!!v.displacementMap,bt=!!v.emissiveMap,A=!!v.metalnessMap,b=!!v.roughnessMap,G=v.anisotropy>0,Z=v.clearcoat>0,tt=v.dispersion>0,J=v.iridescence>0,Pt=v.sheen>0,dt=v.transmission>0,Et=G&&!!v.anisotropyMap,te=Z&&!!v.clearcoatMap,rt=Z&&!!v.clearcoatNormalMap,Tt=Z&&!!v.clearcoatRoughnessMap,Ht=J&&!!v.iridescenceMap,Gt=J&&!!v.iridescenceThicknessMap,Rt=Pt&&!!v.sheenColorMap,ee=Pt&&!!v.sheenRoughnessMap,$t=!!v.specularMap,ve=!!v.specularColorMap,D=!!v.specularIntensityMap,St=dt&&!!v.transmissionMap,$=dt&&!!v.thicknessMap,et=!!v.gradientMap,xt=!!v.alphaMap,wt=v.alphaTest>0,ie=!!v.alphaHash,Ne=!!v.extensions;let ln=ki;v.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(ln=n.toneMapping);const re={shaderID:_t,shaderType:v.type,shaderName:v.name,vertexShader:j,fragmentShader:ot,defines:v.defines,customVertexShaderID:At,customFragmentShaderID:mt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:qt,batchingColor:qt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ot===null?n.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:Gi,alphaToCoverage:!!v.alphaToCoverage,map:Zt,matcap:Q,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:vt,aoMap:ut,lightMap:lt,bumpMap:st,normalMap:ft,displacementMap:d&&Dt,emissiveMap:bt,normalMapObjectSpace:ft&&v.normalMapType===Vm,normalMapTangentSpace:ft&&v.normalMapType===Lh,metalnessMap:A,roughnessMap:b,anisotropy:G,anisotropyMap:Et,clearcoat:Z,clearcoatMap:te,clearcoatNormalMap:rt,clearcoatRoughnessMap:Tt,dispersion:tt,iridescence:J,iridescenceMap:Ht,iridescenceThicknessMap:Gt,sheen:Pt,sheenColorMap:Rt,sheenRoughnessMap:ee,specularMap:$t,specularColorMap:ve,specularIntensityMap:D,transmission:dt,transmissionMap:St,thicknessMap:$,gradientMap:et,opaque:v.transparent===!1&&v.blending===no&&v.alphaToCoverage===!1,alphaMap:xt,alphaTest:wt,alphaHash:ie,combine:v.combine,mapUv:Zt&&p(v.map.channel),aoMapUv:ut&&p(v.aoMap.channel),lightMapUv:lt&&p(v.lightMap.channel),bumpMapUv:st&&p(v.bumpMap.channel),normalMapUv:ft&&p(v.normalMap.channel),displacementMapUv:Dt&&p(v.displacementMap.channel),emissiveMapUv:bt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:b&&p(v.roughnessMap.channel),anisotropyMapUv:Et&&p(v.anisotropyMap.channel),clearcoatMapUv:te&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:ee&&p(v.sheenRoughnessMap.channel),specularMapUv:$t&&p(v.specularMap.channel),specularColorMapUv:ve&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:St&&p(v.transmissionMap.channel),thicknessMapUv:$&&p(v.thicknessMap.channel),alphaMapUv:xt&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ft||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Zt||xt),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:ln,decodeVideoTexture:Zt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jn,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ne&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&v.extensions.multiDraw===!0||qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=h.has(1),re.vertexUv2s=h.has(2),re.vertexUv3s=h.has(3),h.clear(),re}function w(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)M.push(B),M.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(x(M,v),S(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function x(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),v.push(a.mask)}function I(v){const M=_[v.type];let B;if(M){const U=Kn[M];B=Ug.clone(U.uniforms)}else B=v.uniforms;return B}function C(v,M){let B;for(let U=0,F=l.length;U<F;U++){const q=l[U];if(q.cacheKey===M){B=q,++B.usedTimes;break}}return B===void 0&&(B=new Y_(n,M,v,o),l.push(B)),B}function T(v){if(--v.usedTimes===0){const M=l.indexOf(v);l[M]=l[l.length-1],l.pop(),v.destroy()}}function L(v){c.remove(v)}function V(){c.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:I,acquireProgram:C,releaseProgram:T,releaseShaderCache:L,programs:l,dispose:V}}function J_(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Q_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ff(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function df(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,f,d,g,_,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,f,d,g,_,p){const m=r(u,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,g,_,p){const m=r(u,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function h(u,f){e.length>1&&e.sort(u||Q_),i.length>1&&i.sort(f||ff),s.length>1&&s.sort(f||ff)}function l(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:l,sort:h}}function tx(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new df,n.set(i,[r])):s>=o.length?(r=new df,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function ex(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ht};break;case"SpotLight":e={position:new P,direction:new P,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":e={color:new ht,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function nx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ix=0;function sx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ox(n){const t=new ex,e=nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,o=new ae,r=new ae;function a(h){let l=0,u=0,f=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,w=0,x=0,S=0,I=0,C=0,T=0;h.sort(sx);for(let V=0,v=h.length;V<v;V++){const M=h[V],B=M.color,U=M.intensity,F=M.distance,q=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)l+=B.r*U,u+=B.g*U,f+=B.b*U;else if(M.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(M.sh.coefficients[z],U);T++}else if(M.isDirectionalLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const nt=M.shadow,Y=e.get(M);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=M.shadow.matrix,w++}i.directional[d]=z,d++}else if(M.isSpotLight){const z=t.get(M);z.position.setFromMatrixPosition(M.matrixWorld),z.color.copy(B).multiplyScalar(U),z.distance=F,z.coneCos=Math.cos(M.angle),z.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),z.decay=M.decay,i.spot[_]=z;const nt=M.shadow;if(M.map&&(i.spotLightMap[I]=M.map,I++,nt.updateMatrices(M),M.castShadow&&C++),i.spotLightMatrix[_]=nt.matrix,M.castShadow){const Y=e.get(M);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=q,S++}_++}else if(M.isRectAreaLight){const z=t.get(M);z.color.copy(B).multiplyScalar(U),z.halfWidth.set(M.width*.5,0,0),z.halfHeight.set(0,M.height*.5,0),i.rectArea[p]=z,p++}else if(M.isPointLight){const z=t.get(M);if(z.color.copy(M.color).multiplyScalar(M.intensity),z.distance=M.distance,z.decay=M.decay,M.castShadow){const nt=M.shadow,Y=e.get(M);Y.shadowIntensity=nt.intensity,Y.shadowBias=nt.bias,Y.shadowNormalBias=nt.normalBias,Y.shadowRadius=nt.radius,Y.shadowMapSize=nt.mapSize,Y.shadowCameraNear=nt.camera.near,Y.shadowCameraFar=nt.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=M.shadow.matrix,x++}i.point[g]=z,g++}else if(M.isHemisphereLight){const z=t.get(M);z.skyColor.copy(M.color).multiplyScalar(U),z.groundColor.copy(M.groundColor).multiplyScalar(U),i.hemi[m]=z,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==x||L.numSpotShadows!==S||L.numSpotMaps!==I||L.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=x,L.numSpotShadows=S,L.numSpotMaps=I,L.numLightProbes=T,i.version=ix++)}function c(h,l){let u=0,f=0,d=0,g=0,_=0;const p=l.matrixWorldInverse;for(let m=0,w=h.length;m<w;m++){const x=h[m];if(x.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(x.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),r.identity(),o.copy(x.matrixWorld),o.premultiply(p),r.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:i}}function pf(n){const t=new ox(n),e=[],i=[];function s(l){h.camera=l,e.length=0,i.length=0}function o(l){e.push(l)}function r(l){i.push(l)}function a(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function rx(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new pf(n),t.set(s,[a])):o>=r.length?(a=new pf(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class ax extends Rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cx extends Rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ux(n,t,e){let i=new Uh;const s=new it,o=new it,r=new Re,a=new ax({depthPacking:Gm}),c=new cx,h={},l=e.maxTextureSize,u={[Oi]:cn,[cn]:Oi,[jn]:jn},f=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:lx,fragmentShader:hx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let m=this.type;this.render=function(C,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const V=n.getRenderTarget(),v=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ni),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=m!==fi&&this.type===fi,F=m===fi&&this.type!==fi;for(let q=0,z=C.length;q<z;q++){const nt=C[q],Y=nt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const vt=Y.getFrameExtents();if(s.multiply(vt),o.copy(Y.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(o.x=Math.floor(l/vt.x),s.x=o.x*vt.x,Y.mapSize.x=o.x),s.y>l&&(o.y=Math.floor(l/vt.y),s.y=o.y*vt.y,Y.mapSize.y=o.y)),Y.map===null||U===!0||F===!0){const yt=this.type!==fi?{minFilter:an,magFilter:an}:{};Y.map!==null&&Y.map.dispose(),Y.map=new gs(s.x,s.y,yt),Y.map.texture.name=nt.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const _t=Y.getViewportCount();for(let yt=0;yt<_t;yt++){const Jt=Y.getViewport(yt);r.set(o.x*Jt.x,o.y*Jt.y,o.x*Jt.z,o.y*Jt.w),B.viewport(r),Y.updateMatrices(nt,yt),i=Y.getFrustum(),S(T,L,Y.camera,nt,this.type)}Y.isPointLightShadow!==!0&&this.type===fi&&w(Y,L),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(V,v,M)};function w(C,T){const L=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gs(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,L,d,_,null)}function x(C,T,L,V){let v=null;const M=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)v=M;else if(v=L.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=v.uuid,U=T.uuid;let F=h[B];F===void 0&&(F={},h[B]=F);let q=F[U];q===void 0&&(q=v.clone(),F[U]=q,T.addEventListener("dispose",I)),v=q}if(v.visible=T.visible,v.wireframe=T.wireframe,V===fi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=n.properties.get(v);B.light=L}return v}function S(C,T,L,V,v){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===fi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const U=t.update(C),F=C.material;if(Array.isArray(F)){const q=U.groups;for(let z=0,nt=q.length;z<nt;z++){const Y=q[z],vt=F[Y.materialIndex];if(vt&&vt.visible){const _t=x(C,vt,V,v);C.onBeforeShadow(n,C,T,L,U,_t,Y),n.renderBufferDirect(L,null,U,_t,C,Y),C.onAfterShadow(n,C,T,L,U,_t,Y)}}}else if(F.visible){const q=x(C,F,V,v);C.onBeforeShadow(n,C,T,L,U,q,null),n.renderBufferDirect(L,null,U,q,C,null),C.onAfterShadow(n,C,T,L,U,q,null)}}const B=C.children;for(let U=0,F=B.length;U<F;U++)S(B[U],T,L,V,v)}function I(C){C.target.removeEventListener("dispose",I);for(const L in h){const V=h[L],v=C.target.uuid;v in V&&(V[v].dispose(),delete V[v])}}}const fx={[pl]:ml,[gl]:xl,[vl]:Ml,[oo]:_l,[ml]:pl,[xl]:gl,[Ml]:vl,[_l]:oo};function dx(n){function t(){let D=!1;const St=new Re;let $=null;const et=new Re(0,0,0,0);return{setMask:function(xt){$!==xt&&!D&&(n.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){D=xt},setClear:function(xt,wt,ie,Ne,ln){ln===!0&&(xt*=Ne,wt*=Ne,ie*=Ne),St.set(xt,wt,ie,Ne),et.equals(St)===!1&&(n.clearColor(xt,wt,ie,Ne),et.copy(St))},reset:function(){D=!1,$=null,et.set(-1,0,0,0)}}}function e(){let D=!1,St=!1,$=null,et=null,xt=null;return{setReversed:function(wt){St=wt},setTest:function(wt){wt?At(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(wt){$!==wt&&!D&&(n.depthMask(wt),$=wt)},setFunc:function(wt){if(St&&(wt=fx[wt]),et!==wt){switch(wt){case pl:n.depthFunc(n.NEVER);break;case ml:n.depthFunc(n.ALWAYS);break;case gl:n.depthFunc(n.LESS);break;case oo:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case Ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=wt}},setLocked:function(wt){D=wt},setClear:function(wt){xt!==wt&&(n.clearDepth(wt),xt=wt)},reset:function(){D=!1,$=null,et=null,xt=null}}}function i(){let D=!1,St=null,$=null,et=null,xt=null,wt=null,ie=null,Ne=null,ln=null;return{setTest:function(re){D||(re?At(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(re){St!==re&&!D&&(n.stencilMask(re),St=re)},setFunc:function(re,hn,oi){($!==re||et!==hn||xt!==oi)&&(n.stencilFunc(re,hn,oi),$=re,et=hn,xt=oi)},setOp:function(re,hn,oi){(wt!==re||ie!==hn||Ne!==oi)&&(n.stencilOp(re,hn,oi),wt=re,ie=hn,Ne=oi)},setLocked:function(re){D=re},setClear:function(re){ln!==re&&(n.clearStencil(re),ln=re)},reset:function(){D=!1,St=null,$=null,et=null,xt=null,wt=null,ie=null,Ne=null,ln=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let h={},l={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,w=null,x=null,S=null,I=null,C=new ht(0,0,0),T=0,L=!1,V=null,v=null,M=null,B=null,U=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(nt)[1]),q=z>=1):nt.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),q=z>=2);let Y=null,vt={};const _t=n.getParameter(n.SCISSOR_BOX),yt=n.getParameter(n.VIEWPORT),Jt=new Re().fromArray(_t),oe=new Re().fromArray(yt);function j(D,St,$,et){const xt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(D,wt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ie=0;ie<$;ie++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(St+ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return wt}const ot={};ot[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),At(n.DEPTH_TEST),o.setFunc(oo),lt(!1),st(yu),At(n.CULL_FACE),R(Ni);function At(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function mt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Ot(D,St){return l[D]!==St?(n.bindFramebuffer(D,St),l[D]=St,D===n.DRAW_FRAMEBUFFER&&(l[n.FRAMEBUFFER]=St),D===n.FRAMEBUFFER&&(l[n.DRAW_FRAMEBUFFER]=St),!0):!1}function Ft(D,St){let $=f,et=!1;if(D){$=u.get(St),$===void 0&&($=[],u.set(St,$));const xt=D.textures;if($.length!==xt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,ie=xt.length;wt<ie;wt++)$[wt]=n.COLOR_ATTACHMENT0+wt;$.length=xt.length,et=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,et=!0);et&&n.drawBuffers($)}function qt(D){return d!==D?(n.useProgram(D),d=D,!0):!1}const Zt={[is]:n.FUNC_ADD,[pm]:n.FUNC_SUBTRACT,[mm]:n.FUNC_REVERSE_SUBTRACT};Zt[gm]=n.MIN,Zt[vm]=n.MAX;const Q={[_m]:n.ZERO,[xm]:n.ONE,[Mm]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[Tm]:n.SRC_ALPHA_SATURATE,[wm]:n.DST_COLOR,[bm]:n.DST_ALPHA,[ym]:n.ONE_MINUS_SRC_COLOR,[dl]:n.ONE_MINUS_SRC_ALPHA,[Em]:n.ONE_MINUS_DST_COLOR,[Sm]:n.ONE_MINUS_DST_ALPHA,[Am]:n.CONSTANT_COLOR,[Rm]:n.ONE_MINUS_CONSTANT_COLOR,[Cm]:n.CONSTANT_ALPHA,[Pm]:n.ONE_MINUS_CONSTANT_ALPHA};function R(D,St,$,et,xt,wt,ie,Ne,ln,re){if(D===Ni){g===!0&&(mt(n.BLEND),g=!1);return}if(g===!1&&(At(n.BLEND),g=!0),D!==dm){if(D!==_||re!==L){if((p!==is||x!==is)&&(n.blendEquation(n.FUNC_ADD),p=is,x=is),re)switch(D){case no:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.ONE,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case no:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,w=null,S=null,I=null,C.set(0,0,0),T=0,_=D,L=re}return}xt=xt||St,wt=wt||$,ie=ie||et,(St!==p||xt!==x)&&(n.blendEquationSeparate(Zt[St],Zt[xt]),p=St,x=xt),($!==m||et!==w||wt!==S||ie!==I)&&(n.blendFuncSeparate(Q[$],Q[et],Q[wt],Q[ie]),m=$,w=et,S=wt,I=ie),(Ne.equals(C)===!1||ln!==T)&&(n.blendColor(Ne.r,Ne.g,Ne.b,ln),C.copy(Ne),T=ln),_=D,L=!1}function ut(D,St){D.side===jn?mt(n.CULL_FACE):At(n.CULL_FACE);let $=D.side===cn;St&&($=!$),lt($),D.blending===no&&D.transparent===!1?R(Ni):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const et=D.stencilWrite;r.setTest(et),et&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Dt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?At(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(D){V!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),V=D)}function st(D){D!==hm?(At(n.CULL_FACE),D!==v&&(D===yu?n.cullFace(n.BACK):D===um?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),v=D}function ft(D){D!==M&&(q&&n.lineWidth(D),M=D)}function Dt(D,St,$){D?(At(n.POLYGON_OFFSET_FILL),(B!==St||U!==$)&&(n.polygonOffset(St,$),B=St,U=$)):mt(n.POLYGON_OFFSET_FILL)}function bt(D){D?At(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function A(D){D===void 0&&(D=n.TEXTURE0+F-1),Y!==D&&(n.activeTexture(D),Y=D)}function b(D,St,$){$===void 0&&(Y===null?$=n.TEXTURE0+F-1:$=Y);let et=vt[$];et===void 0&&(et={type:void 0,texture:void 0},vt[$]=et),(et.type!==D||et.texture!==St)&&(Y!==$&&(n.activeTexture($),Y=$),n.bindTexture(D,St||ot[D]),et.type=D,et.texture=St)}function G(){const D=vt[Y];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(D){Jt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Jt.copy(D))}function Rt(D){oe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),oe.copy(D))}function ee(D,St){let $=c.get(St);$===void 0&&($=new WeakMap,c.set(St,$));let et=$.get(D);et===void 0&&(et=n.getUniformBlockIndex(St,D.name),$.set(D,et))}function $t(D,St){const et=c.get(St).get(D);a.get(St)!==et&&(n.uniformBlockBinding(St,et,D.__bindingPointIndex),a.set(St,et))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Y=null,vt={},l={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,w=null,x=null,S=null,I=null,C=new ht(0,0,0),T=0,L=!1,V=null,v=null,M=null,B=null,U=null,Jt.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:At,disable:mt,bindFramebuffer:Ot,drawBuffers:Ft,useProgram:qt,setBlending:R,setMaterial:ut,setFlipSided:lt,setCullFace:st,setLineWidth:ft,setPolygonOffset:Dt,setScissorTest:bt,activeTexture:A,bindTexture:b,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:Tt,texImage3D:Ht,updateUBOMapping:ee,uniformBlockBinding:$t,texStorage2D:te,texStorage3D:rt,texSubImage2D:J,texSubImage3D:Pt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Et,scissor:Gt,viewport:Rt,reset:ve}}function mf(n,t,e,i){const s=px(i);switch(e){case Qd:return n*t;case e0:return n*t;case n0:return n*t*2;case Da:return n*t/s.components*s.byteLength;case Rh:return n*t/s.components*s.byteLength;case i0:return n*t*2/s.components*s.byteLength;case Ch:return n*t*2/s.components*s.byteLength;case t0:return n*t*3/s.components*s.byteLength;case bn:return n*t*4/s.components*s.byteLength;case Ph:return n*t*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sa:case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:case Al:return Math.max(n,16)*Math.max(t,8)/4;case wl:case Tl:return Math.max(n,8)*Math.max(t,8)/2;case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ra:case Xl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case s0:case Yl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $l:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function px(n){switch(n){case Mi:case jd:return{byteLength:1,components:1};case tr:case Zd:case fr:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case ms:case Eh:case Zn:return{byteLength:4,components:1};case Jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function mx(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new it,l=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return d?new OffscreenCanvas(A,b):ya("canvas")}function _(A,b,G){let Z=1;const tt=bt(A);if((tt.width>G||tt.height>G)&&(Z=G/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Z*tt.width),Pt=Math.floor(Z*tt.height);u===void 0&&(u=g(J,Pt));const dt=b?g(J,Pt):u;return dt.width=J,dt.height=Pt,dt.getContext("2d").drawImage(A,0,0,J,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Pt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==an&&A.minFilter!==yn}function m(A){n.generateMipmap(A)}function w(A,b,G,Z,tt=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=b;if(b===n.RED&&(G===n.FLOAT&&(J=n.R32F),G===n.HALF_FLOAT&&(J=n.R16F),G===n.UNSIGNED_BYTE&&(J=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.R8UI),G===n.UNSIGNED_SHORT&&(J=n.R16UI),G===n.UNSIGNED_INT&&(J=n.R32UI),G===n.BYTE&&(J=n.R8I),G===n.SHORT&&(J=n.R16I),G===n.INT&&(J=n.R32I)),b===n.RG&&(G===n.FLOAT&&(J=n.RG32F),G===n.HALF_FLOAT&&(J=n.RG16F),G===n.UNSIGNED_BYTE&&(J=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RG8UI),G===n.UNSIGNED_SHORT&&(J=n.RG16UI),G===n.UNSIGNED_INT&&(J=n.RG32UI),G===n.BYTE&&(J=n.RG8I),G===n.SHORT&&(J=n.RG16I),G===n.INT&&(J=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGB8UI),G===n.UNSIGNED_SHORT&&(J=n.RGB16UI),G===n.UNSIGNED_INT&&(J=n.RGB32UI),G===n.BYTE&&(J=n.RGB8I),G===n.SHORT&&(J=n.RGB16I),G===n.INT&&(J=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),G===n.UNSIGNED_INT&&(J=n.RGBA32UI),G===n.BYTE&&(J=n.RGBA8I),G===n.SHORT&&(J=n.RGBA16I),G===n.INT&&(J=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),b===n.RGBA){const Pt=tt?va:he.getTransfer(Z);G===n.FLOAT&&(J=n.RGBA32F),G===n.HALF_FLOAT&&(J=n.RGBA16F),G===n.UNSIGNED_BYTE&&(J=Pt===xe?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(A,b){let G;return A?b===null||b===ms||b===co?G=n.DEPTH24_STENCIL8:b===Zn?G=n.DEPTH32F_STENCIL8:b===tr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ms||b===co?G=n.DEPTH_COMPONENT24:b===Zn?G=n.DEPTH_COMPONENT32F:b===tr&&(G=n.DEPTH_COMPONENT16),G}function S(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==an&&A.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function I(A){const b=A.target;b.removeEventListener("dispose",I),T(b),b.isVideoTexture&&l.delete(b)}function C(A){const b=A.target;b.removeEventListener("dispose",C),V(b)}function T(A){const b=i.get(A);if(b.__webglInit===void 0)return;const G=A.source,Z=f.get(G);if(Z){const tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(A),Object.keys(Z).length===0&&f.delete(G)}i.remove(A)}function L(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const G=A.source,Z=f.get(G);delete Z[b.__cacheKey],r.memory.textures--}function V(A){const b=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=A.textures;for(let Z=0,tt=G.length;Z<tt;Z++){const J=i.get(G[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),r.memory.textures--),i.remove(G[Z])}i.remove(A)}let v=0;function M(){v=0}function B(){const A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function U(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function F(A,b){const G=i.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,A,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function q(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){oe(G,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function z(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){oe(G,A,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function nt(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const Y={[Bi]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},vt={[an]:n.NEAREST,[zm]:n.NEAREST_MIPMAP_NEAREST,[Mr]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[Qa]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},_t={[Wm]:n.NEVER,[jm]:n.ALWAYS,[Xm]:n.LESS,[o0]:n.LEQUAL,[qm]:n.EQUAL,[Km]:n.GEQUAL,[Ym]:n.GREATER,[$m]:n.NOTEQUAL};function yt(A,b){if(b.type===Zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===yn||b.magFilter===Qa||b.magFilter===Mr||b.magFilter===pi||b.minFilter===yn||b.minFilter===Qa||b.minFilter===Mr||b.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Y[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Y[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Y[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,vt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,_t[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==Mr&&b.minFilter!==pi||b.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Jt(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",I));const Z=b.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const J=U(b);if(J!==A.__cacheKey){tt[J]===void 0&&(tt[J]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),tt[J].usedTimes++;const Pt=tt[A.__cacheKey];Pt!==void 0&&(tt[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&L(b)),A.__cacheKey=J,A.__webglTexture=tt[J].texture}return G}function oe(A,b,G){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const tt=Jt(A,b),J=b.source;e.bindTexture(Z,A.__webglTexture,n.TEXTURE0+G);const Pt=i.get(J);if(J.version!==Pt.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const dt=he.getPrimaries(he.workingColorSpace),Et=b.colorSpace===Ui?null:he.getPrimaries(b.colorSpace),te=b.colorSpace===Ui||dt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let rt=_(b.image,!1,s.maxTextureSize);rt=Dt(b,rt);const Tt=o.convert(b.format,b.colorSpace),Ht=o.convert(b.type);let Gt=w(b.internalFormat,Tt,Ht,b.colorSpace,b.isVideoTexture);yt(Z,b);let Rt;const ee=b.mipmaps,$t=b.isVideoTexture!==!0,ve=Pt.__version===void 0||tt===!0,D=J.dataReady,St=S(b,rt);if(b.isDepthTexture)Gt=x(b.format===lo,b.type),ve&&($t?e.texStorage2D(n.TEXTURE_2D,1,Gt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Gt,rt.width,rt.height,0,Tt,Ht,null));else if(b.isDataTexture)if(ee.length>0){$t&&ve&&e.texStorage2D(n.TEXTURE_2D,St,Gt,ee[0].width,ee[0].height);for(let $=0,et=ee.length;$<et;$++)Rt=ee[$],$t?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Rt.width,Rt.height,Tt,Ht,Rt.data):e.texImage2D(n.TEXTURE_2D,$,Gt,Rt.width,Rt.height,0,Tt,Ht,Rt.data);b.generateMipmaps=!1}else $t?(ve&&e.texStorage2D(n.TEXTURE_2D,St,Gt,rt.width,rt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,Tt,Ht,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,rt.width,rt.height,0,Tt,Ht,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Gt,ee[0].width,ee[0].height,rt.depth);for(let $=0,et=ee.length;$<et;$++)if(Rt=ee[$],b.format!==bn)if(Tt!==null)if($t){if(D)if(b.layerUpdates.size>0){const xt=mf(Rt.width,Rt.height,b.format,b.type);for(const wt of b.layerUpdates){const ie=Rt.data.subarray(wt*xt/Rt.data.BYTES_PER_ELEMENT,(wt+1)*xt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,wt,Rt.width,Rt.height,1,Tt,ie,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Rt.width,Rt.height,rt.depth,Tt,Rt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Gt,Rt.width,Rt.height,rt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Rt.width,Rt.height,rt.depth,Tt,Ht,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Gt,Rt.width,Rt.height,rt.depth,0,Tt,Ht,Rt.data)}else{$t&&ve&&e.texStorage2D(n.TEXTURE_2D,St,Gt,ee[0].width,ee[0].height);for(let $=0,et=ee.length;$<et;$++)Rt=ee[$],b.format!==bn?Tt!==null?$t?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Rt.width,Rt.height,Tt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Gt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Rt.width,Rt.height,Tt,Ht,Rt.data):e.texImage2D(n.TEXTURE_2D,$,Gt,Rt.width,Rt.height,0,Tt,Ht,Rt.data)}else if(b.isDataArrayTexture)if($t){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Gt,rt.width,rt.height,rt.depth),D)if(b.layerUpdates.size>0){const $=mf(rt.width,rt.height,b.format,b.type);for(const et of b.layerUpdates){const xt=rt.data.subarray(et*$/rt.data.BYTES_PER_ELEMENT,(et+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,Tt,Ht,xt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Ht,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,rt.width,rt.height,rt.depth,0,Tt,Ht,rt.data);else if(b.isData3DTexture)$t?(ve&&e.texStorage3D(n.TEXTURE_3D,St,Gt,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Tt,Ht,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,rt.width,rt.height,rt.depth,0,Tt,Ht,rt.data);else if(b.isFramebufferTexture){if(ve)if($t)e.texStorage2D(n.TEXTURE_2D,St,Gt,rt.width,rt.height);else{let $=rt.width,et=rt.height;for(let xt=0;xt<St;xt++)e.texImage2D(n.TEXTURE_2D,xt,Gt,$,et,0,Tt,Ht,null),$>>=1,et>>=1}}else if(ee.length>0){if($t&&ve){const $=bt(ee[0]);e.texStorage2D(n.TEXTURE_2D,St,Gt,$.width,$.height)}for(let $=0,et=ee.length;$<et;$++)Rt=ee[$],$t?D&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,Tt,Ht,Rt):e.texImage2D(n.TEXTURE_2D,$,Gt,Tt,Ht,Rt);b.generateMipmaps=!1}else if($t){if(ve){const $=bt(rt);e.texStorage2D(n.TEXTURE_2D,St,Gt,$.width,$.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Ht,rt)}else e.texImage2D(n.TEXTURE_2D,0,Gt,Tt,Ht,rt);p(b)&&m(Z),Pt.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function j(A,b,G){if(b.image.length!==6)return;const Z=Jt(A,b),tt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const J=i.get(tt);if(tt.version!==J.__version||Z===!0){e.activeTexture(n.TEXTURE0+G);const Pt=he.getPrimaries(he.workingColorSpace),dt=b.colorSpace===Ui?null:he.getPrimaries(b.colorSpace),Et=b.colorSpace===Ui||Pt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const te=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,Tt=[];for(let et=0;et<6;et++)!te&&!rt?Tt[et]=_(b.image[et],!0,s.maxCubemapSize):Tt[et]=rt?b.image[et].image:b.image[et],Tt[et]=Dt(b,Tt[et]);const Ht=Tt[0],Gt=o.convert(b.format,b.colorSpace),Rt=o.convert(b.type),ee=w(b.internalFormat,Gt,Rt,b.colorSpace),$t=b.isVideoTexture!==!0,ve=J.__version===void 0||Z===!0,D=tt.dataReady;let St=S(b,Ht);yt(n.TEXTURE_CUBE_MAP,b);let $;if(te){$t&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,ee,Ht.width,Ht.height);for(let et=0;et<6;et++){$=Tt[et].mipmaps;for(let xt=0;xt<$.length;xt++){const wt=$[xt];b.format!==bn?Gt!==null?$t?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,wt.width,wt.height,Gt,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,ee,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,wt.width,wt.height,Gt,Rt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,ee,wt.width,wt.height,0,Gt,Rt,wt.data)}}}else{if($=b.mipmaps,$t&&ve){$.length>0&&St++;const et=bt(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,ee,et.width,et.height)}for(let et=0;et<6;et++)if(rt){$t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Tt[et].width,Tt[et].height,Gt,Rt,Tt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ee,Tt[et].width,Tt[et].height,0,Gt,Rt,Tt[et].data);for(let xt=0;xt<$.length;xt++){const ie=$[xt].image[et].image;$t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,ie.width,ie.height,Gt,Rt,ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,ee,ie.width,ie.height,0,Gt,Rt,ie.data)}}else{$t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Gt,Rt,Tt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ee,Gt,Rt,Tt[et]);for(let xt=0;xt<$.length;xt++){const wt=$[xt];$t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,Gt,Rt,wt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,ee,Gt,Rt,wt.image[et])}}}p(b)&&m(n.TEXTURE_CUBE_MAP),J.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ot(A,b,G,Z,tt,J){const Pt=o.convert(G.format,G.colorSpace),dt=o.convert(G.type),Et=w(G.internalFormat,Pt,dt,G.colorSpace);if(!i.get(b).__hasExternalTextures){const rt=Math.max(1,b.width>>J),Tt=Math.max(1,b.height>>J);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,Et,rt,Tt,b.depth,0,Pt,dt,null):e.texImage2D(tt,J,Et,rt,Tt,0,Pt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),st(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,tt,i.get(G).__webglTexture,0,lt(b)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,tt,i.get(G).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(A,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){const Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,J=x(b.stencilBuffer,tt),Pt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=lt(b);st(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,J,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,J,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,J,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pt,n.RENDERBUFFER,A)}else{const Z=b.textures;for(let tt=0;tt<Z.length;tt++){const J=Z[tt],Pt=o.convert(J.format,J.colorSpace),dt=o.convert(J.type),Et=w(J.internalFormat,Pt,dt,J.colorSpace),te=lt(b);G&&st(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,Et,b.width,b.height):st(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,Et,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Et,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const Z=i.get(b.depthTexture).__webglTexture,tt=lt(b);if(b.depthTexture.format===io)st(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(b.depthTexture.format===lo)st(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ot(A){const b=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,A)}else if(G){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),At(b.__webglDepthbuffer[Z],A,!1);else{const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,J)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),At(b.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(A,b,G){const Z=i.get(A);b!==void 0&&ot(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ot(A)}function qt(A){const b=A.texture,G=i.get(A),Z=i.get(b);A.addEventListener("dispose",C);const tt=A.textures,J=A.isWebGLCubeRenderTarget===!0,Pt=tt.length>1;if(Pt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,r.memory.textures++),J){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let Et=0;Et<b.mipmaps.length;Et++)G.__webglFramebuffer[dt][Et]=n.createFramebuffer()}else G.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)G.__webglFramebuffer[dt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Pt)for(let dt=0,Et=tt.length;dt<Et;dt++){const te=i.get(tt[dt]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),r.memory.textures++)}if(A.samples>0&&st(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const Et=tt[dt];G.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const te=o.convert(Et.format,Et.colorSpace),rt=o.convert(Et.type),Tt=w(Et.internalFormat,te,rt,Et.colorSpace,A.isXRRenderTarget===!0),Ht=lt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,Tt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),At(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),yt(n.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)ot(G.__webglFramebuffer[dt][Et],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Et);else ot(G.__webglFramebuffer[dt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(b)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let dt=0,Et=tt.length;dt<Et;dt++){const te=tt[dt],rt=i.get(te);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),yt(n.TEXTURE_2D,te),ot(G.__webglFramebuffer,A,te,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),p(te)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),yt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Et=0;Et<b.mipmaps.length;Et++)ot(G.__webglFramebuffer[Et],A,b,n.COLOR_ATTACHMENT0,dt,Et);else ot(G.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,dt,0);p(b)&&m(dt),e.unbindTexture()}A.depthBuffer&&Ot(A)}function Zt(A){const b=A.textures;for(let G=0,Z=b.length;G<Z;G++){const tt=b[G];if(p(tt)){const J=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Pt=i.get(tt).__webglTexture;e.bindTexture(J,Pt),m(J),e.unbindTexture()}}}const Q=[],R=[];function ut(A){if(A.samples>0){if(st(A)===!1){const b=A.textures,G=A.width,Z=A.height;let tt=n.COLOR_BUFFER_BIT;const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(A),dt=b.length>1;if(dt)for(let Et=0;Et<b.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Et=0;Et<b.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);const te=i.get(b[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,G,Z,0,0,G,Z,tt,n.NEAREST),c===!0&&(Q.length=0,R.length=0,Q.push(n.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(J),R.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<b.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[Et]);const te=i.get(b[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,te,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function lt(A){return Math.min(s.maxSamples,A.samples)}function st(A){const b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ft(A){const b=r.render.frame;l.get(A)!==b&&(l.set(A,b),A.update())}function Dt(A,b){const G=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Gi&&G!==Ui&&(he.getTransfer(G)===xe?(Z!==bn||tt!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=B,this.resetTextureUnits=M,this.setTexture2D=F,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=nt,this.rebindTextures=Ft,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=st}function gx(n,t){function e(i,s=Ui){let o;const r=he.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===Th)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ah)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jd)return n.BYTE;if(i===Zd)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===Eh)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===fr)return n.HALF_FLOAT;if(i===Qd)return n.ALPHA;if(i===t0)return n.RGB;if(i===bn)return n.RGBA;if(i===e0)return n.LUMINANCE;if(i===n0)return n.LUMINANCE_ALPHA;if(i===io)return n.DEPTH_COMPONENT;if(i===lo)return n.DEPTH_STENCIL;if(i===Da)return n.RED;if(i===Rh)return n.RED_INTEGER;if(i===i0)return n.RG;if(i===Ch)return n.RG_INTEGER;if(i===Ph)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===oa)if(r===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===El||i===Tl||i===Al)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===wl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Al)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rl||i===Cl||i===Pl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Rl||i===Cl)return r===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Pl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ll||i===Il||i===Dl||i===Ul||i===Nl||i===kl||i===Fl||i===Ol||i===Bl||i===zl||i===Hl||i===Gl||i===Vl||i===Wl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ll)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ul)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ol)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===Xl||i===ql)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===ra)return r===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===s0||i===Yl||i===$l||i===Kl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===ra)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Yl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class vx extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ke extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _x={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),m=this._getHandJoint(h,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=l.position.distanceTo(u.position),d=.02,g=.005;h.inputState.pinching&&f>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new yi({vertexShader:xx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bx extends po{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,h=null,l=null,u=null,f=null,d=null,g=null;const _=new yx,p=e.getContextAttributes();let m=null,w=null;const x=[],S=[],I=new it;let C=null;const T=new rn;T.layers.enable(1),T.viewport=new Re;const L=new rn;L.layers.enable(2),L.viewport=new Re;const V=[T,L],v=new vx;v.layers.enable(1),v.layers.enable(2);let M=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=x[j];return ot===void 0&&(ot=new Ac,x[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=x[j];return ot===void 0&&(ot=new Ac,x[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=x[j];return ot===void 0&&(ot=new Ac,x[j]=ot),ot.getHandSpace()};function U(j){const ot=S.indexOf(j.inputSource);if(ot===-1)return;const At=x[ot];At!==void 0&&(At.update(j.inputSource,j.frame,h||r),At.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",q);for(let j=0;j<x.length;j++){const ot=S[j];ot!==null&&(S[j]=null,x[j].disconnect(ot))}M=null,B=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,w=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new gs(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,At=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?lo:io,At=p.stencil?co:ms);const Ot={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new gs(f.textureWidth,f.textureHeight,{format:bn,type:Mi,depthTexture:new M0(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(j){for(let ot=0;ot<j.removed.length;ot++){const At=j.removed[ot],mt=S.indexOf(At);mt>=0&&(S[mt]=null,x[mt].disconnect(At))}for(let ot=0;ot<j.added.length;ot++){const At=j.added[ot];let mt=S.indexOf(At);if(mt===-1){for(let Ft=0;Ft<x.length;Ft++)if(Ft>=S.length){S.push(At),mt=Ft;break}else if(S[Ft]===null){S[Ft]=At,mt=Ft;break}if(mt===-1)break}const Ot=x[mt];Ot&&Ot.connect(At)}}const z=new P,nt=new P;function Y(j,ot,At){z.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(At.matrixWorld);const mt=z.distanceTo(nt),Ot=ot.projectionMatrix.elements,Ft=At.projectionMatrix.elements,qt=Ot[14]/(Ot[10]-1),Zt=Ot[14]/(Ot[10]+1),Q=(Ot[9]+1)/Ot[5],R=(Ot[9]-1)/Ot[5],ut=(Ot[8]-1)/Ot[0],lt=(Ft[8]+1)/Ft[0],st=qt*ut,ft=qt*lt,Dt=mt/(-ut+lt),bt=Dt*-ut;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(bt),j.translateZ(Dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ot[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const A=qt+Dt,b=Zt+Dt,G=st-bt,Z=ft+(mt-bt),tt=Q*Zt/b*A,J=R*Zt/b*A;j.projectionMatrix.makePerspective(G,Z,tt,J,A,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function vt(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,At=j.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(At=_.depthFar)),v.near=L.near=T.near=ot,v.far=L.far=T.far=At,(M!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,B=v.far);const mt=j.parent,Ot=v.cameras;vt(v,mt);for(let Ft=0;Ft<Ot.length;Ft++)vt(Ot[Ft],mt);Ot.length===2?Y(v,T,L):v.projectionMatrix.copy(T.projectionMatrix),_t(j,v,mt)};function _t(j,ot,At){At===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(At.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ho*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let yt=null;function Jt(j,ot){if(l=ot.getViewerPose(h||r),g=ot,l!==null){const At=l.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let mt=!1;At.length!==v.cameras.length&&(v.cameras.length=0,mt=!0);for(let Ft=0;Ft<At.length;Ft++){const qt=At[Ft];let Zt=null;if(d!==null)Zt=d.getViewport(qt);else{const R=u.getViewSubImage(f,qt);Zt=R.viewport,Ft===0&&(t.setRenderTargetTextures(w,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(w))}let Q=V[Ft];Q===void 0&&(Q=new rn,Q.layers.enable(Ft),Q.viewport=new Re,V[Ft]=Q),Q.matrix.fromArray(qt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(qt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Ft===0&&(v.matrix.copy(Q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),mt===!0&&v.cameras.push(Q)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Ft=u.getDepthInformation(At[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,s.renderState)}}for(let At=0;At<x.length;At++){const mt=S[At],Ot=x[At];mt!==null&&Ot!==void 0&&Ot.update(mt,ot,h||r)}yt&&yt(j,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const oe=new _0;oe.setAnimationLoop(Jt),this.setAnimationLoop=function(j){yt=j},this.dispose=function(){}}}const ji=new Tn,Sx=new ae;function wx(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,m0(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),u(p,m)):m.isMeshPhongMaterial?(o(p,m),l(p,m)):m.isMeshStandardMaterial?(o(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),_(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,w,x):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),x=w.envMap,S=w.envMapRotation;x&&(p.envMap.value=x,ji.copy(S),ji.x*=-1,ji.y*=-1,ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),p.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(ji)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ex(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,x){const S=x.program;i.uniformBlockBinding(w,S)}function h(w,x){let S=s[w.id];S===void 0&&(g(w),S=l(w),s[w.id]=S,w.addEventListener("dispose",p));const I=x.program;i.updateUBOMapping(w,I);const C=t.render.frame;o[w.id]!==C&&(f(w),o[w.id]=C)}function l(w){const x=u();w.__bindingPointIndex=x;const S=n.createBuffer(),I=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function u(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=s[w.id],S=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,T=S.length;C<T;C++){const L=Array.isArray(S[C])?S[C]:[S[C]];for(let V=0,v=L.length;V<v;V++){const M=L[V];if(d(M,C,V,I)===!0){const B=M.__offset,U=Array.isArray(M.value)?M.value:[M.value];let F=0;for(let q=0;q<U.length;q++){const z=U[q],nt=_(z);typeof z=="number"||typeof z=="boolean"?(M.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,B+F,M.__data)):z.isMatrix3?(M.__data[0]=z.elements[0],M.__data[1]=z.elements[1],M.__data[2]=z.elements[2],M.__data[3]=0,M.__data[4]=z.elements[3],M.__data[5]=z.elements[4],M.__data[6]=z.elements[5],M.__data[7]=0,M.__data[8]=z.elements[6],M.__data[9]=z.elements[7],M.__data[10]=z.elements[8],M.__data[11]=0):(z.toArray(M.__data,F),F+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,x,S,I){const C=w.value,T=x+"_"+S;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{const L=I[T];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return I[T]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(w){const x=w.uniforms;let S=0;const I=16;for(let T=0,L=x.length;T<L;T++){const V=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,M=V.length;v<M;v++){const B=V[v],U=Array.isArray(B.value)?B.value:[B.value];for(let F=0,q=U.length;F<q;F++){const z=U[F],nt=_(z),Y=S%I,vt=Y%nt.boundary,_t=Y+vt;S+=vt,_t!==0&&I-_t<nt.storage&&(S+=I-_t),B.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=nt.storage}}}const C=S%I;return C>0&&(S+=I-C),w.__size=S,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function p(w){const x=w.target;x.removeEventListener("dispose",p);const S=r.indexOf(x.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function m(){for(const w in s)n.deleteBuffer(s[w]);r=[],s={},o={}}return{bind:c,update:h,dispose:m}}class Tx{constructor(t={}){const{canvas:e=dg(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=ki,this.toneMappingExposure=1;const x=this;let S=!1,I=0,C=0,T=null,L=-1,V=null;const v=new Re,M=new Re;let B=null;const U=new ht(0);let F=0,q=e.width,z=e.height,nt=1,Y=null,vt=null;const _t=new Re(0,0,q,z),yt=new Re(0,0,q,z);let Jt=!1;const oe=new Uh;let j=!1,ot=!1;const At=new ae,mt=new ae,Ot=new P,Ft=new Re,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Q(){return T===null?nt:1}let R=i;function ut(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wh}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),R===null){const N="webgl2";if(R=ut(N,E),R===null)throw ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let lt,st,ft,Dt,bt,A,b,G,Z,tt,J,Pt,dt,Et,te,rt,Tt,Ht,Gt,Rt,ee,$t,ve,D;function St(){lt=new L2(R),lt.init(),$t=new gx(R,lt),st=new E2(R,lt,t,$t),ft=new dx(R),st.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Dt=new U2(R),bt=new J_,A=new mx(R,lt,ft,bt,st,$t,Dt),b=new A2(x),G=new P2(x),Z=new Hg(R),ve=new S2(R,Z),tt=new I2(R,Z,Dt,ve),J=new k2(R,tt,Z,Dt),Gt=new N2(R,st,A),rt=new T2(bt),Pt=new Z_(x,b,G,lt,st,ve,rt),dt=new wx(x,bt),Et=new tx,te=new rx(lt),Ht=new b2(x,b,G,ft,J,f,c),Tt=new ux(x,J,st),D=new Ex(R,Dt,st,ft),Rt=new w2(R,lt,Dt),ee=new D2(R,lt,Dt),Dt.programs=Pt.programs,x.capabilities=st,x.extensions=lt,x.properties=bt,x.renderLists=Et,x.shadowMap=Tt,x.state=ft,x.info=Dt}St();const $=new bx(x,R);this.xr=$,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(q,z,!1))},this.getSize=function(E){return E.set(q,z)},this.setSize=function(E,N,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,z=N,e.width=Math.floor(E*nt),e.height=Math.floor(N*nt),W===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(q*nt,z*nt).floor()},this.setDrawingBufferSize=function(E,N,W){q=E,z=N,nt=W,e.width=Math.floor(E*W),e.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,N,W,X){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,N,W,X),ft.viewport(v.copy(_t).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(yt)},this.setScissor=function(E,N,W,X){E.isVector4?yt.set(E.x,E.y,E.z,E.w):yt.set(E,N,W,X),ft.scissor(M.copy(yt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(E){ft.setScissorTest(Jt=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){vt=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(E=!0,N=!0,W=!0){let X=0;if(E){let k=!1;if(T!==null){const at=T.texture.format;k=at===Ph||at===Ch||at===Rh}if(k){const at=T.texture.type,Mt=at===Mi||at===ms||at===tr||at===co||at===Th||at===Ah,Ct=Ht.getClearColor(),Lt=Ht.getClearAlpha(),Bt=Ct.r,zt=Ct.g,It=Ct.b;Mt?(d[0]=Bt,d[1]=zt,d[2]=It,d[3]=Lt,R.clearBufferuiv(R.COLOR,0,d)):(g[0]=Bt,g[1]=zt,g[2]=It,g[3]=Lt,R.clearBufferiv(R.COLOR,0,g))}else X|=R.COLOR_BUFFER_BIT}N&&(X|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Et.dispose(),te.dispose(),bt.dispose(),b.dispose(),G.dispose(),J.dispose(),ve.dispose(),D.dispose(),Pt.dispose(),$.dispose(),$.removeEventListener("sessionstart",du),$.removeEventListener("sessionend",pu),Wi.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Dt.autoReset,N=Tt.enabled,W=Tt.autoUpdate,X=Tt.needsUpdate,k=Tt.type;St(),Dt.autoReset=E,Tt.enabled=N,Tt.autoUpdate=W,Tt.needsUpdate=X,Tt.type=k}function wt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){const N=E.target;N.removeEventListener("dispose",ie),Ne(N)}function Ne(E){ln(E),bt.remove(E)}function ln(E){const N=bt.get(E).programs;N!==void 0&&(N.forEach(function(W){Pt.releaseProgram(W)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,X,k,at){N===null&&(N=qt);const Mt=k.isMesh&&k.matrixWorld.determinant()<0,Ct=rm(E,N,W,X,k);ft.setMaterial(X,Mt);let Lt=W.index,Bt=1;if(X.wireframe===!0){if(Lt=tt.getWireframeAttribute(W),Lt===void 0)return;Bt=2}const zt=W.drawRange,It=W.attributes.position;let fe=zt.start*Bt,_e=(zt.start+zt.count)*Bt;at!==null&&(fe=Math.max(fe,at.start*Bt),_e=Math.min(_e,(at.start+at.count)*Bt)),Lt!==null?(fe=Math.max(fe,0),_e=Math.min(_e,Lt.count)):It!=null&&(fe=Math.max(fe,0),_e=Math.min(_e,It.count));const Ae=_e-fe;if(Ae<0||Ae===1/0)return;ve.setup(k,X,Ct,W,Lt);let gn,ce=Rt;if(Lt!==null&&(gn=Z.get(Lt),ce=ee,ce.setIndex(gn)),k.isMesh)X.wireframe===!0?(ft.setLineWidth(X.wireframeLinewidth*Q()),ce.setMode(R.LINES)):ce.setMode(R.TRIANGLES);else if(k.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),ft.setLineWidth(Ut*Q()),k.isLineSegments?ce.setMode(R.LINES):k.isLineLoop?ce.setMode(R.LINE_LOOP):ce.setMode(R.LINE_STRIP)}else k.isPoints?ce.setMode(R.POINTS):k.isSprite&&ce.setMode(R.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ut=k._multiDrawStarts,Ye=k._multiDrawCounts,le=k._multiDrawCount,kn=Lt?Z.get(Lt).bytesPerElement:1,Ps=bt.get(X).currentProgram.getUniforms();for(let vn=0;vn<le;vn++)Ps.setValue(R,"_gl_DrawID",vn),ce.render(Ut[vn]/kn,Ye[vn])}else if(k.isInstancedMesh)ce.renderInstances(fe,Ae,k.count);else if(W.isInstancedBufferGeometry){const Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ye=Math.min(W.instanceCount,Ut);ce.renderInstances(fe,Ae,Ye)}else ce.render(fe,Ae)};function re(E,N,W){E.transparent===!0&&E.side===jn&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,xr(E,N,W),E.side=Oi,E.needsUpdate=!0,xr(E,N,W),E.side=jn):xr(E,N,W)}this.compile=function(E,N,W=null){W===null&&(W=E),p=te.get(W),p.init(N),w.push(p),W.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const at=k.material;if(at)if(Array.isArray(at))for(let Mt=0;Mt<at.length;Mt++){const Ct=at[Mt];re(Ct,W,k),X.add(Ct)}else re(at,W,k),X.add(at)}),w.pop(),p=null,X},this.compileAsync=function(E,N,W=null){const X=this.compile(E,N,W);return new Promise(k=>{function at(){if(X.forEach(function(Mt){bt.get(Mt).currentProgram.isReady()&&X.delete(Mt)}),X.size===0){k(E);return}setTimeout(at,10)}lt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let hn=null;function oi(E){hn&&hn(E)}function du(){Wi.stop()}function pu(){Wi.start()}const Wi=new _0;Wi.setAnimationLoop(oi),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(E){hn=E,$.setAnimationLoop(E),E===null?Wi.stop():Wi.start()},$.addEventListener("sessionstart",du),$.addEventListener("sessionend",pu),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,T),p=te.get(E,w.length),p.init(N),w.push(p),mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),oe.setFromProjectionMatrix(mt),ot=this.localClippingEnabled,j=rt.init(this.clippingPlanes,ot),_=Et.get(E,m.length),_.init(),m.push(_),$.enabled===!0&&$.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Ka(at,N,-1/0,x.sortObjects)}Ka(E,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,vt),Zt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Zt&&Ht.addToRenderList(_,E),this.info.render.frame++,j===!0&&rt.beginShadows();const W=p.state.shadowsArray;Tt.render(W,E,N),j===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,k=_.transmissive;if(p.setupLights(),N.isArrayCamera){const at=N.cameras;if(k.length>0)for(let Mt=0,Ct=at.length;Mt<Ct;Mt++){const Lt=at[Mt];gu(X,k,E,Lt)}Zt&&Ht.render(E);for(let Mt=0,Ct=at.length;Mt<Ct;Mt++){const Lt=at[Mt];mu(_,E,Lt,Lt.viewport)}}else k.length>0&&gu(X,k,E,N),Zt&&Ht.render(E),mu(_,E,N);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,N),ve.resetDefaultState(),L=-1,V=null,w.pop(),w.length>0?(p=w[w.length-1],j===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ka(E,N,W,X){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||oe.intersectsSprite(E)){X&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);const Mt=J.update(E),Ct=E.material;Ct.visible&&_.push(E,Mt,Ct,W,Ft.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||oe.intersectsObject(E))){const Mt=J.update(E),Ct=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ft.copy(Mt.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(Ct)){const Lt=Mt.groups;for(let Bt=0,zt=Lt.length;Bt<zt;Bt++){const It=Lt[Bt],fe=Ct[It.materialIndex];fe&&fe.visible&&_.push(E,Mt,fe,W,Ft.z,It)}}else Ct.visible&&_.push(E,Mt,Ct,W,Ft.z,null)}}const at=E.children;for(let Mt=0,Ct=at.length;Mt<Ct;Mt++)Ka(at[Mt],N,W,X)}function mu(E,N,W,X){const k=E.opaque,at=E.transmissive,Mt=E.transparent;p.setupLightsView(W),j===!0&&rt.setGlobalState(x.clippingPlanes,W),X&&ft.viewport(v.copy(X)),k.length>0&&_r(k,N,W),at.length>0&&_r(at,N,W),Mt.length>0&&_r(Mt,N,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function gu(E,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new gs(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?fr:Mi,minFilter:pi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const at=p.state.transmissionRenderTarget[X.id],Mt=X.viewport||v;at.setSize(Mt.z,Mt.w);const Ct=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(U),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),Zt&&Ht.render(W);const Lt=x.toneMapping;x.toneMapping=ki;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),j===!0&&rt.setGlobalState(x.clippingPlanes,X),_r(E,W,X),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),lt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let It=0,fe=N.length;It<fe;It++){const _e=N[It],Ae=_e.object,gn=_e.geometry,ce=_e.material,Ut=_e.group;if(ce.side===jn&&Ae.layers.test(X.layers)){const Ye=ce.side;ce.side=cn,ce.needsUpdate=!0,vu(Ae,W,X,gn,ce,Ut),ce.side=Ye,ce.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}x.setRenderTarget(Ct),x.setClearColor(U,F),Bt!==void 0&&(X.viewport=Bt),x.toneMapping=Lt}function _r(E,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let k=0,at=E.length;k<at;k++){const Mt=E[k],Ct=Mt.object,Lt=Mt.geometry,Bt=X===null?Mt.material:X,zt=Mt.group;Ct.layers.test(W.layers)&&vu(Ct,N,W,Lt,Bt,zt)}}function vu(E,N,W,X,k,at){E.onBeforeRender(x,N,W,X,k,at),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,N,W,X,E,at),k.transparent===!0&&k.side===jn&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,x.renderBufferDirect(W,N,X,k,E,at),k.side=Oi,k.needsUpdate=!0,x.renderBufferDirect(W,N,X,k,E,at),k.side=jn):x.renderBufferDirect(W,N,X,k,E,at),E.onAfterRender(x,N,W,X,k,at)}function xr(E,N,W){N.isScene!==!0&&(N=qt);const X=bt.get(E),k=p.state.lights,at=p.state.shadowsArray,Mt=k.state.version,Ct=Pt.getParameters(E,k.state,at,N,W),Lt=Pt.getProgramCacheKey(Ct);let Bt=X.programs;X.environment=E.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(E.isMeshStandardMaterial?G:b).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",ie),Bt=new Map,X.programs=Bt);let zt=Bt.get(Lt);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===Mt)return xu(E,Ct),zt}else Ct.uniforms=Pt.getUniforms(E),E.onBeforeCompile(Ct,x),zt=Pt.acquireProgram(Ct,Lt),Bt.set(Lt,zt),X.uniforms=Ct.uniforms;const It=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=rt.uniform),xu(E,Ct),X.needsLights=cm(E),X.lightsStateVersion=Mt,X.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function _u(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ca.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function xu(E,N){const W=bt.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function rm(E,N,W,X,k){N.isScene!==!0&&(N=qt),A.resetTextureUnits();const at=N.fog,Mt=X.isMeshStandardMaterial?N.environment:null,Ct=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Gi,Lt=(X.isMeshStandardMaterial?G:b).get(X.envMap||Mt),Bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,zt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!W.morphAttributes.position,fe=!!W.morphAttributes.normal,_e=!!W.morphAttributes.color;let Ae=ki;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ae=x.toneMapping);const gn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ce=gn!==void 0?gn.length:0,Ut=bt.get(X),Ye=p.state.lights;if(j===!0&&(ot===!0||E!==V)){const Rn=E===V&&X.id===L;rt.setState(X,E,Rn)}let le=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Ye.state.version||Ut.outputColorSpace!==Ct||k.isBatchedMesh&&Ut.batching===!1||!k.isBatchedMesh&&Ut.batching===!0||k.isBatchedMesh&&Ut.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ut.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ut.instancing===!1||!k.isInstancedMesh&&Ut.instancing===!0||k.isSkinnedMesh&&Ut.skinning===!1||!k.isSkinnedMesh&&Ut.skinning===!0||k.isInstancedMesh&&Ut.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ut.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ut.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ut.instancingMorph===!1&&k.morphTexture!==null||Ut.envMap!==Lt||X.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==rt.numPlanes||Ut.numIntersection!==rt.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==zt||Ut.morphTargets!==It||Ut.morphNormals!==fe||Ut.morphColors!==_e||Ut.toneMapping!==Ae||Ut.morphTargetsCount!==ce)&&(le=!0):(le=!0,Ut.__version=X.version);let kn=Ut.currentProgram;le===!0&&(kn=xr(X,N,k));let Ps=!1,vn=!1,ja=!1;const Pe=kn.getUniforms(),Si=Ut.uniforms;if(ft.useProgram(kn.program)&&(Ps=!0,vn=!0,ja=!0),X.id!==L&&(L=X.id,vn=!0),Ps||V!==E){st.reverseDepthBuffer?(At.copy(E.projectionMatrix),mg(At),gg(At),Pe.setValue(R,"projectionMatrix",At)):Pe.setValue(R,"projectionMatrix",E.projectionMatrix),Pe.setValue(R,"viewMatrix",E.matrixWorldInverse);const Rn=Pe.map.cameraPosition;Rn!==void 0&&Rn.setValue(R,Ot.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&Pe.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Pe.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,vn=!0,ja=!0)}if(k.isSkinnedMesh){Pe.setOptional(R,k,"bindMatrix"),Pe.setOptional(R,k,"bindMatrixInverse");const Rn=k.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Pe.setValue(R,"boneTexture",Rn.boneTexture,A))}k.isBatchedMesh&&(Pe.setOptional(R,k,"batchingTexture"),Pe.setValue(R,"batchingTexture",k._matricesTexture,A),Pe.setOptional(R,k,"batchingIdTexture"),Pe.setValue(R,"batchingIdTexture",k._indirectTexture,A),Pe.setOptional(R,k,"batchingColorTexture"),k._colorsTexture!==null&&Pe.setValue(R,"batchingColorTexture",k._colorsTexture,A));const Za=W.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0)&&Gt.update(k,W,kn),(vn||Ut.receiveShadow!==k.receiveShadow)&&(Ut.receiveShadow=k.receiveShadow,Pe.setValue(R,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Si.envMap.value=Lt,Si.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Si.envMapIntensity.value=N.environmentIntensity),vn&&(Pe.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&am(Si,ja),at&&X.fog===!0&&dt.refreshFogUniforms(Si,at),dt.refreshMaterialUniforms(Si,X,nt,z,p.state.transmissionRenderTarget[E.id]),ca.upload(R,_u(Ut),Si,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ca.upload(R,_u(Ut),Si,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Pe.setValue(R,"center",k.center),Pe.setValue(R,"modelViewMatrix",k.modelViewMatrix),Pe.setValue(R,"normalMatrix",k.normalMatrix),Pe.setValue(R,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Rn=X.uniformsGroups;for(let Ja=0,lm=Rn.length;Ja<lm;Ja++){const Mu=Rn[Ja];D.update(Mu,kn),D.bind(Mu,kn)}}return kn}function am(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function cm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,W){bt.get(E.texture).__webglTexture=N,bt.get(E.depthTexture).__webglTexture=W;const X=bt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const W=bt.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,W=0){T=E,I=N,C=W;let X=!0,k=null,at=!1,Mt=!1;if(E){const Lt=bt.get(E);if(Lt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(Lt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Lt.__hasExternalTextures)A.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const It=E.depthTexture;if(Lt.__boundDepthTexture!==It){if(It!==null&&bt.has(It)&&(E.width!==It.image.width||E.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Mt=!0);const zt=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?k=zt[N][W]:k=zt[N],at=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?k=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?k=zt[W]:k=zt,v.copy(E.viewport),M.copy(E.scissor),B=E.scissorTest}else v.copy(_t).multiplyScalar(nt).floor(),M.copy(yt).multiplyScalar(nt).floor(),B=Jt;if(ft.bindFramebuffer(R.FRAMEBUFFER,k)&&X&&ft.drawBuffers(E,k),ft.viewport(v),ft.scissor(M),ft.setScissorTest(B),at){const Lt=bt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Lt.__webglTexture,W)}else if(Mt){const Lt=bt.get(E.texture),Bt=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.__webglTexture,W||0,Bt)}L=-1},this.readRenderTargetPixels=function(E,N,W,X,k,at,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){ft.bindFramebuffer(R.FRAMEBUFFER,Ct);try{const Lt=E.texture,Bt=Lt.format,zt=Lt.type;if(!st.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-X&&W>=0&&W<=E.height-k&&R.readPixels(N,W,X,k,$t.convert(Bt),$t.convert(zt),at)}finally{const Lt=T!==null?bt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(R.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,X,k,at,Mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){const Lt=E.texture,Bt=Lt.format,zt=Lt.type;if(!st.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-X&&W>=0&&W<=E.height-k){ft.bindFramebuffer(R.FRAMEBUFFER,Ct);const It=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,It),R.bufferData(R.PIXEL_PACK_BUFFER,at.byteLength,R.STREAM_READ),R.readPixels(N,W,X,k,$t.convert(Bt),$t.convert(zt),0);const fe=T!==null?bt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(R.FRAMEBUFFER,fe);const _e=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await pg(R,_e,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,It),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,at),R.deleteBuffer(It),R.deleteSync(_e),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,W=0){E.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(E.image.width*X),at=Math.floor(E.image.height*X),Mt=N!==null?N.x:0,Ct=N!==null?N.y:0;A.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,Mt,Ct,k,at),ft.unbindTexture()},this.copyTextureToTexture=function(E,N,W=null,X=null,k=0){E.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],N=arguments[2],k=arguments[3]||0,W=null);let at,Mt,Ct,Lt,Bt,zt;W!==null?(at=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Ct=W.min.x,Lt=W.min.y):(at=E.image.width,Mt=E.image.height,Ct=0,Lt=0),X!==null?(Bt=X.x,zt=X.y):(Bt=0,zt=0);const It=$t.convert(N.format),fe=$t.convert(N.type);A.setTexture2D(N,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const _e=R.getParameter(R.UNPACK_ROW_LENGTH),Ae=R.getParameter(R.UNPACK_IMAGE_HEIGHT),gn=R.getParameter(R.UNPACK_SKIP_PIXELS),ce=R.getParameter(R.UNPACK_SKIP_ROWS),Ut=R.getParameter(R.UNPACK_SKIP_IMAGES),Ye=E.isCompressedTexture?E.mipmaps[k]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ye.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ct),R.pixelStorei(R.UNPACK_SKIP_ROWS,Lt),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,k,Bt,zt,at,Mt,It,fe,Ye.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,k,Bt,zt,Ye.width,Ye.height,It,Ye.data):R.texSubImage2D(R.TEXTURE_2D,k,Bt,zt,at,Mt,It,fe,Ye),R.pixelStorei(R.UNPACK_ROW_LENGTH,_e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae),R.pixelStorei(R.UNPACK_SKIP_PIXELS,gn),R.pixelStorei(R.UNPACK_SKIP_ROWS,ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ut),k===0&&N.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,N,W=null,X=null,k=0){E.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],N=arguments[3],k=arguments[4]||0);let at,Mt,Ct,Lt,Bt,zt,It,fe,_e;const Ae=E.isCompressedTexture?E.mipmaps[k]:E.image;W!==null?(at=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Ct=W.max.z-W.min.z,Lt=W.min.x,Bt=W.min.y,zt=W.min.z):(at=Ae.width,Mt=Ae.height,Ct=Ae.depth,Lt=0,Bt=0,zt=0),X!==null?(It=X.x,fe=X.y,_e=X.z):(It=0,fe=0,_e=0);const gn=$t.convert(N.format),ce=$t.convert(N.type);let Ut;if(N.isData3DTexture)A.setTexture3D(N,0),Ut=R.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),Ut=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Ye=R.getParameter(R.UNPACK_ROW_LENGTH),le=R.getParameter(R.UNPACK_IMAGE_HEIGHT),kn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ps=R.getParameter(R.UNPACK_SKIP_ROWS),vn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Lt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zt),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ut,k,It,fe,_e,at,Mt,Ct,gn,ce,Ae.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Ut,k,It,fe,_e,at,Mt,Ct,gn,Ae.data):R.texSubImage3D(Ut,k,It,fe,_e,at,Mt,Ct,gn,ce,Ae),R.pixelStorei(R.UNPACK_ROW_LENGTH,Ye),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,le),R.pixelStorei(R.UNPACK_SKIP_PIXELS,kn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ps),R.pixelStorei(R.UNPACK_SKIP_IMAGES,vn),k===0&&N.generateMipmaps&&R.generateMipmap(Ut),ft.unbindTexture()},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){I=0,C=0,T=null,ft.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ih?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Ua?"display-p3":"srgb"}}class kh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ht(t),this.near=e,this.far=i}clone(){return new kh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class E0 extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ka extends tn{constructor(t=null,e=1,i=1,s,o,r,a,c,h=an,l=an,u,f){super(null,r,a,c,h,l,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gf extends Ce{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xs=new ae,vf=new ae,Hr=[],_f=new Nn,Ax=new ae,To=new Xt,Ao=new mo;class Fh extends Xt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ax)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),_f.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(_f)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xs),Ao.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Ao)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ao.copy(this.boundingSphere),Ao.applyMatrix4(i),t.ray.intersectsSphere(Ao)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Xs),vf.multiplyMatrices(i,Xs),To.matrixWorld=vf,To.raycast(t,Hr);for(let r=0,a=Hr.length;r<a;r++){const c=Hr[r];c.instanceId=o,c.object=this,e.push(c)}Hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ka(new Float32Array(s*this.count),s,this.count,Da,Zn));const o=this.morphTexture.source.data.data;let r=0;for(let h=0;h<i.length;h++)r+=i[h];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Oh extends Rs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xf=new ae,Zl=new h0,Gr=new mo,Vr=new P;class Bh extends Ee{constructor(t=new Ue,e=new Oh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=o,t.ray.intersectsSphere(Gr)===!1)return;xf.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(xf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let g=f,_=d;g<_;g++){const p=h.getX(g);Vr.fromBufferAttribute(u,p),Mf(Vr,p,c,s,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,_=d;g<_;g++)Vr.fromBufferAttribute(u,g),Mf(Vr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Mf(n,t,e,i,s,o,r){const a=Zl.distanceSqToPoint(n);if(a<e){const c=new P;Zl.closestPointToPoint(n,c),c.applyMatrix4(i);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class vs extends tn{constructor(t,e,i,s,o,r,a,c,h){super(t,e,i,s,o,r,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,h;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),h=i[s]-r,h<0)a=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const l=i[s],f=i[s+1]-l,d=(r-l)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new it:new P);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,s=[],o=[],r=[],a=new P,c=new ae;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}o[0]=new P,r[0]=new P;let h=Number.MAX_VALUE;const l=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);l<=h&&(h=l,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),f<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(We(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(We(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zh extends si{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=h-this.aY;c=f*l-d*u+this.aX,h=f*u+d*l+this.aY}return i.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Rx extends zh{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Hh(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,h){s(r,a,h*(a-o),h*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,h,l,u){let f=(r-o)/h-(a-o)/(h+l)+(a-r)/l,d=(a-r)/l-(c-r)/(l+u)+(c-a)/u;f*=l,d*=l,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Wr=new P,Rc=new Hh,Cc=new Hh,Pc=new Hh;class Cx extends si{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let h,l;this.closed||a>0?h=s[(a-1)%o]:(Wr.subVectors(s[0],s[1]).add(s[0]),h=Wr);const u=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?l=s[(a+2)%o]:(Wr.subVectors(s[o-1],s[o-2]).add(s[o-1]),l=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(l),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Rc.initNonuniformCatmullRom(h.x,u.x,f.x,l.x,g,_,p),Cc.initNonuniformCatmullRom(h.y,u.y,f.y,l.y,g,_,p),Pc.initNonuniformCatmullRom(h.z,u.z,f.z,l.z,g,_,p)}else this.curveType==="catmullrom"&&(Rc.initCatmullRom(h.x,u.x,f.x,l.x,this.tension),Cc.initCatmullRom(h.y,u.y,f.y,l.y,this.tension),Pc.initCatmullRom(h.z,u.z,f.z,l.z,this.tension));return i.set(Rc.calc(c),Cc.calc(c),Pc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yf(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function Px(n,t){const e=1-n;return e*e*t}function Lx(n,t){return 2*(1-n)*n*t}function Ix(n,t){return n*n*t}function Xo(n,t,e,i){return Px(n,t)+Lx(n,e)+Ix(n,i)}function Dx(n,t){const e=1-n;return e*e*e*t}function Ux(n,t){const e=1-n;return 3*e*e*n*t}function Nx(n,t){return 3*(1-n)*n*n*t}function kx(n,t){return n*n*n*t}function qo(n,t,e,i,s){return Dx(n,t)+Ux(n,e)+Nx(n,i)+kx(n,s)}class T0 extends si{constructor(t=new it,e=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new it){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(qo(t,s.x,o.x,r.x,a.x),qo(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fx extends si{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(qo(t,s.x,o.x,r.x,a.x),qo(t,s.y,o.y,r.y,a.y),qo(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A0 extends si{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ox extends si{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R0 extends si{constructor(t=new it,e=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new it){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Xo(t,s.x,o.x,r.x),Xo(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bx extends si{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(Xo(t,s.x,o.x,r.x),Xo(t,s.y,o.y,r.y),Xo(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],h=s[r],l=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(yf(a,c.x,h.x,l.x,u.x),yf(a,c.y,h.y,l.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var Jl=Object.freeze({__proto__:null,ArcCurve:Rx,CatmullRomCurve3:Cx,CubicBezierCurve:T0,CubicBezierCurve3:Fx,EllipseCurve:zh,LineCurve:A0,LineCurve3:Ox,QuadraticBezierCurve:R0,QuadraticBezierCurve3:Bx,SplineCurve:C0});class zx extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),h=c===0?0:1-r/c;return a.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let h=0;h<c.length;h++){const l=c[h];i&&i.equals(l)||(e.push(l),i=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Jl[s.type]().fromJSON(s))}return this}}class Ql extends zx{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new A0(this.currentPoint.clone(),new it(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new R0(this.currentPoint.clone(),new it(t,e),new it(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new T0(this.currentPoint.clone(),new it(t,e),new it(i,s),new it(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new C0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const h=new zh(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gh extends Ue{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],h=[],l=1/e,u=new P,f=new it,d=new P,g=new P,_=new P;let p=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let w=0;w<=e;w++){const x=i+w*l*s,S=Math.sin(x),I=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*S,u.y=t[C].y,u.z=t[C].x*I,r.push(u.x,u.y,u.z),f.x=w/e,f.y=C/(t.length-1),a.push(f.x,f.y);const T=c[3*C+0]*S,L=c[3*C+1],V=c[3*C+0]*I;h.push(T,L,V)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){const S=x+w*t.length,I=S,C=S+t.length,T=S+t.length+1,L=S+1;o.push(I,C,L),o.push(T,L,C)}this.setIndex(o),this.setAttribute("position",new ge(r,3)),this.setAttribute("uv",new ge(a,2)),this.setAttribute("normal",new ge(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gh(t.points,t.segments,t.phiStart,t.phiLength)}}class cs extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],h=new P,l=new it;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),r.push(h.x,h.y,h.z),a.push(0,0,1),l.x=(r[f]/t+1)/2,l.y=(r[f+1]/t+1)/2,c.push(l.x,l.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vi extends Ue{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const h=this;s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let g=0;const _=[],p=i/2;let m=0;w(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(l),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(d,2));function w(){const S=new P,I=new P;let C=0;const T=(e-t)/i;for(let L=0;L<=o;L++){const V=[],v=L/o,M=v*(e-t)+t;for(let B=0;B<=s;B++){const U=B/s,F=U*c+a,q=Math.sin(F),z=Math.cos(F);I.x=M*q,I.y=-v*i+p,I.z=M*z,u.push(I.x,I.y,I.z),S.set(q,T,z).normalize(),f.push(S.x,S.y,S.z),d.push(U,1-v),V.push(g++)}_.push(V)}for(let L=0;L<s;L++)for(let V=0;V<o;V++){const v=_[V][L],M=_[V+1][L],B=_[V+1][L+1],U=_[V][L+1];t>0&&(l.push(v,M,U),C+=3),e>0&&(l.push(M,B,U),C+=3)}h.addGroup(m,C,0),m+=C}function x(S){const I=g,C=new it,T=new P;let L=0;const V=S===!0?t:e,v=S===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),g++;const M=g;for(let B=0;B<=s;B++){const F=B/s*c+a,q=Math.cos(F),z=Math.sin(F);T.x=V*z,T.y=p*v,T.z=V*q,u.push(T.x,T.y,T.z),f.push(0,v,0),C.x=q*.5+.5,C.y=z*.5*v+.5,d.push(C.x,C.y),g++}for(let B=0;B<s;B++){const U=I+B,F=M+B;S===!0?l.push(F,F+1,U):l.push(F+1,F,U),L+=3}h.addGroup(m,L,S===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vh extends Vi{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Vh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wh extends Ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),h(i),l(),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(o.slice(),3)),this.setAttribute("uv",new ge(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const x=new P,S=new P,I=new P;for(let C=0;C<e.length;C+=3)d(e[C+0],x),d(e[C+1],S),d(e[C+2],I),c(x,S,I,w)}function c(w,x,S,I){const C=I+1,T=[];for(let L=0;L<=C;L++){T[L]=[];const V=w.clone().lerp(S,L/C),v=x.clone().lerp(S,L/C),M=C-L;for(let B=0;B<=M;B++)B===0&&L===C?T[L][B]=V:T[L][B]=V.clone().lerp(v,B/M)}for(let L=0;L<C;L++)for(let V=0;V<2*(C-L)-1;V++){const v=Math.floor(V/2);V%2===0?(f(T[L][v+1]),f(T[L+1][v]),f(T[L][v])):(f(T[L][v+1]),f(T[L+1][v+1]),f(T[L+1][v]))}}function h(w){const x=new P;for(let S=0;S<o.length;S+=3)x.x=o[S+0],x.y=o[S+1],x.z=o[S+2],x.normalize().multiplyScalar(w),o[S+0]=x.x,o[S+1]=x.y,o[S+2]=x.z}function l(){const w=new P;for(let x=0;x<o.length;x+=3){w.x=o[x+0],w.y=o[x+1],w.z=o[x+2];const S=p(w)/2/Math.PI+.5,I=m(w)/Math.PI+.5;r.push(S,1-I)}g(),u()}function u(){for(let w=0;w<r.length;w+=6){const x=r[w+0],S=r[w+2],I=r[w+4],C=Math.max(x,S,I),T=Math.min(x,S,I);C>.9&&T<.1&&(x<.2&&(r[w+0]+=1),S<.2&&(r[w+2]+=1),I<.2&&(r[w+4]+=1))}}function f(w){o.push(w.x,w.y,w.z)}function d(w,x){const S=w*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function g(){const w=new P,x=new P,S=new P,I=new P,C=new it,T=new it,L=new it;for(let V=0,v=0;V<o.length;V+=9,v+=6){w.set(o[V+0],o[V+1],o[V+2]),x.set(o[V+3],o[V+4],o[V+5]),S.set(o[V+6],o[V+7],o[V+8]),C.set(r[v+0],r[v+1]),T.set(r[v+2],r[v+3]),L.set(r[v+4],r[v+5]),I.copy(w).add(x).add(S).divideScalar(3);const M=p(I);_(C,v+0,w,M),_(T,v+2,x,M),_(L,v+4,S,M)}}function _(w,x,S,I){I<0&&w.x===1&&(r[x]=w.x-1),S.x===0&&S.z===0&&(r[x]=I/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wh(t.vertices,t.indices,t.radius,t.details)}}class Xh extends Ql{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Ql().fromJSON(s))}return this}}const Hx={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=P0(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,h,l,u,f,d;if(i&&(o=qx(n,t,o,e)),n.length>80*e){a=h=n[0],c=l=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<c&&(c=f),u>h&&(h=u),f>l&&(l=f);d=Math.max(h-a,l-c),d=d!==0?32767/d:0}return er(o,r,e,a,c,d,0),r}};function P0(n,t,e,i,s){let o,r;if(s===iM(n,t,e,i)>0)for(o=t;o<e;o+=i)r=bf(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=bf(o,n[o],n[o+1],r);return r&&Fa(r,r.next)&&(ir(r),r=r.next),r}function _s(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Fa(e,e.next)||Se(e.prev,e,e.next)===0)){if(ir(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function er(n,t,e,i,s,o,r){if(!n)return;!r&&o&&Zx(n,i,s,o);let a=n,c,h;for(;n.prev!==n.next;){if(c=n.prev,h=n.next,o?Vx(n,i,s,o):Gx(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(h.i/e|0),ir(n),n=h.next,a=h.next;continue}if(n=h,n===a){r?r===1?(n=Wx(_s(n),t,e),er(n,t,e,i,s,o,2)):r===2&&Xx(n,t,e,i,s,o):er(_s(n),t,e,i,s,o,1);break}}}function Gx(n){const t=n.prev,e=n,i=n.next;if(Se(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,h=i.y,l=s<o?s<r?s:r:o<r?o:r,u=a<c?a<h?a:h:c<h?c:h,f=s>o?s>r?s:r:o>r?o:r,d=a>c?a>h?a:h:c>h?c:h;let g=i.next;for(;g!==t;){if(g.x>=l&&g.x<=f&&g.y>=u&&g.y<=d&&Qs(s,a,o,c,r,h,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vx(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Se(s,o,r)>=0)return!1;const a=s.x,c=o.x,h=r.x,l=s.y,u=o.y,f=r.y,d=a<c?a<h?a:h:c<h?c:h,g=l<u?l<f?l:f:u<f?u:f,_=a>c?a>h?a:h:c>h?c:h,p=l>u?l>f?l:f:u>f?u:f,m=th(d,g,t,e,i),w=th(_,p,t,e,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=m&&S&&S.z<=w;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==r&&Qs(a,l,c,u,h,f,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=d&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==r&&Qs(a,l,c,u,h,f,S.x,S.y)&&Se(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==r&&Qs(a,l,c,u,h,f,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=w;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==r&&Qs(a,l,c,u,h,f,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Wx(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Fa(s,o)&&L0(s,i,i.next,o)&&nr(s,o)&&nr(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),ir(i),ir(i.next),i=n=o),i=i.next}while(i!==n);return _s(i)}function Xx(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&tM(r,a)){let c=I0(r,a);r=_s(r,r.next),c=_s(c,c.next),er(r,t,e,i,s,o,0),er(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function qx(n,t,e,i){const s=[];let o,r,a,c,h;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,h=P0(n,a,c,i,!1),h===h.next&&(h.steiner=!0),s.push(Qx(h));for(s.sort(Yx),o=0;o<s.length;o++)e=$x(s[o],e);return e}function Yx(n,t){return n.x-t.x}function $x(n,t){const e=Kx(n,t);if(!e)return t;const i=I0(e,n);return _s(i,i.next),_s(e,e.next)}function Kx(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,h=s.y;let l=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&Qs(r<h?o:i,r,c,h,r<h?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),nr(e,n)&&(u<l||u===l&&(e.x>s.x||e.x===s.x&&jx(s,e)))&&(s=e,l=u)),e=e.next;while(e!==a);return s}function jx(n,t){return Se(n.prev,n,t.prev)<0&&Se(t.next,n,n.next)<0}function Zx(n,t,e,i){let s=n;do s.z===0&&(s.z=th(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Jx(s)}function Jx(n){let t,e,i,s,o,r,a,c,h=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(c=h;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,h*=2}while(r>1);return n}function th(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Qx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Qs(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function tM(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!eM(n,t)&&(nr(n,t)&&nr(t,n)&&nM(n,t)&&(Se(n.prev,n,t.prev)||Se(n,t.prev,t))||Fa(n,t)&&Se(n.prev,n,n.next)>0&&Se(t.prev,t,t.next)>0)}function Se(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Fa(n,t){return n.x===t.x&&n.y===t.y}function L0(n,t,e,i){const s=qr(Se(n,t,e)),o=qr(Se(n,t,i)),r=qr(Se(e,i,n)),a=qr(Se(e,i,t));return!!(s!==o&&r!==a||s===0&&Xr(n,e,t)||o===0&&Xr(n,i,t)||r===0&&Xr(e,n,i)||a===0&&Xr(e,t,i))}function Xr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function qr(n){return n>0?1:n<0?-1:0}function eM(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&L0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function nr(n,t){return Se(n.prev,n,n.next)<0?Se(n,t,n.next)>=0&&Se(n,n.prev,t)>=0:Se(n,t,n.prev)<0||Se(n,n.next,t)<0}function nM(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function I0(n,t){const e=new eh(n.i,n.x,n.y),i=new eh(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function bf(n,t,e,i){const s=new eh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ir(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function eh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iM(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class Yo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return Yo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];Sf(t),wf(i,t);let r=t.length;e.forEach(Sf);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,wf(i,e[c]);const a=Hx.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Sf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function wf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Oa extends Ue{constructor(t=new Xh([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const h=t[a];r(h)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(o,2)),this.computeVertexNormals();function r(a){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:sM;let x,S=!1,I,C,T,L;m&&(x=m.getSpacedPoints(l),S=!0,f=!1,I=m.computeFrenetFrames(l,!1),C=new P,T=new P,L=new P),f||(p=0,d=0,g=0,_=0);const V=a.extractPoints(h);let v=V.shape;const M=V.holes;if(!Yo.isClockWise(v)){v=v.reverse();for(let Q=0,R=M.length;Q<R;Q++){const ut=M[Q];Yo.isClockWise(ut)&&(M[Q]=ut.reverse())}}const U=Yo.triangulateShape(v,M),F=v;for(let Q=0,R=M.length;Q<R;Q++){const ut=M[Q];v=v.concat(ut)}function q(Q,R,ut){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(R,ut)}const z=v.length,nt=U.length;function Y(Q,R,ut){let lt,st,ft;const Dt=Q.x-R.x,bt=Q.y-R.y,A=ut.x-Q.x,b=ut.y-Q.y,G=Dt*Dt+bt*bt,Z=Dt*b-bt*A;if(Math.abs(Z)>Number.EPSILON){const tt=Math.sqrt(G),J=Math.sqrt(A*A+b*b),Pt=R.x-bt/tt,dt=R.y+Dt/tt,Et=ut.x-b/J,te=ut.y+A/J,rt=((Et-Pt)*b-(te-dt)*A)/(Dt*b-bt*A);lt=Pt+Dt*rt-Q.x,st=dt+bt*rt-Q.y;const Tt=lt*lt+st*st;if(Tt<=2)return new it(lt,st);ft=Math.sqrt(Tt/2)}else{let tt=!1;Dt>Number.EPSILON?A>Number.EPSILON&&(tt=!0):Dt<-Number.EPSILON?A<-Number.EPSILON&&(tt=!0):Math.sign(bt)===Math.sign(b)&&(tt=!0),tt?(lt=-bt,st=Dt,ft=Math.sqrt(G)):(lt=Dt,st=bt,ft=Math.sqrt(G/2))}return new it(lt/ft,st/ft)}const vt=[];for(let Q=0,R=F.length,ut=R-1,lt=Q+1;Q<R;Q++,ut++,lt++)ut===R&&(ut=0),lt===R&&(lt=0),vt[Q]=Y(F[Q],F[ut],F[lt]);const _t=[];let yt,Jt=vt.concat();for(let Q=0,R=M.length;Q<R;Q++){const ut=M[Q];yt=[];for(let lt=0,st=ut.length,ft=st-1,Dt=lt+1;lt<st;lt++,ft++,Dt++)ft===st&&(ft=0),Dt===st&&(Dt=0),yt[lt]=Y(ut[lt],ut[ft],ut[Dt]);_t.push(yt),Jt=Jt.concat(yt)}for(let Q=0;Q<p;Q++){const R=Q/p,ut=d*Math.cos(R*Math.PI/2),lt=g*Math.sin(R*Math.PI/2)+_;for(let st=0,ft=F.length;st<ft;st++){const Dt=q(F[st],vt[st],lt);mt(Dt.x,Dt.y,-ut)}for(let st=0,ft=M.length;st<ft;st++){const Dt=M[st];yt=_t[st];for(let bt=0,A=Dt.length;bt<A;bt++){const b=q(Dt[bt],yt[bt],lt);mt(b.x,b.y,-ut)}}}const oe=g+_;for(let Q=0;Q<z;Q++){const R=f?q(v[Q],Jt[Q],oe):v[Q];S?(T.copy(I.normals[0]).multiplyScalar(R.x),C.copy(I.binormals[0]).multiplyScalar(R.y),L.copy(x[0]).add(T).add(C),mt(L.x,L.y,L.z)):mt(R.x,R.y,0)}for(let Q=1;Q<=l;Q++)for(let R=0;R<z;R++){const ut=f?q(v[R],Jt[R],oe):v[R];S?(T.copy(I.normals[Q]).multiplyScalar(ut.x),C.copy(I.binormals[Q]).multiplyScalar(ut.y),L.copy(x[Q]).add(T).add(C),mt(L.x,L.y,L.z)):mt(ut.x,ut.y,u/l*Q)}for(let Q=p-1;Q>=0;Q--){const R=Q/p,ut=d*Math.cos(R*Math.PI/2),lt=g*Math.sin(R*Math.PI/2)+_;for(let st=0,ft=F.length;st<ft;st++){const Dt=q(F[st],vt[st],lt);mt(Dt.x,Dt.y,u+ut)}for(let st=0,ft=M.length;st<ft;st++){const Dt=M[st];yt=_t[st];for(let bt=0,A=Dt.length;bt<A;bt++){const b=q(Dt[bt],yt[bt],lt);S?mt(b.x,b.y+x[l-1].y,x[l-1].x+ut):mt(b.x,b.y,u+ut)}}}j(),ot();function j(){const Q=s.length/3;if(f){let R=0,ut=z*R;for(let lt=0;lt<nt;lt++){const st=U[lt];Ot(st[2]+ut,st[1]+ut,st[0]+ut)}R=l+p*2,ut=z*R;for(let lt=0;lt<nt;lt++){const st=U[lt];Ot(st[0]+ut,st[1]+ut,st[2]+ut)}}else{for(let R=0;R<nt;R++){const ut=U[R];Ot(ut[2],ut[1],ut[0])}for(let R=0;R<nt;R++){const ut=U[R];Ot(ut[0]+z*l,ut[1]+z*l,ut[2]+z*l)}}i.addGroup(Q,s.length/3-Q,0)}function ot(){const Q=s.length/3;let R=0;At(F,R),R+=F.length;for(let ut=0,lt=M.length;ut<lt;ut++){const st=M[ut];At(st,R),R+=st.length}i.addGroup(Q,s.length/3-Q,1)}function At(Q,R){let ut=Q.length;for(;--ut>=0;){const lt=ut;let st=ut-1;st<0&&(st=Q.length-1);for(let ft=0,Dt=l+p*2;ft<Dt;ft++){const bt=z*ft,A=z*(ft+1),b=R+lt+bt,G=R+st+bt,Z=R+st+A,tt=R+lt+A;Ft(b,G,Z,tt)}}}function mt(Q,R,ut){c.push(Q),c.push(R),c.push(ut)}function Ot(Q,R,ut){qt(Q),qt(R),qt(ut);const lt=s.length/3,st=w.generateTopUV(i,s,lt-3,lt-2,lt-1);Zt(st[0]),Zt(st[1]),Zt(st[2])}function Ft(Q,R,ut,lt){qt(Q),qt(R),qt(lt),qt(R),qt(ut),qt(lt);const st=s.length/3,ft=w.generateSideWallUV(i,s,st-6,st-3,st-2,st-1);Zt(ft[0]),Zt(ft[1]),Zt(ft[3]),Zt(ft[1]),Zt(ft[2]),Zt(ft[3])}function qt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function Zt(Q){o.push(Q.x),o.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return oM(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jl[s.type]().fromJSON(s)),new Oa(i,t.options)}}const sM={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],h=t[s*3],l=t[s*3+1];return[new it(o,r),new it(a,c),new it(h,l)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[i*3],l=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[o*3],p=t[o*3+1],m=t[o*3+2];return Math.abs(a-l)<Math.abs(r-h)?[new it(r,1-c),new it(h,1-u),new it(f,1-g),new it(_,1-m)]:[new it(a,1-c),new it(l,1-u),new it(d,1-g),new it(p,1-m)]}};function oM(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class dr extends Wh{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new dr(t.radius,t.detail)}}class qn extends Ue{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let h=0;const l=[],u=new P,f=new P,d=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const w=[],x=m/i;let S=0;m===0&&r===0?S=.5/e:m===i&&c===Math.PI&&(S=-.5/e);for(let I=0;I<=e;I++){const C=I/e;u.x=-t*Math.cos(s+C*o)*Math.sin(r+x*a),u.y=t*Math.cos(r+x*a),u.z=t*Math.sin(s+C*o)*Math.sin(r+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(C+S,1-x),w.push(h++)}l.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){const x=l[m][w+1],S=l[m][w],I=l[m+1][w],C=l[m+1][w+1];(m!==0||r>0)&&d.push(x,S,C),(m!==i-1||c<Math.PI)&&d.push(S,I,C)}this.setIndex(d),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ba extends Ue{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],h=[],l=new P,u=new P,f=new P;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*o,p=d/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),l.x=t*Math.cos(_),l.y=t*Math.sin(_),f.subVectors(u,l).normalize(),c.push(f.x,f.y,f.z),h.push(g/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,w=(s+1)*d+g;r.push(_,p,w),r.push(p,m,w)}this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class D0 extends Rs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ht(16777215),this.specular=new ht(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yn extends Rs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qh extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rM extends qh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Lc=new ae,Ef=new P,Tf=new P;class U0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ef),Tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tf),e.updateMatrixWorld(),Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class aM extends U0{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ho*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(i!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=i,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class cM extends qh{constructor(t,e,i=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=i,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new aM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lM extends U0{constructor(){super(new x0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class N0 extends qh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new lM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);const hM={play:{en:"PLAY",pl:"GRAJ"},garage:{en:"GARAGE",pl:"GARAŻ"},go:{en:"GO",pl:"JEDŹ"},back:{en:"Back",pl:"Wróć"},best:{en:"BEST",pl:"REKORD"},gearBank:{en:"GEAR BANK",pl:"ZĘBATKI RAZEM"},bike:{en:"BIKE",pl:"MOTOR"},car:{en:"CAR",pl:"AUTO"},handling:{en:"Handling",pl:"Zwrotność"},toughness:{en:"Toughness",pl:"Wytrzymałość"},reach:{en:"Pickup reach",pl:"Zasięg zbierania"},paint:{en:"Paint",pl:"Lakier"},rider:{en:"Rider",pl:"Kierowca"},accent:{en:"Stripes",pl:"Pasy"},special:{en:"Special",pl:"Specjalne"},done:{en:"DONE",pl:"GOTOWE"},upgrades:{en:"UPGRADES",pl:"ULEPSZENIA"},upgradesNote:{en:"Power-ups only · records stay fair",pl:"Tylko bonusy · rekordy bez zmian"},buy:{en:"BUY",pl:"KUP"},sure:{en:"SURE?",pl:"NA PEWNO?"},missing:{en:"Missing",pl:"Brakuje"},max:{en:"MAX",pl:"MAKS"},upMagnetTime:{en:"Magnet time",pl:"Czas magnesu"},upMagnetRadius:{en:"Magnet reach",pl:"Zasięg magnesu"},upMagnetEvery:{en:"Magnet every",pl:"Magnes co"},paused:{en:"PAUSED",pl:"PAUZA"},resume:{en:"RESUME",pl:"WZNÓW"},restart:{en:"RESTART",pl:"OD NOWA"},home:{en:"HOME",pl:"MENU"},retry:{en:"RETRY",pl:"JESZCZE RAZ"},newBest:{en:"NEW BEST!",pl:"NOWY REKORD!"},distance:{en:"DISTANCE",pl:"DYSTANS"},gearsRun:{en:"GEARS THIS RUN",pl:"ZĘBATKI W BIEGU"},settings:{en:"SETTINGS",pl:"USTAWIENIA"},music:{en:"Music",pl:"Muzyka"},sfx:{en:"Sound effects",pl:"Efekty dźwiękowe"},haptics:{en:"Vibration",pl:"Wibracje"},reducedMotion:{en:"Reduced motion",pl:"Ograniczony ruch"},language:{en:"Language",pl:"Język"},langAuto:{en:"Auto",pl:"Auto"},close:{en:"CLOSE",pl:"ZAMKNIJ"},loading:{en:"LOADING",pl:"ŁADOWANIE"},hint:{en:"Swipe to steer · up to jump · down to duck",pl:"Przesuń: skręt · w górę: skok · w dół: unik"},hintKeys:{en:"Arrows / WASD · Space jump · Esc pause",pl:"Strzałki / WASD · Spacja skok · Esc pauza"},app:{en:"App",pl:"Aplikacja"},install:{en:"INSTALL APP",pl:"ZAINSTALUJ"},iosInstall:{en:"To install: Share → Add to Home Screen",pl:"Instalacja: Udostępnij → Do ekranu początkowego"},updateReady:{en:"NEW VERSION · UPDATE",pl:"NOWA WERSJA · AKTUALIZUJ"},version:{en:"Version",pl:"Wersja"},welcome:{en:"WELCOME TO",pl:"WITAMY"},population:{en:"POPULATION",pl:"LUDNOŚĆ"},nightFalls:{en:"NIGHT FALLS",pl:"ZAPADA NOC"},sunrise:{en:"SUNRISE",pl:"WSCHÓD SŁOŃCA"},tier2:{en:"CRUISE CONTROL",pl:"TEMPO PODRÓŻNE"},tier3:{en:"TRAFFIC AHEAD",pl:"KORKI W PRZODZIE"},tier4:{en:"RUSH HOUR",pl:"GODZINY SZCZYTU"},tier5:{en:"TOTAL CHAOS",pl:"TOTALNY CHAOS"},speedUp:{en:"SPEED UP",pl:"PRZYSPIESZAMY"},breather:{en:"CLEAR ROAD",pl:"WOLNA DROGA"},magnet:{en:"MAGNET!",pl:"MAGNES!"},repaired:{en:"REPAIRED!",pl:"NAPRAWIONO!"},bestPassed:{en:"NEW BEST!",pl:"NOWY REKORD!"},combo:{en:"COMBO",pl:"KOMBO"},comboBest:{en:"best",pl:"max"},combo2:{en:"NICE!",pl:"NIEŹLE!"},combo3:{en:"GREAT!",pl:"SUPER!"},combo4:{en:"WILD!",pl:"CZAD!"},combo5:{en:"MAX!",pl:"MAKS!"},biomeSuburb:{en:"SPRINGVALE",pl:"SPRINGVALE"},biomeForest:{en:"AMBER PINES",pl:"AMBER PINES"},biomeFields:{en:"GLENNFIELDS",pl:"GLENNFIELDS"},biomeIndustrial:{en:"IRONWORKS DISTRICT",pl:"IRONWORKS DISTRICT"},biomeCenter:{en:"DOWNTOWN RATCLIFF",pl:"DOWNTOWN RATCLIFF"},biomeOldTown:{en:"RATCLIFF OLDTOWN",pl:"RATCLIFF OLDTOWN"},biomeDesert:{en:"DUSTBORN REACHES",pl:"DUSTBORN REACHES"},biomeCanyon:{en:"CANDOR CANYON",pl:"CANDOR CANYON"},biomeRoute66:{en:"LOST HIGHWAY",pl:"LOST HIGHWAY"}};let sr="en";function uM(){return(typeof navigator<"u"&&navigator.language||"").toLowerCase().startsWith("pl")?"pl":"en"}function k0(n){sr=n==="auto"?uM():n,typeof document<"u"&&(document.documentElement.lang=sr)}function F0(){return sr}function gt(n){return hM[n][sr]}function un(n){const t=sr==="pl"?" ":",";return String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g,t)}const nh=new Set;function O0(n){return n.image.getContext("2d")}function B0(n){const t=n.userData.pixels,e=O0(n);!t||!e||(e.putImageData(t,0,0),n.needsUpdate=!0)}function xs(n){const t=n.onUpdate;return n.onUpdate=()=>{t==null||t.call(n);const e=n.image,i=O0(n);i&&e.width>0&&e.height>0&&(n.userData.pixels=i.getImageData(0,0,e.width,e.height))},nh.add(n),n.image.addEventListener("contextrestored",()=>B0(n)),n.addEventListener("dispose",()=>{nh.delete(n),delete n.userData.pixels}),n}function fM(){for(const n of nh)B0(n)}const O={laneWidth:3,laneCount:3,shoulderWidth:1.5,chunkLength:40,drawDistance:200,fogNear:120,fogFar:200,generateAhead:360,startSpeed:14,maxSpeed:40,speedCurveK:2500,tierBounds:[0,300,1e3,2e3,3500],tierGaps:[35,28,22,18,15],tierWeights:[[100,0,0,0,0],[40,60,0,0,0],[15,35,50,0,0],[5,20,35,40,0],[0,10,25,35,30]],forgivenessDistance:150,firstPatternAt:70,minReactionTime:.6,minReactionDistance:12,patternReferenceSpacing:12,minLeadIn:2,breatherIntervalMin:400,breatherIntervalMax:600,breatherLengthMin:60,breatherLengthMax:80,jumpPeak:1.6,fastDropTime:.1,duckTime:.7,hitboxHeight:1.4,duckHitboxHeight:.8,bikeHitboxLength:1.8,carHitboxLength:3.6,bikeHitboxWidth:.9,carHitboxWidth:1.8,inputBuffer:.15,lowHeight:.8,overheadClearance:1,maxHp:3,invulnerableTime:1,hitSlowFactor:.55,hitSlowRecover:2.5,hitSlowHold:.15,smashSlowFactor:.8,smashSlowTime:.6,oilLockTime:.8,crashSlowMoTime:.8,crashTimeScale:.3,trafficSpeedRatio:.4,switcherBlinkerTime:1,switcherLaneChangeTime:.6,switcherDoneBefore:1.6,pickupRadius:.9,magnetRadius:5,magnetDuration:8,goldenGearEvery:250,magnetEvery:600,wrenchMinSpacing:300,wrenchAfterHit:200,gearSpacing:3,comboLevelPts:[100,150,250,350],comboRazorTtc:.25,comboCloseTtc:.5,comboPts:{razor:40,close:25,jump:15,duck:20,smash:8,line:20,golden:10,clean:10},comboDrainDelay:2.5,comboDrainRate:12,camHeight:6.5,camBack:12,camLaneFollow:.5,camJumpFollow:.3,fovMin:48,fovMax:56,hitCamPull:6,hitFovDrop:10,vFovClampMin:50,vFovClampMax:95,swipeMinPx:30,swipeMaxMs:300,hitStop:.06,shakeMaxOffset:.7,shakeMaxRoll:.035,shakeDecay:1.5,traumaLand:.25,traumaSmash:.3,traumaHit:.55,traumaCrash:1,speedLinesFrom:25,nearMissMargin:.3,biomeLeg:700,biomeBlend:100,gateBefore:40,gateAfter:80,biomeDevStart:100,fixedStep:1/120,maxFrameDt:.1},zn=400;class dM{constructor(){this.vel=new Float32Array(zn*3),this.life=new Float32Array(zn),this.maxLife=new Float32Array(zn),this.gravity=new Float32Array(zn),this.scroll=new Uint8Array(zn),this.next=0,this.c=new ht;const t=new Ue;this.pos=new Float32Array(zn*3),this.col=new Float32Array(zn*3);for(let i=0;i<zn;i++)this.pos[i*3+1]=-100;t.setAttribute("position",new Ce(this.pos,3)),t.setAttribute("color",new Ce(this.col,3));const e=new Oh({size:.28,vertexColors:!0,sizeAttenuation:!0,fog:!1});this.points=new Bh(t,e),this.points.frustumCulled=!1}emit(t,e,i,s,o,r,a,c,h,l=9){this.c.set(o);for(let u=0;u<t;u++){const f=this.next;this.next=(this.next+1)%zn,this.pos[f*3]=e,this.pos[f*3+1]=i,this.pos[f*3+2]=s,this.vel[f*3]=(Math.random()*2-1)*r,this.vel[f*3+1]=Math.random()*a,this.vel[f*3+2]=(Math.random()*2-1)*r;const d=.75+Math.random()*.25;this.col[f*3]=this.c.r*d,this.col[f*3+1]=this.c.g*d,this.col[f*3+2]=this.c.b*d,this.life[f]=this.maxLife[f]=c*(.6+Math.random()*.4),this.gravity[f]=l,this.scroll[f]=h?1:0}}update(t,e){for(let i=0;i<zn;i++)if(!(this.life[i]<=0)){if(this.life[i]-=t,this.life[i]<=0){this.pos[i*3+1]=-100;continue}this.vel[i*3+1]-=this.gravity[i]*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]=Math.max(.05,this.pos[i*3+1]+this.vel[i*3+1]*t),this.pos[i*3+2]+=(this.vel[i*3+2]+(this.scroll[i]?e:0))*t}this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0}clear(){this.life.fill(0);for(let t=0;t<zn;t++)this.pos[t*3+1]=-100}}const Hn=90,Pi=new Ee;class pM{constructor(){this.pos=new Float32Array(Hn*3),this.vel=new Float32Array(Hn*3),this.life=new Float32Array(Hn),this.maxLife=new Float32Array(Hn),this.size=new Float32Array(Hn),this.rot=new Float32Array(Hn),this.next=0,this.c=new ht;const t=new Yn({flatShading:!0,emissive:new ht("#ffffff"),emissiveIntensity:.18});this.mesh=new Fh(new dr(1,1),t,Hn),this.mesh.frustumCulled=!1;for(let e=0;e<Hn;e++)this.mesh.setColorAt(e,this.c.set("#ffffff")),this.mesh.setMatrixAt(e,new ae().makeScale(0,0,0))}emit(t,e,i,s,o,r,a=1.4){const c=this.next;this.next=(this.next+1)%Hn,this.pos.set([t,e,i],c*3),this.vel.set([(Math.random()-.5)*.9,a*(.7+Math.random()*.6),(Math.random()-.5)*.6],c*3),this.life[c]=this.maxLife[c]=r*(.75+Math.random()*.5),this.size[c]=o*(.8+Math.random()*.4),this.rot[c]=Math.random()*Math.PI,this.mesh.setColorAt(c,this.c.set(s).multiplyScalar(.9+Math.random()*.2)),this.mesh.instanceColor.needsUpdate=!0}update(t,e){for(let i=0;i<Hn;i++){if(this.life[i]<=0)continue;this.life[i]-=t;const s=1-Math.max(0,this.life[i])/this.maxLife[i];this.vel[i*3+1]*=1-t*.8,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=(this.vel[i*3+2]+e)*t;const o=this.life[i]<=0?0:this.size[i]*(s<.2?s/.2:1-((s-.2)/.8)**1.5)*(1+s*.5);Pi.position.set(this.pos[i*3],this.pos[i*3+1],this.pos[i*3+2]),Pi.rotation.set(this.rot[i],this.rot[i]*.7+s,0),Pi.scale.setScalar(Math.max(0,o)),Pi.updateMatrix(),this.mesh.setMatrixAt(i,Pi.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.life.fill(0),Pi.scale.setScalar(0),Pi.updateMatrix();for(let t=0;t<Hn;t++)this.mesh.setMatrixAt(t,Pi.matrix);this.mesh.instanceMatrix.needsUpdate=!0}}function mM(n,t){const e=document.createElement("canvas");e.width=e.height=64;const i=e.getContext("2d"),s=i.createRadialGradient(32,32,4,32,32,32);s.addColorStop(0,"rgba(0,0,0,0.45)"),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,64,64);const o=xs(new vs(e)),r=new Xt(new Un(n,t),new mn({map:o,transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.02,r.renderOrder=1,r}function gM(){const n=document.createElement("canvas");n.width=128,n.height=16;const t=n.getContext("2d");for(let c=0;c<16;c++)for(let h=0;h<2;h++)t.fillStyle=(c+h)%2?"#111":"#fff",t.fillRect(c*8,h*8,8,8);const e=xs(new vs(n));e.colorSpace=Ve,e.magFilter=an;const i=O.laneWidth*O.laneCount+3,s=new Xt(new Un(i,1.2),new mn({map:e}));s.rotation.x=-Math.PI/2,s.position.y=.03;const o=new Ke;o.add(s);const r=new Yn({color:"#ffffff"}),a=new mn({map:e,side:jn});for(const c of[-1,1]){const h=new Xt(new Vi(.08,.08,4,6),r);h.position.set(c*(i/2+.3),2,0),o.add(h);const l=new Xt(new Un(1.6,.6),a);l.position.set(c*(i/2+.3)-c*.8,3.6,0),o.add(l)}return o.visible=!1,o}class vM{constructor(t){this.canvas=t,this.lines=[],this.flash=0,this.active=!1,this.ctx=t.getContext("2d")}burst(){this.flash=.35}update(t,e,i){const{canvas:s,ctx:o}=this,r=s.clientWidth,a=s.clientHeight,c=Math.min(window.devicePixelRatio||1,2);(s.width!==Math.round(r*c)||s.height!==Math.round(a*c))&&(s.width=Math.round(r*c),s.height=Math.round(a*c)),this.flash=Math.max(0,this.flash-t);const h=i?Math.min(1,e+this.flash*2):0;if(h<=0&&this.lines.length===0){this.active&&(o.clearRect(0,0,s.width,s.height),this.active=!1);return}this.active=!0,o.setTransform(c,0,0,c,0,0),o.clearRect(0,0,r,a);const l=h*40*t*6;for(let _=0;_<l&&!(this.lines.length>60);_++)this.lines.push({a:Math.random()*Math.PI*2,r:.55+Math.random()*.2,len:.08+Math.random()*.12,life:.25});const u=r/2,f=a*.42,d=Math.hypot(r,a)/2;o.strokeStyle="rgba(255,255,255,0.55)",o.lineWidth=2,o.beginPath();for(const _ of this.lines){_.life-=t,_.r+=t*1.6;const p=_.r*d,m=(_.r+_.len)*d;o.moveTo(u+Math.cos(_.a)*p,f+Math.sin(_.a)*p),o.lineTo(u+Math.cos(_.a)*m,f+Math.sin(_.a)*m)}o.stroke();let g=0;for(const _ of this.lines)_.life>0&&(this.lines[g++]=_);this.lines.length=g}}const An=[{id:"suburb",main:"outskirts",name:"biomeSuburb",road:"#3A3D45",arrival:"creekBridge",palette:{skyTop:"#9ED8F5",skyBottom:"#FCEFD4",fog:"#F4ECD9",ground:"#7BC67E",hemi:"#fff8e8",sun:"#fff2d6",light:1,cloud:"#ffffff"},night:{skyTop:"#0D1A3A",skyBottom:"#2A3D6E",fog:"#24355E",ground:"#5A8F72",hemi:"#8FA6E0",sun:"#B8C8FF",light:.5,cloud:"#3B4A70"}},{id:"forest",main:"outskirts",name:"biomeForest",road:"#5E4E3D",arrival:"riverBridge",palette:{skyTop:"#A8D8E8",skyBottom:"#E8F1E0",fog:"#DCE8D6",ground:"#4F7A45",hemi:"#f2fbef",sun:"#fff4dc",light:1,cloud:"#ffffff"},night:{skyTop:"#0A1730",skyBottom:"#22395A",fog:"#1F3350",ground:"#3E6150",hemi:"#86A2D6",sun:"#A9C0F0",light:.46,cloud:"#34445F"}},{id:"fields",main:"outskirts",name:"biomeFields",road:"#A39E93",arrival:"cattleGrid",palette:{skyTop:"#8FD0F2",skyBottom:"#FFF1C9",fog:"#F6EDCF",ground:"#97BF55",hemi:"#fffaea",sun:"#fff0cc",light:1,cloud:"#ffffff"},night:{skyTop:"#0E1C40",skyBottom:"#33467A",fog:"#2B3C66",ground:"#6F8A5C",hemi:"#94A8E0",sun:"#C0CCFF",light:.52,cloud:"#424F78"}},{id:"industrial",main:"city",name:"biomeIndustrial",road:"#9A9A94",arrival:"cityBridge",palette:{skyTop:"#B7C9CF",skyBottom:"#EADFC8",fog:"#D9D5C8",ground:"#6F6F6A",hemi:"#f3f1ea",sun:"#fbeedb",light:.93,cloud:"#ecebe6"},night:{skyTop:"#1A1A2E",skyBottom:"#4A3A40",fog:"#3D3236",ground:"#6A5F55",hemi:"#C9A27A",sun:"#FFB36B",light:.5,cloud:"#4A4048"}},{id:"center",main:"city",name:"biomeCenter",road:"#2F3138",arrival:"gantry",palette:{skyTop:"#8CC8EE",skyBottom:"#F7E6D0",fog:"#E6E2DA",ground:"#C9C4BA",hemi:"#fbf8f2",sun:"#fff2dc",light:1,cloud:"#ffffff"},night:{skyTop:"#0B1636",skyBottom:"#3A3F74",fog:"#2E3366",ground:"#8A8AA6",hemi:"#9FA8E8",sun:"#C4CCFF",light:.55,cloud:"#4A4F7E"}},{id:"oldtown",main:"city",name:"biomeOldTown",road:"#5A4D41",arrival:"townGate",palette:{skyTop:"#9FC9E8",skyBottom:"#FBDDB8",fog:"#EFD9BE",ground:"#D6CBB8",hemi:"#fff3e2",sun:"#ffe0b0",light:1,cloud:"#fff6ea"},night:{skyTop:"#121A3A",skyBottom:"#45406A",fog:"#3A3658",ground:"#9A8C86",hemi:"#B0A6D6",sun:"#C6C8F0",light:.52,cloud:"#4F4A70"}},{id:"desert",main:"drylands",name:"biomeDesert",road:"#C9A877",arrival:"ranchGate",palette:{skyTop:"#6FB9E8",skyBottom:"#FCE3B0",fog:"#F2DDB5",ground:"#E3C896",hemi:"#fff6e4",sun:"#fff0d0",light:1,cloud:"#ffffff"},night:{skyTop:"#120E30",skyBottom:"#4A3566",fog:"#3E2F58",ground:"#7A6C88",hemi:"#A89AD8",sun:"#D0C8FF",light:.55,cloud:"#4C3F6A"}},{id:"canyon",main:"drylands",name:"biomeCanyon",road:"#724630",arrival:"gorgeBridge",palette:{skyTop:"#5DA9E0",skyBottom:"#F6D3A1",fog:"#E8B98E",ground:"#B5704A",hemi:"#fff1e2",sun:"#ffe6c4",light:1,cloud:"#fff8f0"},night:{skyTop:"#0C1430",skyBottom:"#34406E",fog:"#2C3560",ground:"#7A5A5E",hemi:"#98A4DC",sun:"#D6E0FF",light:.55,cloud:"#3E4870"}},{id:"route66",main:"drylands",name:"biomeRoute66",road:"#4A4644",arrival:"gantry",palette:{skyTop:"#7EC3EC",skyBottom:"#FFE2B8",fog:"#F1D7B0",ground:"#C8B184",hemi:"#fff6e6",sun:"#ffefd2",light:1,cloud:"#ffffff"},night:{skyTop:"#140F34",skyBottom:"#5A3A6E",fog:"#4A3360",ground:"#8A7690",hemi:"#B29AD8",sun:"#CFC6FF",light:.52,cloud:"#523F70"}}],ls=An.length,Af=O.chunkLength,ba=O.biomeLeg;function ih(n){return An.find(t=>t.id===n)}function Rf(n){return An.findIndex(t=>t.id===n)}function on(n){return An[(n%ls+ls)%ls]}function Jn(n,t=0){return Math.floor((n*ba-t)/Af)*Af}function Pn(n,t=0){n=Math.max(0,n);let e=Math.max(0,Math.floor((n+t)/ba));for(;Jn(e+1,t)<=n;)e++;for(;e>0&&Jn(e,t)>n;)e--;return e}function Cf(n,t=0){return on(Pn(n,t))}function sh(n){return n>0&&n%3===0}function _M(n,t=0){const e=Jn(n,t);return{leg:n,seam:e,start:e-O.gateBefore,end:e+O.gateAfter}}function Pf(n,t=0){for(let e=Pn(n,t);;e++){if(!sh(e))continue;const i=_M(e,t);if(i.end>n)return i}}function xM(n,t=0,e=0){const i=ls*ba;return((n*ba+O.biomeDevStart-t)%i+i)%i+e*i}const MM=n=>{const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)};function yM(n,t=0,e={from:An[0],to:An[0],t:1,seam:0}){const i=O.biomeBlend/2,s=Pn(n+i,t);return e.to=on(s),s<=Pn(0,t)?(e.from=e.to,e.t=1,e.seam=-1/0,e):(e.from=on(s-1),e.seam=Jn(s,t),e.t=MM((n-e.seam+i)/(2*i)),e)}const Sa=[{id:1,name:{en:"Racing Red",pl:"Wyścigowa czerwień"},hex:"#E63946"},{id:2,name:{en:"Sunburst Orange",pl:"Słoneczny pomarańcz"},hex:"#F4A261"},{id:3,name:{en:"Taxi Yellow",pl:"Żółć taksówki"},hex:"#FFD23F"},{id:4,name:{en:"Lime",pl:"Limonka"},hex:"#8AC926"},{id:5,name:{en:"Teal",pl:"Morski"},hex:"#2A9D8F"},{id:6,name:{en:"Electric Blue",pl:"Elektryczny błękit"},hex:"#1982C4"},{id:7,name:{en:"Grape",pl:"Winogrono"},hex:"#6A4C93"},{id:8,name:{en:"Midnight",pl:"Północ"},hex:"#2B2D42"}],Lf=["#ffc93c","#3ddc84","#5aa9ff","#b388ff","#ffc93c"],or=[{id:101,finish:"silver",name:{en:"Silver",pl:"Srebro"},price:600},{id:102,finish:"copper",name:{en:"Copper",pl:"Miedź"},price:600},{id:103,finish:"gold",name:{en:"Gold",pl:"Złoto"},price:1e3},{id:104,finish:"ruby",name:{en:"Ruby",pl:"Rubin"},price:1500},{id:105,finish:"emerald",name:{en:"Emerald",pl:"Szmaragd"},price:1500},{id:108,finish:"amethyst",name:{en:"Amethyst",pl:"Ametyst"},price:1500},{id:106,finish:"opal",name:{en:"Dark opal",pl:"Czarny opal"},price:2e3},{id:107,finish:"diamond",name:{en:"Diamond",pl:"Diament"},price:2500}];function za(n){return or.find(t=>t.id===n)}function z0(n){var t;return((t=za(n))==null?void 0:t.finish)??null}function Qn(n){return za(n)?"#c0c0c0":(Sa.find(t=>t.id===n)??Sa[0]).hex}const ti=[{id:"zippy",cls:"bike",name:"Zippy",look:{en:"Retro scooter",pl:"Retro skuter"},laneChangeTime:.18,hangTime:.7,magnetBonus:1,smashNoSlow:!1,price:0,defaultColor:3,defaultSecond:8,engine:{base:120,rev:1.2,cutoff:900,cutoffRise:1400,whine:0}},{id:"viper",cls:"bike",name:"Viper",look:{en:"Street bike",pl:"Motocykl miejski"},laneChangeTime:.16,hangTime:.65,magnetBonus:.5,smashNoSlow:!1,price:500,defaultColor:1,defaultSecond:8,engine:{base:95,rev:1.3,cutoff:700,cutoffRise:1400,whine:0}},{id:"bolt",cls:"bike",name:"Bolt",look:{en:"Sport bike",pl:"Motocykl sportowy"},laneChangeTime:.14,hangTime:.6,magnetBonus:0,smashNoSlow:!1,price:1500,defaultColor:6,defaultSecond:8,engine:{base:170,rev:1.6,cutoff:1300,cutoffRise:2600,whine:.35}},{id:"pebble",cls:"car",name:"Pebble",look:{en:"Tiny hatchback",pl:"Mały hatchback"},laneChangeTime:.2,hangTime:.7,magnetBonus:1,smashNoSlow:!1,price:0,defaultColor:4,defaultSecond:8,engine:{base:66,rev:1.3,cutoff:750,cutoffRise:1300,whine:0}},{id:"arrow",cls:"car",name:"Arrow",look:{en:"Sports coupe",pl:"Sportowe coupé"},laneChangeTime:.21,hangTime:.65,magnetBonus:.5,smashNoSlow:!1,price:500,defaultColor:8,defaultSecond:3,engine:{base:120,rev:1.6,cutoff:1200,cutoffRise:2400,whine:.3}},{id:"brute",cls:"car",name:"Brute",look:{en:"Muscle car",pl:"Muscle car"},laneChangeTime:.24,hangTime:.6,magnetBonus:0,smashNoSlow:!0,price:1500,defaultColor:1,defaultSecond:8,engine:{base:50,rev:1.2,cutoff:600,cutoffRise:1200,whine:0}}],oh=ti.filter(n=>n.price===0).map(n=>n.id);function vo(n){return ti.find(t=>t.id===n)??ti[0]}function If(n){return ti.filter(t=>t.cls===n)}function bM(n){return{handling:1-(n.laneChangeTime-.12)/.14,toughness:n.cls==="car"?n.smashNoSlow?1:.85:.3,reach:.35+n.magnetBonus*.65}}const Df=Math.PI/180;function Ic(n,t,e,i){return Math.sin(n*t+i)*.6+Math.sin(n*e+i*1.7)*.4}class SM{constructor(){this.x=0,this.y=0,this.hFov=O.fovMin,this.trauma=0,this.shakeTime=0,this.shakePhase=0,this.wobbleT=0,this.slow=0,this.reducedMotion=!1,this.camera=new rn(60,9/16,.5,O.drawDistance+75)}resize(t){this.camera.aspect=t,this.applyFov()}applyFov(){const t=this.hFov-this.slow*O.hitFovDrop,e=2*Math.atan(Math.tan(t*Df/2)/this.camera.aspect)/Df;this.camera.fov=Math.min(O.vFovClampMax,Math.max(O.vFovClampMin,e)),this.camera.updateProjectionMatrix()}addTrauma(t){this.reducedMotion||(this.trauma<=0&&(this.shakePhase=Math.random()*100),this.trauma=Math.min(1,this.trauma+t))}wobble(t=.8){this.reducedMotion||(this.wobbleT=t)}snap(t){this.x=t*O.camLaneFollow,this.y=0,this.trauma=0,this.slow=0}update(t,e,i,s,o=0){const r=1-Math.exp(-10*t);this.x+=(e*O.camLaneFollow-this.x)*r,this.y+=(i*O.camJumpFollow-this.y)*r,this.slow+=((this.reducedMotion?0:o)-this.slow)*(1-Math.exp(-12*t));const a=this.reducedMotion?O.fovMin:O.fovMin+(O.fovMax-O.fovMin)*s;(Math.abs(a-this.hFov)>.01||this.slow>.001)&&(this.hFov+=(a-this.hFov)*Math.min(1,t*2),this.applyFov());let c=0,h=0,l=0;if(this.trauma>0){this.shakeTime+=t;const f=this.trauma*this.trauma,d=this.shakeTime,g=this.shakePhase;c=Ic(d,47,79,g)*f*O.shakeMaxOffset,h=Ic(d,53,89,g+3)*f*O.shakeMaxOffset,l=Ic(d,41,67,g+7)*f*O.shakeMaxRoll,this.trauma=Math.max(0,this.trauma-O.shakeDecay*t)}this.wobbleT>0&&(this.wobbleT-=t,l+=Math.sin(this.wobbleT*18)*.04*Math.min(1,this.wobbleT*2),c+=Math.sin(this.wobbleT*11)*.25*Math.min(1,this.wobbleT*2));const u=this.camera;u.position.set(this.x+c,O.camHeight+this.y+h,O.camBack-this.slow*O.hitCamPull),u.lookAt(this.x+c*.5,this.y*.5,-10),l&&u.rotateZ(l)}}const Uf=(n,t,e)=>{const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)};function rh(n,t=0){const e=Pn(n,t),i=Jn(e,t),s=Jn(e+1,t),o=Math.min(1,Math.max(0,(n-i)/(s-i))),r=e%ls,a=Math.floor(e/ls)%2===1,c=ls-1;let h;return r<c?h=(a?20:8)+(a?8:9)*(r+o)/c:h=a?28+4*o:17+3*o,h%24}function wM(n){return Math.sin(2*Math.PI*(n-6)/24)}function wa(n,t={hour:0,sun:0,night:0,twilight:0,dawn:!1}){const e=wM(n);return t.hour=n,t.sun=e,t.night=Uf(.02,-.4,e),t.twilight=1-Uf(0,.45,Math.abs(e+.08)),t.dawn=n<12,t}const EM=19.6,TM=6;class Dn{constructor(t){this.state=t>>>0}next(){let t=this.state=this.state+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t,e){let i=0;for(const o of t)i+=Math.max(0,e(o));let s=this.next()*i;for(const o of t)if(s-=Math.max(0,e(o)),s<0)return o;return t[t.length-1]}}function Nf(){return Math.random()*4294967295>>>0}function AM(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),o={},r={},a=n[0].morphTargetsRelative,c=new Ue;let h=0;for(let l=0;l<n.length;++l){const u=n[l];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,l),h+=d}}if(e){let l=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+l);l+=n[f].attributes.position.count}c.setIndex(u)}for(const l in o){const u=kf(o[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(const l in r){const u=r[l][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<r[l].length;++_)d.push(r[l][_][f]);const g=kf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function kf(n){let t,e,i,s=-1,o=0;for(let h=0;h<n.length;++h){const l=n[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=l.count*e}const r=new t(o),a=new Ce(r,e,i);let c=0;for(let h=0;h<n.length;++h){const l=n[h];if(l.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=l.count;f<d;f++)for(let g=0;g<e;g++){const _=l.getComponent(f,g);a.setComponent(f+u,g,_)}}else r.set(l.array,c);c+=l.count*e}return s!==void 0&&(a.gpuType=s),a}const Li=new ht,Ff=new ae,Ea=new ii,to=new Tn;function De(n){const t=n.map(i=>{let s=i.geo.index?i.geo.toNonIndexed():i.geo.clone();s.deleteAttribute("uv"),to.set(...i.rot??[0,0,0]),Ea.setFromEuler(to),Ff.compose(new P(...i.pos??[0,0,0]),Ea,new P(...i.scale??[1,1,1])),s.applyMatrix4(Ff),Li.set(i.color);const o=s.getAttribute("position").count,r=new Float32Array(o*3);for(let c=0;c<o;c++)r[c*3]=Li.r,r[c*3+1]=Li.g,r[c*3+2]=Li.b;s.setAttribute("color",new Ce(r,3));const a=new Uint8Array(o*4);if(i.glow!==void 0){Li.set(i.glow);const c=Math.round(Li.r*255),h=Math.round(Li.g*255),l=Math.round(Li.b*255),u=i.blink?255:0;for(let f=0;f<o;f++)a.set([c,h,l,u],f*4)}return s.setAttribute("glow",new Ce(a,4,!0)),s.getAttribute("normal")===void 0&&s.computeVertexNormals(),s}),e=AM(t,!1);if(!e)throw new Error("merge failed");return e.computeVertexNormals(),e.computeBoundingSphere(),e}const y=(n,t,e)=>new Cs(n,t,e),K=(n,t,e,i=8)=>new Vi(n,t,e,i),ye=(n,t,e=8)=>new Vh(n,t,e),RM=(n,t=8,e=6)=>new qn(n,t,e),qe=(n,t=0)=>new dr(n,t);function Te(n,t,e=0,i=[]){const s=new Xh(n.map(([a,c])=>new it(a,c)));for(const a of i)s.holes.push(new Ql(a.map(([c,h])=>new it(c,h))));const o=Math.max(.001,t-2*e),r=new Oa(s,e>0?{depth:o,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:1}:{depth:o,bevelEnabled:!1});return r.translate(0,0,-o/2),r.rotateY(-Math.PI/2),r}function Nt(n,t,e,i=Math.min(n,t,e)*.18){const s=n/2-i,o=t/2-i,r=Math.min(s,o)*.5,a=new Xh([new it(-s+r,-o),new it(s-r,-o),new it(s,-o+r),new it(s,o-r),new it(s-r,o),new it(-s+r,o),new it(-s,o-r),new it(-s,-o+r)]),c=Math.max(.001,e-2*i),h=new Oa(a,{depth:c,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:1});return h.translate(0,0,-c/2),h}const Dc=(n,t=12)=>new Gh(n.map(([e,i])=>new it(e,i)),t);function Ms(n,t,e,i,s,o,r,a=0,c=10){const h=[],l=(u,f)=>[n-u*Math.cos(f),t+u*Math.sin(f)];for(let u=0;u<=c;u++)h.push(l(i,s+(o-s)*u/c));if(e<=0)h.push([n,t]);else for(let u=c;u>=0;u--)h.push(l(e,s+(o-s)*u/c));return Te(h,r,a)}function rr(n,t,e,i){const s=n.getAttribute("position");for(let o=0;o<s.count;o++){const r=Math.min(1,Math.max(0,(s.getY(o)-t)/(e-t)));s.setX(o,s.getX(o)*(1+(i-1)*r))}return s.needsUpdate=!0,n}const CM=new P(0,1,0),Of=new P,Uc=new P;function Vt(n,t,e,i,s=6,o=e){Of.set(...n),Uc.set(...t).sub(Of);const r=Uc.length();return Ea.setFromUnitVectors(CM,Uc.normalize()),to.setFromQuaternion(Ea),{geo:new Vi(o,e,r,s),color:i,pos:[(n[0]+t[0])/2,(n[1]+t[1])/2,(n[2]+t[2])/2],rot:[to.x,to.y,to.z]}}function pr(n,t,e=10){const i=[],s=[],o=n.length,r=n.map(u=>new P(...u)),a=new P,c=new P,h=new P;for(let u=0;u<o;u++){a.subVectors(r[Math.min(u+1,o-1)],r[Math.max(u-1,0)]).normalize(),c.set(1,0,0),Math.abs(a.x)>.9&&c.set(0,0,1),c.addScaledVector(a,-c.dot(a)).normalize(),h.crossVectors(a,c);const f=t[u],[d,g]=typeof f=="number"?[f,f]:f;for(let _=0;_<e;_++){const p=_/e*Math.PI*2,m=Math.cos(p)*d,w=Math.sin(p)*g;i.push(r[u].x+c.x*m+h.x*w,r[u].y+c.y*m+h.y*w,r[u].z+c.z*m+h.z*w)}}for(let u=0;u<o-1;u++)for(let f=0;f<e;f++){const d=(f+1)%e,g=u*e+f,_=u*e+d;s.push(g,_,_+e,g,_+e,g+e)}for(const[u,f]of[[0,!0],[o-1,!1]]){const d=i.length/3;i.push(r[u].x,r[u].y,r[u].z);for(let g=0;g<e;g++){const _=u*e+g,p=u*e+(g+1)%e;f?s.push(d,p,_):s.push(d,_,p)}}const l=new Ue;return l.setAttribute("position",new ge(i,3)),l.setIndex(s),l.computeVertexNormals(),l}function kt(n){return[n(-1),n(1)]}const hs={uNight:{value:0},uBlink:{value:1}};function H0(n,t={value:0}){n.uniforms.uNight=hs.uNight,n.uniforms.uBlink=hs.uBlink,n.uniforms.uSelfGlow=t,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 glow;
varying vec4 vGlow;`).replace("#include <color_vertex>",`#include <color_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform float uBlink;
uniform float uSelfGlow;
varying vec4 vGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance += vGlow.rgb * uNight * mix(1.0, uBlink, step(0.5, vGlow.a)) + diffuseColor.rgb * uSelfGlow;`)}function G0(n){const t=n.onBeforeCompile;n.onBeforeCompile=(i,s)=>{t.call(n,i,s),H0(i)};const e=n.customProgramCacheKey.bind(n);return n.customProgramCacheKey=()=>`${e()}|glow`,n.needsUpdate=!0,n}function V0(n={value:0}){const t=new Yn({vertexColors:!0,flatShading:!0});return t.onBeforeCompile=e=>{H0(e,n),e.fragmentShader=e.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
#ifdef USE_FOG
#ifndef FOG_EXP2
      {
        const float BAYER[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
        ivec2 fp = ivec2(mod(gl_FragCoord.xy, 4.0));
        float threshold = (BAYER[fp.y * 4 + fp.x] + 0.5) / 16.0;
        if (smoothstep(fogFar - (fogFar - fogNear) * 0.15, fogFar, vFogDepth) > threshold) discard;
      }
#endif
#endif`)},t.customProgramCacheKey=()=>"scenery",t}const as=V0(),Bf=G0(new D0({vertexColors:!0,flatShading:!0,shininess:80,specular:new ht("#5c6069")}));function zf(n){return new D0({vertexColors:!0,flatShading:!0,color:new ht(n),shininess:60,specular:new ht("#4a4a4a")})}function PM(n){return new Yn({vertexColors:!0,flatShading:!0,color:new ht(n)})}function fn(n,t,e,i,s,o,r=0,a=0){const c=[],h=n/i;for(let l=0;l<i;l++)c.push({geo:y(h,t,e),color:l%2?s:o,pos:[-n/2+h*(l+.5),r,a]});return c}const W0=266;function Nc(n,t,e=W0){const i=Math.cos(t);return new P(Math.sin(n)*e*i,Math.sin(t)*e,Math.cos(n)*e*i)}function X0(n=64,t=.15){const e=document.createElement("canvas");e.width=e.height=n;const i=e.getContext("2d"),s=i.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(t,"rgba(255,255,255,0.85)"),s.addColorStop(.5,"rgba(255,255,255,0.25)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,n,n);const o=xs(new vs(e));return o.colorSpace=Ve,o}const LM=X0();class Hf{constructor(t,e,i,s,o=[]){this.object=new Ke,this.disc=new mn({vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1}),this.halo=new mn({color:i,map:LM,transparent:!0,depthWrite:!1,fog:!1,blending:Qo});const r=new Xt(new Un(t*2*s,t*2*s),this.halo),a=new Xt(De([{geo:new cs(t,24),color:e},...o]),this.disc);r.renderOrder=-199,a.renderOrder=-198,this.object.add(r,a)}place(t){this.object.position.copy(t),this.object.rotation.set(0,Math.atan2(-t.x,-t.z),0)}set opacity(t){this.object.visible=t>.001,this.disc.opacity=t,this.halo.opacity=t*.8}}class IM{constructor(){this.root=new Ke,this.moon=new Hf(7,"#f3f0e2","#9fb4ff",4.5,[{geo:new cs(1.8,12),color:"#d5d2c6",pos:[-2,1.5,.05]},{geo:new cs(2.2,12),color:"#d5d2c6",pos:[2.2,-1,.05]},{geo:new cs(1.1,12),color:"#d5d2c6",pos:[.5,3,.05]}]),this.sun=new Hf(11,"#ffd38a","#ff9a4a",5);const t=new Dn(4242),e=420,i=new Float32Array(e*3),s=new Float32Array(e*3),o=new ht;for(let a=0;a<e;a++){const c=Nc(t.range(0,Math.PI*2),Math.asin(t.range(.04,.85)**1.4),W0+4);i.set([c.x,c.y,c.z],a*3),o.set(t.pick(["#ffffff","#fff4dc","#dfe8ff","#cfdcff"])).multiplyScalar(t.range(.55,1)),s.set([o.r,o.g,o.b],a*3)}const r=new Ue;r.setAttribute("position",new Ce(i,3)),r.setAttribute("color",new Ce(s,3)),this.starMat=new Oh({size:2.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1}),this.stars=new Bh(r,this.starMat),this.stars.renderOrder=-200,this.stars.frustumCulled=!1,this.moon.place(Nc(Math.PI+.2,.26)),this.root.add(this.stars,this.moon.object,this.sun.object)}update(t,e,i,s,o){this.stars.visible=e>.01,this.starMat.opacity=e*(.85+.15*Math.sin(t*1.7)),this.moon.opacity=e;const r=Math.max(-.05,Math.min(.35,s*.7+.03));this.sun.place(Nc(Math.PI+(o?.26:-.26),r)),this.sun.opacity=Math.min(1,i*1.3)*(1-e)}}const Yr=150,kc=120;class DM{constructor(){const t=new Dn(77);this.base=new Float32Array(Yr*3);const e=new Float32Array(Yr);for(let s=0;s<Yr;s++){const o=t.chance(.5)?-1:1;this.base.set([o*t.range(7.5,20),t.range(.5,3),-t.range(0,kc)],s*3),e[s]=t.range(0,100)}const i=new Ue;i.setAttribute("position",new Ce(new Float32Array(this.base),3)),i.setAttribute("phase",new Ce(e,1)),this.mat=new yi({uniforms:{uTime:{value:0},uAmount:{value:0}},vertexShader:`attribute float phase;
        uniform float uTime;
        varying float vA;
        void main() {
          vec3 p = position + vec3(sin(uTime * 0.7 + phase) * 0.4, sin(uTime * 1.1 + phase * 1.3) * 0.25, 0.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          vA = pow(max(0.0, sin(uTime * 1.6 + phase * 2.0)), 1.5);
          gl_PointSize = 320.0 / -mv.z;
        }`,fragmentShader:`uniform float uAmount;
        varying float vA;
        void main() {
          float r = length(gl_PointCoord - 0.5) * 2.0;
          float a = min(1.0, (1.0 - smoothstep(0.05, 1.0, r)) * 1.8) * vA * uAmount;
          gl_FragColor = vec4(0.85, 1.0, 0.45, a);
        }`,transparent:!0,depthWrite:!1,blending:Qo}),this.points=new Bh(i,this.mat),this.points.frustumCulled=!1}update(t,e,i){if(this.points.visible=i>.01,!this.points.visible)return;this.mat.uniforms.uTime.value=e,this.mat.uniforms.uAmount.value=i;const s=this.points.geometry.getAttribute("position"),o=t%kc;for(let r=0;r<Yr;r++){let a=this.base[r*3+2]+o;a>20&&(a-=kc),s.setZ(r,a)}s.needsUpdate=!0}}function UM(){const n=new mn({color:"#fff1c8",map:X0(128,.3),transparent:!0,depthWrite:!1,blending:Qo,fog:!1}),t=new Xt(new Un(10,28),n);return t.rotation.x=-Math.PI/2,t.renderOrder=1,t}const Ha=[{radius:252,height:64,bottom:-12,repeat:3,fog:.5},{radius:238,height:44,bottom:-9,repeat:4,fog:.3},{radius:224,height:28,bottom:-7,repeat:6,fog:.12}],Zi=1024,Ji=128,zo=Math.PI*2,NM=1.3,Gf=new ht,ah="#ffd27a",ch="#ffad55",$o="#ff4436",kM=new ht;class FM{constructor(t,e,i){this.spec=t,this.rng=e,this.fog=i,this.c=document.createElement("canvas"),this.emitters=[],this.lights=null,this.lg=null,this.lrng=new Dn(t.radius*7919+i.getHex()),this.c.width=Zi,this.c.height=Ji,this.g=this.c.getContext("2d"),this.tw=zo*t.radius/t.repeat}X(t){return t/this.tw*Zi}Y(t){return Ji*(1-(t-this.spec.bottom)/this.spec.height)}tone(t,e=0){return Gf.set(t).lerp(this.fog,Math.min(1,this.spec.fog+e)),`#${Gf.getHexString()}`}wrap(t,e,i){i(t),t-e<0&&i(t+this.tw),t+e>this.tw&&i(t-this.tw)}profile(t,e,i,s=!1,o){const r=i.map(()=>this.rng.next()*zo),a=i.reduce((c,h,l)=>c+1/(l+1),0);return c=>{let h=0;i.forEach((u,f)=>{const d=Math.sin(zo*u*c/this.tw+r[f]);h+=(s?1-Math.abs(d)*1.6:d)/(f+1)});let l=t+e*h/a;if(o){let u=Math.abs(c-o.x);u=Math.min(u,this.tw-u),l+=o.h*Math.exp(-(u*u)/(o.w*o.w))}return l}}ridge(t,e,i=2){const s=this.g;s.fillStyle=t,s.beginPath(),s.moveTo(0,Ji);for(let o=0;o<=this.tw+i;o+=i)s.lineTo(this.X(o),this.Y(e(Math.min(o,this.tw))));s.lineTo(Zi,Ji),s.closePath(),s.fill()}above(t,e,i=1.5){const s=this.g;s.save(),s.globalCompositeOperation="source-atop",s.fillStyle=t,s.beginPath(),s.moveTo(0,0);for(let o=0;o<=this.tw+i;o+=i)s.lineTo(this.X(o),this.Y(e(Math.min(o,this.tw))));s.lineTo(Zi,0),s.closePath(),s.fill(),s.restore()}ground(t,e){this.g.fillStyle=t,this.g.fillRect(0,this.Y(e),Zi,Ji-this.Y(e))}rect(t,e,i,s,o){this.wrap(t,e/2,r=>{this.g.fillStyle=o,this.g.fillRect(this.X(r-e/2),this.Y(s),this.X(e),this.Y(i)-this.Y(s))})}poly(t,e,i,s){this.wrap(t,e,o=>{const r=this.g;r.fillStyle=s,r.beginPath(),i.forEach(([a,c],h)=>h?r.lineTo(this.X(o+a),this.Y(c)):r.moveTo(this.X(o+a),this.Y(c))),r.closePath(),r.fill()})}circle(t,e,i,s,o=1){this.wrap(t,i,r=>{const a=this.g;a.fillStyle=s,a.beginPath(),a.ellipse(this.X(r),this.Y(e),this.X(i),i/this.spec.height*Ji*o,0,0,zo),a.fill()})}strata(t,e,i,s,o){const r=this.g;r.save(),r.globalCompositeOperation="source-atop",r.fillStyle=t;for(let a=s;a<o;a+=e*(.7+this.rng.next()*.6))r.fillRect(0,this.Y(a+i),Zi,this.Y(a)-this.Y(a+i));r.restore()}lightCtx(){return this.lg||(this.lights=document.createElement("canvas"),this.lights.width=Zi,this.lights.height=Ji,this.lg=this.lights.getContext("2d")),this.lg}light(t,e,i,s,o=ah){const r=this.lightCtx();this.wrap(t,e/2,a=>{r.fillStyle=o,r.fillRect(this.X(a-e/2),this.Y(s),Math.max(1,this.X(e)),Math.max(1,this.Y(i)-this.Y(s)))})}windows(t,e,i,s,o,r=2.4,a=ah){for(let c=i+1;c<s-1;c+=r)for(let h=t-e/2+r*.6;h<t+e/2-r*.4;h+=r)this.lrng.chance(o)&&this.light(h,r*.45,c,c+r*.4,a)}emit(t,e){this.emitters.push([t/this.tw,e])}along(t,e,i=.5){for(let s=this.rng.next()*t;s<this.tw;s+=t*(1-i/2+this.rng.next()*i))e(s)}}function Fc(n,t,e,i,s,o){n.along(o,r=>{const a=n.rng.range(i,s),c=a*.32,h=t(r)-1;n.poly(r,c,[[-c,h],[0,h+a],[c,h]],e)})}function ui(n,t,e,i,s,o){n.along(o,r=>{const a=n.rng.range(i,s);n.circle(r,t+a*.6,a,e)})}function $r(n,t,e,i,s,o,r,a=.45,c=.45){n.rect(t,i,e,e+s,o),c>0&&n.windows(t,i,e,e+s,c,Math.min(2.4,s/2)),n.poly(t,i*.6,[[-i*.58,e+s],[0,e+s+i*a],[i*.58,e+s]],r)}function Oc(n,t,e,i,s){for(const o of[-1.6,1.6])n.rect(t+o,.6,e,e+i,s);n.rect(t,3.6,e+i*.45,e+i*.5,s),n.rect(t,6.5,e+i,e+i+4.5,s),n.poly(t,3.6,[[-3.6,e+i+4.5],[0,e+i+6.5],[3.6,e+i+4.5]],s),n.light(t,.6,e+i+6.5,e+i+7.3,$o)}function Bc(n,t,e,i,s,o){const r=i*n.rng.range(.28,.42);n.poly(t,i/2+2,[[-i/2,e],[-r-3,e+s*.75],[-r,e+s],[r,e+s],[r+2,e+s*.8],[i/2,e]],o)}function zc(n,t,e,i,s,o,r,a){let c=0;for(;c<n.tw;){const h=n.rng.range(i,s),l=n.rng.range(o,r)*(n.rng.chance(.15)?1.4:1);if(n.rect(c+h/2,h,t,t+l,e),n.rng.chance(.25)&&n.rect(c+h/2,.5,t+l,t+l+n.rng.range(3,7),e),a)for(let u=t+3;u<t+l-2;u+=3)n.rect(c+h/2,h*.8,u,u+1,a);n.windows(c+h/2,h,t,t+l,a?.4:.28,a?3:2.6),l>30&&n.lrng.chance(.5)&&n.light(c+h/2,.8,t+l,t+l+.8,$o),c+=h+n.rng.range(0,3)}}function Vf(n){for(let t=n.lrng.range(0,60);t<n.tw;t+=n.lrng.range(90,160)){const e=n.lrng.int(4,9);for(let i=0;i<e;i++)n.light(t+n.lrng.range(-10,10),.6,.2,.7,n.lrng.pick([ah,ch,"#fff4dc"]))}}const OM={suburb:[n=>{n.ridge(n.tone("#a8cbb8"),n.profile(12,9,[1,2,5])),n.ridge(n.tone("#88b39c"),n.profile(5,7,[2,3,7]))},n=>{n.ground(n.tone("#88b07a"),1.5),n.along(13,t=>$r(n,t,0,n.rng.range(5,9),n.rng.range(3.5,6),n.tone(n.rng.pick(["#e9dcc4","#dfe5e3","#eadbd2"])),n.tone(n.rng.pick(["#b0705e","#8c6a58","#6f7d96"])))),ui(n,0,n.tone("#6fa06a"),2.5,4.5,21),Oc(n,n.tw*.37,0,16,n.tone("#9fb2bd"))},n=>{n.ground(n.tone("#5f9a5a"),1),ui(n,0,n.tone("#5a9356"),2,4.2,4),ui(n,0,n.tone("#4d8a4e"),1.5,3,5)}],forest:[n=>{const t=n.profile(18,26,[2,3,7,11],!0);n.ridge(n.tone("#8c9db5"),t,1.5),n.above(n.tone("#eef3f8"),e=>Math.max(30,t(e)-4.5))},n=>{const t=n.profile(7,9,[1,3,6]);n.ridge(n.tone("#5f8a6a"),t),Fc(n,t,n.tone("#56806a"),6,11,3.2)},n=>{n.ground(n.tone("#2f5a3a"),2),Fc(n,()=>1.5,n.tone("#2f5a3a"),8,15,2.2),Fc(n,()=>1,n.tone("#264d31"),6,11,3)}],fields:[n=>{n.ground(n.tone("#a7bf86"),1.2),ui(n,.5,n.tone("#86a47e"),1.5,3,7)},n=>{n.ground(n.tone("#b2c579"),.8),n.along(55,t=>{$r(n,t,0,10,5,n.tone("#b4554a"),n.tone("#7d4a40"),.35,.3);for(const e of[8,12.5])n.rect(t+e,3.6,0,13,n.tone("#cfcfc8")),n.circle(t+e,13,1.8,n.tone("#b9bcbf"))}),ui(n,0,n.tone("#7fa760"),2,3.5,30)},n=>{let t=0;const e=["#d9c06a","#8fbf55","#93744f","#c9b55e"];for(;t<n.tw;){const i=n.rng.range(15,40);n.rect(t+i/2,i+.5,-7,.7,n.tone(n.rng.pick(e))),t+=i}ui(n,.5,n.tone("#5f8f45"),1,1.8,2.6),ui(n,.5,n.tone("#5a8a42"),2.5,4,40)}],industrial:[n=>n.ridge(n.tone("#a9b2ab",.15),n.profile(7,7,[1,2,4])),n=>{n.ground(n.tone("#8b8f8f"),1),n.along(30,t=>{const e=n.rng.range(18,34),i=n.rng.range(6,12);n.rect(t,e,0,i,n.tone("#8f9294")),n.windows(t,e,0,i,.35,3,ch)}),n.along(70,t=>{n.rect(t,17,0,13,n.tone("#8a9097")),n.poly(t,17/2,[[-17/2,13],[-17*.3,15],[17*.3,15],[17/2,13]],n.tone("#8a9097"));for(let i=3;i<13;i+=3.3)n.rect(t,17+.6,i,i+.5,n.tone("#737980"))}),n.along(45,t=>{const e=n.rng.range(30,44),i=n.rng.range(2.4,3.6);n.poly(t,i,[[-i*.65,0],[-i*.5,e],[i*.5,e],[i*.65,0]],n.tone("#9a9a98")),n.rect(t,i+.2,e-4,e-2.6,n.tone("#c4524a")),n.rect(t,i+.2,e-7,e-5.6,n.tone("#c4524a")),n.emit(t,e+.5),n.light(t,.9,e-.2,e+.7,$o)})},n=>{n.ground(n.tone("#7d8185"),1),n.along(36,t=>{const e=n.rng.range(20,34),i=n.rng.range(6,9);n.rect(t,e,0,i,n.tone("#7d8185")),n.light(t,e*.8,i*.45,i*.6,ch);for(let s=-e/2;s<e/2-3;s+=4)n.poly(t+s,3,[[0,i],[0,i+2.4],[4,i]],n.tone("#6f7377"))}),n.along(80,t=>{const e=n.rng.range(24,30),i=n.tone("#b08a3a",.2);n.rect(t,1.1,0,e,i),n.rect(t+8,28,e,e+1,i),n.rect(t-5,3,e-1.6,e+.2,i),n.poly(t,1,[[-.6,e+1],[0,e+4.5],[.6,e+1]],i),n.rect(t+16,.15,e-9,e,i),n.light(t,.8,e+4,e+4.8,$o),n.light(t+22,.7,e+.2,e+.9,$o)})}],center:[n=>zc(n,0,n.tone("#93a6ba"),7,18,14,50),n=>zc(n,0,n.tone("#7c8da0"),8,16,10,34,n.tone("#a4b5c6")),n=>{n.ground(n.tone("#77808a"),1),zc(n,0,n.tone("#737c87"),10,20,4,10),n.along(40,t=>Oc(n,t,8,3,n.tone("#6b5c50")))}],oldtown:[n=>{const t=n.tw*.32,e=n.profile(5,6,[1,2,4],!1,{x:t,w:45,h:14});n.ridge(n.tone("#8fae8e"),e);const i=e(t)-1,s=n.tone("#b9ad9d"),o=n.tone("#8a5a4e");n.rect(t,34,i,i+9,s);for(let r=-17;r<=17;r+=3.4)n.rect(t+r,1.6,i+9,i+10.4,s);for(const[r,a]of[[-17,16],[17,14],[-4,21]])n.rect(t+r,5,i,i+a,s),n.poly(t+r,3.5,[[-3.3,i+a],[0,i+a+7],[3.3,i+a]],o),n.light(t+r,5,i,i+a,"rgba(255, 196, 120, 0.4)");n.light(t,34,i,i+9,"rgba(255, 196, 120, 0.35)")},n=>{n.ground(n.tone("#b39f8c"),2),n.along(16,t=>$r(n,t,0,n.rng.range(6,10),n.rng.range(6,10),n.tone("#c8b29a"),n.tone("#9a6253"),.6)),n.along(70,t=>{n.rect(t,5,0,20,n.tone("#bfb6a8")),n.poly(t,3,[[-2.8,20],[0,38],[2.8,20]],n.tone("#6f7f7a")),n.rect(t+18,6,0,24,n.tone("#c4b8a6")),n.circle(t+18,20,1.6,n.tone("#f1ead8")),n.light(t+18,2.6,19,21,"#fff0c8"),n.windows(t,5,6,18,.3,3),n.poly(t+18,3.5,[[-3.4,24],[0,30],[3.4,24]],n.tone("#8a5a4e"))})},n=>{n.ground(n.tone("#a07b66"),1),n.along(7,t=>{const e=n.rng.range(5,8),i=n.rng.range(3,6);$r(n,t,0,e,i,n.tone("#a98a74"),n.tone(n.rng.pick(["#8f5546","#7d4f42","#6e4e44"])),.7,.55),n.rng.chance(.5)&&n.rect(t+e*.25,.9,i+1,i+e*.55,n.tone("#7a5a4a"))})}],desert:[n=>{n.ground(n.tone("#d9b88c"),0),n.along(70,t=>Bc(n,t,0,n.rng.range(30,80),n.rng.range(14,32),n.tone("#b97b74")),.8),n.strata(n.tone("#a86c6a"),6,1.2,3,40),Vf(n)},n=>{const t=n.profile(3,5,[2,3,5]);n.ridge(n.tone("#e4c48c"),t),n.ridge(n.tone("#d7b47c"),n.profile(1,3,[3,4,7]))},n=>{n.ground(n.tone("#c8ad7c"),.6),ui(n,.3,n.tone("#9e9b6c"),.6,1.4,3.5),n.along(30,t=>{const e=n.tone("#6e7a48");n.rect(t,.5,0,4,e),n.rect(t-1,1.6,3,3.4,e),n.rect(t-1.6,.4,3,5.4,e),n.circle(t-1.6,5.6,.9,e),n.circle(t,4.3,1,e)})}],canyon:[n=>{n.ridge(n.tone("#c9806a"),n.profile(30,16,[2,3,5,9],!0),1.5),n.strata(n.tone("#b56f5c"),5,1.6,-5,52)},n=>{n.ground(n.tone("#b8694a"),0),n.along(50,t=>Bc(n,t,0,n.rng.range(36,70),n.rng.range(18,30),n.tone("#b8694a")),.6),n.strata(n.tone("#9f5a40"),4.5,1.2,2,34)},n=>{n.ridge(n.tone("#94543a"),n.profile(4,7,[3,5,8,13],!0),1),n.strata(n.tone("#844a33"),3.5,.8,-6,14)}],route66:[n=>{n.ground(n.tone("#cdb48f"),0),n.along(55,t=>Bc(n,t,0,n.rng.range(40,110),n.rng.range(6,13),n.tone("#bd9c94")),.8),Vf(n)},n=>{n.ground(n.tone("#c4a97a"),.5);const t=n.tone("#5d4a3c"),e=[];n.along(24,s=>e.push(s),.15);for(const s of e)n.rect(s,.5,0,10,t),n.rect(s,3.4,9,9.4,t);const i=n.g;i.strokeStyle=t,i.lineWidth=1;for(let s=0;s<e.length;s++){const o=e[s],r=s+1<e.length?e[s+1]:e[0]+n.tw;for(const a of[9.2,8.6])i.beginPath(),i.moveTo(n.X(o),n.Y(a)),i.quadraticCurveTo(n.X((o+r)/2),n.Y(a-1.8),n.X(r),n.Y(a)),i.stroke(),r>n.tw&&(i.beginPath(),i.moveTo(n.X(o-n.tw),n.Y(a)),i.quadraticCurveTo(n.X((o+r)/2-n.tw),n.Y(a-1.8),n.X(r-n.tw),n.Y(a)),i.stroke())}},n=>{n.ground(n.tone("#b39d70"),.5),ui(n,.3,n.tone("#9a946a"),.5,1.2,6),Oc(n,n.tw*.6,0,9,n.tone("#8f8a80")),n.along(70,t=>{n.rect(t-2.5,.4,0,6,n.tone("#6b5a48")),n.rect(t+2.5,.4,0,6,n.tone("#6b5a48")),n.rect(t,8,5,9,n.tone(n.rng.pick(["#c95f4f","#4f8fa6","#d9a441"]))),n.light(t,8,5,9,"rgba(255, 230, 170, 0.45)")})}]},BM={desert:1,route66:.6,canyon:.4},zM={suburb:"flock",forest:"flock",fields:"flock",oldtown:"flock",canyon:"circle"};function q0(n,t="#ffffff"){return new mn({color:t,vertexColors:n,transparent:!0,depthWrite:!1,fog:!1})}function Yh(n,t,e,i=1){const s=n.radius-i;return new P(Math.sin(t)*s,e-(n.bottom+n.height/2),Math.cos(t)*s)}function HM(n,t,e,i){const s=[];for(let h=0;h<5;h++){const[l,u]=[i.range(-7,7),i.range(-2.5,2.5)];for(const f of[-1,1])s.push({geo:y(2.2,.35,.1),color:"#ffffff",pos:[l+f*.95,u,0],rot:[0,0,f*.45]})}const o=q0(!1,t),r=new Xt(De(s),o),a=Math.PI+i.range(-.5,.5),c=i.range(26,34);return{object:r,material:o,update(h,l){const u=e==="circle"?a+Math.cos(l*.12)*.08:Math.PI+((l*.006+a)%1.6+1.6)%1.6-.8,f=e==="circle"?c+Math.sin(l*.12)*3:c+Math.sin(l*.4)*1.5;r.position.copy(Yh(n,u,f,6)),r.rotation.y=u+Math.PI,r.scale.y=.35+.65*Math.abs(Math.sin(l*(e==="circle"?2.5:7)))}}}function GM(n,t){const e=q0(!0),i=new Ke,s=t("#ece8df"),o=t("#c9c4b8"),r=new Xt(De([{geo:K(1.3,2.6,24,6),color:s,pos:[0,12,0]},{geo:y(3,2.6,4),color:o,pos:[0,25,.4]},{geo:ye(2.2,1.6,4),color:t("#8c5a48"),pos:[0,27,.4],rot:[0,Math.PI/4,0]}]),e),a=[{geo:K(.6,.6,.8,6),color:o,rot:[Math.PI/2,0,0]}];for(let l=0;l<4;l++){const u=l/4*Math.PI*2;a.push({geo:y(1.5,11,.2),color:s,pos:[Math.sin(u)*6,Math.cos(u)*6,0],rot:[0,0,-u]})}const c=new Xt(De(a),e);c.position.set(0,25,2.6),i.add(r,c);const h=Math.PI+.32;return i.position.copy(Yh(n,h,-1,4)),i.rotation.y=h+Math.PI,{object:i,material:e,update(l){c.rotation.z-=l*.9}}}const Hc=6,Ro=new Ee;function VM(n,t,e,i){const s=[];for(const[h,l]of t)for(let u=0;u<n.repeat;u++){const f=zo*(u+h)/n.repeat;Math.abs(f-Math.PI)<NM&&s.push(Yh(n,f,l,2))}if(!s.length)return null;const o=new mn({transparent:!0,depthWrite:!1,fog:!1}),r=new Fh(new dr(1,0),o,s.length*Hc);r.frustumCulled=!1;const a=new ht(e),c=new ht(i);return{object:r,material:o,update(h,l){let u=0;s.forEach((f,d)=>{for(let g=0;g<Hc;g++){const _=(l*.07+g/Hc+d*.37)%1;Ro.position.set(f.x-_*9*Math.cos(d),f.y+_*16,f.z),Ro.scale.setScalar(1.6+_*4.5),Ro.rotation.set(_*2+d,g,0),Ro.updateMatrix(),r.setMatrixAt(u,Ro.matrix),r.setColorAt(u,kM.copy(a).lerp(c,_*.85)),u++}}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}}}const WM=Ha.map(n=>new Vi(n.radius,n.radius,n.height,96,1,!0)),Y0={value:0},gi={uMul:{value:new ht("#ffffff")},uFog:{value:new ht("#ffffff")},uNight:{value:0},uFogMix:Ha.map(()=>({value:0}))},$0=new ka(new Uint8Array(4),1,1);$0.needsUpdate=!0;function XM(n,t,e,i){const s=new mn({map:n,transparent:!0,depthWrite:!1,fog:!1,side:cn});return s.onBeforeCompile=o=>{o.uniforms.uTime=Y0,o.uniforms.uShimmer={value:e},o.uniforms.uLights={value:t},o.uniforms.uMul=gi.uMul,o.uniforms.uFog=gi.uFog,o.uniforms.uNight=gi.uNight,o.uniforms.uFogMix=gi.uFogMix[i],o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uShimmer;
uniform sampler2D uLights;
uniform vec3 uMul;
uniform vec3 uFog;
uniform float uNight;
uniform float uFogMix;`).replace("#include <map_fragment>",`vec2 shUv = vMapUv;
          // Heat shimmer: wobble the lower part of the layer.
          float low = 1.0 - vMapUv.y;
          shUv.x += sin(vMapUv.y * 90.0 + uTime * 7.0) * uShimmer * 0.0022 * low * low;
          vec4 layerTex = texture2D(map, shUv);
          vec4 lit = texture2D(uLights, shUv);
          vec3 tinted = mix(layerTex.rgb * uMul, uFog, uFogMix);
          diffuseColor *= vec4(tinted + lit.rgb * lit.a * uNight, layerTex.a);`)},s.customProgramCacheKey=()=>"horizonLayer",s}function qM(n,t,e,i){gi.uMul.value.copy(n),gi.uFog.value.copy(t),gi.uNight.value=i,Ha.forEach((s,o)=>gi.uFogMix[o].value=Math.min(1,s.fog*1.4)*e)}class YM{constructor(t){this.biome=t,this.layers=[],this.materials=[],this.lightMaps=[],this.extras=[],this.extraColors=[];const e=new Dn(16609+t.id.charCodeAt(0)*131+t.id.length*7),i=new ht(t.palette.fog),s=BM[t.id]??0;Ha.forEach((o,r)=>{const a=new FM(o,e,i);OM[t.id][r](a);const c=xs(new vs(a.c));c.colorSpace=Ve,c.wrapS=Bi,c.repeat.set(o.repeat,1),c.anisotropy=4;let h=$0;a.lights&&(h=xs(new vs(a.lights)),h.colorSpace=Ve,h.wrapS=Bi,this.lightMaps.push(h));const l=XM(c,h,r<2?s:s*.5,r),u=new Xt(WM[r],l);if(u.position.y=o.bottom+o.height/2,u.frustumCulled=!1,this.layers.push(u),this.materials.push(l),r===1){const f=_=>a.tone(_),d=zM[t.id];d&&this.addExtra(u,HM(o,f("#3d3f45"),d,e)),t.id==="fields"&&this.addExtra(u,GM(o,f));const g=VM(o,a.emitters,f("#e9e6e0"),t.palette.skyBottom);g&&this.addExtra(u,g)}})}addExtra(t,e){this.extras.push(e),this.extraColors.push(e.material.color.clone()),e.object.renderOrder=1,t.add(e.object)}show(t,e,i){this.layers.forEach((s,o)=>{s.visible=t&&e>.001,s.renderOrder=-100+o*10+i;for(const r of s.children)r.renderOrder=s.renderOrder+2});for(const s of this.materials)s.opacity=e;for(const s of this.extras)s.material.opacity=e}update(t,e){this.extras.forEach((i,s)=>{i.update(t,e),i.material.color.copy(this.extraColors[s]).multiply(gi.uMul.value)})}dispose(){var t;for(const e of this.materials)(t=e.map)==null||t.dispose(),e.dispose();for(const e of this.lightMaps)e.dispose();for(const e of this.extras)e.material.dispose(),e.object.traverse(i=>{var s;return(s=i.geometry)==null?void 0:s.dispose()})}}function $M(n){const t=new Dn(n),e=[],i=t.int(3,5);for(let s=0;s<i;s++){const o=t.range(4,8);e.push({geo:qe(o,1),color:"#ffffff",pos:[s*6-i*3,t.range(-1,2),t.range(-1.5,1.5)],scale:[1.3,.75,.9]})}return De(e)}class KM{constructor(){this.root=new Ke,this.sky=new IM,this.clouds=[],this.cloudAngles=[],this.sets=[],this.time=0,this.cloudMat=new Yn({vertexColors:!0,flatShading:!0,fog:!1,transparent:!0,depthWrite:!1,emissive:new ht("#ffffff"),emissiveIntensity:.35});const t=new Dn(77);for(let e=0;e<8;e++){const i=new Xt($M(500+e),this.cloudMat);i.renderOrder=-95,i.position.y=t.range(34,62),this.cloudAngles.push(Math.PI+(e-3.5)*.32+t.range(-.1,.1)),this.clouds.push(i),this.root.add(i)}this.root.add(this.sky.root)}show(t,e,i){for(const s of this.sets)s!==t&&s!==e&&s.show(!1,0,0);this.sets.length=0;for(const s of t===e?[t]:[t,e]){if(!s.layers[0].parent)for(const o of s.layers)this.root.add(o);this.sets.push(s)}t===e||i>=1?(t.show(t===e,1,0),e.show(!0,1,0)):(t.show(!0,1-i,0),e.show(!0,i,1))}detach(t){for(const e of t.layers)this.root.remove(e);this.sets=this.sets.filter(e=>e!==t)}update(t,e,i,s){this.time+=e,Y0.value=this.time,this.root.position.set(t.position.x,0,t.position.z),this.sky.update(this.time,s.night,s.twilight,s.sun,s.dawn);for(const o of this.sets)o.update(e,this.time);this.cloudMat.color.copy(i),this.cloudMat.emissive.copy(i),this.clouds.forEach((o,r)=>{this.cloudAngles[r]+=e*.0035,this.cloudAngles[r]>Math.PI+1.4&&(this.cloudAngles[r]-=2.8);const a=this.cloudAngles[r];o.position.x=Math.sin(a)*244,o.position.z=Math.cos(a)*244,o.rotation.y=a})}}const jM="#7b5536",K0=["#4f9d55","#5fb35b","#3f8a4c","#78c262"],we={lamp:"#ffdc9c",sodium:"#ffa64c",window:"#ffc878",shop:"#ffe2a8",cool:"#c4e2ff",red:"#ff3b30",neonPink:"#ff5fa2",neonCyan:"#40e0d0"};function Ga(n,t,e,i){const s=Math.sin(n*12.9898+t*78.233+e*37.719)*43758.5453;return s-Math.floor(s)<i}const ZM=new ht;function ar(n,t){return`#${ZM.set(n).multiplyScalar(t).getHexString()}`}const Ko=new ii,Wf=new ii,js=new Tn,Ho=new P,JM=new P(0,1,0),Xf=new ae,QM=new P,qs=new Nn,ty=new Nn;function la(n){qs.makeEmpty();for(const t of n)t.geo.boundingBox||t.geo.computeBoundingBox(),Ko.setFromEuler(js.set(...t.rot??[0,0,0])),Xf.compose(Ho.set(...t.pos??[0,0,0]),Ko,QM.set(...t.scale??[1,1,1])),qs.union(ty.copy(t.geo.boundingBox).applyMatrix4(Xf));return[qs.min.x,qs.max.x,qs.min.z,qs.max.z]}const ey=(n,t)=>n[0]<t[1]&&t[0]<n[1]&&n[2]<t[3]&&t[2]<n[3];function os(n,t,e,i=0,s=0){return i?(Ko.setFromAxisAngle(JM,i),n.map(o=>(Ho.set(...o.pos??[0,0,0]).applyQuaternion(Ko),Wf.setFromEuler(js.set(...o.rot??[0,0,0])).premultiply(Ko),js.setFromQuaternion(Wf),{...o,pos:[Ho.x+t,Ho.y+s,Ho.z+e],rot:[js.x,js.y,js.z]}))):n.map(o=>{var r,a,c;return{...o,pos:[(((r=o.pos)==null?void 0:r[0])??0)+t,(((a=o.pos)==null?void 0:a[1])??0)+s,(((c=o.pos)==null?void 0:c[2])??0)+e]}})}class Mn{constructor(t,e=[]){this.rng=t,this.clear=e,this.parts=[],this.length=O.chunkLength,this.taken=[]}addSolid(t,e,i=2){return this.add(t,e,i)?(this.taken.push(la(e)),!0):!1}alwaysSolid(t){this.always(t),this.taken.push(la(t))}addOpen(t,e,i=2,s=la(e)){return!this.taken.some(o=>ey(o,s))&&this.add(t,e,i)}free(t,e=2){return this.clear.every(([i,s])=>t+e<i||t-e>s)}add(t,e,i=2){if(!this.free(t,i))return!1;for(const s of e)this.parts.push(s);return!0}always(t){for(const e of t)this.parts.push(e)}z(t=1){return-this.rng.range(t,this.length-t)}geometry(){return this.parts.length?De(this.parts):De([{geo:y(.01,.01,.01),color:"#000000",pos:[0,-5,0]}])}}function Oe(n,t,e,i,s,o=.012){return{geo:y(Math.abs(t-n),.01,Math.abs(i-e)),color:s,pos:[(n+t)/2,o-.005,(e+i)/2]}}function Va(n,t,e,i=K0,s=1){const o=n.range(1.6,3)*s,r=n.pick(i),a=n.range(1.3,2.1)*s;return[{geo:K(.2*s,.28*s,o,6),color:jM,pos:[t,o/2,e]},{geo:qe(a,0),color:r,pos:[t,o+a*.8,e]},{geo:qe(a*.7,0),color:r,pos:[t+a*.5,o+a*.4,e+.3]}]}function j0(n,t,e=1,i="#3f7d4a",s="#4c9157"){const o=2*e;return[{geo:K(.18*e,.25*e,o,5),color:"#6e4b30",pos:[n,o/2,t]},{geo:ye(1.6*e,3.2*e,7),color:i,pos:[n,o+1.2*e,t]},{geo:ye(1.15*e,2.5*e,7),color:s,pos:[n,o+2.7*e,t]}]}function mr(n,t,e,i,s){return{geo:qe(i,0),color:s,pos:[t,i*.35,e],rot:[n.next()*3,n.next()*3,0],scale:[n.range(.9,1.4),n.range(.55,.9),n.range(.9,1.3)]}}function Wa(n,t,e,i,s){return[{geo:qe(i,0),color:s,pos:[t,i*.6,e],scale:[1.2,.8,1.1]},{geo:qe(i*.7,0),color:s,pos:[t+n.range(-.5,.5)*i,i*.5,e+i*.6],scale:[1.1,.8,1]}]}function Z0(n,t,e,i,s=2,o=1.1){const r=[];for(let a=0;a<s;a++)r.push({geo:y(.1,.12,e),color:i,pos:[n,o*(.45+.5*a/Math.max(1,s-1)),t-e/2]});for(let a=0;a<=e;a+=2.5)r.push({geo:y(.16,o+.1,.16),color:i,pos:[n,(o+.1)/2,t-a]});return r}function J0(n,t,e=8.2){return[{geo:K(.13,.17,e,6),color:"#6b5038",pos:[n,e/2,t]},{geo:y(2.2,.16,.16),color:"#5d4632",pos:[n,e-.6,t]},{geo:K(.06,.06,.2,5),color:"#d9e2e6",pos:[n-.9,e-.42,t]},{geo:K(.06,.06,.2,5),color:"#d9e2e6",pos:[n+.9,e-.42,t]}]}function Q0(n,t,e=.9){return[-e,e].map(i=>({geo:y(.04,.04,40),color:"#2d2d30",pos:[n+i,t,-20]}))}function tp(n,t={}){const e=t.rusty?"#4a4038":"#3a4c62",i=[{geo:y(1.8,.65,4.2),color:n,pos:[0,.62,0]},{geo:y(1.6,.55,t.pickup?1.6:2.2),color:e,pos:[0,1.2,t.pickup?-.5:.1]},{geo:y(1.62,.08,t.pickup?1.5:2),color:n,pos:[0,1.5,t.pickup?-.5:.1]}];if(t.pickup&&i.push({geo:y(1.8,.35,1.9),color:"#2e2f33",pos:[0,1,1.05]}),t.lights)for(const s of[-.6,.6])i.push({geo:y(.36,.16,.06),color:"#e8e6dc",pos:[s,.75,-2.12],glow:"#fff3c8"}),i.push({geo:y(.32,.14,.06),color:"#a8262c",pos:[s,.78,2.12],glow:we.red});for(const[s,o]of[[-.85,-1.35],[.85,-1.35],[-.85,1.35],[.85,1.35]])i.push({geo:K(.36,.36,.28,8),color:t.rusty?"#3a3530":"#1f2026",pos:[s,t.rusty?.28:.36,o],rot:[0,0,Math.PI/2]});return i}function ep(n,t,e,i,s="#6b7080"){const o=n.pick(i);return[{geo:y(.25,5,.25),color:s,pos:[t-1.6,2.5,e]},{geo:y(.25,5,.25),color:s,pos:[t+1.6,2.5,e]},{geo:y(5,2.6,.2),color:"#fafafa",pos:[t,5.6,e]},{geo:y(4.6,2.2,.22),color:o,pos:[t,5.6,e],glow:ar(o,.6)},{geo:y(2.4,.5,.24),color:"#ffffff",pos:[t-.6,5.9,e],glow:"#a8a8a0"},{geo:qe(.55,0),color:"#ffffff",pos:[t+1.4,5.5,e+.05],scale:[1,1,.3],glow:"#a8a8a0"}]}function Ta(n){return[{geo:y(12.8,.012,.5),color:"#6d7078",pos:[0,.006,n]},...[-.16,0,.16].map(t=>({geo:y(12.8,.02,.06),color:"#a9adb5",pos:[0,.012,n+t]}))]}function ny(n,t,e){const i="#7d6b55",s=n.pick(["#5c7a3a","#6b8a44"]),o=n.range(2.2,3.4),r=[{geo:K(.2,.3,o,6),color:i,pos:[t,o/2,e]}],a=n.int(2,4);for(let c=0;c<a;c++){const h=c/a*Math.PI*2+n.next(),l=n.range(1,1.8),u=[t,o*n.range(.7,.95),e],f=[t+Math.cos(h)*l,u[1]+n.range(.7,1.4),e+Math.sin(h)*l];r.push(Vt(u,f,.13,i,5,.1)),r.push({geo:qe(.42,0),color:s,pos:[f[0],f[1]+.25,f[2]],scale:[1,1.3,1]}),r.push({geo:ye(.3,.6,5),color:s,pos:[f[0],f[1]+.7,f[2]]})}return r.push({geo:qe(.45,0),color:s,pos:[t,o+.3,e],scale:[1,1.3,1]}),r}function iy(n,t,e){const i=[];for(let o=0;o<9;o++){const r=o/9*Math.PI*2,a=n.range(.3,.8);i.push({geo:ye(.07,1.1,3),color:o%2?"#7c9a58":"#6b8a4a",pos:[t+Math.cos(r)*.2,.5,e+Math.sin(r)*.2],rot:[Math.sin(r)*a,0,-Math.cos(r)*a]})}return n.chance(.5)&&i.push({geo:K(.03,.04,1.6,4),color:"#8a7a4a",pos:[t,1.4,e]},{geo:qe(.18,0),color:"#f2ead2",pos:[t,2.2,e],scale:[1,2,1]}),i}function sy(n,t,e){const i="#6f9a52",s=[],o=[[0,.45,0,0],[.35,.95,.05,.5],[-.3,.9,-.05,-.4],[.1,1.35,0,.1]],r=n.int(2,4),a=[];for(const[c,h,l,u]of o.slice(0,r)){const f=n.next();s.push({geo:RM(.38,6,4),color:i,pos:[t+c,h,e+l],rot:[0,f,u],scale:[1,1.15,.3]}),a.push([t+c-Math.sin(u)*Math.cos(f)*.42,h+Math.cos(u)*.42,e+l+Math.sin(u)*Math.sin(f)*.42])}for(const c of a.slice(Math.max(1,r-2)))s.push({geo:qe(.08,0),color:"#d9456a",pos:c});return s}function oy(n,t){const e="#7a6450",i="#9aa0a7",o=[];for(const[r,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.push(Vt([n+r*1.3,0,t+a*1.3],[n+r*.25,8,t+a*.25],.07,e,4));for(const r of[2.5,5])o.push({geo:y(2.2-r*.2,.08,2.2-r*.2),color:e,pos:[n,r,t]});o.push({geo:y(.5,.5,.8),color:i,pos:[n,8+.2,t]});for(let r=0;r<12;r++){const a=r/12*Math.PI*2;o.push({geo:y(.05,1.3,.3),color:i,pos:[n+Math.cos(a)*.7,8+.4+Math.sin(a)*.7,t+.45],rot:[0,0,a+Math.PI/2]})}return o.push({geo:y(.05,.8,1.6),color:"#c0392b",pos:[n,8+.4,t-1.2]}),o.push({geo:K(1.4,1.4,1.2,10),color:"#8f9499",pos:[n+3,.6,t]}),o}function ry(n,t){return[{geo:qe(.22,0),color:"#f2ecdc",pos:[n,.15,t],scale:[1,.7,1.5]},{geo:ye(.05,.4,4),color:"#f2ecdc",pos:[n-.25,.25,t-.2],rot:[0,0,1.2]},{geo:ye(.05,.4,4),color:"#f2ecdc",pos:[n+.25,.25,t-.2],rot:[0,0,-1.2]}]}function ay(n,t,e){const i=["#c98a64","#b8774f","#d79e74"],s=n.range(14,26),o=[];let r=0;for(let a=0;a<4;a++){const c=n.range(3,6);o.push({geo:y(s*(1-a*.12),c,s*.8*(1-a*.1)),color:i[a%3],pos:[t,r+c/2,e]}),r+=c}return o}function np(n){const t=n.rng;for(const e of[-1,1]){for(let i=0;i<t.int(6,12);i++){const s=n.z();n.add(s,Wa(t,e*t.range(7.5,40),s,t.range(.35,.7),t.pick(["#9aa58a","#a3a98c","#8f9a7c"])),.6)}for(let i=0;i<t.int(1,3);i++){const s=n.z();n.add(s,ny(t,e*t.range(9,34),s),1.5)}for(let i=0;i<t.int(1,3);i++){const s=n.z();n.add(s,iy(t,e*t.range(7.8,24),s),.8)}if(t.chance(.6)){const i=n.z();n.add(i,sy(t,e*t.range(8,20),i),.8)}for(let i=0;i<t.int(2,5);i++){const s=n.z();n.add(s,[mr(t,e*t.range(7.5,30),s,t.range(.3,1.1),t.pick(["#c9a27a","#b08960","#a17d58"]))],1)}}if(n.add(-20,J0(-8.8,-20),.5),n.free(-20,20)&&n.always(Q0(-8.8,7.75)),t.chance(.18)){const e=t.chance(.5)?-1:1,i=n.z(5);n.add(i,oy(e*t.range(16,26),i),4)}if(t.chance(.1)){const e=n.z(2);n.add(e,ry(t.chance(.5)?-8:8.2,e),.5)}if(t.chance(.3)){const e=t.chance(.5)?-1:1,i=n.z(10);n.add(i,ay(t,e*t.range(55,90),i),1)}}const qf=["#c97d55","#b5704a","#d89a6a","#9b5b3e","#c4825a"];function Yf(n,t,e,i,s,o){const r=[],a=n.range(8,14);let c=0,h=0;const l=n.int(3,5);for(let u=0;u<l;u++){const f=o/l,d=qf[(u+Math.floor(n.next()*5))%qf.length];r.push({geo:y(a-h,f,s-h*.6),color:d,pos:[e*(t+h+(a-h)/2),c+f/2,i]}),r.push({geo:y(.1,f*.18,s-h*.6),color:ar(d,.82),pos:[e*(t+h-.04),c+f*.3,i]}),c+=f,h+=n.range(.4,1.6)}return r}function cy(n,t,e){const i="#8a7f74",s=n.range(2,3.2),o=[{geo:K(.1,.18,s,5),color:i,pos:[t,s/2,e]}];for(let r=0;r<3;r++){const a=n.next()*Math.PI*2,c=s*n.range(.5,.95);o.push(Vt([t,c,e],[t+Math.cos(a)*1.1,c+n.range(.5,1),e+Math.sin(a)*1.1],.06,i,4,.03))}return o}function ly(n,t){const e="#b5704a",i=[];for(const s of[-1,1])i.push({geo:y(6,16,7),color:e,pos:[s*13,8,t]}),i.push({geo:y(4.5,3,6.4),color:"#c97d55",pos:[s*9.5,15.5,t],rot:[0,0,s*.45]});i.push({geo:y(16,3.2,6.6),color:"#c4825a",pos:[0,18,t]}),i.push({geo:y(14,.5,6.7),color:"#9b5b3e",pos:[0,16.6,t]}),i.push({geo:y(12,1.6,5),color:"#d89a6a",pos:[0,20.2,t-.5]}),n.always(i)}function hy(n,t){const e="#6e4f33",i="#b08a62",s=[];s.push({geo:y(12.8,.03,1.8),color:"#7a5a3c",pos:[0,.015,-.2]});for(let o=-.9;o<.8;o+=.45)s.push({geo:y(12.8,.035,.05),color:"#5a4230",pos:[0,.02,-.2+o]});for(const o of[-1,1]){s.push({geo:y(1.6,11,1.6),color:i,pos:[o*8.4,5.5,t]}),s.push({geo:y(2,.4,2),color:ar(i,.8),pos:[o*8.4,11.2,t]});for(const r of[2,5,8])s.push({geo:y(1.66,.12,1.66),color:ar(i,.85),pos:[o*8.4,r,t]});for(let r=10.6;r<32;r+=2.6)s.push({geo:y(.16,1.3,.16),color:e,pos:[o*r,.65,t]});for(const r of[.55,1.05])s.push({geo:y(22,.12,.1),color:"#8a6646",pos:[o*20.8,r,t]});s.push({geo:y(.06,.9,.06),color:"#3a3330",pos:[o*2.6,9.95,t]})}s.push({geo:K(.38,.38,18.6,8),color:e,pos:[0,10.6,t],rot:[0,0,Math.PI/2]}),s.push({geo:y(6.4,1.4,.2),color:"#8a6646",pos:[0,9,t]}),s.push({geo:y(5.8,.9,.22),color:"#5e4630",pos:[0,9,t]}),s.push({geo:y(2.6,.18,.24),color:"#d9c9a4",pos:[0,9,t]}),s.push({geo:K(.75,.75,.1,10),color:e,pos:[9.4,.75,t-1],rot:[Math.PI/2,0,.15]}),n.always(s)}function uy(n,t,e){const i=t-e,s=(t+e)/2,o=[{geo:y(13.4,.03,i),color:"#6d6762",pos:[0,.015,s]}];o.push(...Ta(t).map(r=>({...r,pos:[r.pos[0],r.pos[1]+.02,r.pos[2]]}))),o.push(...Ta(e).map(r=>({...r,pos:[r.pos[0],r.pos[1]+.02,r.pos[2]]})));for(const r of[-1,1])o.push({geo:y(.35,.9,i),color:"#a39d96",pos:[r*6.85,.45,s]}),o.push({geo:y(.45,.12,i),color:"#8a847d",pos:[r*6.85,.95,s]}),o.push(Oe(r*6.6,r*140,t-1,e+1,"#4a2b1c",.014)),o.push(Oe(r*6.6,r*140,s+i*.2,s-i*.2,"#2b170e",.016)),o.push(Oe(r*6.6,r*140,t,t-1,"#c4825a",.015)),o.push(Oe(r*6.6,r*140,e+1,e,"#c4825a",.015));n.always(o)}function lh(n,t=!1){const e=n.rng;t&&ly(n,-20);for(const i of[-1,1]){let s=e.range(-1,2);for(;s>-40;){const o=e.range(7,14);if(e.chance(.18)){s-=e.range(2,6);continue}const r=e.range(10,30);n.add(s-o/2,Yf(e,e.range(12,18),i,s-o/2,o,r),o/2),s-=o}if(e.chance(.6)){const o=n.z(8);n.add(o,Yf(e,e.range(26,34),i,o,e.range(14,24),e.range(26,40)),8)}for(let o=0;o<e.int(2,5);o++){const r=n.z();n.add(r,[mr(e,i*e.range(7.5,11.5),r,e.range(.4,1.3),e.pick(["#a86a48","#8f5a3c","#b98060"]))],1)}if(e.chance(.4)){const o=n.z();n.add(o,cy(e,i*e.range(8,11),o),1)}if(e.chance(.3)){const o=n.z(4);n.add(o,[{geo:y(3,.6,5),color:"#c4825a",pos:[i*12.2,e.range(5,9),o]}],3)}}}const fy=["#c95f4f","#4f8fa6","#d9a441","#e76f51","#3d8a6a"];function hh(n,t){return[{geo:y(.1,2.2,.1),color:"#7d8188",pos:[n,1.1,t]},{geo:y(1,.9,.08),color:"#1f1f22",pos:[n,2.35,t]},{geo:y(.9,.8,.1),color:"#f4f2ea",pos:[n,2.35,t]},{geo:ye(.5,.4,3),color:"#f4f2ea",pos:[n,1.8,t],rot:[0,0,Math.PI],scale:[1,1,.15]},{geo:K(.14,.14,.12,8),color:"#1f1f22",pos:[n-.18,2.25,t],rot:[Math.PI/2,0,0]},{geo:K(.14,.14,.12,8),color:"#1f1f22",pos:[n+.18,2.25,t],rot:[Math.PI/2,0,0]},{geo:K(.06,.06,.14,6),color:"#f4f2ea",pos:[n-.18,2.25,t],rot:[Math.PI/2,0,0]},{geo:K(.06,.06,.14,6),color:"#f4f2ea",pos:[n+.18,2.25,t],rot:[Math.PI/2,0,0]}]}function dy(n,t){return[{geo:y(.12,1,.06),color:"#2f7a4a",pos:[n,.5,t]},{geo:y(.14,.2,.07),color:"#f4f2ea",pos:[n,.9,t]}]}function py(n,t,e){const i="#c0392b",s=[{geo:y(9,.5,8),color:"#f2efe8",pos:[n,4.6,t]},{geo:y(9.05,.25,8.05),color:i,pos:[n,4.35,t]},{geo:y(7.6,.05,6.4),color:"#f2efe8",pos:[n,4.32,t],glow:"#fff4dc"}];for(const[r,a]of[[-3.5,-3],[3.5,-3],[-3.5,3],[3.5,3]])s.push({geo:y(.3,4.3,.3),color:"#d9d9d4",pos:[n+r,2.15,t+a]});for(const r of[-1.6,1.6])s.push({geo:y(.7,1.5,.5),color:i,pos:[n,.75,t+r]}),s.push({geo:y(.72,.3,.52),color:"#f2efe8",pos:[n,1.2,t+r]});const o=n+e*8;return s.push({geo:y(6,3.6,9),color:"#e8e0cf",pos:[o,1.8,t]}),s.push({geo:y(.1,1.6,5),color:"#5d7f96",pos:[o-e*3.02,1.6,t],glow:we.shop}),s.push({geo:y(6.1,.4,9.1),color:i,pos:[o,3.4,t]}),s.push({geo:K(.15,.2,10,6),color:"#8a8f96",pos:[n-e*4.5,5,t+5]}),s.push({geo:K(1.5,1.5,.3,14),color:"#f2efe8",pos:[n-e*4.5,10.3,t+5],rot:[Math.PI/2,0,0],glow:"#d8d4c8"}),s.push({geo:K(1.15,1.15,.34,14),color:i,pos:[n-e*4.5,10.3,t+5],rot:[Math.PI/2,0,0],glow:"#e04030"}),s.push({geo:y(1.6,.4,.36),color:"#f2efe8",pos:[n-e*4.5,10.3,t+5],glow:"#d8d4c8"}),s}function my(n,t,e){const i="#c7cdd2",s=n.pick(["#c0392b","#2a7fa8"]),o=[{geo:y(6.5,3.6,13),color:i,pos:[t,1.8,e]},{geo:K(3.25,3.25,3.6,12),color:i,pos:[t,1.8,e-6.5]},{geo:y(6.55,.5,13.05),color:s,pos:[t,1.2,e]},{geo:y(6.6,.9,13.1),color:"#3a4c62",pos:[t,2.3,e],glow:"#ffd99a"},{geo:y(6.8,.3,14),color:"#e9e6de",pos:[t,3.75,e]}];return o.push({geo:y(.25,8,.25),color:"#8a8f96",pos:[t,4,e+9]}),o.push({geo:y(.3,2.2,4.2),color:"#ff5fa2",pos:[t,8.4,e+9],glow:we.neonPink}),o.push({geo:y(.34,1.6,3.6),color:"#1f2a44",pos:[t,8.4,e+9]}),o.push({geo:ye(.9,1.6,3),color:"#40e0d0",pos:[t,6.6,e+9],rot:[0,0,Math.PI],scale:[1,1,.3],glow:we.neonCyan,blink:!0}),o}function gy(n,t,e,i){const s="#efe2c4",o=[{geo:y(7,3.4,20),color:s,pos:[t+i*3.5,1.7,e]},{geo:y(7.6,.4,20.6),color:"#a0522d",pos:[t+i*3.5,3.6,e]},{geo:y(14,3.4,6),color:s,pos:[t+i*10,1.7,e-7]},{geo:y(14.6,.4,6.6),color:"#a0522d",pos:[t+i*10,3.6,e-7]}];for(let a=0;a<6;a++){o.push({geo:y(.1,2.1,1),color:n.pick(["#3d8a6a","#c95f4f","#4f8fa6","#d9a441"]),pos:[t-i*.05,1.05,e+8-a*3.2]});const c=e+6.6-a*3.2;o.push({geo:y(.1,.9,1.3),color:"#5d7f96",pos:[t-i*.05,2,c],glow:Ga(t,2,c,.6)?we.window:void 0})}const r=t-i*3;o.push({geo:y(.3,9,.3),color:"#8a8f96",pos:[r,4.5,e+11]}),o.push({geo:y(.3,3.4,2.2),color:"#c0392b",pos:[r,8.6,e+11],glow:"#e04a3a"});for(let a=0;a<5;a++)o.push({geo:y(.34,.22,.22),color:"#fff6c4",pos:[r,7.3+a*.65,e+10.1],glow:we.lamp,blink:a%2===0});return o.push({geo:y(.3,.6,3.2),color:"#40e0d0",pos:[r,6.6,e+12.4],glow:we.neonCyan}),o.push({geo:ye(.7,1,3),color:"#40e0d0",pos:[r,6.6,e+10.4],rot:[Math.PI/2,0,0],scale:[.4,1,1],glow:we.neonCyan}),o}function vy(n,t){n.always(Ta(t)),n.always(hh(-7.6,t-4)),n.always(hh(7.6,t-4))}function ip(n){const t=n.rng;n.add(-20,J0(8.8,-20,8),.5),n.free(-20,20)&&n.always(Q0(8.8,7.55));const e=[];for(const o of[-1,1]){for(let r=0;r<t.int(4,8);r++){const a=n.z();e.push([a,Wa(t,o*t.range(7.5,50),a,t.range(.35,.75),t.pick(["#a3a06a","#8d8a5a","#9a9a70"]))])}if(t.chance(.25)){const r=n.z(2);n.add(r,hh(o*7.6,r),.5)}if(t.chance(.4)){const r=n.z(1);n.add(r,dy(o*7.2,r),.3)}}const i=t.chance(.5)?-1:1,s=t.next();if(s<.2)n.addSolid(-20,py(i*13,-20,i),9);else if(s<.38)n.addSolid(-20,my(t,i*14,-20),9);else if(s<.52)n.addSolid(-20,gy(t,i*12,-20,i),12);else if(s<.7){const o=n.z(6);n.addSolid(o,ep(t,i*t.range(12,15),o,fy,"#7a6450"),3)}for(const[o,r]of e)n.addOpen(o,r,.6);if(t.chance(.18)){const o=n.z(4),r=-i;n.add(o,os(tp(t.pick(["#8a4b2c","#7a5a3a","#6d7f7a"]),{rusty:!0}),r*t.range(9,15),o,t.range(-1,1)),3)}if(t.chance(.5)){const o=n.z(2);n.addOpen(o,[mr(t,(t.chance(.5)?-1:1)*t.range(8,25),o,t.range(.4,1),"#b39a74")],1)}}const _y=["#a5512f","#4a6f8f","#4f7a54","#8a8f93","#b88a3a","#7a4a6a"];function xy(n,t){const e=t*9.4,i=[];for(let o=-4;o>-40;o-=8)i.push({geo:y(.3,4.6,.3),color:"#6d7076",pos:[e-t*.9,2.3,o]}),i.push({geo:y(.3,4.6,.3),color:"#6d7076",pos:[e+t*.9,2.3,o]}),i.push({geo:y(2.2,.25,.25),color:"#6d7076",pos:[e,4.45,o]}),i.push({geo:y(2.2,.2,.2),color:"#6d7076",pos:[e,3.3,o]});const s=[[-.55,3.62,.3,"#8a8f96"],[.1,3.62,.22,"#b08a5a"],[.6,3.6,.18,"#6d8f8a"],[-.3,4.78,.32,"#9aa0a7"],[.45,4.74,.26,"#a9563f"]];for(const[o,r,a,c]of s)i.push({geo:K(a,a,40,8),color:c,pos:[e+t*o,r,-20],rot:[Math.PI/2,0,0]});n.always(i)}function My(n,t,e,i){const s=n.range(14,22),o=n.range(16,28),r=n.range(8,13),a=n.pick(["#a8a49c","#9c6b5a","#b3ada2","#8d9196"]),c=[{geo:y(s,r,o),color:a,pos:[t,r/2,e]}],h=Math.floor(o/4);for(let u=0;u<h;u++){const f=e+o/2-2-u*4;c.push({geo:Te([[-2,0],[2,0],[2,2.2]],s-.4),color:"#6f7377",pos:[t,r,f]}),c.push({geo:y(s-.6,1.9,.12),color:"#9fc0d0",pos:[t,r+1.05,f+1.95],glow:Ga(t,r,f,.5)?"#a87a44":void 0})}const l=t-i*(s/2+.05);for(let u=0;u<Math.floor(o/8);u++){const f=e+o/2-4-u*8;c.push({geo:y(.12,4,3.6),color:"#5d6168",pos:[l,2,f]});for(let d=0;d<4;d++)c.push({geo:y(.14,.06,3.6),color:"#4a4e55",pos:[l,.8+d*.9,f]})}if(c.push({geo:y(s+.05,.6,o+.05),color:n.pick(["#3d5a80","#a63d32","#4f6b4a"]),pos:[t,r-1.2,e]}),n.chance(.5)){const u=n.range(16,24);c.push({geo:K(.7,.9,u,8),color:"#9a9590",pos:[t+i*s*.3,u/2,e-o*.3]}),c.push({geo:K(.75,.75,1,8),color:"#c4524a",pos:[t+i*s*.3,u-1.2,e-o*.3]}),c.push({geo:y(.45,.45,.45),color:"#7a2a24",pos:[t+i*s*.3,u+.2,e-o*.3],glow:we.red,blink:!0})}return c}function yy(n,t,e){const i=[],s=n.int(1,3);for(let o=0;o<s;o++){const r=n.range(3.5,5.5),a=n.range(6,11),c=e-o*(r*2+1.5);i.push({geo:K(r,r,a,12),color:"#d0d0c8",pos:[t,a/2,c]}),i.push({geo:K(r*.98,r,.8,12),color:"#b9b9b0",pos:[t,a+.4,c]}),i.push({geo:K(r+.03,r+.03,.4,12),color:"#7f8a96",pos:[t,a*.5,c]}),i.push({geo:y(.2,a,.6),color:"#6d7076",pos:[t-r,a/2,c]})}return i}function by(n,t,e){const i=[];for(let s=0;s<n.int(1,3);s++)for(let o=0;o<n.int(1,3);o++){const r=n.pick(_y),a=e-s*2.7;i.push({geo:y(6,2.5,2.4),color:r,pos:[t,1.25+o*2.55,a]});for(let c=-2;c<=2;c++)i.push({geo:y(.08,2.3,2.44),color:ar(r,.8),pos:[t+c*1.2,1.25+o*2.55,a]})}return i}function Sy(n,t,e){const s="#d8a531",o=[];for(let r=0;r<26;r+=2)o.push({geo:y(1.3,2,1.3),color:r/2%2?s:"#c08f24",pos:[n,r+1,t]});return o.push({geo:y(1,1,24),color:s,pos:[n+e*.5,26+.5,t-8]}),o.push({geo:y(1,1,7),color:s,pos:[n+e*.5,26+.5,t+6]}),o.push({geo:y(1.6,1.8,2.2),color:"#7a7f86",pos:[n+e*.5,26-.4,t+8.5]}),o.push({geo:y(1.6,1.4,1.6),color:"#e9e4d8",pos:[n-e*.6,26-.8,t+.8]}),o.push({geo:ye(.7,3.5,4),color:s,pos:[n,26+2.75,t],rot:[0,Math.PI/4,0]}),o.push({geo:y(.4,.4,.4),color:"#7a2a24",pos:[n,26+4.7,t],glow:we.red,blink:!0}),o.push({geo:y(.05,8,.05),color:"#2d2d30",pos:[n+e*.5,22,t-16]}),o.push({geo:y(.6,.5,.6),color:"#d8a531",pos:[n+e*.5,26-8.2,t-16]}),o}function wy(n,t,e){const i=[];for(let s=0;s<=e;s+=3)i.push({geo:y(.08,2.2,.08),color:"#8a8f96",pos:[n,1.1,t-s]});for(const s of[.4,1.1,1.8,2.15])i.push({geo:y(.03,s===2.15?.06:.03,e),color:"#9aa0a7",pos:[n,s,t-e/2]});return i}function Ey(n,t,e){return[{geo:K(.12,.16,8,6),color:"#7d8188",pos:[n,4,t]},{geo:y(1.8,.12,.14),color:"#7d8188",pos:[n-e*.8,7.95,t]},{geo:y(.8,.2,.4),color:"#4a4e59",pos:[n-e*1.6,7.85,t]},{geo:y(.6,.06,.3),color:"#ffd9a0",pos:[n-e*1.6,7.73,t],glow:we.sodium}]}function sp(n){const t=n.rng;for(const e of[-1,1]){n.add(e<0?-12:-32,Ey(e*7.4,e<0?-12:-32,e),.5);const i=t.chance(.45);if(i&&n.free(-20,20))xy(n,e);else if(t.chance(.5)){const o=-t.range(0,6),r=t.range(18,32);n.free(o-r/2,r/2)&&n.always(wy(e*8.6,o,r))}let s=-t.range(2,6);for(;s>-36;){const o=t.next(),r=e*(i?14:12);if(o<.45){const a=My(t,r+e*10,s-12,e);n.addSolid(s-12,a,12),s-=26}else if(o<.65){const a=yy(t,r+e*t.range(6,10),s-5);n.addSolid(s-5,a,6),s=Math.min(s-16,la(a)[2]-1)}else o<.85?(n.addSolid(s-3,by(t,r+e*t.range(3,8),s-3),4),s-=10):s-=t.range(5,10)}if(t.chance(.18)){const o=-t.range(14,26),r=e*t.range(26,34);n.addOpen(o,Sy(r,o,e),3,[r-1,r+1,o-1,o+1])}if(t.chance(.15)){const o=n.z(6),r=e*t.range(16,22);n.addOpen(o,[{geo:y(1.2,.5,14),color:"#6d7076",pos:[r,4,o],rot:[.5,0,0]},{geo:y(4,4,4),color:"#8d9196",pos:[r,9,o-7]},{geo:ye(2.2,2.4,4),color:"#8d9196",pos:[r,5.8,o-7],rot:[Math.PI,Math.PI/4,0]}],8)}}}const Ty=["#9fb0c0","#c8b9a6","#a7a39a","#d9d4ca","#8a9bb0","#b5a99a"],Ay=["#3f5466","#4a5a6a","#55606b"],op=["#d9534f","#2a7f62","#e0a33a","#3b6ea8","#8e5c9e"];function Ry(n,t,e,i,s,o){const r=n.pick(Ty),a=n.pick(Ay),c=[{geo:y(i,o,s),color:r,pos:[t,o/2,e]}];for(let u=4.2;u<o-1.5;u+=3.2)c.push({geo:y(i+.06,1.5,s+.06),color:a,pos:[t,u,e]});const h=Math.max(2,Math.round(i/3.5));for(let u=1;u<h;u++)c.push({geo:y(.35,o-4,s+.12),color:r,pos:[t-i/2+u*i/h,o/2+1.5,e]});const l=Math.max(2,Math.round(s/3.5));for(let u=1;u<l;u++)c.push({geo:y(i+.12,o-4,.35),color:r,pos:[t,o/2+1.5,e-s/2+u*s/l]});return c.push({geo:y(i+.1,3,s+.1),color:"#5f6b78",pos:[t,1.5,e]}),c.push({geo:y(i*.5,2.2,s*.5),color:"#8a8f96",pos:[t,o+1.1,e]}),n.chance(.35)&&c.push({geo:K(.12,.12,8,4),color:"#d0d0d0",pos:[t,o+6,e]}),c.push(...Cy(t,e,i,s,o,a)),c}function Cy(n,t,e,i,s,o){const r=new Dn(Math.round(n*31)*7919^Math.round(t*131)^Math.round(s*17)),a=[],c=n-Math.sign(n)*(e/2+.05),h=t+i/2+.05;for(let l=4.2;l<s-1.5;l+=3.2){for(let u=-i/2+1.2;u<i/2-1;u+=2.2)r.chance(.3)&&a.push({geo:y(.06,1.1,1.5),color:o,pos:[c,l,t+u],glow:r.chance(.7)?we.window:we.cool});for(let u=-e/2+1.2;u<e/2-1;u+=2.2)r.chance(.3)&&a.push({geo:y(1.5,1.1,.06),color:o,pos:[n+u,l,h],glow:r.chance(.7)?we.window:we.cool})}return a}function Py(n,t,e,i,s){const o=n.range(6,9),r=10,a=[{geo:y(r,o,s),color:n.pick(["#d8c9b0","#c9b29a","#e3ddd2","#b9a48c"]),pos:[t+i*r/2,o/2,e]}],c=t-i*.05;a.push({geo:y(.1,2.6,s-1.2),color:"#4a6176",pos:[c,1.6,e],glow:we.shop});const h=n.pick(op);for(let l=0;l<4;l++)a.push({geo:y(1.6,.12,(s-1)/4-.05),color:l%2?h:"#f5f1e8",pos:[t-i*.75,3.3,e-(s-1)/2+(l+.5)*((s-1)/4)],rot:[0,0,i*.35]});return a.push({geo:y(.12,.7,s-2),color:h,pos:[c-i*.02,o-1,e]}),a}function rp(n,t,e){return[{geo:K(.4,.4,.05,8),color:"#f0ede6",pos:[n,.75,t]},{geo:K(.05,.05,.75,4),color:"#5a5a5a",pos:[n,.37,t]},{geo:y(.4,.45,.4),color:"#6b4a3a",pos:[n,.23,t-.6]},{geo:y(.4,.45,.4),color:"#6b4a3a",pos:[n,.23,t+.6]},{geo:K(.04,.04,2.3,4),color:"#d8d8d8",pos:[n,1.15,t]},{geo:ye(1.3,.5,8),color:e,pos:[n,2.35,t]}]}function Ly(n,t){return[{geo:K(.08,.11,6,6),color:"#3e4450",pos:[n,3,t]},{geo:y(1.6,.08,.08),color:"#3e4450",pos:[n,5.95,t]},{geo:y(.5,.12,.3),color:"#f4f0e2",pos:[n-.8,5.88,t],glow:we.lamp},{geo:y(.5,.12,.3),color:"#f4f0e2",pos:[n+.8,5.88,t],glow:we.lamp}]}function Iy(n,t,e){return[{geo:y(1.2,.6,1.2),color:"#9a948a",pos:[n,.3,t]},...Wa(e,n,t,.55,"#4f9d55").map(i=>({...i,pos:[i.pos[0],i.pos[1]+.5,i.pos[2]]}))]}function Dy(n,t,e){const i=e*4.8;return[{geo:K(.12,.14,5.6,6),color:"#3a3f48",pos:[n,2.8,t]},{geo:y(Math.abs(n-i),.12,.12),color:"#3a3f48",pos:[(n+i)/2,5.5,t]},{geo:y(.45,1.2,.35),color:"#24272d",pos:[i,4.95,t]},{geo:y(.28,.28,.06),color:"#ff3b30",pos:[i,5.32,t+.19],glow:we.red},{geo:y(.28,.28,.06),color:"#5a4a20",pos:[i,4.96,t+.19]},{geo:y(.28,.28,.06),color:"#1f3d2a",pos:[i,4.6,t+.19]}]}const Uy=["#d9d9d4","#a7adb5","#5d636e","#c4b59a","#8a4040","#3f5f7f"];function Ny(n,t){const e=n.rng,i=[],s=6;for(const o of[-1,1]){i.push(Oe(o*6.4,o*90,t+s,t-s,"#34363d",.013)),i.push(Oe(o*6.4,o*90,t+.08,t-.08,"#e8e4d8",.015));for(const r of[t+2.6,t-2.6]){let a=9+e.range(0,3);for(let c=0;c<e.int(0,2);c++)i.push(...os(tp(e.pick(Uy),{lights:!0}),o*(a+2.1),r,o<0?Math.PI/2:-Math.PI/2)),a+=5.4}}for(const o of[t+s+2,t-s-2])for(let r=0;r<11;r++)i.push({geo:y(.55,.012,2.8),color:"#ece9e0",pos:[-5.5+r*1.1,.006,o]});i.push({geo:y(9,.012,.4),color:"#ece9e0",pos:[0,.006,t+s+4]});for(const o of[-1,1])for(const r of[t+s+.5,t-s-.5])i.push(...Dy(o*7.2,r,o));n.always(i)}function uh(n,t=!1){const e=n.rng,i=-20;t&&(n.clear.push([i-9,i+9]),Ny(n,i));for(const s of[-1,1]){for(const r of[-10,-30])n.add(r,Ly(s*7.1,r),.3);if(e.chance(.6))for(let r=-5;r>-40;r-=e.range(9,14))n.add(r,Iy(s*7.6,r,e),.7);let o=0;for(;o>-40;)if(e.chance(.62)){const r=e.range(10,16),a=e.range(12,18),c=e.range(18,58);n.add(o-r/2,Ry(e,s*(10.5+a/2),o-r/2,a,r,c),r/2)?o-=r+e.range(.5,2):o-=4}else{const r=e.range(8,12);if(n.add(o-r/2,Py(e,s*10.5,o-r/2,s,r),r/2)){if(e.chance(.4))for(let a=0;a<2;a++)n.always(rp(s*e.range(8.2,9.2),o-2-a*3.4,e.pick(op)));o-=r+.5}else o-=4}}}const ky=["#e9c46a","#f4a5a0","#a8d5ba","#9cc3e0","#f1e3c8","#d98c5f","#c9a0dc","#e8d3a3"],Fy=["#a0522d","#8b4a3c","#6e4b3a","#5f6b73","#9a5a44"];function $f(n,t,e,i,s){const o=n.range(7,9),r=n.range(7.5,12),a=t+i*o/2,c=n.pick(ky),h=n.pick(Fy),l=s*n.range(.7,1),u=[{geo:y(o,r,s),color:c,pos:[a,r/2,e]},{geo:Te([[-s/2-.25,0],[s/2+.25,0],[0,l]],o+.4),color:h,pos:[a,r,e]},{geo:Te([[-s/2+.05,0],[s/2-.05,0],[0,l-.3]],.1),color:c,pos:[t-i*.25,r,e]},{geo:y(.2,.3,s+.1),color:"#f2ede2",pos:[t-i*.02,r,e]}],f=t-i*.06,d=Math.floor((r-1)/3);for(let g=0;g<d;g++){const _=1.8+g*3;for(const p of s>5.5?[-s/4,s/4]:[0]){if(g===0&&p<=0){u.push({geo:y(.12,2.2,1.1),color:"#6b3f2a",pos:[f,1.1,e+p]});continue}u.push({geo:y(.12,1.4,.9),color:"#3f4c5a",pos:[f,_,e+p],glow:Ga(f,_,e+p,.55)?we.window:void 0}),u.push({geo:y(.14,.12,1.1),color:"#f2ede2",pos:[f,_+.76,e+p]}),g>0&&n.chance(.5)&&(u.push({geo:y(.35,.25,1),color:"#7a4a2a",pos:[f-i*.15,_-.82,e+p]}),u.push({geo:y(.3,.2,.9),color:n.pick(["#e04f6a","#f08ab0","#f2c14e","#d94f3a"]),pos:[f-i*.15,_-.62,e+p]}))}}return n.chance(.4)&&u.push({geo:y(.8,1.6,.8),color:"#8a6a5a",pos:[a+i*o*.2,r+l*.6,e+s*.15]}),u}function Oy(n,t){return[{geo:K(.08,.12,3.6,6),color:"#2f3338",pos:[n,1.8,t]},{geo:y(.42,.55,.42),color:"#ffe7a8",pos:[n,3.85,t],glow:"#ffc35a"},{geo:ye(.38,.4,4),color:"#2f3338",pos:[n,4.32,t],rot:[0,Math.PI/4,0]},{geo:y(.5,.06,.5),color:"#2f3338",pos:[n,3.57,t]}]}function Gc(n,t){return[{geo:y(.45,.08,1.6),color:"#8a5a3a",pos:[n,.45,t]},{geo:y(.08,.45,1.6),color:"#8a5a3a",pos:[n+.2,.75,t]},{geo:y(.4,.45,.08),color:"#2f3338",pos:[n,.22,t-.7]},{geo:y(.4,.45,.08),color:"#2f3338",pos:[n,.22,t+.7]}]}function By(n,t){return[{geo:K(2.6,2.8,.6,12),color:"#c8bfaf",pos:[n,.3,t]},{geo:K(2.3,2.3,.62,12),color:"#6fb3d2",pos:[n,.32,t]},{geo:K(.3,.45,1.6,8),color:"#c8bfaf",pos:[n,1.1,t]},{geo:K(.9,.6,.25,10),color:"#c8bfaf",pos:[n,1.9,t]},{geo:ye(.5,1.2,8),color:"#cfe9f5",pos:[n,2.6,t]}]}function zy(n,t,e,i){const s="#c8bfaf";return[{geo:y(6,7.5,.8),color:s,pos:[n+e*3,3.75,t+i/2]},{geo:y(6,7.5,.8),color:s,pos:[n+e*3,3.75,t-i/2]},{geo:y(6,1.6,i+.8),color:s,pos:[n+e*3,6.7,t]},{geo:y(6.1,.3,i+1),color:"#a39985",pos:[n+e*3,7.55,t]}]}function Hy(n,t){const i="#4f6a86",s=[];for(const o of[-1,1]){const r=o*6.5,a=o*100;s.push(Oe(r,a,t-6.5,t+6.5,"#4a7f9e",.014)),s.push(Oe(r,a,t+1,t+1.6,"#6f9fba",.016));for(const c of[-1,1])s.push(Oe(r,a,t+c*6.5,t+c*7.6,"#7d7b74",.015)),s.push({geo:y(Math.abs(a-r)-4,.5,.4),color:"#a19f97",pos:[o*53.5,.25,t+c*7.4]});for(let c=t-8.5;c<=t+8.5+.01;c+=1.5)s.push({geo:y(.1,1.1,.1),color:i,pos:[o*6.8,.55,c]});s.push({geo:y(.14,.12,8.5*2),color:i,pos:[o*6.8,1.1,t]}),s.push({geo:y(.08,.08,8.5*2),color:i,pos:[o*6.8,.6,t]}),s.push({geo:y(.5,.3,8.5*2),color:"#8e8e88",pos:[o*6.95,.15,t]});for(const c of[-6,6]){const h=t+c*o;s.push({geo:K(.1,.13,6.5,6),color:"#5b6370",pos:[o*7.3,3.25,h]}),s.push({geo:y(1.6,.12,.12),color:"#5b6370",pos:[o*6.6,6.45,h]}),s.push({geo:y(.6,.16,.36),color:"#3f4550",pos:[o*5.9,6.35,h]}),s.push({geo:y(.5,.05,.28),color:"#fff3d0",pos:[o*5.9,6.25,h],glow:we.lamp})}}s.push({geo:y(18,1.1,5),color:"#3d4650",pos:[36,.55,t+2]}),s.push({geo:y(18.2,.2,5.2),color:"#a5512f",pos:[36,1.15,t+2]}),s.push({geo:y(3.4,2.4,3.6),color:"#e8e4da",pos:[44,2.3,t+2]}),s.push({geo:y(3.6,.2,3.8),color:"#3d4650",pos:[44,3.6,t+2]}),s.push({geo:y(6,2.4,2.4),color:"#4a6f8f",pos:[32,2.45,t+2]}),s.push({geo:y(6,2.4,2.4),color:"#b88a3a",pos:[25.5,2.45,t+2]}),s.push({geo:y(13.2,.03,8.5*2),color:"#8e8e88",pos:[0,.015,t]});for(const o of[-8.5,8.5])s.push({geo:y(13.2,.04,.4),color:"#6d7078",pos:[0,.02,t+o]});n.always(s)}function Gy(n,t){const e="#c9bba4",i="#a8987f",s=[];for(let a=1;a<14;a++){const c=Math.PI*(a+.5)/15;s.push({geo:y(2.1,1.8,3),color:a%2?e:i,pos:[Math.cos(c)*8.4,4+Math.sin(c)*8.4,t],rot:[0,0,c-Math.PI/2]})}for(let a=4.25;a<7.5;a+=.5){const c=4+Math.sqrt(Math.max(0,81-(a+.25)**2))-.4;for(const h of[-1,1])s.push({geo:y(.5,13.5-c,2.9),color:e,pos:[h*a,(c+13.5)/2,t]})}s.push({geo:y(22,3,3),color:e,pos:[0,14.2,t]});for(let a=-10;a<=10;a+=2)s.push({geo:y(1,1,3.1),color:e,pos:[a,16.2,t]});for(const a of[-1,1]){s.push({geo:y(3.4,13,3.2),color:e,pos:[a*8.9,6.5,t]}),s.push({geo:y(5.5,17,5.5),color:e,pos:[a*13.4,8.5,t]}),s.push({geo:ye(4.6,6,4),color:"#8b4a3c",pos:[a*13.4,20,t],rot:[0,Math.PI/4,0]}),s.push({geo:y(1,1.6,.2),color:"#3f4c5a",pos:[a*13.4,12,t+2.8]}),s.push({geo:y(30,8,2.4),color:i,pos:[a*31,4,t]});for(let c=17;c<46;c+=2.2)s.push({geo:y(1.1,1,2.4),color:i,pos:[a*c,8.5,t]})}n.always(s)}function ap(n){const t=n.rng,e=t.chance(.3)?t.chance(.5)?-1:1:0;for(const i of[-1,1]){for(let o=i<0?-6:-19;o>-40;o-=13)n.add(o,Oy(i*7.3,o),.3);if(i===e&&n.free(-20,8)){n.always(By(i*16,-20));for(let r=0;r<3;r++)n.always(rp(i*t.range(9,11),-26+r*6,t.pick(["#c0392b","#2a7f62","#e0a33a"])));n.always(Gc(i*8.2,-6)),n.always(Gc(i*8.2,-34));for(const r of[-2,-38])n.add(r,$f(t,i*9.5,r,i,4.5),2.4);continue}let s=-.2;for(;s>-40;){const o=t.range(4.5,7);if(s-o<-40)break;if(t.chance(.14)&&s-o-4>-40&&n.add(s-2,zy(i*9.5,s-2,i,3.4),2)){s-=4.2;continue}n.add(s-o/2,$f(t,i*9.5,s-o/2,i,o),o/2),s-=o+.05}if(t.chance(.5)){const o=n.z(3);n.add(o,Gc(i*8.1,o),1)}}}const Vy=["#f6e7c8","#fbd9c5","#d9ecf2","#e8f2d0","#f3d4e0","#fff3d6"],Wy=["#c8553d","#8c5a3c","#5b6c8f","#a4493d","#6b7f5a"],Xy=["#ffd23f","#f25f5c","#7bdff2","#b388eb"];function cp(n,t,e,i,s=Vy,o=Wy){const r=n.range(6,9),a=n.range(6,8),c=n.range(3.2,5.5),h=n.pick(s),l=n.pick(o),u=[{geo:y(r,c,a),color:h,pos:[t,c/2,e]},{geo:ye(Math.SQRT1_2,1,4),color:l,pos:[t,c+1.1,e],rot:[0,Math.PI/4,0],scale:[r*1.15,2.2,a*1.15]}],f=t-i*(r/2+.02);for(const d of[-a/4,a/4])u.push({geo:y(.1,1.2,1.2),color:"#9fd3f0",pos:[f,c*.55,e+d],glow:Ga(f,c,e+d,.6)?we.window:void 0});return u.push({geo:y(.12,2,1),color:"#8a5634",pos:[f,1,e]}),n.chance(.5)&&u.push({geo:y(.8,1.6,.8),color:"#9a6b5b",pos:[t+r*.25,c+1.6,e-a*.2]}),u}function qy(n,t,e){return[{geo:K(.1,.13,6.5,6),color:"#6b7080",pos:[n,3.25,t]},{geo:y(2.2,.12,.12),color:"#6b7080",pos:[n-e*1,6.45,t]},{geo:y(.7,.18,.4),color:"#4a4e59",pos:[n-e*2,6.35,t]},{geo:y(.55,.06,.3),color:"#fff6c4",pos:[n-e*2,6.24,t],glow:we.lamp}]}function Yy(n,t,e){return n.chance(.4)?j0(t,e,n.range(.8,1.5)/1.25):Va(n,t,e)}function $y(n,t,e){const i=[{geo:y(.08,.1,e),color:"#ffffff",pos:[n,.8,t-e/2]},{geo:y(.08,.1,e),color:"#ffffff",pos:[n,.45,t-e/2]}];for(let s=0;s<=e;s+=2)i.push({geo:y(.12,1,.12),color:"#ffffff",pos:[n,.5,t-s]});return i}function lp(n){const t=n.rng,e=n.length;for(const i of[-1,1]){for(let r=i<0?-5:-15;r>-e;r-=20)n.add(r,qy(i*7.3,r,i),.5);let s=-t.range(2,8);for(;s>-e+4;){const r=t.next();r<.55?(n.addSolid(s-4,cp(t,i*t.range(17,24),s-4,i),5),s-=t.range(11,15)):r<.68?(n.addSolid(s-2,ep(t,i*t.range(11,13),s-2,Xy),1),s-=10):s-=t.range(6,10)}const o=t.int(3,6);for(let r=0;r<o;r++){const a=n.z();n.addOpen(a,Yy(t,i*t.range(9.5,32),a))}if(t.chance(.5)){const r=-t.range(0,10),a=t.range(16,28);n.free(r-a/2,a/2)&&n.always($y(i*9,r,a))}}}function Kf(n,t){const i=[];for(const s of[-1,1]){const o=s*6.5,r=s*80;i.push(Oe(o,r,t-3.2,t+3.2,"#4d8fb5",.014)),i.push(Oe(o,r,t-3.2,t-2.5,"#6b8fa0",.016)),i.push(Oe(o,r,t+3.2,t+3.9,"#6b5a3e",.013)),i.push(Oe(o,r,t-3.9,t-3.2,"#6b5a3e",.013));for(let c=0;c<9;c++){const h=s*n.rng.range(8,30),l=t+(n.rng.chance(.5)?1:-1)*n.rng.range(2.6,3.6);for(let u=0;u<3;u++)i.push({geo:y(.06,1.3,.06),color:u?"#8a9a4a":"#a7a65a",pos:[h+u*.15,.65,l+u*.1],rot:[0,0,(u-1)*.15]})}const a=s*6.75;for(let c=t-4.2;c<=t+4.2+.01;c+=1.4)i.push({geo:y(.16,1.1,.16),color:"#6e4f33",pos:[a,.55,c]});i.push({geo:y(.12,.12,4.2*2),color:"#8a6646",pos:[a,1.05,t]}),i.push({geo:y(.1,.1,4.2*2),color:"#8a6646",pos:[a,.6,t]}),i.push({geo:y(1.2,.5,1.2),color:"#8f8a80",pos:[s*7.1,.25,t+4.2]}),i.push({geo:y(1.2,.5,1.2),color:"#8f8a80",pos:[s*7.1,.25,t-4.2]})}i.push({geo:y(13.2,.03,4.2*2),color:"#7d6045",pos:[0,.015,t]});for(let s=t-4.2+.25;s<t+4.2;s+=.5)i.push({geo:y(13.2,.012,.05),color:"#5f4630",pos:[0,.032,s]});n.always(i)}function Ky(n,t){const e=n.rng,i=6,s="#b3a894",o=[];for(const r of[-1,1]){const a=r*6.5,c=r*90;o.push(Oe(a,c,t-3,t+3,"#4d8fb5",.014)),o.push(Oe(a,c,t-1.4,t-.9,"#79b3d2",.016)),o.push(Oe(a,c,t+3,t+3.8,"#6b5a3e",.013)),o.push(Oe(a,c,t-3.8,t-3,"#6b5a3e",.013)),o.push({geo:y(.6,1,i*2),color:s,pos:[r*6.9,.5,t]}),o.push({geo:y(.8,.16,i*2+.2),color:"#cfc6b3",pos:[r*6.9,1.08,t]});for(const h of[-i,i])o.push({geo:y(1.1,1.5,1.1),color:"#a0957f",pos:[r*6.9,.75,t+h]});for(let h=0;h<4;h++)o.push(mr(e,r*e.range(9,40),t+e.range(-2,2),e.range(.3,.7),e.pick(["#8d8a80","#9a978c"])));for(let h=0;h<6;h++){const l=r*e.range(8,26),u=t+(e.chance(.5)?1:-1)*e.range(3.2,4);for(let f=0;f<3;f++)o.push({geo:y(.06,1.2,.06),color:f?"#8a9a4a":"#a7a65a",pos:[l+f*.15,.6,u+f*.1],rot:[0,0,(f-1)*.15]})}o.push(...Va(e,r*e.range(11,16),t-7.5,["#6aa457","#7cb862"]))}o.push({geo:y(13.2,.03,i*2),color:"#44464e",pos:[0,.015,t]});for(const r of[-i,i])o.push({geo:y(13.2,.04,.3),color:"#8d8a84",pos:[0,.02,t+r]});n.always(o)}function fh(n){const t=n.rng;for(const e of[-1,1]){const i=t.int(14,20);for(let s=0;s<i;s++){const o=e*(8.6+Math.pow(t.next(),1.4)*38),r=n.z(),a=t.range(.9,1.7);n.add(r,j0(o,r,a,t.pick(["#2f6a3e","#3a7445","#2c5f3a"]),t.pick(["#3f8350","#47895a"])),1.2)}for(let s=0;s<t.int(1,3);s++){const o=n.z();n.add(o,Va(t,e*t.range(9,20),o,["#5d9a4f","#4f8a45","#6aa457"]))}for(let s=0;s<t.int(3,7);s++){const o=n.z(),r=e*t.range(7.2,9.5);n.add(o,[0,1,2].map(a=>({geo:ye(.18,.9,4),color:a?"#5f9a4a":"#4d873e",pos:[r+(a-1)*.3,.3,o+a*.2],rot:[0,0,(a-1)*.9]})),.5)}if(t.chance(.6)){const s=n.z(4),o=e*t.range(8.5,14),r=t.range(3.5,6);n.add(s,[{geo:K(.32,.36,r,7),color:"#7a5a3c",pos:[o,.32,s],rot:[Math.PI/2,t.range(-.5,.5),0]},{geo:K(.3,.3,.05,7),color:"#c8a57a",pos:[o,.32,s+r/2+.015],rot:[Math.PI/2,0,0]}],3)}for(let s=0;s<t.int(1,3);s++){const o=n.z();n.add(o,[mr(t,e*t.range(7.5,18),o,t.range(.4,1.1),t.pick(["#8d8a80","#7b7a72","#9a978c"]))],1)}if(t.chance(.35)){const s=-t.range(0,12),o=t.range(14,24);n.free(s-o/2,o/2)&&n.always(Z0(e*7.6,s,o,"#8a6646"))}}if(t.chance(.25)){const e=t.chance(.5)?-1:1,i=n.z(8),s=e*t.range(16,26),o=t.range(3.5,6),r=[{geo:K(o+.6,o+.6,.02,10),color:"#5b4d3a",pos:[s,.01,i],scale:[1,1,.7]},{geo:K(o,o,.03,10),color:"#4d8fb5",pos:[s,.015,i],scale:[1,1,.7]}];for(let a=0;a<8;a++){const c=t.range(0,Math.PI*2);r.push({geo:y(.06,1.2,.06),color:"#8a9a4a",pos:[s+Math.cos(c)*o,.6,i+Math.sin(c)*o*.7]})}n.add(i,r,o)}}function jy(n){const t=n.range(8,11),e=n.range(10,14),i=4.5,s=n.pick(["#b4473c","#a83f36","#9b4a3a"]);return[{geo:y(t,i,e),color:s,pos:[0,i/2,0]},{geo:Te([[-t/2-.3,0],[-t/2+.6,2],[0,3.2],[t/2-.6,2],[t/2+.3,0]],e+.4),color:"#5a4a44",pos:[0,i,0],rot:[0,Math.PI/2,0]},{geo:y(.12,3.2,3),color:"#f2ead8",pos:[-t/2-.02,1.6,0]},{geo:y(.14,.2,3.2),color:"#f2ead8",pos:[-t/2-.03,1.6,0],rot:[.78,0,0]},{geo:y(.14,.2,3.2),color:"#f2ead8",pos:[-t/2-.03,1.6,0],rot:[-.78,0,0]}]}function jf(n){return[{geo:K(1.8,1.8,n,10),color:"#cfd2d3",pos:[0,n/2,0]},{geo:qe(1.8,1),color:"#b6bcc0",pos:[0,n,0],scale:[1,.6,1]},{geo:K(1.85,1.85,.25,10),color:"#9aa1a6",pos:[0,n*.4,0]}]}function Zy(){return[{geo:y(.12,2.6,.12),color:"#7d5a3a",pos:[0,1.3,0]},{geo:y(.12,.12,1.8),color:"#7d5a3a",pos:[0,2,0]},{geo:y(.3,.8,.9),color:"#4e7ab0",pos:[0,1.85,0]},{geo:qe(.26,0),color:"#e3c565",pos:[0,2.55,0]},{geo:K(.12,.42,.35,8),color:"#8a6a3a",pos:[0,2.85,0]}]}function Jy(){return[{geo:y(1.3,1,2.2),color:"#3f6b3a",pos:[0,1.1,-.3]},{geo:y(1.2,1.2,1.1),color:"#3a4048",pos:[0,2,.6]},{geo:y(1.25,.08,1.2),color:"#3f6b3a",pos:[0,2.65,.6]},{geo:K(.75,.75,.45,10),color:"#24262b",pos:[-.85,.75,.7],rot:[0,0,Math.PI/2]},{geo:K(.75,.75,.45,10),color:"#24262b",pos:[.85,.75,.7],rot:[0,0,Math.PI/2]},{geo:K(.45,.45,.3,8),color:"#24262b",pos:[-.7,.45,-1.2],rot:[0,0,Math.PI/2]},{geo:K(.45,.45,.3,8),color:"#24262b",pos:[.7,.45,-1.2],rot:[0,0,Math.PI/2]}]}const Qy=["#E3C565","#8DBF4E","#8B6B4A","#d8bc5c","#7fb247"];function tb(n,t){const e=[{geo:y(12.8,.012,2.6),color:"#3d3f44",pos:[0,.006,t]}];for(let i=0;i<11;i++)e.push({geo:y(12.8,.03,.1),color:"#9a9ea6",pos:[0,.015,t-1.25+i*.25]});for(const i of[-1,1]){e.push({geo:y(.4,1.7,.4),color:"#6b5038",pos:[i*7.2,.85,t]}),e.push({geo:ye(.32,.3,4),color:"#5a4230",pos:[i*7.2,1.85,t],rot:[0,Math.PI/4,0]});for(let s=7.2;s<18;s+=2.6)e.push({geo:y(.14,1.2,.14),color:"#8a6646",pos:[i*(s+2.6),.6,t]});e.push({geo:y(10.8,.12,.1),color:"#8a6646",pos:[i*12.6,1,t]}),e.push({geo:y(10.8,.12,.1),color:"#8a6646",pos:[i*12.6,.55,t]})}n.always(e)}function hp(n){const t=n.rng,e=n.length,i=[];for(const s of[-1,1]){let o=0;for(;o>-e;){const r=Math.min(t.range(8,22),e+o),a=t.pick(Qy),c=s*8.2,h=s*t.range(45,70);if(n.always([Oe(c,h,o,o-r,a)]),a==="#8B6B4A")for(let l=o-1;l>o-r;l-=1.5)n.always([Oe(c,h,l,l-.3,"#76593c",.014)]);else if(a==="#E3C565"||a==="#d8bc5c")for(let l=0;l<t.int(0,3);l++){const u=o-t.range(1,r-1),f=s*t.range(11,40);i.push([u,[{geo:K(.75,.75,1.3,10),color:"#e2c262",pos:[f,.75,u],rot:[0,0,Math.PI/2]},{geo:K(.55,.55,1.32,10),color:"#c9a646",pos:[f,.75,u],rot:[0,0,Math.PI/2]}],1])}o-=r}if(t.chance(.65)){const r=-t.range(0,6),a=t.range(20,34);n.free(r-a/2,a/2)&&n.always(Z0(s*7.6,r,a,"#9a7a55"))}if(t.chance(.2)){const r=n.z(3);i.push([r,os(Zy(),s*t.range(12,24),r,t.range(-.5,.5)),1])}if(t.chance(.15)){const r=n.z(4);i.push([r,os(Jy(),s*t.range(10,16),r,t.range(-.6,.6)),3])}for(let r=0;r<t.int(0,2);r++){const a=n.z();i.push([a,Va(t,s*t.range(9,30),a,K0),2])}}if(t.chance(.55)){const s=t.chance(.5)?-1:1,o=-t.range(8,30),r=s*t.range(22,30);n.free(o,12)&&(n.alwaysSolid(cp(t,r,o+7,s,["#f4ead6","#efe2c4","#e6e9e2"],["#7a3a32","#5d4c46"])),n.alwaysSolid(os(jy(t),r+s*4,o-8,0)),n.alwaysSolid(os(jf(t.range(9,13)),r+s*14,o-2)),t.chance(.6)&&n.alwaysSolid(os(jf(t.range(8,11)),r+s*17.5,o-4)))}for(const[s,o,r]of i)n.addOpen(s,o,r);if(t.chance(.3)){const s=t.chance(.5)?-1:1,o=n.z(2);n.addOpen(o,Wa(t,s*t.range(8,12),o,.8,"#6d9a45"),1)}}const dh=10,up={forest:{every:10,variants:1},center:{every:3,variants:2},canyon:{every:7,variants:1}},eb={suburb:lp,forest:fh,fields:hp,industrial:sp,center:uh,oldtown:ap,desert:np,canyon:lh,route66:ip};function nb(n,t,e){let i=2166136261;for(const s of`${n}:${t}:${e}`)i=Math.imul(i^s.charCodeAt(0),16777619);return i>>>0}function Vc(n,t,e=0){const i=new Dn(nb(n,t,e));if(t==="special"){if(n==="forest"){const o=new Mn(i,[[-27,-13]]);return Kf(o,-20),fh(o),o.geometry()}if(n==="center"){const o=new Mn(i);return uh(o,!0),o.geometry()}if(n==="canyon"){const o=new Mn(i,[[-25,-15]]);return lh(o,!0),o.geometry()}}if(t==="arrival")switch(n){case"suburb":{const o=new Mn(i,[[-14,1]]);return Ky(o,-5.5),lp(o),o.geometry()}case"forest":{const o=new Mn(i,[[-21,-3]]);return Kf(o,-12),fh(o),o.geometry()}case"fields":{const o=new Mn(i,[[-15,-5]]);return tb(o,-10),hp(o),o.geometry()}case"industrial":{const o=new Mn(i,[[-19,1]]);return Hy(o,-8),sp(o),o.geometry()}case"center":{const o=new Mn(i,[[-20,0]]);return o.always(Ta(-3)),uh(o),o.geometry()}case"oldtown":{const o=new Mn(i,[[-17,-7]]);return Gy(o,-12),ap(o),o.geometry()}case"desert":{const o=new Mn(i,[[-6,1]]);return hy(o,-3),np(o),o.geometry()}case"canyon":{const o=new Mn(i,[[-25,-1]]);return uy(o,-4,-22),lh(o),o.geometry()}case"route66":{const o=new Mn(i,[[-20,0]]);return vy(o,-3),ip(o),o.geometry()}}const s=new Mn(i);return eb[n](s),s.geometry()}const be=24,se=6.5,de=32,Qt=O.laneWidth*O.laneCount/2,ne=Qt+O.shoulderWidth,ph=[-3,0,O.laneWidth],Co=Math.PI*2;class ib{constructor(t){this.rng=t,this.c=document.createElement("canvas"),this.H=be*de,this.c.width=se*2*de,this.c.height=this.H,this.g=this.c.getContext("2d")}X(t){return(t+se)*de}band(t,e,i){this.g.fillStyle=i,this.g.fillRect(this.X(t),0,this.X(e)-this.X(t),this.H)}rect(t,e,i,s,o){const r=this.g;r.fillStyle=o;for(const a of[0,-be,be]){const c=(i+a)*de,h=(s+a)*de;h<0||c>this.H||r.fillRect(this.X(t),c,this.X(e)-this.X(t),h-c)}}sides(t,e,i){this.band(-e,-t,i),this.band(t,e,i)}speckle(t,e,i,s,o=2,r=2){const a=this.g,c=this.rng;for(let h=0;h<i;h++){a.fillStyle=c.pick(s);const l=c.range(o,r);a.fillRect(this.X(t)+c.next()*(this.X(e)-this.X(t)-l),c.next()*(this.H-l),l,l)}}dashes(t,e,i,s,o,r=0){for(let a=r;a<be+r;a+=s+o)this.rect(t-e/2/de,t+e/2/de,a,a+s,i)}wobble(t){const e=this.rng,i=e.int(1,3),s=e.int(4,9),o=e.next()*Co,r=e.next()*Co;return a=>t*(.7*Math.sin(Co*i*a/be+o)+.3*Math.sin(Co*s*a/be+r))}verge(t,e,i){const s=this.g;for(const o of[-1,1]){const r=this.wobble(e);s.fillStyle=i,s.beginPath(),s.moveTo(this.X(o*se),0);for(let a=0;a<=be+1e-6;a+=.25)s.lineTo(this.X(o*(t+r(a))),a*de);s.lineTo(this.X(o*se),this.H),s.closePath(),s.fill()}}ruts(t,e=.38,i=.75){const s=this.g;s.strokeStyle=t,s.lineWidth=e*de,s.lineCap="round";for(const o of ph)for(const r of[-1,1]){const a=this.wobble(.06);s.beginPath();for(let c=-1;c<=be+1;c+=.5){const h=this.X(o+r*i+a(c));c===-1?s.moveTo(h,c*de):s.lineTo(h,c*de)}s.stroke()}}cracks(t,e,i,s,o=1.5){const r=this.g,a=this.rng;r.strokeStyle=s,r.lineWidth=o,r.lineCap="round";for(let c=0;c<i;c++){const h=[];let l=a.range(t,e),u=a.range(0,be),f=a.range(0,Co);for(let d=0;d<a.int(5,11);d++)h.push([l,u]),f+=a.range(-.7,.7),l=Math.min(e,Math.max(t,l+Math.cos(f)*.35)),u+=Math.sin(f)*.35;for(const d of[0,-be,be])r.beginPath(),h.forEach(([g,_],p)=>p?r.lineTo(this.X(g),(_+d)*de):r.moveTo(this.X(g),(_+d)*de)),r.stroke()}}clip(t,e,i){this.g.save(),this.g.beginPath(),this.g.rect(this.X(t),0,this.X(e)-this.X(t),this.H),this.g.clip(),i(),this.g.restore()}}function sb(n,t,e,i,s){const r=n.g,a=n.H/16,c=new ht;n.clip(t,e,()=>{r.fillStyle=s,r.fillRect(n.X(t),0,n.X(e)-n.X(t),n.H);const h=Math.floor(n.X(t)/16)-2,l=Math.ceil(n.X(e)/16)+1;for(let u=-1;u<a;u++)for(let f=h;f<=l;f++){const d=((f-u)%4+4)%4;let g=0,_=0;if(d===0)[g,_]=[2,1];else if(d===3)[g,_]=[1,2];else continue;c.copy(i).multiplyScalar(.94+n.rng.next()*.1),r.fillStyle=`#${c.getHexString()}`;for(const p of[0,-n.H,n.H])r.fillRect(f*16+1,u*16+1+p,g*16-2,_*16-2)}})}const ob={suburb(n){n.band(-se,se,"#7BC67E"),n.band(-ne,ne,"#5c6068"),n.band(-Qt,Qt,"#3A3D45"),n.speckle(-Qt,Qt,2700,["rgba(255,255,255,0.05)","rgba(0,0,0,0.08)"]),n.rect(-Qt+3/de,-Qt+8/de,0,be,"#f2efe6"),n.rect(Qt-8/de,Qt-3/de,0,be,"#f2efe6");for(const t of[-1.5,1.5])n.dashes(t,6,"#f2efe6",3,5);for(let t=0;t<be;t++){const e=t%2?"#e84a4a":"#f6f6f6";n.rect(-ne-.4,-ne,t,t+1,e),n.rect(ne,ne+.4,t,t+1,e)}},forest(n){n.band(-se,se,"#5E4E3D"),n.speckle(-5.5,5.5,900,["rgba(255,240,220,0.06)","rgba(0,0,0,0.07)"],3,6),n.ruts("#4a3d30"),n.verge(5,.25,"#4F7A45"),n.speckle(5.3,se,140,["#3f6a38","#5c8a50"],3,7),n.speckle(-se,-5.3,140,["#3f6a38","#5c8a50"],3,7),n.speckle(4.9,5.4,36,["#8d8a80","#a19d92"],5,9),n.speckle(-5.4,-4.9,36,["#8d8a80","#a19d92"],5,9)},fields(n){n.band(-se,se,"#A39E93");for(const t of ph)n.band(t-1,t+1,"#96918a"),n.band(t-.8,t+.8,"#8C877D");n.speckle(-5.3,5.3,3200,["rgba(255,255,255,0.12)","rgba(0,0,0,0.1)","rgba(120,100,80,0.12)"],2,4),n.verge(5.1,.2,"#86b04c"),n.speckle(5.4,se,120,["#76a043","#9cc45c"],3,6),n.speckle(-se,-5.4,120,["#76a043","#9cc45c"],3,6)},industrial(n){n.band(-se,se,"#6F6F6A"),n.band(-ne,ne,"#9A9A94");for(let t=0;t<7;t++){const e=n.rng.range(-5.5,3.5),i=n.rng.range(0,be);n.rect(e,e+n.rng.range(.8,2),i,i+n.rng.range(.8,2.5),"#a3a39c")}n.speckle(-ne,ne,1600,["rgba(255,255,255,0.07)","rgba(0,0,0,0.06)"],2,4),n.cracks(-ne,ne,14,"#878781");for(let t=0;t<be;t+=6)n.rect(-ne,ne,t,t+2/de,"#7f7f7a");n.sides(Qt+.3,Qt+.3+2/de,"#7f7f7a"),n.sides(Qt-.25,Qt-.1,"#E8C547");for(const t of[-1.5,1.5])n.dashes(t,6,"#E8C547",3,5);n.sides(ne,ne+.4,"#b9b9b2")},center(n){n.band(-se,se,"#d8d3c9"),n.band(-ne,ne,"#34363d"),n.band(-Qt,Qt,"#2F3138"),n.speckle(-ne,ne,1800,["rgba(255,255,255,0.04)","rgba(0,0,0,0.06)"]),n.rect(-Qt+3/de,-Qt+9/de,0,be,"#f7f5ef"),n.rect(Qt-9/de,Qt-3/de,0,be,"#f7f5ef");for(const t of[-1.5,1.5])n.dashes(t,7,"#f7f5ef",3,5);n.sides(ne-.25,ne,"#4a4c52"),n.sides(ne,ne+.1,"#b3aea4"),n.speckle(ne+.1,se,200,["rgba(0,0,0,0.05)"],3,5),n.speckle(-se,-ne-.1,200,["rgba(0,0,0,0.05)"],3,5)},oldtown(n){n.band(-se,se,"#D6CBB8"),sb(n,-ne,ne,new ht("#5A4D41"),"#4d4137");for(const t of[-1.5,1.5])n.band(t-.14,t+.14,"#C8BFAF");n.sides(Qt-.18,Qt+.18,"#C8BFAF"),n.sides(ne,ne+.5,"#bdb3a2");for(let t=0;t<be;t+=1.2)n.rect(ne,ne+.5,t,t+1/de,"#a39985"),n.rect(-ne-.5,-ne,t,t+1/de,"#a39985")},desert(n){n.band(-se,se,"#C9A877"),n.speckle(-5.5,5.5,1500,["rgba(255,250,235,0.1)","rgba(110,80,40,0.08)"],2,5),n.ruts("#A88A5E",.42),n.verge(5,.35,"#d8bb88"),n.verge(5.6,.3,"#E3C896"),n.speckle(4.6,6.4,50,["#a8865a","#8f7250"],3,6),n.speckle(-6.4,-4.6,50,["#a8865a","#8f7250"],3,6)},canyon(n){n.band(-se,se,"#724630"),n.speckle(-5.5,5.5,1300,["rgba(255,220,190,0.07)","rgba(40,15,0,0.09)"],3,6),n.ruts("#5c3826",.42),n.verge(5.1,.3,"#B5704A"),n.speckle(5.2,se,70,["#9c5f3e","#c98560"],4,9),n.speckle(-se,-5.2,70,["#9c5f3e","#c98560"],4,9)},route66(n){n.band(-se,se,"#a8946c"),n.speckle(Qt,se,500,["#97845e","#b8a57c"],2,5),n.speckle(-se,-Qt,500,["#97845e","#b8a57c"],2,5),n.verge(6.2,.2,"#C8B184"),n.band(-Qt-.1,Qt+.1,"#4A4644");for(const t of ph)for(const e of[-1,1])n.band(t+e*.75-.35,t+e*.75+.35,"#514c49");n.speckle(-Qt,Qt,1600,["rgba(255,255,255,0.05)","rgba(0,0,0,0.07)"],2,3),n.cracks(-Qt,Qt,10,"#433f3d",2.5),n.cracks(-Qt,Qt,18,"#454140",1.2),n.g.globalAlpha=.75,n.rect(-Qt+3/de,-Qt+8/de,0,be,"#d8d0bc"),n.rect(Qt-8/de,Qt-3/de,0,be,"#d8d0bc");for(const t of[-1.5,1.5])n.dashes(t,6,"#cdb05c",3,5,1);n.g.globalAlpha=1}};function $h(n){const t=xs(new vs(n));return t.colorSpace=Ve,t}function rb(n){const t=new ib(new Dn(24301+n.length*977+n.charCodeAt(0)*13));ob[n](t);const e=$h(t.c);return e.wrapT=Bi,e.anisotropy=4,e}function ab(){const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,64,64),t.fillStyle="#f0f0f0",t.fillRect(0,0,64,32);const e=$h(n);return e.wrapS=e.wrapT=Bi,e}class cb{constructor(){this.key=-1,this.mid=new ht;const t=document.createElement("canvas");t.width=2,t.height=256,this.g=t.getContext("2d"),this.texture=$h(t)}set(t,e){const i=t.getHex()*31+e.getHex();if(i===this.key)return;this.key=i,this.mid.copy(t).lerp(e,.55);const s=this.g.createLinearGradient(0,0,0,256);s.addColorStop(0,`#${t.getHexString()}`),s.addColorStop(.75,`#${this.mid.getHexString()}`),s.addColorStop(1,`#${e.getHexString()}`),this.g.fillStyle=s,this.g.fillRect(0,0,2,256),this.texture.needsUpdate=!0}}class lb{constructor(t){var i;this.id=t,this.normal=new Array(dh),this.special=new Array(((i=up[t])==null?void 0:i.variants)??0);const e=[()=>this.getRoad(),()=>this.getHorizon()];for(let s=0;s<dh;s++)e.push(()=>this.getNormal(s));e.push(()=>this.getArrival());for(let s=0;s<this.special.length;s++)e.push(()=>this.getSpecial(s));this.jobs=e}getRoad(){return this.road??(this.road=rb(this.id))}getHorizon(){return this.horizon??(this.horizon=new YM(ih(this.id)))}getNormal(t){var e;return(e=this.normal)[t]??(e[t]=Vc(this.id,"normal",t))}getArrival(){return this.arrival??(this.arrival=Vc(this.id,"arrival"))}getSpecial(t){var e;return(e=this.special)[t]??(e[t]=Vc(this.id,"special",t))}dispose(t){var e;for(const i of[...this.normal,...this.special,this.arrival])i==null||i.dispose();(e=this.road)==null||e.dispose(),this.horizon&&(t.detach(this.horizon),this.horizon.dispose())}}class hb{constructor(t){this.horizon=t,this.sets=new Map,this.wanted=[]}get(t){let e=this.sets.get(t);return e||(e=new lb(t),this.sets.set(t,e)),e}want(t){this.wanted=t}step(){for(const t of this.wanted){const e=this.get(t).jobs.shift();if(e){e();return}}}release(){for(const[t,e]of this.sets)this.wanted.includes(t)||(e.dispose(this.horizon),this.sets.delete(t))}flush(){for(const t of this.wanted){const e=this.get(t);for(;e.jobs.length;)e.jobs.shift()()}}}const ub=[{id:"silver",hex:"#d4d9e1",kind:1,flakes:[.3,1.2],specular:"#ffffff",shininess:90},{id:"gold",hex:"#f0b52a",kind:1,flakes:[.3,1.2],specular:"#fff0b0",shininess:90},{id:"copper",hex:"#d7804a",kind:1,flakes:[.3,1.1],specular:"#ffd2b0",shininess:90},{id:"diamond",hex:"#eef8ff",kind:2,flakes:[.6,2.5],specular:"#ffffff",shininess:140},{id:"ruby",hex:"#d0102e",kind:4,flakes:[.25,1.6],specular:"#ffd6dc",shininess:140},{id:"emerald",hex:"#0fa95a",kind:4,flakes:[.25,1.6],specular:"#d6ffe6",shininess:140},{id:"amethyst",hex:"#9440e0",kind:4,flakes:[.25,1.6],specular:"#ecd8ff",shininess:140},{id:"opal",hex:"#22283a",kind:3,flakes:[.3,1.2],specular:"#ffffff",shininess:110}],us={uEnvSky:{value:new ht},uEnvHorizon:{value:new ht},uEnvGround:{value:new ht}};function fp(){us.uEnvSky.value.set("#7f93ad"),us.uEnvHorizon.value.set("#ffffff"),us.uEnvGround.value.set("#2e3542")}function fb(n,t,e){us.uEnvSky.value.lerpColors(n,t,.35),us.uEnvHorizon.value.lerpColors(t,db,.5),us.uEnvGround.value.copy(e).multiplyScalar(.55)}const db=new ht("#ffffff");fp();const Kh={value:0},pb=`
uniform float uFinish;
uniform vec2 uFlakes;
uniform float uFinishTime;
uniform vec3 uEnvSky;
uniform vec3 uEnvHorizon;
uniform vec3 uEnvGround;
float fHash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
vec3 fHash3( vec2 p ) { return fract( sin( vec3( dot( p, vec2( 127.1, 311.7 ) ), dot( p, vec2( 269.5, 183.3 ) ), dot( p, vec2( 419.2, 371.9 ) ) ) ) * 43758.5453 ); }
vec3 fHue( float h ) { return clamp( abs( mod( h * 6.0 + vec3( 0.0, 4.0, 2.0 ), 6.0 ) - 3.0 ) - 1.0, 0.0, 1.0 ); }
vec3 fEnv( float y ) {
  // The chase / turntable camera looks down, so side panels reflect y ≈ -0.3: keep the bright band there.
  vec3 c = mix( uEnvGround, uEnvSky, smoothstep( -0.55, 0.1, y ) );
  return mix( c, uEnvHorizon, exp( -pow( ( y + 0.25 ) * 9.0, 2.0 ) ) );
}
float fNoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( fHash( i ), fHash( i + vec2( 1.0, 0.0 ) ), f.x ), mix( fHash( i + vec2( 0.0, 1.0 ) ), fHash( i + vec2( 1.0, 1.0 ) ), f.x ), f.y );
}
`,mb=`
#ifdef USE_MAP
if ( uFinish > 0.5 ) {
  float fMask = livery.a * ( 1.0 - texture2D( accentMap, vMapUv ).r );
  vec3 V = normalize( vViewPosition );
  vec3 Rw = inverseTransformDirection( reflect( -V, normal ), viewMatrix );
  float NdV = clamp( dot( normal, V ), 0.0, 1.0 );
  float fres = pow( 1.0 - NdV, 3.0 );
  vec3 base = diffuseColor.rgb;
  vec3 lit = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
  vec3 fin;
  if ( uFinish < 1.5 ) {
    // Metal: dim diffuse, tinted reflection, white-ish highlight.
    // Mostly grey reflection, so a blue sky doesn't turn gold olive.
    vec3 env = fEnv( Rw.y );
    vec3 refl = mix( vec3( dot( env, vec3( 0.3, 0.59, 0.11 ) ) ), env, 0.35 );
    fin = lit * 0.15 + base * refl * 1.15 + reflectedLight.directSpecular * 1.5;
  } else if ( uFinish < 2.5 ) {
    // Diamond: icy glass; every flat face throws its own rainbow tint, which turns with the view.
    vec3 Nw = inverseTransformDirection( normal, viewMatrix );
    float faceSeed = fHash( floor( Nw.xz * 6.0 ) + floor( Nw.y * 6.0 ) * 7.0 );
    vec3 rainbow = fHue( fract( faceSeed + Rw.y * 0.9 + Rw.x * 0.7 ) );
    fin = lit * 0.4 + base * fEnv( Rw.y ) * 0.45 + rainbow * ( 0.35 + 0.8 * fres ) + reflectedLight.directSpecular;
  } else if ( uFinish < 3.5 ) {
    // Dark opal: near-black metal; vivid patches of color drift with the view angle.
    float blob = fNoise( vMapUv * 9.0 ) * 0.65 + fNoise( vMapUv * 23.0 + 5.0 ) * 0.35;
    // Mostly green-blue-violet, like black opal; the hue walks as the view turns.
    vec3 play = fHue( 0.3 + 0.55 * fract( blob * 1.2 + NdV * 0.9 + Rw.x * 0.4 + Rw.y * 0.3 ) );
    float amount = smoothstep( 0.5, 0.85, blob );
    vec3 env = fEnv( Rw.y );
    vec3 refl = vec3( dot( env, vec3( 0.3, 0.59, 0.11 ) ) );
    fin = lit * base * 0.3 + base * refl * 0.9 + play * ( 0.4 * amount + 0.15 * fres ) + reflectedLight.directSpecular * 1.5;
  } else {
    // Colored gem (ruby, emerald, amethyst): deep body; each flat face flashes bright in turn as the view changes.
    vec3 Nw = inverseTransformDirection( normal, viewMatrix );
    float faceSeed = fHash( floor( Nw.xz * 6.0 ) + floor( Nw.y * 6.0 ) * 7.0 );
    float flash = pow( fract( faceSeed + Rw.y * 0.9 + Rw.x * 0.7 ), 4.0 );
    fin = lit * base * 0.6 + base * fEnv( Rw.y ) * 0.35 + base * flash * 1.4 + mix( base, vec3( 1.0 ), 0.5 ) * fres * 0.6 + reflectedLight.directSpecular;
  }
  // Flakes: livery-UV cells with a tilted normal, lit by the directional lights.
  vec2 fc = floor( vMapUv * 200.0 );
  vec3 rnd = fHash3( fc );
  if ( rnd.z < uFlakes.x ) {
    vec3 fn = normalize( normal + ( fHash3( fc + 17.0 ) - 0.5 ) * 0.8 );
    float sharp = ( uFinish > 1.5 && uFinish < 2.5 ) || uFinish > 3.5 ? 40.0 : 120.0;
    float glint = 0.0;
    #if NUM_DIR_LIGHTS > 0
      for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
        vec3 H = normalize( directionalLights[ i ].direction + V );
        glint += pow( max( dot( fn, H ), 0.0 ), sharp );
      }
    #endif
    glint *= 0.6 + 0.4 * sin( uFinishTime * 6.0 + rnd.x * 40.0 );
    vec3 flakeColor = uFinish > 3.5 ? base * 1.8 + 0.15 : uFinish > 1.5 ? fHue( rnd.y ) * 0.6 + 0.6 : base + 0.25;
    fin += flakeColor * glint * uFlakes.y;
  }
  outgoingLight = mix( outgoingLight, fin + totalEmissiveRadiance, fMask );
}
#endif
`;function gb(n){const t={specular:n.specular.clone(),shininess:n.shininess},e={uFinish:{value:0},uFlakes:{value:new it},uFinishTime:Kh,...us},i=n.onBeforeCompile;n.onBeforeCompile=(r,a)=>{i.call(n,r,a),Object.assign(r.uniforms,e),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${pb}`).replace("#include <envmap_fragment>",`#include <envmap_fragment>
${mb}`)};const s=n.customProgramCacheKey.bind(n);n.customProgramCacheKey=()=>`${s()}|finish`,n.needsUpdate=!0;let o=null;return{get id(){return o},set(r){o=r;const a=ub.find(c=>c.id===r);if(!a){e.uFinish.value=0,n.specular.copy(t.specular),n.shininess=t.shininess;return}e.uFinish.value=a.kind,e.uFlakes.value.set(...a.flakes),n.color.set(a.hex),n.specular.set(a.specular),n.shininess=a.shininess}}}class vb{constructor(){this.group=new Ke,this.canvas=document.createElement("canvas"),this.key="";const t=[];for(const e of[-1,1])t.push({geo:y(.45,10.6,.45),color:"#8a8f96",pos:[e*8.6,5.3,0]}),t.push({geo:y(.9,.4,.9),color:"#6d7076",pos:[e*8.6,.2,0]});t.push({geo:y(17.6,.45,.45),color:"#8a8f96",pos:[0,10.3,0]}),t.push({geo:y(17.6,.3,.3),color:"#8a8f96",pos:[0,9.6,-.4]}),t.push({geo:y(7.8,2.5,.16),color:"#d8dadc",pos:[0,9.25,-.05]}),this.group.add(new Xt(De(t),as)),this.canvas.width=512,this.canvas.height=160,this.texture=xs(new vs(this.canvas)),this.texture.colorSpace=Ve,this.texture.anisotropy=4,this.board=new Xt(new Un(7.6,2.3),new Yn({map:this.texture})),this.board.position.set(0,9.25,.04),this.group.add(this.board)}setText(t,e){const i=`${t}|${e}`;if(i===this.key)return;this.key=i;const s=this.canvas.getContext("2d"),{width:o,height:r}=this.canvas;s.fillStyle=e,s.fillRect(0,0,o,r),s.strokeStyle="#f4f2ea",s.lineWidth=8,s.strokeRect(12,12,o-24,r-24),s.fillStyle="#f4f2ea",s.textAlign="center",s.textBaseline="middle";let a=76;do s.font=`${a}px "Lilita One", system-ui, sans-serif`,a-=4;while(s.measureText(t).width>o-70&&a>30);s.fillText(t,o/2,r/2+4),this.texture.needsUpdate=!0}}const ha=30,mh=O.drawDistance+20,Qi=mh+ha,Zf=6,Po=O.chunkLength,_b=1.6,xb=2,Jf=12,Mb={center:"#1f6f43",route66:"#6b4226"},yb={route66:"ROUTE 2137"};function ua(){return{skyTop:new ht,skyBottom:new ht,fog:new ht,ground:new ht,hemi:new ht,sun:new ht,cloud:new ht,light:1}}function jh(n){const t=ua();return t.skyTop.set(n.skyTop),t.skyBottom.set(n.skyBottom),t.fog.set(n.fog),t.ground.set(n.ground),t.hemi.set(n.hemi),t.sun.set(n.sun),t.cloud.set(n.cloud),t.light=n.light,t}const Qf=new Map;function Kr(n,t=!1){const e=t?`${n.id}:night`:n.id;let i=Qf.get(e);return i||(i=jh(t?n.night:n.palette),Qf.set(e,i)),i}function Lo(n,t,e,i){n.skyTop.lerpColors(t.skyTop,e.skyTop,i),n.skyBottom.lerpColors(t.skyBottom,e.skyBottom,i),n.fog.lerpColors(t.fog,e.fog,i),n.ground.lerpColors(t.ground,e.ground,i),n.hemi.lerpColors(t.hemi,e.hemi,i),n.sun.lerpColors(t.sun,e.sun,i),n.cloud.lerpColors(t.cloud,e.cloud,i),n.light=t.light+(e.light-t.light)*i}const bb=jh({skyTop:"#3E4F8E",skyBottom:"#FF9A5C",fog:"#EFA27E",ground:"#000000",hemi:"#FFC9A2",sun:"#FF9448",light:.85,cloud:"#FFA58E"}),Sb=jh({skyTop:"#5A70A8",skyBottom:"#FFC2A6",fog:"#EFC2B4",ground:"#000000",hemi:"#FFDAD2",sun:"#FFBE8C",light:.85,cloud:"#FFC6C8"}),wb=new ht("#3A4874"),Eb=new ht("#D29A8A"),Tb=new ht("#D4AEB6"),Ab=new ht("#ffffff"),Rb=new P(-6,12,5),Cb=new P(12,3,-20),Pb=new P(-12,3,-20),Lb=new P(-8,14,9),td=new P,Ib=new ht;function Wc(n,t){return(Math.imul(n^t,2654435761)>>>0)%10007/10007}const Xc=(n,t)=>(n%t+t)%t;class Db{constructor(t,e){this.lights=e,this.group=new Ke,this.horizon=new KM,this.seam={map2:{value:null},seamZ:{value:-1e6}},this.chunks=[],this.sky=new cb,this.blend={from:on(0),to:on(0),t:1,seam:0},this.pal=ua(),this.dayPal=ua(),this.nightPal=ua(),this.hzMul=new ht,this.day=wa(8),this.hourOverride=null,this.fireflies=new DM,this.clock=0,this.gantry=new vb,this.wantLeg=-1,this.wantOffset=0,this.offset=0,this.k0=0,this.assets=new hb(this.horizon),t.background=this.sky.texture,this.fog=new kh("#ffffff",O.fogNear,O.fogFar),t.fog=this.fog;const i=this.assets.get("suburb").getRoad();this.seam.map2.value=i,this.roadMat=new Yn({map:i}),this.roadMat.onBeforeCompile=c=>{c.uniforms.map2=this.seam.map2,c.uniforms.seamZ=this.seam.seamZ,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying float vWorldZ;`).replace("#include <project_vertex>",`#include <project_vertex>
vWorldZ = (modelMatrix * vec4(transformed, 1.0)).z;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D map2;
uniform float seamZ;
varying float vWorldZ;`).replace("#include <map_fragment>",`vec4 surfaceA = texture2D(map, vMapUv);
          vec4 surfaceB = texture2D(map2, vMapUv);
          diffuseColor *= vWorldZ > seamZ ? surfaceA : surfaceB;`)},this.roadMat.customProgramCacheKey=()=>"twoSurfaceRoad";const s=new Xt(new Un(se*2,Qi),this.roadMat);s.rotation.x=-Math.PI/2,s.position.z=ha-Qi/2,this.group.add(s),this.groundTex=ab(),this.groundTex.repeat.set(1,Qi/Zf),this.groundMat=new Yn({map:this.groundTex});const o=new Xt(new Un(400,Qi),this.groundMat);o.rotation.x=-Math.PI/2,o.position.set(0,-.02,ha-Qi/2),this.group.add(o);const r=new Ue,a=Math.ceil(Qi/Po)+1;for(let c=0;c<a;c++){const h=new Xt(r,as);this.chunks.push(h),this.group.add(h)}this.gantry.group.visible=!1,this.group.add(this.gantry.group,this.horizon.root,this.fireflies.points),t.add(this.group)}prepare(t){this.assets.want(t),this.assets.flush()}update(t,e,i,s){const o=t;this.offset=e,this.k0=Pn(0,e),this.clock+=i,wa(this.hourOverride??rh(o,e),this.day);const r=Pn(o,e);this.updateWanted(r);const a=Pn(o-ha,e),c=Jn(a+1,e),h=this.assets.get(on(a).id).getRoad(),l=c<o+mh?this.assets.get(on(a+1).id).getRoad():h;this.roadMat.map!==h&&(this.roadMat.map=h),h.repeat.set(1,Qi/be),h.offset.y=o/be%1,this.seam.map2.value=l,this.seam.seamZ.value=o-c,this.groundTex.offset.y=o/Zf%1,Kh.value+=i,this.updatePalette(o),this.updateChunks(o),this.updateLandmarks(o);const u=this.blend;this.horizon.show(this.assets.get(u.from.id).getHorizon(),this.assets.get(u.to.id).getHorizon(),u.t),this.horizon.update(s,i,this.pal.cloud,this.day);const f=(u.from.id==="forest"?1-u.t:0)+(u.to.id==="forest"?u.t:0);this.fireflies.update(o,this.clock,this.day.night*f),this.assets.step()}updateWanted(t){if(t===this.wantLeg&&this.offset===this.wantOffset)return;const e=this.wantLeg<0;this.wantLeg=t,this.wantOffset=this.offset;const i=[on(t).id,on(t+1).id];t-1>=this.k0&&i.push(on(t-1).id),this.assets.want(i),e||this.assets.release()}updatePalette(t){const e=yM(t,this.offset,this.blend),{night:i,twilight:s,dawn:o}=this.day,r=this.pal;Lo(this.dayPal,Kr(e.from),Kr(e.to),e.t),i>0?(Lo(this.nightPal,Kr(e.from,!0),Kr(e.to,!0),e.t),Lo(r,this.dayPal,this.nightPal,i)):Lo(r,this.dayPal,this.dayPal,0);const a=s*.85;if(a>0){const c=o?Sb:bb,h=r.light,l=Ib.copy(r.ground);Lo(r,r,c,a),r.ground.copy(l).lerp(c.sun,a*.15),r.light=h*(1-.15*a)}this.sky.set(r.skyTop,r.skyBottom),fb(r.skyTop,r.skyBottom,r.ground),this.fog.color.copy(r.fog),this.groundMat.color.copy(r.ground),this.lights.hemi.color.copy(r.hemi),this.lights.hemi.groundColor.copy(r.ground).multiplyScalar(.75),this.lights.hemi.intensity=_b*r.light,this.lights.sun.color.copy(r.sun),this.lights.sun.intensity=xb*r.light,td.copy(Rb).lerp(o?Pb:Cb,Math.min(1,s*1.2)).lerp(Lb,i),this.lights.sun.position.copy(td),this.hzMul.copy(Ab).lerp(o?Tb:Eb,a*.8).lerp(wb,i),qM(this.hzMul,r.fog,i*.7+a*.3,i),hs.uNight.value=i,hs.uBlink.value=Math.sin(this.clock*Math.PI*2*.9)>0?1:.08}updateChunks(t){const e=Math.floor(t/Po),i=this.chunks.length;for(let s=0;s<i;s++){const o=e-1+s,r=this.chunks[Xc(o,i)];r.geometry=this.pick(o),r.position.z=t-o*Po}}pick(t){const e=this.offset,i=t*Po,s=Pn(i,e),o=Jn(s,e),r=Jn(s+1,e);if(i===o&&s>this.k0)return this.assets.get(on(s).id).getArrival();const a=O.biomeBlend,c=i+Po/2;let h=s;!sh(s+1)&&c>r-a?Wc(t,40503)<(c-(r-a))/(2*a)&&(h=s+1):s>this.k0&&!sh(s)&&c<o+a&&Wc(t,40503)>=(c-(o-a))/(2*a)&&(h=s-1);const l=on(h),u=this.assets.get(l.id),f=up[l.id];return f&&Xc(t,f.every)===0?u.getSpecial(Xc(Math.floor(t/f.every),f.variants)):u.getNormal(Math.floor(Wc(t,20973)*dh))}updateLandmarks(t){const e=this.offset;this.gantry.group.visible=!1;const i=Pn(t-40-Jf,e);for(let s=i;s<=i+1;s++){const o=on(s);if(s<=this.k0||o.arrival!=="gantry")continue;const r=Jn(s,e)+Jf;r<t-40||r>t+mh||(this.gantry.setText(yb[o.id]??gt(o.name),Mb[o.id]??"#1f6f43"),this.gantry.group.position.z=t-r,this.gantry.group.visible=!0)}}}const gr={cone:{kind:"cone",height:"low",width:.8,length:.8,smashable:!0,moving:!1,tierFrom:1,scatter:{dx:.35,yaw:.5}},crate:{kind:"crate",height:"low",width:1.5,length:1.3,smashable:!0,moving:!1,tierFrom:1,scatter:{dx:.3,yaw:.25}},barrier:{kind:"barrier",height:"low",width:2.8,length:.5,smashable:!1,moving:!1,tierFrom:1,scatter:{dx:0,yaw:.07}},parked:{kind:"parked",height:"tall",width:2,length:4.5,smashable:!1,moving:!1,tierFrom:2,scatter:{dx:.2,yaw:.06}},diagonal:{kind:"diagonal",height:"tall",width:3.5,length:4.4,smashable:!1,moving:!1,tierFrom:3,scatter:{dx:0,yaw:.05},lanes:2,angle:.55},pipe:{kind:"pipe",height:"overhead",width:3,length:.7,smashable:!1,moving:!1,tierFrom:2,scatter:{dx:0,yaw:0}},oil:{kind:"oil",height:"flat",width:2.2,length:3.5,smashable:!1,moving:!1,tierFrom:3,scatter:{dx:.15,yaw:.1}},slow:{kind:"slow",height:"tall",width:2,length:4.5,smashable:!1,moving:!0,tierFrom:3,scatter:{dx:0,yaw:0}},truck:{kind:"truck",height:"tall",width:2.5,length:10,smashable:!1,moving:!0,tierFrom:3,scatter:{dx:0,yaw:0}},wall:{kind:"wall",height:"tall",width:2.9,length:1,smashable:!1,moving:!1,tierFrom:4,scatter:{dx:0,yaw:.03}},switcher:{kind:"switcher",height:"tall",width:2,length:4.5,smashable:!1,moving:!0,tierFrom:5,scatter:{dx:0,yaw:0}}};function vi(n){return(n-1)*O.laneWidth}function dp(n){return n.lanes??1}function Ub(n,t){return vi(t)+(dp(n)-1)*O.laneWidth/2}function pp(n){return n.moving?1-O.trafficSpeedRatio:1}function mp(n,t){return n.def.moving?n.sMeet+O.trafficSpeedRatio*(t-n.sMeet):n.sMeet}function Nb(n,t,e){const i=(n-t)/Math.max(1,e),o=O.switcherDoneBefore+O.switcherLaneChangeTime,r=Math.min(1,Math.max(0,(o-i)/O.switcherLaneChangeTime)),a=i<=o+O.switcherBlinkerTime&&r<1;return{p:r,blinker:a}}const Ln="#ff7b1c",Le="#f5f5f0",Sn="#d62828",gp="#3b3e46",Qe="#26282e",zi="#33465e",vp="#1f2026",dn="#ff2a2a",pn="#ffb300",gh="#d4a06a",fa="#4a301a",Zs="#4a3424",kb="#1d1e23",Aa={city:["#d9d9d4","#a7adb5","#d8c8a8","#9fb3c8","#b8a0a0","#a9bfae","#c9c3d6","#c0c6cc"],outskirts:["#d6d0c0","#b3bdb0","#c4c8cf","#a6aa9c","#c2a89a","#a9b8c4","#cbbf98","#b0a8b8"],drylands:["#d2c4a6","#b9b2a6","#c9a98a","#a9a296","#b8c2b4","#c7b0a0","#a8b4bc","#d0c0b8"]},ed=[[gp,"#c3c7ce"],["#2f4558","#b9c3cc"],["#5a2e30","#c9bcbc"],["#34483a","#bcc6bd"],["#463e58","#c2bccc"],["#5a5146","#d0c8bc"],["#2e323a","#9aa0a8"],["#4a3a2c","#c8bca8"]],Fb=["#d6d0c0","#d8a89c","#c4d4bc","#bccbd8","#dcc8a0","#cfd0cc","#cfd0a8","#d4bcc4"],Ob=["#cfc8b4","#8fb3ad","#d4a898","#d6c48a","#b4c4d4","#a9c2a4","#c4ad8a","#a8a59e"],Bb=["#3d5e3a","#7a3b32","#4a5b6e","#56603a","#2f5d5a","#8a7a2e","#5a2e3e","#3a3d6a"],zb=["#9b5b3e","#3d6b7a","#7a5a2a","#8a4a5a","#4a6a3a","#5a4a7a","#2e5a6e","#7a6a5a"],Hb=["#e8e8e4","#c9d3dc","#e0d6c0","#c4d0c0","#d8c4c4","#d4d4dc","#b8bcc2","#e4dccc"],Gb=["#5d636e","#2f4a6e","#6e2e2e","#2e5a44","#4a4a52","#6a5a3a","#3a3a5a","#5a3a4a"],Vb=["#5b3a2e","#2e4a3a","#3a4a5e","#6a2e2a","#4a4a44","#5a5a2e","#2e3a4a","#5e4a36"],Wb=["#c9a24a","#d8a080","#c4cca8","#d8b888","#d0a888","#c0b080","#b8c8c8","#dcb898"],vr=8,Xb={city:{cone:Ln,crate:gh},outskirts:{cone:Ln,crate:"#e3c565"},drylands:{cone:Ln,crate:"#8a5a2b"}};function qb(n,t){return n.map(e=>{const i=e.pos??[0,0,0];return{...e,pos:[i[0],i[1],i[2]-t/2]}})}function Xe(n,t){return{geo:y(n+.3,.01,t+.3),color:kb,pos:[0,.006,0]}}function _i(n,t,e,i,s=vp){for(const[o,r]of t)n.push({geo:K(e,e,i,10),color:s,pos:[o,e,r],rot:[0,0,Math.PI/2]})}function qc(n,t,e=!1,i=n){const r=[Xe(2,4.5),{geo:y(2,.36,4.5),color:n,pos:[0,.55,0]},{geo:y(2,.34,4.5),color:i,pos:[0,.9,0]},{geo:Te([[-1.1,0],[1.4,0],[1.1,.6],[-.55,.62]],1.78),color:zi,pos:[0,1.07,.1]},{geo:y(1.8,.1,1.7),color:i,pos:[0,1.72,.37]},{geo:y(1.8,.2,.1),color:Qe,pos:[0,.5,2.25]},{geo:y(.5,.2,.08),color:dn,pos:[-.65,.86,2.26]},{geo:y(.5,.2,.08),color:dn,pos:[.65,.86,2.26]}];return _i(r,[[-.9,-1.4],[.9,-1.4],[-.9,1.4],[.9,1.4]],.4,.3),t&&r.push(...fn(2-.3,.3,.06,6,Sn,Le,.62,4.5/2+.06)),e&&(r.push({geo:y(.2,.2,.1),color:pn,pos:[-2/2+.05,.86,4.5/2+.02]}),r.push({geo:y(.2,.2,.1),color:pn,pos:[2/2-.05,.86,4.5/2+.02]})),r}function Yb(n,t){switch(n){case"cone":return Zh();case"crate":return[Xe(1.3,1.2),{geo:y(1.3,.75,1.2),color:gh,pos:[0,.375,0]},{geo:y(1.32,.1,1.22),color:fa,pos:[0,.2,0]},{geo:y(1.32,.1,1.22),color:fa,pos:[0,.55,0]},{geo:y(.7,.42,.7),color:gh,pos:[.15,.96,.05],rot:[0,.3,0]},{geo:y(.72,.08,.72),color:fa,pos:[.15,.96,.05],rot:[0,.3,0]}];case"barrier":return[Xe(2.8,.5),...fn(2.8,.3,.14,7,Ln,Le,.62,0),{geo:y(.12,.62,.12),color:Le,pos:[-1.2,.31,0]},{geo:y(.12,.62,.12),color:Le,pos:[1.2,.31,0]},{geo:y(.5,.08,.5),color:Qe,pos:[-1.2,.04,0]},{geo:y(.5,.08,.5),color:Qe,pos:[1.2,.04,0]},{geo:K(.08,.08,.08,6),color:pn,pos:[-1.2,.83,0]}];case"diagonal":case"parked":return qc(ed[t][0],!0,!1,ed[t][1]);case"slow":return qc(Aa.city[t],!1);case"switcher":return qc(Aa.city[(t+1)%vr],!1,!0);case"pipe":return[{geo:K(.3,.3,3,10),color:gp,pos:[0,1.32,0],rot:[0,0,Math.PI/2]},...fn(2.9,.46,.05,8,Sn,Le,1.32,.31),{geo:y(.18,2.6,.18),color:Qe,pos:[-1.42,1.3,0]},{geo:y(.18,2.6,.18),color:Qe,pos:[1.42,1.3,0]},{geo:y(3,.2,.3),color:"#d9dcdf",pos:[0,2.55,0]},{geo:y(1.7,.62,.06),color:"#ffd23f",pos:[0,2.15,.1]},{geo:y(1.4,.1,.07),color:Qe,pos:[0,2.15,.11]}];case"oil":return[{geo:K(1,1,.03,9),color:"#16131c",pos:[0,.02,0],scale:[1,1,1.6]},{geo:K(.6,.6,.035,7),color:"#2b2440",pos:[.45,.025,.6],scale:[1,1,1.2]},{geo:K(.35,.35,.04,6),color:"#3d3360",pos:[-.3,.03,-.4]},{geo:K(.4,.4,.033,6),color:"#16131c",pos:[-.7,.02,.9]},{geo:K(.66,.66,.038,7),color:"#b8aee6",pos:[-.25,.028,.25],scale:[1,1,1.5]},{geo:K(.34,.34,.04,6),color:"#a9d4e6",pos:[.35,.03,-.7]},{geo:K(.3,.3,.039,6),color:"#e0b8d8",pos:[.45,.029,.95]}];case"truck":{const s=[Xe(2.5,10),{geo:y(2.5,2.7,7.4),color:Hb[t],pos:[0,1.95,1.3]},{geo:y(2.52,.3,7.42),color:"#4a5160",pos:[0,.55,1.3]},...fn(2.4,.3,.06,7,Sn,Le,.6,5.05),{geo:y(2.1,2.4,.06),color:"#cfcfca",pos:[0,1.95,5.01]},{geo:y(.06,2.4,.08),color:"#8a8f99",pos:[0,1.95,5.03]},{geo:y(.4,.2,.08),color:dn,pos:[-.95,.95,5.04]},{geo:y(.4,.2,.08),color:dn,pos:[.95,.95,5.04]},{geo:y(2.4,2.3,2.3),color:Gb[t],pos:[0,1.55,-3.75]},{geo:y(2.3,.8,.1),color:zi,pos:[0,2.2,-4.92]}];for(const o of[-3.9,.2,1.4,3.6,4.6])_i(s,[[-1.05,o],[1.05,o]],.5,.4);return s}case"wall":return[Xe(2.9,1),{geo:y(2.9,.8,1),color:"#45474c",pos:[0,.4,0]},{geo:y(3,1.66,.28),color:Qe,pos:[0,1.55,.08]},{geo:y(2.9,1.5,.03),color:Le,pos:[0,1.55,.235]},...fn(2.9,1.3,.06,6,Sn,Le,1.55,.28),{geo:K(.14,.14,.2,8),color:pn,pos:[-1.2,2.42,.1]},{geo:K(.14,.14,.2,8),color:pn,pos:[1.2,2.42,.1]}]}}function Zh(){return[Xe(.5,.5),{geo:y(.7,.08,.7),color:Qe,pos:[0,.04,0]},{geo:ye(.3,.8,8),color:Ln,pos:[0,.48,0]},{geo:K(.2,.23,.14,8),color:Le,pos:[0,.5,0]}]}function vh(n,t={}){const s=t.rust?"#5a3a26":Qe,o=[Xe(2,4.5),{geo:y(2,.62,4.5),color:n,pos:[0,.7,0]},{geo:y(2-.12,.75,1.7),color:n,pos:[0,1.38,-.55]},{geo:y(2-.2,.5,.08),color:zi,pos:[0,1.42,.31]},{geo:Te([[-.45,0],[.45,0],[.3,.5],[-.35,.5]],2-.24),color:zi,pos:[0,1.17,-1.5]},{geo:y(.1,.32,2.1),color:n,pos:[-2/2+.05,1.17,1.15]},{geo:y(.1,.32,2.1),color:n,pos:[2/2-.05,1.17,1.15]},{geo:y(2-.1,.42,.08),color:n,pos:[0,1.12,4.5/2-.04]},{geo:y(2-.3,.06,1.9),color:s,pos:[0,1.02,1.15]},{geo:y(2-.1,.18,.12),color:s,pos:[0,.46,4.5/2+.02]},{geo:y(.32,.26,.08),color:dn,pos:[-2/2+.25,1.05,4.5/2+.01]},{geo:y(.32,.26,.08),color:dn,pos:[2/2-.25,1.05,4.5/2+.01]}];return _i(o,[[-.9,-1.4],[.9,-1.4],[-.9,1.4],[.9,1.4]],.42,.32),t.hazard&&o.push(...fn(2-.5,.16,.06,6,Sn,Le,.72,4.5/2+.06)),t.blinkers&&(o.push({geo:y(.2,.2,.1),color:pn,pos:[-2/2+.05,.86,4.5/2+.02]}),o.push({geo:y(.2,.2,.1),color:pn,pos:[2/2-.05,.86,4.5/2+.02]})),o}function _p(n,t=2.9){return[{geo:y(.14,n+.4,.14),color:Qe,pos:[-t/2+.25,(n+.4)/2,0]},{geo:y(.14,n+.4,.14),color:Qe,pos:[t/2-.25,(n+.4)/2,0]},{geo:y(t,.9,.1),color:Le,pos:[0,n,.05]},...fn(t-.1,.75,.04,6,Sn,Le,n,.12)]}function $b(n,t){const e="#e3c565",i="#c9a646";switch(n){case"cone":return Zh();case"crate":{const s=[Xe(1.45,1.25)];for(const o of[-.32,.32]){s.push({geo:y(1.45,.5,.6),color:e,pos:[0,.25,o]}),s.push({geo:y(1.47,.06,.62),color:i,pos:[0,.32,o]});for(const r of[-.4,.4])s.push({geo:y(.06,.52,.63),color:Ln,pos:[r,.25,o]})}return s.push({geo:y(1.2,.45,.6),color:e,pos:[.08,.73,.02],rot:[0,.18,0]}),s.push({geo:y(1.3,.08,.7),color:"#2f4a33",pos:[.08,.97,.02],rot:[0,.18,0]}),s.push({geo:y(1.3,.4,.06),color:"#2f4a33",pos:[.14,.8,.36],rot:[0,.18,0]}),s.push({geo:y(.08,.5,.74),color:Ln,pos:[.08,.8,.02],rot:[0,.18,0]}),s.push({geo:y(.03,.7,.03),color:fa,pos:[-.35,1.25,.1]}),s.push({geo:y(.3,.2,.02),color:Le,pos:[-.2,1.48,.1]}),s.push({geo:y(.15,.2,.025),color:Ln,pos:[-.27,1.48,.1]}),s}case"barrier":{const s=[Xe(2.8,.5),...fn(2.8,.3,.08,7,Ln,Le,.66,.06),{geo:y(2.6,.26,.08),color:Zs,pos:[0,.32,.06]}];for(const o of[-1.15,1.15])s.push({geo:y(.12,.85,.12),color:Zs,pos:[o,.4,.18],rot:[.35,0,0]}),s.push({geo:y(.12,.85,.12),color:Zs,pos:[o,.4,-.18],rot:[-.35,0,0]});return s}case"diagonal":case"parked":return vh(Fb[t],{hazard:!0});case"switcher":return vh(Aa.outskirts[(t+1)%vr],{blinkers:!0});case"slow":{const s=Bb[t],o=[Xe(2,4.5),{geo:y(1.2,.9,2.6),color:s,pos:[0,1.1,-.9]},{geo:y(1.3,.25,1.2),color:Qe,pos:[0,.55,1.2]},{geo:y(1.5,1.4,1.5),color:"#ecebe4",pos:[0,2.15,.9]},{geo:y(1.2,.8,.05),color:zi,pos:[0,2.3,1.66]},{geo:y(1.7,.12,1.7),color:"#ecebe4",pos:[0,2.9,.9]},{geo:y(.55,.12,1.5),color:"#ecebe4",pos:[-.92,1.72,1]},{geo:y(.55,.12,1.5),color:"#ecebe4",pos:[.92,1.72,1]},{geo:y(.55,.7,.1),color:"#ecebe4",pos:[-.92,1.4,1.75]},{geo:y(.55,.7,.1),color:"#ecebe4",pos:[.92,1.4,1.75]},{geo:K(.16,.16,.2,8),color:pn,pos:[0,3.06,.9]},{geo:K(.07,.07,1.4,6),color:Qe,pos:[.45,2,-1.6]},{geo:ye(.42,.75,3),color:Ln,pos:[0,1.25,1.97],rot:[Math.PI/2,0,0],scale:[1,.12,1]},{geo:ye(.26,.47,3),color:Sn,pos:[0,1.25,2],rot:[Math.PI/2,0,0],scale:[1,.12,1]},...fn(1.6,.14,.05,5,Sn,Le,.5,1.83)];return _i(o,[[-.92,1],[.92,1]],.82,.46),_i(o,[[-.75,-1.7],[.75,-1.7]],.45,.3),o}case"pipe":return[{geo:y(3,.5,.5),color:Zs,pos:[0,1.32,0]},...fn(2.9,.4,.05,8,Sn,Le,1.32,.27),{geo:K(.15,.17,2.7,7),color:"#d8b886",pos:[-1.45,1.35,0]},{geo:K(.15,.17,2.7,7),color:"#d8b886",pos:[1.45,1.35,0]},{geo:y(3.2,.2,.3),color:Zs,pos:[0,2.65,0]},{geo:y(1.1,.45,.05),color:"#ffd23f",pos:[0,2.15,.12]},{geo:y(.9,.08,.06),color:Qe,pos:[0,2.15,.13]}];case"oil":return[{geo:K(1.05,1.05,.03,9),color:"#3a2a1c",pos:[0,.02,0],scale:[1,1,1.6]},{geo:K(.7,.7,.035,7),color:"#c4d6dd",pos:[.25,.026,.35],scale:[1,1,1.4]},{geo:K(.36,.36,.036,6),color:"#b2c9d2",pos:[-.35,.027,-.7]},{geo:K(.45,.45,.04,6),color:"#4a3626",pos:[-.75,.025,.95]},{geo:qe(.16,0),color:"#5a4330",pos:[.9,.05,-.7],scale:[1,.4,1]},{geo:qe(.12,0),color:"#5a4330",pos:[-.9,.04,-.2],scale:[1,.4,1]}];case"truck":{const r=[Xe(2.5,10),{geo:y(2.5,.35,7.6),color:"#3a3d42",pos:[0,.75,1.2]},{geo:y(2.4,2.3,2.3),color:Vb[t],pos:[0,1.55,-3.75]},{geo:y(2.3,.8,.1),color:zi,pos:[0,2.2,-4.92]},{geo:y(2.6,.12,2.4),color:"#e4e2dc",pos:[0,2.75,-3.75]},...fn(2.4,.28,.06,7,Sn,Le,.62,5.05),{geo:y(.4,.2,.08),color:dn,pos:[-.95,.95,5.04]},{geo:y(.4,.2,.08),color:dn,pos:[.95,.95,5.04]}];for(const c of[-1.6,4])for(const h of[-1.15,1.15])r.push({geo:y(.14,2.2,.14),color:Qe,pos:[h,1.95,c]});const a=[[-.75,1.3],[0,1.3],[.75,1.3],[-.38,1.95],[.38,1.95],[0,2.58]];for(const[c,h]of a)r.push({geo:K(.36,.36,7.2,8),color:h<1.5&&c===0?"#4f3722":"#c9a06a",pos:[c,h,1.2],rot:[Math.PI/2,0,0]}),r.push({geo:K(.32,.32,.04,8),color:"#e3c08a",pos:[c,h,4.81],rot:[Math.PI/2,0,0]});for(const c of[-3.9,.2,1.4,3.6,4.6])_i(r,[[-1.05,c],[1.05,c]],.5,.4);return r}case"wall":{const s=[Xe(2.9,1)];for(const[o,r]of[[.3,.15],[.3,-.25],[.82,-.05]])s.push({geo:K(.3,.3,2.9,8),color:o>.5?"#5e422a":"#4f3722",pos:[0,o,r],rot:[0,0,Math.PI/2]});return s.push({geo:K(.27,.27,.04,8),color:"#d9b07a",pos:[-1.46,.3,.15],rot:[0,0,Math.PI/2]}),s.push(..._p(1.85)),s.push({geo:K(.14,.14,.2,8),color:pn,pos:[-1.2,2.42,.05]}),s.push({geo:K(.14,.14,.2,8),color:pn,pos:[1.2,2.42,.05]}),s}}}function Kb(n,t){switch(n){case"cone":return Zh();case"crate":{const e=[Xe(1.45,1.25)],i=[[-.38,.45,.3],[.38,.45,.3],[0,.45,-.32]];for(const[s,o,r]of i){e.push({geo:K(.33,.36,.9,10),color:"#6b4423",pos:[s,o,r]});for(const a of[-.34,.34])e.push({geo:K(.35,.37,.07,10),color:"#2e2116",pos:[s,o+a,r]});e.push({geo:K(.365,.365,.4,10),color:Ln,pos:[s,o,r]}),e.push({geo:K(.368,.368,.16,10),color:Le,pos:[s,o,r]}),e.push({geo:K(.3,.3,.02,10),color:"#a87a48",pos:[s,o+.45,r]})}return e}case"barrier":{const e=[Xe(2.8,.5)];for(const i of[-1.3,0,1.3])e.push({geo:y(.2,.82,.2),color:"#4f3a28",pos:[i,.41,0]});e.push({geo:y(2.8,.2,.12),color:"#4f3a28",pos:[0,.33,.08]}),e.push({geo:y(2.8,.24,.12),color:"#ece8de",pos:[0,.66,.08]});for(const i of[-.8,.8])e.push({geo:y(.36,.2,.05),color:Ln,pos:[i,.66,.16]});return e}case"diagonal":case"parked":{const s=Ob[t],o=[Xe(2,4.5),{geo:y(2,.32,4.5-.2),color:"#6b3a22",pos:[0,.5,0]},{geo:y(2,.3,4.5-.2),color:s,pos:[0,.8,0]},{geo:K(.3,.3,4.5-.6,8),color:s,pos:[-2/2+.25,.78,0],rot:[Math.PI/2,0,0]},{geo:K(.3,.3,4.5-.6,8),color:s,pos:[2/2-.25,.78,0],rot:[Math.PI/2,0,0]},{geo:y(.7,.2,.9),color:"#7a4026",pos:[.4,.96,-1.4]},{geo:Te([[-1,0],[1.2,0],[.8,.82],[-.6,.82]],2-.3),color:s,pos:[0,.94,.15]},{geo:Te([[-.85,.08],[1,.08],[.7,.72],[-.5,.72]],2-.24),color:"#2e2a26",pos:[0,.94,.15]},{geo:y(2-.2,.18,.12),color:"#5a3a26",pos:[0,.4,4.5/2-.04]},...fn(2-.4,.16,.06,6,Sn,Le,.62,4.5/2-.04)];return _i(o,[[-.88,-1.4],[.88,-1.4],[-.88,1.4],[.88,1.4]],.32,.3,"#3a3530"),o}case"switcher":return vh(Aa.drylands[(t+1)%vr],{blinkers:!0});case"slow":{const s=[Xe(2,4.5),{geo:y(2,2.2,4.5),color:"#e6e0d2",pos:[0,1.6,0]},{geo:y(1.9,.7,1.2),color:"#e6e0d2",pos:[0,2.95,-1.4]},{geo:y(2.02,.35,4.52),color:zb[t],pos:[0,1.35,0]},{geo:y(1.6,.6,.06),color:zi,pos:[0,2.15,2.26]},{geo:K(.38,.38,.22,10),color:vp,pos:[0,1.45,2.37],rot:[Math.PI/2,0,0]},{geo:y(.06,2,.06),color:"#9aa0a7",pos:[.75,1.75,2.31]},{geo:y(.06,2,.06),color:"#9aa0a7",pos:[.45,1.75,2.31]},{geo:y(.3,.32,.08),color:dn,pos:[-.78,.75,2.26]},{geo:y(.3,.32,.08),color:dn,pos:[.78,.75,2.26]},{geo:y(1.9,.18,.12),color:Qe,pos:[0,.48,2.27]}];return _i(s,[[-.9,-1.3],[.9,-1.3],[-.9,1.3],[.9,1.3]],.42,.32),s}case"pipe":return[{geo:y(3.1,.5,.45),color:Zs,pos:[0,1.32,0]},...fn(2.9,.4,.05,8,Sn,Le,1.32,.25),{geo:y(.35,3.4,.35),color:"#cdb795",pos:[-1.45,1.7,0]},{geo:y(.35,3.4,.35),color:"#cdb795",pos:[1.45,1.7,0]},{geo:y(3.4,.3,.35),color:"#6b4c30",pos:[0,3.25,0]},{geo:y(1.8,.55,.08),color:"#5a3e28",pos:[0,2.75,.1]},{geo:ye(.08,.5,4),color:"#f2ecdc",pos:[-.45,3.45,.05],rot:[0,0,1]},{geo:ye(.08,.5,4),color:"#f2ecdc",pos:[.45,3.45,.05],rot:[0,0,-1]}];case"oil":return[{geo:K(1.12,1.12,.03,9),color:"#6e5434",pos:[0,.016,0],scale:[1,1,1.62]},{geo:K(1,1,.06,9),color:"#ecd7a8",pos:[0,.03,.05],scale:[1,1,1.5]},...[-.9,-.45,0,.45,.9].map(e=>({geo:y(1.5-Math.abs(e)*.6,.02,.07),color:"#a8865a",pos:[0,.065,e],rot:[0,.15,0]}))];case"truck":{const s=[Xe(2.5,10),{geo:y(2.5,.35,7.6),color:"#3a3d42",pos:[0,.75,1.2]},{geo:Te([[-3.7,0],[3.7,0],[3.9,1.9],[-3.4,1.9]],2.5),color:Wb[t],pos:[0,.95,1.2]},{geo:y(2.4,2.3,2.3),color:"#4a4c50",pos:[0,1.55,-3.75]},{geo:y(2.6,.12,2.4),color:"#e4e2dc",pos:[0,2.75,-3.75]},{geo:y(2.3,.8,.1),color:zi,pos:[0,2.2,-4.92]},...fn(2.4,.5,.06,7,Sn,Le,.62,5.05),{geo:y(.4,.2,.08),color:dn,pos:[-.95,.95,5.04]},{geo:y(.4,.2,.08),color:dn,pos:[.95,.95,5.04]}];for(const[o,r,a]of[[-.5,0,.9],[.5,1.6,.85],[0,3,.8],[.2,-1.4,.8]])s.push({geo:qe(a,0),color:"#8a5a44",pos:[o,2.85,r],scale:[1,.6,1.2]});for(const o of[-3.9,.6,3.4])_i(s,[[-1.05,o],[1.05,o]],.62,.45);return s}case"wall":{const e=[Xe(2.9,1)],i=[[-.9,.4,.1,.6,"#5e5248"],[.1,.45,-.1,.7,"#6b5d50"],[1,.35,.15,.55,"#544a40"],[-.4,.95,-.05,.5,"#6b5d50"],[.55,.9,0,.45,"#5e5248"]];for(const[s,o,r,a,c]of i)e.push({geo:qe(a,0),color:c,pos:[s,o,r*.5],rot:[s,o*3,r],scale:[1.1,.85,.62]});return e.push(..._p(1.85)),e.push({geo:K(.14,.14,.2,8),color:pn,pos:[-1.2,2.42,.05]}),e.push({geo:K(.14,.14,.2,8),color:pn,pos:[1.2,2.42,.05]}),e}}}const jb={city:Yb,outskirts:$b,drylands:Kb};function Zb(n,t){return n.color===dn?{...n,glow:dn}:n.color===pn&&t!=="switcher"?{...n,glow:pn,blink:!0}:n}const nd=new Map,xp=new Set(["parked","diagonal","slow","switcher","truck"]);function Mp(n,t=0,e="city"){const i=xp.has(n)?t%vr:0,s=`${e}:${n}:${i}`;let o=nd.get(s);return o||(o=De(qb(jb[e](n,i),gr[n].length).map(r=>Zb(r,n))),nd.set(s,o)),o}function Yc(n="city"){for(const t of Object.keys(gr))for(let e=0;e<(xp.has(t)?vr:1);e++)Mp(t,e,n)}const Jb="#ffc93c",yp="#5c3a08";function bp(n,t,e){const i=[{geo:K(n,n,.14,12),color:t,rot:[Math.PI/2,0,0]},{geo:K(n*.38,n*.38,.18,8),color:e,rot:[Math.PI/2,0,0]}],s=8;for(let o=0;o<s;o++){const r=o/s*Math.PI*2;i.push({geo:y(n*.42,n*.36,.15),color:e,pos:[Math.cos(r)*n*1.02,Math.sin(r)*n*1.02,0],rot:[0,0,r]})}return i}function Qb(){return De(bp(.32,Jb,yp))}function tS(){return De([...bp(.55,"#fff1a8",yp),{geo:K(.12,.12,.22,6),color:"#ffffff",rot:[Math.PI/2,0,0]}])}function eS(n){return n.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vColor.rgb;`)},n.customProgramCacheKey=()=>"glowByVertexColor",n}function nS(){const n="#3ddc84",t="#1f9e57";return De([{geo:y(.16,.8,.12),color:n,rot:[0,0,.6]},{geo:y(.42,.2,.14),color:n,pos:[-.3,.38,0],rot:[0,0,.6]},{geo:y(.12,.26,.14),color:t,pos:[-.45,.5,0],rot:[0,0,.6]},{geo:y(.12,.26,.14),color:t,pos:[-.2,.68,0],rot:[0,0,.6]},{geo:y(.3,.3,.14),color:t,pos:[.25,-.36,0],rot:[0,0,.6]},{geo:K(.6,.6,.04,12),color:"#e9fff1",pos:[0,.1,-.1],rot:[Math.PI/2,0,0]},{geo:K(.78,.78,.03,14),color:"#173826",pos:[0,.1,-.13],rot:[Math.PI/2,0,0]}])}function iS(){const n="#1982ff",t="#e6ebf2",e=[];for(let s=0;s<=7;s++){const o=Math.PI+s/7*Math.PI;e.push({geo:y(.2,.2,.18),color:n,pos:[Math.cos(o)*.35,Math.sin(o)*.35+.05,0],rot:[0,0,o]})}return e.push({geo:y(.2,.36,.18),color:n,pos:[-.35,.25,0]}),e.push({geo:y(.2,.36,.18),color:n,pos:[.35,.25,0]}),e.push({geo:y(.22,.16,.2),color:t,pos:[-.35,.5,0]}),e.push({geo:y(.22,.16,.2),color:t,pos:[.35,.5,0]}),e.push({geo:K(.65,.65,.04,12),color:"#e3f0ff",pos:[0,.1,-.12],rot:[Math.PI/2,0,0]}),e.push({geo:K(.83,.83,.03,14),color:"#142238",pos:[0,.1,-.15],rot:[Math.PI/2,0,0]}),De(e)}const id=[0,.5,.9];function sS(n,t){const{min:e,max:i}=n,s=e.y+(i.y-e.y)*(t?.55:.4),o=t?.34:.8,r=t?.07:.2,a=(d,g,_)=>({c:new P(d,s,g),r:o,depth:r*_}),c=d=>a(e.x,e.z,d),h=d=>a(i.x,i.z,d),l=d=>a(i.x,e.z,d),u=d=>a(e.x,i.z,d),f=d=>({c:new P(e.x,s,(e.z+i.z)*.5-.2),r:o*.8,depth:r*.7*d});return[[c(.7),h(.6)],[c(1),h(1),l(.8),u(.7),f(1)]]}function oS(n){return Math.sin(n.x*9.1+n.z*3.7)*Math.sin(n.y*11.3-n.z*5.9)*Math.sin(n.z*7.3+n.x*2.1)}function da(n,t,e){const i=n.getAttribute("position"),s=new P().addVectors(t.min,t.max).multiplyScalar(.5),o=new P,r=new P;n.morphAttributes.position=sS(t,e).map(a=>{const c=new Float32Array(i.count*3);for(let h=0;h<i.count;h++){o.fromBufferAttribute(i,h);let l=0;for(const u of a){const f=Math.max(0,1-o.distanceTo(u.c)/u.r);l+=u.depth*f*f*(3-2*f)}l>0&&(l*=1+.45*oS(o),r.set(s.x-o.x,(s.y-o.y)*.35-.3,(s.z-o.z)*.5).normalize(),o.addScaledVector(r,l)),c[h*3]=o.x,c[h*3+1]=o.y,c[h*3+2]=o.z}return new Ce(c,3)})}const Fe=512;let $c=null;function rS(){if($c)return $c;let n=7;const t=()=>(n=n*16807%2147483647)/2147483647,e=l=>{const u=document.createElement("canvas");u.width=u.height=Fe;const f=u.getContext("2d",{willReadFrequently:!0});return f.fillStyle="#fff",f.fillRect(0,0,Fe,Fe),f.globalCompositeOperation="darken",l(f),f.getImageData(0,0,Fe,Fe).data},i=(l,u)=>{for(const f of[-Fe,0,Fe])for(const d of[-Fe,0,Fe])l.save(),l.translate(f,d),u(),l.restore()},s=l=>`rgb(${Math.round(l*255)},${Math.round(l*255)},${Math.round(l*255)})`,o=e(l=>{for(let u=0;u<16;u++){const f=t()*Fe,d=t()*Fe,g=.3+t()*.62;l.fillStyle=s(g);const _=2+Math.floor(t()*3),p=Array.from({length:_},()=>[f+(t()-.5)*34,d+(t()-.5)*24,6+t()*14]);i(l,()=>{for(const[m,w,x]of p)l.beginPath(),l.arc(m,w,x,0,Math.PI*2),l.fill()})}}),r=e(l=>{for(let u=0;u<16;u++){const f=t()*Fe,d=t()*Fe,g=t()*Math.PI,_=30+t()*70,p=2+Math.floor(t()*4),m=.4+t()*.55,w=Array.from({length:p},(x,S)=>({off:S*(3+t()*3),l:_*(.6+t()*.4),w:1.2+t()*1.4}));l.strokeStyle=s(m),l.lineCap="round",i(l,()=>{for(const x of w){const S=-Math.sin(g)*x.off,I=Math.cos(g)*x.off;l.lineWidth=x.w,l.beginPath(),l.moveTo(f+S,d+I),l.lineTo(f+S+Math.cos(g)*x.l,d+I+Math.sin(g)*x.l),l.stroke()}})}}),a=e(l=>{for(let u=0;u<9;u++){const f=t()*Fe,d=t()*Fe,g=.6+t()*.25,_=Array.from({length:6+Math.floor(t()*4)},()=>{const p=t()*Math.PI*2,m=[];let w=f,x=d,S=p;const I=40+t()*90;for(let C=0;C<5;C++)S+=(t()-.5)*.7,w+=Math.cos(S)*(I/5),x+=Math.sin(S)*(I/5),m.push([w,x]);return m});l.strokeStyle=s(g),l.lineWidth=1.8,i(l,()=>{for(const p of _){l.beginPath(),l.moveTo(f,d);for(const[m,w]of p)l.lineTo(m,w);l.stroke()}l.beginPath(),l.arc(f,d,9,0,Math.PI*2),l.stroke()})}}),c=new Uint8Array(Fe*Fe*4);for(let l=0;l<c.length;l+=4)c[l]=o[l],c[l+1]=r[l],c[l+2]=a[l],c[l+3]=255;const h=new ka(c,Fe,Fe,bn);return h.wrapS=h.wrapT=Bi,h.generateMipmaps=!0,h.minFilter=pi,h.magFilter=yn,h.needsUpdate=!0,$c=h,h}function sd(n,t){return`
    {
      vec3 dmg = texture2D( damageMap, ${n} * 4.0 ).rgb;
      ${t?`float grime = smoothstep( dmg.r, dmg.r + 0.06, damage );
             diffuseColor.rgb *= 1.0 - 0.38 * grime;
             float scratch = smoothstep( dmg.g, dmg.g + 0.04, damage );
             diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.62, 0.64, 0.68 ), scratch * 0.8 );`:`float crack = smoothstep( dmg.b, dmg.b + 0.04, damage );
             diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.82, 0.88, 0.95 ), crack * 0.85 );`}
    }`}function Kc(n,t){const e={value:0},i=n.onBeforeCompile;n.onBeforeCompile=(o,r)=>{i.call(n,o,r),o.uniforms.damage=e,o.uniforms.damageMap={value:rS()};const a=`uniform float damage;
uniform sampler2D damageMap;
`;t==="paint"?o.fragmentShader=a+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${sd("vMapUv",!0)}`):(o.vertexShader=`varying vec2 vDamageUv;
`+o.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vDamageUv = uv;`),o.fragmentShader=a+`varying vec2 vDamageUv;
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${sd("vDamageUv",!1)}`))};const s=n.customProgramCacheKey.bind(n);return n.customProgramCacheKey=()=>`${s()}|damage-${t}`,n.needsUpdate=!0,e}const $e=1024,jr=6,aS='"Lilita One", "Arial Black", sans-serif',Jh={right:{x:0,y:0,w:1024,h:256},left:{x:0,y:256,w:1024,h:256},top:{x:0,y:512,w:512,h:512},front:{x:512,y:512,w:512,h:256},back:{x:512,y:768,w:512,h:256}};function Sp(n,t){const e=Jh[n],i=e.w-2*jr,s=e.h-2*jr,o=e.x+jr,r=e.y+jr,{min:a,max:c}=t,h=s/(c.y-a.y);switch(n){case"right":{const l=i/(c.z-a.z);return{sa:-l,sb:-h,ox:o+c.z*l,oy:r+c.y*h}}case"left":{const l=i/(c.z-a.z);return{sa:l,sb:-h,ox:o-a.z*l,oy:r+c.y*h}}case"top":{const l=i/(c.x-a.x),u=s/(c.z-a.z);return{sa:l,sb:u,ox:o-a.x*l,oy:r-a.z*u}}case"front":{const l=i/(c.x-a.x);return{sa:-l,sb:-h,ox:o+c.x*l,oy:r+c.y*h}}case"back":{const l=i/(c.x-a.x);return{sa:l,sb:-h,ox:o-a.x*l,oy:r+c.y*h}}}}function Ra(n,t){const e=n.getAttribute("position"),i=new Float32Array(e.count*2),s=Object.fromEntries(Object.keys(Jh).map(l=>[l,Sp(l,t)])),o=new P,r=new P,a=new P,c=new P,h=new P;for(let l=0;l<e.count;l+=3){o.fromBufferAttribute(e,l),r.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),c.subVectors(r,o).cross(h.subVectors(a,o));const u=Math.abs(c.x),f=Math.abs(c.y),d=Math.abs(c.z),g=u>=f&&u>=d?c.x>0?"right":"left":f>=d?"top":c.z<0?"front":"back",_=s[g];for(let p=0;p<3;p++){const m=p===0?o:p===1?r:a,[w,x]=g==="top"?[m.x,m.z]:g==="front"||g==="back"?[m.x,m.y]:[m.z,m.y];i[(l+p)*2]=(_.ox+_.sa*w)/$e,i[(l+p)*2+1]=(_.oy+_.sb*x)/$e}}n.setAttribute("uv",new Ce(i,2))}class cS{constructor(t,e,i,s,o,r){this.c=t,this.m=e,this.acc=i,this.flipX=s,this.flipY=o,this.side=r}both(t){t(this.c,!1),t(this.m,!0)}shade(t,e){this.c.fillStyle=e,this.c.fill(t)}shadeLine(t,e,i){this.c.strokeStyle=e,this.c.lineWidth=i,this.c.stroke(t)}shadeGradient(t,e,i,s){const o=this.c.createLinearGradient(0,t,0,e);o.addColorStop(0,i),o.addColorStop(1,s),this.c.fillStyle=o,this.c.globalCompositeOperation="multiply",this.c.fillRect(-10,Math.min(t,e),20,Math.abs(e-t)),this.c.globalCompositeOperation="source-over"}decal(t,e){this.both((i,s)=>{i.fillStyle=s?"#000":e,i.fill(t)})}decalLine(t,e,i){this.both((s,o)=>{s.strokeStyle=o?"#000":e,s.lineWidth=i,s.lineJoin="round",s.lineCap="round",s.stroke(t)})}accent(t){this.decal(t,"#fff"),this.acc.fillStyle="#fff",this.acc.fill(t)}accentLine(t,e){this.decalLine(t,"#fff",e),this.acc.strokeStyle="#fff",this.acc.lineWidth=e,this.acc.lineJoin="round",this.acc.lineCap="round",this.acc.stroke(t)}text(t,e,i,s,o,r){this.both((c,h)=>{c.save(),c.translate(e,i),c.scale((this.flipX?-1:1)/200,(this.flipY?-1:1)/200),c.font=`${s*200}px ${aS}`,c.textAlign="center",c.textBaseline="middle",r&&(c.lineWidth=s*200*.16,c.lineJoin="round",c.strokeStyle=h?"#000":r,c.strokeText(t,0,s*200*.06)),c.fillStyle=h?"#000":o,c.fillText(t,0,s*200*.06),c.restore()})}}function ei(n,t,e,i){const s=new Path2D;return s.rect(Math.min(n,e),Math.min(t,i),Math.abs(e-n),Math.abs(i-t)),s}function fs(n,t,e){const i=new Path2D;return i.arc(n,t,e,0,Math.PI*2),i}function cr(n,t=!0){const e=new Path2D;e.moveTo(n[0][0],n[0][1]);for(let i=1;i<n.length;i++)e.lineTo(n[i][0],n[i][1]);return t&&e.closePath(),e}function Hi(n,t,e,i){return cr([[n,t],[e,i]],!1)}function od(n,t,e){const i=new ka(n,$e,$e,t);return e&&(i.colorSpace=Ve),i.generateMipmaps=!0,i.minFilter=pi,i.magFilter=yn,i.anisotropy=4,i.needsUpdate=!0,i}function lS(n,t){const e=f=>{const d=document.createElement("canvas");d.width=d.height=$e;const g=d.getContext("2d",{willReadFrequently:!0});return g.fillStyle=f,g.fillRect(0,0,$e,$e),g},i=e("#fff"),s=e("#fff"),o=e("#000"),r=(f,d,g=0)=>{if(!d)return;const _=Jh[f],p=Sp(f,t);for(const m of[i,s,o])m.save(),m.beginPath(),m.rect(_.x,_.y,_.w,_.h),m.clip(),m.setTransform(p.sa,0,0,p.sb,p.ox,p.oy);d.call(n,new cS(i,s,o,p.sa<0,p.sb<0,g));for(const m of[i,s,o])m.restore()};r("right",n.side,1),r("left",n.side,-1),r("top",n.top),r("front",n.front),r("back",n.back);const a=i.getImageData(0,0,$e,$e).data,c=s.getImageData(0,0,$e,$e).data,h=o.getImageData(0,0,$e,$e).data,l=new Uint8Array($e*$e*4),u=new Uint8Array($e*$e);for(let f=0;f<l.length;f+=4)l[f]=a[f],l[f+1]=a[f+1],l[f+2]=a[f+2],l[f+3]=c[f],u[f/4]=h[f];return{map:od(l,bn,!0),accent:od(u,Da,!1)}}function hS(n,t,e){n.map=t.map,n.onBeforeCompile=i=>{i.uniforms.accentMap={value:t.accent},i.uniforms.accentColor={value:e},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D accentMap;
uniform vec3 accentColor;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec4 livery = texture2D( map, vMapUv );
        diffuseColor.rgb = mix( livery.rgb, diffuseColor.rgb * livery.rgb, livery.a );
        diffuseColor.rgb = mix( diffuseColor.rgb, accentColor * livery.rgb, texture2D( accentMap, vMapUv ).r );
      #endif`)},n.customProgramCacheKey=()=>"livery",n.needsUpdate=!0}const ue="#ffffff",Wn="#c4c4c4",Qh="#212228",ys="#c9ced6",_h="#4a4f59",pe="#e6e9ee",uS="#9097a1",wp="#22344d",Wt="#2b2d34",jc="#3b3e47",Ep="#555a65",Ie="#17181d",tu="#26262c",_o="#fff6c4",Tp="#eef7ff",bi="#ff2e3a",bs="#ffa21a",fS="#f2f2ea",dS="#f1f1e8",xh="#f6f6f2",pa="#d9a52b",pS="#f4f4f4",mS="#151b28";function Ap(n){const{r:t,w:e}=n,i=t*(n.style==="bike"?.78:.66),s=[{geo:Dc([[i,-e/2],[t*.9,-e/2],[t,-e*.28],[t,e*.28],[t*.9,e/2],[i,e/2]],16),color:Qh,rot:[0,0,-Math.PI/2]}],o=(r,a,c,h,l,u)=>{for(let f=0;f<n.spokes;f++){const d=f/n.spokes*Math.PI*2;s.push({geo:y(h,a,l),color:u,pos:[r,Math.cos(d)*c,Math.sin(d)*c],rot:[d,0,0]})}};if(n.style==="car"){s.push({geo:K(i,i,e*.7,16),color:_h,rot:[0,0,Math.PI/2]});const r=(n.side??1)*e*.37;s.push({geo:Dc([[i*.84,-.015],[i,-.015],[i,.015],[i*.84,.015],[i*.84,-.015]],16),color:n.rim,pos:[r,0,0],rot:[0,0,-Math.PI/2]}),o(r,i*.66,i*.5,.03,i*(n.spokes>6?.14:.3),n.rim),s.push({geo:K(i*.26,i*.3,.06,8),color:pe,pos:[r,0,0],rot:[0,0,Math.PI/2]})}else if(n.style==="bike"){s.push({geo:Dc([[i*.88,-e*.32],[i,-e*.32],[i,e*.32],[i*.88,e*.32],[i*.88,-e*.32]],16),color:n.rim,rot:[0,0,-Math.PI/2]}),o(0,i*.8,i*.48,e*.2,i*.16,n.rim),s.push({geo:K(i*.2,i*.2,e*.9,10),color:pe,rot:[0,0,Math.PI/2]});for(const r of[-e*.36,e*.36])s.push({geo:K(i*.62,i*.62,.014,12),color:uS,pos:[r,0,0],rot:[0,0,Math.PI/2]})}else s.push({geo:K(i,i,e*.72,14),color:n.rim,rot:[0,0,Math.PI/2]}),s.push({geo:K(i*.62,i*.66,e*.8,10),color:pe,rot:[0,0,Math.PI/2]}),s.push({geo:K(i*.22,i*.22,e*.9,8),color:Wt,rot:[0,0,Math.PI/2]});return De(s)}const gS=.52,vS=.5,_S=.38,xS=.36,rd=.6,MS=.2,Ys=n=>new P(...n),Vn=n=>[n.x,n.y,n.z];function ad(n,t,e,i,s){const o=t.clone().sub(n),r=Math.min(o.length(),e+i-.001);o.normalize();const a=s.clone().sub(n);a.addScaledVector(o,-a.dot(o)).normalize();const c=(e*e-i*i+r*r)/(2*r);return n.clone().addScaledVector(o,c).addScaledVector(a,Math.sqrt(Math.max(0,e*e-c*c)))}function ts(n,t,e,i){const s=e.map((o,r)=>Vn(n.clone().lerp(t,r/(e.length-1))));return{geo:pr(s,e,7),color:i}}function cd(n,t=n.hip){const e=Ys(t),i=Ys(n.hip).sub(e),s=(m,w)=>new P(w*Math.abs(m[0]),m[1],m[2]).sub(e),o=new P(0,Math.cos(n.lean),-Math.sin(n.lean)),r=new P(0,Math.sin(n.lean),Math.cos(n.lean)),a=.03+.05*n.lean,c=m=>i.clone().addScaledVector(o,m).addScaledVector(r,a*Math.sin(Math.PI*Math.min(1,Math.max(0,m/rd)))),h=(m,w)=>({geo:pr(m.map(([x])=>Vn(c(x))),m.map(([,x,S])=>[x,S]),10),color:w}),l=[h([[-.07,.12,.1],[0,.16,.13],[.1,.165,.13],[.18,.15,.115]],Wn),h([[.14,.148,.112],[.28,.165,.125],[.42,.19,.13],[.52,.2,.115],[.6,.12,.08]],ue),{geo:new qn(.1,6,4),color:Wn,pos:Vn(c(.38).addScaledVector(r,.1)),rot:[-n.lean,0,0],scale:[1.3,1.9,.45]}],u=[];for(const m of[-1,1]){const w=new P(m,0,0),x=c(.52).addScaledVector(w,MS),S=s(n.hands,m),I=ad(x,S,_S,xS,x.clone().add(new P(m*.35,-.5,.35))),C=S.clone().addScaledVector(I.clone().sub(S).normalize(),.06);l.push({geo:new qn(.075,6,4),color:ue,pos:Vn(x)}),l.push(ts(x,I,[.068,.06,.05],ue),{geo:new qn(.05,6,4),color:ue,pos:Vn(I)}),l.push(ts(I,C,[.052,.052,.038],ue)),u.push(ts(C.clone().addScaledVector(I.clone().sub(C).normalize(),.09),C,[.05,.048],Wt)),u.push({geo:new qn(.058,6,4),color:Wt,pos:Vn(S),scale:[.9,.8,1.1]});const T=c(0).addScaledVector(w,.1),L=s(n.feet,m),V=L.clone().add(new P(0,.1,.04)),v=ad(T,V,gS,vS,s(n.knees,m));l.push(ts(T,v,[.1,.095,.078,.064],Wn),{geo:new qn(.066,6,4),color:Wn,pos:Vn(v)}),l.push(ts(v,V,[.062,.07,.055,.046],Wn)),u.push(ts(V,V.clone().addScaledVector(v.clone().sub(V).normalize(),.22),[.058,.062],Wt));const M=Te([[.08,-.04],[-.16,-.04],[-.2,0],[-.17,.05],[-.05,.08],[.02,.17],[.09,.17],[.1,.02]],.12,.02);u.push({geo:M,color:Wt,pos:Vn(L)})}const f=o.clone().lerp(new P(0,1,0),.6).normalize(),d=Vn(c(rd).addScaledVector(f,.19).add(new P(0,0,-.02)));l.push(ts(c(.54),Ys(d).addScaledVector(f,-.1),[.07,.06],Wn));const g=bS(),_=m=>({...m,pos:Vn(Ys(m.pos??[0,0,0]).add(Ys(d)))});l.push(...g.suit.map(_)),u.push(...g.gear.map(_));const p={chest:[.2,.3,.4,.5].map(m=>c(m).addScaledVector(r,-.13).add(e)),helmet:Ys(d).add(new P(0,-.84*Rp,0)).add(e)};return{suit:l,gear:u,visor:g.gloss.map(_),probes:p}}function yS(n){return{...n,lean:n.duck.lean,hip:n.duck.hip??n.hip}}function ma(n,t){return ds(`${n}:${t}`,()=>{const e=xo(n).rider,i=De(cd(e)[t]),s=De(cd(yS(e),e.hip)[t]);if(s.getAttribute("position").count!==i.getAttribute("position").count)throw new Error(`${n} ${t}: duck pose topology differs`);return i.morphAttributes.position=[s.getAttribute("position")],i.morphAttributes.normal=[s.getAttribute("normal")],i})}const Rp=.175;function Cp(n){const t=n.z<0?r0.smoothstep(-n.y,-.1,.45)*-n.z:0;return n.set(n.x*.86*(1-.16*t),n.y*.94,n.z*(n.z>0?1.14:1.02)*(1+.4*t)),n.y=Math.max(n.y,-.84+.26*Math.max(0,n.z)),n.multiplyScalar(Rp)}function Zr(n,...t){const e=new qn(...t),i=e.getAttribute("position"),s=new P;for(let o=0;o<i.count;o++)Cp(s.fromBufferAttribute(i,o)).multiplyScalar(n),i.setXYZ(o,s.x,s.y,s.z);return e.computeVertexNormals(),e}const Zc=(n,t,e,i=1)=>Vn(Cp(new P(n,t,e).normalize()).multiplyScalar(i));function bS(){return{gloss:[{geo:Zr(1,1,12,10),color:pS},{geo:Zr(1.02,1,12,4,Math.PI*1.5-1.05,2.1,.98,.66),color:mS}],gear:[...kt(n=>({geo:K(.018,.018,.01,6),color:Wt,pos:Zc(n*.92,.2,-.36,1.02),rot:[0,0,Math.PI/2]})),{geo:pr(Array.from({length:11},(n,t)=>Zc(Math.sin(t/10*Math.PI*2)*.5,-.9,Math.cos(t/10*Math.PI*2)*.5,.97)),Array(11).fill(.014),4),color:Wt},...kt(n=>({geo:y(.028,.012,.05),color:Wt,pos:Zc(n*.16,.9,-.4),rot:[-.4,0,0]}))],suit:[{geo:Zr(1.012,1,2,10,Math.PI*.5-.14,.28,0,1.75),color:ue},{geo:Zr(1.012,1,2,5,Math.PI*1.5-.14,.28,0,.9),color:ue}]}}function eu(n){const t=n.pts.map(c=>c[1]),e=Math.min(...t),i=Math.max(...t),s=[-1,1].map(c=>{const h=Te(n.pts,.035,0,n.windows);return h.translate(c*(n.w/2+.0175),0,0),{geo:rr(h,e,i,n.top),color:ue}}),[o,r,a]=n.roof;return s.push({geo:Nt(n.w*n.top+.05,.06,r-o,.025),color:ue,pos:[0,a,(o+r)/2]}),{paint:s,glass:[{geo:rr(Te(n.pts,n.w),e,i,n.top),color:wp}]}}function nu(n,t,e){return t.flatMap(i=>kt(s=>({geo:Ms(i,e,0,e+.08,-.3,Math.PI+.3,.012),color:Ie,pos:[s*(n/2+.004),0,0]})))}function iu(n,t,e,i){const s=a=>n/2+.025-a*.3,o={...i,w:i.wf},r={...i,w:i.wr};return[{...o,side:-1,pos:[-s(i.wf),i.r,t]},{...o,side:1,pos:[s(i.wf),i.r,t]},{...r,side:-1,pos:[-s(i.wr),i.r,e]},{...r,side:1,pos:[s(i.wr),i.r,e]}]}function su(n,t,e,i,s,o){const r=[];for(const a of[-1,1]){for(const c of t)r.push({geo:y(.012,s-i,.018),color:Ie,pos:[a*(n/2+.004),(i+s)/2,c]});r.push({geo:y(.03,.04,.16),color:pe,pos:[a*(n/2+.012),o,e]})}return r}function fo(n,t,e,i){return{paint:[{geo:Nt(.1,.12,.16,.035),color:ue,pos:[i*(n+.13),t+.04,e]}],detail:[{geo:Nt(.14,.04,.05,.015),color:Wt,pos:[i*(n+.05),t-.02,e]}]}}function Ss(n,t,e){return[{geo:y(.44,.14,.02),color:dS,pos:[0,t,n]},{geo:y(.4,.02,.025),color:Wt,pos:[0,t,n+(e?.003:-.003)]}]}const In="#f7f7f2",ni="#1b1c21",ou="#f2b632",Ca="#d6dae0",jo="#9e9e9e";function wn(n,t,e){n.shadeGradient(t,e,"#8a8a8a","#ffffff")}function Pp(n,t,e,i,s){n.decal(fs(t,e,i),In),n.decalLine(fs(t,e,i*.94),ni,i*.1),n.text(s,t,e,i*1.15,ni)}function SS(){const n=[{geo:new qn(.42,14,10),color:ue,pos:[0,.64,.46],scale:[.98,.78,1.42]},{geo:rr(Te([[-.74,.3],[-.5,.3],[-.48,.42],[-.53,1.04],[-.6,1.22],[-.68,1.2],[-.66,.9],[-.76,.46]],.62,.03),.3,1.22,.62),color:ue},{geo:Nt(.46,.08,.86,.03),color:Wn,pos:[0,.32,-.1]},{geo:Nt(.58,.12,.2,.05),color:ue,pos:[0,1.3,-.57]},{geo:new qn(.15,10,8),color:ue,pos:[0,1.28,-.66],scale:[1,.9,1.1]}],t=[...[-.13,0,.13].map(o=>({geo:Nt(.05,.02,.7,.008),color:Wt,pos:[o,.37,-.1]})),{geo:Te([[0,.94],[.84,.94],[.94,1],[.84,1.09],[.12,1.11],[0,1.04]],.38,.04),color:tu},...kt(o=>Vt([o*.27,1.32,-.57],[o*.38,1.3,-.55],.035,Wt)),Vt([-.22,1.33,-.56],[-.3,1.58,-.56],.012,pe),Vt([.17,.32,.55],[.2,.36,1],.06,pe),Vt([.2,.36,1],[.2,.36,1.04],.045,Ie),{geo:Te([[.22,.34],[.8,.2],[.86,.36],[.78,.42],[.28,.52]],.08,.02),color:Ep,pos:[-.15,0,0]},{geo:K(.07,.07,.04,10),color:pe,pos:[-.2,.3,.72],rot:[0,0,Math.PI/2]},{geo:Nt(.16,.07,.14,.02),color:Wt,pos:[0,.6,1.07]},...Ss(1.15,.6,!0)],e=[{geo:K(.1,.1,.05,14),color:_o,pos:[0,1.29,-.8],rot:[Math.PI/2,0,0]},{geo:K(.12,.12,.04,14),color:pe,pos:[0,1.29,-.78],rot:[Math.PI/2,0,0]},{geo:K(.055,.055,.02,10),color:pe,pos:[-.3,1.6,-.56],rot:[Math.PI/2,0,0]},{geo:Nt(.2,.08,.07,.015),color:bi,pos:[0,.768,1.022],rot:[-.62,0,0]},...kt(o=>({geo:Nt(.06,.05,.04,.01),color:bs,pos:[o*.2,1.24,-.74]}))],i={side(o){wn(o,.25,.6);const r=new Path2D;r.ellipse(.46,.64,.5,.2,0,Math.PI*.95,Math.PI*2.05),o.decalLine(r,In,.03);const a=new Path2D;a.ellipse(.46,.64,.44,.15,0,Math.PI*1,Math.PI*2),o.decalLine(a,ou,.014),o.decal(fs(.52,.66,.085),In),o.text("GR",.52,.66,.085,ni)},front(o){o.decalLine(Hi(0,.42,0,.92),Ca,.035);for(const r of[1,1.04,1.08])o.shadeLine(Hi(-.09,r,.09,r),"#7a7a7a",.016);wn(o,.25,.55)},back(o){wn(o,.25,.6)}},s=[{at:1,detail:[Vt([.22,1.33,-.56],[.3,1.58,-.56],.012,pe)],shiny:[{geo:K(.055,.055,.02,10),color:pe,pos:[.3,1.6,-.56],rot:[Math.PI/2,0,0]}]},{at:2,detail:[...kt(o=>Vt([o*.13,1,.78],[o*.13,.98,1.02],.016,pe)),Vt([-.13,.99,1.02],[.13,.99,1.02],.014,pe),...kt(o=>Vt([o*.13,.98,1.02],[o*.15,.8,.9],.016,pe))]},{at:3,tiltAt:2,tilt:[.3,0,.12],pivot:[0,.68,-.62],paint:[{geo:Ms(-.78,.3,.33,.41,.25,2.25,.26,.02,12),color:ue}]}];return{paint:n,detail:t,shiny:e,livery:i,loose:s,smoke:[.2,.38,1.05],wheels:[{pos:[0,.3,-.78],r:.3,w:.18,style:"scooter",spokes:0,rim:ys},{pos:[0,.3,.72],r:.3,w:.2,style:"scooter",spokes:0,rim:ys}],rider:{hip:[0,1.12,.12],lean:.25,hands:[.36,1.32,-.55],knees:[.2,1.05,-.12],feet:[.15,.45,-.28],duck:{lean:1.25,hip:[0,1.14,.24]}}}}function wS(){const n=[{geo:rr(Te([[-.62,.98],[.12,.98],[.22,1.12],[-.04,1.3],[-.5,1.28],[-.66,1.12]],.5,.045),.98,1.3,.72),color:ue},{geo:rr(Te([[.66,1.02],[1.16,1.2],[1.12,1.27],[.82,1.23],[.62,1.12]],.28,.03),1.02,1.27,.7),color:ue},...kt(o=>({geo:Nt(.03,.12,.34,.012),color:Wn,pos:[o*.24,1.13,-.24]})),...kt(o=>Vt([o*.12,1.12,-.74],[o*.2,.74,.32],.045,Wn)),...kt(o=>Vt([o*.12,1.05,-.72],[o*.16,.56,-.34],.04,Wn))],t=[{geo:Nt(.42,.36,.52,.06),color:Ep,pos:[0,.6,-.04]},...[0,1,2,3].map(o=>({geo:y(.46,.03,.34),color:ys,pos:[0,.82+o*.045,-.12],rot:[.25,0,0]})),{geo:Nt(.4,.3,.06,.02),color:Ie,pos:[0,.82,-.47],rot:[.2,0,0]},{geo:Te([[.1,1.06],[.82,1.1],[.92,1.18],[.6,1.22],[.14,1.21]],.34,.03),color:tu},...kt(o=>Vt([o*.1,.38,-1.05],[o*.1,.72,-.95],.065,Wt)),{geo:Nt(.34,.06,.14,.02),color:Wt,pos:[0,1.12,-.78]},{geo:Nt(.34,.05,.12,.02),color:Wt,pos:[0,1.22,-.75]},{geo:Nt(.18,.08,.1,.02),color:Ie,pos:[0,1.29,-.74],rot:[-.4,0,0]},Vt([-.36,1.3,-.64],[.36,1.3,-.64],.025,Wt),...kt(o=>Vt([o*.3,1.3,-.64],[o*.42,1.3,-.62],.04,Qh)),Vt([-.26,1.3,-.65],[-.34,1.52,-.62],.012,Wt),{geo:Nt(.15,.08,.04,.015),color:Wt,pos:[-.36,1.54,-.62]},...kt(o=>Vt([o*.15,.62,.32],[o*.13,.38,1],.04,Wt)),...kt(o=>Vt([o*.18,.6,.3],[o*.3,.6,.3],.025,Wt)),...kt(o=>Vt([o*.18,.92,.3],[o*.1,1.08,.95],.025,Wt)),{geo:Nt(.03,.08,.5,.01),color:Wt,pos:[-.17,.5,.68],rot:[-.3,0,0]},Vt([.1,.62,-.34],[.2,.36,-.02],.035,pe),Vt([.2,.36,-.02],[.24,.5,.6],.04,pe),Vt([.24,.48,.5],[.26,.66,1.02],.08,pe,8,.07),Vt([.26,.66,1.02],[.265,.67,1.05],.06,Ie,8),...kt(o=>({geo:K(.12,.12,.03,12),color:ys,pos:[o*.22,.58,0],rot:[0,0,Math.PI/2]})),...kt(o=>Vt([o*.135,.44,.85],[o*.12,1.04,.8],.028,Wt)),...kt(o=>Vt([o*.133,.55,.84],[o*.123,.9,.81],.045,pa,8)),{geo:Ms(1,.38,.43,.47,.45,1.75,.24,0,8),color:Wt},Vt([0,1.16,.9],[0,.88,1.2],.03,Wt),...kt(o=>Vt([o*.02,1.01,1.06],[o*.13,1.01,1.08],.012,Wt)),...Ss(1.215,.8,!0).map(o=>({...o,rot:[-.3,0,0]}))],e=[...kt(o=>Vt([o*.1,.7,-.96],[o*.1,1.14,-.8],.045,pe)),{geo:K(.15,.11,.16,12),color:pe,pos:[0,1.1,-.9],rot:[Math.PI/2,0,0]},{geo:K(.13,.13,.03,12),color:_o,pos:[0,1.1,-.99],rot:[Math.PI/2,0,0]},{geo:Nt(.14,.06,.05,.015),color:bi,pos:[0,1.252,1.17],rot:[-.52,0,0]},...kt(o=>({geo:Nt(.07,.05,.05,.012),color:bs,pos:[o*.2,1.06,-.84]})),...kt(o=>({geo:Nt(.06,.05,.05,.012),color:bs,pos:[o*.15,1.01,1.08]}))],i={side(o){o.decal(cr([[-.62,1.12],[.16,1.09],[.19,1.15],[-.62,1.19]]),In),o.decalLine(Hi(-.62,1.11,.16,1.085),ni,.012),o.decalLine(Hi(-.62,1.2,.19,1.16),ni,.012),o.shade(ei(-.32,1,-.08,1.07),"#b0b0b0"),o.text("3",.95,1.16,.1,In,ni),wn(o,.7,1.05)},top(o){for(const r of[-.065,.065])o.decal(ei(r-.02,-.64,r+.02,.2),In);for(const r of[-.04,.04])o.decal(ei(r-.012,.7,r+.012,1.15),In)}},s=[{at:1,detail:[Vt([.26,1.3,-.65],[.34,1.52,-.62],.012,Wt),{geo:Nt(.15,.08,.04,.015),color:Wt,pos:[.36,1.54,-.62]}]},{at:2,paint:[{geo:Ms(-1.05,.38,.42,.47,.35,1.95,.18,.015,10),color:ue}]}];return{paint:n,detail:t,shiny:e,livery:i,loose:s,smoke:[.265,.68,1.06],wheels:[{pos:[0,.38,-1.05],r:.38,w:.17,style:"bike",spokes:5,rim:_h},{pos:[0,.38,1],r:.38,w:.23,style:"bike",spokes:5,rim:_h}],rider:{hip:[0,1.2,.24],lean:.62,hands:[.36,1.31,-.62],knees:[.24,1,-.12],feet:[.27,.62,.26],duck:{lean:1.1,hip:[0,1.24,.36]}}}}function Ii(n,t=12){return pr(n.map(([e,i])=>[0,i,e]),n.map(([,,e,i])=>[e,i]),t)}function Io(n,t,e,i=1){let s=0;for(;s<n.length-2&&t>n[s+1][0];)s++;const[o,r,a,c]=n[s],[h,l,u,f]=n[s+1],d=Math.min(1,Math.max(0,(t-o)/(h-o))),g=(_,p)=>_+(p-_)*d;return[g(a,u)*Math.cos(e)*i,g(r,l)+g(c,f)*Math.sin(e)*i,t]}const ld=(n,t,e)=>({geo:pr(n,t,4),color:e}),hd=[[-1.22,1,.05,.04],[-1.12,1,.18,.12],[-.98,1.02,.25,.16],[-.82,.98,.29,.2],[-.64,.86,.31,.32],[-.4,.76,.31,.34],[-.1,.72,.3,.32],[.15,.72,.26,.3],[.32,.66,.16,.2],[.42,.62,.05,.06]],Do=[[.5,1.06,.13,.05],[.65,1.12,.17,.09],[.85,1.2,.165,.1],[1.05,1.28,.13,.08],[1.24,1.35,.085,.05]],ud=n=>[Vt([n*.2,1.12,-.86],[n*.36,1.2,-.84],.014,Wt),{geo:Nt(.14,.07,.05,.015),color:Wt,pos:[n*.38,1.21,-.84]}];function ES(){const n=[{geo:Ii(hd,14),color:ue},{geo:Ii([[-.55,1.08,.12,.05],[-.42,1.13,.21,.11],[-.2,1.16,.24,.13],[.02,1.13,.22,.12],[.18,1.1,.15,.08],[.24,1.1,.06,.03]]),color:ue},{geo:Ii(Do),color:ue},{geo:Ms(-1.02,.38,.42,.46,.4,1.6,.16,.012,8),color:ue}],t=[{geo:Ii([[-.62,.45,.1,.04],[-.42,.41,.24,.08],[0,.41,.25,.09],[.28,.44,.18,.07],[.38,.47,.06,.03]]),color:Wt},{geo:Ii([[.14,1.1,.09,.03],[.24,1.13,.14,.06],[.5,1.15,.13,.06],[.64,1.17,.09,.04]],10),color:tu},...kt(o=>({geo:y(.012,.035,.2),color:Ie,pos:[o*.282,.68,0],rot:[-.5,0,0]})),...kt(o=>({geo:y(.012,.035,.2),color:Ie,pos:[o*.27,.6,.06],rot:[-.5,0,0]})),{geo:Nt(.1,.05,.04,.015),color:Ie,pos:[0,.98,-1.2]},{geo:Ii([[1.236,1.35,.083,.048],[1.248,1.35,.078,.044]],8),color:Ie},...kt(o=>Vt([o*.1,.38,-1.02],[o*.1,.66,-.94],.06,Wt)),{geo:Nt(.32,.05,.12,.02),color:Wt,pos:[0,1.2,-.68]},...kt(o=>Vt([o*.12,1.18,-.68],[o*.32,1.12,-.6],.025,Wt)),...kt(o=>Vt([o*.26,1.12,-.61],[o*.36,1.12,-.58],.04,Qh)),...ud(-1),...kt(o=>({geo:Nt(.05,.1,.72,.02),color:ys,pos:[o*.15,.5,.66],rot:[.32,0,0]})),...kt(o=>Vt([o*.18,.72,.4],[o*.3,.72,.42],.025,Wt)),Vt([.12,.44,.2],[.2,.7,.62],.04,pe),Vt([.2,.66,.55],[.22,.86,.98],.085,ys,10,.07),Vt([.22,.86,.98],[.225,.87,1.01],.06,Ie,10),{geo:Ii([[.28,.74,.15,.22],[.5,.9,.13,.16],[.75,1.06,.11,.09],[1,1.18,.07,.04]],10),color:Wt},{geo:Ms(1,.38,.43,.47,.45,1.75,.26,0,8),color:Wt},Vt([0,1.17,.95],[0,.98,1.22],.03,Wt),...kt(o=>Vt([o*.02,1.064,1.1],[o*.11,1.064,1.12],.012,Wt)),...Ss(1.23,.9,!0).map(o=>({...o,rot:[-.35,0,0]}))],e=[...kt(o=>Vt([o*.1,.64,-.95],[o*.1,1.18,-.7],.05,pa)),...kt(o=>{const r=[[-1.19,.3],[-1.12,.45],[-1.03,.55],[-.94,.6]].map(([a,c])=>{const h=Io(hd,a,c);return[o*h[0],h[1],h[2]]});return ld(r,[.01,.024,.022,.008],Tp)}),ld([Io(Do,1,Math.PI-.25,1.1),Io(Do,1.15,Math.PI-.12,1.12),[-.075,1.35,1.255],[.075,1.35,1.255],Io(Do,1.15,.12,1.12),Io(Do,1,.25,1.1)],[.01,.02,.022,.022,.02,.01],bi),...kt(o=>({geo:Nt(.06,.04,.04,.01),color:bs,pos:[o*.13,1.064,1.12]}))],i={side(o){o.decal(cr([[-1.25,.76],[.55,.56],[.55,.2],[-1.25,.2]]),ni),o.decalLine(Hi(-1.25,.785,.55,.585),ou,.022),Pp(o,-.24,.88,.15,"88"),o.text("88",.92,1.27,.09,In,ni)},top(o){for(const r of[-.045,.045])o.decal(ei(r-.016,-1.15,r+.016,1.2),In)},front(o){o.decal(cr([[-.2,.86],[.2,.86],[.1,.8],[-.1,.8]]),ni)}},s=[{at:1,detail:ud(1)},{at:2,shiny:[{geo:Ii([[-.98,1.13,.14,.03],[-.84,1.18,.2,.08],[-.68,1.24,.19,.11],[-.56,1.27,.14,.09],[-.5,1.27,.06,.04]]),color:wp}]}];return{paint:n,detail:t,shiny:e,livery:i,loose:s,smoke:[.225,.88,1.03],wheels:[{pos:[0,.38,-1.02],r:.38,w:.18,style:"bike",spokes:3,rim:pa},{pos:[0,.38,1],r:.38,w:.26,style:"bike",spokes:3,rim:pa}],rider:{hip:[0,1.22,.34],lean:.95,hands:[.34,1.12,-.58],knees:[.26,.98,-.18],feet:[.29,.74,.42],duck:{lean:1.35,hip:[0,1.26,.44]}}}}function TS(){const t=Te([[-1.58,.3],[1.6,.3],[1.66,.42],[1.64,.94],[1.5,1],[-.85,.97],[-1.55,.82],[-1.66,.6],[-1.64,.4]],1.78,.06),e=eu({pts:[[-.9,.95],[1.58,.95],[1.5,1.58],[1.32,1.66],[-.22,1.66],[-.42,1.6]],w:1.6,top:.86,windows:[[[-.6,1.03],[.3,1.03],[.3,1.56],[-.2,1.56]],[[.42,1.03],[1.42,1.03],[1.36,1.5],[1.24,1.56],[.42,1.56]]],roof:[-.22,1.36,1.67]}),i=fo(.8,1.04,-.66,-1),s=[{geo:t,color:ue},...e.paint.slice(0,2),...i.paint],o=[{...e.paint[2],color:xh},{geo:Nt(1.3,.05,.3,.02),color:xh,pos:[0,1.62,1.42],rot:[-.25,0,0]}],r=[...i.detail,...nu(1.78,[-1.05,1.05],.36),{geo:Nt(1.78+.08,.22,.28,.08),color:jc,pos:[0,.38,-1.66]},...kt(l=>({geo:Nt(.05,.14,1.3,.02),color:jc,pos:[l*(1.78/2+.02),.36,0]})),{geo:Nt(.72,.2,.06,.03),color:Ie,pos:[0,.58,-1.7]},...su(1.78,[-.72,.42],.25,.42,.95,.86),...Ss(1.81,.62,!0),...Ss(-1.81,.4,!1)],a=[...e.glass,...kt(l=>({geo:K(.17,.17,.05,14),color:pe,pos:[l*.58,.72,-1.7],rot:[Math.PI/2,0,0]})),...kt(l=>({geo:K(.14,.14,.06,14),color:_o,pos:[l*.58,.72,-1.72],rot:[Math.PI/2,0,0]})),...kt(l=>({geo:Nt(.16,.34,.05,.03),color:bi,pos:[l*.74,.76,1.72]})),...kt(l=>({geo:Nt(.1,.06,.05,.015),color:bs,pos:[l*.82,.55,-1.72]}))],c={side(l){wn(l,.22,.62),l.accentLine(Hi(-1.45,.9,1.5,.9),.028);for(let u=0;u<6;u++){const f=u/6*Math.PI*2;l.decal(fs(-.16+Math.cos(f)*.07,.68+Math.sin(f)*.07,.055),In)}l.decal(fs(-.16,.68,.045),ou),l.side>0&&l.shadeLine(fs(1.28,.8,.07),jo,.012)},top(l){for(const u of[-.62,.62])l.shadeLine(Hi(u,-1.62,u,-.95),jo,.014)},front(l){wn(l,.25,.62),l.text("GR",0,.88,.1,Ca)},back(l){wn(l,.25,.62),l.text("PEBBLE",0,.9,.08,Ca)}},h=[{at:1,...fo(.8,1.04,-.66,1)},{at:3,tiltAt:2,tilt:[0,0,-.2],pivot:[-1.78/2,.38,1.66],detail:[{geo:Nt(1.78+.08,.22,.28,.08),color:jc,pos:[0,.38,1.66]}]}];return{paint:s,detail:r,shiny:a,accent:o,livery:c,loose:h,smoke:[0,.98,-1.25],wheels:iu(1.78,-1.05,1.05,{r:.36,wf:.3,wr:.3,style:"car",spokes:4,rim:ys})}}function AS(){const t=Te([[-2.12,.3],[2.12,.3],[2.2,.42],[2.18,.98],[1.95,1.04],[-.4,1],[-2.1,.96],[-2.22,.8],[-2.22,.42]],2,.06),e=eu({pts:[[-.45,.98],[1.75,.98],[.95,1.5],[.1,1.52]],w:1.7,top:.8,windows:[[[-.2,1.06],[.55,1.06],[.55,1.44],[.15,1.44]],[[.66,1.06],[1.36,1.06],[.9,1.42],[.66,1.44]]],roof:[.1,.95,1.52]}),i=[{geo:t,color:ue},...e.paint,{geo:Te([[-1.75,1],[-.9,1.02],[-.95,1.16],[-1.55,1.13]],.6,.03),color:Wn},...[-1.4,1.35].flatMap(f=>kt(d=>({geo:Ms(f,.42,.5,.58,-.15,Math.PI+.15,.08,.02),color:ue,pos:[d*(2/2+.02),0,0]})))],s=fo(.86,1.1,-.28,-1);i.push(...s.paint);const o=(f,d,g,_=0)=>kt(p=>({geo:y(.24,.02,d-f),color:xh,pos:[p*.24,g,(f+d)/2],rot:[_,0,0]})),r=[...o(-2.15,-1.78,1.028,-.024),...o(-.88,-.42,1.059,-.024),...o(.12,.95,1.555),...o(1.75,1.95,1.104,-.017)],a=[...s.detail,...nu(2,[-1.4,1.35],.42),{geo:Nt(.46,.1,.04,.015),color:Ie,pos:[0,1.1,-.897],rot:[-.34,0,0]},{geo:Nt(2-.1,.34,.08,.04),color:Ie,pos:[0,.72,-2.27]},...[.6,.72,.84].map(f=>({geo:Nt(.6,.02,.03,.006),color:pe,pos:[0,f,-2.31]})),...kt(f=>({geo:Nt(.06,.12,2,.025),color:pe,pos:[f*(2/2+.03),.38,0]})),...su(2,[-.42,.62],.42,.42,.98,.88),...Ss(2.27,.65,!0),{geo:Nt(2-.3,.12,.08,.03),color:Ie,pos:[0,.32,2.24]},{geo:Nt(2-.24,.22,.04,.015),color:Ie,pos:[0,.84,2.255]}],c=[...e.glass,{geo:Nt(2+.08,.18,.16,.06),color:pe,pos:[0,.46,-2.28]},...[.52,.78].flatMap(f=>kt(d=>({geo:K(.1,.1,.06,12),color:_o,pos:[d*f,.73,-2.3],rot:[Math.PI/2,0,0]}))),...kt(f=>({geo:Nt(.6,.14,.04,.02),color:bi,pos:[f*.48,.84,2.275]})),...kt(f=>Vt([f*.55,.28,2.1],[f*.55,.28,2.33],.06,pe,10))],h=iu(2,-1.4,1.35,{r:.42,wf:.32,wr:.4,style:"car",spokes:5,rim:pe}),l={side(f){wn(f,.22,.6),Pp(f,.1,.68,.25,"07"),f.side>0&&f.shadeLine(fs(1.62,.84,.08),jo,.014);for(const d of[.7,.78])f.shade(ei(-1,d,-.72,d+.035),"#6a6a6a")},top(f){f.shadeLine(ei(-.86,-2.14,.86,-.48),jo,.016),f.shadeLine(ei(-.82,1.76,.82,2.14),jo,.016)},front(f){wn(f,.25,.6)},back(f){wn(f,.25,.6),f.text("BRUTE",0,.99,.09,Ca)}},u=[{at:1,...fo(.86,1.1,-.28,1)},{at:2,paint:[{geo:Nt(2-.1,.1,.22,.03),color:ue,pos:[0,1.1,2.08]}]},{at:3,tiltAt:2,tilt:[0,0,.18],pivot:[-2/2,.46,2.28],shiny:[{geo:Nt(2+.08,.18,.16,.06),color:pe,pos:[0,.46,2.28]}]}];return{paint:i,detail:a,shiny:c,accent:r,wheels:h,livery:l,loose:u,smoke:[0,1.18,-1.3]}}function RS(){const t=Te([[-2,.28],[2.02,.28],[2.08,.42],[2.06,.86],[1.9,.92],[-.55,.86],[-1.95,.62],[-2.08,.45]],1.9,.06),e=eu({pts:[[-.6,.85],[1.75,.9],[.75,1.3],[-.05,1.32]],w:1.62,top:.78,windows:[[[-.38,.93],[.95,.95],[.62,1.24],[0,1.26]]],roof:[-.05,.75,1.32]}),i=l=>[l*.6,.79,-1.62],s=[{geo:t,color:ue},...e.paint,...kt(l=>({geo:Nt(.46,.22,.24,.03),color:ue,pos:i(l)}))],o=fo(.8,.98,-.32,-1);s.push(...o.paint);const r=[...o.detail,...nu(1.9,[-1.3,1.3],.4),{geo:Nt(1.9+.04,.05,.3,.02),color:Wt,pos:[0,.27,-1.94]},{geo:Nt(1.9-.3,.12,.06,.03),color:Ie,pos:[0,.42,-2.13]},...kt(l=>({geo:Nt(.04,.22,.4,.02),color:Ie,pos:[l*(1.9/2+.005),.6,.85]})),...kt(l=>({geo:Nt(.04,.08,2,.02),color:Wt,pos:[l*(1.9/2+.02),.32,0]})),...[-.25,0,.25].map(l=>({geo:Nt(.06,.015,.5,.006),color:Ie,pos:[l,.795,-1.3],rot:[-.17,0,0]})),{geo:Nt(1.9-.2,.16,.22,.03),color:Wt,pos:[0,.32,2]},...su(1.9,[-.5,.95],.75,.4,.86,.8),{geo:Nt(1.9-.12,.26,.04,.012),color:Ie,pos:[0,.7,2.14]},...Ss(2.17,.65,!0),...kt(l=>({geo:Nt(.42,.15,.02,.008),color:Ie,pos:[i(l)[0],.82,-1.745]}))],a=[...e.glass,...[-1,1].flatMap(l=>[-.095,.095].map(u=>({geo:y(.18,.105,.02),color:_o,pos:[i(l)[0]+u,.82,-1.755]}))),...kt(l=>({geo:Nt(.36,.04,.16,.015),color:bs,pos:[l*.6,.6,-1.99],rot:[.62,l*.22,0]})),...[-1,1].flatMap(l=>[{geo:y(.13,.15,.02),color:bs,pos:[l*.79,.73,2.165]},{geo:y(.17,.15,.02),color:bi,pos:[l*.635,.73,2.165]},{geo:y(.13,.15,.02),color:bi,pos:[l*.48,.73,2.165]},{geo:y(.07,.15,.02),color:fS,pos:[l*.375,.73,2.165]}]),...kt(l=>Vt([l*.16,.34,2],[l*.16,.34,2.16],.055,pe,10))],c={side(l){wn(l,.2,.55),l.accent(cr([[-1.78,.47],[1.98,.73],[1.98,.81],[-1.78,.55]])),l.decalLine(Hi(-1.72,.6,1.98,.86),In,.016),l.text("24",-.1,.45,.24,In,ni)},top(l){for(const u of[-.17,.17])l.accent(ei(u-.045,-2.15,u+.045,2.15))},front(l){wn(l,.2,.5);for(const u of[-.17,.17])l.accent(ei(u-.045,.5,u+.045,.75))},back(l){wn(l,.2,.55);for(const u of[-.17,.17])l.accent(ei(u-.045,.86,u+.045,.95))}},h=[{at:2,tiltAt:1,tilt:[.22,0,-.14],pivot:[.55,.9,1.87],paint:[{geo:Nt(1.9-.06,.05,.36,.02),color:ue,pos:[0,1.22,1.85]},...kt(l=>({geo:Nt(.04,.14,.4,.015),color:ue,pos:[l*(1.9/2-.04),1.2,1.85]}))],detail:kt(l=>Vt([l*.55,.9,1.88],[l*.55,1.2,1.86],.035,Wt))},{at:2,...fo(.8,.98,-.32,1)}];return{paint:s,detail:r,shiny:a,livery:c,loose:h,smoke:[0,.92,-1.4],wheels:iu(1.9,-1.3,1.3,{r:.4,wf:.32,wr:.36,style:"car",spokes:10,rim:"#8d939e"})}}const ru=n=>n==="zippy"||n==="viper"||n==="bolt"?"bike":"car",Lp={zippy:SS,viper:wS,bolt:ES,pebble:TS,brute:AS,arrow:RS},fd=new Map,dd=new Map,pd=new Map;function xo(n){let t=fd.get(n);return t||(t=Lp[n](),fd.set(n,t)),t}function Ip(n){const t=ds(`${n}:paint`,()=>De(xo(n).paint));t.computeBoundingBox();const e=t.boundingBox.clone().expandByScalar(.02),i={min:e.min,max:e.max};return t.getAttribute("uv")||(Ra(t,i),da(t,i,ru(n)==="bike")),{geo:t,bounds:i}}function Mh(n){return n.color===_o?{...n,glow:"#fff1c4"}:n.color===Tp?{...n,glow:"#e4f2ff"}:n.color===bi?{...n,glow:bi}:n}function Dp(n){var c;const t=xo(n),{geo:e,bounds:i}=Ip(n),s=ru(n)==="bike",o=ds(`${n}:detail`,()=>{const h=De(t.detail.map(Mh));return da(h,i,s),h}),r=ds(`${n}:shiny`,()=>{const h=De(t.shiny.map(Mh));return Ra(h,i),da(h,i,s),h}),a=(c=t.accent)!=null&&c.length?ds(`${n}:accent`,()=>{const h=De(t.accent);return Ra(h,i),da(h,i,s),h}):null;return{paint:e,detail:o,shiny:r,accent:a,bounds:i}}const md=new Map;function Up(n,t){const e=`${n}:${t}`;let i=md.get(e);if(!i){const s=xo(n).loose[t],{bounds:o}=Ip(n),r={},a=new Nn;for(const h of["paint","detail","shiny"]){const l=s[h];if(!(l!=null&&l.length))continue;const u=De(l.map(Mh));h!=="detail"&&Ra(u,o),u.computeBoundingBox(),a.union(u.boundingBox),r[h]=u}const c=s.pivot?new P(...s.pivot):a.getCenter(new P);for(const h of Object.values(r))h.translate(-c.x,-c.y,-c.z);i={pivot:c,geos:r},md.set(e,i)}return i}function ds(n,t){let e=dd.get(n);return e||(e=t(),dd.set(n,e)),e}function Np(n,t,e){const i=xo(n),s=new Ke,o=new Ke;s.add(o);const r=zf(t),a=Dp(n);let c=pd.get(n);c||(c=lS(i.livery,a.bounds),pd.set(n,c));const h=new ht(e);hS(r,c,h);const l=G0(Bf.clone()),u=Kc(r,"paint"),f=gb(r),d=Kc(l,"shiny"),g=[new Xt(a.paint,r),new Xt(a.detail,as),new Xt(a.shiny,l)],_=a.accent?zf(e):null,p=_?Kc(_,"shiny"):null;a.accent&&g.push(new Xt(a.accent,_)),o.add(...g);const m={paint:r,detail:as,shiny:l},w=i.loose.map((v,M)=>{const{pivot:B,geos:U}=Up(n,M),F=new Ke;F.position.copy(B);for(const q of["paint","detail","shiny"]){const z=U[q];z&&F.add(new Xt(z,m[q]))}return o.add(F),{spec:v,group:F,off:!1}});let x=0;const S=[0,0],I=new P(...i.smoke),C=[];for(const v of i.wheels){const{pos:M,...B}=v,U=new Xt(ds(`wheel:${JSON.stringify(B)}`,()=>Ap(B)),as);U.position.set(...M),o.add(U),C.push(U)}let T=null;const L=[];let V=null;if(ru(n)==="bike"&&s.scale.setScalar(1.18),i.rider){const v=i.rider;T=new Ke,V=PM(e),L.push(new Xt(ma(n,"suit"),V),new Xt(ma(n,"gear"),as),new Xt(ma(n,"visor"),Bf)),T.add(...L),T.position.set(...v.hip),o.add(T)}return{group:s,body:o,wheels:C,wheelRadius:i.wheels[0].r,rider:T,paint:r,hull:g,finish:f,get damage(){return x},setColor(v,M){r.color.set(v),h.set(M),_==null||_.color.set(M),V==null||V.color.set(M),f.id&&f.set(f.id)},setDamage(v,M=!1){x=Math.max(0,Math.min(2,v));const B=[];for(const U of w){const F=x>=U.spec.at;F&&!U.off&&B.push(U.group),U.off=F,U.group.visible=!U.off;const q=U.spec.tilt&&x>=(U.spec.tiltAt??99)?U.spec.tilt:[0,0,0];U.group.rotation.set(q[0],q[1],q[2])}if(M){S[0]=x===1?1:0,S[1]=x===2?1:0,u.value=d.value=id[x],p&&(p.value=u.value);for(const U of g)U.morphTargetInfluences.splice(0,2,S[0],S[1])}return B},wreck(){const v=[];for(const M of w)M.off||(M.off=!0,M.group.visible=!1,v.push(M.group));return v},update(v){const M=1-Math.exp(-14*v);S[0]+=((x===1?1:0)-S[0])*M,S[1]+=((x===2?1:0)-S[1])*M;for(const U of g)U.morphTargetInfluences[0]=S[0],U.morphTargetInfluences[1]=S[1];const B=id[x];u.value+=(B-u.value)*M,d.value=u.value,p&&(p.value=u.value)},setDuck(v){for(const M of L)M.morphTargetInfluences[0]=v},smokeAt(v){return o.localToWorld(v.copy(I))},dispose(){r.dispose(),l.dispose(),_==null||_.dispose(),V==null||V.dispose()}}}function CS(){for(const n of Object.keys(Lp)){const t=xo(n);Dp(n),t.loose.forEach((e,i)=>Up(n,i));for(const{pos:e,...i}of t.wheels)ds(`wheel:${JSON.stringify(i)}`,()=>Ap(i));if(t.rider)for(const e of["suit","gear","visor"])ma(n,e)}}const PS=16,gd=new P(0,1,0),Jc=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],vd=new ii,_d=new P,Qc=new Nn,LS=new Nn;class xd{constructor(t,e,i,s=[t],o=6){this.obj=t,this.vel=e,this.spin=i,this.hull=s,this.restAxes=o,this.t=0,this.settled=!1,this.target=null}step(t,e){if(t<=0)return;this.t+=t;const i=this.obj;if(i.position.z+=e*t,this.settled)return;if(this.target){i.quaternion.slerp(this.target,1-Math.exp(-9*t)),i.position.y-=this.bottom(),i.quaternion.angleTo(this.target)<.01&&(i.quaternion.copy(this.target),i.position.y-=this.bottom(),this.settled=!0);return}this.vel.y-=PS*t,i.position.addScaledVector(this.vel,t);const s=this.spin.length();s>1e-4&&(vd.setFromAxisAngle(_d.copy(this.spin).divideScalar(s),s*t),i.quaternion.premultiply(vd));const o=this.bottom();if(o<0){i.position.y-=o;const r=this.vel.y<-1.2;this.vel.y=r?-this.vel.y*.32:Math.max(0,this.vel.y);const a=Math.exp(-5*t);this.vel.x*=a,this.vel.z*=a,this.spin.multiplyScalar(r?.55:Math.exp(-5*t)),!r&&this.vel.lengthSq()<.6&&this.spin.lengthSq()<6&&this.beginSettle()}}beginSettle(){const t=this.obj;let e=Jc[2],i=-2;for(let o=0;o<this.restAxes;o++){const r=_d.copy(Jc[o]).applyQuaternion(t.quaternion).dot(gd);r>i&&(i=r,e=Jc[o])}const s=e.clone().applyQuaternion(t.quaternion);this.target=new ii().setFromUnitVectors(s,gd).multiply(t.quaternion),this.vel.set(0,0,0),this.spin.set(0,0,0)}bottom(){this.obj.updateMatrixWorld(!0),Qc.makeEmpty();for(const t of this.hull)Qc.union(LS.setFromObject(t));return Qc.min.y}}const Md=140,Uo=new Ee,Gn=r0.lerp,Ge=new P,IS=new ae().makeScale(0,0,0);function kp(n,t){const e=t??(n<.6?"day":n<.8?"sunset":"night");return e==="sunset"?18.15:e==="night"?23:12}function Fp(n){const t=new rM("#fff8e8","#6a8f5a",1.6),e=new N0("#fff2d6",2);return e.position.set(-6,12,5),n.add(t,e),{hemi:t,sun:e}}class DS{constructor(){this.scene=new E0,this.chase=new SM,this.particles=new dM,this.smoke=new pM,this.flying=[],this.worldSpeed=0,this.crashed=!1,this.wreckBody=null,this.smokeT=0,this.sparkT=0,this.vehicle=null,this.vehicleId=null,this.vehicleLen=1.8,this.obstacleMeshes=new Map,this.meshPool=[],this.blinkers=new Map,this.blinkerPool=[],this.blinkerMat=new mn({color:"#ffb300"}),this.specials=new Map,this.specialPool={golden:[],wrench:[],magnet:[]},this.obstacleGlow={value:0},this.obstacleMat=V0(this.obstacleGlow),this.headlight=new cM("#fff1d0",0,60,.5,.6,1.1),this.pool=UM(),this.headlightMode="spot",this.seen=new Set,this.time=0,this.titleBiome=Math.floor(Math.random()*An.length),this.titleHour=kp(Math.random()),this.wheelSpin=0,this.duck=0,this.oilPrev=0,this.oilDir=1,this.alpha=1,this.idleCam=new rn(50,9/16,.5,300),this.reducedMotion=!1,this.trailT=0,this.world=new Db(this.scene,Fp(this.scene)),this.shadow=mM(1.4,2.6),this.scene.add(this.shadow),this.marker=gM(),this.scene.add(this.marker),this.scene.add(this.particles.points),this.scene.add(this.smoke.mesh),this.goldMat=eS(new Yn({vertexColors:!0,flatShading:!0,emissive:new ht("#ffb000"),emissiveIntensity:.45})),this.gears=new Fh(Qb(),this.goldMat,Md),this.gears.frustumCulled=!1,this.gears.count=0,this.scene.add(this.gears),this.specialGeo={golden:tS(),wrench:nS(),magnet:iS()};const t=new Ba(O.magnetRadius*.5,.05,6,32);this.magnetRing=new Xt(t,new mn({color:"#5aa9ff",transparent:!0,opacity:.5})),this.magnetRing.rotation.x=-Math.PI/2,this.magnetRing.visible=!1,this.scene.add(this.magnetRing),this.headlight.visible=!1,this.pool.visible=!1,this.scene.add(this.headlight,this.headlight.target,this.pool)}compileShaders(t){t.compile(this.scene,this.chase.camera),this.headlight.visible=!0,t.compile(this.scene,this.chase.camera),this.headlight.visible=!1}updateNight(t,e){const i=this.world.day.night,s=e&&i>.01;this.headlight.visible=s&&this.headlightMode==="spot",this.headlight.intensity=140*i,this.headlight.position.set(t,1.4,-.2),this.headlight.target.position.set(t,0,-24),this.pool.visible=s&&this.headlightMode==="pool",this.pool.position.set(t,.03,-14),this.pool.material.opacity=.75*i,this.obstacleGlow.value=.22*i,this.goldMat.emissiveIntensity=.45+.35*i}prepareWorld(){this.world.prepare([An[this.titleBiome].id,"suburb"])}setVehicle(t,e,i){if(this.vehicleId!==t){this.vehicle&&(this.scene.remove(this.vehicle.group),this.vehicle.dispose()),this.vehicle=Np(t,Qn(e),Qn(i)),this.vehicleId=t;const s=vo(t);this.vehicleLen=s.cls==="bike"?O.bikeHitboxLength:O.carHitboxLength,this.shadow.scale.set(s.cls==="bike"?.9:1.6,1,s.cls==="bike"?1:1.75),this.scene.add(this.vehicle.group)}this.vehicle.setColor(Qn(e),Qn(i)),this.vehicle.finish.set(z0(e))}resize(t){this.chase.resize(t),this.idleCam.aspect=t,this.idleCam.updateProjectionMatrix()}beginRun(t){this.particles.clear(),this.restoreVehicle(),this.smoke.clear();for(const e of this.obstacleMeshes.values())this.releaseMesh(e);this.obstacleMeshes.clear();for(const[e,i]of this.specials)this.releaseSpecial(e,i);this.specials.clear();for(const e of this.blinkers.values())this.releaseBlinker(e);this.blinkers.clear(),this.chase.snap(t.vehicle.x),this.chase.reducedMotion=this.reducedMotion,this.vehicle&&(this.vehicle.group.rotation.set(0,0,0),this.vehicle.group.visible=!0)}renderRun(t,e,i,s,o=1){var h;this.time+=i,this.alpha=o;const r=Gn(e.prevDistance,e.distance,o);if(this.syncObstacles(e,r),this.syncPickups(e,r,i),this.syncVehicle(e,i),s>0){const l=r-s;this.marker.visible=l>-200&&l<30,this.marker.position.z=l}else this.marker.visible=!1;this.crashed=e.crashed,this.worldSpeed=e.crashed?0:e.speed,this.particles.update(i,this.worldSpeed),this.emitDamage(e,i),this.smoke.update(i,this.worldSpeed*.35),this.updateDebris(i);const a=(e.speed-O.startSpeed)/(O.maxSpeed-O.startSpeed),c=e.vehicle;this.chase.update(i,Gn(c.prevX,c.x,o),Gn(c.prevY,c.y,o),Math.max(0,a),e.crashed?0:1-e.slowFactor),this.world.hourOverride=null,this.world.update(r,e.biomeOffset,i,this.chase.camera),this.updateNight(((h=this.vehicle)==null?void 0:h.group.position.x)??0,!e.crashed),t.render(this.scene,this.chase.camera)}syncVehicle(t,e){const i=this.vehicle;if(!i)return;const s=t.vehicle,o=i.group,r=t.model.cls;i.update(e);const a=Gn(s.prevX,s.x,this.alpha),c=Gn(s.prevY,s.y,this.alpha);if(this.wreckBody||o.position.set(a,c,this.vehicleLen/2),t.crashed){this.wreckBody?this.wreckBody.step(e,0):this.startWreck(i,t.model.cls==="bike",t.crashCause==="headOn"),o.visible=!0,this.shadow.visible=!1;return}this.shadow.visible=!0,this.shadow.position.set(a,.02,this.vehicleLen/2);const h=1/(1+c*.35);this.shadow.scale.x=(r==="bike"?.9:1.6)*h;const l=(r==="bike"?25:12)*(Math.PI/180),u=s.changingLane?Math.sin(s.laneT*Math.PI):0;let f=0;s.edgeBumpT>=0&&(f=Math.sin(s.edgeBumpT*40)*.12*(1-s.edgeBumpT/.3)*s.edgeBumpDir),o.position.x+=f;const d=i.body;d.rotation.z=-s.laneDir*l*u,d.rotation.y=-s.laneDir*.18*u;const g=s.jumpProgress;d.rotation.x=g>=0?.12*(1-2*g):0,t.sinceHit<.4&&(d.rotation.x-=.1*Math.sin(Math.PI*t.sinceHit/.4)),t.smashT>0&&(d.rotation.x-=.05*Math.sin(Math.PI*t.smashT/O.smashSlowTime));let _=1;if(s.jumpStartT>=0?_=s.jumpStartT<.06?.85:1.08:s.airborne?_=1.06:s.landT>=0&&(_=.85+.15*Math.min(1,s.landT/.15)),d.scale.set(1/Math.sqrt(_),_,1),s.oilLock>this.oilPrev&&(this.oilDir=-this.oilDir),this.oilPrev=s.oilLock,s.oilLock>0){const p=1-s.oilLock/O.oilLockTime,m=1-p,w=1-m*m*m;d.rotation.y+=this.reducedMotion?this.oilDir*.35*Math.sin(p*Math.PI*2)*m:this.oilDir*Math.PI*2*w,d.rotation.z+=.12*Math.sin(p*Math.PI*5)*m,o.position.y+=.14*Math.abs(Math.sin(p*Math.PI*6))*m}i.rider&&(this.duck+=((s.ducking?1:0)-this.duck)*(1-Math.exp(-22*e)),i.setDuck(this.duck)),this.wheelSpin-=t.speed*e/i.wheelRadius;for(const p of i.wheels)p.rotation.x=this.wheelSpin;o.visible=t.invulnerable>0?Math.floor(t.invulnerable*15)%2===0:!0}acquireMesh(t){const e=this.meshPool.pop()??new Xt(t,this.obstacleMat);return e.geometry=t,e.visible=!0,e.rotation.set(0,0,0),e.parent||this.scene.add(e),e}releaseMesh(t){t.visible=!1,this.meshPool.push(t)}acquireBlinker(){let t=this.blinkerPool.pop();if(!t){t=new Ke;for(const e of[-1,1]){const i=new Xt(new Cs(.3,.28,.12),this.blinkerMat);i.name=e<0?"L":"R",i.position.set(e*.95,.86,.04),t.add(i)}this.scene.add(t)}return t.visible=!0,t}releaseBlinker(t){t.visible=!1,this.blinkerPool.push(t)}syncObstacles(t,e){const i=t.obstacles;if(this.obstacleMeshes.size>i.length){const o=new Set(i.map(r=>r.id));for(const[r,a]of this.obstacleMeshes)if(!o.has(r)){this.releaseMesh(a),this.obstacleMeshes.delete(r);const c=this.blinkers.get(r);c&&(this.releaseBlinker(c),this.blinkers.delete(r))}}const s=this.alpha;for(const o of i){const r=e-Gn(o.prevS,o.s,s),a=r>-205&&r<40;let c=this.obstacleMeshes.get(o.id);if(!a){c&&(c.visible=!1);continue}c||(c=this.acquireMesh(Mp(o.def.kind,o.id,Cf(o.sMeet,t.biomeOffset).main)),this.obstacleMeshes.set(o.id,c)),c.visible=!0,this.placeObstacle(c,o,Gn(o.prevX,o.x,s),r,t)}}placeObstacle(t,e,i,s,o){t.position.set(i,0,s);const r=e.def.length/2;if(t.position.x+=r*Math.sin(e.yaw),t.position.z+=r*(Math.cos(e.yaw)-1),t.rotation.set(0,e.yaw,0),e.knockT>=0){const a=Math.min(e.knockT+this.alpha*O.fixedStep,1.2);t.position.x+=e.knockDir*a*7,t.position.y=Math.max(0,5*a-9*a*a),t.position.z-=a*6,t.rotation.z=-e.knockDir*a*6,t.rotation.x=a*4}if(e.def.kind==="switcher"){const a=Math.sign(e.lane-e.fromLane),c=Math.abs(e.x-e.prevX)>1e-4;t.rotation.y=c?-a*.12:0;let h=this.blinkers.get(e.id);h||(h=this.acquireBlinker(),this.blinkers.set(e.id,h)),h.position.copy(t.position),h.rotation.copy(t.rotation);const l=e.blinker&&Math.floor(o.time*5)%2===0;for(const u of h.children)u.visible=l&&u.name===(a<0?"L":"R")}}acquireSpecial(t){const i=this.specialPool[t].pop()??new Xt(this.specialGeo[t],t==="golden"?this.goldMat:as);return i.visible=!0,i.parent||this.scene.add(i),i}releaseSpecial(t,e){e.visible=!1;const i=e.userData.kind;this.specialPool[i].push(e),this.specials.delete(t)}syncPickups(t,e,i){const s=this.alpha;let o=0;const r=this.time*3,a=this.seen;a.clear();for(const c of t.pickups){const h=e-Gn(c.prevS,c.s,s);if(h<-200||h>20)continue;const l=c.taken,u=Gn(c.prevX,c.x,s),f=Gn(c.prevY,c.y,s);if(c.kind==="gear"){if(l||o>=Md)continue;Uo.position.set(u,f+Math.sin(this.time*4+c.id)*.05,h),Uo.rotation.set(0,r+c.id*.3,0),Uo.scale.setScalar(1),Uo.updateMatrix(),this.gears.setMatrixAt(o++,Uo.matrix);continue}if(l)continue;a.add(c.id);let d=this.specials.get(c.id);d||(d=this.acquireSpecial(c.kind),d.userData.kind=c.kind,this.specials.set(c.id,d)),this.placeSpecial(d,c,u,f,h)}for(let c=o;c<this.gears.count;c++)this.gears.setMatrixAt(c,IS);this.gears.count=o,this.gears.instanceMatrix.needsUpdate=!0;for(const[c,h]of this.specials)a.has(c)||this.releaseSpecial(c,h);if(this.magnetRing.visible=t.magnetT>0&&!t.crashed,this.magnetRing.visible){this.magnetRing.position.set(Gn(t.vehicle.prevX,t.vehicle.x,s),.3,this.vehicleLen/2);const c=1+Math.sin(this.time*8)*.05;this.magnetRing.scale.setScalar(c*(t.powerUps.magnetRadius/O.magnetRadius)),this.magnetRing.material.opacity=.25+.25*Math.min(1,t.magnetT/2)}}placeSpecial(t,e,i,s,o){t.position.set(i,s+Math.sin(this.time*3+e.id)*.1,o),t.rotation.set(0,e.kind==="golden"?this.time*4:Math.sin(this.time*2)*.6,0)}setDamage(t){const e=this.vehicle;if(!e)return;const i=t>e.damage;for(const s of e.setDamage(t))this.spawnDebris(s);if(i){e.group.updateMatrixWorld(!0),e.smokeAt(Ge);for(let s=0;s<6;s++)this.smoke.emit(Ge.x,Ge.y,Ge.z,"#f0f0f0",.22,.5,2.5)}}wreck(){if(this.vehicle)for(const t of this.vehicle.wreck())this.spawnDebris(t)}spawnDebris(t,e,i){t.updateWorldMatrix(!0,!1);const s=t.clone();t.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.visible=!0,this.scene.add(s);const o=Math.sign(s.position.x)||(Math.random()<.5?-1:1);this.flying.push(new xd(s,e??new P(o*(1.5+Math.random()*2.5),3+Math.random()*3,1+Math.random()*2),i??new P((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*14))),t.visible=!1}updateDebris(t){for(let e=this.flying.length-1;e>=0;e--){const i=this.flying[e];i.step(t,this.worldSpeed),!this.crashed&&(i.t>4||i.obj.position.z>30)&&(this.scene.remove(i.obj),this.flying.splice(e,1))}}clearDebris(){for(const t of this.flying)this.scene.remove(t.obj);this.flying.length=0}startWreck(t,e,i){const s=t.group,o=Math.random()<.5?-1:1,r=i?1:-1;this.wreckBody=new xd(s,new P(o*(.8+Math.random()),e?4.5:5.5,i?2+Math.random()*1.5:-1.5-Math.random()),new P(-r*(e?3+Math.random()*2:4+Math.random()*3),(Math.random()-.5)*3,o*(e?5+Math.random()*3:3+Math.random()*4)),t.hull,4);const a=e?[0]:o<0?[0,3]:[1,2];for(const c of a){const h=t.wheels[c];if(!h)continue;const l=Math.sign(h.position.x)||o;this.spawnDebris(h,new P(l*(2.5+Math.random()*2),3.5+Math.random()*2,r*(1+Math.random()*2)),new P(-r*(18+Math.random()*6),(Math.random()-.5)*4,(Math.random()-.5)*4))}t.rider&&this.spawnDebris(t.rider,new P(-o*2.5,6,r*1.5),new P(-r*6,(Math.random()-.5)*3,-o*3)),t.smokeAt(Ge);for(let c=0;c<10;c++)this.smoke.emit(Ge.x,Ge.y,Ge.z,c%3?"#5a5a62":"#f0f0f0",.3,.8,3)}restoreVehicle(){this.wreckBody=null,this.clearDebris();const t=this.vehicle;if(t){t.group.rotation.set(0,0,0);for(const e of t.wheels)e.visible=!0;t.rider&&(t.rider.visible=!0),t.setDamage(0,!0)}}emitDamage(t,e){const i=this.vehicle;if(!i)return;const s=t.crashed?3:i.damage;if(!(s===0||e<=0)&&(this.smokeT+=e*[0,7,15,16][s],this.sparkT+=s===2?e*7:0,!(this.smokeT<1&&this.sparkT<1))){for(i.group.updateMatrixWorld(!0),i.smokeAt(Ge);this.smokeT>=1;this.smokeT--){const o=s>=2,r=o?Math.random()<.3?"#3c3c43":"#77777f":"#e4e4e4";s===3?this.smoke.emit(Ge.x+(Math.random()-.5)*.4,Ge.y,Ge.z+(Math.random()-.5)*.4,r,.36,1.6,1.8):this.smoke.emit(Ge.x+(Math.random()-.5)*.15,Ge.y,Ge.z,r,o?.24:.17,o?.7:.55)}for(;this.sparkT>=1;this.sparkT--)this.particles.emit(2,Ge.x,Ge.y,Ge.z,Math.random()<.5?"#ffd23f":"#ff8a1c",1.6,3,.35,!0,12)}}sparkAtVehicle(t,e=10,i=1){if(!this.vehicle)return;const s=this.vehicle.group.position;this.particles.emit(e,s.x,s.y+i,s.z-this.vehicleLen*.4,t,2.5,4,.4,!1,6)}comboTrail(t,e){if(!e||!this.vehicle||t<=0){this.trailT=0;return}const i=this.vehicle.group.position;for(this.trailT+=t*18;this.trailT>=1;this.trailT--)this.particles.emit(1,i.x+(Math.random()-.5)*.5,.12,i.z+this.vehicleLen*.45,Math.random()<.6?"#ffc93c":"#fff1a8",.6,1.2,.16,!0,6)}dust(){if(!this.vehicle)return;const t=this.vehicle.group.position;this.particles.emit(14,t.x,.15,t.z+this.vehicleLen*.3,"#d9cbb0",2,1.5,.5,!0,2)}debris(){if(!this.vehicle)return;const t=this.vehicle.group.position,e="#"+this.vehicle.paint.color.getHexString();this.particles.emit(24,t.x,t.y+.8,t.z,e,5,8,1.2,!0,14),this.particles.emit(18,t.x,t.y+.8,t.z,"#2a2a30",5,7,1,!0,14),this.particles.emit(10,t.x,t.y+1,t.z,"#cfe8ff",4,6,.9,!0,14)}confetti(){const t=["#E63946","#FFD23F","#8AC926","#1982C4","#ffffff"];for(const e of t)this.particles.emit(14,(Math.random()-.5)*6,3,-6,e,5,6,1.4,!0,5)}smashBits(t,e,i){const s=Xb[Cf(e.distance,e.biomeOffset).main][i]??"#ff7b1c";this.particles.emit(12,t,.6,-.5,s,3,5,.6,!0,12)}renderIdle(t,e,i){this.time+=e,this.marker.visible=!1,this.magnetRing.visible=!1,this.gears.count=0;for(const r of this.obstacleMeshes.values())r.visible=!1;for(const[r,a]of this.specials)this.releaseSpecial(r,a);for(const r of this.blinkers.values())r.visible=!1;if((this.wreckBody||this.flying.length)&&this.restoreVehicle(),this.vehicle){this.vehicle.damage&&this.vehicle.setDamage(0,!0),this.vehicle.update(e);const r=this.vehicle.group;r.visible=!0,r.position.set(0,0,this.vehicleLen/2),r.rotation.set(0,0,0),this.vehicle.body.rotation.set(0,0,Math.sin(this.time*1.3)*.02),this.vehicle.body.scale.set(1,1+Math.sin(this.time*18)*.004,1),this.duck=0,this.vehicle.setDuck(0),this.wheelSpin-=8*e/this.vehicle.wheelRadius;for(const a of this.vehicle.wheels)a.rotation.x=this.wheelSpin;this.shadow.visible=!0,this.shadow.position.set(0,.02,this.vehicleLen/2)}this.particles.update(e,8),this.smoke.update(e,8);const s=this.time*.15,o=this.idleCam;o.position.set(Math.sin(s)*2.5+4.2,2.4,-5.5-Math.cos(s)*1.5),o.lookAt(0,.9,.6),this.world.hourOverride=this.titleHour,this.world.update(i,(this.titleBiome+.5)*O.biomeLeg-i,e,o),this.updateNight(0,!0),t.render(this.scene,o)}}class US{constructor(){this.scene=new E0,this.camera=new rn(36,9/16,.1,100),this.vehicle=null,this.vehicleId=null,this.turntable=new Ke,this.angle=.6,this.spinBoost=0,this.camDist=9.5,this.dragVelocity=0,this.scene.background=new ht("#203047"),Fp(this.scene);const t=new N0("#9ed8f5",1.2);t.position.set(4,3,-6),this.scene.add(t);const e=new Xt(new Vi(3.4,3.6,.3,32),new Yn({color:"#3a4a63"}));e.position.y=-.15;const i=new Xt(new Ba(3.45,.06,6,48),new mn({color:"#ffc93c"}));i.rotation.x=Math.PI/2,i.position.y=.01,this.turntable.add(e,i),this.scene.add(this.turntable);const s=new Xt(new cs(30,32),new Yn({color:"#1a2638"}));s.rotation.x=-Math.PI/2,s.position.y=-.3,this.scene.add(s)}setVehicle(t,e,i){this.vehicleId!==t&&(this.vehicle&&(this.turntable.remove(this.vehicle.group),this.vehicle.dispose()),this.vehicle=Np(t,Qn(e),Qn(i)),this.vehicleId=t,this.turntable.add(this.vehicle.group),this.spinBoost=2.5,this.camDist=vo(t).cls==="car"?13.5:9.5),this.vehicle.setColor(Qn(e),Qn(i)),this.vehicle.finish.set(z0(e))}resize(t){this.camera.aspect=t,this.camera.fov=Math.min(75,2*Math.atan(Math.tan(30*Math.PI/360)/t)*180/Math.PI),this.camera.setViewOffset(1e3*t,1e3,0,170,1e3*t,1e3),this.camera.updateProjectionMatrix()}render(t,e){Kh.value+=e,fp(),this.spinBoost*=Math.exp(-e*3),this.dragVelocity*=Math.exp(-e*4),this.angle+=e*(.5+this.spinBoost)+this.dragVelocity*e,this.turntable.rotation.y=this.angle,this.camera.position.set(0,this.camDist*.34,this.camDist),this.camera.lookAt(0,.7,0);const i=hs.uNight.value;hs.uNight.value=0,t.render(this.scene,this.camera),hs.uNight.value=i}}const Xa=[{id:"magnetTime",values:[O.magnetDuration,10,12,14],costs:[300,800,1600],unit:"s"},{id:"magnetRadius",values:[O.magnetRadius,6,7],costs:[300,800],unit:"m"},{id:"magnetEvery",values:[O.magnetEvery,500,420],costs:[300,800],unit:"m"}];function Op(n){return Xa.find(t=>t.id===n)}function qa(n){return n.values.length-1}function Bp(){return Object.fromEntries(Xa.map(n=>[n.id,0]))}function zp(n=Bp()){const t=e=>{const i=Op(e);return i.values[Math.min(qa(i),Math.max(0,n[e]??0))]};return{magnetTime:t("magnetTime"),magnetRadius:t("magnetRadius"),magnetEvery:t("magnetEvery")}}function H(n,t={},...e){const i=document.createElement(n);for(const[s,o]of Object.entries(t))o===void 0||o===!1||(s.startsWith("on")&&typeof o=="function"?i.addEventListener(s.slice(2),o):s==="class"?i.className=String(o):s==="style"?i.setAttribute("style",String(o)):o===!0?i.setAttribute(s,""):i.setAttribute(s,String(o)));for(const s of e)s!=null&&s!==!1&&i.append(s);return i}const NS=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches;function ws(n){NS||requestAnimationFrame(()=>{var t;return(t=n.querySelector("[data-primary]:not([disabled])"))==null?void 0:t.focus({preventScroll:!0})})}function en(n){const t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstChild}const me={gear:()=>en('<svg viewBox="0 0 32 32"><g fill="#ffc93c" stroke="#7a5200" stroke-width="1.5"><path d="M13.6 2h4.8l.8 3.6 2.6 1.1 3.1-2 3.4 3.4-2 3.1 1.1 2.6 3.6.8v4.8l-3.6.8-1.1 2.6 2 3.1-3.4 3.4-3.1-2-2.6 1.1-.8 3.6h-4.8l-.8-3.6-2.6-1.1-3.1 2-3.4-3.4 2-3.1-1.1-2.6L2 18.4v-4.8l3.6-.8 1.1-2.6-2-3.1 3.4-3.4 3.1 2 2.6-1.1z"/></g><circle cx="16" cy="16" r="4.5" fill="#d99a1e" stroke="#7a5200" stroke-width="1.5"/></svg>'),wrench:()=>en('<svg viewBox="0 0 32 32"><path d="M20.5 3.5a7 7 0 0 0-6.3 9.6L3.8 23.5a2.9 2.9 0 0 0 4.1 4.1l10.4-10.4A7 7 0 0 0 27.9 11l-4.3 4.3-4.2-1.1-1.1-4.2L22.6 5.7a7 7 0 0 0-2.1-2.2z" fill="#3ddc84" stroke="#0e5c33" stroke-width="1.6" stroke-linejoin="round"/></svg>'),pause:()=>en('<svg viewBox="0 0 24 24"><rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor"/><rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor"/></svg>'),cog:()=>en('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10.3 2h3.4l.5 2.6 1.9.8 2.2-1.5 2.4 2.4-1.5 2.2.8 1.9 2.6.5v3.4l-2.6.5-.8 1.9 1.5 2.2-2.4 2.4-2.2-1.5-1.9.8-.5 2.6h-3.4l-.5-2.6-1.9-.8-2.2 1.5-2.4-2.4 1.5-2.2-.8-1.9L2 13.7v-3.4l2.6-.5.8-1.9-1.5-2.2 2.4-2.4 2.2 1.5 1.9-.8zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>'),trophy:()=>en('<svg viewBox="0 0 24 24"><path fill="#ffc93c" stroke="#7a5200" stroke-width="1.3" d="M7 3h10v3h3.5v2a4.5 4.5 0 0 1-4.6 4.5A5 5 0 0 1 13 15v3h3v3H8v-3h3v-3a5 5 0 0 1-2.9-2.5A4.5 4.5 0 0 1 3.5 8V6H7zM5 7.5v.5c0 1.3.9 2.5 2.2 2.8A7 7 0 0 1 7 9V7.5zm14 0h-2V9a7 7 0 0 1-.2 1.8A3 3 0 0 0 19 8z"/></svg>'),magnet:()=>en('<svg viewBox="0 0 32 32"><path d="M6 4h7v11a3 3 0 0 0 6 0V4h7v11a10 10 0 0 1-20 0z" fill="#1982ff" stroke="#0b3d7a" stroke-width="1.6"/><rect x="6" y="4" width="7" height="5" fill="#e6ebf2"/><rect x="19" y="4" width="7" height="5" fill="#e6ebf2"/></svg>'),brush:()=>en('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 2.6a2 2 0 0 1 2.9 2.9l-7.6 8.4-3.6-3.6zM8.6 11.8l3.6 3.6-.6.9a4.6 4.6 0 0 1-4.1 2.5c-1.6 0-2.4.9-3.1 2.2-.3.5-1 .4-1.1-.2-.7-3.5.4-7.2 3.6-8.6z"/></svg>'),helmet:()=>en('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 0 1 9 9v3.5a2.5 2.5 0 0 1-2.5 2.5H11a3 3 0 0 1-3-3v-1h6.5a1.5 1.5 0 0 0 1.5-1.5V10a1.5 1.5 0 0 0-1.5-1.5H5.2A9 9 0 0 1 12 3zM4.1 10.5H14V12H3.6zM3.3 13.5H6V15a5 5 0 0 0 .6 2.4A9 9 0 0 1 3.3 13.5z"/></svg>'),stripes:()=>en('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 2h3.6L6.6 22H3zM14.4 2H18l-4.5 20H9.9z"/></svg>'),sparkle:()=>en('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10 2l1.9 5.6L17.5 9.5l-5.6 1.9L10 17l-1.9-5.6L2.5 9.5l5.6-1.9zM18.5 13l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z"/></svg>'),lock:()=>en('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm0 2.5A2.5 2.5 0 0 0 9.5 7v3h5V7A2.5 2.5 0 0 0 12 4.5zm0 9a1.8 1.8 0 0 0-1 3.3V19h2v-2.2a1.8 1.8 0 0 0-1-3.3z"/></svg>'),upgrade:()=>en('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2 4 11h5v5h6v-5h5zM9 18h6v2.5H9z"/></svg>'),left:()=>en('<svg viewBox="0 0 24 24"><path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),right:()=>en('<svg viewBox="0 0 24 24"><path d="m9 4 8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),back:()=>en('<svg viewBox="0 0 24 24"><path d="M11 5 4 12l7 7M5 12h15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>')};function kS(){const n=H("i");return{el:H("div",{class:"screen boot"},H("div",{class:"logo"},"GEAR",H("span",{class:"accent"},"RUSH")),H("div",{class:"bar"},n)),progress:e=>n.style.width=`${Math.round(e*100)}%`}}function FS(n){return H("div",{class:"screen title passthrough"},H("div",{class:"title-top"},H("span",{class:"update-slot"}),H("button",{class:"btn icon ghost","aria-label":gt("settings"),onclick:n.onSettings},me.cog())),H("div",{class:"logo"},"GEAR",H("span",{class:"accent"},"RUSH")),H("div",{class:"stats"},H("span",{class:"chip"},me.trophy(),`${gt("best")} ${un(n.best)} m`),H("span",{class:"chip"},me.gear(),`${un(n.bank)}`)),H("div",{class:"spacer"}),H("div",{class:"col"},H("button",{class:"btn primary","data-primary":!0,onclick:n.onPlay},gt("play")),H("div",{class:"row"},H("button",{class:"btn",onclick:n.onGarage},gt("garage")),H("button",{class:"btn",onclick:n.onUpgrades},gt("upgrades"))),H("p",{class:"hint"},n.touch?gt("hint"):gt("hintKeys"))))}function No(n){return H("span",{class:"price"},me.gear(),un(n))}function au(n,t,e,i,s){if(t<n)return H("div",{class:"buy-wrap"},H("button",{...e,disabled:!0},No(n)),H("span",{class:"missing"},`${gt("missing")} `,No(n-t)));let o=0;const r=H("button",{...e,onclick:()=>{if(o){window.clearTimeout(o),s();return}i(),r.classList.add("armed"),r.replaceChildren(`${gt("sure")} `,No(n)),o=window.setTimeout(()=>{o=0,r.classList.remove("armed"),r.replaceChildren(`${gt("buy")} `,No(n))},3e3)}},`${gt("buy")} `,No(n));return r}function OS(n,t){const e=H("div",{class:"screen garage"}),i=()=>{var g,_,p;const s=(_=(g=document.activeElement)==null?void 0:g.dataset)==null?void 0:_.key,o=If(n.cls),r=Math.max(0,o.findIndex(m=>m.id===n.model)),a=o[r],c=bM(a),h=n.owned.includes(a.id),l=m=>{t.onTap(),n.model=o[(r+m+o.length)%o.length].id,t.onChange(n),i()},u=m=>H("button",{class:n.cls===m?"on":"","data-key":`tab-${m}`,onclick:()=>{n.cls!==m&&(t.onTap(),n.cls=m,n.model=If(m).filter(w=>n.owned.includes(w.id)).pop().id,t.onChange(n),i())}},gt(m)),f=(m,w)=>H("div",{class:"stat"},H("span",{},m),H("div",{class:"meter"},H("i",{style:`width:${Math.round(Math.min(1,Math.max(.08,w))*100)}%`}))),d=Hp(t.onStageDrag,l);e.replaceChildren(H("div",{class:"head"},H("button",{class:"btn icon ghost","aria-label":gt("back"),"data-key":"back",onclick:t.onBack},me.back()),H("div",{class:"tabs"},u("bike"),u("car")),H("button",{class:"btn icon ghost","aria-label":gt("upgrades"),"data-key":"upgrades",onclick:t.onUpgrades},me.upgrade())),H("span",{class:"chip bank"},me.gear(),un(n.bank)),d,H("div",{class:"card"},H("div",{class:"carousel"},H("button",{class:"btn icon ghost","aria-label":"previous","data-key":"prev",onclick:()=>l(-1)},me.left()),H("div",{class:"name"},H("b",{},h?null:H("span",{class:"lock"},me.lock()),a.name),H("span",{},a.look[F0()])),H("button",{class:"btn icon ghost","aria-label":"next","data-key":"next",onclick:()=>l(1)},me.right())),H("div",{class:"stats-list"},f(gt("handling"),c.handling),f(gt("toughness"),c.toughness),f(gt("reach"),c.reach)),H("button",{class:"btn paint-btn","data-key":"paint",disabled:!h,onclick:()=>{t.onTap(),t.onPaint()}},me.brush(),gt("paint"),H("span",{class:"paint-dots"},BS(n.colors[a.id]),H("i",{style:`background:${Qn(n.riderColors[a.id])}`}))),H("div",{class:"row"},h?H("button",{class:"btn primary","data-primary":!0,"data-key":"go",onclick:t.onGo},gt("go")):au(a.price,n.bank,{class:"btn primary buy","data-primary":!0,"data-key":`buy-${a.id}`},t.onTap,()=>{t.onBuy(a.id)&&i()})))),s&&((p=e.querySelector(`[data-key="${s}"]`))==null||p.focus({preventScroll:!0}))};return i(),e.refresh=i,e.step=s=>{var o;return(o=e.querySelector(`[data-key="${s<0?"prev":"next"}"]`))==null?void 0:o.click()},ws(e),e}function Hp(n,t){const e=H("div",{class:"stage"});let i=0,s=0,o=0;return e.addEventListener("pointerdown",r=>{i=o=r.clientX,s=performance.now()}),e.addEventListener("pointermove",r=>{s&&(n(r.clientX-o),o=r.clientX)}),e.addEventListener("pointerup",r=>{const a=r.clientX-i;t&&s&&performance.now()-s<300&&Math.abs(a)>40&&t(a<0?1:-1),s=0}),e}function BS(n){const t=za(n);return t?H("i",{class:`finish-${t.finish}`}):H("i",{style:`background:${Qn(n)}`})}function zS(n,t){const e=H("div",{class:"screen garage paint"});let i=null;const s=()=>{var p,m,w;const o=(m=(p=document.activeElement)==null?void 0:p.dataset)==null?void 0:m.key,r=vo(n.model),a=n.colors[r.id],c=F0(),h=x=>()=>{t.onTap(),i=null,x(),t.onChange(n),s()},l=(x,S,I)=>H("section",{class:"paint-section"},H("h3",{},x,S),H("div",{class:"swatch-grid"},...I)),u=(x,S,I)=>Sa.map(C=>H("button",{class:`swatch${C.id===S[r.id]&&!(I&&i)?" on":""}`,style:`background:${C.hex}`,"data-key":`${x}-${C.id}`,"aria-label":`${x}: ${C.name[c]}`,onclick:h(()=>S[r.id]=C.id)})),f=or.map(x=>{const S=n.finishes.includes(x.finish),I=i?i.id===x.id:a===x.id;return H("button",{class:`swatch finish-${x.finish}${I?" on":""}${S?"":" locked"}`,"data-key":`finish-${x.finish}`,"aria-label":`${x.name[c]}${S?"":` (${x.price})`}`,onclick:S?h(()=>n.colors[r.id]=x.id):()=>{t.onTap(),i=x,t.onPreview(x.id),s()}},S?null:H("span",{class:"swatch-lock"},me.lock()))}),d=r.cls==="bike"?{icon:me.helmet(),label:gt("rider")}:{icon:me.stripes(),label:gt("accent")},g=i??za(a),_=i;e.replaceChildren(H("div",{class:"head"},H("button",{class:"btn icon ghost","aria-label":gt("back"),"data-key":"back",onclick:t.onBack},me.back()),H("h2",{},r.name),H("span",{class:"head-spacer"})),H("span",{class:"chip bank"},me.gear(),un(n.bank)),Hp(t.onStageDrag),H("div",{class:"card"},H("div",{class:"paint-sections"},l(me.brush(),gt("paint"),u(gt("paint"),n.colors,!0)),l(me.sparkle(),g?`${gt("special")} · ${g.name[c]}`:gt("special"),f),l(d.icon,d.label,u(d.label,n.riderColors,!1))),H("div",{class:"row"},_?au(_.price,n.bank,{class:"btn primary buy","data-primary":!0,"data-key":`buy-${_.finish}`},t.onTap,()=>{t.onBuyFinish(_.finish)&&(i=null,n.colors[r.id]=_.id,t.onChange(n),s())}):H("button",{class:"btn primary","data-primary":!0,"data-key":"done",onclick:t.onBack},gt("done"))))),o&&((w=e.querySelector(`[data-key="${o}"]`))==null||w.focus({preventScroll:!0}))};return s(),ws(e),e}const HS={magnetTime:"upMagnetTime",magnetRadius:"upMagnetRadius",magnetEvery:"upMagnetEvery"};function GS(n,t){const e=H("div",{class:"screen dim settings"}),i=()=>{const s=Xa.map(o=>{const r=n.levels[o.id],a=qa(o),c=h=>`${o.values[h]} ${o.unit}`;return H("div",{class:"upg"},H("span",{class:"upg-icon"},me.magnet()),H("div",{class:"upg-text"},H("b",{},gt(HS[o.id])),H("span",{class:"upg-value"},c(r),r<a?H("em",{},` → ${c(r+1)}`):null),H("span",{class:"pips"},...Array.from({length:a},(h,l)=>H("i",{class:l<r?"on":""})))),r>=a?H("span",{class:"upg-max"},gt("max")):au(o.costs[r],n.bank,{class:"btn buy","data-key":`up-${o.id}`},t.onTap,()=>{t.onBuy(o.id)&&i()}))});e.replaceChildren(H("div",{class:"panel"},H("h2",{class:"title-text"},gt("upgrades")),H("div",{class:"row"},H("span",{class:"chip"},me.gear(),un(n.bank))),H("p",{class:"hint upg-note"},gt("upgradesNote")),...s,H("div",{class:"row upg-close"},H("button",{class:"btn primary","data-primary":!0,onclick:t.onClose},gt("close")))))};return i(),e}function VS(n){return H("div",{class:"screen dim settings"},H("div",{class:"panel col"},H("h2",{class:"title-text"},gt("paused")),H("button",{class:"btn primary","data-primary":!0,onclick:n.onResume},gt("resume")),H("div",{class:"row"},H("button",{class:"btn",onclick:n.onRestart},gt("restart")),H("button",{class:"btn",onclick:n.onHome},gt("home"))),H("button",{class:"btn ghost",onclick:n.onSettings},me.cog()," ",gt("settings"))))}function WS(n){const t=H("button",{class:"btn primary","data-primary":!0,disabled:!0,onclick:n.onRetry},gt("retry"));return window.setTimeout(()=>{t.removeAttribute("disabled"),t.isConnected&&(!document.activeElement||document.activeElement===document.body)&&ws(t.parentElement)},500),H("div",{class:"screen dim results"},H("div",{class:"label-top"},gt("distance")),H("div",{class:"big"},un(n.distance),H("small",{}," m")),n.newBest?H("div",{class:"newbest"},gt("newBest")):null,H("div",{class:"lines"},H("div",{class:"line"},H("span",{},gt("gearsRun"),n.comboBest>1?H("small",{},`${gt("combo").toLowerCase()} +${un(n.comboBonus)} · ${gt("comboBest")} ×${n.comboBest}`):null),H("b",{},me.gear(),`+${un(n.gears)}`)),H("div",{class:"line"},H("span",{},gt("gearBank")),H("b",{},me.gear(),un(n.bank))),H("div",{class:"line"},H("span",{},gt("best")),H("b",{},me.trophy(),`${un(n.best)} m`))),t,H("div",{class:"row"},H("button",{class:"btn",onclick:n.onGarage},gt("garage")),H("button",{class:"btn",onclick:n.onHome},gt("home"))))}function XS(n,t,e){const i=H("div",{class:"screen dim settings"}),s=()=>{const o=(a,c)=>H("button",{class:`toggle${n[a]?" on":""}`,role:"switch","aria-checked":String(n[a]),onclick:()=>{n[a]=!n[a],e.onTap(),e.onChange(n),s()}},H("span",{},c),H("span",{class:"sw"})),r=(a,c)=>H("button",{class:n.lang===a?"on":"",onclick:()=>{n.lang=a,e.onTap(),e.onChange(n),s()}},c);i.replaceChildren(H("div",{class:"panel"},H("h2",{class:"title-text"},gt("settings")),o("music",gt("music")),o("sfx",gt("sfx")),o("haptics",gt("haptics")),o("reducedMotion",gt("reducedMotion")),H("div",{class:"label"},gt("language")),H("div",{class:"lang"},r("auto",gt("langAuto")),r("en","English"),r("pl","Polski")),H("div",{class:"label"},gt("app")),t.canInstall?H("div",{class:"row app-row"},H("button",{class:"btn",onclick:()=>t.install()},gt("install"))):null,t.iosHint?H("p",{class:"hint app-row"},gt("iosInstall")):null,H("p",{class:"hint version"},`${gt("version")} ${t.version}`),H("div",{class:"row"},H("button",{class:"btn primary","data-primary":!0,onclick:e.onClose},gt("close")))))};return s(),i}function qS(n){let t=[],e=0,i=1,s,o=!1;return{enter(){o=!1;const r=()=>o=!0;setTimeout(r,2e3),document.fonts?document.fonts.load('64px "Lilita One"').then(r,r):r(),s=kS(),n.ui.replaceChildren(s.el),t=[CS,()=>Yc("city"),()=>Yc("outskirts"),()=>Yc("drylands"),()=>n.view.prepareWorld(),()=>n.view.setVehicle(n.save.selected.model,n.save.colors[n.save.selected.model],n.save.riderColors[n.save.selected.model]),()=>n.view.compileShaders(n.renderer)],i=t.length,e=0},exit(){},frame(){if(!o&&t.length===2)return;const r=t.shift();if(r){r(),e++,s.progress(e/i);return}n.go("title")}}}const Yt=n=>440*Math.pow(2,(n-69)/12),tl=3,el=1.6;class YS{constructor(t,e){this.ctx=t,this.noise=e,this.ks=new Map,this.curves=new Map}env(t,e,i,s,o){const r=this.ctx.createGain();return r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(e,t+s),o?(r.gain.setValueAtTime(e,Math.max(t+s,t+i-.06)),r.gain.exponentialRampToValueAtTime(1e-4,t+i+.08)):r.gain.exponentialRampToValueAtTime(1e-4,t+i),r}tone(t,e,i,s,o,r,a=.005,c=0,h={}){const l=this.ctx,u=l.createOscillator();u.type=e,h.detune&&(u.detune.value=h.detune),h.bend?(u.frequency.setValueAtTime(i*Math.pow(2,-h.bend/12),s),u.frequency.exponentialRampToValueAtTime(i,s+.08)):u.frequency.value=i;let f=null;if(h.vibrato&&o>.3){f=l.createOscillator(),f.frequency.value=h.vibrato[0];const p=l.createGain();p.gain.setValueAtTime(0,s),p.gain.linearRampToValueAtTime(i*h.vibrato[1],s+Math.min(.4,o*.6)),f.connect(p).connect(u.frequency),f.start(s)}const d=this.env(s,r,o,h.attack??a,!!h.hold);let g=u;if(c){const p=l.createBiquadFilter();p.type="lowpass",p.frequency.value=c,p.Q.value=h.q??.7,u.connect(p),g=p}g.connect(d).connect(t);const _=s+o+(h.hold?.12:.02);u.start(s),u.stop(_),f==null||f.stop(_)}noiseHit(t,e,i,s,o,r,a=1,c=0){const h=this.ctx,l=h.createBufferSource();l.buffer=this.noise;const u=h.createBiquadFilter();u.type=o,u.frequency.value=r,u.Q.value=a;const f=h.createGain();c?(f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(s,e+c)):f.gain.setValueAtTime(s,e),f.gain.exponentialRampToValueAtTime(1e-4,e+i),l.connect(u).connect(f).connect(t),l.start(e,Math.random()*.5),l.stop(e+i+.02)}sweep(t,e,i,s,o,r,a=1.2){const c=this.ctx,h=c.createBufferSource();h.buffer=this.noise,h.loop=!0;const l=c.createBiquadFilter();l.type="bandpass",l.Q.value=a,l.frequency.setValueAtTime(o,e),l.frequency.exponentialRampToValueAtTime(r,e+i);const u=c.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(s,e+i*.3),u.gain.exponentialRampToValueAtTime(1e-4,e+i),h.connect(l).connect(u).connect(t),h.start(e,Math.random()*.5),h.stop(e+i+.02)}kick(t,e,i=.7,s=150,o=.25){const r=this.ctx,a=r.createOscillator();a.frequency.setValueAtTime(s,e),a.frequency.exponentialRampToValueAtTime(42,e+.12);const c=r.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+o),a.connect(c).connect(t),a.start(e),a.stop(e+o+.05)}snare(t,e,i){this.noiseHit(t,e,.16,i,"bandpass",1800,.7),this.tone(t,"triangle",190,e,.1,i*.5)}brush(t,e,i){this.noiseHit(t,e,.11,i,"bandpass",3600,.5,.012)}clap(t,e,i){for(let s=0;s<3;s++)this.noiseHit(t,e+s*.011,.02,i,"bandpass",1150,1.5);this.noiseHit(t,e+.033,.2,i*.7,"bandpass",1150,1.2)}hat(t,e,i,s=7e3,o=!1){this.noiseHit(t,e,o?.22:.05,i,"highpass",s)}rim(t,e,i){this.tone(t,"square",1750,e,.025,i*.5,.001,3e3),this.noiseHit(t,e,.03,i,"bandpass",2600,2)}shaker(t,e,i){this.noiseHit(t,e,.06,i,"highpass",6500,.8,.015)}crash(t,e,i){this.noiseHit(t,e,1.4,i,"highpass",4500,.6)}tom(t,e,i,s=.3){const o=this.ctx,r=o.createOscillator();r.frequency.setValueAtTime(i,e),r.frequency.exponentialRampToValueAtTime(i*.6,e+.2);const a=o.createGain();a.gain.setValueAtTime(s,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.25),r.connect(a).connect(t),r.start(e),r.stop(e+.3)}clank(t,e,i){const s=this.ctx,o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=2600,o.Q.value=4;const r=s.createGain();r.gain.setValueAtTime(i,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.14),o.connect(r).connect(t);for(const a of[520,770]){const c=s.createOscillator();c.type="square",c.frequency.value=a,c.connect(o),c.start(e),c.stop(e+.16)}}crackle(t,e,i){this.noiseHit(t,e,.008,i,"highpass",2500)}chirp(t,e,i){for(let s=0;s<3;s++)this.tone(t,"sine",4400,e+s*.03,.02,i,.004)}pluck(t,e,i,s,o={}){const r=o.bright??.6,a=i-(i%tl+tl)%tl,c=this.ksBuffer(a,Math.round(r*2)/2),h=Math.pow(2,(i-a)/12),l=this.ctx.createBufferSource();l.buffer=c,o.bend?(l.playbackRate.setValueAtTime(h*Math.pow(2,-2/12),e),l.playbackRate.exponentialRampToValueAtTime(h,e+.07)):l.playbackRate.value=h;const u=this.ctx.createGain();u.gain.value=s;const f=Math.min(o.len??el,el);o.len!==void 0&&(u.gain.setValueAtTime(s,e+f),u.gain.exponentialRampToValueAtTime(1e-4,e+f+.06)),l.connect(u).connect(t),l.start(e),l.stop(e+f+.08)}strum(t,e,i,s,o={}){i.forEach((r,a)=>this.pluck(t,e+a*.008,r,s,o))}bass(t,e,i,s,o){this.tone(t,"triangle",Yt(i),e,s,o,.004,900),this.tone(t,"sine",Yt(i),e,s*.8,o*.6)}sub(t,e,i,s,o){const a=this.ctx.createOscillator(),c=Yt(i);a.frequency.setValueAtTime(c*1.6,e),a.frequency.exponentialRampToValueAtTime(c,e+.05);const h=this.env(e,o,s,.004,!0);a.connect(h).connect(t),a.start(e),a.stop(e+s+.12)}stab(t,e,i,s,o,r=1700){for(const a of i)this.tone(t,"sawtooth",Yt(a),e,s,o,.004,r)}power(t,e,i,s,o,r=0){for(const a of[0,7,12])this.tone(t,"sawtooth",Yt(i+a),e,s,o*(a===12?.6:1),.003,0,{detune:r,hold:s>.2})}keys(t,e,i,s,o){for(const r of i)this.tone(t,"sine",Yt(r),e,s,o,.01,0,{hold:!0}),this.tone(t,"triangle",Yt(r+12),e,.35,o*.35,.002)}bell(t,e,i,s){this.tone(t,"sine",Yt(i),e,1.1,s,.002),this.tone(t,"sine",Yt(i)*2.76,e,.35,s*.3,.002)}lead(t,e,i,s,o,r=!1){const a={hold:!0,attack:.008,bend:r?2:0,vibrato:[5.5,.008]};this.tone(t,"sawtooth",Yt(i),e,s,o,.008,2600,a),this.tone(t,"square",Yt(i),e,s,o*.5,.008,2600,{...a,detune:9})}fuzz(t,e,i,s,o,r=!1){const a={hold:!0,attack:.004,bend:r?2:0,vibrato:[6,.012]};this.tone(t,"sawtooth",Yt(i),e,s,o,.004,0,a),this.tone(t,"square",Yt(i),e,s,o*.6,.004,0,{...a,detune:-7})}reed(t,e,i,s,o,r=!1){this.tone(t,"square",Yt(i),e,s,o,.03,1500,{hold:!0,attack:.03,bend:r?1:0,vibrato:[5,.01]})}flute(t,e,i,s,o){this.tone(t,"sine",Yt(i),e,s,o,.04,0,{hold:!0,attack:.04,vibrato:[5,.006]}),this.noiseHit(t,e,Math.min(s,.25),o*.25,"bandpass",Yt(i)*2,6,.03)}whistle(t,e,i,s,o,r=!1){this.tone(t,"sine",Yt(i),e,s,o,.03,0,{hold:!0,attack:.03,bend:r?2:.5,vibrato:[6,.015]})}ksBuffer(t,e){const i=`${t}:${e}`;let s=this.ks.get(i);if(!s){const o=this.ctx.sampleRate;s=this.ctx.createBuffer(1,Math.floor(o*el),o),$S(s.getChannelData(0),o,Yt(t),e),this.ks.set(i,s)}return s}curve(t){let e=this.curves.get(t);if(!e){e=new Float32Array(1024);for(let i=0;i<e.length;i++){const s=i/(e.length-1)*2-1;e[i]=Math.tanh(s*t)/Math.tanh(t)}this.curves.set(t,e)}return e}}function $S(n,t,e,i){const s=t/e-.5,o=Math.floor(s),r=s-o,a=.25+.5*i,c=Math.pow(.5,1/(e*a)),h=.25+.75*i;let l=0;for(let d=0;d<=o&&d<n.length;d++)l+=h*(Math.random()*2-1-l),n[d]=l;const u=d=>d>=0?n[d]:0;for(let d=o+1;d<n.length;d++){const g=u(d-o)*(1-r)+u(d-o-1)*r,_=u(d-o-1)*(1-r)+u(d-o-2)*r;n[d]=c*.5*(g+_)}let f=0;for(let d=0;d<n.length;d++)f=Math.max(f,Math.abs(n[d]));if(f>0)for(let d=0;d<n.length;d++)n[d]*=.6/f}const Ya=n=>n.minor?3:4,Pa=(n,t=0)=>[n.root+t,n.root+t+Ya(n),n.root+t+7],En=n=>n*(.9+Math.random()*.2),KS=(n,t)=>{const e=n.indexOf(t);return e<n.length-1?n[e+1]-t:16-t+n[0]},Di={root:43},Jr={root:48},nl={root:50},jS={root:40,minor:!0},Gp=[Di,Di,Jr,Di,Di,Di,nl,nl,Jr,Jr,Di,jS,Jr,nl,Di,Di],yd=[[0,7,2],[2,9,2],[4,12,4,1],[10,9,2],[12,7,4]],bd=[[0,4,2],[2,7,2],[4,4,2],[6,2,2],[8,0,6]],ZS=[[0,9,2],[2,12,2],[4,9,2],[6,7,2],[8,5,4],[14,7,2]],JS=[[0,4,4,1],[6,2,2],[8,0,8]],Vp=[yd,bd,ZS,JS,yd,bd,[[0,11,2],[2,14,2],[4,11,2],[6,9,2],[8,7,6]],[[0,9,2],[2,7,2],[4,4,2],[6,2,2]],[[0,12,4],[4,9,2],[6,12,2],[8,14,6,1],[14,12,2]],[[0,9,4],[4,7,2],[6,5,2],[8,7,8]],[[0,4,2],[2,7,2],[4,12,4],[8,16,4],[12,14,4]],[[0,12,4],[4,9,4],[8,7,2],[10,9,6]],[[0,9,2],[2,12,2],[4,9,2],[6,7,2],[8,5,4],[12,9,4]],[[0,7,4],[4,11,4],[8,14,4],[12,11,4]],[[0,12,6,1],[6,9,2],[8,7,2],[10,4,2],[12,7,4]],[[0,0,8]]],QS={bpm:120,swing:.6,reverb:.12,gain:2.9,chords:Gp,hook:Vp,leadRoot:67,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r,next:a}=n,c=n.ch(0);(i===0||i===8)&&t.kick(c,e,.42),i%2===0&&t.brush(c,e,i===4||i===12?.22:En(.07)),(i===4||i===12)&&t.snare(c,e,.14);const h=n.ch(0),l=r.root+(r.root>=48?-5:7);(i===0||i===8)&&t.bass(h,e,r.root,o*3.5,.14),i===4&&t.bass(h,e,l,o*3.5,.13),i===12&&t.bass(h,e,a.root!==r.root?a.root-2:l,o*1.8,.13),i===14&&a.root!==r.root&&t.bass(h,e,a.root-1,o*1.8,.13),i%4===2&&t.strum(n.ch(0,{pan:-.3}),e,Pa(r,12),.07,{bright:.5,len:o*1.6});const u=n.ch(1,{pan:.25,echo:[.11,.25]});for(const _ of n.hook)t.pluck(u,e,_.note,.36,{bright:1,bend:_.bend,len:_.len*o+.15});const f=[0,1,2,0,1,2,0,2],d=[r.root+24,r.root+19,r.root+24+Ya(r)];t.pluck(n.ch(2,{pan:-.4}),e,d[f[i%8]],En(.045),{bright:1,len:o*2});const g=n.ch(2);i%4===2&&t.shaker(g,e,.05),s%8===7&&i>=12&&t.snare(g,e,.06+(i-12)*.03)}},tw={bpm:84,swing:.62,reverb:.4,gain:1.9,chords:Gp,hook:Vp,leadRoot:67,play(n){const{syn:t,t:e,s:i,dur:s,chord:o}=n,r=n.ch(0);i===0&&t.kick(r,e,.4,120,.3),i===8?t.brush(r,e,.16):i%4===0&&t.brush(r,e,En(.04)),i===0&&t.bass(n.ch(0),e,o.root,s*7,.2),i===8&&t.bass(n.ch(0),e,o.root+(o.root>=48?-5:7),s*7,.18);const a=[o.root+12,o.root+19,o.root+24,o.root+24+Ya(o)];i%2===0&&t.pluck(n.ch(0,{pan:-.25}),e,a[[0,1,2,3,2,1,2,1][i/2]],En(.07),{bright:.5});const c=n.ch(1,{pan:.2});for(const l of n.hook)t.reed(c,e,l.note,l.len*s,.06,l.bend);const h=n.ch(2,{pan:.5});i===6&&Math.random()<.6&&t.chirp(h,e,.025),i%4===2&&t.shaker(n.ch(2),e,.025)}},$s={root:38,minor:!0},il={root:34},Sd={root:36},sl={root:33},wd={root:31,minor:!0},Wp=[$s,$s,il,Sd,$s,$s,il,sl,wd,wd,$s,$s,il,Sd,sl,sl],Ed=[[0,7,3],[3,10,1],[4,12,2],[7,10,1],[8,7,4],[14,5,2]],Td=[[0,3,2],[2,5,2],[4,7,6],[12,5,2],[14,3,2]],Ad=[[0,5,3],[3,3,1],[4,0,4],[10,3,2],[12,5,4]],Xp=[Ed,Td,Ad,[[0,7,2],[2,10,2],[4,7,2],[6,5,2],[8,7,8]],Ed,Td,Ad,[[0,14,2],[2,11,2],[4,7,2],[6,11,2],[8,14,6]],[[0,5,2],[2,8,2],[4,12,4],[10,10,2],[12,8,4]],[[0,5,2],[2,7,2],[4,8,2],[6,10,2],[8,12,8]],[[0,12,3],[3,10,1],[4,7,4],[10,5,2],[12,3,4]],[[0,5,2],[2,3,2],[4,0,8]],[[0,8,2],[2,5,2],[4,3,4],[10,5,2],[12,8,4]],[[0,10,2],[2,7,2],[4,10,4],[10,12,2],[12,14,4]],[[0,11,4],[4,7,2],[6,11,2],[8,14,8]],[[0,14,2],[2,11,2],[4,7,2],[6,2,2]]],ew={bpm:96,swing:.56,reverb:.12,gain:1.9,chords:Wp,hook:Xp,leadRoot:74,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r}=n,a=n.ch(0),c=s%2?[0,7,10,14]:[0,7,10];c.includes(i)&&(t.kick(a,e,.45,120,.3),t.sub(n.ch(0,{drive:2}),e,r.root,KS(c,i)*o*.9,.035)),(i===4||i===12)&&(t.clap(a,e,.28),t.snare(a,e,.08)),i===14?t.hat(a,e,.07,7e3,!0):t.hat(a,e,En(i%4===0?.05:i%2===0?.08:.035)),(i===6||i===14)&&t.stab(n.ch(0,{pan:.2}),e,Pa(r,24),o*1.5,.05,2200);const h=n.ch(1,{pan:-.15,echo:[o*3,.3]});for(const u of n.hook)t.lead(h,e,u.note,u.len*o,.1,u.bend);const l=n.ch(2);(i===3||i===11)&&t.clank(l,e,.12),t.tone(n.ch(2,{pan:-.4}),"square",Yt(Pa(r,36)[[0,1,2,1][i%4]]),e,o*.9,En(.022),.003,2600),s%4===3&&i===8&&t.sweep(l,e,o*8,.07,400,6e3,2)}},nw={bpm:78,swing:.6,reverb:.3,gain:1,chords:Wp,hook:Xp,leadRoot:74,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r}=n,a=n.ch(0,{cutoff:5e3});if((i===0||i===10)&&t.kick(a,e,.45,110,.3),(i===4||i===12)&&t.snare(a,e,.09),i%2===0&&t.hat(a,e,En(.025),6e3),Math.random()<.3&&t.crackle(a,e,.02),i===0||i===8&&s%2===1){const h=r.root+24;t.keys(n.ch(0,{cutoff:2400,tremolo:[4,.3]}),e,[h,h+Ya(r),h+7,h+10],o*(i===0&&s%2===0?15:7),.03)}i===0&&t.tone(n.ch(0),"sine",Yt(r.root+12),e,o*6,.2,.01,0,{hold:!0}),i===10&&t.tone(n.ch(0),"sine",Yt(r.root+12),e,o*4,.16,.01,0,{hold:!0});const c=n.ch(1,{pan:.15,echo:[o*3,.35]});for(const h of n.hook)t.flute(c,e,h.note,h.len*o,.05);i%2===0&&t.bell(n.ch(2,{pan:.35}),e,Pa(r,36)[[0,1,2,1,0,2,1,2][i/2]],En(.02))}},Qr={root:40},ol={root:43},rl={root:45},al={root:48},iw={root:50},Rd={root:47},qp=[Qr,Qr,ol,rl,Qr,Qr,al,iw,al,al,ol,ol,rl,rl,Rd,Rd],Cd=[[0,12,4,1],[4,10,2],[6,7,2],[8,10,2],[10,12,6]],Pd=[[0,15,4,1],[4,12,2],[6,10,2],[8,12,8]],Yp=[Cd,Pd,[[0,7,2],[2,10,2],[4,12,4],[8,15,4],[12,12,4]],[[0,17,6,1],[6,15,2],[8,12,8]],Cd,Pd,[[0,15,2],[2,12,2],[4,8,4],[8,7,4],[12,8,4]],[[0,10,4,1],[4,14,4],[8,17,4,1],[12,19,4]],[[0,20,6,1],[6,19,2],[8,15,4],[12,12,4]],[[0,15,2],[2,12,2],[4,8,4],[8,7,8]],[[0,19,4],[4,15,4],[8,14,2],[10,15,2],[12,19,4]],[[0,22,8,1],[8,19,8]],[[0,17,2],[2,19,2],[4,21,4],[8,24,8]],[[0,21,4],[4,19,4],[8,17,8]],[[0,19,4,1],[4,23,4],[8,26,8]],[[0,23,2],[2,19,2],[4,14,2],[6,11,2],[8,7,8]]],sw={bpm:128,swing:.5,reverb:.1,gain:.4,chords:qp,hook:Yp,leadRoot:64,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r}=n,a=n.ch(0);if((i===0||i===8||i===10||s%2===1&&i===6)&&t.kick(a,e,.6),(i===4||i===12)&&t.snare(a,e,.36),i%2===0&&t.hat(a,e,En(i%4===0?.08:.05)),s%4===0&&i===0&&t.crash(a,e,.12),i%2===0){const l=i===0||i===10,u=l?o*5:o*.9,f=l?.05:.04;t.power(n.ch(0,{pan:-.35,drive:6,cutoff:l?3e3:1400}),e,r.root,u,f),t.power(n.ch(0,{pan:.35,drive:6,cutoff:l?3e3:1400}),e+.012,r.root,u,f,7),t.tone(n.ch(0),"sawtooth",Yt(r.root-12),e,o*1.8,.12,.004,500)}const c=n.ch(1,{pan:.1,drive:8,cutoff:3200,echo:[o*3,.18]});for(const l of n.hook)t.fuzz(c,e,l.note,l.len*o,.035,l.bend);const h=n.ch(2);s%4===3&&i>=12&&t.tom(h,e,[220,180,150,120][i-12],.32),i%2===1&&t.hat(h,e,En(.03),9e3),s%4===0&&i===0&&t.crash(h,e,.08)}},ow={bpm:76,swing:.5,reverb:.45,gain:1.6,chords:qp,hook:Yp,leadRoot:64,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r}=n,a=n.ch(0);if((i===0||i===10)&&t.kick(a,e,.34,110,.35),i===8&&t.rim(a,e,.12),i%2===0&&t.shaker(a,e,En(.02)),i===0&&t.tone(n.ch(0),"sine",Yt(r.root),e,o*14,.09,.02,0,{hold:!0}),i%2===0){const l=[r.root+12,r.root+19,r.root+24,r.root+19];t.pluck(n.ch(0,{pan:-.2,tremolo:[5.5,.5]}),e,l[i/2%4],En(.09),{bright:.4})}const c=n.ch(1,{pan:.2});for(const l of n.hook)t.whistle(c,e,l.note,l.len*o,.04,l.bend);const h=n.ch(2);i%4===0&&t.hat(h,e,En(.025),8e3),s%4===0&&i===0&&t.tom(h,e,70,.35)}},rw=[57,53,48,55],aw={bpm:132,swing:.5,reverb:.2,gain:4.5,chords:Array.from({length:16},(n,t)=>({root:rw[t%4]})),hook:Array.from({length:16},()=>[]),leadRoot:0,play(n){const{syn:t,t:e,s:i,dur:s,chord:o}=n,r=n.ch(0),a=o.root;if(i===0)for(const c of[0,4,7])t.tone(r,"triangle",Yt(a+c-12),e,s*15,.05,.4);i%4===2&&t.tone(r,"sine",Yt(a+[0,7,12,16][(i-2)/4]),e,s*3,.06,.02),i%8===4&&t.hat(r,e,.03)}},cw={menu:aw,"outskirts:day":QS,"outskirts:night":tw,"city:day":ew,"city:night":nw,"drylands:day":sw,"drylands:night":ow},Ld=256,lw=.12,cl=.7;class hw{constructor(t,e,i,s,o,r){this.id=t,this.def=e,this.syn=i,this.layers=[],this.chans=new Map,this.lfos=[],this.step=0,this.stopAt=1/0;const a=i.ctx;this.bus=a.createGain(),this.bus.gain.setValueAtTime(1e-4,r),this.bus.gain.setTargetAtTime(e.gain,r,cl*.6),this.bus.connect(s);const c=a.createGain();c.gain.value=e.reverb,this.bus.connect(c).connect(o);for(let h=0;h<3;h++){const l=a.createGain();l.gain.value=0,l.connect(this.bus),this.layers.push(l)}this.hooks=Array.from({length:Ld},()=>[]),e.hook.forEach((h,l)=>{for(const[u,f,d,g]of h)this.hooks[l*16+u].push({note:e.leadRoot+f,len:d,bend:!!g})}),this.next=r}ch(t,e={}){const i=`${t}|${e.pan??0}|${e.drive??0}|${e.cutoff??0}|${e.echo??""}|${e.tremolo??""}`;let s=this.chans.get(i);if(s)return s;const o=this.syn.ctx,r=o.createGain();let a=r;if(e.drive){const h=o.createWaveShaper();h.curve=this.syn.curve(e.drive),h.oversample="2x",r.gain.value=1.5,a=a.connect(h)}if(e.cutoff){const h=o.createBiquadFilter();h.type="lowpass",h.frequency.value=e.cutoff,a=a.connect(h)}if(e.tremolo){const h=o.createGain();h.gain.value=1-e.tremolo[1]/2;const l=o.createOscillator();l.frequency.value=e.tremolo[0];const u=o.createGain();u.gain.value=e.tremolo[1]/2,l.connect(u).connect(h.gain),l.start(),this.lfos.push(l),a=a.connect(h)}const c=o.createStereoPanner();if(c.pan.value=e.pan??0,a.connect(c),e.echo){const h=o.createDelay(1);h.delayTime.value=e.echo[0];const l=o.createGain();l.gain.value=.3;const u=o.createGain();u.gain.value=e.echo[1],a.connect(h),h.connect(l).connect(h),h.connect(u).connect(c)}return c.connect(this.layers[t]),s=r,this.chans.set(i,s),s}tick(t,e){const i=this.def,s=60/i.bpm/4,o=(4*i.swing-2)*s;for(;this.next<e&&this.next<this.stopAt;){this.next<t-.2&&(this.next=t);const r=this.step,a=r>>4,c=r&15,h=c%4===2?o:c%2===1?o/2:0;i.play({syn:this.syn,t:this.next+h,step:r,bar:a,s:c,dur:s,chord:i.chords[a],next:i.chords[(a+1)%16],hook:this.hooks[r],ch:(l,u)=>this.ch(l,u)}),this.next+=s,this.step=(r+1)%Ld}}fadeOut(t){this.bus.gain.cancelScheduledValues(t),this.bus.gain.setTargetAtTime(0,t,cl*.6),this.stopAt=t+cl*5}dispose(){for(const t of this.lfos)t.stop();this.bus.disconnect()}}class uw{constructor(t,e){this.syn=t,this.out=e,this.players=[],this.current=null,this.timer=0,this.tier=1;const i=t.ctx;this.reverb=i.createConvolver(),this.reverb.buffer=fw(i,2.6),this.reverb.connect(e)}get style(){var t;return((t=this.current)==null?void 0:t.id)??null}play(t){var i,s;if(((i=this.current)==null?void 0:i.id)===t)return;const e=this.syn.ctx.currentTime;(s=this.current)==null||s.fadeOut(e),this.current=new hw(t,cw[t],this.syn,this.out,this.reverb,e+.05),this.players.push(this.current),this.applyTier(0),this.timer||(this.timer=window.setInterval(()=>this.schedule(),25))}stop(){var e;const t=this.syn.ctx.currentTime;(e=this.current)==null||e.fadeOut(t),this.current=null}setTier(t){this.tier=t,this.applyTier(.3)}applyTier(t){const e=this.current;if(!e)return;const i=this.syn.ctx.currentTime,s=e.id==="menu",o=[!0,s||this.tier>=2,s||this.tier>=4];e.layers.forEach((r,a)=>{t?r.gain.setTargetAtTime(o[a]?1:0,i,t):r.gain.value=o[a]?1:0})}schedule(){const t=this.syn.ctx.currentTime;for(const e of this.players)e.tick(t,t+lw);this.players=this.players.filter(e=>e===this.current||t<e.stopAt+1?!0:(e.dispose(),!1)),this.players.length===0&&(window.clearInterval(this.timer),this.timer=0)}}function fw(n,t){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(2,e,n.sampleRate);for(let s=0;s<2;s++){const o=i.getChannelData(s);let r=0;for(let a=0;a<e;a++){const c=a/e;r+=(.6-.45*c)*(Math.random()*2-1-r),o[a]=r*Math.pow(1-c,3)}}return i}class dw{constructor(){this.ctx=null,this.engineOsc=null,this.engineOsc2=null,this.whineOsc=null,this.pending=null,this.musicOn=!0,this.sfxOn=!0,this.engineSound={base:80,rev:1.3,cutoff:700,cutoffRise:1400,whine:0},this.engineDamage=0,this.nextSputter=0}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.8;const i=e.createDynamicsCompressor();i.threshold.value=-12,this.master.connect(i).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=900,this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter.connect(this.engineGain).connect(this.sfxBus);const s=e.createBuffer(1,e.sampleRate,e.sampleRate),o=s.getChannelData(0);for(let r=0;r<o.length;r++)o[r]=Math.random()*2-1;this.syn=new YS(e,s),this.music=new uw(this.syn,this.musicBus),this.applyToggles(),this.pending&&this.music.play(this.pending)}this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(t,e){this.musicOn=t,this.sfxOn=e,this.applyToggles()}applyToggles(){if(!this.ctx)return;const t=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.musicOn?.55:0,t,.05),this.sfxBus.gain.setTargetAtTime(this.sfxOn?.9:0,t,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playMenuMusic(){this.setStyle("menu")}playGameMusic(t){this.setStyle(t),this.setTier(1)}setStyle(t){this.pending=t,this.ctx&&this.music.play(t)}stopMusic(){this.pending=null,this.ctx&&this.music.stop()}setTier(t){this.ctx&&this.music.setTier(t)}duck(t){this.ctx&&this.musicBus.gain.setTargetAtTime(this.musicOn?t?.55*.5:.55:0,this.ctx.currentTime,.08)}startEngine(t){if(!this.ctx)return;this.stopEngine(),this.engineDamage=0,this.engineSound=t;const e=this.ctx;this.engineOsc=e.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc2=e.createOscillator(),this.engineOsc2.type="square",this.engineOsc.frequency.value=t.base,this.engineOsc2.frequency.value=t.base*.5;const i=e.createGain();if(i.gain.value=.5,this.engineOsc.connect(this.engineFilter),this.engineOsc2.connect(i).connect(this.engineFilter),this.engineOsc.start(),this.engineOsc2.start(),t.whine>0){this.whineOsc=e.createOscillator(),this.whineOsc.type="triangle",this.whineOsc.frequency.value=t.base*2;const s=e.createGain();s.gain.value=t.whine,this.whineOsc.connect(s).connect(this.engineGain),this.whineOsc.start()}this.engineFilter.frequency.value=t.cutoff,this.engineGain.gain.setTargetAtTime(.07,e.currentTime,.2)}setEngineDamage(t){this.engineDamage=t,this.nextSputter=this.now+.4}setEngine(t,e){var r,a;if(!this.ctx||!this.engineOsc||!this.engineOsc2)return;const i=this.ctx.currentTime,s=this.engineSound,o=s.base*(1+t*s.rev)*(e?1.12:1);if(this.engineOsc.frequency.setTargetAtTime(o,i,.08),this.engineOsc2.frequency.setTargetAtTime(o*.5,i,.08),(r=this.whineOsc)==null||r.frequency.setTargetAtTime(o*2,i,.08),this.engineFilter.frequency.setTargetAtTime(s.cutoff+t*s.cutoffRise,i,.1),this.engineDamage>0&&i>=this.nextSputter){const c=this.engineGain.gain;c.cancelScheduledValues(i),c.setTargetAtTime(.015,i,.02),c.setTargetAtTime(.07,i+.09,.04),this.engineOsc.frequency.setTargetAtTime(o*.8,i,.03),(a=this.whineOsc)==null||a.frequency.setTargetAtTime(o*1.6,i,.03);const h=this.engineDamage>=2;h&&Math.random()<.35&&this.sfx("backfire"),this.nextSputter=i+(h?.3+Math.random()*.6:1.2+Math.random()*1.8)}}stopEngine(){if(!this.ctx)return;const t=this.ctx.currentTime;this.engineGain.gain.cancelScheduledValues(t),this.engineGain.gain.setTargetAtTime(0,t,.05);for(const e of[this.engineOsc,this.engineOsc2,this.whineOsc])e&&e.stop(t+.3);this.engineOsc=this.engineOsc2=this.whineOsc=null}get now(){return this.ctx?this.ctx.currentTime:0}sfx(t,e=0){if(!this.ctx||!this.sfxOn)return;const i=this.now,s=this.sfxBus,o=1+(Math.random()*2-1)*.05,r=1+(Math.random()*2-1)*.1;switch(t){case"gear":{const a=76+Math.min(e,12);this.syn.tone(s,"square",Yt(a),i,.08,.08,.002,4e3),this.syn.tone(s,"sine",Yt(a+12),i+.03,.1,.06);break}case"golden":[0,4,7,12].forEach((a,c)=>this.syn.tone(s,"triangle",Yt(84+a),i+c*.06,.25,.12));break;case"wrench":this.syn.tone(s,"square",Yt(67),i,.08,.08,.002,3e3),this.syn.tone(s,"square",Yt(74),i+.09,.08,.08,.002,3e3),this.syn.tone(s,"triangle",Yt(79),i+.18,.3,.12);break;case"magnet":{const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(300,i),a.frequency.exponentialRampToValueAtTime(1200,i+.35);const c=this.ctx.createGain();c.gain.setValueAtTime(.15,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.4),a.connect(c).connect(s),a.start(i),a.stop(i+.45);break}case"backfire":this.syn.noiseHit(s,i,.07,.35,"lowpass",500),this.syn.tone(s,"square",55,i,.06,.12,.002,400);break;case"magnetEnd":this.syn.tone(s,"sine",600,i,.15,.08),this.syn.tone(s,"sine",400,i+.1,.2,.08);break;case"whoosh":this.syn.sweep(s,i,.18,.18*r,800*o,3e3*o);break;case"nearMiss":this.syn.sweep(s,i,.3,.25,3e3,600);break;case"jump":this.syn.tone(s,"square",220*o,i,.12,.06*r,.002,1500),this.syn.sweep(s,i,.2,.1*r,500*o,2e3*o);break;case"land":this.syn.noiseHit(s,i,.12,.3*r,"lowpass",400*o);break;case"duck":this.syn.sweep(s,i,.15,.1*r,1500*o,500*o);break;case"hit":this.syn.kick(s,i),this.syn.noiseHit(s,i,.25,.5,"bandpass",2500,2),this.syn.tone(s,"square",110,i,.15,.1,.002,900);break;case"smash":this.syn.noiseHit(s,i,.15,.35*r,"bandpass",1200*o,1.5);break;case"crash":this.syn.kick(s,i),this.syn.noiseHit(s,i,.9,.7,"lowpass",1500),this.syn.noiseHit(s,i+.05,.5,.35,"highpass",5e3),this.syn.tone(s,"sawtooth",80,i,.6,.15,.002,400);break;case"oil":this.syn.tone(s,"sawtooth",900,i,.4,.05,.01,2500),this.syn.sweep(s,i,.4,.15,2500,1800);break;case"toast":this.syn.tone(s,"square",Yt(72),i,.1,.07,.002,3e3),this.syn.tone(s,"square",Yt(79),i+.1,.18,.07,.002,3e3);break;case"newBest":[0,4,7,12,7,12].forEach((a,c)=>this.syn.tone(s,"square",Yt(72+a),i+c*.09,.2,.08,.002,3500));break;case"buy":this.syn.tone(s,"square",Yt(88),i,.06,.07,.002,5e3),this.syn.tone(s,"square",Yt(93),i+.07,.12,.07,.002,5e3),[0,4,7,12,16].forEach((a,c)=>this.syn.tone(s,"triangle",Yt(76+a),i+.18+c*.05,.25,.1));break;case"tap":this.syn.tone(s,"sine",880,i,.05,.08);break;case"skid":this.syn.sweep(s,i,.45,.16*r,3200*o,1700*o,6);break;case"bump":this.syn.tone(s,"triangle",140*o,i,.1,.12*r);break;case"stunt":this.syn.tone(s,"triangle",Yt(79+e*2),i,.06,.06*r);break;case"razor":this.syn.noiseHit(s,i,.12,.22,"highpass",6e3);break;case"comboUp":{const a=Math.max(2,e),c=64+(a-2)*3;this.syn.sweep(s,i,.22,.12,600,4500);const h=[0,4,7,12,16,19].slice(0,a+1);h.forEach((u,f)=>this.syn.tone(s,"square",Yt(c+u),i+.04+f*.055,.12,.07,.002,4500));const l=i+.04+h.length*.055;if([0,4,7,12].forEach(u=>this.syn.tone(s,"triangle",Yt(c+12+u),l,.5,.05,.005,0,{vibrato:[6,.008]})),this.syn.tone(s,"sawtooth",Yt(c-12),l,.3,.07,.005,1200),a>=5){for(let u=0;u<8;u++)this.syn.tone(s,"triangle",Yt(c+24+(u%2?7:12)),l+.06+u*.045,.09,.04);this.syn.crash(s,l,.12)}break}case"comboLost":[88,83,76].forEach((a,c)=>this.syn.tone(s,"triangle",Yt(a),i+.04+c*.07,.14,.07)),this.syn.noiseHit(s,i+.04,.2,.12,"highpass",7e3);break}}}const ct=new dw;function pw(n,t){return n.owned.includes(t)}function mw(n,t){const e=vo(t);return pw(n,t)||n.gearBank<e.price?!1:(n.gearBank-=e.price,n.owned.push(t),n.selected={class:e.cls,model:t},!0)}function gw(n,t){const e=Op(t),i=n.upgrades[t];return i>=qa(e)?null:e.costs[i]}function vw(n,t){const e=gw(n,t);return e===null||n.gearBank<e?!1:(n.gearBank-=e,n.upgrades[t]+=1,!0)}function _w(n,t){const e=or.find(i=>i.finish===t);return!e||n.finishes.includes(t)||n.gearBank<e.price?!1:(n.gearBank-=e.price,n.finishes.push(t),!0)}function xw(n){let t=null,e=!1,i=()=>{},s=()=>{};const o=()=>{ct.sfx("tap"),e?(s(),i()):n.go("title")},r=a=>{var c;e||n.ui.lastElementChild!==t||(a.key==="ArrowLeft"||a.key==="ArrowRight")&&(a.preventDefault(),(c=t==null?void 0:t.step)==null||c.call(t,a.key==="ArrowLeft"?-1:1))};return{key(a){a==="escape"&&o()},enter(){window.addEventListener("keydown",r);const a=n.save,c={cls:a.selected.class,model:a.selected.model,colors:a.colors,riderColors:a.riderColors,owned:a.owned,bank:a.gearBank,finishes:a.finishes};s=()=>n.garage.setVehicle(c.model,c.colors[c.model],c.riderColors[c.model]),s();const h=d=>{d.owned.includes(d.model)&&(n.save.selected={class:vo(d.model).cls,model:d.model}),n.save.colors=d.colors,n.save.riderColors=d.riderColors,s(),n.persist()},l=d=>n.garage.dragVelocity+=d*.6,u=()=>{ct.unlock(),ct.sfx("tap")},f=()=>{e=!0,t=zS(c,{onChange:h,onPreview:d=>n.garage.setVehicle(c.model,d??c.colors[c.model],c.riderColors[c.model]),onBuyFinish:d=>(ct.unlock(),_w(n.save,d)?(c.bank=n.save.gearBank,n.persist(),ct.sfx("buy"),n.haptic(30),!0):!1),onBack:o,onStageDrag:l,onTap:u}),n.ui.replaceChildren(t)};i=()=>{e=!1,t=OS(c,{onChange:h,onBack:o,onGo:()=>{ct.unlock(),ct.sfx("tap"),n.go("play")},onBuy:d=>(ct.unlock(),mw(n.save,d)?(c.bank=n.save.gearBank,n.persist(),ct.sfx("buy"),n.haptic(30),!0):!1),onUpgrades:()=>{ct.unlock(),ct.sfx("tap"),n.openUpgrades(()=>{var d;c.bank=n.save.gearBank,(d=t==null?void 0:t.refresh)==null||d.call(t)})},onPaint:f,onStageDrag:l,onTap:u}),n.ui.replaceChildren(t)},i(),ct.playMenuMusic()},exit(){window.removeEventListener("keydown",r),t=null},frame(a){n.garage.render(n.renderer,a),n.speedLines.update(a,0,!1)}}}const $p=1,Kp=2,cu=4,lu=8,ga=16,$n=.5;function Mw(n){switch(n.height){case"low":return n.smashable?Kp:$p;case"overhead":return cu;case"tall":return lu;case"flat":return ga}}function yw(n){return n==="bike"?O.bikeHitboxLength:O.carHitboxLength}function jp(n,t,e,i,s=.3){const o=(n.length+yw(i))/pp(n);return{lane:t,start:e-s,end:e+o+s,mask:Mw(n)}}function Zp(n,t,e,i,s=.3){const o=jp(n,t,e,i,s);return Array.from({length:dp(n)},(r,a)=>({...o,lane:t+a}))}function ko(n,t,e){return!(n&lu||n&cu&&!e||n&$p||n&Kp&&t==="bike")}function bw(n){return(n&(lu|cu))===0}function Jp(n){const{agent:t,speed:e}=n,i=Math.max(1,Math.ceil((n.to-n.from)/$n)),s=T=>Math.max(1,Math.ceil(T/$n)),o=s(e*t.hangTime),r=Math.floor(o*.15),a=Math.ceil(o*.85),c=s(e*O.duckTime),h=s(e*t.laneChangeTime),l=s(e*O.minReactionTime),u=s(e*O.oilLockTime),f=i+Math.max(o,c,2*h)+2,d=O.laneCount,g=[];for(let T=0;T<d;T++)g.push(new Uint8Array(f));for(const T of n.footprints){if(T.end<n.from)continue;const L=Math.max(0,Math.floor((T.start-n.from)/$n)),V=Math.min(f-1,Math.ceil((T.end-n.from)/$n)),v=g[T.lane];for(let M=L;M<=V;M++)v[M]|=T.mask}const _=t.cls,p=new Set;let m=0;const w=n.budget??1/0,x=[],S=(T,L,V,v,M)=>(((T*3+L)*256+Math.min(V,255))*256+Math.min(v,255))*2+M,I=(T,L,V,v,M)=>{if(T>=i)return!0;const B=S(T,L,V,v,M);if(p.has(B)||++m>w)return!1;{const U=g[L][T+1];if(ko(U,_,!1)){const F=U&ga?u:Math.max(0,v-1);if(x.push({at:n.from+T*$n,action:"stay",lane:L}),I(T+1,L,Math.max(0,V-1),F,0))return!0;x.pop()}}if((V===0||M)&&v===0)for(const U of[-1,1]){const F=L+U;if(F<0||F>=d)continue;let q=!0,z=!1;for(let Y=1;Y<=h&&q;Y++){const vt=g[L][T+Y],_t=g[F][T+Y];q=ko(vt,_,!1)&&ko(_t,_,!1),_t&ga&&(z=!0)}if(!q)continue;const nt=M?Math.max(0,V-h):Math.max(0,l-h);if(x.push({at:n.from+T*$n,action:U<0?"left":"right",lane:F}),I(T+h,F,nt,z?u:0,M?0:1))return!0;x.pop()}if(V===0){let U=!0;for(let F=1;F<=o&&U;F++){const q=g[L][T+F];U=F>r&&F<a?bw(q):ko(q,_,!1)}if(U){if(x.push({at:n.from+T*$n,action:"jump",lane:L}),I(T+o,L,Math.max(0,l-o),Math.max(0,v-o),0))return!0;x.pop()}if(_==="bike"){let F=!0,q=!1;for(let z=1;z<=c&&F;z++){const nt=g[L][T+z];F=ko(nt,_,!0),nt&ga&&(q=!0)}if(F){if(x.push({at:n.from+T*$n,action:"duck",lane:L}),I(T+c,L,Math.max(0,l-c),q?u:Math.max(0,v-c),0))return!0;x.pop()}}}return p.add(B),!1};return I(0,n.startLane,Math.ceil((n.startCooldown??0)/$n),Math.ceil((n.startLock??0)/$n),0)?x:null}function Sw(n){for(let t=0;t<O.laneCount;t++)if(!Jp({...n,startLane:t}))return!1;return!0}const ww={stay:null,left:"left",right:"right",jump:"up",duck:"down"},Ew=[1.5,.8,.35];class Id{constructor(){this.fps=[]}decide(t,e=1/60){const i=t.vehicle;if(t.crashed||i.airborne||i.changingLane||i.ducking)return null;const s=t.distance,o=t.speed,r=Math.max(90,o*4);for(const a of Ew){this.fps.length=0;for(const l of t.obstacles)if(!(l.spent||l.knockT>=0||l.sMeet>s+r+20))for(const u of Zp(l.def,l.lane,l.sMeet,t.model.cls,a))u.end>=s&&this.fps.push({...u,start:Math.max(u.start,Math.min(l.sMeet,s+.01))});const c=Jp({footprints:this.fps,from:s,to:s+r,speed:o,agent:t.model,startLane:i.lane,startLock:i.oilLock*o,budget:1e5});if(!c)continue;const h=c.find(l=>l.action!=="stay");return h&&h.at-s<=o*e+.25?ww[h.action]:null}return null}}const Go=O.comboLevelPts.length+1;class Tw{constructor(){this.level=1,this.pts=0,this.best=1,this.bonus=0,this.idle=0}get need(){return this.level<Go?O.comboLevelPts[this.level-1]:0}get progress(){return this.level<Go?this.pts/this.need:1}get empty(){return this.level===1&&this.pts<=0}add(t){this.idle=0;let e=0;for(this.pts+=t;this.level<Go&&this.pts>=this.need;)this.pts-=this.need,this.level++,e++;return this.level===Go&&(this.pts=0),this.best=Math.max(this.best,this.level),e}gears(t){return this.bonus+=t*(this.level-1),t*this.level}update(t,e){this.idle+=t,!(e||this.idle<O.comboDrainDelay)&&(this.pts=Math.max(0,this.pts-O.comboDrainRate*t))}break(){if(this.empty)return 0;const t=this.level;return this.level=1,this.pts=0,this.idle=0,t}}const Aw=n=>1-Math.pow(1-n,3);class Rw{constructor(t){this.lane=1,this.x=0,this.fromX=0,this.laneT=1,this.laneDir=0,this.bouncing=!1,this.prevLane=1,this.y=0,this.prevX=0,this.prevY=0,this.jumpT=-1,this.dropT=-1,this.dropFromY=0,this.duckT=-1,this.oilLock=0,this.buffered=null,this.bufferT=0,this.edgeBumpT=-1,this.edgeBumpDir=0,this.landT=-1,this.jumpStartT=-1,this.model=t,this.length=t.cls==="bike"?O.bikeHitboxLength:O.carHitboxLength,this.width=t.cls==="bike"?O.bikeHitboxWidth:O.carHitboxWidth,this.x=this.fromX=this.prevX=vi(this.lane)}get airborne(){return this.jumpT>=0||this.dropT>=0}get changingLane(){return this.laneT<1}get ducking(){return this.duckT>=0}get height(){return this.ducking?O.duckHitboxHeight:O.hitboxHeight}get jumpProgress(){return this.jumpT>=0?this.jumpT/this.model.hangTime:-1}input(t,e){this.tryAction(t,e)||(this.buffered=t,this.bufferT=O.inputBuffer)}tryAction(t,e){switch(t){case"left":case"right":{if(this.airborne||this.changingLane||this.oilLock>0)return!1;const i=t==="left"?-1:1,s=this.lane+i;return s<0||s>=O.laneCount?(this.edgeBumpT=0,this.edgeBumpDir=i,e.push("edgeBump"),!0):(this.startLaneChange(s,i),e.push("laneChange"),!0)}case"up":return this.airborne?!1:(this.duckT=-1,this.jumpT=0,this.jumpStartT=0,e.push("jump"),!0);case"down":return this.jumpT>=0?(this.dropFromY=this.y,this.jumpT=-1,this.dropT=0,e.push("drop"),!0):this.dropT>=0?!1:(this.model.cls==="bike"&&(this.duckT=0,e.push("duck")),!0)}}startLaneChange(t,e){this.prevLane=this.lane,this.fromX=this.x,this.lane=t,this.laneT=0,this.laneDir=e,this.bouncing=!1}bounceBack(){const t=this.prevLane;this.fromX=this.x,this.laneDir=t<this.lane?-1:1,this.prevLane=this.lane,this.lane=t,this.laneT=0,this.bouncing=!0}update(t,e){if(this.prevX=this.x,this.prevY=this.y,this.laneT<1?(this.laneT=Math.min(1,this.laneT+t/this.model.laneChangeTime),this.x=this.fromX+(vi(this.lane)-this.fromX)*Aw(this.laneT),this.laneT>=1&&(this.laneDir=0,this.bouncing=!1)):this.x=vi(this.lane),this.jumpT>=0){this.jumpT+=t;const i=this.jumpT/this.model.hangTime;i>=1?(this.jumpT=-1,this.y=0,this.landT=0,e.push("land")):this.y=4*O.jumpPeak*i*(1-i)}else if(this.dropT>=0){this.dropT+=t;const i=this.dropT/O.fastDropTime;i>=1?(this.dropT=-1,this.y=0,this.landT=0,e.push("land")):this.y=this.dropFromY*(1-i)}this.duckT>=0&&(this.duckT+=t,this.duckT>=O.duckTime&&(this.duckT=-1)),this.oilLock>0&&(this.oilLock=Math.max(0,this.oilLock-t)),this.edgeBumpT>=0&&(this.edgeBumpT=this.edgeBumpT>.3?-1:this.edgeBumpT+t),this.landT>=0&&(this.landT=this.landT>.3?-1:this.landT+t),this.jumpStartT>=0&&(this.jumpStartT=this.jumpStartT>.2?-1:this.jumpStartT+t),this.buffered&&(this.bufferT-=t,this.tryAction(this.buffered,e)?this.buffered=null:this.bufferT<=0&&(this.buffered=null))}}function Dd(n,t,e){return n.front>t&&n.front-n.length<t+e}function Ud(n,t,e){return Math.abs(n.x-t)-(n.width+e)/2}function Cw(n,t,e,i){const s=e.def,o=Dd(n,e.s,s.length),r=Ud(n,e.x,s.width),a=r<0;if(!o)return"none";if(!a)return s.height==="tall"&&r<O.nearMissMargin?"nearMiss":"none";switch(s.height){case"tall":{const c=Dd(t,e.prevS,s.length),h=Ud(t,e.prevX,s.width)<0;return h&&!c?"headOn":c&&!h?"sideSwipe":Math.abs(n.x-e.x)<(n.width+s.width)/4?"headOn":"sideSwipe"}case"low":return n.y>=O.lowHeight?"jumpOver":i==="car"&&s.smashable?"smash":"low";case"overhead":return n.y+n.height>O.overheadClearance?"overhead":"duckUnder";case"flat":return n.y<.05?"oil":"none"}}function lr(n){const t=O.startSpeed+(O.maxSpeed-O.startSpeed)*(1-Math.exp(-Math.max(0,n)/O.speedCurveK));return Math.min(O.maxSpeed,t)}function hr(n){let t=1;for(let e=0;e<O.tierBounds.length;e++)n>=O.tierBounds[e]&&(t=e+1);return t}function Pw(n){return O.tierWeights[n-1]}function $a(n){return Math.max(O.minReactionDistance,n*O.minReactionTime)}function Lw(n,t=1){const e=O.tierGaps[hr(n)-1]*(n<O.forgivenessDistance?2:1)*t;return Math.max(e,O.minLeadIn*$a(lr(n)))}function Iw(n){return Math.max(1,$a(n)/O.patternReferenceSpacing)}const Dw=[{id:"t1-cone-gap-mid",tier:1,rows:[{z:0,lanes:["cone",".","cone"]}],gears:[{lane:1,z:-10,count:6}]},{id:"t1-cone-left",tier:1,rows:[{z:0,lanes:["cone",".","."]}],gears:[{lane:0,z:0,count:5,arc:!0}]},{id:"t1-cone-right",tier:1,rows:[{z:0,lanes:[".",".","cone"]}],gears:[{lane:1,z:-6,count:5}]},{id:"t1-crate-mid",tier:1,rows:[{z:0,lanes:[".","crate","."]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t1-barrier-sides",tier:1,rows:[{z:0,lanes:["barrier",".","barrier"]}],gears:[{lane:1,z:-8,count:6}]},{id:"t1-barrier-mid",tier:1,rows:[{z:0,lanes:[".","barrier","."]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t1-zigzag",tier:1,rows:[{z:0,lanes:["cone","cone","."]},{z:16,lanes:[".","cone","cone"]}],gears:[{lane:2,z:-4,count:3},{lane:0,z:14,count:4}]},{id:"t1-crates-pair",tier:1,rows:[{z:0,lanes:["crate","crate","."]}],gears:[{lane:2,z:-6,count:5}]},{id:"t1-barrier-full",tier:1,rows:[{z:0,lanes:["barrier","barrier","barrier"]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t1-slalom",tier:1,rows:[{z:0,lanes:[".","cone","."]},{z:14,lanes:["cone",".","cone"]},{z:28,lanes:[".","cone","."]}],gears:[{lane:1,z:10,count:3}]},{id:"t1-crate-then-barrier",tier:1,rows:[{z:0,lanes:["crate",".","crate"]},{z:16,lanes:[".","barrier","."]}],gears:[{lane:1,z:16,count:5,arc:!0}]},{id:"t2-parked-left",tier:2,rows:[{z:0,lanes:["parked",".","."]}],gears:[{lane:1,z:-4,count:7}]},{id:"t2-parked-cones",tier:2,rows:[{z:0,lanes:[".","parked","."]},{z:16,lanes:["cone",".","cone"]}],gears:[{lane:0,z:16,count:5,arc:!0}]},{id:"t2-pipe-mid",tier:2,rows:[{z:0,lanes:[".","pipe","."]}],gears:[{lane:1,z:-6,count:5,low:!0}]},{id:"t2-pipe-full",tier:2,only:"bike",rows:[{z:0,lanes:["pipe","pipe","pipe"]}],gears:[{lane:1,z:-4,count:4,low:!0}]},{id:"t2-pipe-two",tier:2,rows:[{z:0,lanes:["pipe","pipe","."]}],gears:[{lane:2,z:-6,count:5}]},{id:"t2-parked-two",tier:2,rows:[{z:0,lanes:["parked",".","parked"]}],gears:[{lane:1,z:-6,count:8}]},{id:"t2-parked-barrier",tier:2,rows:[{z:0,lanes:["parked","barrier","."]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t2-staggered",tier:2,rows:[{z:0,lanes:["parked",".","."]},{z:16,lanes:[".",".","parked"]},{z:32,lanes:[".","parked","."]}],gears:[{lane:1,z:0,count:5}]},{id:"t2-pipe-cones",tier:2,rows:[{z:0,lanes:[".","pipe","pipe"]},{z:16,lanes:["cone",".","."]}],gears:[{lane:0,z:-4,count:4}]},{id:"t3-oil-cones",tier:3,rows:[{z:0,lanes:["cone","oil","cone"]}],gears:[{lane:1,z:-4,count:6}]},{id:"t3-slow-mid",tier:3,rows:[{z:0,lanes:[".","slow","."]}],gears:[{lane:0,z:-4,count:6}]},{id:"t3-truck-left",tier:3,rows:[{z:0,lanes:["truck",".","."]}],gears:[{lane:1,z:-2,count:8}]},{id:"t3-truck-cones",tier:3,rows:[{z:0,lanes:[".","cone","truck"]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t3-slow-two",tier:3,rows:[{z:0,lanes:["slow",".","slow"]}],gears:[{lane:1,z:-4,count:8}]},{id:"t3-truck-parked",tier:3,rows:[{z:0,lanes:["truck",".","parked"]}],gears:[{lane:1,z:0,count:6}]},{id:"t3-oil-slow",tier:3,rows:[{z:0,lanes:[".","oil","."]},{z:18,lanes:["slow",".","slow"]}],gears:[{lane:1,z:4,count:6}]},{id:"t3-pipe-truck",tier:3,rows:[{z:0,lanes:["truck","pipe","."]}],gears:[{lane:2,z:-4,count:6}]},{id:"t3-diag-left",tier:3,rows:[{z:0,lanes:["diag","diag","."]}],gears:[{lane:2,z:-4,count:7}]},{id:"t3-diag-right",tier:3,rows:[{z:0,lanes:[".","diag","diag"]}],gears:[{lane:0,z:-4,count:7}]},{id:"t3-diag-cones",tier:3,rows:[{z:0,lanes:["diag","diag","."]},{z:18,lanes:[".","cone","cone"]}],gears:[{lane:2,z:18,count:5,arc:!0}]},{id:"t4-wall-left2",tier:4,rows:[{z:0,lanes:["wall","wall","."]}],gears:[{lane:2,z:-6,count:6}]},{id:"t4-wall-right2",tier:4,rows:[{z:0,lanes:[".","wall","wall"]}],gears:[{lane:0,z:-6,count:6}]},{id:"t4-wall-barriers",tier:4,rows:[{z:0,lanes:[".","wall","."]},{z:16,lanes:["barrier",".","barrier"]}],gears:[{lane:0,z:16,count:5,arc:!0}]},{id:"t4-corridor",tier:4,rows:[{z:0,lanes:["wall",".","wall"]},{z:16,lanes:["truck",".","truck"]}],gears:[{lane:1,z:-2,count:10}]},{id:"t4-chicane",tier:4,rows:[{z:0,lanes:["wall","wall","."]},{z:20,lanes:[".","wall","wall"]}],gears:[{lane:2,z:-4,count:3},{lane:0,z:14,count:4}]},{id:"t4-wall-slow",tier:4,rows:[{z:0,lanes:[".","wall","."]},{z:16,lanes:["slow",".","."]}],gears:[{lane:2,z:0,count:6}]},{id:"t4-pipe-wall",tier:4,rows:[{z:0,lanes:["pipe","wall","."]}],gears:[{lane:0,z:-4,count:4,low:!0}],only:"bike"},{id:"t4-wall-pipe-car",tier:4,rows:[{z:0,lanes:["wall","pipe","."]}],gears:[{lane:2,z:-4,count:5}],only:"car"},{id:"t4-diag-chicane",tier:4,rows:[{z:0,lanes:["diag","diag","."]},{z:24,lanes:[".","diag","diag"]}],gears:[{lane:2,z:-4,count:3},{lane:0,z:18,count:4}]},{id:"t4-diag-parked",tier:4,rows:[{z:0,lanes:[".","diag","diag"]},{z:18,lanes:["parked",".","."]}],gears:[{lane:0,z:-4,count:4},{lane:1,z:18,count:4}]},{id:"t4-parked-oil",tier:4,rows:[{z:0,lanes:["parked","oil","parked"]}],gears:[{lane:1,z:-6,count:6}]},{id:"t5-switch-mid",tier:5,rows:[{z:0,lanes:[".","sw<","."]}],gears:[{lane:2,z:-4,count:6}]},{id:"t5-switch-wall",tier:5,rows:[{z:0,lanes:["wall","sw>","."]}],gears:[{lane:2,z:0,count:5}]},{id:"t5-switch-edge",tier:5,rows:[{z:0,lanes:["sw>",".","."]}],gears:[{lane:2,z:-4,count:6}]},{id:"t5-truck-switch",tier:5,rows:[{z:0,lanes:["truck",".","sw<"]}],gears:[{lane:1,z:0,count:6}]},{id:"t5-gauntlet-bike",tier:5,only:"bike",rows:[{z:0,lanes:["wall",".","wall"]},{z:20,lanes:["slow","pipe","slow"]}],gears:[{lane:1,z:2,count:6,low:!0}]},{id:"t5-gauntlet-car",tier:5,only:"car",rows:[{z:0,lanes:["wall",".","wall"]},{z:20,lanes:["slow",".","barrier"]}],gears:[{lane:1,z:2,count:8}]},{id:"t5-mixed",tier:5,rows:[{z:0,lanes:["cone","truck","."]},{z:22,lanes:[".",".","wall"]}],gears:[{lane:2,z:-4,count:4}]},{id:"t5-diag-slow",tier:5,rows:[{z:0,lanes:["diag","diag","."]},{z:22,lanes:[".",".","slow"]}],gears:[{lane:2,z:-4,count:4},{lane:1,z:20,count:4}]},{id:"t5-switch-oil",tier:5,rows:[{z:0,lanes:["oil","sw<","."]}],gears:[{lane:2,z:-2,count:6}]},{id:"t5-jam",tier:5,rows:[{z:0,lanes:["slow","slow","."]},{z:24,lanes:[".","slow","slow"]}],gears:[{lane:2,z:-4,count:4}]}],eo=.7,Uw=4,Nd=new Map;function Qp(n,t,e,i){const s=Iw(e),o=[];let r=t;for(const h of n.rows)h.lanes.forEach((l,u)=>{if(l===".")return;if(l==="diag"){if(h.lanes[u-1]==="diag")return;l="diagonal"}let f=l,d=u;(l==="sw<"||l==="sw>")&&(f="switcher",d=u+(l==="sw<"?-1:1));const g=t+h.z*s;o.push({kind:f,lane:u,fromLane:d,sMeet:g}),r=Math.max(r,jp(gr[f],u,g,i.cls,0).end)});const a=[],c=O.gearSpacing*Math.sqrt(s);return n.gears.forEach((h,l)=>{if(h.arc){const u=e*i.hangTime,f=t+h.z*s+.5;for(let d=0;d<h.count;d++){const g=(d+.5)/h.count,_=4*O.jumpPeak*g*(1-g)+eo;a.push({kind:"gear",lane:h.lane,s:f-u/2+g*u,y:_,line:l})}}else for(let u=0;u<h.count;u++)a.push({kind:"gear",lane:h.lane,s:t+h.z*s+u*c,y:h.low?.45:eo,line:l})}),{pattern:n,obstacles:o,gears:a,start:t,end:r}}function Nw(n,t){return n.obstacles.flatMap(e=>Zp(gr[e.kind],e.lane,e.sMeet,t.cls))}function kw(n,t,e){const i=`${n.id}|${e.id}|${Math.round(t)}`,s=Nd.get(i);if(s!==void 0)return s;const o=O.minLeadIn*$a(t),r=Qp(n,o,t,e),a=Sw({footprints:Nw(r,e),from:0,to:r.end+2,speed:t,agent:e,startCooldown:t*O.minReactionTime});return Nd.set(i,a),a}class Fw{constructor(t,e,i=0,s=O.magnetEvery){this.model=e,this.biomeOffset=i,this.magnetEvery=s,this.obstacles=[],this.pickups=[],this.gaps=[],this.placed=[],this.breathers=[],this.lineLeft=new Map,this.head=O.firstPatternAt,this.pf=0,this.nextId=1,this.lastWrenchAt=-1/0,this.lastBreatherEnd=0,this.rng=new Dn(t),this.scatterRng=new Dn(t^97155045),this.pickupRng=new Dn(t^165902235),this.nextBreather=this.rng.range(O.breatherIntervalMin,O.breatherIntervalMax),this.nextGolden=O.goldenGearEvery*this.pickupRng.range(.6,1.2),this.nextMagnet=O.tierBounds[1]+this.pickupRng.range(50,300)*(s/O.magnetEvery),this.gaps.push({start:0,end:this.head})}fill(t){for(this.pf=t;this.head<t+O.generateAhead;)this.step()}recycle(t){const e=t-30;let i=0;for(const o of this.obstacles)(o.def.moving?o.sMeet>e-120:o.s+o.def.length>e)&&(this.obstacles[i++]=o);this.obstacles.length=i,i=0;let s=1/0;for(const o of this.pickups)o.s<=e||(this.pickups[i++]=o,o.line>=0&&o.line<s&&(s=o.line));if(i<this.pickups.length)for(const o of this.lineLeft.keys())o<s&&this.lineLeft.delete(o);this.pickups.length=i,i=0;for(const o of this.gaps)o.end>e&&(this.gaps[i++]=o);this.gaps.length=i}placeWrench(t,e=40,i=O.wrenchAfterHit){const s=this.gaps.filter(c=>{const h=(c.start+c.end)/2;return c.end-c.start>=6&&h>=t+e&&h<=t+i});if(s.length===0)return!1;const o=s.filter(c=>(c.start+c.end)/2>=this.lastWrenchAt+O.wrenchMinSpacing),r=(o.length?o:s)[0],a=this.freeSpot(this.pickupRng.int(0,2),(r.start+r.end)/2,r);return a?(this.addPickup("wrench",a.lane,a.s,eo+.2),this.lastWrenchAt=a.s,!0):!1}step(){const t=this.head,e=Pf(t,this.biomeOffset);if(t>=e.start){this.placeBreather(t,e.end);return}if(t>=Math.min(this.nextBreather,this.lastBreatherEnd+O.breatherIntervalMax-120)){this.placeBreather(t);return}const i=Lw(t,this.rng.range(.85,1.2)),s=t+i,o=lr(s),r=this.choosePattern(s,o);if(!r){const h=Math.min(s+20,e.start);this.recordGap(t,h),this.head=h;return}const a=Qp(r,s,o,this.model);if(a.end+1>e.start){this.recordGap(t,e.start-1),this.head=e.start;return}for(const h of a.obstacles)this.addObstacle(h);const c=this.nextId;this.nextId+=a.pattern.gears.length;for(const h of a.gears)this.addPickup(h.kind,h.lane,h.s,h.y,c+h.line);this.recordGap(t,s-1),this.placed.push(a),this.head=a.end+1}choosePattern(t,e){const i=t<O.forgivenessDistance?1:hr(t),s=Pw(i),o=this.model.cls;for(let r=0;r<8;r++){const a=this.rng.weighted([1,2,3,4,5],l=>s[l-1]),c=Dw.filter(l=>l.tier===a&&(!l.only||l.only===o));if(c.length===0)continue;const h=this.rng.pick(c);if(kw(h,e,this.model))return h}return null}placeBreather(t,e){let i=e!==void 0?e-t:this.rng.range(O.breatherLengthMin,O.breatherLengthMax);const s=Pf(t,this.biomeOffset);t+i>s.start&&(i=s.end-t);let o=this.rng.int(0,2);const r=this.nextId++;for(let a=t+8;a<t+i-8;a+=O.gearSpacing)this.rng.chance(.06)&&(o=Math.max(0,Math.min(2,o+(this.rng.chance(.5)?1:-1)))),this.addPickup("gear",o,a,eo,r);this.breathers.push({start:t,end:t+i}),this.gaps.push({start:t,end:t+i}),this.head=t+i,this.lastBreatherEnd=this.head,this.nextBreather=this.head+this.rng.range(O.breatherIntervalMin,O.breatherIntervalMax)}recordGap(t,e){if(e-t<4)return;this.gaps.push({start:t,end:e});const i=(t+e)/2,s=hr(i);if(i>=this.nextGolden){this.addSpecial("golden",i,t,e),this.nextGolden=i+O.goldenGearEvery*this.pickupRng.range(.8,1.2);return}if(s>=2&&i>=this.nextMagnet){this.addSpecial("magnet",i,t,e),this.nextMagnet=i+this.magnetEvery*this.pickupRng.range(.85,1.15);return}const o=e-$a(lr(e));if(this.pickupRng.chance(.45)&&o-t>8){const r=this.pickupRng.int(0,2),a=this.nextId++;for(let c=t+3;c<o;c+=O.gearSpacing)this.addPickup("gear",r,c,eo,a)}}addSpecial(t,e,i,s){const o=this.freeSpot(this.pickupRng.int(0,2),e,{start:i,end:s});o&&this.addPickup(t,o.lane,o.s,eo+.2)}freeSpot(t,e,i){const s=[t,(t+1)%3,(t+2)%3];for(const o of[0,5,-5,10,-10]){const r=e+o;if(!(r<i.start+2||r>i.end-2)){for(const a of s)if(!this.pickups.some(c=>c.lane===a&&!c.taken&&Math.abs(c.s-r)<Uw))return{lane:a,s:r}}}return null}addObstacle(t){const e=gr[t.kind],i=Ub(e,t.fromLane)+this.scatterRng.range(-1,1)*e.scatter.dx,s=e.angle?(t.lane===0?1:-1)*e.angle:0,o={id:this.nextId++,def:e,lane:t.lane,fromLane:t.fromLane,sMeet:t.sMeet,s:0,x:i,prevS:0,prevX:i,blinker:!1,spent:!1,knockT:-1,knockDir:1,yaw:s+this.scatterRng.range(-1,1)*e.scatter.yaw};o.s=o.prevS=mp(o,this.pf),this.obstacles.push(o)}addPickup(t,e,i,s,o=-1){const r=vi(e);o>=0&&this.lineLeft.set(o,(this.lineLeft.get(o)??0)+1),this.pickups.push({id:this.nextId++,kind:t,lane:e,line:o,s:i,x:r,y:s,prevS:i,prevX:r,prevY:s,taken:!1,attracted:!1,takenT:-1})}}function kd(n,t){const e=Math.max(0,(t-O.hitSlowHold)/(1-O.hitSlowHold));return n+(1-n)*e*e*(3-2*e)}function Fd(n,t,e){return t>=n?n<e&&t>=e:n<e||t>=e}class Ow{constructor(t){this.speed=O.startSpeed,this.hp=O.maxHp,this.gears=0,this.tier=1,this.leg=0,this.hour=8,this.invulnerable=0,this.sinceHit=99,this.smashT=0,this.magnetT=0,this.crashed=!1,this.crashCause=null,this.time=0,this.god=!1,this.bestPassed=!1,this.combo=new Tw,this.gearChain=0,this.pending=[],this.stunted=new Set,this.patternIdx=0,this.lastHitAt=-1/0,this.sinceGear=99,this.nearMissed=new Set,this.breatherIdx=0,this.vEvents=[],this.events=[],this.model=t.model,this.seed=t.seed,this.bestAtStart=t.bestDistance,this.god=!!t.god,this.biomeOffset=t.biomeOffset??0,this.powerUps=t.powerUps??zp(),this.vehicle=new Rw(t.model),this.gen=new Fw(t.seed,t.model,this.biomeOffset,this.powerUps.magnetEvery),this.distance=this.prevDistance=t.startDistance??0,this.leg=Pn(this.distance,this.biomeOffset),this.hour=rh(this.distance,this.biomeOffset),this.distance>0&&(this.gen.head=this.distance+40,this.tier=hr(this.distance)),this.gen.fill(this.distance),this.box=this.makeBox(),this.prevBox={...this.box}}get biome(){return on(this.leg).id}get obstacles(){return this.gen.obstacles}get pickups(){return this.gen.pickups}input(t){this.crashed||(this.vehicle.input(t,this.vEvents),this.flushVehicleEvents())}get slowFactor(){let t=1;return this.sinceHit<O.hitSlowRecover&&(t*=kd(O.hitSlowFactor,this.sinceHit/O.hitSlowRecover)),this.smashT>0&&(t*=kd(O.smashSlowFactor,1-this.smashT/O.smashSlowTime)),t}update(t){if(this.crashed||(this.time+=t,this.sinceHit+=t,this.sinceGear+=t,this.invulnerable=Math.max(0,this.invulnerable-t),this.smashT=Math.max(0,this.smashT-t),this.magnetT>0&&(this.magnetT-=t,this.magnetT<=0&&(this.magnetT=0,this.events.push({type:"magnetEnd"}))),this.speed=lr(this.distance)*this.slowFactor,this.prevDistance=this.distance,this.distance+=this.speed*t,this.vehicle.update(t,this.vEvents),this.flushVehicleEvents(),this.gen.fill(this.distance),this.gen.recycle(this.distance),this.updateObstacles(t),this.prevBox.front=this.box.front,this.prevBox.x=this.box.x,this.prevBox.y=this.box.y,this.prevBox.height=this.box.height,this.writeBox(this.box),this.collide(),this.crashed))return;this.updateStunts(),this.updatePickups(t),this.updateWrench(),this.updateProgress();const e=this.gen.breathers[this.breatherIdx-1];this.combo.update(t,!!e&&this.distance<e.end)}makeBox(){const t={front:0,length:this.vehicle.length,x:0,width:this.vehicle.width,y:0,height:0};return this.writeBox(t),t}writeBox(t){t.front=this.distance,t.x=this.vehicle.x,t.y=this.vehicle.y,t.height=this.vehicle.height}updateObstacles(t){const e=lr(this.distance);for(const i of this.gen.obstacles)if(i.knockT>=0&&(i.knockT+=t),i.prevS=i.s,i.prevX=i.x,i.s=mp(i,this.distance),i.def.kind==="switcher"){const s=Nb(i.sMeet,this.distance,e),o=s.p*s.p*(3-2*s.p);i.x=vi(i.fromLane)+(vi(i.lane)-vi(i.fromLane))*o,i.blinker=s.blinker}}collide(){const t=this.model.cls;for(const e of this.gen.obstacles){if(e.spent||e.knockT>=0||e.s>this.distance+1||e.s+e.def.length<this.distance-this.vehicle.length-1)continue;const i=Cw(this.box,this.prevBox,e,t);switch(i){case"none":break;case"nearMiss":this.nearMissed.has(e.id)||(this.nearMissed.add(e.id),this.events.push({type:"nearMiss"}));break;case"jumpOver":case"duckUnder":this.stunted.has(e.id)||(this.stunted.add(e.id),this.pending.push({o:e,kind:i==="jumpOver"?"jump":"duck"}));break;case"headOn":if(this.god)break;this.crash("headOn");return;case"sideSwipe":if(e.spent=!0,this.vehicle.bounceBack(),this.damage("sideSwipe"),this.crashed)return;break;case"low":if(e.knockT=0,e.knockDir=this.vehicle.x<=e.x?1:-1,this.damage("low"),this.crashed)return;break;case"smash":e.knockT=0,e.knockDir=this.vehicle.x<=e.x?1:-1,this.model.smashNoSlow||(this.smashT=O.smashSlowTime),this.events.push({type:"smash",kind:e.def.kind}),this.stunt("smash");break;case"overhead":if(e.spent=!0,this.damage("overhead"),this.crashed)return;break;case"oil":e.spent=!0,this.vehicle.oilLock=O.oilLockTime,this.events.push({type:"oil"});break}}}damage(t){if(this.invulnerable>0||this.god)return;this.hp-=1,this.invulnerable=O.invulnerableTime,this.sinceHit=0,this.lastHitAt=this.distance,this.pending.length=0,this.events.push({type:"hit",hp:this.hp,kind:t});const e=this.combo.break();e&&this.events.push({type:"comboLost",level:e}),this.hp<=0&&this.crash("hp")}stunt(t){this.events.push({type:"stunt",kind:t}),this.combo.add(O.comboPts[t])>0&&this.events.push({type:"combo",level:this.combo.level})}checkDodge(){const t=this.vehicle,e=vi(t.prevLane);let i=null,s=O.comboCloseTtc;for(const o of this.gen.obstacles){if(o.def.height!=="tall"||o.spent||this.stunted.has(o.id)||Math.abs(o.x-e)>=(t.width+o.def.width)/2)continue;const r=o.s-this.distance;if(r<0)continue;const a=r/Math.max(1,this.speed*pp(o.def));a<=s&&(i=o,s=a)}i&&(this.stunted.add(i.id),this.pending.push({o:i,kind:s<=O.comboRazorTtc?"razor":"close"}))}updateStunts(){const t=this.distance-this.vehicle.length;let e=0;for(const s of this.pending)s.o.spent||s.o.knockT>=0||(s.o.s+s.o.def.length<t?this.stunt(s.kind):this.pending[e++]=s);this.pending.length=e;const i=this.gen.placed;for(;this.patternIdx<i.length&&i[this.patternIdx].end<=this.distance;)this.lastHitAt<i[this.patternIdx].start&&this.stunt("clean"),this.patternIdx++}crash(t){this.crashed=!0,this.crashCause=t,this.events.push({type:"crash",cause:t})}updatePickups(t){const e=this.vehicle,i=this.distance-e.length/2,s=e.y+.6,o=O.pickupRadius+this.model.magnetBonus,r=1-Math.exp(-14*t);for(const a of this.gen.pickups){if(a.taken){a.takenT>=0&&(a.takenT+=t);continue}if(a.prevS=a.s,a.prevX=a.x,a.prevY=a.y,a.kind==="wrench"&&this.hp>=O.maxHp)continue;const c=a.s-i;if(c>12||c<-8)continue;if(this.magnetT>0&&(a.kind==="gear"||a.kind==="golden")){const f=a.x-e.x,d=a.y-s;(a.attracted||f*f+d*d+c*c<this.powerUps.magnetRadius**2)&&(a.attracted=!0,a.s+=(i-a.s)*r,a.x+=(e.x-a.x)*r,a.y+=(s-a.y)*r)}const h=Math.max(0,Math.abs(a.s-i)-e.length/2),l=a.x-e.x,u=a.y-s;h*h+l*l+u*u<=o*o&&this.collect(a)}}collect(t){switch(t.taken=!0,t.takenT=0,t.kind){case"gear":{this.gearChain=this.sinceGear<=.5?this.gearChain+1:0,this.sinceGear=0;const e=this.combo.gears(1);this.gears+=e,this.events.push({type:"gear",n:e,chain:this.gearChain}),this.lineGear(t.line);break}case"golden":{const e=this.combo.gears(10);this.gears+=e,this.events.push({type:"golden",n:e}),this.stunt("golden");break}case"wrench":this.hp=Math.min(O.maxHp,this.hp+1),this.events.push({type:"wrench",hp:this.hp});break;case"magnet":this.magnetT=this.powerUps.magnetTime,this.events.push({type:"magnet"});break}}lineGear(t){const e=t>=0?this.gen.lineLeft.get(t):void 0;if(e!==void 0){if(e>1){this.gen.lineLeft.set(t,e-1);return}this.gen.lineLeft.delete(t),this.stunt("line")}}updateWrench(){let t=!1;for(const e of this.gen.pickups)e.kind!=="wrench"||e.taken||(this.hp>=O.maxHp?(e.taken=!0,e.takenT=-1):e.s>this.distance-2&&(t=!0));!t&&this.hp<O.maxHp&&this.gen.placeWrench(this.distance)}updateProgress(){const t=hr(this.distance);t!==this.tier&&(this.tier=t,this.events.push({type:"tier",tier:t}));const e=Pn(this.distance,this.biomeOffset);e!==this.leg&&(this.leg=e,this.events.push({type:"biome",id:on(e).id}));const i=rh(this.distance,this.biomeOffset);Fd(this.hour,i,EM)&&this.events.push({type:"daytime",id:"nightFalls"}),Fd(this.hour,i,TM)&&this.events.push({type:"daytime",id:"sunrise"}),this.hour=i,!this.bestPassed&&this.bestAtStart>0&&this.distance>this.bestAtStart&&(this.bestPassed=!0,this.events.push({type:"bestPassed"}));const s=this.gen.breathers;for(;this.breatherIdx<s.length&&s[this.breatherIdx].start<=this.distance;)this.breatherIdx++,this.events.push({type:"breather"})}flushVehicleEvents(){for(const t of this.vEvents)this.events.push({type:"vehicle",e:t}),t==="laneChange"&&this.checkDodge();this.vEvents.length=0}}const hu=6,tm="gearRush.save",Od={1:n=>({...n,v:2,riderColors:{}}),2:n=>{const t=n.riderColors&&typeof n.riderColors=="object"?n.riderColors:{};return{...n,v:3,riderColors:Object.fromEntries(Object.entries(t).filter(([e])=>{var i;return((i=ti.find(s=>s.id===e))==null?void 0:i.cls)==="bike"}))}},3:n=>({...n,v:4,biomeVisits:{}}),4:n=>({...n,v:5,owned:[],upgrades:{}}),5:n=>({...n,v:6,finishes:[]})};let yh=!1;function em(){const n={},t={};for(const e of ti)n[e.id]=e.defaultColor,t[e.id]=e.defaultSecond;return{v:hu,bestDistance:0,gearBank:0,selected:{class:"bike",model:"zippy"},colors:n,riderColors:t,settings:{music:!0,sfx:!0,haptics:!0,reducedMotion:!1,lang:"auto"},stats:{runs:0,totalDistance:0},biomeVisits:Object.fromEntries(An.map(e=>[e.id,0])),owned:[...oh],upgrades:Bp(),finishes:[]}}function bh(n){return typeof n.v=="number"&&Number.isInteger(n.v)&&n.v>=1?n.v:1}function Bw(n){const t=em();if(!n||typeof n!="object")return t;let e=n;for(let l=bh(e);l<hu&&Od[l];l=bh(e))e=Od[l](e);const i=e,s=(l,u)=>typeof l=="number"&&Number.isFinite(l)&&l>=0?l:u;t.bestDistance=s(i.bestDistance,0),t.gearBank=s(i.gearBank,0),Array.isArray(i.owned)&&(t.owned=ti.filter(l=>oh.includes(l.id)||i.owned.includes(l.id)).map(l=>l.id));const o=i.selected,r=ti.find(l=>l.id===(o==null?void 0:o.model));if(r){const l=t.owned.includes(r.id)?r.id:oh.find(u=>ti.find(f=>f.id===u).cls===r.cls);t.selected={class:r.cls,model:l}}if(i.upgrades&&typeof i.upgrades=="object"){const l=i.upgrades;for(const u of Xa)t.upgrades[u.id]=Math.min(qa(u),Math.floor(s(l[u.id],0)))}Array.isArray(i.finishes)&&(t.finishes=or.filter(l=>i.finishes.includes(l.finish)).map(l=>l.finish));const a=Sa.map(l=>l.id),c=[...a,...or.filter(l=>t.finishes.includes(l.finish)).map(l=>l.id)],h=(l,u,f)=>{if(!(!l||typeof l!="object"))for(const d of ti){const g=l[d.id];typeof g=="number"&&f.includes(g)&&(u[d.id]=g)}};if(h(i.colors,t.colors,c),h(i.riderColors,t.riderColors,a),i.settings&&typeof i.settings=="object"){const l=i.settings;for(const u of["music","sfx","haptics","reducedMotion"])typeof l[u]=="boolean"&&(t.settings[u]=l[u]);(l.lang==="en"||l.lang==="pl"||l.lang==="auto")&&(t.settings.lang=l.lang)}if(i.stats&&typeof i.stats=="object"){const l=i.stats;t.stats.runs=s(l.runs,0),t.stats.totalDistance=s(l.totalDistance,0)}if(i.biomeVisits&&typeof i.biomeVisits=="object"){const l=i.biomeVisits;for(const u of An)t.biomeVisits[u.id]=Math.floor(s(l[u.id],0))}return t}function zw(){yh=!1;try{const n=localStorage.getItem(tm),t=n?JSON.parse(n):null;return t&&typeof t=="object"&&bh(t)>hu&&(yh=!0),Bw(t)}catch{return em()}}function ll(n){if(!yh)try{localStorage.setItem(tm,JSON.stringify(n))}catch{}}function Hw(n,t){return n.biomeVisits[t]+=1}function Gw(n,t,e){const i=Math.floor(t),s=i>n.bestDistance;return s&&(n.bestDistance=i),n.gearBank+=e,n.stats.runs+=1,n.stats.totalDistance+=i,s}const Sh=19,Bd=2*Math.PI*Sh,Vw=1500,Ww=3600;class Xw{constructor(t,e){this.lastLevel=-1,this.lastFill=-1,this.hpIcons=[],this.signUntil=0,this.signQueue=[],this.lastDist=-1,this.lastGears=-1,this.lastHp=-1,this.toastQueue=[],this.toastUntil=0,this.distNum=document.createTextNode("0"),this.distEl=H("div",{class:"dist"},this.distNum,H("small",{},"m")),this.gearsNum=document.createTextNode("0"),this.gearsEl=H("div",{class:"gears"},me.gear(),this.gearsNum),this.comboNum=document.createTextNode("×1"),this.comboBar=H("i"),this.comboEl=H("div",{class:"combo rail"},H("b",{},this.comboNum),H("div",{class:"cbar"},this.comboBar)),this.popWord=document.createTextNode(""),this.popLevel=document.createTextNode(""),this.popEl=H("div",{class:"combopop"},H("small",{},gt("combo")),H("b",{},this.popLevel),H("span",{},this.popWord)),this.hpEl=H("div",{class:"hp rail"});for(let a=0;a<O.maxHp;a++){const c=me.wrench();this.hpIcons.push(c),this.hpEl.append(c)}const i=H("div",{class:"ring"});i.append(me.magnet());const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 46 46"),s.innerHTML=`<circle cx="23" cy="23" r="${Sh}" fill="rgba(20,28,44,.55)" stroke="rgba(255,255,255,.25)" stroke-width="4"/><circle cx="23" cy="23" r="${Sh}" fill="none" stroke="#5aa9ff" stroke-width="4" stroke-linecap="round" transform="rotate(-90 23 23)" stroke-dasharray="${Bd}" stroke-dashoffset="0"/>`,i.prepend(s),i.querySelector("svg:last-child").setAttribute("style","position:absolute;inset:11px;width:24px;height:24px"),this.ringArc=s.querySelectorAll("circle")[1],this.powerEl=H("div",{class:"power",style:"visibility:hidden"},i);const r=H("button",{class:"btn icon ghost pause","aria-label":gt("paused"),onclick:()=>t()},me.pause());this.toastEl=H("div",{class:"toast"}),this.countEl=H("div",{class:"countdown"}),this.hintEl=H("div",{class:"start-hint hint"},gt(e?"hint":"hintKeys")),this.signName=document.createTextNode(""),this.signPop=document.createTextNode(""),this.signEl=H("div",{class:"sign","aria-live":"polite"},H("small",{},gt("welcome")),H("b",{},this.signName),H("small",{},this.signPop)),this.el=H("div",{class:"screen passthrough hud"},H("div",{class:"top"},H("div",{class:"left"},this.gearsEl),H("div",{},this.distEl,this.powerEl),H("div",{class:"right"},r)),this.comboEl,this.hpEl,this.popEl,this.toastEl,this.signEl,this.countEl,this.hintEl)}reset(){this.lastDist=this.lastGears=this.lastHp=this.lastLevel=this.lastFill=-1,this.comboEl.className="combo rail",this.popEl.className="combopop",this.setCombo(1,0),this.setDistance(0),this.setGears(0,!1),this.setHp(O.maxHp),this.setMagnet(0),this.hintEl.style.opacity="1",this.countEl.textContent="",this.toastQueue.length=0,this.toastUntil=0,this.signQueue.length=0,this.signUntil=0,this.signEl.className="sign"}hideHint(){this.hintEl.style.opacity="0"}setDistance(t){const e=Math.floor(t);e!==this.lastDist&&(this.lastDist=e,this.distNum.data=un(e))}setGears(t,e){t!==this.lastGears&&(this.lastGears=t,this.gearsNum.data=un(t),e&&(this.gearsEl.classList.remove("pop"),this.gearsEl.offsetWidth,this.gearsEl.classList.add("pop")))}setHp(t){if(t===this.lastHp)return;const e=this.lastHp;this.lastHp=t,this.hpEl.classList.toggle("low",t===1),this.hpIcons.forEach((i,s)=>{const o=s>=t;i.classList.toggle("lost",o),i.classList.remove("crack"),e>=0&&(o&&s<e||!o&&s>=e)&&(i.getBoundingClientRect(),i.classList.add("crack"))})}setCombo(t,e){const i=Math.round(e*100);t===this.lastLevel&&i===this.lastFill||(this.lastLevel=t,this.lastFill=i,this.comboNum.data=`×${t}`,this.comboEl.dataset.level=String(t),this.comboEl.classList.toggle("on",t>1||i>0),this.comboBar.style.transform=`scaleY(${i/100})`)}comboUp(t){this.comboEl.classList.remove("up","broke"),this.comboEl.offsetWidth,this.comboEl.classList.add("up"),this.popLevel.data=`×${t}`,this.popWord.data=gt(`combo${Math.min(t,5)}`),this.popEl.className="combopop",this.popEl.offsetWidth,this.popEl.className=`combopop show l${t}`}comboLost(){this.comboEl.classList.remove("up","broke"),this.comboEl.offsetWidth,this.comboEl.classList.add("broke")}setMagnet(t,e=O.magnetDuration){this.powerEl.style.visibility=t>0?"visible":"hidden",t>0&&this.ringArc.setAttribute("stroke-dashoffset",String(Bd*(1-t/e)))}toast(t,e=!1){if(e&&performance.now()<this.toastUntil){this.toastQueue.push(t);return}this.toastUntil=performance.now()+Vw,this.toastEl.textContent=t,this.toastEl.classList.remove("show"),this.toastEl.offsetWidth,this.toastEl.classList.add("show")}sign(t,e,i,s){const o=()=>{this.signUntil=performance.now()+Ww,this.signName.data=e,this.signPop.data=`${gt("population")} ${un(i)}`,this.signEl.className=`sign ${t}${s?" still":""}`,this.signEl.offsetWidth,this.signEl.classList.add("show")};performance.now()<this.signUntil?this.signQueue.push(o):o()}tick(){const t=performance.now();this.toastQueue.length&&t>=this.toastUntil&&this.toast(this.toastQueue.shift()),this.signQueue.length&&t>=this.signUntil&&this.signQueue.shift()()}tierPop(){this.distEl.classList.remove("tierpop"),this.distEl.offsetWidth,this.distEl.classList.add("tierpop")}countdown(t){this.countEl.innerHTML="",t>0&&this.countEl.append(H("span",{},String(t)))}}const qw={1:null,2:"tier2",3:"tier3",4:"tier4",5:"tier5"},zd=O.crashSlowMoTime,Yw=wa(0);function $w(n){if(n===null)return;const t=An.findIndex(i=>i.id===n);if(t>=0)return t;const e=Number(n);return Number.isInteger(e)&&e>=0&&e<An.length?e:void 0}function Kw(n){let t,e,i=null,s=0,o=!1,r=0,a=0,c=-1,h=1,l=!1,u=0,f=0,d=null,g=0,_=!1,p=!1;const m=n.dev||n.params.has("debug"),w=(v={})=>{const M=n.params.get("seed");u=v.seed??(M?Number(M)>>>0:Nf());const B=v.night??n.params.has("night"),U=v.biome??$w(n.params.get("biome"))??(B?0:void 0),F=U!==void 0?xM(U,v.startDistance,B?1:0):0;_=B,p=!!v.startDistance||n.params.has("bot")||F!==0;const q=vo(n.save.selected.model),z=zp(n.save.upgrades);t=new Ow({seed:u,model:q,bestDistance:n.save.bestDistance,god:l,startDistance:v.startDistance,biomeOffset:F,powerUps:z}),n.view.setVehicle(q.id,n.save.colors[q.id],n.save.riderColors[q.id]),n.view.beginRun(t),e=new Xw(I,n.touch),e.reset(),e.el.classList.toggle("still",n.save.settings.reducedMotion),n.ui.replaceChildren(e.el),s=0,o=!1,r=0,a=0,c=-1,f=0,d=null,n.input.enabled=!0,i=n.params.has("bot")?new Id:null,ct.unlock(),ct.resume(),ct.duck(!1),ct.playGameMusic(x()),ct.startEngine(q.engine),v.startDistance&&ct.setTier(t.tier),S(t.biome)};function x(){return`${ih(t.biome).main}:${wa(t.hour,Yw).night>.5?"night":"day"}`}function S(v){const M=ih(v),B=p?n.save.biomeVisits[v]:Hw(n.save,v);p||n.persist(),e.sign(M.main,gt(M.name),B,n.save.settings.reducedMotion)}function I(){o||c>=0||!t||(o=!0,r=0,e.countdown(0),n.input.enabled=!1,ct.suspend(),d=VS({onResume:C,onRestart:()=>{ct.resume(),ct.sfx("tap"),w()},onHome:()=>{ct.resume(),ct.sfx("tap"),ct.stopEngine(),n.go("title")},onSettings:()=>{ct.resume(),ct.sfx("tap"),ct.suspend(),n.openSettings(()=>{d&&(n.ui.append(d),ws(d))})}}),n.ui.append(d),ws(d))}function C(){o&&(ct.resume(),ct.sfx("tap"),d==null||d.remove(),d=null,o=!1,r=1.5,g=0,n.input.enabled=!0)}const T={laneChange:"whoosh",edgeBump:"bump",jump:"jump",land:"land",duck:"duck",drop:"whoosh"},L=v=>{switch(v.type){case"vehicle":{const M=T[v.e];M&&ct.sfx(M),v.e==="land"&&(n.view.dust(),n.view.chase.addTrauma(O.traumaLand)),v.e==="edgeBump"&&n.haptic(10);break}case"hit":ct.sfx("hit"),ct.sfx("skid"),n.view.dust(),a=O.hitStop,n.view.chase.addTrauma(O.traumaHit),n.vignette(),n.haptic(40),e.setHp(v.hp),n.view.setDamage(O.maxHp-v.hp),ct.setEngineDamage(O.maxHp-v.hp);break;case"smash":ct.sfx("smash"),n.view.smashBits(t.vehicle.x,t,v.kind),n.view.chase.addTrauma(O.traumaSmash);break;case"oil":ct.sfx("oil"),n.view.chase.wobble(O.oilLockTime);break;case"nearMiss":ct.sfx("nearMiss"),n.speedLines.burst();break;case"crash":{ct.sfx("crash"),ct.duck(!0),ct.stopEngine(),n.view.debris(),n.view.wreck(),n.view.chase.addTrauma(O.traumaCrash),n.vignette(),n.haptic(120),e.setHp(0),c=0,n.input.enabled=!1;break}case"gear":ct.sfx("gear",v.chain),e.setGears(t.gears,!0),n.view.sparkAtVehicle(Lf[t.combo.level-1],6+2*(t.combo.level-1),1),v.chain>0&&v.chain%5===0&&n.haptic(15);break;case"golden":ct.sfx("golden"),e.setGears(t.gears,!0),n.view.sparkAtVehicle("#fff1a8",24,1.2),n.haptic(15);break;case"stunt":ct.sfx("stunt",t.combo.level),v.kind==="razor"&&ct.sfx("razor");break;case"combo":ct.sfx("comboUp",v.level),e.comboUp(v.level),n.haptic(20),n.view.sparkAtVehicle(Lf[v.level-1],14+4*v.level,1.2);break;case"comboLost":ct.sfx("comboLost"),e.comboLost();break;case"wrench":ct.sfx("wrench"),e.setHp(v.hp),n.view.setDamage(O.maxHp-v.hp),ct.setEngineDamage(O.maxHp-v.hp),e.toast(gt("repaired")),n.view.sparkAtVehicle("#3ddc84",18,1);break;case"magnet":ct.sfx("magnet"),e.toast(gt("magnet")),n.view.sparkAtVehicle("#5aa9ff",18,1);break;case"magnetEnd":ct.sfx("magnetEnd");break;case"tier":{const M=qw[v.tier];M&&e.toast(gt(M)),ct.sfx("toast"),ct.setTier(v.tier),e.tierPop();break}case"biome":S(v.id);break;case"daytime":e.toast(gt(v.id),!0);break;case"bestPassed":ct.sfx("newBest"),e.toast(gt("bestPassed")),n.view.confetti(),n.haptic(30);break}},V=v=>{if(!m||!t)return;const M=v.key.toLowerCase();if(M>="1"&&M<="5"){const B=Number(M);w({startDistance:O.tierBounds[B-1]+(B>1?5:0),seed:u})}else M==="g"?(l=!l,t.god=l,e.toast(l?"GOD ON":"GOD OFF")):M==="+"||M==="="?(h=Math.min(4,h*1.5),e.toast(`x${h.toFixed(2)}`)):M==="-"?(h=Math.max(.1,h/1.5),e.toast(`x${h.toFixed(2)}`)):M==="r"?w({seed:Nf()}):M==="b"?w({startDistance:t.distance>1?t.distance:void 0,seed:u,biome:(Rf(t.biome)+1)%An.length,night:_}):M==="n"?w({startDistance:t.distance>1?t.distance:void 0,seed:u,biome:Rf(t.biome),night:!_}):M==="o"&&(i=i?null:new Id,p=!0,e.toast(i?"BOT ON":"BOT OFF"))};return{enter(v){window.addEventListener("keydown",V),w(v??{})},exit(){window.removeEventListener("keydown",V),n.input.enabled=!1,ct.stopEngine(),ct.resume()},pause:I,key(){o?C():I()},hidden(){I()},action(v){o||r>0||c>=0||(t.input(v),f<99&&(f=99,e.hideHint()))},frame(v){let M=v;if(o)M=0;else if(r>0){r-=v;const q=Math.ceil(r/.5);q!==g&&(g=q,e.countdown(Math.max(0,q)),q>0&&ct.sfx("tap")),M=0}else if(c>=0){if(c+=v,M=c<zd?v*O.crashTimeScale:v,c>=zd+.35){const q=!p&&Gw(n.save,t.distance,t.gears);p||n.persist(),n.go("results",{sim:t,newBest:q});return}}else if(a>0)a-=v,M=0;else{s+=Math.min(v,O.maxFrameDt)*h,M=v*h;const q=O.fixedStep;for(;s>=q;){if(s-=q,i){const z=i.decide(t,q);z&&t.input(z)}t.update(q);for(const z of t.events)L(z);if(t.events.length=0,t.crashed||a>0){s=0;break}}f+=v,f>4&&f<99&&(f=99,e.hideHint())}e.tick(),t.crashed||ct.setStyle(x()),e.setDistance(t.distance),e.setGears(t.gears,!1),e.setMagnet(t.magnetT,t.powerUps.magnetTime),e.setCombo(t.combo.level,t.combo.progress),n.view.comboTrail(M,t.combo.level===Go&&!t.crashed&&!n.save.settings.reducedMotion);const B=(t.speed-O.startSpeed)/(O.maxSpeed-O.startSpeed);o||ct.setEngine(Math.max(0,B),t.vehicle.airborne);const U=t.speed>=O.speedLinesFrom&&!t.crashed?(t.speed-O.speedLinesFrom)/(O.maxSpeed-O.speedLinesFrom)*.8+.2:0;n.speedLines.update(M,U,!n.save.settings.reducedMotion);const F=t.crashed?1:s/O.fixedStep;n.view.renderRun(n.renderer,t,M,t.bestAtStart,F)}}}function jw(n){let t;return{key(e){e==="escape"&&(ct.sfx("tap"),n.go("title"))},enter(e){t=e,ct.duck(!1),ct.playMenuMusic(),t.newBest&&window.setTimeout(()=>ct.sfx("newBest"),250),n.ui.replaceChildren(WS({distance:t.sim.distance,gears:t.sim.gears,comboBonus:t.sim.combo.bonus,comboBest:t.sim.combo.best,bank:n.save.gearBank,best:n.save.bestDistance,newBest:t.newBest,onRetry:()=>{ct.sfx("tap"),n.go("play")},onGarage:()=>{ct.sfx("tap"),n.go("garage")},onHome:()=>{ct.sfx("tap"),n.go("title")}}))},exit(){},frame(e){n.view.renderRun(n.renderer,t.sim,e,t.sim.bestAtStart),n.speedLines.update(e,0,!1)}}}function Zw(n){let t=0;const e=()=>{const i=FS({best:n.save.bestDistance,bank:n.save.gearBank,touch:n.touch,onPlay:()=>{ct.unlock(),ct.sfx("tap"),n.go("play")},onGarage:()=>{ct.unlock(),ct.sfx("tap"),n.go("garage")},onUpgrades:()=>{ct.unlock(),ct.sfx("tap"),n.openUpgrades(e)},onSettings:()=>{ct.unlock(),ct.sfx("tap"),n.openSettings(e)}});n.ui.replaceChildren(i),ws(i)};return{enter(){const i=n.save.selected.model;n.view.setVehicle(i,n.save.colors[i],n.save.riderColors[i]),e(),ct.playMenuMusic()},exit(){},frame(i){t+=i*8,n.view.renderIdle(n.renderer,i,t),n.speedLines.update(i,0,!1)}}}const Jw="modulepreload",Qw=function(n,t){return new URL(n,t).href},Hd={},t3=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(h=>{if(h=Qw(h,i),h in Hd)return;Hd[h]=!0;const l=h.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(!!i)for(let g=r.length-1;g>=0;g--){const _=r[g];if(_.href===h&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Jw,l||(d.as="script"),d.crossOrigin="",d.href=h,c&&d.setAttribute("nonce",c),document.head.appendChild(d),l)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};function e3(n={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:r}=n;let a,c,h;const l=async(f=!0)=>{await c,h==null||h()};async function u(){if("serviceWorker"in navigator){if(a=await t3(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:f}},[],import.meta.url).then(({Workbox:f})=>new f("./sw.js",{scope:"./",type:"classic"})).catch(f=>{r==null||r(f)}),!a)return;h=()=>{a==null||a.messageSkipWaiting()};{let f=!1;const d=()=>{f=!0,a==null||a.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()}),e==null||e()};a.addEventListener("installed",g=>{typeof g.isUpdate>"u"?typeof g.isExternal<"u"&&g.isExternal?d():!f&&(i==null||i()):g.isUpdate||i==null||i()}),a.addEventListener("waiting",d)}a.register({immediate:t}).then(f=>{o?o("./sw.js",f):s==null||s(f)}).catch(f=>{r==null||r(f)})}}return c=u(),l}const n3=60*60*1e3;let ta=null,Fo=null,Oo=()=>{};const Fi={updateReady:!1,init(n){Oo=n,window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),Fo=t,Oo()}),window.addEventListener("appinstalled",()=>{Fo=null,Oo()}),"serviceWorker"in navigator&&(ta=e3({onNeedRefresh(){Fi.updateReady=!0,Oo()},onRegisteredSW(t,e){e&&(setInterval(()=>void e.update(),n3),document.addEventListener("visibilitychange",()=>{document.hidden||e.update()}))}}))},applyUpdate(){ta==null||ta(!0)},get canInstall(){return Fo!==null},async install(){const n=Fo;n&&(Fo=null,await n.prompt(),await n.userChoice,Oo())},get iosHint(){return(/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Fi.standalone},get standalone(){return matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches||navigator.standalone===!0}};class i3{constructor(t,e,i){this.onAction=e,this.onMenuKey=i,this.enabled=!1,this.startX=0,this.startY=0,this.startT=0,this.tracking=!1,this.pointerId=-1,this.down=s=>{!this.enabled||this.tracking||(this.tracking=!0,this.pointerId=s.pointerId,this.startX=s.clientX,this.startY=s.clientY,this.startT=performance.now())},this.move=s=>{if(!this.tracking||s.pointerId!==this.pointerId)return;const o=s.clientX-this.startX,r=s.clientY-this.startY;if(performance.now()-this.startT>O.swipeMaxMs){this.startX=s.clientX,this.startY=s.clientY,this.startT=performance.now();return}if(Math.max(Math.abs(o),Math.abs(r))<O.swipeMinPx)return;const a=Math.abs(o)>Math.abs(r)?o<0?"left":"right":r<0?"up":"down";this.onAction(a),this.startX=s.clientX,this.startY=s.clientY,this.startT=performance.now()},this.up=s=>{s.pointerId===this.pointerId&&(this.tracking=!1)},this.key=s=>{if(s.repeat)return;const o=s.key.toLowerCase();if(o==="escape"||o==="p"){this.onMenuKey(o==="p"?"pause":"escape");return}if(!this.enabled)return;const a={arrowleft:"left",a:"left",arrowright:"right",d:"right",arrowup:"up",w:"up"," ":"up",arrowdown:"down",s:"down"}[o];a&&(s.preventDefault(),this.onAction(a))},t.addEventListener("pointerdown",this.down,{passive:!0}),t.addEventListener("pointermove",this.move,{passive:!0}),t.addEventListener("pointerup",this.up,{passive:!0}),t.addEventListener("pointercancel",this.up,{passive:!0}),window.addEventListener("keydown",this.key)}}const s3=[2,1.5,1],o3=.1,r3=2,a3=1/50,Gd=2,c3=6,l3=60,h3=10,u3=3;class f3{constructor(t){this.idx=0,this.refresh=0,this.windowMin=1/0,this.prevWindowMin=1/0,this.windowT=0,this.slow=0,this.fast=0,this.upWait=c3,this.sinceUp=1/0,this.badUps=0,this.ceiling=0,this.steps=[t,...s3.filter(e=>e<t)]}get ratio(){return this.steps[this.idx]}get struggling(){return this.idx===this.steps.length-1&&this.slow>=Gd}update(t){if(t<=0||t>=o3||(this.sinceUp+=t,this.windowMin=Math.min(this.windowMin,t),this.windowT+=t,this.windowT>=r3&&(this.refresh=Math.min(this.windowMin,this.prevWindowMin),this.prevWindowMin=this.windowMin,this.windowMin=1/0,this.windowT=0),!this.refresh))return null;const e=Math.max(this.refresh*1.5,a3);return t>e?(this.slow+=t,this.fast=0):(this.slow=Math.max(0,this.slow-t*.5),this.fast=t<=this.refresh*1.25?this.fast+t:0),this.slow>=Gd&&this.idx<this.steps.length-1?(this.idx++,this.sinceUp<h3&&(this.upWait=Math.min(l3,this.upWait*2),++this.badUps>=u3&&(this.ceiling=this.idx)),this.slow=this.fast=0,this.ratio):this.fast>=this.upWait&&this.idx>this.ceiling?(this.idx--,this.sinceUp=0,this.slow=this.fast=0,this.ratio):null}}const Es=document.getElementById("app"),nm=document.getElementById("gl");nm.addEventListener("webglcontextrestored",fM);const d3=document.getElementById("fx"),ur=document.getElementById("ui"),Vd=document.getElementById("vignette"),Ts=new URLSearchParams(location.search),ps=new Tx({canvas:nm,antialias:!0,powerPreference:"high-performance"});ps.outputColorSpace=Ve;let Zo=Math.min(window.devicePixelRatio||1,2);ps.setPixelRatio(Zo);const Je=zw();k0(Je.settings.lang);const xi=new DS;Ts.has("time")&&(xi.titleHour=kp(0,Ts.get("time")));Ts.has("titleBiome")&&(xi.titleBiome=Number(Ts.get("titleBiome"))%9);Ts.get("headlight")==="pool"&&(xi.headlightMode="pool");const im=new US,p3=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;let Me=null;const m3=n=>Kw(n),di={renderer:ps,view:xi,garage:im,ui:ur,save:Je,input:null,speedLines:new vM(d3),touch:p3,params:Ts,dev:!1,persist:()=>ll(Je),go:(n,t)=>sm(n,t),openSettings(n){const t={version:"0.4.0 (4406d77)",canInstall:Fi.canInstall,iosHint:Fi.iosHint,install:()=>{ct.sfx("tap"),Fi.install().then(()=>{var e;return(e=ur.querySelector(".app-row"))==null?void 0:e.remove()})}};Wd(e=>XS(Je.settings,t,{onChange:()=>{di.applySettings(),ll(Je)},onClose:e,onTap:()=>ct.sfx("tap")}),n)},openUpgrades(n){Wd(t=>GS({get bank(){return Je.gearBank},levels:Je.upgrades},{onBuy:e=>vw(Je,e)?(ll(Je),ct.sfx("buy"),di.haptic(30),!0):!1,onClose:t,onTap:()=>ct.sfx("tap")}),n)},haptic(n){var t;if(Je.settings.haptics)try{(t=navigator.vibrate)==null||t.call(navigator,n)}catch{}},vignette(){Je.settings.reducedMotion||(Vd.classList.add("on"),requestAnimationFrame(()=>requestAnimationFrame(()=>Vd.classList.remove("on"))))},applySettings(){k0(Je.settings.lang),ct.setEnabled(Je.settings.music,Je.settings.sfx),xi.reducedMotion=Je.settings.reducedMotion,xi.chase.reducedMotion=Je.settings.reducedMotion}},uu={boot:qS(di),title:Zw(di),garage:xw(di),play:m3(di),results:jw(di)};di.input=new i3(Es,n=>uu.play.action(n),n=>{var t;return(t=Me==null?void 0:Me.key)==null?void 0:t.call(Me,n)});window.addEventListener("keydown",n=>{if(n.repeat||n.key!=="Enter"&&n.key!==" ")return;const t=document.activeElement;if(t&&t!==document.body&&t.closest("button, input, select, textarea"))return;const e=ur.querySelectorAll("[data-primary]:not([disabled])"),i=e[e.length-1];i&&(n.preventDefault(),i.click())});function Wd(n,t){const e=o=>{(o.key==="p"||o.key==="P")&&o.stopImmediatePropagation(),o.key==="Escape"&&(o.stopImmediatePropagation(),i())},i=()=>{window.removeEventListener("keydown",e,!0),ct.sfx("tap"),s.remove(),t==null||t()},s=n(i);window.addEventListener("keydown",e,!0),ur.append(s),ws(s)}function sm(n,t){Me==null||Me.exit(),Me=uu[n],Me.enter(t),om()}function om(){const n=ur.querySelector(".update-slot");n&&n.replaceChildren(Fi.updateReady?H("button",{class:"btn update-chip",onclick:()=>{ct.sfx("tap"),Fi.applyUpdate()}},gt("updateReady")):"")}Fi.init(om);function Mo(){var t;const n=((t=window.visualViewport)==null?void 0:t.height)??window.innerHeight;n>0&&Math.abs(n-Es.clientHeight)>.5&&document.documentElement.style.setProperty("--app-h",`${n}px`)}for(const n of["resize","orientationchange","pageshow"])window.addEventListener(n,Mo);var Yd;(Yd=window.visualViewport)==null||Yd.addEventListener("resize",Mo);document.addEventListener("fullscreenchange",Mo);document.addEventListener("visibilitychange",Mo);Mo();function fu(){const n=Es.clientWidth,t=Es.clientHeight;ps.setSize(n,t,!1),xi.resize(n/t),im.resize(n/t)}new ResizeObserver(fu).observe(Es);fu();document.addEventListener("visibilitychange",()=>{var n;document.hidden?((n=Me==null?void 0:Me.hidden)==null||n.call(Me),ct.suspend()):Me!==uu.play&&ct.resume()});window.addEventListener("blur",()=>{var n;return(n=Me==null?void 0:Me.hidden)==null?void 0:n.call(Me)});let Jo=null;Ts.has("stats")&&(Jo=document.createElement("div"),Jo.style.cssText="position:absolute;left:4px;bottom:4px;font:12px monospace;background:rgba(0,0,0,.6);padding:4px 6px;border-radius:4px;z-index:5;pointer-events:none;white-space:pre",Es.append(Jo));let Xd=performance.now();const qd=new f3(Zo);let hl=0,ea=0,ul=0;ps.setAnimationLoop(n=>{const t=Math.max(0,(n-Xd)/1e3),e=Math.min(.1,t);Xd=n,ul+=e,ul>=.5&&(ul=0,Mo()),Me==null||Me.frame(e);const i=qd.update(t);if(i!==null&&(Zo=i,ps.setPixelRatio(Zo),fu()),xi.headlightMode==="spot"&&qd.struggling&&(xi.headlightMode="pool"),Jo&&(hl++,ea+=e,ea>=.5)){const s=ps.info.render;Jo.textContent=`${Math.round(hl/ea)} fps  dpr ${Zo}
${s.calls} calls  ${Math.round(s.triangles/1e3)}k tris
win ${window.innerHeight} app ${Es.clientHeight} scr ${screen.height}`,hl=0,ea=0}});di.applySettings();window.addEventListener("pointerdown",()=>ct.unlock(),{once:!0});sm("boot");
