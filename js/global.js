$(document).ready(function(){
  getInfo("info.json");

});

function getInfo(src) {
    $.getJSON(src,function(data){

      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var name = data[i].name;
        var url = data[i].url;
        var details = data[i].details;

        var tmpdetails;
        for(var i = 0; i < details.length; i++) {
          tmpdetails += "<p>" + details[i]. + "</p";
        }

        var html = "<div class=' col-xs-12 col-sm-4 col-md-3 col-lg-3 wrap'>" +
                   "<div class='wrap-title'> " +
                   "<h2><a href='" + url + "' target='_blank'>" + name + "</a></h2>" +
                   "</div>" +
                   "<div class='detail'>" + tmpdetails +
                   "<a href='" + url + "' target='_blank' class='btn btn-info wrap-btn'>了解更多</a>" +
                   "</div>" +
                   "</div>";

        $("#website").append(html);
        }
    });
}