const btn = document.querySelector('.btn');
const inputs = document.querySelectorAll('.arr');
const out = document.querySelector('.out');

btn.addEventListener('click', function() {
  let data = '';

  inputs.forEach(function(input) {
    const label = input.getAttribute('data-form');
    const value = input.value;

    data += `${label}: ${value}`;
  });

  out.textContent = data;
});
