<template>
	<div id="right-side">
		<p class="my-0">
			{{ $t('introduction-text-part-1') }}
			<b>{{ $t('web-solution') }}</b>,
			{{ $t('introduction-text-part-2') }}
		</p>
		<div class="experiences my-4">
			<h5>{{ $t('experiences') }}</h5>
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
				<ul>
					<li v-for="(mission, index) in el.missions" :key="index">
						{{ mission }}
					</li>
				</ul>
			</div>
		</div>
		<div class="competencies my-4">
			<h5>{{ $t('competencies') }}</h5>
			<div class="competence" v-for="(el, i) in competences" :key="i">
				<div class="text" :class="el.class">
					{{ el.text }}
				</div>
				<ProgressBar :percentage="el.percentage" :max-width="50" :animate-on-scroll="true" />
			</div>
		</div>
		<div class="knowledges my-4">
			<h5>{{ $t('knowledges') }}</h5>
			<div class="d-flex flex-wrap">
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
	created() {
	},
	data() {
		return {
			competences : [
				{
					text       : 'VueJs',
					percentage : 100,
					class      : 'bold'
				},
				{
					text       : 'NuxtJs',
					percentage : 80
				},
				{
					text       : 'CSS/LESS/SCSS',
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
	},
	computed : {
		experiences() {
			return [
				{
					company     : 'McLedger.io',
					job         : this.$i18n.t('lead-front-end'),
					jobType     : this.$i18n.t('permanent-position'),
					date        : '2020 - ' + this.$i18n.t('present'),
					// eslint-disable-next-line max-len
					description : this.$i18n.t('mcledger-description'),
					missions        : [
						this.$i18n.t('Implementation of the front-end architecture'),
						this.$i18n.t('Setting up documentation and linters'),
						this.$i18n.t('Proposal of visual and functional improvements'),
						this.$i18n.t('Development of the internationalization'),
						this.$i18n.t('Development of reusable components (tables, speedometer, calendar etc...)'),
						this.$i18n.t('Development of the router and authorizations.'),
						this.$i18n.t('Development of API calls')
					],
				},
				{
					company     : 'Data4Job.com',
					job         : this.$i18n.t('web-developer-front-end'),
					jobType     : `${this.$i18n.t('apprenticeship')} - ${this.$i18n.t('permanent-position')}`,
					date        : '2017 - 2020',
					// eslint-disable-next-line max-len
					description : this.$i18n.t('data4job-description'),
					missions    : [
						this.$i18n.t('Development of functionalities'),
						this.$i18n.t('Graphic redesign of application'),
						this.$i18n.t('Development of a chrome extension'),
						this.$i18n.t('Fix errors in front'),
					]
				},

			];
		}
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
@media screen and (max-width: 769px){
	h1 {
		font-size: 3rem;
	}
}
:deep().progress-bar {
	color: $light-grey;
}
:deep().progress-percentage {
	color: $secondary;
}
:deep().progress-bar, :deep().progress-percentage {
	border-top-left-radius: 0;
	border-top-right-radius: $border-radius;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: $border-radius;
}
</style>
<!-- eslint-disable -->
<i18n>
{
	"en": {
		"introduction-text-part-1":  "As a web developer, my goal is to understand the needs of customers, internal teams and convert them into a",
		"web-solution": "web solution",
		"introduction-text-part-2": "respecting the time constraints without neglecting the quality.",
		"lead-front-end": "Lead front-end",
		"web-developer-front-end" : "Web developer front-end",
		"present" : "Present",
		"permanent-position" : "Permanent position",
		"mcledger-description" : "Development from scratch of a SaaS B2B solution for FRET management under VueJs.",
		"data4job-description" : "Web development under VueJs/NuxtJs of SaaS B2B solutions for human resources.",
		"apprenticeship": "Apprenticeship",
		"internship": "Internship",
		"immojeune-description": " Native web integration of SEO web pages using graphic templates (HTML, CSS, JS).",
		"front-end-integrator": "Front-end integrator",
		"experiences": "Experiences",
		"competencies": "Competencies",
		"knowledges": "Knowledges",
		"Implementation of the front-end architecture": "Implementation of the front-end architecture",
		"Setting up documentation and linters": "Setting up documentation and linters",
		"Proposal of visual and functional improvements": "Proposal of visual and functional improvements",
		"Development of the internationalization": "Development of the internationalization",
		"Development of reusable components (tables, speedometer, calendar etc...)": "Development of reusable components (tables, speedometer, calendar etc...)",
		"Development of the router and authorizations.": "Development of the router and authorizations.",
		"Development of API calls": "Development of API calls",
		"Development of functionalities": "Development of functionalities",
		"Graphic redesign of application": "Graphic redesign of application",
		"Development of a chrome extension": "Development of a chrome extension",
		"Fix errors in front": "Fix errors in front"
	},
	"fr": {
		"introduction-text-part-1":  "En tant que développeur web, mon objectif est de comprendre les besoins des clients, des équipes internes et de les convertir en une",
		"web-solution": "solution web",
		"introduction-text-part-2": "en respectant les contraintes de temps sans négliger la qualité.",
		"lead-front-end": "Lead front-end",
		"web-developer-front-end" : "Développeur front-end",
		"present" : "Présent",
		"permanent-position" : "CDI",
		"mcledger-description" : "Développement from scratch d'un solution SaaS B2B à destination de la gestion de FRET sous VueJs.",
		"data4job-description" : "Développement web sous VueJs/NuxtJs de solutions SaaS B2B à destination des ressources humaines.",
		"apprenticeship": "Alternance",
		"internship": "Stage",
		"immojeune-description": "Intégration web natif de page web SEO à l'aide de maquette graphique (HTML,CSS, JS).",
		"front-end-integrator": "Intégrateur front-end",
		"experiences": "Expériences",
		"competencies": "Compétences",
		"knowledges": "Connaissances",
		"Implementation of the front-end architecture": "Mise en place de l'architecture front-end",
		"Setting up documentation and linters": "Mise en place d'une documentation et de linters",
		"Proposal of visual and functional improvements": "Proposition d'amélioration visuelles et fonctionnelles",
		"Development of the internationalization": "Développement de l'internationalization",
		"Development of reusable components (tables, speedometer, calendar etc...)": "Développement de composants réutilisables (tableaux, speedometer, calendrier etc...)",
		"Development of the router and authorizations.": "Développement du router et des autorisations",
		"Development of API calls": "Développement des appels API",
		"Development of functionalities": "Développement de fonctionnalités",
		"Graphic redesign of application": "Refontes graphiques d'applications",
		"Development of a chrome extension": "Développement d'une extension chrome",
		"Fix errors in front": "Correction des bugs front"
		
	}
}
</i18n>
<!-- eslint-disable -->