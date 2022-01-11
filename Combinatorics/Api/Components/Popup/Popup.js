import {Component} from '../Component.js';




class Popup extends Component {
  set visible(value) {
    this._body.setAttribute('visible', value);
  }
  
  
  
  
  async _build() {
    await super._build();
    
    let button = this._root.querySelector('.button');
    button.addEventListener('click', this._on__button_click.bind(this));
  }
  
  
  _on__button_click() {
    this.visible = false;
  }
}


Popup.init(import.meta.url);
