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
  _result_true = null;
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
    
    
    this._check_buttons[2].addEventListener('click', () => {
      this._answers = this._body.querySelectorAll('input');
      this._check_answer(this._task, this._answers[this._task_num].value, 'permutation');
    });
    
    this._check_buttons[3].addEventListener('click', () => {
      this._answers = this._body.querySelectorAll('input');
      this._check_answer(this._task, this._answers[this._task_num].value, 'permutation_repeat');
    });
    
    this._check_buttons[4].addEventListener('click', () => {
      this._answers = this._body.querySelectorAll('input');
      this._check_answer(this._task, this._answers[this._task_num].value, 'placements');
    });
    
    this._check_buttons[5].addEventListener('click', () => {
      this._answers = this._body.querySelectorAll('input');
      this._check_answer(this._task, this._answers[this._task_num].value, 'placements_repeat');
    });
    
    this._check_buttons[6].addEventListener('click', () => {
      this._answers = this._body.querySelectorAll('input');
      this._check_answer(this._task, this._answers[this._task_num].value, 'combinations');
    });
    
    this._check_buttons[7].addEventListener('click', () => {
      this._answers = this._body.querySelectorAll('input');
      this._check_answer(this._task, this._answers[this._task_num].value, 'combinations_repeat');
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
    let k = this._getRandomNum(1, 7);
    let n = this._getRandomNum(1, 7);
    
    if (k > n) {
      argument_1.textContent = k;
      argument_2.textContent = n;
      
      return [k, n];
    }
    else {
      argument_1.textContent = n;
      argument_2.textContent = k;
      
      return [n, k];
    }
  }
  
  
  _create_task_2() {
    let argument_1 = this._tasks[0];
    let argument_2 = this._tasks[1];
    let k = this._getRandomNum(1, 7);
    let n = this._getRandomNum(1, 7);
    
    argument_1.textContent = n;
    argument_2.textContent = k;
      
    return [n, k];
  }
  
  
  _create_task_3() {
    let argument_1 = this._tasks[0];
    let n = this._getRandomNum(0, 7);
    
    argument_1.textContent = n;
      
    return n;
  }
  
  
  _check_answer(conditions, _answers_user, type) {
    if (type == 'permutation_repeat') {
      let n = conditions[0] + conditions[1];
      this._result_true = Combinatorics[type](n, conditions[0], conditions[1]);
    }
    else if (type == 'permutation') {
        this._result_true = Combinatorics[type](conditions);
    }
    else {
      this._result_true = Combinatorics[type](conditions[0], conditions[1]);
    }
    
    if (_answers_user == this._result_true) {
      this._count_errors = 0;
      this._markMade_show_true();
      this._show_solve(conditions, type)
    }
    else {
      this._answer_false(conditions, type);
    }
  }
  
  
  _answer_false(conditions, type) {
    this._count_errors++;
    if (this._count_errors == 1) {
      this._answers[this._task_num].style.borderColor = 'red';
      
      this._markMade_show_false();
    }
    else if (this._count_errors > 2) {
      this._show_solve(conditions, type);
    }
  }
  
  
  _markMade_show_true() {
    if (this._mark_repeat[this._task_num].hasAttribute('hidden') == false) {
      this._mark_repeat[this._task_num].setAttribute('hidden', 'true');
    }
    
    this._answers[this._task_num].style.borderColor = 'green';
    
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
      let count_content = conditions[1];
      let total_content = conditions[0];
      
      let denominator_content = `(${conditions[0]} - ${conditions[1]})!`;
      let reader_content = `${conditions[0]}!`;
      let count = this._solve_content[this._task_num].querySelector('.count');
      let denominator = this._solve_content[this._task_num].querySelector('.denominator');
      let reader = this._solve_content[this._task_num].querySelector('.reader');
      let total = this._solve_content[this._task_num].querySelector('.total');
      
      count.textContent = count_content;
      denominator.textContent = denominator_content;
      reader.textContent = reader_content;
      total.textContent = total_content;
    }
    else if (type == 'combinations') {
      let count_content = conditions[1];
      let total_content = conditions[0];
      
      let denominator_content = `${conditions[1]}!(${conditions[0]} - ${conditions[1]})!`;
      let reader_content = `${conditions[0]}!`;
      
      let count = this._solve_content[this._task_num].querySelector('.count');
      let denominator = this._solve_content[this._task_num].querySelector('.denominator');
      let reader = this._solve_content[this._task_num].querySelector('.reader');
      let total = this._solve_content[this._task_num].querySelector('.total');
      
      count.textContent = count_content;
      denominator.textContent = denominator_content;
      reader.textContent = reader_content;
      total.textContent = total_content;
    }
    else if (type == 'combinations_repeat') {
      let count_content = conditions[1];
      let total_content = `${conditions[0]}+${conditions[1]}-1`;
      
      let denominator_content = `${conditions[1]}!(${conditions[0] + conditions[1] - 1} - ${conditions[1]})!`;
      let reader_content = `${conditions[0] + conditions[1] - 1}!`;
      
      let count = this._solve_content[this._task_num].querySelector('.count');
      let denominator = this._solve_content[this._task_num].querySelector('.denominator');
      let reader = this._solve_content[this._task_num].querySelector('.reader');
      let total = this._solve_content[this._task_num].querySelector('.total');
      
      count.textContent = count_content;
      denominator.textContent = denominator_content;
      reader.textContent = reader_content;
      total.textContent = total_content;
    }
    else if (type == 'permutation_repeat') {
      let count_content = `(${conditions[0]}, ${conditions[1]})`;
      
      let n = conditions[0] + conditions[1];
      
      let denominator_content = `${conditions[0]}!*${conditions[1]}!`;
      let reader_content = `(${conditions[0]} + ${conditions[1]})!`;
      
      let count = this._solve_content[this._task_num].querySelector('.count_permutation');
      let denominator = this._solve_content[this._task_num].querySelector('.denominator');
      let reader = this._solve_content[this._task_num].querySelector('.reader');
      
      count.textContent = count_content;
      denominator.textContent = denominator_content;
      reader.textContent = reader_content;
    }
    else if (type == 'placements_repeat') {
      let count_content = conditions[1];
      let total_content = conditions[0];
      
      let count = this._solve_content[this._task_num].querySelector('.count');
      let degree = this._solve_content[this._task_num].querySelector('.degree');
      let footing = this._solve_content[this._task_num].querySelector('.footing');
      let total = this._solve_content[this._task_num].querySelector('.total');
      
      count.textContent = count_content;
      degree.textContent = count_content;
      footing.textContent = total_content;
      total.textContent = total_content;
    }
    else if (type == 'permutation') {
      let count_content = conditions;
      let total_content = `${conditions}!`;
      
      let count = this._solve_content[this._task_num].querySelector('.count_permutation');
      let total = this._solve_content[this._task_num].querySelector('.total_permutation');
      
      count.textContent = count_content;
      total.textContent = total_content;
    }
    
    let answer = this._solve_content[this._task_num].querySelectorAll('.answer');
    
    answer[0].textContent = this._result_true;
    answer[1].textContent = this._result_true;
  }
  
  
  _clear_answer() {
    if (!this._answers) return;
    
    for (let answer of this._answers) {
      answer.value = '';
      answer.style.borderColor = '#000';
    }
    
    for (let i = 0; i <= this._task_num; i++) {
      if (this._mark_repeat[i].hasAttribute('hidden') == false) {
        this._mark_repeat[i].setAttribute('hidden', 'true');
      }
      
      if (this._mark_true[i].hasAttribute('hidden') == false) {
        this._mark_true[i].setAttribute('hidden', 'true');
      }
      
      if (this._solve_button[i].hasAttribute('hidden') == false) {
        this._solve_button[i].setAttribute('hidden', 'true');
      }
      
      if (this._check_buttons[i].hasAttribute('hidden') == true) {
        this._check_buttons[i].removeAttribute('hidden');
      }
    }
    
    this._answers = null;
    this._count_errors = 0;
    this._result_true = null;
    this._task = null;
    this._task_num = 0;
    this._tasks = null;
  }
  
  
  
  
  main(item_num) {
    this._clear_answer();
    
    this._task_num = item_num - 2;
    
    let screens = this._body.querySelectorAll('x-screen');
    
    this._tasks = screens[item_num].querySelectorAll('.task');
    
    this.defined_task();
  }
  
  
  defined_task() {
    if (this._task_num == 4 || this._task_num == 6) {
      this._task = this._create_task_1();
    }
    else if (this._task_num == 5 || this._task_num == 7 || this._task_num == 3) {
      this._task = this._create_task_2();
    }
    else if (this._task_num == 2) {
      this._task = this._create_task_3();
    }
  }
}


Tasks.init(import.meta.url);
