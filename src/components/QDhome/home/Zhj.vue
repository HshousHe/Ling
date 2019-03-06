<template>
    <div>
         <el-carousel class="hj" trigger="click"  height="450px">
            <el-carousel-item class="hj" v-for="item in Img" :key="item">
                <img class="hj" width="100%" height="100%" :src="item" />
            </el-carousel-item>
        </el-carousel>

        <el-row>
            <el-col v-for="v in Lx" :key="v.key" :xs="24" :sm="12" :md="6">
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
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="Bt">
                     新『<span>尚</span>』品
                </div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :xs="24" :sm="12" :md="7" >
                  <div class="Sx">
                      <div class="sx1">
                          <img src="../../../../static/S1.jpg" />
                      </div>
                      <div class="sx12">
                            <b>魅族 16TH Plus<br/>$3198元</b>
                      </div>
                  </div>
            </el-col>
             <el-col :xs="24" :sm="12" :md="7">
                  <div class="Sx">
                      <div class="sx1">
                          <img src="../../../../static/S2.jpg" />
                      </div>
                      <div class="sx12">
                            <b>魅族 16TH Plus<br/>$3198元</b>
                      </div>
                  </div>
            </el-col>
             <el-col :xs="24" :sm="24" :md="7">
                  <div class="Sx">
                          <div class="sx31">
                                <div class="sx311">
                                    <img src="../../../../static/S4.jpg" />
                                </div>
                                <div class="sx312">
                                    <B>MacBook Pro￥10200.00元 </B> 
                                </div>
                          </div>
                           <div class="sx31">
                                <div class="sx311">
                                    <img src="../../../../static/S3.jpg" />
                                </div>
                                 <div class="sx312">
                                       <B>小米笔记本Air 13.3 四核增强￥4999.00元</B>
                                </div>
                          </div>
                  </div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <div class="Bt">
                     热门产品
                </div>
            </el-col>
        </el-row>

       <el-row>
            <el-col :span="24">
                <div class="Bt1">
                     魅族
                </div>
            </el-col>
        </el-row>

     <el-row>
         <el-col v-for="v in Xlun" :key="v.key" :xs="24" :sm="12" :md="6">
             <div class="Tui">
                 <div class="Tui1">
                      <img width="100%" height="300px" :src="v.img" />
                 </div>
                 <span>
                      {{v.tx1}}
                 </span><br/>
                 <span class="H2b">
                     {{v.tx2}}
                 </span><br/>
                 <span class="H3b">
                     {{v.tx4}}{{v.tx3}}
                 </span>
             </div>
         </el-col>
     </el-row>

     <el-row>
            <el-col :span="24">
                <div class="Bt1">
                     小米
                </div>
            </el-col>
     </el-row>

     <el-row>
         <el-col v-for="v in xm" :key="v.key" :xs="24" :sm="12" :md="6">
             <div class="Tui">
                 <div class="Tui1">
                      <img width="100%" height="300px" :src="v.img" />
                 </div>
                 <span>
                      {{v.tx1}}
                 </span><br/>
                 <span class="H2b">
                     {{v.tx2}}
                 </span><br/>
                 <span class="H3b">
                     {{v.tx4}}{{v.tx3}}
                 </span>
             </div>
         </el-col>
     </el-row>

     <el-row>
            <el-col :span="24">
                <div class="Bt1">
                     锤子
                </div>
            </el-col>
     </el-row>

      <el-row>
         <el-col v-for="v in Cz1" :key="v.key" :xs="24" :sm="12" :md="6">
             <div class="Tui">
                 <div class="Tui1">
                      <img width="100%" height="300px" :src="v.img" />
                 </div>
                 <span>
                      {{v.tx1}}
                 </span><br/>
                 <span class="H2b">
                     {{v.tx2}}
                 </span><br/>
                 <span class="H3b">
                     {{v.tx4}}{{v.tx3}}
                 </span>
             </div>
         </el-col>
     </el-row>

      <el-row>
            <el-col :span="24">
                <div class="Bt1">
                     苹果
                </div>
            </el-col>
     </el-row>

      <el-row>
         <el-col v-for="v in iP" :key="v.key" :xs="24" :sm="12" :md="6">
             <div class="Tui">
                 <div class="Tui1">
                      <img width="100%" height="300px" :src="v.img" />
                 </div>
                 <span>
                      {{v.tx1}}
                 </span><br/>
                 <span class="H2b">
                     {{v.tx2}}
                 </span><br/>
                 <span class="H3b">
                     {{v.tx4}}{{v.tx3}}
                 </span>
             </div>
         </el-col>
     </el-row>
     
     <el-row>
            <el-col :span="24">
                <div class="Bt">
                    科技资讯
                </div>
            </el-col>
    </el-row>

    <el-row>
        <el-col v-for="v in Wm" :key="v.key"  :xs="24" :sm="12" :md="8">
            <div class="WB">
                <img width="100%" height="220px" :src="v.img" />
                <div class="kJ1">
                    {{v.tx}}<br/>
                    {{v.tx1}}
                </div>
                <div class="kJ2">
                   {{v.tx3}}
                </div>
            </div>
        </el-col>
    </el-row>
  <div class="Topa"></div>
    </div>
