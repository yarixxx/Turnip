var ActorTest = TestCase("ActorTest");

ActorTest.prototype.setUp = function () {
  this.garden = mock(Garden);
  this.turnip = mock(Turnip);
  when(this.garden.getTurnipSeed)().thenReturn(this.turnip);
  this.actor = new Actor({name:"name", force: 2});
  this.actor.setGarden(this.garden);
};

TurnipTest.prototype.TURNIP_VALUE = 2;

ActorTest.prototype.testSimpleActor = function() {
  this.actor.plantTurnip(this.TURNIP_VALUE);
  verify(this.garden, once()).getTurnipSeed();
  verify(this.turnip, once()).plant(this.TURNIP_VALUE);
};
