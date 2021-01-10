<template>
  <a @click.stop.prevent="detail(rowData, index)" title="detail">
    {{ rowData[field] }}
  </a>
</template>

<script>
export default {
  name: "ActionDetail",
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    detail() {
      const params = {
        type: "detail",
        index: this.index,
        rowData: this.rowData
      };
      this.$emit("on-custom-comp", params);
    }
  }
};
</script>
