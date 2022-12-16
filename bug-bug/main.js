
var sildeIndex=0;
function slideShowText(){
    var texts=document.querySelectorAll('.text-content');
    var container=document.querySelector('.text-container')
    for(var i=0;i<texts.length;i++){
        texts[i].classList.remove('text-active')
    }
    texts[0].classList.add('text-active')
    container.appendChild(texts[0])
}
function slideShowImg(){
    items=document.querySelector('.slide-show');
    imgs=document.querySelectorAll('.img');
    if(sildeIndex >= imgs.length){
        sildeIndex=0;
    }
    else if(sildeIndex <0){
        sildeIndex=imgs.length;
    }
    for(var i=0;i<imgs.length;i++){
        imgs[i].classList.remove('active')
    }
   
    imgs[sildeIndex].classList.add('active')
    sildeIndex++;
    slideShowText()
}
setInterval(slideShowImg,3000)

 