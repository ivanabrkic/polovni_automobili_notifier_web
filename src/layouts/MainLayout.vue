<template>
  <q-layout view="lHh Lpr lFf" container style="height: 100vh" class="shadow-2">
    <q-header elevated class="bg-cyan-9">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Polovni Automobili Notifier
        </q-toolbar-title>

        <div>v1.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list style="margin-top: 250px;"  padding class="menu-list">
        <q-item-label
          header
        >
          Meni
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 250px">
        <div class="absolute-top bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="/dist/spa/assets/vlada.png">
          </q-avatar>
          <div class="text-weight-bold">Vladimir Popovic</div>
          <div>vladimirpopovic@live.com</div>
        </div>
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../../dist/spa/assets/ivana.png">
          </q-avatar>
          <div class="text-weight-bold">Ivana Brkic</div>
          <div>ivanabrkic192@gmail.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Automobili',
    caption: 'Svi oglasi',
    icon: 'directions_car',
    link: '/'
  },
  {
    title: 'Omiljeni',
    caption: 'Omiljeni oglasi',
    icon: 'star',
    link: '/favorite'
  },
  {
    title: 'Podesavanja',
    caption: 'Podesavanja aplikacije',
    icon: 'settings_applications',
    link: '/settings'
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
