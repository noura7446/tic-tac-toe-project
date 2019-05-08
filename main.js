var player = 'X';
var counter=0;
function playTurn (event) {
     // $(event.target).html('<img width="9%" hight="9%" id="theImg" src="X.png" />')
      $(event.target).text(player);
     counter+=1;
     console.log(counter);
     win(player);
     if (player=="X")
     player="O";
     else {
       player="X";


     }
     $(event.target).off("click");


}
function mySwitch (event){
//  $(event.target).attr("class")
if ($(event.target).text()=="O"){
  player="O";
  $(".players").off("click");
}
}


$(".players").on("click","button",mySwitch);
$('td').on('click', playTurn);


function sound(event){
  var audio = new Audio();
  audio.src ="beep.mp3";
  audio.play();
}
  $('td').on('click',sound);

function checkWiner(player, number1, number2, number3) {
    if ($("."+number1).text() == player && $("."+number2).text() == player && $("."+number3).text() == player) {
swal("Congratulations You win !", player , "success");
// $('td').html("");

  // swal("Congratulations " + player + "  You won.");

   // empty();
}
else if (counter>=9){
swal(" It's a tie :) ");
// empty();

}

 }

function empty(){
  player=" ";
  counter=0;
  $('td').text("");
  location.reload();
}
$(".restart").on("click",function(){empty();});

//posibalites
function win(player) {
    checkWiner(player, 1,2,3);
    checkWiner(player, 4,5,6);
    checkWiner(player, 7,8,9);
    checkWiner(player, 1,4,7);
    checkWiner(player, 2,5,8);
    checkWiner(player, 3,6,9);
    checkWiner(player, 1,5,9);
    checkWiner(player, 3,5,7);
}
