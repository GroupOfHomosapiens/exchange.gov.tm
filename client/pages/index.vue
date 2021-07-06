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
              Lorem ipsum dolor sit, amet consectetur. Autem rerum eaque sunt aliquam, quam consectetur veniam molestiae. Consectetur provident aut quam esse inventore molestias nobis facilis est enim. Nemo, nesciunt!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia possimus debitis, eum soluta dolor doloribus labore. Aperiam voluptates nonemo, ducimus, facilis id?
            </p>

            <button class="hover-button font-weight-medium mt-3">
              {{ $t('contactUs') }}
            </button>

          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="pa-2"
          >
            <v-img src="/statistics.svg"></v-img>
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
          <ul>
            <li>
              {{ $t('mainInfo1') }}
            </li>
            <li>
              {{ $t('mainInfo2') }}
            </li>
          </ul>
        </v-alert>

        <v-row class="my-7">
          <v-col
            cols="12"
            md="6"
          >
            <v-img
              class="mx-auto"
              src="/newspaper.svg"
              max-width="350"
            ></v-img>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-row
              v-for="(item, i) in 3" 
              no-gutters 
              :key="i" 
              class="my-1"
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
              outlined
              color="#0A146E"
              block
              class="mt-2"
            >
              {{ $t('readMore') }}
              <v-icon color="#0A146E">mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <!-- <v-row class="d-flex justify-center my-2">
          <v-card max-width="250" v-for="item in items" :key="item" class="mx-3">
            <v-card-title>{{ $t(item) }}</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet is simply dummy text for printing</v-card-text>
          </v-card>
        </v-row> -->
        <contacts />
      </v-sheet>
    </v-container>
  <!-- <div class="mb-3 dark-blue">
    <div style="background-color: rgba(0,0,0, .5);" class="fill-height">
      <v-container>

      <v-card
        height="400px"
        class="rounded-lg mt-10"
      >
        <div>
          <v-img src="/dollar-euro.svg" height="50" width="50px"></v-img>
          Compare
        </div>
      </v-card>
      </v-container>
    </div>
  </div> -->
  </section>
</template>

<script>
import Contacts from '@/components/Contacts.vue'

export default {
  components: {
    Contacts,
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