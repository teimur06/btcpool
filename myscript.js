var explode = function(){

	$(".ant-table-column-has-actions").each(function(){
        console.log("Click");
		var a = $(this).find("a").each(function() {
			var i = parseInt($(this).text());
			if (assiks[i] != null) {
				var assik = assiks[i];
				$(this).after(' - <a href=\'http://'+assik+'\' target=\'_blank\' rel=\'noopener noreferrer\'>'+assik+'</a>');
			}
		});

	});
};




var main = function() {
    $(".ant-menu-item:last").after("<li class=\"ant-menu-item\" role=\"menuitem\"><a id='update' ><span><span class=\"mill-ico-yellow font-size-20\">• </span><span class=\"font-size-16\"><span>Local Miners</span></span></span></a></li>");
    $("#update").on('click', function(e) {
        explode();
    });;

}

var whileLoadingMinersPage = function() {
    if ($(".ant-table-column-has-actions").length == 0) {
        setTimeout(whileLoadingMinersPage,1000);
    } else {
        main();
    }
}

setTimeout(whileLoadingMinersPage,1000);









