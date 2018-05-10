<template>
    <div class="wrapper">
      <top-nav></top-nav>
      <div class="main-wrapper">
        <ul>
          <li v-for="food in foods" v-if="food.type===type">
            <img :src="food.src"/>
            <p>{{food.type}}</p>
            <p>{{food.id}}</p>
            <p>{{food.title}}</p>
          </li>
        </ul>
      </div>
      <footer-box></footer-box>
    </div>
</template>

<script>
    import TopNav from "../components/TopNav";
    import FooterBox from "../components/FooterBox";
    export default {
        name: "Menu",
      components: {FooterBox, TopNav},
      data(){
          return{
            type:'',
            foods:[]
          }
      },
      created(){
          this.$http.get("./static/data.json").then((data)=>{
            this.foods=data.body;
            console.log("foods加载成功")
          },(data)=>{
            console.log("foods加载失败")
          })

          this.type=this.$route.params.id;
          // // this.foods.type=this.$route.query.type;
          console.log(this.type)
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
  img{
    width: 150px;
    height: 120px;
  }
  ul{
    display: flex;/*所有li都在一行*/
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    /*flex-grow: 1;*/
    flex-basis: 200px;
    text-align: center;
    padding: 10px;
    border: 1px solid #eee;
    margin: 10px;
  }
</style>
