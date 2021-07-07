<template>
  <section>
    <v-container>
      <v-sheet
        rounded="lg"
        class="pa-3 pa-md-5"
      >
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="6"
            class="pa-2"
          >
            <h2 class="mt-7 dark-font">
              <center>
                {{ $t('tdhcmb').toUpperCase() }}
              </center>
            </h2>
            <p class="mt-10 mb-3 light-font">
              <ul>
                <li
                  v-for="item in items"
                  :key="item"
                >
                  {{ $t(item) }}
                </li>
              </ul>
            </p>

            <button class="hover-button font-weight-medium mt-3">
              {{ $t('about') }}
            </button>

          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="pa-2"
          >
            <v-img
              src="/statistics.svg"
              min-height="300"
              min-width="300"
            >
              <template v-slot:placeholder>
                <v-skeleton-loader
                  type="image"
                  min-width="300"
                  min-height="300"
                  max-width="400"
                  max-height="400"
                  class="mx-auto mt-12"
                />
              </template>
            </v-img>
          </v-col>
        </v-row>

        <v-alert
          type="info"
          max-width="95%"
          min-width="90%"
          border="left"
          text
          class="mx-auto my-16"
        >
          <center>
            <h3 class="mb-3"> {{ $t('advertisement') }} </h3>
          </center>
          <ul>
            <li> {{ $t('mainInfo1') }} </li>
            <li> {{ $t('mainInfo2') }} </li>
          </ul>
          <div
            style="border-top: 2px solid #2196f3;"
            class="mt-3 pt-3"
          >
            <span> {{ $t('advertisementText') }} </span>
            <ul class="mt-3">
              <li> {{ $t('adv1') }}: <a href="mailto: maliye_gozegcilik@exchange.gov.tm">maliye_gozegcilik@exchange.gov.tm</a> </li>
              <li> {{ $t('adv2') }}: <a href="mailto: hasaba_alys@exchange.gov.tm">mailto: hasaba_alys@exchange.gov.tm</a> </li>
              <li> {{ $t('adv3') }}: <a href="mailto: baha_seljeris@exchange.gov.tm">baha_seljeris@exchange.gov.tm</a> </li>
            </ul>
          </div>
        </v-alert>

        <v-row class="my-7">
          <v-col
            cols="12"
            md="6"
          >
            <v-img
              class="mx-auto"
              src="/newspaper.svg"
              min-width="300"
              min-height="300"
              max-width="400"
              max-height="400"
            >
              <template v-slot:placeholder>
                <v-skeleton-loader
                  type="image"
                  min-width="300"
                  min-height="300"
                  max-width="400"
                  max-height="400"
                  class="mx-auto mt-12"
                />
              </template>
            </v-img>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-row
              v-for="(item, i) in 3" 
              no-gutters 
              :key="i" 
              class="my-2 px-2"
              style="border-radius: 1px; border-left: 2px solid indigo;"
            >
              <div>
                <v-img src="/england.jpg" height="75" width="75"></v-img>
              </div>
              <div class="ml-2">
                <h3 class="dark-font text-justify">News {{ i + 1 }} </h3>
                <p class="light-font" style="font-size: 15px;">Lorem ipsum is simply dumy fasdfkhsd fasd</p>
              </div>
            </v-row>
            <v-btn
              color="#0A146E"
              plain
              class="mt-2"
            >
              {{ $t('readMore') }}
              <v-icon color="#0A146E">mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <converter class="my-5" />
        <contacts  class="my-5"/>

      </v-sheet>
    </v-container>
  </section>
</template>

<script>
import Contacts from '@/components/Contacts.vue'
import Converter from '@/components/Converter.vue'

export default {
  components: {
    Contacts,
    Converter,
  },
  head() {
    return {
      title: this.$t('homePage')
    }
  },
  data() {
    return {
      isLoading: true,
      items: ['carouselTitle1', 'carouselTitle2', 'carouselTitle3', 'carouselTitle4']
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }
}
</script>

<style>
  .filled-btn {
    background: #3D8AFF;
    color: white;
  }
  .v-application--is-ltr .v-alert__icon  {
    margin-left: -23px;
  }
  .hover-button {
    border: 1px solid #0A146E;
    background-color: #0A146E;
    color: white;
    padding: 8px 16px;
    border-radius: 7px;
    text-transform: uppercase;
  }
  .hover-button:hover {
    animation: button .5s forwards;
  }
  .dark-blue {
    background-color: #0A146E;
    background-image: url('/wave2.svg');
    background-size: cover;
    transform: scale(0.6, -0.6) rotate(25deg);
  }
  .outer {
    height: 300px;
    background-color: #0A146E;
  }
  .dark-font {
    color: #0A146E;
  }
  .light-font {
    color: #555;
  }
  @keyframes button {
    to {
      border: 1px solid #0A146E;
      color: #0A146E;
      background-color: transparent;
    }
  }
</style>