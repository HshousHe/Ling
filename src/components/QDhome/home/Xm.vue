<template>
    <div>
       

        <el-carousel :height="bannerHeight+'px'">
            <el-carousel-item v-for="(item,index) in images" :key="index" class="carousel_img">
                <img ref="bannerHeight" @load="imgLoad" :src="item.src" />
            </el-carousel-item>
        </el-carousel>

        <el-row>
            <el-col :span="3" class="grid-content-left"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="18" id="tire">
                <el-row class="clearfix">
                    <el-col :span="15" id="subcolumn_nav_left">
                        <div>
                            <el-tabs class="subcolumn_nav">
                                <el-tab-pane label="-全部"></el-tab-pane>
                                <el-tab-pane label="-iPhone"></el-tab-pane>
                                <el-tab-pane label="-wacth"></el-tab-pane>
                                <el-tab-pane label="-ipad"></el-tab-pane>
                                <el-tab-pane label="-Mac"></el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-col>
                    <el-col :span="9" id="subcolumn-nav-location-right">
                        <div class="subcolumn-nav-location">
                            您的位置： 网站首页 >  苹果专区 >
                        </div>
                    </el-col>
                </el-row>

                <el-row class="type-order">
                    <el-col :span="4" id="attr-name-left">
                        <div class="attr-name">
                            类型：
                        </div>
                    </el-col>
                    <el-col :span="20" id="type-order-attr-right">
                        <div class="type-order-attr">
                            <el-tabs>
                                <el-tab-pane label="全部"></el-tab-pane>
                                <el-tab-pane label="手机"></el-tab-pane>
                                <el-tab-pane label="笔记本"></el-tab-pane>
                                <el-tab-pane label="声学"></el-tab-pane>
                                <el-tab-pane label="手表"></el-tab-pane>
                                <el-tab-pane label="平板"></el-tab-pane>
                                <el-tab-pane label="显示设备"></el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-col>
                </el-row>

                <el-row class="order">
                    <el-col class="ShaiXuan">
                        <el-dropdown trigger="click" class="pull-down-menu">
                            <span class="el-dropdown-link">
                                推荐<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                        <el-dropdown trigger="click" class="pull-down-menu">
                            <span class="el-dropdown-link">
                                热门<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                        <el-dropdown trigger="click" class="pull-down-menu">
                            <span class="el-dropdown-link">
                                最新<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                        <el-dropdown trigger="click" class="pull-down-menu">
                            <span class="el-dropdown-link">
                                销量<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                            
                        
                    <el-col class="jiage">
                        价格：<input />-<input /><el-button  type="primary" size="mini">确定</el-button>
                    </el-col>
                </el-row>

                <el-row class="main_sj">
                    <el-col :span="8" class="main-div1">
                        <div>
                            <figure class="main-img1">
                                <img src="../../../assets/img/M1.jpg" />
                            </figure>
                            <div class="main-text1">
                                <h5>小米MIX 2S</h5>
                                <span>￥2999.00元</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="main-div2">
                        <div>
                            <figure class="main-img2">
                                <img src="../../../assets/img/M2.png" />
                            </figure>
                            <div class="main-text2">
                                <h5>15.6寸游戏本 八代增强版</h5>
                                <span>￥6699.00元</span>
                                <span>第八代酷睿处理器 </span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="main-div3">
                        <div>
                            <figure class="main-img3">
                                <img src="../../../assets/img/M3.jpg" />
                            </figure>
                            <div class="main-text3">
                                <h5>iPhone x</h5>
                                <span>￥7100.00元</span>
                                <span>「冷酷」散热系统 / "龙卷风"</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="main-div5">
                        <div>
                            <figure class="main-img5">
                                <img src="../../../assets/img/M5.jpg" />
                            </figure>
                            <div class="main-text5">
                                <h5>小米笔记本Air 13.3 四核增强</h5>
                                <span>￥4999.00元</span>
                                <span>带独立显卡的轻薄笔记本 </span>
                            </div>
                        </div>
                    </el-col>
     

                    <el-col :span="24">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1"
                            class="paging">
                        </el-pagination>
                    </el-col>
                </el-row>
            </el-col>

            <el-col :span="3" class="grid-content-right"><div class="grid-content bg-purple"></div></el-col>
        </el-row>


        
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
            bannerHeight:''
        }
    },
    methods:{
        imgLoad(){
            this.$nextTick(()=>{
                this.bannerHeight = this.$refs.bannerHeight[0].height
                console.log(this.$refs.bannerHeight[0].height);
            })
        }
    },
    mounted(){
        this.imgLoad();
        window.addEventListener('resize',()=>{
            this.bannerHeight = this.$refs.bannerHeight[0].height
            this.imgLoad();
        },false)
    }
}
</script>

