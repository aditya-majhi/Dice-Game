document.querySelector(".btn button").addEventListener("click" , function(){
    document.querySelector(".player1 h2").textContent = "Player 1";
    document.querySelector(".player2 h2").textContent = "Player 2";
    var p1=Math.floor(Math.random()*6)+1;
    var p2=Math.floor(Math.random()*6)+1;
    var img1= "images/dice" + p1 + ".png" ;
    var img2= "images/dice" + p2 + ".png" ;
    document.querySelector(".player1 img").setAttribute("src" , img1) ;
    document.querySelector(".player2 img").setAttribute("src" , img2) ;
    if(p1===p2){
        document.querySelector("h1").textContent = "Draw!!";
    }
    if(p1<p2){
        document.querySelector("h1").textContent = "Player 2 Wins..";
        document.querySelector(".player2 h2").textContent = "Winner";
    }
    if(p1>p2){
        document.querySelector("h1").textContent = "Player 1 Wins..";
        document.querySelector(".player1 h2").textContent = "Winner";
    }
});