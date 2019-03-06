<template>
    <div>
        <van-tabs v-model="active" swipeable>
            <van-tab title="魅族">
                <div class="op">
                      <el-row>
                           <el-col span="24">
                               <img width="100%" height="150px" src="../../../../static/H2.jpg" />
                           </el-col>
                      </el-row>

                       <van-row>
                            <van-col span="6" v-for="v in shpping" :key="v.key">
                                <div class="MI">
                                    <div class="MI1">
                                        <img width="100%" height="70px"  :src="v.img" />
                                    </div>
                                    <DIV class="MI2">
                                       {{v.name}}
                                    </DIV>
                                </div>
                            </van-col>
                    </van-row>

                    <van-row>
                        <van-col span="12" v-for="v in Mz" :key="v.key">
                             <div class="Tbai">
                                <div class="Tbai1">
                                    <img width="100%" height="170px" :src="v.img" />
                                    <span class="goods-name">{{v.tx1}}</span><br/>
                                    <span class="goods-desc">{{v.tx2}}</span><br/>
                                    <span class="goods-price"> <i>{{v.tx3}}</i><em>{{v.tx4}}</em></span>
                                    <div class="Gwu">
                                        <div class="Gu1" @click="ADdsop(v.img,v.tx1,v.tx4)">加入购物车</div>
                                        <div class="Gu1">即可购买</div>
                                    </div>
                                </div>
                             </div>
                        </van-col>
                    </van-row>
                </div>
            </van-tab>
            <!-- 苹果 -->
            <van-tab title="小米"><div class="op">
                     <el-row>
                           <el-col span="24">
                               <img width="100%" height="150px" src="../../../../static/H1.jpg" />
                           </el-col>
                      </el-row>

                      <van-row>
                          <van-col span="8" v-for="v in Ft" :key="v.key">
                               <div class="Io">
                                    <div class="I1">
                                        <img width="100%" height="110px" :src="v.img" />
                                    </div>
                               </div>
                          </van-col>
                      </van-row>

                    <van-row>
                        <van-col span="12" v-for="v in Ui" :key="v.key">
                             <div class="Tbai">
                                <div class="Tbai1">
                                    <img width="100%" height="170px" :src="v.img" />
                                    <span class="goods-name">{{v.tx1}}</span><br/>
                                    <span class="goods-desc">{{v.tx2}}</span><br/>
                                    <span class="goods-price"> <i>{{v.tx3}}</i><em>{{v.tx4}}</em></span>
                                    <div class="Gwu">
                                        <div class="Gu1" @click="ADdsop(v.img,v.tx1,v.tx4)">加入购物车</div>
                                        <div class="Gu1">即可购买</div>
                                    </div>
                                </div>
                             </div>
                        </van-col>
                    </van-row>
                     
            </div></van-tab>
             <!-- 锤子 -->
            <van-tab title="锤子">
                <div class="op">
                      <el-row>
                           <el-col span="24">
                               <img width="100%" height="150px" src="../../../../static/lun3.jpg" />
                           </el-col>
                      </el-row>

                        <van-row>
                          <van-col span="8" v-for="v in Cz" :key="v.key">
                               <div class="Io">
                                    <div class="I1">
                                        <img width="100%" height="110px" :src="v.img" />
                                    </div>
                               </div>
                          </van-col>
                      </van-row>

                        <van-row>
                        <van-col span="12" v-for="v in Cz1" :key="v.key">
                             <div class="Tbai">
                                <div class="Tbai1">
                                    <img width="100%" height="170px" :src="v.img" />
                                    <span class="goods-name">{{v.tx1}}</span><br/>
                                    <span class="goods-desc">{{v.tx2}}</span><br/>
                                    <span class="goods-price"> <i>{{v.tx3}}</i><em>{{v.tx4}}</em></span>
                                    <div class="Gwu">
                                        <div class="Gu1" @click="ADdsop(v.img,v.tx1,v.tx4)">加入购物车</div>
                                        <div class="Gu1">即可购买</div>
                                    </div>
                                </div>
                             </div>
                        </van-col>
                    </van-row>
                </div>
            </van-tab>
            <!-- 小米 --> 
            <van-tab title="苹果">
                <div class="op">
                      <el-row>
                           <el-col span="24">
                               <img width="100%" height="150px" src="../../../../static/H3.jpg" />
                           </el-col>
                      </el-row>

                       <van-row>
                        <van-col span="12" v-for="v in iP" :key="v.key">
                             <div class="Tbai">
                                <div class="Tbai1">
                                    <img width="100%" height="170px" :src="v.img" />
                                    <span class="goods-name">{{v.tx1}}</span><br/>
                                    <span class="goods-desc">{{v.tx2}}</span><br/>
                                    <span class="goods-price"> <i>{{v.tx3}}</i><em>{{v.tx4}}</em></span>
                                    <div class="Gwu">
                                        <div class="Gu1" @click="ADdsop(v.img,v.tx1,v.tx4)">加入购物车</div>
                                        <div class="Gu1">即可购买</div>
                                    </div>
                                </div>
                             </div>
                        </van-col>
                    </van-row>

                </div>
            </van-tab>
      </van-tabs>
    </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const{mapState,mapGetters,mapMutations}=createNamespacedHelpers('us')
