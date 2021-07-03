<template>
  <v-row>
    <v-col 
      cols="12"
      md="9"
    >
      <v-sheet
        rounded="lg"
        min-height="1000"
        style="overflow: hidden;"
      >
      <div
        style="min-height: 550px;"
        class="outer"
      >
        <div class="inner" style="min-height: 500px;">
          <div class="pt-10">
            <center class="text-h4 mt-16 font-weight-bold primary--text" style="font-family: 'operator mono' !important;">
              START INVESTING TODAY
            </center>
            <div style="max-width: 500px;" class="mx-auto">
              <center class="mt-10 mb-5">

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoeligendi fugit sunt! Consequatur fugiat quas hic quaerat nisi iste nesciunt corporis ex, eos velit ipsam nulla sapiente.
              </center>
              <center>

            <v-btn color="primary lighten-1" elevation="0" class="rounded-lg mx-2">Contact us</v-btn>
            <v-btn color="primary lighten-1" outlined class="rounded-lg mx-2">About us</v-btn>
              </center>
            </div>

          </div>
          </div>
      </div>
      
      <v-row
        no-gutters
        class="my-5"
      >
        <v-col
          cols="12"
          sm="6"
          class="pa-5"
        >
          <v-img src="/investing.svg"></v-img>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="pa-7"
        >
          <v-skeleton-loader
            v-bind="attrs"
            type="paragraph, button"
            width="300"
            v-if="isLoading"
          ></v-skeleton-loader>
        </v-col>
      </v-row>

      </v-sheet>
    </v-col>

    <v-col 
      cols="12"
      md="3"
    >
      <v-sheet
        class="pa-2"
        rounded="lg"
      >
        <v-row no-gutters v-for="item in 4" :key="item" class="my-2">
          <a href="/">
            <v-img
              src="/england.jpg"
              height="64"
              width="64"
            ></v-img>
          </a>
          <div class="ml-2">
          <h5 class="primary--text text-truncate">Lorem ipsum is dummy</h5>

          <h6 class="mt-1 grey--text">27.06.2021</h6>
          </div>
        </v-row>
        <v-btn block elevation="0" small color="primary" outlined>
          Read More <v-icon small right> mdi-chevron-right </v-icon>
        </v-btn>
        
      </v-sheet>

      <v-sheet
        class="pa-2 mt-3"
        rounded="lg"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              small
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="primary"> mdi-home-import-outline </v-icon>
            </v-btn>
          </template>
          <span> {{ $t('import') }} </span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              class="mx-3"
              small
              v-bind="attrs"
              v-on="on"    
            >
              <v-icon color="primary"> mdi-home-export-outline </v-icon>
            </v-btn>
          </template>
          <span> {{ $t('export') }} </span>
        </v-tooltip>        
      </v-sheet>
    </v-col>
  </v-row>
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
  .bg-color {
    background: linear-gradient(to right, #9814b3, #cd364f, #fc9c3d);
  }
  .outer {
    background-image: url('/background2.svg');
    background-position: calc(100% + 250px) 20px;
    background-size: 400px;
  }
  .inner {
    background-image: url('/background2.svg');
    background-position: -320px 120px;
    background-size: 400px;
  }
</style>