<template>
	<div id="left-side">
		<p class="my-0">
			En tant que développeur web, mon objectif est de comprendre les besoins des clients, des équipes internes
			et de les convertir en une <b>solution web</b>, en respectant les contraintes de temps sans négliger
			la qualité.
		</p>
		<div class="experiences my-4">
			<h5>Expériences</h5>
			<div class="experience" v-for="(el, i) in experiences" :key="i">
				<a :href="'https://www.'+el.company" target="_blank" class="bold color-primary">
					{{ el.company }}
				</a>
				<div class="italic color-black">
					{{ el.job }} / {{ el.jobType }} / {{ el.date }}
				</div>
				<p class="my-0">
					{{ el.description }}
				</p>
			</div>
		</div>
		<div class="competencies my-4">
			<h5>Compétences</h5>
			<div class="competence" v-for="(el, i) in competences" :key="i">
				<div class="text" :class="el.class">
					{{ el.text }}
				</div>
				<ProgressBar :percentage="el.percentage" :max-width="50" />
			</div>
		</div>
		<div class="knowledges my-4">
			<h5>Connaissances</h5>
			<div class="d-flex">
				<div class="knwoledge" v-for="(el, i) in knwoledges" :key="i">
					<p class="my-0">
						<span v-if="i != 0">,</span>
						{{ el }}
					</p>
					<div class="color-secondary">
						<Icon icon="checkmark" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ProgressBar from '@/components/ProgressBar.vue';
export default {
	components : {
		ProgressBar
	},
	data() {
		return {
			experiences : [
				{
					company     : 'McLedger.io',
					job         : 'Lead front-end',
					jobType     : 'CDI',
					date        : '2020 - Présent',
					// eslint-disable-next-line max-len
					description : 'Développement from scratch d\'un outil web sous VueJs.'
				},
				{
					company     : 'Data4Job.com',
					job         : 'Développeur front-end',
					jobType     : 'CDI',
					date        : '2019-2020',
					// eslint-disable-next-line max-len
					description : 'Développement web sous VueJs des différentes plateformes web de l\'entreprise.'
				},
				{
					company     : 'Data4Job.com',
					job         : 'Développeur front-end',
					jobType     : 'Alternance',
					date        : '2017-2019',
					// eslint-disable-next-line max-len
					description : 'Développement web sous VueJs des différentes plateformes web de l\'entreprise.'
				},
				{
					company     : 'Immojeune.com',
					job         : 'Intégrateur front-end',
					jobType     : 'Stage',
					date        : '2016',
					// eslint-disable-next-line max-len
					description : 'Intégration web natif de landing page à l\'aide de maquette graphique (HTML,CSS, JS).'
				},

			],
			competences : [
				{
					text       : 'Vuejs',
					percentage : 100,
					class      : 'bold'
				},
				{
					text       : 'Css/Scss/Less',
					percentage : 80
				},
				{
					text       : 'Bootstrap Vue',
					percentage : 80,
					class      : 'bold'
				},
				{
					text       : 'Vue Router',
					percentage : 80
				},
				{
					text       : 'Vuex',
					percentage : 80
				},
				{
					text       : 'i18n Vue',
					percentage : 80
				},
				{
					text       : 'Vuelidate',
					percentage : 75
				}
			],
			knwoledges : [
				'Cypress', 'MongoDB', 'Eslint', 'Stylelint', 'Git'
			]
		};
	}
};
</script>
<style lang="scss" scoped>
.experience {
	margin: 10px 0;
}
.competence {
	display: flex;
	margin-bottom: 7px;
}
.competence .text {
	width: 100px;
}
.knwoledge {
	display: flex;
}
</style>