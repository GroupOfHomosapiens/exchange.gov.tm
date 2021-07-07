<template>
  <v-card
    elevation="5"
    rounded="lg"
    class="mx-auto pa-2"
  >
    <div style="background-color: #f0f5fa;" class="primary--text d-flex justify-center align-center py-3">

      <span><v-img src="dollar-euro.svg" height="25" width="25"></v-img></span>  Converter
    </div>
    <div class="mx-auto">
      <v-row class="mt-5">
        <v-col
          cols="12"
          md="4"
          class="px-7"
        >
          <v-text-field
            min="1" 
            type="number" 
            outlined 
            color="indigo"
            label="Amount"
            prepend-inner-icon="$"
          ></v-text-field>
        </v-col>
        <v-col 
          cols="12"
          md="4"
          class="px-7" 
        >
          <v-select
            :items="items"
            label="From"
            outlined
            color="indigo"
            v-model="from"
            menu-props="offsetY"
            append-icon="mdi-chevron-down"
          ></v-select>
        </v-col>
        <v-col 
          cols="12"
          md="4"
          class="px-7"
        >
          <v-select
            :items="items"
            label="To"
            outlined
            append-icon="mdi-chevron-down"
            color="indigo"
            v-model="to"
          ></v-select>
        </v-col>
      </v-row>
      <center>
        <v-hover v-slot="{ hover }">
          <v-btn
            color="indigo"
            class="white--text mb-2"
            :elevation="hover ? 7 : 0"
            min-width="250"
          >
            Convert
          </v-btn>
        </v-hover>
      </center>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    from: 'USD - US Dollar', 
    to: 'EUR - Euro',
    items: ['USD - US Dollar', 'EUR - Euro', 'GBP - British Pound', 'INR - Indian Rupee']
  })
}
</script>