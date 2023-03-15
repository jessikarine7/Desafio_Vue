<template>
  <div>
    <v-btn class="btn" @click="onClick">
      aaaah
      <slot></slot>
    </v-btn>

    <v-text-field></v-text-field>
  </div>
</template>

<script lang="ts">
// import { VBtn } from 'vuetify/lib/components'
export default {
  // components: { VBtn },
  name: 'my-button',

  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.btn {
  border: 1px solid #eee;
  border-radius: 3px;
  /* background-color: red !important; */
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
