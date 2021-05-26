<template>
	<div class="progress-bar" :style="'max-width: ' + maxWidth +'%'">
		<div class="progress-percentage" :style="
			'width:' + getPercentage + '%;'
		" />
	</div>
</template>
<script>
export default {
	props : {
		percentage : {
			type     : Number,
			required : true
		},
		maxWidth : {
			type     : Number,
			required : true,
		}
	},
	data() {
		return {
			isMounted : false
		};
	},
	computed : {
		getPercentage() {
			if(this.isMounted) {
				return this.percentage;
			} else {
				return 0;
			}
		}
	},
	mounted() {
		setTimeout(() => {
			this.isMounted = true;
		}, 0);
	}
};
</script>
<style lang="scss" scoped>
.progress-bar {
	width: 100%;
	background-color: $light-grey;
	height: 12px;
	position: relative;
}
@keyframes skeleton-animate-wave {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(100%);
	}
}
.progress-bar, .progress-percentage {
	border-top-left-radius: 0;
	border-top-right-radius: $border-radius;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: $border-radius;
}
.progress-percentage {
	width: 0;
	height: 100%;
    background-color: $secondary;
	transition: 1s;
}
</style>