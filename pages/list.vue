<template>
  <div class="q-pa-md">
    <div class="text-h3 q-pa-md">
      Fetch API
    </div>
    <q-skeleton
      v-if="isLoading"
      type="QBtn" />
    <q-btn
      v-else
      flat
      color="brand"
      @click="onRefresh">
      Reload
    </q-btn>

    <template v-if="isLoading">
      <q-item
        v-for="n in 3"
        :key="n">
        <q-item-section>
          <q-item-label>
            <q-skeleton type="rect" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </template>

    <template v-if="!isLoading">
      <div style="max-width: 100%">
        <q-list
          v-for="(item, index) in user"
          :key="index">
          <q-item>
            <q-item-section>
              <q-item-label>{{ item.name }}</q-item-label>
              <q-item-label caption>
                {{ item.email }}- {{ item.company.catchPhrase }}
              </q-item-label>
            </q-item-section>

            <q-item-section
              side
              top>
              <q-item-label caption>
                {{ item.website }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </template>
  </div>
</template>

<script setup>
const url = useRuntimeConfig().public.baseUrl

const { data: user, refresh: onRefresh, pending: isLoading } = useFetch(`${url}/users`)

</script>
