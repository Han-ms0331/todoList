const body = document.querySelector("body");

const IMG_NUMBER = 6;





function paintImage(imageNumber){
    const image = new Image();
    image.src = `image/${imageNumber+1}.jpg`;
    image.onload = function(){
        image.classList.add("bgImage");
    }
    

    body.prepend(image);
}


function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init() {
    const randomNumber = getRandom();
    
    paintImage(randomNumber);
}

init();