<script setup lang="ts">
import { library, playCircle, radio, search } from 'ionicons/icons'
</script>

<template>
  <ion-page>
    <ion-tabs>
      <div slot="top">
        123
      </div>
      <ion-router-outlet />
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/tab1">
          <ion-icon :icon="playCircle" />
          <ion-label>Listen now</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/tabs/tab2">
          <ion-icon :icon="radio" />
          <ion-label>Radio</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
