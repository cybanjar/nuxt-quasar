<template>
  <div class="text-h3 q-pa-md">
    Custom theme brand
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      color="brand"
      text-color="white"
      label="Brand" />
    <q-btn
      color="primary"
      label="Loading"
      @click="load" />
  </div>
</template>

<script setup lang="ts">
const loading = useLoading()

onMounted(() => {
  load()
})

function load () {
  loading.show()

  setTimeout(() => {
    loading.hide()
  }, 2000)
}

</script>
