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
        max-height="380"
        max-width="380"
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