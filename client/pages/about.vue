<template>
  <v-sheet 
    rounded="lg"
    class="pa-2"
  >
    <v-row
      no-gutters
      class="d-flex justify-center align-center my-1"
    >
      <v-col
        cols="11"
        md="5"
        class="text-justify pa-1"
      >
        <h3
          class="primary--text"
          align="center"
        >
          {{ $t('aboutExchange') }}
        </h3>

        {{ $t('aboutText1') }}

        <v-btn
          color="primary"
          block
          outlined
          class="mt-3"
        >
          <v-icon left>mdi-file-download-outline</v-icon>
          {{ $t('downloadFile') }}
        </v-btn>
      </v-col>

      <v-col
        cols="11"
        md="6"
        class="pa-3"
        align="center"
        justify="center"
      >
        <v-img
          src="/about1.png"
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

    </v-row>

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
          class="primary--text"
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
          src="/carpet4.png"
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
        </div>
      </v-col>

    </v-row>

    <v-row
      no-gutters
      class="d-flex justify-center align-center white--text my-5 py-10"
      style="background-color: rgb(7,33,91);"
    >

      <v-col
        cols="10"
        md="6"
        class="pa-3"
        align="center"
        justify="center"
      >
        <v-img
          src="/carpet1.png"
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
          class="white--text"
          align="center"
        >
          {{ $t('objectiveAndTask') }}
        </h3>

        {{ $t('aboutText3') }}
      </v-col>

    </v-row>

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
          class="primary--text"
          align="center"
        >
          {{ $t('qualifiedSpecialists') }}
        </h3>

        {{ $t('aboutText4') }}
      </v-col>

      <v-col
        cols="10"
        md="6"
        class="pa-3"
        align="center"
        justify="center"
      >
        <v-img
          src="/about4.png"
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

    </v-row>


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
          src="/carpet5.png"
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

    <v-row
      no-gutters
      class="d-flex justify-center align-center my-5"
    >

      <v-col
        cols="10"
        md="5"
        class="text-justify pa-1"
      >
        <h3
          class="primary--text"
          align="center"
        >
          {{ $t('exportOfProducts') }}
        </h3>

        {{ $t('aboutText6') }}
      </v-col>

      <v-col
        cols="10"
        md="6"
        class="pa-3"
        align="center"
        justify="center"
      >
        <v-img
          src="/about3.png"
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

    </v-row>

  </v-sheet>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('about')
    }
  }
}
</script>