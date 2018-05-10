<template>

  <div class="search-wrap">
    <div class="search">
      <div class="logo-box">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="search-box">
        <div class="search-bd">
          <div class="search-tab">
            <ul>
              <li v-on:click="selected=0" :class="{select:selected==0}">宝贝</li>
              <li v-on:click="selected=1" :class="{select:selected==1}">店铺</li>
            </ul>
          </div>
          <div class="search-panel">
            <a href="#" class="searPic"></a>
            <form action="">
              <div class="btn">
                <button>搜索</button>
              </div>
              <div class="search-input">
                <input type="text" placeholder="搜搜你想吃的">
              </div>
            </form>
          </div>
        </div>
        <div class="search-ft">
          <ul>
            <li class="select"><a href="#">盖浇饭</a></li>
            <li><a href="#">米线</a></li>
            <li><a href="#">麻辣烫</a></li>
            <li><a href="#">热干面</a></li>
            <li><a href="#">更多></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Search",
      data(){
          return{
            selected:0,
          }
      }
    }
</script>

<style scoped>
  /*搜索*/
  .search-wrap{
    width: 100%;
    height: 87px;
    /*border: 1px solid black;*/
    background-color: #fff;
    padding: 24px 0 9px 0;
  }
  .search-wrap .search{
    width: 640px;
    height: 88px;
    /*border: 1px solid black;*/
    margin: 0 auto;
    /*vertical-align: middle;*/
  }
  .search-wrap .search .logo-box{
    width: 80px;
    height: 80px;
    /*border: 1px solid black;*/
    display: inline-block;
    vertical-align: middle;
  }
  .search-wrap .search .logo-box img{
    width: 100%;
    height: 100%;
  }
  .search-wrap .search .search-box{
    width: 500px;
    height: 80px;
    /*border: 1px solid black;*/
    display: inline-block;
    vertical-align: middle;
    margin-left: 50px;
  }
  .search-wrap .search .search-box .search-bd{
    width: 498px;
    height: 60px;
    /*border: 1px solid black;*/
  }
  .search-wrap .search .search-box .search-bd .search-tab{
    width: 400px;
    height: 20px;
    margin-left: 17px;
    /*border: 1px solid black;*/
  }
  .search-wrap .search .search-box .search-bd .search-tab li{
    float: left;
    font-size: 12px;
    font-weight: 700;
    width: 36px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #ff4400;
    margin-right: 4px;
    cursor: pointer;
  }
  .search-wrap .search .search-box .search-bd .search-tab li:hover{
    color: #ff4400;
    background-color: #ffeee5;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 6px;
  }
  .search-wrap .search .search-box .search-bd .search-tab .select{
    background-color: #ff4400;
    color: #fff;
    font-weight: 700;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .search-wrap .search .search-box .search-bd .search-panel{
    width: 496px;
    height: 38px;
    /*border: 1px solid black;*/
    position: relative;
  }
  .search-wrap .search .search-box .search-bd .search-panel .searPic{
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 8px;
    top: 9px;
    background-image: url("../assets/searPic.png");
    background-size: 100% 100%;
    /*border: 1px solid black;*/
  }
  .search-wrap .search .search-box .search-bd .search-panel .btn{
    right: 0px;
    top: 0;
    width: 74px;
    height: 38px;
    position: absolute;
    z-index: 1000;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    /*border: 1px solid black;*/
  }
  .search-wrap .search .search-box .search-bd .search-panel .btn button{
    border: none;
    background-color: #ff4400;
    color: white;
    font-size: 15px;
    font-weight: 700;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    outline: 0;
    cursor: pointer;
  }
  .search-wrap .search .search-box .search-bd .search-panel .btn button:hover{
    background-color: #ff5903;
    /*color: #ff4400;*/
  }
  .search-wrap .search .search-box .search-bd .search-panel .search-input{
    width: 422px;
    height: 34px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 2px solid #ff4400;
    border-right: none;
    overflow: hidden;
  }
  .search-wrap .search .search-box .search-bd .search-panel .search-input input{
    width: 100%;
    height: 30px;
    line-height: 18px;
    outline: 0;
    text-indent: 10px;
    padding: 2px 16px;
    background-color: white;
    border: none;
    margin-left: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .search-wrap .search .search-box .search-ft{
    width: 500px;
    height: 18px;
    margin-left: 17px;
    /*border: 1px solid black;*/
  }
  .search-wrap .search .search-box .search-ft li{
    float: left;
    /*border: 1px solid black;*/
    margin-right: 8px;
    text-align: center;
    line-height: 16px;
  }
  .search-wrap .search .search-box .search-ft li a{
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 14px;
    horiz-align: center;
    /*border: 1px solid black;*/
  }
  .search-wrap .search .search-box .search-ft li a:hover,
  .search-wrap .search .search-box .search-ft .select a{   /*排列顺序即为优先级*/
    color: #ff4400;
  }

</style>
