import React from "react";
import ReactDOM from "react-dom";
import { emptyCanvas, flipBit } from "./canvas";
import { randomWalk } from "./graphics";

function currentWindowSize() {
  return { width: window.innerWidth, height: window.innerHeight };
}

function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState(currentWindowSize());

  React.useEffect(function() {
    function handleResize() {
      setWindowSize(currentWindowSize());
    }

    window.addEventListener("resize", handleResize);

    return function unmount() {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

function Checkbox(props) {
  return React.createElement(
    "label",
    { style: { padding: "4px 3px", display: "inline-block" } },
    React.createElement("input", {
      type: "checkbox",
      checked: props.isChecked,
      onChange: props.onChange,
      style: { margin: 0, padding: 0 }
    })
  );
}

function CheckboxCanvas() {
  const windowSize = useWindowSize();
  const [points, setPoints] = React.useState([]);

  const dimensions = {
    width: Math.floor(windowSize.width / 22),
    height: Math.floor(windowSize.height / 22)
  };

  React.useEffect(
    function() {
      const interval = setInterval(function() {
        setPoints(points.map(point => randomWalk(point, dimensions)));
      }, 1000);

      return function cleanup() {
        clearInterval(interval);
      };
    },
    [points]
  );

  const canvas = emptyCanvas(dimensions.width, dimensions.height);

  points.forEach(({ x, y }) => flipBit(canvas, x, y));

  function togglePoint(changedPoint) {
    let newPoints = points.filter(
      ({ x, y }) => !(x === changedPoint.x && y === changedPoint.y)
    );

    if (newPoints.length === points.length) {
      newPoints = [...points, changedPoint];
    }

    setPoints(newPoints);
  }

  const checkboxes = canvas.map((row, rowIndex) =>
    React.createElement(
      "div",
      { key: rowIndex, style: { lineHeight: 0 } },
      row.map((isChecked, columnIndex) =>
        React.createElement(Checkbox, {
          key: columnIndex,
          isChecked,
          onChange: () => {
            console.log(`Clicked (${columnIndex}, ${rowIndex})`);
            togglePoint({ x: columnIndex, y: rowIndex });
          }
        })
      )
    )
  );

  return React.createElement(
    "div",
    {
      className: "CheckboxCanvasContainer"
    },
    checkboxes
  );
}

const target = document.querySelector(".js-Checkboxes");

ReactDOM.createRoot(target).render(React.createElement(CheckboxCanvas));

if (target && target.classList.contains("isPaused")) {
  target.classList.remove("isPaused");
}
