$(function() {
setTimeout(showContent, 2000);


  searchData();
  $.getJSON( "assets/js/data.json", function( data ) {
    var items = [];
    $.each( data.links, function( key, element ) {
      var items = '<li class="item"><div class="votes"><svg enable-background="new 0 0 32 32" height="15px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" class="icon-red"/></svg><span class="number">'+ element.upvotes +'</span></div><a href="http://'+ element.meta.url + '" class="site-url">'+ element.meta.url + '</a><h2 class="title">'+ element.meta.title +'</h2><a href="#" class="category category-' + element.category +'">' + element.category +'</a><div class="user-info"><img src="assets/img/photo-small.png" alt="" class="photo" /><a href="#" class="author red-links">'+ element.meta.author +'</a><span class="time">43 Minutes ago</span><div class="comments"><i class="fa fa-comment" aria-hidden="true"></i> <a href="#" class="red-links">'+ element.comments +' Comments</a></div><a href="#" class="link-edit red-links">Edit</a></div></li>';
      $('.data-list').append(items);
    });
});
});

function searchData() {
  $("#input-search").keyup(function() {
    var value = $(this).val();
    var x = 0;
    $(".data-list .item").css("display", "block");
    $(".data-list .item").each(function() {
      if (value === "") {
        $('.load-more').empty().remove();
      }
      if($(this).text().toUpperCase().indexOf(value.toUpperCase()) < 0) {
          $(this).css("display", "none");
        } else {
          if (x === 0) {
            $('body').append('<div class="load-more">Nothing found!</div>');
            x++;
          }
        }
      });
  });
}

function showContent() {
  $('.loading').hide();
  $('ul').removeClass('hide');
}
