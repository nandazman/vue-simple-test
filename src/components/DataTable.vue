<template>
  <v-table
    :columns="columns"
    :table-data="users"
    :show-vertical-border="false"
    row-hover-color="#eee"
    row-click-color="#edf7ff"
    @sort-change="sortChange"
    error-content="No Data"
    :select-change="selectChange"
    :select-all="selectChange"
    @on-custom-comp="actions"
    is-horizontal-resize
  ></v-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DataTable",
  data() {
    return {
      selected: [],
      sort: {
        name: "asc",
        username: "asc"
      },
      columns: [
        {
          type: "selection",
          field: "selection",
          title: "Select",
          width: 100,
          titleAlign: "center",
          columnAlign: "center",
          isResize: true
        },
        {
          field: "name",
          title: "Name",
          width: 250,
          titleAlign: "left",
          columnAlign: "left",
          orderBy: "",
          componentName: "detail",
          isResize: true
        },
        {
          field: "username",
          title: "Username",
          width: 200,
          titleAlign: "left",
          columnAlign: "left",
          orderBy: "",
          componentName: "detail",
          isResize: true
        },
        {
          field: "address",
          title: "Address",
          width: 300,
          titleAlign: "left",
          columnAlign: "left",
          isResize: true
        },
        {
          field: "action",
          title: "Action",
          width: 150,
          titleAlign: "center",
          columnAlign: "center",
          componentName: "actions",
          isResize: true
        }
      ]
    };
  },
  methods: {
    ...mapActions("users", ["sortUser", "deleteUserById"]),
    sortChange(params) {
      if (this.sort.name !== params.name) {
        this.sortUser({ key: "name", type: params.name });
        this.sort.name = params.name;
      }

      if (this.sort.username !== params.username) {
        this.sortUser({ key: "username", type: params.username });
        this.sort.username = params.username;
      }
    },
    selectChange(selection) {
      this.selected = selection.map(item => item.id);
    },
    actions(params) {
      const data = { ...params.rowData };
      if (params.type === "delete") {
        this.$emit("delete", data);
      } else if (params.type === "edit") {
        data.edit = true;
        this.$emit("detail", data);
      } else if (params.type === "detail") {
        data.edit = false;
        this.$emit("detail", data);
      }
    }
  },
  computed: {
    ...mapGetters({
      users: "users/getUsers"
    })
  }
};
</script>
