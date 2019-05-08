var player = 'X';
var counter=0;
var won = false;
var scores = loadScores();
console.log(scores);
$('.x-score').text(scores.X);
$('.o-score').text(scores.O);
 // $("scores").updateScores(scores.O,score.X);
function updateScores(o_score, x_score){  // updateScores({O: 1, X: 0})
  let OScore = parseInt(localStorage.getItem('O', 0));
  localStorage.setItem('O', OScore + o_score);
  let XScore = parseInt(localStorage.getItem('X', 0));
  localStorage.setItem('X', XScore + x_score);
}


function loadScores(){
  let OScore = parseInt(localStorage.getItem('O', 0));
  let XScore = parseInt(localStorage.getItem('X', 0));
  return {O: OScore, X: XScore};
}

function resetScores(){
    localStorage.setItem('O', 0);
    localStorage.setItem('X', 0);
    location.reload();
}

$(".resetScore").on("click",resetScores);

// $('.x-score').text(val(XScore));
function playTurn (event) {
      $(event.target).html('<img width="25" hight="25" id="theImg" src="' + player + '.png" />');
      $(event.target).attr('player', player);
      // $(event.target).text(player);
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
    if ($("."+number1).attr('player') == player && $("."+number2).attr('player') == player && $("."+number3).attr('player') == player) {
      won = true;
      if(player == 'O')
        updateScores(1, 0);
      else
        updateScores(0, 1);
      console.log(loadScores());
swal("Congratulations You win !", player , "success");
$("td").off("click");
// $('td').html("");

  // swal("Congratulations " + player + "  You won.");

   // empty();
}
else if (counter>=9){
  if (won == false){
  swal(" It's a tie :) ");
}
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
