/**
 * It creates an instance of Garden object
 * 
 * @constructor
 */

Garden = function() {
  this.actors = [];
  this.turnips = [];
};

Garden.prototype.callTheBestActor = function() {
  var actor = new Actor(this.actorsDictionary[0]);
  this.actors.push(actor);
  return actor;
};

Garden.prototype.getTurnipSeed = function() {
  var turnip = new Turnip();
  this.turnips.push(turnip);
  return turnip;
};

Garden.prototype.plantTheTurnip = function(turnip) {
  this.turnips.push(turnip);
};

Garden.prototype.pullTheTurnip = function(turnip) {
  this.turnips.forEach(function(sTurnip, index){
    if (sTurnip == turnip) {
      this.turnips.splice(index, i);
    }
  }.bind(this));
};

Garden.prototype.actorsDictionary = [{name: "Дедк", force: 1},
                           {name: "Бабк", force: 0.5},
                           {name: "Внучк", force: 0.3},
                           {name: "Жучк", force: 0.2},
                           {name: "Кошк", force: 0.1},
                           {name: "Мышк", force: 0.01}];
