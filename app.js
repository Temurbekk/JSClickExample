let text = document.getElementById('text');

function myFunction() {
  if (text.textContent == 'Please, Dont Press the Button') {
    text.innerHTML = 'Why Do You Click the Button 🙄';
    changeColorToRed();
  } else if (text.textContent == 'Why Do You Click the Button 🙄') {
    text.innerHTML = 'Dont Click the Button😠';
    changeColorToBlack();
  } else {
    text.innerHTML = 'Please, Dont Press the Button';
    changeColorToBisque();
  }
}

function changeColorToRed() {
  document.body.style.background = 'red';
  document.body.style.color = 'black';
}
function changeColorToBlack() {
  document.body.style.background = 'black';
  document.body.style.color = 'white';
}
function changeColorToBisque() {
  document.body.style.background = 'bisque';
  document.body.style.color = 'black';
}
