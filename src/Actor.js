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
  this.dispatcher = null;
  this.starter = false;
};

Actor.factory = function() {
  return new Actor();
};

Actor.prototype.TRY_AGAIN = "try_again";

Actor.prototype.setGarden = function(garden) {
  this.garden = garden;
};

Actor.prototype.setEventDispatcher = function(dispatcher) {
    this.dispatcher = dispatcher;
};

Actor.prototype.getName = function() {
  return this.name;
};

Actor.prototype.plantTurnip = function(value) {
  console.log("The " + this.name + " planted a turnip.");
  this.turnip = this.garden.getTurnipSeed(); 
  this.turnip.plant(value);
  this.starter = true;
  this.dispatcher.addEventListener(Actor.TRY_AGAIN, function() {
    if (this.starter) {
        this.pullTurnip();
    }
  }.bind(this));
};

Actor.prototype.pullTurnip = function(turnip, force) {
  force = force || 0;
  if (this.helpActor) {
    console.log("The " + this.name + " added force " + force);
    this.helpActor.pullTurnip(turnip, force + this.force);
  } else {
    console.log("The " + this.name + " pulled turnip with final force " + force);
    this.pull(turnip, force + this.force);
  }
};

Actor.prototype.pull = function(turnip, force) {
  if (turnip.pull(force)) {
    this.garden.pullTheTurnip(turnip);
    console.log("Finally pulled out the turnip!");
  } else {
    console.log("Cannot pull out the turnip.");
    this.callSomeone();
  }
};

Actor.prototype.callSomeone = function() {
  this.helpActor = this.garden.callTheBestActor();
  if (this.helpActor) {
    console.log("The " + this.name + " called " + this.helpActor.getName());
    this.dispatcher.triggerEvent(Actor.TRY_AGAIN);
  } else {
    console.log("The " + this.name + " was asking for help with no success.");
  }
};