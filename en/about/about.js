//Global variables
var element;


//Global variables
var slidestoshow, arrowmark;
if (window.matchMedia("(max-width: 920px)").matches === false) {
    slidestoshow = 4;
    arrowmark = true;
} else {
    slidestoshow = 1;
    arrowmark = false;
}

$('.blog-slider').slick({
    slidesToShow: slidestoshow,
    slidesToScroll: 1,
    dots: false,
    arrows: arrowmark,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});


$('.event-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000, // ← change to 500ms
    speed: 1000, // ← animation transition speed in ms
    infinite: true
});



// Tab switching logic
document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
  
      button.classList.add("active");
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
  