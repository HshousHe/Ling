<template>
    <div>
        <!-- <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item v-for="(v,index) in DH" :key="v.key" :index="index+1" class="io">{{v}}</el-menu-item>
        </el-menu> -->
         <!-- <div class="TOP">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false"><i class="el-icon-circle-plus-outline"></i></el-radio-button>
            <el-radio-button :label="true"><i class="el-icon-remove-outline"></i></el-radio-button>
            </el-radio-group>
         </div> -->

    <el-row>
        <el-col :xs="24" :sm="5" :md="4">
               <div class="logo">
                    <img width="100%" src="../../../assets/img/logo.png"  />
               </div>
        </el-col>
        <el-col :xs="21" :sm="6" :md="4" :offset="3">
               <div class="Xs">
                   <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                    <el-button type="success" slot="append" icon="el-icon-search"></el-button>
                  </el-input>
               </div>
        </el-col> 
        <el-col  :xs="18" :sm="4" :md="7" :offset="6">
              <div class="Xs">
                <el-tooltip class="item" effect="dark" content="登录" placement="left-start">
                   <el-button @click="uh" type="primary" icon="el-icon-printer" circle></el-button>
                 </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="注册" placement="bottom">
                   <el-button @click="zc" type="success" icon="el-icon-tickets" circle></el-button>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="后台管理" placement="right-start">
                     <el-button @click="HD" type="warning" icon="el-icon-star-off" circle></el-button>
                  </el-tooltip> 
                  <el-tooltip class="item" effect="dark" content="移动端" placement="bottom">
                     <el-button @click="Vant" type="warning" icon="el-icon-star-off" circle></el-button>
                  </el-tooltip> 
              </div>
        </el-col>
    </el-row>  
    <hr size=1 style='color:#DCDFE6'  />
    
    <el-row>
      <el-col :span="24">
        <el-menu  :collapse-transition="Turn" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item  @click="Dha(v.id)"  v-for="v in Dh" :key="v.key" :index="v.id">{{v.text}}></el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
 



     <hr size=1 style='color:#DCDFE6'  />
   
      <el-row>
          <el-col :span="24">
             <transition name="el-zoom-in-center">
              <div v-show="show2" class="Gd">
                   <div class="T1">
                          推荐产品
                        <div @click="T(2)" class="T2">
                            <i class="el-icon-error"></i>
                        </div>
                    </div>
                  <el-row>
                     <el-col :xs="24" :sm="6" :md="6">
                        <div  class="TJ" @click="Getshopping(1)">
                           <img src="../../../assets/img/b1.jpg"  />
                             魅族 HALO 激光蓝牙耳机
                        </div>
                     </el-col>
                     <el-col :xs="22" :sm="10" :md="6" :offset="2">
                       <div class="TJ">
                             <img src="../../../assets/img/b2.jpg"  />
                             【预计4周-8周发货】魅族 16th
                        </div>
                     </el-col>
                     <el-col :xs="22" :sm="10" :md="6" :offset="2">
                       <div class="TJ">
                             <img src="../../../assets/img/b3.jpg"  />
                             魅族Gravity悬浮音响
                        </div>
                     </el-col>
                  </el-row>
           
                        <div class="Tjz" @click="Tiao">
                              <el-button type="success">进入页面</el-button>
                        </div>
          
              </div>
               </transition>
          </el-col>
      </el-row>
       <el-row>
          <el-col :span="24">
             <transition name="el-zoom-in-center">
              <div v-show="show1" class="Gd1">
                   <div class="T1">
                          推荐产品
                         <div @click="T(1)" class="T2">
                            <i class="el-icon-error"></i>
                        </div>
                    </div>
                  <el-row>
                     <el-col :xs="24" :sm="6" :md="6">
                        <div class="TJ" @click="Getshopping(2)">
                             <img src="../../../assets/img/a1.jpg"  />
                               小米MIX 2S
                        </div>
                     </el-col>
                     <el-col :xs="22" :sm="10" :md="6" :offset="2">
                       <div class="TJ">
                             <img src="../../../assets/img/a2.jpg"  />
                             15.6寸游戏本 八代增强版
                        </div>
                     </el-col>
                     <el-col :xs="22" :sm="10" :md="6" :offset="2">
                       <div class="TJ">
                             <img src="../../../assets/img/a3.png"  />
                             小米游戏本 15.6英寸
                        </div>
                     </el-col>
                  </el-row>
                  <div class="Tjz">
                              <el-button type="success">进入页面</el-button>
                        </div>
              </div>
               </transition>
          </el-col>
      </el-row>
       <el-row>
          <el-col :span="24">
             <transition name="el-zoom-in-center">
              <div v-show="show3" class="Gd1">
                    <div  class="T1">
                          推荐产品
                         <div @click="T(3)" class="T2">
                            <i class="el-icon-error"></i>
                        </div>
                    </div>
                  <el-row>
                     <el-col :xs="24" :sm="6" :md="6">
                        <div class="TJ" @click="Getshopping(3)">
                             <img src="../../../assets/img/c1.jpg"  />
                             坚果 TNT 工作站（显示器）
                        </div>
                     </el-col>
                     <el-col :xs="22" :sm="10" :md="6" :offset="2">
                       <div class="TJ">
                             <img src="../../../assets/img/c2.jpg"  />
                             坚果 R1
                        </div>
                     </el-col>
                     <el-col :xs="22" :sm="10" :md="6" :offset="2">
                       <div class="TJ">
                             <img src="../../../assets/img/c3.jpg"  />
                             坚果 Pro 2S
                        </div>
                     </el-col>
                  </el-row>
                  <div class="Tjz">
                              <el-button type="success">进入页面</el-button>
                        </div>
              </div>
               </transition>
          </el-col>
      </el-row>
       <el-row>
          <el-col :span="24">
             <transition name="el-zoom-in-center">
              <div v-show="show4" class="Gd1">
                   <div class="T1">
                          推荐产品
                         <div @click="T(4)" class="T2">
                            <i class="el-icon-error"></i>
                        </div>
                    </div>
                  <el-row>
                     <el-col :xs="24" :sm="6" :md="6">
                        <div class="TJ" @click="Getshopping(4)">
                             <img src="../../../assets/img/d1.jpg"  />
                             iPhone 8
                        </div>
                     </el-col>
                     <el-col :xs="22" :sm="10" :md="6" :offset="2">
                       <div class="TJ">
                             <img src="../../../assets/img/d2.jpg"  />
                             iPhone 8 Plus
                        </div>
                     </el-col>
                     <el-col :xs="22" :sm="10" :md="6" :offset="2">
                       <div class="TJ">
                             <img src="../../../assets/img/d3.jpg"  />
                             iPhoneX
                        </div>
                     </el-col>
                  </el-row>
                  <div class="Tjz">
                              <el-button type="success">进入页面</el-button>
                        </div>
              </div>
              </transition>
          </el-col>
      </el-row>
              <Zj v-if="ss"></Zj>
        <router-view/>
      <WB></WB>
    </div>
