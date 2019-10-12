var destItem = $("#dest").val();
var length = $("#length").val();
var boxes = $(".box")
// function postDisplay {
// 	$(this).text() === destItem ? change = destItem : change = length;
// 	$(this).text(change);
// 	$(this).prop("disabled", "true");
// 	postDisplay();
// }

for(i = 0; i < box.length; )

$("#activities").keypress(function(event) {
	if(event.which === 13) {
		//store todo from input
		var todoItem = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoItem + '</li>');
	}
});

//check off lis by clicking
$("ul").on("click", "li", function(){
	//if li is gray turn black, else turn gray
	$(this).toggleClass("completed");
});

//click on X to delete li
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(450, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("#dest").keydown(function(event) {
	if(event.which === 9 || event.which === 13) {
		var destItem = $(this).val();
		$("#destinationDisplay").text(' ' + destItem);
		$(".display1").css("display", "block");
		$(this).text(destItem);
		$(this).prop("disabled", "true");
	}
});

$("#length").keydown(function(event){
	if(event.which === 13) {
		var length = $("#length").val();
		$("#daysDisplay").text(' ' + length);
		$(".display2").css("display", "block");
		$(this).text(length);
		$(this).prop("disabled", "true");
	}
});
