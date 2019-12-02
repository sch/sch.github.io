import React from "react";
import ReactDOM from "react-dom";
import { emptyCanvas, flipBit } from "./canvas";

const target = document.querySelector(".js-Checkboxes");

function Checkbox(checked) {
  return React.createElement("input", { type: "checkbox", checked });
}

function CheckboxCanvas(canvas) {
  const checkboxCanvas = canvas.map(row =>
    React.createElement("div", null, row.map(Checkbox))
  );

  return React.createElement(
    "div",
    {
      className: "CheckboxCanvasContainer"
    },
    checkboxCanvas
  );
}

function render() {
  console.log("rendering");
  const { width, height } = getCanvasSize();
  const canvas = emptyCanvas(width, height);
  ReactDOM.render(CheckboxCanvas(canvas), target);
}

function newCurrentSizeCanvas() {
  const { width, height } = getCanvasSize();
  return emptyCanvas(width, height);
}

function update() {
  requestAnimationFrame(render);
}

function getCanvasSize() {
  return tapLog({
    width: Math.floor(window.innerWidth / 20),
    height: Math.floor(window.innerHeight / 20)
  });
}

window.addEventListener("resize", update, false);
update();

var el = document.querySelector(".js-Checkboxes");

if (el && el.classList.contains("isPaused")) {
  el.classList.remove("isPaused");
}

setTimeout(function() {
  const canvas = newCurrentSizeCanvas();
  flipBit(canvas, 5, 5);
  ReactDOM.render(CheckboxCanvas(canvas), target);
}, 5000);

function tapLog(val) {
  console.log(val);
  return val;
}
