const shockets = document.querySelectorAll(".shocket");
const balls = document.querySelectorAll(".ball");

let origin = {
  x:
    shockets[0].getBoundingClientRect().left +
    (shockets[1].getBoundingClientRect().left -
      shockets[0].getBoundingClientRect().left) /
      2,
  y: shockets[0].getBoundingClientRect().top,
};
self.addEventListener("mousemove", (e) => {
  let dy = origin.y - e.clientY;
  let dx = origin.x - e.clientX;
  shockets.forEach((shocket) => {
    shocket.style.transform = `rotate(${
      (Math.atan2(dy, dx) * 180) / Math.PI + 180
    }deg)`;
  });
});
