
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
    if(imgIndex!==1){
    leftNavBtn.addEventListener('click', function() {
      var indexImgPrev = Number(imgIndex)-1
      var imgRutaImgPrev = "Imagenes de comandos git y github/comando_"+indexImgPrev+".png"
      document.querySelector("body > div > img").src=imgRutaImgPrev
      if (indexImgPrev == 1){
        document.querySelector("body > div > button.lt-btn").remove();
      }
      imgIndex = indexImgPrev
    });
    }
    if(imgIndex!==10){
    rightNavBtn.addEventListener('click', function() {
      var indexImgNext = Number(imgIndex)+1
      var imgRutaImgNext = "Imagenes de comandos git y github/comando_"+indexImgNext+".png"
      document.querySelector("body > div > img").src=imgRutaImgNext
      if (indexImgNext == 10){
        document.querySelector("body > div > button.lt-btn").remove();
      }
      imgIndex = indexImgNext
    });
    }
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
    img.addEventListener('click', function() {
        img.classList.toggle('zoomed');
    });
      
  });
}