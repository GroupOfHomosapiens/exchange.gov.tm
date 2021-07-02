<template>
  <v-sheet
    rounded="lg"
    class="pa-2"
  >
    <introductory-blog
      :title="$t('financeMonitoring')"
      :text="$t('financeMonitoringText')"
      image="/finance-monitoring.png"
    />

    <introductory-blue
      :title="$t('financeMonitoring')"
      :text="$t('financeMonitoringText')"
      image="/finance-monitoring.png"
    />

    <introductory-blog
      :title="$t('riskLevelIdentification')"
      :text="$t('riskLevelIdentificationText')"
      image="/riskLevel.png"
    />
  </v-sheet>
</template>

<script>
import IntroductoryBlog from '@/components/IntroductoryBlog.vue'
import IntroductoryBlue from '@/components/IntroductoryBlue.vue'

export default {
  components: {
    IntroductoryBlog,
    IntroductoryBlue,
  },
  head() {
    return {
      title: this.$t('financeMonitoring')
    }
  }
}
</script>