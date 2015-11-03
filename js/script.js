(function ($) {
  
  $( document ).on( "mobileinit", function() {
    $.extend( $.mobile , {
      defaultPageTransition: 'slide'
    });
    
    
  });
    console.log(1);

    var newsGet = function() {
      
    };

    $(document).on( "pagecontainershow", function( event, ui ) {
      var activePage = ui.toPage[0].id;
      console.log(event);
      console.log(ui);
      
      if (activePage == 'page-news') {
        $.ajax({
          url: "http://dev.opennov.ru/rest/views/news?display_id=rest",
          type: 'get',
          dataType: 'jsonp',
          error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('page_node_pages - failed to retrieve pages');
            console.log(JSON.stringify(XMLHttpRequest));
            console.log(JSON.stringify(textStatus));
            console.log(JSON.stringify(errorThrown));
          },
          success: function (data) {
            $("#news-list").html("");
            console.log(data);
            $.each(data,function (i,node) {
              console.log(JSON.stringify(node));
              $("#news-list").append($("<li></li>",{"html":node.node_title}));
            });
            $("#news-list").listview("destroy").listview();
          }
        });
      }
      
      //news-list
    });

})(jQuery);