(function ($) {
  
  $( document ).on( "mobileinit", function() {
    $.extend( $.mobile , {
      defaultPageTransition: 'slide'
    });
    
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    //$.mobile.pushStateEnabled = false;
  });
  
  $(document).on("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    alert('deviceready');
  }

  $(document).on( "pagecontainershow", function( event, ui ) {
    var activePage = ui.toPage[0].id;
    //if (activePage == 'page-news') {
      
      $.ajax({
        //url: "http://dev.opennov.ru/rest/views/news?display_id=rest",
        url: "http://dev.opennov.ru/rest/views/news",
        type: 'get',
        dataType: 'json',
        timeout: 3000,
        //jsonp: 'jsoncallback',
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          //console.log(JSON.stringify(XMLHttpRequest));
          //console.log(JSON.stringify(textStatus));
          //console.log(JSON.stringify(errorThrown));
          alert('error');
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
          alert('ok');
          console.log(data);
          
          /*$("#news-list").html("");
          $.each(data,function (i,node) {
            $("#news-list").append($("<li></li>",{"html":node.node_title}));
          });
          $("#news-list").listview("destroy").listview();*/
        }
      });
    //}
  });
  
})(jQuery);

/*document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  alert('deviceready');
}*/