<template>
    <div>
        <van-row>
                <van-col span="24">
                <div class="C">
                    <div class="c1"><router-link :to="{name:'Sz'}"><div class="Yop"><van-icon name="arrow-left" /></div></router-link>登录</div>
                </div> 
                </van-col>
    </van-row>

   
 <van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>

 <van-button size="large" class="tZ" @click="Dl">登录</van-button>

    </div>
</template>

<script>

export default {
   data(){
       return{
           username:"",
           password:""
       }
   }
}
</script>

<style lang="scss" scoped>
.C{
    width: 100%;
    height:40px;
    background-color: #DCDFE6;
    .c1{
        width:100%;
        text-align:center;
        float: left;
        line-height:40px;
        cursor: pointer;
    }
   
         .Yop{
             position: absolute;
             left: 0px;
           }
}
.tZ{
   background-color:#409EFF;
   color: white;
   cursor: pointer;
}
</style>

