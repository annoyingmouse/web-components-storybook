export class InfoTooltip extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");

    template.innerHTML = `
      <style>
        .info-tooltip-wrapper {
          display: inline-block;
          position: relative;
        }

        .info-tooltip-box {
          position: absolute;
          left: 50%;
          top: -3px;
          transform: translate(-50%, calc(-100% - 10px));
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.9);
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }

        .info-tooltip-box::before {
          content: "";
          position: absolute;
          bottom: -9px;
          left: calc(50% - 10px);
          border-top: 10px solid rgba(0, 0, 0, 0.9);
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }

        .info-tooltip-trigger {
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.3);
          padding: 0;
          width: 1rem;
          background-color: white;
        }

        .info-tooltip-trigger:focus {
          border-color: rgb(1, 104, 215);
          box-shadow: 0 0 0 2px rgba(1, 104, 215, 0.5);
          outline: none;
        }

        .info-tooltip-trigger:hover .info-tooltip-box,
        .info-tooltip-trigger:focus .info-tooltip-box {
          opacity: 1;
        }

        .info-tooltip-text {
          display: inline-block;
          overflow-y: scroll;
          max-height: 2.5rem;
          padding: 6px 10px;
          width: 8rem;
        }
      </style>
      <button type="button" aria-labelledby="tip" class="info-tooltip-wrapper info-tooltip-trigger">
        <span class="info-tooltip-box" id="tip">
          <span class="info-tooltip-text">
            <slot name="content"></slot>
          </span>
        </span>
        <span class="info-tooltip-icon" aria-hidden="true">ℹ</span>
      </button>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("info-tooltip", InfoTooltip);
