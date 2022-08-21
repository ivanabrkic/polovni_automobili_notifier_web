<template>
  <q-page class="row items-center justify-evenly">
    <FavoriteAds/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FavoriteAds from 'components/FavoriteAds.vue';

export default defineComponent({
  name: 'FavoriteAdsPage',
  components: {FavoriteAds},
});
</script>
