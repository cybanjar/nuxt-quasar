<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer" />

        <q-toolbar-title>
          NQ
        </q-toolbar-title>

        <q-btn
          flat
          round
          :icon="isDarkIcon"
          @click="isMode">
          <q-tooltip>Dark Mode</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      bordered>
      <Menu />
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
const $q             = useQuasar()
const leftDrawerOpen = ref(false)

onMounted(() => {
  if ($q.dark.isActive === false)
    $q.dark.toggle()
})

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function isMode () {
  $q.dark.toggle()
}

const isDarkIcon = computed(() => {
  return $q.dark.mode ? 'dark_mode' : 'light_mode'
})

</script>
