/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		2:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "js/" + chunkId + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(13);\r\n__webpack_require__(5);\r\n__webpack_require__(15);\r\n\r\n__webpack_require__(6)(function(event) {\r\n\t__webpack_require__(16);\r\n});\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/doc.js\n ** module id = 0\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./app/doc.js?");

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	eval("if(typeof GA_TRACKING_CODE !== \"undefined\") {\r\n\t(function(window, document, script, url, r, tag, firstScriptTag) {\r\n\t\twindow['GoogleAnalyticsObject']=r;\r\n\t\twindow[r] = window[r] || function() {\r\n\t\t\t(window[r].q = window[r].q || []).push(arguments)\r\n\t\t};\r\n\t\twindow[r].l = 1*new Date();\r\n\t\ttag = document.createElement(script),\r\n\t\tfirstScriptTag = document.getElementsByTagName(script)[0];\r\n\t\ttag.async = 1;\r\n\t\ttag.src = url;\r\n\t\tfirstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\r\n\t})(\r\n\t\twindow,\r\n\t\tdocument,\r\n\t\t'script',\r\n\t\t'//www.google-analytics.com/analytics.js',\r\n\t\t'ga'\r\n\t);\r\n\r\n\tvar ga = window.ga;\r\n\r\n\tga('create', GA_TRACKING_CODE, GA_TRACKING_CONFIG);\r\n\tga('send', 'pageview');\r\n\r\n\tmodule.exports = function() {\r\n\t\treturn window.ga.apply(window.ga, arguments);\r\n\t};\r\n} else {\r\n\tmodule.exports = function() {}\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/googleAnalytics.js\n ** module id = 5\n ** module chunks = 0 2 4 5\n **/\n//# sourceURL=webpack:///./app/googleAnalytics.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("/*!\r\n * contentloaded.js\r\n *\r\n * Author: Diego Perini (diego.perini at gmail.com)\r\n * Summary: cross-browser wrapper for DOMContentLoaded\r\n * Updated: 20101020\r\n * License: MIT\r\n * Version: 1.2\r\n *\r\n * URL:\r\n * http://javascript.nwbox.com/ContentLoaded/\r\n * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE\r\n *\r\n */\r\n\r\n// @win window reference\r\n// @fn function reference\r\nfunction contentLoaded(win, fn) {\r\n\r\n\tvar done = false, top = true,\r\n\r\n\tdoc = win.document, root = doc.documentElement,\r\n\r\n\tadd = doc.addEventListener ? 'addEventListener' : 'attachEvent',\r\n\trem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',\r\n\tpre = doc.addEventListener ? '' : 'on',\r\n\r\n\tinit = function(e) {\r\n\t\tif (e.type == 'readystatechange' && doc.readyState != 'complete') return;\r\n\t\t(e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);\r\n\t\tif (!done && (done = true)) fn.call(win, e.type || e);\r\n\t},\r\n\r\n\tpoll = function() {\r\n\t\ttry { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }\r\n\t\tinit('poll');\r\n\t};\r\n\r\n\tif (doc.readyState == 'complete') fn.call(win, 'lazy');\r\n\telse {\r\n\t\tif (doc.createEventObject && root.doScroll) {\r\n\t\t\ttry { top = !win.frameElement; } catch(e) { }\r\n\t\t\tif (top) poll();\r\n\t\t}\r\n\t\tdoc[add](pre + 'DOMContentLoaded', init, false);\r\n\t\tdoc[add](pre + 'readystatechange', init, false);\r\n\t\twin[add](pre + 'load', init, false);\r\n\t}\r\n\r\n}\r\n\r\nmodule.exports = function(fn) {\r\n\tcontentLoaded(window, fn);\r\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/onContentLoaded.js\n ** module id = 6\n ** module chunks = 0 2\n **/\n//# sourceURL=webpack:///./app/onContentLoaded.js?");

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	eval("module.exports = function linkToTitle(link) {\r\n\tif(!link) return link;\r\n\treturn link.toLowerCase().replace(/[^a-z0-9\\.]/g, \" \");\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./lib/linkToTitle.js\n ** module id = 8\n ** module chunks = 0 2\n **/\n//# sourceURL=webpack:///./lib/linkToTitle.js?");

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	eval("module.exports = function downloadWiki(wiki, callback) {\r\n\tvar request = new XMLHttpRequest();\r\n\trequest.open(\"GET\", \"https://github.com/XUEJS/webpack-docs/wiki\" + wiki, true);\r\n\t// request.open(\"GET\", \"//github-wiki.herokuapp.com/webpack/docs/\" + wiki, true);\r\n\trequest.onreadystatechange = function() {\r\n\t\tif(request.readyState === 4) {\r\n\t\t\tif(request.status !== 200) {\r\n\t\t\t\treturn callback(new Error(\"Statuscode is \" + request.status));\r\n\t\t\t} else {\r\n\t\t\t\treturn callback(null, request.responseText);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\trequest.send(null);\r\n};\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/downloadWiki.js\n ** module id = 10\n ** module chunks = 1 2\n **/\n//# sourceURL=webpack:///./app/downloadWiki.js?");

/***/ },
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/css/doc.styl\n ** module id = 13\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./app/css/doc.styl?");

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	eval("window.disqus_shortname = \"webpack\";\r\n\r\nvar dsq = document.createElement(\"script\");\r\ndsq.type = \"text/javascript\";\r\ndsq.async = true;\r\ndsq.src = \"//\" + window.disqus_shortname + \".disqus.com/embed.js\";\r\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\r\n\r\nexports.update = function updatePage(identifier) {\r\n\tif(typeof DISQUS === \"undefined\") {\r\n\t\tsetTimeout(function() {\r\n\t\t\tupdatePage(identifier);\r\n\t\t}, 1000);\r\n\t\treturn;\r\n\t}\r\n\tDISQUS.reset({\r\n\t\treload: true,\r\n\t\tconfig: function() {\r\n\t\t\tthis.page.identifier = identifier;\r\n\t\t\tthis.page.url = location + \"\";\r\n\t\t\tthis.page.title = document.title;\r\n\t\t}\r\n\t});\r\n};\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/disqus.js\n ** module id = 15\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./app/disqus.js?");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	eval("var linkToTitle = __webpack_require__(8);\r\nvar downloadWiki = __webpack_require__(10);\r\n\r\nvar LRU = __webpack_require__(17);\r\n\r\nvar INTRA_LINK = /^([a-z0-9\\-\\.]+)\\.html$/i;\r\n\r\n\r\nfunction hasModifier(event) {\r\n\treturn event.metaKey || event.shiftKey || event.altKey || event.ctrlKey;\r\n}\r\n\r\nfunction bindIntraLinks() {\r\n\tdocument.body.addEventListener(\"click\", function(event) {\r\n\t\tif(event.target.tagName === \"A\" && !hasModifier(event) && (event.which === 1) && INTRA_LINK.test(event.target.getAttribute(\"href\"))) {\r\n\t\t\tvar href = event.target.getAttribute(\"href\");\r\n\t\t\tINTRA_LINK.lastIndex = 0;\r\n\t\t\tvar wiki = INTRA_LINK.exec(href)[1];\r\n\t\t\tdocument.title = linkToTitle(wiki);\r\n\t\t\tcurrentPage = wiki;\r\n\t\t\thistory.pushState(null, null, href);\r\n\t\t\tloadPage(wiki, false);\r\n\t\t\tevent.preventDefault();\r\n\t\t}\r\n\t}, false);\r\n}\r\n\r\nfunction highlightIntraLinks() {\r\n\tif(document.querySelectorAll) {\r\n\t\tvar elements = document.querySelectorAll('a[href$=\".html\"]');\r\n\t\tfor(var i = 0; i < elements.length; i++) {\r\n\t\t\tvar element = elements[i];\r\n\t\t\tvar href = element.getAttribute(\"href\");\r\n\t\t\tif(element.classList && INTRA_LINK.test(href)) {\r\n\t\t\t\tINTRA_LINK.lastIndex = 0;\r\n\t\t\t\tvar wiki = INTRA_LINK.exec(href)[1];\r\n\t\t\t\tif((currentPage === wiki) ^ (element.classList.contains(\"active\"))) {\r\n\t\t\t\t\telement.classList.toggle(\"active\");\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\nvar contentElement = document.getElementById(\"wiki\");\r\nvar titleElement = document.getElementById(\"wikititle\");\r\nvar editElement = document.getElementById(\"wikieditlink\");\r\n\r\nvar pagesCache = LRU({\r\n\tmax: 10,\r\n\tmaxAge: 5 * 60 * 1000 // 5m\r\n});\r\nvar currentPage = \"\";\r\n\r\nwindow.addEventListener(\"popstate\", function() {\r\n\tloadCurrentPage(false);\r\n});\r\n\r\nhighlightIntraLinks();\r\nloadCurrentPage(true);\r\n\r\nfunction loadCurrentPage(initial) {\r\n\tvar match = /\\/([a-z0-9\\-\\.]+)\\.html$/i.exec(location.pathname);\r\n\tif(match) {\r\n\t\tvar wiki = match[1];\r\n\t\tif(wiki !== currentPage || initial) {\r\n\t\t\tcurrentPage = wiki;\r\n\t\t\tloadPage(wiki, initial);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction reportAnalytics() {\r\n\tvar ga = __webpack_require__(5);\r\n\tvar location = window.location.protocol +\r\n\t\t'//' + window.location.hostname +\r\n\t\twindow.location.pathname +\r\n\t\twindow.location.search;\r\n\tga('set', 'location', location);\r\n\tga('set', 'title', document.title);\r\n\tga('send', 'pageview');\r\n}\r\n\r\nfunction updateDisqus() {\r\n\tvar disqus = __webpack_require__(15);\r\n\tdisqus.update(currentPage);\r\n}\r\n\r\nvar EDIT_LINK = \"https://github.com/XUEJS/webpack-docs/wiki/XXX/_edit\";\r\n\r\nfunction loadPage(wiki, initial) {\r\n\tvar cacheEntry = pagesCache.get(wiki);\r\n\tif(cacheEntry) {\r\n\t\teditElement.setAttribute(\"href\", EDIT_LINK.replace(/XXX/g, wiki));\r\n\t\ttitleElement.innerHTML = linkToTitle(wiki);\r\n\t\tcontentElement.innerHTML = cacheEntry;\r\n\t\tif(!initial) {\r\n\t\t\tif(!window.location.hash) window.scrollTo(0, 0);\r\n\t\t\treportAnalytics();\r\n\t\t\tupdateDisqus();\r\n\t\t}\r\n\t\thighlightIntraLinks();\r\n\t\treturn;\r\n\t}\r\n\r\n\tif(!initial && document.body.classList) document.body.classList.add(\"loading\");\r\n\r\n\tdownloadWiki(wiki, function(err, result) {\r\n\t\tif(err) {\r\n\t\t\tif(initial) {\r\n\t\t\t\tif(document.body.classList) document.body.classList.remove(\"loading\");\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\twindow.location.reload();\r\n\t\t} else {\r\n\t\t\t__webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(18)]; (function(renderMarkdown) {\r\n\t\t\t\tnext(renderMarkdown(result));\r\n\t\t\t}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});\r\n\t\t}\r\n\t\tfunction next(result) {\r\n\t\t\tpagesCache.set(wiki, result);\r\n\t\t\tif(document.body.classList) document.body.classList.remove(\"loading\");\r\n\t\t\teditElement.setAttribute(\"href\", EDIT_LINK.replace(/XXX/g, wiki));\r\n\t\t\ttitleElement.innerHTML = linkToTitle(wiki);\r\n\t\t\tcontentElement.innerHTML = result;\r\n\t\t\tif(!initial) {\r\n\t\t\t\tif(!window.location.hash) window.scrollTo(0, 0);\r\n\t\t\t\treportAnalytics();\r\n\t\t\t\tupdateDisqus();\r\n\t\t\t}\r\n\t\t\tif(initial) bindIntraLinks();\r\n\t\t\thighlightIntraLinks();\r\n\t\t}\r\n\t});\r\n\t__webpack_require__.e/* require */(3/* duplicate */, function() {[__webpack_require__(18)];}); // Start loading in parallel\r\n}\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/bindToIntraLinks.js\n ** module id = 16\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./app/bindToIntraLinks.js?");

