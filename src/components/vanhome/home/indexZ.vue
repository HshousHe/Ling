<template>
    <div>

      
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in Dh" :key="index">
                <img width="100%" height="200px" :src="image" />
            </van-swipe-item>
        </van-swipe>

        <van-row>
            <van-col span="6" v-for="v in Mi" :key="v.key">
                 <div class="MI">
                     <div class="MI1">
                         {{v.name}}
                     </div>
                 </div>
            </van-col>
        </van-row>
        <van-row>
            <van-col span="6" v-for="v in Mi" :key="v.key">
                 <div class="MI">
                     <div class="MI1">
                         {{v.name}}
                     </div>
                 </div>
            </van-col>
        </van-row>

         <van-row>
            <van-col v-for="v in Lx" :key="v.key" span="12">
                   <div class="Lx">
                        <div class="LX1">
                            <I :class="v.Tu"></I>   
                        </div>
                        <div class="Lx2">
                            <b>{{v.Txz}}</b>
                        </div>
                         <div class="Lx3">
                            {{v.Txx}}
                        </div>
                   </div>
            </van-col>
        </van-row>
        


     
       <el-row>
            <el-col :span="24">
                <div class="Bt">
                     新『<span>尚</span>』品
                </div>
            </el-col>
        </el-row>

        <van-row>
            <van-col span="12">
                  <div class="Xs">
                      <div class="xs1">
                          <img width="100%" height="170px" src="../../../../static/S1.jpg" />
                         <div class="xs3">
                             <b>魅族 16TH Plus<br/>$3198元</b>
                         </div>
                      </div>
                  </div>
            </van-col>
              <van-col span="12">
                  <div class="Xs">
                      <div class="xs1">
                           <img width="100%" height="170px" src="../../../../static/S2.jpg" />
                         <div class="xs3">
                            <b>魅族 16TH Plus<br/>$3198元</b>
                         </div>
                      </div>
                  </div>
            </van-col>
        </van-row>

       <van-row>
            <van-col span="12">
                  <div class="XX">
                      <div class="xs1">
                            <img  width="100%" src="../../../../static/S4.jpg" />
                         <div class="xs3">
                             <b>魅族 16TH Plus<br/>$3198元</b>
                         </div>
                      </div>
                  </div>
            </van-col>
              <van-col span="12">
                  <div class="XX">
                      <div class="xs1">
                           <img width="100%"  src="../../../../static/S3.jpg" />
                         <div class="xs3">
                            <b>魅族 16TH Plus<br/>$3198元</b>
                         </div>
                      </div>
                  </div>
            </van-col>
        </van-row>

        <el-row>
            <el-col :span="24">
                <div class="Bt">
                     云『<span>尚</span>』库
                </div>
            </el-col>
        </el-row>
       
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in Xlun" :key="index">
                <!-- <img v-lazy="image" /> -->
            <van-row>
                <van-col span="12">
                    <div class="XX1">
                        <div class="xs1">
                                <img  width="100%" height="120px" :src="image.img" />
                            <div class="xs3">
                                <b>{{image.tx1}}<br/>{{image.tx2}}</b>
                            </div>
                        </div>
                    </div>
                </van-col>
                <van-col span="12">
                    <div class="XX1">
                        <div class="xs1">
                            <img  width="100%" height="120px" :src="image.img2" />
                            <div class="xs3">
                                <b>{{image.tx3}}<br/>{{image.tx4}}</b>
                            </div>
                        </div>
                    </div>
                </van-col>
           </van-row>
            </van-swipe-item>
        </van-swipe>


    <el-row>
            <el-col :span="24">
                <div class="Bt">
                    科技资讯
                </div>
            </el-col>
   </el-row>
   
   <van-row>
       <van-col span="12" v-for="v in Wm" :key="v.key">
            <div class="kJ">
                <img width="100%" height="120px" :src="v.img" />
                <DIV class="kJ1">
                    {{v.tx}}<br/>
                    {{v.tx1}}
                </DIV>
                <DIV class="kJ2">
                   {{v.tx3}}
                </DIV>
            </div>
       </van-col>
   </van-row>

      
       
        
    </div>