<style scoped>
    /*轮播图开始*/
    .carousel_img img{
        width: 100%;
    }
    /*轮播图结束*/

    /*手机导航栏开始*/
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .el-tabs__item{
        font-size: 12px !important;
    }
    .el-tabs__nav-wrap::after{
        height: 0px !important;
    }
    .subcolumn-nav-location{
        font-size: 12px;
        text-align: right;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
    }
    .subcolumn_nav{
        height: 40px;
    }
    /*手机导航栏结束*/

    /*类型开始*/
    .clearfix,.type-order{
        margin-bottom: 10px;
    }
    .attr-name{
        background-color: #e5e5e5;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        font-size: 12px;
        padding-left: 15px;
    }
    .type-order-attr{
        background-color: #fafafa;
        height: 40px;
        padding-left: 15px;
    }
    /*类型结束*/

    /*商品筛选开始*/
    .el-dropdown-link,.el-dropdown-menu__item{
        font-size: 12px;
    }
    .pull-down-menu{
        width: 70px;
    }
    .ShaiXuan{
        width: 300px;
        float: left;
    }
    .jiage{
        font-size: 12px;
        width: 320px;
        float: left;
    }
    .jiage input{
        width: 80px;
        height: 24px;
    }
    .jiage .el-button{
        height: 30px;
        margin-left: 5px;
    }
    .order{
        line-height: 40px;
        height: 40px;
        padding-left: 10px;
    }
    /*商品筛选结束*/

    /*手机商品开始*/
    .main_sj{
        height: 700px;
        margin-top: 80px;
    }
    .main-img1 img,.main-img2 img,.main-img3 img,
    .main-img4 img,.main-img5 img,.main-img6 img{
        width: 100%;
    }
    .main-text1,.main-text2,.main-text3,
    .main-text4,.main-text5,.main-text6{
        border: 1px solid #f1f1f1;
        padding-bottom: 20px;
        padding-top: 18px;
        padding-left: 25px;
        position: relative;
        margin-bottom: 50px;
        border-right: 10px solid #45c2f6;
    }
    .main-text1 span,
    .main-text2 span:nth-of-type(1),
    .main-text3 span:nth-of-type(1),
    .main-text4 span:nth-of-type(1),
    .main-text5 span:nth-of-type(1),
    .main-text6 span:nth-of-type(1),
    .main-text2 span:nth-of-type(2),
    .main-text3 span:nth-of-type(2),
    .main-text4 span:nth-of-type(2),
    .main-text5 span:nth-of-type(2),
    .main-text6 span:nth-of-type(2){
        font-size: 12px;
        font-weight: bold;
        display: block;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
        width: 50%;
        float: left;
    }
    .main-text2 span:nth-of-type(2),.main-text3 span:nth-of-type(2),
    .main-text4 span:nth-of-type(2),.main-text5 span:nth-of-type(2),
    .main-text6 span:nth-of-type(2){
        color: #757575;
    }
    .main_sj h5{
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
    }
    .paging{
        text-align: center;
    }
    /*手机商品结束*/

    /*尾部开始*/
    .footer{
        padding: 0px;
    }
    .footer-left,.footer-center,.footer-right{
        height: 40px;
        background-color: #45c2f6;
        border-radius: 0px;
    }
    .footer-center div{
        float: left;
        width: 140px;
    }
    .footer-center div:last-child{
        float: right;
    } .footer-center div ul {
        margin-top:-30px;
    }
    .footer-center div ul li{
        list-style: none;
        font-size: 12px;
        padding: 5px 0px;
    }
    .footer-center div h5{
        height: 40px;
        line-height:0px;
        color: #ffffff;
    }
    .footer-copyright{
        height: 150px;
        background-color: #f5f5f5;
        margin-top: 120px;
        font-size: 12px;
        text-align: center;
        line-height: 25px;
        padding: 0px 10px;
    }
    .footer-copyright p:nth-child(1){
        display: inline-block;
        margin-top: 50px;
    }
    /*尾部结束*/

    /*媒体查询开始*/
    @media all and (max-width: 741px) {
         .footer-center div h5{
        line-height:40px;
    }
        #subcolumn-nav-location-right,#subcolumn_nav_left{
            width: 100%;
        }
        .subcolumn-nav-location{
            text-align: left;
        }
        .grid-content-left,.grid-content-right{
            width: 0%;
        }
        #tire{
            width: 100%;
        }
        .clearfix{
            border-bottom: 1px solid #f0f2f5;
            padding-left: 10px;
        }
    }
    @media all and (max-width: 1160px) {
        .footer-center div:last-child{
            width: 100%;
        }
        .footer-center div:last-child h5{
            background-color: #45c2f6;
        }
        .footer-center div:last-child ul,
        .footer-center div:last-child h5{
            padding-left: 20px;
        }
        .footer-copyright{
            margin-top: 275px;
        }
    }
    @media all and (max-width: 968px) {
        .main-div1,.main-div2,.main-div3,
        .main-div4,.main-div5,.main-div6{
            width: 50%;
        }
        .footer-center div:nth-of-type(5){
            width: 50%;
        }
        .footer-center div:last-child{
            width: 50%;
        }
        .footer-center div:nth-of-type(5) ul,
        .footer-center div:nth-of-type(5) h5,
        .footer-center div:nth-of-type(4) ul,
        .footer-center div:nth-of-type(4) h5,
        .footer-center div:nth-of-type(3) ul,
        .footer-center div:nth-of-type(3) h5,
        .footer-center div:nth-of-type(2) ul,
        .footer-center div:nth-of-type(2) h5,
        .footer-center div:nth-of-type(1) ul,
        .footer-center div:nth-of-type(1) h5{
            padding-left: 20px;
        }
        .footer-center div:nth-of-type(5) h5,
        .footer-center div:nth-of-type(4) h5,
        .footer-center div:nth-of-type(3) h5,
        .footer-center div:nth-of-type(2) h5,
        .footer-center div:nth-of-type(1) h5{
            background-color: #45c2f6;
        }
        .footer-center div:nth-of-type(1),
        .footer-center div:nth-of-type(2),
        .footer-center div:nth-of-type(3),
        .footer-center div:nth-of-type(4){
            width: 50%;
        }
        .footer-copyright{
            margin-top: 365px;
        }
    }
    @media all and (max-width: 600px) {
        .main-div1,.main-div2,.main-div3,
        .main-div4,.main-div5,.main-div6{
            width: 90%;
        }
        .main-text1,.main-text2,.main-text3,
        .main-text4,.main-text5,.main-text6{
            margin: 0px 10px;
        }
        .paging{
            margin-top: 30px;
        }
    }
    @media all and (max-width: 400px) {
       #attr-name-left,#type-order-attr-right{
            width: 100%;
        }
        .ShaiXuan{
            width: 100%;
        }
        .jiage{
            font-size: 12px;
            width: 100%;
        }
        .main-div1,.main-div2,.main-div3,
        .main-div4,.main-div5,.main-div6{
            width: 100%;
        }
        .main-text1,.main-text2,.main-text3,
        .main-text4,.main-text5,.main-text6{
            margin: 0px 10px;
        }
        .paging{
            margin-top: 30px;
        }
    }
    
</style>
