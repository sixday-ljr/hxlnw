<template>
	<view class="enjoy">
		<!-- 顶部title -->
		<view class="enjoy_top">
			<image class="top_left" src="../../static/enjoy/enjoy_left.png" mode=""></image>
			<text class="top_center">享特惠</text>
			<text class="top_right">我的收藏</text>
		</view>
		<!-- 全部分类 -->
		<view class="sort">
			<ren-dropdown-filter :filterData='filterData' :defaultIndex='defaultIndex' @ed='ed'
				@dateChange='dateChange'></ren-dropdown-filter>
		</view>
		<!-- 列表 -->
		
	</view>
</template>

<script>
	import RenDropdownFilter from '@/components/ren-dropdown-filter/ren-dropdown-filter.vue'
	export default {
		components: {
			RenDropdownFilter
		},
		data() {
			return {
				filterData: [
					[{
						text: '全部分类',
						value: ''
					}, {
						text: '全部',
						value: 1
					}, {
						text: '运动健身',
						value: 2
					}, {
						text: '休闲旅游',
						value: 3
					},
					{
						text: '兴趣爱好',
						value: 3
					},
					{
						text: '保养',
						value: 3
					},{
						text: '团体活动',
						value: 3
					},{
						text: '运动',
						value: 3
					},
					{
						text: '生活服务',
						value: 3
					}],
					[{
						text: '筛选',
						value: ''
					}, {
						text: '类型1',
						value: 1
					}, {
						text: '类型2',
						value: 2
					}, {
						text: '类型3',
						value: 3
					}]
				],
				defaultIndex: [0, 0]
			}
		},

		onLoad() {

		},
		methods: {
			ed(res) {
				console.log(res)
			},
			dateChange(d) {
				uni.showToast({
					icon: 'none',
					title: d
				})
			}
		}
	}
</script>

<style>
	.enjoy_top {
		width: 100%;
		height: 72rpx;
		background: linear-gradient(to right, #FF3B26, #FF7105);

	}

	.top_center,
	.top_right {
		color: #FFFFFF;
		font-size: 50rpx;
		font-weight: bold;
		line-height: 72rpx;
	}

	.top_center {
		margin-left: 255rpx;
	}

	.top_right {
		font-size: 40rpx;
		margin-right: 26rpx;
		float: right;

	}

	.top_left {
		width: 21rpx;
		height: 37rpx;
		margin-left: 26rpx;
		padding-top: 20rpx;
		line-height: 72rpx;
		float: left;
	}
	.sort{
		height: 83rpx;
	}
</style>
