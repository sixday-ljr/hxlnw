<template>
	<view class="news">
		<view class="newsHead">
			<image src="../../static/listen-news/返回.png" class="newsIcon"></image>
			<view class="newsOne" v-for="item in newsZu" :key="item.id">{{item.title}}</view>
		</view>
		<view style="display: flex;">
			<view>
				<image src="../../static/listen-news/pexels-photo-2363356@2x.png" style="width:200rpx;height:220rpx;margin-left: 26rpx;margin-top: 42rpx;"></image>
			</view>
			<view>
				<view class="newsTip">韩江流域迎60年来严重干旱粤闽谋划重大引调...</view>
				<view class="newBtn">
					<image src="../../static/listen-news/zanting123.png" class="newBtnOne"></image>
					<view class="newBtnTwo">听新闻</view>
				</view>
			</view>
		</view>
		<!-- <view style="display: flex;">
			<view>
				<image src="../../static/listen-news/pexels-photo-2363356@2x.png" style="width:200rpx;height:220rpx;margin-left: 26rpx;margin-top: 42rpx;"></image>
			</view>
			<view>
				<view class="newsTip">韩江流域迎60年来严重干旱粤闽谋划重大引调...</view>
				<view class="newBtn">
					<image src="../../static/listen-news/zanting123.png" class="newBtnOne"></image>
					<view class="newBtnTwo">听新闻</view>
				</view>
			</view>
		</view> -->
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				newsZu:[],
				dataOne:{
					"params": {
						    "type": "1",
						}
				}
			}
		},
		onLoad(){
			this.getnewZu()
		},
		methods:{
			getnewZu(){
				this.$request('article/category',this.dataOne,'POST').then(res =>{
					console.log(res)
					this.newsZu = res.data.items
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		background-color: #f0f1f1;
	}
	.news{
		background-color: #F0F1F1;
	}
	.newsHead{
		display: flex;
		height: 93rpx;
		background-color: #FFFFFF;	
	}
	.newsIcon{
		margin-top: 30rpx;
		margin-left: 30rpx;
		width: 24rpx;
		height: 43rpx
	}
	.newsOne{
		display: flex;
		margin-top: 15rpx;
		margin-left: 35rpx;
		font-size: 50rpx;
		font-weight: bold;
		color: #333333;
	}
	.newsTip{
		margin-left: 20rpx;
		margin-top: 40rpx;
		font-size: 42rpx;
		width: 463rpx;
		height: 120rpx;
		font-weight: 400;
		color: #333333;
		line-height: 56rpx;
		margin-right: 60rpx ;
		// text-overflow: ellipsis;
		// overflow: hidden;
		// -webkit-line-clamp: 2;
		// white-space: wrap;
	}
	.newBtn{
		width:240rpx;
		height:88rpx;
		background-color: #FF352B;
		margin-left: 20rpx;
		margin-top: 10rpx;
		border-radius: 60rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 10rpx;
	}
	.newBtnOne{
		width:64rpx;
		height:64rpx;
	}
	.newBtnTwo{
		font-size: 42rpx;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 51rpx;
		margin-right: 30rpx;
	}
</style>
