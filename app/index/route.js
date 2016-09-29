import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    Ember.run.later(function() {
      Ember.$('.question-box').fadeIn('slow');
    }, 1000);
  },
});
