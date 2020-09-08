<template>
  <div class="searchindex">
      <div class="s_wrap">
          <div class="pgsrch">
              <input type="text" class="srch">
              <a href="" class="s-btn"></a>
              <div class="u-lstlay" style="display:none">
                  <div class="m-schlist">
                      <p class="note">
                          <a class="xtag" href=""></a>
                      </p>
                      <div class="rap">
                          <div class="itm">
                              <h3 class="s_hd">
                                  <i class="icn"></i>
                                  <em class="f1">歌手</em>
                              </h3>
                              <ul>
                                  <li>
                                      <a href="">
                                          <span>周杰伦</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div class="itm">
                              <h3 class="s_hd">
                                  <i class="icn"></i>
                                  <em class="f1">单曲</em>
                              </h3>
                              <ul>
                                  <li>
                                      <a href="">
                                          <span>周杰伦</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div class="itm">
                              <h3 class="s_hd">
                                  <i class="icn"></i>
                                  <em class="f1">专辑</em>
                              </h3>
                              <ul>
                                  <li>
                                      <a href="">
                                          <span>周杰伦</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div class="itm">
                              <h3 class="s_hd">
                                  <i class="icn"></i>
                                  <em class="f1">视频</em>
                              </h3>
                              <ul>
                                  <li>
                                      <a href="">
                                          <span>周杰伦</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div class="itm">
                              <h3 class="s_hd">
                                  <i class="icn"></i>
                                  <em class="f1">歌单</em>
                              </h3>
                              <ul>
                                  <li>
                                      <a href="">
                                          <span>周杰伦</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="m-search">
              <div class="snote">
                  搜索“周杰伦”，找到
                  <em>600</em>
                  首单曲
              </div>
              <ul class="m-tabs">
                  <li>
                      <a href="">
                          <em>单曲</em>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <em>歌手</em>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <em>专辑</em>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <em>视频</em>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <em>歌词</em>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <em>歌单</em>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <em>主播电台</em>
                      </a>
                  </li>
                  <li>
                      <a href="">
                          <em>用户</em>
                      </a>
                  </li>
              </ul>
              <div class="ztags">
                  <div class="n-srch">
                      <div class="songst">
                          <div class="item">
                              <div class="s_td">
                                  <a href="" class="h_d">

                                  </a>
                              </div>
                              <div class="s_td w0">
                                  <div class="sn">
                                      <div class="s_text">
                                          <a href="">
                                              <b>那些你很美丽的梦</b>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div class="s_td w"></div>
                              <div class="s_td w1">
                                  <a href="">
                                      <span>林俊杰</span>
                                  </a>
                              </div>
                              <div class="s_td w2">
                                  <div>
                                      <a href="">《学不会》</a>
                                  </div>
                              </div>
                              <div class="s_td">03:34</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>

<style>
.searchindex{
        width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
}
.s_wrap{
        padding: 40px;
}
.pgsrch{
        width: 420px;
    height: 40px;
    margin: 0 auto;
    background-position: 0 0;
    z-index: 10;
}
.srch{
    float: left;
    width: 320px;
    height: 17px;
    margin: 12px 0 0 20px;
    padding: 0;
    background: #fff;
    border: none;
}
.s-btn{
        float: right;
    width: 50px;
    height: 40px;
    text-indent: -9999px;
}


/* .m-search{

} */
.snote{
    font-size: 12px;
    margin: 28px 0 17px;
}
.snote em{
    color: #c20c0c;
}
.m-tabs{
    height: 39px;
    border: 1px solid #ccc;
    border-width: 0 1px;
    background-position: 0 0;
    background-repeat: repeat-x;
}
.m-tabs li {
    position: relative;
    left: -1px;
    float: left;
    height: 39px;
    font-size: 14px;
}
.m-tabs li a em{
    display: block;
    width: 108px;
    color: #333;
    height: 37px;
    padding: 2px 2px 0 0;
    line-height: 37px;
    cursor: pointer;
    text-align: center;
    font-style: normal;
    font-size: 14px;
}

.ztags{
    width: 900px;
    height: 1290px;
}
.n-srch{
    margin-top: 20px;
}
.item{
    padding: 10px 10px 8px 18px;
    border: 1px solid #e1e1e1;
    height: 23px;
}
.s_td{
    float: left;
    margin-right: 5px;
    font-size: 12px;
}
.h_d{
    height: 17px;
    width: 17px;
}
.h_d {
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-right: 15px;
    cursor: pointer
}
.w0{
    width: 370px;
}

.s_text{
    position: relative;
    display: inline-block;
    padding-right: 25px;
    width: auto;
    max-width: 100%;
    height: 20px;
}
.s_text a b{
    color: #333;
    
    font-weight: normal;
}
.w1{
        width: 15%;
    margin-right: 12px;
}
.w1 a span{
    color: #0c73c2;
}
.w{
    width: 96px;
    height: 17px;
}
.w2{
        width: 18%;
    margin-right: 12px;
}
.w2 a{
    color: #333;
}
</style>