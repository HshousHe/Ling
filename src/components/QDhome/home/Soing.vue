<template>
    <div>
         <div class="Gw">
              <div class="Gw1">
                  <el-row>
                      <el-col :md="12" :xs="24" :sm="24">
                           <div class="Gw11">
                               <div class="Gwu">
                                   <div class="Gwu1">
                                        <span><b>{{Gutx.name}}</b></span><br/>
                                        <span>类型:手机</span>
                                   </div>
                                   <div class="Gwu2">
                                        <span>{{Gutx.time}}</span><br/>
                                        <span>{{Gutx.Jj}}</span>
                                   </div>
                                   <div class="Gwu3">
                                      ￥ {{Gutx.Jia}} <del class="m-l-20">原价￥{{Gutx.Yjia}}元</del>
                                   </div>

                                   <div class="Gwu4">
                                          <el-form ref="form" :model="form" label-width="80px">
                                            <el-form-item label="数量">
                                                <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                            </el-form-item>
                                               <el-form-item label=" ">
                                                  库存99件
                                            </el-form-item>
                                          </el-form> 
                                      <div class="Gwuc">
                                           <div class="Guc" @click="Addsop(Gutx.Ig,Gutx.name,Gutx.Jia,num1)">
                                                <van-icon name="shopping-cart-o" />加入购物车
                                           </div>
                                           <div class="Guc" @click="sop">
                                               查看购物车
                                           </div>
                                      </div>
                                   </div>
                               </div>
                           </div>
                      </el-col>
                      <el-col :md="12" :xs="24" :sm="24">
                          <div class="Gw11">
                              <div class="Gw22"></div>
                               <div class="Gw21">
                                     <el-carousel :interval="4000" type="card" height="320px">
                                        <el-carousel-item v-for="item in Img" :key="item">
                                            <img width="100%" :src="item.i" />
                                        </el-carousel-item>
                                    </el-carousel>
                               </div>
                           </div>
                      </el-col>
                  </el-row>
              </div>
         </div>
    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const{mapState,mapGetters,mapMutations}=createNamespacedHelpers('us')
export default {
     data(){
         return{
             form:"",
             num1:"",
             Img:[],
             Gutx:[],
             i1:"",
             Soping:[],
         }
     },
     methods:{
           handleChange(value) {
                console.log(value);
            },
            Addsop(u,i,o,p){
                   console.log(u,i,o,p)
                   if(u==1){
                      let op=parseInt(this.num1)*parseInt(o)
                      console.log(op)
                    //  this.Soping.push(Object({img:"../../../../static/Mz/M1.png",name:i,jia:op,nue:p}))
                      console.log( this.Soping)
                      this.Asop(Object({img:"../../../../static/Mz/M1.png",name:i,jia:op,nue:p}))
                   }else if(u==2){
                        let op=parseInt(this.num1)*parseInt(o)
                    //   this.Soping.push(Object({img:"../../../../static/Mi/MI1.jpg",name:i,jia:op,nue:p}))
                      this.Asop(Object({img:"../../../../static/Mi/MI1.jpg",name:i,jia:op,nue:p}))
                   }else if(u==3){
                        let op=parseInt(this.num1)*parseInt(o)
                    //   this.Soping.push(Object({img:"../../../../static/Cz/CZ1.png",name:i,jia:op,nue:p}))
                       this.Asop(Object({img:"../../../../static/Cz/CZ1.png",name:i,jia:op,nue:p}))
                   }else if(u==4){
                        let op=parseInt(this.num1)*parseInt(o)
                    //   this.Soping.push(Object({img:"../../../../static/Ip/i1.jpg",name:i,jia:op,nue:p}))
                      this.Asop(Object({img:"../../../../static/Ip/i1.jpg",name:i,jia:op,nue:p}))
                   }
                    const h = this.$createElement;
                    this.$notify({
                    title: "提醒",
                    message: h('i', { style: 'color: teal'}, '加入购物车成功')
                    });
            },
            ...mapMutations(["Asop"]),
            sop(){
                 this.ss=false
                this.$router.push({
                  name: 'Gue', 
                  query:{name:"Gue"}
                   // 路由的名称
               })
            }
     },
     created(){
         let $this=this
         let id=this.$route.query.id;
         this.axios({
             url:"/Sop",
             method:"post"
         }).then(function(rst){
             if(id==4){
               console.log($this.Img=rst.data.iAP[0].img)
               console.log($this.Gutx=rst.data.iAP[0])
             }else if(id==3){
               console.log($this.Img=rst.data.Cui[0].img)
               console.log($this.Gutx=rst.data.Cui[0])
             }else if(id==2){
               console.log($this.Img=rst.data.Mi[0].img)
               console.log($this.Gutx=rst.data.Mi[0])
             }else if(id==1){
               console.log($this.Img=rst.data.Mz[0].img)
               console.log($this.Gutx=rst.data.Mz[0])
             }
         })
     }
}
</script>

<style lang="scss" scoped>
.Gw21{
    width:100%;
    height:320px;
    margin:0px auto;
}
.Gw22{
    width: 100%;
    height:80px;
}
.el-form{
    margin-left: -10%;
}
.el-input-number{
    width:120px;;
}
.Gwuc{
    width: 100%;
    height: 50px;
}
.Guc:last-child{
    background-color: #E6A23C;
    margin-left: 2%;
}
.Guc{
    width: 49%;
    height: 50px;
    float: left;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    color: white;
    background-color: #f96868;
}
.Gw1{
    width:80%;
    margin: 0px auto;
    margin-top:0px;
    .Gw11{
        width:100%;
        height:620px;
        background-color: white;
    }
}
.Gwu1{
    width: 100%;
    height:120px;
    font: 16px "微软雅体";
    line-height: 40px;
    color: #606266;
    border-bottom:1px solid #45c2f6; 
    span:first-child>b{
         color: black;
    }
}
.Gwu2{
    width: 100%;
    height:120px;
    font: 16px "微软雅体";
    line-height: 40px;
    color: #606266;
    span:first-child>b{
         color: black;
    }
}
.Gwu3{
    width: 100%;
    height: 80px;
    line-height: 40px;
    color: #f96868 ;
    font: 22px "微软雅体";
    .m-l-20{
        font: 16px "微软雅体";
    }
}
.Gwu4{
    width: 100%;
    height:300px;
}
.Gwu{
    width:60%;
    height:699px;
    margin-left:6%;
}
.Gw{
    width: 100%;
    height:800px;
    background-image:  url("../../../assets/img/Gowu.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 80px;
}
@media (max-width:480px){
.el-carousel{
      height: 150px;
    overflow: hidden;
}
}
@media (max-width:700px){
    .Gw22{
    width: 100%;
    height:0px;
}
  .Gwu2{
      line-height: 20px;
      font: 13px "微软雅体";
  }
  .Gwu3{
    font: 22px "微软雅体";
    text-align: center;
    .m-l-20{
        font: 16px "微软雅体";
    }
}
.Guc{
        width:100%;
        clear: both;
    }
.Guc:last-child{
    margin-left: 0%;
    margin-top: 5px;
}    
.Gw1{
    width: 100%;
}
.el-form{
    margin-left: -20%;
}
}
</style>
