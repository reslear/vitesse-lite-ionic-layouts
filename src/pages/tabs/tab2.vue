<script lang="ts" setup>
import { onIonViewDidEnter } from '@ionic/vue'

const rid = ref('')

onIonViewDidEnter(() => {
  rid.value = Math.random().toString(36).slice(-6)
})
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img :src="`https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg?${rid}`" alt="logo" class="rounded h-10 w-10">
          Tab 2
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">
            Tab 2
          </ion-title>
        </ion-toolbar>
      </ion-header>

      Tab 2 page
    </ion-content>
  </ion-page>
</template>

<route lang="yaml">
</route>
