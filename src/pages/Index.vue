<template>
  <div class="wrapper">
    <top-nav></top-nav>
    <div class="main-wrapper">
      <search></search>
      <screen-nav></screen-nav>
      <screen-box v-bind:foods="foods" :slides="slides"></screen-box>
    </div>
    <footer-box></footer-box>
  </div>

</template>

<script>
    import TopNav from "../components/TopNav";
    import Search from "../components/Search";
    import ScreenNav from "../components/ScreenNav";
    import ScreenBox from "../components/ScreenBox";
    import FooterBox from "../components/FooterBox";
    export default {
        name: "Index",
      components: {FooterBox, ScreenBox, ScreenNav, Search, TopNav},
      data(){
          return{
              foods:[],
              slides:[]
          }
      },
      created:function () {
          this.$http.get("./static/data.json").then((data)=>{
            this.foods=data.body;
            console.log("foods加载成功")
          },(data)=>{
            console.log("foods加载失败")
          })
          this.$http.get("./static/slides.json").then((data)=>{
            this.slides=data.body;
            console.log("slides加载成功 "+this.slides)
          },(data)=>{
            console.log("slides加载失败")
          })
      }
    }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    height: 100%;
    /*background-image: url("../assets/bg.jpg");*/
    /*border: 1px solid black;*/
  }
  .wrapper .main-wrapper{
    width: 100%;
    height: 550px;
    /*border: 1px solid black;*/
  }
</style>
