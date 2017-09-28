<template>
	<div class="home-page">
		<slider class="slider" :arrows="true" :infinite="true" :autoplay="true" v-if="slideHeight">
			<div class="slide" v-for="(item, index) in slides" :style="'background-image:url('+item+');height:'+slideHeight+'px'"></div>
		</slider>
		<div class="summary-section">
			<div class="container">
				<div class="pad-top-20 pad-bottom-20 clear summary-list text-center">
					<div class="pad-top-10 pad-bottom-10 col-1-2 col-1-4-l">
						<router-link to="/booking/entrance" class="icon block">
							<i class="block iconfont icon-icon_"></i>
							<span class="block pad-top-20">在线预订</span>
						</router-link>
					</div>
					<div class="pad-top-10 pad-bottom-10 col-1-2 col-1-4-l">
						<router-link to="/service/notice" class="icon block">
							<i class="block iconfont icon-icon_1"></i>
							<span class="block pad-top-20">入园须知</span>
						</router-link>
					</div>
					<div class="pad-top-10 pad-bottom-10 col-1-2 col-1-4-l">
						<router-link to="/service/location" class="icon block">
							<i class="block iconfont icon-icon_3"></i>
							<span class="block pad-top-20">公园交通</span>
						</router-link>
					</div>
					<div class="pad-top-10 pad-bottom-10 col-1-2 col-1-4-l">
						<router-link to="/ours/contact" class="icon block">
							<i class="block iconfont icon-icon_2"></i>
							<span class="block pad-top-20">联系我们</span>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="feature-scetion pad-top-20 pad-top-60-m">
			<div class="container">
				<div class="row pad-top-30 pad-bottom-30">
					<div class="col-12 col-1-2-l">
						<a class="feature">
							<div class="feature-image img-transition">
								<img src="../../assets/1.png" class="img-fluid" alt="">
							</div>
							<h2 class="feature-title pad-top-5 pad-bottom-5-m">海洋沙滩狂欢节</h2>
							<a href="">
								<i class="iconfont icon-icon"></i>了解更多</a>
						</a>
					</div>
					<div class="col-12 col-1-2-l">
						<a class="feature">
							<div class="feature-image img-transition">
								<img src="../../assets/2.png" class="img-fluid" alt="">
							</div>
							<h2 class="feature-title pad-top-5 pad-bottom-5-m">海洋沙滩狂欢节</h2>
							<a href="">
								<i class="iconfont icon-icon"></i>了解更多</a>
						</a>
					</div>
				</div>
				<div class="row pad-bottom-30">
					<div class="col-1-2 col-1-4-l">
						<a class="feature">
							<div class="feature-image img-transition">
								<img src="../../assets/3.png" class="img-fluid" alt="">
							</div>
							<h3 class="feature-title pad-top-5 pad-bottom-5-m">海洋沙滩狂欢节</h3>
							<a href="">
								<i class="iconfont icon-icon"></i>了解更多</a>
						</a>
					</div>
					<div class="col-1-2 col-1-4-l">
						<a class="feature">
							<div class="feature-image img-transition">
								<img src="../../assets/4.png" class="img-fluid" alt="">
							</div>
							<h3 class="feature-title pad-top-5 pad-bottom-5-m">海洋沙滩狂欢节</h3>
							<a href="">
								<i class="iconfont icon-icon"></i>了解更多</a>
						</a>
					</div>
					<div class="col-1-2 col-1-4-l">
						<a class="feature">
							<div class="feature-image img-transition">
								<img src="../../assets/5.png" class="img-fluid" alt="">
							</div>
							<h3 class="feature-title pad-top-5 pad-bottom-5-m">海洋沙滩狂欢节</h3>
							<a href="">
								<i class="iconfont icon-icon"></i>了解更多</a>
						</a>
					</div>
					<div class="col-1-2 col-1-4-l">
						<a class="feature">
							<div class="feature-image img-transition">
								<img src="../../assets/6.png" class="img-fluid" alt="">
							</div>
							<h3 class="feature-title pad-top-5 pad-bottom-5-m">海洋沙滩狂欢节</h3>
							<a href="">
								<i class="iconfont icon-icon"></i>了解更多</a>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Agile from '@/components/Agile'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'index',
	data() {
		return {
			slides: [
				require('../../assets/b1.jpg'),
				require('../../assets/b2.jpg'),
				require('../../assets/b3.jpg')
			]
		}
	},
	components: {
		Slider: Agile
	},
	computed: {
		...mapGetters({
			device: 'device',
		}),
		slideHeight(){
			return this.device.isMobile ? window.innerWidth : this.device.height - 62
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/sass/base/_mixins";

.slider {
	// margin-top: -62px;
}

.slide {
	background: {
		position: 50%; // size: auto 100%;
		size: cover
	}
}

.summary {
	&-section {
		box-shadow: 0 2px 10px rgba(10, 10, 10, 0.1)
	}
	&-list {
		.icon {
			margin-top: 6px;
			font-size: 16px;
			height: 130px;

			&:hover .iconfont {
				// background-color: #168c74;
				// color: #fff;
			}
		}
		.iconfont {
			// transition 0.2s color 0.2s;
			background-color: #1ba68a;
			border-color: #1ba68a;
			color: #fff;
			font-size: 46px;
			height: 80px;
			width: 80px;
			border-radius: 50%; // background: #eee;
			// text-align: 
			display: inline-block;
			line-height: 80px;
			position: relative;
			&:hover {
				background-color: #168c74;
				&:after {
					transform: scale(1);
					opacity: 1;
					box-shadow: 0 0 0 2px #168c74
				}
			}
			&:after {
				top: -4px;
				left: -4px;
				padding: 4px;
				transition: transform 0.2s, opacity 0.2s;
				transform: scale(0.8);
				opacity: 0;
				pointer-events: none;
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				content: '';
				box-sizing: content-box;
				box-shadow: 0 0 0 2px #1ba68a
			}
		}
	}
}

.feature {
	// padding: 15px;
	display: block;
	margin-bottom: 20px;
	&-title {
		// font-size: 30px;
		font-weight: 400;
		@include m(){
			font-size: 16px
		}
	}
	img {
		width: 100%
	}
}

@include breakpoint(m) {
	.feature {
		padding: 10px;
		border: 1px solid #eee;
	}
}
</style>
