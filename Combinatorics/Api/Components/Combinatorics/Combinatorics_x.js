import '../Popup/Popup.js';
import '../Screen/Screen.js';
import '../Slider/Slider.js';

import {Combinatorics} from '../../Combinatorics.js';
import {Component} from '../Component.js';




class Combinatorics_x extends Component {
  async _build() {
    await super._build();
  }
  
  
  
  
  constructor() {
    super();
    
    let c = Combinatorics.combinations(31, 2);
    console.log(c);
  }
}


Combinatorics_x.init(import.meta.url);
