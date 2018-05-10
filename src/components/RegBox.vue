<template>
  <div class="login-wrapper">
    <div class="login">
      <div class="input">
        <label for="emailInput">账户名</label>
        <input type="text" id="emailInput" v-model="msg" placeholder="请输入电子邮箱">
        <ul v-show="msg">
          <!-- 这里处理的是过滤后的email和msg，使用动态数据绑定 -->
          <li v-for="item in dealEmail" v-on:click="selected(item)">{{dealMsg}}@{{item}}<template v-if="item==189">.cn</template><template v-else>.com</template></li>
        </ul>
      </div>
      <div class="input">
        <label for="emailInput">密码</label>
        <input type="password" id="pswInput" placeholder="请输入密码" >
      </div>
      <div class="btn">
        <button>注册</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RegBox",
      data(){
        return{
          msg:'',//绑定msg
          email:[//绑定email
            'qq',
            '163',
            '126',
            '189',
            'sina',
            'hotmail',
            'gmail',
            'sohu',
            '21cn'
          ]
        }
      },
      methods:{
        selected:function(item){
          this.msg=this.dealMsg+'@'+item+(item==189?'.cn':'.com')
        }
      },
      computed:{
        dealEmail:function(){
          //msg如果@存在，过滤email
          if(this.msg.indexOf('@')>=0){
            //截取msg中@后边的字符串
            var str=this.msg.slice(this.msg.indexOf('@')+1)
            var result=[]
            this.email.forEach(function(item){
              var test=item+(item==='189'?'.c':'.co')
              if(test.indexOf(str)==0){
                result.push(item)
              }

            })
            return result
          }
          //否则返回email
          return this.email
        },
        dealMsg:function(){
          //msg如果@存在，截取msg中@符号前的字符串
          if(this.msg.indexOf('@')>=0){
            return this.msg.slice(0,this.msg.indexOf('@'))
          }
          return this.msg
        }
      }
    }
</script>

<style scoped>
  .login-wrapper{
    width: 100%;
    height: 300px;
    padding: 150px 0 100px 0;
    /*border: 1px solid black;*/
    background: white;
  }
  .login-wrapper .login{
    width: 550px;
    height: 300px;
    margin: 0 auto;
    border: 1px solid #eee;
    background: #f5f5f5;
    font-size: 12px;
  }
  .login-wrapper .login .input{
    margin: 20px auto;
    padding: 10px;
    width: 510px;
    height: 50px;
    /*border: 1px solid black;*/
  }
  .login-wrapper .login label{
    margin: 10px 20px;
    width: 50px;
    float: left;
    font-size: 15px;
    font-weight: 700;
    color: #f40;
    display: inline-block;
    /*border: 1px solid black;*/
  }
  .login-wrapper .login input{
    padding: 10px;
    width: 350px;
    display: inline-block;
  }
  .login-wrapper .login ul{
    position: relative;
    width: 375px;
    background: #fff;
    display: inline-block;
  }
  .login-wrapper .login ul li{
    padding: 6px 10px;
    cursor: pointer;
  }
  .login-wrapper .login ul li:hover{
    background: #efefef;
  }
  .login-wrapper .login .btn{
    margin: 0 auto;
    width: 430px;
    height: 38px;
    z-index: 1000;
    border-radius: 10px;
    /*border: 1px solid black;*/
  }
  .login-wrapper .login .btn button{
    border: none;
    background-color: #ff4400;
    color: white;
    font-size: 15px;
    font-weight: 700;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    outline: 0;
    cursor: pointer;
  }
</style>
