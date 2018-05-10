<template>

  <div class="top-nav-wrap">
    <div class="top-nav">
      <ul class="top-nav-left">
        <li class="china">
          <router-link class="top-nav-menu" to="/">食堂首页</router-link>
        </li>
        <li class="login">
          <router-link class="top-nav-menu login" to="/login">亲，请登录</router-link>
        </li>
        <li class="reg">
          <router-link class="top-nav-menu login" to="/register">免费注册</router-link>
        </li>
        <li class="phone">
          <router-link class="top-nav-menu" to="">手机逛一逛</router-link>
        </li>
      </ul>

      <ul class="top-nav-right">

        <li v-on:mouseover="show=1" v-on:mouseout="show=0" class="my">
          <router-link :style="{background:(show==1?'#fff':'#f5f5f5'),color:(show==1?'#ff4400':'#6c6c6c')}" class="top-nav-menu" to="">
            我的食堂
            <span class="bgPic xsjPic"></span>
          </router-link>
          <ul v-show="show==1" class="mySubList">
            <li>以前吃过的</li>
            <li>浏览足迹</li>
          </ul>
        </li>

        <li v-on:mouseover="shopCar=1" v-on:mouseout="shopCar=0" class="shopCar">
          <router-link class="top-nav-menu" to="/shopCar">
            <span :class="{bgPic:true,shopCarPic:shopCar==0,shopCarPicHover:shopCar==1}"></span>
            <span>购物车</span>
          </router-link>
        </li>

        <li v-on:mouseover="like=1;show=2" v-on:mouseout="like=0;show=0" class="like">
          <router-link :style="{background:(show==2?'#fff':'#f5f5f5'),color:(show==2?'#ff4400':'#6c6c6c')}" class="top-nav-menu" to="">
            <span :class="{bgPic:true,likePic:like==0,likePicHover:like==1}"></span>
            <span>收藏夹</span>
            <span class="bgPic xsjPic"></span>
          </router-link>
          <ul v-show="show==2" class="likeSubList">
            <li>收藏的菜</li>
            <li>收藏的店铺</li>
          </ul>
        </li>

      </ul>

    </div>
  </div>

</template>

<script>
    export default {
        name: "TopNav",
      data(){
          return{
            shopCar:0,
            like:0,
            show:0
          }
      }
    }
</script>

<style scoped>
  /*导航条*/
  .top-nav-wrap{
    width: 100%;
    height: 35px;
    background-color: #f5f5f5;
    border: 1px solid #eee;
  }
  .top-nav-wrap .top-nav{
    width: 1190px;
    height: 35px;
    margin: 0 auto;
    /*border: 1px solid black;*/
  }
  .top-nav-wrap .top-nav .top-nav-left{
    float: left;
  }
  .top-nav-wrap .top-nav .top-nav-right{
    float: right;
  }
  .top-nav-wrap .top-nav li{
    float: left;
    margin-right: 10px;
    /*border: 1px solid black;*/
  }
  /*.top-nav-wrap .top-nav li:hover{*/
    /*background-color: #fff;*/
    /*cursor: pointer;*/
  /*}*/
  .top-nav-wrap .top-nav li a{
    color: #6c6c6c;
    font-size: 12px;
    line-height: 35px;
    padding: 0 0 0 6px;
  }
  .top-nav-wrap .top-nav li a:hover{
    color: #ff4400;
    /*border: 1px solid black;*/
  }
  .top-nav-wrap .top-nav .top-nav-menu{
    width: 100%;
    height: 100%;
    display: block;
    padding: 0 3px;
    text-align: center;
    /*border: 1px solid black*/
  }
  .top-nav-wrap .top-nav .top-nav-menu:hover{
    background-color: #fff;
    cursor: pointer;
  }
  .top-nav-wrap .top-nav .login,
  .top-nav-wrap .top-nav .reg{
    color: #ff4400;
    /*border: 1px solid black*/
  }
  .top-nav-wrap .top-nav .china{
    color: #3c3c3c;
    font-size: 12px;
    line-height: 35px;
  }
  .top-nav-wrap .top-nav .cutOff span{
    color: #dddddd;
    line-height: 35px;
  }
  .top-nav-wrap .top-nav .bgPic{
    display: inline-block;
    width: 9px;
    height: 7px;
    vertical-align: middle;
    background-size: 100% 100%;
  }
  .top-nav-wrap .top-nav .xsjPic{
    background-image: url("../assets/xsjPic.png");
    width: 9px;
    height: 7px;
    margin-left: 0;
  }
  .top-nav-wrap .top-nav .shopCarPic{
    background-image: url("../assets/shopCar.png");
    width: 12px;
    height: 12px;
  }
  .top-nav-wrap .top-nav .shopCarPicHover{
    background-image: url("../assets/shopCarHover.png");
    width: 12px;
    height: 12px;
  }
  .top-nav-wrap .top-nav .likePic{
    background-image: url("../assets/likePic.png");
    width: 11px;
    height: 11px;
  }
  .top-nav-wrap .top-nav .likePicHover{
    background-image: url("../assets/likePicHover.png");
    width: 11px;
    height: 11px;
  }
  .top-nav-wrap .top-nav .my ul{
    position: absolute;
    width: 72px;
    background: #fff;
    display: inline-block;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
  .top-nav-wrap .top-nav .my li{
    /*padding: 6px 10px;*/
    width: 100%;
    height: 30px;
    text-align: center;
    cursor: pointer;
    font-size: 11px;
    color: #6c6c6c;
    display: block;
    line-height: 30px;
    float: left;
  }
  .top-nav-wrap .top-nav .my li:hover{
    background: #efefef;
  }
  .top-nav-wrap .top-nav .like ul{
    position: absolute;
    width: 72px;
    background: #fff;
    display: inline-block;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
  .top-nav-wrap .top-nav .like li{
    /*padding: 6px 10px;*/
    width: 100%;
    height: 30px;
    text-align: center;
    cursor: pointer;
    font-size: 11px;
    color: #6c6c6c;
    display: block;
    line-height: 30px;
    float: left;
  }
  .top-nav-wrap .top-nav .like li:hover{
    background: #efefef;
  }
</style>
