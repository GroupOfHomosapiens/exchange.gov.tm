<template>
  <v-container>
    <v-sheet
      rounded="lg"
      class="pa-2"
    >
      <v-row>
        <v-col 
          cols="12"
          sm="6" 
          md="8"
          class="d-flex align-center"
        >
          <div>
            <h2 style="color: #0A146E;">
              <center>
                {{ $t('contractsRegistration') }}
              </center>
            </h2>
            <p style="color: #666;" class="mt-7">
              <center>
                {{ $t('contractsText') }}
              </center>
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-img src="/agreement.svg" max-width="400" class="mx-auto"></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          v-
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('contractsRegistration')
    }
  }
}
</script>