<template>
    <div>
        <el-header>1</el-header>

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
                                <!-- <img src="@/assets/img/main-img1.jpg" /> -->
                            </figure>
                            <div class="main-text1">
                                <h5>iPhone 8</h5>
                                <span>￥4399.00元</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="main-div2">
                        <div>
                            <figure class="main-img2">
                                <!-- <img src="@/assets/img/main-img2.jpg" /> -->
                            </figure>
                            <div class="main-text2">
                                <h5>iPhone 8 Plus</h5>
                                <span>￥5399.00元</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="main-div3">
                        <div>
                            <figure class="main-img3">
                                <!-- <img src="@/assets/img/main-img3.jpg" /> -->
                            </figure>
                            <div class="main-text3">
                                <h5>iPhone x</h5>
                                <span>￥7100.00元</span>
                                <span>炎炎八月，愈发精彩。iPhone X，你好未来。</span>
                            </div>
                        </div>
                    </el-col>

                    <el-col :span="8" class="main-div4">
                        <div>
                            <figure class="main-img4">
                                <!-- <img src="@/assets/img/main-img4.png" /> -->
                            </figure>
                            <div class="main-text4">
                                <h5>iPhone 8</h5>
                                <span>￥4399.00元</span>
                                <span>iPad Pro不只能做到，还能做到更好。</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="main-div5">
                        <div>
                            <figure class="main-img5">
                                <!-- <img src="@/assets/img/main-img5.jpg" /> -->
                            </figure>
                            <div class="main-text5">
                                <h5>iPhone 8 Plus</h5>
                                <span>￥5399.00元</span>
                                <span>三个圆环，圆一个梦</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="main-div6">
                        <div>
                            <figure class="main-img6">
                                <!-- <img src="@/assets/img/main-img6.jpg" /> -->
                            </figure>
                            <div class="main-text6">
                                <h5>iPhone x</h5>
                                <span>￥7100.00元</span>
                                <span>MacBook Pro更强劲，更专业的强劲。</span>
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

        <el-footer class="footer">
            <el-row>
                <el-col class="footer-left" :span="3"></el-col>
                <el-col class="footer-center" :span="18">
                    <div>
                        <h5>小米专区</h5>
                        <ul>
                            <li>手机</li>
                            <li>笔记本</li>
                        </ul>
                    </div>

                    <div>
                        <h5>魅族专区</h5>
                        <ul>
                            <li>手机</li>
                            <li>声学</li>
                        </ul>
                    </div>

                    <div>
                        <h5>锤子专区</h5>
                        <ul>
                            <li>手机</li>
                            <li>坚果TNT</li>
                        </ul>
                    </div>

                    <div>
                        <h5>苹果专区</h5>
                        <ul>
                            <li>iPhone</li>
                            <li>wacth</li>
                            <li>ipad</li>
                            <li>Mac</li>
                        </ul>
                    </div>

                    <div>
                        <h5>新闻资讯</h5>
                        <ul>
                            <li>业内资讯</li>
                            <li>技术评测</li>
                        </ul>
                    </div>

                    <div>
                        <h5>联系我们</h5>
                        <ul>
                            <li>客户热线</li>
                            <li>123-456-789</li>
                            <li>响应时间</li>
                            <li>每天9:00~24:00</li>
                        </ul>
                    </div>
                </el-col>
                <el-col class="footer-right" :span="3"></el-col>
            </el-row>

            <div class="footer-copyright">
                <p>我的网站 版权所有 2008-2014 湘ICP备8888888</p>
                <p>本站内容、图片、视频为网站模板演示数据，如有涉及侵犯版权，请联系我们提供书面反馈，我们核实后会立即删除。</p>
                <p>Powered by MetInfo 6.1.3 ©2008-2019  MetInfo Inc.</p>
            </div>
        </el-footer>

        
    </div>
</template>

<script>
export default {
    data (){
        return {
            // images:[
            //     {
            //         src:require('../../assets/img/iphone-1.jpg') 
            //     },
            //     {
            //         src:require('../../assets/img/iphone-2.jpg')
            //     },
            //     {
            //         src:require('../../assets/img/iphone-1.jpg')
            //     },
            //     {
            //         src:require('../../assets/img/iphone-2.jpg')
            //     }
            // ],
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

<style>
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
    }
    .footer-center div ul li{
        list-style: none;
        font-size: 12px;
        padding: 5px 0px;
    }
    .footer-center div h5{
        height: 40px;
        line-height: 40px;
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
