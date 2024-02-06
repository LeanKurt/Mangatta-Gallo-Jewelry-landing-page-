const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');

    } else {
      entry.target.classList.remove('show');
    }
  })
})

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('showcards');

    } else {
      entry.target.classList.remove('showcards');
    }
  })
})


const hiddenElements = document.querySelectorAll('.hidden');
const allCards = document.querySelectorAll('.hiddenCards');
hiddenElements.forEach((el) => observer.observe(el));
allCards.forEach((el) => observer2.observe(el));