<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { moon, sunny } from 'ionicons/icons'

const isDark = useDark({
  valueDark: 'ion-palette-dark',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <IonFooter>
    <nav class="py-2 flex gap-2 items-center justify-center">
      <IonButton fill="clear" @click="toggleDark()">
        <IonIcon :icon="isDark ? sunny : moon" />
      </IonButton>

      <a
        i-carbon-logo-github
        class="text-black dark:text-white"
        rel="noreferrer"
        href="https://github.com/antfu-collective/vitesse-lite"
        target="_blank"
        title="GitHub"
      />
    </nav>

    <slot />
  </IonFooter>
</template>
