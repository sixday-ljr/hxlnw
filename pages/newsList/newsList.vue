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
			<audio class="audio_main" :src="current.src" :poster="current.poster" :name="current.name"
				:author="current.author" :action="audioAction" controls></audio>
			<view class="bofang">
				<image src="../../components/uniapp-zaudio/static/shangyige.png" mode=""></image>
				<image src="../../components/uniapp-zaudio/static/bofang.png" mode=""></image>
				<image @click="audio_previous()" src="../../components/uniapp-zaudio/static/xiayige.png" mode=""></image>
			</view>

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
						"sort": "3"
					}
				},
				sortId:'',

				audioAction: {
					method: 'pause'
				},
				newsList: [],
				current: {
					poster: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png',
					name: '',
					author: '',
					src:'',
				},
				
			}
		},

		onLoad() {
			this.active()
			// this.audio_previous()
		},
		onShow() {

		},
		methods: {

			active() {
				this.$request('article/list', this.data1, 'post').then((res) => {
					if (res.code === 200) {
						this.newsList = res.data.items
						this.current.src =  this.newsList.slice(0,1)[0].mp3url
						this.current.name = this.newsList.slice(0,1)[0].title
						this.sortId = this.newsList.slice(0,1)[0].id
					}
					
					// console.log(this.newsList.slice(0,1))
					console.log(this.newsList)
					console.log(this.current)

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
			},
			audio_previous(){
			console.log(111)
			console.log(this.data1)
				this.data1.params.sort=this.sortId
				this.$request('article/audio_previous',this.data1,'POST').then((res)=>{
					if(res.code=== 200){
						console.log(res)
						this.current.src=res.data.mp3url,
						this.current.name=res.data.title
						// console.log(this.current.src)
					}
					
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
		// height: 229rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: column;
		.bofang{
			display: flex;
			position: fixed;
			bottom:30rpx;
			right: 40rpx;
			justify-content: space-between;
			width: 400rpx;
			image:nth-child(1){
				width: 24rpx;
				height: 24rpx;
			}
			image:nth-child(2){
				width: 19rpx;
				height: 25rpx;
			}
			image:nth-child(3){
				width: 24rpx;
				height: 24rpx;
			}
		}
	}


	.audio_main {
		width: 100%;
		// height: 100%;
	}

	/deep/ .uni-audio-default {
		border: none;
		width: 100%;
		display: block;
	}
</style>
