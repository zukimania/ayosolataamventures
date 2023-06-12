// const the_animation = document.querySelectorAll('.services-img')

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('scroll-animation')
//         }
//             else {
//                 entry.target.classList.remove('scroll-animation')
//             }
        
//     })
// },
//    { threshold: 0.5
//    });
// //
//   for (let i = 0; i < the_animation.length; i++) {
//    const elements = the_animation[i];

//     observer.observe(elements);
//   }

const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
          const boxTop = box.getBoundingClientRect().top; if (boxTop < triggerBottom) box.classList.add("show"); else box.classList.remove("stay");
}
    )
};

window.addEventListener("scroll", checkBoxes);
checkBoxes()



      window.addEventListener('scroll', animateOnScroll);
function animateOnScroll() {
        const elements = document.querySelectorAll('.services-img');

        elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementPosition - windowHeight <= 0) {
            element.classList.add('animate');
          } else {
            element.classList.remove('animate');
          }
        });
      }

      window.addEventListener('scroll', animateOnScroll);
