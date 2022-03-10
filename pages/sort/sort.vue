<template>
	<view class="sort">
		<view class="sort_title">
			<view class="title_left">
				<image src="../../static/enjoy/back1.png" mode=""></image>
			</view>
			<view class="input">
				<image class="search" src="../../static/enjoy/search.png" mode=""></image>
				<input type="text" value="" placeholder="搜索关键词" />
				<image class="yuyin" src="../../static/enjoy/0f1287c2fc73fc5cb1245aa5991857b.png" mode=""></image>
			</view>

			<view class="title_right">我的收藏</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		background-color: #F0F1F1;
	}

	.sort {
		.sort_title {
			width: 100%;
			height: 93rpx;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			padding-left: 27rpx;

			.title_left {
				margin-right: 20rpx;

				image {
					width: 23rpx;
					height: 41rpx;
				}
			}

			.input {
				display: flex;
				width: 479rpx;
				height: 64rpx;
				background-color: #F6F6F6;
				border-radius: 32rpx;
				margin-right: 20rpx;
				align-items: center;

				.search {
					width: 40rpx;
					height: 40rpx;
					margin-right: 16rpx;
					margin-left: 13rpx;
				}
				input{
					width: 180rpx;
					margin-right: 180rpx;
					　input::-webkit-input-placeholder{
						font-size: 36rpx;
						color: #adadad;
						font-weight: 400;
					}
				}
				.yuyin{
					width: 30rpx;
					height: 40rpx;
				}
			}

			.title_right {
				font-size: 40rpx;
				color: #000000;
				font-weight: 400;
			}
		}
	}
</style>
