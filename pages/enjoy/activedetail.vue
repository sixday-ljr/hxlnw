<template>
	<view class="active">
		<!-- title标题 -->
		<view class="active_title">
			<image src="../../static/enjoy/back1.png" mode="" @click="back()"></image>
			<text>活动详情</text>
		</view>
		<!-- 主体 -->
		<view class="active_main">
			<view class="main_top">
				<view class="top1">
					<text>超实惠多人送餐包房</text>
					<text>生活服务</text>
				</view>
				<view class="top2">
					<text>开始时间: 2022-02-28 00:00:00</text>
				</view>
				<view class="img">
					<image src="../../static/enjoy/02001120008ds0m5a8111_R_300_225_R5_Q70_D.jpg" mode=""></image>
					<view class="radio">
						<view @click="video()"></view>
						<view @click="camera()"></view>
						<text>20</text>
					</view>
				</view>
				<view class="phone">
					<view class="phone_left">
						<image src="../../static/enjoy/money.png" mode=""></image>
						<text>158</text>
					</view>
					<view class="phone_center">
						<text>门市价:360</text>
					</view>
					<view class="phone_right">
						<text>联系商家</text>
						<view></view>
					</view>
				</view>
				<view class="xian"></view>
			</view>
			<view class="main_main">
				<view class="h1">
					<view></view>
					<text>热菜</text>
				</view>
				<ul class="main_ul">
					<li class="ul_li">
						<view>精品羊羔肉</view>
						<view class="li_right">
							<view>(1份)</view>
							<view>
								<image src="../../static/enjoy/钱钱-01@2x.png" mode=""></image>
								<text>48</text>
							</view>
						</view>
					</li>
					<li class="ul_li">
						<view>精品羊羔肉</view>
						<view class="li_right">
							<view>(10份)</view>
							<view>
								<image src="../../static/enjoy/钱钱-01@2x.png" mode=""></image>
								<text>48</text>
							</view>
						</view>
					</li>
					<li class="ul_li">
						<view>大叔肥牛</view>
						<view class="li_right">
							<view>(8份)</view>
							<view>
								<image src="../../static/enjoy/钱钱-01@2x.png" mode=""></image>
								<text>48</text>
							</view>
						</view>
					</li>
				</ul>
			</view>
			<view class="main_main">
				<view class="h1">
					<view></view>
					<text>主食</text>
				</view>
				<ul class="main_ul">
					<li class="ul_li">
						<view>馒头</view>
						<view class="li_right">
							<view>(9份)</view>
							<view>
								<image src="../../static/enjoy/钱钱-01@2x.png" mode=""></image>
								<text>48</text>
							</view>
						</view>
					</li>
					<li class="ul_li">
						<view>馒头</view>
						<view class="li_right">
							<view>(9份)</view>
							<view>
								<image src="../../static/enjoy/钱钱-01@2x.png" mode=""></image>
								<text>48</text>
							</view>
						</view>
					</li>
				</ul>
			</view>
		</view>
		<view class="active_other">
			<view class="other_time">
				<view class="time1">
					<view></view>
					<text>活动时间</text>
				</view>
				<view class="time2">2022-02-28 00:00:00 <view>至</view> 2022-03-10 00:00:00</view>
			</view>
			<view class="other_location">
				<view class="location1">
					<view></view>
					<text>商家地址</text>
				</view>
				<view class="location_text">
					黑龙江省哈尔滨市香坊区公滨路 572号汇鑫隆泰技术部
				</view>
			</view>
			<view class="shop_phone">
				<view class="shop1">
					<view></view>
					<text>商家电话</text>
				</view>
				<view class="shop2">0451-8856889</view>
			</view>
		</view>
		<view class="a" style="height: 250rpx;width: 100%;"></view>
		<view class="active_bot">
			<view>
				<image src="../../static/enjoy/fenxiang.png" mode=""></image>
				<text>分享</text>
			</view>
			<view @click="star()">
				<image src="../../static/enjoy/star.png" mode=""></image>
				<text>收藏</text>
			</view>
			<view class="mendian">
				<image src="../../static/enjoy/位置标记@2x.png" mode=""></image>
				<text>查看门店地址</text>
			</view>
		</view>
		<!-- 弹层 -->
		
		

	</view>
