$(function() {
	$.getJSON( "assets/js/data.json", function( data ) {
		var items = [];
		$.each( data.links, function( key, element ) {
			var items = "<li class='item'><div class='number'>" + element.upvotes + "</div><a href='http://'"+ element.meta.url + ">"+ element.meta.url +"</a><h2 class='title'>"+ element.meta.title +"</h2><a href='#' class='category category-" + element.category +"''>"+ element.category +"</a><a href='#' class='user-info><img src='#' alt='' class='photo'>"+ element.meta.author +"</a><span>43 Minuts ago</span><div class='comments>"+ element.comments +" Comments </div><a href='#' class='link-edit'>Edit</a>"

			$('.list').append(items);

			console.log(items);
		});
	});	
});