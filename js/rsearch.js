
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
            $("#popup").empty();
            for(var i = 0; i < json.length; i++){
                var imgname = "img/" + json[i].image;
                var recipename = json[i].name;
                var ingredients = json[i].ingredients;
                var directions = json[i].directions;
                var modalid = "modal" + (i+1);
                if(ingredients.indexOf(keyword) > -1 || recipename.indexOf(keyword) > -1) {
                    var ingreArr = ingredients.split("===");
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

                    //htmlcode += '<a class="btn btn-default" href="#">Detail Receipe <span class="glyphicon glyphicon-chevron-right"></span></a>';
                    htmlcode += '<p>'+ ingreArr[0] + '</p>';
                    htmlcode += '<p>'+ ingreArr[1] +'</p>';
                    htmlcode += '<p> ... </p>';
                    htmlcode += '<button type="button" class="btn btn-default" data-toggle="modal" data-target="#' + modalid+'">Detail Receipe </button>';
                    //htmlcode += '<input type = "text" class = "dp6" value = "" data-date-format = "mm-dd-yy" ></input>';
                    htmlcode += '<button type="button" class="btn btn-default" data-toggle="modal" data-target="#calendar">Add to Favorite</button>';

                    htmlcode += '</div></td></tr>';
                    
                    $("#nutrition").append(htmlcode);
                    
                    var popcode = '<div class="modal fade" id="' + modalid +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
                    popcode += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">Receipe</h4></div><div class="modal-body"><div><h4>Ingredients</h4>';    
                    
                    for(e in ingreArr){
                        popcode += '<p>' + ingreArr[e] + '</p>';
                    }
                    popcode += '<h4>Preparation</h4>';
                    var preArr = directions.split("===");
                    for(e in preArr){
                        popcode += '<p>' + preArr[e] + '</p>';
                    }             
                    popcode += '</div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Add to Favorite</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
                    
                    $("#popup").append(popcode);
                }

                $('.btn_rsearch_rating').on('click', function(){
                    $(this).nextAll().removeClass('fa-star').addClass('fa-star-o');

                    if ($(this).hasClass('fa-star') == false) {
                        $(this).prevAll().removeClass('fa-star-o').addClass('fa-star');
                        $(this).removeClass('fa-star-o').addClass('fa-star');           
                    }
                });
                
            }
            
            $('.dp6').datepicker({
                todayBtn: 'linked'
            });
        
        });
            $("#nutrition").show();  
        }        
    });
  });

// datepicker

  