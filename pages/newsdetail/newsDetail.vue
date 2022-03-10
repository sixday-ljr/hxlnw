<template>
	<view class="detail">
		<view class="newsHead" @click="back()">
			<image src="../../static/listen-news/返回.png" class="newsIcon"></image>
			<view class="newsOne">详情</view>
		</view>
		<view class="aa"style="width: 100%;height: 93rpx;"></view>
		<view class="detOne">
			<view class="detTwo">
				<image src="../../static/listen-news/kaishi2.png" class="newBtnOne"></image>
				<view class="newBtnTwo">听新闻</view>
			</view>
			<view class="detThree">点击播放当前页新闻</view>
		</view>
		<view>
			<image :src="pic" style="margin: 0rpx 24rpx 0rpx 24rpx;width:702rpx;">
			</image>
		</view>
		<!-- 富文本 -->
		<view style="margin: 24rpx;">
			<rich-text :nodes="rich"></rich-text>
		</view>
		<!-- <view class="guanggao"></view> -->
		<view class="audio">
			
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
	</view>
</template>

<script type="text/javascript">
	window.TencentGDT = window.TencentGDT || [];
	window.TencentGDT.push({
		app_id: '1200429323', // {String} - appid - 必填
		placement_id: '5023609828030603', // {String} - 广告位id - 必填
		type: 'native', // {String} - 原生广告类型 - 必填
		display_type: 'interstitial', // 播放类型：插屏
		muid_type: '1', // {String} - 移动终端标识类型，1：imei，2：idfa，3：mac号 - 选填
		muid: '******', // {String} - 加密终端标识，详细加密算法见API说明 -  选填
		count: 1, // {Number} - 拉取广告的数量，默认是3，最高支持10 - 选填
		onComplete: function(res) {
			if (res && res.constructor === Array) {
				// 原生模板广告位调用 window.TencentGDT.NATIVE.renderAd(res[0], 'containerId') 进行模板广告的渲染
				// res[0] 代表取广告数组第一个数据
				// containerId：广告容器ID
				window.TencentGDT.NATIVE.renderAd(res[0], 'containerId')
			} else {
				// 加载广告API，如广告回调无广告，可使用loadAd再次拉取广告
				// 注意：拉取广告频率每分钟不要超过20次，否则会被广告接口过滤，影响广告位填充率
				setTimeout(function() {
					window.TencentGDT.NATIVE.loadAd(this.placement_id)
				}, 3000)
			}
		}
	});
	

	export default {
		data() {
			return {
				rich:'',
				pic: '',
				dataOne: {
					"params": {
						"id": "111",
					}
				},


				// strings: '<div style="font-size: 46rpx;font-weight: 400;color: #333333;line-height: 42rpx;"><img src=""/></div>'
			};
		},
		
		onLoad(option) {
			console.log(option.id)
			this.dataOne.params.id = option.id
			this.text()
			console.log(this.dataOne)
		},
		mounted() {
			(function() {
				var doc = document,
					h = doc.getElementsByTagName('head')[0],
					s = doc.createElement('script');
				s.async = true;
				s.src = '//qzs.qq.com/qzone/biz/res/i.js';
				h && h.insertBefore(s, h.firstChild);
			})();
		},
		methods: {
			text() {
			console.log(this.dataOne)
				this.$request('article/detail', this.dataOne, 'POST').then((res) => {
					console.log(res.data.content)
					
					if (res.code === 200) {
						this.pic = res.data.pic
						this.rich=res.data.content
						console.log(this.pic)
				 }

				})
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
   
		}
	};
</script>

<style lang="scss">
	page {
		height: 100%;
		background-color: #f0f1f1;
	}

	.newsHead {
		display: flex;
		position: fixed;
		z-index: 1;
		width: 100%;
		height: 93rpx;
		top: 0;
		background-color: #ffffff;
	}

	.newsOne {
		margin-top: 15rpx;
		margin-left: 22rpx;
		font-size: 50rpx;
		font-weight: bold;
		color: #333333;
	}

	.newsIcon {
		margin-top: 30rpx;
		margin-left: 30rpx;
		width: 24rpx;
		height: 43rpx;
	}

	.detOne {
		margin: 25rpx;
		height: 120rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
	}

	.detTwo {
		width: 240rpx;
		height: 88rpx;
		background-color: #ff352b;
		margin-left: 20rpx;
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
		color: #ffffff;
		line-height: 51rpx;
		margin-right: 30rpx;
	}

	.detThree {
		margin-left: 20rpx;
		font-size: 36rpx;
		font-weight: 400;
		line-height: 51rpx;
	}

	.guanggao {
		width: 702rpx;
		height: 300rpx;
		background-color: red;
		margin-left: 24rpx;
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
</style>
