/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var lightRed = exports.lightRed = '#fddfa6';
var mainRed = exports.mainRed = '#c40707';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactRouterDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _Navbar = __webpack_require__(9);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Home = __webpack_require__(10);

var _Home2 = _interopRequireDefault(_Home);

var _Posters = __webpack_require__(12);

var _Posters2 = _interopRequireDefault(_Posters);

var _Register = __webpack_require__(13);

var _Register2 = _interopRequireDefault(_Register);

var _Colors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var footerStyle = {
  color: 'white',
  background: '#101010'
};

var wrapperStyle = {
  backgroundColor: _Colors.lightRed,
  //backgroundImage: 'url(img/a1.jpg)',
  backgroundSize: '100%'
};

var mainStyle = {
  backgroundColor: "rgba(253, 223, 166 , 0.85)"
};

var App = function App() {
  return React.createElement(
    'div',
    { className: 'wrapper', style: wrapperStyle },
    React.createElement(
      'div',
      { className: 'main', style: mainStyle },
      React.createElement(
        'div',
        { className: 'box' },
        React.createElement(
          _reactRouterDom.HashRouter,
          null,
          React.createElement(
            'div',
            null,
            React.createElement(_Navbar2.default, null),
            React.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
            React.createElement(
              'div',
              { className: 'container' },
              React.createElement(_reactRouterDom.Route, { path: '/posters', component: _Posters2.default }),
              React.createElement(_reactRouterDom.Route, { path: '/aanmelden', component: _Register2.default })
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'footer', style: footerStyle },
      React.createElement(
        'div',
        { className: 'container', style: { padding: '10px' } },
        React.createElement(
          'p',
          { className: 'text-muted footer' },
          'Bond Precaire Woonvormen'
        )
      )
    )
  );
};

exports.default = App;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "container" },
    children
  );
};

exports.default = Container;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children,
      styleObject = _ref.styleObject;
  return _react2.default.createElement(
    "div",
    { className: "jumbotron", style: styleObject },
    children
  );
};

exports.default = Jumbotron;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function Panel(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "panel panel-default" },
    _react2.default.createElement(
      "div",
      { className: "panel-body" },
      children
    )
  );
};

exports.default = Panel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeImage = function HomeImage(_ref) {
  var source = _ref.source,
      altText = _ref.altText;
  return _react2.default.createElement('img', {
    style: { display: 'block', marginLeft: 'auto', marginRight: 'auto', border: '3px solid black' }
    //src="http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok.jpg" 
    , alt: altText,
    width: '283' //800
    , height: '400' //1132
    //srcSet="http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok-283x400.jpg 283w, http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok-768x1087.jpg 768w, http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok-565x800.jpg 565w, http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok.jpg 800w" 
    , src: source,
    sizes: '(max-width: 800px) 100vw, 800px' });
};

exports.default = HomeImage;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var navItemStyle = {
  lineHeight: '60px',
  height: '60px',
  paddingTop: 0,
  fontSize: '24px',
  fontWeight: 'bold'
};

var Navbar = function Navbar(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-inverse', style: { marginBottom: 0, borderRadius: 0 } },
    _react2.default.createElement(
      'div',
      { className: 'navbar-header' },
      _react2.default.createElement(
        'button',
        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' }),
        _react2.default.createElement('span', { className: 'icon-bar' })
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'navbar-brand', to: '/', style: navItemStyle },
        'Home'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
      _react2.default.createElement(
        'ul',
        { className: 'nav navbar-nav' },
        _react2.default.createElement(
          'li',
          { className: '' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: 'posters', style: navItemStyle },
            'PosterMaker'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: '' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: 'aanmelden', style: navItemStyle },
            'Aanmelden'
          )
        )
      )
    )
  );
};

exports.default = Navbar;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Jumbotron = __webpack_require__(6);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _Container = __webpack_require__(5);

var _Container2 = _interopRequireDefault(_Container);

var _Panel = __webpack_require__(7);

var _Panel2 = _interopRequireDefault(_Panel);

var _Colors = __webpack_require__(1);

var _HomePosters = __webpack_require__(11);

