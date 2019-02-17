import { html, render } from "lit-html";
import store from "../store";

class Total extends HTMLElement {
  private count: number = 0;
  private storeUnsubscribe!: () => void;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  public connectedCallback() {
    this.storeUnsubscribe = store.subscribe(() => {
      this.stateChanged();
    });
    this.render();
  }

  public disconnectedCallback() {
    this.storeUnsubscribe();
  }

  private render() {
    render(
      html`
        Total: ${this.count}
      `,
      this.shadowRoot!
    );
  }

  private stateChanged() {
    const count: State["total"] = store.getters.getTotal;
    if (this.count !== count) {
      this.count = count;
      this.render();
    }
  }
}

customElements.define("total-count", Total);
