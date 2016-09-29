import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    Ember.run.later(function() {
      Ember.$('.question-box').fadeIn('slow');
    }, 1000);
  },
  actions: {
    flipCorrect () {
      Ember.$('.question-box').toggleClass('flipped');
      Ember.$('.quiz-question').toggleClass('question-hidden');
      setTimeout(function(){
         Ember.$('.correct-answer-hidden').toggleClass('answer-shown');
       },500);
      Ember.run.later(this, function() {
        this.transitionTo('q4');
      }, 7000);
},
    flipIncorrect () {
      Ember.$('.question-box').toggleClass('flipped');
      Ember.$('.quiz-question').toggleClass('question-hidden');
      setTimeout(function(){
         Ember.$('.incorrect-answer-hidden').toggleClass('answer-shown');
       },500);
      Ember.run.later(this, function() {
        this.transitionTo('q4');
      }, 7000);
    },
  },
});
