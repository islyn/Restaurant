<template>

  <div class="screen-nav-wrap">
    <div class="screen-nav">
      <h2>主题市场</h2>
      <ul>
        <li>
          <router-link to="/menu/川渝风味">川渝风味</router-link>
          <!--<a href="#">川渝风味</a>-->
        </li>
        <li>
          <router-link to="{path:'/menu/2',query:{type:'广州风味'}}">广州风味</router-link>
        </li>
        <li>
          <router-link to="/menu/湘赣风味">湘赣风味</router-link>
        </li>
        <li>
          <router-link to="/menu/鲁豫风味">鲁豫风味</router-link>
        </li>
        <li>
          <router-link to="/menu/台湾风味">台湾风味</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "ScreenNav"
    }
</script>

<style scoped>
  /*中间导航条*/
  .screen-nav-wrap{
    width: 100%;
    height: 30px;
    /*border: 1px solid black;*/
  }
  .screen-nav{
    width: 900px;
    height: 30px;
    margin: 0 auto;
    background: #ff5903;
    /*border: 1px solid black;*/
  }
  .screen-nav h2{
    float: left;
    width: 190px;
    height: 30px;
    color: white;
    background-color: #ff4400;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    text-align: center;
  }
  .screen-nav li{
    width: 140px;
    height: 100%;
    float: left;
    text-align: center;
    /*padding: 0 5px;*/
    margin: 0 0;
    line-height: 30px;
    /*border: 1px solid black;*/
  }
  .screen-nav li a{
    font-size: 15px;
    font-weight: 700;
    color: white;
    width: 100%;
    height: 100%;
    display: block;
    /*border: 1px solid black;*/
  }
  .screen-nav li a:hover{
    background: #f40;
    /*color: #f40;*/
  }
</style>
