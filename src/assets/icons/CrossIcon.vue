<template>
  <svg
    width="32"
    height="32"
    viewBox="0 0 450 450"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M295 225 433 88c20-20 20-50 0-70-8-10-20-18-33-18s-26 6-35 15L225 155 88 18C68-3 35-3 18 18 8 25 0 38 0 53s5 25 15 35l138 137L15 363c-7 10-15 22-15 37 0 13 5 25 15 35s23 15 35 15c13 0 25-5 35-15l138-137 137 137c20 20 53 20 70 0 20-20 20-52 0-70L295 225Z"
      :class="fillClass"
    />
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    fillClass: {
      type: String as PropType<string>,
    },
  },
  name: "CrossIcon",
});
</script>
