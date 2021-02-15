var matrix = [];
var tamI = 0;
var tamJ = 0;

document.addEventListener('DOMContentLoaded', () => {

    paintTable(8,8,10);

});

function createTable(sizeN, sizeM){
    $("#item").html("");
    for (let i = 0; i < sizeN; i++) {
        matrix[i] = [];
        for (let j = 0; j < sizeM; j++) {
            matrix[i][j] = 0;
            $("#item").append("<div class='box' id='" + i + "k" + j + "'data-idI='" + i + "'data-idJ='" + j + "'onclick='lookBomb(this)' > </div>");
        }
        $("#item").append("<br>");
    }
}

function addBombs(bombs){
    for (let k = 0; k < bombs; k++) {
        let i = Math.round(Math.random()*(tamI-1));
        let j = Math.round(Math.random()*(tamJ-1));        
        matrix[i][j] = 999;
    }
}


function paintTable(sizeN, sizeM, bombs){
    tamI = sizeN;
    tamJ = sizeM;
    createTable(sizeN, sizeM);
    addBombs(bombs);
    for (let i = 0; i < sizeN; i++) {
        for (let j = 0; j < sizeM; j++) {
            if(matrix[i][j] == 999){
                let mini = i-1;
                let minj = j-1;
                tamk = mini+3;
                tamm = minj+3;
                for (k = mini; k < tamk ; k++) {
                    for (m = minj; m < tamm; m++) {
                        if(k>=0 && m >=0 && k<=(tamI-1) && m<=(tamJ-1)){
                            if(matrix[k][m] != 999){
                                matrix[k][m] = matrix[k][m] +1;
                            }
                        }
                    }
                }
            }
        }
    }
    
    
}



function lookBomb(obj){

    var idI = $(obj).data('idi');
    var idJ = $(obj).data('idj');
    var audioBom = new Audio('https://raw.githubusercontent.com/khalilelfatni/appWEB/master/001105163_prev.mp3');
    var audioBoton = new Audio('https://raw.githubusercontent.com/khalilelfatni/appWEB/master/SD_NAVIGATE_58.mp3');

    if(matrix[idI][idJ] == 999){
        
        for (let i = 0; i < tamI; i++) {
            for (let j = 0; j < tamJ; j++) {
                if(matrix[i][j] == 999){
                    $("#" +i+"k"+j).html('<i class="fas fa-bomb"></i>');
                    $("#" +i+"k"+j).css({"background-color":"red" , "box-shadow": "0px 1px 2px 3px red" , "display":"flex" , "justify-content":"center"});

                }else{
                    $("#" +i+"k"+j).html(matrix[i][j]);
                    $("#" +i+"k"+j).css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
                }
                
                
            }
        }
        audioBom.play();

    }else{
        
        $("#" +idI+"k"+idJ).html(matrix[idI][idJ]);
        $("#" +idI+"k"+idJ).css({"background-color":"#707b7c" , "display":"flex" , "justify-content":"center"});
        audioBoton.play();
    }
    
}