define(['pubsub','animals/tiger'], function(PubSub,Tiger) {
  
  PubSub.subscribe('page::load', function(e, context) {
    console.log(new Tiger());
  });
  
});