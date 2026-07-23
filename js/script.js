/* ==========================================
   BEFORE / AFTER SLIDER
========================================== */
const sliders = document.querySelectorAll(".before-after");

sliders.forEach(slider => {

    const after = slider.querySelector(".after-image");
    const line = slider.querySelector(".slider-line");
    const handle = slider.querySelector(".slider-handle");

    let dragging = false;

    function updateSlider(x) {

        const rect = slider.getBoundingClientRect();

        let position = x - rect.left;

        if (position < 0) position = 0;
        if (position > rect.width) position = rect.width;

        const percent = (position / rect.width) * 100;

        after.style.width = percent + "%";
        line.style.left = percent + "%";
        handle.style.left = percent + "%";
    }

    handle.addEventListener("mousedown", () => dragging = true);

    window.addEventListener("mouseup", () => dragging = false);

    window.addEventListener("mousemove", (e) => {

        if (!dragging) return;

        updateSlider(e.clientX);

    });
});
console.log("Script is running!");
/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("active");

    }

});
},

{
    threshold:.15
}

);

revealElements.forEach(element=>{

    revealObserver.observe(element);

});/* ==========================================
   Testimonials Slider
========================================== */

const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const testimonialTabs = document.querySelectorAll(".testimonial-tabs .tab");

const prevBtn = document.querySelector(".testimonial-arrow.prev");
const nextBtn = document.querySelector(".testimonial-arrow.next");

let currentTestimonial = 0;

function showTestimonial(index) {

    testimonialSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    testimonialTabs.forEach(tab => {
        tab.classList.remove("active");
    });

    testimonialSlides[index].classList.add("active");
    testimonialTabs[index].classList.add("active");

    currentTestimonial = index;
}

testimonialTabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {
        showTestimonial(index);
    });

});

nextBtn.addEventListener("click", () => {

    currentTestimonial++;

    if (currentTestimonial >= testimonialSlides.length) {
        currentTestimonial = 0;
    }

    showTestimonial(currentTestimonial);

});

prevBtn.addEventListener("click", () => {

    currentTestimonial--;

    if (currentTestimonial < 0) {
        currentTestimonial = testimonialSlides.length - 1;
    }

    showTestimonial(currentTestimonial);

});

/* Initialize */

showTestimonial(0);