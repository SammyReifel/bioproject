(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="160",pm=0,zu=1,mm=2,Qf=1,_m=2,Li=3,ur=0,Tn=1,Ni=2,rr=0,Ss=1,ku=2,Gu=3,Hu=4,gm=5,Cr=100,vm=101,xm=102,Vu=103,Wu=104,Mm=200,Sm=201,ym=202,Em=203,mc=204,_c=205,Tm=206,bm=207,Am=208,wm=209,Rm=210,Cm=211,Pm=212,Lm=213,Dm=214,Um=0,Im=1,Nm=2,Fo=3,Om=4,Fm=5,Bm=6,zm=7,jc=0,km=1,Gm=2,sr=0,Hm=1,Vm=2,Wm=3,Xm=4,Ym=5,qm=6,ed=300,Cs=301,Ps=302,gc=303,vc=304,rl=306,xc=1e3,ui=1001,Mc=1002,xn=1003,Xu=1004,xl=1005,Zn=1006,$m=1007,Aa=1008,ar=1009,Km=1010,Jm=1011,Qc=1012,td=1013,Zi=1014,ji=1015,wa=1016,nd=1017,id=1018,Ur=1020,Zm=1021,hi=1023,jm=1024,Qm=1025,Ir=1026,Ls=1027,e_=1028,rd=1029,t_=1030,sd=1031,ad=1033,Ml=33776,Sl=33777,yl=33778,El=33779,Yu=35840,qu=35841,$u=35842,Ku=35843,od=36196,Ju=37492,Zu=37496,ju=37808,Qu=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,ah=37816,oh=37817,lh=37818,ch=37819,uh=37820,hh=37821,Tl=36492,fh=36494,dh=36495,n_=36283,ph=36284,mh=36285,_h=36286,ld=3e3,Nr=3001,i_=3200,r_=3201,cd=0,s_=1,ti="",Zt="srgb",ki="srgb-linear",eu="display-p3",sl="display-p3-linear",Bo="linear",yt="srgb",zo="rec709",ko="p3",Kr=7680,gh=519,a_=512,o_=513,l_=514,ud=515,c_=516,u_=517,h_=518,f_=519,vh=35044,xh="300 es",Sc=1035,Fi=2e3,Go=2001;class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bl=Math.PI/180,yc=180/Math.PI;function Fa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function jt(r,e,t){return Math.max(e,Math.min(t,r))}function d_(r,e){return(r%e+e)%e}function Al(r,e,t){return(1-t)*r+t*e}function Mh(r){return(r&r-1)===0&&r!==0}function Ec(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $s(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],x=i[4],S=i[7],R=i[2],A=i[5],T=i[8];return s[0]=o*_+a*M+l*R,s[3]=o*m+a*x+l*A,s[6]=o*p+a*S+l*T,s[1]=c*_+u*M+h*R,s[4]=c*m+u*x+h*A,s[7]=c*p+u*S+h*T,s[2]=d*_+f*M+g*R,s[5]=d*m+f*x+g*A,s[8]=d*p+f*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wl.makeScale(e,t)),this}rotate(e){return this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new tt;function hd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function p_(){const r=Ho("canvas");return r.style.display="block",r}const Sh={};function ca(r){r in Sh||(Sh[r]=!0,console.warn(r))}const yh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wa={[ki]:{transfer:Bo,primaries:zo,toReference:r=>r,fromReference:r=>r},[Zt]:{transfer:yt,primaries:zo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[sl]:{transfer:Bo,primaries:ko,toReference:r=>r.applyMatrix3(Eh),fromReference:r=>r.applyMatrix3(yh)},[eu]:{transfer:yt,primaries:ko,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Eh),fromReference:r=>r.applyMatrix3(yh).convertLinearToSRGB()}},m_=new Set([ki,sl]),pt={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!m_.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Wa[e].toReference,i=Wa[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Wa[r].primaries},getTransfer:function(r){return r===ti?Bo:Wa[r].transfer}};function ys(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jr===void 0&&(Jr=Ho("canvas")),Jr.width=e.width,Jr.height=e.height;const n=Jr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ys(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ys(t[n]/255)*255):t[n]=ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let __=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=Fa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Cl(i[o].image)):s.push(Cl(i[o]))}else s=Cl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Cl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g_=0;class Vn extends Vs{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,n=ui,i=ui,s=Zn,o=Aa,a=hi,l=ar,c=Vn.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Fa(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Nr?Zt:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xc:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xc:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Zt?Nr:ld}set encoding(e){ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Nr?Zt:ti}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=ed;Vn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,n=0,i=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(f+1)/2,R=(p+1)/2,A=(u+d)/4,T=(h+_)/4,D=(g+m)/4;return x>S&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=T/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=D/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=D/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v_ extends Vs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ca("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Nr?Zt:ti),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends v_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pd extends Vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x_ extends Vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ba{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,p*M);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*M;if(l=l*m+d*S,c=c*m+f*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new I,Th=new Ba;class za{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Ya.subVectors(this.max,Ks),Zr.subVectors(e.a,Ks),jr.subVectors(e.b,Ks),Qr.subVectors(e.c,Ks),Wi.subVectors(jr,Zr),Xi.subVectors(Qr,jr),vr.subVectors(Zr,Qr);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-vr.z,vr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,vr.z,0,-vr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-vr.y,vr.x,0];return!Ll(t,Zr,jr,Qr,Ya)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Zr,jr,Qr,Ya))?!1:(qa.crossVectors(Wi,Xi),t=[qa.x,qa.y,qa.z],Ll(t,Zr,jr,Qr,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new I,new I,new I,new I,new I,new I,new I,new I],si=new I,Xa=new za,Zr=new I,jr=new I,Qr=new I,Wi=new I,Xi=new I,vr=new I,Ks=new I,Ya=new I,qa=new I,xr=new I;function Ll(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){xr.fromArray(r,s);const a=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),l=e.dot(xr),c=t.dot(xr),u=n.dot(xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const M_=new za,Js=new I,Dl=new I;class tu{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Dl)),this.expandByPoint(Js.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new I,Ul=new I,$a=new I,Yi=new I,Il=new I,Ka=new I,Nl=new I;class S_{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ul.copy(e).add(t).multiplyScalar(.5),$a.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Ul);const s=e.distanceTo(t)*.5,o=-this.direction.dot($a),a=Yi.dot(this.direction),l=-Yi.dot($a),c=Yi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ul).addScaledVector($a,d),f}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,s){Il.subVectors(t,e),Ka.subVectors(n,e),Nl.crossVectors(Il,Ka);let o=this.direction.dot(Nl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(Yi,Ka));if(l<0)return null;const c=a*this.direction.dot(Il.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(Nl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y_,e,E_)}lookAt(e,t,n){const i=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),qi.crossVectors(n,Ln),qi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),qi.crossVectors(n,Ln)),qi.normalize(),Ja.crossVectors(Ln,qi),i[0]=qi.x,i[4]=Ja.x,i[8]=Ln.x,i[1]=qi.y,i[5]=Ja.y,i[9]=Ln.y,i[2]=qi.z,i[6]=Ja.z,i[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],S=n[11],R=n[15],A=i[0],T=i[4],D=i[8],v=i[12],y=i[1],F=i[5],U=i[9],K=i[13],P=i[2],O=i[6],z=i[10],X=i[14],Y=i[3],$=i[7],C=i[11],Z=i[15];return s[0]=o*A+a*y+l*P+c*Y,s[4]=o*T+a*F+l*O+c*$,s[8]=o*D+a*U+l*z+c*C,s[12]=o*v+a*K+l*X+c*Z,s[1]=u*A+h*y+d*P+f*Y,s[5]=u*T+h*F+d*O+f*$,s[9]=u*D+h*U+d*z+f*C,s[13]=u*v+h*K+d*X+f*Z,s[2]=g*A+_*y+m*P+p*Y,s[6]=g*T+_*F+m*O+p*$,s[10]=g*D+_*U+m*z+p*C,s[14]=g*v+_*K+m*X+p*Z,s[3]=M*A+x*y+S*P+R*Y,s[7]=M*T+x*F+S*O+R*$,s[11]=M*D+x*U+S*z+R*C,s[15]=M*v+x*K+S*X+R*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+n*o*f+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,S=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,R=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,A=t*M+n*x+i*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(_*d*s-h*m*s-_*i*f+n*m*f+h*i*p-n*d*p)*T,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=x*T,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*T,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=S*T,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*p-t*h*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*T,e[12]=R*T,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*m+t*h*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=l*c,x=l*u,S=l*h,R=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+S)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-M)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=es.set(i[0],i[1],i[2]).length();const o=es.set(i[4],i[5],i[6]).length(),a=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ai.copy(this);const c=1/s,u=1/o,h=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Fi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Fi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Go)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Fi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*u;let g,_;if(a===Fi)g=(o+s)*h,_=-2*h;else if(a===Go)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new I,ai=new Ft,y_=new I(0,0,0),E_=new I(1,1,1),qi=new I,Ja=new I,Ln=new I,bh=new Ft,Ah=new Ba;class al{constructor(e=0,t=0,n=0,i=al.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}al.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T_=0;const wh=new I,ts=new Ba,Ri=new Ft,Za=new I,Zs=new I,b_=new I,A_=new Ba,Rh=new I(1,0,0),Ch=new I(0,1,0),Ph=new I(0,0,1),w_={type:"added"},R_={type:"removed"};class un extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new I,t=new al,n=new Ba,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new tt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return wh.copy(e).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Zs,Za,this.up):Ri.lookAt(Za,Zs,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Ri),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(w_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,b_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,A_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}un.DEFAULT_UP=new I(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new I,Ci=new I,Ol=new I,Pi=new I,ns=new I,is=new I,Lh=new I,Fl=new I,Bl=new I,zl=new I;let ja=!1;class ci{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){oi.subVectors(i,t),Ci.subVectors(n,t),Ol.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Ci),l=oi.dot(Ol),c=Ci.dot(Ci),u=Ci.dot(Ol),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,t,n,i,s,o,a,l){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),Ci.subVectors(e,t),oi.cross(Ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),oi.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ns.subVectors(i,n),is.subVectors(s,n),Fl.subVectors(e,n);const l=ns.dot(Fl),c=is.dot(Fl);if(l<=0&&c<=0)return t.copy(n);Bl.subVectors(e,i);const u=ns.dot(Bl),h=is.dot(Bl);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ns,o);zl.subVectors(e,s);const f=ns.dot(zl),g=is.dot(zl);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(is,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Lh.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Lh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function kl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=d_(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=kl(o,s,e+1/3),this.g=kl(o,s,e),this.b=kl(o,s,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=_d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Rl(e.r),this.g=Rl(e.g),this.b=Rl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return pt.fromWorkingColorSpace(rn.copy(this),e),Math.round(jt(rn.r*255,0,255))*65536+Math.round(jt(rn.g*255,0,255))*256+Math.round(jt(rn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,i=rn.g,s=rn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Zt){pt.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,i=rn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Qa);const n=Al($i.h,Qa.h,t),i=Al($i.s,Qa.s,t),s=Al($i.l,Qa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ot;ot.NAMES=_d;let C_=0;class ka extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=Ss,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=_c,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==_c&&(n.blendDst=this.blendDst),this.blendEquation!==Cr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gd extends ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new I,eo=new be;class Si{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$s(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$s(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$s(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$s(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$s(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}}class vd extends Si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xd extends Si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends Si{constructor(e,t,n){super(new Float32Array(e),t,n)}}let P_=0;const Kn=new Ft,Gl=new un,rs=new I,Dn=new za,js=new za,Xt=new I;class fi extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?xd:vd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Dn.min,js.min),Dn.expandByPoint(Xt),Xt.addVectors(Dn.max,js.max),Dn.expandByPoint(Xt)):(Dn.expandByPoint(js.min),Dn.expandByPoint(js.max))}Dn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Xt.add(rs)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<a;y++)c[y]=new I,u[y]=new I;const h=new I,d=new I,f=new I,g=new be,_=new be,m=new be,p=new I,M=new I;function x(y,F,U){h.fromArray(i,y*3),d.fromArray(i,F*3),f.fromArray(i,U*3),g.fromArray(o,y*2),_.fromArray(o,F*2),m.fromArray(o,U*2),d.sub(h),f.sub(h),_.sub(g),m.sub(g);const K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(K),M.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(K),c[y].add(p),c[F].add(p),c[U].add(p),u[y].add(M),u[F].add(M),u[U].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let y=0,F=S.length;y<F;++y){const U=S[y],K=U.start,P=U.count;for(let O=K,z=K+P;O<z;O+=3)x(n[O+0],n[O+1],n[O+2])}const R=new I,A=new I,T=new I,D=new I;function v(y){T.fromArray(s,y*3),D.copy(T);const F=c[y];R.copy(F),R.sub(T.multiplyScalar(T.dot(F))).normalize(),A.crossVectors(D,F);const K=A.dot(u[y])<0?-1:1;l[y*4]=R.x,l[y*4+1]=R.y,l[y*4+2]=R.z,l[y*4+3]=K}for(let y=0,F=S.length;y<F;++y){const U=S[y],K=U.start,P=U.count;for(let O=K,z=K+P;O<z;O+=3)v(n[O+0]),v(n[O+1]),v(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Si(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dh=new Ft,Mr=new S_,to=new tu,Uh=new I,ss=new I,as=new I,os=new I,Hl=new I,no=new I,io=new be,ro=new be,so=new be,Ih=new I,Nh=new I,Oh=new I,ao=new I,oo=new I;class lt extends un{constructor(e=new fi,t=new gd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){no.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Hl.fromBufferAttribute(h,e),o?no.addScaledVector(Hl,u):no.addScaledVector(Hl.sub(t),u))}t.add(no)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(to.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(to,Uh)===null||Mr.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Dh.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,R=x;S<R;S+=3){const A=a.getX(S),T=a.getX(S+1),D=a.getX(S+2);i=lo(this,p,e,n,c,u,h,A,T,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);i=lo(this,o,e,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,R=x;S<R;S+=3){const A=S,T=S+1,D=S+2;i=lo(this,p,e,n,c,u,h,A,T,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,S=m+2;i=lo(this,o,e,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function L_(r,e,t,n,i,s,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ur,a),l===null)return null;oo.copy(a),oo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:r}}function lo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ss),r.getVertexPosition(l,as),r.getVertexPosition(c,os);const u=L_(r,e,t,n,ss,as,os,ao);if(u){i&&(io.fromBufferAttribute(i,a),ro.fromBufferAttribute(i,l),so.fromBufferAttribute(i,c),u.uv=ci.getInterpolation(ao,ss,as,os,io,ro,so,new be)),s&&(io.fromBufferAttribute(s,a),ro.fromBufferAttribute(s,l),so.fromBufferAttribute(s,c),u.uv1=ci.getInterpolation(ao,ss,as,os,io,ro,so,new be),u.uv2=u.uv1),o&&(Ih.fromBufferAttribute(o,a),Nh.fromBufferAttribute(o,l),Oh.fromBufferAttribute(o,c),u.normal=ci.getInterpolation(ao,ss,as,os,Ih,Nh,Oh,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};ci.getNormal(ss,as,os,h.normal),u.face=h}return u}class Ws extends fi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function g(_,m,p,M,x,S,R,A,T,D,v){const y=S/T,F=R/D,U=S/2,K=R/2,P=A/2,O=T+1,z=D+1;let X=0,Y=0;const $=new I;for(let C=0;C<z;C++){const Z=C*F-K;for(let ne=0;ne<O;ne++){const q=ne*y-U;$[_]=q*M,$[m]=Z*x,$[p]=P,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=A>0?1:-1,u.push($.x,$.y,$.z),h.push(ne/T),h.push(1-C/D),X+=1}}for(let C=0;C<D;C++)for(let Z=0;Z<T;Z++){const ne=d+Z+O*C,q=d+Z+O*(C+1),J=d+(Z+1)+O*(C+1),se=d+(Z+1)+O*C;l.push(ne,q,se),l.push(q,J,se),Y+=6}a.addGroup(f,Y,v),f+=Y,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mn(r){const e={};for(let t=0;t<r.length;t++){const n=Ds(r[t]);for(const i in n)e[i]=n[i]}return e}function D_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Md(r){return r.getRenderTarget()===null?r.outputColorSpace:pt.workingColorSpace}const U_={clone:Ds,merge:mn};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=D_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sd extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends Sd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class O_ extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jn(ls,cs,e,t);i.layers=this.layers,this.add(i);const s=new jn(ls,cs,e,t);s.layers=this.layers,this.add(s);const o=new jn(ls,cs,e,t);o.layers=this.layers,this.add(o);const a=new jn(ls,cs,e,t);a.layers=this.layers,this.add(a);const l=new jn(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new jn(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yd extends Vn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F_ extends Vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ca("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Nr?Zt:ti),this.texture=new yd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ws(5,5,5),s=new Wr({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:rr});s.uniforms.tEquirect.value=t;const o=new lt(i,s),a=t.minFilter;return t.minFilter===Aa&&(t.minFilter=Zn),new O_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Vl=new I,B_=new I,z_=new tt;class Tr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vl.subVectors(n,t).cross(B_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||z_.getNormalMatrix(e),i=this.coplanarPoint(Vl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new tu,co=new I;class nu{constructor(e=new Tr,t=new Tr,n=new Tr,i=new Tr,s=new Tr,o=new Tr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,d-c,m-f,S-p).normalize(),n[1].setComponents(l+s,d+c,m+f,S+p).normalize(),n[2].setComponents(l+o,d+u,m+g,S+M).normalize(),n[3].setComponents(l-o,d-u,m-g,S-M).normalize(),n[4].setComponents(l-a,d-h,m-_,S-x).normalize(),t===Fi)n[5].setComponents(l+a,d+h,m+_,S+x).normalize();else if(t===Go)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(co.x=i.normal.x>0?e.max.x:e.min.x,co.y=i.normal.y>0?e.max.y:e.min.y,co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ed(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function k_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),f.count===-1&&g.length===0&&r.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):r.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class iu extends fi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,S=M+c*(p+1),R=M+1+c*(p+1),A=M+1+c*p;f.push(x,S,A),f.push(S,R,A)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}var G_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
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
#endif`,V_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
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
#endif`,$_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,J_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eg=`#ifdef USE_IRIDESCENCE
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
#endif`,tg=`#ifdef USE_BUMPMAP
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ug=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fg=`vec3 transformedNormal = objectNormal;
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
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rg=`#ifdef USE_GRADIENTMAP
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
}`,Cg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
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
#endif`,kg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Gg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zg=`#if defined( USE_POINTS_UV )
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
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
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
}`,q0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,$0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
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
}`,tv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rv=`#define MATCAP
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
}`,sv=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,av=`#define NORMAL
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
}`,ov=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
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
}`,cv=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uv=`#define STANDARD
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
}`,hv=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fv=`#define TOON
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
}`,dv=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pv=`uniform float size;
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
}`,mv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,gv=`uniform vec3 color;
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
}`,vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,xv=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ke={alphahash_fragment:G_,alphahash_pars_fragment:H_,alphamap_fragment:V_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:Y_,aomap_fragment:q_,aomap_pars_fragment:$_,batching_pars_vertex:K_,batching_vertex:J_,begin_vertex:Z_,beginnormal_vertex:j_,bsdfs:Q_,iridescence_fragment:eg,bumpmap_pars_fragment:tg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:rg,clipping_planes_vertex:sg,color_fragment:ag,color_pars_fragment:og,color_pars_vertex:lg,color_vertex:cg,common:ug,cube_uv_reflection_fragment:hg,defaultnormal_vertex:fg,displacementmap_pars_vertex:dg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:_g,colorspace_fragment:gg,colorspace_pars_fragment:vg,envmap_fragment:xg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:Sg,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Ig,envmap_vertex:Eg,fog_vertex:Tg,fog_pars_vertex:bg,fog_fragment:Ag,fog_pars_fragment:wg,gradientmap_pars_fragment:Rg,lightmap_fragment:Cg,lightmap_pars_fragment:Pg,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ug,lights_toon_fragment:Ng,lights_toon_pars_fragment:Og,lights_phong_fragment:Fg,lights_phong_pars_fragment:Bg,lights_physical_fragment:zg,lights_physical_pars_fragment:kg,lights_fragment_begin:Gg,lights_fragment_maps:Hg,lights_fragment_end:Vg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:qg,map_fragment:$g,map_pars_fragment:Kg,map_particle_fragment:Jg,map_particle_pars_fragment:Zg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Qg,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:r0,normal_fragment_maps:s0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:d0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:_0,project_vertex:g0,dithering_fragment:v0,dithering_pars_fragment:x0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:E0,shadowmap_vertex:T0,shadowmask_pars_fragment:b0,skinbase_vertex:A0,skinning_pars_vertex:w0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:U0,transmission_fragment:I0,transmission_pars_fragment:N0,uv_pars_fragment:O0,uv_pars_vertex:F0,uv_vertex:B0,worldpos_vertex:z0,background_vert:k0,background_frag:G0,backgroundCube_vert:H0,backgroundCube_frag:V0,cube_vert:W0,cube_frag:X0,depth_vert:Y0,depth_frag:q0,distanceRGBA_vert:$0,distanceRGBA_frag:K0,equirect_vert:J0,equirect_frag:Z0,linedashed_vert:j0,linedashed_frag:Q0,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:rv,meshmatcap_frag:sv,meshnormal_vert:av,meshnormal_frag:ov,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:uv,meshphysical_frag:hv,meshtoon_vert:fv,meshtoon_frag:dv,points_vert:pv,points_frag:mv,shadow_vert:_v,shadow_frag:gv,sprite_vert:vv,sprite_frag:xv},he={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},gi={basic:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:mn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:mn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:mn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:mn([he.points,he.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:mn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:mn([he.common,he.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:mn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:mn([he.sprite,he.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:mn([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:mn([he.lights,he.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const uo={r:0,b:0,g:0};function Mv(r,e,t,n,i,s,o){const a=new ot(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===rl)?(u===void 0&&(u=new lt(new Ws(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Ds(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=pt.getTransfer(x.colorSpace)!==yt,(h!==x||d!==x.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new iu(2,2),new Wr({name:"BackgroundMaterial",uniforms:Ds(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=pt.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(uo,Md(r)),n.buffers.color.setClear(uo.r,uo.g,uo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Sv(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(P,O,z,X,Y){let $=!1;if(o){const C=_(X,z,O);c!==C&&(c=C,f(c.object)),$=p(P,X,z,Y),$&&M(P,X,z,Y)}else{const C=O.wireframe===!0;(c.geometry!==X.id||c.program!==z.id||c.wireframe!==C)&&(c.geometry=X.id,c.program=z.id,c.wireframe=C,$=!0)}Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,D(P,O,z,X),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,O,z){const X=z.wireframe===!0;let Y=a[P.id];Y===void 0&&(Y={},a[P.id]=Y);let $=Y[O.id];$===void 0&&($={},Y[O.id]=$);let C=$[X];return C===void 0&&(C=m(d()),$[X]=C),C}function m(P){const O=[],z=[],X=[];for(let Y=0;Y<i;Y++)O[Y]=0,z[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,O,z,X){const Y=c.attributes,$=O.attributes;let C=0;const Z=z.getAttributes();for(const ne in Z)if(Z[ne].location>=0){const J=Y[ne];let se=$[ne];if(se===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;C++}return c.attributesNum!==C||c.index!==X}function M(P,O,z,X){const Y={},$=O.attributes;let C=0;const Z=z.getAttributes();for(const ne in Z)if(Z[ne].location>=0){let J=$[ne];J===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),Y[ne]=se,C++}c.attributes=Y,c.attributesNum=C,c.index=X}function x(){const P=c.newAttributes;for(let O=0,z=P.length;O<z;O++)P[O]=0}function S(P){R(P,0)}function R(P,O){const z=c.newAttributes,X=c.enabledAttributes,Y=c.attributeDivisors;z[P]=1,X[P]===0&&(r.enableVertexAttribArray(P),X[P]=1),Y[P]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),Y[P]=O)}function A(){const P=c.newAttributes,O=c.enabledAttributes;for(let z=0,X=O.length;z<X;z++)O[z]!==P[z]&&(r.disableVertexAttribArray(z),O[z]=0)}function T(P,O,z,X,Y,$,C){C===!0?r.vertexAttribIPointer(P,O,z,Y,$):r.vertexAttribPointer(P,O,z,X,Y,$)}function D(P,O,z,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Y=X.attributes,$=z.getAttributes(),C=O.defaultAttributeValues;for(const Z in $){const ne=$[Z];if(ne.location>=0){let q=Y[Z];if(q===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const J=q.normalized,se=q.itemSize,_e=t.get(q);if(_e===void 0)continue;const de=_e.buffer,Pe=_e.type,Le=_e.bytesPerElement,Ie=n.isWebGL2===!0&&(Pe===r.INT||Pe===r.UNSIGNED_INT||q.gpuType===td);if(q.isInterleavedBufferAttribute){const He=q.data,G=He.stride,Ve=q.offset;if(He.isInstancedInterleavedBuffer){for(let me=0;me<ne.locationSize;me++)R(ne.location+me,He.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let me=0;me<ne.locationSize;me++)S(ne.location+me);r.bindBuffer(r.ARRAY_BUFFER,de);for(let me=0;me<ne.locationSize;me++)T(ne.location+me,se/ne.locationSize,Pe,J,G*Le,(Ve+se/ne.locationSize*me)*Le,Ie)}else{if(q.isInstancedBufferAttribute){for(let He=0;He<ne.locationSize;He++)R(ne.location+He,q.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let He=0;He<ne.locationSize;He++)S(ne.location+He);r.bindBuffer(r.ARRAY_BUFFER,de);for(let He=0;He<ne.locationSize;He++)T(ne.location+He,se/ne.locationSize,Pe,J,se*Le,se/ne.locationSize*He*Le,Ie)}}else if(C!==void 0){const J=C[Z];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(ne.location,J);break;case 3:r.vertexAttrib3fv(ne.location,J);break;case 4:r.vertexAttrib4fv(ne.location,J);break;default:r.vertexAttrib1fv(ne.location,J)}}}}A()}function v(){U();for(const P in a){const O=a[P];for(const z in O){const X=O[z];for(const Y in X)g(X[Y].object),delete X[Y];delete O[z]}delete a[P]}}function y(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const z in O){const X=O[z];for(const Y in X)g(X[Y].object),delete X[Y];delete O[z]}delete a[P.id]}function F(P){for(const O in a){const z=a[O];if(z[P.id]===void 0)continue;const X=z[P.id];for(const Y in X)g(X[Y].object),delete X[Y];delete z[P.id]}}function U(){K(),u=!0,c!==l&&(c=l,f(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:K,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function yv(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(i)f=r,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ev(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=o||e.has("OES_texture_float"),R=x&&S,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:A}}function Tv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Tr,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,x=M*4;let S=p.clippingState||null;l.value=S,S=u(g,d,x,f);for(let R=0;R!==x;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bv(r){let e=new WeakMap;function t(o,a){return a===gc?o.mapping=Cs:a===vc&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gc||a===vc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new F_(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Td extends Sd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,Fh=[.125,.215,.35,.446,.526,.582],Pr=20,Wl=new Td,Bh=new ot;let Xl=null,Yl=0,ql=0;const br=(1+Math.sqrt(5))/2,us=1/br,zh=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,br,us),new I(0,br,-us),new I(us,0,br),new I(-us,0,br),new I(br,us,0),new I(-br,us,0)];class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xl=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,Yl,ql),e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),ql=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:wa,format:hi,colorSpace:ki,depthBuffer:!1},i=Gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Av(s)),this._blurMaterial=wv(s,e,t)}return i}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,n,i){const a=new jn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Bh),u.toneMapping=sr,u.autoClear=!1;const f=new gd({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new lt(new Ws,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Bh),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;ho(i,M*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Cs||e.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=zh[(i-1)%zh.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new lt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Pr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Pr;m>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pr}`);const p=[];let M=0;for(let T=0;T<Pr;++T){const D=T/_,v=Math.exp(-D*D/2);p.push(v),T===0?M+=v:T<m&&(M+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[i],R=3*S*(i>x-_s?i-x+_s:0),A=4*(this._cubeSize-S);ho(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Wl)}}function Av(r){const e=[],t=[],n=[];let i=r;const s=r-_s+1+Fh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-_s?l=Fh[o-r+_s-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),x=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,D=A>2?0:-1,v=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];M.set(v,_*g*A),x.set(d,m*g*A);const y=[A,A,A,A,A,A];S.set(y,p*g*A)}const R=new fi;R.setAttribute("position",new Si(M,_)),R.setAttribute("uv",new Si(x,m)),R.setAttribute("faceIndex",new Si(S,p)),e.push(R),i>_s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gh(r,e,t){const n=new Vr(r,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function wv(r,e,t){const n=new Float32Array(Pr),i=new I(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ru(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Hh(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Vh(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}function Rv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===gc||l===vc,u=l===Cs||l===Ps;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new kh(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new kh(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pv(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,S=M.length;x<S;x+=3){const R=M[x+0],A=M[x+1],T=M[x+2];d.push(R,A,A,T,T,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const R=x+0,A=x+1,T=x+2;d.push(R,A,A,T,T,R)}}else return;const m=new(hd(d)?xd:vd)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Lv(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){r.drawElements(s,g,a,f*l),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,_),t.update(g,s,_)}function d(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Dv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Uv(r,e){return r[0]-e[0]}function Iv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Nv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new $t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let O=function(){K.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var f=O;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),R===!0&&(v=3);let y=u.attributes.position.count*v,F=1;y>e.maxTextureSize&&(F=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const U=new Float32Array(y*F*4*_),K=new pd(U,y,F,_);K.type=ji,K.needsUpdate=!0;const P=v*4;for(let z=0;z<_;z++){const X=A[z],Y=T[z],$=D[z],C=y*F*4*z;for(let Z=0;Z<X.count;Z++){const ne=Z*P;x===!0&&(o.fromBufferAttribute(X,Z),U[C+ne+0]=o.x,U[C+ne+1]=o.y,U[C+ne+2]=o.z,U[C+ne+3]=0),S===!0&&(o.fromBufferAttribute(Y,Z),U[C+ne+4]=o.x,U[C+ne+5]=o.y,U[C+ne+6]=o.z,U[C+ne+7]=0),R===!0&&(o.fromBufferAttribute($,Z),U[C+ne+8]=o.x,U[C+ne+9]=o.y,U[C+ne+10]=o.z,U[C+ne+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:K,size:new be(y,F)},s.set(u,m),u.addEventListener("dispose",O)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const R=_[S];R[0]=S,R[1]=d[S]}_.sort(Iv);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Uv);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const R=a[S],A=R[0],T=R[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+S)!==m[A]&&u.setAttribute("morphTarget"+S,m[A]),p&&u.getAttribute("morphNormal"+S)!==p[A]&&u.setAttribute("morphNormal"+S,p[A]),i[S]=T,M+=T):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Ov(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bd extends Vn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ir,u!==Ir&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ir&&(n=Zi),n===void 0&&u===Ls&&(n=Ur),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ad=new Vn,wd=new bd(1,1);wd.compareFunction=ud;const Rd=new pd,Cd=new x_,Pd=new yd,Wh=[],Xh=[],Yh=new Float32Array(16),qh=new Float32Array(9),$h=new Float32Array(4);function Xs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wh[i];if(s===void 0&&(s=new Float32Array(i),Wh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ol(r,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Fv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function Gv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;$h.set(n),r.uniformMatrix2fv(this.addr,!1,$h),Wt(t,n)}}function Hv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;qh.set(n),r.uniformMatrix3fv(this.addr,!1,qh),Wt(t,n)}}function Vv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Yh.set(n),r.uniformMatrix4fv(this.addr,!1,Yh),Wt(t,n)}}function Wv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function Yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function $v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function Jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function Zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function jv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?wd:Ad;t.setTexture2D(e||s,i)}function Qv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cd,i)}function ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pd,i)}function tx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rd,i)}function nx(r){switch(r){case 5126:return Fv;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Gv;case 35675:return Hv;case 35676:return Vv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return Yv;case 35669:case 35673:return qv;case 5125:return $v;case 36294:return Kv;case 36295:return Jv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}function ix(r,e){r.uniform1fv(this.addr,e)}function rx(r,e){const t=Xs(e,this.size,2);r.uniform2fv(this.addr,t)}function sx(r,e){const t=Xs(e,this.size,3);r.uniform3fv(this.addr,t)}function ax(r,e){const t=Xs(e,this.size,4);r.uniform4fv(this.addr,t)}function ox(r,e){const t=Xs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lx(r,e){const t=Xs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cx(r,e){const t=Xs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ux(r,e){r.uniform1iv(this.addr,e)}function hx(r,e){r.uniform2iv(this.addr,e)}function fx(r,e){r.uniform3iv(this.addr,e)}function dx(r,e){r.uniform4iv(this.addr,e)}function px(r,e){r.uniform1uiv(this.addr,e)}function mx(r,e){r.uniform2uiv(this.addr,e)}function _x(r,e){r.uniform3uiv(this.addr,e)}function gx(r,e){r.uniform4uiv(this.addr,e)}function vx(r,e,t){const n=this.cache,i=e.length,s=ol(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ad,s[o])}function xx(r,e,t){const n=this.cache,i=e.length,s=ol(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Cd,s[o])}function Mx(r,e,t){const n=this.cache,i=e.length,s=ol(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Pd,s[o])}function Sx(r,e,t){const n=this.cache,i=e.length,s=ol(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Rd,s[o])}function yx(r){switch(r){case 5126:return ix;case 35664:return rx;case 35665:return sx;case 35666:return ax;case 35674:return ox;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return ux;case 35667:case 35671:return hx;case 35668:case 35672:return fx;case 35669:case 35673:return dx;case 5125:return px;case 36294:return mx;case 36295:return _x;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nx(t.type)}}class Tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yx(t.type)}}class bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function Kh(r,e){r.seq.push(e),r.map[e.id]=e}function Ax(r,e,t){const n=r.name,i=n.length;for($l.lastIndex=0;;){const s=$l.exec(n),o=$l.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kh(t,c===void 0?new Ex(a,r,e):new Tx(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new bx(a),Kh(t,h)),t=h}}}class wo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ax(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Jh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const wx=37297;let Rx=0;function Cx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Px(r){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(r);let n;switch(e===t?n="":e===ko&&t===zo?n="LinearDisplayP3ToLinearSRGB":e===zo&&t===ko&&(n="LinearSRGBToLinearDisplayP3"),r){case ki:case sl:return[n,"LinearTransferOETF"];case Zt:case eu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Zh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cx(r.getShaderSource(e),o)}else return i}function Lx(r,e){const t=Px(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dx(r,e){let t;switch(e){case Hm:t="Linear";break;case Vm:t="Reinhard";break;case Wm:t="OptimizedCineon";break;case Xm:t="ACESFilmic";break;case qm:t="AgX";break;case Ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ux(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function Ix(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gs).join(`
`)}function Nx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ox(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function gs(r){return r!==""}function jh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(r){return r.replace(Fx,zx)}const Bx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zx(r,e){let t=Ke[e];if(t===void 0){const n=Bx.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tc(t)}const kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(r){return r.replace(kx,Gx)}function Gx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Qf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_m?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function Vx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function Xx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case km:e="ENVMAP_BLENDING_MIX";break;case Gm:e="ENVMAP_BLENDING_ADD";break}return e}function Yx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hx(t),c=Vx(t),u=Wx(t),h=Xx(t),d=Yx(t),f=t.isWebGL2?"":Ux(t),g=Ix(t),_=Nx(s),m=i.createProgram();let p,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gs).join(`
`),p.length>0&&(p+=`
`),M=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gs).join(`
`),M.length>0&&(M+=`
`)):(p=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),M=[f,tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?Ke.tonemapping_pars_fragment:"",t.toneMapping!==sr?Dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),o=Tc(o),o=jh(o,t),o=Qh(o,t),a=Tc(a),a=jh(a,t),a=Qh(a,t),o=ef(o),a=ef(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=x+p+o,R=x+M+a,A=Jh(i,i.VERTEX_SHADER,S),T=Jh(i,i.FRAGMENT_SHADER,R);i.attachShader(m,A),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(U){if(r.debug.checkShaderErrors){const K=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),O=i.getShaderInfoLog(T).trim();let z=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,T);else{const Y=Zh(i,A,"vertex"),$=Zh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+Y+`
`+$)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(P===""||O==="")&&(X=!1);X&&(U.diagnostics={runnable:z,programLog:K,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:M}})}i.deleteShader(A),i.deleteShader(T),v=new wo(i,m),y=Ox(i,m)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,wx)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let $x=0;class Kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jx(e),t.set(e,n)),n}}class Jx{constructor(e){this.id=$x++,this.code=e,this.usedTimes=0}}function Zx(r,e,t,n,i,s,o){const a=new md,l=new Kx,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,y,F,U,K){const P=U.fog,O=K.geometry,z=v.isMeshStandardMaterial?U.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),Y=X&&X.mapping===rl?X.image.height:null,$=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const C=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=C!==void 0?C.length:0;let ne=0;O.morphAttributes.position!==void 0&&(ne=1),O.morphAttributes.normal!==void 0&&(ne=2),O.morphAttributes.color!==void 0&&(ne=3);let q,J,se,_e;if($){const xe=gi[$];q=xe.vertexShader,J=xe.fragmentShader}else q=v.vertexShader,J=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const de=r.getRenderTarget(),Pe=K.isInstancedMesh===!0,Le=K.isBatchedMesh===!0,Ie=!!v.map,He=!!v.matcap,G=!!X,Ve=!!v.aoMap,me=!!v.lightMap,De=!!v.bumpMap,ge=!!v.normalMap,H=!!v.displacementMap,Be=!!v.emissiveMap,w=!!v.metalnessMap,E=!!v.roughnessMap,B=v.anisotropy>0,ee=v.clearcoat>0,Q=v.iridescence>0,te=v.sheen>0,pe=v.transmission>0,ue=B&&!!v.anisotropyMap,ce=ee&&!!v.clearcoatMap,Ae=ee&&!!v.clearcoatNormalMap,Ge=ee&&!!v.clearcoatRoughnessMap,j=Q&&!!v.iridescenceMap,st=Q&&!!v.iridescenceThicknessMap,Re=te&&!!v.sheenColorMap,We=te&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,ve=!!v.specularColorMap,Xe=!!v.specularIntensityMap,je=pe&&!!v.transmissionMap,ct=pe&&!!v.thicknessMap,fe=!!v.gradientMap,re=!!v.alphaMap,L=v.alphaTest>0,ae=!!v.alphaHash,oe=!!v.extensions,Oe=!!O.attributes.uv1,Ue=!!O.attributes.uv2,it=!!O.attributes.uv3;let at=sr;return v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(at=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:J,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Le,instancing:Pe,instancingColor:Pe&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ki,map:Ie,matcap:He,envMap:G,envMapMode:G&&X.mapping,envMapCubeUVHeight:Y,aoMap:Ve,lightMap:me,bumpMap:De,normalMap:ge,displacementMap:d&&H,emissiveMap:Be,normalMapObjectSpace:ge&&v.normalMapType===s_,normalMapTangentSpace:ge&&v.normalMapType===cd,metalnessMap:w,roughnessMap:E,anisotropy:B,anisotropyMap:ue,clearcoat:ee,clearcoatMap:ce,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ge,iridescence:Q,iridescenceMap:j,iridescenceThicknessMap:st,sheen:te,sheenColorMap:Re,sheenRoughnessMap:We,specularMap:Ee,specularColorMap:ve,specularIntensityMap:Xe,transmission:pe,transmissionMap:je,thicknessMap:ct,gradientMap:fe,opaque:v.transparent===!1&&v.blending===Ss,alphaMap:re,alphaTest:L,alphaHash:ae,combine:v.combine,mapUv:Ie&&_(v.map.channel),aoMapUv:Ve&&_(v.aoMap.channel),lightMapUv:me&&_(v.lightMap.channel),bumpMapUv:De&&_(v.bumpMap.channel),normalMapUv:ge&&_(v.normalMap.channel),displacementMapUv:H&&_(v.displacementMap.channel),emissiveMapUv:Be&&_(v.emissiveMap.channel),metalnessMapUv:w&&_(v.metalnessMap.channel),roughnessMapUv:E&&_(v.roughnessMap.channel),anisotropyMapUv:ue&&_(v.anisotropyMap.channel),clearcoatMapUv:ce&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(v.sheenRoughnessMap.channel),specularMapUv:Ee&&_(v.specularMap.channel),specularColorMapUv:ve&&_(v.specularColorMap.channel),specularIntensityMapUv:Xe&&_(v.specularIntensityMap.channel),transmissionMapUv:je&&_(v.transmissionMap.channel),thicknessMapUv:ct&&_(v.thicknessMap.channel),alphaMapUv:re&&_(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ge||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ue,vertexUv3s:it,pointsUvs:K.isPoints===!0&&!!O.attributes.uv&&(Ie||re),fog:!!P,useFog:v.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ie&&v.map.isVideoTexture===!0&&pt.getTransfer(v.map.colorSpace)===yt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ni,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)y.push(F),y.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(M(y,v),x(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function x(v,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){const y=g[v.type];let F;if(y){const U=gi[y];F=U_.clone(U.uniforms)}else F=v.uniforms;return F}function R(v,y){let F;for(let U=0,K=c.length;U<K;U++){const P=c[U];if(P.cacheKey===y){F=P,++F.usedTimes;break}}return F===void 0&&(F=new qx(r,y,v,s),c.push(F)),F}function A(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:D}}function jx(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Qx),n.length>1&&n.sort(d||nf),i.length>1&&i.sort(d||nf)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function eM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new rf,r.set(n,[o])):i>=s.length?(o=new rf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function tM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ot};break;case"SpotLight":t={position:new I,direction:new I,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function nM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iM=0;function rM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sM(r,e){const t=new tM,n=nM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new Ft,a=new Ft;function l(u,h){let d=0,f=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,m=0,p=0,M=0,x=0,S=0,R=0,A=0,T=0,D=0,v=0;u.sort(rM);const y=h===!0?Math.PI:1;for(let U=0,K=u.length;U<K;U++){const P=u[U],O=P.color,z=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*z*y,f+=O.g*z*y,g+=O.b*z*y;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],z);v++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const C=P.shadow,Z=n.get(P);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=P.shadow.matrix,S++}i.directional[_]=$,_++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(O).multiplyScalar(z*y),$.distance=X,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[p]=$;const C=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,C.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[p]=C.matrix,P.castShadow){const Z=n.get(P);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=Y,A++}p++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(O).multiplyScalar(z),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=$,M++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*y),$.distance=P.distance,$.decay=P.decay,P.castShadow){const C=P.shadow,Z=n.get(P);Z.shadowBias=C.bias,Z.shadowNormalBias=C.normalBias,Z.shadowRadius=C.radius,Z.shadowMapSize=C.mapSize,Z.shadowCameraNear=C.camera.near,Z.shadowCameraFar=C.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=$,m++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(z*y),$.groundColor.copy(P.groundColor).multiplyScalar(z*y),i.hemi[x]=$,x++}}M>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==M||F.hemiLength!==x||F.numDirectionalShadows!==S||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==T||F.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=v,F.directionalLength=_,F.pointLength=m,F.spotLength=p,F.rectAreaLength=M,F.hemiLength=x,F.numDirectionalShadows=S,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=T,F.numLightProbes=v,i.version=iM++)}function c(u,h){let d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const S=u[M];if(S.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(S.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const R=i.point[f];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function sf(r,e){const t=new sM(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aM(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new sf(r,e),t.set(s,[l])):o>=a.length?(l=new sf(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class oM extends ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lM extends ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uM=`uniform sampler2D shadow_pass;
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
}`;function hM(r,e,t){let n=new nu;const i=new be,s=new be,o=new $t,a=new oM({depthPacking:r_}),l=new lM,c={},u=t.maxTextureSize,h={[ur]:Tn,[Tn]:ur,[Ni]:Ni},d=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:cM,fragmentShader:uM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new fi;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qf;let p=this.type;this.render=function(A,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=r.getRenderTarget(),y=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),U=r.state;U.setBlending(rr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const K=p!==Li&&this.type===Li,P=p===Li&&this.type!==Li;for(let O=0,z=A.length;O<z;O++){const X=A[O],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const $=Y.getFrameExtents();if(i.multiply($),s.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,Y.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,Y.mapSize.y=s.y)),Y.map===null||K===!0||P===!0){const Z=this.type!==Li?{minFilter:xn,magFilter:xn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Vr(i.x,i.y,Z),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const C=Y.getViewportCount();for(let Z=0;Z<C;Z++){const ne=Y.getViewport(Z);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),U.viewport(o),Y.updateMatrices(X,Z),n=Y.getFrustum(),S(T,D,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===Li&&M(Y,D),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,y,F)};function M(A,T){const D=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vr(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,D,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,D,f,_,null)}function x(A,T,D,v){let y=null;const F=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)y=F;else if(y=D.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=y.uuid,K=T.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let O=P[K];O===void 0&&(O=y.clone(),P[K]=O,T.addEventListener("dispose",R)),y=O}if(y.visible=T.visible,y.wireframe=T.wireframe,v===Li?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=r.properties.get(y);U.light=D}return y}function S(A,T,D,v,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Li)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const K=e.update(A),P=A.material;if(Array.isArray(P)){const O=K.groups;for(let z=0,X=O.length;z<X;z++){const Y=O[z],$=P[Y.materialIndex];if($&&$.visible){const C=x(A,$,v,y);A.onBeforeShadow(r,A,T,D,K,C,Y),r.renderBufferDirect(D,null,K,C,A,Y),A.onAfterShadow(r,A,T,D,K,C,Y)}}}else if(P.visible){const O=x(A,P,v,y);A.onBeforeShadow(r,A,T,D,K,O,null),r.renderBufferDirect(D,null,K,O,A,null),A.onAfterShadow(r,A,T,D,K,O,null)}}const U=A.children;for(let K=0,P=U.length;K<P;K++)S(U[K],T,D,v,y)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const v=c[D],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function fM(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const ae=new $t;let oe=null;const Oe=new $t(0,0,0,0);return{setMask:function(Ue){oe!==Ue&&!L&&(r.colorMask(Ue,Ue,Ue,Ue),oe=Ue)},setLocked:function(Ue){L=Ue},setClear:function(Ue,it,at,Te,xe){xe===!0&&(Ue*=Te,it*=Te,at*=Te),ae.set(Ue,it,at,Te),Oe.equals(ae)===!1&&(r.clearColor(Ue,it,at,Te),Oe.copy(ae))},reset:function(){L=!1,oe=null,Oe.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,oe=null,Oe=null;return{setTest:function(Ue){Ue?Le(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(Ue){ae!==Ue&&!L&&(r.depthMask(Ue),ae=Ue)},setFunc:function(Ue){if(oe!==Ue){switch(Ue){case Um:r.depthFunc(r.NEVER);break;case Im:r.depthFunc(r.ALWAYS);break;case Nm:r.depthFunc(r.LESS);break;case Fo:r.depthFunc(r.LEQUAL);break;case Om:r.depthFunc(r.EQUAL);break;case Fm:r.depthFunc(r.GEQUAL);break;case Bm:r.depthFunc(r.GREATER);break;case zm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Ue}},setLocked:function(Ue){L=Ue},setClear:function(Ue){Oe!==Ue&&(r.clearDepth(Ue),Oe=Ue)},reset:function(){L=!1,ae=null,oe=null,Oe=null}}}function o(){let L=!1,ae=null,oe=null,Oe=null,Ue=null,it=null,at=null,Te=null,xe=null;return{setTest:function(Ce){L||(Ce?Le(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(Ce){ae!==Ce&&!L&&(r.stencilMask(Ce),ae=Ce)},setFunc:function(Ce,ie,Fe){(oe!==Ce||Oe!==ie||Ue!==Fe)&&(r.stencilFunc(Ce,ie,Fe),oe=Ce,Oe=ie,Ue=Fe)},setOp:function(Ce,ie,Fe){(it!==Ce||at!==ie||Te!==Fe)&&(r.stencilOp(Ce,ie,Fe),it=Ce,at=ie,Te=Fe)},setLocked:function(Ce){L=Ce},setClear:function(Ce){xe!==Ce&&(r.clearStencil(Ce),xe=Ce)},reset:function(){L=!1,ae=null,oe=null,Oe=null,Ue=null,it=null,at=null,Te=null,xe=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,S=null,R=null,A=null,T=null,D=null,v=new ot(0,0,0),y=0,F=!1,U=null,K=null,P=null,O=null,z=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(C)[1]),Y=$>=1):C.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),Y=$>=2);let Z=null,ne={};const q=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),se=new $t().fromArray(q),_e=new $t().fromArray(J);function de(L,ae,oe,Oe){const Ue=new Uint8Array(4),it=r.createTexture();r.bindTexture(L,it),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<oe;at++)n&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(ae+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return it}const Pe={};Pe[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Pe[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Pe[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(r.DEPTH_TEST),l.setFunc(Fo),Be(!1),w(zu),Le(r.CULL_FACE),ge(rr);function Le(L){d[L]!==!0&&(r.enable(L),d[L]=!0)}function Ie(L){d[L]!==!1&&(r.disable(L),d[L]=!1)}function He(L,ae){return f[L]!==ae?(r.bindFramebuffer(L,ae),f[L]=ae,n&&(L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ae),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function G(L,ae){let oe=_,Oe=!1;if(L)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),L.isWebGLMultipleRenderTargets){const Ue=L.texture;if(oe.length!==Ue.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let it=0,at=Ue.length;it<at;it++)oe[it]=r.COLOR_ATTACHMENT0+it;oe.length=Ue.length,Oe=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,Oe=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,Oe=!0);Oe&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Ve(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const me={[Cr]:r.FUNC_ADD,[vm]:r.FUNC_SUBTRACT,[xm]:r.FUNC_REVERSE_SUBTRACT};if(n)me[Vu]=r.MIN,me[Wu]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(me[Vu]=L.MIN_EXT,me[Wu]=L.MAX_EXT)}const De={[Mm]:r.ZERO,[Sm]:r.ONE,[ym]:r.SRC_COLOR,[mc]:r.SRC_ALPHA,[Rm]:r.SRC_ALPHA_SATURATE,[Am]:r.DST_COLOR,[Tm]:r.DST_ALPHA,[Em]:r.ONE_MINUS_SRC_COLOR,[_c]:r.ONE_MINUS_SRC_ALPHA,[wm]:r.ONE_MINUS_DST_COLOR,[bm]:r.ONE_MINUS_DST_ALPHA,[Cm]:r.CONSTANT_COLOR,[Pm]:r.ONE_MINUS_CONSTANT_COLOR,[Lm]:r.CONSTANT_ALPHA,[Dm]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(L,ae,oe,Oe,Ue,it,at,Te,xe,Ce){if(L===rr){p===!0&&(Ie(r.BLEND),p=!1);return}if(p===!1&&(Le(r.BLEND),p=!0),L!==gm){if(L!==M||Ce!==F){if((x!==Cr||A!==Cr)&&(r.blendEquation(r.FUNC_ADD),x=Cr,A=Cr),Ce)switch(L){case Ss:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ku:r.blendFunc(r.ONE,r.ONE);break;case Gu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ku:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,T=null,D=null,v.set(0,0,0),y=0,M=L,F=Ce}return}Ue=Ue||ae,it=it||oe,at=at||Oe,(ae!==x||Ue!==A)&&(r.blendEquationSeparate(me[ae],me[Ue]),x=ae,A=Ue),(oe!==S||Oe!==R||it!==T||at!==D)&&(r.blendFuncSeparate(De[oe],De[Oe],De[it],De[at]),S=oe,R=Oe,T=it,D=at),(Te.equals(v)===!1||xe!==y)&&(r.blendColor(Te.r,Te.g,Te.b,xe),v.copy(Te),y=xe),M=L,F=!1}function H(L,ae){L.side===Ni?Ie(r.CULL_FACE):Le(r.CULL_FACE);let oe=L.side===Tn;ae&&(oe=!oe),Be(oe),L.blending===Ss&&L.transparent===!1?ge(rr):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Oe=L.stencilWrite;c.setTest(Oe),Oe&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Le(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){U!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),U=L)}function w(L){L!==pm?(Le(r.CULL_FACE),L!==K&&(L===zu?r.cullFace(r.BACK):L===mm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),K=L}function E(L){L!==P&&(Y&&r.lineWidth(L),P=L)}function B(L,ae,oe){L?(Le(r.POLYGON_OFFSET_FILL),(O!==ae||z!==oe)&&(r.polygonOffset(ae,oe),O=ae,z=oe)):Ie(r.POLYGON_OFFSET_FILL)}function ee(L){L?Le(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function Q(L){L===void 0&&(L=r.TEXTURE0+X-1),Z!==L&&(r.activeTexture(L),Z=L)}function te(L,ae,oe){oe===void 0&&(Z===null?oe=r.TEXTURE0+X-1:oe=Z);let Oe=ne[oe];Oe===void 0&&(Oe={type:void 0,texture:void 0},ne[oe]=Oe),(Oe.type!==L||Oe.texture!==ae)&&(Z!==oe&&(r.activeTexture(oe),Z=oe),r.bindTexture(L,ae||Pe[L]),Oe.type=L,Oe.texture=ae)}function pe(){const L=ne[Z];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(L){se.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function je(L){_e.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function ct(L,ae){let oe=h.get(ae);oe===void 0&&(oe=new WeakMap,h.set(ae,oe));let Oe=oe.get(L);Oe===void 0&&(Oe=r.getUniformBlockIndex(ae,L.name),oe.set(L,Oe))}function fe(L,ae){const Oe=h.get(ae).get(L);u.get(ae)!==Oe&&(r.uniformBlockBinding(ae,Oe,L.__bindingPointIndex),u.set(ae,Oe))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Z=null,ne={},f={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,S=null,R=null,A=null,T=null,D=null,v=new ot(0,0,0),y=0,F=!1,U=null,K=null,P=null,O=null,z=null,se.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Ie,bindFramebuffer:He,drawBuffers:G,useProgram:Ve,setBlending:ge,setMaterial:H,setFlipSided:Be,setCullFace:w,setLineWidth:E,setPolygonOffset:B,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:pe,compressedTexImage2D:ue,compressedTexImage3D:ce,texImage2D:Ee,texImage3D:ve,updateUBOMapping:ct,uniformBlockBinding:fe,texStorage2D:Re,texStorage3D:We,texSubImage2D:Ae,texSubImage3D:Ge,compressedTexSubImage2D:j,compressedTexSubImage3D:st,scissor:Xe,viewport:je,reset:re}}function dM(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return f?new OffscreenCanvas(w,E):Ho("canvas")}function _(w,E,B,ee){let Q=1;if((w.width>ee||w.height>ee)&&(Q=ee/Math.max(w.width,w.height)),Q<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=E?Ec:Math.floor,pe=te(Q*w.width),ue=te(Q*w.height);h===void 0&&(h=g(pe,ue));const ce=B?g(pe,ue):h;return ce.width=pe,ce.height=ue,ce.getContext("2d").drawImage(w,0,0,pe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+pe+"x"+ue+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Mh(w.width)&&Mh(w.height)}function p(w){return a?!1:w.wrapS!==ui||w.wrapT!==ui||w.minFilter!==xn&&w.minFilter!==Zn}function M(w,E){return w.generateMipmaps&&E&&w.minFilter!==xn&&w.minFilter!==Zn}function x(w){r.generateMipmap(w)}function S(w,E,B,ee,Q=!1){if(a===!1)return E;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=E;if(E===r.RED&&(B===r.FLOAT&&(te=r.R32F),B===r.HALF_FLOAT&&(te=r.R16F),B===r.UNSIGNED_BYTE&&(te=r.R8)),E===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(te=r.R8UI),B===r.UNSIGNED_SHORT&&(te=r.R16UI),B===r.UNSIGNED_INT&&(te=r.R32UI),B===r.BYTE&&(te=r.R8I),B===r.SHORT&&(te=r.R16I),B===r.INT&&(te=r.R32I)),E===r.RG&&(B===r.FLOAT&&(te=r.RG32F),B===r.HALF_FLOAT&&(te=r.RG16F),B===r.UNSIGNED_BYTE&&(te=r.RG8)),E===r.RGBA){const pe=Q?Bo:pt.getTransfer(ee);B===r.FLOAT&&(te=r.RGBA32F),B===r.HALF_FLOAT&&(te=r.RGBA16F),B===r.UNSIGNED_BYTE&&(te=pe===yt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(w,E,B){return M(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==xn&&w.minFilter!==Zn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function A(w){return w===xn||w===Xu||w===xl?r.NEAREST:r.LINEAR}function T(w){const E=w.target;E.removeEventListener("dispose",T),v(E),E.isVideoTexture&&u.delete(E)}function D(w){const E=w.target;E.removeEventListener("dispose",D),F(E)}function v(w){const E=n.get(w);if(E.__webglInit===void 0)return;const B=w.source,ee=d.get(B);if(ee){const Q=ee[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(w),Object.keys(ee).length===0&&d.delete(B)}n.remove(w)}function y(w){const E=n.get(w);r.deleteTexture(E.__webglTexture);const B=w.source,ee=d.get(B);delete ee[E.__cacheKey],o.memory.textures--}function F(w){const E=w.texture,B=n.get(w),ee=n.get(E);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let te=0;te<B.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(B.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)r.deleteFramebuffer(B.__webglFramebuffer[Q]);else r.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,te=E.length;Q<te;Q++){const pe=n.get(E[Q]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(E[Q])}n.remove(E),n.remove(w)}let U=0;function K(){U=0}function P(){const w=U;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),U+=1,w}function O(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function z(w,E){const B=n.get(w);if(w.isVideoTexture&&H(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(B,w,E);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+E)}function X(w,E){const B=n.get(w);if(w.version>0&&B.__version!==w.version){se(B,w,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+E)}function Y(w,E){const B=n.get(w);if(w.version>0&&B.__version!==w.version){se(B,w,E);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+E)}function $(w,E){const B=n.get(w);if(w.version>0&&B.__version!==w.version){_e(B,w,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+E)}const C={[xc]:r.REPEAT,[ui]:r.CLAMP_TO_EDGE,[Mc]:r.MIRRORED_REPEAT},Z={[xn]:r.NEAREST,[Xu]:r.NEAREST_MIPMAP_NEAREST,[xl]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[$m]:r.LINEAR_MIPMAP_NEAREST,[Aa]:r.LINEAR_MIPMAP_LINEAR},ne={[a_]:r.NEVER,[f_]:r.ALWAYS,[o_]:r.LESS,[ud]:r.LEQUAL,[l_]:r.EQUAL,[h_]:r.GEQUAL,[c_]:r.GREATER,[u_]:r.NOTEQUAL};function q(w,E,B){if(B?(r.texParameteri(w,r.TEXTURE_WRAP_S,C[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,C[E.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,C[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,Z[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,Z[E.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==ui||E.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,A(E.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==xn&&E.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===xn||E.minFilter!==xl&&E.minFilter!==Aa||E.type===ji&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===wa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function J(w,E){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",T));const ee=E.source;let Q=d.get(ee);Q===void 0&&(Q={},d.set(ee,Q));const te=O(E);if(te!==w.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[te].usedTimes++;const pe=Q[w.__cacheKey];pe!==void 0&&(Q[w.__cacheKey].usedTimes--,pe.usedTimes===0&&y(E)),w.__cacheKey=te,w.__webglTexture=Q[te].texture}return B}function se(w,E,B){let ee=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=r.TEXTURE_3D);const Q=J(w,E),te=E.source;t.bindTexture(ee,w.__webglTexture,r.TEXTURE0+B);const pe=n.get(te);if(te.version!==pe.__version||Q===!0){t.activeTexture(r.TEXTURE0+B);const ue=pt.getPrimaries(pt.workingColorSpace),ce=E.colorSpace===ti?null:pt.getPrimaries(E.colorSpace),Ae=E.colorSpace===ti||ue===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ge=p(E)&&m(E.image)===!1;let j=_(E.image,Ge,!1,i.maxTextureSize);j=Be(E,j);const st=m(j)||a,Re=s.convert(E.format,E.colorSpace);let We=s.convert(E.type),Ee=S(E.internalFormat,Re,We,E.colorSpace,E.isVideoTexture);q(ee,E,st);let ve;const Xe=E.mipmaps,je=a&&E.isVideoTexture!==!0&&Ee!==od,ct=pe.__version===void 0||Q===!0,fe=R(E,j,st);if(E.isDepthTexture)Ee=r.DEPTH_COMPONENT,a?E.type===ji?Ee=r.DEPTH_COMPONENT32F:E.type===Zi?Ee=r.DEPTH_COMPONENT24:E.type===Ur?Ee=r.DEPTH24_STENCIL8:Ee=r.DEPTH_COMPONENT16:E.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ir&&Ee===r.DEPTH_COMPONENT&&E.type!==Qc&&E.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Zi,We=s.convert(E.type)),E.format===Ls&&Ee===r.DEPTH_COMPONENT&&(Ee=r.DEPTH_STENCIL,E.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ur,We=s.convert(E.type))),ct&&(je?t.texStorage2D(r.TEXTURE_2D,1,Ee,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,Ee,j.width,j.height,0,Re,We,null));else if(E.isDataTexture)if(Xe.length>0&&st){je&&ct&&t.texStorage2D(r.TEXTURE_2D,fe,Ee,Xe[0].width,Xe[0].height);for(let re=0,L=Xe.length;re<L;re++)ve=Xe[re],je?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,Re,We,ve.data):t.texImage2D(r.TEXTURE_2D,re,Ee,ve.width,ve.height,0,Re,We,ve.data);E.generateMipmaps=!1}else je?(ct&&t.texStorage2D(r.TEXTURE_2D,fe,Ee,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,j.width,j.height,Re,We,j.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,j.width,j.height,0,Re,We,j.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){je&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Ee,Xe[0].width,Xe[0].height,j.depth);for(let re=0,L=Xe.length;re<L;re++)ve=Xe[re],E.format!==hi?Re!==null?je?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,j.depth,Re,ve.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ee,ve.width,ve.height,j.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,j.depth,Re,We,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ee,ve.width,ve.height,j.depth,0,Re,We,ve.data)}else{je&&ct&&t.texStorage2D(r.TEXTURE_2D,fe,Ee,Xe[0].width,Xe[0].height);for(let re=0,L=Xe.length;re<L;re++)ve=Xe[re],E.format!==hi?Re!==null?je?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,Re,We,ve.data):t.texImage2D(r.TEXTURE_2D,re,Ee,ve.width,ve.height,0,Re,We,ve.data)}else if(E.isDataArrayTexture)je?(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Ee,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Re,We,j.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,j.width,j.height,j.depth,0,Re,We,j.data);else if(E.isData3DTexture)je?(ct&&t.texStorage3D(r.TEXTURE_3D,fe,Ee,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Re,We,j.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,j.width,j.height,j.depth,0,Re,We,j.data);else if(E.isFramebufferTexture){if(ct)if(je)t.texStorage2D(r.TEXTURE_2D,fe,Ee,j.width,j.height);else{let re=j.width,L=j.height;for(let ae=0;ae<fe;ae++)t.texImage2D(r.TEXTURE_2D,ae,Ee,re,L,0,Re,We,null),re>>=1,L>>=1}}else if(Xe.length>0&&st){je&&ct&&t.texStorage2D(r.TEXTURE_2D,fe,Ee,Xe[0].width,Xe[0].height);for(let re=0,L=Xe.length;re<L;re++)ve=Xe[re],je?t.texSubImage2D(r.TEXTURE_2D,re,0,0,Re,We,ve):t.texImage2D(r.TEXTURE_2D,re,Ee,Re,We,ve);E.generateMipmaps=!1}else je?(ct&&t.texStorage2D(r.TEXTURE_2D,fe,Ee,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,We,j)):t.texImage2D(r.TEXTURE_2D,0,Ee,Re,We,j);M(E,st)&&x(ee),pe.__version=te.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function _e(w,E,B){if(E.image.length!==6)return;const ee=J(w,E),Q=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+B);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(r.TEXTURE0+B);const pe=pt.getPrimaries(pt.workingColorSpace),ue=E.colorSpace===ti?null:pt.getPrimaries(E.colorSpace),ce=E.colorSpace===ti||pe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,j=[];for(let re=0;re<6;re++)!Ae&&!Ge?j[re]=_(E.image[re],!1,!0,i.maxCubemapSize):j[re]=Ge?E.image[re].image:E.image[re],j[re]=Be(E,j[re]);const st=j[0],Re=m(st)||a,We=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),ve=S(E.internalFormat,We,Ee,E.colorSpace),Xe=a&&E.isVideoTexture!==!0,je=te.__version===void 0||ee===!0;let ct=R(E,st,Re);q(r.TEXTURE_CUBE_MAP,E,Re);let fe;if(Ae){Xe&&je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,ve,st.width,st.height);for(let re=0;re<6;re++){fe=j[re].mipmaps;for(let L=0;L<fe.length;L++){const ae=fe[L];E.format!==hi?We!==null?Xe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,We,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,ve,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,We,Ee,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,ve,ae.width,ae.height,0,We,Ee,ae.data)}}}else{fe=E.mipmaps,Xe&&je&&(fe.length>0&&ct++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,ve,j[0].width,j[0].height));for(let re=0;re<6;re++)if(Ge){Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,j[re].width,j[re].height,We,Ee,j[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ve,j[re].width,j[re].height,0,We,Ee,j[re].data);for(let L=0;L<fe.length;L++){const oe=fe[L].image[re].image;Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,oe.width,oe.height,We,Ee,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,ve,oe.width,oe.height,0,We,Ee,oe.data)}}else{Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,We,Ee,j[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ve,We,Ee,j[re]);for(let L=0;L<fe.length;L++){const ae=fe[L];Xe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,We,Ee,ae.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,ve,We,Ee,ae.image[re])}}}M(E,Re)&&x(r.TEXTURE_CUBE_MAP),te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function de(w,E,B,ee,Q,te){const pe=s.convert(B.format,B.colorSpace),ue=s.convert(B.type),ce=S(B.internalFormat,pe,ue,B.colorSpace);if(!n.get(E).__hasExternalTextures){const Ge=Math.max(1,E.width>>te),j=Math.max(1,E.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ce,Ge,j,E.depth,0,pe,ue,null):t.texImage2D(Q,te,ce,Ge,j,0,pe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,0,De(E)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(w,E,B){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ee=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||ge(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ji?ee=r.DEPTH_COMPONENT32F:Q.type===Zi&&(ee=r.DEPTH_COMPONENT24));const te=De(E);ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,ee,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,ee,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const ee=De(E);B&&ge(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],pe=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),ce=S(te.internalFormat,pe,ue,te.colorSpace),Ae=De(E);B&&ge(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ce,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ce,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,Q=De(E);if(E.depthTexture.format===Ir)ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Ls)ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ie(w){const E=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Le(E.__webglFramebuffer,w)}else if(B){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=r.createRenderbuffer(),Pe(E.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Pe(E.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(w,E,B){const ee=n.get(w);E!==void 0&&de(ee.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ie(w)}function G(w){const E=w.texture,B=n.get(w),ee=n.get(E);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,o.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,pe=m(w)||a;if(Q){B.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[ue]=[];for(let ce=0;ce<E.mipmaps.length;ce++)B.__webglFramebuffer[ue][ce]=r.createFramebuffer()}else B.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)B.__webglFramebuffer[ue]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const ue=w.texture;for(let ce=0,Ae=ue.length;ce<Ae;ce++){const Ge=n.get(ue[ce]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ge(w)===!1){const ue=te?E:[E];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<ue.length;ce++){const Ae=ue[ce];B.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ge=s.convert(Ae.format,Ae.colorSpace),j=s.convert(Ae.type),st=S(Ae.internalFormat,Ge,j,Ae.colorSpace,w.isXRRenderTarget===!0),Re=De(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,st,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Pe(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),q(r.TEXTURE_CUBE_MAP,E,pe);for(let ue=0;ue<6;ue++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)de(B.__webglFramebuffer[ue][ce],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else de(B.__webglFramebuffer[ue],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);M(E,pe)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ue=w.texture;for(let ce=0,Ae=ue.length;ce<Ae;ce++){const Ge=ue[ce],j=n.get(Ge);t.bindTexture(r.TEXTURE_2D,j.__webglTexture),q(r.TEXTURE_2D,Ge,pe),de(B.__webglFramebuffer,w,Ge,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),M(Ge,pe)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ue=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ee.__webglTexture),q(ue,E,pe),a&&E.mipmaps&&E.mipmaps.length>0)for(let ce=0;ce<E.mipmaps.length;ce++)de(B.__webglFramebuffer[ce],w,E,r.COLOR_ATTACHMENT0,ue,ce);else de(B.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,ue,0);M(E,pe)&&x(ue),t.unbindTexture()}w.depthBuffer&&Ie(w)}function Ve(w){const E=m(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,Q=B.length;ee<Q;ee++){const te=B[ee];if(M(te,E)){const pe=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ue=n.get(te).__webglTexture;t.bindTexture(pe,ue),x(pe),t.unbindTexture()}}}function me(w){if(a&&w.samples>0&&ge(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,ee=w.height;let Q=r.COLOR_BUFFER_BIT;const te=[],pe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(w),ce=w.isWebGLMultipleRenderTargets===!0;if(ce)for(let Ae=0;Ae<E.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){te.push(r.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&te.push(pe);const Ge=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Ge===!1&&(w.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]),Ge===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pe])),ce){const j=n.get(E[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,j,0)}r.blitFramebuffer(0,0,B,ee,0,0,B,ee,Q,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Ae=0;Ae<E.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const Ge=n.get(E[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function De(w){return Math.min(i.maxSamples,w.samples)}function ge(w){const E=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function H(w){const E=o.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function Be(w,E){const B=w.colorSpace,ee=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Sc||B!==ki&&B!==ti&&(pt.getTransfer(B)===yt?a===!1?e.has("EXT_sRGB")===!0&&ee===hi?(w.format=Sc,w.minFilter=Zn,w.generateMipmaps=!1):E=fd.sRGBToLinear(E):(ee!==hi||Q!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=P,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=He,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function pM(r,e,t){const n=t.isWebGL2;function i(s,o=ti){let a;const l=pt.getTransfer(o);if(s===ar)return r.UNSIGNED_BYTE;if(s===nd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===id)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Km)return r.BYTE;if(s===Jm)return r.SHORT;if(s===Qc)return r.UNSIGNED_SHORT;if(s===td)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===wa)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zm)return r.ALPHA;if(s===hi)return r.RGBA;if(s===jm)return r.LUMINANCE;if(s===Qm)return r.LUMINANCE_ALPHA;if(s===Ir)return r.DEPTH_COMPONENT;if(s===Ls)return r.DEPTH_STENCIL;if(s===Sc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===e_)return r.RED;if(s===rd)return r.RED_INTEGER;if(s===t_)return r.RG;if(s===sd)return r.RG_INTEGER;if(s===ad)return r.RGBA_INTEGER;if(s===Ml||s===Sl||s===yl||s===El)if(l===yt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ml)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===El)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ml)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===El)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yu||s===qu||s===$u||s===Ku)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$u)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ku)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ju||s===Zu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ju)return l===yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zu)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ju||s===Qu||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===ah||s===oh||s===lh||s===ch||s===uh||s===hh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ju)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qu)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===eh)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===th)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nh)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ih)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rh)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sh)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ah)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oh)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lh)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ch)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===uh)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hh)return l===yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tl||s===fh||s===dh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Tl)return l===yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===n_||s===ph||s===mh||s===_h)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Tl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ph)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_h)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ur?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class mM extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kn extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gM extends Vs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const M=[],x=[],S=new be;let R=null;const A=new jn;A.layers.enable(1),A.viewport=new $t;const T=new jn;T.layers.enable(2),T.viewport=new $t;const D=[A,T],v=new mM;v.layers.enable(1),v.layers.enable(2);let y=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=M[q];return J===void 0&&(J=new Kl,M[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=M[q];return J===void 0&&(J=new Kl,M[q]=J),J.getGripSpace()},this.getHand=function(q){let J=M[q];return J===void 0&&(J=new Kl,M[q]=J),J.getHandSpace()};function U(q){const J=x.indexOf(q.inputSource);if(J===-1)return;const se=M[J];se!==void 0&&(se.update(q.inputSource,q.frame,c||o),se.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",P);for(let q=0;q<M.length;q++){const J=x[q];J!==null&&(x[q]=null,M[q].disconnect(J))}y=null,F=null,e.setRenderTarget(m),f=null,d=null,h=null,i=null,p=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",K),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Vr(f.framebufferWidth,f.framebufferHeight,{format:hi,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,se=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Ls:Ir,se=_.stencil?Ur:Zi);const de={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Vr(d.textureWidth,d.textureHeight,{format:hi,type:ar,depthTexture:new bd(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Pe=e.properties.get(p);Pe.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(q){for(let J=0;J<q.removed.length;J++){const se=q.removed[J],_e=x.indexOf(se);_e>=0&&(x[_e]=null,M[_e].disconnect(se))}for(let J=0;J<q.added.length;J++){const se=q.added[J];let _e=x.indexOf(se);if(_e===-1){for(let Pe=0;Pe<M.length;Pe++)if(Pe>=x.length){x.push(se),_e=Pe;break}else if(x[Pe]===null){x[Pe]=se,_e=Pe;break}if(_e===-1)break}const de=M[_e];de&&de.connect(se)}}const O=new I,z=new I;function X(q,J,se){O.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(se.matrixWorld);const _e=O.distanceTo(z),de=J.projectionMatrix.elements,Pe=se.projectionMatrix.elements,Le=de[14]/(de[10]-1),Ie=de[14]/(de[10]+1),He=(de[9]+1)/de[5],G=(de[9]-1)/de[5],Ve=(de[8]-1)/de[0],me=(Pe[8]+1)/Pe[0],De=Le*Ve,ge=Le*me,H=_e/(-Ve+me),Be=H*-Ve;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Be),q.translateZ(H),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const w=Le+H,E=Ie+H,B=De-Be,ee=ge+(_e-Be),Q=He*Ie/E*w,te=G*Ie/E*w;q.projectionMatrix.makePerspective(B,ee,Q,te,w,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Y(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;v.near=T.near=A.near=q.near,v.far=T.far=A.far=q.far,(y!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,F=v.far);const J=q.parent,se=v.cameras;Y(v,J);for(let _e=0;_e<se.length;_e++)Y(se[_e],J);se.length===2?X(v,A,T):v.projectionMatrix.copy(A.projectionMatrix),$(q,v,J)};function $(q,J,se){se===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(se.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=yc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let C=null;function Z(q,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const se=u.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let _e=!1;se.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let de=0;de<se.length;de++){const Pe=se[de];let Le=null;if(f!==null)Le=f.getViewport(Pe);else{const He=h.getViewSubImage(d,Pe);Le=He.viewport,de===0&&(e.setRenderTargetTextures(p,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(p))}let Ie=D[de];Ie===void 0&&(Ie=new jn,Ie.layers.enable(de),Ie.viewport=new $t,D[de]=Ie),Ie.matrix.fromArray(Pe.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Pe.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Le.x,Le.y,Le.width,Le.height),de===0&&(v.matrix.copy(Ie.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(Ie)}}for(let se=0;se<M.length;se++){const _e=x[se],de=M[se];_e!==null&&de!==void 0&&de.update(_e,J,c||o)}C&&C(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ne=new Ed;ne.setAnimationLoop(Z),this.setAnimationLoop=function(q){C=q},this.dispose=function(){}}}function vM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Md(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xM(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function c(M,x){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(M,R);const A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function u(M){const x=h();M.__bindingPointIndex=x;const S=r.createBuffer(),R=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=i[M.id],S=M.uniforms,R=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,T=S.length;A<T;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,y=D.length;v<y;v++){const F=D[v];if(f(F,A,v,R)===!0){const U=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let O=0;O<K.length;O++){const z=K[O],X=_(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,U+P,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,x,S,R){const A=M.value,T=x+"_"+S;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const D=R[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(M){const x=M.uniforms;let S=0;const R=16;for(let T=0,D=x.length;T<D;T++){const v=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,F=v.length;y<F;y++){const U=v[y],K=Array.isArray(U.value)?U.value:[U.value];for(let P=0,O=K.length;P<O;P++){const z=K[P],X=_(z),Y=S%R;Y!==0&&R-Y<X.boundary&&(S+=R-Y),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=X.storage}}}const A=S%R;return A>0&&(S+=R-A),M.__size=S,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Ld{constructor(e={}){const{canvas:t=p_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const x=this;let S=!1,R=0,A=0,T=null,D=-1,v=null;const y=new $t,F=new $t;let U=null;const K=new ot(0);let P=0,O=t.width,z=t.height,X=1,Y=null,$=null;const C=new $t(0,0,O,z),Z=new $t(0,0,O,z);let ne=!1;const q=new nu;let J=!1,se=!1,_e=null;const de=new Ft,Pe=new be,Le=new I,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return T===null?X:1}let G=n;function Ve(b,N){for(let W=0;W<b.length;W++){const V=b[W],k=t.getContext(V,N);if(k!==null)return k}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ae,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),G=Ve(N,b),G===null)throw Ve(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let me,De,ge,H,Be,w,E,B,ee,Q,te,pe,ue,ce,Ae,Ge,j,st,Re,We,Ee,ve,Xe,je;function ct(){me=new Cv(G),De=new Ev(G,me,e),me.init(De),ve=new pM(G,me,De),ge=new fM(G,me,De),H=new Dv(G),Be=new jx,w=new dM(G,me,ge,Be,De,ve,H),E=new bv(x),B=new Rv(x),ee=new k_(G,De),Xe=new Sv(G,me,ee,De),Q=new Pv(G,ee,H,Xe),te=new Ov(G,Q,ee,H),Re=new Nv(G,De,w),Ge=new Tv(Be),pe=new Zx(x,E,B,me,De,Xe,Ge),ue=new vM(x,Be),ce=new eM,Ae=new aM(me,De),st=new Mv(x,E,B,ge,te,d,l),j=new hM(x,te,De),je=new xM(G,H,De,ge),We=new yv(G,me,H,De),Ee=new Lv(G,me,H,De),H.programs=pe.programs,x.capabilities=De,x.extensions=me,x.properties=Be,x.renderLists=ce,x.shadowMap=j,x.state=ge,x.info=H}ct();const fe=new gM(x,G);this.xr=fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(O,z,!1))},this.getSize=function(b){return b.set(O,z)},this.setSize=function(b,N,W=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,z=N,t.width=Math.floor(b*X),t.height=Math.floor(N*X),W===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(O*X,z*X).floor()},this.setDrawingBufferSize=function(b,N,W){O=b,z=N,X=W,t.width=Math.floor(b*W),t.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,N,W,V){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,N,W,V),ge.viewport(y.copy(C).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(Z)},this.setScissor=function(b,N,W,V){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,N,W,V),ge.scissor(F.copy(Z).multiplyScalar(X).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){ge.setScissorTest(ne=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(b=!0,N=!0,W=!0){let V=0;if(b){let k=!1;if(T!==null){const le=T.texture.format;k=le===ad||le===sd||le===rd}if(k){const le=T.texture.type,Se=le===ar||le===Zi||le===Qc||le===Ur||le===nd||le===id,ze=st.getClearColor(),ye=st.getClearAlpha(),we=ze.r,ke=ze.g,$e=ze.b;Se?(f[0]=we,f[1]=ke,f[2]=$e,f[3]=ye,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=we,g[1]=ke,g[2]=$e,g[3]=ye,G.clearBufferiv(G.COLOR,0,g))}else V|=G.COLOR_BUFFER_BIT}N&&(V|=G.DEPTH_BUFFER_BIT),W&&(V|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),Ae.dispose(),Be.dispose(),E.dispose(),B.dispose(),te.dispose(),Xe.dispose(),je.dispose(),pe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",xe),fe.removeEventListener("sessionend",Ce),_e&&(_e.dispose(),_e=null),ie.stop()};function re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=H.autoReset,N=j.enabled,W=j.autoUpdate,V=j.needsUpdate,k=j.type;ct(),H.autoReset=b,j.enabled=N,j.autoUpdate=W,j.needsUpdate=V,j.type=k}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const N=b.target;N.removeEventListener("dispose",oe),Oe(N)}function Oe(b){Ue(b),Be.remove(b)}function Ue(b){const N=Be.get(b).programs;N!==void 0&&(N.forEach(function(W){pe.releaseProgram(W)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,V,k,le){N===null&&(N=Ie);const Se=k.isMesh&&k.matrixWorld.determinant()<0,ze=xt(b,N,W,V,k);ge.setMaterial(V,Se);let ye=W.index,we=1;if(V.wireframe===!0){if(ye=Q.getWireframeAttribute(W),ye===void 0)return;we=2}const ke=W.drawRange,$e=W.attributes.position;let Et=ke.start*we,zt=(ke.start+ke.count)*we;le!==null&&(Et=Math.max(Et,le.start*we),zt=Math.min(zt,(le.start+le.count)*we)),ye!==null?(Et=Math.max(Et,0),zt=Math.min(zt,ye.count)):$e!=null&&(Et=Math.max(Et,0),zt=Math.min(zt,$e.count));const ft=zt-Et;if(ft<0||ft===1/0)return;Xe.setup(k,V,ze,W,ye);let fn,dt=We;if(ye!==null&&(fn=ee.get(ye),dt=Ee,dt.setIndex(fn)),k.isMesh)V.wireframe===!0?(ge.setLineWidth(V.wireframeLinewidth*He()),dt.setMode(G.LINES)):dt.setMode(G.TRIANGLES);else if(k.isLine){let Ye=V.linewidth;Ye===void 0&&(Ye=1),ge.setLineWidth(Ye*He()),k.isLineSegments?dt.setMode(G.LINES):k.isLineLoop?dt.setMode(G.LINE_LOOP):dt.setMode(G.LINE_STRIP)}else k.isPoints?dt.setMode(G.POINTS):k.isSprite&&dt.setMode(G.TRIANGLES);if(k.isBatchedMesh)dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)dt.renderInstances(Et,ft,k.count);else if(W.isInstancedBufferGeometry){const Ye=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ml=Math.min(W.instanceCount,Ye);dt.renderInstances(Et,ft,ml)}else dt.render(Et,ft)};function it(b,N,W){b.transparent===!0&&b.side===Ni&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,vt(b,N,W),b.side=ur,b.needsUpdate=!0,vt(b,N,W),b.side=Ni):vt(b,N,W)}this.compile=function(b,N,W=null){W===null&&(W=b),m=Ae.get(W),m.init(),M.push(m),W.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);const V=new Set;return b.traverse(function(k){const le=k.material;if(le)if(Array.isArray(le))for(let Se=0;Se<le.length;Se++){const ze=le[Se];it(ze,W,k),V.add(ze)}else it(le,W,k),V.add(le)}),M.pop(),m=null,V},this.compileAsync=function(b,N,W=null){const V=this.compile(b,N,W);return new Promise(k=>{function le(){if(V.forEach(function(Se){Be.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){k(b);return}setTimeout(le,10)}me.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let at=null;function Te(b){at&&at(b)}function xe(){ie.stop()}function Ce(){ie.start()}const ie=new Ed;ie.setAnimationLoop(Te),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(b){at=b,fe.setAnimationLoop(b),b===null?ie.stop():ie.start()},fe.addEventListener("sessionstart",xe),fe.addEventListener("sessionend",Ce),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,N,T),m=Ae.get(b,M.length),m.init(),M.push(m),de.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(de),se=this.localClippingEnabled,J=Ge.init(this.clippingPlanes,se),_=ce.get(b,p.length),_.init(),p.push(_),Fe(b,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,J===!0&&Ge.beginShadows();const W=m.state.shadowsArray;if(j.render(W,b,N),J===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(_,b),m.setupLights(x._useLegacyLights),N.isArrayCamera){const V=N.cameras;for(let k=0,le=V.length;k<le;k++){const Se=V[k];Ne(_,b,Se,Se.viewport)}}else Ne(_,b,N);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,N),Xe.resetDefaultState(),D=-1,v=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Fe(b,N,W,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){V&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Se=te.update(b),ze=b.material;ze.visible&&_.push(b,Se,ze,W,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const Se=te.update(b),ze=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Le.copy(Se.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(ze)){const ye=Se.groups;for(let we=0,ke=ye.length;we<ke;we++){const $e=ye[we],Et=ze[$e.materialIndex];Et&&Et.visible&&_.push(b,Se,Et,W,Le.z,$e)}}else ze.visible&&_.push(b,Se,ze,W,Le.z,null)}}const le=b.children;for(let Se=0,ze=le.length;Se<ze;Se++)Fe(le[Se],N,W,V)}function Ne(b,N,W,V){const k=b.opaque,le=b.transmissive,Se=b.transparent;m.setupLightsView(W),J===!0&&Ge.setGlobalState(x.clippingPlanes,W),le.length>0&&qe(k,le,N,W),V&&ge.viewport(y.copy(V)),k.length>0&&At(k,N,W),le.length>0&&At(le,N,W),Se.length>0&&At(Se,N,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function qe(b,N,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const le=De.isWebGL2;_e===null&&(_e=new Vr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?wa:ar,minFilter:Aa,samples:le?4:0})),x.getDrawingBufferSize(Pe),le?_e.setSize(Pe.x,Pe.y):_e.setSize(Ec(Pe.x),Ec(Pe.y));const Se=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(K),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const ze=x.toneMapping;x.toneMapping=sr,At(b,W,V),w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e);let ye=!1;for(let we=0,ke=N.length;we<ke;we++){const $e=N[we],Et=$e.object,zt=$e.geometry,ft=$e.material,fn=$e.group;if(ft.side===Ni&&Et.layers.test(V.layers)){const dt=ft.side;ft.side=Tn,ft.needsUpdate=!0,Qe(Et,W,V,zt,ft,fn),ft.side=dt,ft.needsUpdate=!0,ye=!0}}ye===!0&&(w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e)),x.setRenderTarget(Se),x.setClearColor(K,P),x.toneMapping=ze}function At(b,N,W){const V=N.isScene===!0?N.overrideMaterial:null;for(let k=0,le=b.length;k<le;k++){const Se=b[k],ze=Se.object,ye=Se.geometry,we=V===null?Se.material:V,ke=Se.group;ze.layers.test(W.layers)&&Qe(ze,N,W,ye,we,ke)}}function Qe(b,N,W,V,k,le){b.onBeforeRender(x,N,W,V,k,le),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(x,N,W,V,b,le),k.transparent===!0&&k.side===Ni&&k.forceSinglePass===!1?(k.side=Tn,k.needsUpdate=!0,x.renderBufferDirect(W,N,V,k,b,le),k.side=ur,k.needsUpdate=!0,x.renderBufferDirect(W,N,V,k,b,le),k.side=Ni):x.renderBufferDirect(W,N,V,k,b,le),b.onAfterRender(x,N,W,V,k,le)}function vt(b,N,W){N.isScene!==!0&&(N=Ie);const V=Be.get(b),k=m.state.lights,le=m.state.shadowsArray,Se=k.state.version,ze=pe.getParameters(b,k.state,le,N,W),ye=pe.getProgramCacheKey(ze);let we=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?B:E).get(b.envMap||V.environment),we===void 0&&(b.addEventListener("dispose",oe),we=new Map,V.programs=we);let ke=we.get(ye);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===Se)return St(b,ze),ke}else ze.uniforms=pe.getUniforms(b),b.onBuild(W,ze,x),b.onBeforeCompile(ze,x),ke=pe.acquireProgram(ze,ye),we.set(ye,ke),V.uniforms=ze.uniforms;const $e=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=Ge.uniform),St(b,ze),V.needsLights=Pn(b),V.lightsStateVersion=Se,V.needsLights&&($e.ambientLightColor.value=k.state.ambient,$e.lightProbe.value=k.state.probe,$e.directionalLights.value=k.state.directional,$e.directionalLightShadows.value=k.state.directionalShadow,$e.spotLights.value=k.state.spot,$e.spotLightShadows.value=k.state.spotShadow,$e.rectAreaLights.value=k.state.rectArea,$e.ltc_1.value=k.state.rectAreaLTC1,$e.ltc_2.value=k.state.rectAreaLTC2,$e.pointLights.value=k.state.point,$e.pointLightShadows.value=k.state.pointShadow,$e.hemisphereLights.value=k.state.hemi,$e.directionalShadowMap.value=k.state.directionalShadowMap,$e.directionalShadowMatrix.value=k.state.directionalShadowMatrix,$e.spotShadowMap.value=k.state.spotShadowMap,$e.spotLightMatrix.value=k.state.spotLightMatrix,$e.spotLightMap.value=k.state.spotLightMap,$e.pointShadowMap.value=k.state.pointShadowMap,$e.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=ke,V.uniformsList=null,ke}function Bt(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=wo.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function St(b,N){const W=Be.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function xt(b,N,W,V,k){N.isScene!==!0&&(N=Ie),w.resetTextureUnits();const le=N.fog,Se=V.isMeshStandardMaterial?N.environment:null,ze=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ki,ye=(V.isMeshStandardMaterial?B:E).get(V.envMap||Se),we=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),$e=!!W.morphAttributes.position,Et=!!W.morphAttributes.normal,zt=!!W.morphAttributes.color;let ft=sr;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ft=x.toneMapping);const fn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=fn!==void 0?fn.length:0,Ye=Be.get(V),ml=m.state.lights;if(J===!0&&(se===!0||b!==v)){const $n=b===v&&V.id===D;Ge.setState(V,b,$n)}let Pt=!1;V.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ml.state.version||Ye.outputColorSpace!==ze||k.isBatchedMesh&&Ye.batching===!1||!k.isBatchedMesh&&Ye.batching===!0||k.isInstancedMesh&&Ye.instancing===!1||!k.isInstancedMesh&&Ye.instancing===!0||k.isSkinnedMesh&&Ye.skinning===!1||!k.isSkinnedMesh&&Ye.skinning===!0||k.isInstancedMesh&&Ye.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ye.instancingColor===!1&&k.instanceColor!==null||Ye.envMap!==ye||V.fog===!0&&Ye.fog!==le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ge.numPlanes||Ye.numIntersection!==Ge.numIntersection)||Ye.vertexAlphas!==we||Ye.vertexTangents!==ke||Ye.morphTargets!==$e||Ye.morphNormals!==Et||Ye.morphColors!==zt||Ye.toneMapping!==ft||De.isWebGL2===!0&&Ye.morphTargetsCount!==dt)&&(Pt=!0):(Pt=!0,Ye.__version=V.version);let _r=Ye.currentProgram;Pt===!0&&(_r=vt(V,N,k));let Fu=!1,qs=!1,_l=!1;const tn=_r.getUniforms(),gr=Ye.uniforms;if(ge.useProgram(_r.program)&&(Fu=!0,qs=!0,_l=!0),V.id!==D&&(D=V.id,qs=!0),Fu||v!==b){tn.setValue(G,"projectionMatrix",b.projectionMatrix),tn.setValue(G,"viewMatrix",b.matrixWorldInverse);const $n=tn.map.cameraPosition;$n!==void 0&&$n.setValue(G,Le.setFromMatrixPosition(b.matrixWorld)),De.logarithmicDepthBuffer&&tn.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&tn.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,qs=!0,_l=!0)}if(k.isSkinnedMesh){tn.setOptional(G,k,"bindMatrix"),tn.setOptional(G,k,"bindMatrixInverse");const $n=k.skeleton;$n&&(De.floatVertexTextures?($n.boneTexture===null&&$n.computeBoneTexture(),tn.setValue(G,"boneTexture",$n.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(tn.setOptional(G,k,"batchingTexture"),tn.setValue(G,"batchingTexture",k._matricesTexture,w));const gl=W.morphAttributes;if((gl.position!==void 0||gl.normal!==void 0||gl.color!==void 0&&De.isWebGL2===!0)&&Re.update(k,W,_r),(qs||Ye.receiveShadow!==k.receiveShadow)&&(Ye.receiveShadow=k.receiveShadow,tn.setValue(G,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gr.envMap.value=ye,gr.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),qs&&(tn.setValue(G,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&ht(gr,_l),le&&V.fog===!0&&ue.refreshFogUniforms(gr,le),ue.refreshMaterialUniforms(gr,V,X,z,_e),wo.upload(G,Bt(Ye),gr,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wo.upload(G,Bt(Ye),gr,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&tn.setValue(G,"center",k.center),tn.setValue(G,"modelViewMatrix",k.modelViewMatrix),tn.setValue(G,"normalMatrix",k.normalMatrix),tn.setValue(G,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const $n=V.uniformsGroups;for(let vl=0,dm=$n.length;vl<dm;vl++)if(De.isWebGL2){const Bu=$n[vl];je.update(Bu,_r),je.bind(Bu,_r)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _r}function ht(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Pn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,N,W){Be.get(b.texture).__webglTexture=N,Be.get(b.depthTexture).__webglTexture=W;const V=Be.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=W===void 0,V.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const W=Be.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){T=b,R=N,A=W;let V=!0,k=null,le=!1,Se=!1;if(b){const ye=Be.get(b);ye.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(G.FRAMEBUFFER,null),V=!1):ye.__webglFramebuffer===void 0?w.setupRenderTarget(b):ye.__hasExternalTextures&&w.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const ke=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?k=ke[N][W]:k=ke[N],le=!0):De.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?k=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[W]:k=ke,y.copy(b.viewport),F.copy(b.scissor),U=b.scissorTest}else y.copy(C).multiplyScalar(X).floor(),F.copy(Z).multiplyScalar(X).floor(),U=ne;if(ge.bindFramebuffer(G.FRAMEBUFFER,k)&&De.drawBuffers&&V&&ge.drawBuffers(b,k),ge.viewport(y),ge.scissor(F),ge.setScissorTest(U),le){const ye=Be.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,W)}else if(Se){const ye=Be.get(b.texture),we=N||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ye.__webglTexture,W||0,we)}D=-1},this.readRenderTargetPixels=function(b,N,W,V,k,le,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(ze=ze[Se]),ze){ge.bindFramebuffer(G.FRAMEBUFFER,ze);try{const ye=b.texture,we=ye.format,ke=ye.type;if(we!==hi&&ve.convert(we)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=ke===wa&&(me.has("EXT_color_buffer_half_float")||De.isWebGL2&&me.has("EXT_color_buffer_float"));if(ke!==ar&&ve.convert(ke)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===ji&&(De.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&W>=0&&W<=b.height-k&&G.readPixels(N,W,V,k,ve.convert(we),ve.convert(ke),le)}finally{const ye=T!==null?Be.get(T).__webglFramebuffer:null;ge.bindFramebuffer(G.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(b,N,W=0){const V=Math.pow(2,-W),k=Math.floor(N.image.width*V),le=Math.floor(N.image.height*V);w.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,W,0,0,b.x,b.y,k,le),ge.unbindTexture()},this.copyTextureToTexture=function(b,N,W,V=0){const k=N.image.width,le=N.image.height,Se=ve.convert(W.format),ze=ve.convert(W.type);w.setTexture2D(W,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,V,b.x,b.y,k,le,Se,ze,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,V,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Se,N.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,V,b.x,b.y,Se,ze,N.image),V===0&&W.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,N,W,V,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=b.max.x-b.min.x+1,Se=b.max.y-b.min.y+1,ze=b.max.z-b.min.z+1,ye=ve.convert(V.format),we=ve.convert(V.type);let ke;if(V.isData3DTexture)w.setTexture3D(V,0),ke=G.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)w.setTexture2DArray(V,0),ke=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);const $e=G.getParameter(G.UNPACK_ROW_LENGTH),Et=G.getParameter(G.UNPACK_IMAGE_HEIGHT),zt=G.getParameter(G.UNPACK_SKIP_PIXELS),ft=G.getParameter(G.UNPACK_SKIP_ROWS),fn=G.getParameter(G.UNPACK_SKIP_IMAGES),dt=W.isCompressedTexture?W.mipmaps[k]:W.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,dt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,b.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,b.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,b.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(ke,k,N.x,N.y,N.z,le,Se,ze,ye,we,dt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ke,k,N.x,N.y,N.z,le,Se,ze,ye,dt.data)):G.texSubImage3D(ke,k,N.x,N.y,N.z,le,Se,ze,ye,we,dt),G.pixelStorei(G.UNPACK_ROW_LENGTH,$e),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Et),G.pixelStorei(G.UNPACK_SKIP_PIXELS,zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ft),G.pixelStorei(G.UNPACK_SKIP_IMAGES,fn),k===0&&V.generateMipmaps&&G.generateMipmap(ke),ge.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,ge.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eu?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===sl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Zt?Nr:ld}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Nr?Zt:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MM extends Ld{}MM.prototype.isWebGL1Renderer=!0;class SM extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new be:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],s=[],o=[],a=new I,l=new Ft;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(jt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class su extends bi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new be,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yM extends su{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function au(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const fo=new I,Jl=new au,Zl=new au,jl=new au;class EM extends bi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(fo.subVectors(i[0],i[1]).add(i[0]),c=fo);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(fo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Jl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),Zl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),jl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Jl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Zl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),jl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Jl.calc(l),Zl.calc(l),jl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function af(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function TM(r,e){const t=1-r;return t*t*e}function bM(r,e){return 2*(1-r)*r*e}function AM(r,e){return r*r*e}function ua(r,e,t,n){return TM(r,e)+bM(r,t)+AM(r,n)}function wM(r,e){const t=1-r;return t*t*t*e}function RM(r,e){const t=1-r;return 3*t*t*r*e}function CM(r,e){return 3*(1-r)*r*r*e}function PM(r,e){return r*r*r*e}function ha(r,e,t,n,i){return wM(r,e)+RM(r,t)+CM(r,n)+PM(r,i)}class Dd extends bi{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ha(e,i.x,s.x,o.x,a.x),ha(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LM extends bi{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ha(e,i.x,s.x,o.x,a.x),ha(e,i.y,s.y,o.y,a.y),ha(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ud extends bi{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DM extends bi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Id extends bi{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ua(e,i.x,s.x,o.x),ua(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class UM extends bi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ua(e,i.x,s.x,o.x),ua(e,i.y,s.y,o.y),ua(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nd extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(af(a,l.x,c.x,u.x,h.x),af(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new be().fromArray(i))}return this}}var of=Object.freeze({__proto__:null,ArcCurve:yM,CatmullRomCurve3:EM,CubicBezierCurve:Dd,CubicBezierCurve3:LM,EllipseCurve:su,LineCurve:Ud,LineCurve3:DM,QuadraticBezierCurve:Id,QuadraticBezierCurve3:UM,SplineCurve:Nd});class IM extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new of[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new of[i.type]().fromJSON(i))}return this}}class NM extends IM{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ud(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Id(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new Dd(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Nd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new su(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ou extends fi{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=jt(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new I,d=new be,f=new I,g=new I,_=new I;let m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=t;M++){const x=n+M*u*i,S=Math.sin(x),R=Math.cos(x);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*S,h.y=e[A].y,h.z=e[A].x*R,o.push(h.x,h.y,h.z),d.x=M/t,d.y=A/(e.length-1),a.push(d.x,d.y);const T=l[3*A+0]*S,D=l[3*A+1],v=l[3*A+0]*R;c.push(T,D,v)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){const S=x+M*e.length,R=S,A=S+e.length,T=S+e.length+1,D=S+1;s.push(R,A,D),s.push(T,D,A)}this.setIndex(s),this.setAttribute("position",new Ht(o,3)),this.setAttribute("uv",new Ht(a,2)),this.setAttribute("normal",new Ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.points,e.segments,e.phiStart,e.phiLength)}}class ll extends ou{constructor(e=1,t=1,n=4,i=8){const s=new NM;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ll(e.radius,e.length,e.capSegments,e.radialSegments)}}class Us extends fi{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ht(h,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2));function M(){const S=new I,R=new I;let A=0;const T=(t-e)/n;for(let D=0;D<=s;D++){const v=[],y=D/s,F=y*(t-e)+e;for(let U=0;U<=i;U++){const K=U/i,P=K*l+a,O=Math.sin(P),z=Math.cos(P);R.x=F*O,R.y=-y*n+m,R.z=F*z,h.push(R.x,R.y,R.z),S.set(O,T,z).normalize(),d.push(S.x,S.y,S.z),f.push(K,1-y),v.push(g++)}_.push(v)}for(let D=0;D<i;D++)for(let v=0;v<s;v++){const y=_[v][D],F=_[v+1][D],U=_[v+1][D+1],K=_[v][D+1];u.push(y,F,K),u.push(F,U,K),A+=6}c.addGroup(p,A,0),p+=A}function x(S){const R=g,A=new be,T=new I;let D=0;const v=S===!0?e:t,y=S===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const F=g;for(let U=0;U<=i;U++){const P=U/i*l+a,O=Math.cos(P),z=Math.sin(P);T.x=v*z,T.y=m*y,T.z=v*O,h.push(T.x,T.y,T.z),d.push(0,y,0),A.x=O*.5+.5,A.y=z*.5*y+.5,f.push(A.x,A.y),g++}for(let U=0;U<i;U++){const K=R+U,P=F+U;S===!0?u.push(P,P+1,K):u.push(P+1,P,K),D+=3}c.addGroup(p,D,S===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kt extends fi{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const A=R/t;h.x=-e*Math.cos(i+A*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+A*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+S,1-x),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const x=u[p][M+1],S=u[p][M],R=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&f.push(x,S,A),(p!==n-1||l<Math.PI)&&f.push(S,R,A)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lu extends fi{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class OM extends ka{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Od extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ql=new Ft,lf=new I,cf=new I;class FM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cf),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BM extends FM{constructor(){super(new Td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zM extends Od{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new BM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kM extends Od{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class GM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=uf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uf(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);function Di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Is={duration:.5,overwrite:!1,delay:0},cu,en,Tt,ni=1e8,gt=1/ni,bc=Math.PI*2,HM=bc/4,VM=0,Bd=Math.sqrt,WM=Math.cos,XM=Math.sin,Jt=function(e){return typeof e=="string"},Lt=function(e){return typeof e=="function"},Gi=function(e){return typeof e=="number"},uu=function(e){return typeof e>"u"},Ei=function(e){return typeof e=="object"},bn=function(e){return e!==!1},hu=function(){return typeof window<"u"},po=function(e){return Lt(e)||Jt(e)},zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,YM=/random\([^)]+\)/g,qM=/,\s*/g,hf=/(?:-?\.?\d|\.)+/gi,kd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gd=/[+-]=-?[.\d]+/,$M=/[^,'"\[\]\s]+/gi,KM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rt,mi,Ac,fu,Xn={},Vo={},Hd,Vd=function(e){return(Vo=Ns(e,Xn))&&Cn},du=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ra=function(e,t){return!t&&console.warn(e)},Wd=function(e,t){return e&&(Xn[e]=t)&&Vo&&(Vo[e]=t)||Xn},Ca=function(){return 0},JM={suppressEvents:!0,isStart:!0,kill:!1},Ro={suppressEvents:!0,kill:!1},ZM={suppressEvents:!0},pu={},or=[],wc={},Xd,On={},tc={},ff=30,Co=[],mu="",_u=function(e){var t=e[0],n,i;if(Ei(t)||Lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Co.length;i--&&!Co[i].targetTest(t););n=Co[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new mp(e[i],n)))||e.splice(i,1);return e},Or=function(e){return e._gsap||_u(ii(e))[0]._gsap},Yd=function(e,t,n){return(n=e[t])&&Lt(n)?e[t]():uu(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Dt=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},Es=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},jM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Wo=function(){var e=or.length,t=or.slice(0),n,i;for(wc={},or.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gu=function(e){return!!(e._initted||e._startAt||e.add)},qd=function(e,t,n,i){or.length&&!en&&Wo(),e.render(t,n,!!(en&&t<0&&gu(e))),or.length&&!en&&Wo()},$d=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($M).length<2?t:Jt(e)?e.trim():e},Kd=function(e){return e},Yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},QM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ns=function(e,t){for(var n in t)e[n]=t[n];return e},df=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ei(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Xo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fa=function(e){var t=e.parent||Rt,n=e.keyframes?QM(hn(e.keyframes)):Yn;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},eS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jd=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},cl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Fr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rc=function(e,t,n,i){return e._startAt&&(en?e._startAt.revert(Ro):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},nS=function r(e){return!e||e._ts&&r(e.parent)},pf=function(e){return e._repeat?Os(e._tTime,e=e.duration()+e._rDelay)*e:0},Os=function(e,t){var n=Math.floor(e=wt(e/t));return e&&n===e?n-1:n},Yo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ul=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},hl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ul(e),n._dirty||Fr(n,e)),e},Zd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Yo(e.rawTime(),t),(!t._dur||Ga(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),Fr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},vi=function(e,t,n,i){return t.parent&&hr(t),t._start=wt((Gi(n)?n:n||e!==Rt?Jn(e,n,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jd(e,t,"_first","_last",e._sort?"_start":0),Cc(t)||(e._recent=t),i||Zd(e,t),e._ts<0&&hl(e,e._tTime),e},jd=function(e,t){return(Xn.ScrollTrigger||du("scrollTrigger",t))&&Xn.ScrollTrigger.create(t,e)},Qd=function(e,t,n,i,s){if(xu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!en&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xd!==Bn.frame)return or.push(e),e._lazy=[s,i],1},iS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&iS(e)&&!(!e._initted&&Cc(e))||(e._ts<0||e._dp._ts<0)&&!Cc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ga(0,e._tDur,t),u=Os(l,a),e._yoyo&&u&1&&(o=1-o),u!==Os(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||en||i||e._zTime===gt||!t&&e._zTime){if(!e._initted&&Qd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Rc(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&hr(e,1),!n&&!en&&(Gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Fs=function(e,t,n,i){var s=e._repeat,o=wt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:wt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&hl(e,e._tTime=e._tDur*a),e.parent&&ul(e),n||Fr(e.parent,e),e},mf=function(e){return e instanceof Mn?Fr(e):Fs(e,e._dur)},aS={_start:0,endTime:Ca,totalDuration:Ca},Jn=function r(e,t,n){var i=e.labels,s=e._recent||aS,o=e.duration()>=ni?s.endTime(!1):e._dur,a,l,c;return Jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(hn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},da=function(e,t,n){var i=Gi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;o.immediateRender=bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ot(t[0],o,t[s+1])},mr=function(e,t){return e||e===0?t(e):t},Ga=function(e,t,n){return n<e?e:n>t?t:n},ln=function(e,t){return!Jt(e)||!(t=KM.exec(e))?"":t[1]},oS=function(e,t,n){return mr(n,function(i){return Ga(e,t,i)})},Pc=[].slice,ep=function(e,t){return e&&Ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ei(e[0]))&&!e.nodeType&&e!==mi},lS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Jt(i)&&!t||ep(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n},ii=function(e,t,n){return Tt&&!t&&Tt.selector?Tt.selector(e):Jt(e)&&!n&&(Ac||!Bs())?Pc.call((t||fu).querySelectorAll(e),0):hn(e)?lS(e,n):ep(e)?Pc.call(e,0):e?[e]:[]},Lc=function(e){return e=ii(e)[0]||Ra("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?Ra("Invalid scope")||fu.createElement("div"):e)}},tp=function(e){return e.sort(function(){return .5-Math.random()})},np=function(e){if(Lt(e))return e;var t=Ei(e)?e:{each:e},n=Br(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Jt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,m=o[_],p,M,x,S,R,A,T,D,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,ni])[1],!v){for(T=-ni;T<(T=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*u-.5:i%v,M=v===ni?0:l?_*h/v-.5:i/v|0,T=0,D=ni,A=0;A<_;A++)x=A%v-p,S=M-(A/v|0),m[A]=R=c?Math.abs(c==="y"?S:x):Bd(x*x+S*S),R>T&&(T=R),R<D&&(D=R);i==="random"&&tp(m),m.max=T-D,m.min=D,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ln(t.amount||t.each)||0,n=n&&_<0?fp(n):n}return _=(m[d]-m.min)/m.max||0,wt(m.b+(n?n(_):_)*m.v)+m.u}},Dc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Gi(n)?0:ln(n))}},ip=function(e,t){var n=hn(e),i,s;return!n&&Ei(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(s=!Gi(e[0]))&&(i*=i)):e=Dc(e.increment)),mr(t,n?Lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ni,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Gi(o)?u:u+ln(o)}:Dc(e))},rp=function(e,t,n,i){return mr(hn(e)?!t:n===!0?!!(n=0):!i,function(){return hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},cS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},uS=function(e,t){return function(n){return e(parseFloat(n))+(t||ln(n))}},hS=function(e,t,n){return ap(e,t,0,1,n)},sp=function(e,t,n){return mr(n,function(i){return e[~~t(i)]})},fS=function r(e,t,n){var i=t-e;return hn(e)?sp(e,r(0,e.length),t):mr(n,function(s){return(i+(s-e)%i)%i+e})},dS=function r(e,t,n){var i=t-e,s=i*2;return hn(e)?sp(e,r(0,e.length-1),t):mr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Pa=function(e){return e.replace(YM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(qM);return rp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ap=function(e,t,n,i,s){var o=t-e,a=i-n;return mr(s,function(l){return n+((l-e)/o*a||0)})},pS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Jt(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(hn(e)&&!hn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Ns(hn(e)?[]:{},e));if(!u){for(l in t)vu.call(a,e,l,"get",t[l]);s=function(g){return yu(g,a)||(o?e.p:e)}}}return mr(n,s)},_f=function(e,t,n){var i=e.labels,s=ni,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gn=function(e,t,n){var i=e.vars,s=i[t],o=Tt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&or.length&&Wo(),a&&(Tt=a),u=l?s.apply(c,l):s.call(c),Tt=o,u},na=function(e){return hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!en),e.progress()<1&&Gn(e,"onInterrupt"),e},xs,op=[],lp=function(e){if(e)if(e=!e.name&&e.default||e,hu()||e.headless){var t=e.name,n=Lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ca,render:yu,add:vu,kill:PS,modifier:CS,rawVars:0},o={targetTest:0,get:0,getSetter:Su,aliases:{},register:0};if(Bs(),e!==i){if(On[t])return;Yn(i,Yn(Xo(e,s),o)),Ns(i.prototype,Ns(s,Xo(e,o))),On[i.prop=t]=i,e.targetTest&&(Co.push(i),pu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wd(t,i),e.register&&e.register(Cn,i,wn)}else op.push(e)},_t=255,ia={aqua:[0,_t,_t],lime:[0,_t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_t],navy:[0,0,128],white:[_t,_t,_t],olive:[128,128,0],yellow:[_t,_t,0],orange:[_t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_t,0,0],pink:[_t,192,203],cyan:[0,_t,_t],transparent:[_t,_t,_t,0]},nc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*_t+.5|0},cp=function(e,t,n){var i=e?Gi(e)?[e>>16,e>>8&_t,e&_t]:0:ia.black,s,o,a,l,c,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])i=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&_t,i&_t,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&_t,e&_t]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(hf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=nc(l+1/3,s,o),i[1]=nc(l,s,o),i[2]=nc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(kd),n&&i.length<4&&(i[3]=1),i}else i=e.match(hf)||ia.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/_t,o=i[1]/_t,a=i[2]/_t,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},up=function(e){var t=[],n=[],i=-1;return e.split(lr).forEach(function(s){var o=s.match(vs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},gf=function(e,t,n){var i="",s=(e+i).match(lr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=cp(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=up(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(lr,"1").split(vs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(lr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},lr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),mS=/hsl[a]?\(/,hp=function(e){var t=e.join(" "),n;if(lr.lastIndex=0,lr.test(t))return n=mS.test(t),e[1]=gf(e[1],n),e[0]=gf(e[0],n,up(e[1])),!0},La,Bn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,g=function _(m){var p=r()-i,M=m===!0,x,S,R,A;if((p>e||p<0)&&(n+=p-t),i+=p,R=i-n,x=R-o,(x>0||M)&&(A=++h.frame,d=R-h.time*1e3,h.time=R=R/1e3,o+=x+(x>=s?4:s-x),S=1),M||(l=c(_)),S)for(f=0;f<a.length;f++)a[f](R,d,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hd&&(!Ac&&hu()&&(mi=Ac=window,fu=mi.document||{},Xn.gsap=Cn,(mi.gsapVersions||(mi.gsapVersions=[])).push(Cn.version),Vd(Vo||mi.GreenSockGlobals||!mi.gsap&&mi||{}),op.forEach(lp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},La=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),La=0,c=Ca},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var x=p?function(S,R,A,T){m(S,R,A,T),h.remove(x)}:m;return h.remove(m),a[M?"unshift":"push"](x),Bs(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),Bs=function(){return!La&&Bn.wake()},rt={},_S=/^[\d.\-M][\d.\-,\s]/,gS=/["']/g,vS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(gS,"").trim():+c,i=l.substr(a+1).trim();return t},xS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},MS=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[vS(t[1])]:xS(e).split(",").map($d)):rt._CE&&_S.test(e)?rt._CE("",e):n},fp=function(e){return function(t){return 1-e(1-t)}},dp=function r(e,t){for(var n=e._first,i;n;)n instanceof Mn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Br=function(e,t){return e&&(Lt(e)?e:rt[e]||MS(e))||t},$r=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return An(e,function(a){rt[a]=Xn[a]=s,rt[o=a.toLowerCase()]=n;for(var l in s)rt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[a+"."+l]=s[l]}),s},pp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ic=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/bc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*XM((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:pp(a);return s=bc/s,l.config=function(c,u){return r(e,c,u)},l},rc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pp(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;$r(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;$r("Elastic",ic("in"),ic("out"),ic());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};$r("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);$r("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});$r("Circ",function(r){return-(Bd(1-r*r)-1)});$r("Sine",function(r){return r===1?1:-WM(r*HM)+1});$r("Back",rc("in"),rc("out"),rc());rt.SteppedEase=rt.steps=Xn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-gt;return function(a){return((i*Ga(0,o,a)|0)+s)*n}}};Is.ease=rt["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return mu+=r+","+r+"Params,"});var mp=function(e,t){this.id=VM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yd,this.set=t?t.getSetter:Su},Da=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Fs(this,+t.duration,1,1),this.data=t.data,Tt&&(this._ctx=Tt,Tt.data.push(this)),La||Bn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Bs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hl(this,n),!s._dp||s.parent||Zd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===gt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Os(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Yo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(Ga(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ul(this),tS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Bs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=wt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ZM);var i=en;return en=n,gu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Jn(this,n),bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i)),this._dur||(this._zTime=-gt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-gt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Lt(n)?n:Kd,l=function(){var u=i.then;i.then=null,s&&s(),Lt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){na(this)},r}();Yn(Da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var Mn=function(r){Fd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),Rt&&vi(n.parent||Rt,Di(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&jd(Di(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return da(0,arguments,this),this},t.from=function(i,s,o){return da(1,arguments,this),this},t.fromTo=function(i,s,o,a){return da(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,fa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(i,s,Jn(this,o),1),this},t.call=function(i,s,o){return vi(this,Ot.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ot(i,o,Jn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,fa(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,fa(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:wt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,M,x,S,R,A,T;if(this!==Rt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,S=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=wt(u%m),u===l?(_=this._repeat,d=c):(R=wt(u/m),_=~~R,_&&_===R&&(d=c,_--),d>c&&(d=c)),R=Os(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),A&&_&1&&(d=c-d,T=1),_!==R&&!this._lock){var D=A&&R&1,v=D===(A&&_&1);if(_<R&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(T?0:wt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;dp(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=sS(this,wt(a),wt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(Gn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-gt);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||en&&gu(f)),d!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=y?-gt:gt);break}}f=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-gt)._zTime=d>=a?1:-1,this._ts))return this._start=S,ul(this),this.render(i,s,o);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Gi(s)||(s=Jn(this,s,i)),!(i instanceof Da)){if(hn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Jt(i))return this.addLabel(i,s);if(Lt(i))i=Ot.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ot?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Jt(i)?this.removeLabel(i):Lt(i)?this.killTweensOf(i):(i.parent===this&&cl(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Jn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ot.delayedCall(0,s||Ca,o);return a.data="isPause",this._hasPause=1,vi(this,a,Jn(this,i))},t.removePause=function(i){var s=this._first;for(i=Jn(this,i);s;)s._start===i&&s.data==="isPause"&&hr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Qi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ii(i),l=this._first,c=Gi(s),u;l;)l instanceof Ot?jM(l._targets,a)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Jn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Ot.to(o,Yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Fs(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Yn({startAt:{time:Jn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),_f(this,Jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),_f(this,Jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=wt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Fr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=wt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Fs(o,o===Rt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Rt._ts&&(qd(Rt,Yo(i,Rt)),Xd=Bn.frame),Bn.frame>=ff){ff+=Wn.autoSleep||120;var s=Rt._first;if((!s||!s._ts)&&Wn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e}(Da);Yn(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var SS=function(e,t,n,i,s,o,a){var l=new wn(this._pt,e,t,0,1,Sp,null,s),c=0,u=0,h,d,f,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Pa(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),d=n.match(ec)||[];h=ec.exec(i);)g=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Es(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=ec.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Gd.test(i)||p)&&(l.e=0),this._pt=l,l},vu=function(e,t,n,i,s,o,a,l,c,u){Lt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Lt(h)?c?e[t.indexOf("set")||!Lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Lt(h)?c?AS:xp:Mu,g;if(Jt(i)&&(~i.indexOf("random(")&&(i=Pa(i)),i.charAt(1)==="="&&(g=Es(d,i)+(ln(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Uc)return!isNaN(d*i)&&i!==""?(g=new wn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?RS:Mp,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&du(t,i),SS.call(this,e,t,d,i,f,l||Wn.stringFilter,c))},yS=function(e,t,n,i,s){if(Lt(e)&&(e=pa(e,s,t,n,i)),!Ei(e)||e.style&&e.nodeType||hn(e)||zd(e))return Jt(e)?pa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=pa(e[a],s,t,n,i);return o},_p=function(e,t,n,i,s,o){var a,l,c,u;if(On[e]&&(a=new On[e]).init(s,a.rawVars?t[e]:yS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new wn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==xs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Qi,Uc,xu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!cu,S=e.timeline,R,A,T,D,v,y,F,U,K,P,O,z,X;if(S&&(!d||!s)&&(s="none"),e._ease=Br(s,Is.ease),e._yEase=h?fp(Br(h===!0?s:h,Is.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(U=m[0]?Or(m[0]).harness:0,z=U&&i[U.prop],R=Xo(i,pu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Ro:JM),_._lazy=0),o){if(hr(e._startAt=Ot.set(m,Yn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en||!a&&!f)&&e._startAt.revert(Ro),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=Yn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&bn(l),immediateRender:a,stagger:0,parent:p},R),z&&(T[U.prop]=z),hr(e._startAt=Ot.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en?e._startAt.revert(Ro):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bn(l)||l&&!g,A=0;A<m.length;A++){if(v=m[A],F=v._gsap||_u(m)[A]._gsap,e._ptLookup[A]=P={},wc[F.id]&&or.length&&Wo(),O=M===m?A:M.indexOf(v),U&&(K=new U).init(v,z||R,e,O,M)!==!1&&(e._pt=D=new wn(e._pt,v,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(Y){P[Y]=D}),K.priority&&(y=1)),!U||z)for(T in R)On[T]&&(K=_p(T,R,e,O,v,M))?K.priority&&(y=1):P[T]=D=vu.call(e,v,T,"get",R[T],O,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),x&&e._pt&&(Qi=e,Rt.killTweensOf(v,P,e.globalTime(t)),X=!e.parent,Qi=0),e._pt&&l&&(wc[F.id]=1)}y&&yp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,d&&t<=0&&S.render(ni,!0,!0)},ES=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Uc=1,e.vars[t]="+=0",xu(e,a),Uc=0,l?Ra(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Dt(n)+ln(h.e)),h.b&&(h.b=u.s+ln(h.b))},TS=function(e,t){var n=e[0]?Or(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ns({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},bS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(hn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pa=function(e,t,n,i,s){return Lt(e)?e.call(t,n,i,s):Jt(e)&&~e.indexOf("random(")?Pa(e):e},gp=mu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vp={};An(gp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vp[r]=1});var Ot=function(r){Fd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:fa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Rt,x=(hn(n)||zd(n)?Gi(n[0]):"length"in i)?[n]:ii(n),S,R,A,T,D,v,y,F;if(a._targets=x.length?_u(x):Ra("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||po(c)||po(u)){if(i=a.vars,S=a.timeline=new Mn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),S.kill(),S.parent=S._dp=Di(a),S._start=0,d||po(c)||po(u)){if(T=x.length,y=d&&np(d),Ei(d))for(D in d)~gp.indexOf(D)&&(F||(F={}),F[D]=d[D]);for(R=0;R<T;R++)A=Xo(i,vp),A.stagger=0,p&&(A.yoyoEase=p),F&&Ns(A,F),v=x[R],A.duration=+pa(c,Di(a),R,v,x),A.delay=(+pa(u,Di(a),R,v,x)||0)-a._delay,!d&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(v,A,y?y(R,v,x):0),S._ease=rt.none;S.duration()?c=u=0:a.timeline=0}else if(g){fa(Yn(S.vars.defaults,{ease:"none"})),S._ease=Br(g.ease||i.ease||"none");var U=0,K,P,O;if(hn(g))g.forEach(function(z){return S.to(x,z,">")}),S.duration();else{A={};for(D in g)D==="ease"||D==="easeEach"||bS(D,g[D],A,g.easeEach);for(D in A)for(K=A[D].sort(function(z,X){return z.t-X.t}),U=0,R=0;R<K.length;R++)P=K[R],O={ease:P.e,duration:(P.t-(R?K[R-1].t:0))/100*c},O[D]=P.v,S.to(x,O,U),U+=O.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!cu&&(Qi=Di(a),Rt.killTweensOf(x),Qi=0),vi(M,Di(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===wt(M._time)&&bn(h)&&nS(Di(a))&&M.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-u)||0)),m&&jd(Di(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-gt&&!u?l:i<gt?0:i,d,f,g,_,m,p,M,x,S;if(!c)rS(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(d=wt(h%_),h===l?(g=this._repeat,d=c):(m=wt(h/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,d=c-d),m=Os(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&dp(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(wt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qd(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Rc(this,i,s,o),Gn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Rc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&hr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){La||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||xu(this,c),u=this._ease(c/this._dur),ES(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(hl(this,0),this.parent||Jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qi&&Qi.vars.overwrite!==!0)._first||na(this),this.parent&&o!==this.timeline.totalDuration()&&Fs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ii(i):a,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&eS(a,l))return s==="all"&&(this._pt=0),na(this);for(h=this._op=this._op||[],s!=="all"&&(Jt(s)&&(_={},An(s,function(M){return _[M]=1}),s=_),s=TS(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&cl(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&na(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return da(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return da(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Rt.killTweensOf(i,s,o)},e}(Da);Yn(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){Ot[r]=function(){var e=new Mn,t=Pc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Mu=function(e,t,n){return e[t]=n},xp=function(e,t,n){return e[t](n)},AS=function(e,t,n,i){return e[t](i.fp,n)},wS=function(e,t,n){return e.setAttribute(t,n)},Su=function(e,t){return Lt(e[t])?xp:uu(e[t])&&e.setAttribute?wS:Mu},Mp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},RS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},yu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},CS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},PS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?cl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},LS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},yp=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},wn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Mp,this.d=l||this,this.set=c||Mu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=LS,this.m=n,this.mt=s,this.tween=i},r}();An(mu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return pu[r]=1});Xn.TweenMax=Xn.TweenLite=Ot;Xn.TimelineLite=Xn.TimelineMax=Mn;Rt=new Mn({sortChildren:!1,defaults:Is,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=hp;var zr=[],Po={},DS=[],vf=0,US=0,sc=function(e){return(Po[e]||DS).map(function(t){return t()})},Ic=function(){var e=Date.now(),t=[];e-vf>2&&(sc("matchMediaInit"),zr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=mi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),sc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),vf=e,sc("matchMedia"))},Ep=function(){function r(t,n){this.selector=n&&Lc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=US++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Lt(n)&&(s=i,i=n,n=Lt);var o=this,a=function(){var c=Tt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Lc(s)),Tt=o,h=i.apply(o,arguments),Lt(h)&&o._r.push(h),Tt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Lt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Tt;Tt=null,n(this),Tt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ot&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ot)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=zr.length;o--;)zr[o].id===this.id&&zr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),IS=function(){function r(t){this.contexts=[],this.scope=t,Tt&&Tt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ei(n)||(n={matches:n});var o=new Ep(0,s||this.scope),a=o.conditions={},l,c,u;Tt&&!o.selector&&(o.selector=Tt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=mi.matchMedia(n[c]),l&&(zr.indexOf(o)<0&&zr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ic):l.addEventListener("change",Ic)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),qo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return lp(i)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,t){return Rt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Jt(e)&&(e=ii(e)[0]);var s=Or(e||{}).get,o=n?Kd:$d;return n==="native"&&(n=""),e&&(t?o((On[t]&&On[t].get||s)(e,t,n,i)):function(a,l,c){return o((On[a]&&On[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(u){return Cn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=On[t],a=Or(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;xs._pt=0,h.init(e,n?u+n:u,xs,0,[e]),h.render(1,h),xs._pt&&yu(1,xs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Cn.to(e,Yn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Rt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Br(e.ease,Is.ease)),df(Is,e||{})},config:function(e){return df(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!On[a]&&!Xn[a]&&Ra(t+" effect requires "+a+" plugin.")}),tc[t]=function(a,l,c){return n(ii(a),Yn(l||{},s),c)},o&&(Mn.prototype[t]=function(a,l,c){return this.add(tc[t](a,Ei(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Br(t)},parseEase:function(e,t){return arguments.length?Br(e,t):rt},getById:function(e){return Rt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mn(e),i,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),Rt.remove(n),n._dp=0,n._time=n._tTime=Rt._time,i=Rt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ot&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(Rt,n,0),n},context:function(e,t){return e?new Ep(e,t):Tt},matchMedia:function(e){return new IS(e)},matchMediaRefresh:function(){return zr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ic()},addEventListener:function(e,t){var n=Po[e]||(Po[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Po[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:fS,wrapYoyo:dS,distribute:np,random:rp,snap:ip,normalize:hS,getUnit:ln,clamp:oS,splitColor:cp,toArray:ii,selector:Lc,mapRange:ap,pipe:cS,unitize:uS,interpolate:pS,shuffle:tp},install:Vd,effects:tc,ticker:Bn,updateRoot:Mn.updateRoot,plugins:On,globalTimeline:Rt,core:{PropTween:wn,globals:Wd,Tween:Ot,Timeline:Mn,Animation:Da,getCache:Or,_removeLinkedListItem:cl,reverting:function(){return en},context:function(e){return e&&Tt&&(Tt.data.push(e),e._ctx=Tt),Tt},suppressOverwrites:function(e){return cu=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return qo[r]=Ot[r]});Bn.add(Mn.updateRoot);xs=qo.to({},{duration:0});var NS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},OS=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=NS(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ac=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Jt(s)&&(l={},An(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}OS(a,s)}}}},Cn=qo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ac("roundProps",Dc),ac("modifiers"),ac("snap",ip))||qo;Ot.version=Mn.version=Cn.version="3.14.2";Hd=1;hu()&&Bs();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xf,er,Ts,Eu,Lr,Mf,Tu,FS=function(){return typeof window<"u"},Hi={},Ar=180/Math.PI,bs=Math.PI/180,hs=Math.atan2,Sf=1e8,bu=/([A-Z])/g,BS=/(left|right|width|margin|padding|x)/i,zS=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},HS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Tp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WS=function(e,t,n){return e.style[t]=n},XS=function(e,t,n){return e.style.setProperty(t,n)},YS=function(e,t,n){return e._gsap[t]=n},qS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},$S=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},KS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ct="transform",Rn=Ct+"Origin",JS=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Hi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ii(i,a)}):this.tfm[e]=o.x?o[e]:Ii(i,e),e===Rn&&(this.tfm.zOrigin=o.zOrigin);else return xi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ct)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=Ct}(s||t)&&this.props.push(e,t,s[e])},Ap=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ZS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(bu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Tu(),(!s||!s.isStart)&&!n[Ct]&&(Ap(n),i.zOrigin&&n[Rn]&&(n[Rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wp=function(e,t){var n={target:e,props:[],revert:ZS,save:JS};return e._gsap||Cn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Rp,Oc=function(e,t){var n=er.createElementNS?er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):er.createElement(e);return n&&n.style?n:er.createElement(e)},Hn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(bu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,zs(t)||t,1)||""},yf="O,Moz,ms,Ms,Webkit".split(","),zs=function(e,t,n){var i=t||Lr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(yf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?yf[o]:"")+e},Fc=function(){FS()&&window.document&&(xf=window,er=xf.document,Ts=er.documentElement,Lr=Oc("div")||{style:{}},Oc("div"),Ct=zs(Ct),Rn=Ct+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rp=!!zs("perspective"),Tu=Cn.core.reverting,Eu=1)},Ef=function(e){var t=e.ownerSVGElement,n=Oc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ts.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ts.removeChild(n),s},Tf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cp=function(e){var t,n;try{t=e.getBBox()}catch{t=Ef(e),n=1}return t&&(t.width||t.height)||n||(t=Ef(e)),t&&!t.width&&!t.x&&!t.y?{x:+Tf(e,["x","cx","x1"])||0,y:+Tf(e,["y","cy","y1"])||0,width:0,height:0}:t},Pp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cp(e))},fr=function(e,t){if(t){var n=e.style,i;t in Hi&&t!==Rn&&(t=Ct),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(bu,"-$1").toLowerCase())):n.removeAttribute(t)}},tr=function(e,t,n,i,s,o){var a=new wn(e._pt,t,n,0,1,o?bp:Tp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},bf={deg:1,rad:1,turn:1},jS={grid:1,flex:1},dr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Lr.style,l=BS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||bf[i]||bf[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&Pp(e),(f||o==="%")&&(Hi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Dt(f?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===er||!_.appendChild)&&(_=er.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Bn.time&&!m.uncache)return Dt(s/m.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:fr(e,t)}else(f||o==="%")&&!jS[Hn(_,"display")]&&(a.position=Hn(e,"position")),_===e&&(a.position="static"),_.appendChild(Lr),g=Lr[u],_.removeChild(Lr),a.position="absolute";return l&&f&&(m=Or(_),m.time=Bn.time,m.width=_[u]),Dt(d?g*s/h:g&&s?h/g*s:0)},Ii=function(e,t,n,i){var s;return Eu||Fc(),t in xi&&t!=="transform"&&(t=xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(s=Ia(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ko(Hn(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$o[t]&&$o[t](e,t,n)||Hn(e,t)||Yd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?dr(e,t,s,n)+n:s},QS=function(e,t,n,i){if(!n||n==="none"){var s=zs(t,e,1),o=s&&Hn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Hn(e,"borderTopColor"))}var a=new wn(this._pt,e.style,t,0,1,Sp),l=0,c=0,u,h,d,f,g,_,m,p,M,x,S,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Hn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Hn(e,t)||i,_?e.style[t]=_:fr(e,t)),u=[n,i],hp(u),n=u[0],i=u[1],d=n.match(vs)||[],R=i.match(vs)||[],R.length){for(;h=vs.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),m.charAt(1)==="="&&(m=Es(f,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=vs.lastIndex-x.length,x||(x=x||Wn.units[t]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(f=dr(e,t,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?bp:Tp;return Gd.test(i)&&(a.e=0),this._pt=a,a},Af={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ey=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Af[n]||n,t[1]=Af[i]||i,t.join(" ")},ty=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Hi[a]&&(l=1,a=a==="transformOrigin"?Rn:Ct),fr(n,a);l&&(fr(n,Ct),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ia(n,1),o.uncache=1,Ap(i)))}},$o={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new wn(e._pt,t,n,0,0,ty);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ua=[1,0,0,1,0,0],Lp={},Dp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wf=function(e){var t=Hn(e,Ct);return Dp(t)?Ua:t.substr(7).match(kd).map(Dt)},Au=function(e,t){var n=e._gsap||Or(e),i=e.style,s=wf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ua:s):(s===Ua&&!e.offsetParent&&e!==Ts&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ts.appendChild(e)),s=wf(e),l?i.display=l:fr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ts.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bc=function(e,t,n,i,s,o){var a=e._gsap,l=s||Au(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],x=t.split(" "),S=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,T,D,v;n?l!==Ua&&(T=f*m-g*_)&&(D=S*(m/T)+R*(-_/T)+(_*M-m*p)/T,v=S*(-g/T)+R*(f/T)-(f*M-g*p)/T,S=D,R=v):(A=Cp(e),S=A.x+(~x[0].indexOf("%")?S/100*A.width:S),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(p=S-c,M=R-u,a.xOffset=h+(p*f+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Rn]="0px 0px",o&&(tr(o,a,"xOrigin",c,S),tr(o,a,"yOrigin",u,R),tr(o,a,"xOffset",h,a.xOffset),tr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},Ia=function(e,t){var n=e._gsap||new mp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Hn(e,Rn)||"0",u,h,d,f,g,_,m,p,M,x,S,R,A,T,D,v,y,F,U,K,P,O,z,X,Y,$,C,Z,ne,q,J,se;return u=h=d=_=m=p=M=x=S=0,f=g=1,n.svg=!!(e.getCTM&&Pp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ct]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ct]!=="none"?l[Ct]:"")),i.scale=i.rotate=i.translate="none"),T=Au(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Bc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,A=n.yOrigin||0,T!==Ua&&(F=T[0],U=T[1],K=T[2],P=T[3],u=O=T[4],h=z=T[5],T.length===6?(f=Math.sqrt(F*F+U*U),g=Math.sqrt(P*P+K*K),_=F||U?hs(U,F)*Ar:0,M=K||P?hs(K,P)*Ar+_:0,M&&(g*=Math.abs(Math.cos(M*bs))),n.svg&&(u-=R-(R*F+A*K),h-=A-(R*U+A*P))):(se=T[6],q=T[7],C=T[8],Z=T[9],ne=T[10],J=T[11],u=T[12],h=T[13],d=T[14],D=hs(se,ne),m=D*Ar,D&&(v=Math.cos(-D),y=Math.sin(-D),X=O*v+C*y,Y=z*v+Z*y,$=se*v+ne*y,C=O*-y+C*v,Z=z*-y+Z*v,ne=se*-y+ne*v,J=q*-y+J*v,O=X,z=Y,se=$),D=hs(-K,ne),p=D*Ar,D&&(v=Math.cos(-D),y=Math.sin(-D),X=F*v-C*y,Y=U*v-Z*y,$=K*v-ne*y,J=P*y+J*v,F=X,U=Y,K=$),D=hs(U,F),_=D*Ar,D&&(v=Math.cos(D),y=Math.sin(D),X=F*v+U*y,Y=O*v+z*y,U=U*v-F*y,z=z*v-O*y,F=X,O=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Dt(Math.sqrt(F*F+U*U+K*K)),g=Dt(Math.sqrt(z*z+se*se)),D=hs(O,z),M=Math.abs(D)>2e-4?D*Ar:0,S=J?1/(J<0?-J:J):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dp(Hn(e,Ct)),X&&e.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Dt(f),n.scaleY=Dt(g),n.rotation=Dt(_)+a,n.rotationX=Dt(m)+a,n.rotationY=Dt(p)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Rn]=Ko(c)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?iy:Rp?Up:ny,n.uncache=0,n},Ko=function(e){return(e=e.split(" "))[0]+" "+e[1]},oc=function(e,t,n){var i=ln(t);return Dt(parseFloat(t)+parseFloat(dr(e,"x",n+"px",i)))+i},ny=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Up(e,t)},yr="0deg",Qs="0px",Er=") ",Up=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,x=n.zOrigin,S="",R=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==yr||u!==yr)){var A=parseFloat(u)*bs,T=Math.sin(A),D=Math.cos(A),v;A=parseFloat(h)*bs,v=Math.cos(A),o=oc(M,o,T*v*-x),a=oc(M,a,-Math.sin(A)*-x),l=oc(M,l,D*v*-x+x)}m!==Qs&&(S+="perspective("+m+Er),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||o!==Qs||a!==Qs||l!==Qs)&&(S+=l!==Qs||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Er),c!==yr&&(S+="rotate("+c+Er),u!==yr&&(S+="rotateY("+u+Er),h!==yr&&(S+="rotateX("+h+Er),(d!==yr||f!==yr)&&(S+="skew("+d+", "+f+Er),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Er),M.style[Ct]=S||"translate(0, 0)"},iy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,x=parseFloat(o),S=parseFloat(a),R,A,T,D,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bs,c*=bs,R=Math.cos(l)*h,A=Math.sin(l)*h,T=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=bs,v=Math.tan(c-u),v=Math.sqrt(1+v*v),T*=v,D*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),R*=v,A*=v)),R=Dt(R),A=Dt(A),T=Dt(T),D=Dt(D)):(R=h,D=d,A=T=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=dr(f,"x",o,"px"),S=dr(f,"y",a,"px")),(g||_||m||p)&&(x=Dt(x+g-(g*R+_*T)+m),S=Dt(S+_-(g*A+_*D)+p)),(i||s)&&(v=f.getBBox(),x=Dt(x+i/100*v.width),S=Dt(S+s/100*v.height)),v="matrix("+R+","+A+","+T+","+D+","+x+","+S+")",f.setAttribute("transform",v),M&&(f.style[Ct]=v)},ry=function(e,t,n,i,s){var o=360,a=Jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ar:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Sf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Sf)%o-~~(c/o)*o)),e._pt=d=new wn(e._pt,t,n,i,c,kS),d.e=u,d.u="deg",e._props.push(n),d},Rf=function(e,t){for(var n in t)e[n]=t[n];return e},sy=function(e,t,n){var i=Rf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ct]=t,a=Ia(n,1),fr(n,Ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ct],o[Ct]=t,a=Ia(n,1),o[Ct]=c);for(l in Hi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=ln(c),g=ln(u),h=f!==g?dr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new wn(e._pt,a,l,h,d-h,Nc),e._pt.u=g||0,e._props.push(l));Rf(a,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});$o[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return Ii(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var Ip={name:"css",register:Fc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,m,p,M,x,S,R,A,T,D,v;Eu||Fc(),this.styles=this.styles||wp(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(On[_]&&_p(_,t,n,i,e,s)))){if(f=typeof u,g=$o[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Pa(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",lr.lastIndex=0,lr.test(c)||(m=ln(c),p=ln(u),p?m!==p&&(c=dr(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Jt(c)&&~c.indexOf("random(")&&(c=Pa(c)),ln(c+"")||c==="auto"||(c+=Wn.units[_]||ln(Ii(e,_))||""),(c+"").charAt(1)==="="&&(c=Ii(e,_))):c=Ii(e,_),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in xi&&(_==="autoAlpha"&&(d===1&&Ii(e,"visibility")==="hidden"&&h&&(d=0),D.push("visibility",0,a.visibility),tr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Hi,x){if(this.styles.save(_),v=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Hn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=Hn(e,"perspective"),y?e.style.perspective=y:fr(e,"perspective")}h=parseFloat(u)}if(S||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ia(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new wn(this._pt,a,Ct,0,1,R.renderTransform,R,0,-1),S.dep=1),_==="scale")this._pt=new wn(this._pt,R,"scaleY",R.scaleY,(M?Es(R.scaleY,M+h):h)-R.scaleY||0,Nc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Rn,0,a[Rn]),u=ey(u),R.svg?Bc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&tr(this,R,"zOrigin",R.zOrigin,p),tr(this,a,_,Ko(c),Ko(u)));continue}else if(_==="svgOrigin"){Bc(e,u,1,A,0,this);continue}else if(_ in Lp){ry(this,R,_,d,M?Es(d,M+u):u);continue}else if(_==="smoothOrigin"){tr(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){sy(this,u,e);continue}}else _ in a||(_=zs(_)||_);if(x||(h||h===0)&&(d||d===0)&&!zS.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),p=ln(u)||(_ in Wn.units?Wn.units[_]:m),m!==p&&(d=dr(e,_,c,p)),this._pt=new wn(this._pt,x?R:a,_,d,(M?Es(d,M+h):h)-d,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?VS:Nc),this._pt.u=p||0,x&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=HS):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=GS);else if(_ in a)QS.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){du(_,u);continue}x||(_ in a?D.push(_,0,a[_]):typeof e[_]=="function"?D.push(_,2,e[_]()):D.push(_,1,c||e[_])),o.push(_)}}T&&yp(this)},render:function(e,t){if(t.tween._time||!Tu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ii,aliases:xi,getSetter:function(e,t,n){var i=xi[t];return i&&i.indexOf(",")<0&&(t=i),t in Hi&&t!==Rn&&(e._gsap.x||Ii(e,"x"))?n&&Mf===n?t==="scale"?qS:YS:(Mf=n||{})&&(t==="scale"?$S:KS):e.style&&!uu(e.style[t])?WS:~t.indexOf("-")?XS:Su(e,t)},core:{_removeProperty:fr,_getMatrix:Au}};Cn.utils.checkPrefix=zs;Cn.core.getStyleSaver=wp;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){Hi[s]=1});An(e,function(s){Wn.units[s]="deg",Lp[s]=1}),xi[i[13]]=r+","+e,An(n,function(s){var o=s.split(":");xi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});Cn.registerPlugin(Ip);var mt=Cn.registerPlugin(Ip)||Cn;mt.core.Tween;function ay(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function oy(r,e,t){return e&&ay(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qt,Lo,zn,nr,ir,As,Np,wr,ma,Op,Bi,li,Fp,Bp=function(){return Qt||typeof window<"u"&&(Qt=window.gsap)&&Qt.registerPlugin&&Qt},zp=1,Ms=[],nt=[],yi=[],_a=Date.now,zc=function(e,t){return t},ly=function(){var e=ma.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,yi),nt=n,yi=i,zc=function(o,a){return t[o](a)}},cr=function(e,t){return~yi.indexOf(e)&&yi[yi.indexOf(e)+1][t]},ga=function(e){return!!~Op.indexOf(e)},pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},mo="scrollLeft",_o="scrollTop",kc=function(){return Bi&&Bi.isPressed||nt.cache++},Jo=function(e,t){var n=function i(s){if(s||s===0){zp&&(zn.history.scrollRestoration="manual");var o=Bi&&Bi.isPressed;s=i.v=Math.round(s)||(Bi&&Bi.iOS?1:0),e(s),i.cacheID=nt.cache,o&&zc("ss",s)}else(t||nt.cache!==i.cacheID||zc("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:mo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Jo(function(r){return arguments.length?zn.scrollTo(r,Gt.sc()):zn.pageXOffset||nr[mo]||ir[mo]||As[mo]||0})},Gt={s:_o,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:Jo(function(r){return arguments.length?zn.scrollTo(Sn.sc(),r):zn.pageYOffset||nr[_o]||ir[_o]||As[_o]||0})},En=function(e,t){return(t&&t._ctx&&t._ctx.selector||Qt.utils.toArray)(e)[0]||(typeof e=="string"&&Qt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},cy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},pr=function(e,t){var n=t.s,i=t.sc;ga(e)&&(e=nr.scrollingElement||ir);var s=nt.indexOf(e),o=i===Gt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||pn(e,"scroll",kc);var a=nt[s+o],l=a||(nt[s+o]=Jo(cr(e,n),!0)||(ga(e)?i:Jo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Qt.getProperty(e,"scrollBehavior")==="smooth"),l},Gc=function(e,t,n){var i=e,s=e,o=_a(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=_a();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=_a();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},ea=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},kp=function(){ma=Qt.core.globals().ScrollTrigger,ma&&ma.core&&ly()},Gp=function(e){return Qt=e||Bp(),!Lo&&Qt&&typeof document<"u"&&document.body&&(zn=window,nr=document,ir=nr.documentElement,As=nr.body,Op=[zn,nr,ir,As],Qt.utils.clamp,Fp=Qt.core.context||function(){},wr="onpointerenter"in As?"pointer":"mouse",Np=Ut.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=Ut.eventTypes=("ontouchstart"in ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zp=0},500),kp(),Lo=1),Lo};Sn.op=Gt;nt.cache=0;var Ut=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Lo||Gp(Qt)||console.warn("Please gsap.registerPlugin(Observer)"),ma||kp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,x=n.onPress,S=n.onRelease,R=n.onRight,A=n.onLeft,T=n.onUp,D=n.onDown,v=n.onChangeX,y=n.onChangeY,F=n.onChange,U=n.onToggleX,K=n.onToggleY,P=n.onHover,O=n.onHoverEnd,z=n.onMove,X=n.ignoreCheck,Y=n.isNormalizer,$=n.onGestureStart,C=n.onGestureEnd,Z=n.onWheel,ne=n.onEnable,q=n.onDisable,J=n.onClick,se=n.scrollSpeed,_e=n.capture,de=n.allowClicks,Pe=n.lockAxis,Le=n.onLockAxis;this.target=a=En(a)||ir,this.vars=n,f&&(f=Qt.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(As).lineHeight)||22);var Ie,He,G,Ve,me,De,ge,H=this,Be=0,w=0,E=n.passive||!u&&n.passive!==!1,B=pr(a,Sn),ee=pr(a,Gt),Q=B(),te=ee(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",ue=ga(a),ce=a.ownerDocument||nr,Ae=[0,0,0],Ge=[0,0,0],j=0,st=function(){return j=_a()},Re=function(xe,Ce){return(H.event=xe)&&f&&cy(xe.target,f)||Ce&&pe&&xe.pointerType!=="touch"||X&&X(xe,Ce)},We=function(){H._vx.reset(),H._vy.reset(),He.pause(),h&&h(H)},Ee=function(){var xe=H.deltaX=Cf(Ae),Ce=H.deltaY=Cf(Ge),ie=Math.abs(xe)>=i,Fe=Math.abs(Ce)>=i;F&&(ie||Fe)&&F(H,xe,Ce,Ae,Ge),ie&&(R&&H.deltaX>0&&R(H),A&&H.deltaX<0&&A(H),v&&v(H),U&&H.deltaX<0!=Be<0&&U(H),Be=H.deltaX,Ae[0]=Ae[1]=Ae[2]=0),Fe&&(D&&H.deltaY>0&&D(H),T&&H.deltaY<0&&T(H),y&&y(H),K&&H.deltaY<0!=w<0&&K(H),w=H.deltaY,Ge[0]=Ge[1]=Ge[2]=0),(Ve||G)&&(z&&z(H),G&&(m&&G===1&&m(H),M&&M(H),G=0),Ve=!1),De&&!(De=!1)&&Le&&Le(H),me&&(Z(H),me=!1),Ie=0},ve=function(xe,Ce,ie){Ae[ie]+=xe,Ge[ie]+=Ce,H._vx.update(xe),H._vy.update(Ce),c?Ie||(Ie=requestAnimationFrame(Ee)):Ee()},Xe=function(xe,Ce){Pe&&!ge&&(H.axis=ge=Math.abs(xe)>Math.abs(Ce)?"x":"y",De=!0),ge!=="y"&&(Ae[2]+=xe,H._vx.update(xe,!0)),ge!=="x"&&(Ge[2]+=Ce,H._vy.update(Ce,!0)),c?Ie||(Ie=requestAnimationFrame(Ee)):Ee()},je=function(xe){if(!Re(xe,1)){xe=ea(xe,u);var Ce=xe.clientX,ie=xe.clientY,Fe=Ce-H.x,Ne=ie-H.y,qe=H.isDragging;H.x=Ce,H.y=ie,(qe||(Fe||Ne)&&(Math.abs(H.startX-Ce)>=s||Math.abs(H.startY-ie)>=s))&&(G||(G=qe?2:1),qe||(H.isDragging=!0),Xe(Fe,Ne))}},ct=H.onPress=function(Te){Re(Te,1)||Te&&Te.button||(H.axis=ge=null,He.pause(),H.isPressed=!0,Te=ea(Te),Be=w=0,H.startX=H.x=Te.clientX,H.startY=H.y=Te.clientY,H._vx.reset(),H._vy.reset(),pn(Y?a:ce,li[1],je,E,!0),H.deltaX=H.deltaY=0,x&&x(H))},fe=H.onRelease=function(Te){if(!Re(Te,1)){dn(Y?a:ce,li[1],je,!0);var xe=!isNaN(H.y-H.startY),Ce=H.isDragging,ie=Ce&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Fe=ea(Te);!ie&&xe&&(H._vx.reset(),H._vy.reset(),u&&de&&Qt.delayedCall(.08,function(){if(_a()-j>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(ce.createEvent){var Ne=ce.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,zn,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ne)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&Ce&&!Y&&He.restart(!0),G&&Ee(),p&&Ce&&p(H),S&&S(H,ie)}},re=function(xe){return xe.touches&&xe.touches.length>1&&(H.isGesturing=!0)&&$(xe,H.isDragging)},L=function(){return(H.isGesturing=!1)||C(H)},ae=function(xe){if(!Re(xe)){var Ce=B(),ie=ee();ve((Ce-Q)*se,(ie-te)*se,1),Q=Ce,te=ie,h&&He.restart(!0)}},oe=function(xe){if(!Re(xe)){xe=ea(xe,u),Z&&(me=!0);var Ce=(xe.deltaMode===1?l:xe.deltaMode===2?zn.innerHeight:1)*g;ve(xe.deltaX*Ce,xe.deltaY*Ce,0),h&&!Y&&He.restart(!0)}},Oe=function(xe){if(!Re(xe)){var Ce=xe.clientX,ie=xe.clientY,Fe=Ce-H.x,Ne=ie-H.y;H.x=Ce,H.y=ie,Ve=!0,h&&He.restart(!0),(Fe||Ne)&&Xe(Fe,Ne)}},Ue=function(xe){H.event=xe,P(H)},it=function(xe){H.event=xe,O(H)},at=function(xe){return Re(xe)||ea(xe,u)&&J(H)};He=H._dc=Qt.delayedCall(d||.25,We).pause(),H.deltaX=H.deltaY=0,H._vx=Gc(0,50,!0),H._vy=Gc(0,50,!0),H.scrollX=B,H.scrollY=ee,H.isDragging=H.isGesturing=H.isPressed=!1,Fp(this),H.enable=function(Te){return H.isEnabled||(pn(ue?ce:a,"scroll",kc),o.indexOf("scroll")>=0&&pn(ue?ce:a,"scroll",ae,E,_e),o.indexOf("wheel")>=0&&pn(a,"wheel",oe,E,_e),(o.indexOf("touch")>=0&&Np||o.indexOf("pointer")>=0)&&(pn(a,li[0],ct,E,_e),pn(ce,li[2],fe),pn(ce,li[3],fe),de&&pn(a,"click",st,!0,!0),J&&pn(a,"click",at),$&&pn(ce,"gesturestart",re),C&&pn(ce,"gestureend",L),P&&pn(a,wr+"enter",Ue),O&&pn(a,wr+"leave",it),z&&pn(a,wr+"move",Oe)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Ve=G=!1,H._vx.reset(),H._vy.reset(),Q=B(),te=ee(),Te&&Te.type&&ct(Te),ne&&ne(H)),H},H.disable=function(){H.isEnabled&&(Ms.filter(function(Te){return Te!==H&&ga(Te.target)}).length||dn(ue?ce:a,"scroll",kc),H.isPressed&&(H._vx.reset(),H._vy.reset(),dn(Y?a:ce,li[1],je,!0)),dn(ue?ce:a,"scroll",ae,_e),dn(a,"wheel",oe,_e),dn(a,li[0],ct,_e),dn(ce,li[2],fe),dn(ce,li[3],fe),dn(a,"click",st,!0),dn(a,"click",at),dn(ce,"gesturestart",re),dn(ce,"gestureend",L),dn(a,wr+"enter",Ue),dn(a,wr+"leave",it),dn(a,wr+"move",Oe),H.isEnabled=H.isPressed=H.isDragging=!1,q&&q(H))},H.kill=H.revert=function(){H.disable();var Te=Ms.indexOf(H);Te>=0&&Ms.splice(Te,1),Bi===H&&(Bi=0)},Ms.push(H),Y&&ga(a)&&(Bi=H),H.enable(_)},oy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ut.version="3.14.2";Ut.create=function(r){return new Ut(r)};Ut.register=Gp;Ut.getAll=function(){return Ms.slice()};Ut.getById=function(r){return Ms.filter(function(e){return e.vars.id===r})[0]};Bp()&&Qt.registerPlugin(Ut);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Me,ps,et,Mt,Fn,ut,wu,Zo,Na,va,ra,go,sn,fl,Hc,gn,Pf,Lf,ms,Hp,lc,Vp,_n,Vc,Wp,Xp,Ji,Wc,Ru,ws,Cu,xa,Xc,cc,vo=1,on=Date.now,uc=on(),ri=0,sa=0,Df=function(e,t,n){var i=In(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Uf=function(e,t){return t&&(!In(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},uy=function r(){return sa&&requestAnimationFrame(r)},If=function(){return fl=1},Nf=function(){return fl=0},_i=function(e){return e},aa=function(e){return Math.round(e*1e5)/1e5||0},Yp=function(){return typeof window<"u"},qp=function(){return Me||Yp()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Xr=function(e){return!!~wu.indexOf(e)},$p=function(e){return(e==="Height"?Cu:et["inner"+e])||Fn["client"+e]||ut["client"+e]},Kp=function(e){return cr(e,"getBoundingClientRect")||(Xr(e)?function(){return Oo.width=et.innerWidth,Oo.height=Cu,Oo}:function(){return Oi(e)})},hy=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=cr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?$p(s):e["client"+s])||0}},fy=function(e,t){return!t||~yi.indexOf(e)?Kp(e):function(){return Oo}},Mi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=cr(e,n))?o()-Kp(e)()[s]:Xr(e)?(Fn[n]||ut[n])-$p(i):e[n]-e["offset"+i])},xo=function(e,t){for(var n=0;n<ms.length;n+=3)(!t||~t.indexOf(ms[n+1]))&&e(ms[n],ms[n+1],ms[n+2])},In=function(e){return typeof e=="string"},cn=function(e){return typeof e=="function"},oa=function(e){return typeof e=="number"},Rr=function(e){return typeof e=="object"},ta=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},hc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},fs=Math.abs,Jp="left",Zp="top",Pu="right",Lu="bottom",kr="width",Gr="height",Ma="Right",Sa="Left",ya="Top",Ea="Bottom",Nt="padding",Qn="margin",ks="Width",Du="Height",kt="px",ei=function(e){return et.getComputedStyle(e)},dy=function(e){var t=ei(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Of=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oi=function(e,t){var n=t&&ei(e)[Hc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},jo=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},jp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},py=function(e){return function(t){return Me.utils.snap(jp(e),t)}},Uu=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},my=function(e){return function(t,n){return Uu(jp(e))(t,n.direction)}},Mo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},qt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Yt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},So=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ff={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},yo={toggleActions:"play",anticipatePin:0},Qo={top:0,left:0,center:.5,bottom:1,right:1},Do=function(e,t){if(In(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Qo?Qo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Eo=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=Mt.createElement("div"),_=Xr(n)||cr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?ut:n,M=e.indexOf("start")!==-1,x=M?c:u,S="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===Gt?Pu:Lu)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Uo(g,0,i,M),g},Uo=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ks]=1,s["border"+a+ks]=0,s[n.p]=t+"px",Me.set(e,s)},Je=[],Yc={},Oa,Bf=function(){return on()-ri>34&&(Oa||(Oa=requestAnimationFrame(zi)))},ds=function(){(!_n||!_n.isPressed||_n.startX>ut.clientWidth)&&(nt.cache++,_n?Oa||(Oa=requestAnimationFrame(zi)):zi(),ri||qr("scrollStart"),ri=on())},fc=function(){Xp=et.innerWidth,Wp=et.innerHeight},la=function(e){nt.cache++,(e===!0||!sn&&!Vp&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!Vc||Xp!==et.innerWidth||Math.abs(et.innerHeight-Wp)>et.innerHeight*.25))&&Zo.restart(!0)},Yr={},_y=[],Qp=function r(){return Yt(Ze,"scrollEnd",r)||Dr(!0)},qr=function(e){return Yr[e]&&Yr[e].map(function(t){return t()})||_y},Un=[],em=function(e){for(var t=0;t<Un.length;t+=5)(!e||Un[t+4]&&Un[t+4].query===e)&&(Un[t].style.cssText=Un[t+1],Un[t].getBBox&&Un[t].setAttribute("transform",Un[t+2]||""),Un[t+3].uncache=1)},tm=function(){return nt.forEach(function(e){return cn(e)&&++e.cacheID&&(e.rec=e())})},Iu=function(e,t){var n;for(gn=0;gn<Je.length;gn++)n=Je[gn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));xa=!0,t&&em(t),t||qr("revert")},nm=function(e,t){nt.cache++,(t||!vn)&&nt.forEach(function(n){return cn(n)&&n.cacheID++&&(n.rec=0)}),In(e)&&(et.history.scrollRestoration=Ru=e)},vn,Hr=0,zf,gy=function(){if(zf!==Hr){var e=zf=Hr;requestAnimationFrame(function(){return e===Hr&&Dr(!0)})}},im=function(){ut.appendChild(ws),Cu=!_n&&ws.offsetHeight||et.innerHeight,ut.removeChild(ws)},kf=function(e){return Na(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Dr=function(e,t){if(Fn=Mt.documentElement,ut=Mt.body,wu=[et,Mt,Fn,ut],ri&&!e&&!xa){qt(Ze,"scrollEnd",Qp);return}im(),vn=Ze.isRefreshing=!0,xa||tm();var n=qr("refreshInit");Hp&&Ze.sort(),t||Iu(),nt.forEach(function(i){cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Je.slice(0).forEach(function(i){return i.refresh()}),xa=!1,Je.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Xc=1,kf(!0),Je.forEach(function(i){var s=Mi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),kf(!1),Xc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),nm(Ru,1),Zo.pause(),Hr++,vn=2,zi(2),Je.forEach(function(i){return cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vn=Ze.isRefreshing=!1,qr("refresh")},qc=0,Io=1,Ta,zi=function(e){if(e===2||!vn&&!xa){Ze.isUpdating=!0,Ta&&Ta.update(0);var t=Je.length,n=on(),i=n-uc>=50,s=t&&Je[0].scroll();if(Io=qc>s?-1:1,vn||(qc=s),i&&(ri&&!fl&&n-ri>200&&(ri=0,qr("scrollEnd")),ra=uc,uc=n),Io<0){for(gn=t;gn-- >0;)Je[gn]&&Je[gn].update(0,i);Io=1}else for(gn=0;gn<t;gn++)Je[gn]&&Je[gn].update(0,i);Ze.isUpdating=!1}Oa=0},$c=[Jp,Zp,Lu,Pu,Qn+Ea,Qn+Ma,Qn+ya,Qn+Sa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],No=$c.concat([kr,Gr,"boxSizing","max"+ks,"max"+Du,"position",Qn,Nt,Nt+ya,Nt+Ma,Nt+Ea,Nt+Sa]),vy=function(e,t,n){Rs(n);var i=e._gsap;if(i.spacerIsNative)Rs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},dc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$c.length,o=t.style,a=e.style,l;s--;)l=$c[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Lu]=a[Pu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[kr]=jo(e,Sn)+kt,o[Gr]=jo(e,Gt)+kt,o[Nt]=a[Qn]=a[Zp]=a[Jp]="0",Rs(i),a[kr]=a["max"+ks]=n[kr],a[Gr]=a["max"+Du]=n[Gr],a[Nt]=n[Nt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},xy=/([A-Z])/g,Rs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(xy,"-$1").toLowerCase())}},To=function(e){for(var t=No.length,n=e.style,i=[],s=0;s<t;s++)i.push(No[s],n[No[s]]);return i.t=e,i},My=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Oo={left:0,top:0},Gf=function(e,t,n,i,s,o,a,l,c,u,h,d,f,g){cn(e)&&(e=e(l)),In(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Do("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(e)||(e=+e),oa(e))f&&(e=Me.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Uo(a,n,i,!0);else{cn(t)&&(t=t(l));var x=(e||"0").split(" "),S,R,A,T;M=En(t,l)||ut,S=Oi(M)||{},(!S||!S.left&&!S.top)&&ei(M).display==="none"&&(T=M.style.display,M.style.display="block",S=Oi(M),T?M.style.display=T:M.style.removeProperty("display")),R=Do(x[0],S[i.d]),A=Do(x[1]||"0",n),e=S[i.p]-c[i.p]-u+R+s-A,a&&Uo(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var D=e+n,v=o._isStart;m="scroll"+i.d2,Uo(o,D,i,v&&D>20||!v&&(h?Math.max(ut[m],Fn[m]):o.parentNode[m])<=D+1),h&&(c=Oi(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+kt))}return f&&M&&(m=Oi(M),f.seek(d),p=Oi(M),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},Sy=/(webkit|moz|length|cssText|inset)/i,Hf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ut){e._stOrig=s.cssText,a=ei(e);for(o in a)!+o&&!Sy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},rm=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},bo=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},Vf=function(e,t){var n=pr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=rm(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&zi()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Me.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},qt(e,"wheel",n.wheelHandler),Ze.isTouch&&qt(e,"touchmove",n.wheelHandler),s},Ze=function(){function r(t,n){ps||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!sa){this.update=this.refresh=this.kill=_i;return}n=Of(In(n)||oa(n)||n.nodeType?{trigger:n}:n,yo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,x=s.once,S=s.snap,R=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,D=s.fastScrollEnd,v=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Gt,F=!h&&h!==0,U=En(n.scroller||et),K=Me.core.getCache(U),P=Xr(U),O=("pinType"in n?n.pinType:cr(U,"pinType")||P&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=F&&n.toggleActions.split(" "),Y="markers"in n?n.markers:yo.markers,$=P?0:parseFloat(ei(U)["border"+y.p2+ks])||0,C=this,Z=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ne=hy(U,P,y),q=fy(U,P),J=0,se=0,_e=0,de=pr(U,y),Pe,Le,Ie,He,G,Ve,me,De,ge,H,Be,w,E,B,ee,Q,te,pe,ue,ce,Ae,Ge,j,st,Re,We,Ee,ve,Xe,je,ct,fe,re,L,ae,oe,Oe,Ue,it;if(C._startClamp=C._endClamp=!1,C._dir=y,m*=45,C.scroller=U,C.scroll=T?T.time.bind(T):de,He=de(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Hp=1,n.refreshPriority===-9999&&(Ta=C)),K.tweenScroll=K.tweenScroll||{top:Vf(U,Gt),left:Vf(U,Sn)},C.tweenTo=Pe=K.tweenScroll[y.p],C.scrubDuration=function(ie){re=oa(ie)&&ie,re?fe?fe.duration(ie):fe=Me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:re,paused:!0,onComplete:function(){return p&&p(C)}}):(fe&&fe.progress(1).kill(),fe=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),je=0,l||(l=i.vars.id)),S&&((!Rr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ut.style&&Me.set(P?[ut,Fn]:U,{scrollBehavior:"auto"}),nt.forEach(function(ie){return cn(ie)&&ie.target===(P?Mt.scrollingElement||Fn:U)&&(ie.smooth=!1)}),Ie=cn(S.snapTo)?S.snapTo:S.snapTo==="labels"?py(i):S.snapTo==="labelsDirectional"?my(i):S.directional!==!1?function(ie,Fe){return Uu(S.snapTo)(ie,on()-se<500?0:Fe.direction)}:Me.utils.snap(S.snapTo),L=S.duration||{min:.1,max:2},L=Rr(L)?va(L.min,L.max):va(L,L),ae=Me.delayedCall(S.delay||re/2||.1,function(){var ie=de(),Fe=on()-se<500,Ne=Pe.tween;if((Fe||Math.abs(C.getVelocity())<10)&&!Ne&&!fl&&J!==ie){var qe=(ie-Ve)/B,At=i&&!F?i.totalProgress():qe,Qe=Fe?0:(At-ct)/(on()-ra)*1e3||0,vt=Me.utils.clamp(-qe,1-qe,fs(Qe/2)*Qe/.185),Bt=qe+(S.inertia===!1?0:vt),St,xt,ht=S,Pn=ht.onStart,b=ht.onInterrupt,N=ht.onComplete;if(St=Ie(Bt,C),oa(St)||(St=Bt),xt=Math.max(0,Math.round(Ve+St*B)),ie<=me&&ie>=Ve&&xt!==ie){if(Ne&&!Ne._initted&&Ne.data<=fs(xt-ie))return;S.inertia===!1&&(vt=St-qe),Pe(xt,{duration:L(fs(Math.max(fs(Bt-At),fs(St-At))*.185/Qe/.05||0)),ease:S.ease||"power3",data:fs(xt-ie),onInterrupt:function(){return ae.restart(!0)&&b&&b(C)},onComplete:function(){C.update(),J=de(),i&&!F&&(fe?fe.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),je=ct=i&&!F?i.totalProgress():C.progress,M&&M(C),N&&N(C)}},ie,vt*B,xt-ie-vt*B),Pn&&Pn(C,Pe.tween)}}else C.isActive&&J!==ie&&ae.restart(!0)}).pause()),l&&(Yc[l]=C),d=C.trigger=En(d||f!==!0&&f),it=d&&d._gsap&&d._gsap.stRevert,it&&(it=it(C)),f=f===!0?d:En(f),In(a)&&(a={targets:d,className:a}),f&&(g===!1||g===Qn||(g=!g&&f.parentNode&&f.parentNode.style&&ei(f.parentNode).display==="flex"?!1:Nt),C.pin=f,Le=Me.core.getCache(f),Le.spacer?ee=Le.pinState:(A&&(A=En(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Le.spacerIsNative=!!A,A&&(Le.spacerState=To(A))),Le.spacer=pe=A||Mt.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Le.pinState=ee=To(f)),n.force3D!==!1&&Me.set(f,{force3D:!0}),C.spacer=pe=Le.spacer,Xe=ei(f),st=Xe[g+y.os2],ce=Me.getProperty(f),Ae=Me.quickSetter(f,y.a,kt),dc(f,pe,Xe),te=To(f)),Y){w=Rr(Y)?Of(Y,Ff):Ff,H=Eo("scroller-start",l,U,y,w,0),Be=Eo("scroller-end",l,U,y,w,0,H),ue=H["offset"+y.op.d2];var at=En(cr(U,"content")||U);De=this.markerStart=Eo("start",l,at,y,w,ue,0,T),ge=this.markerEnd=Eo("end",l,at,y,w,ue,0,T),T&&(Ue=Me.quickSetter([De,ge],y.a,kt)),!O&&!(yi.length&&cr(U,"fixedMarkers")===!0)&&(dy(P?ut:U),Me.set([H,Be],{force3D:!0}),We=Me.quickSetter(H,y.a,kt),ve=Me.quickSetter(Be,y.a,kt))}if(T){var Te=T.vars.onUpdate,xe=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){C.update(0,0,1),Te&&Te.apply(T,xe||[])})}if(C.previous=function(){return Je[Je.indexOf(C)-1]},C.next=function(){return Je[Je.indexOf(C)+1]},C.revert=function(ie,Fe){if(!Fe)return C.kill(!0);var Ne=ie!==!1||!C.enabled,qe=sn;Ne!==C.isReverted&&(Ne&&(oe=Math.max(de(),C.scroll.rec||0),_e=C.progress,Oe=i&&i.progress()),De&&[De,ge,H,Be].forEach(function(At){return At.style.display=Ne?"none":"block"}),Ne&&(sn=C,C.update(Ne)),f&&(!R||!C.isActive)&&(Ne?vy(f,pe,ee):dc(f,pe,ei(f),Re)),Ne||C.update(Ne),sn=qe,C.isReverted=Ne)},C.refresh=function(ie,Fe,Ne,qe){if(!((sn||!C.enabled)&&!Fe)){if(f&&ie&&ri){qt(r,"scrollEnd",Qp);return}!vn&&Z&&Z(C),sn=C,Pe.tween&&!Ne&&(Pe.tween.kill(),Pe.tween=0),fe&&fe.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ye){return Ye.vars.immediateRender&&Ye.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var At=ne(),Qe=q(),vt=T?T.duration():Mi(U,y),Bt=B<=.01||!B,St=0,xt=qe||0,ht=Rr(Ne)?Ne.end:n.end,Pn=n.endTrigger||d,b=Rr(Ne)?Ne.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),N=C.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,C),W=d&&Math.max(0,Je.indexOf(C))||0,V=W,k,le,Se,ze,ye,we,ke,$e,Et,zt,ft,fn,dt;for(Y&&Rr(Ne)&&(fn=Me.getProperty(H,y.p),dt=Me.getProperty(Be,y.p));V-- >0;)we=Je[V],we.end||we.refresh(0,1)||(sn=C),ke=we.pin,ke&&(ke===d||ke===f||ke===N)&&!we.isReverted&&(zt||(zt=[]),zt.unshift(we),we.revert(!0,!0)),we!==Je[V]&&(W--,V--);for(cn(b)&&(b=b(C)),b=Df(b,"start",C),Ve=Gf(b,d,At,y,de(),De,H,C,Qe,$,O,vt,T,C._startClamp&&"_startClamp")||(f?-.001:0),cn(ht)&&(ht=ht(C)),In(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(In(b)?b.split(" ")[0]:"")+ht:(St=Do(ht.substr(2),At),ht=In(b)?b:(T?Me.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Ve):Ve)+St,Pn=d)),ht=Df(ht,"end",C),me=Math.max(Ve,Gf(ht||(Pn?"100% 0":vt),Pn,At,y,de()+St,ge,Be,C,Qe,$,O,vt,T,C._endClamp&&"_endClamp"))||-.001,St=0,V=W;V--;)we=Je[V]||{},ke=we.pin,ke&&we.start-we._pinPush<=Ve&&!T&&we.end>0&&(k=we.end-(C._startClamp?Math.max(0,we.start):we.start),(ke===d&&we.start-we._pinPush<Ve||ke===N)&&isNaN(b)&&(St+=k*(1-we.progress)),ke===f&&(xt+=k));if(Ve+=St,me+=St,C._startClamp&&(C._startClamp+=St),C._endClamp&&!vn&&(C._endClamp=me||-.001,me=Math.min(me,Mi(U,y))),B=me-Ve||(Ve-=.01)&&.001,Bt&&(_e=Me.utils.clamp(0,1,Me.utils.normalize(Ve,me,oe))),C._pinPush=xt,De&&St&&(k={},k[y.a]="+="+St,N&&(k[y.p]="-="+de()),Me.set([De,ge],k)),f&&!(Xc&&C.end>=Mi(U,y)))k=ei(f),ze=y===Gt,Se=de(),Ge=parseFloat(ce(y.a))+xt,!vt&&me>1&&(ft=(P?Mt.scrollingElement||Fn:U).style,ft={style:ft,value:ft["overflow"+y.a.toUpperCase()]},P&&ei(ut)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ft.style["overflow"+y.a.toUpperCase()]="scroll")),dc(f,pe,k),te=To(f),le=Oi(f,!0),$e=O&&pr(U,ze?Sn:Gt)(),g?(Re=[g+y.os2,B+xt+kt],Re.t=pe,V=g===Nt?jo(f,y)+B+xt:0,V&&(Re.push(y.d,V+kt),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=V+kt)),Rs(Re),N&&Je.forEach(function(Ye){Ye.pin===N&&Ye.vars.pinSpacing!==!1&&(Ye._subPinOffset=!0)}),O&&de(oe)):(V=jo(f,y),V&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=V+kt)),O&&(ye={top:le.top+(ze?Se-Ve:$e)+kt,left:le.left+(ze?$e:Se-Ve)+kt,boxSizing:"border-box",position:"fixed"},ye[kr]=ye["max"+ks]=Math.ceil(le.width)+kt,ye[Gr]=ye["max"+Du]=Math.ceil(le.height)+kt,ye[Qn]=ye[Qn+ya]=ye[Qn+Ma]=ye[Qn+Ea]=ye[Qn+Sa]="0",ye[Nt]=k[Nt],ye[Nt+ya]=k[Nt+ya],ye[Nt+Ma]=k[Nt+Ma],ye[Nt+Ea]=k[Nt+Ea],ye[Nt+Sa]=k[Nt+Sa],Q=My(ee,ye,R),vn&&de(0)),i?(Et=i._initted,lc(1),i.render(i.duration(),!0,!0),j=ce(y.a)-Ge+B+xt,Ee=Math.abs(B-j)>1,O&&Ee&&Q.splice(Q.length-2,2),i.render(0,!0,!0),Et||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lc(0)):j=B,ft&&(ft.value?ft.style["overflow"+y.a.toUpperCase()]=ft.value:ft.style.removeProperty("overflow-"+y.a));else if(d&&de()&&!T)for(le=d.parentNode;le&&le!==ut;)le._pinOffset&&(Ve-=le._pinOffset,me-=le._pinOffset),le=le.parentNode;zt&&zt.forEach(function(Ye){return Ye.revert(!1,!0)}),C.start=Ve,C.end=me,He=G=vn?oe:de(),!T&&!vn&&(He<oe&&de(oe),C.scroll.rec=0),C.revert(!1,!0),se=on(),ae&&(J=-1,ae.restart(!0)),sn=0,i&&F&&(i._initted||Oe)&&i.progress()!==Oe&&i.progress(Oe||0,!0).render(i.time(),!0,!0),(Bt||_e!==C.progress||T||_||i&&!i._initted)&&(i&&!F&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Ve<-.001&&!_e?Me.utils.normalize(Ve,me,0):_e,!0),C.progress=Bt||(He-Ve)/B===_e?0:_e),f&&g&&(pe._pinOffset=Math.round(C.progress*j)),fe&&fe.invalidate(),isNaN(fn)||(fn-=Me.getProperty(H,y.p),dt-=Me.getProperty(Be,y.p),bo(H,y,fn),bo(De,y,fn-(qe||0)),bo(Be,y,dt),bo(ge,y,dt-(qe||0))),Bt&&!vn&&C.update(),u&&!vn&&!E&&(E=!0,u(C),E=!1)}},C.getVelocity=function(){return(de()-G)/(on()-ra)*1e3||0},C.endAnimation=function(){ta(C.callbackAnimation),i&&(fe?fe.progress(1):i.paused()?F||ta(i,C.direction<0,1):ta(i,i.reversed()))},C.labelToScroll=function(ie){return i&&i.labels&&(Ve||C.refresh()||Ve)+i.labels[ie]/i.duration()*B||0},C.getTrailing=function(ie){var Fe=Je.indexOf(C),Ne=C.direction>0?Je.slice(0,Fe).reverse():Je.slice(Fe+1);return(In(ie)?Ne.filter(function(qe){return qe.vars.preventOverlaps===ie}):Ne).filter(function(qe){return C.direction>0?qe.end<=Ve:qe.start>=me})},C.update=function(ie,Fe,Ne){if(!(T&&!Ne&&!ie)){var qe=vn===!0?oe:C.scroll(),At=ie?0:(qe-Ve)/B,Qe=At<0?0:At>1?1:At||0,vt=C.progress,Bt,St,xt,ht,Pn,b,N,W;if(Fe&&(G=He,He=T?de():qe,S&&(ct=je,je=i&&!F?i.totalProgress():Qe)),m&&f&&!sn&&!vo&&ri&&(!Qe&&Ve<qe+(qe-G)/(on()-ra)*m?Qe=1e-4:Qe===1&&me>qe+(qe-G)/(on()-ra)*m&&(Qe=.9999)),Qe!==vt&&C.enabled){if(Bt=C.isActive=!!Qe&&Qe<1,St=!!vt&&vt<1,b=Bt!==St,Pn=b||!!Qe!=!!vt,C.direction=Qe>vt?1:-1,C.progress=Qe,Pn&&!sn&&(xt=Qe&&!vt?0:Qe===1?1:vt===1?2:3,F&&(ht=!b&&X[xt+1]!=="none"&&X[xt+1]||X[xt],W=i&&(ht==="complete"||ht==="reset"||ht in i))),v&&(b||W)&&(W||h||!i)&&(cn(v)?v(C):C.getTrailing(v).forEach(function(Se){return Se.endAnimation()})),F||(fe&&!sn&&!vo?(fe._dp._time-fe._start!==fe._time&&fe.render(fe._dp._time-fe._start),fe.resetTo?fe.resetTo("totalProgress",Qe,i._tTime/i._tDur):(fe.vars.totalProgress=Qe,fe.invalidate().restart())):i&&i.totalProgress(Qe,!!(sn&&(se||ie)))),f){if(ie&&g&&(pe.style[g+y.os2]=st),!O)Ae(aa(Ge+j*Qe));else if(Pn){if(N=!ie&&Qe>vt&&me+1>qe&&qe+1>=Mi(U,y),R)if(!ie&&(Bt||N)){var V=Oi(f,!0),k=qe-Ve;Hf(f,ut,V.top+(y===Gt?k:0)+kt,V.left+(y===Gt?0:k)+kt)}else Hf(f,pe);Rs(Bt||N?Q:te),Ee&&Qe<1&&Bt||Ae(Ge+(Qe===1&&!N?j:0))}}S&&!Pe.tween&&!sn&&!vo&&ae.restart(!0),a&&(b||x&&Qe&&(Qe<1||!cc))&&Na(a.targets).forEach(function(Se){return Se.classList[Bt||x?"add":"remove"](a.className)}),o&&!F&&!ie&&o(C),Pn&&!sn?(F&&(W&&(ht==="complete"?i.pause().totalProgress(1):ht==="reset"?i.restart(!0).pause():ht==="restart"?i.restart(!0):i[ht]()),o&&o(C)),(b||!cc)&&(c&&b&&hc(C,c),z[xt]&&hc(C,z[xt]),x&&(Qe===1?C.kill(!1,1):z[xt]=0),b||(xt=Qe===1?1:3,z[xt]&&hc(C,z[xt]))),D&&!Bt&&Math.abs(C.getVelocity())>(oa(D)?D:2500)&&(ta(C.callbackAnimation),fe?fe.progress(1):ta(i,ht==="reverse"?1:!Qe,1))):F&&o&&!sn&&o(C)}if(ve){var le=T?qe/T.duration()*(T._caScrollDist||0):qe;We(le+(H._isFlipped?1:0)),ve(le)}Ue&&Ue(-qe/T.duration()*(T._caScrollDist||0))}},C.enable=function(ie,Fe){C.enabled||(C.enabled=!0,qt(U,"resize",la),P||qt(U,"scroll",ds),Z&&qt(r,"refreshInit",Z),ie!==!1&&(C.progress=_e=0,He=G=J=de()),Fe!==!1&&C.refresh())},C.getTween=function(ie){return ie&&Pe?Pe.tween:fe},C.setPositions=function(ie,Fe,Ne,qe){if(T){var At=T.scrollTrigger,Qe=T.duration(),vt=At.end-At.start;ie=At.start+vt*ie/Qe,Fe=At.start+vt*Fe/Qe}C.refresh(!1,!1,{start:Uf(ie,Ne&&!!C._startClamp),end:Uf(Fe,Ne&&!!C._endClamp)},qe),C.update()},C.adjustPinSpacing=function(ie){if(Re&&ie){var Fe=Re.indexOf(y.d)+1;Re[Fe]=parseFloat(Re[Fe])+ie+kt,Re[1]=parseFloat(Re[1])+ie+kt,Rs(Re)}},C.disable=function(ie,Fe){if(ie!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Fe||fe&&fe.pause(),oe=0,Le&&(Le.uncache=1),Z&&Yt(r,"refreshInit",Z),ae&&(ae.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!P)){for(var Ne=Je.length;Ne--;)if(Je[Ne].scroller===U&&Je[Ne]!==C)return;Yt(U,"resize",la),P||Yt(U,"scroll",ds)}},C.kill=function(ie,Fe){C.disable(ie,Fe),fe&&!Fe&&fe.kill(),l&&delete Yc[l];var Ne=Je.indexOf(C);Ne>=0&&Je.splice(Ne,1),Ne===gn&&Io>0&&gn--,Ne=0,Je.forEach(function(qe){return qe.scroller===C.scroller&&(Ne=1)}),Ne||vn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Fe||i.kill()),De&&[De,ge,H,Be].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),Ta===C&&(Ta=0),f&&(Le&&(Le.uncache=1),Ne=0,Je.forEach(function(qe){return qe.pin===f&&Ne++}),Ne||(Le.spacer=0)),n.onKill&&n.onKill(C)},Je.push(C),C.enable(!1,!1),it&&it(C),i&&i.add&&!B){var Ce=C.update;C.update=function(){C.update=Ce,nt.cache++,Ve||me||C.refresh()},Me.delayedCall(.01,C.update),B=.01,Ve=me=0}else C.refresh();f&&gy()},r.register=function(n){return ps||(Me=n||qp(),Yp()&&window.document&&r.enable(),ps=sa),ps},r.defaults=function(n){if(n)for(var i in n)yo[i]=n[i];return yo},r.disable=function(n,i){sa=0,Je.forEach(function(o){return o[i?"kill":"disable"](n)}),Yt(et,"wheel",ds),Yt(Mt,"scroll",ds),clearInterval(go),Yt(Mt,"touchcancel",_i),Yt(ut,"touchstart",_i),Mo(Yt,Mt,"pointerdown,touchstart,mousedown",If),Mo(Yt,Mt,"pointerup,touchend,mouseup",Nf),Zo.kill(),xo(Yt);for(var s=0;s<nt.length;s+=3)So(Yt,nt[s],nt[s+1]),So(Yt,nt[s],nt[s+2])},r.enable=function(){if(et=window,Mt=document,Fn=Mt.documentElement,ut=Mt.body,Me&&(Na=Me.utils.toArray,va=Me.utils.clamp,Wc=Me.core.context||_i,lc=Me.core.suppressOverwrites||_i,Ru=et.history.scrollRestoration||"auto",qc=et.pageYOffset||0,Me.core.globals("ScrollTrigger",r),ut)){sa=1,ws=document.createElement("div"),ws.style.height="100vh",ws.style.position="absolute",im(),uy(),Ut.register(Me),r.isTouch=Ut.isTouch,Ji=Ut.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vc=Ut.isTouch===1,qt(et,"wheel",ds),wu=[et,Mt,Fn,ut],Me.matchMedia?(r.matchMedia=function(c){var u=Me.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Me.addEventListener("matchMediaInit",function(){tm(),Iu()}),Me.addEventListener("matchMediaRevert",function(){return em()}),Me.addEventListener("matchMedia",function(){Dr(0,1),qr("matchMedia")}),Me.matchMedia().add("(orientation: portrait)",function(){return fc(),fc})):console.warn("Requires GSAP 3.11.0 or later"),fc(),qt(Mt,"scroll",ds);var n=ut.hasAttribute("style"),i=ut.style,s=i.borderTopStyle,o=Me.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Oi(ut),Gt.m=Math.round(a.top+Gt.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ut.setAttribute("style",""),ut.removeAttribute("style")),go=setInterval(Bf,250),Me.delayedCall(.5,function(){return vo=0}),qt(Mt,"touchcancel",_i),qt(ut,"touchstart",_i),Mo(qt,Mt,"pointerdown,touchstart,mousedown",If),Mo(qt,Mt,"pointerup,touchend,mouseup",Nf),Hc=Me.utils.checkPrefix("transform"),No.push(Hc),ps=on(),Zo=Me.delayedCall(.2,Dr).pause(),ms=[Mt,"visibilitychange",function(){var c=et.innerWidth,u=et.innerHeight;Mt.hidden?(Pf=c,Lf=u):(Pf!==c||Lf!==u)&&la()},Mt,"DOMContentLoaded",Dr,et,"load",Dr,et,"resize",la],xo(qt),Je.forEach(function(c){return c.enable(0,1)}),l=0;l<nt.length;l+=3)So(Yt,nt[l],nt[l+1]),So(Yt,nt[l],nt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(cc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(go)||(go=i)&&setInterval(Bf,i),"ignoreMobileResize"in n&&(Vc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(xo(Yt)||xo(qt,n.autoRefreshEvents||"none"),Vp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),o=nt.indexOf(s),a=Xr(s);~o&&nt.splice(o,a?6:2),i&&(a?yi.unshift(et,i,ut,i,Fn,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){Je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(In(n)?En(n):n).getBoundingClientRect(),a=o[s?kr:Gr]*i||0;return s?o.right-a>0&&o.left+a<et.innerWidth:o.bottom-a>0&&o.top+a<et.innerHeight},r.positionInViewport=function(n,i,s){In(n)&&(n=En(n));var o=n.getBoundingClientRect(),a=o[s?kr:Gr],l=i==null?a/2:i in Qo?Qo[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/et.innerWidth:(o.top+l)/et.innerHeight},r.killAll=function(n){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Yr.killAll||[];Yr={},i.forEach(function(s){return s()})}},r}();Ze.version="3.14.2";Ze.saveStyles=function(r){return r?Na(r).forEach(function(e){if(e&&e.style){var t=Un.indexOf(e);t>=0&&Un.splice(t,5),Un.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),Wc())}}):Un};Ze.revert=function(r,e){return Iu(!r,e)};Ze.create=function(r,e){return new Ze(r,e)};Ze.refresh=function(r){return r?la(!0):(ps||Ze.register())&&Dr(!0)};Ze.update=function(r){return++nt.cache&&zi(r===!0?2:0)};Ze.clearScrollMemory=nm;Ze.maxScroll=function(r,e){return Mi(r,e?Sn:Gt)};Ze.getScrollFunc=function(r,e){return pr(En(r),e?Sn:Gt)};Ze.getById=function(r){return Yc[r]};Ze.getAll=function(){return Je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!ri};Ze.snapDirectional=Uu;Ze.addEventListener=function(r,e){var t=Yr[r]||(Yr[r]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(r,e){var t=Yr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ze.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Me.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&cn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return cn(s)&&(s=s(),qt(Ze,"refresh",function(){return s=e.batchMax()})),Na(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ze.create(c))}),t};var Wf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},pc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ut.isTouch?" pinch-zoom":""):"none",e===Fn&&r(ut,t)},Ao={auto:1,scroll:1},yy=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=on(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ut&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ao[(l=ei(s)).overflowY]||Ao[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Xr(s)&&(Ao[(l=ei(s)).overflowY]||Ao[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},sm=function(e,t,n,i){return Ut.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&yy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&qt(Mt,Ut.eventTypes[0],Yf,!1,!0)},onDisable:function(){return Yt(Mt,Ut.eventTypes[0],Yf,!0)}})},Ey=/(input|label|select|textarea)/i,Xf,Yf=function(e){var t=Ey.test(e.target.tagName);(t||Xf)&&(e._gsapAllow=!0,Xf=t)},Ty=function(e){Rr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=En(e.target)||Fn,u=Me.core.globals().ScrollSmoother,h=u&&u.get(),d=Ji&&(e.content&&En(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=pr(c,Gt),g=pr(c,Sn),_=1,m=(Ut.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,p=0,M=cn(i)?function(){return i(a)}:function(){return i||2.8},x,S,R=sm(c,e.type,!0,s),A=function(){return S=!1},T=_i,D=_i,v=function(){l=Mi(c,Gt),D=va(Ji?1:0,l),n&&(T=va(0,Mi(c,Sn))),x=Hr},y=function(){d._gsap.y=aa(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},F=function(){if(S){requestAnimationFrame(A);var Y=aa(a.deltaY/2),$=D(f.v-Y);if(d&&$!==f.v+f.offset){f.offset=$-f.v;var C=aa((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",f.cacheID=nt.cache,zi()}return!0}f.offset&&y(),S=!0},U,K,P,O,z=function(){v(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&Me.set(d,{y:"+=0"}),e.ignoreCheck=function(X){return Ji&&X.type==="touchmove"&&F()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){S=!1;var X=_;_=aa((et.visualViewport&&et.visualViewport.scale||1)/m),U.pause(),X!==_&&pc(c,_>1.01?!0:n?!1:"x"),K=g(),P=f(),v(),x=Hr},e.onRelease=e.onGestureStart=function(X,Y){if(f.offset&&y(),!Y)O.restart(!0);else{nt.cache++;var $=M(),C,Z;n&&(C=g(),Z=C+$*.05*-X.velocityX/.227,$*=Wf(g,C,Z,Mi(c,Sn)),U.vars.scrollX=T(Z)),C=f(),Z=C+$*.05*-X.velocityY/.227,$*=Wf(f,C,Z,Mi(c,Gt)),U.vars.scrollY=D(Z),U.invalidate().duration($).play(.01),(Ji&&U.vars.scrollY>=l||C>=l-1)&&Me.to({},{onUpdate:z,duration:$})}o&&o(X)},e.onWheel=function(){U._ts&&U.pause(),on()-p>1e3&&(x=0,p=on())},e.onChange=function(X,Y,$,C,Z){if(Hr!==x&&v(),Y&&n&&g(T(C[2]===Y?K+(X.startX-X.x):g()+Y-C[1])),$){f.offset&&y();var ne=Z[2]===$,q=ne?P+X.startY-X.y:f()+$-Z[1],J=D(q);ne&&q!==J&&(P+=J-q),f(J)}($||Y)&&zi()},e.onEnable=function(){pc(c,n?!1:"x"),Ze.addEventListener("refresh",z),qt(et,"resize",z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){pc(c,!0),Yt(et,"resize",z),Ze.removeEventListener("refresh",z),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ut(e),a.iOS=Ji,Ji&&!f()&&f(1),Ji&&Me.ticker.add(_i),O=a._dc,U=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:rm(f,f(),function(){return U.pause()})},onUpdate:zi,onComplete:O.vars.onComplete}),a};Ze.sort=function(r){if(cn(r))return Je.sort(r);var e=et.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Je.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(r){return new Ut(r)};Ze.normalizeScroll=function(r){if(typeof r>"u")return _n;if(r===!0&&_n)return _n.enable();if(r===!1){_n&&_n.kill(),_n=r;return}var e=r instanceof Ut?r:Ty(r);return _n&&_n.target===e.target&&_n.kill(),Xr(e.target)&&(_n=e),e};Ze.core={_getVelocityProp:Gc,_inputObserver:sm,_scrollers:nt,_proxies:yi,bridge:{ss:function(){ri||qr("scrollStart"),ri=on()},ref:function(){return sn}}};qp()&&Me.registerPlugin(Ze);mt.registerPlugin(Ze);const by=document.getElementById("three-canvas"),Ha=new SM;Ha.background=new ot(16317180);const Gs=new jn(45,window.innerWidth/window.innerHeight,.1,1e3);Gs.position.set(0,5,80);const dl=new Ld({canvas:by,antialias:!0});dl.setSize(window.innerWidth,window.innerHeight);dl.setPixelRatio(Math.min(window.devicePixelRatio,2));const Ay=new kM(16777215,1);Ha.add(Ay);const am=new zM(16777215,.5);am.position.set(10,20,10);Ha.add(am);const qn={presynaptic:9684477,postsynaptic:8843180,vesicle:16569165,ach:3621201,receptor:16498468,gprotein:10980346,ion_na:3900150,ion_ca:16498468,enzyme:9741240,mito:16486972},bt=(r,e=1)=>new OM({color:r,transparent:e<1,opacity:e}),Ti=new kn;Ha.add(Ti);const Ys=new kn;Ys.position.set(0,25,0);const el=new lt(new Kt(12,32,32),bt(qn.presynaptic,.9));el.scale.set(1.2,.8,1);Ys.add(el);const tl=new lt(new Us(4,5,20,16),bt(qn.presynaptic,.9));tl.position.y=18;Ys.add(tl);const Nu=new lt(new ll(1.5,5,8,16),bt(qn.mito));Nu.position.set(-5,2,0);Nu.rotation.z=.5;Ys.add(Nu);const Ui=[],wy=[[-4,-3,2],[-1,-4,0],[3,-3,-1],[5,-2,2],[-2,-2,-2],[0,-5,1],[4,-5,-2],[-5,-5,0]];wy.forEach((r,e)=>{const t=new kn;t.userData.dots=[];const n=new lt(new Kt(2,24,24),bt(qn.vesicle,.85));t.add(n),t.userData.shell=n;for(let i=0;i<4;i++){const s=new lt(new Kt(.35,12,12),bt(qn.ach));s.visible=!1;const o=i/4*Math.PI*2;s.position.set(Math.cos(o)*.8,Math.sin(o)*.8,0),t.add(s),t.userData.dots.push(s)}t.position.set(...r),t.userData.originalY=r[1],t.userData.originalPos=new I(...r),t.userData.filled=0,Ui.push(t),Ys.add(t)});Ti.add(Ys);const pi=[];for(let r=0;r<15;r++){const e=new lt(new Kt(.6,16,16),bt(qn.ach));e.position.set((Math.random()-.5)*25,5+Math.random()*8,(Math.random()-.5)*10),e.userData.originalPos=e.position.clone(),e.visible=!1,pi.push(e),Ti.add(e)}const Va=new kn;Va.position.set(0,-8,0);const Ry=new lt(new Ws(50,4,15),bt(qn.postsynaptic,.9));Va.add(Ry);[-15,0,15].forEach((r,e)=>{const t=new kn,n=new lt(new Us(2,2.5,6,16),bt(qn.receptor));t.add(n);const i=new lt(new Us(1,1,6.5,16),bt(3621201));t.add(i);const s=new lt(new lu(1.8,.4,8,16),bt(16707722));s.position.y=3,s.rotation.x=Math.PI/2,t.add(s),t.position.set(r,2,0),t.userData.type="nicotinic",Va.add(t)});[-8,8].forEach((r,e)=>{const t=new kn,n=new lt(new Us(1.8,2.2,5,16),bt(16020150));t.add(n);const i=new lt(new Kt(1.5,16,16),bt(qn.gprotein));i.position.set(0,-4,0),t.add(i);const s=new lt(new Kt(1,16,16),bt(8490232));s.position.set(1.5,-3.5,0),t.add(s);const o=new lt(new Kt(.7,16,16),bt(12891645));o.position.set(2.2,-3,0),t.add(o),t.position.set(r,2,0),t.userData.type="muscarinic",Va.add(t)});Ti.add(Va);const om=[];for(let r=0;r<20;r++){const e=Math.random()>.3,t=new lt(new Kt(.5,12,12),bt(e?qn.ion_na:qn.ion_ca));t.position.set((Math.random()-.5)*6,20+Math.random()*10,(Math.random()-.5)*4),t.userData.startY=t.position.y,t.visible=!1,om.push(t),Ti.add(t)}const Nn=new kn,lm=new lt(new Kt(3,24,24),bt(qn.enzyme));lm.scale.set(1,.7,1);Nn.add(lm);const cm=new lt(new Kt(1,16,16),bt(6583435));cm.position.set(2.5,.5,0);Nn.add(cm);Nn.position.set(20,8,0);Nn.visible=!1;Ti.add(Nn);const Kc=[];for(let r=0;r<8;r++){const e=new lt(new Kt(.4,12,12),bt(6333946));e.visible=!1,e.userData.type="choline",Kc.push(e),Ti.add(e);const t=new lt(new Kt(.25,12,12),bt(16498468));t.visible=!1,t.userData.type="acetate",Kc.push(t),Ti.add(t)}const Vi=new kn;Vi.position.set(0,25,0);Vi.visible=!1;const nl=new lt(new Kt(.8,16,16),bt(6333946));nl.position.set(-10,0,0);Vi.add(nl);const il=new lt(new Kt(.6,16,16),bt(16498468));il.position.set(-5,3,0);Vi.add(il);const Ou=new lt(new Kt(1.5,16,16),bt(3462041));Ou.scale.set(1,.6,1);Ou.position.set(-3,0,0);Vi.add(Ou);const an=new lt(new Kt(.6,16,16),bt(qn.ach));an.position.set(0,0,0);an.visible=!1;Vi.add(an);Ti.add(Vi);const Hs=new kn;Hs.position.set(0,-25,0);Hs.visible=!1;const Jc=[];for(let r=0;r<5;r++){const e=new lt(new ll(1.5,20,8,16),bt(16557477));e.rotation.z=Math.PI/2,e.position.set(0,r*4,0),e.userData.originalScaleX=1,Jc.push(e),Hs.add(e)}Ti.add(Hs);const Cy=[{pos:{x:35,y:15,z:70},look:{x:0,y:5,z:0}},{pos:{x:30,y:10,z:40},look:{x:0,y:8,z:0}},{pos:{x:30,y:30,z:45},look:{x:0,y:25,z:0}},{pos:{x:30,y:-5,z:40},look:{x:0,y:-5,z:0}},{pos:{x:45,y:5,z:75},look:{x:0,y:5,z:0}},{pos:{x:35,y:-15,z:50},look:{x:0,y:-20,z:0}},{pos:{x:35,y:12,z:35},look:{x:15,y:8,z:0}},{pos:{x:40,y:15,z:65},look:{x:0,y:5,z:0}}];let ba=0;const um=new I(0,5,0);let Ki=null,di=null;const pl=document.querySelectorAll(".content-section"),Py=document.querySelector(".progress-fill"),hm=document.querySelectorAll(".nav-dot");pl.forEach((r,e)=>{Ze.create({trigger:r,start:"top center",end:"bottom center",onEnter:()=>qf(e),onEnterBack:()=>qf(e)})});Ze.create({trigger:".scroll-container",start:"top top",end:"bottom bottom",onUpdate:r=>{Py.style.width=`${r.progress*100}%`}});function qf(r){if(ba===r)return;ba=r,pl.forEach((t,n)=>t.classList.toggle("active",n===r)),hm.forEach((t,n)=>t.classList.toggle("active",n===r));const e=Cy[r];mt.to(Gs.position,{x:e.pos.x,y:e.pos.y,z:e.pos.z,duration:1.5,ease:"power2.inOut"}),mt.to(um,{x:e.look.x,y:e.look.y,z:e.look.z,duration:1.5,ease:"power2.inOut"}),Ly(r)}function Ly(r){switch(om.forEach(e=>e.visible=!1),Nn.visible=!1,Vi.visible=!1,Hs.visible=!1,Kc.forEach(e=>e.visible=!1),Ki&&(Ki.kill(),Ki=null),di&&(di.kill(),di=null),mt.killTweensOf([nl.position,il.position,an,an.position]),mt.killTweensOf(an.scale),mt.killTweensOf(Jc.map(e=>e.scale)),mt.killTweensOf(pi.map(e=>e.position)),mt.killTweensOf(pi.map(e=>e.scale)),mt.killTweensOf(Ui.map(e=>e.position)),mt.killTweensOf(Ui.map(e=>e.scale)),mt.killTweensOf(Ui.map(e=>e.userData.shell.scale)),el.material.opacity=.9,tl.material.opacity=.9,Ui.forEach(e=>{e.position.copy(e.userData.originalPos),e.scale.set(1,1,1),e.userData.shell.scale.set(1,1,1)}),pi.forEach((e,t)=>{e.visible=!1,e.scale.set(1,1,1),e.position.set((Math.random()-.5)*25,5+Math.random()*8,(Math.random()-.5)*10),e.userData.originalPos.copy(e.position)}),r){case 1:pi.forEach((t,n)=>{n<10&&(t.visible=!0)});break;case 2:Vi.visible=!0,an.visible=!1,el.material.opacity=.3,tl.material.opacity=.3,mt.fromTo(nl.position,{x:-12},{x:-4,duration:1.5,ease:"power1.inOut",repeat:-1,repeatDelay:2}),mt.fromTo(il.position,{x:-6,y:4},{x:-3,y:1,duration:1.2,delay:.3,ease:"power1.inOut",repeat:-1,repeatDelay:2.3}),Ui.forEach(t=>{t.userData.filled=0,t.userData.dots.forEach(n=>{n.visible=!1,n.scale.set(1,1,1)})});{const t=Ui.slice(0,5);let n=t[0],i=0;Ki=mt.timeline({repeat:-1,repeatDelay:.35}),Ki.to({},{duration:.01,onStart:()=>{n=t.find(s=>s.userData.filled<s.userData.dots.length)||t[i%t.length],an.visible=!0,an.position.set(0,0,0),an.scale.set(0,0,0)}}),Ki.to(an.scale,{x:1,y:1,z:1,duration:.35,ease:"back.out(3)"}),Ki.to(an.position,{x:()=>n.position.x,y:()=>n.position.y,z:()=>n.position.z,duration:.9,ease:"power2.inOut"}),Ki.to(an.scale,{x:0,y:0,z:0,duration:.25,ease:"power1.in",onComplete:()=>{if(n.userData.filled<n.userData.dots.length){const s=n.userData.dots[n.userData.filled];s.visible=!0,s.scale.set(0,0,0),mt.to(s.scale,{x:1,y:1,z:1,duration:.2,ease:"back.out(3)"}),n.userData.filled+=1,mt.fromTo(n.scale,{x:1,y:1,z:1},{x:1.08,y:1.08,z:1.08,duration:.15,yoyo:!0,repeat:1,ease:"power1.inOut"})}an.visible=!1,an.position.set(0,0,0),an.scale.set(1,1,1),i+=1}})}break;case 4:{const t=Ui.slice(0,3),n=[-10,0,10],i=-10,s=[-15,0,15];t.forEach(o=>{o.position.copy(o.userData.originalPos),o.userData.shell.scale.set(1,1,1),o.userData.dots.forEach(a=>a.visible=!0),o.userData.filled=o.userData.dots.length}),pi.forEach(o=>{o.visible=!1,o.scale.set(1,1,1)}),di=mt.timeline({repeat:-1,repeatDelay:.25}),t.forEach((o,a)=>{const l=n[a],c=s[a],u=a*4;di.to(o.position,{x:l,y:i,z:0,duration:.9,ease:"power2.inOut"},a===0?0:"+=0.4"),di.to(o.userData.shell.scale,{y:.65,duration:.2,ease:"power1.inOut"},"<"),di.add(()=>{o.userData.dots.forEach(d=>d.visible=!1);const h=new I;o.getWorldPosition(h),pi.slice(u,u+4).forEach((d,f)=>{d.visible=!0,d.scale.set(0,0,0),d.position.copy(h);const g=f*.08;mt.to(d.scale,{x:1,y:1,z:1,duration:.25,delay:g,ease:"back.out(3)"}),mt.to(d.position,{x:c+(Math.random()-.5)*6,y:10,z:(Math.random()-.5)*8,duration:.6,delay:g,ease:"power2.out"}),mt.to(d.position,{x:c+(Math.random()-.5)*2,y:-25,z:0,duration:1.9,delay:g+.65,ease:"power1.in",onComplete:()=>{d.visible=!1,d.scale.set(1,1,1)}})})},"<0.05"),di.to(o.userData.shell.scale,{y:1,duration:.2,ease:"power1.inOut"},"<0.15"),di.to(o.position,{x:o.userData.originalPos.x,y:o.userData.originalPos.y,z:o.userData.originalPos.z,duration:.9,ease:"power2.inOut"},"+=2.2"),di.add(()=>{o.userData.dots.forEach(h=>h.visible=!0)},"<")})}break;case 5:Hs.visible=!0,Jc.forEach((t,n)=>{mt.to(t.scale,{x:.7,y:1.3,duration:.5,delay:n*.1,ease:"power2.inOut",yoyo:!0,repeat:-1,repeatDelay:.5})});break;case 6:Nn.visible=!0,Nn.position.set(5,8,0),mt.fromTo(Nn.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:.6,ease:"back.out"}),pi.forEach((t,n)=>{t.visible=!0;const i=(Math.random()-.5)*30,s=5+Math.random()*10;t.position.set(i,s,(Math.random()-.5)*5),mt.to(t.position,{x:5,y:8,z:0,duration:1.5+Math.random()*.5,delay:n*.3,ease:"power2.in",onComplete:()=>{t.visible=!1}})}),mt.to(Nn.scale,{x:1.2,y:1.2,z:1.2,duration:.2,delay:1.5,ease:"power1.inOut",yoyo:!0,repeat:10,onRepeat:()=>{pi.forEach((t,n)=>{t.visible||(t.visible=!0,t.position.set((Math.random()-.5)*30,5+Math.random()*10,(Math.random()-.5)*5),mt.to(t.position,{x:5,y:8,z:0,duration:1.5,ease:"power2.in",onComplete:()=>{t.visible=!1}}))})}});break;case 7:Nn.visible=!0,Nn.position.set(15,8,0),mt.to(Nn.rotation,{z:.3,duration:.5,yoyo:!0,repeat:-1});const e=document.getElementById("completion-banner");e&&e.classList.remove("hidden");break}}hm.forEach((r,e)=>{r.addEventListener("click",()=>{pl[e].scrollIntoView({behavior:"smooth"})})});const Dy=new GM;function fm(){requestAnimationFrame(fm);const r=Dy.getElapsedTime();Ui.forEach((e,t)=>{e.position.y=e.userData.originalY+Math.sin(r*.5+t)*.3}),ba!==2&&ba!==4&&ba!==6&&pi.forEach((e,t)=>{e.position.y=e.userData.originalPos.y+Math.sin(r*.8+t*.5)*.5,e.position.x=e.userData.originalPos.x+Math.sin(r*.3+t)*.3}),Gs.lookAt(um),dl.render(Ha,Gs)}function Uy(){Gs.aspect=window.innerWidth/window.innerHeight,Gs.updateProjectionMatrix(),dl.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",Uy);pl[0].classList.add("active");fm();const $f=document.getElementById("mobile-warning"),Kf=document.getElementById("dismiss-warning");Kf&&$f&&Kf.addEventListener("click",()=>{$f.classList.add("dismissed")});const Jf=document.getElementById("completion-banner"),Zf=document.getElementById("reload-btn"),jf=document.getElementById("close-banner");Zf&&Zf.addEventListener("click",()=>{window.location.reload(),window.scrollTo(0,0)});jf&&Jf&&jf.addEventListener("click",()=>{Jf.classList.add("hidden")});
