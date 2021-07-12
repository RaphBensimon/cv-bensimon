<template>
	<span class="type-writer">
		{{ paper }}
	</span>
</template>
<script>
export default {
	props : {
		words : {
			required : true,
			type     : Array
		},
		time : {
			required : true,
			type     : Number
		},
		pause : {
			required : false,
			type     : Number,
			default  : 200
		}
	},
	data() {
		return {
			paper : '',
		};
	},
	mounted() {
		this.printer();
	},
	methods : {
		printer() {
			for (let i = 0; i < this.words.length; i++) {
				const letters = Array.from(this.words[i]);
				const timer = Math.ceil((this.time / ( letters.length + 1)));
				let pause = this.pause;
				if(!pause || pause < 200) {
					pause = timer;
				}
				setTimeout(() => {
					for (let e = 0; e < letters.length; e++) {
						const letter = letters[e];
						setTimeout(() => {
							this.paper += letter;
						}, (e + 1) * timer);
					}
				}, i * (this.time + pause));
			}
		},
	},
	watch : {
		paper(paper) {
			const index = this.words.findIndex((x)=> {
				return x == paper;
			});
			let pause = this.pause;
			if(!pause || pause < 200) {
				pause = Math.ceil((this.time / ( Array.from(paper).length + 1)));
			}
			if(index == (this.words.length - 1)) {
				setTimeout(() => {
					this.paper = '';
					this.printer();
				}, pause);
			} else if(index != -1) {
				setTimeout(() => {
					this.paper = '';
				}, pause);
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.type-writer {
    border-right: 3px solid $primary;
    animation: blink-caret .75s step-end infinite;;
}
@keyframes blink-caret {
    from, to {
        border-color: transparent
    }
    50% {
        border-color: $primary;
    }
}
</style>