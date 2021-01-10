<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="300px">
      <v-card>
        <v-card-title>
          <span class="headline">User Detail</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Name"
                  v-model="user.name"
                  :readonly="!edit"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Username"
                  v-model="user.username"
                  :readonly="!edit"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Address"
                  v-model="user.address"
                  :readonly="!edit"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="close">
            Close
          </v-btn>
          <v-btn color="success" @click="initUpdateUser" v-if="edit">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserForm",
  props: {
    dialog: {
      type: Boolean,
      value: false
    },
    user: {
      type: Object
    },
    edit: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    ...mapActions("users", ["updateUser"]),
    initUpdateUser() {
      this.updateUser(this.user);
      this.close();
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>
