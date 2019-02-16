import { counter } from "./counter";

[].forEach.call(
  document.querySelectorAll<HTMLElement>(".counter"),
  (element: HTMLElement) => counter(element, 0)
);
