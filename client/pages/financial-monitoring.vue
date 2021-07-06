<template>
  <v-container>
    <v-sheet
      rounded="lg"
      class="pa-2"
    >
      <introductory-blog
        :title="$t('financeMonitoring')"
        :text="$t('financeMonitoringText')"
        image="/finance-monitoring.png"
        :hasFile="true"
      />

      <introductory-blue
        :title="$t('financeMonitoring')"
        :text="$t('financeMonitoringText')"
      />

      <introductory-blog
        :title="$t('riskLevelIdentification')"
        :text="$t('riskLevelIdentificationText')"
        image="/riskLevel.png"
      />

      <introductory-blue
        :title="$t('financeMonitoring')"
        :text="$t('financeMonitoringText')"
        backgroundSkew="transform: skewY(5deg);"
        fontSkew="transform: skewY(-5deg);"
      />
    </v-sheet>
  </v-container>
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