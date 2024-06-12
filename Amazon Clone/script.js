// banner slider
const previous = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const banners = document.querySelector('.banners');
let currentIndex = 0;

const shownext = () => {
    currentIndex++;
    if (currentIndex >= banners.children.length) {
        currentIndex = 0;
    }
    banners.style.transform = `translateY(-${currentIndex * 100}%)`;
};

const showprevious = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = banners.children.length - 1;
    }
    banners.style.transform = `translateY(-${currentIndex * 100}%)`;
};

previous.addEventListener('click', showprevious);
next.addEventListener('click', shownext);
setInterval(shownext, 3500); 

// furniture image slider
const slidePreviousBtn = document.querySelector('.slide-previous-btn');
const slideNextBtn = document.querySelector('.slide-next-btn');
const furnitureImages = document.querySelectorAll('.furniture-images img');
let index = 0;

const nextImage = () => {
    index++;
    if (index >= furnitureImages.length) {
        index = 0;
    }
    updateImagePosition();
}

const previousImage = () => {
    index--;
    if (index < 0) {
        index = furnitureImages.length - 1;
    }
    updateImagePosition();
}

slidePreviousBtn.addEventListener('click', previousImage);
slideNextBtn.addEventListener('click', nextImage);

function updateImagePosition() {
    const newPosition = -index * furnitureImages[0].offsetWidth;
    document.querySelector('.furniture-images').style.transform = `translateX(${newPosition}px)`;
}


// electronics image slider
const electronicNextBtn = document.querySelector('.electronics-next-btn');
const electronicsPreviousBtn = document.querySelector('.electronics-previous-btn');
const electronicImage = document.querySelectorAll('.eletronics-images img');
let imageIndex = 0;

const slideNext = () => {
    imageIndex++;
    if (imageIndex >= electronicImage.length) {
        imageIndex = 0;
    }
    updatePosition();
}
const slidePrevious = () => {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = electronicImage.length - 1;
    }
    updatePosition();
}
electronicsPreviousBtn.addEventListener('click', slidePrevious);
electronicNextBtn.addEventListener('click', slideNext);

function updatePosition() {
    const newImagePosition = -imageIndex * electronicImage[0].offsetWidth;
    document.querySelector('.eletronics-images').style.transform = `translateX(${newImagePosition}px)`;
}


// menubar 
const menuBar = document.querySelector('.menubar');
const closeMenuBarBtn = document.querySelector('.close');
const showMenuBarBtn = document.querySelector('.menu-all');
const mobileShowMenu = document.querySelector('.menu-icon');

function closeMenuBar() {
    menuBar.style.display = 'none';
    document.body.classList.remove('hide-scrollbar');
}

function showMenuBar() {
    menuBar.style.display = 'flex';
    mobileShowMenu.style.display = 'flex';
    document.body.classList.add('hide-scrollbar');

}

closeMenuBarBtn.addEventListener('click', closeMenuBar);
showMenuBarBtn.addEventListener('click', showMenuBar);
mobileShowMenu.addEventListener('click', showMenuBar);