</template>

<script>
import Lz from "./Zhj"
import weibu from "./weibu"
import {createNamespacedHelpers} from 'vuex'
const{mapState,mapGetters,mapMutations}=createNamespacedHelpers('us')
export default {
  components:{
       Zj:Lz,
       WB:weibu
  },
    data(){
        return{
           Turn:true,
           ss:true,
           activeIndex: '1',
           isCollapse: true,
           Dh:[],
           input:"",
           show1:false,
           show2:false,
           show3:false,
           show4:false,
        }
    },
    created(){
           let $this=this
           this.axios({
                  url:"/Qdindex",
                  method:"post"
            }).then(function(rst){
                  console.log($this.Dh=rst.data.Dh)
            })
    },
    computed:{
      ...mapState(["DH"])
    },
     methods: {
       Getshopping(i){
            this.ss=false
            this.$router.push({
                  name: 'Soing', 
                  query:{name:"Soing",id:i}
                   // 路由的名称
               })
       },
       zc(){
        this.ss=false
        this.$router.push({
              name: 'Zuce', 
              query:{name:"Zuce"}
                // 路由的名称
            })
       },
       Tiao(){
              this.ss=false
            this.$router.push({
                  name: 'iphone', 
                  query:{name:"欢迎进入后台管理"}
                   // 路由的名称
               })
       },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if(key==2){
           this.show1=true
           this.show2=false;
           this.show3=false;
           this.show4=false;
        }
        else if(key==3){
           this.show1=false;
           this.show2=true;
            this.show3=false;
             this.show4=false;
        }else if(key==4){
           this.show1=false;
            this.show2=false;
             this.show3=true;
              this.show4=false;
        }else if(key==5){
           this.show1=false;
            this.show2=false;
            this.show3=false;
             this.show4=true;
        }else{
          this.show1=false;
            this.show2=false;
            this.show3=false;
             this.show4=false;
        }
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      T(i){
          if(i==1){
              this.show1=false;
          }
          else if(i==2){
              this.show2=false;
          }
          else if(i==3){
              this.show3=false;
          }
          else if(i==4){
              this.show4=false;
          }
      },
      HD(){
          this.$message({
                    message: '欢迎进入后台管理',
                    type: 'success'
                  });
          this.$router.push({
                  name: 'HDdl', 
                  query:{name:"欢迎进入后台管理"}
                   // 路由的名称
               })
      },
      uh(){
         this.$message({
                    message: '登录页',
                    type: 'success'
                  });
                  this.ss=false
          this.$router.push({
                  name: 'Dl', 
                  query:{name:"登录页"}
                   // 路由的名称
               })
      },
      Dha(i){
             if(i==1){
               this.$message({
                    message: '首页',
                    type: 'success'
                  });
                this.ss=true
               this.$router.push({
                      name: 'QDhome', 
                      query:{name:"首页"}
                      // 路由的名称
                  })
             }else if(i==6){
               this.$router.push({
                      name: 'Nwe', 
                      query:{name:"Nwe"}
                      // 路由的名称
                  })
                this.ss=false
             }else if(i==2){
               this.$router.push({
                      name: 'Xm', 
                      query:{name:"Xm"}
                      // 路由的名称
                  })
                this.ss=false
             }else if(i==5){
                this.ss=false
                this.$router.push({
                  name: 'iphone', 
                  query:{name:"欢迎进入后台管理"}
                   // 路由的名称
               })
             }else if(i==3){
                this.ss=false
                this.$router.push({
                  name: 'Cuiz', 
                  query:{name:"欢迎进入后台管理"}
                   // 路由的名称
               })
             }else if(i==4){
                this.ss=false
                this.$router.push({
                  name: 'Meiz', 
                  query:{name:"欢迎进入后台管理"}
                   // 路由的名称
               })
             }else if(i==7){
                this.ss=false
                this.$router.push({
                  name: 'Gyu', 
                  query:{name:"Gyu"}
                   // 路由的名称
               })
             }
      },
      Vant(){
           this.$message({
                    message: '手机端',
                    type: 'success'
                  });
                  this.ss=false
          this.$router.push({
                  name: 'vanhome', 
                  query:{name:"手机端"}
                   // 路由的名称
               })
      }
  
    }
}
</script>
<style lang="scss" scoped>
.Tjz{
  width: 100%;
  height: 40px;
  background-color: #45c2f6;
  margin-top: 10px;
 
}
.Zn{
    margin-left:0px;
}
.T2{
  cursor: pointer;
  float:right;
  margin-right:1%;
  margin-top: 5px;
}
.T1{
  width:100%;
  font: 20px "微软雅体";
  text-align: center;
}
.TJ{
  width: 100%;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
}
.TJ:hover{
color: #45c2f6;
}
.TJ>img{
   width: 100%;
   height: 250px;
}
.Gd1{
  width:90%;
  box-shadow: 0px 0px 10px silver;
  position: absolute;
  top:0px;
  z-index: 999;
  background-color: white;
}
.Gd{
  width:90%;
  box-shadow: 0px 0px 10px silver;
  position: absolute;
  top:0px;
  z-index: 999;
  background-color: white;
}
.el-menu.el-menu--horizontal{
  border: 0px;
}
.logo>img{
  width: 100%;
  height:60px;
}
.logo{
  width: 100%;
  height:60px;
}
.Xs{
  margin-top: 8px;
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.io{
    font-size: 12px;
}
.el-row{
  width:90%;
  margin-left:10%;
  margin-right:10%;
}
@media (max-width:992px ){
   
}
@media (max-width:768px){
  .logo>img{
       width:40%;
    }
    .Xs{
      margin-left:-20%;
    }
}
@media (max-width:400px){
  .logo>img{
       width:70%;
    }
    .Xs{
      margin-left:-20%;
    }
}
</style>
