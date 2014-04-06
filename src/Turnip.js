/**
 * It creates an instance of Turnip object
 * 
 * @constructor
 */

Turnip = function() {};

/**
 * @param value {Integer}
 */
Turnip.prototype.plant = function(value) {
  console.log("Выросла репка большая-пребольшая (" + value + ")");
  this.value = value;
};

/**
 * @param force {Integer}
 */
Turnip.prototype.pull = function(force) {
  return force >= this.value;
};