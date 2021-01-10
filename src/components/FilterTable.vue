<template>
  <div class="d-flex justify-space-end">
    <v-text-field
      @keyup="updateFilter(filter)"
      label="Filter"
      v-model="filter"
      solo
    ></v-text-field>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTable",
  data() {
    return {
      filter: ""
    };
  },
  methods: {
    ...mapActions("users", ["updateFilter"])
  }
};
</script>
