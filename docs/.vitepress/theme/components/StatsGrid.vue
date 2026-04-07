<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  stats: {
    type: Array,
    default: () => []
    // Each: { icon, value, label, color? }
  }
})
</script>

<template>
  <div class="stats-grid">
    <div v-for="stat in stats" :key="stat.label" class="stat-card">
      <div class="stat-icon" :style="{ color: stat.color || 'var(--vp-c-brand-1)' }">
        <Icon :icon="stat.icon" width="24" height="24" />
      </div>
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat-label">{{ stat.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin: 20px 0;
}

.stat-card {
  padding: 20px 16px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-align: center;
  transition: all 0.25s ease;
}

.stat-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.stat-icon {
  margin-bottom: 8px;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.stat-label {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
