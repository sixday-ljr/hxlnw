<template>
	<view class="news">
		<view class="newsHead" @click="back()">
			<image src="../../static/listen-news/返回.png" class="newsIcon"></image>
			<view class="newsOne">列表</view>
		</view>
		<view class="aa" style="width: 100%;height: 93rpx;"></view>
		<view style="display: flex;" v-for="item in newsList" :key="item.id" @click="next(item.id)">
			<view>
				<image :src="item.img" style="width:200rpx;height:220rpx;margin-left: 26rpx;margin-top: 42rpx;"></image>
			</view>
			<view>
				<view class="newsTip">{{item.title}}</view>
				<view class="newBtn">
					<image src="../../static/listen-news/zanting123.png" class="newBtnOne"></image>
					<view class="newBtnTwo">听新闻</view>
				</view>
			</view>
		</view>
		<view class="audio">
			<zaudio theme="theme1"></zaudio>
			<!-- <view class="audio_top">
				<view class="audio_img">
					<image src="../../static/listen-news/erji.png" mode=""></image>
				</view>
				<view class="audio_right">
					<view>
						<image src="../../static/listen-news/上一个@3x.png" mode=""></image>
						<text>上一个</text>
					</view>
					<view class="center">
						<view v-if="zanting(img)" class="center_img">
							<image src="../../static/listen-news/zanting@2.png" mode=""></image>
							<text>暂停</text>
						</view>
						<view v-else>
							<image src="../../static/listen-news/bofang2@3.png" mode=""></image>
							<text>播放</text>
						</view>
					</view>
					<view>
						<image src="../../static/listen-news/next@3.png" mode=""></image>
						<text>下一个</text>
					</view>
				</view>
			</view>
			<view class="audio_bot">
				<view class="audio_botleft">多年内地调整公积金</view>
				<view></view>
			</view> -->
		</view>
		<view class="aa" style="width: 100%;height: 226rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data1: {
					"params": {
						"category_id": 2,
					}
				},
				newsList: [],
			}
		},

		onLoad() {

			this.active()
		},
		onShow() {

		},
		methods: {
			
			active() {
				this.$request('article/list', this.data1, 'post').then((res) => {
					if (res.code === 200) {
						this.newsList = res.data.items
					}
					console.log(this.newsList)

				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			next(id) {
				uni.navigateTo({
					url: '../newsdetail/newsDetail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		background-color: #f0f1f1;
	}

	.news {
		background-color: #F0F1F1;
	}

	.newsHead {
		display: flex;
		width: 100%;
		height: 93rpx;
		background-color: #FFFFFF;
		position: fixed;
		z-index: 999;
	}

	.newsIcon {
		margin-top: 30rpx;
		margin-left: 30rpx;
		width: 24rpx;
		height: 43rpx
	}

	.newsOne {
		margin-top: 15rpx;
		margin-left: 22rpx;
		font-size: 50rpx;
		font-weight: bold;
		color: #333333;
	}

	.newsTip {
		margin-left: 20rpx;
		margin-top: 40rpx;
		font-size: 36rpx;
		width: 463rpx;
		height: 120rpx;
		font-weight: 400;
		color: #333333;
		line-height: 56rpx;
		margin-right: 60rpx;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		white-space: wrap;
	}

	.newBtn {
		width: 240rpx;
		height: 88rpx;
		background-color: #FF352B;
		margin-left: 20rpx;
		margin-top: 10rpx;
		border-radius: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 10rpx;
	}

	.newBtnOne {
		width: 64rpx;
		height: 64rpx;
	}

	.newBtnTwo {
		font-size: 42rpx;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 51rpx;
		margin-right: 30rpx;
	}

	.audio {
		width: 100%;
		height: 229rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: column;
	}

	.audio_top {
		display: flex;
		justify-content: space-between;
		padding: 0 36rpx;
	}

	.audio_img {
		margin-top: 12rpx;
	}

	.audio_img>image {
		width: 116rpx;
		height: 116rpx;
	}

	.audio_right {
		display: flex;
		margin-top: 22rpx;
		justify-content: space-around;
		flex-grow: 1;
	}

	.audio_right>view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.audio_right>view>text,
	.center>view>text {
		font-size: 36rpx;
		color: #333333;
		font-weight: 400;
		font-family: Source Han Sans CN;
		margin-top: 20rpx;

	}

	.audio_right>view:nth-child(1)>image,
	.audio_right>view:nth-child(3)>image {
		width: 37rpx;
		height: 37rpx;
		display: block;

	}

	.center>view {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.center>view:nth-child(2) {
		margin-top: -104rpx;
		display: none;
	}

	.center>view>image {
		width: 26rpx;
		height: 35rpx;
		display: block;

	}
</style>
