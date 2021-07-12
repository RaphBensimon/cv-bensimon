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
		},
		animateOnScroll : {
			type     : Boolean,
			required : false,
			default  : false
		}
	},
	data() {
		return {
			visible : false
		};
	},
	created() {
		if(this.animateOnScroll) {
			window.addEventListener('scroll', this.animationOnScroll);
		} else {
			this.visible = true;
		}
	},
	computed : {
		getPercentage() {
			if(this.visible) {
				return this.percentage;
			} else {
				return 0;
			}
		}
	},
	mounted() {
	},
	methods : {
		animationOnScroll() {
			if(window.innerHeight - this.$el.getBoundingClientRect().top > 0) {
				this.visible = true;
			} else {
				this.visible = false;
			}
		}
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
.progress-percentage {
	width: 0;
	height: 100%;
    background-color: $secondary;
	transition: 1s;
}
</style>