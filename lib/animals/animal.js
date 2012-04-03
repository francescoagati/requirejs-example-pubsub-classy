define(['classy'], function(Class) {
  
  return Class.$extend({
    __init__: function(name, age) {
      this.name = name;
      this.age = age;
      return this.health = 100;
    }
  });
  
});