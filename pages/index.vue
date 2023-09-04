<template>
  <div class="q-pa-md fixed-center">
    <div class="text-h3 q-pa-md">
      Features
    </div>

    <div class="row justify-center">
      <div class="col">
        <template
          v-for="(item, index) in features"
          :key="index">
          <q-btn
            :href="item.link"
            :target="item.target"
            flat
            color="brand"
            :label="item.text" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface IList {
  target?: string,
  link? : string,
  text : string,
  color?: string,
}

const features: IList[] = [
  {
    target: '_blank',
    link  : 'https://nuxt.com',
    text  : 'Nuxt3',
  },
  {
    target: '_blank',
    link  : 'https://quasar.dev',
    text  : 'Quasar2',
  },
  {
    target: '_blank',
    link  : 'https://fonts.google.com/icons?icon.set=Material+Icons',
    text  : 'Material Icons',
  },
  { text: 'Hybrid Mobile' },
  { text: 'Composables' },
  { text: 'Eslint' },
  { text: 'Lodash' },
  { text: 'Layouts' },
]

</script>
