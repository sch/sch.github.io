import Checkboxes from "./Checkboxes.svelte";

const target = document.querySelector(".js-Checkboxes");

const checkboxes = new Checkboxes({
  target: target
});

export default checkboxes
