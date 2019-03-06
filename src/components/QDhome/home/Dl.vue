<template>
    <div>
        <div class="op">
             <el-row>
                  <el-col :md="6" :xs="24" :sm="12">
                       <div class="Dl">
                           <div class="D1">
                               登录
                           </div>
                           <div class="D1">
                               <el-input v-model="input" placeholder="用户名"></el-input>
                           </div>
                           <div class="D1">
                               <el-input v-model="input" placeholder="用户名"></el-input>
                           </div>
                            <div class="D1">
                             <el-button class="D2" type="primary">登录</el-button>
                            </div>
                             <div class="D1">
                                <el-button  class="D2" type="success">注册</el-button>
                            </div>
                       </div>
                  </el-col>
             </el-row>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.D2{
    width: 100%;
}
.D1{
    width: 80%;
    height: 40px;
    text-align: center;
    font: 20px "微软雅体";
    margin-left: 10%;
    margin-top:20px;
    line-height: 40px;
}
.Dl{
    width: 100%;
    height: 300px;
    background-color:rgba(255, 255, 255, 0.6);
    margin-top:50px;
    margin-left:40%;
}
.op{
    width: 100%;
    height:450px;
    background-image: url("../../../assets/img/user_login_bg.jpg");
}
@media (max-width:992px ){
   
}
@media (max-width:768px){
  .Dl{
       margin-left: 0%;
  }
}
@media (max-width:400px){
  
}
</style>

