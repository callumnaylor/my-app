const sectionOne = document.querySelector("main-content");

const options = {
  root: null
};

const observer = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
  console.log(entry);
})
}
, options);


observer.observe(sectionOne);