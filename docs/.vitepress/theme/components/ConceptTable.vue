<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  concepts: {
    type: Array,
    default: () => []
    // Each: { name, icon, description, link }
  }
})
</script>

<template>
  <table class="concept-table">
    <thead>
      <tr>
        <th></th>
        <th>Concept</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="c in concepts" :key="c.name">
        <td style="text-align: center; width: 48px;">
          <Icon :icon="c.icon" width="20" height="20" style="color: var(--vp-c-brand-1);" />
        </td>
        <td class="concept-name">
          <a v-if="c.link" :href="c.link">{{ c.name }}</a>
          <span v-else>{{ c.name }}</span>
        </td>
        <td>{{ c.description }}</td>
      </tr>
    </tbody>
  </table>
</template>
