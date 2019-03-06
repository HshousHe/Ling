<template>
  <div>

       <el-container>

               <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                  <el-menu-item index="1" @click="DomTz(1)">
                    <i class="el-icon-setting"></i>
                    <span slot="title">网站信息</span>
                  </el-menu-item>
                   <el-menu-item index="2" @click="DomTz(3)" >
                    <i class="el-icon-news"></i>
                    <span slot="title">网站管理</span>
                  </el-menu-item>
                    <el-menu-item index="3" @click="DomTz(2)">
                    <i class="el-icon-zoom-in"></i>
                    <span slot="title">管理员</span>
                  </el-menu-item>
              </el-menu>

          <el-main>
              <el-row>
                 <el-col :span="24">
                    <div class="Dh" >
                        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                          <el-radio-button :label="false">
                            <i class="el-icon-arrow-right"></i>
                          </el-radio-button>
                          <el-radio-button :label="true">
                              <i class="el-icon-arrow-left"></i>
                          </el-radio-button>
                        </el-radio-group>
                    </div> 
                </el-col>
              </el-row>
                  <router-view/>
          </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      asidea:"",
      TUb:"el-icon-circle-plus-outline",
      isCollapse: true,
      HY:"",
    }
  },
  created(){
        this.HY=this.$route.query.name
  },
     methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      DomTz(i){
          if(i==1){
             this.$router.push({
                  name: 'HDindex',
                  query:{
                    name:""   // 路由的名称
                }
                })
          }else if(i==2){
               this.$router.push({
                  name: 'GLY',
                  query:{
                    name:""   // 路由的名称
                }
                })
          }else if(i==3){
                this.$router.push({
                  name: 'GN',
                  query:{
                    name:""   // 路由的名称
                }
                })
          }
      }
      // Xs(){
      //   if(this.asidea=="display:block"){
      //       this.asidea="display:none"
      //   }else{
      //     this.asidea="display:block"
      //   }
      // }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/HTindex.scss';
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.Dh{
  width: 20%;
  text-align: left;
  font: 22px "微软雅体";
  cursor: pointer;
}
.Dh:hover{
  color: sandybrown;
}
 .el-aside {
    // color: #333;
    // text-align: center;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    overflow: scroll;
    height:728px;
  }

  @media (max-width:992px ){
  // .el-aside{
  //       display:none;
  //   }
}
</style>
