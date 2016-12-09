import Inferno from "inferno";
import createElement from "inferno-create-element";
import { emptyCanvas, flipBit } from "./canvas"

const target = document.querySelector(".js-Checkboxes")

function Checkbox (checked) {
  return createElement("input", { type: "checkbox", checked })
}

function CheckboxCanvas (canvas) {
  const checkboxCanvas = canvas.map((row) => createElement("div", null, row.map(Checkbox)))

  return createElement("div", {
    className: "CheckboxCanvasContainer"
  }, checkboxCanvas)
}

function render () {
  console.log("rendering")
  const { width, height } = getCanvasSize()
  const canvas = emptyCanvas(width, height)
  Inferno.render(CheckboxCanvas(canvas), target)
}

function newCurrentSizeCanvas () {
  const { width, height } = getCanvasSize()
  return emptyCanvas(width, height)
}

function update () {
  requestAnimationFrame(render)
}

function getCanvasSize () {
  return tapLog({
    width: Math.floor(window.innerWidth / 20),
    height: Math.floor(window.innerHeight / 20),
  })
}

window.addEventListener("resize", update, false)
update()

setTimeout(function () {
  const canvas = newCurrentSizeCanvas()
  flipBit(canvas, 5, 5)
  Inferno.render(CheckboxCanvas(canvas), target)
}, 5000)

function tapLog (val) {
  console.log(val)
  return val
}