</template>

<script>
export default {
   data(){
       return{
           value:"",
           active:"",
           Dh:[],
           Lx:[],
           Xlun:[],
           Wm:[],
           Mi:[],
       }
   },
   methods:{
       Pc(){
             this.$message({
                    message: 'Pc',
                    type: 'success'
                  });
          this.$router.push({
                  name: 'QDhome', 
                  query:{name:"Pc"}
                   // 路由的名称
               })
       }
   },
   created(){
              let $this=this
           this.axios({
                  url:"/Qdindex/Lun",
                  method:"post"
            }).then(function(rst){
                  console.log($this.Dh=rst.data.img)
                  console.log($this.Lx=rst.data.Lx)
            })
           
            this.axios({
                  url:"/Ydindex",
                  method:"post"
            }).then(function(rst){
                console.log($this.Xlun=rst.data.Lunbo)
                console.log($this.Wm=rst.data.Wbl)
                console.log($this.Mi=rst.data.MI)
            })
            
   }
}
</script>

<style lang="scss" scoped>
.MI1{
     width:40px;
     height: 40px;
     text-align: center;
     font:12px "微软雅体";
     line-height: 40px;
     border-radius: 50%; 
     margin-left:25%;
     cursor: pointer;
     background-image: linear-gradient(120deg,#ff3149,#ff64a6);
    color: white;
}
.MI{
    width:100%;
    height:45px;
    margin-top: 10px;
}
.kJ{
    width:150px;
    height:170px;
    margin:0px auto;
    margin-top: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px silver;
    .kJ1{
        width: 30%;
        height: 40PX;
        float: left;
        font: 12PX "微软雅体"; 
        color: white;
        text-align: center;
        background-color: #409EFF;
    }
    .kJ2{
        width: 70%;
        height: 40PX;
        text-align: left;
        font: 12PX "微软雅体"; 
        float: left;
        background-color:#DCDFE6;
    }
    }
.XX:hover{
   color: #45c2f6 ;
}
.Xs:hover{
   color: #45c2f6  
}
.XX1:hover{
   color: #45c2f6  
}
.XX1{
    width: 100%;
    height:160px;
    margin-top: 10PX;
    .xs1{
        width: 140px;
        height: 135px;
        margin: 0px auto;
        cursor: pointer;
      .xs3{
          width: 100%;
          height:30px;
          font: 10px "微软雅体";
          text-align: center;
          border: 1px solid #DCDFE6;
          border-right:3px solid  #409EFF; 
      }  
    }
}
.XX{
    width: 100%;
    height:135px;
    margin-top: 10PX;
    .xs1{
        width: 140px;
        height: 135px;
        margin: 0px auto;
        cursor: pointer;
      .xs3{
          width: 100%;
          height:30px;
          font: 10px "微软雅体";
          text-align: center;
          border: 1px solid #DCDFE6;
          border-right:3px solid  #409EFF; 
      }  
    }
}
.Xs{
    width: 100%;
    height: 205px;
    .xs1{
        width: 140px;
        height: 205px;
        margin: 0px auto;
        cursor: pointer;
      .xs3{
          width: 100%;
          height:30px;
          font: 10px "微软雅体";
          text-align: center;
          border: 1px solid #DCDFE6;
          border-right:3px solid  #409EFF; 
      }  
    }
}
.Lx:hover{
    background-color:#45c2f6;
    color: white !important;
    box-shadow: 0px 0px 10px silver;
}
.Lx{
    width: 100%;
    height:100px;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
    border-bottom: 1px #DCDFE6 solid;
    border-top: 1px #DCDFE6 solid;
            .Lx2{
            margin-top: 10px;
        }
        .Lx3{
        font-family: 'Lato',sans-serif;
        font-weight: 400;
        font-size: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        }
        .LX1{
            width: 100%;
            text-align: center;
            height:50px;
            font:35px "微软雅体";
            line-height:80px;
        
        }
}
.Bt{
    width: 100%;
    text-align: center;
    font: 20px "微软雅体";
    font-weight: bold;
    span{
        color: #45c2f6
    }
    margin-top: 20px;
}



</style>

