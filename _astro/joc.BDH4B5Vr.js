const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/submari.CinTotBG.js","_astro/models.BZw0DLTL.js","_astro/comu.myjy3_et.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./Illa.astro_astro_type_script_index_0_lang.CzBl5coJ.js";import{$ as n,$n as r,A as i,An as a,B as o,Bn as s,Cn as c,D as l,Dn as u,E as d,En as f,Et as p,F as m,Fn as h,Gn as g,H as _,Hn as v,I as y,In as b,J as x,Jn as S,K as C,Kn as w,L as T,Ln as E,M as D,Mt as O,N as k,Nn as ee,Nt as A,O as j,On as M,Ot as te,P as N,Q as ne,Qn as P,R as re,Rn as ie,S as F,Sn as ae,St as I,T as oe,Tt as se,U as L,Un as ce,V as R,Vn as le,W as ue,Wn as z,Xn as de,Y as fe,Yn as pe,Z as me,Zn as B,_t as he,a as ge,at as _e,b as ve,bt as V,c as ye,ct as H,d as be,dn as xe,dt as Se,er as U,et as Ce,f as we,fn as Te,ft as Ee,g as W,gn as De,gt as Oe,h as ke,hn as Ae,ht as G,i as je,it as Me,j as Ne,jn as Pe,k as K,kn as Fe,l as q,ln as J,lt as Ie,m as Le,mn as Re,mt as ze,n as Be,nt as Ve,o as He,ot as Y,p as Ue,pt as We,q as Ge,qn as Ke,r as qe,rt as Je,s as Ye,st as Xe,t as X,tr as Ze,tt as Qe,u as $e,un as et,ut as tt,v as nt,vt as rt,w as it,wn as at,wt as ot,x as st,xn as ct,xt as lt,y as ut,yt as dt,z as ft,zn as pt}from"./models.BZw0DLTL.js";function mt(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ht(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new l(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Y}},envmap:{envMap:{value:null},envMapRotation:{value:new Y},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Y}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Y}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Y},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Y},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Y},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Y}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Y}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Y}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new l(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new s},probesMax:{value:new s},probesResolution:{value:new s}},points:{diffuse:{value:new l(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0},uvTransform:{value:new Y}},sprite:{diffuse:{value:new l(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}}},gt={basic:{uniforms:P([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:P([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new l(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:P([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new l(0)},specular:{value:new l(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:P([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new l(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:P([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new l(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:P([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:P([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:P([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:P([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:P([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:P([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new Y},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Y}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:P([Q.common,Q.displacementmap,{referencePosition:{value:new s},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:P([Q.lights,Q.fog,{color:{value:new l(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};gt.physical={uniforms:P([gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Y},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Y},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Y},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Y},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Y},sheen:{value:0},sheenColor:{value:new l(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Y},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Y},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Y},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Y},attenuationDistance:{value:0},attenuationColor:{value:new l(0)},specularColor:{value:new l(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Y},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Y},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Y}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var _t={r:0,b:0,g:0},vt=new Xe,yt=new Y;yt.set(-1,0,0,0,1,0,0,0,1);function bt(e,t,n,r,i,a){let o=new l(0),s=i===!0?0:1,c,u,d=null,f=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,i=m(t);i===null?v(o,s):i&&i.isColor&&(v(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(t,n){let i=m(n);i&&(i.isCubeTexture||i.mapping===306)?(u===void 0&&(u=new H(new ve(1,1,1),new at({name:`BackgroundCubeMaterial`,uniforms:g(gt.backgroundCube.uniforms),vertexShader:gt.backgroundCube.vertexShader,fragmentShader:gt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=i,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vt.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(yt),u.material.toneMapped=j.getTransfer(i.colorSpace)!==ae,(d!==i||f!==i.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new H(new I(2,2),new at({name:`BackgroundMaterial`,uniforms:g(gt.background.uniforms),vertexShader:gt.background.vertexShader,fragmentShader:gt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=j.getTransfer(i.colorSpace)!==ae,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(d!==i||f!==i.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=i,f=i.version,p=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function v(t,r){t.getRGB(_t,de(e)),n.buffers.color.setClear(_t.r,_t.g,_t.b,r,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,v(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,v(o,s)},render:h,addToRenderList:_,dispose:y}}function xt(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function St(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ct(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function wt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new lt,s=new Y,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var $=4,Tt=6,Et=20,Dt=256,Ot=new dt,kt=new l,At=null,jt=0,Mt=0,Nt=!1,Pt=new s,Ft=new s,It=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Pt}=i;At=this._renderer.getRenderTarget(),jt=this._renderer.getActiveCubeFace(),Mt=this._renderer.getActiveMipmapLevel(),Nt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ut(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ht(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(At,jt,Mt),this._renderer.xr.enabled=Nt,e.scissorTest=!1,zt(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),At=this._renderer.getRenderTarget(),jt=this._renderer.getActiveCubeFace(),Mt=this._renderer.getActiveMipmapLevel(),Nt=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Ge,format:O,colorSpace:Je,depthBuffer:!1},r=Rt(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rt(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lt(r)),this._blurMaterial=Vt(r,e,t),this._ggxMaterial=Bt(r,e,t)}return r}_compileMaterial(e){let t=new H(new F,e);this._renderer.compile(t,Ot)}_sceneToCubeUV(e,t,n,r,i){let a=new V(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(kt),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new H(new ve,new Ie({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(kt),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;zt(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ut()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ht());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;zt(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ot)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-$?n-d+$:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,zt(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ot),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,zt(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ot)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];zt(t,3*l*(r>this._lodMax-$?r-this._lodMax+$:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ot)}};function Lt(e){let t=[],n=[],r=e,i=e-$+1+Tt;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ft.set(1,r,n):e===1?Ft.set(-n,1,-r):e===2?Ft.set(-n,r,1):e===3?Ft.set(-1,r,-n):e===4?Ft.set(-n,-1,r):Ft.set(n,r,-1),Ft.toArray(l,(e*6+t)*3)}}let u=new F;u.setAttribute(`position`,new st(c,3)),u.setAttribute(`outputDirection`,new st(l,3)),n.push(new H(u,null)),r>$&&r--}return{lodMeshes:n,sizeLods:t}}function Rt(e,t,n){let r=new ce(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function zt(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Bt(e,t,n){return new at({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Dt,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wt(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vt(e,t,n){return new at({name:`SphericalGaussianBlur`,defines:{SAMPLES:Et,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wt(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ht(){return new at({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Wt(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ut(){return new at({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wt(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Gt=class extends ce{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ne(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ve(5,5,5),i=new at({name:`CubemapFromEquirect`,uniforms:g(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new H(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ce),new K(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Kt(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Gt(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new It(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new It(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function qt(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Jt(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Fe:M)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Yt(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Xt(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:S(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Zt(e,t,n){let r=new WeakMap,i=new le;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new N(h,p,m,u);g.type=L,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new pt(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Qt(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var $t={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function en(e,t,n,r,i,a){let o=new ce(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new F;l.setAttribute(`position`,new _([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new _([0,2,0,0,2,0],2));let u=new xe({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new H(l,u),f=new dt(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new ce(t,n,{type:Ge,depthBuffer:!1,stencilBuffer:!1}),c=new ce(t,n,{type:Ge,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},j.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=$t[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var tn=new u,nn=new re(1,1),rn=new N,an=new k,on=new Ne,sn=[],cn=[],ln=new Float32Array(16),un=new Float32Array(9),dn=new Float32Array(4);function fn(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=sn[i];if(a===void 0&&(a=new Float32Array(i),sn[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function pn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function mn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function hn(e,t){let n=cn[t];n===void 0&&(n=new Int32Array(t),cn[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function gn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function _n(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;e.uniform2fv(this.addr,t),mn(n,t)}}function vn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(pn(n,t))return;e.uniform3fv(this.addr,t),mn(n,t)}}function yn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;e.uniform4fv(this.addr,t),mn(n,t)}}function bn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(pn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,r))return;dn.set(r),e.uniformMatrix2fv(this.addr,!1,dn),mn(n,r)}}function xn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(pn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,r))return;un.set(r),e.uniformMatrix3fv(this.addr,!1,un),mn(n,r)}}function Sn(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(pn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),mn(n,t)}else{if(pn(n,r))return;ln.set(r),e.uniformMatrix4fv(this.addr,!1,ln),mn(n,r)}}function Cn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function wn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;e.uniform2iv(this.addr,t),mn(n,t)}}function Tn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;e.uniform3iv(this.addr,t),mn(n,t)}}function En(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;e.uniform4iv(this.addr,t),mn(n,t)}}function Dn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function On(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(pn(n,t))return;e.uniform2uiv(this.addr,t),mn(n,t)}}function kn(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(pn(n,t))return;e.uniform3uiv(this.addr,t),mn(n,t)}}function An(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(pn(n,t))return;e.uniform4uiv(this.addr,t),mn(n,t)}}function jn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(nn.compareFunction=n.isReversedDepthBuffer()?518:515,a=nn):a=tn,n.setTexture2D(t||a,i)}function Mn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||an,i)}function Nn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||on,i)}function Pn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||rn,i)}function Fn(e){switch(e){case 5126:return gn;case 35664:return _n;case 35665:return vn;case 35666:return yn;case 35674:return bn;case 35675:return xn;case 35676:return Sn;case 5124:case 35670:return Cn;case 35667:case 35671:return wn;case 35668:case 35672:return Tn;case 35669:case 35673:return En;case 5125:return Dn;case 36294:return On;case 36295:return kn;case 36296:return An;case 35678:case 36198:case 36298:case 36306:case 35682:return jn;case 35679:case 36299:case 36307:return Mn;case 35680:case 36300:case 36308:case 36293:return Nn;case 36289:case 36303:case 36311:case 36292:return Pn}}function In(e,t){e.uniform1fv(this.addr,t)}function Ln(e,t){let n=fn(t,this.size,2);e.uniform2fv(this.addr,n)}function Rn(e,t){let n=fn(t,this.size,3);e.uniform3fv(this.addr,n)}function zn(e,t){let n=fn(t,this.size,4);e.uniform4fv(this.addr,n)}function Bn(e,t){let n=fn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Vn(e,t){let n=fn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Hn(e,t){let n=fn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Un(e,t){e.uniform1iv(this.addr,t)}function Wn(e,t){e.uniform2iv(this.addr,t)}function Gn(e,t){e.uniform3iv(this.addr,t)}function Kn(e,t){e.uniform4iv(this.addr,t)}function qn(e,t){e.uniform1uiv(this.addr,t)}function Jn(e,t){e.uniform2uiv(this.addr,t)}function Yn(e,t){e.uniform3uiv(this.addr,t)}function Xn(e,t){e.uniform4uiv(this.addr,t)}function Zn(e,t,n){let r=this.cache,i=t.length,a=hn(n,i);pn(r,a)||(e.uniform1iv(this.addr,a),mn(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?nn:tn;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Qn(e,t,n){let r=this.cache,i=t.length,a=hn(n,i);pn(r,a)||(e.uniform1iv(this.addr,a),mn(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||an,a[e])}function $n(e,t,n){let r=this.cache,i=t.length,a=hn(n,i);pn(r,a)||(e.uniform1iv(this.addr,a),mn(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||on,a[e])}function er(e,t,n){let r=this.cache,i=t.length,a=hn(n,i);pn(r,a)||(e.uniform1iv(this.addr,a),mn(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||rn,a[e])}function tr(e){switch(e){case 5126:return In;case 35664:return Ln;case 35665:return Rn;case 35666:return zn;case 35674:return Bn;case 35675:return Vn;case 35676:return Hn;case 5124:case 35670:return Un;case 35667:case 35671:return Wn;case 35668:case 35672:return Gn;case 35669:case 35673:return Kn;case 5125:return qn;case 36294:return Jn;case 36295:return Yn;case 36296:return Xn;case 35678:case 36198:case 36298:case 36306:case 35682:return Zn;case 35679:case 36299:case 36307:return Qn;case 35680:case 36300:case 36308:case 36293:return $n;case 36289:case 36303:case 36311:case 36292:return er}}var nr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fn(t.type)}},rr=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tr(t.type)}},ir=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ar=/(\w+)(\])?(\[|\.)?/g;function or(e,t){e.seq.push(t),e.map[t.id]=t}function sr(e,t,n){let r=e.name,i=r.length;for(ar.lastIndex=0;;){let a=ar.exec(r),o=ar.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){or(n,l===void 0?new nr(s,e,t):new rr(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ir(s),or(n,e)),n=e}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);sr(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function lr(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ur=37297,dr=0;function fr(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var pr=new Y;function mr(e){j._getMatrix(pr,j.workingColorSpace,e);let t=`mat3( ${pr.elements.map(e=>e.toFixed(4))} )`;switch(j.getTransfer(e)){case Me:return[t,`LinearTransferOETF`];case ae:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function hr(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+fr(e.getShaderSource(t),r)}return i}function gr(e,t){let n=mr(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var _r={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function vr(e,t){let n=_r[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var yr=new s;function br(){return j.getLuminanceCoefficients(yr),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${yr.x.toFixed(4)}, ${yr.y.toFixed(4)}, ${yr.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function xr(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(wr).join(`
`)}function Sr(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Cr(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function wr(e){return e!==``}function Tr(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Er(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Or(e){return e.replace(Dr,Ar)}var kr=new Map;function Ar(e,t){let n=Z[t];if(n===void 0){let e=kr.get(t);if(e!==void 0)n=Z[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Or(n)}var jr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mr(e){return e.replace(jr,Nr)}function Nr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Pr(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Fr={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ir(e){return Fr[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Lr={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Rr(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Lr[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var zr={302:`ENVMAP_MODE_REFRACTION`};function Br(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:zr[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Vr={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Hr(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Vr[e.combine]||`ENVMAP_BLENDING_NONE`}function Ur(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Wr(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ir(n),l=Rr(n),u=Br(n),d=Hr(n),f=Ur(n),p=xr(n),m=Sr(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(wr).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(wr).join(`
`),_.length>0&&(_+=`
`)):(g=[Pr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(wr).join(`
`),_=[Pr(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:vr(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,gr(`linearToOutputTexel`,n.outputColorSpace),br(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(wr).join(`
`)),o=Or(o),o=Tr(o,n),o=Er(o,n),s=Or(s),s=Tr(s,n),s=Er(s,n),o=Mr(o),s=Mr(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=lr(i,i.VERTEX_SHADER,y),C=lr(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(C)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,C);else{let e=hr(i,x,`vertex`),n=hr(i,C,`fragment`);S(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(C),T=new cr(i,h),E=Cr(i,h)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(h,ur)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dr++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=C,this}var Gr=0,Kr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qr(e),t.set(e,n)),n}},qr=class{constructor(e){this.id=Gr++,this.code=e,this.usedTimes=0}};function Jr(e){return e===1030||e===37490||e===36285}function Yr(e,t,n,r,i,o){let s=new me,c=new Kr,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(i,a,s,u,d,g){let _=u.fog,v=d.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=m[i.type];i.precision!==null&&(p=r.getMaxPrecision(i.precision),p!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,p,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,ee;if(C){let e=gt[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=c.getVertexShaderStage(i),t=c.getFragmentShaderStage(i);c.update(i,e,t),k=e.id,ee=t.id}let A=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),te=d.isInstancedMesh===!0,N=d.isBatchedMesh===!0,ne=!!i.map,P=!!i.matcap,re=!!x,ie=!!i.aoMap,F=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,I=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,L=!!i.metalnessMap,ce=!!i.roughnessMap,R=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,z=i.retroreflectivity>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=R&&!!i.anisotropyMap,B=le&&!!i.clearcoatMap,he=le&&!!i.clearcoatNormalMap,ge=le&&!!i.clearcoatRoughnessMap,_e=de&&!!i.iridescenceMap,ve=de&&!!i.iridescenceThicknessMap,V=fe&&!!i.sheenColorMap,ye=fe&&!!i.sheenRoughnessMap,H=!!i.specularMap,be=!!i.specularColorMap,xe=!!i.specularIntensityMap,Se=pe&&!!i.transmissionMap,Ce=pe&&!!i.thicknessMap,we=!!i.gradientMap,Te=!!i.alphaMap,Ee=i.alphaTest>0,W=!!i.alphaHash,De=!!i.extensions,Oe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:p,batching:N,batchingColor:N&&d._colorsTexture!==null,instancing:te,instancingColor:te&&d.instanceColor!==null,instancingMorph:te&&d.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:j.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:P,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:F,bumpMap:ae,normalMap:I,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:I&&i.normalMapType===1,normalMapTangentSpace:I&&i.normalMapType===0,packedNormalMap:I&&i.normalMapType===0&&Jr(i.normalMap.format),metalnessMap:L,roughnessMap:ce,anisotropy:R,anisotropyMap:me,clearcoat:le,clearcoatMap:B,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:ue,retroreflection:z,iridescence:de,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:fe,sheenColorMap:V,sheenRoughnessMap:ye,specularMap:H,specularColorMap:be,specularIntensityMap:xe,transmission:pe,transmissionMap:Se,thicknessMap:Ce,gradientMap:we,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Te,alphaTest:Ee,alphaHash:W,combine:i.combine,mapUv:ne&&h(i.map.channel),aoMapUv:ie&&h(i.aoMap.channel),lightMapUv:F&&h(i.lightMap.channel),bumpMapUv:ae&&h(i.bumpMap.channel),normalMapUv:I&&h(i.normalMap.channel),displacementMapUv:oe&&h(i.displacementMap.channel),emissiveMapUv:se&&h(i.emissiveMap.channel),metalnessMapUv:L&&h(i.metalnessMap.channel),roughnessMapUv:ce&&h(i.roughnessMap.channel),anisotropyMapUv:me&&h(i.anisotropyMap.channel),clearcoatMapUv:B&&h(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&h(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&h(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&h(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&h(i.iridescenceThicknessMap.channel),sheenColorMapUv:V&&h(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&h(i.sheenRoughnessMap.channel),specularMapUv:H&&h(i.specularMap.channel),specularColorMapUv:be&&h(i.specularColorMap.channel),specularIntensityMapUv:xe&&h(i.specularIntensityMap.channel),transmissionMapUv:Se&&h(i.transmissionMap.channel),thicknessMapUv:Ce&&h(i.thicknessMap.channel),alphaMapUv:Te&&h(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(I||R),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:d.isPoints===!0&&!!v.attributes.uv&&(ne||Te),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&I===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:M,skinning:d.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:a.sun.length,numDirLights:a.directional.length,numPointLights:a.point.length,numSpotLights:a.spot.length,numSpotLightMaps:a.spotLightMap.length,numRectAreaLights:a.rectArea.length,numHemiLights:a.hemi.length,numSunLightShadows:a.sunShadowMap.length,numDirLightShadows:a.directionalShadowMap.length,numPointLightShadows:a.pointShadowMap.length,numSpotLightShadows:a.spotShadowMap.length,numSpotLightShadowsWithMaps:a.numSpotLightShadowsWithMaps,numLightProbes:a.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&s.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&j.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&j.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:De&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.retroreflection&&s.enable(24),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=gt[t];n=a.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new Wr(e,n,t,i),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Xr(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Zr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Qr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function $r(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Zr),r.length>1&&r.sort(t||Qr),i.length>1&&i.sort(t||Qr)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ei(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new $r,e.set(t,[i])):n>=r.length?(i=new $r,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ti(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new s,color:new l};break;case`SpotLight`:n={position:new s,direction:new s,color:new l,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new s,color:new l,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new s,skyColor:new l,groundColor:new l};break;case`RectAreaLight`:n={color:new l,position:new s,halfWidth:new s,halfHeight:new s}}return e[t.id]=n,n}}}function ni(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ri=0;function ii(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ai(e){let t=new ti,n=ni(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new s);let i=new s,a=new Xe,o=new Xe;function c(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(ii);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ri++)}function l(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:c,setupView:l,state:r}}function oi(e){let t=new ai(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function si(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new oi(e),t.set(n,[a])):r>=i.length?(a=new oi(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ci=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,li=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ui=[new s(1,0,0),new s(-1,0,0),new s(0,1,0),new s(0,-1,0),new s(0,0,1),new s(0,0,-1)],di=[new s(0,-1,0),new s(0,-1,0),new s(0,0,1),new s(0,0,-1),new s(0,-1,0),new s(0,-1,0)],fi=new Xe,pi=new s,mi=new s;function hi(e,t,n){let r=new ue,a=new pt,o=new pt,s=new le,c=new tt,l=new Se,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new at({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:ci,fragmentShader:li}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new F;g.setAttribute(`position`,new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new H(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let b=this.type;this.render=function(t,n,c){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=b!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){U(`WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y));let _=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=_,f.map===null||m===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(u.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new ce(a.x,a.y,{format:J,type:Ge,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),f.map.texture.name=u.name+`.shadowMap`,f.map.depthTexture=new re(a.x,a.y,L),f.map.depthTexture.name=u.name+`.shadowMapDepth`,f.map.depthTexture.format=y,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=G,f.map.depthTexture.magFilter=G}else u.isPointLight?(f.map=new Gt(a.x),f.map.depthTexture=new i(a.x,h)):(f.map=new ce(a.x,a.y),f.map.depthTexture=new re(a.x,a.y,h)),f.map.depthTexture.name=u.name+`.shadowMap`,f.map.depthTexture.format=y,this.type===1?(f.map.depthTexture.compareFunction=_?518:515,f.map.depthTexture.minFilter=Ce,f.map.depthTexture.magFilter=Ce):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=G,f.map.depthTexture.magFilter=G);f.camera.updateProjectionMatrix()}f.map.isWebGLCubeRenderTarget!==!0&&(f.map.width!==a.x||f.map.height!==a.y)&&f.map.setSize(a.x,a.y);let v=f.map.isWebGLCubeRenderTarget?6:f.getViewportCount();u.isPointLight!==!0&&f.updateMatrices(u,c);for(let t=0;t<v;t++){let i=f.getCamera(t);if(u.isPointLight){let e=f.camera,n=f.matrix,r=u.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),pi.setFromMatrixPosition(u.matrixWorld),e.position.copy(pi),mi.copy(e.position),mi.add(ui[t]),e.up.copy(di[t]),e.lookAt(mi),e.updateMatrixWorld(),n.makeTranslation(-pi.x,-pi.y,-pi.z),fi.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(fi,e.coordinateSystem,e.reversedDepth)}if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),p.viewport(s)}r=f.getFrustum(t),C(n,c,i,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&x(f,c),f.needsUpdate=!1}b=this.type,v.needsUpdate=!1,e.setRenderTarget(l,u,f)};function x(n,r){let i=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new ce(a.x,a.y,{format:J,type:Ge}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,_,null)}function S(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,w)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function C(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=S(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=S(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)C(c[e],i,a,o,s)}function w(e){e.target.removeEventListener(`dispose`,w);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function gi(e,t){function n(){let t=!1,n=new le,r=null,i=new le(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):R(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=De[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):R(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,C=null,w=null,T=null,E=new l(0,0,0),D=0,O=!1,k=null,ee=null,A=null,j=null,M=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ne=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ne>=1);let re=null,ie={},F=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),I=new le().fromArray(F),oe=new le().fromArray(ae);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let L={};L[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),L[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),L[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),ce(e.CULL_FACE),me(0);function ce(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function R(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function ue(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function z(t,n){let r=h,i=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return g!==t&&(e.useProgram(t),g=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){_===!0&&(R(e.BLEND),_=!1);return}if(_===!1&&(ce(e.BLEND),_=!0),t!==5){if(t!==v||u!==O){if((y!==100||C!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,C=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:S(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:S(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:S(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:S(`WebGLState: Invalid blending: `,t)}b=null,x=null,w=null,T=null,E.set(0,0,0),D=0,v=t,O=u}return}a||=n,o||=r,s||=i,(n!==y||a!==C)&&(e.blendEquationSeparate(fe[n],fe[a]),y=n,C=a),(r!==b||i!==x||o!==w||s!==T)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),b=r,x=i,w=o,T=s),(c.equals(E)===!1||l!==D)&&(e.blendColor(c.r,c.g,c.b,l),E.copy(c),D=l),v=t,O=!1}function B(t,n){t.side===2?R(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):R(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){k!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),k=t)}function ge(t){t===0?R(e.CULL_FACE):(ce(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function _e(t){t!==A&&(N&&e.lineWidth(t),A=t)}function ve(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(j=n,M=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):R(e.POLYGON_OFFSET_FILL)}function V(t){t?ce(e.SCISSOR_TEST):R(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function H(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||L[t]),i.type=t,i.texture=n)}function be(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function U(){try{e.texSubImage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function W(){try{e.texStorage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){S(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){S(`WebGLState:`,e)}}function Ae(t){return f[t]===void 0?e.getParameter(t):f[t]}function G(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function je(t){I.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),I.copy(t))}function Me(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Ne(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=u.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function K(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},re=null,ie={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,C=null,w=null,T=null,E=new l(0,0,0),D=0,O=!1,k=null,ee=null,A=null,j=null,M=null,I.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:R,bindFramebuffer:ue,drawBuffers:z,useProgram:de,setBlending:me,setMaterial:B,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:V,activeTexture:ye,bindTexture:H,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:Oe,texImage3D:ke,pixelStorei:G,getParameter:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Ee,texStorage3D:W,texSubImage2D:U,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:je,viewport:Me,reset:K}}function _i(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,u=new WeakMap,f=new Set,p,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return h?new OffscreenCanvas(e,t):Ke(`canvas`)}function _(e,t,n){let r=1,i=Te(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);p===void 0&&(p=g(n,a));let o=t?g(n,a):p;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function v(e){return e.generateMipmaps}function y(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Me:j.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),O(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&f.delete(t)}function D(e){let t=e.target;t.removeEventListener(`dispose`,D),ee(t)}function O(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=m.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&k(e),Object.keys(i).length===0&&m.delete(n)}r.remove(e)}function k(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=m.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let A=0;function M(){A=0}function te(){return A}function N(e){A=e}function ne(){let e=A;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),A+=1,e}function P(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function re(t,i){let a=r.get(t);if(t.isVideoTexture&&Se(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ue(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ue(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ue(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){z(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let I={[Ae]:e.REPEAT,[d]:e.CLAMP_TO_EDGE,[ze]:e.MIRRORED_REPEAT},oe={[G]:e.NEAREST,[he]:e.NEAREST_MIPMAP_NEAREST,[Oe]:e.NEAREST_MIPMAP_LINEAR,[Ce]:e.LINEAR,[Ve]:e.LINEAR_MIPMAP_NEAREST,[Qe]:e.LINEAR_MIPMAP_LINEAR},se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function L(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,I[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,I[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,I[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,E));let i=n.source,a=m.get(i);a===void 0&&(a={},m.set(i,a));let s=P(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&k(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function R(e,t,n){return Math.floor(Math.floor(e/n)/t)}function le(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=R(n.start,r.width,4),c=R(t.start,r.width,4);n.start<=i+1&&a===c&&R(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ue(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=j.getPrimaries(j.workingColorSpace),r=o.colorSpace===``?null:j.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=_(o.image,!1,i.maxTextureSize);t=we(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=x(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);L(c,o);let h,g=o.mipmaps,b=o.isVideoTexture!==!0,S=d.__version===void 0||l===!0,E=u.dataReady,D=w(o,t);if(o.isDepthTexture)m=C(o.format===T,o.type),S&&(b?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){b&&S&&n.texStorage2D(e.TEXTURE_2D,D,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],b?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else b?(S&&n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height),E&&le(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){b&&S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(b){if(E){if(o.layerUpdates.size>0){let t=pe(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else b?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{b&&S&&n.texStorage2D(e.TEXTURE_2D,D,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?b?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):b?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(b){if(S&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,t.width,t.height,t.depth),E){if(o.layerUpdates.size>0){let i=pe(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)b?(S&&n.texStorage3D(e.TEXTURE_3D,D,m,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(S){if(b)n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),f.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of f)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(b&&S){let t=Te(g[0]);n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],b?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(b){if(S){let r=Te(t);n.texStorage2D(e.TEXTURE_2D,D,m,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);v(o)&&y(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function z(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=j.getPrimaries(j.workingColorSpace),r=o.colorSpace===``?null:j.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=_(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=we(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),b=a.convert(o.type),S=x(o.internalFormat,g,b,o.normalized,o.colorSpace),C=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=w(o,h);L(e.TEXTURE_CUBE_MAP,o);let O;if(f){C&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,g,b,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,S,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,C&&T){O.length>0&&D++;let t=Te(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,S,t.width,t.height)}for(let t=0;t<6;t++)if(p){C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,b,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,m[t].width,m[t].height,0,g,b,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,b,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,i.width,i.height,0,g,b,i.data)}}else{C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,b,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,S,g,b,m[t]);for(let r=0;r<O.length;r++){let i=O[r];C?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,b,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,S,g,b,i.image[t])}}}v(o)&&y(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function de(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=x(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,be(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;xe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,be(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,be(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=x(o.internalFormat,c,l,o.normalized,o.colorSpace);xe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,be(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,be(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function me(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,E)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),L(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else re(i.depthTexture,0);let u=l.__webglTexture,d=be(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function B(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)me(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?me(i.__webglFramebuffer[0],t,0):me(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),fe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),fe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,i){let a=r.get(t);n!==void 0&&de(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&B(t)}function _e(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,D);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&xe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=x(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=be(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),fe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),L(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)de(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else de(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(i)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),L(c,a),de(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),v(a)&&y(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),L(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)de(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else de(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);v(i)&&y(r),n.unbindTexture()}t.depthBuffer&&B(t)}function ve(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(v(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),y(t),n.unbindTexture()}}}let V=[],ye=[];function H(t){if(t.samples>0){if(xe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(V.length=0,ye.length=0,V.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(V.push(l),ye.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ye)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,V))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function be(e){return Math.min(i.maxSamples,e.samples)}function xe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Se(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function we(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(j.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):S(`WebGLTextures: Unsupported texture color space:`,n)),t}function Te(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=M,this.getTextureUnits=te,this.setTextureUnits=N,this.setTexture2D=re,this.setTexture2DArray=ie,this.setTexture3D=F,this.setTextureCube=ae,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=de,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vi(e,t){function n(n,r=``){let i,a=j.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var yi=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bi=`
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

}`,xi=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new R(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new at({vertexShader:yi,fragmentShader:bi,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new I(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Si=class extends o{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,c=1,l=null,u=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new xi,v={},b=t.getContextAttributes(),x=null,S=null,C=[],w=[],E=new pt,D=null,k=null,A=new V;A.viewport=new le;let j=new V;j.viewport=new le;let M=[A,j],N=new ut,ne=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new z,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new z,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new z,C[e]=t),t.getHandSpace()};function ie(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,F),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ne=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(s){if(r=s,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,F),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?T:y,a=b.stencil?ee:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ce(f.textureWidth,f.textureHeight,{format:O,type:Pe,depthTexture:new re(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ce(p.framebufferWidth,p.framebufferHeight,{format:O,type:Pe,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let I=new s,oe=new s;function se(e,t,n){I.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=I.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function L(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=j.near=A.near=t,N.far=j.far=A.far=n,(ne!==N.near||P!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),ne=N.near,P=N.far),N.layers.mask=e.layers.mask|6,A.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;L(N,i);for(let e=0;e<a.length;e++)L(a[e],i);a.length===2?se(N,A,j):N.projectionMatrix.copy(A.projectionMatrix),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),ue(e,N,i)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=te*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(f!==null||p!==null)return c},this.setFoveation=function(e){c=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let de=null;function fe(t,i){if(u=i.getViewerPose(l||a),m=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new V,o.layers.enable(n),o.viewport=new le,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new R,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,l||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let pe=new mt;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},Ci=new Xe,wi=new Y;wi.set(-1,0,0,0,1,0,0,0,1);function Ti(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,de(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ci.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(wi),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ei(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return S(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Di=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Oi=null;function ki(){return Oi===null&&(Oi=new m(Di,16,16,J,Ge),Oi.name=`DFG_LUT`,Oi.minFilter=Ce,Oi.magFilter=Ce,Oi.wrapS=d,Oi.wrapT=d,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}var Ai=class{constructor(e={}){let{canvas:t=w(),context:n=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:f=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:g=Pe}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=o;let y=g,x=new Set([A,et,Re]),C=new Set([Pe,h,ie,ee,b,E]),T=new Uint32Array(4),D=new Int32Array(4),O=new s,k=null,M=null,te=[],N=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,re=!1,F=null,ae=null,I=null,oe=null;this._outputColorSpace=ct;let se=0,L=0,R=null,z=-1,de=null,fe=new le,pe=new le,me=null,he=new l(0),ge=0,_e=t.width,ve=t.height,V=1,ye=null,H=null,be=new le(0,0,_e,ve),xe=new le(0,0,_e,ve),Se=!1,Ce=new ue,we=!1,Te=!1,Ee=new Xe,W=new s,De=new le,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return R===null?V:1}let G=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,K,Fe,q,J,Ie,Le,ze,Be,Ve,He,Y,Ue,We,Ke,qe,Je,Ye,X,Ze,$e,tt;try{let e={alpha:!0,depth:i,stencil:a,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),G===null){let t=`webgl2`;if(G=je(t,e),G===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),S(`WebGLRenderer: `+e.message),e}function nt(){Me=new qt(G),Me.init(),Ze=new vi(G,Me),Ne=new Ct(G,Me,e,Ze),K=new gi(G,Me),Ne.reversedDepthBuffer&&m&&K.buffers.depth.setReversed(!0),ae=G.createFramebuffer(),I=G.createFramebuffer(),oe=G.createFramebuffer(),Fe=new Xt(G),q=new Xr,J=new _i(G,Me,K,q,Ne,Ze,Fe),Ie=new Kt(P),Le=new ht(G),$e=new xt(G,Le),ze=new Jt(G,Le,Fe,$e),Be=new Qt(G,ze,Le,$e,Fe),Je=new Zt(G,Ne,J),We=new wt(q),Ve=new Yr(P,Ie,Me,Ne,$e,We),He=new Ti(P,q),Y=new ei,Ue=new si(Me),qe=new bt(P,Ie,K,Be,_,u),Ke=new hi(P,Be,Ne),tt=new Ei(G,Fe,Ne,K),Ye=new St(G,Me,Fe),X=new Yt(G,Me,Fe),Fe.programs=Ve.programs,P.capabilities=Ne,P.extensions=Me,P.properties=q,P.renderLists=Y,P.shadowMap=Ke,P.state=K,P.info=Fe}y!==1009&&(ne=new en(y,t.width,t.height,c,i,a));let rt=new Si(P,G);this.xr=rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(e){e!==void 0&&(V=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){if(rt.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}_e=e,ve=n,t.width=Math.floor(e*V),t.height=Math.floor(n*V),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(_e*V,ve*V).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,V=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(y===1009){S(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),K.viewport(fe.copy(be).multiplyScalar(V).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),K.scissor(pe.copy(xe).multiplyScalar(V).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){K.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){H=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=x.has(t)}if(e){let e=R.texture.type,t=C.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,G.clearBufferuiv(G.COLOR,0,T)):(D[0]=i,D[1]=a,D[2]=o,D[3]=r,G.clearBufferiv(G.COLOR,0,D))}else r|=G.COLOR_BUFFER_BIT}t&&(r|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),qe.dispose(),Y.dispose(),Ue.dispose(),q.dispose(),Ie.dispose(),Be.dispose(),$e.dispose(),tt.dispose(),Ve.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,Z),rt.removeEventListener(`sessionend`,Q),gt.stop()};function it(e){e.preventDefault(),B(`WebGLRenderer: Context Lost.`),re=!0}function at(){B(`WebGLRenderer: Context Restored.`),re=!1;let e=Fe.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;nt(),Fe.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function ot(e){S(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),lt(t)}function lt(e){ut(e),q.remove(e)}function ut(e){let t=q.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);K.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;$e.setup(i,r,s,n,c);let h,g=Ye;if(c!==null&&(h=Le.get(c),g=X,g.setIndex(h)),i.isMesh)r.wireframe===!0?(K.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(G.LINES)):g.setMode(G.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),K.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(G.LINES):i.isLineLoop?g.setMode(G.LINE_LOOP):g.setMode(G.LINE_STRIP)}else i.isPoints?g.setMode(G.POINTS):i.isSprite&&g.setMode(G.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=q.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(G,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),we===!0&&We.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),M=Ue.get(n),M.init(t),N.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),Te=this.localClippingEnabled,we=We.init(this.clippingPlanes,Te),we===!0&&We.setGlobalState(this.clippingPlanes,t),F!==null&&Ke.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),M=N.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=q.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function Z(){gt.stop()}function Q(){gt.start()}let gt=new mt;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,rt.setAnimationLoop(e),e===null?gt.stop():gt.start()},rt.addEventListener(`sessionstart`,Z),rt.addEventListener(`sessionend`,Q),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){S(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;F!==null&&F.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=ne!==null&&(R===null||n)&&ne.begin(P,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,R),M=Ue.get(e,N.length),M.init(t),M.state.textureUnits=J.getTextureUnits(),N.push(M),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,v,t.reversedDepth),Te=this.localClippingEnabled,we=We.init(this.clippingPlanes,Te),k=Y.get(e,te.length),k.init(),te.push(k),rt.enabled===!0&&rt.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,P.sortObjects)}_t(e,t,0,P.sortObjects),k.finish(),F!==null&&F.updateLights(M.state.lightsArray),P.sortObjects===!0&&k.sort(ye,H),ke=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ke&&qe.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&We.beginShadows();let i=M.state.shadowsArray;if(Ke.render(i,e,t),we===!0&&We.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}ke&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(k,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),ke&&qe.render(e),vt(k,e,t)}R!==null&&L===0&&(J.updateMultisampleRenderTarget(R),J.updateRenderTargetMipmap(R)),r&&ne.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),$e.resetDefaultState(),z=-1,de=null,N.pop(),N.length>0?(M=N[N.length-1],J.setTextureUnits(M.state.textureUnits),we===!0&&We.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,te.pop(),k=te.length>0?te[te.length-1]:null,F!==null&&F.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Be.update(e),a=e.material;a.visible&&k.push(e,i,a,n,De.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,De.z,s,t)}}else a.visible&&k.push(e,i,a,n,De.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),we===!0&&We.setGlobalState(P.clippingPlanes,n),r&&K.viewport(fe.copy(r)),i.length>0&&$(i,t,n),a.length>0&&$(a,t,n),o.length>0&&$(o,t,n),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new ce(1,1,{generateMipmaps:!0,type:e?Ge:Pe,minFilter:Qe,samples:Math.max(4,Ne.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:j.workingColorSpace})}let i=M.state.transmissionRenderTarget[r.id],o=r.viewport||fe;i.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),c=P.getActiveCubeFace(),l=P.getActiveMipmapLevel();P.setRenderTarget(i),P.getClearColor(he),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),ke&&qe.render(n);let u=P.toneMapping;P.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),we===!0&&We.setGlobalState(P.clippingPlanes,r),$(e,n,r),J.updateMultisampleRenderTarget(i),J.updateRenderTargetMipmap(i),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(J.updateMultisampleRenderTarget(i),J.updateRenderTargetMipmap(i))}P.setRenderTarget(s,c,l),P.setClearColor(he,ge),d!==void 0&&(r.viewport=d),P.toneMapping=u}function $(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Oe);let r=q.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ot(e,s),d}else s.uniforms=Ve.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,P),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),Ot(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=cr.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ot(e,t){let n=q.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function kt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];O.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(O))return n}return null}function At(e,t,n,r,i){t.isScene!==!0&&(t=Oe),J.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=R===null?P.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:j.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=q.get(r),y=M.state.lights;if(we===!0&&(Te===!0||e!==de)){let t=e===de&&r.id===z;We.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Et(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(K.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==z&&(z=r.id,C=!0),v.needsLights){let e=kt(M.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){K.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(G,`projectionMatrix`,e.projectionMatrix),T.setValue(G,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(G,W.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&T.setValue(G,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(G,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(G,`sunShadowMap`,y.state.sunShadowMap,J),y.state.directionalShadowMap.length>0&&T.setValue(G,`directionalShadowMap`,y.state.directionalShadowMap,J),y.state.spotShadowMap.length>0&&T.setValue(G,`spotShadowMap`,y.state.spotShadowMap,J),y.state.pointShadowMap.length>0&&T.setValue(G,`pointShadowMap`,y.state.pointShadowMap,J)),i.isSkinnedMesh){T.setOptional(G,i,`bindMatrix`),T.setOptional(G,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(G,`boneTexture`,e.boneTexture,J))}i.isBatchedMesh&&(T.setOptional(G,i,`batchingTexture`),T.setValue(G,`batchingTexture`,i._matricesTexture,J),T.setOptional(G,i,`batchingIdTexture`),T.setValue(G,`batchingIdTexture`,i._indirectTexture,J),T.setOptional(G,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(G,`batchingColorTexture`,i._colorsTexture,J));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Je.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(G,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=ki()),C){if(T.setValue(G,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&jt(E,w),a&&r.fog===!0&&He.refreshFogUniforms(E,a),He.refreshMaterialUniforms(E,r,V,ve,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}cr.upload(G,Dt(v),E,J)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(cr.upload(G,Dt(v),E,J),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(G,`center`,i.center),T.setValue(G,`modelViewMatrix`,i.modelViewMatrix),T.setValue(G,`normalMatrix`,i.normalMatrix),T.setValue(G,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=q.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),q.get(e.texture).__webglTexture=t,q.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=q.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){R=e,se=t,L=n;let r=null,i=!1,a=!1;if(e){let o=q.get(e);if(o.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(G.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,K.viewport(fe),K.scissor(pe),K.setScissorTest(me),z=-1;return}if(o.__webglFramebuffer===void 0)J.setupRenderTarget(e);else if(o.__hasExternalTextures)J.rebindTextures(e,q.get(e.texture).__webglTexture,q.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&q.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);J.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=q.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&J.useMultisampledRTT(e)===!1?q.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(be).multiplyScalar(V).floor(),pe.copy(xe).multiplyScalar(V).floor(),me=Se;if(n!==0&&(r=ae),K.bindFramebuffer(G.FRAMEBUFFER,r)&&K.drawBuffers(e,r),K.viewport(fe),K.scissor(pe),K.setScissorTest(me),i){let r=q.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=q.get(e.textures[t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=q.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,t.__webglTexture,n)}z=-1};function Nt(e){let t=q.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){S(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=q.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){K.bindFramebuffer(G.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){S(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){S(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&G.readPixels(t,n,r,i,Ze.convert(c),Ze.convert(l),a)}finally{let e=R===null?null:q.get(R).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,i,a,o,s,c=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let l=q.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l){if(t>=0&&t<=e.width-i&&n>=0&&n<=e.height-a){K.bindFramebuffer(G.FRAMEBUFFER,l);let s=e.textures[c],u=s.format,d=s.type;e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+c);let f=Nt(s);if(f.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(f.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let p=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,p),G.bufferData(G.PIXEL_PACK_BUFFER,o.byteLength,G.STREAM_READ),G.readPixels(t,n,i,a,Ze.convert(u),Ze.convert(d),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let m=R===null?null:q.get(R).__webglFramebuffer;K.bindFramebuffer(G.FRAMEBUFFER,m);let h=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await r(G,h,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,p),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,o),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(p),G.deleteSync(h),o}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;J.setTexture2D(e,0),G.copyTexSubImage2D(G.TEXTURE_2D,n,0,0,o,s,i,a),K.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ze.convert(t.format),_=Ze.convert(t.type),v;t.isData3DTexture?(J.setTexture3D(t,0),v=G.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(J.setTexture2DArray(t,0),v=G.TEXTURE_2D_ARRAY):(J.setTexture2D(t,0),v=G.TEXTURE_2D),K.activeTexture(G.TEXTURE0),K.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,t.flipY),K.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),K.pixelStorei(G.UNPACK_ALIGNMENT,t.unpackAlignment);let y=K.getParameter(G.UNPACK_ROW_LENGTH),b=K.getParameter(G.UNPACK_IMAGE_HEIGHT),x=K.getParameter(G.UNPACK_SKIP_PIXELS),S=K.getParameter(G.UNPACK_SKIP_ROWS),C=K.getParameter(G.UNPACK_SKIP_IMAGES);K.pixelStorei(G.UNPACK_ROW_LENGTH,h.width),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,h.height),K.pixelStorei(G.UNPACK_SKIP_PIXELS,l),K.pixelStorei(G.UNPACK_SKIP_ROWS,u),K.pixelStorei(G.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=q.get(e),r=q.get(t),h=q.get(n.__renderTarget),g=q.get(r.__renderTarget);K.bindFramebuffer(G.READ_FRAMEBUFFER,h.__webglFramebuffer),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(e).__webglTexture,i,d+n),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(t).__webglTexture,a,m+n)),G.blitFramebuffer(l,u,o,s,f,p,o,s,G.DEPTH_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||q.has(e)){let n=q.get(e),r=q.get(t);K.bindFramebuffer(G.READ_FRAMEBUFFER,I),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,n.__webglTexture,i),T?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,r.__webglTexture,a),i===0?T?G.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):G.copyTexSubImage2D(v,a,f,p,l,u,o,s):G.blitFramebuffer(l,u,o,s,f,p,o,s,G.COLOR_BUFFER_BIT,G.NEAREST);K.bindFramebuffer(G.READ_FRAMEBUFFER,null),K.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?G.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h);K.pixelStorei(G.UNPACK_ROW_LENGTH,y),K.pixelStorei(G.UNPACK_IMAGE_HEIGHT,b),K.pixelStorei(G.UNPACK_SKIP_PIXELS,x),K.pixelStorei(G.UNPACK_SKIP_ROWS,S),K.pixelStorei(G.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&G.generateMipmap(v),K.unbindTexture()},this.initRenderTarget=function(e){q.get(e).__webglFramebuffer===void 0&&J.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?J.setTextureCube(e,0):e.isData3DTexture?J.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?J.setTexture2DArray(e,0):J.setTexture2D(e,0),K.unbindTexture()},this.resetState=function(){se=0,L=0,R=null,K.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return v}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=j._getDrawingBufferColorSpace(e),t.unpackColorSpace=j._getUnpackColorSpace()}};function ji(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new F,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Mi(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Mi(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Mi(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new st(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Ni(){let e=new W(7,14,7),t=`#45434f`;for(let n=0;n<8;n++){let r=Math.round((8-n)/8*2.6);e.set(3-r,n,1+Math.round(r*.3),t),e.set(3+r,n,1+Math.round(r*.3),t),e.set(3,n,3+r,t)}return e.caixa(2,8,2,5,9,5,`#57524e`),e.caixa(1,9,2,6,12,5,`#1b2330`),e.caixa(1,12,2,3,13,4,`#57524e`),e.set(4,12,3,`#e0a030`),e.caixa(2,9,5,5,12,7,`#45434f`),e.caixa(3,10,6,4,11,7,`#86b9ee`),e}function Pi(){let e=new W(4,5,5);return e.caixa(0,0,1,4,4,4,`#f5d27a`),e.caixa(0,1,1,4,3,4,`#e0a030`),e.caixa(1,4,2,3,5,3,`#1b2330`),e.caixa(1,0,4,3,1,5,`#5e4636`),e}function Fi(e,t){let n=new W(e,10,t),r=`#6e2a2f`;return n.caixa(0,0,0,e,1,t,`#262b44`),n.caixa(0,1,0,e,9,1,r),n.caixa(0,1,0,1,9,t,r),n.caixa(0,1,t-1,e,9,t,r),n.caixa(0,9,0,e,10,2,`#a83c32`),n.caixa(1,1,2,4,4,t-2,`#5a3a24`),n.caixa(1,4,2,4,5,t-2,`#efeae0`),n.caixa(2,4,3,3,5,t-3,`#d9573b`),n.set(1,7,Math.floor(t/2),`#e8735a`),n}var Ii={versio:2,descripcio:"GENERAT per scripts/genera-mon.mjs a partir de llocs.json i de dades reals (Natural Earth, Terrain Tiles). No l'editis a mà: canvia llocs.json i executa `npm run mon`.",mida:[148,142],mostres:2,kmPerUnitat:2,projeccio:{kx:41.55788,kz:55.285,ox:-1.96,oz:2377.49},inici:{x:93.71,z:81.02},llocs:[{id:`casa`,nom:{ca:`Casa · Premià de Mar`,en:`Home · Premià de Mar`},etiquetaMapa:{ca:`Premià de Mar`,en:`Premià de Mar`},mida:[4,3],porta:`s`,seccions:[`sobre-mi`,`notes`],illa:1,x:93.71,z:78.62,cota:.73},{id:`facultat`,nom:{ca:`Campus Nord`,en:`Campus Nord`},etiquetaMapa:{ca:`Campus Nord`,en:`Campus Nord`},mida:[5,3],porta:`s`,seccions:[`estudis`],illa:1,x:83.36,z:88.32,cota:.65},{id:`casa-tortosa`,nom:{ca:`Casa · Tortosa`,en:`House · Tortosa`},etiquetaMapa:{ca:`Tortosa`,en:`Tortosa`},mida:[3,2.5],porta:`s`,seccions:[`sobre-mi`],illa:1,x:17.22,z:121.17,cota:.54},{id:`galeria`,nom:{ca:`Galeria del Pedraforca`,en:`Pedraforca gallery`},etiquetaMapa:{ca:`Galeria`,en:`Gallery`},mida:[5,5],porta:`e`,seccions:[`fotografia`],illa:1,x:77.42,z:50.67,cota:2.01},{id:`cafe`,illa:2,nom:{ca:`Cafè-discos`,en:`Record café`},etiquetaMapa:{ca:`Cafè-discos`,en:`Record café`},mida:[4,3],porta:`e`,seccions:[`gustos`],x:109.21,z:115.03,cota:.47},{id:`estudi-emkenia`,illa:2,nom:{ca:`Estudi Emkenia`,en:`Emkenia studio`},etiquetaMapa:{ca:`Emkenia`,en:`Emkenia`},mida:[4,4],porta:`s`,seccions:[`feina`],x:117.31,z:110.17,cota:.65},{id:`taller`,illa:2,nom:{ca:`Taller`,en:`Workshop`},etiquetaMapa:{ca:`Taller`,en:`Workshop`},mida:[4,3],porta:`s`,seccions:[`projectes`],x:128.95,z:116.81,cota:.52},{id:`port`,illa:2,nom:{ca:`Port i far`,en:`Harbour and lighthouse`},etiquetaMapa:{ca:`Port i far`,en:`Harbour`},mida:[3,3],porta:`s`,seccions:[`experiencies`],x:125.2,z:102.88,cota:.38}],fites:[{id:`pedraforca`,nom:{ca:`Pedraforca`,en:`Pedraforca`},x:68.78,z:42.26}],pedraforca:{angle:-25,llargada:7,separacio:1.9,ampleCarena:1.05,alcadaSuperior:2.11,alcadaInferior:1.86,alcadaEnforcadura:1.25,cimSuperior:-.2,cimInferior:.28,faldes:2,alcadaFaldes:.8,rugositat:.07,x:68.78,z:42.26,cotaBase:3.32},molls:[{id:`moll-cat`,nom:{ca:`Moll`,en:`Pier`},illa:1,x0:91.22,z0:86.39,x1:93.9,z1:87.49,amarratge:{x:92.85,z:88.2,angle:1.18},baixada:{x:90.67,z:86.16}},{id:`moll-illa`,nom:{ca:`Moll`,en:`Pier`},illa:2,x0:106.39,z0:118.22,x1:107.49,z1:120.9,amarratge:{x:106.26,z:120.66,angle:.39},baixada:{x:106.16,z:117.67}}],vaixell:{ruta:[[93,88],[95,121],[103.5,125],[106.5,120.5]],llargada:47.86},riu:[[25.17,103.22],[25.34,104.4],[25.4,105.55],[25.34,106.54],[25.13,107.21],[24.69,107.76],[19.59,111.92],[18.82,113.3],[19.2,114.97],[19.37,116.16],[19.25,116.7],[19.94,117.22],[20.1,118.45],[19.98,120.92],[20.27,122.07],[20.9,123.43],[21.66,124.56],[22.39,125.04],[22.8,125.22],[23.63,126.01],[24.23,126.2],[26.67,125.79],[27.93,125.94],[31.07,126.96],[32.27,126.93],[34.35,125.85]],props:[{model:`ordinador`,x:88.61,z:81.62,cota:.51},{model:`bustia`,x:98.06,z:79.52,cota:.7},{model:`retol`,x:98.81,z:81.52,cota:.3},{model:`antena`,x:77.96,z:87.72,cota:.9},{model:`retol`,x:105.39,z:116.62,cota:.47},{model:`tripode`,x:45,z:29.54,cota:3.74,zona:`Alt Pirineu, Pallars Sobirà`},{model:`tripode`,x:77,z:33.41,cota:2.73,zona:`Pirineus, Cerdanya`},{model:`tripode`,x:91.54,z:59.39,cota:1.54,zona:`Osona, prop del Montseny`},{model:`tripode`,x:94.12,z:83.94,cota:.46,zona:`Premià de Mar, Maresme`},{model:`tripode`,x:88.22,z:89.24,cota:.64,zona:`Barcelona`},{model:`tripode`,x:44.04,z:102.24,cota:.68,zona:`Reus`},{model:`tripode`,x:31.29,z:127.89,cota:.2,zona:`Delta de l'Ebre`},{model:`rodet`,x:71.68,z:45.02,cota:3.32},{model:`rodet`,x:127.7,z:41.15,cota:.21},{model:`rodet`,x:23.8,z:131.31,cota:.2},{model:`rodet`,x:76.25,z:80.01,cota:.79},{model:`rodet`,x:122.71,z:110.17,cota:.44,submari:!0},{model:`rodet`,x:25.47,z:76.53,cota:.77},{model:`personatge`,x:70.82,z:52.47,cota:2.29,rol:`pastor`},{model:`personatge`,x:28.38,z:125.01,cota:.2,rol:`pescadora`},{model:`personatge`,x:88.81,z:90.77,cota:.24,rol:`estudiant`},{model:`pilota`,x:19.32,z:125.77,cota:.41},{model:`bici`,x:91.61,z:83.97,cota:.99},{model:`globus`,x:65.36,z:78.74,cota:1.18,mida:[2,2]},{model:`bot`,x:31.79,z:126.34,cota:.2},{model:`metro`,x:78.06,z:92.22,cota:1.36,estacio:`zona-universitaria`},{model:`metro`,x:90.31,z:85.97,cota:.43,estacio:`premia`},{model:`metro`,x:83.12,z:55.97,cota:1.84,estacio:`pedraforca`},{model:`metro`,x:13.02,z:125.07,cota:1.6,estacio:`tortosa`},{model:`metro`,x:88.52,z:84.99,cota:.5,estacio:`moll`},{model:`cova`,x:66.17,z:49.17,cota:2.66,mida:[2,1]},{model:`immersio`,x:103.79,z:116.82,cota:.94},{model:`montserrat`,x:72.84,z:76.63,cota:1.56,mida:[5.4,2.4]},{model:`sagrada-familia`,x:85.56,z:84.22,cota:.66,mida:[1.8,1.6]},{model:`castellers`,x:49.99,z:94.99,cota:.92,mida:[3,3]},{model:`correfoc`,x:68.6,z:91.68,cota:.89,mida:[3,3]},{model:`estany`,x:39.64,z:23.34,cota:4.87,mida:[4.6,2.6]},{model:`sant-jordi`,x:89.31,z:79.52,cota:.7,mida:[2.6,1]},{model:`sant-jordi`,x:85.26,z:93.52,cota:.22,mida:[2.6,1]},{model:`sant-jordi`,x:22.12,z:126.87,cota:.28,mida:[2.6,1]},{model:`cim`,id:`pica-estats`,metres:3143,x:53.5,z:19.5,cota:6.07},{model:`cim`,id:`carlit`,metres:2921,x:77,z:26,cota:5.74},{model:`cim`,id:`canigo`,metres:2784,x:100,z:28.5,cota:5.53},{model:`cim`,id:`puigmal`,metres:2910,x:86,z:34.5,cota:5.72},{model:`cim`,id:`turo-home`,metres:1706,x:97,z:66,cota:3.8},{model:`cim`,id:`montsant`,metres:1163,x:33,z:95,cota:2.85},{model:`monument`,x:115.42,z:56.32,cota:.69,mida:[5,2.75],id:`girona`},{model:`monument`,x:49.37,z:101.47,cota:.56,mida:[4.25,3.25],id:`tarragona`},{model:`monument`,x:21.07,z:76.62,cota:.8,mida:[3.75,3.25],id:`lleida`},{model:`monument`,x:91.74,z:54.86,cota:1.63,mida:[4.25,4],id:`vic`},{model:`monument`,x:43.01,z:89.75,cota:1.68,mida:[4.75,3.75],id:`poblet`},{model:`monument`,x:132.84,z:38.88,cota:1.1,mida:[2.5,2.25],id:`cap-creus`},{model:`monument`,x:116.86,z:68.7,cota:1.2,mida:[4.25,3],id:`tossa`},{model:`monument`,x:102.91,z:48.15,cota:1.73,mida:[4,3.75],id:`croscat`},{model:`aula`,x:73.76,z:90.12,cota:1.19,mida:[3.2,3]},{model:`linia-temps`,x:15.72,z:110.17,cota:1.13,mida:[9,1.5]},{model:`far`,x:128.02,z:97.08,cota:.2}]},Li=class{logica=new dt;render=new dt;residu=new pt;objectiu=new s;ppu=16;vista=18;elevacio=30;gir=45;suavitzat=.18;texel=1;dreta=new s;amunt=new s;enrere=new s;distancia=80;configura(e,t,n){this.vista=t/this.ppu,this.texel=1/this.ppu;let r=e/2*this.texel,i=this.vista/2;for(let[e,t]of[[this.logica,0],[this.render,n*this.texel]])e.left=-r-t,e.right=r+t,e.top=i+t,e.bottom=-i-t,e.near=1,e.far=this.distancia*2+40,e.updateProjectionMatrix();this.orienta()}get midaTexel(){return this.texel}orienta(){let e=_e.degToRad(this.gir),t=_e.degToRad(this.elevacio);this.enrere.set(Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)),this.dreta.set(Math.cos(e),0,-Math.sin(e)),this.amunt.crossVectors(this.enrere,this.dreta).normalize();for(let e of[this.logica,this.render])e.up.copy(this.amunt);this.render.layers.enable(1)}direccions(e,t){e.set(-this.enrere.x,0,-this.enrere.z).normalize(),t.copy(this.dreta)}actualitza(e,t,n=!1){n||this.suavitzat<=0?this.objectiu.copy(e):this.objectiu.lerp(e,1-Math.exp(-t/this.suavitzat));let r=new s().copy(this.objectiu).addScaledVector(this.enrere,this.distancia);this.logica.position.copy(r),this.logica.lookAt(this.objectiu);let i=r.dot(this.dreta),a=r.dot(this.amunt),o=Math.round(i/this.texel)*this.texel,c=Math.round(a/this.texel)*this.texel;this.residu.set((i-o)/this.texel,(a-c)/this.texel);let l=r.clone().addScaledVector(this.dreta,o-i).addScaledVector(this.amunt,c-a);this.render.position.copy(l),this.render.quaternion.copy(this.logica.quaternion),this.logica.updateMatrixWorld(),this.render.updateMatrixWorld()}enganxa(e){let t=e.dot(this.dreta),n=e.dot(this.amunt);return e.addScaledVector(this.dreta,Math.round(t/this.texel)*this.texel-t).addScaledVector(this.amunt,Math.round(n/this.texel)*this.texel-n)}},Ri=new dt(-1,1,1,-1,0,1),zi=new class extends F{constructor(){super(),this.setAttribute(`position`,new _([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new _([0,2,0,0,2,0],2))}},Bi=class{constructor(e){this._mesh=new H(zi,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ri)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Vi=[`final`,`sense-paleta`,`normals`,`profunditat`,`contorns`,`filferros`],Hi={illa:`#a8d4f5.#86b9ee.#4d8ce0.#2f64b0.#1d3f73.#7fd3c8.#3fa7b5.#f7ebc4.#ecd9a0.#cdb477.#a58a57.#a6d86a.#7fbf4d.#5e9a3a.#3f7430.#4f8f45.#3f7d3c.#2f5f2d.#214225.#e6d6ad.#d6c49a.#b3a077.#8a6a4f.#5e4636.#efeae0.#ddd6c7.#b8b0a0.#948c7e.#6f6960.#a39d95.#8d877f.#77716a.#57524e.#c98a4b.#a8703f.#7f5230.#5a3a24.#e8735a.#d9573b.#a83c32.#6e2a2f.#f5d27a.#e0a030.#b37a1c.#b28ae6.#8e5bd6.#6440a3.#5a6988.#3a4466.#262b44.#ffffff.#e8ebf2.#1b2330.#0d0f1a.#f1c7a3.#c98d6b.#f4d2a8.#e9b98a.#d3976a.#b07a58.#b65e42.#a4513a.#7c3b2b.#c96a3f`.split(`.`),endesga:`#be4a2f.#d77643.#ead4aa.#e4a672.#b86f50.#733e39.#3e2731.#a22633.#e43b44.#f77622.#feae34.#fee761.#63c74d.#3e8948.#265c42.#193c3e.#124e89.#0099db.#2ce8f5.#ffffff.#c0cbdc.#8b9bb4.#5a6988.#3a4466.#262b44.#181425.#ff0044.#68386c.#b55088.#f6757a.#e8b796.#c28569`.split(`.`),gameboy:[`#0f380f`,`#306230`,`#8bac0f`,`#9bbc0f`]},Ui=1;function Wi(e){let t=Math.cbrt(.4122214708*e.r+.5363325363*e.g+.0514459929*e.b),n=Math.cbrt(.2119034982*e.r+.6806995451*e.g+.1073969566*e.b),r=Math.cbrt(.0883024619*e.r+.2817188376*e.g+.6299787005*e.b);return new s(.2104542553*t+.793617785*n-.0040720468*r,1.9779984951*t-2.428592205*n+.4505937099*r,.0259040371*t+.7827717662*n-.808675766*r)}var Gi=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ki=`
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform sampler2D tNormal;
  uniform vec4 resolucio;       // w, h, 1/w, 1/h
  uniform vec2 nearFar;
  uniform float forcaProfunditat;
  uniform float forcaNormal;
  uniform vec3 paletaLab[64];
  uniform vec3 paletaSrgb[64];
  uniform int nPaleta;
  uniform float tramat;
  uniform int vista; // l'índex a VISTES (0: la imatge final)
  varying vec2 vUv;

  float profunditat(vec2 d) {
    float z = texture2D(tDepth, vUv + d * resolucio.zw).r;
    return nearFar.x + z * (nearFar.y - nearFar.x); // lineal: càmera ortogràfica
  }
  vec3 normal(vec2 d) {
    return texture2D(tNormal, vUv + d * resolucio.zw).rgb * 2.0 - 1.0;
  }

  float vora(float z0) {
    // El píxel és a la vora d'un objecte si té veïns molt més lluny.
    float d = 0.0;
    d += clamp(profunditat(vec2(1.0, 0.0)) - z0, 0.0, 4.0);
    d += clamp(profunditat(vec2(-1.0, 0.0)) - z0, 0.0, 4.0);
    d += clamp(profunditat(vec2(0.0, 1.0)) - z0, 0.0, 4.0);
    d += clamp(profunditat(vec2(0.0, -1.0)) - z0, 0.0, 4.0);
    return step(0.6, d);
  }

  float aresta(vec2 dir, float z0, vec3 n0) {
    float dz = profunditat(dir) - z0;
    vec3 n1 = normal(dir);
    float cap = clamp(smoothstep(-0.01, 0.01, dot(n0 - n1, vec3(1.0))), 0.0, 1.0);
    float davant = clamp(sign(dz * 0.25 + 0.0025), 0.0, 1.0);
    return (1.0 - dot(n0, n1)) * davant * cap;
  }

  vec3 aSrgb(vec3 c) {
    c = max(c, vec3(0.0));
    return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
  }

  vec3 aLab(vec3 c) {
    c = max(c, vec3(0.0));
    float l = pow(0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b, 1.0 / 3.0);
    float m = pow(0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b, 1.0 / 3.0);
    float s = pow(0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b, 1.0 / 3.0);
    return vec3(
      0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
      1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
      0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    );
  }

  float bayer4(vec2 p) {
    int x = int(mod(p.x, 4.0));
    int y = int(mod(p.y, 4.0));
    int i = x + y * 4;
    float m[16];
    m[0] = 0.0; m[1] = 8.0; m[2] = 2.0; m[3] = 10.0;
    m[4] = 12.0; m[5] = 4.0; m[6] = 14.0; m[7] = 6.0;
    m[8] = 3.0; m[9] = 11.0; m[10] = 1.0; m[11] = 9.0;
    m[12] = 15.0; m[13] = 7.0; m[14] = 13.0; m[15] = 5.0;
    float v = 0.0;
    for (int k = 0; k < 16; k++) { if (k == i) v = m[k]; }
    return v / 16.0 - 0.5;
  }

  void main() {
    vec3 c = texture2D(tColor, vUv).rgb;

    // Mode «com està fet»: les normals i la profunditat tal com les llegeix aquesta passada, i els
    // filferros sense contorns ni paleta
    if (vista == 2) {
      gl_FragColor = vec4(texture2D(tNormal, vUv).rgb, 1.0);
      return;
    }
    if (vista == 3) {
      // la càmera és a 80 unitats del jugador: el que es veu queda més o menys entre 62 i 100
      gl_FragColor = vec4(vec3(clamp(1.0 - (profunditat(vec2(0.0)) - 62.0) / 38.0, 0.0, 1.0)), 1.0);
      return;
    }
    if (vista == 5) {
      gl_FragColor = vec4(aSrgb(c), 1.0);
      return;
    }

    if (forcaProfunditat > 0.0 || forcaNormal > 0.0) {
      float z0 = profunditat(vec2(0.0));
      vec3 n0 = normal(vec2(0.0));
      float v = forcaProfunditat > 0.0 ? vora(z0) : 0.0;
      float a = 0.0;
      if (forcaNormal > 0.0 && v == 0.0) {
        a += aresta(vec2(0.0, -1.0), z0, n0);
        a += aresta(vec2(0.0, 1.0), z0, n0);
        a += aresta(vec2(-1.0, 0.0), z0, n0);
        a += aresta(vec2(1.0, 0.0), z0, n0);
        a = step(0.1, a);
      }
      if (vista == 4) {
        gl_FragColor = vec4(mix(vec3(0.937, 0.918, 0.878), vec3(0.106, 0.137, 0.188), max(v, step(0.5, a))), 1.0);
        return;
      }
      c *= v > 0.0 ? (1.0 - forcaProfunditat) : (1.0 + forcaNormal * a);
    }

    if (nPaleta == 0 || vista == 1) {
      gl_FragColor = vec4(aSrgb(c), 1.0);
      return;
    }

    vec3 lab = aLab(c);
    lab.x += bayer4(gl_FragCoord.xy) * tramat * 0.08;
    float millor = 1e9;
    vec3 sortida = vec3(0.0);
    for (int k = 0; k < 64; k++) {
      if (k >= nPaleta) break;
      vec3 d = lab - paletaLab[k];
      d.yz *= 1.4; // el to pesa una mica més que la lluminositat
      float e = dot(d, d);
      if (e < millor) { millor = e; sortida = paletaSrgb[k]; }
    }
    gl_FragColor = vec4(sortida, 1.0);
  }
`,qi=`
  uniform sampler2D tPixel;
  uniform vec2 midaRt;
  uniform float escala;
  uniform float marge;
  uniform vec2 residu;
  varying vec2 vUv;
  void main() {
    vec2 texel = floor(gl_FragCoord.xy / escala + marge + residu);
    gl_FragColor = texture2D(tPixel, (texel + 0.5) / midaRt);
  }
`,Ji=class{renderer;escena;camera;opcions;escala=1;interna=new pt;rtColor=new ce(1,1,{type:Ge,minFilter:G,magFilter:G,depthTexture:new re(1,1)});rtNormal=new ce(1,1,{type:Ge,minFilter:G,magFilter:G});rtPixel=new ce(1,1,{minFilter:G,magFilter:G});materialNormal=new We;vista=`final`;filferros=null;pixela;amplia;quadPixela;quadAmplia;constructor(e,t,n,r){this.renderer=e,this.escena=t,this.camera=n,this.opcions=r;let i=()=>Array.from({length:64},()=>new s);this.pixela=new at({uniforms:{tColor:{value:this.rtColor.texture},tDepth:{value:this.rtColor.depthTexture},tNormal:{value:this.rtNormal.texture},resolucio:{value:new le},nearFar:{value:new pt},forcaProfunditat:{value:0},forcaNormal:{value:0},paletaLab:{value:i()},paletaSrgb:{value:i()},nPaleta:{value:0},tramat:{value:0},vista:{value:0}},vertexShader:Gi,fragmentShader:Ki,blending:0,depthTest:!1,depthWrite:!1}),this.amplia=new at({uniforms:{tPixel:{value:this.rtPixel.texture},midaRt:{value:new pt},escala:{value:1},marge:{value:Ui},residu:{value:new pt}},vertexShader:Gi,fragmentShader:qi,blending:0,depthTest:!1,depthWrite:!1}),this.quadPixela=new Bi(this.pixela),this.quadAmplia=new Bi(this.amplia),this.aplicaOpcions(r)}aplicaOpcions(e){this.opcions=e;let t=this.pixela.uniforms;t.forcaProfunditat.value=e.contorns?.45:0,t.forcaNormal.value=e.contorns?.22:0,t.tramat.value=e.tramat;let n=(e.paleta??[]).slice(0,64).map(e=>new l(e));t.nPaleta.value=n.length,n.forEach((e,n)=>{t.paletaLab.value[n].copy(Wi(e));let r=e.clone().convertLinearToSRGB();t.paletaSrgb.value[n].set(r.r,r.g,r.b)})}canviaPaleta(e){this.aplicaOpcions({...this.opcions,paleta:e})}mida(e,t){this.escala=Math.max(1,Math.round(Math.min(e,t)/this.opcions.costatCurt));let n=Math.ceil(e/this.escala),r=Math.ceil(t/this.escala);this.interna.set(n,r);let i=n+2,a=r+2;for(let e of[this.rtColor,this.rtNormal,this.rtPixel])e.setSize(i,a);this.pixela.uniforms.resolucio.value.set(i,a,1/i,1/a),this.amplia.uniforms.midaRt.value.set(i,a),this.amplia.uniforms.escala.value=this.escala,this.camera.configura(n,r,Ui)}render(){let{renderer:e,escena:t}=this,n=this.camera.render;this.pixela.uniforms.nearFar.value.set(n.near,n.far),e.shadowMap.needsUpdate=!0,e.setRenderTarget(this.rtColor);let r=this.vista===`filferros`&&this.filferros;r&&r(!0),e.render(t,n),r&&r(!1),this.pixela.uniforms.vista.value=Vi.indexOf(this.vista);let i=t.overrideMaterial,a=n.layers.mask;t.overrideMaterial=this.materialNormal,n.layers.disable(1),e.setRenderTarget(this.rtNormal),e.render(t,n),n.layers.mask=a,t.overrideMaterial=i,e.setRenderTarget(this.rtPixel),this.quadPixela.render(e),this.amplia.uniforms.residu.value.copy(this.camera.residu),e.setRenderTarget(null),this.quadAmplia.render(e)}dispose(){for(let e of[this.rtColor,this.rtNormal,this.rtPixel])e.dispose();this.pixela.dispose(),this.amplia.dispose(),this.materialNormal.dispose(),this.quadPixela.dispose(),this.quadAmplia.dispose()}},Yi={A:[`###`,`#.#`,`###`,`#.#`,`#.#`],B:[`##.`,`#.#`,`##.`,`#.#`,`##.`],C:[`###`,`#..`,`#..`,`#..`,`###`],D:[`##.`,`#.#`,`#.#`,`#.#`,`##.`],4:[`#.#`,`#.#`,`###`,`..#`,`..#`],5:[`###`,`#..`,`###`,`..#`,`###`],6:[`###`,`#..`,`###`,`#.#`,`###`]};function Xi(e,t,n,r,i,a){[...t].forEach((t,o)=>{let s=Yi[t];s&&s.forEach((t,s)=>[...t].forEach((t,c)=>{t===`#`&&e.set(r+o*4+c,i+4-s,n,a)}))})}function Zi(e,t,n,r,i=`#4f8f45`,a=2){e.caixa(t,n,r,t+1,n+5,r+1,`#7f5230`),e.caixa(t-a,n+5,r-a,t+a+1,n+8,r+a+1,Ye(i,.82)),e.caixa(t-a+1,n+8,r-a+1,t+a,n+10,r+a,i)}function Qi(e,t,n,r){e.caixa(t,n,r,t+1,n+12,r+1,`#6b4a32`),e.caixa(t-3,n+12,r-3,t+4,n+14,r+4,`#2f5f2d`),e.caixa(t-2,n+14,r-2,t+3,n+16,r+3,`#3f7d3c`)}var $i={estuc:`#f1eee6`,pedra:`#cdb892`,teula:`#b5553a`,rajola:`#b9774f`,ferro:`#23332b`,negre:`#1b2330`,persiana:`#8a6a4f`,vidre:`#86b9ee`,garatge:`#efeee9`,panot:`#c9b7ae`,asfalt:`#6f6960`,planta:`#4f8f45`,test:`#a8563f`};function ea(e,t,n,r,i,a){e.caixa(t-1,n-1,r,t+i+1,n+a+1,r+1,$i.pedra),e.caixa(t,n,r,t+i,n+a,r+1,$i.vidre),e.caixa(t,n+Math.ceil(a/2),r,t+i,n+a,r+1,$i.persiana)}function ta(e,t,n,r,i){e.caixa(t,r,i,n,r+1,i+2,$i.pedra);for(let a=t;a<n;a++)((a-t)%2==0||a===n-1)&&e.caixa(a,r+1,i+1,a+1,r+4,i+2,$i.ferro);e.caixa(t,r+4,i+1,n,r+5,i+2,$i.ferro),e.caixa(t,r+1,i,t+1,r+5,i+1,$i.ferro),e.caixa(n-1,r+1,i,n,r+5,i+1,$i.ferro)}function na(e,t){let n=e*8,r=t*8,i=new W(n,34,r),a=r-7,o=[[0,10,0],[10,n-10,1],[n-10,n,2]];for(let[e,t,n]of o){i.caixa(e,0,a,t,1+n,r,$i.asfalt),i.caixa(e,0,a,t,2+n,a+3,$i.panot),i.caixa(e,1+n,a+3,t,2+n,a+4,$i.pedra);for(let r=e+2;r<t-1;r+=5)i.caixa(r,2+n,a+2,r+1,4+n,a+3,$i.negre)}let s=[[0,10,0,2,`#e6d6ad`],[10,n-10,1,3,$i.estuc],[n-10,n,2,3,`#f4d2a8`]],c=a-1;for(let[e,t,n,r,o]of s){let s=2+n,l=s+r*8;i.caixa(e,0,0,t,l,a,o),i.caixa(e,0,c,t,s+1,a,$i.pedra);for(let n=0;n<4;n++){let r=n%2?Ye($i.teula,.86):$i.teula;i.caixa(e,l+n,n*2,t,l+n+1,a+1-n*2,r)}i.caixa(e,l,a,t,l+1,a+1,Ye($i.teula,.7)),i.caixa(e,s,c,e+1,l,c+1,$i.pedra),i.caixa(t-1,s,c,t,l,c+1,$i.pedra)}i.caixa(3,2,c,7,8,c+1,$i.persiana),ea(i,3,12,c,4,4);for(let e=0;e<3;e++)ea(i,n-7,4+e*8+2,c,4,4);for(let e=0;e<3;e++)i.caixa(n-1,4+e*8+3,4,n,4+e*8+6,8,$i.persiana);let l=n-10;for(let e=3;e<8;e++)i.caixa(11,e,c,17,e+1,c+1,e%2?$i.garatge:`#d8d6ce`);for(let e=11;e<17;e++)i.set(e,8,c,e%2?$i.negre:$i.vidre);i.caixa(l-4,5,c,l-1,11,c+1,$i.vidre),i.caixa(l-3,5,c,l-2,11,c+1,`#ffffff`),i.caixa(l-4,8,c,l-1,9,c+1,`#ffffff`),i.caixa(l-5,3,c+1,l,4,c+3,$i.rajola),i.caixa(l-5,4,c+1,l,5,c+2,$i.rajola),i.caixa(l-5,4,c+2,l-4,8,c+3,$i.negre),i.caixa(l-5,7,c+1,l-4,8,c+3,$i.negre),i.caixa(l,3,c+1,l+1,11,c+2,`#ffffff`),i.caixa(18,3,c+1,19,5,c+2,$i.test),i.caixa(18,5,c+1,19,7,c+2,$i.planta);for(let e=1;e<3;e++){let t=3+e*8;ea(i,13,t+1,c,6,6),ta(i,11,l-1,t,c+1)}return i}var ra={totxo:`#a4513a`,formigo:`#d8cdb8`,vidre:`#5d7fa6`,lama:`#8a8f94`,rajola:`#a8563f`,gespa:`#7fbf4d`,fanal:`#6f6960`,terrat:`#b8b0a0`};function ia(e,t,n,r,i,a,o){let s=a*6+1;e.caixa(t,0,n,r,s,i,ra.totxo);for(let o=0;o<=a;o++)e.caixa(t,o*6,n,r,o*6+1,i,ra.formigo);for(let o=0;o<a;o++){let a=o*6+2;for(let o=t+1;o<r-1;o+=3)e.caixa(o,a,i-1,o+2,a+3,i,ra.vidre),e.caixa(o,a,n,o+2,a+3,n+1,ra.vidre);for(let o=n+1;o<i-1;o+=3)e.caixa(r-1,a,o,r,a+3,o+2,ra.vidre),e.caixa(t,a,o,t+1,a+3,o+2,ra.vidre)}if(e.caixa(t,s,n,r,s+1,i,ra.formigo),e.caixa(t+1,s,n+1,r-1,s+1,i-1,ra.terrat),o){let a=o===`e`?r:t-1;for(let t=n+1;t<i-1;t+=2)e.caixa(a,1,t,a+1,s-1,t+1,ra.lama)}return s}function aa(e,t){let n=e*8,r=t*8,i=new W(n,27,r),a=Math.floor(n/2)-6,o=a+12;i.caixa(a,0,0,o,1,r,ra.gespa),i.caixa(a+2,0,0,o-2,1,r,ra.rajola);for(let e=3;e<r-2;e+=8)Zi(i,a+1,1,e,`#4f8f45`,1),Zi(i,o-2,1,e+4,`#4f8f45`,1);for(let[e,t]of[[a+1,11],[o-2,3],[o-2,19]])i.caixa(e,1,t,e+1,13,t+1,ra.fanal),i.caixa(e-1,13,t,e+2,14,t+1,ra.fanal),i.set(e-1,12,t,`#f5d27a`),i.set(e+1,12,t,`#f5d27a`);let s=Math.floor(r/2);return ia(i,0,0,a,s-1,4,null),ia(i,0,s+1,a,r,4,`e`),ia(i,o,0,n,s-1,4,null),ia(i,o,s+1,n,r,4,`o`),Xi(i,`A5`,r-1,n-9,20,`#efeae0`),i}var oa={estuc:`#f7c79a`,columna:`#d98e5e`,pissarra:`#5d5a52`,ocre:`#8b7a5c`,teula:`#c96a3f`,mao:`#d9c7a6`,alumini:`#f4f2ec`,vidre:`#3f4a5a`,terracuita:`#c98a5e`,formigo:`#c9bfae`,tendal:`#f7f5ef`,groc:`#f5d020`,negre:`#1b2330`};function sa(e,t){let n=e*8,r=t*8,i=new W(n,24,r);i.caixa(0,0,0,n,1,r,oa.formigo);for(let e=1;e<r;e+=4)i.caixa(0,0,e,n,1,e+1,Ye(oa.formigo,.94));let[a,o,s,c]=[4,n-3,2,13];i.caixa(a,1,s,o,13,c,oa.estuc);for(let e=a;e<o;e++)for(let t=1;t<5;t++){let n=(e*7+t*3)%5<2?oa.ocre:oa.pissarra;if(i.set(e,t,c-1,n),e===o-1)for(let n=s;n<c;n++)i.set(e,t,n,(n*7+t*3)%5<2?oa.ocre:oa.pissarra)}for(let e=0;e<4;e++){let t=e===3?Ye(oa.teula,.8):e%2?Ye(oa.teula,.88):oa.teula;i.caixa(a-1,13+e,s-1+e*2,o+1,13+e+1,c+1-e*2,t)}i.caixa(a+3,13,s+1,a+6,21,s+4,oa.mao),i.caixa(a+2,21,s,a+7,22,s+5,Ye(oa.mao,.85));let l=c-1;i.caixa(a+3,6,l,a+8,11,l+1,oa.vidre);for(let e=a+3;e<a+8;e++)for(let t=6;t<11;t++)(e+t)%2==0&&i.set(e,t,l+1,`#ffffff`);let u=Math.floor(n/2)-3;i.caixa(u,2,l,u+6,11,l+1,oa.alumini),i.caixa(u+1,2,l,u+3,10,l+1,oa.vidre),i.caixa(u+3,2,l,u+5,10,l+1,oa.vidre),i.caixa(u-2,2,l+1,u,11,l+2,oa.alumini),i.set(u-3,11,l+1,oa.negre),i.set(u+8,11,l+1,oa.negre),i.caixa(o-1,6,s+3,o,10,s+7,oa.vidre),i.caixa(a-1,1,c,o+1,2,c+5,oa.terracuita),i.caixa(a-1,1,c+4,o+1,2,c+5,Ye(oa.terracuita,.8)),i.caixa(o-1,2,c+3,o,13,c+4,oa.columna),i.caixa(u-1,12,c,o-1,13,c+3,oa.tendal),i.caixa(u-1,11,c+2,o-1,12,c+3,oa.tendal);for(let e of[u,o-3])i.caixa(e,9,c,e+1,12,c+1,`#d8d6ce`);i.caixa(o-5,2,c+1,o-3,4,c+3,`#45434f`),i.caixa(o-5,4,c+1,o-3,6,c+2,`#45434f`),i.caixa(0,1,0,4,6,2,`#efeae0`);for(let e=0;e<4;e+=2)i.caixa(e,3,2,e+1,4,2,`#4d8ce0`);return i.caixa(1,6,0,3,9,1,`#efeae0`),i.caixa(1,3,1,3,4,2,oa.negre),Qi(i,1,1,1),Qi(i,n-6,1,0),Zi(i,n-2,1,2,`#3f7d3c`),i.caixa(0,1,r-5,2,3,r-1,`#3f7d3c`),i.caixa(u+9,1,r-3,u+11,3,r-1,oa.groc),i.set(u+9,2,r-2,oa.negre),i.set(u+10,1,r-3,oa.negre),i}var ca=[10,16,8];function la(e){let[t,n,r]=ca,i=new W(t,n,r);return i.caixa(3,1,3,5,3,5,e.pantalons),i.caixa(5,1,3,7,3,5,e.pantalons),i.caixa(3,0,3,7,1,5,e.sabates),i.set(5,0,3,null),i.set(5,0,4,null),i.caixa(2,3,2,8,7,6,e.jaqueta),i.caixa(2,3,2,8,4,6,e.vora),i.caixa(1,4,3,2,7,5,e.jaqueta),i.caixa(8,4,3,9,7,5,e.jaqueta),i.caixa(1,3,3,2,4,5,e.pell),i.caixa(8,3,3,9,4,5,e.pell),i.caixa(2,7,1,8,12,7,e.pell),i.caixa(2,11,1,8,13,7,e.cabell),i.caixa(2,8,1,8,12,3,e.cabell),i.set(2,10,6,e.cabell),i.set(7,10,6,e.cabell),i.set(3,9,6,`#1b2330`),i.set(6,9,6,`#1b2330`),e.barba&&i.caixa(3,7,6,7,9,7,e.barba),e.ulleres&&(i.caixa(2,9,7,8,10,8,`#1b2330`),i.set(3,9,7,`#e8ebf2`),i.set(6,9,7,`#e8ebf2`)),e.barret?.tipus===`ala`?(i.caixa(0,13,0,t,14,r,e.barret.color),i.caixa(3,14,2,7,15,6,e.barret.color)):e.barret?.tipus===`gorra`&&(i.caixa(2,13,1,8,14,7,e.barret.color),i.caixa(3,12,7,7,13,8,e.barret.color)),e.motxilla&&(i.caixa(3,4,1,7,7,2,e.motxilla),i.caixa(4,5,0,6,6,1,e.motxilla)),e.gaiato&&(i.caixa(9,0,4,10,13,5,`#7f5230`),i.set(9,13,5,`#7f5230`),i.set(9,12,6,`#7f5230`)),i}function ua(){let e=new W(3,3,3);e.caixa(0,0,0,3,3,3,`#f5d27a`);for(let[t,n,r]of[[0,0,0],[2,0,0],[0,2,0],[2,2,0],[0,0,2],[2,0,2],[0,2,2],[2,2,2]])e.set(t,n,r,null);return e.set(1,1,2,`#1b2330`),e.set(2,1,1,`#1b2330`),e.set(1,2,1,`#1b2330`),e}var da={pastor:{jaqueta:`#8a6a4f`,vora:`#5e4636`,pantalons:`#3a4466`,sabates:`#5a3a24`,pell:`#f1c7a3`,cabell:`#b8b0a0`,barba:`#ddd6c7`,barret:{tipus:`ala`,color:`#5a3a24`},gaiato:!0},pescadora:{jaqueta:`#e0a030`,vora:`#b37a1c`,pantalons:`#262b44`,sabates:`#2f5f2d`,pell:`#c98d6b`,cabell:`#5a3a24`,barret:{tipus:`gorra`,color:`#1d3f73`}},estudiant:{jaqueta:`#8e5bd6`,vora:`#6440a3`,pantalons:`#3a4466`,sabates:`#efeae0`,pell:`#f1c7a3`,cabell:`#1b2330`,ulleres:!0,motxilla:`#a83c32`}};function fa(){let e=new W(4,10,4);return e.caixa(0,0,0,4,1,4,`#b8b0a0`),e.caixa(1,1,1,3,8,3,`#efeae0`),e.caixa(1,1,1,3,2,3,`#ddd6c7`),e.caixa(0,8,0,4,9,4,`#efeae0`),e.set(1,9,1,`#6f6960`),e.set(2,9,2,`#6f6960`),e}function pa(){let e=new W(4,4,3);return e.caixa(0,0,0,4,3,3,`#4d8ce0`),e.caixa(0,3,0,4,4,3,`#2f64b0`),e.caixa(1,1,2,3,2,3,`#e0a030`),e}function ma(){let e=new W(25,14,4),t=[`#e0a030`,`#4d8ce0`,`#e8735a`,`#efeae0`];for(let n=0;n<25;n++){let r=(n-12)/12,i=Math.round(12-r*r*4.5),a=t[Math.floor(n/3)%t.length];e.caixa(n,i,0,n+1,i+2,4,a)}let n=(t,n)=>{for(let r=0;r<=16;r++){let i=r/16;e.set(Math.round(t+(12-t)*i),Math.round(n-n*i),2,`#57524e`)}};return n(2,7),n(22,7),n(8,10),n(16,10),{voxels:e,alcada:14,ample:25}}function ha(){let e=new W(23,37,23),t=[`#d9573b`,`#e0a030`,`#efeae0`,`#4d8ce0`];for(let n=0;n<=24;n++)for(let r=0;r<23;r++)for(let i=0;i<23;i++){let a=(n-11)/11,o=11*(a<0?Math.sqrt(Math.max(0,1-a*a))*(.55+.45*(1+a)):Math.sqrt(Math.max(0,1-a*a*.9))),s=Math.hypot(i-11,r-11);if(s>o||s<o-1.6)continue;let c=Math.atan2(r-11,i-11),l=Math.floor((c+Math.PI)/(Math.PI*2)*12)%t.length;e.set(i,12+n,r,t[l])}for(let t=5;t<14;t++){let n=Math.round(1+(t-5)/9*2);for(let[r,i]of[[11-n,11-n],[11+n,11-n],[11-n,11+n],[11+n,11+n]])e.set(r,t,i,`#57524e`)}return e.caixa(10,6,10,13,7,13,`#45434f`),e.set(11,7,11,`#e0a030`),e.caixa(8,0,8,15,5,15,`#a8703f`),e.caixa(8,4,8,15,5,15,`#7f5230`),e.caixa(9,1,9,14,5,14,null),e.caixa(9,0,9,14,1,14,`#5a3a24`),{voxels:e,cistella:1}}function ga(){let e=new W(1,5,9),t=t=>{e.caixa(0,0,t+1,1,1,t+2,`#1b2330`),e.caixa(0,2,t+1,1,3,t+2,`#1b2330`),e.set(0,1,t,`#1b2330`),e.set(0,1,t+2,`#1b2330`),e.set(0,1,t+1,`#6f6960`)};return t(0),t(6),e.caixa(0,2,2,1,3,7,`#4d8ce0`),e.caixa(0,3,3,1,4,4,`#1b2330`),e.caixa(0,3,7,1,5,8,`#57524e`),e}function _a(){let e=new W(4,5,9),t=ga();for(let n=0;n<5;n++)for(let r=0;r<9;r++)t.get(0,n,r)&&e.set(1,n,r,n===2&&r>1&&r<7?`#4d8ce0`:n===4?`#57524e`:`#1b2330`);return e.caixa(3,0,1,4,3,2,`#6f6960`),e.caixa(3,0,7,4,3,8,`#6f6960`),e.caixa(3,2,1,4,3,8,`#6f6960`),e}function va(){let e=new W(9,16,7);e.caixa(1,0,1,8,1,6,`#45434f`),e.caixa(2,0,2,7,1,5,`#1b2330`),e.caixa(1,1,1,2,4,6,`#6f6960`),e.caixa(7,1,1,8,4,6,`#6f6960`),e.caixa(1,1,1,8,4,2,`#6f6960`),e.caixa(4,1,0,5,10,1,`#57524e`);for(let t=-3;t<=3;t++)for(let n=-3;n<=3;n++)Math.abs(n)+Math.abs(t)<=3&&e.set(4+n,12+t,0,`#d9573b`);for(let[t,n]of[[-1,-1],[-1,0],[-1,1],[0,0],[1,-1],[1,0],[1,1]])e.set(4+t,12+n,0,`#ffffff`);return e}function ya(){let e=new W(7,3,14);return e.caixa(1,0,2,6,1,12,`#7f5230`),e.caixa(0,1,2,7,3,12,`#a8703f`),e.caixa(1,1,3,6,3,11,null),e.caixa(2,1,0,5,3,2,`#a8703f`),e.caixa(2,1,12,5,3,14,`#a8703f`),e.caixa(1,2,6,6,3,7,`#5a3a24`),e.caixa(0,2,2,7,3,3,`#efeae0`),e.caixa(0,2,7,1,3,12,`#c98a4b`),e.caixa(6,2,7,7,3,12,`#c98a4b`),e}function ba(){let e=new W(24,15,12),t=(e,t)=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};for(let n=0;n<12;n++)for(let r=0;r<24;r++){let i=(r+.5-12)/12,a=Math.sqrt(Math.max(0,1-i*i)),o=Math.round(15*a*(.62+.38*(1-n/12))-t(r>>1,n>>1)*2);for(let i=0;i<o;i++)e.set(r,i,n,i===o-1?t(r,n)>.55?`#5e9a3a`:`#3f7430`:(r*3+i*5+n)%9==0?`#57524e`:i>o-4?`#8d877f`:`#77716a`)}for(let t=0;t<8;t++)for(let n=0;n<24;n++){let r=t<5?3.5:3.5-(t-4)*.9;if(!(Math.abs(n+.5-12)>r))for(let r=6;r<12;r++)e.set(n,t,r,r===6?`#0d0f1a`:t===0?`#57524e`:null)}return e}function xa(){let e=new W(7,12,4);e.caixa(1,0,1,2,11,2,`#57524e`),e.caixa(2,7,1,7,11,2,`#d9573b`);for(let t=0;t<5;t++)e.set(2+t,7+Math.min(3,t),1,`#ffffff`);return e.set(6,10,1,`#ffffff`),e.caixa(3,0,1,5,4,3,`#e0a030`),e.caixa(3,4,2,4,5,3,`#1b2330`),e}var Sa=(e,t)=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};function Ca(){let e=new W(46,42,22),t=(e,t)=>{let n=(e>>2)%6;return n===1||n===4?`#a39d95`:n===3?`#b07a58`:`#b8b0a0`},n=0;for(let[r,i]of[[5,1],[10,.9],[15,.62]])for(let a=4;a<43;a+=4.2){n++;let o=a+(Sa(n,1)-.5)*1.6,s=r+(Sa(n,2)-.5)*2,c=1-Math.abs(o-23)/23,l=Math.round((12+c*28)*i*(.8+Sa(n,3)*.2)),u=1.5+Sa(n,4)*.8;for(let r=0;r<l;r++){let i=l-r,a=i<u+1?Math.sqrt(Math.max(0,u*u-(u+1-i)**2))+.3:u;for(let i=Math.floor(s-a);i<=Math.ceil(s+a);i++)for(let c=Math.floor(o-a);c<=Math.ceil(o+a);c++)Math.hypot(c+.5-o,i+.5-s)<=a&&e.set(c,r,i,t(r,n))}}for(let n=2;n<19;n++)for(let r=1;r<45;r++){let i=((r+.5-23)/22)**2+((n+.5-11+1)/9)**2;if(i>1)continue;let a=Math.round((1-i)*9+Sa(r>>1,n>>1)*2);for(let i=0;i<a;i++)e.get(r,i,n)||e.set(r,i,n,t(i,r))}for(let t=16;t<22;t++)for(let n=1;n<45;n++){if(Sa(n,t)<.5)continue;let r=1+Math.floor(Sa(t,n)*3);for(let i=0;i<r;i++)e.get(n,i,t)||e.set(n,i,t,Sa(n+i,t)>.5?`#2f5f2d`:`#3f7430`)}e.caixa(18,0,14,29,6,20,`#8d877f`),e.caixa(19,6,15,28,11,19,`#efeae0`),e.caixa(19,11,15,28,12,19,`#d9573b`),e.caixa(26,11,15,28,16,17,`#efeae0`),e.caixa(26,16,15,28,17,17,`#d9573b`);for(let t of[20,22,24])e.set(t,8,18,`#1b2330`);return e}function wa(){let e=new W(24,54,20),t=(e,t)=>(e+t)%4==0?`#b3a077`:`#d6c49a`;for(let n=0;n<12;n++)for(let r=5;r<15;r++)for(let i=6;i<18;i++)n>9&&(i<8||i>15)||e.set(i,n,r,n>=11?`#b3a077`:t(i,n));e.caixa(10,6,14,14,9,15,`#5d7fa6`),e.caixa(10,0,14,14,4,15,`#5a3a24`);let n=(t,n,r,i)=>{for(let i=0;i<r;i++){let a=+(i<r*.7);e.caixa(t-a,i,n-a,t+1+a,i+1,n+1+a,i%3==0?`#b3a077`:`#d6c49a`),a&&i%5==2&&e.set(t,i,n+1,`#57524e`)}e.caixa(t,r,n,t+1,r+3,n+1,i),e.set(t,r+3,n,`#efeae0`)};n(7,14,36,`#e0a030`),n(10,15,41,`#d9573b`),n(13,15,41,`#4d8ce0`),n(16,14,36,`#e0a030`),n(12,9,48,`#efeae0`),e.caixa(12,51,9,13,54,10,`#efeae0`),e.caixa(11,52,9,14,53,10,`#efeae0`);let r=(t,n,r,i)=>{e.caixa(t,0,n,t+1,r,n+1,`#e0a030`);let a=i>0?t-3:t-9;e.caixa(a,r,n,a+13,r+1,n+1,`#e0a030`),e.caixa(i>0?a:a+11,r-1,n,i>0?a+2:a+13,r,n+1,`#57524e`);for(let t=r-1;t>r-6;t--)e.set(i>0?a+12:a,t,n,`#1b2330`)};r(3,7,44,1),r(20,11,38,-1);for(let t=1;t<23;t++)for(let n of[1,18])for(let r=0;r<2;r++)e.set(t,r,n,(t>>1)%2==0?`#e0a030`:`#efeae0`);for(let t=1;t<19;t++)for(let n of[1,22])for(let r=0;r<2;r++)e.set(n,r,t,(t>>1)%2==0?`#e0a030`:`#efeae0`);return e.caixa(10,0,18,14,2,19,null),e}function Ta(e,t){let n=new W(e,4,t);for(let r=0;r<t;r++)for(let i=0;i<e;i++){let a=i===0||r===0||i===e-1||r===t-1;n.caixa(i,0,r,i+1,4,r+1,a?`#948c7e`:((i>>2)+(r>>2))%2==0?`#ddd6c7`:`#b8b0a0`)}return n}function Ea(){let e=new W(14,13,11);for(let t=0;t<7;t++)for(let n=1;n<10;n++)for(let r=1;r<13;r++)r>1&&r<12&&n>1&&n<9||e.set(r,t,n,(r*3+t*5+n)%7==0?`#6f6960`:(r+t)%3==0?`#77716a`:`#8d877f`);for(let t=0;t<6;t++)e.caixa(0,7+t,t,14,8+t,11-t,t%2==0?`#45434f`:`#57524e`);return e.caixa(5,0,9,8,5,10,`#7f5230`),e.set(7,2,9,`#e0a030`),e.caixa(9,2,9,11,4,10,`#86b9ee`),e.caixa(1,7,9,13,8,10,`#57524e`),e.caixa(10,9,3,12,14,5,`#77716a`),e}function Da(e,t,n){let r=new W(e,2,t),i=(n,r)=>{let i=(n+.5-e/2)/(e/2),a=(r+.5-t/2)/(t/2),o=.78+.16*Math.sin(Math.atan2(a,i)*3+1)+.06*Math.sin(Math.atan2(a,i)*7);return i*i+a*a<=o*o};for(let a=0;a<t;a++)for(let t=0;t<e;t++)if(i(t,a)){let e=n?Sa(t,a)>.85?`#86b9ee`:Sa(t>>1,a>>1)>.5?`#e8ebf2`:`#a8d4f5`:Sa(t,a)>.9?`#a8d4f5`:Sa(t>>2,a>>2)>.6?`#2f64b0`:`#1d3f73`;r.set(t,0,a,e)}else(i(t-1,a)||i(t+1,a)||i(t,a-1)||i(t,a+1))&&(r.set(t,0,a,`#8d877f`),Sa(t,a)>.6&&r.set(t,1,a,`#77716a`));return{voxels:r,aigua:i}}function Oa(){let e=new W(25,12,7);return ka(e,0,`roses`),ka(e,13,`llibres`),e}function ka(e,t,n){for(let n of[1,10])for(let r of[1,5])e.caixa(t+n,0,r,t+n+1,4,r+1,`#7f5230`);e.caixa(t,4,0,t+12,5,7,`#efeae0`);for(let n of[0,11])e.caixa(t+n,5,0,t+n+1,10,1,`#7f5230`);for(let n=0;n<12;n++)e.caixa(t+n,10,0,t+n+1,11,7,n%3==1?`#d9573b`:`#e0a030`);for(let r=1;r<11;r++)for(let i=1;i<6;i++)if(n===`roses`)Sa(r,i)>.45&&(e.set(t+r,5,i,`#3f7430`),e.set(t+r,6,i,Sa(i,r)>.2?`#d9573b`:`#a83c32`));else{let n=[`#4d8ce0`,`#e8735a`,`#8e5bd6`,`#5e9a3a`,`#b37a1c`][(r*7+i*3)%5];e.caixa(t+r,5,i,t+r+1,6+(r+i)%2,i+1,n)}}function Aa(){let e=new W(9,12,16);for(let[t,n]of[[2,4],[6,4],[2,10],[6,10]])e.caixa(t,0,n,t+1,4,n+1,`#1b2330`);e.caixa(1,4,2,8,8,13,`#3f7430`),e.caixa(1,4,2,8,5,13,`#2f5f2d`);for(let t=3;t<13;t+=2)e.set(4,8,t,`#d9573b`);return e.caixa(0,7,5,1,10,10,`#5e9a3a`),e.caixa(8,7,5,9,10,10,`#5e9a3a`),e.caixa(3,7,13,6,10,15,`#3f7430`),e.caixa(2,9,14,7,12,16,`#3f7430`),e.caixa(3,9,15,6,10,16,`#f5d27a`),e.set(3,11,15,`#e0a030`),e.set(5,11,15,`#e0a030`),e.caixa(4,5,0,5,6,2,`#3f7430`),e}var ja={jaqueta:`#1b2330`,vora:`#a83c32`,pantalons:`#1b2330`,sabates:`#1b2330`,pell:`#f1c7a3`,cabell:`#a83c32`,barret:{tipus:`gorra`,color:`#a83c32`}},Ma={jaqueta:`#4d8ce0`,vora:`#1b2330`,pantalons:`#efeae0`,sabates:`#e6d6ad`,pell:`#f1c7a3`,cabell:`#5a3a24`},Na={...Ma,barret:{tipus:`gorra`,color:`#efeae0`}};function Pa(){let e=new W(1,8,1);return e.caixa(0,0,0,1,6,1,`#5a3a24`),e.caixa(0,6,0,1,8,1,`#f5d27a`),e}function Fa(){let e=new W(1,5,1);return e.caixa(0,0,0,1,4,1,`#4d8ce0`),e.set(0,4,0,`#f1c7a3`),e}var Ia={0:[`###`,`#.#`,`#.#`,`#.#`,`###`],1:[`.#.`,`##.`,`.#.`,`.#.`,`###`],2:[`###`,`..#`,`###`,`#..`,`###`],3:[`###`,`..#`,`.##`,`..#`,`###`],4:[`#.#`,`#.#`,`###`,`..#`,`..#`],5:[`###`,`#..`,`###`,`..#`,`###`],6:[`###`,`#..`,`###`,`#.#`,`###`],7:[`###`,`..#`,`.#.`,`.#.`,`.#.`],8:[`###`,`#.#`,`###`,`#.#`,`###`],9:[`###`,`#.#`,`###`,`..#`,`###`]};function La(e,t,n,r,i,a){[...t].forEach((t,o)=>Ia[t]?.forEach((t,s)=>[...t].forEach((t,c)=>{t===`#`&&e.set(r+o*4+c,i+4-s,n,a)})))}function Ra(){let e=new W(12,16,8);e.caixa(0,6,0,12,7,8,`#a8703f`);for(let[t,n]of[[0,0],[11,0],[0,7],[11,7]])e.caixa(t,0,n,t+1,6,n+1,`#7f5230`);return e.caixa(0,7,1,7,15,6,`#45434f`),e.caixa(1,8,6,6,14,7,`#1b2330`),e.caixa(2,9,6,5,13,7,`#4d8ce0`),e.set(2,11,6,`#a8d4f5`),e.set(4,11,6,`#a8d4f5`),e.caixa(1,7,7,6,8,8,`#b8b0a0`),e.caixa(8,7,2,12,12,6,`#e6d6ad`),e.caixa(9,8,5,11,11,6,`#1b2330`),e.caixa(9,10,5,11,11,6,`#5e9a3a`),e.set(9,8,5,`#5e9a3a`),e.caixa(8,7,6,12,8,8,`#948c7e`),e}function za(e){let t=new W(24,17,21);for(let e of[2,21])t.caixa(e,0,1,e+1,16,2,`#7f5230`);t.caixa(2,5,2,22,16,3,`#7f5230`),t.caixa(3,6,2,21,15,3,`#214225`),t.caixa(3,5,3,21,6,4,`#b8b0a0`);let n=`#efeae0`;for(let e=4;e<20;e++)t.set(e,12+Math.round(Math.sin((e-4)*.8)*1.4),2,n);for(let r=0;r<Math.min(6,e);r++){let e=10-r%3*2,i=r<3?4:12;t.caixa(i,e,2,i+4+r%2*2,e+1,3,n)}for(let e of[7,14])for(let n of[4,14]){t.caixa(n,4,e,n+6,5,e+3,`#c98a4b`);for(let r of[n,n+5])for(let n of[e,e+2])t.caixa(r,0,n,r+1,4,n+1,`#57524e`);t.caixa(n+1,2,e+4,n+5,3,e+6,`#a8703f`),t.caixa(n+1,3,e+6,n+5,6,e+7,`#a8703f`);for(let r of[n+1,n+4])t.caixa(r,0,e+5,r+1,2,e+6,`#57524e`)}return t}function Ba(e,t){let n=new W(e,9,12);for(let t=3;t<e-6;t+=5){let e=6+t*7%3-1;n.caixa(t,0,e,t+3+t%2,1,e+3,t%3==0?`#a39d95`:`#b8b0a0`)}for(let{any:r,x:i}of t){let t=Math.max(0,Math.min(e-9,Math.round(i)-4));n.caixa(t,0,1,t+9,1,5,`#948c7e`),n.caixa(t+1,1,2,t+8,7,4,`#efeae0`),n.caixa(t+1,7,2,t+8,8,4,`#e0a030`),n.caixa(t+2,8,2,t+7,9,4,`#e0a030`),La(n,String(r%100).padStart(2,`0`),3,t+1,1,`#1b2330`)}return n}function Va(e){let t=new W(6,5,1);t.caixa(0,0,0,6,5,1,`#7f5230`),t.caixa(1,1,0,5,4,1,`#2f64b0`);let n=`#e8ebf2`;return e%3==0?t.caixa(1,2,0,5,3,1,n):e%3==1?t.caixa(2,1,0,3,4,1,n):(t.set(1,1,0,n),t.set(2,2,0,n),t.set(3,3,0,n)),t}var Ha=(e,t)=>{let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)};function Ua(e,t,n,r,i,a,o=3,s=4){for(let c=r;c+2<=i;c+=s)for(let r=t;r+1<=n;r+=o)e.caixa(r,c,a,r+1,c+2,a+1,`#3f4a5a`)}function Wa(){let e=new W(40,34,22);e.caixa(0,0,13,40,1,19,`#2f64b0`),e.caixa(0,0,12,40,2,13,`#948c7e`),e.caixa(0,0,19,40,2,22,`#b8b0a0`);let t=[`#e0a030`,`#d9573b`,`#f4d2a8`,`#e9b98a`,`#b65e42`,`#f5d27a`,`#d3976a`],n=0;for(let r=0;n<40;r++){let i=5+Math.floor(Ha(r,1)*3),a=13+Math.floor(Ha(r,2)*8),o=Math.min(40,n+i);e.caixa(n,0,2,o,a,12,t[r%t.length]),e.caixa(n,a,3,o,a+1,12,`#b65e42`),Ua(e,n+1,o-1,4,a-1,11,2,4),n=o}e.caixa(28,0,0,34,30,3,`#d6c49a`),e.caixa(29,30,0,33,32,3,`#b3a077`),e.caixa(30,24,2,32,27,3,`#3f4a5a`),e.caixa(6,2,12,12,3,22,`#a83c32`);for(let t=12;t<22;t+=2)for(let n of[6,11])e.caixa(n,3,t,n+1,5,t+1,`#a83c32`);return e.caixa(6,5,12,7,6,22,`#a83c32`),e.caixa(11,5,12,12,6,22,`#a83c32`),e}function Ga(){let e=new W(34,10,26),[t,n]=[17,13];for(let r=0;r<26;r++)for(let i=0;i<34;i++){let a=Math.hypot((i+.5-t)/17,(r+.5-n)/13);if(a>1)continue;if(a<.45){e.set(i,0,r,`#e6d6ad`);continue}let o=Math.floor((a-.45)/.11),s=1+o,c=r>n+6&&Ha(i,r)>.55?2:0;e.caixa(i,0,r,i+1,Math.max(1,s-c),r+1,o%2?`#b3a077`:`#d6c49a`)}for(let t of[0,31])e.caixa(t,1,n-1,t+3,4,n+2,null);return e}function Ka(){let e=new W(30,40,26);for(let t=0;t<26;t++)for(let n=0;n<30;n++){let r=Math.hypot((n+.5-15)/15,(t+.5-13)/13);if(r>1)continue;let i=Math.round((1-r*r)*8);e.caixa(n,0,t,n+1,i,t+1,r>.8?`#b3a077`:`#5e9a3a`)}e.caixa(4,6,6,26,9,20,`#d6c49a`),e.caixa(8,9,8,22,17,16,`#d6c49a`),e.caixa(8,17,9,22,18,15,`#b3a077`),e.caixa(13,17,10,17,22,14,`#d6c49a`),e.caixa(14,22,11,16,23,13,`#b3a077`);for(let t=10;t<21;t+=3)e.caixa(t,12,16,t+1,15,17,`#3f4a5a`);for(let t=9;t<36;t++){e.caixa(2,t,9,8,t+1,15,t%6==0?`#b3a077`:`#d6c49a`);for(let[n,r]of[[2,9],[7,9],[2,14],[7,14]])e.set(n,t,r,null)}for(let t of[24,30])e.caixa(4,t,14,6,t+3,15,`#3f4a5a`);return e.caixa(3,36,10,7,38,14,`#b3a077`),e}function qa(){let e=new W(34,18,32);e.caixa(0,0,0,34,1,32,`#ddd6c7`);let t=(t,n,r,i,a)=>{e.caixa(t,0,n,r,14,i,a),e.caixa(t,14,n,r,15,i,`#b65e42`)};t(0,0,34,8,`#e9b98a`),t(0,8,8,32,`#f4d2a8`);for(let t=9;t<33;t+=4)e.caixa(t,1,7,t+3,5,8,null),e.caixa(t,1,5,t+3,5,7,null);for(let t=9;t<31;t+=4)e.caixa(7,1,t,8,5,t+3,null),e.caixa(5,1,t,7,5,t+3,null);Ua(e,10,33,7,13,7,4,3);for(let t=10;t<31;t+=4)for(let n of[7,10])e.caixa(7,n,t,8,n+2,t+1,`#3f4a5a`);for(let[t,n,r]of[[14,16,`#d9573b`],[22,16,`#e0a030`],[14,24,`#4d8ce0`],[22,24,`#5e9a3a`]]){e.caixa(t,1,n,t+6,3,n+3,`#a8703f`),e.caixa(t,5,n-1,t+6,6,n+4,r);for(let r of[t,t+5])e.caixa(r,3,n-1,r+1,5,n,`#7f5230`)}return e}function Ja(){let e=new W(38,28,30),t=`#d6c49a`;for(let n=0;n<30;n++)for(let r=0;r<38;r++)r>0&&n>0&&r<37&&n<29||(e.caixa(r,0,n,r+1,6,n+1,t),(r+n)%2==0&&e.set(r,6,n,t));for(let t of[14,21])e.caixa(t,0,27,t+3,10,30,`#b3a077`);e.caixa(17,0,29,21,5,30,null),e.caixa(17,5,29,21,6,30,`#7f5230`),e.caixa(8,0,6,30,14,16,t),e.caixa(8,14,7,30,15,15,`#b3a077`),e.caixa(16,14,8,22,20,14,t),e.caixa(17,20,9,21,21,13,`#b3a077`),e.caixa(26,0,4,31,24,9,t),e.caixa(27,24,5,30,26,8,`#b3a077`),e.caixa(27,18,8,30,21,9,`#3f4a5a`),e.caixa(10,0,17,26,1,25,`#5e9a3a`);for(let n=10;n<26;n+=3)e.caixa(n,0,24,n+1,5,25,t);return e.caixa(10,5,24,26,6,25,`#b3a077`),e.caixa(18,8,16,20,10,17,`#5d7fa6`),e}function Ya(){let e=new W(20,24,18);for(let t=0;t<18;t++)for(let n=0;n<20;n++){let r=Math.hypot((n+.5-10)/10,(t+.5-9)/9);if(r>1||Ha(n,t)>1-r*.6)continue;let i=Math.max(1,Math.round((1-r)*7+Ha(t,n)*3));e.caixa(n,0,t,n+1,i,t+1,Ha(n>>1,t>>1)>.5?`#77716a`:`#57524e`)}return e.caixa(5,4,6,15,10,13,`#efeae0`),e.caixa(5,10,6,15,11,13,`#b8b0a0`),e.caixa(8,5,12,10,8,13,`#3f4a5a`),e.caixa(12,5,12,14,8,13,`#3f4a5a`),e.caixa(6,4,12,7,8,13,`#7f5230`),e.caixa(8,10,7,12,18,11,`#efeae0`),e.caixa(7,18,6,13,19,12,`#1b2330`),e.caixa(9,19,8,11,21,10,`#f5d27a`),e.caixa(8,21,7,12,22,11,`#57524e`),e}function Xa(){let e=new W(34,22,24);for(let t=0;t<24;t++)for(let n=0;n<34;n++){let r=Math.max(0,Math.round(6-Math.abs(t-8)*.5-Math.abs(n-17)*.15+Ha(n,t)*1.5));r>0?e.caixa(n,0,t,n+1,r,t+1,r>3?`#8d877f`:`#a39d95`):e.set(n,0,t,`#ecd9a0`)}e.caixa(3,5,14,31,11,16,`#d6c49a`);for(let t=3;t<31;t+=2)e.set(t,11,15,`#d6c49a`);let t=(t,n,r)=>{for(let i=3;i<r;i++)for(let a=n-2;a<=n+2;a++)for(let o=t-2;o<=t+2;o++)Math.hypot(o-t,a-n)<=2.3&&e.set(o,i,a,i===r-1?`#b3a077`:`#d6c49a`)};for(let[e,n]of[[4,15],[13,17],[22,15],[30,18]])t(e,15,n);return e.caixa(15,6,5,22,12,12,`#efeae0`),e.caixa(15,12,5,22,13,12,`#b65e42`),e.caixa(17,13,7,20,18,10,`#efeae0`),e.caixa(17,18,7,20,19,10,`#f5d27a`),e}function Za(){let e=new W(32,16,30);for(let t=0;t<30;t++)for(let n=0;n<32;n++){let r=Math.hypot((n+.5-16)/16,(t+.5-15)/15);if(r>1)continue;let i=Math.round(Math.min(14,(1-r)*20)),a=t>17&&Math.abs(n-16)<7;for(let r=0;r<i;r++){let o=a?Math.floor(r/2)%3==0?`#1b2330`:Math.floor(r/2)%3==1?`#a83c32`:`#6e2a2f`:r===i-1?Ha(n,t)>.4?`#3f7430`:`#2f5f2d`:`#5e4636`;e.set(n,r,t,o)}if(a)for(let r=Math.max(1,i-3);r<i;r++)e.set(n,r,t,null)}return e}var Qa={girona:Wa,tarragona:Ga,lleida:Ka,vic:qa,poblet:Ja,"cap-creus":Ya,tossa:Xa,croscat:Za},$a=(e,t,n)=>Math.min(n,Math.max(t,e)),eo=(e,t,n)=>{let r=$a((n-e)/(t-e),0,1);return r*r*(3-2*r)};function to(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function no(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=to(n,r),l=to(n+1,r),u=to(n,r+1),d=to(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function ro(e,t,n){let r=e.angle*Math.PI/180,i=t-e.x,a=n-e.z;return{a:i*Math.cos(r)-a*Math.sin(r),b:-i*Math.sin(r)-a*Math.cos(r)}}function io(e,t,n){let{a:r,b:i}=ro(e,t,n),a=e.llargada/2,o=r/a,s=e.ampleCarena,c=1-eo(.78,1.12,Math.abs(o)),l=(e,t,n)=>{let r=$a(1-.42*Math.abs(o-t)**1.5,0,1)*c,a=Math.max(0,1-Math.abs(i-e)/s);return n*r*a},u=l(e.separacio/2,e.cimSuperior,e.alcadaSuperior),d=l(-e.separacio/2,e.cimInferior,e.alcadaInferior),f=$a(1-Math.abs(o-.02)*.85,0,1),p=Math.max(0,1-(Math.abs(i)/(e.separacio/2+s*.35))**2),m=e.alcadaEnforcadura*f*p*(1-eo(.95,1.35,Math.abs(o))),h=r/(a+e.faldes),g=i/(e.separacio/2+s+e.faldes),_=e.alcadaFaldes*(1-eo(.25,1,Math.hypot(h,g))),v=Math.max(u,d,m,_);if(v<=0)return 0;let y=eo(e.alcadaFaldes,e.alcadaFaldes+.6,v);return v+(no(t*2.3,n*2.3)-.5)*2*e.rugositat*y}function ao(e){let t=e.angle*Math.PI/180,n=e.llargada/2+e.faldes,r=e.separacio/2+e.ampleCarena+e.faldes,i=Math.abs(Math.cos(t))*n+Math.abs(Math.sin(t))*r,a=Math.abs(Math.sin(t))*n+Math.abs(Math.cos(t))*r;return{x0:e.x-i,z0:e.z-a,x1:e.x+i,z1:e.z+a}}function oo(e,t,n){return io(e,t,n)>e.alcadaFaldes*.9}function so(e){let t=e.angle*Math.PI/180,n=e.llargada/2,r=(n,r)=>({x:e.x+n*Math.cos(t)-r*Math.sin(t),z:e.z-n*Math.sin(t)-r*Math.cos(t)});return[{id:`cim-superior`,metres:2506,...r(e.cimSuperior*n,e.separacio/2)},{id:`cim-inferior`,metres:2445,...r(e.cimInferior*n,-e.separacio/2)}]}function co(){let e=so(Ii.pedraforca).map(e=>({...e})),t=Ii.props.filter(e=>e.model===`cim`&&e.id&&e.metres).map(e=>({id:e.id,metres:e.metres,x:e.x,z:e.z}));return[...e,...t]}var lo=64,uo=4,fo=class{textura;ctx;constructor(){let e=document.createElement(`canvas`);e.width=e.height=256,this.ctx=e.getContext(`2d`),this.textura=new it(e),this.textura.magFilter=G,this.textura.minFilter=G,this.textura.generateMipmaps=!1,this.textura.colorSpace=ct}static get capacitat(){return 16}static uv(e){let t=e%uo,n=Math.floor(e/uo);return[t/uo,1-(n+1)/uo,(t+1)/uo,1-n/uo]}posa(e,t,n){let r=new Image;r.onload=()=>{let t=r.naturalWidth/r.naturalHeight,[i,a]=[r.naturalWidth,r.naturalHeight];t>n?i=a*n:a=i/n;let[o,s]=this.origen(e);this.ctx.imageSmoothingEnabled=!0,this.ctx.drawImage(r,(r.naturalWidth-i)/2,(r.naturalHeight-a)/2,i,a,o,s,lo,lo),this.textura.needsUpdate=!0},r.src=t}tapa(e){let[t,n]=this.origen(e),r=this.ctx;r.fillStyle=`#1b2330`,r.fillRect(t,n,lo,lo),r.fillStyle=`#5e4636`,r.fillRect(t,n+12,lo,40),r.fillStyle=`#e8ebf2`;for(let e=t+4;e<t+lo;e+=12)r.fillRect(e,n+3,6,5),r.fillRect(e,n+lo-8,6,5);r.fillStyle=`#e0a030`,r.fillRect(t+26,n+22,12,4),r.fillRect(t+34,n+26,4,6),r.fillRect(t+30,n+32,4,4),r.fillRect(t+30,n+38,4,4),this.textura.needsUpdate=!0}origen(e){return[e%uo*lo,Math.floor(e/uo)*lo]}},po=1.5,mo=[`far`,`antena`,`montserrat`,`sagrada-familia`,`cova`,`monument`],ho=.14,go=`/mon/relleu.bin.gz`,_o={magia:`RLL1`,capcalera:16,escala:256},vo={terra:1,riu:2,esplanada:4,moll:8,illa2:16,cami:32},yo={cotaPlatja:.32,costaPlatja:1.1,cotaPrat:4.1,cotaRoca:4.7,cotaNeu:5.55,pendentRoca:.42,pendentTerra:.3},bo=4,xo=class e{cel=new Map;vistes=new Set;mida=0;transforma=null;static clau(e,t){return(t+4096)*8192+(e+4096)}afegeix(t){let n=this.transforma?this.transforma(t):t;this.mida++;for(let t=Math.floor(n.z0/bo);t<=Math.floor(n.z1/bo);t++)for(let r=Math.floor(n.x0/bo);r<=Math.floor(n.x1/bo);r++){let i=e.clau(r,t),a=this.cel.get(i);a?a.push(n):this.cel.set(i,[n])}}recorre(t,n,r,i,a){this.vistes.clear();for(let o=Math.floor(n/bo);o<=Math.floor(i/bo);o++)for(let n=Math.floor(t/bo);n<=Math.floor(r/bo);n++){let t=this.cel.get(e.clau(n,o));if(t){for(let e of t)if(!this.vistes.has(e)&&(this.vistes.add(e),a(e)))return!0}}return!1}toca(e,t,n){return this.recorre(e-n,t-n,e+n,t+n,r=>e+n>r.x0&&e-n<r.x1&&t+n>r.z0&&t-n<r.z1)}talla(e,t,n,r,i){return this.recorre(Math.min(e,n)-i,Math.min(t,r)-i,Math.max(e,n)+i,Math.max(t,r)+i,a=>So(e,t,n,r,a.x0-i,a.z0-i,a.x1+i,a.z1+i))}};function So(e,t,n,r,i,a,o,s){let c=0,l=1,u=[n-e,r-t],d=[e,t],f=[i,a],p=[o,s];for(let e=0;e<2;e++)if(Math.abs(u[e])<1e-9){if(d[e]<=f[e]||d[e]>=p[e])return!1}else{let t=(f[e]-d[e])/u[e],n=(p[e]-d[e])/u[e];if(t>n&&([t,n]=[n,t]),c=Math.max(c,t),l=Math.min(l,n),c>l)return!1}return!0}function Co(e,t){let n=Math.sin(e*269.5+t*183.3)*43758.5453;return n-Math.floor(n)}function wo(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Co(n,r),l=Co(n+1,r),u=Co(n,r+1),d=Co(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}function To(e,t){return wo(e,t)*.65+wo(e*2.7+17.3,t*2.7-8.1)*.35}function Eo(e,t,n,r,i){if(n<yo.cotaPlatja+.12||n>yo.cotaPrat+.25||r>yo.pendentRoca||i<yo.costaPlatja)return 0;let a=Math.min(1,Math.max(0,(n-.7)/1.4))*(1-Math.max(0,(n-yo.cotaPrat)/.3)),o=(To(e*.16,t*.16)-.62+a*.38)*3.2;return Math.min(1,Math.max(0,o))}var Do=3,Oo=-.2;function ko(e,t){let n=new C;n.name=`terreny`;for(let r=0;r<e.fons;r+=16)for(let i=0;i<e.ample;i+=16){let a=Ao(e,i,r,Math.min(i+16,e.ample),Math.min(r+16,e.fons));if(!a)continue;let o=new H(a.geometria,t);o.castShadow=a.detall,o.receiveShadow=!0,o.name=`terreny`,n.add(o)}return n}function Ao(e,t,n,r,i){let a=e.mostres,o=a*Do,s=e.caixaPedraforca,c=1/a,l=new Map,u=[],d=[],f=[],p=[],m=[],h=[],g=(t,n)=>{let r=n*65536+t,i=l.get(r);if(i!==void 0)return i;let a=t/o,s=n/o,c=e.altura(a,s),h=io(e.pedraforca,a,s)>0,g=e.normal(a,s,h?.08:.25),_=e.distCosta(a,s),v=u.length/3;u.push(a,c,s),d.push(g[0],g[1],g[2]),f.push(_),p.push(Eo(a,s,c,1-g[1],_));let y=e.mascaraA(a,s);return m.push(oo(e.pedraforca,a,s)?2:y&vo.esplanada?1:y&vo.cami?3:0),l.set(r,v),v},v=(e,t,n)=>{let r=g(e,t),i=g(e+n,t),a=g(e+n,t+n),o=g(e,t+n),s=e=>u[e*3+1];Math.abs(s(r)-s(a))<Math.abs(s(i)-s(o))?h.push(r,o,a,r,a,i):h.push(r,o,i,i,o,a)},y=!1;for(let o=Math.round(n*a);o<Math.round(i*a);o++)for(let n=Math.round(t*a);n<Math.round(r*a);n++){let t=n*c,r=o*c;if(t+c>s.x0-c&&t<s.x1+c&&r+c>s.z0-c&&r<s.z1+c){y=!0;for(let e=0;e<Do;e++)for(let t=0;t<Do;t++)v(n*Do+t,o*Do+e,1)}else{let t=e.cotes,r=o*e.nx+n;if(Math.max(t[r],t[r+1],t[r+e.nx],t[r+e.nx+1])<Oo)continue;v(n*Do,o*Do,Do)}}if(!h.length)return null;let b=new F;return b.setAttribute(`position`,new _(u,3)),b.setAttribute(`normal`,new _(d,3)),b.setAttribute(`aCosta`,new _(f,1)),b.setAttribute(`aBosc`,new _(p,1)),b.setAttribute(`aZona`,new _(m,1)),b.setIndex(new Fe(h,1)),b.computeBoundingBox(),b.computeBoundingSphere(),{geometria:b,detall:y}}var jo=2048,Mo=new s(-18,30,14).normalize(),No=40,Po=3,Fo=4,Io=30,Lo=class{escena;sol=new ft(`#fff4e0`,2.4);cel=new x(`#dff0ff`,`#8a6a4f`,1.1);ambient=new nt(`#ffffff`,.35);direccioSol=Mo.clone();abastX=26;abastY=26;dreta=new s().crossVectors(new s(0,1,0),Mo).normalize();amunt=new s().crossVectors(Mo,this.dreta).normalize();senseOmbra=new Set;constructor(e){this.escena=e,e.add(this.cel,this.ambient);let t=this.sol;t.castShadow=!0,t.shadow.mapSize.set(jo,jo),t.shadow.camera.near=1,t.shadow.camera.far=100,t.shadow.bias=-8e-4,t.shadow.normalBias=.03,this.aplicaAbast(),e.add(t,t.target)}ajusta(e,t,n,r=45){let i=t/Math.sin(_e.degToRad(n)),a=_e.degToRad(r),o=new s(Math.cos(a),0,-Math.sin(a)),c=new s(-Math.sin(a),0,-Math.cos(a)),l=t=>Math.abs(o.dot(t))*(e/2)+Math.abs(c.dot(t))*(i/2);this.abastX=Math.min(Io,l(this.dreta)+Po),this.abastY=Math.min(Io,l(this.amunt)+Fo*this.amunt.y+Po),this.aplicaAbast()}aplicaAbast(){let e=this.sol.shadow.camera;e.left=-this.abastX,e.right=this.abastX,e.top=this.abastY,e.bottom=-this.abastY,e.updateProjectionMatrix()}ombresDeLluny(e){if(!e){for(let e of this.senseOmbra)e.castShadow=!0;this.senseOmbra.clear();return}this.escena.traverse(e=>{e.castShadow&&!e.userData.ombraDeLluny&&(e.castShadow=!1,this.senseOmbra.add(e))})}segueix(e,t,n){let r=2*this.abastX/jo,i=2*this.abastY/jo,a=new s(e,t,n),o=a.dot(this.dreta),c=a.dot(this.amunt);a.addScaledVector(this.dreta,Math.round(o/r)*r-o).addScaledVector(this.amunt,Math.round(c/i)*i-c),this.sol.target.position.copy(a),this.sol.position.copy(a).addScaledVector(Mo,No),this.sol.target.updateMatrixWorld(),this.sol.updateMatrixWorld()}};function Ro(){let e=new W(9,2,4);return e.caixa(0,1,1,9,2,3,`#ffffff`),e.caixa(0,1,1,1,2,3,`#57524e`),e.caixa(8,1,1,9,2,3,`#57524e`),e.caixa(3,0,0,6,2,4,`#e8ebf2`),e.set(4,1,3,`#e0a030`),e}function zo(){let e=new W(7,12,16);for(let t=0;t<16;t++){let n=t>12?Math.max(1,3-(t-12)):3;for(let r=3-n;r<=3+n;r++)e.set(r,0,t,`#2f64b0`),e.set(r,1,t,`#efeae0`),(r===3-n||r===3+n)&&e.set(r,2,t,`#efeae0`)}return e.caixa(1,2,3,6,6,8,`#efeae0`),e.caixa(2,4,8,5,5,8,`#86b9ee`),e.caixa(1,6,3,6,7,8,`#d9573b`),e.caixa(3,2,10,4,12,11,`#5a3a24`),e}function Bo(){let e=new W(3,5,12);return e.caixa(0,1,2,3,4,9,`#5a6988`),e.caixa(0,1,2,3,2,9,`#a39d95`),e.caixa(1,4,5,2,5,7,`#5a6988`),e.caixa(1,2,9,2,3,11,`#5a6988`),e.caixa(0,2,0,3,3,2,`#3a4466`),e}function Vo(e=!1){let t=new W(7,9,24);t.caixa(0,1,0,7,8,24,`#efeae0`),t.caixa(0,1,0,7,2,24,`#57524e`),t.caixa(0,3,0,7,4,24,`#e0a030`);for(let e=2;e<22;e+=4)t.caixa(0,5,e,1,7,e+2,`#3a4466`),t.caixa(6,5,e,7,7,e+2,`#3a4466`);return e&&(t.caixa(0,1,21,7,8,24,`#d9573b`),t.caixa(1,5,23,6,7,24,`#3a4466`)),t.caixa(1,0,3,6,1,6,`#1b2330`),t.caixa(1,0,18,6,1,21,`#1b2330`),t}function Ho(){let e=new W(7,9,14);e.caixa(0,1,0,7,8,14,`#d9573b`),e.caixa(0,5,1,7,7,13,`#efeae0`);for(let t=2;t<12;t+=3)e.caixa(0,5,t,1,7,t+2,`#3a4466`),e.caixa(6,5,t,7,7,t+2,`#3a4466`);return e.caixa(0,8,0,7,9,14,`#a83c32`),e.caixa(1,0,2,6,1,12,`#1b2330`),e}function Uo(){let e=new W(3,11,5);return e.caixa(1,0,2,2,5,3,`#a83c32`),e.caixa(0,5,1,3,7,5,`#e8735a`),e.caixa(1,7,3,2,10,4,`#e8735a`),e.caixa(1,9,4,2,10,5,`#1b2330`),e}function Wo(){let e=new W(7,9,7);e.caixa(3,0,3,4,8,4,`#efeae0`),e.caixa(0,7,0,7,8,7,`#d9573b`);for(let t=0;t<7;t+=2)e.caixa(t,7,0,t+1,8,7,`#ffffff`);return e.caixa(2,8,2,5,9,5,`#d9573b`),e}function Go(){let e=new W(4,2,8);return e.caixa(0,0,0,4,1,8,`#4d8ce0`),e.caixa(1,1,1,3,2,3,`#f1c7a3`),e.caixa(1,1,3,3,2,6,`#e0a030`),e.caixa(1,1,6,3,2,8,`#c98d6b`),e}function Ko(){let e=new W(7,9,7);return e.caixa(3,0,3,4,3,4,`#7f5230`),e.caixa(0,3,0,7,6,7,`#e8a878`),e.caixa(1,6,1,6,8,6,`#f7ebc4`),e}var qo=16;function Jo(e,t){let n=[],r=(e,t,n)=>{let r=Math.sin(e*12.9898+t*78.233+n*37.719)*43758.5453;return r-Math.floor(r)};for(let i=1;i<e.fons-1;i++)for(let a=1;a<e.ample-1;a++){let o=a+.15+r(a,i,1)*.7,s=i+.15+r(a,i,2)*.7;if(!e.trepitjable(o,s)||e.esMoll(o,s))continue;let c=e.altura(o,s),l=e.pendent(o,s),u=e.distCosta(o,s);if(c>yo.cotaRoca||l>yo.pendentRoca)continue;let d=Eo(o,s,c,l,u)>.5?.33:u>yo.costaPlatja?.035+.05*wo(o*.3,s*.3):0;if(r(a,i,3)>d||!t(o,s))continue;let f=c>2.2||e.illa(o,s)===2&&c>1.2||r(a,i,4)<.15;n.push({x:o,z:s,variant:+!!f,escala:.8+r(a,i,5)*.4})}return n}var Yo=[`#ff6a50`,`#ffae60`,`#ffe070`].map(e=>new l(e));function Xo(e){return[e?Ko():qe(),we()].map(e=>e.geometria(X,[-e.mida[0]*X/2,0,-e.mida[2]*X/2]))}function Zo(e){let t=new W(7,8,7);t.caixa(0,1,0,7,8,7,e?`#e8a878`:`#3f7d3c`);let n=new W(6,12,6);return n.caixa(0,1,0,6,11,6,`#2f5f2d`),[t,n].map(e=>e.geometria(X,[-e.mida[0]*X/2,0,-e.mida[2]*X/2]))}function Qo(e,t,n,r=!1,i=qo,a=!1){let o=new C;o.name=`vegetacio`;let c=a?Zo(r):Xo(r),l=new Map;for(let e of t){let t=`${Math.floor(e.x/i)},${Math.floor(e.z/i)}`,n=l.get(t);n||l.set(t,n=c.map(()=>[])),n[e.variant].push(e)}let u=new Xe;for(let t of l.values())t.forEach((t,i)=>{if(!t.length)return;let a=new fe(c[i],n,t.length);t.forEach((t,n)=>{u.makeRotationY(Math.floor(wo(t.x*3,t.z*3)*4)*(Math.PI/2)),u.scale(new s(t.escala,t.escala,t.escala)),u.setPosition(t.x,e.altura(t.x,t.z)-.02,t.z),a.setMatrixAt(n,u),r&&i===0&&a.setColorAt(n,Yo[Math.floor(wo(t.x*5.1,t.z*5.1)*Yo.length)%Yo.length])}),a.castShadow=!0,a.receiveShadow=!0,a.layers.set(1),a.computeBoundingSphere(),o.add(a)});return o}var $o={velocitat:5.5,marge:1.2},es={interval:.16,radi:.36,apagat:.55},ts=class{molls;ruta;onada;estela;grup=new C;llauts=[];viatge=null;rellotge=0;coberta;constructor(e,t,n,r,i){this.molls=e,this.ruta=t,this.onada=r,this.estela=i;let a=q();this.coberta=a.coberta;let[o,,s]=a.voxels.mida,c=a.voxels.geometria(X,[-o*X/2,-1.5*X,-s*X/2]);for(let[t,r]of e.entries()){let e=r.x1-r.x0,i=r.z1-r.z0,a=$e(Math.ceil(Math.hypot(e,i))),o=new H(a.geometria(X,[-4*X,0,0]),n);o.position.set(r.x0,ho-6*X,r.z0),o.rotation.y=Math.atan2(e,i),o.castShadow=!0,o.receiveShadow=!0,this.grup.add(o);let s=new C,l=new H(c,n);l.castShadow=!0,l.receiveShadow=!0,s.add(l),this.grup.add(s),this.llauts.push({grup:s,base:t,x:r.amarratge.x,z:r.amarratge.z,angle:r.amarratge.angle,foraDeCasa:!1})}}get viatjant(){return this.viatge!==null}puntEmbarcar(e){let t=e.x1-e.x0,n=e.z1-e.z0,r=Math.hypot(t,n);return{x:e.x1-t/r*.55,z:e.z1-n/r*.55}}salpa(e,t){if(this.viatge)return!1;let n=this.molls[e],r=this.llauts.find(e=>e.grup.visible&&Math.hypot(e.x-n.amarratge.x,e.z-n.amarratge.z)<3)??this.llauts[e],i=+(e===0),a=this.molls[i],o=(e===0?this.ruta:[...this.ruta].reverse()).map(([e,t])=>new s(e,0,t));o[0].set(r.x,0,r.z),o[o.length-1].set(a.amarratge.x,0,a.amarratge.z);let c=new oe(o,!1,`centripetal`),l=t?0:c.getLength()/$o.velocitat+$o.marge;return this.viatge={llaut:r,corba:c,t:0,durada:l,origen:e,desti:i,estela:0},r.foraDeCasa=r.base!==i,!0}actualitza(e,t,n){this.rellotge+=e;let r=null,i=this.viatge;if(i){i.t=Math.min(i.durada,i.t+e);let t=i.durada>0?i.t/i.durada:1,n=t*t*(3-2*t),a=i.corba.getPointAt(n),o=i.corba.getTangentAt(Math.min(.999,Math.max(.001,n)));if(i.llaut.x=a.x,i.llaut.z=a.z,i.llaut.angle=Math.atan2(o.x,o.z),i.estela-=e,i.estela<=0&&t<.97){i.estela=es.interval;for(let e=this.estela.length-1;e>0;e--)this.estela[e].copy(this.estela[e-1]);this.estela[0].set(a.x-o.x*1.4,a.z-o.z*1.4,es.radi,1)}let s=this.llauts[i.origen],c=this.molls[i.origen];s!==i.llaut&&!s.grup.visible&&Math.hypot(a.x-c.amarratge.x,a.z-c.amarratge.z)>3&&(s.grup.visible=!0);let l=this.llauts[i.desti],u=this.molls[i.desti];l!==i.llaut&&Math.hypot(a.x-u.amarratge.x,a.z-u.amarratge.z)<4&&(l.grup.visible=!1);let d=i.t>=i.durada;r={x:a.x,y:0,z:a.z,angle:i.llaut.angle,arribat:d,desti:u},d&&(this.viatge=null)}for(let t of this.estela)t.w=Math.max(0,t.w-e*es.apagat);for(let e of this.llauts){if(e.foraDeCasa&&this.viatge?.llaut!==e&&Math.hypot(t.x-e.x,t.z-e.z)>26){for(let t of this.llauts)t!==e&&(t.grup.visible=!0);let t=this.molls[e.base];e.x=t.amarratge.x,e.z=t.amarratge.z,e.angle=t.amarratge.angle,e.foraDeCasa=!1}let r=0+(n?0:this.onada(e.x,e.z));e.grup.position.set(e.x,r,e.z),e.grup.rotation.set(n?0:Math.sin(this.rellotge*1.1+e.base)*.03,e.angle,n?0:Math.sin(this.rellotge*1.3+e.base)*.04)}return r&&(r.y=this.viatge?this.coberta+this.onadaDe(r):this.coberta),r}onadaDe(e){return this.onada(e.x,e.z)}static coberta(e,t,n){let r=Math.sin(e.angle),i=Math.cos(e.angle);return{x:e.x+r*t+i*n,z:e.z+i*t-r*n}}},ns=`
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  float sorollValor(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash12(i);
    float b = hash12(i + vec2(1.0, 0.0));
    float c = hash12(i + vec2(0.0, 1.0));
    float d = hash12(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float bayer2(vec2 a) {
    a = floor(a);
    return fract(a.x / 2.0 + a.y * a.y * 0.75);
  }

  float bayer4(vec2 a) {
    return bayer2(0.5 * a) * 0.25 + bayer2(a);
  }
`,rs=`
  uniform float uTemps;
  uniform sampler2D uRelleu;
  /** x, z: mostres per unitat / mida de la textura; z, w: 0,5 / mida (centre del texel). */
  uniform vec4 uRelleuUv;
  /** Rang de la cota codificada a R: (mínim, màxim). */
  uniform vec2 uRelleuRang;
  uniform float uNivell;
  uniform vec2 uOnaDir[3];
  /** Per onada: amplitud (unitats), longitud d'ona (unitats), velocitat (unitats/s). */
  uniform vec3 uOnaParams[3];
  /** Distància a la costa (unitats) on les onades arriben a tota amplitud. */
  uniform float uEsmorteiment;

  vec4 relleu(vec2 xz) {
    return texture2D(uRelleu, xz * uRelleuUv.xy + uRelleuUv.zw);
  }
`,is=`
  ${rs}
  varying vec3 vMon;
  varying vec3 vNormalAigua;
  /** Alçada de l'onada respecte de l'amplitud màxima (−1 a 1): per a l'escuma de les crestes. */
  varying float vCresta;

  void main() {
    vec4 mon = modelMatrix * vec4(position, 1.0);
    vec4 r = relleu(mon.xz);
    // Les onades s'apaguen a tocar de la costa i al riu.
    float obert = smoothstep(0.2, uEsmorteiment, r.g * 16.0) * (1.0 - r.b);
    float y = 0.0;
    float ampleTotal = 0.0;
    vec2 gradient = vec2(0.0);
    for (int k = 0; k < 3; k++) {
      vec3 p = uOnaParams[k];
      float w = 6.2831853 / p.y;
      float fase = dot(uOnaDir[k], mon.xz) * w - uTemps * p.z * w;
      float a = p.x * obert;
      y += a * sin(fase);
      gradient += a * w * cos(fase) * uOnaDir[k];
      ampleTotal += p.x;
    }
    mon.y += y;
    vNormalAigua = normalize(vec3(-gradient.x, 1.0, -gradient.y));
    vCresta = y / max(ampleTotal, 1e-4);
    vMon = mon.xyz;
    gl_Position = projectionMatrix * viewMatrix * mon;
  }
`,as=`
  ${rs}
  ${ns}
  uniform vec3 uColorSomera;
  uniform vec3 uColorMitjana;
  uniform vec3 uColorFonda;
  uniform vec3 uColorAbisme;
  uniform vec3 uColorEscuma;
  /** Profunditats (unitats) de pas: somera → mitjana → fonda → abisme. */
  uniform vec3 uProfunditats;
  uniform float uFranges;
  /** x: gruix de l'escuma de costa (profunditat), y: línies per unitat, z: velocitat de les línies. */
  uniform vec3 uEscuma;
  /** Distància a la costa (unitats) fins on arriben les línies d'escuma. */
  uniform float uAbastEscuma;
  /** Cresta (0–1) a partir de la qual una onada fa escuma. */
  uniform float uCresta;
  uniform vec3 uSol;
  uniform vec3 uLlumSol;
  uniform vec3 uLlumAmbient;
  uniform float uBrillantor;
  uniform float uEspurnes;
  /** Color de les espurnes (blanc de dia; de nit, les estrelles reflectides). */
  uniform vec3 uColorEspurna;
  /** Reflex del cel: color i força (0–1). Vegeu ParametresAigua.reflexCel. */
  uniform vec3 uReflexCel;
  uniform float uForcaReflex;
  uniform float uMidaTexel;
  /** Estela del vaixell: fins a 8 punts (x, z, radi, intensitat). */
  uniform vec4 uEstela[8];

  varying vec3 vMon;
  varying vec3 vNormalAigua;
  varying float vCresta;

  void main() {
    // Tot el que és patró va enganxat a la graella de texels del món: píxels nets i estables.
    vec2 cel = floor(vMon.xz / uMidaTexel);
    vec2 p = (cel + 0.5) * uMidaTexel;
    vec4 r = relleu(p);
    float fons = mix(uRelleuRang.x, uRelleuRang.y, r.r);
    float prof = max(0.0, uNivell - fons);
    float distTerra = r.g * 16.0;
    float riu = r.b;

    // Color segons la profunditat, en franges (pixel art)
    float a = smoothstep(uProfunditats.x * 0.4, uProfunditats.x, prof);
    float b = smoothstep(uProfunditats.x, uProfunditats.y, prof);
    float c = smoothstep(uProfunditats.y, uProfunditats.z, prof);
    if (uFranges > 0.5) {
      a = floor(a * uFranges + 0.5) / uFranges;
      b = floor(b * uFranges + 0.5) / uFranges;
      c = floor(c * uFranges + 0.5) / uFranges;
    }
    vec3 color = mix(uColorSomera, uColorMitjana, a);
    color = mix(color, uColorFonda, b);
    color = mix(color, uColorAbisme, c);

    // Llum: difusa en dos esglaons i un reflex de sol dur
    vec3 n = normalize(vNormalAigua);
    float difusa = max(dot(n, uSol), 0.0);
    difusa = difusa > 0.92 ? 1.0 : 0.82;
    color *= uLlumAmbient + uLlumSol * difusa;
    vec3 v = normalize(cameraPosition - vMon);
    float especular = pow(max(dot(n, normalize(uSol + v)), 0.0), 90.0);
    color += step(0.55, especular) * uBrillantor * uLlumSol;
    // Reflex del cel, més fort on l'onada inclina l'aigua cap a la càmera (en dos esglaons)
    float reflex = uForcaReflex * (0.7 + 0.3 * step(0.5, dot(n, v)));
    color = mix(color, uReflexCel, reflex);

    // Escuma de costa: on l'aigua és molt poc fonda, amb la vora trencada pel soroll
    float s = sorollValor(p * 1.6 + vec2(uTemps * 0.21, -uTemps * 0.13));
    float escuma = 1.0 - step(uEscuma.x * (0.55 + 0.9 * s), prof);
    // Línies que arriben a la costa
    float fase = distTerra * uEscuma.y + uTemps * uEscuma.z + s * 1.2;
    float linia = step(0.82, fract(fase)) * (1.0 - smoothstep(0.35, uAbastEscuma, distTerra)) * (1.0 - riu);
    linia *= step(0.35, sorollValor(p * 0.9 - uTemps * 0.05));
    escuma = max(escuma, linia);
    // Crestes de les onades a mar obert
    escuma = max(escuma, step(uCresta, vCresta + (s - 0.5) * 0.25) * step(1.5, distTerra));
    // Estela del vaixell
    for (int k = 0; k < 8; k++) {
      vec4 e = uEstela[k];
      if (e.w <= 0.0) continue;
      float d = length(p - e.xy);
      escuma = max(escuma, step(d, e.z * (0.6 + 0.6 * s)) * step(0.35, e.w * s * 1.6));
    }
    color = mix(color, uColorEscuma, clamp(escuma, 0.0, 1.0));

    // Espurnes: texels que s'encenen i s'apaguen
    float llavor = hash12(cel);
    float espurna = step(1.0 - uEspurnes, fract(llavor * 13.0 + uTemps * (0.12 + llavor * 0.18)));
    color = mix(color, uColorEspurna, espurna * (1.0 - escuma) * step(0.3, prof) * 0.8);

    gl_FragColor = vec4(color, 1.0);
  }
`,os={colorSomera:`#7fd3c8`,colorMitjana:`#3fa7b5`,colorFonda:`#4d8ce0`,colorAbisme:`#2f64b0`,colorEscuma:`#ffffff`,profunditats:[.3,.75,1.7],franges:3,onades:[{direccio:[.8,.6],amplitud:.045,longitud:6.5,velocitat:.9},{direccio:[-.3,1],amplitud:.03,longitud:3.7,velocitat:.7},{direccio:[1,-.25],amplitud:.018,longitud:2.1,velocitat:.55}],esmorteiment:2.5,escuma:{gruix:.07,linies:1.1,velocitat:.35,abast:1.9},cresta:.8,brillantor:.55,espurnes:.02,reflexCel:{color:`#a8d4f5`,forca:.08}},ss=new pt(-2.8,1.2),cs=80;function ls(e){let{nx:t,nz:n}=e,r=new Uint8Array(t*n*4);for(let i=0;i<t*n;i++){let t=e.cotes[i];r[i*4]=Math.round(Math.min(1,Math.max(0,(t-ss.x)/(ss.y-ss.x)))*255),r[i*4+1]=Math.round(Math.min(1,Math.max(0,-e.costa[i]/16))*255),r[i*4+2]=e.mascara[i]&vo.riu?255:0,r[i*4+3]=255}let i=new m(r,t,n,O,Pe);return i.magFilter=Ce,i.minFilter=Ce,i.generateMipmaps=!1,i.needsUpdate=!0,i}var us=class{parametres;malla;material;temps={value:0};estela=Array.from({length:8},()=>new le);constructor(e,t,n,r=os){this.parametres=r;let i=r,a=e=>new l(e),o=i.onades.slice(0,3);this.material=new at({uniforms:{uTemps:this.temps,uRelleu:{value:ls(e)},uRelleuUv:{value:new le(e.mostres/e.nx,e.mostres/e.nz,.5/e.nx,.5/e.nz)},uRelleuRang:{value:ss},uNivell:{value:0},uOnaDir:{value:o.map(e=>new pt(...e.direccio).normalize())},uOnaParams:{value:o.map(e=>new s(e.amplitud,e.longitud,e.velocitat))},uEsmorteiment:{value:i.esmorteiment},uColorSomera:{value:a(i.colorSomera)},uColorMitjana:{value:a(i.colorMitjana)},uColorFonda:{value:a(i.colorFonda)},uColorAbisme:{value:a(i.colorAbisme)},uColorEscuma:{value:a(i.colorEscuma)},uProfunditats:{value:new s(...i.profunditats)},uFranges:{value:i.franges},uEscuma:{value:new s(i.escuma.gruix,i.escuma.linies,i.escuma.velocitat)},uAbastEscuma:{value:i.escuma.abast},uCresta:{value:i.cresta},uSol:{value:t},uLlumSol:{value:new l(`#fff4e0`).multiplyScalar(.95)},uLlumAmbient:{value:new l(`#dff0ff`).multiplyScalar(.3)},uBrillantor:{value:i.brillantor},uEspurnes:{value:i.espurnes},uColorEspurna:{value:a(i.colorEscuma)},uReflexCel:{value:a(i.reflexCel.color)},uForcaReflex:{value:i.reflexCel.forca},uMidaTexel:{value:n},uEstela:{value:this.estela}},vertexShader:is,fragmentShader:as});let c=new I(cs,cs,cs,cs);c.rotateX(-Math.PI/2),this.malla=new H(c,this.material),this.malla.name=`aigua`,this.malla.frustumCulled=!1,this.malla.position.y=0}segueix(e,t){this.malla.position.x=Math.round(e),this.malla.position.z=Math.round(t)}onada(e,t,n=1){let r=0;for(let i of this.parametres.onades.slice(0,3)){let a=Math.hypot(...i.direccio),o=Math.PI*2/i.longitud,s=(i.direccio[0]*e+i.direccio[1]*t)/a*o-this.temps.value*i.velocitat*o;r+=i.amplitud*n*Math.sin(s)}return r}},ds=`
  attribute float aCosta;
  attribute float aBosc;
  attribute float aZona;
  varying vec3 vMonPos;
  varying vec3 vMonNormal;
  varying float vCosta;
  varying float vBosc;
  varying float vZona;
`,fs=`
  vMonPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vMonNormal = normalize(mat3(modelMatrix) * objectNormal);
  vCosta = aCosta;
  vBosc = aBosc;
  vZona = aZona;
`,ps=`
  ${ns}
  varying vec3 vMonPos;
  varying vec3 vMonNormal;
  varying float vCosta;
  varying float vBosc;
  varying float vZona;

  uniform vec3 uSorra;
  uniform vec3 uSorraMolla;
  uniform vec3 uHerba;
  uniform vec3 uHerbaClara;
  uniform vec3 uBosc;
  uniform vec3 uTerra;
  uniform vec3 uPrat;
  uniform vec3 uRoca;
  uniform vec3 uRocaFosca;
  uniform vec3 uTartera;
  uniform vec3 uNeu;
  uniform vec3 uEsplanada;
  uniform vec3 uJunta;
  uniform vec3 uCami;
  uniform vec3 uCamiFosc;
  /** Cotes: x platja, y prat, z roca, w neu. */
  uniform vec4 uCotes;
  /** Pendents: x terra, y roca, z neu (màxim on s'hi aguanta). */
  uniform vec3 uPendents;
  uniform float uCostaPlatja;
  /** Variació de les cotes amb soroll (unitats): fa les vores irregulars. */
  uniform float uSoroll;
  /** Força del tramat a les transicions (0 = vores dures). */
  uniform float uTramat;
  uniform float uMidaTexel;
`,ms=`
  {
    float h = vMonPos.y;
    float pendent = 1.0 - clamp(normalize(vMonNormal).y, 0.0, 1.0);
    vec2 cel = floor(vMonPos.xz / uMidaTexel);
    // Tramat ordenat sobre la graella del món (−0,5 a 0,5) i soroll lent per trencar les vores.
    float t = (bayer4(cel) - 0.5) * uTramat;
    float var = (sorollValor(vMonPos.xz * 0.45) - 0.5) * 2.0 * uSoroll;

    vec3 c = mix(uHerba, uHerbaClara, step(0.62, sorollValor(vMonPos.xz * 0.9) + t * 0.4));
    c = mix(c, uBosc, step(0.5, vBosc + t * 0.8));
    // Terra nua als pendents forts de poca alçada (penya-segats de la costa)
    c = mix(c, uTerra, step(uPendents.x, pendent + t * 0.12) * (1.0 - step(1.3, h)));
    // Prat alpí per sobre del bosc
    c = mix(c, uPrat, step(uCotes.y, h + var + t * 0.3));
    // Roca: per alçada o per pendent (el Pedraforca és sempre roca: zona 2)
    float roca = max(step(uCotes.z, h + var + t * 0.3), step(uPendents.y, pendent + t * 0.12));
    roca = max(roca, step(1.5, vZona) * step(0.12, pendent + t * 0.1));
    vec3 colorRoca = mix(uRoca, uRocaFosca, step(0.62, pendent + t * 0.15));
    // Tartera: roca d'una mica de pendent i de poca inclinació (la de l'enforcadura)
    colorRoca = mix(colorRoca, uTartera, step(1.5, vZona) * (1.0 - step(0.45, pendent + t * 0.1)));
    c = mix(c, colorRoca, roca);
    // Neu als cims més alts, només on el pendent l'aguanta
    float neu = step(uCotes.w, h + var * 0.8 + t * 0.25) * (1.0 - step(uPendents.z, pendent + t * 0.1));
    c = mix(c, uNeu, neu * (1.0 - step(1.5, vZona)));
    // Platja: arran de mar i prop de la costa
    float platja = (1.0 - step(uCotes.x, h + t * 0.05)) * (1.0 - step(uCostaPlatja, vCosta + t * 0.4));
    c = mix(c, uSorra, platja);
    // Sorra mullada i fons (sota l'aigua)
    c = mix(c, uSorraMolla, 1.0 - step(0.05, h));
    // Esplanades: lloses amb junta
    vec2 llosa = fract(vMonPos.xz * 2.0);
    float junta = max(step(0.88, llosa.x), step(0.88, llosa.y));
    float esplanada = step(0.5, vZona) * (1.0 - step(1.5, vZona));
    c = mix(c, mix(uEsplanada, uJunta, junta), esplanada);
    // Camins (fase 6): grava de dos tons, per texels del món (no neda quan camines)
    float gra = fract(sin(dot(floor(vMonPos.xz * 8.0), vec2(12.9898, 78.233))) * 43758.5453);
    float cami = step(2.5, vZona);
    c = mix(c, mix(uCami, uCamiFosc, step(0.72, gra)), cami);

    diffuseColor.rgb = c;
  }
`,hs={colors:{sorra:`#ecd9a0`,sorraMolla:`#cdb477`,herba:`#7fbf4d`,herbaClara:`#a6d86a`,bosc:`#3f7d3c`,terra:`#8a6a4f`,prat:`#b3a077`,roca:`#948c7e`,rocaFosca:`#6f6960`,tartera:`#b8b0a0`,neu:`#ffffff`,esplanada:`#ddd6c7`,junta:`#b8b0a0`,cami:`#d6c49a`,camiFosc:`#b3a077`},cotes:{platja:yo.cotaPlatja,prat:yo.cotaPrat,roca:yo.cotaRoca,neu:yo.cotaNeu},pendents:{terra:yo.pendentTerra,roca:yo.pendentRoca,neu:.35},costaPlatja:yo.costaPlatja,soroll:.25,tramat:.5,facetat:!0};function gs(e,t=hs){let n=new Ee({flatShading:t.facetat}),r=e=>({value:new l(e)}),i={uSorra:r(t.colors.sorra),uSorraMolla:r(t.colors.sorraMolla),uHerba:r(t.colors.herba),uHerbaClara:r(t.colors.herbaClara),uBosc:r(t.colors.bosc),uTerra:r(t.colors.terra),uPrat:r(t.colors.prat),uRoca:r(t.colors.roca),uRocaFosca:r(t.colors.rocaFosca),uTartera:r(t.colors.tartera),uNeu:r(t.colors.neu),uEsplanada:r(t.colors.esplanada),uJunta:r(t.colors.junta),uCami:r(t.colors.cami),uCamiFosc:r(t.colors.camiFosc),uCotes:{value:new le(t.cotes.platja,t.cotes.prat,t.cotes.roca,t.cotes.neu)},uPendents:{value:new s(t.pendents.terra,t.pendents.roca,t.pendents.neu)},uCostaPlatja:{value:t.costaPlatja},uSoroll:{value:t.soroll},uTramat:{value:t.tramat},uMidaTexel:{value:e}};return n.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${ds}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${fs}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${ps}`).replace(`#include <color_fragment>`,ms)},n.userData.uniforms=i,n.customProgramCacheKey=()=>`terreny-4dsu`,n}var _s=new Set([`far`,`antena`,`retol`,`bustia`,`ordinador`,`aula`,`tripode`,`metro`,`bici`,`cova`,`immersio`,`monument`]),vs=16,ys={casa:{nom:`casaPremia`,model:na},facultat:{nom:`campusNord`,model:aa},"casa-tortosa":{nom:`casaTortosa`,model:sa}},bs=new Ee({vertexColors:!0}),xs=bs;function Ss(e,t=!0){let[n,,r]=e.mida,i=new H(e.geometria(X,t?[-n*X/2,0,-r*X/2]:[0,0,0]),xs);return i.castShadow=!0,i.receiveShadow=!0,i}function Cs(e){return e.traverse(e=>e.userData.ombraDeLluny=!0),e}function ws(e,t){let[n,r]=e.mida,i=.55;switch(t){case`n`:return{x:e.x,z:e.z-r/2-i};case`s`:return{x:e.x,z:e.z+r/2+i};case`e`:return{x:e.x+n/2+i,z:e.z};default:return{x:e.x-n/2-i,z:e.z}}}var Ts=class{manifest;relleu;tardor;santJordi;arrel=new C;obstacles=new xo;interactius=[];fars=[];models={};llums;aigua;vaixells;terreny;atles=new fo;slotsRodets=[];mallesQuadres=[];rodetsVisibles=[];habitants=[];pilotaPerTrobar=null;arbres=[];vegetacioProp=null;vegetacioLluny=null;globus=null;bot=null;rodetSubmari=null;cultura={castellers:null,correfoc:null,estany:null};detalls=new C;matTerreny;constructor(e,t,n,r,i=!1,a=!1){this.manifest=t,this.relleu=n,this.tardor=i,this.santJordi=a,e.add(this.arrel),this.detalls.name=`detalls-cultura`,this.arrel.add(this.detalls),this.llums=new Lo(e),this.matTerreny=gs(r),this.terreny=Cs(ko(n,this.matTerreny)),this.arrel.add(this.terreny),this.aigua=new us(n,this.llums.direccioSol,r),this.arrel.add(this.aigua.malla),this.llocs(),this.objectes(),this.cims(),this.vaixells=new ts(Ii.molls,Ii.vaixell.ruta,xs,(e,t)=>this.aigua.onada(e,t),this.aigua.estela),this.arrel.add(this.vaixells.grup),this.interactiusVaixell(),this.vegetacio(),this.fusionaObjectes()}lliure(e,t,n){for(let[r,i]of[[-n,-n],[n,-n],[-n,n],[n,n]])if(!this.relleu.trepitjable(e+r,t+i))return!1;return!this.obstacles.toca(e,t,n)}segmentLliure(e,t,n,r,i){return!this.obstacles.talla(e,t,n,r,i)}sol(e,t){return this.relleu.sol(e,t)}actualitza(e,t,n,r,i){if(this.aigua.temps.value=t,this.aigua.segueix(n.x,n.z),!i)for(let e of this.rodetsVisibles)e.rotation.y=t*1.5+e.userData.rodet;return this.llums.segueix(n.x,n.y,n.z),this.vaixells.actualitza(e,r,i)}caixa(e,t,n,r){this.obstacles.afegeix({x0:e-n,z0:t-r,x1:e+n,z1:t+r})}posa(e,t,n,r=this.relleu.sol(t,n)){return e.position.set(t,r,n),this.arrel.add(e),e}ambEscala(e,t,n,r,i=po){if(i===1)return r();let a=new Set([...this.arrel.children,...this.detalls.children]),o=this.interactius.length,s=this.fars.length,c=this.slotsRodets,l=(e,t)=>t+(e-t)*i;this.obstacles.transforma=n=>({x0:l(n.x0,e),z0:l(n.z0,t),x1:l(n.x1,e),z1:l(n.z1,t)});try{r()}finally{this.obstacles.transforma=null}for(let r of[...this.arrel.children,...this.detalls.children])a.has(r)||r===this.detalls||(r.position.set(l(r.position.x,e),l(r.position.y,n),l(r.position.z,t)),r.scale.multiplyScalar(i));for(let r of this.interactius.slice(o))r.punt={x:l(r.punt.x,e),z:l(r.punt.z,t)},r.ancora.set(l(r.ancora.x,e),l(r.ancora.y,n),l(r.ancora.z,t));for(let r of this.fars.slice(s))Object.assign(r,{x:l(r.x,e),y:l(r.y,n),z:l(r.z,t)});this.slotsRodets!==c&&(this.slotsRodets=this.slotsRodets.map(r=>({...r,x:l(r.x,e),y:l(r.y,n),z:l(r.z,t),W:r.W*i,H:r.H*i})))}nomSeccio(e){return this.manifest.seccions[e]?.nom??e}objectes(){let e={retols:0,rodets:0};for(let t of Ii.props){let n=this.relleu.sol(t.x,t.z);this.ambEscala(t.x,t.z,n,()=>this.objecte(t,e),mo.includes(t.model)?po:1)}}objecte(t,n){let r=e.rodets,{x:i,z:a}=t,o=this.relleu.sol(i,a),c;switch(t.model){case`far`:this.fars.push({x:i,y:o+34*X,z:a}),c=Cs(Ss(He())),this.caixa(i,a,.75,.75);break;case`antena`:c=Cs(Ss(Be())),this.caixa(i,a,.5,.5);break;case`retol`:c=Ss(Ue()),this.caixa(i,a,.5,.2),this.interactius.push({id:n.retols++?`retol-${n.retols}`:`retol`,etiqueta:this.manifest.textos.retol,punt:{x:i,z:a+.8},radi:.9,ancora:new s(i,o+1.6,a),cami:`mapa`,objectes:[c]});break;case`bustia`:c=Ss(je()),this.caixa(i,a,.3,.3),this.interactius.push({id:`bustia`,etiqueta:this.nomSeccio(`contacte`),punt:{x:i,z:a+.7},radi:.9,ancora:new s(i,o+1.5,a),cami:`contacte`,objectes:[c]});break;case`ordinador`:c=Ss(Ra()),c.name=`ordinador`,this.caixa(i,a,.75,.5),this.interactius.push({id:`ordinador`,etiqueta:this.manifest.textos.ordinador,punt:{x:i-.3,z:a+.85},radi:.8,ancora:new s(i-.3,o+2.1,a),cami:`os`,objectes:[c]}),this.interactius.push({id:`terminal`,etiqueta:this.manifest.textosPersona[`pers.terminal`],punt:{x:i+.5,z:a+.85},radi:.8,ancora:new s(i+.5,o+1.7,a),cami:`terminal`,objectes:[c]});break;case`aula`:c=Ss(za(this.manifest.persona.estudis.flatMap(e=>e.assignatures).length)),c.name=`aula`,this.caixa(i,a-1,1.3,.2),this.caixa(i,a+.44,1.05,.88),this.interactius.push({id:`pissarra`,etiqueta:this.manifest.textosPersona[`pers.pissarra`],punt:{x:i,z:a+1.75},radi:1,ancora:new s(i,o+2.3,a-1.1),cami:`pissarra`,objectes:[c]});break;case`monument`:{let e=t.id??``,n=Qa[e];if(!n)return;let r=n(),[l,u]=t.mida??[2,2];c=Cs(Ss(r)),c.name=`monument-${e}`,this.caixa(i,a,l/2-.15,u/2-.15),e===`cap-creus`&&this.fars.push({x:i,y:o+20*X,z:a}),e===`tossa`&&this.fars.push({x:i+1.5*X,y:o+18*X,z:a-3.5*X}),this.interactius.push({id:e,etiqueta:this.manifest.textosCultura[`cult.${e}`]??e,punt:{x:i,z:a+u/2+.6},radi:1.2,ancora:new s(i,o+r.mida[1]*X+.3,a),cami:`monument`,objectes:[c]});break}case`linia-temps`:this.liniaTemps(i,a,t.mida??[8,1.5]);return;case`tripode`:{let e=t.zona?this.manifest.zones[t.zona]:void 0;if(!e)return;c=Ss(Ni()),c.rotation.y=Math.PI/4,this.caixa(i,a,.3,.3),this.interactius.push({id:`foto-${e.slug}`,etiqueta:e.etiqueta,punt:{x:i+.55,z:a+.55},radi:.8,ancora:new s(i,o+2,a),cami:`fotografia/${e.serie}`,foto:e.foto,objectes:[c]});break}case`rodet`:{let e=++n.rodets;if(e>this.manifest.rodets.length)return;if(t.submari){this.rodetSubmari=e;return}if(r.has(e))return;c=Ss(Pi()),c.userData.rodet=e,this.rodetsVisibles.push(c),this.interactius.push({id:`rodet-${e}`,etiqueta:this.manifest.textos.rodet,punt:{x:i,z:a+.5},radi:.8,ancora:new s(i,o+1,a),cami:`rodet`,rodet:e,objectes:[c]}),this.posa(c,i,a,o+.15);return}case`personatge`:{let e=t.rol,n=this.manifest.personatges?.[e];if(!da[e]||!n)return;c=Ss(la(da[e])),c.name=`personatge-${e}`,this.caixa(i,a,.32,.32),this.habitants.push({id:e,malla:c,x:i,z:a,y:o,orientacio:0}),this.interactius.push({id:`personatge-${e}`,etiqueta:n.etiqueta,punt:{x:i,z:a+.95},radi:1.1,ancora:new s(i,o+2.5,a),cami:`personatge`,personatge:e,objectes:[c]});break}case`pilota`:if(e.pilota)return;c=Ss(ua()),c.name=`pilota-per-trobar`,this.pilotaPerTrobar=c,this.interactius.push({id:`pilota`,etiqueta:this.manifest.textos.pilota,punt:{x:i,z:a+.6},radi:.9,ancora:new s(i,o+1,a),cami:`pilota`,objectes:[c]});break;case`globus`:c=Cs(Ss(ha().voxels)),c.name=`globus`,this.globus={malla:c,x:i,y:o,z:a},this.caixa(i,a,.5,.5),this.interactius.push({id:`globus`,etiqueta:this.manifest.textosExploracio[`exp.globus`],punt:{x:i,z:a+.95},radi:1,ancora:new s(i,o+5.2,a),cami:`globus`,objectes:[c]});break;case`bici`:c=Ss(_a()),c.rotation.y=Math.PI/2,this.caixa(i,a,.6,.3),this.interactius.push({id:`bici`,etiqueta:this.manifest.textosExploracio[`exp.bici`],punt:{x:i,z:a+.8},radi:.9,ancora:new s(i,o+1.3,a),cami:`bici`,objectes:[c]});break;case`metro`:{let e=t.estacio??`estacio`;c=Ss(va()),c.name=`metro-${e}`,this.caixa(i,a,.55,.25),this.interactius.push({id:`metro-${e}`,etiqueta:`${this.manifest.textosExploracio[`exp.metro`]} · ${this.manifest.textosExploracio[`exp.estacio.${e}`]??e}`,punt:{x:i,z:a+.9},radi:1,ancora:new s(i,o+2.3,a),cami:`metro`,estacio:e,objectes:[c]});break}case`bot`:c=Ss(ya()),c.name=`bot`,this.bot={malla:c,x:i,z:a},this.interactius.push({id:`bot`,etiqueta:this.manifest.textosExploracio[`exp.bot`],punt:{x:i,z:a+.9},radi:1,ancora:new s(i,o+1.2,a),cami:`bot`,objectes:[c]});break;case`cova`:c=Ss(ba()),c.name=`boca-cova`,this.caixa(i,a,1.45,.7),this.interactius.push({id:`cova`,etiqueta:this.manifest.textosExploracio[`exp.cova`],punt:{x:i,z:a+1.3},radi:1,ancora:new s(i,o+2.3,a),cami:`cova`,objectes:[c]});break;case`immersio`:c=Ss(xa()),c.name=`immersio`,this.caixa(i,a,.3,.2),this.interactius.push({id:`immersio`,etiqueta:this.manifest.textosExploracio[`exp.immersio`],punt:{x:i,z:a+.75},radi:.9,ancora:new s(i,o+1.9,a),cami:`immersio`,objectes:[c]});break;case`montserrat`:case`sagrada-familia`:case`castellers`:case`correfoc`:case`estany`:case`sant-jordi`:this.cultural(t.model,i,a,t.mida??[1,1]);return;default:return}_s.has(t.model)&&(c.userData.fusiona=!0),this.posa(c,i,a,o)}liniaTemps(e,t,[n]){let r=this.manifest.textosPersona,i=Math.round(n/X),a=this.manifest.persona.anys.slice(-Math.floor(i/9)),o=i/Math.max(1,a.length),c=a.map((e,t)=>({any:e.any,x:o*(t+.5)})),l=Ba(i,c),u=l.mida[2]*X,d=this.relleu.sol(e,t),f=Ss(l);f.name=`linia-temps`,f.userData.fusiona=!0,this.posa(f,e,t,d);let p=t-u/2+2.5*X,m=(e,t)=>t===1?r[`pers.1.${e}`]:r[`pers.n.${e}`].replace(`{n}`,String(t));a.forEach((t,i)=>{let a=e-n/2+c[i].x*X;this.caixa(a,p,.56,.2);let l=new Map;for(let e of t.entrades)l.set(e.tipus,(l.get(e.tipus)??0)+(e.n??1));let u=[...l].map(([e,t])=>m(e,t)).join(`, `);this.interactius.push({id:`any-${t.any}`,etiqueta:r[`pers.any-etiqueta`].replace(`{any}`,String(t.any)).replace(`{n}`,u),punt:{x:a,z:p+.75},radi:Math.min(.8,o*X/2),ancora:new s(a,d+1.5,p),cami:`any`,any:t.any,objectes:[f]})})}plaquesProjectes(e,t,n,r,i){let a=this.manifest.persona.entrades.projectes??[],o=[...[.15,.3,.7,.85].map(i=>({x:e+n*i,z:t+r+.01,gir:0})),...[.3,.7].map(i=>({x:e+n+.01,z:t+r*i,gir:Math.PI/2}))],c=Math.min(a.length,o.length);if(!c)return;let l=o.slice(0,c).map((e,t)=>{let n=Va(t).geometria(X,[-3*X,0,0]);return n.rotateY(e.gir),n.translate(e.x,i+.8,e.z),n}),u=new H(ji(l),xs);u.castShadow=!0,u.receiveShadow=!0,u.name=`projectes-taller`,this.arrel.add(u),a.slice(0,c).forEach((e,t)=>{let n=o[t];this.interactius.push({id:`projecte-${e.slug}`,etiqueta:e.titol,punt:n.gir?{x:n.x+.65,z:n.z}:{x:n.x,z:n.z+.65},radi:.5,ancora:new s(n.x,i+1.7,n.z),cami:e.cami,objectes:[u]})})}fusionaObjectes(){this.arrel.updateMatrixWorld(!0);let e=new Map;for(let t of this.arrel.children){let n=t;if(!n.isMesh||!n.userData.fusiona||n.material!==xs)continue;let r=`${Math.floor(n.position.x/vs)},${Math.floor(n.position.z/vs)},${+!!n.userData.ombraDeLluny}`;e.set(r,[...e.get(r)??[],n])}let t=new Map;for(let[n,r]of e){if(r.length<2)continue;let e=new H(ji(r.map(e=>e.geometry.clone().applyMatrix4(e.matrixWorld))),xs);e.castShadow=!0,e.receiveShadow=!0,e.name=`objectes-${n}`,n.endsWith(`,1`)&&(e.userData.ombraDeLluny=!0),this.arrel.add(e);for(let n of r)n.removeFromParent(),n.geometry.dispose(),t.set(n,e)}for(let e of this.interactius)e.objectes=e.objectes.map(e=>t.get(e)??e)}minSol(e,t,n,r){let i=1/0;for(let a=-r/2;a<=r/2;a+=.25)for(let r=-n/2;r<=n/2;r+=.25)i=Math.min(i,this.relleu.sol(e+r,t+a));return i}cultural(e,t,n,[r,i]){let a=this.manifest.textosCultura,o=this.relleu.sol(t,n),c=(e,t,n,r,i)=>this.interactius.push({id:e,etiqueta:a[`cult.${e}`],punt:t,radi:n,ancora:new s(t.x,r,t.z-n*.6),cami:e,objectes:i});switch(e){case`montserrat`:{let e=this.minSol(t,n,r,i),a=Cs(Ss(Ca()));a.name=`montserrat`,this.posa(a,t,n,e-.05),this.caixa(t,n,r/2-.15,i/2-.2),c(`montserrat`,{x:t,z:n+i/2+.55},1.3,e+3.4,[a]);break}case`sagrada-familia`:{let e=Cs(Ss(wa()));e.name=`sagrada-familia`,this.posa(e,t,n,o),this.caixa(t,n,1.2,1),c(`sagrada-familia`,{x:t,z:n+1.55},1.1,o+4.6,[e]);break}case`castellers`:case`correfoc`:{let a=Ss(Ta(Math.round(r/X),Math.round(i/X)));a.name=`placa-${e}`,this.detalls.add(a),a.position.set(t,o-3*X,n),this.cultura[e]=new s(t,o+X,n),e===`castellers`?(this.caixa(t,n,.95,.95),c(`castellers`,{x:t,z:n+1.45},1.3,o+5.6,[a])):c(`correfoc`,{x:t,z:n+1.9},1.4,o+2.2,[a]);break}case`estany`:{let e=t-.75,r=Math.round(3.2/X),i=Math.round(2.4/X),a=Da(r,i,!1),s=Da(r,i,!0),l=Ss(a.voxels),u=Ss(s.voxels);l.name=`estany`,u.name=`estany-gel`,u.visible=!1;for(let t of[l,u])t.position.set(e,o-X*.5,n),this.detalls.add(t);this.cultura.estany={aigua:l,gel:u};for(let t=0;t<i;t++){let o=-1;for(let s=0;s<=r;s++){let c=s<r&&a.aigua(s,t);if(c&&o<0&&(o=s),!c&&o>=0){let a=e+(o-r/2)*X,c=e+(s-r/2)*X,l=n+(t-i/2)*X;this.obstacles.afegeix({x0:a,z0:l,x1:c,z1:l+X}),o=-1}}}c(`estany`,{x:e,z:n+1.5},1.3,o+1.2,[l,u]);let d=t+1.55,f=Ss(Ea());f.name=`refugi`,f.position.set(d,o,n-.1),this.detalls.add(f),this.caixa(d,n-.1,.8,.6),c(`refugi`,{x:d,z:n+.95},.9,o+2.1,[f]);break}case`sant-jordi`:{if(!this.santJordi)break;let e=Ss(Oa());e.name=`parades-sant-jordi`,this.detalls.add(e),e.position.set(t,this.minSol(t,n,3.1,.9),n),this.caixa(t,n,1.55,.4);let r=`sant-jordi-${this.interactius.filter(e=>e.cami===`sant-jordi`).length+1}`;this.interactius.push({id:r,etiqueta:a[`cult.sant-jordi`],punt:{x:t,z:n+1.05},radi:1.1,ancora:new s(t,o+1.9,n),cami:`sant-jordi`,objectes:[]});break}}}cims(){let e=co();for(let t of e){let e=this.relleu.sol(t.x,t.z),n=Ss(fa());n.name=t.id,n.userData.fusiona=!0,this.posa(n,t.x,t.z,e-.05),this.caixa(t.x,t.z,.2,.2),this.interactius.push({id:t.id,etiqueta:this.manifest.textosExploracio[`exp.${t.id}-etiqueta`],punt:{x:t.x,z:t.z+.45},radi:.7,ancora:new s(t.x,e+1.6,t.z),cami:`cim`,objectes:[n]})}let t=e[0],n=t.x+.55,r=t.z+.1,i=Ss(pa());this.posa(i,n,r,this.relleu.sol(n,r)-.05),this.interactius.push({id:`parapent`,etiqueta:this.manifest.textosExploracio[`exp.parapent`],punt:{x:n+.35,z:r+.35},radi:.55,ancora:new s(n,this.relleu.sol(n,r)+1.1,r),cami:`parapent`,objectes:[i]})}mouBot(e,t,n){if(!this.bot)return;this.bot.x=e,this.bot.z=t;let r=this.interactius.find(e=>e.id===`bot`);r&&(r.punt={x:n.x,z:n.z},r.ancora.set(e,this.relleu.sol(n.x,n.z)+1.2,t))}recullPilota(){this.pilotaPerTrobar?.removeFromParent(),this.pilotaPerTrobar=null;let e=this.interactius.findIndex(e=>e.id===`pilota`);e>=0&&this.interactius.splice(e,1)}actualitzaHabitants(e,t,n,r,i){for(let a of this.habitants){let o=(Math.hypot(t.x-a.x,t.z-a.z)<4?Math.atan2(t.x-a.x,t.z-a.z):0)-a.orientacio;o=Math.atan2(Math.sin(o),Math.cos(o)),a.orientacio+=o*(1-Math.exp(-e/.25)),a.malla.rotation.y=Math.round(a.orientacio/(Math.PI/4))*(Math.PI/4),a.malla.position.y=a.y+(r===a.id&&!i?Math.abs(Math.sin(n*9))*.04:0)}}llocs(){for(let e of Ii.llocs)this.ambEscala(e.x,e.z,e.cota,()=>e.id===`galeria`?this.galeria(e):this.lloc(e))}lloc(e){let t=e.seccions[0],n=this.manifest.seccions[t]?.buit??!0,r=e.porta,[i,a]=e.mida,o=e.x-i/2,c=e.z-a/2,l=e.cota,u=this.manifest.llocs[e.id]??e.id,d=ys[e.id],f=n?Le(i,a,r):d&&r===`s`?d.model(i,a):ge({ample:i,fons:a,teulada:this.manifest.colors[e.id]??`#d9573b`,paret:e.id===`facultat`?`#e6d6ad`:`#efeae0`,alcada:e.id===`facultat`?22:18,porta:r});this.models[e.id]=n?`tanca`:d&&r===`s`?d.nom:`edifici`;let p=Cs(Ss(f,!1));if(p.name=`lloc-${e.id}`,p.position.set(o,l,c),this.arrel.add(p),this.obstacles.afegeix({x0:o+.05,z0:c+.05,x1:o+i-.05,z1:c+a-.05}),e.id===`taller`&&!n&&this.plaquesProjectes(o,c,i,a,l),this.interactius.push({id:e.id,etiqueta:`${u} · ${this.nomSeccio(t)}`,punt:ws(e,r),radi:1.1,ancora:new s(e.x,l+(n?1.8:d?Math.max(3.4,f.mida[1]*X+.3):3.4),e.z),cami:t,objectes:[p]}),e.id===`casa`&&e.seccions.includes(`notes`)){let t=Ss(ke());t.rotation.y=-Math.PI/2;let n=o-.45,r=e.z;this.posa(t,n,r,l),this.caixa(n,r,.15,.75),this.interactius.push({id:`notes`,etiqueta:this.nomSeccio(`notes`),punt:{x:n-.75,z:r},radi:.8,ancora:new s(n,l+1.7,r),cami:`notes`,objectes:[t]})}}galeria(t){let[n,r]=t.mida,i=t.x-n/2,a=t.z-r/2,o=t.cota,{voxels:c,gruix:l}=ye(n,r),u=Cs(Ss(c,!1));u.position.set(i,o,a),this.arrel.add(u);let d=l*X;this.obstacles.afegeix({x0:i,z0:a,x1:i+n,z1:a+d}),this.obstacles.afegeix({x0:i,z0:a,x1:i+d,z1:a+r}),this.obstacles.afegeix({x0:i,z0:a+r-d,x1:i+n,z1:a+r}),this.interactius.push({id:`galeria`,etiqueta:`${this.manifest.llocs.galeria} · ${this.nomSeccio(`fotografia`)}`,punt:{x:i+n+.5,z:t.z},radi:1,ancora:new s(i+n-.3,o+2.6,t.z),cami:`fotografia`,objectes:[u]});let f=1.5,p=this.manifest.series.slice(0,fo.capacitat-6),m=Math.ceil(p.length/2),h=p.length-m,g=(e,t,n)=>Array.from({length:e},(r,i)=>t+(i+.5)/e*(n-t)),_=Math.min((n-d-.2)/Math.max(1,m),(r-d-f-.2)/Math.max(1,h)),v=Math.min(1.1,_*.8),y=v*.8,b=o+X+.75,x=new s(0,0,1),S=new s(1,0,0),C=[...g(m,i+d+.1,i+n-.1).map(e=>({x:e,z:a+d,y:b,normal:x,W:v,H:y})),...g(h,a+d+.1,a+r-d-f-.1).map(e=>({x:i+d,z:e,y:b,normal:S,W:v,H:y}))],w=.42,T=g(6,i+d+.3,i+n-.3).map(e=>({x:e,z:a+d,y:o+X+1.55,normal:x,W:w,H:w*.8})),E=[],D=[],O=(e,t,n)=>{let r=new rt;return r.position.set(t.x,t.y,t.z),r.lookAt(t.x+t.normal.x,t.y,t.z+t.normal.z),r.translateZ(n),r.updateMatrix(),e.applyMatrix4(r.matrix)},k=(e,t)=>{E.push(O(new ve(e.W+.1,e.H+.1,.08),e,.04));let n=new I(e.W,e.H),[r,i,a,o]=fo.uv(t),s=n.attributes.uv;for(let e=0;e<s.count;e++)s.setXY(e,s.getX(e)?a:r,s.getY(e)?o:i);D.push(O(n,e,.085))};p.forEach((e,t)=>{let n=C[t];k(n,t),E.push(O(new ve(n.W*.45,.12,.05),{...n,y:n.y-n.H/2-.16},.03)),this.atles.posa(t,e.textura,n.W/n.H),this.interactius.push({id:`quadre-${e.slug}`,etiqueta:`${e.titol}: ${e.fitxa}`,punt:{x:n.x+n.normal.x*.9,z:n.z+n.normal.z*.9},radi:.6,ancora:new s(n.x,n.y+n.H/2+.25,n.z),cami:`fotografia/${e.slug}`,foto:e.portada,objectes:[]})}),this.slotsRodets=T.map((e,t)=>({...e,cella:p.length+t})),this.slotsRodets.forEach(e=>k(e,e.cella));let ee=[];if(E.length){let e=new H(ji(E),new Ee({color:`#7f5230`}));e.castShadow=!0,e.receiveShadow=!0,e.name=`galeria-marcs`,ee.push(e);let t=new H(ji(D),new Ee({map:this.atles.textura}));t.receiveShadow=!0,t.name=`galeria-fotos`,ee.push(t),this.arrel.add(...ee)}for(let e of this.interactius)e.id.startsWith(`quadre-`)&&(e.objectes=ee);this.mallesQuadres=ee;let A=e.rodets;this.manifest.rodets.forEach((e,t)=>A.has(t+1)?this.mostraRodet(t+1):this.atles.tapa(this.slotsRodets[t].cella));let j=i+d,M=a+r-d-f,te=Math.round(f/X),N=Ss(Fi(te,te),!1);N.position.set(j,o+X,M),N.name=`cambra-fosca`,this.arrel.add(N),this.obstacles.afegeix({x0:j,z0:M,x1:j+f*.7,z1:M+f}),this.interactius.push({id:`cambra-fosca`,etiqueta:this.manifest.textos.cambraFosca,punt:{x:j+f+.35,z:M+f/2},radi:.6,ancora:new s(j+f/2,o+1.6,M+f/2),cami:`cambra`,objectes:[N]})}mostraRodet(e){let t=this.manifest.rodets[e-1],n=this.slotsRodets[e-1];t&&n&&!this.interactius.some(t=>t.id===`quadre-rodet-${e}`)&&(this.atles.posa(n.cella,t.textura,n.W/n.H),this.interactius.push({id:`quadre-rodet-${e}`,etiqueta:t.titol,punt:{x:n.x,z:n.z+1.7},radi:.45,ancora:new s(n.x,n.y+n.H/2+.2,n.z),cami:`fotografia/${t.serie}`,foto:t.foto,objectes:this.mallesQuadres}))}recullRodet(e){let t=this.interactius.findIndex(t=>t.rodet===e);if(t>=0){for(let e of this.interactius[t].objectes)e.removeFromParent();this.interactius.splice(t,1)}this.rodetsVisibles=this.rodetsVisibles.filter(t=>t.userData.rodet!==e),this.mostraRodet(e)}interactiusVaixell(){this.vaixells.molls.forEach((e,t)=>{let n=this.vaixells.puntEmbarcar(e);this.interactius.push({id:`vaixell-${e.id}`,etiqueta:t===0?this.manifest.textos.vaixellIlla:this.manifest.textos.vaixellCatalunya,punt:n,radi:1.1,ancora:new s(n.x,ho+1.7,n.z),cami:`vaixell`,moll:t,objectes:[this.vaixells.llauts[t].grup]})})}vegetacio(){let e=this.interactius.map(e=>e.punt),t=Jo(this.relleu,(t,n)=>this.obstacles.toca(t,n,.8)||this.relleu.mascaraA(t,n)&vo.esplanada||e.some(e=>Math.hypot(e.x-t,e.z-n)<1.4)||Math.hypot(Ii.inici.x-t,Ii.inici.z-n)<1.6?!1:!Ii.molls.some(e=>Math.hypot(e.x0-t,e.z0-n)<1.6));for(let e of t)this.caixa(e.x,e.z,.22,.22);this.arbres=t,this.vegetacioProp=Qo(this.relleu,t,xs,this.tardor),this.arrel.add(this.vegetacioProp)}panoramica(e){e&&!this.vegetacioLluny&&(this.vegetacioLluny=Cs(Qo(this.relleu,this.arbres,xs,this.tardor,48,!0)),this.vegetacioLluny.name=`vegetacio-lluny`,this.arrel.add(this.vegetacioLluny)),this.vegetacioProp&&(this.vegetacioProp.visible=!e),this.vegetacioLluny&&(this.vegetacioLluny.visible=e),this.llums.ombresDeLluny(e),this.detalls.visible=!e}},Es=[`#86b9ee`,`#5d7fa6`,`#3f4a5a`,`#f5d27a`],Ds=`#f5d27a`,Os={sol:`#fff4e0`,forcaSol:2.4,cel:`#dff0ff`,terra:`#8a6a4f`,forcaCel:1.1,ambient:.35,reflex:`#a8d4f5`,forcaReflex:.08,espurnes:.02,espurna:`#ffffff`,fons:`#1d3f73`},ks={sol:`#ffb070`,forcaSol:2,cel:`#ffd0a8`,terra:`#6e2a2f`,forcaCel:.95,ambient:.3,reflex:`#e8735a`,forcaReflex:.22,espurnes:.025,espurna:`#f5d27a`,fons:`#3a4466`},As={sol:`#8fa8d8`,forcaSol:.45,cel:`#3a4466`,terra:`#1b2330`,forcaCel:.9,ambient:.22,reflex:`#1d3f73`,forcaReflex:.35,espurnes:.05,espurna:`#e8ebf2`,fons:`#0d0f1a`},js={sol:{sol:1,gris:0},nuvols:{sol:.7,gris:.25},pluja:{sol:.5,gris:.5},boira:{sol:.65,gris:.4},neu:{sol:.6,gris:.35}};function Ms(e,t,n){let r=(e,t)=>`#${new l(e).lerp(new l(t),n).getHexString()}`,i=(e,t)=>e+(t-e)*n;return{sol:r(e.sol,t.sol),forcaSol:i(e.forcaSol,t.forcaSol),cel:r(e.cel,t.cel),terra:r(e.terra,t.terra),forcaCel:i(e.forcaCel,t.forcaCel),ambient:i(e.ambient,t.ambient),reflex:r(e.reflex,t.reflex),forcaReflex:i(e.forcaReflex,t.forcaReflex),espurnes:i(e.espurnes,t.espurnes),espurna:r(e.espurna,t.espurna),fons:r(e.fons,t.fons)}}var Ns=class{o;cel;temps=`sol`;nit=0;fons=`#1d3f73`;uNit={value:0};feixos=new C;pluja=null;neu=null;boira=null;constructor(e){this.o=e;let t=Es.map(e=>{let t=new l(e),n=Math.max(t.r,t.g,t.b);return`vec3(${(t.r/n).toFixed(4)}, ${(t.g/n).toFixed(4)}, ${(t.b/n).toFixed(4)})`}),n=new l(Ds);e.voxels.onBeforeCompile=e=>{e.uniforms.uNit=this.uNit,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uNit;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
          #ifdef USE_COLOR
          {
            // Es compara la tonalitat (el color dividit pel canal màxim): així també s'encenen els
            // vòxels enfosquits per l'oclusió ambiental dels racons.
            float m = max(max(vColor.r, vColor.g), vColor.b);
            vec3 t = vColor.rgb / max(m, 1e-3);
            float encesa = 0.0; // 1 si és un vidre o un llum
            ${t.map(e=>`encesa = max(encesa, step(distance(t, ${e}), 0.035));`).join(`
`)}
            totalEmissiveRadiance += encesa * uNit * vec3(${n.r.toFixed(3)}, ${n.g.toFixed(3)}, ${n.b.toFixed(3)}) * 1.4;
          }
          #endif`)},e.voxels.customProgramCacheKey=()=>`voxels-nit`,e.voxels.needsUpdate=!0;for(let t of e.fars){let e=new C;e.position.set(t.x,t.y,t.z);for(let t of[0,Math.PI]){let n=new H(new D(.02,.28,5,6,1,!0),new Ie({color:`#f5d27a`,transparent:!0,opacity:.45,depthWrite:!1}));n.rotation.z=Math.PI/2,n.position.x=2.5;let r=new C;r.rotation.y=t,r.add(n),e.add(r)}e.layers.set(1),e.traverse(e=>e.layers.set(1)),this.feixos.add(e)}this.feixos.name=`feixos-fars`,e.escena.add(this.feixos)}aplica(e,t){this.cel=e,this.temps=t;let n=this.o,r=e.llum>=.5?Ms(ks,Os,Math.min(1,(e.llum-.5)*2)*(1-e.daurat*.8)):Ms(As,ks,e.llum*2),i=js[t],a=new l(`#948c7e`);n.llums.sol.color.set(r.sol),n.llums.sol.intensity=r.forcaSol*i.sol,n.llums.cel.color.set(r.cel).lerp(a,i.gris*.6),n.llums.cel.groundColor.set(r.terra),n.llums.cel.intensity=r.forcaCel,n.llums.ambient.intensity=r.ambient;let o=n.aigua.material.uniforms;o.uLlumSol.value.set(r.sol).multiplyScalar(.95*Math.min(1,r.forcaSol/2.4)*i.sol),o.uLlumAmbient.value.set(r.cel).multiplyScalar(.3),o.uReflexCel.value.set(r.reflex).lerp(a,i.gris*.5),o.uForcaReflex.value=r.forcaReflex,o.uColorEspurna.value.set(r.espurna),o.uEspurnes.value=t===`sol`?r.espurnes:r.espurnes*.25,this.fons=r.fons,n.renderer.setClearColor(r.fons),this.nit=e.llum<.35?1:e.llum<.6?(.6-e.llum)/.25:0,this.uNit.value=this.nit,this.feixos.visible=this.nit>.5;let s=t===`neu`?3.3:e.estacio===`hivern`?3.9:yo.cotaNeu,c=n.terreny.userData.uniforms;c&&(c.uCotes.value.w=s),this.creaTemps(t)}creaTemps(e){for(let e of[this.pluja,this.neu,this.boira])e?.removeFromParent();this.pluja=this.neu=this.boira=null,e===`pluja`&&(this.pluja=this.precipitacio(900,`#a8d4f5`,.35)),e===`neu`&&(this.neu=this.precipitacio(700,`#ffffff`,.06)),e===`boira`&&(this.boira=this.creaBoira())}precipitacio(e,t,r){let i=new Float32Array(e*6);for(let t=0;t<e;t++){let e=(Math.random()-.5)*40,n=Math.random()*8,a=(Math.random()-.5)*40;i.set([e,n,a,e-r*.15,n-r,a+r*.1],t*6)}let a=new F;a.setAttribute(`position`,new _(i,3));let o=new n(a,new ne({color:t}));return o.name=`precipitacio`,o.frustumCulled=!1,o.layers.set(1),this.o.escena.add(o),o}creaBoira(){let e=new C;e.name=`boira`;let t=this.o.pedraforca;for(let n=0;n<4;n++){let r=new H(new D(3.2-n*.45,3.5-n*.45,.55,14,1,!0),new Ie({color:`#efeae0`,transparent:!1,opacity:.7,alphaHash:!0,side:2}));r.position.set(t.x+Math.sin(n*2.1)*.5,t.cotaBase+1.2+n*.55,t.z+Math.cos(n*1.7)*.5),r.layers.set(1),e.add(r)}return this.o.escena.add(e),e}actualitza(e,t,n,r){if(this.feixos.visible&&!r)for(let e of this.feixos.children)e.rotation.y=t*.9;for(let[i,a]of[[this.pluja,9],[this.neu,.9]]){if(!i||(i.position.set(n.x,n.y-2,n.z),r))continue;let o=i.geometry.attributes.position,s=o.array;for(let n=0;n<s.length;n+=6){let r=s[n+1]-a*e,i=a<2?Math.sin(t+n)*.2*e:0;r<0&&(r+=8);let o=s[n+1]-s[n+4];s[n]+=i,s[n+3]+=i,s[n+1]=r,s[n+4]=r-o}o.needsUpdate=!0}}},Ps=41.7,Fs=1.8;function Is(e){let t=Object.fromEntries(new Intl.DateTimeFormat(`en-GB`,{timeZone:`Europe/Madrid`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`,hourCycle:`h23`}).formatToParts(e).map(e=>[e.type,e.value]));return{mes:Number(t.month),dia:Number(t.day),hora:Number(t.hour)+Number(t.minute)/60}}function Ls(e,t=Ps,n=Fs){let r=Math.PI/180,i=e.getTime()/864e5-10957.5,a=(357.529+.98560028*i)*r,o=(280.459+.98564736*i+1.915*Math.sin(a)+.02*Math.sin(2*a))*r,s=(23.439-36e-8*i)*r,c=Math.atan2(Math.cos(s)*Math.sin(o),Math.cos(o)),l=Math.asin(Math.sin(s)*Math.sin(o)),u=(((18.697374558+24.06570982441908*i)%24*15+n)*r-c)%(2*Math.PI),d=Math.sin(t*r)*Math.sin(l)+Math.cos(t*r)*Math.cos(l)*Math.cos(u);return Math.asin(d)/r}function Rs(e){return e===12||e<=2?`hivern`:e<=5?`primavera`:e<=8?`estiu`:`tardor`}var zs=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Bs(e){let{mes:t,dia:n,hora:r}=Is(e),i=Ls(e),a=zs(-7,6,i),o=i>-6&&i<14?1-Math.abs(i-3)/11:0;return{data:e,hora:r,mes:t,dia:n,elevacio:i,llum:a,daurat:Math.max(0,Math.min(1,o)),moment:i<-5?`nit`:i<10?`posta`:`dia`,estacio:Rs(t)}}function Vs(e,t=new Date){let n=e.has(`proves`),r=e.get(`data`)??(n&&!e.has(`hora`)?`2026-06-21`:null),i=e.get(`hora`)??(n&&!e.has(`data`)?`13:00`:null);if(!r&&!i)return t;let[a,o,s]=r?r.split(`-`).map(Number):[NaN,NaN,NaN],[c,l]=i?i.split(`:`).map(Number):[NaN,NaN],u=Is(t),d=a||t.getUTCFullYear(),f=o||u.mes,p=s||u.dia,m=Number.isFinite(c)?c:Math.floor(u.hora),h=Number.isFinite(l)?l:0;for(let e of[1,2]){let t=new Date(Date.UTC(d,f-1,p,m-e,h)),n=Is(t);if(Math.floor(n.hora)===m&&n.dia===p)return t}return new Date(Date.UTC(d,f-1,p,m-1,h))}function Hs(e){return e>=4&&e<=5?`#7fd3c8`:e>=6&&e<=8?`#a6d86a`:e===9?`#e0a030`:`#b3a077`}var Us=[`sol`,`nuvols`,`pluja`,`boira`,`neu`],Ws=`https://api.open-meteo.com/v1/forecast?latitude=41.7&longitude=1.8&current=weather_code,cloud_cover&timezone=Europe%2FMadrid`,Gs=`illa.temps`,Ks=36e5,qs=4e3;function Js(e){return e===45||e===48?`boira`:e>=71&&e<=77||e===85||e===86?`neu`:e>=51&&e<=67||e>=80&&e<=82||e>=95?`pluja`:e===2||e===3?`nuvols`:`sol`}async function Ys(e,t=fetch){let n=e.get(`temps`);if(n&&n!==`real`&&Us.includes(n))return{temps:n,font:`parametre`};if(e.has(`proves`)&&n!==`real`)return{temps:`sol`,font:`parametre`};try{let e=JSON.parse(sessionStorage.getItem(Gs)??`null`);if(e&&Date.now()-e.quan<Ks&&Us.includes(e.temps))return{temps:e.temps,font:`cau`}}catch{}try{let e=new AbortController,n=setTimeout(()=>e.abort(),qs),r=await t(Ws,{signal:e.signal,credentials:`omit`,referrerPolicy:`no-referrer`});if(clearTimeout(n),!r.ok)throw Error(String(r.status));let i=(await r.json()).current?.weather_code;if(typeof i!=`number`)throw Error(`sense weather_code`);let a=Js(i);try{sessionStorage.setItem(Gs,JSON.stringify({temps:a,quan:Date.now()}))}catch{}return{temps:a,font:`open-meteo`}}catch{return{temps:`sol`,font:`defecte`}}}var Xs=1/8,Zs=[[41.39,2.2],[41.448,2.247],[41.465,2.28],[41.477,2.318],[41.49,2.36],[41.504,2.39],[41.535,2.445],[41.577,2.55],[41.614,2.66],[41.674,2.79]],Qs=[[42.349,2.163],[42.372,2.158],[42.397,2.152]],$s={lat:[40.6,40.8],lon:[.58,.92]},ec=[[[41.28,2.4],[41.2,2.65]],[[41.03,1.25],[40.95,1.55]],[[41.85,3.3],[42.1,3.4]]],tc=class{o;grup=new C;resum={};r;tren=null;cremallera=null;barques=[];gavines=null;dofins=null;m4=new Xe;o3=new rt;constructor(e){this.o=e,this.r=e.relleu,this.grup.name=`vida`,this.creaTren(),this.creaCremallera(),this.creaBarques(),this.creaGavines(),this.creaDofins(),this.creaDelta(),e.estacio===`estiu`&&this.creaPlatges()}aMon([e,t]){let n=this.o.projeccio;return{x:t*n.kx+n.ox,z:-e*n.kz+n.oz}}malla(e,t=!0){let[n,,r]=e.mida,i=new H(e.geometria(Xs,[-n*Xs/2,0,-r*Xs/2]),this.o.material);return i.castShadow=t,i.receiveShadow=t,this.grup.add(i),i}instancies(e,t){let[n,,r]=e.mida,i=new fe(e.geometria(Xs,[-n*Xs/2,0,-r*Xs/2]),this.o.material,t);return i.layers.set(1),i.frustumCulled=!1,this.grup.add(i),i}voraMar(e,t,n,r){for(let i=0;i<=2.5;i+=.25)for(let a=0;a<Math.max(1,i*12);a++){let o=a/Math.max(1,i*12)*Math.PI*2,s=e+Math.cos(o)*i,c=t+Math.sin(o)*i,l=this.r.distCosta(s,c);if(this.r.trepitjable(s,c)&&l>=n&&l<=r&&!(this.r.mascaraA(s,c)&vo.esplanada))return{x:s,z:c}}return null}recorregut(e,t){let n=new oe(e);return{corba:n,llargada:n.getLength(),t:0,sentit:1,velocitat:t}}avanca(e,t){e.t+=e.sentit*e.velocitat*t/e.llargada,(e.t>1||e.t<0)&&(e.sentit*=-1,e.t=Math.min(1,Math.max(0,e.t)))}situa(e,t,n,r=.05){let i=Math.min(1,Math.max(0,n)),a=t.corba.getPointAt(i),o=t.corba.getTangentAt(i);e.position.set(a.x,this.r.sol(a.x,a.z)+r,a.z),e.rotation.set(0,Math.atan2(o.x,o.z),0)}creaTren(){let e=Zs.map(e=>this.aMon(e)).map(e=>this.voraMar(e.x,e.z,.35,.9)).filter(e=>!!e).map(e=>new s(e.x,0,e.z));if(e.length<3)return;let t=this.recorregut(e,2.2);t.t=.75;let n=[this.malla(Vo(!0)),this.malla(Vo()),this.malla(Vo(!0))];n[2].userData.girat=!0,this.tren={cotxes:n,rec:t},this.resum.tren=1,this.mouTren(0)}mouTren(e){if(!this.tren)return;let{cotxes:t,rec:n}=this.tren;this.avanca(n,e);let r=3.08/n.llargada;t.forEach((e,t)=>{this.situa(e,n,n.t-t*r*n.sentit,.02),!!e.userData.girat!=n.sentit<0&&(e.rotation.y+=Math.PI)})}creaCremallera(){let e=Qs.map(e=>this.aMon(e)).map(e=>new s(e.x,0,e.z)),t=this.recorregut(e,.5),n=this.malla(Ho());this.cremallera={cotxe:n,rec:t},this.resum.cremallera=1,this.mouCremallera(0)}mouCremallera(e){if(!this.cremallera)return;let{cotxe:t,rec:n}=this.cremallera;this.avanca(n,e),this.situa(t,n,n.t,.05)}creaBarques(){for(let[e,t]of ec){let n=this.aMon(e),r=this.aMon(t);if(this.r.altura(n.x,n.z)>-.2||this.r.altura(r.x,r.z)>-.2)continue;let i=this.malla(zo());this.barques.push({m:i,a:new s(n.x,0,n.z),b:new s(r.x,0,r.z),t:this.barques.length*.37,v:.6})}this.resum.barques=this.barques.length,this.mouBarques(0,0)}mouBarques(e,t){for(let n of this.barques){let r=n.a.distanceTo(n.b);n.t=(n.t+e*n.v/r)%2;let i=n.t<1?n.t:2-n.t,a=n.a.clone().lerp(n.b,i);n.m.position.set(a.x,this.o.onada(a.x,a.z)*.6+Math.sin(t*2)*.01,a.z);let o=n.t<1?n.b.clone().sub(n.a):n.a.clone().sub(n.b);n.m.rotation.y=Math.atan2(o.x,o.z)}}creaGavines(){let e=[{lat:41.43,lon:2.26},{lat:40.72,lon:.86},{lat:42,lon:3.2},{lat:41.1,lon:1.2}].map(e=>this.aMon([e.lat,e.lon])).flatMap((e,t)=>[0,1,2].map(n=>({x:e.x+n*.6,z:e.z-n*.4,r:1.2+n*.5,fase:t*1.7+n*2.1}))),t=this.instancies(Ro(),e.length);this.gavines={inst:t,centres:e},this.resum.gavines=e.length,this.mouGavines(0)}mouGavines(e){if(!this.gavines)return;let{inst:t,centres:n}=this.gavines;n.forEach((n,r)=>{let i=n.fase+e*.45;this.o3.position.set(n.x+Math.cos(i)*n.r,1.9+Math.sin(e*1.3+n.fase)*.15,n.z+Math.sin(i)*n.r),this.o3.rotation.set(0,-i,Math.sin(e*6+n.fase)*.25),this.o3.updateMatrix(),t.setMatrixAt(r,this.o3.matrix)}),t.instanceMatrix.needsUpdate=!0}creaDofins(){let e=this.o.rutaVaixell;if(e.length<2)return;let t=Math.floor(e.length/2),[n,r]=e[t-1]??e[0],[i,a]=e[t],o=this.instancies(Bo(),3);this.dofins={inst:o,x:(n+i)/2+1.2,z:(r+a)/2-.8,angle:Math.atan2(i-n,a-r)+.6},this.resum.dofins=3,this.mouDofins(0)}mouDofins(e){if(!this.dofins)return;let{inst:t,x:n,z:r,angle:i}=this.dofins;for(let a=0;a<3;a++){let o=(e+a*.35)%5/1.5,s=o<1,c=s?o:0,l=c*1.6-.8;this.o3.position.set(n+Math.sin(i)*l+a*.35,s?Math.sin(c*Math.PI)*.55-.15:-2,r+Math.cos(i)*l+a*.2),this.o3.rotation.set(-Math.cos(c*Math.PI)*.9,i,0),this.o3.updateMatrix(),t.setMatrixAt(a,this.o3.matrix)}t.instanceMatrix.needsUpdate=!0}creaDelta(){let e=this.aMon([$s.lat[1],$s.lon[0]]),t=this.aMon([$s.lat[0],$s.lon[1]]),n=new l(Hs(this.o.mes)),r=new l(`#b3a077`),i=[],a=[],o=[],c=.5,u=0,d=[];for(let s=e.z;s<t.z;s+=c)for(let l=e.x;l<t.x;l+=c){let e=l+c/2,t=s+c/2,f=this.r.altura(e,t);if(f<0&&f>-.25&&d.length<10&&(e*7.3+t*3.1)%1<.2&&d.push({x:e,z:t}),!this.r.trepitjable(e,t)||f>yo.cotaPlatja+.12||this.r.distCosta(e,t)<.4||this.r.pendent(e,t)>.08||this.r.mascaraA(e,t)&vo.esplanada)continue;let p=this.r.sol(e,t)+.02;for(let[e,t]of[[0,r],[.05,n]]){let[n,r,u,d]=[l+e,s+e,l+c-e,s+c-e],f=p+(e?.005:0);i.push(n,f,r,n,f,d,u,f,d,n,f,r,u,f,d,u,f,r);for(let e=0;e<6;e++)a.push(t.r,t.g,t.b),o.push(0,1,0)}u++}if(u){let e=new F;e.setAttribute(`position`,new _(i,3)),e.setAttribute(`normal`,new _(o,3)),e.setAttribute(`color`,new _(a,3));let t=new H(e,new Ee({vertexColors:!0}));t.name=`arrossars`,t.receiveShadow=!0,t.layers.set(1),this.grup.add(t)}if(this.resum.arrossars=u,d.length){let e=this.instancies(Uo(),d.length);d.forEach((t,n)=>{this.m4.compose(new s(t.x,-.1,t.z),new p().setFromAxisAngle(new s(0,1,0),n*1.3),new s(1,1,1)),e.setMatrixAt(n,this.m4)})}this.resum.flamencs=d.length}creaPlatges(){let e=[];for(let t=2;t<this.r.fons-2&&e.length<60;t+=1.5)for(let n=2;n<this.r.ample-2&&e.length<60;n+=1.5){let r=this.r.altura(n,t),i=this.r.distCosta(n,t);!this.r.trepitjable(n,t)||r>yo.cotaPlatja||i>yo.costaPlatja*.8||i<.2||this.r.mascaraA(n,t)&(vo.esplanada|vo.moll|vo.riu)||(n*12.9898+t*78.233)*43758.5453%1>.35||e.push({x:n,z:t})}if(!e.length)return;let t=this.instancies(Wo(),e.length),n=this.instancies(Go(),e.length);e.forEach((e,r)=>{let i=this.r.sol(e.x,e.z);this.m4.makeTranslation(e.x,i,e.z),t.setMatrixAt(r,this.m4),this.m4.compose(new s(e.x+.35,i,e.z+.2),new p().setFromAxisAngle(new s(0,1,0),r),new s(1,1,1)),n.setMatrixAt(r,this.m4)}),this.resum.platja=e.length}posicioTren(){let e=this.tren?.cotxes[0].position;return e?{x:e.x,z:e.z}:null}actualitza(e,t,n){n||(this.mouTren(e),this.mouCremallera(e),this.mouBarques(e,t),this.mouGavines(t),this.mouDofins(t))}},nc=1/8,rc=7*nc,ic=.72,ac=8;function oc(e){let t=new Intl.DateTimeFormat(`en-GB`,{timeZone:`Europe/Madrid`,weekday:`short`}).format(e);return[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].indexOf(t)}function sc(e){let t=oc(e.data);return e.moment===`nit`&&(t===5||t===6)}var cc=class{o;grup=new C;estatCastell=`repos`;correfoc=!1;glacat=!1;o3=new rt;grans=null;petits=null;maAleta=null;gent=[];tCastell=0;repos=0;aleta=!1;grupFoc=new C;mDrac=null;diables=null;maces=null;espurnes=null;guspires=[];angleFoc=0;tempsFoc=0;constructor(e){this.o=e,this.grup.name=`cultura`,e.castellers&&this.creaCastell(e.castellers),e.correfoc&&this.creaCorrefoc(e.correfoc)}geo(e){let[t,,n]=e.mida;return e.geometria(nc,[-t*nc/2,0,-n*nc/2])}creaCastell(e){let t=[];for(let[n,r,i]of[[6,.62,0],[8,1.02,.4]])for(let a=0;a<n;a++){let o=a/n*Math.PI*2+i;t.push({pis:0,x:e.x+Math.sin(o)*r,z:e.z+Math.cos(o)*r,y:e.y,angle:o+Math.PI,canalla:!1})}for(let n=0;n<3;n++)for(let r=0;r<3;r++){let i=r/3*Math.PI*2+n*.2;t.push({pis:n,x:e.x+Math.sin(i)*.28,z:e.z+Math.cos(i)*.28,y:e.y+n*rc,angle:i,canalla:!1})}let n=e.y+3*rc;for(let r of[Math.PI/2,-Math.PI/2])t.push({pis:3,x:e.x+Math.sin(r)*.1,z:e.z+Math.cos(r)*.1,y:n,angle:r,canalla:!0});let r=n+rc*ic;t.push({pis:4,x:e.x,z:e.z,y:r,angle:0,canalla:!0}),t.push({pis:5,x:e.x,z:e.z,y:r+rc*ic*.7,angle:Math.PI/4,canalla:!0});let i=0,a=0;this.gent=t.map(e=>({...e,i:e.canalla?a++:i++})),this.grans=new fe(this.geo(la(Ma)),this.o.material,i),this.petits=new fe(this.geo(la(Na)),this.o.material,a);for(let e of[this.grans,this.petits])e.castShadow=!0,e.receiveShadow=!0,e.name=`castellers`,this.grup.add(e);let o=this.gent.find(e=>e.pis===5);this.maAleta=new H(Fa().geometria(nc*ic,[-.5*nc*ic,0,-.5*nc*ic]),this.o.material),this.maAleta.position.set(o.x+.28*ic*Math.cos(o.angle),o.y+7*nc*ic,o.z-.28*ic*Math.sin(o.angle)),this.maAleta.visible=!1,this.grup.add(this.maAleta),this.situaCastell(5,!0);for(let e of[this.grans,this.petits])e.computeBoundingSphere();this.situaCastell(0,!1)}situaCastell(e,t,n=-1,r=1){let i=this.o3;for(let a of this.gent){let o=a.pis===0||a.pis<=e||t,s=a.y;a.pis===n&&(s=a.y-(1-r)*rc),i.position.set(a.x,s,a.z),i.rotation.set(0,a.angle,0),i.scale.setScalar(o?a.canalla?ic:1:0),i.updateMatrix(),(a.canalla?this.petits:this.grans).setMatrixAt(a.i,i.matrix)}this.grans.instanceMatrix.needsUpdate=!0,this.petits.instanceMatrix.needsUpdate=!0}demanaCastell(){this.estatCastell===`repos`&&(this.repos=0)}actualitzaCastell(e,t,n){let r=this.o.castellers;if(!r||!this.grans)return;let i=Math.hypot(t.x-r.x,t.z-r.z)<ac;if(n){this.estatCastell!==`carregat`&&(this.estatCastell=`carregat`,this.situaCastell(5,!0),this.maAleta&&(this.maAleta.visible=!0));return}let a=.75,o=.55;switch(this.estatCastell){case`repos`:this.repos-=e,i&&this.repos<=0&&(this.estatCastell=`munta`,this.tCastell=0);break;case`munta`:{this.tCastell+=e;let t=1+Math.floor(this.tCastell/a);if(t>5){this.estatCastell=`carregat`,this.tCastell=0,this.situaCastell(5,!1),this.maAleta&&(this.maAleta.visible=!0),i&&this.o.avisa(this.o.textos[`cult.carregat`]);break}this.situaCastell(t,!1,t,this.tCastell%a/a);break}case`carregat`:this.tCastell+=e,this.maAleta&&(this.maAleta.rotation.z=Math.sin(this.tCastell*9)*.35),this.tCastell>1.6&&(this.estatCastell=`desmunta`,this.tCastell=0,this.maAleta&&(this.maAleta.visible=!1));break;case`desmunta`:{this.tCastell+=e;let t=5-Math.floor(this.tCastell/o);if(t<1){this.estatCastell=`repos`,this.repos=15,this.situaCastell(0,!1),i&&(this.o.avisa(this.o.textos[`cult.descarregat`]),this.o.assoleix(`castell`));break}this.situaCastell(t,!1,t,1-this.tCastell%o/o);break}}}creaCorrefoc(e){this.grupFoc.name=`correfoc`,this.grupFoc.visible=!1,this.grup.add(this.grupFoc),this.mDrac=new H(this.geo(Aa()),this.o.material),this.mDrac.castShadow=!0,this.grupFoc.add(this.mDrac),this.diables=new fe(this.geo(la(ja)),this.o.material,5),this.maces=new fe(Pa().geometria(nc,[-.5*nc,0,-.5*nc]),this.o.material,5);let t=new f(new s(e.x,e.y+1,e.z),3.5);for(let e of[this.diables,this.maces])e.boundingSphere=t,e.castShadow=!0,this.grupFoc.add(e);let n=new F;n.setAttribute(`position`,new _(new Float32Array(540),3));let r=new Float32Array(540),i=[[.96,.82,.48],[.88,.63,.19],[.91,.45,.35]];for(let e=0;e<180;e++)r.set(i[e%3],e*3);n.setAttribute(`color`,new _(r,3)),n.boundingSphere=t,this.espurnes=new ot(n,new se({size:2,sizeAttenuation:!1,vertexColors:!0})),this.espurnes.layers.set(1),this.grupFoc.add(this.espurnes);for(let t=0;t<180;t++)this.guspires.push({x:e.x,y:-10,z:e.z,vx:0,vy:0,vz:0,vida:0});this.mouCorrefoc(0,!0)}mouCorrefoc(e,t){let n=this.o.correfoc;if(!n||!this.mDrac||!this.diables||!this.maces)return;t||(this.angleFoc+=e*.32,this.tempsFoc+=e);let r=1.05,i=e=>({x:n.x+Math.sin(e)*r,z:n.z+Math.cos(e)*r,rumb:e+Math.PI/2}),a=i(this.angleFoc),o=t?0:Math.abs(Math.sin(this.tempsFoc*6))*.05;this.mDrac.position.set(a.x,n.y+o,a.z),this.mDrac.rotation.y=a.rumb;let s=this.o3,c=[{x:a.x+Math.sin(a.rumb)*.9,y:n.y+1.3,z:a.z+Math.cos(a.rumb)*.9}];for(let e=0;e<5;e++){let r=i(this.angleFoc-.55-e*.42),a=t?0:Math.abs(Math.sin(this.tempsFoc*7+e*1.3))*.08;s.position.set(r.x,n.y+a,r.z),s.rotation.set(0,r.rumb,0),s.scale.setScalar(1),s.updateMatrix(),this.diables.setMatrixAt(e,s.matrix);let o=r.x+Math.cos(r.rumb)*.45,l=r.z-Math.sin(r.rumb)*.45;s.position.set(o,n.y+a+.55,l),s.rotation.set(t?0:Math.sin(this.tempsFoc*5+e)*.4,r.rumb,0),s.updateMatrix(),this.maces.setMatrixAt(e,s.matrix),c.push({x:o,y:n.y+a+1.5,z:l})}if(this.diables.instanceMatrix.needsUpdate=!0,this.maces.instanceMatrix.needsUpdate=!0,t||!this.espurnes)return;let l=this.espurnes.geometry.attributes.position;this.guspires.forEach((t,n)=>{if(t.vida-=e,t.vida<=0){let e=c[n%c.length],r=Math.random()*Math.PI*2,i=.6+Math.random()*1.4;Object.assign(t,{x:e.x,y:e.y,z:e.z,vx:Math.cos(r)*i,vy:.8+Math.random()*1.8,vz:Math.sin(r)*i,vida:.4+Math.random()*.6})}t.vy-=4.5*e,t.x+=t.vx*e,t.y+=t.vy*e,t.z+=t.vz*e,l.setXYZ(n,t.x,t.y,t.z)}),l.needsUpdate=!0}aplica(e){this.correfoc=!!this.o.correfoc&&sc(e),this.grupFoc.visible=this.correfoc,this.glacat=e.estacio===`hivern`,this.o.estany&&(this.o.estany.aigua.visible=!this.glacat,this.o.estany.gel.visible=this.glacat)}panoramica(e){this.grup.visible=!e}actualitza(e,t,n){this.actualitzaCastell(e,t,n),this.correfoc&&this.mouCorrefoc(e,n)}},lc=[0,4,7,9,7,4,null,2,4,2,0,null,-3,0,2,4,7,9,12,9,7,4,2,null],uc=[-12,-12,-5,-5,-7,-7,-10,-10],dc=60/96/2,fc=e=>220*2**(e/12),pc=class{actiu=!1;ctx=null;onades=null;vent=null;musica=null;seguent=0;pas=0;rellotge=0;entorn={costa:5,altura:1,nit:!1,pluja:!1};commuta(){return this.actiu?this.apaga():this.encen(),this.actiu}encen(){let e=window.AudioContext??window.webkitAudioContext;e&&(this.ctx||this.munta(new e),this.ctx.resume(),this.actiu=!0,this.seguent=this.ctx.currentTime+.1,this.rellotge=window.setInterval(()=>this.programa(),100),this.ajusta(this.entorn))}apaga(){this.actiu=!1,clearInterval(this.rellotge),this.ctx?.suspend()}ajusta(e){if(this.entorn=e,!this.ctx||!this.onades||!this.vent)return;let t=this.ctx.currentTime,n=Math.max(0,1-e.costa/4);this.onades.gain.setTargetAtTime(.05+.25*n+(e.pluja?.08:0),t,.8),this.vent.gain.setTargetAtTime(.02+Math.min(.14,Math.max(0,e.altura-1.5)*.04)+(e.pluja?.05:0),t,.8)}munta(e){this.ctx=e;let t=e.createGain();t.gain.value=.6,t.connect(e.destination);let n=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=n.getChannelData(0),i=0;for(let e=0;e<r.length;e++)i=(i+.02*(Math.random()*2-1))/1.02,r[e]=i*3.5;let a=(r,i,a)=>{let o=e.createBufferSource();o.buffer=n,o.loop=!0;let s=e.createBiquadFilter();s.type=r,s.frequency.value=i,s.Q.value=a;let c=e.createGain();return c.gain.value=0,o.connect(s).connect(c).connect(t),o.start(),{g:c,b:s}},o=a(`lowpass`,700,.5);this.onades=o.g;let s=e.createOscillator();s.frequency.value=.12;let c=e.createGain();c.gain.value=400,s.connect(c).connect(o.b.frequency),s.start(),this.vent=a(`bandpass`,380,.8).g,this.musica=e.createGain(),this.musica.gain.value=.035,this.musica.connect(t)}programa(){let e=this.ctx;if(e&&this.musica&&this.actiu){for(;this.seguent<e.currentTime+.2;){let e=lc[this.pas%lc.length];e!==null&&this.nota(`square`,fc(e+12),this.seguent,dc*.9,1),this.pas%3==0&&this.nota(`triangle`,fc(uc[Math.floor(this.pas/3)%uc.length]),this.seguent,dc*2.8,1.6),this.seguent+=dc,this.pas++}!this.entorn.nit&&!this.entorn.pluja&&Math.random()<.04&&this.piulada(e.currentTime+Math.random()*.1)}}nota(e,t,n,r,i){let a=this.ctx,o=a.createOscillator();o.type=e,o.frequency.value=t;let s=a.createGain();s.gain.setValueAtTime(0,n),s.gain.linearRampToValueAtTime(i,n+.01),s.gain.setTargetAtTime(0,n+r*.6,r*.2),o.connect(s).connect(this.musica),o.start(n),o.stop(n+r+.1)}borda(){let e=this.ctx;if(!e||!this.actiu)return;let t=e.currentTime+.01,n=e.createOscillator();n.type=`sawtooth`,n.frequency.setValueAtTime(720,t),n.frequency.exponentialRampToValueAtTime(330,t+.13);let r=e.createBiquadFilter();r.type=`bandpass`,r.frequency.value=900,r.Q.value=1.2;let i=e.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.16,t+.015),i.gain.exponentialRampToValueAtTime(.001,t+.16),n.connect(r).connect(i).connect(e.destination),n.start(t),n.stop(t+.2)}piulada(e){let t=this.ctx,n=t.createOscillator();n.type=`sine`;let r=2400+Math.random()*1600;n.frequency.setValueAtTime(r,e),n.frequency.exponentialRampToValueAtTime(r*1.4,e+.06),n.frequency.exponentialRampToValueAtTime(r*.9,e+.12);let i=t.createGain();i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.03,e+.02),i.gain.linearRampToValueAtTime(0,e+.14),n.connect(i).connect(t.destination),n.start(e),n.stop(e+.2)}},mc=.26,hc=3.4,gc=5.6,_c=5.9,vc=1.3,yc=.5,bc=24e3,xc=class{mon;grup=new C;posicio=new s;cos;cames;biciMalla;base;bici=!1;orientacio=0;fase=0;cami=[];enMoviment=!1;enArribar=null;constructor(e){this.mon=e;let t=new Ee({vertexColors:!0}),{cos:n,cama:r}=be();this.cos=new H(n.geometria(X,[-4*X,3*X,-3*X]),t);let i=r.geometria(X,[-1*X,-3*X,-1*X]);this.cames=[new H(i,t),new H(i,t)],this.cames[0].position.set(-1.5*X,3*X,0),this.cames[1].position.set(1.5*X,3*X,0),this.base={cos:this.cos.geometry,cama:i},this.biciMalla=new H(ga().geometria(X,[-.5*X,0,-4.5*X]),t),this.biciMalla.visible=!1;for(let e of[this.cos,...this.cames,this.biciMalla])e.castShadow=!0,e.receiveShadow=!0,this.grup.add(e)}get enBici(){return this.bici}set enBici(e){this.bici=e,this.biciMalla.visible=e;let t=e?vc*X:0;this.cames[0].position.y=3*X+t,this.cames[1].position.y=3*X+t}vesteix(e){let t=e?e.cos.geometria(X,[-4*X,3*X,-3*X]):this.base.cos,n=e?e.cama.geometria(X,[-1*X,-3*X,-1*X]):this.base.cama;this.cos.geometry!==this.base.cos&&this.cos.geometry.dispose(),this.cames[0].geometry!==this.base.cama&&this.cames[0].geometry.dispose(),this.cos.geometry=t,this.cames[0].geometry=n,this.cames[1].geometry=n}teletransporta(e,t,n){this.posicio.set(e,this.mon.sol(e,t),t),n!==void 0&&(this.orientacio=n),this.cami=[],this.enArribar=null}fixa(e,t,n,r){this.posicio.set(e,t,n),this.orientacio=r,this.grup.rotation.y=r,this.enMoviment=!1,this.fase=0,this.cames[0].rotation.x=0,this.cames[1].rotation.x=0,this.cos.position.y=0}atura(){this.cami=[],this.enArribar=null}caminaA(e,t,n=null){let r=Cc(this.mon,this.posicio.x,this.posicio.z,e,t);return r?(this.cami=r,this.enArribar=n,!0):!1}get enCami(){return this.cami.length>0}puntDavant(e){if(!this.cami.length)return null;let t=e,n={x:this.posicio.x,z:this.posicio.z};for(let e of this.cami){let r=Math.hypot(e.x-n.x,e.z-n.z);if(r>=t)return{x:n.x+(e.x-n.x)*t/r,z:n.z+(e.z-n.z)*t/r};t-=r,n=e}return n}actualitza(e,t,n,r){let i=0,a=0,o=this.bici?_c:n?gc:hc;if(t&&t.lengthSq()>0)this.atura(),i=t.x*o,a=t.z*o;else if(this.cami.length){let e=this.cami[0],t=e.x-this.posicio.x,n=e.z-this.posicio.z,r=Math.hypot(t,n);if(r<.08){if(this.cami.shift(),!this.cami.length){let e=this.enArribar;this.enArribar=null,e?.()}}else i=t/r*o,a=n/r*o}if(this.enMoviment=i!==0||a!==0,this.enMoviment){let t=this.posicio.x+i*e,r=this.mon.lliure(t,this.posicio.z,mc);r&&(this.posicio.x=t);let o=this.posicio.z+a*e,s=this.mon.lliure(this.posicio.x,o,mc);s&&(this.posicio.z=o),!r&&!s&&this.cami.length&&this.atura(),this.orientacio=Math.round(Math.atan2(i,a)/(Math.PI/4))*(Math.PI/4),this.fase+=e*(n?16:11)}else this.fase=0;let s=this.mon.sol(this.posicio.x,this.posicio.z);this.posicio.y+=(s-this.posicio.y)*Math.min(1,e*18);let c=r?0:Math.sin(this.fase);this.cames[0].rotation.x=c*(this.bici?.9:.6),this.cames[1].rotation.x=-c*(this.bici?.9:.6),this.cos.position.y=this.bici?vc*X:this.enMoviment&&!r?Math.abs(Math.cos(this.fase))*X:0,this.grup.rotation.y=this.orientacio}},Sc=class{claus=[];valors=[];get mida(){return this.claus.length}posa(e,t){let n=this.claus,r=this.valors,i=n.length;for(n.push(t),r.push(e);i>0;){let e=i-1>>1;if(n[e]<=n[i])break;[n[e],n[i]]=[n[i],n[e]],[r[e],r[i]]=[r[i],r[e]],i=e}}treu(){let e=this.claus,t=this.valors,n=t[0],r=e.pop(),i=t.pop();if(e.length){e[0]=r,t[0]=i;let n=0;for(;;){let r=2*n+1,i=r+1,a=n;if(r<e.length&&e[r]<e[a]&&(a=r),i<e.length&&e[i]<e[a]&&(a=i),a===n)break;[e[a],e[n]]=[e[n],e[a]],[t[a],t[n]]=[t[n],t[a]],n=a}}return n}};function Cc(e,t,n,r,i){let a=e=>Math.floor(e/yc),o=e=>(e+.5)*yc,[s,c]=[a(t),a(n)],[l,u]=[a(r),a(i)];if(!e.lliure(r,i,mc)&&!e.lliure(o(l),o(u),mc))return null;let d=(e,t)=>(t+2048)*4096+(e+2048),f=new Map,p=new Map,m=new Set,h=(e,t)=>{let n=Math.abs(e-l),r=Math.abs(t-u);return(Math.max(n,r)+(Math.SQRT2-1)*Math.min(n,r))*yc},g=new Map,_=(t,n)=>{let r=d(t,n),i=g.get(r);return i===void 0&&(i=e.lliure(o(t),o(n),mc),g.set(r,i)),i},v=new Sc,y=d(s,c);f.set(y,0),v.posa(y,h(s,c));let b=0;for(;v.mida&&b++<bc;){let a=v.treu();if(m.has(a))continue;m.add(a);let s=a%4096-2048,c=Math.floor(a/4096)-2048;if(s===l&&c===u){let s=[{x:r,z:i}],c=p.get(a);for(;c!==void 0&&c!==y;)s.unshift({x:o(c%4096-2048),z:o(Math.floor(c/4096)-2048)}),c=p.get(c);return wc(e,t,n,s)}let g=e.sol(o(s),o(c));for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){if(!n&&!t)continue;let r=s+n,i=c+t,y=d(r,i);if(m.has(y)||(r!==l||i!==u)&&!_(r,i)||n&&t&&(!_(s+n,c)||!_(s,c+t)))continue;let b=Math.abs(e.sol(o(r),o(i))-g),x=f.get(a)+(n&&t?Math.SQRT2:1)*yc+b*1.5;x<(f.get(y)??1/0)&&(f.set(y,x),p.set(y,a),v.posa(y,x+h(r,i)))}}return null}function wc(e,t,n,r){let i=[],a={x:t,z:n},o=0;for(;o<r.length;){let t=Math.min(r.length-1,o+24);for(;t>o&&!Tc(e,a.x,a.z,r[t].x,r[t].z);)t--;i.push(r[t]),a=r[t],o=t+1}return i}function Tc(e,t,n,r,i){if(!e.segmentLliure(t,n,r,i,mc))return!1;let a=Math.ceil(Math.hypot(r-t,i-n)/.2);for(let o=1;o<=a;o++)if(!e.lliure(t+(r-t)*o/a,n+(i-n)*o/a,mc))return!1;return!0}var Ec=1/8,Dc={crema:{dalt:`#f7ebc4`,costat:`#ffffff`,clar:`#ffffff`,orellaDins:`#f1c7a3`,nas:`#c98d6b`,ulls:`#1b2330`,llengua:`#e8735a`,collar:`#e0a030`},vermell:{dalt:`#c98a4b`,costat:`#d9a066`,clar:`#fbfaf7`,orellaDins:`#f1c7a3`,nas:`#1b2330`,ulls:`#1b2330`,llengua:`#e8735a`,collar:`#c8323c`},sesam:{dalt:`#7f5230`,costat:`#c98a4b`,clar:`#fbfaf7`,orellaDins:`#f1c7a3`,nas:`#1b2330`,ulls:`#1b2330`,llengua:`#e8735a`,collar:`#e0a030`},negreFoc:{dalt:`#262b44`,costat:`#262b44`,clar:`#f1c7a3`,orellaDins:`#c98d6b`,nas:`#1b2330`,ulls:`#0d0f1a`,llengua:`#e8735a`,collar:`#e0a030`}}.vermell,Oc={potes:3,cos:{ample:4,alt:3,llarg:7}};function kc(e){let{ample:t,alt:n,llarg:r}=Oc.cos,i=new W(t,n,r);return i.caixa(0,0,0,t,n,r,e.costat),i.caixa(0,n-1,0,t,n,r,e.dalt),i.caixa(1,0,1,t-1,1,r-1,e.clar),i.caixa(0,0,r-1,t,n-1,r,e.clar),i.caixa(0,n-1,r-1,t,n,r,e.collar),i.set(1,n-2,r-1,e.collar),i.set(2,n-2,r-1,`#f5d27a`),i}function Ac(e){let t=new W(4,5,5);t.caixa(0,0,0,4,3,3,e.costat),t.caixa(0,2,0,4,3,3,e.dalt),t.caixa(0,0,2,4,1,3,e.clar),t.caixa(1,0,3,3,2,5,e.clar),t.caixa(1,1,3,3,2,4,e.dalt),t.set(1,1,4,e.nas),t.set(2,1,4,e.nas),t.set(0,1,2,e.ulls),t.set(3,1,2,e.ulls);for(let n of[0,3]){let r=n===0?1:2;t.set(n,3,1,e.dalt),t.set(r,3,1,e.orellaDins),t.set(n,4,1,e.dalt),t.set(n,3,0,e.dalt),t.set(r,3,0,e.dalt)}return t}function jc(e){let t=new W(1,Oc.potes,1);return t.caixa(0,1,0,1,Oc.potes,1,e.costat),t.set(0,0,0,e.clar),t}function Mc(e){let t=new W(2,4,4);return t.caixa(0,0,0,2,1,1,e.dalt),t.caixa(0,1,0,2,2,1,e.dalt),t.caixa(0,2,0,2,3,2,e.dalt),t.caixa(0,3,1,2,4,3,e.dalt),t.caixa(0,2,2,2,3,4,e.clar),t.set(0,1,3,e.clar),t}function Nc(e){let t=new W(1,1,2);return t.caixa(0,0,0,1,1,2,e.llengua),t}function Pc(e=Dc,t=new Ee({vertexColors:!0})){let n=[],r=(e,r)=>{let i=new H(e.geometria(Ec,r),t);return i.castShadow=!0,i.receiveShadow=!0,n.push(i),i},{ample:i,alt:a,llarg:o}=Oc.cos,s=Oc.potes,c=new C;c.name=`suki`;let l=new C;l.position.y=s*Ec,c.add(l),l.add(r(kc(e),[-i/2*Ec,0,-o/2*Ec]));let u=new C;u.position.set(0,(a-1)*Ec,(o/2-1)*Ec),u.add(r(Ac(e),[-2*Ec,0,-.5*Ec]));let d=r(Nc(e),[-.5*Ec,0,0]);d.position.set(0,-.1*Ec,3.2*Ec),d.visible=!1,u.add(d),l.add(u);let f=new C;f.position.set(0,(a-1)*Ec,(-o/2+.5)*Ec),f.add(r(Mc(e),[-1*Ec,0,-.5*Ec])),l.add(f);let p=jc(e);return{arrel:c,tronc:l,cap:u,cua:f,llengua:d,potes:[[-1.5,o/2-1.5],[1.5,o/2-1.5],[-1.5,-o/2+1.5],[1.5,-o/2+1.5]].map(([e,t])=>{let n=new C;return n.position.set(e*Ec,s*Ec,t*Ec),n.add(r(p,[-.5*Ec,-s*Ec,-.5*Ec])),c.add(n),n}),malles:n}}var Fc={pas:0,desfas:Math.PI,rebot:.1,capcineig:0,inclinacio:-.42,alcada:-.9,plegades:1,davant:0,pota:0,cua:.45,cuaVelocitat:5,llengua:!0},Ic={quieta:{pas:0,desfas:Math.PI,rebot:.15,capcineig:0,inclinacio:0,alcada:0,plegades:0,davant:0,pota:0,cua:.3,cuaVelocitat:4,llengua:!1},camina:{pas:.5,desfas:Math.PI,rebot:.45,capcineig:.05,inclinacio:0,alcada:0,plegades:0,davant:0,pota:0,cua:.35,cuaVelocitat:9,llengua:!1},corre:{pas:.85,desfas:.25,rebot:.9,capcineig:.12,inclinacio:.02,alcada:.2,plegades:0,davant:0,pota:0,cua:.15,cuaVelocitat:14,llengua:!0},seu:Fc,estirada:{pas:0,desfas:Math.PI,rebot:.05,capcineig:0,inclinacio:0,alcada:-1.9,plegades:1,davant:1,pota:0,cua:.25,cuaVelocitat:3,llengua:!1},pota:{...Fc,pota:1,cua:.5,cuaVelocitat:7},borda:{pas:0,desfas:Math.PI,rebot:.15,capcineig:0,inclinacio:-.05,alcada:0,plegades:0,davant:0,pota:0,cua:.4,cuaVelocitat:10,llengua:!1}},Lc=[`pas`,`desfas`,`rebot`,`capcineig`,`inclinacio`,`alcada`,`plegades`,`davant`,`pota`,`cua`,`cuaVelocitat`],Rc=class{peces;actual={...Ic.quieta};fase=0;rellotge=0;constructor(e){this.peces=e}actualitza(e,t,n,r){let i=Ic[t],a=1-Math.exp(-e/.12);for(let e of Lc)this.actual[e]+=(i[e]-this.actual[e])*a;this.actual.llengua=i.llengua,this.rellotge+=e;let o=t!==`camina`&&t!==`corre`;this.fase+=e*Math.max(n,o?0:1.5)*(t===`corre`?1.9:2.8);let s=this.actual,{tronc:c,cap:l,cua:u,potes:d,llengua:f}=this.peces,p=+!r,m=Math.sin(this.fase),h=Math.sin(this.fase+s.desfas);d[0].rotation.x=m*s.pas*p-s.davant*1.45-s.pota*(1.15+Math.sin(this.rellotge*6)*.12*p),d[1].rotation.x=(s.desfas>1?-m:m)*s.pas*p-s.davant*1.45,d[2].rotation.x=(s.desfas>1?-m:h)*s.pas*p-s.plegades*1.25,d[3].rotation.x=h*s.pas*p-s.plegades*1.25;for(let e of[d[2],d[3]])e.position.y=(3-s.plegades*1.4)*Ec;for(let e of[d[0],d[1]])e.position.y=(3-s.davant*1.9)*Ec;c.position.y=(3+s.alcada+Math.abs(Math.cos(this.fase))*s.rebot*p)*Ec,c.rotation.x=s.inclinacio+Math.sin(this.fase*2)*s.capcineig*.5*p;let g=t===`borda`?Math.max(0,Math.sin(this.rellotge*11))*.3:0;l.rotation.x=-s.inclinacio*.8+Math.sin(this.fase*2)*s.capcineig*p-g,l.rotation.y=t===`quieta`?Math.sin(this.rellotge*.6)*.35*p:_e.lerp(l.rotation.y,0,.2),u.rotation.z=Math.sin(this.rellotge*s.cuaVelocitat)*s.cua*p,f.visible=s.llengua||t===`borda`}},zc={distancia:1.3,velocitatMaxima:6.4,guany:3.4,acceleracio:.16,llindarCorre:3.9,llindarCamina:.25,espera:3.5,massaLluny:12,radi:.18},Bc=[`seu`,`estira`,`pota`,`volta`,`salta`,`borda`,`vine`,`queda`,`segueix`],Vc={seu:{durada:8,estat:`seu`},estira:{durada:10,estat:`estirada`},pota:{durada:2.6,estat:`pota`},volta:{durada:.9,estat:`quieta`},salta:{durada:.7,estat:`quieta`},borda:{durada:1.5,estat:`borda`}},Hc=class{mon;grup=new C;cap;posicio=new s;estat=`quieta`;ordreActual=null;enBordar=null;velocitat=0;orientacio=0;tempsQuieta=0;rastre=[];animacio;cos;fixada=null;accio=null;queda=!1;desti=null;tempsLladruc=0;constructor(e,t=Dc){this.mon=e;let n=Pc(t);this.cos=n.arrel,this.cap=n.cap,this.grup.name=`suki`,this.grup.add(this.cos),this.animacio=new Rc(n)}get ocupada(){return!!this.desti}apareix(e){let[t,n]=[Math.sin(e.orientacio),Math.cos(e.orientacio)],r=[[-.9,.7],[-.9,-.7],[0,1],[0,-1],[.8,.8],[.8,-.8],[-1.4,0],[1.2,0]],i=null;for(let[a,o]of r){let r=e.posicio.x+t*a+n*o,s=e.posicio.z+n*a-t*o;if(this.mon.lliure(r,s,zc.radi)){i=[r,s];break}}for(let t=1.5;!i&&t<=3;t+=.5)for(let n=0;n<12&&!i;n++){let r=e.posicio.x+Math.cos(n/12*Math.PI*2)*t,a=e.posicio.z+Math.sin(n/12*Math.PI*2)*t;this.mon.lliure(r,a,zc.radi)&&(i=[r,a])}let[a,o]=i??[e.posicio.x,e.posicio.z];this.posicio.set(a,this.mon.sol(a,o),o),this.velocitat=0,this.orientacio=e.orientacio,this.rastre.length=0,this.queda=!1}fixa(e){this.fixada=e,e||(this.rastre.length=0)}ordre(e){if(this.fixada||this.desti)return!1;switch(this.ordreActual=e,e){case`segueix`:return this.queda=!1,this.accio=null,!0;case`queda`:return this.queda=!0,this.accio=null,!0;case`vine`:return this.queda=!1,this.accio=null,this.rastre.length=0,!0;default:{let t=Vc[e];return this.accio={nom:e,t:0,durada:t.durada,estat:t.estat},e===`borda`&&this.borda(),!0}}}ves(e){this.desti=e,this.accio=null,this.queda=!1,e&&(this.ordreActual=null)}bordaCap(e,t){this.fixada||this.desti||this.accio||(this.orientacio=Math.atan2(e-this.posicio.x,t-this.posicio.z),this.ordre(`borda`),this.ordreActual=null)}borda(){this.tempsLladruc=0,this.enBordar?.()}actualitza(e,t,n){if(this.cos.position.y=0,this.cos.rotation.y=0,this.fixada){this.posicio.set(this.fixada.x,this.fixada.y,this.fixada.z),this.orientacio=this.fixada.orientacio,this.estat=`seu`,this.animacio.actualitza(e,`seu`,0,n),this.grup.rotation.y=this.orientacio;return}let r=this.rastre.at(-1);(!r||r.distanceTo(t.posicio)>.3)&&(this.rastre.push(t.posicio.clone()),this.rastre.length>48&&this.rastre.shift());let i=Math.hypot(t.posicio.x-this.posicio.x,t.posicio.z-this.posicio.z);if(i>zc.massaLluny&&!this.desti&&this.apareix(t),this.accio){let r=this.accio;r.t+=e;let a=i>2.6&&(r.nom===`seu`||r.nom===`estira`||r.nom===`pota`);if(r.t>=r.durada||a)this.accio=null,this.ordreActual===r.nom&&(this.ordreActual=null);else{this.velocitat=0,this.estat=r.estat,r.nom===`volta`&&!n&&(this.cos.rotation.y=r.t/r.durada*Math.PI*2),r.nom===`salta`&&!n&&(this.cos.position.y=Math.sin(r.t/r.durada*Math.PI)*.55),r.nom===`borda`&&(this.tempsLladruc+=e)>.55&&this.borda(),this.acaba(e,t,n,!1);return}}let a=null,o=.12;if(this.desti){let e=this.desti.punt();if(!e)this.desti=null;else if(a=e,o=this.desti.llindar,Math.hypot(e.x-this.posicio.x,e.z-this.posicio.z)<=o){let e=this.desti;this.desti=null,e.enArribar?.()===!1&&!this.desti&&!this.accio&&(this.desti=e)}}!a&&this.queda&&(a={x:this.posicio.x,z:this.posicio.z},o=1),a||=this.puntDelRastre(t)??{x:t.posicio.x-Math.sin(t.orientacio)*.8+Math.cos(t.orientacio)*.6,z:t.posicio.z-Math.cos(t.orientacio)*.8-Math.sin(t.orientacio)*.6};let s=a.x-this.posicio.x,c=a.z-this.posicio.z,l=Math.hypot(s,c),u=this.desti?l>o*.5?zc.velocitatMaxima:0:Math.min(zc.velocitatMaxima,Math.max(0,(l-(this.queda?1:.12))*zc.guany));if(this.velocitat+=(u-this.velocitat)*(1-Math.exp(-e/zc.acceleracio)),l>.001&&this.velocitat>.02){let t=Math.min(l,this.velocitat*e),n=this.posicio.x+s/l*t,r=this.posicio.z+c/l*t,i=zc.radi;this.mon.lliure(n,r,i)?this.posicio.set(n,this.posicio.y,r):this.mon.lliure(n,this.posicio.z,i)?this.posicio.x=n:this.mon.lliure(this.posicio.x,r,i)?this.posicio.z=r:this.velocitat*=.5}let d=(this.velocitat>.3?Math.atan2(s,c):Math.atan2(t.posicio.x-this.posicio.x,t.posicio.z-this.posicio.z))-this.orientacio;d=Math.atan2(Math.sin(d),Math.cos(d)),this.orientacio+=d*(1-Math.exp(-e/.1)),this.estat=this.velocitat>zc.llindarCorre?`corre`:this.velocitat>zc.llindarCamina?`camina`:this.queda||this.tempsQuieta>zc.espera?`seu`:`quieta`,this.tempsQuieta=this.estat===`camina`||this.estat===`corre`?0:this.tempsQuieta+e,this.acaba(e,t,n,!0)}acaba(e,t,n,r){let i=this.mon.sol(this.posicio.x,this.posicio.z);this.posicio.y+=(i-this.posicio.y)*Math.min(1,e*18),this.grup.rotation.y=this.orientacio,this.animacio.actualitza(e,this.estat,r?this.velocitat:0,n)}puntDelRastre(e){let t=zc.distancia,n=e.posicio;for(let e=this.rastre.length-1;e>=0;e--){let r=this.rastre[e],i=n.distanceTo(r);if(i>=t)return n.clone().lerp(r,t/i);t-=i,n=r}return null}},Uc=.8,Wc=1.4,Gc=class{escena;malla;estat=`guardada`;desti=new s;origen=new s;t=0;constructor(e,t){this.escena=t,this.malla=new H(ua().geometria(X,[-1.5*X,0,-1.5*X]),e),this.malla.name=`pilota`,this.malla.castShadow=!0}llanca(e,t,n){this.origen.copy(e),this.desti.copy(t),this.t=n?Uc:0,this.estat=`volant`,this.escena.add(this.malla),this.malla.position.copy(n?t:e)}actualitza(e){if(this.estat!==`volant`)return;this.t=Math.min(Uc,this.t+e);let t=this.t/Uc;this.malla.position.lerpVectors(this.origen,this.desti,t),this.malla.position.y+=Math.sin(t*Math.PI)*Wc,this.malla.rotation.x+=e*9,t>=1&&(this.malla.position.copy(this.desti),this.estat=`terra`)}aLaBoca(e){e.add(this.malla),this.malla.position.set(0,.1*X,5.3*X),this.malla.rotation.set(0,0,0),this.estat=`boca`}guarda(){this.malla.removeFromParent(),this.estat=`guardada`}},Kc=class extends Error{codi;constructor(e){super(e),this.codi=e}},qc=2e4;async function Jc(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),qc);n?.addEventListener(`abort`,()=>r.abort());let a;try{a=await fetch(e,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify(t),signal:r.signal,credentials:`omit`,referrerPolicy:`strict-origin`})}catch{throw new Kc(`xarxa`)}finally{clearTimeout(i)}if(a.status===429)throw new Kc((await a.json().catch(()=>({}))).error===`quota`?`quota`:`limit`);if(a.status===503)throw new Kc(`inactiva`);if(!a.ok)throw new Kc(`model`);return await a.json()}var Yc=class{url;lang;constructor(e,t){this.url=e,this.lang=t}async xat(e,t,n,r){let i=await Jc(`${this.url}/xat`,{personatge:e,lang:this.lang,missatges:t.slice(-12),context:n},r);if(i.buit)throw new Kc(`buit`);return{text:typeof i.text==`string`?i.text:``,accions:Array.isArray(i.accions)?i.accions:[]}}tokenVeu(e,t){return Jc(`${this.url}/veu`,{personatge:e,lang:this.lang,context:t})}};function Xc(e,t){let n=t.get(`ia`);if(n===`0`)return null;if(n&&t.has(`proves`))try{let e=new URL(n);if(e.hostname===`127.0.0.1`||e.hostname===`localhost`)return e.origin+e.pathname.replace(/\/$/,``)}catch{}return e?e.replace(/\/$/,``):null}var Zc=class{o;actual=null;veu=null;el;fil;nom;ofici;opcions;caixaIA;form;text;botoVeu;activaIA;estatEl;t;historial=new Map;parcials={};enviant=!1;rellotgeVeu=0;abansDObrir=null;constructor(t){this.o=t;let n=t.arrel.querySelector(`.conversa`);this.el=n,this.t=JSON.parse(n.dataset.textos??`{}`),this.fil=n.querySelector(`.conversa__fil`),this.nom=n.querySelector(`.conversa__nom`),this.ofici=n.querySelector(`.conversa__ofici`),this.opcions=n.querySelector(`.conversa__opcions`),this.caixaIA=n.querySelector(`.conversa__ia`),this.form=n.querySelector(`.conversa__form`),this.text=n.querySelector(`.conversa__text`),this.botoVeu=n.querySelector(`.js-veu`),this.activaIA=n.querySelector(`.js-activa-ia`),this.estatEl=n.querySelector(`.conversa__estat`),n.querySelector(`.js-tanca-conversa`).addEventListener(`click`,()=>this.tanca()),n.addEventListener(`keydown`,e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),this.tanca())}),n.querySelector(`.js-ia-si`).addEventListener(`click`,()=>this.decideix(`si`)),n.querySelector(`.js-ia-no`).addEventListener(`click`,()=>this.decideix(`no`)),this.activaIA.addEventListener(`click`,()=>{e.ia=null,this.actualitzaIA(),n.querySelector(`.js-ia-si`)?.focus()}),this.form.addEventListener(`submit`,e=>{e.preventDefault(),this.envia()}),this.botoVeu.addEventListener(`click`,()=>void this.commutaVeu())}get obert(){return!this.el.hidden}get rect(){return this.obert?this.el.getBoundingClientRect():null}get parlant(){return this.veu?.parlant?this.actual:null}obre(t){if(this.obert&&this.actual===t){this.enfoca();return}this.obert&&this.tanca(!1),this.abansDObrir=document.activeElement instanceof HTMLElement?document.activeElement:null,this.actual=t,t!==`suki`&&e.parla(t);let n=this.o.manifest,r=t===`suki`?null:n.personatges[t];this.nom.textContent=r?r.nom:`Suki`,this.ofici.textContent=r?r.ofici:n.suki.ofici,this.el.dataset.personatge=t,this.fil.replaceChildren();let i=this.historial.get(t)??[];i.length||this.missatge(`personatge`,r?r.salutacio:n.suki.salutacio);for(let e of i)this.missatge(e.rol,e.text);this.pintaOpcions(),this.actualitzaIA(),this.estatEl.textContent=``,this.el.hidden=!1,this.o.enCanvi(!0),this.enfoca()}tanca(e=!0){if(!this.obert)return;this.aturaVeu(`visitant`),this.el.hidden=!0,this.actual=null,this.o.enCanvi(!1);let t=this.abansDObrir;e&&t&&t!==document.body&&t.isConnected&&!this.el.contains(t)&&t.focus({preventScroll:!0}),(this.el.contains(document.activeElement)||document.activeElement===document.body||e&&document.activeElement!==t)&&this.o.arrel.focus({preventScroll:!0})}enfoca(){((this.form.hidden?this.caixaIA.hidden?this.el.querySelector(`.conversa__opcions button`):this.caixaIA.querySelector(`button`):this.text)??this.el.querySelector(`.js-tanca-conversa`))?.focus({preventScroll:!0})}missatge(e,t,n){let r=document.createElement(`p`);if(r.className=`conversa__msg conversa__msg--${e}`,e!==`sistema`){let t=document.createElement(`span`);t.className=`conversa__qui`,t.textContent=`${e===`visitant`?this.t.tu:this.nom.textContent}: `,r.append(t)}if(r.append(t),n){let e=document.createElement(`button`);e.type=`button`,e.className=`boto boto--secundari conversa__accio`,e.textContent=n.text,e.addEventListener(`click`,n.fes),r.append(` `,e)}return this.fil.append(r),this.fil.scrollTop=this.fil.scrollHeight,r}recorda(e,t){if(!this.actual)return;let n=this.historial.get(this.actual)??[];n.push({rol:e,text:t}),this.historial.set(this.actual,n.slice(-16))}boto(e,t,n=``){let r=document.createElement(`button`);return r.type=`button`,r.className=`boto boto--secundari ${n}`.trim(),r.textContent=e,r.addEventListener(`click`,t),r}pintaOpcions(){let e=this.actual,t=this.o.manifest;if(this.opcions.replaceChildren(),e){if(e===`suki`){for(let e of t.suki.ordres)this.opcions.append(this.boto(e.text,()=>{this.missatge(`visitant`,e.text),this.recorda(`visitant`,e.text);let t=this.o.executa(`suki`,{nom:`fes`,args:{accio:e.ordre}})===!1?this.t.ocupada:e.reaccio;this.missatge(`personatge`,t),this.recorda(`personatge`,t)}));this.o.tePilota()&&this.opcions.append(this.boto(this.t.llanca,()=>{this.missatge(`visitant`,this.t.llanca);let e=this.o.executa(`suki`,{nom:`busca_pilota`,args:{}});this.missatge(`personatge`,e===!1?this.t.ocupada:this.t.llancaReaccio)},`conversa__pilota`));let e=document.createElement(`div`);e.className=`conversa__guia`;let n=`conversa-guia`,r=document.createElement(`label`);r.htmlFor=n,r.textContent=this.t.guia;let i=document.createElement(`select`);i.id=n;for(let e of t.destins)i.append(new Option(e.nom,e.id));let a=this.boto(this.t.guiaBoto,()=>{let e=t.destins.find(e=>e.id===i.value)?.nom??i.value;this.missatge(`visitant`,`${this.t.guia} ${e}`);let n=this.o.executa(`suki`,{nom:`guia`,args:{lloc:i.value}});this.missatge(`personatge`,n===!1?this.t.ocupada:this.t.guiaReaccio)});e.append(r,i,a),this.opcions.append(e);return}for(let n of t.personatges[e].preguntes)this.opcions.append(this.boto(n.text,()=>{this.missatge(`visitant`,n.text),this.recorda(`visitant`,n.text);let t=n.boto;this.missatge(`personatge`,n.resposta,t?{text:t.text,fes:()=>this.o.executa(e,t.accio)}:void 0),this.recorda(`personatge`,n.resposta)}))}}actualitzaIA(){let t=!!this.o.ia,n=e.ia;this.caixaIA.hidden=!t||n!==null,this.form.hidden=!t||n!==`si`,this.activaIA.hidden=!t||n!==`no`,this.botoVeu.hidden=!(`mediaDevices`in navigator)||!(`AudioWorkletNode`in window)||!(`WebSocket`in window)}decideix(t){e.ia=t,this.actualitzaIA(),this.enfoca()}async envia(){let t=this.actual,n=this.o.ia,r=this.text.value.trim().slice(0,300);if(t&&n&&r&&!this.enviant&&e.ia===`si`){if(this.text.value=``,this.missatge(`visitant`,r),this.recorda(`visitant`,r),this.veu?.activa){this.veu.enviaText(r);return}this.enviant=!0,this.form.setAttribute(`aria-busy`,`true`),this.estatEl.textContent=this.t.pensant;try{let e=await n.xat(t,this.historial.get(t)??[],this.o.context());if(this.actual!==t)return;let r=e.text||(t===`suki`?this.o.manifest.suki.salutacio:``);r&&(this.missatge(`personatge`,r),this.recorda(`personatge`,r)),this.estatEl.textContent=``;for(let n of e.accions)this.o.executa(t,n)}catch(e){if(this.actual!==t)return;let n=e instanceof Kc?e.codi:`model`;this.estatEl.textContent=this.t.err[n],this.missatge(`sistema`,this.t.err[n])}finally{this.enviant=!1,this.form.removeAttribute(`aria-busy`)}}}async commutaVeu(){if(this.veu?.activa){this.aturaVeu(`visitant`);return}let n=this.actual,r=this.o.ia;if(!n||!r||e.ia!==`si`)return;this.botoVeu.setAttribute(`aria-pressed`,`true`),this.botoVeu.textContent=this.t.atura,this.estatEl.textContent=this.t.connectant;let{SessioVeu:i}=await t(async()=>{let{SessioVeu:e}=await import(`./veu.DuaRFnza.js`);return{SessioVeu:e}},[]);if(this.actual!==n)return;let a=new i({obteToken:()=>r.tokenVeu(n,this.o.context()),reprodueix:n!==`suki`,enText:(e,t,n)=>this.transcripcio(e,t,n),enAccio:(e,t)=>{let r={};for(let[e,n]of Object.entries(t))typeof n==`string`&&(r[e]=n);this.o.executa(n,{nom:e,args:r})},enEstat:(e,t)=>this.estatVeu(e,t)});this.veu=a,await a.comenca()}transcripcio(e,t,n){if(e===`personatge`&&this.actual===`suki`)return;let r=this.parcials[e];r?r.lastChild.textContent=t:(r=this.missatge(e,t),r.setAttribute(`aria-hidden`,`true`),this.parcials[e]=r),this.fil.scrollTop=this.fil.scrollHeight,n&&(r.remove(),delete this.parcials[e],this.missatge(e,t),this.recorda(e,t))}estatVeu(e,t){if(clearInterval(this.rellotgeVeu),e===`connectant`){this.estatEl.textContent=this.t.connectant;return}if(e===`escoltant`){let e=Date.now()+18e4,t=()=>{let t=Math.max(0,Math.round((e-Date.now())/1e3));this.estatEl.textContent=`${this.t.escoltant} ${this.t.queden.replace(`{t}`,`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`)}`};t(),this.rellotgeVeu=window.setInterval(t,1e3);return}this.botoVeu.setAttribute(`aria-pressed`,`false`),this.botoVeu.textContent=this.t.parla,this.veu=null;let n={micro:this.t.err.micro,token:this.t.err.token,xarxa:this.t.err.xarxa},r=e===`error`?n[t??`xarxa`]??this.t.err.xarxa:t===`temps`?this.t.fiTemps:t===`xarxa`?this.t.err.xarxa:this.t.fiVeu;this.estatEl.textContent=r,(e===`error`||t===`temps`)&&this.missatge(`sistema`,r)}aturaVeu(e){this.veu?.atura(e),this.veu=null,clearInterval(this.rellotgeVeu);for(let e of Object.values(this.parcials))e?.removeAttribute(`aria-hidden`);this.parcials={}}},Qc={riu:[`carpa`,`anguila`,`barb`],costa:[`llobarro`,`orada`,`llissa`,`moll`],mar:[`sard`,`verat`,`dento`,`sorell`]},$c=e=>e<.5?2*e*e:1-(-2*e+2)**2/2,el=class{d;mode=null;zoomObjectiu;zoomActual;tempsPanorama=0;t;vela=null;vol=null;globus=null;bot=null;pesca=null;aiguaPla=new lt(new s(0,1,0),-0);metro;cims;constructor(e){this.d=e,this.t=e.textos,this.zoomObjectiu=e.ppuBase,this.zoomActual=e.ppuBase,this.cims=co(),this.metro=e.arrel.querySelector(`dialog.metro`),this.metro?.addEventListener(`click`,e=>{let t=e.target.closest(`[data-estacio]`);t&&!t.disabled?(e.preventDefault(),this.metro.close(),this.viatjaMetro(t.dataset.estacio)):(e.target===this.metro||e.target.closest(`.js-tanca-metro`))&&this.metro.close()})}get controla(){return this.mode!==null}get metroObert(){return!!this.metro?.open}panorama(e,t){this.zoomObjectiu=e,this.tempsPanorama=t}tornaZoom(){this.zoomObjectiu=this.d.ppuBase,this.tempsPanorama=0}cim(t){let n=this.cims.find(e=>e.id===t);if(!n)return;e.visita(t),this.d.assoleix(`cim`);let r=this.d.moment()!==`nit`;r&&t.startsWith(`cim-`)&&e.visita(`cim-de-dia`);let i=this.t[`exp.${t}-de`]??(this.d.lang===`ca`?`del ${this.t[`exp.${t}`]}`:this.t[`exp.${t}`]);this.d.avisa(`${this.t[`exp.cim-fet`].replace(`{cim}`,i).replace(`{m}`,n.metres.toLocaleString(this.d.lang===`ca`?`ca-ES`:`en-GB`))}${r?``:` ${this.t[`exp.cim-nit`]}`}`),this.panorama(9,8)}saltaParapent(){if(this.mode)return!1;let e=this.cims[0],t=this.d.relleu,n=new s(e.x,t.sol(e.x,e.z)+.3,e.z),r=null;for(let[i,a]of[[6,11],[9,9],[3,12],[11,6],[-4,12]]){let o=this.d.puntLliure(e.x+i,e.z+a);if(t.sol(o.x,o.z)<n.y-1.5&&t.illa(o.x,o.z)===1){r=o;break}}if(!r)return!1;let i=new s(r.x,t.sol(r.x,r.z),r.z);if(this.d.jugador.enBici=!1,this.d.reduit())return this.d.porta(i.x,i.z),this.aterra(!1),!0;let a=new s(i.x-n.x,0,i.z-n.z),o=a.length();a.normalize();let c=ma(),l=new H(c.voxels.geometria(X,[-c.ample*X/2,0,-2*X]),this.d.material);return l.castShadow=!0,this.vela=new C,this.vela.add(l),this.vela.name=`parapent`,this.d.escena.add(this.vela),this.vol={de:n,a:i,t:0,durada:Math.max(6,o/2.1),costat:0,perp:new s(-a.z,0,a.x),angle:Math.atan2(a.x,a.z)},this.mode=`parapent`,this.d.jugador.atura(),this.panorama(11,999),this.d.avisa(this.t[`exp.parapent-vola`]),!0}actualitzaParapent(e,t){let n=this.vol;n.t+=e;let r=Math.min(1,n.t/n.durada);t&&(n.costat=Math.max(-3,Math.min(3,n.costat+t.dot(n.perp)*e*1.8)));let i=Math.sin(r*Math.PI*2)*1.1*Math.sin(r*Math.PI),a=n.de.x+(n.a.x-n.de.x)*r+n.perp.x*(i+n.costat*Math.sin(r*Math.PI)),o=n.de.z+(n.a.z-n.de.z)*r+n.perp.z*(i+n.costat*Math.sin(r*Math.PI)),s=this.d.relleu.sol(a,o),c=n.de.y+.5+Math.sin(r*Math.PI)*.6-(n.de.y+.5-n.a.y)*r**1.4;c=Math.max(c,s+(r<.97?.25:0));let l=n.angle+Math.cos(r*Math.PI*2)*.35;this.d.jugador.fixa(a,c,o,l),this.d.suki.fixa({x:a-Math.sin(l)*.35,y:c-.05,z:o-Math.cos(l)*.35,orientacio:l}),this.vela.position.set(a,c+.95,o),this.vela.rotation.set(0,l,Math.sin(r*Math.PI*4)*.12),r>=1&&this.aterra(!0)}aterra(e){if(this.vela&&=(this.vela.removeFromParent(),null),e&&this.vol){let e=this.d.puntLliure(this.d.jugador.posicio.x,this.d.jugador.posicio.z);this.d.suki.fixa(null),this.d.jugador.teletransporta(e.x,e.z,this.vol.angle),this.d.suki.apareix(this.d.jugador)}this.vol=null,this.mode=null,this.tornaZoom(),this.d.assoleix(`parapent`),this.d.avisa(this.t[`exp.aterrat`])}pujaGlobus(){let e=this.d.mon.globus;return this.mode||!e?!1:(this.d.jugador.enBici=!1,this.globus={fase:`puja`,t:0,angle:0,y:0,base:{x:e.x,y:e.y,z:e.z}},this.mode=`globus`,this.d.jugador.atura(),this.panorama(8.5,999),this.d.avisa(this.t[`exp.globus-puja`]),this.d.reduit()&&(this.globus.fase=`vola`,this.globus.y=7),!0)}actualitzaGlobus(e){let t=this.globus,n=this.d.mon.globus,r=this.d.reduit();if(t.t+=e,t.fase===`puja`)t.y=7*$c(Math.min(1,t.t/4)),t.t>=4&&Object.assign(t,{fase:`vola`,t:0});else if(t.fase===`vola`)t.y=7+(r?0:Math.sin(t.t*.6)*.15),r||(t.angle+=e*.35),!r&&t.t>=20&&this.baixaGlobus();else{let e=Math.min(1,t.t/4);if(t.y=7*(1-$c(e)),t.angle*=1-e*.1,e>=1||r)return this.acabaGlobus()}let i=Math.min(1,t.y/7)*5,a=t.base.x+Math.sin(t.angle)*i,o=t.base.z+(1-Math.cos(t.angle))*i;n.malla.position.set(a,t.base.y+t.y,o);let s=t.base.y+t.y+X;this.d.jugador.fixa(a-.15,s,o+.05,0),this.d.suki.fixa({x:a+.2,y:s,z:o+.1,orientacio:-.6})}baixaGlobus(){this.globus?.fase===`vola`&&Object.assign(this.globus,{fase:`baixa`,t:0})}acabaGlobus(){let e=this.globus;this.d.mon.globus.malla.position.set(e.base.x,e.base.y,e.base.z),this.globus=null,this.mode=null;let t=this.d.puntLliure(e.base.x,e.base.z+1.2);this.d.suki.fixa(null),this.d.jugador.teletransporta(t.x,t.z),this.d.suki.apareix(this.d.jugador),this.tornaZoom(),this.d.assoleix(`globus`),this.d.avisa(this.t[`exp.globus-terra`])}agafaBici(){let t=!e.bici;e.bici=!0,this.d.jugador.enBici=!0,this.d.assoleix(`bici`),this.d.avisa(this.t[t?`exp.bici-primer`:`exp.bici-munta`])}commutaBici(){if(!this.mode){if(!e.bici){this.d.avisa(this.t[`exp.bici-no`]);return}this.d.jugador.enBici=!this.d.jugador.enBici,this.d.avisa(this.t[this.d.jugador.enBici?`exp.bici-munta`:`exp.bici-baixa`])}}obreMetro(e){this.metro&&!this.mode&&(this.metro.querySelectorAll(`[data-estacio]`).forEach(t=>{let n=t.dataset.estacio===e;t.disabled=n,t.toggleAttribute(`aria-current`,n)}),this.metro.showModal(),this.metro.querySelector(`[data-estacio]:not([disabled])`)?.focus())}viatjaMetro(t){let n=this.d.mon.interactius.find(e=>e.id===`metro-${t}`);if(!n)return;let r=this.d.arrel.querySelector(`.illa__fos`),i=()=>{this.d.jugador.enBici=!1,this.d.porta(n.punt.x,n.punt.z),e.visita(n.id),this.d.assoleix(`metro`),this.d.avisa(this.t[`exp.metro-arribat`].replace(`{estacio}`,this.t[`exp.estacio.${t}`]??t))};if(!r||this.d.reduit())return i();r.hidden=!1,r.classList.add(`illa__fos--fosc`),window.setTimeout(()=>{i(),r.classList.remove(`illa__fos--fosc`),window.setTimeout(()=>r.hidden=!0,450)},450)}rema(){let e=this.d.mon.bot;if(this.mode||!e)return!1;let t=this.aiguaAprop(e.x,e.z,3);return t?(this.d.jugador.enBici=!1,this.bot={x:t.x,z:t.z,angle:Math.atan2(t.x-e.x,t.z-e.z),desti:null},this.mode=`rem`,this.d.jugador.atura(),this.d.avisa(this.t[`exp.rema`]),!0):!1}esAigua(e,t){let n=this.d.relleu;return e>1&&t>1&&e<n.ample-1&&t<n.fons-1&&!n.trepitjable(e,t)&&!n.esMoll(e,t)}aiguaAprop(e,t,n){for(let r=.5;r<=n;r+=.25)for(let n=0;n<16;n++){let i=n/16*Math.PI*2,a=e+Math.cos(i)*r,o=t+Math.sin(i)*r;if(this.esAigua(a,o)&&this.esAigua(a+.4,o)&&this.esAigua(a-.4,o)&&this.esAigua(a,o+.4)&&this.esAigua(a,o-.4))return{x:a,z:o}}return null}terraAprop(e,t,n){for(let r=.5;r<=n;r+=.25)for(let n=0;n<16;n++){let i=n/16*Math.PI*2,a=e+Math.cos(i)*r,o=t+Math.sin(i)*r;if(this.d.mon.lliure(a,o,.3))return{x:a,z:o}}return null}clicAigua(e){if(this.mode!==`rem`||!this.bot)return!1;let t=e.ray.intersectPlane(this.aiguaPla,new s);if(!t)return!1;if(this.esAigua(t.x,t.z))this.bot.desti={x:t.x,z:t.z};else{let e=this.terraAprop(this.bot.x,this.bot.z,1.2);e&&Math.hypot(t.x-this.bot.x,t.z-this.bot.z)<3&&this.desembarca(e)}return!0}actualitzaRem(e,t){let n=this.bot,r=this.d.mon.bot,i=0,a=0;if(t&&t.lengthSq()>0)n.desti=null,i=t.x,a=t.z;else if(n.desti){let e=n.desti.x-n.x,t=n.desti.z-n.z,r=Math.hypot(e,t);r<.15?n.desti=null:(i=e/r,a=t/r)}if(i||a){this.pesca&&=null;let t=2.1,r=n.x+i*t*e,o=n.z+a*t*e;this.esAigua(r,o)?(n.x=r,n.z=o):this.esAigua(r,n.z)?n.x=r:this.esAigua(n.x,o)?n.z=o:n.desti=null;let s=Math.atan2(i,a)-n.angle;s=Math.atan2(Math.sin(s),Math.cos(s)),n.angle+=s*Math.min(1,e*6)}r.malla.position.set(n.x,-.02,n.z),r.malla.rotation.y=n.angle,this.d.jugador.fixa(n.x-Math.sin(n.angle)*.1,.09999999999999999,n.z-Math.cos(n.angle)*.1,n.angle),this.d.suki.fixa({x:n.x+Math.sin(n.angle)*.55,y:.09999999999999999,z:n.z+Math.cos(n.angle)*.55,orientacio:n.angle}),this.pesca&&(this.pesca.t+=e,this.pesca.estat===`espera`&&this.pesca.t>=this.pesca.mossega?(this.pesca.estat=`pica`,this.pesca.t=0,this.d.avisa(this.t[`exp.pica`])):this.pesca.estat===`pica`&&this.pesca.t>2.2&&(this.pesca=null,this.d.avisa(this.t[`exp.escapat`])))}desembarca(e){let t=this.bot,n=this.d.mon.bot;this.d.mon.mouBot(t.x,t.z,e),n.malla.rotation.y=t.angle,this.bot=null,this.pesca=null,this.mode=null,this.d.suki.fixa(null),this.d.jugador.teletransporta(e.x,e.z),this.d.suki.apareix(this.d.jugador),this.d.avisa(this.t[`exp.desembarcat`])}zona(){let e=this.bot,t=this.d.relleu;return t.mascaraA(e.x,e.z)&vo.riu?`riu`:t.distCosta(e.x,e.z)>-2.5?`costa`:`mar`}peixa(){let t=Qc[this.zona()],n=t[Math.floor(Math.random()*t.length)];e.pesca(n),this.pesca=null,this.d.assoleix(`pesca`),this.d.avisa(this.t[`exp.captura`].replace(`{peix}`,this.t[`exp.peix.${n}`]))}accio(){let e=this.d.jugador.posicio,t=new s(e.x,e.y+1.9,e.z);if(this.mode===`globus`)return this.globus?.fase===`vola`?{etiqueta:this.t[`exp.globus-baixa`],fes:()=>this.baixaGlobus(),ancora:t.setY(e.y+5.1)}:null;if(this.mode!==`rem`||!this.bot)return null;let n=this.terraAprop(this.bot.x,this.bot.z,1.1);return this.pesca?.estat===`pica`?{etiqueta:this.t[`exp.estira`],fes:()=>this.peixa(),ancora:t}:this.pesca?{etiqueta:this.t[`exp.esperant`],fes:()=>this.pesca=null,ancora:t}:n?{etiqueta:this.t[`exp.desembarca`],fes:()=>this.desembarca(n),ancora:t}:{etiqueta:this.t[`exp.pesca`],fes:()=>{this.pesca={t:0,mossega:2+Math.random()*4,estat:`espera`},this.d.avisa(this.t[`exp.llanca-canya`])},ancora:t}}actualitza(e,t){if(this.mode===`parapent`?this.actualitzaParapent(e,t):this.mode===`globus`?this.actualitzaGlobus(e):this.mode===`rem`&&this.actualitzaRem(e,t),!this.mode&&this.tempsPanorama>0&&(this.tempsPanorama-=e,(this.tempsPanorama<=0||this.d.jugador.enMoviment)&&this.tornaZoom()),Math.abs(this.zoomActual-this.zoomObjectiu)>.01){let t=this.d.reduit()?1:1-Math.exp(-e/.6);this.zoomActual+=(this.zoomObjectiu-this.zoomActual)*t,Math.abs(this.zoomActual-this.zoomObjectiu)<.02&&(this.zoomActual=this.zoomObjectiu),this.d.zoom(this.zoomActual)}}resum(){return{mode:this.mode,zoom:this.zoomActual,fase:this.globus?.fase??null,pesca:this.pesca?.estat??null,bot:this.bot?{x:this.bot.x,z:this.bot.z}:null}}},tl=class{illa;interior=null;constructor(e){this.illa=e}lliure(e,t,n){return(this.interior??this.illa).lliure(e,t,n)}segmentLliure(e,t,n,r,i){return(this.interior??this.illa).segmentLliure(e,t,n,r,i)}sol(e,t){return(this.interior??this.illa).sol(e,t)}},nl=450,rl=class{d;actual=null;ocupat=!1;constructor(e){this.d=e}async entra(e){if(this.actual||this.ocupat)return!1;this.ocupat=!0;try{let n=t(e===`cova`?()=>import(`./cova.PMSv9jAk.js`).then(e=>({crea:e.crea,vestit:null})):()=>import(`./submari.CinTotBG.js`).then(e=>({crea:e.crea,vestit:e.bussejador()})),__vite__mapDeps([0,1,2])),[r]=await Promise.all([n,this.enfosqueix()]),i=r.crea({...this.d.interior(),surt:()=>this.surt()},this.d.material);return this.munta(i),r.vestit&&this.d.jugador.vesteix(r.vestit),this.d.enCanvi(i,e),!0}finally{this.aclareix(),this.ocupat=!1}}surt(e=!1){let t=this.actual;if(!t||this.ocupat&&!e)return;let n=()=>{this.desmunta(t),this.d.enCanvi(null,t.tipus)};if(e)return n();this.ocupat=!0,this.enfosqueix().then(()=>{this.actual===t&&n(),this.aclareix(),this.ocupat=!1})}munta(e){let{jugador:t,suki:n,pipeline:r,renderer:i}=this.d;this.actual=e,this.d.monActiu.interior=e,r.escena=e.escena,i.setClearColor(e.fons),t.enBici=!1,t.atura(),e.escena.add(t.grup),t.teletransporta(e.inici.x,e.inici.z,e.inici.orientacio),n.ves(null),e.suki?(e.escena.add(n.grup),n.apareix(t)):(n.fixa({x:n.posicio.x,y:n.posicio.y,z:n.posicio.z,orientacio:n.grup.rotation.y}),n.actualitza(0,t,this.d.reduit()))}desmunta(e){let{jugador:t,suki:n,pipeline:r,renderer:i,escenaIlla:a}=this.d;this.actual=null,this.d.monActiu.interior=null,r.escena=a,i.setClearColor(this.d.fons()),a.add(t.grup),a.add(n.grup),t.vesteix(null),t.atura();let o=this.d.sortida(e.tipus);t.teletransporta(o.x,o.z,0),n.fixa(null),n.ves(null),n.apareix(t),e.dispose()}enfosqueix(){let e=this.d.fos;return!e||this.d.reduit()?Promise.resolve():(e.hidden=!1,e.offsetWidth,e.classList.add(`illa__fos--fosc`),new Promise(e=>window.setTimeout(e,nl)))}aclareix(){let e=this.d.fos;e&&!e.hidden&&(e.classList.remove(`illa__fos--fosc`),window.setTimeout(()=>{e.classList.contains(`illa__fos--fosc`)||(e.hidden=!0)},nl))}};function il(e){let t=Math.floor(e/60);return`${t}:${(e-t*60).toFixed(1).padStart(4,`0`)}`}var al=class{d;actiu=!1;temps=0;visitats=new Set;rellotge;textTemps;textLlocs;tempsFinal=0;mostrat=``;constructor(e){this.d=e,this.rellotge=e.arrel.querySelector(`.contrarellotge`),this.textTemps=e.arrel.querySelector(`.js-contra-temps`),this.textLlocs=e.arrel.querySelector(`.js-contra-llocs`)}get total(){return this.d.llocs.length}get visitatsAra(){return this.visitats.size}comenca(){this.actiu=!0,this.temps=0,this.tempsFinal=0,this.visitats.clear(),this.rellotge&&(this.rellotge.hidden=!1),this.pinta(),this.d.avisa(this.d.textos[`contra.comencada`].replace(`{n}`,String(this.total)))}anulla(e=`atura`){this.actiu&&(this.actiu=!1,this.rellotge&&(this.rellotge.hidden=!0),this.d.avisa(this.d.textos[e===`trampa`?`contra.trampa`:`contra.aturada`]))}actualitza(e,t){if(this.tempsFinal>0){this.tempsFinal-=e,this.tempsFinal<=0&&this.rellotge&&(this.rellotge.hidden=!0);return}if(!this.actiu)return;this.temps+=e;let n=t?this.d.llocs.find(e=>e.id===t):void 0;n&&!this.visitats.has(n.id)&&(this.visitats.add(n.id),this.visitats.size>=this.total?this.acaba():this.d.avisa(`${n.nom} · ${this.visitats.size}/${this.total}`)),this.pinta()}acaba(){this.actiu=!1;let t=e.millorTemps,n=t===null||this.temps<t;n&&(e.millorTemps=this.temps),this.d.avisa(this.d.textos[n?`contra.record`:`contra.feta`].replace(`{temps}`,il(this.temps)).replace(`{millor}`,il(t??this.temps))),this.d.assoleix(`contrarellotge`),this.tempsFinal=6,this.pinta()}pinta(){let e=`${il(this.temps)}|${this.visitats.size}`;e!==this.mostrat&&(this.mostrat=e,this.textTemps&&(this.textTemps.textContent=il(this.temps)),this.textLlocs&&(this.textLlocs.textContent=`${this.visitats.size}/${this.total}`))}},ol=class{d;actiu=!1;panell;botons;explica;camps;autoReset=!0;fotogrames=0;desde=0;constructor(e){this.d=e,this.panell=e.arrel.querySelector(`.making-of`),this.botons=[...this.panell?.querySelectorAll(`[data-vista]`)??[]],this.explica=this.panell?.querySelector(`.js-fet-explica`)??null;let t=e=>this.panell?.querySelector(`.js-fet-${e}`)??null;this.camps={fps:t(`fps`),triangles:t(`triangles`),crides:t(`crides`),resolucio:t(`resolucio`),paleta:t(`paleta`)};for(let e of this.botons)e.addEventListener(`click`,()=>this.vista(e.dataset.vista));this.panell?.querySelector(`.js-tanca-fet`)?.addEventListener(`click`,()=>this.commuta(!1)),e.arrel.querySelectorAll(`.js-fet`).forEach(e=>e.addEventListener(`click`,()=>{e.closest(`details`)?.removeAttribute(`open`),this.commuta(!0)}))}commuta(e=!this.actiu){if(e===this.actiu)return;this.actiu=e,!e&&this.panell?.contains(document.activeElement)&&this.d.arrel.focus({preventScroll:!0}),this.panell&&(this.panell.hidden=!e);let t=this.d.renderer.info;e?(this.autoReset=t.autoReset,t.autoReset=!1,this.fotogrames=0,this.desde=performance.now(),this.botons[0]?.focus({preventScroll:!0})):(t.autoReset=this.autoReset,this.vista(`final`))}vista(e){if(Vi.includes(e)){this.d.pipeline.vista=e;for(let t of this.botons)t.setAttribute(`aria-pressed`,String(t.dataset.vista===e));this.explica&&(this.explica.textContent=this.d.textos[`fet.explica.${e}`]??``)}}fotograma(e){if(!this.actiu)return;this.fotogrames++;let t=(e-this.desde)/1e3;if(t<.25)return;let{render:n}=this.d.renderer.info,{interna:r,escala:i}=this.d.pipeline,a=(e,t)=>{let n=this.camps[e];n&&n.textContent!==t&&(n.textContent=t)};a(`fps`,String(Math.round(this.fotogrames/t))),a(`triangles`,n.triangles.toLocaleString(document.documentElement.lang)),a(`crides`,String(n.calls)),a(`resolucio`,`${r.x} × ${r.y} (×${i})`);let o=this.d.colors();a(`paleta`,o?String(o):`—`),this.fotogrames=0,this.desde=e}},sl=128,cl=2,ll=.1,ul=class{d;ctx;imatge=new Image;carregada=!1;espera=0;constructor(e){this.d=e,e.canvas.width=sl,e.canvas.height=sl,this.ctx=e.canvas.getContext(`2d`),this.imatge.onload=()=>this.carregada=!0,this.imatge.src=e.mapa}set visible(e){this.d.canvas.hidden!==!e&&(this.d.canvas.hidden=!e,this.espera=0)}actualitza(e,t,n){let r=this.ctx;if(!r||!this.carregada||this.d.canvas.hidden||(this.espera-=e,this.espera>0))return;this.espera=ll;let i=this.d.mostres;r.imageSmoothingEnabled=!1,r.setTransform(1,0,0,1,0,0),r.fillStyle=`#1d3f73`,r.fillRect(0,0,sl,sl),r.translate(sl/2,sl/2),r.rotate(this.d.gir()*Math.PI/180),r.scale(cl,cl),r.translate(-t.x*i,-t.z*i),r.drawImage(this.imatge,0,0);for(let e of this.d.llocs)r.fillStyle=`#1b2330`,r.fillRect(e.x*i-2,e.z*i-2,4,4),r.fillStyle=e.color,r.fillRect(e.x*i-1.5,e.z*i-1.5,3,3);n&&(r.fillStyle=`#1b2330`,r.fillRect(n.x*i-1.5,n.z*i-1.5,3,3),r.fillStyle=`#d9573b`,r.fillRect(n.x*i-1,n.z*i-1,2,2)),r.setTransform(1,0,0,1,0,0),r.fillStyle=`#1b2330`,r.fillRect(sl/2-4,sl/2-4,8,8),r.fillStyle=`#e0a030`,r.fillRect(sl/2-2,sl/2-2,4,4)}},dl=e=>e!==document.body&&e.isConnected&&(e.checkVisibility?.()??!0),fl=class{dialeg;obrePanell;arrel;titol;cos;abans=null;constructor(e,t,n){this.dialeg=e,this.obrePanell=t,this.arrel=n,this.titol=e.querySelector(`#fitxa-illa-titol`),this.cos=e.querySelector(`.fitxa-illa__cos`),e.addEventListener(`click`,t=>{let n=t.target,r=n.closest(`[data-cami]`);r?(this.tanca(!1),this.obrePanell(r.dataset.cami)):(n===e||n.closest(`.js-tanca-fitxa`))&&this.tanca()}),e.addEventListener(`cancel`,e=>{e.preventDefault(),this.tanca()})}get obert(){return this.dialeg.open}obre(e){this.titol.textContent=e.titol,this.dialeg.classList.toggle(`fitxa-illa--pissarra`,e.estil===`pissarra`);let t=[],n=(e,t,n)=>{let r=document.createElement(e);return t!==void 0&&(r.textContent=t),n&&(r.className=n),r};for(let r of e.paragrafs??[])t.push(n(`p`,r));if(e.subtitol&&t.push(n(`h2`,e.subtitol)),e.llista?.length){let r=n(`ul`,void 0,`fitxa-illa__llista`);for(let t of e.llista){let e=n(`li`),i=t.cami?n(`button`):n(`span`);t.cami&&i instanceof HTMLButtonElement&&(i.type=`button`,i.dataset.cami=t.cami),t.tipus&&i.append(n(`span`,t.tipus,`fitxa-illa__tipus`)),i.append(n(`span`,t.text)),t.detall&&i.append(n(`span`,t.detall,`fitxa-illa__detall`)),e.append(i),r.append(e)}t.push(r)}else e.buit&&t.push(n(`p`,e.buit,`fitxa-illa__buit`));if(e.boto){let r=n(`button`,e.boto.text,`boto`);r.setAttribute(`type`,`button`),r.dataset.cami=e.boto.cami,t.push(r)}this.cos.replaceChildren(...t),this.abans=document.activeElement instanceof HTMLElement?document.activeElement:null,this.dialeg.showModal(),this.dialeg.querySelector(`.fitxa-illa__cos [data-cami], .js-tanca-fitxa`)?.focus()}tanca(e=!0){if(!this.dialeg.open)return;let t=this.abans;this.abans=null,this.dialeg.close(),this.dialeg.contains(document.activeElement)&&document.activeElement.blur(),e&&(t&&dl(t)?t:this.arrel).focus({preventScroll:!0})}},pl=`4dsu@illa:~$`,ml=class{d;sortida;entrada;historia=[];posHistoria=0;iniciat=!1;abans=null;constructor(e){this.d=e,this.sortida=e.dialeg.querySelector(`.terminal__sortida`),this.entrada=e.dialeg.querySelector(`.terminal__entrada`),e.dialeg.querySelector(`form`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=this.entrada.value;this.entrada.value=``,this.executa(t)}),e.dialeg.addEventListener(`click`,t=>{let n=t.target,r=n.closest(`[data-ordre]`);r?(this.executa(r.dataset.ordre??``),this.obert&&this.entrada.focus({preventScroll:!0})):(n===e.dialeg||n.closest(`.js-tanca-terminal`))&&this.tanca()}),this.entrada.addEventListener(`keydown`,e=>{(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),this.posHistoria=Math.max(0,Math.min(this.historia.length,this.posHistoria+(e.key===`ArrowUp`?-1:1))),this.entrada.value=this.historia[this.posHistoria]??``)}),e.dialeg.addEventListener(`cancel`,e=>{e.preventDefault(),this.tanca()})}get obert(){return this.d.dialeg.open}obre(){this.iniciat||(this.iniciat=!0,this.escriu(this.t(`term.benvinguda`))),this.abans=document.activeElement instanceof HTMLElement?document.activeElement:null,this.d.dialeg.showModal(),this.entrada.focus()}tanca(e=!0){if(!this.d.dialeg.open)return;let t=this.abans;this.abans=null,this.d.dialeg.close(),this.d.dialeg.contains(document.activeElement)&&document.activeElement.blur(),e&&(t&&dl(t)?t:this.d.arrel).focus({preventScroll:!0})}t(e,t={}){return Object.entries(t).reduce((e,[t,n])=>e.replaceAll(`{${t}}`,String(n)),this.d.textos[e]??e)}escriu(e,t,n){let r=document.createElement(`p`);if(t&&(r.className=`terminal__${t}`),n){let t=document.createElement(`a`);t.href=n,t.target=`_blank`,t.rel=`noopener`,t.textContent=e,r.append(t)}else r.textContent=e;this.sortida.append(r),this.sortida.scrollTop=this.sortida.scrollHeight}executa(e){let t=e.trim().replace(/\s+/g,` `);if(this.escriu(`${pl} ${t}`,`ordre`),!t)return;this.historia.push(t),this.posHistoria=this.historia.length;let[n,...r]=t.split(` `),i=r.join(` `);switch(n.toLowerCase()){case`help`:case`ajuda`:case`?`:return this.escriu(this.t(`term.ajuda`));case`ls`:case`dir`:return this.ls(i);case`cat`:case`more`:case`less`:return this.cat(i);case`fotos`:case`photos`:return this.fotos();case`contacte`:case`contact`:return this.contacte();case`obre`:case`open`:return this.obreCami(i);case`os`:case`startx`:return this.escriu(this.t(`term.os`)),this.tanca(!1),this.d.os();case`clear`:case`neteja`:case`cls`:this.sortida.replaceChildren();return;case`exit`:case`surt`:case`logout`:return this.tanca();case`whoami`:return this.escriu(this.t(`term.whoami`));case`sudo`:return this.escriu(this.t(`term.sudo`));case`cd`:return this.escriu(this.t(`term.cd`));default:return this.escriu(this.t(`term.desconeguda`,{ordre:n}),`error`)}}seccio(e){let t=e.toLowerCase().replace(/\/+$/,``);return this.d.persona.seccions.find(e=>e.noms.includes(t))}ls(e){let t=this.d.persona;if(!e){let e=Math.max(...t.seccions.map(e=>e.ordre.length))+2,n=t.seccions.map(t=>{let n=`${t.ordre}/`.padEnd(e);return t.id===`sobre-mi`?n.trimEnd():t.n?`${n}${t.id===`fotografia`?this.t(`term.series`,{n:t.n}):t.n}`:`${n}${this.t(`term.marca-buida`)}`});return this.escriu(n.join(`
`))}let n=this.seccio(e);if(!n)return this.escriu(this.t(`term.no-seccio`,{nom:e}),`error`);if(n.id===`sobre-mi`)return this.cat(`sobre-mi`);if(n.id===`fotografia`)return this.fotos();if(n.id===`contacte`)return this.contacte();let r=t.entrades[n.id]??[];if(!r.length)return this.escriu(this.t(`term.buida`,{seccio:n.ordre}));this.escriu(r.map(e=>`${e.slug}\n  ${e.titol}${e.data?` · ${e.data}`:``}`).join(`
`))}cat(e){if(!e)return this.escriu(this.t(`term.cal-nom`),`error`);let[t,n]=e.split(`/`).filter(Boolean),r=this.seccio(t??``);if(!r)return this.escriu(this.t(`term.no-seccio`,{nom:t??e}),`error`);if(r.id===`sobre-mi`){let{perfil:e}=this.d.persona,t=[`${e.nom} · ${e.rol}`],n=[e.ubicacio,e.estat].filter(Boolean).join(` · `);n&&t.push(n),t.push(``,...e.text.flatMap(e=>[e,``]));for(let n of e.pilars)t.push(`* ${n.titol}: ${n.descripcio}`);return this.escriu(t.join(`
`).trimEnd())}if(!n)return this.ls(r.ordre);if(r.id===`fotografia`){let e=this.d.persona.series.find(e=>e.slug===n.toLowerCase());return e?this.escriu([`${e.titol} · ${e.n}`,``,this.t(`term.llegeix`,{cami:`${r.ordre}/${e.slug}`})].join(`
`)):this.escriu(this.t(`term.no-entrada`,{nom:n,seccio:r.ordre}),`error`)}let i=(this.d.persona.entrades[r.id]??[]).find(e=>e.slug===n.toLowerCase());if(!i)return this.escriu(this.t(`term.no-entrada`,{nom:n,seccio:r.ordre}),`error`);let a=`${r.ordre}/${i.slug}`;this.escriu([i.titol,...i.data?[i.data]:[],``,i.resum,``,this.t(`term.llegeix`,{cami:r.id===i.cami?r.ordre:a})].join(`
`))}fotos(){let{series:e}=this.d.persona,t=e.reduce((e,t)=>e+t.n,0),n=Math.max(0,...e.map(e=>e.slug.length))+2;this.escriu([this.t(`term.fotos`,{series:e.length,fotos:t}),...e.map(e=>`${e.slug.padEnd(n)}${e.titol} · ${e.n}`),``,this.t(`term.fotos-pista`)].join(`
`))}contacte(){let{contacte:e}=this.d.persona;if(!e.length)return this.escriu(this.t(`term.contacte-buit`));for(let t of e)this.escriu(`${t.etiqueta}: ${t.valor}`,void 0,t.url)}obreCami(e){if(!e)return this.escriu(this.t(`term.cal-obre`),`error`);let[t,n]=e.split(`/`).filter(Boolean),r=this.seccio(t??``);if(!r)return this.escriu(this.t(`term.no-seccio`,{nom:t??e}),`error`);let i=n?`${r.id}/${n.toLowerCase()}`:r.id;if(!this.d.rutes[i])return this.escriu(this.t(`term.no-entrada`,{nom:n??``,seccio:r.ordre}),`error`);this.escriu(this.t(`term.obrint`,{cami:n?`${r.ordre}/${n}`:r.ordre})),this.tanca(!1),this.d.obre(i)}},hl=class e{pedraforca;nx;nz;mostres;ample;fons;cotes;mascara;costa;caixaP;constructor(e,t){this.pedraforca=t;let n=new DataView(e),r=String.fromCharCode(...new Uint8Array(e,0,4));if(r!==_o.magia)throw Error(`Relleu: format desconegut (${r})`);this.nx=n.getUint16(4,!0),this.nz=n.getUint16(6,!0),this.mostres=n.getUint16(8,!0);let i=n.getFloat32(12,!0),a=this.nx*this.nz;this.ample=(this.nx-1)/this.mostres,this.fons=(this.nz-1)/this.mostres;let o=new Int16Array(e.slice(_o.capcalera,_o.capcalera+a*2));this.cotes=Float32Array.from(o,e=>e/i),this.mascara=new Uint8Array(e,_o.capcalera+a*2,a);let s=new Int8Array(e,_o.capcalera+a*3,a);this.costa=Float32Array.from(s,e=>e/8),this.caixaP=ao(t)}static async carrega(t,n=go){let r=await fetch(n);if(!r.ok)throw Error(`Relleu: HTTP ${r.status}`);let i=await r.arrayBuffer(),a=new Uint8Array(i,0,2);if(a[0]===31&&a[1]===139){let e=new Blob([i]).stream().pipeThrough(new DecompressionStream(`gzip`));i=await new Response(e).arrayBuffer()}return new e(i,t)}index(e,t){return Math.min(this.nz-1,Math.max(0,t))*this.nx+Math.min(this.nx-1,Math.max(0,e))}bilineal(e,t,n){let r=t*this.mostres,i=n*this.mostres,a=Math.floor(r),o=Math.floor(i),s=r-a,c=i-o,l=e[this.index(a,o)],u=e[this.index(a+1,o)],d=e[this.index(a,o+1)],f=e[this.index(a+1,o+1)];return(l*(1-s)+u*s)*(1-c)+(d*(1-s)+f*s)*c}altura(e,t){let n=this.bilineal(this.cotes,e,t),r=this.caixaP;return e<r.x0||e>r.x1||t<r.z0||t>r.z1?n:n+io(this.pedraforca,e,t)}mascaraA(e,t){return this.mascara[this.index(Math.round(e*this.mostres),Math.round(t*this.mostres))]}esMoll(e,t){return(this.mascaraA(e,t)&vo.moll)!==0}trepitjable(e,t){return e<.5||t<.5||e>this.ample-.5||t>this.fons-.5?!1:this.esMoll(e,t)?!0:this.altura(e,t)>.06&&!(this.mascaraA(e,t)&vo.riu)}sol(e,t){let n=this.altura(e,t);return this.esMoll(e,t)?Math.max(n,ho):n}distCosta(e,t){return this.bilineal(this.costa,e,t)}normal(e,t,n=.25){let r=(this.altura(e-n,t)-this.altura(e+n,t))/(2*n),i=(this.altura(e,t-n)-this.altura(e,t+n))/(2*n),a=Math.hypot(r,1,i);return[r/a,1/a,i/a]}pendent(e,t){return 1-this.normal(e,t)[1]}illa(e,t){return this.mascaraA(e,t)&vo.illa2?2:1}get caixaPedraforca(){return this.caixaP}};function gl(){let e=document.getElementById(`dades-illa`);if(!e?.textContent)throw Error(`Falten les dades de l’illa (#dades-illa).`);return JSON.parse(e.textContent)}var _l=[6,12,24,48,96,192],vl=85;async function yl(e){if((!e.complete||!e.naturalWidth)&&await new Promise(t=>{e.addEventListener(`load`,()=>t(),{once:!0}),e.addEventListener(`error`,()=>t(),{once:!0})}),!e.naturalWidth)return;let t=e.closest(`figure`)??e.parentElement;getComputedStyle(t).position===`static`&&(t.style.position=`relative`);let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=Math.min(window.devicePixelRatio||1,2),a=document.createElement(`canvas`);a.width=Math.round(n.width*i),a.height=Math.round(n.height*i),a.className=`revelat`,a.setAttribute(`aria-hidden`,`true`),Object.assign(a.style,{position:`absolute`,left:`${n.left-r.left}px`,top:`${n.top-r.top}px`,width:`${n.width}px`,height:`${n.height}px`,imageRendering:`pixelated`,pointerEvents:`none`}),t.appendChild(a);let o=a.getContext(`2d`),s=document.createElement(`canvas`),c=s.getContext(`2d`),l=e.naturalHeight/e.naturalWidth;for(let t of _l)s.width=t,s.height=Math.max(1,Math.round(t*l)),c.imageSmoothingEnabled=!0,c.drawImage(e,0,0,s.width,s.height),o.imageSmoothingEnabled=!1,o.clearRect(0,0,a.width,a.height),o.drawImage(s,0,0,a.width,a.height),await new Promise(e=>setTimeout(e,vl));a.remove()}async function bl(e){if((!e.complete||!e.naturalWidth)&&await new Promise(t=>{e.addEventListener(`load`,()=>t(),{once:!0}),e.addEventListener(`error`,()=>t(),{once:!0})}),!e.naturalWidth)return;let t=e.closest(`figure`)??e.parentElement;getComputedStyle(t).position===`static`&&(t.style.position=`relative`);let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=document.createElement(`canvas`),a=Math.min(1,480/n.width);i.width=Math.max(1,Math.round(n.width*a)),i.height=Math.max(1,Math.round(n.height*a)),i.className=`revelat revelat--liquid`,i.setAttribute(`aria-hidden`,`true`),Object.assign(i.style,{position:`absolute`,left:`${n.left-r.left}px`,top:`${n.top-r.top}px`,width:`${n.width}px`,height:`${n.height}px`,pointerEvents:`none`}),t.appendChild(i);let o=i.getContext(`2d`),{width:s,height:c}=i;for(let t=0;t<=24;t++){let n=t/24;o.clearRect(0,0,s,c);let r=(1-n)*10;for(let n=0;n<c;n+=4){let i=Math.sin(n/14+t*.9)*r;o.drawImage(e,0,n/c*e.naturalHeight,e.naturalWidth,4/c*e.naturalHeight,i,n,s,4)}o.globalCompositeOperation=`multiply`,o.fillStyle=`rgb(255 ${Math.round(40+215*n)} ${Math.round(30+225*n)})`,o.fillRect(0,0,s,c),o.globalCompositeOperation=`source-over`,o.fillStyle=`rgb(27 8 8 / ${(1-n)*.85})`,o.fillRect(0,0,s,c),await new Promise(e=>setTimeout(e,70))}i.remove()}function xl(e,t){let n=e.replace(/^#\/?/,``).split(`/`).filter(Boolean);for(let e=n.length;e>0;e--){let r=n.slice(0,e).join(`/`);if(t[r])return{cami:r,foto:n[e]}}return null}var Sl=class{dialeg;manifest;reduit;cos;permanent;cache=new Map;perUrl;obertAmbHistorial=!1;actual=null;enCanvi=null;constructor(e,t,n){this.dialeg=e,this.manifest=t,this.reduit=n,this.cos=e.querySelector(`.panell__cos`),this.permanent=e.querySelector(`.panell__permanent`),this.perUrl=new Map(Object.entries(t.rutes).map(([e,t])=>[t,e])),e.querySelector(`.panell__tanca`).addEventListener(`click`,()=>this.tanca()),e.addEventListener(`cancel`,e=>{e.preventDefault(),this.tanca()}),e.addEventListener(`click`,t=>{t.target===e&&this.tanca()}),this.cos.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(!t||t.target||e.metaKey||e.ctrlKey||e.shiftKey)return;if(t.classList.contains(`foto__tanca`)){e.preventDefault(),this.tancaFoto();return}let n=new URL(t.href,location.href);if(n.origin!==location.origin)return;let r=this.perUrl.get(n.pathname);r&&(e.preventDefault(),this.obre({cami:r,foto:n.hash?n.hash.slice(1):void 0}))}),e.addEventListener(`close`,()=>this.enCanvi?.(!1)),window.addEventListener(`popstate`,()=>this.sincronitza())}get obert(){return this.dialeg.open}sincronitza(){let e=xl(location.hash,this.manifest.rutes);e?this.obre(e,!1):this.obert&&this.tancaSenseHistorial()}async obre(e,t=!0){let n=this.manifest.rutes[e.cami];if(!n)return;let r=`#/${e.cami}${e.foto?`/${e.foto}`:``}`;if(this.obert&&e.cami===this.actual&&e.foto&&this.cos.querySelector(`[data-foto]`)){location.hash!==r&&history.replaceState(history.state,``,r),this.permanent.href=`${n}#${e.foto}`,this.cos.querySelector(`.foto--oberta`)?.classList.remove(`foto--oberta`),await this.mostraFoto(e.foto,e.efecte);return}if(t&&location.hash!==r&&(history.pushState({illa:!0},``,r),this.obertAmbHistorial=!0),this.permanent.href=n+(e.foto?`#${e.foto}`:``),this.actual=e.cami,this.obert||(this.cos.replaceChildren(this.missatge(this.manifest.textos.carregant)),this.dialeg.showModal(),this.enCanvi?.(!0)),this.dialeg.classList.toggle(`panell--os`,e.cami===`os`),e.cami===`os`){let e=document.createElement(`iframe`);e.src=n,e.title=`4dsu OS`,e.className=`panell__os`,e.addEventListener(`load`,()=>{e.contentWindow?.addEventListener(`keydown`,e=>{e.key===`Escape`&&!e.defaultPrevented&&this.tanca()})}),this.cos.replaceChildren(e),this.dialeg.removeAttribute(`aria-labelledby`),this.dialeg.setAttribute(`aria-label`,`4dsu OS`),e.focus();return}this.dialeg.removeAttribute(`aria-label`);try{let t=(await this.fitxa(n)).cloneNode(!0);this.cos.replaceChildren(t),this.cos.scrollTop=0;let r=t.querySelector(`h1`);r&&(r.id||=`panell-titol`,this.dialeg.setAttribute(`aria-labelledby`,r.id)),e.foto?await this.mostraFoto(e.foto,e.efecte):this.dialeg.querySelector(`.panell__tanca`).focus()}catch{this.cos.replaceChildren(this.missatge(this.manifest.textos.error))}}tanca(){if(this.obert){if(this.obertAmbHistorial&&history.state?.illa){this.obertAmbHistorial=!1,history.back();return}this.tancaSenseHistorial(),location.hash&&history.replaceState(null,``,location.pathname+location.search)}}tancaSenseHistorial(){this.obertAmbHistorial=!1,this.dialeg.close()}missatge(e){let t=document.createElement(`p`);return t.className=`panell__missatge`,t.textContent=e,t}fitxa(e){let t=this.cache.get(e);return t||(t=fetch(e).then(e=>{if(!e.ok)throw Error(String(e.status));return e.text()}).then(e=>{let t=new DOMParser().parseFromString(e,`text/html`).querySelector(`[data-panell]`);if(!t)throw Error(`sense [data-panell]`);return t}),t.catch(()=>this.cache.delete(e)),this.cache.set(e,t)),t}async mostraFoto(e,t=`pixel`){let n=this.cos.querySelector(`[data-foto="${CSS.escape(e)}"]`),r=n?.querySelector(`img`);n&&r&&(r.loading=`eager`,n.classList.add(`foto--oberta`),this.cos.querySelector(`#m-${CSS.escape(e)}`)?.scrollIntoView({block:`center`}),n.setAttribute(`tabindex`,`-1`),n.focus({preventScroll:!0}),this.reduit()||await(t===`liquid`?bl(r):yl(r)))}tancaFoto(){let e=this.cos.querySelector(`.foto--oberta`);e&&(e.classList.remove(`foto--oberta`),this.actual&&history.replaceState(history.state,``,`#/${this.actual}`),this.permanent.href=this.manifest.rutes[this.actual??``]??this.permanent.href,this.cos.querySelector(`#m-${CSS.escape(e.dataset.foto??``)}`)?.focus())}},Cl=640,wl=class{o;actiu=!1;visor;dialeg;llista;buit;botons;t;constructor(t){this.o=t,this.visor=t.arrel.querySelector(`.visor`),this.dialeg=t.arrel.querySelector(`dialog.teves`),this.llista=this.dialeg.querySelector(`.teves__llista`),this.buit=this.dialeg.querySelector(`.teves__buit`),this.botons=t.arrel.querySelectorAll(`.js-camera`),this.t=JSON.parse(this.dialeg.dataset.textos??`{}`),this.botons.forEach(e=>e.addEventListener(`click`,()=>this.commuta())),t.arrel.querySelector(`.js-dispara`)?.addEventListener(`click`,()=>void this.dispara()),t.arrel.querySelector(`.js-surt-camera`)?.addEventListener(`click`,()=>this.surt()),t.arrel.querySelectorAll(`.js-teves`).forEach(e=>e.addEventListener(`click`,()=>this.obreTeves())),this.dialeg.querySelector(`.js-tanca-teves`)?.addEventListener(`click`,()=>this.dialeg.close()),this.dialeg.addEventListener(`click`,e=>{e.target===this.dialeg&&this.dialeg.close()}),this.dialeg.querySelector(`.js-postal`)?.addEventListener(`click`,()=>void this.fesPostal()),this.llista.addEventListener(`click`,t=>{let n=t.target.closest(`button[data-esborra]`);n&&(e.esborraFoto(Number(n.dataset.esborra)),this.pintaTeves(),this.dialeg.querySelector(`.js-tanca-teves`)?.focus())}),this.dialeg.addEventListener(`close`,()=>this.o.enCanvi(this.actiu))}get dialegObert(){return this.dialeg.open}commuta(){this.actiu?this.surt():this.entra()}entra(){this.actiu=!0,this.visor.hidden=!1,this.botons.forEach(e=>e.setAttribute(`aria-pressed`,`true`)),this.o.enCanvi(!0),this.visor.querySelector(`.js-dispara`)?.focus({preventScroll:!0})}surt(){this.actiu&&(this.actiu=!1,this.visor.hidden=!0,this.botons.forEach(e=>e.setAttribute(`aria-pressed`,`false`)),this.o.enCanvi(!1),this.o.arrel.focus({preventScroll:!0}))}async dispara(){this.o.pinta();let t=this.o.canvas,n=Math.min(Cl,t.width),r=Math.round(n*t.height/t.width),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);a.imageSmoothingEnabled=!1,a.drawImage(t,0,0,n,r),Tl(a,n,r);let o={imatge:i.toDataURL(`image/jpeg`,.85),quan:Date.now()};this.o.reduit()||this.flaix();let s=e.desaFoto(o);return this.o.avisa(s?this.t.desada:this.t.noDesada),this.actualitzaComptador(),s?o:null}obreTeves(){this.pintaTeves(),this.dialeg.showModal(),this.o.enCanvi(!0)}actualitzaComptador(){let t=e.fotos.length;this.o.arrel.querySelectorAll(`.js-n-teves`).forEach(e=>e.textContent=`${t}/12`)}pintaTeves(){let t=e.fotos;this.buit.hidden=t.length>0,this.llista.replaceChildren(...t.map((e,n)=>{let r=document.createElement(`li`),i=document.createElement(`img`);i.src=e.imatge,i.alt=`${this.t.foto} ${t.length-n}`,i.width=320,i.height=180;let a=new Date(e.quan).toLocaleString(document.documentElement.lang,{dateStyle:`medium`,timeStyle:`short`}),o=document.createElement(`p`);o.className=`dades`,o.textContent=a;let s=document.createElement(`a`);s.className=`boto`,s.href=e.imatge,s.download=`4dsu-illa-${e.quan}.png`,s.textContent=this.t.descarrega,s.addEventListener(`click`,t=>{t.preventDefault(),El(e.imatge).then(t=>Dl(t,`4dsu-illa-${e.quan}.png`))});let c=document.createElement(`button`);c.type=`button`,c.className=`boto boto--secundari`,c.dataset.esborra=String(e.quan),c.textContent=this.t.esborra;let l=document.createElement(`div`);return l.className=`teves__accions`,l.append(s,c),r.append(i,o,l),r})),this.actualitzaComptador()}async fesPostal(){let e=await Ol(this.o.postal(),this.t),t=this.dialeg.querySelector(`.teves__postal`),n=t.querySelector(`img`),r=t.querySelector(`a`);return n.src=e,r.href=e,t.hidden=!1,r.focus(),e}flaix(){let e=this.visor.querySelector(`.visor__flaix`);e&&(e.classList.remove(`visor__flaix--actiu`),e.offsetWidth,e.classList.add(`visor__flaix--actiu`))}};function Tl(e,t,n){let r=e.getImageData(0,0,t,n),i=r.data,a=1234567,o=()=>((a=a*1103515245+12345&2147483647)/2147483647-.5)*2,s=t/2,c=n/2,l=Math.hypot(s,c);for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=(e*t+n)*4,a=1-.35*(Math.hypot(n-s,e-c)/l)**2.2,u=o()*9;i[r]=Math.min(255,(14+i[r]*.92*1.06)*a+u),i[r+1]=Math.min(255,(12+i[r+1]*.92)*a+u),i[r+2]=Math.min(255,(18+i[r+2]*.92*.9)*a+u)}e.putImageData(r,0,0);let u=new Date,d=`'${String(u.getFullYear()).slice(2)} ${u.getMonth()+1} ${u.getDate()}`;e.font=`bold ${Math.round(n/22)}px ui-monospace, monospace`,e.fillStyle=`#f08a3c`,e.textAlign=`right`,e.fillText(d,t-Math.round(t/30),n-Math.round(n/24))}async function El(e){let t=new Image;t.src=e,await t.decode();let n=document.createElement(`canvas`);return n.width=t.naturalWidth,n.height=t.naturalHeight,n.getContext(`2d`).drawImage(t,0,0),n.toDataURL(`image/png`)}function Dl(e,t){let n=document.createElement(`a`);n.href=e,n.download=t,document.body.append(n),n.click(),n.remove()}async function Ol(e,t){let n=new Image;n.src=e.mapa,await n.decode();let r=Math.max(2,Math.floor(600/n.naturalHeight)),i=n.naturalWidth*r,a=n.naturalHeight*r,o=i+420,s=a+48,c=document.createElement(`canvas`);c.width=o,c.height=s;let l=c.getContext(`2d`);l.fillStyle=`#fbfaf7`,l.fillRect(0,0,o,s),l.imageSmoothingEnabled=!1,l.drawImage(n,24,24,i,a),l.strokeStyle=`#1b2330`,l.lineWidth=4,l.strokeRect(24,24,i,a);let u=t=>[24+t.x*e.mostres*r,24+t.z*e.mostres*r];l.strokeStyle=`#e0a030`,l.lineWidth=3,l.beginPath();let d=!1;for(let t of e.ruta){if(!t){d=!1;continue}let[e,n]=u(t);d?l.lineTo(e,n):l.moveTo(e,n),d=!0}l.stroke();for(let t of e.visitats){let[e,n]=u(t);l.fillStyle=`#1b2330`,l.fillRect(e-5,n-5,10,10),l.fillStyle=`#e0a030`,l.fillRect(e-3,n-3,6,6)}await document.fonts?.load(`16px Silkscreen`).catch(()=>null);let f=i+56;l.fillStyle=`#1b2330`,l.textAlign=`left`,l.font=`24px Silkscreen, monospace`,l.fillText(t.postal,f,64),l.font=`16px Silkscreen, monospace`,l.fillText(new Date().toLocaleDateString(e.lang===`en`?`en-GB`:`ca-ES`,{dateStyle:`long`}),f,96),l.fillText(t.llocs,f,144),l.font=`16px system-ui, sans-serif`;let p=172;e.visitats.length||l.fillText(t.cap,f,p);for(let t of e.visitats.slice(0,16))l.fillText(`· ${t.nom}`,f,p),p+=24;return l.font=`16px Silkscreen, monospace`,l.fillText(`${t.rodets} ${e.rodets}/${e.totalRodets}`,f,s-64),l.fillText(`www.4dsu.me`,f,s-36),c.toDataURL(`image/png`)}var kl=new URLSearchParams(location.search),Al=matchMedia(`(prefers-reduced-motion: reduce)`);function jl(e){return e instanceof HTMLElement&&(e.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(e.tagName))}async function Ml(t){let n=gl();if(!(`DecompressionStream`in window))return null;let r=await hl.carrega(Ii.pedraforca),i=t.querySelector(`#escena`),a=t.querySelector(`.bafarada`),o=a.querySelector(`span`),l=t.querySelector(`.titol-illa`),u=t.querySelector(`.js-entra`),d=t.querySelector(`dialog.mapa-rapid`),f;try{f=new Ai({canvas:i,antialias:!1,powerPreference:`high-performance`})}catch{return null}f.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),f.setClearColor(`#1d3f73`),f.shadowMap.enabled=!0,f.shadowMap.type=0,f.shadowMap.autoUpdate=!1;let p=new c,m=new Li;m.elevacio=Number(kl.get(`elevacio`)??30),m.ppu=Number(kl.get(`zoom`)??16),m.suavitzat=Al.matches?0:.18;let h=kl.get(`paleta`)??`illa`,g=new Ji(f,p,m,{costatCurt:Number(kl.get(`pixel`)??270),paleta:h===`cap`?null:Hi[h]??Hi.illa,contorns:kl.get(`contorns`)!==`0`,tramat:Number(kl.get(`tramat`)??0)}),_=kl.has(`hora`)||kl.has(`data`)||kl.has(`proves`),v=0,y=()=>new Date((_?Vs(kl).getTime():Date.now())+v),b=Bs(y()),x=new Ts(p,n,r,1/m.ppu,b.estacio===`tardor`,b.mes===4&&b.dia===23),S=new tc({relleu:r,material:bs,projeccio:Ii.projeccio,rutaVaixell:Ii.vaixell.ruta,mes:b.mes,estacio:b.estacio,onada:(e,t)=>x.aigua.onada(e,t)});p.add(S.grup);let C=new cc({material:bs,castellers:x.cultura.castellers,correfoc:x.cultura.correfoc,estany:x.cultura.estany,avisa:e=>z(e),assoleix:e=>ve(e),textos:n.textosCultura});p.add(C.grup),C.aplica(b);let w=new Ns({escena:p,renderer:f,llums:x.llums,aigua:x.aigua,terreny:x.matTerreny,voxels:bs,fars:x.fars,pedraforca:Ii.pedraforca});w.aplica(b,`sol`);let T=`defecte`;Ys(kl).then(({temps:e,font:n})=>{T=n,w.aplica(b,e),(n===`open-meteo`||n===`cau`)&&t.querySelectorAll(`.js-credit-temps`).forEach(e=>e.hidden=!1)}),_||setInterval(()=>{b=Bs(y()),w.aplica(b,w.temps),C.aplica(b)},6e4);let E=new tl(x),D=new xc(E);p.add(D.grup),D.teletransporta(Ii.inici.x,Ii.inici.z,0);let O=new Hc(E);p.add(O.grup),O.apareix(D);let k=new Gc(bs,p),ee=0,A=!1,j=new s,M=new s,te=()=>null,N=()=>{let e=new s(D.posicio.x,D.posicio.y+.6,D.posicio.z),t=te(),n=i.getBoundingClientRect();if(t&&n.height&&t.left<n.left+n.width*.4&&t.right>n.left+n.width*.6){let r=Math.min(.7,Math.max(0,(n.bottom-t.top)/n.height));m.direccions(j,M),e.addScaledVector(j,-(r/2*m.vista)/Math.sin(m.elevacio*Math.PI/180))}return e},ne=()=>{if(!i.clientWidth||!i.clientHeight)return;f.setSize(i.clientWidth,i.clientHeight,!1);let e=f.getDrawingBufferSize(new pt);g.mida(e.x,e.y),x.llums.ajusta(g.interna.x/m.ppu,g.interna.y/m.ppu,m.elevacio,m.gir),m.actualitza(N(),0,!0)};new ResizeObserver(ne).observe(i),ne();let P=document.documentElement,re=!!l&&P.dataset.benvinguda===`si`&&!xl(location.hash,n.rutes);P.dataset.benvinguda=re?`si`:`no`;let ie=()=>{re&&(re=!1,e.benvinguda=!0,P.dataset.benvinguda=`no`,t.focus({preventScroll:!0}))};u?.addEventListener(`click`,ie),u?.addEventListener(`touchend`,e=>{e.preventDefault(),ie()});let F=new pc,ae=0;t.querySelectorAll(`.js-so`).forEach(e=>e.addEventListener(`click`,()=>{let e=F.commuta();t.querySelectorAll(`.js-so`).forEach(t=>t.setAttribute(`aria-pressed`,String(e)))}));let I=new Sl(t.querySelector(`dialog.panell`),n,()=>Al.matches),oe=!1,se=!1;I.enCanvi=e=>{oe=e,e||Pt()};let L=new wl({arrel:t,canvas:i,pinta:()=>g.render(),reduit:()=>Al.matches,avisa:e=>z(e),enCanvi:()=>{oe=I.obert||L.dialegObert,L.actiu&&(Z.clear(),D.atura()),oe||Pt()},postal:()=>({mapa:n.mapa,mostres:Ii.mostres,ruta:ot,visitats:[...e.visitats].flatMap(e=>{let t=Ii.llocs.find(t=>t.id===e)??Ii.fites.find(t=>t.id===e);if(t)return[{nom:n.llocs[e]??t.nom[n.lang],x:t.x,z:t.z}];let r=e.startsWith(`foto-`)?x.interactius.find(t=>t.id===e):null;return r?[{nom:r.etiqueta,x:r.punt.x,z:r.punt.z}]:[]}),rodets:e.rodets.size,totalRodets:$e,lang:n.lang})}),ce=t.querySelector(`.hud`);ce&&new ResizeObserver(()=>t.style.setProperty(`--sota-hud`,`${ce.offsetHeight+4}px`)).observe(ce);let R=t.querySelector(`.illa__avis`),le=0,z=e=>{R&&(R.textContent=e,R.hidden=!1,clearTimeout(le),le=window.setTimeout(()=>R.hidden=!0,4e3))},de=Xc(n.ia?.url??null,kl),fe=de?new Yc(de,n.lang):null,pe=e=>n.destins.find(t=>t.id===e)?.nom??e,me=()=>{let e,t=10;for(let n of[...Ii.llocs,...Ii.fites]){let r=Math.hypot(n.x-D.posicio.x,n.z-D.posicio.z);r<t&&(e=n.id,t=r)}return e},B=new Zc({arrel:t,manifest:n,ia:fe,context:()=>({moment:w.cel.moment,estacio:w.cel.estacio,temps:w.temps,lloc:H.actual?void 0:me(),pilota:e.pilota}),executa:(e,t)=>Fe(e,t),enCanvi:t=>{$=null,a.hidden=!0,t&&Object.keys(n.personatges).every(t=>e.converses.has(t))&&ve(`personatges`)},tePilota:()=>e.pilota});te=()=>B.rect;let he=m.ppu,ge=t.querySelector(`.illa__assoliment`),_e=0,ve=t=>{if(!e.assoleix(t))return;let r=n.assoliments.find(e=>e.id===t);r&&ge&&(ge.textContent=n.textos.assoliment.replace(`{nom}`,r.nom),ge.hidden=!1,clearTimeout(_e),_e=window.setTimeout(()=>ge.hidden=!0,4500))},V=new el({arrel:t,escena:p,mon:x,relleu:r,jugador:D,suki:O,material:bs,textos:n.textosExploracio,lang:n.lang,avisa:e=>z(e),porta:(e,t)=>it(e,t,!0),puntLliure:(e,t)=>at(e,t),zoom:e=>{m.ppu=e,x.panoramica(e<12),C.panoramica(e<12),ne()},ppuBase:he,reduit:()=>Al.matches,moment:()=>w.cel.moment,assoleix:ve}),ye=null,H=new rl({monActiu:E,pipeline:g,renderer:f,escenaIlla:p,jugador:D,suki:O,material:bs,fos:t.querySelector(`.illa__fos`),reduit:()=>Al.matches,fons:()=>w.fons,interior:()=>({textos:n.textosExploracio,avisa:e=>z(e),assoleix:ve,rodet:x.rodetSubmari?{k:x.rodetSubmari,trobat:e.rodets.has(x.rodetSubmari)}:null,recullRodet:e=>nt(e)}),sortida:e=>x.interactius.find(t=>t.id===(e===`cova`?`cova`:`immersio`))?.punt??{x:Ii.inici.x,z:Ii.inici.z},enCanvi:(e,r)=>{Z.clear(),$=null,ye=null,Et=``,a.hidden=!0,ot.push(null),st=null,t.dataset.interior=e?r:``,m.ppu=e?e.zoom:he,ne(),m.actualitza(N(),0,!0),e&&(r===`submari`&&ve(`submari`),z(n.textosExploracio[r===`cova`?`exp.cova-entra`:`exp.mar-entra`]))}}),be=e=>{A||V.controla||(B.tanca(!1),Le(),H.entra(e))},xe=h===`cap`?null:Hi[h]??Hi.illa,Se=!1,U=t.querySelector(`.js-gameboy`),Ce=()=>e.visitats.has(`cartutx`)||e.visitats.has(`konami`),we=()=>{U&&(U.hidden=!Ce(),U.setAttribute(`aria-pressed`,String(Se)))},W=e=>Ce()?(Se=!Se,g.canviaPaleta(Se?Hi.gameboy:xe),we(),z(e??n.textosExploracio[Se?`exp.paleta-gameboy-posa`:`exp.paleta-gameboy-treu`]),oe&&g.render(),!0):!1;U?.addEventListener(`click`,()=>W());let De=[`arrowup`,`arrowup`,`arrowdown`,`arrowdown`,`arrowleft`,`arrowright`,`arrowleft`,`arrowright`,`b`,`a`],Oe=0,ke=t=>{Oe=t===De[Oe]?Oe+1:+(t===De[0]),!(Oe<De.length)&&(Oe=0,e.visita(`konami`),ve(`konami`),Se||W(n.textosExploracio[`exp.konami`]))},Ae=new al({arrel:t,llocs:Ii.llocs.map(e=>({id:e.id,nom:n.llocs[e.id]??e.id})),textos:n.textosContra,avisa:e=>z(e),assoleix:ve}),G=t.querySelector(`.js-contrarellotge`),je=()=>{let r=e.millorTemps;t.querySelectorAll(`.js-millor-temps`).forEach(e=>e.textContent=r?il(r):n.textosContra[`contra.cap`]),G&&(G.textContent=(Ae.actiu?G.dataset.atura:G.dataset.comenca)??``)};G?.addEventListener(`click`,()=>{Ae.actiu?Ae.anulla(`atura`):(d.close(),Ae.comenca()),je()});let Me=t.querySelector(`.minimapa`),Ne=Me?new ul({canvas:Me,mapa:n.mapa,mostres:Ii.mostres,llocs:Ii.llocs.map(e=>({x:e.x,z:e.z,color:n.colors[e.id]??`#d9573b`})),gir:()=>m.gir}):null;Me?.addEventListener(`click`,()=>dt());let Pe=new Set([bs]);for(let e of[D.grup,O.grup])e.traverse(e=>{let t=e.material;t instanceof Ee&&Pe.add(t)});g.filferros=e=>Pe.forEach(t=>t.wireframe=e);let K=new ol({arrel:t,renderer:f,pipeline:g,textos:n.textosFet,colors:()=>Se?Hi.gameboy.length:xe?.length??0});function Fe(t,r){let i=e=>typeof r.args?.[e]==`string`?r.args[e]:``;switch(r.nom){case`fes`:{let e=i(`accio`);return Bc.includes(e)&&!A&&O.ordre(e)}case`busca_pilota`:return Ie();case`guia`:return Re(i(`lloc`));case`obre_seccio`:{let e=i(`seccio`),t=i(`serie`),r=e===`fotografia`&&t&&n.rutes[`fotografia/${t}`]?`fotografia/${t}`:e;return!n.rutes[r]||n.seccions[e]?.buit?!1:(I.obre({cami:r}),!0)}case`porta_a`:{let r=ut(i(`lloc`));if(!r||A||V.controla)return!1;let a=t===`suki`?`Suki`:n.personatges[t].nom;return B.tanca(),it(r.x,r.z),e.visita(i(`lloc`)),z(n.textos.porta.replace(`{nom}`,a).replace(`{lloc}`,pe(i(`lloc`)))),!0}case`acomiada`:return window.setTimeout(()=>B.tanca(),1500),!0}return!1}function q(){e.trobaPilota()&&(x.recullPilota(),$=null,a.hidden=!0,z(n.textos.pilotaTrobada))}let J=()=>({x:D.posicio.x+Math.sin(D.orientacio)*.7,z:D.posicio.z+Math.cos(D.orientacio)*.7});function Ie(){if(!e.pilota)return z(n.textos.sensePilota),!1;if(k.estat!==`guardada`||O.ocupada||A||V.controla||H.actual)return!1;let t=Math.sin(D.orientacio),r=Math.cos(D.orientacio),i=4.5;for(;i>=1.5&&!x.lliure(D.posicio.x+t*i,D.posicio.z+r*i,.3);)i-=.5;if(i<1.5)return z(n.textos.senseLloc),!1;let a=D.posicio.x+t*i,o=D.posicio.z+r*i;return k.llanca(D.posicio.clone().setY(D.posicio.y+.9),new s(a,x.sol(a,o),o),Al.matches),O.ves({punt:()=>({x:a,z:o}),llindar:.4,enArribar:()=>{if(k.estat!==`terra`)return!1;k.aLaBoca(O.cap),O.ves({punt:J,llindar:.9,enArribar:()=>{k.guarda(),O.ordre(`seu`)}})}}),!0}let Le=()=>{k.estat!==`guardada`&&(k.guarda(),O.ves(null))};function Re(t){let r=ut(t);if(!r||A||O.ocupada||V.controla)return!1;let i=Math.hypot(r.x-D.posicio.x,r.z-D.posicio.z);return z(n.textos.guia.replace(`{lloc}`,pe(t))),i<1.5?(O.ordre(`borda`),!0):i<20&&D.caminaA(r.x,r.z,()=>e.visita(t))?(O.ves({punt:()=>D.puntDavant(1.8),llindar:.35}),!0):(O.ordre(`borda`),window.setTimeout(()=>{A||(it(r.x,r.z),e.visita(t))},700),!0)}let ze=t.querySelector(`.suki-lladruc`),Be=0;O.enBordar=()=>{F.borda(),Be=.8};let Ve=e=>{if(!ze||(Be=Math.max(0,Be-e),ze.hidden=Be<=0,ze.hidden))return;let t=O.grup.position.clone().setY(O.grup.position.y+.9).project(m.logica);ze.style.left=`${(t.x+1)/2*i.clientWidth}px`,ze.style.top=`${(1-t.y)/2*i.clientHeight}px`},He=new Set,Y=0,Ue=t=>{if(Y=D.enMoviment?0:Y+t,Y<25||B.obert||A||L.actiu||O.ocupada||H.actual)return;Y=0;let r=e.visitats,i=null,a=22;for(let e of x.interactius){if(r.has(e.id)||He.has(e.id)||!(e.cami===`personatge`||Ii.llocs.some(t=>t.id===e.id)))continue;let t=Math.hypot(e.punt.x-D.posicio.x,e.punt.z-D.posicio.z);t>3&&t<a&&(i=e,a=t)}i&&(He.add(i.id),O.bordaCap(i.punt.x,i.punt.z),z(n.textos.sukiBorda.replace(`{lloc}`,i.etiqueta)))},We=n.textosPersona,Ge=new ml({dialeg:t.querySelector(`dialog.terminal`),persona:n.persona,textos:We,rutes:n.rutes,obre:e=>void I.obre({cami:e}),os:()=>void I.obre({cami:`os`}),arrel:t}),Ke=new fl(t.querySelector(`dialog.fitxa-illa`),e=>void I.obre({cami:e}),t),qe=()=>{let{estudis:e}=n.persona;Ke.obre({titol:We[`pers.pissarra-titol`],estil:`pissarra`,paragrafs:e.length?e.flatMap(e=>[`${e.titol} · ${e.periode}`,...e.enfocament?[`${We[`pers.enfocament`]}: ${e.enfocament}`]:[]]):[We[`pers.sense-estudis`]],subtitol:We[`pers.assignatures`],llista:e.flatMap(e=>e.assignatures).map(e=>({text:e})),buit:We[`pers.sense-assignatures`],boto:e.length?{text:We[`pers.obre-estudis`],cami:`estudis`}:void 0})},Je=e=>{let t=n.persona.anys.find(t=>t.any===e);if(!t)return;let r=e=>e===1?We[`pers.1.fotografia`]:We[`pers.n.fotografia`].replace(`{n}`,String(e));Ke.obre({titol:We[`pers.any-titol`].replace(`{any}`,String(e)),paragrafs:[We[`pers.linia-explica`]],llista:t.entrades.map(e=>({tipus:We[`pers.tipus.${e.tipus}`]??e.tipus,text:e.titol,detall:e.n?r(e.n):e.data??void 0,cami:e.cami})),buit:We[`pers.sense-anys`]})},Ye=!1,X=0,Ze=t=>{if(D.atura(),e.visita(t.id),t.cami===`mapa`)dt();else if(t.cami===`vaixell`)rt(t.moll??0);else if(t.cami===`rodet`)nt(t.rodet??0);else if(t.cami===`personatge`&&t.personatge)B.obre(t.personatge);else if(t.cami===`pilota`)q(),ve(`pilota`);else if(t.cami===`cim`)V.cim(t.id);else if(t.cami===`parapent`)B.tanca(!1),V.saltaParapent();else if(t.cami===`globus`)B.tanca(!1),V.pujaGlobus();else if(t.cami===`bici`)V.agafaBici();else if(t.cami===`metro`)V.obreMetro(t.estacio??``);else if(t.cami===`cova`)be(`cova`);else if(t.cami===`immersio`)be(`submari`);else if(t.cami===`refugi`)Qe();else if(t.cami===`castellers`)C.demanaCastell(),z(n.textosCultura[`cult.castellers-text`]);else if(t.cami===`correfoc`)z(n.textosCultura[C.correfoc?`cult.correfoc-text`:`cult.correfoc-pista`]);else if(t.cami===`estany`)z(n.textosCultura[C.glacat?`cult.estany-glacat`:`cult.estany-text`]);else if(t.cami===`montserrat`||t.cami===`sagrada-familia`||t.cami===`sant-jordi`)z(n.textosCultura[`cult.${t.cami}-text`]);else if(t.cami===`monument`)z(n.textosCultura[`cult.${t.id}-text`]);else if(t.cami===`terminal`)Ge.obre();else if(t.cami===`pissarra`)qe();else if(t.cami===`any`&&t.any)Je(t.any);else if(t.cami===`bot`)B.tanca(!1),V.rema();else if(t.cami===`cambra`){let e=n.fotos[X++*7%n.fotos.length];e&&I.obre({cami:`fotografia/${e.serie}`,foto:e.foto,efecte:`liquid`})}else I.obre({cami:t.cami,foto:t.foto})};function Qe(){let e=b.moment,r=y().getTime(),i=9e5;for(;i<864e5&&Bs(new Date(r+i)).moment===e;)i+=9e5;let a=()=>{v+=i,b=Bs(y()),w.aplica(b,w.temps),C.aplica(b);let e=b.moment===`posta`?b.hora<12?`cult.desperta-alba`:`cult.desperta-posta`:`cult.desperta-${b.moment}`;z(n.textosCultura[e]),ve(`refugi`),oe&&g.render()},o=t.querySelector(`.illa__fos`);if(!o||Al.matches)return a();o.hidden=!1,o.offsetWidth,o.classList.add(`illa__fos--fosc`),window.setTimeout(()=>{a(),o.classList.remove(`illa__fos--fosc`),window.setTimeout(()=>o.hidden=!0,450)},700)}let $e=n.rodets.length,et=()=>n.textos.rodetTrobat.replace(`{n}`,String(e.rodets.size)).replace(`{total}`,String($e)),tt=()=>{t.querySelectorAll(`.js-rodets`).forEach(t=>t.textContent=`${e.rodets.size}/${$e}`)};function nt(t){t&&e.trobaRodet(t)&&(x.recullRodet(t),$=null,a.hidden=!0,tt(),z(et()),e.rodets.size>=$e&&ve(`rodets`))}tt();function rt(e){return A||V.controla||!x.vaixells.salpa(e,Al.matches)?!1:(A=!0,D.enBici=!1,B.tanca(!1),Le(),Z.clear(),D.atura(),$=null,a.hidden=!0,!0)}let it=(e,t,n=!1)=>{n||Ae.anulla(`trampa`),H.surt(!0),Le(),ot.push(null),D.teletransporta(e,t),O.apareix(D),m.actualitza(N(),0,!0)},at=(e,t)=>{for(let n=0;n<8;n+=.5)for(let r=0;r<Math.max(1,n*8);r++){let i=r/Math.max(1,n*8)*Math.PI*2,a=e+Math.cos(i)*n,o=t+Math.sin(i)*n;if(x.lliure(a,o,.3))return{x:a,z:o}}return{x:e,z:t}},ot=[],st=null,ct=()=>{let{x:e,z:t}=D.posicio;st&&Math.hypot(st.x-e,st.z-t)<.4||(st={x:e,z:t},ot.push(st),ot.length>4e3&&ot.splice(0,ot.length-4e3))},lt=t.querySelector(`.js-mapa`),ut=e=>{let t=Ii.fites.find(t=>t.id===e);return t?at(t.x+3,t.z+4.5):x.interactius.find(t=>t.id===e)?.punt??null};function dt(){if(A||V.controla||H.ocupat)return;let t=e.visitats;d.querySelectorAll(`.llista-llocs [data-lloc]`).forEach(e=>{e.closest(`li`)?.toggleAttribute(`data-visitat`,t.has(e.dataset.lloc))}),tt(),mt(),we(),ft(),je(),d.showModal(),oe=!0}lt?.addEventListener(`click`,dt);function ft(){let n=e.assoliments,r=t.querySelectorAll(`.assoliments [data-assoliment]`);r.forEach(e=>e.toggleAttribute(`data-fet`,n.has(e.dataset.assoliment)));let i=[...r].filter(e=>e.hasAttribute(`data-fet`)).length;t.querySelectorAll(`.js-assoliments`).forEach(e=>e.textContent=`${i}/${r.length}`)}function mt(){let r=[...e.converses].filter(e=>e in n.personatges).length,i=Object.keys(n.personatges).length,a={cim:e.visitats.has(`cim-de-dia`),pilota:e.pilota,personatges:r>=i,rodets:e.rodets.size>=$e},o={cim:``,pilota:``,personatges:`${r}/${i}`,rodets:`${e.rodets.size}/${$e}`};t.querySelectorAll(`.missions [data-missio]`).forEach(e=>{let t=e.dataset.missio;e.toggleAttribute(`data-fet`,a[t]);let n=e.querySelector(`.js-progres`);n&&(n.textContent=o[t])})}let ht=()=>!A&&(!H.actual||H.actual.suki);t.querySelectorAll(`.js-suki`).forEach(e=>e.addEventListener(`click`,()=>ht()&&B.obre(`suki`))),d.addEventListener(`close`,()=>{oe=I.obert,Pt()}),d.addEventListener(`click`,t=>{let n=t.target.closest(`[data-lloc]`);if(!n){(t.target===d||t.target.closest(`.js-tanca-mapa`))&&d.close();return}t.preventDefault();let r=ut(n.dataset.lloc);r&&(it(r.x,r.z),e.visita(n.dataset.lloc)),d.close()});let Z=new Set;addEventListener(`keydown`,e=>{if(se||I.obert||d.open||L.dialegObert||V.metroObert||Ge.obert||Ke.obert||jl(e.target)||e.metaKey||e.ctrlKey||e.altKey)return;let t=e.key.toLowerCase();if(ke(t),!(re||A||H.ocupat)){if(e.key===`F3`){e.preventDefault(),K.commuta();return}if(t===`p`){W()&&e.preventDefault();return}if(t===`c`){e.preventDefault(),L.commuta();return}if(L.actiu){if(t===`escape`){e.preventDefault(),L.surt();return}if((t===` `||t===`enter`)&&!(document.activeElement instanceof HTMLButtonElement||document.activeElement instanceof HTMLAnchorElement)){e.preventDefault(),L.dispara();return}}if(V.controla&&![`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`,`c`].includes(t)){(t===`e`||(t===`enter`||t===` `)&&!(document.activeElement instanceof HTMLButtonElement&&document.activeElement!==a))&&(e.preventDefault(),V.accio()?.fes());return}if([`w`,`a`,`s`,`d`,`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,`shift`].includes(t))Z.add(t),t.startsWith(`arrow`)&&e.preventDefault();else if(t===`m`)e.preventDefault(),dt();else if(t===`escape`&&B.obert)e.preventDefault(),B.tanca();else if(t===`escape`&&K.actiu)e.preventDefault(),K.commuta(!1);else if(t===`g`)e.preventDefault(),ht()&&B.obre(`suki`);else if(t===`b`)e.preventDefault(),Ie();else if(t===`x`)e.preventDefault(),H.actual||V.commutaBici();else if((t===`e`||t===`enter`||t===` `)&&H.actual){let n=document.activeElement instanceof HTMLButtonElement&&document.activeElement!==a||document.activeElement instanceof HTMLAnchorElement;if(t!==`e`&&n||!ye)return;e.preventDefault(),D.atura(),ye.fes()}else if((t===`e`||t===`enter`||t===` `)&&$){let n=document.activeElement instanceof HTMLButtonElement&&document.activeElement!==a||document.activeElement instanceof HTMLAnchorElement;if(t!==`e`&&n)return;e.preventDefault(),Ze($)}}}),addEventListener(`keyup`,e=>Z.delete(e.key.toLowerCase())),addEventListener(`blur`,()=>Z.clear());let Q=new s,gt=new s,_t=()=>{let e=(Z.has(`w`)||Z.has(`arrowup`)?1:0)-(Z.has(`s`)||Z.has(`arrowdown`)?1:0),t=(Z.has(`d`)||Z.has(`arrowright`)?1:0)-(Z.has(`a`)||Z.has(`arrowleft`)?1:0);return!e&&!t?null:(m.direccions(Q,gt),new s().addScaledVector(Q,e).addScaledVector(gt,t).normalize())},vt=new Te,yt=x.terreny,bt=()=>x.interactius.flatMap(e=>e.objectes.map(t=>({o:t,it:e}))),xt=(e,t)=>{let n=i.getBoundingClientRect();vt.setFromCamera(new pt((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),m.logica)},St=()=>{let e=bt(),t=vt.intersectObjects([yt,O.grup,...new Set(e.map(e=>e.o))],!0);for(let n of t){if(O.grup.getObjectById(n.object.id))return{suki:!0};let t=e.filter(({o:e})=>e===n.object||e.getObjectById(n.object.id)).sort((e,t)=>e.it.ancora.distanceTo(n.point)-t.it.ancora.distanceTo(n.point))[0];if(t)return{it:t.it};if(n.object.parent===yt)return{terra:n.point}}return null},Ct=(e,t)=>{if(re||A)return;if(xt(e,t),V.controla){V.clicAigua(vt);return}if(H.actual){wt();return}let n=St();if(n){if(`suki`in n)B.obre(`suki`);else if(`it`in n){let{it:e}=n;Math.hypot(D.posicio.x-e.punt.x,D.posicio.z-e.punt.z)<=e.radi?Ze(e):D.caminaA(e.punt.x,e.punt.z,()=>Ze(e))}else D.caminaA(n.terra.x,n.terra.z)}},wt=()=>{let e=H.actual;if(!e||H.ocupat)return;let t=vt.intersectObjects(e.escena.children,!0).filter(e=>!D.grup.getObjectById(e.object.id))[0];if(!t)return;if(e.suki&&O.grup.getObjectById(t.object.id)){B.obre(`suki`);return}let n=null,r=1.3;for(let i of e.interactius){let e=Math.hypot(i.ancora.x-t.point.x,i.ancora.z-t.point.z);e<r&&(n=i,r=e)}if(n){let e=n.fes;Math.hypot(D.posicio.x-n.punt.x,D.posicio.z-n.punt.z)<=n.radi?e():D.caminaA(n.punt.x,n.punt.z,e);return}D.caminaA(t.point.x,t.point.z)};i.addEventListener(`click`,e=>Ct(e.clientX,e.clientY)),i.addEventListener(`pointerup`,e=>{e.pointerType===`touch`&&Ct(e.clientX,e.clientY)}),i.addEventListener(`touchend`,e=>{if(e.changedTouches.length){let t=e.changedTouches[0];Ct(t.clientX,t.clientY)}}),a.addEventListener(`click`,()=>{V.controla?V.accio()?.fes():H.actual?ye?.fes():$&&Ze($)});let $=null,Tt=matchMedia(`(pointer: coarse)`).matches;a.querySelector(`kbd`).hidden=Tt;let Et=``,Dt=()=>{if(V.controla){$=null;let e=V.accio();if(a.hidden=!e,!e)return;e.etiqueta!==Et&&(Et=e.etiqueta,o.textContent=e.etiqueta,a.setAttribute(`aria-label`,e.etiqueta));let t=e.ancora.clone().project(m.logica);a.style.left=`${(t.x+1)/2*i.clientWidth}px`,a.style.setProperty(`--fletxa`,`0px`),a.style.top=`${(1-t.y)/2*i.clientHeight}px`;return}if(Et&&(Et=``,$=null,a.hidden=!0),H.actual){let e=null,t=1/0;for(let n of H.actual.interactius){let r=Math.hypot(D.posicio.x-n.punt.x,D.posicio.z-n.punt.z);r<=n.radi&&r<t&&(e=n,t=r)}(H.ocupat||L.actiu)&&(e=null),e!==ye&&(ye=e,a.hidden=!e,e&&(o.textContent=Tt?`${n.textos.mirar}: ${e.etiqueta}`:e.etiqueta,a.setAttribute(`aria-label`,`${n.textos.mirar}: ${e.etiqueta}`))),ye&&Ot(ye.ancora);return}let t=null,r=1/0;for(let e of x.interactius){let n=Math.hypot(D.posicio.x-e.punt.x,D.posicio.z-e.punt.z);n<=e.radi&&n<r&&(t=e,r=n)}(re||A||L.actiu||B.obert&&t?.cami===`personatge`)&&(t=null),t!==$&&($=t,a.hidden=!$,$&&(e.visita($.id),$.foto&&e.visita(`galeria`),o.textContent=Tt?`${n.textos.mirar}: ${$.etiqueta}`:$.etiqueta,a.setAttribute(`aria-label`,`${n.textos.mirar}: ${$.etiqueta}`))),$&&Ot($.ancora)},Ot=e=>{let t=e.clone().project(m.logica),n=(t.x+1)/2*i.clientWidth,r=a.offsetWidth/2+8,o=Math.min(Math.max(n,r),Math.max(r,i.clientWidth-r)),s=Math.max(-r+20,Math.min(r-20,n-o));a.style.left=`${o}px`,a.style.setProperty(`--fletxa`,`${s}px`),a.style.top=`${(1-t.y)/2*i.clientHeight}px`},kt=performance.now(),At=0,jt=!1,Mt=()=>{At++>0||(t.dataset.estat=`llesta`,u&&(u.disabled=!1,u.textContent=u.dataset.llesta??u.textContent))},Nt=e=>{if(oe||se||document.hidden){jt=!1;return}let t=Math.min(.05,(e-kt)/1e3);kt=e;let n=Al.matches;f.info.autoReset||f.info.reset();let i=H.actual;if(i){H.ocupat||D.actualitza(t,_t(),Z.has(`shift`),n),i.actualitza(t,e/1e3,D.posicio,n),i.suki&&O.actualitza(t,D,n),Ae.actualitza(t,null),Ne&&(Ne.visible=!1),f.setClearColor(i.fons),D.grup.position.copy(m.enganxa(D.posicio.clone())),O.grup.position.copy(m.enganxa(O.posicio.clone())),m.actualitza(N(),t),Dt(),Ve(t),g.render(),K.fotograma(e),requestAnimationFrame(Nt);return}n||(ee+=t);let a=x.actualitza(t,ee,m.objectiu,D.posicio,n);if(w.actualitza(t,ee,m.objectiu,n),S.actualitza(t,ee,n),F.actiu&&(ae+=t)>.5){ae=0;let{x:e,y:t,z:n}=D.posicio;F.ajusta({costa:r.distCosta(e,n),altura:t,nit:w.nit>.5,pluja:w.temps===`pluja`})}if(a){let e=ts.coberta(a,.35,0);D.fixa(e.x,a.y,e.z,a.angle);let t=ts.coberta(a,-.7,.05);if(O.fixa({x:t.x,y:a.y,z:t.z,orientacio:a.angle}),a.arribat){A=!1,ve(`vaixell`),O.fixa(null);let e=a.desti.baixada;D.teletransporta(e.x,e.z),O.apareix(D)}}else V.controla||D.actualitza(t,re?null:_t(),Z.has(`shift`),n);if(V.actualitza(t,V.controla&&!re?_t():null),C.actualitza(t,D.posicio,n),O.actualitza(t,D,n),k.actualitza(t),x.actualitzaHabitants(t,D.posicio,e/1e3,B.parlant,n),B.obert&&B.actual&&B.actual!==`suki`){let e=x.habitants.find(e=>e.id===B.actual);e&&Math.hypot(e.x-D.posicio.x,e.z-D.posicio.z)>5&&B.tanca(!1)}Ue(t),!Ye&&w.cel.moment===`posta`&&(Ye=!0,ve(`posta`)),a?st=null:ct(),D.grup.position.copy(m.enganxa(D.posicio.clone())),O.grup.position.copy(m.enganxa(O.posicio.clone())),m.actualitza(N(),t),Dt(),Ve(t),Ae.actualitza(t,$?.id??null),Ne&&(Ne.visible=!re&&!L.actiu,Ne.actualitza(t,D.posicio,O.posicio)),g.render(),K.fotograma(e),Mt(),requestAnimationFrame(Nt)};function Pt(){jt||oe||se||(jt=!0,kt=performance.now(),requestAnimationFrame(Nt))}document.addEventListener(`visibilitychange`,()=>!document.hidden&&Pt());let Ft=xl(location.hash,n.rutes);if(Ft){let e=x.interactius.find(e=>e.cami===Ft.cami&&(!Ft.foto||e.foto===Ft.foto))??x.interactius.find(e=>e.cami===Ft.cami)??x.interactius.find(e=>Ft.cami.startsWith(`${e.cami}/`));e&&it(e.punt.x,e.punt.z),m.actualitza(N(),0,!0),x.actualitza(0,ee,m.objectiu,D.posicio,!0),D.grup.position.copy(m.enganxa(D.posicio.clone())),O.grup.position.copy(m.enganxa(O.posicio.clone())),g.render(),Mt(),I.obre(Ft,!1)}return Pt(),kl.has(`proves`)&&(f.info.autoReset=!1,Object.assign(window,{__illa:{jugador:()=>({x:D.posicio.x,z:D.posicio.z}),proper:()=>(H.actual?ye?.id:$?.id)??null,panellObert:()=>I.obert,teletransporta:(e,t)=>it(e,t),caminaA:(e,t)=>D.caminaA(e,t),enCami:()=>D.enCami,models:()=>({...x.models}),rodets:()=>[...e.rodets],camera:()=>({actiu:L.actiu,fotos:e.fotos.length}),ruta:()=>ot.filter(Boolean).length,postal:()=>L.fesPostal(),ambient:()=>({moment:w.cel.moment,estacio:w.cel.estacio,elevacio:w.cel.elevacio,nit:w.nit,temps:w.temps,font:T,vida:{...S.resum},tren:S.posicioTren(),precipitacio:!!p.getObjectByName(`precipitacio`),boira:!!p.getObjectByName(`boira`),feixos:!!p.getObjectByName(`feixos-fars`)?.visible,so:F.actiu}),interactius:()=>x.interactius.map(e=>({id:e.id,cami:e.cami,foto:e.foto,x:e.punt.x,z:e.punt.z})),pixel:()=>({escala:g.escala,interna:g.interna.toArray()}),fotogrames:()=>At,suki:()=>({x:O.posicio.x,z:O.posicio.z,estat:O.estat,ordre:O.ordreActual,ocupada:O.ocupada}),pilota:()=>({estat:k.estat,trobada:e.pilota,x:k.malla.position.x,z:k.malla.position.z}),conversa:()=>({obert:B.obert,actual:B.actual,ia:!!fe,veu:B.veu?{estat:B.veu.estat,enviats:B.veu.enviats,rebuts:B.veu.rebuts}:null}),habitants:()=>x.habitants.map(e=>({id:e.id,x:e.x,z:e.z,orientacio:e.malla.rotation.y})),llancaPilota:()=>Ie(),exploracio:()=>({...V.resum(),bici:D.enBici,ppu:m.ppu}),interior:()=>H.actual?{tipus:H.actual.tipus,ocupat:H.ocupat,interactius:H.actual.interactius.map(e=>({id:e.id,x:e.punt.x,z:e.punt.z})),suki:!!H.actual.escena.getObjectByName(`suki`),escena:g.escena===H.actual.escena}:{tipus:null,ocupat:H.ocupat},mouInterior:(e,t)=>D.teletransporta(e,t),paleta:()=>({gameboy:Se,cartutx:e.visitats.has(`cartutx`),konami:e.visitats.has(`konami`)}),contrarellotge:()=>({actiu:Ae.actiu,temps:Ae.temps,visitats:Ae.visitatsAra,total:Ae.total,millor:e.millorTemps}),viatja:(e,t)=>it(e,t,!0),makingOf:()=>({actiu:K.actiu,vista:g.vista}),cultura:()=>({castell:C.estatCastell,correfoc:C.correfoc,drac:C.angleFoc,glacat:C.glacat,moment:b.moment,hora:b.hora,dormit:v}),minimapa:()=>!!Me&&!Me.hidden&&getComputedStyle(Me).display!==`none`,persona:()=>({terminal:Ge.obert,fitxa:Ke.obert,anys:n.persona.anys.map(e=>e.any)}),assoliments:()=>[...e.assoliments],altura:(e,t)=>r.altura(e,t),cami:(e,t)=>(r.mascaraA(e,t)&vo.cami)!==0,illa:()=>r.illa(D.posicio.x,D.posicio.z),navegant:()=>A,salpa:e=>rt(e),fites:()=>Ii.fites,pedraforca:()=>Ii.pedraforca,render:()=>({...f.info.render,geometries:f.info.memory.geometries,programes:f.info.programs?.length??0}),lliure:(e,t)=>E.lliure(e,t,.3),queToca:(e,t)=>{xt(e,t);let n=St();return n?`suki`in n?{suki:!0}:`it`in n?{id:n.it.id}:{x:n.terra.x,z:n.terra.z}:null},aPantalla:(e,t)=>{let n=new s(e,E.sol(e,t),t).project(m.logica),r=i.getBoundingClientRect();return{x:r.left+(n.x+1)/2*r.width,y:r.top+(1-n.y)/2*r.height}},mostraGrup:(e,t)=>{p.traverse(n=>{n.name===e&&(n.visible=t)})},dibuixats:()=>{let e=e=>new ue().setFromProjectionMatrix(new Xe().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)),t=e(m.render),n=e(x.llums.sol.shadow.camera),r={};return g.escena.traverseVisible(e=>{let i=e;if(!i.isMesh)return;let a=e;for(;a.parent&&a.parent!==g.escena&&a.parent!==x.arrel;)a=a.parent;let o=a.name||e.name||`${e.type} a (${Math.round(a.position.x)}, ${Math.round(a.position.z)})`,s=r[o]??={camera:0,ombres:0};(!i.frustumCulled||t.intersectsObject(i))&&s.camera++,i.castShadow&&(!i.frustumCulled||n.intersectsObject(i))&&s.ombres++}),r},pressupost:()=>{let e={};return p.traverse(t=>{let n=t;if(!n.isMesh)return;let r=n.geometry,i=(r.index?r.index.count:r.attributes.position.count)/3,a=n.isInstancedMesh?n.count:1,o=t.parent?.name||t.name||`altres`;e[o]=(e[o]??0)+i*a,(a>1||n.isInstancedMesh)&&(e[`${o}·instàncies`]=(e[`${o}·instàncies`]??0)+a,e[`${o}·triangles/model ${i}`]=(e[`${o}·triangles/model ${i}`]??0)+a)}),e}}})),{mostra(){se=!1,ne(),Pt()},amaga(){se=!0,Z.clear(),D.atura()}}}export{Ml as inicia,ji as n,Pi as t};