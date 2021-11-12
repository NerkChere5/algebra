import {Component} from '../../Api/Component.js';




class Screen extends Component {
  _points = null;
  _popups = null;
  
  
  
  
  async _build() {
    await super._build();
    
    this._points = this._root.querySelectorAll('[popup_link]');
    this._popups = this._root.querySelector('.meta_popups').assignedElements();
    
    this._body.addEventListener('click', this._on_click.bind(this));
  }
  
  
  _on_click(event) {
    let popup_link = event.target.getAttribute('popup_link');
    
    if (!popup_link) return;
    
    let popup = this._popups.find((item) => item.getAttribute('popup_name') == popup_link);
    
    if (!popup) return;
    
    popup.visible = true;
  }
}


Screen.init(import.meta.url);
