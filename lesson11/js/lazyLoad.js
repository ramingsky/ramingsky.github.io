//get all images with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

//parameters for Intersectional Observer
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

//set grounds for Intersection Observer
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
}

//first check to see if Intersection Observer is supported and display when in window
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {

            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    })
};