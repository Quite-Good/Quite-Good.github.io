$("body").scroll(function() {
    let y = window.scrollY
    $("#block1").css({
        'transform'         : 'rotate3d(' + y + ')'
      });
})

var alpha = 0;
var beta = 0;

$(document).keypress(function(event){
    let key = String.fromCharCode(event.which).toUpperCase(); 
    console.log(key)
    if (key == "A"){
        beta = beta-5;
    }
    else if (key == "D"){
        beta = beta+5;
    }
    else if (key == "W"){
        alpha = alpha+5;
    }
    else if (key == "S"){
        alpha = alpha-5;
    }
    else {
        return
    }

    $(".room").css({
        'transform' : 'rotateX(' + alpha + 'deg) rotateY(' + beta + 'deg) translateZ(40vw)'
    })
});