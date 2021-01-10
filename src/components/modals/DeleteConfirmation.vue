<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="325px">
      <v-card>
        <v-card-title class="headline">
          Delete Confirmation
        </v-card-title>
        <v-card-text
          >Are you sure want to delete
          <span class="font-weight-bold">{{ user.name }}</span> ?</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="close">
            Cancel
          </v-btn>
          <v-btn color="error" @click="initDeleteUser">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DeleteConfirmation",
  props: {
    dialog: {
      type: Boolean,
      value: false
    },
    user: {
      type: Object
    }
  },
  methods: {
    ...mapActions("users", ["updateUser", "deleteUserById"]),
    initDeleteUser() {
      this.deleteUserById(this.user.id);
      this.close();
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>
