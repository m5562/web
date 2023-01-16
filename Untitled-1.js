self.addEventListener("mousemove", (e) => {
  dots.forEach((dot) => {
    let midPoint = {
      x: box.getBoundingClientRect().left + box.clientWidth / 2,
      y: box.getBoundingClientRect().top + box.clientHeight / 2,
    };
    let dy = midPoint.y - e.clientY;
    let dx = midPoint.x - e.clientX;
    dot.style.transform = `rotate(${
      (Math.atan2(dy, dx) * 180) / Math.PI + 180
    }deg)`;
  });
});
