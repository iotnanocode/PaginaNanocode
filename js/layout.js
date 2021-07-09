window.onload = function() {

    if(screen.width > 800){
        AOS.init();
    }

    var el = document.getElementById("linkProject");
    el.addEventListener("click", function(){
        var element = document.getElementById("collapseCyber");
        element.classList.remove("show");
    }, false);

    var el = document.getElementById("closeCyber");
    el.addEventListener("click", function(){
        var element = document.getElementById("collapseCyber");
        element.classList.remove("show");
    }, false);

    var el = document.getElementById("closeProject");
    el.addEventListener("click", function(){
        var element = document.getElementById("collapseProject");
        element.classList.remove("show");
    }, false);
};

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        autoplay: false,
        interval: 8000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        padding: '10%',
        throttle: 300,
        breakpoints: {
        1440: {
            perPage: 1,
            padding: '30%'
        }}
    }).mount();

    new Splide('#splideIot', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        autoplay: false,
        interval: 8000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        padding: '10%',
        throttle: 300,
        breakpoints: {
        1440: {
            perPage: 1,
            padding: '30%'
        }}
    }).mount();

    new Splide('#splideRobot', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        autoplay: false,
        interval: 8000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        padding: '10%',
        throttle: 300,
        breakpoints: {
        1440: {
            perPage: 1,
            padding: '30%'
        }}
    }).mount();
});

window.addEventListener('scroll', function(e) {
    
    let position = this.scrollY;
    // console.log(position)

    if(position > 125){
        document.getElementById("nav").classList.add("nav-fixed");
        document.getElementById("logo-item").classList.remove("d-none");
    } else{
        document.getElementById("nav").classList.remove("nav-fixed");
        document.getElementById("logo-item").classList.add("d-none");
    }
})

window.addEventListener('click', function(e) {
    
    var element = document.getElementById("collapseCyber");
    element.classList.remove("show");
    
    var element = document.getElementById("collapseProject");
    element.classList.remove("show");
    
});