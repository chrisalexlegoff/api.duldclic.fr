"use strict";(self.webpackChunkapi_dualdclic_fr=self.webpackChunkapi_dualdclic_fr||[]).push([[2218],{22887:(d,o,a)=>{a.d(o,{Z:()=>i});var s=a(8081),t=a.n(s),r=a(23645),e=a.n(r),n=e()(t());n.push([d.id,`/* Port of TextMate's Blackboard theme */

.cm-s-blackboard.CodeMirror { background: #0C1021; color: #F8F8F8; }
.cm-s-blackboard div.CodeMirror-selected { background: #253B76; }
.cm-s-blackboard .CodeMirror-line::selection, .cm-s-blackboard .CodeMirror-line > span::selection, .cm-s-blackboard .CodeMirror-line > span > span::selection { background: rgba(37, 59, 118, .99); }
.cm-s-blackboard .CodeMirror-line::-moz-selection, .cm-s-blackboard .CodeMirror-line > span::-moz-selection, .cm-s-blackboard .CodeMirror-line > span > span::-moz-selection { background: rgba(37, 59, 118, .99); }
.cm-s-blackboard .CodeMirror-gutters { background: #0C1021; border-right: 0; }
.cm-s-blackboard .CodeMirror-guttermarker { color: #FBDE2D; }
.cm-s-blackboard .CodeMirror-guttermarker-subtle { color: #888; }
.cm-s-blackboard .CodeMirror-linenumber { color: #888; }
.cm-s-blackboard .CodeMirror-cursor { border-left: 1px solid #A7A7A7; }

.cm-s-blackboard .cm-keyword { color: #FBDE2D; }
.cm-s-blackboard .cm-atom { color: #D8FA3C; }
.cm-s-blackboard .cm-number { color: #D8FA3C; }
.cm-s-blackboard .cm-def { color: #8DA6CE; }
.cm-s-blackboard .cm-variable { color: #FF6400; }
.cm-s-blackboard .cm-operator { color: #FBDE2D; }
.cm-s-blackboard .cm-comment { color: #AEAEAE; }
.cm-s-blackboard .cm-string { color: #61CE3C; }
.cm-s-blackboard .cm-string-2 { color: #61CE3C; }
.cm-s-blackboard .cm-meta { color: #D8FA3C; }
.cm-s-blackboard .cm-builtin { color: #8DA6CE; }
.cm-s-blackboard .cm-tag { color: #8DA6CE; }
.cm-s-blackboard .cm-attribute { color: #8DA6CE; }
.cm-s-blackboard .cm-header { color: #FF6400; }
.cm-s-blackboard .cm-hr { color: #AEAEAE; }
.cm-s-blackboard .cm-link { color: #8DA6CE; }
.cm-s-blackboard .cm-error { background: #9D1E15; color: #F8F8F8; }

.cm-s-blackboard .CodeMirror-activeline-background { background: #3C3636; }
.cm-s-blackboard .CodeMirror-matchingbracket { outline:1px solid grey;color:white !important; }
`,""]);const i=n},23645:d=>{d.exports=function(o){var a=[];return a.toString=function(){return this.map(function(t){var r="",e=typeof t[5]!="undefined";return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=o(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},a.i=function(t,r,e,n,i){typeof t=="string"&&(t=[[null,t,void 0]]);var _={};if(e)for(var l=0;l<this.length;l++){var f=this[l][0];f!=null&&(_[f]=!0)}for(var m=0;m<t.length;m++){var c=[].concat(t[m]);e&&_[c[0]]||(typeof i!="undefined"&&(typeof c[5]=="undefined"||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),r&&(c[2]&&(c[1]="@media ".concat(c[2]," {").concat(c[1],"}")),c[2]=r),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),a.push(c))}},a}},8081:d=>{d.exports=function(o){return o[1]}},69039:(d,o,a)=>{a.r(o),a.d(o,{default:()=>b});var s=a(93379),t=a.n(s),r=a(7795),e=a.n(r),n=a(90569),i=a.n(n),_=a(3565),l=a.n(_),f=a(19216),m=a.n(f),c=a(44589),E=a.n(c),v=a(22887),u={};u.styleTagTransform=E(),u.setAttributes=l(),u.insert=i().bind(null,"head"),u.domAPI=e(),u.insertStyleElement=m();var M=t()(v.Z,u);const b=v.Z&&v.Z.locals?v.Z.locals:void 0},93379:d=>{var o=[];function a(r){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===r){e=n;break}return e}function s(r,e){for(var n={},i=[],_=0;_<r.length;_++){var l=r[_],f=e.base?l[0]+e.base:l[0],m=n[f]||0,c="".concat(f," ").concat(m);n[f]=m+1;var E=a(c),v={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(E!==-1)o[E].references++,o[E].updater(v);else{var u=t(v,e);e.byIndex=_,o.splice(_,0,{identifier:c,updater:u,references:1})}i.push(c)}return i}function t(r,e){var n=e.domAPI(e);n.update(r);var i=function(l){if(l){if(l.css===r.css&&l.media===r.media&&l.sourceMap===r.sourceMap&&l.supports===r.supports&&l.layer===r.layer)return;n.update(r=l)}else n.remove()};return i}d.exports=function(r,e){e=e||{},r=r||[];var n=s(r,e);return function(_){_=_||[];for(var l=0;l<n.length;l++){var f=n[l],m=a(f);o[m].references--}for(var c=s(_,e),E=0;E<n.length;E++){var v=n[E],u=a(v);o[u].references===0&&(o[u].updater(),o.splice(u,1))}n=c}}},90569:d=>{var o={};function a(t){if(typeof o[t]=="undefined"){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}o[t]=r}return o[t]}function s(t,r){var e=a(t);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}d.exports=s},19216:d=>{function o(a){var s=document.createElement("style");return a.setAttributes(s,a.attributes),a.insert(s,a.options),s}d.exports=o},3565:(d,o,a)=>{function s(t){var r=a.nc;r&&t.setAttribute("nonce",r)}d.exports=s},7795:d=>{function o(t,r,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var i=typeof e.layer!="undefined";i&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,i&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var _=e.sourceMap;_&&typeof btoa!="undefined"&&(n+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),r.styleTagTransform(n,t,r.options)}function a(t){if(t.parentNode===null)return!1;t.parentNode.removeChild(t)}function s(t){var r=t.insertStyleElement(t);return{update:function(n){o(r,t,n)},remove:function(){a(r)}}}d.exports=s},44589:d=>{function o(a,s){if(s.styleSheet)s.styleSheet.cssText=a;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(a))}}d.exports=o}}]);
