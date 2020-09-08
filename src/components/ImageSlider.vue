<template>

  <div class="image">

		<div class="ima">
			<div class="ban1" v-on:mouseover="stop()" v-on:mouseout="move()">
				<div class="ban1-ima">
					<a href="" v-for="(items,index) in list" v-show="index===num" :key="index">
						<img class="flag1" v-bind:src="items"> 
					</a>
				</div>
				<a class="left1" href="" v-on:click="gotoPage(prevIndex)"></a>
				<a class="right" href="" v-on:click="gotoPage(nextIndex)"></a>
				<div class="dots">
					 <li v-for="(items,index) in data" :key="index" @click="change(index)" :class="{'active':index==num}">  {{items}}</li>
				</div>
			</div>
			<div class="download">
				<a href=""></a>
			</div>
		</div>
	</div>




</template>

<script>
export default {
   name: 'ImageSlider',
	 data(){
            return{
                data:['1','2','3'],
                time:'',
                num:0,
                list:['http://p1.music.126.net/85vezsP6eAzsgPcB0ENKCg==/109951164761512669.jpg?imageView&quality=89',
                    "http://p1.music.126.net/UMgLq_B-Yc-1g-bb0jnD8A==/109951164760523321.jpg?imageView&quality=89",
                    "http://p1.music.126.net/hTMtzjRp7Oe6WOW5Hi9SDA==/109951164762873640.jpg?imageView&quality=89"],
            }
        },
        methods:{
            play(){
                this.time=setInterval(()=>{
                    this.num++;
                    if(this.num==3){
                        this.num=0
                    }

                },5000)
            },
            change(i){
                this.num=i
            },
            stop(){
                clearInterval(this.time)
            },
            move(){
                this.play();
            }
        },
        created(){
            this.play();
		}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image{
			/*background-color: black;*/
			width: 100%;
			height: 285px;
			background-image: url(http://p1.music.126.net/aBBDqAv25q1SXxGI410Ikg==/109951164724379133.jpg?imageView&blur=40x20);
			background-position: center center;
			background-size: 6000px;
		}
		.ima{
			/*background-color: pink;
			width: 51%;
			height: 100%;
			margin: 0px auto;*/
			position: relative;
			width: 982px;
			height: 285px;
			margin: 0 auto;
		}
		.ban1{
			width: 982px;
			height: 285px;
			position: relative;
		}
		.ban1-ima{
			width: 100%;
			height: 285px;
			overflow: hidden;
		}
		.flag1{
			width: 730px;
			display: block;
			height: 285px;
		}
		.left1{
			display: block;
			position: absolute;
			top:50%;
			margin-top: -31px;
			width: 37px;
			height: 63px;
			left: -68px;
			background-position: 0 -3600px;			    
			background: url(https://s2.music.126.net/style/web2/img/index/banner.png?b6f1918513af84f5f7f73ce5e94b03a0);
		}
		.right{
			display: block;
			position: absolute;
			top: 50%;
			margin-top: -31px;
			width: 37px;
			height: 63px;
			/*background-color: red;*/
			right: -68px;
			/*background-position: 0 -508px;*/
			background: url(https://s2.music.126.net/style/web2/img/index/banner.png?b6f1918513af84f5f7f73ce5e94b03a0);
		}
		.dots{
			position: absolute;
			top: 259px;
			left: 0;
			width: 730px;
			height: 20px;
			text-align: center;
		}
		.dots li{
			display: inline-block;
			width: 20px;
			height: 20px;
			background-position: 3px -343px;
			background: url(https://s2.music.126.net/style/web2/img/index/banner.png?b6f1918513af84f5f7f73ce5e94b03a0);
		}


		.download{
			position: absolute;
			top: 0;
			right: -1px;
			width: 254px;
			height: 285px;
		}
		.download a{
			background: url(https://s2.music.126.net/style/web2/img/index/download.png);
			display: block;
			width: 254px;
			height: 285px;
		}

</style>