</template>

<script>
	
	export default {
		components: {
			
		},
		data() {
			return {

			}
		},
		onLoad() {


		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			star() {

			},
			video(){
				uni.getVideoInfo(
				  // url:url,
				)
			},
			camera(){
				uni.createCameraContext(
				       
				)
			}

		}
	}
</script>

<style>
	/* 页面总样式 */
	.active {
		background-color: #F0F1F1;

	}



	/* 弹层 */


	/* 标题 */
	.active_title {
		height: 72rpx;
		background-color: #FFFFFF;
	}

	.active_title>image {
		width: 18rpx;
		height: 32rpx;
		float: left;
		margin-top: 24rpx;
		margin-left: 25rpx;
	}

	.active_title>text {
		line-height: 72rpx;
		text-align: center;
		display: block;
	}

	/* 主体 */
	.active_main {
		width: 702rpx;
		height: 100%;
		margin: 34rpx 24rpx 0 24rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
	}

	.top1 {
		display: flex;
		justify-content: space-between;
		padding-left: 31rpx;
		padding-right: 40rpx;
		padding-top: 37rpx;
	}

	.top1>text {
		display: block;
	}

	.top1>text:nth-child(1) {
		font-size: 50rpx;
		color: #333333;
	}

	.top1>text:nth-child(2) {
		color: red;
		width: 161rpx;
		border: 1rpx solid red;
		border-radius: 10rpx;
		line-height: 51rpx;
		text-align: center;
		font-size: 36rpx;
		height: 51rpx;
		margin-top: 10rpx;

	}

	.top2 {
		margin-left: 33rpx;
		font-size: 40rpx;
		color: #7A7A7A;
		margin-top: 24rpx;
		margin-bottom: 33rpx;
	}

	.img {
		margin-left: 31rpx;
		position: relative;
	}

	.img>image {
		width: 636rpx;
		height: 350rpx;

	}

	.radio {
		width: 180rpx;
		height: 60rpx;
		background-color: rgba(0, 0, 0, 0.3);
		position: absolute;
		right: 48rpx;
		bottom: 20rpx;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-between;
		padding: 11rpx 17rpx 10rpx 17rpx;
	}

	.radio>view {
		width: 35rpx;
		height: 35rpx;
		margin-top: 14rpx;
	}

	.radio>view:nth-child(1) {
		background: url(../../static/enjoy/视频@2x.png);

	}

	.radio>view:nth-child(2) {
		background: url(../../static/enjoy/椭圆%202@2x.png);
	}

	.radio>view:nth-child(1),
	.radio>view:nth-child(2) {
		background-size: cover;
	}

	.radio>text {
		color: #FFFFFF;
		font-size: 40rpx;

		line-height: 60rpx;
		display: block;
	}

	.phone {
		display: flex;
		margin-top: 30rpx;
		padding-bottom: 35rpx;
	}

	.xian {
		width: 638rpx;
		height: 1rpx;
		background-color: #7A7A7A;
		margin-left: 31rpx;
	}

	.phone_left {
		margin-left: 33rpx;
		display: flex;
		margin-right: 20rpx;
	}

	.phone_left>image {
		width: 27rpx;
		height: 35rpx;
		margin-right: 15rpx;
		margin-top: 15rpx;
		display: block;
	}

	.phone_left>text {
		font-size: 50rpx;
		color: #FF352B;
	}

	.phone_center {
		font-size: 36rpx;
		color: #7A7A7A;
		padding-top: 6rpx;
		text-decoration: line-through;
		margin-right: 83rpx;
	}

	.phone_right {
		padding-top: 3rpx;
		display: flex;
	}

	.phone_right>text {
		font-size: 40rpx;
		color: #333333;
		font-weight: normal;
		margin-right: 16rpx;

	}

	.phone_right>view {
		margin-top: 12rpx;
		width: 37rpx;
		height: 35rpx;
		background: url(../../static/enjoy/电话%20拷贝@2x.png);
		background-size: cover;
	}

	.main_main {
		width: 100%;
		height: 100%;
		padding: 32rpx 0;
	}

	.h1 {
		display: flex;
	}

	.h1>view {
		width: 10rpx;
		height: 10rpx;
		background-color: #333333;
		border-radius: 50%;
		align-self: center;
		margin-right: 14rpx;
		margin-left: 30rpx;
	}

	.h1>text {
		display: block;
		font-size: 36rpx;
		color: #333333;
	}

	.main_ul {
		/* list-style: none; */
	}

	.ul_li {
		display: flex;
		justify-content: space-between;
		padding-left: 46rpx;
		padding-top: 30rpx;
		padding-right: 34rpx;
		font-size: 34rpx;
		color: #7A7A7A;
	}

	.li_right {
		width: 220rpx;
		display: flex;

		justify-content: space-between;
	}

	.ul_li>.li_right>view:nth-child(2)>image {
		width: 21rpx;
		height: 27rpx;
		margin-right: 11rpx;
		/* margin-left: 80rpx; */
	}

	/* 商家详情 */
	.active_other {
		width: 702rpx;
		height: 100%;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		margin-top: 46rpx;
		margin-left: 24rpx;
	}

	.other_time,
	.other_location,
	.shop_phone {
		padding: 36rpx 0rpx;
		/* padding-bottom: 36rpx; */
		border-bottom: 1rpx solid #C1BABA;
	}

	.shop_phone {
		border-bottom: none;
	}

	.shop1,
	.location1,
	.time1 {
		display: flex;
	}

	.time1>view {
		background: url(../../static/enjoy/时钟@2x.png);
	}

	.location1>view {
		background: url(../../static/enjoy/位置@2x.png);
	}

	.shop1>view {
		background: url(../../static/enjoy/电话@2x.png);
	}

	.shop1>view,
	.location1>view,
	.time1>view {
		width: 47rpx;
		height: 47rpx;
		background-size: cover;
		margin-right: 20rpx;
		margin-left: 33rpx;
		align-self: center;
	}

	.shop1>text,
	.location1>text,
	.time1>text {
		font-size: 44rpx;
		color: #333333;

	}

	.time2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20rpx;
		font-size: 40rpx;
		color: #7A7A7A;
	}

	.location_text {
		font-size: 40rpx;
		color: #7A7A7A;
		margin: 24rpx 44rpx 0rpx 100rpx;
	}

	.shop2 {
		text-align: center;
		font-size: 40rpx;
		color: #7A7A7A;
		margin-top: 20rpx;
	}


	/* 底部栏 */
	.active_bot {
		width: 100%;
		height: 140rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		padding-top: 42rpx;
		justify-content: space-around;
	}

	.active_bot>view>text {
		/* text-align: center; */
	}

	.active_bot>view:nth-child(1)>image,
	.active_bot>view:nth-child(2)>image {
		width: 50rpx;
		height: 50rpx;
		display: block;
		margin: auto;
	}

	.mendian {
		width: 446rpx;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		line-height: 90rpx;
		background-color: #FF352B;
		border-radius: 20rpx;
	}

	.mendian>image {
		width: 28rpx;
		height: 42rpx;
		display: block;
		margin-left: 50rpx;
		align-self: center;
	}

	.mendian>text {
		font-size: 50rpx;
		color: #FFFFFF;
		margin-right: 50rpx;
		line-height: 100rpx;
	}
</style>
