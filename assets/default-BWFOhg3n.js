/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var oe;(function(t){t.SUCCESS="SUCCESS",t.PENDING="PENDING",t.FAILURE="FAILURE",t.TERMINAL="TERMINAL",t.CANCELED="CANCELED"})(oe||(oe={}));var $;(function(t){t.OKTA_PASSWORD="okta_password",t.OKTA_EMAIL="okta_email",t.PHONE_NUMBER="phone_number",t.GOOGLE_AUTHENTICATOR="google_otp",t.SECURITY_QUESTION="security_question",t.OKTA_VERIFY="okta_verify",t.WEBAUTHN="webauthn"})($||($={}));var Z;(function(t){t.PASSWORD_RECOVERY="recover-password",t.REGISTRATION="enroll-profile",t.SOCIAL_IDP="redirect-idp",t.ACCOUNT_UNLOCK="unlock-account"})(Z||(Z={}));function dt(t){return t&&(t.key||t.id)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Zs(){return typeof window<"u"?window.console:typeof console<"u"?console:void 0}function ve(){var t=Zs();return t&&t.log?t:{log:function(){},warn:function(){},group:function(){},groupEnd:function(){}}}function W(t){ve().warn("[okta-auth-sdk] WARN: "+t)}function ei(t){ve().warn("[okta-auth-sdk] DEPRECATION: "+t)}function Cl(t,e){return function(){return ei(t),e.apply(null,arguments)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Rl(t,e){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return r=n.concat(r),t.apply(e,r)}}function xl(){var t=arguments[0],e=[].slice.call(arguments,1);return e.forEach(function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&n[r]!==void 0&&(t[r]=n[r])}),t}function B(t){var e={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=t[n];r!=null&&(e[n]=r)}return e}function U(t){if(t){var e=JSON.stringify(t);if(e)return JSON.parse(e)}return t}function je(t,...e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)==-1&&(n[r]=t[r]);return U(n)}function Vt(t,e){for(var n=t.length;n--;){var r=t[n],s=!0;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&r[i]!==e[i]){s=!1;break}if(s)return r}}function Bt(t,e,n){if(!(!t||!t._links)){var r=U(t._links[e]);if(r&&r.name&&n){if(r.name===n)return r}else return r}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ae extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function be(t){return Object.prototype.toString.call(t)==="[object String]"}function Sr(t){return Object.prototype.toString.call(t)==="[object Object]"}function ti(t){return Object.prototype.toString.call(t)==="[object Number]"}function Or(t){return!!t&&{}.toString.call(t)==="[object Function]"}function ni(t){return t&&t.finally&&typeof t.finally=="function"}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class V extends Ae{constructor(e,n,r){var s;super((s=n.error)!==null&&s!==void 0?s:V.UNKNOWN_ERROR),this.name="WWWAuthError",this.resp=null,this.scheme=e,this.parameters=n,r&&(this.resp=r)}get error(){return this.parameters.error}get errorCode(){return this.error}get error_description(){return this.parameters.error_description}get errorDescription(){return this.error_description}get errorSummary(){return this.errorDescription}get realm(){return this.parameters.realm}static parseHeader(e){var n;if(!e)return null;const r=/(?:,|, )?([a-zA-Z0-9!#$%&'*+\-.^_`|~]+)=(?:"([a-zA-Z0-9!#$%&'*+\-.,^_`|~ /:]+)"|([a-zA-Z0-9!#$%&'*+\-.^_`|~/:]+))/g,s=e.indexOf(" "),i=e.slice(0,s),o=e.slice(s+1),a={};let c;for(;(c=r.exec(o))!==null;)a[c[1]]=(n=c[2])!==null&&n!==void 0?n:c[3];return new V(i,a)}static getWWWAuthenticateHeader(e={}){var n;return Or(e==null?void 0:e.get)?e.get("WWW-Authenticate"):(n=e["www-authenticate"])!==null&&n!==void 0?n:e["WWW-Authenticate"]}}V.UNKNOWN_ERROR="UNKNOWN_WWW_AUTH_ERROR";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function jl(t){var e=t.match(/\d+/g),n=Date.UTC(e[0],e[1]-1,e[2],e[3],e[4],e[5]),r=new Date(n);return r.toUTCString()}function _r(t){for(var e="abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n="",r=0,s=e.length;r<t;++r)n+=e[Math.floor(Math.random()*s)];return n}function Yn(t){return new Promise(function(e){setTimeout(e,t)})}function ri(t,e){const n=t.split(e);return[n[0],n.splice(1,n.length).join(e)]}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function pt(t){return/^[a-z][a-z0-9+.-]*:/i.test(t)}function si(t="",e){return pt(t)?t:(e=F(e),t[0]==="/"?`${e}${t}`:`${e}/${t}`)}function Ul(t="",e){return pt(t)&&(t=t.substring(e.length)),t[0]==="/"?t:`/${t}`}function Q(t){var e=[];if(t!==null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&t[n]!==void 0&&t[n]!==null&&e.push(n+"="+encodeURIComponent(t[n]));return e.length?"?"+e.join("&"):""}function F(t){if(t){var e=t.replace(/^\s+|\s+$/gm,"");return e=e.replace(/\/+$/,""),e}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class p extends Ae{constructor(e,n){super(e),this.name="AuthSdkError",this.errorCode="INTERNAL",this.errorSummary=e,this.errorLink="INTERNAL",this.errorId="INTERNAL",this.errorCauses=[],n&&(this.xhr=n)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function an(){return _r(64)}function ii(){return _r(64)}function cn(t,e={}){return F(e.issuer)||t.options.issuer}function kr(t,e={}){const n=cn(t,e);return n.indexOf("/oauth2")>0?n:n+"/oauth2"}function oi(t,e={}){return cn(t,e).split("/oauth2")[0]}function ne(t,e){if(arguments.length>2)throw new p('As of version 3.0, "getOAuthUrls" takes only a single set of options');e=e||{};var n=F(e.authorizeUrl)||t.options.authorizeUrl,r=cn(t,e),s=F(e.userinfoUrl)||t.options.userinfoUrl,i=F(e.tokenUrl)||t.options.tokenUrl,o=F(e.logoutUrl)||t.options.logoutUrl,a=F(e.revokeUrl)||t.options.revokeUrl,c=kr(t,e);return n=n||c+"/v1/authorize",s=s||c+"/v1/userinfo",i=i||c+"/v1/token",a=a||c+"/v1/revoke",o=o||c+"/v1/logout",{issuer:r,authorizeUrl:n,userinfoUrl:s,tokenUrl:i,revokeUrl:a,logoutUrl:o}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ar(t,e){const n=t.options.issuer,r=ne(t,e),s={issuer:n,urls:r,clientId:e.clientId,redirectUri:e.redirectUri,responseType:e.responseType,responseMode:e.responseMode,scopes:e.scopes,state:e.state,nonce:e.nonce,ignoreSignature:e.ignoreSignature,acrValues:e.acrValues,extraParams:e.extraParams};return e.pkce===!1?s:Object.assign(Object.assign({},s),{codeVerifier:e.codeVerifier,codeChallengeMethod:e.codeChallengeMethod,codeChallenge:e.codeChallenge})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ue="oktaStateToken",Er=500,Pr=3,Ir=300,Mr=86400,un="okta-token-storage",Cr="okta-cache-storage",ai="okta-pkce-storage",Rr="okta-transaction-storage",xr="okta-shared-transaction-storage",jr="okta-original-uri-storage",Ur="okta-idx-response-storage",ci="accessToken",ui="idToken",qt="refreshToken",st="referrerPath",Wt=43,Dr=128,ln="S256",dn="1.0.0",Xn=Object.freeze(Object.defineProperty({__proto__:null,ACCESS_TOKEN_STORAGE_KEY:ci,CACHE_STORAGE_NAME:Cr,DEFAULT_CACHE_DURATION:Mr,DEFAULT_CODE_CHALLENGE_METHOD:ln,DEFAULT_MAX_CLOCK_SKEW:Ir,DEFAULT_POLLING_DELAY:Er,IDX_API_VERSION:dn,IDX_RESPONSE_STORAGE_NAME:Ur,ID_TOKEN_STORAGE_KEY:ui,IOS_MAX_RETRY_COUNT:Pr,MAX_VERIFIER_LENGTH:Dr,MIN_VERIFIER_LENGTH:Wt,ORIGINAL_URI_STORAGE_NAME:jr,PKCE_STORAGE_NAME:ai,REFERRER_PATH_STORAGE_KEY:st,REFRESH_TOKEN_STORAGE_KEY:qt,SHARED_TRANSACTION_STORAGE_NAME:xr,STATE_TOKEN_KEY_NAME:Ue,TOKEN_STORAGE_NAME:un,TRANSACTION_STORAGE_NAME:Rr},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class de extends Ae{constructor(e,n,r){const s=e.errorSummary;super(s),this.name="AuthApiError",this.errorSummary=e.errorSummary,this.errorCode=e.errorCode,this.errorLink=e.errorLink,this.errorId=e.errorId,this.errorCauses=e.errorCauses,n&&(this.xhr=n),r&&(this.meta=r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Se extends Ae{constructor(e,n,r){super(n),this.resp=null,this.name="OAuthError",this.errorCode=e,this.errorSummary=n,this.error=e,this.error_description=n,r&&(this.resp=r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const hn=function(t){return atob(t)},te=function(t){return btoa(t)},j=typeof crypto>"u"?null:crypto;/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const li=/windows phone|iemobile|wpdesktop/i;function M(){return typeof document<"u"&&typeof window<"u"}function gt(){if(!M())return!1;const t=document.documentMode;return!!t&&t<=11}function Lr(){return navigator.userAgent}function Nr(){const t=Lr();return t&&!li.test(t)}function di(){if(!M())return!1;const t=document.documentMode;var e=t&&t<10;return typeof window.postMessage<"u"&&!e}function Fr(){return typeof j<"u"&&j!==null&&typeof j.subtle<"u"&&typeof Uint8Array<"u"}function Hr(){return Fr()}function fn(){return typeof TextEncoder<"u"}function hi(){return Hr()&&fn()}function Vr(){return M()?window.location.protocol==="https:":!1}function Br(){return M()&&window.location.hostname==="localhost"}function fi(){return!gt()&&typeof window.indexedDB<"u"&&fn()&&Fr()}function pi(){return M()&&typeof navigator<"u"&&typeof navigator.userAgent<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}const Dt=Object.freeze(Object.defineProperty({__proto__:null,getUserAgent:Lr,hasTextEncoder:fn,isBrowser:M,isDPoPSupported:fi,isFingerprintSupported:Nr,isHTTPS:Vr,isIE11OrLess:gt,isIOS:pi,isLocalhost:Br,isPKCESupported:hi,isPopupPostMessageSupported:di,isTokenVerifySupported:Hr},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */let Kt=0,Zn;M()&&(Kt=Date.now(),Zn=()=>{document.hidden||(Kt=Date.now())},document.addEventListener("visibilitychange",Zn));const gi=(t,e)=>{var n;if(e instanceof Error)return new de({errorSummary:e.message});let r=e,s,i={};if(r.responseText&&be(r.responseText))try{i=JSON.parse(r.responseText)}catch{i={errorSummary:"Unknown error"}}r.status>=500&&(i.errorSummary="Unknown error"),t.options.transformErrorXHR&&(r=t.options.transformErrorXHR(U(r)));const o=(n=V.getWWWAuthenticateHeader(r==null?void 0:r.headers))!==null&&n!==void 0?n:"";if(i.error&&i.error_description?s=new Se(i.error,i.error_description,r):s=new de(i,r,{wwwAuthHeader:o}),o&&(r==null?void 0:r.status)>=400&&(r==null?void 0:r.status)<500){const a=V.parseHeader(o);if(r.status===403&&(a==null?void 0:a.error)==="insufficient_authentication_context"){const{max_age:c,acr_values:u}=a.parameters;s=new de({errorSummary:a.error,errorCauses:[{errorSummary:a.errorDescription}]},r,Object.assign({max_age:+c},u&&{acr_values:u}))}else(a==null?void 0:a.scheme)==="DPoP"&&(s=a)}return s};function K(t,e){var n;if(e=e||{},t.options.httpRequestInterceptors)for(const I of t.options.httpRequestInterceptors)I(e);var r=e.url,s=e.method,i=e.args,o=e.saveAuthnState,a=e.accessToken,c=e.withCredentials===!0,u=t.options.storageUtil,l=u.storage,f=t.storageManager.getHttpCache(t.options.cookies),d=e.pollingIntent,g=(n=t.options.pollDelay)!==null&&n!==void 0?n:0;if(e.cacheResponse){var w=f.getStorage(),m=w[r];if(m&&Date.now()/1e3<m.expiresAt)return Promise.resolve(m.response)}var T=t._oktaUserAgent.getHttpHeader(),y=Object.assign({Accept:"application/json","Content-Type":"application/json"},T);Object.assign(y,t.options.headers,e.headers),y=B(y),a&&be(a)&&(y.Authorization="Bearer "+a);var k={headers:y,data:i||void 0,withCredentials:c},P,O,H;if(d&&M()&&g>0){let I,q,se,L=0;q=()=>{const N=Date.now()-Kt;return N<g?new Promise(C=>setTimeout(()=>{document.hidden?C(I()):C()},g-N)):Promise.resolve()},I=()=>{if(document.hidden){let N;return new Promise(C=>{N=()=>{document.hidden||(document.removeEventListener("visibilitychange",N),C(q()))},document.addEventListener("visibilitychange",N)})}else return q()};const xt=()=>t.options.httpRequestClient(s,r,k).catch(N=>{if((N==null?void 0:N.message)==="Load failed"&&L<Pr)return L++,se();throw N});se=()=>I().then(xt),H=se()}else H=t.options.httpRequestClient(s,r,k);return H.then(function(I){return O=I.responseText,O&&be(O)&&(O=JSON.parse(O),O&&typeof O=="object"&&!O.headers&&(Array.isArray(O)?O.forEach(q=>{q.headers=I.headers}):O.headers=I.headers)),o&&(O.stateToken||l.delete(Ue)),O&&O.stateToken&&O.expiresAt&&l.set(Ue,O.stateToken,O.expiresAt,t.options.cookies),O&&e.cacheResponse&&f.updateStorage(r,{expiresAt:Math.floor(Date.now()/1e3)+Mr,response:O}),O}).catch(function(I){throw P=gi(t,I),P.errorCode==="E0000011"&&l.delete(Ue),P})}function Oe(t,e,n){e=pt(e)?e:t.getIssuerOrigin()+e;var r={url:e,method:"GET"};return Object.assign(r,n),K(t,r)}function re(t,e,n,r){e=pt(e)?e:t.getIssuerOrigin()+e;var s={url:e,method:"POST",args:n,saveAuthnState:!0};return Object.assign(s,r),K(t,s)}var Qe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pn(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lt,er;function mi(){if(er)return Lt;er=1;function t(){}return t.prototype={on:function(e,n,r){var s=this.e||(this.e={});return(s[e]||(s[e]=[])).push({fn:n,ctx:r}),this},once:function(e,n,r){var s=this;function i(){s.off(e,i),n.apply(r,arguments)}return i._=n,this.on(e,i,r)},emit:function(e){var n=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),s=0,i=r.length;for(s;s<i;s++)r[s].fn.apply(r[s].ctx,n);return this},off:function(e,n){var r=this.e||(this.e={}),s=r[e],i=[];if(s&&n)for(var o=0,a=s.length;o<a;o++)s[o].fn!==n&&s[o].fn._!==n&&i.push(s[o]);return i.length?r[e]=i:delete r[e],this}},Lt=t,Lt}var vi=mi();const wi=pn(vi);/*! js-cookie v3.0.8 | MIT */function Ye(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)r!=="__proto__"&&(t[r]=n[r])}return t}var yi={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function $t(t,e){function n(s,i,o){if(!(typeof document>"u")){o=Ye({},e,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),s=encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var c in o)o[c]&&(a+="; "+c,o[c]!==!0&&(a+="="+o[c].split(";")[0]));return document.cookie=s+"="+t.write(i,s)+a}}function r(s){if(!(typeof document>"u"||arguments.length&&!s)){for(var i=document.cookie?document.cookie.split("; "):[],o={},a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");try{var l=decodeURIComponent(c[0]);if(l in o||(o[l]=t.read(u,l)),s===l)break}catch{}}return s?o[s]:o}}return Object.create({set:n,get:r,remove:function(s,i){n(s,"",Ye({},i,{expires:-1}))},withAttributes:function(s){return $t(this.converter,Ye({},this.attributes,s))},withConverter:function(s){return $t(Ye({},this.converter,s),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var Xe=$t(yi,{path:"/"}),Ze={exports:{}},tr;function Ti(){return tr||(tr=1,(function(t,e){var n=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof Qe<"u"&&Qe,r=(function(){function i(){this.fetch=!1,this.DOMException=n.DOMException}return i.prototype=n,new i})();(function(i){(function(o){var a=typeof i<"u"&&i||typeof self<"u"&&self||typeof Qe<"u"&&Qe||{},c={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&(function(){try{return new Blob,!0}catch{return!1}})(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function u(h){return h&&DataView.prototype.isPrototypeOf(h)}if(c.arrayBuffer)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(h){return h&&l.indexOf(Object.prototype.toString.call(h))>-1};function d(h){if(typeof h!="string"&&(h=String(h)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(h)||h==="")throw new TypeError('Invalid character in header field name: "'+h+'"');return h.toLowerCase()}function g(h){return typeof h!="string"&&(h=String(h)),h}function w(h){var v={next:function(){var b=h.shift();return{done:b===void 0,value:b}}};return c.iterable&&(v[Symbol.iterator]=function(){return v}),v}function m(h){this.map={},h instanceof m?h.forEach(function(v,b){this.append(b,v)},this):Array.isArray(h)?h.forEach(function(v){if(v.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+v.length);this.append(v[0],v[1])},this):h&&Object.getOwnPropertyNames(h).forEach(function(v){this.append(v,h[v])},this)}m.prototype.append=function(h,v){h=d(h),v=g(v);var b=this.map[h];this.map[h]=b?b+", "+v:v},m.prototype.delete=function(h){delete this.map[d(h)]},m.prototype.get=function(h){return h=d(h),this.has(h)?this.map[h]:null},m.prototype.has=function(h){return this.map.hasOwnProperty(d(h))},m.prototype.set=function(h,v){this.map[d(h)]=g(v)},m.prototype.forEach=function(h,v){for(var b in this.map)this.map.hasOwnProperty(b)&&h.call(v,this.map[b],b,this)},m.prototype.keys=function(){var h=[];return this.forEach(function(v,b){h.push(b)}),w(h)},m.prototype.values=function(){var h=[];return this.forEach(function(v){h.push(v)}),w(h)},m.prototype.entries=function(){var h=[];return this.forEach(function(v,b){h.push([b,v])}),w(h)},c.iterable&&(m.prototype[Symbol.iterator]=m.prototype.entries);function T(h){if(!h._noBody){if(h.bodyUsed)return Promise.reject(new TypeError("Already read"));h.bodyUsed=!0}}function y(h){return new Promise(function(v,b){h.onload=function(){v(h.result)},h.onerror=function(){b(h.error)}})}function k(h){var v=new FileReader,b=y(v);return v.readAsArrayBuffer(h),b}function P(h){var v=new FileReader,b=y(v),_=/charset=([A-Za-z0-9_-]+)/.exec(h.type),A=_?_[1]:"utf-8";return v.readAsText(h,A),b}function O(h){for(var v=new Uint8Array(h),b=new Array(v.length),_=0;_<v.length;_++)b[_]=String.fromCharCode(v[_]);return b.join("")}function H(h){if(h.slice)return h.slice(0);var v=new Uint8Array(h.byteLength);return v.set(new Uint8Array(h)),v.buffer}function I(){return this.bodyUsed=!1,this._initBody=function(h){this.bodyUsed=this.bodyUsed,this._bodyInit=h,h?typeof h=="string"?this._bodyText=h:c.blob&&Blob.prototype.isPrototypeOf(h)?this._bodyBlob=h:c.formData&&FormData.prototype.isPrototypeOf(h)?this._bodyFormData=h:c.searchParams&&URLSearchParams.prototype.isPrototypeOf(h)?this._bodyText=h.toString():c.arrayBuffer&&c.blob&&u(h)?(this._bodyArrayBuffer=H(h.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(h)||f(h))?this._bodyArrayBuffer=H(h):this._bodyText=h=Object.prototype.toString.call(h):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof h=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(h)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var h=T(this);if(h)return h;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var h=T(this);return h||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(c.blob)return this.blob().then(k);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var h=T(this);if(h)return h;if(this._bodyBlob)return P(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(O(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c.formData&&(this.formData=function(){return this.text().then(xt)}),this.json=function(){return this.text().then(JSON.parse)},this}var q=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function se(h){var v=h.toUpperCase();return q.indexOf(v)>-1?v:h}function L(h,v){if(!(this instanceof L))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v=v||{};var b=v.body;if(h instanceof L){if(h.bodyUsed)throw new TypeError("Already read");this.url=h.url,this.credentials=h.credentials,v.headers||(this.headers=new m(h.headers)),this.method=h.method,this.mode=h.mode,this.signal=h.signal,!b&&h._bodyInit!=null&&(b=h._bodyInit,h.bodyUsed=!0)}else this.url=String(h);if(this.credentials=v.credentials||this.credentials||"same-origin",(v.headers||!this.headers)&&(this.headers=new m(v.headers)),this.method=se(v.method||this.method||"GET"),this.mode=v.mode||this.mode||null,this.signal=v.signal||this.signal||(function(){if("AbortController"in a){var S=new AbortController;return S.signal}})(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&b)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(b),(this.method==="GET"||this.method==="HEAD")&&(v.cache==="no-store"||v.cache==="no-cache")){var _=/([?&])_=[^&]*/;if(_.test(this.url))this.url=this.url.replace(_,"$1_="+new Date().getTime());else{var A=/\?/;this.url+=(A.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}L.prototype.clone=function(){return new L(this,{body:this._bodyInit})};function xt(h){var v=new FormData;return h.trim().split("&").forEach(function(b){if(b){var _=b.split("="),A=_.shift().replace(/\+/g," "),S=_.join("=").replace(/\+/g," ");v.append(decodeURIComponent(A),decodeURIComponent(S))}}),v}function N(h){var v=new m,b=h.replace(/\r?\n[\t ]+/g," ");return b.split("\r").map(function(_){return _.indexOf(`
`)===0?_.substr(1,_.length):_}).forEach(function(_){var A=_.split(":"),S=A.shift().trim();if(S){var Je=A.join(":").trim();try{v.append(S,Je)}catch(Ut){console.warn("Response "+Ut.message)}}}),v}I.call(L.prototype);function C(h,v){if(!(this instanceof C))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(v||(v={}),this.type="default",this.status=v.status===void 0?200:v.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=v.statusText===void 0?"":""+v.statusText,this.headers=new m(v.headers),this.url=v.url||"",this._initBody(h)}I.call(C.prototype),C.prototype.clone=function(){return new C(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new m(this.headers),url:this.url})},C.error=function(){var h=new C(null,{status:200,statusText:""});return h.ok=!1,h.status=0,h.type="error",h};var Xs=[301,302,303,307,308];C.redirect=function(h,v){if(Xs.indexOf(v)===-1)throw new RangeError("Invalid status code");return new C(null,{status:v,headers:{location:h}})},o.DOMException=a.DOMException;try{new o.DOMException}catch{o.DOMException=function(v,b){this.message=v,this.name=b;var _=Error(v);this.stack=_.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function jt(h,v){return new Promise(function(b,_){var A=new L(h,v);if(A.signal&&A.signal.aborted)return _(new o.DOMException("Aborted","AbortError"));var S=new XMLHttpRequest;function Je(){S.abort()}S.onload=function(){var R={statusText:S.statusText,headers:N(S.getAllResponseHeaders()||"")};A.url.indexOf("file://")===0&&(S.status<200||S.status>599)?R.status=200:R.status=S.status,R.url="responseURL"in S?S.responseURL:R.headers.get("X-Request-URL");var ie="response"in S?S.response:S.responseText;setTimeout(function(){b(new C(ie,R))},0)},S.onerror=function(){setTimeout(function(){_(new TypeError("Network request failed"))},0)},S.ontimeout=function(){setTimeout(function(){_(new TypeError("Network request timed out"))},0)},S.onabort=function(){setTimeout(function(){_(new o.DOMException("Aborted","AbortError"))},0)};function Ut(R){try{return R===""&&a.location.href?a.location.href:R}catch{return R}}if(S.open(A.method,Ut(A.url),!0),A.credentials==="include"?S.withCredentials=!0:A.credentials==="omit"&&(S.withCredentials=!1),"responseType"in S&&(c.blob?S.responseType="blob":c.arrayBuffer&&(S.responseType="arraybuffer")),v&&typeof v.headers=="object"&&!(v.headers instanceof m||a.Headers&&v.headers instanceof a.Headers)){var Qn=[];Object.getOwnPropertyNames(v.headers).forEach(function(R){Qn.push(d(R)),S.setRequestHeader(R,g(v.headers[R]))}),A.headers.forEach(function(R,ie){Qn.indexOf(ie)===-1&&S.setRequestHeader(ie,R)})}else A.headers.forEach(function(R,ie){S.setRequestHeader(ie,R)});A.signal&&(A.signal.addEventListener("abort",Je),S.onreadystatechange=function(){S.readyState===4&&A.signal.removeEventListener("abort",Je)}),S.send(typeof A._bodyInit>"u"?null:A._bodyInit)})}return jt.polyfill=!0,a.fetch||(a.fetch=jt,a.Headers=m,a.Request=L,a.Response=C),o.Headers=m,o.Request=L,o.Response=C,o.fetch=jt,Object.defineProperty(o,"__esModule",{value:!0}),o})({})})(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var s=n.fetch?n:r;e=s.fetch,e.default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e})(Ze,Ze.exports)),Ze.exports}var bi=Ti();const Si=pn(bi);/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var zt;(function(t){t.ACCESS="accessToken",t.ID="idToken",t.REFRESH="refreshToken"})(zt||(zt={}));function Dl(t){return!!(t&&(t.accessToken||t.idToken||t.refreshToken)&&Array.isArray(t.scopes))}function z(t){return t&&t.accessToken}function ee(t){return t&&t.idToken}function ae(t){return t&&t.refreshToken}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ge(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function mt(t,e={}){const n=await t.token.prepareTokenParams(e),r=Ar(t,n);let{flow:s="default",withCredentials:i=!0,activationToken:o=void 0,recoveryToken:a=void 0,maxAge:c=void 0,acrValues:u=void 0}=Object.assign(Object.assign({},t.options),e);return Object.assign(Object.assign({},r),{flow:s,withCredentials:i,activationToken:o,recoveryToken:a,maxAge:c,acrValues:u})}function qr(t,e){const n=Y(t,e);return!!(n!=null&&n.interactionHandle)}function Y(t,e){e=B(e),e=Object.assign(Object.assign({},t.options),e);let n;try{n=t.transactionManager.load(e)}catch{}if(n){if(gn(n,e))return n;W("Saved transaction meta does not match the current configuration. This may indicate that two apps are sharing a storage key.")}}async function Wr(t,e){e=B(e),e=Object.assign(Object.assign({},t.options),e);const n=Y(t,e);return n||mt(t,e)}function vt(t,e){t.transactionManager.save(e,{muteWarning:!0})}function Kr(t){t.transactionManager.clear()}function gn(t,e={}){if(_i(t,e,["issuer","clientId","redirectUri","state","codeChallenge","codeChallengeMethod","activationToken","recoveryToken"])===!1)return!1;const{flow:r}=e;return Oi(t,r)!==!1}function Oi(t,e){return!(e&&e!=="default"&&e!=="proceed"&&e!==t.flow)}function _i(t,e,n){return!n.some(s=>{const i=e[s];if(i&&i!==t[s])return!0})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function nr(t){return{meta:t,interactionHandle:t.interactionHandle,state:t.state}}async function $r(t,e={}){e=B(e);let n=Y(t,e);if(n!=null&&n.interactionHandle)return nr(n);n=await mt(t,Object.assign(Object.assign({},n),e));const r=kr(t);let{clientId:s,redirectUri:i,state:o,scopes:a,withCredentials:c,codeChallenge:u,codeChallengeMethod:l,activationToken:f,recoveryToken:d,maxAge:g,acrValues:w,nonce:m}=n;const T=e.clientSecret||t.options.clientSecret;c=c??!0;const y=`${r}/v1/interact`,k=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({client_id:s,scope:a.join(" "),redirect_uri:i,code_challenge:u,code_challenge_method:l,state:o},f&&{activation_token:f}),d&&{recovery_token:d}),T&&{client_secret:T}),g&&{max_age:g}),w&&{acr_values:w}),m&&{nonce:m}),H=(await K(t,{method:"POST",url:y,headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:c,args:k})).interaction_handle,I=Object.assign(Object.assign({},n),{interactionHandle:H,withCredentials:c,state:o,scopes:a,recoveryToken:d,activationToken:f});return vt(t,I),nr(I)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const ki=function(e){return e.mutable!==!1},Ai=function(e){var n,r;const s={},i=[],o={};if(!e.value)return i.push(e),{defaultParamsForAction:s,neededParamsForAction:i,immutableParamsForAction:o};for(let a of e.value)ki(a)?(i.push(a),(n=a.value)!==null&&n!==void 0&&n&&(s[a.name]=a.value)):o[a.name]=(r=a.value)!==null&&r!==void 0?r:"";return{defaultParamsForAction:s,neededParamsForAction:i,immutableParamsForAction:o}},Ei=function(e){e=Array.isArray(e)?e:[e];const n=[],r={},s={};for(let i of e){const{defaultParamsForAction:o,neededParamsForAction:a,immutableParamsForAction:c}=Ai(i);n.push(a),r[i.name]=o,s[i.name]=c}return{defaultParams:r,neededParams:n,immutableParams:s}};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Pi=function(e,{actionDefinition:n,defaultParamsForAction:r={},immutableParamsForAction:s={},toPersist:i={}}){const o=n.href;return async function(a={}){var c,u;const l={"Content-Type":"application/json",Accept:n.accepts||"application/ion+json"},f=JSON.stringify(Object.assign(Object.assign(Object.assign({},r),a),s));try{const d={url:o,method:n.method,headers:l,args:f,withCredentials:(c=i==null?void 0:i.withCredentials)!==null&&c!==void 0?c:!0};(n.name==="poll"||((u=n.name)===null||u===void 0?void 0:u.endsWith("-poll")))&&(d.pollingIntent=!0);const w=await K(e,d);return e.idx.makeIdxResponse(Object.assign({},w),i,!0)}catch(d){if(!(d instanceof de)||!(d!=null&&d.xhr))throw d;const g=d.xhr,w=g.responseJSON||JSON.parse(g.responseText),m=g.headers["WWW-Authenticate"]||g.headers["www-authenticate"],T=e.idx.makeIdxResponse(Object.assign({},w),i,!1);return g.status===401&&m==='Oktadevicejwt realm="Okta Device"'&&(T.stepUp=!0),T}}},Gt=function(e,n,r){const s=Pi,{defaultParams:i,neededParams:o,immutableParams:a}=Ei(n),c=s(e,{actionDefinition:n,defaultParamsForAction:i[n.name],immutableParamsForAction:a[n.name],toPersist:r});return c.neededParams=o,c};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ii=function(e,n,r={}){return n.reduce((s,i)=>Object.assign(Object.assign({},s),{[i.name]:Gt(e,i,r)}),{})};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Mi=/\$?(?<step>\w+)|(?:\[(?<index>\d+)\])/g;function Ci({path:t,json:e}){var n,r,s;const i=[];let o;for(;(o=Mi.exec(t))!==null;){const u=(r=(n=o==null?void 0:o.groups)===null||n===void 0?void 0:n.step)!==null&&r!==void 0?r:(s=o==null?void 0:o.groups)===null||s===void 0?void 0:s.index;u&&i.push(u)}if(i.length<1)return;const a=i.pop();let c=e;for(const u of i)if(Object.prototype.hasOwnProperty.call(c,u)){if(typeof c[u]!="object")return;c=c[u]}return c[a]}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ri={remediation:!0,context:!0},xi=function(e,n,r={}){const s={},i={};return Object.keys(n).filter(o=>!Ri[o]).forEach(o=>{if(!(typeof n[o]=="object"&&!!n[o])){i[o]=n[o];return}if(n[o].rel){s[n[o].name]=Gt(e,n[o],r);return}const c=n[o],{value:u,type:l}=c,f=ge(c,["value","type"]);if(i[o]=Object.assign({type:l},f),l!=="object"){i[o].value=u;return}i[o].value={},Object.entries(u).forEach(([d,g])=>{g.rel?s[`${o}-${d.name||d}`]=Gt(e,g,r):i[o].value[d]=g})}),{context:i,actions:s}},zr=(t,e)=>{Object.keys(e).forEach(n=>{if(n==="relatesTo"){const r=Array.isArray(e[n])?e[n][0]:e[n];if(typeof r=="string"){const s=Ci({path:r,json:t});if(s){e[n]=s;return}else throw new p(`Cannot resolve relatesTo: ${r}`)}}Array.isArray(e[n])&&e[n].forEach(r=>zr(t,r))})},ji=(t,e,n)=>{if(e.rel){const s=Ii(t,[e],n)[e.name];return Object.assign(Object.assign({},e),{action:s})}return e},Ui=function(e,n,r={}){var s;const i=((s=n.remediation)===null||s===void 0?void 0:s.value)||[];i.forEach(u=>{var l;if(u.name==="launch-authenticator"&&((l=u==null?void 0:u.relatesTo)===null||l===void 0?void 0:l[0])==="authenticatorChallenge"&&!(n!=null&&n.authenticatorChallenge)){delete u.relatesTo;return}return zr(n,u)});const o=i.map(u=>ji(e,u,r)),{context:a,actions:c}=xi(e,n,r);return{remediations:o,context:a,actions:c}};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Di(t,e,n,r){var s,i,o;const a=e,{remediations:c,context:u,actions:l}=Ui(t,e,n),f=[...c],d=async function(m,T={}){const y=c.find(P=>P.name===m);return y?typeof y.action!="function"?Promise.reject(`Current remediation cannot make form submit action: [${m}]`):y.action(T):Promise.reject(`Unknown remediation choice: [${m}]`)},g=m=>m.name==="interaction_code",w=(o=(i=(s=a.successWithInteractionCode)===null||s===void 0?void 0:s.value)===null||i===void 0?void 0:i.find(g))===null||o===void 0?void 0:o.value;return{proceed:d,neededToProceed:f,actions:l,context:u,rawIdxState:a,interactionCode:w,toPersist:n,requestDidSucceed:r}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var Li={makeIdxState:Di};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Gr=function(e){switch(e){case"1.0.0":return Li;case void 0:case null:throw new Error("Api version is required");default:throw new Error(`Unknown api version: ${e}.  Use an exact semver version.`)}};function Jr(t){if(!t)throw new Error("version is required");if((t??"").replace(/[^0-9a-zA-Z._-]/,"")!==t||!t)throw new Error("invalid version supplied - version is required and uses semver syntax");Gr(t)}function mn(t,e,n,r){var s;const i=(s=e==null?void 0:e.version)!==null&&s!==void 0?s:dn;Jr(i);const{makeIdxState:o}=Gr(i);return o(t,e,n,r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Qr(t){return t&&t.version}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Yr(t){return t instanceof de}function Xr(t){return t instanceof Se}function Ni(t){return t instanceof V}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Jt(t,e={}){var n;let r,s;const i=t.transactionManager.loadIdxResponse(e);if(i&&(r=i.rawIdxResponse,s=i.requestDidSucceed),!r){const a=e.version||dn,c=oi(t),{interactionHandle:u,stateHandle:l}=e,f=(n=e.withCredentials)!==null&&n!==void 0?n:!0;try{s=!0,Jr(a);const d=`${c}/idp/idx/introspect`,g=l?{stateToken:l}:{interactionHandle:u},w={"Content-Type":`application/ion+json; okta-version=${a}`,Accept:`application/ion+json; okta-version=${a}`};r=await K(t,{method:"POST",url:d,headers:w,withCredentials:f,args:g})}catch(d){if(Yr(d)&&d.xhr&&Qr(d.xhr.responseJSON))r=d.xhr.responseJSON,s=!1;else throw d}}const{withCredentials:o}=e;return mn(t,r,{withCredentials:o},s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Fi(t){var e;return(e=t.value)===null||e===void 0?void 0:e.map(n=>n.name)}function Hi(t){var e;return(e=t.value)===null||e===void 0?void 0:e.reduce((n,r)=>(r.required&&n.push(r.name),n),[])}function et(t){return t.charAt(0).toUpperCase()+t.substring(1)}function wt(t){return t.value.find(({name:e})=>e==="authenticator")}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function rr(t){let e;if(dt(t))e=t;else if(typeof t=="string")e={key:t};else throw new Error("Invalid format for authenticator");return e}function we(t,e){return!t||!e?!1:t.id&&e.id?t.id===e.id:t.key&&e.key?t.key===e.key:!1}function Vi(t,e){let n;for(let r of t)if(n=e.find(({relatesTo:s})=>s.key&&s.key===r.key),n)break;return n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class D{constructor(e,n={},r={}){this.values=Object.assign({},n),this.options=Object.assign({},r),this.formatAuthenticators(),this.remediation=e}formatAuthenticators(){if(this.values.authenticators=this.values.authenticators||[],this.values.authenticators=this.values.authenticators.map(e=>rr(e)),this.values.authenticator){const e=rr(this.values.authenticator);this.values.authenticators.some(r=>we(e,r))||this.values.authenticators.push(e)}this.values.authenticatorsData=this.values.authenticators.reduce((e,n)=>(typeof n=="object"&&Object.keys(n).length>1&&e.push(n),e),this.values.authenticatorsData||[])}getName(){return this.remediation.name}canRemediate(e){return!Hi(this.remediation).find(s=>!this.hasData(s))}getData(e){if(!e)return Fi(this.remediation).reduce((s,i)=>(s[i]=this.getData(i),s),{});if(typeof this[`map${et(e)}`]=="function"){const n=this[`map${et(e)}`](this.remediation.value.find(({name:r})=>r===e));if(n)return n}if(this.map&&this.map[e]){const n=this.map[e];for(let r=0;r<n.length;r++){let s=this.values[n[r]];if(s)return s}}return this.values[e]}hasData(e){return!!this.getData(e)}getNextStep(e,n){const r=this.getName(),s=this.getInputs(),i=this.getAuthenticator(),o=i==null?void 0:i.type;return Object.assign(Object.assign({name:r,inputs:s},o&&{type:o}),i&&{authenticator:i})}getInputs(){const e=[];return(this.remediation.value||[]).forEach(r=>{let s,{name:i,type:o,visible:a,messages:c}=r;if(a!==!1){if(typeof this[`getInput${et(i)}`]=="function")s=this[`getInput${et(i)}`](r);else if(o!=="object"){let u;const l=(this.map?this.map[i]:null)||[];l.length===1?u=l[0]:u=l.find(f=>Object.keys(this.values).includes(f)),u&&(s=Object.assign(Object.assign({},r),{name:u}))}s||(s=r),Array.isArray(s)?s.forEach(u=>e.push(u)):(c&&(s.messages=c),e.push(s))}}),e}static getMessages(e){var n,r;if(e.value)return(r=(n=e.value[0])===null||n===void 0?void 0:n.form)===null||r===void 0?void 0:r.value.reduce((s,i)=>(i.messages&&(s=[...s,...i.messages.value]),s),[])}getValuesAfterProceed(){const e=this.remediation.value||[],n=this.getInputs(),r=[...e,...n];for(const s of r)delete this.values[s.name];return this.values}getAuthenticator(){var e,n;const r=(e=this.remediation.relatesTo)===null||e===void 0?void 0:e.value;if(!r)return;const s=wt(this.remediation);if(!s)return r;const i=s.form.value.find(({name:a})=>a==="id").value,o=(n=s.form.value.find(({name:a})=>a==="enrollmentId"))===null||n===void 0?void 0:n.value;return Object.assign(Object.assign({},r),{id:i,enrollmentId:o})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function it(t){if(Array.isArray(t))return t.map(n=>typeof n=="string"||typeof n=="number"||typeof n=="boolean"?n:it(n));const e={};for(const[n,r]of Object.entries(t))if(!(r===null||typeof r>"u"))if(typeof r=="object"){const s=Object.keys(r);if(["value","form"].includes(n)&&s.length===1&&["value","form"].includes(s[0])){const i=it(r);Object.entries(i).forEach(([o,a])=>{e[o]=a})}else e[n]=it(r)}else e[n]=r;return e}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class vn extends D{canRemediate(){return typeof this.remediation.action!="function"?!1:!!(this.remediation.name==="poll"||this.remediation.name.endsWith("-poll")||this.options.step)}getData(){return this.getInputs().reduce((n,{name:r})=>(n[r]=this.values[r],n),{})}getNextStep(e,n){const r=this.getName(),s=this.getInputs(),i=this.remediation,{href:o,method:a,rel:c,accepts:u,produces:l,value:f,action:d}=i,g=ge(i,["href","method","rel","accepts","produces","value","action"]);return d?Object.assign(Object.assign(Object.assign({},g),!!s.length&&{inputs:s}),{action:async w=>e.idx.proceed(Object.assign({step:r},w))}):Object.assign({},this.remediation)}getInputs(){return(this.remediation.value||[]).filter(({name:e})=>e!=="stateHandle").map(it).map(e=>(e.type=e.type||"string",e))}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const wn={remediators:{},getFlowSpecification:function(t,e="default"){return{remediators:{}}}};function Bi(t){Object.assign(wn,t)}function qi(t,e="default"){return wn.getFlowSpecification(t,e)}function ht(t){const{neededToProceed:e,interactionCode:n}=t;return!e.length&&!n}function Wi(t){return t.neededToProceed.some(({name:e})=>e==="skip")}function Ki(t){return Object.keys(t.actions).some(e=>e.includes("resend"))}function Qt(t){if(!(!t||!Array.isArray(t)))return t.reduce((e,n)=>{if(n.messages&&(e=[...e,...n.messages.value]),n.form){const r=Qt(n.form.value)||[];e=[...e,...r]}if(n.options){let r=[];n.options.forEach(i=>{!i.value||typeof i.value=="string"||(r=[...r,i.value])});const s=Qt(r)||[];e=[...e,...s]}return e},[])}function Zr(t,e){var n;let r=[];const{rawIdxState:s,neededToProceed:i}=t,o=(n=s.messages)===null||n===void 0?void 0:n.value.map(c=>c);if(o&&(r=[...r,...o]),!e.useGenericRemediator)for(let c of i){const u=Qt(c.value);u&&(r=[...r,...u])}const a={};return r=r.reduce((c,u)=>{var l;const f=(l=u.i18n)===null||l===void 0?void 0:l.key;return f&&a[f]&&u.message===a[f].message||(a[f]=u,c=[...c,u]),c},[]),r}function $i(t){const e=[],{actions:n,neededToProceed:r}=t;return n["currentAuthenticator-recover"]&&e.push(Z.PASSWORD_RECOVERY),r.some(({name:s})=>s==="select-enroll-profile")&&e.push(Z.REGISTRATION),r.some(({name:s})=>s==="redirect-idp")&&e.push(Z.SOCIAL_IDP),r.some(({name:s})=>s==="unlock-account")&&e.push(Z.ACCOUNT_UNLOCK),e}function zi(t,e,n){var r;const s=[],i=Object.values(wn.remediators).reduce((o,a)=>(a.remediationName&&(o[a.remediationName]=a),o),{});for(let o of e.neededToProceed){const a=Yt(o,{useGenericRemediator:n,remediators:i});if(a){const c=new a(o);s.push(c.getNextStep(t,e.context))}}for(const[o]of Object.entries(e.actions||{})){let a={name:o,action:async c=>t.idx.proceed({actions:[{name:o,params:c}]})};if(o.startsWith("currentAuthenticator")){const[c,u]=ri(o,"-"),l=e.rawIdxState[c].value[u],f=ge(l,["href","method","rel","accepts","produces"]),d=(r=l.value)===null||r===void 0?void 0:r.filter(g=>g.name!=="stateHandle");a=Object.assign(Object.assign(Object.assign({},f),d&&{value:d}),a)}s.push(a)}return s}function Gi(t,e,n){const s=(t.neededToProceed||[]).find(o=>o.name===e);return s?s.value.reduce((o,a)=>{const{name:c,value:u}=a;return c==="stateHandle"?o[c]=u:o[c]=n[c],o},{}):(W(`filterValuesForRemediation: "${e}" did not match any remediations`),n)}function Yt(t,e){const{useGenericRemediator:n,remediators:r}=e;if(t)return n?vn:r[t.name]}function Xt(t,e,n){const r=n.remediators,s=n.useGenericRemediator,{neededToProceed:i,context:o}=t;let a;if(n.step){const u=i.find(({name:l})=>l===n.step);if(u){const l=Yt(u,n);return l?new l(u,e,n):void 0}else{W(`step "${n.step}" did not match any remediations`);return}}const c=[];if(s)c.push(new vn(i[0],e,n));else for(let u of i){if(!Object.keys(r).includes(u.name))continue;const f=Yt(u,n);if(a=new f(u,e,n),a.canRemediate(o))return a;c.push(a)}return c[0]}function Zt(t,e,n){const r=e.getNextStep(t,n.context),s=Wi(n),i=Ki(n);return Object.assign(Object.assign(Object.assign({},r),s&&{canSkip:s}),i&&{canResend:i})}function tt(t,e,n={}){const r=ht(e),s=Zr(e,n);if(r)return{idxResponse:e,terminal:r,messages:s};{const i=Xt(e,{},n),o=i&&Zt(t,i,e);return Object.assign({idxResponse:e,messages:s},o&&{nextStep:o})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ji(t,e){return Object.keys(e.actions).find(n=>!!t.resend&&n.includes("-resend"))}function Qi(t){return Object.assign(Object.assign({},t),{resend:void 0})}function Yi(t,e){let n=t.actions||[];return n=n.filter(r=>typeof r=="string"?r!==e:r.name!==e),Object.assign(Object.assign({},t),{actions:n})}async function ot(t,e,n,r){let{neededToProceed:s,interactionCode:i}=e;const{flow:o}=r;if(i)return{idxResponse:e};const a=Xt(e,n,r),c=Ji(n,e),l=[...r.actions||[],...c&&[c]||[]];if(l)for(let w of l){let m={};typeof w!="string"&&(m=w.params||{},w=w.name);let T=Qi(n),y=Yi(r,w);if(typeof e.actions[w]=="function")return e=await e.actions[w](m),e.requestDidSucceed===!1?tt(t,e,r):w==="cancel"?{idxResponse:e,canceled:!0}:ot(t,e,T,y);if(s.find(({name:P})=>P===w))return e=await e.proceed(w,m),e.requestDidSucceed===!1?tt(t,e,r):ot(t,e,n,y)}const f=ht(e);if(f)return{idxResponse:e,terminal:f};if(!a){if(r.step)return n=Gi(e,r.step,n),e=await e.proceed(r.step,n),e.requestDidSucceed===!1?tt(t,e,r):{idxResponse:e};if(o==="default")return{idxResponse:e};throw new p(`
      No remediation can match current flow, check policy settings in your org.
      Remediations: [${s.reduce((w,m)=>w?w+" ,"+m.name:m.name,"")}]
    `)}if(!a.canRemediate()){const w=Zt(t,a,e);return{idxResponse:e,nextStep:w}}const d=a.getName(),g=a.getData();if(e=await e.proceed(d,g),e.requestDidSucceed===!1)return tt(t,e,r);if(n=a.getValuesAfterProceed(),r=Object.assign(Object.assign({},r),{step:void 0}),r.useGenericRemediator&&!e.interactionCode&&!ht(e)){const w=Xt(e,n,r),m=Zt(t,w,e);return{idxResponse:e,nextStep:m}}return ot(t,e,n,r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Xi(t){const e=["flow","remediators","actions","withCredentials","step","useGenericRemediator","exchangeCodeForTokens"],n=Object.assign({},t);return e.forEach(r=>{delete n[r]}),n}function Zi(t,e){var n,r,s,i;let{options:o}=e;o=Object.assign(Object.assign({},t.options.idx),o);let{flow:a,withCredentials:c,remediators:u,actions:l}=o;const f=oe.PENDING;if(a=a||((r=(n=t.idx).getFlow)===null||r===void 0?void 0:r.call(n))||"default",a){(i=(s=t.idx).setFlow)===null||i===void 0||i.call(s,a);const d=qi(t,a);c=typeof c<"u"?c:d.withCredentials,u=u||d.remediators,l=l||d.actions}return Object.assign(Object.assign({},e),{options:Object.assign(Object.assign({},o),{flow:a,withCredentials:c,remediators:u,actions:l}),status:f})}async function eo(t,e){const{options:n}=e,{stateHandle:r,withCredentials:s,version:i,state:o,scopes:a,recoveryToken:c,activationToken:u,maxAge:l,acrValues:f,nonce:d,useGenericRemediator:g}=n;let w,m=Y(t,{state:o,recoveryToken:c,activationToken:u});if(r)w=await Jt(t,{withCredentials:s,version:i,stateHandle:r,useGenericRemediator:g});else{let T=m==null?void 0:m.interactionHandle;if(!T){t.transactionManager.clear();const y=await $r(t,{withCredentials:s,state:o,scopes:a,activationToken:u,recoveryToken:c,maxAge:l,acrValues:f,nonce:d});T=y.interactionHandle,m=y.meta}w=await Jt(t,{withCredentials:s,version:i,interactionHandle:T,useGenericRemediator:g})}return Object.assign(Object.assign({},e),{idxResponse:w,meta:m})}async function to(t,e){let{idxResponse:n,options:r,values:s}=e;const{autoRemediate:i,remediators:o,actions:a,flow:c,step:u,useGenericRemediator:l}=r;if(!(i!==!1&&(o||a||u)))return e;s=Object.assign(Object.assign({},s),{stateHandle:n.rawIdxState.stateHandle});const{idxResponse:d,nextStep:g,canceled:w}=await ot(t,n,s,{remediators:o,actions:a,flow:c,step:u,useGenericRemediator:l});return n=d,Object.assign(Object.assign({},e),{idxResponse:n,nextStep:g,canceled:w})}async function no(t,e){let{meta:n,idxResponse:r}=e;const{interactionCode:s}=r,{clientId:i,codeVerifier:o,ignoreSignature:a,redirectUri:c,urls:u,scopes:l}=n;return(await t.token.exchangeCodeForTokens({interactionCode:s,clientId:i,codeVerifier:o,ignoreSignature:a,redirectUri:c,scopes:l},u)).tokens}async function ro(t,e){let{options:n,idxResponse:r,canceled:s,status:i}=e;const{exchangeCodeForTokens:o}=n;let a=!1,c=!1,u=!0,l,f,d,g,w,m;if(r&&(a=!!(r.requestDidSucceed||r.stepUp),d=$i(r),g=zi(t,r,n.useGenericRemediator),w=Zr(r,n),m=ht(r)),m){i=oe.TERMINAL;const T=Object.keys(r.actions).length>0,y=!!w.find(P=>P.class==="ERROR");!T&&!y&&r.requestDidSucceed===!0?c=!0:a=!!T,u=!1}else s?(i=oe.CANCELED,c=!0):r!=null&&r.interactionCode&&(l=r.interactionCode,o===!1?(i=oe.SUCCESS,c=!1):(f=await no(t,e),i=oe.SUCCESS,c=!0));return Object.assign(Object.assign({},e),{status:i,interactionCode:l,tokens:f,shouldSaveResponse:a,shouldClearTransaction:c,clearSharedStorage:u,enabledFeatures:d,availableSteps:g,messages:w,terminal:m})}async function me(t,e={}){var n;let r={options:e,values:Xi(e)};r=Zi(t,r),r=await eo(t,r),r=await to(t,r),r=await ro(t,r);const{idxResponse:s,meta:i,shouldSaveResponse:o,shouldClearTransaction:a,clearSharedStorage:c,status:u,enabledFeatures:l,availableSteps:f,tokens:d,nextStep:g,messages:w,error:m,interactionCode:T}=r;if(a)t.transactionManager.clear({clearSharedStorage:c});else if(vt(t,Object.assign({},i)),o){const{rawIdxState:se,requestDidSucceed:L}=s;t.transactionManager.saveIdxResponse({rawIdxResponse:se,requestDidSucceed:L,stateHandle:(n=s.context)===null||n===void 0?void 0:n.stateHandle,interactionHandle:i==null?void 0:i.interactionHandle})}const{actions:y,context:k,neededToProceed:P,proceed:O,rawIdxState:H,requestDidSucceed:I,stepUp:q}=s||{};return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({status:u},i&&{meta:i}),l&&{enabledFeatures:l}),f&&{availableSteps:f}),d&&{tokens:d}),g&&{nextStep:g}),w&&w.length&&{messages:w}),m&&{error:m}),q&&{stepUp:q}),{interactionCode:T,actions:y,context:k,neededToProceed:P,proceed:O,rawIdxState:H,requestDidSucceed:I})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function so(t,e={}){return e.password&&!e.authenticator&&(e.authenticator=$.OKTA_PASSWORD),me(t,Object.assign(Object.assign({},e),{flow:"authenticate"}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ee{constructor(e){this.meta=e}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class es extends Ee{canVerify(e){return!!(e.credentials||e.verificationCode||e.otp)}mapCredentials(e){const{credentials:n,verificationCode:r,otp:s}=e;if(!(!n&&!r&&!s))return n||{passcode:r||s}}getInputs(e){var n;return Object.assign(Object.assign({},(n=e.form)===null||n===void 0?void 0:n.value[0]),{name:"verificationCode",type:"string",required:e.required})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class io extends es{mapCredentials(e){const{verificationCode:n}=e;if(n)return{totp:n}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class ts extends Ee{canVerify(e){return!!(e.credentials||e.password||e.passcode)}mapCredentials(e){const{credentials:n,password:r,passcode:s,revokeSessions:i}=e;if(!(!n&&!r&&!s))return n||{passcode:s||r,revokeSessions:i}}getInputs(e){var n,r;const s=[Object.assign(Object.assign({},(n=e.form)===null||n===void 0?void 0:n.value[0]),{name:"password",type:"string",required:e.required})];return((r=e.form)===null||r===void 0?void 0:r.value.find(o=>o.name==="revokeSessions"))&&s.push({name:"revokeSessions",type:"boolean",label:"Sign me out of all other devices",required:!1}),s}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class oo extends Ee{canVerify(e){const{credentials:n}=e;if(n&&n.questionKey&&n.answer)return!0;const{questionKey:r,question:s,answer:i}=e;return!!(r&&i)||!!(s&&i)}mapCredentials(e){const{questionKey:n,question:r,answer:s}=e;if(!(!s||!n&&!r))return{questionKey:r?"custom":n,question:r,answer:s}}getInputs(){return[{name:"questionKey",type:"string",required:!0},{name:"question",type:"string",label:"Create a security question"},{name:"answer",type:"string",label:"Answer",required:!0}]}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class ao extends Ee{canVerify(e){const{credentials:n}=e;if(n&&n.answer)return!0;const{answer:r}=e;return!!r}mapCredentials(e){const{answer:n}=e;if(n)return{questionKey:this.meta.contextualData.enrolledQuestion.questionKey,answer:n}}getInputs(){return[{name:"answer",type:"string",label:"Answer",required:!0}]}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class co extends Ee{canVerify(e){const{credentials:n}=e,r=n||e,{clientData:s,attestation:i}=r;return!!(s&&i)}mapCredentials(e){const{credentials:n,clientData:r,attestation:s,transports:i}=e;if(!(!n&&!r&&!s))return n||Object.assign({clientData:r,attestation:s},i&&{transports:i})}getInputs(){return[{name:"clientData",type:"string",required:!0,visible:!1,label:"Client Data"},{name:"attestation",type:"string",required:!0,visible:!1,label:"Attestation"}]}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class uo extends Ee{canVerify(e){const{credentials:n}=e,r=n||e,{clientData:s,authenticatorData:i,signatureData:o}=r;return!!(s&&i&&o)}mapCredentials(e){const{credentials:n,authenticatorData:r,clientData:s,signatureData:i}=e;if(!(!n&&!r&&!s&&!i))return n||{authenticatorData:r,clientData:s,signatureData:i}}getInputs(){return[{name:"authenticatorData",type:"string",label:"Authenticator Data",required:!0,visible:!1},{name:"clientData",type:"string",label:"Client Data",required:!0,visible:!1},{name:"signatureData",type:"string",label:"Signature Data",required:!0,visible:!1}]}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function lo(t){var e,n;const r=t.relatesTo,s=(r==null?void 0:r.value)||{};switch(s.key){case $.OKTA_PASSWORD:return new ts(s);case $.SECURITY_QUESTION:return!((e=s.contextualData)===null||e===void 0)&&e.enrolledQuestion?new ao(s):new oo(s);case $.OKTA_VERIFY:return new io(s);case $.WEBAUTHN:return!((n=s.contextualData)===null||n===void 0)&&n.challengeData?new uo(s):new co(s);default:return new es(s)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class yn extends D{constructor(e,n={}){super(e,n),this.authenticator=lo(e)}getNextStep(e,n){var r;const s=super.getNextStep(e,n),i=(r=n==null?void 0:n.authenticatorEnrollments)===null||r===void 0?void 0:r.value;return Object.assign(Object.assign({},s),{authenticatorEnrollments:i})}canRemediate(){return this.authenticator.canVerify(this.values)}mapCredentials(){return this.authenticator.mapCredentials(this.values)}getInputCredentials(e){return this.authenticator.getInputs(e)}getValuesAfterProceed(){return this.values=super.getValuesAfterProceed(),Object.keys(this.values).filter(n=>n!=="credentials").reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:this.values[r]}),{})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class yt extends yn{}yt.remediationName="enroll-authenticator";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Pe extends D{canRemediate(){return!!this.values.startPolling||this.options.step==="enroll-poll"}getNextStep(e,n){const r=super.getNextStep(e,n);let s=this.getAuthenticator();return!s&&(n!=null&&n.currentAuthenticator)&&(s=n.currentAuthenticator.value),Object.assign(Object.assign({},r),{authenticator:s,poll:{required:!0,refresh:this.remediation.refresh}})}getValuesAfterProceed(){return Object.keys(this.values).filter(n=>n!=="startPolling").reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:this.values[r]}),{})}}Pe.remediationName="enroll-poll";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Tt extends D{canRemediate(){if(this.values.channel)return!0;if(this.values.authenticator){const{id:e,channel:n}=this.values.authenticator;if(e&&n)return!0}return!1}getNextStep(e,n){const r=super.getNextStep(e,n),s=n.currentAuthenticator.value;return Object.assign(Object.assign({},r),{authenticator:s})}getData(){var e;return{authenticator:{id:this.remediation.value[0].value.form.value[0].value,channel:((e=this.values.authenticator)===null||e===void 0?void 0:e.channel)||this.values.channel},stateHandle:this.values.stateHandle}}getValuesAfterProceed(){this.values=super.getValuesAfterProceed(),delete this.values.authenticators;const e=this.values.channel?"channel":"authenticator";return Object.keys(this.values).filter(r=>r!==e).reduce((r,s)=>Object.assign(Object.assign({},r),{[s]:this.values[s]}),{})}}Tt.remediationName="select-enrollment-channel";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class bt extends D{getInputEmail(){return[{name:"email",type:"string",required:!0,label:"Email"}]}getInputPhoneNumber(){return[{name:"phoneNumber",type:"string",required:!0,label:"Phone Number"}]}canRemediate(){return!!(this.values.email||this.values.phoneNumber)}getNextStep(e,n){const r=super.getNextStep(e,n),s=n.currentAuthenticator.value;return Object.assign(Object.assign({},r),{authenticator:s})}getData(){return{stateHandle:this.values.stateHandle,email:this.values.email,phoneNumber:this.values.phoneNumber}}getValuesAfterProceed(){return Object.keys(this.values).filter(n=>!["email","phoneNumber"].includes(n)).reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:this.values[r]}),{})}}bt.remediationName="enrollment-channel-data";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ie extends yn{}Ie.remediationName="challenge-authenticator";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class He extends Pe{canRemediate(){return!!this.values.startPolling||this.options.step==="challenge-poll"}}He.remediationName="challenge-poll";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Tn extends yn{}Tn.remediationName="reset-authenticator";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class bn extends D{constructor(e,n={},r={}){super(e,n,r),this.authenticator=null,this.getCredentialsFromRemediation()&&(this.authenticator=this.authenticator=new ts({}))}canRemediate(){if(this.authenticator&&!this.authenticator.canVerify(this.values))return!1;const e=this.getData().userProfile;return e?this.remediation.value.find(({name:r})=>r==="userProfile").form.value.reduce((r,s)=>(s.required&&(r=r&&!!e[s.name]),r),!0):!1}getCredentialsFromRemediation(){return this.remediation.value.find(({name:e})=>e==="credentials")}mapUserProfile({form:{value:e}}){const r=e.map(({name:s})=>s).reduce((s,i)=>this.values[i]?Object.assign(Object.assign({},s),{[i]:this.values[i]}):s,{});if(Object.keys(r).length!==0)return r}mapCredentials(){const e=this.authenticator&&this.authenticator.mapCredentials(this.values);if(e)return e}getInputUserProfile(e){return[...e.form.value]}getInputCredentials(e){return[...e.form.value]}getErrorMessages(e){return e.value[0].form.value.reduce((n,r)=>(r.messages&&n.push(r.messages.value[0].message),n),[])}}bn.remediationName="enroll-profile";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class _e extends D{constructor(){super(...arguments),this.map={identifier:["username"]}}canRemediate(){const{identifier:e}=this.getData();return!!e}mapCredentials(){const{credentials:e,password:n}=this.values;if(!(!e&&!n))return e||{passcode:n}}getInputCredentials(e){return Object.assign(Object.assign({},e.form.value[0]),{name:"password",required:e.required})}}_e.remediationName="identify";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ve extends D{mapCredentials(){const{newPassword:e}=this.values;if(e)return{passcode:e}}getInputCredentials(e){const r=this.getAuthenticator().type==="password"?"newPassword":"verificationCode";return Object.assign(Object.assign({},e.form.value[0]),{name:r})}}Ve.remediationName="reenroll-authenticator";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Be extends Ve{}Be.remediationName="reenroll-authenticator-warning";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Sn extends D{canRemediate(){return!1}getNextStep(){const{name:e,type:n,idp:r,href:s}=this.remediation;return{name:e,type:n,idp:r,href:s}}}Sn.remediationName="redirect-idp";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class On extends D{findMatchedOption(e,n){let r;for(let s of e)if(r=n.find(({relatesTo:i})=>i.key&&i.key===s.key),r)break;return r}canRemediate(e){var n,r;const{authenticators:s,authenticator:i}=this.values,o=wt(this.remediation),{options:a}=o;if(!s||!s.length)return!1;if(dt(i)&&i.id)return!0;const c=this.findMatchedOption(s,a);if(c){const u=(e==null?void 0:e.currentAuthenticator)&&(e==null?void 0:e.currentAuthenticator.value.id)===((n=c.relatesTo)===null||n===void 0?void 0:n.id),l=(e==null?void 0:e.currentAuthenticatorEnrollment)&&(e==null?void 0:e.currentAuthenticatorEnrollment.value.id)===((r=c.relatesTo)===null||r===void 0?void 0:r.id);return!u&&!l}return!1}mapAuthenticator(e){const{authenticators:n,authenticator:r}=this.values;if(dt(r)&&r.id)return this.selectedAuthenticator=r,r;const{options:s}=e,i=Vi(n,s);return this.selectedAuthenticator=i.relatesTo,this.selectedOption=i,{id:i==null?void 0:i.value.form.value.find(({name:o})=>o==="id").value}}getInputAuthenticator(e){return{name:"authenticator",type:"string",options:e.options.map(({label:r,relatesTo:s})=>({label:r,value:s.key}))}}getValuesAfterProceed(){this.values=super.getValuesAfterProceed();const e=this.values.authenticators.filter(n=>we(n,this.selectedAuthenticator)!==!0);return Object.assign(Object.assign({},this.values),{authenticators:e})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Me extends On{constructor(e,n={},r={}){var s;super(e,n,r);const i=this.options.flow==="recoverPassword";((s=wt(e).options)===null||s===void 0?void 0:s.some(({relatesTo:a})=>(a==null?void 0:a.key)===$.OKTA_PASSWORD))&&(i||this.values.password)&&(this.values.authenticators=[...this.values.authenticators||[],{key:$.OKTA_PASSWORD}])}}Me.remediationName="select-authenticator-authenticate";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class qe extends On{}qe.remediationName="select-authenticator-enroll";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class _n extends On{constructor(){super(...arguments),this.map={identifier:["username"]}}canRemediate(){return!!this.getData("identifier")&&super.canRemediate()}mapAuthenticator(e){var n,r,s;const i=super.mapAuthenticator(e),o=(n=this.selectedOption)===null||n===void 0?void 0:n.value.form.value.find(({name:c})=>c==="methodType"),a=this.values.methodType||(o==null?void 0:o.value)||((s=(r=o==null?void 0:o.options)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.value);return a?Object.assign(Object.assign({},i),{methodType:a}):i}getInputUsername(){return{name:"username",type:"string"}}}_n.remediationName="select-authenticator-unlock-account";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class kn extends D{canRemediate(){return!0}}kn.remediationName="select-enroll-profile";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class ns extends D{constructor(e,n={}){super(e,n),this.authenticator=this.getAuthenticator(),this.formatAuthenticatorData()}formatAuthenticatorData(){if(this.getAuthenticatorData())this.values.authenticatorsData=this.values.authenticatorsData.map(n=>we(this.authenticator,n)?this.mapAuthenticatorDataFromValues(n):n);else{const n=this.mapAuthenticatorDataFromValues();n&&this.values.authenticatorsData.push(n)}}getAuthenticatorData(){return this.values.authenticatorsData.find(e=>we(this.authenticator,e))}canRemediate(){return this.values.authenticatorsData.some(e=>we(this.authenticator,e))}mapAuthenticatorDataFromValues(e){let{methodType:n,authenticator:r}=this.values;!n&&dt(r)&&(n=r==null?void 0:r.methodType);const{id:s,enrollmentId:i}=this.authenticator,o=Object.assign(Object.assign({id:s,enrollmentId:i},e&&e),n&&{methodType:n});return o.methodType?o:null}getAuthenticatorFromRemediation(){return this.remediation.value.find(({name:n})=>n==="authenticator")}getValuesAfterProceed(){this.values=super.getValuesAfterProceed();const e=this.values.authenticatorsData.filter(n=>we(this.authenticator,n)!==!0);return Object.assign(Object.assign({},this.values),{authenticatorsData:e})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ce extends ns{mapAuthenticator(){return this.getAuthenticatorData()}getInputAuthenticator(){const e=this.getAuthenticatorFromRemediation(),n=e.form.value.find(({name:s})=>s==="methodType");return n&&n.options?{name:"methodType",type:"string",required:!0,options:n.options}:[...e.form.value]}getValuesAfterProceed(){return this.values=super.getValuesAfterProceed(),Object.keys(this.values).filter(n=>n!=="authenticator").reduce((n,r)=>Object.assign(Object.assign({},n),{[r]:this.values[r]}),{})}}Ce.remediationName="authenticator-verification-data";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class We extends ns{mapAuthenticator(){const e=this.getAuthenticatorData();return{id:wt(this.remediation).form.value.find(({name:r})=>r==="id").value,methodType:e.methodType,phoneNumber:e.phoneNumber}}getInputAuthenticator(e){return[{name:"methodType",type:"string"},{name:"phoneNumber",label:"Phone Number",type:"string"}].map(n=>{const r=e.form.value.find(s=>s.name===n.name);return Object.assign(Object.assign({},r),n)})}mapAuthenticatorDataFromValues(e){e=super.mapAuthenticatorDataFromValues(e);const{phoneNumber:n}=this.values;if(!(!e&&!n))return Object.assign(Object.assign({},e&&e),n&&{phoneNumber:n})}}We.remediationName="authenticator-enrollment-data";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class St extends D{canRemediate(){return!!this.values.skip||this.options.step==="skip"}}St.remediationName="skip";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const sr={identify:_e,"select-authenticator-authenticate":Me,"select-authenticator-enroll":qe,"authenticator-enrollment-data":We,"authenticator-verification-data":Ce,"enroll-authenticator":yt,"challenge-authenticator":Ie,"challenge-poll":He,"reenroll-authenticator":Ve,"reenroll-authenticator-warning":Be,"enroll-poll":Pe,"select-enrollment-channel":Tt,"enrollment-channel-data":bt,"redirect-idp":Sn,skip:St};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const ho={identify:_e,"identify-recovery":_e,"select-authenticator-authenticate":Me,"select-authenticator-enroll":qe,"challenge-authenticator":Ie,"authenticator-verification-data":Ce,"authenticator-enrollment-data":We,"reset-authenticator":Tn,"reenroll-authenticator":Ve,"reenroll-authenticator-warning":Be,"enroll-poll":Pe};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const fo={"select-enroll-profile":kn,"enroll-profile":bn,"authenticator-enrollment-data":We,"select-authenticator-enroll":qe,"select-authenticator-authenticate":Me,"enroll-poll":Pe,"select-enrollment-channel":Tt,"enrollment-channel-data":bt,"enroll-authenticator":yt,"authenticator-verification-data":Ce,"challenge-authenticator":Ie,"challenge-poll":He,skip:St};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const po={identify:_e,"select-authenticator-unlock-account":_n,"select-authenticator-authenticate":Me,"challenge-authenticator":Ie,"challenge-poll":He,"authenticator-verification-data":Ce,"reenroll-authenticator-warning":Be};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function An(t,e="default"){let n,r,s=!0;switch(e){case"register":case"signup":case"enrollProfile":n=fo,s=!1;break;case"recoverPassword":case"resetPassword":n=ho,r=["currentAuthenticator-recover","currentAuthenticatorEnrollment-recover"],s=!1;break;case"unlockAccount":n=po,s=!1,r=["unlock-account"];break;case"authenticate":case"login":case"signin":n=sr;break;default:n=sr;break}return{flow:e,remediators:n,actions:r,withCredentials:s}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function go(t,e){const n=t.transactionManager.load(),r=An(t,n.flow);return me(t,Object.assign(Object.assign(Object.assign({},e),r),{actions:["cancel"]}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function rs(t){var e=/\+/g,n=/([^&=]+)=?([^&]*)/g,r=t||"";r.charAt(0)==="#"&&r.charAt(1)==="/"&&(r=r.substring(2)),(r.charAt(0)==="#"||r.charAt(0)==="?")&&(r=r.substring(1));for(var s={},i;i=n.exec(r),!!i;){var o=i[1],a=i[2];o==="id_token"||o==="access_token"||o==="code"?s[o]=a:s[o]=decodeURIComponent(a.replace(e," "))}return s}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class mo extends Ae{constructor(e,n){super(`Enter the OTP code in the originating client: ${n}`),this.name="EmailVerifyCallbackError",this.state=e,this.otp=n}}function vo(t){return t.name==="EmailVerifyCallbackError"}function ss(t){return/(otp=)/i.test(t)&&/(state=)/i.test(t)}function is(t){return rs(t)}async function wo(t,e){if(ss(e)){const{state:n,otp:r}=is(e);if(t.idx.canProceed({state:n}))return await t.idx.proceed({state:n,otp:r});throw new mo(n,r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function En(t,e={}){return!!(Y(t,e)||e.stateHandle)}async function Pn(t,e={}){if(!En(t,e))throw new p("Unable to proceed: saved transaction could not be loaded");let{flow:n,state:r}=e;if(!n){const s=Y(t,{state:r});n=s==null?void 0:s.flow}return me(t,Object.assign(Object.assign({},e),{flow:n}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function os(t,e={}){var n;const{withCredentials:r,exchangeCodeForTokens:s}=e;let i=await Pn(t,{startPolling:!0,withCredentials:r,exchangeCodeForTokens:s});const o=Y(t);let a=(n=o==null?void 0:o.remediations)===null||n===void 0?void 0:n.find(c=>c.includes("poll"));return a!=null&&a.length||W("No polling remediations available at the current IDX flow stage"),Number.isInteger(e.refresh)?new Promise(function(c,u){setTimeout(async function(){var l,f;try{const d=(f=(l=i.nextStep)===null||l===void 0?void 0:l.poll)===null||f===void 0?void 0:f.refresh;c(d?os(t,{refresh:d}):i)}catch(d){u(d)}},e.refresh)}):i}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Ot(t,e={}){return t.transactionManager.clear(),me(t,Object.assign({exchangeCodeForTokens:!1},e))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function yo(t,e={}){if(!qr(t)){const{enabledFeatures:n}=await Ot(t,Object.assign(Object.assign({},e),{flow:"register",autoRemediate:!1}));if(!e.activationToken&&n&&!n.includes(Z.REGISTRATION))throw new p("Registration is not supported based on your current org configuration.")}return me(t,Object.assign(Object.assign({},e),{flow:"register"}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function To(t,e={}){const n=An(t,"recoverPassword");return me(t,Object.assign(Object.assign({},e),n))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function bo(t,e){const n=t.transactionManager.load();if(!n)throw new p("No transaction data was found in storage");const{codeVerifier:r,state:s}=n,{searchParams:i}=new URL(e),o=i.get("state"),a=i.get("interaction_code"),c=i.get("error");if(c)throw new Se(c,i.get("error_description"));if(o!==s)throw new p("State in redirect uri does not match with transaction state");if(!a)throw new p("Unable to parse interaction_code from the url");const{tokens:u}=await t.token.exchangeCodeForTokens({interactionCode:a,codeVerifier:r});t.tokenManager.setTokens(u)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function So(t,e={}){if(e.flow="unlockAccount",!qr(t)){const{enabledFeatures:n}=await Ot(t,Object.assign(Object.assign({},e),{autoRemediate:!1}));if(n&&!n.includes(Z.ACCOUNT_UNLOCK))throw new p("Self Service Account Unlock is not supported based on your current org configuration.")}return me(t,Object.assign({},e))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function as(t){return t.name!=="OAuthError"?!1:t.errorCode==="interaction_required"}function Ll(t,e){if(e.name!=="AuthApiError")return!1;const r=e.xhr,s=r==null?void 0:r.responseJSON;return t.options.pkce&&(s==null?void 0:s.error)==="invalid_grant"}function Oo(t){return Xr(t)&&t.errorCode==="invalid_grant"&&t.errorSummary==="The refresh token is invalid or expired."}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function _o(t){return/[?&#](id|access)_token=/.test(t)}function ko(t){return/[?&#]code=/.test(t)}function Ao(t){return/[?&#]interaction_code=/.test(t)}function Eo(t){return/[?&#]error=/.test(t)||/[?&#]error_description/.test(t)}function Po(t,e){var n=e.options;return!t||!n.redirectUri?!1:t.indexOf(n.redirectUri)===0}function cs(t){return t.pkce||t.responseType==="code"||t.responseMode==="query"}function us(t,e){let n=!1;return Array.isArray(e.responseType)&&e.responseType.length?n=e.responseType.indexOf(t)>=0:n=e.responseType===t,n}function ls(t){var e=cs(t),n=e&&t.responseMode!=="fragment";return n?window.location.search:window.location.hash}function _t(t){if(!Po(window.location.href,t))return!1;var e=cs(t.options),n=ls(t.options);if(Eo(n))return!0;if(e){var r=ko(n)||Ao(n);return r}return _o(window.location.hash)}function Io(t,e){if(!e){if(!_t(t))return!1;e=ls(t.options)}return/(error=interaction_required)/i.test(e)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Mo=Object.freeze(Object.defineProperty({__proto__:null,AuthenticatorEnrollmentData:We,AuthenticatorVerificationData:Ce,ChallengeAuthenticator:Ie,ChallengePoll:He,EnrollAuthenticator:yt,EnrollPoll:Pe,EnrollProfile:bn,EnrollmentChannelData:bt,GenericRemediator:vn,Identify:_e,ReEnrollAuthenticator:Ve,ReEnrollAuthenticatorWarning:Be,RedirectIdp:Sn,Remediator:D,ResetAuthenticator:Tn,SelectAuthenticatorAuthenticate:Me,SelectAuthenticatorEnroll:qe,SelectAuthenticatorUnlockAccount:_n,SelectEnrollProfile:kn,SelectEnrollmentChannel:Tt,Skip:St},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Co(t){Bi({remediators:Mo,getFlowSpecification:An});const e=Ot.bind(null,t);return{interact:$r.bind(null,t),introspect:Jt.bind(null,t),makeIdxResponse:mn.bind(null,t),authenticate:so.bind(null,t),register:yo.bind(null,t),start:e,startTransaction:e,poll:os.bind(null,t),proceed:Pn.bind(null,t),cancel:go.bind(null,t),recoverPassword:To.bind(null,t),handleInteractionCodeRedirect:bo.bind(null,t),isInteractionRequired:Io.bind(null,t),isInteractionRequiredError:as,handleEmailVerifyCallback:wo.bind(null,t),isEmailVerifyCallback:ss,parseEmailVerifyCallback:is,isEmailVerifyCallbackError:vo,getSavedTransactionMeta:Y.bind(null,t),createTransactionMeta:mt.bind(null,t),getTransactionMeta:Wr.bind(null,t),saveTransactionMeta:vt.bind(null,t),clearTransactionMeta:Kr.bind(null,t),isTransactionMetaValid:gn,setFlow:r=>{t.options.flow=r},getFlow:()=>t.options.flow,canProceed:En.bind(null,t),unlockAccount:So.bind(null,t)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function In(t){class e{constructor(...r){const s=new t(r.length?r[0]||{}:{});this.options=B(s),this.emitter=new wi,this.features=Dt}}return e.features=Dt,e.constants=Xn,e.features=e.prototype.features=Dt,Object.assign(e,{constants:Xn}),e}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Mn(t,e){return class extends t{constructor(...r){super(...r);const{storageManager:s,cookies:i,storageUtil:o}=this.options;this.storageManager=new e(s,i,o)}clearStorage(){}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ro{constructor(){this.environments=["okta-auth-js/7.14.5"],this.maybeAddNodeEnvironment()}addEnvironment(e){this.environments.push(e)}getHttpHeader(){return{"X-Okta-User-Agent-Extended":this.environments.join(" ")}}getVersion(){return"7.14.5"}maybeAddNodeEnvironment(){if(M()||!process||!process.versions)return;const{node:e}=process.versions;this.environments.push(`nodejs/${e}`)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function xo(t,e,n){t.options.headers=t.options.headers||{},t.options.headers[e]=n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Cn(t){return class extends t{constructor(...n){super(...n),this._oktaUserAgent=new Ro,this.http={setRequestHeader:xo.bind(null,this)}}setHeaders(n){this.options.headers=Object.assign({},this.options.headers,n)}getIssuerOrigin(){return this.options.issuer.split("/oauth2/")[0]}webfinger(n){var r="/.well-known/webfinger"+Q(n),s={headers:{Accept:"application/jrd+json"}};return Oe(this,r,s)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ne(t){var e=te(t);return Rn(e)}function Rn(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function xn(t){return t.replace(/-/g,"+").replace(/_/g,"/")}function en(t){var e=xn(t);switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new p("Not a valid Base64Url")}var n=hn(e);try{return decodeURIComponent(escape(n))}catch{return n}}function ft(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function jn(t){return hn(xn(t))}function Fe(t){return Uint8Array.from(jn(t),e=>e.charCodeAt(0))}function he(t){return te(new Uint8Array(t).reduce((e,n)=>e+String.fromCharCode(n),""))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ds(t){var e=new TextEncoder().encode(t);return j.subtle.digest("SHA-256",e).then(function(n){var r=new Uint8Array(n),s=r.slice(0,16),i=String.fromCharCode.apply(null,s),o=Ne(i);return o})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function hs(t,e){e=U(e);var n="jwk",r={name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},s=!0,i=["verify"];return delete e.use,j.subtle.importKey(n,e,r,s,i).then(function(o){var a=t.split("."),c=ft(a[0]+"."+a[1]),u=jn(a[2]),l=ft(u);return j.subtle.verify(r,o,l,c)})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const jo=Object.freeze(Object.defineProperty({__proto__:null,atob:hn,base64ToBase64Url:Rn,base64UrlDecode:jn,base64UrlToBase64:xn,base64UrlToBuffer:Fe,base64UrlToString:en,btoa:te,bufferToBase64Url:he,getOidcHash:ds,stringToBase64Url:Ne,stringToBuffer:ft,verifyToken:hs,webcrypto:j},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Un{constructor(e={quiet:!1}){this.queue=[],this.running=!1,this.options=e}push(e,n,...r){return new Promise((s,i)=>{this.queue.length>0&&this.options.quiet!==!1&&W("Async method is being called but another async method is already running. The new method will be delayed until the previous method completes."),this.queue.push({method:e,thisObject:n,args:r,resolve:s,reject:i}),this.run()})}run(){if(!this.running&&this.queue.length!==0){this.running=!0;var e=this.queue.shift(),n=e.method.apply(e.thisObject,e.args);ni(n)?n.then(e.resolve,e.reject).finally(()=>{this.running=!1,this.run()}):(e.resolve(n),this.running=!1,this.run())}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Uo(t){return("0"+t.toString(16)).substr(-2)}function Do(t){var e=new Uint8Array(Math.ceil(t/2));j.getRandomValues(e);var n=Array.from(e,Uo).join("");return n.slice(0,t)}function Lo(t){var e=t||"";return e.length<Wt&&(e=e+Do(Wt-e.length)),encodeURIComponent(e).slice(0,Dr)}function No(t){var e=new TextEncoder().encode(t);return j.subtle.digest("SHA-256",e).then(function(n){var r=String.fromCharCode.apply(null,new Uint8Array(n)),s=Ne(r);return s})}var De={DEFAULT_CODE_CHALLENGE_METHOD:ln,generateVerifier:Lo,computeChallenge:No};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Dn(t){var e=t.split("."),n;try{n={header:JSON.parse(en(e[0])),payload:JSON.parse(en(e[1])),signature:e[2]}}catch{throw new p("Malformed token")}return n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function kt(t){const{pkce:e,clientId:n,redirectUri:r,responseType:s,responseMode:i,scopes:o,acrValues:a,maxAge:c,state:u,ignoreSignature:l,dpop:f}=t.options,d=M()?window.location.href:void 0;return B({pkce:e,clientId:n,redirectUri:r||d,responseType:s||["token","id_token"],responseMode:i,state:u||an(),nonce:ii(),scopes:o||["openid","email"],acrValues:a,maxAge:c,ignoreSignature:l,dpop:f})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Fo="OktaAuthJs",Nt="DPoPKeys";function fs(t){return(Xr(t)||Ni(t))&&t.errorCode==="use_dpop_nonce"}async function Ho(t,e,n){const r=Ne(JSON.stringify(t)),s=Ne(JSON.stringify(e)),i=await j.subtle.sign({name:n.algorithm.name},n,ft(`${r}.${s}`));return`${r}.${s}.${Rn(he(i))}`}function ps(t=32){return[...j.getRandomValues(new Uint8Array(t))].map(e=>e.toString(16)).join("")}async function Vo(){const t={name:"RSASSA-PKCS1-v1_5",hash:"SHA-256",modulusLength:2048,publicExponent:new Uint8Array([1,0,1])};return j.subtle.generateKey(t,!1,["sign","verify"])}async function Bo(t){const e=new TextEncoder().encode(t),n=await j.subtle.digest("SHA-256",e);return te(String.fromCharCode.apply(null,new Uint8Array(n))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function qo(){return new Promise((t,e)=>{try{const r=window.indexedDB.open(Fo,1);r.onerror=function(){e(r.error)},r.onupgradeneeded=function(){r.result.createObjectStore(Nt)},r.onsuccess=function(){const s=r.result,i=s.transaction(Nt,"readwrite");i.onerror=function(){e(i.error)};const o=i.objectStore(Nt);t(o),i.oncomplete=function(){s.close()}}}catch(n){e(n)}})}async function At(t,...e){const n=await qo();return new Promise((r,s)=>{const i=n[t](...e);i.onsuccess=function(){r(i)},i.onerror=function(){s(i.error)}})}async function Wo(t,e){return await At("add",e,t),e}async function Ln(t){if(t){const e=await At("get",t);if(e.result)return e.result}throw new p(`Unable to locate dpop key pair required for refresh${t?` (${t})`:""}`)}async function tn(t){await At("delete",t)}async function Ko(){await At("clear")}async function $o(){const t=ps(4),e=await Vo();return await Wo(t,e),{keyPair:e,keyPairId:t}}async function ir(t,e){var n;let r=!1;const{accessToken:s,refreshToken:i}=e;t==="access"&&s&&s.tokenType==="DPoP"&&!i&&(r=!0),t==="refresh"&&i&&!s&&(r=!0);const o=(n=s==null?void 0:s.dpopPairId)!==null&&n!==void 0?n:i==null?void 0:i.dpopPairId;r&&o&&await tn(o)}async function gs({keyPair:t,url:e,method:n,nonce:r,accessToken:s}){const{kty:i,crv:o,e:a,n:c,x:u,y:l}=await j.subtle.exportKey("jwk",t.publicKey),f={alg:"RS256",typ:"dpop+jwt",jwk:{kty:i,crv:o,e:a,n:c,x:u,y:l}},d={htm:n,htu:e,iat:Math.floor(Date.now()/1e3),jti:ps()};return r&&(d.nonce=r),s&&(d.ath=await Bo(s)),Ho(f,d,t.privateKey)}async function zo({keyPair:t,url:e,method:n,nonce:r}){const s={keyPair:t,url:e,method:n};return r&&(s.nonce=r),gs(s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Go(t){if(!t.clientId)throw new p("A clientId must be specified in the OktaAuth constructor to get a token");if(!t.redirectUri)throw new p("The redirectUri passed to /authorize must also be passed to /token");if(!t.authorizationCode&&!t.interactionCode)throw new p("An authorization code (returned from /authorize) must be passed to /token");if(!t.codeVerifier)throw new p('The "codeVerifier" (generated and saved by your app) must be passed to /token')}function Jo(t,e){var n=B({client_id:e.clientId,redirect_uri:e.redirectUri,grant_type:e.interactionCode?"interaction_code":"authorization_code",code_verifier:e.codeVerifier});e.interactionCode?n.interaction_code=e.interactionCode:e.authorizationCode&&(n.code=e.authorizationCode);const{clientSecret:r}=t.options;return r&&(n.client_secret=r),Q(n).slice(1)}async function Nn(t,{url:e,data:n,nonce:r,dpopKeyPair:s}){var i,o;const a="POST",c={"Content-Type":"application/x-www-form-urlencoded"};if(t.options.dpop){if(!s)throw new p("DPoP is configured but no key pair was provided");const u=await zo({url:e,method:a,nonce:r,keyPair:s});c.DPoP=u}try{return await K(t,{url:e,method:a,args:n,headers:c})}catch(u){if(fs(u)&&!r){const l=(i=u.resp)===null||i===void 0?void 0:i.headers["dpop-nonce"];if(!l)throw new de({errorSummary:"No `dpop-nonce` header found when required"},(o=u.resp)!==null&&o!==void 0?o:void 0);return Nn(t,{url:e,data:n,dpopKeyPair:s,nonce:l})}throw u}}async function Qo(t,e,n){Go(e);var r=Jo(t,e);const s={url:n.tokenUrl,data:r,dpopKeyPair:e==null?void 0:e.dpopKeyPair};return Nn(t,s)}async function Yo(t,e,n){const r=Object.entries({client_id:e.clientId,grant_type:"refresh_token",scope:n.scopes.join(" "),refresh_token:n.refreshToken}).map(function([o,a]){return o+"="+encodeURIComponent(a)}).join("&");let s=n.tokenUrl;e.extraParams&&Object.keys(e.extraParams).length>=1&&(s+=Q(e.extraParams));const i={url:s,data:r,dpopKeyPair:e==null?void 0:e.dpopKeyPair};return Nn(t,i)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Et(t,e){var n=e||t.options.issuer;return Oe(t,n+"/.well-known/openid-configuration",{cacheResponse:!0})}function Xo(t,e,n){var r=t.storageManager.getHttpCache(t.options.cookies);return Et(t,e).then(function(s){var i=s.jwks_uri,o=r.getStorage(),a=o[i];if(a&&Date.now()/1e3<a.expiresAt){var c=Vt(a.response.keys,{kid:n});if(c)return c}return r.clearStorage(i),Oe(t,i,{cacheResponse:!0}).then(function(u){var l=Vt(u.keys,{kid:n});if(l)return l;throw new p("The key id, "+n+", was not found in the server's keys")})})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Zo(t,e,n){const r=n.clientId,s=n.issuer,i=n.nonce,o=n.acrValues;if(!e||!s||!r)throw new p("The jwt, iss, and aud arguments are all required");if(i&&e.nonce!==i)throw new p("OAuth flow response nonce doesn't match request nonce");const a=Math.floor(Date.now()/1e3);if(e.iss!==s)throw new p("The issuer ["+e.iss+"] does not match ["+s+"]");if(Array.isArray(e.aud)&&e.aud.indexOf(r)<0||!Array.isArray(e.aud)&&e.aud!==r)throw new p("The audience ["+e.aud+"] does not match ["+r+"]");if(o&&e.acr!==o)throw new p("The acr ["+e.acr+"] does not match acr_values ["+o+"]");if(e.iat>e.exp)throw new p("The JWT expired before it was issued");if(!t.options.ignoreLifetime){if(a-t.options.maxClockSkew>e.exp)throw new p("The JWT expired and is no longer valid");if(e.iat>a+t.options.maxClockSkew)throw new p("The JWT was issued in the future")}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function ms(t,e,n){if(!e||!e.idToken)throw new p("Only idTokens may be verified");const r=Dn(e.idToken),s=(n==null?void 0:n.issuer)||t.options.issuer,{issuer:i}=await Et(t,s),o=Object.assign({clientId:t.options.clientId,ignoreSignature:t.options.ignoreSignature},n,{issuer:i});if(Zo(t,r.payload,o),o.ignoreSignature==!0||!t.features.isTokenVerifySupported())return e;const a=await Xo(t,e.issuer,r.header.kid);if(!await hs(e.idToken,a))throw new p("The token signature is not valid");if(n&&n.accessToken&&e.claims.at_hash&&await ds(n.accessToken)!==e.claims.at_hash)throw new p("Token hash verification failed");return e}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ea(t,e){if(t.error&&t.error_description)throw new Se(t.error,t.error_description);if(t.state!==e.state)throw new p("OAuth flow response state doesn't match request state")}async function ye(t,e,n,r){var s,i;const o=t.options.pkce!==!1;if(e=e||kt(t),ea(n,e),o&&(n.code||n.interaction_code))return t.token.exchangeCodeForTokens(Object.assign({},e,{authorizationCode:n.code,interactionCode:n.interaction_code}),r);r=r||ne(t,e);let a=e.responseType||[];!Array.isArray(a)&&a!=="none"&&(a=[a]);let c;n.scope?c=n.scope.split(" "):c=U(e.scopes);const u=e.clientId||t.options.clientId;if(e.dpop){const{allowBearerTokens:y}=(i=(s=t.options)===null||s===void 0?void 0:s.dpopOptions)!==null&&i!==void 0?i:{allowBearerTokens:!1};if(!y&&n.token_type!=="DPoP")throw new p('Unable to parse OAuth flow response: DPoP was configured but "token_type" was not DPoP')}const l={},f=n.expires_in,d=n.token_type,g=n.access_token,w=n.id_token,m=n.refresh_token,T=Math.floor(Date.now()/1e3);if(g){const y=t.token.decode(g);l.accessToken={accessToken:g,claims:y.payload,expiresAt:Number(f)+T,tokenType:d,scopes:c,authorizeUrl:r.authorizeUrl,userinfoUrl:r.userinfoUrl},e.dpopPairId&&(l.accessToken.dpopPairId=e.dpopPairId),e.extraParams&&(l.accessToken.extraParams=e.extraParams)}if(m&&(l.refreshToken={refreshToken:m,expiresAt:Number(f)+T,scopes:c,tokenUrl:r.tokenUrl,authorizeUrl:r.authorizeUrl,issuer:r.issuer},e.dpopPairId&&(l.refreshToken.dpopPairId=e.dpopPairId),e.extraParams&&(l.refreshToken.extraParams=e.extraParams)),w){const y=t.token.decode(w),k={idToken:w,claims:y.payload,expiresAt:y.payload.exp-y.payload.iat+T,scopes:c,authorizeUrl:r.authorizeUrl,issuer:r.issuer,clientId:u};e.extraParams&&(k.extraParams=e.extraParams);const P={clientId:u,issuer:r.issuer,nonce:e.nonce,accessToken:g,acrValues:e.acrValues};e.ignoreSignature!==void 0&&(P.ignoreSignature=e.ignoreSignature),await ms(t,k,P),l.idToken=k}if(a.indexOf("token")!==-1&&!l.accessToken)throw new p('Unable to parse OAuth flow response: response type "token" was requested but "access_token" was not returned.');if(a.indexOf("id_token")!==-1&&!l.idToken)throw new p('Unable to parse OAuth flow response: response type "id_token" was requested but "id_token" was not returned.');return{tokens:l,state:n.state,code:n.code,responseType:a}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function vs(t,e,n){n=n||ne(t,e),e=Object.assign({},kt(t),U(e));const{authorizationCode:r,interactionCode:s,codeVerifier:i,clientId:o,redirectUri:a,scopes:c,ignoreSignature:u,state:l,acrValues:f,dpop:d,dpopPairId:g,extraParams:w}=e,m={clientId:o,redirectUri:a,authorizationCode:r,interactionCode:s,codeVerifier:i,dpop:d},T=["token"];c.indexOf("openid")!==-1&&T.push("id_token");const y={clientId:o,redirectUri:a,scopes:c,responseType:T,ignoreSignature:u,acrValues:f,extraParams:w};try{if(d)if(g){const O=await Ln(g);m.dpopKeyPair=O,y.dpop=d,y.dpopPairId=g}else{const{keyPair:O,keyPairId:H}=await $o();m.dpopKeyPair=O,y.dpop=d,y.dpopPairId=H}const k=await Qo(t,m,n),P=await ye(t,y,k,n);return P.code=r,P.state=l,P}finally{t.transactionManager.clear()}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function ta(t,e,n){if(e||(e=(await t.tokenManager.getTokens()).accessToken),n||(n=(await t.tokenManager.getTokens()).idToken),!e||!z(e))return Promise.reject(new p("getUserInfo requires an access token object"));if(!n||!ee(n))return Promise.reject(new p("getUserInfo requires an ID token object"));const r={url:e.userinfoUrl,method:"GET",accessToken:e.accessToken};if(t.options.dpop){const s=await t.getDPoPAuthorizationHeaders(Object.assign(Object.assign({},r),{accessToken:e}));r.headers=s,delete r.accessToken}return K(t,r).then(s=>s.sub===n.claims.sub?s:Promise.reject(new p("getUserInfo request was rejected due to token mismatch"))).catch(function(s){var i;if(s instanceof V&&!t.options.dpop){const{error:o,errorDescription:a}=s;throw new Se(o,a)}if(!t.options.dpop){let o=s;if(s instanceof de&&(!((i=s==null?void 0:s.meta)===null||i===void 0)&&i.wwwAuthHeader)&&(o=V.parseHeader(s.meta.wwwAuthHeader)),o instanceof V){const{error:a,errorDescription:c}=o;throw new Se(a,c)}}throw s})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const ws=12e4;function ys(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent("on"+e,n)}function Ts(t,e,n){t.removeEventListener?t.removeEventListener(e,n):t.detachEvent("on"+e,n)}function na(t){var e=document.createElement("iframe");return e.style.display="none",e.src=t,document.body.appendChild(e)}function bs(t,e){var n=e.popupTitle||"External Identity Provider User Authentication",r="toolbar=no, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=600";return window.open(t,n,r)}function or(t,e,n){var r,s,i=new Promise(function(o,a){r=function(u){if(!(!u.data||u.data.state!==n)){if(u.origin!==t.getIssuerOrigin())return a(new p("The request does not match client configuration"));o(u.data)}},ys(window,"message",r),s=setTimeout(function(){a(new p("OAuth flow timed out"))},e||ws)});return i.finally(function(){clearTimeout(s),Ts(window,"message",r)})}function ra(t,e,n,r){let s;return new Promise((o,a)=>{n.onmessage=c=>{if(!(!c.isTrusted||!c.data)){if(typeof c.data=="object"&&r===c.data.state)return o(Object.assign({},c.data));a(new p("Unable to complete auth code exchange"))}},s=setTimeout(function(){a(new p("OAuth flow timed out"))},e||ws)}).finally(()=>{clearTimeout(s),n.close()})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function sa(t){if(!t.features.isPKCESupported()){var e="PKCE requires a modern browser with encryption support running in a secure context.";throw t.features.isHTTPS()||(e+=`
The current page is not being served with HTTPS protocol. PKCE requires secure HTTPS protocol.`),t.features.hasTextEncoder()||(e+=`
"TextEncoder" is not defined. To use PKCE, you may need to include a polyfill/shim for this browser.`),new p(e)}}async function ia(t,e){e=e||t.options.codeChallengeMethod||ln;var r=(await Et(t)).code_challenge_methods_supported||[];if(r.indexOf(e)===-1)throw new p("Invalid code_challenge_method");return e}async function oa(t,e){let{codeVerifier:n,codeChallenge:r,codeChallengeMethod:s}=e;return r=r||t.options.codeChallenge,r||(sa(t),n=n||De.generateVerifier(),r=await De.computeChallenge(n)),s=await ia(t,s),e=Object.assign(Object.assign({},e),{responseType:"code",codeVerifier:n,codeChallenge:r,codeChallengeMethod:s}),e}async function Pt(t,e={}){const n=kt(t);if(e=Object.assign(Object.assign({},n),e),e.dpop&&!t.features.isDPoPSupported())throw new p("DPoP has been configured, but is not supported by browser");return e.pkce===!1?e:oa(t,e)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function aa(t){if(!t.clientId)throw new p("A clientId must be specified in the OktaAuth constructor to get a token");if(be(t.responseType)&&t.responseType.indexOf(" ")!==-1)throw new p("Multiple OAuth responseTypes must be defined as an array");var e={client_id:t.clientId,code_challenge:t.codeChallenge,code_challenge_method:t.codeChallengeMethod,display:t.display,idp:t.idp,idp_scope:t.idpScope,login_hint:t.loginHint,max_age:t.maxAge,nonce:t.nonce,prompt:t.prompt,redirect_uri:t.redirectUri,response_mode:t.responseMode,response_type:t.responseType,sessionToken:t.sessionToken,state:t.state,acr_values:t.acrValues,enroll_amr_values:t.enrollAmrValues};if(e=B(e),["idp_scope","response_type","enroll_amr_values"].forEach(function(n){Array.isArray(e[n])&&(e[n]=e[n].join(" "))}),t.responseType.indexOf("id_token")!==-1&&t.scopes.indexOf("openid")===-1)throw new p("openid scope must be specified in the scopes argument when requesting an id_token");return t.scopes&&(e.scope=t.scopes.join(" ")),e}function Fn(t){var e=aa(t);return Q(Object.assign(Object.assign({},e),t.extraParams&&Object.assign({},t.extraParams)))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Hn(t,e){if(arguments.length>2)return Promise.reject(new p('As of version 3.0, "getToken" takes only a single set of options'));e=e||{};const n=e.popupWindow;return e.popupWindow=void 0,Pt(t,e).then(function(r){var s={prompt:"none",responseMode:"okta_post_message",display:null},i={display:"popup"};e.sessionToken?Object.assign(r,s):e.idp&&Object.assign(r,i);var o,a,c;c=ne(t,r),a=e.codeVerifier?c.tokenUrl:c.authorizeUrl,o=a+Fn(r);var u="IMPLICIT";switch(r.sessionToken||r.display===null?u="IFRAME":r.display==="popup"?u=e.idpPopup?"IDP_POPUP":"POPUP":u="IMPLICIT",u){case"IFRAME":var l=or(t,e.timeout,r.state),f=na(o);return l.then(function(m){return ye(t,r,m,c)}).finally(function(){var m;document.body.contains(f)&&((m=f.parentElement)===null||m===void 0||m.removeChild(f))});case"POPUP":var d;if(r.responseMode==="okta_post_message"){if(!t.features.isPopupPostMessageSupported())throw new p("This browser doesn't have full postMessage support");d=or(t,e.timeout,r.state)}n&&n.location.assign(o);var g=new Promise(function(m,T){var y=setInterval(function(){(!n||n.closed)&&(clearInterval(y),T(new p("Unable to parse OAuth flow response")))},100);d.then(function(k){clearInterval(y),m(k)}).catch(function(k){clearInterval(y),T(k)})});return g.then(function(m){return ye(t,r,m,c)}).finally(function(){n&&!n.closed&&n.close()});case"IDP_POPUP":var w=ra(t,e.timeout,e.channel,r.state);if(n)n.location.assign(o);else throw new p("Unable to open popup window");return w.then(function(m){return ye(t,r,m,c)});default:throw new p("The full page redirect flow is not supported")}})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Vn(t,e){return arguments.length>2?Promise.reject(new p('As of version 3.0, "getWithoutPrompt" takes only a single set of options')):(e=U(e)||{},Object.assign(e,{prompt:"none",responseMode:"okta_post_message",display:null}),Hn(t,e))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ca(t,e){if(arguments.length>2)return Promise.reject(new p('As of version 3.0, "getWithPopup" takes only a single set of options'));const{initialPath:n}=e,r=ge(e,["initialPath"]),s=bs(n??"/",r);return e=U(r)||{},Object.assign(r,{display:"popup",responseMode:"okta_post_message",popupWindow:s}),Hn(t,r)}function ua(t,e){try{if(!BroadcastChannel)throw new p("Modern browser with `BroadcastChannel` support is required to use this method");if(!e.redirectUri)throw new p("`redirectUri` is a required param for `getWithIDPPopup`");e.state||(e.state=an());const n=bs("/",e),r=new BroadcastChannel(`popup-callback:${e.state}`);e=U(e)||{},Object.assign(e,{display:"popup",responseMode:"query",popupWindow:n,idpPopup:!0,channel:r});let s;return{promise:new Promise((a,c)=>(s=c,Hn(t,e).then(u=>a(u)).catch(u=>c(u)))),cancel:()=>{r.close(),s(new p("Popup flow canceled"))}}}catch(n){return{promise:Promise.reject(n),cancel:()=>{}}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function la(t,e){if(arguments.length>2)return Promise.reject(new p('As of version 3.0, "getWithRedirect" takes only a single set of options'));e=U(e)||{};const n=await Pt(t,e),r=Ar(t,n),s=r.urls.authorizeUrl+Fn(n);t.transactionManager.save(r),t.options.setLocation?t.options.setLocation(s):window.location.assign(s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function da(t){var e=t.token.parseFromUrl._getHistory(),n=t.token.parseFromUrl._getDocument(),r=t.token.parseFromUrl._getLocation();e&&e.replaceState?e.replaceState(null,n.title,r.pathname+r.search):r.hash=""}function ha(t){var e=t.token.parseFromUrl._getHistory(),n=t.token.parseFromUrl._getDocument(),r=t.token.parseFromUrl._getLocation();e&&e.replaceState?e.replaceState(null,n.title,r.pathname+r.hash):r.search=""}function Ss(t){var e=t.options.pkce?"query":"fragment",n=t.options.responseMode||e;return n}function nn(t,e){e=e||{},be(e)?e={url:e}:e=e;var n=e.url,r=e.responseMode||Ss(t),s=t.token.parseFromUrl._getLocation(),i;if(r==="query"?i=n?n.substring(n.indexOf("?")):s.search:i=n?n.substring(n.indexOf("#")):s.hash,!i)throw new p("Unable to parse a token from the url");return rs(i)}function fa(t,e){(e.responseMode||Ss(t))==="query"?ha(t):da(t)}async function pa(t,e){e=e||{},be(e)?e={url:e}:e=e;const n=nn(t,e),r=n.state,s=t.transactionManager.load({state:r});if(!s)throw t.options.pkce?new p("Could not load PKCE codeVerifier from storage. This may indicate the auth flow has already completed or multiple auth flows are executing concurrently.",void 0):new p("Unable to retrieve OAuth redirect params from storage");const i=s.urls;return delete s.urls,e.url||fa(t,e),ye(t,s,n,i).catch(o=>{throw as(o)||t.transactionManager.clear({state:r}),o}).then(o=>(t.transactionManager.clear({state:r}),o))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ga(t,e){return t.refreshToken===e.refreshToken}function Hl(t){if(!Yr(t)||!t.xhr||!t.xhr.responseJSON)return!1;const{responseJSON:e}=t.xhr;return e.error==="invalid_grant"}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function Bn(t,e,n){const{clientId:r,dpop:s}=t.options;if(!r)throw new p("A clientId must be specified in the OktaAuth constructor to renew tokens");try{const i=Object.assign({},e,{clientId:r});n.extraParams&&(i.extraParams=n.extraParams);const o=Object.assign({},i);if(s){const f=await Ln(n==null?void 0:n.dpopPairId);o.dpopKeyPair=f,i.dpop=s,i.dpopPairId=n.dpopPairId}const a=await Yo(t,o,n),c=ne(t,e),{tokens:u}=await ye(t,i,a,c),{refreshToken:l}=u;return l&&!ga(l,n)&&t.tokenManager.updateRefreshToken(l),u}catch(i){throw Oo(i)&&t.tokenManager.removeRefreshToken(),i}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Os(){throw new p("Renew must be passed a token with an array of scopes and an accessToken or idToken")}function ar(t,e){if(ee(t))return e.idToken;if(z(t))return e.accessToken;Os()}async function ma(t,e){!ee(e)&&!z(e)&&Os();let n=t.tokenManager.getTokensSync();if(n.refreshToken)return n=await Bn(t,{scopes:e.scopes},n.refreshToken),ar(e,n);var r;t.options.pkce?r="code":z(e)?r="token":r="id_token";const{scopes:s,authorizeUrl:i,userinfoUrl:o,issuer:a,dpopPairId:c,extraParams:u}=e;return Vn(t,{responseType:r,scopes:s,authorizeUrl:i,userinfoUrl:o,issuer:a,dpopPairId:c,extraParams:u}).then(function(l){return ar(e,l.tokens)})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function va(t,e){var n;const r=(n=e==null?void 0:e.tokens)!==null&&n!==void 0?n:t.tokenManager.getTokensSync();if(r.refreshToken)return Bn(t,e||{},r.refreshToken);if(!r.accessToken&&!r.idToken)throw new p("renewTokens() was called but there is no existing token");const s=r.accessToken||{},i=r.idToken||{},o=s.scopes||i.scopes;if(!o)throw new p("renewTokens: invalid tokens: could not read scopes");const a=s.authorizeUrl||i.authorizeUrl;if(!a)throw new p("renewTokens: invalid tokens: could not read authorizeUrl");const c=s.userinfoUrl||t.options.userinfoUrl,u=i.issuer||t.options.issuer,l=s==null?void 0:s.dpopPairId,f=(s==null?void 0:s.extraParams)||(i==null?void 0:i.extraParams);if(e=Object.assign({scopes:o,authorizeUrl:a,userinfoUrl:c,issuer:u,dpopPairId:l,extraParams:f},e),t.options.pkce)e.responseType="code";else{const{responseType:d}=kt(t);e.responseType=d}return Vn(t,e).then(d=>d.tokens)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function wa(t,e){let n="",r="";if(e&&(n=e.accessToken,r=e.refreshToken),!n&&!r)throw new p("A valid access or refresh token object is required");var s=t.options.clientId,i=t.options.clientSecret;if(!s)throw new p("A clientId must be specified in the OktaAuth constructor to revoke a token");var o=ne(t).revokeUrl,a=Q({token_type_hint:r?"refresh_token":"access_token",token:r||n}).slice(1),c=te(i?`${s}:${i}`:s);return re(t,o,a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+c}})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const ya={accessToken:"access_token",idToken:"id_token",refreshToken:"refresh_token"};async function Ta(t,e,n){var r;let s,i=t.options.clientId,o=t.options.clientSecret;if(n||(n=t.tokenManager.getTokens()[e]),!n)throw new p(`unable to find ${e} in storage or fn params`);if(e!==zt.ACCESS?s=n==null?void 0:n.issuer:s=(r=n==null?void 0:n.claims)===null||r===void 0?void 0:r.iss,s=s||t.options.issuer,!i)throw new p("A clientId must be specified in the OktaAuth constructor to introspect a token");if(!s)throw new p("Unable to find issuer");const{introspection_endpoint:a}=await Et(t,s),c=te(o?`${i}:${o}`:i),u=Q({token_type_hint:ya[e],token:n[e]}).slice(1);return re(t,a,u,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+c}})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ba(t,e){const n=t.options.issuer,r=ne(t,e);return{issuer:n,urls:r,clientId:e.clientId,redirectUri:e.redirectUri,responseType:e.responseType,responseMode:e.responseMode,state:e.state,acrValues:e.acrValues,enrollAmrValues:e.enrollAmrValues}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Sa(t){const{clientId:e,redirectUri:n,responseMode:r,state:s}=t.options,i=M()?window.location.href:void 0;return B({clientId:e,redirectUri:n||i,responseMode:r,state:s||an(),responseType:"none",prompt:"enroll_authenticator"})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Oa(t){if(t=Object.assign(Object.assign({},t),{responseType:"none",prompt:"enroll_authenticator",maxAge:0}),!t.enrollAmrValues)throw new p("enroll_amr_values must be specified");if(!t.acrValues)throw new p("acr_values must be specified");return delete t.scopes,delete t.nonce,t}function _a(t,e){return Oa(Object.assign(Object.assign({},Sa(t)),e))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ka(t,e){e=U(e)||{};const n=_a(t,e),r=ba(t,n),s=r.urls.authorizeUrl+Fn(n);t.transactionManager.save(r),t.options.setLocation?t.options.setLocation(s):window.location.assign(s)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Aa(t,e){const n=c=>Un.prototype.push.bind(e,c,null),r=n(la.bind(null,t)),s=n(pa.bind(null,t)),i=Object.assign(s,{_getHistory:function(){return window.history},_getLocation:function(){return window.location},_getDocument:function(){return window.document}}),o={prepareTokenParams:Pt.bind(null,t),exchangeCodeForTokens:vs.bind(null,t),getWithoutPrompt:Vn.bind(null,t),getWithPopup:ca.bind(null,t),getWithIDPPopup:ua.bind(null,t),getWithRedirect:r,parseFromUrl:i,decode:Dn,revoke:wa.bind(null,t),renew:ma.bind(null,t),renewTokensWithRefresh:Bn.bind(null,t),renewTokens:va.bind(null,t),getUserInfo:(c,u)=>ta(t,c,u),verify:ms.bind(null,t),isLoginRedirect:_t.bind(null,t),introspect:Ta.bind(null,t)};return["getWithoutPrompt","getWithPopup","revoke","renew","renewTokensWithRefresh","renewTokens"].forEach(c=>{o[c]=n(o[c])}),o}function Ea(t){return{authorize:{enrollAuthenticator:ka.bind(null,t)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function nt(t,e){if(!ee(t)&&!z(t)&&!ae(t))throw new p("Token must be an Object with scopes, expiresAt, and one of: an idToken, accessToken, or refreshToken property");if(e==="accessToken"&&!z(t))throw new p("invalid accessToken");if(e==="idToken"&&!ee(t))throw new p("invalid idToken");if(e==="refreshToken"&&!ae(t))throw new p("invalid refreshToken")}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class qn{constructor(e){this.localOffset=parseInt(e||0)}static create(){var e=0;return new qn(e)}now(){var e=(Date.now()+this.localOffset)/1e3;return e}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const rn="expired",Re="renewed",ce="added",ue="removed",Pa="error",xe="set_storage";/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const cr={autoRenew:!0,autoRemove:!0,syncStorage:!0,clearPendingRemoveTokens:!0,storage:void 0,expireEarlySeconds:30,storageKey:un};function Ia(){return{expireTimeouts:{},renewPromise:null}}class Ma{constructor(e,n={}){if(this.sdk=e,this.emitter=e.emitter,!this.emitter)throw new p("Emitter should be initialized before TokenManager");n=Object.assign({},cr,B(n)),Br()||(n.expireEarlySeconds=cr.expireEarlySeconds),this.options=n;const r=B({storageKey:n.storageKey,secure:n.secure});typeof n.storage=="object"?r.storageProvider=n.storage:n.storage&&(r.storageType=n.storage),this.storage=e.storageManager.getTokenStorage(Object.assign(Object.assign({},r),{useSeparateCookies:!0})),this.clock=qn.create(),this.state=Ia()}on(e,n,r){r?this.emitter.on(e,n,r):this.emitter.on(e,n)}off(e,n){n?this.emitter.off(e,n):this.emitter.off(e)}start(){this.options.clearPendingRemoveTokens&&this.clearPendingRemoveTokens(),this.setExpireEventTimeoutAll(),this.state.started=!0}stop(){this.clearExpireEventTimeoutAll(),this.state.started=!1}isStarted(){return!!this.state.started}getOptions(){return U(this.options)}getExpireTime(e){const n=this.options.expireEarlySeconds||0;var r=e.expiresAt-n;return r}hasExpired(e){var n=this.getExpireTime(e);return n<=this.clock.now()}emitExpired(e,n){this.emitter.emit(rn,e,n)}emitRenewed(e,n,r){this.emitter.emit(Re,e,n,r)}emitAdded(e,n){this.emitter.emit(ce,e,n)}emitRemoved(e,n){this.emitter.emit(ue,e,n)}emitError(e){this.emitter.emit(Pa,e)}clearExpireEventTimeout(e){clearTimeout(this.state.expireTimeouts[e]),delete this.state.expireTimeouts[e],this.state.renewPromise=null}clearExpireEventTimeoutAll(){var e=this.state.expireTimeouts;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&this.clearExpireEventTimeout(n)}setExpireEventTimeout(e,n){if(!ae(n)){var r=this.getExpireTime(n),s=Math.max(r-this.clock.now(),0)*1e3;this.clearExpireEventTimeout(e);var i=setTimeout(()=>{this.emitExpired(e,n)},s);this.state.expireTimeouts[e]=i}}setExpireEventTimeoutAll(){var e=this.storage.getStorage();for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=e[n];this.setExpireEventTimeout(n,r)}}resetExpireEventTimeoutAll(){this.clearExpireEventTimeoutAll(),this.setExpireEventTimeoutAll()}add(e,n){var r=this.storage.getStorage();nt(n),r[e]=n,this.storage.setStorage(r),this.emitSetStorageEvent(),this.emitAdded(e,n),this.setExpireEventTimeout(e,n)}getSync(e){var n=this.storage.getStorage();return n[e]}async get(e){return this.getSync(e)}getTokensSync(){const e={},n=this.storage.getStorage();return Object.keys(n).forEach(r=>{const s=n[r];z(s)?e.accessToken=s:ee(s)?e.idToken=s:ae(s)&&(e.refreshToken=s)}),e}async getTokens(){return this.getTokensSync()}getStorageKeyByType(e){const n=this.storage.getStorage();return Object.keys(n).filter(s=>{const i=n[s];return z(i)&&e==="accessToken"||ee(i)&&e==="idToken"||ae(i)&&e==="refreshToken"})[0]}getTokenType(e){if(z(e))return"accessToken";if(ee(e))return"idToken";if(ae(e))return"refreshToken";throw new p("Unknown token type")}emitSetStorageEvent(){if(gt()){const e=this.storage.getStorage();this.emitter.emit(xe,e)}}getStorage(){return this.storage}setTokens(e,n,r,s){const i=(d,g)=>{const w=this.getTokenType(g);w==="accessToken"?n&&n(d,g):w==="idToken"?r&&r(d,g):w==="refreshToken"&&s&&s(d,g)},o=(d,g)=>{this.emitAdded(d,g),this.setExpireEventTimeout(d,g),i(d,g)},a=(d,g,w)=>{this.emitRenewed(d,g,w),this.clearExpireEventTimeout(d),this.setExpireEventTimeout(d,g),i(d,g)},c=(d,g)=>{this.clearExpireEventTimeout(d),this.emitRemoved(d,g),i(d,g)},u=["idToken","accessToken","refreshToken"],l=this.getTokensSync();u.forEach(d=>{const g=e[d];g&&nt(g,d)});const f=u.reduce((d,g)=>{const w=e[g];if(w){const m=this.getStorageKeyByType(g)||g;d[m]=w}return d},{});this.storage.setStorage(f),this.emitSetStorageEvent(),u.forEach(d=>{const g=e[d],w=l[d],m=this.getStorageKeyByType(d)||d;g&&w?(c(m,w),o(m,g),a(m,g,w)):g?o(m,g):w&&c(m,w)})}remove(e){this.clearExpireEventTimeout(e);var n=this.storage.getStorage(),r=n[e];delete n[e],this.storage.setStorage(n),this.emitSetStorageEvent(),this.emitRemoved(e,r)}async renewToken(e){var n;return(n=this.sdk.token)===null||n===void 0?void 0:n.renew(e)}validateToken(e){return nt(e)}renew(e){if(this.state.renewPromise)return this.state.renewPromise;try{var n=this.getSync(e);let s=n!==void 0;if(!n&&e==="accessToken"){const i=this.getStorageKeyByType("refreshToken");s=this.getSync(i)!==void 0}if(!s)throw new p("The tokenManager has no token for the key: "+e)}catch(s){return this.emitError(s),Promise.reject(s)}return this.clearExpireEventTimeout(e),this.state.renewPromise=this.sdk.token.renewTokens().then(s=>{if(this.setTokens(s),!n&&e==="accessToken"){const o=s.accessToken;return this.emitRenewed(e,o,null),o}const i=this.getTokenType(n);return s[i]}).catch(s=>{throw this.remove(e),s.tokenKey=e,this.emitError(s),s}).finally(()=>{this.state.renewPromise=null})}clear(){const e=this.getTokensSync();this.clearExpireEventTimeoutAll(),this.storage.clearStorage(),this.emitSetStorageEvent(),Object.keys(e).forEach(n=>{this.emitRemoved(n,e[n])})}clearPendingRemoveTokens(){const e=this.storage.getStorage(),n={};Object.keys(e).forEach(r=>{e[r].pendingRemove&&(n[r]=e[r],delete e[r])}),this.storage.setStorage(e),this.emitSetStorageEvent(),Object.keys(n).forEach(r=>{this.clearExpireEventTimeout(r),this.emitRemoved(r,n[r])})}updateRefreshToken(e){const n=this.getStorageKeyByType("refreshToken")||qt;var r=this.storage.getStorage();nt(e),r[n]=e,this.storage.setStorage(r),this.emitSetStorageEvent()}removeRefreshToken(){const e=this.getStorageKeyByType("refreshToken")||qt;this.remove(e)}addPendingRemoveFlags(){const e=this.getTokensSync();Object.keys(e).forEach(n=>{e[n].pendingRemove=!0}),this.setTokens(e)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var at={browserHasLocalStorage:function(){try{var t=this.getLocalStorage();return this.testStorage(t)}catch{return!1}},browserHasSessionStorage:function(){try{var t=this.getSessionStorage();return this.testStorage(t)}catch{return!1}},testStorageType:function(t){var e=!1;switch(t){case"sessionStorage":e=this.browserHasSessionStorage();break;case"localStorage":e=this.browserHasLocalStorage();break;case"cookie":case"memory":e=!0;break;default:e=!1;break}return e},getStorageByType:function(t,e){let n;switch(t){case"sessionStorage":n=this.getSessionStorage();break;case"localStorage":n=this.getLocalStorage();break;case"cookie":n=this.getCookieStorage(e);break;case"memory":n=this.getInMemoryStorage();break;default:throw new p(`Unrecognized storage option: ${t}`)}return n},findStorageType:function(t){let e,n;return t=t.slice(),e=t.shift(),n=t.length?t[0]:null,!n||this.testStorageType(e)?e:(W(`This browser doesn't support ${e}. Switching to ${n}.`),this.findStorageType(t))},getLocalStorage:function(){return gt()&&!window.onstorage&&(window.onstorage=function(){}),localStorage},getSessionStorage:function(){return sessionStorage},getCookieStorage:function(t){const e=t.secure,n=t.sameSite,r=t.sessionCookie;if(typeof e>"u"||typeof n>"u")throw new p('getCookieStorage: "secure" and "sameSite" options must be provided');const s={getItem:this.storage.get,setItem:(i,o,a="2200-01-01T00:00:00.000Z")=>{a=r?null:a,this.storage.set(i,o,a,{secure:e,sameSite:n})},removeItem:i=>{this.storage.delete(i)}};return t.useSeparateCookies?{getItem:function(i){var o=s.getItem(),a={};return Object.keys(o).forEach(c=>{c.indexOf(i)===0&&(a[c.replace(`${i}_`,"")]=JSON.parse(o[c]))}),JSON.stringify(a)},setItem:function(i,o){var a=JSON.parse(this.getItem(i));o=JSON.parse(o),Object.keys(o).forEach(c=>{var u=i+"_"+c,l=JSON.stringify(o[c]);s.setItem(u,l),delete a[c]}),Object.keys(a).forEach(c=>{s.removeItem(i+"_"+c)})},removeItem:function(i){var o=JSON.parse(this.getItem(i));Object.keys(o).forEach(a=>{s.removeItem(i+"_"+a)})}}:s},inMemoryStore:{},getInMemoryStorage:function(){return{getItem:t=>this.inMemoryStore[t],setItem:(t,e)=>{this.inMemoryStore[t]=e}}},testStorage:function(t){var e="okta-test-storage";try{return t.setItem(e,e),t.removeItem(e),!0}catch{return!1}},storage:{set:function(t,e,n,r){const{sameSite:s,secure:i}=r;if(typeof i>"u"||typeof s>"u")throw new p('storage.set: "secure" and "sameSite" options must be provided');var o={path:r.path||"/",secure:i,sameSite:s};return Date.parse(n)&&(o.expires=new Date(n)),Xe.set(t,e,o),this.get(t)},get:function(t){return arguments.length?Xe.get(t):Xe.get()},delete:function(t){return Xe.remove(t,{path:"/"})}}};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ca(t){return class extends t{setOriginalUri(n,r){at.getSessionStorage().setItem(st,n),r=r||this.options.state,r&&this.storageManager.getOriginalUriStorage().setItem(r,n)}getOriginalUri(n){if(n=n||this.options.state,n){const i=this.storageManager.getOriginalUriStorage().getItem(n);if(i)return i}const r=at.getSessionStorage();return r&&r.getItem(st)||void 0}removeOriginalUri(n){if(at.getSessionStorage().removeItem(st),n=n||this.options.state,n){const s=this.storageManager.getOriginalUriStorage();s.removeItem&&s.removeItem(n)}}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function _s(t,e){var n;const r=Ca(t);return n=class extends r{constructor(...i){super(...i),this.transactionManager=new e(Object.assign({storageManager:this.storageManager},this.options.transactionManager)),this.pkce={DEFAULT_CODE_CHALLENGE_METHOD:De.DEFAULT_CODE_CHALLENGE_METHOD,generateVerifier:De.generateVerifier,computeChallenge:De.computeChallenge},this._pending={handleLogin:!1},this._tokenQueue=new Un,this.token=Aa(this,this._tokenQueue),this.tokenManager=new Ma(this,this.options.tokenManager),this.endpoints=Ea(this)}clearStorage(){super.clearStorage(),this.tokenManager.clear()}async isAuthenticated(i={}){const{autoRenew:o,autoRemove:a}=this.tokenManager.getOptions(),c=i.onExpiredToken?i.onExpiredToken==="renew":o,u=i.onExpiredToken?i.onExpiredToken==="remove":a;let{accessToken:l}=this.tokenManager.getTokensSync();if(l&&this.tokenManager.hasExpired(l))if(l=void 0,c)try{l=await this.tokenManager.renew("accessToken")}catch{}else u&&this.tokenManager.remove("accessToken");let{idToken:f}=this.tokenManager.getTokensSync();if(f&&this.tokenManager.hasExpired(f))if(f=void 0,c)try{f=await this.tokenManager.renew("idToken")}catch{}else u&&this.tokenManager.remove("idToken");return!!(l&&f)}async signInWithRedirect(i={}){const{originalUri:o}=i,a=ge(i,["originalUri"]);if(!this._pending.handleLogin){this._pending.handleLogin=!0;try{o&&this.setOriginalUri(o);const c=Object.assign({scopes:this.options.scopes||["openid","email","profile"]},a);await this.token.getWithRedirect(c)}finally{this._pending.handleLogin=!1}}}async getUser(){const{idToken:i,accessToken:o}=this.tokenManager.getTokensSync();return this.token.getUserInfo(o,i)}getIdToken(){const{idToken:i}=this.tokenManager.getTokensSync();return i?i.idToken:void 0}getAccessToken(){const{accessToken:i}=this.tokenManager.getTokensSync();return i?i.accessToken:void 0}getRefreshToken(){const{refreshToken:i}=this.tokenManager.getTokensSync();return i?i.refreshToken:void 0}async getOrRenewAccessToken(){var i;const{accessToken:o}=this.tokenManager.getTokensSync();if(o&&!this.tokenManager.hasExpired(o))return o.accessToken;try{const a=this.tokenManager.getStorageKeyByType("accessToken"),c=await this.tokenManager.renew(a??"accessToken");return(i=c==null?void 0:c.accessToken)!==null&&i!==void 0?i:null}catch(a){return this.emitter.emit("error",a),null}}async storeTokensFromRedirect(){const{tokens:i,responseType:o}=await this.token.parseFromUrl();o!=="none"&&this.tokenManager.setTokens(i)}isLoginRedirect(){return _t(this)}isPKCE(){return!!this.options.pkce}hasResponseType(i){return us(i,this.options)}isAuthorizationCodeFlow(){return this.hasResponseType("code")}async invokeApiMethod(i){if(!i.accessToken){const o=(await this.tokenManager.getTokens()).accessToken;i.accessToken=o==null?void 0:o.accessToken}return K(this,i)}async revokeAccessToken(i){if(!i){const o=await this.tokenManager.getTokens();i=o.accessToken;const a=this.tokenManager.getStorageKeyByType("accessToken");this.tokenManager.remove(a),this.options.dpop&&await ir("access",o)}return i?this.token.revoke(i):Promise.resolve(null)}async revokeRefreshToken(i){if(!i){const o=await this.tokenManager.getTokens();i=o.refreshToken;const a=this.tokenManager.getStorageKeyByType("refreshToken");this.tokenManager.remove(a),this.options.dpop&&await ir("refresh",o)}return i?this.token.revoke(i):Promise.resolve(null)}getSignOutRedirectUrl(i={}){let{idToken:o,postLogoutRedirectUri:a,state:c}=i;if(o||(o=this.tokenManager.getTokensSync().idToken),!o)return"";a===void 0&&(a=this.options.postLogoutRedirectUri);const u=ne(this).logoutUrl,l=o.idToken;let f=u+"?id_token_hint="+encodeURIComponent(l);return a&&(f+="&post_logout_redirect_uri="+encodeURIComponent(a)),c&&(f+="&state="+encodeURIComponent(c)),f}async signOut(i){var o;i=Object.assign({},i);const a=window.location.origin,c=window.location.href,u=i.postLogoutRedirectUri===null?null:i.postLogoutRedirectUri||this.options.postLogoutRedirectUri||a,l=i==null?void 0:i.state;let f=i.accessToken,d=i.refreshToken;const g=i.revokeAccessToken!==!1,w=i.revokeRefreshToken!==!1;w&&typeof d>"u"&&(d=this.tokenManager.getTokensSync().refreshToken),g&&typeof f>"u"&&(f=this.tokenManager.getTokensSync().accessToken),i.idToken||(i.idToken=this.tokenManager.getTokensSync().idToken),w&&d&&await this.revokeRefreshToken(d),g&&f&&await this.revokeAccessToken(f);const m=(o=f==null?void 0:f.dpopPairId)!==null&&o!==void 0?o:d==null?void 0:d.dpopPairId;this.options.dpop&&m&&await tn(m);const T=this.getSignOutRedirectUrl(Object.assign(Object.assign({},i),{postLogoutRedirectUri:u}));if(T)return i.clearTokensBeforeRedirect?this.tokenManager.clear():this.tokenManager.addPendingRemoveFlags(),window.location.assign(T),!0;{const y=await this.closeSession(),k=new URL(u||a);return l&&k.searchParams.append("state",l),u===c?window.location.href=k.href:window.location.assign(k.href),y}}async getDPoPAuthorizationHeaders(i){if(!this.options.dpop)throw new p("DPoP is not configured for this client instance");let{accessToken:o}=i;if(o||(o=this.tokenManager.getTokensSync().accessToken),!o)throw new p("AccessToken is required to generate a DPoP Proof");const a=await Ln(o==null?void 0:o.dpopPairId),c=await gs(Object.assign(Object.assign({},i),{keyPair:a,accessToken:o.accessToken}));return{Authorization:`DPoP ${o.accessToken}`,Dpop:c}}async clearDPoPStorage(i=!1){var o,a;if(i)return Ko();const c=await this.tokenManager.getTokens(),u=((o=c.accessToken)===null||o===void 0?void 0:o.dpopPairId)||((a=c.refreshToken)===null||a===void 0?void 0:a.dpopPairId);u&&await tn(u)}parseUseDPoPNonceError(i){var o;const a=V.getWWWAuthenticateHeader(i),c=V.parseHeader(a??"");if(fs(c)){let u=null;return Or(i==null?void 0:i.get)&&(u=i.get("DPoP-Nonce")),u=(o=u??i["dpop-nonce"])!==null&&o!==void 0?o:i["DPoP-Nonce"],u}return null}},n.crypto=jo,n}var rt={exports:{}},ur;function Ra(){if(ur)return rt.exports;ur=1;class t extends Error{constructor(r){super(r||"Promise was canceled"),this.name="CancelError"}get isCanceled(){return!0}}class e{static fn(r){return(...s)=>new e((i,o,a)=>{s.push(a),r(...s).then(i,o)})}constructor(r){this._cancelHandlers=[],this._isPending=!0,this._isCanceled=!1,this._rejectOnCancel=!0,this._promise=new Promise((s,i)=>{this._reject=i;const o=u=>{(!this._isCanceled||!c.shouldReject)&&(this._isPending=!1,s(u))},a=u=>{this._isPending=!1,i(u)},c=u=>{if(!this._isPending)throw new Error("The `onCancel` handler was attached after the promise settled.");this._cancelHandlers.push(u)};return Object.defineProperties(c,{shouldReject:{get:()=>this._rejectOnCancel,set:u=>{this._rejectOnCancel=u}}}),r(o,a,c)})}then(r,s){return this._promise.then(r,s)}catch(r){return this._promise.catch(r)}finally(r){return this._promise.finally(r)}cancel(r){if(!(!this._isPending||this._isCanceled)){if(this._isCanceled=!0,this._cancelHandlers.length>0)try{for(const s of this._cancelHandlers)s()}catch(s){this._reject(s);return}this._rejectOnCancel&&this._reject(new t(r))}}get isCanceled(){return this._isCanceled}}return Object.setPrototypeOf(e.prototype,Promise.prototype),rt.exports=e,rt.exports.CancelError=t,rt.exports}var xa=Ra();const ja=pn(xa);/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ua=null,lr={updateAuthStatePromise:null,canceledTimes:0},Ft="authStateChange",Da=10,La=(t,e)=>t?t.isAuthenticated===e.isAuthenticated&&JSON.stringify(t.idToken)===JSON.stringify(e.idToken)&&JSON.stringify(t.accessToken)===JSON.stringify(e.accessToken)&&t.error===e.error:!1;class Na{constructor(e){if(!e.emitter)throw new p("Emitter should be initialized before AuthStateManager");this._sdk=e,this._pending=Object.assign({},lr),this._authState=Ua,this._logOptions={},this._prevAuthState=null,this._transformQueue=new Un({quiet:!0}),e.tokenManager.on(ce,(n,r)=>{this._setLogOptions({event:ce,key:n,token:r}),this.updateAuthState()}),e.tokenManager.on(ue,(n,r)=>{this._setLogOptions({event:ue,key:n,token:r}),this.updateAuthState()})}_setLogOptions(e){this._logOptions=e}getAuthState(){return this._authState}getPreviousAuthState(){return this._prevAuthState}async updateAuthState(){const{transformAuthState:e,devMode:n}=this._sdk.options,r=a=>{const{event:c,key:u,token:l}=this._logOptions;ve().group(`OKTA-AUTH-JS:updateAuthState: Event:${c} Status:${a}`),ve().log(u,l),ve().log("Current authState",this._authState),ve().groupEnd(),this._logOptions={}},s=a=>{if(La(this._authState,a)){n&&r("unchanged");return}this._prevAuthState=this._authState,this._authState=a,this._sdk.emitter.emit(Ft,Object.assign({},a)),n&&r("emitted")},i=a=>this._pending.updateAuthStatePromise.then(()=>{const c=this._pending.updateAuthStatePromise;return c&&c!==a?i(c):this.getAuthState()});if(this._pending.updateAuthStatePromise){if(this._pending.canceledTimes>=Da)return n&&r("terminated"),i(this._pending.updateAuthStatePromise);this._pending.updateAuthStatePromise.cancel()}const o=new ja((a,c,u)=>{u.shouldReject=!1,u(()=>{this._pending.updateAuthStatePromise=null,this._pending.canceledTimes=this._pending.canceledTimes+1,n&&r("canceled")});const l=f=>{if(o.isCanceled){a();return}s(f),a(),this._pending=Object.assign({},lr)};this._sdk.isAuthenticated().then(()=>{if(o.isCanceled){a();return}const{accessToken:f,idToken:d,refreshToken:g}=this._sdk.tokenManager.getTokensSync(),w={accessToken:f,idToken:d,refreshToken:g,isAuthenticated:!!(f&&d)};(e?this._transformQueue.push(e,null,this._sdk,w):Promise.resolve(w)).then(T=>l(T)).catch(T=>l({accessToken:f,idToken:d,refreshToken:g,isAuthenticated:!1,error:T}))})});return this._pending.updateAuthStatePromise=o,i(o)}subscribe(e){this._sdk.emitter.on(Ft,e)}unsubscribe(e){this._sdk.emitter.off(Ft,e)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Fa{constructor(e,n={}){this.started=!1,this.tokenManager=e,this.options=n,this.renewTimeQueue=[],this.onTokenExpiredHandler=this.onTokenExpiredHandler.bind(this)}shouldThrottleRenew(){let e=!1;if(this.renewTimeQueue.push(Date.now()),this.renewTimeQueue.length>=10){const n=this.renewTimeQueue.shift();e=this.renewTimeQueue[this.renewTimeQueue.length-1]-n<30*1e3}return e}requiresLeadership(){return!!this.options.syncStorage&&M()}processExpiredTokens(){const n=this.tokenManager.getStorage().getStorage();Object.keys(n).forEach(r=>{const s=n[r];!ae(s)&&this.tokenManager.hasExpired(s)&&this.onTokenExpiredHandler(r)})}onTokenExpiredHandler(e){if(this.options.autoRenew)if(this.shouldThrottleRenew()){const n=new p("Too many token renew requests");this.tokenManager.emitError(n)}else this.tokenManager.renew(e).catch(()=>{});else this.options.autoRemove&&this.tokenManager.remove(e)}canStart(){return(!!this.options.autoRenew||!!this.options.autoRemove)&&!this.started}async start(){this.canStart()&&(this.tokenManager.on(rn,this.onTokenExpiredHandler),this.tokenManager.isStarted()&&this.processExpiredTokens(),this.started=!0)}async stop(){this.started&&(this.tokenManager.off(rn,this.onTokenExpiredHandler),this.renewTimeQueue=[],this.started=!1)}isStarted(){return this.started}}function Ha(t){return t&&typeof t.then=="function"}Promise.resolve(!1);var Va=Promise.resolve(!0),G=Promise.resolve();function le(t,e){return t||(t=0),new Promise(function(n){return setTimeout(function(){return n(e)},t)})}function Ba(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function Ke(){return Math.random().toString(36).substring(2)}var dr=0,Ht=0;function It(){var t=new Date().getTime();return t===dr?(Ht++,t*1e3+Ht):(dr=t,Ht=0,t*1e3)}function qa(){return typeof navigator<"u"&&typeof navigator.locks<"u"&&typeof navigator.locks.request=="function"}var Wa=It,Ka="native";function $a(t){var e={messagesCallback:null,bc:new BroadcastChannel(t),subFns:[]};return e.bc.onmessage=function(n){e.messagesCallback&&e.messagesCallback(n.data)},e}function za(t){t.bc.close(),t.subFns=[]}function Ga(t,e){try{return t.bc.postMessage(e,!1),G}catch(n){return Promise.reject(n)}}function Ja(t,e){t.messagesCallback=e}function Qa(){if((typeof window<"u"||typeof self<"u")&&typeof BroadcastChannel=="function"){if(BroadcastChannel._pubkey)throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");return!0}else return!1}function Ya(){return 150}var Xa={create:$a,close:za,onMessage:Ja,postMessage:Ga,canBeUsed:Qa,type:Ka,averageResponseTime:Ya,microSeconds:Wa},ks=(function(){function t(e){this.ttl=e,this.map=new Map,this._to=!1}return t.prototype.has=function(e){return this.map.has(e)},t.prototype.add=function(e){var n=this;this.map.set(e,As()),this._to||(this._to=!0,setTimeout(function(){n._to=!1,Za(n)},0))},t.prototype.clear=function(){this.map.clear()},t})();function Za(t){for(var e=As()-t.ttl,n=t.map[Symbol.iterator]();;){var r=n.next().value;if(!r)return;var s=r[0],i=r[1];if(i<e)t.map.delete(s);else return}}function As(){return new Date().getTime()}function Wn(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=JSON.parse(JSON.stringify(t));return typeof e.webWorkerSupport>"u"&&(e.webWorkerSupport=!0),e.idb||(e.idb={}),e.idb.ttl||(e.idb.ttl=1e3*45),e.idb.fallbackInterval||(e.idb.fallbackInterval=150),t.idb&&typeof t.idb.onclose=="function"&&(e.idb.onclose=t.idb.onclose),e.localstorage||(e.localstorage={}),e.localstorage.removeTimeout||(e.localstorage.removeTimeout=1e3*60),t.methods&&(e.methods=t.methods),e.node||(e.node={}),e.node.ttl||(e.node.ttl=1e3*60*2),e.node.maxParallelWrites||(e.node.maxParallelWrites=2048),typeof e.node.useFastPath>"u"&&(e.node.useFastPath=!0),e}var ec=It,tc="pubkey.broadcast-channel-0-",J="messages",Mt={durability:"relaxed"},nc="idb";function Es(){if(typeof indexedDB<"u")return indexedDB;if(typeof window<"u"){if(typeof window.mozIndexedDB<"u")return window.mozIndexedDB;if(typeof window.webkitIndexedDB<"u")return window.webkitIndexedDB;if(typeof window.msIndexedDB<"u")return window.msIndexedDB}return!1}function Kn(t){t.commit&&t.commit()}function rc(t){var e=Es(),n=tc+t,r=e.open(n);return r.onupgradeneeded=function(s){var i=s.target.result;i.createObjectStore(J,{keyPath:"id",autoIncrement:!0})},new Promise(function(s,i){r.onerror=function(o){return i(o)},r.onsuccess=function(){s(r.result)}})}function sc(t,e,n){var r=new Date().getTime(),s={uuid:e,time:r,data:n},i=t.transaction([J],"readwrite",Mt);return new Promise(function(o,a){i.oncomplete=function(){return o()},i.onerror=function(u){return a(u)};var c=i.objectStore(J);c.add(s),Kn(i)})}function ic(t,e){var n=t.transaction(J,"readonly",Mt),r=n.objectStore(J),s=[],i=IDBKeyRange.bound(e+1,1/0);if(r.getAll){var o=r.getAll(i);return new Promise(function(c,u){o.onerror=function(l){return u(l)},o.onsuccess=function(l){c(l.target.result)}})}function a(){try{return i=IDBKeyRange.bound(e+1,1/0),r.openCursor(i)}catch{return r.openCursor()}}return new Promise(function(c,u){var l=a();l.onerror=function(f){return u(f)},l.onsuccess=function(f){var d=f.target.result;d?d.value.id<e+1?d.continue(e+1):(s.push(d.value),d.continue()):(Kn(n),c(s))}})}function oc(t,e){if(t.closed)return Promise.resolve([]);var n=t.db.transaction(J,"readwrite",Mt),r=n.objectStore(J);return Promise.all(e.map(function(s){var i=r.delete(s);return new Promise(function(o){i.onsuccess=function(){return o()}})}))}function ac(t,e){var n=new Date().getTime()-e,r=t.transaction(J,"readonly",Mt),s=r.objectStore(J),i=[];return new Promise(function(o){s.openCursor().onsuccess=function(a){var c=a.target.result;if(c){var u=c.value;u.time<n?(i.push(u),c.continue()):(Kn(r),o(i))}else o(i)}})}function cc(t){return ac(t.db,t.options.idb.ttl).then(function(e){return oc(t,e.map(function(n){return n.id}))})}function uc(t,e){return e=Wn(e),rc(t).then(function(n){var r={closed:!1,lastCursorId:0,channelName:t,options:e,uuid:Ke(),eMIs:new ks(e.idb.ttl*2),writeBlockPromise:G,messagesCallback:null,readQueuePromises:[],db:n};return n.onclose=function(){r.closed=!0,e.idb.onclose&&e.idb.onclose()},Ps(r),r})}function Ps(t){t.closed||Is(t).then(function(){return le(t.options.idb.fallbackInterval)}).then(function(){return Ps(t)})}function lc(t,e){return!(t.uuid===e.uuid||e.eMIs.has(t.id)||t.data.time<e.messagesCallbackTime)}function Is(t){return t.closed||!t.messagesCallback?G:ic(t.db,t.lastCursorId).then(function(e){var n=e.filter(function(r){return!!r}).map(function(r){return r.id>t.lastCursorId&&(t.lastCursorId=r.id),r}).filter(function(r){return lc(r,t)}).sort(function(r,s){return r.time-s.time});return n.forEach(function(r){t.messagesCallback&&(t.eMIs.add(r.id),t.messagesCallback(r.data))}),G})}function dc(t){t.closed=!0,t.db.close()}function hc(t,e){return t.writeBlockPromise=t.writeBlockPromise.then(function(){return sc(t.db,t.uuid,e)}).then(function(){Ba(0,10)===0&&cc(t)}),t.writeBlockPromise}function fc(t,e,n){t.messagesCallbackTime=n,t.messagesCallback=e,Is(t)}function pc(){return!!Es()}function gc(t){return t.idb.fallbackInterval*2}var mc={create:uc,close:dc,onMessage:fc,postMessage:hc,canBeUsed:pc,type:nc,averageResponseTime:gc,microSeconds:ec},vc=It,wc="pubkey.broadcastChannel-",yc="localstorage";function Ms(){var t;if(typeof window>"u")return null;try{t=window.localStorage,t=window["ie8-eventlistener/storage"]||window.localStorage}catch{}return t}function Cs(t){return wc+t}function Tc(t,e){return new Promise(function(n){le().then(function(){var r=Cs(t.channelName),s={token:Ke(),time:new Date().getTime(),data:e,uuid:t.uuid},i=JSON.stringify(s);Ms().setItem(r,i);var o=document.createEvent("Event");o.initEvent("storage",!0,!0),o.key=r,o.newValue=i,window.dispatchEvent(o),n()})})}function bc(t,e){var n=Cs(t),r=function(i){i.key===n&&e(JSON.parse(i.newValue))};return window.addEventListener("storage",r),r}function Sc(t){window.removeEventListener("storage",t)}function Oc(t,e){if(e=Wn(e),!Rs())throw new Error("BroadcastChannel: localstorage cannot be used");var n=Ke(),r=new ks(e.localstorage.removeTimeout),s={channelName:t,uuid:n,eMIs:r};return s.listener=bc(t,function(i){s.messagesCallback&&i.uuid!==n&&(!i.token||r.has(i.token)||i.data.time&&i.data.time<s.messagesCallbackTime||(r.add(i.token),s.messagesCallback(i.data)))}),s}function _c(t){Sc(t.listener)}function kc(t,e,n){t.messagesCallbackTime=n,t.messagesCallback=e}function Rs(){var t=Ms();if(!t)return!1;try{var e="__broadcastchannel_check";t.setItem(e,"works"),t.removeItem(e)}catch{return!1}return!0}function Ac(){var t=120,e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")?t*2:t}var Ec={create:Oc,close:_c,onMessage:kc,postMessage:Tc,canBeUsed:Rs,type:yc,averageResponseTime:Ac,microSeconds:vc},Pc=It,Ic="simulate",$n=new Set;function Mc(t){var e={name:t,messagesCallback:null};return $n.add(e),e}function Cc(t){$n.delete(t)}function Rc(t,e){return new Promise(function(n){return setTimeout(function(){var r=Array.from($n);r.filter(function(s){return s.name===t.name}).filter(function(s){return s!==t}).filter(function(s){return!!s.messagesCallback}).forEach(function(s){return s.messagesCallback(e)}),n()},5)})}function xc(t,e){t.messagesCallback=e}function jc(){return!0}function Uc(){return 5}var Dc={create:Mc,close:Cc,onMessage:xc,postMessage:Rc,canBeUsed:jc,type:Ic,averageResponseTime:Uc,microSeconds:Pc},hr=[Xa,mc,Ec];function Lc(t){var e=[].concat(t.methods,hr).filter(Boolean);if(t.type){if(t.type==="simulate")return Dc;var n=e.find(function(s){return s.type===t.type});if(n)return n;throw new Error("method-type "+t.type+" not found")}t.webWorkerSupport||(e=e.filter(function(s){return s.type!=="idb"}));var r=e.find(function(s){return s.canBeUsed()});if(r)return r;throw new Error("No usable method found in "+JSON.stringify(hr.map(function(s){return s.type})))}var xs=new Set,Nc=0,Ct=function(e,n){this.id=Nc++,xs.add(this),this.name=e,this.options=Wn(n),this.method=Lc(this.options),this._iL=!1,this._onML=null,this._addEL={message:[],internal:[]},this._uMP=new Set,this._befC=[],this._prepP=null,Fc(this)};Ct._pubkey=!0;Ct.prototype={postMessage:function(e){if(this.closed)throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed "+JSON.stringify(e));return fr(this,"message",e)},postInternal:function(e){return fr(this,"internal",e)},set onmessage(t){var e=this.method.microSeconds(),n={time:e,fn:t};gr(this,"message",this._onML),t&&typeof t=="function"?(this._onML=n,pr(this,"message",n)):this._onML=null},addEventListener:function(e,n){var r=this.method.microSeconds(),s={time:r,fn:n};pr(this,e,s)},removeEventListener:function(e,n){var r=this._addEL[e].find(function(s){return s.fn===n});gr(this,e,r)},close:function(){var e=this;if(!this.closed){xs.delete(this),this.closed=!0;var n=this._prepP?this._prepP:G;return this._onML=null,this._addEL.message=[],n.then(function(){return Promise.all(Array.from(e._uMP))}).then(function(){return Promise.all(e._befC.map(function(r){return r()}))}).then(function(){return e.method.close(e._state)})}},get type(){return this.method.type},get isClosed(){return this.closed}};function fr(t,e,n){var r=t.method.microSeconds(),s={time:r,type:e,data:n},i=t._prepP?t._prepP:G;return i.then(function(){var o=t.method.postMessage(t._state,s);return t._uMP.add(o),o.catch().then(function(){return t._uMP.delete(o)}),o})}function Fc(t){var e=t.method.create(t.name,t.options);Ha(e)?(t._prepP=e,e.then(function(n){t._state=n})):t._state=e}function js(t){return t._addEL.message.length>0||t._addEL.internal.length>0}function pr(t,e,n){t._addEL[e].push(n),Hc(t)}function gr(t,e,n){t._addEL[e]=t._addEL[e].filter(function(r){return r!==n}),Vc(t)}function Hc(t){if(!t._iL&&js(t)){var e=function(s){t._addEL[s.type].forEach(function(i){var o=1e5,a=i.time-o;s.time>=a&&i.fn(s.data)})},n=t.method.microSeconds();t._prepP?t._prepP.then(function(){t._iL=!0,t.method.onMessage(t._state,e,n)}):(t._iL=!0,t.method.onMessage(t._state,e,n))}}function Vc(t){if(t._iL&&!js(t)){t._iL=!1;var e=t.method.microSeconds();t.method.onMessage(t._state,null,e)}}function Bc(t){if(typeof WorkerGlobalScope=="function"&&self instanceof WorkerGlobalScope){var e=self.close.bind(self);self.close=function(){return t(),e()}}else{if(typeof window.addEventListener!="function")return;window.addEventListener("beforeunload",function(){t()},!0),window.addEventListener("unload",function(){t()},!0)}}function qc(t){process.on("exit",function(){return t()}),process.on("beforeExit",function(){return t().then(function(){return process.exit()})}),process.on("SIGINT",function(){return t().then(function(){return process.exit()})}),process.on("uncaughtException",function(e){return t().then(function(){console.trace(e),process.exit(101)})})}var Wc=Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",Kc=Wc?qc:Bc,Le=new Set,mr=!1;function $c(){mr||(mr=!0,Kc(Gc))}function zc(t){if($c(),typeof t!="function")throw new Error("Listener is no function");Le.add(t);var e={remove:function(){return Le.delete(t)},run:function(){return Le.delete(t),t()}};return e}function Gc(){var t=[];return Le.forEach(function(e){t.push(e()),Le.delete(e)}),Promise.all(t)}function fe(t,e){var n={context:"leader",action:e,token:t.token};return t.broadcastChannel.postInternal(n)}function Us(t){t.isLeader=!0,t._hasLeader=!0;var e=zc(function(){return t.die()});t._unl.push(e);var n=function(s){s.context==="leader"&&s.action==="apply"&&fe(t,"tell"),s.context==="leader"&&s.action==="tell"&&!t._dpLC&&(t._dpLC=!0,t._dpL(),fe(t,"tell"))};return t.broadcastChannel.addEventListener("internal",n),t._lstns.push(n),fe(t,"tell")}var Ds=function(e,n){var r=this;this.broadcastChannel=e,e._befC.push(function(){return r.die()}),this._options=n,this.isLeader=!1,this.isDead=!1,this.token=Ke(),this._lstns=[],this._unl=[],this._dpL=function(){},this._dpLC=!1,this._wKMC={},this.lN="pubkey-bc||"+e.method.type+"||"+e.name};Ds.prototype={hasLeader:function(){var e=this;return navigator.locks.query().then(function(n){var r=n.held?n.held.filter(function(s){return s.name===e.lN}):[];return!!(r&&r.length>0)})},awaitLeadership:function(){var e=this;if(!this._wLMP){this._wKMC.c=new AbortController;var n=new Promise(function(r,s){e._wKMC.res=r,e._wKMC.rej=s});this._wLMP=new Promise(function(r){navigator.locks.request(e.lN,{signal:e._wKMC.c.signal},function(){return e._wKMC.c=void 0,Us(e),r(),n}).catch(function(){})})}return this._wLMP},set onduplicate(t){},die:function(){var e=this;return this._lstns.forEach(function(n){return e.broadcastChannel.removeEventListener("internal",n)}),this._lstns=[],this._unl.forEach(function(n){return n.remove()}),this._unl=[],this.isLeader&&(this.isLeader=!1),this.isDead=!0,this._wKMC.res&&this._wKMC.res(),this._wKMC.c&&this._wKMC.c.abort("LeaderElectionWebLock.die() called"),fe(this,"death")}};var Ls=function(e,n){var r=this;this.broadcastChannel=e,this._options=n,this.isLeader=!1,this._hasLeader=!1,this.isDead=!1,this.token=Ke(),this._aplQ=G,this._aplQC=0,this._unl=[],this._lstns=[],this._dpL=function(){},this._dpLC=!1;var s=function(o){o.context==="leader"&&(o.action==="death"&&(r._hasLeader=!1),o.action==="tell"&&(r._hasLeader=!0))};this.broadcastChannel.addEventListener("internal",s),this._lstns.push(s)};Ls.prototype={hasLeader:function(){return Promise.resolve(this._hasLeader)},applyOnce:function(e){var n=this;if(this.isLeader)return le(0,!0);if(this.isDead)return le(0,!1);if(this._aplQC>1)return this._aplQ;var r=function(){if(n.isLeader)return Va;var i=!1,o,a=new Promise(function(l){o=function(){i=!0,l()}}),c=function(f){f.context==="leader"&&f.token!=n.token&&(f.action==="apply"&&f.token>n.token&&o(),f.action==="tell"&&(o(),n._hasLeader=!0))};n.broadcastChannel.addEventListener("internal",c);var u=e?n._options.responseTime*4:n._options.responseTime;return fe(n,"apply").then(function(){return Promise.race([le(u),a.then(function(){return Promise.reject(new Error)})])}).then(function(){return fe(n,"apply")}).then(function(){return Promise.race([le(u),a.then(function(){return Promise.reject(new Error)})])}).catch(function(){}).then(function(){return n.broadcastChannel.removeEventListener("internal",c),i?!1:Us(n).then(function(){return!0})})};return this._aplQC=this._aplQC+1,this._aplQ=this._aplQ.then(function(){return r()}).then(function(){n._aplQC=n._aplQC-1}),this._aplQ.then(function(){return n.isLeader})},awaitLeadership:function(){return this._aLP||(this._aLP=Jc(this)),this._aLP},set onduplicate(t){this._dpL=t},die:function(){var e=this;return this._lstns.forEach(function(n){return e.broadcastChannel.removeEventListener("internal",n)}),this._lstns=[],this._unl.forEach(function(n){return n.remove()}),this._unl=[],this.isLeader&&(this._hasLeader=!1,this.isLeader=!1),this.isDead=!0,fe(this,"death")}};function Jc(t){return t.isLeader?G:new Promise(function(e){var n=!1;function r(){n||(n=!0,t.broadcastChannel.removeEventListener("internal",i),e(!0))}t.applyOnce().then(function(){t.isLeader&&r()});var s=function o(){return le(t._options.fallbackInterval).then(function(){if(!(t.isDead||n))if(t.isLeader)r();else return t.applyOnce(!0).then(function(){t.isLeader?r():o()})})};s();var i=function(a){a.context==="leader"&&a.action==="death"&&(t._hasLeader=!1,t.applyOnce().then(function(){t.isLeader&&r()}))};t.broadcastChannel.addEventListener("internal",i),t._lstns.push(i)})}function Qc(t,e){return t||(t={}),t=JSON.parse(JSON.stringify(t)),t.fallbackInterval||(t.fallbackInterval=3e3),t.responseTime||(t.responseTime=e.method.averageResponseTime(e.options)),t}function Yc(t,e){if(t._leaderElector)throw new Error("BroadcastChannel already has a leader-elector");e=Qc(e,t);var n=qa()?new Ds(t,e):new Ls(t,e);return t._befC.push(function(){return n.die()}),t._leaderElector=n,n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Xc{constructor(e,n={}){this.started=!1,this.enablePostMessage=!0,this.tokenManager=e,this.options=n,this.onTokenAddedHandler=this.onTokenAddedHandler.bind(this),this.onTokenRemovedHandler=this.onTokenRemovedHandler.bind(this),this.onTokenRenewedHandler=this.onTokenRenewedHandler.bind(this),this.onSetStorageHandler=this.onSetStorageHandler.bind(this),this.onSyncMessageHandler=this.onSyncMessageHandler.bind(this)}requiresLeadership(){return!1}isStarted(){return this.started}canStart(){return!!this.options.syncStorage&&M()&&!this.started}async start(){if(!this.canStart())return;const{syncChannelName:e}=this.options;try{this.channel=new Ct(e)}catch{throw new p("SyncStorageService is not supported in current browser.")}this.tokenManager.on(ce,this.onTokenAddedHandler),this.tokenManager.on(ue,this.onTokenRemovedHandler),this.tokenManager.on(Re,this.onTokenRenewedHandler),this.tokenManager.on(xe,this.onSetStorageHandler),this.channel.addEventListener("message",this.onSyncMessageHandler),this.started=!0}async stop(){var e,n;this.started&&(this.tokenManager.off(ce,this.onTokenAddedHandler),this.tokenManager.off(ue,this.onTokenRemovedHandler),this.tokenManager.off(Re,this.onTokenRenewedHandler),this.tokenManager.off(xe,this.onSetStorageHandler),(e=this.channel)===null||e===void 0||e.removeEventListener("message",this.onSyncMessageHandler),await((n=this.channel)===null||n===void 0?void 0:n.close()),this.channel=void 0,this.started=!1)}onTokenAddedHandler(e,n){var r;this.enablePostMessage&&((r=this.channel)===null||r===void 0||r.postMessage({type:ce,key:e,token:n}))}onTokenRemovedHandler(e,n){var r;this.enablePostMessage&&((r=this.channel)===null||r===void 0||r.postMessage({type:ue,key:e,token:n}))}onTokenRenewedHandler(e,n,r){var s;this.enablePostMessage&&((s=this.channel)===null||s===void 0||s.postMessage({type:Re,key:e,token:n,oldToken:r}))}onSetStorageHandler(e){var n;(n=this.channel)===null||n===void 0||n.postMessage({type:xe,storage:e})}onSyncMessageHandler(e){switch(this.enablePostMessage=!1,e.type){case xe:this.tokenManager.getStorage().setStorage(e.storage);break;case ce:this.tokenManager.emitAdded(e.key,e.token),this.tokenManager.setExpireEventTimeout(e.key,e.token);break;case ue:this.tokenManager.clearExpireEventTimeout(e.key),this.tokenManager.emitRemoved(e.key,e.token);break;case Re:this.tokenManager.emitRenewed(e.key,e.token,e.oldToken);break}this.enablePostMessage=!0}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Zc{constructor(e={}){this.started=!1,this.options=e,this.onLeaderDuplicate=this.onLeaderDuplicate.bind(this),this.onLeader=this.onLeader.bind(this)}onLeaderDuplicate(){}async onLeader(){var e,n;await((n=(e=this.options).onLeader)===null||n===void 0?void 0:n.call(e))}isLeader(){var e;return!!(!((e=this.elector)===null||e===void 0)&&e.isLeader)}hasLeader(){var e;return!!(!((e=this.elector)===null||e===void 0)&&e.hasLeader)}async start(){if(this.canStart()){const{electionChannelName:e}=this.options;this.channel=new Ct(e),this.elector=Yc(this.channel),this.elector.onduplicate=this.onLeaderDuplicate,this.elector.awaitLeadership().then(this.onLeader),this.started=!0}}async stop(){this.started&&(this.elector&&(await this.elector.die(),this.elector=void 0),this.channel&&(this.channel.postInternal=()=>Promise.resolve(),await this.channel.close(),this.channel=void 0),this.started=!1)}requiresLeadership(){return!1}isStarted(){return this.started}canStart(){return M()&&!this.started}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const vr=()=>Math.floor(Date.now()/1e3);class eu{constructor(e,n={}){this.started=!1,this.lastHidden=-1,this.tokenManager=e,this.options=n,this.onPageVisbilityChange=this._onPageVisbilityChange.bind(this)}_onPageVisbilityChange(){if(document.hidden)this.lastHidden=vr();else if(this.lastHidden>0&&vr()-this.lastHidden>=this.options.tabInactivityDuration){const{accessToken:e,idToken:n}=this.tokenManager.getTokensSync();if(e&&this.tokenManager.hasExpired(e)){const r=this.tokenManager.getStorageKeyByType("accessToken");this.tokenManager.renew(r).catch(()=>{})}else if(n&&this.tokenManager.hasExpired(n)){const r=this.tokenManager.getStorageKeyByType("idToken");this.tokenManager.renew(r).catch(()=>{})}}}async start(){this.canStart()&&document&&(document.addEventListener("visibilitychange",this.onPageVisbilityChange),this.started=!0)}async stop(){document&&(document.removeEventListener("visibilitychange",this.onPageVisbilityChange),this.started=!1)}canStart(){return M()&&!!this.options.autoRenew&&!!this.options.renewOnTabActivation&&!this.started}requiresLeadership(){return!1}isStarted(){return this.started}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Ns="autoRenew",Fs="syncStorage",ct="leaderElection",Hs="renewOnTabActivation";class ke{constructor(e,n={}){this.sdk=e,this.onLeader=this.onLeader.bind(this);const{autoRenew:r,autoRemove:s,syncStorage:i}=e.tokenManager.getOptions();n.electionChannelName=n.electionChannelName||n.broadcastChannelName,this.options=Object.assign({},ke.defaultOptions,{autoRenew:r,autoRemove:s,syncStorage:i},{electionChannelName:`${e.options.clientId}-election`,syncChannelName:`${e.options.clientId}-sync`},B(n)),this.started=!1,this.services=new Map,ke.knownServices.forEach(o=>{const a=this.createService(o);a&&this.services.set(o,a)})}async onLeader(){this.started&&await this.startServices()}isLeader(){var e;return(e=this.getService(ct))===null||e===void 0?void 0:e.isLeader()}isLeaderRequired(){return[...this.services.values()].some(e=>e.canStart()&&e.requiresLeadership())}async start(){this.started||(await this.startServices(),this.started=!0)}async stop(){await this.stopServices(),this.started=!1}getService(e){return this.services.get(e)}async startServices(){for(const[e,n]of this.services.entries())this.canStartService(e,n)&&await n.start()}async stopServices(){for(const e of this.services.values())await e.stop()}canStartService(e,n){let r=n.canStart()&&!n.isStarted();return e===ct?r&&(r=this.isLeaderRequired()):n.requiresLeadership()&&r&&(r=this.isLeader()),r}createService(e){const n=this.sdk.tokenManager;let r;switch(e){case ct:r=new Zc(Object.assign(Object.assign({},this.options),{onLeader:this.onLeader}));break;case Ns:r=new Fa(n,Object.assign({},this.options));break;case Fs:r=new Xc(n,Object.assign({},this.options));break;case Hs:r=new eu(n,Object.assign({},this.options));break;default:throw new Error(`Unknown service ${e}`)}return r}}ke.knownServices=[Ns,Fs,ct,Hs];ke.defaultOptions={autoRenew:!0,autoRemove:!0,syncStorage:!0,renewOnTabActivation:!0,tabInactivityDuration:1800};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function tu(t){return class extends t{constructor(...n){super(...n),this.authStateManager=new Na(this),this.serviceManager=new ke(this,this.options.services)}async start(){await this.serviceManager.start(),this.tokenManager.start(),this.token.isLoginRedirect()||await this.authStateManager.updateAuthState()}async stop(){this.tokenManager.stop(),await this.serviceManager.stop()}async handleRedirect(n){await this.handleLoginRedirect(void 0,n)}async handleLoginRedirect(n,r){let s=this.options.state;if(n)this.tokenManager.setTokens(n),r=r||this.getOriginalUri(this.options.state);else if(this.isLoginRedirect())try{s=(await nn(this,{})).state,r=r||this.getOriginalUri(s),await this.storeTokensFromRedirect()}catch(o){throw await this.authStateManager.updateAuthState(),o}else return;await this.authStateManager.updateAuthState(),this.removeOriginalUri(s);const{restoreOriginalUri:i}=this.options;i?await i(this,r):r&&window.location.replace(r)}handleIDPPopupRedirect(n=window.location.href){const r=nn(this,{responseMode:"query",url:n});if(r.state){const s=new BroadcastChannel(`popup-callback:${r.state}`);s.postMessage(r),s.close()}else throw new p("Unable to parse auth code params")}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function nu(t){return t.session.get().then(function(e){return e.status==="ACTIVE"}).catch(function(){return!1})}function ru(t){return Oe(t,"/api/v1/sessions/me",{withCredentials:!0}).then(function(e){var n=je(e,"_links");return n.refresh=function(){return re(t,Bt(e,"refresh").href,{},{withCredentials:!0})},n.user=function(){return Oe(t,Bt(e,"user").href,{withCredentials:!0})},n}).catch(function(){return{status:"INACTIVE"}})}function su(t){return K(t,{url:t.getIssuerOrigin()+"/api/v1/sessions/me",method:"DELETE",withCredentials:!0})}function iu(t){return re(t,"/api/v1/sessions/me/lifecycle/refresh",{},{withCredentials:!0})}function ou(t,e,n){n=n||window.location.href,window.location.assign(t.getIssuerOrigin()+"/login/sessionCookieRedirect"+Q({checkAccountSetupComplete:!0,token:e,redirectUrl:n}))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function au(t){return{close:su.bind(null,t),exists:nu.bind(null,t),get:ru.bind(null,t),refresh:iu.bind(null,t),setCookieAndRedirect:ou.bind(null,t)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function zn(t){return class extends t{constructor(...n){super(...n),this.session=au(this)}closeSession(){return this.session.close().then(async()=>(this.clearStorage(),!0)).catch(function(n){if(n.name==="AuthApiError"&&n.errorCode==="E0000007")return!1;throw n})}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Vs(t,e,n){const r=In(e),s=Mn(r,t),i=Cn(s),o=zn(i),a=_s(o,n);return tu(a)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const cu=(t,e)=>e.source===t.contentWindow;function Gn(t,e){var n;if(!Nr())return Promise.reject(new p("Fingerprinting is not supported on this device"));const r=(n=e==null?void 0:e.container)!==null&&n!==void 0?n:document.body;let s,i,o;return new Promise(function(c,u){i=document.createElement("iframe"),i.style.display="none",o=function(f){var d;if(!cu(i,f)||!f||!f.data||f.origin!==t.getIssuerOrigin())return;let g;try{g=JSON.parse(f.data)}catch{return}if(g){if(g.type==="FingerprintAvailable")return c(g.fingerprint);if(g.type==="FingerprintServiceReady")(d=i==null?void 0:i.contentWindow)===null||d===void 0||d.postMessage(JSON.stringify({type:"GetFingerprint"}),f.origin);else return u(new p("No data"))}},ys(window,"message",o),i.src=t.getIssuerOrigin()+"/auth/services/devicefingerprint",r.appendChild(i),s=setTimeout(function(){u(new p("Fingerprinting timed out"))},(e==null?void 0:e.timeout)||15e3)}).finally(function(){var c;clearTimeout(s),Ts(window,"message",o),r.contains(i)&&((c=i.parentElement)===null||c===void 0||c.removeChild(i))})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const wr=t=>{let e=t;if(typeof e=="string")try{e=e.split(",")}catch{return}return Array.isArray(e)?e:void 0},Bs=(t=[])=>{const e=[];return t.forEach(n=>{var r,s;if(n.key==="webauthn"){const i={type:"public-key",id:Fe(n.credentialId)},o=(r=wr(n.transports))!==null&&r!==void 0?r:wr((s=n.profile)===null||s===void 0?void 0:s.transports);o&&(i.transports=o),e.push(i)}}),e},uu=(t,e)=>({publicKey:Object.assign({rp:t.rp,user:{id:Fe(t.user.id),name:t.user.name,displayName:t.user.displayName},challenge:Fe(t.challenge),pubKeyCredParams:t.pubKeyCredParams,attestation:t.attestation,authenticatorSelection:t.authenticatorSelection,excludeCredentials:Bs(e)},t.hints&&{hints:t.hints})}),lu=(t,e)=>({publicKey:Object.assign(Object.assign({challenge:Fe(t.challenge),userVerification:t.userVerification,allowCredentials:Bs(e)},t.rpId&&{rpId:t.rpId}),t.hints&&{hints:t.hints})}),du=t=>{const e=t.response,n=t.id,r=he(e.clientDataJSON),s=he(e.attestationObject),i=e.getTransports,o={id:n,clientData:r,attestation:s};return typeof i=="function"&&(o.transports=JSON.stringify(i.call(e))),o},hu=t=>{const e=t.response,n=t.id,r=he(e.clientDataJSON),s=he(e.authenticatorData),i=he(e.signature);return{id:n,clientData:r,authenticatorData:s,signatureData:i}},qs=Object.freeze(Object.defineProperty({__proto__:null,buildCredentialCreationOptions:uu,buildCredentialRequestOptions:lu,getAssertion:hu,getAttestation:du},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function fu(t){var e;return e=class extends t{constructor(...r){super(...r),this.idx=Co(this),this.fingerprint=Gn.bind(null,this)}},e.webauthn=qs,e}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function pu(t,e,n){const r=Vs(t,e,n);return fu(r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function gu(t){const e=t,n=Ot.bind(null,e);return{makeIdxResponse:mn.bind(null,e),start:n,startTransaction:n,proceed:Pn.bind(null,e),canProceed:En.bind(null,e),getSavedTransactionMeta:Y.bind(null,e),createTransactionMeta:mt.bind(null,e),getTransactionMeta:Wr.bind(null,e),saveTransactionMeta:vt.bind(null,e),clearTransactionMeta:Kr.bind(null,e),isTransactionMetaValid:gn}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function mu(t){var e;return e=class extends t{constructor(...r){super(...r),this.idx=gu(this),this.fingerprint=Gn.bind(null,this)}},e.webauthn=qs,e}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function vu(t){return{prepareTokenParams:Pt.bind(null,t),exchangeCodeForTokens:vs.bind(null,t),decode:Dn}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function wu(t,e){return class extends t{constructor(...r){super(...r),this.transactionManager=new e(Object.assign({storageManager:this.storageManager},this.options.transactionManager)),this.token=vu(this)}isLoginRedirect(){return _t(this)}isPKCE(){return!!this.options.pkce}hasResponseType(r){return us(r,this.options)}isAuthorizationCodeFlow(){return this.hasResponseType("code")}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Gl(t,e,n){const r=In(e),s=Mn(r,t),i=Cn(s),o=zn(i),a=wu(o,n);return mu(a)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function yu(){return class{constructor(e){this.devMode=!!e.devMode}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Tu(){return Object.assign({},at,{inMemoryStore:{}})}const bu={token:{storageTypes:["localStorage","sessionStorage","cookie"]},cache:{storageTypes:["localStorage","sessionStorage","cookie"]},transaction:{storageTypes:["sessionStorage","localStorage","cookie"]},"shared-transaction":{storageTypes:["localStorage"]},"original-uri":{storageTypes:["localStorage"]}};function Su(t={},e){var n=t.cookies||{};return typeof n.secure>"u"&&(n.secure=e),typeof n.sameSite>"u"&&(n.sameSite=n.secure?"none":"lax"),n.secure&&!e&&(W(`The current page is not being served with the HTTPS protocol.
For security reasons, we strongly recommend using HTTPS.
If you cannot use HTTPS, set "cookies.secure" option to false.`),n.secure=!1),n.sameSite==="none"&&!n.secure&&(n.sameSite="lax"),n}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ou(){const t=yu();return class extends t{constructor(n){super(n),this.cookies=Su(n,Vr()),this.storageUtil=n.storageUtil||Tu(),this.storageManager=Object.assign(Object.assign({},bu),n.storageManager)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const _u=/application\/\w*\+?json/;function ku(t){return t.headers.get("Content-Type")&&t.headers.get("Content-Type").toLowerCase().indexOf("application/json")>=0?t.json().catch(e=>({error:e,errorSummary:"Could not parse server response"})):t.text()}function Au(t,e,n){const r=typeof e=="object",s={};for(const o of n.headers.entries())s[o[0]]=o[1];const i={responseText:r?JSON.stringify(e):e,status:t,headers:s};return r&&(i.responseType="json",i.responseJSON=e),i}function Eu(t,e,n){var r=n.data,s=n.headers||{},i=s["Content-Type"]||s["content-type"]||"";r&&typeof r!="string"&&(_u.test(i)?r=JSON.stringify(r):i==="application/x-www-form-urlencoded"&&(r=Object.entries(r).map(([c,u])=>`${c}=${encodeURIComponent(u)}`).join("&")));var o=window.fetch||Si,a=o(e,{method:t,headers:n.headers,body:r,credentials:n.withCredentials?"include":"omit"});return a.finally||(a=Promise.resolve(a)),a.then(function(c){var u=!c.ok,l=c.status;return ku(c).then(f=>Au(l,f,c)).then(f=>{var d;if(u||!((d=f.responseJSON)===null||d===void 0)&&d.error)throw f;return f})})}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Pu(){const t=Ou();return class extends t{constructor(n){super(n),this.issuer=n.issuer,this.transformErrorXHR=n.transformErrorXHR,this.headers=n.headers,this.httpRequestClient=n.httpRequestClient||Eu,this.httpRequestInterceptors=n.httpRequestInterceptors,this.pollDelay=n.pollDelay}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Iu=!0;/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Mu(t){t=t||{};var e=t.scopes;if(e&&!Array.isArray(e))throw new p('scopes must be a array of strings. Required usage: new OktaAuth({scopes: ["openid", "email"]})');var n=t.issuer;if(!n)throw new p('No issuer passed to constructor. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');var r=new RegExp("^http?s?://.+");if(!r.test(n))throw new p('Issuer must be a valid URL. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');if(n.indexOf("-admin.okta")!==-1)throw new p('Issuer URL passed to constructor contains "-admin" in subdomain. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com})')}function Cu(){const t=Pu();return class extends t{constructor(n){super(n),Mu(n),this.issuer=F(n.issuer),this.tokenUrl=F(n.tokenUrl),this.authorizeUrl=F(n.authorizeUrl),this.userinfoUrl=F(n.userinfoUrl),this.revokeUrl=F(n.revokeUrl),this.logoutUrl=F(n.logoutUrl),this.pkce=n.pkce!==!1,this.clientId=n.clientId,this.redirectUri=n.redirectUri,M()&&(this.redirectUri=si(n.redirectUri,window.location.origin)),this.responseType=n.responseType,this.responseMode=n.responseMode,this.state=n.state,this.scopes=n.scopes,this.ignoreSignature=!!n.ignoreSignature,this.codeChallenge=n.codeChallenge,this.codeChallengeMethod=n.codeChallengeMethod,this.acrValues=n.acrValues,this.maxAge=n.maxAge,this.dpop=n.dpop===!0,this.dpopOptions=Object.assign({allowBearerTokens:!1},n.dpopOptions),this.tokenManager=n.tokenManager,this.postLogoutRedirectUri=n.postLogoutRedirectUri,this.restoreOriginalUri=n.restoreOriginalUri,this.transactionManager=Object.assign({enableSharedStorage:Iu},n.transactionManager),this.clientSecret=n.clientSecret,this.setLocation=n.setLocation,this.ignoreLifetime=!!n.ignoreLifetime,!n.maxClockSkew&&n.maxClockSkew!==0?this.maxClockSkew=Ir:this.maxClockSkew=n.maxClockSkew}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ru(){const t=Cu();return class extends t{constructor(n){super(n),this.services=n.services,this.transformAuthState=n.transformAuthState}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function xu(){const t=Ru();return class extends t{constructor(n){super(n),this.flow=n.flow,this.activationToken=n.activationToken,this.recoveryToken=n.recoveryToken,this.idx=n.idx}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Te{constructor(e,n){if(!e)throw new p('"storage" is required');if(typeof n!="string"||!n.length)throw new p('"storageName" is required');this.storageName=n,this.storageProvider=e}getItem(e){return this.getStorage()[e]}setItem(e,n){return this.updateStorage(e,n)}removeItem(e){return this.clearStorage(e)}getStorage(){var e=this.storageProvider.getItem(this.storageName);e=e||"{}";try{return JSON.parse(e)}catch{throw new p("Unable to parse storage string: "+this.storageName)}}setStorage(e){try{var n=e?JSON.stringify(e):"{}";this.storageProvider.setItem(this.storageName,n)}catch{throw new p("Unable to set storage: "+this.storageName)}}clearStorage(e){if(!e){this.storageProvider.removeItem?this.storageProvider.removeItem(this.storageName):this.setStorage();return}var n=this.getStorage();delete n[e],this.setStorage(n)}updateStorage(e,n){var r=this.getStorage();r[e]=n,this.setStorage(r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ut(t){!M()&&!t.storageProvider&&!t.storageKey&&W("Memory storage can only support simple single user use case on server side, please provide custom storageProvider or storageKey if advanced scenarios need to be supported.")}class ju{constructor(e,n,r){this.storageManagerOptions=e,this.cookieOptions=n,this.storageUtil=r}getOptionsForSection(e,n){return Object.assign({},this.storageManagerOptions[e],n)}getStorage(e){if(e=Object.assign({},this.cookieOptions,e),e.storageProvider)return e.storageProvider;let{storageType:n,storageTypes:r}=e;if(n==="sessionStorage"&&(e.sessionCookie=!0),n&&r){const s=r.indexOf(n);s>=0&&(r=r.slice(s),n=void 0)}return n||(n=this.storageUtil.findStorageType(r)),this.storageUtil.getStorageByType(n,e)}getTokenStorage(e){e=this.getOptionsForSection("token",e),ut(e);const n=this.getStorage(e),r=e.storageKey||un;return new Te(n,r)}getHttpCache(e){e=this.getOptionsForSection("cache",e);const n=this.getStorage(e),r=e.storageKey||Cr;return new Te(n,r)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Uu(){return class extends ju{constructor(e,n,r){super(e,n,r)}getTransactionStorage(e){e=this.getOptionsForSection("transaction",e),ut(e);const n=this.getStorage(e),r=e.storageKey||Rr;return new Te(n,r)}getSharedTansactionStorage(e){e=this.getOptionsForSection("shared-transaction",e),ut(e);const n=this.getStorage(e),r=e.storageKey||xr;return new Te(n,r)}getOriginalUriStorage(e){e=this.getOptionsForSection("original-uri",e),ut(e);const n=this.getStorage(e),r=e.storageKey||jr;return new Te(n,r)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Du(){return Uu()}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Lu(){const t=Du();return class extends t{constructor(n,r,s){super(n,r,s)}getIdxResponseStorage(n){let r;if(M())try{r=this.storageUtil.getStorageByType("memory",n)}catch{W("No response storage found, you may want to provide custom implementation for intermediate idx responses to optimize the network traffic")}else{const s=this.getTransactionStorage(n);s&&(r={getItem:i=>{const o=s.getStorage();return o&&o[i]?o[i]:null},setItem:(i,o)=>{const a=s.getStorage();if(!a)throw new p("Transaction has been cleared, failed to save idxState");a[i]=o,s.setStorage(a)},removeItem:i=>{const o=s.getStorage();o&&(delete o[i],s.setStorage(o))}})}return r?new Te(r,Ur):null}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ws(t){return!(!t||typeof t!="object"||Object.values(t).length===0)}function Ks(t){return Ws(t)?!!t.redirectUri||!!t.responseType:!1}function Nu(t){return Ks(t)?!!t.codeVerifier:!1}function rd(t){return Nu(t)?!!t.interactionHandle:!1}function Fu(t){return Ws(t)?Object.values(t).find(n=>typeof n!="string")===void 0:!1}function lt(t){return!!(Ks(t)||Fu(t))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Hu=1800*1e3;function Vu(t){const e=t.getSharedTansactionStorage(),n=e.getStorage();Object.keys(n).forEach(r=>{const s=n[r];Date.now()-s.dateCreated>Hu&&delete n[r]}),e.setStorage(n)}function Bu(t,e,n){const r=t.getSharedTansactionStorage(),s=r.getStorage();s[e]={dateCreated:Date.now(),transaction:n},r.setStorage(s)}function qu(t,e){const s=t.getSharedTansactionStorage().getStorage()[e];return s&&s.transaction&&lt(s.transaction)?s.transaction:null}function Wu(t,e){const n=t.getSharedTansactionStorage(),r=n.getStorage();delete r[e],n.setStorage(r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ku(){return class{constructor(e){this.storageManager=e.storageManager,this.enableSharedStorage=e.enableSharedStorage!==!1,this.saveLastResponse=e.saveLastResponse!==!1,this.options=e}clear(e={}){const n=this.storageManager.getTransactionStorage(),r=n.getStorage();if(n.clearStorage(),this.enableSharedStorage&&e.clearSharedStorage!==!1){const s=e.state||(r==null?void 0:r.state);s&&Wu(this.storageManager,s)}}save(e,n={}){let r=this.storageManager.getTransactionStorage();const s=r.getStorage();lt(s)&&!n.muteWarning&&W("a saved auth transaction exists in storage. This may indicate another auth flow is already in progress."),r.setStorage(e),this.enableSharedStorage&&e.state&&Bu(this.storageManager,e.state,e)}exists(e={}){try{return!!this.load(e)}catch{return!1}}load(e={}){let n;return this.enableSharedStorage&&e.state&&(Vu(this.storageManager),n=qu(this.storageManager,e.state),lt(n))||(n=this.storageManager.getTransactionStorage().getStorage(),lt(n))?n:null}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function $u(){const t=Ku();return class extends t{constructor(n){super(n)}clear(n={}){super.clear(n),n.clearIdxResponse!==!1&&this.clearIdxResponse()}saveIdxResponse(n){if(!this.saveLastResponse)return;const r=this.storageManager.getIdxResponseStorage();r&&r.setStorage(n)}loadIdxResponse(n){if(!this.saveLastResponse)return null;const r=this.storageManager.getIdxResponseStorage();if(!r)return null;const s=r.getStorage();if(!s||!Qr(s.rawIdxResponse))return null;if(n){const{stateHandle:i,interactionHandle:o}=n;if(!n.useGenericRemediator&&i&&s.stateHandle!==i||o&&s.interactionHandle!==o)return null}return s}clearIdxResponse(){if(!this.saveLastResponse)return;const n=this.storageManager.getIdxResponseStorage();n==null||n.clearStorage()}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class X{constructor(e,n){const{res:r}=n,{headers:s}=r,i=ge(r,["headers"]);s&&(this.headers=s),Object.keys(i).forEach(o=>{o!=="_links"&&(this[o]=i[o])})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */async function E(t,e,n=X){const{accessToken:r}=t.tokenManager.getTokensSync(),s=e.accessToken||r,i=t.getIssuerOrigin(),{url:o,method:a,payload:c}=e,u=o.startsWith(i)?o:`${i}${o}`;if(!s)throw new p("AccessToken is required to request MyAccount API endpoints.");let l=s;const f=Object.assign({headers:{Accept:"*/*;okta-version=1.0.0"},url:u,method:a},c&&{args:c});if(t.options.dpop){if(typeof l=="string")throw new p("AccessToken object must be provided when using dpop");const{Authorization:w,Dpop:m}=await t.getDPoPAuthorizationHeaders({method:a,url:u,accessToken:l});f.headers.Authorization=w,f.headers.Dpop=m}else l=typeof l=="string"?l:l.accessToken,f.accessToken=l;const d=await K(t,f);let g;return Array.isArray(d)?g=d.map(w=>new n(t,{res:w,accessToken:l})):g=new n(t,{res:d,accessToken:l}),g}function x({oktaAuth:t,accessToken:e,methodName:n,links:r},s=X){for(const o of["GET","POST","PUT","DELETE"])if(o.toLowerCase()===n){const a=r.self;return(async c=>E(t,{accessToken:e,url:a.href,method:o,payload:c},s))}const i=r[n];if(!i)throw new p(`No link is found with methodName: ${n}`);return(async o=>E(t,{accessToken:e,url:i.href,method:i.hints.allow[0],payload:o},s))}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class $s extends X{constructor(e,n){super(e,n);const{createdAt:r,modifiedAt:s,profile:i}=n.res;this.createdAt=r,this.modifiedAt=s,this.profile=i}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class zu extends X{constructor(e,n){super(e,n),this.properties=n.res.properties}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */var yr;(function(t){t.PRIMARY="PRIMARY",t.SECONDARY="SECONDARY"})(yr||(yr={}));var Tr;(function(t){t.VERIFIED="VERIFIED",t.UNVERIFIED="UNVERIFIED"})(Tr||(Tr={}));var sn;(function(t){t.NOT_ENROLLED="NOT_ENROLLED",t.ACTIVE="ACTIVE"})(sn||(sn={}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Gu=async(t,e)=>await E(t,{url:"/idp/myaccount/profile",method:"GET",accessToken:e==null?void 0:e.accessToken},$s),Ju=async(t,e)=>{const{payload:n,accessToken:r}=e;return await E(t,{url:"/idp/myaccount/profile",method:"PUT",payload:n,accessToken:r},$s)},Qu=async(t,e)=>await E(t,{url:"/idp/myaccount/profile/schema",method:"GET",accessToken:e==null?void 0:e.accessToken},zu);/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class zs extends X{constructor(e,n){super(e,n);const{res:r}=n,{id:s,profile:i,expiresAt:o,status:a}=r;this.id=s,this.expiresAt=o,this.profile=i,this.status=a}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class $e extends X{constructor(e,n){super(e,n);const{accessToken:r,res:s}=n,{id:i,expiresAt:o,profile:a,status:c,_links:u}=s;this.id=i,this.expiresAt=o,this.profile=a,this.status=c,this.poll=async()=>await x({oktaAuth:e,accessToken:r,methodName:"poll",links:u},zs)(),this.verify=async l=>await x({oktaAuth:e,accessToken:r,methodName:"verify",links:u},$e)(l)}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class ze extends X{constructor(e,n){super(e,n);const{accessToken:r,res:s}=n,{id:i,profile:o,roles:a,status:c,_links:u}=s;this.id=i,this.profile=o,this.roles=a,this.status=c,this.get=async()=>await x({oktaAuth:e,accessToken:r,methodName:"get",links:u},ze)(),this.delete=async()=>await x({oktaAuth:e,accessToken:r,methodName:"delete",links:u})(),this.challenge=async()=>await x({oktaAuth:e,accessToken:r,methodName:"challenge",links:u},$e)(),u.poll&&(this.poll=async()=>await x({oktaAuth:e,accessToken:r,methodName:"poll",links:u},zs)()),u.verify&&(this.verify=async l=>await x({oktaAuth:e,accessToken:r,methodName:"verify",links:u})(l))}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const Yu=async(t,e)=>await E(t,{url:"/idp/myaccount/emails",method:"GET",accessToken:e==null?void 0:e.accessToken},ze),Xu=async(t,e)=>{const{id:n,accessToken:r}=e;return await E(t,{url:`/idp/myaccount/emails/${n}`,method:"GET",accessToken:r},ze)},Zu=async(t,e)=>{const{accessToken:n,payload:r}=e;return await E(t,{url:"/idp/myaccount/emails",method:"POST",payload:r,accessToken:n},ze)},el=async(t,e)=>{const{id:n,accessToken:r}=e;return await E(t,{url:`/idp/myaccount/emails/${n}`,method:"DELETE",accessToken:r})},tl=async(t,e)=>{const{id:n,accessToken:r}=e;return await E(t,{url:`/idp/myaccount/emails/${n}/challenge`,method:"POST",accessToken:r},$e)},nl=async(t,e)=>{const{emailId:n,challengeId:r,accessToken:s}=e;return await E(t,{url:`/idp/myaccount/emails/${n}/challenge/${r}`,method:"POST",accessToken:s},$e)},rl=async(t,e)=>{const{emailId:n,challengeId:r,payload:s,accessToken:i}=e;return await E(t,{url:`/idp/myaccount/emails/${n}/challenge/${r}/verify`,method:"POST",payload:s,accessToken:i})};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Ge extends X{constructor(e,n){super(e,n);const{res:r,accessToken:s}=n,{id:i,profile:o,status:a,_links:c}=r;this.id=i,this.profile=o,this.status=a,this.get=async()=>await x({oktaAuth:e,accessToken:s,methodName:"get",links:c},Ge)(),this.delete=async()=>await x({oktaAuth:e,accessToken:s,methodName:"delete",links:c})(),this.challenge=async u=>await x({oktaAuth:e,accessToken:s,methodName:"challenge",links:c})(u),c.verify&&(this.verify=async u=>await x({oktaAuth:e,accessToken:s,methodName:"verify",links:c})(u))}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const sl=async(t,e)=>await E(t,{url:"/idp/myaccount/phones",method:"GET",accessToken:e==null?void 0:e.accessToken},Ge),il=async(t,e)=>{const{accessToken:n,id:r}=e;return await E(t,{url:`/idp/myaccount/phones/${r}`,method:"GET",accessToken:n},Ge)},ol=async(t,e)=>{const{accessToken:n,payload:r}=e;return await E(t,{url:"/idp/myaccount/phones",method:"POST",payload:r,accessToken:n},Ge)},al=async(t,e)=>{const{id:n,accessToken:r}=e;return await E(t,{url:`/idp/myaccount/phones/${n}`,method:"DELETE",accessToken:r})},cl=async(t,e)=>{const{accessToken:n,id:r,payload:s}=e;return await E(t,{url:`/idp/myaccount/phones/${r}/challenge`,method:"POST",payload:s,accessToken:n})},ul=async(t,e)=>{const{id:n,payload:r,accessToken:s}=e;return await E(t,{url:`/idp/myaccount/phones/${n}/verify`,method:"POST",payload:r,accessToken:s})};/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class pe extends X{constructor(e,n){super(e,n);const{res:r,accessToken:s}=n,{id:i,status:o,created:a,lastUpdated:c,_links:u}=r;this.id=i,this.status=o,this.created=a,this.lastUpdated=c,this.status==sn.NOT_ENROLLED?this.enroll=async l=>await x({oktaAuth:e,accessToken:s,methodName:"enroll",links:u},pe)(l):(this.get=async()=>await x({oktaAuth:e,accessToken:s,methodName:"get",links:u},pe)(),this.update=async l=>await x({oktaAuth:e,accessToken:s,methodName:"put",links:u},pe)(l),this.delete=async()=>await x({oktaAuth:e,accessToken:s,methodName:"delete",links:u})())}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const ll=async(t,e)=>await E(t,{url:"/idp/myaccount/password",method:"GET",accessToken:e==null?void 0:e.accessToken},pe),dl=async(t,e)=>{const{accessToken:n,payload:r}=e;return await E(t,{url:"/idp/myaccount/password",method:"POST",payload:r,accessToken:n},pe)},hl=async(t,e)=>{const{accessToken:n,payload:r}=e;return await E(t,{url:"/idp/myaccount/password",method:"PUT",payload:r,accessToken:n},pe)},fl=async(t,e)=>await E(t,{url:"/idp/myaccount/password",method:"DELETE",accessToken:e==null?void 0:e.accessToken});/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const pl=Object.freeze(Object.defineProperty({__proto__:null,addEmail:Zu,addPhone:ol,deleteEmail:el,deletePassword:fl,deletePhone:al,enrollPassword:dl,getEmail:Xu,getEmailChallenge:nl,getEmails:Yu,getPassword:ll,getPhone:il,getPhones:sl,getProfile:Gu,getProfileSchema:Qu,sendEmailChallenge:tl,sendPhoneChallenge:cl,updatePassword:hl,updateProfile:Ju,verifyEmailChallenge:rl,verifyPhoneChallenge:ul},Symbol.toStringTag,{value:"Module"}));/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Gs(t){return class extends t{constructor(...n){super(...n),this.myaccount=Object.entries(pl).filter(([r])=>r!=="default").reduce((r,[s,i])=>(r[s]=i.bind(null,this),r),{})}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ad(t,e,n){const r=Vs(t,e,n);return Gs(r)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Rt(t,e){var n={};return Object.assign(n,e),!n.stateToken&&t.stateToken&&(n.stateToken=t.stateToken),n}function gl(t){return Rt(t)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Js(t,e){return e=Rt(t,e),re(t,t.getIssuerOrigin()+"/api/v1/authn",e,{withCredentials:!0})}function ml(t,e,n){if(!n||!n.stateToken){var r=Jn(t);if(r)n={stateToken:r};else return Promise.reject(new p("No transaction to resume"))}return Js(t,n).then(function(s){return e.createTransaction(s)})}function vl(t,e,n){if(!n||!n.stateToken){var r=Jn(t);if(r)n={stateToken:r};else return Promise.reject(new p("No transaction to evaluate"))}return wl(t,n).then(function(s){return e.createTransaction(s)})}function wl(t,e){return e=Rt(t,e),re(t,t.getIssuerOrigin()+"/api/v1/authn/introspect",e,{withCredentials:!0})}function yl(t){return!!Jn(t)}function Qs(t,e,n,r,s){return s=Object.assign({withCredentials:!0},s),re(t,n,r,s).then(function(i){return e.createTransaction(i)})}function Jn(t){return t.options.storageUtil.storage.get(Ue)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ys(t,e,n,r,s,i){if(Array.isArray(s))return function(a,c){if(!a)throw new p("Must provide a link name");var u=Vt(s,{name:a});if(!u)throw new p("No link found for that name");return Ys(t,e,n,r,u,i)(c)};if(s.hints&&s.hints.allow&&s.hints.allow.length===1){var o=s.hints.allow[0];switch(o){case"GET":return function(){return Oe(t,s.href,{withCredentials:!0})};case"POST":return function(a){i&&i.isPolling&&(i.isPolling=!1);var c=Rt(n,a);(n.status==="MFA_ENROLL"||n.status==="FACTOR_ENROLL")&&Object.assign(c,{factorType:r.factorType,provider:r.provider});var u={},l=c.autoPush;if(l!==void 0){if(typeof l=="function")try{u.autoPush=!!l()}catch{return Promise.reject(new p("AutoPush resulted in an error."))}else l!==null&&(u.autoPush=!!l);c=je(c,"autoPush")}var f=c.rememberDevice;if(f!==void 0){if(typeof f=="function")try{u.rememberDevice=!!f()}catch{return Promise.reject(new p("RememberDevice resulted in an error."))}else f!==null&&(u.rememberDevice=!!f);c=je(c,"rememberDevice")}else c.profile&&c.profile.updatePhone!==void 0&&(c.profile.updatePhone&&(u.updatePhone=!0),c.profile=je(c.profile,"updatePhone"));var d=s.href+Q(u);return Qs(t,e,d,c)}}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class br extends Ae{constructor(){super("The poll was stopped by the sdk")}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Tl(t,e,n){return function(r){var s,i,o,a;ti(r)?s=r:Sr(r)&&(r=r,s=r.delay,i=r.rememberDevice,o=r.autoPush,a=r.transactionCallBack),!s&&s!==0&&(s=Er);var c=Bt(e,"next","poll");function u(){var d={};if(typeof o=="function")try{d.autoPush=!!o()}catch{return Promise.reject(new p("AutoPush resulted in an error."))}else o!=null&&(d.autoPush=!!o);if(typeof i=="function")try{d.rememberDevice=!!i()}catch{return Promise.reject(new p("RememberDevice resulted in an error."))}else i!=null&&(d.rememberDevice=!!i);var g=c.href+Q(d);return re(t,g,gl(e),{saveAuthnState:!1,withCredentials:!0,pollingIntent:!0})}n.isPolling=!0;var l=0,f=function(){return n.isPolling?u().then(function(d){if(l=0,d.factorResult&&d.factorResult==="WAITING"){if(!n.isPolling)throw new br;return typeof a=="function"&&a(d),Yn(s).then(f)}else return n.isPolling=!1,t.tx.createTransaction(d)}).catch(function(d){if(d.xhr&&(d.xhr.status===0||d.xhr.status===429)&&l<=4){var g=Math.pow(2,l)*1e3;return l++,Yn(g).then(f)}throw d}):Promise.reject(new br)};return f().catch(function(d){throw n.isPolling=!1,d})}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function bl(t,e,n,r,s){var i={};for(var o in r._links)if(Object.prototype.hasOwnProperty.call(r._links,o)){var a=r._links[o];if(o==="next"&&(o=a.name),a.type){i[o]=a;continue}switch(o){case"poll":i.poll=Tl(t,n,s);break;default:var c=Ys(t,e,n,r,a,s);c&&(i[o]=c)}}return i}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function on(t,e,n,r,s){if(r=r||n,r=U(r),Array.isArray(r)){for(var i=[],o=0,a=r.length;o<a;o++)i.push(on(t,e,n,r[o],s));return i}var c=r._embedded||{};for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(Sr(c[u])||Array.isArray(c[u]))&&(c[u]=on(t,e,n,c[u],s));var l=bl(t,e,n,r,s);return Object.assign(c,l),r=je(r,"_embedded","_links"),Object.assign(r,c),r}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */class Sl{constructor(e,n,r=null){this.data=void 0,this.status=void 0,r&&(this.data=r,Object.assign(this,on(e,n,r,r,{})),delete this.stateToken,r.status==="RECOVERY_CHALLENGE"&&!r._links&&(this.cancel=function(){return Promise.resolve(n.createTransaction())}))}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function Ol(t){const e={status:Js.bind(null,t),resume(n){return ml(t,e,n)},exists:yl.bind(null,t),introspect(n){return vl(t,e,n)},createTransaction:n=>new Sl(t,e,n),postToTransaction:(n,r,s)=>Qs(t,e,n,r,s)};return e}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function _l(t){return class extends t{constructor(...n){super(...n),this.authn=this.tx=Ol(this),this.fingerprint=Gn.bind(null,this)}async signIn(n){n=U(n||{});const r=s=>(delete n.sendFingerprint,this.tx.postToTransaction("/api/v1/authn",n,s));return n.sendFingerprint?this.fingerprint().then(function(s){return r({headers:{"X-Device-Fingerprint":s}})}):r()}async signInWithCredentials(n){return this.signIn(n)}forgotPassword(n){return this.tx.postToTransaction("/api/v1/authn/recovery/password",n)}unlockAccount(n){return this.tx.postToTransaction("/api/v1/authn/recovery/unlock",n)}verifyRecoveryToken(n){const{multiOptionalFactorEnroll:r}=n,s=ge(n,["multiOptionalFactorEnroll"]);return r&&(s.options={multiOptionalFactorEnroll:r}),this.tx.postToTransaction("/api/v1/authn/recovery/token",s)}}}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */function ud(t,e,n){const r=In(e),s=Mn(r,t),i=Cn(s),o=zn(i);return _s(o,n)}/*!
 * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * 
 * See the License for the specific language governing permissions and limitations under the License.
 */const kl=xu(),Al=Lu(),El=$u(),Pl=pu(Al,kl,El),Il=Gs(Pl),Ml=_l(Il);class ld extends Ml{constructor(e){super(e)}}export{ci as ACCESS_TOKEN_STORAGE_KEY,de as AuthApiError,br as AuthPollStopError,p as AuthSdkError,Na as AuthStateManager,$ as AuthenticatorKey,ju as BaseStorageManager,Cr as CACHE_STORAGE_NAME,Mr as DEFAULT_CACHE_DURATION,ln as DEFAULT_CODE_CHALLENGE_METHOD,Ir as DEFAULT_MAX_CLOCK_SKEW,Er as DEFAULT_POLLING_DELAY,ce as EVENT_ADDED,Pa as EVENT_ERROR,rn as EVENT_EXPIRED,ue as EVENT_REMOVED,Re as EVENT_RENEWED,xe as EVENT_SET_STORAGE,yr as EmailRole,dn as IDX_API_VERSION,Ur as IDX_RESPONSE_STORAGE_NAME,ui as ID_TOKEN_STORAGE_KEY,Ua as INITIAL_AUTH_STATE,Pr as IOS_MAX_RETRY_COUNT,Z as IdxFeature,oe as IdxStatus,Dr as MAX_VERIFIER_LENGTH,Wt as MIN_VERIFIER_LENGTH,Se as OAuthError,jr as ORIGINAL_URI_STORAGE_NAME,ld as OktaAuth,Ro as OktaUserAgent,ai as PKCE_STORAGE_NAME,sn as PasswordStatus,Un as PromiseQueue,st as REFERRER_PATH_STORAGE_KEY,qt as REFRESH_TOKEN_STORAGE_KEY,xr as SHARED_TRANSACTION_STORAGE_NAME,Ue as STATE_TOKEN_KEY_NAME,Te as SavedObject,ke as ServiceManager,Tr as Status,un as TOKEN_STORAGE_NAME,Rr as TRANSACTION_STORAGE_NAME,zt as TokenKind,Ma as TokenManager,V as WWWAuthError,Zu as addEmail,ra as addIDPPopupLisenter,ys as addListener,ol as addPhone,or as addPostMessageListener,sa as assertPKCESupport,so as authenticate,Rl as bind,Fn as buildAuthorizeParams,En as canProceed,go as cancel,Kr as clearTransactionMeta,U as clone,su as closeSession,aa as convertTokenParamsToOAuthParams,Ol as createAuthnTransactionAPI,yu as createBaseOptionsConstructor,Ru as createCoreOptionsConstructor,Du as createCoreStorageManager,Ea as createEndpoints,ba as createEnrollAuthenticatorMeta,Pu as createHttpOptionsConstructor,Co as createIdxAPI,xu as createIdxOptionsConstructor,Lu as createIdxStorageManager,$u as createIdxTransactionManager,Gl as createMinimalOktaAuthIdx,Ar as createOAuthMeta,Cu as createOAuthOptionsConstructor,Uu as createOAuthStorageManager,In as createOktaAuthBase,Vs as createOktaAuthCore,pu as createOktaAuthIdx,ad as createOktaAuthMyAccount,ud as createOktaAuthOAuth,au as createSessionApi,Ou as createStorageOptionsConstructor,Aa as createTokenAPI,Ku as createTransactionManager,mt as createTransactionMeta,jo as crypto,Dn as decodeToken,ld as default,Yn as delay,el as deleteEmail,fl as deletePassword,al as deletePhone,ei as deprecate,Cl as deprecateWrap,dl as enrollPassword,vs as exchangeCodeForTokens,xl as extend,Vt as find,_r as genRandomString,ii as generateNonce,an as generateState,Oe as get,ve as getConsole,Sa as getDefaultEnrollAuthenticatorParams,kt as getDefaultTokenParams,Xu as getEmail,nl as getEmailChallenge,Yu as getEmails,ls as getHashOrSearch,Xo as getKey,Bt as getLink,Zs as getNativeConsole,kr as getOAuthBaseUrl,oi as getOAuthDomain,ne as getOAuthUrls,ll as getPassword,il as getPhone,sl as getPhones,Gu as getProfile,Qu as getProfileSchema,Y as getSavedTransactionMeta,ru as getSession,Hn as getToken,Wr as getTransactionMeta,ta as getUserInfo,Et as getWellKnown,ua as getWithIDPPopup,ca as getWithPopup,la as getWithRedirect,Vn as getWithoutPrompt,wo as handleEmailVerifyCallback,bo as handleInteractionCodeRedirect,ye as handleOAuthResponse,ko as hasAuthorizationCode,Eo as hasErrorInUrl,Ao as hasInteractionCode,us as hasResponseType,qr as hasSavedInteractionHandle,_o as hasTokensInHash,K as httpRequest,$r as interact,Jt as introspect,pt as isAbsoluteUrl,z as isAccessToken,Yr as isAuthApiError,dt as isAuthenticator,Ll as isAuthorizationCodeError,cs as isCodeFlow,Fu as isCustomAuthTransactionMeta,ss as isEmailVerifyCallback,vo as isEmailVerifyCallbackError,Or as isFunction,ee as isIDToken,rd as isIdxTransactionMeta,Io as isInteractionRequired,as as isInteractionRequiredError,_t as isLoginRedirect,ti as isNumber,Xr as isOAuthError,Ks as isOAuthTransactionMeta,Sr as isObject,Nu as isPKCETransactionMeta,ni as isPromise,Po as isRedirectUri,ae as isRefreshToken,Hl as isRefreshTokenError,Oo as isRefreshTokenInvalidError,ga as isSameRefreshToken,be as isString,Dl as isToken,lt as isTransactionMeta,gn as isTransactionMetaValid,Oi as isTransactionMetaValidForFlow,_i as isTransactionMetaValidForOptions,Ni as isWWWAuthError,jl as isoToUTCString,na as loadFrame,bs as loadPopup,ut as logServerSideMemoryStorageWarning,_l as mixinAuthn,tu as mixinCore,Cn as mixinHttp,fu as mixinIdx,Gs as mixinMyAccount,_s as mixinOAuth,zn as mixinSession,Mn as mixinStorage,Ta as oidcIntrospect,je as omit,is as parseEmailVerifyCallback,pa as parseFromUrl,De as pkce,os as poll,re as post,Yo as postRefreshToken,Qo as postToTokenEndpoint,_a as prepareEnrollAuthenticatorParams,oa as preparePKCE,Pt as prepareTokenParams,Pn as proceed,To as recoverPassword,iu as refreshSession,yo as register,Ts as removeListener,B as removeNils,F as removeTrailingSlash,ma as renewToken,va as renewTokens,Bn as renewTokensWithRefresh,wa as revokeToken,vt as saveTransactionMeta,tl as sendEmailChallenge,cl as sendPhoneChallenge,nu as sessionExists,ou as setCookieAndRedirect,xo as setRequestHeader,ri as split2,Ot as startTransaction,si as toAbsoluteUrl,Q as toQueryString,Ul as toRelativeUrl,So as unlockAccount,hl as updatePassword,Ju as updateProfile,rs as urlParamsToObject,Zo as validateClaims,ia as validateCodeChallengeMethod,nt as validateToken,rl as verifyEmailChallenge,ul as verifyPhoneChallenge,ms as verifyToken,W as warn};
