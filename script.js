const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");
const dialog = document.querySelector("dialog");

openButton.addEventListener("click", () => {
    dialog.showModal();
});
closeButton.addEventListener("click", () => {
    dialog.hideModal();
});

dialog.addEventListener("click", ({ target: dialog }) => {
    if (dialog.nodeName === "DIALOG") {
        dialog.close("dismiss");
    }
});
  
document.addEventListener("DOMContentLoaded", function () {
    const balloons = document.querySelectorAll(".balloon");
  
    function getRandomColor() {
      const randomRed = Math.floor(Math.random() * 80 + 20);
      const randomGreen = Math.floor(Math.random() * 50 + 20);
      const randomBlue = Math.floor(Math.random() * 80 + 20);
      return `rgb(${randomRed},${randomGreen},${randomBlue})`;
    }
  
    function applyRandomColor(balloon) {
      const randomColor = getRandomColor();
      balloon.querySelector("svg").style.fill = randomColor;
    }
  
    function onAnimationIteration(event) {
      const balloon = event.target;
      applyRandomColor(balloon);
    }
  
    balloons.forEach((balloon) => {
      balloon.addEventListener("animationiteration", onAnimationIteration);
      applyRandomColor(balloon);
    });
  });
  