/**
 * It creates an instance of Actor object
 * 
 * @constructor
 * @param template {Object}
 */

Actor = function(template) {
  this.name = template.name;
  this.force = template.force;
  this.garden = null;
  this.turnip = null;
};

Actor.prototype.setGarden = function(garden) {
  this.garden = garden;
};

Actor.prototype.plantTurnip = function(value) {
  this.turnip = this.garden.getTurnipSeed(); 
  this.turnip.plant(value);
};

Actor.prototype.pullTurnip = function() {
  
};

Actor.prototype.pull = function() {
  
};

Actor.prototype.callSomeone = function() {
  this.helpActor = actor;
};