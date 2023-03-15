
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

    var leftNavBtn = document.createElement('button');
    leftNavBtn.classList.add('lt-btn');
    leftNavBtn.innerHTML = '&lt;'; 
    container.appendChild(leftNavBtn);  
  
    var rightNavBtn = document.createElement('button');
    rightNavBtn.classList.add('gt-btn');
    rightNavBtn.innerHTML = '&gt;';
    container.appendChild(rightNavBtn);
    
    document.body.appendChild(container);
    container.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    if (imgIndex === 1){
      document.querySelector("body > div > button.lt-btn").hidden =true
    }
    if (imgIndex === 10){
      document.querySelector("body > div > button.gt-btn").hidden =true
    }
    leftNavBtn.addEventListener('click', function() {
      if(imgIndex != 1){
        var indexImgPrev = Number(imgIndex)-1
        var imgRutaImgPrev = "Imagenes de comandos git y github/comando_"+indexImgPrev+".png"
        document.querySelector("body > div > img").src=imgRutaImgPrev
        imgIndex = indexImgPrev
    // Ocultar el botón de navegación izquierdo cuando se muestre la primera imagen
        if (imgIndex === 1) {
          document.querySelector("body > div > button.lt-btn").hidden = true;
        }
        // Asegurarse de que el botón de navegación derecho esté visible
        rightNavBtn.hidden = false;
          }
    });

    rightNavBtn.addEventListener('click', function() {
      if(imgIndex != 10){
      var indexImgNext = Number(imgIndex)+1
      var imgRutaImgNext = "Imagenes de comandos git y github/comando_"+indexImgNext+".png"
      document.querySelector("body > div > img").src=imgRutaImgNext
      imgIndex = indexImgNext
      if (imgIndex === 10) {
        document.querySelector("body > div > button.gt-btn").hidden = true;
      }
      // Asegurarse de que el botón de navegación izquierdo esté visible
      leftNavBtn.hidden = false;
      }
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

    img.addEventListener('click', function() {
        img.classList.toggle('zoomed');
    });
      
  });
}