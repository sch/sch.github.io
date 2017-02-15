(function () {
'use strict';

var A = [
  [false, true, true, false],
  [true, false, false, true],
  [true, true, true, true],
  [true, false, false, true],
  [true, false, false, true] ];

var B = [
  [true, true, true, false],
  [true, false, false, true],
  [true, true, true, true],
  [true, false, false, true],
  [true, true, true, false] ];

var C = [
  [false, true, true, false],
  [true, false, false, true],
  [true, false, false, false],
  [true, false, false, true],
  [false, true, true, false] ];

var D = [
  [true, true, true, false],
  [true, false, false, true],
  [true, false, false, true],
  [true, false, false, true],
  [true, true, true, false] ];

var E = [
  [true, true, true],
  [true, false, false],
  [true, true, true],
  [true, false, false],
  [true, true, true] ];

var F = [
  [true, true, true],
  [true, false, false],
  [true, true, true],
  [true, false, false],
  [true, false, false] ];

var G = [
  [false, true, true, true],
  [true, false, false, false],
  [true, false, true, true],
  [true, false, false, true],
  [false, true, true, false] ];

var H = [
  [true, false, false, true],
  [true, false, false, true],
  [true, true, true, true],
  [true, false, false, true],
  [true, false, false, true] ];

var I = [
  [true],
  [true],
  [true],
  [true],
  [true] ];

var J = [
  [false, false, false,  true],
  [false, false, false,  true],
  [false, false, false,  true],
  [true,  false, false,  true],
  [false,  true,  true, false] ];

var K = [
  [true, false, false,  true],
  [true, false,  true, false],
  [true,  true, false, false],
  [true, false,  true, false],
  [true, false, false,  true] ];

var L = [
  [true, false, false],
  [true, false, false],
  [true, false, false],
  [true, false, false],
  [true,  true,  true] ];

var M = [
  [true, false, false, false, true],
  [true,  true, false,  true, true],
  [true, false,  true, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true] ];

var N = [
  [true, false, false, false, true],
  [true,  true, false, false, true],
  [true, false,  true, false, true],
  [true, false, false,  true, true],
  [true, false, false, false, true] ];

var O = [
  [false,  true,  true,  true, false],
  [ true, false, false, false,  true],
  [ true, false, false, false,  true],
  [ true, false, false, false,  true],
  [false,  true,  true,  true, false] ];

var P = [
  [true,  true,  true, false],
  [true, false, false,  true],
  [true,  true,  true, false],
  [true, false, false, false],
  [true, false, false, false] ];

var Q = [
  [false,  true,  true, false],
  [ true, false, false,  true],
  [ true, false, false,  true],
  [ true, false, false,  true],
  [false,  true,  true, false],
  [ false, false, false,  true] ];

var R = [
  [true, true, true, false],
  [true, false, false, true],
  [true, true, true, false],
  [true, false, true, false],
  [true, false, false, true] ];

var S = [
  [false, true, true, true],
  [true, false, false, false],
  [false, true, true, false],
  [false, false, false, true],
  [true, true, true, false] ];

var T = [
  [true,  true,  true],
  [false, true, false],
  [false, true, false],
  [false, true, false],
  [false, true, false] ];

var U = [
  [ true, false, false, true],
  [ true, false, false, true],
  [ true, false, false, true],
  [ true, false, false, true],
  [false, true,  true, false] ];

var V = [
  [ true, false, false, false,  true],
  [ true, false, false, false,  true],
  [false,  true, false,  true, false],
  [false,  true, false,  true, false],
  [false, false,  true, false, false]
];

var W = [
  [ true, false, false, false,  true],
  [ true, false,  true, false,  true],
  [ true, false,  true, false,  true],
  [ true, false,  true, false,  true],
  [false,  true, false,  true, false] ];

var X = [
  [ true, false, false, false,  true],
  [false,  true, false,  true, false],
  [false, false,  true, false, false],
  [false,  true, false,  true, false],
  [ true, false, false, false,  true]
];

var Y = [
  [ true, false, false, false,  true],
  [false,  true, false,  true, false],
  [false, false,  true, false, false],
  [false, false,  true, false, false],
  [false, false,  true, false, false] ];

var Z = [
  [ true,  true,  true],
  [false, false,  true],
  [false,  true, false],
  [ true, false, false],
  [ true,  true,  true] ];

var ALPHABET_MAP = {
  A: A,
  B: B,
  C: C,
  D: D,
  E: E,
  F: F,
  G: G,
  H: H,
  I: I,
  J: J,
  K: K,
  L: L,
  M: M,
  N: N,
  O: O,
  P: P,
  Q: Q,
  R: R,
  S: S,
  T: T,
  U: U,
  V: V,
  W: W,
  X: X,
  Y: Y,
  Z: Z
};

var ORIGIN$1 = createPoint$1(0, 0);

function emptyCanvas (width, height) {
  var rows = [];

  for (var i = 0; i < height; i++) {
    var row = [];
    for (var j = 0; j < width; j++) {
      row.push(false);
    }
    rows.push(row);
  }

  return rows
}

function width$1 (canvas) {
  return canvas[0].length
}

function height (canvas) {
  return canvas.length
}

function createPoint$1 (x, y) {
  return { x: x, y: y }
}

function isWithinBounds$1 (canvas, point) {
  return point.x < width$1(canvas) && point.y < height(canvas)
}

function combineCanvas$1 (bottomCanvas, topCanvas, offset) {
  offset = offset || createPoint$1(0, 0);
  for (var row = 0; row < topCanvas.length; row++) {
    for (var column = 0; column < topCanvas[row].length; column++) {
      if (isWithinBounds$1(bottomCanvas, createPoint$1(column + offset.x, row + offset.y))) {
        bottomCanvas[row + offset.y][column + offset.x] = topCanvas[row][column];
      }
    }
  }
  return bottomCanvas
}

function flipBit (canvas, x, y) {
  if (isWithinBounds$1(canvas, createPoint$1(x, y))) {
    canvas[y][x] = true;
  }
}

function letterCanvas$1 (letter) {
  if (letter === " ") {
    return [[false], [false], [false], [false], [false]]
  }
  return ALPHABET_MAP[letter[0].toUpperCase()]
}

function drawText (canvas, text, offset) {
  offset = offset || ORIGIN$1;
  var xOffset = 0 + offset.x;
  return text.split("").reduce(function (canvas, letter) {
    var newOffset = createPoint$1(xOffset, offset.y);
    var newCanvas = combineCanvas$1(canvas, letterCanvas$1(letter), newOffset);
    xOffset += width$1(letterCanvas$1(letter)) + 1;
    return newCanvas
  }, canvas)
}

function clamp (min, max, val) {
  if (val < min) { return min }
  if (val > max) { return max }
  return val
}

function scale (larger, smaller) {
  return Math.floor(larger / smaller)
}

var Dimensions = function Dimensions(width, height) {
  this.width = width;
  this.height = height;
};

Dimensions.prototype.clamp = function clamp$1 (containingDimensions) {
  var width = clamp(0, containingDimensions.width, this.width);
  var height = clamp(0, containingDimensions.height, this.height);
  return new Dimensions(width, height)
};

Dimensions.prototype.sample = function sample (dimensions) {
  var width = scale(this.width, dimensions.width);
  var height = scale(this.height, dimensions.height);
  return new Dimensions(width, height)
};

Dimensions.prototype.grow = function grow (direction, amount) {
  switch (direction) {
    case "HORIZONTALLY":
      return new Dimensions(this.width + amount, this.height)
      return this.growHorizontally(amount)
    case "VERTICALLY":
      return this.growVertically(amount)
    default:
      throw new Error("Can only grow \"HORIZONTALLY\"  or \"VERTICALLY\".")
  }
};

Dimensions.prototype.growHorizontally = function growHorizontally (amount) {
  return new Dimensions(this.width + amount, this.height)
};

Dimensions.prototype.growVertically = function growVertically (amount) {
  return new Dimensions(this.width, this.height + amount)
};


var Point = function Point(x, y) {
  this.x = x;
  this.y = y;
};

Point.ORIGIN = new Point(0, 0);


var Bitmap = function Bitmap (dimensions, transparent) {
  if ( transparent === void 0 ) transparent = true;

  this.dimensions = dimensions;
  this.transparent = transparent;
  this.bitmap = new Array(this.length);
  return this
};

var prototypeAccessors = { length: {} };

prototypeAccessors.length.get = function () {
  return this.dimensions.width * this.dimensions.height
};

Bitmap.prototype.index = function index (point) {
  return point.y * this.dimensions.width + point.x
};

Bitmap.prototype.valueAtPoint = function valueAtPoint (point) {
  return this.bitmap[this.index(point)]
};

Bitmap.prototype.isWithinBounds = function isWithinBounds (point) {
  return point.x < this.dimensions.width && point.y < this.dimensions.height
};

Bitmap.prototype.append = function append (anotherBitmap) {
  var newBitmap = new Bitmap();
  return this
};

Bitmap.prototype.drawPixel = function drawPixel (point) {
  if (isWithinBounds(point)) {
    this.buffer[this.index(point)] = true;
  }
};

Bitmap.prototype.asTwoDimensionalArray = function asTwoDimensionalArray () {
  var array = [];

  for (var rowIndex = 0; rowIndex < this.dimensions.height; rowIndex++) {
    for (var columnIndex = 0; columnIndex < this.dimensions.width; columnIndex++) {
      array[rowIndex][columnIndex] = false;
    }
  }

  return array
};

Bitmap.prototype.drawLetter = function drawLetter (letter, offset) {
    if ( offset === void 0 ) offset = ORIGIN;

  var newFrame = new Bitmap();
  var xOffset = 0 + offset.x;
  return text.split("").reduce(function (canvas, letter) {
    var newOffset = createPoint(xOffset, offset.y);
    var newCanvas = combineCanvas(canvas, letterCanvas(letter), newOffset);
    xOffset += width(letterCanvas(letter)) + 1;
    return newCanvas
  }, canvas)
};

Object.defineProperties( Bitmap.prototype, prototypeAccessors );

var Directions = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3,
};

/**
 * return the next positions for a point within the dimensions's bounds
 */
function randomWalk (point, dimensions) {
  var nextDirection = Math.floor(Math.random() * 4);

  if (nextDirection === Directions.UP && point.y > 0) {
    return new Point(point.x, point.y - 1)
  }

  if (nextDirection === Directions.RIGHT && point.x < dimensions.width) {
    return new Point(point.x + 1, point.y)
  }

  if (nextDirection === Directions.DOWN && point.y < dimensions.height) {
    return new Point(point.x, point.y + 1)
  }

  if (nextDirection === Directions.LEFT && point.x < dimensions.width) {
    return new Point(point.x - 1, point.y)
  }

  return point
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;
var nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var index$1 = throttle;

function appendNode ( node, target ) {
	target.appendChild( node );
}

function insertNode ( node, target, anchor ) {
	target.insertBefore( node, anchor );
}

function detachNode ( node ) {
	node.parentNode.removeChild( node );
}

function teardownEach ( iterations, detach, start ) {
	for ( var i = ( start || 0 ); i < iterations.length; i += 1 ) {
		iterations[i].teardown( detach );
	}
}

function createElement ( name ) {
	return document.createElement( name );
}

function createComment () {
	return document.createComment( '' );
}

function addEventListener ( node, event, handler ) {
	node.addEventListener ( event, handler, false );
}

function removeEventListener ( node, event, handler ) {
	node.removeEventListener ( event, handler, false );
}

function setAttribute ( node, attribute, value ) {
	node.setAttribute ( attribute, value );
}

function get ( key ) {
	return key ? this._state[ key ] : this._state;
}

function fire ( eventName, data ) {
	var this$1 = this;

	var handlers = eventName in this._handlers && this._handlers[ eventName ].slice();
	if ( !handlers ) { return; }

	for ( var i = 0; i < handlers.length; i += 1 ) {
		handlers[i].call( this$1, data );
	}
}

function observe ( key, callback, options ) {
	var group = ( options && options.defer ) ? this._observers.pre : this._observers.post;

	( group[ key ] || ( group[ key ] = [] ) ).push( callback );

	if ( !options || options.init !== false ) {
		callback.__calling = true;
		callback.call( this, this._state[ key ] );
		callback.__calling = false;
	}

	return {
		cancel: function () {
			var index = group[ key ].indexOf( callback );
			if ( ~index ) { group[ key ].splice( index, 1 ); }
		}
	};
}

function on ( eventName, handler ) {
	var handlers = this._handlers[ eventName ] || ( this._handlers[ eventName ] = [] );
	handlers.push( handler );

	return {
		cancel: function () {
			var index = handlers.indexOf( handler );
			if ( ~index ) { handlers.splice( index, 1 ); }
		}
	};
}

function set ( newState ) {
	this._set( newState );
	( this._root || this )._flush();
}

function _flush () {
	var this$1 = this;

	if ( !this._renderHooks ) { return; }

	while ( this._renderHooks.length ) {
		var hook = this$1._renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

function dispatchObservers ( component, group, newState, oldState ) {
	for ( var key in group ) {
		if ( !( key in newState ) ) { continue; }

		var newValue = newState[ key ];
		var oldValue = oldState[ key ];

		if ( newValue === oldValue && typeof newValue !== 'object' ) { continue; }

		var callbacks = group[ key ];
		if ( !callbacks ) { continue; }

		for ( var i = 0; i < callbacks.length; i += 1 ) {
			var callback = callbacks[i];
			if ( callback.__calling ) { continue; }

			callback.__calling = true;
			callback.call( component, newValue, oldValue );
			callback.__calling = false;
		}
	}
}

function applyComputations ( state, newState, oldState, isInitial ) {
	if ( isInitial || ( 'width' in newState && typeof state.width === 'object' || state.width !== oldState.width ) || ( 'height' in newState && typeof state.height === 'object' || state.height !== oldState.height ) || ( 'text' in newState && typeof state.text === 'object' || state.text !== oldState.text ) || ( 'points' in newState && typeof state.points === 'object' || state.points !== oldState.points ) ) {
		state.canvas = newState.canvas = template.computed.canvas( state.width, state.height, state.text, state.points );
	}
}

var template = (function () {
function viewportDimensions () {
  var ref = document.documentElement;
  var clientWidth = ref.clientWidth;
  var clientHeight = ref.clientHeight;
  var width = Math.max(clientWidth, window.innerWidth || 0);
  var height = Math.max(clientHeight, window.innerHeight || 0);
  return new Dimensions(width, height)
}

function elementDimensions (element) {
  return new Dimensions(element.clientWidth || 0, element.clientHeight || 0)
}

function calculateCanvasDimensions (containerElement, checkboxElement) {
  var containerDimensions = elementDimensions(containerElement);
  var checkboxDimensions = elementDimensions(checkboxElement);
  var adjustedDimensions = containerDimensions.clamp(viewportDimensions());
  return adjustedDimensions.sample(checkboxDimensions)
}

return {
  data: function () {
    return {
      width: 100,
      height: 50,
      points: [],
      text: "adrian\nschaedle"
    }
  },

  onrender: function () {
    window.addEventListener("resize", this.resize.bind(this));
    setInterval(this.tick.bind(this), 1500);
    this.resize();

    var el = document.querySelector(".js-Checkboxes");
    if (el && el.classList.contains("isPaused")) {
      el.classList.remove("isPaused");
    }
  },

  onteardown: function () {
    window.removeEventListener("resize", this.resize);
  },

  computed: {
    canvas: function (width, height, text, points) {
      var canvas = emptyCanvas(width, height);
      if (width > 38) {
        canvas = drawText(canvas, "adrian", createPoint$1(2, 2));
        canvas = drawText(canvas, "schaedle", createPoint$1(2, 9));
      }
      points.forEach(function (point) { return flipBit(canvas, point.x, point.y); });
      return canvas
    }
  },

  methods: {
    resize: index$1(function () {
      var element = this.refs.element.parentNode;
      // var element = this.refs.element.parentNode
      var checkbox = element.querySelector("label");
      this.set(calculateCanvasDimensions(element, checkbox));
    }, 500),

    addPoint: function addPoint (x, y) {
      var newPoint = new Point(x, y);
      var points = this.get("points");
      points.push(newPoint);
      this.set({ points: points });
    },

    tick: function tick () {
      var points = this.get("points");
      var dimensions = new Dimensions(this.get("width"), this.get("height"));
      this.set({
        points: points.map(function (point) { return randomWalk(point, dimensions); })
      });
    }
  }
}
}());

var addedCss = false;
function addCss () {
	var style = createElement( 'style' );
	style.textContent = "\n.CheckboxCanvas[svelte-3188169055], [svelte-3188169055] .CheckboxCanvas {\n  box-sizing: border-box;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.CheckboxCanvas  div[svelte-3188169055], .CheckboxCanvas  [svelte-3188169055] div, .CheckboxCanvas[svelte-3188169055]  div, [svelte-3188169055] .CheckboxCanvas  div {\n  margin: 0;\n  line-height: 0;\n}\n\n.CheckboxCanvas  label[svelte-3188169055], .CheckboxCanvas  [svelte-3188169055] label, .CheckboxCanvas[svelte-3188169055]  label, [svelte-3188169055] .CheckboxCanvas  label {\n  padding: 1px;\n  display: inline-block;\n}\n\n.CheckboxCanvas  input[svelte-3188169055], .CheckboxCanvas  [svelte-3188169055] input, .CheckboxCanvas[svelte-3188169055]  input, [svelte-3188169055] .CheckboxCanvas  input {\n  margin: 0;\n  padding: 0;\n}\n";
	appendNode( style, document.head );

	addedCss = true;
}

function renderMainFragment ( root, component ) {
	var div = createElement( 'div' );
	setAttribute( div, 'svelte-3188169055', '' );
	component.refs.element = div;
	div.className = "CheckboxCanvas";
	
	var eachBlock_anchor = createComment();
	appendNode( eachBlock_anchor, div );
	var eachBlock_value = root.canvas;
	var eachBlock_iterations = [];
	
	for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
		eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
		eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
	}

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root ) {
			var eachBlock_value = root.canvas;
			
			for ( var i = 0; i < eachBlock_value.length; i += 1 ) {
				if ( !eachBlock_iterations[i] ) {
					eachBlock_iterations[i] = renderEachBlock( root, eachBlock_value, eachBlock_value[i], i, component );
					eachBlock_iterations[i].mount( eachBlock_anchor.parentNode, eachBlock_anchor );
				} else {
					eachBlock_iterations[i].update( changed, root, eachBlock_value, eachBlock_value[i], i );
				}
			}
			
			teardownEach( eachBlock_iterations, true, eachBlock_value.length );
			
			eachBlock_iterations.length = eachBlock_value.length;
		},
		
		teardown: function ( detach ) {
			if ( component.refs.element === div ) { component.refs.element = null; }
			
			teardownEach( eachBlock_iterations, false );
			
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function renderEachBlock ( root, eachBlock_value, row, y, component ) {
	var div = createElement( 'div' );
	setAttribute( div, 'svelte-3188169055', '' );
	
	var eachBlock1_anchor = createComment();
	appendNode( eachBlock1_anchor, div );
	var eachBlock1_value = row;
	var eachBlock1_iterations = [];
	
	for ( var i = 0; i < eachBlock1_value.length; i += 1 ) {
		eachBlock1_iterations[i] = renderEachBlock1( root, eachBlock_value, row, y, eachBlock1_value, eachBlock1_value[i], i, component );
		eachBlock1_iterations[i].mount( eachBlock1_anchor.parentNode, eachBlock1_anchor );
	}

	return {
		mount: function ( target, anchor ) {
			insertNode( div, target, anchor );
		},
		
		update: function ( changed, root, eachBlock_value, row, y ) {
			var eachBlock1_value = row;
			
			for ( var i = 0; i < eachBlock1_value.length; i += 1 ) {
				if ( !eachBlock1_iterations[i] ) {
					eachBlock1_iterations[i] = renderEachBlock1( root, eachBlock_value, row, y, eachBlock1_value, eachBlock1_value[i], i, component );
					eachBlock1_iterations[i].mount( eachBlock1_anchor.parentNode, eachBlock1_anchor );
				} else {
					eachBlock1_iterations[i].update( changed, root, eachBlock_value, row, y, eachBlock1_value, eachBlock1_value[i], i );
				}
			}
			
			teardownEach( eachBlock1_iterations, true, eachBlock1_value.length );
			
			eachBlock1_iterations.length = eachBlock1_value.length;
		},
		
		teardown: function ( detach ) {
			teardownEach( eachBlock1_iterations, false );
			
			if ( detach ) {
				detachNode( div );
			}
		}
	};
}

function renderEachBlock1 ( root, eachBlock_value, row, y, eachBlock1_value, column, x, component ) {
	var label = createElement( 'label' );
	setAttribute( label, 'svelte-3188169055', '' );
	
	var input = createElement( 'input' );
	setAttribute( input, 'svelte-3188169055', '' );
	input.type = "checkbox";
	input.checked = column;
	
	function changeHandler ( event ) {
		var eachBlock1_value = this.__svelte.eachBlock1_value, x = this.__svelte.x, column = eachBlock1_value[x];
		var eachBlock_value = this.__svelte.eachBlock_value, y = this.__svelte.y, row = eachBlock_value[y];
		
		component.addPoint(x, y);
	}
	
	addEventListener( input, 'change', changeHandler );
	
	input.__svelte = {
		eachBlock1_value: eachBlock1_value,
		x: x,
		eachBlock_value: eachBlock_value,
		y: y
	};
	
	appendNode( input, label );

	return {
		mount: function ( target, anchor ) {
			insertNode( label, target, anchor );
		},
		
		update: function ( changed, root, eachBlock_value, row, y, eachBlock1_value, column, x ) {
			input.checked = column;
			
			input.__svelte.eachBlock1_value = eachBlock1_value;
			input.__svelte.x = x;
			input.__svelte.eachBlock_value = eachBlock_value;
			input.__svelte.y = y;
		},
		
		teardown: function ( detach ) {
			removeEventListener( input, 'change', changeHandler );
			
			if ( detach ) {
				detachNode( label );
			}
		}
	};
}

function Checkboxes ( options ) {
	options = options || {};
	
	this.refs = {};
	this._state = Object.assign( template.data(), options.data );
applyComputations( this._state, this._state, {}, true );

	this._observers = {
		pre: Object.create( null ),
		post: Object.create( null )
	};

	this._handlers = Object.create( null );

	this._root = options._root;
	this._yield = options._yield;

	if ( !addedCss ) { addCss(); }
	
	this._fragment = renderMainFragment( this._state, this );
	if ( options.target ) { this._fragment.mount( options.target, null ); }
	
	if ( options._root ) {
		options._root._renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call( this );
	}
}

Checkboxes.prototype = template.methods;

Checkboxes.prototype.get = get;
Checkboxes.prototype.fire = fire;
Checkboxes.prototype.observe = observe;
Checkboxes.prototype.on = on;
Checkboxes.prototype.set = set;
Checkboxes.prototype._flush = _flush;

Checkboxes.prototype._set = function _set ( newState ) {
	var oldState = this._state;
	this._state = Object.assign( {}, oldState, newState );
	applyComputations( this._state, newState, oldState, false );
	
	dispatchObservers( this, this._observers.pre, newState, oldState );
	if ( this._fragment ) { this._fragment.update( newState, this._state ); }
	dispatchObservers( this, this._observers.post, newState, oldState );
};

Checkboxes.prototype.teardown = function teardown ( detach ) {
	this.fire( 'teardown' );
template.onteardown.call( this );

	this._fragment.teardown( detach !== false );
	this._fragment = null;

	this._state = {};
};

var target = document.querySelector(".js-Checkboxes");

window.checkboxes = new Checkboxes({
  target: target
});

}());
//# sourceMappingURL=bundle.js.map
