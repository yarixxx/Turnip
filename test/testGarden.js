var GardenTest = TestCase("TurnipGarden");

GardenTest.prototype.setUp = function() {
  this.garden = new Garden();
};

GardenTest.prototype.testPlantTurnipAndPull = function() {
  this.garden.pullActorWithHighestForce();
};
