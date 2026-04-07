<script setup>
defineProps({
  badges: {
    type: Array,
    default: () => []
    // Each badge: { text: string, type: 'primary' | 'success' | 'info' | 'warning' | 'beta' }
  }
})
</script>

<template>
  <div class="badge-row">
    <span
      v-for="badge in badges"
      :key="badge.text"
      :class="['badge', `badge--${badge.type || 'primary'}`]"
    >
      {{ badge.text }}
    </span>
  </div>
</template>
