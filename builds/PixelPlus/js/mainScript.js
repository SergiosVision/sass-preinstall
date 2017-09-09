var carousel = document.getElementsByClassName('slider');

[].forEach.call(carousel, function(c){
    let next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'),
        currentImgIndex = 0,
        width = 1248,
        interval;
    
    
    function switchImg(){
        inner.style.left = -width * currentImgIndex + 'px';
    };
    
    function showNext(){
        currentImgIndex++;
        
        if(currentImgIndex >= imgs.length){
          currentImgIndex = 0;     
        };
        
        switchImg();
    };
    
    function showPrev(){
        currentImgIndex--;
        
        if(currentImgIndex < 0){
            currentImgIndex = imgs.length - 1;  
        };
        
        switchImg();
    };
    
    function start(){
        interval = setInterval(showNext, 4000);  
    };
    
    function stop(){
        clearInterval(interval);
    }
    
    next.addEventListener('click', showNext);
    prev.addEventListener('click', showPrev);
    inner.addEventListener('mouseover', stop);
    inner.addEventListener('mouseout', start);
    next.addEventListener('mouseover', stop);
    prev.addEventListener('mouseover', stop);
    next.addEventListener('mouseout', start);
    prev.addEventListener('mouseout', start);
    
    switchImg();
    start();
    
});


// Slider End
    
// Modal open

var feedbackBtn = document.querySelector('.feedback'),
    getOverlay = document.querySelector('.overlay'),
    getmodal = document.querySelector('.feedback-modal'),
    close = document.querySelector('.close'),
    getBody = document.body;


feedbackBtn.addEventListener('click', function() {
     getmodal.classList.add('show-modal');
     getOverlay.classList.add('show-overlay');
     getBody.classList.add('fixed');
});

close.addEventListener('click', function() {
     getmodal.classList.remove('show-modal');
     getOverlay.classList.remove('show-overlay');
     getBody.classList.remove('fixed');
});

getOverlay.addEventListener('click', function() {
     getmodal.classList.remove('show-modal');
     getOverlay.classList.remove('show-overlay');
     getBody.classList.remove('fixed');
});
      