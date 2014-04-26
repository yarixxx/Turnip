/**
 * It creates an instance of Turnip object
 * 
 * @constructor
 */

Turnip = function() {};

Turnip.factory = function() {
  return new Turnip();
};

Turnip.prototype.setStoryTeller = function(storyTeller) {
  this.storyTeller = storyTeller;
};

/**
 * @param value {Integer}
 */
Turnip.prototype.plant = function(value) {
  this.storyTeller.tell("Turnip grown up (" + value + ")");
  this.value = value;
};

/**
 * @param force {Integer}
 */
Turnip.prototype.pull = function(force) {
  this.storyTeller.tell("pull " + force + " " + this.value);
  return force >= this.value;
};
