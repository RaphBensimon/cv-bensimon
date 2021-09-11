<template>
	<div id="home">
		<header>
			<h1>Raphaël BENSIMON</h1>
			<h2>
				{{ $t('web-developer') }}
				<b><TypeWriter :words="words" :time="1000" :pause="2000" /></b>
			</h2>
		</header>
		<div id="bar-container">
			<div id="bar" />
		</div>
		<div id="side-container">
			<LeftSide />
			<RightSide />
		</div>
		<footer>
			<p class="my-0">
				{{ $t('developed-with-vuejs') }}
			</p>
		</footer>
	</div>
</template>

<script>
import TypeWriter from '@/components/TypeWriter.vue';
import { RightSide, LeftSide } from './home/';
export default {
	name       : 'Home',
	components : {
		TypeWriter,
		RightSide,
		LeftSide
	},
	data() {
		return {
			words : [
				'VueJs',
				'VueX',
				'Vue Router',
				'Vuelidate',
				'i18n Vue',
				'Bootstrap-vue',
			]
		};
	}
};
</script>
<style lang="scss" scoped>
#home {
	padding-bottom: 28px;
}
#side-container {
	display: flex;
	height: 100%;
}
#side-container > * {
	padding: 40px;
}
#bar-container {
	height: 37px;
	width: 100%;
}
#bar{
	height: 100%;
	width: 400%;
	object-fit: cover;
	background-repeat: repeat;
	position: relative;
	background-image: url('../assets/img/bar.png');
}
header {
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
@media screen and (max-width: 585px){
	header {
		padding: 20px 30px;
	}
}
h1 {
    font-size: 4rem;
    margin: 0;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
}
h2 {
	margin: 0;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 5px;
    text-transform: uppercase;
}

@keyframes typewriter{
	from {
		width: 0;
	}
	to {
		width: 432px;
	}
}
@keyframes blinkTextCursor{
	from {
		border-right-color: red;
	}
	to {
		border-right-color: transparent;
	}
}
footer {
	background-color: $secondary;
	color: $white;
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 5px 40px;
	display: flex;
	justify-content: center;
}
@media screen and (max-width: 769px){
	h1 {
		font-size: 3rem;
	}
}
@media screen and (max-width: 700px){
	#side-container{
		flex-direction: column;
	}
}
</style>
<i18n>
{
	"en": {
		"web-developer": "Web developer",
		"developed-with-vuejs": "Developed with vuejs"
	},
	"fr": {
		"web-developer": "Développeur web",
		"developed-with-vuejs": "Développé sous vuejs"
	}
}
</i18n>