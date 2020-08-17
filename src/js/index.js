document.addEventListener('DOMContentLoaded', function () {
    class Counter {
        constructor() {
            this.count = 0;
        }

        decrement() {
            if (this.count === 0) {
                this.count = 3;
            }
            this.count--;
            console.log(this.count)
        }

        increment() {
            if (this.count === 2) {
                this.count = -1;
            }
            ++this.count;
            console.log(this.count)
        }
    }

    if ($('.carousel').length) {

        const buttonNext = document.querySelector('.carousel-next'),
         buttonPrev = document.querySelector('.carousel-prev'),
            tabs = document.querySelectorAll('.carousel_item'),
            iterators=document.querySelectorAll('.circle');

        tabs.forEach(item => {
            item.style.display = 'none';
        });
        tabs[0].style.display = 'flex';
        const counter = new Counter();
        buttonNext.addEventListener('click', ()=>{
            tabs[counter.count].style.display = 'none';
            iterators[counter.count].classList.remove('active');
            counter.increment();
            tabs[counter.count].style.display = 'flex';
            iterators[counter.count].classList.add('active');
        });
        buttonPrev.addEventListener('click', ()=>{
            tabs[counter.count].style.display = 'none';
            iterators[counter.count].classList.remove('active');
            counter.decrement();
            tabs[counter.count].style.display = 'flex';
            iterators[counter.count].classList.add('active');
        });

    }


    const regionButton = document.querySelector('.region'),
        trueButton = document.querySelector('.answer-true'),
        falseButton = document.querySelector('.answer-false'),
        locationChose = document.querySelector('.location-chose'),
        cityBlock = document.querySelector('.city');
    locationChose.style.display = 'none';
    regionButton.addEventListener('click', () => {
        locationChose.style.display = 'block'
        window.onscroll = function () {
            window.scrollTo(0, 0);
        };

    });
    trueButton.addEventListener('click', () => {
        locationChose.style.display = 'none';
        window.onscroll = function () {
            window.onscroll = null;
        };

    });
    falseButton.addEventListener('click', () => {

    })

});