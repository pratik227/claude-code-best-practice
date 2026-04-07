<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' },
  maxWidth: { type: String, default: '100%' }
})
</script>

<template>
  <figure class="hero-image">
    <img :src="src" :alt="alt" :style="{ maxWidth }" />
    <figcaption v-if="caption" style="text-align: center; margin-top: 8px; color: var(--vp-c-text-3); font-size: 13px;">
      {{ caption }}
    </figcaption>
  </figure>
</template>
