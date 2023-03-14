
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

    /*var nextBtn = document.createElement('button');
    nextBtn.classList.add('nav-btn');
    nextBtn.innerHTML = '>';
    container.appendChild(nextBtn);

    var prevBtn = document.createElement('button');
    prevBtn.classList.add('nav-btn');
    prevBtn.innerHTML = '<';
    container.appendChild(prevBtn);

    if (this === images[0]) {
        prevBtn.style.display = 'none';
    }
    if (this === images[images.length - 1]) {
        nextBtn.style.display = 'none';
    }*/

    document.body.appendChild(container);

    container.style.display = 'block';
    document.body.style.overflow = 'hidden';

    closeBtn.addEventListener('click', function() {
        document.body.removeChild(container);
        document.body.style.overflow = 'auto';
    });

    /*container.addEventListener('click', function() {
        document.body.removeChild(container);
    });*/
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