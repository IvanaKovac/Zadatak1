if($(".nestaje").is(":visible")){
    $(".nestaje").hide(10000);}
    $(".nestaje").show(5000);


    let x = 0;
    let y = 80;
    let b = 200;
    let c = 200;
    let heading = function (){
     
    if (x < 200) {
    $(".tekst").offset({
            left: x,
            top: 80
    });
    x++
    } else if (y < 200) {
    $(".tekst").offset({
            top: y,
            left:200
    });
    y++
    } else if (b > 0) {
    $(".tekst").offset({
            left: b,
            top: 200 
    });
    b--
    } else if (c > 0) {
    $(".tekst").offset({
            top: c,
            left: 0 
    });
    c--
    } else {
     x = 0;
     y = 80;
     b = 200;
     c = 200;
     };
    };
    setInterval(heading, 10);//brzina kruzenja teksta