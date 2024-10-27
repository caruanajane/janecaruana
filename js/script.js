$(document).ready(function () {

    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li a"); // Select all menu links
    
    // Toggle menu on hamburger click
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navList.classList.toggle("active");
    });
    
    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
    

    var typed = new Typed(".single-text", {
        strings: ["Jane Caruana"], // Single text
        typeSpeed: 100,
        loop: false,
        showCursor: false
      });
      

    $('.works-holder').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus:true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
       
      });


});
