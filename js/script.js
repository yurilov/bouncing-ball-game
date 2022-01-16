window.onload = function () {
  const jumpRef = document.querySelector("#jump");
  let count = 1;
  const scoreRef = document.querySelector(".score");

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  let x = 300;
  let y = 350;
  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fillStyle = "red";
  context.fill();
  context.stroke();
  jumpRef.addEventListener("click", () => {
    count += 1;
    scoreRef.textContent = count;
  });
};
