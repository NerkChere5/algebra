let body = document.querySelector('body');
// let screen = document.querySelectorAll('.screen');

body.addEventListener('click', (event) => {
  if (event.target.matches('[travel="next"]')) {
    event.target.closest('.screen').classList.add('up');
  } else if (event.target.matches('[travel="prev"]')) {
    event.target.closest('.screen').classList.remove('up');
  };
});

body.addEventListener('click', (event) => {
  if (!event.target.classList.contains('popup_buttonExit')) return;
  event.target.parentElement.style.display = 'none';
})


document.querySelector('#rule_sum').addEventListener('click', () => {
  document.querySelector('#popup_sum').style.display = 'block';
})
document.querySelector('#rule_sub').addEventListener('click', () => {
  document.querySelector('#popup_sub').style.display = 'block';
})
document.querySelector('#rule_mult').addEventListener('click', () => {
  document.querySelector('#popup_mult').style.display = 'block';
})
document.querySelector('#rule_divis').addEventListener('click', () => {
  document.querySelector('#popup_divis').style.display = 'block';
})
document.querySelector('#rule_reduct').addEventListener('click', () => {
  document.querySelector('#popup_reduct').style.display = 'block';
})
document.querySelector('#rule_mnd').addEventListener('click', () => {
  document.querySelector('#popup_mnd').style.display = 'block';
})


