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
itemEl();


var timeEl = function (){
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  $(".content").each(function () {
    var hours = $(this).parent().attr("id");
    var time = moment().hour();
    if (hours < time) {
      $(this).addClass("past");
    } else if (hours == time) {
      $(this).addClass("present");
    } else if (hours > time) {
      $(this).addClass("future");
    }
  });
}
 


itemEl()
timeEl()