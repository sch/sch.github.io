function clamp(min: number, max: number, val: number): number {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

function scale(larger: number, smaller: number): number {
  return Math.floor(larger / smaller);
}

export class Dimensions {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  clamp(containingDimensions: Dimensions): Dimensions {
    const width = clamp(0, containingDimensions.width, this.width);
    const height = clamp(0, containingDimensions.height, this.height);
    return new Dimensions(width, height);
  }

  sample(dimensions: Dimensions): Dimensions {
    const width = scale(this.width, dimensions.width);
    const height = scale(this.height, dimensions.height);
    return new Dimensions(width, height);
  }

  grow(direction: "HORIZONTALLY" | "VERTICALLY", amount: number): Dimensions {
    switch (direction) {
      case "HORIZONTALLY":
        return this.growHorizontally(amount);
      case "VERTICALLY":
        return this.growVertically(amount);
      default:
        throw new Error('Can only grow "HORIZONTALLY"  or "VERTICALLY".');
    }
  }

  growHorizontally(amount: number): Dimensions {
    return new Dimensions(this.width + amount, this.height);
  }

  growVertically(amount: number): Dimensions {
    return new Dimensions(this.width, this.height + amount);
  }
}

export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Bitmap {
  dimensions: Dimensions;
  transparent: boolean;
  bitmap: boolean[];

  constructor(dimensions: Dimensions, transparent = true) {
    this.dimensions = dimensions;
    this.transparent = transparent;
    this.bitmap = new Array(this.length);
    return this;
  }

  get length(): number {
    return this.dimensions.width * this.dimensions.height;
  }

  index(point: Point): number {
    return point.y * this.dimensions.width + point.x;
  }

  valueAtPoint(point: Point): boolean {
    return this.bitmap[this.index(point)];
  }

  isWithinBounds(point: Point): boolean {
    return point.x < this.dimensions.width && point.y < this.dimensions.height;
  }

  drawPixel(point: Point): void {
    if (this.isWithinBounds(point)) {
      this.bitmap[this.index(point)] = true;
    }
  }

  asTwoDimensionalArray(): boolean[][] {
    const array: boolean[][] = [];

    for (let rowIndex = 0; rowIndex < this.dimensions.height; rowIndex++) {
      for (
        let columnIndex = 0;
        columnIndex < this.dimensions.width;
        columnIndex++
      ) {
        array[rowIndex][columnIndex] = false;
      }
    }

    return array;
  }

  // drawLetter(letter, offset = new Point(0, 0)) {
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
export function randomWalk(point: Point, dimensions: Dimensions): Point {
  const nextDirection = Math.floor(Math.random() * 4);

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
