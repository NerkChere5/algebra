import '../Popup/Popup.js';
import '../Screen/Screen.js';
import '../Slider/Slider.js';


import {Combinatorics} from '../../Combinatorics.js';
import {Component} from '../Component.js';




export class Tasks extends Component {
  // _screen_num = 0;
  _answers = null;
  _buttons = null;
  _count_errors = 0;
  _mark_repeat = null;
  _mark_true = null;
  _solve_button = null;
  _solve_content = null;
  _task = null;
  _task_num = 0;
  _tasks = null;
  
  
  
  
  
  async _build() {
    await super._build();
    
    this._buttons = this._body.querySelectorAll('.check_btn');
    this._mark_repeat = this._body.querySelectorAll('.mark_error');
    this._mark_true = this._body.querySelectorAll('.mark_true');
    this._tasks = this._body.querySelectorAll('.task');
    this._solve_button = this._body.querySelectorAll('.show_solve');
    this._solve_content = this._body.querySelectorAll('.content_solve');
  }
  
  
  _getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  _create_task_1() {
    let argument_1 = this._tasks[0];
    let argument_2 = this._tasks[1];
    let k = this._getRandomNum(2, 7);
    let n = this._getRandomNum(2, 7);
    
    if (k > n) {
      argument_1.textContent = k;
      argument_2.textContent = n;
      
      return [k, n];
    } else {
      argument_1.textContent = n;
      argument_2.textContent = k;
      
      return [n, k];
    }
  }
  
  
  _check_answer(conditions, _answers_user, type) {
    if (type == 'placements') {
      let _result_true = Combinatorics.placements(conditions[0], conditions[1]);
      if (_answers_user == _result_true) {
          this._count_errors = 0;
          this._markMade_show_true();
      } else {
          this._answer_false(conditions, type);
        }
    } else if (type == 'placements_repeat') {}
  }
  
  
  _answer_false(conditions, type) {
    this._count_errors++;
    if (this._count_errors == 1) {
      this._markMade_show_false();
    } else if (this._count_errors > 1) {
      this._show_solve(conditions, type);
    }
  }
  
  
  _markMade_show_true() {
    this._mark_true[this._task_num].removeAttribute('hidden');
  }
  
  
  
  _markMade_show_false() {
    this._mark_repeat[this._task_num].removeAttribute('hidden');
  }
  
  
  _show_solve(conditions, type) {
    this._create_solve(conditions, type);
  }
  
  
  _create_solve(conditions, type) {
    if (type == 'placements') {
      
    } else if (type == '') {}
  }
  
  
  
  
  defined_screen(item_num) {
    this._task_num = item_num - 2;
    
    if (item_num == 2) {
      this._task = this._create_task_1();
      
      this._buttons[0].addEventListener('click', () => {
        this._answers = this._body.querySelectorAll('input');
        this._check_answer(this._task, this._answers[0], 'placements')
      });
    } else if (item_num == 3) {
      alert('!')
    }
  }
}


Tasks.init(import.meta.url);
