import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('q1');
  this.route('q1-correct');
  this.route('q1-incorrect');
  this.route('q2');
  this.route('q2-correct');
  this.route('q2-incorrect');
  this.route('q3');
  this.route('q3-correct');
  this.route('q3-incorrect');
  this.route('q4');
  this.route('q4-correct');
  this.route('q4-incorrect');
  this.route('q5');
  this.route('q5-correct');
  this.route('q5-incorrect');
});

export default Router;