</template>

<script>
export default {
    data(){
       return{
           Img:[],
           Lx:[],
           Xlun:[],
           xm:[],
           Cz1:[],
           iP:[],
           Wm:[],
       }
    },
    created(){
           let $this=this
           this.axios({
                  url:"/Qdindex/Lun",
                  method:"post"
            }).then(function(rst){
                  console.log($this.Img=rst.data.img)
                  console.log($this.Lx=rst.data.Lx)
            }),
       


            this.axios({
                  url:"/shopping",
                  method:"post"
            }).then(function(rst){
                console.log($this.Xlun=rst.data.Mz)
                console.log($this.xm=rst.data.Ui)
                console.log($this.Cz1=rst.data.Cz1)
                console.log($this.iP=rst.data.iP)
            })

            this.axios({
                  url:"/Ydindex",
                  method:"post"
            }).then(function(rst){
                console.log($this.Wm=rst.data.Wbl)
            })
            
   
    },
}
</script>
<style lang="scss" scoped>
.Topa{
    width: 100%;
    height:50px;
}
.kJ{
    width:150px;
    height:170px;
    margin:0px auto;
    margin-top: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px silver;

}
.WB:hover{
    box-shadow: 0px 0px 20px silver;
}
.WB{
    width:95%;
    height:300PX;
    cursor: pointer;
}
.Bt1{
    width: 100%;
    height:45px;
    text-align: left;
    font:20px "微软雅体";
    line-height: 45px;
    border-bottom:1px #DCDFE6 solid; 
}
.Tui:hover{
    box-shadow: #909399 0px 0px 10px;
}
.Tui{
    width: 99%;
    height:380px;
    cursor:pointer;
    margin-top:20px;
    text-align: center;
    font: 12px "微软雅体";
    background-color: #E4E7ED;
    .Tui1{
    width: 100%;
    height: 300px;
}
.H2b{
    color: #909399
}
.H3b{
    font: 16px "微软雅体";
    color: #F56C6C;
}
}
.sx312{
    width: 98%;
    height: 25PX;
    font: 14px "微软雅体";
    text-align: center;
    border:1px solid #f1f1f1; 
    border-right:6px  #45c2f6 solid; 
}
.sx12{
    width: 98%;
    height:50px;
    text-align: center;
    line-height: 25px;
    border:1px solid #f1f1f1; 
    border-right:6px  #45c2f6 solid; 
}

.sx311{
    width: 100%;
    height: 200PX;
    img{
        width: 100%;
        height: 200px;
    }
    cursor: pointer;
}
.sx31{
    width: 100%;
    height:225px;
}
.sx1{
    width: 100%;
    height:400px;
}
.sx1>img{
    width: 100%;
    height:400px;
}
.Sx{
    width: 100%;
    height: 450px;
    margin-left: 20%;
    margin-top:10px;
}
.Sx:hover{
    color: #45c2f6;
}
.Bt{
    width: 100%;
    text-align: center;
    font: 25px "微软雅体";
    font-weight: bold;
    span{
        color: #45c2f6
    }
    margin-top: 20px;
}
.el-row{
    width: 80%;
    margin: 0px auto;
}
.Lx2{
    margin-top: 10px;
}
.Lx3{
font-family: 'Lato',sans-serif;
font-weight: 400;
font-size: 13px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
}
.LX1{
    width: 100%;
    text-align: center;
    height:100PX;
    font:60px "微软雅体";
    line-height:150PX;
   
}
.Lx:hover{
    background-color:#45c2f6;
    color: white !important;
    box-shadow: 0px 0px 10px silver;
}
.Lx{
    width: 100%;
    height: 200px;
    cursor: pointer;
    text-align: center;
    margin-top: 10px;
    border-bottom: 1px #DCDFE6 solid;
    border-top: 1px #DCDFE6 solid;
}
@media (max-width:992px ){
     .Sx{
    margin-left: 10%;
}
.Sx:last-child{
     margin-left: 0%;
 }
 .hj{
     height: 300px  !important;
       overflow: hidden;
 }
}
@media (max-width:769px){
.Sx{
    margin-left: 0%;
}
 .hj{
     height: 200px  !important;
     overflow: hidden;
 }
}
@media (max-width:400px){

}
</style>
