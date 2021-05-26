<template>
	<div v-html="require(`!html-loader!@/assets/icons/${icon}.svg`)" class="icon" />
</template>
<script>
function recursivelyRemoveFill(el) {
	if (!el) {
		return;
	}
	if(el.hasAttribute('fill')) {
		el.removeAttribute('fill');
		[].forEach.call(el.children, child => {
			recursivelyRemoveFill(child);
		});
	}
}
export default {
	props : {
		icon : {
			type    : String,
			default : null
		}
	},
	mounted() {
		if (this.$el.firstElementChild.nodeName === 'svg') {
			const svgElement = this.$el.firstElementChild;
			recursivelyRemoveFill(svgElement);
			svgElement.setAttribute('width', '1.3em');
			svgElement.setAttribute('height', '1.3em');
		}
	}
};
</script>

<style lang="scss" scoped>
.icon {
    display: inline-flex;
	fill: currentColor;
}
</style>