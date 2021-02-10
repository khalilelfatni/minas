function simple(){
    $("#item").html("");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            $("#item").append("<div id='box'> </div>");
        }
        $("#item").append("<br>");
    }
    
}
function medium(){
    $("#item").html("");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            $("#item").append("<div id='box'> </div>");
        }
        $("#item").append("<br>");
    }
    
}
function difficult(){
    $("#item").html("");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 30; j++) {
            $("#item").append("<div id='box'> </div>");
        }
        $("#item").append("<br>");
    }
    
}