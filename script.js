 //date at top of screen
$(document).ready(function(){
    $("#date").text( moment().format('ddd MMM Do, YYYY'))
})
//text editor
var itemEl = function(){
  $(".time-block").each(function (){
    var hour = $(this).attr("id")
    var text = localStorage.getItem(hour)
    $(this).children(".content").text(text)
  })
}
var save = function (e){
  var text = $(e.target).prev().text().trim()
  var time = $(e.target).parent().attr("id")
  localStorage.setItem(time, text);
}
var editItem = function (e) {
  var text = $(this).text()
  var input = $("input").addClass("col-1").val(text)
  $(this).replaceWith(input)
};
$("body").on("click", ".saveBtn", save)
$("body").on("click", ".content", editItem)
itemEl();


var timeEl = function (){
$(".userText").each(function(){
var hour = $(this).parent().attr("id")
var timeNow = moment().hour()
$(this).removeClass("past present future")
if (hour < timeNow){
$(this).addClass(".past")
}
else if (hour == timeNow){
 $(this).addClass(".present")
}
else if(hour > timeNow) {
 $(this).addClass(".future")
}
})
}
 


itemEl()
timeEl()