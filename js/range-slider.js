$( function() {
    $( "#price-slider" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ $( "#price-handle-1" ).attr("value"), $( "#price-handle-2" ).attr("value") ],
      slide: function( event, ui ) {
          $( "#price-handle-1" ).attr("value", ui.values[ 0 ]);
          $( "#price-handle-2" ).attr("value", ui.values[ 1 ]);
      }
    });

    $( "#rating-slider" ).slider({
      range: true,
      min: 0,
      max: 5,
      values: [ $( "#rating-handle-1" ).attr("value"), $( "#rating-handle-2" ).attr("value") ],
      slide: function( event, ui ) {
          console.log(ui);
          $( "#rating-handle-1" ).attr("value", ui.values[ 0 ]);
          $( "#rating-handle-2" ).attr("value", ui.values[ 1 ]);
      }
    });
} );
