// Import stylesheets
import './style.css';

const sliders = document.querySelectorAll('.slider') as NodeListOf<HTMLInputElement>;
const borderPicker = document.querySelector('.border-picker');
const bordertl = document.querySelector('.bordertl');
const bordertr = document.querySelector('.bordertr');
const borderbr = document.querySelector('.borderbr');
const borderbl = document.querySelector('.borderbl');

sliders.forEach((slider) => {
  slider.addEventListener('change', updateBorderPicker);

});



function updateBorderPicker(event: Event) {
  const sliders = document.querySelectorAll('.slider') as NodeListOf<HTMLInputElement>;
  const [br, tl, bl, tr] = Array.from(sliders).map((slider) => slider.value);
  const borderPicker = document.querySelector('.border-picker') as HTMLElement;
  borderPicker.style.borderRadius = `${tl}% ${tr}% ${br}% ${bl}%`;
  
  bordertl.innerHTML = `${tl}%`;
  bordertr.innerHTML = `${tr}%`; 
  borderbr.innerHTML = `${br}%`;
  borderbl.innerHTML = `${bl}%`;
}