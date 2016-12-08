(function () {
'use strict';

var A = [
  [false, true, true, false],
  [true, false, false, true],
  [true, true, true, true],
  [true, false, false, true],
  [true, false, false, true],
];

var B = [
  [true, true, true, false],
  [true, false, false, true],
  [true, true, true, true],
  [true, false, false, true],
  [true, true, true, false],
];

var C = [
  [false, true, true, false],
  [true, false, false, true],
  [true, false, false, false],
  [true, false, false, true],
  [false, true, true, false],
];

var D = [
  [true, true, true, false],
  [true, false, false, true],
  [true, false, false, true],
  [true, false, false, true],
  [true, true, true, false],
];

var E = [
  [true, true, true],
  [true, false, false],
  [true, true, true],
  [true, false, false],
  [true, true, true],
];

var F = [
  [true, true, true],
  [true, false, false],
  [true, true, true],
  [true, false, false],
  [true, false, false],
];

var G = [
  [false, true, true, true],
  [true, false, false, false],
  [true, false, true, true],
  [true, false, false, true],
  [false, true, true, false],
];

var H = [
  [true, false, false, true],
  [true, false, false, true],
  [true, true, true, true],
  [true, false, false, true],
  [true, false, false, true],
];

var I = [
  [true],
  [true],
  [true],
  [true],
  [true],
];

var J = [
  [false, false, false,  true],
  [false, false, false,  true],
  [false, false, false,  true],
  [true,  false, false,  true],
  [false,  true,  true, false],
];

var K = [
  [true, false, false,  true],
  [true, false,  true, false],
  [true,  true, false, false],
  [true, false,  true, false],
  [true, false, false,  true],
];

var L = [
  [true, false, false],
  [true, false, false],
  [true, false, false],
  [true, false, false],
  [true,  true,  true],
];

var M = [
  [true, false, false, false, true],
  [true,  true, false,  true, true],
  [true, false,  true, false, true],
  [true, false, false, false, true],
  [true, false, false, false, true],
];

var N = [
  [true, false, false, false, true],
  [true,  true, false, false, true],
  [true, false,  true, false, true],
  [true, false, false,  true, true],
  [true, false, false, false, true],
];

var O = [
  [false,  true,  true,  true, false],
  [ true, false, false, false,  true],
  [ true, false, false, false,  true],
  [ true, false, false, false,  true],
  [false,  true,  true,  true, false],
];

var P = [
  [true,  true,  true, false],
  [true, false, false,  true],
  [true,  true,  true, false],
  [true, false, false, false],
  [true, false, false, false],
];

var Q = [
  [false,  true,  true, false],
  [ true, false, false,  true],
  [ true, false, false,  true],
  [ true, false, false,  true],
  [false,  true,  true, false],
  [ false, false, false,  true],
];

var R = [
  [true, true, true, false],
  [true, false, false, true],
  [true, true, true, false],
  [true, false, true, false],
  [true, false, false, true],
];

var S = [
  [false, true, true, true],
  [true, false, false, false],
  [false, true, true, false],
  [false, false, false, true],
  [true, true, true, false],
];

var T = [
  [true,  true,  true],
  [false, true, false],
  [false, true, false],
  [false, true, false],
  [false, true, false],
];

var U = [
  [ true, false, false, true],
  [ true, false, false, true],
  [ true, false, false, true],
  [ true, false, false, true],
  [false, true,  true, false],
];

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
  [false,  true, false,  true, false],
];

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
  [false, false,  true, false, false],
];

var Z = [
  [ true,  true,  true],
  [false, false,  true],
  [false,  true, false],
  [ true, false, false],
  [ true,  true,  true],
];

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

var ORIGIN = createPoint(0, 0);

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

function width (canvas) {
  return canvas[0].length
}

function height (canvas) {
  return canvas.length
}

function createPoint (x, y) {
  return { x: x, y: y }
}

function isWithinBounds (canvas, point) {
  return point.x < width(canvas) && point.y < height(canvas)
}

function combineCanvas (bottomCanvas, topCanvas, offset = createPoint(0, 0)) {
  for (var row = 0; row < topCanvas.length; row++) {
    for (var column = 0; column < topCanvas[row].length; column++) {
      if (isWithinBounds(bottomCanvas, createPoint(column + offset.x, row + offset.y))) {
        bottomCanvas[row + offset.y][column + offset.x] = topCanvas[row][column];
      }
    }
  }
  return bottomCanvas
}

function letterCanvas (letter) {
  if (letter === " ") {
    return [[false], [false], [false], [false], [false]]
  }
  return ALPHABET_MAP[letter[0].toUpperCase()]
}

function drawText (canvas, text, offset = ORIGIN) {
  let xOffset = 0 + offset.x;
  return text.split("").reduce(function (canvas, letter) {
    const newOffset = createPoint(xOffset, offset.y);
    const newCanvas = combineCanvas(canvas, letterCanvas(letter), newOffset);
    xOffset += width(letterCanvas(letter)) + 1;
    return newCanvas
  }, canvas)
}

