<template>
	<div class="logo-vuejs">
		<div class="green-head" :class="{'loading': loading}" />
		<div class="blue-triangle" />
		<div class="white-triangle" />
	</div>
</template>
<script>
export default {
	props : {
		loading : {
			required : true,
			type     : Boolean
		}
	}
};
</script>
<style lang="scss" scoped>
.logo-vuejs {
    position: absolute;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    transform: rotate(180deg);
    width: 150px;
    height: 129px;
}
@keyframes clip {
	from {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
	to {
        clip-path: polygon(50% 100%, 0% 100%, 100% 100%);
	}
}
.green-head {
    width: 100%;
    height: 100%;
    position: absolute;
    background: $secondary;
    z-index: 1;
    overflow: hidden;
    border: none;
}
.blue-triangle {
    position: absolute;
    bottom:0%;
    overflow: hidden;
    left: 20%;
    height: 60%;
    width: 60%;
    background: $primary;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border: none;
    z-index: 3;
}
.white-triangle {
    position: absolute;
    bottom:0%;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
    height: 24%;
    width: 23%;
    background: white;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    z-index: 4;
}
.loading:after {
	content: '';
	background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
	animation: animate-wave 1.75s linear infinite;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
@keyframes animate-wave {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(100%);
	}
}
</style>