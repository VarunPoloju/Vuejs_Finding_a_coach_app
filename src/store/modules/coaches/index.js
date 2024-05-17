/**
 *
 * this is the file where we merge all the coach related data like mutations, actions, getters
 */

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Varun',
          lastName: 'Poloju',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Varun Poloju and I've worked as a frontend web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Tarun',
          lastName: 'Poloju',
          areas: ['frontend', 'career'],
          description:
            'I am Tharun and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

// we merge this file in the main store i.e main index.js(root index)