function applyComputations ( state, newState, oldState ) {
	if ( ( 'width' in newState && typeof state.width === 'object' || state.width !== oldState.width ) || ( 'height' in newState && typeof state.height === 'object' || state.height !== oldState.height ) || ( 'text' in newState && typeof state.text === 'object' || state.text !== oldState.text ) ) {
		state.canvas = newState.canvas = template.computed.canvas( state.width, state.height, state.text );
	}
}

var template = (function () {
return {
  data () {
    return {
      width: 20,
      height: 20,
      text: "adrian schaedle"
    }
  },

  onrender () {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  },

  onteardown () {
    window.removeEventListener("resize", this.resize);
  },

  computed: {
    canvas: (width, height, text) => {
      let canvas = drawText(emptyCanvas(width, height), "adrian");
      canvas = drawText(canvas, "schaedle", createPoint(0, 7));
      return canvas
    }
  },

  methods: {
    resize () {
      this.set({
        width: Math.floor(window.innerWidth / 15),
        height: Math.floor(window.innerHeight / 15)
      });
    }
  }
}
}());

let addedCss = false;
function addCss () {
	var style = document.createElement( 'style' );
	style.textContent = "                                                                                                                                                                                                                                                                                                \n.CheckboxCanvasContainer[svelte-340746504], [svelte-340746504] .CheckboxCanvasContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}\n\n.CheckboxCanvas[svelte-340746504], [svelte-340746504] .CheckboxCanvas {\n  margin: 1em;\n}\n\n.CheckboxCanvas  div[svelte-340746504], .CheckboxCanvas  [svelte-340746504] div, .CheckboxCanvas[svelte-340746504]  div, [svelte-340746504] .CheckboxCanvas  div {\n  margin: 0;\n  line-height: 0;\n}\n\n.CheckboxCanvas  input[svelte-340746504], .CheckboxCanvas  [svelte-340746504] input, .CheckboxCanvas[svelte-340746504]  input, [svelte-340746504] .CheckboxCanvas  input {\n  margin: 1px;\n  padding: 0;\n  line-height: 0;\n}\n";
	document.head.appendChild( style );

	addedCss = true;
}

function renderMainFragment ( root, component, target ) {
	var div = document.createElement( 'div' );
	div.setAttribute( 'svelte-340746504', '' );
	div.className = "CheckboxCanvasContainer";
	
	var div1 = document.createElement( 'div' );
	div1.className = "CheckboxCanvas";
	
	var eachBlock_0_anchor = document.createComment( "#each canvas" );
	div1.appendChild( eachBlock_0_anchor );
	
	var eachBlock_0_value = root.canvas;
	var eachBlock_0_fragment = document.createDocumentFragment();
	var eachBlock_0_iterations = [];
	
	for ( var i = 0; i < eachBlock_0_value.length; i += 1 ) {
		eachBlock_0_iterations[i] = renderEachBlock_0( root, eachBlock_0_value, eachBlock_0_value[i], i, component, eachBlock_0_fragment );
	}
	
	eachBlock_0_anchor.parentNode.insertBefore( eachBlock_0_fragment, eachBlock_0_anchor );
	
	div.appendChild( div1 );
	
	target.appendChild( div );

	return {
		update: function ( changed, root ) {
			var eachBlock_0_value = root.canvas;
			
			for ( var i = 0; i < eachBlock_0_value.length; i += 1 ) {
				if ( !eachBlock_0_iterations[i] ) {
					eachBlock_0_iterations[i] = renderEachBlock_0( root, eachBlock_0_value, eachBlock_0_value[i], i, component, eachBlock_0_fragment );
				} else {
					eachBlock_0_iterations[i].update( changed, root, eachBlock_0_value, eachBlock_0_value[i], i );
				}
			}
			
			for ( var i = eachBlock_0_value.length; i < eachBlock_0_iterations.length; i += 1 ) {
				eachBlock_0_iterations[i].teardown( true );
			}
			
			eachBlock_0_anchor.parentNode.insertBefore( eachBlock_0_fragment, eachBlock_0_anchor );
			eachBlock_0_iterations.length = eachBlock_0_value.length;
		},

		teardown: function ( detach ) {
			if ( detach ) div.parentNode.removeChild( div );
			
			
			
			for ( var i = 0; i < eachBlock_0_iterations.length; i += 1 ) {
				eachBlock_0_iterations[i].teardown( false );
			}
		}
	};
}

