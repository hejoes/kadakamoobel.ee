// **********************************
// DISPLAY CURRENT PAGE, Make it yellow color

// const current = 0;
// console.log(document.links[0].href);
// console.log(document.URL);

// for (var i = 0; i < document.links.length; i += 1) {
//   if (document.links[i].href === document.URL) {
//     current = i;
//   }
// }
// document.links[current].className = "current-page";

// ***************************
// IMPLEMENT SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
