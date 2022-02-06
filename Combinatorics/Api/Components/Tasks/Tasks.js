import '../Popup/Popup.js';
import '../Screen/Screen.js';
import '../Slider/Slider.js';


import {Combinatorics} from '../../Combinatorics.js';
import {Component} from '../Component.js';




export class Tasks extends Component {
  _answers = null;
  _check_buttons = null;
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
    
    this._check_buttons = this._body.querySelectorAll('.check_btn');
    this._mark_repeat = this._body.querySelectorAll('.mark_error');
    this._mark_true = this._body.querySelectorAll('.mark_true');
    this._solve_button = this._body.querySelectorAll('.show_solve');
    this._solve_content = this._body.querySelectorAll('.content_solve');
    
    
    this._check_buttons[0].addEventListener('click', () => {
        this._answers = this._body.querySelectorAll('input');
        this._check_answer(this._task, this._answers[this._task_num].value, 'placements');
    });
    
    this._check_buttons[1].addEventListener('click', () => {
        this._answers = this._body.querySelectorAll('input');
        this._check_answer(this._task, this._answers[this._task_num].value, 'combinations');
    });
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
          this._show_solve(conditions, type)
      } else {
          this._answer_false(conditions, type);
        }
    } else if (type == 'combinations') {
      let _result_true = Combinatorics.combinations(conditions[0], conditions[1]);
      
      if (_answers_user == _result_true) {
          this._count_errors = 0;
          this._markMade_show_true();
          this._show_solve(conditions, type)
      } else {
          this._answer_false(conditions, type);
        }
    }
  }
  
  
  _answer_false(conditions, type) {
    this._count_errors++;
    if (this._count_errors == 1) {
      this._markMade_show_false();
    } else if (this._count_errors > 2) {
      this._show_solve(conditions, type);
    }
  }
  
  
  _markMade_show_true() {
    if (this._mark_repeat[this._task_num].hasAttribute('hidden') == false) {
      this._mark_repeat[this._task_num].setAttribute('hidden', 'true');
    }
    
    this._check_buttons[this._task_num].setAttribute('hidden', 'true');
    
    this._mark_true[this._task_num].removeAttribute('hidden');
  }
  
  
  
  _markMade_show_false() {
    this._mark_repeat[this._task_num].removeAttribute('hidden');
  }
  
  
  _show_solve(conditions, type) {
    this._create_solve(conditions, type);
    this._solve_button[this._task_num].removeAttribute('hidden');
  }
  
  
  _create_solve(conditions, type) {
    if (type == 'placements') {
      let total_content = conditions[0];
      let count_content = conditions[1];
      
      let reader_content = `${conditions[0]}!`;
      let denominator_content = `(${conditions[0]} - ${conditions[1]})!`;
      let answer_content = Combinatorics.placements(conditions[0], conditions[1]);
      
      let total = this._solve_content[this._task_num].querySelector('.total');
      let count = this._solve_content[this._task_num].querySelector('.count');
      let reader = this._solve_content[this._task_num].querySelector('.reader');
      let denominator = this._solve_content[this._task_num].querySelector('.denominator');
      let answer = this._solve_content[this._task_num].querySelectorAll('.answer');
      
      total.textContent = total_content;
      count.textContent = count_content;
      reader.textContent = reader_content;
      denominator.textContent = denominator_content;
      answer[0].textContent = answer_content;
      answer[1].textContent = answer_content;
    } else if (type == 'combinations') {
      let total_content = conditions[0];
      let count_content = conditions[1];
      
      let reader_content = `${conditions[0]}!`;
      let denominator_content = `${conditions[1]}!(${conditions[0]} - ${conditions[1]})!`;
      let answer_content = Combinatorics.combinations(conditions[0], conditions[1]);
      
      let total = this._solve_content[this._task_num].querySelector('.total');
      let count = this._solve_content[this._task_num].querySelector('.count');
      let reader = this._solve_content[this._task_num].querySelector('.reader');
      let denominator = this._solve_content[this._task_num].querySelector('.denominator');
      let answer = this._solve_content[this._task_num].querySelectorAll('.answer');
      
      total.textContent = total_content;
      count.textContent = count_content;
      reader.textContent = reader_content;
      denominator.textContent = denominator_content;
      answer[0].textContent = answer_content;
      answer[1].textContent = answer_content;
    }
  }
  
  
  _clear_answer() {
  //   for (let i = 0; i < this._answers.length; i++) {
  //     this._answers[i].value = '';
  //   }
    
    for (let i = 0; i < this._task_num; i++) {
      if (this._mark_repeat[i].hasAttribute('hidden') == false) {
        this._mark_repeat[i].setAttribute('hidden', 'true');
      }
      
      if (this._mark_true[i].hasAttribute('hidden') == false) {
        this._mark_true[i].setAttribute('hidden', 'true');
      }
      
      if (this._solve_button[i].hasAttribute('hidden') == false) {
        this._solve_button[i].setAttribute('hidden', 'true');
      }
    }
    
    
    this._answers = null;
    this._count_errors = 0;
    this._task = null;
    this._task_num = 0;
    this._tasks = null;
  }
  
  
  
  main(item_num) {
    this._clear_answer();
    
    
    this._task_num = item_num - 2;
    
    let screen = this._body.querySelectorAll('x-screen');
    
    this._tasks = screen[item_num].querySelectorAll('.task');
    
    this.defined_task();
  }
  
  
  defined_task() {
    if (this._task_num == 0) {
      this._task = this._create_task_1();
    } else if (this._task_num == 1) {
      this._task = this._create_task_1();
    } else if (this._task_num == 2) {
      this._task = this._create_task_1();
    }
  }
}


Tasks.init(import.meta.url);
