<template>
	<div id="home">
		<RightSide />
		<LeftSide />
	</div>
</template>

<script>
import { RightSide, LeftSide } from './home/';
export default {
	name       : 'Home',
	components : {
		RightSide,
		LeftSide
	}
};
</script>
<style lang="scss" scoped>
#home {
	display: flex;
}
#home > * {
	padding: 40px;
}
</style>
