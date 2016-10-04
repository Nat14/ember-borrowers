import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('friend');
  // },
  queryParams: {
    sortBy: {
      refreshModel: true
    },
    sortAscending: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('friend', params);
  }
});
