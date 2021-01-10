<template>
  <div class="home pa-5">
    <h1 class="text-center pa-5">Mugiwara Pirates</h1>
    <v-container style="max-width: 1001px">
      <v-row class="text-center" align="center" justify="end">
        <v-col sm="4" md="3" class="pa-0">
          <FilterTable />
        </v-col>
      </v-row>
      <v-row class="text-center" align="center" justify="center">
        <DataTable
          v-on:delete="showDeleteConfirmation"
          v-on:detail="showDetail"
        />
      </v-row>
      <UserForm
        :dialog="dialogForm"
        :user="selectedUser"
        :edit="edit"
        v-on:close="dialogForm = false"
      />
      <DeleteConfirmation
        :dialog="dialogDelete"
        :user="selectedUser"
        v-on:close="dialogDelete = false"
      />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";
import UserForm from "@/components/modals/UserForm.vue";
import DeleteConfirmation from "@/components/modals/DeleteConfirmation.vue";
import FilterTable from "@/components/FilterTable.vue";

export default {
  name: "Home",
  components: {
    DataTable,
    UserForm,
    FilterTable,
    DeleteConfirmation
  },
  data() {
    return {
      dialogForm: false,
      dialogDelete: false,
      selectedUser: {},
      edit: false
    };
  },
  methods: {
    showDeleteConfirmation(data) {
      this.selectedUser = data;
      this.dialogDelete = true;
    },
    showDetail(data) {
      this.selectedUser = data;
      this.dialogForm = true;
      this.edit = data.edit;
    }
  }
};
</script>
