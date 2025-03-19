
let btns = document.getElementsByClassName('button-thirteen');
let boxes = document.getElementsByClassName('box-thirteen-one');
let texts = document.getElementsByClassName('heading-thirteen');
let a   = document.getElementsByClassName('none-box-thirteen');

for (let i = 0; i < btns.length; i++) {

  let btn = btns[i];
  let box = boxes[i];
  let text = texts[i];
   let aa = a[i];
  
  btn.addEventListener("click", () => {
    
    box.classList.toggle("active-box");

    
    aa.classList.toggle("active-box-thirteen");
    
    btn.classList.toggle("active-btn");

    text.classList.toggle("color-text");
  });
}



// SECTION SEVEN TABS JS 


function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("defaultOpen").click();







  const box = document.getElementsByClassName('box');
               
        // Create IntersectionObserver
        const boxObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                      
                    observer.unobserve(entry.target);  
                }
               
               
            });
        }, {
            threshold: 0.2  // At least 20% of the element must be visible
        });

        // Observe each box
       Array.from(box).forEach(box => {
            boxObserver.observe(box);

        });


        const swiperEl = document.querySelector('swiper-container')
        Object.assign(swiperEl, {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            clickable: true,
          },
          breakpoints: {

            320: {
              slidesPerView: 1,
              spaceBetween: 80,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 80,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 70,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },

            1425: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
        });
        swiperEl.initialize();