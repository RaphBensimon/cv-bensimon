
<template>
	<div id="view">
		<metainfo>
			<template #title="{ content }">
				{{ content }}
			</template>
		</metainfo>
		<router-view v-slot="{ Component }">
			<transition name="no-mode-fade">
				<Loader :loading="loading" v-if="loading" id="loader" />
				<component v-else :is="Component" />
			</transition>
		</router-view>
	</div>
</template>
<script>
import { useMeta } from 'vue-meta';
import Loader from './components/app/Loader.vue';
export default {
	components : {
		Loader,
	},
	data() {
		return {
			loading : true,
			show    : false,
		};
	},
	mounted() {
		setTimeout(() => {
			this.loading = false;
		}, 2500);
	},
	created() {
		useMeta({
			title : 'Raphaël BENSIMON | Développeur VueJs'
		});
	}
};
</script>
<style lang="scss">
@import '@/assets/style/import.scss';
.no-mode-fade-enter-active, .no-mode-fade-leave-active {
  transition: opacity 0.5s
}
.no-mode-fade-enter-from, .no-mode-fade-leave-to {
  opacity: 0
}
#app {
	width: 100%;
	height: 100%;
}
#view {
	background-color: $white;
	max-width: 818px;
	min-height: 100%;
	position: relative;
    left: 50%;
    transform: translateX(-50%);
	overflow: hidden;
}
</style>
<style lang="scss" scoped>
#router-view {
	min-height: 100%;
	position: relative;
}
#loader {
	top: 50%;
	left: 50%;
	z-index: 99;
	transform: translate(-50%, -50%) rotate(180deg);
}
</style>
