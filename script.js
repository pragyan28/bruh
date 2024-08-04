let are_AAs_being_shown_currently = false;

document.getElementById("show_AAs_button").addEventListener("click", () => {
  if (are_AAs_being_shown_currently == false) {
    document.getElementsByClassName("AAs")[0].style.display = "block";
    document.getElementById("show_AAs_button").textContent = "Less";
    document.getElementsByClassName("_AA_")[0].style.display = "block";
    are_AAs_being_shown_currently = true;
  } else {
    document.getElementsByClassName("AAs")[0].style.display = "none";
    document.getElementById("show_AAs_button").textContent = "More";
    document.getElementsByClassName("_AA_")[0].style.display = "none";
    are_AAs_being_shown_currently = false;
  }
});

/* Mobile Navbar Script */

document.getElementById("menu-icon").addEventListener("click", function () {
  const navbarLinks = document.getElementById("navbar_for_mobiles-links");
  if (navbarLinks.style.display === "flex") {
    navbarLinks.style.display = "none";
  } else {
    navbarLinks.style.display = "flex";
  }
});

/* Mobile menu Accordian */

let department_list_currently_shown = false;
let blogs_list_currently_shown = false;
let about_us_list_currently_shown = false;
let more_list_currently_shown = false;

document
  .getElementById("department_list_show_button")
  .addEventListener("click", () => {
    if (department_list_currently_shown == false) {
      document.getElementsByClassName("department_list")[0].style.display =
        "block";
      department_list_currently_shown = true;
    } else {
      document.getElementsByClassName("department_list")[0].style.display =
        "none";
      department_list_currently_shown = false;
    }
  });

document
  .getElementById("blog_list_show_button")
  .addEventListener("click", () => {
    if (blogs_list_currently_shown == false) {
      document.getElementsByClassName("blog_list")[0].style.display = "block";
      blogs_list_currently_shown = true;
    } else {
      document.getElementsByClassName("blog_list")[0].style.display = "none";
      blogs_list_currently_shown = false;
    }
  });

document
  .getElementById("about_us_list_show_button")
  .addEventListener("click", () => {
    if (about_us_list_currently_shown == false) {
      document.getElementsByClassName("about_us_list")[0].style.display =
        "block";
      about_us_list_currently_shown = true;
    } else {
      document.getElementsByClassName("about_us_list")[0].style.display =
        "none";
      about_us_list_currently_shown = false;
    }
  });

document
  .getElementById("more_list_show_button")
  .addEventListener("click", () => {
    if (more_list_currently_shown == false) {
      document.getElementsByClassName("more_list")[0].style.display = "block";
      more_list_currently_shown = true;
    } else {
      document.getElementsByClassName("more_list")[0].style.display = "none";
      more_list_currently_shown = false;
    }
  });

const swiper2 = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  responsiveClass: true,
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});


let swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
fetch("Initiatives.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((element, index) => {
      let swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
      swiperSlide.classList.add("card-item");

      let swiperSlideContainer = document.createElement("div");
      swiperSlideContainer.classList.add("swipe-slide-container");

      let image = document.createElement("img");
      image.src = element.path;
      image.alt = "Initiative Image Here";

      let heading = document.createElement("h2");
      heading.innerText = element.heading;

      let description = document.createElement("p");
      description.textContent = element.description;

      swiperSlideContainer.appendChild(image);
      swiperSlideContainer.appendChild(heading);
      swiperSlideContainer.appendChild(description);
      swiperSlide.appendChild(swiperSlideContainer);
      swiperWrapper.appendChild(swiperSlide);

      let newIndicator = document.createElement("li");
      newIndicator["data-target"] = "#myCarousel";
      newIndicator["data-slide-to"] = String(index);
    });
  });

// Following is the code from CHATGPT

document
  .getElementById("to_initiatives")
  .addEventListener("click", function () {
    smoothScroll(document.getElementById("page2"), 1000);
  });

document.getElementById("to_team").addEventListener("click", function () {
  smoothScroll(document.getElementById("page4"), 1000);
});

function smoothScroll(target, duration) {
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
