/**
 * It creates an instance of Actor object
 * 
 * @constructor
 */

Actor = function() {
  this.name = null;
  this.force = null;
  this.garden = null;
  this.turnip = null;
  this.helpActor = null;
};

Actor.prototype.setGarden = function(garden) {
  this.garden = garden;
};

Actor.prototype.plantTurnip = function(value) {
  console.log("Посадил " + this.name + " репку.");
  this.turnip = this.garden.getTurnipSeed(); 
  this.turnip.plant(value);
};

Actor.prototype.pullTurnip = function(turnip, force) {
  console.log("pullTurnip " + turnip.value + " " + force);
  if (this.helpActor) {
    this.helpActor.pullTurnip(turnip, force + this.force);
  } else {
    this.pull(turnip, force + this.force);
  }
};

Actor.prototype.pull = function(turnip, force) {
  console.log("pull");
  if (turnip.pull(force)) {
    console.log("Вытащили репку!");
  } else {
    console.log("Вытащить не могут.");
    this.callSomeone();
  }
};

Actor.prototype.callSomeone = function() {
  this.helpActor = this.garden.callTheBestActor();
  console.log("позвал " + this.name + " " + this.helpActor.name);
};