/***/ },
/* 17 */
/***/ function(module, exports) {

	eval(";(function () { // closure for web browsers\n\nif (typeof module === 'object' && module.exports) {\n  module.exports = LRUCache\n} else {\n  // just set the global for non-node platforms.\n  this.LRUCache = LRUCache\n}\n\nfunction hOP (obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key)\n}\n\nfunction naiveLength () { return 1 }\n\nfunction LRUCache (options) {\n  if (!(this instanceof LRUCache))\n    return new LRUCache(options)\n\n  if (typeof options === 'number')\n    options = { max: options }\n\n  if (!options)\n    options = {}\n\n  this._max = options.max\n  // Kind of weird to have a default max of Infinity, but oh well.\n  if (!this._max || !(typeof this._max === \"number\") || this._max <= 0 )\n    this._max = Infinity\n\n  this._lengthCalculator = options.length || naiveLength\n  if (typeof this._lengthCalculator !== \"function\")\n    this._lengthCalculator = naiveLength\n\n  this._allowStale = options.stale || false\n  this._maxAge = options.maxAge || null\n  this._dispose = options.dispose\n  this.reset()\n}\n\n// resize the cache when the max changes.\nObject.defineProperty(LRUCache.prototype, \"max\",\n  { set : function (mL) {\n      if (!mL || !(typeof mL === \"number\") || mL <= 0 ) mL = Infinity\n      this._max = mL\n      if (this._length > this._max) trim(this)\n    }\n  , get : function () { return this._max }\n  , enumerable : true\n  })\n\n// resize the cache when the lengthCalculator changes.\nObject.defineProperty(LRUCache.prototype, \"lengthCalculator\",\n  { set : function (lC) {\n      if (typeof lC !== \"function\") {\n        this._lengthCalculator = naiveLength\n        this._length = this._itemCount\n        for (var key in this._cache) {\n          this._cache[key].length = 1\n        }\n      } else {\n        this._lengthCalculator = lC\n        this._length = 0\n        for (var key in this._cache) {\n          this._cache[key].length = this._lengthCalculator(this._cache[key].value)\n          this._length += this._cache[key].length\n        }\n      }\n\n      if (this._length > this._max) trim(this)\n    }\n  , get : function () { return this._lengthCalculator }\n  , enumerable : true\n  })\n\nObject.defineProperty(LRUCache.prototype, \"length\",\n  { get : function () { return this._length }\n  , enumerable : true\n  })\n\n\nObject.defineProperty(LRUCache.prototype, \"itemCount\",\n  { get : function () { return this._itemCount }\n  , enumerable : true\n  })\n\nLRUCache.prototype.forEach = function (fn, thisp) {\n  thisp = thisp || this\n  var i = 0\n  var itemCount = this._itemCount\n\n  for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {\n    i++\n    var hit = this._lruList[k]\n    if (isStale(this, hit)) {\n      del(this, hit)\n      if (!this._allowStale) hit = undefined\n    }\n    if (hit) {\n      fn.call(thisp, hit.value, hit.key, this)\n    }\n  }\n}\n\nLRUCache.prototype.keys = function () {\n  var keys = new Array(this._itemCount)\n  var i = 0\n  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {\n    var hit = this._lruList[k]\n    keys[i++] = hit.key\n  }\n  return keys\n}\n\nLRUCache.prototype.values = function () {\n  var values = new Array(this._itemCount)\n  var i = 0\n  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {\n    var hit = this._lruList[k]\n    values[i++] = hit.value\n  }\n  return values\n}\n\nLRUCache.prototype.reset = function () {\n  if (this._dispose && this._cache) {\n    for (var k in this._cache) {\n      this._dispose(k, this._cache[k].value)\n    }\n  }\n\n  this._cache = Object.create(null) // hash of items by key\n  this._lruList = Object.create(null) // list of items in order of use recency\n  this._mru = 0 // most recently used\n  this._lru = 0 // least recently used\n  this._length = 0 // number of items in the list\n  this._itemCount = 0\n}\n\n// Provided for debugging/dev purposes only. No promises whatsoever that\n// this API stays stable.\nLRUCache.prototype.dump = function () {\n  return this._cache\n}\n\nLRUCache.prototype.dumpLru = function () {\n  return this._lruList\n}\n\nLRUCache.prototype.set = function (key, value, maxAge) {\n  maxAge = maxAge || this._maxAge\n  var now = maxAge ? Date.now() : 0\n\n  if (hOP(this._cache, key)) {\n    // dispose of the old one before overwriting\n    if (this._dispose)\n      this._dispose(key, this._cache[key].value)\n\n    this._cache[key].now = now\n    this._cache[key].maxAge = maxAge\n    this._cache[key].value = value\n    this.get(key)\n    return true\n  }\n\n  var len = this._lengthCalculator(value)\n  var hit = new Entry(key, value, this._mru++, len, now, maxAge)\n\n  // oversized objects fall out of cache automatically.\n  if (hit.length > this._max) {\n    if (this._dispose) this._dispose(key, value)\n    return false\n  }\n\n  this._length += hit.length\n  this._lruList[hit.lu] = this._cache[key] = hit\n  this._itemCount ++\n\n  if (this._length > this._max)\n    trim(this)\n\n  return true\n}\n\nLRUCache.prototype.has = function (key) {\n  if (!hOP(this._cache, key)) return false\n  var hit = this._cache[key]\n  if (isStale(this, hit)) {\n    return false\n  }\n  return true\n}\n\nLRUCache.prototype.get = function (key) {\n  return get(this, key, true)\n}\n\nLRUCache.prototype.peek = function (key) {\n  return get(this, key, false)\n}\n\nLRUCache.prototype.pop = function () {\n  var hit = this._lruList[this._lru]\n  del(this, hit)\n  return hit || null\n}\n\nLRUCache.prototype.del = function (key) {\n  del(this, this._cache[key])\n}\n\nfunction get (self, key, doUse) {\n  var hit = self._cache[key]\n  if (hit) {\n    if (isStale(self, hit)) {\n      del(self, hit)\n      if (!self._allowStale) hit = undefined\n    } else {\n      if (doUse) use(self, hit)\n    }\n    if (hit) hit = hit.value\n  }\n  return hit\n}\n\nfunction isStale(self, hit) {\n  if (!hit || (!hit.maxAge && !self._maxAge)) return false\n  var stale = false;\n  var diff = Date.now() - hit.now\n  if (hit.maxAge) {\n    stale = diff > hit.maxAge\n  } else {\n    stale = self._maxAge && (diff > self._maxAge)\n  }\n  return stale;\n}\n\nfunction use (self, hit) {\n  shiftLU(self, hit)\n  hit.lu = self._mru ++\n  self._lruList[hit.lu] = hit\n}\n\nfunction trim (self) {\n  while (self._lru < self._mru && self._length > self._max)\n    del(self, self._lruList[self._lru])\n}\n\nfunction shiftLU (self, hit) {\n  delete self._lruList[ hit.lu ]\n  while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++\n}\n\nfunction del (self, hit) {\n  if (hit) {\n    if (self._dispose) self._dispose(hit.key, hit.value)\n    self._length -= hit.length\n    self._itemCount --\n    delete self._cache[ hit.key ]\n    shiftLU(self, hit)\n  }\n}\n\n// classy, since V8 prefers predictable objects.\nfunction Entry (key, value, lu, length, now, maxAge) {\n  this.key = key\n  this.value = value\n  this.lu = lu\n  this.length = length\n  this.now = now\n  if (maxAge) this.maxAge = maxAge\n}\n\n})()\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/lru-cache/lib/lru-cache.js\n ** module id = 17\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./~/lru-cache/lib/lru-cache.js?");

/***/ }
/******/ ]);