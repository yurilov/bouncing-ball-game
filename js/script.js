window.onload = function () {
  const jumpRef = document.querySelector('#jump');
  let count = 1;
  const scoreRef = document.querySelector('.score');
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.moveTo(150, 100);
  context.lineTo(600, 400);
  context.stroke();
  jumpRef.addEventListener('click', () => {
    count += 1;
    scoreRef.textContent = count;
  });
};
