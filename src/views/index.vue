<template>
<div class="index">
	<ImageSlider/>
	<!-- 正文 -->
	<div class="content">
		<div class="content_one">
			<div class="one_c">
				<div class="wrap1">
					<div class="hot">
						<div class="hd1">
							<a class="tit" href="">热门推荐</a>
							<div class="tab">
								<a href="">华语</a>
								<span>|</span>
								<a href="">流行</a>
								<span>|</span>
								<a href="">摇滚</a>
								<span>|</span>
								<a href="">民谣</a>
								<span>|</span>
								<a href="">电子</a>
							</div>
							<span class="more">
								<a href="">更多</a>
							</span>
						</div>
						<ul class="lst">
							<li v-for="(items,index) in Playlist" :key="index">
								<div class="cover1">
									<img :src="items.coverImgUrl">
									<a href=""></a>
									<div class="bottom">
										<a href=""></a>
										<span class="icon"></span>
										<span class="nb">31万</span>
									</div>
								</div>
								<p class="dec">
									<a href="">{{items.name}}</a>
								</p>
							</li>


							


						</ul>
					</div>
					<div class="ad"></div>
					<div class="new"></div>
					<div class="bill"></div>
				</div>
			</div>
		</div>
		<div class="content_two">
			<div class="log">
				<p>登录小叶云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
				<a href="">用户登录</a>
			</div>
			<div class="singer">
				<h3 class="hd3">
					<span>入驻歌手</span>
					<a href="">查看全部</a>
				</h3>
				<ul class="cen">
					<li>
						<a href="">
							<div class="cen-head">
								<img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
							</div>
							<div class="ifo">
								<h4>
									<span>张惠妹aMEI</span>
								</h4>
								<p>台湾歌手张惠妹</p>
							</div>
						</a>
					</li>

					<li>
						<a href="">
							<div class="cen-head">
								<img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
							</div>
							<div class="ifo">
								<h4>
									<span>张惠妹aMEI</span>
								</h4>
								<p>台湾歌手张惠妹</p>
							</div>
						</a>
					</li>

					<li>
						<a href="">
							<div class="cen-head">
								<img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
							</div>
							<div class="ifo">
								<h4>
									<span>张惠妹aMEI</span>
								</h4>
								<p>台湾歌手张惠妹</p>
							</div>
						</a>
					</li>

					<li>
						<a href="">
							<div class="cen-head">
								<img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62">
							</div>
							<div class="ifo">
								<h4>
									<span>张惠妹aMEI</span>
								</h4>
								<p>台湾歌手张惠妹</p>
							</div>
						</a>
					</li>
				</ul>
				<div class="cb">
					<a href="">
						<i>申请成为网易音乐人</i>
					</a>
				</div>
			</div>
			<div class=""></div>
		</div>
	</div>
	<!-- 脚部 -->
	<div class="foot">
		<div class="ft">
			<div class="ft-c">
				<div class="copy">
					<p>
						<a href="">服务条款</a>
						<span class="line">|</span>
						<a href="">隐私政策</a>
						<span class="line">|</span>
						<a href="">儿童隐私政策</a>
						<span class="line">|</span>
						<a href="">版权投诉指引</a>
						<span class="line">|</span>
						<a href="">意见反馈</a>
						<span class="line">|</span>
					</p>
					<p>
						<span>小叶公司版权所有@1997-2020</span>
						<span>广州小叶科技有限公司</span>
						<a href="">浙网文[2018]3506-263号</a>
					</p>
					<p>
						<span>违法和不良信息举报电话：0571-89853516</span>
						<span>举报邮箱：</span>
						<a href="">1139014471@qq.com</a>
					</p>
					<p>
						<span>粤B2-20090191-18</span>
						<a href="">工业和信息化部备案管理系统网站</a>
					</p>
				</div>
				<ul class="enter">
					<li>
						<a href=""></a>
						<span></span>
					</li>
					<li>
						<a href=""></a>
						<span></span>
					</li>
					<li>
						<a href=""></a>
						<span></span>
					</li>
					<li>
						<a href=""></a>
						<span></span>
					</li>
				</ul>
			</div>
		</div>
	</div>

   </div> 
