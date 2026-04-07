<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  icon: { type: String, default: 'tabler:code' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  link: { type: String, default: '' }
})
</script>

<template>
  <a :href="link" class="feature-card-link" :class="{ 'no-link': !link }">
    <div class="feature-card">
      <div class="icon">
        <Icon :icon="icon" width="24" height="24" />
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
.feature-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
.feature-card-link.no-link {
  cursor: default;
}
</style>
