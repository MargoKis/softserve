const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const animation = circle.getAttribute('data-anim');
  circle.classList.add(animation);
  
  const appliedAnimations = circle.classList.toString();
  console.log(`Element with data-anim="${animation}" has applied animations: ${appliedAnimations}`);
});
