<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  title: { type: String, default: 'Support This Project' },
  description: { type: String, default: 'If you find these best practices helpful, consider sponsoring to keep the project maintained and growing.' },
  link: { type: String, default: 'https://github.com/sponsors/pratik227' },
  buttonText: { type: String, default: 'Become a Sponsor' }
})
</script>

<template>
  <div class="sponsor-card">
    <div class="sponsor-glow" />
    <div class="sponsor-content">
      <div class="sponsor-icon-wrap">
        <Icon icon="tabler:heart-handshake" width="32" height="32" />
      </div>
      <h3 class="sponsor-title">{{ title }}</h3>
      <p class="sponsor-desc">{{ description }}</p>
      <a :href="link" target="_blank" rel="noopener" class="sponsor-btn">
        <Icon icon="tabler:heart-filled" width="18" height="18" />
        <span>{{ buttonText }}</span>
      </a>
      <div class="sponsor-tiers">
        <div class="tier">
          <Icon icon="tabler:coffee" width="20" height="20" />
          <span>Buy a Coffee</span>
        </div>
        <div class="tier">
          <Icon icon="tabler:rocket" width="20" height="20" />
          <span>Monthly Supporter</span>
        </div>
        <div class="tier">
          <Icon icon="tabler:diamond" width="20" height="20" />
          <span>Gold Sponsor</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sponsor-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 32px;
  margin: 24px 0;
  text-align: center;
}

.sponsor-glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.sponsor-content {
  position: relative;
  z-index: 1;
}

.sponsor-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(219, 39, 119, 0.15));
  color: #ec4899;
  margin-bottom: 16px;
}

.sponsor-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.sponsor-desc {
  font-size: 15px;
  color: var(--vp-c-text-2);
  max-width: 480px;
  margin: 0 auto 20px;
  line-height: 1.6;
}

.sponsor-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 10px;
  background: linear-gradient(135deg, #ec4899, #db2777);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(236, 72, 153, 0.3);
}

.sponsor-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
}

.sponsor-tiers {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.tier {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-3);
  padding: 6px 14px;
  border-radius: 8px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

@media (max-width: 640px) {
  .sponsor-tiers {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
}
</style>
