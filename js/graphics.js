function clamp(min, max, val) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

function scale(larger, smaller) {
  return Math.floor(larger / smaller);
}

export class Dimensions {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  clamp(containingDimensions) {
    var width = clamp(0, containingDimensions.width, this.width);
    var height = clamp(0, containingDimensions.height, this.height);
    return new Dimensions(width, height);
  }

  sample(dimensions) {
    var width = scale(this.width, dimensions.width);
    var height = scale(this.height, dimensions.height);
    return new Dimensions(width, height);
  }

  grow(direction, amount) {
    switch (direction) {
      case "HORIZONTALLY":
        return this.growHorizontally(amount);
      case "VERTICALLY":
        return this.growVertically(amount);
      default:
        throw new Error('Can only grow "HORIZONTALLY"  or "VERTICALLY".');
    }
  }

  growHorizontally(amount) {
    return new Dimensions(this.width + amount, this.height);
  }

  growVertically(amount) {
    return new Dimensions(this.width, this.height + amount);
  }
}

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

Point.ORIGIN = new Point(0, 0);

export class Bitmap {
  constructor(dimensions, transparent = true) {
    this.dimensions = dimensions;
    this.transparent = transparent;
    this.bitmap = new Array(this.length);
    return this;
  }

  get length() {
    return this.dimensions.width * this.dimensions.height;
  }

  index(point) {
    return point.y * this.dimensions.width + point.x;
  }

  valueAtPoint(point) {
    return this.bitmap[this.index(point)];
  }

  isWithinBounds(point) {
    return point.x < this.dimensions.width && point.y < this.dimensions.height;
  }

  drawPixel(point) {
    if (this.isWithinBounds(point)) {
      this.buffer[this.index(point)] = true;
    }
  }

  asTwoDimensionalArray() {
    var array = [];

    for (var rowIndex = 0; rowIndex < this.dimensions.height; rowIndex++) {
      for (
        var columnIndex = 0;
        columnIndex < this.dimensions.width;
        columnIndex++
      ) {
        array[rowIndex][columnIndex] = false;
      }
    }

    return array;
  }

  // drawLetter(letter, offset = Point.ORIGIN) {
  //   var xOffset = 0 + offset.x;
  //   return text.split("").reduce(function(canvas, letter) {
  //     var newOffset = createPoint(xOffset, offset.y);
  //     var newCanvas = combineCanvas(canvas, letterCanvas(letter), newOffset);
  //     xOffset += width(letterCanvas(letter)) + 1;
  //     return newCanvas;
  //   }, canvas);
  // }
}

const Directions = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3
};

/**
 * return the next positions for a point within the dimensions's bounds
 */
export function randomWalk(point, dimensions) {
  var nextDirection = Math.floor(Math.random() * 4);

  if (nextDirection === Directions.UP && point.y > 0) {
    return new Point(point.x, point.y - 1);
  }

  if (nextDirection === Directions.RIGHT && point.x < dimensions.width) {
    return new Point(point.x + 1, point.y);
  }

  if (nextDirection === Directions.DOWN && point.y < dimensions.height) {
    return new Point(point.x, point.y + 1);
  }

  if (nextDirection === Directions.LEFT && point.x < dimensions.width) {
    return new Point(point.x - 1, point.y);
  }

  return point;
}
