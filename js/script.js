(function ($) {
  
  $( document ).on( "mobileinit", function() {
    $.extend( $.mobile , {
      defaultPageTransition: 'slide'
    });
    
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.pushStateEnabled = false;
  });
  
  var newsGet = function() {
    
  };

  $(document).on( "pagecontainershow", function( event, ui ) {
    var activePage = ui.toPage[0].id;
    
    if (activePage == 'page-news') {
      /*var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://dev.opennov.ru/rest/views/news?display_id=rest', true);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.onload = function(){
        console.log(JSON.parse(xhr.response));
        
        $("#news-list").html("");
        $.each(JSON.parse(xhr.response),function (i,node) {
          $("#news-list").append($("<li></li>",{"html":node.node_title}));
        });
        $("#news-list").listview("destroy").listview();

      };
      xhr.send();*/
      
      $.ajax({
        //url: "http://dev.opennov.ru/rest/views/news?display_id=rest",
        url: "http://dev.opennov.ru/rest/views/news",
        type: 'get',
        dataType: 'json',
        crossDomain: true,
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
          
          $("#news-list").html("");
          $.each(data,function (i,node) {
            $("#news-list").append($("<li></li>",{"html":node.node_title}));
          });
          $("#news-list").listview("destroy").listview();
        }
      });
    }
    
    //news-list
  });
  
})(jQuery);

/*document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  alert('deviceready');
}*/