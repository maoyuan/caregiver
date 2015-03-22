
$(document).ready(function() {
    $('#rsearch_restriction').multiselect({
         buttonWidth: '200px',
         includeSelectAllOption: true,
         // dropRight: true
    });

    $('#rsearch_time').multiselect({
        buttonWidth: '200px',
        // dropRight: true
    });

    $('#rsearch_difficulty').multiselect({
        buttonWidth: '200px',
        // dropRight: true
    });

});


 $(function() {
  
    var availableTags = [
      "chicken",
      "cheese",
      "cabbage",
      "Cantaloupe",
      "Capsicum",
      "Carrot",
      "Celery",
      "Cucumber",
      "Catfish",
      "Cherries",
      "Crab",
      "Cuttlefish",
      "Cranberry"
    ];
    $("#nutrition").hide();
    
    $( "#tags" ).autocomplete({
      source: availableTags,
      select: function (event, ui) {
        var keyword = ui.item.value;
        $.getJSON("./data.json", function(json) {
            $("table").empty();
            for(var i = 0; i < json.length; i++){
                var imgname = "img/" + json[i].image;
                var recipename = json[i].name;
                var ingredients = json[i].ingredients;
                if(ingredients.indexOf(keyword) > -1 || recipename.indexOf(keyword) > -1) {
                    var htmlcode = '<tr><td><div class="row"><div class="col-md-4">';
                    htmlcode += '<a href = "#"><img id="theImg" src="' +imgname+ '" width="140" height="140"/></a>';
                    htmlcode += '</div><div class="col-md-8">';
                    htmlcode += '<div class="row"><div class="col-md-9"><h4 style="display: inline">' + recipename + '</h4></div>';
                    htmlcode += '<div class="btn-group col-md-3">';
                    htmlcode += '<i class="fa fa-star rating_star"></i>';
                    htmlcode += '<i class="fa fa-star rating_star"></i>';
                    htmlcode += '<i class="fa fa-star rating_star"></i>';
                    htmlcode += '<i class="fa fa-star-o"></i>';
                    htmlcode += '<i class="fa fa-star-o"></i></div></div>';
                    // htmlcode += '<span class="label label-info">Advanced</span>';
                    // htmlcode += '<span class="label label-warning">Long Time</span>';
                    htmlcode += '<a class="btn btn-default" href="#">Detail Receipe <span class="glyphicon glyphicon-chevron-right"></span></a>';
                    htmlcode += '</div></td></tr>';
                    
                    $("#nutrition").append(htmlcode);
                }

                $('.btn_rsearch_rating').on('click', function(){
                    $(this).nextAll().removeClass('fa-star').addClass('fa-star-o');

                    if ($(this).hasClass('fa-star') == false) {
                        $(this).prevAll().removeClass('fa-star-o').addClass('fa-star');
                        $(this).removeClass('fa-star-o').addClass('fa-star');           
                    }
                });
                
            }
        
        });
            $("#nutrition").show();  
        }
    });
  });
