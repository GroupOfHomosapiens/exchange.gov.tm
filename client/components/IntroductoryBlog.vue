<template>
  <v-row
    no-gutters
    class="d-flex justify-center align-center my-7"
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
        {{ title }}
      </h3>

      <div class="mt-7 mb-5">
        {{ text }}
      </div>

      <v-btn
        color="primary"
        block
        outlined
        class="mt-3"
        v-if="hasFile"
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
        :src="image"
        min-height="300"
        min-width="300"
        max-height="380"
        max-width="380"
      >
        <template v-slot:placeholder>
          <v-skeleton-loader
            type="image"
            min-width="250"
            min-height="250"
          />
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    hasFile: {
      type: Boolean,
      default: false
    },
    fileLink: {
      type: String,
    }
  }
}
</script>