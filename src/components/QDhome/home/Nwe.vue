<template>
    <div>
       

        <el-carousel :height="bannerHeight+'px'">
            <el-carousel-item v-for="(item,index) in images" :key="index" class="carousel_img">
                <img ref="bannerHeight" @load="imgLoad" :src="item.src" />
            </el-carousel-item>
        </el-carousel>
       <el-row class="el1">
           <el-col :span="16">
                  <div class="Ub1">
                      <div class="Ub12">
                              全部
                      </div>
                      <div class="Ub12">
                            业内资讯
                      </div>
                      <div class="Ub12">
                            技术评测
                      </div>
                  </div>
           </el-col>
           <el-col :span="8">
                 <el-breadcrumb separator="/">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item>新闻资讯</el-breadcrumb-item>
                </el-breadcrumb>        
           </el-col>
       </el-row> 

      <div class="Nwe" v-for="v in New" :key="v.key">
          <el-row>
              <el-col :xs="24" :sm="8" :md="6">
                   <div class="Nwe1">
                       <img width="99%" height="250px" :src="v.img"  />
                   </div>
              </el-col>
              <el-col :xs="24" :sm="16" :md="18">
                   <div class="Nwe2">
                        <div class="Nwe21">{{v.Tx1}}</div>
                        <div class="Nwe22">{{v.Tx2}}</div>
                        <div class="Nwe23">查看全文</div>
                   </div>
              </el-col>
          </el-row>
      </div>

     <el-row>
        <el-col :span="24">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1"
                class="paging">
            </el-pagination>
      </el-col>
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
            bannerHeight:'',
            activeName: 'second',
            New:[],
        }
    },
    methods:{
        imgLoad(){
            this.$nextTick(()=>{
                this.bannerHeight = this.$refs.bannerHeight[0].height
                console.log(this.$refs.bannerHeight[0].height);
            })
        },

    },
    created(){
        let $this=this

        this.axios({
            url:"/Nwe",
            method:"post"
        }).then(function(rst){
            console.log($this.New=rst.data.Tx)
        })
    }
}
</script>

<style lang="scss" scoped>
.paging{
    margin-left:45%
}
.Nwe{
    width:80%;
    height: 250px;
    margin: 0px auto;
    margin-top: 20px;
}
.Nwe23:hover{
    color: white;
    background-color: #45c2f6;
}
.Nwe23{
    width:90px;
    height:30px;
    border: #45c2f6 1px solid;
    color: #45c2f6;
    font: 14px "微软雅体";
    text-align: center;
    line-height: 30px;
    margin-left: 2%;
    cursor: pointer;
}
.Nwe22{
    width: 100%;
    height:190px;
    font: 14px "微软雅体";
    overflow: hidden;
}
.Nwe21{
    width: 100%;
    height:30px;
    font: 16px "微软雅体";
    line-height:30px;
    font-weight: bold;
}
  .Nwe1{
        width: 100%;
        height: 250px;
    }
    .Nwe2{
         width: 100%;
         height: 250px;
    }
    /*轮播图开始*/
    .carousel_img img{
        width: 100%;
    }
    /*轮播图结束*/
    .el1{
  width:90%;
  margin-left:10%;
  margin-right:10%;
}
    .Ub1{
       width:100%;
       height:30px;
       margin-top:10px;
    }
    .Ub12{
        width:80px;
        height:30px;
        float: left;
        font: 14px "微软雅体";
        line-height: 30px;
        text-align: center;
        cursor: pointer;
    }
    .Ub12:first-child{
       color: #ffffff;
       background-color: #45c2f6;
    }
    .el-breadcrumb{
        width: 100%;
         height:30px;
         line-height: 30px;
         text-align: right;
        margin-top:10px; 
    }
        @media (max-width:768px){
          .Nwe2{
              height:150px;
          }
          .Nwe22{
              height:80px;
          }
        }


</style>
