/**
 * It creates an instance of Turnip object
 * 
 * @constructor
 */

Turnip = function() {};

Turnip.factory = function() {
  return new Turnip();
};

/**
 * @param value {Integer}
 */
Turnip.prototype.plant = function(value) {
  console.info("Turnip grown up (" + value + ")");
  this.value = value;
};

/**
 * @param force {Integer}
 */
Turnip.prototype.pull = function(force) {
  return force >= this.value;
};