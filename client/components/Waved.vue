<template>
  <section>
    <div class="mx-n2">
      <v-img src="wave1.svg" class="mb-0"/>
      <div class="gradient-blue mt-0">
        <h3>
          <center> {{ $t('arbitrationCommission') }} </center>
        </h3>
      </div>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(item, i) in 3"
          :key="i"
        ></v-col>
      </v-row>
      </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .gradient-blue {
    background-image: linear-gradient(to bottom, #D4D2FF, #fff);
  }
</style>