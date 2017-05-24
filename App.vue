<template>
<div>
	<!-- <div class="mtheader">
		<mt-header title="全部文章"></mt-header>
	</div> -->

	<transition>
		<router-view ></router-view>
	</transition>
</div>

</template>

<script>
	export default {
	
	}
</script>

<style lang="sass">
body {
	position:relative;
}
.mtheader {
position:fixed;
width:100%;
left:0px;
top:0px;
box-shadow:0px 0px 5px 2px #CDCDCD;
}
	*{
		margin:0;
		padding:0;
	}
</style>
