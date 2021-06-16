const $slider = document.getElementById('slider');
const Images = (params) => {
  const source = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
  return `
        <div class="slider__item">
            <img
              class="slider__img"
              src="${source}"
              alt="${params.name}"
            />
            <div class="slider__icons">
              <div class="slider__icon-container">
                <span class="slider__icon--first"></span>
              </div>
              <div class="slider__icon-container">
                <span class="slider__icon--second"></span>
              </div>
              <div class="slider__icon-container">
                <span class="slider__icon--last"></span>
              </div>
            </div>
            <div class="slider__text">
              <p class="slider__p">${params.name}</p>
              <p class="slider__title">Título GIFO</p>
            </div>
          </div>
        `;
};
let i = 0;
setImage();
function prev() {
  if (i > 0) {
    deleteImages();
    i--;
    setImage();
  }
}

function next() {
  deleteImages();
  i++;
  setImage();
}
function setImage() {
  for (let j = 0; j < 3; j++) {
    $slider.insertAdjacentHTML('beforeend', Images({ id: i + j, name: 'Sara' }));
  }
}
function deleteImages() {
  for (let j = 0; j < 3; j++) {
    $slider.innerHTML -= Images({ id: i + 2, name: 'Sara' });
  }
}

$slider.querySelectorAll('img').forEach((img) => {
  img.addEventListener('click', function (event) {
    console.log(event.target.src);
    console.log(event.target.alt);
    modal.style.display = 'block';
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
  });
});
let modal = document.getElementById('ModalSlider');
let modalImg = document.getElementById('imgModal');
let captionText = document.getElementById('caption');

let span = document.getElementsByClassName('close')[0];
span.onclick = function () {
  modal.style.display = 'none';
};
