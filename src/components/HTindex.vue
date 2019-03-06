<template>
    <div>

    <!--  -------------------------------------------------->
     <el-row>
        <el-col :xs="24" :sm="12" :md="8" :lg="8">
          <div class="login">
              <div class="LOh1">
                  后台管理登录
              </div>
              <div class="Ftrom">
                <el-form ref="form">
                  <el-form-item >
                    <el-input v-model="name" placeholder="用户名"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input type="password" v-model="password"   placeholder="密码"></el-input>
                  </el-form-item>
                </el-form> 
                <el-form ref="form" label-width="30%">
                   <el-form-item label=" ">
                       <el-button  class="Dl"  type="primary" :plain="true" @click="DL">登录</el-button>
                   </el-form-item> 
                   <el-form-item label=" ">
                     <el-button class="Dl" @click="Fh" type="success">返回pc首页</el-button>
                   </el-form-item> 
                </el-form>
              </div>
              
          </div>
       </el-col>
     </el-row>
    </div>
</template>

<script>
export default {
    data(){
      return{
          name:"",
          password:"",
          logDate:[],
      }
    },
    created(){
    
    },
    methods:{
        Fh(){
              this.$message({
                    message: '你已进入前端首页',
                    type: 'success'
                  });
                        this.$router.push({
                  name: 'QDhome', 
                  query:{name:"你已进入前端首页"}
                   // 路由的名称
                })
        },
          DL(){
            let $this=this
            this.axios({
                  url:"/login",
                  method:"post"
            }).then(function(rst){
                  console.log($this.logDate=rst.data)
            })
            if(this.logDate.YH!=this.name){
                          this.$message.error('用户名出错');
            }
            else if(this.logDate.password!=this.password){
                         this.$message.error('密码出错');
            }else{
                this.$message({
                    message: '欢迎登录后台管理',
                    type: 'success'
                  });
                        this.$router.push({
                  name: 'HDhome', 
                  query:{name:"欢迎登录后台管理"}
                   // 路由的名称
                })
            }
          },
      
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/function.scss';
@import '~@/assets/css/HTindex.scss';
.Dl{
  width: 60%;
}
.Ftrom{
  width:80%;
  margin-left:10%;
  margin-top:60px;
}
.LOh1{
  width: 100%;
  height:40px;
  text-align:center;
   font: 20px "微软雅体";
  line-height: 50px;
}
.login{
    width: 100%;
    height:hlt(750px);
    margin-top:150px;
    border-radius:4px;
    box-shadow: 0px 0px 15px silver;
    margin-left:100%;
 }
@media (max-width:992px ){
  .login{
      @include login 
    }
}
@media (max-width:768px){
  .login{
      @include loginxs 
    }
}
</style>

