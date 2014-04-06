var ActorTest = TestCase("ActorTest");

ActorTest.prototype.setUp = function () {
  this.garden = mock(Garden);
  this.turnip = mock(Turnip);
  this.helpActor = mock(Actor);
  when(this.garden.getTurnipSeed)().thenReturn(this.turnip);
  when(this.garden.callTheBestActor)().thenReturn(this.helpActor);
  this.actor = new Actor();
  this.actor.name = "name";
  this.actor.force = 2;
  this.actor.setGarden(this.garden);
};

ActorTest.prototype.TURNIP_VALUE = 2;

ActorTest.prototype.testActorPlantTurnip = function() {
  this.actor.plantTurnip(this.TURNIP_VALUE);
  verify(this.garden, once()).getTurnipSeed();
  verify(this.turnip, once()).plant(this.TURNIP_VALUE);
};

ActorTest.prototype.testActorPullTurnip = function() {
  this.actor.plantTurnip(this.TURNIP_VALUE);
  this.actor.pullTurnip(this.turnip, 1);
  verify(this.turnip, once()).pull(3);
};

ActorTest.prototype.testActorPullTurnipWithHelper = function() {
  this.actor.plantTurnip(5);
  this.actor.pullTurnip(this.turnip, 0);
  verify(this.turnip, once()).pull(2);
};