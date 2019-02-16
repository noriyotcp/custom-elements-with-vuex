import { html, render } from "lit-html";
import { store } from "../store";

export function counter(mount: HTMLElement, count: number) {
  const template = html`
    <p>${count}</p>

    <button
      @click=${() => {
        counter(mount, count + 1);
        store.commit("increment");
      }}
    >
      +
    </button>

    <button
      @click=${() => {
        counter(mount, count - 1);
        store.commit("decrement");
      }}
    >
      -
    </button>
  `;

  render(template, mount);
}
