/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// carouselContainer = document.querySelector(".carousel-container");

// function createCarousel() {
//   const carouselSlide = document.createElement("div");
//   // const leftButton = document.createElement("div");
//   const firstImage = document.createElement("img");
//   const secondImage = document.createElement("img");
//   const thirdImage = document.createElement("img");
//   const fourthImage = document.createElement("img");
//   // const rightButton = document.createElement("div");
//   const lastClone = document.createElement("img");
//   const firstClone = document.createElement("img");

//   // carouselSlide.appendChild(leftButton);
//   carouselSlide.appendChild(lastClone);
//   carouselSlide.appendChild(firstImage);
//   carouselSlide.appendChild(secondImage);
//   carouselSlide.appendChild(thirdImage);
//   carouselSlide.appendChild(fourthImage);
//   carouselSlide.appendChild(firstClone);
//   // carouselSlide.appendChild(rightButton);

//   carouselSlide.classList.add("carousel");
//   // leftButton.classList.add("left-button");
//   // rightButton.classList.add("right-button");
//   lastClone.classList.add("lastClone");
//   firstClone.classList.add("firstClone");

//   firstClone.src = "./assets/carousel/mountains.jpeg";
//   firstImage.src = "./assets/carousel/mountains.jpeg";
//   secondImage.src = "./assets/carousel/computer.jpeg";
//   thirdImage.src = "./assets/carousel/trees.jpeg";
//   fourthImage.src = "./assets/carousel/turntable.jpeg";
//   lastClone.src = "./assets/carousel/turntable.jpeg";

//   return carouselSlide;
// }

// carouselContainer.appendChild(createCarousel());

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

rightBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

leftBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }

  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
