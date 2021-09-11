<template>
	<div class="switch">
		<span :class="{'checked': options[0] == modelValue}">{{ options[0] }}</span>
		<input type="checkbox" @change="setValue" />
		<label @click="$el.getElementsByTagName('input')[0].click()" />
		<span :class="{'checked': options[1] == modelValue}">{{ options[1] }}</span>
	</div>
</template>
<script>
export default {
	props : {
		options : {
			type     : Array,
			required : false,
			default  : new Array()
		},
		modelValue : {
			required : true,
			type     : null
		}
	},
	methods : {
		setValue() {
			if(this.options) {
				const find = this.options.find((x) => {
					return x != this.modelValue;
				});
				this.$emit('update:modelValue', find);
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.switch {
    display: flex;
    align-items: center;
}
span {
    text-transform: uppercase;
}
input {
    display: none;
}
label {
    margin: 0 0.2rem;
    display: flex;
    height: 1.25rem;
    width: 2.5rem;
    position: relative;
	background-color: $light-grey;
    border-radius: 1.5rem;
    &:after {
        position: absolute;
        content: '';
        display: block;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background: $secondary;
        top: 50%;
        left: 3px;
        transition: 0.3s;
        transform: translateY(-50%);
    }
}
input:checked + label:after {
    left: calc(100% - 3px);
    transform: translate(-100%, -50%);
    background: $primary;
}
span:first-of-type {
    color: $secondary;
}
span.checked {
    font-weight: bold;
}
</style>