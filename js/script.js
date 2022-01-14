window.onload = function () {
  const jumpRef = document.querySelector('#jump');
  let count = 1;
  const scoreRef = document.querySelector('.score');
  jumpRef.addEventListener('click', () => {
    count += 1;
    scoreRef.textContent = count;
  });
};
