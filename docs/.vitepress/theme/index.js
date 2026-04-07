import DefaultTheme from 'vitepress/theme'
import './custom.css'
import FeatureCard from './components/FeatureCard.vue'
import BadgeRow from './components/BadgeRow.vue'
import ConceptTable from './components/ConceptTable.vue'
import HeroImage from './components/HeroImage.vue'
import SponsorCard from './components/SponsorCard.vue'
import StatsGrid from './components/StatsGrid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FeatureCard', FeatureCard)
    app.component('BadgeRow', BadgeRow)
    app.component('ConceptTable', ConceptTable)
    app.component('HeroImage', HeroImage)
    app.component('SponsorCard', SponsorCard)
    app.component('StatsGrid', StatsGrid)
  }
}
