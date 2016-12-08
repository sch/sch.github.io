// import Checkboxes from "./Checkboxes.html";
import Inferno from "inferno";
import createElement from "inferno-create-element";
import { emptyCanvas } from "./canvas"

const target = document.querySelector(".js-Checkboxes")

// OLD IMPLEMENTATION
// window.checkboxes = new Checkboxes({
//   target: target
// });

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

function update () {
  requestAnimationFrame(render)
}

function getCanvasSize () {
  return {
    width: Math.floor(window.innerWidth / 16),
    height: Math.floor(window.innerHeight / 16) - 3
  }
}

window.addEventListener("resize", update, false)
