<template>
  <q-page class="row mdi-align-horizontal-center justify-evenly">
   <AllAdsPreview/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AllAdsPreview from 'components/AllAdsPreview.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {AllAdsPreview},
});
</script>
