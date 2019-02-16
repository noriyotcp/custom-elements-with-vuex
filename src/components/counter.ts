import { html, render } from "lit-html";
import store from "../store";

class Counter extends HTMLElement {
  private count = 0;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  public connectedCallback() {
    this.render();
  }

  private render() {
    render(
      html`
        <p>${this.count}</p>

        <button
          @click=${() => {
            this.count++;
            store.commit("increment");
            this.render();
          }}
        >
          +
        </button>

        <button
          @click=${() => {
            this.count--;
            store.commit("decrement");
            this.render();
          }}
        >
          -
        </button>
      `,
      this.shadowRoot!
    );
  }
}

customElements.define("lit-counter", Counter);
