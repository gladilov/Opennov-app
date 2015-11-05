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
    
    if (activePage == 'page-news') {
      
      $.ajax({
        //url: "http://dev.opennov.ru/rest/views/news?display_id=rest",
        url: "http://dev.opennov.ru/rest/views/news",
        type: 'get',
        dataType: 'json',
        timeout: 3000,
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
    }
    
    else if (activePage == 'page-events') {
      
      $.ajax({
        //url: "http://dev.opennov.ru/rest/views/news?display_id=rest",
        url: "http://dev.opennov.ru/rest/node.json",
        type: 'get',
        dataType: 'json',
        timeout: 3000,
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
    }
    
    else if (activePage == 'page-blogs') {
      
      $.ajax({
        //url: "http://dev.opennov.ru/rest/views/news?display_id=rest",
        url: "http://dev.opennov.ru/rest/node/300.json",
        type: 'get',
        dataType: 'jsonp',
        crossDomain: true,
        headers: {"Content-Type": "application/javascript;charset=UTF-8"},
        timeout: 3000,
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
    }
    
    
  });
  
})(jQuery);
