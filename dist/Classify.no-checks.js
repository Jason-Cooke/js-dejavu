define("Utils/lang/kindOf",[],function(){function d(d){return d===null?"Null":d===c?"Undefined":a.exec(b.call(d))[1]}var a=/^\[object (.*)\]$/,b=Object.prototype.toString,c;return d}),define("Utils/lang/isKind",["./kindOf"],function(a){function b(b,c){return a(b)===c}return b}),define("Utils/lang/isObject",["./isKind"],function(a){function b(b){return a(b,"Object")}return b}),define("Utils/lang/isArray",["./isKind"],function(a){var b=Array.isArray||function(b){return a(b,"Array")};return b}),define("Utils/object/hasOwn",[],function(){function a(a,b){return Object.prototype.hasOwnProperty.call(a,b)}return a}),define("Utils/object/mixIn",["./hasOwn"],function(a){function b(b,c){var d=1,e=arguments.length,f,g;while(g=arguments[d++])for(f in g)a(g,f)&&(b[f]=g[f]);return b}return b}),define("Utils/lang/createObject",["../object/mixIn"],function(a){function b(b,c){function d(){}return d.prototype=b,a(new d,c)}return b}),define("Utils/object/forOwn",["../lang/isObject","./hasOwn"],function(a,b){function e(){d=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=!0;for(var a in{toString:null})c=!1}function f(b,f,h){var i,j=0;if(!a(b))throw new TypeError("forOwn called on a non-object");c==null&&e();for(i in b)g(f,b,i,h);if(c)while(i=d[j++])g(f,b,i,h)}function g(a,c,d,e){b(c,d)&&a.call(e,c[d],d,c)}var c,d;return f}),define("Utils/object/keys",["./forOwn"],function(a){var b=Object.keys||function(b){var c=[];return a(b,function(a,b){c.push(b)}),c};return b}),define("Utils/array/forEach",[],function(){var a=Array.prototype.forEach?function(a,b,c){a.forEach(b,c)}:function(a,b,c){for(var d=0,e=a.length>>>0;d<e;d++)d in a&&b.call(c,a[d],d,a)};return a}),define("Utils/lang/bind",[],function(){function a(a,b){return Array.prototype.slice.call(a,b||0)}function b(b,c,d){var e=a(arguments,2);return function(){return b.apply(c,e.concat(a(arguments)))}}return b}),define("Utils/lang/isArguments",["./isKind"],function(a){var b=a(arguments,"Arguments")?function(b){return a(b,"Arguments")}:function(a){return!!a&&!!Object.prototype.hasOwnProperty.call(a,"callee")};return b}),define("Utils/lang/toArray",["./isArray","./isObject","./isArguments"],function(a,b,c){function e(e){var f;return e==null?f=[]:e&&e!==d&&(a(e)||c(e)||b(e)&&"length"in e)?f=Array.prototype.slice.call(e):f=[e],f}var d=this;return e}),define("Classify.Interface",[],function(){function a(a){var b=function(){};return b}return a}),define("Classify.Abstract",["Trinity/Classify","require"],function(a,b){return function(c){a=b("Trinity/Classify");var d;return c.Abstracts&&delete c.Abstracts,d=a(c),d}}),define("Trinity/Classify",["Utils/lang/isObject","Utils/lang/isArray","Utils/lang/createObject","Utils/object/mixIn","Utils/object/keys","Utils/array/forEach","Utils/lang/bind","Utils/lang/toArray","Classify.Abstract","Classify.Interface"],function(a,b,c,d,e,f,g,h,i,j){function k(i){function l(a,b){a=h(a);var c,e=a.length,f,g,i;for(c=0;c<e;c+=1)g=a[c],i=a[c].prototype,i&&i.$constructor?(f=i.$constructor,delete i.constructor,d(b.prototype,i),i.$constructor=f):d(b.prototype,i||g)}function m(a,b,c){var d=a.length-1;for(d;d>=0;d-=1)c[a[d]]=g(c[a[d]],b)}function n(a){var b=a.Super?a.Super.$constructor:null,c=a.prototype;b&&b.$binds?a.$binds=(c.Binds||[]).concat(b.$binds):i.Binds&&(a.$binds=c.Binds),delete c.Binds}function o(a){var b=a.Super?a.Super.$constructor:null;a.prototype.Statics&&(d(a,a.prototype.Statics),a.$statics=e(a.prototype.Statics)),b&&b.$statics&&(a.$statics||(a.$statics=[]),f(b.$statics,function(c){a[c]||(a[c]=b[c],a.$statics.push(c))}))}function p(c){var e;for(e in c)b(c[e])?c[e]=[].concat(c[e]):a(c[e])&&(c[e]=d({},c[e]))}function q(a){return function(){p(this),this.$constructor.$binds&&m(this.$constructor.$binds,this,this),a.apply(this,arguments)}}delete i.Name;var j,k;return i.Extends?(k=i.Extends,delete i.Extends,i.initialize=i.initialize||function(){k.prototype.initialize.apply(this,arguments)},j=q(i.initialize),j.Super=k.prototype,j.prototype=c(k.prototype,i)):(i.initialize=i.initialize||function(){},j=q(i.initialize),j.prototype=i),j.prototype.$constructor=j,i.Borrows&&(l(i.Borrows,j),delete j.prototype.Borrows),i.Binds&&(n(j),delete j.prototype.Binds),o(j),i.Statics&&delete j.prototype.Statics,i.Implements&&delete j.prototype.Implements,j}return k.Abstract=i,k.Interface=j,k})