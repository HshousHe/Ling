<template>
    <div>
       

        <el-carousel :height="bannerHeight+'px'">
            <el-carousel-item v-for="(item,index) in images" :key="index" class="carousel_img">
                <img ref="bannerHeight" @load="imgLoad" :src="item.src" />
            </el-carousel-item>
        </el-carousel>

        <div class="row1">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="关于我们" name="first">
                       <el-row>
                           <el-col :md="8" :xs="24" :sm="8">
                               <div class="Img"><img width="100%" height="280px" src="../../../assets/img/Gyu.jpg" /></div>
                           </el-col>
                           <el-col :md="16" :xs="24" :sm="16">
                               <div class="Img Im">
                                   <span>让每个人都能享受科技的乐趣</span>
                                   <p>
                                      凌云尚购正式成立于2018年4月，是一家专注于高端智能手机、电子产品出售的创新型科技企业。
                                      “让每个人都能享受科技的乐趣”是凌云尚购的愿景。凌云尚购应用了互联网开发模式，用极客精神做销售，
                                      用互联网模式干掉中间环节，致力于让全球每个人，都能享用来自中国的优质科技产品。 
                                   </p>
                               </div>
                           </el-col>
                           <el-col :span="24">
                               <div class="IN">HISTORY</div>
                           </el-col>
                           <el-col :span="24">
                              <div class="In11">
                                 <div class="In1">品质至上</div>
                                 <div class="In1">原装正品 全国联保 假一罚十</div>
                              </div> 
                              <div class="In11">
                                 <div class="In1">服务至尚</div>
                                 <div class="In1">服务至尚为您提供上帝般的服务</div>
                              </div>
                              <div class="In11">
                                 <div class="In1">物流至闪</div>
                                 <div class="In1">顺丰包邮，快如闪电</div>
                              </div>
                              <div class="In11">
                                 <div class="In1">优惠至山</div>
                                 <div class="In1">独家优惠，打折多多</div>
                              </div>
                           </el-col>
                            <el-col :span="24">
                               <div class="IN">PRESENT</div>
                           </el-col>
                       </el-row> 
                    </el-tab-pane>
                    <el-tab-pane label="联系我们" name="second">
                        <el-row>
                            <el-col :md="12" :xs="24" :sm="12">
                                 <div class="Bf">
                                      <div class="Bf1">联系表单</div>
                                        <el-select v-model="value4" clearable placeholder="请选择">
                                            <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                        <br/> <br/>
                                       <el-input v-model="input" placeholder="姓名"></el-input>
                                        <br/> <br/>
                                       <el-input v-model="input1" placeholder="联系电话"></el-input>
                                        <br/> <br/>
                                       <el-input v-model="input2" type="email" placeholder="E-mail"></el-input>
                                        <br/> <br/>
                                       <el-input v-model="input3" placeholder="详细地址 "></el-input>
                                       <br/> <br/>
                                       <el-input
                                        type="textarea"
                                        :autosize="{ minRows: 4, maxRows:8}"
                                        placeholder="信息描述"
                                        v-model="textarea2">
                                        </el-input>
                                 </div>
                            </el-col>
                            <el-col :md="12" :xs="24" :sm="12">
                                 <div class="Bf">
                                      <div class="Bf1">联系我们</div>
                                        <div class="Bf2">
                                            <span><i class="el-icon-location-outline"></i>地址：湖南长沙市洋湖总部经济区</span><br/>
                                            <span><i class="el-icon-message"></i>地址：湖南长沙市洋湖总部经济区</span><br/>
                                            <span><i class="el-icon-phone-outline"></i>地址：湖南长沙市洋湖总部经济区</span>
                                        </div>
                                 </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
        </div>   

    </div>
</template>

<script>
export default {
    data (){
        return {
            images:[
                {
                    src:require('../../../assets/img/iphone-1.jpg') 
                },
                {
                    src:require('../../../assets/img/iphone-2.jpg')
                },
                {
                    src:require('../../../assets/img/iphone-1.jpg')
                },
                {
                    src:require('../../../assets/img/iphone-2.jpg')
                }
            ],
            bannerHeight:'',
            activeName: 'second',
            New:[],
            activeName: 'second',
            input:"",
            input1:"",
            input2:"",
            input3:"",
            textarea2:"",
            options: [{
            value: '选项1',
            label: '反馈主题'
            }, {
            value: '选项2',
            label: '索取资料'
            }, {
            value: '选项3',
            label: '产品购买'
            }, {
            value: '选项4',
            label: '商务合作'
            }, {
            value: '选项5',
            label: '其他反馈'
            }],
            value4: '',
      }
    },
    methods:{
        imgLoad(){
            this.$nextTick(()=>{
                this.bannerHeight = this.$refs.bannerHeight[0].height
                console.log(this.$refs.bannerHeight[0].height);
            })
        },
          handleClick(tab, event) {
        console.log(tab, event);
      }

    },
    created(){
        let $this=this

    }
}
</script>

<style lang="scss" scoped>
.el-select{
    width: 100%;
}
.Bf1{
    width: 100%;
    height: 45px;
    font: 22px "微软雅体";
    font-weight: bold;
}
.Bf2{
    width:400px;
    height:300px;
    background-color:#45c2f6;
    color: #ffffff;  
    margin-left: 10%;
    line-height:50px;
    span{
        margin-left: 10%;
    }
}
    
.Bf{
    width:100%;
    height: 480px;
}
.In11{
    width: 60%;
    margin: 0px auto;
}
.In1{
    width:50%;
    height:40px;
    float: left;
    text-align: center;
    font: 24px "微软雅体";
    line-height: 40px;
    box-shadow: 0px 0px 3px silver;
    margin-top:20px;
}
.In1:last-child{
    width:48%;
    font: 16px "微软雅体";
    line-height: 40px;
     box-shadow: 0px 0px 3px silver;
    margin-left:2%;
      color: rgb(117, 117, 117);
}
.IN{
    width: 100%;
    height: 44px;
    line-height:44px;
    text-align: center;
}
    .Img{
        width:99%;
        height:280px;
        span:first-child{
          font-size: 28px;
            margin: 0px;
            padding: 0px;
            color: rgb(51, 51, 51);
            text-align: center;
        }
         p{
           margin-top: 1em;
           margin-bottom: 1em;
           color: rgb(117, 117, 117);
          line-height: 1.7;
          text-align: center;
        }
    }
    .Im{
        margin-left: 2%;
    }
    /*轮播图开始*/
    .carousel_img img{
        width: 100%;
    }
    .row1{
        width: 78%;
        margin: 0px auto;
    }

        @media (max-width:768px){
         .In1{
             width: 100%;
             float:none;
         }
         .In1:last-child{
            width: 100%;
            font: 16px "微软雅体";
            line-height: 40px;
            box-shadow: 0px 0px 3px silver;
            margin-left:2%;
            color: rgb(117, 117, 117);
        }
        }
   @media (max-width:400px){
         .In1{
             width: 100%;
             float:none;
         }
         .In1:last-child{
            width: 100%;
            font: 12px "微软雅体";
        }
        .Im:last-child{
            height:400px;
        }
        .Bf2{
            font: 12px "微软雅体";
            line-height:80px;
            margin-left: -20%;
        }
        }

</style>
