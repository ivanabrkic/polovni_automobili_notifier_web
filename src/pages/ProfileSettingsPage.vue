<template>
  <q-page class="row items-center justify-evenly">
    <ProfileSettings/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfileSettings from 'components/ProfileSettings.vue';

export default defineComponent({
  name: 'ProfileSettingsPage',
  components: {ProfileSettings},
});
</script>
