<template>
<<<<<<< HEAD
  <v-sheet 
    rounded="lg"
    class="pa-2"
  >
   <v-row
      no-gutters
      class="d-flex justify-center my-1"
    >
      <v-col
        cols="11"
        sm="5"
        class="text-justify pa-1"
      >
        <h3
          class="primary--text my-10"
          align="center"
        >
         {{ $t('regulatoryBase') }}
        </h3>

        {{ $t('legislation1') }}

      </v-col>

      <v-col
        cols="11"
        sm="6"
        class="pa-3"
        align="center"
        justify="center"
      >
        <v-img
          src="/legislation1.png"
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

    <div style="background-color: rgb(7,33,91)">
      <h2 class="primary--text py-10 pa-2">
        <center>{{ $t('arbitrationTeam') }}</center>
      </h2>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(text, i) in texts"
          :key="text"
          class="white--text"
        >
          <h3 >
            <center class="primary--text"> {{ i + 1 }} </center>
          </h3>
          <div class="px-5 py-5">
            <center class="text-justify"> {{ text }} </center>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <h2 class="primary--text my-10">
          <center>{{ $t('workOrder') }}</center>
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(work, i) in works"
          :key="work"
        >
          <div class="px-5 py-2">
            <center class="text-justify"> {{ work }} </center>
            <v-btn
              color="primary"
              block
              outlined
              class="mt-5"
            >
            <v-icon left>mdi-file-download-outline</v-icon>
              {{ $t('downloadFile') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <div 
        style="background-color: rgb(7,33,91); border-radius: 5px;"
        class="pa-1 my-5"
      >
      </div>
    </div>
    <div>
      <h2 class="primary--text my-10">
          <center>{{ $t('commands') }}</center>
      </h2>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="4"
          md="6"
          v-for="(command, i) in commands"
          :key="command"
        >
          <div class="px-5 py-2">
            <center class="text-justify"> {{ command }} </center>
            <v-btn
              color="primary"
              block
              outlined
              class="mt-5"
            >
            <v-icon left>mdi-file-download-outline</v-icon>
              {{ $t('downloadFile') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(command1, i) in commands1"
          :key="command1"
        >
          <div class="px-5 py-5">
            <center class="text-justify"> {{ command1 }} </center>
            <v-btn
              color="primary"
              block
              outlined
              class="mt-5"
            >
            <v-icon left>mdi-file-download-outline</v-icon>
              {{ $t('downloadFile') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <div 
        style="background-color: rgb(7,33,91); border-radius: 5px;"
        class="pa-1 my-5"
      >
      </div>
    </div>
    <div>
      <h2 class="primary--text my-10">
          <center>{{ $t('principles') }}</center>
      </h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          v-for="(principle, i) in principles"
          :key="principle"
        >
          <div class="px-5 py-2">
            <center class="text-justify"> {{ principle }} </center>
            <v-btn
              color="primary"
              block
              outlined
              class="mt-5"
            >
            <v-icon left>mdi-file-download-outline</v-icon>
              {{ $t('downloadFile') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
     <!--  <div 
        style="background-color: rgb(7,33,91); border-radius: 5px;"
        class="pa-1 my-2"
      >
      </div> -->
    </div>
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
          class="white--text my-10"
          align="center"
        >
          {{ $t('internalSupervisionNormalize') }}
        </h3>

        {{ $t('legislation2') }}
      </v-col>

    </v-row>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    texts: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat assumenda corporis autem nam voluptatum exercitationem, minus vero, rerum harum iusto fuga eius nemo eaque et quisquam voluptatem molestias labore.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat assumenda corporis autem nam voluptatum exercitationem, minus vero, rerum harum iusto fuga eius nemo eaque et quisquam voluptatem molestias labore.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat assumenda corporis autem nam voluptatum exercitationem, minus vero, rerum harum iusto fuga eius nemo eaque et quisquam voluptatem molestias labore.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat assumenda corporis autem nam voluptatum exercitationem, minus vero, rerum harum iusto fuga eius nemo eaque et quisquam voluptatem molestias labore.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat assumenda corporis autem nam voluptatum exercitationem, minus vero, rerum harum iusto fuga eius nemo eaque et quisquam voluptatem molestias labore.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat assumenda corporis autem nam voluptatum exercitationem, minus vero, rerum harum iusto fuga eius nemo eaque et quisquam voluptatem molestias labore.',
    ],
    works: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?'
    ],
    commands: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?'
    ],
    commands1: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
    ],
    principles: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, provident magnam harum laboriosam fugiat quisquam ducimus soluta iusto odio officiis nisi iste illo laborum temporibus neque eum recusandae! At?'
    ],

  }),
  head() {
    return {
      title: this.$t('legislation')
    }
  },
}
</script>
=======
	<section>
		<contacts />
		<v-text-field outlined :label="$t('pages')"></v-text-field>
		{{ $t('pages') }}
	</section>
</template>

<script>
import Contacts from '@/components/Contacts.vue';

export default {
	components: {
		Contacts, 
	},
	data() {
		return {
			engine: 'React',
			text: '',
			name: 'Baygeldi',
			color: 'red'
		}
	},
	computed: {
		handleChange() {
			return `Hello. My name is ${this.name}.` 
		}
	},
	methods: {
		handleClick() {
			this.name = 'Shanazar'
		}
	}
}
</script>

<style>
	.btn {
		background-color: red;
	}
</style>
>>>>>>> 0b24ae1aa38f7207681fc7c8943b407f91a8e2b2