</template>

<script>
// @ is an alias to /src
import ImageSlider from '@/components/ImageSlider.vue'
import {getPlaylist} from '@/api/recommend.js'

export default {
  name: 'index',
  components: {
    ImageSlider
  },
   data(){
	   return {
	  dataList:["http://p1.music.126.net/qUoxGejgRY-UGYJMLgOUcA==/109951164723503863.jpg","https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg","https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
	  currentIndex: 0,
	  timer:null,
	  Playlist:[]
	   }
	},
	created(){		  
			this._getPlaylist();
		},

  		methods:{
			gotoPage(index){
					this.currentIndex=index;
				},
			
			_getPlaylist() {
				getPlaylist().then((res) => {
				console.log(res);	
				this.Playlist=res;
			
			})
			// console.log(getSearch);
		  }
		  },
  computed:{
	  prevIndex(){
		  if(this.currentIndex==0){
			  return this.dataList.length-1;
		  }else{
			  return this.currentIndex-1;
		  }
	  },

	   nextIndex(){
		  if(this.currentIndex==this.dataList.length-1){
			  return 0;
		  }else{
			  return this.currentIndex+1;
		  }
	  },

	  runInv(){
		  this.timer=setInterval(()=>{
			  this.gotoPage(this.nextIndex)
		  },1000)
	  }
  }
}
</script>


<style>

	
		.content{
			/*background-color: blue;*/
			width: 980px;
			min-height: 700px;
			margin: 0px auto;
			border: 1px solid #d3d3d3;
			border-width: 0 1px;
		}
		.content_one{
			float: left;
			width: 100%;
			margin-right: -250px;
		}
		.one_c{
			margin-right: 251px;
		}
		.wrap1{
			padding: 20px 20px 40px;
		}


		.hd1{
			height: 33px;
			padding: 0 10px 0 34px;
			border-bottom: 2px solid #c10d0c;
			background-position: -225px -156px;
		}
		.tit{
			float: left;
			font-size: 20px;
			font-weight: normal;
			line-height: 28px;
			color: #333;
		}
		.tab{
			float: left;
			margin: 7px 0 0 20px;
		}
		.tab a{
			color: #666;
		}
		.tab a:hover{
			text-decoration:underline;
		}
		.tab span{
			margin: 0 10px;
			color: #ccc;
		}

		.more{
			float: right;
			margin-top: 9px;
		}
		.more a{
			color: #666;
		}


		.lst{
			margin: 20px 0 0 -42px;
		}
		.lst li{
			width: 140px;
			height: 204px;
			
			float: left;
			display: inline-block;
			overflow: hidden;
			padding:  0 0 30px 42px;
			line-height: 1.4;
		}
		.cover1{
			width: 140px;
			height: 140px;
			position: relative;
			display: block;
		}
		.cover1 img{
			display: block;
			width: 100%;
			height: 100%;
		}
		.cover1 a{
			/* position: absolute; */
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		.bottom{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 27px;
			color: #ccc;
			background-position: 10px 10px;
			background-repeat: no-repeat;
			background-attachment:fixed;
			background: url(https://s2.music.126.net/style/web2/img/coverall.png?146a823857e28fbb46f72028dbbd5520);
		}
		.bottom a{
			position: absolute;
			right: 10px;
			bottom: 5px;
			width: 16px;
			height: 17px;
			background-position: 0 0;
		}
		.icon{
			float: left;
			width: 14px;
			height: 11px;
			background-position: 0 -24px;
			margin: 9px 5px 9px 10px;
		}
		.nb{
			float: left;
			margin: 7px 0 0 0;
			font-size: 12px;
		}
		.dec{
			margin: 8px 0 3px;
			font-size: 14px;
			width: 100%;
		}
		.dec a{
			display: inline-block;
			max-width: 100%;
			vertical-align: middle;
			color: #000;
		}



		/*正文第二栏*/
		.content_two{
			position: relative;
			float: right;
			width: 250px;
			zoom:1;
		}
		.log{
			height: 126px;
			/*background: url(https://s2.music.126.net/style/web2/img/index/index.png?ba5067840d9580a1104331136ab596b4);*/
		}
		.log p{
			width: 205px;
			margin: 0 auto;
			padding: 16px 0;
			line-height: 22px;
			color: #666;
			font-size: 12px;
		}
		.log a{
			display: block;
			width: 100px;
			height: 31px;
			line-height: 31px;
			text-align: center;
			color: #fff;
			/*text-shadow: 0 1px 0 #8a060b;*/
			margin: 0 auto;
			/*background-position: 0 -195px;
			background: url(https://s2.music.126.net/style/web2/img/index/index.png?ba5067840d9580a1104331136ab596b4);*/
		}

		.singer{
			margin-top: 15px;
		}
		.hd3{
			position: relative;
			height: 23px;
			margin: 0 20px;
			border-bottom: 1px solid #ccc;
			color: #333;
		}
		.hd3 span{
			float: left;
			font-size: 12px;
		}
		.hd3 a{
			float: right;
			font-weight: normal;
			color: #666;
			text-decoration: none;
		}
		.cen{
			margin: 6px 0 14px 20px;
			height: 300px;
		}
		.cen li{
			margin-top:14px;
			float: left;
			width: 210px;
			height:62px;
			background: #fafafa;
			list-style: none;
		}
		.cen li a{
			float: left;
			width: 210px;
			height:62px;
			background: #fafafa;
		}
		.cen-head{
			float: left;
			width: 62px;
			height: 62px;
		}
		.ifo{
			float: left;
			width: 133px;
			height: 60px;
			padding-left: 14px;
			border: 1px solid #e9e9e9;
			border-left: none;
		}
		.ifo h4{
			margin-top: 8px;
		}
		.ifo h4 span{
			font-size: 14px;
			font-weight: bold;
			color: #333;
			width: 90%;
			display: inline-block;
		}
		.ifo p{
			color: #666;
			width: 90%;
			margin-top: 8px;
		}


		.cb a{
			margin-left: 20px;
			border: 1px solid #e9e9e9;
			border-radius: 4px;
			color: #333;
			padding: 0 5px 0 0;
			height: 31px;
			display: block;
			width: 200px;
		}
		.cb a i{
			width: 170px;
			font-weight: bold;
			padding: 0 15px 0 20px;
			display: inline-block;
			height: 31px;
			line-height: 31px;
			text-align: center;
			vertical-align: top;
			font-style: normal;
		}




		.foot{
			
			position: relative;
			height: 172px;
			overflow: hidden;
			border-top: 1px solid #d3d3d3;
			background: #f2f2f2;
		}
		.ft{
			width: 980px;
			margin: 0 auto;
			height: 111px;
		}
		.ft-c{
			width: 100%;
			height: 100%;
		}
		.copy{
			float: left;
			width: 520px;
			padding-top: 15px;
			line-height: 24px;
		}
		.copy p a{
			color: #999;
		}
		.line{
			margin: 0 8px 0 10px;
			color: #c2c2c2;
		}
		.copy p span{
			font-size: 12px;
			color: #666;
		}

		.enter{
			width: 330px;
			margin-top: 33px;
			float: right;
		}
		.enter li:first-child{
			margin-left: 0;
		}
		.enter li{
			float: left;
			width: 60px;
			height: 70px;
			text-align: center;
			color: #666;
			list-style: none;
			margin-left: 30px;
			
		}
		.enter li a{
			display: block;
			width: 50px;
			height: 45px;
			margin: 0 auto;
			background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?9659d00e83fbabb4b54d75fcf4bbbb4e);
			background-size: 110px 450px;
		}
</style>