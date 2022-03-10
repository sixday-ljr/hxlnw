<template>
	<view class="collectlist">
		<view class="collectlist_title">
			<image class="back" src="../../static/enjoy/back1.png" mode=""></image>
			<text>收藏列表</text>
			<image class="huatong" src="../../static/enjoy/0f1287c2fc73fc5cb1245aa5991857b.png" mode=""></image>
		</view>
		<view class="collectlist_list" v-for="list in lists" :key="list.id">
			<view class="list_img">
				<image :src="list.img" mode=""></image>
			</view>
			<view class="list_other">
				<view class="other_top">
					<view class="top_top">
						<text>{{list.title}}</text>
						<text>{{list.href}}</text>
					</view>
					<view class="top_bot">
						<view></view>
						<text>{{list.time}}</text>
					</view>
				</view>
				<view class="other_bot">
					<view>{{list.location}}</view>
					<view>
						<image src="../../static/enjoy/845672202a4cfde3be7301e10a72fb0.png" mode=""></image>
						<text>{{list.shuzi}}km</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [{
						title: '1元搬家 限量开启',
						img: '../../static/enjoy/02001120008ds0m5a8111_R_300_225_R5_Q70_D.jpg',
						href: '生活服务',
						time: '09/18~09/23',
						location: '哈尔滨市香坊区',
						shuzi: '1.6'
					},
					{
						title: '保护环境从垃圾分类开始',
						img: '../../static/enjoy/02001120008ds0m5a8111_R_300_225_R5_Q70_D.jpg',
						href: '生活服务',
						time: '03/20~04/20',
						location: '哈尔滨市香坊区',
						shuzi: '1.8'
					},
					{
						title: '1元搬家 限量开启',
						img: '../../static/enjoy/02001120008ds0m5a8111_R_300_225_R5_Q70_D.jpg',
						href: '生活服务',
						time: '09/18~09/23',
						location: '哈尔滨市香坊区',
						shuzi: '1.6'
					},
					{
						title: '199全程暴力低价',
						img: '../../static/enjoy/02001120008ds0m5a8111_R_300_225_R5_Q70_D.jpg',
						href: '婚纱/摄影',
						time: '03/20~04/20',
						location: '哈尔滨市香坊区',
						shuzi: '1.7'
					}
				]
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

	.collectlist {
		.collectlist_title {
			width: 100%;
			height: 93rpx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-grow: 1;

			.back {
				width: 23rpx;
				height: 41rpx;
				margin-left: 27rpx;
			}

			text {
				color: #333333;
				font-weight: bold;
				font-size: 50rpx;
				font-family: Source Han Sans SC;
			}

			.huatong {
				width: 50rpx;
				height: 40rpx;
				margin-right: 27rpx;
			}
		}

		.collectlist_list {
			width: 703rpx;
			height: 260rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			margin: auto;
			margin-top: 23rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.list_img {

				margin-left: 23rpx;

				image {
					width: 154rpx;
					height: 186rpx;
					display: block;
					border-radius: 10rpx;

				}

			}

			.list_other {
				width: 498rpx;
				height: 100%;

				.other_top {
					margin-top: 30rpx;
					border-bottom: 2rpx solid #F1F1F1;
					padding-bottom: 38rpx;

					.top_top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 20rpx;

						text:nth-child(1) {
							width: 290rpx;
							overflow: hidden;
							font-size: 38rpx;
							white-space: nowrap;
							text-overflow: ellipsis;
							font-weight: bold;
							color: #333333;
							display: block;
						}

						text:nth-child(2) {
							font-size: 20rpx;
							color: #999999;
							border: 2rpx solid #999999;
							border-radius: 6rpx;
							display: block;
							margin-right: 30rpx;
						}
					}

					.top_bot {
						display: flex;
						align-items: center;
						view{
							width: 12rpx;
							height: 12rpx;
							background-color: #FF352B;
							border-radius: 50%;
							margin-right: 12rpx;
						}
						text{
							font-size: 30rpx;
							color: #333333;
							font-weight: 400;
						}
					}
				}
				.other_bot{
					display: flex;
					justify-content: space-between;
					margin-top: 23rpx;
					view:nth-child(1){
						font-size: 22rpx;
						color: #999999;
					}
					view:nth-child(2){
						margin-right: 49rpx;
						display: flex;
						align-items: center;
						image{
							width: 16rpx;
							height: 18rpx;
							margin-right: 10rpx;
						}
						text{
							font-size: 22rpx;
							color: #999999;
							
						}
					}
				}
			}
		}
	}
</style>
