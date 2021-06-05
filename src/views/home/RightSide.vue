<template>
	<div id="right-side">
		<img src="@/assets/img/raphael-bensimon.jpg" id="profile-picture" />
		<div class="container">
			<h5>Contact</h5>
			<div class="content d-flex contact" v-for="(el, i) in contacts" :key="i">
				<Icon :icon="el.icon" />
				<a :href="el.link" target="_blank" class="text-decoration-none">
					{{ el.text }}
				</a>
			</div>
		</div>
		<div class="container" id="education">
			<h5>Formations</h5>
			<div class="content education" v-for="(el, i) in education" :key="i">
				<div class="bold">
					{{ el.value }}
				</div>
				<div class="italic">
					{{ el.school }}
				</div>
			</div>
		</div>
		<div class="container" id="passion">
			<h5>Passion</h5>
			<div class="content" v-for="(el, i) in passion" :key="i">
				<div>{{ el }}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			contacts : [
				{
					text  : '06 58 75 91 17',
					link  : 'tel:+33658759117',
					icon  : 'call'
				},
				{
					text : 'rbensimon05@gmail.com',
					link : 'mailto:rbensimon05@gmail.com',
					icon : 'mail'
				},
				{
					text : 'Villemomble, 93250',
					// eslint-disable-next-line max-len
					link : 'https://www.google.com/maps/place/93250+Villemomble/@48.88658,2.4909237,14z/data=!4m5!3m4!1s0x47e612502888b9d7:0xa5cd5ba803bfbddb!8m2!3d48.886727!4d2.505069',
					icon : 'location'
				},
				{
					text  : 'https://github.com/RaphBensimon',
					link  : 'https://github.com/RaphBensimon',
					icon  : 'logo-github'
				},
			],
			education : [
				{
					value  : 'Master MS2I',
					school : 'ORT Montreuil 2019'
				},
				{
					value  : 'Bachelor CSI',
					school : 'ORT Montreuil 2017'
				},
				{
					value  : 'Classe prépratoire web',
					school : 'ORT Montreuil 2015'
				},
				{
					value  : 'BAC STL',
					school : 'Lycée Gregor Mendel'
				},
			],
			passion : ['Automobile']
		};
	}
};
</script>
<style lang="scss" scoped>
#right-side {
	background-color: darken($white, 5%);
	display: flex;
	flex-direction: column;
	align-items: center;
}
#right-side > * {
	width: 100%;
}
#profile-picture {
	width: 200px;
	border-radius: 50%;
}
.container {
	margin-top: 2rem;
}
.content {
	margin: 10px 0;
}
.contact a {
	margin-left: 0.5rem;
	color: $primary;
	&:hover {
		color: $secondary;
		text-decoration: underline !important;
	}
}
@media screen and (max-width: 650px){
	#right-side {
		align-items: flex-start;
	}
}
</style>