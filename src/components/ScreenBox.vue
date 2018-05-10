<template>

  <div class="screen-box-wrap">
    <div class="screen-box">
      <div class="screen-left">
        <ul>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
          <li>
            <a href="#">养生</a>/
            <a href="#">养生</a>/
            <a href="#">养生</a>
          </li>
        </ul>
      </div>
      <div class="screen-right" @mouseover="clear" @mouseout="run">
        <img :src="(slides[selected].src)" />
        <h2>{{slides[selected].title}}/{{slides[selected].type}}</h2>
        <ul class="list" :style="'width:'+slides.length*14+'px'">
          <li v-for="(slide,index) in slides">
            <a v-on:click="restart(index)" :class="{select:(selected==index)}" href="#"></a>
          </li>
        </ul>
      </div>
    </div>
    <!--<p>{{// slides[0].title}}</p>-->
  </div>

</template>

<script>
    export default {
        name: "ScreenBox",
      props:['foods','slides'],
      data(){
          return{
            selected:0,
            invTime: 1000
            // slides:[
            //   {src:this.foods[0].src,title:this.foods[0].title}
            // ]
              // [
            //
            //   {
            //     src:'',
            //     title:'',
            //   }
              // {
              //   src:'./static/2.png',
              //   title:'xxx2'
              // }
              // {
              //   src:'./static/3.jpg',
              //   title:'xxx3'
              // },
              // {
              //   src:'./static/4.png',
              //   title:'xxx4'
              // },
              // {
              //   src:'./static/1.jpg',
              //   title:'xxx5'
              // },
              // {
              //   src:'./static/2.png',
              //   title:'xxx6'
              // },
              // {
              //   src:'./static/3.jpg',
              //   title:'xxx7'
              // }
            // ]
          }
      },
      computed:{
        nextIndex () {
          if (this.selected === this.slides.length - 1) {
            return 0
          }
          else {
            return this.selected + 1
          }
        }

      },
      methods:{
        goto (index) {
          setTimeout(() => {
            this.selected = index;
          }, this.invTime)
        },
        restart(index){
          this.selected=index;
          this.clear()
        },
        run () {
          this.invId = setInterval(() => {
            this.goto(this.nextIndex)
          }, this.inv)
        },
        clear () {
          clearInterval(this.invId)
        }
      },
      mounted () {
        this.run();
      }

    }
</script>

<style>
  /*中间主要内容*/
  .screen-box-wrap{
    width: 100%;
    height: 400px;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box{
    width: 900px;
    height: 400px;
    margin: 0 auto;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-left{
    width: 190px;
    height: 100%;
    float: left;
    background-color: #f4f4f4;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-left li{
    width: auto;
    height: 25px;
    padding: 10px;
    text-align: center;
    color: #c1c1c1;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-left li a{
    height: 20px;
    font-size: 15px;
    color: #ff4400;
    margin: 5px;
    display: inline-block;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-right{
    width: 710px;
    height: 100%;
    float: right;
    background-color: #dddddd;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-right img{
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .screen-box-wrap .screen-box .screen-right h2{
    position: relative;
    width: 150px;
    height: 20px;
    float: left;
    color: #f40;
    font-size: 15px;
    background-color: rgba(255,255,255,.7);
    opacity: .5;
    bottom: 70px;
    text-align: right;
    padding: 3px 20px;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-right ul{
    width: auto;
    height: 13px;
    position: relative;
    bottom: 50px;
    margin: 0 auto;
    background-color: rgba(255,255,255,.3);
    border-radius: 10px;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-right ul li{
    float: left;
    margin: 3px;
    text-align: center;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-right ul li a{
    display: block;
    width: 8px;
    padding-top: 8px;
    height: 0;
    border-radius: 50%;
    background-color: #fff;
    /*border: 1px solid black;*/
  }
  .screen-box-wrap .screen-box .screen-right ul li .select{
    background-color: #ff4400;
  }
</style>
