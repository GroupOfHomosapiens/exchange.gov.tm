<template>
	<div style="background-color: rgb(7,33,91)">
    <h2 class="primary--text py-10 pa-2">
      <center>{{ title }}</center>
    </h2>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(text, index) in texts"
          :key="index"
          class="white--text"
        >
          <h3 >
            <center class="primary--text"> {{ index + 1 }} </center>
          </h3>
          <div class="px-5 py-5">
            <center class="text-justify"> {{ text }} </center>
          </div>
        </v-col>
      </v-row>
  </div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				require: true
			},
			texts: {
				type: Array,
				require: true
			}
		}
	}
</script>