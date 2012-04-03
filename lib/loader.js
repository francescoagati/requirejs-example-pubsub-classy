(function() {
  var paths;

  require.config({
    baseUrl: "./lib"
  });

  paths = ["vendor/order", "cs"];

  require(paths, function(order,cs,classy) {
    
    return require(["main"], function(context) {
      PubSub.publish( 'page::load', arguments);
    });
  });

}).call(this);
