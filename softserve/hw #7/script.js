// 7.1
const window = window.open('', '', 'width=300,height=300');

setTimeout(() => {
  window.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
  window.moveTo(200, 200);
}, 4000);

setTimeout(() => {
  window.close();
}, 6000);
