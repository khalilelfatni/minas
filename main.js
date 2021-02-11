document.addEventListener('DOMContentLoaded', () => {

    simple();

});



function simple(){
    $("#item").html("");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            $("#item").append("<div class='box' id='box" + i+j + "'onclick='lookBomb()' > </div>");
            $('#box'+i+j).attr('data-id', i + '' + j);
        }
        $("#item").append("<br>");
    }
    
}
function medium(){
    $("#item").html("");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            $("#item").append("<div class='box' id='box" + i+j + "'onclick='lookBomb()'> </div>");
            $('#box'+i+j).attr('data-id', i + '' + j);
        }
        $("#item").append("<br>");
    }
    
}
function difficult(){
    $("#item").html("");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 30; j++) {
            $("#item").append("<div class='box' id='box" + i+j + "' onclick='lookBomb()' > </div>");
            $('#box'+i+j).attr('data-id', i + '' + j);
        }
        $("#item").append("<br>");
    }
    
}


function lookBomb(){
    $("#box00").html('1');
    $("#box01").html('2');
    $("#box10").html('3');
    $("#box00").css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
    $("#box01").css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
    $("#box10").css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
    $("#box11").css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
    $("#box05").css({"background-color":"#707b7c", "display":"flex" , "justify-content":"center"});
}