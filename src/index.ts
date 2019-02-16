import { counter } from "./components/counter";
import { total } from "./components/total";
import { store } from "./store";

[].forEach.call(
  document.querySelectorAll<HTMLElement>(".counter"),
  (element: HTMLElement) => counter(element, 0)
);

const totalElement = document.querySelector<HTMLElement>("#total")!;
store.subscribe(() => {
  total(totalElement, store.state.total);
});
total(totalElement, store.state.total);
