/**
 * in this file we set up the store in general
 *
 *
 */

import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
