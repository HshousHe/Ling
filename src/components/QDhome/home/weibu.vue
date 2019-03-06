<template>
    <div>
     
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
           data(){
               return{
                   
               }
           },
           methods:{
               
           }
}
</script>

<style scoped>
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


