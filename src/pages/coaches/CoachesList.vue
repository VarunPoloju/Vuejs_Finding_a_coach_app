<template>
  <section>FILTER</section>

  <section>
    <div class="controls"></div>
    <button>Refresh</button>
    <router-link to="/register">Register as a coach</router-link>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No coaches Found!!</h3>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      //first coaches - namespace name u can find in store/index.js file
      // second coaches - getter name u can find in src\store\modules\coaches\getters.js
      return this.$store.getters['coaches/coaches'];
    },

    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>