var _HomePosters2 = _interopRequireDefault(_HomePosters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var iu = "http://www.winhotels.com/includes/sliders/homepage-slider-engels_files/images1/enjoyamsterdam.jpg";
var i1 = "img/a1.jpg";
var i2 = "img/a2.jpg";
var i3 = "img/tk2.jpg";

var JumbotronWrapperStyle = {
  height: '100%',
  color: _Colors.lightRed,
  backgroundImage: "url(" + i3 + ")",
  marginBottom: '20px',
  backgroundSize: '100%'
};

var JumbotronOverlay = {
  height: '100%',
  backgroundColor: "rgba(33, 2, 2 , 0.6)"
};

var JumbotronStyle = {
  backgroundColor: 'transparent'
};

var Home = function Home(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: JumbotronWrapperStyle },
      _react2.default.createElement(
        'div',
        { style: JumbotronOverlay },
        _react2.default.createElement(
          _Jumbotron2.default,
          { styleObject: JumbotronStyle },
          _react2.default.createElement(
            _Container2.default,
            null,
            _react2.default.createElement(
              'h1',
              null,
              _react2.default.createElement(
                'strong',
                { style: { color: 'yellow' } },
                'FUCKFLEX'
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'span',
                null,
                'Een campagne van de ',
                _react2.default.createElement(
                  'a',
                  { style: { color: 'white' }, href: 'http://www.bondprecairewoonvormen.nl' },
                  'Bond Precaire Woonvormen'
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _Container2.default,
      null,
      _react2.default.createElement(
        _Panel2.default,
        null,
        _react2.default.createElement(
          'p',
          { className: 'lead' },
          'Door politiek beleid zijn er steeds minder sociale huurwoningen, waardoor de woonzekerheid snel wordt afgebroken. Veel mensen zitten in een stoelendans op de woningmarkt en worden van flexwoning naar flexwoning steeds zonder huurrecht uit huis gezet. Sluit je nu aan bij de campagne voor bestaanszekerheid en goede huisvesting voor iedereen. Wonen is een recht, geen gunst! #FUCKFLEX'
        )
      ),
      _react2.default.createElement(_HomePosters2.default, null)
    )
  );
};

exports.default = Home;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomeImage = __webpack_require__(8);

var _HomeImage2 = _interopRequireDefault(_HomeImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var sbs = 'http://bondprecairewoonvormen.nl/wp-content/uploads/2016/12/stef-blok.jpg';

var HomePosters = function HomePosters(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    'div',
    { className: 'row', style: { margin: 'auto', marginBottom: '80px' } },
    _react2.default.createElement(
      'div',
      { className: 'col-xs-6 col-md-4', style: { marginBottom: '20px' } },
      _react2.default.createElement(_HomeImage2.default, { altText: 'fuck-flex', source: 'img/ff-poster-dummy-black.png' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-xs-6 col-md-4', style: { marginBottom: '20px' } },
      _react2.default.createElement(_HomeImage2.default, { altText: 'stef-blok', source: sbs })
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-xs-6 col-md-4', style: { marginBottom: '20px' } },
      _react2.default.createElement(_HomeImage2.default, { altText: 'niet-te-koop', source: 'img/ntk.png' })
    )
  );
};

exports.default = HomePosters;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Colors = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imgsrc = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTcxIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDE3MSAxODAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MTgwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTViMGZiNmJjMGUgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNWIwZmI2YmMwZSI+PHJlY3Qgd2lkdGg9IjE3MSIgaGVpZ2h0PSIxODAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI1OSIgeT0iOTQuOCI+MTcxeDE4MDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==";
var posterWidth = 1750;
var posterHeight = 2475;
var gr1 = void 0,
    gr2 = void 0,
    gr3 = void 0;

var renderImage = function renderImage(ctx, src, offsetX, offsetY) {
  var img = new Image();
  img.src = src;
  img.onload = function () {
    var w = 0.8 * img.width;
    var h = 0.8 * img.height;
    ctx.drawImage(img, offsetX + (posterWidth - w) / 2, offsetY + 740 + (740 - h) / 2, w, h);
  };
};

var renderCanvas = function renderCanvas(canvas) {
  var ctx = canvas.getContext("2d");

  var lightGreen = "rgba(88,255,71,255)";
  var grey = "rgba(222,216,216,255)";

  // colors
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, posterWidth, 740);
  ctx.fillStyle = lightGreen;
  ctx.fillRect(0, 740, posterWidth, 740);
  ctx.fillStyle = grey;
  ctx.fillRect(0, 1480, posterWidth, 740);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 2220, posterWidth, 255);

  // images
  renderImage(ctx, "img/happyhouse.png", 0, 0);
  renderImage(ctx, "img/emptyhouse.png", -400, 740);
  renderImage(ctx, "img/sadface.png", 400, 740);

  // text
  ctx.font = "128px Arial";
  ctx.fillStyle = "#ff0";
  ctx.textAlign = "center";
  ctx.fillText("www.fuckflex.nl", canvas.width / 2, 2400);

  return ctx;
};

var buttonStyle = { fontWeight: 'bold', border: 0, borderRadius: 0, background: _Colors.mainRed, color: 'white' };

var Posters = function (_React$Component) {
  _inherits(Posters, _React$Component);

  function Posters() {
    _classCallCheck(this, Posters);

    return _possibleConstructorReturn(this, (Posters.__proto__ || Object.getPrototypeOf(Posters)).apply(this, arguments));
  }

  _createClass(Posters, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var c = document.getElementById("main-canvas");
      renderCanvas(c);
    }
  }, {
    key: "updateSlogan",
    value: function updateSlogan(event) {
      var c = document.getElementById("main-canvas");
      var ctx = renderCanvas(c);
      var font = '120pt Impact';
      ctx.font = font;
      ctx.fillStyle = "#ff0";
      ctx.textAlign = "center";
      var text = event.target.value;
      var lines = text.split("\n");

      var counter = 0;
      var nextline = lines[counter];
      while (nextline != null) {
        ctx.fillText(nextline, c.width / 2, 200 + counter * (140 + 30));
        counter++;
        nextline = lines[counter];
      }
    }
  }, {
    key: "downloadPoster",
    value: function downloadPoster() {
      var canvas = document.getElementById("main-canvas");
      ReImg.fromCanvas(canvas).downloadPng();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          { style: { textAlign: 'center', marginBottom: '40px' } },
          _react2.default.createElement(
            "strong",
            null,
            "Maak nu je eigen poster!"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-sm-6" },
            _react2.default.createElement(
              "div",
              { id: "canvas-wrapper" },
              _react2.default.createElement(
                "canvas",
                { id: "main-canvas", width: "1750", height: "2475", style: { height: '100%', width: '100%', maxHeight: '80vh' } },
                "Uw browser understeund geen canvas."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col-sm-6" },
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                { htmlFor: "comment" },
                _react2.default.createElement(
                  "h3",
                  null,
                  _react2.default.createElement(
                    "strong",
                    null,
                    "Schrijf je eigen slogan:"
                  )
                )
              ),
              _react2.default.createElement("textarea", { className: "form-control", rows: "5", id: "comment", onChange: this.updateSlogan })
            ),
            _react2.default.createElement(
              "div",
              { className: "col-xs-6 col-md-3" },
              _react2.default.createElement(
                "a",
                { href: "#", className: "thumbnail" },
                _react2.default.createElement("img", { src: imgsrc, alt: "..." })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-xs-6 col-md-3" },
              _react2.default.createElement(
                "a",
                { href: "#", className: "thumbnail" },
                _react2.default.createElement("img", { src: imgsrc, alt: "..." })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-xs-6 col-md-3" },
              _react2.default.createElement(
                "a",
                { href: "#", className: "thumbnail" },
                _react2.default.createElement("img", { src: imgsrc, alt: "..." })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col-xs-6 col-md-3" },
              _react2.default.createElement(
                "a",
                { href: "#", className: "thumbnail" },
                _react2.default.createElement("img", { src: imgsrc, alt: "..." })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "text-center" },
              _react2.default.createElement(
                "button",
                { className: "btn btn-default", type: "submit", style: buttonStyle, onClick: this.downloadPoster },
                _react2.default.createElement(
                  "span",
                  { className: "lead", style: { fontWeight: 'bold' } },
                  "DOWNLOAD POSTER"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Posters;
}(_react2.default.Component);

exports.default = Posters;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var Register = function Register(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h2",
      null,
      "Doe mee en meld je aan!"
    ),
    _react2.default.createElement(
      "div",
      { className: "panel panel-default" },
      _react2.default.createElement(
        "div",
        { className: "panel-heading" },
        "Aanmelden"
      ),
      _react2.default.createElement(
        "div",
        { className: "panel-body" },
        _react2.default.createElement(
          "form",
          { action: "", className: "form-horizontal" },
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              { htmlFor: "firstName", className: "col-sm-offset-2 col-sm-2 control-label" },
              "Voornaam"
            ),
            _react2.default.createElement(
              "div",
              { className: "col-sm-6" },
              _react2.default.createElement("input", { id: "firstName", type: "text", className: "form-control" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              { htmlFor: "lastName", className: "col-sm-offset-2 col-sm-2 control-label" },
              "Achternaam"
            ),
            _react2.default.createElement(
              "div",
              { className: "col-sm-6" },
              _react2.default.createElement("input", { id: "lastName", type: "text", className: "form-control" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              { htmlFor: "email", className: "col-sm-offset-2 col-sm-2 control-label" },
              "Email"
            ),
            _react2.default.createElement(
              "div",
              { className: "col-sm-6" },
              _react2.default.createElement("input", { id: "email", type: "text", className: "form-control" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "div",
              { className: "col-sm-offset-4 col-sm-10" },
              _react2.default.createElement(
                "button",
                { type: "submit", className: "btn btn-default" },
                "Versturen"
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Register;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _App = __webpack_require__(3);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');
(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), app);

/***/ })
/******/ ]);