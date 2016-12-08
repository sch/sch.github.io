import { ALPHABET_MAP } from "./silkscreen"

var ORIGIN = createPoint(0, 0)

export function emptyCanvas (width, height) {
  var rows = []

  for (var i = 0; i < height; i++) {
    var row = []
    for (var j = 0; j < width; j++) {
      row.push(false)
    }
    rows.push(row)
  }

  return rows
}

function width (canvas) {
  return canvas[0].length
}

function height (canvas) {
  return canvas.length
}

export function createPoint (x, y) {
  return { x: x, y: y }
}

function isWithinBounds (canvas, point) {
  return point.x < width(canvas) && point.y < height(canvas)
}

function combineCanvas (bottomCanvas, topCanvas, offset = createPoint(0, 0)) {
  for (var row = 0; row < topCanvas.length; row++) {
    for (var column = 0; column < topCanvas[row].length; column++) {
      if (isWithinBounds(bottomCanvas, createPoint(column + offset.x, row + offset.y))) {
        bottomCanvas[row + offset.y][column + offset.x] = topCanvas[row][column]
      }
    }
  }
  return bottomCanvas
}

function flipBit (canvas, x, y) {
  canvas[y][x] = true
}

function letterCanvas (letter) {
  if (letter === " ") {
    return [[false], [false], [false], [false], [false]]
  }
  return ALPHABET_MAP[letter[0].toUpperCase()]
}

export function drawText (canvas, text, offset = ORIGIN) {
  let xOffset = 0 + offset.x
  return text.split("").reduce(function (canvas, letter) {
    const newOffset = createPoint(xOffset, offset.y)
    const newCanvas = combineCanvas(canvas, letterCanvas(letter), newOffset)
    xOffset += width(letterCanvas(letter)) + 1
    return newCanvas
  }, canvas)
}

function textCanvas (text) {
  return text.split("").map(letterCanvas).reduce(function (canvas, letter) {
  })
}

function beside (leftCanvas, rightCanvas) {
  const newWidth = width(leftCanvas) + width(rightCanvas)
  const newHeight = height(leftCanvas) + height(rightCanvas)
  const newCanvas = emptyCanvas(newWidth, newHeight)
  return combineCanvas(combineCanvas(newCanvas, leftCanvas), rightCanvas, createPoint(width(leftCanvas), 0))
}

function padCanvas (canvas, side, amount) {
  // assume side is "left"
  const SIDE = "left"
  return canvas
}
