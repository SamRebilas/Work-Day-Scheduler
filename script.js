 //date at top of screen
$(document).ready(function(){
    $("#date").text( moment().format('ddd MMM Do, YYYY'))
})
//text editor


function timeInfo (){
$(".userText").each(function(){
var hour = $(this).parent().attr("id")
var timeNow = moment().hour();

if (hour < timeNow){
$(this).addClass("past")
}
else if (hour == timeNow){
  $(this).addClass("present")
}
else if(hour > timeNow) {
  $(this).addClass("future")
}
})


  
}
 

   
 function saveText  (){
  textEl = (document.getElementById("userText").value)
  localStorage.setItem("userText", textEl)
  console.log(textEl)
 }


document.querySelector(".saveBtn").addEventListener("click", function(){
  saveText()
})


timeInfo()