// $("#dest").keydown(function(event) {
// 	if(event.which === 9 || event.which === 13) {
//     var destItem = $("#dest").val();
// 		$(".display1").css("display", "block");
// 		$("#destinationDisplay").text(' ' + destItem);
// 		$(this).text(destItem);
// 	}
// });

// $("#length").keydown(function(event){
// 	if(event.which === 13 || event.which === 9) {
//     var length = $("#length").val();
// 		$("#daysDisplay").text(' ' + length);
// 		$(".display2").css("display", "block");
// 		$(this).text(length);
// 	};
// }); 

$("button").on("click", function() {
    var length = $("#length").val();
    var destItem = $("#dest").val();
    $(".display1").css("display", "block");
		$(".display2").css("display", "block");
		$("#destinationDisplay").text(' ' + destItem);
    $("#daysDisplay").text(' ' + length);
		$("#destination").text(destItem);
    $("#length").text(length);
    $("#destination").prop("disabled", "true");
    $("#length").prop("disabled", "true");
    alert("Keep track of travel plans and check them off as you go. Happy travels!")
	});

$(".listItem").keydown(function(event) {
	if(event.which === 13) {
		//store todo from input
		var todoItem = $(this).val();
		$(this).val("");
		//create new li and add to ul
		populate($(this).attr('name'), todoItem);
	};
});

function populate(target, todoItem) {
  $("#" + target).append('<li><span class="trash"><i class="fas fa-trash-alt"></i></span> ' + todoItem + '<span class="check"><i class="fas fa-check"></i></span>' + '</li>');
};

//check off lis by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click on X to delete li
$("ul").on("click", ".trash", function(event) {
	$(this).parent().fadeOut(450, function(){
		$(this).remove();
	});
	event.stopPropagation();
});