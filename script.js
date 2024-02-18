function changeColor() {
   const discoText = document.querySelector('.disco');
   const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
   discoText.style.color = randomColor;
}

// Call changeColor function every second
setInterval(changeColor, 1000);