function renderEachBlock_0 ( root, eachBlock_0_value, row, rowIndex, component, target ) {
	var div = document.createElement( 'div' );
	
	var eachBlock_1_anchor = document.createComment( "#each row" );
	div.appendChild( eachBlock_1_anchor );
	
	var eachBlock_1_value = row;
	var eachBlock_1_fragment = document.createDocumentFragment();
	var eachBlock_1_iterations = [];
	
	for ( var i = 0; i < eachBlock_1_value.length; i += 1 ) {
		eachBlock_1_iterations[i] = renderEachBlock_1( root, eachBlock_0_value, row, rowIndex, eachBlock_1_value, eachBlock_1_value[i], i, component, eachBlock_1_fragment );
	}
	
	eachBlock_1_anchor.parentNode.insertBefore( eachBlock_1_fragment, eachBlock_1_anchor );
	
	target.appendChild( div );

	return {
		update: function ( changed, root, eachBlock_0_value, row, rowIndex ) {
			var row = eachBlock_0_value[rowIndex];
			
			var eachBlock_1_value = row;
			
			for ( var i = 0; i < eachBlock_1_value.length; i += 1 ) {
				if ( !eachBlock_1_iterations[i] ) {
					eachBlock_1_iterations[i] = renderEachBlock_1( root, eachBlock_0_value, row, rowIndex, eachBlock_1_value, eachBlock_1_value[i], i, component, eachBlock_1_fragment );
				} else {
					eachBlock_1_iterations[i].update( changed, root, eachBlock_0_value, row, rowIndex, eachBlock_1_value, eachBlock_1_value[i], i );
				}
			}
			
			for ( var i = eachBlock_1_value.length; i < eachBlock_1_iterations.length; i += 1 ) {
				eachBlock_1_iterations[i].teardown( true );
			}
			
			eachBlock_1_anchor.parentNode.insertBefore( eachBlock_1_fragment, eachBlock_1_anchor );
			eachBlock_1_iterations.length = eachBlock_1_value.length;
		},

		teardown: function ( detach ) {
			if ( detach ) div.parentNode.removeChild( div );
			
			for ( var i = 0; i < eachBlock_1_iterations.length; i += 1 ) {
				eachBlock_1_iterations[i].teardown( false );
			}
		}
	};
}

function renderEachBlock_1 ( root, eachBlock_0_value, row, rowIndex, eachBlock_1_value, column, columnIndex, component, target ) {
	var input = document.createElement( 'input' );
	input.type = "checkbox";
	input.checked = column;
	
	target.appendChild( input );

	return {
		update: function ( changed, root, eachBlock_0_value, row, rowIndex, eachBlock_1_value, column, columnIndex ) {
			var row = eachBlock_0_value[rowIndex];
			var column = eachBlock_1_value[columnIndex];
			
			input.checked = column;
		},

		teardown: function ( detach ) {
			if ( detach ) input.parentNode.removeChild( input );
		}
	};
}

function Checkboxes ( options ) {
	var component = this;
	var state = Object.assign( template.data(), options.data );
applyComputations( state, state, {} );

	var observers = {
		immediate: Object.create( null ),
		deferred: Object.create( null )
	};

	var callbacks = Object.create( null );

	function dispatchObservers ( group, newState, oldState ) {
		for ( var key in group ) {
			if ( !( key in newState ) ) continue;

			var newValue = newState[ key ];
			var oldValue = oldState[ key ];

			if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

			var callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( var i = 0; i < callbacks.length; i += 1 ) {
				var callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}

	this.fire = function fire ( eventName, data ) {
		var handlers = eventName in callbacks && callbacks[ eventName ].slice();
		if ( !handlers ) return;

		for ( var i = 0; i < handlers.length; i += 1 ) {
			handlers[i].call( this, data );
		}
	};

	this.get = function get ( key ) {
		return key ? state[ key ] : state;
	};

	this.set = function set ( newState ) {
		var oldState = state;
		state = Object.assign( {}, oldState, newState );
		
		applyComputations( state, newState, oldState );
		
		dispatchObservers( observers.immediate, newState, oldState );
		if ( mainFragment ) mainFragment.update( newState, state );
		dispatchObservers( observers.deferred, newState, oldState );
	};

	this.observe = function ( key, callback, options ) {
		var group = ( options && options.defer ) ? observers.deferred : observers.immediate;

		( group[ key ] || ( group[ key ] = [] ) ).push( callback );

		if ( !options || options.init !== false ) {
			callback.__calling = true;
			callback.call( component, state[ key ] );
			callback.__calling = false;
		}

		return {
			cancel: function () {
				var index = group[ key ].indexOf( callback );
				if ( ~index ) group[ key ].splice( index, 1 );
			}
		};
	};

	this.on = function on ( eventName, handler ) {
		var handlers = callbacks[ eventName ] || ( callbacks[ eventName ] = [] );
		handlers.push( handler );

		return {
			cancel: function () {
				var index = handlers.indexOf( handler );
				if ( ~index ) handlers.splice( index, 1 );
			}
		};
	};

	this.teardown = function teardown ( detach ) {
		this.fire( 'teardown' );
template.onteardown.call( this );

		mainFragment.teardown( detach !== false );
		mainFragment = null;

		state = {};
	};

	if ( !addedCss ) addCss();
	
	var mainFragment = renderMainFragment( state, this, options.target );
	
	if ( options.parent ) {
		options.parent.__renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call( this );
	}
}

Checkboxes.prototype = template.methods;

window.checkboxes = new Checkboxes({
  target: document.querySelector('.js-Checkboxes')
});

}());
