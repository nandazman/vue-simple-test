<template>
  <div class="d-flex justify-space-around">
    <a @click.stop.prevent="update(rowData, index)">Update</a>
    <a @click.stop.prevent="deleteRow(rowData, index)">Delete</a>
  </div>
</template>

<script>
export default {
  name: "ActionDataTable",
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
    update() {
      const params = { type: "edit", rowData: this.rowData };
      this.$emit("on-custom-comp", params);
    },

    deleteRow() {
      const params = { type: "delete", rowData: this.rowData };
      this.$emit("on-custom-comp", params);
    }
  }
};
</script>