export default {
    data(){
        return{
             soping:[],
             active:0,
             shpping:[],
             Mz:[],
             Ft:[],
             Ui:[],
             Cz:[],
             Cz1:[],
             iP:[],
             Sop:[],
        }
    },
    methods:{
        ADdsop(i,o,p){
             this.Sop.push(Object({img:i,name:o,jia:p}))
             console.log(this.Sop)
               console.log( this.AddSOP(this.Sop))
        },
    ...mapMutations(["AddSOP"])  
    },
    created(){
        let $this=this
        this.axios({
            url:"/Ydindex",
            method:"post"
        }).then(function(rst){
            console.log($this.soping=rst.data.Soping)
        })
        this.axios({
            url:"/shopping",
            method:"post"
        }).then(function(rst){
            console.log($this.shpping=rst.data.sP)
            console.log($this.Mz=rst.data.Mz)
            console.log($this.Ft=rst.data.Mi1)
            console.log($this.Ui=rst.data.Ui)
            console.log($this.Cz=rst.data.Cz)
            console.log($this.Cz1=rst.data.Cz1)
            console.log($this.iP=rst.data.iP)
        })
    },
}
</script>

<style lang="scss" scoped>
.Io{
    width:100%;
    height:100px;
    margin-top:10px;
    .I1{
        width:120px;
        height: 100px;
        margin: 0px auto;
    }
}
.Tbai{
    width: 100%;
    height:250px;
    margin-top: 10px;
    cursor: pointer;
    .Tbai1{
        width:170px;
        height: 250px;
        font: 13px "微软雅体";
        margin: 0px auto;
        text-align: center;
        .goods-name {
            color: #333;
            margin-bottom: 0;
        }
        .goods-desc {
            color: #333;
            margin-bottom: 3px;
        }
        .goods-price {
            position: relative;
            display: inline-block;
            color: #c00;
        }
        .Gwu{
            width: 100%;
            height: 25px;
           .Gu1{
              width:50%;
              height: 25px;
              line-height: 25px;
              float: left;
              background-color: #E6A23C;
              color: white;
             }
               .Gu1:last-child{
                  background-color: #F56C6C;
             }
           }
        
    }
}
.MI1{
     width:80px;
     height:70px;
     margin: 0px auto;
     cursor: pointer;
}
.MI2{
    width: 80px;
    height: 15PX;
     margin: 0px auto;
     font: 11px "微软雅体";
     text-align: center;
     line-height: 15px;
    background-color: #409EFF;
    color: white;
}
.MI{
    width:100%;
    height:85px;
    margin-top: 10px;
}
.op{
    width: 100%;
}
</style>

