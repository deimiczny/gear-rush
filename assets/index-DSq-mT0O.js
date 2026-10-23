(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uh="169",Np=0,au=1,Fp=2,Dd=1,Op=2,li=3,Oi=0,rn=1,Kn=2,Di=0,Js=1,qo=2,cu=3,lu=4,kp=5,ns=100,Bp=101,zp=102,Hp=103,Gp=104,Vp=200,Wp=201,Xp=202,qp=203,tl=204,el=205,Yp=206,$p=207,Kp=208,jp=209,Zp=210,Jp=211,Qp=212,tm=213,em=214,nl=0,il=1,sl=2,eo=3,ol=4,rl=5,al=6,cl=7,ba=0,nm=1,im=2,Ui=0,sm=1,om=2,rm=3,am=4,cm=5,lm=6,hm=7,Ud=300,no=301,io=302,ll=303,hl=304,wa=306,ki=1e3,os=1001,ul=1002,on=1003,um=1004,fr=1005,_n=1006,Va=1007,hi=1008,gi=1009,Nd=1010,Fd=1011,Yo=1012,fh=1013,ds=1014,jn=1015,sr=1016,dh=1017,ph=1018,so=1020,Od=35902,kd=1021,Bd=1022,xn=1023,zd=1024,Hd=1025,Qs=1026,oo=1027,Ea=1028,mh=1029,Gd=1030,gh=1031,vh=1033,$r=33776,Kr=33777,jr=33778,Zr=33779,fl=35840,dl=35841,pl=35842,ml=35843,gl=36196,vl=37492,_l=37496,xl=37808,Ml=37809,yl=37810,Sl=37811,bl=37812,wl=37813,El=37814,Tl=37815,Al=37816,Rl=37817,Cl=37818,Pl=37819,Ll=37820,Il=37821,Jr=36492,Dl=36494,Ul=36495,Vd=36283,Nl=36284,Fl=36285,Ol=36286,fm=3200,dm=3201,_h=0,pm=1,Pi="",Ge="srgb",Hi="srgb-linear",xh="display-p3",Ta="display-p3-linear",la="linear",_e="srgb",ha="rec709",ua="p3",As=7680,hu=519,mm=512,gm=513,vm=514,Wd=515,_m=516,xm=517,Mm=518,ym=519,uu=35044,fu="300 es",ui=2e3,fa=2001;class ho{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const Fo=Math.PI/180,ro=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Ve(n,t,e){return Math.max(t,Math.min(e,n))}function Mh(n,t){return(n%t+t)%t}function Sm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function bm(n,t,e){return n!==t?(e-n)/(t-n):0}function Oo(n,t,e){return(1-e)*n+e*t}function wm(n,t,e,i){return Oo(n,t,1-Math.exp(-e*i))}function Em(n,t=1){return t-Math.abs(Mh(n,t*2)-t)}function Tm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Am(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Rm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Cm(n,t){return n+Math.random()*(t-n)}function Pm(n){return n*(.5-Math.random())}function Lm(n){n!==void 0&&(du=n);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Im(n){return n*Fo}function Dm(n){return n*ro}function Um(n){return(n&n-1)===0&&n!==0}function Nm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Om(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+i)/2),h=r((t+i)/2),u=o((t-i)/2),f=r((t-i)/2),d=o((i-t)/2),g=r((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xd={DEG2RAD:Fo,RAD2DEG:ro,generateUUID:bs,clamp:Ve,euclideanModulo:Mh,mapLinear:Sm,inverseLerp:bm,lerp:Oo,damp:wm,pingpong:Em,smoothstep:Tm,smootherstep:Am,randInt:Rm,randFloat:Cm,randFloatSpread:Pm,seededRandom:Lm,degToRad:Im,radToDeg:Dm,isPowerOfTwo:Um,ceilPowerOfTwo:Nm,floorPowerOfTwo:Fm,setQuaternionFromProperEuler:Om,normalize:tn,denormalize:Xs};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,o,r,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l)}set(t,e,i,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=i,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],p=s[3],m=s[6],w=s[1],x=s[4],b=s[7],I=s[2],C=s[5],T=s[8];return o[0]=r*_+a*w+c*I,o[3]=r*p+a*x+c*C,o[6]=r*m+a*b+c*T,o[1]=l*_+h*w+u*I,o[4]=l*p+h*x+u*C,o[7]=l*m+h*b+u*T,o[2]=f*_+d*w+g*I,o[5]=f*p+d*x+g*C,o[8]=f*m+d*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-i*o*h+i*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,d=l*o-r*c,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*r)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=d*_,t[7]=(i*c-l*e)*_,t[8]=(r*e-i*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wa.makeScale(t,e)),this}rotate(t){return this.premultiply(Wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new Kt;function qd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function km(){const n=da("canvas");return n.style.display="block",n}const pu={};function Qr(n){n in pu||(pu[n]=!0,console.warn(n))}function Bm(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function zm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const mu=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gu=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),go={[Hi]:{transfer:la,primaries:ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ge]:{transfer:_e,primaries:ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ta]:{transfer:la,primaries:ua,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(gu),fromReference:n=>n.applyMatrix3(mu)},[xh]:{transfer:_e,primaries:ua,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(gu),fromReference:n=>n.applyMatrix3(mu).convertLinearToSRGB()}},Gm=new Set([Hi,Ta]),he={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Gm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=go[t].toReference,s=go[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return go[n].primaries},getTransfer:function(n){return n===Pi?la:go[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(go[t].luminanceCoefficients)}};function to(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rs;class Vm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=da("canvas")),Rs.width=t.width,Rs.height=t.height;const i=Rs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=da("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=to(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(to(e[i]/255)*255):e[i]=to(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wm=0;class Yd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(qa(s[r].image)):o.push(qa(s[r]))}else o=qa(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xm=0;class Qe extends ho{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=os,s=os,o=_n,r=hi,a=xn,c=gi,l=Qe.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=bs(),this.name="",this.source=new Yd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Ud;Qe.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,b=(d+1)/2,I=(m+1)/2,C=(h+f)/4,T=(u+_)/4,L=(g+p)/4;return x>b&&x>I?x<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(x),s=C/i,o=T/i):b>I?b<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),i=C/s,o=L/s):I<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),i=T/o,s=L/o),this.set(i,s,o,e),this}let w=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qm extends ho{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends qm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class $d extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ym extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=o[r+0],d=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let p=1-a;const m=c*f+l*d+h*g+u*_,w=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const I=Math.sqrt(x),C=Math.atan2(I,m*w);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}const b=a*w;if(c=c*p+f*b,l=l*p+d*b,h=h*p+g*b,u=u*p+_*b,p===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=o[r],f=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(o/2),f=c(i/2),d=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(o-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(r-s)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-i*l,this._z=o*h+r*l+i*c-s*a,this._w=r*h-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*i),h=2*(a*e-o*s),u=2*(o*i-r*e);return this.x=e+c*l+r*u-a*h,this.y=i+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new P,vu=new ti;class Dn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Nn):Nn.fromBufferAttribute(o,r),Nn.applyMatrix4(t.matrixWorld),this.expandByPoint(Nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dr.copy(i.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vo),pr.subVectors(this.max,vo),Cs.subVectors(t.a,vo),Ps.subVectors(t.b,vo),Ls.subVectors(t.c,vo),Mi.subVectors(Ps,Cs),yi.subVectors(Ls,Ps),Wi.subVectors(Cs,Ls);let e=[0,-Mi.z,Mi.y,0,-yi.z,yi.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,yi.z,0,-yi.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-yi.y,yi.x,0,-Wi.y,Wi.x,0];return!$a(e,Cs,Ps,Ls,pr)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Cs,Ps,Ls,pr))?!1:(mr.crossVectors(Mi,yi),e=[mr.x,mr.y,mr.z],$a(e,Cs,Ps,Ls,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,dr=new Dn,Cs=new P,Ps=new P,Ls=new P,Mi=new P,yi=new P,Wi=new P,vo=new P,pr=new P,mr=new P,Xi=new P;function $a(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Xi.fromArray(n,o);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),h=i.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $m=new Dn,_o=new P,Ka=new P;class uo{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$m.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_o.subVectors(t,this.center);const e=_o.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_o,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_o.copy(t.center).add(Ka)),this.expandByPoint(_o.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new P,ja=new P,gr=new P,Si=new P,Za=new P,vr=new P,Ja=new P;class Kd{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ja.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(ja);const o=t.distanceTo(e)*.5,r=-this.direction.dot(gr),a=Si.dot(this.direction),c=-Si.dot(gr),l=Si.lengthSq(),h=Math.abs(1-r*r);let u,f,d,g;if(h>0)if(u=r*c-a,f=r*a-c,g=o*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ja).addScaledVector(gr,f),d}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,s,o){Za.subVectors(e,t),vr.subVectors(i,t),Ja.crossVectors(Za,vr);let r=this.direction.dot(Ja),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Si.subVectors(this.origin,t);const c=a*this.direction.dot(vr.crossVectors(Si,vr));if(c<0)return null;const l=a*this.direction.dot(Za.cross(Si));if(l<0||c+l>r)return null;const h=-a*Si.dot(Ja);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,s,o,r,a,c,l,h,u,f,d,g,_,p){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,c,l,h,u,f,d,g,_,p)}set(t,e,i,s,o,r,a,c,l,h,u,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),o=1/Is.setFromMatrixColumn(t,1).length(),r=1/Is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-r*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=_-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,d=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,d=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=r*c,d=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=r*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Km,t,jm)}lookAt(t,e,i){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),bi.crossVectors(i,mn),bi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),bi.crossVectors(i,mn)),bi.normalize(),_r.crossVectors(mn,bi),s[0]=bi.x,s[4]=_r.x,s[8]=mn.x,s[1]=bi.y,s[5]=_r.y,s[9]=mn.y,s[2]=bi.z,s[6]=_r.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],p=i[10],m=i[14],w=i[3],x=i[7],b=i[11],I=i[15],C=s[0],T=s[4],L=s[8],z=s[12],v=s[1],M=s[5],U=s[9],k=s[13],O=s[2],X=s[6],H=s[10],nt=s[14],q=s[3],mt=s[7],gt=s[11],Mt=s[15];return o[0]=r*C+a*v+c*O+l*q,o[4]=r*T+a*M+c*X+l*mt,o[8]=r*L+a*U+c*H+l*gt,o[12]=r*z+a*k+c*nt+l*Mt,o[1]=h*C+u*v+f*O+d*q,o[5]=h*T+u*M+f*X+d*mt,o[9]=h*L+u*U+f*H+d*gt,o[13]=h*z+u*k+f*nt+d*Mt,o[2]=g*C+_*v+p*O+m*q,o[6]=g*T+_*M+p*X+m*mt,o[10]=g*L+_*U+p*H+m*gt,o[14]=g*z+_*k+p*nt+m*Mt,o[3]=w*C+x*v+b*O+I*q,o[7]=w*T+x*M+b*X+I*mt,o[11]=w*L+x*U+b*H+I*gt,o[15]=w*z+x*k+b*nt+I*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+o*c*u-s*l*u-o*a*f+i*l*f+s*a*d-i*c*d)+_*(+e*c*d-e*l*f+o*r*f-s*r*d+s*l*h-o*c*h)+p*(+e*l*u-e*a*d-o*r*u+i*r*d+o*a*h-i*l*h)+m*(-s*a*h-e*c*u+e*a*f+s*r*u-i*r*f+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],w=u*p*l-_*f*l+_*c*d-a*p*d-u*c*m+a*f*m,x=g*f*l-h*p*l-g*c*d+r*p*d+h*c*m-r*f*m,b=h*_*l-g*u*l+g*a*d-r*_*d-h*a*m+r*u*m,I=g*u*c-h*_*c-g*a*f+r*_*f+h*a*p-r*u*p,C=e*w+i*x+s*b+o*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=w*T,t[1]=(_*f*o-u*p*o-_*s*d+i*p*d+u*s*m-i*f*m)*T,t[2]=(a*p*o-_*c*o+_*s*l-i*p*l-a*s*m+i*c*m)*T,t[3]=(u*c*o-a*f*o-u*s*l+i*f*l+a*s*d-i*c*d)*T,t[4]=x*T,t[5]=(h*p*o-g*f*o+g*s*d-e*p*d-h*s*m+e*f*m)*T,t[6]=(g*c*o-r*p*o-g*s*l+e*p*l+r*s*m-e*c*m)*T,t[7]=(r*f*o-h*c*o+h*s*l-e*f*l-r*s*d+e*c*d)*T,t[8]=b*T,t[9]=(g*u*o-h*_*o-g*i*d+e*_*d+h*i*m-e*u*m)*T,t[10]=(r*_*o-g*a*o+g*i*l-e*_*l-r*i*m+e*a*m)*T,t[11]=(h*a*o-r*u*o-h*i*l+e*u*l+r*i*d-e*a*d)*T,t[12]=I*T,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*p+e*u*p)*T,t[14]=(g*a*s-r*_*s-g*i*c+e*_*c+r*i*p-e*a*p)*T,t[15]=(r*u*s-h*a*s+h*i*c-e*u*c-r*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,d=o*h,g=o*u,_=r*h,p=r*u,m=a*u,w=c*l,x=c*h,b=c*u,I=i.x,C=i.y,T=i.z;return s[0]=(1-(_+m))*I,s[1]=(d+b)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(d-b)*C,s[5]=(1-(f+m))*C,s[6]=(p+w)*C,s[7]=0,s[8]=(g+x)*T,s[9]=(p-w)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Is.set(s[0],s[1],s[2]).length();const r=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Fn.copy(this);const l=1/o,h=1/r,u=1/a;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=ui){const c=this.elements,l=2*o/(e-t),h=2*o/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===ui)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===fa)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=ui){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(r-o),f=(e+t)*l,d=(i+s)*h;let g,_;if(a===ui)g=(r+o)*u,_=-2*u;else if(a===fa)g=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Is=new P,Fn=new ae,Km=new P(0,0,0),jm=new P(1,1,1),bi=new P,_r=new P,mn=new P,_u=new ae,xu=new ti;class bn{constructor(t=0,e=0,i=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zm=0;const Mu=new P,Ds=new ti,oi=new ae,xr=new P,xo=new P,Jm=new P,Qm=new ti,yu=new P(1,0,0),Su=new P(0,1,0),bu=new P(0,0,1),wu={type:"added"},tg={type:"removed"},Us={type:"childadded",child:null},Qa={type:"childremoved",child:null};class we extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new P,e=new bn,i=new ti,s=new P(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xr.copy(t):xr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(xo,xr,this.up):oi.lookAt(xr,xo,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(oi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),Us.child=t,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tg),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,t,Jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Qm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}we.DEFAULT_UP=new P(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new P,ri=new P,tc=new P,ai=new P,Ns=new P,Fs=new P,Eu=new P,ec=new P,nc=new P,ic=new P,sc=new Ae,oc=new Ae,rc=new Ae;class Vn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),On.subVectors(t,e),s.cross(On);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){On.subVectors(s,e),ri.subVectors(i,e),tc.subVectors(t,e);const r=On.dot(On),a=On.dot(ri),c=On.dot(tc),l=ri.dot(ri),h=ri.dot(tc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(r*h-a*c)*f;return o.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,o,r,a,c){return this.getBarycoord(t,e,i,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ai.x),c.addScaledVector(r,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,i,s,o,r){return sc.setScalar(0),oc.setScalar(0),rc.setScalar(0),sc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,i),rc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(sc,o.x),r.addScaledVector(oc,o.y),r.addScaledVector(rc,o.z),r}static isFrontFacing(t,e,i,s){return On.subVectors(i,e),ri.subVectors(t,e),On.cross(ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),On.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return Vn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Ns.subVectors(s,i),Fs.subVectors(o,i),ec.subVectors(t,i);const c=Ns.dot(ec),l=Fs.dot(ec);if(c<=0&&l<=0)return e.copy(i);nc.subVectors(t,s);const h=Ns.dot(nc),u=Fs.dot(nc);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(i).addScaledVector(Ns,r);ic.subVectors(t,o);const d=Ns.dot(ic),g=Fs.dot(ic);if(g>=0&&d<=g)return e.copy(o);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Fs,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Eu.subVectors(o,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Eu,a);const m=1/(p+_+f);return r=_*m,a=f*m,e.copy(i).addScaledVector(Ns,r).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function ac(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=i,he.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=he.workingColorSpace){if(t=Mh(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=ac(r,o,t+1/3),this.g=ac(r,o,t),this.b=ac(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const i=Zd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}copyLinearToSRGB(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return he.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Ve(Ze.r*255,0,255))*65536+Math.round(Ve(Ze.g*255,0,255))*256+Math.round(Ve(Ze.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Ze.copy(this),e);const i=Ze.r,s=Ze.g,o=Ze.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case i:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-i)/u+2;break;case o:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ge){he.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,i=Ze.g,s=Ze.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(Mr);const i=Oo(wi.h,Mr.h,e),s=Oo(wi.s,Mr.s,e),o=Oo(wi.l,Mr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new pt;pt.NAMES=Zd;let eg=0;class ws extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Js,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(i.stencilFail=this.stencilFail),this.stencilZFail!==As&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fn extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new P,yr=new it;class Re{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),s=tn(s,this.array),o=tn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uu&&(t.usage=this.usage),t}}class Jd extends Re{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Qd extends Re{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class me extends Re{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ng=0;const Tn=new ae,cc=new we,Os=new P,gn=new Dn,Mo=new Dn,ze=new P;class De extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qd(t)?Qd:Jd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Kt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,i){return Tn.makeTranslation(t,e,i),this.applyMatrix4(Tn),this}scale(t,e,i){return Tn.makeScale(t,e,i),this.applyMatrix4(Tn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];gn.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(gn.min,Mo.min),gn.expandByPoint(ze),ze.addVectors(gn.max,Mo.max),gn.expandByPoint(ze)):(gn.expandByPoint(Mo.min),gn.expandByPoint(Mo.max))}gn.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)ze.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(Os.fromBufferAttribute(t,l),ze.add(Os)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new P,c[L]=new P;const l=new P,h=new P,u=new P,f=new it,d=new it,g=new it,_=new P,p=new P;function m(L,z,v){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,z),u.fromBufferAttribute(i,v),f.fromBufferAttribute(o,L),d.fromBufferAttribute(o,z),g.fromBufferAttribute(o,v),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const M=1/(d.x*g.y-g.x*d.y);isFinite(M)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(M),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(M),a[L].add(_),a[z].add(_),a[v].add(_),c[L].add(p),c[z].add(p),c[v].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,z=w.length;L<z;++L){const v=w[L],M=v.start,U=v.count;for(let k=M,O=M+U;k<O;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new P,b=new P,I=new P,C=new P;function T(L){I.fromBufferAttribute(s,L),C.copy(I);const z=a[L];x.copy(z),x.sub(I.multiplyScalar(I.dot(z))).normalize(),b.crossVectors(C,z);const M=b.dot(c[L])<0?-1:1;r.setXYZW(L,x.x,x.y,x.z,M)}for(let L=0,z=w.length;L<z;++L){const v=w[L],M=v.start,U=v.count;for(let k=M,O=M+U;k<O;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new P,o=new P,r=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new Re(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new ae,qi=new Kd,Sr=new uo,Au=new P,br=new P,wr=new P,Er=new P,lc=new P,Tr=new P,Ru=new P,Ar=new P;class Xt extends we{constructor(t=new De,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Tr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(lc.fromBufferAttribute(u,t),r?Tr.addScaledVector(lc,h):Tr.addScaledVector(lc.sub(e),h))}e.add(Tr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(o),qi.copy(t.ray).recast(t.near),!(Sr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Sr,Au)===null||qi.origin.distanceToSquared(Au)>(t.far-t.near)**2))&&(Tu.copy(o).invert(),qi.copy(t.ray).applyMatrix4(Tu),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=r[p.materialIndex],w=Math.max(p.start,d.start),x=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=w,I=x;b<I;b+=3){const C=a.getX(b),T=a.getX(b+1),L=a.getX(b+2);s=Rr(this,m,t,i,l,h,u,C,T,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const w=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);s=Rr(this,r,t,i,l,h,u,w,x,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=r[p.materialIndex],w=Math.max(p.start,d.start),x=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let b=w,I=x;b<I;b+=3){const C=b,T=b+1,L=b+2;s=Rr(this,m,t,i,l,h,u,C,T,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const w=p,x=p+1,b=p+2;s=Rr(this,r,t,i,l,h,u,w,x,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ig(n,t,e,i,s,o,r,a){let c;if(t.side===rn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,t.side===Oi,a),c===null)return null;Ar.copy(a),Ar.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ar);return l<e.near||l>e.far?null:{distance:l,point:Ar.clone(),object:n}}function Rr(n,t,e,i,s,o,r,a,c,l){n.getVertexPosition(a,br),n.getVertexPosition(c,wr),n.getVertexPosition(l,Er);const h=ig(n,t,e,i,br,wr,Er,Ru);if(h){const u=new P;Vn.getBarycoord(Ru,br,wr,Er,u),s&&(h.uv=Vn.getInterpolatedAttribute(s,a,c,l,u,new it)),o&&(h.uv1=Vn.getInterpolatedAttribute(o,a,c,l,u,new it)),r&&(h.normal=Vn.getInterpolatedAttribute(r,a,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};Vn.getNormal(br,wr,Er,f.normal),h.face=f,h.barycoord=u}return h}class Es extends De{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(_,p,m,w,x,b,I,C,T,L,z){const v=b/T,M=I/L,U=b/2,k=I/2,O=C/2,X=T+1,H=L+1;let nt=0,q=0;const mt=new P;for(let gt=0;gt<H;gt++){const Mt=gt*M-k;for(let Zt=0;Zt<X;Zt++){const oe=Zt*v-U;mt[_]=oe*w,mt[p]=Mt*x,mt[m]=O,l.push(mt.x,mt.y,mt.z),mt[_]=0,mt[p]=0,mt[m]=C>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Zt/T),u.push(1-gt/L),nt+=1}}for(let gt=0;gt<L;gt++)for(let Mt=0;Mt<T;Mt++){const Zt=f+Mt+X*gt,oe=f+Mt+X*(gt+1),K=f+(Mt+1)+X*(gt+1),ot=f+(Mt+1)+X*gt;c.push(Zt,oe,ot),c.push(oe,K,ot),q+=6}a.addGroup(d,q,z),d+=q,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function en(n){const t={};for(let e=0;e<n.length;e++){const i=ao(n[e]);for(const s in i)t[s]=i[s]}return t}function sg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function t0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const og={clone:ao,merge:en};var rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ag=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=ag,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=sg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class e0 extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new P,Cu=new it,Pu=new it;class sn extends e0{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,Cu,Pu),e.subVectors(Pu,Cu)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Bs=1;class cg extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(ks,Bs,t,e);s.layers=this.layers,this.add(s);const o=new sn(ks,Bs,t,e);o.layers=this.layers,this.add(o);const r=new sn(ks,Bs,t,e);r.layers=this.layers,this.add(r);const a=new sn(ks,Bs,t,e);a.layers=this.layers,this.add(a);const c=new sn(ks,Bs,t,e);c.layers=this.layers,this.add(c);const l=new sn(ks,Bs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class n0 extends Qe{constructor(t,e,i,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:no,super(t,e,i,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lg extends ps{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new n0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Es(5,5,5),o=new vi({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Di});o.uniforms.tEquirect.value=e;const r=new Xt(s,o),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=_n),new cg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const hc=new P,hg=new P,ug=new Kt;class ts{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=hc.subVectors(i,e).cross(hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(hc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ug.getNormalMatrix(t),s=this.coplanarPoint(hc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new uo,Cr=new P;class yh{constructor(t=new ts,e=new ts,i=new ts,s=new ts,o=new ts,r=new ts){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ui){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],w=s[13],x=s[14],b=s[15];if(i[0].setComponents(c-o,f-l,p-d,b-m).normalize(),i[1].setComponents(c+o,f+l,p+d,b+m).normalize(),i[2].setComponents(c+r,f+h,p+g,b+w).normalize(),i[3].setComponents(c-r,f-h,p-g,b-w).normalize(),i[4].setComponents(c-a,f-u,p-_,b-x).normalize(),e===ui)i[5].setComponents(c+a,f+u,p+_,b+x).normalize();else if(e===fa)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i0(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function fg(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class In extends De{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const w=m*f-r;for(let x=0;x<l;x++){const b=x*u-o;g.push(b,-w,0),_.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const x=w+l*m,b=w+l*(m+1),I=w+1+l*(m+1),C=w+1+l*m;d.push(x,b,C),d.push(b,I,C)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.widthSegments,t.heightSegments)}}var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
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
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
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
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ag=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fg=`#define PI 3.141592653589793
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
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kg=`vec3 transformedNormal = objectNormal;
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
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`
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
}`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
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
}`,e1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
#endif`,o1=`#ifdef USE_ENVMAP
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
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h1=`PhysicalMaterial material;
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
#endif`,u1=`struct PhysicalMaterial {
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
}`,f1=`
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S1=`#if defined( USE_POINTS_UV )
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
#endif`,b1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
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
#endif`,C1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N1=`#ifdef USE_NORMALMAP
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
#endif`,F1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z1=`float getShadowMask() {
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
}`,J1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,t2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e2=`#ifdef USE_SKINNING
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
#endif`,n2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r2=`#ifdef USE_TRANSMISSION
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
#endif`,a2=`#ifdef USE_TRANSMISSION
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
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d2=`uniform sampler2D t2D;
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_2=`#include <common>
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
}`,x2=`#if DEPTH_PACKING == 3200
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
}`,M2=`#define DISTANCE
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
}`,y2=`#define DISTANCE
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
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w2=`uniform float scale;
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
}`,E2=`uniform vec3 diffuse;
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
}`,T2=`#include <common>
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
}`,A2=`uniform vec3 diffuse;
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
}`,R2=`#define LAMBERT
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
}`,C2=`#define LAMBERT
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
}`,P2=`#define MATCAP
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
}`,L2=`#define MATCAP
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
}`,I2=`#define NORMAL
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
}`,D2=`#define NORMAL
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
}`,U2=`#define PHONG
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
}`,N2=`#define PHONG
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
}`,F2=`#define STANDARD
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
}`,O2=`#define STANDARD
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
}`,k2=`#define TOON
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
}`,B2=`#define TOON
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
}`,z2=`uniform float size;
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
}`,H2=`uniform vec3 diffuse;
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
}`,G2=`#include <common>
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
}`,V2=`uniform vec3 color;
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
}`,W2=`uniform float rotation;
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
}`,X2=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:dg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:vg,alphatest_pars_fragment:_g,aomap_fragment:xg,aomap_pars_fragment:Mg,batching_pars_vertex:yg,batching_vertex:Sg,begin_vertex:bg,beginnormal_vertex:wg,bsdfs:Eg,iridescence_fragment:Tg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Lg,color_fragment:Ig,color_pars_fragment:Dg,color_pars_vertex:Ug,color_vertex:Ng,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:kg,displacementmap_pars_vertex:Bg,displacementmap_vertex:zg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Gg,colorspace_fragment:Vg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:$g,envmap_physical_pars_fragment:o1,envmap_vertex:Kg,fog_vertex:jg,fog_pars_vertex:Zg,fog_fragment:Jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:t1,lightmap_pars_fragment:e1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:s1,lights_toon_fragment:r1,lights_toon_pars_fragment:a1,lights_phong_fragment:c1,lights_phong_pars_fragment:l1,lights_physical_fragment:h1,lights_physical_pars_fragment:u1,lights_fragment_begin:f1,lights_fragment_maps:d1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:_1,map_fragment:x1,map_pars_fragment:M1,map_particle_fragment:y1,map_particle_pars_fragment:S1,metalnessmap_fragment:b1,metalnessmap_pars_fragment:w1,morphinstance_vertex:E1,morphcolor_vertex:T1,morphnormal_vertex:A1,morphtarget_pars_vertex:R1,morphtarget_vertex:C1,normal_fragment_begin:P1,normal_fragment_maps:L1,normal_pars_fragment:I1,normal_pars_vertex:D1,normal_vertex:U1,normalmap_pars_fragment:N1,clearcoat_normal_fragment_begin:F1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:B1,opaque_fragment:z1,packing:H1,premultiplied_alpha_fragment:G1,project_vertex:V1,dithering_fragment:W1,dithering_pars_fragment:X1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:K1,shadowmap_vertex:j1,shadowmask_pars_fragment:Z1,skinbase_vertex:J1,skinning_pars_vertex:Q1,skinning_vertex:t2,skinnormal_vertex:e2,specularmap_fragment:n2,specularmap_pars_fragment:i2,tonemapping_fragment:s2,tonemapping_pars_fragment:o2,transmission_fragment:r2,transmission_pars_fragment:a2,uv_pars_fragment:c2,uv_pars_vertex:l2,uv_vertex:h2,worldpos_vertex:u2,background_vert:f2,background_frag:d2,backgroundCube_vert:p2,backgroundCube_frag:m2,cube_vert:g2,cube_frag:v2,depth_vert:_2,depth_frag:x2,distanceRGBA_vert:M2,distanceRGBA_frag:y2,equirect_vert:S2,equirect_frag:b2,linedashed_vert:w2,linedashed_frag:E2,meshbasic_vert:T2,meshbasic_frag:A2,meshlambert_vert:R2,meshlambert_frag:C2,meshmatcap_vert:P2,meshmatcap_frag:L2,meshnormal_vert:I2,meshnormal_frag:D2,meshphong_vert:U2,meshphong_frag:N2,meshphysical_vert:F2,meshphysical_frag:O2,meshtoon_vert:k2,meshtoon_frag:B2,points_vert:z2,points_frag:H2,shadow_vert:G2,shadow_frag:V2,sprite_vert:W2,sprite_frag:X2},ft={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},$n={basic:{uniforms:en([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:en([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new pt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:en([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:en([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:en([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new pt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:en([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:en([ft.points,ft.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:en([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:en([ft.common,ft.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:en([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:en([ft.sprite,ft.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:en([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:en([ft.lights,ft.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};$n.physical={uniforms:en([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Pr={r:0,b:0,g:0},$i=new bn,q2=new ae;function Y2(n,t,e,i,s,o,r){const a=new pt(0);let c=o===!0?0:1,l,h,u=null,f=0,d=null;function g(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?e:t).get(x)),x}function _(w){let x=!1;const b=g(w);b===null?m(a,c):b&&b.isColor&&(m(b,1),x=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===wa)?(h===void 0&&(h=new Xt(new Es(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ao($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(x.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(q2.makeRotationFromEuler($i)),h.material.toneMapped=he.getTransfer(b.colorSpace)!==_e,(u!==b||f!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Xt(new In(2,2),new vi({name:"BackgroundMaterial",uniforms:ao($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=he.getTransfer(b.colorSpace)!==_e,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,x){w.getRGB(Pr,t0(n)),i.buffers.color.setClear(Pr.r,Pr.g,Pr.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,m(a,c)},render:_,addToRenderList:p}}function $2(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let o=s,r=!1;function a(v,M,U,k,O){let X=!1;const H=u(k,U,M);o!==H&&(o=H,l(o.object)),X=d(v,k,U,O),X&&g(v,k,U,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,b(v,M,U,k),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,M,U){const k=U.wireframe===!0;let O=i[v.id];O===void 0&&(O={},i[v.id]=O);let X=O[M.id];X===void 0&&(X={},O[M.id]=X);let H=X[k];return H===void 0&&(H=f(c()),X[k]=H),H}function f(v){const M=[],U=[],k=[];for(let O=0;O<e;O++)M[O]=0,U[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:U,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,M,U,k){const O=o.attributes,X=M.attributes;let H=0;const nt=U.getAttributes();for(const q in nt)if(nt[q].location>=0){const gt=O[q];let Mt=X[q];if(Mt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Mt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Mt=v.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;H++}return o.attributesNum!==H||o.index!==k}function g(v,M,U,k){const O={},X=M.attributes;let H=0;const nt=U.getAttributes();for(const q in nt)if(nt[q].location>=0){let gt=X[q];gt===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor));const Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),O[q]=Mt,H++}o.attributes=O,o.attributesNum=H,o.index=k}function _(){const v=o.newAttributes;for(let M=0,U=v.length;M<U;M++)v[M]=0}function p(v){m(v,0)}function m(v,M){const U=o.newAttributes,k=o.enabledAttributes,O=o.attributeDivisors;U[v]=1,k[v]===0&&(n.enableVertexAttribArray(v),k[v]=1),O[v]!==M&&(n.vertexAttribDivisor(v,M),O[v]=M)}function w(){const v=o.newAttributes,M=o.enabledAttributes;for(let U=0,k=M.length;U<k;U++)M[U]!==v[U]&&(n.disableVertexAttribArray(U),M[U]=0)}function x(v,M,U,k,O,X,H){H===!0?n.vertexAttribIPointer(v,M,U,O,X):n.vertexAttribPointer(v,M,U,k,O,X)}function b(v,M,U,k){_();const O=k.attributes,X=U.getAttributes(),H=M.defaultAttributeValues;for(const nt in X){const q=X[nt];if(q.location>=0){let mt=O[nt];if(mt===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(mt=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(mt=v.instanceColor)),mt!==void 0){const gt=mt.normalized,Mt=mt.itemSize,Zt=t.get(mt);if(Zt===void 0)continue;const oe=Zt.buffer,K=Zt.type,ot=Zt.bytesPerElement,Tt=K===n.INT||K===n.UNSIGNED_INT||mt.gpuType===fh;if(mt.isInterleavedBufferAttribute){const dt=mt.data,kt=dt.stride,Ot=mt.offset;if(dt.isInstancedInterleavedBuffer){for(let qt=0;qt<q.locationSize;qt++)m(q.location+qt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let qt=0;qt<q.locationSize;qt++)p(q.location+qt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let qt=0;qt<q.locationSize;qt++)x(q.location+qt,Mt/q.locationSize,K,gt,kt*ot,(Ot+Mt/q.locationSize*qt)*ot,Tt)}else{if(mt.isInstancedBufferAttribute){for(let dt=0;dt<q.locationSize;dt++)m(q.location+dt,mt.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let dt=0;dt<q.locationSize;dt++)p(q.location+dt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let dt=0;dt<q.locationSize;dt++)x(q.location+dt,Mt/q.locationSize,K,gt,Mt*ot,Mt/q.locationSize*dt*ot,Tt)}}else if(H!==void 0){const gt=H[nt];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(q.location,gt);break;case 3:n.vertexAttrib3fv(q.location,gt);break;case 4:n.vertexAttrib4fv(q.location,gt);break;default:n.vertexAttrib1fv(q.location,gt)}}}}w()}function I(){L();for(const v in i){const M=i[v];for(const U in M){const k=M[U];for(const O in k)h(k[O].object),delete k[O];delete M[U]}delete i[v]}}function C(v){if(i[v.id]===void 0)return;const M=i[v.id];for(const U in M){const k=M[U];for(const O in k)h(k[O].object),delete k[O];delete M[U]}delete i[v.id]}function T(v){for(const M in i){const U=i[M];if(U[v.id]===void 0)continue;const k=U[v.id];for(const O in k)h(k[O].object),delete k[O];delete U[v.id]}}function L(){z(),r=!0,o!==s&&(o=s,l(o.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function K2(n,t,e){let i;function s(l){i=l}function o(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function r(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,i,f[_])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function j2(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==xn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==gi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==jn&&!L)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:I,maxSamples:C}}function Z2(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new ts,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||g===null||g.length===0||o&&!p)o?h(null):l();else{const w=o?0:i,x=w*4;let b=m.clippingState||null;c.value=b,b=h(g,f,x,d);for(let I=0;I!==x;++I)b[I]=e[I];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,b=d;x!==_;++x,b+=4)r.copy(u[x]).applyMatrix4(w,a),r.normal.toArray(p,b),p[b+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function J2(n){let t=new WeakMap;function e(r,a){return a===ll?r.mapping=no:a===hl&&(r.mapping=io),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===ll||a===hl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new lg(c.height);return l.fromEquirectangularTexture(n,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class s0 extends e0{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $s=4,Lu=[.125,.215,.35,.446,.526,.582],is=20,uc=new s0,Iu=new pt;let fc=null,dc=0,pc=0,mc=!1;const es=(1+Math.sqrt(5))/2,zs=1/es,Du=[new P(-es,zs,0),new P(es,zs,0),new P(-zs,0,es),new P(zs,0,es),new P(0,es,-zs),new P(0,es,zs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fc,dc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===no||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:sr,format:xn,colorSpace:Hi,depthBuffer:!1},s=Nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q2(o)),this._blurMaterial=tv(o,t,e)}return s}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,uc)}_sceneToCubeUV(t,e,i,s){const a=new sn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Iu),h.toneMapping=Ui,h.autoClear=!1;const d=new fn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Xt(new Es,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Iu),_=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):w===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;Lr(s,w*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===no||t.mapping===io;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fu());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Xt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Lr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(r,uc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Du[(s-o-1)%Du.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*is-1),_=o/g,p=isFinite(o)?1+Math.floor(h*_):is;p>is&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${is}`);const m=[];let w=0;for(let T=0;T<is;++T){const L=T/_,z=Math.exp(-L*L/2);m.push(z),T===0?w+=z:T<p&&(w+=2*z)}for(let T=0;T<m.length;T++)m[T]=m[T]/w;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const b=this._sizeLods[s],I=3*b*(s>x-$s?s-x+$s:0),C=4*(this._cubeSize-b);Lr(e,I,C,3*b,2*b),c.setRenderTarget(e),c.render(u,uc)}}function Q2(n){const t=[],e=[],i=[];let s=n;const o=n-$s+1+Lu.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>n-$s?c=Lu[r-n+$s-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,w=new Float32Array(_*g*d),x=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let C=0;C<d;C++){const T=C%3*2/3-1,L=C>2?0:-1,z=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];w.set(z,_*g*C),x.set(f,p*g*C);const v=[C,C,C,C,C,C];b.set(v,m*g*C)}const I=new De;I.setAttribute("position",new Re(w,_)),I.setAttribute("uv",new Re(x,p)),I.setAttribute("faceIndex",new Re(b,m)),t.push(I),s>$s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nu(n,t,e){const i=new ps(n,t,e);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function tv(n,t,e){const i=new Float32Array(is),s=new P(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fu(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ou(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Sh(){return`

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
	`}function ev(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===ll||c===hl,h=c===no||c===io;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Uu(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Uu(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function nv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Qr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function iv(n,t,e,i){const s={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],n.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let x=0,b=w.length;x<b;x+=3){const I=w[x+0],C=w[x+1],T=w[x+2];f.push(I,C,C,T,T,I)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,b=w.length/3-1;x<b;x+=3){const I=x+0,C=x+1,T=x+2;f.push(I,C,C,T,T,I)}}else return;const p=new(qd(f)?Qd:Jd)(f,1);p.version=_;const m=o.get(u);m&&t.remove(m),o.set(u,p)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function sv(n,t,e){let i;function s(f){i=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,d){n.drawElements(i,d,o,f*r),e.update(d,i,1)}function l(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,o,f*r,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function u(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/r,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,o,f,0,_,0,g);let m=0;for(let w=0;w<g;w++)m+=d[w];for(let w=0;w<_.length;w++)e.update(m,i,_[w])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ov(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function rv(n,t,e){const i=new WeakMap,s=new Ae;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let z=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let b=a.attributes.position.count*x,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*I*4*u),T=new $d(C,b,I,u);T.type=jn,T.needsUpdate=!0;const L=x*4;for(let v=0;v<u;v++){const M=p[v],U=m[v],k=w[v],O=b*I*4*v;for(let X=0;X<M.count;X++){const H=X*L;d===!0&&(s.fromBufferAttribute(M,X),C[O+H+0]=s.x,C[O+H+1]=s.y,C[O+H+2]=s.z,C[O+H+3]=0),g===!0&&(s.fromBufferAttribute(U,X),C[O+H+4]=s.x,C[O+H+5]=s.y,C[O+H+6]=s.z,C[O+H+7]=0),_===!0&&(s.fromBufferAttribute(k,X),C[O+H+8]=s.x,C[O+H+9]=s.y,C[O+H+10]=s.z,C[O+H+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new it(b,I)},i.set(a,f),a.addEventListener("dispose",z)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function av(n,t,e,i){let s=new WeakMap;function o(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class o0 extends Qe{constructor(t,e,i,s,o,r,a,c,l,h=Qs){if(h!==Qs&&h!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qs&&(i=ds),i===void 0&&h===oo&&(i=so),super(null,s,o,r,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const r0=new Qe,ku=new o0(1,1),a0=new $d,c0=new Ym,l0=new n0,Bu=[],zu=[],Hu=new Float32Array(16),Gu=new Float32Array(9),Vu=new Float32Array(4);function fo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Bu[s];if(o===void 0&&(o=new Float32Array(s),Bu[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Aa(n,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function cv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function hv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function uv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function fv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),Be(e,i)}}function dv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Gu.set(i),n.uniformMatrix3fv(this.addr,!1,Gu),Be(e,i)}}function pv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,i))return;Hu.set(i),n.uniformMatrix4fv(this.addr,!1,Hu),Be(e,i)}}function mv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function _v(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function xv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Mv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function Sv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function bv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(ku.compareFunction=Wd,o=ku):o=r0,e.setTexture2D(t||o,s)}function wv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||c0,s)}function Ev(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||l0,s)}function Tv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||a0,s)}function Av(n){switch(n){case 5126:return cv;case 35664:return lv;case 35665:return hv;case 35666:return uv;case 35674:return fv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return _v;case 5125:return xv;case 36294:return Mv;case 36295:return yv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Tv}}function Rv(n,t){n.uniform1fv(this.addr,t)}function Cv(n,t){const e=fo(t,this.size,2);n.uniform2fv(this.addr,e)}function Pv(n,t){const e=fo(t,this.size,3);n.uniform3fv(this.addr,e)}function Lv(n,t){const e=fo(t,this.size,4);n.uniform4fv(this.addr,e)}function Iv(n,t){const e=fo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dv(n,t){const e=fo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Uv(n,t){const e=fo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Nv(n,t){n.uniform1iv(this.addr,t)}function Fv(n,t){n.uniform2iv(this.addr,t)}function Ov(n,t){n.uniform3iv(this.addr,t)}function kv(n,t){n.uniform4iv(this.addr,t)}function Bv(n,t){n.uniform1uiv(this.addr,t)}function zv(n,t){n.uniform2uiv(this.addr,t)}function Hv(n,t){n.uniform3uiv(this.addr,t)}function Gv(n,t){n.uniform4uiv(this.addr,t)}function Vv(n,t,e){const i=this.cache,s=t.length,o=Aa(e,s);ke(i,o)||(n.uniform1iv(this.addr,o),Be(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||r0,o[r])}function Wv(n,t,e){const i=this.cache,s=t.length,o=Aa(e,s);ke(i,o)||(n.uniform1iv(this.addr,o),Be(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||c0,o[r])}function Xv(n,t,e){const i=this.cache,s=t.length,o=Aa(e,s);ke(i,o)||(n.uniform1iv(this.addr,o),Be(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||l0,o[r])}function qv(n,t,e){const i=this.cache,s=t.length,o=Aa(e,s);ke(i,o)||(n.uniform1iv(this.addr,o),Be(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||a0,o[r])}function Yv(n){switch(n){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Lv;case 35674:return Iv;case 35675:return Dv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return kv;case 5125:return Bv;case 36294:return zv;case 36295:return Hv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}class $v{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Av(e.type)}}class Kv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yv(e.type)}}class jv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Wu(n,t){n.seq.push(t),n.map[t.id]=t}function Zv(n,t,e){const i=n.name,s=i.length;for(gc.lastIndex=0;;){const o=gc.exec(i),r=gc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Wu(e,l===void 0?new $v(a,n,t):new Kv(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new jv(a),Wu(e,u)),e=u}}}class ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Zv(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Xu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Jv=37297;let Qv=0;function t_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}function e_(n){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(n);let i;switch(t===e?i="":t===ua&&e===ha?i="LinearDisplayP3ToLinearSRGB":t===ha&&e===ua&&(i="LinearSRGBToLinearDisplayP3"),n){case Hi:case Ta:return[i,"LinearTransferOETF"];case Ge:case xh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function qu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+t_(n.getShaderSource(t),r)}else return s}function n_(n,t){const e=e_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function i_(n,t){let e;switch(t){case sm:e="Linear";break;case om:e="Reinhard";break;case rm:e="Cineon";break;case am:e="ACESFilmic";break;case lm:e="AgX";break;case hm:e="Neutral";break;case cm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new P;function s_(){he.getLuminanceCoefficients(Ir);const n=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function r_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function a_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Do(n){return n!==""}function Yu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $u(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(c_,h_)}const l_=new Map;function h_(n,t){let e=$t[t];if(e===void 0){const i=l_.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}const u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(n){return n.replace(u_,f_)}function f_(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ju(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function d_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Op?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function p_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case no:case io:t="ENVMAP_TYPE_CUBE";break;case wa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case io:t="ENVMAP_MODE_REFRACTION";break}return t}function g_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ba:t="ENVMAP_BLENDING_MULTIPLY";break;case nm:t="ENVMAP_BLENDING_MIX";break;case im:t="ENVMAP_BLENDING_ADD";break}return t}function v_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function __(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=d_(e),l=p_(e),h=m_(e),u=g_(e),f=v_(e),d=o_(e),g=r_(o),_=s.createProgram();let p,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Do).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Do).join(`
`),m.length>0&&(m+=`
`)):(p=[ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),m=[ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ui?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),s_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Do).join(`
`)),r=kl(r),r=Yu(r,e),r=$u(r,e),a=kl(a),a=Yu(a,e),a=$u(a,e),r=Ku(r),a=Ku(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=w+p+r,b=w+m+a,I=Xu(s,s.VERTEX_SHADER,x),C=Xu(s,s.FRAGMENT_SHADER,b);s.attachShader(_,I),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(M){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(I).trim(),O=s.getShaderInfoLog(C).trim();let X=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,I,C);else{const nt=qu(s,I,"vertex"),q=qu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+U+`
`+nt+`
`+q)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||O==="")&&(H=!1);H&&(M.diagnostics={runnable:X,programLog:U,vertexShader:{log:k,prefix:p},fragmentShader:{log:O,prefix:m}})}s.deleteShader(I),s.deleteShader(C),L=new ta(s,_),z=a_(s,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let z;this.getAttributes=function(){return z===void 0&&T(this),z};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Jv)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let x_=0;class M_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new y_(t),e.set(t,i)),i}}class y_{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}}function S_(n,t,e,i,s,o,r){const a=new jd,c=new M_,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,M,U,k,O){const X=k.fog,H=O.geometry,nt=v.isMeshStandardMaterial?k.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||nt),mt=q&&q.mapping===wa?q.image.height:null,gt=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Zt=Mt!==void 0?Mt.length:0;let oe=0;H.morphAttributes.position!==void 0&&(oe=1),H.morphAttributes.normal!==void 0&&(oe=2),H.morphAttributes.color!==void 0&&(oe=3);let K,ot,Tt,dt;if(gt){const cn=$n[gt];K=cn.vertexShader,ot=cn.fragmentShader}else K=v.vertexShader,ot=v.fragmentShader,c.update(v),Tt=c.getVertexShaderID(v),dt=c.getFragmentShaderID(v);const kt=n.getRenderTarget(),Ot=O.isInstancedMesh===!0,qt=O.isBatchedMesh===!0,jt=!!v.map,Q=!!v.matcap,R=!!q,lt=!!v.aoMap,ct=!!v.lightMap,st=!!v.bumpMap,ht=!!v.normalMap,It=!!v.displacementMap,yt=!!v.emissiveMap,A=!!v.metalnessMap,S=!!v.roughnessMap,G=v.anisotropy>0,j=v.clearcoat>0,tt=v.dispersion>0,Z=v.iridescence>0,Ct=v.sheen>0,ut=v.transmission>0,wt=G&&!!v.anisotropyMap,Qt=j&&!!v.clearcoatMap,rt=j&&!!v.clearcoatNormalMap,Et=j&&!!v.clearcoatRoughnessMap,Ht=Z&&!!v.iridescenceMap,Gt=Z&&!!v.iridescenceThicknessMap,At=Ct&&!!v.sheenColorMap,te=Ct&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,ge=!!v.specularColorMap,D=!!v.specularIntensityMap,St=ut&&!!v.transmissionMap,Y=ut&&!!v.thicknessMap,et=!!v.gradientMap,vt=!!v.alphaMap,bt=v.alphaTest>0,ie=!!v.alphaHash,Ue=!!v.extensions;let an=Ui;v.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(an=n.toneMapping);const re={shaderID:gt,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:ot,defines:v.defines,customVertexShaderID:Tt,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:qt,batchingColor:qt&&O._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&O.instanceColor!==null,instancingMorph:Ot&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:kt===null?n.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:Hi,alphaToCoverage:!!v.alphaToCoverage,map:jt,matcap:Q,envMap:R,envMapMode:R&&q.mapping,envMapCubeUVHeight:mt,aoMap:lt,lightMap:ct,bumpMap:st,normalMap:ht,displacementMap:d&&It,emissiveMap:yt,normalMapObjectSpace:ht&&v.normalMapType===pm,normalMapTangentSpace:ht&&v.normalMapType===_h,metalnessMap:A,roughnessMap:S,anisotropy:G,anisotropyMap:wt,clearcoat:j,clearcoatMap:Qt,clearcoatNormalMap:rt,clearcoatRoughnessMap:Et,dispersion:tt,iridescence:Z,iridescenceMap:Ht,iridescenceThicknessMap:Gt,sheen:Ct,sheenColorMap:At,sheenRoughnessMap:te,specularMap:Yt,specularColorMap:ge,specularIntensityMap:D,transmission:ut,transmissionMap:St,thicknessMap:Y,gradientMap:et,opaque:v.transparent===!1&&v.blending===Js&&v.alphaToCoverage===!1,alphaMap:vt,alphaTest:bt,alphaHash:ie,combine:v.combine,mapUv:jt&&p(v.map.channel),aoMapUv:lt&&p(v.aoMap.channel),lightMapUv:ct&&p(v.lightMap.channel),bumpMapUv:st&&p(v.bumpMap.channel),normalMapUv:ht&&p(v.normalMap.channel),displacementMapUv:It&&p(v.displacementMap.channel),emissiveMapUv:yt&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:S&&p(v.roughnessMap.channel),anisotropyMapUv:wt&&p(v.anisotropyMap.channel),clearcoatMapUv:Qt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:te&&p(v.sheenRoughnessMap.channel),specularMapUv:Yt&&p(v.specularMap.channel),specularColorMapUv:ge&&p(v.specularColorMap.channel),specularIntensityMapUv:D&&p(v.specularIntensityMap.channel),transmissionMapUv:St&&p(v.transmissionMap.channel),thicknessMapUv:Y&&p(v.thicknessMap.channel),alphaMapUv:vt&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ht||G),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(jt||vt),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:an,decodeVideoTexture:jt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Kn,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ue&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&v.extensions.multiDraw===!0||qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function w(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)M.push(U),M.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(x(M,v),b(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function x(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function b(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),v.push(a.mask)}function I(v){const M=_[v.type];let U;if(M){const k=$n[M];U=og.clone(k.uniforms)}else U=v.uniforms;return U}function C(v,M){let U;for(let k=0,O=h.length;k<O;k++){const X=h[k];if(X.cacheKey===M){U=X,++U.usedTimes;break}}return U===void 0&&(U=new __(n,M,v,o),h.push(U)),U}function T(v){if(--v.usedTimes===0){const M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function L(v){c.remove(v)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:I,acquireProgram:C,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:z}}function b_(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,c){n.get(r)[a]=c}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function w_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Zu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ju(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(u,f,d,g,_,p){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,f,d,g,_,p){const m=r(u,f,d,g,_,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function c(u,f,d,g,_,p){const m=r(u,f,d,g,_,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||w_),i.length>1&&i.sort(f||Zu),s.length>1&&s.sort(f||Zu)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function E_(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new Ju,n.set(i,[r])):s>=o.length?(r=new Ju,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function T_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new pt};break;case"SpotLight":e={position:new P,direction:new P,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function A_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let R_=0;function C_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function P_(n){const t=new T_,e=A_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,o=new ae,r=new ae;function a(l){let h=0,u=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,w=0,x=0,b=0,I=0,C=0,T=0;l.sort(C_);for(let z=0,v=l.length;z<v;z++){const M=l[z],U=M.color,k=M.intensity,O=M.distance,X=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=U.r*k,u+=U.g*k,f+=U.b*k;else if(M.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(M.sh.coefficients[H],k);T++}else if(M.isDirectionalLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const nt=M.shadow,q=e.get(M);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=M.shadow.matrix,w++}i.directional[d]=H,d++}else if(M.isSpotLight){const H=t.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(U).multiplyScalar(k),H.distance=O,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,i.spot[_]=H;const nt=M.shadow;if(M.map&&(i.spotLightMap[I]=M.map,I++,nt.updateMatrices(M),M.castShadow&&C++),i.spotLightMatrix[_]=nt.matrix,M.castShadow){const q=e.get(M);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=X,b++}_++}else if(M.isRectAreaLight){const H=t.get(M);H.color.copy(U).multiplyScalar(k),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),i.rectArea[p]=H,p++}else if(M.isPointLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const nt=M.shadow,q=e.get(M);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=M.shadow.matrix,x++}i.point[g]=H,g++}else if(M.isHemisphereLight){const H=t.get(M);H.skyColor.copy(M.color).multiplyScalar(k),H.groundColor.copy(M.groundColor).multiplyScalar(k),i.hemi[m]=H,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==x||L.numSpotShadows!==b||L.numSpotMaps!==I||L.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=b+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=x,L.numSpotShadows=b,L.numSpotMaps=I,L.numLightProbes=T,i.version=R_++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,w=l.length;m<w;m++){const x=l[m];if(x.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(x.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),r.identity(),o.copy(x.matrixWorld),o.premultiply(p),r.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:i}}function Qu(n){const t=new P_(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function L_(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Qu(n),t.set(s,[a])):o>=r.length?(a=new Qu(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class I_ extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D_ extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`;function F_(n,t,e){let i=new yh;const s=new it,o=new it,r=new Ae,a=new I_({depthPacking:dm}),c=new D_,l={},h=e.maxTextureSize,u={[Oi]:rn,[rn]:Oi,[Kn]:Kn},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:U_,fragmentShader:N_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let m=this.type;this.render=function(C,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const z=n.getRenderTarget(),v=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Di),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=m!==li&&this.type===li,O=m===li&&this.type!==li;for(let X=0,H=C.length;X<H;X++){const nt=C[X],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const mt=q.getFrameExtents();if(s.multiply(mt),o.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,q.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,q.mapSize.y=o.y)),q.map===null||k===!0||O===!0){const Mt=this.type!==li?{minFilter:on,magFilter:on}:{};q.map!==null&&q.map.dispose(),q.map=new ps(s.x,s.y,Mt),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const gt=q.getViewportCount();for(let Mt=0;Mt<gt;Mt++){const Zt=q.getViewport(Mt);r.set(o.x*Zt.x,o.y*Zt.y,o.x*Zt.z,o.y*Zt.w),U.viewport(r),q.updateMatrices(nt,Mt),i=q.getFrustum(),b(T,L,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===li&&w(q,L),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(z,v,M)};function w(C,T){const L=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ps(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,L,d,_,null)}function x(C,T,L,z){let v=null;const M=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(M!==void 0)v=M;else if(v=L.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=v.uuid,k=T.uuid;let O=l[U];O===void 0&&(O={},l[U]=O);let X=O[k];X===void 0&&(X=v.clone(),O[k]=X,T.addEventListener("dispose",I)),v=X}if(v.visible=T.visible,v.wireframe=T.wireframe,z===li?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=n.properties.get(v);U.light=L}return v}function b(C,T,L,z,v){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const k=t.update(C),O=C.material;if(Array.isArray(O)){const X=k.groups;for(let H=0,nt=X.length;H<nt;H++){const q=X[H],mt=O[q.materialIndex];if(mt&&mt.visible){const gt=x(C,mt,z,v);C.onBeforeShadow(n,C,T,L,k,gt,q),n.renderBufferDirect(L,null,k,gt,C,q),C.onAfterShadow(n,C,T,L,k,gt,q)}}}else if(O.visible){const X=x(C,O,z,v);C.onBeforeShadow(n,C,T,L,k,X,null),n.renderBufferDirect(L,null,k,X,C,null),C.onAfterShadow(n,C,T,L,k,X,null)}}const U=C.children;for(let k=0,O=U.length;k<O;k++)b(U[k],T,L,z,v)}function I(C){C.target.removeEventListener("dispose",I);for(const L in l){const z=l[L],v=C.target.uuid;v in z&&(z[v].dispose(),delete z[v])}}}const O_={[nl]:il,[sl]:al,[ol]:cl,[eo]:rl,[il]:nl,[al]:sl,[cl]:ol,[rl]:eo};function k_(n){function t(){let D=!1;const St=new Ae;let Y=null;const et=new Ae(0,0,0,0);return{setMask:function(vt){Y!==vt&&!D&&(n.colorMask(vt,vt,vt,vt),Y=vt)},setLocked:function(vt){D=vt},setClear:function(vt,bt,ie,Ue,an){an===!0&&(vt*=Ue,bt*=Ue,ie*=Ue),St.set(vt,bt,ie,Ue),et.equals(St)===!1&&(n.clearColor(vt,bt,ie,Ue),et.copy(St))},reset:function(){D=!1,Y=null,et.set(-1,0,0,0)}}}function e(){let D=!1,St=!1,Y=null,et=null,vt=null;return{setReversed:function(bt){St=bt},setTest:function(bt){bt?Tt(n.DEPTH_TEST):dt(n.DEPTH_TEST)},setMask:function(bt){Y!==bt&&!D&&(n.depthMask(bt),Y=bt)},setFunc:function(bt){if(St&&(bt=O_[bt]),et!==bt){switch(bt){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case sl:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case ol:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case cl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=bt}},setLocked:function(bt){D=bt},setClear:function(bt){vt!==bt&&(n.clearDepth(bt),vt=bt)},reset:function(){D=!1,Y=null,et=null,vt=null}}}function i(){let D=!1,St=null,Y=null,et=null,vt=null,bt=null,ie=null,Ue=null,an=null;return{setTest:function(re){D||(re?Tt(n.STENCIL_TEST):dt(n.STENCIL_TEST))},setMask:function(re){St!==re&&!D&&(n.stencilMask(re),St=re)},setFunc:function(re,cn,ni){(Y!==re||et!==cn||vt!==ni)&&(n.stencilFunc(re,cn,ni),Y=re,et=cn,vt=ni)},setOp:function(re,cn,ni){(bt!==re||ie!==cn||Ue!==ni)&&(n.stencilOp(re,cn,ni),bt=re,ie=cn,Ue=ni)},setLocked:function(re){D=re},setClear:function(re){an!==re&&(n.clearStencil(re),an=re)},reset:function(){D=!1,St=null,Y=null,et=null,vt=null,bt=null,ie=null,Ue=null,an=null}}}const s=new t,o=new e,r=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,w=null,x=null,b=null,I=null,C=new pt(0,0,0),T=0,L=!1,z=null,v=null,M=null,U=null,k=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(nt)[1]),X=H>=1):nt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),X=H>=2);let q=null,mt={};const gt=n.getParameter(n.SCISSOR_BOX),Mt=n.getParameter(n.VIEWPORT),Zt=new Ae().fromArray(gt),oe=new Ae().fromArray(Mt);function K(D,St,Y,et){const vt=new Uint8Array(4),bt=n.createTexture();n.bindTexture(D,bt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ie=0;ie<Y;ie++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(St+ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return bt}const ot={};ot[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Tt(n.DEPTH_TEST),o.setFunc(eo),ct(!1),st(au),Tt(n.CULL_FACE),R(Di);function Tt(D){l[D]!==!0&&(n.enable(D),l[D]=!0)}function dt(D){l[D]!==!1&&(n.disable(D),l[D]=!1)}function kt(D,St){return h[D]!==St?(n.bindFramebuffer(D,St),h[D]=St,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=St),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=St),!0):!1}function Ot(D,St){let Y=f,et=!1;if(D){Y=u.get(St),Y===void 0&&(Y=[],u.set(St,Y));const vt=D.textures;if(Y.length!==vt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,ie=vt.length;bt<ie;bt++)Y[bt]=n.COLOR_ATTACHMENT0+bt;Y.length=vt.length,et=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,et=!0);et&&n.drawBuffers(Y)}function qt(D){return d!==D?(n.useProgram(D),d=D,!0):!1}const jt={[ns]:n.FUNC_ADD,[Bp]:n.FUNC_SUBTRACT,[zp]:n.FUNC_REVERSE_SUBTRACT};jt[Hp]=n.MIN,jt[Gp]=n.MAX;const Q={[Vp]:n.ZERO,[Wp]:n.ONE,[Xp]:n.SRC_COLOR,[tl]:n.SRC_ALPHA,[Zp]:n.SRC_ALPHA_SATURATE,[Kp]:n.DST_COLOR,[Yp]:n.DST_ALPHA,[qp]:n.ONE_MINUS_SRC_COLOR,[el]:n.ONE_MINUS_SRC_ALPHA,[jp]:n.ONE_MINUS_DST_COLOR,[$p]:n.ONE_MINUS_DST_ALPHA,[Jp]:n.CONSTANT_COLOR,[Qp]:n.ONE_MINUS_CONSTANT_COLOR,[tm]:n.CONSTANT_ALPHA,[em]:n.ONE_MINUS_CONSTANT_ALPHA};function R(D,St,Y,et,vt,bt,ie,Ue,an,re){if(D===Di){g===!0&&(dt(n.BLEND),g=!1);return}if(g===!1&&(Tt(n.BLEND),g=!0),D!==kp){if(D!==_||re!==L){if((p!==ns||x!==ns)&&(n.blendEquation(n.FUNC_ADD),p=ns,x=ns),re)switch(D){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qo:n.blendFunc(n.ONE,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,w=null,b=null,I=null,C.set(0,0,0),T=0,_=D,L=re}return}vt=vt||St,bt=bt||Y,ie=ie||et,(St!==p||vt!==x)&&(n.blendEquationSeparate(jt[St],jt[vt]),p=St,x=vt),(Y!==m||et!==w||bt!==b||ie!==I)&&(n.blendFuncSeparate(Q[Y],Q[et],Q[bt],Q[ie]),m=Y,w=et,b=bt,I=ie),(Ue.equals(C)===!1||an!==T)&&(n.blendColor(Ue.r,Ue.g,Ue.b,an),C.copy(Ue),T=an),_=D,L=!1}function lt(D,St){D.side===Kn?dt(n.CULL_FACE):Tt(n.CULL_FACE);let Y=D.side===rn;St&&(Y=!Y),ct(Y),D.blending===Js&&D.transparent===!1?R(Di):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const et=D.stencilWrite;r.setTest(et),et&&(r.setMask(D.stencilWriteMask),r.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),r.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Tt(n.SAMPLE_ALPHA_TO_COVERAGE):dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(D){z!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),z=D)}function st(D){D!==Np?(Tt(n.CULL_FACE),D!==v&&(D===au?n.cullFace(n.BACK):D===Fp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):dt(n.CULL_FACE),v=D}function ht(D){D!==M&&(X&&n.lineWidth(D),M=D)}function It(D,St,Y){D?(Tt(n.POLYGON_OFFSET_FILL),(U!==St||k!==Y)&&(n.polygonOffset(St,Y),U=St,k=Y)):dt(n.POLYGON_OFFSET_FILL)}function yt(D){D?Tt(n.SCISSOR_TEST):dt(n.SCISSOR_TEST)}function A(D){D===void 0&&(D=n.TEXTURE0+O-1),q!==D&&(n.activeTexture(D),q=D)}function S(D,St,Y){Y===void 0&&(q===null?Y=n.TEXTURE0+O-1:Y=q);let et=mt[Y];et===void 0&&(et={type:void 0,texture:void 0},mt[Y]=et),(et.type!==D||et.texture!==St)&&(q!==Y&&(n.activeTexture(Y),q=Y),n.bindTexture(D,St||ot[D]),et.type=D,et.texture=St)}function G(){const D=mt[q];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(D){Zt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Zt.copy(D))}function At(D){oe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),oe.copy(D))}function te(D,St){let Y=c.get(St);Y===void 0&&(Y=new WeakMap,c.set(St,Y));let et=Y.get(D);et===void 0&&(et=n.getUniformBlockIndex(St,D.name),Y.set(D,et))}function Yt(D,St){const et=c.get(St).get(D);a.get(St)!==et&&(n.uniformBlockBinding(St,et,D.__bindingPointIndex),a.set(St,et))}function ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},q=null,mt={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,w=null,x=null,b=null,I=null,C=new pt(0,0,0),T=0,L=!1,z=null,v=null,M=null,U=null,k=null,Zt.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Tt,disable:dt,bindFramebuffer:kt,drawBuffers:Ot,useProgram:qt,setBlending:R,setMaterial:lt,setFlipSided:ct,setCullFace:st,setLineWidth:ht,setPolygonOffset:It,setScissorTest:yt,activeTexture:A,bindTexture:S,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:Et,texImage3D:Ht,updateUBOMapping:te,uniformBlockBinding:Yt,texStorage2D:Qt,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:Ct,compressedTexSubImage2D:ut,compressedTexSubImage3D:wt,scissor:Gt,viewport:At,reset:ge}}function tf(n,t,e,i){const s=B_(i);switch(e){case kd:return n*t;case zd:return n*t;case Hd:return n*t*2;case Ea:return n*t/s.components*s.byteLength;case mh:return n*t/s.components*s.byteLength;case Gd:return n*t*2/s.components*s.byteLength;case gh:return n*t*2/s.components*s.byteLength;case Bd:return n*t*3/s.components*s.byteLength;case xn:return n*t*4/s.components*s.byteLength;case vh:return n*t*4/s.components*s.byteLength;case $r:case Kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jr:case Zr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:case ml:return Math.max(n,16)*Math.max(t,8)/4;case fl:case pl:return Math.max(n,8)*Math.max(t,8)/2;case gl:case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Jr:case Dl:case Ul:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vd:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B_(n){switch(n){case gi:case Nd:return{byteLength:1,components:1};case Yo:case Fd:case sr:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case ds:case fh:case jn:return{byteLength:4,components:1};case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function z_(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):da("canvas")}function _(A,S,G){let j=1;const tt=yt(A);if((tt.width>G||tt.height>G)&&(j=G/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(j*tt.width),Ct=Math.floor(j*tt.height);u===void 0&&(u=g(Z,Ct));const ut=S?g(Z,Ct):u;return ut.width=Z,ut.height=Ct,ut.getContext("2d").drawImage(A,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Ct+")."),ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==on&&A.minFilter!==_n}function m(A){n.generateMipmap(A)}function w(A,S,G,j,tt=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===n.RED&&(G===n.FLOAT&&(Z=n.R32F),G===n.HALF_FLOAT&&(Z=n.R16F),G===n.UNSIGNED_BYTE&&(Z=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.R8UI),G===n.UNSIGNED_SHORT&&(Z=n.R16UI),G===n.UNSIGNED_INT&&(Z=n.R32UI),G===n.BYTE&&(Z=n.R8I),G===n.SHORT&&(Z=n.R16I),G===n.INT&&(Z=n.R32I)),S===n.RG&&(G===n.FLOAT&&(Z=n.RG32F),G===n.HALF_FLOAT&&(Z=n.RG16F),G===n.UNSIGNED_BYTE&&(Z=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RG8UI),G===n.UNSIGNED_SHORT&&(Z=n.RG16UI),G===n.UNSIGNED_INT&&(Z=n.RG32UI),G===n.BYTE&&(Z=n.RG8I),G===n.SHORT&&(Z=n.RG16I),G===n.INT&&(Z=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),G===n.UNSIGNED_INT&&(Z=n.RGB32UI),G===n.BYTE&&(Z=n.RGB8I),G===n.SHORT&&(Z=n.RGB16I),G===n.INT&&(Z=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),G===n.UNSIGNED_INT&&(Z=n.RGBA32UI),G===n.BYTE&&(Z=n.RGBA8I),G===n.SHORT&&(Z=n.RGBA16I),G===n.INT&&(Z=n.RGBA32I)),S===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),S===n.RGBA){const Ct=tt?la:he.getTransfer(j);G===n.FLOAT&&(Z=n.RGBA32F),G===n.HALF_FLOAT&&(Z=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Z=Ct===_e?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(A,S){let G;return A?S===null||S===ds||S===so?G=n.DEPTH24_STENCIL8:S===jn?G=n.DEPTH32F_STENCIL8:S===Yo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ds||S===so?G=n.DEPTH_COMPONENT24:S===jn?G=n.DEPTH_COMPONENT32F:S===Yo&&(G=n.DEPTH_COMPONENT16),G}function b(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==on&&A.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){const S=A.target;S.removeEventListener("dispose",I),T(S),S.isVideoTexture&&h.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),z(S)}function T(A){const S=i.get(A);if(S.__webglInit===void 0)return;const G=A.source,j=f.get(G);if(j){const tt=j[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(A),Object.keys(j).length===0&&f.delete(G)}i.remove(A)}function L(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const G=A.source,j=f.get(G);delete j[S.__cacheKey],r.memory.textures--}function z(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let tt=0;tt<S.__webglFramebuffer[j].length;tt++)n.deleteFramebuffer(S.__webglFramebuffer[j][tt]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=A.textures;for(let j=0,tt=G.length;j<tt;j++){const Z=i.get(G[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),r.memory.textures--),i.remove(G[j])}i.remove(A)}let v=0;function M(){v=0}function U(){const A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function k(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function O(A,S){const G=i.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,A,S);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function X(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){oe(G,A,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function H(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){oe(G,A,S);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function nt(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){K(G,A,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const q={[ki]:n.REPEAT,[os]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},mt={[on]:n.NEAREST,[um]:n.NEAREST_MIPMAP_NEAREST,[fr]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[Va]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},gt={[mm]:n.NEVER,[ym]:n.ALWAYS,[gm]:n.LESS,[Wd]:n.LEQUAL,[vm]:n.EQUAL,[Mm]:n.GEQUAL,[_m]:n.GREATER,[xm]:n.NOTEQUAL};function Mt(A,S){if(S.type===jn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_n||S.magFilter===Va||S.magFilter===fr||S.magFilter===hi||S.minFilter===_n||S.minFilter===Va||S.minFilter===fr||S.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,q[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,q[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,q[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,mt[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,mt[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==fr&&S.minFilter!==hi||S.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",I));const j=S.source;let tt=f.get(j);tt===void 0&&(tt={},f.set(j,tt));const Z=k(S);if(Z!==A.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),tt[Z].usedTimes++;const Ct=tt[A.__cacheKey];Ct!==void 0&&(tt[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&L(S)),A.__cacheKey=Z,A.__webglTexture=tt[Z].texture}return G}function oe(A,S,G){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);const tt=Zt(A,S),Z=S.source;e.bindTexture(j,A.__webglTexture,n.TEXTURE0+G);const Ct=i.get(Z);if(Z.version!==Ct.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const ut=he.getPrimaries(he.workingColorSpace),wt=S.colorSpace===Pi?null:he.getPrimaries(S.colorSpace),Qt=S.colorSpace===Pi||ut===wt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let rt=_(S.image,!1,s.maxTextureSize);rt=It(S,rt);const Et=o.convert(S.format,S.colorSpace),Ht=o.convert(S.type);let Gt=w(S.internalFormat,Et,Ht,S.colorSpace,S.isVideoTexture);Mt(j,S);let At;const te=S.mipmaps,Yt=S.isVideoTexture!==!0,ge=Ct.__version===void 0||tt===!0,D=Z.dataReady,St=b(S,rt);if(S.isDepthTexture)Gt=x(S.format===oo,S.type),ge&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,Gt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Gt,rt.width,rt.height,0,Et,Ht,null));else if(S.isDataTexture)if(te.length>0){Yt&&ge&&e.texStorage2D(n.TEXTURE_2D,St,Gt,te[0].width,te[0].height);for(let Y=0,et=te.length;Y<et;Y++)At=te[Y],Yt?D&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,At.width,At.height,Et,Ht,At.data):e.texImage2D(n.TEXTURE_2D,Y,Gt,At.width,At.height,0,Et,Ht,At.data);S.generateMipmaps=!1}else Yt?(ge&&e.texStorage2D(n.TEXTURE_2D,St,Gt,rt.width,rt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,Et,Ht,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,rt.width,rt.height,0,Et,Ht,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Gt,te[0].width,te[0].height,rt.depth);for(let Y=0,et=te.length;Y<et;Y++)if(At=te[Y],S.format!==xn)if(Et!==null)if(Yt){if(D)if(S.layerUpdates.size>0){const vt=tf(At.width,At.height,S.format,S.type);for(const bt of S.layerUpdates){const ie=At.data.subarray(bt*vt/At.data.BYTES_PER_ELEMENT,(bt+1)*vt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,bt,At.width,At.height,1,Et,ie,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,At.width,At.height,rt.depth,Et,At.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Gt,At.width,At.height,rt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,At.width,At.height,rt.depth,Et,Ht,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Gt,At.width,At.height,rt.depth,0,Et,Ht,At.data)}else{Yt&&ge&&e.texStorage2D(n.TEXTURE_2D,St,Gt,te[0].width,te[0].height);for(let Y=0,et=te.length;Y<et;Y++)At=te[Y],S.format!==xn?Et!==null?Yt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?D&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,At.width,At.height,Et,Ht,At.data):e.texImage2D(n.TEXTURE_2D,Y,Gt,At.width,At.height,0,Et,Ht,At.data)}else if(S.isDataArrayTexture)if(Yt){if(ge&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Gt,rt.width,rt.height,rt.depth),D)if(S.layerUpdates.size>0){const Y=tf(rt.width,rt.height,S.format,S.type);for(const et of S.layerUpdates){const vt=rt.data.subarray(et*Y/rt.data.BYTES_PER_ELEMENT,(et+1)*Y/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,rt.width,rt.height,1,Et,Ht,vt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Et,Ht,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,rt.width,rt.height,rt.depth,0,Et,Ht,rt.data);else if(S.isData3DTexture)Yt?(ge&&e.texStorage3D(n.TEXTURE_3D,St,Gt,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Et,Ht,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,rt.width,rt.height,rt.depth,0,Et,Ht,rt.data);else if(S.isFramebufferTexture){if(ge)if(Yt)e.texStorage2D(n.TEXTURE_2D,St,Gt,rt.width,rt.height);else{let Y=rt.width,et=rt.height;for(let vt=0;vt<St;vt++)e.texImage2D(n.TEXTURE_2D,vt,Gt,Y,et,0,Et,Ht,null),Y>>=1,et>>=1}}else if(te.length>0){if(Yt&&ge){const Y=yt(te[0]);e.texStorage2D(n.TEXTURE_2D,St,Gt,Y.width,Y.height)}for(let Y=0,et=te.length;Y<et;Y++)At=te[Y],Yt?D&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,Et,Ht,At):e.texImage2D(n.TEXTURE_2D,Y,Gt,Et,Ht,At);S.generateMipmaps=!1}else if(Yt){if(ge){const Y=yt(rt);e.texStorage2D(n.TEXTURE_2D,St,Gt,Y.width,Y.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Ht,rt)}else e.texImage2D(n.TEXTURE_2D,0,Gt,Et,Ht,rt);p(S)&&m(j),Ct.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function K(A,S,G){if(S.image.length!==6)return;const j=Zt(A,S),tt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const Z=i.get(tt);if(tt.version!==Z.__version||j===!0){e.activeTexture(n.TEXTURE0+G);const Ct=he.getPrimaries(he.workingColorSpace),ut=S.colorSpace===Pi?null:he.getPrimaries(S.colorSpace),wt=S.colorSpace===Pi||Ct===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Qt=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let et=0;et<6;et++)!Qt&&!rt?Et[et]=_(S.image[et],!0,s.maxCubemapSize):Et[et]=rt?S.image[et].image:S.image[et],Et[et]=It(S,Et[et]);const Ht=Et[0],Gt=o.convert(S.format,S.colorSpace),At=o.convert(S.type),te=w(S.internalFormat,Gt,At,S.colorSpace),Yt=S.isVideoTexture!==!0,ge=Z.__version===void 0||j===!0,D=tt.dataReady;let St=b(S,Ht);Mt(n.TEXTURE_CUBE_MAP,S);let Y;if(Qt){Yt&&ge&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,te,Ht.width,Ht.height);for(let et=0;et<6;et++){Y=Et[et].mipmaps;for(let vt=0;vt<Y.length;vt++){const bt=Y[vt];S.format!==xn?Gt!==null?Yt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,bt.width,bt.height,Gt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,te,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,0,0,bt.width,bt.height,Gt,At,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt,te,bt.width,bt.height,0,Gt,At,bt.data)}}}else{if(Y=S.mipmaps,Yt&&ge){Y.length>0&&St++;const et=yt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,te,et.width,et.height)}for(let et=0;et<6;et++)if(rt){Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et[et].width,Et[et].height,Gt,At,Et[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,te,Et[et].width,Et[et].height,0,Gt,At,Et[et].data);for(let vt=0;vt<Y.length;vt++){const ie=Y[vt].image[et].image;Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,ie.width,ie.height,Gt,At,ie.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,te,ie.width,ie.height,0,Gt,At,ie.data)}}else{Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Gt,At,Et[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,te,Gt,At,Et[et]);for(let vt=0;vt<Y.length;vt++){const bt=Y[vt];Yt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,0,0,Gt,At,bt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt+1,te,Gt,At,bt.image[et])}}}p(S)&&m(n.TEXTURE_CUBE_MAP),Z.__version=tt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ot(A,S,G,j,tt,Z){const Ct=o.convert(G.format,G.colorSpace),ut=o.convert(G.type),wt=w(G.internalFormat,Ct,ut,G.colorSpace);if(!i.get(S).__hasExternalTextures){const rt=Math.max(1,S.width>>Z),Et=Math.max(1,S.height>>Z);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,wt,rt,Et,S.depth,0,Ct,ut,null):e.texImage2D(tt,Z,wt,rt,Et,0,Ct,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),st(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,tt,i.get(G).__webglTexture,0,ct(S)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,tt,i.get(G).__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(A,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const j=S.depthTexture,tt=j&&j.isDepthTexture?j.type:null,Z=x(S.stencilBuffer,tt),Ct=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=ct(S);st(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Z,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Z,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Z,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,A)}else{const j=S.textures;for(let tt=0;tt<j.length;tt++){const Z=j[tt],Ct=o.convert(Z.format,Z.colorSpace),ut=o.convert(Z.type),wt=w(Z.internalFormat,Ct,ut,Z.colorSpace),Qt=ct(S);G&&st(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,wt,S.width,S.height):st(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt,wt,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,wt,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const j=i.get(S.depthTexture).__webglTexture,tt=ct(S);if(S.depthTexture.format===Qs)st(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(S.depthTexture.format===oo)st(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function kt(A){const S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=j}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");dt(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=n.createRenderbuffer(),Tt(S.__webglDepthbuffer[j],A,!1);else{const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Tt(S.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(A,S,G){const j=i.get(A);S!==void 0&&ot(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&kt(A)}function qt(A){const S=A.texture,G=i.get(A),j=i.get(S);A.addEventListener("dispose",C);const tt=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,r.memory.textures++),Z){G.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ut]=[];for(let wt=0;wt<S.mipmaps.length;wt++)G.__webglFramebuffer[ut][wt]=n.createFramebuffer()}else G.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)G.__webglFramebuffer[ut]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let ut=0,wt=tt.length;ut<wt;ut++){const Qt=i.get(tt[ut]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=n.createTexture(),r.memory.textures++)}if(A.samples>0&&st(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const wt=tt[ut];G.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ut]);const Qt=o.convert(wt.format,wt.colorSpace),rt=o.convert(wt.type),Et=w(wt.internalFormat,Qt,rt,wt.colorSpace,A.isXRRenderTarget===!0),Ht=ct(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,Et,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,G.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Mt(n.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)ot(G.__webglFramebuffer[ut][wt],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt);else ot(G.__webglFramebuffer[ut],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(S)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ut=0,wt=tt.length;ut<wt;ut++){const Qt=tt[ut],rt=i.get(Qt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),Mt(n.TEXTURE_2D,Qt),ot(G.__webglFramebuffer,A,Qt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),p(Qt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),Mt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let wt=0;wt<S.mipmaps.length;wt++)ot(G.__webglFramebuffer[wt],A,S,n.COLOR_ATTACHMENT0,ut,wt);else ot(G.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,ut,0);p(S)&&m(ut),e.unbindTexture()}A.depthBuffer&&kt(A)}function jt(A){const S=A.textures;for(let G=0,j=S.length;G<j;G++){const tt=S[G];if(p(tt)){const Z=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ct=i.get(tt).__webglTexture;e.bindTexture(Z,Ct),m(Z),e.unbindTexture()}}}const Q=[],R=[];function lt(A){if(A.samples>0){if(st(A)===!1){const S=A.textures,G=A.width,j=A.height;let tt=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(A),ut=S.length>1;if(ut)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[wt]);const Qt=i.get(S[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qt,0)}n.blitFramebuffer(0,0,G,j,0,0,G,j,tt,n.NEAREST),c===!0&&(Q.length=0,R.length=0,Q.push(n.COLOR_ATTACHMENT0+wt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(Z),R.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[wt]);const Qt=i.get(S[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,Qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ct(A){return Math.min(s.maxSamples,A.samples)}function st(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(A){const S=r.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function It(A,S){const G=A.colorSpace,j=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Hi&&G!==Pi&&(he.getTransfer(G)===_e?(j!==xn||tt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=M,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=nt,this.rebindTextures=Ot,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=st}function H_(n,t){function e(i,s=Pi){let o;const r=he.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===dh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ph)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nd)return n.BYTE;if(i===Fd)return n.SHORT;if(i===Yo)return n.UNSIGNED_SHORT;if(i===fh)return n.INT;if(i===ds)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===sr)return n.HALF_FLOAT;if(i===kd)return n.ALPHA;if(i===Bd)return n.RGB;if(i===xn)return n.RGBA;if(i===zd)return n.LUMINANCE;if(i===Hd)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===oo)return n.DEPTH_STENCIL;if(i===Ea)return n.RED;if(i===mh)return n.RED_INTEGER;if(i===Gd)return n.RG;if(i===gh)return n.RG_INTEGER;if(i===vh)return n.RGBA_INTEGER;if(i===$r||i===Kr||i===jr||i===Zr)if(r===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===$r)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===$r)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===dl||i===pl||i===ml)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===fl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===vl||i===_l)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===gl||i===vl)return r===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===_l)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===Ml||i===yl||i===Sl||i===bl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Il)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===xl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===El)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Al)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jr||i===Dl||i===Ul)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Jr)return r===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vd||i===Nl||i===Fl||i===Ol)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Jr)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class G_ extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ke extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V_={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ke;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const W_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X_=`
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

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Qe,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new vi({vertexShader:W_,fragmentShader:X_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new In(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends ho{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new q_,p=e.getContextAttributes();let m=null,w=null;const x=[],b=[],I=new it;let C=null;const T=new sn;T.layers.enable(1),T.viewport=new Ae;const L=new sn;L.layers.enable(2),L.viewport=new Ae;const z=[T,L],v=new G_;v.layers.enable(1),v.layers.enable(2);let M=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=x[K];return ot===void 0&&(ot=new vc,x[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=x[K];return ot===void 0&&(ot=new vc,x[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=x[K];return ot===void 0&&(ot=new vc,x[K]=ot),ot.getHandSpace()};function k(K){const ot=b.indexOf(K.inputSource);if(ot===-1)return;const Tt=x[ot];Tt!==void 0&&(Tt.update(K.inputSource,K.frame,l||r),Tt.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",X);for(let K=0;K<x.length;K++){const ot=b[K];ot!==null&&(b[K]=null,x[K].disconnect(ot))}M=null,U=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,w=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",O),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const ot={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new ps(d.framebufferWidth,d.framebufferHeight,{format:xn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ot=null,Tt=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=p.stencil?oo:Qs,Tt=p.stencil?so:ds);const kt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ps(f.textureWidth,f.textureHeight,{format:xn,type:gi,depthTexture:new o0(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(K){for(let ot=0;ot<K.removed.length;ot++){const Tt=K.removed[ot],dt=b.indexOf(Tt);dt>=0&&(b[dt]=null,x[dt].disconnect(Tt))}for(let ot=0;ot<K.added.length;ot++){const Tt=K.added[ot];let dt=b.indexOf(Tt);if(dt===-1){for(let Ot=0;Ot<x.length;Ot++)if(Ot>=b.length){b.push(Tt),dt=Ot;break}else if(b[Ot]===null){b[Ot]=Tt,dt=Ot;break}if(dt===-1)break}const kt=x[dt];kt&&kt.connect(Tt)}}const H=new P,nt=new P;function q(K,ot,Tt){H.setFromMatrixPosition(ot.matrixWorld),nt.setFromMatrixPosition(Tt.matrixWorld);const dt=H.distanceTo(nt),kt=ot.projectionMatrix.elements,Ot=Tt.projectionMatrix.elements,qt=kt[14]/(kt[10]-1),jt=kt[14]/(kt[10]+1),Q=(kt[9]+1)/kt[5],R=(kt[9]-1)/kt[5],lt=(kt[8]-1)/kt[0],ct=(Ot[8]+1)/Ot[0],st=qt*lt,ht=qt*ct,It=dt/(-lt+ct),yt=It*-lt;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(yt),K.translateZ(It),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),kt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const A=qt+It,S=jt+It,G=st-yt,j=ht+(dt-yt),tt=Q*jt/S*A,Z=R*jt/S*A;K.projectionMatrix.makePerspective(G,j,tt,Z,A,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function mt(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,Tt=K.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),v.near=L.near=T.near=ot,v.far=L.far=T.far=Tt,(M!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),M=v.near,U=v.far);const dt=K.parent,kt=v.cameras;mt(v,dt);for(let Ot=0;Ot<kt.length;Ot++)mt(kt[Ot],dt);kt.length===2?q(v,T,L):v.projectionMatrix.copy(T.projectionMatrix),gt(K,v,dt)};function gt(K,ot,Tt){Tt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(Tt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ro*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Mt=null;function Zt(K,ot){if(h=ot.getViewerPose(l||r),g=ot,h!==null){const Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let dt=!1;Tt.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Ot=0;Ot<Tt.length;Ot++){const qt=Tt[Ot];let jt=null;if(d!==null)jt=d.getViewport(qt);else{const R=u.getViewSubImage(f,qt);jt=R.viewport,Ot===0&&(t.setRenderTargetTextures(w,R.colorTexture,f.ignoreDepthValues?void 0:R.depthStencilTexture),t.setRenderTarget(w))}let Q=z[Ot];Q===void 0&&(Q=new sn,Q.layers.enable(Ot),Q.viewport=new Ae,z[Ot]=Q),Q.matrix.fromArray(qt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(qt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(jt.x,jt.y,jt.width,jt.height),Ot===0&&(v.matrix.copy(Q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(Q)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Ot=u.getDepthInformation(Tt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,s.renderState)}}for(let Tt=0;Tt<x.length;Tt++){const dt=b[Tt],kt=x[Tt];dt!==null&&kt!==void 0&&kt.update(dt,ot,l||r)}Mt&&Mt(K,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const oe=new i0;oe.setAnimationLoop(Zt),this.setAnimationLoop=function(K){Mt=K},this.dispose=function(){}}}const Ki=new bn,$_=new ae;function K_(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,t0(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),u(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),_(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,w,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const w=t.get(m),x=w.envMap,b=w.envMapRotation;x&&(p.envMap.value=x,Ki.copy(b),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),p.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(Ki)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,w,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const w=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function j_(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,x){const b=x.program;i.uniformBlockBinding(w,b)}function l(w,x){let b=s[w.id];b===void 0&&(g(w),b=h(w),s[w.id]=b,w.addEventListener("dispose",p));const I=x.program;i.updateUBOMapping(w,I);const C=t.render.frame;o[w.id]!==C&&(f(w),o[w.id]=C)}function h(w){const x=u();w.__bindingPointIndex=x;const b=n.createBuffer(),I=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,b),b}function u(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=s[w.id],b=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,T=b.length;C<T;C++){const L=Array.isArray(b[C])?b[C]:[b[C]];for(let z=0,v=L.length;z<v;z++){const M=L[z];if(d(M,C,z,I)===!0){const U=M.__offset,k=Array.isArray(M.value)?M.value:[M.value];let O=0;for(let X=0;X<k.length;X++){const H=k[X],nt=_(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+O,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,O),O+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,x,b,I){const C=w.value,T=x+"_"+b;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{const L=I[T];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return I[T]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(w){const x=w.uniforms;let b=0;const I=16;for(let T=0,L=x.length;T<L;T++){const z=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,M=z.length;v<M;v++){const U=z[v],k=Array.isArray(U.value)?U.value:[U.value];for(let O=0,X=k.length;O<X;O++){const H=k[O],nt=_(H),q=b%I,mt=q%nt.boundary,gt=q+mt;b+=mt,gt!==0&&I-gt<nt.storage&&(b+=I-gt),U.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=nt.storage}}}const C=b%I;return C>0&&(b+=I-C),w.__size=b,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function p(w){const x=w.target;x.removeEventListener("dispose",p);const b=r.indexOf(x.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function m(){for(const w in s)n.deleteBuffer(s[w]);r=[],s={},o={}}return{bind:c,update:l,dispose:m}}class Z_{constructor(t={}){const{canvas:e=km(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Ui,this.toneMappingExposure=1;const x=this;let b=!1,I=0,C=0,T=null,L=-1,z=null;const v=new Ae,M=new Ae;let U=null;const k=new pt(0);let O=0,X=e.width,H=e.height,nt=1,q=null,mt=null;const gt=new Ae(0,0,X,H),Mt=new Ae(0,0,X,H);let Zt=!1;const oe=new yh;let K=!1,ot=!1;const Tt=new ae,dt=new ae,kt=new P,Ot=new Ae,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Q(){return T===null?nt:1}let R=i;function lt(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uh}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),R===null){const N="webgl2";if(R=lt(N,E),R===null)throw lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ct,st,ht,It,yt,A,S,G,j,tt,Z,Ct,ut,wt,Qt,rt,Et,Ht,Gt,At,te,Yt,ge,D;function St(){ct=new nv(R),ct.init(),Yt=new H_(R,ct),st=new j2(R,ct,t,Yt),ht=new k_(R),st.reverseDepthBuffer&&ht.buffers.depth.setReversed(!0),It=new ov(R),yt=new b_,A=new z_(R,ct,ht,yt,st,Yt,It),S=new J2(x),G=new ev(x),j=new fg(R),ge=new $2(R,j),tt=new iv(R,j,It,ge),Z=new av(R,tt,j,It),Gt=new rv(R,st,A),rt=new Z2(yt),Ct=new S_(x,S,G,ct,st,ge,rt),ut=new K_(x,yt),wt=new E_,Qt=new L_(ct),Ht=new Y2(x,S,G,ht,Z,f,c),Et=new F_(x,Z,st),D=new j_(R,It,st,ht),At=new K2(R,ct,It),te=new sv(R,ct,It),It.programs=Ct.programs,x.capabilities=st,x.extensions=ct,x.properties=yt,x.renderLists=wt,x.shadowMap=Et,x.state=ht,x.info=It}St();const Y=new Y_(x,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(X,H,!1))},this.getSize=function(E){return E.set(X,H)},this.setSize=function(E,N,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,H=N,e.width=Math.floor(E*nt),e.height=Math.floor(N*nt),V===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*nt,H*nt).floor()},this.setDrawingBufferSize=function(E,N,V){X=E,H=N,nt=V,e.width=Math.floor(E*V),e.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,N,V,W){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,N,V,W),ht.viewport(v.copy(gt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(Mt)},this.setScissor=function(E,N,V,W){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,N,V,W),ht.scissor(M.copy(Mt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(E){ht.setScissorTest(Zt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(E=!0,N=!0,V=!0){let W=0;if(E){let F=!1;if(T!==null){const at=T.texture.format;F=at===vh||at===gh||at===mh}if(F){const at=T.texture.type,_t=at===gi||at===ds||at===Yo||at===so||at===dh||at===ph,Rt=Ht.getClearColor(),Pt=Ht.getClearAlpha(),Bt=Rt.r,zt=Rt.g,Lt=Rt.b;_t?(d[0]=Bt,d[1]=zt,d[2]=Lt,d[3]=Pt,R.clearBufferuiv(R.COLOR,0,d)):(g[0]=Bt,g[1]=zt,g[2]=Lt,g[3]=Pt,R.clearBufferiv(R.COLOR,0,g))}else W|=R.COLOR_BUFFER_BIT}N&&(W|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),wt.dispose(),Qt.dispose(),yt.dispose(),S.dispose(),G.dispose(),Z.dispose(),ge.dispose(),D.dispose(),Ct.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Qh),Y.removeEventListener("sessionend",tu),Vi.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=It.autoReset,N=Et.enabled,V=Et.autoUpdate,W=Et.needsUpdate,F=Et.type;St(),It.autoReset=E,Et.enabled=N,Et.autoUpdate=V,Et.needsUpdate=W,Et.type=F}function bt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){const N=E.target;N.removeEventListener("dispose",ie),Ue(N)}function Ue(E){an(E),yt.remove(E)}function an(E){const N=yt.get(E).programs;N!==void 0&&(N.forEach(function(V){Ct.releaseProgram(V)}),E.isShaderMaterial&&Ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,W,F,at){N===null&&(N=qt);const _t=F.isMesh&&F.matrixWorld.determinant()<0,Rt=Lp(E,N,V,W,F);ht.setMaterial(W,_t);let Pt=V.index,Bt=1;if(W.wireframe===!0){if(Pt=tt.getWireframeAttribute(V),Pt===void 0)return;Bt=2}const zt=V.drawRange,Lt=V.attributes.position;let fe=zt.start*Bt,ve=(zt.start+zt.count)*Bt;at!==null&&(fe=Math.max(fe,at.start*Bt),ve=Math.min(ve,(at.start+at.count)*Bt)),Pt!==null?(fe=Math.max(fe,0),ve=Math.min(ve,Pt.count)):Lt!=null&&(fe=Math.max(fe,0),ve=Math.min(ve,Lt.count));const Te=ve-fe;if(Te<0||Te===1/0)return;ge.setup(F,W,Rt,V,Pt);let dn,ce=At;if(Pt!==null&&(dn=j.get(Pt),ce=te,ce.setIndex(dn)),F.isMesh)W.wireframe===!0?(ht.setLineWidth(W.wireframeLinewidth*Q()),ce.setMode(R.LINES)):ce.setMode(R.TRIANGLES);else if(F.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),ht.setLineWidth(Dt*Q()),F.isLineSegments?ce.setMode(R.LINES):F.isLineLoop?ce.setMode(R.LINE_LOOP):ce.setMode(R.LINE_STRIP)}else F.isPoints?ce.setMode(R.POINTS):F.isSprite&&ce.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Dt=F._multiDrawStarts,qe=F._multiDrawCounts,le=F._multiDrawCount,Un=Pt?j.get(Pt).bytesPerElement:1,Ts=yt.get(W).currentProgram.getUniforms();for(let pn=0;pn<le;pn++)Ts.setValue(R,"_gl_DrawID",pn),ce.render(Dt[pn]/Un,qe[pn])}else if(F.isInstancedMesh)ce.renderInstances(fe,Te,F.count);else if(V.isInstancedBufferGeometry){const Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,qe=Math.min(V.instanceCount,Dt);ce.renderInstances(fe,Te,qe)}else ce.render(fe,Te)};function re(E,N,V){E.transparent===!0&&E.side===Kn&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,ur(E,N,V),E.side=Oi,E.needsUpdate=!0,ur(E,N,V),E.side=Kn):ur(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),p=Qt.get(V),p.init(N),w.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==V&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const Rt=at[_t];re(Rt,V,F),W.add(Rt)}else re(at,V,F),W.add(at)}),w.pop(),p=null,W},this.compileAsync=function(E,N,V=null){const W=this.compile(E,N,V);return new Promise(F=>{function at(){if(W.forEach(function(_t){yt.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){F(E);return}setTimeout(at,10)}ct.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let cn=null;function ni(E){cn&&cn(E)}function Qh(){Vi.stop()}function tu(){Vi.start()}const Vi=new i0;Vi.setAnimationLoop(ni),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(E){cn=E,Y.setAnimationLoop(E),E===null?Vi.stop():Vi.start()},Y.addEventListener("sessionstart",Qh),Y.addEventListener("sessionend",tu),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,T),p=Qt.get(E,w.length),p.init(N),w.push(p),dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),oe.setFromProjectionMatrix(dt),ot=this.localClippingEnabled,K=rt.init(this.clippingPlanes,ot),_=wt.get(E,m.length),_.init(),m.push(_),Y.enabled===!0&&Y.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Ba(at,N,-1/0,x.sortObjects)}Ba(E,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,mt),jt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,jt&&Ht.addToRenderList(_,E),this.info.render.frame++,K===!0&&rt.beginShadows();const V=p.state.shadowsArray;Et.render(V,E,N),K===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(p.setupLights(),N.isArrayCamera){const at=N.cameras;if(F.length>0)for(let _t=0,Rt=at.length;_t<Rt;_t++){const Pt=at[_t];nu(W,F,E,Pt)}jt&&Ht.render(E);for(let _t=0,Rt=at.length;_t<Rt;_t++){const Pt=at[_t];eu(_,E,Pt,Pt.viewport)}}else F.length>0&&nu(W,F,E,N),jt&&Ht.render(E),eu(_,E,N);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,N),ge.resetDefaultState(),L=-1,z=null,w.pop(),w.length>0?(p=w[w.length-1],K===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ba(E,N,V,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||oe.intersectsSprite(E)){W&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(dt);const _t=Z.update(E),Rt=E.material;Rt.visible&&_.push(E,_t,Rt,V,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||oe.intersectsObject(E))){const _t=Z.update(E),Rt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(dt)),Array.isArray(Rt)){const Pt=_t.groups;for(let Bt=0,zt=Pt.length;Bt<zt;Bt++){const Lt=Pt[Bt],fe=Rt[Lt.materialIndex];fe&&fe.visible&&_.push(E,_t,fe,V,Ot.z,Lt)}}else Rt.visible&&_.push(E,_t,Rt,V,Ot.z,null)}}const at=E.children;for(let _t=0,Rt=at.length;_t<Rt;_t++)Ba(at[_t],N,V,W)}function eu(E,N,V,W){const F=E.opaque,at=E.transmissive,_t=E.transparent;p.setupLightsView(V),K===!0&&rt.setGlobalState(x.clippingPlanes,V),W&&ht.viewport(v.copy(W)),F.length>0&&hr(F,N,V),at.length>0&&hr(at,N,V),_t.length>0&&hr(_t,N,V),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function nu(E,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new ps(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?sr:gi,minFilter:hi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const at=p.state.transmissionRenderTarget[W.id],_t=W.viewport||v;at.setSize(_t.z,_t.w);const Rt=x.getRenderTarget();x.setRenderTarget(at),x.getClearColor(k),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),jt&&Ht.render(V);const Pt=x.toneMapping;x.toneMapping=Ui;const Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),K===!0&&rt.setGlobalState(x.clippingPlanes,W),hr(E,V,W),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),ct.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Lt=0,fe=N.length;Lt<fe;Lt++){const ve=N[Lt],Te=ve.object,dn=ve.geometry,ce=ve.material,Dt=ve.group;if(ce.side===Kn&&Te.layers.test(W.layers)){const qe=ce.side;ce.side=rn,ce.needsUpdate=!0,iu(Te,V,W,dn,ce,Dt),ce.side=qe,ce.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}x.setRenderTarget(Rt),x.setClearColor(k,O),Bt!==void 0&&(W.viewport=Bt),x.toneMapping=Pt}function hr(E,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let F=0,at=E.length;F<at;F++){const _t=E[F],Rt=_t.object,Pt=_t.geometry,Bt=W===null?_t.material:W,zt=_t.group;Rt.layers.test(V.layers)&&iu(Rt,N,V,Pt,Bt,zt)}}function iu(E,N,V,W,F,at){E.onBeforeRender(x,N,V,W,F,at),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(x,N,V,W,E,at),F.transparent===!0&&F.side===Kn&&F.forceSinglePass===!1?(F.side=rn,F.needsUpdate=!0,x.renderBufferDirect(V,N,W,F,E,at),F.side=Oi,F.needsUpdate=!0,x.renderBufferDirect(V,N,W,F,E,at),F.side=Kn):x.renderBufferDirect(V,N,W,F,E,at),E.onAfterRender(x,N,V,W,F,at)}function ur(E,N,V){N.isScene!==!0&&(N=qt);const W=yt.get(E),F=p.state.lights,at=p.state.shadowsArray,_t=F.state.version,Rt=Ct.getParameters(E,F.state,at,N,V),Pt=Ct.getProgramCacheKey(Rt);let Bt=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?G:S).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",ie),Bt=new Map,W.programs=Bt);let zt=Bt.get(Pt);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===_t)return ou(E,Rt),zt}else Rt.uniforms=Ct.getUniforms(E),E.onBeforeCompile(Rt,x),zt=Ct.acquireProgram(Rt,Pt),Bt.set(Pt,zt),W.uniforms=Rt.uniforms;const Lt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Lt.clippingPlanes=rt.uniform),ou(E,Rt),W.needsLights=Dp(E),W.lightsStateVersion=_t,W.needsLights&&(Lt.ambientLightColor.value=F.state.ambient,Lt.lightProbe.value=F.state.probe,Lt.directionalLights.value=F.state.directional,Lt.directionalLightShadows.value=F.state.directionalShadow,Lt.spotLights.value=F.state.spot,Lt.spotLightShadows.value=F.state.spotShadow,Lt.rectAreaLights.value=F.state.rectArea,Lt.ltc_1.value=F.state.rectAreaLTC1,Lt.ltc_2.value=F.state.rectAreaLTC2,Lt.pointLights.value=F.state.point,Lt.pointLightShadows.value=F.state.pointShadow,Lt.hemisphereLights.value=F.state.hemi,Lt.directionalShadowMap.value=F.state.directionalShadowMap,Lt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Lt.spotShadowMap.value=F.state.spotShadowMap,Lt.spotLightMatrix.value=F.state.spotLightMatrix,Lt.spotLightMap.value=F.state.spotLightMap,Lt.pointShadowMap.value=F.state.pointShadowMap,Lt.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function su(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ta.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function ou(E,N){const V=yt.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Lp(E,N,V,W,F){N.isScene!==!0&&(N=qt),A.resetTextureUnits();const at=N.fog,_t=W.isMeshStandardMaterial?N.environment:null,Rt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hi,Pt=(W.isMeshStandardMaterial?G:S).get(W.envMap||_t),Bt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Lt=!!V.morphAttributes.position,fe=!!V.morphAttributes.normal,ve=!!V.morphAttributes.color;let Te=Ui;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Te=x.toneMapping);const dn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=dn!==void 0?dn.length:0,Dt=yt.get(W),qe=p.state.lights;if(K===!0&&(ot===!0||E!==z)){const En=E===z&&W.id===L;rt.setState(W,E,En)}let le=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==qe.state.version||Dt.outputColorSpace!==Rt||F.isBatchedMesh&&Dt.batching===!1||!F.isBatchedMesh&&Dt.batching===!0||F.isBatchedMesh&&Dt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Dt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Dt.instancing===!1||!F.isInstancedMesh&&Dt.instancing===!0||F.isSkinnedMesh&&Dt.skinning===!1||!F.isSkinnedMesh&&Dt.skinning===!0||F.isInstancedMesh&&Dt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Dt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Dt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Dt.instancingMorph===!1&&F.morphTexture!==null||Dt.envMap!==Pt||W.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==Bt||Dt.vertexTangents!==zt||Dt.morphTargets!==Lt||Dt.morphNormals!==fe||Dt.morphColors!==ve||Dt.toneMapping!==Te||Dt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Dt.__version=W.version);let Un=Dt.currentProgram;le===!0&&(Un=ur(W,N,F));let Ts=!1,pn=!1,za=!1;const Ce=Un.getUniforms(),xi=Dt.uniforms;if(ht.useProgram(Un.program)&&(Ts=!0,pn=!0,za=!0),W.id!==L&&(L=W.id,pn=!0),Ts||z!==E){st.reverseDepthBuffer?(Tt.copy(E.projectionMatrix),zm(Tt),Hm(Tt),Ce.setValue(R,"projectionMatrix",Tt)):Ce.setValue(R,"projectionMatrix",E.projectionMatrix),Ce.setValue(R,"viewMatrix",E.matrixWorldInverse);const En=Ce.map.cameraPosition;En!==void 0&&En.setValue(R,kt.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&Ce.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ce.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,pn=!0,za=!0)}if(F.isSkinnedMesh){Ce.setOptional(R,F,"bindMatrix"),Ce.setOptional(R,F,"bindMatrixInverse");const En=F.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ce.setValue(R,"boneTexture",En.boneTexture,A))}F.isBatchedMesh&&(Ce.setOptional(R,F,"batchingTexture"),Ce.setValue(R,"batchingTexture",F._matricesTexture,A),Ce.setOptional(R,F,"batchingIdTexture"),Ce.setValue(R,"batchingIdTexture",F._indirectTexture,A),Ce.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&Ce.setValue(R,"batchingColorTexture",F._colorsTexture,A));const Ha=V.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0)&&Gt.update(F,V,Un),(pn||Dt.receiveShadow!==F.receiveShadow)&&(Dt.receiveShadow=F.receiveShadow,Ce.setValue(R,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xi.envMap.value=Pt,xi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(xi.envMapIntensity.value=N.environmentIntensity),pn&&(Ce.setValue(R,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Ip(xi,za),at&&W.fog===!0&&ut.refreshFogUniforms(xi,at),ut.refreshMaterialUniforms(xi,W,nt,H,p.state.transmissionRenderTarget[E.id]),ta.upload(R,su(Dt),xi,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ta.upload(R,su(Dt),xi,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ce.setValue(R,"center",F.center),Ce.setValue(R,"modelViewMatrix",F.modelViewMatrix),Ce.setValue(R,"normalMatrix",F.normalMatrix),Ce.setValue(R,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const En=W.uniformsGroups;for(let Ga=0,Up=En.length;Ga<Up;Ga++){const ru=En[Ga];D.update(ru,Un),D.bind(ru,Un)}}return Un}function Ip(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Dp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,V){yt.get(E.texture).__webglTexture=N,yt.get(E.depthTexture).__webglTexture=V;const W=yt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const V=yt.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,V=0){T=E,I=N,C=V;let W=!0,F=null,at=!1,_t=!1;if(E){const Pt=yt.get(E);if(Pt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(R.FRAMEBUFFER,null),W=!1;else if(Pt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Pt.__hasExternalTextures)A.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Lt=E.depthTexture;if(Pt.__boundDepthTexture!==Lt){if(Lt!==null&&yt.has(Lt)&&(E.width!==Lt.image.width||E.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(_t=!0);const zt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?F=zt[N][V]:F=zt[N],at=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?F=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[V]:F=zt,v.copy(E.viewport),M.copy(E.scissor),U=E.scissorTest}else v.copy(gt).multiplyScalar(nt).floor(),M.copy(Mt).multiplyScalar(nt).floor(),U=Zt;if(ht.bindFramebuffer(R.FRAMEBUFFER,F)&&W&&ht.drawBuffers(E,F),ht.viewport(v),ht.scissor(M),ht.setScissorTest(U),at){const Pt=yt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,V)}else if(_t){const Pt=yt.get(E.texture),Bt=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pt.__webglTexture,V||0,Bt)}L=-1},this.readRenderTargetPixels=function(E,N,V,W,F,at,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Rt=Rt[_t]),Rt){ht.bindFramebuffer(R.FRAMEBUFFER,Rt);try{const Pt=E.texture,Bt=Pt.format,zt=Pt.type;if(!st.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&V>=0&&V<=E.height-F&&R.readPixels(N,V,W,F,Yt.convert(Bt),Yt.convert(zt),at)}finally{const Pt=T!==null?yt.get(T).__webglFramebuffer:null;ht.bindFramebuffer(R.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,W,F,at,_t){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Rt=Rt[_t]),Rt){const Pt=E.texture,Bt=Pt.format,zt=Pt.type;if(!st.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-W&&V>=0&&V<=E.height-F){ht.bindFramebuffer(R.FRAMEBUFFER,Rt);const Lt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Lt),R.bufferData(R.PIXEL_PACK_BUFFER,at.byteLength,R.STREAM_READ),R.readPixels(N,V,W,F,Yt.convert(Bt),Yt.convert(zt),0);const fe=T!==null?yt.get(T).__webglFramebuffer:null;ht.bindFramebuffer(R.FRAMEBUFFER,fe);const ve=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Bm(R,ve,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Lt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,at),R.deleteBuffer(Lt),R.deleteSync(ve),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,V=0){E.isTexture!==!0&&(Qr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(E.image.width*W),at=Math.floor(E.image.height*W),_t=N!==null?N.x:0,Rt=N!==null?N.y:0;A.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,_t,Rt,F,at),ht.unbindTexture()},this.copyTextureToTexture=function(E,N,V=null,W=null,F=0){E.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let at,_t,Rt,Pt,Bt,zt;V!==null?(at=V.max.x-V.min.x,_t=V.max.y-V.min.y,Rt=V.min.x,Pt=V.min.y):(at=E.image.width,_t=E.image.height,Rt=0,Pt=0),W!==null?(Bt=W.x,zt=W.y):(Bt=0,zt=0);const Lt=Yt.convert(N.format),fe=Yt.convert(N.type);A.setTexture2D(N,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const ve=R.getParameter(R.UNPACK_ROW_LENGTH),Te=R.getParameter(R.UNPACK_IMAGE_HEIGHT),dn=R.getParameter(R.UNPACK_SKIP_PIXELS),ce=R.getParameter(R.UNPACK_SKIP_ROWS),Dt=R.getParameter(R.UNPACK_SKIP_IMAGES),qe=E.isCompressedTexture?E.mipmaps[F]:E.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,qe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pt),E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,Bt,zt,at,_t,Lt,fe,qe.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,Bt,zt,qe.width,qe.height,Lt,qe.data):R.texSubImage2D(R.TEXTURE_2D,F,Bt,zt,at,_t,Lt,fe,qe),R.pixelStorei(R.UNPACK_ROW_LENGTH,ve),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Te),R.pixelStorei(R.UNPACK_SKIP_PIXELS,dn),R.pixelStorei(R.UNPACK_SKIP_ROWS,ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Dt),F===0&&N.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V=null,W=null,F=0){E.isTexture!==!0&&(Qr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0);let at,_t,Rt,Pt,Bt,zt,Lt,fe,ve;const Te=E.isCompressedTexture?E.mipmaps[F]:E.image;V!==null?(at=V.max.x-V.min.x,_t=V.max.y-V.min.y,Rt=V.max.z-V.min.z,Pt=V.min.x,Bt=V.min.y,zt=V.min.z):(at=Te.width,_t=Te.height,Rt=Te.depth,Pt=0,Bt=0,zt=0),W!==null?(Lt=W.x,fe=W.y,ve=W.z):(Lt=0,fe=0,ve=0);const dn=Yt.convert(N.format),ce=Yt.convert(N.type);let Dt;if(N.isData3DTexture)A.setTexture3D(N,0),Dt=R.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),Dt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const qe=R.getParameter(R.UNPACK_ROW_LENGTH),le=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Un=R.getParameter(R.UNPACK_SKIP_PIXELS),Ts=R.getParameter(R.UNPACK_SKIP_ROWS),pn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Te.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Te.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zt),E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Dt,F,Lt,fe,ve,at,_t,Rt,dn,ce,Te.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Dt,F,Lt,fe,ve,at,_t,Rt,dn,Te.data):R.texSubImage3D(Dt,F,Lt,fe,ve,at,_t,Rt,dn,ce,Te),R.pixelStorei(R.UNPACK_ROW_LENGTH,qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,le),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Un),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ts),R.pixelStorei(R.UNPACK_SKIP_IMAGES,pn),F===0&&N.generateMipmaps&&R.generateMipmap(Dt),ht.unbindTexture()},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ht.unbindTexture()},this.resetState=function(){I=0,C=0,T=null,ht.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xh?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===Ta?"display-p3":"srgb"}}class bh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new pt(t),this.near=e,this.far=i}clone(){return new bh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class h0 extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ra extends Qe{constructor(t=null,e=1,i=1,s,o,r,a,c,l=on,h=on,u,f){super(null,r,a,c,l,h,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ef extends Re{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hs=new ae,nf=new ae,Dr=[],sf=new Dn,J_=new ae,yo=new Xt,So=new uo;class wh extends Xt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ef(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,J_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hs),sf.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(sf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new uo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Hs),So.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(So)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,r=t*o+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),t.ray.intersectsSphere(So)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Hs),nf.multiplyMatrices(i,Hs),yo.matrixWorld=nf,yo.raycast(t,Dr);for(let r=0,a=Dr.length;r<a;r++){const c=Dr[r];c.instanceId=o,c.object=this,e.push(c)}Dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ef(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ra(new Float32Array(s*this.count),s,this.count,Ea,jn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<i.length;l++)r+=i[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Eh extends ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const of=new ae,Bl=new Kd,Ur=new uo,Nr=new P;class Th extends we{constructor(t=new De,e=new Eh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=o,t.ray.intersectsSphere(Ur)===!1)return;of.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(of);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=f,_=d;g<_;g++){const p=l.getX(g);Nr.fromBufferAttribute(u,p),rf(Nr,p,c,s,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let g=f,_=d;g<_;g++)Nr.fromBufferAttribute(u,g),rf(Nr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function rf(n,t,e,i,s,o,r){const a=Bl.distanceSqToPoint(n);if(a<e){const c=new P;Bl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ms extends Qe{constructor(t,e,i,s,o,r,a,c,l){super(t,e,i,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const h=i[s],f=i[s+1]-h,d=(r-h)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new it:new P);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new P,s=[],o=[],r=[],a=new P,c=new ae;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}o[0]=new P,r[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ve(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,g))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Ve(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ah extends ei{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Q_ extends Ah{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Rh(){let n=0,t=0,e=0,i=0;function s(o,r,a,c){n=o,t=a,e=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,d*=h,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Fr=new P,_c=new Rh,xc=new Rh,Mc=new Rh;class tx extends ei{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Fr.subVectors(s[0],s[1]).add(s[0]),l=Fr);const u=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Fr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),_c.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,p),xc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,p),Mc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(_c.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),xc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Mc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(_c.calc(c),xc.calc(c),Mc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function af(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+o+r)*c+(-3*e+3*i-2*o-r)*a+o*n+e}function ex(n,t){const e=1-n;return e*e*t}function nx(n,t){return 2*(1-n)*n*t}function ix(n,t){return n*n*t}function ko(n,t,e,i){return ex(n,t)+nx(n,e)+ix(n,i)}function sx(n,t){const e=1-n;return e*e*e*t}function ox(n,t){const e=1-n;return 3*e*e*n*t}function rx(n,t){return 3*(1-n)*n*n*t}function ax(n,t){return n*n*n*t}function Bo(n,t,e,i,s){return sx(n,t)+ox(n,e)+rx(n,i)+ax(n,s)}class u0 extends ei{constructor(t=new it,e=new it,i=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new it){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Bo(t,s.x,o.x,r.x,a.x),Bo(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cx extends ei{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Bo(t,s.x,o.x,r.x,a.x),Bo(t,s.y,o.y,r.y,a.y),Bo(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class f0 extends ei{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lx extends ei{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d0 extends ei{constructor(t=new it,e=new it,i=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new it){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ko(t,s.x,o.x,r.x),ko(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hx extends ei{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(ko(t,s.x,o.x,r.x),ko(t,s.y,o.y,r.y),ko(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class p0 extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return i.set(af(a,c.x,l.x,h.x,u.x),af(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var zl=Object.freeze({__proto__:null,ArcCurve:Q_,CatmullRomCurve3:tx,CubicBezierCurve:u0,CubicBezierCurve3:cx,EllipseCurve:Ah,LineCurve:f0,LineCurve3:lx,QuadraticBezierCurve:d0,QuadraticBezierCurve3:hx,SplineCurve:p0});class ux extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new zl[s.type]().fromJSON(s))}return this}}class Hl extends ux{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new f0(this.currentPoint.clone(),new it(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new d0(this.currentPoint.clone(),new it(t,e),new it(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new u0(this.currentPoint.clone(),new it(t,e),new it(i,s),new it(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new p0(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,o,r,a,c),this}absellipse(t,e,i,s,o,r,a,c){const l=new Ah(t,e,i,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ch extends De{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new P,f=new it,d=new P,g=new P,_=new P;let p=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let w=0;w<=e;w++){const x=i+w*h*s,b=Math.sin(x),I=Math.cos(x);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*b,u.y=t[C].y,u.z=t[C].x*I,r.push(u.x,u.y,u.z),f.x=w/e,f.y=C/(t.length-1),a.push(f.x,f.y);const T=c[3*C+0]*b,L=c[3*C+1],z=c[3*C+0]*I;l.push(T,L,z)}}for(let w=0;w<e;w++)for(let x=0;x<t.length-1;x++){const b=x+w*t.length,I=b,C=b+t.length,T=b+t.length+1,L=b+1;o.push(I,C,L),o.push(T,L,C)}this.setIndex(o),this.setAttribute("position",new me(r,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ch(t.points,t.segments,t.phiStart,t.phiLength)}}class as extends De{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new P,h=new it;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Gi extends De{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],d=[];let g=0;const _=[],p=i/2;let m=0;w(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(d,2));function w(){const b=new P,I=new P;let C=0;const T=(e-t)/i;for(let L=0;L<=o;L++){const z=[],v=L/o,M=v*(e-t)+t;for(let U=0;U<=s;U++){const k=U/s,O=k*c+a,X=Math.sin(O),H=Math.cos(O);I.x=M*X,I.y=-v*i+p,I.z=M*H,u.push(I.x,I.y,I.z),b.set(X,T,H).normalize(),f.push(b.x,b.y,b.z),d.push(k,1-v),z.push(g++)}_.push(z)}for(let L=0;L<s;L++)for(let z=0;z<o;z++){const v=_[z][L],M=_[z+1][L],U=_[z+1][L+1],k=_[z][L+1];t>0&&(h.push(v,M,k),C+=3),e>0&&(h.push(M,U,k),C+=3)}l.addGroup(m,C,0),m+=C}function x(b){const I=g,C=new it,T=new P;let L=0;const z=b===!0?t:e,v=b===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),g++;const M=g;for(let U=0;U<=s;U++){const O=U/s*c+a,X=Math.cos(O),H=Math.sin(O);T.x=z*H,T.y=p*v,T.z=z*X,u.push(T.x,T.y,T.z),f.push(0,v,0),C.x=X*.5+.5,C.y=H*.5*v+.5,d.push(C.x,C.y),g++}for(let U=0;U<s;U++){const k=I+U,O=M+U;b===!0?h.push(O,O+1,k):h.push(O+1,O,k),L+=3}l.addGroup(m,L,b===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ph extends Gi{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ph(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lh extends De{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),l(i),h(),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(o.slice(),3)),this.setAttribute("uv",new me(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const x=new P,b=new P,I=new P;for(let C=0;C<e.length;C+=3)d(e[C+0],x),d(e[C+1],b),d(e[C+2],I),c(x,b,I,w)}function c(w,x,b,I){const C=I+1,T=[];for(let L=0;L<=C;L++){T[L]=[];const z=w.clone().lerp(b,L/C),v=x.clone().lerp(b,L/C),M=C-L;for(let U=0;U<=M;U++)U===0&&L===C?T[L][U]=z:T[L][U]=z.clone().lerp(v,U/M)}for(let L=0;L<C;L++)for(let z=0;z<2*(C-L)-1;z++){const v=Math.floor(z/2);z%2===0?(f(T[L][v+1]),f(T[L+1][v]),f(T[L][v])):(f(T[L][v+1]),f(T[L+1][v+1]),f(T[L+1][v]))}}function l(w){const x=new P;for(let b=0;b<o.length;b+=3)x.x=o[b+0],x.y=o[b+1],x.z=o[b+2],x.normalize().multiplyScalar(w),o[b+0]=x.x,o[b+1]=x.y,o[b+2]=x.z}function h(){const w=new P;for(let x=0;x<o.length;x+=3){w.x=o[x+0],w.y=o[x+1],w.z=o[x+2];const b=p(w)/2/Math.PI+.5,I=m(w)/Math.PI+.5;r.push(b,1-I)}g(),u()}function u(){for(let w=0;w<r.length;w+=6){const x=r[w+0],b=r[w+2],I=r[w+4],C=Math.max(x,b,I),T=Math.min(x,b,I);C>.9&&T<.1&&(x<.2&&(r[w+0]+=1),b<.2&&(r[w+2]+=1),I<.2&&(r[w+4]+=1))}}function f(w){o.push(w.x,w.y,w.z)}function d(w,x){const b=w*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){const w=new P,x=new P,b=new P,I=new P,C=new it,T=new it,L=new it;for(let z=0,v=0;z<o.length;z+=9,v+=6){w.set(o[z+0],o[z+1],o[z+2]),x.set(o[z+3],o[z+4],o[z+5]),b.set(o[z+6],o[z+7],o[z+8]),C.set(r[v+0],r[v+1]),T.set(r[v+2],r[v+3]),L.set(r[v+4],r[v+5]),I.copy(w).add(x).add(b).divideScalar(3);const M=p(I);_(C,v+0,w,M),_(T,v+2,x,M),_(L,v+4,b,M)}}function _(w,x,b,I){I<0&&w.x===1&&(r[x]=w.x-1),b.x===0&&b.z===0&&(r[x]=I/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.vertices,t.indices,t.radius,t.details)}}class Ih extends Hl{constructor(t){super(t),this.uuid=bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Hl().fromJSON(s))}return this}}const fx={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let o=m0(n,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,d;if(i&&(o=vx(n,t,o,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return $o(o,r,e,a,c,d,0),r}};function m0(n,t,e,i,s){let o,r;if(s===Rx(n,t,e,i)>0)for(o=t;o<e;o+=i)r=cf(o,n[o],n[o+1],r);else for(o=e-i;o>=t;o-=i)r=cf(o,n[o],n[o+1],r);return r&&Ca(r,r.next)&&(jo(r),r=r.next),r}function gs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ca(e,e.next)||Se(e.prev,e,e.next)===0)){if(jo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function $o(n,t,e,i,s,o,r){if(!n)return;!r&&o&&Sx(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?px(n,i,s,o):dx(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),jo(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=mx(gs(n),t,e),$o(n,t,e,i,s,o,2)):r===2&&gx(n,t,e,i,s,o):$o(gs(n),t,e,i,s,o,1);break}}}function dx(n){const t=n.prev,e=n,i=n.next;if(Se(t,e,i)>=0)return!1;const s=t.x,o=e.x,r=i.x,a=t.y,c=e.y,l=i.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ks(s,a,o,c,r,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function px(n,t,e,i){const s=n.prev,o=n,r=n.next;if(Se(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,f=r.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,m=Gl(d,g,t,e,i),w=Gl(_,p,t,e,i);let x=n.prevZ,b=n.nextZ;for(;x&&x.z>=m&&b&&b.z<=w;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==r&&Ks(a,h,c,u,l,f,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=d&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==r&&Ks(a,h,c,u,l,f,b.x,b.y)&&Se(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==r&&Ks(a,h,c,u,l,f,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=w;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==r&&Ks(a,h,c,u,l,f,b.x,b.y)&&Se(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function mx(n,t,e){let i=n;do{const s=i.prev,o=i.next.next;!Ca(s,o)&&g0(s,i,i.next,o)&&Ko(s,o)&&Ko(o,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(o.i/e|0),jo(i),jo(i.next),i=n=o),i=i.next}while(i!==n);return gs(i)}function gx(n,t,e,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Ex(r,a)){let c=v0(r,a);r=gs(r,r.next),c=gs(c,c.next),$o(r,t,e,i,s,o,0),$o(c,t,e,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function vx(n,t,e,i){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*i,c=o<r-1?t[o+1]*i:n.length,l=m0(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(wx(l));for(s.sort(_x),o=0;o<s.length;o++)e=xx(s[o],e);return e}function _x(n,t){return n.x-t.x}function xx(n,t){const e=Mx(n,t);if(!e)return t;const i=v0(e,n);return gs(i,i.next),gs(e,e.next)}function Mx(n,t){let e=t,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&Ks(r<l?o:i,r,c,l,r<l?i:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Ko(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&yx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function yx(n,t){return Se(n.prev,n,t.prev)<0&&Se(t.next,n,n.next)<0}function Sx(n,t,e,i){let s=n;do s.z===0&&(s.z=Gl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,bx(s)}function bx(n){let t,e,i,s,o,r,a,c,l=1;do{for(e=n,n=null,o=null,r=0;e;){for(r++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;e=i}o.nextZ=null,l*=2}while(r>1);return n}function Gl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function wx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ks(n,t,e,i,s,o,r,a){return(s-r)*(t-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(i-a)}function Ex(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Tx(n,t)&&(Ko(n,t)&&Ko(t,n)&&Ax(n,t)&&(Se(n.prev,n,t.prev)||Se(n,t.prev,t))||Ca(n,t)&&Se(n.prev,n,n.next)>0&&Se(t.prev,t,t.next)>0)}function Se(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ca(n,t){return n.x===t.x&&n.y===t.y}function g0(n,t,e,i){const s=kr(Se(n,t,e)),o=kr(Se(n,t,i)),r=kr(Se(e,i,n)),a=kr(Se(e,i,t));return!!(s!==o&&r!==a||s===0&&Or(n,e,t)||o===0&&Or(n,i,t)||r===0&&Or(e,n,i)||a===0&&Or(e,t,i))}function Or(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function kr(n){return n>0?1:n<0?-1:0}function Tx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&g0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ko(n,t){return Se(n.prev,n,n.next)<0?Se(n,t,n.next)>=0&&Se(n,n.prev,t)>=0:Se(n,t,n.prev)<0||Se(n,n.next,t)<0}function Ax(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,o=(n.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function v0(n,t){const e=new Vl(n.i,n.x,n.y),i=new Vl(t.i,t.x,t.y),s=n.next,o=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,o.next=i,i.prev=o,i}function cf(n,t,e,i){const s=new Vl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function jo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Rx(n,t,e,i){let s=0;for(let o=t,r=e-i;o<e;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class zo{static area(t){const e=t.length;let i=0;for(let s=e-1,o=0;o<e;s=o++)i+=t[s].x*t[o].y-t[o].x*t[s].y;return i*.5}static isClockWise(t){return zo.area(t)<0}static triangulateShape(t,e){const i=[],s=[],o=[];lf(t),hf(i,t);let r=t.length;e.forEach(lf);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,hf(i,e[c]);const a=fx.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function lf(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function hf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Pa extends De{constructor(t=new Ih([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Cx;let x,b=!1,I,C,T,L;m&&(x=m.getSpacedPoints(h),b=!0,f=!1,I=m.computeFrenetFrames(h,!1),C=new P,T=new P,L=new P),f||(p=0,d=0,g=0,_=0);const z=a.extractPoints(l);let v=z.shape;const M=z.holes;if(!zo.isClockWise(v)){v=v.reverse();for(let Q=0,R=M.length;Q<R;Q++){const lt=M[Q];zo.isClockWise(lt)&&(M[Q]=lt.reverse())}}const k=zo.triangulateShape(v,M),O=v;for(let Q=0,R=M.length;Q<R;Q++){const lt=M[Q];v=v.concat(lt)}function X(Q,R,lt){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(R,lt)}const H=v.length,nt=k.length;function q(Q,R,lt){let ct,st,ht;const It=Q.x-R.x,yt=Q.y-R.y,A=lt.x-Q.x,S=lt.y-Q.y,G=It*It+yt*yt,j=It*S-yt*A;if(Math.abs(j)>Number.EPSILON){const tt=Math.sqrt(G),Z=Math.sqrt(A*A+S*S),Ct=R.x-yt/tt,ut=R.y+It/tt,wt=lt.x-S/Z,Qt=lt.y+A/Z,rt=((wt-Ct)*S-(Qt-ut)*A)/(It*S-yt*A);ct=Ct+It*rt-Q.x,st=ut+yt*rt-Q.y;const Et=ct*ct+st*st;if(Et<=2)return new it(ct,st);ht=Math.sqrt(Et/2)}else{let tt=!1;It>Number.EPSILON?A>Number.EPSILON&&(tt=!0):It<-Number.EPSILON?A<-Number.EPSILON&&(tt=!0):Math.sign(yt)===Math.sign(S)&&(tt=!0),tt?(ct=-yt,st=It,ht=Math.sqrt(G)):(ct=It,st=yt,ht=Math.sqrt(G/2))}return new it(ct/ht,st/ht)}const mt=[];for(let Q=0,R=O.length,lt=R-1,ct=Q+1;Q<R;Q++,lt++,ct++)lt===R&&(lt=0),ct===R&&(ct=0),mt[Q]=q(O[Q],O[lt],O[ct]);const gt=[];let Mt,Zt=mt.concat();for(let Q=0,R=M.length;Q<R;Q++){const lt=M[Q];Mt=[];for(let ct=0,st=lt.length,ht=st-1,It=ct+1;ct<st;ct++,ht++,It++)ht===st&&(ht=0),It===st&&(It=0),Mt[ct]=q(lt[ct],lt[ht],lt[It]);gt.push(Mt),Zt=Zt.concat(Mt)}for(let Q=0;Q<p;Q++){const R=Q/p,lt=d*Math.cos(R*Math.PI/2),ct=g*Math.sin(R*Math.PI/2)+_;for(let st=0,ht=O.length;st<ht;st++){const It=X(O[st],mt[st],ct);dt(It.x,It.y,-lt)}for(let st=0,ht=M.length;st<ht;st++){const It=M[st];Mt=gt[st];for(let yt=0,A=It.length;yt<A;yt++){const S=X(It[yt],Mt[yt],ct);dt(S.x,S.y,-lt)}}}const oe=g+_;for(let Q=0;Q<H;Q++){const R=f?X(v[Q],Zt[Q],oe):v[Q];b?(T.copy(I.normals[0]).multiplyScalar(R.x),C.copy(I.binormals[0]).multiplyScalar(R.y),L.copy(x[0]).add(T).add(C),dt(L.x,L.y,L.z)):dt(R.x,R.y,0)}for(let Q=1;Q<=h;Q++)for(let R=0;R<H;R++){const lt=f?X(v[R],Zt[R],oe):v[R];b?(T.copy(I.normals[Q]).multiplyScalar(lt.x),C.copy(I.binormals[Q]).multiplyScalar(lt.y),L.copy(x[Q]).add(T).add(C),dt(L.x,L.y,L.z)):dt(lt.x,lt.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){const R=Q/p,lt=d*Math.cos(R*Math.PI/2),ct=g*Math.sin(R*Math.PI/2)+_;for(let st=0,ht=O.length;st<ht;st++){const It=X(O[st],mt[st],ct);dt(It.x,It.y,u+lt)}for(let st=0,ht=M.length;st<ht;st++){const It=M[st];Mt=gt[st];for(let yt=0,A=It.length;yt<A;yt++){const S=X(It[yt],Mt[yt],ct);b?dt(S.x,S.y+x[h-1].y,x[h-1].x+lt):dt(S.x,S.y,u+lt)}}}K(),ot();function K(){const Q=s.length/3;if(f){let R=0,lt=H*R;for(let ct=0;ct<nt;ct++){const st=k[ct];kt(st[2]+lt,st[1]+lt,st[0]+lt)}R=h+p*2,lt=H*R;for(let ct=0;ct<nt;ct++){const st=k[ct];kt(st[0]+lt,st[1]+lt,st[2]+lt)}}else{for(let R=0;R<nt;R++){const lt=k[R];kt(lt[2],lt[1],lt[0])}for(let R=0;R<nt;R++){const lt=k[R];kt(lt[0]+H*h,lt[1]+H*h,lt[2]+H*h)}}i.addGroup(Q,s.length/3-Q,0)}function ot(){const Q=s.length/3;let R=0;Tt(O,R),R+=O.length;for(let lt=0,ct=M.length;lt<ct;lt++){const st=M[lt];Tt(st,R),R+=st.length}i.addGroup(Q,s.length/3-Q,1)}function Tt(Q,R){let lt=Q.length;for(;--lt>=0;){const ct=lt;let st=lt-1;st<0&&(st=Q.length-1);for(let ht=0,It=h+p*2;ht<It;ht++){const yt=H*ht,A=H*(ht+1),S=R+ct+yt,G=R+st+yt,j=R+st+A,tt=R+ct+A;Ot(S,G,j,tt)}}}function dt(Q,R,lt){c.push(Q),c.push(R),c.push(lt)}function kt(Q,R,lt){qt(Q),qt(R),qt(lt);const ct=s.length/3,st=w.generateTopUV(i,s,ct-3,ct-2,ct-1);jt(st[0]),jt(st[1]),jt(st[2])}function Ot(Q,R,lt,ct){qt(Q),qt(R),qt(ct),qt(R),qt(lt),qt(ct);const st=s.length/3,ht=w.generateSideWallUV(i,s,st-6,st-3,st-2,st-1);jt(ht[0]),jt(ht[1]),jt(ht[3]),jt(ht[1]),jt(ht[2]),jt(ht[3])}function qt(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function jt(Q){o.push(Q.x),o.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Px(e,i,t)}static fromJSON(t,e){const i=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new zl[s.type]().fromJSON(s)),new Pa(i,t.options)}}const Cx={generateTopUV:function(n,t,e,i,s){const o=t[e*3],r=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new it(o,r),new it(a,c),new it(l,h)]},generateSideWallUV:function(n,t,e,i,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[o*3],p=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new it(r,1-c),new it(l,1-u),new it(f,1-g),new it(_,1-m)]:[new it(a,1-c),new it(h,1-u),new it(d,1-g),new it(p,1-m)]}};function Px(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];e.shapes.push(o.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class or extends Lh{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new or(t.radius,t.detail)}}class Wn extends De{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const w=[],x=m/i;let b=0;m===0&&r===0?b=.5/e:m===i&&c===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){const C=I/e;u.x=-t*Math.cos(s+C*o)*Math.sin(r+x*a),u.y=t*Math.cos(r+x*a),u.z=t*Math.sin(s+C*o)*Math.sin(r+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(C+b,1-x),w.push(l++)}h.push(w)}for(let m=0;m<i;m++)for(let w=0;w<e;w++){const x=h[m][w+1],b=h[m][w],I=h[m+1][w],C=h[m+1][w+1];(m!==0||r>0)&&d.push(x,b,C),(m!==i-1||c<Math.PI)&&d.push(b,I,C)}this.setIndex(d),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class La extends De{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*o,p=d/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,w=(s+1)*d+g;r.push(_,p,w),r.push(p,m,w)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _0 extends ws{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xn extends ws{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dh extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lx extends Dh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yc=new ae,uf=new P,ff=new P;class x0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(uf),ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ff),e.updateMatrixWorld(),yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ix extends x0{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=ro*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(i!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=i,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Dx extends Dh{constructor(t,e,i=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=i,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Ix}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ux extends x0{constructor(){super(new s0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M0 extends Dh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Ux}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);const Nx={play:{en:"PLAY",pl:"GRAJ"},garage:{en:"GARAGE",pl:"GARAŻ"},go:{en:"GO",pl:"JEDŹ"},back:{en:"Back",pl:"Wróć"},best:{en:"BEST",pl:"REKORD"},gearBank:{en:"GEAR BANK",pl:"ZĘBATKI RAZEM"},bike:{en:"BIKE",pl:"MOTOR"},car:{en:"CAR",pl:"AUTO"},handling:{en:"Handling",pl:"Zwrotność"},toughness:{en:"Toughness",pl:"Wytrzymałość"},reach:{en:"Pickup reach",pl:"Zasięg zbierania"},paint:{en:"Paint",pl:"Lakier"},rider:{en:"Rider",pl:"Kierowca"},accent:{en:"Stripes",pl:"Pasy"},paused:{en:"PAUSED",pl:"PAUZA"},resume:{en:"RESUME",pl:"WZNÓW"},restart:{en:"RESTART",pl:"OD NOWA"},home:{en:"HOME",pl:"MENU"},retry:{en:"RETRY",pl:"JESZCZE RAZ"},newBest:{en:"NEW BEST!",pl:"NOWY REKORD!"},distance:{en:"DISTANCE",pl:"DYSTANS"},gearsRun:{en:"GEARS THIS RUN",pl:"ZĘBATKI W BIEGU"},settings:{en:"SETTINGS",pl:"USTAWIENIA"},music:{en:"Music",pl:"Muzyka"},sfx:{en:"Sound effects",pl:"Efekty dźwiękowe"},haptics:{en:"Vibration",pl:"Wibracje"},reducedMotion:{en:"Reduced motion",pl:"Ograniczony ruch"},language:{en:"Language",pl:"Język"},langAuto:{en:"Auto",pl:"Auto"},close:{en:"CLOSE",pl:"ZAMKNIJ"},loading:{en:"LOADING",pl:"ŁADOWANIE"},hint:{en:"Swipe to steer · up to jump · down to duck",pl:"Przesuń: skręt · w górę: skok · w dół: unik"},hintKeys:{en:"Arrows / WASD · Space jump · Esc pause",pl:"Strzałki / WASD · Spacja skok · Esc pauza"},app:{en:"App",pl:"Aplikacja"},install:{en:"INSTALL APP",pl:"ZAINSTALUJ"},iosInstall:{en:"To install: Share → Add to Home Screen",pl:"Instalacja: Udostępnij → Do ekranu początkowego"},updateReady:{en:"NEW VERSION · UPDATE",pl:"NOWA WERSJA · AKTUALIZUJ"},version:{en:"Version",pl:"Wersja"},welcome:{en:"WELCOME TO",pl:"WITAMY"},population:{en:"POPULATION",pl:"LUDNOŚĆ"},nightFalls:{en:"NIGHT FALLS",pl:"ZAPADA NOC"},sunrise:{en:"SUNRISE",pl:"WSCHÓD SŁOŃCA"},tier2:{en:"CRUISE CONTROL",pl:"TEMPO PODRÓŻNE"},tier3:{en:"TRAFFIC AHEAD",pl:"KORKI W PRZODZIE"},tier4:{en:"RUSH HOUR",pl:"GODZINY SZCZYTU"},tier5:{en:"TOTAL CHAOS",pl:"TOTALNY CHAOS"},speedUp:{en:"SPEED UP",pl:"PRZYSPIESZAMY"},breather:{en:"CLEAR ROAD",pl:"WOLNA DROGA"},magnet:{en:"MAGNET!",pl:"MAGNES!"},repaired:{en:"REPAIRED!",pl:"NAPRAWIONO!"},bestPassed:{en:"NEW BEST!",pl:"NOWY REKORD!"},biomeSuburb:{en:"SUBURB HIGHWAY",pl:"PODMIEJSKA TRASA"},biomeForest:{en:"FOREST",pl:"LAS"},biomeFields:{en:"CROP FIELDS",pl:"POLA UPRAWNE"},biomeIndustrial:{en:"INDUSTRIAL AREA",pl:"STREFA PRZEMYSŁOWA"},biomeCenter:{en:"CITY CENTER",pl:"CENTRUM"},biomeOldTown:{en:"OLD TOWN",pl:"STARE MIASTO"},biomeDesert:{en:"DESERT",pl:"PUSTYNIA"},biomeCanyon:{en:"CANYON",pl:"KANION"},biomeRoute66:{en:"ROUTE 66",pl:"ROUTE 66"}};let Zo="en";function Fx(){return(typeof navigator<"u"&&navigator.language||"").toLowerCase().startsWith("pl")?"pl":"en"}function y0(n){Zo=n==="auto"?Fx():n,typeof document<"u"&&(document.documentElement.lang=Zo)}function df(){return Zo}function Nt(n){return Nx[n][Zo]}function fi(n){const t=Zo==="pl"?" ":",";return String(Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g,t)}const B={laneWidth:3,laneCount:3,shoulderWidth:1.5,chunkLength:40,drawDistance:200,fogNear:120,fogFar:200,generateAhead:360,startSpeed:14,maxSpeed:40,speedCurveK:2500,tierBounds:[0,300,1e3,2e3,3500],tierGaps:[35,28,22,18,15],tierWeights:[[100,0,0,0,0],[40,60,0,0,0],[15,35,50,0,0],[5,20,35,40,0],[0,10,25,35,30]],forgivenessDistance:150,firstPatternAt:70,minReactionTime:.6,minReactionDistance:12,patternReferenceSpacing:12,minLeadIn:2,breatherIntervalMin:400,breatherIntervalMax:600,breatherLengthMin:60,breatherLengthMax:80,jumpPeak:1.6,fastDropTime:.1,duckTime:.7,hitboxHeight:1.4,duckHitboxHeight:.8,bikeHitboxLength:1.8,carHitboxLength:3.6,bikeHitboxWidth:.9,carHitboxWidth:1.8,inputBuffer:.15,lowHeight:.8,overheadClearance:1,maxHp:3,invulnerableTime:1,hitSlowFactor:.55,hitSlowRecover:2.5,hitSlowHold:.15,smashSlowFactor:.8,smashSlowTime:.6,oilLockTime:.8,crashSlowMoTime:.8,crashTimeScale:.3,trafficSpeedRatio:.4,switcherBlinkerTime:1,switcherLaneChangeTime:.6,switcherDoneBefore:1.6,pickupRadius:.9,magnetRadius:5,magnetDuration:8,goldenGearEvery:250,magnetEvery:600,wrenchMinSpacing:300,wrenchAfterHit:200,gearSpacing:3,camHeight:6.5,camBack:12,camLaneFollow:.5,camJumpFollow:.3,fovMin:48,fovMax:56,hitCamPull:6,hitFovDrop:10,vFovClampMin:50,vFovClampMax:95,swipeMinPx:30,swipeMaxMs:300,hitStop:.06,shakeMaxOffset:.7,shakeMaxRoll:.035,shakeDecay:1.5,traumaLand:.25,traumaSmash:.3,traumaHit:.55,traumaCrash:1,speedLinesFrom:25,nearMissMargin:.3,biomeLeg:700,biomeBlend:100,gateBefore:40,gateAfter:80,biomeDevStart:100,fixedStep:1/120,maxFrameDt:.1},kn=400;class Ox{constructor(){this.vel=new Float32Array(kn*3),this.life=new Float32Array(kn),this.maxLife=new Float32Array(kn),this.gravity=new Float32Array(kn),this.scroll=new Uint8Array(kn),this.next=0,this.c=new pt;const t=new De;this.pos=new Float32Array(kn*3),this.col=new Float32Array(kn*3);for(let i=0;i<kn;i++)this.pos[i*3+1]=-100;t.setAttribute("position",new Re(this.pos,3)),t.setAttribute("color",new Re(this.col,3));const e=new Eh({size:.28,vertexColors:!0,sizeAttenuation:!0,fog:!1});this.points=new Th(t,e),this.points.frustumCulled=!1}emit(t,e,i,s,o,r,a,c,l,h=9){this.c.set(o);for(let u=0;u<t;u++){const f=this.next;this.next=(this.next+1)%kn,this.pos[f*3]=e,this.pos[f*3+1]=i,this.pos[f*3+2]=s,this.vel[f*3]=(Math.random()*2-1)*r,this.vel[f*3+1]=Math.random()*a,this.vel[f*3+2]=(Math.random()*2-1)*r;const d=.75+Math.random()*.25;this.col[f*3]=this.c.r*d,this.col[f*3+1]=this.c.g*d,this.col[f*3+2]=this.c.b*d,this.life[f]=this.maxLife[f]=c*(.6+Math.random()*.4),this.gravity[f]=h,this.scroll[f]=l?1:0}}update(t,e){for(let i=0;i<kn;i++)if(!(this.life[i]<=0)){if(this.life[i]-=t,this.life[i]<=0){this.pos[i*3+1]=-100;continue}this.vel[i*3+1]-=this.gravity[i]*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]=Math.max(.05,this.pos[i*3+1]+this.vel[i*3+1]*t),this.pos[i*3+2]+=(this.vel[i*3+2]+(this.scroll[i]?e:0))*t}this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0}clear(){this.life.fill(0);for(let t=0;t<kn;t++)this.pos[t*3+1]=-100}}const Bn=90,Ti=new we;class kx{constructor(){this.pos=new Float32Array(Bn*3),this.vel=new Float32Array(Bn*3),this.life=new Float32Array(Bn),this.maxLife=new Float32Array(Bn),this.size=new Float32Array(Bn),this.rot=new Float32Array(Bn),this.next=0,this.c=new pt;const t=new Xn({flatShading:!0,emissive:new pt("#ffffff"),emissiveIntensity:.18});this.mesh=new wh(new or(1,1),t,Bn),this.mesh.frustumCulled=!1;for(let e=0;e<Bn;e++)this.mesh.setColorAt(e,this.c.set("#ffffff")),this.mesh.setMatrixAt(e,new ae().makeScale(0,0,0))}emit(t,e,i,s,o,r,a=1.4){const c=this.next;this.next=(this.next+1)%Bn,this.pos.set([t,e,i],c*3),this.vel.set([(Math.random()-.5)*.9,a*(.7+Math.random()*.6),(Math.random()-.5)*.6],c*3),this.life[c]=this.maxLife[c]=r*(.75+Math.random()*.5),this.size[c]=o*(.8+Math.random()*.4),this.rot[c]=Math.random()*Math.PI,this.mesh.setColorAt(c,this.c.set(s).multiplyScalar(.9+Math.random()*.2)),this.mesh.instanceColor.needsUpdate=!0}update(t,e){for(let i=0;i<Bn;i++){if(this.life[i]<=0)continue;this.life[i]-=t;const s=1-Math.max(0,this.life[i])/this.maxLife[i];this.vel[i*3+1]*=1-t*.8,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=(this.vel[i*3+2]+e)*t;const o=this.life[i]<=0?0:this.size[i]*(s<.2?s/.2:1-((s-.2)/.8)**1.5)*(1+s*.5);Ti.position.set(this.pos[i*3],this.pos[i*3+1],this.pos[i*3+2]),Ti.rotation.set(this.rot[i],this.rot[i]*.7+s,0),Ti.scale.setScalar(Math.max(0,o)),Ti.updateMatrix(),this.mesh.setMatrixAt(i,Ti.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.life.fill(0),Ti.scale.setScalar(0),Ti.updateMatrix();for(let t=0;t<Bn;t++)this.mesh.setMatrixAt(t,Ti.matrix);this.mesh.instanceMatrix.needsUpdate=!0}}function Bx(n,t){const e=document.createElement("canvas");e.width=e.height=64;const i=e.getContext("2d"),s=i.createRadialGradient(32,32,4,32,32,32);s.addColorStop(0,"rgba(0,0,0,0.45)"),s.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=s,i.fillRect(0,0,64,64);const o=new ms(e),r=new Xt(new In(n,t),new fn({map:o,transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.02,r.renderOrder=1,r}function zx(){const n=document.createElement("canvas");n.width=128,n.height=16;const t=n.getContext("2d");for(let c=0;c<16;c++)for(let l=0;l<2;l++)t.fillStyle=(c+l)%2?"#111":"#fff",t.fillRect(c*8,l*8,8,8);const e=new ms(n);e.colorSpace=Ge,e.magFilter=on;const i=B.laneWidth*B.laneCount+3,s=new Xt(new In(i,1.2),new fn({map:e}));s.rotation.x=-Math.PI/2,s.position.y=.03;const o=new Ke;o.add(s);const r=new Xn({color:"#ffffff"}),a=new fn({map:e,side:Kn});for(const c of[-1,1]){const l=new Xt(new Gi(.08,.08,4,6),r);l.position.set(c*(i/2+.3),2,0),o.add(l);const h=new Xt(new In(1.6,.6),a);h.position.set(c*(i/2+.3)-c*.8,3.6,0),o.add(h)}return o.visible=!1,o}class Hx{constructor(t){this.canvas=t,this.lines=[],this.flash=0,this.active=!1,this.ctx=t.getContext("2d")}burst(){this.flash=.35}update(t,e,i){const{canvas:s,ctx:o}=this,r=s.clientWidth,a=s.clientHeight,c=Math.min(window.devicePixelRatio||1,2);(s.width!==Math.round(r*c)||s.height!==Math.round(a*c))&&(s.width=Math.round(r*c),s.height=Math.round(a*c)),this.flash=Math.max(0,this.flash-t);const l=i?Math.min(1,e+this.flash*2):0;if(l<=0&&this.lines.length===0){this.active&&(o.clearRect(0,0,s.width,s.height),this.active=!1);return}this.active=!0,o.setTransform(c,0,0,c,0,0),o.clearRect(0,0,r,a);const h=l*40*t*6;for(let _=0;_<h&&!(this.lines.length>60);_++)this.lines.push({a:Math.random()*Math.PI*2,r:.55+Math.random()*.2,len:.08+Math.random()*.12,life:.25});const u=r/2,f=a*.42,d=Math.hypot(r,a)/2;o.strokeStyle="rgba(255,255,255,0.55)",o.lineWidth=2,o.beginPath();for(const _ of this.lines){_.life-=t,_.r+=t*1.6;const p=_.r*d,m=(_.r+_.len)*d;o.moveTo(u+Math.cos(_.a)*p,f+Math.sin(_.a)*p),o.lineTo(u+Math.cos(_.a)*m,f+Math.sin(_.a)*m)}o.stroke();let g=0;for(const _ of this.lines)_.life>0&&(this.lines[g++]=_);this.lines.length=g}}const wn=[{id:"suburb",main:"outskirts",name:"biomeSuburb",road:"#3A3D45",arrival:"creekBridge",palette:{skyTop:"#9ED8F5",skyBottom:"#FCEFD4",fog:"#F4ECD9",ground:"#7BC67E",hemi:"#fff8e8",sun:"#fff2d6",light:1,cloud:"#ffffff"},night:{skyTop:"#0D1A3A",skyBottom:"#2A3D6E",fog:"#24355E",ground:"#5A8F72",hemi:"#8FA6E0",sun:"#B8C8FF",light:.5,cloud:"#3B4A70"}},{id:"forest",main:"outskirts",name:"biomeForest",road:"#5E4E3D",arrival:"riverBridge",palette:{skyTop:"#A8D8E8",skyBottom:"#E8F1E0",fog:"#DCE8D6",ground:"#4F7A45",hemi:"#f2fbef",sun:"#fff4dc",light:1,cloud:"#ffffff"},night:{skyTop:"#0A1730",skyBottom:"#22395A",fog:"#1F3350",ground:"#3E6150",hemi:"#86A2D6",sun:"#A9C0F0",light:.46,cloud:"#34445F"}},{id:"fields",main:"outskirts",name:"biomeFields",road:"#A39E93",arrival:"cattleGrid",palette:{skyTop:"#8FD0F2",skyBottom:"#FFF1C9",fog:"#F6EDCF",ground:"#97BF55",hemi:"#fffaea",sun:"#fff0cc",light:1,cloud:"#ffffff"},night:{skyTop:"#0E1C40",skyBottom:"#33467A",fog:"#2B3C66",ground:"#6F8A5C",hemi:"#94A8E0",sun:"#C0CCFF",light:.52,cloud:"#424F78"}},{id:"industrial",main:"city",name:"biomeIndustrial",road:"#9A9A94",arrival:"cityBridge",palette:{skyTop:"#B7C9CF",skyBottom:"#EADFC8",fog:"#D9D5C8",ground:"#6F6F6A",hemi:"#f3f1ea",sun:"#fbeedb",light:.93,cloud:"#ecebe6"},night:{skyTop:"#1A1A2E",skyBottom:"#4A3A40",fog:"#3D3236",ground:"#6A5F55",hemi:"#C9A27A",sun:"#FFB36B",light:.5,cloud:"#4A4048"}},{id:"center",main:"city",name:"biomeCenter",road:"#2F3138",arrival:"gantry",palette:{skyTop:"#8CC8EE",skyBottom:"#F7E6D0",fog:"#E6E2DA",ground:"#C9C4BA",hemi:"#fbf8f2",sun:"#fff2dc",light:1,cloud:"#ffffff"},night:{skyTop:"#0B1636",skyBottom:"#3A3F74",fog:"#2E3366",ground:"#8A8AA6",hemi:"#9FA8E8",sun:"#C4CCFF",light:.55,cloud:"#4A4F7E"}},{id:"oldtown",main:"city",name:"biomeOldTown",road:"#5A4D41",arrival:"townGate",palette:{skyTop:"#9FC9E8",skyBottom:"#FBDDB8",fog:"#EFD9BE",ground:"#D6CBB8",hemi:"#fff3e2",sun:"#ffe0b0",light:1,cloud:"#fff6ea"},night:{skyTop:"#121A3A",skyBottom:"#45406A",fog:"#3A3658",ground:"#9A8C86",hemi:"#B0A6D6",sun:"#C6C8F0",light:.52,cloud:"#4F4A70"}},{id:"desert",main:"drylands",name:"biomeDesert",road:"#C9A877",arrival:"ranchGate",palette:{skyTop:"#6FB9E8",skyBottom:"#FCE3B0",fog:"#F2DDB5",ground:"#E3C896",hemi:"#fff6e4",sun:"#fff0d0",light:1,cloud:"#ffffff"},night:{skyTop:"#120E30",skyBottom:"#4A3566",fog:"#3E2F58",ground:"#7A6C88",hemi:"#A89AD8",sun:"#D0C8FF",light:.55,cloud:"#4C3F6A"}},{id:"canyon",main:"drylands",name:"biomeCanyon",road:"#724630",arrival:"gorgeBridge",palette:{skyTop:"#5DA9E0",skyBottom:"#F6D3A1",fog:"#E8B98E",ground:"#B5704A",hemi:"#fff1e2",sun:"#ffe6c4",light:1,cloud:"#fff8f0"},night:{skyTop:"#0C1430",skyBottom:"#34406E",fog:"#2C3560",ground:"#7A5A5E",hemi:"#98A4DC",sun:"#D6E0FF",light:.55,cloud:"#3E4870"}},{id:"route66",main:"drylands",name:"biomeRoute66",road:"#4A4644",arrival:"gantry",palette:{skyTop:"#7EC3EC",skyBottom:"#FFE2B8",fog:"#F1D7B0",ground:"#C8B184",hemi:"#fff6e6",sun:"#ffefd2",light:1,cloud:"#ffffff"},night:{skyTop:"#140F34",skyBottom:"#5A3A6E",fog:"#4A3360",ground:"#8A7690",hemi:"#B29AD8",sun:"#CFC6FF",light:.52,cloud:"#523F70"}}],cs=wn.length,pf=B.chunkLength,pa=B.biomeLeg;function Wl(n){return wn.find(t=>t.id===n)}function mf(n){return wn.findIndex(t=>t.id===n)}function nn(n){return wn[(n%cs+cs)%cs]}function Zn(n,t=0){return Math.floor((n*pa-t)/pf)*pf}function Cn(n,t=0){n=Math.max(0,n);let e=Math.max(0,Math.floor((n+t)/pa));for(;Zn(e+1,t)<=n;)e++;for(;e>0&&Zn(e,t)>n;)e--;return e}function gf(n,t=0){return nn(Cn(n,t))}function Xl(n){return n>0&&n%3===0}function Gx(n,t=0){const e=Zn(n,t);return{leg:n,seam:e,start:e-B.gateBefore,end:e+B.gateAfter}}function vf(n,t=0){for(let e=Cn(n,t);;e++){if(!Xl(e))continue;const i=Gx(e,t);if(i.end>n)return i}}function Vx(n,t=0,e=0){const i=cs*pa;return((n*pa+B.biomeDevStart-t)%i+i)%i+e*i}const Wx=n=>{const t=Math.min(1,Math.max(0,n));return t*t*(3-2*t)};function Xx(n,t=0,e={from:wn[0],to:wn[0],t:1,seam:0}){const i=B.biomeBlend/2,s=Cn(n+i,t);return e.to=nn(s),s<=Cn(0,t)?(e.from=e.to,e.t=1,e.seam=-1/0,e):(e.from=nn(s-1),e.seam=Zn(s,t),e.t=Wx((n-e.seam+i)/(2*i)),e)}const vs=[{id:"zippy",cls:"bike",name:"Zippy",look:{en:"Retro scooter",pl:"Retro skuter"},laneChangeTime:.18,hangTime:.7,magnetBonus:1,smashNoSlow:!1,defaultColor:3,defaultSecond:8,engine:{base:120,rev:1.2,cutoff:900,cutoffRise:1400,whine:0}},{id:"viper",cls:"bike",name:"Viper",look:{en:"Street bike",pl:"Motocykl miejski"},laneChangeTime:.16,hangTime:.65,magnetBonus:.5,smashNoSlow:!1,defaultColor:1,defaultSecond:8,engine:{base:95,rev:1.3,cutoff:700,cutoffRise:1400,whine:0}},{id:"bolt",cls:"bike",name:"Bolt",look:{en:"Sport bike",pl:"Motocykl sportowy"},laneChangeTime:.14,hangTime:.6,magnetBonus:0,smashNoSlow:!1,defaultColor:6,defaultSecond:8,engine:{base:170,rev:1.6,cutoff:1300,cutoffRise:2600,whine:.35}},{id:"pebble",cls:"car",name:"Pebble",look:{en:"Tiny hatchback",pl:"Mały hatchback"},laneChangeTime:.2,hangTime:.7,magnetBonus:1,smashNoSlow:!1,defaultColor:4,defaultSecond:8,engine:{base:66,rev:1.3,cutoff:750,cutoffRise:1300,whine:0}},{id:"brute",cls:"car",name:"Brute",look:{en:"Muscle car",pl:"Muscle car"},laneChangeTime:.24,hangTime:.6,magnetBonus:0,smashNoSlow:!0,defaultColor:1,defaultSecond:8,engine:{base:50,rev:1.2,cutoff:600,cutoffRise:1200,whine:0}},{id:"arrow",cls:"car",name:"Arrow",look:{en:"Sports coupe",pl:"Sportowe coupé"},laneChangeTime:.21,hangTime:.65,magnetBonus:.5,smashNoSlow:!1,defaultColor:8,defaultSecond:3,engine:{base:120,rev:1.6,cutoff:1200,cutoffRise:2400,whine:.3}}];function Ia(n){return vs.find(t=>t.id===n)??vs[1]}function _f(n){return vs.filter(t=>t.cls===n)}function qx(n){return{handling:1-(n.laneChangeTime-.12)/.14,toughness:n.cls==="car"?n.smashNoSlow?1:.85:.3,reach:.35+n.magnetBonus*.65}}const xf=Math.PI/180;function Sc(n,t,e,i){return Math.sin(n*t+i)*.6+Math.sin(n*e+i*1.7)*.4}class Yx{constructor(){this.x=0,this.y=0,this.hFov=B.fovMin,this.trauma=0,this.shakeTime=0,this.shakePhase=0,this.wobbleT=0,this.slow=0,this.reducedMotion=!1,this.camera=new sn(60,9/16,.5,B.drawDistance+75)}resize(t){this.camera.aspect=t,this.applyFov()}applyFov(){const t=this.hFov-this.slow*B.hitFovDrop,e=2*Math.atan(Math.tan(t*xf/2)/this.camera.aspect)/xf;this.camera.fov=Math.min(B.vFovClampMax,Math.max(B.vFovClampMin,e)),this.camera.updateProjectionMatrix()}addTrauma(t){this.reducedMotion||(this.trauma<=0&&(this.shakePhase=Math.random()*100),this.trauma=Math.min(1,this.trauma+t))}wobble(t=.8){this.reducedMotion||(this.wobbleT=t)}snap(t){this.x=t*B.camLaneFollow,this.y=0,this.trauma=0,this.slow=0}update(t,e,i,s,o=0){const r=1-Math.exp(-10*t);this.x+=(e*B.camLaneFollow-this.x)*r,this.y+=(i*B.camJumpFollow-this.y)*r,this.slow+=((this.reducedMotion?0:o)-this.slow)*(1-Math.exp(-12*t));const a=this.reducedMotion?B.fovMin:B.fovMin+(B.fovMax-B.fovMin)*s;(Math.abs(a-this.hFov)>.01||this.slow>.001)&&(this.hFov+=(a-this.hFov)*Math.min(1,t*2),this.applyFov());let c=0,l=0,h=0;if(this.trauma>0){this.shakeTime+=t;const f=this.trauma*this.trauma,d=this.shakeTime,g=this.shakePhase;c=Sc(d,47,79,g)*f*B.shakeMaxOffset,l=Sc(d,53,89,g+3)*f*B.shakeMaxOffset,h=Sc(d,41,67,g+7)*f*B.shakeMaxRoll,this.trauma=Math.max(0,this.trauma-B.shakeDecay*t)}this.wobbleT>0&&(this.wobbleT-=t,h+=Math.sin(this.wobbleT*18)*.04*Math.min(1,this.wobbleT*2),c+=Math.sin(this.wobbleT*11)*.25*Math.min(1,this.wobbleT*2));const u=this.camera;u.position.set(this.x+c,B.camHeight+this.y+l,B.camBack-this.slow*B.hitCamPull),u.lookAt(this.x+c*.5,this.y*.5,-10),h&&u.rotateZ(h)}}const Mf=(n,t,e)=>{const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)};function ql(n,t=0){const e=Cn(n,t),i=Zn(e,t),s=Zn(e+1,t),o=Math.min(1,Math.max(0,(n-i)/(s-i))),r=e%cs,a=Math.floor(e/cs)%2===1,c=cs-1;let l;return r<c?l=(a?20:8)+(a?8:9)*(r+o)/c:l=a?28+4*o:17+3*o,l%24}function $x(n){return Math.sin(2*Math.PI*(n-6)/24)}function ma(n,t={hour:0,sun:0,night:0,twilight:0,dawn:!1}){const e=$x(n);return t.hour=n,t.sun=e,t.night=Mf(.02,-.4,e),t.twilight=1-Mf(0,.45,Math.abs(e+.08)),t.dawn=n<12,t}const Kx=19.6,jx=6;class qn{constructor(t){this.state=t>>>0}next(){let t=this.state=this.state+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this.next()<t}pick(t){return t[Math.floor(this.next()*t.length)]}weighted(t,e){let i=0;for(const o of t)i+=Math.max(0,e(o));let s=this.next()*i;for(const o of t)if(s-=Math.max(0,e(o)),s<0)return o;return t[t.length-1]}}function yf(){return Math.random()*4294967295>>>0}function Zx(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),o={},r={},a=n[0].morphTargetsRelative,c=new De;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(const h in o){const u=Sf(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][f]);const g=Sf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Sf(n){let t,e,i,s=-1,o=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Re(r,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else r.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Ai=new pt,bf=new ae,ga=new ti,js=new bn;function Ie(n){const t=n.map(i=>{let s=i.geo.index?i.geo.toNonIndexed():i.geo.clone();s.deleteAttribute("uv"),js.set(...i.rot??[0,0,0]),ga.setFromEuler(js),bf.compose(new P(...i.pos??[0,0,0]),ga,new P(...i.scale??[1,1,1])),s.applyMatrix4(bf),Ai.set(i.color);const o=s.getAttribute("position").count,r=new Float32Array(o*3);for(let c=0;c<o;c++)r[c*3]=Ai.r,r[c*3+1]=Ai.g,r[c*3+2]=Ai.b;s.setAttribute("color",new Re(r,3));const a=new Uint8Array(o*4);if(i.glow!==void 0){Ai.set(i.glow);const c=Math.round(Ai.r*255),l=Math.round(Ai.g*255),h=Math.round(Ai.b*255),u=i.blink?255:0;for(let f=0;f<o;f++)a.set([c,l,h,u],f*4)}return s.setAttribute("glow",new Re(a,4,!0)),s.getAttribute("normal")===void 0&&s.computeVertexNormals(),s}),e=Zx(t,!1);if(!e)throw new Error("merge failed");return e.computeVertexNormals(),e.computeBoundingSphere(),e}const y=(n,t,e)=>new Es(n,t,e),$=(n,t,e,i=8)=>new Gi(n,t,e,i),Me=(n,t,e=8)=>new Ph(n,t,e),Jx=(n,t=8,e=6)=>new Wn(n,t,e),Xe=(n,t=0)=>new or(n,t);function Ee(n,t,e=0,i=[]){const s=new Ih(n.map(([a,c])=>new it(a,c)));for(const a of i)s.holes.push(new Hl(a.map(([c,l])=>new it(c,l))));const o=Math.max(.001,t-2*e),r=new Pa(s,e>0?{depth:o,bevelEnabled:!0,bevelThickness:e,bevelSize:e,bevelSegments:1}:{depth:o,bevelEnabled:!1});return r.translate(0,0,-o/2),r.rotateY(-Math.PI/2),r}function Ut(n,t,e,i=Math.min(n,t,e)*.18){const s=n/2-i,o=t/2-i,r=Math.min(s,o)*.5,a=new Ih([new it(-s+r,-o),new it(s-r,-o),new it(s,-o+r),new it(s,o-r),new it(s-r,o),new it(-s+r,o),new it(-s,o-r),new it(-s,-o+r)]),c=Math.max(.001,e-2*i),l=new Pa(a,{depth:c,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:1});return l.translate(0,0,-c/2),l}const bc=(n,t=12)=>new Ch(n.map(([e,i])=>new it(e,i)),t);function _s(n,t,e,i,s,o,r,a=0,c=10){const l=[],h=(u,f)=>[n-u*Math.cos(f),t+u*Math.sin(f)];for(let u=0;u<=c;u++)l.push(h(i,s+(o-s)*u/c));if(e<=0)l.push([n,t]);else for(let u=c;u>=0;u--)l.push(h(e,s+(o-s)*u/c));return Ee(l,r,a)}function Jo(n,t,e,i){const s=n.getAttribute("position");for(let o=0;o<s.count;o++){const r=Math.min(1,Math.max(0,(s.getY(o)-t)/(e-t)));s.setX(o,s.getX(o)*(1+(i-1)*r))}return s.needsUpdate=!0,n}const Qx=new P(0,1,0),wf=new P,wc=new P;function Vt(n,t,e,i,s=6,o=e){wf.set(...n),wc.set(...t).sub(wf);const r=wc.length();return ga.setFromUnitVectors(Qx,wc.normalize()),js.setFromQuaternion(ga),{geo:new Gi(o,e,r,s),color:i,pos:[(n[0]+t[0])/2,(n[1]+t[1])/2,(n[2]+t[2])/2],rot:[js.x,js.y,js.z]}}function rr(n,t,e=10){const i=[],s=[],o=n.length,r=n.map(u=>new P(...u)),a=new P,c=new P,l=new P;for(let u=0;u<o;u++){a.subVectors(r[Math.min(u+1,o-1)],r[Math.max(u-1,0)]).normalize(),c.set(1,0,0),Math.abs(a.x)>.9&&c.set(0,0,1),c.addScaledVector(a,-c.dot(a)).normalize(),l.crossVectors(a,c);const f=t[u],[d,g]=typeof f=="number"?[f,f]:f;for(let _=0;_<e;_++){const p=_/e*Math.PI*2,m=Math.cos(p)*d,w=Math.sin(p)*g;i.push(r[u].x+c.x*m+l.x*w,r[u].y+c.y*m+l.y*w,r[u].z+c.z*m+l.z*w)}}for(let u=0;u<o-1;u++)for(let f=0;f<e;f++){const d=(f+1)%e,g=u*e+f,_=u*e+d;s.push(g,_,_+e,g,_+e,g+e)}for(const[u,f]of[[0,!0],[o-1,!1]]){const d=i.length/3;i.push(r[u].x,r[u].y,r[u].z);for(let g=0;g<e;g++){const _=u*e+g,p=u*e+(g+1)%e;f?s.push(d,p,_):s.push(d,_,p)}}const h=new De;return h.setAttribute("position",new me(i,3)),h.setIndex(s),h.computeVertexNormals(),h}function Ft(n){return[n(-1),n(1)]}const ls={uNight:{value:0},uBlink:{value:1}};function S0(n,t={value:0}){n.uniforms.uNight=ls.uNight,n.uniforms.uBlink=ls.uBlink,n.uniforms.uSelfGlow=t,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 glow;
varying vec4 vGlow;`).replace("#include <color_vertex>",`#include <color_vertex>
vGlow = glow;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform float uBlink;
uniform float uSelfGlow;
varying vec4 vGlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance += vGlow.rgb * uNight * mix(1.0, uBlink, step(0.5, vGlow.a)) + diffuseColor.rgb * uSelfGlow;`)}function b0(n){const t=n.onBeforeCompile;n.onBeforeCompile=(i,s)=>{t.call(n,i,s),S0(i)};const e=n.customProgramCacheKey.bind(n);return n.customProgramCacheKey=()=>`${e()}|glow`,n.needsUpdate=!0,n}function w0(n={value:0}){const t=new Xn({vertexColors:!0,flatShading:!0});return t.onBeforeCompile=e=>{S0(e,n),e.fragmentShader=e.fragmentShader.replace("#include <fog_fragment>",`#include <fog_fragment>
#ifdef USE_FOG
#ifndef FOG_EXP2
      {
        const float BAYER[16] = float[16](0., 8., 2., 10., 12., 4., 14., 6., 3., 11., 1., 9., 15., 7., 13., 5.);
        ivec2 fp = ivec2(mod(gl_FragCoord.xy, 4.0));
        float threshold = (BAYER[fp.y * 4 + fp.x] + 0.5) / 16.0;
        if (smoothstep(fogFar - (fogFar - fogNear) * 0.15, fogFar, vFogDepth) > threshold) discard;
      }
#endif
#endif`)},t.customProgramCacheKey=()=>"scenery",t}const rs=w0(),Ef=b0(new _0({vertexColors:!0,flatShading:!0,shininess:80,specular:new pt("#5c6069")}));function Tf(n){return new _0({vertexColors:!0,flatShading:!0,color:new pt(n),shininess:60,specular:new pt("#4a4a4a")})}function tM(n){return new Xn({vertexColors:!0,flatShading:!0,color:new pt(n)})}function ln(n,t,e,i,s,o,r=0,a=0){const c=[],l=n/i;for(let h=0;h<i;h++)c.push({geo:y(l,t,e),color:h%2?s:o,pos:[-n/2+l*(h+.5),r,a]});return c}const E0=266;function Ec(n,t,e=E0){const i=Math.cos(t);return new P(Math.sin(n)*e*i,Math.sin(t)*e,Math.cos(n)*e*i)}function T0(n=64,t=.15){const e=document.createElement("canvas");e.width=e.height=n;const i=e.getContext("2d"),s=i.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(t,"rgba(255,255,255,0.85)"),s.addColorStop(.5,"rgba(255,255,255,0.25)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,n,n);const o=new ms(e);return o.colorSpace=Ge,o}const eM=T0();class Af{constructor(t,e,i,s,o=[]){this.object=new Ke,this.disc=new fn({vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1}),this.halo=new fn({color:i,map:eM,transparent:!0,depthWrite:!1,fog:!1,blending:qo});const r=new Xt(new In(t*2*s,t*2*s),this.halo),a=new Xt(Ie([{geo:new as(t,24),color:e},...o]),this.disc);r.renderOrder=-199,a.renderOrder=-198,this.object.add(r,a)}place(t){this.object.position.copy(t),this.object.rotation.set(0,Math.atan2(-t.x,-t.z),0)}set opacity(t){this.object.visible=t>.001,this.disc.opacity=t,this.halo.opacity=t*.8}}class nM{constructor(){this.root=new Ke,this.moon=new Af(7,"#f3f0e2","#9fb4ff",4.5,[{geo:new as(1.8,12),color:"#d5d2c6",pos:[-2,1.5,.05]},{geo:new as(2.2,12),color:"#d5d2c6",pos:[2.2,-1,.05]},{geo:new as(1.1,12),color:"#d5d2c6",pos:[.5,3,.05]}]),this.sun=new Af(11,"#ffd38a","#ff9a4a",5);const t=new qn(4242),e=420,i=new Float32Array(e*3),s=new Float32Array(e*3),o=new pt;for(let a=0;a<e;a++){const c=Ec(t.range(0,Math.PI*2),Math.asin(t.range(.04,.85)**1.4),E0+4);i.set([c.x,c.y,c.z],a*3),o.set(t.pick(["#ffffff","#fff4dc","#dfe8ff","#cfdcff"])).multiplyScalar(t.range(.55,1)),s.set([o.r,o.g,o.b],a*3)}const r=new De;r.setAttribute("position",new Re(i,3)),r.setAttribute("color",new Re(s,3)),this.starMat=new Eh({size:2.2,sizeAttenuation:!1,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1}),this.stars=new Th(r,this.starMat),this.stars.renderOrder=-200,this.stars.frustumCulled=!1,this.moon.place(Ec(Math.PI+.2,.26)),this.root.add(this.stars,this.moon.object,this.sun.object)}update(t,e,i,s,o){this.stars.visible=e>.01,this.starMat.opacity=e*(.85+.15*Math.sin(t*1.7)),this.moon.opacity=e;const r=Math.max(-.05,Math.min(.35,s*.7+.03));this.sun.place(Ec(Math.PI+(o?.26:-.26),r)),this.sun.opacity=Math.min(1,i*1.3)*(1-e)}}const Br=150,Tc=120;class iM{constructor(){const t=new qn(77);this.base=new Float32Array(Br*3);const e=new Float32Array(Br);for(let s=0;s<Br;s++){const o=t.chance(.5)?-1:1;this.base.set([o*t.range(7.5,20),t.range(.5,3),-t.range(0,Tc)],s*3),e[s]=t.range(0,100)}const i=new De;i.setAttribute("position",new Re(new Float32Array(this.base),3)),i.setAttribute("phase",new Re(e,1)),this.mat=new vi({uniforms:{uTime:{value:0},uAmount:{value:0}},vertexShader:`attribute float phase;
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
        }`,transparent:!0,depthWrite:!1,blending:qo}),this.points=new Th(i,this.mat),this.points.frustumCulled=!1}update(t,e,i){if(this.points.visible=i>.01,!this.points.visible)return;this.mat.uniforms.uTime.value=e,this.mat.uniforms.uAmount.value=i;const s=this.points.geometry.getAttribute("position"),o=t%Tc;for(let r=0;r<Br;r++){let a=this.base[r*3+2]+o;a>20&&(a-=Tc),s.setZ(r,a)}s.needsUpdate=!0}}function sM(){const n=new fn({color:"#fff1c8",map:T0(128,.3),transparent:!0,depthWrite:!1,blending:qo,fog:!1}),t=new Xt(new In(10,28),n);return t.rotation.x=-Math.PI/2,t.renderOrder=1,t}const Da=[{radius:252,height:64,bottom:-12,repeat:3,fog:.5},{radius:238,height:44,bottom:-9,repeat:4,fog:.3},{radius:224,height:28,bottom:-7,repeat:6,fog:.12}],ji=1024,Zi=128,Uo=Math.PI*2,oM=1.3,Rf=new pt,Yl="#ffd27a",$l="#ffad55",Ho="#ff4436",rM=new pt;class aM{constructor(t,e,i){this.spec=t,this.rng=e,this.fog=i,this.c=document.createElement("canvas"),this.emitters=[],this.lights=null,this.lg=null,this.lrng=new qn(t.radius*7919+i.getHex()),this.c.width=ji,this.c.height=Zi,this.g=this.c.getContext("2d"),this.tw=Uo*t.radius/t.repeat}X(t){return t/this.tw*ji}Y(t){return Zi*(1-(t-this.spec.bottom)/this.spec.height)}tone(t,e=0){return Rf.set(t).lerp(this.fog,Math.min(1,this.spec.fog+e)),`#${Rf.getHexString()}`}wrap(t,e,i){i(t),t-e<0&&i(t+this.tw),t+e>this.tw&&i(t-this.tw)}profile(t,e,i,s=!1,o){const r=i.map(()=>this.rng.next()*Uo),a=i.reduce((c,l,h)=>c+1/(h+1),0);return c=>{let l=0;i.forEach((u,f)=>{const d=Math.sin(Uo*u*c/this.tw+r[f]);l+=(s?1-Math.abs(d)*1.6:d)/(f+1)});let h=t+e*l/a;if(o){let u=Math.abs(c-o.x);u=Math.min(u,this.tw-u),h+=o.h*Math.exp(-(u*u)/(o.w*o.w))}return h}}ridge(t,e,i=2){const s=this.g;s.fillStyle=t,s.beginPath(),s.moveTo(0,Zi);for(let o=0;o<=this.tw+i;o+=i)s.lineTo(this.X(o),this.Y(e(Math.min(o,this.tw))));s.lineTo(ji,Zi),s.closePath(),s.fill()}above(t,e,i=1.5){const s=this.g;s.save(),s.globalCompositeOperation="source-atop",s.fillStyle=t,s.beginPath(),s.moveTo(0,0);for(let o=0;o<=this.tw+i;o+=i)s.lineTo(this.X(o),this.Y(e(Math.min(o,this.tw))));s.lineTo(ji,0),s.closePath(),s.fill(),s.restore()}ground(t,e){this.g.fillStyle=t,this.g.fillRect(0,this.Y(e),ji,Zi-this.Y(e))}rect(t,e,i,s,o){this.wrap(t,e/2,r=>{this.g.fillStyle=o,this.g.fillRect(this.X(r-e/2),this.Y(s),this.X(e),this.Y(i)-this.Y(s))})}poly(t,e,i,s){this.wrap(t,e,o=>{const r=this.g;r.fillStyle=s,r.beginPath(),i.forEach(([a,c],l)=>l?r.lineTo(this.X(o+a),this.Y(c)):r.moveTo(this.X(o+a),this.Y(c))),r.closePath(),r.fill()})}circle(t,e,i,s,o=1){this.wrap(t,i,r=>{const a=this.g;a.fillStyle=s,a.beginPath(),a.ellipse(this.X(r),this.Y(e),this.X(i),i/this.spec.height*Zi*o,0,0,Uo),a.fill()})}strata(t,e,i,s,o){const r=this.g;r.save(),r.globalCompositeOperation="source-atop",r.fillStyle=t;for(let a=s;a<o;a+=e*(.7+this.rng.next()*.6))r.fillRect(0,this.Y(a+i),ji,this.Y(a)-this.Y(a+i));r.restore()}lightCtx(){return this.lg||(this.lights=document.createElement("canvas"),this.lights.width=ji,this.lights.height=Zi,this.lg=this.lights.getContext("2d")),this.lg}light(t,e,i,s,o=Yl){const r=this.lightCtx();this.wrap(t,e/2,a=>{r.fillStyle=o,r.fillRect(this.X(a-e/2),this.Y(s),Math.max(1,this.X(e)),Math.max(1,this.Y(i)-this.Y(s)))})}windows(t,e,i,s,o,r=2.4,a=Yl){for(let c=i+1;c<s-1;c+=r)for(let l=t-e/2+r*.6;l<t+e/2-r*.4;l+=r)this.lrng.chance(o)&&this.light(l,r*.45,c,c+r*.4,a)}emit(t,e){this.emitters.push([t/this.tw,e])}along(t,e,i=.5){for(let s=this.rng.next()*t;s<this.tw;s+=t*(1-i/2+this.rng.next()*i))e(s)}}function Ac(n,t,e,i,s,o){n.along(o,r=>{const a=n.rng.range(i,s),c=a*.32,l=t(r)-1;n.poly(r,c,[[-c,l],[0,l+a],[c,l]],e)})}function ci(n,t,e,i,s,o){n.along(o,r=>{const a=n.rng.range(i,s);n.circle(r,t+a*.6,a,e)})}function zr(n,t,e,i,s,o,r,a=.45,c=.45){n.rect(t,i,e,e+s,o),c>0&&n.windows(t,i,e,e+s,c,Math.min(2.4,s/2)),n.poly(t,i*.6,[[-i*.58,e+s],[0,e+s+i*a],[i*.58,e+s]],r)}function Rc(n,t,e,i,s){for(const o of[-1.6,1.6])n.rect(t+o,.6,e,e+i,s);n.rect(t,3.6,e+i*.45,e+i*.5,s),n.rect(t,6.5,e+i,e+i+4.5,s),n.poly(t,3.6,[[-3.6,e+i+4.5],[0,e+i+6.5],[3.6,e+i+4.5]],s),n.light(t,.6,e+i+6.5,e+i+7.3,Ho)}function Cc(n,t,e,i,s,o){const r=i*n.rng.range(.28,.42);n.poly(t,i/2+2,[[-i/2,e],[-r-3,e+s*.75],[-r,e+s],[r,e+s],[r+2,e+s*.8],[i/2,e]],o)}function Pc(n,t,e,i,s,o,r,a){let c=0;for(;c<n.tw;){const l=n.rng.range(i,s),h=n.rng.range(o,r)*(n.rng.chance(.15)?1.4:1);if(n.rect(c+l/2,l,t,t+h,e),n.rng.chance(.25)&&n.rect(c+l/2,.5,t+h,t+h+n.rng.range(3,7),e),a)for(let u=t+3;u<t+h-2;u+=3)n.rect(c+l/2,l*.8,u,u+1,a);n.windows(c+l/2,l,t,t+h,a?.4:.28,a?3:2.6),h>30&&n.lrng.chance(.5)&&n.light(c+l/2,.8,t+h,t+h+.8,Ho),c+=l+n.rng.range(0,3)}}function Cf(n){for(let t=n.lrng.range(0,60);t<n.tw;t+=n.lrng.range(90,160)){const e=n.lrng.int(4,9);for(let i=0;i<e;i++)n.light(t+n.lrng.range(-10,10),.6,.2,.7,n.lrng.pick([Yl,$l,"#fff4dc"]))}}const cM={suburb:[n=>{n.ridge(n.tone("#a8cbb8"),n.profile(12,9,[1,2,5])),n.ridge(n.tone("#88b39c"),n.profile(5,7,[2,3,7]))},n=>{n.ground(n.tone("#88b07a"),1.5),n.along(13,t=>zr(n,t,0,n.rng.range(5,9),n.rng.range(3.5,6),n.tone(n.rng.pick(["#e9dcc4","#dfe5e3","#eadbd2"])),n.tone(n.rng.pick(["#b0705e","#8c6a58","#6f7d96"])))),ci(n,0,n.tone("#6fa06a"),2.5,4.5,21),Rc(n,n.tw*.37,0,16,n.tone("#9fb2bd"))},n=>{n.ground(n.tone("#5f9a5a"),1),ci(n,0,n.tone("#5a9356"),2,4.2,4),ci(n,0,n.tone("#4d8a4e"),1.5,3,5)}],forest:[n=>{const t=n.profile(18,26,[2,3,7,11],!0);n.ridge(n.tone("#8c9db5"),t,1.5),n.above(n.tone("#eef3f8"),e=>Math.max(30,t(e)-4.5))},n=>{const t=n.profile(7,9,[1,3,6]);n.ridge(n.tone("#5f8a6a"),t),Ac(n,t,n.tone("#56806a"),6,11,3.2)},n=>{n.ground(n.tone("#2f5a3a"),2),Ac(n,()=>1.5,n.tone("#2f5a3a"),8,15,2.2),Ac(n,()=>1,n.tone("#264d31"),6,11,3)}],fields:[n=>{n.ground(n.tone("#a7bf86"),1.2),ci(n,.5,n.tone("#86a47e"),1.5,3,7)},n=>{n.ground(n.tone("#b2c579"),.8),n.along(55,t=>{zr(n,t,0,10,5,n.tone("#b4554a"),n.tone("#7d4a40"),.35,.3);for(const e of[8,12.5])n.rect(t+e,3.6,0,13,n.tone("#cfcfc8")),n.circle(t+e,13,1.8,n.tone("#b9bcbf"))}),ci(n,0,n.tone("#7fa760"),2,3.5,30)},n=>{let t=0;const e=["#d9c06a","#8fbf55","#93744f","#c9b55e"];for(;t<n.tw;){const i=n.rng.range(15,40);n.rect(t+i/2,i+.5,-7,.7,n.tone(n.rng.pick(e))),t+=i}ci(n,.5,n.tone("#5f8f45"),1,1.8,2.6),ci(n,.5,n.tone("#5a8a42"),2.5,4,40)}],industrial:[n=>n.ridge(n.tone("#a9b2ab",.15),n.profile(7,7,[1,2,4])),n=>{n.ground(n.tone("#8b8f8f"),1),n.along(30,t=>{const e=n.rng.range(18,34),i=n.rng.range(6,12);n.rect(t,e,0,i,n.tone("#8f9294")),n.windows(t,e,0,i,.35,3,$l)}),n.along(70,t=>{n.rect(t,17,0,13,n.tone("#8a9097")),n.poly(t,17/2,[[-17/2,13],[-17*.3,15],[17*.3,15],[17/2,13]],n.tone("#8a9097"));for(let i=3;i<13;i+=3.3)n.rect(t,17+.6,i,i+.5,n.tone("#737980"))}),n.along(45,t=>{const e=n.rng.range(30,44),i=n.rng.range(2.4,3.6);n.poly(t,i,[[-i*.65,0],[-i*.5,e],[i*.5,e],[i*.65,0]],n.tone("#9a9a98")),n.rect(t,i+.2,e-4,e-2.6,n.tone("#c4524a")),n.rect(t,i+.2,e-7,e-5.6,n.tone("#c4524a")),n.emit(t,e+.5),n.light(t,.9,e-.2,e+.7,Ho)})},n=>{n.ground(n.tone("#7d8185"),1),n.along(36,t=>{const e=n.rng.range(20,34),i=n.rng.range(6,9);n.rect(t,e,0,i,n.tone("#7d8185")),n.light(t,e*.8,i*.45,i*.6,$l);for(let s=-e/2;s<e/2-3;s+=4)n.poly(t+s,3,[[0,i],[0,i+2.4],[4,i]],n.tone("#6f7377"))}),n.along(80,t=>{const e=n.rng.range(24,30),i=n.tone("#b08a3a",.2);n.rect(t,1.1,0,e,i),n.rect(t+8,28,e,e+1,i),n.rect(t-5,3,e-1.6,e+.2,i),n.poly(t,1,[[-.6,e+1],[0,e+4.5],[.6,e+1]],i),n.rect(t+16,.15,e-9,e,i),n.light(t,.8,e+4,e+4.8,Ho),n.light(t+22,.7,e+.2,e+.9,Ho)})}],center:[n=>Pc(n,0,n.tone("#93a6ba"),7,18,14,50),n=>Pc(n,0,n.tone("#7c8da0"),8,16,10,34,n.tone("#a4b5c6")),n=>{n.ground(n.tone("#77808a"),1),Pc(n,0,n.tone("#737c87"),10,20,4,10),n.along(40,t=>Rc(n,t,8,3,n.tone("#6b5c50")))}],oldtown:[n=>{const t=n.tw*.32,e=n.profile(5,6,[1,2,4],!1,{x:t,w:45,h:14});n.ridge(n.tone("#8fae8e"),e);const i=e(t)-1,s=n.tone("#b9ad9d"),o=n.tone("#8a5a4e");n.rect(t,34,i,i+9,s);for(let r=-17;r<=17;r+=3.4)n.rect(t+r,1.6,i+9,i+10.4,s);for(const[r,a]of[[-17,16],[17,14],[-4,21]])n.rect(t+r,5,i,i+a,s),n.poly(t+r,3.5,[[-3.3,i+a],[0,i+a+7],[3.3,i+a]],o),n.light(t+r,5,i,i+a,"rgba(255, 196, 120, 0.4)");n.light(t,34,i,i+9,"rgba(255, 196, 120, 0.35)")},n=>{n.ground(n.tone("#b39f8c"),2),n.along(16,t=>zr(n,t,0,n.rng.range(6,10),n.rng.range(6,10),n.tone("#c8b29a"),n.tone("#9a6253"),.6)),n.along(70,t=>{n.rect(t,5,0,20,n.tone("#bfb6a8")),n.poly(t,3,[[-2.8,20],[0,38],[2.8,20]],n.tone("#6f7f7a")),n.rect(t+18,6,0,24,n.tone("#c4b8a6")),n.circle(t+18,20,1.6,n.tone("#f1ead8")),n.light(t+18,2.6,19,21,"#fff0c8"),n.windows(t,5,6,18,.3,3),n.poly(t+18,3.5,[[-3.4,24],[0,30],[3.4,24]],n.tone("#8a5a4e"))})},n=>{n.ground(n.tone("#a07b66"),1),n.along(7,t=>{const e=n.rng.range(5,8),i=n.rng.range(3,6);zr(n,t,0,e,i,n.tone("#a98a74"),n.tone(n.rng.pick(["#8f5546","#7d4f42","#6e4e44"])),.7,.55),n.rng.chance(.5)&&n.rect(t+e*.25,.9,i+1,i+e*.55,n.tone("#7a5a4a"))})}],desert:[n=>{n.ground(n.tone("#d9b88c"),0),n.along(70,t=>Cc(n,t,0,n.rng.range(30,80),n.rng.range(14,32),n.tone("#b97b74")),.8),n.strata(n.tone("#a86c6a"),6,1.2,3,40),Cf(n)},n=>{const t=n.profile(3,5,[2,3,5]);n.ridge(n.tone("#e4c48c"),t),n.ridge(n.tone("#d7b47c"),n.profile(1,3,[3,4,7]))},n=>{n.ground(n.tone("#c8ad7c"),.6),ci(n,.3,n.tone("#9e9b6c"),.6,1.4,3.5),n.along(30,t=>{const e=n.tone("#6e7a48");n.rect(t,.5,0,4,e),n.rect(t-1,1.6,3,3.4,e),n.rect(t-1.6,.4,3,5.4,e),n.circle(t-1.6,5.6,.9,e),n.circle(t,4.3,1,e)})}],canyon:[n=>{n.ridge(n.tone("#c9806a"),n.profile(30,16,[2,3,5,9],!0),1.5),n.strata(n.tone("#b56f5c"),5,1.6,-5,52)},n=>{n.ground(n.tone("#b8694a"),0),n.along(50,t=>Cc(n,t,0,n.rng.range(36,70),n.rng.range(18,30),n.tone("#b8694a")),.6),n.strata(n.tone("#9f5a40"),4.5,1.2,2,34)},n=>{n.ridge(n.tone("#94543a"),n.profile(4,7,[3,5,8,13],!0),1),n.strata(n.tone("#844a33"),3.5,.8,-6,14)}],route66:[n=>{n.ground(n.tone("#cdb48f"),0),n.along(55,t=>Cc(n,t,0,n.rng.range(40,110),n.rng.range(6,13),n.tone("#bd9c94")),.8),Cf(n)},n=>{n.ground(n.tone("#c4a97a"),.5);const t=n.tone("#5d4a3c"),e=[];n.along(24,s=>e.push(s),.15);for(const s of e)n.rect(s,.5,0,10,t),n.rect(s,3.4,9,9.4,t);const i=n.g;i.strokeStyle=t,i.lineWidth=1;for(let s=0;s<e.length;s++){const o=e[s],r=s+1<e.length?e[s+1]:e[0]+n.tw;for(const a of[9.2,8.6])i.beginPath(),i.moveTo(n.X(o),n.Y(a)),i.quadraticCurveTo(n.X((o+r)/2),n.Y(a-1.8),n.X(r),n.Y(a)),i.stroke(),r>n.tw&&(i.beginPath(),i.moveTo(n.X(o-n.tw),n.Y(a)),i.quadraticCurveTo(n.X((o+r)/2-n.tw),n.Y(a-1.8),n.X(r-n.tw),n.Y(a)),i.stroke())}},n=>{n.ground(n.tone("#b39d70"),.5),ci(n,.3,n.tone("#9a946a"),.5,1.2,6),Rc(n,n.tw*.6,0,9,n.tone("#8f8a80")),n.along(70,t=>{n.rect(t-2.5,.4,0,6,n.tone("#6b5a48")),n.rect(t+2.5,.4,0,6,n.tone("#6b5a48")),n.rect(t,8,5,9,n.tone(n.rng.pick(["#c95f4f","#4f8fa6","#d9a441"]))),n.light(t,8,5,9,"rgba(255, 230, 170, 0.45)")})}]},lM={desert:1,route66:.6,canyon:.4},hM={suburb:"flock",forest:"flock",fields:"flock",oldtown:"flock",canyon:"circle"};function A0(n,t="#ffffff"){return new fn({color:t,vertexColors:n,transparent:!0,depthWrite:!1,fog:!1})}function Uh(n,t,e,i=1){const s=n.radius-i;return new P(Math.sin(t)*s,e-(n.bottom+n.height/2),Math.cos(t)*s)}function uM(n,t,e,i){const s=[];for(let l=0;l<5;l++){const[h,u]=[i.range(-7,7),i.range(-2.5,2.5)];for(const f of[-1,1])s.push({geo:y(2.2,.35,.1),color:"#ffffff",pos:[h+f*.95,u,0],rot:[0,0,f*.45]})}const o=A0(!1,t),r=new Xt(Ie(s),o),a=Math.PI+i.range(-.5,.5),c=i.range(26,34);return{object:r,material:o,update(l,h){const u=e==="circle"?a+Math.cos(h*.12)*.08:Math.PI+((h*.006+a)%1.6+1.6)%1.6-.8,f=e==="circle"?c+Math.sin(h*.12)*3:c+Math.sin(h*.4)*1.5;r.position.copy(Uh(n,u,f,6)),r.rotation.y=u+Math.PI,r.scale.y=.35+.65*Math.abs(Math.sin(h*(e==="circle"?2.5:7)))}}}function fM(n,t){const e=A0(!0),i=new Ke,s=t("#ece8df"),o=t("#c9c4b8"),r=new Xt(Ie([{geo:$(1.3,2.6,24,6),color:s,pos:[0,12,0]},{geo:y(3,2.6,4),color:o,pos:[0,25,.4]},{geo:Me(2.2,1.6,4),color:t("#8c5a48"),pos:[0,27,.4],rot:[0,Math.PI/4,0]}]),e),a=[{geo:$(.6,.6,.8,6),color:o,rot:[Math.PI/2,0,0]}];for(let h=0;h<4;h++){const u=h/4*Math.PI*2;a.push({geo:y(1.5,11,.2),color:s,pos:[Math.sin(u)*6,Math.cos(u)*6,0],rot:[0,0,-u]})}const c=new Xt(Ie(a),e);c.position.set(0,25,2.6),i.add(r,c);const l=Math.PI+.32;return i.position.copy(Uh(n,l,-1,4)),i.rotation.y=l+Math.PI,{object:i,material:e,update(h){c.rotation.z-=h*.9}}}const Lc=6,bo=new we;function dM(n,t,e,i){const s=[];for(const[l,h]of t)for(let u=0;u<n.repeat;u++){const f=Uo*(u+l)/n.repeat;Math.abs(f-Math.PI)<oM&&s.push(Uh(n,f,h,2))}if(!s.length)return null;const o=new fn({transparent:!0,depthWrite:!1,fog:!1}),r=new wh(new or(1,0),o,s.length*Lc);r.frustumCulled=!1;const a=new pt(e),c=new pt(i);return{object:r,material:o,update(l,h){let u=0;s.forEach((f,d)=>{for(let g=0;g<Lc;g++){const _=(h*.07+g/Lc+d*.37)%1;bo.position.set(f.x-_*9*Math.cos(d),f.y+_*16,f.z),bo.scale.setScalar(1.6+_*4.5),bo.rotation.set(_*2+d,g,0),bo.updateMatrix(),r.setMatrixAt(u,bo.matrix),r.setColorAt(u,rM.copy(a).lerp(c,_*.85)),u++}}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}}}const pM=Da.map(n=>new Gi(n.radius,n.radius,n.height,96,1,!0)),R0={value:0},di={uMul:{value:new pt("#ffffff")},uFog:{value:new pt("#ffffff")},uNight:{value:0},uFogMix:Da.map(()=>({value:0}))},C0=new Ra(new Uint8Array(4),1,1);C0.needsUpdate=!0;function mM(n,t,e,i){const s=new fn({map:n,transparent:!0,depthWrite:!1,fog:!1,side:rn});return s.onBeforeCompile=o=>{o.uniforms.uTime=R0,o.uniforms.uShimmer={value:e},o.uniforms.uLights={value:t},o.uniforms.uMul=di.uMul,o.uniforms.uFog=di.uFog,o.uniforms.uNight=di.uNight,o.uniforms.uFogMix=di.uFogMix[i],o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
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
          diffuseColor *= vec4(tinted + lit.rgb * lit.a * uNight, layerTex.a);`)},s.customProgramCacheKey=()=>"horizonLayer",s}function gM(n,t,e,i){di.uMul.value.copy(n),di.uFog.value.copy(t),di.uNight.value=i,Da.forEach((s,o)=>di.uFogMix[o].value=Math.min(1,s.fog*1.4)*e)}class vM{constructor(t){this.biome=t,this.layers=[],this.materials=[],this.lightMaps=[],this.extras=[],this.extraColors=[];const e=new qn(16609+t.id.charCodeAt(0)*131+t.id.length*7),i=new pt(t.palette.fog),s=lM[t.id]??0;Da.forEach((o,r)=>{const a=new aM(o,e,i);cM[t.id][r](a);const c=new ms(a.c);c.colorSpace=Ge,c.wrapS=ki,c.repeat.set(o.repeat,1),c.anisotropy=4;let l=C0;a.lights&&(l=new ms(a.lights),l.colorSpace=Ge,l.wrapS=ki,this.lightMaps.push(l));const h=mM(c,l,r<2?s:s*.5,r),u=new Xt(pM[r],h);if(u.position.y=o.bottom+o.height/2,u.frustumCulled=!1,this.layers.push(u),this.materials.push(h),r===1){const f=_=>a.tone(_),d=hM[t.id];d&&this.addExtra(u,uM(o,f("#3d3f45"),d,e)),t.id==="fields"&&this.addExtra(u,fM(o,f));const g=dM(o,a.emitters,f("#e9e6e0"),t.palette.skyBottom);g&&this.addExtra(u,g)}})}addExtra(t,e){this.extras.push(e),this.extraColors.push(e.material.color.clone()),e.object.renderOrder=1,t.add(e.object)}show(t,e,i){this.layers.forEach((s,o)=>{s.visible=t&&e>.001,s.renderOrder=-100+o*10+i;for(const r of s.children)r.renderOrder=s.renderOrder+2});for(const s of this.materials)s.opacity=e;for(const s of this.extras)s.material.opacity=e}update(t,e){this.extras.forEach((i,s)=>{i.update(t,e),i.material.color.copy(this.extraColors[s]).multiply(di.uMul.value)})}dispose(){var t;for(const e of this.materials)(t=e.map)==null||t.dispose(),e.dispose();for(const e of this.lightMaps)e.dispose();for(const e of this.extras)e.material.dispose(),e.object.traverse(i=>{var s;return(s=i.geometry)==null?void 0:s.dispose()})}}function _M(n){const t=new qn(n),e=[],i=t.int(3,5);for(let s=0;s<i;s++){const o=t.range(4,8);e.push({geo:Xe(o,1),color:"#ffffff",pos:[s*6-i*3,t.range(-1,2),t.range(-1.5,1.5)],scale:[1.3,.75,.9]})}return Ie(e)}class xM{constructor(){this.root=new Ke,this.sky=new nM,this.clouds=[],this.cloudAngles=[],this.sets=[],this.time=0,this.cloudMat=new Xn({vertexColors:!0,flatShading:!0,fog:!1,transparent:!0,depthWrite:!1,emissive:new pt("#ffffff"),emissiveIntensity:.35});const t=new qn(77);for(let e=0;e<8;e++){const i=new Xt(_M(500+e),this.cloudMat);i.renderOrder=-95,i.position.y=t.range(34,62),this.cloudAngles.push(Math.PI+(e-3.5)*.32+t.range(-.1,.1)),this.clouds.push(i),this.root.add(i)}this.root.add(this.sky.root)}show(t,e,i){for(const s of this.sets)s!==t&&s!==e&&s.show(!1,0,0);this.sets.length=0;for(const s of t===e?[t]:[t,e]){if(!s.layers[0].parent)for(const o of s.layers)this.root.add(o);this.sets.push(s)}t===e||i>=1?(t.show(t===e,1,0),e.show(!0,1,0)):(t.show(!0,1-i,0),e.show(!0,i,1))}detach(t){for(const e of t.layers)this.root.remove(e);this.sets=this.sets.filter(e=>e!==t)}update(t,e,i,s){this.time+=e,R0.value=this.time,this.root.position.set(t.position.x,0,t.position.z),this.sky.update(this.time,s.night,s.twilight,s.sun,s.dawn);for(const o of this.sets)o.update(e,this.time);this.cloudMat.color.copy(i),this.cloudMat.emissive.copy(i),this.clouds.forEach((o,r)=>{this.cloudAngles[r]+=e*.0035,this.cloudAngles[r]>Math.PI+1.4&&(this.cloudAngles[r]-=2.8);const a=this.cloudAngles[r];o.position.x=Math.sin(a)*244,o.position.z=Math.cos(a)*244,o.rotation.y=a})}}const MM="#7b5536",P0=["#4f9d55","#5fb35b","#3f8a4c","#78c262"],be={lamp:"#ffdc9c",sodium:"#ffa64c",window:"#ffc878",shop:"#ffe2a8",cool:"#c4e2ff",red:"#ff3b30",neonPink:"#ff5fa2",neonCyan:"#40e0d0"};function Ua(n,t,e,i){const s=Math.sin(n*12.9898+t*78.233+e*37.719)*43758.5453;return s-Math.floor(s)<i}const yM=new pt;function Qo(n,t){return`#${yM.set(n).multiplyScalar(t).getHexString()}`}const Go=new ti,Pf=new ti,qs=new bn,No=new P,SM=new P(0,1,0),Lf=new ae,bM=new P,Gs=new Dn,wM=new Dn;function ea(n){Gs.makeEmpty();for(const t of n)t.geo.boundingBox||t.geo.computeBoundingBox(),Go.setFromEuler(qs.set(...t.rot??[0,0,0])),Lf.compose(No.set(...t.pos??[0,0,0]),Go,bM.set(...t.scale??[1,1,1])),Gs.union(wM.copy(t.geo.boundingBox).applyMatrix4(Lf));return[Gs.min.x,Gs.max.x,Gs.min.z,Gs.max.z]}const EM=(n,t)=>n[0]<t[1]&&t[0]<n[1]&&n[2]<t[3]&&t[2]<n[3];function ss(n,t,e,i=0,s=0){return i?(Go.setFromAxisAngle(SM,i),n.map(o=>(No.set(...o.pos??[0,0,0]).applyQuaternion(Go),Pf.setFromEuler(qs.set(...o.rot??[0,0,0])).premultiply(Go),qs.setFromQuaternion(Pf),{...o,pos:[No.x+t,No.y+s,No.z+e],rot:[qs.x,qs.y,qs.z]}))):n.map(o=>{var r,a,c;return{...o,pos:[(((r=o.pos)==null?void 0:r[0])??0)+t,(((a=o.pos)==null?void 0:a[1])??0)+s,(((c=o.pos)==null?void 0:c[2])??0)+e]}})}class vn{constructor(t,e=[]){this.rng=t,this.clear=e,this.parts=[],this.length=B.chunkLength,this.taken=[]}addSolid(t,e,i=2){return this.add(t,e,i)?(this.taken.push(ea(e)),!0):!1}alwaysSolid(t){this.always(t),this.taken.push(ea(t))}addOpen(t,e,i=2,s=ea(e)){return!this.taken.some(o=>EM(o,s))&&this.add(t,e,i)}free(t,e=2){return this.clear.every(([i,s])=>t+e<i||t-e>s)}add(t,e,i=2){if(!this.free(t,i))return!1;for(const s of e)this.parts.push(s);return!0}always(t){for(const e of t)this.parts.push(e)}z(t=1){return-this.rng.range(t,this.length-t)}geometry(){return this.parts.length?Ie(this.parts):Ie([{geo:y(.01,.01,.01),color:"#000000",pos:[0,-5,0]}])}}function Oe(n,t,e,i,s,o=.012){return{geo:y(Math.abs(t-n),.01,Math.abs(i-e)),color:s,pos:[(n+t)/2,o-.005,(e+i)/2]}}function Na(n,t,e,i=P0,s=1){const o=n.range(1.6,3)*s,r=n.pick(i),a=n.range(1.3,2.1)*s;return[{geo:$(.2*s,.28*s,o,6),color:MM,pos:[t,o/2,e]},{geo:Xe(a,0),color:r,pos:[t,o+a*.8,e]},{geo:Xe(a*.7,0),color:r,pos:[t+a*.5,o+a*.4,e+.3]}]}function L0(n,t,e=1,i="#3f7d4a",s="#4c9157"){const o=2*e;return[{geo:$(.18*e,.25*e,o,5),color:"#6e4b30",pos:[n,o/2,t]},{geo:Me(1.6*e,3.2*e,7),color:i,pos:[n,o+1.2*e,t]},{geo:Me(1.15*e,2.5*e,7),color:s,pos:[n,o+2.7*e,t]}]}function ar(n,t,e,i,s){return{geo:Xe(i,0),color:s,pos:[t,i*.35,e],rot:[n.next()*3,n.next()*3,0],scale:[n.range(.9,1.4),n.range(.55,.9),n.range(.9,1.3)]}}function Fa(n,t,e,i,s){return[{geo:Xe(i,0),color:s,pos:[t,i*.6,e],scale:[1.2,.8,1.1]},{geo:Xe(i*.7,0),color:s,pos:[t+n.range(-.5,.5)*i,i*.5,e+i*.6],scale:[1.1,.8,1]}]}function I0(n,t,e,i,s=2,o=1.1){const r=[];for(let a=0;a<s;a++)r.push({geo:y(.1,.12,e),color:i,pos:[n,o*(.45+.5*a/Math.max(1,s-1)),t-e/2]});for(let a=0;a<=e;a+=2.5)r.push({geo:y(.16,o+.1,.16),color:i,pos:[n,(o+.1)/2,t-a]});return r}function D0(n,t,e=8.2){return[{geo:$(.13,.17,e,6),color:"#6b5038",pos:[n,e/2,t]},{geo:y(2.2,.16,.16),color:"#5d4632",pos:[n,e-.6,t]},{geo:$(.06,.06,.2,5),color:"#d9e2e6",pos:[n-.9,e-.42,t]},{geo:$(.06,.06,.2,5),color:"#d9e2e6",pos:[n+.9,e-.42,t]}]}function U0(n,t,e=.9){return[-e,e].map(i=>({geo:y(.04,.04,40),color:"#2d2d30",pos:[n+i,t,-20]}))}function N0(n,t={}){const e=t.rusty?"#4a4038":"#3a4c62",i=[{geo:y(1.8,.65,4.2),color:n,pos:[0,.62,0]},{geo:y(1.6,.55,t.pickup?1.6:2.2),color:e,pos:[0,1.2,t.pickup?-.5:.1]},{geo:y(1.62,.08,t.pickup?1.5:2),color:n,pos:[0,1.5,t.pickup?-.5:.1]}];if(t.pickup&&i.push({geo:y(1.8,.35,1.9),color:"#2e2f33",pos:[0,1,1.05]}),t.lights)for(const s of[-.6,.6])i.push({geo:y(.36,.16,.06),color:"#e8e6dc",pos:[s,.75,-2.12],glow:"#fff3c8"}),i.push({geo:y(.32,.14,.06),color:"#a8262c",pos:[s,.78,2.12],glow:be.red});for(const[s,o]of[[-.85,-1.35],[.85,-1.35],[-.85,1.35],[.85,1.35]])i.push({geo:$(.36,.36,.28,8),color:t.rusty?"#3a3530":"#1f2026",pos:[s,t.rusty?.28:.36,o],rot:[0,0,Math.PI/2]});return i}function F0(n,t,e,i,s="#6b7080"){const o=n.pick(i);return[{geo:y(.25,5,.25),color:s,pos:[t-1.6,2.5,e]},{geo:y(.25,5,.25),color:s,pos:[t+1.6,2.5,e]},{geo:y(5,2.6,.2),color:"#fafafa",pos:[t,5.6,e]},{geo:y(4.6,2.2,.22),color:o,pos:[t,5.6,e],glow:Qo(o,.6)},{geo:y(2.4,.5,.24),color:"#ffffff",pos:[t-.6,5.9,e],glow:"#a8a8a0"},{geo:Xe(.55,0),color:"#ffffff",pos:[t+1.4,5.5,e+.05],scale:[1,1,.3],glow:"#a8a8a0"}]}function va(n){return[{geo:y(12.8,.012,.5),color:"#6d7078",pos:[0,.006,n]},...[-.16,0,.16].map(t=>({geo:y(12.8,.02,.06),color:"#a9adb5",pos:[0,.012,n+t]}))]}function TM(n,t,e){const i="#7d6b55",s=n.pick(["#5c7a3a","#6b8a44"]),o=n.range(2.2,3.4),r=[{geo:$(.2,.3,o,6),color:i,pos:[t,o/2,e]}],a=n.int(2,4);for(let c=0;c<a;c++){const l=c/a*Math.PI*2+n.next(),h=n.range(1,1.8),u=[t,o*n.range(.7,.95),e],f=[t+Math.cos(l)*h,u[1]+n.range(.7,1.4),e+Math.sin(l)*h];r.push(Vt(u,f,.13,i,5,.1)),r.push({geo:Xe(.42,0),color:s,pos:[f[0],f[1]+.25,f[2]],scale:[1,1.3,1]}),r.push({geo:Me(.3,.6,5),color:s,pos:[f[0],f[1]+.7,f[2]]})}return r.push({geo:Xe(.45,0),color:s,pos:[t,o+.3,e],scale:[1,1.3,1]}),r}function AM(n,t,e){const i=[];for(let o=0;o<9;o++){const r=o/9*Math.PI*2,a=n.range(.3,.8);i.push({geo:Me(.07,1.1,3),color:o%2?"#7c9a58":"#6b8a4a",pos:[t+Math.cos(r)*.2,.5,e+Math.sin(r)*.2],rot:[Math.sin(r)*a,0,-Math.cos(r)*a]})}return n.chance(.5)&&i.push({geo:$(.03,.04,1.6,4),color:"#8a7a4a",pos:[t,1.4,e]},{geo:Xe(.18,0),color:"#f2ead2",pos:[t,2.2,e],scale:[1,2,1]}),i}function RM(n,t,e){const i="#6f9a52",s=[],o=[[0,.45,0,0],[.35,.95,.05,.5],[-.3,.9,-.05,-.4],[.1,1.35,0,.1]],r=n.int(2,4),a=[];for(const[c,l,h,u]of o.slice(0,r)){const f=n.next();s.push({geo:Jx(.38,6,4),color:i,pos:[t+c,l,e+h],rot:[0,f,u],scale:[1,1.15,.3]}),a.push([t+c-Math.sin(u)*Math.cos(f)*.42,l+Math.cos(u)*.42,e+h+Math.sin(u)*Math.sin(f)*.42])}for(const c of a.slice(Math.max(1,r-2)))s.push({geo:Xe(.08,0),color:"#d9456a",pos:c});return s}function CM(n,t){const e="#7a6450",i="#9aa0a7",o=[];for(const[r,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])o.push(Vt([n+r*1.3,0,t+a*1.3],[n+r*.25,8,t+a*.25],.07,e,4));for(const r of[2.5,5])o.push({geo:y(2.2-r*.2,.08,2.2-r*.2),color:e,pos:[n,r,t]});o.push({geo:y(.5,.5,.8),color:i,pos:[n,8+.2,t]});for(let r=0;r<12;r++){const a=r/12*Math.PI*2;o.push({geo:y(.05,1.3,.3),color:i,pos:[n+Math.cos(a)*.7,8+.4+Math.sin(a)*.7,t+.45],rot:[0,0,a+Math.PI/2]})}return o.push({geo:y(.05,.8,1.6),color:"#c0392b",pos:[n,8+.4,t-1.2]}),o.push({geo:$(1.4,1.4,1.2,10),color:"#8f9499",pos:[n+3,.6,t]}),o}function PM(n,t){return[{geo:Xe(.22,0),color:"#f2ecdc",pos:[n,.15,t],scale:[1,.7,1.5]},{geo:Me(.05,.4,4),color:"#f2ecdc",pos:[n-.25,.25,t-.2],rot:[0,0,1.2]},{geo:Me(.05,.4,4),color:"#f2ecdc",pos:[n+.25,.25,t-.2],rot:[0,0,-1.2]}]}function LM(n,t,e){const i=["#c98a64","#b8774f","#d79e74"],s=n.range(14,26),o=[];let r=0;for(let a=0;a<4;a++){const c=n.range(3,6);o.push({geo:y(s*(1-a*.12),c,s*.8*(1-a*.1)),color:i[a%3],pos:[t,r+c/2,e]}),r+=c}return o}function O0(n){const t=n.rng;for(const e of[-1,1]){for(let i=0;i<t.int(6,12);i++){const s=n.z();n.add(s,Fa(t,e*t.range(7.5,40),s,t.range(.35,.7),t.pick(["#9aa58a","#a3a98c","#8f9a7c"])),.6)}for(let i=0;i<t.int(1,3);i++){const s=n.z();n.add(s,TM(t,e*t.range(9,34),s),1.5)}for(let i=0;i<t.int(1,3);i++){const s=n.z();n.add(s,AM(t,e*t.range(7.8,24),s),.8)}if(t.chance(.6)){const i=n.z();n.add(i,RM(t,e*t.range(8,20),i),.8)}for(let i=0;i<t.int(2,5);i++){const s=n.z();n.add(s,[ar(t,e*t.range(7.5,30),s,t.range(.3,1.1),t.pick(["#c9a27a","#b08960","#a17d58"]))],1)}}if(n.add(-20,D0(-8.8,-20),.5),n.free(-20,20)&&n.always(U0(-8.8,7.75)),t.chance(.18)){const e=t.chance(.5)?-1:1,i=n.z(5);n.add(i,CM(e*t.range(16,26),i),4)}if(t.chance(.1)){const e=n.z(2);n.add(e,PM(t.chance(.5)?-8:8.2,e),.5)}if(t.chance(.3)){const e=t.chance(.5)?-1:1,i=n.z(10);n.add(i,LM(t,e*t.range(55,90),i),1)}}const If=["#c97d55","#b5704a","#d89a6a","#9b5b3e","#c4825a"];function Df(n,t,e,i,s,o){const r=[],a=n.range(8,14);let c=0,l=0;const h=n.int(3,5);for(let u=0;u<h;u++){const f=o/h,d=If[(u+Math.floor(n.next()*5))%If.length];r.push({geo:y(a-l,f,s-l*.6),color:d,pos:[e*(t+l+(a-l)/2),c+f/2,i]}),r.push({geo:y(.1,f*.18,s-l*.6),color:Qo(d,.82),pos:[e*(t+l-.04),c+f*.3,i]}),c+=f,l+=n.range(.4,1.6)}return r}function IM(n,t,e){const i="#8a7f74",s=n.range(2,3.2),o=[{geo:$(.1,.18,s,5),color:i,pos:[t,s/2,e]}];for(let r=0;r<3;r++){const a=n.next()*Math.PI*2,c=s*n.range(.5,.95);o.push(Vt([t,c,e],[t+Math.cos(a)*1.1,c+n.range(.5,1),e+Math.sin(a)*1.1],.06,i,4,.03))}return o}function DM(n,t){const e="#b5704a",i=[];for(const s of[-1,1])i.push({geo:y(6,16,7),color:e,pos:[s*13,8,t]}),i.push({geo:y(4.5,3,6.4),color:"#c97d55",pos:[s*9.5,15.5,t],rot:[0,0,s*.45]});i.push({geo:y(16,3.2,6.6),color:"#c4825a",pos:[0,18,t]}),i.push({geo:y(14,.5,6.7),color:"#9b5b3e",pos:[0,16.6,t]}),i.push({geo:y(12,1.6,5),color:"#d89a6a",pos:[0,20.2,t-.5]}),n.always(i)}function UM(n,t){const e="#6e4f33",i="#b08a62",s=[];s.push({geo:y(12.8,.03,1.8),color:"#7a5a3c",pos:[0,.015,-.2]});for(let o=-.9;o<.8;o+=.45)s.push({geo:y(12.8,.035,.05),color:"#5a4230",pos:[0,.02,-.2+o]});for(const o of[-1,1]){s.push({geo:y(1.6,11,1.6),color:i,pos:[o*8.4,5.5,t]}),s.push({geo:y(2,.4,2),color:Qo(i,.8),pos:[o*8.4,11.2,t]});for(const r of[2,5,8])s.push({geo:y(1.66,.12,1.66),color:Qo(i,.85),pos:[o*8.4,r,t]});for(let r=10.6;r<32;r+=2.6)s.push({geo:y(.16,1.3,.16),color:e,pos:[o*r,.65,t]});for(const r of[.55,1.05])s.push({geo:y(22,.12,.1),color:"#8a6646",pos:[o*20.8,r,t]});s.push({geo:y(.06,.9,.06),color:"#3a3330",pos:[o*2.6,9.95,t]})}s.push({geo:$(.38,.38,18.6,8),color:e,pos:[0,10.6,t],rot:[0,0,Math.PI/2]}),s.push({geo:y(6.4,1.4,.2),color:"#8a6646",pos:[0,9,t]}),s.push({geo:y(5.8,.9,.22),color:"#5e4630",pos:[0,9,t]}),s.push({geo:y(2.6,.18,.24),color:"#d9c9a4",pos:[0,9,t]}),s.push({geo:$(.75,.75,.1,10),color:e,pos:[9.4,.75,t-1],rot:[Math.PI/2,0,.15]}),n.always(s)}function NM(n,t,e){const i=t-e,s=(t+e)/2,o=[{geo:y(13.4,.03,i),color:"#6d6762",pos:[0,.015,s]}];o.push(...va(t).map(r=>({...r,pos:[r.pos[0],r.pos[1]+.02,r.pos[2]]}))),o.push(...va(e).map(r=>({...r,pos:[r.pos[0],r.pos[1]+.02,r.pos[2]]})));for(const r of[-1,1])o.push({geo:y(.35,.9,i),color:"#a39d96",pos:[r*6.85,.45,s]}),o.push({geo:y(.45,.12,i),color:"#8a847d",pos:[r*6.85,.95,s]}),o.push(Oe(r*6.6,r*140,t-1,e+1,"#4a2b1c",.014)),o.push(Oe(r*6.6,r*140,s+i*.2,s-i*.2,"#2b170e",.016)),o.push(Oe(r*6.6,r*140,t,t-1,"#c4825a",.015)),o.push(Oe(r*6.6,r*140,e+1,e,"#c4825a",.015));n.always(o)}function Kl(n,t=!1){const e=n.rng;t&&DM(n,-20);for(const i of[-1,1]){let s=e.range(-1,2);for(;s>-40;){const o=e.range(7,14);if(e.chance(.18)){s-=e.range(2,6);continue}const r=e.range(10,30);n.add(s-o/2,Df(e,e.range(12,18),i,s-o/2,o,r),o/2),s-=o}if(e.chance(.6)){const o=n.z(8);n.add(o,Df(e,e.range(26,34),i,o,e.range(14,24),e.range(26,40)),8)}for(let o=0;o<e.int(2,5);o++){const r=n.z();n.add(r,[ar(e,i*e.range(7.5,11.5),r,e.range(.4,1.3),e.pick(["#a86a48","#8f5a3c","#b98060"]))],1)}if(e.chance(.4)){const o=n.z();n.add(o,IM(e,i*e.range(8,11),o),1)}if(e.chance(.3)){const o=n.z(4);n.add(o,[{geo:y(3,.6,5),color:"#c4825a",pos:[i*12.2,e.range(5,9),o]}],3)}}}const FM=["#c95f4f","#4f8fa6","#d9a441","#e76f51","#3d8a6a"];function jl(n,t){return[{geo:y(.1,2.2,.1),color:"#7d8188",pos:[n,1.1,t]},{geo:y(1,.9,.08),color:"#1f1f22",pos:[n,2.35,t]},{geo:y(.9,.8,.1),color:"#f4f2ea",pos:[n,2.35,t]},{geo:Me(.5,.4,3),color:"#f4f2ea",pos:[n,1.8,t],rot:[0,0,Math.PI],scale:[1,1,.15]},{geo:$(.14,.14,.12,8),color:"#1f1f22",pos:[n-.18,2.25,t],rot:[Math.PI/2,0,0]},{geo:$(.14,.14,.12,8),color:"#1f1f22",pos:[n+.18,2.25,t],rot:[Math.PI/2,0,0]},{geo:$(.06,.06,.14,6),color:"#f4f2ea",pos:[n-.18,2.25,t],rot:[Math.PI/2,0,0]},{geo:$(.06,.06,.14,6),color:"#f4f2ea",pos:[n+.18,2.25,t],rot:[Math.PI/2,0,0]}]}function OM(n,t){return[{geo:y(.12,1,.06),color:"#2f7a4a",pos:[n,.5,t]},{geo:y(.14,.2,.07),color:"#f4f2ea",pos:[n,.9,t]}]}function kM(n,t,e){const i="#c0392b",s=[{geo:y(9,.5,8),color:"#f2efe8",pos:[n,4.6,t]},{geo:y(9.05,.25,8.05),color:i,pos:[n,4.35,t]},{geo:y(7.6,.05,6.4),color:"#f2efe8",pos:[n,4.32,t],glow:"#fff4dc"}];for(const[r,a]of[[-3.5,-3],[3.5,-3],[-3.5,3],[3.5,3]])s.push({geo:y(.3,4.3,.3),color:"#d9d9d4",pos:[n+r,2.15,t+a]});for(const r of[-1.6,1.6])s.push({geo:y(.7,1.5,.5),color:i,pos:[n,.75,t+r]}),s.push({geo:y(.72,.3,.52),color:"#f2efe8",pos:[n,1.2,t+r]});const o=n+e*8;return s.push({geo:y(6,3.6,9),color:"#e8e0cf",pos:[o,1.8,t]}),s.push({geo:y(.1,1.6,5),color:"#5d7f96",pos:[o-e*3.02,1.6,t],glow:be.shop}),s.push({geo:y(6.1,.4,9.1),color:i,pos:[o,3.4,t]}),s.push({geo:$(.15,.2,10,6),color:"#8a8f96",pos:[n-e*4.5,5,t+5]}),s.push({geo:$(1.5,1.5,.3,14),color:"#f2efe8",pos:[n-e*4.5,10.3,t+5],rot:[Math.PI/2,0,0],glow:"#d8d4c8"}),s.push({geo:$(1.15,1.15,.34,14),color:i,pos:[n-e*4.5,10.3,t+5],rot:[Math.PI/2,0,0],glow:"#e04030"}),s.push({geo:y(1.6,.4,.36),color:"#f2efe8",pos:[n-e*4.5,10.3,t+5],glow:"#d8d4c8"}),s}function BM(n,t,e){const i="#c7cdd2",s=n.pick(["#c0392b","#2a7fa8"]),o=[{geo:y(6.5,3.6,13),color:i,pos:[t,1.8,e]},{geo:$(3.25,3.25,3.6,12),color:i,pos:[t,1.8,e-6.5]},{geo:y(6.55,.5,13.05),color:s,pos:[t,1.2,e]},{geo:y(6.6,.9,13.1),color:"#3a4c62",pos:[t,2.3,e],glow:"#ffd99a"},{geo:y(6.8,.3,14),color:"#e9e6de",pos:[t,3.75,e]}];return o.push({geo:y(.25,8,.25),color:"#8a8f96",pos:[t,4,e+9]}),o.push({geo:y(.3,2.2,4.2),color:"#ff5fa2",pos:[t,8.4,e+9],glow:be.neonPink}),o.push({geo:y(.34,1.6,3.6),color:"#1f2a44",pos:[t,8.4,e+9]}),o.push({geo:Me(.9,1.6,3),color:"#40e0d0",pos:[t,6.6,e+9],rot:[0,0,Math.PI],scale:[1,1,.3],glow:be.neonCyan,blink:!0}),o}function zM(n,t,e,i){const s="#efe2c4",o=[{geo:y(7,3.4,20),color:s,pos:[t+i*3.5,1.7,e]},{geo:y(7.6,.4,20.6),color:"#a0522d",pos:[t+i*3.5,3.6,e]},{geo:y(14,3.4,6),color:s,pos:[t+i*10,1.7,e-7]},{geo:y(14.6,.4,6.6),color:"#a0522d",pos:[t+i*10,3.6,e-7]}];for(let a=0;a<6;a++){o.push({geo:y(.1,2.1,1),color:n.pick(["#3d8a6a","#c95f4f","#4f8fa6","#d9a441"]),pos:[t-i*.05,1.05,e+8-a*3.2]});const c=e+6.6-a*3.2;o.push({geo:y(.1,.9,1.3),color:"#5d7f96",pos:[t-i*.05,2,c],glow:Ua(t,2,c,.6)?be.window:void 0})}const r=t-i*3;o.push({geo:y(.3,9,.3),color:"#8a8f96",pos:[r,4.5,e+11]}),o.push({geo:y(.3,3.4,2.2),color:"#c0392b",pos:[r,8.6,e+11],glow:"#e04a3a"});for(let a=0;a<5;a++)o.push({geo:y(.34,.22,.22),color:"#fff6c4",pos:[r,7.3+a*.65,e+10.1],glow:be.lamp,blink:a%2===0});return o.push({geo:y(.3,.6,3.2),color:"#40e0d0",pos:[r,6.6,e+12.4],glow:be.neonCyan}),o.push({geo:Me(.7,1,3),color:"#40e0d0",pos:[r,6.6,e+10.4],rot:[Math.PI/2,0,0],scale:[.4,1,1],glow:be.neonCyan}),o}function HM(n,t){n.always(va(t)),n.always(jl(-7.6,t-4)),n.always(jl(7.6,t-4))}function k0(n){const t=n.rng;n.add(-20,D0(8.8,-20,8),.5),n.free(-20,20)&&n.always(U0(8.8,7.55));const e=[];for(const o of[-1,1]){for(let r=0;r<t.int(4,8);r++){const a=n.z();e.push([a,Fa(t,o*t.range(7.5,50),a,t.range(.35,.75),t.pick(["#a3a06a","#8d8a5a","#9a9a70"]))])}if(t.chance(.25)){const r=n.z(2);n.add(r,jl(o*7.6,r),.5)}if(t.chance(.4)){const r=n.z(1);n.add(r,OM(o*7.2,r),.3)}}const i=t.chance(.5)?-1:1,s=t.next();if(s<.2)n.addSolid(-20,kM(i*13,-20,i),9);else if(s<.38)n.addSolid(-20,BM(t,i*14,-20),9);else if(s<.52)n.addSolid(-20,zM(t,i*12,-20,i),12);else if(s<.7){const o=n.z(6);n.addSolid(o,F0(t,i*t.range(12,15),o,FM,"#7a6450"),3)}for(const[o,r]of e)n.addOpen(o,r,.6);if(t.chance(.18)){const o=n.z(4),r=-i;n.add(o,ss(N0(t.pick(["#8a4b2c","#7a5a3a","#6d7f7a"]),{rusty:!0}),r*t.range(9,15),o,t.range(-1,1)),3)}if(t.chance(.5)){const o=n.z(2);n.addOpen(o,[ar(t,(t.chance(.5)?-1:1)*t.range(8,25),o,t.range(.4,1),"#b39a74")],1)}}const GM=["#a5512f","#4a6f8f","#4f7a54","#8a8f93","#b88a3a","#7a4a6a"];function VM(n,t){const e=t*9.4,i=[];for(let o=-4;o>-40;o-=8)i.push({geo:y(.3,4.6,.3),color:"#6d7076",pos:[e-t*.9,2.3,o]}),i.push({geo:y(.3,4.6,.3),color:"#6d7076",pos:[e+t*.9,2.3,o]}),i.push({geo:y(2.2,.25,.25),color:"#6d7076",pos:[e,4.45,o]}),i.push({geo:y(2.2,.2,.2),color:"#6d7076",pos:[e,3.3,o]});const s=[[-.55,3.62,.3,"#8a8f96"],[.1,3.62,.22,"#b08a5a"],[.6,3.6,.18,"#6d8f8a"],[-.3,4.78,.32,"#9aa0a7"],[.45,4.74,.26,"#a9563f"]];for(const[o,r,a,c]of s)i.push({geo:$(a,a,40,8),color:c,pos:[e+t*o,r,-20],rot:[Math.PI/2,0,0]});n.always(i)}function WM(n,t,e,i){const s=n.range(14,22),o=n.range(16,28),r=n.range(8,13),a=n.pick(["#a8a49c","#9c6b5a","#b3ada2","#8d9196"]),c=[{geo:y(s,r,o),color:a,pos:[t,r/2,e]}],l=Math.floor(o/4);for(let u=0;u<l;u++){const f=e+o/2-2-u*4;c.push({geo:Ee([[-2,0],[2,0],[2,2.2]],s-.4),color:"#6f7377",pos:[t,r,f]}),c.push({geo:y(s-.6,1.9,.12),color:"#9fc0d0",pos:[t,r+1.05,f+1.95],glow:Ua(t,r,f,.5)?"#a87a44":void 0})}const h=t-i*(s/2+.05);for(let u=0;u<Math.floor(o/8);u++){const f=e+o/2-4-u*8;c.push({geo:y(.12,4,3.6),color:"#5d6168",pos:[h,2,f]});for(let d=0;d<4;d++)c.push({geo:y(.14,.06,3.6),color:"#4a4e55",pos:[h,.8+d*.9,f]})}if(c.push({geo:y(s+.05,.6,o+.05),color:n.pick(["#3d5a80","#a63d32","#4f6b4a"]),pos:[t,r-1.2,e]}),n.chance(.5)){const u=n.range(16,24);c.push({geo:$(.7,.9,u,8),color:"#9a9590",pos:[t+i*s*.3,u/2,e-o*.3]}),c.push({geo:$(.75,.75,1,8),color:"#c4524a",pos:[t+i*s*.3,u-1.2,e-o*.3]}),c.push({geo:y(.45,.45,.45),color:"#7a2a24",pos:[t+i*s*.3,u+.2,e-o*.3],glow:be.red,blink:!0})}return c}function XM(n,t,e){const i=[],s=n.int(1,3);for(let o=0;o<s;o++){const r=n.range(3.5,5.5),a=n.range(6,11),c=e-o*(r*2+1.5);i.push({geo:$(r,r,a,12),color:"#d0d0c8",pos:[t,a/2,c]}),i.push({geo:$(r*.98,r,.8,12),color:"#b9b9b0",pos:[t,a+.4,c]}),i.push({geo:$(r+.03,r+.03,.4,12),color:"#7f8a96",pos:[t,a*.5,c]}),i.push({geo:y(.2,a,.6),color:"#6d7076",pos:[t-r,a/2,c]})}return i}function qM(n,t,e){const i=[];for(let s=0;s<n.int(1,3);s++)for(let o=0;o<n.int(1,3);o++){const r=n.pick(GM),a=e-s*2.7;i.push({geo:y(6,2.5,2.4),color:r,pos:[t,1.25+o*2.55,a]});for(let c=-2;c<=2;c++)i.push({geo:y(.08,2.3,2.44),color:Qo(r,.8),pos:[t+c*1.2,1.25+o*2.55,a]})}return i}function YM(n,t,e){const s="#d8a531",o=[];for(let r=0;r<26;r+=2)o.push({geo:y(1.3,2,1.3),color:r/2%2?s:"#c08f24",pos:[n,r+1,t]});return o.push({geo:y(1,1,24),color:s,pos:[n+e*.5,26+.5,t-8]}),o.push({geo:y(1,1,7),color:s,pos:[n+e*.5,26+.5,t+6]}),o.push({geo:y(1.6,1.8,2.2),color:"#7a7f86",pos:[n+e*.5,26-.4,t+8.5]}),o.push({geo:y(1.6,1.4,1.6),color:"#e9e4d8",pos:[n-e*.6,26-.8,t+.8]}),o.push({geo:Me(.7,3.5,4),color:s,pos:[n,26+2.75,t],rot:[0,Math.PI/4,0]}),o.push({geo:y(.4,.4,.4),color:"#7a2a24",pos:[n,26+4.7,t],glow:be.red,blink:!0}),o.push({geo:y(.05,8,.05),color:"#2d2d30",pos:[n+e*.5,22,t-16]}),o.push({geo:y(.6,.5,.6),color:"#d8a531",pos:[n+e*.5,26-8.2,t-16]}),o}function $M(n,t,e){const i=[];for(let s=0;s<=e;s+=3)i.push({geo:y(.08,2.2,.08),color:"#8a8f96",pos:[n,1.1,t-s]});for(const s of[.4,1.1,1.8,2.15])i.push({geo:y(.03,s===2.15?.06:.03,e),color:"#9aa0a7",pos:[n,s,t-e/2]});return i}function KM(n,t,e){return[{geo:$(.12,.16,8,6),color:"#7d8188",pos:[n,4,t]},{geo:y(1.8,.12,.14),color:"#7d8188",pos:[n-e*.8,7.95,t]},{geo:y(.8,.2,.4),color:"#4a4e59",pos:[n-e*1.6,7.85,t]},{geo:y(.6,.06,.3),color:"#ffd9a0",pos:[n-e*1.6,7.73,t],glow:be.sodium}]}function B0(n){const t=n.rng;for(const e of[-1,1]){n.add(e<0?-12:-32,KM(e*7.4,e<0?-12:-32,e),.5);const i=t.chance(.45);if(i&&n.free(-20,20))VM(n,e);else if(t.chance(.5)){const o=-t.range(0,6),r=t.range(18,32);n.free(o-r/2,r/2)&&n.always($M(e*8.6,o,r))}let s=-t.range(2,6);for(;s>-36;){const o=t.next(),r=e*(i?14:12);if(o<.45){const a=WM(t,r+e*10,s-12,e);n.addSolid(s-12,a,12),s-=26}else if(o<.65){const a=XM(t,r+e*t.range(6,10),s-5);n.addSolid(s-5,a,6),s=Math.min(s-16,ea(a)[2]-1)}else o<.85?(n.addSolid(s-3,qM(t,r+e*t.range(3,8),s-3),4),s-=10):s-=t.range(5,10)}if(t.chance(.18)){const o=-t.range(14,26),r=e*t.range(26,34);n.addOpen(o,YM(r,o,e),3,[r-1,r+1,o-1,o+1])}if(t.chance(.15)){const o=n.z(6),r=e*t.range(16,22);n.addOpen(o,[{geo:y(1.2,.5,14),color:"#6d7076",pos:[r,4,o],rot:[.5,0,0]},{geo:y(4,4,4),color:"#8d9196",pos:[r,9,o-7]},{geo:Me(2.2,2.4,4),color:"#8d9196",pos:[r,5.8,o-7],rot:[Math.PI,Math.PI/4,0]}],8)}}}const jM=["#9fb0c0","#c8b9a6","#a7a39a","#d9d4ca","#8a9bb0","#b5a99a"],ZM=["#3f5466","#4a5a6a","#55606b"],z0=["#d9534f","#2a7f62","#e0a33a","#3b6ea8","#8e5c9e"];function JM(n,t,e,i,s,o){const r=n.pick(jM),a=n.pick(ZM),c=[{geo:y(i,o,s),color:r,pos:[t,o/2,e]}];for(let u=4.2;u<o-1.5;u+=3.2)c.push({geo:y(i+.06,1.5,s+.06),color:a,pos:[t,u,e]});const l=Math.max(2,Math.round(i/3.5));for(let u=1;u<l;u++)c.push({geo:y(.35,o-4,s+.12),color:r,pos:[t-i/2+u*i/l,o/2+1.5,e]});const h=Math.max(2,Math.round(s/3.5));for(let u=1;u<h;u++)c.push({geo:y(i+.12,o-4,.35),color:r,pos:[t,o/2+1.5,e-s/2+u*s/h]});return c.push({geo:y(i+.1,3,s+.1),color:"#5f6b78",pos:[t,1.5,e]}),c.push({geo:y(i*.5,2.2,s*.5),color:"#8a8f96",pos:[t,o+1.1,e]}),n.chance(.35)&&c.push({geo:$(.12,.12,8,4),color:"#d0d0d0",pos:[t,o+6,e]}),c.push(...QM(t,e,i,s,o,a)),c}function QM(n,t,e,i,s,o){const r=new qn(Math.round(n*31)*7919^Math.round(t*131)^Math.round(s*17)),a=[],c=n-Math.sign(n)*(e/2+.05),l=t+i/2+.05;for(let h=4.2;h<s-1.5;h+=3.2){for(let u=-i/2+1.2;u<i/2-1;u+=2.2)r.chance(.3)&&a.push({geo:y(.06,1.1,1.5),color:o,pos:[c,h,t+u],glow:r.chance(.7)?be.window:be.cool});for(let u=-e/2+1.2;u<e/2-1;u+=2.2)r.chance(.3)&&a.push({geo:y(1.5,1.1,.06),color:o,pos:[n+u,h,l],glow:r.chance(.7)?be.window:be.cool})}return a}function ty(n,t,e,i,s){const o=n.range(6,9),r=10,a=[{geo:y(r,o,s),color:n.pick(["#d8c9b0","#c9b29a","#e3ddd2","#b9a48c"]),pos:[t+i*r/2,o/2,e]}],c=t-i*.05;a.push({geo:y(.1,2.6,s-1.2),color:"#4a6176",pos:[c,1.6,e],glow:be.shop});const l=n.pick(z0);for(let h=0;h<4;h++)a.push({geo:y(1.6,.12,(s-1)/4-.05),color:h%2?l:"#f5f1e8",pos:[t-i*.75,3.3,e-(s-1)/2+(h+.5)*((s-1)/4)],rot:[0,0,i*.35]});return a.push({geo:y(.12,.7,s-2),color:l,pos:[c-i*.02,o-1,e]}),a}function H0(n,t,e){return[{geo:$(.4,.4,.05,8),color:"#f0ede6",pos:[n,.75,t]},{geo:$(.05,.05,.75,4),color:"#5a5a5a",pos:[n,.37,t]},{geo:y(.4,.45,.4),color:"#6b4a3a",pos:[n,.23,t-.6]},{geo:y(.4,.45,.4),color:"#6b4a3a",pos:[n,.23,t+.6]},{geo:$(.04,.04,2.3,4),color:"#d8d8d8",pos:[n,1.15,t]},{geo:Me(1.3,.5,8),color:e,pos:[n,2.35,t]}]}function ey(n,t){return[{geo:$(.08,.11,6,6),color:"#3e4450",pos:[n,3,t]},{geo:y(1.6,.08,.08),color:"#3e4450",pos:[n,5.95,t]},{geo:y(.5,.12,.3),color:"#f4f0e2",pos:[n-.8,5.88,t],glow:be.lamp},{geo:y(.5,.12,.3),color:"#f4f0e2",pos:[n+.8,5.88,t],glow:be.lamp}]}function ny(n,t,e){return[{geo:y(1.2,.6,1.2),color:"#9a948a",pos:[n,.3,t]},...Fa(e,n,t,.55,"#4f9d55").map(i=>({...i,pos:[i.pos[0],i.pos[1]+.5,i.pos[2]]}))]}function iy(n,t,e){const i=e*4.8;return[{geo:$(.12,.14,5.6,6),color:"#3a3f48",pos:[n,2.8,t]},{geo:y(Math.abs(n-i),.12,.12),color:"#3a3f48",pos:[(n+i)/2,5.5,t]},{geo:y(.45,1.2,.35),color:"#24272d",pos:[i,4.95,t]},{geo:y(.28,.28,.06),color:"#ff3b30",pos:[i,5.32,t+.19],glow:be.red},{geo:y(.28,.28,.06),color:"#5a4a20",pos:[i,4.96,t+.19]},{geo:y(.28,.28,.06),color:"#1f3d2a",pos:[i,4.6,t+.19]}]}const sy=["#d9d9d4","#a7adb5","#5d636e","#c4b59a","#8a4040","#3f5f7f"];function oy(n,t){const e=n.rng,i=[],s=6;for(const o of[-1,1]){i.push(Oe(o*6.4,o*90,t+s,t-s,"#34363d",.013)),i.push(Oe(o*6.4,o*90,t+.08,t-.08,"#e8e4d8",.015));for(const r of[t+2.6,t-2.6]){let a=9+e.range(0,3);for(let c=0;c<e.int(0,2);c++)i.push(...ss(N0(e.pick(sy),{lights:!0}),o*(a+2.1),r,o<0?Math.PI/2:-Math.PI/2)),a+=5.4}}for(const o of[t+s+2,t-s-2])for(let r=0;r<11;r++)i.push({geo:y(.55,.012,2.8),color:"#ece9e0",pos:[-5.5+r*1.1,.006,o]});i.push({geo:y(9,.012,.4),color:"#ece9e0",pos:[0,.006,t+s+4]});for(const o of[-1,1])for(const r of[t+s+.5,t-s-.5])i.push(...iy(o*7.2,r,o));n.always(i)}function Zl(n,t=!1){const e=n.rng,i=-20;t&&(n.clear.push([i-9,i+9]),oy(n,i));for(const s of[-1,1]){for(const r of[-10,-30])n.add(r,ey(s*7.1,r),.3);if(e.chance(.6))for(let r=-5;r>-40;r-=e.range(9,14))n.add(r,ny(s*7.6,r,e),.7);let o=0;for(;o>-40;)if(e.chance(.62)){const r=e.range(10,16),a=e.range(12,18),c=e.range(18,58);n.add(o-r/2,JM(e,s*(10.5+a/2),o-r/2,a,r,c),r/2)?o-=r+e.range(.5,2):o-=4}else{const r=e.range(8,12);if(n.add(o-r/2,ty(e,s*10.5,o-r/2,s,r),r/2)){if(e.chance(.4))for(let a=0;a<2;a++)n.always(H0(s*e.range(8.2,9.2),o-2-a*3.4,e.pick(z0)));o-=r+.5}else o-=4}}}const ry=["#e9c46a","#f4a5a0","#a8d5ba","#9cc3e0","#f1e3c8","#d98c5f","#c9a0dc","#e8d3a3"],ay=["#a0522d","#8b4a3c","#6e4b3a","#5f6b73","#9a5a44"];function Uf(n,t,e,i,s){const o=n.range(7,9),r=n.range(7.5,12),a=t+i*o/2,c=n.pick(ry),l=n.pick(ay),h=s*n.range(.7,1),u=[{geo:y(o,r,s),color:c,pos:[a,r/2,e]},{geo:Ee([[-s/2-.25,0],[s/2+.25,0],[0,h]],o+.4),color:l,pos:[a,r,e]},{geo:Ee([[-s/2+.05,0],[s/2-.05,0],[0,h-.3]],.1),color:c,pos:[t-i*.25,r,e]},{geo:y(.2,.3,s+.1),color:"#f2ede2",pos:[t-i*.02,r,e]}],f=t-i*.06,d=Math.floor((r-1)/3);for(let g=0;g<d;g++){const _=1.8+g*3;for(const p of s>5.5?[-s/4,s/4]:[0]){if(g===0&&p<=0){u.push({geo:y(.12,2.2,1.1),color:"#6b3f2a",pos:[f,1.1,e+p]});continue}u.push({geo:y(.12,1.4,.9),color:"#3f4c5a",pos:[f,_,e+p],glow:Ua(f,_,e+p,.55)?be.window:void 0}),u.push({geo:y(.14,.12,1.1),color:"#f2ede2",pos:[f,_+.76,e+p]}),g>0&&n.chance(.5)&&(u.push({geo:y(.35,.25,1),color:"#7a4a2a",pos:[f-i*.15,_-.82,e+p]}),u.push({geo:y(.3,.2,.9),color:n.pick(["#e04f6a","#f08ab0","#f2c14e","#d94f3a"]),pos:[f-i*.15,_-.62,e+p]}))}}return n.chance(.4)&&u.push({geo:y(.8,1.6,.8),color:"#8a6a5a",pos:[a+i*o*.2,r+h*.6,e+s*.15]}),u}function cy(n,t){return[{geo:$(.08,.12,3.6,6),color:"#2f3338",pos:[n,1.8,t]},{geo:y(.42,.55,.42),color:"#ffe7a8",pos:[n,3.85,t],glow:"#ffc35a"},{geo:Me(.38,.4,4),color:"#2f3338",pos:[n,4.32,t],rot:[0,Math.PI/4,0]},{geo:y(.5,.06,.5),color:"#2f3338",pos:[n,3.57,t]}]}function Ic(n,t){return[{geo:y(.45,.08,1.6),color:"#8a5a3a",pos:[n,.45,t]},{geo:y(.08,.45,1.6),color:"#8a5a3a",pos:[n+.2,.75,t]},{geo:y(.4,.45,.08),color:"#2f3338",pos:[n,.22,t-.7]},{geo:y(.4,.45,.08),color:"#2f3338",pos:[n,.22,t+.7]}]}function ly(n,t){return[{geo:$(2.6,2.8,.6,12),color:"#c8bfaf",pos:[n,.3,t]},{geo:$(2.3,2.3,.62,12),color:"#6fb3d2",pos:[n,.32,t]},{geo:$(.3,.45,1.6,8),color:"#c8bfaf",pos:[n,1.1,t]},{geo:$(.9,.6,.25,10),color:"#c8bfaf",pos:[n,1.9,t]},{geo:Me(.5,1.2,8),color:"#cfe9f5",pos:[n,2.6,t]}]}function hy(n,t,e,i){const s="#c8bfaf";return[{geo:y(6,7.5,.8),color:s,pos:[n+e*3,3.75,t+i/2]},{geo:y(6,7.5,.8),color:s,pos:[n+e*3,3.75,t-i/2]},{geo:y(6,1.6,i+.8),color:s,pos:[n+e*3,6.7,t]},{geo:y(6.1,.3,i+1),color:"#a39985",pos:[n+e*3,7.55,t]}]}function uy(n,t){const i="#4f6a86",s=[];for(const o of[-1,1]){const r=o*6.5,a=o*100;s.push(Oe(r,a,t-6.5,t+6.5,"#4a7f9e",.014)),s.push(Oe(r,a,t+1,t+1.6,"#6f9fba",.016));for(const c of[-1,1])s.push(Oe(r,a,t+c*6.5,t+c*7.6,"#7d7b74",.015)),s.push({geo:y(Math.abs(a-r)-4,.5,.4),color:"#a19f97",pos:[o*53.5,.25,t+c*7.4]});for(let c=t-8.5;c<=t+8.5+.01;c+=1.5)s.push({geo:y(.1,1.1,.1),color:i,pos:[o*6.8,.55,c]});s.push({geo:y(.14,.12,8.5*2),color:i,pos:[o*6.8,1.1,t]}),s.push({geo:y(.08,.08,8.5*2),color:i,pos:[o*6.8,.6,t]}),s.push({geo:y(.5,.3,8.5*2),color:"#8e8e88",pos:[o*6.95,.15,t]});for(const c of[-6,6]){const l=t+c*o;s.push({geo:$(.1,.13,6.5,6),color:"#5b6370",pos:[o*7.3,3.25,l]}),s.push({geo:y(1.6,.12,.12),color:"#5b6370",pos:[o*6.6,6.45,l]}),s.push({geo:y(.6,.16,.36),color:"#3f4550",pos:[o*5.9,6.35,l]}),s.push({geo:y(.5,.05,.28),color:"#fff3d0",pos:[o*5.9,6.25,l],glow:be.lamp})}}s.push({geo:y(18,1.1,5),color:"#3d4650",pos:[36,.55,t+2]}),s.push({geo:y(18.2,.2,5.2),color:"#a5512f",pos:[36,1.15,t+2]}),s.push({geo:y(3.4,2.4,3.6),color:"#e8e4da",pos:[44,2.3,t+2]}),s.push({geo:y(3.6,.2,3.8),color:"#3d4650",pos:[44,3.6,t+2]}),s.push({geo:y(6,2.4,2.4),color:"#4a6f8f",pos:[32,2.45,t+2]}),s.push({geo:y(6,2.4,2.4),color:"#b88a3a",pos:[25.5,2.45,t+2]}),s.push({geo:y(13.2,.03,8.5*2),color:"#8e8e88",pos:[0,.015,t]});for(const o of[-8.5,8.5])s.push({geo:y(13.2,.04,.4),color:"#6d7078",pos:[0,.02,t+o]});n.always(s)}function fy(n,t){const e="#c9bba4",i="#a8987f",s=[];for(let a=1;a<14;a++){const c=Math.PI*(a+.5)/15;s.push({geo:y(2.1,1.8,3),color:a%2?e:i,pos:[Math.cos(c)*8.4,4+Math.sin(c)*8.4,t],rot:[0,0,c-Math.PI/2]})}for(let a=4.25;a<7.5;a+=.5){const c=4+Math.sqrt(Math.max(0,81-(a+.25)**2))-.4;for(const l of[-1,1])s.push({geo:y(.5,13.5-c,2.9),color:e,pos:[l*a,(c+13.5)/2,t]})}s.push({geo:y(22,3,3),color:e,pos:[0,14.2,t]});for(let a=-10;a<=10;a+=2)s.push({geo:y(1,1,3.1),color:e,pos:[a,16.2,t]});for(const a of[-1,1]){s.push({geo:y(3.4,13,3.2),color:e,pos:[a*8.9,6.5,t]}),s.push({geo:y(5.5,17,5.5),color:e,pos:[a*13.4,8.5,t]}),s.push({geo:Me(4.6,6,4),color:"#8b4a3c",pos:[a*13.4,20,t],rot:[0,Math.PI/4,0]}),s.push({geo:y(1,1.6,.2),color:"#3f4c5a",pos:[a*13.4,12,t+2.8]}),s.push({geo:y(30,8,2.4),color:i,pos:[a*31,4,t]});for(let c=17;c<46;c+=2.2)s.push({geo:y(1.1,1,2.4),color:i,pos:[a*c,8.5,t]})}n.always(s)}function G0(n){const t=n.rng,e=t.chance(.3)?t.chance(.5)?-1:1:0;for(const i of[-1,1]){for(let o=i<0?-6:-19;o>-40;o-=13)n.add(o,cy(i*7.3,o),.3);if(i===e&&n.free(-20,8)){n.always(ly(i*16,-20));for(let r=0;r<3;r++)n.always(H0(i*t.range(9,11),-26+r*6,t.pick(["#c0392b","#2a7f62","#e0a33a"])));n.always(Ic(i*8.2,-6)),n.always(Ic(i*8.2,-34));for(const r of[-2,-38])n.add(r,Uf(t,i*9.5,r,i,4.5),2.4);continue}let s=-.2;for(;s>-40;){const o=t.range(4.5,7);if(s-o<-40)break;if(t.chance(.14)&&s-o-4>-40&&n.add(s-2,hy(i*9.5,s-2,i,3.4),2)){s-=4.2;continue}n.add(s-o/2,Uf(t,i*9.5,s-o/2,i,o),o/2),s-=o+.05}if(t.chance(.5)){const o=n.z(3);n.add(o,Ic(i*8.1,o),1)}}}const dy=["#f6e7c8","#fbd9c5","#d9ecf2","#e8f2d0","#f3d4e0","#fff3d6"],py=["#c8553d","#8c5a3c","#5b6c8f","#a4493d","#6b7f5a"],my=["#ffd23f","#f25f5c","#7bdff2","#b388eb"];function V0(n,t,e,i,s=dy,o=py){const r=n.range(6,9),a=n.range(6,8),c=n.range(3.2,5.5),l=n.pick(s),h=n.pick(o),u=[{geo:y(r,c,a),color:l,pos:[t,c/2,e]},{geo:Me(Math.SQRT1_2,1,4),color:h,pos:[t,c+1.1,e],rot:[0,Math.PI/4,0],scale:[r*1.15,2.2,a*1.15]}],f=t-i*(r/2+.02);for(const d of[-a/4,a/4])u.push({geo:y(.1,1.2,1.2),color:"#9fd3f0",pos:[f,c*.55,e+d],glow:Ua(f,c,e+d,.6)?be.window:void 0});return u.push({geo:y(.12,2,1),color:"#8a5634",pos:[f,1,e]}),n.chance(.5)&&u.push({geo:y(.8,1.6,.8),color:"#9a6b5b",pos:[t+r*.25,c+1.6,e-a*.2]}),u}function gy(n,t,e){return[{geo:$(.1,.13,6.5,6),color:"#6b7080",pos:[n,3.25,t]},{geo:y(2.2,.12,.12),color:"#6b7080",pos:[n-e*1,6.45,t]},{geo:y(.7,.18,.4),color:"#4a4e59",pos:[n-e*2,6.35,t]},{geo:y(.55,.06,.3),color:"#fff6c4",pos:[n-e*2,6.24,t],glow:be.lamp}]}function vy(n,t,e){return n.chance(.4)?L0(t,e,n.range(.8,1.5)/1.25):Na(n,t,e)}function _y(n,t,e){const i=[{geo:y(.08,.1,e),color:"#ffffff",pos:[n,.8,t-e/2]},{geo:y(.08,.1,e),color:"#ffffff",pos:[n,.45,t-e/2]}];for(let s=0;s<=e;s+=2)i.push({geo:y(.12,1,.12),color:"#ffffff",pos:[n,.5,t-s]});return i}function W0(n){const t=n.rng,e=n.length;for(const i of[-1,1]){for(let r=i<0?-5:-15;r>-e;r-=20)n.add(r,gy(i*7.3,r,i),.5);let s=-t.range(2,8);for(;s>-e+4;){const r=t.next();r<.55?(n.addSolid(s-4,V0(t,i*t.range(17,24),s-4,i),5),s-=t.range(11,15)):r<.68?(n.addSolid(s-2,F0(t,i*t.range(11,13),s-2,my),1),s-=10):s-=t.range(6,10)}const o=t.int(3,6);for(let r=0;r<o;r++){const a=n.z();n.addOpen(a,vy(t,i*t.range(9.5,32),a))}if(t.chance(.5)){const r=-t.range(0,10),a=t.range(16,28);n.free(r-a/2,a/2)&&n.always(_y(i*9,r,a))}}}function Nf(n,t){const i=[];for(const s of[-1,1]){const o=s*6.5,r=s*80;i.push(Oe(o,r,t-3.2,t+3.2,"#4d8fb5",.014)),i.push(Oe(o,r,t-3.2,t-2.5,"#6b8fa0",.016)),i.push(Oe(o,r,t+3.2,t+3.9,"#6b5a3e",.013)),i.push(Oe(o,r,t-3.9,t-3.2,"#6b5a3e",.013));for(let c=0;c<9;c++){const l=s*n.rng.range(8,30),h=t+(n.rng.chance(.5)?1:-1)*n.rng.range(2.6,3.6);for(let u=0;u<3;u++)i.push({geo:y(.06,1.3,.06),color:u?"#8a9a4a":"#a7a65a",pos:[l+u*.15,.65,h+u*.1],rot:[0,0,(u-1)*.15]})}const a=s*6.75;for(let c=t-4.2;c<=t+4.2+.01;c+=1.4)i.push({geo:y(.16,1.1,.16),color:"#6e4f33",pos:[a,.55,c]});i.push({geo:y(.12,.12,4.2*2),color:"#8a6646",pos:[a,1.05,t]}),i.push({geo:y(.1,.1,4.2*2),color:"#8a6646",pos:[a,.6,t]}),i.push({geo:y(1.2,.5,1.2),color:"#8f8a80",pos:[s*7.1,.25,t+4.2]}),i.push({geo:y(1.2,.5,1.2),color:"#8f8a80",pos:[s*7.1,.25,t-4.2]})}i.push({geo:y(13.2,.03,4.2*2),color:"#7d6045",pos:[0,.015,t]});for(let s=t-4.2+.25;s<t+4.2;s+=.5)i.push({geo:y(13.2,.012,.05),color:"#5f4630",pos:[0,.032,s]});n.always(i)}function xy(n,t){const e=n.rng,i=6,s="#b3a894",o=[];for(const r of[-1,1]){const a=r*6.5,c=r*90;o.push(Oe(a,c,t-3,t+3,"#4d8fb5",.014)),o.push(Oe(a,c,t-1.4,t-.9,"#79b3d2",.016)),o.push(Oe(a,c,t+3,t+3.8,"#6b5a3e",.013)),o.push(Oe(a,c,t-3.8,t-3,"#6b5a3e",.013)),o.push({geo:y(.6,1,i*2),color:s,pos:[r*6.9,.5,t]}),o.push({geo:y(.8,.16,i*2+.2),color:"#cfc6b3",pos:[r*6.9,1.08,t]});for(const l of[-i,i])o.push({geo:y(1.1,1.5,1.1),color:"#a0957f",pos:[r*6.9,.75,t+l]});for(let l=0;l<4;l++)o.push(ar(e,r*e.range(9,40),t+e.range(-2,2),e.range(.3,.7),e.pick(["#8d8a80","#9a978c"])));for(let l=0;l<6;l++){const h=r*e.range(8,26),u=t+(e.chance(.5)?1:-1)*e.range(3.2,4);for(let f=0;f<3;f++)o.push({geo:y(.06,1.2,.06),color:f?"#8a9a4a":"#a7a65a",pos:[h+f*.15,.6,u+f*.1],rot:[0,0,(f-1)*.15]})}o.push(...Na(e,r*e.range(11,16),t-7.5,["#6aa457","#7cb862"]))}o.push({geo:y(13.2,.03,i*2),color:"#44464e",pos:[0,.015,t]});for(const r of[-i,i])o.push({geo:y(13.2,.04,.3),color:"#8d8a84",pos:[0,.02,t+r]});n.always(o)}function Jl(n){const t=n.rng;for(const e of[-1,1]){const i=t.int(14,20);for(let s=0;s<i;s++){const o=e*(8.6+Math.pow(t.next(),1.4)*38),r=n.z(),a=t.range(.9,1.7);n.add(r,L0(o,r,a,t.pick(["#2f6a3e","#3a7445","#2c5f3a"]),t.pick(["#3f8350","#47895a"])),1.2)}for(let s=0;s<t.int(1,3);s++){const o=n.z();n.add(o,Na(t,e*t.range(9,20),o,["#5d9a4f","#4f8a45","#6aa457"]))}for(let s=0;s<t.int(3,7);s++){const o=n.z(),r=e*t.range(7.2,9.5);n.add(o,[0,1,2].map(a=>({geo:Me(.18,.9,4),color:a?"#5f9a4a":"#4d873e",pos:[r+(a-1)*.3,.3,o+a*.2],rot:[0,0,(a-1)*.9]})),.5)}if(t.chance(.6)){const s=n.z(4),o=e*t.range(8.5,14),r=t.range(3.5,6);n.add(s,[{geo:$(.32,.36,r,7),color:"#7a5a3c",pos:[o,.32,s],rot:[Math.PI/2,t.range(-.5,.5),0]},{geo:$(.3,.3,.05,7),color:"#c8a57a",pos:[o,.32,s+r/2+.015],rot:[Math.PI/2,0,0]}],3)}for(let s=0;s<t.int(1,3);s++){const o=n.z();n.add(o,[ar(t,e*t.range(7.5,18),o,t.range(.4,1.1),t.pick(["#8d8a80","#7b7a72","#9a978c"]))],1)}if(t.chance(.35)){const s=-t.range(0,12),o=t.range(14,24);n.free(s-o/2,o/2)&&n.always(I0(e*7.6,s,o,"#8a6646"))}}if(t.chance(.25)){const e=t.chance(.5)?-1:1,i=n.z(8),s=e*t.range(16,26),o=t.range(3.5,6),r=[{geo:$(o+.6,o+.6,.02,10),color:"#5b4d3a",pos:[s,.01,i],scale:[1,1,.7]},{geo:$(o,o,.03,10),color:"#4d8fb5",pos:[s,.015,i],scale:[1,1,.7]}];for(let a=0;a<8;a++){const c=t.range(0,Math.PI*2);r.push({geo:y(.06,1.2,.06),color:"#8a9a4a",pos:[s+Math.cos(c)*o,.6,i+Math.sin(c)*o*.7]})}n.add(i,r,o)}}function My(n){const t=n.range(8,11),e=n.range(10,14),i=4.5,s=n.pick(["#b4473c","#a83f36","#9b4a3a"]);return[{geo:y(t,i,e),color:s,pos:[0,i/2,0]},{geo:Ee([[-t/2-.3,0],[-t/2+.6,2],[0,3.2],[t/2-.6,2],[t/2+.3,0]],e+.4),color:"#5a4a44",pos:[0,i,0],rot:[0,Math.PI/2,0]},{geo:y(.12,3.2,3),color:"#f2ead8",pos:[-t/2-.02,1.6,0]},{geo:y(.14,.2,3.2),color:"#f2ead8",pos:[-t/2-.03,1.6,0],rot:[.78,0,0]},{geo:y(.14,.2,3.2),color:"#f2ead8",pos:[-t/2-.03,1.6,0],rot:[-.78,0,0]}]}function Ff(n){return[{geo:$(1.8,1.8,n,10),color:"#cfd2d3",pos:[0,n/2,0]},{geo:Xe(1.8,1),color:"#b6bcc0",pos:[0,n,0],scale:[1,.6,1]},{geo:$(1.85,1.85,.25,10),color:"#9aa1a6",pos:[0,n*.4,0]}]}function yy(){return[{geo:y(.12,2.6,.12),color:"#7d5a3a",pos:[0,1.3,0]},{geo:y(.12,.12,1.8),color:"#7d5a3a",pos:[0,2,0]},{geo:y(.3,.8,.9),color:"#4e7ab0",pos:[0,1.85,0]},{geo:Xe(.26,0),color:"#e3c565",pos:[0,2.55,0]},{geo:$(.12,.42,.35,8),color:"#8a6a3a",pos:[0,2.85,0]}]}function Sy(){return[{geo:y(1.3,1,2.2),color:"#3f6b3a",pos:[0,1.1,-.3]},{geo:y(1.2,1.2,1.1),color:"#3a4048",pos:[0,2,.6]},{geo:y(1.25,.08,1.2),color:"#3f6b3a",pos:[0,2.65,.6]},{geo:$(.75,.75,.45,10),color:"#24262b",pos:[-.85,.75,.7],rot:[0,0,Math.PI/2]},{geo:$(.75,.75,.45,10),color:"#24262b",pos:[.85,.75,.7],rot:[0,0,Math.PI/2]},{geo:$(.45,.45,.3,8),color:"#24262b",pos:[-.7,.45,-1.2],rot:[0,0,Math.PI/2]},{geo:$(.45,.45,.3,8),color:"#24262b",pos:[.7,.45,-1.2],rot:[0,0,Math.PI/2]}]}const by=["#E3C565","#8DBF4E","#8B6B4A","#d8bc5c","#7fb247"];function wy(n,t){const e=[{geo:y(12.8,.012,2.6),color:"#3d3f44",pos:[0,.006,t]}];for(let i=0;i<11;i++)e.push({geo:y(12.8,.03,.1),color:"#9a9ea6",pos:[0,.015,t-1.25+i*.25]});for(const i of[-1,1]){e.push({geo:y(.4,1.7,.4),color:"#6b5038",pos:[i*7.2,.85,t]}),e.push({geo:Me(.32,.3,4),color:"#5a4230",pos:[i*7.2,1.85,t],rot:[0,Math.PI/4,0]});for(let s=7.2;s<18;s+=2.6)e.push({geo:y(.14,1.2,.14),color:"#8a6646",pos:[i*(s+2.6),.6,t]});e.push({geo:y(10.8,.12,.1),color:"#8a6646",pos:[i*12.6,1,t]}),e.push({geo:y(10.8,.12,.1),color:"#8a6646",pos:[i*12.6,.55,t]})}n.always(e)}function X0(n){const t=n.rng,e=n.length,i=[];for(const s of[-1,1]){let o=0;for(;o>-e;){const r=Math.min(t.range(8,22),e+o),a=t.pick(by),c=s*8.2,l=s*t.range(45,70);if(n.always([Oe(c,l,o,o-r,a)]),a==="#8B6B4A")for(let h=o-1;h>o-r;h-=1.5)n.always([Oe(c,l,h,h-.3,"#76593c",.014)]);else if(a==="#E3C565"||a==="#d8bc5c")for(let h=0;h<t.int(0,3);h++){const u=o-t.range(1,r-1),f=s*t.range(11,40);i.push([u,[{geo:$(.75,.75,1.3,10),color:"#e2c262",pos:[f,.75,u],rot:[0,0,Math.PI/2]},{geo:$(.55,.55,1.32,10),color:"#c9a646",pos:[f,.75,u],rot:[0,0,Math.PI/2]}],1])}o-=r}if(t.chance(.65)){const r=-t.range(0,6),a=t.range(20,34);n.free(r-a/2,a/2)&&n.always(I0(s*7.6,r,a,"#9a7a55"))}if(t.chance(.2)){const r=n.z(3);i.push([r,ss(yy(),s*t.range(12,24),r,t.range(-.5,.5)),1])}if(t.chance(.15)){const r=n.z(4);i.push([r,ss(Sy(),s*t.range(10,16),r,t.range(-.6,.6)),3])}for(let r=0;r<t.int(0,2);r++){const a=n.z();i.push([a,Na(t,s*t.range(9,30),a,P0),2])}}if(t.chance(.55)){const s=t.chance(.5)?-1:1,o=-t.range(8,30),r=s*t.range(22,30);n.free(o,12)&&(n.alwaysSolid(V0(t,r,o+7,s,["#f4ead6","#efe2c4","#e6e9e2"],["#7a3a32","#5d4c46"])),n.alwaysSolid(ss(My(t),r+s*4,o-8,0)),n.alwaysSolid(ss(Ff(t.range(9,13)),r+s*14,o-2)),t.chance(.6)&&n.alwaysSolid(ss(Ff(t.range(8,11)),r+s*17.5,o-4)))}for(const[s,o,r]of i)n.addOpen(s,o,r);if(t.chance(.3)){const s=t.chance(.5)?-1:1,o=n.z(2);n.addOpen(o,Fa(t,s*t.range(8,12),o,.8,"#6d9a45"),1)}}const Ql=10,q0={forest:{every:10,variants:1},center:{every:3,variants:2},canyon:{every:7,variants:1}},Ey={suburb:W0,forest:Jl,fields:X0,industrial:B0,center:Zl,oldtown:G0,desert:O0,canyon:Kl,route66:k0};function Ty(n,t,e){let i=2166136261;for(const s of`${n}:${t}:${e}`)i=Math.imul(i^s.charCodeAt(0),16777619);return i>>>0}function Dc(n,t,e=0){const i=new qn(Ty(n,t,e));if(t==="special"){if(n==="forest"){const o=new vn(i,[[-27,-13]]);return Nf(o,-20),Jl(o),o.geometry()}if(n==="center"){const o=new vn(i);return Zl(o,!0),o.geometry()}if(n==="canyon"){const o=new vn(i,[[-25,-15]]);return Kl(o,!0),o.geometry()}}if(t==="arrival")switch(n){case"suburb":{const o=new vn(i,[[-14,1]]);return xy(o,-5.5),W0(o),o.geometry()}case"forest":{const o=new vn(i,[[-21,-3]]);return Nf(o,-12),Jl(o),o.geometry()}case"fields":{const o=new vn(i,[[-15,-5]]);return wy(o,-10),X0(o),o.geometry()}case"industrial":{const o=new vn(i,[[-19,1]]);return uy(o,-8),B0(o),o.geometry()}case"center":{const o=new vn(i,[[-20,0]]);return o.always(va(-3)),Zl(o),o.geometry()}case"oldtown":{const o=new vn(i,[[-17,-7]]);return fy(o,-12),G0(o),o.geometry()}case"desert":{const o=new vn(i,[[-6,1]]);return UM(o,-3),O0(o),o.geometry()}case"canyon":{const o=new vn(i,[[-25,-1]]);return NM(o,-4,-22),Kl(o),o.geometry()}case"route66":{const o=new vn(i,[[-20,0]]);return HM(o,-3),k0(o),o.geometry()}}const s=new vn(i);return Ey[n](s),s.geometry()}const ye=24,se=6.5,de=32,Jt=B.laneWidth*B.laneCount/2,ee=Jt+B.shoulderWidth,th=[-3,0,B.laneWidth],wo=Math.PI*2;class Ay{constructor(t){this.rng=t,this.c=document.createElement("canvas"),this.H=ye*de,this.c.width=se*2*de,this.c.height=this.H,this.g=this.c.getContext("2d")}X(t){return(t+se)*de}band(t,e,i){this.g.fillStyle=i,this.g.fillRect(this.X(t),0,this.X(e)-this.X(t),this.H)}rect(t,e,i,s,o){const r=this.g;r.fillStyle=o;for(const a of[0,-ye,ye]){const c=(i+a)*de,l=(s+a)*de;l<0||c>this.H||r.fillRect(this.X(t),c,this.X(e)-this.X(t),l-c)}}sides(t,e,i){this.band(-e,-t,i),this.band(t,e,i)}speckle(t,e,i,s,o=2,r=2){const a=this.g,c=this.rng;for(let l=0;l<i;l++){a.fillStyle=c.pick(s);const h=c.range(o,r);a.fillRect(this.X(t)+c.next()*(this.X(e)-this.X(t)-h),c.next()*(this.H-h),h,h)}}dashes(t,e,i,s,o,r=0){for(let a=r;a<ye+r;a+=s+o)this.rect(t-e/2/de,t+e/2/de,a,a+s,i)}wobble(t){const e=this.rng,i=e.int(1,3),s=e.int(4,9),o=e.next()*wo,r=e.next()*wo;return a=>t*(.7*Math.sin(wo*i*a/ye+o)+.3*Math.sin(wo*s*a/ye+r))}verge(t,e,i){const s=this.g;for(const o of[-1,1]){const r=this.wobble(e);s.fillStyle=i,s.beginPath(),s.moveTo(this.X(o*se),0);for(let a=0;a<=ye+1e-6;a+=.25)s.lineTo(this.X(o*(t+r(a))),a*de);s.lineTo(this.X(o*se),this.H),s.closePath(),s.fill()}}ruts(t,e=.38,i=.75){const s=this.g;s.strokeStyle=t,s.lineWidth=e*de,s.lineCap="round";for(const o of th)for(const r of[-1,1]){const a=this.wobble(.06);s.beginPath();for(let c=-1;c<=ye+1;c+=.5){const l=this.X(o+r*i+a(c));c===-1?s.moveTo(l,c*de):s.lineTo(l,c*de)}s.stroke()}}cracks(t,e,i,s,o=1.5){const r=this.g,a=this.rng;r.strokeStyle=s,r.lineWidth=o,r.lineCap="round";for(let c=0;c<i;c++){const l=[];let h=a.range(t,e),u=a.range(0,ye),f=a.range(0,wo);for(let d=0;d<a.int(5,11);d++)l.push([h,u]),f+=a.range(-.7,.7),h=Math.min(e,Math.max(t,h+Math.cos(f)*.35)),u+=Math.sin(f)*.35;for(const d of[0,-ye,ye])r.beginPath(),l.forEach(([g,_],p)=>p?r.lineTo(this.X(g),(_+d)*de):r.moveTo(this.X(g),(_+d)*de)),r.stroke()}}clip(t,e,i){this.g.save(),this.g.beginPath(),this.g.rect(this.X(t),0,this.X(e)-this.X(t),this.H),this.g.clip(),i(),this.g.restore()}}function Ry(n,t,e,i,s){const r=n.g,a=n.H/16,c=new pt;n.clip(t,e,()=>{r.fillStyle=s,r.fillRect(n.X(t),0,n.X(e)-n.X(t),n.H);const l=Math.floor(n.X(t)/16)-2,h=Math.ceil(n.X(e)/16)+1;for(let u=-1;u<a;u++)for(let f=l;f<=h;f++){const d=((f-u)%4+4)%4;let g=0,_=0;if(d===0)[g,_]=[2,1];else if(d===3)[g,_]=[1,2];else continue;c.copy(i).multiplyScalar(.94+n.rng.next()*.1),r.fillStyle=`#${c.getHexString()}`;for(const p of[0,-n.H,n.H])r.fillRect(f*16+1,u*16+1+p,g*16-2,_*16-2)}})}const Cy={suburb(n){n.band(-se,se,"#7BC67E"),n.band(-ee,ee,"#5c6068"),n.band(-Jt,Jt,"#3A3D45"),n.speckle(-Jt,Jt,2700,["rgba(255,255,255,0.05)","rgba(0,0,0,0.08)"]),n.rect(-Jt+3/de,-Jt+8/de,0,ye,"#f2efe6"),n.rect(Jt-8/de,Jt-3/de,0,ye,"#f2efe6");for(const t of[-1.5,1.5])n.dashes(t,6,"#f2efe6",3,5);for(let t=0;t<ye;t++){const e=t%2?"#e84a4a":"#f6f6f6";n.rect(-ee-.4,-ee,t,t+1,e),n.rect(ee,ee+.4,t,t+1,e)}},forest(n){n.band(-se,se,"#5E4E3D"),n.speckle(-5.5,5.5,900,["rgba(255,240,220,0.06)","rgba(0,0,0,0.07)"],3,6),n.ruts("#4a3d30"),n.verge(5,.25,"#4F7A45"),n.speckle(5.3,se,140,["#3f6a38","#5c8a50"],3,7),n.speckle(-se,-5.3,140,["#3f6a38","#5c8a50"],3,7),n.speckle(4.9,5.4,36,["#8d8a80","#a19d92"],5,9),n.speckle(-5.4,-4.9,36,["#8d8a80","#a19d92"],5,9)},fields(n){n.band(-se,se,"#A39E93");for(const t of th)n.band(t-1,t+1,"#96918a"),n.band(t-.8,t+.8,"#8C877D");n.speckle(-5.3,5.3,3200,["rgba(255,255,255,0.12)","rgba(0,0,0,0.1)","rgba(120,100,80,0.12)"],2,4),n.verge(5.1,.2,"#86b04c"),n.speckle(5.4,se,120,["#76a043","#9cc45c"],3,6),n.speckle(-se,-5.4,120,["#76a043","#9cc45c"],3,6)},industrial(n){n.band(-se,se,"#6F6F6A"),n.band(-ee,ee,"#9A9A94");for(let t=0;t<7;t++){const e=n.rng.range(-5.5,3.5),i=n.rng.range(0,ye);n.rect(e,e+n.rng.range(.8,2),i,i+n.rng.range(.8,2.5),"#a3a39c")}n.speckle(-ee,ee,1600,["rgba(255,255,255,0.07)","rgba(0,0,0,0.06)"],2,4),n.cracks(-ee,ee,14,"#878781");for(let t=0;t<ye;t+=6)n.rect(-ee,ee,t,t+2/de,"#7f7f7a");n.sides(Jt+.3,Jt+.3+2/de,"#7f7f7a"),n.sides(Jt-.25,Jt-.1,"#E8C547");for(const t of[-1.5,1.5])n.dashes(t,6,"#E8C547",3,5);n.sides(ee,ee+.4,"#b9b9b2")},center(n){n.band(-se,se,"#d8d3c9"),n.band(-ee,ee,"#34363d"),n.band(-Jt,Jt,"#2F3138"),n.speckle(-ee,ee,1800,["rgba(255,255,255,0.04)","rgba(0,0,0,0.06)"]),n.rect(-Jt+3/de,-Jt+9/de,0,ye,"#f7f5ef"),n.rect(Jt-9/de,Jt-3/de,0,ye,"#f7f5ef");for(const t of[-1.5,1.5])n.dashes(t,7,"#f7f5ef",3,5);n.sides(ee-.25,ee,"#4a4c52"),n.sides(ee,ee+.1,"#b3aea4"),n.speckle(ee+.1,se,200,["rgba(0,0,0,0.05)"],3,5),n.speckle(-se,-ee-.1,200,["rgba(0,0,0,0.05)"],3,5)},oldtown(n){n.band(-se,se,"#D6CBB8"),Ry(n,-ee,ee,new pt("#5A4D41"),"#4d4137");for(const t of[-1.5,1.5])n.band(t-.14,t+.14,"#C8BFAF");n.sides(Jt-.18,Jt+.18,"#C8BFAF"),n.sides(ee,ee+.5,"#bdb3a2");for(let t=0;t<ye;t+=1.2)n.rect(ee,ee+.5,t,t+1/de,"#a39985"),n.rect(-ee-.5,-ee,t,t+1/de,"#a39985")},desert(n){n.band(-se,se,"#C9A877"),n.speckle(-5.5,5.5,1500,["rgba(255,250,235,0.1)","rgba(110,80,40,0.08)"],2,5),n.ruts("#A88A5E",.42),n.verge(5,.35,"#d8bb88"),n.verge(5.6,.3,"#E3C896"),n.speckle(4.6,6.4,50,["#a8865a","#8f7250"],3,6),n.speckle(-6.4,-4.6,50,["#a8865a","#8f7250"],3,6)},canyon(n){n.band(-se,se,"#724630"),n.speckle(-5.5,5.5,1300,["rgba(255,220,190,0.07)","rgba(40,15,0,0.09)"],3,6),n.ruts("#5c3826",.42),n.verge(5.1,.3,"#B5704A"),n.speckle(5.2,se,70,["#9c5f3e","#c98560"],4,9),n.speckle(-se,-5.2,70,["#9c5f3e","#c98560"],4,9)},route66(n){n.band(-se,se,"#a8946c"),n.speckle(Jt,se,500,["#97845e","#b8a57c"],2,5),n.speckle(-se,-Jt,500,["#97845e","#b8a57c"],2,5),n.verge(6.2,.2,"#C8B184"),n.band(-Jt-.1,Jt+.1,"#4A4644");for(const t of th)for(const e of[-1,1])n.band(t+e*.75-.35,t+e*.75+.35,"#514c49");n.speckle(-Jt,Jt,1600,["rgba(255,255,255,0.05)","rgba(0,0,0,0.07)"],2,3),n.cracks(-Jt,Jt,10,"#433f3d",2.5),n.cracks(-Jt,Jt,18,"#454140",1.2),n.g.globalAlpha=.75,n.rect(-Jt+3/de,-Jt+8/de,0,ye,"#d8d0bc"),n.rect(Jt-8/de,Jt-3/de,0,ye,"#d8d0bc");for(const t of[-1.5,1.5])n.dashes(t,6,"#cdb05c",3,5,1);n.g.globalAlpha=1}};function Nh(n){const t=new ms(n);return t.colorSpace=Ge,t}function Py(n){const t=new Ay(new qn(24301+n.length*977+n.charCodeAt(0)*13));Cy[n](t);const e=Nh(t.c);return e.wrapT=ki,e.anisotropy=4,e}function Ly(){const n=document.createElement("canvas");n.width=64,n.height=64;const t=n.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,64,64),t.fillStyle="#f0f0f0",t.fillRect(0,0,64,32);const e=Nh(n);return e.wrapS=e.wrapT=ki,e}class Iy{constructor(){this.key=-1,this.mid=new pt;const t=document.createElement("canvas");t.width=2,t.height=256,this.g=t.getContext("2d"),this.texture=Nh(t)}set(t,e){const i=t.getHex()*31+e.getHex();if(i===this.key)return;this.key=i,this.mid.copy(t).lerp(e,.55);const s=this.g.createLinearGradient(0,0,0,256);s.addColorStop(0,`#${t.getHexString()}`),s.addColorStop(.75,`#${this.mid.getHexString()}`),s.addColorStop(1,`#${e.getHexString()}`),this.g.fillStyle=s,this.g.fillRect(0,0,2,256),this.texture.needsUpdate=!0}}class Dy{constructor(t){var i;this.id=t,this.normal=new Array(Ql),this.special=new Array(((i=q0[t])==null?void 0:i.variants)??0);const e=[()=>this.getRoad(),()=>this.getHorizon()];for(let s=0;s<Ql;s++)e.push(()=>this.getNormal(s));e.push(()=>this.getArrival());for(let s=0;s<this.special.length;s++)e.push(()=>this.getSpecial(s));this.jobs=e}getRoad(){return this.road??(this.road=Py(this.id))}getHorizon(){return this.horizon??(this.horizon=new vM(Wl(this.id)))}getNormal(t){var e;return(e=this.normal)[t]??(e[t]=Dc(this.id,"normal",t))}getArrival(){return this.arrival??(this.arrival=Dc(this.id,"arrival"))}getSpecial(t){var e;return(e=this.special)[t]??(e[t]=Dc(this.id,"special",t))}dispose(t){var e;for(const i of[...this.normal,...this.special,this.arrival])i==null||i.dispose();(e=this.road)==null||e.dispose(),this.horizon&&(t.detach(this.horizon),this.horizon.dispose())}}class Uy{constructor(t){this.horizon=t,this.sets=new Map,this.wanted=[]}get(t){let e=this.sets.get(t);return e||(e=new Dy(t),this.sets.set(t,e)),e}want(t){this.wanted=t}step(){for(const t of this.wanted){const e=this.get(t).jobs.shift();if(e){e();return}}}release(){for(const[t,e]of this.sets)this.wanted.includes(t)||(e.dispose(this.horizon),this.sets.delete(t))}flush(){for(const t of this.wanted){const e=this.get(t);for(;e.jobs.length;)e.jobs.shift()()}}}class Ny{constructor(){this.group=new Ke,this.canvas=document.createElement("canvas"),this.key="";const t=[];for(const e of[-1,1])t.push({geo:y(.45,10.6,.45),color:"#8a8f96",pos:[e*8.6,5.3,0]}),t.push({geo:y(.9,.4,.9),color:"#6d7076",pos:[e*8.6,.2,0]});t.push({geo:y(17.6,.45,.45),color:"#8a8f96",pos:[0,10.3,0]}),t.push({geo:y(17.6,.3,.3),color:"#8a8f96",pos:[0,9.6,-.4]}),t.push({geo:y(7.8,2.5,.16),color:"#d8dadc",pos:[0,9.25,-.05]}),this.group.add(new Xt(Ie(t),rs)),this.canvas.width=512,this.canvas.height=160,this.texture=new ms(this.canvas),this.texture.colorSpace=Ge,this.texture.anisotropy=4,this.board=new Xt(new In(7.6,2.3),new Xn({map:this.texture})),this.board.position.set(0,9.25,.04),this.group.add(this.board)}setText(t,e){const i=`${t}|${e}`;if(i===this.key)return;this.key=i;const s=this.canvas.getContext("2d"),{width:o,height:r}=this.canvas;s.fillStyle=e,s.fillRect(0,0,o,r),s.strokeStyle="#f4f2ea",s.lineWidth=8,s.strokeRect(12,12,o-24,r-24),s.fillStyle="#f4f2ea",s.textAlign="center",s.textBaseline="middle";let a=76;do s.font=`${a}px "Lilita One", system-ui, sans-serif`,a-=4;while(s.measureText(t).width>o-70&&a>30);s.fillText(t,o/2,r/2+4),this.texture.needsUpdate=!0}}const na=30,eh=B.drawDistance+20,Ji=eh+na,Of=6,Eo=B.chunkLength,Fy=1.6,Oy=2,kf=12,ky={center:"#1f6f43",route66:"#6b4226"};function ia(){return{skyTop:new pt,skyBottom:new pt,fog:new pt,ground:new pt,hemi:new pt,sun:new pt,cloud:new pt,light:1}}function Fh(n){const t=ia();return t.skyTop.set(n.skyTop),t.skyBottom.set(n.skyBottom),t.fog.set(n.fog),t.ground.set(n.ground),t.hemi.set(n.hemi),t.sun.set(n.sun),t.cloud.set(n.cloud),t.light=n.light,t}const Bf=new Map;function Hr(n,t=!1){const e=t?`${n.id}:night`:n.id;let i=Bf.get(e);return i||(i=Fh(t?n.night:n.palette),Bf.set(e,i)),i}function To(n,t,e,i){n.skyTop.lerpColors(t.skyTop,e.skyTop,i),n.skyBottom.lerpColors(t.skyBottom,e.skyBottom,i),n.fog.lerpColors(t.fog,e.fog,i),n.ground.lerpColors(t.ground,e.ground,i),n.hemi.lerpColors(t.hemi,e.hemi,i),n.sun.lerpColors(t.sun,e.sun,i),n.cloud.lerpColors(t.cloud,e.cloud,i),n.light=t.light+(e.light-t.light)*i}const By=Fh({skyTop:"#3E4F8E",skyBottom:"#FF9A5C",fog:"#EFA27E",ground:"#000000",hemi:"#FFC9A2",sun:"#FF9448",light:.85,cloud:"#FFA58E"}),zy=Fh({skyTop:"#5A70A8",skyBottom:"#FFC2A6",fog:"#EFC2B4",ground:"#000000",hemi:"#FFDAD2",sun:"#FFBE8C",light:.85,cloud:"#FFC6C8"}),Hy=new pt("#3A4874"),Gy=new pt("#D29A8A"),Vy=new pt("#D4AEB6"),Wy=new pt("#ffffff"),Xy=new P(-6,12,5),qy=new P(12,3,-20),Yy=new P(-12,3,-20),$y=new P(-8,14,9),zf=new P,Ky=new pt;function Uc(n,t){return(Math.imul(n^t,2654435761)>>>0)%10007/10007}const Nc=(n,t)=>(n%t+t)%t;class jy{constructor(t,e){this.lights=e,this.group=new Ke,this.horizon=new xM,this.seam={map2:{value:null},seamZ:{value:-1e6}},this.chunks=[],this.sky=new Iy,this.blend={from:nn(0),to:nn(0),t:1,seam:0},this.pal=ia(),this.dayPal=ia(),this.nightPal=ia(),this.hzMul=new pt,this.day=ma(8),this.hourOverride=null,this.fireflies=new iM,this.clock=0,this.gantry=new Ny,this.wantLeg=-1,this.wantOffset=0,this.offset=0,this.k0=0,this.assets=new Uy(this.horizon),t.background=this.sky.texture,this.fog=new bh("#ffffff",B.fogNear,B.fogFar),t.fog=this.fog;const i=this.assets.get("suburb").getRoad();this.seam.map2.value=i,this.roadMat=new Xn({map:i}),this.roadMat.onBeforeCompile=c=>{c.uniforms.map2=this.seam.map2,c.uniforms.seamZ=this.seam.seamZ,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying float vWorldZ;`).replace("#include <project_vertex>",`#include <project_vertex>
vWorldZ = (modelMatrix * vec4(transformed, 1.0)).z;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D map2;
uniform float seamZ;
varying float vWorldZ;`).replace("#include <map_fragment>",`vec4 surfaceA = texture2D(map, vMapUv);
          vec4 surfaceB = texture2D(map2, vMapUv);
          diffuseColor *= vWorldZ > seamZ ? surfaceA : surfaceB;`)},this.roadMat.customProgramCacheKey=()=>"twoSurfaceRoad";const s=new Xt(new In(se*2,Ji),this.roadMat);s.rotation.x=-Math.PI/2,s.position.z=na-Ji/2,this.group.add(s),this.groundTex=Ly(),this.groundTex.repeat.set(1,Ji/Of),this.groundMat=new Xn({map:this.groundTex});const o=new Xt(new In(400,Ji),this.groundMat);o.rotation.x=-Math.PI/2,o.position.set(0,-.02,na-Ji/2),this.group.add(o);const r=new De,a=Math.ceil(Ji/Eo)+1;for(let c=0;c<a;c++){const l=new Xt(r,rs);this.chunks.push(l),this.group.add(l)}this.gantry.group.visible=!1,this.group.add(this.gantry.group,this.horizon.root,this.fireflies.points),t.add(this.group)}prepare(t){this.assets.want(t),this.assets.flush()}update(t,e,i,s){const o=t;this.offset=e,this.k0=Cn(0,e),this.clock+=i,ma(this.hourOverride??ql(o,e),this.day);const r=Cn(o,e);this.updateWanted(r);const a=Cn(o-na,e),c=Zn(a+1,e),l=this.assets.get(nn(a).id).getRoad(),h=c<o+eh?this.assets.get(nn(a+1).id).getRoad():l;this.roadMat.map!==l&&(this.roadMat.map=l),l.repeat.set(1,Ji/ye),l.offset.y=o/ye%1,this.seam.map2.value=h,this.seam.seamZ.value=o-c,this.groundTex.offset.y=o/Of%1,this.updatePalette(o),this.updateChunks(o),this.updateLandmarks(o);const u=this.blend;this.horizon.show(this.assets.get(u.from.id).getHorizon(),this.assets.get(u.to.id).getHorizon(),u.t),this.horizon.update(s,i,this.pal.cloud,this.day);const f=(u.from.id==="forest"?1-u.t:0)+(u.to.id==="forest"?u.t:0);this.fireflies.update(o,this.clock,this.day.night*f),this.assets.step()}updateWanted(t){if(t===this.wantLeg&&this.offset===this.wantOffset)return;const e=this.wantLeg<0;this.wantLeg=t,this.wantOffset=this.offset;const i=[nn(t).id,nn(t+1).id];t-1>=this.k0&&i.push(nn(t-1).id),this.assets.want(i),e||this.assets.release()}updatePalette(t){const e=Xx(t,this.offset,this.blend),{night:i,twilight:s,dawn:o}=this.day,r=this.pal;To(this.dayPal,Hr(e.from),Hr(e.to),e.t),i>0?(To(this.nightPal,Hr(e.from,!0),Hr(e.to,!0),e.t),To(r,this.dayPal,this.nightPal,i)):To(r,this.dayPal,this.dayPal,0);const a=s*.85;if(a>0){const c=o?zy:By,l=r.light,h=Ky.copy(r.ground);To(r,r,c,a),r.ground.copy(h).lerp(c.sun,a*.15),r.light=l*(1-.15*a)}this.sky.set(r.skyTop,r.skyBottom),this.fog.color.copy(r.fog),this.groundMat.color.copy(r.ground),this.lights.hemi.color.copy(r.hemi),this.lights.hemi.groundColor.copy(r.ground).multiplyScalar(.75),this.lights.hemi.intensity=Fy*r.light,this.lights.sun.color.copy(r.sun),this.lights.sun.intensity=Oy*r.light,zf.copy(Xy).lerp(o?Yy:qy,Math.min(1,s*1.2)).lerp($y,i),this.lights.sun.position.copy(zf),this.hzMul.copy(Wy).lerp(o?Vy:Gy,a*.8).lerp(Hy,i),gM(this.hzMul,r.fog,i*.7+a*.3,i),ls.uNight.value=i,ls.uBlink.value=Math.sin(this.clock*Math.PI*2*.9)>0?1:.08}updateChunks(t){const e=Math.floor(t/Eo),i=this.chunks.length;for(let s=0;s<i;s++){const o=e-1+s,r=this.chunks[Nc(o,i)];r.geometry=this.pick(o),r.position.z=t-o*Eo}}pick(t){const e=this.offset,i=t*Eo,s=Cn(i,e),o=Zn(s,e),r=Zn(s+1,e);if(i===o&&s>this.k0)return this.assets.get(nn(s).id).getArrival();const a=B.biomeBlend,c=i+Eo/2;let l=s;!Xl(s+1)&&c>r-a?Uc(t,40503)<(c-(r-a))/(2*a)&&(l=s+1):s>this.k0&&!Xl(s)&&c<o+a&&Uc(t,40503)>=(c-(o-a))/(2*a)&&(l=s-1);const h=nn(l),u=this.assets.get(h.id),f=q0[h.id];return f&&Nc(t,f.every)===0?u.getSpecial(Nc(Math.floor(t/f.every),f.variants)):u.getNormal(Math.floor(Uc(t,20973)*Ql))}updateLandmarks(t){const e=this.offset;this.gantry.group.visible=!1;const i=Cn(t-40-kf,e);for(let s=i;s<=i+1;s++){const o=nn(s);if(s<=this.k0||o.arrival!=="gantry")continue;const r=Zn(s,e)+kf;r<t-40||r>t+eh||(this.gantry.setText(Nt(o.name),ky[o.id]??"#1f6f43"),this.gantry.group.position.z=t-r,this.gantry.group.visible=!0)}}}const cr={cone:{kind:"cone",height:"low",width:.8,length:.8,smashable:!0,moving:!1,tierFrom:1,scatter:{dx:.35,yaw:.5}},crate:{kind:"crate",height:"low",width:1.5,length:1.3,smashable:!0,moving:!1,tierFrom:1,scatter:{dx:.3,yaw:.25}},barrier:{kind:"barrier",height:"low",width:2.8,length:.5,smashable:!1,moving:!1,tierFrom:1,scatter:{dx:0,yaw:.07}},parked:{kind:"parked",height:"tall",width:2,length:4.5,smashable:!1,moving:!1,tierFrom:2,scatter:{dx:.2,yaw:.06}},pipe:{kind:"pipe",height:"overhead",width:3,length:.7,smashable:!1,moving:!1,tierFrom:2,scatter:{dx:0,yaw:0}},oil:{kind:"oil",height:"flat",width:2.2,length:3.5,smashable:!1,moving:!1,tierFrom:3,scatter:{dx:.15,yaw:.1}},slow:{kind:"slow",height:"tall",width:2,length:4.5,smashable:!1,moving:!0,tierFrom:3,scatter:{dx:0,yaw:0}},truck:{kind:"truck",height:"tall",width:2.5,length:10,smashable:!1,moving:!0,tierFrom:3,scatter:{dx:0,yaw:0}},wall:{kind:"wall",height:"tall",width:2.9,length:1,smashable:!1,moving:!1,tierFrom:4,scatter:{dx:0,yaw:.03}},switcher:{kind:"switcher",height:"tall",width:2,length:4.5,smashable:!1,moving:!0,tierFrom:5,scatter:{dx:0,yaw:0}}};function Ni(n){return(n-1)*B.laneWidth}function Zy(n){return n.moving?1-B.trafficSpeedRatio:1}function Y0(n,t){return n.def.moving?n.sMeet+B.trafficSpeedRatio*(t-n.sMeet):n.sMeet}function Jy(n,t,e){const i=(n-t)/Math.max(1,e),o=B.switcherDoneBefore+B.switcherLaneChangeTime,r=Math.min(1,Math.max(0,(o-i)/B.switcherLaneChangeTime)),a=i<=o+B.switcherBlinkerTime&&r<1;return{p:r,blinker:a}}const Pn="#ff7b1c",Pe="#f5f5f0",Mn="#d62828",$0="#3b3e46",Je="#26282e",Bi="#33465e",K0="#1f2026",hn="#ff2a2a",un="#ffb300",nh="#d4a06a",sa="#4a301a",Ys="#4a3424",Qy="#1d1e23",_a={city:["#d9d9d4","#a7adb5","#d8c8a8","#9fb3c8","#b8a0a0","#a9bfae","#c9c3d6","#c0c6cc"],outskirts:["#d6d0c0","#b3bdb0","#c4c8cf","#a6aa9c","#c2a89a","#a9b8c4","#cbbf98","#b0a8b8"],drylands:["#d2c4a6","#b9b2a6","#c9a98a","#a9a296","#b8c2b4","#c7b0a0","#a8b4bc","#d0c0b8"]},Hf=[[$0,"#c3c7ce"],["#2f4558","#b9c3cc"],["#5a2e30","#c9bcbc"],["#34483a","#bcc6bd"],["#463e58","#c2bccc"],["#5a5146","#d0c8bc"],["#2e323a","#9aa0a8"],["#4a3a2c","#c8bca8"]],tS=["#d6d0c0","#d8a89c","#c4d4bc","#bccbd8","#dcc8a0","#cfd0cc","#cfd0a8","#d4bcc4"],eS=["#cfc8b4","#8fb3ad","#d4a898","#d6c48a","#b4c4d4","#a9c2a4","#c4ad8a","#a8a59e"],nS=["#3d5e3a","#7a3b32","#4a5b6e","#56603a","#2f5d5a","#8a7a2e","#5a2e3e","#3a3d6a"],iS=["#9b5b3e","#3d6b7a","#7a5a2a","#8a4a5a","#4a6a3a","#5a4a7a","#2e5a6e","#7a6a5a"],sS=["#e8e8e4","#c9d3dc","#e0d6c0","#c4d0c0","#d8c4c4","#d4d4dc","#b8bcc2","#e4dccc"],oS=["#5d636e","#2f4a6e","#6e2e2e","#2e5a44","#4a4a52","#6a5a3a","#3a3a5a","#5a3a4a"],rS=["#5b3a2e","#2e4a3a","#3a4a5e","#6a2e2a","#4a4a44","#5a5a2e","#2e3a4a","#5e4a36"],aS=["#c9a24a","#d8a080","#c4cca8","#d8b888","#d0a888","#c0b080","#b8c8c8","#dcb898"],lr=8,cS={city:{cone:Pn,crate:nh},outskirts:{cone:Pn,crate:"#e3c565"},drylands:{cone:Pn,crate:"#8a5a2b"}};function lS(n,t){return n.map(e=>{const i=e.pos??[0,0,0];return{...e,pos:[i[0],i[1],i[2]-t/2]}})}function We(n,t){return{geo:y(n+.3,.01,t+.3),color:Qy,pos:[0,.006,0]}}function pi(n,t,e,i,s=K0){for(const[o,r]of t)n.push({geo:$(e,e,i,10),color:s,pos:[o,e,r],rot:[0,0,Math.PI/2]})}function Fc(n,t,e=!1,i=n){const r=[We(2,4.5),{geo:y(2,.36,4.5),color:n,pos:[0,.55,0]},{geo:y(2,.34,4.5),color:i,pos:[0,.9,0]},{geo:Ee([[-1.1,0],[1.4,0],[1.1,.6],[-.55,.62]],1.78),color:Bi,pos:[0,1.07,.1]},{geo:y(1.8,.1,1.7),color:i,pos:[0,1.72,.37]},{geo:y(1.8,.2,.1),color:Je,pos:[0,.5,2.25]},{geo:y(.5,.2,.08),color:hn,pos:[-.65,.86,2.26]},{geo:y(.5,.2,.08),color:hn,pos:[.65,.86,2.26]}];return pi(r,[[-.9,-1.4],[.9,-1.4],[-.9,1.4],[.9,1.4]],.4,.3),t&&r.push(...ln(2-.3,.3,.06,6,Mn,Pe,.62,4.5/2+.06)),e&&(r.push({geo:y(.2,.2,.1),color:un,pos:[-2/2+.05,.86,4.5/2+.02]}),r.push({geo:y(.2,.2,.1),color:un,pos:[2/2-.05,.86,4.5/2+.02]})),r}function hS(n,t){switch(n){case"cone":return Oh();case"crate":return[We(1.3,1.2),{geo:y(1.3,.75,1.2),color:nh,pos:[0,.375,0]},{geo:y(1.32,.1,1.22),color:sa,pos:[0,.2,0]},{geo:y(1.32,.1,1.22),color:sa,pos:[0,.55,0]},{geo:y(.7,.42,.7),color:nh,pos:[.15,.96,.05],rot:[0,.3,0]},{geo:y(.72,.08,.72),color:sa,pos:[.15,.96,.05],rot:[0,.3,0]}];case"barrier":return[We(2.8,.5),...ln(2.8,.3,.14,7,Pn,Pe,.62,0),{geo:y(.12,.62,.12),color:Pe,pos:[-1.2,.31,0]},{geo:y(.12,.62,.12),color:Pe,pos:[1.2,.31,0]},{geo:y(.5,.08,.5),color:Je,pos:[-1.2,.04,0]},{geo:y(.5,.08,.5),color:Je,pos:[1.2,.04,0]},{geo:$(.08,.08,.08,6),color:un,pos:[-1.2,.83,0]}];case"parked":return Fc(Hf[t][0],!0,!1,Hf[t][1]);case"slow":return Fc(_a.city[t],!1);case"switcher":return Fc(_a.city[(t+1)%lr],!1,!0);case"pipe":return[{geo:$(.3,.3,3,10),color:$0,pos:[0,1.32,0],rot:[0,0,Math.PI/2]},...ln(2.9,.46,.05,8,Mn,Pe,1.32,.31),{geo:y(.18,2.6,.18),color:Je,pos:[-1.42,1.3,0]},{geo:y(.18,2.6,.18),color:Je,pos:[1.42,1.3,0]},{geo:y(3,.2,.3),color:"#d9dcdf",pos:[0,2.55,0]},{geo:y(1.7,.62,.06),color:"#ffd23f",pos:[0,2.15,.1]},{geo:y(1.4,.1,.07),color:Je,pos:[0,2.15,.11]}];case"oil":return[{geo:$(1,1,.03,9),color:"#16131c",pos:[0,.02,0],scale:[1,1,1.6]},{geo:$(.6,.6,.035,7),color:"#2b2440",pos:[.45,.025,.6],scale:[1,1,1.2]},{geo:$(.35,.35,.04,6),color:"#3d3360",pos:[-.3,.03,-.4]},{geo:$(.4,.4,.033,6),color:"#16131c",pos:[-.7,.02,.9]},{geo:$(.66,.66,.038,7),color:"#b8aee6",pos:[-.25,.028,.25],scale:[1,1,1.5]},{geo:$(.34,.34,.04,6),color:"#a9d4e6",pos:[.35,.03,-.7]},{geo:$(.3,.3,.039,6),color:"#e0b8d8",pos:[.45,.029,.95]}];case"truck":{const s=[We(2.5,10),{geo:y(2.5,2.7,7.4),color:sS[t],pos:[0,1.95,1.3]},{geo:y(2.52,.3,7.42),color:"#4a5160",pos:[0,.55,1.3]},...ln(2.4,.3,.06,7,Mn,Pe,.6,5.05),{geo:y(2.1,2.4,.06),color:"#cfcfca",pos:[0,1.95,5.01]},{geo:y(.06,2.4,.08),color:"#8a8f99",pos:[0,1.95,5.03]},{geo:y(.4,.2,.08),color:hn,pos:[-.95,.95,5.04]},{geo:y(.4,.2,.08),color:hn,pos:[.95,.95,5.04]},{geo:y(2.4,2.3,2.3),color:oS[t],pos:[0,1.55,-3.75]},{geo:y(2.3,.8,.1),color:Bi,pos:[0,2.2,-4.92]}];for(const o of[-3.9,.2,1.4,3.6,4.6])pi(s,[[-1.05,o],[1.05,o]],.5,.4);return s}case"wall":return[We(2.9,1),{geo:y(2.9,.8,1),color:"#45474c",pos:[0,.4,0]},{geo:y(3,1.66,.28),color:Je,pos:[0,1.55,.08]},{geo:y(2.9,1.5,.03),color:Pe,pos:[0,1.55,.235]},...ln(2.9,1.3,.06,6,Mn,Pe,1.55,.28),{geo:$(.14,.14,.2,8),color:un,pos:[-1.2,2.42,.1]},{geo:$(.14,.14,.2,8),color:un,pos:[1.2,2.42,.1]}]}}function Oh(){return[We(.5,.5),{geo:y(.7,.08,.7),color:Je,pos:[0,.04,0]},{geo:Me(.3,.8,8),color:Pn,pos:[0,.48,0]},{geo:$(.2,.23,.14,8),color:Pe,pos:[0,.5,0]}]}function ih(n,t={}){const s=t.rust?"#5a3a26":Je,o=[We(2,4.5),{geo:y(2,.62,4.5),color:n,pos:[0,.7,0]},{geo:y(2-.12,.75,1.7),color:n,pos:[0,1.38,-.55]},{geo:y(2-.2,.5,.08),color:Bi,pos:[0,1.42,.31]},{geo:Ee([[-.45,0],[.45,0],[.3,.5],[-.35,.5]],2-.24),color:Bi,pos:[0,1.17,-1.5]},{geo:y(.1,.32,2.1),color:n,pos:[-2/2+.05,1.17,1.15]},{geo:y(.1,.32,2.1),color:n,pos:[2/2-.05,1.17,1.15]},{geo:y(2-.1,.42,.08),color:n,pos:[0,1.12,4.5/2-.04]},{geo:y(2-.3,.06,1.9),color:s,pos:[0,1.02,1.15]},{geo:y(2-.1,.18,.12),color:s,pos:[0,.46,4.5/2+.02]},{geo:y(.32,.26,.08),color:hn,pos:[-2/2+.25,1.05,4.5/2+.01]},{geo:y(.32,.26,.08),color:hn,pos:[2/2-.25,1.05,4.5/2+.01]}];return pi(o,[[-.9,-1.4],[.9,-1.4],[-.9,1.4],[.9,1.4]],.42,.32),t.hazard&&o.push(...ln(2-.5,.16,.06,6,Mn,Pe,.72,4.5/2+.06)),t.blinkers&&(o.push({geo:y(.2,.2,.1),color:un,pos:[-2/2+.05,.86,4.5/2+.02]}),o.push({geo:y(.2,.2,.1),color:un,pos:[2/2-.05,.86,4.5/2+.02]})),o}function j0(n,t=2.9){return[{geo:y(.14,n+.4,.14),color:Je,pos:[-t/2+.25,(n+.4)/2,0]},{geo:y(.14,n+.4,.14),color:Je,pos:[t/2-.25,(n+.4)/2,0]},{geo:y(t,.9,.1),color:Pe,pos:[0,n,.05]},...ln(t-.1,.75,.04,6,Mn,Pe,n,.12)]}function uS(n,t){const e="#e3c565",i="#c9a646";switch(n){case"cone":return Oh();case"crate":{const s=[We(1.45,1.25)];for(const o of[-.32,.32]){s.push({geo:y(1.45,.5,.6),color:e,pos:[0,.25,o]}),s.push({geo:y(1.47,.06,.62),color:i,pos:[0,.32,o]});for(const r of[-.4,.4])s.push({geo:y(.06,.52,.63),color:Pn,pos:[r,.25,o]})}return s.push({geo:y(1.2,.45,.6),color:e,pos:[.08,.73,.02],rot:[0,.18,0]}),s.push({geo:y(1.3,.08,.7),color:"#2f4a33",pos:[.08,.97,.02],rot:[0,.18,0]}),s.push({geo:y(1.3,.4,.06),color:"#2f4a33",pos:[.14,.8,.36],rot:[0,.18,0]}),s.push({geo:y(.08,.5,.74),color:Pn,pos:[.08,.8,.02],rot:[0,.18,0]}),s.push({geo:y(.03,.7,.03),color:sa,pos:[-.35,1.25,.1]}),s.push({geo:y(.3,.2,.02),color:Pe,pos:[-.2,1.48,.1]}),s.push({geo:y(.15,.2,.025),color:Pn,pos:[-.27,1.48,.1]}),s}case"barrier":{const s=[We(2.8,.5),...ln(2.8,.3,.08,7,Pn,Pe,.66,.06),{geo:y(2.6,.26,.08),color:Ys,pos:[0,.32,.06]}];for(const o of[-1.15,1.15])s.push({geo:y(.12,.85,.12),color:Ys,pos:[o,.4,.18],rot:[.35,0,0]}),s.push({geo:y(.12,.85,.12),color:Ys,pos:[o,.4,-.18],rot:[-.35,0,0]});return s}case"parked":return ih(tS[t],{hazard:!0});case"switcher":return ih(_a.outskirts[(t+1)%lr],{blinkers:!0});case"slow":{const s=nS[t],o=[We(2,4.5),{geo:y(1.2,.9,2.6),color:s,pos:[0,1.1,-.9]},{geo:y(1.3,.25,1.2),color:Je,pos:[0,.55,1.2]},{geo:y(1.5,1.4,1.5),color:"#ecebe4",pos:[0,2.15,.9]},{geo:y(1.2,.8,.05),color:Bi,pos:[0,2.3,1.66]},{geo:y(1.7,.12,1.7),color:"#ecebe4",pos:[0,2.9,.9]},{geo:y(.55,.12,1.5),color:"#ecebe4",pos:[-.92,1.72,1]},{geo:y(.55,.12,1.5),color:"#ecebe4",pos:[.92,1.72,1]},{geo:y(.55,.7,.1),color:"#ecebe4",pos:[-.92,1.4,1.75]},{geo:y(.55,.7,.1),color:"#ecebe4",pos:[.92,1.4,1.75]},{geo:$(.16,.16,.2,8),color:un,pos:[0,3.06,.9]},{geo:$(.07,.07,1.4,6),color:Je,pos:[.45,2,-1.6]},{geo:Me(.42,.75,3),color:Pn,pos:[0,1.25,1.97],rot:[Math.PI/2,0,0],scale:[1,.12,1]},{geo:Me(.26,.47,3),color:Mn,pos:[0,1.25,2],rot:[Math.PI/2,0,0],scale:[1,.12,1]},...ln(1.6,.14,.05,5,Mn,Pe,.5,1.83)];return pi(o,[[-.92,1],[.92,1]],.82,.46),pi(o,[[-.75,-1.7],[.75,-1.7]],.45,.3),o}case"pipe":return[{geo:y(3,.5,.5),color:Ys,pos:[0,1.32,0]},...ln(2.9,.4,.05,8,Mn,Pe,1.32,.27),{geo:$(.15,.17,2.7,7),color:"#d8b886",pos:[-1.45,1.35,0]},{geo:$(.15,.17,2.7,7),color:"#d8b886",pos:[1.45,1.35,0]},{geo:y(3.2,.2,.3),color:Ys,pos:[0,2.65,0]},{geo:y(1.1,.45,.05),color:"#ffd23f",pos:[0,2.15,.12]},{geo:y(.9,.08,.06),color:Je,pos:[0,2.15,.13]}];case"oil":return[{geo:$(1.05,1.05,.03,9),color:"#3a2a1c",pos:[0,.02,0],scale:[1,1,1.6]},{geo:$(.7,.7,.035,7),color:"#c4d6dd",pos:[.25,.026,.35],scale:[1,1,1.4]},{geo:$(.36,.36,.036,6),color:"#b2c9d2",pos:[-.35,.027,-.7]},{geo:$(.45,.45,.04,6),color:"#4a3626",pos:[-.75,.025,.95]},{geo:Xe(.16,0),color:"#5a4330",pos:[.9,.05,-.7],scale:[1,.4,1]},{geo:Xe(.12,0),color:"#5a4330",pos:[-.9,.04,-.2],scale:[1,.4,1]}];case"truck":{const r=[We(2.5,10),{geo:y(2.5,.35,7.6),color:"#3a3d42",pos:[0,.75,1.2]},{geo:y(2.4,2.3,2.3),color:rS[t],pos:[0,1.55,-3.75]},{geo:y(2.3,.8,.1),color:Bi,pos:[0,2.2,-4.92]},{geo:y(2.6,.12,2.4),color:"#e4e2dc",pos:[0,2.75,-3.75]},...ln(2.4,.28,.06,7,Mn,Pe,.62,5.05),{geo:y(.4,.2,.08),color:hn,pos:[-.95,.95,5.04]},{geo:y(.4,.2,.08),color:hn,pos:[.95,.95,5.04]}];for(const c of[-1.6,4])for(const l of[-1.15,1.15])r.push({geo:y(.14,2.2,.14),color:Je,pos:[l,1.95,c]});const a=[[-.75,1.3],[0,1.3],[.75,1.3],[-.38,1.95],[.38,1.95],[0,2.58]];for(const[c,l]of a)r.push({geo:$(.36,.36,7.2,8),color:l<1.5&&c===0?"#4f3722":"#c9a06a",pos:[c,l,1.2],rot:[Math.PI/2,0,0]}),r.push({geo:$(.32,.32,.04,8),color:"#e3c08a",pos:[c,l,4.81],rot:[Math.PI/2,0,0]});for(const c of[-3.9,.2,1.4,3.6,4.6])pi(r,[[-1.05,c],[1.05,c]],.5,.4);return r}case"wall":{const s=[We(2.9,1)];for(const[o,r]of[[.3,.15],[.3,-.25],[.82,-.05]])s.push({geo:$(.3,.3,2.9,8),color:o>.5?"#5e422a":"#4f3722",pos:[0,o,r],rot:[0,0,Math.PI/2]});return s.push({geo:$(.27,.27,.04,8),color:"#d9b07a",pos:[-1.46,.3,.15],rot:[0,0,Math.PI/2]}),s.push(...j0(1.85)),s.push({geo:$(.14,.14,.2,8),color:un,pos:[-1.2,2.42,.05]}),s.push({geo:$(.14,.14,.2,8),color:un,pos:[1.2,2.42,.05]}),s}}}function fS(n,t){switch(n){case"cone":return Oh();case"crate":{const e=[We(1.45,1.25)],i=[[-.38,.45,.3],[.38,.45,.3],[0,.45,-.32]];for(const[s,o,r]of i){e.push({geo:$(.33,.36,.9,10),color:"#6b4423",pos:[s,o,r]});for(const a of[-.34,.34])e.push({geo:$(.35,.37,.07,10),color:"#2e2116",pos:[s,o+a,r]});e.push({geo:$(.365,.365,.4,10),color:Pn,pos:[s,o,r]}),e.push({geo:$(.368,.368,.16,10),color:Pe,pos:[s,o,r]}),e.push({geo:$(.3,.3,.02,10),color:"#a87a48",pos:[s,o+.45,r]})}return e}case"barrier":{const e=[We(2.8,.5)];for(const i of[-1.3,0,1.3])e.push({geo:y(.2,.82,.2),color:"#4f3a28",pos:[i,.41,0]});e.push({geo:y(2.8,.2,.12),color:"#4f3a28",pos:[0,.33,.08]}),e.push({geo:y(2.8,.24,.12),color:"#ece8de",pos:[0,.66,.08]});for(const i of[-.8,.8])e.push({geo:y(.36,.2,.05),color:Pn,pos:[i,.66,.16]});return e}case"parked":{const s=eS[t],o=[We(2,4.5),{geo:y(2,.32,4.5-.2),color:"#6b3a22",pos:[0,.5,0]},{geo:y(2,.3,4.5-.2),color:s,pos:[0,.8,0]},{geo:$(.3,.3,4.5-.6,8),color:s,pos:[-2/2+.25,.78,0],rot:[Math.PI/2,0,0]},{geo:$(.3,.3,4.5-.6,8),color:s,pos:[2/2-.25,.78,0],rot:[Math.PI/2,0,0]},{geo:y(.7,.2,.9),color:"#7a4026",pos:[.4,.96,-1.4]},{geo:Ee([[-1,0],[1.2,0],[.8,.82],[-.6,.82]],2-.3),color:s,pos:[0,.94,.15]},{geo:Ee([[-.85,.08],[1,.08],[.7,.72],[-.5,.72]],2-.24),color:"#2e2a26",pos:[0,.94,.15]},{geo:y(2-.2,.18,.12),color:"#5a3a26",pos:[0,.4,4.5/2-.04]},...ln(2-.4,.16,.06,6,Mn,Pe,.62,4.5/2-.04)];return pi(o,[[-.88,-1.4],[.88,-1.4],[-.88,1.4],[.88,1.4]],.32,.3,"#3a3530"),o}case"switcher":return ih(_a.drylands[(t+1)%lr],{blinkers:!0});case"slow":{const s=[We(2,4.5),{geo:y(2,2.2,4.5),color:"#e6e0d2",pos:[0,1.6,0]},{geo:y(1.9,.7,1.2),color:"#e6e0d2",pos:[0,2.95,-1.4]},{geo:y(2.02,.35,4.52),color:iS[t],pos:[0,1.35,0]},{geo:y(1.6,.6,.06),color:Bi,pos:[0,2.15,2.26]},{geo:$(.38,.38,.22,10),color:K0,pos:[0,1.45,2.37],rot:[Math.PI/2,0,0]},{geo:y(.06,2,.06),color:"#9aa0a7",pos:[.75,1.75,2.31]},{geo:y(.06,2,.06),color:"#9aa0a7",pos:[.45,1.75,2.31]},{geo:y(.3,.32,.08),color:hn,pos:[-.78,.75,2.26]},{geo:y(.3,.32,.08),color:hn,pos:[.78,.75,2.26]},{geo:y(1.9,.18,.12),color:Je,pos:[0,.48,2.27]}];return pi(s,[[-.9,-1.3],[.9,-1.3],[-.9,1.3],[.9,1.3]],.42,.32),s}case"pipe":return[{geo:y(3.1,.5,.45),color:Ys,pos:[0,1.32,0]},...ln(2.9,.4,.05,8,Mn,Pe,1.32,.25),{geo:y(.35,3.4,.35),color:"#cdb795",pos:[-1.45,1.7,0]},{geo:y(.35,3.4,.35),color:"#cdb795",pos:[1.45,1.7,0]},{geo:y(3.4,.3,.35),color:"#6b4c30",pos:[0,3.25,0]},{geo:y(1.8,.55,.08),color:"#5a3e28",pos:[0,2.75,.1]},{geo:Me(.08,.5,4),color:"#f2ecdc",pos:[-.45,3.45,.05],rot:[0,0,1]},{geo:Me(.08,.5,4),color:"#f2ecdc",pos:[.45,3.45,.05],rot:[0,0,-1]}];case"oil":return[{geo:$(1.12,1.12,.03,9),color:"#6e5434",pos:[0,.016,0],scale:[1,1,1.62]},{geo:$(1,1,.06,9),color:"#ecd7a8",pos:[0,.03,.05],scale:[1,1,1.5]},...[-.9,-.45,0,.45,.9].map(e=>({geo:y(1.5-Math.abs(e)*.6,.02,.07),color:"#a8865a",pos:[0,.065,e],rot:[0,.15,0]}))];case"truck":{const s=[We(2.5,10),{geo:y(2.5,.35,7.6),color:"#3a3d42",pos:[0,.75,1.2]},{geo:Ee([[-3.7,0],[3.7,0],[3.9,1.9],[-3.4,1.9]],2.5),color:aS[t],pos:[0,.95,1.2]},{geo:y(2.4,2.3,2.3),color:"#4a4c50",pos:[0,1.55,-3.75]},{geo:y(2.6,.12,2.4),color:"#e4e2dc",pos:[0,2.75,-3.75]},{geo:y(2.3,.8,.1),color:Bi,pos:[0,2.2,-4.92]},...ln(2.4,.5,.06,7,Mn,Pe,.62,5.05),{geo:y(.4,.2,.08),color:hn,pos:[-.95,.95,5.04]},{geo:y(.4,.2,.08),color:hn,pos:[.95,.95,5.04]}];for(const[o,r,a]of[[-.5,0,.9],[.5,1.6,.85],[0,3,.8],[.2,-1.4,.8]])s.push({geo:Xe(a,0),color:"#8a5a44",pos:[o,2.85,r],scale:[1,.6,1.2]});for(const o of[-3.9,.6,3.4])pi(s,[[-1.05,o],[1.05,o]],.62,.45);return s}case"wall":{const e=[We(2.9,1)],i=[[-.9,.4,.1,.6,"#5e5248"],[.1,.45,-.1,.7,"#6b5d50"],[1,.35,.15,.55,"#544a40"],[-.4,.95,-.05,.5,"#6b5d50"],[.55,.9,0,.45,"#5e5248"]];for(const[s,o,r,a,c]of i)e.push({geo:Xe(a,0),color:c,pos:[s,o,r*.5],rot:[s,o*3,r],scale:[1.1,.85,.62]});return e.push(...j0(1.85)),e.push({geo:$(.14,.14,.2,8),color:un,pos:[-1.2,2.42,.05]}),e.push({geo:$(.14,.14,.2,8),color:un,pos:[1.2,2.42,.05]}),e}}}const dS={city:hS,outskirts:uS,drylands:fS};function pS(n,t){return n.color===hn?{...n,glow:hn}:n.color===un&&t!=="switcher"?{...n,glow:un,blink:!0}:n}const Gf=new Map,Z0=new Set(["parked","slow","switcher","truck"]);function J0(n,t=0,e="city"){const i=Z0.has(n)?t%lr:0,s=`${e}:${n}:${i}`;let o=Gf.get(s);return o||(o=Ie(lS(dS[e](n,i),cr[n].length).map(r=>pS(r,n))),Gf.set(s,o)),o}function Oc(n="city"){for(const t of Object.keys(cr))for(let e=0;e<(Z0.has(t)?lr:1);e++)J0(t,e,n)}const mS="#ffc93c",Q0="#5c3a08";function tp(n,t,e){const i=[{geo:$(n,n,.14,12),color:t,rot:[Math.PI/2,0,0]},{geo:$(n*.38,n*.38,.18,8),color:e,rot:[Math.PI/2,0,0]}],s=8;for(let o=0;o<s;o++){const r=o/s*Math.PI*2;i.push({geo:y(n*.42,n*.36,.15),color:e,pos:[Math.cos(r)*n*1.02,Math.sin(r)*n*1.02,0],rot:[0,0,r]})}return i}function gS(){return Ie(tp(.32,mS,Q0))}function vS(){return Ie([...tp(.55,"#fff1a8",Q0),{geo:$(.12,.12,.22,6),color:"#ffffff",rot:[Math.PI/2,0,0]}])}function _S(n){return n.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance *= vColor.rgb;`)},n.customProgramCacheKey=()=>"glowByVertexColor",n}function xS(){const n="#3ddc84",t="#1f9e57";return Ie([{geo:y(.16,.8,.12),color:n,rot:[0,0,.6]},{geo:y(.42,.2,.14),color:n,pos:[-.3,.38,0],rot:[0,0,.6]},{geo:y(.12,.26,.14),color:t,pos:[-.45,.5,0],rot:[0,0,.6]},{geo:y(.12,.26,.14),color:t,pos:[-.2,.68,0],rot:[0,0,.6]},{geo:y(.3,.3,.14),color:t,pos:[.25,-.36,0],rot:[0,0,.6]},{geo:$(.6,.6,.04,12),color:"#e9fff1",pos:[0,.1,-.1],rot:[Math.PI/2,0,0]},{geo:$(.78,.78,.03,14),color:"#173826",pos:[0,.1,-.13],rot:[Math.PI/2,0,0]}])}function MS(){const n="#1982ff",t="#e6ebf2",e=[];for(let s=0;s<=7;s++){const o=Math.PI+s/7*Math.PI;e.push({geo:y(.2,.2,.18),color:n,pos:[Math.cos(o)*.35,Math.sin(o)*.35+.05,0],rot:[0,0,o]})}return e.push({geo:y(.2,.36,.18),color:n,pos:[-.35,.25,0]}),e.push({geo:y(.2,.36,.18),color:n,pos:[.35,.25,0]}),e.push({geo:y(.22,.16,.2),color:t,pos:[-.35,.5,0]}),e.push({geo:y(.22,.16,.2),color:t,pos:[.35,.5,0]}),e.push({geo:$(.65,.65,.04,12),color:"#e3f0ff",pos:[0,.1,-.12],rot:[Math.PI/2,0,0]}),e.push({geo:$(.83,.83,.03,14),color:"#142238",pos:[0,.1,-.15],rot:[Math.PI/2,0,0]}),Ie(e)}const Vf=[0,.5,.9];function yS(n,t){const{min:e,max:i}=n,s=e.y+(i.y-e.y)*(t?.55:.4),o=t?.34:.8,r=t?.07:.2,a=(d,g,_)=>({c:new P(d,s,g),r:o,depth:r*_}),c=d=>a(e.x,e.z,d),l=d=>a(i.x,i.z,d),h=d=>a(i.x,e.z,d),u=d=>a(e.x,i.z,d),f=d=>({c:new P(e.x,s,(e.z+i.z)*.5-.2),r:o*.8,depth:r*.7*d});return[[c(.7),l(.6)],[c(1),l(1),h(.8),u(.7),f(1)]]}function SS(n){return Math.sin(n.x*9.1+n.z*3.7)*Math.sin(n.y*11.3-n.z*5.9)*Math.sin(n.z*7.3+n.x*2.1)}function oa(n,t,e){const i=n.getAttribute("position"),s=new P().addVectors(t.min,t.max).multiplyScalar(.5),o=new P,r=new P;n.morphAttributes.position=yS(t,e).map(a=>{const c=new Float32Array(i.count*3);for(let l=0;l<i.count;l++){o.fromBufferAttribute(i,l);let h=0;for(const u of a){const f=Math.max(0,1-o.distanceTo(u.c)/u.r);h+=u.depth*f*f*(3-2*f)}h>0&&(h*=1+.45*SS(o),r.set(s.x-o.x,(s.y-o.y)*.35-.3,(s.z-o.z)*.5).normalize(),o.addScaledVector(r,h)),c[l*3]=o.x,c[l*3+1]=o.y,c[l*3+2]=o.z}return new Re(c,3)})}const Fe=512;let kc=null;function bS(){if(kc)return kc;let n=7;const t=()=>(n=n*16807%2147483647)/2147483647,e=h=>{const u=document.createElement("canvas");u.width=u.height=Fe;const f=u.getContext("2d",{willReadFrequently:!0});return f.fillStyle="#fff",f.fillRect(0,0,Fe,Fe),f.globalCompositeOperation="darken",h(f),f.getImageData(0,0,Fe,Fe).data},i=(h,u)=>{for(const f of[-Fe,0,Fe])for(const d of[-Fe,0,Fe])h.save(),h.translate(f,d),u(),h.restore()},s=h=>`rgb(${Math.round(h*255)},${Math.round(h*255)},${Math.round(h*255)})`,o=e(h=>{for(let u=0;u<16;u++){const f=t()*Fe,d=t()*Fe,g=.3+t()*.62;h.fillStyle=s(g);const _=2+Math.floor(t()*3),p=Array.from({length:_},()=>[f+(t()-.5)*34,d+(t()-.5)*24,6+t()*14]);i(h,()=>{for(const[m,w,x]of p)h.beginPath(),h.arc(m,w,x,0,Math.PI*2),h.fill()})}}),r=e(h=>{for(let u=0;u<16;u++){const f=t()*Fe,d=t()*Fe,g=t()*Math.PI,_=30+t()*70,p=2+Math.floor(t()*4),m=.4+t()*.55,w=Array.from({length:p},(x,b)=>({off:b*(3+t()*3),l:_*(.6+t()*.4),w:1.2+t()*1.4}));h.strokeStyle=s(m),h.lineCap="round",i(h,()=>{for(const x of w){const b=-Math.sin(g)*x.off,I=Math.cos(g)*x.off;h.lineWidth=x.w,h.beginPath(),h.moveTo(f+b,d+I),h.lineTo(f+b+Math.cos(g)*x.l,d+I+Math.sin(g)*x.l),h.stroke()}})}}),a=e(h=>{for(let u=0;u<9;u++){const f=t()*Fe,d=t()*Fe,g=.6+t()*.25,_=Array.from({length:6+Math.floor(t()*4)},()=>{const p=t()*Math.PI*2,m=[];let w=f,x=d,b=p;const I=40+t()*90;for(let C=0;C<5;C++)b+=(t()-.5)*.7,w+=Math.cos(b)*(I/5),x+=Math.sin(b)*(I/5),m.push([w,x]);return m});h.strokeStyle=s(g),h.lineWidth=1.8,i(h,()=>{for(const p of _){h.beginPath(),h.moveTo(f,d);for(const[m,w]of p)h.lineTo(m,w);h.stroke()}h.beginPath(),h.arc(f,d,9,0,Math.PI*2),h.stroke()})}}),c=new Uint8Array(Fe*Fe*4);for(let h=0;h<c.length;h+=4)c[h]=o[h],c[h+1]=r[h],c[h+2]=a[h],c[h+3]=255;const l=new Ra(c,Fe,Fe,xn);return l.wrapS=l.wrapT=ki,l.generateMipmaps=!0,l.minFilter=hi,l.magFilter=_n,l.needsUpdate=!0,kc=l,l}function Wf(n,t){return`
    {
      vec3 dmg = texture2D( damageMap, ${n} * 4.0 ).rgb;
      ${t?`float grime = smoothstep( dmg.r, dmg.r + 0.06, damage );
             diffuseColor.rgb *= 1.0 - 0.38 * grime;
             float scratch = smoothstep( dmg.g, dmg.g + 0.04, damage );
             diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.62, 0.64, 0.68 ), scratch * 0.8 );`:`float crack = smoothstep( dmg.b, dmg.b + 0.04, damage );
             diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.82, 0.88, 0.95 ), crack * 0.85 );`}
    }`}function Bc(n,t){const e={value:0},i=n.onBeforeCompile;n.onBeforeCompile=(o,r)=>{i.call(n,o,r),o.uniforms.damage=e,o.uniforms.damageMap={value:bS()};const a=`uniform float damage;
uniform sampler2D damageMap;
`;t==="paint"?o.fragmentShader=a+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${Wf("vMapUv",!0)}`):(o.vertexShader=`varying vec2 vDamageUv;
`+o.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vDamageUv = uv;`),o.fragmentShader=a+`varying vec2 vDamageUv;
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${Wf("vDamageUv",!1)}`))};const s=n.customProgramCacheKey.bind(n);return n.customProgramCacheKey=()=>`${s()}|damage-${t}`,n.needsUpdate=!0,e}const Ye=1024,Gr=6,wS='"Lilita One", "Arial Black", sans-serif',kh={right:{x:0,y:0,w:1024,h:256},left:{x:0,y:256,w:1024,h:256},top:{x:0,y:512,w:512,h:512},front:{x:512,y:512,w:512,h:256},back:{x:512,y:768,w:512,h:256}};function ep(n,t){const e=kh[n],i=e.w-2*Gr,s=e.h-2*Gr,o=e.x+Gr,r=e.y+Gr,{min:a,max:c}=t,l=s/(c.y-a.y);switch(n){case"right":{const h=i/(c.z-a.z);return{sa:-h,sb:-l,ox:o+c.z*h,oy:r+c.y*l}}case"left":{const h=i/(c.z-a.z);return{sa:h,sb:-l,ox:o-a.z*h,oy:r+c.y*l}}case"top":{const h=i/(c.x-a.x),u=s/(c.z-a.z);return{sa:h,sb:u,ox:o-a.x*h,oy:r-a.z*u}}case"front":{const h=i/(c.x-a.x);return{sa:-h,sb:-l,ox:o+c.x*h,oy:r+c.y*l}}case"back":{const h=i/(c.x-a.x);return{sa:h,sb:-l,ox:o-a.x*h,oy:r+c.y*l}}}}function xa(n,t){const e=n.getAttribute("position"),i=new Float32Array(e.count*2),s=Object.fromEntries(Object.keys(kh).map(h=>[h,ep(h,t)])),o=new P,r=new P,a=new P,c=new P,l=new P;for(let h=0;h<e.count;h+=3){o.fromBufferAttribute(e,h),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),c.subVectors(r,o).cross(l.subVectors(a,o));const u=Math.abs(c.x),f=Math.abs(c.y),d=Math.abs(c.z),g=u>=f&&u>=d?c.x>0?"right":"left":f>=d?"top":c.z<0?"front":"back",_=s[g];for(let p=0;p<3;p++){const m=p===0?o:p===1?r:a,[w,x]=g==="top"?[m.x,m.z]:g==="front"||g==="back"?[m.x,m.y]:[m.z,m.y];i[(h+p)*2]=(_.ox+_.sa*w)/Ye,i[(h+p)*2+1]=(_.oy+_.sb*x)/Ye}}n.setAttribute("uv",new Re(i,2))}class ES{constructor(t,e,i,s,o,r){this.c=t,this.m=e,this.acc=i,this.flipX=s,this.flipY=o,this.side=r}both(t){t(this.c,!1),t(this.m,!0)}shade(t,e){this.c.fillStyle=e,this.c.fill(t)}shadeLine(t,e,i){this.c.strokeStyle=e,this.c.lineWidth=i,this.c.stroke(t)}shadeGradient(t,e,i,s){const o=this.c.createLinearGradient(0,t,0,e);o.addColorStop(0,i),o.addColorStop(1,s),this.c.fillStyle=o,this.c.globalCompositeOperation="multiply",this.c.fillRect(-10,Math.min(t,e),20,Math.abs(e-t)),this.c.globalCompositeOperation="source-over"}decal(t,e){this.both((i,s)=>{i.fillStyle=s?"#000":e,i.fill(t)})}decalLine(t,e,i){this.both((s,o)=>{s.strokeStyle=o?"#000":e,s.lineWidth=i,s.lineJoin="round",s.lineCap="round",s.stroke(t)})}accent(t){this.decal(t,"#fff"),this.acc.fillStyle="#fff",this.acc.fill(t)}accentLine(t,e){this.decalLine(t,"#fff",e),this.acc.strokeStyle="#fff",this.acc.lineWidth=e,this.acc.lineJoin="round",this.acc.lineCap="round",this.acc.stroke(t)}text(t,e,i,s,o,r){this.both((c,l)=>{c.save(),c.translate(e,i),c.scale((this.flipX?-1:1)/200,(this.flipY?-1:1)/200),c.font=`${s*200}px ${wS}`,c.textAlign="center",c.textBaseline="middle",r&&(c.lineWidth=s*200*.16,c.lineJoin="round",c.strokeStyle=l?"#000":r,c.strokeText(t,0,s*200*.06)),c.fillStyle=l?"#000":o,c.fillText(t,0,s*200*.06),c.restore()})}}function Jn(n,t,e,i){const s=new Path2D;return s.rect(Math.min(n,e),Math.min(t,i),Math.abs(e-n),Math.abs(i-t)),s}function hs(n,t,e){const i=new Path2D;return i.arc(n,t,e,0,Math.PI*2),i}function tr(n,t=!0){const e=new Path2D;e.moveTo(n[0][0],n[0][1]);for(let i=1;i<n.length;i++)e.lineTo(n[i][0],n[i][1]);return t&&e.closePath(),e}function zi(n,t,e,i){return tr([[n,t],[e,i]],!1)}function Xf(n,t,e){const i=new Ra(n,Ye,Ye,t);return e&&(i.colorSpace=Ge),i.generateMipmaps=!0,i.minFilter=hi,i.magFilter=_n,i.anisotropy=4,i.needsUpdate=!0,i}function TS(n,t){const e=f=>{const d=document.createElement("canvas");d.width=d.height=Ye;const g=d.getContext("2d",{willReadFrequently:!0});return g.fillStyle=f,g.fillRect(0,0,Ye,Ye),g},i=e("#fff"),s=e("#fff"),o=e("#000"),r=(f,d,g=0)=>{if(!d)return;const _=kh[f],p=ep(f,t);for(const m of[i,s,o])m.save(),m.beginPath(),m.rect(_.x,_.y,_.w,_.h),m.clip(),m.setTransform(p.sa,0,0,p.sb,p.ox,p.oy);d.call(n,new ES(i,s,o,p.sa<0,p.sb<0,g));for(const m of[i,s,o])m.restore()};r("right",n.side,1),r("left",n.side,-1),r("top",n.top),r("front",n.front),r("back",n.back);const a=i.getImageData(0,0,Ye,Ye).data,c=s.getImageData(0,0,Ye,Ye).data,l=o.getImageData(0,0,Ye,Ye).data,h=new Uint8Array(Ye*Ye*4),u=new Uint8Array(Ye*Ye);for(let f=0;f<h.length;f+=4)h[f]=a[f],h[f+1]=a[f+1],h[f+2]=a[f+2],h[f+3]=c[f],u[f/4]=l[f];return{map:Xf(h,xn,!0),accent:Xf(u,Ea,!1)}}function AS(n,t,e){n.map=t.map,n.onBeforeCompile=i=>{i.uniforms.accentMap={value:t.accent},i.uniforms.accentColor={value:e},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D accentMap;
uniform vec3 accentColor;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec4 livery = texture2D( map, vMapUv );
        diffuseColor.rgb = mix( livery.rgb, diffuseColor.rgb * livery.rgb, livery.a );
        diffuseColor.rgb = mix( diffuseColor.rgb, accentColor * livery.rgb, texture2D( accentMap, vMapUv ).r );
      #endif`)},n.customProgramCacheKey=()=>"livery",n.needsUpdate=!0}const ue="#ffffff",Gn="#c4c4c4",Bh="#212228",xs="#c9ced6",sh="#4a4f59",pe="#e6e9ee",RS="#9097a1",np="#22344d",Wt="#2b2d34",zc="#3b3e47",ip="#555a65",Le="#17181d",zh="#26262c",po="#fff6c4",sp="#eef7ff",_i="#ff2e3a",Ms="#ffa21a",CS="#f2f2ea",PS="#f1f1e8",oh="#f6f6f2",ra="#d9a52b",LS="#f4f4f4",IS="#151b28";function op(n){const{r:t,w:e}=n,i=t*(n.style==="bike"?.78:.66),s=[{geo:bc([[i,-e/2],[t*.9,-e/2],[t,-e*.28],[t,e*.28],[t*.9,e/2],[i,e/2]],16),color:Bh,rot:[0,0,-Math.PI/2]}],o=(r,a,c,l,h,u)=>{for(let f=0;f<n.spokes;f++){const d=f/n.spokes*Math.PI*2;s.push({geo:y(l,a,h),color:u,pos:[r,Math.cos(d)*c,Math.sin(d)*c],rot:[d,0,0]})}};if(n.style==="car"){s.push({geo:$(i,i,e*.7,16),color:sh,rot:[0,0,Math.PI/2]});const r=(n.side??1)*e*.37;s.push({geo:bc([[i*.84,-.015],[i,-.015],[i,.015],[i*.84,.015],[i*.84,-.015]],16),color:n.rim,pos:[r,0,0],rot:[0,0,-Math.PI/2]}),o(r,i*.66,i*.5,.03,i*(n.spokes>6?.14:.3),n.rim),s.push({geo:$(i*.26,i*.3,.06,8),color:pe,pos:[r,0,0],rot:[0,0,Math.PI/2]})}else if(n.style==="bike"){s.push({geo:bc([[i*.88,-e*.32],[i,-e*.32],[i,e*.32],[i*.88,e*.32],[i*.88,-e*.32]],16),color:n.rim,rot:[0,0,-Math.PI/2]}),o(0,i*.8,i*.48,e*.2,i*.16,n.rim),s.push({geo:$(i*.2,i*.2,e*.9,10),color:pe,rot:[0,0,Math.PI/2]});for(const r of[-e*.36,e*.36])s.push({geo:$(i*.62,i*.62,.014,12),color:RS,pos:[r,0,0],rot:[0,0,Math.PI/2]})}else s.push({geo:$(i,i,e*.72,14),color:n.rim,rot:[0,0,Math.PI/2]}),s.push({geo:$(i*.62,i*.66,e*.8,10),color:pe,rot:[0,0,Math.PI/2]}),s.push({geo:$(i*.22,i*.22,e*.9,8),color:Wt,rot:[0,0,Math.PI/2]});return Ie(s)}const DS=.52,US=.5,NS=.38,FS=.36,qf=.6,OS=.2,Vs=n=>new P(...n),Hn=n=>[n.x,n.y,n.z];function Yf(n,t,e,i,s){const o=t.clone().sub(n),r=Math.min(o.length(),e+i-.001);o.normalize();const a=s.clone().sub(n);a.addScaledVector(o,-a.dot(o)).normalize();const c=(e*e-i*i+r*r)/(2*r);return n.clone().addScaledVector(o,c).addScaledVector(a,Math.sqrt(Math.max(0,e*e-c*c)))}function Qi(n,t,e,i){const s=e.map((o,r)=>Hn(n.clone().lerp(t,r/(e.length-1))));return{geo:rr(s,e,7),color:i}}function $f(n,t=n.hip){const e=Vs(t),i=Vs(n.hip).sub(e),s=(m,w)=>new P(w*Math.abs(m[0]),m[1],m[2]).sub(e),o=new P(0,Math.cos(n.lean),-Math.sin(n.lean)),r=new P(0,Math.sin(n.lean),Math.cos(n.lean)),a=.03+.05*n.lean,c=m=>i.clone().addScaledVector(o,m).addScaledVector(r,a*Math.sin(Math.PI*Math.min(1,Math.max(0,m/qf)))),l=(m,w)=>({geo:rr(m.map(([x])=>Hn(c(x))),m.map(([,x,b])=>[x,b]),10),color:w}),h=[l([[-.07,.12,.1],[0,.16,.13],[.1,.165,.13],[.18,.15,.115]],Gn),l([[.14,.148,.112],[.28,.165,.125],[.42,.19,.13],[.52,.2,.115],[.6,.12,.08]],ue),{geo:new Wn(.1,6,4),color:Gn,pos:Hn(c(.38).addScaledVector(r,.1)),rot:[-n.lean,0,0],scale:[1.3,1.9,.45]}],u=[];for(const m of[-1,1]){const w=new P(m,0,0),x=c(.52).addScaledVector(w,OS),b=s(n.hands,m),I=Yf(x,b,NS,FS,x.clone().add(new P(m*.35,-.5,.35))),C=b.clone().addScaledVector(I.clone().sub(b).normalize(),.06);h.push({geo:new Wn(.075,6,4),color:ue,pos:Hn(x)}),h.push(Qi(x,I,[.068,.06,.05],ue),{geo:new Wn(.05,6,4),color:ue,pos:Hn(I)}),h.push(Qi(I,C,[.052,.052,.038],ue)),u.push(Qi(C.clone().addScaledVector(I.clone().sub(C).normalize(),.09),C,[.05,.048],Wt)),u.push({geo:new Wn(.058,6,4),color:Wt,pos:Hn(b),scale:[.9,.8,1.1]});const T=c(0).addScaledVector(w,.1),L=s(n.feet,m),z=L.clone().add(new P(0,.1,.04)),v=Yf(T,z,DS,US,s(n.knees,m));h.push(Qi(T,v,[.1,.095,.078,.064],Gn),{geo:new Wn(.066,6,4),color:Gn,pos:Hn(v)}),h.push(Qi(v,z,[.062,.07,.055,.046],Gn)),u.push(Qi(z,z.clone().addScaledVector(v.clone().sub(z).normalize(),.22),[.058,.062],Wt));const M=Ee([[.08,-.04],[-.16,-.04],[-.2,0],[-.17,.05],[-.05,.08],[.02,.17],[.09,.17],[.1,.02]],.12,.02);u.push({geo:M,color:Wt,pos:Hn(L)})}const f=o.clone().lerp(new P(0,1,0),.6).normalize(),d=Hn(c(qf).addScaledVector(f,.19).add(new P(0,0,-.02)));h.push(Qi(c(.54),Vs(d).addScaledVector(f,-.1),[.07,.06],Gn));const g=BS(),_=m=>({...m,pos:Hn(Vs(m.pos??[0,0,0]).add(Vs(d)))});h.push(...g.suit.map(_)),u.push(...g.gear.map(_));const p={chest:[.2,.3,.4,.5].map(m=>c(m).addScaledVector(r,-.13).add(e)),helmet:Vs(d).add(new P(0,-.84*rp,0)).add(e)};return{suit:h,gear:u,visor:g.gloss.map(_),probes:p}}function kS(n){return{...n,lean:n.duck.lean,hip:n.duck.hip??n.hip}}function aa(n,t){return us(`${n}:${t}`,()=>{const e=mo(n).rider,i=Ie($f(e)[t]),s=Ie($f(kS(e),e.hip)[t]);if(s.getAttribute("position").count!==i.getAttribute("position").count)throw new Error(`${n} ${t}: duck pose topology differs`);return i.morphAttributes.position=[s.getAttribute("position")],i.morphAttributes.normal=[s.getAttribute("normal")],i})}const rp=.175;function ap(n){const t=n.z<0?Xd.smoothstep(-n.y,-.1,.45)*-n.z:0;return n.set(n.x*.86*(1-.16*t),n.y*.94,n.z*(n.z>0?1.14:1.02)*(1+.4*t)),n.y=Math.max(n.y,-.84+.26*Math.max(0,n.z)),n.multiplyScalar(rp)}function Vr(n,...t){const e=new Wn(...t),i=e.getAttribute("position"),s=new P;for(let o=0;o<i.count;o++)ap(s.fromBufferAttribute(i,o)).multiplyScalar(n),i.setXYZ(o,s.x,s.y,s.z);return e.computeVertexNormals(),e}const Hc=(n,t,e,i=1)=>Hn(ap(new P(n,t,e).normalize()).multiplyScalar(i));function BS(){return{gloss:[{geo:Vr(1,1,12,10),color:LS},{geo:Vr(1.02,1,12,4,Math.PI*1.5-1.05,2.1,.98,.66),color:IS}],gear:[...Ft(n=>({geo:$(.018,.018,.01,6),color:Wt,pos:Hc(n*.92,.2,-.36,1.02),rot:[0,0,Math.PI/2]})),{geo:rr(Array.from({length:11},(n,t)=>Hc(Math.sin(t/10*Math.PI*2)*.5,-.9,Math.cos(t/10*Math.PI*2)*.5,.97)),Array(11).fill(.014),4),color:Wt},...Ft(n=>({geo:y(.028,.012,.05),color:Wt,pos:Hc(n*.16,.9,-.4),rot:[-.4,0,0]}))],suit:[{geo:Vr(1.012,1,2,10,Math.PI*.5-.14,.28,0,1.75),color:ue},{geo:Vr(1.012,1,2,5,Math.PI*1.5-.14,.28,0,.9),color:ue}]}}function Hh(n){const t=n.pts.map(c=>c[1]),e=Math.min(...t),i=Math.max(...t),s=[-1,1].map(c=>{const l=Ee(n.pts,.035,0,n.windows);return l.translate(c*(n.w/2+.0175),0,0),{geo:Jo(l,e,i,n.top),color:ue}}),[o,r,a]=n.roof;return s.push({geo:Ut(n.w*n.top+.05,.06,r-o,.025),color:ue,pos:[0,a,(o+r)/2]}),{paint:s,glass:[{geo:Jo(Ee(n.pts,n.w),e,i,n.top),color:np}]}}function Gh(n,t,e){return t.flatMap(i=>Ft(s=>({geo:_s(i,e,0,e+.08,-.3,Math.PI+.3,.012),color:Le,pos:[s*(n/2+.004),0,0]})))}function Vh(n,t,e,i){const s=a=>n/2+.025-a*.3,o={...i,w:i.wf},r={...i,w:i.wr};return[{...o,side:-1,pos:[-s(i.wf),i.r,t]},{...o,side:1,pos:[s(i.wf),i.r,t]},{...r,side:-1,pos:[-s(i.wr),i.r,e]},{...r,side:1,pos:[s(i.wr),i.r,e]}]}function Wh(n,t,e,i,s,o){const r=[];for(const a of[-1,1]){for(const c of t)r.push({geo:y(.012,s-i,.018),color:Le,pos:[a*(n/2+.004),(i+s)/2,c]});r.push({geo:y(.03,.04,.16),color:pe,pos:[a*(n/2+.012),o,e]})}return r}function co(n,t,e,i){return{paint:[{geo:Ut(.1,.12,.16,.035),color:ue,pos:[i*(n+.13),t+.04,e]}],detail:[{geo:Ut(.14,.04,.05,.015),color:Wt,pos:[i*(n+.05),t-.02,e]}]}}function ys(n,t,e){return[{geo:y(.44,.14,.02),color:PS,pos:[0,t,n]},{geo:y(.4,.02,.025),color:Wt,pos:[0,t,n+(e?.003:-.003)]}]}const Ln="#f7f7f2",Qn="#1b1c21",Xh="#f2b632",Ma="#d6dae0",Vo="#9e9e9e";function yn(n,t,e){n.shadeGradient(t,e,"#8a8a8a","#ffffff")}function cp(n,t,e,i,s){n.decal(hs(t,e,i),Ln),n.decalLine(hs(t,e,i*.94),Qn,i*.1),n.text(s,t,e,i*1.15,Qn)}function zS(){const n=[{geo:new Wn(.42,14,10),color:ue,pos:[0,.64,.46],scale:[.98,.78,1.42]},{geo:Jo(Ee([[-.74,.3],[-.5,.3],[-.48,.42],[-.53,1.04],[-.6,1.22],[-.68,1.2],[-.66,.9],[-.76,.46]],.62,.03),.3,1.22,.62),color:ue},{geo:Ut(.46,.08,.86,.03),color:Gn,pos:[0,.32,-.1]},{geo:Ut(.58,.12,.2,.05),color:ue,pos:[0,1.3,-.57]},{geo:new Wn(.15,10,8),color:ue,pos:[0,1.28,-.66],scale:[1,.9,1.1]}],t=[...[-.13,0,.13].map(o=>({geo:Ut(.05,.02,.7,.008),color:Wt,pos:[o,.37,-.1]})),{geo:Ee([[0,.94],[.84,.94],[.94,1],[.84,1.09],[.12,1.11],[0,1.04]],.38,.04),color:zh},...Ft(o=>Vt([o*.27,1.32,-.57],[o*.38,1.3,-.55],.035,Wt)),Vt([-.22,1.33,-.56],[-.3,1.58,-.56],.012,pe),Vt([.17,.32,.55],[.2,.36,1],.06,pe),Vt([.2,.36,1],[.2,.36,1.04],.045,Le),{geo:Ee([[.22,.34],[.8,.2],[.86,.36],[.78,.42],[.28,.52]],.08,.02),color:ip,pos:[-.15,0,0]},{geo:$(.07,.07,.04,10),color:pe,pos:[-.2,.3,.72],rot:[0,0,Math.PI/2]},{geo:Ut(.16,.07,.14,.02),color:Wt,pos:[0,.6,1.07]},...ys(1.15,.6,!0)],e=[{geo:$(.1,.1,.05,14),color:po,pos:[0,1.29,-.8],rot:[Math.PI/2,0,0]},{geo:$(.12,.12,.04,14),color:pe,pos:[0,1.29,-.78],rot:[Math.PI/2,0,0]},{geo:$(.055,.055,.02,10),color:pe,pos:[-.3,1.6,-.56],rot:[Math.PI/2,0,0]},{geo:Ut(.2,.08,.07,.015),color:_i,pos:[0,.768,1.022],rot:[-.62,0,0]},...Ft(o=>({geo:Ut(.06,.05,.04,.01),color:Ms,pos:[o*.2,1.24,-.74]}))],i={side(o){yn(o,.25,.6);const r=new Path2D;r.ellipse(.46,.64,.5,.2,0,Math.PI*.95,Math.PI*2.05),o.decalLine(r,Ln,.03);const a=new Path2D;a.ellipse(.46,.64,.44,.15,0,Math.PI*1,Math.PI*2),o.decalLine(a,Xh,.014),o.decal(hs(.52,.66,.085),Ln),o.text("GR",.52,.66,.085,Qn)},front(o){o.decalLine(zi(0,.42,0,.92),Ma,.035);for(const r of[1,1.04,1.08])o.shadeLine(zi(-.09,r,.09,r),"#7a7a7a",.016);yn(o,.25,.55)},back(o){yn(o,.25,.6)}},s=[{at:1,detail:[Vt([.22,1.33,-.56],[.3,1.58,-.56],.012,pe)],shiny:[{geo:$(.055,.055,.02,10),color:pe,pos:[.3,1.6,-.56],rot:[Math.PI/2,0,0]}]},{at:2,detail:[...Ft(o=>Vt([o*.13,1,.78],[o*.13,.98,1.02],.016,pe)),Vt([-.13,.99,1.02],[.13,.99,1.02],.014,pe),...Ft(o=>Vt([o*.13,.98,1.02],[o*.15,.8,.9],.016,pe))]},{at:3,tiltAt:2,tilt:[.3,0,.12],pivot:[0,.68,-.62],paint:[{geo:_s(-.78,.3,.33,.41,.25,2.25,.26,.02,12),color:ue}]}];return{paint:n,detail:t,shiny:e,livery:i,loose:s,smoke:[.2,.38,1.05],wheels:[{pos:[0,.3,-.78],r:.3,w:.18,style:"scooter",spokes:0,rim:xs},{pos:[0,.3,.72],r:.3,w:.2,style:"scooter",spokes:0,rim:xs}],rider:{hip:[0,1.12,.12],lean:.25,hands:[.36,1.32,-.55],knees:[.2,1.05,-.12],feet:[.15,.45,-.28],duck:{lean:1.25,hip:[0,1.14,.24]}}}}function HS(){const n=[{geo:Jo(Ee([[-.62,.98],[.12,.98],[.22,1.12],[-.04,1.3],[-.5,1.28],[-.66,1.12]],.5,.045),.98,1.3,.72),color:ue},{geo:Jo(Ee([[.66,1.02],[1.16,1.2],[1.12,1.27],[.82,1.23],[.62,1.12]],.28,.03),1.02,1.27,.7),color:ue},...Ft(o=>({geo:Ut(.03,.12,.34,.012),color:Gn,pos:[o*.24,1.13,-.24]})),...Ft(o=>Vt([o*.12,1.12,-.74],[o*.2,.74,.32],.045,Gn)),...Ft(o=>Vt([o*.12,1.05,-.72],[o*.16,.56,-.34],.04,Gn))],t=[{geo:Ut(.42,.36,.52,.06),color:ip,pos:[0,.6,-.04]},...[0,1,2,3].map(o=>({geo:y(.46,.03,.34),color:xs,pos:[0,.82+o*.045,-.12],rot:[.25,0,0]})),{geo:Ut(.4,.3,.06,.02),color:Le,pos:[0,.82,-.47],rot:[.2,0,0]},{geo:Ee([[.1,1.06],[.82,1.1],[.92,1.18],[.6,1.22],[.14,1.21]],.34,.03),color:zh},...Ft(o=>Vt([o*.1,.38,-1.05],[o*.1,.72,-.95],.065,Wt)),{geo:Ut(.34,.06,.14,.02),color:Wt,pos:[0,1.12,-.78]},{geo:Ut(.34,.05,.12,.02),color:Wt,pos:[0,1.22,-.75]},{geo:Ut(.18,.08,.1,.02),color:Le,pos:[0,1.29,-.74],rot:[-.4,0,0]},Vt([-.36,1.3,-.64],[.36,1.3,-.64],.025,Wt),...Ft(o=>Vt([o*.3,1.3,-.64],[o*.42,1.3,-.62],.04,Bh)),Vt([-.26,1.3,-.65],[-.34,1.52,-.62],.012,Wt),{geo:Ut(.15,.08,.04,.015),color:Wt,pos:[-.36,1.54,-.62]},...Ft(o=>Vt([o*.15,.62,.32],[o*.13,.38,1],.04,Wt)),...Ft(o=>Vt([o*.18,.6,.3],[o*.3,.6,.3],.025,Wt)),...Ft(o=>Vt([o*.18,.92,.3],[o*.1,1.08,.95],.025,Wt)),{geo:Ut(.03,.08,.5,.01),color:Wt,pos:[-.17,.5,.68],rot:[-.3,0,0]},Vt([.1,.62,-.34],[.2,.36,-.02],.035,pe),Vt([.2,.36,-.02],[.24,.5,.6],.04,pe),Vt([.24,.48,.5],[.26,.66,1.02],.08,pe,8,.07),Vt([.26,.66,1.02],[.265,.67,1.05],.06,Le,8),...Ft(o=>({geo:$(.12,.12,.03,12),color:xs,pos:[o*.22,.58,0],rot:[0,0,Math.PI/2]})),...Ft(o=>Vt([o*.135,.44,.85],[o*.12,1.04,.8],.028,Wt)),...Ft(o=>Vt([o*.133,.55,.84],[o*.123,.9,.81],.045,ra,8)),{geo:_s(1,.38,.43,.47,.45,1.75,.24,0,8),color:Wt},Vt([0,1.16,.9],[0,.88,1.2],.03,Wt),...Ft(o=>Vt([o*.02,1.01,1.06],[o*.13,1.01,1.08],.012,Wt)),...ys(1.215,.8,!0).map(o=>({...o,rot:[-.3,0,0]}))],e=[...Ft(o=>Vt([o*.1,.7,-.96],[o*.1,1.14,-.8],.045,pe)),{geo:$(.15,.11,.16,12),color:pe,pos:[0,1.1,-.9],rot:[Math.PI/2,0,0]},{geo:$(.13,.13,.03,12),color:po,pos:[0,1.1,-.99],rot:[Math.PI/2,0,0]},{geo:Ut(.14,.06,.05,.015),color:_i,pos:[0,1.252,1.17],rot:[-.52,0,0]},...Ft(o=>({geo:Ut(.07,.05,.05,.012),color:Ms,pos:[o*.2,1.06,-.84]})),...Ft(o=>({geo:Ut(.06,.05,.05,.012),color:Ms,pos:[o*.15,1.01,1.08]}))],i={side(o){o.decal(tr([[-.62,1.12],[.16,1.09],[.19,1.15],[-.62,1.19]]),Ln),o.decalLine(zi(-.62,1.11,.16,1.085),Qn,.012),o.decalLine(zi(-.62,1.2,.19,1.16),Qn,.012),o.shade(Jn(-.32,1,-.08,1.07),"#b0b0b0"),o.text("3",.95,1.16,.1,Ln,Qn),yn(o,.7,1.05)},top(o){for(const r of[-.065,.065])o.decal(Jn(r-.02,-.64,r+.02,.2),Ln);for(const r of[-.04,.04])o.decal(Jn(r-.012,.7,r+.012,1.15),Ln)}},s=[{at:1,detail:[Vt([.26,1.3,-.65],[.34,1.52,-.62],.012,Wt),{geo:Ut(.15,.08,.04,.015),color:Wt,pos:[.36,1.54,-.62]}]},{at:2,paint:[{geo:_s(-1.05,.38,.42,.47,.35,1.95,.18,.015,10),color:ue}]}];return{paint:n,detail:t,shiny:e,livery:i,loose:s,smoke:[.265,.68,1.06],wheels:[{pos:[0,.38,-1.05],r:.38,w:.17,style:"bike",spokes:5,rim:sh},{pos:[0,.38,1],r:.38,w:.23,style:"bike",spokes:5,rim:sh}],rider:{hip:[0,1.2,.24],lean:.62,hands:[.36,1.31,-.62],knees:[.24,1,-.12],feet:[.27,.62,.26],duck:{lean:1.1,hip:[0,1.24,.36]}}}}function Ri(n,t=12){return rr(n.map(([e,i])=>[0,i,e]),n.map(([,,e,i])=>[e,i]),t)}function Ao(n,t,e,i=1){let s=0;for(;s<n.length-2&&t>n[s+1][0];)s++;const[o,r,a,c]=n[s],[l,h,u,f]=n[s+1],d=Math.min(1,Math.max(0,(t-o)/(l-o))),g=(_,p)=>_+(p-_)*d;return[g(a,u)*Math.cos(e)*i,g(r,h)+g(c,f)*Math.sin(e)*i,t]}const Kf=(n,t,e)=>({geo:rr(n,t,4),color:e}),jf=[[-1.22,1,.05,.04],[-1.12,1,.18,.12],[-.98,1.02,.25,.16],[-.82,.98,.29,.2],[-.64,.86,.31,.32],[-.4,.76,.31,.34],[-.1,.72,.3,.32],[.15,.72,.26,.3],[.32,.66,.16,.2],[.42,.62,.05,.06]],Ro=[[.5,1.06,.13,.05],[.65,1.12,.17,.09],[.85,1.2,.165,.1],[1.05,1.28,.13,.08],[1.24,1.35,.085,.05]],Zf=n=>[Vt([n*.2,1.12,-.86],[n*.36,1.2,-.84],.014,Wt),{geo:Ut(.14,.07,.05,.015),color:Wt,pos:[n*.38,1.21,-.84]}];function GS(){const n=[{geo:Ri(jf,14),color:ue},{geo:Ri([[-.55,1.08,.12,.05],[-.42,1.13,.21,.11],[-.2,1.16,.24,.13],[.02,1.13,.22,.12],[.18,1.1,.15,.08],[.24,1.1,.06,.03]]),color:ue},{geo:Ri(Ro),color:ue},{geo:_s(-1.02,.38,.42,.46,.4,1.6,.16,.012,8),color:ue}],t=[{geo:Ri([[-.62,.45,.1,.04],[-.42,.41,.24,.08],[0,.41,.25,.09],[.28,.44,.18,.07],[.38,.47,.06,.03]]),color:Wt},{geo:Ri([[.14,1.1,.09,.03],[.24,1.13,.14,.06],[.5,1.15,.13,.06],[.64,1.17,.09,.04]],10),color:zh},...Ft(o=>({geo:y(.012,.035,.2),color:Le,pos:[o*.282,.68,0],rot:[-.5,0,0]})),...Ft(o=>({geo:y(.012,.035,.2),color:Le,pos:[o*.27,.6,.06],rot:[-.5,0,0]})),{geo:Ut(.1,.05,.04,.015),color:Le,pos:[0,.98,-1.2]},{geo:Ri([[1.236,1.35,.083,.048],[1.248,1.35,.078,.044]],8),color:Le},...Ft(o=>Vt([o*.1,.38,-1.02],[o*.1,.66,-.94],.06,Wt)),{geo:Ut(.32,.05,.12,.02),color:Wt,pos:[0,1.2,-.68]},...Ft(o=>Vt([o*.12,1.18,-.68],[o*.32,1.12,-.6],.025,Wt)),...Ft(o=>Vt([o*.26,1.12,-.61],[o*.36,1.12,-.58],.04,Bh)),...Zf(-1),...Ft(o=>({geo:Ut(.05,.1,.72,.02),color:xs,pos:[o*.15,.5,.66],rot:[.32,0,0]})),...Ft(o=>Vt([o*.18,.72,.4],[o*.3,.72,.42],.025,Wt)),Vt([.12,.44,.2],[.2,.7,.62],.04,pe),Vt([.2,.66,.55],[.22,.86,.98],.085,xs,10,.07),Vt([.22,.86,.98],[.225,.87,1.01],.06,Le,10),{geo:Ri([[.28,.74,.15,.22],[.5,.9,.13,.16],[.75,1.06,.11,.09],[1,1.18,.07,.04]],10),color:Wt},{geo:_s(1,.38,.43,.47,.45,1.75,.26,0,8),color:Wt},Vt([0,1.17,.95],[0,.98,1.22],.03,Wt),...Ft(o=>Vt([o*.02,1.064,1.1],[o*.11,1.064,1.12],.012,Wt)),...ys(1.23,.9,!0).map(o=>({...o,rot:[-.35,0,0]}))],e=[...Ft(o=>Vt([o*.1,.64,-.95],[o*.1,1.18,-.7],.05,ra)),...Ft(o=>{const r=[[-1.19,.3],[-1.12,.45],[-1.03,.55],[-.94,.6]].map(([a,c])=>{const l=Ao(jf,a,c);return[o*l[0],l[1],l[2]]});return Kf(r,[.01,.024,.022,.008],sp)}),Kf([Ao(Ro,1,Math.PI-.25,1.1),Ao(Ro,1.15,Math.PI-.12,1.12),[-.075,1.35,1.255],[.075,1.35,1.255],Ao(Ro,1.15,.12,1.12),Ao(Ro,1,.25,1.1)],[.01,.02,.022,.022,.02,.01],_i),...Ft(o=>({geo:Ut(.06,.04,.04,.01),color:Ms,pos:[o*.13,1.064,1.12]}))],i={side(o){o.decal(tr([[-1.25,.76],[.55,.56],[.55,.2],[-1.25,.2]]),Qn),o.decalLine(zi(-1.25,.785,.55,.585),Xh,.022),cp(o,-.24,.88,.15,"88"),o.text("88",.92,1.27,.09,Ln,Qn)},top(o){for(const r of[-.045,.045])o.decal(Jn(r-.016,-1.15,r+.016,1.2),Ln)},front(o){o.decal(tr([[-.2,.86],[.2,.86],[.1,.8],[-.1,.8]]),Qn)}},s=[{at:1,detail:Zf(1)},{at:2,shiny:[{geo:Ri([[-.98,1.13,.14,.03],[-.84,1.18,.2,.08],[-.68,1.24,.19,.11],[-.56,1.27,.14,.09],[-.5,1.27,.06,.04]]),color:np}]}];return{paint:n,detail:t,shiny:e,livery:i,loose:s,smoke:[.225,.88,1.03],wheels:[{pos:[0,.38,-1.02],r:.38,w:.18,style:"bike",spokes:3,rim:ra},{pos:[0,.38,1],r:.38,w:.26,style:"bike",spokes:3,rim:ra}],rider:{hip:[0,1.22,.34],lean:.95,hands:[.34,1.12,-.58],knees:[.26,.98,-.18],feet:[.29,.74,.42],duck:{lean:1.35,hip:[0,1.26,.44]}}}}function VS(){const t=Ee([[-1.58,.3],[1.6,.3],[1.66,.42],[1.64,.94],[1.5,1],[-.85,.97],[-1.55,.82],[-1.66,.6],[-1.64,.4]],1.78,.06),e=Hh({pts:[[-.9,.95],[1.58,.95],[1.5,1.58],[1.32,1.66],[-.22,1.66],[-.42,1.6]],w:1.6,top:.86,windows:[[[-.6,1.03],[.3,1.03],[.3,1.56],[-.2,1.56]],[[.42,1.03],[1.42,1.03],[1.36,1.5],[1.24,1.56],[.42,1.56]]],roof:[-.22,1.36,1.67]}),i=co(.8,1.04,-.66,-1),s=[{geo:t,color:ue},...e.paint.slice(0,2),...i.paint],o=[{...e.paint[2],color:oh},{geo:Ut(1.3,.05,.3,.02),color:oh,pos:[0,1.62,1.42],rot:[-.25,0,0]}],r=[...i.detail,...Gh(1.78,[-1.05,1.05],.36),{geo:Ut(1.78+.08,.22,.28,.08),color:zc,pos:[0,.38,-1.66]},...Ft(h=>({geo:Ut(.05,.14,1.3,.02),color:zc,pos:[h*(1.78/2+.02),.36,0]})),{geo:Ut(.72,.2,.06,.03),color:Le,pos:[0,.58,-1.7]},...Wh(1.78,[-.72,.42],.25,.42,.95,.86),...ys(1.81,.62,!0),...ys(-1.81,.4,!1)],a=[...e.glass,...Ft(h=>({geo:$(.17,.17,.05,14),color:pe,pos:[h*.58,.72,-1.7],rot:[Math.PI/2,0,0]})),...Ft(h=>({geo:$(.14,.14,.06,14),color:po,pos:[h*.58,.72,-1.72],rot:[Math.PI/2,0,0]})),...Ft(h=>({geo:Ut(.16,.34,.05,.03),color:_i,pos:[h*.74,.76,1.72]})),...Ft(h=>({geo:Ut(.1,.06,.05,.015),color:Ms,pos:[h*.82,.55,-1.72]}))],c={side(h){yn(h,.22,.62),h.accentLine(zi(-1.45,.9,1.5,.9),.028);for(let u=0;u<6;u++){const f=u/6*Math.PI*2;h.decal(hs(-.16+Math.cos(f)*.07,.68+Math.sin(f)*.07,.055),Ln)}h.decal(hs(-.16,.68,.045),Xh),h.side>0&&h.shadeLine(hs(1.28,.8,.07),Vo,.012)},top(h){for(const u of[-.62,.62])h.shadeLine(zi(u,-1.62,u,-.95),Vo,.014)},front(h){yn(h,.25,.62),h.text("GR",0,.88,.1,Ma)},back(h){yn(h,.25,.62),h.text("PEBBLE",0,.9,.08,Ma)}},l=[{at:1,...co(.8,1.04,-.66,1)},{at:3,tiltAt:2,tilt:[0,0,-.2],pivot:[-1.78/2,.38,1.66],detail:[{geo:Ut(1.78+.08,.22,.28,.08),color:zc,pos:[0,.38,1.66]}]}];return{paint:s,detail:r,shiny:a,accent:o,livery:c,loose:l,smoke:[0,.98,-1.25],wheels:Vh(1.78,-1.05,1.05,{r:.36,wf:.3,wr:.3,style:"car",spokes:4,rim:xs})}}function WS(){const t=Ee([[-2.12,.3],[2.12,.3],[2.2,.42],[2.18,.98],[1.95,1.04],[-.4,1],[-2.1,.96],[-2.22,.8],[-2.22,.42]],2,.06),e=Hh({pts:[[-.45,.98],[1.75,.98],[.95,1.5],[.1,1.52]],w:1.7,top:.8,windows:[[[-.2,1.06],[.55,1.06],[.55,1.44],[.15,1.44]],[[.66,1.06],[1.36,1.06],[.9,1.42],[.66,1.44]]],roof:[.1,.95,1.52]}),i=[{geo:t,color:ue},...e.paint,{geo:Ee([[-1.75,1],[-.9,1.02],[-.95,1.16],[-1.55,1.13]],.6,.03),color:Gn},...[-1.4,1.35].flatMap(f=>Ft(d=>({geo:_s(f,.42,.5,.58,-.15,Math.PI+.15,.08,.02),color:ue,pos:[d*(2/2+.02),0,0]})))],s=co(.86,1.1,-.28,-1);i.push(...s.paint);const o=(f,d,g,_=0)=>Ft(p=>({geo:y(.24,.02,d-f),color:oh,pos:[p*.24,g,(f+d)/2],rot:[_,0,0]})),r=[...o(-2.15,-1.78,1.028,-.024),...o(-.88,-.42,1.059,-.024),...o(.12,.95,1.555),...o(1.75,1.95,1.104,-.017)],a=[...s.detail,...Gh(2,[-1.4,1.35],.42),{geo:Ut(.46,.1,.04,.015),color:Le,pos:[0,1.1,-.897],rot:[-.34,0,0]},{geo:Ut(2-.1,.34,.08,.04),color:Le,pos:[0,.72,-2.27]},...[.6,.72,.84].map(f=>({geo:Ut(.6,.02,.03,.006),color:pe,pos:[0,f,-2.31]})),...Ft(f=>({geo:Ut(.06,.12,2,.025),color:pe,pos:[f*(2/2+.03),.38,0]})),...Wh(2,[-.42,.62],.42,.42,.98,.88),...ys(2.27,.65,!0),{geo:Ut(2-.3,.12,.08,.03),color:Le,pos:[0,.32,2.24]},{geo:Ut(2-.24,.22,.04,.015),color:Le,pos:[0,.84,2.255]}],c=[...e.glass,{geo:Ut(2+.08,.18,.16,.06),color:pe,pos:[0,.46,-2.28]},...[.52,.78].flatMap(f=>Ft(d=>({geo:$(.1,.1,.06,12),color:po,pos:[d*f,.73,-2.3],rot:[Math.PI/2,0,0]}))),...Ft(f=>({geo:Ut(.6,.14,.04,.02),color:_i,pos:[f*.48,.84,2.275]})),...Ft(f=>Vt([f*.55,.28,2.1],[f*.55,.28,2.33],.06,pe,10))],l=Vh(2,-1.4,1.35,{r:.42,wf:.32,wr:.4,style:"car",spokes:5,rim:pe}),h={side(f){yn(f,.22,.6),cp(f,.1,.68,.25,"07"),f.side>0&&f.shadeLine(hs(1.62,.84,.08),Vo,.014);for(const d of[.7,.78])f.shade(Jn(-1,d,-.72,d+.035),"#6a6a6a")},top(f){f.shadeLine(Jn(-.86,-2.14,.86,-.48),Vo,.016),f.shadeLine(Jn(-.82,1.76,.82,2.14),Vo,.016)},front(f){yn(f,.25,.6)},back(f){yn(f,.25,.6),f.text("BRUTE",0,.99,.09,Ma)}},u=[{at:1,...co(.86,1.1,-.28,1)},{at:2,paint:[{geo:Ut(2-.1,.1,.22,.03),color:ue,pos:[0,1.1,2.08]}]},{at:3,tiltAt:2,tilt:[0,0,.18],pivot:[-2/2,.46,2.28],shiny:[{geo:Ut(2+.08,.18,.16,.06),color:pe,pos:[0,.46,2.28]}]}];return{paint:i,detail:a,shiny:c,accent:r,wheels:l,livery:h,loose:u,smoke:[0,1.18,-1.3]}}function XS(){const t=Ee([[-2,.28],[2.02,.28],[2.08,.42],[2.06,.86],[1.9,.92],[-.55,.86],[-1.95,.62],[-2.08,.45]],1.9,.06),e=Hh({pts:[[-.6,.85],[1.75,.9],[.75,1.3],[-.05,1.32]],w:1.62,top:.78,windows:[[[-.38,.93],[.95,.95],[.62,1.24],[0,1.26]]],roof:[-.05,.75,1.32]}),i=h=>[h*.6,.79,-1.62],s=[{geo:t,color:ue},...e.paint,...Ft(h=>({geo:Ut(.46,.22,.24,.03),color:ue,pos:i(h)}))],o=co(.8,.98,-.32,-1);s.push(...o.paint);const r=[...o.detail,...Gh(1.9,[-1.3,1.3],.4),{geo:Ut(1.9+.04,.05,.3,.02),color:Wt,pos:[0,.27,-1.94]},{geo:Ut(1.9-.3,.12,.06,.03),color:Le,pos:[0,.42,-2.13]},...Ft(h=>({geo:Ut(.04,.22,.4,.02),color:Le,pos:[h*(1.9/2+.005),.6,.85]})),...Ft(h=>({geo:Ut(.04,.08,2,.02),color:Wt,pos:[h*(1.9/2+.02),.32,0]})),...[-.25,0,.25].map(h=>({geo:Ut(.06,.015,.5,.006),color:Le,pos:[h,.795,-1.3],rot:[-.17,0,0]})),{geo:Ut(1.9-.2,.16,.22,.03),color:Wt,pos:[0,.32,2]},...Wh(1.9,[-.5,.95],.75,.4,.86,.8),{geo:Ut(1.9-.12,.26,.04,.012),color:Le,pos:[0,.7,2.14]},...ys(2.17,.65,!0),...Ft(h=>({geo:Ut(.42,.15,.02,.008),color:Le,pos:[i(h)[0],.82,-1.745]}))],a=[...e.glass,...[-1,1].flatMap(h=>[-.095,.095].map(u=>({geo:y(.18,.105,.02),color:po,pos:[i(h)[0]+u,.82,-1.755]}))),...Ft(h=>({geo:Ut(.36,.04,.16,.015),color:Ms,pos:[h*.6,.6,-1.99],rot:[.62,h*.22,0]})),...[-1,1].flatMap(h=>[{geo:y(.13,.15,.02),color:Ms,pos:[h*.79,.73,2.165]},{geo:y(.17,.15,.02),color:_i,pos:[h*.635,.73,2.165]},{geo:y(.13,.15,.02),color:_i,pos:[h*.48,.73,2.165]},{geo:y(.07,.15,.02),color:CS,pos:[h*.375,.73,2.165]}]),...Ft(h=>Vt([h*.16,.34,2],[h*.16,.34,2.16],.055,pe,10))],c={side(h){yn(h,.2,.55),h.accent(tr([[-1.78,.47],[1.98,.73],[1.98,.81],[-1.78,.55]])),h.decalLine(zi(-1.72,.6,1.98,.86),Ln,.016),h.text("24",-.1,.45,.24,Ln,Qn)},top(h){for(const u of[-.17,.17])h.accent(Jn(u-.045,-2.15,u+.045,2.15))},front(h){yn(h,.2,.5);for(const u of[-.17,.17])h.accent(Jn(u-.045,.5,u+.045,.75))},back(h){yn(h,.2,.55);for(const u of[-.17,.17])h.accent(Jn(u-.045,.86,u+.045,.95))}},l=[{at:2,tiltAt:1,tilt:[.22,0,-.14],pivot:[.55,.9,1.87],paint:[{geo:Ut(1.9-.06,.05,.36,.02),color:ue,pos:[0,1.22,1.85]},...Ft(h=>({geo:Ut(.04,.14,.4,.015),color:ue,pos:[h*(1.9/2-.04),1.2,1.85]}))],detail:Ft(h=>Vt([h*.55,.9,1.88],[h*.55,1.2,1.86],.035,Wt))},{at:2,...co(.8,.98,-.32,1)}];return{paint:s,detail:r,shiny:a,livery:c,loose:l,smoke:[0,.92,-1.4],wheels:Vh(1.9,-1.3,1.3,{r:.4,wf:.32,wr:.36,style:"car",spokes:10,rim:"#8d939e"})}}const qh=n=>n==="zippy"||n==="viper"||n==="bolt"?"bike":"car",lp={zippy:zS,viper:HS,bolt:GS,pebble:VS,brute:WS,arrow:XS},Jf=new Map,Qf=new Map,td=new Map;function mo(n){let t=Jf.get(n);return t||(t=lp[n](),Jf.set(n,t)),t}function hp(n){const t=us(`${n}:paint`,()=>Ie(mo(n).paint));t.computeBoundingBox();const e=t.boundingBox.clone().expandByScalar(.02),i={min:e.min,max:e.max};return t.getAttribute("uv")||(xa(t,i),oa(t,i,qh(n)==="bike")),{geo:t,bounds:i}}function rh(n){return n.color===po?{...n,glow:"#fff1c4"}:n.color===sp?{...n,glow:"#e4f2ff"}:n.color===_i?{...n,glow:_i}:n}function up(n){var c;const t=mo(n),{geo:e,bounds:i}=hp(n),s=qh(n)==="bike",o=us(`${n}:detail`,()=>{const l=Ie(t.detail.map(rh));return oa(l,i,s),l}),r=us(`${n}:shiny`,()=>{const l=Ie(t.shiny.map(rh));return xa(l,i),oa(l,i,s),l}),a=(c=t.accent)!=null&&c.length?us(`${n}:accent`,()=>{const l=Ie(t.accent);return xa(l,i),oa(l,i,s),l}):null;return{paint:e,detail:o,shiny:r,accent:a,bounds:i}}const ed=new Map;function fp(n,t){const e=`${n}:${t}`;let i=ed.get(e);if(!i){const s=mo(n).loose[t],{bounds:o}=hp(n),r={},a=new Dn;for(const l of["paint","detail","shiny"]){const h=s[l];if(!(h!=null&&h.length))continue;const u=Ie(h.map(rh));l!=="detail"&&xa(u,o),u.computeBoundingBox(),a.union(u.boundingBox),r[l]=u}const c=s.pivot?new P(...s.pivot):a.getCenter(new P);for(const l of Object.values(r))l.translate(-c.x,-c.y,-c.z);i={pivot:c,geos:r},ed.set(e,i)}return i}function us(n,t){let e=Qf.get(n);return e||(e=t(),Qf.set(n,e)),e}function dp(n,t,e){const i=mo(n),s=new Ke,o=new Ke;s.add(o);const r=Tf(t),a=up(n);let c=td.get(n);c||(c=TS(i.livery,a.bounds),td.set(n,c));const l=new pt(e);AS(r,c,l);const h=b0(Ef.clone()),u=Bc(r,"paint"),f=Bc(h,"shiny"),d=[new Xt(a.paint,r),new Xt(a.detail,rs),new Xt(a.shiny,h)],g=a.accent?Tf(e):null,_=g?Bc(g,"shiny"):null;a.accent&&d.push(new Xt(a.accent,g)),o.add(...d);const p={paint:r,detail:rs,shiny:h},m=i.loose.map((z,v)=>{const{pivot:M,geos:U}=fp(n,v),k=new Ke;k.position.copy(M);for(const O of["paint","detail","shiny"]){const X=U[O];X&&k.add(new Xt(X,p[O]))}return o.add(k),{spec:z,group:k,off:!1}});let w=0;const x=[0,0],b=new P(...i.smoke),I=[];for(const z of i.wheels){const{pos:v,...M}=z,U=new Xt(us(`wheel:${JSON.stringify(M)}`,()=>op(M)),rs);U.position.set(...v),o.add(U),I.push(U)}let C=null;const T=[];let L=null;if(qh(n)==="bike"&&s.scale.setScalar(1.18),i.rider){const z=i.rider;C=new Ke,L=tM(e),T.push(new Xt(aa(n,"suit"),L),new Xt(aa(n,"gear"),rs),new Xt(aa(n,"visor"),Ef)),C.add(...T),C.position.set(...z.hip),o.add(C)}return{group:s,body:o,wheels:I,wheelRadius:i.wheels[0].r,rider:C,paint:r,hull:d,get damage(){return w},setColor(z,v){r.color.set(z),l.set(v),g==null||g.color.set(v),L==null||L.color.set(v)},setDamage(z,v=!1){w=Math.max(0,Math.min(2,z));const M=[];for(const U of m){const k=w>=U.spec.at;k&&!U.off&&M.push(U.group),U.off=k,U.group.visible=!U.off;const O=U.spec.tilt&&w>=(U.spec.tiltAt??99)?U.spec.tilt:[0,0,0];U.group.rotation.set(O[0],O[1],O[2])}if(v){x[0]=w===1?1:0,x[1]=w===2?1:0,u.value=f.value=Vf[w],_&&(_.value=u.value);for(const U of d)U.morphTargetInfluences.splice(0,2,x[0],x[1])}return M},wreck(){const z=[];for(const v of m)v.off||(v.off=!0,v.group.visible=!1,z.push(v.group));return z},update(z){const v=1-Math.exp(-14*z);x[0]+=((w===1?1:0)-x[0])*v,x[1]+=((w===2?1:0)-x[1])*v;for(const U of d)U.morphTargetInfluences[0]=x[0],U.morphTargetInfluences[1]=x[1];const M=Vf[w];u.value+=(M-u.value)*v,f.value=u.value,_&&(_.value=u.value)},setDuck(z){for(const v of T)v.morphTargetInfluences[0]=z},smokeAt(z){return o.localToWorld(z.copy(b))},dispose(){r.dispose(),h.dispose(),g==null||g.dispose(),L==null||L.dispose()}}}function qS(){for(const n of Object.keys(lp)){const t=mo(n);up(n),t.loose.forEach((e,i)=>fp(n,i));for(const{pos:e,...i}of t.wheels)us(`wheel:${JSON.stringify(i)}`,()=>op(i));if(t.rider)for(const e of["suit","gear","visor"])aa(n,e)}}const YS=16,nd=new P(0,1,0),Gc=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],id=new ti,sd=new P,Vc=new Dn,$S=new Dn;class od{constructor(t,e,i,s=[t],o=6){this.obj=t,this.vel=e,this.spin=i,this.hull=s,this.restAxes=o,this.t=0,this.settled=!1,this.target=null}step(t,e){if(t<=0)return;this.t+=t;const i=this.obj;if(i.position.z+=e*t,this.settled)return;if(this.target){i.quaternion.slerp(this.target,1-Math.exp(-9*t)),i.position.y-=this.bottom(),i.quaternion.angleTo(this.target)<.01&&(i.quaternion.copy(this.target),i.position.y-=this.bottom(),this.settled=!0);return}this.vel.y-=YS*t,i.position.addScaledVector(this.vel,t);const s=this.spin.length();s>1e-4&&(id.setFromAxisAngle(sd.copy(this.spin).divideScalar(s),s*t),i.quaternion.premultiply(id));const o=this.bottom();if(o<0){i.position.y-=o;const r=this.vel.y<-1.2;this.vel.y=r?-this.vel.y*.32:Math.max(0,this.vel.y);const a=Math.exp(-5*t);this.vel.x*=a,this.vel.z*=a,this.spin.multiplyScalar(r?.55:Math.exp(-5*t)),!r&&this.vel.lengthSq()<.6&&this.spin.lengthSq()<6&&this.beginSettle()}}beginSettle(){const t=this.obj;let e=Gc[2],i=-2;for(let o=0;o<this.restAxes;o++){const r=sd.copy(Gc[o]).applyQuaternion(t.quaternion).dot(nd);r>i&&(i=r,e=Gc[o])}const s=e.clone().applyQuaternion(t.quaternion);this.target=new ti().setFromUnitVectors(s,nd).multiply(t.quaternion),this.vel.set(0,0,0),this.spin.set(0,0,0)}bottom(){this.obj.updateMatrixWorld(!0),Vc.makeEmpty();for(const t of this.hull)Vc.union($S.setFromObject(t));return Vc.min.y}}const rd=140,Co=new we,zn=Xd.lerp,He=new P,KS=new ae().makeScale(0,0,0);function pp(n,t){const e=t??(n<.6?"day":n<.8?"sunset":"night");return e==="sunset"?18.15:e==="night"?23:12}function mp(n){const t=new Lx("#fff8e8","#6a8f5a",1.6),e=new M0("#fff2d6",2);return e.position.set(-6,12,5),n.add(t,e),{hemi:t,sun:e}}class jS{constructor(){this.scene=new h0,this.chase=new Yx,this.particles=new Ox,this.smoke=new kx,this.flying=[],this.worldSpeed=0,this.crashed=!1,this.wreckBody=null,this.smokeT=0,this.sparkT=0,this.vehicle=null,this.vehicleId=null,this.vehicleLen=1.8,this.obstacleMeshes=new Map,this.meshPool=[],this.blinkers=new Map,this.blinkerPool=[],this.blinkerMat=new fn({color:"#ffb300"}),this.specials=new Map,this.specialPool={golden:[],wrench:[],magnet:[]},this.obstacleGlow={value:0},this.obstacleMat=w0(this.obstacleGlow),this.headlight=new Dx("#fff1d0",0,60,.5,.6,1.1),this.pool=sM(),this.headlightMode="spot",this.seen=new Set,this.time=0,this.titleBiome=Math.floor(Math.random()*wn.length),this.titleHour=pp(Math.random()),this.wheelSpin=0,this.duck=0,this.alpha=1,this.idleCam=new sn(50,9/16,.5,300),this.reducedMotion=!1,this.world=new jy(this.scene,mp(this.scene)),this.shadow=Bx(1.4,2.6),this.scene.add(this.shadow),this.marker=zx(),this.scene.add(this.marker),this.scene.add(this.particles.points),this.scene.add(this.smoke.mesh),this.goldMat=_S(new Xn({vertexColors:!0,flatShading:!0,emissive:new pt("#ffb000"),emissiveIntensity:.45})),this.gears=new wh(gS(),this.goldMat,rd),this.gears.frustumCulled=!1,this.gears.count=0,this.scene.add(this.gears),this.specialGeo={golden:vS(),wrench:xS(),magnet:MS()};const t=new La(B.magnetRadius*.5,.05,6,32);this.magnetRing=new Xt(t,new fn({color:"#5aa9ff",transparent:!0,opacity:.5})),this.magnetRing.rotation.x=-Math.PI/2,this.magnetRing.visible=!1,this.scene.add(this.magnetRing),this.headlight.visible=!1,this.pool.visible=!1,this.scene.add(this.headlight,this.headlight.target,this.pool)}compileShaders(t){t.compile(this.scene,this.chase.camera),this.headlight.visible=!0,t.compile(this.scene,this.chase.camera),this.headlight.visible=!1}updateNight(t,e){const i=this.world.day.night,s=e&&i>.01;this.headlight.visible=s&&this.headlightMode==="spot",this.headlight.intensity=140*i,this.headlight.position.set(t,1.4,-.2),this.headlight.target.position.set(t,0,-24),this.pool.visible=s&&this.headlightMode==="pool",this.pool.position.set(t,.03,-14),this.pool.material.opacity=.75*i,this.obstacleGlow.value=.22*i,this.goldMat.emissiveIntensity=.45+.35*i}prepareWorld(){this.world.prepare([wn[this.titleBiome].id,"suburb"])}setVehicle(t,e,i){if(this.vehicleId!==t){this.vehicle&&(this.scene.remove(this.vehicle.group),this.vehicle.dispose()),this.vehicle=dp(t,e,i),this.vehicleId=t;const s=Ia(t);this.vehicleLen=s.cls==="bike"?B.bikeHitboxLength:B.carHitboxLength,this.shadow.scale.set(s.cls==="bike"?.9:1.6,1,s.cls==="bike"?1:1.75),this.scene.add(this.vehicle.group)}this.vehicle.setColor(e,i)}resize(t){this.chase.resize(t),this.idleCam.aspect=t,this.idleCam.updateProjectionMatrix()}beginRun(t){this.particles.clear(),this.restoreVehicle(),this.smoke.clear();for(const e of this.obstacleMeshes.values())this.releaseMesh(e);this.obstacleMeshes.clear();for(const[e,i]of this.specials)this.releaseSpecial(e,i);this.specials.clear();for(const e of this.blinkers.values())this.releaseBlinker(e);this.blinkers.clear(),this.chase.snap(t.vehicle.x),this.chase.reducedMotion=this.reducedMotion,this.vehicle&&(this.vehicle.group.rotation.set(0,0,0),this.vehicle.group.visible=!0)}renderRun(t,e,i,s,o=1){var l;this.time+=i,this.alpha=o;const r=zn(e.prevDistance,e.distance,o);if(this.syncObstacles(e,r),this.syncPickups(e,r,i),this.syncVehicle(e,i),s>0){const h=r-s;this.marker.visible=h>-200&&h<30,this.marker.position.z=h}else this.marker.visible=!1;this.crashed=e.crashed,this.worldSpeed=e.crashed?0:e.speed,this.particles.update(i,this.worldSpeed),this.emitDamage(e,i),this.smoke.update(i,this.worldSpeed*.35),this.updateDebris(i);const a=(e.speed-B.startSpeed)/(B.maxSpeed-B.startSpeed),c=e.vehicle;this.chase.update(i,zn(c.prevX,c.x,o),zn(c.prevY,c.y,o),Math.max(0,a),e.crashed?0:1-e.slowFactor),this.world.hourOverride=null,this.world.update(r,e.biomeOffset,i,this.chase.camera),this.updateNight(((l=this.vehicle)==null?void 0:l.group.position.x)??0,!e.crashed),t.render(this.scene,this.chase.camera)}syncVehicle(t,e){const i=this.vehicle;if(!i)return;const s=t.vehicle,o=i.group,r=t.model.cls;i.update(e);const a=zn(s.prevX,s.x,this.alpha),c=zn(s.prevY,s.y,this.alpha);if(this.wreckBody||o.position.set(a,c,this.vehicleLen/2),t.crashed){this.wreckBody?this.wreckBody.step(e,0):this.startWreck(i,t.model.cls==="bike",t.crashCause==="headOn"),o.visible=!0,this.shadow.visible=!1;return}this.shadow.visible=!0,this.shadow.position.set(a,.02,this.vehicleLen/2);const l=1/(1+c*.35);this.shadow.scale.x=(r==="bike"?.9:1.6)*l;const h=(r==="bike"?25:12)*(Math.PI/180),u=s.changingLane?Math.sin(s.laneT*Math.PI):0;let f=0;s.edgeBumpT>=0&&(f=Math.sin(s.edgeBumpT*40)*.12*(1-s.edgeBumpT/.3)*s.edgeBumpDir),o.position.x+=f;const d=i.body;d.rotation.z=-s.laneDir*h*u,d.rotation.y=-s.laneDir*.18*u;const g=s.jumpProgress;d.rotation.x=g>=0?.12*(1-2*g):0,t.sinceHit<.4&&(d.rotation.x-=.1*Math.sin(Math.PI*t.sinceHit/.4)),t.smashT>0&&(d.rotation.x-=.05*Math.sin(Math.PI*t.smashT/B.smashSlowTime));let _=1;s.jumpStartT>=0?_=s.jumpStartT<.06?.85:1.08:s.airborne?_=1.06:s.landT>=0&&(_=.85+.15*Math.min(1,s.landT/.15)),d.scale.set(1/Math.sqrt(_),_,1),i.rider&&(this.duck+=((s.ducking?1:0)-this.duck)*(1-Math.exp(-22*e)),i.setDuck(this.duck)),this.wheelSpin-=t.speed*e/i.wheelRadius;for(const p of i.wheels)p.rotation.x=this.wheelSpin;o.visible=t.invulnerable>0?Math.floor(t.invulnerable*15)%2===0:!0}acquireMesh(t){const e=this.meshPool.pop()??new Xt(t,this.obstacleMat);return e.geometry=t,e.visible=!0,e.rotation.set(0,0,0),e.parent||this.scene.add(e),e}releaseMesh(t){t.visible=!1,this.meshPool.push(t)}acquireBlinker(){let t=this.blinkerPool.pop();if(!t){t=new Ke;for(const e of[-1,1]){const i=new Xt(new Es(.3,.28,.12),this.blinkerMat);i.name=e<0?"L":"R",i.position.set(e*.95,.86,.04),t.add(i)}this.scene.add(t)}return t.visible=!0,t}releaseBlinker(t){t.visible=!1,this.blinkerPool.push(t)}syncObstacles(t,e){const i=t.obstacles;if(this.obstacleMeshes.size>i.length){const o=new Set(i.map(r=>r.id));for(const[r,a]of this.obstacleMeshes)if(!o.has(r)){this.releaseMesh(a),this.obstacleMeshes.delete(r);const c=this.blinkers.get(r);c&&(this.releaseBlinker(c),this.blinkers.delete(r))}}const s=this.alpha;for(const o of i){const r=e-zn(o.prevS,o.s,s),a=r>-205&&r<40;let c=this.obstacleMeshes.get(o.id);if(!a){c&&(c.visible=!1);continue}c||(c=this.acquireMesh(J0(o.def.kind,o.id,gf(o.sMeet,t.biomeOffset).main)),this.obstacleMeshes.set(o.id,c)),c.visible=!0,this.placeObstacle(c,o,zn(o.prevX,o.x,s),r,t)}}placeObstacle(t,e,i,s,o){t.position.set(i,0,s);const r=e.def.length/2;if(t.position.x+=r*Math.sin(e.yaw),t.position.z+=r*(Math.cos(e.yaw)-1),t.rotation.set(0,e.yaw,0),e.knockT>=0){const a=Math.min(e.knockT+this.alpha*B.fixedStep,1.2);t.position.x+=e.knockDir*a*7,t.position.y=Math.max(0,5*a-9*a*a),t.position.z-=a*6,t.rotation.z=-e.knockDir*a*6,t.rotation.x=a*4}if(e.def.kind==="switcher"){const a=Math.sign(e.lane-e.fromLane),c=Math.abs(e.x-e.prevX)>1e-4;t.rotation.y=c?-a*.12:0;let l=this.blinkers.get(e.id);l||(l=this.acquireBlinker(),this.blinkers.set(e.id,l)),l.position.copy(t.position),l.rotation.copy(t.rotation);const h=e.blinker&&Math.floor(o.time*5)%2===0;for(const u of l.children)u.visible=h&&u.name===(a<0?"L":"R")}}acquireSpecial(t){const i=this.specialPool[t].pop()??new Xt(this.specialGeo[t],t==="golden"?this.goldMat:rs);return i.visible=!0,i.parent||this.scene.add(i),i}releaseSpecial(t,e){e.visible=!1;const i=e.userData.kind;this.specialPool[i].push(e),this.specials.delete(t)}syncPickups(t,e,i){const s=this.alpha;let o=0;const r=this.time*3,a=this.seen;a.clear();for(const c of t.pickups){const l=e-zn(c.prevS,c.s,s);if(l<-200||l>20)continue;const h=c.taken,u=zn(c.prevX,c.x,s),f=zn(c.prevY,c.y,s);if(c.kind==="gear"){if(h||o>=rd)continue;Co.position.set(u,f+Math.sin(this.time*4+c.id)*.05,l),Co.rotation.set(0,r+c.id*.3,0),Co.scale.setScalar(1),Co.updateMatrix(),this.gears.setMatrixAt(o++,Co.matrix);continue}if(h)continue;a.add(c.id);let d=this.specials.get(c.id);d||(d=this.acquireSpecial(c.kind),d.userData.kind=c.kind,this.specials.set(c.id,d)),this.placeSpecial(d,c,u,f,l)}for(let c=o;c<this.gears.count;c++)this.gears.setMatrixAt(c,KS);this.gears.count=o,this.gears.instanceMatrix.needsUpdate=!0;for(const[c,l]of this.specials)a.has(c)||this.releaseSpecial(c,l);if(this.magnetRing.visible=t.magnetT>0&&!t.crashed,this.magnetRing.visible){this.magnetRing.position.set(zn(t.vehicle.prevX,t.vehicle.x,s),.3,this.vehicleLen/2);const c=1+Math.sin(this.time*8)*.05;this.magnetRing.scale.setScalar(c),this.magnetRing.material.opacity=.25+.25*Math.min(1,t.magnetT/2)}}placeSpecial(t,e,i,s,o){t.position.set(i,s+Math.sin(this.time*3+e.id)*.1,o),t.rotation.set(0,e.kind==="golden"?this.time*4:Math.sin(this.time*2)*.6,0)}setDamage(t){const e=this.vehicle;if(!e)return;const i=t>e.damage;for(const s of e.setDamage(t))this.spawnDebris(s);if(i){e.group.updateMatrixWorld(!0),e.smokeAt(He);for(let s=0;s<6;s++)this.smoke.emit(He.x,He.y,He.z,"#f0f0f0",.22,.5,2.5)}}wreck(){if(this.vehicle)for(const t of this.vehicle.wreck())this.spawnDebris(t)}spawnDebris(t,e,i){t.updateWorldMatrix(!0,!1);const s=t.clone();t.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.visible=!0,this.scene.add(s);const o=Math.sign(s.position.x)||(Math.random()<.5?-1:1);this.flying.push(new od(s,e??new P(o*(1.5+Math.random()*2.5),3+Math.random()*3,1+Math.random()*2),i??new P((Math.random()-.5)*14,(Math.random()-.5)*10,(Math.random()-.5)*14))),t.visible=!1}updateDebris(t){for(let e=this.flying.length-1;e>=0;e--){const i=this.flying[e];i.step(t,this.worldSpeed),!this.crashed&&(i.t>4||i.obj.position.z>30)&&(this.scene.remove(i.obj),this.flying.splice(e,1))}}clearDebris(){for(const t of this.flying)this.scene.remove(t.obj);this.flying.length=0}startWreck(t,e,i){const s=t.group,o=Math.random()<.5?-1:1,r=i?1:-1;this.wreckBody=new od(s,new P(o*(.8+Math.random()),e?4.5:5.5,i?2+Math.random()*1.5:-1.5-Math.random()),new P(-r*(e?3+Math.random()*2:4+Math.random()*3),(Math.random()-.5)*3,o*(e?5+Math.random()*3:3+Math.random()*4)),t.hull,4);const a=e?[0]:o<0?[0,3]:[1,2];for(const c of a){const l=t.wheels[c];if(!l)continue;const h=Math.sign(l.position.x)||o;this.spawnDebris(l,new P(h*(2.5+Math.random()*2),3.5+Math.random()*2,r*(1+Math.random()*2)),new P(-r*(18+Math.random()*6),(Math.random()-.5)*4,(Math.random()-.5)*4))}t.rider&&this.spawnDebris(t.rider,new P(-o*2.5,6,r*1.5),new P(-r*6,(Math.random()-.5)*3,-o*3)),t.smokeAt(He);for(let c=0;c<10;c++)this.smoke.emit(He.x,He.y,He.z,c%3?"#5a5a62":"#f0f0f0",.3,.8,3)}restoreVehicle(){this.wreckBody=null,this.clearDebris();const t=this.vehicle;if(t){t.group.rotation.set(0,0,0);for(const e of t.wheels)e.visible=!0;t.rider&&(t.rider.visible=!0),t.setDamage(0,!0)}}emitDamage(t,e){const i=this.vehicle;if(!i)return;const s=t.crashed?3:i.damage;if(!(s===0||e<=0)&&(this.smokeT+=e*[0,7,15,16][s],this.sparkT+=s===2?e*7:0,!(this.smokeT<1&&this.sparkT<1))){for(i.group.updateMatrixWorld(!0),i.smokeAt(He);this.smokeT>=1;this.smokeT--){const o=s>=2,r=o?Math.random()<.3?"#3c3c43":"#77777f":"#e4e4e4";s===3?this.smoke.emit(He.x+(Math.random()-.5)*.4,He.y,He.z+(Math.random()-.5)*.4,r,.36,1.6,1.8):this.smoke.emit(He.x+(Math.random()-.5)*.15,He.y,He.z,r,o?.24:.17,o?.7:.55)}for(;this.sparkT>=1;this.sparkT--)this.particles.emit(2,He.x,He.y,He.z,Math.random()<.5?"#ffd23f":"#ff8a1c",1.6,3,.35,!0,12)}}sparkAtVehicle(t,e=10,i=1){if(!this.vehicle)return;const s=this.vehicle.group.position;this.particles.emit(e,s.x,s.y+i,s.z-this.vehicleLen*.4,t,2.5,4,.4,!1,6)}dust(){if(!this.vehicle)return;const t=this.vehicle.group.position;this.particles.emit(14,t.x,.15,t.z+this.vehicleLen*.3,"#d9cbb0",2,1.5,.5,!0,2)}debris(){if(!this.vehicle)return;const t=this.vehicle.group.position,e="#"+this.vehicle.paint.color.getHexString();this.particles.emit(24,t.x,t.y+.8,t.z,e,5,8,1.2,!0,14),this.particles.emit(18,t.x,t.y+.8,t.z,"#2a2a30",5,7,1,!0,14),this.particles.emit(10,t.x,t.y+1,t.z,"#cfe8ff",4,6,.9,!0,14)}confetti(){const t=["#E63946","#FFD23F","#8AC926","#1982C4","#ffffff"];for(const e of t)this.particles.emit(14,(Math.random()-.5)*6,3,-6,e,5,6,1.4,!0,5)}smashBits(t,e,i){const s=cS[gf(e.distance,e.biomeOffset).main][i]??"#ff7b1c";this.particles.emit(12,t,.6,-.5,s,3,5,.6,!0,12)}renderIdle(t,e,i){this.time+=e,this.marker.visible=!1,this.magnetRing.visible=!1,this.gears.count=0;for(const r of this.obstacleMeshes.values())r.visible=!1;for(const[r,a]of this.specials)this.releaseSpecial(r,a);for(const r of this.blinkers.values())r.visible=!1;if((this.wreckBody||this.flying.length)&&this.restoreVehicle(),this.vehicle){this.vehicle.damage&&this.vehicle.setDamage(0,!0),this.vehicle.update(e);const r=this.vehicle.group;r.visible=!0,r.position.set(0,0,this.vehicleLen/2),r.rotation.set(0,0,0),this.vehicle.body.rotation.set(0,0,Math.sin(this.time*1.3)*.02),this.vehicle.body.scale.set(1,1+Math.sin(this.time*18)*.004,1),this.duck=0,this.vehicle.setDuck(0),this.wheelSpin-=8*e/this.vehicle.wheelRadius;for(const a of this.vehicle.wheels)a.rotation.x=this.wheelSpin;this.shadow.visible=!0,this.shadow.position.set(0,.02,this.vehicleLen/2)}this.particles.update(e,8),this.smoke.update(e,8);const s=this.time*.15,o=this.idleCam;o.position.set(Math.sin(s)*2.5+4.2,2.4,-5.5-Math.cos(s)*1.5),o.lookAt(0,.9,.6),this.world.hourOverride=this.titleHour,this.world.update(i,(this.titleBiome+.5)*B.biomeLeg-i,e,o),this.updateNight(0,!0),t.render(this.scene,o)}}class ZS{constructor(){this.scene=new h0,this.camera=new sn(36,9/16,.1,100),this.vehicle=null,this.vehicleId=null,this.turntable=new Ke,this.angle=.6,this.spinBoost=0,this.camDist=9.5,this.dragVelocity=0,this.scene.background=new pt("#203047"),mp(this.scene);const t=new M0("#9ed8f5",1.2);t.position.set(4,3,-6),this.scene.add(t);const e=new Xt(new Gi(3.4,3.6,.3,32),new Xn({color:"#3a4a63"}));e.position.y=-.15;const i=new Xt(new La(3.45,.06,6,48),new fn({color:"#ffc93c"}));i.rotation.x=Math.PI/2,i.position.y=.01,this.turntable.add(e,i),this.scene.add(this.turntable);const s=new Xt(new as(30,32),new Xn({color:"#1a2638"}));s.rotation.x=-Math.PI/2,s.position.y=-.3,this.scene.add(s)}setVehicle(t,e,i){this.vehicleId!==t&&(this.vehicle&&(this.turntable.remove(this.vehicle.group),this.vehicle.dispose()),this.vehicle=dp(t,e,i),this.vehicleId=t,this.turntable.add(this.vehicle.group),this.spinBoost=2.5,this.camDist=Ia(t).cls==="car"?13.5:9.5),this.vehicle.setColor(e,i)}resize(t){this.camera.aspect=t,this.camera.fov=Math.min(75,2*Math.atan(Math.tan(30*Math.PI/360)/t)*180/Math.PI),this.camera.setViewOffset(1e3*t,1e3,0,170,1e3*t,1e3),this.camera.updateProjectionMatrix()}render(t,e){this.spinBoost*=Math.exp(-e*3),this.dragVelocity*=Math.exp(-e*4),this.angle+=e*(.5+this.spinBoost)+this.dragVelocity*e,this.turntable.rotation.y=this.angle,this.camera.position.set(0,this.camDist*.34,this.camDist),this.camera.lookAt(0,.7,0);const i=ls.uNight.value;ls.uNight.value=0,t.render(this.scene,this.camera),ls.uNight.value=i}}const ah=[{id:1,name:{en:"Racing Red",pl:"Wyścigowa czerwień"},hex:"#E63946"},{id:2,name:{en:"Sunburst Orange",pl:"Słoneczny pomarańcz"},hex:"#F4A261"},{id:3,name:{en:"Taxi Yellow",pl:"Żółć taksówki"},hex:"#FFD23F"},{id:4,name:{en:"Lime",pl:"Limonka"},hex:"#8AC926"},{id:5,name:{en:"Teal",pl:"Morski"},hex:"#2A9D8F"},{id:6,name:{en:"Electric Blue",pl:"Elektryczny błękit"},hex:"#1982C4"},{id:7,name:{en:"Grape",pl:"Winogrono"},hex:"#6A4C93"},{id:8,name:{en:"Midnight",pl:"Północ"},hex:"#2B2D42"}];function Ii(n){return(ah.find(t=>t.id===n)??ah[0]).hex}function J(n,t={},...e){const i=document.createElement(n);for(const[s,o]of Object.entries(t))o===void 0||o===!1||(s.startsWith("on")&&typeof o=="function"?i.addEventListener(s.slice(2),o):s==="class"?i.className=String(o):s==="style"?i.setAttribute("style",String(o)):o===!0?i.setAttribute(s,""):i.setAttribute(s,String(o)));for(const s of e)s!=null&&s!==!1&&i.append(s);return i}const JS=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches;function lo(n){JS||requestAnimationFrame(()=>{var t;return(t=n.querySelector("[data-primary]:not([disabled])"))==null?void 0:t.focus({preventScroll:!0})})}function An(n){const t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstChild}const $e={gear:()=>An('<svg viewBox="0 0 32 32"><g fill="#ffc93c" stroke="#7a5200" stroke-width="1.5"><path d="M13.6 2h4.8l.8 3.6 2.6 1.1 3.1-2 3.4 3.4-2 3.1 1.1 2.6 3.6.8v4.8l-3.6.8-1.1 2.6 2 3.1-3.4 3.4-3.1-2-2.6 1.1-.8 3.6h-4.8l-.8-3.6-2.6-1.1-3.1 2-3.4-3.4 2-3.1-1.1-2.6L2 18.4v-4.8l3.6-.8 1.1-2.6-2-3.1 3.4-3.4 3.1 2 2.6-1.1z"/></g><circle cx="16" cy="16" r="4.5" fill="#d99a1e" stroke="#7a5200" stroke-width="1.5"/></svg>'),wrench:()=>An('<svg viewBox="0 0 32 32"><path d="M20.5 3.5a7 7 0 0 0-6.3 9.6L3.8 23.5a2.9 2.9 0 0 0 4.1 4.1l10.4-10.4A7 7 0 0 0 27.9 11l-4.3 4.3-4.2-1.1-1.1-4.2L22.6 5.7a7 7 0 0 0-2.1-2.2z" fill="#3ddc84" stroke="#0e5c33" stroke-width="1.6" stroke-linejoin="round"/></svg>'),pause:()=>An('<svg viewBox="0 0 24 24"><rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor"/><rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor"/></svg>'),cog:()=>An('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M10.3 2h3.4l.5 2.6 1.9.8 2.2-1.5 2.4 2.4-1.5 2.2.8 1.9 2.6.5v3.4l-2.6.5-.8 1.9 1.5 2.2-2.4 2.4-2.2-1.5-1.9.8-.5 2.6h-3.4l-.5-2.6-1.9-.8-2.2 1.5-2.4-2.4 1.5-2.2-.8-1.9L2 13.7v-3.4l2.6-.5.8-1.9-1.5-2.2 2.4-2.4 2.2 1.5 1.9-.8zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>'),trophy:()=>An('<svg viewBox="0 0 24 24"><path fill="#ffc93c" stroke="#7a5200" stroke-width="1.3" d="M7 3h10v3h3.5v2a4.5 4.5 0 0 1-4.6 4.5A5 5 0 0 1 13 15v3h3v3H8v-3h3v-3a5 5 0 0 1-2.9-2.5A4.5 4.5 0 0 1 3.5 8V6H7zM5 7.5v.5c0 1.3.9 2.5 2.2 2.8A7 7 0 0 1 7 9V7.5zm14 0h-2V9a7 7 0 0 1-.2 1.8A3 3 0 0 0 19 8z"/></svg>'),magnet:()=>An('<svg viewBox="0 0 32 32"><path d="M6 4h7v11a3 3 0 0 0 6 0V4h7v11a10 10 0 0 1-20 0z" fill="#1982ff" stroke="#0b3d7a" stroke-width="1.6"/><rect x="6" y="4" width="7" height="5" fill="#e6ebf2"/><rect x="19" y="4" width="7" height="5" fill="#e6ebf2"/></svg>'),brush:()=>An('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 2.6a2 2 0 0 1 2.9 2.9l-7.6 8.4-3.6-3.6zM8.6 11.8l3.6 3.6-.6.9a4.6 4.6 0 0 1-4.1 2.5c-1.6 0-2.4.9-3.1 2.2-.3.5-1 .4-1.1-.2-.7-3.5.4-7.2 3.6-8.6z"/></svg>'),helmet:()=>An('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 0 1 9 9v3.5a2.5 2.5 0 0 1-2.5 2.5H11a3 3 0 0 1-3-3v-1h6.5a1.5 1.5 0 0 0 1.5-1.5V10a1.5 1.5 0 0 0-1.5-1.5H5.2A9 9 0 0 1 12 3zM4.1 10.5H14V12H3.6zM3.3 13.5H6V15a5 5 0 0 0 .6 2.4A9 9 0 0 1 3.3 13.5z"/></svg>'),stripes:()=>An('<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 2h3.6L6.6 22H3zM14.4 2H18l-4.5 20H9.9z"/></svg>'),left:()=>An('<svg viewBox="0 0 24 24"><path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),right:()=>An('<svg viewBox="0 0 24 24"><path d="m9 4 8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),back:()=>An('<svg viewBox="0 0 24 24"><path d="M11 5 4 12l7 7M5 12h15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>')};function QS(){const n=J("i");return{el:J("div",{class:"screen boot"},J("div",{class:"logo"},"GEAR",J("span",{class:"accent"},"RUSH")),J("div",{class:"bar"},n)),progress:e=>n.style.width=`${Math.round(e*100)}%`}}function tb(n){return J("div",{class:"screen title passthrough"},J("div",{class:"title-top"},J("span",{class:"update-slot"}),J("button",{class:"btn icon ghost","aria-label":Nt("settings"),onclick:n.onSettings},$e.cog())),J("div",{class:"logo"},"GEAR",J("span",{class:"accent"},"RUSH")),J("div",{class:"stats"},J("span",{class:"chip"},$e.trophy(),`${Nt("best")} ${fi(n.best)} m`),J("span",{class:"chip"},$e.gear(),`${fi(n.bank)}`)),J("div",{class:"spacer"}),J("div",{class:"col"},J("button",{class:"btn primary","data-primary":!0,onclick:n.onPlay},Nt("play")),J("button",{class:"btn",onclick:n.onGarage},Nt("garage")),J("p",{class:"hint"},n.touch?Nt("hint"):Nt("hintKeys"))))}function eb(n,t){const e=J("div",{class:"screen garage"}),i=()=>{var m,w,x;const s=(w=(m=document.activeElement)==null?void 0:m.dataset)==null?void 0:w.key,o=_f(n.cls),r=Math.max(0,o.findIndex(b=>b.id===n.model)),a=o[r],c=qx(a),l=(b,I,C)=>J("div",{class:"swatches"},J("span",{class:"swatch-icon",title:I},b),...ah.map(T=>J("button",{class:`swatch${T.id===C[a.id]?" on":""}`,style:`background:${T.hex}`,"data-key":`${I}-${T.id}`,"aria-label":`${I}: ${T.name[df()]}`,onclick:()=>{t.onTap(),C[a.id]=T.id,t.onChange(n),i()}}))),h=b=>{t.onTap(),n.model=o[(r+b+o.length)%o.length].id,t.onChange(n),i()},u=b=>J("button",{class:n.cls===b?"on":"","data-key":`tab-${b}`,onclick:()=>{n.cls!==b&&(t.onTap(),n.cls=b,n.model=_f(b)[b==="bike"?1:0].id,t.onChange(n),i())}},Nt(b)),f=(b,I)=>J("div",{class:"stat"},J("span",{},b),J("div",{class:"meter"},J("i",{style:`width:${Math.round(Math.min(1,Math.max(.08,I))*100)}%`}))),d=J("div",{class:"stage"});let g=0,_=0,p=0;d.addEventListener("pointerdown",b=>{g=p=b.clientX,_=performance.now()}),d.addEventListener("pointermove",b=>{_&&(t.onStageDrag(b.clientX-p),p=b.clientX)}),d.addEventListener("pointerup",b=>{const I=b.clientX-g;_&&performance.now()-_<300&&Math.abs(I)>40&&h(I<0?1:-1),_=0}),e.replaceChildren(J("div",{class:"head"},J("button",{class:"btn icon ghost","aria-label":Nt("back"),"data-key":"back",onclick:t.onBack},$e.back()),J("div",{class:"tabs"},u("bike"),u("car")),J("span",{style:"width:56px"})),d,J("div",{class:"card"},J("div",{class:"carousel"},J("button",{class:"btn icon ghost","aria-label":"previous","data-key":"prev",onclick:()=>h(-1)},$e.left()),J("div",{class:"name"},J("b",{},a.name),J("span",{},a.look[df()])),J("button",{class:"btn icon ghost","aria-label":"next","data-key":"next",onclick:()=>h(1)},$e.right())),J("div",{class:"stats-list"},f(Nt("handling"),c.handling),f(Nt("toughness"),c.toughness),f(Nt("reach"),c.reach)),J("div",{class:"swatch-rows"},l($e.brush(),Nt("paint"),n.colors),a.cls==="bike"?l($e.helmet(),Nt("rider"),n.riderColors):l($e.stripes(),Nt("accent"),n.riderColors)),J("div",{class:"row"},J("button",{class:"btn primary","data-primary":!0,"data-key":"go",onclick:t.onGo},Nt("go"))))),s&&((x=e.querySelector(`[data-key="${s}"]`))==null||x.focus({preventScroll:!0}))};return i(),e.step=s=>{var o;return(o=e.querySelector(`[data-key="${s<0?"prev":"next"}"]`))==null?void 0:o.click()},lo(e),e}function nb(n){return J("div",{class:"screen dim settings"},J("div",{class:"panel col"},J("h2",{class:"title-text"},Nt("paused")),J("button",{class:"btn primary","data-primary":!0,onclick:n.onResume},Nt("resume")),J("div",{class:"row"},J("button",{class:"btn",onclick:n.onRestart},Nt("restart")),J("button",{class:"btn",onclick:n.onHome},Nt("home"))),J("button",{class:"btn ghost",onclick:n.onSettings},$e.cog()," ",Nt("settings"))))}function ib(n){const t=J("button",{class:"btn primary","data-primary":!0,disabled:!0,onclick:n.onRetry},Nt("retry"));return window.setTimeout(()=>{t.removeAttribute("disabled"),t.isConnected&&(!document.activeElement||document.activeElement===document.body)&&lo(t.parentElement)},500),J("div",{class:"screen dim results"},J("div",{class:"label-top"},Nt("distance")),J("div",{class:"big"},fi(n.distance),J("small",{}," m")),n.newBest?J("div",{class:"newbest"},Nt("newBest")):null,J("div",{class:"lines"},J("div",{class:"line"},J("span",{},Nt("gearsRun")),J("b",{},$e.gear(),`+${fi(n.gears)}`)),J("div",{class:"line"},J("span",{},Nt("gearBank")),J("b",{},$e.gear(),fi(n.bank))),J("div",{class:"line"},J("span",{},Nt("best")),J("b",{},$e.trophy(),`${fi(n.best)} m`))),t,J("div",{class:"row"},J("button",{class:"btn",onclick:n.onGarage},Nt("garage")),J("button",{class:"btn",onclick:n.onHome},Nt("home"))))}function sb(n,t,e){const i=J("div",{class:"screen dim settings"}),s=()=>{const o=(a,c)=>J("button",{class:`toggle${n[a]?" on":""}`,role:"switch","aria-checked":String(n[a]),onclick:()=>{n[a]=!n[a],e.onTap(),e.onChange(n),s()}},J("span",{},c),J("span",{class:"sw"})),r=(a,c)=>J("button",{class:n.lang===a?"on":"",onclick:()=>{n.lang=a,e.onTap(),e.onChange(n),s()}},c);i.replaceChildren(J("div",{class:"panel"},J("h2",{class:"title-text"},Nt("settings")),o("music",Nt("music")),o("sfx",Nt("sfx")),o("haptics",Nt("haptics")),o("reducedMotion",Nt("reducedMotion")),J("div",{class:"label"},Nt("language")),J("div",{class:"lang"},r("auto",Nt("langAuto")),r("en","English"),r("pl","Polski")),J("div",{class:"label"},Nt("app")),t.canInstall?J("div",{class:"row app-row"},J("button",{class:"btn",onclick:()=>t.install()},Nt("install"))):null,t.iosHint?J("p",{class:"hint app-row"},Nt("iosInstall")):null,J("p",{class:"hint version"},`${Nt("version")} ${t.version}`),J("div",{class:"row"},J("button",{class:"btn primary","data-primary":!0,onclick:e.onClose},Nt("close")))))};return s(),i}function ob(n){let t=[],e=0,i=1,s,o=!1;return{enter(){o=!1;const r=()=>o=!0;setTimeout(r,2e3),document.fonts?document.fonts.load('64px "Lilita One"').then(r,r):r(),s=QS(),n.ui.replaceChildren(s.el),t=[qS,()=>Oc("city"),()=>Oc("outskirts"),()=>Oc("drylands"),()=>n.view.prepareWorld(),()=>n.view.setVehicle(n.save.selected.model,"#ffffff","#ffffff"),()=>n.view.compileShaders(n.renderer)],i=t.length,e=0},exit(){},frame(){if(!o&&t.length===2)return;const r=t.shift();if(r){r(),e++,s.progress(e/i);return}n.go("title")}}}const ne=n=>440*Math.pow(2,(n-69)/12),Wc=3,Xc=1.6;class rb{constructor(t,e){this.ctx=t,this.noise=e,this.ks=new Map,this.curves=new Map}env(t,e,i,s,o){const r=this.ctx.createGain();return r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(e,t+s),o?(r.gain.setValueAtTime(e,Math.max(t+s,t+i-.06)),r.gain.exponentialRampToValueAtTime(1e-4,t+i+.08)):r.gain.exponentialRampToValueAtTime(1e-4,t+i),r}tone(t,e,i,s,o,r,a=.005,c=0,l={}){const h=this.ctx,u=h.createOscillator();u.type=e,l.detune&&(u.detune.value=l.detune),l.bend?(u.frequency.setValueAtTime(i*Math.pow(2,-l.bend/12),s),u.frequency.exponentialRampToValueAtTime(i,s+.08)):u.frequency.value=i;let f=null;if(l.vibrato&&o>.3){f=h.createOscillator(),f.frequency.value=l.vibrato[0];const p=h.createGain();p.gain.setValueAtTime(0,s),p.gain.linearRampToValueAtTime(i*l.vibrato[1],s+Math.min(.4,o*.6)),f.connect(p).connect(u.frequency),f.start(s)}const d=this.env(s,r,o,l.attack??a,!!l.hold);let g=u;if(c){const p=h.createBiquadFilter();p.type="lowpass",p.frequency.value=c,p.Q.value=l.q??.7,u.connect(p),g=p}g.connect(d).connect(t);const _=s+o+(l.hold?.12:.02);u.start(s),u.stop(_),f==null||f.stop(_)}noiseHit(t,e,i,s,o,r,a=1,c=0){const l=this.ctx,h=l.createBufferSource();h.buffer=this.noise;const u=l.createBiquadFilter();u.type=o,u.frequency.value=r,u.Q.value=a;const f=l.createGain();c?(f.gain.setValueAtTime(1e-4,e),f.gain.exponentialRampToValueAtTime(s,e+c)):f.gain.setValueAtTime(s,e),f.gain.exponentialRampToValueAtTime(1e-4,e+i),h.connect(u).connect(f).connect(t),h.start(e,Math.random()*.5),h.stop(e+i+.02)}sweep(t,e,i,s,o,r,a=1.2){const c=this.ctx,l=c.createBufferSource();l.buffer=this.noise,l.loop=!0;const h=c.createBiquadFilter();h.type="bandpass",h.Q.value=a,h.frequency.setValueAtTime(o,e),h.frequency.exponentialRampToValueAtTime(r,e+i);const u=c.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(s,e+i*.3),u.gain.exponentialRampToValueAtTime(1e-4,e+i),l.connect(h).connect(u).connect(t),l.start(e,Math.random()*.5),l.stop(e+i+.02)}kick(t,e,i=.7,s=150,o=.25){const r=this.ctx,a=r.createOscillator();a.frequency.setValueAtTime(s,e),a.frequency.exponentialRampToValueAtTime(42,e+.12);const c=r.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+o),a.connect(c).connect(t),a.start(e),a.stop(e+o+.05)}snare(t,e,i){this.noiseHit(t,e,.16,i,"bandpass",1800,.7),this.tone(t,"triangle",190,e,.1,i*.5)}brush(t,e,i){this.noiseHit(t,e,.11,i,"bandpass",3600,.5,.012)}clap(t,e,i){for(let s=0;s<3;s++)this.noiseHit(t,e+s*.011,.02,i,"bandpass",1150,1.5);this.noiseHit(t,e+.033,.2,i*.7,"bandpass",1150,1.2)}hat(t,e,i,s=7e3,o=!1){this.noiseHit(t,e,o?.22:.05,i,"highpass",s)}rim(t,e,i){this.tone(t,"square",1750,e,.025,i*.5,.001,3e3),this.noiseHit(t,e,.03,i,"bandpass",2600,2)}shaker(t,e,i){this.noiseHit(t,e,.06,i,"highpass",6500,.8,.015)}crash(t,e,i){this.noiseHit(t,e,1.4,i,"highpass",4500,.6)}tom(t,e,i,s=.3){const o=this.ctx,r=o.createOscillator();r.frequency.setValueAtTime(i,e),r.frequency.exponentialRampToValueAtTime(i*.6,e+.2);const a=o.createGain();a.gain.setValueAtTime(s,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.25),r.connect(a).connect(t),r.start(e),r.stop(e+.3)}clank(t,e,i){const s=this.ctx,o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=2600,o.Q.value=4;const r=s.createGain();r.gain.setValueAtTime(i,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.14),o.connect(r).connect(t);for(const a of[520,770]){const c=s.createOscillator();c.type="square",c.frequency.value=a,c.connect(o),c.start(e),c.stop(e+.16)}}crackle(t,e,i){this.noiseHit(t,e,.008,i,"highpass",2500)}chirp(t,e,i){for(let s=0;s<3;s++)this.tone(t,"sine",4400,e+s*.03,.02,i,.004)}pluck(t,e,i,s,o={}){const r=o.bright??.6,a=i-(i%Wc+Wc)%Wc,c=this.ksBuffer(a,Math.round(r*2)/2),l=Math.pow(2,(i-a)/12),h=this.ctx.createBufferSource();h.buffer=c,o.bend?(h.playbackRate.setValueAtTime(l*Math.pow(2,-2/12),e),h.playbackRate.exponentialRampToValueAtTime(l,e+.07)):h.playbackRate.value=l;const u=this.ctx.createGain();u.gain.value=s;const f=Math.min(o.len??Xc,Xc);o.len!==void 0&&(u.gain.setValueAtTime(s,e+f),u.gain.exponentialRampToValueAtTime(1e-4,e+f+.06)),h.connect(u).connect(t),h.start(e),h.stop(e+f+.08)}strum(t,e,i,s,o={}){i.forEach((r,a)=>this.pluck(t,e+a*.008,r,s,o))}bass(t,e,i,s,o){this.tone(t,"triangle",ne(i),e,s,o,.004,900),this.tone(t,"sine",ne(i),e,s*.8,o*.6)}sub(t,e,i,s,o){const a=this.ctx.createOscillator(),c=ne(i);a.frequency.setValueAtTime(c*1.6,e),a.frequency.exponentialRampToValueAtTime(c,e+.05);const l=this.env(e,o,s,.004,!0);a.connect(l).connect(t),a.start(e),a.stop(e+s+.12)}stab(t,e,i,s,o,r=1700){for(const a of i)this.tone(t,"sawtooth",ne(a),e,s,o,.004,r)}power(t,e,i,s,o,r=0){for(const a of[0,7,12])this.tone(t,"sawtooth",ne(i+a),e,s,o*(a===12?.6:1),.003,0,{detune:r,hold:s>.2})}keys(t,e,i,s,o){for(const r of i)this.tone(t,"sine",ne(r),e,s,o,.01,0,{hold:!0}),this.tone(t,"triangle",ne(r+12),e,.35,o*.35,.002)}bell(t,e,i,s){this.tone(t,"sine",ne(i),e,1.1,s,.002),this.tone(t,"sine",ne(i)*2.76,e,.35,s*.3,.002)}lead(t,e,i,s,o,r=!1){const a={hold:!0,attack:.008,bend:r?2:0,vibrato:[5.5,.008]};this.tone(t,"sawtooth",ne(i),e,s,o,.008,2600,a),this.tone(t,"square",ne(i),e,s,o*.5,.008,2600,{...a,detune:9})}fuzz(t,e,i,s,o,r=!1){const a={hold:!0,attack:.004,bend:r?2:0,vibrato:[6,.012]};this.tone(t,"sawtooth",ne(i),e,s,o,.004,0,a),this.tone(t,"square",ne(i),e,s,o*.6,.004,0,{...a,detune:-7})}reed(t,e,i,s,o,r=!1){this.tone(t,"square",ne(i),e,s,o,.03,1500,{hold:!0,attack:.03,bend:r?1:0,vibrato:[5,.01]})}flute(t,e,i,s,o){this.tone(t,"sine",ne(i),e,s,o,.04,0,{hold:!0,attack:.04,vibrato:[5,.006]}),this.noiseHit(t,e,Math.min(s,.25),o*.25,"bandpass",ne(i)*2,6,.03)}whistle(t,e,i,s,o,r=!1){this.tone(t,"sine",ne(i),e,s,o,.03,0,{hold:!0,attack:.03,bend:r?2:.5,vibrato:[6,.015]})}ksBuffer(t,e){const i=`${t}:${e}`;let s=this.ks.get(i);if(!s){const o=this.ctx.sampleRate;s=this.ctx.createBuffer(1,Math.floor(o*Xc),o),ab(s.getChannelData(0),o,ne(t),e),this.ks.set(i,s)}return s}curve(t){let e=this.curves.get(t);if(!e){e=new Float32Array(1024);for(let i=0;i<e.length;i++){const s=i/(e.length-1)*2-1;e[i]=Math.tanh(s*t)/Math.tanh(t)}this.curves.set(t,e)}return e}}function ab(n,t,e,i){const s=t/e-.5,o=Math.floor(s),r=s-o,a=.25+.5*i,c=Math.pow(.5,1/(e*a)),l=.25+.75*i;let h=0;for(let d=0;d<=o&&d<n.length;d++)h+=l*(Math.random()*2-1-h),n[d]=h;const u=d=>d>=0?n[d]:0;for(let d=o+1;d<n.length;d++){const g=u(d-o)*(1-r)+u(d-o-1)*r,_=u(d-o-1)*(1-r)+u(d-o-2)*r;n[d]=c*.5*(g+_)}let f=0;for(let d=0;d<n.length;d++)f=Math.max(f,Math.abs(n[d]));if(f>0)for(let d=0;d<n.length;d++)n[d]*=.6/f}const Oa=n=>n.minor?3:4,ya=(n,t=0)=>[n.root+t,n.root+t+Oa(n),n.root+t+7],Sn=n=>n*(.9+Math.random()*.2),cb=(n,t)=>{const e=n.indexOf(t);return e<n.length-1?n[e+1]-t:16-t+n[0]},Ci={root:43},Wr={root:48},qc={root:50},lb={root:40,minor:!0},gp=[Ci,Ci,Wr,Ci,Ci,Ci,qc,qc,Wr,Wr,Ci,lb,Wr,qc,Ci,Ci],ad=[[0,7,2],[2,9,2],[4,12,4,1],[10,9,2],[12,7,4]],cd=[[0,4,2],[2,7,2],[4,4,2],[6,2,2],[8,0,6]],hb=[[0,9,2],[2,12,2],[4,9,2],[6,7,2],[8,5,4],[14,7,2]],ub=[[0,4,4,1],[6,2,2],[8,0,8]],vp=[ad,cd,hb,ub,ad,cd,[[0,11,2],[2,14,2],[4,11,2],[6,9,2],[8,7,6]],[[0,9,2],[2,7,2],[4,4,2],[6,2,2]],[[0,12,4],[4,9,2],[6,12,2],[8,14,6,1],[14,12,2]],[[0,9,4],[4,7,2],[6,5,2],[8,7,8]],[[0,4,2],[2,7,2],[4,12,4],[8,16,4],[12,14,4]],[[0,12,4],[4,9,4],[8,7,2],[10,9,6]],[[0,9,2],[2,12,2],[4,9,2],[6,7,2],[8,5,4],[12,9,4]],[[0,7,4],[4,11,4],[8,14,4],[12,11,4]],[[0,12,6,1],[6,9,2],[8,7,2],[10,4,2],[12,7,4]],[[0,0,8]]],fb={bpm:120,swing:.6,reverb:.12,gain:2.9,chords:gp,hook:vp,leadRoot:67,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r,next:a}=n,c=n.ch(0);(i===0||i===8)&&t.kick(c,e,.42),i%2===0&&t.brush(c,e,i===4||i===12?.22:Sn(.07)),(i===4||i===12)&&t.snare(c,e,.14);const l=n.ch(0),h=r.root+(r.root>=48?-5:7);(i===0||i===8)&&t.bass(l,e,r.root,o*3.5,.14),i===4&&t.bass(l,e,h,o*3.5,.13),i===12&&t.bass(l,e,a.root!==r.root?a.root-2:h,o*1.8,.13),i===14&&a.root!==r.root&&t.bass(l,e,a.root-1,o*1.8,.13),i%4===2&&t.strum(n.ch(0,{pan:-.3}),e,ya(r,12),.07,{bright:.5,len:o*1.6});const u=n.ch(1,{pan:.25,echo:[.11,.25]});for(const _ of n.hook)t.pluck(u,e,_.note,.36,{bright:1,bend:_.bend,len:_.len*o+.15});const f=[0,1,2,0,1,2,0,2],d=[r.root+24,r.root+19,r.root+24+Oa(r)];t.pluck(n.ch(2,{pan:-.4}),e,d[f[i%8]],Sn(.045),{bright:1,len:o*2});const g=n.ch(2);i%4===2&&t.shaker(g,e,.05),s%8===7&&i>=12&&t.snare(g,e,.06+(i-12)*.03)}},db={bpm:84,swing:.62,reverb:.4,gain:1.9,chords:gp,hook:vp,leadRoot:67,play(n){const{syn:t,t:e,s:i,dur:s,chord:o}=n,r=n.ch(0);i===0&&t.kick(r,e,.4,120,.3),i===8?t.brush(r,e,.16):i%4===0&&t.brush(r,e,Sn(.04)),i===0&&t.bass(n.ch(0),e,o.root,s*7,.2),i===8&&t.bass(n.ch(0),e,o.root+(o.root>=48?-5:7),s*7,.18);const a=[o.root+12,o.root+19,o.root+24,o.root+24+Oa(o)];i%2===0&&t.pluck(n.ch(0,{pan:-.25}),e,a[[0,1,2,3,2,1,2,1][i/2]],Sn(.07),{bright:.5});const c=n.ch(1,{pan:.2});for(const h of n.hook)t.reed(c,e,h.note,h.len*s,.06,h.bend);const l=n.ch(2,{pan:.5});i===6&&Math.random()<.6&&t.chirp(l,e,.025),i%4===2&&t.shaker(n.ch(2),e,.025)}},Ws={root:38,minor:!0},Yc={root:34},ld={root:36},$c={root:33},hd={root:31,minor:!0},_p=[Ws,Ws,Yc,ld,Ws,Ws,Yc,$c,hd,hd,Ws,Ws,Yc,ld,$c,$c],ud=[[0,7,3],[3,10,1],[4,12,2],[7,10,1],[8,7,4],[14,5,2]],fd=[[0,3,2],[2,5,2],[4,7,6],[12,5,2],[14,3,2]],dd=[[0,5,3],[3,3,1],[4,0,4],[10,3,2],[12,5,4]],xp=[ud,fd,dd,[[0,7,2],[2,10,2],[4,7,2],[6,5,2],[8,7,8]],ud,fd,dd,[[0,14,2],[2,11,2],[4,7,2],[6,11,2],[8,14,6]],[[0,5,2],[2,8,2],[4,12,4],[10,10,2],[12,8,4]],[[0,5,2],[2,7,2],[4,8,2],[6,10,2],[8,12,8]],[[0,12,3],[3,10,1],[4,7,4],[10,5,2],[12,3,4]],[[0,5,2],[2,3,2],[4,0,8]],[[0,8,2],[2,5,2],[4,3,4],[10,5,2],[12,8,4]],[[0,10,2],[2,7,2],[4,10,4],[10,12,2],[12,14,4]],[[0,11,4],[4,7,2],[6,11,2],[8,14,8]],[[0,14,2],[2,11,2],[4,7,2],[6,2,2]]],pb={bpm:96,swing:.56,reverb:.12,gain:1.9,chords:_p,hook:xp,leadRoot:74,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r}=n,a=n.ch(0),c=s%2?[0,7,10,14]:[0,7,10];c.includes(i)&&(t.kick(a,e,.45,120,.3),t.sub(n.ch(0,{drive:2}),e,r.root,cb(c,i)*o*.9,.035)),(i===4||i===12)&&(t.clap(a,e,.28),t.snare(a,e,.08)),i===14?t.hat(a,e,.07,7e3,!0):t.hat(a,e,Sn(i%4===0?.05:i%2===0?.08:.035)),(i===6||i===14)&&t.stab(n.ch(0,{pan:.2}),e,ya(r,24),o*1.5,.05,2200);const l=n.ch(1,{pan:-.15,echo:[o*3,.3]});for(const u of n.hook)t.lead(l,e,u.note,u.len*o,.1,u.bend);const h=n.ch(2);(i===3||i===11)&&t.clank(h,e,.12),t.tone(n.ch(2,{pan:-.4}),"square",ne(ya(r,36)[[0,1,2,1][i%4]]),e,o*.9,Sn(.022),.003,2600),s%4===3&&i===8&&t.sweep(h,e,o*8,.07,400,6e3,2)}},mb={bpm:78,swing:.6,reverb:.3,gain:1,chords:_p,hook:xp,leadRoot:74,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r}=n,a=n.ch(0,{cutoff:5e3});if((i===0||i===10)&&t.kick(a,e,.45,110,.3),(i===4||i===12)&&t.snare(a,e,.09),i%2===0&&t.hat(a,e,Sn(.025),6e3),Math.random()<.3&&t.crackle(a,e,.02),i===0||i===8&&s%2===1){const l=r.root+24;t.keys(n.ch(0,{cutoff:2400,tremolo:[4,.3]}),e,[l,l+Oa(r),l+7,l+10],o*(i===0&&s%2===0?15:7),.03)}i===0&&t.tone(n.ch(0),"sine",ne(r.root+12),e,o*6,.2,.01,0,{hold:!0}),i===10&&t.tone(n.ch(0),"sine",ne(r.root+12),e,o*4,.16,.01,0,{hold:!0});const c=n.ch(1,{pan:.15,echo:[o*3,.35]});for(const l of n.hook)t.flute(c,e,l.note,l.len*o,.05);i%2===0&&t.bell(n.ch(2,{pan:.35}),e,ya(r,36)[[0,1,2,1,0,2,1,2][i/2]],Sn(.02))}},Xr={root:40},Kc={root:43},jc={root:45},Zc={root:48},gb={root:50},pd={root:47},Mp=[Xr,Xr,Kc,jc,Xr,Xr,Zc,gb,Zc,Zc,Kc,Kc,jc,jc,pd,pd],md=[[0,12,4,1],[4,10,2],[6,7,2],[8,10,2],[10,12,6]],gd=[[0,15,4,1],[4,12,2],[6,10,2],[8,12,8]],yp=[md,gd,[[0,7,2],[2,10,2],[4,12,4],[8,15,4],[12,12,4]],[[0,17,6,1],[6,15,2],[8,12,8]],md,gd,[[0,15,2],[2,12,2],[4,8,4],[8,7,4],[12,8,4]],[[0,10,4,1],[4,14,4],[8,17,4,1],[12,19,4]],[[0,20,6,1],[6,19,2],[8,15,4],[12,12,4]],[[0,15,2],[2,12,2],[4,8,4],[8,7,8]],[[0,19,4],[4,15,4],[8,14,2],[10,15,2],[12,19,4]],[[0,22,8,1],[8,19,8]],[[0,17,2],[2,19,2],[4,21,4],[8,24,8]],[[0,21,4],[4,19,4],[8,17,8]],[[0,19,4,1],[4,23,4],[8,26,8]],[[0,23,2],[2,19,2],[4,14,2],[6,11,2],[8,7,8]]],vb={bpm:128,swing:.5,reverb:.1,gain:.4,chords:Mp,hook:yp,leadRoot:64,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r}=n,a=n.ch(0);if((i===0||i===8||i===10||s%2===1&&i===6)&&t.kick(a,e,.6),(i===4||i===12)&&t.snare(a,e,.36),i%2===0&&t.hat(a,e,Sn(i%4===0?.08:.05)),s%4===0&&i===0&&t.crash(a,e,.12),i%2===0){const h=i===0||i===10,u=h?o*5:o*.9,f=h?.05:.04;t.power(n.ch(0,{pan:-.35,drive:6,cutoff:h?3e3:1400}),e,r.root,u,f),t.power(n.ch(0,{pan:.35,drive:6,cutoff:h?3e3:1400}),e+.012,r.root,u,f,7),t.tone(n.ch(0),"sawtooth",ne(r.root-12),e,o*1.8,.12,.004,500)}const c=n.ch(1,{pan:.1,drive:8,cutoff:3200,echo:[o*3,.18]});for(const h of n.hook)t.fuzz(c,e,h.note,h.len*o,.035,h.bend);const l=n.ch(2);s%4===3&&i>=12&&t.tom(l,e,[220,180,150,120][i-12],.32),i%2===1&&t.hat(l,e,Sn(.03),9e3),s%4===0&&i===0&&t.crash(l,e,.08)}},_b={bpm:76,swing:.5,reverb:.45,gain:1.6,chords:Mp,hook:yp,leadRoot:64,play(n){const{syn:t,t:e,s:i,bar:s,dur:o,chord:r}=n,a=n.ch(0);if((i===0||i===10)&&t.kick(a,e,.34,110,.35),i===8&&t.rim(a,e,.12),i%2===0&&t.shaker(a,e,Sn(.02)),i===0&&t.tone(n.ch(0),"sine",ne(r.root),e,o*14,.09,.02,0,{hold:!0}),i%2===0){const h=[r.root+12,r.root+19,r.root+24,r.root+19];t.pluck(n.ch(0,{pan:-.2,tremolo:[5.5,.5]}),e,h[i/2%4],Sn(.09),{bright:.4})}const c=n.ch(1,{pan:.2});for(const h of n.hook)t.whistle(c,e,h.note,h.len*o,.04,h.bend);const l=n.ch(2);i%4===0&&t.hat(l,e,Sn(.025),8e3),s%4===0&&i===0&&t.tom(l,e,70,.35)}},xb=[57,53,48,55],Mb={bpm:132,swing:.5,reverb:.2,gain:4.5,chords:Array.from({length:16},(n,t)=>({root:xb[t%4]})),hook:Array.from({length:16},()=>[]),leadRoot:0,play(n){const{syn:t,t:e,s:i,dur:s,chord:o}=n,r=n.ch(0),a=o.root;if(i===0)for(const c of[0,4,7])t.tone(r,"triangle",ne(a+c-12),e,s*15,.05,.4);i%4===2&&t.tone(r,"sine",ne(a+[0,7,12,16][(i-2)/4]),e,s*3,.06,.02),i%8===4&&t.hat(r,e,.03)}},yb={menu:Mb,"outskirts:day":fb,"outskirts:night":db,"city:day":pb,"city:night":mb,"drylands:day":vb,"drylands:night":_b},vd=256,Sb=.12,Jc=.7;class bb{constructor(t,e,i,s,o,r){this.id=t,this.def=e,this.syn=i,this.layers=[],this.chans=new Map,this.lfos=[],this.step=0,this.stopAt=1/0;const a=i.ctx;this.bus=a.createGain(),this.bus.gain.setValueAtTime(1e-4,r),this.bus.gain.setTargetAtTime(e.gain,r,Jc*.6),this.bus.connect(s);const c=a.createGain();c.gain.value=e.reverb,this.bus.connect(c).connect(o);for(let l=0;l<3;l++){const h=a.createGain();h.gain.value=0,h.connect(this.bus),this.layers.push(h)}this.hooks=Array.from({length:vd},()=>[]),e.hook.forEach((l,h)=>{for(const[u,f,d,g]of l)this.hooks[h*16+u].push({note:e.leadRoot+f,len:d,bend:!!g})}),this.next=r}ch(t,e={}){const i=`${t}|${e.pan??0}|${e.drive??0}|${e.cutoff??0}|${e.echo??""}|${e.tremolo??""}`;let s=this.chans.get(i);if(s)return s;const o=this.syn.ctx,r=o.createGain();let a=r;if(e.drive){const l=o.createWaveShaper();l.curve=this.syn.curve(e.drive),l.oversample="2x",r.gain.value=1.5,a=a.connect(l)}if(e.cutoff){const l=o.createBiquadFilter();l.type="lowpass",l.frequency.value=e.cutoff,a=a.connect(l)}if(e.tremolo){const l=o.createGain();l.gain.value=1-e.tremolo[1]/2;const h=o.createOscillator();h.frequency.value=e.tremolo[0];const u=o.createGain();u.gain.value=e.tremolo[1]/2,h.connect(u).connect(l.gain),h.start(),this.lfos.push(h),a=a.connect(l)}const c=o.createStereoPanner();if(c.pan.value=e.pan??0,a.connect(c),e.echo){const l=o.createDelay(1);l.delayTime.value=e.echo[0];const h=o.createGain();h.gain.value=.3;const u=o.createGain();u.gain.value=e.echo[1],a.connect(l),l.connect(h).connect(l),l.connect(u).connect(c)}return c.connect(this.layers[t]),s=r,this.chans.set(i,s),s}tick(t,e){const i=this.def,s=60/i.bpm/4,o=(4*i.swing-2)*s;for(;this.next<e&&this.next<this.stopAt;){this.next<t-.2&&(this.next=t);const r=this.step,a=r>>4,c=r&15,l=c%4===2?o:c%2===1?o/2:0;i.play({syn:this.syn,t:this.next+l,step:r,bar:a,s:c,dur:s,chord:i.chords[a],next:i.chords[(a+1)%16],hook:this.hooks[r],ch:(h,u)=>this.ch(h,u)}),this.next+=s,this.step=(r+1)%vd}}fadeOut(t){this.bus.gain.cancelScheduledValues(t),this.bus.gain.setTargetAtTime(0,t,Jc*.6),this.stopAt=t+Jc*5}dispose(){for(const t of this.lfos)t.stop();this.bus.disconnect()}}class wb{constructor(t,e){this.syn=t,this.out=e,this.players=[],this.current=null,this.timer=0,this.tier=1;const i=t.ctx;this.reverb=i.createConvolver(),this.reverb.buffer=Eb(i,2.6),this.reverb.connect(e)}get style(){var t;return((t=this.current)==null?void 0:t.id)??null}play(t){var i,s;if(((i=this.current)==null?void 0:i.id)===t)return;const e=this.syn.ctx.currentTime;(s=this.current)==null||s.fadeOut(e),this.current=new bb(t,yb[t],this.syn,this.out,this.reverb,e+.05),this.players.push(this.current),this.applyTier(0),this.timer||(this.timer=window.setInterval(()=>this.schedule(),25))}stop(){var e;const t=this.syn.ctx.currentTime;(e=this.current)==null||e.fadeOut(t),this.current=null}setTier(t){this.tier=t,this.applyTier(.3)}applyTier(t){const e=this.current;if(!e)return;const i=this.syn.ctx.currentTime,s=e.id==="menu",o=[!0,s||this.tier>=2,s||this.tier>=4];e.layers.forEach((r,a)=>{t?r.gain.setTargetAtTime(o[a]?1:0,i,t):r.gain.value=o[a]?1:0})}schedule(){const t=this.syn.ctx.currentTime;for(const e of this.players)e.tick(t,t+Sb);this.players=this.players.filter(e=>e===this.current||t<e.stopAt+1?!0:(e.dispose(),!1)),this.players.length===0&&(window.clearInterval(this.timer),this.timer=0)}}function Eb(n,t){const e=Math.floor(n.sampleRate*t),i=n.createBuffer(2,e,n.sampleRate);for(let s=0;s<2;s++){const o=i.getChannelData(s);let r=0;for(let a=0;a<e;a++){const c=a/e;r+=(.6-.45*c)*(Math.random()*2-1-r),o[a]=r*Math.pow(1-c,3)}}return i}class Tb{constructor(){this.ctx=null,this.engineOsc=null,this.engineOsc2=null,this.whineOsc=null,this.pending=null,this.musicOn=!0,this.sfxOn=!0,this.engineSound={base:80,rev:1.3,cutoff:700,cutoffRise:1400,whine:0},this.engineDamage=0,this.nextSputter=0}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.8;const i=e.createDynamicsCompressor();i.threshold.value=-12,this.master.connect(i).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.connect(this.master),this.engineFilter=e.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=900,this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineFilter.connect(this.engineGain).connect(this.sfxBus);const s=e.createBuffer(1,e.sampleRate,e.sampleRate),o=s.getChannelData(0);for(let r=0;r<o.length;r++)o[r]=Math.random()*2-1;this.syn=new rb(e,s),this.music=new wb(this.syn,this.musicBus),this.applyToggles(),this.pending&&this.music.play(this.pending)}this.ctx.state==="suspended"&&this.ctx.resume()}setEnabled(t,e){this.musicOn=t,this.sfxOn=e,this.applyToggles()}applyToggles(){if(!this.ctx)return;const t=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.musicOn?.55:0,t,.05),this.sfxBus.gain.setTargetAtTime(this.sfxOn?.9:0,t,.05)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playMenuMusic(){this.setStyle("menu")}playGameMusic(t){this.setStyle(t),this.setTier(1)}setStyle(t){this.pending=t,this.ctx&&this.music.play(t)}stopMusic(){this.pending=null,this.ctx&&this.music.stop()}setTier(t){this.ctx&&this.music.setTier(t)}duck(t){this.ctx&&this.musicBus.gain.setTargetAtTime(this.musicOn?t?.55*.5:.55:0,this.ctx.currentTime,.08)}startEngine(t){if(!this.ctx)return;this.stopEngine(),this.engineDamage=0,this.engineSound=t;const e=this.ctx;this.engineOsc=e.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc2=e.createOscillator(),this.engineOsc2.type="square",this.engineOsc.frequency.value=t.base,this.engineOsc2.frequency.value=t.base*.5;const i=e.createGain();if(i.gain.value=.5,this.engineOsc.connect(this.engineFilter),this.engineOsc2.connect(i).connect(this.engineFilter),this.engineOsc.start(),this.engineOsc2.start(),t.whine>0){this.whineOsc=e.createOscillator(),this.whineOsc.type="triangle",this.whineOsc.frequency.value=t.base*2;const s=e.createGain();s.gain.value=t.whine,this.whineOsc.connect(s).connect(this.engineGain),this.whineOsc.start()}this.engineFilter.frequency.value=t.cutoff,this.engineGain.gain.setTargetAtTime(.07,e.currentTime,.2)}setEngineDamage(t){this.engineDamage=t,this.nextSputter=this.now+.4}setEngine(t,e){var r,a;if(!this.ctx||!this.engineOsc||!this.engineOsc2)return;const i=this.ctx.currentTime,s=this.engineSound,o=s.base*(1+t*s.rev)*(e?1.12:1);if(this.engineOsc.frequency.setTargetAtTime(o,i,.08),this.engineOsc2.frequency.setTargetAtTime(o*.5,i,.08),(r=this.whineOsc)==null||r.frequency.setTargetAtTime(o*2,i,.08),this.engineFilter.frequency.setTargetAtTime(s.cutoff+t*s.cutoffRise,i,.1),this.engineDamage>0&&i>=this.nextSputter){const c=this.engineGain.gain;c.cancelScheduledValues(i),c.setTargetAtTime(.015,i,.02),c.setTargetAtTime(.07,i+.09,.04),this.engineOsc.frequency.setTargetAtTime(o*.8,i,.03),(a=this.whineOsc)==null||a.frequency.setTargetAtTime(o*1.6,i,.03);const l=this.engineDamage>=2;l&&Math.random()<.35&&this.sfx("backfire"),this.nextSputter=i+(l?.3+Math.random()*.6:1.2+Math.random()*1.8)}}stopEngine(){if(!this.ctx)return;const t=this.ctx.currentTime;this.engineGain.gain.cancelScheduledValues(t),this.engineGain.gain.setTargetAtTime(0,t,.05);for(const e of[this.engineOsc,this.engineOsc2,this.whineOsc])e&&e.stop(t+.3);this.engineOsc=this.engineOsc2=this.whineOsc=null}get now(){return this.ctx?this.ctx.currentTime:0}sfx(t,e=0){if(!this.ctx||!this.sfxOn)return;const i=this.now,s=this.sfxBus,o=1+(Math.random()*2-1)*.05,r=1+(Math.random()*2-1)*.1;switch(t){case"gear":{const a=76+Math.min(e,12);this.syn.tone(s,"square",ne(a),i,.08,.08,.002,4e3),this.syn.tone(s,"sine",ne(a+12),i+.03,.1,.06);break}case"golden":[0,4,7,12].forEach((a,c)=>this.syn.tone(s,"triangle",ne(84+a),i+c*.06,.25,.12));break;case"wrench":this.syn.tone(s,"square",ne(67),i,.08,.08,.002,3e3),this.syn.tone(s,"square",ne(74),i+.09,.08,.08,.002,3e3),this.syn.tone(s,"triangle",ne(79),i+.18,.3,.12);break;case"magnet":{const a=this.ctx.createOscillator();a.type="sine",a.frequency.setValueAtTime(300,i),a.frequency.exponentialRampToValueAtTime(1200,i+.35);const c=this.ctx.createGain();c.gain.setValueAtTime(.15,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.4),a.connect(c).connect(s),a.start(i),a.stop(i+.45);break}case"backfire":this.syn.noiseHit(s,i,.07,.35,"lowpass",500),this.syn.tone(s,"square",55,i,.06,.12,.002,400);break;case"magnetEnd":this.syn.tone(s,"sine",600,i,.15,.08),this.syn.tone(s,"sine",400,i+.1,.2,.08);break;case"whoosh":this.syn.sweep(s,i,.18,.18*r,800*o,3e3*o);break;case"nearMiss":this.syn.sweep(s,i,.3,.25,3e3,600);break;case"jump":this.syn.tone(s,"square",220*o,i,.12,.06*r,.002,1500),this.syn.sweep(s,i,.2,.1*r,500*o,2e3*o);break;case"land":this.syn.noiseHit(s,i,.12,.3*r,"lowpass",400*o);break;case"duck":this.syn.sweep(s,i,.15,.1*r,1500*o,500*o);break;case"hit":this.syn.kick(s,i),this.syn.noiseHit(s,i,.25,.5,"bandpass",2500,2),this.syn.tone(s,"square",110,i,.15,.1,.002,900);break;case"smash":this.syn.noiseHit(s,i,.15,.35*r,"bandpass",1200*o,1.5);break;case"crash":this.syn.kick(s,i),this.syn.noiseHit(s,i,.9,.7,"lowpass",1500),this.syn.noiseHit(s,i+.05,.5,.35,"highpass",5e3),this.syn.tone(s,"sawtooth",80,i,.6,.15,.002,400);break;case"oil":this.syn.tone(s,"sawtooth",900,i,.4,.05,.01,2500),this.syn.sweep(s,i,.4,.15,2500,1800);break;case"toast":this.syn.tone(s,"square",ne(72),i,.1,.07,.002,3e3),this.syn.tone(s,"square",ne(79),i+.1,.18,.07,.002,3e3);break;case"newBest":[0,4,7,12,7,12].forEach((a,c)=>this.syn.tone(s,"square",ne(72+a),i+c*.09,.2,.08,.002,3500));break;case"tap":this.syn.tone(s,"sine",880,i,.05,.08);break;case"skid":this.syn.sweep(s,i,.45,.16*r,3200*o,1700*o,6);break;case"bump":this.syn.tone(s,"triangle",140*o,i,.1,.12*r);break}}}const xt=new Tb;function Ab(n){let t=null;const e=()=>{xt.sfx("tap"),n.go("title")},i=s=>{var o;(s.key==="ArrowLeft"||s.key==="ArrowRight")&&(s.preventDefault(),(o=t==null?void 0:t.step)==null||o.call(t,s.key==="ArrowLeft"?-1:1))};return{key(s){s==="escape"&&e()},enter(){window.addEventListener("keydown",i);const s=n.save,o={cls:s.selected.class,model:s.selected.model,colors:s.colors,riderColors:s.riderColors};n.garage.setVehicle(o.model,Ii(o.colors[o.model]),Ii(o.riderColors[o.model])),t=eb(o,{onChange:r=>{n.save.selected={class:Ia(r.model).cls,model:r.model},n.save.colors=r.colors,n.save.riderColors=r.riderColors,n.garage.setVehicle(r.model,Ii(r.colors[r.model]),Ii(r.riderColors[r.model])),n.persist()},onBack:e,onGo:()=>{xt.unlock(),xt.sfx("tap"),n.go("play")},onStageDrag:r=>n.garage.dragVelocity+=r*.6,onTap:()=>{xt.unlock(),xt.sfx("tap")}}),n.ui.replaceChildren(t),xt.playMenuMusic()},exit(){window.removeEventListener("keydown",i),t=null},frame(s){n.garage.render(n.renderer,s),n.speedLines.update(s,0,!1)}}}const Sp=1,bp=2,Yh=4,$h=8,ca=16,Yn=.5;function Rb(n){switch(n.height){case"low":return n.smashable?bp:Sp;case"overhead":return Yh;case"tall":return $h;case"flat":return ca}}function Cb(n){return n==="bike"?B.bikeHitboxLength:B.carHitboxLength}function Kh(n,t,e,i,s=.3){const o=(n.length+Cb(i))/Zy(n);return{lane:t,start:e-s,end:e+o+s,mask:Rb(n)}}function Po(n,t,e){return!(n&$h||n&Yh&&!e||n&Sp||n&bp&&t==="bike")}function Pb(n){return(n&($h|Yh))===0}function wp(n){const{agent:t,speed:e}=n,i=Math.max(1,Math.ceil((n.to-n.from)/Yn)),s=T=>Math.max(1,Math.ceil(T/Yn)),o=s(e*t.hangTime),r=Math.floor(o*.15),a=Math.ceil(o*.85),c=s(e*B.duckTime),l=s(e*t.laneChangeTime),h=s(e*B.minReactionTime),u=s(e*B.oilLockTime),f=i+Math.max(o,c,2*l)+2,d=B.laneCount,g=[];for(let T=0;T<d;T++)g.push(new Uint8Array(f));for(const T of n.footprints){if(T.end<n.from)continue;const L=Math.max(0,Math.floor((T.start-n.from)/Yn)),z=Math.min(f-1,Math.ceil((T.end-n.from)/Yn)),v=g[T.lane];for(let M=L;M<=z;M++)v[M]|=T.mask}const _=t.cls,p=new Set;let m=0;const w=n.budget??1/0,x=[],b=(T,L,z,v,M)=>(((T*3+L)*256+Math.min(z,255))*256+Math.min(v,255))*2+M,I=(T,L,z,v,M)=>{if(T>=i)return!0;const U=b(T,L,z,v,M);if(p.has(U)||++m>w)return!1;{const k=g[L][T+1];if(Po(k,_,!1)){const O=k&ca?u:Math.max(0,v-1);if(x.push({at:n.from+T*Yn,action:"stay",lane:L}),I(T+1,L,Math.max(0,z-1),O,0))return!0;x.pop()}}if((z===0||M)&&v===0)for(const k of[-1,1]){const O=L+k;if(O<0||O>=d)continue;let X=!0,H=!1;for(let q=1;q<=l&&X;q++){const mt=g[L][T+q],gt=g[O][T+q];X=Po(mt,_,!1)&&Po(gt,_,!1),gt&ca&&(H=!0)}if(!X)continue;const nt=M?Math.max(0,z-l):Math.max(0,h-l);if(x.push({at:n.from+T*Yn,action:k<0?"left":"right",lane:O}),I(T+l,O,nt,H?u:0,M?0:1))return!0;x.pop()}if(z===0){let k=!0;for(let O=1;O<=o&&k;O++){const X=g[L][T+O];k=O>r&&O<a?Pb(X):Po(X,_,!1)}if(k){if(x.push({at:n.from+T*Yn,action:"jump",lane:L}),I(T+o,L,Math.max(0,h-o),Math.max(0,v-o),0))return!0;x.pop()}if(_==="bike"){let O=!0,X=!1;for(let H=1;H<=c&&O;H++){const nt=g[L][T+H];O=Po(nt,_,!0),nt&ca&&(X=!0)}if(O){if(x.push({at:n.from+T*Yn,action:"duck",lane:L}),I(T+c,L,Math.max(0,h-c),X?u:Math.max(0,v-c),0))return!0;x.pop()}}}return p.add(U),!1};return I(0,n.startLane,Math.ceil((n.startCooldown??0)/Yn),Math.ceil((n.startLock??0)/Yn),0)?x:null}function Lb(n){for(let t=0;t<B.laneCount;t++)if(!wp({...n,startLane:t}))return!1;return!0}const Ib={stay:null,left:"left",right:"right",jump:"up",duck:"down"},Db=[1.5,.8,.35];class _d{constructor(){this.fps=[]}decide(t,e=1/60){const i=t.vehicle;if(t.crashed||i.airborne||i.changingLane||i.ducking)return null;const s=t.distance,o=t.speed,r=Math.max(90,o*4);for(const a of Db){this.fps.length=0;for(const h of t.obstacles){if(h.spent||h.knockT>=0||h.sMeet>s+r+20)continue;const u=Kh(h.def,h.lane,h.sMeet,t.model.cls,a);u.end>=s&&this.fps.push({...u,start:Math.max(u.start,Math.min(h.sMeet,s+.01))})}const c=wp({footprints:this.fps,from:s,to:s+r,speed:o,agent:t.model,startLane:i.lane,startLock:i.oilLock*o,budget:1e5});if(!c)continue;const l=c.find(h=>h.action!=="stay");return l&&l.at-s<=o*e+.25?Ib[l.action]:null}return null}}const Ub=n=>1-Math.pow(1-n,3);class Nb{constructor(t){this.lane=1,this.x=0,this.fromX=0,this.laneT=1,this.laneDir=0,this.bouncing=!1,this.prevLane=1,this.y=0,this.prevX=0,this.prevY=0,this.jumpT=-1,this.dropT=-1,this.dropFromY=0,this.duckT=-1,this.oilLock=0,this.buffered=null,this.bufferT=0,this.edgeBumpT=-1,this.edgeBumpDir=0,this.landT=-1,this.jumpStartT=-1,this.model=t,this.length=t.cls==="bike"?B.bikeHitboxLength:B.carHitboxLength,this.width=t.cls==="bike"?B.bikeHitboxWidth:B.carHitboxWidth,this.x=this.fromX=this.prevX=Ni(this.lane)}get airborne(){return this.jumpT>=0||this.dropT>=0}get changingLane(){return this.laneT<1}get ducking(){return this.duckT>=0}get height(){return this.ducking?B.duckHitboxHeight:B.hitboxHeight}get jumpProgress(){return this.jumpT>=0?this.jumpT/this.model.hangTime:-1}input(t,e){this.tryAction(t,e)||(this.buffered=t,this.bufferT=B.inputBuffer)}tryAction(t,e){switch(t){case"left":case"right":{if(this.airborne||this.changingLane||this.oilLock>0)return!1;const i=t==="left"?-1:1,s=this.lane+i;return s<0||s>=B.laneCount?(this.edgeBumpT=0,this.edgeBumpDir=i,e.push("edgeBump"),!0):(this.startLaneChange(s,i),e.push("laneChange"),!0)}case"up":return this.airborne?!1:(this.duckT=-1,this.jumpT=0,this.jumpStartT=0,e.push("jump"),!0);case"down":return this.jumpT>=0?(this.dropFromY=this.y,this.jumpT=-1,this.dropT=0,e.push("drop"),!0):this.dropT>=0?!1:(this.model.cls==="bike"&&(this.duckT=0,e.push("duck")),!0)}}startLaneChange(t,e){this.prevLane=this.lane,this.fromX=this.x,this.lane=t,this.laneT=0,this.laneDir=e,this.bouncing=!1}bounceBack(){const t=this.prevLane;this.fromX=this.x,this.laneDir=t<this.lane?-1:1,this.prevLane=this.lane,this.lane=t,this.laneT=0,this.bouncing=!0}update(t,e){if(this.prevX=this.x,this.prevY=this.y,this.laneT<1?(this.laneT=Math.min(1,this.laneT+t/this.model.laneChangeTime),this.x=this.fromX+(Ni(this.lane)-this.fromX)*Ub(this.laneT),this.laneT>=1&&(this.laneDir=0,this.bouncing=!1)):this.x=Ni(this.lane),this.jumpT>=0){this.jumpT+=t;const i=this.jumpT/this.model.hangTime;i>=1?(this.jumpT=-1,this.y=0,this.landT=0,e.push("land")):this.y=4*B.jumpPeak*i*(1-i)}else if(this.dropT>=0){this.dropT+=t;const i=this.dropT/B.fastDropTime;i>=1?(this.dropT=-1,this.y=0,this.landT=0,e.push("land")):this.y=this.dropFromY*(1-i)}this.duckT>=0&&(this.duckT+=t,this.duckT>=B.duckTime&&(this.duckT=-1)),this.oilLock>0&&(this.oilLock=Math.max(0,this.oilLock-t)),this.edgeBumpT>=0&&(this.edgeBumpT=this.edgeBumpT>.3?-1:this.edgeBumpT+t),this.landT>=0&&(this.landT=this.landT>.3?-1:this.landT+t),this.jumpStartT>=0&&(this.jumpStartT=this.jumpStartT>.2?-1:this.jumpStartT+t),this.buffered&&(this.bufferT-=t,this.tryAction(this.buffered,e)?this.buffered=null:this.bufferT<=0&&(this.buffered=null))}}function xd(n,t,e){return n.front>t&&n.front-n.length<t+e}function Md(n,t,e){return Math.abs(n.x-t)-(n.width+e)/2}function Fb(n,t,e,i){const s=e.def,o=xd(n,e.s,s.length),r=Md(n,e.x,s.width),a=r<0;if(!o)return"none";if(!a)return s.height==="tall"&&r<B.nearMissMargin?"nearMiss":"none";switch(s.height){case"tall":{const c=xd(t,e.prevS,s.length),l=Md(t,e.prevX,s.width)<0;return l&&!c?"headOn":c&&!l?"sideSwipe":Math.abs(n.x-e.x)<(n.width+s.width)/4?"headOn":"sideSwipe"}case"low":return n.y>=B.lowHeight?"none":i==="car"&&s.smashable?"smash":"low";case"overhead":return n.y+n.height>B.overheadClearance?"overhead":"none";case"flat":return n.y<.05?"oil":"none"}}function er(n){const t=B.startSpeed+(B.maxSpeed-B.startSpeed)*(1-Math.exp(-Math.max(0,n)/B.speedCurveK));return Math.min(B.maxSpeed,t)}function nr(n){let t=1;for(let e=0;e<B.tierBounds.length;e++)n>=B.tierBounds[e]&&(t=e+1);return t}function Ob(n){return B.tierWeights[n-1]}function ka(n){return Math.max(B.minReactionDistance,n*B.minReactionTime)}function kb(n,t=1){const e=B.tierGaps[nr(n)-1]*(n<B.forgivenessDistance?2:1)*t;return Math.max(e,B.minLeadIn*ka(er(n)))}function Bb(n){return Math.max(1,ka(n)/B.patternReferenceSpacing)}const zb=[{id:"t1-cone-gap-mid",tier:1,rows:[{z:0,lanes:["cone",".","cone"]}],gears:[{lane:1,z:-10,count:6}]},{id:"t1-cone-left",tier:1,rows:[{z:0,lanes:["cone",".","."]}],gears:[{lane:0,z:0,count:5,arc:!0}]},{id:"t1-cone-right",tier:1,rows:[{z:0,lanes:[".",".","cone"]}],gears:[{lane:1,z:-6,count:5}]},{id:"t1-crate-mid",tier:1,rows:[{z:0,lanes:[".","crate","."]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t1-barrier-sides",tier:1,rows:[{z:0,lanes:["barrier",".","barrier"]}],gears:[{lane:1,z:-8,count:6}]},{id:"t1-barrier-mid",tier:1,rows:[{z:0,lanes:[".","barrier","."]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t1-zigzag",tier:1,rows:[{z:0,lanes:["cone","cone","."]},{z:16,lanes:[".","cone","cone"]}],gears:[{lane:2,z:-4,count:3},{lane:0,z:14,count:4}]},{id:"t1-crates-pair",tier:1,rows:[{z:0,lanes:["crate","crate","."]}],gears:[{lane:2,z:-6,count:5}]},{id:"t1-barrier-full",tier:1,rows:[{z:0,lanes:["barrier","barrier","barrier"]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t1-slalom",tier:1,rows:[{z:0,lanes:[".","cone","."]},{z:14,lanes:["cone",".","cone"]},{z:28,lanes:[".","cone","."]}],gears:[{lane:1,z:10,count:3}]},{id:"t1-crate-then-barrier",tier:1,rows:[{z:0,lanes:["crate",".","crate"]},{z:16,lanes:[".","barrier","."]}],gears:[{lane:1,z:16,count:5,arc:!0}]},{id:"t2-parked-left",tier:2,rows:[{z:0,lanes:["parked",".","."]}],gears:[{lane:1,z:-4,count:7}]},{id:"t2-parked-cones",tier:2,rows:[{z:0,lanes:[".","parked","."]},{z:16,lanes:["cone",".","cone"]}],gears:[{lane:0,z:16,count:5,arc:!0}]},{id:"t2-pipe-mid",tier:2,rows:[{z:0,lanes:[".","pipe","."]}],gears:[{lane:1,z:-6,count:5,low:!0}]},{id:"t2-pipe-full",tier:2,only:"bike",rows:[{z:0,lanes:["pipe","pipe","pipe"]}],gears:[{lane:1,z:-4,count:4,low:!0}]},{id:"t2-pipe-two",tier:2,rows:[{z:0,lanes:["pipe","pipe","."]}],gears:[{lane:2,z:-6,count:5}]},{id:"t2-parked-two",tier:2,rows:[{z:0,lanes:["parked",".","parked"]}],gears:[{lane:1,z:-6,count:8}]},{id:"t2-parked-barrier",tier:2,rows:[{z:0,lanes:["parked","barrier","."]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t2-staggered",tier:2,rows:[{z:0,lanes:["parked",".","."]},{z:16,lanes:[".",".","parked"]},{z:32,lanes:[".","parked","."]}],gears:[{lane:1,z:0,count:5}]},{id:"t2-pipe-cones",tier:2,rows:[{z:0,lanes:[".","pipe","pipe"]},{z:16,lanes:["cone",".","."]}],gears:[{lane:0,z:-4,count:4}]},{id:"t3-oil-cones",tier:3,rows:[{z:0,lanes:["cone","oil","cone"]}],gears:[{lane:1,z:-4,count:6}]},{id:"t3-slow-mid",tier:3,rows:[{z:0,lanes:[".","slow","."]}],gears:[{lane:0,z:-4,count:6}]},{id:"t3-truck-left",tier:3,rows:[{z:0,lanes:["truck",".","."]}],gears:[{lane:1,z:-2,count:8}]},{id:"t3-truck-cones",tier:3,rows:[{z:0,lanes:[".","cone","truck"]}],gears:[{lane:1,z:0,count:5,arc:!0}]},{id:"t3-slow-two",tier:3,rows:[{z:0,lanes:["slow",".","slow"]}],gears:[{lane:1,z:-4,count:8}]},{id:"t3-truck-parked",tier:3,rows:[{z:0,lanes:["truck",".","parked"]}],gears:[{lane:1,z:0,count:6}]},{id:"t3-oil-slow",tier:3,rows:[{z:0,lanes:[".","oil","."]},{z:18,lanes:["slow",".","slow"]}],gears:[{lane:1,z:4,count:6}]},{id:"t3-pipe-truck",tier:3,rows:[{z:0,lanes:["truck","pipe","."]}],gears:[{lane:2,z:-4,count:6}]},{id:"t4-wall-left2",tier:4,rows:[{z:0,lanes:["wall","wall","."]}],gears:[{lane:2,z:-6,count:6}]},{id:"t4-wall-right2",tier:4,rows:[{z:0,lanes:[".","wall","wall"]}],gears:[{lane:0,z:-6,count:6}]},{id:"t4-wall-barriers",tier:4,rows:[{z:0,lanes:[".","wall","."]},{z:16,lanes:["barrier",".","barrier"]}],gears:[{lane:0,z:16,count:5,arc:!0}]},{id:"t4-corridor",tier:4,rows:[{z:0,lanes:["wall",".","wall"]},{z:16,lanes:["truck",".","truck"]}],gears:[{lane:1,z:-2,count:10}]},{id:"t4-chicane",tier:4,rows:[{z:0,lanes:["wall","wall","."]},{z:20,lanes:[".","wall","wall"]}],gears:[{lane:2,z:-4,count:3},{lane:0,z:14,count:4}]},{id:"t4-wall-slow",tier:4,rows:[{z:0,lanes:[".","wall","."]},{z:16,lanes:["slow",".","."]}],gears:[{lane:2,z:0,count:6}]},{id:"t4-pipe-wall",tier:4,rows:[{z:0,lanes:["pipe","wall","."]}],gears:[{lane:0,z:-4,count:4,low:!0}],only:"bike"},{id:"t4-wall-pipe-car",tier:4,rows:[{z:0,lanes:["wall","pipe","."]}],gears:[{lane:2,z:-4,count:5}],only:"car"},{id:"t4-parked-oil",tier:4,rows:[{z:0,lanes:["parked","oil","parked"]}],gears:[{lane:1,z:-6,count:6}]},{id:"t5-switch-mid",tier:5,rows:[{z:0,lanes:[".","sw<","."]}],gears:[{lane:2,z:-4,count:6}]},{id:"t5-switch-wall",tier:5,rows:[{z:0,lanes:["wall","sw>","."]}],gears:[{lane:2,z:0,count:5}]},{id:"t5-switch-edge",tier:5,rows:[{z:0,lanes:["sw>",".","."]}],gears:[{lane:2,z:-4,count:6}]},{id:"t5-truck-switch",tier:5,rows:[{z:0,lanes:["truck",".","sw<"]}],gears:[{lane:1,z:0,count:6}]},{id:"t5-gauntlet-bike",tier:5,only:"bike",rows:[{z:0,lanes:["wall",".","wall"]},{z:20,lanes:["slow","pipe","slow"]}],gears:[{lane:1,z:2,count:6,low:!0}]},{id:"t5-gauntlet-car",tier:5,only:"car",rows:[{z:0,lanes:["wall",".","wall"]},{z:20,lanes:["slow",".","barrier"]}],gears:[{lane:1,z:2,count:8}]},{id:"t5-mixed",tier:5,rows:[{z:0,lanes:["cone","truck","."]},{z:22,lanes:[".",".","wall"]}],gears:[{lane:2,z:-4,count:4}]},{id:"t5-switch-oil",tier:5,rows:[{z:0,lanes:["oil","sw<","."]}],gears:[{lane:2,z:-2,count:6}]},{id:"t5-jam",tier:5,rows:[{z:0,lanes:["slow","slow","."]},{z:24,lanes:[".","slow","slow"]}],gears:[{lane:2,z:-4,count:4}]}],Zs=.7,Hb=4,yd=new Map;function Ep(n,t,e,i){const s=Bb(e),o=[];let r=t;for(const l of n.rows)l.lanes.forEach((h,u)=>{if(h===".")return;let f=h,d=u;(h==="sw<"||h==="sw>")&&(f="switcher",d=u+(h==="sw<"?-1:1));const g=t+l.z*s;o.push({kind:f,lane:u,fromLane:d,sMeet:g}),r=Math.max(r,Kh(cr[f],u,g,i.cls,0).end)});const a=[],c=B.gearSpacing*Math.sqrt(s);for(const l of n.gears)if(l.arc){const h=e*i.hangTime,u=t+l.z*s+.5;for(let f=0;f<l.count;f++){const d=(f+.5)/l.count,g=4*B.jumpPeak*d*(1-d)+Zs;a.push({kind:"gear",lane:l.lane,s:u-h/2+d*h,y:g})}}else for(let h=0;h<l.count;h++)a.push({kind:"gear",lane:l.lane,s:t+l.z*s+h*c,y:l.low?.45:Zs});return{pattern:n,obstacles:o,gears:a,end:r}}function Gb(n,t){return n.obstacles.map(e=>Kh(cr[e.kind],e.lane,e.sMeet,t.cls))}function Vb(n,t,e){const i=`${n.id}|${e.id}|${Math.round(t)}`,s=yd.get(i);if(s!==void 0)return s;const o=B.minLeadIn*ka(t),r=Ep(n,o,t,e),a=Lb({footprints:Gb(r,e),from:0,to:r.end+2,speed:t,agent:e,startCooldown:t*B.minReactionTime});return yd.set(i,a),a}class Wb{constructor(t,e,i=0){this.model=e,this.biomeOffset=i,this.obstacles=[],this.pickups=[],this.gaps=[],this.placed=[],this.breathers=[],this.head=B.firstPatternAt,this.pf=0,this.nextId=1,this.lastWrenchAt=-1/0,this.lastBreatherEnd=0,this.rng=new qn(t),this.scatterRng=new qn(t^97155045),this.nextBreather=this.rng.range(B.breatherIntervalMin,B.breatherIntervalMax),this.nextGolden=B.goldenGearEvery*this.rng.range(.6,1.2),this.nextMagnet=B.tierBounds[1]+this.rng.range(50,300),this.gaps.push({start:0,end:this.head})}fill(t){for(this.pf=t;this.head<t+B.generateAhead;)this.step()}recycle(t){const e=t-30;let i=0;for(const s of this.obstacles)(s.def.moving?s.sMeet>e-120:s.s+s.def.length>e)&&(this.obstacles[i++]=s);this.obstacles.length=i,i=0;for(const s of this.pickups)s.s>e&&(this.pickups[i++]=s);this.pickups.length=i,i=0;for(const s of this.gaps)s.end>e&&(this.gaps[i++]=s);this.gaps.length=i}placeWrench(t,e=40,i=B.wrenchAfterHit){const s=this.gaps.filter(c=>{const l=(c.start+c.end)/2;return c.end-c.start>=6&&l>=t+e&&l<=t+i});if(s.length===0)return!1;const o=s.filter(c=>(c.start+c.end)/2>=this.lastWrenchAt+B.wrenchMinSpacing),r=(o.length?o:s)[0],a=this.freeSpot(this.rng.int(0,2),(r.start+r.end)/2,r);return a?(this.addPickup("wrench",a.lane,a.s,Zs+.2),this.lastWrenchAt=a.s,!0):!1}step(){const t=this.head,e=vf(t,this.biomeOffset);if(t>=e.start){this.placeBreather(t,e.end);return}if(t>=Math.min(this.nextBreather,this.lastBreatherEnd+B.breatherIntervalMax-120)){this.placeBreather(t);return}const i=kb(t,this.rng.range(.85,1.2)),s=t+i,o=er(s),r=this.choosePattern(s,o);if(!r){const c=Math.min(s+20,e.start);this.recordGap(t,c),this.head=c;return}const a=Ep(r,s,o,this.model);if(a.end+1>e.start){this.recordGap(t,e.start-1),this.head=e.start;return}for(const c of a.obstacles)this.addObstacle(c);for(const c of a.gears)this.addPickup(c.kind,c.lane,c.s,c.y);this.recordGap(t,s-1),this.placed.push(a),this.head=a.end+1}choosePattern(t,e){const i=t<B.forgivenessDistance?1:nr(t),s=Ob(i),o=this.model.cls;for(let r=0;r<8;r++){const a=this.rng.weighted([1,2,3,4,5],h=>s[h-1]),c=zb.filter(h=>h.tier===a&&(!h.only||h.only===o));if(c.length===0)continue;const l=this.rng.pick(c);if(Vb(l,e,this.model))return l}return null}placeBreather(t,e){let i=e!==void 0?e-t:this.rng.range(B.breatherLengthMin,B.breatherLengthMax);const s=vf(t,this.biomeOffset);t+i>s.start&&(i=s.end-t);let o=this.rng.int(0,2);for(let r=t+8;r<t+i-8;r+=B.gearSpacing)this.rng.chance(.06)&&(o=Math.max(0,Math.min(2,o+(this.rng.chance(.5)?1:-1)))),this.addPickup("gear",o,r,Zs);this.breathers.push({start:t,end:t+i}),this.gaps.push({start:t,end:t+i}),this.head=t+i,this.lastBreatherEnd=this.head,this.nextBreather=this.head+this.rng.range(B.breatherIntervalMin,B.breatherIntervalMax)}recordGap(t,e){if(e-t<4)return;this.gaps.push({start:t,end:e});const i=(t+e)/2,s=nr(i);if(i>=this.nextGolden){this.addSpecial("golden",i,t,e),this.nextGolden=i+B.goldenGearEvery*this.rng.range(.8,1.2);return}if(s>=2&&i>=this.nextMagnet){this.addSpecial("magnet",i,t,e),this.nextMagnet=i+B.magnetEvery*this.rng.range(.85,1.15);return}const o=e-ka(er(e));if(this.rng.chance(.45)&&o-t>8){const r=this.rng.int(0,2);for(let a=t+3;a<o;a+=B.gearSpacing)this.addPickup("gear",r,a,Zs)}}addSpecial(t,e,i,s){const o=this.freeSpot(this.rng.int(0,2),e,{start:i,end:s});o&&this.addPickup(t,o.lane,o.s,Zs+.2)}freeSpot(t,e,i){const s=[t,(t+1)%3,(t+2)%3];for(const o of[0,5,-5,10,-10]){const r=e+o;if(!(r<i.start+2||r>i.end-2)){for(const a of s)if(!this.pickups.some(c=>c.lane===a&&!c.taken&&Math.abs(c.s-r)<Hb))return{lane:a,s:r}}}return null}addObstacle(t){const e=cr[t.kind],i=Ni(t.fromLane)+this.scatterRng.range(-1,1)*e.scatter.dx,s={id:this.nextId++,def:e,lane:t.lane,fromLane:t.fromLane,sMeet:t.sMeet,s:0,x:i,prevS:0,prevX:i,blinker:!1,spent:!1,knockT:-1,knockDir:1,yaw:this.scatterRng.range(-1,1)*e.scatter.yaw};s.s=s.prevS=Y0(s,this.pf),this.obstacles.push(s)}addPickup(t,e,i,s){const o=Ni(e);this.pickups.push({id:this.nextId++,kind:t,lane:e,s:i,x:o,y:s,prevS:i,prevX:o,prevY:s,taken:!1,attracted:!1,takenT:-1})}}function Sd(n,t){const e=Math.max(0,(t-B.hitSlowHold)/(1-B.hitSlowHold));return n+(1-n)*e*e*(3-2*e)}function bd(n,t,e){return t>=n?n<e&&t>=e:n<e||t>=e}class Xb{constructor(t){this.speed=B.startSpeed,this.hp=B.maxHp,this.gears=0,this.tier=1,this.leg=0,this.hour=8,this.invulnerable=0,this.sinceHit=99,this.smashT=0,this.magnetT=0,this.crashed=!1,this.crashCause=null,this.time=0,this.god=!1,this.bestPassed=!1,this.gearChain=0,this.sinceGear=99,this.nearMissed=new Set,this.breatherIdx=0,this.vEvents=[],this.events=[],this.model=t.model,this.seed=t.seed,this.bestAtStart=t.bestDistance,this.god=!!t.god,this.biomeOffset=t.biomeOffset??0,this.vehicle=new Nb(t.model),this.gen=new Wb(t.seed,t.model,this.biomeOffset),this.distance=this.prevDistance=t.startDistance??0,this.leg=Cn(this.distance,this.biomeOffset),this.hour=ql(this.distance,this.biomeOffset),this.distance>0&&(this.gen.head=this.distance+40,this.tier=nr(this.distance)),this.gen.fill(this.distance),this.box=this.makeBox(),this.prevBox={...this.box}}get biome(){return nn(this.leg).id}get obstacles(){return this.gen.obstacles}get pickups(){return this.gen.pickups}input(t){this.crashed||(this.vehicle.input(t,this.vEvents),this.flushVehicleEvents())}get slowFactor(){let t=1;return this.sinceHit<B.hitSlowRecover&&(t*=Sd(B.hitSlowFactor,this.sinceHit/B.hitSlowRecover)),this.smashT>0&&(t*=Sd(B.smashSlowFactor,1-this.smashT/B.smashSlowTime)),t}update(t){this.crashed||(this.time+=t,this.sinceHit+=t,this.sinceGear+=t,this.invulnerable=Math.max(0,this.invulnerable-t),this.smashT=Math.max(0,this.smashT-t),this.magnetT>0&&(this.magnetT-=t,this.magnetT<=0&&(this.magnetT=0,this.events.push({type:"magnetEnd"}))),this.speed=er(this.distance)*this.slowFactor,this.prevDistance=this.distance,this.distance+=this.speed*t,this.vehicle.update(t,this.vEvents),this.flushVehicleEvents(),this.gen.fill(this.distance),this.gen.recycle(this.distance),this.updateObstacles(t),this.prevBox.front=this.box.front,this.prevBox.x=this.box.x,this.prevBox.y=this.box.y,this.prevBox.height=this.box.height,this.writeBox(this.box),this.collide(),!this.crashed&&(this.updatePickups(t),this.updateWrench(),this.updateProgress()))}makeBox(){const t={front:0,length:this.vehicle.length,x:0,width:this.vehicle.width,y:0,height:0};return this.writeBox(t),t}writeBox(t){t.front=this.distance,t.x=this.vehicle.x,t.y=this.vehicle.y,t.height=this.vehicle.height}updateObstacles(t){const e=er(this.distance);for(const i of this.gen.obstacles)if(i.knockT>=0&&(i.knockT+=t),i.prevS=i.s,i.prevX=i.x,i.s=Y0(i,this.distance),i.def.kind==="switcher"){const s=Jy(i.sMeet,this.distance,e),o=s.p*s.p*(3-2*s.p);i.x=Ni(i.fromLane)+(Ni(i.lane)-Ni(i.fromLane))*o,i.blinker=s.blinker}}collide(){const t=this.model.cls;for(const e of this.gen.obstacles){if(e.spent||e.knockT>=0||e.s>this.distance+1||e.s+e.def.length<this.distance-this.vehicle.length-1)continue;switch(Fb(this.box,this.prevBox,e,t)){case"none":break;case"nearMiss":this.nearMissed.has(e.id)||(this.nearMissed.add(e.id),this.events.push({type:"nearMiss"}));break;case"headOn":if(this.god)break;this.crash("headOn");return;case"sideSwipe":if(e.spent=!0,this.vehicle.bounceBack(),this.damage("sideSwipe"),this.crashed)return;break;case"low":if(e.knockT=0,e.knockDir=this.vehicle.x<=e.x?1:-1,this.damage("low"),this.crashed)return;break;case"smash":e.knockT=0,e.knockDir=this.vehicle.x<=e.x?1:-1,this.model.smashNoSlow||(this.smashT=B.smashSlowTime),this.events.push({type:"smash",kind:e.def.kind});break;case"overhead":if(e.spent=!0,this.damage("overhead"),this.crashed)return;break;case"oil":e.spent=!0,this.vehicle.oilLock=B.oilLockTime,this.events.push({type:"oil"});break}}}damage(t){this.invulnerable>0||this.god||(this.hp-=1,this.invulnerable=B.invulnerableTime,this.sinceHit=0,this.events.push({type:"hit",hp:this.hp,kind:t}),this.hp<=0&&this.crash("hp"))}crash(t){this.crashed=!0,this.crashCause=t,this.events.push({type:"crash",cause:t})}updatePickups(t){const e=this.vehicle,i=this.distance-e.length/2,s=e.y+.6,o=B.pickupRadius+this.model.magnetBonus,r=1-Math.exp(-14*t);for(const a of this.gen.pickups){if(a.taken){a.takenT>=0&&(a.takenT+=t);continue}if(a.prevS=a.s,a.prevX=a.x,a.prevY=a.y,a.kind==="wrench"&&this.hp>=B.maxHp)continue;const c=a.s-i;if(c>12||c<-8)continue;if(this.magnetT>0&&(a.kind==="gear"||a.kind==="golden")){const f=a.x-e.x,d=a.y-s;(a.attracted||f*f+d*d+c*c<B.magnetRadius*B.magnetRadius)&&(a.attracted=!0,a.s+=(i-a.s)*r,a.x+=(e.x-a.x)*r,a.y+=(s-a.y)*r)}const l=Math.max(0,Math.abs(a.s-i)-e.length/2),h=a.x-e.x,u=a.y-s;l*l+h*h+u*u<=o*o&&this.collect(a)}}collect(t){switch(t.taken=!0,t.takenT=0,t.kind){case"gear":this.gearChain=this.sinceGear<=.5?this.gearChain+1:0,this.sinceGear=0,this.gears+=1,this.events.push({type:"gear",n:1,chain:this.gearChain});break;case"golden":this.gears+=10,this.events.push({type:"golden"});break;case"wrench":this.hp=Math.min(B.maxHp,this.hp+1),this.events.push({type:"wrench",hp:this.hp});break;case"magnet":this.magnetT=B.magnetDuration,this.events.push({type:"magnet"});break}}updateWrench(){let t=!1;for(const e of this.gen.pickups)e.kind!=="wrench"||e.taken||(this.hp>=B.maxHp?(e.taken=!0,e.takenT=-1):e.s>this.distance-2&&(t=!0));!t&&this.hp<B.maxHp&&this.gen.placeWrench(this.distance)}updateProgress(){const t=nr(this.distance);t!==this.tier&&(this.tier=t,this.events.push({type:"tier",tier:t}));const e=Cn(this.distance,this.biomeOffset);e!==this.leg&&(this.leg=e,this.events.push({type:"biome",id:nn(e).id}));const i=ql(this.distance,this.biomeOffset);bd(this.hour,i,Kx)&&this.events.push({type:"daytime",id:"nightFalls"}),bd(this.hour,i,jx)&&this.events.push({type:"daytime",id:"sunrise"}),this.hour=i,!this.bestPassed&&this.bestAtStart>0&&this.distance>this.bestAtStart&&(this.bestPassed=!0,this.events.push({type:"bestPassed"}));const s=this.gen.breathers;for(;this.breatherIdx<s.length&&s[this.breatherIdx].start<=this.distance;)this.breatherIdx++,this.events.push({type:"breather"})}flushVehicleEvents(){for(const t of this.vEvents)this.events.push({type:"vehicle",e:t});this.vEvents.length=0}}const jh=4,Tp="gearRush.save",wd={1:n=>({...n,v:2,riderColors:{}}),2:n=>{const t=n.riderColors&&typeof n.riderColors=="object"?n.riderColors:{};return{...n,v:3,riderColors:Object.fromEntries(Object.entries(t).filter(([e])=>{var i;return((i=vs.find(s=>s.id===e))==null?void 0:i.cls)==="bike"}))}},3:n=>({...n,v:4,biomeVisits:{}})};let ch=!1;function Ap(){const n={},t={};for(const e of vs)n[e.id]=e.defaultColor,t[e.id]=e.defaultSecond;return{v:jh,bestDistance:0,gearBank:0,selected:{class:"bike",model:"viper"},colors:n,riderColors:t,settings:{music:!0,sfx:!0,haptics:!0,reducedMotion:!1,lang:"auto"},stats:{runs:0,totalDistance:0},biomeVisits:Object.fromEntries(wn.map(e=>[e.id,0]))}}function lh(n){return typeof n.v=="number"&&Number.isInteger(n.v)&&n.v>=1?n.v:1}function qb(n){const t=Ap();if(!n||typeof n!="object")return t;let e=n;for(let c=lh(e);c<jh&&wd[c];c=lh(e))e=wd[c](e);const i=e,s=(c,l)=>typeof c=="number"&&Number.isFinite(c)&&c>=0?c:l;t.bestDistance=s(i.bestDistance,0),t.gearBank=s(i.gearBank,0);const o=i.selected,r=vs.find(c=>c.id===(o==null?void 0:o.model));r&&(t.selected={class:r.cls,model:r.id});const a=(c,l)=>{if(!(!c||typeof c!="object"))for(const h of vs){const u=c[h.id];typeof u=="number"&&u>=1&&u<=8&&(l[h.id]=Math.floor(u))}};if(a(i.colors,t.colors),a(i.riderColors,t.riderColors),i.settings&&typeof i.settings=="object"){const c=i.settings;for(const l of["music","sfx","haptics","reducedMotion"])typeof c[l]=="boolean"&&(t.settings[l]=c[l]);(c.lang==="en"||c.lang==="pl"||c.lang==="auto")&&(t.settings.lang=c.lang)}if(i.stats&&typeof i.stats=="object"){const c=i.stats;t.stats.runs=s(c.runs,0),t.stats.totalDistance=s(c.totalDistance,0)}if(i.biomeVisits&&typeof i.biomeVisits=="object"){const c=i.biomeVisits;for(const l of wn)t.biomeVisits[l.id]=Math.floor(s(c[l.id],0))}return t}function Yb(){ch=!1;try{const n=localStorage.getItem(Tp),t=n?JSON.parse(n):null;return t&&typeof t=="object"&&lh(t)>jh&&(ch=!0),qb(t)}catch{return Ap()}}function Ed(n){if(!ch)try{localStorage.setItem(Tp,JSON.stringify(n))}catch{}}function $b(n,t){return n.biomeVisits[t]+=1}function Kb(n,t,e){const i=Math.floor(t),s=i>n.bestDistance;return s&&(n.bestDistance=i),n.gearBank+=e,n.stats.runs+=1,n.stats.totalDistance+=i,s}const hh=19,Td=2*Math.PI*hh,jb=1500,Zb=3600;class Jb{constructor(t,e){this.hpIcons=[],this.signUntil=0,this.signQueue=[],this.lastDist=-1,this.lastGears=-1,this.lastHp=-1,this.toastQueue=[],this.toastUntil=0,this.distNum=document.createTextNode("0"),this.distEl=J("div",{class:"dist"},this.distNum,J("small",{},"m")),this.gearsNum=document.createTextNode("0"),this.gearsEl=J("div",{class:"gears"},$e.gear(),this.gearsNum),this.hpEl=J("div",{class:"hp"});for(let a=0;a<B.maxHp;a++){const c=$e.wrench();this.hpIcons.push(c),this.hpEl.append(c)}const i=J("div",{class:"ring"});i.append($e.magnet());const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 46 46"),s.innerHTML=`<circle cx="23" cy="23" r="${hh}" fill="rgba(20,28,44,.55)" stroke="rgba(255,255,255,.25)" stroke-width="4"/><circle cx="23" cy="23" r="${hh}" fill="none" stroke="#5aa9ff" stroke-width="4" stroke-linecap="round" transform="rotate(-90 23 23)" stroke-dasharray="${Td}" stroke-dashoffset="0"/>`,i.prepend(s),i.querySelector("svg:last-child").setAttribute("style","position:absolute;inset:11px;width:24px;height:24px"),this.ringArc=s.querySelectorAll("circle")[1],this.powerEl=J("div",{class:"power",style:"visibility:hidden"},i);const r=J("button",{class:"btn icon ghost pause","aria-label":Nt("paused"),onclick:()=>t()},$e.pause());this.toastEl=J("div",{class:"toast"}),this.countEl=J("div",{class:"countdown"}),this.hintEl=J("div",{class:"start-hint hint"},Nt(e?"hint":"hintKeys")),this.signName=document.createTextNode(""),this.signPop=document.createTextNode(""),this.signEl=J("div",{class:"sign","aria-live":"polite"},J("small",{},Nt("welcome")),J("b",{},this.signName),J("small",{},this.signPop)),this.el=J("div",{class:"screen passthrough hud"},J("div",{class:"top"},J("div",{class:"left"},this.gearsEl,this.hpEl),J("div",{},this.distEl,this.powerEl),J("div",{class:"right"},r)),this.toastEl,this.signEl,this.countEl,this.hintEl)}reset(){this.lastDist=this.lastGears=this.lastHp=-1,this.setDistance(0),this.setGears(0,!1),this.setHp(B.maxHp),this.setMagnet(0),this.hintEl.style.opacity="1",this.countEl.textContent="",this.toastQueue.length=0,this.toastUntil=0,this.signQueue.length=0,this.signUntil=0,this.signEl.className="sign"}hideHint(){this.hintEl.style.opacity="0"}setDistance(t){const e=Math.floor(t);e!==this.lastDist&&(this.lastDist=e,this.distNum.data=fi(e))}setGears(t,e){t!==this.lastGears&&(this.lastGears=t,this.gearsNum.data=fi(t),e&&(this.gearsEl.classList.remove("pop"),this.gearsEl.offsetWidth,this.gearsEl.classList.add("pop")))}setHp(t){if(t===this.lastHp)return;const e=this.lastHp;this.lastHp=t,this.hpIcons.forEach((i,s)=>{const o=s>=t;i.classList.toggle("lost",o),i.classList.remove("crack"),e>=0&&(o&&s<e||!o&&s>=e)&&(i.getBoundingClientRect(),i.classList.add("crack"))})}setMagnet(t){this.powerEl.style.visibility=t>0?"visible":"hidden",t>0&&this.ringArc.setAttribute("stroke-dashoffset",String(Td*(1-t/B.magnetDuration)))}toast(t,e=!1){if(e&&performance.now()<this.toastUntil){this.toastQueue.push(t);return}this.toastUntil=performance.now()+jb,this.toastEl.textContent=t,this.toastEl.classList.remove("show"),this.toastEl.offsetWidth,this.toastEl.classList.add("show")}sign(t,e,i,s){const o=()=>{this.signUntil=performance.now()+Zb,this.signName.data=e,this.signPop.data=`${Nt("population")} ${fi(i)}`,this.signEl.className=`sign ${t}${s?" still":""}`,this.signEl.offsetWidth,this.signEl.classList.add("show")};performance.now()<this.signUntil?this.signQueue.push(o):o()}tick(){const t=performance.now();this.toastQueue.length&&t>=this.toastUntil&&this.toast(this.toastQueue.shift()),this.signQueue.length&&t>=this.signUntil&&this.signQueue.shift()()}tierPop(){this.distEl.classList.remove("tierpop"),this.distEl.offsetWidth,this.distEl.classList.add("tierpop")}countdown(t){this.countEl.innerHTML="",t>0&&this.countEl.append(J("span",{},String(t)))}}const Qb={1:null,2:"tier2",3:"tier3",4:"tier4",5:"tier5"},Ad=B.crashSlowMoTime,tw=ma(0);function ew(n){if(n===null)return;const t=wn.findIndex(i=>i.id===n);if(t>=0)return t;const e=Number(n);return Number.isInteger(e)&&e>=0&&e<wn.length?e:void 0}function nw(n){let t,e,i=null,s=0,o=!1,r=0,a=0,c=-1,l=1,h=!1,u=0,f=0,d=null,g=0,_=!1,p=!1;const m=n.dev||n.params.has("debug"),w=(v={})=>{const M=n.params.get("seed");u=v.seed??(M?Number(M)>>>0:yf());const U=v.night??n.params.has("night"),k=v.biome??ew(n.params.get("biome"))??(U?0:void 0),O=k!==void 0?Vx(k,v.startDistance,U?1:0):0;_=U,p=!!v.startDistance||n.params.has("bot")||O!==0;const X=Ia(n.save.selected.model);t=new Xb({seed:u,model:X,bestDistance:n.save.bestDistance,god:h,startDistance:v.startDistance,biomeOffset:O}),n.view.setVehicle(X.id,Ii(n.save.colors[X.id]),Ii(n.save.riderColors[X.id])),n.view.beginRun(t),e=new Jb(I,n.touch),e.reset(),n.ui.replaceChildren(e.el),s=0,o=!1,r=0,a=0,c=-1,f=0,d=null,n.input.enabled=!0,i=n.params.has("bot")?new _d:null,xt.unlock(),xt.resume(),xt.duck(!1),xt.playGameMusic(x()),xt.startEngine(X.engine),v.startDistance&&xt.setTier(t.tier),b(t.biome)};function x(){return`${Wl(t.biome).main}:${ma(t.hour,tw).night>.5?"night":"day"}`}function b(v){const M=Wl(v),U=p?n.save.biomeVisits[v]:$b(n.save,v);p||n.persist(),e.sign(M.main,Nt(M.name),U,n.save.settings.reducedMotion)}function I(){o||c>=0||!t||(o=!0,r=0,e.countdown(0),n.input.enabled=!1,xt.suspend(),d=nb({onResume:C,onRestart:()=>{xt.resume(),xt.sfx("tap"),w()},onHome:()=>{xt.resume(),xt.sfx("tap"),xt.stopEngine(),n.go("title")},onSettings:()=>{xt.resume(),xt.sfx("tap"),xt.suspend(),n.openSettings(()=>{d&&(n.ui.append(d),lo(d))})}}),n.ui.append(d),lo(d))}function C(){o&&(xt.resume(),xt.sfx("tap"),d==null||d.remove(),d=null,o=!1,r=1.5,g=0,n.input.enabled=!0)}const T={laneChange:"whoosh",edgeBump:"bump",jump:"jump",land:"land",duck:"duck",drop:"whoosh"},L=v=>{switch(v.type){case"vehicle":{const M=T[v.e];M&&xt.sfx(M),v.e==="land"&&(n.view.dust(),n.view.chase.addTrauma(B.traumaLand)),v.e==="edgeBump"&&n.haptic(10);break}case"hit":xt.sfx("hit"),xt.sfx("skid"),n.view.dust(),a=B.hitStop,n.view.chase.addTrauma(B.traumaHit),n.vignette(),n.haptic(40),e.setHp(v.hp),n.view.setDamage(B.maxHp-v.hp),xt.setEngineDamage(B.maxHp-v.hp);break;case"smash":xt.sfx("smash"),n.view.smashBits(t.vehicle.x,t,v.kind),n.view.chase.addTrauma(B.traumaSmash);break;case"oil":xt.sfx("oil"),n.view.chase.wobble(B.oilLockTime);break;case"nearMiss":xt.sfx("nearMiss"),n.speedLines.burst();break;case"crash":{xt.sfx("crash"),xt.duck(!0),xt.stopEngine(),n.view.debris(),n.view.wreck(),n.view.chase.addTrauma(B.traumaCrash),n.vignette(),n.haptic(120),e.setHp(0),c=0,n.input.enabled=!1;break}case"gear":xt.sfx("gear",v.chain),e.setGears(t.gears,!0),n.view.sparkAtVehicle("#ffc93c",6,1),v.chain>0&&v.chain%5===0&&n.haptic(15);break;case"golden":xt.sfx("golden"),e.setGears(t.gears,!0),n.view.sparkAtVehicle("#fff1a8",24,1.2),n.haptic(15);break;case"wrench":xt.sfx("wrench"),e.setHp(v.hp),n.view.setDamage(B.maxHp-v.hp),xt.setEngineDamage(B.maxHp-v.hp),e.toast(Nt("repaired")),n.view.sparkAtVehicle("#3ddc84",18,1);break;case"magnet":xt.sfx("magnet"),e.toast(Nt("magnet")),n.view.sparkAtVehicle("#5aa9ff",18,1);break;case"magnetEnd":xt.sfx("magnetEnd");break;case"tier":{const M=Qb[v.tier];M&&e.toast(Nt(M)),xt.sfx("toast"),xt.setTier(v.tier),e.tierPop();break}case"biome":b(v.id);break;case"daytime":e.toast(Nt(v.id),!0);break;case"bestPassed":xt.sfx("newBest"),e.toast(Nt("bestPassed")),n.view.confetti(),n.haptic(30);break}},z=v=>{if(!m||!t)return;const M=v.key.toLowerCase();if(M>="1"&&M<="5"){const U=Number(M);w({startDistance:B.tierBounds[U-1]+(U>1?5:0),seed:u})}else M==="g"?(h=!h,t.god=h,e.toast(h?"GOD ON":"GOD OFF")):M==="+"||M==="="?(l=Math.min(4,l*1.5),e.toast(`x${l.toFixed(2)}`)):M==="-"?(l=Math.max(.1,l/1.5),e.toast(`x${l.toFixed(2)}`)):M==="r"?w({seed:yf()}):M==="b"?w({startDistance:t.distance>1?t.distance:void 0,seed:u,biome:(mf(t.biome)+1)%wn.length,night:_}):M==="n"?w({startDistance:t.distance>1?t.distance:void 0,seed:u,biome:mf(t.biome),night:!_}):M==="o"&&(i=i?null:new _d,p=!0,e.toast(i?"BOT ON":"BOT OFF"))};return{enter(v){window.addEventListener("keydown",z),w(v??{})},exit(){window.removeEventListener("keydown",z),n.input.enabled=!1,xt.stopEngine(),xt.resume()},pause:I,key(){o?C():I()},hidden(){I()},action(v){o||r>0||c>=0||(t.input(v),f<99&&(f=99,e.hideHint()))},frame(v){let M=v;if(o)M=0;else if(r>0){r-=v;const X=Math.ceil(r/.5);X!==g&&(g=X,e.countdown(Math.max(0,X)),X>0&&xt.sfx("tap")),M=0}else if(c>=0){if(c+=v,M=c<Ad?v*B.crashTimeScale:v,c>=Ad+.35){const X=!p&&Kb(n.save,t.distance,t.gears);p||n.persist(),n.go("results",{sim:t,newBest:X});return}}else if(a>0)a-=v,M=0;else{s+=Math.min(v,B.maxFrameDt)*l,M=v*l;const X=B.fixedStep;for(;s>=X;){if(s-=X,i){const H=i.decide(t,X);H&&t.input(H)}t.update(X);for(const H of t.events)L(H);if(t.events.length=0,t.crashed||a>0){s=0;break}}f+=v,f>4&&f<99&&(f=99,e.hideHint())}e.tick(),t.crashed||xt.setStyle(x()),e.setDistance(t.distance),e.setGears(t.gears,!1),e.setMagnet(t.magnetT);const U=(t.speed-B.startSpeed)/(B.maxSpeed-B.startSpeed);o||xt.setEngine(Math.max(0,U),t.vehicle.airborne);const k=t.speed>=B.speedLinesFrom&&!t.crashed?(t.speed-B.speedLinesFrom)/(B.maxSpeed-B.speedLinesFrom)*.8+.2:0;n.speedLines.update(M,k,!n.save.settings.reducedMotion);const O=t.crashed?1:s/B.fixedStep;n.view.renderRun(n.renderer,t,M,t.bestAtStart,O)}}}function iw(n){let t;return{key(e){e==="escape"&&(xt.sfx("tap"),n.go("title"))},enter(e){t=e,xt.duck(!1),xt.playMenuMusic(),t.newBest&&window.setTimeout(()=>xt.sfx("newBest"),250),n.ui.replaceChildren(ib({distance:t.sim.distance,gears:t.sim.gears,bank:n.save.gearBank,best:n.save.bestDistance,newBest:t.newBest,onRetry:()=>{xt.sfx("tap"),n.go("play")},onGarage:()=>{xt.sfx("tap"),n.go("garage")},onHome:()=>{xt.sfx("tap"),n.go("title")}}))},exit(){},frame(e){n.view.renderRun(n.renderer,t.sim,e,t.sim.bestAtStart),n.speedLines.update(e,0,!1)}}}function sw(n){let t=0;const e=()=>{const i=tb({best:n.save.bestDistance,bank:n.save.gearBank,touch:n.touch,onPlay:()=>{xt.unlock(),xt.sfx("tap"),n.go("play")},onGarage:()=>{xt.unlock(),xt.sfx("tap"),n.go("garage")},onSettings:()=>{xt.unlock(),xt.sfx("tap"),n.openSettings(e)}});n.ui.replaceChildren(i),lo(i)};return{enter(){const i=n.save.selected.model;n.view.setVehicle(i,Ii(n.save.colors[i]),Ii(n.save.riderColors[i])),e(),xt.playMenuMusic()},exit(){},frame(i){t+=i*8,n.view.renderIdle(n.renderer,i,t),n.speedLines.update(i,0,!1)}}}const ow="modulepreload",rw=function(n,t){return new URL(n,t).href},Rd={},aw=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){const r=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=rw(l,i),l in Rd)return;Rd[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!i)for(let g=r.length-1;g>=0;g--){const _=r[g];if(_.href===l&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":ow,h||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return s.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};function cw(n={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:r}=n;let a,c,l;const h=async(f=!0)=>{await c,l==null||l()};async function u(){if("serviceWorker"in navigator){if(a=await aw(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:f}},[],import.meta.url).then(({Workbox:f})=>new f("./sw.js",{scope:"./",type:"classic"})).catch(f=>{r==null||r(f)}),!a)return;l=()=>{a==null||a.messageSkipWaiting()};{let f=!1;const d=()=>{f=!0,a==null||a.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()}),e==null||e()};a.addEventListener("installed",g=>{typeof g.isUpdate>"u"?typeof g.isExternal<"u"&&g.isExternal?d():!f&&(i==null||i()):g.isUpdate||i==null||i()}),a.addEventListener("waiting",d)}a.register({immediate:t}).then(f=>{o?o("./sw.js",f):s==null||s(f)}).catch(f=>{r==null||r(f)})}}return c=u(),h}const lw=60*60*1e3;let qr=null,Lo=null,Io=()=>{};const Fi={updateReady:!1,init(n){Io=n,window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),Lo=t,Io()}),window.addEventListener("appinstalled",()=>{Lo=null,Io()}),"serviceWorker"in navigator&&(qr=cw({onNeedRefresh(){Fi.updateReady=!0,Io()},onRegisteredSW(t,e){e&&(setInterval(()=>void e.update(),lw),document.addEventListener("visibilitychange",()=>{document.hidden||e.update()}))}}))},applyUpdate(){qr==null||qr(!0)},get canInstall(){return Lo!==null},async install(){const n=Lo;n&&(Lo=null,await n.prompt(),await n.userChoice,Io())},get iosHint(){return(/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Fi.standalone},get standalone(){return matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches||navigator.standalone===!0}};class hw{constructor(t,e,i){this.onAction=e,this.onMenuKey=i,this.enabled=!1,this.startX=0,this.startY=0,this.startT=0,this.tracking=!1,this.pointerId=-1,this.down=s=>{!this.enabled||this.tracking||(this.tracking=!0,this.pointerId=s.pointerId,this.startX=s.clientX,this.startY=s.clientY,this.startT=performance.now())},this.move=s=>{if(!this.tracking||s.pointerId!==this.pointerId)return;const o=s.clientX-this.startX,r=s.clientY-this.startY;if(performance.now()-this.startT>B.swipeMaxMs){this.startX=s.clientX,this.startY=s.clientY,this.startT=performance.now();return}if(Math.max(Math.abs(o),Math.abs(r))<B.swipeMinPx)return;const a=Math.abs(o)>Math.abs(r)?o<0?"left":"right":r<0?"up":"down";this.onAction(a),this.startX=s.clientX,this.startY=s.clientY,this.startT=performance.now()},this.up=s=>{s.pointerId===this.pointerId&&(this.tracking=!1)},this.key=s=>{if(s.repeat)return;const o=s.key.toLowerCase();if(o==="escape"||o==="p"){this.onMenuKey(o==="p"?"pause":"escape");return}if(!this.enabled)return;const a={arrowleft:"left",a:"left",arrowright:"right",d:"right",arrowup:"up",w:"up"," ":"up",arrowdown:"down",s:"down"}[o];a&&(s.preventDefault(),this.onAction(a))},t.addEventListener("pointerdown",this.down,{passive:!0}),t.addEventListener("pointermove",this.move,{passive:!0}),t.addEventListener("pointerup",this.up,{passive:!0}),t.addEventListener("pointercancel",this.up,{passive:!0}),window.addEventListener("keydown",this.key)}}const uw=[2,1.5,1],fw=.1,dw=2,pw=1/50,Cd=2,mw=6,gw=60,vw=10,_w=3;class xw{constructor(t){this.idx=0,this.refresh=0,this.windowMin=1/0,this.prevWindowMin=1/0,this.windowT=0,this.slow=0,this.fast=0,this.upWait=mw,this.sinceUp=1/0,this.badUps=0,this.ceiling=0,this.steps=[t,...uw.filter(e=>e<t)]}get ratio(){return this.steps[this.idx]}get struggling(){return this.idx===this.steps.length-1&&this.slow>=Cd}update(t){if(t<=0||t>=fw||(this.sinceUp+=t,this.windowMin=Math.min(this.windowMin,t),this.windowT+=t,this.windowT>=dw&&(this.refresh=Math.min(this.windowMin,this.prevWindowMin),this.prevWindowMin=this.windowMin,this.windowMin=1/0,this.windowT=0),!this.refresh))return null;const e=Math.max(this.refresh*1.5,pw);return t>e?(this.slow+=t,this.fast=0):(this.slow=Math.max(0,this.slow-t*.5),this.fast=t<=this.refresh*1.25?this.fast+t:0),this.slow>=Cd&&this.idx<this.steps.length-1?(this.idx++,this.sinceUp<vw&&(this.upWait=Math.min(gw,this.upWait*2),++this.badUps>=_w&&(this.ceiling=this.idx)),this.slow=this.fast=0,this.ratio):this.fast>=this.upWait&&this.idx>this.ceiling?(this.idx--,this.sinceUp=0,this.slow=this.fast=0,this.ratio):null}}const ir=document.getElementById("app"),Mw=document.getElementById("gl"),yw=document.getElementById("fx"),Sa=document.getElementById("ui"),Pd=document.getElementById("vignette"),Ss=new URLSearchParams(location.search),fs=new Z_({canvas:Mw,antialias:!0,powerPreference:"high-performance"});fs.outputColorSpace=Ge;let Wo=Math.min(window.devicePixelRatio||1,2);fs.setPixelRatio(Wo);const Rn=Yb();y0(Rn.settings.lang);const mi=new jS;Ss.has("time")&&(mi.titleHour=pp(0,Ss.get("time")));Ss.has("titleBiome")&&(mi.titleBiome=Number(Ss.get("titleBiome"))%9);Ss.get("headlight")==="pool"&&(mi.headlightMode="pool");const Rp=new ZS,Sw=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window;let xe=null;const bw=n=>nw(n),Li={renderer:fs,view:mi,garage:Rp,ui:Sa,save:Rn,input:null,speedLines:new Hx(yw),touch:Sw,params:Ss,dev:!1,persist:()=>Ed(Rn),go:(n,t)=>Cp(n,t),openSettings(n){const t=o=>{(o.key==="p"||o.key==="P")&&o.stopImmediatePropagation(),o.key==="Escape"&&(o.stopImmediatePropagation(),e())},e=()=>{window.removeEventListener("keydown",t,!0),xt.sfx("tap"),s.remove(),n==null||n()},i={version:"0.1.0 (97ff3d6)",canInstall:Fi.canInstall,iosHint:Fi.iosHint,install:()=>{xt.sfx("tap"),Fi.install().then(()=>{var o;return(o=s.querySelector(".app-row"))==null?void 0:o.remove()})}},s=sb(Rn.settings,i,{onChange:()=>{Li.applySettings(),Ed(Rn)},onClose:e,onTap:()=>xt.sfx("tap")});window.addEventListener("keydown",t,!0),Sa.append(s),lo(s)},haptic(n){var t;if(Rn.settings.haptics)try{(t=navigator.vibrate)==null||t.call(navigator,n)}catch{}},vignette(){Rn.settings.reducedMotion||(Pd.classList.add("on"),requestAnimationFrame(()=>requestAnimationFrame(()=>Pd.classList.remove("on"))))},applySettings(){y0(Rn.settings.lang),xt.setEnabled(Rn.settings.music,Rn.settings.sfx),mi.reducedMotion=Rn.settings.reducedMotion,mi.chase.reducedMotion=Rn.settings.reducedMotion}},Zh={boot:ob(Li),title:sw(Li),garage:Ab(Li),play:bw(Li),results:iw(Li)};Li.input=new hw(ir,n=>Zh.play.action(n),n=>{var t;return(t=xe==null?void 0:xe.key)==null?void 0:t.call(xe,n)});window.addEventListener("keydown",n=>{if(n.repeat||n.key!=="Enter"&&n.key!==" ")return;const t=document.activeElement;if(t&&t!==document.body&&t.closest("button, input, select, textarea"))return;const e=Sa.querySelectorAll("[data-primary]:not([disabled])"),i=e[e.length-1];i&&(n.preventDefault(),i.click())});function Cp(n,t){xe==null||xe.exit(),xe=Zh[n],xe.enter(t),Pp()}function Pp(){const n=Sa.querySelector(".update-slot");n&&n.replaceChildren(Fi.updateReady?J("button",{class:"btn update-chip",onclick:()=>{xt.sfx("tap"),Fi.applyUpdate()}},Nt("updateReady")):"")}Fi.init(Pp);function Jh(){const n=ir.clientWidth,t=ir.clientHeight;fs.setSize(n,t,!1),mi.resize(n/t),Rp.resize(n/t)}new ResizeObserver(Jh).observe(ir);Jh();document.addEventListener("visibilitychange",()=>{var n;document.hidden?((n=xe==null?void 0:xe.hidden)==null||n.call(xe),xt.suspend()):xe!==Zh.play&&xt.resume()});window.addEventListener("blur",()=>{var n;return(n=xe==null?void 0:xe.hidden)==null?void 0:n.call(xe)});let Xo=null;Ss.has("stats")&&(Xo=document.createElement("div"),Xo.style.cssText="position:absolute;left:4px;bottom:4px;font:12px monospace;background:rgba(0,0,0,.6);padding:4px 6px;border-radius:4px;z-index:5;pointer-events:none;white-space:pre",ir.append(Xo));let Ld=performance.now();const Id=new xw(Wo);let Qc=0,Yr=0;fs.setAnimationLoop(n=>{const t=Math.max(0,(n-Ld)/1e3),e=Math.min(.1,t);Ld=n,xe==null||xe.frame(e);const i=Id.update(t);if(i!==null&&(Wo=i,fs.setPixelRatio(Wo),Jh()),mi.headlightMode==="spot"&&Id.struggling&&(mi.headlightMode="pool"),Xo&&(Qc++,Yr+=e,Yr>=.5)){const s=fs.info.render;Xo.textContent=`${Math.round(Qc/Yr)} fps  dpr ${Wo}
${s.calls} calls  ${Math.round(s.triangles/1e3)}k tris`,Qc=0,Yr=0}});Li.applySettings();window.addEventListener("pointerdown",()=>xt.unlock(),{once:!0});Cp("boot");
