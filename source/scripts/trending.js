// CAROUSEL

const $sliderContainer = document.querySelector(".slider__container");

const APIKEY = 'RWVkZREvkw7s2w320Kzqyh56QFR9SVr4';
let url_trending = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`;
console.log(url_trending);

const favoritesArray = [];

const addToTheFavoritesSection = () => {
  if (localStorage.getItem("someFavorites")) {
    const alreadySavedItems = JSON.parse(localStorage.getItem("someFavorites"));
    favoritesArray.push(...alreadySavedItems);
  }
  const itemsMap2 = favoritesArray.map((item) => [item.id, item]);
  const itemsMapArr2 = new Map(itemsMap2);

  const uniques = [...itemsMapArr2.values()];
  localStorage.setItem("someFavorites", JSON.stringify(uniques));
};

async function getTrendings(url) {
  const resp = await fetch(url);
  const json = await resp.json();

  json.data.forEach((element) => {
    const $sliderItem = document.createElement("div");
    $sliderItem.className = "slider__item";
    $sliderContainer.appendChild($sliderItem);

    const $gif = document.createElement("img");
    $gif.className = "slider__img";
    $gif.src = element.images.original.url;
    $gif.alt = element.title;
    $sliderItem.appendChild($gif);

    const $sliderHover = document.createElement("div");
    $sliderHover.className = "slider__hover";
    $sliderItem.appendChild($sliderHover);

    const $sliderIcons = document.createElement("div");
    $sliderIcons.className = "slider__icons";
    $sliderItem.appendChild($sliderIcons);

    const $heartIconContainer = document.createElement("div");
    $heartIconContainer.className = "slider__icon-container";
    $sliderIcons.appendChild($heartIconContainer);
    const $heartIcon = document.createElement("span");
    $heartIcon.className = "slider__icon--heart";
    $heartIconContainer.appendChild($heartIcon);

    const $downloadIconContainer = document.createElement("div");
    $downloadIconContainer.className = "slider__icon-container";
    $sliderIcons.appendChild($downloadIconContainer);
    const $downloadIcon = document.createElement("span");
    $downloadIcon.className = "slider__icon--download";
    $downloadIconContainer.appendChild($downloadIcon);

    const downloadGif = async () => {
      const myGif = await fetch(`https://media.giphy.com/media/${element.id}/giphy.gif`);
      const file = await myGif.blob();
      const urlBlob = URL.createObjectURL(file);
      const $aTag = document.createElement("a");
      $aTag.download = `${element.title}.gif`;
      $aTag.href = urlBlob;
      $aTag.click();
    };

    $downloadIconContainer.addEventListener("click", () => {
      downloadGif();
    });

    const $maxIconContainer = document.createElement("div");
    $maxIconContainer.className = "slider__icon-container";
    $sliderIcons.appendChild($maxIconContainer);
    const $maxIcon = document.createElement("span");
    $maxIcon.className = "slider__icon--last";
    $maxIconContainer.appendChild($maxIcon);

    const $sliderText = document.createElement("div");
    $sliderText.className = "slider__text";
    $sliderItem.appendChild($sliderText);

    const $sliderParagraph = document.createElement("p");
    $sliderParagraph.className = "slider__p";
    if (element.username === "") {
      $sliderParagraph.textContent = "Desconocido";
    } else {
      $sliderParagraph.textContent = element.username;
    }
    $sliderText.appendChild($sliderParagraph);

    const $sliderTitle = document.createElement("p");
    $sliderTitle.className = "slider__title";
    $sliderTitle.textContent = element.title;
    $sliderText.appendChild($sliderTitle);

    function openFullscreen() {
      if ($sliderItem.requestFullscreen) {
        $sliderItem.requestFullscreen();
      } else if ($sliderItem.webkitRequestFullscreen) {
        $sliderItem.webkitRequestFullscreen();
      } else if ($sliderItem.msRequestFullscreen) {
        $sliderItem.msRequestFullscreen();
      }
    }

    function closeFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    const makeAGifFullScreen = () => {
      $sliderItem.id = "mainDiv";
      $gif.id = "theGif--";
      $sliderHover.id = "theHoverDiv--";
      $sliderIcons.id = "sliderICons--";
      $heartIconContainer.id = "iconsContainers1--";
      $downloadIconContainer.id = "iconsContainers2--";
      $maxIconContainer.id = "iconsContainers3--";
      $heartIcon.id = "heartIcon--";
      $downloadIcon.id = "downloadIcon--";
      $maxIcon.id = "maxIcon--";
      $sliderText.id = "textContainer--";
      $sliderParagraph.id = "textUser--";
      $sliderTitle.id = "textTitle--";

      openFullscreen();

      $maxIconContainer.removeEventListener("click", makeAGifFullScreen);

      $maxIconContainer.addEventListener("click", whenCloseFullScreen);
    };

    const whenCloseFullScreen = () => {
      $sliderItem.removeAttribute("id");
      $gif.removeAttribute("id");
      $sliderHover.removeAttribute("id");
      $sliderIcons.removeAttribute("id");
      $heartIconContainer.removeAttribute("id");
      $downloadIconContainer.removeAttribute("id");
      $maxIconContainer.removeAttribute("id");
      $heartIcon.removeAttribute("id");
      $downloadIcon.removeAttribute("id");
      $maxIcon.removeAttribute("id");
      $sliderText.removeAttribute("id");
      $sliderParagraph.removeAttribute("id");
      $sliderTitle.removeAttribute("id");

      closeFullscreen();

      $maxIconContainer.removeEventListener("click", whenCloseFullScreen);

      $maxIconContainer.addEventListener("click", makeAGifFullScreen);
    };

    $maxIconContainer.addEventListener("click", makeAGifFullScreen);

    const addToFavorites = () => {
      $heartIcon.style = `background-image: url("../../assets/icon-heart-full.svg");`;

      favoritesArray.push(element);

      $heartIconContainer.removeEventListener("click", addToFavorites);
      $heartIconContainer.addEventListener("click", removeFromFavorites);
    };

    const removeFromFavorites = () => {
      $heartIcon.style = `background-image: url("../../assets/icon-heart.svg");`;

      if (favoritesArray.includes(element)) {
        favoritesArray.pop(element);
      }

      $heartIconContainer.removeEventListener("click", removeFromFavorites);
      $heartIconContainer.addEventListener("click", addToFavorites);
    };

    $heartIconContainer.addEventListener("click", addToFavorites);
  });
}

getTrendings(url_trending);

// Slider

const $leftArrow = document.querySelector(".slider__arrow");
const $rightArrow = document.querySelectorAll(".slider__arrow")[1];

$leftArrow.addEventListener("click", () => {
  $sliderContainer.scrollLeft -= 400;
});

$rightArrow.addEventListener("click", () => {
  $sliderContainer.scrollLeft += 400;
});
