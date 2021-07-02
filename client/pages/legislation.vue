<template>
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