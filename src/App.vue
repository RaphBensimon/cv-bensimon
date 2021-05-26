
<template>
	<div id="app">
		<header>
			<h1>Raphaël BENSIMON</h1>
			<h2>Développeur web <b>Vuejs</b></h2>
		</header>
		<div id="bar-container">
			<div id="bar" />
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
@import '@/assets/style/import.scss';
</style>
<style lang="scss" scoped>
#app {
	background-color: $white;
	max-width: 818px;
	position: relative;
    left: 50%;
    transform: translateX(-50%);
	overflow: hidden;
}
#bar-container {
	height: 37px;
	width: 100%;
}
#bar{
	height: 100%;
	width: 400%;
	animation: test 20s linear infinite;
	object-fit: cover;
	background-repeat: repeat;
	position: relative;
	background-image: url('./assets/img/bar.png');
}
@keyframes test {
	0% { left: 0;}
    100%{ left : -200%;}
}
header {
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
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
</style>
