function r(r,e){try{var t=r()}catch(r){return e(r)}return t&&t.then?t.then(void 0,e):t}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var e=Symbol("RUN_FETCH"),t=function(t,n){var o={started:!1};o.promise=new Promise((function(r){o.resolve=r}));var i=function(e){o.started||(o.promise=function(e){try{return o.started=!0,Promise.resolve(function(i,u){try{var f=r((function(){var i=n?Promise.resolve(function e(t,n){try{var o=!1;return Promise.resolve(r((function(){return t(n)}),(function(r){function i(e){if(o)return e;throw r}var u=function(){if((i=r)&&"function"==typeof i.then)return Promise.resolve(r).then((function(){return o=!0,e(t,n)}));var i}();return u&&u.then?u.then(i):i(u)})))}catch(r){return Promise.reject(r)}}(n,e)).then((function(r){return Promise.resolve(t(r)).then((function(r){o.data=r}))})):Promise.resolve(t(e)).then((function(r){o.data=r}));if(i&&i.then)return i.then((function(){}))}),(function(r){o.error=r}))}catch(r){return u(!0,r)}return f&&f.then?f.then(u.bind(null,!1),u.bind(null,!0)):u(!1,f)}(0,(function(r,e){if(delete o.promise,o.resolve&&(o.resolve(),delete o.resolve),r)throw e;return e})))}catch(r){return Promise.reject(r)}}(e))};return new Proxy({},{get:function(r,t){if(t===e)return i;if(o.promise)throw o.promise;if(o.error)throw o.error;var n=o.data[t];return"function"==typeof n?n.bind(o.data):n},has:function(r,e){if(o.promise)throw o.promise;if(o.error)throw o.error;return e in o.data},ownKeys:function(){if(o.promise)throw o.promise;if(o.error)throw o.error;return Reflect.ownKeys(o.data)}})},n=function(r,t){return r[e](t)};exports.prefetch=function(r,e,o){var i=t(r,o);return n(i,e),i},exports.prepare=t,exports.run=n;
//# sourceMappingURL=index.js.map
