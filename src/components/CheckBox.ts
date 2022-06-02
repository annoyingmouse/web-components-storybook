import "./styles.css";

export class CheckBox extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    const shadowRoot = this.attachShadow({ mode: "open" });
    template.innerHTML = `
    <style>
    :host {
      display: inline-block;
      width: 28px;
      height: 28px;
      outline: none;
    }
    :host input[type='checkbox'] {
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }
    :host input[type='checkbox']:before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      border: 2px solid var(--color-border);
      border-radius: 6px;
      background: var(--color-bg);
    }
    :host input[type='checkbox']:checked:before {
      background-image: var(--icon-check);
      background-repeat: no-repeat;
      background-position: center;
    }
    :host input[type='checkbox']:focus,
    :host input[type='checkbox']:active {
      outline: 0px;
      outline-offset: 0px;
    }
    :host input[type='checkbox']:hover:before,
    :host input[type='checkbox']:focus:before,
    :host input[type='checkbox']:active:before {
      border: 2px solid var(--color-highlight);
    }
    :host input[type='checkbox'][disabled]:before {
      opacity: var(--opacity-disabled);
      background: var(--color-disabled);
      cursor: not-allowed;
    }
    :host input[type='checkbox'][disabled]:checked:before {
      background-image: var(--icon-check);
      background-repeat: no-repeat;
      background-position: center;
    }
    :host input[type='checkbox'][disabled]:hover:before,
    :host input[type='checkbox'][disabled]:focus:before,
    :host input[type='checkbox'][disabled]:active:before {
      border: 2px solid var(--color-border);
      outline: none;
      box-shadow: none;
    }
    :host input[type='checkbox'].required:before,
    :host input[type='checkbox'].required:hover:before,
    :host input[type='checkbox'].required:focus:before,
    :host input[type='checkbox'].required:active:before {
      border: 2px solid var(--color-error);
      outline: none;
      box-shadow: none;
    }
    </style>
    <input type="checkbox">
    `;
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

if (!customElements.get("my-checkbox")) {
  customElements.define("my-checkbox", CheckBox);
}
