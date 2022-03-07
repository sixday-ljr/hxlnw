<template>
	<view>
		<view class="tiao" @click="tiao()">
			<text>跳转</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
            tiao(){
				uni.navigateTo({
					url: '../enjoy/enjoy'
				});
			}
		}
	}
</script>

<style>
	
</style>
