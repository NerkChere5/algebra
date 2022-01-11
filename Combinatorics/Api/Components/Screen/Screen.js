import {Component} from '../Component.js';




class Screen extends Component {
  _head = null;
  _points = null;
  _popups = null;
  
  
  
  async _build() {
    await super._build();
     
    this._head = this._body.querySelector('.head');
    this._points = this._root.querySelectorAll('[popup_link]');
    this._popups = this._root.querySelector('.meta_popups').assignedElements();
    
    this._body.addEventListener('click', this._on_click.bind(this));
    this._define_head();
  }
  
  
  _on_click(event) {
    let popup_link = event.target.getAttribute('popup_link');
    
    if (!popup_link) return;
    
    let popup = this._popups.find((item) => item.getAttribute('popup_name') == popup_link);
    
    if (!popup) return;
    
    popup.visible = true;
  }
  
  _define_head() {
    let title = this.getAttribute('head');
    
    this._head.textContent = title;
  }
}


Screen.init(import.meta.url);
