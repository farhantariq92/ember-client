import Component from '@ember/component';

export default Component.extend({
  firstName: 'farhan',
  lastName: 'tariq',
  actions: {
    press(val) {
      alert('User entered: ' + val);
    }
  }
});
