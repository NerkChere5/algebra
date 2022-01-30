export class Combinatorics {
  static _factorial(num) {
    let result = 1n;

    for (let i = 1n; i <= num; i++) {
      result *= i;
    }
    
    return result;
  }
  
  
  
  
  static combinations(power, count) {
    let power_count = this._factorial(power);
    let count_combination = this._factorial(count);
    let difference = power - count;
    let difference_count = this._factorial(difference);
    let denominator = count_combination * difference_count;
    let result = power_count / denominator;
    
    return result;
  }
  
  
  static combinations_repeat(power, count) {
    let power_repeat = power + count - 1;
    let power_count = this._factorial(power_repeat);
    let count_combination = this._factorial(count);
    let difference = power_repeat - count;
    let difference_count = this._factorial(difference);
    let denominator = count_combination * difference_count;
    let result = power_count / denominator;
    
    return result;
  }
  
  
  static multiplication() {
    let result = 1;
    
    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    
    return result;
  }
  
  
  static sum() {
    let result = 1;
  
    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }
  
  
  static permutation(num) {
    this._factorial(num);
  }
  
  
  static permutation_repeat() {
    let power = this._factorial(arguments[0]);
    let result = 1;
    let count_repeat = 1;
    
    for (let i = 1; i < arguments.length; i++) {
      count_repeat *= this._factorial(arguments[i]);
    }
    
    result = power / count_repeat;
    
    return result;
  }
  
  
  static placements(power, count) {
    let permutation = this._factorial(power);
    let methods = power - count;
    let methods_count = this._factorial(methods);
    let result = permutation / methods_count;
    
    return result;
  }
  
  
  static placements_repeat(power, count) {
    let result = power ** count;
    
    return result;
  }
}
