<template>
	<view class="body">

		<view class="head">
			<image src="../../static/listen-news/back@3.png" mode=""></image>
			<text>
				听新闻
			</text>
			<view class="search">

				<image src="../../static/listen-news/search@3.png" style="width:60rpx;height:36rpx"></image>

				<input type="text" v-model="showInput" placeholder="搜索新闻" @input="onKeyInput" />
				<image src="../../static/listen-news/关闭实心@2x.png" style="width:60rpx;height:36rpx"></image>
			</view>
			<view class="search-font">
				<text @click="onKeyInputOne()">搜索</text>
			</view>
		</view>

		<view class="banner">
			<image :src="srcImg" mode=""></image>
		</view>
		<view class="icon">
			<view v-for="item in iconList" :key="item.id" class="iconMain">

				<image :src="item.category_icon" class="iconImg" @click="goNext(item.id)">
				</image>
				<view class="iconText">{{item.title}}</view>

			</view>
		</view>

		<view class="audio">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				srcImg: '',
				showInput: '',
				dataOne: {
					"params": {
						"type": "1"
					}
				},
				iconList: [],
				inputValue: '',
				goId: '',
				dataTwo: {
					"params": {
						"keywords": ''
					}
				},

				currentTime: 0, //当前进度
				duration: 100, // 总进度
				videoContext: '',
			}
		},
		onLoad() {
			this.getClassify()
		},
		methods: {
			goNext(e) {

				uni.navigateTo({
					url: '../newsone/newsone?id=' + e
				});
			},
			onKeyInput(event) {
				this.inputValue = event.target.value
				this.dataTwo.params.keywords = this.inputValue
				console.log(this.inputValue)
			},
			onKeyInputOne() {
				console.log(this.dataTwo);
				this.$request('article/search_news', this.dataTwo, 'POST').then(res => {
					console.log(res)
				});
				uni.navigateTo({
					url: '../newsList/newsList'
				});
			},
			getClassify() {
				this.$request('article/category', this.dataOne, 'POST').then((res) => {
					console.log(res)
					if (res.code === 200) {
						this.iconList = res.data.items;
						// this.goId = res.data.items.id;
						console.log(this.goId)
						this.srcImg = res.data.pic
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F1F0F0;
	
	}

	.body {
		.head {
			display: flex;
			align-items: center;

			image {
				display: inline-flex;
				width: 22rpx;
				height: 40rpx;

				margin: 26rpx 12rpx 24rpx 26rpx;
			}

			text {

				display: flex;
				display: -webkit-flex;

				justify-content: center;
				font-weight: bold;
				width: 147rpx;
				height: 47rpx;

				font-size: 40rpx;
				margin-right: 48rpx;
			}

			.search {
				display: flex;
				align-items: center;


				width: 360rpx;
				height: 64rpx;
				border-radius: 100rpx;
				background-color: #E7e6e6;

				image {
					width: 41rpx;
					height: 41rpx;
				}

			}

			.search-font {
				text {
					display: flex;
					justify-content: center;
					font-size: 36rpx;
					color: #FF352B;
					margin: 0 19rpx 0 36rpx;

				}

			}
		}

		.banner {
			display: flex;
			justify-content: center;
			background-color: #F0F1F1F1;

			image {
				margin: 20rpx 0;
				width: 702rpx;
				height: 500rpx;
			}
		}

		.icon {
			display: flex;
			padding-left: 6rpx;
			flex-wrap: wrap;
			
			
			.iconMain {
				display: flex;
				align-items: center;
				flex-direction: column;
				margin: 40rpx  23rpx 0 24rpx;
				
				

					.iconImg {
						width: 140rpx;
						height: 140rpx;

					}

					.iconText {
						
						font: #333333;
						font-size: 30rpx;
						flex: 1;
						
					}
				
			}



		}

		.zhanwei {
			height: 116rpx;
			background-color: #F1F0F0F0;
		}

		.hidden {
			position: fixed;
			z-index: -1;
			width: 1upx;
			height: 1upx;
		}
	}
</style>
