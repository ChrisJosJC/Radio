var Y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X={exports:{}};(function(G,W){(function(R,L){G.exports=L()})(Y,()=>(()=>{var R={935:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Arcs=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s=o.canvas,n=s.height,u=s.width,r=new q.Shapes(o),c=new g.AudioData(t),a=n/2,h=u/2;this._options=v({count:30,diameter:n/3,lineWidth:3,frequencyBand:"mids",rounded:!0},this._options),this._options.frequencyBand&&c.setFrequencyBand(this._options.frequencyBand),c.scaleData(Math.min(u,n));for(var l=0;l<=this._options.count/2;l++){var p=Math.floor(c.data.length/this._options.count)*l,_=c.data[p],b=(u-this._options.diameter)/this._options.count*l,w=180-45/(255/_/2),M=180+45/(255/_/2),m=2*_;r.arc(b+m/2,a,m,w,M,this._options)}var O=Math.floor(c.data.length/2),C=c.data[O];for(r.circle(h,a,this._options.diameter*(C/255),this._options),l=this._options.count/2;l<=this._options.count;l++){var j=Math.floor(c.data.length/this._options.count)*l,d=c.data[j];b=(u-this._options.diameter)/this._options.count*l+this._options.diameter,w=180-45/(255/d/2),M=180+45/(255/d/2),m=2*d,r.arc(b-m/2,a,m,w+180,M+180,this._options)}},i}();f.Arcs=e},519:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Circles=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s=o.canvas,n=s.height,u=s.width,r=new q.Shapes(o),c=new g.AudioData(t),a=u/2,h=n/2;this._options=v({count:40,diameter:0,fillColor:"rgba(0,0,0,0)",frequencyBand:"mids"},this._options),this._options.frequencyBand&&c.setFrequencyBand(this._options.frequencyBand),c.scaleData(Math.min(u,n));for(var l=0;l<this._options.count;l++){var p=Math.floor(c.data.length/this._options.count)*l,_=c.data[p];r.circle(a,h,this._options.diameter+_,this._options)}},i}();f.Circles=e},938:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Cubes=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s,n,u,r,c,a,h,l,p,_,b,w,M=o.canvas,m=M.height,O=M.width,C=new q.Shapes(o),j=new g.AudioData(t);this._options=v({count:20,frequencyBand:"mids",gap:5},this._options);var d=Math.floor((O-this._options.gap*this._options.count)/this._options.count);if(!((s=this._options)===null||s===void 0)&&s.cubeHeight||(this._options.cubeHeight=d),this._options.frequencyBand&&j.setFrequencyBand(this._options.frequencyBand),j.scaleData(Math.min(O,m)),(n=this._options)===null||n===void 0?void 0:n.mirroredX)for(var H=1,y=Math.ceil(j.data.length/2);y<j.data.length;y++)j.data[y]=j.data[Math.ceil(j.data.length/2)-H],H++;if(!((u=this._options)===null||u===void 0)&&u.top)for(y=0;y<this._options.count;y++)for(var P=Math.floor(j.data.length/this._options.count)*y,A=j.data[P],B=(this._options.gap+d)*y,D=Math.ceil(A/d),S=0;S<D;S++){var E=S*(this._options.cubeHeight+this._options.gap);C.rectangle(B,E,d,this._options.cubeHeight,this._options)}if(!((r=this._options)===null||r===void 0)&&r.right)for(y=0;y<this._options.count;y++)for(P=Math.floor(j.data.length/this._options.count)*y,A=j.data[P],E=y*(this._options.cubeHeight+this._options.gap),D=Math.ceil(A/d),S=0;S<D;S++)B=O-(this._options.gap+d)*S,C.rectangle(B,E,d,this._options.cubeHeight,this._options);if(!((c=this._options)===null||c===void 0)&&c.bottom||!(!((a=this._options)===null||a===void 0)&&a.top)&&!(!((h=this._options)===null||h===void 0)&&h.right)&&!(!((l=this._options)===null||l===void 0)&&l.left)&&!(!((p=this._options)===null||p===void 0)&&p.center))for(y=0;y<this._options.count;y++)for(P=Math.floor(j.data.length/this._options.count)*y,A=j.data[P],B=(this._options.gap+d)*y,D=Math.ceil(A/d),S=0;S<D;S++)E=m-S*(this._options.cubeHeight+this._options.gap),C.rectangle(B,E,d,this._options.cubeHeight,this._options);if(!((_=this._options)===null||_===void 0)&&_.left)for(y=0;y<this._options.count;y++)for(P=Math.floor(j.data.length/this._options.count)*y,A=j.data[P],E=y*(this._options.cubeHeight+this._options.gap),D=Math.ceil(A/d),S=0;S<D;S++)B=(this._options.gap+d)*S,C.rectangle(B,E,d,this._options.cubeHeight,this._options);if(!((b=this._options)===null||b===void 0)&&b.center){for(y=0;y<this._options.count;y++)for(P=Math.floor(j.data.length/this._options.count)*y,A=j.data[P],B=(this._options.gap+d)*y,D=Math.ceil(A/d),S=0;S<D;S++)E=m/2-S*(this._options.cubeHeight+this._options.gap),C.rectangle(B,E,d,this._options.cubeHeight,this._options);if(!((w=this._options)===null||w===void 0)&&w.mirroredY)for(y=0;y<this._options.count;y++)for(P=Math.floor(j.data.length/this._options.count)*y,A=j.data[P],B=(this._options.gap+d)*y,D=Math.ceil(A/d),S=0;S<D;S++)E=m/2+S*(this._options.cubeHeight+this._options.gap),C.rectangle(B,E,d,this._options.cubeHeight,this._options)}},i}();f.Cubes=e},540:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Flower=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s=o.canvas,n=s.height,u=s.width,r=new q.Shapes(o),c=new g.AudioData(t);this._options=v({count:20,diameter:n/3,frequencyBand:"mids",rotate:0},this._options);var a=u/2,h=n/2,l=360/this._options.count;this._options.frequencyBand&&c.setFrequencyBand(this._options.frequencyBand),c.scaleData(Math.min(u,n));for(var p=0;p<this._options.count;p++){var _=Math.floor(c.data.length/this._options.count)*p,b=c.data[_],w=r.toRadians(l*p+this._options.rotate),M=r.toRadians(l*(p+1)+this._options.rotate),m=this._options.diameter/2*Math.cos(w)+a,O=this._options.diameter/2*Math.sin(w)+h,C=this._options.diameter/2*Math.cos(M)+a,j=this._options.diameter/2*Math.sin(M)+h,d=this._options.diameter+b,H=d/2*Math.cos(w)+a,y=d/2*Math.sin(w)+h,P=d/2*Math.cos(M)+a,A=d/2*Math.sin(M)+h;r.polygon([{x:m,y:O},{x:H,y},{x:P,y:A},{x:C,y:j}],this._options)}},i}();f.Flower=e},522:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Glob=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s,n=o.canvas,u=n.height,r=n.width,c=new q.Shapes(o),a=new g.AudioData(t),h=r/2,l=u/2;if(this._options=v({count:100,diameter:u/3,frequencyBand:"mids",rounded:!0},this._options),this._options.frequencyBand&&a.setFrequencyBand(this._options.frequencyBand),a.scaleData(Math.min(r,u)),(s=this._options)===null||s===void 0?void 0:s.mirroredX)for(var p=1,_=Math.ceil(a.data.length/2);_<a.data.length;_++)a.data[_]=a.data[Math.ceil(a.data.length/2)-p],p++;var b=[];for(_=0;_<this._options.count;_++){var w=Math.floor(a.data.length/this._options.count)*_,M=a.data[w],m=360/this._options.count,O=this._options.diameter+M,C=h+O/2*Math.cos(c.toRadians(m*_)),j=l+O/2*Math.sin(c.toRadians(m*_));b.push({x:C,y:j})}b.push(b[0]),c.polygon(b,this._options)},i}();f.Glob=e},658:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Lines=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s,n,u,r,c,a,h,l,p,_,b,w=o.canvas,M=w.height,m=w.width,O=new q.Shapes(o),C=new g.AudioData(t);if(this._options=v({count:64,frequencyBand:"mids"},this._options),this._options.frequencyBand&&C.setFrequencyBand(this._options.frequencyBand),C.scaleData(Math.min(m,M)),(s=this._options)===null||s===void 0?void 0:s.mirroredX)for(var j=1,d=Math.ceil(C.data.length/2);d<C.data.length;d++)C.data[d]=C.data[Math.ceil(C.data.length/2)-j],j++;if(!((n=this._options)===null||n===void 0)&&n.top)for(d=1;d<=this._options.count;d++){var H=Math.floor(C.data.length/this._options.count)*d,y=C.data[H],P=0,A=D=m/this._options.count*d,B=y;O.line(D,P,A,B,this._options)}if(!((u=this._options)===null||u===void 0)&&u.right)for(d=1;d<=this._options.count;d++){H=Math.floor(C.data.length/this._options.count)*d;var D=m;A=m-(y=C.data[H]),B=P=M/this._options.count*d,O.line(D,P,A,B,this._options)}if(!((r=this._options)===null||r===void 0)&&r.bottom||!(!((c=this._options)===null||c===void 0)&&c.top)&&!(!((a=this._options)===null||a===void 0)&&a.right)&&!(!((h=this._options)===null||h===void 0)&&h.left)&&!(!((l=this._options)===null||l===void 0)&&l.center))for(d=1;d<=this._options.count;d++)H=Math.floor(C.data.length/this._options.count)*d,y=C.data[H],A=D=m/this._options.count*d,B=(P=M)-y,O.line(D,P,A,B,this._options);if(!((p=this._options)===null||p===void 0)&&p.left)for(d=1;d<=this._options.count;d++)H=Math.floor(C.data.length/this._options.count)*d,D=0,A=y=C.data[H],B=P=M/this._options.count*d,O.line(D,P,A,B,this._options);if(!((_=this._options)===null||_===void 0)&&_.center)for(d=1;d<=this._options.count;d++)H=Math.floor(C.data.length/this._options.count)*d,y=C.data[H],A=D=m/this._options.count*d,B=(P=M/2)-y,O.line(D,P,A,B,this._options),!((b=this._options)===null||b===void 0)&&b.mirroredY&&(A=D=m/this._options.count*d,B=(P=M/2)+y,O.line(D,P,A,B,this._options))},i}();f.Lines=e},817:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Shine=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s,n=o.canvas,u=n.height,r=n.width,c=new q.Shapes(o),a=new g.AudioData(t);this._options=v({count:30,rotate:0,diameter:u/3,frequencyBand:"mids"},this._options);var h=r/2,l=u/2,p=360/this._options.count;this._options.frequencyBand&&a.setFrequencyBand(this._options.frequencyBand),a.scaleData(Math.min(r,u));for(var _=0;_<this._options.count;_++){var b=Math.floor(a.data.length/this._options.count)*_,w=a.data[b],M=c.toRadians(p*_+this._options.rotate),m=!((s=this._options)===null||s===void 0)&&s.offset?this._options.diameter-w/2:this._options.diameter,O=this._options.diameter+w,C=m/2*Math.cos(M)+h,j=m/2*Math.sin(M)+l,d=O/2*Math.cos(M)+h,H=O/2*Math.sin(M)+l;c.line(C,j,d,H,this._options)}},i}();f.Shine=e},123:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Square=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s=o.canvas,n=s.height,u=s.width,r=new q.Shapes(o),c=new g.AudioData(t);this._options=v({count:40,diameter:n/3,frequencyBand:"mids"},this._options);var a=this._options.count/4,h=u/2,l=n/2;this._options.frequencyBand&&c.setFrequencyBand(this._options.frequencyBand),c.scaleData(Math.min(u,n));for(var p=0;p<a;p++){var _=Math.floor(c.data.length/this._options.count)*p,b=c.data[_],w=this._options.diameter/a,M=h-this._options.diameter/2+w*p,m=l-this._options.diameter/2;r.line(M,m,M,m-b,this._options)}for(p=0;p<a;p++){_=Math.floor(c.data.length/this._options.count)*(2*p),b=c.data[_];var O=this._options.diameter/a;M=h+this._options.diameter/2,m=l-this._options.diameter/2+O*p,r.line(M,m,M+b,m,this._options)}for(p=0;p<a;p++)_=Math.floor(c.data.length/this._options.count)*(3*p),b=c.data[_],w=this._options.diameter/a,M=h-this._options.diameter/2+w*p,m=l+this._options.diameter/2,r.line(M,m,M,m+b,this._options);for(p=0;p<a;p++)_=Math.floor(c.data.length/this._options.count)*(4*p),b=c.data[_],O=this._options.diameter/a,M=h-this._options.diameter/2,m=l-this._options.diameter/2+O*p,r.line(M,m,M-b,m,this._options)},i}();f.Square=e},270:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Turntable=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s=o.canvas,n=s.height,u=s.width,r=new q.Shapes(o),c=new g.AudioData(t);this._options=v({count:20,rotate:0,diameter:n/3,cubeHeight:20,frequencyBand:"mids",gap:5},this._options);var a=u/2,h=n/2,l=360/this._options.count;this._options.frequencyBand&&c.setFrequencyBand(this._options.frequencyBand),c.scaleData(Math.min(u,n));for(var p=0;p<this._options.count;p++)for(var _=Math.floor(c.data.length/this._options.count)*p,b=c.data[_],w=0;w<b/this._options.cubeHeight;w++){var M=this._options.diameter+this._options.cubeHeight*w+this._options.gap,m=this._options.diameter+this._options.cubeHeight*(w+1),O=r.toRadians(l*p+this._options.rotate+this._options.gap/4),C=r.toRadians(l*(p+1)+this._options.rotate),j=M/2*Math.cos(O)+a,d=M/2*Math.sin(O)+h,H=M/2*Math.cos(C)+a,y=M/2*Math.sin(C)+h,P=m/2*Math.cos(O)+a,A=m/2*Math.sin(O)+h,B=m/2*Math.cos(C)+a,D=m/2*Math.sin(C)+h;r.polygon([{x:j,y:d},{x:P,y:A},{x:B,y:D},{x:H,y}],this._options)}},i}();f.Turntable=e},857:function(T,f,x){var v=this&&this.__assign||function(){return v=Object.assign||function(i){for(var t,o=1,s=arguments.length;o<s;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},v.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0}),f.Wave=void 0;var q=x(426),g=x(941),e=function(){function i(t){this._options=t??{}}return i.prototype.draw=function(t,o){var s=o.canvas,n=s.height,u=s.width,r=new g.AudioData(t),c=new q.Shapes(o);if(this._options=v({count:64,frequencyBand:"mids"},this._options),this._options.frequencyBand&&r.setFrequencyBand(this._options.frequencyBand),r.scaleData(Math.min(u,n)),this._options.mirroredX)for(var a=1,h=Math.ceil(r.data.length/2);h<r.data.length;h++)r.data[h]=r.data[Math.ceil(r.data.length/2)-a],a++;if(this._options.top){var l=[{x:0,y:0}];for(h=0;h<=this._options.count;h++){var p=Math.floor(r.data.length/this._options.count)*h,_=r.data[p];l.push({x:Math.floor(u/this._options.count)*h,y:_})}l.push({x:u,y:0}),c.polygon(l,this._options)}if(this._options.right){for(l=[{x:u,y:0}],h=0;h<=this._options.count;h++)p=Math.floor(r.data.length/this._options.count)*h,_=r.data[p],l.push({x:u-_,y:Math.floor(u/this._options.count)*h});l.push({x:u,y:n}),c.polygon(l,this._options)}if(this._options.bottom||!this._options.top&&!this._options.right&&!this._options.left&&!this._options.center){for(l=[{x:0,y:n}],h=0;h<=this._options.count;h++)p=Math.floor(r.data.length/this._options.count)*h,_=r.data[p],l.push({x:Math.floor(u/this._options.count)*h,y:n-_});l.push({x:u,y:n}),c.polygon(l,this._options)}if(this._options.left){for(l=[{x:0,y:0}],h=0;h<=this._options.count;h++)p=Math.floor(r.data.length/this._options.count)*h,_=r.data[p],l.push({x:_,y:Math.floor(u/this._options.count)*h});l.push({x:0,y:n}),c.polygon(l,this._options)}if(this._options.center){for(l=[{x:0,y:n/2}],h=0;h<=this._options.count;h++)p=Math.floor(r.data.length/this._options.count)*h,_=r.data[p],l.push({x:Math.floor(u/this._options.count)*h,y:n/2-_});if(l.push({x:u,y:n/2}),c.polygon(l,this._options),this._options.mirroredY){for(l=[{x:0,y:n/2}],h=0;h<=this._options.count;h++)p=Math.floor(r.data.length/this._options.count)*h,_=r.data[p],l.push({x:Math.floor(u/this._options.count)*h,y:n/2+_});l.push({x:u,y:n/2}),c.polygon(l,this._options)}}},i}();f.Wave=e},941:(T,f)=>{Object.defineProperty(f,"__esModule",{value:!0}),f.AudioData=void 0;var x=function(){function v(q){this.data=q}return v.prototype.setFrequencyBand=function(q){var g=Math.floor(.0625*this.data.length),e=Math.floor(.0625*this.data.length),i=Math.floor(.375*this.data.length),t={base:this.data.slice(0,g),lows:this.data.slice(g+1,g+e),mids:this.data.slice(g+e+1,g+e+i),highs:this.data.slice(g+e+i+1)};this.data=t[q]},v.prototype.scaleData=function(q){q<255&&(this.data=this.data.map(function(g){var e=Math.round(g/255*100)/100;return q*e}))},v}();f.AudioData=x},426:function(T,f){var x=this&&this.__awaiter||function(g,e,i,t){return new(i||(i=Promise))(function(o,s){function n(c){try{r(t.next(c))}catch(a){s(a)}}function u(c){try{r(t.throw(c))}catch(a){s(a)}}function r(c){var a;c.done?o(c.value):(a=c.value,a instanceof i?a:new i(function(h){h(a)})).then(n,u)}r((t=t.apply(g,e||[])).next())})},v=this&&this.__generator||function(g,e){var i,t,o,s,n={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(r){return function(c){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,t=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(!((o=(o=n.trys).length>0&&o[o.length-1])||a[0]!==6&&a[0]!==2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1],o=a;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(a);break}o[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(g,n)}catch(h){a=[6,h],t=0}finally{i=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([r,c])}}};Object.defineProperty(f,"__esModule",{value:!0}),f.Shapes=void 0;var q=function(){function g(e){this._canvasContext=e}return g.prototype.toRadians=function(e){return e*Math.PI/180},g.prototype.toDegrees=function(e){return 180*e/Math.PI},g.prototype._rotatePoint=function(e,i,t,o,s){var n=this.toRadians(s);return{x:Math.cos(n)*(t-e)-Math.sin(n)*(o-i)+e,y:Math.sin(n)*(t-e)+Math.cos(n)*(o-i)+i}},g.prototype._makeGradient=function(e,i){var t=0,o=this._canvasContext.canvas.height/2,s=this._canvasContext.canvas.width,n=this._canvasContext.canvas.height/2;if(i){var u=this._canvasContext.canvas.width/2,r=this._canvasContext.canvas.height/2,c=this._rotatePoint(u,r,t,o,i);t=c.x,o=c.y;var a=this._rotatePoint(u,r,s,n,i);s=a.x,n=a.y}var h=this._canvasContext.createLinearGradient(t,o,s,n);return e.forEach(function(l,p){h.addColorStop(1/e.length*p,l)}),h},g.prototype._makeImage=function(e){return x(this,void 0,void 0,function(){var i,t=this;return v(this,function(o){return(i=new Image).src=e,[2,new Promise(function(s,n){i.onload=function(){var u=t._canvasContext.createPattern(i,"repeat");s(u)}})]})})},g.prototype._implementOptions=function(e,i){var t,o,s,n,u,r,c,a,h,l,p,_,b=this;i===void 0&&(i=!0),typeof e?.lineColor=="string"?this._canvasContext.strokeStyle=e.lineColor:!((t=e?.lineColor)===null||t===void 0)&&t.gradient?this._canvasContext.strokeStyle=this._makeGradient(e.lineColor.gradient,e.lineColor.rotate):!((o=e?.lineColor)===null||o===void 0)&&o.image?this._makeImage((s=e?.lineColor)===null||s===void 0?void 0:s.image).then(function(w){return b._canvasContext.strokeStyle=w}):this._canvasContext.strokeStyle="#000",typeof e?.fillColor=="string"?this._canvasContext.fillStyle=e.fillColor:!((n=e?.fillColor)===null||n===void 0)&&n.gradient?this._canvasContext.fillStyle=this._makeGradient(e.fillColor.gradient,e.fillColor.rotate):!((u=e?.fillColor)===null||u===void 0)&&u.image?this._makeImage((r=e?.fillColor)===null||r===void 0?void 0:r.image).then(function(w){return b._canvasContext.fillStyle=w}):this._canvasContext.fillStyle="#000",this._canvasContext.lineCap=(c=e?.rounded?"round":"butt")!==null&&c!==void 0?c:"butt",this._canvasContext.lineWidth=(a=e?.lineWidth)!==null&&a!==void 0?a:1,this._canvasContext.shadowColor=(l=(h=e?.glow)===null||h===void 0?void 0:h.color)!==null&&l!==void 0?l:"rgba(0,0,0,0)",this._canvasContext.shadowBlur=(_=(p=e?.glow)===null||p===void 0?void 0:p.strength)!==null&&_!==void 0?_:0,this._canvasContext.shadowOffsetX=0,this._canvasContext.shadowOffsetY=0,i&&this._canvasContext.closePath(),this._canvasContext.stroke(),i&&this._canvasContext.fill()},g.prototype.arc=function(e,i,t,o,s,n){return this._canvasContext.beginPath(),this._canvasContext.arc(e,i,t/2,this.toRadians(o),this.toRadians(s)),this._implementOptions(n,!1),this},g.prototype.circle=function(e,i,t,o){return this._canvasContext.beginPath(),this._canvasContext.arc(e,i,t/2,0,2*Math.PI),this._implementOptions(o),this},g.prototype.line=function(e,i,t,o,s){return this._canvasContext.beginPath(),this._canvasContext.moveTo(e,i),this._canvasContext.lineTo(t,o),this._implementOptions(s),this},g.prototype.polygon=function(e,i){var t;this._canvasContext.beginPath(),this._canvasContext.moveTo(e[0].x,e[0].y);for(var o=0;o<e.length;o++){var s=e[o],n=(t=e[o+1])!==null&&t!==void 0?t:s,u=(s.x+n.x)/2,r=(s.y+n.y)/2;i?.rounded?this._canvasContext.quadraticCurveTo(e[o].x,e[o].y,u,r):this._canvasContext.lineTo(e[o].x,e[o].y)}return this._implementOptions(i),this},g.prototype.rectangle=function(e,i,t,o,s){var n,u=(n=s?.radius)!==null&&n!==void 0?n:0;return t<2*u&&(u=t/2),o<2*u&&(u=o/2),this._canvasContext.beginPath(),this._canvasContext.moveTo(e+u,i),this._canvasContext.arcTo(e+t,i,e+t,i+o,u),this._canvasContext.arcTo(e+t,i+o,e,i+o,u),this._canvasContext.arcTo(e,i+o,e,i,u),this._canvasContext.arcTo(e,i,e+t,i,u),this._implementOptions(s),this},g}();f.Shapes=q}},L={};function k(T){var f=L[T];if(f!==void 0)return f.exports;var x=L[T]={exports:{}};return R[T].call(x.exports,x,x.exports,k),x.exports}var I={};return(()=>{var T=I;Object.defineProperty(T,"__esModule",{value:!0}),T.Wave=void 0;var f=k(935),x=k(519),v=k(938),q=k(540),g=k(522),e=k(658),i=k(817),t=k(123),o=k(270),s=k(857),n=function(){function u(r,c,a){a===void 0&&(a=!1);var h=this;this.animations={Arcs:f.Arcs,Circles:x.Circles,Cubes:v.Cubes,Flower:q.Flower,Glob:g.Glob,Lines:e.Lines,Shine:i.Shine,Square:t.Square,Turntable:o.Turntable,Wave:s.Wave},this._activeAnimations=[],this._canvasElement=c,this._canvasContext=this._canvasElement.getContext("2d"),this._muteAudio=a,this._interacted=!1,r instanceof HTMLAudioElement?(this._audioElement=r,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?["touchstart","touchmove","touchend","mouseup","click"].forEach(function(l){document.body.addEventListener(l,function(){return h.connectAnalyser()},{once:!0})}):this._audioElement.addEventListener("play",function(){return h.connectAnalyser()},{once:!0})):r instanceof AnalyserNode?(this._audioAnalyser=r,this._audioContext=null,this._audioSource=null,this._play()):r&&(this._audioContext=r.context,this._audioSource=r.source,this._audioAnalyser=this._audioContext.createAnalyser(),this._play())}return u.prototype.connectAnalyser=function(){this._interacted||(this._interacted=!0,this._audioContext=new AudioContext,this._audioSource=this._audioContext.createMediaElementSource(this._audioElement),this._audioAnalyser=this._audioContext.createAnalyser(),this._play())},u.prototype._play=function(){var r=this;this._audioSource&&(this._audioSource.connect(this._audioAnalyser),this._muteAudio||this._audioSource.connect(this._audioContext.destination)),this._audioAnalyser.smoothingTimeConstant=.85,this._audioAnalyser.fftSize=1024;var c=new Uint8Array(this._audioAnalyser.frequencyBinCount),a=function(){r._audioAnalyser.getByteFrequencyData(c),r._canvasContext.clearRect(0,0,r._canvasContext.canvas.width,r._canvasContext.canvas.height),r._activeAnimations.forEach(function(h){h.draw(c,r._canvasContext)}),window.requestAnimationFrame(a)};a()},u.prototype.addAnimation=function(r){this._activeAnimations.push(r)},u.prototype.clearAnimations=function(){this._activeAnimations=[]},u}();T.Wave=n})(),I})())})(X);var z=X.exports;setTimeout(()=>{let G=document.querySelector("#player"),W=document.querySelector("#waves"),R=new z.Wave(G,W);R.addAnimation(new R.animations.Lines({lineColor:"#fff"}))},1e3);let F=new Audio("https://c11.radioboss.fm:8314/stream");F=document.querySelector("main").appendChild(F);F.setAttribute("id","player");F.crossOrigin="anonymous";let N=document.querySelector("#playButton");N.addEventListener("click",G=>{F.paused?F.play():F.pause()});