define(['animals/animal'], function(Animal) {
  
  return Animal.$extend({
    eat: function(animal) {
      this.$super(animal);
      return animal.die();
    }
  });
  
});