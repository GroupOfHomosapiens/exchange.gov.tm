<template>
<v-container>
  <v-sheet 
    rounded="lg"
    class="pa-2"
  >

    <introductory-blog
      :title="$t('aboutExchange')"
      :text="$t('aboutText1')"
      image="/about1.png"
      :hasFile="true"
    />

    <v-row
      no-gutters
      class="d-flex justify-center align-center my-5"
    >

      <v-col
        cols="11"
        md="5"
        class="text-justify pa-1"
      >
        <h3
          class="primary--text mb-5"
          align="center"
        >
          {{ $t('spectrumOfActivity') }}
        </h3>

        {{ $t('aboutText2') }}
      </v-col>

      <v-col
        md="6"
        class="pa-3 d-none d-md-flex justify-end"
        align="center"
      >
        <div>
        <v-img
          src="/investing.svg"
          max-height="400"
          max-width="400"
        >
          <template v-slot:placeholder>
            <v-skeleton-loader
              type="image"
            ></v-skeleton-loader>
          </template>
        </v-img>
        </div>
      </v-col>

    </v-row>

    <introductory-blue
      :title="$t('objectiveAndTask')"
      :text="$t('aboutText3')"
      backgroundSkew="transform: skewY(5deg);"
      fontSkew="transform: skewY(-5deg);"
    />

    <introductory-blog
      :title="$t('qualifiedSpecialists')"
      :text="$t('aboutText4')"
      image="about4.png"
    />

    <v-row
      no-gutters
      class="d-flex justify-center align-center my-5"
    >
      
      <v-col
        cols="10"
        md="6"
        class="pa-3 order-2 order-md-0"
        align="center"
        justify="center"
      >
        <v-img
          src="/electronic.svg"
          max-height="400"
          max-width="400"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>

      <v-col
        cols="10"
        md="5"
        class="text-justify pa-1"
      >
        <h3
          class="primary--text"
          align="center"
        >
          {{ $t('electronicDocumentCirculation') }}
        </h3>

        {{ $t('aboutText5') }}
      </v-col>

    </v-row>

    <introductory-blog
      :title="$t('exportOfProducts')"
      :text="$t('aboutText6')"
      image="/about3.png"
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
      title: this.$t('about')
    }
  }
}
</script>