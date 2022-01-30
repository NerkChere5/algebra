import '../Popup/Popup.js';
import '../Screen/Screen.js';
import '../Slider/Slider.js';

import {Combinatorics} from '../../Combinatorics.js';
import {Component} from '../Component.js';




class Tasks extends Component {
  async _build() {
    await super._build();
    
    let tasks = document.querySelectorAll('.task');
  }
  

  _getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  
  
  
  // constructor() {
  //   super();
    
  //   let c = Combinatorics.combinations(31, 2);
  //   console.log(c);
  //   console.log(this._getRandomNum(2, 6))
  // }
}


Tasks.init(import.meta.url);
