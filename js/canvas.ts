import { ALPHABET_MAP } from "./silkscreen";

interface Point {
  x: number;
  y: number;
}

type TwoDimensionalArray<T> = Array<Array<T>>;

type Canvas = TwoDimensionalArray<boolean>;

export function emptyCanvas(width: number, height: number): Canvas {
  const rows = [];

  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(false);
    }
    rows.push(row);
  }

  return rows;
}

function width<T>(canvas: TwoDimensionalArray<T>): number {
  return canvas[0].length;
}

function height<T>(canvas: TwoDimensionalArray<T>): number {
  return canvas.length;
}

export function createPoint(x: number, y: number): Point {
  return { x: x, y: y };
}

function isWithinBounds(canvas: Canvas, point: Point): boolean {
  return point.x < width(canvas) && point.y < height(canvas);
}

function combineCanvas(
  bottomCanvas: Canvas,
  topCanvas: Canvas,
  offset: Point
): Canvas {
  offset = offset || createPoint(0, 0);
  for (let row = 0; row < topCanvas.length; row++) {
    for (let column = 0; column < topCanvas[row].length; column++) {
      if (
        isWithinBounds(
          bottomCanvas,
          createPoint(column + offset.x, row + offset.y)
        )
      ) {
        bottomCanvas[row + offset.y][column + offset.x] =
          topCanvas[row][column];
      }
    }
  }
  return bottomCanvas;
}

export function flipBit(canvas: Canvas, x: number, y: number): void {
  if (isWithinBounds(canvas, createPoint(x, y))) {
    canvas[y][x] = true;
  }
}

function letterCanvas(letter: string): Canvas {
  if (letter === " ") {
    return [[false], [false], [false], [false], [false]];
  }

  return ALPHABET_MAP[letter[0].toUpperCase()];
}

export function drawText(
  canvas: Canvas,
  text: string,
  offset = createPoint(0, 0)
): Canvas {
  let xOffset = 0 + offset.x;
  return text.split("").reduce(function(canvas, letter) {
    const newOffset = createPoint(xOffset, offset.y);
    const newCanvas = combineCanvas(canvas, letterCanvas(letter), newOffset);
    xOffset += width(letterCanvas(letter)) + 1;
    return newCanvas;
  }, canvas);
}
