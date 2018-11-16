import Component from '@ember/component';
import { w } from '@ember/string';

export default Component.extend({

  init () {

    this._super(...arguments);

    // this.fruits = ['apple', 'orange', 'grape'];

    this.fruits = w(this.attrs.fruits);
  },
  actions: {
    add(val) {

      this.get('fruits').pushObject(val);

    }
  }

});
