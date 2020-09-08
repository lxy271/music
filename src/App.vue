<template>
  <div id="app">
    <div class="head">
		<div class="head_one">
			<div class="head_one_content">
				<h1 class="musicname"><a href="#">小叶云音乐</a></h1>
				<ul class="nav">
					<li><span><a class="leo" href=""><em><router-link to="/">发现音乐</router-link></em><sub></sub></a></span></li>
					<li><span><a class="leo" href=""><em><router-link to="/mymusic">我的音乐</router-link></em><sub></sub></a></span></li>
					<li><span><a class="leo" href=""><em>朋友</em><sub></sub></a></span></li>
					<li><span><a class="leo" href=""><em>商城</em><sub></sub></a></span></li>
					<li><span><a class="leo" href=""><em>音乐人</em><sub></sub></a></span></li>
					<li><span><a class="leo" href=""><em>下载客户端</em><sub></sub></a></span></li>
				</ul>
				<div class="login">
					<span href="" @click="$store.state.showModal=true">登陆</span>
				</div>
				<a class="actor" href="">创作者中心</a>
				<div class="search" v-on:click="_getSearch">
					<div class="bg1">
						<span class="parent">
						<router-link to="/mysearch"><input type="text" name=""></router-link>
						<!-- <label>音乐/视频/电台/用户</label> -->
					</span>
					</div>
				</div>
			</div>
		</div>
		<div class="head_two">
			<div class="head_two_content">
				<ul class="two_nav">
					<li><a href=""><em>推荐</em></a></li>
					<li><a href=""><em>排行榜</em></a></li>
					<li><a href=""><em>歌单</em></a></li>
					<li><a href=""><em>主播电台</em></a></li>
					<li><a href=""><em>歌手</em></a></li>
					<li><a href=""><em>新碟上架</em></a></li>
				</ul>
			</div>
		</div>
    </div>
	<LoginIndex v-if="$store.state.showModal"></LoginIndex>
    <router-view/>

	<div class="audio-box">
		<div class="audio-container">
			<div class="audio-view">
				<div class="audio-cover" ></div>
				<div class="audio-body">
					<h3 class="audio-title">未知歌曲</h3>
					<div class="audio-backs">
						<div class="audio-this-time">00:00</div>
						<div class="audio-count-time">00:00</div>
						<div class="audio-setbacks">
							<i class="audio-this-setbacks">
								<span class="audio-backs-btn"></span>
							</i>
							<span class="audio-cache-setbacks">
							</span>
						</div>
					</div>
				</div>
				<div class="audio-btn">
					<div class="audio-select">
						<div class="audio-prev"></div>
						<div class="audio-play"></div>
						<div class="audio-next"></div>
						<div class="audio-menu"></div>
						<div class="audio-volume"></div>
					</div>
					<div class="audio-set-volume">
						<div class="volume-box">
							<i><span></span></i>
						</div>
					</div>
					<div class="audio-list">
						<div class="audio-list-head">
							<p>歌单</p>
							<span class="menu-close">关闭</span>
						</div>
						<ul class="audio-inline">
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>

import LoginIndex from '@/components/LoginIndex.vue'
import {getSearch,getPlaylist} from '@/api/recommend.js'
import {ERR_OK} from '@/api/config.js'
import { apiAddress } from '@/api/config.js';
	export default{
		name:"#app",
		data(){
			return{
				Search:[]
			}
		},
		created() {
			  this._getSearch();
			  this.onLoad();
			//   this._getPlaylist();
		   },
		methods:{
		_getSearch() {
			getSearch().then((res) => {
			
				console.log(res) 
			
			})
			// console.log(getSearch);
		  },
		//   _getPlaylist() {
		// 	getPlaylist().then((res) => {
		// 	console.log(res);
		// 		this.Playlist=res.data.playlists;
			
		// 	})
		// 	// console.log(getSearch);
		//   },

		  onLoad() {
			// 调用api接口，并且提供参数    
			apiAddress({     
				keywords:"周杰伦"    
			}).then(res => {
				// 获取数据成功后的其他操作
				console.log(res);   
			})   
			}  
		  
		},
		
		components:{
			LoginIndex
		}
	}
</script>>

<style>

	@import "assets/audio.css";

    *{margin:0;padding:0;}
		a{
			text-decoration: none;
			color: white;
			font-size: 12px;
		}
		.head{
			background-color: red;
			width: 100%;
			height: 105px;
		}
		.head_one{
			background-color: #333;
			width: 100%;
			height: 70px;
		}
		.head_one_content{
			width: 1100px;
			height: 100%;
			margin: 0px auto;
		}
		/*大图标*/
		.musicname{
			float: left;
			width: 176px;
			height: 69px;

		}
		.musicname a{
			float: left;
			width: 157px;
			height: 100%;
			padding-right: 20px;
			font-size: 30px;
			color: white;
		}
		/*导航栏*/
		.nav{
			float: left;
			list-style: none;
			width: 508px;
			height: 70px;
		}
		.nav li, .nav li span, .nav a, .nav a em {
		    float: left;
		    height: 70px;
		    font-size: 14px;
		}
		.leo{
			padding: 0 19px;
			line-height: 70px;
		}
		.nav a em{
			font-style: normal;
		}


		/*第一行右边*/
		.login{
			float: right;
			margin: 19px 0 0 20px;
			padding: 0 22px 0 0;
		}
		.login span{
			margin-top: 7px;
			color: #787878;
			width: 28px;
			font-size: 12px;
		}
		.login span:hover{
			color: #999;
		}
		.actor{
			text-align: center;
			float: right;
			width: 90px;
			height: 32px;
			margin: 19px 0 0 12px;
			/*padding-left: 16px;*/
			border: 1px solid #4F4F4F;
			line-height: 33px;
			border-radius: 20px;
			color: #ccc;
			box-sizing: border-box;
			font-size: 12px;
		}
		.search{
			float: right;
			width: 158px;
			height: 32px;
			position: relative;
		}
		.bg1{
			float: right;
			width: 158px;
			height: 32px;
			margin-top: 19px;
			border-radius: 32px;
			background-color: #fff;
		}
		.parent{
			display: block;
			position: relative;
			margin: 8px 0 0 30px;
			width: 128px;
			height: 16px;
		}
		.parent input{
			border: 0;
			width: 95%;
			margin: 0;
			padding: 0;
			line-height: 16px;

		}
		.parent label{
			display: block;
			position: absolute;
			width: 90%;
			color: #9b9b9b;
			top:0;
			left: 0;
			font-size: 12px;
			/*width: 121px;
			height: 16px;*/
		}


		.head_two{
			background-color: #c20c0c;
			width: 100%;
			height: 35px;
		}
		.head_two_content{
			width: 1100px;
			height: 34px;
			margin: 0 auto;
		}
		.two_nav{
			float: left;
			padding-left: 180px;
		}
		.two_nav li{
			float: left;
			height: 34px;
			text-align: center;
			list-style: none;
		}
		.two_nav li a{
			float: left;
		}
		.two_nav li a em{
			height: 20px;
			margin: 7px 17px 0;
			padding: 0 13px;
			display: inline-block;
			line-height: 21px;
			border-radius: 20px;
			font-style: normal;
		}
		.two_nav em:hover{
			background-color: #9b0909;
		}
</style>
