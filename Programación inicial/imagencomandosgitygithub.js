
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
    img.addEventListener('click', function() {
        img.classList.toggle('zoomed');
    });
      
  });
}