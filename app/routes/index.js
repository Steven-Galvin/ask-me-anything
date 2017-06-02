import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      if (confirm('Are you sure you want to delete this rental?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
