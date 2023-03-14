
var images = document.querySelectorAll('.imagencomando');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    var container = document.createElement('div');
    container.classList.add('image-popup-container');
  
  
    var img = document.createElement('img');
    img.src = this.src;
    container.appendChild(img);
    container.scrollTop = 0;

    var closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML = '&times;';
    container.appendChild(closeBtn);
    var fileName = img.src.split('/').pop().split('.')[0];
    var imgIndex = Number(fileName.split('_')[1])
    if(imgIndex!==1){
      var leftNavBtn = document.createElement('button');
      leftNavBtn.classList.add('lt-btn');
      leftNavBtn.innerHTML = '&lt;'; 
      container.appendChild(leftNavBtn);  
    }
    if(imgIndex!==10){
      var rightNavBtn = document.createElement('button');
      rightNavBtn.classList.add('gt-btn');
      rightNavBtn.innerHTML = '&gt;';
      container.appendChild(rightNavBtn);
    }
    document.body.appendChild(container);

    container.style.display = 'block';
    document.body.style.overflow = 'hidden';

    leftNavBtn.addEventListener('click', function() {
      var indexImgPrev = Number(imgIndex)-1
      var imgRutaImgPrev = "Imagenes de comandos git y github/comando_"+indexImgPrev+".png"
      //console.log(imgRutaImgPrev)
      document.querySelector("body > div > img").src=imgRutaImgPrev
      if (indexImgPrev == 1){
        document.querySelector("body > div > button.lt-btn").remove();
      }
      imgIndex = indexImgPrev
    });
    rightNavBtn.addEventListener('click', function() {
      console.log(imgIndex)
      var indexImgNext = Number(imgIndex)+1
      var imgRutaImgNext = "Imagenes de comandos git y github/comando_"+indexImgNext+".png"
      //console.log(imgRutaImgPrev)
      document.querySelector("body > div > img").src=imgRutaImgNext
      if (indexImgNext == 10){
        document.querySelector("body > div > button.lt-btn").remove();
      }
      imgIndex = indexImgNext
    });

    closeBtn.addEventListener('click', function() {
        document.body.removeChild(container);
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          document.body.removeChild(container);
          container.style.overflow = 'auto';
        }    
    });

    /*nextBtn.addEventListener('click', function() {
        var nextImg = container.nextSibling;
        if (nextImg && nextImg.classList.contains('imagencomando')) {
            img.src = nextImg.src;
            container.scrollTop = 0;
            if (nextImg === images[images.length - 1]) {
                nextBtn.style.display = 'none';
            }
            prevBtn.style.display = 'block';
        }
    });

    prevBtn.addEventListener('click', function() {
        var prevImg = container.previousSibling;
        if (prevImg && prevImg.classList.contains('imagencomando')) {
            img.src = prevImg.src;
            container.scrollTop = 0;
            if (prevImg === images[0]) {
                prevBtn.style.display = 'none';
            }
            nextBtn.style.display = 'block';
        }
    });*/

    img.addEventListener('click', function() {
        img.classList.toggle('zoomed');
    });
      
  });
}