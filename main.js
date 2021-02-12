var matrix = [];

document.addEventListener('DOMContentLoaded', () => {

    simple();

});



function simple(){
    $("#item").html("");
    for (let i = 0; i < 8; i++) {
        matrix[i] = [];
        for (let j = 0; j < 8; j++) {
            matrix[i][j] = 0;
            $("#item").append("<div class='box' id='box" + i+j + "'onclick='lookBomb(this)' > </div>");
            $('#box'+i+j).attr('data-idI', i );
            $('#box'+i+j).attr('data-idJ', j);
        }
        $("#item").append("<br>");
    }
    for (let k = 0; k < 11; k++) {
        let i = Math.round(Math.random()*7);
        let j = Math.round(Math.random()*7);        
        matrix[i][j] = 999;
    }
    //console.log(matrix);
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(matrix[i][j] == 999){
                let mini = i-1;
                let minj = j-1;
                tamk = mini+3;
                tamm = minj+3;
                for (k = mini; k < tamk ; k++) {
                    for (m = minj; m < tamm; m++) {
                        if(k>=0 && m >=0 && k<=7 && m<=7){
                            if(matrix[k][m] != 999){
                                matrix[k][m] = matrix[k][m] +1;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(matrix)
    
}
function medium(){
    $("#item").html("");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            $("#item").append("<div class='box' id='box" + i+j + "'onclick='lookBomb(this)'> </div>");
            $('#box'+i+j).attr('data-id', i + '' + j);
        }
        $("#item").append("<br>");
    }
    
}
function difficult(){
    $("#item").html("");
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 30; j++) {
            $("#item").append("<div class='box' id='box" + i+j + "' onclick='lookBomb(this)' > </div>");
            $('#box'+i+j).attr('data-idI', i );
            $('#box'+i+j).attr('data-idJ', j);
        }
        $("#item").append("<br>");
    }
    
}


function lookBomb(obj){

    var idI = $(obj).data('idi');
    var idJ = $(obj).data('idj');
    if(matrix[idI][idJ] == 999){
        console.log(idI);
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if(matrix[i][j] == 999){
                    $("#box" +i+""+j).html('<i class="fas fa-bomb"></i>');
                    $("#box" +i+""+j).css({"background-color":"red" , "box-shadow": "0px 1px 2px 3px red" , "display":"flex" , "justify-content":"center"});

                }else{
                    $("#box" +i+""+j).html(matrix[i][j]);
                    $("#box" +i+""+j).css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
                }
                
                
            }
        }

    }else{
        $("#box" +idI+""+idJ).html(matrix[idI][idJ]);
        $("#box" +idI+""+idJ).css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
    }
    /*$("#box00").html(matrix[0][0]);
    $("#box01").html('2');
    $("#box10").html('<i class="fas fa-bomb"></i>');
    $("#box10").css({"background-color":"red" , "box-shadow": "0px 1px 2px 3px red" , "display":"flex" , "justify-content":"center"});
    $("#box00").css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
    $("#box01").css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
    $("#box11").css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
    $("#box05").css({"background-color":"#707b7c", "display":"flex" , "justify-content":"center"});*/
}