document.addEventListener("DOMContentLoaded", function () {
  function createStar() {
      if (document.querySelectorAll(".star").length > 50) return; 
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      const size = Math.random() * 3 + 2 + "px";
      star.style.width = size;
      star.style.height = size;
      star.style.animationDuration = Math.random() * 2 + 1 + "s";
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 3000);
  }

  function createHeart() {
      if (document.querySelectorAll(".heart").length > 30) return; 
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      const size = Math.random() * 20 + 10 + "px";
      heart.style.width = size;
      heart.style.height = size;
      heart.style.animationDuration = Math.random() * 3 + 3 + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
  }

  setInterval(createStar, 200);
  setInterval(createHeart, 500);

  
  document.querySelector(".surprise-button").addEventListener("click", function () {
      const popup = document.getElementById('popup');
      popup.style.display = "block";  
      this.style.display = "none";  
  });

  
  const catGifs = [
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXNqb3l4b2EwMnVzdDk3d2lndjhmZ2xjemdzdGlsM3I2OWd1amtsdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Md4xQfuJeTtx6/giphy.gif",
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnI1aGEwMmdpYTZqc3A1eTNyOTF4MnJvcTg1ZGt4aWpmNTZjazE3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rCxogJBzaeZuU/giphy.gif",
      "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGk1ZDhmZTBpNHd6ZTRiOGFyczhrNmMxdXliMjUzMmk2a3hqcTYxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BBNYBoYa5VwtO/giphy.gif",
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDkyOHB0cWRyanF5MjE0OHJ2Y3c2OTh2OGpya2JrdzR1ZTVqcTU0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5i7umUqAOYYEw/giphy.gif"
  ];

  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const catGif = document.getElementById("catGif");

  let noClickCount = 0;

  
  noButton.addEventListener("click", function () {
      noClickCount++;

      
      yesButton.style.transform = `scale(${1 + noClickCount * 0.5})`;

      
      noButton.style.transform = `scale(${1 - noClickCount * 0.2})`;

      
      catGif.src = catGifs[Math.floor(Math.random() * catGifs.length)];

      
      if (noClickCount >= 5) {
          noButton.style.display = "none";
      }
  });

  yesButton.addEventListener("click", function () {
      document.body.innerHTML = `
          <div class="yay-container">
              <h1 class="yay-text">YAY! 🎉💖</h1>
              <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmp0eGxpYWpjbGZtdmNlaDRiOHdwNWRqZnd2em54OThicXBlMG9yMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif" class="yay-gif">
          </div>
      `;
  });
});
