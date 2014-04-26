StoryTeller = function(listener) {
  this.listener = listener;
};

StoryTeller.prototype.tell = function(sentence) {
  if (!this.listener) {
    console.log(sentence);
    return;
  }

  this.listener.innerHTML += sentence + "<br/>";
};