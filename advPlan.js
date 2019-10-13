var destItem = $("#dest").val();
var length = $("#length").val();
var boxes = [];


$("#dest").keydown(function(event) {
	if(event.which === 9 || event.which === 13) {
		$(".display1").css("display", "block");
		$("#destinationDisplay").text(' ' + destItem);
		$(this).text(destItem);
		$(this).prop("disabled", "true");
	}
});

$("#length").keydown(function(event){
	if(event.which === 13) {
		$("#daysDisplay").text(' ' + length);
		$(".display2").css("display", "block");
		$(this).text(length);
		$(this).prop("disabled", "true");
	}
});
//how to loop through and only append on ul input is entered
for(var i = 0; i < boxes.length; i++) {

$(".listItem").keypress(function(event) {
	if(event.which === 13) {
		//store todo from input
		var todoItem = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoItem + '</li>');
	};
});
}

// $(".listItem").keypress(function(event) {
// 	if(event.which === 13) {
// 		//store todo from input
// 		var todoItem = $(this).val();
// 		$(this).val("");
// 		//create new li and add to ul
// 		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoItem + '</li>');
// 	};
// });

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