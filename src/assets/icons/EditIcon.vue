<template>
  <svg
    width="30"
    height="30"
    viewBox="0 0 734 734"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clip-path="url(#a)"
      :class="strokeClass"
      stroke="#000"
      stroke-width="66.7"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M634 500v134a67 67 0 0 1-67 66H100a67 67 0 0 1-66-66V167a67 67 0 0 1 66-67h134"
      />
      <path d="m384 494 316-320L560 34 244 350l-10 150 150-6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h734v734H0z" />
      </clipPath>
    </defs>
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    strokeClass: {
      type: String as PropType<string>,
    },
  },
  name: "EditIcon",
});
</script>
