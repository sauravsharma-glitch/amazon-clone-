const images = ["amozon hero 1.jpg", "amozon hero 2.jpg", "amozon hero 3.jpg", "amozon hero 4.jpg", "amozon hero 5.jpg", "amozon hero 6.jpg"];
  let index = 0;
  const heroImg = document.getElementById("hero-img");

  setInterval(() => {
    index = (index + 1) % images.length;
    heroImg.src = images[index];
  }, 3000);

  const leftArrow = document.querySelector(".hero-left");
const rightArrow = document.querySelector(".hero-right");

leftArrow.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  heroImg.src = images[index];
});

rightArrow.addEventListener("click", () => {
  index = (index + 1) % images.length;
  heroImg.src = images[index];
});


 function setupSlider(trackId, prevId, nextId) {
  const slider = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// Initialize both sliders
setupSlider('slider-track1', 'prev1', 'next1');
setupSlider('slider-track2', 'prev2', 'next2');
setupSlider('slider-track3', 'prev3', 'next3');

const search = document.querySelector('.search-input');
search.addEventListener('input', () => {
  const term = search.value.toLowerCase();
  document.querySelectorAll('.shop-box').forEach(box => {
    const text = box.innerText.toLowerCase();
    box.style.display = text.includes(term) ? '' : 'none';
  });
});

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll('.shop-box').forEach(box => {
    const text = box.innerText.toLowerCase();
    box.style.display = text.includes(query) ? '' : 'none';
  });
});

document.getElementById("footer").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


window.addEventListener("scroll", function() {
  const thirdNav = document.getElementById("hub-gateway-app-unauth");
  
  if (window.scrollY > 150) {
    thirdNav.style.position = "fixed";
    thirdNav.style.top = "auto";
    thirdNav.style.bottom = "0";
  } else {
    thirdNav.style.position = "fixed";
    thirdNav.style.top = "120px";
    thirdNav.style.bottom = "auto";
  }
});


function openPopup() {
      document.getElementById('popup').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }

