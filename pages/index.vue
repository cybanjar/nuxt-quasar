<template>
  <div>
    <q-btn
      color="brand"
      label="Button"
      @click="onRefresh" />
    
      <pre>{{ user }}</pre>
  </div>
</template>

<script setup>
// definePageMeta({ layout: false })

const { data: user, refresh: onRefresh } = useFetching('/users')
</script>
