/**
 * It creates an instance of Garden object
 * 
 * @constructor
 */

Garden = function() {
  this.actors = [];
  this.turnips = [];
  this.eventDispatcher = null;
  this.storyTeller = null;
};

Garden.prototype.callTheActor = function() {
  var actor = Actor.factory();
  actor.setStoryTeller(this.storyTeller);
  actor.setGarden(this);
  actor.setEventDispatcher(this.eventDispatcher);
  this.actors.push(actor);
  return actor;
};

Garden.prototype.setEventDispatcher = function(eventDispatcher) {
  this.eventDispatcher = eventDispatcher;
};

Garden.prototype.setStoryTeller = function(storyTeller) {
  this.storyTeller = storyTeller;
};

Garden.prototype.callTheBestActor = function() {
  var actorTemplate = this.pullActorWithHighestForce();
  if (!actorTemplate) {
      return null;
  }
  var actor = this.callTheActor();
  actor.name = actorTemplate.name;
  actor.force = actorTemplate.force;
  actor.setStoryTeller(this.storyTeller);
  return actor;
};

Garden.prototype.pullActorWithHighestForce = function() {
  var currentBestActorIndex = 0;
  this.actorsDictionary.forEach(function(value, index) {
    var currentBestActor = this.actorsDictionary[currentBestActorIndex];
    if (currentBestActor == undefined || currentBestActor.force < value.force) {
        currentBestActorIndex = index;
    }
  }.bind(this));
  return this.actorsDictionary.splice(currentBestActorIndex, currentBestActorIndex+1)[0];
};

Garden.prototype.getTurnipSeed = function() {
  var turnip = Turnip.factory();
  turnip.setStoryTeller(this.storyTeller);
  this.turnips.push(turnip);
  return turnip;
};

Garden.prototype.pullTheTurnip = function(turnip) {
  this.turnips.forEach(function(sTurnip, index){
    if (sTurnip == turnip) {
      this.turnips.splice(index, index+1);
    }
  }.bind(this));
};

Garden.prototype.actorsDictionary = [{name: "Grandpa", force: 1},
                           {name: "Grandma", force: 0.5},
                           {name: "Granddaughter", force: 0.3},
                           {name: "Doggy", force: 0.2},
                           {name: "Kitty", force: 0.1},
                           {name: "Mouse", force: 0.01}];
