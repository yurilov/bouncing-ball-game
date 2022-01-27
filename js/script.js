window.onload = function () {
  let count = 1;
  let t = Date.now();
  let speed = 25;

  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  let x = 300;
  let y = 350;
  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fillStyle = "red";
  context.fill();
  context.stroke();
  window.addEventListener("keydown", ballMoveHandler);
  window.addEventListener("touchstart", ballMoveHandler);

  function ballMoveHandler(e) {
    e.preventDefault;

    count += 1;

    y -= 25;

    function draw() {
      context.clearRect(0, 0, 600, 400);

      context.beginPath();
      context.arc(x, y, 50, 0, 2 * Math.PI);
      context.fillStyle = "red";
      context.fill();

      context.font = "25px Arial";
      context.fillStyle = "white";
      context.fillText("Count: " + count, 20, 30);
      let timePassed = (Date.now() - t) / 1000;
      t = Date.now();
      if (y <= 350) {
        speed += 50 * timePassed;
        y += speed * timePassed;
      }
      if (y > 350) {
        count = 0;
      }

      window.requestAnimationFrame(draw);
    }

    draw();
  }
};
