import {LitElement, html, css} from 'lit-element';

export class MyElement extends LitElement {

  static get properties() {
    return {
      displayModal: {type: Boolean},
      title: {type: String},
      notitle: {type: Boolean},
    };
  }

  constructor() {
    super();
    this.displayModal = false;
    this.title = "Title";
    this.notitle = false;
  }


  render() {
    

    return html`
      ${this.displayModal ? 
        html`<div class="backdrop"  @click="${this.backdropClicked}"></div>` : 
        null}
      <div class="${this.displayModal ? 'opened-modal' : 'closed-modal'}">
        <span class="close-button" @click="${this.closeModal}">[X] Close</span>
        ${this.notitle ?
          null :
          html `<div class="modal-header">
                  <h3 class="modal-title">${this.title}</h3>
                </div>`
        }
        <slot></slot>
        <div class="buttons-container">
          <slot name="button1" class="button-1"></slot>
          <slot name="button2" class="button-2"></slot>
          <slot name="button3" class="button-3"></slot>
          <slot name="button4" class="button-4"></slot>
        </div>
      </div>
    `;
  }

  open() {
    this.displayModal = true;
  }

  backdropClicked() {
    this.displayModal = false;
  }

  closeModal() {
    this.displayModal = false;
  }
  
  static get styles() {
    return css`
      .backdrop {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0.5);
      }  
      .opened-modal {
        position: fixed;
        z-index: 500;
        background-color: var(--modal-background-color, white);
        width: var(--modal-width, 600px);
        max-height: 500px;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding: 16px;
        left: calc(50% - var(--modal-width, 600px) / 2);
        top: 10%;
        box-sizing: border-box;
        border-radius: var(--modal-border-radius, 0px);
        transition: all 0.3s ease-out;
        overflow: scroll;
        opacity: 1;
        transform: translateY(0);
      }

      .closed-modal {
        display: none;
      }

      .modal-title {
        margin: 0;
        width: 100%;
        height: auto;
        color: var(--modal-title-color, black);
        
      }

      .modal-header {
        border-bottom: 3px solid black;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .close-button {
        font-weight: bold;
        cursor: pointer;
        color: red;
        right: 5px;
        top: 3px;
        position: fixed;
      }

      .buttons-container {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
      }

      .buttons-container ::slotted(*) {
        border: none;
        color: black;
        outline: none;
        cursor: pointer;
        font: inherit;
        padding: 10px;
        margin: 5px;
        font-weight: bold;
        border-radius: 3px;
        align-items: center;
      }

      slot[name=button1]::slotted(*) {
        background-color: var(--button-1-background-color, transparent);
        color: var(--button-1-color, black);
      }

      slot[name=button2]::slotted(*) {
        background-color: var(--button-2-background-color, transparent);
        color: var(--button-2-color, black);
      }

      slot[name=button3]::slotted(*) {
        background-color: var(--button-3-background-color, transparent);
        color: var(--button-3-color, black);
      }

      slot[name=button4]::slotted(*) {
        background-color: var(--button-4-background-color, transparent);
        color: var(--button-4-color, black);
      }
    `;
  }
}

window.customElements.define('my-element', MyElement);
