$(function() {
  loadPage(2000);
  loadData();
  searchData();
});

/**
 * Loading effect
 * @param  {number} time
 * @return {null}
 */
 function loadPage(time) {
  setTimeout(showContent, time);
  return;
}

/**
 * Remove loading and class to hide items
 * @return {null}
 */
 function showContent() {
  $('.loading').hide();
  $('ul').removeClass('hide');
  return;
}

/**
 * Load data from JSON file
 * @return {array} items
 */
 function loadData() {
  var path = "assets/js/data.json"

  $.getJSON( path, function( data ) {
    var items = [];
    $.each( data.links, function( key, element ) {
      var info = {
        votes: element.upvotes,
        url: element.meta.url,
        title: element.meta.title,
        category: element.category,
        author: element.author,
        comments: element.comments
      };
      items.push(info);
    });
    render(items);
    return items;
  });
}

/**
 * Render JSON data
 * @param  {array} item array with json data.
 * @return {null}
 */
function render(item) {
  $.each(item, function( k, e ){
    var listItem = '\
    <li class="item fade" data-pop="'+e.votes+'" data-comments="'+e.comments+'"> \
      <div class="votes"><svg enable-background="new 0 0 32 32" height="15px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="15px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" class="icon-red"/></svg> \
        <span class="number">'+ e.votes +'</span> \
      </div> \
      <a href="http://'+ e.url + '" class="site-url">'+ e.url + '</a> \
      <h2 class="title">'+ e.title +'</h2> \
      <a href="#" class="category category-' + e.category +'">' + e.category +'</a> \
      <div class="user-info"><img src="assets/img/photo-small.png" alt="" class="photo" /> \
        <a href="#" class="author red-links">'+ e.author +'</a> \
        <span class="time">43 Minutes ago</span> \
        <div class="comments"> \
          <i class="fa fa-comment" aria-hidden="true"></i> \
          <a href="#" class="red-links">'+ e.comments +' Comments</a>\
        </div>\
        <a href="#" class="link-edit red-links">Edit</a>\
      </div>\
    </li>';
    $('.data-list').append(listItem);
  });
  return;
}

/**
 * Function to search by text entered inside input field
 * @return {null}
 */
function searchData() {
  var formID = "#input-search";

  $(formID).keyup(function() {
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
  return;
}

/**
 * Check type of order and change the icons
 * @param  {string} listType String with list type passed by onclick event
 * @return {null}
 */
function orderList(listType) {
  if (listType === "pop") {
    var el = $('.listpop i');
    $(el).toggleClass('fa-sort-desc');
    $(el).toggleClass('fa-sort-asc');
    if ($(el).hasClass('fa-sort-desc')) {
      orderASCList(listType);
    } else {
      orderDESCList(listType);
    };
  } else {
    if (listType === "comments") {
      var el = $('.listcomments i');
      $('.listcomments i').toggleClass('fa-sort-desc');
      $('.listcomments i').toggleClass('fa-sort-asc');
      if ($(el).hasClass('fa-sort-desc')) {
        orderASCList(listType);
      } else {
        orderDESCList(listType);
      };
    };
  };
  return;
}

/**
 * Order List by ASC
 * @param  {string} t
 * @return {array}
 */
function orderASCList(t) {
  $(".data-list li").sort(sortASC).appendTo('.data-list');
  function sortASC(a, b){
    return ($(b).data(t)) > ($(a).data(t)) ? 1 : -1;
  }
}

/**
 * Order List by DESC
 * @param  {string} t
 * @return {array}
 */
function orderDESCList(t) {
  $(".data-list li").sort(sortDESC).appendTo('.data-list');
  function sortDESC(a, b){
    return ($(b).data(t)) < ($(a).data(t)) ? 1 : -1;

  }
}
