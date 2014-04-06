var TurnipTest = TestCase("TurnipTest");

TurnipTest.prototype.TURNIP_VALUE = 2;
TurnipTest.prototype.FORCE_HIGHER_THEN_VALUE = 3;
TurnipTest.prototype.FORCE_LOWER_THEN_VALUE = 1;

TurnipTest.prototype.setUp = function() {
  this.turnip = new Turnip();
};

TurnipTest.prototype.testPlantTurnipAndPull = function() {
  this.turnip.plant(this.TURNIP_VALUE);
  assertTrue(this.turnip.pull(this.FORCE_HIGHER_THEN_VALUE));
};

TurnipTest.prototype.testPlantTurnipAndCannotPull = function() {
  this.turnip.plant(this.TURNIP_VALUE);
  assertFalse(this.turnip.pull(this.FORCE_LOWER_THEN_VALUE));
};

TurnipTest.prototype.testPullTurnipEqualToForce = function() {
  this.turnip.plant(this.TURNIP_VALUE);
  assertTrue(this.turnip.pull(this.TURNIP_VALUE));
};