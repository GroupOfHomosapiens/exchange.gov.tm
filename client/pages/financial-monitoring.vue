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
  </v-sheet>
</template>

<script>
import IntroductoryBlog from '@/components/IntroductoryBlog.vue'

export default {
  components: {
    IntroductoryBlog,
  },
  head() {
    return {
      title: this.$t('financeMonitoring')
    }
  }
}
</script>