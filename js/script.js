(function ($) {
  
  $( document ).on( "mobileinit", function() {
    $.extend( $.mobile , {
      defaultPageTransition: 'slide'
    });
    
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
  });

  
  var newsGet = function() {
    
  };

  $(document).on( "pagecontainershow", function( event, ui ) {
    var activePage = ui.toPage[0].id;
    
    if (activePage == 'page-news') {
      $.ajax({
        url: "http://dev.opennov.ru/rest/views/news?display_id=rest",
        type: 'get',
        dataType: 'jsonp',
        //jsonp: 'jsoncallback',
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          console.log(JSON.stringify(XMLHttpRequest));
          console.log(JSON.stringify(textStatus));
          console.log(JSON.stringify(errorThrown));
          alert(textStatus);
          alert(errorThrown);
          
          /*navigator.notification.alert(
            'Ошибка ajax запроса..',
            null,
            'Ошибка',
            'Ок'
          );*/
        },
        success: function (data) {
          $("#news-list").html("");
          
          /*navigator.notification.alert(
            'Данные успешно загружены',
            null,
            'Title',
            'Ок'
          );*/
          
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

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  alert('deviceready');
}