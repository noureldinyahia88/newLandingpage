const sliderItems = document.querySelectorAll('.slider-item');
const sliderBullets = document.querySelectorAll('.slider-bullet');
let currentIndex = 0;

function showSlide(index) {
  sliderItems[currentIndex].classList.remove('active');
  sliderBullets[currentIndex].classList.remove('active');
  currentIndex = index;
  sliderItems[currentIndex].classList.add('active');
  sliderBullets[currentIndex].classList.add('active');
}

function showNextSlide() {
  const nextIndex = (currentIndex + 1) % sliderItems.length;
  showSlide(nextIndex);
}

sliderBullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    showSlide(index);
  });
});

setInterval(showNextSlide, 5000);

const close_btn = document.querySelector('.close-button') 

function toggleNav() {
  const navbarList = document.querySelector(".navbar-list");
  navbarList.classList.toggle("show-nav");
  close_btn.classList.add('show')
}
function closemenu(){
  close_btn.classList.remove('show')
}



// for form on wide screen
const test = document.querySelector(".test");
test.classList.add('shown');



// for form on small screen
var formContainer = document.querySelector('.form-container-tablet');
window.addEventListener('load', function() {
  if (window.innerWidth <= 999 && window.innerWidth >= 651) {
    var distanceFromTop = formContainer.getBoundingClientRect().top;
    if (distanceFromTop <= window.innerHeight - formContainer.offsetHeight) {
      formContainer.style.bottom = 'initial';
      formContainer.style.top = window.innerHeight - formContainer.offsetHeight + 'px';
    } else {
      formContainer.style.top = 'initial';
      formContainer.style.bottom = '-110px';
    }
    formContainer.style.display = 'block';
  }
});



// scroll down button
const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", function(e) {
  e.preventDefault()
  // window.scrollBy(0, 100);
  // formContainer.style.bottom = 0;
  // scrollButton.classList.add("hideButton");
});


// const date = document.getElementById('date')

// date.ejDatePicker(){
//       height: '500px', // sets height as 50 pixel
//         width: '30px'
// }