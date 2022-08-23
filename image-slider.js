let galleryImages = document.querySelectorAll(".gallery-img");

let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function (pilt, index) {
    // Go over each of the gallery image, get its source, and split it so that junk gets splitted and actual image source also gets splitted, so in the end we have array with 2 items: junk and image source
    pilt.onclick = function () {
      let getFullImgSource = this.src;
      let getImgSource = getFullImgSource.split("/img");
      console.log(getImgSource);

      // Create new window container when you click on the gallery image
      getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "img/" + getImgSource[1]);
      newImg.setAttribute("id", "current-img");

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 20;
        let nextBtn = document.createElement("a");
        let nextBtnText = document.createTextNode("Edasi>");
        nextBtn.appendChild(nextBtnText);
        container.appendChild(nextBtn);
        nextBtn.setAttribute("class", "img-btn-next");
        nextBtn.setAttribute("onclick", "changeImg(1)");
        nextBtn.style.cssText = "right: " + calcImgToEdge + "px";

        let prevBtn = document.createElement("a");
        let prevBtnText = document.createTextNode("<Tagasi");
        prevBtn.appendChild(prevBtnText);
        container.appendChild(prevBtn);
        prevBtn.setAttribute("class", "img-btn-prev");
        prevBtn.setAttribute("onclick", "changeImg(0)");
        prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
      };
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

function changeImg(direction) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if (direction === 1) {
    calcNewImg = getLatestOpenedImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (direction === 0) {
    calcNewImg = getLatestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  newImg.setAttribute(
    "src",
    "img/products/toolid/galerii" + calcNewImg + ".jpg"
  );
  newImg.setAttribute("id", "current-img");

  getLatestOpenedImg = calcNewImg;
}
