export default {
  coaches(state) {
    return state.coaches; //we'll get the coaches array data from the src\store\modules\coaches\index.js state() data
    // we cant access directly that data so we need to use getters.
    // and this coaches we are using in coachesList component for sending data there
  },

  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
