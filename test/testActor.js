var ActorTest = TestCase("ActorTest");

ActorTest.prototype.setUp = function () {
  this.storyTeller = new StoryTeller();
  console.log("New story...");
  this.dispatcher = mock(EventDispatcher);
};

ActorTest.prototype.TURNIP_VALUE = 2;

ActorTest.prototype.testActorPlantTurnip = function() {
  this.givenGarden(null);
  this.givenActor("Hero1", 2, this.garden, this.dispatcher);
  this.givenTurnipPossibleToPullOut(true);
  this.actor.plantTurnip(2);
  verify(this.garden, once()).getTurnipSeed();
  verify(this.turnip, once()).plant(this.TURNIP_VALUE);
  verify(this.garden, never()).pullTheTurnip(this.turnip);
  verify(this.turnip, never()).pull(2);
  verify(this.garden, never()).callTheBestActor();
  verify(this.dispatcher, never()).triggerEvent(Actor.TRY_AGAIN);
};

ActorTest.prototype.testActorPullTurnip = function() {
  this.givenGarden(null);
  this.givenActor("Hero2", 2, this.garden, this.dispatcher);
  this.givenTurnipPossibleToPullOut(true);
  this.actor.plantTurnip(1);
  this.actor.pullTurnip(this.turnip, 0);
  verify(this.turnip, once()).pull(2);
  verify(this.garden, once()).pullTheTurnip(this.turnip);
  verify(this.garden, never()).callTheBestActor();
  verify(this.dispatcher, never()).triggerEvent(Actor.TRY_AGAIN);
};

ActorTest.prototype.testActorPullTurnipAndCallHelper = function() {
  this.givenGarden(null);
  this.givenActor("Hero3", 2, this.garden, this.dispatcher);
  this.givenTurnipPossibleToPullOut(false);
  this.actor.plantTurnip(2);
  this.actor.pullTurnip(this.turnip, 2);
  verify(this.turnip, once()).pull(4);
  verify(this.garden, once()).callTheBestActor();
  verify(this.garden, never()).pullTheTurnip(this.turnip);
  verify(this.dispatcher, never()).triggerEvent(Actor.TRY_AGAIN);
};

ActorTest.prototype.testActorPullTurnipAndCallValidHelper = function() {
    this.givenHelpActor("HelpActor");
    this.givenGarden(this.helpActor);
    this.givenActor("Hero4", 2, this.garden, this.dispatcher);
    this.givenTurnipPossibleToPullOut(false);
    this.actor.plantTurnip(2);
    this.actor.pullTurnip(this.turnip, 2);
    verify(this.turnip, once()).pull(4);
    verify(this.garden, once()).callTheBestActor();
    verify(this.dispatcher, once()).triggerEvent(Actor.TRY_AGAIN);
    verify(this.garden, never()).pullTheTurnip(this.turnip);
};

ActorTest.prototype.testActorPullTurnipWithHelpActor = function() {
    this.givenHelpActor("HelpActor");
    this.givenGarden(this.helpActor);
    this.givenActor("Hero4", 2, this.garden, this.dispatcher);
    this.givenTurnipPossibleToPullOut(false);
    this.actor.helpActor = this.helpActor;
    this.actor.plantTurnip(2);
    this.actor.pullTurnip(this.turnip, 2);
    verify(this.helpActor, once()).pullTurnip(this.turnip, 4);
    verify(this.turnip, never()).pull(4);
    verify(this.garden, never()).callTheBestActor();
    verify(this.dispatcher, never()).triggerEvent(Actor.TRY_AGAIN);
};

ActorTest.prototype.givenGarden = function(helpActor) {
    this.garden = mock(Garden);
    when(this.garden.callTheBestActor)().thenReturn(helpActor);
};

ActorTest.prototype.givenActor = function(name, force, garden, dispatcher) {
    this.actor = new Actor();
    this.actor.name = name;
    this.actor.force = force;
    this.actor.setGarden(garden);
    this.actor.setEventDispatcher(dispatcher);
    this.actor.setStoryTeller(this.storyTeller);
};

ActorTest.prototype.givenTurnipPossibleToPullOut = function(canPullOut) {
    this.turnip = mock(Turnip);
    when(this.turnip.pull)().thenReturn(canPullOut);
    when(this.garden.getTurnipSeed)().thenReturn(this.turnip);
};

ActorTest.prototype.givenHelpActor = function(name) {
  this.helpActor = mock(Actor);
  when(this.helpActor.getName)().thenReturn(name);
};