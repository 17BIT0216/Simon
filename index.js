// console.log($("#yellow").css("color"));
var col=["red","yellow","green","blue"];
gamePattern=[];
var gameScore=0;
function nextSequence()
{
  var ran= Math.floor(Math.random()*(4-0))+0;
var sel_col=col[ran];
gamePattern.push(sel_col);
var a="."+sel_col;
$(a).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

$(".btn").click(function(event)
{

  var id=(event.target.id);
  var p=gamePattern.pop();

  if(id===p)
  {
  var play_a="sounds/"+id+".mp3";
  var ad= new Audio(play_a);
  ad.play();
  gameScore++;
  $(".Score").text(gameScore);
  //if correct play the sounds$
  nextSequence();
}
  else
  {
  var s= new Audio('sounds/wrong.mp3');
  s.play();
  $('body').css("background-color","red");
  $(".btn").hide();
  $(".hide").hide();
  $(".Score").text("Your score was "+gameScore+" Press r to play again!");
}
});

$('body').keypress(function(event)
{

var a=$('body').css('background-color');
if(a!=='rgb(255, 0, 0)')
{
if(event.key==='a' || event.kry==='A')
{
  nextSequence();
}
}
if(event.key==='r' || event.key==="R")
{
location.reload();
}
});
