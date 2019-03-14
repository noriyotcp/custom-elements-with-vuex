import { html, render } from "lit-html";
import store from "../store";

class Counter extends HTMLElement {
  private count: number = 0;

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
            store.dispatch("increment");
            this.render();
          }}
        >
          +
        </button>

        <button
          @click=${() => {
            this.count--;
            store.dispatch("decrement");
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
