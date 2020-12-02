// Toggle dropdown menu
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    //console.log(event.target)
    if (event.target.matches('#mob-nav__container') || event.target.matches('#mob-nav__burger')
        || event.target.matches('#burger') || event.target.matches('#MobMenuToggle')){
        if ($('#MobMenu').hasClass('mob-nav--open')){
            $('#MobMenu').removeClass('mob-nav--open')
            $('#MobMenu').addClass('mob-nav--closed')
            //console.log("closing")
        } else {
            $('#MobMenu').addClass('mob-nav--open')
            $('#MobMenu').removeClass('mob-nav--closed')
            //console.log("opening")
        }
    } else {
        if ($(event.target).closest("#MobMenu").length > 0){
            console.log("leaving open")
        } else if ($('#MobMenu').hasClass('mob-nav--open')){
            $('#MobMenu').removeClass('mob-nav--open')
            $('#MobMenu').addClass('mob-nav--closed')
            //console.log("closing")
        } else {
            //console.log("do nothing")
        }
    }
}


function toggleMenu(childMenu) {
    parentMenu = document.getElementById(childMenu).dataset.parent
    document.getElementById(parentMenu).classList.toggle('mob-nav__menu--closed')
    document.getElementById(parentMenu).classList.toggle('mob-nav__menu--open')
    $("#"+childMenu).toggleClass('mob-nav__menu--closed').toggleClass('mob-nav__menu--open')
}


$( window ).on('load, resize', function(){
    resizeMiniScreen();
});
$(document).ready(function(){
    resizeMiniScreen();
});

function resizeMiniScreen(){
    var win = $(window);

    var screenImage = document.getElementById('computer');
    var theImage = new Image();
    theImage.src = screenImage.src;
    
    var imageWidth = theImage.width;
    var imageHeight = theImage.height;

    if (win.width()/win.height() > imageWidth/imageHeight){
        screenImage.height = win.height();
        screenImage.width = screenImage.height*imageWidth/imageHeight;
    } else {
        screenImage.width = win.width();
        screenImage.height = screenImage.width*imageHeight/imageWidth;
    }

    var imageRect = screenImage.getBoundingClientRect();
    var iframe = document.getElementById('iframe-container');
    console.log(imageRect)
    // let top = imageRect.top + 114*screenImage.height/imageHeight;
    // console.log(top)
    // let left = imageRect.left + 156*screenImage.width/imageWidth;
    // console.log(left)
    // iframe.top = top.toString() + "px";
    // iframe.left = left.toString() + "px";
    // iframe.width = 488*screenImage.width/imageWidth;
    // iframe.height = 107*screenImage.height/imageHeight;
    // console.log(iframe.width)
    // console.log(iframe.height)
    $("#iframe-container").css({
        top: imageRect.top + 105*screenImage.height/imageHeight,
        left: imageRect.left + 150*screenImage.width/imageWidth,
        width: 500*screenImage.width/imageWidth,
        height: 375*screenImage.height/imageHeight
    })
}

$(document).keydown(function(event){
    let key = String.fromCharCode(event.which).toUpperCase(); 
    $('#'+key).transition({y:'10px'})
    //setTimeout(function(){$('#'+key).transition({y:'0px'})}, 500)
});
$(document).keypress(function(event){
    let key = String.fromCharCode(event.which).toUpperCase(); 
    $('#'+key).transition({y:'0px'})
    //setTimeout(function(){$('#'+key).transition({y:'0px'})}, 500)
});