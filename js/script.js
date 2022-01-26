window.onload = function () {
  let count = 1;

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  let x = 300;
  let y = 350;
  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fillStyle = 'red';
  context.fill();
  context.stroke();
  
  document.addEventListener('keydown', ballMoveHandler);
  document.addEventListener('touchstart', ballMoveHandler);

  function ballMoveHandler() {
    count += 1;
    if (y <= 0) {
      y = 425;
    } else {
      y -= 25;
    }
    
     function draw(){
      ​context.clearRect(0, 0, 600, 400);

      ​context.beginPath();
      ​context.arc(x, y, 50, 0, 2 * Math.PI);
      ​context.fillStyle="red";
      ​context.fill();

      ​context.font = '25px Arial';
      ​context.fillStyle = 'white';
      ​context.fillText("Count: " + count, 20, 30);
    }
    ​window.requestAnimationFrame(draw);

    
  }
  
};
